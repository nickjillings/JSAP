// This defines a master object for holding all the plugins and communicating
// This object will also handle creation and destruction of plugins
/*globals Promise, document, console, LinkedStore, Worker, window, XMLHttpRequest */
/*eslint-env browser */
/* jshint esversion:6 */

// Load jsXtract
(function() {
    if (window.jsXtract === undefined) {
        var s = document.createElement("script");
        s.src = "https://gitcdn.xyz/repo/nickjillings/js-xtract/master/jsXtract.js";
        document.getElementsByTagName("head")[0].appendChild(s);
    }
})();

import LinkedStore from './LinkedStore';
import {BasePlugin} from './base_plugin';
import {SynthesiserBasePlugin} from './synth_base';

function PluginFactory(audio_context, rootURL) {
    var subFactories = [],
    synthesiserHosts = [],
    plugin_prototypes = [],
    pluginsList = [],
    currentPluginId = 0,
    audioStartProgramTime,
    audioStartContextTime,
    audioStarted = false;

    /*
        this.loadResource. Load a resource into the global namespace

        @param resourceObject: a JS object holding the following parameters:
            .url: URL of the resource
            .test: function to call, returns true if resource already loaded, false if not
    */
    this.loadPrototypeModule = function(resourceObject, mustModule) {
        var factory = this;
        return new Promise(function(resolve, reject) {
            if (typeof global.define === "function" && global.define.amd) {
                global.require([resourceObject.url], function(f) {
                    resolve(f);
                });
            } else if (typeof global.module == "object" && global.module.exports) {
                resolve(global.require(resourceObject.url));
            } else {
                reject("Cannot load using modular systems");
            }
        }).then(function(executable) {
            if (typeof executable === "function") {
                return factory.addPrototype(executable);
            } else {
                reject("Is not a module plugin");
            }
        }).catch(function() {
            if (mustModule === true) {
                reject("Cannot load using modular systems");
            } else {
                console.warn("Could not load using modular systems");
                return factory.loadPluginScript(resourceObject);
            }
        });
    };
    this.loadResource = function (resourceObject) {
        return new Promise(function(resolve, reject) {
            if (typeof resourceObject !== "object") {
                reject("Error");
            }
            else if (typeof resourceObject.url !== "string") {
                reject("resourceObject.url must be a string");
            }
            else if (typeof resourceObject.test !== "function") {
                reject("resourceObject.test must be a function");
            } else {
                resolve(resourceObject);
            }
        }).then(function(resourceObject){
            var response = resourceObject.test();
            if (response !== false && response !== true) {
                throw ("resourceObject.test must return true or false");
            }
            if (!resourceObject.type) {
                resourceObject.type = "javascript";
            }
            resourceObject.type = resourceObject.type.toLowerCase();
            switch (resourceObject.type) {
                case "javascript":
                    if (!response) {
                        return loadResource(resourceObject).then(function (resourceObject) {
                            if (typeof resourceObject.returnObject === "string") {
                                var returnObject;
                                if (window.hasOwnProperty(resourceObject.returnObject)) {
                                    return window[resourceObject.returnObject];
                                }
                                return false;
                            } else {
                                return true;
                            }
                        });
                    } else {
                        return new Promise(function (resolve, reject) {
                            if (typeof resourceObject.returnObject === "string") {
                                if (window.hasOwnProperty(resourceObject.returnObject)) {
                                    resolve(window[resourceObject.returnObject]);
                                } else {
                                    reject(false);
                                }
                            } else {
                                resolve(true);
                            }
                        });
                    }
                    break;
                default:
                    throw ("Invalid type " + String(resourceObject.type));
            }
        });
    };

    this.loadPluginScript = function (resourceObject) {
        if (resourceObject) {
            if (typeof resourceObject.returnObject !== "string") {
                throw ("resourceObject.returnObject must be the name of the prototype function");
            }
            return this.loadResource(resourceObject).then(function (plugin) {
                return this.addPrototype(plugin);
            }.bind(this));
        }
    };

    function loadResource(resourceObject) {
        if (resourceObject.url.startsWith("http") === false && rootURL !== undefined && rootURL.startsWith("http")) {
            resourceObject.url = rootURL + resourceObject.url;
        }
        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.open("GET", resourceObject.url);
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    var script = document.createElement("script");
                    script.textContent = xhr.responseText;
                    document.getElementsByTagName("head")[0].appendChild(script);
                    resolve(resourceObject);
                }

            };
            xhr.send();
        });
    }

    function copyFactory(newcontext) {
        return new Promise(function(resolve, reject) {
            if (newcontext.sampleRate === undefined) {
                //Maybe not a real AudioContext
                reject(new Error("Invalid audio context provided"));
            } else {
                resolve(newcontext);
            }
        }).then(function(newcontext) {
            var BFactory = new PluginFactory(newcontext);
            var promises = [];
            plugin_prototypes.forEach(function (proto) {
                promises.push(BFactory.addPrototype(proto.proto));
            });
            return Promise.all(promises).then(function() {
                return BFactory;
            });
        }).then(function(newFactory) {
            return newFactory;
        });
    }

    var PluginInstance = function (id, plugin_node) {
        this.next_node = undefined;
        var _bypassed = false;
        var ev = new EventTarget();
        var _in = audio_context.createGain(),
            _out = audio_context.createGain();

        _in.connect(plugin_node.getInputs()[0]);
        plugin_node.getOutputs()[0].connect(_out);
        plugin_node.addEventListener(this);

        function bypassEnable() {
            _in.disconnect();
            _in.connect(_out);
            _bypassed = true;
            if (plugin_node.processingDelayAsSamples != 0) {
                ev.dispatchEvent(new Event("alterdelay"));
            }
        }

        function bypassDisable() {
            _in.disconnect();
            _in.connect(plugin_node.getInputs()[0]);
            _bypassed = false;
            if (plugin_node.processingDelayAsSamples != 0) {
                ev.dispatchEvent(new Event("alterdelay"));
            }
        }

        this.bypass = function (state) {
            state = (state === true);
            if (state === _bypassed) {
                return _bypassed;
            }
            if (state) {
                bypassEnable();
            } else {
                bypassDisable();
            }
            return _bypassed;
        };

        this.isBypassed = function () {
            return _bypassed;
        };

        this.reconnect = function (new_next) {
            this.connect(new_next);
        };

        this.connect = function (new_next) {
            if (this.next_node !== undefined) {
                this.disconnect();
            }
            if (new_next !== undefined && new_next.input !== undefined) {
                this.next_node = new_next;
                _out.connect(this.next_node.input);
                return true;
            }
            return false;
        };

        this.disconnect = function () {
            if (this.next_node !== undefined) {
                _out.disconnect(this.next_node.input);
                this.next_node = undefined;
            }
        };

        this.destroy = function () {
            plugin_node.destroy();
        };

        Object.defineProperties(this, {
            "handleEvent": {
                "value": function(e) {
                    ev.dispatchEvent(new Event(e.type));
                }
            },
            "addEventListener": {
                "value": function(a,b,c) {
                    return ev.addEventListener(a,b,c);
                }
            },
            "removeEventListener": {
                "value": function(a,b,c) {
                    return ev.removeEventListener(a,b,c);
                }
            },
            'id': {
                'value': id
            },
            'node': {
                'value': plugin_node
            },
            'input': {
                'get': function () {
                    return _in;
                }
            },
            'output': {
                'get': function () {
                    return _out;
                }
            },
            'bypassed': {
                'get': function () {
                    return _bypassed;
                }
            }
        });
    };
    PluginInstance.prototype.factory = this;

    var MidiSynthesisInstance = function(id, synthNode) {
        var _out = audio_context.createGain();
        synthNode.getOutputs()[0].connect(_out);

        this.destroy = function () {
            synthNode.destroy();
        };

        Object.defineProperties(this, {
            'id': {
                'value': id
            },
            'node': {
                'value': synthNode
            },
            'output': {
                'get': function () {
                    return _out;
                }
            },
        });
    };

    var PluginPrototype = function (proto, factory) {
	    var self = this;
        Object.defineProperties(this, {
            'name': {
                value: proto.prototype.name
            },
            'proto': {
                value: proto
            },
            'version': {
                value: proto.prototype.version
            },
            'uniqueID': {
                value: proto.prototype.uniqueID
            },
            'hasMidiInput': {
                value: proto.prototype.hasMidiInput || false
            },
            'hasMidiOutput': {
                value: proto.prototype.hasMidiOutput || false
            }
        });

        this.createPluginInstance = async function(owner, async) {
            var p = createPluginInstance(owner);
            if (async === true) {
                return p;
            } else {
                await p;
                return p;
            }
        };

        function createPluginInstance(owner) {
            return waitUntilReady().then(function() {
                return new Promise(function(resolve, reject) {
                    if (!checkIsReady()) {
                        reject(new Error("Plugin not ready"));
                    } else {
                        resolve(new proto(factory, owner));
                    }
                })
            }).then(function(plugin) {
                return new Promise(function(resolve, reject){
                    if (plugin.initialise) {
                        return plugin.initialise().then(function() {
                            resolve(plugin);
                        });
                    } else {
                        resolve(plugin);
                    }
                });
            }).then(function(plugin) {
                var node;
                if (plugin.hasMidiInput !== true && plugin.hasMidiOutput !== true) {
                    node = new PluginInstance(currentPluginId++, plugin);
                } else if (plugin.hasMidiInput === true && plugin.hasMidiOutput !== true) {
                    node = new MidiSynthesisInstance(currentPluginId++, plugin);
                } else {
                    throw("No Instance Holder Available!");
                }
                Object.defineProperties(plugin, {
                    'pluginInstance': {
                        'value': node
                    },
                    'prototypeObject': {
                        'value': self
                    },
                    'name': {
                        value: proto.prototype.name
                    },
                    'version': {
                        value: proto.prototype.version
                    },
                    'uniqueID': {
                        value: proto.prototype.uniqueID
                    },
                    'SesionData': {
                        value: factory.SessionData
                    },
                    'UserData': {
                        value: factory.UserData
                    }
                });
                Object.defineProperties(node, {
                    "prototypeObject": {
                        'value': self
                    },
                    "externalInterface": {
                        'value': plugin.externalInterface
                    }
                });
                factory.registerPluginInstance(node);
                return node;
            });
        }

        function loadResourceChain(resourceObject, p) {
            if (!p) {
                var k = loadResource(resourceObject);
                k.then(function (resourceObject) {
                    if (resourceObject.resources !== undefined && resourceObject.resources.length > 0) {
                        for (var i = 0; i < resourceObject.resources.length; i++) {
                            k = loadResourceChain(resourceObject.resources[i], k);
                        }
                    }
                });
                return k;
            } else {
                return p.then(loadResource(resourceObject));
            }
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
        if (proto.prototype.resources) {
            for (var i = 0; i < proto.prototype.resources.length; i++) {
                var resource = proto.prototype.resources[i];
                resource.type = resource.type.toLowerCase();
                switch (resource.type) {
                    case "css":
                        loadStylesheet(resource.url);
                        break;
                    case "javascript":
                        var object = {
                            'promise': loadResourceChain(resource),
                            'state': 0,
                            'complete': function () {
                                this.state = 1;
                            },
                            'test': recursiveGetTest(resource)
                        };
                        object.promise.then(object.complete.bind(object));
                        resourcePromises.push(object);
                        break;
                    default:
                        throw ("Could not load " + resource.url + ", invalid resource.type");
                }
            }
        }

        this.getResourcePromises = function () {
            return resourcePromises;
        };
        function checkIsReady() {
            var state = true;
            for (var i = 0; i < resourcePromises.length; i++) {
                if (resourcePromises[i].state !== 1 || !resourcePromises[i].test()) {
                    state = false;
                    break;
                }
            }
            return state;
        };
        function waitUntilReady() {
            return Promise.all(resourcePromises);
        }
    };

    this.addPrototype = function (plugin_proto) {
        var factory = this;
        return new Promise(function(resolve, reject) {
            if (typeof plugin_proto !== "function") {
                reject("The Prototype must be a function!");
            }
            else if (typeof plugin_proto.prototype.name !== "string" || plugin_proto.prototype.name.length === 0) {
                reject("Malformed plugin. Name not defined");
            }
            else if (typeof plugin_proto.prototype.version !== "string" || plugin_proto.prototype.version.length === 0) {
                reject("Malformed plugin. Version not defined");
            }
            else if (typeof plugin_proto.prototype.uniqueID !== "string" || plugin_proto.prototype.uniqueID.length === 0) {
                reject("Malformed plugin. uniqueID not defined");
            } else {
                resolve(plugin_proto);
            }
        }).then(function(plugin_proto) {
            var testObj = {
                'proto': plugin_proto,
                'name': plugin_proto.prototype.name,
                'version': plugin_proto.prototype.version,
                'uniqueID': plugin_proto.prototype.uniqueID
            };
            var obj = plugin_prototypes.find(function (e) {
                var param;
                var match = 0;
                for (param in this) {
                    if (e[param] === this[param]) {
                        match++;
                    }
                }
                return match === 4;
            }, testObj);
            if (obj) {
                throw ("The plugin must be unique!");
            }
            obj = new PluginPrototype(plugin_proto, factory);
            plugin_prototypes.push(obj);
            Object.defineProperties(obj, {
                'factory': {
                    'value': factory
                }
            });
            return obj;
        });
    };

    this.getPrototypes = function () {
        return plugin_prototypes;
    };

    this.getAudioPluginPrototypes = function() {
        return plugin_prototypes.filter(function(proto) {
            return proto.hasMidiInput == false && proto.hasMidiOutput == false;
        });
    };

    this.getMidiSynthPrototypes = function() {
        return plugin_prototypes.filter(function(proto) {
            return proto.hasMidiInput == true && proto.hasMidiOutput == false;
        });
    };

    this.getMidiPluginPrototypes = function() {
        return plugin_prototypes.filter(function(proto) {
            return proto.hasMidiInput == true && proto.hasMidiOutput == true;
        });
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

    this.createSubFactory = function(chainStart, chainStop) {
        console.warn("DEPRECATED - This function will be deprecated in favour of \"createAudioPluginChainManager\"");
        return this.createAudioPluginChainManager(chainStart, chainStop);
    };

    this.destroySubFactory = function(chainStart, chainStop) {
        console.warn("DEPRECATED - This function will be deprecated in favour of \"destroyAudioPluginChainManager\"");
        return this.destroyAudioPluginChainManager(chainStart, chainStop);
    };

    this.createAudioPluginChainManager = function (chainStart, chainStop) {
        var node = new AudioPluginChainManager(this, chainStart, chainStop);
        Object.defineProperties(node, {
            'SessionData': {
                value: this.SessionData
            },
            'UserData': {
                value: this.UserData
            }
        });
        subFactories.push(node);
        return node;
    };

    this.duplicateAudioPluginChainManager = function(sourceChainManager, chainStart, chainStop) {
        var node = this.createAudioPluginChainManager(chainStart, chainStop);
        var promiseChain = Promise.resolve();
        sourceChainManager.getPlugins().forEach(function(plugin_object) {
            promiseChain = promiseChain.then(function() {
                return node.createPlugin(plugin_object.prototypeObject)
                .then(function(newPlugin) {
                    newPlugin.node.parameters.setParametersByObject(plugin_object.node.parameters.getParameterObject);
                });
            });
        });
        return promiseChain.then(function() {
            return node;
        });
    };

    this.destroyAudioPluginChainManager = function (SubFactory) {
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

    this.createMidiSynthesiserHost = function(factory) {
        var host = new MidiSynthesiserHost(factory);
        Object.defineProperties(host, {
            'SessionData': {
                value: this.SessionData
            },
            'UserData': {
                value: this.UserData
            }
        });
        synthesiserHosts.push(host);
        return host;
    };

    this.destroyMidiSynthesiserHost = function (host) {
        var index = synthesiserHosts.findIndex(function (element) {
            if (element === this) {
                return true;
            }
            return false;
        }, host);
        if (index >= 0) {
            synthesiserHosts.splice(index, 1);
            host.destroy();
        }
    };

    this.registerPluginInstance = function (instance) {
        if (pluginsList.find(function (p) {
                return p === this;
            }, instance)) {
            throw ("Plugin Instance not unique");
        }
        pluginsList.push(instance);
        if (audioStarted) {
            var context_time = audio_context.currentTime;
            var program_time = this.getCurrentProgramTime();
            pluginAudioStart(instance.node, program_time, context_time);
        }
        return true;
    };

    this.deletePlugin = function (id) {
        var index = pluginsList.findIndex(function (p) {
            return p.id === id;
        });
        if (index >= 0) {
            var p = pluginsList.splice(index, 1);
            p[0].node.externalInterface.closeWindows();
        }
    };

    this.getCurrentProgramTime = function() {
        if (audioStarted) {
            return audio_context.currentTime - audioStartContextTime + audioStartProgramTime;
        } else {
            return audioStartProgramTime
        }
    };

    this.setCurrentProgramTime = function(time) {
        if (audioStarted) {
            throw("Must stop playback to set the current program time");
        }
        if (typeof time == "number" && time >= 0) {
            audioStartProgramTime = time;
            this.PluginGUI.pollAllPlugins();
        }
    };

    function pluginAudioStart(node, program_time, context_time) {
        node.start.call(node, program_time, context_time);
        node.parameters.getParameterNames().forEach(function(n) {
            var p = node.parameters.getParameterByName(n);
            if (p.enabled) {
                p.start(program_time, context_time);
            }
        });
    }

    function pluginAudioStop(node) {
        node.stop.call(node);
        node.parameters.getParameterNames().forEach(function(n) {
            var p = node.parameters.getParameterByName(n);
            if (p.enabled) {
                p.stop();
            }
        });
    }

    function triggerAudioStart(program_time, context_time) {
        pluginsList.forEach(function (n) {
            pluginAudioStart(n.node, program_time, context_time);
        });

    }

    function triggerAudioStop() {
        pluginsList.forEach(function (n) {
            pluginAudioStop(n.node);
        });
    }

    this.audioStart = function (program_time, context_time) {
        if (context_time === undefined) {
            context_time = audio_context.currentTime;
        }
        if (program_time === undefined) {
            program_time = 0;
            console.warn("Assuming start time at 0");
        }
        if (!audioStarted) {
            this.setCurrentProgramTime(program_time);
            audioStartContextTime = context_time;
            triggerAudioStart(program_time, context_time);
            audioStarted = true;
        }
    };
    this.audioStop = function () {
        if (audioStarted) {
            triggerAudioStop();
            audioStarted = false;
        }
    };

    var FeatureMap = function () {
        var Mappings = [];

        var FeatureNode = function (node) {
            this.name = node.name;
            this.parameters = this.parameters;
            this.features = [];
        };

        function getFeatureNode(list, check) {
            return list.find(function (e) {
                return e.name === this.name;
            }, check);
        }

        function addFeatureNode(featureNode, list) {
            var node = new FeatureNode(featureNode);
            list.push(node);
            return node;
        }

        var SourceMap = function (Sender, pluginInstace) {
            var Mappings = [];
            this.getSourceInstance = function () {
                return pluginInstace;
            };
            this.getSender = function () {
                return Sender;
            };

            function findFeatureObject(featureObject) {
                return Mappings.find(function (e) {
                    return (e.outputIndex === this.outputIndex && e.frameSize === this.frameSize);
                }, featureObject);
            }

            function updateSender() {
                function recursiveFind(featureList) {
                    var f, list = [];
                    for (f = 0; f < featureList.length; f++) {
                        var featureNode = getFeatureNode(list, featureList[f]);
                        if (!featureNode || (featureList.parameters && featureList[f].parameters.length !== 0)) {
                            featureNode = addFeatureNode(featureList[f], list);
                        }
                        if (featureList[f].features && featureList[f].features.length > 0) {
                            featureNode.features = recursiveFind(featureList[f].features);
                        }
                    }
                    return list;
                }
                var i, outputList = [];
                for (i = 0; i < Mappings.length; i++) {
                    if (outputList[Mappings[i].outputIndex] === undefined) {
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
                var map = findFeatureObject(featureObject);
                if (!map) {
                    map = {
                        'outputIndex': featureObject.outputIndex,
                        'frameSize': featureObject.frameSize,
                        'requestors': [],
                        'getFeatureList': function () {
                            var F = [],
                                i;
                            for (i = 0; i < this.requestors.length; i++) {
                                F = F.concat(this.requestors[i].getFeatureList());
                            }
                            return F;
                        }
                    };
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
            };

            this.findFrameMap = function (outputIndex, frameSize) {
                return Mappings.find(function (e) {
                    return (e.outputIndex === outputIndex && e.frameSize === frameSize);
                });
            };

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
                    var map = findFeatureObject(featureObject);
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
            };
        };
        var RequestorMap = function (pluginInstance) {
            var Features = [];
            var Receiver = pluginInstance.node.featureMap.Receiver;
            this.getRequestorInstance = function () {
                return pluginInstance;
            };

            function recursivelyAddFeatures(rootArray, featureObject) {
                var i;
                for (i = 0; i < featureObject.length; i++) {
                    // Check we have not already listed the feature
                    var featureNode = getFeatureNode(rootArray, featureObject[i]);
                    if (!featureNode || (featureObject[i].parameters && featureObject[i].parameters.length !== 0)) {
                        featureNode = addFeatureNode(featureObject[i], rootArray);
                    }
                    if (featureObject[i].features !== undefined && featureObject[i].features.length > 0) {
                        recursivelyAddFeatures(featureNode.features, featureObject[i].features);
                    }
                }
            }

            function recursivelyDeleteFeatures(rootArray, featureObject) {
                var l = featureObject.length,
                    i;
                for (i = 0; i < l; i++) {
                    // Find the feature
                    var index = getFeatureNode(rootArray, featureObject[i]);
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
            };

            this.deleteFeatures = function (featureObject) {
                recursivelyDeleteFeatures(Features, featureObject.features);
            };

            this.getFeatureList = function () {
                return Features;
            };

            this.postFeatures = function (featureObject) {
                var message = {
                        'plugin': featureObject.plugin,
                        'outputIndex': featureObject.outputIndex,
                        'frameSize': featureObject.frameSize,
                        'features': {
                            'numberOfChannels': featureObject.results.numberOfChannels,
                            'results': []
                        }
                    },
                    i;

                function recursivePostFeatures(rootNode, resultsList, FeatureList) {
                    // Add the results tree where necessary
                    var i, param;

                    function ao(e) {
                        return e.name === param;
                    }
                    for (param in resultsList) {
                        if (resultsList.hasOwnProperty(param)) {
                            var node = FeatureList.find(ao);
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
                // Perform recursive map for each channel
                for (i = 0; i < featureObject.results.numberOfChannels; i++) {
                    message.features.results[i] = {};
                    recursivePostFeatures(message.features.results[i], featureObject.results.results[i].results, Features);
                }
                pluginInstance.node.featureMap.Receiver.postFeatures(message);
            };
        };

        function findSourceIndex(Sender) {
            return Mappings.findIndex(function (e) {
                return e.getSender() === this;
            }, Sender);
        }

        function findSourceMap(Mappings, source, pluginSender) {
            var sourceMap = Mappings[findSourceIndex(source)];
            if (!sourceMap) {
                sourceMap = Mappings[findSourceIndex(pluginSender)];
                if (!sourceMap) {
                    throw ("Could not locate source map");
                }
            }
            return sourceMap;
        }

        // GENERAL INTERFACE
        this.createSourceMap = function (Sender, pluginInstance) {
            var node = new SourceMap(Sender, pluginInstance);
            Mappings.push(node);
            return node;
        };
        this.deleteSourceMap = function (Sender) {
            var index = findSourceIndex(Sender);
            if (index === -1) {
                throw ("Could not find the source map for the plugin");
            }
            Mappings.splice(index, 1);
        };

        this.getPluginSender = function (plugin) {
            if (plugin.constructor === PluginInstance) {
                plugin = plugin.node;
            }
            return plugin.featureMap.Sender;
        };

        this.requestFeatures = function (requestor, source, featureObject) {
            if (requestor.constructor !== PluginInstance) {
                requestor = requestor.pluginInstance;
            }
            // Get the source map
            var pluginSender = this.getPluginSender(source);
            var sourceMap = findSourceMap(Mappings, source, pluginSender);
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
                // Get the source map
                var pluginSender = this.getPluginSender(source);
                var sourceMap = findSourceMap(Mappings, source, pluginSender);
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
                source = Mappings[findSourceIndex(this.getPluginSender(featureObject.plugin))];
                if (!source) {
                    throw ("Plugin Instance not loaded!");
                }
            }
            var frameMap = source.findFrameMap(featureObject.outputIndex, featureObject.frameSize);

            // Send the feature object to the RequestorMap object to handle comms
            frameMap.requestors.forEach(function (e) {
                e.postFeatures(this);
            }, featureObject);

        };
    };

    this.FeatureMap = new FeatureMap();
    Object.defineProperty(this.FeatureMap, "factory", {
        'value': this
    });

    var stores = [];

    this.createStore = function (storeName) {
        var node = new LinkedStore.LinkedStore(storeName);
        stores.push(node);
        return node;
    };

    this.getStores = function () {
        return stores;
    };

    this.findStore = function (storeName) {
        return stores.find(function (a) {
            return a.name === storeName;
        });
    };

    // Build the default Stores
    this.SessionData = new LinkedStore.LinkedStore("Session");
    this.UserData = new LinkedStore.LinkedStore("User");

    // Created for the input of each SubFactory plugin chain
    var SubFactoryFeatureSender = function (owner, FactoryFeatureMap) {
        var OutputNode = function (parent, output) {
            var extractors = [];
            var Extractor = function (output, frameSize) {
                this.extractor = output.context.createAnalyser();
                this.extractor.fftSize = frameSize;
                output.connect(this.extractor);
                this.features = [];
                Object.defineProperty(this, "frameSize", {
                    'value': frameSize
                });

                var recursiveProcessing = owner.recursiveProcessing;
                /*
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
                */
                function onaudiocallback(data) {
                    //this === Extractor
                    var message = {
                        'numberOfChannels': 1,
                        'results': []
                    };
                    recursiveProcessing(data, this.features);
                    message.results[0] = {
                        'channel': 0,
                        'results': JSON.parse(data.toJSON())
                    };
                    this.postFeatures(data.length, message);
                }

                this.setFeatures = function (featureList) {
                    this.features = featureList;
                    if (this.features.length === 0) {
                        this.extractor.clearCallback();
                    } else {
                        this.extractor.frameCallback(onaudiocallback, this);
                    }
                };
                this.rejoinExtractor = function () {
                    output.connect(this.extractor);
                };
            };
            var WorkerExtractor = function (output, frameSize) {
                function onaudiocallback(e) {
                    var c, frames = [];
                    for (c = 0; c < e.inputBuffer.numberOfChannels; c++) {
                        frames[c] = e.inputBuffer.getChannelData(c);
                    }
                    worker.postMessage({
                        'state': 2,
                        'frames': frames
                    });
                }

                function response(msg) {
                    this.postFeatures(frameSize, msg.data.response);
                }

                var worker = new Worker("jsap/feature-worker.js");
                worker.onerror = function (e) {
                    console.error(e);
                };

                this.setFeatures = function (featureList) {
                    var self = this;
                    var configMessage = {
                        'state': 1,
                        'sampleRate': output.context.sampleRate,
                        'featureList': featureList,
                        'numChannels': output.numberOfOutputs,
                        'frameSize': this.frameSize
                    };
                    this.features = featureList;
                    if (featureList && featureList.length > 0) {
                        worker.onmessage = function (e) {
                            if (e.data.state === 1) {
                                worker.onmessage = response.bind(self);
                                self.extractor.onaudioprocess = onaudiocallback.bind(self);
                            } else {
                                worker.postMessage(configMessage);
                            }
                        };
                        worker.postMessage({
                            'state': 0
                        });
                    } else {
                        this.extractor.onaudioprocess = undefined;
                    }

                };

                this.rejoinExtractor = function () {
                    output.connect(this.extractor);
                };

                this.extractor = output.context.createScriptProcessor(frameSize, output.numberOfOutputs, 1);
                output.connect(this.extractor);
                this.extractor.connect(output.context.destination);

                Object.defineProperty(this, "frameSize", {
                    'value': frameSize
                });
            };
            this.addExtractor = function (frameSize) {
                var obj;
                if (window.Worker) {
                    obj = new WorkerExtractor(output, frameSize);
                } else {
                    obj = new Extractor(output, frameSize);
                }
                extractors.push(obj);
                Object.defineProperty(obj, "postFeatures", {
                    'value': function (frameSize, resultsJSON) {
                        var obj = {
                            'outputIndex': 0,
                            'frameSize': frameSize,
                            'results': resultsJSON
                        };
                        this.postFeatures(obj);
                    }.bind(this)
                });
                return obj;
            };
            this.findExtractor = function (frameSize) {
                var check = frameSize;
                return extractors.find(function (e) {
                    // This MUST be == NOT ===
                    return Number(e.frameSize) === Number(check);
                });
            };
            this.rejoinExtractors = function () {
                extractors.forEach(function (e) {
                    e.rejoinExtractor();
                });
            };
            this.deleteExtractor = function (frameSize) {};
        };
        var outputNodes;
        this.updateFeatures = function (featureObject) {
            var o;
            for (o = 0; o < featureObject.length; o++) {
                if (outputNodes === undefined) {
                    if (o > 1) {
                        throw ("Requested an output that does not exist");
                    }
                    outputNodes = new OutputNode(owner, owner.chainStart);
                    Object.defineProperty(outputNodes, "postFeatures", {
                        'value': function (resultObject) {
                            this.postFeatures(resultObject);
                        }.bind(this)
                    });
                }
                var si;
                for (si = 0; si < featureObject[o].length; si++) {
                    var extractor = outputNodes.findExtractor(featureObject[o][si].frameSize);
                    if (!extractor) {
                        extractor = outputNodes.addExtractor(featureObject[o][si].frameSize);
                    }
                    extractor.setFeatures(featureObject[o][si].featureList);
                }
            }
        };

        this.rejoinExtractors = function () {
            if (outputNodes) {
                outputNodes.rejoinExtractors();
            }
        };

        this.postFeatures = function (featureObject) {
            /*
                Called by the individual extractor instances:
                featureObject = {'frameSize': frameSize,
                'outputIndex': outputIndex,
                'results':[]}
            */
            FactoryFeatureMap.postFeatures({
                'plugin': this,
                'outputIndex': featureObject.outputIndex,
                'frameSize': featureObject.frameSize,
                'results': featureObject.results
            });
        };

        // Send to Factory
        FactoryFeatureMap.createSourceMap(this, undefined);
    };

    var AudioPluginChainManager = function (PluginFactory, chainStart, chainStop) {

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

        this.TrackData = new LinkedStore.LinkedStore("Track");
        this.PluginData = new LinkedStore.LinkedStore("Plugin");

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
            if (plugin_list.length > 0) {
                pluginChainStart.disconnect(plugin_list[0].input);
                plugin_list[plugin_list.length - 1].output.disconnect(pluginChainStop);
            } else {
                pluginChainStart.disconnect(pluginChainStop);
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
            var i;
            for (i = 0; i < plugin_list.length; i++) {
                this.destroyPlugin(plugin_list[i]);
            }
            pluginChainStart.disconnect();
            if (reconnect === true) {
                pluginChainStart.connect(pluginChainStop);
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
                plugin_object.node.deconstruct.call(plugin_object.node);
                plugin_list.splice(index, 1);
                isolate();
                rebuild();
                joinChain();
                updateDelayCompensation();
            }
        };

        this.destroyPlugin = function (plugin_object) {
            if (state === 0) {
                return;
            }
            this.removePlugin(plugin_object);
            this.parent.deletePlugin(plugin_object.id);
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
                return node;
            });

        };

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
    };

    var MidiSynthesiserHost = function(factory) {
        var self = this;
        function buildNewSynthesiserObject(prototypeObject) {
            return new Promise(function(resolve, reject) {
                if (prototypeObject.hasMidiInput == false || prototypeObject.hasMidiOutput == true) {
                    reject ("Prototype is not a MidiSynthesis type. hasMidiInput must be true and hasMidiOutput must be false");
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

        var midiSynthSlot;
        var connections = [];
        Object.defineProperties(this, {
            "connect": {
                "value": function(destinationNode, output, input) {
                    if (destinationNode === undefined) {
                        throw ("Must define an AudioNode object");
                    }
                    var exists = connections.find(function(conn) {
                        return conn.destinationNode == destinationNode && conn.output == output && conn.input == input;
                    });
                    if (exists) {
                        return;
                    } else {
                        connections.push({
                            destinationNode:destinationNode,
                            output:output,
                            input:input
                        });
                    }
                    if (midiSynthSlot === undefined) {
                        console.warn("MIDI Synthesiser is not loaded, connections will be validated on load");
                    } else {
                        midiSynthSlot.node.connect(destinationNode, output, input);
                    }
                }
            },
            "disconnect": {
                "value": function(destinationNode, output, input) {
                    if (destinationNode === undefined) {
                        if (midiSynthSlot) {
                            midiSynthSlot.disconnect();
                        }
                        connections = [];
                    }
                    else if (typeof destinationNode == "number" && typeof output == "undefined") {
                        output = destinationNode;
                        destinationNode = undefined;
                        connections = connections.filter(function(conn) {
                            if (conn.output == output) {
                                if (midiSynthSlot) {
                                    midiSynthSlot.node.disconnect(conn.destinationNode, conn.output);
                                }
                                return false;
                            } else {
                                return true;
                            }
                        });
                    } else if (typeof destinationNode == "object" && typeof output == "undefined") {
                        connections = connections.filter(function(conn) {
                            if (conn.destinationNode == destinationNode) {
                                if (midiSynthSlot) {
                                    midiSynthSlot.node.disconnect(conn.destinationNode);
                                }
                                return false;
                            } else {
                                return true;
                            }
                        });
                    } else if (typeof destinationNode == "object" && typeof output == "number") {
                        connections = connections.filter(function(conn) {
                            if (conn.destinationNode == destinationNode && conn.output == output) {
                                if (midiSynthSlot) {
                                    midiSynthSlot.node.disconnect(conn.destinationNode, conn.output);
                                }
                                return false;
                            } else {
                                return true;
                            }
                        });
                    } else if (typeof destinationNode == "object" && typeof output == "number" && typeof input == "number") {
                        connections = connections.filter(function(conn) {
                            if (conn.destinationNode == destinationNode && conn.output == output && conn.input == input) {
                                if (midiSynthSlot) {
                                    midiSynthSlot.node.disconnect(conn.destinationNode, conn.output, conn.input);
                                }
                                return false;
                            } else {
                                return true;
                            }
                        });
                    }
                }
            },
            "scheduleEvent": {
                "value": function(msg, t) {
                    if (midiSynthSlot) {
                        midiSynthSlot.node.scheduleEvent(msg, t);
                    } else {
                        throw("MIDI Synthesiser not loaded");
                    }
                }
            },
            "cancelAllEvents": {
                "value": function(msg, t) {
                    if (midiSynthSlot) {
                        midiSynthSlot.node.cancelAllEvents();
                    } else {
                        throw("MIDI Synthesiser not loaded");
                    }
                }
            },
            "midiSynthesiser": {
                "get": function () {
                    return midiSynthSlot;
                },
                "set": function() {
                    throw("Cannot set read-only attribute.");
                }
            },
            "loadMidiSynthesiserModule": {
                "value": function(prototype) {
                    var self = this;
                    return new Promise(function(resolve, reject) {
                        if (prototype.hasMidiInput == false || prototype.hasMidiOutput == true) {
                            reject ("Prototype is not a MidiSynthesis type. hasMidiInput must be true and hasMidiOutput must be false");
                        } else {
                            resolve(prototype);
                        }
                    }).then(function(prototypeObject) {
                        return buildNewSynthesiserObject.call(self, prototypeObject).catch(function(e){
                            throw("Plugin did not get created! Aborting");
                        });
                    }).then(function(node) {
                        midiSynthSlot = node;
                        connections.forEach(function(conn) {
                            midiSynthSlot.node.connect(conn.destinationNode, conn.output, conn.input);
                        });
                        return midiSynthSlot;
                    });
                }
            },
        });
    };

    var PluginUserInterfaceMessageHub = (function(factory){
        function buildPluginInterface(plugin_object, interface_object) {
            var iframe = document.createElement("iframe");
            iframe.src = interface_object.src;
            if (interface_object.width) {
                iframe.width = interface_object.width;
            }
            if (interface_object.height) {
                iframe.height = interface_object.height;
            }
            iframe.style.border = "0";
            return iframe;
        }
        function setDefaultInterface(url, width, height) {
            default_interface = {
                url: url,
                width: width,
                height: height
            };
            return default_interface;
        }
        function pollAllPlugins() {
            factory.getAllPlugins().forEach(function(plugin) {
                plugin.node.externalInterface.updateInterfaces(true);
            });
        }

        var listener = false;
        var default_interface = {
            src: "jsap_default.html"
        };

        return Object.create({
            "setDefaultInterface": setDefaultInterface,
            "buildPluginInterface":buildPluginInterface,
            "pollAllPlugins": pollAllPlugins
        });
    })(this);

    Object.defineProperties(this, {
        "context": {
            "value": audio_context
        },
        "hasAudioStarted": {
            "get": function() {
                return audioStarted;
            }
        },
        "pluginRootURL": {
            "get": function () {
                return rootURL;
            },
            "set": function (t) {
                if (typeof t === "string") {
                    rootURL = t;
                    return rootURL;
                }
                throw ("Cannot set root URL without a string");
            }
        },
        "createFactoryCopy": {
            "value": function (context) {
                return copyFactory(context);
            }
        },
        "subFactories": {
            "get": function() {
                return subFactories;
            }
        },
        "PluginGUI": {
            "value": PluginUserInterfaceMessageHub
        }
    });
}

export {BasePlugin, SynthesiserBasePlugin, PluginFactory};
