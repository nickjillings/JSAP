// This defines a master object for holding all the plugins and communicating
// This object will also handle creation and destruction of plugins

var PluginFactory = function () {

    var subFactories = [];
    var plugin_prototypes = [];

    this.addPrototype = function (plugin_proto, plugin_name) {
        if (typeof plugin_proto != "function") {
            console.error("The Prototype must be a function!");
            return;
        }
        if (typeof plugin_name != "string") {
            console.error("The plugin name must be defined!");
            return;
        }
        var obj = {
            name: plugin_name,
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

    var PluginSubFactory = function (PluginFactory, chainStart, chainStop) {

        var plugin_list = [];
        var pluginChainStart = chainStart;
        var pluginChainStop = chainStop;
        this.parent = PluginFactory;
        var state = 1;

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
            var obj = new PluginInstance(node, chainStop);
            var last_node = plugin_list[plugin_list.length - 1];
            if (last_node != undefined) {
                last_node.reconnect(node);
            } else {
                pluginChainStart.disconnect(pluginChainStop);
                pluginChainStart.connect(node.input || node);
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
        }

        this.movePlugin = function (plugin_object, new_index) {
            if (state = 0) {
                return;
            }
            var index = this.getPluginIndex(plugin_object);
            if (index >= 0) {
                var obj = plugin_list.splice(index, 1);
                if (new_index == 0) {
                    plugin_list = [obj].concat(plugin_list);
                } else if (new_index >= plugin_list.length) {
                    plugin_list = plugin_list.concat(plugin_list);
                } else {
                    var holdLow = plugin_list.slice(0, index);
                    var holdHigh = plugin_list.slice(index);
                    plugin_list = holdLow.concat([obj].concat(holdHigh));
                }
            }
        }

        var PluginInstance = function (node, next_node) {
            this.node = node;
            this.next_node = next_node;
            this.node.connect(this.next_node.input || this.next_node);

            this.reconnect = function (new_next) {
                if (new_next != this.next_node) {
                    this.node.disconnect(this.next_node.input || this.next_node);
                    this.next_node = new_next;
                    this.node.connect(this.next_node.input || this.next_node);
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
