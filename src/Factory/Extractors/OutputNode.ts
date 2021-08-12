import { Extractor } from "./Extractor";
import { IExtractorSource, IExtractor, IExtractorPostResults, IFeatureInterfaceSender } from "./IExtractor";
import { WorkerExtractor } from "./WorkerExtractor";

export class OutputNode implements IExtractorSource {
    private extractors: IExtractor[] = [];
    constructor(private readonly parent: IFeatureInterfaceSender, public readonly output:AudioNode, public readonly index: number) {

    }
    public addExtractor(frameSize: number): IExtractor {
        let obj: IExtractor;
        if (window.Worker) {
            obj = new WorkerExtractor(this, frameSize);
        } else {
            obj = new Extractor(this, frameSize);
        }
        this.extractors.push(obj);
        return obj;
    }
    public findExtractor(frameSize: number): IExtractor {
        return this.extractors.find((e) => e.frameSize === frameSize);
    }
    public deleteExtractor(frameSize: number) {
        const extractor = this.findExtractor(frameSize);
        if (extractor) {
            const index = this.extractors.indexOf(extractor);
            this.extractors.splice(index, 1);
        }
    }
    public rejoinExtractors() {
        this.extractors.forEach(function (e) {
            e.rejoinExtractor();
        });
    }
    public postFeatures(resultObject: IExtractorPostResults) {
        this.parent.postFeatures(resultObject);
    }
}