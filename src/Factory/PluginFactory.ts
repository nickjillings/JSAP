// This defines a master object for holding all the plugins and communicating
// This object will also handle creation and destruction of plugins
/*globals Promise, document, console, LinkedStore, Worker, window, XMLHttpRequest */
/*eslint-env browser */
/* jshint esversion:6 */

import { LinkedStore } from '../LinkedStore';
import { PluginAssetManager } from './PluginAssets/PluginAssetManager';
import { IPluginPrototype, IPluginPrototypeConstructor, PluginPrototype, SynthesiserPrototype } from "./PluginPrototype";
import { FeatureMap } from "./FeatureMap/index";
import { AudioPluginChainManager } from "./AudioPluginChainManager/index";
import { MidiSynthesiserHost } from "./MidiSynthesiserHost";
import { PluginUserInterfaceMessageHub } from "./PluginUserInterfaceMessageHub";
import { IPluginInstance } from './IPluginInstance';
import { IPluginHost } from './IPluginHost';
import { IBasePlugin } from '../BasePlugin/IBasePlugin';
import { isPluginInstance, PluginInstance } from './PluginInstance';
import { isMidiSynthesisInstance } from './MidiSynthesisInstance';

interface JSAPResourceObject {
    url: string
    test: () => boolean
    type: string
    returnObject: string
}

export class PluginFactory {
    private plugin_prototypes: IPluginPrototype<IPluginInstance<IPluginHost>,IPluginHost>[] = [];
    private audioPluginChainManagers: AudioPluginChainManager[] = []
    private synthesiserHosts: MidiSynthesiserHost[] = []
    private pluginsList: IPluginInstance<IPluginHost>[] = []
    private audioStartProgramTime: number 
    private audioStartContextTime: number
    private audioStarted = false
    private PluginGUI = new PluginUserInterfaceMessageHub(this);
    private stores: LinkedStore[] = []
    public SessionData = new LinkedStore("Session");
    public UserData = new LinkedStore("User");
    public FeatureMap = new FeatureMap(this);
    public pluginAssets = new PluginAssetManager(this);
    constructor(public context: AudioContext, private rootURL?: string) { }
    private async copyFactory(factory: PluginFactory, newcontext: AudioContext): Promise<PluginFactory> {
        const BFactory = new PluginFactory(newcontext, this.rootURL);
        for (const proto of this.plugin_prototypes) {
            await BFactory.addPrototype(proto.proto, proto.name, proto.version, proto.uniqueID);
        }
        BFactory.pluginAssets.importFromAssetLists(this.pluginAssets);
        return BFactory;
    }

    private pluginAudioStart(node, program_time: number, context_time: number) {
        node.start.call(node, program_time, context_time);
        node.parameters.getParameterNames().forEach(function (n) {
            var p = node.parameters.getParameterByName(n);
            if (p.enabled) {
                p.start(program_time, context_time);
            }
        });
    }

    private pluginAudioStop(node) {
        const ct = this.context.currentTime;
        node.stop.call(node, ct);
        node.parameters.getParameterNames().forEach(function (n) {
            var p = node.parameters.getParameterByName(n);
            if (p.enabled) {
                p.stop(ct);
            }
        });
    }

    private triggerAudioStart(program_time, context_time) {
        this.pluginsList.forEach((n) => {
            this.pluginAudioStart(n.node, program_time, context_time);
        });

    }

    private triggerAudioStop() {
        this.pluginsList.forEach((n) => {
            this.pluginAudioStop(n.node);
        });
    }

    public destroyFactory() {
        this.triggerAudioStop();
        for (const subFactory of Array.from(this.audioPluginChainManagers)) {
            this.destroyAudioPluginChainManager(subFactory);
        }
        for (const synthesiserHost of Array.from(this.synthesiserHosts)) {
            this.destroyMidiSynthesiserHost(synthesiserHost);
        }
        for (const plugin of Array.from(this.pluginsList)) {
            this.deletePlugin(plugin);
        }
        for (const prototype of Array.from(this.plugin_prototypes)) {
            this.deletePrototype(prototype);
        }

        this.pluginAssets.destroy();
    };

    public async loadPrototypeModule(resourceObject: JSAPResourceObject, mustModule=false) {
        let module;
        try {
            module = global.require(resourceObject.url);
            if (typeof module === "function") {
                return this.addPrototype(module, module.prototype.name, module.prototype.version, module.prototype.uniqueID);
            } else {
                throw new Error ("Is not a module plugin");
            }
        } catch (e) {
            if (mustModule === true) {
                throw new Error("Cannot load using modular systems");
            } else {
                console.warn("Could not load using modular systems");
                return this.loadPluginScript(resourceObject);
            }
        };
    };

