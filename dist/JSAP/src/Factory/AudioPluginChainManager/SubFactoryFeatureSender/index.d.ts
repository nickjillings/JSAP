import { IFeatureInterfaceSender } from "../../Extractors/IExtractor";
import { FeatureMap, IRequestFeatures } from "../../FeatureMap/index";
import { AudioPluginChainManager } from "../index";
export declare class SubFactoryFeatureSender implements IFeatureInterfaceSender {
    private readonly owner;
    private readonly FactoryFeatureMap;
    private outputNodes;
    constructor(owner: AudioPluginChainManager, FactoryFeatureMap: FeatureMap);
    updateFeatures(featureObject: IRequestFeatures[], outputIndex?: number): void;
    rejoinExtractors(): void;
    postFeatures(featureObject: any): void;
    destroy(): void;
}
