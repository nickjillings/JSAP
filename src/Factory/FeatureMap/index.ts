import { PluginFeatureInterfaceReceiver } from "../../BasePlugin/PluginFeatureInterface/PluginFeatureInterfaceReceiver";
import { uniqueMergeArray } from "../../utility/uniqueMergeArray";
import { IExtractorPostResults, IFeatureInterfaceSender } from "../Extractors/IExtractor";
import { PluginFactory } from "../PluginFactory";


export interface IRequestFeatures {
    outputIndex: number,
    frameSize: number,
    features: string[]
}

export interface IPostFeaturesResults {
    name: string,
    result: number
}

export interface IPostFeatures extends IExtractorPostResults {
    source: IFeatureInterfaceSender
}

class FrameSizeToFeatures {
    public readonly receiverMap = new Map<number, Map<PluginFeatureInterfaceReceiver, string[]>>();
    constructor() {

    }
    public requestFeatures(frameSize: number, receiver: PluginFeatureInterfaceReceiver, features: string[]): string[] {
        if (this.receiverMap.has(frameSize) === false) {
            this.receiverMap.set(frameSize, new Map<PluginFeatureInterfaceReceiver, string[]>());
        }
        const receiverMapFeatures = this.receiverMap.get(frameSize);
        if (receiverMapFeatures.has(receiver)) {
            receiverMapFeatures.set(receiver, uniqueMergeArray<string>(receiverMapFeatures.get(receiver), features));
        } else {
            receiverMapFeatures.set(receiver, features);
        }
        // Now get all the features we need to export
        let allFeatures: string[] = [];
        for (const [receiver, receiverFeatures] of receiverMapFeatures) {
            allFeatures = uniqueMergeArray<string>(receiverFeatures, allFeatures);
        }
        return allFeatures;
    }
    public revokeAllFeatures(frameSize: number): string[] {
        return this.revokeFeatures(frameSize, undefined, undefined);
    }
    public revokeAllReceiverFeatures(frameSize: number, receiver: PluginFeatureInterfaceReceiver): string[] {
        return this.revokeFeatures(frameSize, receiver, undefined);
    }
    public revokeFeatures(frameSize: number, receiver?: PluginFeatureInterfaceReceiver, featuresToRemove?: string[]): string[] {
        if (this.receiverMap.has(frameSize) === false) {
            return;
        }
        const receiverMapFeatures = this.receiverMap.get(frameSize);
        if(receiver === undefined) {
            // If receiver is undefined, then we are killing the whole frameSize map
            for (const [receiverFromMap, receiverFeatures] of receiverMapFeatures) {
                this.revokeFeatures(frameSize, receiverFromMap, receiverFeatures);
            }
            return this.getFeatures(frameSize);
        }
        if (receiverMapFeatures.has(receiver) === false) {
            return;
        }
        const featureList = receiverMapFeatures.get(receiver);
        if (featuresToRemove === undefined) {
            // If features is undefined, remove all features
            // But, an empty list is valid
            featuresToRemove = featureList;
        }
        const reducedFeatureList = featureList.filter(feature => featuresToRemove.includes(feature) === false);
        if (reducedFeatureList.length === 0) {
            // Have no features!
            receiverMapFeatures.delete(receiver);
        } else {
            receiverMapFeatures.set(receiver, reducedFeatureList);
        }
        const remainingFeatures = this.getFeatures(frameSize);
        if (remainingFeatures.length === 0) {
            // The frameSize has no features left
            this.receiverMap.delete(frameSize);
        }
        return remainingFeatures;
    }
    public getFeatures(frameSize: number): string[] {
        const receiverMapFeatures = this.receiverMap.get(frameSize);
        if (receiverMapFeatures === undefined) {
            return [];
        }
        let allFeatures: string[] = [];
        for (const [receiver, receiverFeatures] of receiverMapFeatures) {
            allFeatures = uniqueMergeArray<string>(receiverFeatures, allFeatures);
        }
        return allFeatures;
    }
}

