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
    
    this.getAllPluginsObject = function() {
        var obj = {
            'factory': this,
            'subFactories': []
        };
        for (var i=0; i<subFactories.length; i++) {
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
    
    this.createPluginInstance = function() {
        var node = new PluginInstance(_currentPluginId++);
        _plugins.push(node);
        return node;
    }
    
    this.deletePlugin = function(id) {
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
        
        this.populate = function(node, next_node) {
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
            'get': function() {return _id;},
            'set': function() {console.error("ID is a read-only variable")}
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
        
        this.getFactory = function() {
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
        
        this.getAllPlugins = function() {
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
            get: function() {return _factoryName;},
            set: function(name) {
                if (typeof name == "string") {
                    _factoryName = name;
                }
                return _factoryName;
            }
        });
    }
    
    
    // ======= Feature Mapping =======
    var _featureMaps = [];
    
    this.requestFeatures = function(requester, fetcher, features) {
        /*
            Request features from a plugin (fetcher) to sent to requester
        */
        
        // Firstly, find the fetcher in the _featureMaps
        var fetcherObject = _featureMaps.find(function(element){
            if (element.plugin == this) {return true;} return false;
        },fetcher);
        if (!fetcherObject) {
            fetcherObject = {
                'plugin': fetcher,
                'requests': []
            };
            _featureMaps.push(fetcherObject)''
        }
        
        // Now find the requester
        var requesterObject = fetcherObject.requests.find(function(element){
            if (element.plugin == this) {return true;} return false;
        },requester);
        if (!requesterObject) {
            requesterObject = {
                'plugin': requester,
                'features': []
            };
            fetcherObject.requests.push(requesterObject);
        }
        
        // Now processes the feature objects:
        /*
            {
                'name': String(),
                'parameters': []
            }
        */
        for (var i=0; i<features.length; i++) {
            // Convert the features to eval strings
            var feature = features[i];
            var obj = {
                'name': feature.name,
                'exec': feature.name+"("+feature.parameters.join(', ')+");"
            }
            requesterObject.features.push(obj);
        }
        
        // Now inform the plugin of the features to evaluate
        fetcher.requestFeatures(requesterObject.features);
    }
    
}
