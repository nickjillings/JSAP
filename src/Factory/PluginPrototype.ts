/* jshint esversion: 6 */
import {PluginInstance} from "./PluginInstance";
import {MidiSynthesisInstance} from "./MidiSynthesisInstance";
import { PluginFactory } from "./PluginFactory";
import { IBasePlugin } from "../BasePlugin/IBasePlugin";
import { IPluginHost } from "./IPluginHost";
import { IPluginInstance } from "./IPluginInstance";
import { isSynthesiserBasePlugin, SynthesiserBasePlugin } from "../SynthesiserBasePlugin/index";
import { AudioPluginChainManager } from "./AudioPluginChainManager/index";
import { MidiSynthesiserHost } from "./MidiSynthesiserHost";
import { AudioPlugin } from "../BasePlugin/AudioPlugin";

export type IPluginPrototypeConstructor = (factory: PluginFactory, owner: IPluginHost) => void

export interface IPluginPrototype<T extends IPluginInstance<I>, I extends IPluginHost> {
    createPluginInstance(owner: I): Promise<T>
    readonly proto: IPluginPrototypeConstructor
    readonly factory: PluginFactory
    readonly name: string
    readonly version: string
    readonly uniqueID: string
    readonly hasMidiInput: boolean
    readonly hasMidiOutput: boolean
}

class BasePluginPrototype {
    constructor(public readonly proto: IPluginPrototypeConstructor, public readonly factory: PluginFactory) {

    }
    get name() { return this.proto.prototype.name; }
    get version() { return this.proto.prototype.version; }
    get uniqueID() { return this.proto.prototype.uniqueID; }
    get hasMidiInput() { return (this.proto.prototype.hasMidiInput || false); }
    get hasMidiOutput() { return (this.proto.prototype.hasMidiOutput || false); }
}

export class PluginPrototype extends BasePluginPrototype implements IPluginPrototype<PluginInstance, AudioPluginChainManager> {
    constructor(public readonly proto: IPluginPrototypeConstructor, public readonly factory: PluginFactory) {
        super(proto, factory);
    }
    public async createPluginInstance(owner: AudioPluginChainManager): Promise<PluginInstance> {
        const plugin: AudioPlugin = new this.proto(this.factory, owner);
        if (plugin.initialise) {
            await plugin.initialise();
        }
        const node = new PluginInstance(plugin);
        this.factory.registerPluginInstance(node);
        return node;
    }
}

export class SynthesiserPrototype extends BasePluginPrototype implements IPluginPrototype<MidiSynthesisInstance, MidiSynthesiserHost> {
    constructor(public readonly proto: IPluginPrototypeConstructor, public readonly factory: PluginFactory) {
        super(proto, factory);
    }
    public async createPluginInstance(owner: MidiSynthesiserHost): Promise<MidiSynthesisInstance> {
        const plugin: SynthesiserBasePlugin = new this.proto(this.factory, owner);
        if (plugin.initialise) {
            await plugin.initialise();
        }
        const node = new MidiSynthesisInstance(plugin);
        this.factory.registerPluginInstance(node);
        return node;
    }
}