class SourceMap {
    private outputMap = new Map<number, FrameSizeToFeatures>();
    constructor(public readonly source: IFeatureInterfaceSender) {

    }
    public getOutputMap(outputIndex: number): FrameSizeToFeatures {
        return this.outputMap.get(outputIndex);
    }
    public keys(): IterableIterator<number> {
        return this.outputMap.keys();
    }
    public values(): IterableIterator<FrameSizeToFeatures> {
        return this.outputMap.values();
    }
    public entries(): IterableIterator<[number, FrameSizeToFeatures]> {
        return this.outputMap.entries();
    }
    public getFeatures(outputIndex: number, frameSize: number): string[] {
        const output = this.getOutputMap(outputIndex);
        if (output === undefined) {
            return undefined;
        }
        return output.getFeatures(frameSize);
    }
    public getOrAddOutputMap(outputIndex: number): FrameSizeToFeatures {
        const output = this.getOutputMap(outputIndex);
        if (output === undefined) {
            this.outputMap.set(outputIndex, new FrameSizeToFeatures());
            return this.getOutputMap(outputIndex);
        }
        return output;
    }
    public requestFeatures(outputIndex: number, frameSize: number, features: string[], receiver: PluginFeatureInterfaceReceiver) {
        const output = this.getOrAddOutputMap(outputIndex);
        const featureRequest: IRequestFeatures = {
            outputIndex: outputIndex,
            frameSize: frameSize,
            features: []
        }
        featureRequest.features = output.requestFeatures(frameSize, receiver, features);
        this.source.updateFeatures([featureRequest]);
    }
    public revokeFeatures(outputIndex?: number, frameSize?: number, receiver?: PluginFeatureInterfaceReceiver, featuresToRemove?: string[]) {
        if (outputIndex === undefined) {
            for (const _outputIndex of this.outputMap.keys()) {
                this.revokeFeatures(_outputIndex, frameSize, receiver, featuresToRemove);
            }
            return;
        }
        const output = this.getOutputMap(outputIndex);
        if (output === undefined) {
            return;
        }
        if (frameSize === undefined) {
            for (const _frameSize of output.receiverMap.keys()) {
                this.revokeFeatures(outputIndex, _frameSize, receiver, featuresToRemove);
            }
            return;
        }
        const featureRequest: IRequestFeatures = {
            outputIndex: outputIndex,
            frameSize: frameSize,
            features: []
        }
        featureRequest.features = output.revokeFeatures(frameSize, receiver, featuresToRemove);
        if (featureRequest.features.length === 0) {
            this.outputMap.delete(outputIndex);
        }
        this.source.updateFeatures([featureRequest]);
    }
}


export class FeatureMap {
    private Mappings = new Map<IFeatureInterfaceSender, SourceMap>();
    constructor(public factory: PluginFactory) {
    }
    private findOrCreateSourceRequestMap(pluginSender: IFeatureInterfaceSender): SourceMap {
        const requests = this.Mappings.get(pluginSender);
        if (requests === undefined) {
            const requestMap = new SourceMap(pluginSender);
            this.Mappings.set(pluginSender, requestMap);
            return requestMap;
        }
        return requests;
    }

    public requestFeatures(requestor: PluginFeatureInterfaceReceiver, pluginSender: IFeatureInterfaceSender, featureObject: IRequestFeatures) {
        // Grab any existing map or build a new one
        //pluginSender.updateFeatures([featureObject]);
        const sourceMap = this.findOrCreateSourceRequestMap(pluginSender);
        sourceMap.requestFeatures(featureObject.outputIndex, featureObject.frameSize, featureObject.features, requestor);
    };
    public deleteFeaturesFromSource(source: IFeatureInterfaceSender) {
        // This will imediately kill the source
        // Used when deleting the plugin!
        const sourceMap = this.Mappings.get(source);
        if (sourceMap === undefined) {
            return;
        }
        sourceMap.revokeFeatures();
        this.Mappings.delete(source);
    }
    public deleteFeatures(requestor: PluginFeatureInterfaceReceiver, pluginSender?: IFeatureInterfaceSender, featureObject?: IRequestFeatures) {
        if (pluginSender === undefined && featureObject === undefined) {
            // Bork everything to this plugin!
            for (const sourceMap of this.Mappings.values()) {
                sourceMap.revokeFeatures(undefined, undefined, requestor, undefined); // Will bork any lists with that requestor
            }
        } else {
            const sourceMap = this.Mappings.get(pluginSender);
            if (sourceMap === undefined) {
                return;
            }
            // Depending on the level of info in featureObject...
            sourceMap.revokeFeatures(featureObject?.outputIndex, featureObject?.frameSize, requestor, featureObject?.features);
        }
    };
    public getFeatureList(requestor: PluginFeatureInterfaceReceiver, pluginSender?: IFeatureInterfaceSender) { };
    public postFeatures(featureObject: IPostFeatures) {
        // Receive from the Sender objects
        // Trigger distributed search for results transmission
        // First get the instance mapping for output/frame
        const source = this.Mappings.get(featureObject.source);
        if (!source) {
            return;
        }
        const outputMap = source.getOutputMap(featureObject.outputIndex);
        if (outputMap === undefined) {
            return;
        }
        for (const [receiver, features] of outputMap.receiverMap.get(featureObject.frameSize)) {
            // Right now just send all features around
            receiver.postFeatures(featureObject);
        }
    };
}
