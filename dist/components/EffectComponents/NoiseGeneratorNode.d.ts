export default class NoiseGeneratorNode {
    readonly context: AudioContext;
    private _loop;
    private _source;
    private _output;
    constructor(context: AudioContext, loopLength: number);
    start(): void;
    stop(): void;
    connect(destination: AudioNode): void;
    disconnect(destination?: AudioNode): void;
    deconstruct(): void;
    private createSource;
    private destroySource;
}
