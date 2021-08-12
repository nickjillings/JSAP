/* jshint esversion: 6 */
import { LinkedStore } from "../../LinkedStore";
import { IPluginHost } from "../IPluginHost";
import { PluginFactory } from "../PluginFactory";
import { PluginInstance } from "../PluginInstance";
import { PluginPrototype } from "../PluginPrototype";
import { SubFactoryFeatureSender } from "./SubFactoryFeatureSender/index";

enum AudioPluginChainManagerState {
    READY,
    CLOSED
}

export class AudioPluginChainManager implements IPluginHost {
    private plugin_list: PluginInstance[] = [];
    private state = AudioPluginChainManagerState.READY
    private delaySamples = 0;
    public readonly featureSender = new SubFactoryFeatureSender(this, this.PluginFactory.FeatureMap)
    private semanticStores = [];
    private eventTarget = new EventTarget();
    public factoryName = '';
    public readonly TrackData = new LinkedStore("Track");
    constructor(public readonly PluginFactory: PluginFactory, public readonly chainStart: AudioNode, public readonly chainStop: AudioNode) {
        chainStart.disconnect();
        chainStart.connect(chainStop);
    }
    private rebuild() {
        let i = 0, l = this.plugin_list.length - 1;
        while (i < l) {
            const currentNode = this.plugin_list[i++];
            const nextNode = this.plugin_list[i];
            currentNode.reconnect(nextNode);
        }
    }
    private isolate() {
        this.plugin_list.forEach((e) => {
            e.disconnect();
        });
    }
    private cutChain() {
        try {
            if (this.plugin_list.length > 0) {
                this.chainStart.disconnect(this.plugin_list[0].input);
                this.plugin_list[this.plugin_list.length - 1].output.disconnect(this.chainStop);
            } else {
                this.chainStart.disconnect(this.chainStop);
            }
        } catch {
            console.warn('could not disconnect plugin chain!');
        }
        return true;
    }
    private joinChain() {
        if (this.plugin_list.length > 0) {
            this.chainStart.connect(this.plugin_list[0].input);
            this.plugin_list[this.plugin_list.length - 1].output.connect(this.chainStop);
        } else {
            this.chainStart.connect(this.chainStop);
        }
        this.featureSender.rejoinExtractors();
    }
    private async buildNewPlugin(prototypeObject: PluginPrototype): Promise<PluginInstance> {
        if (this.state === AudioPluginChainManagerState.CLOSED) {
            throw new Error("SubFactory has been destroyed! Cannot add new plugins");
        }
        const node: PluginInstance = await prototypeObject.createPluginInstance(this);
        return node;
    }
    private getDelayCompensation() {
        let sum = 0;
        for (const plugin of this.plugin_list) {
            if (!plugin.isBypassed()) {
                sum += plugin.node.processingDelayAsSamples;
            }
        }
        return sum;
    }
    public bypassPlugin(plugin_instance: PluginInstance, state: boolean) {
        // Check is a member of this chain
        if (this.plugin_list.includes(plugin_instance) === false) {
            return;
        }
        plugin_instance.bypass(state);
    }
    public getPrototypes() {
        return this.PluginFactory.getPrototypes();
    }
    public getFactory() {
        return this.PluginFactory;
    };
    public destroy(reconnect = false) {
        if (this.state === AudioPluginChainManagerState.READY) {
            for (const pluginInstanceo of this.plugin_list) {
                this.destroyPlugin(pluginInstanceo);
            }
            this.chainStart.disconnect();
            if (reconnect === true) {
                this.chainStart.connect(this.chainStop);
            }
            this.featureSender.destroy();
            this.state = AudioPluginChainManagerState.CLOSED;
        }
    }
    public async createPlugin(prototypeObject: PluginPrototype) {
        if (this.state === AudioPluginChainManagerState.CLOSED) {
            return;
        }
        let node;
        try {
            node = await this.buildNewPlugin(prototypeObject);
        } catch(e) {

        }
        this.cutChain();
        this.plugin_list.push(node);
        this.isolate();
        this.rebuild();
        this.joinChain();
        node.addEventListener("alterdelay", this);
        node.node.onloaded.call(node.node);
        this.updateDelayCompensation();
        this.eventTarget.dispatchEvent(new Event("change"));
        return node;
    }
    public removePlugin(plugin_object: PluginInstance) {
        if (this.state === AudioPluginChainManagerState.CLOSED) {
            return;
        }
        var index = this.getPluginIndex(plugin_object);
        if (index >= 0) {
            this.cutChain();
            plugin_object.removeEventListener("alterdelay", this);
            plugin_object.node.stop.call(plugin_object.node);
            plugin_object.node.onunloaded.call(plugin_object.node);
            this.plugin_list.splice(index, 1);
            this.isolate();
            this.rebuild();
            this.joinChain();
            this.updateDelayCompensation();
            this.eventTarget.dispatchEvent(new Event("change"));
        }
    }
    public destroyPlugin(plugin_object: PluginInstance) {
        if (this.state === AudioPluginChainManagerState.CLOSED) {
            return;
        }
        this.removePlugin(plugin_object);
        this.PluginFactory.deletePlugin(plugin_object);
        this.updateDelayCompensation();
    }
    public getPlugins() {
        return this.plugin_list;
    }
    public getAllPlugins() {
        return this.PluginFactory.getAllPluginsObject();
    };
    public getPluginIndex(plugin_object: PluginInstance) {
        if (this.state === AudioPluginChainManagerState.CLOSED) {
            return;
        }
        return this.plugin_list.indexOf(plugin_object);
    }
    public movePlugin(plugin_object: PluginInstance, new_index: number) {
        if (this.state === AudioPluginChainManagerState.CLOSED) {
            return;
        }
        if (this.PluginFactory.getAllPlugins().includes(plugin_object) === false) {
            throw new Error("Plugin does not exist");
        }
        const index = this.getPluginIndex(plugin_object)
        let obj: PluginInstance[]
        this.cutChain();
        this.isolate();
        if (plugin_object.node.owner !== this) {
            // Different sub-factory
            plugin_object.node.owner.removePlugin(plugin_object);
            plugin_object.node.changeOwner(this);
            obj = [plugin_object];
        } else {
            obj = this.plugin_list.splice(index, 1);
            plugin_object.node.onunloaded.call(plugin_object.node);
        }
        if (new_index === 0) {
            this.plugin_list = obj.concat(this.plugin_list);
        } else if (new_index >= this.plugin_list.length) {
            this.plugin_list = this.plugin_list.concat(obj);
        } else {
            const holdLow = this.plugin_list.slice(0, new_index);
            const holdHigh = this.plugin_list.slice(new_index);
            this.plugin_list = holdLow.concat(obj.concat(holdHigh));
        }
        this.rebuild();
        this.joinChain();
        plugin_object.node.onloaded.call(plugin_object.node);
        this.updateDelayCompensation();
        this.eventTarget.dispatchEvent(new Event("change"));
    }
    public async copyPlugin(plugin_object: PluginInstance, copy_index?: number) {
        if (copy_index === undefined) {
            copy_index = this.plugin_list.length;
        }
        if (typeof copy_index != "number" || copy_index < 0 || copy_index > this.plugin_list.length) {
            throw ("Plugin copy index outside of the chain scope.");
        }
        let node: PluginInstance;
        try {
            node = await this.buildNewPlugin(plugin_object.prototypeObject);
        } catch (e) {
            console.log(e);
            throw new Error ("Plugin did not get created! Aborting");
        }
        node.node.parameters.setParametersByObject(plugin_object.node.parameters.getParameterObject(), false);
        this.cutChain();
        this.isolate();
        this.plugin_list.splice(copy_index, 0, node);
        this.rebuild();
        this.joinChain();
        this.updateDelayCompensation();
        node.node.onloaded.call(node.node);
        this.eventTarget.dispatchEvent(new Event("change"));
        return node;

    }
    public async duplicateAudioPluginChainManager(sourceAudioPluginChainManager: AudioPluginChainManager) {
        for (const plugin of sourceAudioPluginChainManager.getPlugins()) {
            await this.copyPlugin(plugin);
        }
        return this;
    }
    public recursiveProcessing(base, list) {
        const l = list.length;
        for (let i = 0; i < l; i++) {
            const entry = list[i];
            base[entry.name].apply(base, entry.parameters);
            if (entry.features && entry.features.length > 0) {
                this.recursiveProcessing(base.result[entry.name], entry.features);
            }
        }
    }
    public updateDelayCompensation() {
        const sum = this.getDelayCompensation();
        if (this.delaySamples != sum) {
            this.delaySamples = sum;
            this.eventTarget.dispatchEvent(new Event("alterdelay"));
        }
        return this.delaySamples;
    }
    public handleEvent(e: Event) {
        if (e.type == "alterdelay") {
            this.updateDelayCompensation();
        }
    }
    public addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions) {
        return this.eventTarget.addEventListener(type, listener, options);
    }
    public removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions) {
        return this.eventTarget.removeEventListener(type, listener, options);
    }
    get SessionData() {return this.PluginFactory.SessionData}
    get UserData() {return this.PluginFactory.UserData}
    get processingDelayAsSamples() { return this.updateDelayCompensation(); }
    get processingDelayAsSeconds() { return this.processingDelayAsSamples / this.PluginFactory.context.sampleRate; }
}
