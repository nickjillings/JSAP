/* jshint esversion: 6 */
import {BasePlugin} from "../BasePlugin/index";
import { PluginFactory } from "../index";
import { SynthesiserPrototype } from "../Factory/PluginPrototype";
import { IBasePlugin } from "../BasePlugin/IBasePlugin";
import { MidiSynthesisInstance } from "../Factory/MidiSynthesisInstance";
import { MidiSynthesiserHost } from "../Factory/MidiSynthesiserHost";
export type SynthesiserDefaultEditorType = "roll" | "line" | "sequencer"

export abstract class SynthesiserBasePlugin extends BasePlugin<MidiSynthesisInstance, MidiSynthesiserHost>  implements IBasePlugin {
    private hasWarnedScheduleNotSet = false;
    private hasWarnedCancelNotSet = false;
    private editorType: SynthesiserDefaultEditorType = "roll";
    constructor (public readonly factory: PluginFactory, pluginOwner: MidiSynthesiserHost, public readonly prototypeObject: SynthesiserPrototype) {
        super (factory, pluginOwner, prototypeObject);
    }
    initialise?: () => Promise<void>;
    stop(ct?: number) {
        this.cancelAllEvents(ct);
    }
    addInput(): AudioNode[] {
        throw new Error ("Cannot add input to type \"SynthesiserBasePlugin\"");
    }
    deleteInput(): AudioNode[] {
        throw new Error ("Cannot delete input to type \"SynthesiserBasePlugin\"");
    }
    scheduleEvent(msg: [number, number, number?], contextTime: number) {
        if (!this.hasWarnedScheduleNotSet) {
            console.warn("WARNING - .scheduleEvent is not overridden");
            this.hasWarnedScheduleNotSet = true;
        }
    }
    cancelAllEvents(contextTime?: number) {
        if (!this.hasWarnedCancelNotSet) {
            console.warn("WARNING - .cancelAllEvents is not overridden");
            this.hasWarnedCancelNotSet = true;
        }
    }
    setEditorType(type: SynthesiserDefaultEditorType) {
        if (type == "roll" || type == "line" || type == "sequencer") {
            this.editorType = type;
        }
        return this.editorType;
    }
    getEditorType() {return this.editorType;}
    isNoteActive(n: number) {
        if (typeof n == "number" && n >= 0 && n < 128) {
            return true;
        } else {
            return false;
        }
    }
    getActiveNoteProperties() {
        const obj =[];
        for (var n=0; n<128; n++) {
            obj.push({
                code: n,
                name: this.midiNoteToName(n)
            });
        }
        return obj;
    }
    midiNoteToFrequency(m: number) {
        return Math.pow(2.0, (m-69)/12)*440;
    }
    frequencyToMidiNote(f: number) {
        return Math.round(12.0*Math.log2(f/440))+69;
    }
    midiNoteToName(m: number) {
        const notes = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"];
        const root = m-21;
        const octave = Math.floor(root/12);
        const note = Math.floor((root+36)%12);
        return notes[note] + String(octave);
    }
    noteNameToMidi(n: string) {
        const notes = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"];
        const octave = Number(n.slice(n.length-1));
        const note = notes.indexOf(n.slice(0,n.length-1));
        return octave*12 + note + 21;
    }
    noteNameToMIDI(n) {
        return this.noteNameToMidi
    }
}

export function isSynthesiserBasePlugin(object: IBasePlugin): object is SynthesiserBasePlugin {
    return object.inputs.length === 0 && object.outputs.length > 0 && `scheduleEvent` in object;
}
