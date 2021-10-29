import { SynthesiserBasePlugin } from "../SynthesiserBasePlugin/index";
import { IPluginHost } from "./IPluginHost";
import { IPluginInstance } from "./IPluginInstance";
import { MidiSynthesiserHost } from "./MidiSynthesiserHost";
export declare class MidiSynthesisInstance implements IPluginInstance<MidiSynthesiserHost> {
    readonly node: SynthesiserBasePlugin;
    readonly output: GainNode;
    constructor(node: SynthesiserBasePlugin);
    destroy(): void;
    get prototypeObject(): import("./PluginPrototype").SynthesiserPrototype;
    get externalInterface(): import("../BasePlugin/PluginInterfaceMessageHub").PluginInterfaceMessageHub;
}
export declare function isMidiSynthesisInstance(object: IPluginInstance<IPluginHost>): object is MidiSynthesisInstance;
