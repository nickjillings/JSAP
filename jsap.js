var JSAP =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/module.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/buildin/amd-options.js":
/*!****************************************!*\
  !*** (webpack)/buildin/amd-options.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(this, {}))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./src/LinkedStore.js":
/*!****************************!*\
  !*** ./src/LinkedStore.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*globals document */
/*eslint-env browser */

var LinkedStore = function (storeName) {
    // Store for the semantic terms, each store holds its own data tree
    // Terms are added as key/value paris to a root node
    var root = {};

    function objectToXML(obj, root, doc) {
        // Used if an object was passed as a term value
        var term;
        for (term in obj) {
            if (obj.hasOwnProperty(term)) {
                if (typeof obj[term] === "object") {
                    var docNode;
                    if (obj[term].toXML) {
                        docNode = obj[term].toXML(doc);
                    } else {
                        docNode = doc.createElement(term);
                        root.appendChild(docNode);
                        if (obj[term].length) {
                            arrayToXML(obj[term], docNode, doc);
                        } else {
                            objectToXML(obj[term], docNode, doc);
                        }
                    }
                    root.appendChild(docNode);
                } else {
                    root.setAttribute(term, obj[term]);
                }
            }
        }
    }

    function arrayToXML(arr, root, doc) {
        // Used to convert an array to a list of XML entries
        var all_numbers = true,
            all_strings = true,
            i, l = arr.length;
        all_numbers = arr.every(function (a) {
            return typeof a === "number";
        });
        all_strings = arr.every(function (a) {
            return typeof a === "string";
        });
        if (all_numbers || all_strings) {
            // An array of numbers or strings
            arr.forEach(function (a, i) {
                root.setAttribute("index-" + i, a);
            });
        } else {
            // An array of objects
            arr.forEach(function (a, i) {
                var node = document.createElement("value");
                node.setAttribute("index", i);
                objectToXML(a, node, doc);
                root.appendChild(node);
            });
        }
    }

    Object.defineProperties(this, {
        'name': {
            'get': function () {
                return storeName;
            },
            'set': function (name) {
                if (storeName === undefined) {
                    name = storeName;
                } else {
                    throw ("Name is already set");
                }
            }
        },
        'addTerm': {
            'value': function (term, value) {
                if (typeof term !== "string" && term.length === 0) {
                    throw ("term must be a string");
                }
                root[term] = value;
            }
        },
        'addTerms': {
            'value': function (termsObject) {
                if (typeof termsObject !== "object") {
                    throw ("addTerms takes an object of term/value pairs");
                }
                var term;
                for (term in termsObject) {
                    if (termsObject.hasOwnProperty(term)) {
                        this.addTerm(term, termsObject[term]);
                    }
                }
            }
        },
        'deleteTerm': {
            'value': function (term) {
                this.addTerm(term, undefined);
            }
        },
        'getTerm': {
            'value': function (term) {
                if (typeof term !== "string" && term.length === 0) {
                    throw ("term must be a string");
                }
                return root[term];
            }
        },
        'hasTerm': {
            'value': function (term) {
                if (typeof term !== "string" && term.length === 0) {
                    throw ("term must be a string");
                }
                return root.hasOwnProperty(term);
            }
        },
        'toJSON': {
            'value': function () {
                return JSON.parse(JSON.stringify(root));
            }
        },
        'toXML': {
            'value': function (doc) {
                var node;
                if (!doc) {
                    doc = document.implementation.createDocument(null, storeName, null);
                    node = doc.firstElementChild;
                } else {
                    node = doc.createElement(storeName);
                }
                objectToXML(root, node, doc);
                return node;
            }
        }
    });
};

/* harmony default export */ __webpack_exports__["default"] = ({LinkedStore});


/***/ }),

/***/ "./src/base_plugin.js":
/*!****************************!*\
  !*** ./src/base_plugin.js ***!
  \****************************/
/*! exports provided: BasePlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasePlugin", function() { return BasePlugin; });
/* harmony import */ var _parameterManager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parameterManager.js */ "./src/parameterManager.js");
// Add getInputs to all AudioNodes to ease deployment
/*globals AudioNode, Worker, console, window, document, Promise, XMLHttpRequest */
/*eslint-env browser */
/*jshint esversion: 6 */


if (typeof AudioNode === "function" && window.importScripts === undefined) {
    AudioNode.prototype.getInputs = function () {
        return [this];
    };
}

// This should simply define the BasePlugin from which custom plugins can be built from
var BasePlugin = function(factory, owner) {
    var inputList = [],
        outputList = [],
        pOwner = owner,
        delaySamples = 0,
        eventTarget = new EventTarget(),
        externalInterface = new PluginInterfaceMessageHub(this);
    if (this.context === undefined) {
        this.context = factory.context;
    }
    if (this.factory === undefined) {
        this.factory = factory;
    }
    this.featureMap = new PluginFeatureInterface(this);
    this.parameters = new _parameterManager_js__WEBPACK_IMPORTED_MODULE_0__["ParameterManager"](this, externalInterface);
    this.parameters.addEventListener("parameterset", function(e) {
        eventTarget.dispatchEvent(new CustomEvent("parameterset", {detail: e.detail}));
    });

    function deleteIO(node, list) {
        var i = list.findIndex(function (e) {
            return e === this;
        }, node);
        if (i === -1) {
            return false;
        }
        list.splice(i, 1);
        return true;
    }

    this.addInput = function (node) {
        inputList.push(node);
        return inputList;
    };
    this.deleteInput = function (node) {
        return deleteIO(node, inputList);
    };
    this.addOutput = function (node) {
        outputList.push(node);
        return this.outputs;
    };
    this.deleteOutput = function (node) {
        return deleteIO(node, outputList);
    };

    this.setProcessingDelayAsSeconds = function(seconds) {
        var fs = factory.context.sampleRate;
        if (typeof seconds == "number" && isFinite(seconds) && seconds >= 0) {
            return this.setProcessingDelayAsSamples(seconds*fs)/fs;
        }
        throw("setProcessingDelayAsSeconds Invalid argument");
    };

    this.setProcessingDelayAsSamples = function(samples) {
        if (typeof samples == "number" && isFinite(samples) && samples >= 0) {
            delaySamples = samples;
            var e = new Event("alterdelay");
            eventTarget.dispatchEvent(e);
            return delaySamples;
        } else {
            throw("setProcessingDelayAsSamples Invalid argument");
        }

    };

    this.start = this.stop = this.onloaded = this.onunloaded = this.deconstruct = function () {};

    Object.defineProperties(this, {
        "externalInterface": {
            "value": externalInterface
        },
        "numInputs": {
            get: function () {
                return inputList.length;
            },
            set: function () {
                throw ("Cannot set the number of inputs of BasePlugin");
            }
        },
        "numOutputs": {
            get: function () {
                return outputList.length;
            },
            set: function () {
                throw ("Cannot set the number of outputs of BasePlugin");
            }
        },
        "numParameters": {
            get: function () {
                return this.parameters.parameters.length;
            },
            set: function () {
                throw ("Cannot set the number of parameters of BasePlugin");
            }
        },
        "owner": {
            get: function () {
                return pOwner;
            },
            set: function (owner) {
                if (typeof owner === "object") {
                    pOwner = owner;
                }
                return pOwner;
            }
        },
        "inputs": {
            get: function (index) {
                return inputList;
            },
            set: function () {
                throw ("Illegal attempt to modify BasePlugin");
            }
        },
        "outputs": {
            get: function (index) {
                return outputList;
            },
            set: function () {
                throw ("Illegal attempt to modify BasePlugin");
            }
        },
        "processingDelayAsSamples": {
            "get": function() {
                return delaySamples;
            },
            "set": this.setProcessingDelayAsSamples
        },
        "processingDelayAsSeconds": {
            "get": function() {
                return delaySamples/factory.context.sampleRate;
            },
            "set": this.setProcessingDelayAsSeconds
        },
        "connect": {
            "value": function (dest) {
                this.outputs[0].connect(dest.inpt ? dest.input : dest);
            }
        },
        "disconnect": {
            "value": function (dest) {
                if (dest === undefined) {
                    this.outputs[0].disconnect();
                } else {
                    this.outputs[0].disconnect(dest.input ? dest.input : dest);
                }
            }
        },
        "getInputs": {
            "value": function () {
                return this.inputs;
            }
        },
        "getOutputs": {
            "value": function () {
                return this.outputs;
            }
        },
        "getParameterNames": {
            "value": function () {
                return this.parameters.getParameterNames();
            }
        },
        "getParameterByName": {
            "value": function (name) {
                return this.parameters.getParameterByName(name);
            }
        },
        "getParameterObject": {
            "value": function () {
                return this.parameters.getParameterObject();
            }
        },
        "setParameterByName": {
            "value": function (name, value) {
                return this.parameters.setParameterByName(name, value);
            }
        },
        "setParametersByObject": {
            "value": function (object) {
                return this.parameters.setParametersByObject(object);
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

var PluginFeatureInterface = function (BasePluginInstance) {
    this.plugin = BasePluginInstance;
    this.Receiver = new PluginFeatureInterfaceReceiver(this, BasePluginInstance.factory.FeatureMap);
    this.Sender = new PluginFeatureInterfaceSender(this, BasePluginInstance.factory.FeatureMap);

    Object.defineProperty(this, "onfeatures", {
        'get': function () {
            return this.Receiver.onfeatures;
        },
        'set': function (func) {
            this.Receiver.onfeatures = func;
            return func;
        }
    });
};
var PluginFeatureInterfaceReceiver = function (FeatureInterfaceInstance, FactoryFeatureMap) {
    function checkFeatureArgs(source, featureObject) {
        if (source === undefined) {
            throw ("Source plugin must be defined");
        }
        if (featureObject === undefined) {
            throw ("FeatureObject must be defined");
        }
        if (typeof featureObject.outputIndex !== "number" || typeof featureObject.frameSize !== "number" || typeof featureObject.features !== "object") {
            throw ("Malformed featureObject");
        }
        return true;
    }
    var c_features = function () {};
    this.requestFeatures = function (featureList) {
        var i;
        for (i = 0; i < featureList.length; i++) {
            this.requestFeaturesFromPlugin(featureList[i].plugin, {
                'outputIndex': featureList[i].outputIndex,
                'frameSize': featureList[i].frameSize,
                'features': featureList[i].features
            });
        }
    };
    this.requestFeaturesFromPlugin = function (source, featureObject) {
        checkFeatureArgs(source, featureObject);
        FactoryFeatureMap.requestFeatures(FeatureInterfaceInstance.plugin, source, featureObject);
    };
    this.cancelFeaturesFromPlugin = function (source, featureObject) {
        checkFeatureArgs(source, featureObject);
        FactoryFeatureMap.deleteFeatures(FeatureInterfaceInstance.plugin, source, featureObject);
    };
    this.cancelAllFeaturesFromPlugin = function (source) {
        if (source === undefined) {
            throw ("Source plugin must be defined");
        }
        FactoryFeatureMap.deleteFeatures(FeatureInterfaceInstance.plugin, source);
    };
    this.cancelAllFeatures = function () {
        FactoryFeatureMap.deleteFeatures(FeatureInterfaceInstance.plugin);
    };

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
    };

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

};
var PluginFeatureInterfaceSender = function (FeatureInterfaceInstance, FactoryFeatureMap) {
    var OutputNode = function (parent, output, index) {
        var extractors = [];
        var Extractor = function (output, frameSize) {
            this.extractor = FeatureInterfaceInstance.plugin.factory.context.createAnalyser();
            this.extractor.fftSize = frameSize;
            output.connect(this.extractor);
            this.features = [];
            Object.defineProperty(this, "frameSize", {
                'value': frameSize
            });
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
            var recursiveProcessing = this.factory.recursiveProcessing;

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
                    'sampleRate': FeatureInterfaceInstance.plugin.factory.context.sampleRate,
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

            this.extractor = FeatureInterfaceInstance.plugin.factory.context.createScriptProcessor(frameSize, output.numberOfOutputs, 1);
            output.connect(this.extractor);
            this.extractor.connect(FeatureInterfaceInstance.plugin.factory.context.destination);

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
                        'outputIndex': index,
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
                // This MUST be === NOT ===
                return e.frameSize === check;
            });
        };
        this.deleteExtractor = function (frameSize) {};
    };
    var outputNodes = [];
    this.updateFeatures = function (featureObject) {
        // [] Output -> {} 'framesize' -> {} 'features'
        var o;
        for (o = 0; o < featureObject.length; o++) {
            if (outputNodes[o] === undefined) {
                if (o > FeatureInterfaceInstance.plugin.numOutputs) {
                    throw ("Requested an output that does not exist");
                }
                outputNodes[o] = new OutputNode(FeatureInterfaceInstance.plugin, FeatureInterfaceInstance.plugin.outputs[o], o);
                Object.defineProperty(outputNodes[o], "postFeatures", {
                    'value': function (resultObject) {
                        this.postFeatures(resultObject);
                    }.bind(this)
                });
            }
            var si;
            for (si = 0; si < featureObject[o].length; si++) {
                var extractor = outputNodes[o].findExtractor(featureObject[o][si].frameSize);
                if (!extractor) {
                    extractor = outputNodes[o].addExtractor(featureObject[o][si].frameSize);
                }
                extractor.setFeatures(featureObject[o][si].featureList);
            }
        }
    };

    this.postFeatures = function (featureObject) {
        /*
            Called by the individual extractor instances:
            featureObject = {'frameSize': frameSize,
            'outputIndex': outputIndex,
            'results':[]}
        */
        FeatureInterfaceInstance.plugin.factory.FeatureMap.postFeatures({
            'plugin': FeatureInterfaceInstance.plugin.pluginInstance,
            'outputIndex': featureObject.outputIndex,
            'frameSize': featureObject.frameSize,
            'results': featureObject.results
        });
    };

    // Send to Factory
    FactoryFeatureMap.createSourceMap(this, FeatureInterfaceInstance.plugin.pluginInstance);
};

/*
    This is an optional module which will attempt to create a graphical implementation.
    As with other audio plugins for DAWs, the GUI is an optional element which can be accepted or rejected by the host.

    The actual GUI is launched as an <iframe> element in the browser to keep each plugin isolated from the rest
*/

var PluginUserInterface = function (BasePluginInstance, width, height) {
    console.log("DEPRECATED!!");
    console.log("The class PluginUserInterface has been deprecated");
    console.log("Please look at the documents for the new methods for building plugins");
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
    if (ms === undefined) {
        ms = 250;
    } //Default of 250ms update period
    if (this.intervalFunction === null) {
        this.updateInterval = ms;
        this.intervalFunction = window.setInterval(function () {
            this.update();
        }.bind(this), 250);
    }
};
PluginUserInterface.prototype.stopCallbacks = function () {
    // Any registered callbacks are stopped by the host
    if (this.intervalFunction !== null) {
        window.clearInterval(this.intervalFunction);
        this.updateInterval = null;
        this.intervalFunction = null;
    }
};
PluginUserInterface.prototype.loadResource = function (url) {
    var p = new Promise(function (resolve, reject) {
        var req = new XMLHttpRequest();
        req.open('GET', url);
        req.onload = function () {
            if (req.status === 200) {
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
    return p;
};
PluginUserInterface.prototype.clearGUI = function () {
    this.stopCallbacks();
    this.root.innerHTML = "";
};

var PluginInterfaceMessageHub = function(owner) {
    function buildPluginParameterJSON(plugin, sources) {
        var names = owner.parameters.getParameterNames();
        var O = {};
        if (sources === undefined || sources.length == undefined) {
            sources = names;
        }
        names.filter(function(name) {
            return this.includes(name);
        }, sources).forEach(function(name) {
            var param = owner.parameters.getParameterByName(name);
            O[name] = {
                value: param.value,
                maximum: param.maximum,
                minimum: param.minimum,
                defaultValue: param.defaultValue,
                type: param.constructor.name,
                name: name
            };
            if (param.automation) {
                O[name].automated = param.automation.enabled;
            }
        });
        return O;
    }

    function buildParameterUpdatePayload(sender_id, sources) {
        var msg = {
            message: "updateParameters",
            parameters: buildPluginParameterJSON(owner, sources)
        };
        if (sender_id) {
            msg.sender_id = sender_id;
        }
        return msg;
    }

    function sendParameterUpdates(channel, sources) {
        channel.postMessage(buildParameterUpdatePayload(undefined, sources), location.origin);
    }

    function broadcastParameterUpdates(sender_id, sources) {
        var msg = buildParameterUpdatePayload(sender_id, sources);
        windowMessageList.forEach(function(w) {
            w.postMessage(msg, location.origin);
        });
    }

    function setParameterMessage(e) {
        var updateObjects = [];
        var parameters = JSON.parse(e.message.parameters);
        Object.keys(parameters).forEach(function(name) {
            var parameterObject = owner.parameters.getParameterByName(name);
            if (parameterObject) {
                parameterObject.setValue(parameters[name].value, false);
                updateObjects.push(name);
            }
        });
        return updateObjects;
    }

    var windowMessageList = [];
    var listener;
    var state = 0;
    window.addEventListener("message",function(e) {
        if (!windowMessageList.includes(e.source)) {
            return;
        }
        switch(e.data.message) {
            case "setParameterByName":
            var parameterObject;
                if (e.data.parameter.name) {
                    parameterObject = owner.parameters.getParameterByName(e.data.parameter.name);
                    if (parameterObject) {
                        parameterObject.setValue(e.data.parameter.value, false);
                        broadcastParameterUpdates(e.data.sender_id, [parameterObject.name]);
                    }
                }
                break;
            case "setParametersByObject":
                if (e.data.parameter) {
                    var updateObjects = setParameterMessage(e);
                    broadcastParameterUpdates(e.data.sender_id, updateObjects);
                }
                break;
            case "requestParameters":
                if (typeof e.data.name == "string") {
                    sendParameterUpdates(e.source, e.data.name);
                } else {
                    sendParameterUpdates(e.source);
                }
                break;
            default:
                throw("Unknown message type \""+e.data.message+"\"");
        }
    });

    Object.defineProperties(this, {
        "updateInterfaces": {
            "value": function(automationOnly) {
                if (automationOnly === undefined) {
                    automationOnly = false;
                }
                var sources;
                if (automationOnly) {
                    var parameterNames = owner.parameters.getParameterNames();
                    sources = parameterNames.filter(function(name) {
                        var param = owner.parameters.getParameterByName(name);
                        return (param.automatable && param.enabled === true);
                    });
                    if (sources.length > 0)
                    {
                        broadcastParameterUpdates(undefined, sources);
                    }
                } else {
                    broadcastParameterUpdates();
                }

            }
        },
        "closeWindows": {
            value: function() {
                if (state === 0) {
                    while(windowMessageList.length > 0) {
                        var w = windowMessageList.pop();
                        w.close();
                    }
                } else {
                    throw("Cannel already closed");
                }
            }
        },
        "registerWindow": {
            "value": function(w) {
                if (windowMessageList.includes(w)) {
                    windowMessageList.splice(windowMessageList.indexOf(w), 1);
                }
                windowMessageList.push(w);
                sendParameterUpdates(w);
                return true;
            }
        },
        "removeWindow": {
            "value": function(w) {
                if (windowMessageList.includes(w)) {
                    windowMessageList.splice(windowMessageList.indexOf(w), 1);
                }
            }
        }
    });
};




/***/ }),

/***/ "./src/module.js":
/*!***********************!*\
  !*** ./src/module.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _plugin_factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./plugin-factory */ "./src/plugin-factory.js");


(function(root, factory) {
    console.log("Load JSAP...");
    if (typeof define === "function" && __webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js")) {
        console.log("define");
        define("JSAP", [], factory);
    } else if ( true && module.exports) {
        console.log("module");
        module.exports = factory();
    } else {
        console.log("direct");
        if (root === undefined) {
            root = window;
        }
        root.JSAP = factory();
    }
})(undefined, function() {
    console.log("factory");
    return {
        PluginFactory: _plugin_factory__WEBPACK_IMPORTED_MODULE_0__["PluginFactory"],
        BasePlugin: _plugin_factory__WEBPACK_IMPORTED_MODULE_0__["BasePlugin"],
        SynthesiserBasePlugin: _plugin_factory__WEBPACK_IMPORTED_MODULE_0__["SynthesiserBasePlugin"]
    };
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/parameterManager.js":
/*!*********************************!*\
  !*** ./src/parameterManager.js ***!
  \*********************************/
/*! exports provided: ParameterManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParameterManager", function() { return ParameterManager; });
/* harmony import */ var _parameters_NumberParameter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parameters/NumberParameter.js */ "./src/parameters/NumberParameter.js");
/* harmony import */ var _parameters_StringParameter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parameters/StringParameter.js */ "./src/parameters/StringParameter.js");
/* harmony import */ var _parameters_ButtonParameter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parameters/ButtonParameter.js */ "./src/parameters/ButtonParameter.js");
/* harmony import */ var _parameters_SwitchParameter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parameters/SwitchParameter.js */ "./src/parameters/SwitchParameter.js");
/* harmony import */ var _parameters_ListParameter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./parameters/ListParameter.js */ "./src/parameters/ListParameter.js");
/* jshint esversion: 6 */






var ParameterManager = function (owner, pluginExternalInterface) {
    var parameterList = [];
    var eventTarget = new EventTarget();

    function findParameter(name) {
        return parameterList.find(function (e) {
            return e.name.toLowerCase() === name.toLowerCase();
        });
    }

    function findParameterIndex(name) {
        return parameterList.findIndex(function (e) {
            return e.name.toLowerCase() === name.toLowerCase();
        });
    }

    function buildParameterObject() {
        var obj = {};
        parameterList.forEach(function (e) {
            obj[e.name] = e;
        });
        return obj;
    }

    function addParameter(param, self) {
        var exists = parameterList.findIndex(function (e) {
            return e === param;
        }, param);
        if (exists === -1) {
            param.addEventListener("parameterset", self);
            parameterList.push(param);
        }
        return param;
    }

    Object.defineProperties(this, {
        "addEventListener": {
            "value": function(type, listener, options) {
                return eventTarget.addEventListener(type, listener, options);
            }
        },
        "removeEventListener": {
            "value": function(type, listener, options) {
                return eventTarget.removeEventListener(type, listener, options);
            }
        },
        "handleEvent": {
            "value": function(e) {
                var detail = e.detail;
                if (detail.updateInterfaces !== false) {
                    pluginExternalInterface.updateInterfaces();
                }
                if (e.type == "parameterset") {
                    eventTarget.dispatchEvent(new CustomEvent("parameterset", {detail: detail.parameter}));
                }
            }
        },
        'createNumberParameter': {
            "value": function (name, defaultValue, minimum, maximum, toStringFunc) {
                if (typeof name !== "string" || typeof defaultValue !== "number" || (minimum !== undefined && typeof minimum !== "number") || (maximum !== undefined && typeof maximum !== "number")) {
                    throw ("Invlid constructor");
                }
                if (typeof toStringFunc != "function" && toStringFunc !== undefined) {
                    throw ("toStringFunc must be a function or undefined");
                }
                if (findParameterIndex(name) !== -1) {
                    throw ("Parameter with name '" + name + "' already exists");
                }
                var param = new _parameters_NumberParameter_js__WEBPACK_IMPORTED_MODULE_0__["NumberParameter"](owner, name, defaultValue, minimum, maximum, toStringFunc);
                addParameter(param, this);
                return param;
            }
        },
        'createStringParameter': {
            "value": function (name, defaultValue, maxLength, toStringFunc) {
                if (typeof name !== "string" || typeof defaultValue !== "string" || (maxLength !== undefined && typeof maxLength !== "number")) {
                    throw ("Invlid constructor");
                }
                if (typeof toStringFunc != "function" && toStringFunc !== undefined) {
                    throw ("toStringFunc must be a function or undefined");
                }
                if (findParameterIndex(name) !== -1) {
                    throw ("Parameter with name '" + name + "' already exists");
                }
                var param = new _parameters_StringParameter_js__WEBPACK_IMPORTED_MODULE_1__["StringParameter"](owner, name, defaultValue, maxLength, toStringFunc);
                addParameter(param, this);
                return param;
            }
        },
        'createButtonParameter': {
            "value": function (name) {
                if (typeof name !== "string") {
                    throw ("Invalid constructor");
                }
                if (findParameterIndex(name) !== -1) {
                    throw ("Parameter with name '" + name + "' already exists");
                }
                var param = new _parameters_ButtonParameter_js__WEBPACK_IMPORTED_MODULE_2__["ButtonParameter"](owner, name);
                addParameter(param, this);
                return param;
            }
        },
        'createSwitchParameter': {
            "value": function (name, defaultValue, minState, maxState, toStringFunc) {
                if (typeof name !== "string" || typeof defaultValue !== "number" || typeof minState !== "number" || typeof maxState !== "number") {
                    throw ("Invlid constructor");
                }
                if (typeof toStringFunc != "function" && toStringFunc !== undefined) {
                    throw ("toStringFunc must be a function or undefined");
                }
                if (findParameterIndex(name) !== -1) {
                    throw ("Parameter with name '" + name + "' already exists");
                }
                var param = new _parameters_SwitchParameter_js__WEBPACK_IMPORTED_MODULE_3__["SwitchParameter"](owner, name, defaultValue, minState, maxState, toStringFunc);
                addParameter(param, this);
                return param;
            }
        },
        'createListParameter': {
            "value": function (name, defaultValue, listOfValues, toStringFunc) {
                if (typeof name !== "string" || typeof defaultValue === "undefined" || !Array.isArray(listOfValues)) {
                    throw ("Invlid constructor");
                }
                if (typeof toStringFunc != "function" && toStringFunc !== undefined) {
                    throw ("toStringFunc must be a function or undefined");
                }
                if (listOfValues.includes(defaultValue) === false) {
                    throw ("Invlid constructor - default value missing");
                }
                if (findParameterIndex(name) !== -1) {
                    throw ("Parameter with name '" + name + "' already exists");
                }
                var param = new _parameters_ListParameter_js__WEBPACK_IMPORTED_MODULE_4__["ListParameter"](owner, name, defaultValue, listOfValues, toStringFunc);
                addParameter(param, this);
                return param;
            }
        },
        'createParameter': {
            'value': function () {
                throw ("This function is now deprecated");
            }
        },
        'getParameterName': {
            'value': function () {
                var names = [],
                    i;
                for (i = 0; i < parameterList.length; i++) {
                    names.push(parameterList[i].name);
                }
                return names;
            }
        },
        'getParameterByName': {
            'value': function (name) {
                return findParameter(name);
            }
        },
        'getParameterObject': {
            'value': function () {
                return buildParameterObject();
            }
        },
        'getParameterNames': {
            'value': function () {
                var l = [];
                parameterList.forEach(function (a) {
                    l.push(a.name);
                });
                return l;
            }
        },
        'setParameterByName': {
            'value': function (n, v, updateInterfaces) {
                var parameter = findParameter(n);
                if (!parameter) {
                    return;
                }
                parameter.setValue(v, updateInterfaces);
            }
        },
        'deleteParameter': {
            'value': function (o) {
                var index = parameterList.findIndex(function (e) {
                    return e === o;
                }, o);
                if (index >= 0) {
                    // Does exist
                    parameterList.splice(index, 1);
                    o.destroy();
                    return true;
                }
                return false;
            }
        },
        'deleteAllParameters': {
            'value': function (o) {
                parameterList.forEach(function (e) {
                    e.destroy();
                });
                parameterList = [];
                return true;
            }
        },
        'setParametersByObject': {
            'value': function (object, updateInterfaces) {
                var key;
                for (key in object) {
                    if (object.hasOwnProperty(key)) {
                        if (typeof object[key] == "object") {

                            this.setParameterByName(key, object[key].value, updateInterfaces);
                        } else if (typeof object[key] == "number" || typeof object[key] == "string") {
                            this.setParameterByName(key, object[key], updateInterfaces);
                        } else {
                            throw ("Cannot set " + key + ": Not a valid object");
                        }
                    }
                }
            }
        },
        'parameters': {
            'get': function () {
                return buildParameterObject();
            },
            'set': function () {
                throw ("Cannot set, use .setParameterBy...()");
            }
        }
    });
};




/***/ }),

/***/ "./src/parameters/ButtonParameter.js":
/*!*******************************************!*\
  !*** ./src/parameters/ButtonParameter.js ***!
  \*******************************************/
/*! exports provided: ButtonParameter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonParameter", function() { return ButtonParameter; });
/* harmony import */ var _PluginParameter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PluginParameter.js */ "./src/parameters/PluginParameter.js");
/* jshint esversion: 6 */


function ButtonParameter(owner, name) {
    _PluginParameter_js__WEBPACK_IMPORTED_MODULE_0__["PluginParameter"].call(this, owner, name, "Button");
    var onclick = function () {};

    Object.defineProperties(this, {
        "type": {
            "value": "Button"
        },
        "destroy": {
            "value": function () {
                owner = name = undefined;
            }
        },
        "onclick": {
            "get": function () {
                return onclick;
            },
            "set": function (f) {
                if (typeof f !== "function") {
                    throw ("onclick must be a function");
                }
                onclick = f;
            }
        }
    });
}
ButtonParameter.prototype = Object.create(_PluginParameter_js__WEBPACK_IMPORTED_MODULE_0__["PluginParameter"].prototype);
ButtonParameter.prototype.constructor = ButtonParameter;




/***/ }),

/***/ "./src/parameters/ListParameter.js":
/*!*****************************************!*\
  !*** ./src/parameters/ListParameter.js ***!
  \*****************************************/
/*! exports provided: ListParameter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListParameter", function() { return ListParameter; });
/* harmony import */ var _PluginParameter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PluginParameter.js */ "./src/parameters/PluginParameter.js");
/* harmony import */ var _ParameterAutomation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ParameterAutomation.js */ "./src/parameters/ParameterAutomation.js");
/* jshint esversion: 6 */



function ListParameter(owner, name, defaultValue, listOfValues, toStringFunc) {
    _PluginParameter_js__WEBPACK_IMPORTED_MODULE_0__["PluginParameter"].call(this, owner, name, "Button");
    var audioParameter, automation;
    var onclick = function () {};
    var _index = listOfValues.indexOf(defaultValue);

    function setV(v, updateInterfaces) {
        var i = listOfValues.indexOf(v);
        if (i === undefined || i < 0) {
            throw("Not in list range");
        }
        if (this.boundAudioParam) {
            this.boundAudioParam.value = this.update(v);
        }
        if (_index !== i) {
            _index = i;
            this.triggerParameterSet(updateInterfaces);
        }
        this.trigger();
        return listOfValues[_index];
    }

    Object.defineProperties(this, {
        "type": {
            "value": "List"
        },
        "destroy": {
            "value": function () {
                owner = name = undefined;
            }
        },
        "defaultValue": {
            "value": defaultValue
        },
        "listValues": {
            "get": function() {
                return listOfValues.map(function(v) {
                    return v;
                });
            }
        },
        "value": {
            "get": function () {
                if (audioParameter) {
                    return this.translate(audioParameter.value);
                }
                return listOfValues[_index];
            },
            "set": function (v) {
                return setV.call(this, v, true);
            }
        },
        "setValue": {
            "value": function(v, updateInterfaces) {
                return setV.call(this, v, updateInterfaces);
            }
        },
        "increment": {
            "value": function () {
                var v = _index + 1;
                if (v >= listOfValues.length) {
                    v = 0;
                }
                return setV.call(this, v);
            }
        },
        "decrement": {
            "value": function () {
                var v = _index - 1;
                if (v < 0) {
                    v = listOfValues.length-1;
                }
                return setV.call(this, v);
            }
        },
        "bindToAudioParam": {
            "value": function (ap) {
                if (typeof ap == "object" && ap.value != undefined) {
                    audioParameter = ap;
                    audioParameter.value = this.update(_value);
                    if (ap.setValueAtTime) {
                        automation = new _ParameterAutomation_js__WEBPACK_IMPORTED_MODULE_1__["ParameterStepAutomation"](this, audioParameter, 0, listValues.length, toStringFunc);
                        Object.defineProperties(this, {
                            "getValueAtTimePoint": {
                                "value": function(time) {
                                    return this.automationPoints.getValueAtTimePoint(time);
                                }
                            },
                            "automationPoints": {
                                "value": automation
                            },
                            "start": {
                                "value": function(time, contextTime) {
                                    return automation.start(time, contextTime);
                                }
                            },
                            "stop": {
                                "value": function(contextTime) {
                                    automation.stop(contextTime);
                                }
                            },
                            "enabled": {
                                "get": function() {
                                    return automation.enabled;
                                },
                                "set": function(t) {
                                    return (automation.enabled = t);
                                }
                            }
                        });
                    } else {
                        console.warn("Cannot bind automation as AudioParameter is not automatable");
                    }
                } else {
                    throw("Argument 1 is not a valid AudioParameter object");
                }
            }
        },
        "boundAudioParam": {
            "configurable": true,
            "get": function () {
                return audioParameter;
            }
        },
        "automatable": {
            "get": function () {
                return typeof automation == "object";
            }
        },
        "toString": {
            "value": function(v) {
                if (v == undefined) {
                    v = this.value;
                }
                if (typeof toStringFunc == "function") {
                    return toStringFunc.call(this, v);
                } else {
                    return String(v);
                }
            }
        }
    });
}
ListParameter.prototype = Object.create(_PluginParameter_js__WEBPACK_IMPORTED_MODULE_0__["PluginParameter"].prototype);
ListParameter.prototype.constructor = ListParameter;




/***/ }),

/***/ "./src/parameters/NumberParameter.js":
/*!*******************************************!*\
  !*** ./src/parameters/NumberParameter.js ***!
  \*******************************************/
/*! exports provided: NumberParameter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberParameter", function() { return NumberParameter; });
/* harmony import */ var _PluginParameter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PluginParameter.js */ "./src/parameters/PluginParameter.js");
/* harmony import */ var _ParameterAutomation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ParameterAutomation.js */ "./src/parameters/ParameterAutomation.js");
/* jshint esversion: 6 */



function NumberParameter(owner, name, defaultValue, minimum, maximum, toStringFunc) {
    _PluginParameter_js__WEBPACK_IMPORTED_MODULE_0__["PluginParameter"].call(this, owner, name, "Number");
    var audioParameter, automation;
    var _value = defaultValue,
        _stepSize;

    function setValue(v, updateInterfaces)
    {
        if (automation && automation.enabled) {
            throw("Automation is enabled, cannot set the value!");
        }
        if (this.minimum) {
            v = Math.max(v, this.minimum);
        }
        if (this.maximum) {
            v = Math.min(v, this.maximum);
        }
        if (_stepSize) {
            v = Math.round(v / _stepSize);
            v = v * _stepSize;
        }
        v = this.update(v);
        if (audioParameter) {
            if (automation) {
                audioParameter.setValueAtTime(v, owner.factory.context.currentTime);
            } else {
                audioParameter.value = v;
            }
        }
        if (_value !== v) {
            _value = v;
            this.triggerParameterSet(updateInterfaces);
        }
        this.trigger();
    }

    Object.defineProperties(this, {
        "type": {
            "value": "Number"
        },
        "destroy": {
            "value": function () {
                owner = name = defaultValue = minimum = maximum = _value = _stepSize = undefined;
            }
        },
        "minimum": {
            "value": minimum
        },
        "maximum": {
            "value": maximum
        },
        "defaultValue": {
            "value": defaultValue
        },
        "value": {
            "get": function () {
                if (audioParameter) {
                    if (automation && automation.length > 0) {
                        var t = owner.factory.getCurrentProgramTime();
                        return automation.getCurrentTimeValue(t);
                    }
                    return this.translate(_value);
                }
                return _value;
            },
            "set": function (v) {
                return setValue.call(this, v, true);
            }
        },
        "setValue": {
            "value": function(v, updateInterfaces) {
                return setValue.call(this, v, updateInterfaces);
            }
        },
        "stepSize": {
            "get": function () {
                return _stepSize;
            },
            "set": function (n) {
                if (!isFinite(n) || n < 0) {
                    throw ("Invalid step size");
                }
                _stepSize = n;
            }
        },
        "bindToAudioParam": {
            "value": function (ap) {
                if (typeof ap == "object" && ap.value != undefined) {
                    audioParameter = ap;
                    audioParameter.value = this.update(_value);
                    if (ap.setValueAtTime) {
                        automation = new _ParameterAutomation_js__WEBPACK_IMPORTED_MODULE_1__["ParameterLinearAutomation"](this, audioParameter, minimum, maximum, toStringFunc);
                        Object.defineProperties(this, {
                            "getValueAtTimePoint": {
                                "value": function(time) {
                                    return this.automationPoints.getValueAtTimePoint(time);
                                }
                            },
                            "automationPoints": {
                                "value": automation
                            },
                            "start": {
                                "value": function(time, contextTime) {
                                    return automation.start(time, contextTime);
                                }
                            },
                            "stop": {
                                "value": function(contextTime) {
                                    automation.stop(contextTime);
                                }
                            },
                            "enabled": {
                                "get": function() {
                                    return automation.enabled;
                                },
                                "set": function(t) {
                                    return (automation.enabled = t);
                                }
                            }
                        });
                    } else {
                        console.warn("Cannot bind automation as AudioParameter is not automatable");
                    }
                } else {
                    throw("Argument 1 is not a valid AudioParameter object");
                }
            }
        },
        "boundAudioParam": {
            "configurable": true,
            "get": function () {
                return audioParameter;
            }
        },
        "automatable": {
            "get": function () {
                return typeof automation == "object";
            }
        },
        "toString": {
            "value": function(v) {
                if (v == undefined) {
                    v = this.value;
                }
                if (typeof toStringFunc == "function") {
                    return toStringFunc.call(this, v);
                } else {
                    return String(v);
                }
            }
        }
    });
}
NumberParameter.prototype = Object.create(_PluginParameter_js__WEBPACK_IMPORTED_MODULE_0__["PluginParameter"].prototype);
NumberParameter.prototype.constructor = NumberParameter;




/***/ }),

/***/ "./src/parameters/ParameterAutomation.js":
/*!***********************************************!*\
  !*** ./src/parameters/ParameterAutomation.js ***!
  \***********************************************/
/*! exports provided: ParameterLinearAutomation, ParameterStepAutomation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParameterLinearAutomation", function() { return ParameterLinearAutomation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParameterStepAutomation", function() { return ParameterStepAutomation; });
/* jshint esversion: 6 */
var TimePoint = function(owner, time, value, toStringFunc) {
    if (typeof time != "number" || !isFinite(time) || time < 0) {
        throw("Invalid Constructor: Time must be a positive number");
    }
    if (typeof value != "number" || !isFinite(value)) {
        throw("Invalid Constructor: Value must be a number");
    }
    Object.defineProperties(this, {
        "time": {
            "get": function() {
                return time;
            },
            "set": function(t) {
                return this.setTime(t);
            }
        },
        "value": {
            "get": function() {
                return value;
            },
            "set": function(v) {
                return this.setValue(v);
            }
        },
        "setValue": {
            "value": function(v) {
                if (typeof v != "number" || !isFinite(v)) {
                    throw("Value must be a number");
                }
                value = Math.min(Math.max(v, owner.minimum), owner.maximum);
                return value;
            }
        },
        "setTime": {
            "value": function(t) {
                if (typeof t == "number" && isFinite(t) && t >= 0) {
                    time = t;
                }
                return time;
            }
        },
        "toString": {
            "value": function() {
                if (typeof toStringFunc == "function") {
                    return toStringFunc.call(this, value);
                }
                return String(value);
            }
        },
        "owner": {
            "value": owner
        }
    });
};

var TimePointList = function(min_value, max_value, toStringFunc) {
    function getPointAtTime(automationPoints, time) {
        return automationPoints.find(function(p) {
            return p.time == time;
        });
    }
    function hasPointAtTime(automationPoints, time) {
        return getPointAtTime(automationPoints, time) !== undefined;
    }
    function sortPoints(automationPoints) {
        return automationPoints.sort(function(a,b) {
            if (a.time > b.time) {
                return 1;
            } else {
                return -1;
            }
        });
    }
    if (typeof min_value != "number" || !isFinite(min_value)) {
        throw("Invalid Constructor: min_value be a number");
    }
    if (typeof max_value != "number" || !isFinite(max_value)) {
        throw("Invalid Constructor: max_value be a number");
    }
    if (min_value == max_value) {
        throw("Invalid Constructor: max_value cannot equal to min_value");
    }
    if (max_value < min_value) {
        throw("Invalid Constructor: min_value cannot be greater than max_value");
    }
    var automationPoints = [];
    Object.defineProperties(this, {
        "insertPoint": {
            "value": function(time, value) {
                if (typeof time != "number" || !isFinite(time) || time < 0) {
                    throw("Time must be a positive number");
                }
                if (typeof value != "number" || !isFinite(value)) {
                    throw("Value must be a number");
                }
                if (hasPointAtTime(automationPoints, time)) {
                    throw("Already a value entry at time "+time);
                }
                value = Math.min(Math.max(value, min_value), max_value);
                var point = new TimePoint(this, time, value, toStringFunc);
                automationPoints.push(point);
                automationPoints = sortPoints(automationPoints);
                return point;
            }
        },
        "getPoints": {
            "value": function(start_time, end_time) {
                if (start_time === undefined) {
                    start_time = 0;
                }
                if (end_time === undefined) {
                    end_time = Infinity;
                }
                return automationPoints.filter(function(point) {
                    return point.time >= start_time && point.time < end_time;
                });
            }
        },
        "deletePoint": {
            "value": function(time) {
                var index = automationPoints.findIndex(function(point) {
                    return point.time == time;
                });
                if (index >= 0) {
                    automationPoints.splice(index, 1, 0);
                }
                return automationPoints.length;
            }
        },
        "getStaticValueAsString": {
            "writable": true,
            "value": function (value) {
                return String(value);
            }
        },
        "getValueAtTimePoint": {
            "value": function (time) {
                return getPointAtTime(automationPoints, time);
            }
        },
        "length": {
            "get": function() {
                return automationPoints.length;
            }
        },
        "minimum": {
            "value": min_value
        },
        "maximum": {
            "value": max_value
        },
        "updatePoint": {
            "value": function(time, options) {
                var point = automationPoints.find(function(point) {
                    return point.time == time;
                });
                if (point) {
                    if (typeof options.time == "number" && options.time != point.time) {
                        if (getPointAtTime(automationPoints, time)) {
                            throw("A time-point already exists at \""+String(options.time)+"\" seconds");
                        } else {
                            point.time = options.time;
                            automationPoints = sortPoints(automationPoints);
                        }
                    }
                    point.value = options.value;
                }
                return point;
            }
        }
    });
};

var ParameterAutomation = function(parameter, min_value, max_value, toStringFunc) {
    TimePointList.call(this, min_value, max_value, toStringFunc);
    var enabled = false;
    Object.defineProperties(this, {
        "enabled": {
            "get": function() {
                return enabled;
            },
            "set": function(t) {
                if (this.length > 0) {
                    enabled = (t === true);
                }
                return enabled;
            }
        }
    });
};

var ParameterLinearAutomation = function (owner, parameter, min_value, max_value, toStringFunc) {
    ParameterAutomation.call(this, parameter, min_value, max_value, toStringFunc);
    function linearInterpolation(time, pointA, pointB) {
        var t1 = pointA.time;
        var t2 = pointB.time;
        time -= t1;
        t2 -= t1;
        t1 = 0;

        var p = time/t2;
        return pointA.value * (1-p) + pointB.value * p;
    }
    function getCurrentTimeValue(automationPoints, time) {
        if (automationPoints.length == 0) {
            throw("No automation points available");
        }
        if (automationPoints.length == 1) {
            return automationPoints[0].value;
        }

        var firstPoint = automationPoints.reduce(function(point, nextPoint) {
            if (nextPoint.time <= time) {
                return nextPoint;
            } else {
                return point;
            }
        }, automationPoints[0]);
        var secondPoint = automationPoints.find(function(point) {
            return point.time > firstPoint.time;
        });
        if (secondPoint === undefined || firstPoint.time > time) {
            return firstPoint.value;
        }
        return linearInterpolation(time, firstPoint, secondPoint);
    }

    function start(automationPoints, time, contextTime) {
        var startPosition = owner.update(getCurrentTimeValue(automationPoints, time));
        parameter.setValueAtTime(startPosition, contextTime);
        automationPoints.forEach(function(p) {
            if (p.time > time) {
                var t = p.time - time;
                var v = owner.update(p.value);
                parameter.linearRampToValueAtTime(v, t+contextTime);
            }
        });
    }

    function stop(contextTime) {
        if (contextTime === undefined) {
            contextTime = 0;
        }
        parameter.cancelScheduledValues(contextTime);
    }

    Object.defineProperties(this, {
        "getCurrentTimeValue": {
            "value": function(time) {
                return getCurrentTimeValue(this.getPoints(), time);
            }
        },
        "start": {
            "value": function(time, contextTime) {
                if (this.enabled) {
                    start(this.getPoints(), time, contextTime);
                }
            }
        },
        "stop": {
            "value": function(contextTime) {
                stop(contextTime);
            }
        }
    });

};
ParameterLinearAutomation.prototype = Object.create(ParameterAutomation.prototype);
ParameterLinearAutomation.prototype.constructor = ParameterLinearAutomation;

var ParameterStepAutomation = function (owner, parameter, min_value, max_value, toStringFunc) {
    ParameterAutomation.call(this, parameter, min_value, max_value, toStringFunc);
    function getCurrentTimeValue(automationPoints, time) {
        if (automationPoints.length == 0) {
            throw("No automation points available");
        }
        if (automationPoints.length == 1) {
            return automationPoints[0].value;
        }

        var nearestPoint = automationPoints.reduce(function(point, nextPoint) {
            if (nextPoint.time <= time) {
                return nextPoint;
            } else {
                return point;
            }
        }, automationPoints[0]);
        return nearestPoint.value;
    }

    function start(automationPoints, time, contextTime) {
        var startPosition = owner.update(getCurrentTimeValue(automationPoints, time));
        parameter.setValueAtTime(startPosition, contextTime);
        automationPoints.forEach(function(p) {
            if (p.time > time) {
                var t = p.time - time;
                var v = owner.update(p.value);
                parameter.setValueAtTime(v, t+contextTime);
            }
        });
    }

    function stop(contextTime) {
        parameter.cancelScheduledValues(contextTime);
    }

    Object.defineProperties(this, {
        "getCurrentTimeValue": {
            "value": function(time) {
                return getCurrentTimeValue(this.getPoints(), time);
            }
        },
        "start": {
            "value": function(time, contextTime) {
                if (this.enabled) {
                    start(this.getPoints(), time, contextTime);
                }
            }
        },
        "stop": {
            "value": function(contextTime) {
                stop(contextTime);
            }
        }
    });
};
ParameterStepAutomation.prototype = Object.create(ParameterAutomation.prototype);
ParameterStepAutomation.prototype.constructor = ParameterStepAutomation;




/***/ }),

/***/ "./src/parameters/PluginParameter.js":
/*!*******************************************!*\
  !*** ./src/parameters/PluginParameter.js ***!
  \*******************************************/
/*! exports provided: PluginParameter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PluginParameter", function() { return PluginParameter; });
/* jshint esversion: 6 */
function PluginParameter(owner, name, dataType) {
    var update, translate, trigger;
    var eventTarget = new EventTarget();
    update = translate = function (v) {
        return v;
    };
    trigger = function () {};
    Object.defineProperties(this, {
        "addEventListener": {
            "value": function(type, listener, options) {
                return eventTarget.addEventListener(type, listener, options);
            }
        },
        "removeEventListener": {
            "value": function(type, listener, options) {
                return eventTarget.removeEventListener(type, listener, options);
            }
        },
        "triggerParameterSet": {
            "value": function(updateInterfaces) {
                var opts = {detail: {
                    parameter: this,
                    updateInterfaces: updateInterfaces
                }};
                eventTarget.dispatchEvent(new CustomEvent("parameterset", opts));
            }
        },
        "name": {
            "value": name
        },
        "owner": {
            "value": owner
        },
        "update": {
            "get": function () {
                return update;
            },
            "set": function (f) {
                if (typeof f !== "function") {
                    throw ("Must be a callback function");
                }
                if (f(0) === undefined) {
                    throw ("Function must return a value");
                }
                update = f;
            }
        },
        "translate": {
            "get": function () {
                return translate;
            },
            "set": function (f) {
                if (typeof f !== "function") {
                    throw ("Must be a callback function");
                }
                if (f(0) === undefined) {
                    throw ("Function must return a value");
                }
                translate = f;
            }
        },
        "trigger": {
            "get": function () {
                return trigger;
            },
            "set": function (f) {
                if (typeof f !== "function") {
                    throw ("Must be a callback function");
                }
                trigger = f;
            }
        },
        "bindToAudioParam": {
            "configurable": true,
            "value": function (ap) {
                throw("Cannot bind this parameter type to an audio parameter");
            }
        },
        "boundAudioParam": {
            "configurable": true,
            "get": function () {
                return undefined;
            }
        }
    });
}




/***/ }),

/***/ "./src/parameters/StringParameter.js":
/*!*******************************************!*\
  !*** ./src/parameters/StringParameter.js ***!
  \*******************************************/
/*! exports provided: StringParameter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StringParameter", function() { return StringParameter; });
/* harmony import */ var _PluginParameter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PluginParameter.js */ "./src/parameters/PluginParameter.js");
/* jshint esversion: 6 */


function StringParameter(owner, name, defaultValue, maxLength, toStringFunc) {
    _PluginParameter_js__WEBPACK_IMPORTED_MODULE_0__["PluginParameter"].call(this, owner, name, "String");
    var _value = defaultValue;
    var audioParameter;

    function setValue(v, updateInterfaces) {
        if (maxLength) {
            if (v.length > maxLength) {
                throw ("String longer than " + maxLength + " characters");
            }
        }
        if (this.boundAudioParam) {
            this.boundAudioParam.value = this.update(v);
        }
        if (_value !== v) {
            _value = v;
            this.triggerParameterSet(updateInterfaces);
        }
        this.trigger();
    }

    Object.defineProperties(this, {
        "type": {
            "value": "String"
        },
        "destroy": {
            "value": function () {
                owner = name = defaultValue = maxLength = _value = undefined;
            }
        },
        "maxLength": {
            "value": maxLength
        },
        "defaultValue": {
            "value": defaultValue
        },
        "value": {
            "get": function () {
                if (this.boundAudioParam) {
                    return this.translate(this.boundAudioParam.value);
                }
                return _value;
            },
            "set": function (v) {
                return setValue.call(this, v, true);
            }
        },
        "setValue": {
            "value": function(v, updateInterfaces) {
                return setValue.call(this, v, updateInterfaces);
            }
        },
        "bindToAudioParam": {
            "value": function (ap) {
                if (typeof ap == "object" && ap.value != undefined) {
                    audioParameter = ap;
                    audioParameter.value = this.update(_value);
                } else {
                    throw("Argument 1 is not a valid AudioParameter object");
                }
            }
        },
        "boundAudioParam": {
            "configurable": true,
            "get": function () {
                return audioParameter;
            }
        },
        "toString": {
            "value": function(v) {
                if (v == undefined) {
                    v = this.value;
                }
                if (typeof toStringFunc == "function") {
                    return toStringFunc.call(this, v);
                } else {
                    return String(v);
                }
            }
        }
    });
}
StringParameter.prototype = Object.create(_PluginParameter_js__WEBPACK_IMPORTED_MODULE_0__["PluginParameter"].prototype);
StringParameter.prototype.constructor = StringParameter;




/***/ }),

/***/ "./src/parameters/SwitchParameter.js":
/*!*******************************************!*\
  !*** ./src/parameters/SwitchParameter.js ***!
  \*******************************************/
/*! exports provided: SwitchParameter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwitchParameter", function() { return SwitchParameter; });
/* harmony import */ var _PluginParameter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PluginParameter.js */ "./src/parameters/PluginParameter.js");
/* harmony import */ var _ParameterAutomation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ParameterAutomation.js */ "./src/parameters/ParameterAutomation.js");
/* jshint esversion: 6 */



function SwitchParameter(owner, name, defaultValue, minState, maxState, toStringFunc) {
    _PluginParameter_js__WEBPACK_IMPORTED_MODULE_0__["PluginParameter"].call(this, owner, name, "Button");
    var onclick = function () {};
    var _value = defaultValue;
    var audioParameter, automation;

    function setValue(v, updateInterfaces) {
        if (v < minState) {
            throw ("Set value is less than " + minState);
        }
        if (v > maxState) {
            throw ("Set value is greater than " + maxState);
        }
        if (this.boundAudioParam) {
            this.boundAudioParam.value = this.update(v);
        }
        if (_value !== v) {
            _value = v;
            this.triggerParameterSet(updateInterfaces);
        }
        this.trigger();
        return v;
    }

    Object.defineProperties(this, {
        "type": {
            "value": "Switch"
        },
        "destroy": {
            "value": function () {
                owner = name = undefined;
            }
        },
        "defaultValue": {
            "value": defaultValue
        },
        "minState": {
            "value": minState
        },
        "maxState": {
            "value": maxState
        },
        "value": {
            "get": function () {
                if (this.boundAudioParam) {
                    return this.translate(this.boundAudioParam.value);
                }
                return _value;
            },
            "set": function (v) {
                return setValue.call(this, v);
            }
        },
        "setValue": {
            "value": function(v, updateInterfaces) {
                return setValue.call(this, v, updateInterfaces);
            }
        },
        "increment": {
            "value": function () {
                var v = _value + 1;
                if (v > maxState) {
                    v = minState;
                }
                return setValue.call(this, v);
            }
        },
        "decrement": {
            "value": function () {
                var v = _value - 1;
                if (v < minState) {
                    v = maxState;
                }
                return setValue.call(this, v);
            }
        },
        "bindToAudioParam": {
            "value": function (ap) {
                if (typeof ap == "object" && ap.value != undefined) {
                    audioParameter = ap;
                    audioParameter.value = this.update(_value);
                    if (ap.setValueAtTime) {
                        automation = new _ParameterAutomation_js__WEBPACK_IMPORTED_MODULE_1__["ParameterStepAutomation"](this, audioParameter, minState, maxState, toStringFunc);
                        Object.defineProperties(this, {
                            "getValueAtTimePoint": {
                                "value": function(time) {
                                    return this.automationPoints.getValueAtTimePoint(time);
                                }
                            },
                            "automationPoints": {
                                "value": automation
                            },
                            "start": {
                                "value": function(time, contextTime) {
                                    return automation.start(time, contextTime);
                                }
                            },
                            "stop": {
                                "value": function(contextTime) {
                                    automation.stop(contextTime);
                                }
                            },
                            "enabled": {
                                "get": function() {
                                    return automation.enabled;
                                },
                                "set": function(t) {
                                    return (automation.enabled = t);
                                }
                            }
                        });
                    } else {
                        console.warn("Cannot bind automation as AudioParameter is not automatable");
                    }
                } else {
                    throw("Argument 1 is not a valid AudioParameter object");
                }
            }
        },
        "boundAudioParam": {
            "configurable": true,
            "get": function () {
                return audioParameter;
            }
        },
        "automatable": {
            "get": function () {
                return typeof automation == "object";
            }
        },
        "toString": {
            "value": function(v) {
                if (v == undefined) {
                    v = this.value;
                }
                if (typeof toStringFunc == "function") {
                    return toStringFunc.call(this, v);
                } else {
                    return String(v);
                }
            }
        }
    });
}
SwitchParameter.prototype = Object.create(_PluginParameter_js__WEBPACK_IMPORTED_MODULE_0__["PluginParameter"].prototype);
SwitchParameter.prototype.constructor = SwitchParameter;




/***/ }),

/***/ "./src/plugin-factory.js":
/*!*******************************!*\
  !*** ./src/plugin-factory.js ***!
  \*******************************/
/*! exports provided: BasePlugin, SynthesiserBasePlugin, PluginFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PluginFactory", function() { return PluginFactory; });
/* harmony import */ var _LinkedStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LinkedStore */ "./src/LinkedStore.js");
/* harmony import */ var _base_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base_plugin */ "./src/base_plugin.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BasePlugin", function() { return _base_plugin__WEBPACK_IMPORTED_MODULE_1__["BasePlugin"]; });

/* harmony import */ var _synth_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./synth_base */ "./src/synth_base.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SynthesiserBasePlugin", function() { return _synth_base__WEBPACK_IMPORTED_MODULE_2__["SynthesiserBasePlugin"]; });

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
        if (factory === undefined) {
            factory = this;
        }
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
        var ct = audio_context.currentTime;
        node.stop.call(node, ct);
        node.parameters.getParameterNames().forEach(function(n) {
            var p = node.parameters.getParameterByName(n);
            if (p.enabled) {
                p.stop(ct);
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
        var node = new _LinkedStore__WEBPACK_IMPORTED_MODULE_0__["default"].LinkedStore(storeName);
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
    this.SessionData = new _LinkedStore__WEBPACK_IMPORTED_MODULE_0__["default"].LinkedStore("Session");
    this.UserData = new _LinkedStore__WEBPACK_IMPORTED_MODULE_0__["default"].LinkedStore("User");

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

        this.TrackData = new _LinkedStore__WEBPACK_IMPORTED_MODULE_0__["default"].LinkedStore("Track");
        this.PluginData = new _LinkedStore__WEBPACK_IMPORTED_MODULE_0__["default"].LinkedStore("Plugin");

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
                plugin_object.node.deconstruct.call(plugin_object.node);
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
            if (midiSynthSlot) {
                factory.deletePlugin(midiSynthSlot.id);
            }
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
                "value": function(t) {
                    if (midiSynthSlot) {
                        midiSynthSlot.node.cancelAllEvents(t);
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
                        node.node.onloaded.call(node.node);
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



/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./src/synth_base.js":
/*!***************************!*\
  !*** ./src/synth_base.js ***!
  \***************************/
/*! exports provided: SynthesiserBasePlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SynthesiserBasePlugin", function() { return SynthesiserBasePlugin; });
/* harmony import */ var _base_plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base_plugin */ "./src/base_plugin.js");
/* jshint esversion: 6 */


var SynthesiserBasePlugin = function(factory, owner)
{
    var hasWarnedScheduleNotSet = false;
    var hasWarnedCancelNotSet = false;
    _base_plugin__WEBPACK_IMPORTED_MODULE_0__["BasePlugin"].call(this, factory, owner);

    Object.defineProperties(this, {
        "addInput": {
            "value": function() {
                throw("Cannot add input to type \"SynthesiserBasePlugin\"");
            }
        },
        "deleteInput": {
            "value": function() {
                throw("Cannot delete input to type \"SynthesiserBasePlugin\"");
            }
        },
        "scheduleEvent": {
            "value": function (msg, contextTime) {
                if (!hasWarnedScheduleNotSet) {
                    console.warning("WARNING - .scheduleEvent is not overridden");
                    hasWarnedScheduleNotSet = true;
                }
            },
            "writable": true
        },
        "cancelAllEvents": {
            "value": function() {
                if (!hasWarnedCancelNotSet) {
                    console.warning("WARNING - .cancelAllEvents is not overridden");
                    hasWarnedCancelNotSet = true;
                }
            },
            "writable": true
        }
    });
};
SynthesiserBasePlugin.prototype = Object.create(_base_plugin__WEBPACK_IMPORTED_MODULE_0__["BasePlugin"].prototype);
SynthesiserBasePlugin.prototype.constructor = SynthesiserBasePlugin;




/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9KU0FQL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0pTQVAvKHdlYnBhY2spL2J1aWxkaW4vYW1kLW9wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vSlNBUC8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vSlNBUC8od2VicGFjaykvYnVpbGRpbi9oYXJtb255LW1vZHVsZS5qcyIsIndlYnBhY2s6Ly9KU0FQLy4vc3JjL0xpbmtlZFN0b3JlLmpzIiwid2VicGFjazovL0pTQVAvLi9zcmMvYmFzZV9wbHVnaW4uanMiLCJ3ZWJwYWNrOi8vSlNBUC8uL3NyYy9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vSlNBUC8uL3NyYy9wYXJhbWV0ZXJNYW5hZ2VyLmpzIiwid2VicGFjazovL0pTQVAvLi9zcmMvcGFyYW1ldGVycy9CdXR0b25QYXJhbWV0ZXIuanMiLCJ3ZWJwYWNrOi8vSlNBUC8uL3NyYy9wYXJhbWV0ZXJzL0xpc3RQYXJhbWV0ZXIuanMiLCJ3ZWJwYWNrOi8vSlNBUC8uL3NyYy9wYXJhbWV0ZXJzL051bWJlclBhcmFtZXRlci5qcyIsIndlYnBhY2s6Ly9KU0FQLy4vc3JjL3BhcmFtZXRlcnMvUGFyYW1ldGVyQXV0b21hdGlvbi5qcyIsIndlYnBhY2s6Ly9KU0FQLy4vc3JjL3BhcmFtZXRlcnMvUGx1Z2luUGFyYW1ldGVyLmpzIiwid2VicGFjazovL0pTQVAvLi9zcmMvcGFyYW1ldGVycy9TdHJpbmdQYXJhbWV0ZXIuanMiLCJ3ZWJwYWNrOi8vSlNBUC8uL3NyYy9wYXJhbWV0ZXJzL1N3aXRjaFBhcmFtZXRlci5qcyIsIndlYnBhY2s6Ly9KU0FQLy4vc3JjL3BsdWdpbi1mYWN0b3J5LmpzIiwid2VicGFjazovL0pTQVAvLi9zcmMvc3ludGhfYmFzZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRTREOzs7Ozs7Ozs7Ozs7O0FDMVU1RDtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxT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QUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLHFDQUFxQztBQUM1RTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDJCQUEyQixzQ0FBc0M7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsNkJBQTZCO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLG1CQUFtQix5QkFBeUI7QUFDNUM7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFD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QTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUF1Qix3QkFBd0I7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFD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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRTBEOzs7Ozs7Ozs7Ozs7OztBQ3AwRDFEO0FBQUE7QUFBQTtBQUFBO0FBQ3lDOztBQUV6QztBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksdURBQVU7O0FBRWQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxnREFBZ0QsdURBQVU7QUFDMUQ7O0FBRStCIiwiZmlsZSI6IkpTQVAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9tb2R1bGUuanNcIik7XG4iLCIvKiBnbG9iYWxzIF9fd2VicGFja19hbWRfb3B0aW9uc19fICovXG5tb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19hbWRfb3B0aW9uc19fO1xuIiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvcmlnaW5hbE1vZHVsZSkge1xuXHRpZiAoIW9yaWdpbmFsTW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xuXHRcdHZhciBtb2R1bGUgPSBPYmplY3QuY3JlYXRlKG9yaWdpbmFsTW9kdWxlKTtcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcblx0XHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJleHBvcnRzXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWVcblx0XHR9KTtcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcblx0fVxuXHRyZXR1cm4gbW9kdWxlO1xufTtcbiIsIi8qZ2xvYmFscyBkb2N1bWVudCAqL1xyXG4vKmVzbGludC1lbnYgYnJvd3NlciAqL1xyXG5cclxudmFyIExpbmtlZFN0b3JlID0gZnVuY3Rpb24gKHN0b3JlTmFtZSkge1xyXG4gICAgLy8gU3RvcmUgZm9yIHRoZSBzZW1hbnRpYyB0ZXJtcywgZWFjaCBzdG9yZSBob2xkcyBpdHMgb3duIGRhdGEgdHJlZVxyXG4gICAgLy8gVGVybXMgYXJlIGFkZGVkIGFzIGtleS92YWx1ZSBwYXJpcyB0byBhIHJvb3Qgbm9kZVxyXG4gICAgdmFyIHJvb3QgPSB7fTtcclxuXHJcbiAgICBmdW5jdGlvbiBvYmplY3RUb1hNTChvYmosIHJvb3QsIGRvYykge1xyXG4gICAgICAgIC8vIFVzZWQgaWYgYW4gb2JqZWN0IHdhcyBwYXNzZWQgYXMgYSB0ZXJtIHZhbHVlXHJcbiAgICAgICAgdmFyIHRlcm07XHJcbiAgICAgICAgZm9yICh0ZXJtIGluIG9iaikge1xyXG4gICAgICAgICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KHRlcm0pKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG9ialt0ZXJtXSA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkb2NOb2RlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvYmpbdGVybV0udG9YTUwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jTm9kZSA9IG9ialt0ZXJtXS50b1hNTChkb2MpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY05vZGUgPSBkb2MuY3JlYXRlRWxlbWVudCh0ZXJtKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcm9vdC5hcHBlbmRDaGlsZChkb2NOb2RlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9ialt0ZXJtXS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5VG9YTUwob2JqW3Rlcm1dLCBkb2NOb2RlLCBkb2MpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0VG9YTUwob2JqW3Rlcm1dLCBkb2NOb2RlLCBkb2MpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJvb3QuYXBwZW5kQ2hpbGQoZG9jTm9kZSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJvb3Quc2V0QXR0cmlidXRlKHRlcm0sIG9ialt0ZXJtXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYXJyYXlUb1hNTChhcnIsIHJvb3QsIGRvYykge1xyXG4gICAgICAgIC8vIFVzZWQgdG8gY29udmVydCBhbiBhcnJheSB0byBhIGxpc3Qgb2YgWE1MIGVudHJpZXNcclxuICAgICAgICB2YXIgYWxsX251bWJlcnMgPSB0cnVlLFxyXG4gICAgICAgICAgICBhbGxfc3RyaW5ncyA9IHRydWUsXHJcbiAgICAgICAgICAgIGksIGwgPSBhcnIubGVuZ3RoO1xyXG4gICAgICAgIGFsbF9udW1iZXJzID0gYXJyLmV2ZXJ5KGZ1bmN0aW9uIChhKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0eXBlb2YgYSA9PT0gXCJudW1iZXJcIjtcclxuICAgICAgICB9KTtcclxuICAgICAgICBhbGxfc3RyaW5ncyA9IGFyci5ldmVyeShmdW5jdGlvbiAoYSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHlwZW9mIGEgPT09IFwic3RyaW5nXCI7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKGFsbF9udW1iZXJzIHx8IGFsbF9zdHJpbmdzKSB7XHJcbiAgICAgICAgICAgIC8vIEFuIGFycmF5IG9mIG51bWJlcnMgb3Igc3RyaW5nc1xyXG4gICAgICAgICAgICBhcnIuZm9yRWFjaChmdW5jdGlvbiAoYSwgaSkge1xyXG4gICAgICAgICAgICAgICAgcm9vdC5zZXRBdHRyaWJ1dGUoXCJpbmRleC1cIiArIGksIGEpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBBbiBhcnJheSBvZiBvYmplY3RzXHJcbiAgICAgICAgICAgIGFyci5mb3JFYWNoKGZ1bmN0aW9uIChhLCBpKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ2YWx1ZVwiKTtcclxuICAgICAgICAgICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKFwiaW5kZXhcIiwgaSk7XHJcbiAgICAgICAgICAgICAgICBvYmplY3RUb1hNTChhLCBub2RlLCBkb2MpO1xyXG4gICAgICAgICAgICAgICAgcm9vdC5hcHBlbmRDaGlsZChub2RlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcclxuICAgICAgICAnbmFtZSc6IHtcclxuICAgICAgICAgICAgJ2dldCc6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzdG9yZU5hbWU7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICdzZXQnOiBmdW5jdGlvbiAobmFtZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHN0b3JlTmFtZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZSA9IHN0b3JlTmFtZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgKFwiTmFtZSBpcyBhbHJlYWR5IHNldFwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJ2FkZFRlcm0nOiB7XHJcbiAgICAgICAgICAgICd2YWx1ZSc6IGZ1bmN0aW9uICh0ZXJtLCB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0ZXJtICE9PSBcInN0cmluZ1wiICYmIHRlcm0ubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgKFwidGVybSBtdXN0IGJlIGEgc3RyaW5nXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcm9vdFt0ZXJtXSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICAnYWRkVGVybXMnOiB7XHJcbiAgICAgICAgICAgICd2YWx1ZSc6IGZ1bmN0aW9uICh0ZXJtc09iamVjdCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0ZXJtc09iamVjdCAhPT0gXCJvYmplY3RcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IChcImFkZFRlcm1zIHRha2VzIGFuIG9iamVjdCBvZiB0ZXJtL3ZhbHVlIHBhaXJzXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmFyIHRlcm07XHJcbiAgICAgICAgICAgICAgICBmb3IgKHRlcm0gaW4gdGVybXNPYmplY3QpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGVybXNPYmplY3QuaGFzT3duUHJvcGVydHkodGVybSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRUZXJtKHRlcm0sIHRlcm1zT2JqZWN0W3Rlcm1dKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgICdkZWxldGVUZXJtJzoge1xyXG4gICAgICAgICAgICAndmFsdWUnOiBmdW5jdGlvbiAodGVybSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRUZXJtKHRlcm0sIHVuZGVmaW5lZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgICdnZXRUZXJtJzoge1xyXG4gICAgICAgICAgICAndmFsdWUnOiBmdW5jdGlvbiAodGVybSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0ZXJtICE9PSBcInN0cmluZ1wiICYmIHRlcm0ubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgKFwidGVybSBtdXN0IGJlIGEgc3RyaW5nXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJvb3RbdGVybV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgICdoYXNUZXJtJzoge1xyXG4gICAgICAgICAgICAndmFsdWUnOiBmdW5jdGlvbiAodGVybSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0ZXJtICE9PSBcInN0cmluZ1wiICYmIHRlcm0ubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgKFwidGVybSBtdXN0IGJlIGEgc3RyaW5nXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJvb3QuaGFzT3duUHJvcGVydHkodGVybSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgICd0b0pTT04nOiB7XHJcbiAgICAgICAgICAgICd2YWx1ZSc6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHJvb3QpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJ3RvWE1MJzoge1xyXG4gICAgICAgICAgICAndmFsdWUnOiBmdW5jdGlvbiAoZG9jKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbm9kZTtcclxuICAgICAgICAgICAgICAgIGlmICghZG9jKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jID0gZG9jdW1lbnQuaW1wbGVtZW50YXRpb24uY3JlYXRlRG9jdW1lbnQobnVsbCwgc3RvcmVOYW1lLCBudWxsKTtcclxuICAgICAgICAgICAgICAgICAgICBub2RlID0gZG9jLmZpcnN0RWxlbWVudENoaWxkO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBub2RlID0gZG9jLmNyZWF0ZUVsZW1lbnQoc3RvcmVOYW1lKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIG9iamVjdFRvWE1MKHJvb3QsIG5vZGUsIGRvYyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbm9kZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge0xpbmtlZFN0b3JlfTtcclxuIiwiLy8gQWRkIGdldElucHV0cyB0byBhbGwgQXVkaW9Ob2RlcyB0byBlYXNlIGRlcGxveW1lbnRcclxuLypnbG9iYWxzIEF1ZGlvTm9kZSwgV29ya2VyLCBjb25zb2xlLCB3aW5kb3csIGRvY3VtZW50LCBQcm9taXNlLCBYTUxIdHRwUmVxdWVzdCAqL1xyXG4vKmVzbGludC1lbnYgYnJvd3NlciAqL1xyXG4vKmpzaGludCBlc3ZlcnNpb246IDYgKi9cclxuaW1wb3J0IHtQYXJhbWV0ZXJNYW5hZ2VyfSBmcm9tIFwiLi9wYXJhbWV0ZXJNYW5hZ2VyLmpzXCI7XHJcblxyXG5pZiAodHlwZW9mIEF1ZGlvTm9kZSA9PT0gXCJmdW5jdGlvblwiICYmIHdpbmRvdy5pbXBvcnRTY3JpcHRzID09PSB1bmRlZmluZWQpIHtcclxuICAgIEF1ZGlvTm9kZS5wcm90b3R5cGUuZ2V0SW5wdXRzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBbdGhpc107XHJcbiAgICB9O1xyXG59XHJcblxyXG4vLyBUaGlzIHNob3VsZCBzaW1wbHkgZGVmaW5lIHRoZSBCYXNlUGx1Z2luIGZyb20gd2hpY2ggY3VzdG9tIHBsdWdpbnMgY2FuIGJlIGJ1aWx0IGZyb21cclxudmFyIEJhc2VQbHVnaW4gPSBmdW5jdGlvbihmYWN0b3J5LCBvd25lcikge1xyXG4gICAgdmFyIGlucHV0TGlzdCA9IFtdLFxyXG4gICAgICAgIG91dHB1dExpc3QgPSBbXSxcclxuICAgICAgICBwT3duZXIgPSBvd25lcixcclxuICAgICAgICBkZWxheVNhbXBsZXMgPSAwLFxyXG4gICAgICAgIGV2ZW50VGFyZ2V0ID0gbmV3IEV2ZW50VGFyZ2V0KCksXHJcbiAgICAgICAgZXh0ZXJuYWxJbnRlcmZhY2UgPSBuZXcgUGx1Z2luSW50ZXJmYWNlTWVzc2FnZUh1Yih0aGlzKTtcclxuICAgIGlmICh0aGlzLmNvbnRleHQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHRoaXMuY29udGV4dCA9IGZhY3RvcnkuY29udGV4dDtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmZhY3RvcnkgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHRoaXMuZmFjdG9yeSA9IGZhY3Rvcnk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmZlYXR1cmVNYXAgPSBuZXcgUGx1Z2luRmVhdHVyZUludGVyZmFjZSh0aGlzKTtcclxuICAgIHRoaXMucGFyYW1ldGVycyA9IG5ldyBQYXJhbWV0ZXJNYW5hZ2VyKHRoaXMsIGV4dGVybmFsSW50ZXJmYWNlKTtcclxuICAgIHRoaXMucGFyYW1ldGVycy5hZGRFdmVudExpc3RlbmVyKFwicGFyYW1ldGVyc2V0XCIsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBldmVudFRhcmdldC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcInBhcmFtZXRlcnNldFwiLCB7ZGV0YWlsOiBlLmRldGFpbH0pKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIGRlbGV0ZUlPKG5vZGUsIGxpc3QpIHtcclxuICAgICAgICB2YXIgaSA9IGxpc3QuZmluZEluZGV4KGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBlID09PSB0aGlzO1xyXG4gICAgICAgIH0sIG5vZGUpO1xyXG4gICAgICAgIGlmIChpID09PSAtMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxpc3Quc3BsaWNlKGksIDEpO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuYWRkSW5wdXQgPSBmdW5jdGlvbiAobm9kZSkge1xyXG4gICAgICAgIGlucHV0TGlzdC5wdXNoKG5vZGUpO1xyXG4gICAgICAgIHJldHVybiBpbnB1dExpc3Q7XHJcbiAgICB9O1xyXG4gICAgdGhpcy5kZWxldGVJbnB1dCA9IGZ1bmN0aW9uIChub2RlKSB7XHJcbiAgICAgICAgcmV0dXJuIGRlbGV0ZUlPKG5vZGUsIGlucHV0TGlzdCk7XHJcbiAgICB9O1xyXG4gICAgdGhpcy5hZGRPdXRwdXQgPSBmdW5jdGlvbiAobm9kZSkge1xyXG4gICAgICAgIG91dHB1dExpc3QucHVzaChub2RlKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5vdXRwdXRzO1xyXG4gICAgfTtcclxuICAgIHRoaXMuZGVsZXRlT3V0cHV0ID0gZnVuY3Rpb24gKG5vZGUpIHtcclxuICAgICAgICByZXR1cm4gZGVsZXRlSU8obm9kZSwgb3V0cHV0TGlzdCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuc2V0UHJvY2Vzc2luZ0RlbGF5QXNTZWNvbmRzID0gZnVuY3Rpb24oc2Vjb25kcykge1xyXG4gICAgICAgIHZhciBmcyA9IGZhY3RvcnkuY29udGV4dC5zYW1wbGVSYXRlO1xyXG4gICAgICAgIGlmICh0eXBlb2Ygc2Vjb25kcyA9PSBcIm51bWJlclwiICYmIGlzRmluaXRlKHNlY29uZHMpICYmIHNlY29uZHMgPj0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zZXRQcm9jZXNzaW5nRGVsYXlBc1NhbXBsZXMoc2Vjb25kcypmcykvZnM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRocm93KFwic2V0UHJvY2Vzc2luZ0RlbGF5QXNTZWNvbmRzIEludmFsaWQgYXJndW1lbnRcIik7XHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuc2V0UHJvY2Vzc2luZ0RlbGF5QXNTYW1wbGVzID0gZnVuY3Rpb24oc2FtcGxlcykge1xyXG4gICAgICAgIGlmICh0eXBlb2Ygc2FtcGxlcyA9PSBcIm51bWJlclwiICYmIGlzRmluaXRlKHNhbXBsZXMpICYmIHNhbXBsZXMgPj0gMCkge1xyXG4gICAgICAgICAgICBkZWxheVNhbXBsZXMgPSBzYW1wbGVzO1xyXG4gICAgICAgICAgICB2YXIgZSA9IG5ldyBFdmVudChcImFsdGVyZGVsYXlcIik7XHJcbiAgICAgICAgICAgIGV2ZW50VGFyZ2V0LmRpc3BhdGNoRXZlbnQoZSk7XHJcbiAgICAgICAgICAgIHJldHVybiBkZWxheVNhbXBsZXM7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhyb3coXCJzZXRQcm9jZXNzaW5nRGVsYXlBc1NhbXBsZXMgSW52YWxpZCBhcmd1bWVudFwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLnN0YXJ0ID0gdGhpcy5zdG9wID0gdGhpcy5vbmxvYWRlZCA9IHRoaXMub251bmxvYWRlZCA9IHRoaXMuZGVjb25zdHJ1Y3QgPSBmdW5jdGlvbiAoKSB7fTtcclxuXHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XHJcbiAgICAgICAgXCJleHRlcm5hbEludGVyZmFjZVwiOiB7XHJcbiAgICAgICAgICAgIFwidmFsdWVcIjogZXh0ZXJuYWxJbnRlcmZhY2VcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwibnVtSW5wdXRzXCI6IHtcclxuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaW5wdXRMaXN0Lmxlbmd0aDtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyAoXCJDYW5ub3Qgc2V0IHRoZSBudW1iZXIgb2YgaW5wdXRzIG9mIEJhc2VQbHVnaW5cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFwibnVtT3V0cHV0c1wiOiB7XHJcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG91dHB1dExpc3QubGVuZ3RoO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IChcIkNhbm5vdCBzZXQgdGhlIG51bWJlciBvZiBvdXRwdXRzIG9mIEJhc2VQbHVnaW5cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFwibnVtUGFyYW1ldGVyc1wiOiB7XHJcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyYW1ldGVycy5wYXJhbWV0ZXJzLmxlbmd0aDtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyAoXCJDYW5ub3Qgc2V0IHRoZSBudW1iZXIgb2YgcGFyYW1ldGVycyBvZiBCYXNlUGx1Z2luXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIm93bmVyXCI6IHtcclxuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcE93bmVyO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uIChvd25lcikge1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvd25lciA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHBPd25lciA9IG93bmVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHBPd25lcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJpbnB1dHNcIjoge1xyXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIChpbmRleCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGlucHV0TGlzdDtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyAoXCJJbGxlZ2FsIGF0dGVtcHQgdG8gbW9kaWZ5IEJhc2VQbHVnaW5cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFwib3V0cHV0c1wiOiB7XHJcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKGluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gb3V0cHV0TGlzdDtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyAoXCJJbGxlZ2FsIGF0dGVtcHQgdG8gbW9kaWZ5IEJhc2VQbHVnaW5cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFwicHJvY2Vzc2luZ0RlbGF5QXNTYW1wbGVzXCI6IHtcclxuICAgICAgICAgICAgXCJnZXRcIjogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVsYXlTYW1wbGVzO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcInNldFwiOiB0aGlzLnNldFByb2Nlc3NpbmdEZWxheUFzU2FtcGxlc1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJwcm9jZXNzaW5nRGVsYXlBc1NlY29uZHNcIjoge1xyXG4gICAgICAgICAgICBcImdldFwiOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBkZWxheVNhbXBsZXMvZmFjdG9yeS5jb250ZXh0LnNhbXBsZVJhdGU7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwic2V0XCI6IHRoaXMuc2V0UHJvY2Vzc2luZ0RlbGF5QXNTZWNvbmRzXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImNvbm5lY3RcIjoge1xyXG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uIChkZXN0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm91dHB1dHNbMF0uY29ubmVjdChkZXN0LmlucHQgPyBkZXN0LmlucHV0IDogZGVzdCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiZGlzY29ubmVjdFwiOiB7XHJcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKGRlc3QpIHtcclxuICAgICAgICAgICAgICAgIGlmIChkZXN0ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm91dHB1dHNbMF0uZGlzY29ubmVjdCgpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm91dHB1dHNbMF0uZGlzY29ubmVjdChkZXN0LmlucHV0ID8gZGVzdC5pbnB1dCA6IGRlc3QpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImdldElucHV0c1wiOiB7XHJcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW5wdXRzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImdldE91dHB1dHNcIjoge1xyXG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm91dHB1dHM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiZ2V0UGFyYW1ldGVyTmFtZXNcIjoge1xyXG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcmFtZXRlcnMuZ2V0UGFyYW1ldGVyTmFtZXMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJnZXRQYXJhbWV0ZXJCeU5hbWVcIjoge1xyXG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uIChuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJhbWV0ZXJzLmdldFBhcmFtZXRlckJ5TmFtZShuYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJnZXRQYXJhbWV0ZXJPYmplY3RcIjoge1xyXG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcmFtZXRlcnMuZ2V0UGFyYW1ldGVyT2JqZWN0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFwic2V0UGFyYW1ldGVyQnlOYW1lXCI6IHtcclxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcmFtZXRlcnMuc2V0UGFyYW1ldGVyQnlOYW1lKG5hbWUsIHZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJzZXRQYXJhbWV0ZXJzQnlPYmplY3RcIjoge1xyXG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uIChvYmplY3QpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcmFtZXRlcnMuc2V0UGFyYW1ldGVyc0J5T2JqZWN0KG9iamVjdCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiYWRkRXZlbnRMaXN0ZW5lclwiOiB7XHJcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGV2ZW50VGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoa2V5LCB2YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFwicmVtb3ZlRXZlbnRMaXN0ZW5lclwiOiB7XHJcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGV2ZW50VGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoa2V5LCB2YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufTtcclxuXHJcbnZhciBQbHVnaW5GZWF0dXJlSW50ZXJmYWNlID0gZnVuY3Rpb24gKEJhc2VQbHVnaW5JbnN0YW5jZSkge1xyXG4gICAgdGhpcy5wbHVnaW4gPSBCYXNlUGx1Z2luSW5zdGFuY2U7XHJcbiAgICB0aGlzLlJlY2VpdmVyID0gbmV3IFBsdWdpbkZlYXR1cmVJbnRlcmZhY2VSZWNlaXZlcih0aGlzLCBCYXNlUGx1Z2luSW5zdGFuY2UuZmFjdG9yeS5GZWF0dXJlTWFwKTtcclxuICAgIHRoaXMuU2VuZGVyID0gbmV3IFBsdWdpbkZlYXR1cmVJbnRlcmZhY2VTZW5kZXIodGhpcywgQmFzZVBsdWdpbkluc3RhbmNlLmZhY3RvcnkuRmVhdHVyZU1hcCk7XHJcblxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIFwib25mZWF0dXJlc1wiLCB7XHJcbiAgICAgICAgJ2dldCc6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuUmVjZWl2ZXIub25mZWF0dXJlcztcclxuICAgICAgICB9LFxyXG4gICAgICAgICdzZXQnOiBmdW5jdGlvbiAoZnVuYykge1xyXG4gICAgICAgICAgICB0aGlzLlJlY2VpdmVyLm9uZmVhdHVyZXMgPSBmdW5jO1xyXG4gICAgICAgICAgICByZXR1cm4gZnVuYztcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufTtcclxudmFyIFBsdWdpbkZlYXR1cmVJbnRlcmZhY2VSZWNlaXZlciA9IGZ1bmN0aW9uIChGZWF0dXJlSW50ZXJmYWNlSW5zdGFuY2UsIEZhY3RvcnlGZWF0dXJlTWFwKSB7XHJcbiAgICBmdW5jdGlvbiBjaGVja0ZlYXR1cmVBcmdzKHNvdXJjZSwgZmVhdHVyZU9iamVjdCkge1xyXG4gICAgICAgIGlmIChzb3VyY2UgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aHJvdyAoXCJTb3VyY2UgcGx1Z2luIG11c3QgYmUgZGVmaW5lZFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGZlYXR1cmVPYmplY3QgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aHJvdyAoXCJGZWF0dXJlT2JqZWN0IG11c3QgYmUgZGVmaW5lZFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiBmZWF0dXJlT2JqZWN0Lm91dHB1dEluZGV4ICE9PSBcIm51bWJlclwiIHx8IHR5cGVvZiBmZWF0dXJlT2JqZWN0LmZyYW1lU2l6ZSAhPT0gXCJudW1iZXJcIiB8fCB0eXBlb2YgZmVhdHVyZU9iamVjdC5mZWF0dXJlcyAhPT0gXCJvYmplY3RcIikge1xyXG4gICAgICAgICAgICB0aHJvdyAoXCJNYWxmb3JtZWQgZmVhdHVyZU9iamVjdFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICB2YXIgY19mZWF0dXJlcyA9IGZ1bmN0aW9uICgpIHt9O1xyXG4gICAgdGhpcy5yZXF1ZXN0RmVhdHVyZXMgPSBmdW5jdGlvbiAoZmVhdHVyZUxpc3QpIHtcclxuICAgICAgICB2YXIgaTtcclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgZmVhdHVyZUxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5yZXF1ZXN0RmVhdHVyZXNGcm9tUGx1Z2luKGZlYXR1cmVMaXN0W2ldLnBsdWdpbiwge1xyXG4gICAgICAgICAgICAgICAgJ291dHB1dEluZGV4JzogZmVhdHVyZUxpc3RbaV0ub3V0cHV0SW5kZXgsXHJcbiAgICAgICAgICAgICAgICAnZnJhbWVTaXplJzogZmVhdHVyZUxpc3RbaV0uZnJhbWVTaXplLFxyXG4gICAgICAgICAgICAgICAgJ2ZlYXR1cmVzJzogZmVhdHVyZUxpc3RbaV0uZmVhdHVyZXNcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHRoaXMucmVxdWVzdEZlYXR1cmVzRnJvbVBsdWdpbiA9IGZ1bmN0aW9uIChzb3VyY2UsIGZlYXR1cmVPYmplY3QpIHtcclxuICAgICAgICBjaGVja0ZlYXR1cmVBcmdzKHNvdXJjZSwgZmVhdHVyZU9iamVjdCk7XHJcbiAgICAgICAgRmFjdG9yeUZlYXR1cmVNYXAucmVxdWVzdEZlYXR1cmVzKEZlYXR1cmVJbnRlcmZhY2VJbnN0YW5jZS5wbHVnaW4sIHNvdXJjZSwgZmVhdHVyZU9iamVjdCk7XHJcbiAgICB9O1xyXG4gICAgdGhpcy5jYW5jZWxGZWF0dXJlc0Zyb21QbHVnaW4gPSBmdW5jdGlvbiAoc291cmNlLCBmZWF0dXJlT2JqZWN0KSB7XHJcbiAgICAgICAgY2hlY2tGZWF0dXJlQXJncyhzb3VyY2UsIGZlYXR1cmVPYmplY3QpO1xyXG4gICAgICAgIEZhY3RvcnlGZWF0dXJlTWFwLmRlbGV0ZUZlYXR1cmVzKEZlYXR1cmVJbnRlcmZhY2VJbnN0YW5jZS5wbHVnaW4sIHNvdXJjZSwgZmVhdHVyZU9iamVjdCk7XHJcbiAgICB9O1xyXG4gICAgdGhpcy5jYW5jZWxBbGxGZWF0dXJlc0Zyb21QbHVnaW4gPSBmdW5jdGlvbiAoc291cmNlKSB7XHJcbiAgICAgICAgaWYgKHNvdXJjZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRocm93IChcIlNvdXJjZSBwbHVnaW4gbXVzdCBiZSBkZWZpbmVkXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBGYWN0b3J5RmVhdHVyZU1hcC5kZWxldGVGZWF0dXJlcyhGZWF0dXJlSW50ZXJmYWNlSW5zdGFuY2UucGx1Z2luLCBzb3VyY2UpO1xyXG4gICAgfTtcclxuICAgIHRoaXMuY2FuY2VsQWxsRmVhdHVyZXMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgRmFjdG9yeUZlYXR1cmVNYXAuZGVsZXRlRmVhdHVyZXMoRmVhdHVyZUludGVyZmFjZUluc3RhbmNlLnBsdWdpbik7XHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMucG9zdEZlYXR1cmVzID0gZnVuY3Rpb24gKE1lc3NhZ2UpIHtcclxuICAgICAgICAvKlxyXG4gICAgICAgICAgICBDYWxsZWQgYnkgdGhlIFBsdWdpbiBGYWN0b3J5IHdpdGggdGhlIGZlYXR1cmUgbWVzc2FnZVxyXG4gICAgICAgICAgICBtZXNzYWdlID0ge1xyXG4gICAgICAgICAgICAgICAgJ3BsdWdpbic6IHNvdXJjZVBsdWdpbkluc3RhbmNlLFxyXG4gICAgICAgICAgICAgICAgJ291dHB1dEluZGV4Jzogb3V0cHV0SW5kZXgsXHJcbiAgICAgICAgICAgICAgICAnZnJhbWVTaXplJzogZnJhbWVTaXplLFxyXG4gICAgICAgICAgICAgICAgJ2ZlYXR1cmVzJzoge30gSlMtWHRyYWN0IGZlYXR1cmUgcmVzdWx0cyBvYmplY3RcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICovXHJcbiAgICAgICAgaWYgKHR5cGVvZiBjX2ZlYXR1cmVzID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgY19mZWF0dXJlcyhNZXNzYWdlKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIm9uZmVhdHVyZXNcIiwge1xyXG4gICAgICAgICdnZXQnOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjX2ZlYXR1cmVzO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJ3NldCc6IGZ1bmN0aW9uIChmdW5jKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZnVuYyA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgICAgICBjX2ZlYXR1cmVzID0gZnVuYztcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbn07XHJcbnZhciBQbHVnaW5GZWF0dXJlSW50ZXJmYWNlU2VuZGVyID0gZnVuY3Rpb24gKEZlYXR1cmVJbnRlcmZhY2VJbnN0YW5jZSwgRmFjdG9yeUZlYXR1cmVNYXApIHtcclxuICAgIHZhciBPdXRwdXROb2RlID0gZnVuY3Rpb24gKHBhcmVudCwgb3V0cHV0LCBpbmRleCkge1xyXG4gICAgICAgIHZhciBleHRyYWN0b3JzID0gW107XHJcbiAgICAgICAgdmFyIEV4dHJhY3RvciA9IGZ1bmN0aW9uIChvdXRwdXQsIGZyYW1lU2l6ZSkge1xyXG4gICAgICAgICAgICB0aGlzLmV4dHJhY3RvciA9IEZlYXR1cmVJbnRlcmZhY2VJbnN0YW5jZS5wbHVnaW4uZmFjdG9yeS5jb250ZXh0LmNyZWF0ZUFuYWx5c2VyKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZXh0cmFjdG9yLmZmdFNpemUgPSBmcmFtZVNpemU7XHJcbiAgICAgICAgICAgIG91dHB1dC5jb25uZWN0KHRoaXMuZXh0cmFjdG9yKTtcclxuICAgICAgICAgICAgdGhpcy5mZWF0dXJlcyA9IFtdO1xyXG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgXCJmcmFtZVNpemVcIiwge1xyXG4gICAgICAgICAgICAgICAgJ3ZhbHVlJzogZnJhbWVTaXplXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAvKlxyXG4gICAgICAgICAgICBmdW5jdGlvbiByZWN1cnNpdmVQcm9jZXNzaW5nKGJhc2UsIGxpc3QpIHtcclxuICAgICAgICAgICAgICAgIHZhciBsID0gbGlzdC5sZW5ndGgsXHJcbiAgICAgICAgICAgICAgICAgICAgaSwgZW50cnk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW50cnkgPSBsaXN0W2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhc2VbZW50cnkubmFtZV0uYXBwbHkoYmFzZSwgZW50cnkucGFyYW1ldGVycyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVudHJ5LmZlYXR1cmVzICYmIGVudHJ5LmZlYXR1cmVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVjdXJzaXZlUHJvY2Vzc2luZyhiYXNlLnJlc3VsdFtlbnRyeS5uYW1lXSwgZW50cnkuZmVhdHVyZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICB2YXIgcmVjdXJzaXZlUHJvY2Vzc2luZyA9IHRoaXMuZmFjdG9yeS5yZWN1cnNpdmVQcm9jZXNzaW5nO1xyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gb25hdWRpb2NhbGxiYWNrKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIC8vdGhpcyA9PT0gRXh0cmFjdG9yXHJcbiAgICAgICAgICAgICAgICB2YXIgbWVzc2FnZSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAnbnVtYmVyT2ZDaGFubmVscyc6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3Jlc3VsdHMnOiBbXVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIHJlY3Vyc2l2ZVByb2Nlc3NpbmcoZGF0YSwgdGhpcy5mZWF0dXJlcyk7XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlLnJlc3VsdHNbMF0gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ2NoYW5uZWwnOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZXN1bHRzJzogSlNPTi5wYXJzZShkYXRhLnRvSlNPTigpKVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIHRoaXMucG9zdEZlYXR1cmVzKGRhdGEubGVuZ3RoLCBtZXNzYWdlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5zZXRGZWF0dXJlcyA9IGZ1bmN0aW9uIChmZWF0dXJlTGlzdCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mZWF0dXJlcyA9IGZlYXR1cmVMaXN0O1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZmVhdHVyZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5leHRyYWN0b3IuY2xlYXJDYWxsYmFjaygpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmV4dHJhY3Rvci5mcmFtZUNhbGxiYWNrKG9uYXVkaW9jYWxsYmFjaywgdGhpcyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfTtcclxuICAgICAgICB2YXIgV29ya2VyRXh0cmFjdG9yID0gZnVuY3Rpb24gKG91dHB1dCwgZnJhbWVTaXplKSB7XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIG9uYXVkaW9jYWxsYmFjayhlKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgYywgZnJhbWVzID0gW107XHJcbiAgICAgICAgICAgICAgICBmb3IgKGMgPSAwOyBjIDwgZS5pbnB1dEJ1ZmZlci5udW1iZXJPZkNoYW5uZWxzOyBjKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBmcmFtZXNbY10gPSBlLmlucHV0QnVmZmVyLmdldENoYW5uZWxEYXRhKGMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgd29ya2VyLnBvc3RNZXNzYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICAnc3RhdGUnOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgICdmcmFtZXMnOiBmcmFtZXNcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiByZXNwb25zZShtc2cpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucG9zdEZlYXR1cmVzKGZyYW1lU2l6ZSwgbXNnLmRhdGEucmVzcG9uc2UpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgd29ya2VyID0gbmV3IFdvcmtlcihcImpzYXAvZmVhdHVyZS13b3JrZXIuanNcIik7XHJcbiAgICAgICAgICAgIHdvcmtlci5vbmVycm9yID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNldEZlYXR1cmVzID0gZnVuY3Rpb24gKGZlYXR1cmVMaXN0KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgICAgICAgICB2YXIgY29uZmlnTWVzc2FnZSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAnc3RhdGUnOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICdzYW1wbGVSYXRlJzogRmVhdHVyZUludGVyZmFjZUluc3RhbmNlLnBsdWdpbi5mYWN0b3J5LmNvbnRleHQuc2FtcGxlUmF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAnZmVhdHVyZUxpc3QnOiBmZWF0dXJlTGlzdCxcclxuICAgICAgICAgICAgICAgICAgICAnbnVtQ2hhbm5lbHMnOiBvdXRwdXQubnVtYmVyT2ZPdXRwdXRzLFxyXG4gICAgICAgICAgICAgICAgICAgICdmcmFtZVNpemUnOiB0aGlzLmZyYW1lU2l6ZVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmVhdHVyZXMgPSBmZWF0dXJlTGlzdDtcclxuICAgICAgICAgICAgICAgIGlmIChmZWF0dXJlTGlzdCAmJiBmZWF0dXJlTGlzdC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd29ya2VyLm9ubWVzc2FnZSA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLmRhdGEuc3RhdGUgPT09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtlci5vbm1lc3NhZ2UgPSByZXNwb25zZS5iaW5kKHNlbGYpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5leHRyYWN0b3Iub25hdWRpb3Byb2Nlc3MgPSBvbmF1ZGlvY2FsbGJhY2suYmluZChzZWxmKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtlci5wb3N0TWVzc2FnZShjb25maWdNZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgd29ya2VyLnBvc3RNZXNzYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ3N0YXRlJzogMFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmV4dHJhY3Rvci5vbmF1ZGlvcHJvY2VzcyA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICB0aGlzLmV4dHJhY3RvciA9IEZlYXR1cmVJbnRlcmZhY2VJbnN0YW5jZS5wbHVnaW4uZmFjdG9yeS5jb250ZXh0LmNyZWF0ZVNjcmlwdFByb2Nlc3NvcihmcmFtZVNpemUsIG91dHB1dC5udW1iZXJPZk91dHB1dHMsIDEpO1xyXG4gICAgICAgICAgICBvdXRwdXQuY29ubmVjdCh0aGlzLmV4dHJhY3Rvcik7XHJcbiAgICAgICAgICAgIHRoaXMuZXh0cmFjdG9yLmNvbm5lY3QoRmVhdHVyZUludGVyZmFjZUluc3RhbmNlLnBsdWdpbi5mYWN0b3J5LmNvbnRleHQuZGVzdGluYXRpb24pO1xyXG5cclxuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIFwiZnJhbWVTaXplXCIsIHtcclxuICAgICAgICAgICAgICAgICd2YWx1ZSc6IGZyYW1lU2l6ZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuYWRkRXh0cmFjdG9yID0gZnVuY3Rpb24gKGZyYW1lU2l6ZSkge1xyXG4gICAgICAgICAgICB2YXIgb2JqO1xyXG4gICAgICAgICAgICBpZiAod2luZG93Lldvcmtlcikge1xyXG4gICAgICAgICAgICAgICAgb2JqID0gbmV3IFdvcmtlckV4dHJhY3RvcihvdXRwdXQsIGZyYW1lU2l6ZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBvYmogPSBuZXcgRXh0cmFjdG9yKG91dHB1dCwgZnJhbWVTaXplKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBleHRyYWN0b3JzLnB1c2gob2JqKTtcclxuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwgXCJwb3N0RmVhdHVyZXNcIiwge1xyXG4gICAgICAgICAgICAgICAgJ3ZhbHVlJzogZnVuY3Rpb24gKGZyYW1lU2l6ZSwgcmVzdWx0c0pTT04pIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgb2JqID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnb3V0cHV0SW5kZXgnOiBpbmRleCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2ZyYW1lU2l6ZSc6IGZyYW1lU2l6ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ3Jlc3VsdHMnOiByZXN1bHRzSlNPTlxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3N0RmVhdHVyZXMob2JqKTtcclxuICAgICAgICAgICAgICAgIH0uYmluZCh0aGlzKVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIG9iajtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuZmluZEV4dHJhY3RvciA9IGZ1bmN0aW9uIChmcmFtZVNpemUpIHtcclxuICAgICAgICAgICAgdmFyIGNoZWNrID0gZnJhbWVTaXplO1xyXG4gICAgICAgICAgICByZXR1cm4gZXh0cmFjdG9ycy5maW5kKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBUaGlzIE1VU1QgYmUgPT09IE5PVCA9PT1cclxuICAgICAgICAgICAgICAgIHJldHVybiBlLmZyYW1lU2l6ZSA9PT0gY2hlY2s7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5kZWxldGVFeHRyYWN0b3IgPSBmdW5jdGlvbiAoZnJhbWVTaXplKSB7fTtcclxuICAgIH07XHJcbiAgICB2YXIgb3V0cHV0Tm9kZXMgPSBbXTtcclxuICAgIHRoaXMudXBkYXRlRmVhdHVyZXMgPSBmdW5jdGlvbiAoZmVhdHVyZU9iamVjdCkge1xyXG4gICAgICAgIC8vIFtdIE91dHB1dCAtPiB7fSAnZnJhbWVzaXplJyAtPiB7fSAnZmVhdHVyZXMnXHJcbiAgICAgICAgdmFyIG87XHJcbiAgICAgICAgZm9yIChvID0gMDsgbyA8IGZlYXR1cmVPYmplY3QubGVuZ3RoOyBvKyspIHtcclxuICAgICAgICAgICAgaWYgKG91dHB1dE5vZGVzW29dID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGlmIChvID4gRmVhdHVyZUludGVyZmFjZUluc3RhbmNlLnBsdWdpbi5udW1PdXRwdXRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgKFwiUmVxdWVzdGVkIGFuIG91dHB1dCB0aGF0IGRvZXMgbm90IGV4aXN0XCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgb3V0cHV0Tm9kZXNbb10gPSBuZXcgT3V0cHV0Tm9kZShGZWF0dXJlSW50ZXJmYWNlSW5zdGFuY2UucGx1Z2luLCBGZWF0dXJlSW50ZXJmYWNlSW5zdGFuY2UucGx1Z2luLm91dHB1dHNbb10sIG8pO1xyXG4gICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG91dHB1dE5vZGVzW29dLCBcInBvc3RGZWF0dXJlc1wiLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ3ZhbHVlJzogZnVuY3Rpb24gKHJlc3VsdE9iamVjdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBvc3RGZWF0dXJlcyhyZXN1bHRPYmplY3QpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0uYmluZCh0aGlzKVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIHNpO1xyXG4gICAgICAgICAgICBmb3IgKHNpID0gMDsgc2kgPCBmZWF0dXJlT2JqZWN0W29dLmxlbmd0aDsgc2krKykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGV4dHJhY3RvciA9IG91dHB1dE5vZGVzW29dLmZpbmRFeHRyYWN0b3IoZmVhdHVyZU9iamVjdFtvXVtzaV0uZnJhbWVTaXplKTtcclxuICAgICAgICAgICAgICAgIGlmICghZXh0cmFjdG9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXh0cmFjdG9yID0gb3V0cHV0Tm9kZXNbb10uYWRkRXh0cmFjdG9yKGZlYXR1cmVPYmplY3Rbb11bc2ldLmZyYW1lU2l6ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBleHRyYWN0b3Iuc2V0RmVhdHVyZXMoZmVhdHVyZU9iamVjdFtvXVtzaV0uZmVhdHVyZUxpc3QpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLnBvc3RGZWF0dXJlcyA9IGZ1bmN0aW9uIChmZWF0dXJlT2JqZWN0KSB7XHJcbiAgICAgICAgLypcclxuICAgICAgICAgICAgQ2FsbGVkIGJ5IHRoZSBpbmRpdmlkdWFsIGV4dHJhY3RvciBpbnN0YW5jZXM6XHJcbiAgICAgICAgICAgIGZlYXR1cmVPYmplY3QgPSB7J2ZyYW1lU2l6ZSc6IGZyYW1lU2l6ZSxcclxuICAgICAgICAgICAgJ291dHB1dEluZGV4Jzogb3V0cHV0SW5kZXgsXHJcbiAgICAgICAgICAgICdyZXN1bHRzJzpbXX1cclxuICAgICAgICAqL1xyXG4gICAgICAgIEZlYXR1cmVJbnRlcmZhY2VJbnN0YW5jZS5wbHVnaW4uZmFjdG9yeS5GZWF0dXJlTWFwLnBvc3RGZWF0dXJlcyh7XHJcbiAgICAgICAgICAgICdwbHVnaW4nOiBGZWF0dXJlSW50ZXJmYWNlSW5zdGFuY2UucGx1Z2luLnBsdWdpbkluc3RhbmNlLFxyXG4gICAgICAgICAgICAnb3V0cHV0SW5kZXgnOiBmZWF0dXJlT2JqZWN0Lm91dHB1dEluZGV4LFxyXG4gICAgICAgICAgICAnZnJhbWVTaXplJzogZmVhdHVyZU9iamVjdC5mcmFtZVNpemUsXHJcbiAgICAgICAgICAgICdyZXN1bHRzJzogZmVhdHVyZU9iamVjdC5yZXN1bHRzXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIFNlbmQgdG8gRmFjdG9yeVxyXG4gICAgRmFjdG9yeUZlYXR1cmVNYXAuY3JlYXRlU291cmNlTWFwKHRoaXMsIEZlYXR1cmVJbnRlcmZhY2VJbnN0YW5jZS5wbHVnaW4ucGx1Z2luSW5zdGFuY2UpO1xyXG59O1xyXG5cclxuLypcclxuICAgIFRoaXMgaXMgYW4gb3B0aW9uYWwgbW9kdWxlIHdoaWNoIHdpbGwgYXR0ZW1wdCB0byBjcmVhdGUgYSBncmFwaGljYWwgaW1wbGVtZW50YXRpb24uXHJcbiAgICBBcyB3aXRoIG90aGVyIGF1ZGlvIHBsdWdpbnMgZm9yIERBV3MsIHRoZSBHVUkgaXMgYW4gb3B0aW9uYWwgZWxlbWVudCB3aGljaCBjYW4gYmUgYWNjZXB0ZWQgb3IgcmVqZWN0ZWQgYnkgdGhlIGhvc3QuXHJcblxyXG4gICAgVGhlIGFjdHVhbCBHVUkgaXMgbGF1bmNoZWQgYXMgYW4gPGlmcmFtZT4gZWxlbWVudCBpbiB0aGUgYnJvd3NlciB0byBrZWVwIGVhY2ggcGx1Z2luIGlzb2xhdGVkIGZyb20gdGhlIHJlc3RcclxuKi9cclxuXHJcbnZhciBQbHVnaW5Vc2VySW50ZXJmYWNlID0gZnVuY3Rpb24gKEJhc2VQbHVnaW5JbnN0YW5jZSwgd2lkdGgsIGhlaWdodCkge1xyXG4gICAgY29uc29sZS5sb2coXCJERVBSRUNBVEVEISFcIik7XHJcbiAgICBjb25zb2xlLmxvZyhcIlRoZSBjbGFzcyBQbHVnaW5Vc2VySW50ZXJmYWNlIGhhcyBiZWVuIGRlcHJlY2F0ZWRcIik7XHJcbiAgICBjb25zb2xlLmxvZyhcIlBsZWFzZSBsb29rIGF0IHRoZSBkb2N1bWVudHMgZm9yIHRoZSBuZXcgbWV0aG9kcyBmb3IgYnVpbGRpbmcgcGx1Z2luc1wiKTtcclxuICAgIHRoaXMucHJvY2Vzc29yID0gQmFzZVBsdWdpbkluc3RhbmNlO1xyXG4gICAgdGhpcy5yb290ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGlmICh3aWR0aCA+IDApIHtcclxuICAgICAgICB0aGlzLnJvb3Quc3R5bGUud2lkdGggPSB3aWR0aCArIFwicHhcIjtcclxuICAgIH1cclxuICAgIGlmIChoZWlnaHQgPiAwKSB7XHJcbiAgICAgICAgdGhpcy5yb290LnN0eWxlLmhlaWdodCA9IGhlaWdodCArIFwicHhcIjtcclxuICAgIH1cclxuICAgIHRoaXMuZGltID0ge1xyXG4gICAgICAgIHdpZHRoOiB3aWR0aCxcclxuICAgICAgICBoZWlnaHQ6IGhlaWdodFxyXG4gICAgfTtcclxuICAgIHRoaXMuaW50ZXJ2YWxGdW5jdGlvbiA9IG51bGw7XHJcbiAgICB0aGlzLnVwZGF0ZUludGVydmFsID0gbnVsbDtcclxuICAgIHRoaXMuUGx1Z2luUGFyYW1ldGVySW50ZXJmYWNlcyA9IFtdO1xyXG5cclxuICAgIHZhciBQbHVnaW5QYXJhbWV0ZXJJbnRlcmZhY2VOb2RlID0gZnVuY3Rpb24gKERPTSwgUGx1Z2luUGFyYW1ldGVySW5zdGFuY2UsIHByb2Nlc3NvciwgZ3VpKSB7XHJcbiAgICAgICAgdGhpcy5pbnB1dCA9IERPTTtcclxuICAgICAgICB0aGlzLnByb2Nlc3NvciA9IHByb2Nlc3NvcjtcclxuICAgICAgICB0aGlzLkdVSSA9IGd1aTtcclxuICAgICAgICB0aGlzLkF1ZGlvUGFyYW0gPSBQbHVnaW5QYXJhbWV0ZXJJbnN0YW5jZTtcclxuICAgICAgICB0aGlzLmhhbmRsZUV2ZW50ID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMuQXVkaW9QYXJhbS52YWx1ZSA9IHRoaXMuaW5wdXQudmFsdWU7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5pbnB1dC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMpO1xyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLmNyZWF0ZVBsdWdpblBhcmFtZXRlckludGVyZmFjZU5vZGUgPSBmdW5jdGlvbiAoRE9NLCBQbHVnaW5QYXJhbWV0ZXJJbnN0YW5jZSkge1xyXG4gICAgICAgIHZhciBub2RlID0gbmV3IFBsdWdpblBhcmFtZXRlckludGVyZmFjZU5vZGUoRE9NLCBQbHVnaW5QYXJhbWV0ZXJJbnN0YW5jZSwgdGhpcy5wcm9jZXNzb3IsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMuUGx1Z2luUGFyYW1ldGVySW50ZXJmYWNlcy5wdXNoKG5vZGUpO1xyXG4gICAgICAgIHJldHVybiBub2RlO1xyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLnVwZGF0ZSA9IGZ1bmN0aW9uICgpIHt9O1xyXG5cclxufTtcclxuXHJcblBsdWdpblVzZXJJbnRlcmZhY2UucHJvdG90eXBlLmdldFJvb3QgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5yb290O1xyXG59O1xyXG5QbHVnaW5Vc2VySW50ZXJmYWNlLnByb3RvdHlwZS5nZXREaW1lbnNpb25zID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZGltO1xyXG59O1xyXG5QbHVnaW5Vc2VySW50ZXJmYWNlLnByb3RvdHlwZS5nZXRXaWR0aCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiB0aGlzLmRpbS53aWR0aDtcclxufTtcclxuUGx1Z2luVXNlckludGVyZmFjZS5wcm90b3R5cGUuZ2V0SGVpZ2h0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZGltLmhlaWdodDtcclxufTtcclxuUGx1Z2luVXNlckludGVyZmFjZS5wcm90b3R5cGUuYmVnaW5DYWxsYmFja3MgPSBmdW5jdGlvbiAobXMpIHtcclxuICAgIC8vIEFueSByZWdpc3RlcmVkIGNhbGxiYWNrcyBhcmUgc3RhcnRlZCBieSB0aGUgaG9zdFxyXG4gICAgaWYgKG1zID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBtcyA9IDI1MDtcclxuICAgIH0gLy9EZWZhdWx0IG9mIDI1MG1zIHVwZGF0ZSBwZXJpb2RcclxuICAgIGlmICh0aGlzLmludGVydmFsRnVuY3Rpb24gPT09IG51bGwpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZUludGVydmFsID0gbXM7XHJcbiAgICAgICAgdGhpcy5pbnRlcnZhbEZ1bmN0aW9uID0gd2luZG93LnNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGUoKTtcclxuICAgICAgICB9LmJpbmQodGhpcyksIDI1MCk7XHJcbiAgICB9XHJcbn07XHJcblBsdWdpblVzZXJJbnRlcmZhY2UucHJvdG90eXBlLnN0b3BDYWxsYmFja3MgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAvLyBBbnkgcmVnaXN0ZXJlZCBjYWxsYmFja3MgYXJlIHN0b3BwZWQgYnkgdGhlIGhvc3RcclxuICAgIGlmICh0aGlzLmludGVydmFsRnVuY3Rpb24gIT09IG51bGwpIHtcclxuICAgICAgICB3aW5kb3cuY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsRnVuY3Rpb24pO1xyXG4gICAgICAgIHRoaXMudXBkYXRlSW50ZXJ2YWwgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuaW50ZXJ2YWxGdW5jdGlvbiA9IG51bGw7XHJcbiAgICB9XHJcbn07XHJcblBsdWdpblVzZXJJbnRlcmZhY2UucHJvdG90eXBlLmxvYWRSZXNvdXJjZSA9IGZ1bmN0aW9uICh1cmwpIHtcclxuICAgIHZhciBwID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIHZhciByZXEgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICByZXEub3BlbignR0VUJywgdXJsKTtcclxuICAgICAgICByZXEub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAocmVxLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHJlcS5yZXNwb25zZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZWplY3QoRXJyb3IocmVxLnN0YXR1c1RleHQpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmVxLm9uZXJyb3IgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJlamVjdChFcnJvcihcIk5ldHdvcmsgRXJyb3JcIikpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmVxLnNlbmQoKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHA7XHJcbn07XHJcblBsdWdpblVzZXJJbnRlcmZhY2UucHJvdG90eXBlLmNsZWFyR1VJID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdGhpcy5zdG9wQ2FsbGJhY2tzKCk7XHJcbiAgICB0aGlzLnJvb3QuaW5uZXJIVE1MID0gXCJcIjtcclxufTtcclxuXHJcbnZhciBQbHVnaW5JbnRlcmZhY2VNZXNzYWdlSHViID0gZnVuY3Rpb24ob3duZXIpIHtcclxuICAgIGZ1bmN0aW9uIGJ1aWxkUGx1Z2luUGFyYW1ldGVySlNPTihwbHVnaW4sIHNvdXJjZXMpIHtcclxuICAgICAgICB2YXIgbmFtZXMgPSBvd25lci5wYXJhbWV0ZXJzLmdldFBhcmFtZXRlck5hbWVzKCk7XHJcbiAgICAgICAgdmFyIE8gPSB7fTtcclxuICAgICAgICBpZiAoc291cmNlcyA9PT0gdW5kZWZpbmVkIHx8IHNvdXJjZXMubGVuZ3RoID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBzb3VyY2VzID0gbmFtZXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG5hbWVzLmZpbHRlcihmdW5jdGlvbihuYW1lKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmluY2x1ZGVzKG5hbWUpO1xyXG4gICAgICAgIH0sIHNvdXJjZXMpLmZvckVhY2goZnVuY3Rpb24obmFtZSkge1xyXG4gICAgICAgICAgICB2YXIgcGFyYW0gPSBvd25lci5wYXJhbWV0ZXJzLmdldFBhcmFtZXRlckJ5TmFtZShuYW1lKTtcclxuICAgICAgICAgICAgT1tuYW1lXSA9IHtcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBwYXJhbS52YWx1ZSxcclxuICAgICAgICAgICAgICAgIG1heGltdW06IHBhcmFtLm1heGltdW0sXHJcbiAgICAgICAgICAgICAgICBtaW5pbXVtOiBwYXJhbS5taW5pbXVtLFxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBwYXJhbS5kZWZhdWx0VmFsdWUsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBwYXJhbS5jb25zdHJ1Y3Rvci5uYW1lLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBpZiAocGFyYW0uYXV0b21hdGlvbikge1xyXG4gICAgICAgICAgICAgICAgT1tuYW1lXS5hdXRvbWF0ZWQgPSBwYXJhbS5hdXRvbWF0aW9uLmVuYWJsZWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gTztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBidWlsZFBhcmFtZXRlclVwZGF0ZVBheWxvYWQoc2VuZGVyX2lkLCBzb3VyY2VzKSB7XHJcbiAgICAgICAgdmFyIG1zZyA9IHtcclxuICAgICAgICAgICAgbWVzc2FnZTogXCJ1cGRhdGVQYXJhbWV0ZXJzXCIsXHJcbiAgICAgICAgICAgIHBhcmFtZXRlcnM6IGJ1aWxkUGx1Z2luUGFyYW1ldGVySlNPTihvd25lciwgc291cmNlcylcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChzZW5kZXJfaWQpIHtcclxuICAgICAgICAgICAgbXNnLnNlbmRlcl9pZCA9IHNlbmRlcl9pZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG1zZztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZW5kUGFyYW1ldGVyVXBkYXRlcyhjaGFubmVsLCBzb3VyY2VzKSB7XHJcbiAgICAgICAgY2hhbm5lbC5wb3N0TWVzc2FnZShidWlsZFBhcmFtZXRlclVwZGF0ZVBheWxvYWQodW5kZWZpbmVkLCBzb3VyY2VzKSwgbG9jYXRpb24ub3JpZ2luKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBicm9hZGNhc3RQYXJhbWV0ZXJVcGRhdGVzKHNlbmRlcl9pZCwgc291cmNlcykge1xyXG4gICAgICAgIHZhciBtc2cgPSBidWlsZFBhcmFtZXRlclVwZGF0ZVBheWxvYWQoc2VuZGVyX2lkLCBzb3VyY2VzKTtcclxuICAgICAgICB3aW5kb3dNZXNzYWdlTGlzdC5mb3JFYWNoKGZ1bmN0aW9uKHcpIHtcclxuICAgICAgICAgICAgdy5wb3N0TWVzc2FnZShtc2csIGxvY2F0aW9uLm9yaWdpbik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2V0UGFyYW1ldGVyTWVzc2FnZShlKSB7XHJcbiAgICAgICAgdmFyIHVwZGF0ZU9iamVjdHMgPSBbXTtcclxuICAgICAgICB2YXIgcGFyYW1ldGVycyA9IEpTT04ucGFyc2UoZS5tZXNzYWdlLnBhcmFtZXRlcnMpO1xyXG4gICAgICAgIE9iamVjdC5rZXlzKHBhcmFtZXRlcnMpLmZvckVhY2goZnVuY3Rpb24obmFtZSkge1xyXG4gICAgICAgICAgICB2YXIgcGFyYW1ldGVyT2JqZWN0ID0gb3duZXIucGFyYW1ldGVycy5nZXRQYXJhbWV0ZXJCeU5hbWUobmFtZSk7XHJcbiAgICAgICAgICAgIGlmIChwYXJhbWV0ZXJPYmplY3QpIHtcclxuICAgICAgICAgICAgICAgIHBhcmFtZXRlck9iamVjdC5zZXRWYWx1ZShwYXJhbWV0ZXJzW25hbWVdLnZhbHVlLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB1cGRhdGVPYmplY3RzLnB1c2gobmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gdXBkYXRlT2JqZWN0cztcclxuICAgIH1cclxuXHJcbiAgICB2YXIgd2luZG93TWVzc2FnZUxpc3QgPSBbXTtcclxuICAgIHZhciBsaXN0ZW5lcjtcclxuICAgIHZhciBzdGF0ZSA9IDA7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIixmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgaWYgKCF3aW5kb3dNZXNzYWdlTGlzdC5pbmNsdWRlcyhlLnNvdXJjZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzd2l0Y2goZS5kYXRhLm1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgY2FzZSBcInNldFBhcmFtZXRlckJ5TmFtZVwiOlxyXG4gICAgICAgICAgICB2YXIgcGFyYW1ldGVyT2JqZWN0O1xyXG4gICAgICAgICAgICAgICAgaWYgKGUuZGF0YS5wYXJhbWV0ZXIubmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtZXRlck9iamVjdCA9IG93bmVyLnBhcmFtZXRlcnMuZ2V0UGFyYW1ldGVyQnlOYW1lKGUuZGF0YS5wYXJhbWV0ZXIubmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBhcmFtZXRlck9iamVjdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhbWV0ZXJPYmplY3Quc2V0VmFsdWUoZS5kYXRhLnBhcmFtZXRlci52YWx1ZSwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicm9hZGNhc3RQYXJhbWV0ZXJVcGRhdGVzKGUuZGF0YS5zZW5kZXJfaWQsIFtwYXJhbWV0ZXJPYmplY3QubmFtZV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwic2V0UGFyYW1ldGVyc0J5T2JqZWN0XCI6XHJcbiAgICAgICAgICAgICAgICBpZiAoZS5kYXRhLnBhcmFtZXRlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB1cGRhdGVPYmplY3RzID0gc2V0UGFyYW1ldGVyTWVzc2FnZShlKTtcclxuICAgICAgICAgICAgICAgICAgICBicm9hZGNhc3RQYXJhbWV0ZXJVcGRhdGVzKGUuZGF0YS5zZW5kZXJfaWQsIHVwZGF0ZU9iamVjdHMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJyZXF1ZXN0UGFyYW1ldGVyc1wiOlxyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBlLmRhdGEubmFtZSA9PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VuZFBhcmFtZXRlclVwZGF0ZXMoZS5zb3VyY2UsIGUuZGF0YS5uYW1lKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VuZFBhcmFtZXRlclVwZGF0ZXMoZS5zb3VyY2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICB0aHJvdyhcIlVua25vd24gbWVzc2FnZSB0eXBlIFxcXCJcIitlLmRhdGEubWVzc2FnZStcIlxcXCJcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xyXG4gICAgICAgIFwidXBkYXRlSW50ZXJmYWNlc1wiOiB7XHJcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24oYXV0b21hdGlvbk9ubHkpIHtcclxuICAgICAgICAgICAgICAgIGlmIChhdXRvbWF0aW9uT25seSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXV0b21hdGlvbk9ubHkgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhciBzb3VyY2VzO1xyXG4gICAgICAgICAgICAgICAgaWYgKGF1dG9tYXRpb25Pbmx5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBhcmFtZXRlck5hbWVzID0gb3duZXIucGFyYW1ldGVycy5nZXRQYXJhbWV0ZXJOYW1lcygpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNvdXJjZXMgPSBwYXJhbWV0ZXJOYW1lcy5maWx0ZXIoZnVuY3Rpb24obmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcGFyYW0gPSBvd25lci5wYXJhbWV0ZXJzLmdldFBhcmFtZXRlckJ5TmFtZShuYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChwYXJhbS5hdXRvbWF0YWJsZSAmJiBwYXJhbS5lbmFibGVkID09PSB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc291cmNlcy5sZW5ndGggPiAwKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJvYWRjYXN0UGFyYW1ldGVyVXBkYXRlcyh1bmRlZmluZWQsIHNvdXJjZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJvYWRjYXN0UGFyYW1ldGVyVXBkYXRlcygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJjbG9zZVdpbmRvd3NcIjoge1xyXG4gICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RhdGUgPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB3aGlsZSh3aW5kb3dNZXNzYWdlTGlzdC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB3ID0gd2luZG93TWVzc2FnZUxpc3QucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHcuY2xvc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93KFwiQ2FubmVsIGFscmVhZHkgY2xvc2VkXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcInJlZ2lzdGVyV2luZG93XCI6IHtcclxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbih3KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAod2luZG93TWVzc2FnZUxpc3QuaW5jbHVkZXModykpIHtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3dNZXNzYWdlTGlzdC5zcGxpY2Uod2luZG93TWVzc2FnZUxpc3QuaW5kZXhPZih3KSwgMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB3aW5kb3dNZXNzYWdlTGlzdC5wdXNoKHcpO1xyXG4gICAgICAgICAgICAgICAgc2VuZFBhcmFtZXRlclVwZGF0ZXModyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJyZW1vdmVXaW5kb3dcIjoge1xyXG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKHcpIHtcclxuICAgICAgICAgICAgICAgIGlmICh3aW5kb3dNZXNzYWdlTGlzdC5pbmNsdWRlcyh3KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvd01lc3NhZ2VMaXN0LnNwbGljZSh3aW5kb3dNZXNzYWdlTGlzdC5pbmRleE9mKHcpLCAxKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IHtCYXNlUGx1Z2lufTtcclxuIiwiaW1wb3J0IHtCYXNlUGx1Z2luLCBTeW50aGVzaXNlckJhc2VQbHVnaW4sIFBsdWdpbkZhY3Rvcnl9IGZyb20gXCIuL3BsdWdpbi1mYWN0b3J5XCI7XHJcblxyXG4oZnVuY3Rpb24ocm9vdCwgZmFjdG9yeSkge1xyXG4gICAgY29uc29sZS5sb2coXCJMb2FkIEpTQVAuLi5cIik7XHJcbiAgICBpZiAodHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImRlZmluZVwiKTtcclxuICAgICAgICBkZWZpbmUoXCJKU0FQXCIsIFtdLCBmYWN0b3J5KTtcclxuICAgIH0gZWxzZSBpZiAodHlwZW9mIG1vZHVsZSA9PSBcIm9iamVjdFwiICYmIG1vZHVsZS5leHBvcnRzKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJtb2R1bGVcIik7XHJcbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZGlyZWN0XCIpO1xyXG4gICAgICAgIGlmIChyb290ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcm9vdCA9IHdpbmRvdztcclxuICAgICAgICB9XHJcbiAgICAgICAgcm9vdC5KU0FQID0gZmFjdG9yeSgpO1xyXG4gICAgfVxyXG59KSh0aGlzLCBmdW5jdGlvbigpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiZmFjdG9yeVwiKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgUGx1Z2luRmFjdG9yeTogUGx1Z2luRmFjdG9yeSxcclxuICAgICAgICBCYXNlUGx1Z2luOiBCYXNlUGx1Z2luLFxyXG4gICAgICAgIFN5bnRoZXNpc2VyQmFzZVBsdWdpbjogU3ludGhlc2lzZXJCYXNlUGx1Z2luXHJcbiAgICB9O1xyXG59KTtcclxuIiwiLyoganNoaW50IGVzdmVyc2lvbjogNiAqL1xyXG5pbXBvcnQge051bWJlclBhcmFtZXRlcn0gZnJvbSBcIi4vcGFyYW1ldGVycy9OdW1iZXJQYXJhbWV0ZXIuanNcIjtcclxuaW1wb3J0IHtTdHJpbmdQYXJhbWV0ZXJ9IGZyb20gXCIuL3BhcmFtZXRlcnMvU3RyaW5nUGFyYW1ldGVyLmpzXCI7XHJcbmltcG9ydCB7QnV0dG9uUGFyYW1ldGVyfSBmcm9tIFwiLi9wYXJhbWV0ZXJzL0J1dHRvblBhcmFtZXRlci5qc1wiO1xyXG5pbXBvcnQge1N3aXRjaFBhcmFtZXRlcn0gZnJvbSBcIi4vcGFyYW1ldGVycy9Td2l0Y2hQYXJhbWV0ZXIuanNcIjtcclxuaW1wb3J0IHtMaXN0UGFyYW1ldGVyfSBmcm9tIFwiLi9wYXJhbWV0ZXJzL0xpc3RQYXJhbWV0ZXIuanNcIjtcclxuXHJcbnZhciBQYXJhbWV0ZXJNYW5hZ2VyID0gZnVuY3Rpb24gKG93bmVyLCBwbHVnaW5FeHRlcm5hbEludGVyZmFjZSkge1xyXG4gICAgdmFyIHBhcmFtZXRlckxpc3QgPSBbXTtcclxuICAgIHZhciBldmVudFRhcmdldCA9IG5ldyBFdmVudFRhcmdldCgpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGZpbmRQYXJhbWV0ZXIobmFtZSkge1xyXG4gICAgICAgIHJldHVybiBwYXJhbWV0ZXJMaXN0LmZpbmQoZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGUubmFtZS50b0xvd2VyQ2FzZSgpID09PSBuYW1lLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZmluZFBhcmFtZXRlckluZGV4KG5hbWUpIHtcclxuICAgICAgICByZXR1cm4gcGFyYW1ldGVyTGlzdC5maW5kSW5kZXgoZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGUubmFtZS50b0xvd2VyQ2FzZSgpID09PSBuYW1lLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYnVpbGRQYXJhbWV0ZXJPYmplY3QoKSB7XHJcbiAgICAgICAgdmFyIG9iaiA9IHt9O1xyXG4gICAgICAgIHBhcmFtZXRlckxpc3QuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBvYmpbZS5uYW1lXSA9IGU7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIG9iajtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBhZGRQYXJhbWV0ZXIocGFyYW0sIHNlbGYpIHtcclxuICAgICAgICB2YXIgZXhpc3RzID0gcGFyYW1ldGVyTGlzdC5maW5kSW5kZXgoZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGUgPT09IHBhcmFtO1xyXG4gICAgICAgIH0sIHBhcmFtKTtcclxuICAgICAgICBpZiAoZXhpc3RzID09PSAtMSkge1xyXG4gICAgICAgICAgICBwYXJhbS5hZGRFdmVudExpc3RlbmVyKFwicGFyYW1ldGVyc2V0XCIsIHNlbGYpO1xyXG4gICAgICAgICAgICBwYXJhbWV0ZXJMaXN0LnB1c2gocGFyYW0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcGFyYW07XHJcbiAgICB9XHJcblxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xyXG4gICAgICAgIFwiYWRkRXZlbnRMaXN0ZW5lclwiOiB7XHJcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24odHlwZSwgbGlzdGVuZXIsIG9wdGlvbnMpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBldmVudFRhcmdldC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyLCBvcHRpb25zKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJyZW1vdmVFdmVudExpc3RlbmVyXCI6IHtcclxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbih0eXBlLCBsaXN0ZW5lciwgb3B0aW9ucykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGV2ZW50VGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXIsIG9wdGlvbnMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImhhbmRsZUV2ZW50XCI6IHtcclxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZGV0YWlsID0gZS5kZXRhaWw7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGV0YWlsLnVwZGF0ZUludGVyZmFjZXMgIT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGx1Z2luRXh0ZXJuYWxJbnRlcmZhY2UudXBkYXRlSW50ZXJmYWNlcygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGUudHlwZSA9PSBcInBhcmFtZXRlcnNldFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRUYXJnZXQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJwYXJhbWV0ZXJzZXRcIiwge2RldGFpbDogZGV0YWlsLnBhcmFtZXRlcn0pKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJ2NyZWF0ZU51bWJlclBhcmFtZXRlcic6IHtcclxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAobmFtZSwgZGVmYXVsdFZhbHVlLCBtaW5pbXVtLCBtYXhpbXVtLCB0b1N0cmluZ0Z1bmMpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbmFtZSAhPT0gXCJzdHJpbmdcIiB8fCB0eXBlb2YgZGVmYXVsdFZhbHVlICE9PSBcIm51bWJlclwiIHx8IChtaW5pbXVtICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIG1pbmltdW0gIT09IFwibnVtYmVyXCIpIHx8IChtYXhpbXVtICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIG1heGltdW0gIT09IFwibnVtYmVyXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgKFwiSW52bGlkIGNvbnN0cnVjdG9yXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0b1N0cmluZ0Z1bmMgIT0gXCJmdW5jdGlvblwiICYmIHRvU3RyaW5nRnVuYyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgKFwidG9TdHJpbmdGdW5jIG11c3QgYmUgYSBmdW5jdGlvbiBvciB1bmRlZmluZWRcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoZmluZFBhcmFtZXRlckluZGV4KG5hbWUpICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IChcIlBhcmFtZXRlciB3aXRoIG5hbWUgJ1wiICsgbmFtZSArIFwiJyBhbHJlYWR5IGV4aXN0c1wiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhciBwYXJhbSA9IG5ldyBOdW1iZXJQYXJhbWV0ZXIob3duZXIsIG5hbWUsIGRlZmF1bHRWYWx1ZSwgbWluaW11bSwgbWF4aW11bSwgdG9TdHJpbmdGdW5jKTtcclxuICAgICAgICAgICAgICAgIGFkZFBhcmFtZXRlcihwYXJhbSwgdGhpcyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcGFyYW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgICdjcmVhdGVTdHJpbmdQYXJhbWV0ZXInOiB7XHJcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKG5hbWUsIGRlZmF1bHRWYWx1ZSwgbWF4TGVuZ3RoLCB0b1N0cmluZ0Z1bmMpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbmFtZSAhPT0gXCJzdHJpbmdcIiB8fCB0eXBlb2YgZGVmYXVsdFZhbHVlICE9PSBcInN0cmluZ1wiIHx8IChtYXhMZW5ndGggIT09IHVuZGVmaW5lZCAmJiB0eXBlb2YgbWF4TGVuZ3RoICE9PSBcIm51bWJlclwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IChcIkludmxpZCBjb25zdHJ1Y3RvclwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdG9TdHJpbmdGdW5jICE9IFwiZnVuY3Rpb25cIiAmJiB0b1N0cmluZ0Z1bmMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IChcInRvU3RyaW5nRnVuYyBtdXN0IGJlIGEgZnVuY3Rpb24gb3IgdW5kZWZpbmVkXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGZpbmRQYXJhbWV0ZXJJbmRleChuYW1lKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyAoXCJQYXJhbWV0ZXIgd2l0aCBuYW1lICdcIiArIG5hbWUgKyBcIicgYWxyZWFkeSBleGlzdHNcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2YXIgcGFyYW0gPSBuZXcgU3RyaW5nUGFyYW1ldGVyKG93bmVyLCBuYW1lLCBkZWZhdWx0VmFsdWUsIG1heExlbmd0aCwgdG9TdHJpbmdGdW5jKTtcclxuICAgICAgICAgICAgICAgIGFkZFBhcmFtZXRlcihwYXJhbSwgdGhpcyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcGFyYW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgICdjcmVhdGVCdXR0b25QYXJhbWV0ZXInOiB7XHJcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKG5hbWUpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbmFtZSAhPT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IChcIkludmFsaWQgY29uc3RydWN0b3JcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoZmluZFBhcmFtZXRlckluZGV4KG5hbWUpICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IChcIlBhcmFtZXRlciB3aXRoIG5hbWUgJ1wiICsgbmFtZSArIFwiJyBhbHJlYWR5IGV4aXN0c1wiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhciBwYXJhbSA9IG5ldyBCdXR0b25QYXJhbWV0ZXIob3duZXIsIG5hbWUpO1xyXG4gICAgICAgICAgICAgICAgYWRkUGFyYW1ldGVyKHBhcmFtLCB0aGlzKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBwYXJhbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJ2NyZWF0ZVN3aXRjaFBhcmFtZXRlcic6IHtcclxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAobmFtZSwgZGVmYXVsdFZhbHVlLCBtaW5TdGF0ZSwgbWF4U3RhdGUsIHRvU3RyaW5nRnVuYykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBuYW1lICE9PSBcInN0cmluZ1wiIHx8IHR5cGVvZiBkZWZhdWx0VmFsdWUgIT09IFwibnVtYmVyXCIgfHwgdHlwZW9mIG1pblN0YXRlICE9PSBcIm51bWJlclwiIHx8IHR5cGVvZiBtYXhTdGF0ZSAhPT0gXCJudW1iZXJcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IChcIkludmxpZCBjb25zdHJ1Y3RvclwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdG9TdHJpbmdGdW5jICE9IFwiZnVuY3Rpb25cIiAmJiB0b1N0cmluZ0Z1bmMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IChcInRvU3RyaW5nRnVuYyBtdXN0IGJlIGEgZnVuY3Rpb24gb3IgdW5kZWZpbmVkXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGZpbmRQYXJhbWV0ZXJJbmRleChuYW1lKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyAoXCJQYXJhbWV0ZXIgd2l0aCBuYW1lICdcIiArIG5hbWUgKyBcIicgYWxyZWFkeSBleGlzdHNcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2YXIgcGFyYW0gPSBuZXcgU3dpdGNoUGFyYW1ldGVyKG93bmVyLCBuYW1lLCBkZWZhdWx0VmFsdWUsIG1pblN0YXRlLCBtYXhTdGF0ZSwgdG9TdHJpbmdGdW5jKTtcclxuICAgICAgICAgICAgICAgIGFkZFBhcmFtZXRlcihwYXJhbSwgdGhpcyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcGFyYW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgICdjcmVhdGVMaXN0UGFyYW1ldGVyJzoge1xyXG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uIChuYW1lLCBkZWZhdWx0VmFsdWUsIGxpc3RPZlZhbHVlcywgdG9TdHJpbmdGdW5jKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG5hbWUgIT09IFwic3RyaW5nXCIgfHwgdHlwZW9mIGRlZmF1bHRWYWx1ZSA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhQXJyYXkuaXNBcnJheShsaXN0T2ZWYWx1ZXMpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgKFwiSW52bGlkIGNvbnN0cnVjdG9yXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0b1N0cmluZ0Z1bmMgIT0gXCJmdW5jdGlvblwiICYmIHRvU3RyaW5nRnVuYyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgKFwidG9TdHJpbmdGdW5jIG11c3QgYmUgYSBmdW5jdGlvbiBvciB1bmRlZmluZWRcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAobGlzdE9mVmFsdWVzLmluY2x1ZGVzKGRlZmF1bHRWYWx1ZSkgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgKFwiSW52bGlkIGNvbnN0cnVjdG9yIC0gZGVmYXVsdCB2YWx1ZSBtaXNzaW5nXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGZpbmRQYXJhbWV0ZXJJbmRleChuYW1lKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyAoXCJQYXJhbWV0ZXIgd2l0aCBuYW1lICdcIiArIG5hbWUgKyBcIicgYWxyZWFkeSBleGlzdHNcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2YXIgcGFyYW0gPSBuZXcgTGlzdFBhcmFtZXRlcihvd25lciwgbmFtZSwgZGVmYXVsdFZhbHVlLCBsaXN0T2ZWYWx1ZXMsIHRvU3RyaW5nRnVuYyk7XHJcbiAgICAgICAgICAgICAgICBhZGRQYXJhbWV0ZXIocGFyYW0sIHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhcmFtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICAnY3JlYXRlUGFyYW1ldGVyJzoge1xyXG4gICAgICAgICAgICAndmFsdWUnOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyAoXCJUaGlzIGZ1bmN0aW9uIGlzIG5vdyBkZXByZWNhdGVkXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICAnZ2V0UGFyYW1ldGVyTmFtZSc6IHtcclxuICAgICAgICAgICAgJ3ZhbHVlJzogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIG5hbWVzID0gW10sXHJcbiAgICAgICAgICAgICAgICAgICAgaTtcclxuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBwYXJhbWV0ZXJMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZXMucHVzaChwYXJhbWV0ZXJMaXN0W2ldLm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5hbWVzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICAnZ2V0UGFyYW1ldGVyQnlOYW1lJzoge1xyXG4gICAgICAgICAgICAndmFsdWUnOiBmdW5jdGlvbiAobmFtZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZpbmRQYXJhbWV0ZXIobmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgICdnZXRQYXJhbWV0ZXJPYmplY3QnOiB7XHJcbiAgICAgICAgICAgICd2YWx1ZSc6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBidWlsZFBhcmFtZXRlck9iamVjdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICAnZ2V0UGFyYW1ldGVyTmFtZXMnOiB7XHJcbiAgICAgICAgICAgICd2YWx1ZSc6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBsID0gW107XHJcbiAgICAgICAgICAgICAgICBwYXJhbWV0ZXJMaXN0LmZvckVhY2goZnVuY3Rpb24gKGEpIHtcclxuICAgICAgICAgICAgICAgICAgICBsLnB1c2goYS5uYW1lKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgICdzZXRQYXJhbWV0ZXJCeU5hbWUnOiB7XHJcbiAgICAgICAgICAgICd2YWx1ZSc6IGZ1bmN0aW9uIChuLCB2LCB1cGRhdGVJbnRlcmZhY2VzKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcGFyYW1ldGVyID0gZmluZFBhcmFtZXRlcihuKTtcclxuICAgICAgICAgICAgICAgIGlmICghcGFyYW1ldGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcGFyYW1ldGVyLnNldFZhbHVlKHYsIHVwZGF0ZUludGVyZmFjZXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICAnZGVsZXRlUGFyYW1ldGVyJzoge1xyXG4gICAgICAgICAgICAndmFsdWUnOiBmdW5jdGlvbiAobykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGluZGV4ID0gcGFyYW1ldGVyTGlzdC5maW5kSW5kZXgoZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZSA9PT0gbztcclxuICAgICAgICAgICAgICAgIH0sIG8pO1xyXG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID49IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBEb2VzIGV4aXN0XHJcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1ldGVyTGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIG8uZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICAnZGVsZXRlQWxsUGFyYW1ldGVycyc6IHtcclxuICAgICAgICAgICAgJ3ZhbHVlJzogZnVuY3Rpb24gKG8pIHtcclxuICAgICAgICAgICAgICAgIHBhcmFtZXRlckxpc3QuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGUuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBwYXJhbWV0ZXJMaXN0ID0gW107XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJ3NldFBhcmFtZXRlcnNCeU9iamVjdCc6IHtcclxuICAgICAgICAgICAgJ3ZhbHVlJzogZnVuY3Rpb24gKG9iamVjdCwgdXBkYXRlSW50ZXJmYWNlcykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGtleTtcclxuICAgICAgICAgICAgICAgIGZvciAoa2V5IGluIG9iamVjdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvYmplY3QuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG9iamVjdFtrZXldID09IFwib2JqZWN0XCIpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFBhcmFtZXRlckJ5TmFtZShrZXksIG9iamVjdFtrZXldLnZhbHVlLCB1cGRhdGVJbnRlcmZhY2VzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2Ygb2JqZWN0W2tleV0gPT0gXCJudW1iZXJcIiB8fCB0eXBlb2Ygb2JqZWN0W2tleV0gPT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRQYXJhbWV0ZXJCeU5hbWUoa2V5LCBvYmplY3Rba2V5XSwgdXBkYXRlSW50ZXJmYWNlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyAoXCJDYW5ub3Qgc2V0IFwiICsga2V5ICsgXCI6IE5vdCBhIHZhbGlkIG9iamVjdFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJ3BhcmFtZXRlcnMnOiB7XHJcbiAgICAgICAgICAgICdnZXQnOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYnVpbGRQYXJhbWV0ZXJPYmplY3QoKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgJ3NldCc6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IChcIkNhbm5vdCBzZXQsIHVzZSAuc2V0UGFyYW1ldGVyQnkuLi4oKVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IHtQYXJhbWV0ZXJNYW5hZ2VyfTtcclxuIiwiLyoganNoaW50IGVzdmVyc2lvbjogNiAqL1xyXG5pbXBvcnQge1BsdWdpblBhcmFtZXRlcn0gZnJvbSBcIi4vUGx1Z2luUGFyYW1ldGVyLmpzXCI7XHJcblxyXG5mdW5jdGlvbiBCdXR0b25QYXJhbWV0ZXIob3duZXIsIG5hbWUpIHtcclxuICAgIFBsdWdpblBhcmFtZXRlci5jYWxsKHRoaXMsIG93bmVyLCBuYW1lLCBcIkJ1dHRvblwiKTtcclxuICAgIHZhciBvbmNsaWNrID0gZnVuY3Rpb24gKCkge307XHJcblxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xyXG4gICAgICAgIFwidHlwZVwiOiB7XHJcbiAgICAgICAgICAgIFwidmFsdWVcIjogXCJCdXR0b25cIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJkZXN0cm95XCI6IHtcclxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBvd25lciA9IG5hbWUgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFwib25jbGlja1wiOiB7XHJcbiAgICAgICAgICAgIFwiZ2V0XCI6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBvbmNsaWNrO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcInNldFwiOiBmdW5jdGlvbiAoZikge1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBmICE9PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyAoXCJvbmNsaWNrIG11c3QgYmUgYSBmdW5jdGlvblwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIG9uY2xpY2sgPSBmO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuQnV0dG9uUGFyYW1ldGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoUGx1Z2luUGFyYW1ldGVyLnByb3RvdHlwZSk7XHJcbkJ1dHRvblBhcmFtZXRlci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBCdXR0b25QYXJhbWV0ZXI7XHJcblxyXG5leHBvcnQge0J1dHRvblBhcmFtZXRlcn07XHJcbiIsIi8qIGpzaGludCBlc3ZlcnNpb246IDYgKi9cclxuaW1wb3J0IHtQbHVnaW5QYXJhbWV0ZXJ9IGZyb20gXCIuL1BsdWdpblBhcmFtZXRlci5qc1wiO1xyXG5pbXBvcnQge1BhcmFtZXRlclN0ZXBBdXRvbWF0aW9ufSBmcm9tIFwiLi9QYXJhbWV0ZXJBdXRvbWF0aW9uLmpzXCI7XHJcblxyXG5mdW5jdGlvbiBMaXN0UGFyYW1ldGVyKG93bmVyLCBuYW1lLCBkZWZhdWx0VmFsdWUsIGxpc3RPZlZhbHVlcywgdG9TdHJpbmdGdW5jKSB7XHJcbiAgICBQbHVnaW5QYXJhbWV0ZXIuY2FsbCh0aGlzLCBvd25lciwgbmFtZSwgXCJCdXR0b25cIik7XHJcbiAgICB2YXIgYXVkaW9QYXJhbWV0ZXIsIGF1dG9tYXRpb247XHJcbiAgICB2YXIgb25jbGljayA9IGZ1bmN0aW9uICgpIHt9O1xyXG4gICAgdmFyIF9pbmRleCA9IGxpc3RPZlZhbHVlcy5pbmRleE9mKGRlZmF1bHRWYWx1ZSk7XHJcblxyXG4gICAgZnVuY3Rpb24gc2V0Vih2LCB1cGRhdGVJbnRlcmZhY2VzKSB7XHJcbiAgICAgICAgdmFyIGkgPSBsaXN0T2ZWYWx1ZXMuaW5kZXhPZih2KTtcclxuICAgICAgICBpZiAoaSA9PT0gdW5kZWZpbmVkIHx8IGkgPCAwKSB7XHJcbiAgICAgICAgICAgIHRocm93KFwiTm90IGluIGxpc3QgcmFuZ2VcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmJvdW5kQXVkaW9QYXJhbSkge1xyXG4gICAgICAgICAgICB0aGlzLmJvdW5kQXVkaW9QYXJhbS52YWx1ZSA9IHRoaXMudXBkYXRlKHYpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoX2luZGV4ICE9PSBpKSB7XHJcbiAgICAgICAgICAgIF9pbmRleCA9IGk7XHJcbiAgICAgICAgICAgIHRoaXMudHJpZ2dlclBhcmFtZXRlclNldCh1cGRhdGVJbnRlcmZhY2VzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy50cmlnZ2VyKCk7XHJcbiAgICAgICAgcmV0dXJuIGxpc3RPZlZhbHVlc1tfaW5kZXhdO1xyXG4gICAgfVxyXG5cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcclxuICAgICAgICBcInR5cGVcIjoge1xyXG4gICAgICAgICAgICBcInZhbHVlXCI6IFwiTGlzdFwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImRlc3Ryb3lcIjoge1xyXG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIG93bmVyID0gbmFtZSA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJkZWZhdWx0VmFsdWVcIjoge1xyXG4gICAgICAgICAgICBcInZhbHVlXCI6IGRlZmF1bHRWYWx1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJsaXN0VmFsdWVzXCI6IHtcclxuICAgICAgICAgICAgXCJnZXRcIjogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbGlzdE9mVmFsdWVzLm1hcChmdW5jdGlvbih2KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHY7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJ2YWx1ZVwiOiB7XHJcbiAgICAgICAgICAgIFwiZ2V0XCI6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGlmIChhdWRpb1BhcmFtZXRlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRyYW5zbGF0ZShhdWRpb1BhcmFtZXRlci52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbGlzdE9mVmFsdWVzW19pbmRleF07XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwic2V0XCI6IGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc2V0Vi5jYWxsKHRoaXMsIHYsIHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcInNldFZhbHVlXCI6IHtcclxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbih2LCB1cGRhdGVJbnRlcmZhY2VzKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc2V0Vi5jYWxsKHRoaXMsIHYsIHVwZGF0ZUludGVyZmFjZXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImluY3JlbWVudFwiOiB7XHJcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHYgPSBfaW5kZXggKyAxO1xyXG4gICAgICAgICAgICAgICAgaWYgKHYgPj0gbGlzdE9mVmFsdWVzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHYgPSAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNldFYuY2FsbCh0aGlzLCB2KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJkZWNyZW1lbnRcIjoge1xyXG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHZhciB2ID0gX2luZGV4IC0gMTtcclxuICAgICAgICAgICAgICAgIGlmICh2IDwgMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHYgPSBsaXN0T2ZWYWx1ZXMubGVuZ3RoLTE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc2V0Vi5jYWxsKHRoaXMsIHYpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImJpbmRUb0F1ZGlvUGFyYW1cIjoge1xyXG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uIChhcCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBhcCA9PSBcIm9iamVjdFwiICYmIGFwLnZhbHVlICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGF1ZGlvUGFyYW1ldGVyID0gYXA7XHJcbiAgICAgICAgICAgICAgICAgICAgYXVkaW9QYXJhbWV0ZXIudmFsdWUgPSB0aGlzLnVwZGF0ZShfdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhcC5zZXRWYWx1ZUF0VGltZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRvbWF0aW9uID0gbmV3IFBhcmFtZXRlclN0ZXBBdXRvbWF0aW9uKHRoaXMsIGF1ZGlvUGFyYW1ldGVyLCAwLCBsaXN0VmFsdWVzLmxlbmd0aCwgdG9TdHJpbmdGdW5jKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJnZXRWYWx1ZUF0VGltZVBvaW50XCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKHRpbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYXV0b21hdGlvblBvaW50cy5nZXRWYWx1ZUF0VGltZVBvaW50KHRpbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImF1dG9tYXRpb25Qb2ludHNcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogYXV0b21hdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3RhcnRcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24odGltZSwgY29udGV4dFRpbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGF1dG9tYXRpb24uc3RhcnQodGltZSwgY29udGV4dFRpbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN0b3BcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24oY29udGV4dFRpbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b21hdGlvbi5zdG9wKGNvbnRleHRUaW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJlbmFibGVkXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImdldFwiOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGF1dG9tYXRpb24uZW5hYmxlZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2V0XCI6IGZ1bmN0aW9uKHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChhdXRvbWF0aW9uLmVuYWJsZWQgPSB0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIkNhbm5vdCBiaW5kIGF1dG9tYXRpb24gYXMgQXVkaW9QYXJhbWV0ZXIgaXMgbm90IGF1dG9tYXRhYmxlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3coXCJBcmd1bWVudCAxIGlzIG5vdCBhIHZhbGlkIEF1ZGlvUGFyYW1ldGVyIG9iamVjdFwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJib3VuZEF1ZGlvUGFyYW1cIjoge1xyXG4gICAgICAgICAgICBcImNvbmZpZ3VyYWJsZVwiOiB0cnVlLFxyXG4gICAgICAgICAgICBcImdldFwiOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYXVkaW9QYXJhbWV0ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiYXV0b21hdGFibGVcIjoge1xyXG4gICAgICAgICAgICBcImdldFwiOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHlwZW9mIGF1dG9tYXRpb24gPT0gXCJvYmplY3RcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJ0b1N0cmluZ1wiOiB7XHJcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24odikge1xyXG4gICAgICAgICAgICAgICAgaWYgKHYgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdiA9IHRoaXMudmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRvU3RyaW5nRnVuYyA9PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdG9TdHJpbmdGdW5jLmNhbGwodGhpcywgdik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBTdHJpbmcodik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5MaXN0UGFyYW1ldGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoUGx1Z2luUGFyYW1ldGVyLnByb3RvdHlwZSk7XHJcbkxpc3RQYXJhbWV0ZXIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gTGlzdFBhcmFtZXRlcjtcclxuXHJcbmV4cG9ydCB7TGlzdFBhcmFtZXRlcn07XHJcbiIsIi8qIGpzaGludCBlc3ZlcnNpb246IDYgKi9cclxuaW1wb3J0IHtQbHVnaW5QYXJhbWV0ZXJ9IGZyb20gXCIuL1BsdWdpblBhcmFtZXRlci5qc1wiO1xyXG5pbXBvcnQge1BhcmFtZXRlckxpbmVhckF1dG9tYXRpb259IGZyb20gXCIuL1BhcmFtZXRlckF1dG9tYXRpb24uanNcIjtcclxuXHJcbmZ1bmN0aW9uIE51bWJlclBhcmFtZXRlcihvd25lciwgbmFtZSwgZGVmYXVsdFZhbHVlLCBtaW5pbXVtLCBtYXhpbXVtLCB0b1N0cmluZ0Z1bmMpIHtcclxuICAgIFBsdWdpblBhcmFtZXRlci5jYWxsKHRoaXMsIG93bmVyLCBuYW1lLCBcIk51bWJlclwiKTtcclxuICAgIHZhciBhdWRpb1BhcmFtZXRlciwgYXV0b21hdGlvbjtcclxuICAgIHZhciBfdmFsdWUgPSBkZWZhdWx0VmFsdWUsXHJcbiAgICAgICAgX3N0ZXBTaXplO1xyXG5cclxuICAgIGZ1bmN0aW9uIHNldFZhbHVlKHYsIHVwZGF0ZUludGVyZmFjZXMpXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKGF1dG9tYXRpb24gJiYgYXV0b21hdGlvbi5lbmFibGVkKSB7XHJcbiAgICAgICAgICAgIHRocm93KFwiQXV0b21hdGlvbiBpcyBlbmFibGVkLCBjYW5ub3Qgc2V0IHRoZSB2YWx1ZSFcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm1pbmltdW0pIHtcclxuICAgICAgICAgICAgdiA9IE1hdGgubWF4KHYsIHRoaXMubWluaW11bSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm1heGltdW0pIHtcclxuICAgICAgICAgICAgdiA9IE1hdGgubWluKHYsIHRoaXMubWF4aW11bSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChfc3RlcFNpemUpIHtcclxuICAgICAgICAgICAgdiA9IE1hdGgucm91bmQodiAvIF9zdGVwU2l6ZSk7XHJcbiAgICAgICAgICAgIHYgPSB2ICogX3N0ZXBTaXplO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2ID0gdGhpcy51cGRhdGUodik7XHJcbiAgICAgICAgaWYgKGF1ZGlvUGFyYW1ldGVyKSB7XHJcbiAgICAgICAgICAgIGlmIChhdXRvbWF0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICBhdWRpb1BhcmFtZXRlci5zZXRWYWx1ZUF0VGltZSh2LCBvd25lci5mYWN0b3J5LmNvbnRleHQuY3VycmVudFRpbWUpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYXVkaW9QYXJhbWV0ZXIudmFsdWUgPSB2O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChfdmFsdWUgIT09IHYpIHtcclxuICAgICAgICAgICAgX3ZhbHVlID0gdjtcclxuICAgICAgICAgICAgdGhpcy50cmlnZ2VyUGFyYW1ldGVyU2V0KHVwZGF0ZUludGVyZmFjZXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnRyaWdnZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XHJcbiAgICAgICAgXCJ0eXBlXCI6IHtcclxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIk51bWJlclwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImRlc3Ryb3lcIjoge1xyXG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIG93bmVyID0gbmFtZSA9IGRlZmF1bHRWYWx1ZSA9IG1pbmltdW0gPSBtYXhpbXVtID0gX3ZhbHVlID0gX3N0ZXBTaXplID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIm1pbmltdW1cIjoge1xyXG4gICAgICAgICAgICBcInZhbHVlXCI6IG1pbmltdW1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFwibWF4aW11bVwiOiB7XHJcbiAgICAgICAgICAgIFwidmFsdWVcIjogbWF4aW11bVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJkZWZhdWx0VmFsdWVcIjoge1xyXG4gICAgICAgICAgICBcInZhbHVlXCI6IGRlZmF1bHRWYWx1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJ2YWx1ZVwiOiB7XHJcbiAgICAgICAgICAgIFwiZ2V0XCI6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGlmIChhdWRpb1BhcmFtZXRlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhdXRvbWF0aW9uICYmIGF1dG9tYXRpb24ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdCA9IG93bmVyLmZhY3RvcnkuZ2V0Q3VycmVudFByb2dyYW1UaW1lKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhdXRvbWF0aW9uLmdldEN1cnJlbnRUaW1lVmFsdWUodCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRyYW5zbGF0ZShfdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIF92YWx1ZTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJzZXRcIjogZnVuY3Rpb24gKHYpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzZXRWYWx1ZS5jYWxsKHRoaXMsIHYsIHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcInNldFZhbHVlXCI6IHtcclxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbih2LCB1cGRhdGVJbnRlcmZhY2VzKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc2V0VmFsdWUuY2FsbCh0aGlzLCB2LCB1cGRhdGVJbnRlcmZhY2VzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJzdGVwU2l6ZVwiOiB7XHJcbiAgICAgICAgICAgIFwiZ2V0XCI6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBfc3RlcFNpemU7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwic2V0XCI6IGZ1bmN0aW9uIChuKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWlzRmluaXRlKG4pIHx8IG4gPCAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgKFwiSW52YWxpZCBzdGVwIHNpemVcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBfc3RlcFNpemUgPSBuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImJpbmRUb0F1ZGlvUGFyYW1cIjoge1xyXG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uIChhcCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBhcCA9PSBcIm9iamVjdFwiICYmIGFwLnZhbHVlICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGF1ZGlvUGFyYW1ldGVyID0gYXA7XHJcbiAgICAgICAgICAgICAgICAgICAgYXVkaW9QYXJhbWV0ZXIudmFsdWUgPSB0aGlzLnVwZGF0ZShfdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhcC5zZXRWYWx1ZUF0VGltZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRvbWF0aW9uID0gbmV3IFBhcmFtZXRlckxpbmVhckF1dG9tYXRpb24odGhpcywgYXVkaW9QYXJhbWV0ZXIsIG1pbmltdW0sIG1heGltdW0sIHRvU3RyaW5nRnVuYyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZ2V0VmFsdWVBdFRpbWVQb2ludFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbih0aW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmF1dG9tYXRpb25Qb2ludHMuZ2V0VmFsdWVBdFRpbWVQb2ludCh0aW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdXRvbWF0aW9uUG9pbnRzXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGF1dG9tYXRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN0YXJ0XCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKHRpbWUsIGNvbnRleHRUaW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhdXRvbWF0aW9uLnN0YXJ0KHRpbWUsIGNvbnRleHRUaW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdG9wXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKGNvbnRleHRUaW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9tYXRpb24uc3RvcChjb250ZXh0VGltZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZW5hYmxlZFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJnZXRcIjogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhdXRvbWF0aW9uLmVuYWJsZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNldFwiOiBmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoYXV0b21hdGlvbi5lbmFibGVkID0gdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCJDYW5ub3QgYmluZCBhdXRvbWF0aW9uIGFzIEF1ZGlvUGFyYW1ldGVyIGlzIG5vdCBhdXRvbWF0YWJsZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93KFwiQXJndW1lbnQgMSBpcyBub3QgYSB2YWxpZCBBdWRpb1BhcmFtZXRlciBvYmplY3RcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiYm91bmRBdWRpb1BhcmFtXCI6IHtcclxuICAgICAgICAgICAgXCJjb25maWd1cmFibGVcIjogdHJ1ZSxcclxuICAgICAgICAgICAgXCJnZXRcIjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGF1ZGlvUGFyYW1ldGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImF1dG9tYXRhYmxlXCI6IHtcclxuICAgICAgICAgICAgXCJnZXRcIjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHR5cGVvZiBhdXRvbWF0aW9uID09IFwib2JqZWN0XCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFwidG9TdHJpbmdcIjoge1xyXG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKHYpIHtcclxuICAgICAgICAgICAgICAgIGlmICh2ID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHYgPSB0aGlzLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0b1N0cmluZ0Z1bmMgPT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRvU3RyaW5nRnVuYy5jYWxsKHRoaXMsIHYpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gU3RyaW5nKHYpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuTnVtYmVyUGFyYW1ldGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoUGx1Z2luUGFyYW1ldGVyLnByb3RvdHlwZSk7XHJcbk51bWJlclBhcmFtZXRlci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBOdW1iZXJQYXJhbWV0ZXI7XHJcblxyXG5leHBvcnQge051bWJlclBhcmFtZXRlcn07XHJcbiIsIi8qIGpzaGludCBlc3ZlcnNpb246IDYgKi9cclxudmFyIFRpbWVQb2ludCA9IGZ1bmN0aW9uKG93bmVyLCB0aW1lLCB2YWx1ZSwgdG9TdHJpbmdGdW5jKSB7XHJcbiAgICBpZiAodHlwZW9mIHRpbWUgIT0gXCJudW1iZXJcIiB8fCAhaXNGaW5pdGUodGltZSkgfHwgdGltZSA8IDApIHtcclxuICAgICAgICB0aHJvdyhcIkludmFsaWQgQ29uc3RydWN0b3I6IFRpbWUgbXVzdCBiZSBhIHBvc2l0aXZlIG51bWJlclwiKTtcclxuICAgIH1cclxuICAgIGlmICh0eXBlb2YgdmFsdWUgIT0gXCJudW1iZXJcIiB8fCAhaXNGaW5pdGUodmFsdWUpKSB7XHJcbiAgICAgICAgdGhyb3coXCJJbnZhbGlkIENvbnN0cnVjdG9yOiBWYWx1ZSBtdXN0IGJlIGEgbnVtYmVyXCIpO1xyXG4gICAgfVxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xyXG4gICAgICAgIFwidGltZVwiOiB7XHJcbiAgICAgICAgICAgIFwiZ2V0XCI6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRpbWU7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwic2V0XCI6IGZ1bmN0aW9uKHQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNldFRpbWUodCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFwidmFsdWVcIjoge1xyXG4gICAgICAgICAgICBcImdldFwiOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJzZXRcIjogZnVuY3Rpb24odikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2V0VmFsdWUodik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFwic2V0VmFsdWVcIjoge1xyXG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKHYpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdiAhPSBcIm51bWJlclwiIHx8ICFpc0Zpbml0ZSh2KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93KFwiVmFsdWUgbXVzdCBiZSBhIG51bWJlclwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhbHVlID0gTWF0aC5taW4oTWF0aC5tYXgodiwgb3duZXIubWluaW11bSksIG93bmVyLm1heGltdW0pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcInNldFRpbWVcIjoge1xyXG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKHQpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdCA9PSBcIm51bWJlclwiICYmIGlzRmluaXRlKHQpICYmIHQgPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpbWUgPSB0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRpbWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFwidG9TdHJpbmdcIjoge1xyXG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0b1N0cmluZ0Z1bmMgPT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRvU3RyaW5nRnVuYy5jYWxsKHRoaXMsIHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBTdHJpbmcodmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIm93bmVyXCI6IHtcclxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBvd25lclxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59O1xyXG5cclxudmFyIFRpbWVQb2ludExpc3QgPSBmdW5jdGlvbihtaW5fdmFsdWUsIG1heF92YWx1ZSwgdG9TdHJpbmdGdW5jKSB7XHJcbiAgICBmdW5jdGlvbiBnZXRQb2ludEF0VGltZShhdXRvbWF0aW9uUG9pbnRzLCB0aW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIGF1dG9tYXRpb25Qb2ludHMuZmluZChmdW5jdGlvbihwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwLnRpbWUgPT0gdGltZTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGhhc1BvaW50QXRUaW1lKGF1dG9tYXRpb25Qb2ludHMsIHRpbWUpIHtcclxuICAgICAgICByZXR1cm4gZ2V0UG9pbnRBdFRpbWUoYXV0b21hdGlvblBvaW50cywgdGltZSkgIT09IHVuZGVmaW5lZDtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHNvcnRQb2ludHMoYXV0b21hdGlvblBvaW50cykge1xyXG4gICAgICAgIHJldHVybiBhdXRvbWF0aW9uUG9pbnRzLnNvcnQoZnVuY3Rpb24oYSxiKSB7XHJcbiAgICAgICAgICAgIGlmIChhLnRpbWUgPiBiLnRpbWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBpZiAodHlwZW9mIG1pbl92YWx1ZSAhPSBcIm51bWJlclwiIHx8ICFpc0Zpbml0ZShtaW5fdmFsdWUpKSB7XHJcbiAgICAgICAgdGhyb3coXCJJbnZhbGlkIENvbnN0cnVjdG9yOiBtaW5fdmFsdWUgYmUgYSBudW1iZXJcIik7XHJcbiAgICB9XHJcbiAgICBpZiAodHlwZW9mIG1heF92YWx1ZSAhPSBcIm51bWJlclwiIHx8ICFpc0Zpbml0ZShtYXhfdmFsdWUpKSB7XHJcbiAgICAgICAgdGhyb3coXCJJbnZhbGlkIENvbnN0cnVjdG9yOiBtYXhfdmFsdWUgYmUgYSBudW1iZXJcIik7XHJcbiAgICB9XHJcbiAgICBpZiAobWluX3ZhbHVlID09IG1heF92YWx1ZSkge1xyXG4gICAgICAgIHRocm93KFwiSW52YWxpZCBDb25zdHJ1Y3RvcjogbWF4X3ZhbHVlIGNhbm5vdCBlcXVhbCB0byBtaW5fdmFsdWVcIik7XHJcbiAgICB9XHJcbiAgICBpZiAobWF4X3ZhbHVlIDwgbWluX3ZhbHVlKSB7XHJcbiAgICAgICAgdGhyb3coXCJJbnZhbGlkIENvbnN0cnVjdG9yOiBtaW5fdmFsdWUgY2Fubm90IGJlIGdyZWF0ZXIgdGhhbiBtYXhfdmFsdWVcIik7XHJcbiAgICB9XHJcbiAgICB2YXIgYXV0b21hdGlvblBvaW50cyA9IFtdO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xyXG4gICAgICAgIFwiaW5zZXJ0UG9pbnRcIjoge1xyXG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKHRpbWUsIHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRpbWUgIT0gXCJudW1iZXJcIiB8fCAhaXNGaW5pdGUodGltZSkgfHwgdGltZSA8IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyhcIlRpbWUgbXVzdCBiZSBhIHBvc2l0aXZlIG51bWJlclwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgIT0gXCJudW1iZXJcIiB8fCAhaXNGaW5pdGUodmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3coXCJWYWx1ZSBtdXN0IGJlIGEgbnVtYmVyXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGhhc1BvaW50QXRUaW1lKGF1dG9tYXRpb25Qb2ludHMsIHRpbWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3coXCJBbHJlYWR5IGEgdmFsdWUgZW50cnkgYXQgdGltZSBcIit0aW1lKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhbHVlID0gTWF0aC5taW4oTWF0aC5tYXgodmFsdWUsIG1pbl92YWx1ZSksIG1heF92YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgcG9pbnQgPSBuZXcgVGltZVBvaW50KHRoaXMsIHRpbWUsIHZhbHVlLCB0b1N0cmluZ0Z1bmMpO1xyXG4gICAgICAgICAgICAgICAgYXV0b21hdGlvblBvaW50cy5wdXNoKHBvaW50KTtcclxuICAgICAgICAgICAgICAgIGF1dG9tYXRpb25Qb2ludHMgPSBzb3J0UG9pbnRzKGF1dG9tYXRpb25Qb2ludHMpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHBvaW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImdldFBvaW50c1wiOiB7XHJcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24oc3RhcnRfdGltZSwgZW5kX3RpbWUpIHtcclxuICAgICAgICAgICAgICAgIGlmIChzdGFydF90aW1lID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBzdGFydF90aW1lID0gMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChlbmRfdGltZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW5kX3RpbWUgPSBJbmZpbml0eTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBhdXRvbWF0aW9uUG9pbnRzLmZpbHRlcihmdW5jdGlvbihwb2ludCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwb2ludC50aW1lID49IHN0YXJ0X3RpbWUgJiYgcG9pbnQudGltZSA8IGVuZF90aW1lO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiZGVsZXRlUG9pbnRcIjoge1xyXG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKHRpbWUpIHtcclxuICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IGF1dG9tYXRpb25Qb2ludHMuZmluZEluZGV4KGZ1bmN0aW9uKHBvaW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBvaW50LnRpbWUgPT0gdGltZTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID49IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBhdXRvbWF0aW9uUG9pbnRzLnNwbGljZShpbmRleCwgMSwgMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYXV0b21hdGlvblBvaW50cy5sZW5ndGg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiZ2V0U3RhdGljVmFsdWVBc1N0cmluZ1wiOiB7XHJcbiAgICAgICAgICAgIFwid3JpdGFibGVcIjogdHJ1ZSxcclxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBTdHJpbmcodmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImdldFZhbHVlQXRUaW1lUG9pbnRcIjoge1xyXG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICh0aW1lKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZ2V0UG9pbnRBdFRpbWUoYXV0b21hdGlvblBvaW50cywgdGltZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFwibGVuZ3RoXCI6IHtcclxuICAgICAgICAgICAgXCJnZXRcIjogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYXV0b21hdGlvblBvaW50cy5sZW5ndGg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFwibWluaW11bVwiOiB7XHJcbiAgICAgICAgICAgIFwidmFsdWVcIjogbWluX3ZhbHVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIm1heGltdW1cIjoge1xyXG4gICAgICAgICAgICBcInZhbHVlXCI6IG1heF92YWx1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJ1cGRhdGVQb2ludFwiOiB7XHJcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24odGltZSwgb3B0aW9ucykge1xyXG4gICAgICAgICAgICAgICAgdmFyIHBvaW50ID0gYXV0b21hdGlvblBvaW50cy5maW5kKGZ1bmN0aW9uKHBvaW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBvaW50LnRpbWUgPT0gdGltZTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgaWYgKHBvaW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLnRpbWUgPT0gXCJudW1iZXJcIiAmJiBvcHRpb25zLnRpbWUgIT0gcG9pbnQudGltZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ2V0UG9pbnRBdFRpbWUoYXV0b21hdGlvblBvaW50cywgdGltZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93KFwiQSB0aW1lLXBvaW50IGFscmVhZHkgZXhpc3RzIGF0IFxcXCJcIitTdHJpbmcob3B0aW9ucy50aW1lKStcIlxcXCIgc2Vjb25kc1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvaW50LnRpbWUgPSBvcHRpb25zLnRpbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvbWF0aW9uUG9pbnRzID0gc29ydFBvaW50cyhhdXRvbWF0aW9uUG9pbnRzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBwb2ludC52YWx1ZSA9IG9wdGlvbnMudmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcG9pbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufTtcclxuXHJcbnZhciBQYXJhbWV0ZXJBdXRvbWF0aW9uID0gZnVuY3Rpb24ocGFyYW1ldGVyLCBtaW5fdmFsdWUsIG1heF92YWx1ZSwgdG9TdHJpbmdGdW5jKSB7XHJcbiAgICBUaW1lUG9pbnRMaXN0LmNhbGwodGhpcywgbWluX3ZhbHVlLCBtYXhfdmFsdWUsIHRvU3RyaW5nRnVuYyk7XHJcbiAgICB2YXIgZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xyXG4gICAgICAgIFwiZW5hYmxlZFwiOiB7XHJcbiAgICAgICAgICAgIFwiZ2V0XCI6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGVuYWJsZWQ7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwic2V0XCI6IGZ1bmN0aW9uKHQpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBlbmFibGVkID0gKHQgPT09IHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGVuYWJsZWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufTtcclxuXHJcbnZhciBQYXJhbWV0ZXJMaW5lYXJBdXRvbWF0aW9uID0gZnVuY3Rpb24gKG93bmVyLCBwYXJhbWV0ZXIsIG1pbl92YWx1ZSwgbWF4X3ZhbHVlLCB0b1N0cmluZ0Z1bmMpIHtcclxuICAgIFBhcmFtZXRlckF1dG9tYXRpb24uY2FsbCh0aGlzLCBwYXJhbWV0ZXIsIG1pbl92YWx1ZSwgbWF4X3ZhbHVlLCB0b1N0cmluZ0Z1bmMpO1xyXG4gICAgZnVuY3Rpb24gbGluZWFySW50ZXJwb2xhdGlvbih0aW1lLCBwb2ludEEsIHBvaW50Qikge1xyXG4gICAgICAgIHZhciB0MSA9IHBvaW50QS50aW1lO1xyXG4gICAgICAgIHZhciB0MiA9IHBvaW50Qi50aW1lO1xyXG4gICAgICAgIHRpbWUgLT0gdDE7XHJcbiAgICAgICAgdDIgLT0gdDE7XHJcbiAgICAgICAgdDEgPSAwO1xyXG5cclxuICAgICAgICB2YXIgcCA9IHRpbWUvdDI7XHJcbiAgICAgICAgcmV0dXJuIHBvaW50QS52YWx1ZSAqICgxLXApICsgcG9pbnRCLnZhbHVlICogcDtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGdldEN1cnJlbnRUaW1lVmFsdWUoYXV0b21hdGlvblBvaW50cywgdGltZSkge1xyXG4gICAgICAgIGlmIChhdXRvbWF0aW9uUG9pbnRzLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgIHRocm93KFwiTm8gYXV0b21hdGlvbiBwb2ludHMgYXZhaWxhYmxlXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYXV0b21hdGlvblBvaW50cy5sZW5ndGggPT0gMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gYXV0b21hdGlvblBvaW50c1swXS52YWx1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBmaXJzdFBvaW50ID0gYXV0b21hdGlvblBvaW50cy5yZWR1Y2UoZnVuY3Rpb24ocG9pbnQsIG5leHRQb2ludCkge1xyXG4gICAgICAgICAgICBpZiAobmV4dFBvaW50LnRpbWUgPD0gdGltZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5leHRQb2ludDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBwb2ludDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIGF1dG9tYXRpb25Qb2ludHNbMF0pO1xyXG4gICAgICAgIHZhciBzZWNvbmRQb2ludCA9IGF1dG9tYXRpb25Qb2ludHMuZmluZChmdW5jdGlvbihwb2ludCkge1xyXG4gICAgICAgICAgICByZXR1cm4gcG9pbnQudGltZSA+IGZpcnN0UG9pbnQudGltZTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAoc2Vjb25kUG9pbnQgPT09IHVuZGVmaW5lZCB8fCBmaXJzdFBvaW50LnRpbWUgPiB0aW1lKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmaXJzdFBvaW50LnZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbGluZWFySW50ZXJwb2xhdGlvbih0aW1lLCBmaXJzdFBvaW50LCBzZWNvbmRQb2ludCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc3RhcnQoYXV0b21hdGlvblBvaW50cywgdGltZSwgY29udGV4dFRpbWUpIHtcclxuICAgICAgICB2YXIgc3RhcnRQb3NpdGlvbiA9IG93bmVyLnVwZGF0ZShnZXRDdXJyZW50VGltZVZhbHVlKGF1dG9tYXRpb25Qb2ludHMsIHRpbWUpKTtcclxuICAgICAgICBwYXJhbWV0ZXIuc2V0VmFsdWVBdFRpbWUoc3RhcnRQb3NpdGlvbiwgY29udGV4dFRpbWUpO1xyXG4gICAgICAgIGF1dG9tYXRpb25Qb2ludHMuZm9yRWFjaChmdW5jdGlvbihwKSB7XHJcbiAgICAgICAgICAgIGlmIChwLnRpbWUgPiB0aW1lKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdCA9IHAudGltZSAtIHRpbWU7XHJcbiAgICAgICAgICAgICAgICB2YXIgdiA9IG93bmVyLnVwZGF0ZShwLnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIHBhcmFtZXRlci5saW5lYXJSYW1wVG9WYWx1ZUF0VGltZSh2LCB0K2NvbnRleHRUaW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHN0b3AoY29udGV4dFRpbWUpIHtcclxuICAgICAgICBpZiAoY29udGV4dFRpbWUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBjb250ZXh0VGltZSA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHBhcmFtZXRlci5jYW5jZWxTY2hlZHVsZWRWYWx1ZXMoY29udGV4dFRpbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcclxuICAgICAgICBcImdldEN1cnJlbnRUaW1lVmFsdWVcIjoge1xyXG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKHRpbWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBnZXRDdXJyZW50VGltZVZhbHVlKHRoaXMuZ2V0UG9pbnRzKCksIHRpbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcInN0YXJ0XCI6IHtcclxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbih0aW1lLCBjb250ZXh0VGltZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZW5hYmxlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0KHRoaXMuZ2V0UG9pbnRzKCksIHRpbWUsIGNvbnRleHRUaW1lKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJzdG9wXCI6IHtcclxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbihjb250ZXh0VGltZSkge1xyXG4gICAgICAgICAgICAgICAgc3RvcChjb250ZXh0VGltZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbn07XHJcblBhcmFtZXRlckxpbmVhckF1dG9tYXRpb24ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShQYXJhbWV0ZXJBdXRvbWF0aW9uLnByb3RvdHlwZSk7XHJcblBhcmFtZXRlckxpbmVhckF1dG9tYXRpb24ucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gUGFyYW1ldGVyTGluZWFyQXV0b21hdGlvbjtcclxuXHJcbnZhciBQYXJhbWV0ZXJTdGVwQXV0b21hdGlvbiA9IGZ1bmN0aW9uIChvd25lciwgcGFyYW1ldGVyLCBtaW5fdmFsdWUsIG1heF92YWx1ZSwgdG9TdHJpbmdGdW5jKSB7XHJcbiAgICBQYXJhbWV0ZXJBdXRvbWF0aW9uLmNhbGwodGhpcywgcGFyYW1ldGVyLCBtaW5fdmFsdWUsIG1heF92YWx1ZSwgdG9TdHJpbmdGdW5jKTtcclxuICAgIGZ1bmN0aW9uIGdldEN1cnJlbnRUaW1lVmFsdWUoYXV0b21hdGlvblBvaW50cywgdGltZSkge1xyXG4gICAgICAgIGlmIChhdXRvbWF0aW9uUG9pbnRzLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgIHRocm93KFwiTm8gYXV0b21hdGlvbiBwb2ludHMgYXZhaWxhYmxlXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYXV0b21hdGlvblBvaW50cy5sZW5ndGggPT0gMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gYXV0b21hdGlvblBvaW50c1swXS52YWx1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBuZWFyZXN0UG9pbnQgPSBhdXRvbWF0aW9uUG9pbnRzLnJlZHVjZShmdW5jdGlvbihwb2ludCwgbmV4dFBvaW50KSB7XHJcbiAgICAgICAgICAgIGlmIChuZXh0UG9pbnQudGltZSA8PSB0aW1lKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV4dFBvaW50O1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHBvaW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgYXV0b21hdGlvblBvaW50c1swXSk7XHJcbiAgICAgICAgcmV0dXJuIG5lYXJlc3RQb2ludC52YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzdGFydChhdXRvbWF0aW9uUG9pbnRzLCB0aW1lLCBjb250ZXh0VGltZSkge1xyXG4gICAgICAgIHZhciBzdGFydFBvc2l0aW9uID0gb3duZXIudXBkYXRlKGdldEN1cnJlbnRUaW1lVmFsdWUoYXV0b21hdGlvblBvaW50cywgdGltZSkpO1xyXG4gICAgICAgIHBhcmFtZXRlci5zZXRWYWx1ZUF0VGltZShzdGFydFBvc2l0aW9uLCBjb250ZXh0VGltZSk7XHJcbiAgICAgICAgYXV0b21hdGlvblBvaW50cy5mb3JFYWNoKGZ1bmN0aW9uKHApIHtcclxuICAgICAgICAgICAgaWYgKHAudGltZSA+IHRpbWUpIHtcclxuICAgICAgICAgICAgICAgIHZhciB0ID0gcC50aW1lIC0gdGltZTtcclxuICAgICAgICAgICAgICAgIHZhciB2ID0gb3duZXIudXBkYXRlKHAudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgcGFyYW1ldGVyLnNldFZhbHVlQXRUaW1lKHYsIHQrY29udGV4dFRpbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc3RvcChjb250ZXh0VGltZSkge1xyXG4gICAgICAgIHBhcmFtZXRlci5jYW5jZWxTY2hlZHVsZWRWYWx1ZXMoY29udGV4dFRpbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcclxuICAgICAgICBcImdldEN1cnJlbnRUaW1lVmFsdWVcIjoge1xyXG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKHRpbWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBnZXRDdXJyZW50VGltZVZhbHVlKHRoaXMuZ2V0UG9pbnRzKCksIHRpbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcInN0YXJ0XCI6IHtcclxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbih0aW1lLCBjb250ZXh0VGltZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZW5hYmxlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0KHRoaXMuZ2V0UG9pbnRzKCksIHRpbWUsIGNvbnRleHRUaW1lKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJzdG9wXCI6IHtcclxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbihjb250ZXh0VGltZSkge1xyXG4gICAgICAgICAgICAgICAgc3RvcChjb250ZXh0VGltZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufTtcclxuUGFyYW1ldGVyU3RlcEF1dG9tYXRpb24ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShQYXJhbWV0ZXJBdXRvbWF0aW9uLnByb3RvdHlwZSk7XHJcblBhcmFtZXRlclN0ZXBBdXRvbWF0aW9uLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFBhcmFtZXRlclN0ZXBBdXRvbWF0aW9uO1xyXG5cclxuZXhwb3J0IHtQYXJhbWV0ZXJMaW5lYXJBdXRvbWF0aW9uLCBQYXJhbWV0ZXJTdGVwQXV0b21hdGlvbn07XHJcbiIsIi8qIGpzaGludCBlc3ZlcnNpb246IDYgKi9cclxuZnVuY3Rpb24gUGx1Z2luUGFyYW1ldGVyKG93bmVyLCBuYW1lLCBkYXRhVHlwZSkge1xyXG4gICAgdmFyIHVwZGF0ZSwgdHJhbnNsYXRlLCB0cmlnZ2VyO1xyXG4gICAgdmFyIGV2ZW50VGFyZ2V0ID0gbmV3IEV2ZW50VGFyZ2V0KCk7XHJcbiAgICB1cGRhdGUgPSB0cmFuc2xhdGUgPSBmdW5jdGlvbiAodikge1xyXG4gICAgICAgIHJldHVybiB2O1xyXG4gICAgfTtcclxuICAgIHRyaWdnZXIgPSBmdW5jdGlvbiAoKSB7fTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcclxuICAgICAgICBcImFkZEV2ZW50TGlzdGVuZXJcIjoge1xyXG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKHR5cGUsIGxpc3RlbmVyLCBvcHRpb25zKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZXZlbnRUYXJnZXQuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lciwgb3B0aW9ucyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFwicmVtb3ZlRXZlbnRMaXN0ZW5lclwiOiB7XHJcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24odHlwZSwgbGlzdGVuZXIsIG9wdGlvbnMpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBldmVudFRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyLCBvcHRpb25zKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJ0cmlnZ2VyUGFyYW1ldGVyU2V0XCI6IHtcclxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbih1cGRhdGVJbnRlcmZhY2VzKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgb3B0cyA9IHtkZXRhaWw6IHtcclxuICAgICAgICAgICAgICAgICAgICBwYXJhbWV0ZXI6IHRoaXMsXHJcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlSW50ZXJmYWNlczogdXBkYXRlSW50ZXJmYWNlc1xyXG4gICAgICAgICAgICAgICAgfX07XHJcbiAgICAgICAgICAgICAgICBldmVudFRhcmdldC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcInBhcmFtZXRlcnNldFwiLCBvcHRzKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFwibmFtZVwiOiB7XHJcbiAgICAgICAgICAgIFwidmFsdWVcIjogbmFtZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJvd25lclwiOiB7XHJcbiAgICAgICAgICAgIFwidmFsdWVcIjogb3duZXJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwidXBkYXRlXCI6IHtcclxuICAgICAgICAgICAgXCJnZXRcIjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVwZGF0ZTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJzZXRcIjogZnVuY3Rpb24gKGYpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZiAhPT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgKFwiTXVzdCBiZSBhIGNhbGxiYWNrIGZ1bmN0aW9uXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGYoMCkgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IChcIkZ1bmN0aW9uIG11c3QgcmV0dXJuIGEgdmFsdWVcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB1cGRhdGUgPSBmO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcInRyYW5zbGF0ZVwiOiB7XHJcbiAgICAgICAgICAgIFwiZ2V0XCI6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cmFuc2xhdGU7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwic2V0XCI6IGZ1bmN0aW9uIChmKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGYgIT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IChcIk11c3QgYmUgYSBjYWxsYmFjayBmdW5jdGlvblwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChmKDApID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyAoXCJGdW5jdGlvbiBtdXN0IHJldHVybiBhIHZhbHVlXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlID0gZjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJ0cmlnZ2VyXCI6IHtcclxuICAgICAgICAgICAgXCJnZXRcIjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRyaWdnZXI7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwic2V0XCI6IGZ1bmN0aW9uIChmKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGYgIT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IChcIk11c3QgYmUgYSBjYWxsYmFjayBmdW5jdGlvblwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRyaWdnZXIgPSBmO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImJpbmRUb0F1ZGlvUGFyYW1cIjoge1xyXG4gICAgICAgICAgICBcImNvbmZpZ3VyYWJsZVwiOiB0cnVlLFxyXG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uIChhcCkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3coXCJDYW5ub3QgYmluZCB0aGlzIHBhcmFtZXRlciB0eXBlIHRvIGFuIGF1ZGlvIHBhcmFtZXRlclwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJib3VuZEF1ZGlvUGFyYW1cIjoge1xyXG4gICAgICAgICAgICBcImNvbmZpZ3VyYWJsZVwiOiB0cnVlLFxyXG4gICAgICAgICAgICBcImdldFwiOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCB7UGx1Z2luUGFyYW1ldGVyfTtcclxuIiwiLyoganNoaW50IGVzdmVyc2lvbjogNiAqL1xyXG5pbXBvcnQge1BsdWdpblBhcmFtZXRlcn0gZnJvbSBcIi4vUGx1Z2luUGFyYW1ldGVyLmpzXCI7XHJcblxyXG5mdW5jdGlvbiBTdHJpbmdQYXJhbWV0ZXIob3duZXIsIG5hbWUsIGRlZmF1bHRWYWx1ZSwgbWF4TGVuZ3RoLCB0b1N0cmluZ0Z1bmMpIHtcclxuICAgIFBsdWdpblBhcmFtZXRlci5jYWxsKHRoaXMsIG93bmVyLCBuYW1lLCBcIlN0cmluZ1wiKTtcclxuICAgIHZhciBfdmFsdWUgPSBkZWZhdWx0VmFsdWU7XHJcbiAgICB2YXIgYXVkaW9QYXJhbWV0ZXI7XHJcblxyXG4gICAgZnVuY3Rpb24gc2V0VmFsdWUodiwgdXBkYXRlSW50ZXJmYWNlcykge1xyXG4gICAgICAgIGlmIChtYXhMZW5ndGgpIHtcclxuICAgICAgICAgICAgaWYgKHYubGVuZ3RoID4gbWF4TGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyAoXCJTdHJpbmcgbG9uZ2VyIHRoYW4gXCIgKyBtYXhMZW5ndGggKyBcIiBjaGFyYWN0ZXJzXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmJvdW5kQXVkaW9QYXJhbSkge1xyXG4gICAgICAgICAgICB0aGlzLmJvdW5kQXVkaW9QYXJhbS52YWx1ZSA9IHRoaXMudXBkYXRlKHYpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoX3ZhbHVlICE9PSB2KSB7XHJcbiAgICAgICAgICAgIF92YWx1ZSA9IHY7XHJcbiAgICAgICAgICAgIHRoaXMudHJpZ2dlclBhcmFtZXRlclNldCh1cGRhdGVJbnRlcmZhY2VzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy50cmlnZ2VyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xyXG4gICAgICAgIFwidHlwZVwiOiB7XHJcbiAgICAgICAgICAgIFwidmFsdWVcIjogXCJTdHJpbmdcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJkZXN0cm95XCI6IHtcclxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBvd25lciA9IG5hbWUgPSBkZWZhdWx0VmFsdWUgPSBtYXhMZW5ndGggPSBfdmFsdWUgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFwibWF4TGVuZ3RoXCI6IHtcclxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBtYXhMZW5ndGhcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiZGVmYXVsdFZhbHVlXCI6IHtcclxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBkZWZhdWx0VmFsdWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwidmFsdWVcIjoge1xyXG4gICAgICAgICAgICBcImdldFwiOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5ib3VuZEF1ZGlvUGFyYW0pIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50cmFuc2xhdGUodGhpcy5ib3VuZEF1ZGlvUGFyYW0udmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIF92YWx1ZTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJzZXRcIjogZnVuY3Rpb24gKHYpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzZXRWYWx1ZS5jYWxsKHRoaXMsIHYsIHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcInNldFZhbHVlXCI6IHtcclxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbih2LCB1cGRhdGVJbnRlcmZhY2VzKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc2V0VmFsdWUuY2FsbCh0aGlzLCB2LCB1cGRhdGVJbnRlcmZhY2VzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJiaW5kVG9BdWRpb1BhcmFtXCI6IHtcclxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoYXApIHtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgYXAgPT0gXCJvYmplY3RcIiAmJiBhcC52YWx1ZSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBhdWRpb1BhcmFtZXRlciA9IGFwO1xyXG4gICAgICAgICAgICAgICAgICAgIGF1ZGlvUGFyYW1ldGVyLnZhbHVlID0gdGhpcy51cGRhdGUoX3ZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3coXCJBcmd1bWVudCAxIGlzIG5vdCBhIHZhbGlkIEF1ZGlvUGFyYW1ldGVyIG9iamVjdFwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJib3VuZEF1ZGlvUGFyYW1cIjoge1xyXG4gICAgICAgICAgICBcImNvbmZpZ3VyYWJsZVwiOiB0cnVlLFxyXG4gICAgICAgICAgICBcImdldFwiOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYXVkaW9QYXJhbWV0ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFwidG9TdHJpbmdcIjoge1xyXG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKHYpIHtcclxuICAgICAgICAgICAgICAgIGlmICh2ID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHYgPSB0aGlzLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0b1N0cmluZ0Z1bmMgPT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRvU3RyaW5nRnVuYy5jYWxsKHRoaXMsIHYpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gU3RyaW5nKHYpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuU3RyaW5nUGFyYW1ldGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoUGx1Z2luUGFyYW1ldGVyLnByb3RvdHlwZSk7XHJcblN0cmluZ1BhcmFtZXRlci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBTdHJpbmdQYXJhbWV0ZXI7XHJcblxyXG5leHBvcnQge1N0cmluZ1BhcmFtZXRlcn07XHJcbiIsIi8qIGpzaGludCBlc3ZlcnNpb246IDYgKi9cclxuaW1wb3J0IHtQbHVnaW5QYXJhbWV0ZXJ9IGZyb20gXCIuL1BsdWdpblBhcmFtZXRlci5qc1wiO1xyXG5pbXBvcnQge1BhcmFtZXRlclN0ZXBBdXRvbWF0aW9ufSBmcm9tIFwiLi9QYXJhbWV0ZXJBdXRvbWF0aW9uLmpzXCI7XHJcblxyXG5mdW5jdGlvbiBTd2l0Y2hQYXJhbWV0ZXIob3duZXIsIG5hbWUsIGRlZmF1bHRWYWx1ZSwgbWluU3RhdGUsIG1heFN0YXRlLCB0b1N0cmluZ0Z1bmMpIHtcclxuICAgIFBsdWdpblBhcmFtZXRlci5jYWxsKHRoaXMsIG93bmVyLCBuYW1lLCBcIkJ1dHRvblwiKTtcclxuICAgIHZhciBvbmNsaWNrID0gZnVuY3Rpb24gKCkge307XHJcbiAgICB2YXIgX3ZhbHVlID0gZGVmYXVsdFZhbHVlO1xyXG4gICAgdmFyIGF1ZGlvUGFyYW1ldGVyLCBhdXRvbWF0aW9uO1xyXG5cclxuICAgIGZ1bmN0aW9uIHNldFZhbHVlKHYsIHVwZGF0ZUludGVyZmFjZXMpIHtcclxuICAgICAgICBpZiAodiA8IG1pblN0YXRlKSB7XHJcbiAgICAgICAgICAgIHRocm93IChcIlNldCB2YWx1ZSBpcyBsZXNzIHRoYW4gXCIgKyBtaW5TdGF0ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh2ID4gbWF4U3RhdGUpIHtcclxuICAgICAgICAgICAgdGhyb3cgKFwiU2V0IHZhbHVlIGlzIGdyZWF0ZXIgdGhhbiBcIiArIG1heFN0YXRlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuYm91bmRBdWRpb1BhcmFtKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYm91bmRBdWRpb1BhcmFtLnZhbHVlID0gdGhpcy51cGRhdGUodik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChfdmFsdWUgIT09IHYpIHtcclxuICAgICAgICAgICAgX3ZhbHVlID0gdjtcclxuICAgICAgICAgICAgdGhpcy50cmlnZ2VyUGFyYW1ldGVyU2V0KHVwZGF0ZUludGVyZmFjZXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnRyaWdnZXIoKTtcclxuICAgICAgICByZXR1cm4gdjtcclxuICAgIH1cclxuXHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XHJcbiAgICAgICAgXCJ0eXBlXCI6IHtcclxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIlN3aXRjaFwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImRlc3Ryb3lcIjoge1xyXG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIG93bmVyID0gbmFtZSA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJkZWZhdWx0VmFsdWVcIjoge1xyXG4gICAgICAgICAgICBcInZhbHVlXCI6IGRlZmF1bHRWYWx1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJtaW5TdGF0ZVwiOiB7XHJcbiAgICAgICAgICAgIFwidmFsdWVcIjogbWluU3RhdGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwibWF4U3RhdGVcIjoge1xyXG4gICAgICAgICAgICBcInZhbHVlXCI6IG1heFN0YXRlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcInZhbHVlXCI6IHtcclxuICAgICAgICAgICAgXCJnZXRcIjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYm91bmRBdWRpb1BhcmFtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNsYXRlKHRoaXMuYm91bmRBdWRpb1BhcmFtLnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBfdmFsdWU7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwic2V0XCI6IGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc2V0VmFsdWUuY2FsbCh0aGlzLCB2KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJzZXRWYWx1ZVwiOiB7XHJcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24odiwgdXBkYXRlSW50ZXJmYWNlcykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNldFZhbHVlLmNhbGwodGhpcywgdiwgdXBkYXRlSW50ZXJmYWNlcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiaW5jcmVtZW50XCI6IHtcclxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdiA9IF92YWx1ZSArIDE7XHJcbiAgICAgICAgICAgICAgICBpZiAodiA+IG1heFN0YXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdiA9IG1pblN0YXRlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNldFZhbHVlLmNhbGwodGhpcywgdik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiZGVjcmVtZW50XCI6IHtcclxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdiA9IF92YWx1ZSAtIDE7XHJcbiAgICAgICAgICAgICAgICBpZiAodiA8IG1pblN0YXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdiA9IG1heFN0YXRlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNldFZhbHVlLmNhbGwodGhpcywgdik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiYmluZFRvQXVkaW9QYXJhbVwiOiB7XHJcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKGFwKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGFwID09IFwib2JqZWN0XCIgJiYgYXAudmFsdWUgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXVkaW9QYXJhbWV0ZXIgPSBhcDtcclxuICAgICAgICAgICAgICAgICAgICBhdWRpb1BhcmFtZXRlci52YWx1ZSA9IHRoaXMudXBkYXRlKF92YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFwLnNldFZhbHVlQXRUaW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9tYXRpb24gPSBuZXcgUGFyYW1ldGVyU3RlcEF1dG9tYXRpb24odGhpcywgYXVkaW9QYXJhbWV0ZXIsIG1pblN0YXRlLCBtYXhTdGF0ZSwgdG9TdHJpbmdGdW5jKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJnZXRWYWx1ZUF0VGltZVBvaW50XCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKHRpbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYXV0b21hdGlvblBvaW50cy5nZXRWYWx1ZUF0VGltZVBvaW50KHRpbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImF1dG9tYXRpb25Qb2ludHNcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogYXV0b21hdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3RhcnRcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24odGltZSwgY29udGV4dFRpbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGF1dG9tYXRpb24uc3RhcnQodGltZSwgY29udGV4dFRpbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN0b3BcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24oY29udGV4dFRpbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b21hdGlvbi5zdG9wKGNvbnRleHRUaW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJlbmFibGVkXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImdldFwiOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGF1dG9tYXRpb24uZW5hYmxlZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2V0XCI6IGZ1bmN0aW9uKHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChhdXRvbWF0aW9uLmVuYWJsZWQgPSB0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIkNhbm5vdCBiaW5kIGF1dG9tYXRpb24gYXMgQXVkaW9QYXJhbWV0ZXIgaXMgbm90IGF1dG9tYXRhYmxlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3coXCJBcmd1bWVudCAxIGlzIG5vdCBhIHZhbGlkIEF1ZGlvUGFyYW1ldGVyIG9iamVjdFwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJib3VuZEF1ZGlvUGFyYW1cIjoge1xyXG4gICAgICAgICAgICBcImNvbmZpZ3VyYWJsZVwiOiB0cnVlLFxyXG4gICAgICAgICAgICBcImdldFwiOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYXVkaW9QYXJhbWV0ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiYXV0b21hdGFibGVcIjoge1xyXG4gICAgICAgICAgICBcImdldFwiOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHlwZW9mIGF1dG9tYXRpb24gPT0gXCJvYmplY3RcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJ0b1N0cmluZ1wiOiB7XHJcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24odikge1xyXG4gICAgICAgICAgICAgICAgaWYgKHYgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdiA9IHRoaXMudmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRvU3RyaW5nRnVuYyA9PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdG9TdHJpbmdGdW5jLmNhbGwodGhpcywgdik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBTdHJpbmcodik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5Td2l0Y2hQYXJhbWV0ZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShQbHVnaW5QYXJhbWV0ZXIucHJvdG90eXBlKTtcclxuU3dpdGNoUGFyYW1ldGVyLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFN3aXRjaFBhcmFtZXRlcjtcclxuXHJcbmV4cG9ydCB7U3dpdGNoUGFyYW1ldGVyfTtcclxuIiwiLy8gVGhpcyBkZWZpbmVzIGEgbWFzdGVyIG9iamVjdCBmb3IgaG9sZGluZyBhbGwgdGhlIHBsdWdpbnMgYW5kIGNvbW11bmljYXRpbmdcclxuLy8gVGhpcyBvYmplY3Qgd2lsbCBhbHNvIGhhbmRsZSBjcmVhdGlvbiBhbmQgZGVzdHJ1Y3Rpb24gb2YgcGx1Z2luc1xyXG4vKmdsb2JhbHMgUHJvbWlzZSwgZG9jdW1lbnQsIGNvbnNvbGUsIExpbmtlZFN0b3JlLCBXb3JrZXIsIHdpbmRvdywgWE1MSHR0cFJlcXVlc3QgKi9cclxuLyplc2xpbnQtZW52IGJyb3dzZXIgKi9cclxuLyoganNoaW50IGVzdmVyc2lvbjo2ICovXHJcblxyXG4vLyBMb2FkIGpzWHRyYWN0XHJcbihmdW5jdGlvbigpIHtcclxuICAgIGlmICh3aW5kb3cuanNYdHJhY3QgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHZhciBzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcclxuICAgICAgICBzLnNyYyA9IFwiaHR0cHM6Ly9naXRjZG4ueHl6L3JlcG8vbmlja2ppbGxpbmdzL2pzLXh0cmFjdC9tYXN0ZXIvanNYdHJhY3QuanNcIjtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF0uYXBwZW5kQ2hpbGQocyk7XHJcbiAgICB9XHJcbn0pKCk7XHJcblxyXG5pbXBvcnQgTGlua2VkU3RvcmUgZnJvbSAnLi9MaW5rZWRTdG9yZSc7XHJcbmltcG9ydCB7QmFzZVBsdWdpbn0gZnJvbSAnLi9iYXNlX3BsdWdpbic7XHJcbmltcG9ydCB7U3ludGhlc2lzZXJCYXNlUGx1Z2lufSBmcm9tICcuL3N5bnRoX2Jhc2UnO1xyXG5cclxuZnVuY3Rpb24gUGx1Z2luRmFjdG9yeShhdWRpb19jb250ZXh0LCByb290VVJMKSB7XHJcbiAgICB2YXIgc3ViRmFjdG9yaWVzID0gW10sXHJcbiAgICBzeW50aGVzaXNlckhvc3RzID0gW10sXHJcbiAgICBwbHVnaW5fcHJvdG90eXBlcyA9IFtdLFxyXG4gICAgcGx1Z2luc0xpc3QgPSBbXSxcclxuICAgIGN1cnJlbnRQbHVnaW5JZCA9IDAsXHJcbiAgICBhdWRpb1N0YXJ0UHJvZ3JhbVRpbWUsXHJcbiAgICBhdWRpb1N0YXJ0Q29udGV4dFRpbWUsXHJcbiAgICBhdWRpb1N0YXJ0ZWQgPSBmYWxzZTtcclxuXHJcbiAgICAvKlxyXG4gICAgICAgIHRoaXMubG9hZFJlc291cmNlLiBMb2FkIGEgcmVzb3VyY2UgaW50byB0aGUgZ2xvYmFsIG5hbWVzcGFjZVxyXG5cclxuICAgICAgICBAcGFyYW0gcmVzb3VyY2VPYmplY3Q6IGEgSlMgb2JqZWN0IGhvbGRpbmcgdGhlIGZvbGxvd2luZyBwYXJhbWV0ZXJzOlxyXG4gICAgICAgICAgICAudXJsOiBVUkwgb2YgdGhlIHJlc291cmNlXHJcbiAgICAgICAgICAgIC50ZXN0OiBmdW5jdGlvbiB0byBjYWxsLCByZXR1cm5zIHRydWUgaWYgcmVzb3VyY2UgYWxyZWFkeSBsb2FkZWQsIGZhbHNlIGlmIG5vdFxyXG4gICAgKi9cclxuICAgIHRoaXMubG9hZFByb3RvdHlwZU1vZHVsZSA9IGZ1bmN0aW9uKHJlc291cmNlT2JqZWN0LCBtdXN0TW9kdWxlKSB7XHJcbiAgICAgICAgdmFyIGZhY3RvcnkgPSB0aGlzO1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBnbG9iYWwuZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZ2xvYmFsLmRlZmluZS5hbWQpIHtcclxuICAgICAgICAgICAgICAgIGdsb2JhbC5yZXF1aXJlKFtyZXNvdXJjZU9iamVjdC51cmxdLCBmdW5jdGlvbihmKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShmKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBnbG9iYWwubW9kdWxlID09IFwib2JqZWN0XCIgJiYgZ2xvYmFsLm1vZHVsZS5leHBvcnRzKSB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKGdsb2JhbC5yZXF1aXJlKHJlc291cmNlT2JqZWN0LnVybCkpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KFwiQ2Fubm90IGxvYWQgdXNpbmcgbW9kdWxhciBzeXN0ZW1zXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkudGhlbihmdW5jdGlvbihleGVjdXRhYmxlKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZXhlY3V0YWJsZSA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFjdG9yeS5hZGRQcm90b3R5cGUoZXhlY3V0YWJsZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZWplY3QoXCJJcyBub3QgYSBtb2R1bGUgcGx1Z2luXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGlmIChtdXN0TW9kdWxlID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICByZWplY3QoXCJDYW5ub3QgbG9hZCB1c2luZyBtb2R1bGFyIHN5c3RlbXNcIik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCJDb3VsZCBub3QgbG9hZCB1c2luZyBtb2R1bGFyIHN5c3RlbXNcIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFjdG9yeS5sb2FkUGx1Z2luU2NyaXB0KHJlc291cmNlT2JqZWN0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIHRoaXMubG9hZFJlc291cmNlID0gZnVuY3Rpb24gKHJlc291cmNlT2JqZWN0KSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHJlc291cmNlT2JqZWN0ICE9PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgICAgICAgICByZWplY3QoXCJFcnJvclwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgcmVzb3VyY2VPYmplY3QudXJsICE9PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgICAgICByZWplY3QoXCJyZXNvdXJjZU9iamVjdC51cmwgbXVzdCBiZSBhIHN0cmluZ1wiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgcmVzb3VyY2VPYmplY3QudGVzdCAhPT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgICAgICByZWplY3QoXCJyZXNvdXJjZU9iamVjdC50ZXN0IG11c3QgYmUgYSBmdW5jdGlvblwiKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUocmVzb3VyY2VPYmplY3QpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkudGhlbihmdW5jdGlvbihyZXNvdXJjZU9iamVjdCl7XHJcbiAgICAgICAgICAgIHZhciByZXNwb25zZSA9IHJlc291cmNlT2JqZWN0LnRlc3QoKTtcclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlICE9PSBmYWxzZSAmJiByZXNwb25zZSAhPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgKFwicmVzb3VyY2VPYmplY3QudGVzdCBtdXN0IHJldHVybiB0cnVlIG9yIGZhbHNlXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghcmVzb3VyY2VPYmplY3QudHlwZSkge1xyXG4gICAgICAgICAgICAgICAgcmVzb3VyY2VPYmplY3QudHlwZSA9IFwiamF2YXNjcmlwdFwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlc291cmNlT2JqZWN0LnR5cGUgPSByZXNvdXJjZU9iamVjdC50eXBlLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICAgIHN3aXRjaCAocmVzb3VyY2VPYmplY3QudHlwZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcImphdmFzY3JpcHRcIjpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBsb2FkUmVzb3VyY2UocmVzb3VyY2VPYmplY3QpLnRoZW4oZnVuY3Rpb24gKHJlc291cmNlT2JqZWN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHJlc291cmNlT2JqZWN0LnJldHVybk9iamVjdCA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZXR1cm5PYmplY3Q7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5oYXNPd25Qcm9wZXJ0eShyZXNvdXJjZU9iamVjdC5yZXR1cm5PYmplY3QpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB3aW5kb3dbcmVzb3VyY2VPYmplY3QucmV0dXJuT2JqZWN0XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgcmVzb3VyY2VPYmplY3QucmV0dXJuT2JqZWN0ID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5oYXNPd25Qcm9wZXJ0eShyZXNvdXJjZU9iamVjdC5yZXR1cm5PYmplY3QpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUod2luZG93W3Jlc291cmNlT2JqZWN0LnJldHVybk9iamVjdF0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IChcIkludmFsaWQgdHlwZSBcIiArIFN0cmluZyhyZXNvdXJjZU9iamVjdC50eXBlKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5sb2FkUGx1Z2luU2NyaXB0ID0gZnVuY3Rpb24gKHJlc291cmNlT2JqZWN0KSB7XHJcbiAgICAgICAgaWYgKHJlc291cmNlT2JqZWN0KSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcmVzb3VyY2VPYmplY3QucmV0dXJuT2JqZWN0ICE9PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyAoXCJyZXNvdXJjZU9iamVjdC5yZXR1cm5PYmplY3QgbXVzdCBiZSB0aGUgbmFtZSBvZiB0aGUgcHJvdG90eXBlIGZ1bmN0aW9uXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxvYWRSZXNvdXJjZShyZXNvdXJjZU9iamVjdCkudGhlbihmdW5jdGlvbiAocGx1Z2luKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5hZGRQcm90b3R5cGUocGx1Z2luKTtcclxuICAgICAgICAgICAgfS5iaW5kKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIGxvYWRSZXNvdXJjZShyZXNvdXJjZU9iamVjdCkge1xyXG4gICAgICAgIGlmIChyZXNvdXJjZU9iamVjdC51cmwuc3RhcnRzV2l0aChcImh0dHBcIikgPT09IGZhbHNlICYmIHJvb3RVUkwgIT09IHVuZGVmaW5lZCAmJiByb290VVJMLnN0YXJ0c1dpdGgoXCJodHRwXCIpKSB7XHJcbiAgICAgICAgICAgIHJlc291cmNlT2JqZWN0LnVybCA9IHJvb3RVUkwgKyByZXNvdXJjZU9iamVjdC51cmw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICAgICAgeGhyLm9wZW4oXCJHRVRcIiwgcmVzb3VyY2VPYmplY3QudXJsKTtcclxuICAgICAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PSA0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgc2NyaXB0LnRleHRDb250ZW50ID0geGhyLnJlc3BvbnNlVGV4dDtcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF0uYXBwZW5kQ2hpbGQoc2NyaXB0KTtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc291cmNlT2JqZWN0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHhoci5zZW5kKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY29weUZhY3RvcnkobmV3Y29udGV4dCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICAgICAgaWYgKG5ld2NvbnRleHQuc2FtcGxlUmF0ZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAvL01heWJlIG5vdCBhIHJlYWwgQXVkaW9Db250ZXh0XHJcbiAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKFwiSW52YWxpZCBhdWRpbyBjb250ZXh0IHByb3ZpZGVkXCIpKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUobmV3Y29udGV4dCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uKG5ld2NvbnRleHQpIHtcclxuICAgICAgICAgICAgdmFyIEJGYWN0b3J5ID0gbmV3IFBsdWdpbkZhY3RvcnkobmV3Y29udGV4dCk7XHJcbiAgICAgICAgICAgIHZhciBwcm9taXNlcyA9IFtdO1xyXG4gICAgICAgICAgICBwbHVnaW5fcHJvdG90eXBlcy5mb3JFYWNoKGZ1bmN0aW9uIChwcm90bykge1xyXG4gICAgICAgICAgICAgICAgcHJvbWlzZXMucHVzaChCRmFjdG9yeS5hZGRQcm90b3R5cGUocHJvdG8ucHJvdG8pKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbihmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBCRmFjdG9yeTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSkudGhlbihmdW5jdGlvbihuZXdGYWN0b3J5KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXdGYWN0b3J5O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBQbHVnaW5JbnN0YW5jZSA9IGZ1bmN0aW9uIChpZCwgcGx1Z2luX25vZGUpIHtcclxuICAgICAgICB0aGlzLm5leHRfbm9kZSA9IHVuZGVmaW5lZDtcclxuICAgICAgICB2YXIgX2J5cGFzc2VkID0gZmFsc2U7XHJcbiAgICAgICAgdmFyIGV2ID0gbmV3IEV2ZW50VGFyZ2V0KCk7XHJcbiAgICAgICAgdmFyIF9pbiA9IGF1ZGlvX2NvbnRleHQuY3JlYXRlR2FpbigpLFxyXG4gICAgICAgICAgICBfb3V0ID0gYXVkaW9fY29udGV4dC5jcmVhdGVHYWluKCk7XHJcblxyXG4gICAgICAgIF9pbi5jb25uZWN0KHBsdWdpbl9ub2RlLmdldElucHV0cygpWzBdKTtcclxuICAgICAgICBwbHVnaW5fbm9kZS5nZXRPdXRwdXRzKClbMF0uY29ubmVjdChfb3V0KTtcclxuICAgICAgICBwbHVnaW5fbm9kZS5hZGRFdmVudExpc3RlbmVyKHRoaXMpO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBieXBhc3NFbmFibGUoKSB7XHJcbiAgICAgICAgICAgIF9pbi5kaXNjb25uZWN0KCk7XHJcbiAgICAgICAgICAgIF9pbi5jb25uZWN0KF9vdXQpO1xyXG4gICAgICAgICAgICBfYnlwYXNzZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICBpZiAocGx1Z2luX25vZGUucHJvY2Vzc2luZ0RlbGF5QXNTYW1wbGVzICE9IDApIHtcclxuICAgICAgICAgICAgICAgIGV2LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiYWx0ZXJkZWxheVwiKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGJ5cGFzc0Rpc2FibGUoKSB7XHJcbiAgICAgICAgICAgIF9pbi5kaXNjb25uZWN0KCk7XHJcbiAgICAgICAgICAgIF9pbi5jb25uZWN0KHBsdWdpbl9ub2RlLmdldElucHV0cygpWzBdKTtcclxuICAgICAgICAgICAgX2J5cGFzc2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGlmIChwbHVnaW5fbm9kZS5wcm9jZXNzaW5nRGVsYXlBc1NhbXBsZXMgIT0gMCkge1xyXG4gICAgICAgICAgICAgICAgZXYuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJhbHRlcmRlbGF5XCIpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5ieXBhc3MgPSBmdW5jdGlvbiAoc3RhdGUpIHtcclxuICAgICAgICAgICAgc3RhdGUgPSAoc3RhdGUgPT09IHRydWUpO1xyXG4gICAgICAgICAgICBpZiAoc3RhdGUgPT09IF9ieXBhc3NlZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIF9ieXBhc3NlZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoc3RhdGUpIHtcclxuICAgICAgICAgICAgICAgIGJ5cGFzc0VuYWJsZSgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYnlwYXNzRGlzYWJsZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBfYnlwYXNzZWQ7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5pc0J5cGFzc2VkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gX2J5cGFzc2VkO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMucmVjb25uZWN0ID0gZnVuY3Rpb24gKG5ld19uZXh0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29ubmVjdChuZXdfbmV4dCk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5jb25uZWN0ID0gZnVuY3Rpb24gKG5ld19uZXh0KSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm5leHRfbm9kZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpc2Nvbm5lY3QoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAobmV3X25leHQgIT09IHVuZGVmaW5lZCAmJiBuZXdfbmV4dC5pbnB1dCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5leHRfbm9kZSA9IG5ld19uZXh0O1xyXG4gICAgICAgICAgICAgICAgX291dC5jb25uZWN0KHRoaXMubmV4dF9ub2RlLmlucHV0KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLmRpc2Nvbm5lY3QgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm5leHRfbm9kZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBfb3V0LmRpc2Nvbm5lY3QodGhpcy5uZXh0X25vZGUuaW5wdXQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0X25vZGUgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHBsdWdpbl9ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XHJcbiAgICAgICAgICAgIFwiaGFuZGxlRXZlbnRcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXYuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoZS50eXBlKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiYWRkRXZlbnRMaXN0ZW5lclwiOiB7XHJcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKGEsYixjKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGV2LmFkZEV2ZW50TGlzdGVuZXIoYSxiLGMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcInJlbW92ZUV2ZW50TGlzdGVuZXJcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbihhLGIsYykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBldi5yZW1vdmVFdmVudExpc3RlbmVyKGEsYixjKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgJ2lkJzoge1xyXG4gICAgICAgICAgICAgICAgJ3ZhbHVlJzogaWRcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgJ25vZGUnOiB7XHJcbiAgICAgICAgICAgICAgICAndmFsdWUnOiBwbHVnaW5fbm9kZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAnaW5wdXQnOiB7XHJcbiAgICAgICAgICAgICAgICAnZ2V0JzogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfaW47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICdvdXRwdXQnOiB7XHJcbiAgICAgICAgICAgICAgICAnZ2V0JzogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfb3V0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAnYnlwYXNzZWQnOiB7XHJcbiAgICAgICAgICAgICAgICAnZ2V0JzogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfYnlwYXNzZWQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBQbHVnaW5JbnN0YW5jZS5wcm90b3R5cGUuZmFjdG9yeSA9IHRoaXM7XHJcblxyXG4gICAgdmFyIE1pZGlTeW50aGVzaXNJbnN0YW5jZSA9IGZ1bmN0aW9uKGlkLCBzeW50aE5vZGUpIHtcclxuICAgICAgICB2YXIgX291dCA9IGF1ZGlvX2NvbnRleHQuY3JlYXRlR2FpbigpO1xyXG4gICAgICAgIHN5bnRoTm9kZS5nZXRPdXRwdXRzKClbMF0uY29ubmVjdChfb3V0KTtcclxuXHJcbiAgICAgICAgdGhpcy5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBzeW50aE5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcclxuICAgICAgICAgICAgJ2lkJzoge1xyXG4gICAgICAgICAgICAgICAgJ3ZhbHVlJzogaWRcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgJ25vZGUnOiB7XHJcbiAgICAgICAgICAgICAgICAndmFsdWUnOiBzeW50aE5vZGVcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgJ291dHB1dCc6IHtcclxuICAgICAgICAgICAgICAgICdnZXQnOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9vdXQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBQbHVnaW5Qcm90b3R5cGUgPSBmdW5jdGlvbiAocHJvdG8sIGZhY3RvcnkpIHtcclxuXHQgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcclxuICAgICAgICAgICAgJ25hbWUnOiB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogcHJvdG8ucHJvdG90eXBlLm5hbWVcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgJ3Byb3RvJzoge1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6IHByb3RvXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICd2ZXJzaW9uJzoge1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6IHByb3RvLnByb3RvdHlwZS52ZXJzaW9uXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICd1bmlxdWVJRCc6IHtcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBwcm90by5wcm90b3R5cGUudW5pcXVlSURcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgJ2hhc01pZGlJbnB1dCc6IHtcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBwcm90by5wcm90b3R5cGUuaGFzTWlkaUlucHV0IHx8IGZhbHNlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICdoYXNNaWRpT3V0cHV0Jzoge1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6IHByb3RvLnByb3RvdHlwZS5oYXNNaWRpT3V0cHV0IHx8IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5jcmVhdGVQbHVnaW5JbnN0YW5jZSA9IGFzeW5jIGZ1bmN0aW9uKG93bmVyLCBhc3luYykge1xyXG4gICAgICAgICAgICB2YXIgcCA9IGNyZWF0ZVBsdWdpbkluc3RhbmNlKG93bmVyKTtcclxuICAgICAgICAgICAgaWYgKGFzeW5jID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGF3YWl0IHA7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGNyZWF0ZVBsdWdpbkluc3RhbmNlKG93bmVyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB3YWl0VW50aWxSZWFkeSgpLnRoZW4oZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjaGVja0lzUmVhZHkoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKFwiUGx1Z2luIG5vdCByZWFkeVwiKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShuZXcgcHJvdG8oZmFjdG9yeSwgb3duZXIpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uKHBsdWdpbikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCl7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBsdWdpbi5pbml0aWFsaXNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwbHVnaW4uaW5pdGlhbGlzZSgpLnRoZW4oZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHBsdWdpbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocGx1Z2luKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbihwbHVnaW4pIHtcclxuICAgICAgICAgICAgICAgIHZhciBub2RlO1xyXG4gICAgICAgICAgICAgICAgaWYgKHBsdWdpbi5oYXNNaWRpSW5wdXQgIT09IHRydWUgJiYgcGx1Z2luLmhhc01pZGlPdXRwdXQgIT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBub2RlID0gbmV3IFBsdWdpbkluc3RhbmNlKGN1cnJlbnRQbHVnaW5JZCsrLCBwbHVnaW4pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwbHVnaW4uaGFzTWlkaUlucHV0ID09PSB0cnVlICYmIHBsdWdpbi5oYXNNaWRpT3V0cHV0ICE9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZSA9IG5ldyBNaWRpU3ludGhlc2lzSW5zdGFuY2UoY3VycmVudFBsdWdpbklkKyssIHBsdWdpbik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93KFwiTm8gSW5zdGFuY2UgSG9sZGVyIEF2YWlsYWJsZSFcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhwbHVnaW4sIHtcclxuICAgICAgICAgICAgICAgICAgICAncGx1Z2luSW5zdGFuY2UnOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICd2YWx1ZSc6IG5vZGVcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICdwcm90b3R5cGVPYmplY3QnOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICd2YWx1ZSc6IHNlbGZcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICduYW1lJzoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogcHJvdG8ucHJvdG90eXBlLm5hbWVcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICd2ZXJzaW9uJzoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogcHJvdG8ucHJvdG90eXBlLnZlcnNpb25cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICd1bmlxdWVJRCc6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHByb3RvLnByb3RvdHlwZS51bmlxdWVJRFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgJ1Nlc2lvbkRhdGEnOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBmYWN0b3J5LlNlc3Npb25EYXRhXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAnVXNlckRhdGEnOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBmYWN0b3J5LlVzZXJEYXRhXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhub2RlLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJwcm90b3R5cGVPYmplY3RcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAndmFsdWUnOiBzZWxmXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBcImV4dGVybmFsSW50ZXJmYWNlXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ3ZhbHVlJzogcGx1Z2luLmV4dGVybmFsSW50ZXJmYWNlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBmYWN0b3J5LnJlZ2lzdGVyUGx1Z2luSW5zdGFuY2Uobm9kZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbm9kZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBsb2FkUmVzb3VyY2VDaGFpbihyZXNvdXJjZU9iamVjdCwgcCkge1xyXG4gICAgICAgICAgICBpZiAoIXApIHtcclxuICAgICAgICAgICAgICAgIHZhciBrID0gbG9hZFJlc291cmNlKHJlc291cmNlT2JqZWN0KTtcclxuICAgICAgICAgICAgICAgIGsudGhlbihmdW5jdGlvbiAocmVzb3VyY2VPYmplY3QpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzb3VyY2VPYmplY3QucmVzb3VyY2VzICE9PSB1bmRlZmluZWQgJiYgcmVzb3VyY2VPYmplY3QucmVzb3VyY2VzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXNvdXJjZU9iamVjdC5yZXNvdXJjZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGsgPSBsb2FkUmVzb3VyY2VDaGFpbihyZXNvdXJjZU9iamVjdC5yZXNvdXJjZXNbaV0sIGspO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBwLnRoZW4obG9hZFJlc291cmNlKHJlc291cmNlT2JqZWN0KSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGxvYWRTdHlsZXNoZWV0KHVybCkge1xyXG4gICAgICAgICAgICB2YXIgY3NzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XHJcbiAgICAgICAgICAgIGNzcy5zZXRBdHRyaWJ1dGUoXCJyZWxcIiwgXCJzdHlsZXNoZWV0XCIpO1xyXG4gICAgICAgICAgICBjc3Muc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHQvY3NzXCIpO1xyXG4gICAgICAgICAgICBjc3Muc2V0QXR0cmlidXRlKFwiaHJlZlwiLCB1cmwpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF0uYXBwZW5kQ2hpbGQoY3NzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHJlY3Vyc2l2ZUdldFRlc3QocmVzb3VyY2VPYmplY3QpIHtcclxuICAgICAgICAgICAgaWYgKHJlc291cmNlT2JqZWN0Lmhhc093blByb3BlcnR5KFwibGVuZ3RoXCIpICYmIHJlc291cmNlT2JqZWN0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZWN1cnNpdmVHZXRUZXN0KHJlc291cmNlT2JqZWN0W3Jlc291cmNlT2JqZWN0Lmxlbmd0aCAtIDFdKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXNvdXJjZU9iamVjdC5oYXNPd25Qcm9wZXJ0eShcInJlc291cmNlc1wiKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlY3Vyc2l2ZUdldFRlc3QocmVzb3VyY2VPYmplY3QucmVzb3VyY2VzKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXNvdXJjZU9iamVjdC50ZXN0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgcmVzb3VyY2VQcm9taXNlcyA9IFtdO1xyXG4gICAgICAgIGlmIChwcm90by5wcm90b3R5cGUucmVzb3VyY2VzKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvdG8ucHJvdG90eXBlLnJlc291cmNlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdmFyIHJlc291cmNlID0gcHJvdG8ucHJvdG90eXBlLnJlc291cmNlc1tpXTtcclxuICAgICAgICAgICAgICAgIHJlc291cmNlLnR5cGUgPSByZXNvdXJjZS50eXBlLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHJlc291cmNlLnR5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiY3NzXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRTdHlsZXNoZWV0KHJlc291cmNlLnVybCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJqYXZhc2NyaXB0XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvYmplY3QgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAncHJvbWlzZSc6IGxvYWRSZXNvdXJjZUNoYWluKHJlc291cmNlKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdzdGF0ZSc6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY29tcGxldGUnOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3Rlc3QnOiByZWN1cnNpdmVHZXRUZXN0KHJlc291cmNlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvYmplY3QucHJvbWlzZS50aGVuKG9iamVjdC5jb21wbGV0ZS5iaW5kKG9iamVjdCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvdXJjZVByb21pc2VzLnB1c2gob2JqZWN0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgKFwiQ291bGQgbm90IGxvYWQgXCIgKyByZXNvdXJjZS51cmwgKyBcIiwgaW52YWxpZCByZXNvdXJjZS50eXBlXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmdldFJlc291cmNlUHJvbWlzZXMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNvdXJjZVByb21pc2VzO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgZnVuY3Rpb24gY2hlY2tJc1JlYWR5KCkge1xyXG4gICAgICAgICAgICB2YXIgc3RhdGUgPSB0cnVlO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlc291cmNlUHJvbWlzZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXNvdXJjZVByb21pc2VzW2ldLnN0YXRlICE9PSAxIHx8ICFyZXNvdXJjZVByb21pc2VzW2ldLnRlc3QoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgZnVuY3Rpb24gd2FpdFVudGlsUmVhZHkoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChyZXNvdXJjZVByb21pc2VzKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuYWRkUHJvdG90eXBlID0gZnVuY3Rpb24gKHBsdWdpbl9wcm90bykge1xyXG4gICAgICAgIHZhciBmYWN0b3J5ID0gdGhpcztcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcGx1Z2luX3Byb3RvICE9PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgICAgIHJlamVjdChcIlRoZSBQcm90b3R5cGUgbXVzdCBiZSBhIGZ1bmN0aW9uIVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgcGx1Z2luX3Byb3RvLnByb3RvdHlwZS5uYW1lICE9PSBcInN0cmluZ1wiIHx8IHBsdWdpbl9wcm90by5wcm90b3R5cGUubmFtZS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHJlamVjdChcIk1hbGZvcm1lZCBwbHVnaW4uIE5hbWUgbm90IGRlZmluZWRcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodHlwZW9mIHBsdWdpbl9wcm90by5wcm90b3R5cGUudmVyc2lvbiAhPT0gXCJzdHJpbmdcIiB8fCBwbHVnaW5fcHJvdG8ucHJvdG90eXBlLnZlcnNpb24ubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICByZWplY3QoXCJNYWxmb3JtZWQgcGx1Z2luLiBWZXJzaW9uIG5vdCBkZWZpbmVkXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiBwbHVnaW5fcHJvdG8ucHJvdG90eXBlLnVuaXF1ZUlEICE9PSBcInN0cmluZ1wiIHx8IHBsdWdpbl9wcm90by5wcm90b3R5cGUudW5pcXVlSUQubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICByZWplY3QoXCJNYWxmb3JtZWQgcGx1Z2luLiB1bmlxdWVJRCBub3QgZGVmaW5lZFwiKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUocGx1Z2luX3Byb3RvKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24ocGx1Z2luX3Byb3RvKSB7XHJcbiAgICAgICAgICAgIHZhciB0ZXN0T2JqID0ge1xyXG4gICAgICAgICAgICAgICAgJ3Byb3RvJzogcGx1Z2luX3Byb3RvLFxyXG4gICAgICAgICAgICAgICAgJ25hbWUnOiBwbHVnaW5fcHJvdG8ucHJvdG90eXBlLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAndmVyc2lvbic6IHBsdWdpbl9wcm90by5wcm90b3R5cGUudmVyc2lvbixcclxuICAgICAgICAgICAgICAgICd1bmlxdWVJRCc6IHBsdWdpbl9wcm90by5wcm90b3R5cGUudW5pcXVlSURcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdmFyIG9iaiA9IHBsdWdpbl9wcm90b3R5cGVzLmZpbmQoZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgIHZhciBwYXJhbTtcclxuICAgICAgICAgICAgICAgIHZhciBtYXRjaCA9IDA7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHBhcmFtIGluIHRoaXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZVtwYXJhbV0gPT09IHRoaXNbcGFyYW1dKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoKys7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1hdGNoID09PSA0O1xyXG4gICAgICAgICAgICB9LCB0ZXN0T2JqKTtcclxuICAgICAgICAgICAgaWYgKG9iaikge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgKFwiVGhlIHBsdWdpbiBtdXN0IGJlIHVuaXF1ZSFcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb2JqID0gbmV3IFBsdWdpblByb3RvdHlwZShwbHVnaW5fcHJvdG8sIGZhY3RvcnkpO1xyXG4gICAgICAgICAgICBwbHVnaW5fcHJvdG90eXBlcy5wdXNoKG9iaik7XHJcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKG9iaiwge1xyXG4gICAgICAgICAgICAgICAgJ2ZhY3RvcnknOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ3ZhbHVlJzogZmFjdG9yeVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIG9iajtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5nZXRQcm90b3R5cGVzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBwbHVnaW5fcHJvdG90eXBlcztcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5nZXRBdWRpb1BsdWdpblByb3RvdHlwZXMgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gcGx1Z2luX3Byb3RvdHlwZXMuZmlsdGVyKGZ1bmN0aW9uKHByb3RvKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwcm90by5oYXNNaWRpSW5wdXQgPT0gZmFsc2UgJiYgcHJvdG8uaGFzTWlkaU91dHB1dCA9PSBmYWxzZTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5nZXRNaWRpU3ludGhQcm90b3R5cGVzID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHBsdWdpbl9wcm90b3R5cGVzLmZpbHRlcihmdW5jdGlvbihwcm90bykge1xyXG4gICAgICAgICAgICByZXR1cm4gcHJvdG8uaGFzTWlkaUlucHV0ID09IHRydWUgJiYgcHJvdG8uaGFzTWlkaU91dHB1dCA9PSBmYWxzZTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5nZXRNaWRpUGx1Z2luUHJvdG90eXBlcyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiBwbHVnaW5fcHJvdG90eXBlcy5maWx0ZXIoZnVuY3Rpb24ocHJvdG8pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHByb3RvLmhhc01pZGlJbnB1dCA9PSB0cnVlICYmIHByb3RvLmhhc01pZGlPdXRwdXQgPT0gdHJ1ZTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5nZXRBbGxQbHVnaW5zID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBwbHVnaW5zTGlzdDtcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5nZXRBbGxQbHVnaW5zT2JqZWN0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBvYmogPSB7XHJcbiAgICAgICAgICAgICAgICAnZmFjdG9yeSc6IHRoaXMsXHJcbiAgICAgICAgICAgICAgICAnc3ViRmFjdG9yaWVzJzogW11cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgaTtcclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgc3ViRmFjdG9yaWVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIG9iai5zdWJGYWN0b3JpZXMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAnc3ViRmFjdG9yeSc6IHN1YkZhY3Rvcmllc1tpXSxcclxuICAgICAgICAgICAgICAgICdwbHVnaW5zJzogc3ViRmFjdG9yaWVzW2ldLmdldFBsdWdpbnMoKVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG9iajtcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5jcmVhdGVTdWJGYWN0b3J5ID0gZnVuY3Rpb24oY2hhaW5TdGFydCwgY2hhaW5TdG9wKSB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKFwiREVQUkVDQVRFRCAtIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBkZXByZWNhdGVkIGluIGZhdm91ciBvZiBcXFwiY3JlYXRlQXVkaW9QbHVnaW5DaGFpbk1hbmFnZXJcXFwiXCIpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZUF1ZGlvUGx1Z2luQ2hhaW5NYW5hZ2VyKGNoYWluU3RhcnQsIGNoYWluU3RvcCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuZGVzdHJveVN1YkZhY3RvcnkgPSBmdW5jdGlvbihjaGFpblN0YXJ0LCBjaGFpblN0b3ApIHtcclxuICAgICAgICBjb25zb2xlLndhcm4oXCJERVBSRUNBVEVEIC0gVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGRlcHJlY2F0ZWQgaW4gZmF2b3VyIG9mIFxcXCJkZXN0cm95QXVkaW9QbHVnaW5DaGFpbk1hbmFnZXJcXFwiXCIpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRlc3Ryb3lBdWRpb1BsdWdpbkNoYWluTWFuYWdlcihjaGFpblN0YXJ0LCBjaGFpblN0b3ApO1xyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLmNyZWF0ZUF1ZGlvUGx1Z2luQ2hhaW5NYW5hZ2VyID0gZnVuY3Rpb24gKGNoYWluU3RhcnQsIGNoYWluU3RvcCkge1xyXG4gICAgICAgIHZhciBub2RlID0gbmV3IEF1ZGlvUGx1Z2luQ2hhaW5NYW5hZ2VyKHRoaXMsIGNoYWluU3RhcnQsIGNoYWluU3RvcCk7XHJcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMobm9kZSwge1xyXG4gICAgICAgICAgICAnU2Vzc2lvbkRhdGEnOiB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogdGhpcy5TZXNzaW9uRGF0YVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAnVXNlckRhdGEnOiB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogdGhpcy5Vc2VyRGF0YVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc3ViRmFjdG9yaWVzLnB1c2gobm9kZSk7XHJcbiAgICAgICAgcmV0dXJuIG5vZGU7XHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuZHVwbGljYXRlQXVkaW9QbHVnaW5DaGFpbk1hbmFnZXIgPSBmdW5jdGlvbihzb3VyY2VDaGFpbk1hbmFnZXIsIGNoYWluU3RhcnQsIGNoYWluU3RvcCkge1xyXG4gICAgICAgIHZhciBub2RlID0gdGhpcy5jcmVhdGVBdWRpb1BsdWdpbkNoYWluTWFuYWdlcihjaGFpblN0YXJ0LCBjaGFpblN0b3ApO1xyXG4gICAgICAgIHZhciBwcm9taXNlQ2hhaW4gPSBQcm9taXNlLnJlc29sdmUoKTtcclxuICAgICAgICBzb3VyY2VDaGFpbk1hbmFnZXIuZ2V0UGx1Z2lucygpLmZvckVhY2goZnVuY3Rpb24ocGx1Z2luX29iamVjdCkge1xyXG4gICAgICAgICAgICBwcm9taXNlQ2hhaW4gPSBwcm9taXNlQ2hhaW4udGhlbihmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBub2RlLmNyZWF0ZVBsdWdpbihwbHVnaW5fb2JqZWN0LnByb3RvdHlwZU9iamVjdClcclxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKG5ld1BsdWdpbikge1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld1BsdWdpbi5ub2RlLnBhcmFtZXRlcnMuc2V0UGFyYW1ldGVyc0J5T2JqZWN0KHBsdWdpbl9vYmplY3Qubm9kZS5wYXJhbWV0ZXJzLmdldFBhcmFtZXRlck9iamVjdCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHByb21pc2VDaGFpbi50aGVuKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbm9kZTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5kZXN0cm95QXVkaW9QbHVnaW5DaGFpbk1hbmFnZXIgPSBmdW5jdGlvbiAoU3ViRmFjdG9yeSkge1xyXG4gICAgICAgIHZhciBpbmRleCA9IHN1YkZhY3Rvcmllcy5maW5kSW5kZXgoZnVuY3Rpb24gKGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgaWYgKGVsZW1lbnQgPT09IHRoaXMpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9LCBTdWJGYWN0b3J5KTtcclxuICAgICAgICBpZiAoaW5kZXggPj0gMCkge1xyXG4gICAgICAgICAgICBzdWJGYWN0b3JpZXMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgU3ViRmFjdG9yeS5kZXN0cm95KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLmNyZWF0ZU1pZGlTeW50aGVzaXNlckhvc3QgPSBmdW5jdGlvbihmYWN0b3J5KSB7XHJcbiAgICAgICAgaWYgKGZhY3RvcnkgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBmYWN0b3J5ID0gdGhpcztcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGhvc3QgPSBuZXcgTWlkaVN5bnRoZXNpc2VySG9zdChmYWN0b3J5KTtcclxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhob3N0LCB7XHJcbiAgICAgICAgICAgICdTZXNzaW9uRGF0YSc6IHtcclxuICAgICAgICAgICAgICAgIHZhbHVlOiB0aGlzLlNlc3Npb25EYXRhXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICdVc2VyRGF0YSc6IHtcclxuICAgICAgICAgICAgICAgIHZhbHVlOiB0aGlzLlVzZXJEYXRhXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBzeW50aGVzaXNlckhvc3RzLnB1c2goaG9zdCk7XHJcbiAgICAgICAgcmV0dXJuIGhvc3Q7XHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuZGVzdHJveU1pZGlTeW50aGVzaXNlckhvc3QgPSBmdW5jdGlvbiAoaG9zdCkge1xyXG4gICAgICAgIHZhciBpbmRleCA9IHN5bnRoZXNpc2VySG9zdHMuZmluZEluZGV4KGZ1bmN0aW9uIChlbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGlmIChlbGVtZW50ID09PSB0aGlzKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSwgaG9zdCk7XHJcbiAgICAgICAgaWYgKGluZGV4ID49IDApIHtcclxuICAgICAgICAgICAgc3ludGhlc2lzZXJIb3N0cy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICBob3N0LmRlc3Ryb3koKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMucmVnaXN0ZXJQbHVnaW5JbnN0YW5jZSA9IGZ1bmN0aW9uIChpbnN0YW5jZSkge1xyXG4gICAgICAgIGlmIChwbHVnaW5zTGlzdC5maW5kKGZ1bmN0aW9uIChwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcCA9PT0gdGhpcztcclxuICAgICAgICAgICAgfSwgaW5zdGFuY2UpKSB7XHJcbiAgICAgICAgICAgIHRocm93IChcIlBsdWdpbiBJbnN0YW5jZSBub3QgdW5pcXVlXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwbHVnaW5zTGlzdC5wdXNoKGluc3RhbmNlKTtcclxuICAgICAgICBpZiAoYXVkaW9TdGFydGVkKSB7XHJcbiAgICAgICAgICAgIHZhciBjb250ZXh0X3RpbWUgPSBhdWRpb19jb250ZXh0LmN1cnJlbnRUaW1lO1xyXG4gICAgICAgICAgICB2YXIgcHJvZ3JhbV90aW1lID0gdGhpcy5nZXRDdXJyZW50UHJvZ3JhbVRpbWUoKTtcclxuICAgICAgICAgICAgcGx1Z2luQXVkaW9TdGFydChpbnN0YW5jZS5ub2RlLCBwcm9ncmFtX3RpbWUsIGNvbnRleHRfdGltZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLmRlbGV0ZVBsdWdpbiA9IGZ1bmN0aW9uIChpZCkge1xyXG4gICAgICAgIHZhciBpbmRleCA9IHBsdWdpbnNMaXN0LmZpbmRJbmRleChmdW5jdGlvbiAocCkge1xyXG4gICAgICAgICAgICByZXR1cm4gcC5pZCA9PT0gaWQ7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKGluZGV4ID49IDApIHtcclxuICAgICAgICAgICAgdmFyIHAgPSBwbHVnaW5zTGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICBwWzBdLm5vZGUuZXh0ZXJuYWxJbnRlcmZhY2UuY2xvc2VXaW5kb3dzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLmdldEN1cnJlbnRQcm9ncmFtVGltZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmIChhdWRpb1N0YXJ0ZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGF1ZGlvX2NvbnRleHQuY3VycmVudFRpbWUgLSBhdWRpb1N0YXJ0Q29udGV4dFRpbWUgKyBhdWRpb1N0YXJ0UHJvZ3JhbVRpbWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGF1ZGlvU3RhcnRQcm9ncmFtVGltZVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5zZXRDdXJyZW50UHJvZ3JhbVRpbWUgPSBmdW5jdGlvbih0aW1lKSB7XHJcbiAgICAgICAgaWYgKGF1ZGlvU3RhcnRlZCkge1xyXG4gICAgICAgICAgICB0aHJvdyhcIk11c3Qgc3RvcCBwbGF5YmFjayB0byBzZXQgdGhlIGN1cnJlbnQgcHJvZ3JhbSB0aW1lXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIHRpbWUgPT0gXCJudW1iZXJcIiAmJiB0aW1lID49IDApIHtcclxuICAgICAgICAgICAgYXVkaW9TdGFydFByb2dyYW1UaW1lID0gdGltZTtcclxuICAgICAgICAgICAgdGhpcy5QbHVnaW5HVUkucG9sbEFsbFBsdWdpbnMoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIHBsdWdpbkF1ZGlvU3RhcnQobm9kZSwgcHJvZ3JhbV90aW1lLCBjb250ZXh0X3RpbWUpIHtcclxuICAgICAgICBub2RlLnN0YXJ0LmNhbGwobm9kZSwgcHJvZ3JhbV90aW1lLCBjb250ZXh0X3RpbWUpO1xyXG4gICAgICAgIG5vZGUucGFyYW1ldGVycy5nZXRQYXJhbWV0ZXJOYW1lcygpLmZvckVhY2goZnVuY3Rpb24obikge1xyXG4gICAgICAgICAgICB2YXIgcCA9IG5vZGUucGFyYW1ldGVycy5nZXRQYXJhbWV0ZXJCeU5hbWUobik7XHJcbiAgICAgICAgICAgIGlmIChwLmVuYWJsZWQpIHtcclxuICAgICAgICAgICAgICAgIHAuc3RhcnQocHJvZ3JhbV90aW1lLCBjb250ZXh0X3RpbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcGx1Z2luQXVkaW9TdG9wKG5vZGUpIHtcclxuICAgICAgICB2YXIgY3QgPSBhdWRpb19jb250ZXh0LmN1cnJlbnRUaW1lO1xyXG4gICAgICAgIG5vZGUuc3RvcC5jYWxsKG5vZGUsIGN0KTtcclxuICAgICAgICBub2RlLnBhcmFtZXRlcnMuZ2V0UGFyYW1ldGVyTmFtZXMoKS5mb3JFYWNoKGZ1bmN0aW9uKG4pIHtcclxuICAgICAgICAgICAgdmFyIHAgPSBub2RlLnBhcmFtZXRlcnMuZ2V0UGFyYW1ldGVyQnlOYW1lKG4pO1xyXG4gICAgICAgICAgICBpZiAocC5lbmFibGVkKSB7XHJcbiAgICAgICAgICAgICAgICBwLnN0b3AoY3QpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdHJpZ2dlckF1ZGlvU3RhcnQocHJvZ3JhbV90aW1lLCBjb250ZXh0X3RpbWUpIHtcclxuICAgICAgICBwbHVnaW5zTGlzdC5mb3JFYWNoKGZ1bmN0aW9uIChuKSB7XHJcbiAgICAgICAgICAgIHBsdWdpbkF1ZGlvU3RhcnQobi5ub2RlLCBwcm9ncmFtX3RpbWUsIGNvbnRleHRfdGltZSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHRyaWdnZXJBdWRpb1N0b3AoKSB7XHJcbiAgICAgICAgcGx1Z2luc0xpc3QuZm9yRWFjaChmdW5jdGlvbiAobikge1xyXG4gICAgICAgICAgICBwbHVnaW5BdWRpb1N0b3Aobi5ub2RlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmF1ZGlvU3RhcnQgPSBmdW5jdGlvbiAocHJvZ3JhbV90aW1lLCBjb250ZXh0X3RpbWUpIHtcclxuICAgICAgICBpZiAoY29udGV4dF90aW1lID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgY29udGV4dF90aW1lID0gYXVkaW9fY29udGV4dC5jdXJyZW50VGltZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHByb2dyYW1fdGltZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHByb2dyYW1fdGltZSA9IDA7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcIkFzc3VtaW5nIHN0YXJ0IHRpbWUgYXQgMFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFhdWRpb1N0YXJ0ZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRDdXJyZW50UHJvZ3JhbVRpbWUocHJvZ3JhbV90aW1lKTtcclxuICAgICAgICAgICAgYXVkaW9TdGFydENvbnRleHRUaW1lID0gY29udGV4dF90aW1lO1xyXG4gICAgICAgICAgICB0cmlnZ2VyQXVkaW9TdGFydChwcm9ncmFtX3RpbWUsIGNvbnRleHRfdGltZSk7XHJcbiAgICAgICAgICAgIGF1ZGlvU3RhcnRlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHRoaXMuYXVkaW9TdG9wID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmIChhdWRpb1N0YXJ0ZWQpIHtcclxuICAgICAgICAgICAgdHJpZ2dlckF1ZGlvU3RvcCgpO1xyXG4gICAgICAgICAgICBhdWRpb1N0YXJ0ZWQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBGZWF0dXJlTWFwID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBNYXBwaW5ncyA9IFtdO1xyXG5cclxuICAgICAgICB2YXIgRmVhdHVyZU5vZGUgPSBmdW5jdGlvbiAobm9kZSkge1xyXG4gICAgICAgICAgICB0aGlzLm5hbWUgPSBub2RlLm5hbWU7XHJcbiAgICAgICAgICAgIHRoaXMucGFyYW1ldGVycyA9IHRoaXMucGFyYW1ldGVycztcclxuICAgICAgICAgICAgdGhpcy5mZWF0dXJlcyA9IFtdO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGdldEZlYXR1cmVOb2RlKGxpc3QsIGNoZWNrKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBsaXN0LmZpbmQoZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBlLm5hbWUgPT09IHRoaXMubmFtZTtcclxuICAgICAgICAgICAgfSwgY2hlY2spO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gYWRkRmVhdHVyZU5vZGUoZmVhdHVyZU5vZGUsIGxpc3QpIHtcclxuICAgICAgICAgICAgdmFyIG5vZGUgPSBuZXcgRmVhdHVyZU5vZGUoZmVhdHVyZU5vZGUpO1xyXG4gICAgICAgICAgICBsaXN0LnB1c2gobm9kZSk7XHJcbiAgICAgICAgICAgIHJldHVybiBub2RlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIFNvdXJjZU1hcCA9IGZ1bmN0aW9uIChTZW5kZXIsIHBsdWdpbkluc3RhY2UpIHtcclxuICAgICAgICAgICAgdmFyIE1hcHBpbmdzID0gW107XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0U291cmNlSW5zdGFuY2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcGx1Z2luSW5zdGFjZTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdGhpcy5nZXRTZW5kZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gU2VuZGVyO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gZmluZEZlYXR1cmVPYmplY3QoZmVhdHVyZU9iamVjdCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIE1hcHBpbmdzLmZpbmQoZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKGUub3V0cHV0SW5kZXggPT09IHRoaXMub3V0cHV0SW5kZXggJiYgZS5mcmFtZVNpemUgPT09IHRoaXMuZnJhbWVTaXplKTtcclxuICAgICAgICAgICAgICAgIH0sIGZlYXR1cmVPYmplY3QpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiB1cGRhdGVTZW5kZXIoKSB7XHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiByZWN1cnNpdmVGaW5kKGZlYXR1cmVMaXN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGYsIGxpc3QgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGYgPSAwOyBmIDwgZmVhdHVyZUxpc3QubGVuZ3RoOyBmKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGZlYXR1cmVOb2RlID0gZ2V0RmVhdHVyZU5vZGUobGlzdCwgZmVhdHVyZUxpc3RbZl0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWZlYXR1cmVOb2RlIHx8IChmZWF0dXJlTGlzdC5wYXJhbWV0ZXJzICYmIGZlYXR1cmVMaXN0W2ZdLnBhcmFtZXRlcnMubGVuZ3RoICE9PSAwKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmVhdHVyZU5vZGUgPSBhZGRGZWF0dXJlTm9kZShmZWF0dXJlTGlzdFtmXSwgbGlzdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZlYXR1cmVMaXN0W2ZdLmZlYXR1cmVzICYmIGZlYXR1cmVMaXN0W2ZdLmZlYXR1cmVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZlYXR1cmVOb2RlLmZlYXR1cmVzID0gcmVjdXJzaXZlRmluZChmZWF0dXJlTGlzdFtmXS5mZWF0dXJlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxpc3Q7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2YXIgaSwgb3V0cHV0TGlzdCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IE1hcHBpbmdzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG91dHB1dExpc3RbTWFwcGluZ3NbaV0ub3V0cHV0SW5kZXhdID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0TGlzdFtNYXBwaW5nc1tpXS5vdXRwdXRJbmRleF0gPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZyYW1lTGlzdCA9IG91dHB1dExpc3RbTWFwcGluZ3NbaV0ub3V0cHV0SW5kZXhdLmZpbmQoZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGUuZnJhbWVTaXplID09PSB0aGlzLmZyYW1lU2l6ZTtcclxuICAgICAgICAgICAgICAgICAgICB9LCBNYXBwaW5nc1tpXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFmcmFtZUxpc3QpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnJhbWVMaXN0ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2ZyYW1lU2l6ZSc6IE1hcHBpbmdzW2ldLmZyYW1lU2l6ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdmZWF0dXJlTGlzdCc6IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXRMaXN0W01hcHBpbmdzW2ldLm91dHB1dEluZGV4XS5wdXNoKGZyYW1lTGlzdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGZyYW1lTGlzdC5mZWF0dXJlTGlzdCA9IHJlY3Vyc2l2ZUZpbmQoTWFwcGluZ3NbaV0uZ2V0RmVhdHVyZUxpc3QoKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBTZW5kZXIudXBkYXRlRmVhdHVyZXMob3V0cHV0TGlzdCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMucmVxdWVzdEZlYXR1cmVzID0gZnVuY3Rpb24gKHJlcXVlc3Rvckluc3RhbmNlLCBmZWF0dXJlT2JqZWN0KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbWFwID0gZmluZEZlYXR1cmVPYmplY3QoZmVhdHVyZU9iamVjdCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIW1hcCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcCA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ291dHB1dEluZGV4JzogZmVhdHVyZU9iamVjdC5vdXRwdXRJbmRleCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2ZyYW1lU2l6ZSc6IGZlYXR1cmVPYmplY3QuZnJhbWVTaXplLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAncmVxdWVzdG9ycyc6IFtdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnZ2V0RmVhdHVyZUxpc3QnOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgRiA9IFtdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5yZXF1ZXN0b3JzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRiA9IEYuY29uY2F0KHRoaXMucmVxdWVzdG9yc1tpXS5nZXRGZWF0dXJlTGlzdCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBGO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICBNYXBwaW5ncy5wdXNoKG1hcCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2YXIgcmVxdWVzdG9yID0gbWFwLnJlcXVlc3RvcnMuZmluZChmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlLmdldFJlcXVlc3Rvckluc3RhbmNlKCkgPT09IHRoaXM7XHJcbiAgICAgICAgICAgICAgICB9LCByZXF1ZXN0b3JJbnN0YW5jZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXJlcXVlc3Rvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3RvciA9IG5ldyBSZXF1ZXN0b3JNYXAocmVxdWVzdG9ySW5zdGFuY2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcC5yZXF1ZXN0b3JzLnB1c2gocmVxdWVzdG9yKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJlcXVlc3Rvci5hZGRGZWF0dXJlcyhmZWF0dXJlT2JqZWN0KTtcclxuICAgICAgICAgICAgICAgIHVwZGF0ZVNlbmRlcigpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgdGhpcy5maW5kRnJhbWVNYXAgPSBmdW5jdGlvbiAob3V0cHV0SW5kZXgsIGZyYW1lU2l6ZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIE1hcHBpbmdzLmZpbmQoZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKGUub3V0cHV0SW5kZXggPT09IG91dHB1dEluZGV4ICYmIGUuZnJhbWVTaXplID09PSBmcmFtZVNpemUpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICB0aGlzLmNhbmNlbEZlYXR1cmVzID0gZnVuY3Rpb24gKHJlcXVlc3Rvckluc3RhbmNlLCBmZWF0dXJlT2JqZWN0KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZmVhdHVyZU9iamVjdCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgTWFwcGluZ3MuZm9yRWFjaChmdW5jdGlvbiAobWFwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZXF1ZXN0b3JJbmRleCA9IG1hcC5yZXF1ZXN0b3JzLmZpbmRJbmRleChmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGUuZ2V0UmVxdWVzdG9ySW5zdGFuY2UoKSA9PT0gcmVxdWVzdG9ySW5zdGFuY2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVxdWVzdG9ySW5kZXggPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFwLnJlcXVlc3RvcnMuc3BsaWNlKHJlcXVlc3RvckluZGV4LCAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbWFwID0gZmluZEZlYXR1cmVPYmplY3QoZmVhdHVyZU9iamVjdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFtYXApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB2YXIgcmVxdWVzdG9yID0gbWFwLnJlcXVlc3RvcnMuZmluZChmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZS5nZXRSZXF1ZXN0b3JJbnN0YW5jZSgpID09PSB0aGlzO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIHJlcXVlc3Rvckluc3RhbmNlKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXJlcXVlc3Rvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3Rvci5kZWxldGVGZWF0dXJlcyhmZWF0dXJlT2JqZWN0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHVwZGF0ZVNlbmRlcigpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdmFyIFJlcXVlc3Rvck1hcCA9IGZ1bmN0aW9uIChwbHVnaW5JbnN0YW5jZSkge1xyXG4gICAgICAgICAgICB2YXIgRmVhdHVyZXMgPSBbXTtcclxuICAgICAgICAgICAgdmFyIFJlY2VpdmVyID0gcGx1Z2luSW5zdGFuY2Uubm9kZS5mZWF0dXJlTWFwLlJlY2VpdmVyO1xyXG4gICAgICAgICAgICB0aGlzLmdldFJlcXVlc3Rvckluc3RhbmNlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHBsdWdpbkluc3RhbmNlO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gcmVjdXJzaXZlbHlBZGRGZWF0dXJlcyhyb290QXJyYXksIGZlYXR1cmVPYmplY3QpIHtcclxuICAgICAgICAgICAgICAgIHZhciBpO1xyXG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGZlYXR1cmVPYmplY3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBDaGVjayB3ZSBoYXZlIG5vdCBhbHJlYWR5IGxpc3RlZCB0aGUgZmVhdHVyZVxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBmZWF0dXJlTm9kZSA9IGdldEZlYXR1cmVOb2RlKHJvb3RBcnJheSwgZmVhdHVyZU9iamVjdFtpXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFmZWF0dXJlTm9kZSB8fCAoZmVhdHVyZU9iamVjdFtpXS5wYXJhbWV0ZXJzICYmIGZlYXR1cmVPYmplY3RbaV0ucGFyYW1ldGVycy5sZW5ndGggIT09IDApKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZlYXR1cmVOb2RlID0gYWRkRmVhdHVyZU5vZGUoZmVhdHVyZU9iamVjdFtpXSwgcm9vdEFycmF5KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZlYXR1cmVPYmplY3RbaV0uZmVhdHVyZXMgIT09IHVuZGVmaW5lZCAmJiBmZWF0dXJlT2JqZWN0W2ldLmZlYXR1cmVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVjdXJzaXZlbHlBZGRGZWF0dXJlcyhmZWF0dXJlTm9kZS5mZWF0dXJlcywgZmVhdHVyZU9iamVjdFtpXS5mZWF0dXJlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiByZWN1cnNpdmVseURlbGV0ZUZlYXR1cmVzKHJvb3RBcnJheSwgZmVhdHVyZU9iamVjdCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGwgPSBmZWF0dXJlT2JqZWN0Lmxlbmd0aCxcclxuICAgICAgICAgICAgICAgICAgICBpO1xyXG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGw7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIEZpbmQgdGhlIGZlYXR1cmVcclxuICAgICAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSBnZXRGZWF0dXJlTm9kZShyb290QXJyYXksIGZlYXR1cmVPYmplY3RbaV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmZWF0dXJlT2JqZWN0W2luZGV4XS5mZWF0dXJlcyAmJiBmZWF0dXJlT2JqZWN0W2luZGV4XS5mZWF0dXJlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWN1cnNpdmVseURlbGV0ZUZlYXR1cmVzKHJvb3RBcnJheVtpbmRleF0uZmVhdHVyZXMsIGZlYXR1cmVPYmplY3RbaW5kZXhdLmZlYXR1cmVzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZlYXR1cmVzLnNwbGljZShpbmRleCwgMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLmFkZEZlYXR1cmVzID0gZnVuY3Rpb24gKGZlYXR1cmVPYmplY3QpIHtcclxuICAgICAgICAgICAgICAgIHJlY3Vyc2l2ZWx5QWRkRmVhdHVyZXMoRmVhdHVyZXMsIGZlYXR1cmVPYmplY3QuZmVhdHVyZXMpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgdGhpcy5kZWxldGVGZWF0dXJlcyA9IGZ1bmN0aW9uIChmZWF0dXJlT2JqZWN0KSB7XHJcbiAgICAgICAgICAgICAgICByZWN1cnNpdmVseURlbGV0ZUZlYXR1cmVzKEZlYXR1cmVzLCBmZWF0dXJlT2JqZWN0LmZlYXR1cmVzKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZ2V0RmVhdHVyZUxpc3QgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gRmVhdHVyZXM7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICB0aGlzLnBvc3RGZWF0dXJlcyA9IGZ1bmN0aW9uIChmZWF0dXJlT2JqZWN0KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbWVzc2FnZSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ3BsdWdpbic6IGZlYXR1cmVPYmplY3QucGx1Z2luLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnb3V0cHV0SW5kZXgnOiBmZWF0dXJlT2JqZWN0Lm91dHB1dEluZGV4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnZnJhbWVTaXplJzogZmVhdHVyZU9iamVjdC5mcmFtZVNpemUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdmZWF0dXJlcyc6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdudW1iZXJPZkNoYW5uZWxzJzogZmVhdHVyZU9iamVjdC5yZXN1bHRzLm51bWJlck9mQ2hhbm5lbHMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAncmVzdWx0cyc6IFtdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGk7XHJcblxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gcmVjdXJzaXZlUG9zdEZlYXR1cmVzKHJvb3ROb2RlLCByZXN1bHRzTGlzdCwgRmVhdHVyZUxpc3QpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBBZGQgdGhlIHJlc3VsdHMgdHJlZSB3aGVyZSBuZWNlc3NhcnlcclxuICAgICAgICAgICAgICAgICAgICB2YXIgaSwgcGFyYW07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGFvKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGUubmFtZSA9PT0gcGFyYW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGZvciAocGFyYW0gaW4gcmVzdWx0c0xpc3QpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdHNMaXN0Lmhhc093blByb3BlcnR5KHBhcmFtKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5vZGUgPSBGZWF0dXJlTGlzdC5maW5kKGFvKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChub2RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdHNMaXN0W3BhcmFtXS5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0ICYmIG5vZGUucmVzdWx0cykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb290Tm9kZVtwYXJhbV0gPSB7fTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVjdXJzaXZlUG9zdEZlYXR1cmVzKHJvb3ROb2RlW3BhcmFtXSwgcmVzdWx0c0xpc3RbcGFyYW1dLCBub2RlLnJlc3VsdHMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvb3ROb2RlW3BhcmFtXSA9IHJlc3VsdHNMaXN0W3BhcmFtXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyBQZXJmb3JtIHJlY3Vyc2l2ZSBtYXAgZm9yIGVhY2ggY2hhbm5lbFxyXG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGZlYXR1cmVPYmplY3QucmVzdWx0cy5udW1iZXJPZkNoYW5uZWxzOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLmZlYXR1cmVzLnJlc3VsdHNbaV0gPSB7fTtcclxuICAgICAgICAgICAgICAgICAgICByZWN1cnNpdmVQb3N0RmVhdHVyZXMobWVzc2FnZS5mZWF0dXJlcy5yZXN1bHRzW2ldLCBmZWF0dXJlT2JqZWN0LnJlc3VsdHMucmVzdWx0c1tpXS5yZXN1bHRzLCBGZWF0dXJlcyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBwbHVnaW5JbnN0YW5jZS5ub2RlLmZlYXR1cmVNYXAuUmVjZWl2ZXIucG9zdEZlYXR1cmVzKG1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGZpbmRTb3VyY2VJbmRleChTZW5kZXIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIE1hcHBpbmdzLmZpbmRJbmRleChmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGUuZ2V0U2VuZGVyKCkgPT09IHRoaXM7XHJcbiAgICAgICAgICAgIH0sIFNlbmRlcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBmaW5kU291cmNlTWFwKE1hcHBpbmdzLCBzb3VyY2UsIHBsdWdpblNlbmRlcikge1xyXG4gICAgICAgICAgICB2YXIgc291cmNlTWFwID0gTWFwcGluZ3NbZmluZFNvdXJjZUluZGV4KHNvdXJjZSldO1xyXG4gICAgICAgICAgICBpZiAoIXNvdXJjZU1hcCkge1xyXG4gICAgICAgICAgICAgICAgc291cmNlTWFwID0gTWFwcGluZ3NbZmluZFNvdXJjZUluZGV4KHBsdWdpblNlbmRlcildO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFzb3VyY2VNYXApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyAoXCJDb3VsZCBub3QgbG9jYXRlIHNvdXJjZSBtYXBcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHNvdXJjZU1hcDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEdFTkVSQUwgSU5URVJGQUNFXHJcbiAgICAgICAgdGhpcy5jcmVhdGVTb3VyY2VNYXAgPSBmdW5jdGlvbiAoU2VuZGVyLCBwbHVnaW5JbnN0YW5jZSkge1xyXG4gICAgICAgICAgICB2YXIgbm9kZSA9IG5ldyBTb3VyY2VNYXAoU2VuZGVyLCBwbHVnaW5JbnN0YW5jZSk7XHJcbiAgICAgICAgICAgIE1hcHBpbmdzLnB1c2gobm9kZSk7XHJcbiAgICAgICAgICAgIHJldHVybiBub2RlO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5kZWxldGVTb3VyY2VNYXAgPSBmdW5jdGlvbiAoU2VuZGVyKSB7XHJcbiAgICAgICAgICAgIHZhciBpbmRleCA9IGZpbmRTb3VyY2VJbmRleChTZW5kZXIpO1xyXG4gICAgICAgICAgICBpZiAoaW5kZXggPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyAoXCJDb3VsZCBub3QgZmluZCB0aGUgc291cmNlIG1hcCBmb3IgdGhlIHBsdWdpblwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBNYXBwaW5ncy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuZ2V0UGx1Z2luU2VuZGVyID0gZnVuY3Rpb24gKHBsdWdpbikge1xyXG4gICAgICAgICAgICBpZiAocGx1Z2luLmNvbnN0cnVjdG9yID09PSBQbHVnaW5JbnN0YW5jZSkge1xyXG4gICAgICAgICAgICAgICAgcGx1Z2luID0gcGx1Z2luLm5vZGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHBsdWdpbi5mZWF0dXJlTWFwLlNlbmRlcjtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLnJlcXVlc3RGZWF0dXJlcyA9IGZ1bmN0aW9uIChyZXF1ZXN0b3IsIHNvdXJjZSwgZmVhdHVyZU9iamVjdCkge1xyXG4gICAgICAgICAgICBpZiAocmVxdWVzdG9yLmNvbnN0cnVjdG9yICE9PSBQbHVnaW5JbnN0YW5jZSkge1xyXG4gICAgICAgICAgICAgICAgcmVxdWVzdG9yID0gcmVxdWVzdG9yLnBsdWdpbkluc3RhbmNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIEdldCB0aGUgc291cmNlIG1hcFxyXG4gICAgICAgICAgICB2YXIgcGx1Z2luU2VuZGVyID0gdGhpcy5nZXRQbHVnaW5TZW5kZXIoc291cmNlKTtcclxuICAgICAgICAgICAgdmFyIHNvdXJjZU1hcCA9IGZpbmRTb3VyY2VNYXAoTWFwcGluZ3MsIHNvdXJjZSwgcGx1Z2luU2VuZGVyKTtcclxuICAgICAgICAgICAgc291cmNlTWFwLnJlcXVlc3RGZWF0dXJlcyhyZXF1ZXN0b3IsIGZlYXR1cmVPYmplY3QpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5kZWxldGVGZWF0dXJlcyA9IGZ1bmN0aW9uIChyZXF1ZXN0b3IsIHNvdXJjZSwgZmVhdHVyZU9iamVjdCkge1xyXG4gICAgICAgICAgICBpZiAocmVxdWVzdG9yLmNvbnN0cnVjdG9yICE9PSBQbHVnaW5JbnN0YW5jZSkge1xyXG4gICAgICAgICAgICAgICAgcmVxdWVzdG9yID0gcmVxdWVzdG9yLnBsdWdpbkluc3RhbmNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChzb3VyY2UgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgTWFwcGluZ3MuZm9yRWFjaChmdW5jdGlvbiAoc291cmNlTWFwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc291cmNlTWFwLmNhbmNlbEZlYXR1cmVzKHJlcXVlc3Rvcik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIEdldCB0aGUgc291cmNlIG1hcFxyXG4gICAgICAgICAgICAgICAgdmFyIHBsdWdpblNlbmRlciA9IHRoaXMuZ2V0UGx1Z2luU2VuZGVyKHNvdXJjZSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgc291cmNlTWFwID0gZmluZFNvdXJjZU1hcChNYXBwaW5ncywgc291cmNlLCBwbHVnaW5TZW5kZXIpO1xyXG4gICAgICAgICAgICAgICAgc291cmNlTWFwLmNhbmNlbEZlYXR1cmVzKHJlcXVlc3RvciwgZmVhdHVyZU9iamVjdCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuZ2V0RmVhdHVyZUxpc3QgPSBmdW5jdGlvbiAocmVxdWVzdG9yLCBzb3VyY2UpIHt9O1xyXG4gICAgICAgIHRoaXMucG9zdEZlYXR1cmVzID0gZnVuY3Rpb24gKGZlYXR1cmVPYmplY3QpIHtcclxuICAgICAgICAgICAgLy8gUmVjZWl2ZSBmcm9tIHRoZSBTZW5kZXIgb2JqZWN0c1xyXG4gICAgICAgICAgICAvLyBUcmlnZ2VyIGRpc3RyaWJ1dGVkIHNlYXJjaCBmb3IgcmVzdWx0cyB0cmFuc21pc3Npb25cclxuXHJcbiAgICAgICAgICAgIC8vIEZpcnN0IGdldCB0aGUgaW5zdGFuY2UgbWFwcGluZyBmb3Igb3V0cHV0L2ZyYW1lXHJcbiAgICAgICAgICAgIHZhciBzb3VyY2UgPSBNYXBwaW5nc1tmaW5kU291cmNlSW5kZXgoZmVhdHVyZU9iamVjdC5wbHVnaW4pXTtcclxuICAgICAgICAgICAgaWYgKCFzb3VyY2UpIHtcclxuICAgICAgICAgICAgICAgIHNvdXJjZSA9IE1hcHBpbmdzW2ZpbmRTb3VyY2VJbmRleCh0aGlzLmdldFBsdWdpblNlbmRlcihmZWF0dXJlT2JqZWN0LnBsdWdpbikpXTtcclxuICAgICAgICAgICAgICAgIGlmICghc291cmNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgKFwiUGx1Z2luIEluc3RhbmNlIG5vdCBsb2FkZWQhXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBmcmFtZU1hcCA9IHNvdXJjZS5maW5kRnJhbWVNYXAoZmVhdHVyZU9iamVjdC5vdXRwdXRJbmRleCwgZmVhdHVyZU9iamVjdC5mcmFtZVNpemUpO1xyXG5cclxuICAgICAgICAgICAgLy8gU2VuZCB0aGUgZmVhdHVyZSBvYmplY3QgdG8gdGhlIFJlcXVlc3Rvck1hcCBvYmplY3QgdG8gaGFuZGxlIGNvbW1zXHJcbiAgICAgICAgICAgIGZyYW1lTWFwLnJlcXVlc3RvcnMuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgZS5wb3N0RmVhdHVyZXModGhpcyk7XHJcbiAgICAgICAgICAgIH0sIGZlYXR1cmVPYmplY3QpO1xyXG5cclxuICAgICAgICB9O1xyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLkZlYXR1cmVNYXAgPSBuZXcgRmVhdHVyZU1hcCgpO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMuRmVhdHVyZU1hcCwgXCJmYWN0b3J5XCIsIHtcclxuICAgICAgICAndmFsdWUnOiB0aGlzXHJcbiAgICB9KTtcclxuXHJcbiAgICB2YXIgc3RvcmVzID0gW107XHJcblxyXG4gICAgdGhpcy5jcmVhdGVTdG9yZSA9IGZ1bmN0aW9uIChzdG9yZU5hbWUpIHtcclxuICAgICAgICB2YXIgbm9kZSA9IG5ldyBMaW5rZWRTdG9yZS5MaW5rZWRTdG9yZShzdG9yZU5hbWUpO1xyXG4gICAgICAgIHN0b3Jlcy5wdXNoKG5vZGUpO1xyXG4gICAgICAgIHJldHVybiBub2RlO1xyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLmdldFN0b3JlcyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gc3RvcmVzO1xyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLmZpbmRTdG9yZSA9IGZ1bmN0aW9uIChzdG9yZU5hbWUpIHtcclxuICAgICAgICByZXR1cm4gc3RvcmVzLmZpbmQoZnVuY3Rpb24gKGEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGEubmFtZSA9PT0gc3RvcmVOYW1lO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyBCdWlsZCB0aGUgZGVmYXVsdCBTdG9yZXNcclxuICAgIHRoaXMuU2Vzc2lvbkRhdGEgPSBuZXcgTGlua2VkU3RvcmUuTGlua2VkU3RvcmUoXCJTZXNzaW9uXCIpO1xyXG4gICAgdGhpcy5Vc2VyRGF0YSA9IG5ldyBMaW5rZWRTdG9yZS5MaW5rZWRTdG9yZShcIlVzZXJcIik7XHJcblxyXG4gICAgLy8gQ3JlYXRlZCBmb3IgdGhlIGlucHV0IG9mIGVhY2ggU3ViRmFjdG9yeSBwbHVnaW4gY2hhaW5cclxuICAgIHZhciBTdWJGYWN0b3J5RmVhdHVyZVNlbmRlciA9IGZ1bmN0aW9uIChvd25lciwgRmFjdG9yeUZlYXR1cmVNYXApIHtcclxuICAgICAgICB2YXIgT3V0cHV0Tm9kZSA9IGZ1bmN0aW9uIChwYXJlbnQsIG91dHB1dCkge1xyXG4gICAgICAgICAgICB2YXIgZXh0cmFjdG9ycyA9IFtdO1xyXG4gICAgICAgICAgICB2YXIgRXh0cmFjdG9yID0gZnVuY3Rpb24gKG91dHB1dCwgZnJhbWVTaXplKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmV4dHJhY3RvciA9IG91dHB1dC5jb250ZXh0LmNyZWF0ZUFuYWx5c2VyKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmV4dHJhY3Rvci5mZnRTaXplID0gZnJhbWVTaXplO1xyXG4gICAgICAgICAgICAgICAgb3V0cHV0LmNvbm5lY3QodGhpcy5leHRyYWN0b3IpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mZWF0dXJlcyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIFwiZnJhbWVTaXplXCIsIHtcclxuICAgICAgICAgICAgICAgICAgICAndmFsdWUnOiBmcmFtZVNpemVcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciByZWN1cnNpdmVQcm9jZXNzaW5nID0gb3duZXIucmVjdXJzaXZlUHJvY2Vzc2luZztcclxuICAgICAgICAgICAgICAgIC8qXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiByZWN1cnNpdmVQcm9jZXNzaW5nKGJhc2UsIGxpc3QpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbCA9IGxpc3QubGVuZ3RoLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpLCBlbnRyeTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudHJ5ID0gbGlzdFtpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFzZVtlbnRyeS5uYW1lXS5hcHBseShiYXNlLCBlbnRyeS5wYXJhbWV0ZXJzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVudHJ5LmZlYXR1cmVzICYmIGVudHJ5LmZlYXR1cmVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlY3Vyc2l2ZVByb2Nlc3NpbmcoYmFzZS5yZXN1bHRbZW50cnkubmFtZV0sIGVudHJ5LmZlYXR1cmVzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBvbmF1ZGlvY2FsbGJhY2soZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vdGhpcyA9PT0gRXh0cmFjdG9yXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1lc3NhZ2UgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdudW1iZXJPZkNoYW5uZWxzJzogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ3Jlc3VsdHMnOiBbXVxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgcmVjdXJzaXZlUHJvY2Vzc2luZyhkYXRhLCB0aGlzLmZlYXR1cmVzKTtcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLnJlc3VsdHNbMF0gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdjaGFubmVsJzogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ3Jlc3VsdHMnOiBKU09OLnBhcnNlKGRhdGEudG9KU09OKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvc3RGZWF0dXJlcyhkYXRhLmxlbmd0aCwgbWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRGZWF0dXJlcyA9IGZ1bmN0aW9uIChmZWF0dXJlTGlzdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmVhdHVyZXMgPSBmZWF0dXJlTGlzdDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5mZWF0dXJlcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5leHRyYWN0b3IuY2xlYXJDYWxsYmFjaygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXh0cmFjdG9yLmZyYW1lQ2FsbGJhY2sob25hdWRpb2NhbGxiYWNrLCB0aGlzKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZWpvaW5FeHRyYWN0b3IgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3V0cHV0LmNvbm5lY3QodGhpcy5leHRyYWN0b3IpO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdmFyIFdvcmtlckV4dHJhY3RvciA9IGZ1bmN0aW9uIChvdXRwdXQsIGZyYW1lU2l6ZSkge1xyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gb25hdWRpb2NhbGxiYWNrKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgYywgZnJhbWVzID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChjID0gMDsgYyA8IGUuaW5wdXRCdWZmZXIubnVtYmVyT2ZDaGFubmVsczsgYysrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyYW1lc1tjXSA9IGUuaW5wdXRCdWZmZXIuZ2V0Q2hhbm5lbERhdGEoYyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHdvcmtlci5wb3N0TWVzc2FnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdzdGF0ZSc6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdmcmFtZXMnOiBmcmFtZXNcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiByZXNwb25zZShtc2cpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvc3RGZWF0dXJlcyhmcmFtZVNpemUsIG1zZy5kYXRhLnJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgd29ya2VyID0gbmV3IFdvcmtlcihcImpzYXAvZmVhdHVyZS13b3JrZXIuanNcIik7XHJcbiAgICAgICAgICAgICAgICB3b3JrZXIub25lcnJvciA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRGZWF0dXJlcyA9IGZ1bmN0aW9uIChmZWF0dXJlTGlzdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICAgICAgICAgICAgICB2YXIgY29uZmlnTWVzc2FnZSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ3N0YXRlJzogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ3NhbXBsZVJhdGUnOiBvdXRwdXQuY29udGV4dC5zYW1wbGVSYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnZmVhdHVyZUxpc3QnOiBmZWF0dXJlTGlzdCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ251bUNoYW5uZWxzJzogb3V0cHV0Lm51bWJlck9mT3V0cHV0cyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2ZyYW1lU2l6ZSc6IHRoaXMuZnJhbWVTaXplXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZlYXR1cmVzID0gZmVhdHVyZUxpc3Q7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZlYXR1cmVMaXN0ICYmIGZlYXR1cmVMaXN0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd29ya2VyLm9ubWVzc2FnZSA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZS5kYXRhLnN0YXRlID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya2VyLm9ubWVzc2FnZSA9IHJlc3BvbnNlLmJpbmQoc2VsZik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5leHRyYWN0b3Iub25hdWRpb3Byb2Nlc3MgPSBvbmF1ZGlvY2FsbGJhY2suYmluZChzZWxmKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya2VyLnBvc3RNZXNzYWdlKGNvbmZpZ01lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3b3JrZXIucG9zdE1lc3NhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3N0YXRlJzogMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmV4dHJhY3Rvci5vbmF1ZGlvcHJvY2VzcyA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlam9pbkV4dHJhY3RvciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBvdXRwdXQuY29ubmVjdCh0aGlzLmV4dHJhY3Rvcik7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuZXh0cmFjdG9yID0gb3V0cHV0LmNvbnRleHQuY3JlYXRlU2NyaXB0UHJvY2Vzc29yKGZyYW1lU2l6ZSwgb3V0cHV0Lm51bWJlck9mT3V0cHV0cywgMSk7XHJcbiAgICAgICAgICAgICAgICBvdXRwdXQuY29ubmVjdCh0aGlzLmV4dHJhY3Rvcik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmV4dHJhY3Rvci5jb25uZWN0KG91dHB1dC5jb250ZXh0LmRlc3RpbmF0aW9uKTtcclxuXHJcbiAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgXCJmcmFtZVNpemVcIiwge1xyXG4gICAgICAgICAgICAgICAgICAgICd2YWx1ZSc6IGZyYW1lU2l6ZVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHRoaXMuYWRkRXh0cmFjdG9yID0gZnVuY3Rpb24gKGZyYW1lU2l6ZSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIG9iajtcclxuICAgICAgICAgICAgICAgIGlmICh3aW5kb3cuV29ya2VyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqID0gbmV3IFdvcmtlckV4dHJhY3RvcihvdXRwdXQsIGZyYW1lU2l6ZSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIG9iaiA9IG5ldyBFeHRyYWN0b3Iob3V0cHV0LCBmcmFtZVNpemUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZXh0cmFjdG9ycy5wdXNoKG9iaik7XHJcbiAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBcInBvc3RGZWF0dXJlc1wiLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ3ZhbHVlJzogZnVuY3Rpb24gKGZyYW1lU2l6ZSwgcmVzdWx0c0pTT04pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9iaiA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdvdXRwdXRJbmRleCc6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZnJhbWVTaXplJzogZnJhbWVTaXplLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3Jlc3VsdHMnOiByZXN1bHRzSlNPTlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBvc3RGZWF0dXJlcyhvYmopO1xyXG4gICAgICAgICAgICAgICAgICAgIH0uYmluZCh0aGlzKVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gb2JqO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB0aGlzLmZpbmRFeHRyYWN0b3IgPSBmdW5jdGlvbiAoZnJhbWVTaXplKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgY2hlY2sgPSBmcmFtZVNpemU7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZXh0cmFjdG9ycy5maW5kKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gVGhpcyBNVVNUIGJlID09IE5PVCA9PT1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gTnVtYmVyKGUuZnJhbWVTaXplKSA9PT0gTnVtYmVyKGNoZWNrKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB0aGlzLnJlam9pbkV4dHJhY3RvcnMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBleHRyYWN0b3JzLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBlLnJlam9pbkV4dHJhY3RvcigpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHRoaXMuZGVsZXRlRXh0cmFjdG9yID0gZnVuY3Rpb24gKGZyYW1lU2l6ZSkge307XHJcbiAgICAgICAgfTtcclxuICAgICAgICB2YXIgb3V0cHV0Tm9kZXM7XHJcbiAgICAgICAgdGhpcy51cGRhdGVGZWF0dXJlcyA9IGZ1bmN0aW9uIChmZWF0dXJlT2JqZWN0KSB7XHJcbiAgICAgICAgICAgIHZhciBvO1xyXG4gICAgICAgICAgICBmb3IgKG8gPSAwOyBvIDwgZmVhdHVyZU9iamVjdC5sZW5ndGg7IG8rKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKG91dHB1dE5vZGVzID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobyA+IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgKFwiUmVxdWVzdGVkIGFuIG91dHB1dCB0aGF0IGRvZXMgbm90IGV4aXN0XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBvdXRwdXROb2RlcyA9IG5ldyBPdXRwdXROb2RlKG93bmVyLCBvd25lci5jaGFpblN0YXJ0KTtcclxuICAgICAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob3V0cHV0Tm9kZXMsIFwicG9zdEZlYXR1cmVzXCIsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ3ZhbHVlJzogZnVuY3Rpb24gKHJlc3VsdE9iamVjdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3N0RmVhdHVyZXMocmVzdWx0T2JqZWN0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfS5iaW5kKHRoaXMpXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2YXIgc2k7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHNpID0gMDsgc2kgPCBmZWF0dXJlT2JqZWN0W29dLmxlbmd0aDsgc2krKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBleHRyYWN0b3IgPSBvdXRwdXROb2Rlcy5maW5kRXh0cmFjdG9yKGZlYXR1cmVPYmplY3Rbb11bc2ldLmZyYW1lU2l6ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFleHRyYWN0b3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXh0cmFjdG9yID0gb3V0cHV0Tm9kZXMuYWRkRXh0cmFjdG9yKGZlYXR1cmVPYmplY3Rbb11bc2ldLmZyYW1lU2l6ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGV4dHJhY3Rvci5zZXRGZWF0dXJlcyhmZWF0dXJlT2JqZWN0W29dW3NpXS5mZWF0dXJlTGlzdCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLnJlam9pbkV4dHJhY3RvcnMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvdXRwdXROb2Rlcykge1xyXG4gICAgICAgICAgICAgICAgb3V0cHV0Tm9kZXMucmVqb2luRXh0cmFjdG9ycygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5wb3N0RmVhdHVyZXMgPSBmdW5jdGlvbiAoZmVhdHVyZU9iamVjdCkge1xyXG4gICAgICAgICAgICAvKlxyXG4gICAgICAgICAgICAgICAgQ2FsbGVkIGJ5IHRoZSBpbmRpdmlkdWFsIGV4dHJhY3RvciBpbnN0YW5jZXM6XHJcbiAgICAgICAgICAgICAgICBmZWF0dXJlT2JqZWN0ID0geydmcmFtZVNpemUnOiBmcmFtZVNpemUsXHJcbiAgICAgICAgICAgICAgICAnb3V0cHV0SW5kZXgnOiBvdXRwdXRJbmRleCxcclxuICAgICAgICAgICAgICAgICdyZXN1bHRzJzpbXX1cclxuICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgRmFjdG9yeUZlYXR1cmVNYXAucG9zdEZlYXR1cmVzKHtcclxuICAgICAgICAgICAgICAgICdwbHVnaW4nOiB0aGlzLFxyXG4gICAgICAgICAgICAgICAgJ291dHB1dEluZGV4JzogZmVhdHVyZU9iamVjdC5vdXRwdXRJbmRleCxcclxuICAgICAgICAgICAgICAgICdmcmFtZVNpemUnOiBmZWF0dXJlT2JqZWN0LmZyYW1lU2l6ZSxcclxuICAgICAgICAgICAgICAgICdyZXN1bHRzJzogZmVhdHVyZU9iamVjdC5yZXN1bHRzXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vIFNlbmQgdG8gRmFjdG9yeVxyXG4gICAgICAgIEZhY3RvcnlGZWF0dXJlTWFwLmNyZWF0ZVNvdXJjZU1hcCh0aGlzLCB1bmRlZmluZWQpO1xyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgQXVkaW9QbHVnaW5DaGFpbk1hbmFnZXIgPSBmdW5jdGlvbiAoUGx1Z2luRmFjdG9yeSwgY2hhaW5TdGFydCwgY2hhaW5TdG9wKSB7XHJcblxyXG4gICAgICAgIHZhciBwbHVnaW5fbGlzdCA9IFtdLFxyXG4gICAgICAgICAgICBwbHVnaW5DaGFpblN0YXJ0ID0gY2hhaW5TdGFydCxcclxuICAgICAgICAgICAgcGx1Z2luQ2hhaW5TdG9wID0gY2hhaW5TdG9wLFxyXG4gICAgICAgICAgICBmYWN0b3J5TmFtZSA9IFwiXCIsXHJcbiAgICAgICAgICAgIHN0YXRlID0gMSxcclxuICAgICAgICAgICAgZGVsYXlTYW1wbGVzID0gMCxcclxuICAgICAgICAgICAgY2hhaW5TdGFydEZlYXR1cmUgPSBuZXcgU3ViRmFjdG9yeUZlYXR1cmVTZW5kZXIodGhpcywgUGx1Z2luRmFjdG9yeS5GZWF0dXJlTWFwKSxcclxuICAgICAgICAgICAgc2VtYW50aWNTdG9yZXMgPSBbXSxcclxuICAgICAgICAgICAgZXZlbnRUYXJnZXQgPSBuZXcgRXZlbnRUYXJnZXQoKSxcclxuICAgICAgICAgICAgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5wYXJlbnQgPSBQbHVnaW5GYWN0b3J5O1xyXG4gICAgICAgIHBsdWdpbkNoYWluU3RhcnQuZGlzY29ubmVjdCgpO1xyXG4gICAgICAgIHBsdWdpbkNoYWluU3RhcnQuY29ubmVjdChjaGFpblN0b3ApO1xyXG5cclxuICAgICAgICB0aGlzLlRyYWNrRGF0YSA9IG5ldyBMaW5rZWRTdG9yZS5MaW5rZWRTdG9yZShcIlRyYWNrXCIpO1xyXG4gICAgICAgIHRoaXMuUGx1Z2luRGF0YSA9IG5ldyBMaW5rZWRTdG9yZS5MaW5rZWRTdG9yZShcIlBsdWdpblwiKTtcclxuXHJcbiAgICAgICAgdGhpcy5mZWF0dXJlU2VuZGVyID0gY2hhaW5TdGFydEZlYXR1cmU7XHJcblxyXG4gICAgICAgIHRoaXMuZ2V0RmVhdHVyZUNoYWluID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBmdW5jdGlvbiByZWJ1aWxkKCkge1xyXG4gICAgICAgICAgICB2YXIgaSA9IDAsXHJcbiAgICAgICAgICAgICAgICBsID0gcGx1Z2luX2xpc3QubGVuZ3RoIC0gMTtcclxuICAgICAgICAgICAgd2hpbGUgKGkgPCBsKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgY3VycmVudE5vZGUgPSBwbHVnaW5fbGlzdFtpKytdO1xyXG4gICAgICAgICAgICAgICAgdmFyIG5leHROb2RlID0gcGx1Z2luX2xpc3RbaV07XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50Tm9kZS5yZWNvbm5lY3QobmV4dE5vZGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBpc29sYXRlKCkge1xyXG4gICAgICAgICAgICBwbHVnaW5fbGlzdC5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICBlLmRpc2Nvbm5lY3QoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBjdXRDaGFpbigpIHtcclxuICAgICAgICAgICAgaWYgKHBsdWdpbl9saXN0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHBsdWdpbkNoYWluU3RhcnQuZGlzY29ubmVjdChwbHVnaW5fbGlzdFswXS5pbnB1dCk7XHJcbiAgICAgICAgICAgICAgICBwbHVnaW5fbGlzdFtwbHVnaW5fbGlzdC5sZW5ndGggLSAxXS5vdXRwdXQuZGlzY29ubmVjdChwbHVnaW5DaGFpblN0b3ApO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcGx1Z2luQ2hhaW5TdGFydC5kaXNjb25uZWN0KHBsdWdpbkNoYWluU3RvcCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBqb2luQ2hhaW4oKSB7XHJcbiAgICAgICAgICAgIGlmIChwbHVnaW5fbGlzdC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBwbHVnaW5DaGFpblN0YXJ0LmNvbm5lY3QocGx1Z2luX2xpc3RbMF0uaW5wdXQpO1xyXG4gICAgICAgICAgICAgICAgcGx1Z2luX2xpc3RbcGx1Z2luX2xpc3QubGVuZ3RoIC0gMV0ub3V0cHV0LmNvbm5lY3QocGx1Z2luQ2hhaW5TdG9wKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHBsdWdpbkNoYWluU3RhcnQuY29ubmVjdChwbHVnaW5DaGFpblN0b3ApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNoYWluU3RhcnRGZWF0dXJlLnJlam9pbkV4dHJhY3RvcnMoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuYnlwYXNzUGx1Z2luID0gZnVuY3Rpb24gKHBsdWdpbl9pbnN0YW5jZSwgc3RhdGUpIHtcclxuICAgICAgICAgICAgLy8gQ2hlY2sgaXMgYSBtZW1iZXIgb2YgdGhpcyBjaGFpblxyXG4gICAgICAgICAgICBpZiAocGx1Z2luX2xpc3QuaW5jbHVkZXMocGx1Z2luX2luc3RhbmNlKSA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwbHVnaW5faW5zdGFuY2UuYnlwYXNzKHN0YXRlKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLmdldFByb3RvdHlwZXMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcmVudC5nZXRQcm90b3R5cGVzKCk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5nZXRGYWN0b3J5ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJlbnQ7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5kZXN0cm95ID0gZnVuY3Rpb24gKHJlY29ubmVjdCkge1xyXG4gICAgICAgICAgICB2YXIgaTtcclxuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHBsdWdpbl9saXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRlc3Ryb3lQbHVnaW4ocGx1Z2luX2xpc3RbaV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHBsdWdpbkNoYWluU3RhcnQuZGlzY29ubmVjdCgpO1xyXG4gICAgICAgICAgICBpZiAocmVjb25uZWN0ID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICBwbHVnaW5DaGFpblN0YXJ0LmNvbm5lY3QocGx1Z2luQ2hhaW5TdG9wKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vIFBsdWdpbiBjcmVhdGlvbiAvIGRlc3RydWN0aW9uXHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGJ1aWxkTmV3UGx1Z2luKHByb3RvdHlwZU9iamVjdCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RhdGUgPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QgKFwiU3ViRmFjdG9yeSBoYXMgYmVlbiBkZXN0cm95ZWQhIENhbm5vdCBhZGQgbmV3IHBsdWdpbnNcIik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocHJvdG90eXBlT2JqZWN0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBwcm90b3R5cGVPYmplY3QuY3JlYXRlUGx1Z2luSW5zdGFuY2Uoc2VsZiwgZmFsc2UpXHJcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbihub2RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMobm9kZSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnVHJhY2tEYXRhJzoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHNlbGYuVHJhY2tEYXRhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbm9kZTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY3JlYXRlUGx1Z2luID0gZnVuY3Rpb24gKHByb3RvdHlwZU9iamVjdCkge1xyXG4gICAgICAgICAgICByZXR1cm4gYnVpbGROZXdQbHVnaW4ocHJvdG90eXBlT2JqZWN0KS5jYXRjaChmdW5jdGlvbihlKXtcclxuICAgICAgICAgICAgICAgIHRocm93KFwiUGx1Z2luIGRpZCBub3QgZ2V0IGNyZWF0ZWQhIEFib3J0aW5nXCIpO1xyXG4gICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uKG5vZGUpIHtcclxuICAgICAgICAgICAgICAgIGN1dENoYWluKCk7XHJcbiAgICAgICAgICAgICAgICBwbHVnaW5fbGlzdC5wdXNoKG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgaXNvbGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgcmVidWlsZCgpO1xyXG4gICAgICAgICAgICAgICAgam9pbkNoYWluKCk7XHJcbiAgICAgICAgICAgICAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoXCJhbHRlcmRlbGF5XCIsIHNlbGYpO1xyXG4gICAgICAgICAgICAgICAgbm9kZS5ub2RlLm9ubG9hZGVkLmNhbGwobm9kZS5ub2RlKTtcclxuICAgICAgICAgICAgICAgIHVwZGF0ZURlbGF5Q29tcGVuc2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICBldmVudFRhcmdldC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImNoYW5nZVwiKSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbm9kZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5yZW1vdmVQbHVnaW4gPSBmdW5jdGlvbihwbHVnaW5fb2JqZWN0KSB7XHJcbiAgICAgICAgICAgIGlmIChzdGF0ZSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBpbmRleCA9IHRoaXMuZ2V0UGx1Z2luSW5kZXgocGx1Z2luX29iamVjdCk7XHJcbiAgICAgICAgICAgIGlmIChpbmRleCA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBjdXRDaGFpbigpO1xyXG4gICAgICAgICAgICAgICAgcGx1Z2luX29iamVjdC5yZW1vdmVFdmVudExpc3RlbmVyKFwiYWx0ZXJkZWxheVwiLCBzZWxmKTtcclxuICAgICAgICAgICAgICAgIHBsdWdpbl9vYmplY3Qubm9kZS5zdG9wLmNhbGwocGx1Z2luX29iamVjdC5ub2RlKTtcclxuICAgICAgICAgICAgICAgIHBsdWdpbl9vYmplY3Qubm9kZS5vbnVubG9hZGVkLmNhbGwocGx1Z2luX29iamVjdC5ub2RlKTtcclxuICAgICAgICAgICAgICAgIHBsdWdpbl9vYmplY3Qubm9kZS5kZWNvbnN0cnVjdC5jYWxsKHBsdWdpbl9vYmplY3Qubm9kZSk7XHJcbiAgICAgICAgICAgICAgICBwbHVnaW5fbGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICAgICAgaXNvbGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgcmVidWlsZCgpO1xyXG4gICAgICAgICAgICAgICAgam9pbkNoYWluKCk7XHJcbiAgICAgICAgICAgICAgICB1cGRhdGVEZWxheUNvbXBlbnNhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgZXZlbnRUYXJnZXQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJjaGFuZ2VcIikpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5kZXN0cm95UGx1Z2luID0gZnVuY3Rpb24gKHBsdWdpbl9vYmplY3QpIHtcclxuICAgICAgICAgICAgaWYgKHN0YXRlID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5yZW1vdmVQbHVnaW4ocGx1Z2luX29iamVjdCk7XHJcbiAgICAgICAgICAgIHRoaXMucGFyZW50LmRlbGV0ZVBsdWdpbihwbHVnaW5fb2JqZWN0LmlkKTtcclxuICAgICAgICAgICAgdXBkYXRlRGVsYXlDb21wZW5zYXRpb24oKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLmdldFBsdWdpbnMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwbHVnaW5fbGlzdDtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLmdldEFsbFBsdWdpbnMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcmVudC5nZXRBbGxQbHVnaW5zT2JqZWN0KCk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5nZXRQbHVnaW5JbmRleCA9IGZ1bmN0aW9uIChwbHVnaW5fb2JqZWN0KSB7XHJcbiAgICAgICAgICAgIGlmIChzdGF0ZSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBpbmRleCA9IHBsdWdpbl9saXN0LmZpbmRJbmRleChmdW5jdGlvbiAoZWxlbWVudCwgaW5kZXgsIGFycmF5KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudCA9PT0gdGhpcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9LCBwbHVnaW5fb2JqZWN0KTtcclxuICAgICAgICAgICAgcmV0dXJuIGluZGV4O1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMubW92ZVBsdWdpbiA9IGZ1bmN0aW9uIChwbHVnaW5fb2JqZWN0LCBuZXdfaW5kZXgpIHtcclxuICAgICAgICAgICAgaWYgKHN0YXRlID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5nZXRQbHVnaW5JbmRleChwbHVnaW5fb2JqZWN0KSxcclxuICAgICAgICAgICAgICAgIG9iaiwgaG9sZExvdywgaG9sZEhpZ2gsIGk7XHJcbiAgICAgICAgICAgIGlmIChQbHVnaW5GYWN0b3J5LmdldEFsbFBsdWdpbnMoKS5pbmNsdWRlcyhwbHVnaW5fb2JqZWN0KSA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgIHRocm93KFwiUGx1Z2luIGRvZXMgbm90IGV4aXN0XCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGN1dENoYWluKCk7XHJcbiAgICAgICAgICAgIGlzb2xhdGUoKTtcclxuICAgICAgICAgICAgaWYgKHBsdWdpbl9vYmplY3Qubm9kZS5vd25lciAhPT0gdGhpcykge1xyXG4gICAgICAgICAgICAgICAgLy8gRGlmZmVyZW50IHN1Yi1mYWN0b3J5XHJcbiAgICAgICAgICAgICAgICBwbHVnaW5fb2JqZWN0Lm5vZGUub3duZXIucmVtb3ZlUGx1Z2luKHBsdWdpbl9vYmplY3QpO1xyXG4gICAgICAgICAgICAgICAgcGx1Z2luX29iamVjdC5ub2RlLm93bmVyID0gdGhpcztcclxuICAgICAgICAgICAgICAgIG9iaiA9IFtwbHVnaW5fb2JqZWN0XTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG9iaiA9IHBsdWdpbl9saXN0LnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgICAgICBwbHVnaW5fb2JqZWN0Lm5vZGUub251bmxvYWRlZC5jYWxsKHBsdWdpbl9vYmplY3Qubm9kZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKG5ld19pbmRleCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgcGx1Z2luX2xpc3QgPSBvYmouY29uY2F0KHBsdWdpbl9saXN0KTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChuZXdfaW5kZXggPj0gcGx1Z2luX2xpc3QubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBwbHVnaW5fbGlzdCA9IHBsdWdpbl9saXN0LmNvbmNhdChvYmopO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaG9sZExvdyA9IHBsdWdpbl9saXN0LnNsaWNlKDAsIG5ld19pbmRleCk7XHJcbiAgICAgICAgICAgICAgICBob2xkSGlnaCA9IHBsdWdpbl9saXN0LnNsaWNlKG5ld19pbmRleCk7XHJcbiAgICAgICAgICAgICAgICBwbHVnaW5fbGlzdCA9IGhvbGRMb3cuY29uY2F0KG9iai5jb25jYXQoaG9sZEhpZ2gpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZWJ1aWxkKCk7XHJcbiAgICAgICAgICAgIGpvaW5DaGFpbigpO1xyXG4gICAgICAgICAgICBwbHVnaW5fb2JqZWN0Lm5vZGUub25sb2FkZWQuY2FsbChwbHVnaW5fb2JqZWN0Lm5vZGUpO1xyXG4gICAgICAgICAgICB1cGRhdGVEZWxheUNvbXBlbnNhdGlvbigpO1xyXG4gICAgICAgICAgICBldmVudFRhcmdldC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImNoYW5nZVwiKSk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5jb3B5UGx1Z2luID0gZnVuY3Rpb24ocGx1Z2luX29iamVjdCwgY29weV9pbmRleCkge1xyXG4gICAgICAgICAgICBpZiAoY29weV9pbmRleCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBjb3B5X2luZGV4ID0gcGx1Z2luX2xpc3QubGVuZ3RoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29weV9pbmRleCAhPSBcIm51bWJlclwiIHx8IGNvcHlfaW5kZXggPCAwIHx8IGNvcHlfaW5kZXggPiBwbHVnaW5fbGlzdC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHRocm93KFwiUGx1Z2luIGNvcHkgaW5kZXggb3V0c2lkZSBvZiB0aGUgY2hhaW4gc2NvcGUuXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBidWlsZE5ld1BsdWdpbihwbHVnaW5fb2JqZWN0LnByb3RvdHlwZU9iamVjdClcclxuICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgICAgICAgICAgdGhyb3coXCJQbHVnaW4gZGlkIG5vdCBnZXQgY3JlYXRlZCEgQWJvcnRpbmdcIik7XHJcbiAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24obm9kZSkge1xyXG4gICAgICAgICAgICAgICAgbm9kZS5ub2RlLnBhcmFtZXRlcnMuc2V0UGFyYW1ldGVyc0J5T2JqZWN0KHBsdWdpbl9vYmplY3Qubm9kZS5wYXJhbWV0ZXJzLmdldFBhcmFtZXRlck9iamVjdCgpKTtcclxuICAgICAgICAgICAgICAgIGN1dENoYWluKCk7XHJcbiAgICAgICAgICAgICAgICBpc29sYXRlKCk7XHJcbiAgICAgICAgICAgICAgICBwbHVnaW5fbGlzdC5zcGxpY2UoY29weV9pbmRleCwgMCwgbm9kZSk7XHJcbiAgICAgICAgICAgICAgICByZWJ1aWxkKCk7XHJcbiAgICAgICAgICAgICAgICBqb2luQ2hhaW4oKTtcclxuICAgICAgICAgICAgICAgIHVwZGF0ZURlbGF5Q29tcGVuc2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICBub2RlLm5vZGUub25sb2FkZWQuY2FsbChub2RlLm5vZGUpO1xyXG4gICAgICAgICAgICAgICAgZXZlbnRUYXJnZXQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJjaGFuZ2VcIikpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5vZGU7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBmdW5jdGlvbiByZWN1cnNpdmVQcm9jZXNzaW5nKGJhc2UsIGxpc3QpIHtcclxuICAgICAgICAgICAgdmFyIGwgPSBsaXN0Lmxlbmd0aCxcclxuICAgICAgICAgICAgICAgIGksIGVudHJ5O1xyXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBlbnRyeSA9IGxpc3RbaV07XHJcbiAgICAgICAgICAgICAgICBiYXNlW2VudHJ5Lm5hbWVdLmFwcGx5KGJhc2UsIGVudHJ5LnBhcmFtZXRlcnMpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGVudHJ5LmZlYXR1cmVzICYmIGVudHJ5LmZlYXR1cmVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICByZWN1cnNpdmVQcm9jZXNzaW5nKGJhc2UucmVzdWx0W2VudHJ5Lm5hbWVdLCBlbnRyeS5mZWF0dXJlcyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGdldERlbGF5Q29tcGVuc2F0aW9uKCkge1xyXG4gICAgICAgICAgICB2YXIgc3VtID0gMDtcclxuICAgICAgICAgICAgcGx1Z2luX2xpc3QuZmlsdGVyKGZ1bmN0aW9uKHBsdWdpbikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICFwbHVnaW4uaXNCeXBhc3NlZCgpO1xyXG4gICAgICAgICAgICB9KS5mb3JFYWNoKGZ1bmN0aW9uKHBsdWdpbikge1xyXG4gICAgICAgICAgICAgICAgc3VtICs9IHBsdWdpbi5ub2RlLnByb2Nlc3NpbmdEZWxheUFzU2FtcGxlcztcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiBzdW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiB1cGRhdGVEZWxheUNvbXBlbnNhdGlvbigpIHtcclxuICAgICAgICAgICAgdmFyIHN1bSA9IGdldERlbGF5Q29tcGVuc2F0aW9uKCk7XHJcbiAgICAgICAgICAgIGlmIChkZWxheVNhbXBsZXMgIT0gc3VtKSB7XHJcbiAgICAgICAgICAgICAgICBkZWxheVNhbXBsZXMgPSBzdW07XHJcbiAgICAgICAgICAgICAgICBldmVudFRhcmdldC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImFsdGVyZGVsYXlcIikpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBkZWxheVNhbXBsZXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XHJcbiAgICAgICAgICAgICdjaGFpblN0YXJ0Jzoge1xyXG4gICAgICAgICAgICAgICAgJ3ZhbHVlJzogY2hhaW5TdGFydFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAnY2hhaW5TdG9wJzoge1xyXG4gICAgICAgICAgICAgICAgJ3ZhbHVlJzogY2hhaW5TdG9wXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwidXBkYXRlRGVsYXlDb21wZW5zYXRpb25cIjoge1xyXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVwZGF0ZURlbGF5Q29tcGVuc2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwicHJvY2Vzc2luZ0RlbGF5QXNTYW1wbGVzXCI6IHtcclxuICAgICAgICAgICAgICAgIFwiZ2V0XCI6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB1cGRhdGVEZWxheUNvbXBlbnNhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIFwic2V0XCI6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93KFwicHJvY2Vzc2luZ0RlbGF5QXNTYW1wbGVzIGlzIHJlYWQtb25seVwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJwcm9jZXNzaW5nRGVsYXlBc1NlY29uZHNcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJnZXRcIjogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvY2Vzc2luZ0RlbGF5QXNTYW1wbGVzL1BsdWdpbkZhY3RvcnkuY29udGV4dC5zYW1wbGVSYXRlO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIFwic2V0XCI6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93KFwicHJvY2Vzc2luZ0RlbGF5QXNTZWNvbmRzIGlzIHJlYWQtb25seVwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgJ25hbWUnOiB7XHJcbiAgICAgICAgICAgICAgICAnZ2V0JzogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWN0b3J5TmFtZTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAnc2V0JzogZnVuY3Rpb24gKG5hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG5hbWUgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmFjdG9yeU5hbWUgPSBuYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFjdG9yeU5hbWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICdyZWN1cnNpdmVQcm9jZXNzaW5nJzoge1xyXG4gICAgICAgICAgICAgICAgJ2dldCc6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVjdXJzaXZlUHJvY2Vzc2luZztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgJ2hhbmRsZUV2ZW50Jzoge1xyXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGUudHlwZSA9PSBcImFsdGVyZGVsYXlcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVEZWxheUNvbXBlbnNhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJhZGRFdmVudExpc3RlbmVyXCI6IHtcclxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBldmVudFRhcmdldC5hZGRFdmVudExpc3RlbmVyKGtleSwgdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcInJlbW92ZUV2ZW50TGlzdGVuZXJcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbihrZXksIHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGV2ZW50VGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoa2V5LCB2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgdmFyIE1pZGlTeW50aGVzaXNlckhvc3QgPSBmdW5jdGlvbihmYWN0b3J5KSB7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGZ1bmN0aW9uIGJ1aWxkTmV3U3ludGhlc2lzZXJPYmplY3QocHJvdG90eXBlT2JqZWN0KSB7XHJcbiAgICAgICAgICAgIGlmIChtaWRpU3ludGhTbG90KSB7XHJcbiAgICAgICAgICAgICAgICBmYWN0b3J5LmRlbGV0ZVBsdWdpbihtaWRpU3ludGhTbG90LmlkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocHJvdG90eXBlT2JqZWN0Lmhhc01pZGlJbnB1dCA9PSBmYWxzZSB8fCBwcm90b3R5cGVPYmplY3QuaGFzTWlkaU91dHB1dCA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0IChcIlByb3RvdHlwZSBpcyBub3QgYSBNaWRpU3ludGhlc2lzIHR5cGUuIGhhc01pZGlJbnB1dCBtdXN0IGJlIHRydWUgYW5kIGhhc01pZGlPdXRwdXQgbXVzdCBiZSBmYWxzZVwiKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShwcm90b3R5cGVPYmplY3QpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb3RvdHlwZU9iamVjdC5jcmVhdGVQbHVnaW5JbnN0YW5jZShzZWxmLCBmYWxzZSlcclxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKG5vZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhub2RlLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdUcmFja0RhdGEnOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogc2VsZi5UcmFja0RhdGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBub2RlO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIG1pZGlTeW50aFNsb3Q7XHJcbiAgICAgICAgdmFyIGNvbm5lY3Rpb25zID0gW107XHJcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xyXG4gICAgICAgICAgICBcImNvbm5lY3RcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbihkZXN0aW5hdGlvbk5vZGUsIG91dHB1dCwgaW5wdXQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGVzdGluYXRpb25Ob2RlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgKFwiTXVzdCBkZWZpbmUgYW4gQXVkaW9Ob2RlIG9iamVjdFwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGV4aXN0cyA9IGNvbm5lY3Rpb25zLmZpbmQoZnVuY3Rpb24oY29ubikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY29ubi5kZXN0aW5hdGlvbk5vZGUgPT0gZGVzdGluYXRpb25Ob2RlICYmIGNvbm4ub3V0cHV0ID09IG91dHB1dCAmJiBjb25uLmlucHV0ID09IGlucHV0O1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChleGlzdHMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbm5lY3Rpb25zLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzdGluYXRpb25Ob2RlOmRlc3RpbmF0aW9uTm9kZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dDpvdXRwdXQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDppbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1pZGlTeW50aFNsb3QgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCJNSURJIFN5bnRoZXNpc2VyIGlzIG5vdCBsb2FkZWQsIGNvbm5lY3Rpb25zIHdpbGwgYmUgdmFsaWRhdGVkIG9uIGxvYWRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWlkaVN5bnRoU2xvdC5ub2RlLmNvbm5lY3QoZGVzdGluYXRpb25Ob2RlLCBvdXRwdXQsIGlucHV0KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiZGlzY29ubmVjdFwiOiB7XHJcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKGRlc3RpbmF0aW9uTm9kZSwgb3V0cHV0LCBpbnB1dCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkZXN0aW5hdGlvbk5vZGUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobWlkaVN5bnRoU2xvdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWlkaVN5bnRoU2xvdC5kaXNjb25uZWN0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29ubmVjdGlvbnMgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAodHlwZW9mIGRlc3RpbmF0aW9uTm9kZSA9PSBcIm51bWJlclwiICYmIHR5cGVvZiBvdXRwdXQgPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXQgPSBkZXN0aW5hdGlvbk5vZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uTm9kZSA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29ubmVjdGlvbnMgPSBjb25uZWN0aW9ucy5maWx0ZXIoZnVuY3Rpb24oY29ubikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbm4ub3V0cHV0ID09IG91dHB1dCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtaWRpU3ludGhTbG90KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pZGlTeW50aFNsb3Qubm9kZS5kaXNjb25uZWN0KGNvbm4uZGVzdGluYXRpb25Ob2RlLCBjb25uLm91dHB1dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGRlc3RpbmF0aW9uTm9kZSA9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvdXRwdXQgPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25uZWN0aW9ucyA9IGNvbm5lY3Rpb25zLmZpbHRlcihmdW5jdGlvbihjb25uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29ubi5kZXN0aW5hdGlvbk5vZGUgPT0gZGVzdGluYXRpb25Ob2RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1pZGlTeW50aFNsb3QpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWlkaVN5bnRoU2xvdC5ub2RlLmRpc2Nvbm5lY3QoY29ubi5kZXN0aW5hdGlvbk5vZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBkZXN0aW5hdGlvbk5vZGUgPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb3V0cHV0ID09IFwibnVtYmVyXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29ubmVjdGlvbnMgPSBjb25uZWN0aW9ucy5maWx0ZXIoZnVuY3Rpb24oY29ubikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbm4uZGVzdGluYXRpb25Ob2RlID09IGRlc3RpbmF0aW9uTm9kZSAmJiBjb25uLm91dHB1dCA9PSBvdXRwdXQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobWlkaVN5bnRoU2xvdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaWRpU3ludGhTbG90Lm5vZGUuZGlzY29ubmVjdChjb25uLmRlc3RpbmF0aW9uTm9kZSwgY29ubi5vdXRwdXQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBkZXN0aW5hdGlvbk5vZGUgPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb3V0cHV0ID09IFwibnVtYmVyXCIgJiYgdHlwZW9mIGlucHV0ID09IFwibnVtYmVyXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29ubmVjdGlvbnMgPSBjb25uZWN0aW9ucy5maWx0ZXIoZnVuY3Rpb24oY29ubikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbm4uZGVzdGluYXRpb25Ob2RlID09IGRlc3RpbmF0aW9uTm9kZSAmJiBjb25uLm91dHB1dCA9PSBvdXRwdXQgJiYgY29ubi5pbnB1dCA9PSBpbnB1dCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtaWRpU3ludGhTbG90KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pZGlTeW50aFNsb3Qubm9kZS5kaXNjb25uZWN0KGNvbm4uZGVzdGluYXRpb25Ob2RlLCBjb25uLm91dHB1dCwgY29ubi5pbnB1dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJzY2hlZHVsZUV2ZW50XCI6IHtcclxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24obXNnLCB0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1pZGlTeW50aFNsb3QpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWlkaVN5bnRoU2xvdC5ub2RlLnNjaGVkdWxlRXZlbnQobXNnLCB0KTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyhcIk1JREkgU3ludGhlc2lzZXIgbm90IGxvYWRlZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiY2FuY2VsQWxsRXZlbnRzXCI6IHtcclxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24odCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChtaWRpU3ludGhTbG90KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pZGlTeW50aFNsb3Qubm9kZS5jYW5jZWxBbGxFdmVudHModCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3coXCJNSURJIFN5bnRoZXNpc2VyIG5vdCBsb2FkZWRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIm1pZGlTeW50aGVzaXNlclwiOiB7XHJcbiAgICAgICAgICAgICAgICBcImdldFwiOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1pZGlTeW50aFNsb3Q7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXCJzZXRcIjogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3coXCJDYW5ub3Qgc2V0IHJlYWQtb25seSBhdHRyaWJ1dGUuXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcImxvYWRNaWRpU3ludGhlc2lzZXJNb2R1bGVcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbihwcm90b3R5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvdG90eXBlLmhhc01pZGlJbnB1dCA9PSBmYWxzZSB8fCBwcm90b3R5cGUuaGFzTWlkaU91dHB1dCA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QgKFwiUHJvdG90eXBlIGlzIG5vdCBhIE1pZGlTeW50aGVzaXMgdHlwZS4gaGFzTWlkaUlucHV0IG11c3QgYmUgdHJ1ZSBhbmQgaGFzTWlkaU91dHB1dCBtdXN0IGJlIGZhbHNlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShwcm90b3R5cGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbihwcm90b3R5cGVPYmplY3QpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGJ1aWxkTmV3U3ludGhlc2lzZXJPYmplY3QuY2FsbChzZWxmLCBwcm90b3R5cGVPYmplY3QpLmNhdGNoKGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3coXCJQbHVnaW4gZGlkIG5vdCBnZXQgY3JlYXRlZCEgQWJvcnRpbmdcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24obm9kZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLm5vZGUub25sb2FkZWQuY2FsbChub2RlLm5vZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtaWRpU3ludGhTbG90ID0gbm9kZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29ubmVjdGlvbnMuZm9yRWFjaChmdW5jdGlvbihjb25uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaWRpU3ludGhTbG90Lm5vZGUuY29ubmVjdChjb25uLmRlc3RpbmF0aW9uTm9kZSwgY29ubi5vdXRwdXQsIGNvbm4uaW5wdXQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1pZGlTeW50aFNsb3Q7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBQbHVnaW5Vc2VySW50ZXJmYWNlTWVzc2FnZUh1YiA9IChmdW5jdGlvbihmYWN0b3J5KXtcclxuICAgICAgICBmdW5jdGlvbiBidWlsZFBsdWdpbkludGVyZmFjZShwbHVnaW5fb2JqZWN0LCBpbnRlcmZhY2Vfb2JqZWN0KSB7XHJcbiAgICAgICAgICAgIHZhciBpZnJhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaWZyYW1lXCIpO1xyXG4gICAgICAgICAgICBpZnJhbWUuc3JjID0gaW50ZXJmYWNlX29iamVjdC5zcmM7XHJcbiAgICAgICAgICAgIGlmIChpbnRlcmZhY2Vfb2JqZWN0LndpZHRoKSB7XHJcbiAgICAgICAgICAgICAgICBpZnJhbWUud2lkdGggPSBpbnRlcmZhY2Vfb2JqZWN0LndpZHRoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChpbnRlcmZhY2Vfb2JqZWN0LmhlaWdodCkge1xyXG4gICAgICAgICAgICAgICAgaWZyYW1lLmhlaWdodCA9IGludGVyZmFjZV9vYmplY3QuaGVpZ2h0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmcmFtZS5zdHlsZS5ib3JkZXIgPSBcIjBcIjtcclxuICAgICAgICAgICAgcmV0dXJuIGlmcmFtZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gc2V0RGVmYXVsdEludGVyZmFjZSh1cmwsIHdpZHRoLCBoZWlnaHQpIHtcclxuICAgICAgICAgICAgZGVmYXVsdF9pbnRlcmZhY2UgPSB7XHJcbiAgICAgICAgICAgICAgICB1cmw6IHVybCxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiB3aWR0aCxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogaGVpZ2h0XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHJldHVybiBkZWZhdWx0X2ludGVyZmFjZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gcG9sbEFsbFBsdWdpbnMoKSB7XHJcbiAgICAgICAgICAgIGZhY3RvcnkuZ2V0QWxsUGx1Z2lucygpLmZvckVhY2goZnVuY3Rpb24ocGx1Z2luKSB7XHJcbiAgICAgICAgICAgICAgICBwbHVnaW4ubm9kZS5leHRlcm5hbEludGVyZmFjZS51cGRhdGVJbnRlcmZhY2VzKHRydWUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBsaXN0ZW5lciA9IGZhbHNlO1xyXG4gICAgICAgIHZhciBkZWZhdWx0X2ludGVyZmFjZSA9IHtcclxuICAgICAgICAgICAgc3JjOiBcImpzYXBfZGVmYXVsdC5odG1sXCJcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZXR1cm4gT2JqZWN0LmNyZWF0ZSh7XHJcbiAgICAgICAgICAgIFwic2V0RGVmYXVsdEludGVyZmFjZVwiOiBzZXREZWZhdWx0SW50ZXJmYWNlLFxyXG4gICAgICAgICAgICBcImJ1aWxkUGx1Z2luSW50ZXJmYWNlXCI6YnVpbGRQbHVnaW5JbnRlcmZhY2UsXHJcbiAgICAgICAgICAgIFwicG9sbEFsbFBsdWdpbnNcIjogcG9sbEFsbFBsdWdpbnNcclxuICAgICAgICB9KTtcclxuICAgIH0pKHRoaXMpO1xyXG5cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcclxuICAgICAgICBcImNvbnRleHRcIjoge1xyXG4gICAgICAgICAgICBcInZhbHVlXCI6IGF1ZGlvX2NvbnRleHRcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiaGFzQXVkaW9TdGFydGVkXCI6IHtcclxuICAgICAgICAgICAgXCJnZXRcIjogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYXVkaW9TdGFydGVkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcInBsdWdpblJvb3RVUkxcIjoge1xyXG4gICAgICAgICAgICBcImdldFwiOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcm9vdFVSTDtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJzZXRcIjogZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdCA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJvb3RVUkwgPSB0O1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByb290VVJMO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhyb3cgKFwiQ2Fubm90IHNldCByb290IFVSTCB3aXRob3V0IGEgc3RyaW5nXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImNyZWF0ZUZhY3RvcnlDb3B5XCI6IHtcclxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoY29udGV4dCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvcHlGYWN0b3J5KGNvbnRleHQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcInN1YkZhY3Rvcmllc1wiOiB7XHJcbiAgICAgICAgICAgIFwiZ2V0XCI6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHN1YkZhY3RvcmllcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJQbHVnaW5HVUlcIjoge1xyXG4gICAgICAgICAgICBcInZhbHVlXCI6IFBsdWdpblVzZXJJbnRlcmZhY2VNZXNzYWdlSHViXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCB7QmFzZVBsdWdpbiwgU3ludGhlc2lzZXJCYXNlUGx1Z2luLCBQbHVnaW5GYWN0b3J5fTtcclxuIiwiLyoganNoaW50IGVzdmVyc2lvbjogNiAqL1xyXG5pbXBvcnQge0Jhc2VQbHVnaW59IGZyb20gXCIuL2Jhc2VfcGx1Z2luXCI7XHJcblxyXG52YXIgU3ludGhlc2lzZXJCYXNlUGx1Z2luID0gZnVuY3Rpb24oZmFjdG9yeSwgb3duZXIpXHJcbntcclxuICAgIHZhciBoYXNXYXJuZWRTY2hlZHVsZU5vdFNldCA9IGZhbHNlO1xyXG4gICAgdmFyIGhhc1dhcm5lZENhbmNlbE5vdFNldCA9IGZhbHNlO1xyXG4gICAgQmFzZVBsdWdpbi5jYWxsKHRoaXMsIGZhY3RvcnksIG93bmVyKTtcclxuXHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XHJcbiAgICAgICAgXCJhZGRJbnB1dFwiOiB7XHJcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyhcIkNhbm5vdCBhZGQgaW5wdXQgdG8gdHlwZSBcXFwiU3ludGhlc2lzZXJCYXNlUGx1Z2luXFxcIlwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJkZWxldGVJbnB1dFwiOiB7XHJcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyhcIkNhbm5vdCBkZWxldGUgaW5wdXQgdG8gdHlwZSBcXFwiU3ludGhlc2lzZXJCYXNlUGx1Z2luXFxcIlwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJzY2hlZHVsZUV2ZW50XCI6IHtcclxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAobXNnLCBjb250ZXh0VGltZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFoYXNXYXJuZWRTY2hlZHVsZU5vdFNldCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybmluZyhcIldBUk5JTkcgLSAuc2NoZWR1bGVFdmVudCBpcyBub3Qgb3ZlcnJpZGRlblwiKTtcclxuICAgICAgICAgICAgICAgICAgICBoYXNXYXJuZWRTY2hlZHVsZU5vdFNldCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwid3JpdGFibGVcIjogdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJjYW5jZWxBbGxFdmVudHNcIjoge1xyXG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFoYXNXYXJuZWRDYW5jZWxOb3RTZXQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm5pbmcoXCJXQVJOSU5HIC0gLmNhbmNlbEFsbEV2ZW50cyBpcyBub3Qgb3ZlcnJpZGRlblwiKTtcclxuICAgICAgICAgICAgICAgICAgICBoYXNXYXJuZWRDYW5jZWxOb3RTZXQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIndyaXRhYmxlXCI6IHRydWVcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufTtcclxuU3ludGhlc2lzZXJCYXNlUGx1Z2luLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoQmFzZVBsdWdpbi5wcm90b3R5cGUpO1xyXG5TeW50aGVzaXNlckJhc2VQbHVnaW4ucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gU3ludGhlc2lzZXJCYXNlUGx1Z2luO1xyXG5cclxuZXhwb3J0IHtTeW50aGVzaXNlckJhc2VQbHVnaW59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9