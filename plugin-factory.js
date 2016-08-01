// This defines a master object for holding all the plugins and communicating
// This object will also handle creation and destruction of plugins

var PluginFactory = function (context, dir) {

    var audio_context = context;
    var subFactories = [];
    var plugin_prototypes = [];

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
    var promise;
    var self = this;

    if (dir == undefined) {
        dir = "js-plugin/";
    }

    if (typeof BasePlugin != "function") {
        promise = self.loadResource(dir + "base_plugin.js").then(function (response) {
            var script = document.createElement("script");
            script.textContent = response;
            document.getElementsByTagName("head")[0].appendChild(script);
            return true;
        })
    }
    if (typeof jsXtract != "function") {
        var script = document.createElement("script");
        script.src = dir + "js-xtract/jsXtract.js";
        document.getElementsByTagName("head")[0].appendChild(script);
        script = document.createElement("script");
        script.src = dir + "js-xtract/jsXtract-wa.js";
        document.getElementsByTagName("head")[0].appendChild(script);
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

    Object.defineProperty(this, "context", {
        'get': function () {
            return audio_context;
        },
        'set': function () {}
    })

    var PluginSubFactory = function (PluginFactory, chainStart, chainStop) {

        var plugin_list = [];
        var pluginChainStart = chainStart;
        var pluginChainStop = chainStop;
        this.parent = PluginFactory;
        var state = 1;
        var chainStartFeature = this.parent.context.createAnalyserNode();
        pluginChainStart.disconnect();
        pluginChainStart.connect(chainStartFeature);
        pluginChainStart.connect(chainStop);

        this.getPrototypes = function () {
            return this.parent.getPrototypes();
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
            var node = new plugin_prototype();
            node.prototype.factory = this.parent;
            var obj = new PluginInstance(node, chainStop);
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
            }
        }

        this.getPlugins = function () {
            return plugin_list;
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

        var PluginInstance = function (node, next_node) {
            this.node = node;
            this.next_node = next_node;
            this.node.connect(this.next_node.input || this.next_node);

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
        }
    }
}
