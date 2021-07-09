// This defines a master object for holding all the plugins and communicating
// This object will also handle creation and destruction of plugins
/*globals Promise, document, console, LinkedStore, Worker, window, XMLHttpRequest */
/*eslint-env browser */
/* jshint esversion:6 */

import LinkedStore from '../LinkedStore';
import PluginAssetManager from './PluginAssets/PluginAssetManager';
import PluginPrototype from "./PluginPrototype";
import FeatureMap from "./FeatureMap/index";
import AudioPluginChainManager from "./AudioPluginChainManager/index";
import MidiSynthesiserHost from "./MidiSynthesiserHost";
import PluginUserInterfaceMessageHub from "./PluginUserInterfaceMessageHub";
import { BasePlugin } from '../BasePlugin/index';

interface JSAPResourceObject {
    url: string
    test: () => boolean
    type: string
    returnObject: string
}

class PluginFactory {
    private plugin_prototypes: PluginPrototype[] = [];
    private subFactories: AudioPluginChainManager[] = []
    private synthesiserHosts: MidiSynthesiserHost[] = []
    private pluginsList: PluginInstance[] = []
    private audioStartProgramTime: number 
    private audioStartContextTime: number
    private audioStarted = false
    private pluginUserInterfaceMessageHubIntance = new PluginUserInterfaceMessageHub(this);
    private stores: LinkedStore[] = []

    public pluginAssets = new PluginAssetManager(this);
    constructor(public context: AudioContext, private rootURL?: string) {

        this.deletePlugin = function (plugin) {
            var index = pluginsList.indexOf(plugin);
            if (index >= 0) {
                // Also check it isn't rogue attached to a plugin chain
                this.subFactories.forEach(function (subFactory) {
                    if (subFactory.getPlugins().includes(plugin)) {
                        subFactory.removePlugin(plugin);
                    }
                });
                var p = pluginsList.splice(index, 1);
                p[0].node.destroy();
                p[0].node.externalInterface.closeWindows();
            }
        };

        this.getCurrentProgramTime = function () {
            if (audioStarted) {
                return audio_context.currentTime - audioStartContextTime + audioStartProgramTime;
            } else {
                return audioStartProgramTime;
            }
        };

        this.setCurrentProgramTime = function (time) {
            if (audioStarted) {
                throw ("Must stop playback to set the current program time");
            }
            if (typeof time == "number" && time >= 0) {
                audioStartProgramTime = time;
                this.PluginGUI.pollAllPlugins();
            }
        };

        this.audioStart = function (program_time, context_time) {
            if (context_time === undefined) {
                context_time = audio_context.currentTime;
            }
            if (program_time === undefined) {
                program_time = 0;
                console.warn("Assuming start time at 0");
            }
            if (!audioStarted) {
                this.setCurrentProgramTime(program_time);
                audioStartContextTime = context_time;
                triggerAudioStart(program_time, context_time);
                audioStarted = true;
            }
        };
        this.audioStop = function () {
            if (audioStarted) {
                triggerAudioStop();
                audioStarted = false;
            }
        };

        this.createStore = function (storeName) {
            var node = new LinkedStore(storeName);
            stores.push(node);
            return node;
        };

        this.getStores = function () {
            return stores;
        };

        this.findStore = function (storeName) {
            return stores.find(function (a) {
                return a.name === storeName;
            });
        };

        // Build the default Stores
        this.SessionData = new LinkedStore("Session");
        this.UserData = new LinkedStore("User");

        this.FeatureMap = new FeatureMap();

        Object.defineProperty(this.FeatureMap, "factory", {
            'value': this
        });

        Object.defineProperties(this, {
            "context": {
                "value": audio_context
            },
            "hasAudioStarted": {
                "get": function () {
                    return audioStarted;
                }
            },
            "pluginRootURL": {
                "get": function () {
                    return rootURL;
                },
                "set": function (t) {
                    if (typeof t === "string") {
                        rootURL = t;
                        return rootURL;
                    }
                    throw ("Cannot set root URL without a string");
                }
            },
            "createFactoryCopy": {
                "value": function (context) {
                    return copyFactory(this, context);
                }
            },
            "subFactories": {
                "get": function () {
                    return subFactories;
                }
            },
            "PluginGUI": {
                "value": pluginUserInterfaceMessageHubIntance
            }
        });
    }