    public async loadResource(resourceObject: JSAPResourceObject): Promise<IPluginPrototypeConstructor> {
        if (typeof resourceObject !== "object") {
            throw new Error("Error");
        }
        else if (typeof resourceObject.url !== "string") {
            throw new Error("resourceObject.url must be a string");
        }
        else if (typeof resourceObject.test !== "function") {
            throw new Error("resourceObject.test must be a function");
        }
        const response = resourceObject.test();
        if (response !== false && response !== true) {
            throw new Error("resourceObject.test must return true or false");
        }
        if (!resourceObject.type) {
            resourceObject.type = "javascript";
        }
        resourceObject.type = resourceObject.type.toLowerCase();
        switch (resourceObject.type) {
            case "javascript":
                if (!response) {
                    await this.loadResource(resourceObject);
                }
                if (typeof resourceObject.returnObject === "string") {
                    if (window.hasOwnProperty(resourceObject.returnObject)) {
                        return(window[resourceObject.returnObject]);
                    }
                }
                break;
            default:
                throw new Error("Invalid type " + String(resourceObject.type));
        }
    };

    public async loadPluginScript(resourceObject: JSAPResourceObject) {
        if (resourceObject) {
            if (typeof resourceObject.returnObject !== "string") {
                throw new Error("resourceObject.returnObject must be the name of the prototype function");
            }
            const plugin = await this.loadResource(resourceObject);
            return await this.addPrototype(plugin, plugin.prototype.name, plugin.prototype.version, plugin.prototype.uniqueID);
        }
    };

    public injectPrototype(prototypeExecutable: IBasePlugin, name: string, version: string, uniqueID: string) {
        if (typeof prototypeExecutable != "function") {
            throw ("Invalid executable function");
        }
        return this.addPrototype(prototypeExecutable, name, version, uniqueID);
    };

    public addPrototype(plugin_proto: IPluginPrototypeConstructor, name: string, version: string, uniqueID: string, hasMidiInput=false, hasMidiOutput=false): IPluginPrototype<IPluginInstance<IPluginHost>,IPluginHost> {
        if (typeof plugin_proto !== "function") {
            throw new Error("The Prototype must be a function!");
        }
        const testObj = {
            proto: plugin_proto,
            name,
            version,
            uniqueID
        };
        const obj = this.plugin_prototypes.find((e) => {
            let match = 0;
            for (const param in testObj) {
                if (e[param] === this[param]) {
                    match++;
                } else {
                    return false;
                }
            }
            return match === 4;
        });
        if (obj) {
            throw new Error("The plugin must be unique!");
        }
        if (hasMidiInput === false && hasMidiOutput === false) {
            const newPluginPrototpye = new PluginPrototype(plugin_proto, this, name, version, uniqueID);
            this.plugin_prototypes.push(newPluginPrototpye);
            return newPluginPrototpye;
        } else if (hasMidiInput === true && hasMidiOutput === false) {
            const newPluginPrototpye = new SynthesiserPrototype(plugin_proto, this, name, version, uniqueID);
            this.plugin_prototypes.push(newPluginPrototpye);
            return newPluginPrototpye;
        }
        
    };

    public deletePrototype(plugin_proto: IPluginPrototype<IPluginInstance<IPluginHost>,IPluginHost>) {
        const index = this.plugin_prototypes.indexOf(plugin_proto);
        if (index === -1) {
            return;
        }
        this.plugin_prototypes.splice(index, 1);
    };

    public getPrototypes() {
        return this.plugin_prototypes;
    };

    public getAudioPluginPrototypes() {
        return this.plugin_prototypes.filter(function (proto) {
            return proto.hasMidiInput == false && proto.hasMidiOutput == false;
        });
    };

    public getMidiSynthPrototypes() {
        return this.plugin_prototypes.filter(function (proto) {
            return proto.hasMidiInput == true && proto.hasMidiOutput == false;
        });
    };

    public getMidiPluginPrototypes() {
        return this.plugin_prototypes.filter(function (proto) {
            return proto.hasMidiInput == true && proto.hasMidiOutput == true;
        });
    };

    public getAllPlugins() {
        return this.pluginsList;
    };

    public getAllPluginsObject():{
        factory: PluginFactory,
        audioPluginChainManagers: {
            subFactory: AudioPluginChainManager,
            plugins: PluginInstance[]
        }[]
    } {
        const obj = {
            factory: this,
            audioPluginChainManagers: this.audioPluginChainManagers.map(subFactory => {return {
                subFactory: subFactory,
                plugins: subFactory.getPlugins()
            }})
        };
        return obj;
    };

