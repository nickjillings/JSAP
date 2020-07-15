/* jshint esversion: 6 */

function Extractor(output, frameSize) {
    this.extractor = output.context.createAnalyser();
    this.extractor.fftSize = frameSize;
    output.connect(this.extractor);
    this.features = [];
    Object.defineProperty(this, "frameSize", {
        'value': frameSize
    });

    var recursiveProcessing = owner.recursiveProcessing;
    /*
    function recursiveProcessing(base, list) {
        var l = list.length,
            i, entry;
        for (i = 0; i < l; i++) {
            entry = list[i];
            base[entry.name].apply(base, entry.parameters);
            if (entry.features && entry.features.length > 0) {
                recursiveProcessing(base.result[entry.name], entry.features);
            }
        }
    }
    */
    function onaudiocallback(data) {
        //this === Extractor
        var message = {
            'numberOfChannels': 1,
            'results': []
        };
        recursiveProcessing(data, this.features);
        message.results[0] = {
            'channel': 0,
            'results': JSON.parse(data.toJSON())
        };
        this.postFeatures(data.length, message);
    }

    this.setFeatures = function (featureList) {
        this.features = featureList;
        if (this.features.length === 0) {
            this.extractor.clearCallback();
        } else {
            this.extractor.frameCallback(onaudiocallback, this);
        }
    };
    this.rejoinExtractor = function () {
        output.connect(this.extractor);
    };
}

export default Extractor;
