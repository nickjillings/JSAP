// Add getInputs to all AudioNodes to ease deployment

AudioNode.prototype.getInputs = function () {
    return [this];
};

// This should simply define the BasePlugin from which custom plugins can be built from
var BasePlugin = function (factory, owner) {
    var inputList = [],
        outputList = [],
        parameterList = [],
        pOwner = owner;
    this.context = factory.context;
    this.factory = factory;
    this.featureMap = new PluginFeatureInterface(this);

    this.addInput = function (node) {
        inputList.push(node);
        return inputList;
    };
    this.deleteInput = function (node) {
        var i = inputList.findIndex(function (e) {
            return e === this;
        }, node);
        if (i === -1) {
            return false;
        }
        inputList.splice(i, 1);
        return true;
    }
    this.addOutput = function (node) {
        outputList.push(node);
        return this.outputs;
    }
    this.deleteOutput = function (node) {
        var i = outputList.findIndex(function (e) {
            return e === this;
        }, node);
        if (i === -1) {
            return false;
        }
        outputList.splice(i, 1);
        return true;
    }

    Object.defineProperty(this, "numInputs", {
        get: function () {
            return inputList.length;
        },
        set: function () {
            throw ("Cannot set the number of inputs of BasePlugin");
        }
    });
    Object.defineProperty(this, "numOutputs", {
        get: function () {
            return outputList.length;
        },
        set: function () {
            throw ("Cannot set the number of outputs of BasePlugin");
        }
    });
    Object.defineProperty(this, "numParameters", {
        get: function () {
            return parameterList.length;
        },
        set: function () {
            throw ("Cannot set the number of parameters of BasePlugin");
        }
    });

    Object.defineProperty(this, "owner", {
        get: function () {
            return pOwner;
        },
        set: function (owner) {
            if (typeof owner === "object") {
                pOwner = owner;
            }
            return pOwner;
        }
    });

    Object.defineProperty(this, "inputs", {
        get: function (index) {
            return inputList;
        },
        set: function () {
            throw ("Illegal attempt to modify BasePlugin");
        }
    });

    Object.defineProperty(this, "outputs", {
        get: function (index) {
            return outputList;
        },
        set: function () {
            throw ("Illegal attempt to modify BasePlugin");
        }
    });

    Object.defineProperty(this, "parameters", {
        get: function (index) {
            return parameterList;
        },
        set: function () {
            throw ("Illegal attempt to modify BasePlugin");
        }
    });
};

BasePlugin.prototype.connect = function (dest) {
    this.outputs[0].connect(dest.inpt ? dest.input : dest);
};

BasePlugin.prototype.disconnect = function (dest) {
    if (dest === undefined) {
        this.outputs[0].disconnect();
    } else {
        this.outputs[0].disconnect(dest.input ? dest.input : dest);
    }
};

BasePlugin.prototype.getInputs = function () {
    return this.inputs;
};

BasePlugin.prototype.start = function () {};
BasePlugin.prototype.stop = function () {};

BasePlugin.prototype.deconstruct = function () {};

BasePlugin.prototype.getParameterNames = function () {
    var names = [],
        i;
    for (i = 0; i < this.parameters.length; i++) {
        names.push(this.parameters[i].name);
    }
    return names;
};

BasePlugin.prototype.getParameterByName = function (name) {
    var i;
    for (i = 0; i < this.parameters.length; i++) {
        if (name === this.parameters[i].name) {
            return this.parameters[i];
        }
    }
    return null;
};

BasePlugin.prototype.getParameterObject = function () {
    var proto = {},
        i,
        param;
    for (i = 0; i < this.parameters.length; i++) {
        param = this.parameters[i];
        proto[param.name] = param.value;
    }
    return proto;
};

BasePlugin.prototype.setParameterByName = function (name, value) {
    var parameter = this.getParameterByName(name);
    if (parameter !== null) {
        parameter.value = value;
    }
};

