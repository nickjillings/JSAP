/*globals DOMException, Float32Array, Event, Promise, ArrayBuffer, math */

function SetValueEvent(param, v) {
    this.execute = function () {
        param.value = v;
    };
}

var AudioNode = function (context, channels, numberOfInputs, numberOfOutputs) {
    var connectionMap = [],
        channelCountMode = "max",
        channelInterpretation = "discrete";

    function checkForConnection(destination, output, input) {
        return (connectionMap.findIndex(function (e) {
            return (e.destination === destination && e.output === output && e.input === input);
        })) !== -1;
    }

    function addConnection(destination, output, input) {
        connectionMap.push({
            destination: destination,
            output: output,
            input: input
        });
    }

    function removeConnection(destination, output, input) {
        var i = connectionMap.findIndex(function (e) {
            return (e.destination === destination && e.output === output && e.input === input);
        });
        connectionMap.splice(i, 1);
    }

    Object.defineProperties(this, {
        "context": {
            "value": context
        },
        "channelCount": {
            "value": channels
        },
        "channelCountMode": {
            "get": function () {
                return channelCountMode;
            }
        },
        "channelInterpretation": {
            "get": function () {
                return channelInterpretation;
            }
        },
        "numberOfInputs": {
            "value": numberOfInputs
        },
        "numberOfOutputs": {
            "value": numberOfOutputs
        },
        "connect": {
            "value": function (destination, output, input) {
                if (output === undefined) {
                    output = 0;
                }
                if (input === undefined) {
                    input = 0;
                }
                if (destination.context) {
                    if (destination.context !== context) {
                        return new Error("Not from the same audio context");
                    }
                } else if (destination.value) {
                    if (destination.node.context !== context) {
                        return new Error("Not from the same audio context");
                    }
                } else {
                    throw ("Not an AudioNode or AudioParam");
                }

                if (output < 0 || output > numberOfOutputs) {
                    return new DOMException("IndexSizeError");
                }
                if (input < 0 || input > numberOfInputs) {
                    return new DOMException("IndexSizeError");
                }
                if (checkForConnection(destination, output, input) === false) {
                    addConnection(destination, output, input);
                }
                return destination;
            }
        },
        "disconnect": {
            "value": function (destination, output, input) {
                if (output === undefined) {
                    output = 0;
                }
                if (input === undefined) {
                    input = 0;
                }
                if (output < 0 || output > numberOfOutputs) {
                    return new DOMException("IndexSizeError");
                }
                if (input < 0 || input > numberOfInputs) {
                    return new DOMException("IndexSizeError");
                }
                if (checkForConnection(destination, output, input) === false) {
                    return;
                }
                removeConnection(destination, output, input);
            }
        },
        "connectedTo": {
            "value": function (node) {
                var i, a;
                for (i = 0; i < connectionMap.length; i++) {
                    a = connectionMap[i];
                    if (a.destination === node || a.destination.node === node) {
                        return true;
                    } else {
                        if (a.destination !== context.destination && a.destination !== this) {
                            if (a.destination.connectedTo) {
                                if (a.destination.connectedTo(node)) {
                                    return true;
                                }
                            } else if (a.destination.node.connectedTo) {
                                if (a.destination.node.connectedTo(node)) {
                                    return true;
                                }
                            }
                        }
                    }
                }
                return false;
            }
        },
        "getDestinations": {
            "value": function () {
                var list = [];
                connectionMap.forEach(function (a) {
                    list.push(a.destination);
                });
                return list;
            }
        }
    });
};

