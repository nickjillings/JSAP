// Add getInputs to all AudioNodes to ease deployment
/*globals AudioNode, Worker, console, window, document, Promise, XMLHttpRequest */
/*eslint-env browser */
if (typeof AudioNode === "function" && window.importScripts === undefined) {
    AudioNode.prototype.getInputs = function () {
        return [this];
    };
}

// This should simply define the BasePlugin from which custom plugins can be built from
var BasePlugin = function (factory, owner) {
    var inputList = [],
        outputList = [],
        pOwner = owner;
    this.context = factory.context;
    this.factory = factory;
    this.featureMap = new PluginFeatureInterface(this);
    this.externalInterface = new PluginInterfaceMessageHub(this);
    this.parameters = new ParameterManager(this, this.externalInterface);

    function deleteIO(node, list) {
        var i = list.findIndex(function (e) {
            return e === this;
        }, node);
        if (i === -1) {
            return false;
        }
        list.splice(i, 1);
        return true;
    }

    this.addInput = function (node) {
        inputList.push(node);
        return inputList;
    };
    this.deleteInput = function (node) {
        return deleteIO(node, inputList);
    };
    this.addOutput = function (node) {
        outputList.push(node);
        return this.outputs;
    };
    this.deleteOutput = function (node) {
        return deleteIO(node, outputList);
    };

    this.start = this.stop = this.onloaded = this.onunloaded = this.deconstruct = function () {};

    Object.defineProperties(this, {
        "numInputs": {
            get: function () {
                return inputList.length;
            },
            set: function () {
                throw ("Cannot set the number of inputs of BasePlugin");
            }
        },
        "numOutputs": {
            get: function () {
                return outputList.length;
            },
            set: function () {
                throw ("Cannot set the number of outputs of BasePlugin");
            }
        },
        "numParameters": {
            get: function () {
                return this.parameters.parameters.length;
            },
            set: function () {
                throw ("Cannot set the number of parameters of BasePlugin");
            }
        },
        "owner": {
            get: function () {
                return pOwner;
            },
            set: function (owner) {
                if (typeof owner === "object") {
                    pOwner = owner;
                }
                return pOwner;
            }
        },
        "inputs": {
            get: function (index) {
                return inputList;
            },
            set: function () {
                throw ("Illegal attempt to modify BasePlugin");
            }
        },
        "outputs": {
            get: function (index) {
                return outputList;
            },
            set: function () {
                throw ("Illegal attempt to modify BasePlugin");
            }
        },
        "connect": {
            "value": function (dest) {
                this.outputs[0].connect(dest.inpt ? dest.input : dest);
            }
        },
        "disconnect": {
            "value": function (dest) {
                if (dest === undefined) {
                    this.outputs[0].disconnect();
                } else {
                    this.outputs[0].disconnect(dest.input ? dest.input : dest);
                }
            }
        },
        "getInputs": {
            "value": function () {
                return this.inputs;
            }
        },
        "getOutputs": {
            "value": function () {
                return this.outputs;
            }
        },
        "getParameterName": {
            "value": function () {
                return this.parameters.getParameterNames();
            }
        },
        "getParameterByName": {
            "value": function () {
                return this.parameters.getParameterByName();
            }
        },
        "getParameterObject": {
            "value": function () {
                return this.parameters.getParameterObject();
            }
        },
        "setParameterByName": {
            "value": function (name, value) {
                return this.parameters.setParameterByName(name, value);
            }
        },
        "setParametersByObject": {
            "value": function (object) {
                return this.parameters.setParametersByObject(object);
            }
        }
    });
};

