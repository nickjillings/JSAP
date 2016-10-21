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

    /*
        this.loadResource. Load a resource into the global namespace
        
        @param resourceObject: a JS object holding the following parameters:
            .url: URL of the resource
            .test: function to call, returns true if resource already loaded, false if not
    */
    this.loadResource = function (resourceObject) {
        if (resourceObject) {
            if (typeof resourceObject.url !== "string") {
                throw ("resourceObject.url must be a string");
            }
            if (typeof resourceObject.test !== "function") {
                throw ("resourceObject.test must be a function");
            }
            var response = resourceObject.test();
            if (response !== false && response !== true) {
                throw ("resourceObject.test must return true or false");
            }
            switch (resourceObject.type) {
                case "CSS":
                case "css":
                    return new Promise(function (resolve, reject) {
                        var css = document.createElement("link");
                        css.setAttribute("rel", "stylesheet");
                        css.setAttribute("type", "text/css");
                        css.setAttribute("href", resourceObject.url);
                        document.getElementsByTagName("head")[0].appendChild(css);
                        resolve(resourceObject);
                    });
                    break;
                case "javascript":
                case "JavaScript":
                case "Javascript":
                case undefined:
                default:
                    if (!response) {
                        return loadResource(resourceObject).then(function (resourceObject) {
                            if (typeof resourceObject.returnObject === "string") {
                                var returnObject;
                                eval("returnObject = " + resourceObject.returnObject);
                                return returnObject;
                            } else {
                                return true;
                            }
                        });
                    } else {
                        return new Promise(function (resolve, reject) {
                            if (typeof resourceObject.returnObject === "string") {
                                eval("resolve(" + resourceObject.returnObject + ")");
                            } else {
                                resolve(true);
                            }
                        });
                    }
            }
        }
    }

    this.loadPluginScript = function (resourceObject) {
        if (resourceObject) {
            if (typeof resourceObject.returnObject !== "string") {
                throw ("resourceObject.returnObject must be the name of the prototype function");
            }
            return this.loadResource(resourceObject).then(function (plugin) {
                return self.addPrototype(plugin);
            });
        }
    }

    function loadResource(resourceObject) {
        return new Promise(function (resolve, reject) {
            var script = document.createElement("script");
            script.src = resourceObject.url;
            document.getElementsByTagName("head")[0].appendChild(script);
            script.onload = function () {
                resolve(resourceObject);
            }
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
                    plugin_node.disconnect(this.next_node.getInputs()[0]);
                }
                this.next_node = new_next;
                plugin_node.connect(this.next_node.getInputs()[0]);
                return true;
            }
            return false;
        };

        this.destory = function () {
            plugin_node.destroy();
        };

        Object.defineProperties(this, {
            'id': {
                'value': id
            },
            'node': {
                'value': plugin_node
            },
            'getInputs': {
                'value': function () {
                    return plugin_node.getInputs();
                }
            },
            'getOutputs': {
                'value': function () {
                    return plugin_node.getOutputs();
                }
            }
        });
    };

    var PluginPrototype = function (proto) {
        this.name = proto.prototype.name;
        this.proto = proto;

        this.createPluginInstance = function (owner) {
            if (!this.ready) {
                throw ("Plugin Not Read");
            }
            var plugin = new proto(this.factory, owner);
            var node = new PluginInstance(currentPluginId++, plugin);
            Object.defineProperties(plugin.__proto__, {
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

        function loadResourceChain(resourceObject, p) {
            if (!p) {
                var p = loadResource(resourceObject);
                p.then(function (resourceObject) {
                    if (resourceObject.resources !== undefined && resourceObject.resources.length > 0) {
                        for (var i = 0; i < resourceObject.resources.length; i++) {
                            p = loadResourceChain(resourceObject.resources[i], p);
                        }
                    }
                });
            } else {
                p.then(loadResource(resourceObject));
            }
            return p;
        }

        function loadStylesheet(url) {
            var css = document.createElement("link");
            css.setAttribute("rel", "stylesheet");
            css.setAttribute("type", "text/css");
            css.setAttribute("href", url);
            document.getElementsByTagName("head")[0].appendChild(css);
        }

        function recursiveGetTest(resourceObject) {
            if (resourceObject.hasOwnProperty("length") && resourceObject.length > 0) {
                return recursiveGetTest(resourceObject[resourceObject.length - 1]);
            } else if (resourceObject.hasOwnProperty("resources")) {
                return recursiveGetTest(resourceObject.resources);
            } else {
                return resourceObject.test;
            }
        }

        var resourcePromises = [];
        for (var i = 0; i < proto.prototype.resources.length; i++) {
            var resource = proto.prototype.resources[i];
            switch (resource.type) {
                case "css":
                case "CSS":
                    loadStylesheet(resource.url);
                    break;
                case "javascript":
                case "Javascript":
                case "JavaScript":
                case "JS":
                default:

                    var object = {
                        'promise': loadResourceChain(resource),
                        'state': 0,
                        'complete': function () {
                            this.state = 1;
                        },
                        'test': recursiveGetTest(resource)
                    }
                    object.promise.then(object.complete.bind(object));
                    resourcePromises.push(object);
                    break;
            }
        }

        this.getResourcePromises = function () {
            return resourcePromises;
        };
        this.ready = function () {
            var state = true;
            for (var i = 0; i < resourcePromises.length; i++) {
                if (resourcePromises[i].state !== 1 || !resourcePromises[i].test()) {
                    state = false;
                    break;
                }
            }
            return state;
        }
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
        return obj;
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
        var SourceMap = function (pluginInstace) {
            var Mappings = [];
            var Sender = pluginInstace.node.featureMap.Sender;
            this.getSourceInstance = function () {
                return pluginInstace;
            }

            function updateSender() {
                function recursiveFind(featureList) {
                    var f, list = [];
                    for (f = 0; f < featureList.length; f++) {
                        var featureNode = list.find(function (e) {
                            return e.name === this.name;
                        }, featureList[f]);
                        if (!featureNode || (featureList[f].parameters && featureList[f].parameters.length != 0)) {
                            featureNode = {
                                'name': featureList[f].name,
                                'parameters': featureList[f].parameters,
                                'features': []
                            };
                            list.push(featureNode);
                        }
                        if (featureList[f].features && featureList[f].features.length > 0) {
                            list.push(recursiveFind(featureNode.features, featureList[f].features));
                        }
                    }
                    return list;
                }
                var i, outputList = [];
                for (i = 0; i < Mappings.length; i++) {
                    if (outputList[Mappings[i].outputIndex] == undefined) {
                        outputList[Mappings[i].outputIndex] = [];
                    }
                    var frameList = outputList[Mappings[i].outputIndex].find(function (e) {
                        return e.frameSize === this.frameSize;
                    }, Mappings[i]);
                    if (!frameList) {
                        frameList = {
                            'frameSize': Mappings[i].frameSize,
                            'featureList': undefined
                        };
                        outputList[Mappings[i].outputIndex].push(frameList);
                    }
                    frameList.featureList = recursiveFind(Mappings[i].getFeatureList());
                }
                Sender.updateFeatures(outputList);
            }

            this.requestFeatures = function (requestorInstance, featureObject) {
                var map = Mappings.find(function (e) {
                    return (e.outputIndex == this.outputIndex && e.frameSize == this.frameSize);
                }, featureObject);
                if (!map) {
                    map = {
                        'outputIndex': featureObject.outputIndex,
                        'frameSize': featureObject.frameSize,
                        'requestors': [],
                        'getFeatureList': function () {
                            var Features = [],
                                i;
                            for (i = 0; i < this.requestors.length; i++) {
                                Features.push(this.requestors[i].getFeatureList());
                            }
                            return Features;
                        }
                    }
                    Mappings.push(map);
                }
                var requestor = map.requestors.find(function (e) {
                    return e.getRequestorInstance() === this;
                }, requestorInstance);
                if (!requestor) {
                    requestor = new RequestorMap(requestorInstance);
                    map.requestors.push(requestor);
                }
                requestor.addFeatures(featureObject);
                updateSender();
            }

            this.findFrameMap = function (outputIndex, frameSize) {
                return Mappings.find(function (e) {
                    return (e.outputIndex === outputIndex && e.frameSize === frameSize);
                });
            }

            this.cancelFeatures = function (requestorInstance, featureObject) {
                if (featureObject === undefined) {
                    Mappings.forEach(function (map) {
                        var requestorIndex = map.requestors.findIndex(function (e) {
                            return e.getRequestorInstance() === requestorInstance;
                        });
                        if (requestorIndex >= 0) {
                            map.requestors.splice(requestorIndex, 1);
                        }
                    });
                } else {
                    var map = Mappings.find(function (e) {
                        return (e.outputIndex == this.outputIndex && e.frameSize == this.frameSize);
                    }, featureObject);
                    if (!map) {
                        return;
                    }
                    var requestor = map.requestors.find(function (e) {
                        return e.getRequestorInstance() === this;
                    }, requestorInstance);
                    if (!requestor) {
                        return;
                    }
                    requestor.deleteFeatures(featureObject);
                }
                updateSender();
            }
        }
        var RequestorMap = function (pluginInstance) {
            var Features = [];
            var Receiver = pluginInstance.node.featureMap.Receiver;
            this.getRequestorInstance = function () {
                return pluginInstace;
            }

            function recursivelyAddFeatures(rootArray, featureObject) {
                var i;
                for (i = 0; i < featureObject.length; i++) {
                    // Check we have not already listed the feature
                    var featureNode = rootArray.find(function (e) {
                        return e.name === this.name;
                    }, featureObject[i]);
                    if (!featureNode) {
                        featureNode = {
                            'name': featureObject[i].name,
                            'parameters': featureObject[i].parameters,
                            'features': []
                        }
                        Features.push(featureNode);
                    }
                    if (featureObject[i].features !== undefined && featureObject[i].features.lenth > 0) {
                        recursivelyAddFeatures(featureNode.features, featureObject[i].features);
                    }
                }
            }

            function recursivelyDeleteFeatures(rootArray, featureObject) {
                var l = featureObject.length,
                    i;
                for (i = 0; i < l; i++) {
                    // Find the feature
                    var index = rootArray.find(function (e) {
                        return e.name === this.name;
                    }, featureObject[i]);
                    if (index >= 0) {
                        if (featureObject[index].features && featureObject[index].features.length > 0) {
                            recursivelyDeleteFeatures(rootArray[index].features, featureObject[index].features);
                        } else {
                            Features.splice(index, 0);
                        }
                    }

                }
            }

            this.addFeatures = function (featureObject) {
                recursivelyAddFeatures(Features, featureObject.features);
            }

            this.deleteFeatures = function (featureObject) {
                recursivelyDeleteFeatures(Features, featureObject.features);
            }

            this.getFeatureList = function () {
                return Features;
            }

            this.postFeatures = function (featureObject) {
                var message = {
                        'plugin': featureObject.plugin,
                        'outputIndex': featureObject.outputIndex,
                        'frameSize': featureObject.frameSize,
                        'features': {}
                    },
                    i;

                function recursivePostFeatures(rootNode, resultsList, FeatureList) {
                    // Add the results tree where necessary
                    var i, param;
                    for (param in resultsList) {
                        if (resultsList.hasOwnProperty(param)) {
                            var node = FeatureList.find(function (e) {
                                return e.name == param;
                            });
                            if (node) {
                                if (resultsList[param].constructor === Object && node.results) {
                                    rootNode[param] = {};
                                    recursivePostFeatures(rootNode[param], resultsList[param], node.results);
                                } else {
                                    rootNode[param] = resultsList[param];
                                }
                            }
                        }
                    }
                }
                recursivePostFeatures(message.features, featureObject.results, Features);

                pluginInstance.node.featureMap.Receiver.postFeatures(message);
            }
        }

        function findSourceIndex(pluginInstance) {
            return Mappings.findIndex(function (e) {
                return e.getSourceInstance() === this;
            }, pluginInstance);
        }

        // GENERAL INTERFACE
        this.createSourceMap = function (pluginInstance) {
            var node = new SourceMap(pluginInstance);
            Mappings.push(node);
            return node;
        };
        this.deleteSourceMap = function (pluginInstance) {
            var index = findSourceIndex(pluginInstance);
            if (index === -1) {
                throw ("Could not find the source map for the plugin");
            }
            Mappings.splice(index, 1);
        };

        this.requestFeatures = function (requestor, source, featureObject) {
            if (requestor.constructor != PluginInstance) {
                requestor = requestor.pluginInstance;
            }
            if (source.constructor != PluginInstance) {
                source = source.pluginInstance;
            }
            // Get the source map
            var sourceMap = Mappings[findSourceIndex(source)];
            if (!sourceMap) {
                sourceMap = new SourceMap(source);
                Mappings.push(sourceMap);
            }
            sourceMap.requestFeatures(requestor, featureObject);
        };
        this.deleteFeatures = function (requestor, source, featureObject) {
            if (requestor.constructor !== PluginInstance) {
                requestor = requestor.pluginInstance;
            }
            if (source === undefined) {
                Mappings.forEach(function (sourceMap) {
                    sourceMap.cancelFeatures(requestor);
                });
            } else {
                if (source.constructor !== PluginInstance) {
                    source = source.pluginInstance;
                }
                // Get the source map
                var sourceMap = Mappings[findSourceIndex(source)];
                if (!sourceMap) {
                    return;
                }
                sourceMap.cancelFeatures(requestor, featureObject);
            }
        };
        this.getFeatureList = function (requestor, source) {};
        this.postFeatures = function (featureObject) {
            // Receive from the Sender objects
            // Trigger distributed search for results transmission

            // First get the instance mapping for output/frame
            var source = Mappings[findSourceIndex(featureObject.plugin)];
            if (!source) {
                throw ("Plugin Instance not loaded!");
            }
            var frameMap = source.findFrameMap(featureObject.outputIndex, featureObject.frameSize);

            // Send the feature object to the RequestorMap object to handle comms
            frameMap.requestors.forEach(function (e) {
                e.postFeatures(this);
            }, featureObject);

        };
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
                this.parent.deletePlugin(plugin_object.id);
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
