import { IExtractor, IExtractorSource } from "./IExtractor";
export declare class WorkerExtractor implements IExtractor {
    private readonly parent;
    readonly frameSize: number;
    private analyser;
    private worker;
    private features;
    constructor(parent: IExtractorSource, frameSize: number);
    private onaudiocallback;
    private response;
    private postFeatures;
    rejoinExtractor(): void;
    setFeatures(featureList: string[]): void;
    get extractor(): ScriptProcessorNode;
}