var ParameterManager = function (owner, pluginExternalInterface) {
    var parameterList = [];

    function findParameter(name) {
        return parameterList.find(function (e) {
            return e.name === name;
        });
    }

    function findParameterIndex(name) {
        return parameterList.findIndex(function (e) {
            return e.name === name;
        });
    }

    function buildParameterObject() {
        var obj = {};
        parameterList.forEach(function (e) {
            obj[e.name] = e;
        });
        return obj;
    }

    function addParameter(param) {
        var exists = parameterList.findIndex(function (e) {
            return e === param;
        }, param);
        if (exists === -1) {
            parameterList.push(param);
        }
        return param;
    }

    function PluginParameter(owner, name, dataType) {
        var update, translate, trigger, audioParam, _ActionList = [];
        update = translate = function (v) {
            return v;
        };
        trigger = function () {};
        Object.defineProperties(this, {
            "name": {
                "value": name
            },
            "owner": {
                "value": owner
            },
            "update": {
                "get": function () {
                    return update;
                },
                "set": function (f) {
                    if (typeof f !== "function") {
                        throw ("Must be a callback function");
                    }
                    if (f(0) === undefined) {
                        throw ("Function must return a value");
                    }
                    update = f;
                }
            },
            "translate": {
                "get": function () {
                    return translate;
                },
                "set": function (f) {
                    if (typeof f !== "function") {
                        throw ("Must be a callback function");
                    }
                    if (f(0) === undefined) {
                        throw ("Function must return a value");
                    }
                    translate = f;
                }
            },
            "trigger": {
                "get": function () {
                    return trigger;
                },
                "set": function (f) {
                    if (typeof f !== "function") {
                        throw ("Must be a callback function");
                    }
                    trigger = f;
                }
            },
            "bindToAudioParam": {
                "value": function (ap) {
                    if (typeof ap !== "object" || ap.value === undefined) {
                        throw ("Must be an AudioParam object from an AudioNode");
                    }
                    var v = this.update(this.value);
                    audioParam = ap;
                    audioParam.value = v;
                }
            },
            "boundAudioParam": {
                "get": function () {
                    return audioParam;
                }
            },
            "actionList": {
                "value": _ActionList
            }
        });
    }

    function NumberParameter(owner, name, defaultValue, minimum, maximum) {
        PluginParameter.call(this, owner, name, "Number");
        var _value = defaultValue,
            _stepSize;

        function addAction(v) {
            var entry = {
                'time': new Date(),
                'value': v
            };
            this.actionList.push(entry);
        }

        Object.defineProperties(this, {
            "destroy": {
                "value": function () {
                    owner = name = defaultValue = minimum = maximum = _value = _stepSize = undefined;
                }
            },
            "minimum": {
                "value": minimum
            },
            "maximum": {
                "value": maximum
            },
            "defaultValue": {
                "value": defaultValue
            },
            "value": {
                "get": function () {
                    if (this.boundAudioParam) {
                        return this.translate(this.boundAudioParam.value);
                    }
                    return _value;
                },
                "set": function (v) {
                    if (this.minimum) {
                        v = Math.max(v, this.minimum);
                    }
                    if (this.maximum) {
                        v = Math.min(v, this.maximum);
                    }
                    if (_stepSize) {
                        v = Math.round(v / _stepSize);
                        v = v * _stepSize;
                    }
                    if (this.boundAudioParam) {
                        this.boundAudioParam.value = this.update(v);
                    }
                    _value = v;
                    this.trigger();
                }
            },
            "stepSize": {
                "get": function () {
                    return _stepSize;
                },
                "set": function (n) {
                    if (!isFinite(n) || n < 0) {
                        throw ("Invalid step size");
                    }
                    _stepSize = n;
                }
            }
        });
    }
    NumberParameter.prototype = Object.create(PluginParameter.prototype);
    NumberParameter.prototype.constructor = NumberParameter;

    function StringParameter(owner, name, defaultValue, maxLength) {
        PluginParameter.call(this, owner, name, "String");
        var _value = defaultValue;

        function addAction(v) {
            var entry = {
                'time': new Date(),
                'value': v
            };
            this.actionList.push(entry);
        }

        Object.defineProperties(this, {
            "destroy": {
                "value": function () {
                    owner = name = defaultValue = maxLength = _value = undefined;
                }
            },
            "maxLength": {
                "value": maxLength
            },
            "defaultValue": {
                "value": defaultValue
            },
            "value": {
                "get": function () {
                    if (this.boundAudioParam) {
                        return this.translate(this.boundAudioParam.value);
                    }
                    return _value;
                },
                "set": function (v) {
                    if (maxLength) {
                        if (v.length > maxLength) {
                            throw ("String longer than " + maxLength + " characters");
                        }
                    }
                    if (this.boundAudioParam) {
                        this.boundAudioParam.value = this.update(v);
                    }
                    _value = v;
                    this.trigger();
                }
            }
        });
    }
    StringParameter.prototype = Object.create(PluginParameter.prototype);
    StringParameter.prototype.constructor = StringParameter;

    function ButtonParameter(owner, name) {
        PluginParameter.call(this, owner, name, "Button");
        var onclick = function () {};

        function addAction(v) {
            var entry = {
                'time': new Date(),
                'value': "clicked"
            };
            this.actionList.push(entry);
        }

        Object.defineProperties(this, {
            "destroy": {
                "value": function () {
                    owner = name = undefined;
                }
            },
            "onclick": {
                "get": function () {
                    return onclick;
                },
                "set": function (f) {
                    if (typeof f !== "function") {
                        throw ("onclick must be a function");
                    }
                    onclick = f;
                }
            }
        });
    }
    ButtonParameter.prototype = Object.create(PluginParameter.prototype);
    ButtonParameter.prototype.constructor = ButtonParameter;

    function SwitchParameter(owner, name, defaultValue, minState, maxState) {
        PluginParameter.call(this, owner, name, "Button");
        var onclick = function () {};
        var _value = defaultValue;

        function addAction(v) {
            var entry = {
                'time': new Date(),
                'value': v
            };
            this.actionList.push(entry);
        }

        function setV(v) {
            if (this.boundAudioParam) {
                this.boundAudioParam.value = this.update(v);
            }
            addAction.call(this, v);
            _value = v;
            this.trigger();
            return v;
        }

        Object.defineProperties(this, {
            "destroy": {
                "value": function () {
                    owner = name = undefined;
                }
            },
            "defaultValue": {
                "value": defaultValue
            },
            "minState": {
                "value": minState
            },
            "maxState": {
                "value": maxState
            },
            "value": {
                "get": function () {
                    if (this.boundAudioParam) {
                        return this.translate(this.boundAudioParam.value);
                    }
                    return _value;
                },
                "set": function (v) {
                    if (v < minState) {
                        throw ("Set value is less than " + minState);
                    }
                    if (v > maxState) {
                        throw ("Set value is greater than " + maxState);
                    }
                    return setV.call(this, v);
                }
            },
            "increment": {
                "value": function () {
                    var v = _value + 1;
                    if (v > maxState) {
                        v = minState;
                    }
                    return setV.call(this, v);
                }
            },
            "decrement": {
                "value": function () {
                    var v = _value - 1;
                    if (v < minState) {
                        v = maxState;
                    }
                    return setV.call(this, v);
                }
            }
        });
    }
    SwitchParameter.prototype = Object.create(PluginParameter.prototype);
    SwitchParameter.prototype.constructor = SwitchParameter;

    Object.defineProperties(this, {
        'createNumberParameter': {
            "value": function (name, defaultValue, minimum, maximum) {
                if (typeof name !== "string" || typeof defaultValue !== "number" || (minimum !== undefined && typeof minimum !== "number") || (maximum !== undefined && typeof maximum !== "number")) {
                    throw ("Invlid constructor");
                }
                if (findParameterIndex(name) !== -1) {
                    throw ("Parameter with name '" + name + "' already exists");
                }
                var param = new NumberParameter(owner, name, defaultValue, minimum, maximum);
                addParameter(param);
                return param;
            }
        },
        'createStringParameter': {
            "value": function (name, defaultValue, maxLength) {
                if (typeof name !== "string" || typeof defaultValue !== "string" || (maxLength !== undefined && typeof maxLength !== "number")) {
                    throw ("Invlid constructor");
                }
                if (findParameterIndex(name) !== -1) {
                    throw ("Parameter with name '" + name + "' already exists");
                }
                var param = new StringParameter(owner, name, defaultValue, maxLength);
                addParameter(param);
                return param;
            }
        },
        'createButtonParameter': {
            "value": function (name) {
                if (typeof name !== "string") {
                    throw ("Invalid constructor");
                }
                if (findParameterIndex(name) !== -1) {
                    throw ("Parameter with name '" + name + "' already exists");
                }
                var param = new ButtonParameter(owner, name);
                addParameter(param);
                return param;
            }
        },
        'createSwitchParameter': {
            "value": function (name, defaultValue, minState, maxState) {
                if (typeof name !== "string" || typeof defaultValue !== "number" || typeof minState !== "number" || typeof maxState !== "number") {
                    throw ("Invlid constructor");
                }
                if (findParameterIndex(name) !== -1) {
                    throw ("Parameter with name '" + name + "' already exists");
                }
                var param = new SwitchParameter(owner, name, defaultValue, minState, maxState);
                addParameter(param);
                return param;
            }
        },
        'createParameter': {
            'value': function () {
                throw ("This function is now deprecated");
            }
        },
        'getParameterName': {
            'value': function () {
                var names = [],
                    i;
                for (i = 0; i < parameterList.length; i++) {
                    names.push(parameterList[i].name);
                }
                return names;
            }
        },
        'getParameterByName': {
            'value': function (name) {
                return findParameter(name);
            }
        },
        'getParameterObject': {
            'value': function () {
                return buildParameterObject();
            }
        },
        'getParameterNames': {
            'value': function () {
                var l = [];
                parameterList.forEach(function (a) {
                    l.push(a.name);
                });
                return l;
            }
        },
        'setParameterByName': {
            'value': function (n, v) {
                var parameter = findParameter(n);
                if (!parameter) {
                    return;
                }
                parameter.value = v;
            }
        },
        'deleteParameter': {
            'value': function (o) {
                var index = parameterList.findIndex(function (e) {
                    return e === o;
                }, o);
                if (index >= 0) {
                    // Does exist
                    parameterList.splice(index, 1);
                    o.destroy();
                    return true;
                }
                return false;
            }
        },
        'deleteAllParameters': {
            'value': function (o) {
                parameterList.forEach(function (e) {
                    e.destroy();
                });
                parameterList = [];
                return true;
            }
        },
        'setParametersByObject': {
            'value': function (object) {
                var key;
                for (key in object) {
                    if (object.hasOwnProperty(key)) {
                        if (typeof object[key] == "object") {

                            this.setParameterByName(key, object[key].value);
                        } else if (typeof object[key] == "number") {
                            this.setParameterByName(key, object[key]);
                        } else {
                            throw ("Cannot set " + key + ": Not a valid object");
                        }
                    }
                }
            }
        },
        'parameters': {
            'get': function () {
                return buildParameterObject();
            },
            'set': function () {
                throw ("Cannot set, use .setParameterBy...()");
            }
        }
    });
};