var AudioParam = function (node, defaultValue, minValue, maxValue) {
    var value = defaultValue;

    function vt(v, t) {
        if (v === undefined || t === undefined) {
            throw ("Not enough arguments to AudioParam.setTargetAtTime.");
        }
        if (typeof v !== "number" || typeof t !== "number") {
            throw ("TypeError: Value being assigned to AudioParam.value is not a finite floating-point value.");
        }
        node.context.addEvent(new SetValueEvent(this, v), t);
        return this;
    }
    Object.defineProperties(this, {
        "node": {
            "value": node
        },
        "value": {
            "get": function () {
                return value;
            },
            "set": function (v) {
                if (typeof v !== "number") {
                    throw ("TypeError: Value being assigned to AudioParam.value is not a finite floating-point value.");
                }
                if (minValue) {
                    v = Math.max(v, minValue);
                }
                if (maxValue) {
                    v = Math.min(v, maxValue);
                }
                value = v;
                return this.value;
            }
        },
        "defaultValue": {
            "value": defaultValue
        },
        "minValue": {
            "value": minValue
        },
        "maxValue": {
            "value": maxValue
        },
        "setValueAtTime": {
            "value": vt
        },
        "linearRampToValueAtTime": {
            "value": vt
        },
        "exponentialRampToValueAtTime": {
            "value": vt
        },
        "setTargetAtTime": {
            "value": function (v, s, t) {
                if (v === undefined || s === undefined || t === undefined) {
                    throw ("Not enough arguments to AudioParam.setTargetAtTime.");
                }
                if (typeof v !== "number" || typeof s !== "number" || typeof t !== "number") {
                    throw ("TypeError: Value being assigned to AudioParam.value is not a finite floating-point value.");
                }
            }
        },
        "setValueCurveAtTime": {
            "value": function (c, s, t) {
                if (c === undefined || s === undefined || t === undefined) {
                    throw ("Not enough arguments to AudioParam.setTargetAtTime.");
                }
                if (c.constructor !== Float32Array) {
                    throw ("Argument 1 is not a Float32Array");
                }
                if (typeof s !== "number" || typeof t !== "number") {
                    throw ("TypeError: Value being assigned to AudioParam.value is not a finite floating-point value.");
                }
                return this;
            }
        },
        "cancelScheduledValues": {
            "value": function (t) {
                if (t === undefined) {
                    throw ("TypeError: Not enough arguments to AudioParam.cancelScheduledValues.");
                }
                if (typeof t !== "number") {
                    throw ("TypeError: Argument 1 of AudioParam.cancelScheduledValues is not a finite floating-point value.");
                }
                return this;
            }
        }
    });
};

var GainNode = function (context) {
    AudioNode.call(this, context, context.destination.numberOfChannels, 1, 1);
    var gain = new AudioParam(this, 1.0, -Infinity, +Infinity);
    Object.defineProperties(this, {
        "gain": {
            "value": gain
        }
    });
};

var DelayNode = function (context, maxDelayTime) {
    if (maxDelayTime === undefined || typeof maxDelayTime !== "number" || maxDelayTime <= 0) {
        maxDelayTime = Infinity;
    }
    AudioNode.call(this, context, context.destination.numberOfChannels, 1, 1);
    var delayTime = new AudioParam(this, 0, 0, maxDelayTime);
    Object.defineProperties(this, {
        "delayTime": {
            "value": delayTime
        }
    });
};

var AudioBuffer = function (context, numberOfChannels, length, sampleRate) {
    var data = new Float32Array(sampleRate * length * numberOfChannels);
    Object.defineProperties(this, {
        "sampleRate": {
            "value": sampleRate
        },
        "length": {
            "value": length
        },
        "numberOfChannels": {
            "value": numberOfChannels
        },
        "duration": {
            "value": length / sampleRate
        },
        "copyFromChannel": {
            "value": function (destination, channelNumber, startInChannel) {
                if (destination.constructor !== Float32Array) {
                    throw ("Destination must be a Float32Array");
                }
                if (typeof channelNumber !== "number" || channelNumber < 0 || channelNumber !== Math.floor(channelNumber)) {
                    throw ("Channel number not an integer");
                }
                if (channelNumber >= numberOfChannels) {
                    return new DOMException("IndexSizeError");
                }
                if (startInChannel === undefined) {
                    startInChannel = 0;
                }
                if (startInChannel >= length || startInChannel < 0 || startInChannel !== Math.floor(startInChannel)) {
                    throw ("startInChannel not correct");
                }
                var N = math.min(length - startInChannel, destination.length);
                for (var i = 0; i < N; i++) {
                    destination[i] = data[channelNumber * length + startInChannel + i];
                }
            }
        },
        "copyToChannel": {
            "value": function (source, channelNumber, startInChannel) {
                if (source.constructor !== Float32Array) {
                    throw ("Destination must be a Float32Array");
                }
                if (typeof channelNumber !== "number" || channelNumber < 0 || channelNumber !== Math.floor(channelNumber)) {
                    throw ("Channel number not an integer");
                }
                if (channelNumber >= numberOfChannels) {
                    return new DOMException("IndexSizeError");
                }
                if (startInChannel === undefined) {
                    startInChannel = 0;
                }
                if (startInChannel >= length || startInChannel < 0 || startInChannel !== Math.floor(startInChannel)) {
                    throw ("startInChannel not correct");
                }
                var N = math.min(length - startInChannel, source.length);
                for (var i = 0; i < N; i++) {
                    data[channelNumber * length + startInChannel + i] = source[i];
                }
            }
        },
        "getChannelData": {
            "value": function (channelNumber) {
                var ar = new Float32Array(length);
                for (var i = 0; i < length; i++) {
                    ar[i] = data[channelNumber * length + i];
                }
                return ar;
            }
        }
    });
};

