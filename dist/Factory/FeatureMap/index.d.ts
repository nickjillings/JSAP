import { PluginFeatureInterfaceReceiver } from "../../BasePlugin/PluginFeatureInterface/PluginFeatureInterfaceReceiver";
import { IExtractorPostResults, IFeatureInterfaceSender } from "../Extractors/IExtractor";
import { PluginFactory } from "../PluginFactory";
export interface IRequestFeatures {
    outputIndex: number;
    frameSize: number;
    features: string[];
}
export interface IPostFeaturesResults {
    name: string;
    result: number;
}
export interface IPostFeatures extends IExtractorPostResults {
    source: IFeatureInterfaceSender;
}
export declare class FeatureMap {
    factory: PluginFactory;
    private Mappings;
    constructor(factory: PluginFactory);
    private findOrCreateSourceRequestMap;
    requestFeatures(requestor: PluginFeatureInterfaceReceiver, pluginSender: IFeatureInterfaceSender, featureObject: IRequestFeatures): void;
    deleteFeaturesFromSource(source: IFeatureInterfaceSender): void;
    deleteFeatures(requestor: PluginFeatureInterfaceReceiver, pluginSender?: IFeatureInterfaceSender, featureObject?: IRequestFeatures): void;
    getFeatureList(requestor: PluginFeatureInterfaceReceiver, pluginSender?: IFeatureInterfaceSender): void;
    postFeatures(featureObject: IPostFeatures): void;
}
