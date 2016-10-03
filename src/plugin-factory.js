// This defines a master object for holding all the plugins and communicating
// This object will also handle creation and destruction of plugins


var PluginFactory = function (context, dir) {

    var audio_context = context,
        subFactories = [],
        plugin_prototypes = [],
        pluginsList = [],
        currentPluginId = 0,
        script,
        self = this;

    this.loadResource = function (url) {
        return new Promise(function (resolve, reject) {
            var req = new XMLHttpRequest();
            req.open('GET', url);
            req.onload = function () {
                if (req.status === 200) {
                    resolve(req.response);
                } else {
                    reject(new Error(req.statusText));
                }
            };
            req.onerror = function () {
                reject(new Error("Network Error"));
            };
            req.send();
        });
    };

    if (dir === undefined) {
        dir = "jsap/";
    }

    var PluginInstance = function (id, plugin_node) {
        this.next_node = undefined;

        this.reconnect = function (new_next) {
            if (new_next !== this.next_node) {
                if (this.next_node != undefined && typeof this.next_node.getInputs == "function") {
                    this.node.disconnect(this.next_node.getInputs()[0]);
                }
                this.next_node = new_next;
                this.node.connect(this.next_node.getInputs()[0]);
                return true;
            }
            return false;
        };

        this.destory = function () {
            this.node.destroy();
        };

        Object.defineProperties(this, {
            'id': {
                'value': id
            },
            'node': {
                'value': plugin_node
            }
        });
    };

    var PluginPrototype = function (proto) {
        Object.defineProperties(this, {
            'name': {
                'value': proto.prototype.name
            },
            'proto': {
                'value': proto
            }
        });

        this.createPluginInstance = function (owner) {
            var plugin = new proto(this.factory.context, owner);
            var node = new PluginInstance(currentPluginId++, plugin);
            Object.defineProperties(plugin, {
                'factory': {
                    'value': this.factory
                },
                'pluginInstance': {
                    'value': node
                },
                'prototypeObject': {
                    'value': this
                }
            });
            Object.defineProperty(node, "prototypeObject", {
                'value': this
            });
            this.factory.registerPluginInstance(node);
            return node;
        };
    };

    this.addPrototype = function (plugin_proto) {
        if (typeof plugin_proto !== "function") {
            throw ("The Prototype must be a function!");
        }
        if (typeof plugin_proto.prototype.name !== "string") {
            throw ("Malformed plugin. Name not defined");
        }
        if (plugin_prototypes.find(function (element) {
                return element.proto === this;
            }, plugin_proto)) {
            throw ("The plugin must be unique!");
        }
        var obj = new PluginPrototype(plugin_proto);
        plugin_prototypes.push(obj);
        Object.defineProperties(obj, {
            'factory': {
                'value': this
            }
        });
    };

    this.getPrototypes = function () {
        return plugin_prototypes;
    };

    this.getAllPlugins = function () {
        return pluginsList;
    };

    this.getAllPluginsObject = function () {
        var obj = {
                'factory': this,
                'subFactories': []
            },
            i;
        for (i = 0; i < subFactories.length; i++) {
            obj.subFactories.push({
                'subFactory': subFactories[i],
                'plugins': subFactories[i].getPlugins()
            });
        }
        return obj;
    };

    this.createSubFactory = function (chainStart, chainStop) {
        var node = new PluginSubFactory(this, chainStart, chainStop);
        subFactories.push(node);
        return node;
    };

    this.destroySubFactory = function (SubFactory) {
        var index = subFactories.findIndex(function (element) {
            if (element === this) {
                return true;
            }
            return false;
        }, SubFactory);
        if (index >= 0) {
            subFactories.splice(index, 1);
            SubFactory.destroy();
        }
    };

    this.registerPluginInstance = function (instance) {
        if (pluginsList.find(function (p) {
                return p === this
            }, instance)) {
            throw ("Plugin Instance not unique");
        }
        this.FeatureMap.createSourceMap(instance);
        pluginsList.push(instance);
        return true;
    }

    this.createPluginInstance = function (PluginPrototype) {
        throw ("DEPRECATED - Use PluginPrototype.createPluginInstance(owner);");
    };

    this.deletePlugin = function (id) {
        if (id >= 0 && id < pluginsList.length) {
            pluginsList.splice(id, 1);
        }
    };

    Object.defineProperty(this, "context", {
        'get': function () {
            return audio_context;
        },
        'set': function () {}
    });

    this.FeatureMap = function () {
        var Mappings = [];

        var RequestorMap = function (requestorInstance) {
            var Features = [];
            Object.defineProperties(this, {
                'getRequestorInstance': {
                    'value': function () {
                        return requestorInstance;
                    }
                }
            });
        }

        var SourceMap = function (sourceInstance) {
            var Mappings = [];

            this.createRequestorMap = function (requestorInstance) {
                var node = new RequestorMap(requestorInstance);
                Mappings.push(node);
                return node;
            };
            this.findRequestorMapIndex = function (requestorInstance) {
                return Mappings.findIndex(function (element) {
                    return element.getRequestorInstance() === this;
                }, requestorInstance);
            };
            this.findRequestorMap = function (requestorInstance) {
                var index = this.findRequestorMapIndex(requestorInstance);
                if (index >= 0) {
                    return Mappings[index];
                }
                return undefined;
            };
            this.deleteRequestorMap = function (requestorInstance) {
                var index = this.findRequestorMapIndex(requestorInstance);
                if (index === -1) {
                    return false;
                }
                Mappings.splice(index, 1);
                return true;
            };

            Object.defineProperties(this, {
                'getSourceInstance': {
                    'value': function () {
                        return sourceInstance;
                    }
                }
            });

            Object.defineProperties(sourceInstance, {
                'featureMap': {
                    'value': this
                }
            });
        };

        this.getMappings = function () {
            return Mappings;
        };
        this.createSourceMap = function (sourceInstance) {
            var node = new SourceMap(sourceInstance);
            Mappings.push(node);
            return node;
        };
        this.findSourceMapIndex = function (sourceInstance) {
            return Mappings.findIndex(function (elem) {
                return (elem.getSourceInstance() === this);
            }, sourceInstance);
        };
        this.findSourceMap = function (sourceInstance) {
            var index = this.findSourceMapIndex(sourceInstance);
            if (index >= 0) {
                return Mappings[index];
            }
            return undefined;
        };
        this.deleteSourceMap = function (sourceInstance) {
            var index = this.findSourceMapIndex(sourceInstance);
            if (index === -1) {
                return false;
            }
            Mappings.splice(index, 1);
            return true;
        };
        Object.defineProperties(this, {
            'getMappings': {
                'value': function () {
                    return Mappings;
                }
            }
        });
    };

    this.FeatureMap = new this.FeatureMap();
    Object.defineProperty(this.FeatureMap, "factory", {
        'value': this
    });

    var PluginSubFactory = function (PluginFactory, chainStart, chainStop) {

        var plugin_list = [],
            pluginChainStart = chainStart,
            pluginChainStop = chainStop,
            factoryName = "",
            state = 1,
            chainStartFeature = PluginFactory.context.createAnalyser();
        this.parent = PluginFactory;
        pluginChainStart.disconnect();
        pluginChainStart.connect(chainStartFeature);
        pluginChainStart.connect(chainStop);

        this.getPrototypes = function () {
            return this.parent.getPrototypes();
        };

        this.getFactory = function () {
            return this.parent;
        };

        this.destroy = function () {
            var i;
            for (i = 0; i < plugin_list.length; i++) {
                this.destroyPlugin(plugin_list[i]);
            }
            pluginChainStart.disconnect();
            pluginChainStart.connect(pluginChainStop);
        };

        // Plugin creation / destruction

        this.createPlugin = function (prototypeObject) {
            var node, last_node;
            if (state === 0) {
                throw ("SubFactory has been destroyed! Cannot add new plugins");
            }
            node = prototypeObject.createPluginInstance(this);
            node.reconnect(pluginChainStop);
            last_node = plugin_list[plugin_list.length - 1];
            if (last_node !== undefined) {
                last_node.reconnect(node);
            } else {
                pluginChainStart.disconnect(pluginChainStop);
                pluginChainStart.connect(node.node.getInputs()[0]);
            }
            plugin_list.push(node);
            return node;
        };

        this.destroyPlugin = function (plugin_object) {
            if (state === 0) {
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
        };

        this.getPlugins = function () {
            return plugin_list;
        };

        this.getAllPlugins = function () {
            return this.parent.getAllPluginsObject();
        };

        this.getPluginIndex = function (plugin_object) {
            if (state === 0) {
                return;
            }
            var index = plugin_list.findIndex(function (element, index, array) {
                if (element === this) {
                    return true;
                }
                return false;
            }, plugin_object);
            return index;
        };

        this.movePlugin = function (plugin_object, new_index) {
            if (state === 0) {
                return;
            }
            var obj, index = this.getPluginIndex(plugin_object),
                holdLow, holdHigh, i;
            if (index >= 0) {
                obj = plugin_list.splice(index, 1);
                if (new_index === 0) {
                    plugin_list = obj.concat(plugin_list);
                } else if (new_index >= plugin_list.length) {
                    plugin_list = plugin_list.concat(plugin_list);
                } else {
                    holdLow = plugin_list.slice(0, index);
                    holdHigh = plugin_list.slice(index);
                    plugin_list = holdLow.concat(obj.concat(holdHigh));
                }
                pluginChainStart.disconnect();
                pluginChainStart.connect(plugin_list[0].node.getInputs()[0]);
                for (i = 0; i < plugin_list.length - 1; i++) {
                    plugin_list[i].reconnect(plugin_list[i + 1].node);
                }
                plugin_list[plugin_list.length - 1].reconnect(pluginChainStop);
            }
        };

        Object.defineProperty(this, "name", {
            get: function () {
                return factoryName;
            },
            set: function (name) {
                if (typeof name === "string") {
                    factoryName = name;
                }
                return factoryName;
            }
        });
    };
};
