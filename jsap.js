"function"!=typeof jsXtract&&(script=document.createElement("script"),script.src=dir+"js-xtract/jsXtract.min.js",document.getElementsByTagName("head")[0].appendChild(script)),Array.prototype.find||(Array.prototype.find=function(r){"use strict";if(null==this)throw new TypeError("Array.prototype.find called on null or undefined");if("function"!=typeof r)throw new TypeError("predicate must be a function");for(var i,t=Object(this),e=t.length>>>0,n=arguments[1],o=0;e>o;o++)if(i=t[o],r.call(n,i,o,t))return i;return void 0}),Array.prototype.findIndex||(Array.prototype.findIndex=function(r){"use strict";if(null==this)throw new TypeError("Array.prototype.findIndex called on null or undefined");if("function"!=typeof r)throw new TypeError("predicate must be a function");for(var i,t=Object(this),e=t.length>>>0,n=arguments[1],o=0;e>o;o++)if(i=t[o],r.call(n,i,o,t))return o;return-1});
// Add getInputs to all AudioNodes to ease deployment

AudioNode.prototype.getInputs = function () {
    return [this];
}

// This should simply define the BasePlugin from which custom plugins can be built from
var BasePlugin = function (context) {
    this.context = context;
    this.factory = undefined;
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

BasePlugin.prototype.getParameterActions = function () {
    // Return the history of plugin activity
    var object = [];
    for (var param of this.parameters) {
        object.push({
            'parameterName': param.name,
            'actions': param.actions
        });
    }
    return object;
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
                'value': value,
                'time': new Date()
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
            console.error("Cannot set private variable 'actions'");
        }
    });
    Object.defineProperty(this, "update", {
        get: function () {
            return _update;
        },
        set: function (func) {
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
        get: function () {
            return _translate;
        },
        set: function (func) {
            if (typeof func != "function") {
                console.error("Must pass in a valid function");
            }
            if (func(0) == undefined) {
                console.error("Function must return a value");
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
    This interface binds the plugin output analysis with the PluginFactory and SubFactory.
    This allows the factory to request certain features be processed and return them
*/

var FeatureInterface = function (BasePluginInstance) {
    this.plugin = BasePluginInstance;
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

// This defines a master object for holding all the plugins and communicating
// This object will also handle creation and destruction of plugins


var PluginFactory = function (context, dir) {

    var audio_context = context;
    var subFactories = [];
    var plugin_prototypes = [];
    var _plugins = [];
    var _currentPluginId = 0;

    this.loadResource = function (url) {
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

    // Check for JS-Xtract and dynamically load
    var script;
    var self = this;

    if (dir == undefined) {
        dir = "js-plugin/";
    }

    this.addPrototype = function (plugin_proto) {
        if (typeof plugin_proto != "function") {
            console.error("The Prototype must be a function!");
            return;
        }
        if (typeof plugin_proto.prototype.name != "string") {
            console.error("Malformed plugin. Name not defined");
        }
        var obj = {
            name: plugin_proto.prototype.name,
            proto: plugin_proto
        };
        var index = plugin_prototypes.findIndex(function (element, index, array) {
            if (element.name == this.name) {
                return true;
            }
            return false;
        }, obj);
        if (index != -1) {
            console.error("The plugin name must be unique!");
            return;
        }
        plugin_prototypes.push(obj);
    }

    this.getPrototypes = function () {
        return plugin_prototypes;
    }

    this.getAllPlugins = function () {
        var list = [];
        for (var factory of subFactories) {
            list = list.concat(factory.getPlugins());
        }
        return list;
    }

    this.getAllPluginsObject = function () {
        var obj = {
            'factory': this,
            'subFactories': []
        };
        for (var i = 0; i < subFactories.length; i++) {
            var sub = {
                'subFactory': subFactories[i],
                'plugins': subFactories[i].getPlugins()
            }
            obj.subFactories.push(sub);
        }
        return obj;
    }

    this.createSubFactory = function (chainStart, chainStop) {
        var node = new PluginSubFactory(this, chainStart, chainStop);
        subFactories.push(node);
        return node;
    }

    this.destroySubFactory = function (SubFactory) {
        var index = subFactories.findIndex(function (element) {
            if (element == this) {
                return true;
            }
            return false;
        }, SubFactory);
        if (index >= 0) {
            subFactories.splice(index, 1);
            SubFactory.destroy();
        }
    }

    this.createPluginInstance = function () {
        var node = new PluginInstance(_currentPluginId++);
        _plugins.push(node);
        return node;
    }

    this.deletePlugin = function (id) {
        if (id >= 0 && id < _plugins.length) {
            _plugins.splice(id, 1);
        }
    }

    Object.defineProperty(this, "context", {
        'get': function () {
            return audio_context;
        },
        'set': function () {}
    })

    var PluginInstance = function (id) {
        var _id = id;

        this.node = undefined;
        this.next_node = undefined;

        this.populate = function (node, next_node) {
            this.node = node;
            this.next_node = next_node;
            this.node.connect(next_node.getInputs());
        }

        this.reconnect = function (new_next) {
            if (new_next != this.next_node) {
                this.node.disconnect(this.next_node.getInputs()[0]);
                this.next_node = new_next;
                this.node.connect(this.next_node.getInputs()[0]);
                return true;
            }
            return false;
        }

        this.destory = function () {
            this.node.destroy();
        }

        Object.defineProperties(this, "id", {
            'get': function () {
                return _id;
            },
            'set': function () {
                console.error("ID is a read-only variable")
            }
        });
    }

    var PluginSubFactory = function (PluginFactory, chainStart, chainStop) {

        var plugin_list = [];
        var pluginChainStart = chainStart;
        var pluginChainStop = chainStop;
        this.parent = PluginFactory;
        var _factoryName = "";
        var state = 1;
        var chainStartFeature = this.parent.context.createAnalyser();
        pluginChainStart.disconnect();
        pluginChainStart.connect(chainStartFeature);
        pluginChainStart.connect(chainStop);

        this.getPrototypes = function () {
            return this.parent.getPrototypes();
        }

        this.getFactory = function () {
            return this.parent;
        }

        this.destroy = function () {
            for (var plugin of plugin_list) {
                this.destroyPlugin(plugin);
            }
            pluginChainStart.disconnect();
            pluginChainStart.connect(pluginChainStop);
        }

        // Plugin creation / destruction

        this.createPlugin = function (plugin_prototype) {
            if (state == 0) {
                console.error("SubFactory has been destroyed! Cannot add new plugins");
                return;
            }
            var node = new plugin_prototype(this);
            node.factory = this.parent;
            var obj = this.parent.createPluginInstance();
            obj.populate(node, pluginChainStop);
            var last_node = plugin_list[plugin_list.length - 1];
            if (last_node != undefined) {
                last_node.reconnect(node);
            } else {
                pluginChainStart.disconnect(pluginChainStop);
                pluginChainStart.connect(node.getInputs()[0]);
            }
            plugin_list.push(obj);
            return node;
        }
        this.destroyPlugin = function (plugin_object) {
            if (state == 0) {
                return;
            }
            var index = this.getPluginIndex(plugin_object);
            if (index >= 0) {
                if (index > 0) {
                    plugin_list[index - 1].reconnect(plugin_list[index + 1] || pluginChainStop);
                } else {
                    pluginChainStart.disconnect(plugin_list[index.node]);
                    pluginChainStart.connect(plugin_list[index + 1] || pluginChainStop);
                }
                plugin_list.splice(index, 1);
                this.parent.removePlugin(plugin_object.id);
            }
        }

        this.getPlugins = function () {
            return plugin_list;
        }

        this.getAllPlugins = function () {
            return this.parent.getAllPluginsObject();
        }

        this.getPluginIndex = function (plugin_object) {
            if (state == 0) {
                return;
            }
            var index = plugin_list.findIndex(function (element, index, array) {
                if (element == this) {
                    return true;
                }
                return false;
            }, plugin_object);
            return index;
        }

        this.movePlugin = function (plugin_object, new_index) {
            if (state == 0) {
                return;
            }
            var index = this.getPluginIndex(plugin_object);
            if (index >= 0) {
                var obj = plugin_list.splice(index, 1);
                if (new_index == 0) {
                    plugin_list = obj.concat(plugin_list);
                } else if (new_index >= plugin_list.length) {
                    plugin_list = plugin_list.concat(plugin_list);
                } else {
                    var holdLow = plugin_list.slice(0, index);
                    var holdHigh = plugin_list.slice(index);
                    plugin_list = holdLow.concat(obj.concat(holdHigh));
                }
                pluginChainStart.disconnect();
                pluginChainStart.connect(plugin_list[0].node.getInputs()[0]);
                for (var i = 0; i < plugin_list.length - 1; i++) {
                    plugin_list[i].reconnect(plugin_list[i + 1].node);
                }
                plugin_list[plugin_list.length - 1].reconnect(pluginChainStop);
            }
        }

        Object.defineProperty(this, "name", {
            get: function () {
                return _factoryName;
            },
            set: function (name) {
                if (typeof name == "string") {
                    _factoryName = name;
                }
                return _factoryName;
            }
        });
    }


    // ======= Feature Mapping =======
    var _featureMaps = [];

    this.requestFeatures = function (requester, fetcher, features) {}

}

