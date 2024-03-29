import { BasePlugin } from "../BasePlugin/index";
import { PluginFactory } from "../index";
import { SynthesiserPrototype } from "../Factory/PluginPrototype";
import { IBasePlugin } from "../BasePlugin/IBasePlugin";
import { MidiSynthesisInstance } from "../Factory/MidiSynthesisInstance";
import { MidiSynthesiserHost } from "../Factory/MidiSynthesiserHost";
export declare type SynthesiserDefaultEditorType = "roll" | "line" | "sequencer";
export declare abstract class SynthesiserBasePlugin extends BasePlugin<MidiSynthesisInstance, MidiSynthesiserHost> implements IBasePlugin {
    readonly factory: PluginFactory;
    readonly prototypeObject: SynthesiserPrototype;
    private hasWarnedScheduleNotSet;
    private hasWarnedCancelNotSet;
    private editorType;
    constructor(factory: PluginFactory, pluginOwner: MidiSynthesiserHost, prototypeObject: SynthesiserPrototype);
    initialise?: () => Promise<void>;
    stop(ct?: number): void;
    addInput(): AudioNode[];
    deleteInput(): AudioNode[];
    scheduleEvent(msg: [number, number, number?], contextTime: number): void;
    cancelAllEvents(contextTime?: number): void;
    setEditorType(type: SynthesiserDefaultEditorType): SynthesiserDefaultEditorType;
    getEditorType(): SynthesiserDefaultEditorType;
    isNoteActive(n: number): boolean;
    getActiveNoteProperties(): any[];
    midiNoteToFrequency(m: number): number;
    frequencyToMidiNote(f: number): number;
    midiNoteToName(m: number): string;
    noteNameToMidi(n: string): number;
    noteNameToMIDI(n: any): (n: string) => number;
}
export declare function isSynthesiserBasePlugin(object: IBasePlugin): object is SynthesiserBasePlugin;