var AudioBufferSourceNode = function (context) {
    var loop = false,
        detune = new AudioParam(this, 0, -1200, +1200),
        playbackRate = new AudioParam(this, 1, -Infinity, Infinity),
        loopStart,
        loopEnd,
        buffer = null,
        onended,
        state = 0;
    AudioNode.call(this, context, context.destination.numberOfChannels, 0, 1);
    Object.defineProperties(this, {
        "detune": {
            "value": detune
        },
        "playbackRate": {
            "value": playbackRate
        },
        "buffer": {
            "get": function () {
                return buffer;
            },
            "set": function (b) {
                if (b === null || b.constructor === AudioBuffer) {
                    buffer = b;
                }
                loopStart = 0;
                loopEnd = buffer.duration;
                return buffer;
            }
        },
        "loop": {
            "get": function () {
                return loop;
            },
            "set": function (s) {
                if (s === true) {
                    loop = true;
                } else {
                    loop = false;
                }
                return loop;
            }
        },
        "loopStart": {
            "get": function () {
                return loopStart;
            },
            "set": function (t) {
                if (typeof t !== "number") {
                    throw ("Value is not a number");
                }
                var m = 0;
                t = Math.max(t, 0);
                t = Math.min(t, buffer.duration);
                loopStart = Math.floor(t * buffer.sampleRate);
                return loopStart / buffer.sampleRate;
            }
        },
        "loopEnd": {
            "get": function () {
                return loopStart;
            },
            "set": function (t) {
                if (typeof t !== "number") {
                    throw ("Value is not a number");
                }
                var m = 0;
                t = Math.max(t, 0);
                t = Math.min(t, buffer.duration);
                loopEnd = Math.floor(t * buffer.sampleRate);
                return loopEnd / buffer.sampleRate;
            }
        },
        "onended": {
            "get": function () {
                return onended;
            },
            "set": function (f) {
                if (typeof f === "function") {
                    onended = f;
                }
                return onended;
            }
        },
        "start": {
            "value": function (when, offset, duration) {
                if (buffer === null) {
                    throw ("No buffer");
                }
                if (state !== 0) {
                    throw ("Cannot call .start multiple times");
                }
                if (when === undefined) {
                    when = 0;
                }
                if (offset === undefined) {
                    offset = 0;
                }
                if (duration === undefined) {
                    duration = buffer.duration;
                }
                state = 1;
            }
        },
        "stop": {
            "value": function (when) {
                if (buffer === null) {
                    throw ("No buffer");
                }
                if (state === 0) {
                    throw ("Has not been started");
                }
                if (when === undefined) {
                    when = 0;
                }
                state = 2;
                onended();
            }
        }
    });
};

var ScriptProcessorNode = function (context, bufferSize, inputChannels, outputChannels) {
    AudioNode.call(this, context, Math.max(inputChannels, outputChannels), 1, 1);
    var AudioProcessingEvent = function (context, bufferSize, inputChannels, outputChannels) {
        Object.defineProperties(this, {
            "inputBuffer": {
                "value": context.createBuffer(inputChannels, bufferSize, context.sampleRate)
            },
            "outputBuffer": {
                "value": context.createBuffer(outputChannels, bufferSize, context.sampleRate)
            },
            "playbackTime": {
                "value": context.currentTime
            }
        });
    };

    var onaudioprocess = null;
    Object.defineProperties(this, {
        "onaudioprocess": {
            "get": function () {
                return onaudioprocess;
            },
            "set": function (f) {
                if (typeof f === "function") {
                    onaudioprocess = f;
                }
                return onaudioprocess;
            }
        },
        "process": {
            "value": function () {
                if (onaudioprocess) {
                    onaudioprocess.call(this, new AudioProcessingEvent(context, bufferSize, inputChannels, outputChannels));
                }
            }
        }
    });
};

