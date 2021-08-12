import { IExtractorPostResults, IFeatureInterfaceSender } from "../../Factory/Extractors/IExtractor";
import { OutputNode } from "../../Factory/Extractors/OutputNode";
import { FeatureMap, IRequestFeatures } from "../../Factory/FeatureMap/index";
import { IBasePlugin } from "../IBasePlugin";

export class PluginFeatureInterfaceSender implements IFeatureInterfaceSender{
    private outputNodes: OutputNode[] = [];
    constructor(private FeatureInterfaceInstance: IBasePlugin, private FactoryFeatureMap: FeatureMap) {
    }

    public updateFeatures(featureObject: IRequestFeatures[], outputIndex = 0) {
        if (this.outputNodes[outputIndex] === undefined) {
            if (outputIndex > this.FeatureInterfaceInstance.numOutputs) {
                throw new Error("Requested an output that does not exist");
            }
            this.outputNodes[outputIndex] = new OutputNode(this, this.FeatureInterfaceInstance.outputs[outputIndex], outputIndex);
        }
        for (let si = 0; si < featureObject.length; si++) {
            let extractor = this.outputNodes[outputIndex].findExtractor(featureObject[si].frameSize);
            if (!extractor) {
                extractor = this.outputNodes[outputIndex].addExtractor(featureObject[si].frameSize);
            }
            extractor.setFeatures(featureObject[si].features);
        }
    }
    public postFeatures(featureObject: IExtractorPostResults) {
        /*
            Called by the individual extractor instances:
            featureObject = {'frameSize': frameSize,
            'outputIndex': outputIndex,
            'results':[]}
        */
        this.FeatureInterfaceInstance.factory.FeatureMap.postFeatures({
            'source': this,
            'outputIndex': featureObject.outputIndex,
            'frameSize': featureObject.frameSize,
            'results': featureObject.results
        });
    };
}
