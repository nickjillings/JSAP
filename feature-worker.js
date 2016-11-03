// Feature worker for JSAP plugins
// One of these created per feature extractor output

importScripts('js-xtract/jsXtract.min.js');

var state = 0;
var featureList;
var sampleRate;
var protoTimeDatas = [];

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

onmessage = function (message) {

    // First message is the configuration for the featureLists
    if (message.data.state == 1 && state == 0) {
        // Payload should be a list of features
        featureList = message.data.featureList;
        sampleRate = message.data.sampleRate;
        state = 1;
        // Pre-build the TimeData objects
        var i;
        for (i = 0; i < message.data.numChannels; i++) {
            protoTimeDatas[i] = new TimeData(message.data.frameSize, sampleRate);
        }
        postMessage({
            'state': state
        });
    } else if (message.data.state == 2 && state == 1) {
        // Now we have transmitted a frame of audio
        // Begin the processing
        var c, l = message.data.frames.length,
            response = {
                'numberOfChannels': l,
                'results': []
            };
        for (c = 0; c < l; c++) {
            var frame = protoTimeDatas[c];
            frame.copyDataFrom(message.data.frames[c]);
            recursiveProcessing(frame, featureList);
            response.results[c] = {
                'channel': c,
                'results': JSON.parse(frame.toJSON())
            }
        }
        // Now we have the data, return the frame
        postMessage({
            'state': state,
            'time': message.data.time,
            'response': response
        });
    } else if (message.data.state == 0) {
        // Clear
        featureList = undefined;
        sampleRate = undefined;
        state = 0;
        postMessage({
            'state': state
        });
    }
}
