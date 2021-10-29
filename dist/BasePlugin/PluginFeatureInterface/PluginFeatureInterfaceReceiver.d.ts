import { FeatureMap, IPostFeatures, IRequestFeatures } from "../../Factory/FeatureMap/index";
import { IBasePlugin } from "../IBasePlugin";
interface IRequestFeaturesFromPlugin extends IRequestFeatures {
    plugin: IBasePlugin;
}
export declare class PluginFeatureInterfaceReceiver {
    private FeatureInterfaceInstance;
    private FactoryFeatureMap;
    private c_features;
    constructor(FeatureInterfaceInstance: IBasePlugin, FactoryFeatureMap: FeatureMap);
    requestFeatures(featureList: IRequestFeaturesFromPlugin[]): void;
    requestFeaturesFromPlugin(source: IBasePlugin, featureObject: IRequestFeatures): void;
    cancelFeaturesFromPlugin(source: IBasePlugin, featureObject: IRequestFeatures): void;
    cancelAllFeaturesFromPlugin(source: IBasePlugin): void;
    cancelAllFeatures(): void;
    postFeatures(message: IPostFeatures): void;
    get onfeatures(): (message: IPostFeatures) => void;
    set onfeatures(func: (message: IPostFeatures) => void);
}
export {};
