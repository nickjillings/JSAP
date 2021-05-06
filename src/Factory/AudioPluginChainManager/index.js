/* jshint esversion: 6 */

import SubFactoryFeatureSender from "./SubFactoryFeatureSender/index";
import LinkedStore from '../../LinkedStore';

function AudioPluginChainManager(PluginFactory, chainStart, chainStop) {

    var plugin_list = [],
        pluginChainStart = chainStart,
        pluginChainStop = chainStop,
        factoryName = "",
        state = 1,
        delaySamples = 0,
        chainStartFeature = new SubFactoryFeatureSender(this, PluginFactory.FeatureMap),
        semanticStores = [],
        eventTarget = new EventTarget(),
        self = this;
    this.parent = PluginFactory;
    pluginChainStart.disconnect();
    pluginChainStart.connect(chainStop);

    this.TrackData = new LinkedStore("Track");

    this.featureSender = chainStartFeature;

    this.getFeatureChain = function () {

    };

    function rebuild() {
        var i = 0,
            l = plugin_list.length - 1;
        while (i < l) {
            var currentNode = plugin_list[i++];
            var nextNode = plugin_list[i];
            currentNode.reconnect(nextNode);
        }
    }

    function isolate() {
        plugin_list.forEach(function (e) {
            e.disconnect();
        });
    }

    function cutChain() {
        try {
            if (plugin_list.length > 0) {
                pluginChainStart.disconnect(plugin_list[0].input);
                plugin_list[plugin_list.length - 1].output.disconnect(pluginChainStop);
            } else {
                pluginChainStart.disconnect(pluginChainStop);
            }    
        } catch {
            console.warn('could not disconnect plugin chain!');
        }
        return true;
    }

    function joinChain() {
        if (plugin_list.length > 0) {
            pluginChainStart.connect(plugin_list[0].input);
            plugin_list[plugin_list.length - 1].output.connect(pluginChainStop);
        } else {
            pluginChainStart.connect(pluginChainStop);
        }
        chainStartFeature.rejoinExtractors();
    }

    this.bypassPlugin = function (plugin_instance, state) {
        // Check is a member of this chain
        if (plugin_list.includes(plugin_instance) === false) {
            return;
        }
        plugin_instance.bypass(state);
    };

    this.getPrototypes = function () {
        return this.parent.getPrototypes();
    };

    this.getFactory = function () {
        return this.parent;
    };

    this.destroy = function (reconnect) {
        if (state === 1) {
            var i;
            for (i = 0; i < plugin_list.length; i++) {
                this.destroyPlugin(plugin_list[i]);
            }
            pluginChainStart.disconnect();
            if (reconnect === true) {
                pluginChainStart.connect(pluginChainStop);
            }
            chainStartFeature.destroy();
            chainStartFeature = undefined;
            state = 0;
        }
    };

    // Plugin creation / destruction

    function buildNewPlugin(prototypeObject) {
        return new Promise(function(resolve, reject) {
            if (state === 0) {
                reject ("SubFactory has been destroyed! Cannot add new plugins");
            } else {
                resolve(prototypeObject);
            }
        }).then(function() {
            return prototypeObject.createPluginInstance(self, false)
            .then(function(node) {
                Object.defineProperties(node, {
                    'TrackData': {
                        value: self.TrackData
                    }
                });
                return node;
            });
        });
    }

    this.createPlugin = function (prototypeObject) {
        return buildNewPlugin(prototypeObject).catch(function(e){
            console.log(e);
            throw("Plugin did not get created! Aborting");
        }).then(function(node) {
            cutChain();
            plugin_list.push(node);
            isolate();
            rebuild();
            joinChain();
            node.addEventListener("alterdelay", self);
            node.node.onloaded.call(node.node);
            updateDelayCompensation();
            eventTarget.dispatchEvent(new Event("change"));
            return node;
        });
    };

    this.removePlugin = function(plugin_object) {
        if (state === 0) {
            return;
        }
        var index = this.getPluginIndex(plugin_object);
        if (index >= 0) {
            cutChain();
            plugin_object.removeEventListener("alterdelay", self);
            plugin_object.node.stop.call(plugin_object.node);
            plugin_object.node.onunloaded.call(plugin_object.node);
            plugin_list.splice(index, 1);
            isolate();
            rebuild();
            joinChain();
            updateDelayCompensation();
            eventTarget.dispatchEvent(new Event("change"));
        }
    };

    this.destroyPlugin = function (plugin_object) {
        if (state === 0) {
            return;
        }
        this.removePlugin(plugin_object);
        this.parent.deletePlugin(plugin_object);
        updateDelayCompensation();
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
        var index = this.getPluginIndex(plugin_object),
            obj, holdLow, holdHigh, i;
        if (PluginFactory.getAllPlugins().includes(plugin_object) === false) {
            throw("Plugin does not exist");
        }
        cutChain();
        isolate();
        if (plugin_object.node.owner !== this) {
            // Different sub-factory
            plugin_object.node.owner.removePlugin(plugin_object);
            plugin_object.node.owner = this;
            obj = [plugin_object];
        } else {
            obj = plugin_list.splice(index, 1);
            plugin_object.node.onunloaded.call(plugin_object.node);
        }
        if (new_index === 0) {
            plugin_list = obj.concat(plugin_list);
        } else if (new_index >= plugin_list.length) {
            plugin_list = plugin_list.concat(obj);
        } else {
            holdLow = plugin_list.slice(0, new_index);
            holdHigh = plugin_list.slice(new_index);
            plugin_list = holdLow.concat(obj.concat(holdHigh));
        }
        rebuild();
        joinChain();
        plugin_object.node.onloaded.call(plugin_object.node);
        updateDelayCompensation();
        eventTarget.dispatchEvent(new Event("change"));
    };

    this.copyPlugin = function(plugin_object, copy_index) {
        if (copy_index === undefined) {
            copy_index = plugin_list.length;
        }
        if (typeof copy_index != "number" || copy_index < 0 || copy_index > plugin_list.length) {
            throw("Plugin copy index outside of the chain scope.");
        }
        return buildNewPlugin(plugin_object.prototypeObject)
        .catch(function(e){
            console.log(e);
            throw("Plugin did not get created! Aborting");
        }).then(function(node) {
            node.node.parameters.setParametersByObject(plugin_object.node.parameters.getParameterObject());
            cutChain();
            isolate();
            plugin_list.splice(copy_index, 0, node);
            rebuild();
            joinChain();
            updateDelayCompensation();
            node.node.onloaded.call(node.node);
            eventTarget.dispatchEvent(new Event("change"));
            return node;
        });

    };

    this.duplicateAudioPluginChainManager = function(sourceAudioPluginChainManager) {
        var promise = Promise.resolve(null);
        sourceAudioPluginChainManager.getPlugins().forEach((plugin_object) => {
            promise = promise.then(() => this.copyPlugin(plugin_object));
        });
        return promise;
    }

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

    function getDelayCompensation() {
        var sum = 0;
        plugin_list.filter(function(plugin) {
            return !plugin.isBypassed();
        }).forEach(function(plugin) {
            sum += plugin.node.processingDelayAsSamples;
        });
        return sum;
    }

    function updateDelayCompensation() {
        var sum = getDelayCompensation();
        if (delaySamples != sum) {
            delaySamples = sum;
            eventTarget.dispatchEvent(new Event("alterdelay"));
        }
        return delaySamples;
    }

    Object.defineProperties(this, {
        'chainStart': {
            'value': chainStart
        },
        'chainStop': {
            'value': chainStop
        },
        "updateDelayCompensation": {
            "value": function () {
                return updateDelayCompensation();
            }
        },
        "processingDelayAsSamples": {
            "get": function() {
                return updateDelayCompensation();
            },
            "set": function() {
                throw("processingDelayAsSamples is read-only");
            }
        },
        "processingDelayAsSeconds": {
            "get": function() {
                return this.processingDelayAsSamples/PluginFactory.context.sampleRate;
            },
            "set": function() {
                throw("processingDelayAsSeconds is read-only");
            }
        },
        'name': {
            'get': function () {
                return factoryName;
            },
            'set': function (name) {
                if (typeof name === "string") {
                    factoryName = name;
                }
                return factoryName;
            }
        },
        'recursiveProcessing': {
            'get': function () {
                return recursiveProcessing;
            }
        },
        'handleEvent': {
            "value": function(e) {
                if (e.type == "alterdelay") {
                    updateDelayCompensation();
                }
            }
        },
        "addEventListener": {
            "value": function(key, value) {
                return eventTarget.addEventListener(key, value);
            }
        },
        "removeEventListener": {
            "value": function(key, value) {
                return eventTarget.addEventListener(key, value);
            }
        }
    });
}

export default AudioPluginChainManager;