var PannerNode = function (context) {
    var PannerCoordinates = function (x, y, z) {
        Object.defineProperties(this, {
            "x": {
                "get": function () {
                    return x;
                },
                "set": function (v) {
                    if (typeof v != "number") {
                        throw ("Non-finite argument passed");
                    }
                    x = v;
                    return x;
                }
            },
            "y": {
                "get": function () {
                    return y;
                },
                "set": function (v) {
                    if (typeof v != "number") {
                        throw ("Non-finite argument passed");
                    }
                    y = v;
                    return y;
                }
            },
            "z": {
                "get": function () {
                    return z;
                },
                "set": function (v) {
                    if (typeof v != "number") {
                        throw ("Non-finite argument passed");
                    }
                    z = v;
                    return z;
                }
            }
        });
    };
    var panningModel = "equalpower",
        distanceModel = "inverse",
        coneInnerAngle = 360,
        coneOuterAngle = 360,
        coneOuterGain = 0,
        maxDistance = 10000,
        refDistance = 1,
        rolloffFactor = 1,
        orientation = new PannerCoordinates(1, 0, 0),
        position = new PannerCoordinates(0, 0, 0),
        velocity = new PannerCoordinates(0, 0, 0);
    AudioNode.call(this, context, 2, 1, 1);
    Object.defineProperties(this, {
        "panningModel": {
            "get": function () {
                return panningModel;
            },
            "set": function (t) {
                if (typeof t !== "string") {
                    throw ("Invalid Type. Must be a string");
                }
                if (t == "equalpower" || t == "HRTF") {
                    panningModel = t;
                    return t;
                }
                throw ("Invalid Model Type");
            }
        },
        "distanceModel": {
            "get": function () {
                return distanceModel;
            },
            "set": function (t) {
                if (typeof t !== "string") {
                    throw ("Invalid Type. Must be a string");
                }
                if (t == "linear" || t == "inverse" || t == "exponential") {
                    distanceModel = t;
                    return t;
                }
                throw ("Invalid Model Type");
            }
        },
        "coneInnerAngle": {
            "get": function () {
                return coneInnerAngle;
            },
            "set": function (v) {
                if (typeof v != "number") {
                    throw ("Non-finite value passed");
                }
                coneInnerAngle = (v % 360);
                return coneInnerAngle;
            }
        },
        "coneOuterAngle": {
            "get": function () {
                return coneOuterAngle;
            },
            "set": function (v) {
                if (typeof v != "number") {
                    throw ("Non-finite value passed");
                }
                coneOuterAngle = (v % 360);
                return coneOuterAngle;
            }
        },
        "coneOuterGain": {
            "get": function () {
                return coneOuterGain;
            },
            "set": function (v) {
                if (typeof v != "number") {
                    throw ("Non-finite value passed");
                }
                if (v < 0 || v > 1) {
                    throw ("InvalidStateError");
                }
                coneOuterGain = v;
                return coneOuterGain;
            }
        },
        "maxDistance": {
            "get": function () {
                return maxDistance;
            },
            "set": function (d) {
                if (typeof d != "number") {
                    throw ("Non- finite value passed");
                }
                if (d < 0) {
                    throw ("InvalidStateError");
                }
                maxDistance = d;
                return maxDistance;
            }
        },
        "refDistance": {
            "get": function () {
                return refDistance;
            },
            "set": function (d) {
                if (typeof d != "number") {
                    throw ("Non-finite value passed");
                }
                if (d < 0) {
                    throw ("InvalidStateError");
                }
                refDistance = d;
                return refDistance;
            }
        },
        "rolloffFactor": {
            "get": function () {
                return rolloffFactor;
            },
            "set": function (d) {
                if (typeof d != "number") {
                    throw ("Non-finite value passed");
                }
                if (d < 0) {
                    throw ("InvalidStateError");
                }
                rolloffFactor = d;
                return rolloffFactor;
            }
        },
        "setOrientation": {
            "value": function (x, y, z) {
                if (typeof y != "number" || typeof x !== "number" || typeof z != "number") {
                    throw ("Invalid parameter types");
                }
                orientation.x = x;
                orientation.y = y;
                orientation.z = z;
            }
        },
        "setPosition": {
            "value": function (x, y, z) {
                if (typeof y != "number" || typeof x !== "number" || typeof z != "number") {
                    throw ("Invalid parameter types");
                }
                position.x = x;
                position.y = y;
                position.z = z;
            }
        },
        "setVelocity": {
            "value": function (x, y, z) {
                if (typeof y != "number" || typeof x !== "number" || typeof z != "number") {
                    throw ("Invalid parameter types");
                }
                velocity.x = x;
                velocity.y = y;
                velocity.z = z;
            }
        }
    });
};

