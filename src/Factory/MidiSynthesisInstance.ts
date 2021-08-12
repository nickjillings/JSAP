/* jshint esversion: 6 */

import { SynthesiserBasePlugin } from "../SynthesiserBasePlugin/index";
import { IPluginHost } from "./IPluginHost";
import { IPluginInstance } from "./IPluginInstance";
import { MidiSynthesiserHost } from "./MidiSynthesiserHost";

export class MidiSynthesisInstance implements IPluginInstance<MidiSynthesiserHost> {
    public readonly output = this.node.context.createGain();
    constructor (public readonly node: SynthesiserBasePlugin) {
        this.node.getOutputs()[0].connect(this.output);
    }
    destroy() {
        this.node.destroy();
    };
    get prototypeObject() {return this.node.prototypeObject;}
    get externalInterface() {return this.node.externalInterface;}
}

export function isMidiSynthesisInstance(object: IPluginInstance<IPluginHost>): object is MidiSynthesisInstance {
    return object.node instanceof SynthesiserBasePlugin;
}