    private async copyFactory(factory: PluginFactory, newcontext: AudioContext): Promise<PluginFactory> {
        const BFactory = new PluginFactory(newcontext, this.rootURL);
        const promises = [];
        for (const proto of this.plugin_prototypes) {
            await BFactory.addPrototype(proto.proto);
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
        this.pluginsList.forEach(function (n) {
            this.pluginAudioStart(n.node, program_time, context_time);
        });

    }

    private triggerAudioStop() {
        this.pluginsList.forEach(function (n) {
            this.pluginAudioStop(n.node);
        });
    }

    public destroyFactory() {
        this.triggerAudioStop();
        for (const subFactory of Array.from(this.subFactories)) {
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
            if (typeof global.define === "function" && global.define.amd) {
                module = global.require(resourceObject.url);
            } else if (typeof global.module == "object" && global.module.exports) {
                module = (global.require(resourceObject.url));
            } else {
                throw new Error ("Cannot load using require");
            }
            if (typeof module === "function") {
                return this.addPrototype(module);
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

    public async loadResource(resourceObject: JSAPResourceObject): Promise<BasePlugin> {
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
                    } else {
                        return(false);
                    }
                } else {
                    return(true);
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
            return await this.addPrototype(plugin);
        }
    };

    public injectPrototype(prototypeExecutable: BasePlugin) {
        if (typeof prototypeExecutable != "function") {
            throw ("Invalid executable function");
        }
        return this.addPrototype(prototypeExecutable);
    };

    public addPrototype(plugin_proto: BasePlugin): PluginPrototype {
        if (typeof plugin_proto !== "function") {
            throw new Error("The Prototype must be a function!");
        }
        else if (typeof plugin_proto.prototype.name !== "string" || plugin_proto.prototype.name.length === 0) {
            throw new Error("Malformed plugin. Name not defined");
        }
        else if (typeof plugin_proto.prototype.version !== "string" || plugin_proto.prototype.version.length === 0) {
            throw new Error("Malformed plugin. Version not defined");
        }
        else if (typeof plugin_proto.prototype.uniqueID !== "string" || plugin_proto.prototype.uniqueID.length === 0) {
            throw new Error("Malformed plugin. uniqueID not defined");
        }
        const testObj = {
            'proto': plugin_proto,
            'name': plugin_proto.prototype.name,
            'version': plugin_proto.prototype.version,
            'uniqueID': plugin_proto.prototype.uniqueID
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
        const newPluginPrototpye = new PluginPrototype(plugin_proto, this);
        this.plugin_prototypes.push(newPluginPrototpye);
        return newPluginPrototpye;
    };

    public deletePrototype(plugin_proto: PluginPrototype) {
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

    public getAllPluginsObject() {
        const obj = {
            'factory': this,
            'subFactories': []
        };
        for (let i = 0; i < this.subFactories.length; i++) {
            obj.subFactories.push({
                'subFactory': this.subFactories[i],
                'plugins': this.subFactories[i].getPlugins()
            });
        }
        return obj;
    };

    public createAudioPluginChainManager(chainStart: AudioNode, chainStop: AudioNode): AudioPluginChainManager {
        const node = new AudioPluginChainManager(this, chainStart, chainStop);
        this.subFactories.push(node);
        return node;
    };

    public async duplicateAudioPluginChainManager(sourceChainManager:AudioPluginChainManager, chainStart: AudioNode, chainStop: AudioNode): AudioPluginChainManager {
        const node = this.createAudioPluginChainManager(chainStart, chainStop);
        for (const plugin_object of sourceChainManager.getPlugins()) {
            const newPlugin = await node.createPlugin(plugin_object.prototypeObject)
            newPlugin.node.parameters.setParametersByObject(plugin_object.node.parameters.getParameterObject);
        }
        return node;
    };

    public destroyAudioPluginChainManager = function (SubFactory: AudioPluginChainManager) {
        var index = this.subFactories.findIndex(function (element) {
            if (element === this) {
                return true;
            }
            return false;
        }, SubFactory);
        if (index >= 0) {
            this.subFactories.splice(index, 1);
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
        var index = this.synthesiserHosts.findIndex(function (element) {
            if (element === this) {
                return true;
            }
            return false;
        }, host);
        if (index >= 0) {
            this.synthesiserHosts.splice(index, 1);
            host.destroy();
        }
    };

    public registerPluginInstance(instance) {
        if (this.pluginsList.find(function (p) {
            return p === this;
        }, instance)) {
            throw ("Plugin Instance not unique");
        }
        this.pluginsList.push(instance);
        if (this.audioStarted) {
            const context_time = this.context.currentTime;
            const program_time = this.getCurrentProgramTime();
            this.pluginAudioStart(instance.node, program_time, context_time);
        }
        return true;
    };
}

export default PluginFactory;
