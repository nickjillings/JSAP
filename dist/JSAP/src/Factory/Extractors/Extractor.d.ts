import { IExtractor, IExtractorSource } from "./IExtractor";
export declare class Extractor implements IExtractor {
    private readonly parent;
    readonly frameSize: number;
    private analyser;
    private features;
    private callbackObject;
    private timeData;
    private readonly context;
    private fooGain;
    constructor(parent: IExtractorSource, frameSize: number);
    private getXtractData;
    private frameCallback;
    private clearCallback;
    setFeatures(featureList: string[]): void;
    rejoinExtractor(): void;
    private postFeatures;
    get extractor(): AnalyserNode;
}