var SpatialPannerNode = function (context) {
    PannerNode.call(this, context);
    var pX = new AudioParam(0, -Infinity, Infinity),
        pY = new AudioParam(0, -Infinity, Infinity),
        pZ = new AudioParam(0, -Infinity, Infinity),
        oX = new AudioParam(0, -Infinity, Infinity),
        oY = new AudioParam(0, -Infinity, Infinity),
        oZ = new AudioParam(0, -Infinity, Infinity);
    Object.defineProperties(this, {
        "positionX": {
            "value": pX
        },
        "positionY": {
            "value": pY
        },
        "positionZ": {
            "value": pZ
        },
        "orientationX": {
            "value": oX
        },
        "orientationY": {
            "value": oY
        },
        "orientationZ": {
            "value": oZ
        }
    });
};

var StereoPannerNode = function (context) {
    AudioNode.call(this, context, 2, 1, 1);
    var pan = new AudioParam(this, 0, -1, +1);
    Object.defineProperties(this, {
        "pan": {
            "value": pan
        }
    });
};

var ConvolverNode = function (context) {
    AudioNode.call(this, context, 2, 1, 1);
    var buffer = null,
        normalise = false;

    function setBuffer(b) {
        if (b.numberOfChannels != 1 && b.numberOfChannels != 2 && b.numberOfChannels != 4) {
            buffer = null;
            throw ("NotSupportedError");
        }
        if (b.sampleRate != context.sampleRate) {
            buffer = null;
            throw ("NotSupportedError");
        }
        buffer = b;
    }

    Object.defineProperties(this, {
        "buffer": {
            "get": function () {
                return buffer;
            },
            "set": function (b) {
                if (b.constructor === AudioBuffer) {
                    setBuffer(b);
                }
                return buffer;
            }
        },
        "normalise": {
            "get": function () {
                return normalise;
            },
            "set": function (t) {
                normalise = (t === true);
                return normalise;
            }
        }
    });
};

var AnalyserNode = function (context) {
    AudioNode.call(this, context, 1, 1, 1);
    var fftSize = 2048,
        maxDecibels = -30,
        minDecibels = -100,
        smoothingTimeConstant = 0.8;

    function getByteData(dst) {
        if (dst.constructor !== Uint8Array) {
            throw ("NotSupportedError");
        }
        var N = Math.min(dst.length, fftSize);
        for (var n = 0; n < N; n++) {
            dst[n] = Math.round(Math.random() * 255);
        }
    }

    Object.defineProperties(this, {
        "fftSize": {
            "get": function () {
                return fftSize;
            },
            "set": function (v) {

                function ispow2(v) {
                    var n = 1;
                    while (n > n << 1) {
                        if (Math.pow(2, n) === v) {
                            return true;
                        }
                        n = n << 1;
                    }
                    return false;
                }

                if (typeof v != "number") {
                    throw ("Not a finite number");
                }
                if (v < 32 || v > 32768) {
                    throw ("Outside of bounds");
                }
                if (!ispow2(v)) {
                    throw ("Not a power of 2");
                }
                fftSize = v;
                return fftSize;
            }
        },
        "frequencyBinCount": {
            "get": function () {
                return fftSize / 2;
            },
            "set": function (v) {
                throw ("Cannot set readonly variable");
            }
        },
        "maxDecibels": {
            "get": function () {
                return maxDecibels;
            },
            "set": function (v) {
                if (typeof v != "number") {
                    throw ("Not a finite number");
                }
                if (v <= minDecibels) {
                    throw ("IndexSizeError");
                }
                maxDecibels = v;
                return maxDecibels;
            }
        },
        "minDecibels": {
            "get": function () {
                return minDecibels;
            },
            "set": function (v) {
                if (typeof v != "number") {
                    throw ("Not a finite number");
                }
                if (v >= maxDecibels) {
                    throw ("IndexSizeError");
                }
                minDecibels = v;
                return minDecibels;
            }
        },
        "smoothingTimeConstant": {
            "get": function () {
                return smoothingTimeConstant;
            },
            "set": function (v) {
                if (typeof v != "number") {
                    throw ("Not a finite number");
                }
                if (v < 0 || v > 1) {
                    throw ("IndexSizeError");
                }
                smoothingTimeConstant = v;
                return smoothingTimeConstant;
            }
        },
        "getByteFrequencyData": {
            "value": getByteData
        },
        "getByteTimeDomainData": {
            "value": getByteData
        },
        "getFloatFrequencyData": {
            "value": function (dst) {
                if (dst.constructor !== Float32Array) {
                    throw ("NotSupportedError");
                }
                var N = Math.min(dst.length, this.frequencyBinCount);
                for (var n = 0; n < N; n++) {
                    dst[n] = minDecibels + (Math.random() * (maxDecibels - minDecibels));
                }
            }
        },
        "getFloatTimeDomainData": {
            "value": function (dst) {
                if (dst.constructor !== Float32Array) {
                    throw ("NotSupportedError");
                }
                var N = Math.min(dst.length, this.fftSize);
                for (var n = 0; n < N; n++) {
                    dst[n] = -1 + (Math.random() * 2);
                }
            }
        }
    });
};

