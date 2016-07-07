// Add getInputs to all AudioNodes to ease deployment


(function() {
    function loadResource(url) {
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
    
    var promise;
    if (typeof xtract_mean != "function") {
        promise = loadResource("js-xtract/jsXtract.js").then(function(response){
            var script = document.createElement("script");
            script.textContent = response;
            document.getElementsByTagName("head")[0].appendChild(script);
            return true;
        }).then(function(ready){
            return loadResource("js-xtract/jsXtract-wa.js")}).then(function(response){
                var script = document.createElement("script");
                script.textContent = response;
                document.getElementsByTagName("head")[0].appendChild(script);
                return true;
            })
    }
})()

AudioNode.prototype.getInputs = function () {
    return [this];
}

// This should simply define the BasePlugin from which custom plugins can be built from
var BasePlugin = function (context) {
    this.context = context;
}

BasePlugin.prototype.connect = function (dest) {
    this.outputs[0].connect(dest.inpt ? dest.input : dest);
}

BasePlugin.prototype.disconnect = function (dest) {
    if (dest == undefined) {
        this.outputs[0].disconnect();
    } else {
        this.outputs[0].disconnect(dest.input ? dest.input : dest);
    }
}

BasePlugin.prototype.getInputs = function () {
    return this.inputs;
}

BasePlugin.prototype.start = function () {};
BasePlugin.prototype.stop = function () {};

BasePlugin.prototype.getParameterNames = function () {
    var names = [];
    for (var param of this.parameters) {
        names.push(param.name);
    }
    return names;
}

BasePlugin.prototype.getParameterByName = function (name) {
    for (var param of this.parameters) {
        if (name == param.name) {
            return param;
        }
    }
    console.error("No Parameter called " + name);
    return null;
}

BasePlugin.prototype.getParameterObject = function () {
    var proto = {};
    for (var param of this.parameters) {
        eval("proto." + param.name + "=" + param.value);
    }
    return proto;
}

BasePlugin.prototype.setParameterByName = function (name, value) {
    var parameter = this.getParameterByName(name);
    if (parameter != null) {
        parameter.value = value;
    }
}

BasePlugin.prototype.setParameterByObject = function (object) {
    // Set a parameter by passing a paired tuple object of the parameter name with the value
    // For instance, the Volume Control could use object = {volume: 0.5}
    // The LowPass could use object = {gain: 0.5, frequency: 1000, Q: 1.3}
    for (var key in object) {
        this.setParameterByName(key, eval("object." + key));
    }
}

var PluginParameter = function (defaultValue, dataType, name, minimum, maximum, owner) {
    /* Plugin Private Variables
          These are accessed by the public facing getter/setter
    */

    if (arguments.length < 2) {
        console.error("INVALID PARAMETERS: Must always define defaultValue, dataType and name");
        return;
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
    var _update = function(value) {return value};
    
    // Translate Function
    var _translate = function(value) {return value;};
    
    // Trigger Function
    var _trigger = function() {};

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
            console.error("Cannot set the dataType of PluginParameter");
        }
    });

    Object.defineProperty(this, "minimum", {
        get: function () {
            return _minimum;
        },
        set: function () {
            console.error("Cannot set the minimum value of PluginParameter");
        }
    });

    Object.defineProperty(this, "maximum", {
        get: function () {
            return _maximum;
        },
        set: function () {
            console.error("Cannot set the maximum value of PluginParameter");
        }
    });

    Object.defineProperty(this, "default", {
        get: function () {
            return _default;
        },
        set: function () {
            console.error("Cannot set the default value of PluginParameter");
        }
    });

    Object.defineProperty(this, "name", {
        get: function () {
            return _name;
        },
        set: function () {
            console.error("Cannot set the name of PluginParameter");
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
            _value = _update(newValue);
            if (boundParam) {
                boundParam.value = _value;
            }
            _actions.push({
                time: _parentProcessor.context.currentTime,
                value: _value
            });
            _trigger();
            return _value;
        }
    });

    Object.defineProperty(this, "actions", {
        get: function () {
            return _actions;
        },
        set: function () {
            console.error("Canno set private variable 'actions'");
        }
    });
    Object.defineProperty(this, "update", {
        get: function() {
            return _update;
        },
        set: function(func) {
            if (typeof func != "function") {
                console.error("Must pass in a valid function");
            }
            if (func(0) == undefined) {
                console.error("Function must return a value");
            }
            _update = func;
        }
    });
    
    Object.defineProperty(this, "translate", {
        get: function() {
            return _translate;
        },
        set: function(func) {
            if (typeof func != "function") {
                console.error("Must pass in a valid function");
            }
            if (func(0) == undefined) {
                console.error("Function must return a value");
            }
            _translate = func;
        }
    });
    
    Object.defineProperty(this,"trigger",{
        get: function() {
            return _trigger;
        },
        set: function(func,arg_this) {
            if (typeof func != "function") {
                console.error("Must pass in a valid function");
            }
            if (typeof arg_this == "object") {
                _trigger = func.bind(arg_this);
            } else {
                _trigger = func;
            }
        }
    });
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