BasePlugin.prototype.setParameterByObject = function (object) {
    // Set a parameter by passing a paired tuple object of the parameter name with the value
    // For instance, the Volume Control could use object = {volume: 0.5}
    // The LowPass could use object = {gain: 0.5, frequency: 1000, Q: 1.3}
    var key;
    for (key in object) {
        if (object.hasOwnProperty(key)) {
            this.setParameterByName(key, object[key]);
        }
    }
};

BasePlugin.prototype.getParameterActions = function () {
    // Return the history of plugin activity
    var object = [],
        i;
    for (i = 0; i < this.parameters.length; i++) {
        object.push({
            'parameterName': this.parameters[i].name,
            'actions': this.parameters[i].actions
        });
    }
    return object;
};

var PluginParameter = function (owner, dataType, name, defaultValue, minimum, maximum) {
    /* Plugin Private Variables
          These are accessed by the public facing getter/setter
    */

    var _parentProcessor = owner,
        _dataType, _minimum, _maximum, _value, _name, _actions, _update, _translate, _trigger, boundParam;

    if (arguments.length < 3) {
        throw ("INVALID PARAMETERS: Must always define owner, dataType and name");
    }
    dataType = dataType.toLowerCase();
    switch (dataType) {
        case "number":
            _dataType = "Number";
            _minimum = minimum;
            _maximum = maximum;
            break;
        case "string":
            _dataType = "String";
            _minimum = minimum;
            _maximum = maximum;
            break;
        case "button":
            _dataType = "Button";
            break;
        case "switch":
            _dataType = "Switch";
            break;
        default:
            throw ("Invalid dataType");
    }

    _default = _value = defaultValue;
    _name = name;
    _actions = [];

    // Update Function
    _update = function (value) {
        return value
    };

    // Translate Function
    _translate = function (value) {
        return value;
    };

    // Trigger Function
    _trigger = function () {};

    this.bindToAudioParam = function (AudioParameterNode) {
        if ((_dataType == "Number" || _dataType == "Switch") && typeof AudioParameterNode.value == "number") {
            boundParam = AudioParameterNode;
            if (AudioParameterNode !== undefined) {
                this.value = _translate(boundParam.value);
            }
            return;
        } else if (_dataType == "String" && typeof AudioParameterNode.value == "string") {
            boundParam = AudioParameterNode;
            if (AudioParameterNode !== undefined) {
                this.value = _translate(boundParam.value);
            }
            return;
        }
        throw ("Cannot bind parameter of type " + _dataType + " to an AudioParameter of type " + typeof AudioParameterNode.value + " . Use the trigger instead.");
    }

    function addAction(event) {
        // Add an action to the list
        switch (_dataType) {
            case "Number":
            case "String":
                if (typeof event == _dataType.toLowerCase()) {
                    _actions.push({
                        'time': new Date(),
                        'value': event
                    });
                }
                break;
            case "Switch":
                if (event == 1 || event == true) {
                    event = 1;
                } else {
                    event = 0;
                }
                _actions.push({
                    'time': new Date(),
                    'state': event
                });
                break;
            case "Button":
                _actions.push({
                    'time': new Date(),
                    'event': event.type
                });
                break;
        }
    }

    // Public facing getter/setter to preserve the plugin parameter mappings
    Object.defineProperty(this, "dataType", {
        get: function () {
            return _dataType;
        },
        set: function () {
            throw ("Cannot set the dataType of PluginParameter");
        }
    });

    Object.defineProperty(this, "name", {
        get: function () {
            return _name;
        },
        set: function () {
            throw ("Cannot set the name of PluginParameter");
        }
    });

    Object.defineProperty(this, "actions", {
        get: function () {
            return _actions;
        },
        set: function () {
            throw ("Cannot set private variable 'actions'");
        }
    });

    Object.defineProperty(this, "update", {
        get: function () {
            return _update;
        },
        set: function (func) {
            if (typeof func != "function") {
                throw ("Must pass in a valid function");
            }
            if (func(0) == undefined) {
                throw ("Function must return a value");
            }
            _update = func;
        }
    });

    Object.defineProperty(this, "translate", {
        get: function () {
            return _translate;
        },
        set: function (func) {
            if (typeof func != "function") {
                throw ("Must pass in a valid function");
            }
            if (func(0) == undefined) {
                throw ("Function must return a value");
            }
            _translate = func;
        }
    });

    Object.defineProperty(this, "trigger", {
        get: function () {
            return _trigger;
        },
        set: function (func, arg_this) {
            if (typeof func != "function") {
                throw ("Must pass in a valid function");
            }
            if (typeof arg_this == "object") {
                _trigger = func.bind(arg_this);
            } else {
                _trigger = func.bind(owner);
            }
        }
    });

    switch (_dataType) {
        case "Switch":
            Object.defineProperty(this, "onclick", {
                'value': function (evnent) {
                    _value++;
                    if (_value >= maximum) {
                        _value = minimum;
                    }
                    addAction(event);
                    _trigger();
                    return _value;
                }
            });
        case "Number":
            Object.defineProperty(this, "minimum", {
                get: function () {
                    return _minimum;
                },
                set: function () {
                    throw ("Cannot set the minimum value of PluginParameter");
                }
            });

            Object.defineProperty(this, "maximum", {
                get: function () {
                    return _maximum;
                },
                set: function () {
                    throw ("Cannot set the maximum value of PluginParameter");
                }
            });
        case "String":
            Object.defineProperty(this, "default", {
                get: function () {
                    return _default;
                },
                set: function () {
                    throw ("Cannot set the default value of PluginParameter");
                }
            });

            Object.defineProperty(this, "value", {
                get: function () {
                    if (boundParam) {
                        _value = _translate(boundParam.value);
                    }
                    return _value;
                },
                set: function (newValue) {
                    if (_dataType == "Number") {
                        if (newValue >= _maximum && _maximum != undefined) {
                            newValue == _maximum;
                        } else if (newValue <= _minimum && _minimum != undefined) {
                            newValue == _minimum;
                        }
                    }
                    if (_value == newValue) {
                        return _value;
                    }
                    _value = newValue;
                    if (boundParam) {
                        boundParam.value = _update(_value);
                    }
                    addAction(_value);
                    _trigger();
                    return _value;
                }
            });
            break;
        case "Button":
            Object.defineProperty(this, "onclick", {
                'value': function (event) {
                    _value = event;
                    addAction(event);
                    _trigger();
                    return event;
                }
            });
            break;
    }
}