    public createAudioPluginChainManager(chainStart: AudioNode, chainStop: AudioNode): AudioPluginChainManager {
        const node = new AudioPluginChainManager(this, chainStart, chainStop);
        this.audioPluginChainManagers.push(node);
        return node;
    };

    public async duplicateAudioPluginChainManager(sourceChainManager:AudioPluginChainManager, chainStart: AudioNode, chainStop: AudioNode): Promise<AudioPluginChainManager> {
        const node = this.createAudioPluginChainManager(chainStart, chainStop);
        for (const plugin_object of sourceChainManager.getPlugins()) {
            const newPlugin = await node.createPlugin(plugin_object.prototypeObject)
            newPlugin.node.parameters.setParametersByObject(plugin_object.node.parameters.getParameterObject);
        }
        return node;
    };

    public destroyAudioPluginChainManager(SubFactory: AudioPluginChainManager) {
        var index = this.audioPluginChainManagers.findIndex((element) => {
            if (element === SubFactory) {
                return true;
            }
            return false;
        });
        if (index >= 0) {
            this.audioPluginChainManagers.splice(index, 1);
            SubFactory.destroy();
        }
    };

    public createMidiSynthesiserHost(factory: PluginFactory) {
        if (factory === undefined) {
            factory = this;
        }
        const host = new MidiSynthesiserHost(factory);
        this.synthesiserHosts.push(host);
        return host;
    };

    public destroyMidiSynthesiserHost(host: MidiSynthesiserHost) {
        var index = this.synthesiserHosts.findIndex((element) => {
            if (element === host) {
                return true;
            }
            return false;
        });
        if (index >= 0) {
            this.synthesiserHosts.splice(index, 1);
            host.destroy();
        }
    };

    public registerPluginInstance(instance: IPluginInstance<IPluginHost>) {
        if (this.pluginsList.find(p=>p === instance)) {
            throw new Error ("Plugin Instance not unique");
        }
        this.pluginsList.push(instance);
        if (this.audioStarted) {
            const context_time = this.context.currentTime;
            const program_time = this.getCurrentProgramTime();
            this.pluginAudioStart(instance.node, program_time, context_time);
        }
        return true;
    };

    public deletePlugin(plugin: IPluginInstance<IPluginHost>) {
        const index = this.pluginsList.indexOf(plugin);
        if (index >= 0) {
            // Also check it isn't rogue attached to a plugin chain
            if (isPluginInstance(plugin)) {
                this.audioPluginChainManagers.forEach((subFactory) => {
                    if (subFactory.getPlugins().includes(plugin)) {
                        subFactory.removePlugin(plugin);
                    }
                });
            } else if (isMidiSynthesisInstance(plugin)) {
                this.synthesiserHosts.forEach(host => {
                    if (host.midiSynthesiser === plugin) {
                        host.unloadSynthesiserSlot();
                    }
                })
            }
            this.pluginsList.splice(index, 1);
            plugin.node.delete();
            plugin.node.externalInterface.closeWindows();
        }
    }
    public getCurrentProgramTime() {
        if (this.audioStarted) {
            return this.context.currentTime - this.audioStartContextTime + this.audioStartProgramTime;
        } else {
            return this.audioStartProgramTime;
        }
    }

    public setCurrentProgramTime(time: number) {
        if (this.audioStarted) {
            throw new Error ("Must stop playback to set the current program time");
        }
        if (typeof time == "number" && time >= 0) {
            this.audioStartProgramTime = time;
            this.PluginGUI.pollAllPlugins();
        }
    }
    public audioStart(program_time: number, context_time: number) {
        if (context_time === undefined) {
            context_time = this.context.currentTime;
        }
        if (program_time === undefined) {
            program_time = 0;
            console.warn("Assuming start time at 0");
        }
        if (!this.audioStarted) {
            this.setCurrentProgramTime(program_time);
            this.audioStartContextTime = context_time;
            this.triggerAudioStart(program_time, context_time);
            this.audioStarted = true;
        }
    }
    public audioStop() {
        if (this.audioStarted) {
            this.triggerAudioStop();
            this.audioStarted = false;
        }
    }
    public createStore(storeName: string) {
        let node = this.findStore(storeName);
        if (node === undefined){ 
            node = new LinkedStore(storeName);
            this.stores.push(node);
        }
        return node;
    };

    public getStores() {
        return this.stores;
    };

    public findStore(storeName: string) {
        return this.stores.find(a => a.name === storeName);
    };

    public createFactoryCopy(context: AudioContext) {
        return this.copyFactory(this, context);
    }

    get hasAudioStarted() {return this.audioStarted;}
    get pluginRootURL() {return this.rootURL;}
    set pluginRootURL(t:string) {this.rootURL = t;}
    get subFactories() {return this.audioPluginChainManagers;}
}
