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
        obj = {
            node: node,
            xtract: this.factory.context.createAnalyser()
        }
        obj.node.connect(obj.xtract);
        outputList.push(obj);
        return this.outputs;
    }
    this.deleteOutput = function (node) {
        var i = outputList.findIndex(function (e) {
            return e.node === this;
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
            var list = [],
                i;
            for (i = 0; i < outputList.length; i++) {
                list.push(outputList[i].node);
            }
            return list;
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

var PluginParameter = function (defaultValue, dataType, name, minimum, maximum, owner) {
    /* Plugin Private Variables
          These are accessed by the public facing getter/setter
    */

    if (arguments.length < 2) {
        throw ("INVALID PARAMETERS: Must always define defaultValue, dataType and name");
    }

    var _parentProcessor = owner;

    //The data type of the parameter
    var _dataType = dataType;

    //The minimum inclusive value, if the requested value < this, value == this
    var _minimum = minimum;

    //The maximum inclusive value, if the requested value > this, value == this
    var _maximum = maximum;

    //The value to be used / changed by the plugin.
    var _value = defaultValue;

    //The default value to initialise to
    var _default = defaultValue;

    //The name of the parameter
    var _name = name;

    // Store for providence
    var _actions = [];

    // Update Function
    var _update = function (value) {
        return value
    };

    // Translate Function
    var _translate = function (value) {
        return value;
    };

    // Trigger Function
    var _trigger = function () {};

    var boundParam;

    this.bindToAudioParam = function (AudioParameterNode) {
        boundParam = AudioParameterNode;
        this.value = _translate(boundParam.value);
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

    Object.defineProperty(this, "default", {
        get: function () {
            return _default;
        },
        set: function () {
            throw ("Cannot set the default value of PluginParameter");
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

    Object.defineProperty(this, "value", {
        get: function () {
            if (boundParam) {
                _value = _translate(boundParam.value);
            }
            return _value;
        },
        set: function (newValue) {
            if (newValue >= _maximum && _maximum != undefined) {
                newValue == _maximum;
            } else if (newValue <= _minimum && _minimum != undefined) {
                newValue == _minimum;
            }
            _value = newValue;
            if (boundParam) {
                boundParam.value = _update(_value);
            }
            _actions.push({
                'value': newValue,
                'time': new Date()
            });
            _trigger();
            return newValue;
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
                _trigger = func;
            }
        }
    });
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

    Object.defineProperty(this.Receiver, "onfeatures", {
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
    var FactoryFeatureMap = FeatureInterfaceInstance.plugin.factory.featureMap;
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
        if (typeof featureObject.outputIndex !== "Number" || typeof featureObject.frameSize !== "Number" || typeof featureObject.features !== "Object") {
            throw ("Malformed featureObject");
        }
        FactoryFeatureMap.requestFeatures(this, source, featureObject);
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
    var OutputNode = function (parent, output) {
        var extractors = [];
        this.addExtractor = function (frameSize) {
            var obj = {
                'frameSize': frameSize,
                'extractor': this.parent.factory.context.createAnalyser(),
                'features': []
            };
            output.connect(obj.extractor);
            extractors.push(obj);
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
                outputNodes[o].push(new OutputNode(FeatureInterfaceInstance.plugin, FeatureInterfaceInstance.plugin.outputs[o]));
            }
            var si;
            for (si = 0; si < featureObject[o].length; si++) {
                var extractor = outputNodes[o].findExtractor(featureObject[o][si].frameSize);
                if (!extractor) {
                    outputNodes[o].addExtractor(featureObject[o][si].frameSize);
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
        FeatureInterfaceInstance.plugin.factory.featureMap.postFeatures({
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
