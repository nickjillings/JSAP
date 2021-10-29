import { LinkedStore } from '../LinkedStore';
import { IPluginHost } from './IPluginHost';
import { MidiSynthesisInstance } from './MidiSynthesisInstance';
import { PluginFactory } from './PluginFactory';
import { SynthesiserPrototype } from './PluginPrototype';
export declare class MidiSynthesiserHost implements IPluginHost {
    readonly factory: PluginFactory;
    private ev;
    private midiSynthSlot;
    private connections;
    readonly SessionData: LinkedStore;
    readonly UserData: LinkedStore;
    readonly TrackData: LinkedStore;
    constructor(factory: PluginFactory);
    unloadSynthesiserSlot(): void;
    private buildNewSynthesiserObject;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    connect(destinationNode: AudioNode, output?: number, input?: number): void;
    disconnect(destinationNode: AudioNode, output?: number, input?: number): void;
    scheduleEvent(msg: [number, number, number?], t: number): void;
    cancelAllEvents(t?: number): void;
    start(): void;
    stop(): void;
    loadMidiSynthesiserModule(prototype: SynthesiserPrototype): Promise<MidiSynthesisInstance>;
    destroy(): void;
    get midiSynthesiser(): MidiSynthesisInstance;
}
