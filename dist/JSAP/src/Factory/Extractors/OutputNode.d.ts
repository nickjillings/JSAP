import { IExtractorSource, IExtractor, IExtractorPostResults, IFeatureInterfaceSender } from "./IExtractor";
export declare class OutputNode implements IExtractorSource {
    private readonly parent;
    readonly output: AudioNode;
    readonly index: number;
    private extractors;
    constructor(parent: IFeatureInterfaceSender, output: AudioNode, index: number);
    addExtractor(frameSize: number): IExtractor;
    findExtractor(frameSize: number): IExtractor;
    deleteExtractor(frameSize: number): void;
    rejoinExtractors(): void;
    postFeatures(resultObject: IExtractorPostResults): void;
}
