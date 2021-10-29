import { IExtractorPostResults, IFeatureInterfaceSender } from "../../Factory/Extractors/IExtractor";
import { FeatureMap, IRequestFeatures } from "../../Factory/FeatureMap/index";
import { IBasePlugin } from "../IBasePlugin";
export declare class PluginFeatureInterfaceSender implements IFeatureInterfaceSender {
    private FeatureInterfaceInstance;
    private FactoryFeatureMap;
    private outputNodes;
    constructor(FeatureInterfaceInstance: IBasePlugin, FactoryFeatureMap: FeatureMap);
    updateFeatures(featureObject: IRequestFeatures[], outputIndex?: number): void;
    postFeatures(featureObject: IExtractorPostResults): void;
}
