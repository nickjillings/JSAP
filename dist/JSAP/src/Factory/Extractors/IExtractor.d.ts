import { IRequestFeatures } from "../FeatureMap/index";
export interface IExtractor {
    readonly frameSize: number;
    readonly extractor: AudioNode;
    setFeatures(featureList: string[]): void;
    rejoinExtractor(): void;
}
export interface XtractCallbackResults {
    channel: number;
    results: {
        name: string;
        result: number;
    }[];
}
export interface IExtractorResults {
    numberOfChannels: number;
    results: XtractCallbackResults[];
}
export interface IExtractorPostResults {
    outputIndex: number;
    frameSize: number;
    results: IExtractorResults;
}
export interface IExtractorSource {
    postFeatures(features: IExtractorPostResults): void;
    rejoinExtractors(): void;
    readonly index: number;
    readonly output: AudioNode;
}
export interface IFeatureInterfaceSender {
    updateFeatures(featureObject: IRequestFeatures[], outputIndex?: number): void;
    postFeatures(featureObject: IExtractorPostResults): void;
}
