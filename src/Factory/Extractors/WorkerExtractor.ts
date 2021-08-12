import { IExtractor, IExtractorResults, IExtractorPostResults, IExtractorSource } from "./IExtractor";

export class WorkerExtractor implements IExtractor {
    private analyser: ScriptProcessorNode;
    private worker = new Worker("../feature-worker.js", {type: "module"});
    private features: string[] = []
    constructor(private readonly parent: IExtractorSource, public readonly frameSize: number) {
        this.analyser = parent.output.context.createScriptProcessor(frameSize, parent.output.numberOfOutputs, 1);
        parent.output.connect(this.analyser);
        this.worker.onerror = (errorEvent) => {
            console.error(errorEvent);
        };
        this.worker.onmessage = (e: MessageEvent) => {
            if (e.data.state === 2) {
                this.response(e);
            }
            else if (e.data.state === 1) {
                this.extractor.onaudioprocess = this.onaudiocallback;
            }
        }
    }
    private onaudiocallback(e: AudioProcessingEvent) {
        var c, frames = [];
        for (c = 0; c < e.inputBuffer.numberOfChannels; c++) {
            frames[c] = e.inputBuffer.getChannelData(c);
        }
        this.worker.postMessage({
            'state': 2,
            'frames': frames
        });
    }
    private response(msg: MessageEvent) {
        this.postFeatures(msg.data.response);
    }
    private postFeatures(resultsJSON: IExtractorResults) {
        const obj: IExtractorPostResults = {
            'outputIndex': this.parent.index,
            'frameSize': this.frameSize,
            'results': resultsJSON
        };
        this.parent.postFeatures(obj);
    }
    public rejoinExtractor() {
        this.parent.output.connect(this.extractor);
    };
    public setFeatures(featureList: string[]) {
        var self = this;
        var configMessage = {
            'state': 1,
            'sampleRate': this.parent.output.context.sampleRate,
            'featureList': featureList,
            'numChannels': this.parent.output.numberOfOutputs,
            'frameSize': this.frameSize
        };
        this.features = featureList;
        if (featureList && featureList.length > 0) {
            this.worker.postMessage({'state': 0});
            this.worker.postMessage(configMessage);
        } else {
            this.extractor.onaudioprocess = undefined;
        }
    }
    get extractor() {return this.analyser;}
}