var PluginFeatureInterface = function (BasePluginInstance) {
    this.plugin = BasePluginInstance;
    this.Receiver = new PluginFeatureInterfaceReceiver(this);
    this.Sender = new PluginFeatureInterfaceSender(this);
    this.addOutput = function (audioNode, index) {
        Sender.extractors.push({
            'index': index,
            'node': audioNode,
            'frameSize': []
        });
    }

    Object.defineProperty(this, "onfeatures", {
        'get': function () {
            return this.Receiver.onfeatures;
        },
        'set': function (func) {
            return this.Receiver.onfeatures = func;
        }
    });
}
var PluginFeatureInterfaceReceiver = function (FeatureInterfaceInstance) {
    var c_features = function () {};
    var FactoryFeatureMap = FeatureInterfaceInstance.plugin.factory.FeatureMap;
    this.requestFeatures = function (featureList) {
        var i;
        for (i = 0; i < featureList.length; i++) {
            this.requestFeaturesFromPlugin(featureList[i].plugin, {
                'outputIndex': featureList[i].outputIndex,
                'frameSize': featureList[i].frameSize,
                'features': featureList[i].features
            });
        }
    }
    this.requestFeaturesFromPlugin = function (source, featureObject) {
        if (source === undefined) {
            throw ("Source plugin must be defined");
        }
        if (featureObject === undefined) {
            throw ("FeatureObject must be defined");
        }
        if (typeof featureObject.outputIndex !== "number" || typeof featureObject.frameSize !== "number" || typeof featureObject.features !== "object") {
            throw ("Malformed featureObject");
        }
        FactoryFeatureMap.requestFeatures(FeatureInterfaceInstance.plugin, source, featureObject);
    }
    this.cancelFeaturesFromPlugin = function (source, featureObject) {
        if (source === undefined) {
            throw ("Source plugin must be defined");
        }
        if (featureObject === undefined) {
            throw ("FeatureObject must be defined");
        }
        if (typeof featureObject.outputIndex !== "number" || typeof featureObject.frameSize !== "number" || typeof featureObject.features !== "object") {
            throw ("Malformed featureObject");
        }
        FactoryFeatureMap.deleteFeatures(FeatureInterfaceInstance.plugin, source, featureObject);
    }
    this.cancelAllFeaturesFromPlugin = function (source) {
        if (source === undefined) {
            throw ("Source plugin must be defined");
        }
        FactoryFeatureMap.deleteFeatures(FeatureInterfaceInstance.plugin, source);
    }
    this.cancelAllFeatures = function () {
        FactoryFeatureMap.deleteFeatures(FeatureInterfaceInstance.plugin);
    }

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
    }

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

}
var PluginFeatureInterfaceSender = function (FeatureInterfaceInstance) {
    var FactoryFeatureMap = FeatureInterfaceInstance.plugin.factory.FeatureMap;
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

            function recursivelyProcess(base, list) {
                var l = list.length,
                    i, entry;
                for (i = 0; i < l; i++) {
                    entry = list[i];
                    base[entry.name].apply(base, entry.parameters);
                    if (entry.features && entry.features > 0) {
                        recursivelyProcess(base.result[entry.name], entry.features);
                    }
                }
            }

            function onaudiocallback(data) {
                //this == Extractor
                recursivelyProcess(data, this.features);
                this.postFeatures(data.length, JSON.parse(data.toJSON()));
            };

            this.extractor.frameCallback(onaudiocallback, this);
        }
        this.addExtractor = function (frameSize) {
            var obj = new Extractor(output, frameSize);
            extractors.push(obj);
            Object.defineProperty(obj, "postFeatures", {
                'value': function (frameSize, resultsJSON) {
                    var obj = {
                        'outputIndex': index,
                        'frameSize': frameSize,
                        'results': resultsJSON
                    }
                    this.postFeatures(obj);
                }.bind(this)
            });
            return obj;
        };
        this.findExtractor = function (frameSize) {
            return extractors.find(function (e) {
                return e.frameSize === this;
            }, frameSize)
        };
        this.deleteExtractor = function (frameSize) {};
    }
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
                extractor.features = featureObject[o][si].featureList;
            }
        }
    }

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
    }
}

/*
    This is an optional module which will attempt to create a graphical implementation.
    As with other audio plugins for DAWs, the GUI is an optional element which can be accepted or rejected by the host.
    The same applies here as the underlying host will have to either accept or ignore the tools' GUI
*/

var PluginUserInterface = function (BasePluginInstance, width, height) {
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
    if (ms == undefined) {
        ms = 250;
    } //Default of 250ms update period
    if (this.intervalFunction == null) {
        this.updateInterval = ms;
        this.intervalFunction = window.setInterval(function () {
            this.update()
        }.bind(this), 250);
    }
}
PluginUserInterface.prototype.stopCallbacks = function () {
    // Any registered callbacks are stopped by the host
    if (this.intervalFunction != null) {
        window.clearInterval(this.intervalFunction);
        this.updateInterval = null;
        this.intervalFunction = null;
    }
}
PluginUserInterface.prototype.loadResource = function (url) {
    return p = new Promise(function (resolve, reject) {
        var req = new XMLHttpRequest();
        req.open('GET', url);
        req.onload = function () {
            if (req.status == 200) {
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
}
PluginUserInterface.prototype.clearGUI = function () {
    this.stopCallbacks();
    this.root.innerHTML = "";
}
