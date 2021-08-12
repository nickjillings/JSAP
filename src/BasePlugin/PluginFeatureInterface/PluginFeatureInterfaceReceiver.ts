import { FeatureMap, IPostFeatures, IRequestFeatures } from "../../Factory/FeatureMap/index";
import { IBasePlugin } from "../IBasePlugin";
import { PluginFeatureInterface } from "./index";

function checkFeatureArgs(source: IBasePlugin, featureObject: IRequestFeatures) {
    if (source === undefined) {
        throw ("Source plugin must be defined");
    }
    if (featureObject === undefined) {
        throw ("FeatureObject must be defined");
    }
    if (typeof featureObject.outputIndex !== "number" || typeof featureObject.frameSize !== "number" || typeof featureObject.features !== "object") {
        throw ("Malformed featureObject");
    }
    return true;
}

interface IRequestFeaturesFromPlugin extends IRequestFeatures {
    plugin: IBasePlugin,
}

/* jshint esversion: 6 */
export class PluginFeatureInterfaceReceiver {
    private c_features: (message: IPostFeatures) => void;
    constructor(private FeatureInterfaceInstance: IBasePlugin, private FactoryFeatureMap: FeatureMap) {
    }
    public requestFeatures(featureList: IRequestFeaturesFromPlugin[]) {
        for (let i = 0; i < featureList.length; i++) {
            this.requestFeaturesFromPlugin(featureList[i].plugin, {
                'outputIndex': featureList[i].outputIndex,
                'frameSize': featureList[i].frameSize,
                'features': featureList[i].features
            });
        }
    }
    public requestFeaturesFromPlugin(source: IBasePlugin, featureObject: IRequestFeatures) {
        checkFeatureArgs(source, featureObject);
        this.FactoryFeatureMap.requestFeatures(this, source.featureMap.Sender, featureObject);
    }
    public cancelFeaturesFromPlugin(source: IBasePlugin, featureObject: IRequestFeatures) {
        checkFeatureArgs(source, featureObject);
        this.FactoryFeatureMap.deleteFeatures(this, source.featureMap.Sender, featureObject);
    }
    public cancelAllFeaturesFromPlugin(source: IBasePlugin) {
        if (source === undefined) {
            throw ("Source plugin must be defined");
        }
        this.FactoryFeatureMap.deleteFeatures(this, source.featureMap.Sender);
    }
    public cancelAllFeatures() {
        this.FactoryFeatureMap.deleteFeatures(this);
    }
    public postFeatures(message: IPostFeatures) {
        /*
            Called by the Plugin Factory with the feature message
            message = {
                'plugin': sourcePluginInstance,
                'outputIndex': outputIndex,
                'frameSize': frameSize,
                'features': {} JS-Xtract feature results object
            }
        */
        if (typeof this.c_features === "function") {
            this.c_features(message);
        }
    };
    get onfeatures() {return this.c_features;}
    set onfeatures(func: (message: IPostFeatures) => void) {this.c_features = func;}
}
