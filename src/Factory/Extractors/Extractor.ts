import { IExtractor, IExtractorSource, IExtractorResults, IExtractorPostResults, XtractCallbackResults } from "./IExtractor";
import {TimeData} from "js-xtract";
export class Extractor implements IExtractor {
    private analyser: AnalyserNode;
    private features = []
    private callbackObject: ScriptProcessorNode
    private timeData: TimeData
    private readonly context = this.parent.output.context
    private fooGain: GainNode;
    constructor(private readonly parent: IExtractorSource, public readonly frameSize: number) {
        this.analyser = parent.output.context.createAnalyser();
        this.analyser.fftSize = frameSize;
        parent.output.connect(this.analyser);
    }
    private getXtractData(): TimeData {
        if (this.timeData === undefined) {
            this.timeData = new TimeData(this.analyser.fftSize, this.context.sampleRate);
        }
        const dst = new Float32Array(this.analyser.fftSize);
        if (this.analyser.getFloatTimeDomainData) {
            this.analyser.getFloatTimeDomainData(dst);
        } else {
            const view = new Uint8Array(this.analyser.fftSize);
            this.analyser.getByteTimeDomainData(view);
            for (let i = 0; i < this.analyser.fftSize; i++) {
                dst[i] = view[i];
                dst[i] = (dst[i] / 127.5) - 1;
            }
        }
        this.timeData.copyDataFrom(dst);
        return this.timeData;
    }
    private frameCallback() {
        // Perform a callback on each frame
        // The function callback has the arguments (current_frame, previous_frame, previous_result)
        if (this.callbackObject === undefined) {
            this.callbackObject = this.parent.output.context.createScriptProcessor(this.analyser.fftSize, 1, 1);
            this.analyser.connect(this.callbackObject);
            this.callbackObject.onaudioprocess = (e: AudioProcessingEvent) => {
                const current_frame = this.getXtractData();
                const message: IExtractorResults = {
                    'numberOfChannels': 1,
                    'results': []
                };
                message.results[0] = {
                    'channel': 0,
                    'results': []
                };
                this.postFeatures(message);
                for (let c=0; c<e.outputBuffer.numberOfChannels && c < e.inputBuffer.numberOfChannels; c++) {
                    e.outputBuffer.copyToChannel(e.inputBuffer.getChannelData(c), c);
                }
            };
        }

        // For chrome and other efficiency browsers
        if (!this.fooGain) {
            this.fooGain = this.context.createGain();
            this.fooGain.gain.value = 0;
            this.callbackObject.connect(this.fooGain);
            this.fooGain.connect(this.context.destination);
        }
    }
    private clearCallback() {
        //this === Extractor
        if (this.callbackObject) {
            this.callbackObject.disconnect();
            this.fooGain.disconnect();
            this.fooGain = undefined;
            this.callbackObject.onaudioprocess = undefined;
            this.callbackObject = undefined;
        }
    }
    public setFeatures(featureList: string[]) {
        this.features = featureList;
        if (this.features.length === 0) {
            this.clearCallback();
        } else {
            this.frameCallback();
        }
    }
    public rejoinExtractor() {
        this.parent.output.connect(this.extractor);
    }
    private postFeatures(resultsJSON: IExtractorResults) {
        const obj: IExtractorPostResults = {
            'outputIndex': this.parent.index,
            'frameSize': this.frameSize,
            'results': resultsJSON
        };
        this.parent.postFeatures(obj);
    }
    get extractor() {return this.analyser;}
}