var PluginFeatureInterface = function (BasePluginInstance) {
    this.plugin = BasePluginInstance;
    this.Receiver = new PluginFeatureInterfaceReceiver(this, BasePluginInstance.factory.FeatureMap);
    this.Sender = new PluginFeatureInterfaceSender(this, BasePluginInstance.factory.FeatureMap);

    Object.defineProperty(this, "onfeatures", {
        'get': function () {
            return this.Receiver.onfeatures;
        },
        'set': function (func) {
            this.Receiver.onfeatures = func;
            return func;
        }
    });
};
var PluginFeatureInterfaceReceiver = function (FeatureInterfaceInstance, FactoryFeatureMap) {
    function checkFeatureArgs(source, featureObject) {
        if (source === undefined) {
            throw ("Source plugin must be defined");
        }
        if (featureObject === undefined) {
            throw ("FeatureObject must be defined");
        }
        if (typeof featureObject.outputIndex !== "number" || typeof featureObject.frameSize !== "number" || typeof featureObject.features !== "object") {
            throw ("Malformed featureObject");
        }
        return true;
    }
    var c_features = function () {};
    this.requestFeatures = function (featureList) {
        var i;
        for (i = 0; i < featureList.length; i++) {
            this.requestFeaturesFromPlugin(featureList[i].plugin, {
                'outputIndex': featureList[i].outputIndex,
                'frameSize': featureList[i].frameSize,
                'features': featureList[i].features
            });
        }
    };
    this.requestFeaturesFromPlugin = function (source, featureObject) {
        checkFeatureArgs(source, featureObject);
        FactoryFeatureMap.requestFeatures(FeatureInterfaceInstance.plugin, source, featureObject);
    };
    this.cancelFeaturesFromPlugin = function (source, featureObject) {
        checkFeatureArgs(source, featureObject);
        FactoryFeatureMap.deleteFeatures(FeatureInterfaceInstance.plugin, source, featureObject);
    };
    this.cancelAllFeaturesFromPlugin = function (source) {
        if (source === undefined) {
            throw ("Source plugin must be defined");
        }
        FactoryFeatureMap.deleteFeatures(FeatureInterfaceInstance.plugin, source);
    };
    this.cancelAllFeatures = function () {
        FactoryFeatureMap.deleteFeatures(FeatureInterfaceInstance.plugin);
    };

    this.postFeatures = function (Message) {
        /*
            Called by the Plugin Factory with the feature message
            message = {
                'plugin': sourcePluginInstance,
                'outputIndex': outputIndex,
                'frameSize': frameSize,
                'features': {} JS-Xtract feature results object
            }
        */
        if (typeof c_features === "function") {
            c_features(Message);
        }
    };

    Object.defineProperty(this, "onfeatures", {
        'get': function () {
            return c_features;
        },
        'set': function (func) {
            if (typeof func === "function") {
                c_features = func;
                return true;
            }
            return false;
        }
    });

};
var PluginFeatureInterfaceSender = function (FeatureInterfaceInstance, FactoryFeatureMap) {
    var OutputNode = function (parent, output, index) {
        var extractors = [];
        var Extractor = function (output, frameSize) {
            this.extractor = FeatureInterfaceInstance.plugin.factory.context.createAnalyser();
            this.extractor.fftSize = frameSize;
            output.connect(this.extractor);
            this.features = [];
            Object.defineProperty(this, "frameSize", {
                'value': frameSize
            });
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
            var recursiveProcessing = this.factory.recursiveProcessing;

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
        };
        var WorkerExtractor = function (output, frameSize) {
            function onaudiocallback(e) {
                var c, frames = [];
                for (c = 0; c < e.inputBuffer.numberOfChannels; c++) {
                    frames[c] = e.inputBuffer.getChannelData(c);
                }
                worker.postMessage({
                    'state': 2,
                    'frames': frames
                });
            }

            function response(msg) {
                this.postFeatures(frameSize, msg.data.response);
            }

            var worker = new Worker("jsap/feature-worker.js");
            worker.onerror = function (e) {
                console.error(e);
            };

            this.setFeatures = function (featureList) {
                var self = this;
                var configMessage = {
                    'state': 1,
                    'sampleRate': FeatureInterfaceInstance.plugin.factory.context.sampleRate,
                    'featureList': featureList,
                    'numChannels': output.numberOfOutputs,
                    'frameSize': this.frameSize
                };
                this.features = featureList;
                if (featureList && featureList.length > 0) {
                    worker.onmessage = function (e) {
                        if (e.data.state === 1) {
                            worker.onmessage = response.bind(self);
                            self.extractor.onaudioprocess = onaudiocallback.bind(self);
                        } else {
                            worker.postMessage(configMessage);
                        }
                    };
                    worker.postMessage({
                        'state': 0
                    });
                } else {
                    this.extractor.onaudioprocess = undefined;
                }

            };

            this.extractor = FeatureInterfaceInstance.plugin.factory.context.createScriptProcessor(frameSize, output.numberOfOutputs, 1);
            output.connect(this.extractor);
            this.extractor.connect(FeatureInterfaceInstance.plugin.factory.context.destination);

            Object.defineProperty(this, "frameSize", {
                'value': frameSize
            });
        };
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
                        'outputIndex': index,
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
                // This MUST be === NOT ===
                return e.frameSize === check;
            });
        };
        this.deleteExtractor = function (frameSize) {};
    };
    var outputNodes = [];
    this.updateFeatures = function (featureObject) {
        // [] Output -> {} 'framesize' -> {} 'features'
        var o;
        for (o = 0; o < featureObject.length; o++) {
            if (outputNodes[o] === undefined) {
                if (o > FeatureInterfaceInstance.plugin.numOutputs) {
                    throw ("Requested an output that does not exist");
                }
                outputNodes[o] = new OutputNode(FeatureInterfaceInstance.plugin, FeatureInterfaceInstance.plugin.outputs[o], o);
                Object.defineProperty(outputNodes[o], "postFeatures", {
                    'value': function (resultObject) {
                        this.postFeatures(resultObject);
                    }.bind(this)
                });
            }
            var si;
            for (si = 0; si < featureObject[o].length; si++) {
                var extractor = outputNodes[o].findExtractor(featureObject[o][si].frameSize);
                if (!extractor) {
                    extractor = outputNodes[o].addExtractor(featureObject[o][si].frameSize);
                }
                extractor.setFeatures(featureObject[o][si].featureList);
            }
        }
    };

    this.postFeatures = function (featureObject) {
        /*
            Called by the individual extractor instances:
            featureObject = {'frameSize': frameSize,
            'outputIndex': outputIndex,
            'results':[]}
        */
        FeatureInterfaceInstance.plugin.factory.FeatureMap.postFeatures({
            'plugin': FeatureInterfaceInstance.plugin.pluginInstance,
            'outputIndex': featureObject.outputIndex,
            'frameSize': featureObject.frameSize,
            'results': featureObject.results
        });
    };

    // Send to Factory
    FactoryFeatureMap.createSourceMap(this, FeatureInterfaceInstance.plugin.pluginInstance);
};

