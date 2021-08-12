/* jshint esversion: 6 */

import { IFeatureInterfaceSender } from "../../Extractors/IExtractor";
import { OutputNode } from "../../Extractors/OutputNode";
import { IRequestFeatures } from "../../FeatureMap/index";
import { AudioPluginChainManager } from "../index";

export class SubFactoryFeatureSender implements IFeatureInterfaceSender {
    private outputNodes: OutputNode[] = [];
    constructor(private readonly owner: AudioPluginChainManager, private readonly FactoryFeatureMap: any) {
        this.FactoryFeatureMap.createSourceMap(this, undefined);
    }
    public updateFeatures(featureObject: IRequestFeatures[], outputIndex = 0) {
        if (this.outputNodes[outputIndex] === undefined) {
            if (outputIndex > 1) {
                throw ("Requested an output that does not exist");
            }
            this.outputNodes[outputIndex] = new OutputNode(this, this.owner.chainStart, outputIndex);
        }
        for (let si = 0; si < featureObject.length; si++) {
            let extractor = this.outputNodes[outputIndex].findExtractor(featureObject[si].frameSize);
            if (!extractor) {
                extractor = this.outputNodes[outputIndex].addExtractor(featureObject[si].frameSize);
            }
            extractor.setFeatures(featureObject[si].features);
        }
    };
    public rejoinExtractors() {
        for (const outputNode of this.outputNodes) {
            outputNode.rejoinExtractors();
        }
    }

    public postFeatures(featureObject) {
        /*
            Called by the individual extractor instances:
            featureObject = {'frameSize': frameSize,
            'outputIndex': outputIndex,
            'results':[]}
        */
        this.FactoryFeatureMap.postFeatures({
            'plugin': this,
            'outputIndex': featureObject.outputIndex,
            'frameSize': featureObject.frameSize,
            'results': featureObject.results
        });
    };

    public destroy() {
        this.FactoryFeatureMap.deleteSourceMap(this);
    }
}
