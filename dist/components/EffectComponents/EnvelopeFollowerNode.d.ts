export default class EnvelopeFollowerNode {
    readonly context: AudioContext;
    private _gateThreshold;
    private rectifier;
    readonly input: WaveShaperNode;
    private sFilter;
    private gate;
    private arFilter;
    constructor(context: AudioContext);
    get gateThreshold(): number;
    set gateThreshold(threshold: number);
    connect(destination: AudioNode | AudioParam, output?: number, input?: number): void;
    disconnect(destination?: AudioNode | AudioParam, output?: number, input?: number): void;
    deconstruct(): void;
}