/*
    This is an optional module which will attempt to create a graphical implementation.
    As with other audio plugins for DAWs, the GUI is an optional element which can be accepted or rejected by the host.

    The actual GUI is launched as an <iframe> element in the browser to keep each plugin isolated from the rest
*/

var PluginUserInterface = function (BasePluginInstance, width, height) {
    console.log("DEPRECATED!!");
    console.log("The class PluginUserInterface has been deprecated");
    console.log("Please look at the documents for the new methods for building plugins");
    this.processor = BasePluginInstance;
    this.root = document.createElement("div");
    if (width > 0) {
        this.root.style.width = width + "px";
    }
    if (height > 0) {
        this.root.style.height = height + "px";
    }
    this.dim = {
        width: width,
        height: height
    };
    this.intervalFunction = null;
    this.updateInterval = null;
    this.PluginParameterInterfaces = [];

    var PluginParameterInterfaceNode = function (DOM, PluginParameterInstance, processor, gui) {
        this.input = DOM;
        this.processor = processor;
        this.GUI = gui;
        this.AudioParam = PluginParameterInstance;
        this.handleEvent = function (event) {
            this.AudioParam.value = this.input.value;
        };
        this.input.addEventListener("change", this);
        this.input.addEventListener("mousemove", this);
        this.input.addEventListener("click", this);
    };

    this.createPluginParameterInterfaceNode = function (DOM, PluginParameterInstance) {
        var node = new PluginParameterInterfaceNode(DOM, PluginParameterInstance, this.processor, this);
        this.PluginParameterInterfaces.push(node);
        return node;
    };

    this.update = function () {};

};

