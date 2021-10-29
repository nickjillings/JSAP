import { PluginInstance } from "./PluginInstance";
import { MidiSynthesisInstance } from "./MidiSynthesisInstance";
import { PluginFactory } from "./PluginFactory";
import { IPluginHost } from "./IPluginHost";
import { IPluginInstance } from "./IPluginInstance";
import { AudioPluginChainManager } from "./AudioPluginChainManager/index";
import { MidiSynthesiserHost } from "./MidiSynthesiserHost";
export declare type IPluginPrototypeConstructor = (factory: PluginFactory, owner: IPluginHost, prototype: IPluginPrototype<IPluginInstance<IPluginHost>, IPluginHost>) => void;
export interface IPluginPrototype<T extends IPluginInstance<I>, I extends IPluginHost> {
    createPluginInstance(owner: I): Promise<T>;
    readonly proto: IPluginPrototypeConstructor;
    readonly factory: PluginFactory;
    readonly name: string;
    readonly version: string;
    readonly uniqueID: string;
    readonly hasMidiInput: boolean;
    readonly hasMidiOutput: boolean;
}
declare class BasePluginPrototype {
    readonly proto: IPluginPrototypeConstructor;
    readonly factory: PluginFactory;
    readonly name: string;
    readonly version: string;
    readonly uniqueID: string;
    readonly hasMidiInput: boolean;
    readonly hasMidiOutput: boolean;
    constructor(proto: IPluginPrototypeConstructor, factory: PluginFactory, name: string, version: string, uniqueID: string, hasMidiInput: boolean, hasMidiOutput: boolean);
}
export declare class PluginPrototype extends BasePluginPrototype implements IPluginPrototype<PluginInstance, AudioPluginChainManager> {
    readonly proto: IPluginPrototypeConstructor;
    readonly factory: PluginFactory;
    readonly name: string;
    readonly version: string;
    readonly uniqueID: string;
    constructor(proto: IPluginPrototypeConstructor, factory: PluginFactory, name: string, version: string, uniqueID: string);
    createPluginInstance(owner: AudioPluginChainManager): Promise<PluginInstance>;
}
export declare class SynthesiserPrototype extends BasePluginPrototype implements IPluginPrototype<MidiSynthesisInstance, MidiSynthesiserHost> {
    readonly proto: IPluginPrototypeConstructor;
    readonly factory: PluginFactory;
    readonly name: string;
    readonly version: string;
    readonly uniqueID: string;
    constructor(proto: IPluginPrototypeConstructor, factory: PluginFactory, name: string, version: string, uniqueID: string);
    createPluginInstance(owner: MidiSynthesiserHost): Promise<MidiSynthesisInstance>;
}
export {};