var ChannelSplitterNode = function (context) {
    AudioNode.call(this, context, 6, 1, 6);
};

var ChannelMergerNode = function (context) {
    AudioNode.call(this, context, 6, 6, 1);
};

var DynamicsCompressorNode = function (context) {
    AudioNode.call(this, context, 2, 1, 1);
    var attack = new AudioParam(this, 0.003, 0, 1),
        knee = new AudioParam(this, 30, 0, 40),
        ratio = new AudioParam(this, 12, 1, 20),
        reduction = 0,
        release = new AudioParam(this, 0.25, 0, 1),
        threshold = new AudioParam(this, -24, -100, 0);

    Object.defineProperties(this, {
        "attack": {
            "value": attack
        },
        "knee": {
            "value": knee
        },
        "ratio": {
            "value": ratio
        },
        "release": {
            "value": release
        },
        "threshold": {
            "value": threshold
        },
        "reduction": {
            "get": function () {
                return reduction;
            },
            "set": function () {
                throw ("Cannot set readonly variable");
            }
        }
    });
};

var BiquadFilterNode = function (context) {
    AudioNode.call(this, context, 2, 1, 1);
    var frequency = new AudioParam(this, 350, 10, context.sampleRate / 2),
        detune = new AudioParam(this, 0, -Infinity, +Infinity),
        Q = new AudioParam(this, 1, 0.0001, 1000),
        gain = new AudioParam(this, 0, -40, 40),
        types = ["lowpass", "highpass", "bandpass", "lowshelf", "highshelf", "peaking", "notch", "allpass"],
        type = 0;

    Object.defineProperties(this, {
        "frequency": {
            "value": frequency
        },
        "detune": {
            "value": detune
        },
        "Q": {
            "value": Q
        },
        "gain": {
            "value": gain
        },
        "type": {
            "get": function () {
                return types[type];
            },
            "set": function (s) {
                if (typeof s !== "string" || s.length == 0) {
                    throw ("Invalid arguments passed");
                }
                var i = types.findIndex(function (a) {
                    return a == s;
                });
                if (i == -1) {
                    throw ("Type not defined");
                }
                type = i;
                return types[type];
            }
        },
        "getFrequencyResponse": {
            "value": function (frequencyHz, magResponse, phaseResponse) {
                if (frequencyHz === undefined || magResponse === undefined || phaseResponse === undefined) {
                    throw ("InvalidAccessError");
                }
                if (frequencyHz.length != magResponse.length || magResponse.length != phaseResponse.length) {
                    throw ("InvalidAccessError");
                }
                var N = frequencyHz.length;
                for (n = 0; n < N; n++) {
                    if (frequencyHz[n] < 0 || frequencyHz[n] > context.sampleRate / 2) {
                        magResponse[n] = phaseResponse[n] = NaN;
                    } else {
                        magResponse[n] = Math.random() * (-40);
                        phaseResponse[n] = (Math.random() * (2 * Math.PI)) - Math.PI;
                    }
                }
            }
        }
    });
};

var IIRFilterNode = function (context, feedforward, feedback) {
    var N = Math.max(feedforward.length, feedback.length),
        a = new Float32Array(N),
        b = new Float32Array(N);

    for (var n = 0; n < feedforward.length; n++) {
        b[n] = feedforward[n];
    }
    for (var n = 0; n < feedback.length; n++) {
        a[n] = feedback[n];
    }

    Object.defineProperties(this, {
        "getFrequencyResponse": {
            "value": function (frequencyHz, magResponse, phaseResponse) {
                if (frequencyHz === undefined || magResponse === undefined || phaseResponse === undefined) {
                    throw ("InvalidAccessError");
                }
                if (frequencyHz.length != magResponse.length || magResponse.length != phaseResponse.length) {
                    throw ("InvalidAccessError");
                }
                var N = frequencyHz.length;
                for (n = 0; n < N; n++) {
                    if (frequencyHz[n] < 0 || frequencyHz[n] > context.sampleRate / 2) {
                        magResponse[n] = phaseResponse[n] = NaN;
                    } else {
                        magResponse[n] = Math.random() * (-40);
                        phaseResponse[n] = (Math.random() * (2 * Math.PI)) - Math.PI;
                    }
                }
            }
        }
    });
};