PluginUserInterface.prototype.getRoot = function () {
    return this.root;
};
PluginUserInterface.prototype.getDimensions = function () {
    return this.dim;
};
PluginUserInterface.prototype.getWidth = function () {
    return this.dim.width;
};
PluginUserInterface.prototype.getHeight = function () {
    return this.dim.height;
};
PluginUserInterface.prototype.beginCallbacks = function (ms) {
    // Any registered callbacks are started by the host
    if (ms === undefined) {
        ms = 250;
    } //Default of 250ms update period
    if (this.intervalFunction === null) {
        this.updateInterval = ms;
        this.intervalFunction = window.setInterval(function () {
            this.update();
        }.bind(this), 250);
    }
};
PluginUserInterface.prototype.stopCallbacks = function () {
    // Any registered callbacks are stopped by the host
    if (this.intervalFunction !== null) {
        window.clearInterval(this.intervalFunction);
        this.updateInterval = null;
        this.intervalFunction = null;
    }
};
PluginUserInterface.prototype.loadResource = function (url) {
    var p = new Promise(function (resolve, reject) {
        var req = new XMLHttpRequest();
        req.open('GET', url);
        req.onload = function () {
            if (req.status === 200) {
                resolve(req.response);
            } else {
                reject(Error(req.statusText));
            }
        };
        req.onerror = function () {
            reject(Error("Network Error"));
        };
        req.send();
    });
    return p;
};
PluginUserInterface.prototype.clearGUI = function () {
    this.stopCallbacks();
    this.root.innerHTML = "";
};

