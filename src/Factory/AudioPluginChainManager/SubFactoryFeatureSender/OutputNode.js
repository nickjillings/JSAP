/* jshint esversion: 6 */

import WorkerExtractor from "./WorkerExtractor";
import Extractor from "./Extractor";

function OutputNode(parent, output) {
    var extractors = [];
    this.addExtractor = function (frameSize) {
        var obj;
        if (window.Worker) {
            obj = new WorkerExtractor(output, frameSize);
        } else {
            obj = new Extractor(output, frameSize);
        }
        extractors.push(obj);
        Object.defineProperty(obj, "postFeatures", {
            'value': function (frameSize, resultsJSON) {
                var obj = {
                    'outputIndex': 0,
                    'frameSize': frameSize,
                    'results': resultsJSON
                };
                this.postFeatures(obj);
            }.bind(this)
        });
        return obj;
    };
    this.findExtractor = function (frameSize) {
        var check = frameSize;
        return extractors.find(function (e) {
            // This MUST be == NOT ===
            return Number(e.frameSize) === Number(check);
        });
    };
    this.rejoinExtractors = function () {
        extractors.forEach(function (e) {
            e.rejoinExtractor();
        });
    };
    this.deleteExtractor = function (frameSize) {};
}

export default OutputNode;