var WaveShaperNode = function (context) {
    var oversample = "none",
        curve = null;
    Object.defineProperties(this, {
        "curve": {
            "get": function () {
                return curve;
            },
            "set": function (v) {
                if (v.length === undefined) {
                    throw ("InvalidStateError 1");
                }
                if (v.length < 2) {
                    throw ("InvalidStateError 2");
                }
                curve = new Float32Array(v.length);
                v.forEach(function (e, i) {
                    curve[i] = e;
                });
                return curve;
            }
        },
        "oversample": {
            "get": function () {
                return oversample;
            },
            "set": function (t) {
                switch (t) {
                    case "none":
                        oversample = "none";
                        break;
                    case "2x":
                        oversample = "2x";
                        break;
                    case "4x":
                        oversample = "4x";
                        break;
                    default:
                        throw ("InvalidStateError");
                }
            }
        }
    });
};

var OscillatorNode = function (context) {
    AudioNode.call(this, context, 1, 0, 1);
    var detune = new AudioParam(this, 0, -Infinity, Infinity),
        frequency = new AudioParam(this, 440, -Infinity, Infinity),
        onended = undefined,
        type = "sine",
        state = 0;

    function StartEvent(node, time) {
        this.execute = function () {
            node.start(0);
        }
    }

    function StopEvent(node, time) {
        this.execute = function () {
            node.stop(0);
        }
    }

    Object.defineProperties(this, {
        "detune": {
            "value": detune
        },
        "frequency": {
            "value": frequency
        },
        "type": {
            "get": function () {
                return type;
            },
            "set": function (t) {
                switch (t) {
                    case "sine":
                    case "square":
                    case "sawtooth":
                    case "triangle":
                    case "custom":
                        type = t;
                        break;
                    default:
                        throw ("InvalidStateError");
                }
            }
        },
        "onended": {
            "get": function () {
                return onended;
            },
            "set": function (f) {
                if (typeof f != "function") {
                    throw ("InvalidStateError");
                }
                oneded = f;
            }
        },
        "start": {
            "value": function (when) {
                if (state != 0) {
                    throw ("InvalidStateError");
                }
                if (typeof when != "number") {
                    when = context.currentTime;
                }
                if (when > context.currentTime) {
                    context.addEvent(new StartEvent(this, when), when);
                } else {
                    state = 1;
                }
            }
        },
        "stop": {
            "value": function (when) {
                if (state != 1) {
                    throw ("InvalidStateError");
                }
                if (typeof when != "number") {
                    when = context.currentTime;
                }
                if (when > context.currentTime) {
                    context.addEvent(new StopEvent(this, when), when);
                } else {
                    if (onended) {
                        onended.call(window);
                    }
                    state = 2;
                }
            }
        }
    });
};

var PeriodicWave = function (context, r, i, constraints) {
    var real = new Float32Array(r.length),
        imag = new Float32Array(i.length);
    r.forEach(function (a, i) {
        real[i] = a;
    });
    i.forEach(function (a, i) {
        imag[i] = a;
    });
}