var PluginInterfaceMessageHub = function(owner) {
    function dec2hex (dec) {
        return ('0' + dec.toString(16)).substr(-2);
    }
    function generateId (len) {
        var arr = new Uint8Array((len || 40) / 2);
        window.crypto.getRandomValues(arr);
        return Array.from(arr, dec2hex).join('');
    }
    function buildPluginParameterJSON(plugin) {
        var names = owner.parameters.getParameterNames();
        var O = {};
        names.forEach(function(name) {
            var param = owner.parameters.getParameterByName(name);
            O[name] = {
                value: param.value,
                maximum: param.maximum,
                minimum: param.minimum,
                defaultValue: param.defaultValue,
                type: param.constructor.name,
                name: name
            }
        });
        return O;
    }
    function getParameterMessage(message) {
        var payload = buildPluginParameterJSON(owner);
        channel.postMessage(JSON.stringify(payload));
    }
    function setParameterMessage(message) {
        message.parameters.forEach(function(p) {
            owner.parameters.setParameterByName(p.name,p.value);
        });
    }
    
    var message_id = "jsap-ei-"+generateId(32);
    
    var channel = new BroadcastChannel(message_id);
    var state = 0;
    
    channel.onmessage = function(e) {
        switch(e.data.message) {
            case "set parameters":
                if (e.data.parameters) {
                    setParameterMessage(e.data);
                }
                break;
            case "get parameters":
                getParameterMessage(e.data);
                break;
            default:
                throw("Unknown message type \""+e.data.message+"\"");
        }
    };
    
    Object.defineProperties(this, {
        "updateInterfaces": {
            "value": function() {
                getParameterMessage(e.data);
            }
        },
        "getMessageChannelID": {
            "value": function() {
                if (state === 0) {
                    return message_id;
                } else {
                    throw("Cannel closed");
                }
            }
        },
        "closeChannel": {
            value: function() {
                if (state === 0) {
                    channel.onmessage = undefined;
                    channel.postMessage("close");
                    channel.close();
                } else {
                    throw("Cannel already closed");
                }
            }
        }
    })
}