var AudioContext = function (sampleRate) {
    var state = "suspended",
        destination = new AudioNode(this, 2, 1, 0),
        currentTime = 0,
        onstatechangecallback = function () {},
        events = [];

    function onstatechange() {
        var e = new Event();
        onstatechangecallback.call(e);
    }

    if (sampleRate === undefined || typeof sampleRate !== "number") {
        sampleRate = 48000;
    }

    Object.defineProperties(this, {
        "state": {
            "get": function () {
                return state;
            }
        },
        "destination": {
            "value": destination
        },
        "sampleRate": {
            "value": sampleRate
        },
        "currentTime": {
            "get": function () {
                return currentTime;
            }
        },
        "suspend": {
            "value": function () {
                return new Promise(function (resolve, reject) {
                    state = "suspended";
                    resolve();
                });
            }
        },
        "resume": {
            "value": function () {
                return new Promise(function (resolve, reject) {
                    state = "running";
                    resolve();
                }).then(function () {
                    while (events.length > 0) {
                        this.moveToNextEvent();
                    }
                }.bind(this));
            }
        },
        "close": {
            "value": function () {
                return new Promise(function (resolve, reject) {
                    state = "closed";
                    resolve();
                });
            }
        },
        "onstatechange": {
            "get": function () {
                return onstatechangecallback;
            },
            "set": function (f) {
                if (typeof f === "function") {
                    f = onstatechangecallback;
                }
                return onstatechangecallback;
            }
        },
        "decodeAudioData": {
            "value": function (a, onsuccess, onerror) {
                var f = new Float32Array(1024),
                    e;
                if (onsuccess === undefined && onerror === undefined) {
                    return new Promise(function (resolve, reject) {
                        if (a.constructor !== ArrayBuffer) {
                            e = new DOMException('NotSupportedError');
                            reject(e);
                        } else {
                            resolve(f);
                        }
                    });
                } else {
                    if (a.constructor !== ArrayBuffer) {
                        e = new DOMException('NotSupportedError');
                        if (onerror) {
                            onerror(e);
                        }
                    } else {
                        onsuccess(f);
                    }
                    return;
                }
            }
        },
        "createGain": {
            "value": function () {
                return new GainNode(this);
            }
        },
        "createDelay": {
            "value": function () {
                return new DelayNode(this);
            }
        },
        "createBuffer": {
            "value": function (numberOfChannels, length, sampleRate) {
                return new AudioBuffer(this, numberOfChannels, length, sampleRate);
            }
        },
        "createBufferSource": {
            "value": function () {
                return new AudioBufferSourceNode(this);
            }
        },
        "createScriptProcessor": {
            "value": function (bufferSize, numberOfInputChannels, numberOfOutputChannels) {
                return new ScriptProcessorNode(this, bufferSize, numberOfInputChannels, numberOfOutputChannels);
            }
        },
        "createPanner": {
            "value": function () {
                return new PannerNode(this);
            }
        },
        "createSpatialPanner": {
            "value": function () {
                return new SpatialPannerNode(this);
            }
        },
        "createStereoPanner": {
            "value": function () {
                return new StereoPannerNode(this);
            }
        },
        "createConvolver": {
            "value": function () {
                return new ConvolverNode(this);
            }
        },
        "createAnalyser": {
            "value": function () {
                return new AnalyserNode(this);
            }
        },
        "createChannelSplitter": {
            "value": function () {
                return new ChannelSplitterNode(this);
            }
        },
        "createChannelMerger": {
            "value": function () {
                return new ChannelMergerNode(this);
            }
        },
        "createDynamicsCompressor": {
            "value": function () {
                return new DynamicsCompressorNode(this);
            }
        },
        "createBiquadFilter": {
            "value": function () {
                return new BiquadFilterNode(this);
            }
        },
        "createIIRFilter": {
            "value": function (feedforward, feedback) {
                if (feedforward === undefined || feedback === undefined) {
                    throw ("InvalidStateError");
                }
                if (feedforward.length == 0 || feedforward.length > 20) {
                    throw ("NotSupportedError");
                }
                if (feedback.length == 0 || feedback.length > 20) {
                    throw ("NotSupportedError");
                }
                return new IIRFilterNode(this, feedforward, feedback);
            }
        },
        "createWaveShaper": {
            "value": function () {
                return new WaveShaperNode(this);
            }
        },
        "createOscillator": {
            "value": function () {
                return new OscillatorNode(this);
            }
        },
        "createPeriodicWave": {
            "value": function (real, imag, constraints) {
                if (real.length === undefined || real.length === 0 || imag.length === undefined || imag.length === 0) {
                    throw ("InvalidStateError");
                }
                return new PeriodicWave(this, real, imag, constraints);
            }
        },
        "addEvent": {
            "value": function (e, time) {
                events.push({
                    event: e,
                    time: time
                });
                events = events.sort(function (a, b) {
                    if (a.time > b.time) {
                        return 1;
                    } else if (a.time < b.time) {
                        return -1;
                    }
                    return 0;
                });
                return e;
            }
        },
        "removeEvent": {
            "value": function (e) {
                var i = events.findIndex(function (a) {
                    return a === e;
                });
                if (i >= 0) {
                    events.splice(i, 1);
                    return;
                }
                throw ("Event not found");
            }
        },
        "moveToNextEvent": {
            "value": function () {
                var e = events[0];
                currentTime = e.time;
                e.event.execute();
                this.removeEvent(e);
            }
        }
    });
};
