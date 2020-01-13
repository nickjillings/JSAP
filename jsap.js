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
                        return (param.automation && param.automation.enabled === true);
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
                    return false;
                } else {
                    windowMessageList.push(w);
                    return true;
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
            "value": function (name, defaultValue, minimum, maximum) {
                if (typeof name !== "string" || typeof defaultValue !== "number" || (minimum !== undefined && typeof minimum !== "number") || (maximum !== undefined && typeof maximum !== "number")) {
                    throw ("Invlid constructor");
                }
                if (findParameterIndex(name) !== -1) {
                    throw ("Parameter with name '" + name + "' already exists");
                }
                var param = new _parameters_NumberParameter_js__WEBPACK_IMPORTED_MODULE_0__["NumberParameter"](owner, name, defaultValue, minimum, maximum);
                addParameter(param, this);
                return param;
            }
        },
        'createStringParameter': {
            "value": function (name, defaultValue, maxLength) {
                if (typeof name !== "string" || typeof defaultValue !== "string" || (maxLength !== undefined && typeof maxLength !== "number")) {
                    throw ("Invlid constructor");
                }
                if (findParameterIndex(name) !== -1) {
                    throw ("Parameter with name '" + name + "' already exists");
                }
                var param = new _parameters_StringParameter_js__WEBPACK_IMPORTED_MODULE_1__["StringParameter"](owner, name, defaultValue, maxLength);
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
            "value": function (name, defaultValue, minState, maxState) {
                if (typeof name !== "string" || typeof defaultValue !== "number" || typeof minState !== "number" || typeof maxState !== "number") {
                    throw ("Invlid constructor");
                }
                if (findParameterIndex(name) !== -1) {
                    throw ("Parameter with name '" + name + "' already exists");
                }
                var param = new _parameters_SwitchParameter_js__WEBPACK_IMPORTED_MODULE_3__["SwitchParameter"](owner, name, defaultValue, minState, maxState);
                addParameter(param, this);
                return param;
            }
        },
        'createListParameter': {
            "value": function (name, defaultValue, listOfValues) {
                if (typeof name !== "string" || typeof defaultValue === "undefined" || !Array.isArray(listOfValues)) {
                    throw ("Invlid constructor");
                }
                if (listOfValues.includes(defaultValue) === false) {
                    hrow ("Invlid constructor - default value missing");
                }
                if (findParameterIndex(name) !== -1) {
                    throw ("Parameter with name '" + name + "' already exists");
                }
                var param = new _parameters_ListParameter_js__WEBPACK_IMPORTED_MODULE_4__["ListParameter"](owner, name, defaultValue, listOfValues);
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



function ListParameter(owner, name, defaultValue, listOfValues) {
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
                        automation = new _ParameterAutomation_js__WEBPACK_IMPORTED_MODULE_1__["ParameterStepAutomation"](this, audioParameter, 0, listValues.length);
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
                return typeof automation !== "object";
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



function NumberParameter(owner, name, defaultValue, minimum, maximum) {
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
                    if (automation && automation.enabled) {
                        var t = owner.factory.getCurrentProgramTime();
                        return automation.getCurrentTimeValue(t);
                    }
                    return this.translate(audioParameter.value);
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
                        automation = new _ParameterAutomation_js__WEBPACK_IMPORTED_MODULE_1__["ParameterLinearAutomation"](this, audioParameter, minimum, maximum);
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
                return typeof automation !== "object";
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
var TimePoint = function(owner, time, value) {
    if (typeof time != "number" || !isFinite(time) || time < 0) {
        throw("Invalid Constructor: Time must be a positive number");
    }
    if (typeof value != "number" || !isFinite(value)) {
        throw("Invalid Constructor: Value must be a number");
    }
    Object.defineProperties(this, {
        "time": {
            "value": time
        },
        "value": {
            "get": function() {
                return value;
            }
        },
        "setValue": {
            "value": function(v) {
                if (typeof v != "number" || !isFinite(v)) {
                    throw("Value must be a number");
                }
                value = Math.min(Math.max(v, min_value), max_value);
                return value;
            }
        },
        "toString": {
            "value": function() {
                return String(value);
            }
        },
        "owner": {
            "value": owner
        }
    });
};

var TimePointList = function(min_value, max_value) {
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
                var point = new TimePoint(this, time, value);
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
            "value": function() {
                return automationPoints.length;
            }
        },
        "updatePoint": {
            "value": function(time, new_value) {
                var point = automationPoints.find(function(point) {
                    return point.time == time;
                });
                if (point) {
                    point.value = new_value;
                }
                return point;
            }
        }
    });
};

var ParameterAutomation = function(parameter, min_value, max_value) {
    TimePointList.call(this, min_value, max_value);
    var enabled = false;
    Object.defineProperties(this, {
        "enabled": {
            "get": function() {
                return enabled;
            },
            "set": function(t) {
                enabled = (t === true);
                return enabled;
            }
        }
    });
};

var ParameterLinearAutomation = function (owner, parameter, min_value, max_value) {
    ParameterAutomation.call(this, parameter, min_value, max_value);
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

var ParameterStepAutomation = function (owner, parameter, min_value, max_value) {
    ParameterAutomation.call(this, parameter, min_value, max_value);
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


function StringParameter(owner, name, defaultValue, maxLength) {
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



function SwitchParameter(owner, name, defaultValue, minState, maxState) {
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
                        automation = new _ParameterAutomation_js__WEBPACK_IMPORTED_MODULE_1__["ParameterStepAutomation"](this, audioParameter, minState, maxState);
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
                return typeof automation !== "object";
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
        var _in = audio_context.createGain(),
            _out = audio_context.createGain();

        _in.connect(plugin_node.getInputs()[0]);
        plugin_node.getOutputs()[0].connect(_out);

        function bypassEnable() {
            _in.disconnect();
            _in.connect(_out);
            _bypassed = true;
        }

        function bypassDisable() {
            _in.disconnect();
            _in.connect(plugin_node.getInputs()[0]);
            _bypassed = false;
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
                node.node.addEventListener("alterdelay", self);
                node.node.onloaded.call(node.node);
                updateDelayCompensation(true);
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
                plugin_object.node.removeEventListener("alterdelay", self);
                plugin_object.node.stop.call(plugin_object.node);
                plugin_object.node.onunloaded.call(plugin_object.node);
                plugin_object.node.deconstruct.call(plugin_object.node);
                plugin_list.splice(index, 1);
                isolate();
                rebuild();
                joinChain();
                updateDelayCompensation(true);
            }
        };

        this.destroyPlugin = function (plugin_object) {
            if (state === 0) {
                return;
            }
            this.removePlugin(plugin_object);
            this.parent.deletePlugin(plugin_object.id);
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
                updateDelayCompensation(true);
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

        function updateDelayCompensation(dispatchEvent) {
            var sum = 0;
            plugin_list.forEach(function(plugin) {
                sum += plugin.node.processingDelayAsSamples;
            });
            delaySamples = sum;
            if (dispatchEvent) {
                var ev = new Event("alterdelay");
                eventTarget.dispatchEvent(ev);
            }
        }

        Object.defineProperties(this, {
            'chainStart': {
                'value': chainStart
            },
            'chainStop': {
                'value': chainStop
            },
            "processingDelayAsSamples": {
                "get": function() {
                    return delaySamples;
                },
                "set": function() {
                    throw("processingDelayAsSamples is read-only");
                }
            },
            "processingDelayAsSeconds": {
                "get": function() {
                    return delaySamples/PluginFactory.context.sampleRate;
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
                        updateDelayCompensation(true);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9KU0FQL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0pTQVAvKHdlYnBhY2spL2J1aWxkaW4vYW1kLW9wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vSlNBUC8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vSlNBUC8od2VicGFjaykvYnVpbGRpbi9oYXJtb255LW1vZHVsZS5qcyIsIndlYnBhY2s6Ly9KU0FQLy4vc3JjL0xpbmtlZFN0b3JlLmpzIiwid2VicGFjazovL0pTQVAvLi9zcmMvYmFzZV9wbHVnaW4uanMiLCJ3ZWJwYWNrOi8vSlNBUC8uL3NyYy9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vSlNBUC8uL3NyYy9wYXJhbWV0ZXJNYW5hZ2VyLmpzIiwid2VicGFjazovL0pTQVAvLi9zcmMvcGFyYW1ldGVycy9CdXR0b25QYXJhbWV0ZXIuanMiLCJ3ZWJwYWNrOi8vSlNBUC8uL3NyYy9wYXJhbWV0ZXJzL0xpc3RQYXJhbWV0ZXIuanMiLCJ3ZWJwYWNrOi8vSlNBUC8uL3NyYy9wYXJhbWV0ZXJzL051bWJlclBhcmFtZXRlci5qcyIsIndlYnBhY2s6Ly9KU0FQLy4vc3JjL3BhcmFtZXRlcnMvUGFyYW1ldGVyQXV0b21hdGlvbi5qcyIsIndlYnBhY2s6Ly9KU0FQLy4vc3JjL3BhcmFtZXRlcnMvUGx1Z2luUGFyYW1ldGVyLmpzIiwid2VicGFjazovL0pTQVAvLi9zcmMvcGFyYW1ldGVycy9TdHJpbmdQYXJhbWV0ZXIuanMiLCJ3ZWJwYWNrOi8vSlNBUC8uL3NyYy9wYXJhbWV0ZXJzL1N3aXRjaFBhcmFtZXRlci5qcyIsIndlYnBhY2s6Ly9KU0FQLy4vc3JjL3BsdWdpbi1mYWN0b3J5LmpzIiwid2VicGFjazovL0pTQVAvLi9zcmMvc3ludGhfYmFzZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNB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Q1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUU0RDs7Ozs7Ozs7Ozs7OztBQ3ZTNUQ7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRXlCOzs7Ozs7Ozs7Ozs7O0FDeEZ6QjtBQUFBO0FBQUE7QUFBQTtBQUNxRDs7QUFFckQ7QUFDQSxJQUFJLG1FQUFlO0FBQ25CO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSwwQ0FBMEMsbUVBQWU7QUFDekQ7O0FBRXlCOzs7Ozs7Ozs7Ozs7O0FDNUV6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ3FEO0FBQ1k7O0FBRWpFO0FBQ0EsSUFBSSxtRUFBZTtBQUNuQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLCtFQUF1QjtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSwwQ0FBMEMsbUVBQWU7QUFDekQ7O0FBRXlCOzs7Ozs7Ozs7Ozs7O0FDM0l6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFdUM7QUFDQztBQUNVOztBQUVuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFD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Q0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0Isd0JBQXdCO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUFDYixTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRTBEOzs7Ozs7Ozs7Ozs7OztBQ254RDFEO0FBQUE7QUFBQTtBQUFBO0FBQ3lDOztBQUV6QztBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksdURBQVU7O0FBRWQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxnREFBZ0QsdURBQVU7QUFDMUQ7O0FBRStCIiwiZmlsZSI6IkpTQVAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9tb2R1bGUuanNcIik7XG4iLCIvKiBnbG9iYWxzIF9fd2VicGFja19hbWRfb3B0aW9uc19fICovXG5tb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19hbWRfb3B0aW9uc19fO1xuIiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvcmlnaW5hbE1vZHVsZSkge1xuXHRpZiAoIW9yaWdpbmFsTW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xuXHRcdHZhciBtb2R1bGUgPSBPYmplY3QuY3JlYXRlKG9yaWdpbmFsTW9kdWxlKTtcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcblx0XHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJleHBvcnRzXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWVcblx0XHR9KTtcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcblx0fVxuXHRyZXR1cm4gbW9kdWxlO1xufTtcbiIsIi8qZ2xvYmFscyBkb2N1bWVudCAqL1xuLyplc2xpbnQtZW52IGJyb3dzZXIgKi9cblxudmFyIExpbmtlZFN0b3JlID0gZnVuY3Rpb24gKHN0b3JlTmFtZSkge1xuICAgIC8vIFN0b3JlIGZvciB0aGUgc2VtYW50aWMgdGVybXMsIGVhY2ggc3RvcmUgaG9sZHMgaXRzIG93biBkYXRhIHRyZWVcbiAgICAvLyBUZXJtcyBhcmUgYWRkZWQgYXMga2V5L3ZhbHVlIHBhcmlzIHRvIGEgcm9vdCBub2RlXG4gICAgdmFyIHJvb3QgPSB7fTtcblxuICAgIGZ1bmN0aW9uIG9iamVjdFRvWE1MKG9iaiwgcm9vdCwgZG9jKSB7XG4gICAgICAgIC8vIFVzZWQgaWYgYW4gb2JqZWN0IHdhcyBwYXNzZWQgYXMgYSB0ZXJtIHZhbHVlXG4gICAgICAgIHZhciB0ZXJtO1xuICAgICAgICBmb3IgKHRlcm0gaW4gb2JqKSB7XG4gICAgICAgICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KHRlcm0pKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvYmpbdGVybV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRvY05vZGU7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvYmpbdGVybV0udG9YTUwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY05vZGUgPSBvYmpbdGVybV0udG9YTUwoZG9jKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY05vZGUgPSBkb2MuY3JlYXRlRWxlbWVudCh0ZXJtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvb3QuYXBwZW5kQ2hpbGQoZG9jTm9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob2JqW3Rlcm1dLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5VG9YTUwob2JqW3Rlcm1dLCBkb2NOb2RlLCBkb2MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RUb1hNTChvYmpbdGVybV0sIGRvY05vZGUsIGRvYyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcm9vdC5hcHBlbmRDaGlsZChkb2NOb2RlKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByb290LnNldEF0dHJpYnV0ZSh0ZXJtLCBvYmpbdGVybV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFycmF5VG9YTUwoYXJyLCByb290LCBkb2MpIHtcbiAgICAgICAgLy8gVXNlZCB0byBjb252ZXJ0IGFuIGFycmF5IHRvIGEgbGlzdCBvZiBYTUwgZW50cmllc1xuICAgICAgICB2YXIgYWxsX251bWJlcnMgPSB0cnVlLFxuICAgICAgICAgICAgYWxsX3N0cmluZ3MgPSB0cnVlLFxuICAgICAgICAgICAgaSwgbCA9IGFyci5sZW5ndGg7XG4gICAgICAgIGFsbF9udW1iZXJzID0gYXJyLmV2ZXJ5KGZ1bmN0aW9uIChhKSB7XG4gICAgICAgICAgICByZXR1cm4gdHlwZW9mIGEgPT09IFwibnVtYmVyXCI7XG4gICAgICAgIH0pO1xuICAgICAgICBhbGxfc3RyaW5ncyA9IGFyci5ldmVyeShmdW5jdGlvbiAoYSkge1xuICAgICAgICAgICAgcmV0dXJuIHR5cGVvZiBhID09PSBcInN0cmluZ1wiO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGFsbF9udW1iZXJzIHx8IGFsbF9zdHJpbmdzKSB7XG4gICAgICAgICAgICAvLyBBbiBhcnJheSBvZiBudW1iZXJzIG9yIHN0cmluZ3NcbiAgICAgICAgICAgIGFyci5mb3JFYWNoKGZ1bmN0aW9uIChhLCBpKSB7XG4gICAgICAgICAgICAgICAgcm9vdC5zZXRBdHRyaWJ1dGUoXCJpbmRleC1cIiArIGksIGEpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBBbiBhcnJheSBvZiBvYmplY3RzXG4gICAgICAgICAgICBhcnIuZm9yRWFjaChmdW5jdGlvbiAoYSwgaSkge1xuICAgICAgICAgICAgICAgIHZhciBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInZhbHVlXCIpO1xuICAgICAgICAgICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKFwiaW5kZXhcIiwgaSk7XG4gICAgICAgICAgICAgICAgb2JqZWN0VG9YTUwoYSwgbm9kZSwgZG9jKTtcbiAgICAgICAgICAgICAgICByb290LmFwcGVuZENoaWxkKG5vZGUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XG4gICAgICAgICduYW1lJzoge1xuICAgICAgICAgICAgJ2dldCc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RvcmVOYW1lO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICdzZXQnOiBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICAgICAgICAgIGlmIChzdG9yZU5hbWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBuYW1lID0gc3RvcmVOYW1lO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IChcIk5hbWUgaXMgYWxyZWFkeSBzZXRcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAnYWRkVGVybSc6IHtcbiAgICAgICAgICAgICd2YWx1ZSc6IGZ1bmN0aW9uICh0ZXJtLCB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGVybSAhPT0gXCJzdHJpbmdcIiAmJiB0ZXJtLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyAoXCJ0ZXJtIG11c3QgYmUgYSBzdHJpbmdcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJvb3RbdGVybV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgJ2FkZFRlcm1zJzoge1xuICAgICAgICAgICAgJ3ZhbHVlJzogZnVuY3Rpb24gKHRlcm1zT2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0ZXJtc09iamVjdCAhPT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyAoXCJhZGRUZXJtcyB0YWtlcyBhbiBvYmplY3Qgb2YgdGVybS92YWx1ZSBwYWlyc1wiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIHRlcm07XG4gICAgICAgICAgICAgICAgZm9yICh0ZXJtIGluIHRlcm1zT2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ZXJtc09iamVjdC5oYXNPd25Qcm9wZXJ0eSh0ZXJtKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRUZXJtKHRlcm0sIHRlcm1zT2JqZWN0W3Rlcm1dKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgJ2RlbGV0ZVRlcm0nOiB7XG4gICAgICAgICAgICAndmFsdWUnOiBmdW5jdGlvbiAodGVybSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkVGVybSh0ZXJtLCB1bmRlZmluZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAnZ2V0VGVybSc6IHtcbiAgICAgICAgICAgICd2YWx1ZSc6IGZ1bmN0aW9uICh0ZXJtKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0ZXJtICE9PSBcInN0cmluZ1wiICYmIHRlcm0ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IChcInRlcm0gbXVzdCBiZSBhIHN0cmluZ1wiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJvb3RbdGVybV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgICdoYXNUZXJtJzoge1xuICAgICAgICAgICAgJ3ZhbHVlJzogZnVuY3Rpb24gKHRlcm0pIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRlcm0gIT09IFwic3RyaW5nXCIgJiYgdGVybS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgKFwidGVybSBtdXN0IGJlIGEgc3RyaW5nXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcm9vdC5oYXNPd25Qcm9wZXJ0eSh0ZXJtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgJ3RvSlNPTic6IHtcbiAgICAgICAgICAgICd2YWx1ZSc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShyb290KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgICd0b1hNTCc6IHtcbiAgICAgICAgICAgICd2YWx1ZSc6IGZ1bmN0aW9uIChkb2MpIHtcbiAgICAgICAgICAgICAgICB2YXIgbm9kZTtcbiAgICAgICAgICAgICAgICBpZiAoIWRvYykge1xuICAgICAgICAgICAgICAgICAgICBkb2MgPSBkb2N1bWVudC5pbXBsZW1lbnRhdGlvbi5jcmVhdGVEb2N1bWVudChudWxsLCBzdG9yZU5hbWUsIG51bGwpO1xuICAgICAgICAgICAgICAgICAgICBub2RlID0gZG9jLmZpcnN0RWxlbWVudENoaWxkO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUgPSBkb2MuY3JlYXRlRWxlbWVudChzdG9yZU5hbWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBvYmplY3RUb1hNTChyb290LCBub2RlLCBkb2MpO1xuICAgICAgICAgICAgICAgIHJldHVybiBub2RlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7TGlua2VkU3RvcmV9O1xuIiwiLy8gQWRkIGdldElucHV0cyB0byBhbGwgQXVkaW9Ob2RlcyB0byBlYXNlIGRlcGxveW1lbnRcbi8qZ2xvYmFscyBBdWRpb05vZGUsIFdvcmtlciwgY29uc29sZSwgd2luZG93LCBkb2N1bWVudCwgUHJvbWlzZSwgWE1MSHR0cFJlcXVlc3QgKi9cbi8qZXNsaW50LWVudiBicm93c2VyICovXG4vKmpzaGludCBlc3ZlcnNpb246IDYgKi9cbmltcG9ydCB7UGFyYW1ldGVyTWFuYWdlcn0gZnJvbSBcIi4vcGFyYW1ldGVyTWFuYWdlci5qc1wiO1xuXG5pZiAodHlwZW9mIEF1ZGlvTm9kZSA9PT0gXCJmdW5jdGlvblwiICYmIHdpbmRvdy5pbXBvcnRTY3JpcHRzID09PSB1bmRlZmluZWQpIHtcbiAgICBBdWRpb05vZGUucHJvdG90eXBlLmdldElucHV0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIFt0aGlzXTtcbiAgICB9O1xufVxuXG4vLyBUaGlzIHNob3VsZCBzaW1wbHkgZGVmaW5lIHRoZSBCYXNlUGx1Z2luIGZyb20gd2hpY2ggY3VzdG9tIHBsdWdpbnMgY2FuIGJlIGJ1aWx0IGZyb21cbnZhciBCYXNlUGx1Z2luID0gZnVuY3Rpb24oZmFjdG9yeSwgb3duZXIpIHtcbiAgICB2YXIgaW5wdXRMaXN0ID0gW10sXG4gICAgICAgIG91dHB1dExpc3QgPSBbXSxcbiAgICAgICAgcE93bmVyID0gb3duZXIsXG4gICAgICAgIGRlbGF5U2FtcGxlcyA9IDAsXG4gICAgICAgIGV2ZW50VGFyZ2V0ID0gbmV3IEV2ZW50VGFyZ2V0KCksXG4gICAgICAgIGV4dGVybmFsSW50ZXJmYWNlID0gbmV3IFBsdWdpbkludGVyZmFjZU1lc3NhZ2VIdWIodGhpcyk7XG4gICAgaWYgKHRoaXMuY29udGV4dCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IGZhY3RvcnkuY29udGV4dDtcbiAgICB9XG4gICAgaWYgKHRoaXMuZmFjdG9yeSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuZmFjdG9yeSA9IGZhY3Rvcnk7XG4gICAgfVxuICAgIHRoaXMuZmVhdHVyZU1hcCA9IG5ldyBQbHVnaW5GZWF0dXJlSW50ZXJmYWNlKHRoaXMpO1xuICAgIHRoaXMucGFyYW1ldGVycyA9IG5ldyBQYXJhbWV0ZXJNYW5hZ2VyKHRoaXMsIGV4dGVybmFsSW50ZXJmYWNlKTtcbiAgICB0aGlzLnBhcmFtZXRlcnMuYWRkRXZlbnRMaXN0ZW5lcihcInBhcmFtZXRlcnNldFwiLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIGV2ZW50VGFyZ2V0LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwicGFyYW1ldGVyc2V0XCIsIHtkZXRhaWw6IGUuZGV0YWlsfSkpO1xuICAgIH0pO1xuXG4gICAgZnVuY3Rpb24gZGVsZXRlSU8obm9kZSwgbGlzdCkge1xuICAgICAgICB2YXIgaSA9IGxpc3QuZmluZEluZGV4KGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICByZXR1cm4gZSA9PT0gdGhpcztcbiAgICAgICAgfSwgbm9kZSk7XG4gICAgICAgIGlmIChpID09PSAtMSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGxpc3Quc3BsaWNlKGksIDEpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICB0aGlzLmFkZElucHV0ID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgaW5wdXRMaXN0LnB1c2gobm9kZSk7XG4gICAgICAgIHJldHVybiBpbnB1dExpc3Q7XG4gICAgfTtcbiAgICB0aGlzLmRlbGV0ZUlucHV0ID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgcmV0dXJuIGRlbGV0ZUlPKG5vZGUsIGlucHV0TGlzdCk7XG4gICAgfTtcbiAgICB0aGlzLmFkZE91dHB1dCA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgIG91dHB1dExpc3QucHVzaChub2RlKTtcbiAgICAgICAgcmV0dXJuIHRoaXMub3V0cHV0cztcbiAgICB9O1xuICAgIHRoaXMuZGVsZXRlT3V0cHV0ID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgcmV0dXJuIGRlbGV0ZUlPKG5vZGUsIG91dHB1dExpc3QpO1xuICAgIH07XG5cbiAgICB0aGlzLnNldFByb2Nlc3NpbmdEZWxheUFzU2Vjb25kcyA9IGZ1bmN0aW9uKHNlY29uZHMpIHtcbiAgICAgICAgdmFyIGZzID0gZmFjdG9yeS5jb250ZXh0LnNhbXBsZVJhdGU7XG4gICAgICAgIGlmICh0eXBlb2Ygc2Vjb25kcyA9PSBcIm51bWJlclwiICYmIGlzRmluaXRlKHNlY29uZHMpICYmIHNlY29uZHMgPj0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2V0UHJvY2Vzc2luZ0RlbGF5QXNTYW1wbGVzKHNlY29uZHMqZnMpL2ZzO1xuICAgICAgICB9XG4gICAgICAgIHRocm93KFwic2V0UHJvY2Vzc2luZ0RlbGF5QXNTZWNvbmRzIEludmFsaWQgYXJndW1lbnRcIik7XG4gICAgfTtcblxuICAgIHRoaXMuc2V0UHJvY2Vzc2luZ0RlbGF5QXNTYW1wbGVzID0gZnVuY3Rpb24oc2FtcGxlcykge1xuICAgICAgICBpZiAodHlwZW9mIHNhbXBsZXMgPT0gXCJudW1iZXJcIiAmJiBpc0Zpbml0ZShzYW1wbGVzKSAmJiBzYW1wbGVzID49IDApIHtcbiAgICAgICAgICAgIGRlbGF5U2FtcGxlcyA9IHNhbXBsZXM7XG4gICAgICAgICAgICB2YXIgZSA9IG5ldyBFdmVudChcImFsdGVyZGVsYXlcIik7XG4gICAgICAgICAgICBldmVudFRhcmdldC5kaXNwYXRjaEV2ZW50KGUpO1xuICAgICAgICAgICAgcmV0dXJuIGRlbGF5U2FtcGxlcztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93KFwic2V0UHJvY2Vzc2luZ0RlbGF5QXNTYW1wbGVzIEludmFsaWQgYXJndW1lbnRcIik7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICB0aGlzLnN0YXJ0ID0gdGhpcy5zdG9wID0gdGhpcy5vbmxvYWRlZCA9IHRoaXMub251bmxvYWRlZCA9IHRoaXMuZGVjb25zdHJ1Y3QgPSBmdW5jdGlvbiAoKSB7fTtcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgICAgXCJleHRlcm5hbEludGVyZmFjZVwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGV4dGVybmFsSW50ZXJmYWNlXG4gICAgICAgIH0sXG4gICAgICAgIFwibnVtSW5wdXRzXCI6IHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpbnB1dExpc3QubGVuZ3RoO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHRocm93IChcIkNhbm5vdCBzZXQgdGhlIG51bWJlciBvZiBpbnB1dHMgb2YgQmFzZVBsdWdpblwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJudW1PdXRwdXRzXCI6IHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBvdXRwdXRMaXN0Lmxlbmd0aDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyAoXCJDYW5ub3Qgc2V0IHRoZSBudW1iZXIgb2Ygb3V0cHV0cyBvZiBCYXNlUGx1Z2luXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcIm51bVBhcmFtZXRlcnNcIjoge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyYW1ldGVycy5wYXJhbWV0ZXJzLmxlbmd0aDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyAoXCJDYW5ub3Qgc2V0IHRoZSBudW1iZXIgb2YgcGFyYW1ldGVycyBvZiBCYXNlUGx1Z2luXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcIm93bmVyXCI6IHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBwT3duZXI7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiAob3duZXIpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG93bmVyID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHBPd25lciA9IG93bmVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcE93bmVyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImlucHV0c1wiOiB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpbnB1dExpc3Q7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgKFwiSWxsZWdhbCBhdHRlbXB0IHRvIG1vZGlmeSBCYXNlUGx1Z2luXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcIm91dHB1dHNcIjoge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gb3V0cHV0TGlzdDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyAoXCJJbGxlZ2FsIGF0dGVtcHQgdG8gbW9kaWZ5IEJhc2VQbHVnaW5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwicHJvY2Vzc2luZ0RlbGF5QXNTYW1wbGVzXCI6IHtcbiAgICAgICAgICAgIFwiZ2V0XCI6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBkZWxheVNhbXBsZXM7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJzZXRcIjogdGhpcy5zZXRQcm9jZXNzaW5nRGVsYXlBc1NhbXBsZXNcbiAgICAgICAgfSxcbiAgICAgICAgXCJwcm9jZXNzaW5nRGVsYXlBc1NlY29uZHNcIjoge1xuICAgICAgICAgICAgXCJnZXRcIjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlbGF5U2FtcGxlcy9mYWN0b3J5LmNvbnRleHQuc2FtcGxlUmF0ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInNldFwiOiB0aGlzLnNldFByb2Nlc3NpbmdEZWxheUFzU2Vjb25kc1xuICAgICAgICB9LFxuICAgICAgICBcImNvbm5lY3RcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoZGVzdCkge1xuICAgICAgICAgICAgICAgIHRoaXMub3V0cHV0c1swXS5jb25uZWN0KGRlc3QuaW5wdCA/IGRlc3QuaW5wdXQgOiBkZXN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJkaXNjb25uZWN0XCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKGRlc3QpIHtcbiAgICAgICAgICAgICAgICBpZiAoZGVzdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3V0cHV0c1swXS5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vdXRwdXRzWzBdLmRpc2Nvbm5lY3QoZGVzdC5pbnB1dCA/IGRlc3QuaW5wdXQgOiBkZXN0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0SW5wdXRzXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmlucHV0cztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRPdXRwdXRzXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm91dHB1dHM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0UGFyYW1ldGVyTmFtZXNcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyYW1ldGVycy5nZXRQYXJhbWV0ZXJOYW1lcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImdldFBhcmFtZXRlckJ5TmFtZVwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyYW1ldGVycy5nZXRQYXJhbWV0ZXJCeU5hbWUobmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0UGFyYW1ldGVyT2JqZWN0XCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcmFtZXRlcnMuZ2V0UGFyYW1ldGVyT2JqZWN0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwic2V0UGFyYW1ldGVyQnlOYW1lXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyYW1ldGVycy5zZXRQYXJhbWV0ZXJCeU5hbWUobmFtZSwgdmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInNldFBhcmFtZXRlcnNCeU9iamVjdFwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uIChvYmplY3QpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJhbWV0ZXJzLnNldFBhcmFtZXRlcnNCeU9iamVjdChvYmplY3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImFkZEV2ZW50TGlzdGVuZXJcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbihrZXksIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGV2ZW50VGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoa2V5LCB2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwicmVtb3ZlRXZlbnRMaXN0ZW5lclwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZXZlbnRUYXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihrZXksIHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufTtcblxudmFyIFBsdWdpbkZlYXR1cmVJbnRlcmZhY2UgPSBmdW5jdGlvbiAoQmFzZVBsdWdpbkluc3RhbmNlKSB7XG4gICAgdGhpcy5wbHVnaW4gPSBCYXNlUGx1Z2luSW5zdGFuY2U7XG4gICAgdGhpcy5SZWNlaXZlciA9IG5ldyBQbHVnaW5GZWF0dXJlSW50ZXJmYWNlUmVjZWl2ZXIodGhpcywgQmFzZVBsdWdpbkluc3RhbmNlLmZhY3RvcnkuRmVhdHVyZU1hcCk7XG4gICAgdGhpcy5TZW5kZXIgPSBuZXcgUGx1Z2luRmVhdHVyZUludGVyZmFjZVNlbmRlcih0aGlzLCBCYXNlUGx1Z2luSW5zdGFuY2UuZmFjdG9yeS5GZWF0dXJlTWFwKTtcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIm9uZmVhdHVyZXNcIiwge1xuICAgICAgICAnZ2V0JzogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuUmVjZWl2ZXIub25mZWF0dXJlcztcbiAgICAgICAgfSxcbiAgICAgICAgJ3NldCc6IGZ1bmN0aW9uIChmdW5jKSB7XG4gICAgICAgICAgICB0aGlzLlJlY2VpdmVyLm9uZmVhdHVyZXMgPSBmdW5jO1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmM7XG4gICAgICAgIH1cbiAgICB9KTtcbn07XG52YXIgUGx1Z2luRmVhdHVyZUludGVyZmFjZVJlY2VpdmVyID0gZnVuY3Rpb24gKEZlYXR1cmVJbnRlcmZhY2VJbnN0YW5jZSwgRmFjdG9yeUZlYXR1cmVNYXApIHtcbiAgICBmdW5jdGlvbiBjaGVja0ZlYXR1cmVBcmdzKHNvdXJjZSwgZmVhdHVyZU9iamVjdCkge1xuICAgICAgICBpZiAoc291cmNlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRocm93IChcIlNvdXJjZSBwbHVnaW4gbXVzdCBiZSBkZWZpbmVkXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChmZWF0dXJlT2JqZWN0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRocm93IChcIkZlYXR1cmVPYmplY3QgbXVzdCBiZSBkZWZpbmVkXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgZmVhdHVyZU9iamVjdC5vdXRwdXRJbmRleCAhPT0gXCJudW1iZXJcIiB8fCB0eXBlb2YgZmVhdHVyZU9iamVjdC5mcmFtZVNpemUgIT09IFwibnVtYmVyXCIgfHwgdHlwZW9mIGZlYXR1cmVPYmplY3QuZmVhdHVyZXMgIT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIHRocm93IChcIk1hbGZvcm1lZCBmZWF0dXJlT2JqZWN0XCIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICB2YXIgY19mZWF0dXJlcyA9IGZ1bmN0aW9uICgpIHt9O1xuICAgIHRoaXMucmVxdWVzdEZlYXR1cmVzID0gZnVuY3Rpb24gKGZlYXR1cmVMaXN0KSB7XG4gICAgICAgIHZhciBpO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgZmVhdHVyZUxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMucmVxdWVzdEZlYXR1cmVzRnJvbVBsdWdpbihmZWF0dXJlTGlzdFtpXS5wbHVnaW4sIHtcbiAgICAgICAgICAgICAgICAnb3V0cHV0SW5kZXgnOiBmZWF0dXJlTGlzdFtpXS5vdXRwdXRJbmRleCxcbiAgICAgICAgICAgICAgICAnZnJhbWVTaXplJzogZmVhdHVyZUxpc3RbaV0uZnJhbWVTaXplLFxuICAgICAgICAgICAgICAgICdmZWF0dXJlcyc6IGZlYXR1cmVMaXN0W2ldLmZlYXR1cmVzXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5yZXF1ZXN0RmVhdHVyZXNGcm9tUGx1Z2luID0gZnVuY3Rpb24gKHNvdXJjZSwgZmVhdHVyZU9iamVjdCkge1xuICAgICAgICBjaGVja0ZlYXR1cmVBcmdzKHNvdXJjZSwgZmVhdHVyZU9iamVjdCk7XG4gICAgICAgIEZhY3RvcnlGZWF0dXJlTWFwLnJlcXVlc3RGZWF0dXJlcyhGZWF0dXJlSW50ZXJmYWNlSW5zdGFuY2UucGx1Z2luLCBzb3VyY2UsIGZlYXR1cmVPYmplY3QpO1xuICAgIH07XG4gICAgdGhpcy5jYW5jZWxGZWF0dXJlc0Zyb21QbHVnaW4gPSBmdW5jdGlvbiAoc291cmNlLCBmZWF0dXJlT2JqZWN0KSB7XG4gICAgICAgIGNoZWNrRmVhdHVyZUFyZ3Moc291cmNlLCBmZWF0dXJlT2JqZWN0KTtcbiAgICAgICAgRmFjdG9yeUZlYXR1cmVNYXAuZGVsZXRlRmVhdHVyZXMoRmVhdHVyZUludGVyZmFjZUluc3RhbmNlLnBsdWdpbiwgc291cmNlLCBmZWF0dXJlT2JqZWN0KTtcbiAgICB9O1xuICAgIHRoaXMuY2FuY2VsQWxsRmVhdHVyZXNGcm9tUGx1Z2luID0gZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgICBpZiAoc291cmNlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRocm93IChcIlNvdXJjZSBwbHVnaW4gbXVzdCBiZSBkZWZpbmVkXCIpO1xuICAgICAgICB9XG4gICAgICAgIEZhY3RvcnlGZWF0dXJlTWFwLmRlbGV0ZUZlYXR1cmVzKEZlYXR1cmVJbnRlcmZhY2VJbnN0YW5jZS5wbHVnaW4sIHNvdXJjZSk7XG4gICAgfTtcbiAgICB0aGlzLmNhbmNlbEFsbEZlYXR1cmVzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBGYWN0b3J5RmVhdHVyZU1hcC5kZWxldGVGZWF0dXJlcyhGZWF0dXJlSW50ZXJmYWNlSW5zdGFuY2UucGx1Z2luKTtcbiAgICB9O1xuXG4gICAgdGhpcy5wb3N0RmVhdHVyZXMgPSBmdW5jdGlvbiAoTWVzc2FnZSkge1xuICAgICAgICAvKlxuICAgICAgICAgICAgQ2FsbGVkIGJ5IHRoZSBQbHVnaW4gRmFjdG9yeSB3aXRoIHRoZSBmZWF0dXJlIG1lc3NhZ2VcbiAgICAgICAgICAgIG1lc3NhZ2UgPSB7XG4gICAgICAgICAgICAgICAgJ3BsdWdpbic6IHNvdXJjZVBsdWdpbkluc3RhbmNlLFxuICAgICAgICAgICAgICAgICdvdXRwdXRJbmRleCc6IG91dHB1dEluZGV4LFxuICAgICAgICAgICAgICAgICdmcmFtZVNpemUnOiBmcmFtZVNpemUsXG4gICAgICAgICAgICAgICAgJ2ZlYXR1cmVzJzoge30gSlMtWHRyYWN0IGZlYXR1cmUgcmVzdWx0cyBvYmplY3RcbiAgICAgICAgICAgIH1cbiAgICAgICAgKi9cbiAgICAgICAgaWYgKHR5cGVvZiBjX2ZlYXR1cmVzID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIGNfZmVhdHVyZXMoTWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIFwib25mZWF0dXJlc1wiLCB7XG4gICAgICAgICdnZXQnOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gY19mZWF0dXJlcztcbiAgICAgICAgfSxcbiAgICAgICAgJ3NldCc6IGZ1bmN0aW9uIChmdW5jKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGZ1bmMgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgIGNfZmVhdHVyZXMgPSBmdW5jO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfSk7XG5cbn07XG52YXIgUGx1Z2luRmVhdHVyZUludGVyZmFjZVNlbmRlciA9IGZ1bmN0aW9uIChGZWF0dXJlSW50ZXJmYWNlSW5zdGFuY2UsIEZhY3RvcnlGZWF0dXJlTWFwKSB7XG4gICAgdmFyIE91dHB1dE5vZGUgPSBmdW5jdGlvbiAocGFyZW50LCBvdXRwdXQsIGluZGV4KSB7XG4gICAgICAgIHZhciBleHRyYWN0b3JzID0gW107XG4gICAgICAgIHZhciBFeHRyYWN0b3IgPSBmdW5jdGlvbiAob3V0cHV0LCBmcmFtZVNpemUpIHtcbiAgICAgICAgICAgIHRoaXMuZXh0cmFjdG9yID0gRmVhdHVyZUludGVyZmFjZUluc3RhbmNlLnBsdWdpbi5mYWN0b3J5LmNvbnRleHQuY3JlYXRlQW5hbHlzZXIoKTtcbiAgICAgICAgICAgIHRoaXMuZXh0cmFjdG9yLmZmdFNpemUgPSBmcmFtZVNpemU7XG4gICAgICAgICAgICBvdXRwdXQuY29ubmVjdCh0aGlzLmV4dHJhY3Rvcik7XG4gICAgICAgICAgICB0aGlzLmZlYXR1cmVzID0gW107XG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgXCJmcmFtZVNpemVcIiwge1xuICAgICAgICAgICAgICAgICd2YWx1ZSc6IGZyYW1lU2l6ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvKlxuICAgICAgICAgICAgZnVuY3Rpb24gcmVjdXJzaXZlUHJvY2Vzc2luZyhiYXNlLCBsaXN0KSB7XG4gICAgICAgICAgICAgICAgdmFyIGwgPSBsaXN0Lmxlbmd0aCxcbiAgICAgICAgICAgICAgICAgICAgaSwgZW50cnk7XG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBlbnRyeSA9IGxpc3RbaV07XG4gICAgICAgICAgICAgICAgICAgIGJhc2VbZW50cnkubmFtZV0uYXBwbHkoYmFzZSwgZW50cnkucGFyYW1ldGVycyk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlbnRyeS5mZWF0dXJlcyAmJiBlbnRyeS5mZWF0dXJlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWN1cnNpdmVQcm9jZXNzaW5nKGJhc2UucmVzdWx0W2VudHJ5Lm5hbWVdLCBlbnRyeS5mZWF0dXJlcyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAqL1xuICAgICAgICAgICAgdmFyIHJlY3Vyc2l2ZVByb2Nlc3NpbmcgPSB0aGlzLmZhY3RvcnkucmVjdXJzaXZlUHJvY2Vzc2luZztcblxuICAgICAgICAgICAgZnVuY3Rpb24gb25hdWRpb2NhbGxiYWNrKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAvL3RoaXMgPT09IEV4dHJhY3RvclxuICAgICAgICAgICAgICAgIHZhciBtZXNzYWdlID0ge1xuICAgICAgICAgICAgICAgICAgICAnbnVtYmVyT2ZDaGFubmVscyc6IDEsXG4gICAgICAgICAgICAgICAgICAgICdyZXN1bHRzJzogW11cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHJlY3Vyc2l2ZVByb2Nlc3NpbmcoZGF0YSwgdGhpcy5mZWF0dXJlcyk7XG4gICAgICAgICAgICAgICAgbWVzc2FnZS5yZXN1bHRzWzBdID0ge1xuICAgICAgICAgICAgICAgICAgICAnY2hhbm5lbCc6IDAsXG4gICAgICAgICAgICAgICAgICAgICdyZXN1bHRzJzogSlNPTi5wYXJzZShkYXRhLnRvSlNPTigpKVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgdGhpcy5wb3N0RmVhdHVyZXMoZGF0YS5sZW5ndGgsIG1lc3NhZ2UpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnNldEZlYXR1cmVzID0gZnVuY3Rpb24gKGZlYXR1cmVMaXN0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5mZWF0dXJlcyA9IGZlYXR1cmVMaXN0O1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZlYXR1cmVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmV4dHJhY3Rvci5jbGVhckNhbGxiYWNrKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5leHRyYWN0b3IuZnJhbWVDYWxsYmFjayhvbmF1ZGlvY2FsbGJhY2ssIHRoaXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgICAgIHZhciBXb3JrZXJFeHRyYWN0b3IgPSBmdW5jdGlvbiAob3V0cHV0LCBmcmFtZVNpemUpIHtcbiAgICAgICAgICAgIGZ1bmN0aW9uIG9uYXVkaW9jYWxsYmFjayhlKSB7XG4gICAgICAgICAgICAgICAgdmFyIGMsIGZyYW1lcyA9IFtdO1xuICAgICAgICAgICAgICAgIGZvciAoYyA9IDA7IGMgPCBlLmlucHV0QnVmZmVyLm51bWJlck9mQ2hhbm5lbHM7IGMrKykge1xuICAgICAgICAgICAgICAgICAgICBmcmFtZXNbY10gPSBlLmlucHV0QnVmZmVyLmdldENoYW5uZWxEYXRhKGMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB3b3JrZXIucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgICAgICAgICAnc3RhdGUnOiAyLFxuICAgICAgICAgICAgICAgICAgICAnZnJhbWVzJzogZnJhbWVzXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIHJlc3BvbnNlKG1zZykge1xuICAgICAgICAgICAgICAgIHRoaXMucG9zdEZlYXR1cmVzKGZyYW1lU2l6ZSwgbXNnLmRhdGEucmVzcG9uc2UpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgd29ya2VyID0gbmV3IFdvcmtlcihcImpzYXAvZmVhdHVyZS13b3JrZXIuanNcIik7XG4gICAgICAgICAgICB3b3JrZXIub25lcnJvciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHRoaXMuc2V0RmVhdHVyZXMgPSBmdW5jdGlvbiAoZmVhdHVyZUxpc3QpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgICAgICAgICAgdmFyIGNvbmZpZ01lc3NhZ2UgPSB7XG4gICAgICAgICAgICAgICAgICAgICdzdGF0ZSc6IDEsXG4gICAgICAgICAgICAgICAgICAgICdzYW1wbGVSYXRlJzogRmVhdHVyZUludGVyZmFjZUluc3RhbmNlLnBsdWdpbi5mYWN0b3J5LmNvbnRleHQuc2FtcGxlUmF0ZSxcbiAgICAgICAgICAgICAgICAgICAgJ2ZlYXR1cmVMaXN0JzogZmVhdHVyZUxpc3QsXG4gICAgICAgICAgICAgICAgICAgICdudW1DaGFubmVscyc6IG91dHB1dC5udW1iZXJPZk91dHB1dHMsXG4gICAgICAgICAgICAgICAgICAgICdmcmFtZVNpemUnOiB0aGlzLmZyYW1lU2l6ZVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgdGhpcy5mZWF0dXJlcyA9IGZlYXR1cmVMaXN0O1xuICAgICAgICAgICAgICAgIGlmIChmZWF0dXJlTGlzdCAmJiBmZWF0dXJlTGlzdC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHdvcmtlci5vbm1lc3NhZ2UgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUuZGF0YS5zdGF0ZSA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtlci5vbm1lc3NhZ2UgPSByZXNwb25zZS5iaW5kKHNlbGYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuZXh0cmFjdG9yLm9uYXVkaW9wcm9jZXNzID0gb25hdWRpb2NhbGxiYWNrLmJpbmQoc2VsZik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtlci5wb3N0TWVzc2FnZShjb25maWdNZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgd29ya2VyLnBvc3RNZXNzYWdlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdzdGF0ZSc6IDBcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5leHRyYWN0b3Iub25hdWRpb3Byb2Nlc3MgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB0aGlzLmV4dHJhY3RvciA9IEZlYXR1cmVJbnRlcmZhY2VJbnN0YW5jZS5wbHVnaW4uZmFjdG9yeS5jb250ZXh0LmNyZWF0ZVNjcmlwdFByb2Nlc3NvcihmcmFtZVNpemUsIG91dHB1dC5udW1iZXJPZk91dHB1dHMsIDEpO1xuICAgICAgICAgICAgb3V0cHV0LmNvbm5lY3QodGhpcy5leHRyYWN0b3IpO1xuICAgICAgICAgICAgdGhpcy5leHRyYWN0b3IuY29ubmVjdChGZWF0dXJlSW50ZXJmYWNlSW5zdGFuY2UucGx1Z2luLmZhY3RvcnkuY29udGV4dC5kZXN0aW5hdGlvbik7XG5cbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImZyYW1lU2l6ZVwiLCB7XG4gICAgICAgICAgICAgICAgJ3ZhbHVlJzogZnJhbWVTaXplXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5hZGRFeHRyYWN0b3IgPSBmdW5jdGlvbiAoZnJhbWVTaXplKSB7XG4gICAgICAgICAgICB2YXIgb2JqO1xuICAgICAgICAgICAgaWYgKHdpbmRvdy5Xb3JrZXIpIHtcbiAgICAgICAgICAgICAgICBvYmogPSBuZXcgV29ya2VyRXh0cmFjdG9yKG91dHB1dCwgZnJhbWVTaXplKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgb2JqID0gbmV3IEV4dHJhY3RvcihvdXRwdXQsIGZyYW1lU2l6ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBleHRyYWN0b3JzLnB1c2gob2JqKTtcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIFwicG9zdEZlYXR1cmVzXCIsIHtcbiAgICAgICAgICAgICAgICAndmFsdWUnOiBmdW5jdGlvbiAoZnJhbWVTaXplLCByZXN1bHRzSlNPTikge1xuICAgICAgICAgICAgICAgICAgICB2YXIgb2JqID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ291dHB1dEluZGV4JzogaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAnZnJhbWVTaXplJzogZnJhbWVTaXplLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3Jlc3VsdHMnOiByZXN1bHRzSlNPTlxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvc3RGZWF0dXJlcyhvYmopO1xuICAgICAgICAgICAgICAgIH0uYmluZCh0aGlzKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gb2JqO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmZpbmRFeHRyYWN0b3IgPSBmdW5jdGlvbiAoZnJhbWVTaXplKSB7XG4gICAgICAgICAgICB2YXIgY2hlY2sgPSBmcmFtZVNpemU7XG4gICAgICAgICAgICByZXR1cm4gZXh0cmFjdG9ycy5maW5kKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgLy8gVGhpcyBNVVNUIGJlID09PSBOT1QgPT09XG4gICAgICAgICAgICAgICAgcmV0dXJuIGUuZnJhbWVTaXplID09PSBjaGVjaztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmRlbGV0ZUV4dHJhY3RvciA9IGZ1bmN0aW9uIChmcmFtZVNpemUpIHt9O1xuICAgIH07XG4gICAgdmFyIG91dHB1dE5vZGVzID0gW107XG4gICAgdGhpcy51cGRhdGVGZWF0dXJlcyA9IGZ1bmN0aW9uIChmZWF0dXJlT2JqZWN0KSB7XG4gICAgICAgIC8vIFtdIE91dHB1dCAtPiB7fSAnZnJhbWVzaXplJyAtPiB7fSAnZmVhdHVyZXMnXG4gICAgICAgIHZhciBvO1xuICAgICAgICBmb3IgKG8gPSAwOyBvIDwgZmVhdHVyZU9iamVjdC5sZW5ndGg7IG8rKykge1xuICAgICAgICAgICAgaWYgKG91dHB1dE5vZGVzW29dID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBpZiAobyA+IEZlYXR1cmVJbnRlcmZhY2VJbnN0YW5jZS5wbHVnaW4ubnVtT3V0cHV0cykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyAoXCJSZXF1ZXN0ZWQgYW4gb3V0cHV0IHRoYXQgZG9lcyBub3QgZXhpc3RcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG91dHB1dE5vZGVzW29dID0gbmV3IE91dHB1dE5vZGUoRmVhdHVyZUludGVyZmFjZUluc3RhbmNlLnBsdWdpbiwgRmVhdHVyZUludGVyZmFjZUluc3RhbmNlLnBsdWdpbi5vdXRwdXRzW29dLCBvKTtcbiAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob3V0cHV0Tm9kZXNbb10sIFwicG9zdEZlYXR1cmVzXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgJ3ZhbHVlJzogZnVuY3Rpb24gKHJlc3VsdE9iamVjdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3N0RmVhdHVyZXMocmVzdWx0T2JqZWN0KTtcbiAgICAgICAgICAgICAgICAgICAgfS5iaW5kKHRoaXMpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgc2k7XG4gICAgICAgICAgICBmb3IgKHNpID0gMDsgc2kgPCBmZWF0dXJlT2JqZWN0W29dLmxlbmd0aDsgc2krKykge1xuICAgICAgICAgICAgICAgIHZhciBleHRyYWN0b3IgPSBvdXRwdXROb2Rlc1tvXS5maW5kRXh0cmFjdG9yKGZlYXR1cmVPYmplY3Rbb11bc2ldLmZyYW1lU2l6ZSk7XG4gICAgICAgICAgICAgICAgaWYgKCFleHRyYWN0b3IpIHtcbiAgICAgICAgICAgICAgICAgICAgZXh0cmFjdG9yID0gb3V0cHV0Tm9kZXNbb10uYWRkRXh0cmFjdG9yKGZlYXR1cmVPYmplY3Rbb11bc2ldLmZyYW1lU2l6ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGV4dHJhY3Rvci5zZXRGZWF0dXJlcyhmZWF0dXJlT2JqZWN0W29dW3NpXS5mZWF0dXJlTGlzdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgdGhpcy5wb3N0RmVhdHVyZXMgPSBmdW5jdGlvbiAoZmVhdHVyZU9iamVjdCkge1xuICAgICAgICAvKlxuICAgICAgICAgICAgQ2FsbGVkIGJ5IHRoZSBpbmRpdmlkdWFsIGV4dHJhY3RvciBpbnN0YW5jZXM6XG4gICAgICAgICAgICBmZWF0dXJlT2JqZWN0ID0geydmcmFtZVNpemUnOiBmcmFtZVNpemUsXG4gICAgICAgICAgICAnb3V0cHV0SW5kZXgnOiBvdXRwdXRJbmRleCxcbiAgICAgICAgICAgICdyZXN1bHRzJzpbXX1cbiAgICAgICAgKi9cbiAgICAgICAgRmVhdHVyZUludGVyZmFjZUluc3RhbmNlLnBsdWdpbi5mYWN0b3J5LkZlYXR1cmVNYXAucG9zdEZlYXR1cmVzKHtcbiAgICAgICAgICAgICdwbHVnaW4nOiBGZWF0dXJlSW50ZXJmYWNlSW5zdGFuY2UucGx1Z2luLnBsdWdpbkluc3RhbmNlLFxuICAgICAgICAgICAgJ291dHB1dEluZGV4JzogZmVhdHVyZU9iamVjdC5vdXRwdXRJbmRleCxcbiAgICAgICAgICAgICdmcmFtZVNpemUnOiBmZWF0dXJlT2JqZWN0LmZyYW1lU2l6ZSxcbiAgICAgICAgICAgICdyZXN1bHRzJzogZmVhdHVyZU9iamVjdC5yZXN1bHRzXG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvLyBTZW5kIHRvIEZhY3RvcnlcbiAgICBGYWN0b3J5RmVhdHVyZU1hcC5jcmVhdGVTb3VyY2VNYXAodGhpcywgRmVhdHVyZUludGVyZmFjZUluc3RhbmNlLnBsdWdpbi5wbHVnaW5JbnN0YW5jZSk7XG59O1xuXG4vKlxuICAgIFRoaXMgaXMgYW4gb3B0aW9uYWwgbW9kdWxlIHdoaWNoIHdpbGwgYXR0ZW1wdCB0byBjcmVhdGUgYSBncmFwaGljYWwgaW1wbGVtZW50YXRpb24uXG4gICAgQXMgd2l0aCBvdGhlciBhdWRpbyBwbHVnaW5zIGZvciBEQVdzLCB0aGUgR1VJIGlzIGFuIG9wdGlvbmFsIGVsZW1lbnQgd2hpY2ggY2FuIGJlIGFjY2VwdGVkIG9yIHJlamVjdGVkIGJ5IHRoZSBob3N0LlxuXG4gICAgVGhlIGFjdHVhbCBHVUkgaXMgbGF1bmNoZWQgYXMgYW4gPGlmcmFtZT4gZWxlbWVudCBpbiB0aGUgYnJvd3NlciB0byBrZWVwIGVhY2ggcGx1Z2luIGlzb2xhdGVkIGZyb20gdGhlIHJlc3RcbiovXG5cbnZhciBQbHVnaW5Vc2VySW50ZXJmYWNlID0gZnVuY3Rpb24gKEJhc2VQbHVnaW5JbnN0YW5jZSwgd2lkdGgsIGhlaWdodCkge1xuICAgIGNvbnNvbGUubG9nKFwiREVQUkVDQVRFRCEhXCIpO1xuICAgIGNvbnNvbGUubG9nKFwiVGhlIGNsYXNzIFBsdWdpblVzZXJJbnRlcmZhY2UgaGFzIGJlZW4gZGVwcmVjYXRlZFwiKTtcbiAgICBjb25zb2xlLmxvZyhcIlBsZWFzZSBsb29rIGF0IHRoZSBkb2N1bWVudHMgZm9yIHRoZSBuZXcgbWV0aG9kcyBmb3IgYnVpbGRpbmcgcGx1Z2luc1wiKTtcbiAgICB0aGlzLnByb2Nlc3NvciA9IEJhc2VQbHVnaW5JbnN0YW5jZTtcbiAgICB0aGlzLnJvb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGlmICh3aWR0aCA+IDApIHtcbiAgICAgICAgdGhpcy5yb290LnN0eWxlLndpZHRoID0gd2lkdGggKyBcInB4XCI7XG4gICAgfVxuICAgIGlmIChoZWlnaHQgPiAwKSB7XG4gICAgICAgIHRoaXMucm9vdC5zdHlsZS5oZWlnaHQgPSBoZWlnaHQgKyBcInB4XCI7XG4gICAgfVxuICAgIHRoaXMuZGltID0ge1xuICAgICAgICB3aWR0aDogd2lkdGgsXG4gICAgICAgIGhlaWdodDogaGVpZ2h0XG4gICAgfTtcbiAgICB0aGlzLmludGVydmFsRnVuY3Rpb24gPSBudWxsO1xuICAgIHRoaXMudXBkYXRlSW50ZXJ2YWwgPSBudWxsO1xuICAgIHRoaXMuUGx1Z2luUGFyYW1ldGVySW50ZXJmYWNlcyA9IFtdO1xuXG4gICAgdmFyIFBsdWdpblBhcmFtZXRlckludGVyZmFjZU5vZGUgPSBmdW5jdGlvbiAoRE9NLCBQbHVnaW5QYXJhbWV0ZXJJbnN0YW5jZSwgcHJvY2Vzc29yLCBndWkpIHtcbiAgICAgICAgdGhpcy5pbnB1dCA9IERPTTtcbiAgICAgICAgdGhpcy5wcm9jZXNzb3IgPSBwcm9jZXNzb3I7XG4gICAgICAgIHRoaXMuR1VJID0gZ3VpO1xuICAgICAgICB0aGlzLkF1ZGlvUGFyYW0gPSBQbHVnaW5QYXJhbWV0ZXJJbnN0YW5jZTtcbiAgICAgICAgdGhpcy5oYW5kbGVFdmVudCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgdGhpcy5BdWRpb1BhcmFtLnZhbHVlID0gdGhpcy5pbnB1dC52YWx1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5pbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIHRoaXMpO1xuICAgICAgICB0aGlzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgdGhpcyk7XG4gICAgICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMpO1xuICAgIH07XG5cbiAgICB0aGlzLmNyZWF0ZVBsdWdpblBhcmFtZXRlckludGVyZmFjZU5vZGUgPSBmdW5jdGlvbiAoRE9NLCBQbHVnaW5QYXJhbWV0ZXJJbnN0YW5jZSkge1xuICAgICAgICB2YXIgbm9kZSA9IG5ldyBQbHVnaW5QYXJhbWV0ZXJJbnRlcmZhY2VOb2RlKERPTSwgUGx1Z2luUGFyYW1ldGVySW5zdGFuY2UsIHRoaXMucHJvY2Vzc29yLCB0aGlzKTtcbiAgICAgICAgdGhpcy5QbHVnaW5QYXJhbWV0ZXJJbnRlcmZhY2VzLnB1c2gobm9kZSk7XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH07XG5cbiAgICB0aGlzLnVwZGF0ZSA9IGZ1bmN0aW9uICgpIHt9O1xuXG59O1xuXG5QbHVnaW5Vc2VySW50ZXJmYWNlLnByb3RvdHlwZS5nZXRSb290ID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLnJvb3Q7XG59O1xuUGx1Z2luVXNlckludGVyZmFjZS5wcm90b3R5cGUuZ2V0RGltZW5zaW9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5kaW07XG59O1xuUGx1Z2luVXNlckludGVyZmFjZS5wcm90b3R5cGUuZ2V0V2lkdGggPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGltLndpZHRoO1xufTtcblBsdWdpblVzZXJJbnRlcmZhY2UucHJvdG90eXBlLmdldEhlaWdodCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5kaW0uaGVpZ2h0O1xufTtcblBsdWdpblVzZXJJbnRlcmZhY2UucHJvdG90eXBlLmJlZ2luQ2FsbGJhY2tzID0gZnVuY3Rpb24gKG1zKSB7XG4gICAgLy8gQW55IHJlZ2lzdGVyZWQgY2FsbGJhY2tzIGFyZSBzdGFydGVkIGJ5IHRoZSBob3N0XG4gICAgaWYgKG1zID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgbXMgPSAyNTA7XG4gICAgfSAvL0RlZmF1bHQgb2YgMjUwbXMgdXBkYXRlIHBlcmlvZFxuICAgIGlmICh0aGlzLmludGVydmFsRnVuY3Rpb24gPT09IG51bGwpIHtcbiAgICAgICAgdGhpcy51cGRhdGVJbnRlcnZhbCA9IG1zO1xuICAgICAgICB0aGlzLmludGVydmFsRnVuY3Rpb24gPSB3aW5kb3cuc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICAgICAgfS5iaW5kKHRoaXMpLCAyNTApO1xuICAgIH1cbn07XG5QbHVnaW5Vc2VySW50ZXJmYWNlLnByb3RvdHlwZS5zdG9wQ2FsbGJhY2tzID0gZnVuY3Rpb24gKCkge1xuICAgIC8vIEFueSByZWdpc3RlcmVkIGNhbGxiYWNrcyBhcmUgc3RvcHBlZCBieSB0aGUgaG9zdFxuICAgIGlmICh0aGlzLmludGVydmFsRnVuY3Rpb24gIT09IG51bGwpIHtcbiAgICAgICAgd2luZG93LmNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbEZ1bmN0aW9uKTtcbiAgICAgICAgdGhpcy51cGRhdGVJbnRlcnZhbCA9IG51bGw7XG4gICAgICAgIHRoaXMuaW50ZXJ2YWxGdW5jdGlvbiA9IG51bGw7XG4gICAgfVxufTtcblBsdWdpblVzZXJJbnRlcmZhY2UucHJvdG90eXBlLmxvYWRSZXNvdXJjZSA9IGZ1bmN0aW9uICh1cmwpIHtcbiAgICB2YXIgcCA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgdmFyIHJlcSA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICByZXEub3BlbignR0VUJywgdXJsKTtcbiAgICAgICAgcmVxLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChyZXEuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHJlcS5yZXNwb25zZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlamVjdChFcnJvcihyZXEuc3RhdHVzVGV4dCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICByZXEub25lcnJvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJlamVjdChFcnJvcihcIk5ldHdvcmsgRXJyb3JcIikpO1xuICAgICAgICB9O1xuICAgICAgICByZXEuc2VuZCgpO1xuICAgIH0pO1xuICAgIHJldHVybiBwO1xufTtcblBsdWdpblVzZXJJbnRlcmZhY2UucHJvdG90eXBlLmNsZWFyR1VJID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuc3RvcENhbGxiYWNrcygpO1xuICAgIHRoaXMucm9vdC5pbm5lckhUTUwgPSBcIlwiO1xufTtcblxudmFyIFBsdWdpbkludGVyZmFjZU1lc3NhZ2VIdWIgPSBmdW5jdGlvbihvd25lcikge1xuICAgIGZ1bmN0aW9uIGJ1aWxkUGx1Z2luUGFyYW1ldGVySlNPTihwbHVnaW4sIHNvdXJjZXMpIHtcbiAgICAgICAgdmFyIG5hbWVzID0gb3duZXIucGFyYW1ldGVycy5nZXRQYXJhbWV0ZXJOYW1lcygpO1xuICAgICAgICB2YXIgTyA9IHt9O1xuICAgICAgICBpZiAoc291cmNlcyA9PT0gdW5kZWZpbmVkIHx8IHNvdXJjZXMubGVuZ3RoID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgc291cmNlcyA9IG5hbWVzO1xuICAgICAgICB9XG4gICAgICAgIG5hbWVzLmZpbHRlcihmdW5jdGlvbihuYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbmNsdWRlcyhuYW1lKTtcbiAgICAgICAgfSwgc291cmNlcykuZm9yRWFjaChmdW5jdGlvbihuYW1lKSB7XG4gICAgICAgICAgICB2YXIgcGFyYW0gPSBvd25lci5wYXJhbWV0ZXJzLmdldFBhcmFtZXRlckJ5TmFtZShuYW1lKTtcbiAgICAgICAgICAgIE9bbmFtZV0gPSB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IHBhcmFtLnZhbHVlLFxuICAgICAgICAgICAgICAgIG1heGltdW06IHBhcmFtLm1heGltdW0sXG4gICAgICAgICAgICAgICAgbWluaW11bTogcGFyYW0ubWluaW11bSxcbiAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU6IHBhcmFtLmRlZmF1bHRWYWx1ZSxcbiAgICAgICAgICAgICAgICB0eXBlOiBwYXJhbS5jb25zdHJ1Y3Rvci5uYW1lLFxuICAgICAgICAgICAgICAgIG5hbWU6IG5hbWVcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAocGFyYW0uYXV0b21hdGlvbikge1xuICAgICAgICAgICAgICAgIE9bbmFtZV0uYXV0b21hdGVkID0gcGFyYW0uYXV0b21hdGlvbi5lbmFibGVkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIE87XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYnVpbGRQYXJhbWV0ZXJVcGRhdGVQYXlsb2FkKHNlbmRlcl9pZCwgc291cmNlcykge1xuICAgICAgICB2YXIgbXNnID0ge1xuICAgICAgICAgICAgbWVzc2FnZTogXCJ1cGRhdGVQYXJhbWV0ZXJzXCIsXG4gICAgICAgICAgICBwYXJhbWV0ZXJzOiBidWlsZFBsdWdpblBhcmFtZXRlckpTT04ob3duZXIsIHNvdXJjZXMpXG4gICAgICAgIH07XG4gICAgICAgIGlmIChzZW5kZXJfaWQpIHtcbiAgICAgICAgICAgIG1zZy5zZW5kZXJfaWQgPSBzZW5kZXJfaWQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1zZztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZW5kUGFyYW1ldGVyVXBkYXRlcyhjaGFubmVsLCBzb3VyY2VzKSB7XG4gICAgICAgIGNoYW5uZWwucG9zdE1lc3NhZ2UoYnVpbGRQYXJhbWV0ZXJVcGRhdGVQYXlsb2FkKHVuZGVmaW5lZCwgc291cmNlcyksIGxvY2F0aW9uLm9yaWdpbik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYnJvYWRjYXN0UGFyYW1ldGVyVXBkYXRlcyhzZW5kZXJfaWQsIHNvdXJjZXMpIHtcbiAgICAgICAgdmFyIG1zZyA9IGJ1aWxkUGFyYW1ldGVyVXBkYXRlUGF5bG9hZChzZW5kZXJfaWQsIHNvdXJjZXMpO1xuICAgICAgICB3aW5kb3dNZXNzYWdlTGlzdC5mb3JFYWNoKGZ1bmN0aW9uKHcpIHtcbiAgICAgICAgICAgIHcucG9zdE1lc3NhZ2UobXNnLCBsb2NhdGlvbi5vcmlnaW4pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRQYXJhbWV0ZXJNZXNzYWdlKGUpIHtcbiAgICAgICAgdmFyIHVwZGF0ZU9iamVjdHMgPSBbXTtcbiAgICAgICAgdmFyIHBhcmFtZXRlcnMgPSBKU09OLnBhcnNlKGUubWVzc2FnZS5wYXJhbWV0ZXJzKTtcbiAgICAgICAgT2JqZWN0LmtleXMocGFyYW1ldGVycykuZm9yRWFjaChmdW5jdGlvbihuYW1lKSB7XG4gICAgICAgICAgICB2YXIgcGFyYW1ldGVyT2JqZWN0ID0gb3duZXIucGFyYW1ldGVycy5nZXRQYXJhbWV0ZXJCeU5hbWUobmFtZSk7XG4gICAgICAgICAgICBpZiAocGFyYW1ldGVyT2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgcGFyYW1ldGVyT2JqZWN0LnNldFZhbHVlKHBhcmFtZXRlcnNbbmFtZV0udmFsdWUsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICB1cGRhdGVPYmplY3RzLnB1c2gobmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdXBkYXRlT2JqZWN0cztcbiAgICB9XG5cbiAgICB2YXIgd2luZG93TWVzc2FnZUxpc3QgPSBbXTtcbiAgICB2YXIgbGlzdGVuZXI7XG4gICAgdmFyIHN0YXRlID0gMDtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIixmdW5jdGlvbihlKSB7XG4gICAgICAgIGlmICghd2luZG93TWVzc2FnZUxpc3QuaW5jbHVkZXMoZS5zb3VyY2UpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgc3dpdGNoKGUuZGF0YS5tZXNzYWdlKSB7XG4gICAgICAgICAgICBjYXNlIFwic2V0UGFyYW1ldGVyQnlOYW1lXCI6XG4gICAgICAgICAgICB2YXIgcGFyYW1ldGVyT2JqZWN0O1xuICAgICAgICAgICAgICAgIGlmIChlLmRhdGEucGFyYW1ldGVyLm5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1ldGVyT2JqZWN0ID0gb3duZXIucGFyYW1ldGVycy5nZXRQYXJhbWV0ZXJCeU5hbWUoZS5kYXRhLnBhcmFtZXRlci5uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBhcmFtZXRlck9iamVjdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1ldGVyT2JqZWN0LnNldFZhbHVlKGUuZGF0YS5wYXJhbWV0ZXIudmFsdWUsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyb2FkY2FzdFBhcmFtZXRlclVwZGF0ZXMoZS5kYXRhLnNlbmRlcl9pZCwgW3BhcmFtZXRlck9iamVjdC5uYW1lXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwic2V0UGFyYW1ldGVyc0J5T2JqZWN0XCI6XG4gICAgICAgICAgICAgICAgaWYgKGUuZGF0YS5wYXJhbWV0ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHVwZGF0ZU9iamVjdHMgPSBzZXRQYXJhbWV0ZXJNZXNzYWdlKGUpO1xuICAgICAgICAgICAgICAgICAgICBicm9hZGNhc3RQYXJhbWV0ZXJVcGRhdGVzKGUuZGF0YS5zZW5kZXJfaWQsIHVwZGF0ZU9iamVjdHMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJyZXF1ZXN0UGFyYW1ldGVyc1wiOlxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZS5kYXRhLm5hbWUgPT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgICAgICBzZW5kUGFyYW1ldGVyVXBkYXRlcyhlLnNvdXJjZSwgZS5kYXRhLm5hbWUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbmRQYXJhbWV0ZXJVcGRhdGVzKGUuc291cmNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRocm93KFwiVW5rbm93biBtZXNzYWdlIHR5cGUgXFxcIlwiK2UuZGF0YS5tZXNzYWdlK1wiXFxcIlwiKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgICBcInVwZGF0ZUludGVyZmFjZXNcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbihhdXRvbWF0aW9uT25seSkge1xuICAgICAgICAgICAgICAgIGlmIChhdXRvbWF0aW9uT25seSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGF1dG9tYXRpb25Pbmx5ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBzb3VyY2VzO1xuICAgICAgICAgICAgICAgIGlmIChhdXRvbWF0aW9uT25seSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcGFyYW1ldGVyTmFtZXMgPSBvd25lci5wYXJhbWV0ZXJzLmdldFBhcmFtZXRlck5hbWVzKCk7XG4gICAgICAgICAgICAgICAgICAgIHNvdXJjZXMgPSBwYXJhbWV0ZXJOYW1lcy5maWx0ZXIoZnVuY3Rpb24obmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBhcmFtID0gb3duZXIucGFyYW1ldGVycy5nZXRQYXJhbWV0ZXJCeU5hbWUobmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKHBhcmFtLmF1dG9tYXRpb24gJiYgcGFyYW0uYXV0b21hdGlvbi5lbmFibGVkID09PSB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzb3VyY2VzLmxlbmd0aCA+IDApXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyb2FkY2FzdFBhcmFtZXRlclVwZGF0ZXModW5kZWZpbmVkLCBzb3VyY2VzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGJyb2FkY2FzdFBhcmFtZXRlclVwZGF0ZXMoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJjbG9zZVdpbmRvd3NcIjoge1xuICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGlmIChzdGF0ZSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICB3aGlsZSh3aW5kb3dNZXNzYWdlTGlzdC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdyA9IHdpbmRvd01lc3NhZ2VMaXN0LnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdy5jbG9zZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3coXCJDYW5uZWwgYWxyZWFkeSBjbG9zZWRcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInJlZ2lzdGVyV2luZG93XCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24odykge1xuICAgICAgICAgICAgICAgIGlmICh3aW5kb3dNZXNzYWdlTGlzdC5pbmNsdWRlcyh3KSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93TWVzc2FnZUxpc3QucHVzaCh3KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59O1xuXG5leHBvcnQge0Jhc2VQbHVnaW59O1xuIiwiaW1wb3J0IHtCYXNlUGx1Z2luLCBTeW50aGVzaXNlckJhc2VQbHVnaW4sIFBsdWdpbkZhY3Rvcnl9IGZyb20gXCIuL3BsdWdpbi1mYWN0b3J5XCI7XG5cbihmdW5jdGlvbihyb290LCBmYWN0b3J5KSB7XG4gICAgY29uc29sZS5sb2coXCJMb2FkIEpTQVAuLi5cIik7XG4gICAgaWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZGVmaW5lXCIpO1xuICAgICAgICBkZWZpbmUoXCJKU0FQXCIsIFtdLCBmYWN0b3J5KTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBtb2R1bGUgPT0gXCJvYmplY3RcIiAmJiBtb2R1bGUuZXhwb3J0cykge1xuICAgICAgICBjb25zb2xlLmxvZyhcIm1vZHVsZVwiKTtcbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJkaXJlY3RcIik7XG4gICAgICAgIGlmIChyb290ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJvb3QgPSB3aW5kb3c7XG4gICAgICAgIH1cbiAgICAgICAgcm9vdC5KU0FQID0gZmFjdG9yeSgpO1xuICAgIH1cbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xuICAgIGNvbnNvbGUubG9nKFwiZmFjdG9yeVwiKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBQbHVnaW5GYWN0b3J5OiBQbHVnaW5GYWN0b3J5LFxuICAgICAgICBCYXNlUGx1Z2luOiBCYXNlUGx1Z2luLFxuICAgICAgICBTeW50aGVzaXNlckJhc2VQbHVnaW46IFN5bnRoZXNpc2VyQmFzZVBsdWdpblxuICAgIH07XG59KTtcbiIsIi8qIGpzaGludCBlc3ZlcnNpb246IDYgKi9cbmltcG9ydCB7TnVtYmVyUGFyYW1ldGVyfSBmcm9tIFwiLi9wYXJhbWV0ZXJzL051bWJlclBhcmFtZXRlci5qc1wiO1xuaW1wb3J0IHtTdHJpbmdQYXJhbWV0ZXJ9IGZyb20gXCIuL3BhcmFtZXRlcnMvU3RyaW5nUGFyYW1ldGVyLmpzXCI7XG5pbXBvcnQge0J1dHRvblBhcmFtZXRlcn0gZnJvbSBcIi4vcGFyYW1ldGVycy9CdXR0b25QYXJhbWV0ZXIuanNcIjtcbmltcG9ydCB7U3dpdGNoUGFyYW1ldGVyfSBmcm9tIFwiLi9wYXJhbWV0ZXJzL1N3aXRjaFBhcmFtZXRlci5qc1wiO1xuaW1wb3J0IHtMaXN0UGFyYW1ldGVyfSBmcm9tIFwiLi9wYXJhbWV0ZXJzL0xpc3RQYXJhbWV0ZXIuanNcIjtcblxudmFyIFBhcmFtZXRlck1hbmFnZXIgPSBmdW5jdGlvbiAob3duZXIsIHBsdWdpbkV4dGVybmFsSW50ZXJmYWNlKSB7XG4gICAgdmFyIHBhcmFtZXRlckxpc3QgPSBbXTtcbiAgICB2YXIgZXZlbnRUYXJnZXQgPSBuZXcgRXZlbnRUYXJnZXQoKTtcblxuICAgIGZ1bmN0aW9uIGZpbmRQYXJhbWV0ZXIobmFtZSkge1xuICAgICAgICByZXR1cm4gcGFyYW1ldGVyTGlzdC5maW5kKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICByZXR1cm4gZS5uYW1lLnRvTG93ZXJDYXNlKCkgPT09IG5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZmluZFBhcmFtZXRlckluZGV4KG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHBhcmFtZXRlckxpc3QuZmluZEluZGV4KGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICByZXR1cm4gZS5uYW1lLnRvTG93ZXJDYXNlKCkgPT09IG5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYnVpbGRQYXJhbWV0ZXJPYmplY3QoKSB7XG4gICAgICAgIHZhciBvYmogPSB7fTtcbiAgICAgICAgcGFyYW1ldGVyTGlzdC5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBvYmpbZS5uYW1lXSA9IGU7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gb2JqO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFkZFBhcmFtZXRlcihwYXJhbSwgc2VsZikge1xuICAgICAgICB2YXIgZXhpc3RzID0gcGFyYW1ldGVyTGlzdC5maW5kSW5kZXgoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHJldHVybiBlID09PSBwYXJhbTtcbiAgICAgICAgfSwgcGFyYW0pO1xuICAgICAgICBpZiAoZXhpc3RzID09PSAtMSkge1xuICAgICAgICAgICAgcGFyYW0uYWRkRXZlbnRMaXN0ZW5lcihcInBhcmFtZXRlcnNldFwiLCBzZWxmKTtcbiAgICAgICAgICAgIHBhcmFtZXRlckxpc3QucHVzaChwYXJhbSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBhcmFtO1xuICAgIH1cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgICAgXCJhZGRFdmVudExpc3RlbmVyXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24odHlwZSwgbGlzdGVuZXIsIG9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZXZlbnRUYXJnZXQuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lciwgb3B0aW9ucyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwicmVtb3ZlRXZlbnRMaXN0ZW5lclwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKHR5cGUsIGxpc3RlbmVyLCBvcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGV2ZW50VGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXIsIG9wdGlvbnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImhhbmRsZUV2ZW50XCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgIHZhciBkZXRhaWwgPSBlLmRldGFpbDtcbiAgICAgICAgICAgICAgICBpZiAoZGV0YWlsLnVwZGF0ZUludGVyZmFjZXMgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHBsdWdpbkV4dGVybmFsSW50ZXJmYWNlLnVwZGF0ZUludGVyZmFjZXMoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGUudHlwZSA9PSBcInBhcmFtZXRlcnNldFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50VGFyZ2V0LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwicGFyYW1ldGVyc2V0XCIsIHtkZXRhaWw6IGRldGFpbC5wYXJhbWV0ZXJ9KSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAnY3JlYXRlTnVtYmVyUGFyYW1ldGVyJzoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAobmFtZSwgZGVmYXVsdFZhbHVlLCBtaW5pbXVtLCBtYXhpbXVtKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBuYW1lICE9PSBcInN0cmluZ1wiIHx8IHR5cGVvZiBkZWZhdWx0VmFsdWUgIT09IFwibnVtYmVyXCIgfHwgKG1pbmltdW0gIT09IHVuZGVmaW5lZCAmJiB0eXBlb2YgbWluaW11bSAhPT0gXCJudW1iZXJcIikgfHwgKG1heGltdW0gIT09IHVuZGVmaW5lZCAmJiB0eXBlb2YgbWF4aW11bSAhPT0gXCJudW1iZXJcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgKFwiSW52bGlkIGNvbnN0cnVjdG9yXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZmluZFBhcmFtZXRlckluZGV4KG5hbWUpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyAoXCJQYXJhbWV0ZXIgd2l0aCBuYW1lICdcIiArIG5hbWUgKyBcIicgYWxyZWFkeSBleGlzdHNcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBwYXJhbSA9IG5ldyBOdW1iZXJQYXJhbWV0ZXIob3duZXIsIG5hbWUsIGRlZmF1bHRWYWx1ZSwgbWluaW11bSwgbWF4aW11bSk7XG4gICAgICAgICAgICAgICAgYWRkUGFyYW1ldGVyKHBhcmFtLCB0aGlzKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcGFyYW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgICdjcmVhdGVTdHJpbmdQYXJhbWV0ZXInOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uIChuYW1lLCBkZWZhdWx0VmFsdWUsIG1heExlbmd0aCkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbmFtZSAhPT0gXCJzdHJpbmdcIiB8fCB0eXBlb2YgZGVmYXVsdFZhbHVlICE9PSBcInN0cmluZ1wiIHx8IChtYXhMZW5ndGggIT09IHVuZGVmaW5lZCAmJiB0eXBlb2YgbWF4TGVuZ3RoICE9PSBcIm51bWJlclwiKSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyAoXCJJbnZsaWQgY29uc3RydWN0b3JcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChmaW5kUGFyYW1ldGVySW5kZXgobmFtZSkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IChcIlBhcmFtZXRlciB3aXRoIG5hbWUgJ1wiICsgbmFtZSArIFwiJyBhbHJlYWR5IGV4aXN0c1wiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIHBhcmFtID0gbmV3IFN0cmluZ1BhcmFtZXRlcihvd25lciwgbmFtZSwgZGVmYXVsdFZhbHVlLCBtYXhMZW5ndGgpO1xuICAgICAgICAgICAgICAgIGFkZFBhcmFtZXRlcihwYXJhbSwgdGhpcyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhcmFtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAnY3JlYXRlQnV0dG9uUGFyYW1ldGVyJzoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbmFtZSAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyAoXCJJbnZhbGlkIGNvbnN0cnVjdG9yXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZmluZFBhcmFtZXRlckluZGV4KG5hbWUpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyAoXCJQYXJhbWV0ZXIgd2l0aCBuYW1lICdcIiArIG5hbWUgKyBcIicgYWxyZWFkeSBleGlzdHNcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBwYXJhbSA9IG5ldyBCdXR0b25QYXJhbWV0ZXIob3duZXIsIG5hbWUpO1xuICAgICAgICAgICAgICAgIGFkZFBhcmFtZXRlcihwYXJhbSwgdGhpcyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhcmFtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAnY3JlYXRlU3dpdGNoUGFyYW1ldGVyJzoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAobmFtZSwgZGVmYXVsdFZhbHVlLCBtaW5TdGF0ZSwgbWF4U3RhdGUpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG5hbWUgIT09IFwic3RyaW5nXCIgfHwgdHlwZW9mIGRlZmF1bHRWYWx1ZSAhPT0gXCJudW1iZXJcIiB8fCB0eXBlb2YgbWluU3RhdGUgIT09IFwibnVtYmVyXCIgfHwgdHlwZW9mIG1heFN0YXRlICE9PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IChcIkludmxpZCBjb25zdHJ1Y3RvclwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGZpbmRQYXJhbWV0ZXJJbmRleChuYW1lKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgKFwiUGFyYW1ldGVyIHdpdGggbmFtZSAnXCIgKyBuYW1lICsgXCInIGFscmVhZHkgZXhpc3RzXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgcGFyYW0gPSBuZXcgU3dpdGNoUGFyYW1ldGVyKG93bmVyLCBuYW1lLCBkZWZhdWx0VmFsdWUsIG1pblN0YXRlLCBtYXhTdGF0ZSk7XG4gICAgICAgICAgICAgICAgYWRkUGFyYW1ldGVyKHBhcmFtLCB0aGlzKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcGFyYW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgICdjcmVhdGVMaXN0UGFyYW1ldGVyJzoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAobmFtZSwgZGVmYXVsdFZhbHVlLCBsaXN0T2ZWYWx1ZXMpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG5hbWUgIT09IFwic3RyaW5nXCIgfHwgdHlwZW9mIGRlZmF1bHRWYWx1ZSA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhQXJyYXkuaXNBcnJheShsaXN0T2ZWYWx1ZXMpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IChcIkludmxpZCBjb25zdHJ1Y3RvclwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGxpc3RPZlZhbHVlcy5pbmNsdWRlcyhkZWZhdWx0VmFsdWUpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICBocm93IChcIkludmxpZCBjb25zdHJ1Y3RvciAtIGRlZmF1bHQgdmFsdWUgbWlzc2luZ1wiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGZpbmRQYXJhbWV0ZXJJbmRleChuYW1lKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgKFwiUGFyYW1ldGVyIHdpdGggbmFtZSAnXCIgKyBuYW1lICsgXCInIGFscmVhZHkgZXhpc3RzXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgcGFyYW0gPSBuZXcgTGlzdFBhcmFtZXRlcihvd25lciwgbmFtZSwgZGVmYXVsdFZhbHVlLCBsaXN0T2ZWYWx1ZXMpO1xuICAgICAgICAgICAgICAgIGFkZFBhcmFtZXRlcihwYXJhbSwgdGhpcyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhcmFtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAnY3JlYXRlUGFyYW1ldGVyJzoge1xuICAgICAgICAgICAgJ3ZhbHVlJzogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHRocm93IChcIlRoaXMgZnVuY3Rpb24gaXMgbm93IGRlcHJlY2F0ZWRcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgICdnZXRQYXJhbWV0ZXJOYW1lJzoge1xuICAgICAgICAgICAgJ3ZhbHVlJzogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciBuYW1lcyA9IFtdLFxuICAgICAgICAgICAgICAgICAgICBpO1xuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBwYXJhbWV0ZXJMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWVzLnB1c2gocGFyYW1ldGVyTGlzdFtpXS5uYW1lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5hbWVzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAnZ2V0UGFyYW1ldGVyQnlOYW1lJzoge1xuICAgICAgICAgICAgJ3ZhbHVlJzogZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmluZFBhcmFtZXRlcihuYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgJ2dldFBhcmFtZXRlck9iamVjdCc6IHtcbiAgICAgICAgICAgICd2YWx1ZSc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYnVpbGRQYXJhbWV0ZXJPYmplY3QoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgJ2dldFBhcmFtZXRlck5hbWVzJzoge1xuICAgICAgICAgICAgJ3ZhbHVlJzogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciBsID0gW107XG4gICAgICAgICAgICAgICAgcGFyYW1ldGVyTGlzdC5mb3JFYWNoKGZ1bmN0aW9uIChhKSB7XG4gICAgICAgICAgICAgICAgICAgIGwucHVzaChhLm5hbWUpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAnc2V0UGFyYW1ldGVyQnlOYW1lJzoge1xuICAgICAgICAgICAgJ3ZhbHVlJzogZnVuY3Rpb24gKG4sIHYsIHVwZGF0ZUludGVyZmFjZXMpIHtcbiAgICAgICAgICAgICAgICB2YXIgcGFyYW1ldGVyID0gZmluZFBhcmFtZXRlcihuKTtcbiAgICAgICAgICAgICAgICBpZiAoIXBhcmFtZXRlcikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBhcmFtZXRlci5zZXRWYWx1ZSh2LCB1cGRhdGVJbnRlcmZhY2VzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgJ2RlbGV0ZVBhcmFtZXRlcic6IHtcbiAgICAgICAgICAgICd2YWx1ZSc6IGZ1bmN0aW9uIChvKSB7XG4gICAgICAgICAgICAgICAgdmFyIGluZGV4ID0gcGFyYW1ldGVyTGlzdC5maW5kSW5kZXgoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGUgPT09IG87XG4gICAgICAgICAgICAgICAgfSwgbyk7XG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gRG9lcyBleGlzdFxuICAgICAgICAgICAgICAgICAgICBwYXJhbWV0ZXJMaXN0LnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgICAgIG8uZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAnZGVsZXRlQWxsUGFyYW1ldGVycyc6IHtcbiAgICAgICAgICAgICd2YWx1ZSc6IGZ1bmN0aW9uIChvKSB7XG4gICAgICAgICAgICAgICAgcGFyYW1ldGVyTGlzdC5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIGUuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHBhcmFtZXRlckxpc3QgPSBbXTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgJ3NldFBhcmFtZXRlcnNCeU9iamVjdCc6IHtcbiAgICAgICAgICAgICd2YWx1ZSc6IGZ1bmN0aW9uIChvYmplY3QsIHVwZGF0ZUludGVyZmFjZXMpIHtcbiAgICAgICAgICAgICAgICB2YXIga2V5O1xuICAgICAgICAgICAgICAgIGZvciAoa2V5IGluIG9iamVjdCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAob2JqZWN0Lmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygb2JqZWN0W2tleV0gPT0gXCJvYmplY3RcIikge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRQYXJhbWV0ZXJCeU5hbWUoa2V5LCBvYmplY3Rba2V5XS52YWx1ZSwgdXBkYXRlSW50ZXJmYWNlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBvYmplY3Rba2V5XSA9PSBcIm51bWJlclwiIHx8IHR5cGVvZiBvYmplY3Rba2V5XSA9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRQYXJhbWV0ZXJCeU5hbWUoa2V5LCBvYmplY3Rba2V5XSwgdXBkYXRlSW50ZXJmYWNlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IChcIkNhbm5vdCBzZXQgXCIgKyBrZXkgKyBcIjogTm90IGEgdmFsaWQgb2JqZWN0XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAncGFyYW1ldGVycyc6IHtcbiAgICAgICAgICAgICdnZXQnOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGJ1aWxkUGFyYW1ldGVyT2JqZWN0KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ3NldCc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyAoXCJDYW5ub3Qgc2V0LCB1c2UgLnNldFBhcmFtZXRlckJ5Li4uKClcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn07XG5cbmV4cG9ydCB7UGFyYW1ldGVyTWFuYWdlcn07XG4iLCIvKiBqc2hpbnQgZXN2ZXJzaW9uOiA2ICovXG5pbXBvcnQge1BsdWdpblBhcmFtZXRlcn0gZnJvbSBcIi4vUGx1Z2luUGFyYW1ldGVyLmpzXCI7XG5cbmZ1bmN0aW9uIEJ1dHRvblBhcmFtZXRlcihvd25lciwgbmFtZSkge1xuICAgIFBsdWdpblBhcmFtZXRlci5jYWxsKHRoaXMsIG93bmVyLCBuYW1lLCBcIkJ1dHRvblwiKTtcbiAgICB2YXIgb25jbGljayA9IGZ1bmN0aW9uICgpIHt9O1xuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgICBcInR5cGVcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIkJ1dHRvblwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGVzdHJveVwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBvd25lciA9IG5hbWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwib25jbGlja1wiOiB7XG4gICAgICAgICAgICBcImdldFwiOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9uY2xpY2s7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJzZXRcIjogZnVuY3Rpb24gKGYpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGYgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyAoXCJvbmNsaWNrIG11c3QgYmUgYSBmdW5jdGlvblwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgb25jbGljayA9IGY7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbkJ1dHRvblBhcmFtZXRlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFBsdWdpblBhcmFtZXRlci5wcm90b3R5cGUpO1xuQnV0dG9uUGFyYW1ldGVyLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEJ1dHRvblBhcmFtZXRlcjtcblxuZXhwb3J0IHtCdXR0b25QYXJhbWV0ZXJ9O1xuIiwiLyoganNoaW50IGVzdmVyc2lvbjogNiAqL1xuaW1wb3J0IHtQbHVnaW5QYXJhbWV0ZXJ9IGZyb20gXCIuL1BsdWdpblBhcmFtZXRlci5qc1wiO1xuaW1wb3J0IHtQYXJhbWV0ZXJTdGVwQXV0b21hdGlvbn0gZnJvbSBcIi4vUGFyYW1ldGVyQXV0b21hdGlvbi5qc1wiO1xuXG5mdW5jdGlvbiBMaXN0UGFyYW1ldGVyKG93bmVyLCBuYW1lLCBkZWZhdWx0VmFsdWUsIGxpc3RPZlZhbHVlcykge1xuICAgIFBsdWdpblBhcmFtZXRlci5jYWxsKHRoaXMsIG93bmVyLCBuYW1lLCBcIkJ1dHRvblwiKTtcbiAgICB2YXIgYXVkaW9QYXJhbWV0ZXIsIGF1dG9tYXRpb247XG4gICAgdmFyIG9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7fTtcbiAgICB2YXIgX2luZGV4ID0gbGlzdE9mVmFsdWVzLmluZGV4T2YoZGVmYXVsdFZhbHVlKTtcblxuICAgIGZ1bmN0aW9uIHNldFYodiwgdXBkYXRlSW50ZXJmYWNlcykge1xuICAgICAgICB2YXIgaSA9IGxpc3RPZlZhbHVlcy5pbmRleE9mKHYpO1xuICAgICAgICBpZiAoaSA9PT0gdW5kZWZpbmVkIHx8IGkgPCAwKSB7XG4gICAgICAgICAgICB0aHJvdyhcIk5vdCBpbiBsaXN0IHJhbmdlXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmJvdW5kQXVkaW9QYXJhbSkge1xuICAgICAgICAgICAgdGhpcy5ib3VuZEF1ZGlvUGFyYW0udmFsdWUgPSB0aGlzLnVwZGF0ZSh2KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoX2luZGV4ICE9PSBpKSB7XG4gICAgICAgICAgICBfaW5kZXggPSBpO1xuICAgICAgICAgICAgdGhpcy50cmlnZ2VyUGFyYW1ldGVyU2V0KHVwZGF0ZUludGVyZmFjZXMpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudHJpZ2dlcigpO1xuICAgICAgICByZXR1cm4gbGlzdE9mVmFsdWVzW19pbmRleF07XG4gICAgfVxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgICBcInR5cGVcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIkxpc3RcIlxuICAgICAgICB9LFxuICAgICAgICBcImRlc3Ryb3lcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgb3duZXIgPSBuYW1lID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImRlZmF1bHRWYWx1ZVwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGRlZmF1bHRWYWx1ZVxuICAgICAgICB9LFxuICAgICAgICBcImxpc3RWYWx1ZXNcIjoge1xuICAgICAgICAgICAgXCJnZXRcIjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGxpc3RPZlZhbHVlcy5tYXAoZnVuY3Rpb24odikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdjtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJ2YWx1ZVwiOiB7XG4gICAgICAgICAgICBcImdldFwiOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKGF1ZGlvUGFyYW1ldGVyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRyYW5zbGF0ZShhdWRpb1BhcmFtZXRlci52YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBsaXN0T2ZWYWx1ZXNbX2luZGV4XTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInNldFwiOiBmdW5jdGlvbiAodikge1xuICAgICAgICAgICAgICAgIHJldHVybiBzZXRWLmNhbGwodGhpcywgdiwgdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwic2V0VmFsdWVcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbih2LCB1cGRhdGVJbnRlcmZhY2VzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNldFYuY2FsbCh0aGlzLCB2LCB1cGRhdGVJbnRlcmZhY2VzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJpbmNyZW1lbnRcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIHYgPSBfaW5kZXggKyAxO1xuICAgICAgICAgICAgICAgIGlmICh2ID49IGxpc3RPZlZhbHVlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgdiA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBzZXRWLmNhbGwodGhpcywgdik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiZGVjcmVtZW50XCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciB2ID0gX2luZGV4IC0gMTtcbiAgICAgICAgICAgICAgICBpZiAodiA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdiA9IGxpc3RPZlZhbHVlcy5sZW5ndGgtMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNldFYuY2FsbCh0aGlzLCB2KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJiaW5kVG9BdWRpb1BhcmFtXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKGFwKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBhcCA9PSBcIm9iamVjdFwiICYmIGFwLnZhbHVlICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBhdWRpb1BhcmFtZXRlciA9IGFwO1xuICAgICAgICAgICAgICAgICAgICBhdWRpb1BhcmFtZXRlci52YWx1ZSA9IHRoaXMudXBkYXRlKF92YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhcC5zZXRWYWx1ZUF0VGltZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXV0b21hdGlvbiA9IG5ldyBQYXJhbWV0ZXJTdGVwQXV0b21hdGlvbih0aGlzLCBhdWRpb1BhcmFtZXRlciwgMCwgbGlzdFZhbHVlcy5sZW5ndGgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZ2V0VmFsdWVBdFRpbWVQb2ludFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24odGltZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYXV0b21hdGlvblBvaW50cy5nZXRWYWx1ZUF0VGltZVBvaW50KHRpbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImF1dG9tYXRpb25Qb2ludHNcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGF1dG9tYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3RhcnRcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKHRpbWUsIGNvbnRleHRUaW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXV0b21hdGlvbi5zdGFydCh0aW1lLCBjb250ZXh0VGltZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3RvcFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24oY29udGV4dFRpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9tYXRpb24uc3RvcChjb250ZXh0VGltZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZW5hYmxlZFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZ2V0XCI6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGF1dG9tYXRpb24uZW5hYmxlZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzZXRcIjogZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChhdXRvbWF0aW9uLmVuYWJsZWQgPSB0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwiQ2Fubm90IGJpbmQgYXV0b21hdGlvbiBhcyBBdWRpb1BhcmFtZXRlciBpcyBub3QgYXV0b21hdGFibGVcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyhcIkFyZ3VtZW50IDEgaXMgbm90IGEgdmFsaWQgQXVkaW9QYXJhbWV0ZXIgb2JqZWN0XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJib3VuZEF1ZGlvUGFyYW1cIjoge1xuICAgICAgICAgICAgXCJjb25maWd1cmFibGVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwiZ2V0XCI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXVkaW9QYXJhbWV0ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiYXV0b21hdGFibGVcIjoge1xuICAgICAgICAgICAgXCJnZXRcIjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0eXBlb2YgYXV0b21hdGlvbiAhPT0gXCJvYmplY3RcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuTGlzdFBhcmFtZXRlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFBsdWdpblBhcmFtZXRlci5wcm90b3R5cGUpO1xuTGlzdFBhcmFtZXRlci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBMaXN0UGFyYW1ldGVyO1xuXG5leHBvcnQge0xpc3RQYXJhbWV0ZXJ9O1xuIiwiLyoganNoaW50IGVzdmVyc2lvbjogNiAqL1xuaW1wb3J0IHtQbHVnaW5QYXJhbWV0ZXJ9IGZyb20gXCIuL1BsdWdpblBhcmFtZXRlci5qc1wiO1xuaW1wb3J0IHtQYXJhbWV0ZXJMaW5lYXJBdXRvbWF0aW9ufSBmcm9tIFwiLi9QYXJhbWV0ZXJBdXRvbWF0aW9uLmpzXCI7XG5cbmZ1bmN0aW9uIE51bWJlclBhcmFtZXRlcihvd25lciwgbmFtZSwgZGVmYXVsdFZhbHVlLCBtaW5pbXVtLCBtYXhpbXVtKSB7XG4gICAgUGx1Z2luUGFyYW1ldGVyLmNhbGwodGhpcywgb3duZXIsIG5hbWUsIFwiTnVtYmVyXCIpO1xuICAgIHZhciBhdWRpb1BhcmFtZXRlciwgYXV0b21hdGlvbjtcbiAgICB2YXIgX3ZhbHVlID0gZGVmYXVsdFZhbHVlLFxuICAgICAgICBfc3RlcFNpemU7XG5cbiAgICBmdW5jdGlvbiBzZXRWYWx1ZSh2LCB1cGRhdGVJbnRlcmZhY2VzKVxuICAgIHtcbiAgICAgICAgaWYgKGF1dG9tYXRpb24gJiYgYXV0b21hdGlvbi5lbmFibGVkKSB7XG4gICAgICAgICAgICB0aHJvdyhcIkF1dG9tYXRpb24gaXMgZW5hYmxlZCwgY2Fubm90IHNldCB0aGUgdmFsdWUhXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm1pbmltdW0pIHtcbiAgICAgICAgICAgIHYgPSBNYXRoLm1heCh2LCB0aGlzLm1pbmltdW0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm1heGltdW0pIHtcbiAgICAgICAgICAgIHYgPSBNYXRoLm1pbih2LCB0aGlzLm1heGltdW0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChfc3RlcFNpemUpIHtcbiAgICAgICAgICAgIHYgPSBNYXRoLnJvdW5kKHYgLyBfc3RlcFNpemUpO1xuICAgICAgICAgICAgdiA9IHYgKiBfc3RlcFNpemU7XG4gICAgICAgIH1cbiAgICAgICAgdiA9IHRoaXMudXBkYXRlKHYpO1xuICAgICAgICBpZiAoYXVkaW9QYXJhbWV0ZXIpIHtcbiAgICAgICAgICAgIGlmIChhdXRvbWF0aW9uKSB7XG4gICAgICAgICAgICAgICAgYXVkaW9QYXJhbWV0ZXIuc2V0VmFsdWVBdFRpbWUodiwgb3duZXIuZmFjdG9yeS5jb250ZXh0LmN1cnJlbnRUaW1lKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYXVkaW9QYXJhbWV0ZXIudmFsdWUgPSB2O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChfdmFsdWUgIT09IHYpIHtcbiAgICAgICAgICAgIF92YWx1ZSA9IHY7XG4gICAgICAgICAgICB0aGlzLnRyaWdnZXJQYXJhbWV0ZXJTZXQodXBkYXRlSW50ZXJmYWNlcyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50cmlnZ2VyKCk7XG4gICAgfVxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgICBcInR5cGVcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIk51bWJlclwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGVzdHJveVwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBvd25lciA9IG5hbWUgPSBkZWZhdWx0VmFsdWUgPSBtaW5pbXVtID0gbWF4aW11bSA9IF92YWx1ZSA9IF9zdGVwU2l6ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJtaW5pbXVtXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogbWluaW11bVxuICAgICAgICB9LFxuICAgICAgICBcIm1heGltdW1cIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBtYXhpbXVtXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGVmYXVsdFZhbHVlXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZGVmYXVsdFZhbHVlXG4gICAgICAgIH0sXG4gICAgICAgIFwidmFsdWVcIjoge1xuICAgICAgICAgICAgXCJnZXRcIjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmIChhdWRpb1BhcmFtZXRlcikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYXV0b21hdGlvbiAmJiBhdXRvbWF0aW9uLmVuYWJsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0ID0gb3duZXIuZmFjdG9yeS5nZXRDdXJyZW50UHJvZ3JhbVRpbWUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhdXRvbWF0aW9uLmdldEN1cnJlbnRUaW1lVmFsdWUodCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNsYXRlKGF1ZGlvUGFyYW1ldGVyLnZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIF92YWx1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInNldFwiOiBmdW5jdGlvbiAodikge1xuICAgICAgICAgICAgICAgIHJldHVybiBzZXRWYWx1ZS5jYWxsKHRoaXMsIHYsIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInNldFZhbHVlXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24odiwgdXBkYXRlSW50ZXJmYWNlcykge1xuICAgICAgICAgICAgICAgIHJldHVybiBzZXRWYWx1ZS5jYWxsKHRoaXMsIHYsIHVwZGF0ZUludGVyZmFjZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInN0ZXBTaXplXCI6IHtcbiAgICAgICAgICAgIFwiZ2V0XCI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3N0ZXBTaXplO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwic2V0XCI6IGZ1bmN0aW9uIChuKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFpc0Zpbml0ZShuKSB8fCBuIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyAoXCJJbnZhbGlkIHN0ZXAgc2l6ZVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgX3N0ZXBTaXplID0gbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJiaW5kVG9BdWRpb1BhcmFtXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKGFwKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBhcCA9PSBcIm9iamVjdFwiICYmIGFwLnZhbHVlICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBhdWRpb1BhcmFtZXRlciA9IGFwO1xuICAgICAgICAgICAgICAgICAgICBhdWRpb1BhcmFtZXRlci52YWx1ZSA9IHRoaXMudXBkYXRlKF92YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhcC5zZXRWYWx1ZUF0VGltZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXV0b21hdGlvbiA9IG5ldyBQYXJhbWV0ZXJMaW5lYXJBdXRvbWF0aW9uKHRoaXMsIGF1ZGlvUGFyYW1ldGVyLCBtaW5pbXVtLCBtYXhpbXVtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImdldFZhbHVlQXRUaW1lUG9pbnRcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKHRpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmF1dG9tYXRpb25Qb2ludHMuZ2V0VmFsdWVBdFRpbWVQb2ludCh0aW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdXRvbWF0aW9uUG9pbnRzXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBhdXRvbWF0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN0YXJ0XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbih0aW1lLCBjb250ZXh0VGltZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGF1dG9tYXRpb24uc3RhcnQodGltZSwgY29udGV4dFRpbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN0b3BcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKGNvbnRleHRUaW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvbWF0aW9uLnN0b3AoY29udGV4dFRpbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImVuYWJsZWRcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImdldFwiOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhdXRvbWF0aW9uLmVuYWJsZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2V0XCI6IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoYXV0b21hdGlvbi5lbmFibGVkID0gdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIkNhbm5vdCBiaW5kIGF1dG9tYXRpb24gYXMgQXVkaW9QYXJhbWV0ZXIgaXMgbm90IGF1dG9tYXRhYmxlXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3coXCJBcmd1bWVudCAxIGlzIG5vdCBhIHZhbGlkIEF1ZGlvUGFyYW1ldGVyIG9iamVjdFwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiYm91bmRBdWRpb1BhcmFtXCI6IHtcbiAgICAgICAgICAgIFwiY29uZmlndXJhYmxlXCI6IHRydWUsXG4gICAgICAgICAgICBcImdldFwiOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGF1ZGlvUGFyYW1ldGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImF1dG9tYXRhYmxlXCI6IHtcbiAgICAgICAgICAgIFwiZ2V0XCI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHlwZW9mIGF1dG9tYXRpb24gIT09IFwib2JqZWN0XCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbk51bWJlclBhcmFtZXRlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFBsdWdpblBhcmFtZXRlci5wcm90b3R5cGUpO1xuTnVtYmVyUGFyYW1ldGVyLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IE51bWJlclBhcmFtZXRlcjtcblxuZXhwb3J0IHtOdW1iZXJQYXJhbWV0ZXJ9O1xuIiwiLyoganNoaW50IGVzdmVyc2lvbjogNiAqL1xudmFyIFRpbWVQb2ludCA9IGZ1bmN0aW9uKG93bmVyLCB0aW1lLCB2YWx1ZSkge1xuICAgIGlmICh0eXBlb2YgdGltZSAhPSBcIm51bWJlclwiIHx8ICFpc0Zpbml0ZSh0aW1lKSB8fCB0aW1lIDwgMCkge1xuICAgICAgICB0aHJvdyhcIkludmFsaWQgQ29uc3RydWN0b3I6IFRpbWUgbXVzdCBiZSBhIHBvc2l0aXZlIG51bWJlclwiKTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSAhPSBcIm51bWJlclwiIHx8ICFpc0Zpbml0ZSh2YWx1ZSkpIHtcbiAgICAgICAgdGhyb3coXCJJbnZhbGlkIENvbnN0cnVjdG9yOiBWYWx1ZSBtdXN0IGJlIGEgbnVtYmVyXCIpO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XG4gICAgICAgIFwidGltZVwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IHRpbWVcbiAgICAgICAgfSxcbiAgICAgICAgXCJ2YWx1ZVwiOiB7XG4gICAgICAgICAgICBcImdldFwiOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwic2V0VmFsdWVcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbih2KSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB2ICE9IFwibnVtYmVyXCIgfHwgIWlzRmluaXRlKHYpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93KFwiVmFsdWUgbXVzdCBiZSBhIG51bWJlclwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBNYXRoLm1pbihNYXRoLm1heCh2LCBtaW5fdmFsdWUpLCBtYXhfdmFsdWUpO1xuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJ0b1N0cmluZ1wiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBTdHJpbmcodmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcIm93bmVyXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogb3duZXJcbiAgICAgICAgfVxuICAgIH0pO1xufTtcblxudmFyIFRpbWVQb2ludExpc3QgPSBmdW5jdGlvbihtaW5fdmFsdWUsIG1heF92YWx1ZSkge1xuICAgIGZ1bmN0aW9uIGdldFBvaW50QXRUaW1lKGF1dG9tYXRpb25Qb2ludHMsIHRpbWUpIHtcbiAgICAgICAgcmV0dXJuIGF1dG9tYXRpb25Qb2ludHMuZmluZChmdW5jdGlvbihwKSB7XG4gICAgICAgICAgICByZXR1cm4gcC50aW1lID09IHRpbWU7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBoYXNQb2ludEF0VGltZShhdXRvbWF0aW9uUG9pbnRzLCB0aW1lKSB7XG4gICAgICAgIHJldHVybiBnZXRQb2ludEF0VGltZShhdXRvbWF0aW9uUG9pbnRzLCB0aW1lKSAhPT0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBmdW5jdGlvbiBzb3J0UG9pbnRzKGF1dG9tYXRpb25Qb2ludHMpIHtcbiAgICAgICAgcmV0dXJuIGF1dG9tYXRpb25Qb2ludHMuc29ydChmdW5jdGlvbihhLGIpIHtcbiAgICAgICAgICAgIGlmIChhLnRpbWUgPiBiLnRpbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBtaW5fdmFsdWUgIT0gXCJudW1iZXJcIiB8fCAhaXNGaW5pdGUobWluX3ZhbHVlKSkge1xuICAgICAgICB0aHJvdyhcIkludmFsaWQgQ29uc3RydWN0b3I6IG1pbl92YWx1ZSBiZSBhIG51bWJlclwiKTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBtYXhfdmFsdWUgIT0gXCJudW1iZXJcIiB8fCAhaXNGaW5pdGUobWF4X3ZhbHVlKSkge1xuICAgICAgICB0aHJvdyhcIkludmFsaWQgQ29uc3RydWN0b3I6IG1heF92YWx1ZSBiZSBhIG51bWJlclwiKTtcbiAgICB9XG4gICAgaWYgKG1pbl92YWx1ZSA9PSBtYXhfdmFsdWUpIHtcbiAgICAgICAgdGhyb3coXCJJbnZhbGlkIENvbnN0cnVjdG9yOiBtYXhfdmFsdWUgY2Fubm90IGVxdWFsIHRvIG1pbl92YWx1ZVwiKTtcbiAgICB9XG4gICAgaWYgKG1heF92YWx1ZSA8IG1pbl92YWx1ZSkge1xuICAgICAgICB0aHJvdyhcIkludmFsaWQgQ29uc3RydWN0b3I6IG1pbl92YWx1ZSBjYW5ub3QgYmUgZ3JlYXRlciB0aGFuIG1heF92YWx1ZVwiKTtcbiAgICB9XG4gICAgdmFyIGF1dG9tYXRpb25Qb2ludHMgPSBbXTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XG4gICAgICAgIFwiaW5zZXJ0UG9pbnRcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbih0aW1lLCB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGltZSAhPSBcIm51bWJlclwiIHx8ICFpc0Zpbml0ZSh0aW1lKSB8fCB0aW1lIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyhcIlRpbWUgbXVzdCBiZSBhIHBvc2l0aXZlIG51bWJlclwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSAhPSBcIm51bWJlclwiIHx8ICFpc0Zpbml0ZSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3coXCJWYWx1ZSBtdXN0IGJlIGEgbnVtYmVyXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoaGFzUG9pbnRBdFRpbWUoYXV0b21hdGlvblBvaW50cywgdGltZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3coXCJBbHJlYWR5IGEgdmFsdWUgZW50cnkgYXQgdGltZSBcIit0aW1lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBNYXRoLm1pbihNYXRoLm1heCh2YWx1ZSwgbWluX3ZhbHVlKSwgbWF4X3ZhbHVlKTtcbiAgICAgICAgICAgICAgICB2YXIgcG9pbnQgPSBuZXcgVGltZVBvaW50KHRoaXMsIHRpbWUsIHZhbHVlKTtcbiAgICAgICAgICAgICAgICBhdXRvbWF0aW9uUG9pbnRzLnB1c2gocG9pbnQpO1xuICAgICAgICAgICAgICAgIGF1dG9tYXRpb25Qb2ludHMgPSBzb3J0UG9pbnRzKGF1dG9tYXRpb25Qb2ludHMpO1xuICAgICAgICAgICAgICAgIHJldHVybiBwb2ludDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRQb2ludHNcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbihzdGFydF90aW1lLCBlbmRfdGltZSkge1xuICAgICAgICAgICAgICAgIGlmIChzdGFydF90aW1lID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRfdGltZSA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChlbmRfdGltZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGVuZF90aW1lID0gSW5maW5pdHk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBhdXRvbWF0aW9uUG9pbnRzLmZpbHRlcihmdW5jdGlvbihwb2ludCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcG9pbnQudGltZSA+PSBzdGFydF90aW1lICYmIHBvaW50LnRpbWUgPCBlbmRfdGltZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJkZWxldGVQb2ludFwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKHRpbWUpIHtcbiAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSBhdXRvbWF0aW9uUG9pbnRzLmZpbmRJbmRleChmdW5jdGlvbihwb2ludCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcG9pbnQudGltZSA9PSB0aW1lO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGF1dG9tYXRpb25Qb2ludHMuc3BsaWNlKGluZGV4LCAxLCAwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGF1dG9tYXRpb25Qb2ludHMubGVuZ3RoO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImdldFN0YXRpY1ZhbHVlQXNTdHJpbmdcIjoge1xuICAgICAgICAgICAgXCJ3cml0YWJsZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gU3RyaW5nKHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRWYWx1ZUF0VGltZVBvaW50XCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKHRpbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZ2V0UG9pbnRBdFRpbWUoYXV0b21hdGlvblBvaW50cywgdGltZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwibGVuZ3RoXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGF1dG9tYXRpb25Qb2ludHMubGVuZ3RoO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInVwZGF0ZVBvaW50XCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24odGltZSwgbmV3X3ZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBvaW50ID0gYXV0b21hdGlvblBvaW50cy5maW5kKGZ1bmN0aW9uKHBvaW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwb2ludC50aW1lID09IHRpbWU7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKHBvaW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHBvaW50LnZhbHVlID0gbmV3X3ZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcG9pbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn07XG5cbnZhciBQYXJhbWV0ZXJBdXRvbWF0aW9uID0gZnVuY3Rpb24ocGFyYW1ldGVyLCBtaW5fdmFsdWUsIG1heF92YWx1ZSkge1xuICAgIFRpbWVQb2ludExpc3QuY2FsbCh0aGlzLCBtaW5fdmFsdWUsIG1heF92YWx1ZSk7XG4gICAgdmFyIGVuYWJsZWQgPSBmYWxzZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XG4gICAgICAgIFwiZW5hYmxlZFwiOiB7XG4gICAgICAgICAgICBcImdldFwiOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZW5hYmxlZDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInNldFwiOiBmdW5jdGlvbih0KSB7XG4gICAgICAgICAgICAgICAgZW5hYmxlZCA9ICh0ID09PSB0cnVlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZW5hYmxlZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufTtcblxudmFyIFBhcmFtZXRlckxpbmVhckF1dG9tYXRpb24gPSBmdW5jdGlvbiAob3duZXIsIHBhcmFtZXRlciwgbWluX3ZhbHVlLCBtYXhfdmFsdWUpIHtcbiAgICBQYXJhbWV0ZXJBdXRvbWF0aW9uLmNhbGwodGhpcywgcGFyYW1ldGVyLCBtaW5fdmFsdWUsIG1heF92YWx1ZSk7XG4gICAgZnVuY3Rpb24gbGluZWFySW50ZXJwb2xhdGlvbih0aW1lLCBwb2ludEEsIHBvaW50Qikge1xuICAgICAgICB2YXIgdDEgPSBwb2ludEEudGltZTtcbiAgICAgICAgdmFyIHQyID0gcG9pbnRCLnRpbWU7XG4gICAgICAgIHRpbWUgLT0gdDE7XG4gICAgICAgIHQyIC09IHQxO1xuICAgICAgICB0MSA9IDA7XG5cbiAgICAgICAgdmFyIHAgPSB0aW1lL3QyO1xuICAgICAgICByZXR1cm4gcG9pbnRBLnZhbHVlICogKDEtcCkgKyBwb2ludEIudmFsdWUgKiBwO1xuICAgIH1cbiAgICBmdW5jdGlvbiBnZXRDdXJyZW50VGltZVZhbHVlKGF1dG9tYXRpb25Qb2ludHMsIHRpbWUpIHtcbiAgICAgICAgaWYgKGF1dG9tYXRpb25Qb2ludHMubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgIHRocm93KFwiTm8gYXV0b21hdGlvbiBwb2ludHMgYXZhaWxhYmxlXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhdXRvbWF0aW9uUG9pbnRzLmxlbmd0aCA9PSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gYXV0b21hdGlvblBvaW50c1swXS52YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBmaXJzdFBvaW50ID0gYXV0b21hdGlvblBvaW50cy5yZWR1Y2UoZnVuY3Rpb24ocG9pbnQsIG5leHRQb2ludCkge1xuICAgICAgICAgICAgaWYgKG5leHRQb2ludC50aW1lIDw9IHRpbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV4dFBvaW50O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcG9pbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIGF1dG9tYXRpb25Qb2ludHNbMF0pO1xuICAgICAgICB2YXIgc2Vjb25kUG9pbnQgPSBhdXRvbWF0aW9uUG9pbnRzLmZpbmQoZnVuY3Rpb24ocG9pbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBwb2ludC50aW1lID4gZmlyc3RQb2ludC50aW1lO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHNlY29uZFBvaW50ID09PSB1bmRlZmluZWQgfHwgZmlyc3RQb2ludC50aW1lID4gdGltZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZpcnN0UG9pbnQudmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxpbmVhckludGVycG9sYXRpb24odGltZSwgZmlyc3RQb2ludCwgc2Vjb25kUG9pbnQpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHN0YXJ0KGF1dG9tYXRpb25Qb2ludHMsIHRpbWUsIGNvbnRleHRUaW1lKSB7XG4gICAgICAgIHZhciBzdGFydFBvc2l0aW9uID0gb3duZXIudXBkYXRlKGdldEN1cnJlbnRUaW1lVmFsdWUoYXV0b21hdGlvblBvaW50cywgdGltZSkpO1xuICAgICAgICBwYXJhbWV0ZXIuc2V0VmFsdWVBdFRpbWUoc3RhcnRQb3NpdGlvbiwgY29udGV4dFRpbWUpO1xuICAgICAgICBhdXRvbWF0aW9uUG9pbnRzLmZvckVhY2goZnVuY3Rpb24ocCkge1xuICAgICAgICAgICAgaWYgKHAudGltZSA+IHRpbWUpIHtcbiAgICAgICAgICAgICAgICB2YXIgdCA9IHAudGltZSAtIHRpbWU7XG4gICAgICAgICAgICAgICAgdmFyIHYgPSBvd25lci51cGRhdGUocC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgcGFyYW1ldGVyLmxpbmVhclJhbXBUb1ZhbHVlQXRUaW1lKHYsIHQrY29udGV4dFRpbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzdG9wKGNvbnRleHRUaW1lKSB7XG4gICAgICAgIGlmIChjb250ZXh0VGltZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjb250ZXh0VGltZSA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgcGFyYW1ldGVyLmNhbmNlbFNjaGVkdWxlZFZhbHVlcyhjb250ZXh0VGltZSk7XG4gICAgfVxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgICBcImdldEN1cnJlbnRUaW1lVmFsdWVcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbih0aW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGdldEN1cnJlbnRUaW1lVmFsdWUodGhpcy5nZXRQb2ludHMoKSwgdGltZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwic3RhcnRcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbih0aW1lLCBjb250ZXh0VGltZSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmVuYWJsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhcnQodGhpcy5nZXRQb2ludHMoKSwgdGltZSwgY29udGV4dFRpbWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJzdG9wXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24oY29udGV4dFRpbWUpIHtcbiAgICAgICAgICAgICAgICBzdG9wKGNvbnRleHRUaW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuXG59O1xuUGFyYW1ldGVyTGluZWFyQXV0b21hdGlvbi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFBhcmFtZXRlckF1dG9tYXRpb24ucHJvdG90eXBlKTtcblBhcmFtZXRlckxpbmVhckF1dG9tYXRpb24ucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gUGFyYW1ldGVyTGluZWFyQXV0b21hdGlvbjtcblxudmFyIFBhcmFtZXRlclN0ZXBBdXRvbWF0aW9uID0gZnVuY3Rpb24gKG93bmVyLCBwYXJhbWV0ZXIsIG1pbl92YWx1ZSwgbWF4X3ZhbHVlKSB7XG4gICAgUGFyYW1ldGVyQXV0b21hdGlvbi5jYWxsKHRoaXMsIHBhcmFtZXRlciwgbWluX3ZhbHVlLCBtYXhfdmFsdWUpO1xuICAgIGZ1bmN0aW9uIGdldEN1cnJlbnRUaW1lVmFsdWUoYXV0b21hdGlvblBvaW50cywgdGltZSkge1xuICAgICAgICBpZiAoYXV0b21hdGlvblBvaW50cy5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgdGhyb3coXCJObyBhdXRvbWF0aW9uIHBvaW50cyBhdmFpbGFibGVcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGF1dG9tYXRpb25Qb2ludHMubGVuZ3RoID09IDEpIHtcbiAgICAgICAgICAgIHJldHVybiBhdXRvbWF0aW9uUG9pbnRzWzBdLnZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG5lYXJlc3RQb2ludCA9IGF1dG9tYXRpb25Qb2ludHMucmVkdWNlKGZ1bmN0aW9uKHBvaW50LCBuZXh0UG9pbnQpIHtcbiAgICAgICAgICAgIGlmIChuZXh0UG9pbnQudGltZSA8PSB0aW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5leHRQb2ludDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBvaW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCBhdXRvbWF0aW9uUG9pbnRzWzBdKTtcbiAgICAgICAgcmV0dXJuIG5lYXJlc3RQb2ludC52YWx1ZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzdGFydChhdXRvbWF0aW9uUG9pbnRzLCB0aW1lLCBjb250ZXh0VGltZSkge1xuICAgICAgICB2YXIgc3RhcnRQb3NpdGlvbiA9IG93bmVyLnVwZGF0ZShnZXRDdXJyZW50VGltZVZhbHVlKGF1dG9tYXRpb25Qb2ludHMsIHRpbWUpKTtcbiAgICAgICAgcGFyYW1ldGVyLnNldFZhbHVlQXRUaW1lKHN0YXJ0UG9zaXRpb24sIGNvbnRleHRUaW1lKTtcbiAgICAgICAgYXV0b21hdGlvblBvaW50cy5mb3JFYWNoKGZ1bmN0aW9uKHApIHtcbiAgICAgICAgICAgIGlmIChwLnRpbWUgPiB0aW1lKSB7XG4gICAgICAgICAgICAgICAgdmFyIHQgPSBwLnRpbWUgLSB0aW1lO1xuICAgICAgICAgICAgICAgIHZhciB2ID0gb3duZXIudXBkYXRlKHAudmFsdWUpO1xuICAgICAgICAgICAgICAgIHBhcmFtZXRlci5zZXRWYWx1ZUF0VGltZSh2LCB0K2NvbnRleHRUaW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3RvcChjb250ZXh0VGltZSkge1xuICAgICAgICBwYXJhbWV0ZXIuY2FuY2VsU2NoZWR1bGVkVmFsdWVzKGNvbnRleHRUaW1lKTtcbiAgICB9XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XG4gICAgICAgIFwiZ2V0Q3VycmVudFRpbWVWYWx1ZVwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKHRpbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZ2V0Q3VycmVudFRpbWVWYWx1ZSh0aGlzLmdldFBvaW50cygpLCB0aW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJzdGFydFwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKHRpbWUsIGNvbnRleHRUaW1lKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZW5hYmxlZCkge1xuICAgICAgICAgICAgICAgICAgICBzdGFydCh0aGlzLmdldFBvaW50cygpLCB0aW1lLCBjb250ZXh0VGltZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInN0b3BcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbihjb250ZXh0VGltZSkge1xuICAgICAgICAgICAgICAgIHN0b3AoY29udGV4dFRpbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59O1xuUGFyYW1ldGVyU3RlcEF1dG9tYXRpb24ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShQYXJhbWV0ZXJBdXRvbWF0aW9uLnByb3RvdHlwZSk7XG5QYXJhbWV0ZXJTdGVwQXV0b21hdGlvbi5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBQYXJhbWV0ZXJTdGVwQXV0b21hdGlvbjtcblxuZXhwb3J0IHtQYXJhbWV0ZXJMaW5lYXJBdXRvbWF0aW9uLCBQYXJhbWV0ZXJTdGVwQXV0b21hdGlvbn07XG4iLCIvKiBqc2hpbnQgZXN2ZXJzaW9uOiA2ICovXG5mdW5jdGlvbiBQbHVnaW5QYXJhbWV0ZXIob3duZXIsIG5hbWUsIGRhdGFUeXBlKSB7XG4gICAgdmFyIHVwZGF0ZSwgdHJhbnNsYXRlLCB0cmlnZ2VyO1xuICAgIHZhciBldmVudFRhcmdldCA9IG5ldyBFdmVudFRhcmdldCgpO1xuICAgIHVwZGF0ZSA9IHRyYW5zbGF0ZSA9IGZ1bmN0aW9uICh2KSB7XG4gICAgICAgIHJldHVybiB2O1xuICAgIH07XG4gICAgdHJpZ2dlciA9IGZ1bmN0aW9uICgpIHt9O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgICAgXCJhZGRFdmVudExpc3RlbmVyXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24odHlwZSwgbGlzdGVuZXIsIG9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZXZlbnRUYXJnZXQuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lciwgb3B0aW9ucyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwicmVtb3ZlRXZlbnRMaXN0ZW5lclwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKHR5cGUsIGxpc3RlbmVyLCBvcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGV2ZW50VGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXIsIG9wdGlvbnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInRyaWdnZXJQYXJhbWV0ZXJTZXRcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbih1cGRhdGVJbnRlcmZhY2VzKSB7XG4gICAgICAgICAgICAgICAgdmFyIG9wdHMgPSB7ZGV0YWlsOiB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmFtZXRlcjogdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlSW50ZXJmYWNlczogdXBkYXRlSW50ZXJmYWNlc1xuICAgICAgICAgICAgICAgIH19O1xuICAgICAgICAgICAgICAgIGV2ZW50VGFyZ2V0LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwicGFyYW1ldGVyc2V0XCIsIG9wdHMpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogbmFtZVxuICAgICAgICB9LFxuICAgICAgICBcIm93bmVyXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogb3duZXJcbiAgICAgICAgfSxcbiAgICAgICAgXCJ1cGRhdGVcIjoge1xuICAgICAgICAgICAgXCJnZXRcIjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB1cGRhdGU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJzZXRcIjogZnVuY3Rpb24gKGYpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGYgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyAoXCJNdXN0IGJlIGEgY2FsbGJhY2sgZnVuY3Rpb25cIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChmKDApID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgKFwiRnVuY3Rpb24gbXVzdCByZXR1cm4gYSB2YWx1ZVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdXBkYXRlID0gZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJ0cmFuc2xhdGVcIjoge1xuICAgICAgICAgICAgXCJnZXRcIjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cmFuc2xhdGU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJzZXRcIjogZnVuY3Rpb24gKGYpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGYgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyAoXCJNdXN0IGJlIGEgY2FsbGJhY2sgZnVuY3Rpb25cIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChmKDApID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgKFwiRnVuY3Rpb24gbXVzdCByZXR1cm4gYSB2YWx1ZVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlID0gZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJ0cmlnZ2VyXCI6IHtcbiAgICAgICAgICAgIFwiZ2V0XCI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJpZ2dlcjtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInNldFwiOiBmdW5jdGlvbiAoZikge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IChcIk11c3QgYmUgYSBjYWxsYmFjayBmdW5jdGlvblwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdHJpZ2dlciA9IGY7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiYmluZFRvQXVkaW9QYXJhbVwiOiB7XG4gICAgICAgICAgICBcImNvbmZpZ3VyYWJsZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoYXApIHtcbiAgICAgICAgICAgICAgICB0aHJvdyhcIkNhbm5vdCBiaW5kIHRoaXMgcGFyYW1ldGVyIHR5cGUgdG8gYW4gYXVkaW8gcGFyYW1ldGVyXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImJvdW5kQXVkaW9QYXJhbVwiOiB7XG4gICAgICAgICAgICBcImNvbmZpZ3VyYWJsZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJnZXRcIjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuZXhwb3J0IHtQbHVnaW5QYXJhbWV0ZXJ9O1xuIiwiLyoganNoaW50IGVzdmVyc2lvbjogNiAqL1xuaW1wb3J0IHtQbHVnaW5QYXJhbWV0ZXJ9IGZyb20gXCIuL1BsdWdpblBhcmFtZXRlci5qc1wiO1xuXG5mdW5jdGlvbiBTdHJpbmdQYXJhbWV0ZXIob3duZXIsIG5hbWUsIGRlZmF1bHRWYWx1ZSwgbWF4TGVuZ3RoKSB7XG4gICAgUGx1Z2luUGFyYW1ldGVyLmNhbGwodGhpcywgb3duZXIsIG5hbWUsIFwiU3RyaW5nXCIpO1xuICAgIHZhciBfdmFsdWUgPSBkZWZhdWx0VmFsdWU7XG4gICAgdmFyIGF1ZGlvUGFyYW1ldGVyO1xuXG4gICAgZnVuY3Rpb24gc2V0VmFsdWUodiwgdXBkYXRlSW50ZXJmYWNlcykge1xuICAgICAgICBpZiAobWF4TGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAodi5sZW5ndGggPiBtYXhMZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyAoXCJTdHJpbmcgbG9uZ2VyIHRoYW4gXCIgKyBtYXhMZW5ndGggKyBcIiBjaGFyYWN0ZXJzXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmJvdW5kQXVkaW9QYXJhbSkge1xuICAgICAgICAgICAgdGhpcy5ib3VuZEF1ZGlvUGFyYW0udmFsdWUgPSB0aGlzLnVwZGF0ZSh2KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoX3ZhbHVlICE9PSB2KSB7XG4gICAgICAgICAgICBfdmFsdWUgPSB2O1xuICAgICAgICAgICAgdGhpcy50cmlnZ2VyUGFyYW1ldGVyU2V0KHVwZGF0ZUludGVyZmFjZXMpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudHJpZ2dlcigpO1xuICAgIH1cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgICAgXCJ0eXBlXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogXCJTdHJpbmdcIlxuICAgICAgICB9LFxuICAgICAgICBcImRlc3Ryb3lcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgb3duZXIgPSBuYW1lID0gZGVmYXVsdFZhbHVlID0gbWF4TGVuZ3RoID0gX3ZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcIm1heExlbmd0aFwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IG1heExlbmd0aFxuICAgICAgICB9LFxuICAgICAgICBcImRlZmF1bHRWYWx1ZVwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGRlZmF1bHRWYWx1ZVxuICAgICAgICB9LFxuICAgICAgICBcInZhbHVlXCI6IHtcbiAgICAgICAgICAgIFwiZ2V0XCI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5ib3VuZEF1ZGlvUGFyYW0pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNsYXRlKHRoaXMuYm91bmRBdWRpb1BhcmFtLnZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIF92YWx1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInNldFwiOiBmdW5jdGlvbiAodikge1xuICAgICAgICAgICAgICAgIHJldHVybiBzZXRWYWx1ZS5jYWxsKHRoaXMsIHYsIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInNldFZhbHVlXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24odiwgdXBkYXRlSW50ZXJmYWNlcykge1xuICAgICAgICAgICAgICAgIHJldHVybiBzZXRWYWx1ZS5jYWxsKHRoaXMsIHYsIHVwZGF0ZUludGVyZmFjZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImJpbmRUb0F1ZGlvUGFyYW1cIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoYXApIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGFwID09IFwib2JqZWN0XCIgJiYgYXAudmFsdWUgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGF1ZGlvUGFyYW1ldGVyID0gYXA7XG4gICAgICAgICAgICAgICAgICAgIGF1ZGlvUGFyYW1ldGVyLnZhbHVlID0gdGhpcy51cGRhdGUoX3ZhbHVlKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyhcIkFyZ3VtZW50IDEgaXMgbm90IGEgdmFsaWQgQXVkaW9QYXJhbWV0ZXIgb2JqZWN0XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJib3VuZEF1ZGlvUGFyYW1cIjoge1xuICAgICAgICAgICAgXCJjb25maWd1cmFibGVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwiZ2V0XCI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXVkaW9QYXJhbWV0ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblN0cmluZ1BhcmFtZXRlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFBsdWdpblBhcmFtZXRlci5wcm90b3R5cGUpO1xuU3RyaW5nUGFyYW1ldGVyLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFN0cmluZ1BhcmFtZXRlcjtcblxuZXhwb3J0IHtTdHJpbmdQYXJhbWV0ZXJ9O1xuIiwiLyoganNoaW50IGVzdmVyc2lvbjogNiAqL1xuaW1wb3J0IHtQbHVnaW5QYXJhbWV0ZXJ9IGZyb20gXCIuL1BsdWdpblBhcmFtZXRlci5qc1wiO1xuaW1wb3J0IHtQYXJhbWV0ZXJTdGVwQXV0b21hdGlvbn0gZnJvbSBcIi4vUGFyYW1ldGVyQXV0b21hdGlvbi5qc1wiO1xuXG5mdW5jdGlvbiBTd2l0Y2hQYXJhbWV0ZXIob3duZXIsIG5hbWUsIGRlZmF1bHRWYWx1ZSwgbWluU3RhdGUsIG1heFN0YXRlKSB7XG4gICAgUGx1Z2luUGFyYW1ldGVyLmNhbGwodGhpcywgb3duZXIsIG5hbWUsIFwiQnV0dG9uXCIpO1xuICAgIHZhciBvbmNsaWNrID0gZnVuY3Rpb24gKCkge307XG4gICAgdmFyIF92YWx1ZSA9IGRlZmF1bHRWYWx1ZTtcbiAgICB2YXIgYXVkaW9QYXJhbWV0ZXIsIGF1dG9tYXRpb247XG5cbiAgICBmdW5jdGlvbiBzZXRWYWx1ZSh2LCB1cGRhdGVJbnRlcmZhY2VzKSB7XG4gICAgICAgIGlmICh2IDwgbWluU3RhdGUpIHtcbiAgICAgICAgICAgIHRocm93IChcIlNldCB2YWx1ZSBpcyBsZXNzIHRoYW4gXCIgKyBtaW5TdGF0ZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHYgPiBtYXhTdGF0ZSkge1xuICAgICAgICAgICAgdGhyb3cgKFwiU2V0IHZhbHVlIGlzIGdyZWF0ZXIgdGhhbiBcIiArIG1heFN0YXRlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5ib3VuZEF1ZGlvUGFyYW0pIHtcbiAgICAgICAgICAgIHRoaXMuYm91bmRBdWRpb1BhcmFtLnZhbHVlID0gdGhpcy51cGRhdGUodik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKF92YWx1ZSAhPT0gdikge1xuICAgICAgICAgICAgX3ZhbHVlID0gdjtcbiAgICAgICAgICAgIHRoaXMudHJpZ2dlclBhcmFtZXRlclNldCh1cGRhdGVJbnRlcmZhY2VzKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRyaWdnZXIoKTtcbiAgICAgICAgcmV0dXJuIHY7XG4gICAgfVxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgICBcInR5cGVcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIlN3aXRjaFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGVzdHJveVwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBvd25lciA9IG5hbWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiZGVmYXVsdFZhbHVlXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZGVmYXVsdFZhbHVlXG4gICAgICAgIH0sXG4gICAgICAgIFwibWluU3RhdGVcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBtaW5TdGF0ZVxuICAgICAgICB9LFxuICAgICAgICBcIm1heFN0YXRlXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogbWF4U3RhdGVcbiAgICAgICAgfSxcbiAgICAgICAgXCJ2YWx1ZVwiOiB7XG4gICAgICAgICAgICBcImdldFwiOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYm91bmRBdWRpb1BhcmFtKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRyYW5zbGF0ZSh0aGlzLmJvdW5kQXVkaW9QYXJhbS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBfdmFsdWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJzZXRcIjogZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2V0VmFsdWUuY2FsbCh0aGlzLCB2KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJzZXRWYWx1ZVwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKHYsIHVwZGF0ZUludGVyZmFjZXMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2V0VmFsdWUuY2FsbCh0aGlzLCB2LCB1cGRhdGVJbnRlcmZhY2VzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJpbmNyZW1lbnRcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIHYgPSBfdmFsdWUgKyAxO1xuICAgICAgICAgICAgICAgIGlmICh2ID4gbWF4U3RhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdiA9IG1pblN0YXRlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gc2V0VmFsdWUuY2FsbCh0aGlzLCB2KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJkZWNyZW1lbnRcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIHYgPSBfdmFsdWUgLSAxO1xuICAgICAgICAgICAgICAgIGlmICh2IDwgbWluU3RhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdiA9IG1heFN0YXRlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gc2V0VmFsdWUuY2FsbCh0aGlzLCB2KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJiaW5kVG9BdWRpb1BhcmFtXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKGFwKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBhcCA9PSBcIm9iamVjdFwiICYmIGFwLnZhbHVlICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBhdWRpb1BhcmFtZXRlciA9IGFwO1xuICAgICAgICAgICAgICAgICAgICBhdWRpb1BhcmFtZXRlci52YWx1ZSA9IHRoaXMudXBkYXRlKF92YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhcC5zZXRWYWx1ZUF0VGltZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXV0b21hdGlvbiA9IG5ldyBQYXJhbWV0ZXJTdGVwQXV0b21hdGlvbih0aGlzLCBhdWRpb1BhcmFtZXRlciwgbWluU3RhdGUsIG1heFN0YXRlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImdldFZhbHVlQXRUaW1lUG9pbnRcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKHRpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmF1dG9tYXRpb25Qb2ludHMuZ2V0VmFsdWVBdFRpbWVQb2ludCh0aW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdXRvbWF0aW9uUG9pbnRzXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBhdXRvbWF0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN0YXJ0XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbih0aW1lLCBjb250ZXh0VGltZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGF1dG9tYXRpb24uc3RhcnQodGltZSwgY29udGV4dFRpbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN0b3BcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKGNvbnRleHRUaW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvbWF0aW9uLnN0b3AoY29udGV4dFRpbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImVuYWJsZWRcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImdldFwiOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhdXRvbWF0aW9uLmVuYWJsZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2V0XCI6IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoYXV0b21hdGlvbi5lbmFibGVkID0gdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIkNhbm5vdCBiaW5kIGF1dG9tYXRpb24gYXMgQXVkaW9QYXJhbWV0ZXIgaXMgbm90IGF1dG9tYXRhYmxlXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3coXCJBcmd1bWVudCAxIGlzIG5vdCBhIHZhbGlkIEF1ZGlvUGFyYW1ldGVyIG9iamVjdFwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiYm91bmRBdWRpb1BhcmFtXCI6IHtcbiAgICAgICAgICAgIFwiY29uZmlndXJhYmxlXCI6IHRydWUsXG4gICAgICAgICAgICBcImdldFwiOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGF1ZGlvUGFyYW1ldGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImF1dG9tYXRhYmxlXCI6IHtcbiAgICAgICAgICAgIFwiZ2V0XCI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHlwZW9mIGF1dG9tYXRpb24gIT09IFwib2JqZWN0XCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblN3aXRjaFBhcmFtZXRlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFBsdWdpblBhcmFtZXRlci5wcm90b3R5cGUpO1xuU3dpdGNoUGFyYW1ldGVyLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFN3aXRjaFBhcmFtZXRlcjtcblxuZXhwb3J0IHtTd2l0Y2hQYXJhbWV0ZXJ9O1xuIiwiLy8gVGhpcyBkZWZpbmVzIGEgbWFzdGVyIG9iamVjdCBmb3IgaG9sZGluZyBhbGwgdGhlIHBsdWdpbnMgYW5kIGNvbW11bmljYXRpbmdcbi8vIFRoaXMgb2JqZWN0IHdpbGwgYWxzbyBoYW5kbGUgY3JlYXRpb24gYW5kIGRlc3RydWN0aW9uIG9mIHBsdWdpbnNcbi8qZ2xvYmFscyBQcm9taXNlLCBkb2N1bWVudCwgY29uc29sZSwgTGlua2VkU3RvcmUsIFdvcmtlciwgd2luZG93LCBYTUxIdHRwUmVxdWVzdCAqL1xuLyplc2xpbnQtZW52IGJyb3dzZXIgKi9cbi8qIGpzaGludCBlc3ZlcnNpb246NiAqL1xuXG4vLyBMb2FkIGpzWHRyYWN0XG4oZnVuY3Rpb24oKSB7XG4gICAgaWYgKHdpbmRvdy5qc1h0cmFjdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHZhciBzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcbiAgICAgICAgcy5zcmMgPSBcImh0dHBzOi8vZ2l0Y2RuLnh5ei9yZXBvL25pY2tqaWxsaW5ncy9qcy14dHJhY3QvbWFzdGVyL2pzWHRyYWN0LmpzXCI7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXS5hcHBlbmRDaGlsZChzKTtcbiAgICB9XG59KSgpO1xuXG5pbXBvcnQgTGlua2VkU3RvcmUgZnJvbSAnLi9MaW5rZWRTdG9yZSc7XG5pbXBvcnQge0Jhc2VQbHVnaW59IGZyb20gJy4vYmFzZV9wbHVnaW4nO1xuaW1wb3J0IHtTeW50aGVzaXNlckJhc2VQbHVnaW59IGZyb20gJy4vc3ludGhfYmFzZSc7XG5cbmZ1bmN0aW9uIFBsdWdpbkZhY3RvcnkoYXVkaW9fY29udGV4dCwgcm9vdFVSTCkge1xuICAgIHZhciBzdWJGYWN0b3JpZXMgPSBbXSxcbiAgICBzeW50aGVzaXNlckhvc3RzID0gW10sXG4gICAgcGx1Z2luX3Byb3RvdHlwZXMgPSBbXSxcbiAgICBwbHVnaW5zTGlzdCA9IFtdLFxuICAgIGN1cnJlbnRQbHVnaW5JZCA9IDAsXG4gICAgYXVkaW9TdGFydFByb2dyYW1UaW1lLFxuICAgIGF1ZGlvU3RhcnRDb250ZXh0VGltZSxcbiAgICBhdWRpb1N0YXJ0ZWQgPSBmYWxzZTtcblxuICAgIC8qXG4gICAgICAgIHRoaXMubG9hZFJlc291cmNlLiBMb2FkIGEgcmVzb3VyY2UgaW50byB0aGUgZ2xvYmFsIG5hbWVzcGFjZVxuXG4gICAgICAgIEBwYXJhbSByZXNvdXJjZU9iamVjdDogYSBKUyBvYmplY3QgaG9sZGluZyB0aGUgZm9sbG93aW5nIHBhcmFtZXRlcnM6XG4gICAgICAgICAgICAudXJsOiBVUkwgb2YgdGhlIHJlc291cmNlXG4gICAgICAgICAgICAudGVzdDogZnVuY3Rpb24gdG8gY2FsbCwgcmV0dXJucyB0cnVlIGlmIHJlc291cmNlIGFscmVhZHkgbG9hZGVkLCBmYWxzZSBpZiBub3RcbiAgICAqL1xuICAgIHRoaXMubG9hZFByb3RvdHlwZU1vZHVsZSA9IGZ1bmN0aW9uKHJlc291cmNlT2JqZWN0LCBtdXN0TW9kdWxlKSB7XG4gICAgICAgIHZhciBmYWN0b3J5ID0gdGhpcztcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBnbG9iYWwuZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZ2xvYmFsLmRlZmluZS5hbWQpIHtcbiAgICAgICAgICAgICAgICBnbG9iYWwucmVxdWlyZShbcmVzb3VyY2VPYmplY3QudXJsXSwgZnVuY3Rpb24oZikge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGYpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgZ2xvYmFsLm1vZHVsZSA9PSBcIm9iamVjdFwiICYmIGdsb2JhbC5tb2R1bGUuZXhwb3J0cykge1xuICAgICAgICAgICAgICAgIHJlc29sdmUoZ2xvYmFsLnJlcXVpcmUocmVzb3VyY2VPYmplY3QudXJsKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlamVjdChcIkNhbm5vdCBsb2FkIHVzaW5nIG1vZHVsYXIgc3lzdGVtc1wiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkudGhlbihmdW5jdGlvbihleGVjdXRhYmxlKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGV4ZWN1dGFibGUgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWN0b3J5LmFkZFByb3RvdHlwZShleGVjdXRhYmxlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KFwiSXMgbm90IGEgbW9kdWxlIHBsdWdpblwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAobXVzdE1vZHVsZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHJlamVjdChcIkNhbm5vdCBsb2FkIHVzaW5nIG1vZHVsYXIgc3lzdGVtc1wiKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwiQ291bGQgbm90IGxvYWQgdXNpbmcgbW9kdWxhciBzeXN0ZW1zXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWN0b3J5LmxvYWRQbHVnaW5TY3JpcHQocmVzb3VyY2VPYmplY3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHRoaXMubG9hZFJlc291cmNlID0gZnVuY3Rpb24gKHJlc291cmNlT2JqZWN0KSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcmVzb3VyY2VPYmplY3QgIT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgICAgICByZWplY3QoXCJFcnJvclwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiByZXNvdXJjZU9iamVjdC51cmwgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICByZWplY3QoXCJyZXNvdXJjZU9iamVjdC51cmwgbXVzdCBiZSBhIHN0cmluZ1wiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiByZXNvdXJjZU9iamVjdC50ZXN0ICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICByZWplY3QoXCJyZXNvdXJjZU9iamVjdC50ZXN0IG11c3QgYmUgYSBmdW5jdGlvblwiKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShyZXNvdXJjZU9iamVjdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24ocmVzb3VyY2VPYmplY3Qpe1xuICAgICAgICAgICAgdmFyIHJlc3BvbnNlID0gcmVzb3VyY2VPYmplY3QudGVzdCgpO1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlICE9PSBmYWxzZSAmJiByZXNwb25zZSAhPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHRocm93IChcInJlc291cmNlT2JqZWN0LnRlc3QgbXVzdCByZXR1cm4gdHJ1ZSBvciBmYWxzZVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghcmVzb3VyY2VPYmplY3QudHlwZSkge1xuICAgICAgICAgICAgICAgIHJlc291cmNlT2JqZWN0LnR5cGUgPSBcImphdmFzY3JpcHRcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc291cmNlT2JqZWN0LnR5cGUgPSByZXNvdXJjZU9iamVjdC50eXBlLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICBzd2l0Y2ggKHJlc291cmNlT2JqZWN0LnR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIFwiamF2YXNjcmlwdFwiOlxuICAgICAgICAgICAgICAgICAgICBpZiAoIXJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbG9hZFJlc291cmNlKHJlc291cmNlT2JqZWN0KS50aGVuKGZ1bmN0aW9uIChyZXNvdXJjZU9iamVjdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgcmVzb3VyY2VPYmplY3QucmV0dXJuT2JqZWN0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZXR1cm5PYmplY3Q7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh3aW5kb3cuaGFzT3duUHJvcGVydHkocmVzb3VyY2VPYmplY3QucmV0dXJuT2JqZWN0KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHdpbmRvd1tyZXNvdXJjZU9iamVjdC5yZXR1cm5PYmplY3RdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiByZXNvdXJjZU9iamVjdC5yZXR1cm5PYmplY3QgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5oYXNPd25Qcm9wZXJ0eShyZXNvdXJjZU9iamVjdC5yZXR1cm5PYmplY3QpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHdpbmRvd1tyZXNvdXJjZU9iamVjdC5yZXR1cm5PYmplY3RdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHRocm93IChcIkludmFsaWQgdHlwZSBcIiArIFN0cmluZyhyZXNvdXJjZU9iamVjdC50eXBlKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICB0aGlzLmxvYWRQbHVnaW5TY3JpcHQgPSBmdW5jdGlvbiAocmVzb3VyY2VPYmplY3QpIHtcbiAgICAgICAgaWYgKHJlc291cmNlT2JqZWN0KSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHJlc291cmNlT2JqZWN0LnJldHVybk9iamVjdCAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgIHRocm93IChcInJlc291cmNlT2JqZWN0LnJldHVybk9iamVjdCBtdXN0IGJlIHRoZSBuYW1lIG9mIHRoZSBwcm90b3R5cGUgZnVuY3Rpb25cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5sb2FkUmVzb3VyY2UocmVzb3VyY2VPYmplY3QpLnRoZW4oZnVuY3Rpb24gKHBsdWdpbikge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmFkZFByb3RvdHlwZShwbHVnaW4pO1xuICAgICAgICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBmdW5jdGlvbiBsb2FkUmVzb3VyY2UocmVzb3VyY2VPYmplY3QpIHtcbiAgICAgICAgaWYgKHJlc291cmNlT2JqZWN0LnVybC5zdGFydHNXaXRoKFwiaHR0cFwiKSA9PT0gZmFsc2UgJiYgcm9vdFVSTCAhPT0gdW5kZWZpbmVkICYmIHJvb3RVUkwuc3RhcnRzV2l0aChcImh0dHBcIikpIHtcbiAgICAgICAgICAgIHJlc291cmNlT2JqZWN0LnVybCA9IHJvb3RVUkwgKyByZXNvdXJjZU9iamVjdC51cmw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgICAgIHhoci5vcGVuKFwiR0VUXCIsIHJlc291cmNlT2JqZWN0LnVybCk7XG4gICAgICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PSA0KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuICAgICAgICAgICAgICAgICAgICBzY3JpcHQudGV4dENvbnRlbnQgPSB4aHIucmVzcG9uc2VUZXh0O1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF0uYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXNvdXJjZU9iamVjdCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgeGhyLnNlbmQoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY29weUZhY3RvcnkobmV3Y29udGV4dCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICBpZiAobmV3Y29udGV4dC5zYW1wbGVSYXRlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAvL01heWJlIG5vdCBhIHJlYWwgQXVkaW9Db250ZXh0XG4gICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihcIkludmFsaWQgYXVkaW8gY29udGV4dCBwcm92aWRlZFwiKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlc29sdmUobmV3Y29udGV4dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24obmV3Y29udGV4dCkge1xuICAgICAgICAgICAgdmFyIEJGYWN0b3J5ID0gbmV3IFBsdWdpbkZhY3RvcnkobmV3Y29udGV4dCk7XG4gICAgICAgICAgICB2YXIgcHJvbWlzZXMgPSBbXTtcbiAgICAgICAgICAgIHBsdWdpbl9wcm90b3R5cGVzLmZvckVhY2goZnVuY3Rpb24gKHByb3RvKSB7XG4gICAgICAgICAgICAgICAgcHJvbWlzZXMucHVzaChCRmFjdG9yeS5hZGRQcm90b3R5cGUocHJvdG8ucHJvdG8pKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBCRmFjdG9yeTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uKG5ld0ZhY3RvcnkpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXdGYWN0b3J5O1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB2YXIgUGx1Z2luSW5zdGFuY2UgPSBmdW5jdGlvbiAoaWQsIHBsdWdpbl9ub2RlKSB7XG4gICAgICAgIHRoaXMubmV4dF9ub2RlID0gdW5kZWZpbmVkO1xuICAgICAgICB2YXIgX2J5cGFzc2VkID0gZmFsc2U7XG4gICAgICAgIHZhciBfaW4gPSBhdWRpb19jb250ZXh0LmNyZWF0ZUdhaW4oKSxcbiAgICAgICAgICAgIF9vdXQgPSBhdWRpb19jb250ZXh0LmNyZWF0ZUdhaW4oKTtcblxuICAgICAgICBfaW4uY29ubmVjdChwbHVnaW5fbm9kZS5nZXRJbnB1dHMoKVswXSk7XG4gICAgICAgIHBsdWdpbl9ub2RlLmdldE91dHB1dHMoKVswXS5jb25uZWN0KF9vdXQpO1xuXG4gICAgICAgIGZ1bmN0aW9uIGJ5cGFzc0VuYWJsZSgpIHtcbiAgICAgICAgICAgIF9pbi5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICBfaW4uY29ubmVjdChfb3V0KTtcbiAgICAgICAgICAgIF9ieXBhc3NlZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBieXBhc3NEaXNhYmxlKCkge1xuICAgICAgICAgICAgX2luLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgIF9pbi5jb25uZWN0KHBsdWdpbl9ub2RlLmdldElucHV0cygpWzBdKTtcbiAgICAgICAgICAgIF9ieXBhc3NlZCA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5ieXBhc3MgPSBmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICAgICAgICAgIHN0YXRlID0gKHN0YXRlID09PSB0cnVlKTtcbiAgICAgICAgICAgIGlmIChzdGF0ZSA9PT0gX2J5cGFzc2VkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9ieXBhc3NlZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzdGF0ZSkge1xuICAgICAgICAgICAgICAgIGJ5cGFzc0VuYWJsZSgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBieXBhc3NEaXNhYmxlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gX2J5cGFzc2VkO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuaXNCeXBhc3NlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBfYnlwYXNzZWQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5yZWNvbm5lY3QgPSBmdW5jdGlvbiAobmV3X25leHQpIHtcbiAgICAgICAgICAgIHRoaXMuY29ubmVjdChuZXdfbmV4dCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5jb25uZWN0ID0gZnVuY3Rpb24gKG5ld19uZXh0KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5uZXh0X25vZGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG5ld19uZXh0ICE9PSB1bmRlZmluZWQgJiYgbmV3X25leHQuaW5wdXQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRoaXMubmV4dF9ub2RlID0gbmV3X25leHQ7XG4gICAgICAgICAgICAgICAgX291dC5jb25uZWN0KHRoaXMubmV4dF9ub2RlLmlucHV0KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmRpc2Nvbm5lY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5uZXh0X25vZGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIF9vdXQuZGlzY29ubmVjdCh0aGlzLm5leHRfbm9kZS5pbnB1dCk7XG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0X25vZGUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcGx1Z2luX25vZGUuZGVzdHJveSgpO1xuICAgICAgICB9O1xuXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgICAgICAgICdpZCc6IHtcbiAgICAgICAgICAgICAgICAndmFsdWUnOiBpZFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICdub2RlJzoge1xuICAgICAgICAgICAgICAgICd2YWx1ZSc6IHBsdWdpbl9ub2RlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ2lucHV0Jzoge1xuICAgICAgICAgICAgICAgICdnZXQnOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfaW47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICdvdXRwdXQnOiB7XG4gICAgICAgICAgICAgICAgJ2dldCc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9vdXQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICdieXBhc3NlZCc6IHtcbiAgICAgICAgICAgICAgICAnZ2V0JzogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2J5cGFzc2VkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBQbHVnaW5JbnN0YW5jZS5wcm90b3R5cGUuZmFjdG9yeSA9IHRoaXM7XG5cbiAgICB2YXIgTWlkaVN5bnRoZXNpc0luc3RhbmNlID0gZnVuY3Rpb24oaWQsIHN5bnRoTm9kZSkge1xuICAgICAgICB2YXIgX291dCA9IGF1ZGlvX2NvbnRleHQuY3JlYXRlR2FpbigpO1xuICAgICAgICBzeW50aE5vZGUuZ2V0T3V0cHV0cygpWzBdLmNvbm5lY3QoX291dCk7XG5cbiAgICAgICAgdGhpcy5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc3ludGhOb2RlLmRlc3Ryb3koKTtcbiAgICAgICAgfTtcblxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XG4gICAgICAgICAgICAnaWQnOiB7XG4gICAgICAgICAgICAgICAgJ3ZhbHVlJzogaWRcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAnbm9kZSc6IHtcbiAgICAgICAgICAgICAgICAndmFsdWUnOiBzeW50aE5vZGVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAnb3V0cHV0Jzoge1xuICAgICAgICAgICAgICAgICdnZXQnOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfb3V0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICB2YXIgUGx1Z2luUHJvdG90eXBlID0gZnVuY3Rpb24gKHByb3RvLCBmYWN0b3J5KSB7XG5cdCAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgICAgICAgICduYW1lJzoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBwcm90by5wcm90b3R5cGUubmFtZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICdwcm90byc6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogcHJvdG9cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAndmVyc2lvbic6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogcHJvdG8ucHJvdG90eXBlLnZlcnNpb25cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAndW5pcXVlSUQnOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IHByb3RvLnByb3RvdHlwZS51bmlxdWVJRFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICdoYXNNaWRpSW5wdXQnOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IHByb3RvLnByb3RvdHlwZS5oYXNNaWRpSW5wdXQgfHwgZmFsc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAnaGFzTWlkaU91dHB1dCc6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogcHJvdG8ucHJvdG90eXBlLmhhc01pZGlPdXRwdXQgfHwgZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5jcmVhdGVQbHVnaW5JbnN0YW5jZSA9IGFzeW5jIGZ1bmN0aW9uKG93bmVyLCBhc3luYykge1xuICAgICAgICAgICAgdmFyIHAgPSBjcmVhdGVQbHVnaW5JbnN0YW5jZShvd25lcik7XG4gICAgICAgICAgICBpZiAoYXN5bmMgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgcDtcbiAgICAgICAgICAgICAgICByZXR1cm4gcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBmdW5jdGlvbiBjcmVhdGVQbHVnaW5JbnN0YW5jZShvd25lcikge1xuICAgICAgICAgICAgcmV0dXJuIHdhaXRVbnRpbFJlYWR5KCkudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghY2hlY2tJc1JlYWR5KCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoXCJQbHVnaW4gbm90IHJlYWR5XCIpKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUobmV3IHByb3RvKGZhY3RvcnksIG93bmVyKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbihwbHVnaW4pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KXtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBsdWdpbi5pbml0aWFsaXNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGx1Z2luLmluaXRpYWxpc2UoKS50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocGx1Z2luKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShwbHVnaW4pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uKHBsdWdpbikge1xuICAgICAgICAgICAgICAgIHZhciBub2RlO1xuICAgICAgICAgICAgICAgIGlmIChwbHVnaW4uaGFzTWlkaUlucHV0ICE9PSB0cnVlICYmIHBsdWdpbi5oYXNNaWRpT3V0cHV0ICE9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUgPSBuZXcgUGx1Z2luSW5zdGFuY2UoY3VycmVudFBsdWdpbklkKyssIHBsdWdpbik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwbHVnaW4uaGFzTWlkaUlucHV0ID09PSB0cnVlICYmIHBsdWdpbi5oYXNNaWRpT3V0cHV0ICE9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUgPSBuZXcgTWlkaVN5bnRoZXNpc0luc3RhbmNlKGN1cnJlbnRQbHVnaW5JZCsrLCBwbHVnaW4pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93KFwiTm8gSW5zdGFuY2UgSG9sZGVyIEF2YWlsYWJsZSFcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHBsdWdpbiwge1xuICAgICAgICAgICAgICAgICAgICAncGx1Z2luSW5zdGFuY2UnOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAndmFsdWUnOiBub2RlXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICdwcm90b3R5cGVPYmplY3QnOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAndmFsdWUnOiBzZWxmXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICduYW1lJzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHByb3RvLnByb3RvdHlwZS5uYW1lXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICd2ZXJzaW9uJzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHByb3RvLnByb3RvdHlwZS52ZXJzaW9uXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICd1bmlxdWVJRCc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBwcm90by5wcm90b3R5cGUudW5pcXVlSURcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgJ1Nlc2lvbkRhdGEnOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogZmFjdG9yeS5TZXNzaW9uRGF0YVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAnVXNlckRhdGEnOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogZmFjdG9yeS5Vc2VyRGF0YVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMobm9kZSwge1xuICAgICAgICAgICAgICAgICAgICBcInByb3RvdHlwZU9iamVjdFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAndmFsdWUnOiBzZWxmXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFwiZXh0ZXJuYWxJbnRlcmZhY2VcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ3ZhbHVlJzogcGx1Z2luLmV4dGVybmFsSW50ZXJmYWNlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBmYWN0b3J5LnJlZ2lzdGVyUGx1Z2luSW5zdGFuY2Uobm9kZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGxvYWRSZXNvdXJjZUNoYWluKHJlc291cmNlT2JqZWN0LCBwKSB7XG4gICAgICAgICAgICBpZiAoIXApIHtcbiAgICAgICAgICAgICAgICB2YXIgayA9IGxvYWRSZXNvdXJjZShyZXNvdXJjZU9iamVjdCk7XG4gICAgICAgICAgICAgICAgay50aGVuKGZ1bmN0aW9uIChyZXNvdXJjZU9iamVjdCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzb3VyY2VPYmplY3QucmVzb3VyY2VzICE9PSB1bmRlZmluZWQgJiYgcmVzb3VyY2VPYmplY3QucmVzb3VyY2VzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVzb3VyY2VPYmplY3QucmVzb3VyY2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgayA9IGxvYWRSZXNvdXJjZUNoYWluKHJlc291cmNlT2JqZWN0LnJlc291cmNlc1tpXSwgayk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gaztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHAudGhlbihsb2FkUmVzb3VyY2UocmVzb3VyY2VPYmplY3QpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGxvYWRTdHlsZXNoZWV0KHVybCkge1xuICAgICAgICAgICAgdmFyIGNzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuICAgICAgICAgICAgY3NzLnNldEF0dHJpYnV0ZShcInJlbFwiLCBcInN0eWxlc2hlZXRcIik7XG4gICAgICAgICAgICBjc3Muc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHQvY3NzXCIpO1xuICAgICAgICAgICAgY3NzLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgdXJsKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXS5hcHBlbmRDaGlsZChjc3MpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gcmVjdXJzaXZlR2V0VGVzdChyZXNvdXJjZU9iamVjdCkge1xuICAgICAgICAgICAgaWYgKHJlc291cmNlT2JqZWN0Lmhhc093blByb3BlcnR5KFwibGVuZ3RoXCIpICYmIHJlc291cmNlT2JqZWN0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVjdXJzaXZlR2V0VGVzdChyZXNvdXJjZU9iamVjdFtyZXNvdXJjZU9iamVjdC5sZW5ndGggLSAxXSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlc291cmNlT2JqZWN0Lmhhc093blByb3BlcnR5KFwicmVzb3VyY2VzXCIpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlY3Vyc2l2ZUdldFRlc3QocmVzb3VyY2VPYmplY3QucmVzb3VyY2VzKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc291cmNlT2JqZWN0LnRlc3Q7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcmVzb3VyY2VQcm9taXNlcyA9IFtdO1xuICAgICAgICBpZiAocHJvdG8ucHJvdG90eXBlLnJlc291cmNlcykge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm90by5wcm90b3R5cGUucmVzb3VyY2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJlc291cmNlID0gcHJvdG8ucHJvdG90eXBlLnJlc291cmNlc1tpXTtcbiAgICAgICAgICAgICAgICByZXNvdXJjZS50eXBlID0gcmVzb3VyY2UudHlwZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgICAgIHN3aXRjaCAocmVzb3VyY2UudHlwZSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiY3NzXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkU3R5bGVzaGVldChyZXNvdXJjZS51cmwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJqYXZhc2NyaXB0XCI6XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgb2JqZWN0ID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdwcm9taXNlJzogbG9hZFJlc291cmNlQ2hhaW4ocmVzb3VyY2UpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdzdGF0ZSc6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NvbXBsZXRlJzogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlID0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0ZXN0JzogcmVjdXJzaXZlR2V0VGVzdChyZXNvdXJjZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICBvYmplY3QucHJvbWlzZS50aGVuKG9iamVjdC5jb21wbGV0ZS5iaW5kKG9iamVjdCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb3VyY2VQcm9taXNlcy5wdXNoKG9iamVjdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IChcIkNvdWxkIG5vdCBsb2FkIFwiICsgcmVzb3VyY2UudXJsICsgXCIsIGludmFsaWQgcmVzb3VyY2UudHlwZVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmdldFJlc291cmNlUHJvbWlzZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzb3VyY2VQcm9taXNlcztcbiAgICAgICAgfTtcbiAgICAgICAgZnVuY3Rpb24gY2hlY2tJc1JlYWR5KCkge1xuICAgICAgICAgICAgdmFyIHN0YXRlID0gdHJ1ZTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVzb3VyY2VQcm9taXNlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChyZXNvdXJjZVByb21pc2VzW2ldLnN0YXRlICE9PSAxIHx8ICFyZXNvdXJjZVByb21pc2VzW2ldLnRlc3QoKSkge1xuICAgICAgICAgICAgICAgICAgICBzdGF0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICAgIH07XG4gICAgICAgIGZ1bmN0aW9uIHdhaXRVbnRpbFJlYWR5KCkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHJlc291cmNlUHJvbWlzZXMpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHRoaXMuYWRkUHJvdG90eXBlID0gZnVuY3Rpb24gKHBsdWdpbl9wcm90bykge1xuICAgICAgICB2YXIgZmFjdG9yeSA9IHRoaXM7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcGx1Z2luX3Byb3RvICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICByZWplY3QoXCJUaGUgUHJvdG90eXBlIG11c3QgYmUgYSBmdW5jdGlvbiFcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgcGx1Z2luX3Byb3RvLnByb3RvdHlwZS5uYW1lICE9PSBcInN0cmluZ1wiIHx8IHBsdWdpbl9wcm90by5wcm90b3R5cGUubmFtZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICByZWplY3QoXCJNYWxmb3JtZWQgcGx1Z2luLiBOYW1lIG5vdCBkZWZpbmVkXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodHlwZW9mIHBsdWdpbl9wcm90by5wcm90b3R5cGUudmVyc2lvbiAhPT0gXCJzdHJpbmdcIiB8fCBwbHVnaW5fcHJvdG8ucHJvdG90eXBlLnZlcnNpb24ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KFwiTWFsZm9ybWVkIHBsdWdpbi4gVmVyc2lvbiBub3QgZGVmaW5lZFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiBwbHVnaW5fcHJvdG8ucHJvdG90eXBlLnVuaXF1ZUlEICE9PSBcInN0cmluZ1wiIHx8IHBsdWdpbl9wcm90by5wcm90b3R5cGUudW5pcXVlSUQubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KFwiTWFsZm9ybWVkIHBsdWdpbi4gdW5pcXVlSUQgbm90IGRlZmluZWRcIik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlc29sdmUocGx1Z2luX3Byb3RvKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkudGhlbihmdW5jdGlvbihwbHVnaW5fcHJvdG8pIHtcbiAgICAgICAgICAgIHZhciB0ZXN0T2JqID0ge1xuICAgICAgICAgICAgICAgICdwcm90byc6IHBsdWdpbl9wcm90byxcbiAgICAgICAgICAgICAgICAnbmFtZSc6IHBsdWdpbl9wcm90by5wcm90b3R5cGUubmFtZSxcbiAgICAgICAgICAgICAgICAndmVyc2lvbic6IHBsdWdpbl9wcm90by5wcm90b3R5cGUudmVyc2lvbixcbiAgICAgICAgICAgICAgICAndW5pcXVlSUQnOiBwbHVnaW5fcHJvdG8ucHJvdG90eXBlLnVuaXF1ZUlEXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdmFyIG9iaiA9IHBsdWdpbl9wcm90b3R5cGVzLmZpbmQoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgcGFyYW07XG4gICAgICAgICAgICAgICAgdmFyIG1hdGNoID0gMDtcbiAgICAgICAgICAgICAgICBmb3IgKHBhcmFtIGluIHRoaXMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVbcGFyYW1dID09PSB0aGlzW3BhcmFtXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2grKztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gbWF0Y2ggPT09IDQ7XG4gICAgICAgICAgICB9LCB0ZXN0T2JqKTtcbiAgICAgICAgICAgIGlmIChvYmopIHtcbiAgICAgICAgICAgICAgICB0aHJvdyAoXCJUaGUgcGx1Z2luIG11c3QgYmUgdW5pcXVlIVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9iaiA9IG5ldyBQbHVnaW5Qcm90b3R5cGUocGx1Z2luX3Byb3RvLCBmYWN0b3J5KTtcbiAgICAgICAgICAgIHBsdWdpbl9wcm90b3R5cGVzLnB1c2gob2JqKTtcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKG9iaiwge1xuICAgICAgICAgICAgICAgICdmYWN0b3J5Jzoge1xuICAgICAgICAgICAgICAgICAgICAndmFsdWUnOiBmYWN0b3J5XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gb2JqO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgdGhpcy5nZXRQcm90b3R5cGVzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcGx1Z2luX3Byb3RvdHlwZXM7XG4gICAgfTtcblxuICAgIHRoaXMuZ2V0QXVkaW9QbHVnaW5Qcm90b3R5cGVzID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBwbHVnaW5fcHJvdG90eXBlcy5maWx0ZXIoZnVuY3Rpb24ocHJvdG8pIHtcbiAgICAgICAgICAgIHJldHVybiBwcm90by5oYXNNaWRpSW5wdXQgPT0gZmFsc2UgJiYgcHJvdG8uaGFzTWlkaU91dHB1dCA9PSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIHRoaXMuZ2V0TWlkaVN5bnRoUHJvdG90eXBlcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gcGx1Z2luX3Byb3RvdHlwZXMuZmlsdGVyKGZ1bmN0aW9uKHByb3RvKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvdG8uaGFzTWlkaUlucHV0ID09IHRydWUgJiYgcHJvdG8uaGFzTWlkaU91dHB1dCA9PSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIHRoaXMuZ2V0TWlkaVBsdWdpblByb3RvdHlwZXMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHBsdWdpbl9wcm90b3R5cGVzLmZpbHRlcihmdW5jdGlvbihwcm90bykge1xuICAgICAgICAgICAgcmV0dXJuIHByb3RvLmhhc01pZGlJbnB1dCA9PSB0cnVlICYmIHByb3RvLmhhc01pZGlPdXRwdXQgPT0gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIHRoaXMuZ2V0QWxsUGx1Z2lucyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHBsdWdpbnNMaXN0O1xuICAgIH07XG5cbiAgICB0aGlzLmdldEFsbFBsdWdpbnNPYmplY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBvYmogPSB7XG4gICAgICAgICAgICAgICAgJ2ZhY3RvcnknOiB0aGlzLFxuICAgICAgICAgICAgICAgICdzdWJGYWN0b3JpZXMnOiBbXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGk7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBzdWJGYWN0b3JpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIG9iai5zdWJGYWN0b3JpZXMucHVzaCh7XG4gICAgICAgICAgICAgICAgJ3N1YkZhY3RvcnknOiBzdWJGYWN0b3JpZXNbaV0sXG4gICAgICAgICAgICAgICAgJ3BsdWdpbnMnOiBzdWJGYWN0b3JpZXNbaV0uZ2V0UGx1Z2lucygpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb2JqO1xuICAgIH07XG5cbiAgICB0aGlzLmNyZWF0ZVN1YkZhY3RvcnkgPSBmdW5jdGlvbihjaGFpblN0YXJ0LCBjaGFpblN0b3ApIHtcbiAgICAgICAgY29uc29sZS53YXJuKFwiREVQUkVDQVRFRCAtIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBkZXByZWNhdGVkIGluIGZhdm91ciBvZiBcXFwiY3JlYXRlQXVkaW9QbHVnaW5DaGFpbk1hbmFnZXJcXFwiXCIpO1xuICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVBdWRpb1BsdWdpbkNoYWluTWFuYWdlcihjaGFpblN0YXJ0LCBjaGFpblN0b3ApO1xuICAgIH07XG5cbiAgICB0aGlzLmRlc3Ryb3lTdWJGYWN0b3J5ID0gZnVuY3Rpb24oY2hhaW5TdGFydCwgY2hhaW5TdG9wKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcIkRFUFJFQ0FURUQgLSBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgZGVwcmVjYXRlZCBpbiBmYXZvdXIgb2YgXFxcImRlc3Ryb3lBdWRpb1BsdWdpbkNoYWluTWFuYWdlclxcXCJcIik7XG4gICAgICAgIHJldHVybiB0aGlzLmRlc3Ryb3lBdWRpb1BsdWdpbkNoYWluTWFuYWdlcihjaGFpblN0YXJ0LCBjaGFpblN0b3ApO1xuICAgIH07XG5cbiAgICB0aGlzLmNyZWF0ZUF1ZGlvUGx1Z2luQ2hhaW5NYW5hZ2VyID0gZnVuY3Rpb24gKGNoYWluU3RhcnQsIGNoYWluU3RvcCkge1xuICAgICAgICB2YXIgbm9kZSA9IG5ldyBBdWRpb1BsdWdpbkNoYWluTWFuYWdlcih0aGlzLCBjaGFpblN0YXJ0LCBjaGFpblN0b3ApO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhub2RlLCB7XG4gICAgICAgICAgICAnU2Vzc2lvbkRhdGEnOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IHRoaXMuU2Vzc2lvbkRhdGFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAnVXNlckRhdGEnOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IHRoaXMuVXNlckRhdGFcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHN1YkZhY3Rvcmllcy5wdXNoKG5vZGUpO1xuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9O1xuXG4gICAgdGhpcy5kdXBsaWNhdGVBdWRpb1BsdWdpbkNoYWluTWFuYWdlciA9IGZ1bmN0aW9uKHNvdXJjZUNoYWluTWFuYWdlciwgY2hhaW5TdGFydCwgY2hhaW5TdG9wKSB7XG4gICAgICAgIHZhciBub2RlID0gdGhpcy5jcmVhdGVBdWRpb1BsdWdpbkNoYWluTWFuYWdlcihjaGFpblN0YXJ0LCBjaGFpblN0b3ApO1xuICAgICAgICB2YXIgcHJvbWlzZUNoYWluID0gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgIHNvdXJjZUNoYWluTWFuYWdlci5nZXRQbHVnaW5zKCkuZm9yRWFjaChmdW5jdGlvbihwbHVnaW5fb2JqZWN0KSB7XG4gICAgICAgICAgICBwcm9taXNlQ2hhaW4gPSBwcm9taXNlQ2hhaW4udGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbm9kZS5jcmVhdGVQbHVnaW4ocGx1Z2luX29iamVjdC5wcm90b3R5cGVPYmplY3QpXG4gICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24obmV3UGx1Z2luKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld1BsdWdpbi5ub2RlLnBhcmFtZXRlcnMuc2V0UGFyYW1ldGVyc0J5T2JqZWN0KHBsdWdpbl9vYmplY3Qubm9kZS5wYXJhbWV0ZXJzLmdldFBhcmFtZXRlck9iamVjdCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBwcm9taXNlQ2hhaW4udGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiBub2RlO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgdGhpcy5kZXN0cm95QXVkaW9QbHVnaW5DaGFpbk1hbmFnZXIgPSBmdW5jdGlvbiAoU3ViRmFjdG9yeSkge1xuICAgICAgICB2YXIgaW5kZXggPSBzdWJGYWN0b3JpZXMuZmluZEluZGV4KGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgICBpZiAoZWxlbWVudCA9PT0gdGhpcykge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9LCBTdWJGYWN0b3J5KTtcbiAgICAgICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgICAgICAgIHN1YkZhY3Rvcmllcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgU3ViRmFjdG9yeS5kZXN0cm95KCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgdGhpcy5jcmVhdGVNaWRpU3ludGhlc2lzZXJIb3N0ID0gZnVuY3Rpb24oZmFjdG9yeSkge1xuICAgICAgICB2YXIgaG9zdCA9IG5ldyBNaWRpU3ludGhlc2lzZXJIb3N0KGZhY3RvcnkpO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhob3N0LCB7XG4gICAgICAgICAgICAnU2Vzc2lvbkRhdGEnOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IHRoaXMuU2Vzc2lvbkRhdGFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAnVXNlckRhdGEnOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IHRoaXMuVXNlckRhdGFcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHN5bnRoZXNpc2VySG9zdHMucHVzaChob3N0KTtcbiAgICAgICAgcmV0dXJuIGhvc3Q7XG4gICAgfTtcblxuICAgIHRoaXMuZGVzdHJveU1pZGlTeW50aGVzaXNlckhvc3QgPSBmdW5jdGlvbiAoaG9zdCkge1xuICAgICAgICB2YXIgaW5kZXggPSBzeW50aGVzaXNlckhvc3RzLmZpbmRJbmRleChmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQgPT09IHRoaXMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSwgaG9zdCk7XG4gICAgICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICAgICAgICBzeW50aGVzaXNlckhvc3RzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICBob3N0LmRlc3Ryb3koKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB0aGlzLnJlZ2lzdGVyUGx1Z2luSW5zdGFuY2UgPSBmdW5jdGlvbiAoaW5zdGFuY2UpIHtcbiAgICAgICAgaWYgKHBsdWdpbnNMaXN0LmZpbmQoZnVuY3Rpb24gKHApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcCA9PT0gdGhpcztcbiAgICAgICAgICAgIH0sIGluc3RhbmNlKSkge1xuICAgICAgICAgICAgdGhyb3cgKFwiUGx1Z2luIEluc3RhbmNlIG5vdCB1bmlxdWVcIik7XG4gICAgICAgIH1cbiAgICAgICAgcGx1Z2luc0xpc3QucHVzaChpbnN0YW5jZSk7XG4gICAgICAgIGlmIChhdWRpb1N0YXJ0ZWQpIHtcbiAgICAgICAgICAgIHZhciBjb250ZXh0X3RpbWUgPSBhdWRpb19jb250ZXh0LmN1cnJlbnRUaW1lO1xuICAgICAgICAgICAgdmFyIHByb2dyYW1fdGltZSA9IHRoaXMuZ2V0Q3VycmVudFByb2dyYW1UaW1lKCk7XG4gICAgICAgICAgICBwbHVnaW5BdWRpb1N0YXJ0KGluc3RhbmNlLm5vZGUsIHByb2dyYW1fdGltZSwgY29udGV4dF90aW1lKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xuXG4gICAgdGhpcy5kZWxldGVQbHVnaW4gPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgdmFyIGluZGV4ID0gcGx1Z2luc0xpc3QuZmluZEluZGV4KGZ1bmN0aW9uIChwKSB7XG4gICAgICAgICAgICByZXR1cm4gcC5pZCA9PT0gaWQ7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoaW5kZXggPj0gMCkge1xuICAgICAgICAgICAgdmFyIHAgPSBwbHVnaW5zTGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgcFswXS5ub2RlLmV4dGVybmFsSW50ZXJmYWNlLmNsb3NlV2luZG93cygpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHRoaXMuZ2V0Q3VycmVudFByb2dyYW1UaW1lID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmIChhdWRpb1N0YXJ0ZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBhdWRpb19jb250ZXh0LmN1cnJlbnRUaW1lIC0gYXVkaW9TdGFydENvbnRleHRUaW1lICsgYXVkaW9TdGFydFByb2dyYW1UaW1lO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGF1ZGlvU3RhcnRQcm9ncmFtVGltZVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIHRoaXMuc2V0Q3VycmVudFByb2dyYW1UaW1lID0gZnVuY3Rpb24odGltZSkge1xuICAgICAgICBpZiAoYXVkaW9TdGFydGVkKSB7XG4gICAgICAgICAgICB0aHJvdyhcIk11c3Qgc3RvcCBwbGF5YmFjayB0byBzZXQgdGhlIGN1cnJlbnQgcHJvZ3JhbSB0aW1lXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgdGltZSA9PSBcIm51bWJlclwiICYmIHRpbWUgPj0gMCkge1xuICAgICAgICAgICAgYXVkaW9TdGFydFByb2dyYW1UaW1lID0gdGltZTtcbiAgICAgICAgICAgIHRoaXMuUGx1Z2luR1VJLnBvbGxBbGxQbHVnaW5zKCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gcGx1Z2luQXVkaW9TdGFydChub2RlLCBwcm9ncmFtX3RpbWUsIGNvbnRleHRfdGltZSkge1xuICAgICAgICBub2RlLnN0YXJ0LmNhbGwobm9kZSwgcHJvZ3JhbV90aW1lLCBjb250ZXh0X3RpbWUpO1xuICAgICAgICBub2RlLnBhcmFtZXRlcnMuZ2V0UGFyYW1ldGVyTmFtZXMoKS5mb3JFYWNoKGZ1bmN0aW9uKG4pIHtcbiAgICAgICAgICAgIHZhciBwID0gbm9kZS5wYXJhbWV0ZXJzLmdldFBhcmFtZXRlckJ5TmFtZShuKTtcbiAgICAgICAgICAgIGlmIChwLmVuYWJsZWQpIHtcbiAgICAgICAgICAgICAgICBwLnN0YXJ0KHByb2dyYW1fdGltZSwgY29udGV4dF90aW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGx1Z2luQXVkaW9TdG9wKG5vZGUpIHtcbiAgICAgICAgbm9kZS5zdG9wLmNhbGwobm9kZSk7XG4gICAgICAgIG5vZGUucGFyYW1ldGVycy5nZXRQYXJhbWV0ZXJOYW1lcygpLmZvckVhY2goZnVuY3Rpb24obikge1xuICAgICAgICAgICAgdmFyIHAgPSBub2RlLnBhcmFtZXRlcnMuZ2V0UGFyYW1ldGVyQnlOYW1lKG4pO1xuICAgICAgICAgICAgaWYgKHAuZW5hYmxlZCkge1xuICAgICAgICAgICAgICAgIHAuc3RvcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0cmlnZ2VyQXVkaW9TdGFydChwcm9ncmFtX3RpbWUsIGNvbnRleHRfdGltZSkge1xuICAgICAgICBwbHVnaW5zTGlzdC5mb3JFYWNoKGZ1bmN0aW9uIChuKSB7XG4gICAgICAgICAgICBwbHVnaW5BdWRpb1N0YXJ0KG4ubm9kZSwgcHJvZ3JhbV90aW1lLCBjb250ZXh0X3RpbWUpO1xuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRyaWdnZXJBdWRpb1N0b3AoKSB7XG4gICAgICAgIHBsdWdpbnNMaXN0LmZvckVhY2goZnVuY3Rpb24gKG4pIHtcbiAgICAgICAgICAgIHBsdWdpbkF1ZGlvU3RvcChuLm5vZGUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLmF1ZGlvU3RhcnQgPSBmdW5jdGlvbiAocHJvZ3JhbV90aW1lLCBjb250ZXh0X3RpbWUpIHtcbiAgICAgICAgaWYgKGNvbnRleHRfdGltZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjb250ZXh0X3RpbWUgPSBhdWRpb19jb250ZXh0LmN1cnJlbnRUaW1lO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9ncmFtX3RpbWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcHJvZ3JhbV90aW1lID0gMDtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcIkFzc3VtaW5nIHN0YXJ0IHRpbWUgYXQgMFwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWF1ZGlvU3RhcnRlZCkge1xuICAgICAgICAgICAgdGhpcy5zZXRDdXJyZW50UHJvZ3JhbVRpbWUocHJvZ3JhbV90aW1lKTtcbiAgICAgICAgICAgIGF1ZGlvU3RhcnRDb250ZXh0VGltZSA9IGNvbnRleHRfdGltZTtcbiAgICAgICAgICAgIHRyaWdnZXJBdWRpb1N0YXJ0KHByb2dyYW1fdGltZSwgY29udGV4dF90aW1lKTtcbiAgICAgICAgICAgIGF1ZGlvU3RhcnRlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMuYXVkaW9TdG9wID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoYXVkaW9TdGFydGVkKSB7XG4gICAgICAgICAgICB0cmlnZ2VyQXVkaW9TdG9wKCk7XG4gICAgICAgICAgICBhdWRpb1N0YXJ0ZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgRmVhdHVyZU1hcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIE1hcHBpbmdzID0gW107XG5cbiAgICAgICAgdmFyIEZlYXR1cmVOb2RlID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgIHRoaXMubmFtZSA9IG5vZGUubmFtZTtcbiAgICAgICAgICAgIHRoaXMucGFyYW1ldGVycyA9IHRoaXMucGFyYW1ldGVycztcbiAgICAgICAgICAgIHRoaXMuZmVhdHVyZXMgPSBbXTtcbiAgICAgICAgfTtcblxuICAgICAgICBmdW5jdGlvbiBnZXRGZWF0dXJlTm9kZShsaXN0LCBjaGVjaykge1xuICAgICAgICAgICAgcmV0dXJuIGxpc3QuZmluZChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBlLm5hbWUgPT09IHRoaXMubmFtZTtcbiAgICAgICAgICAgIH0sIGNoZWNrKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGFkZEZlYXR1cmVOb2RlKGZlYXR1cmVOb2RlLCBsaXN0KSB7XG4gICAgICAgICAgICB2YXIgbm9kZSA9IG5ldyBGZWF0dXJlTm9kZShmZWF0dXJlTm9kZSk7XG4gICAgICAgICAgICBsaXN0LnB1c2gobm9kZSk7XG4gICAgICAgICAgICByZXR1cm4gbm9kZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBTb3VyY2VNYXAgPSBmdW5jdGlvbiAoU2VuZGVyLCBwbHVnaW5JbnN0YWNlKSB7XG4gICAgICAgICAgICB2YXIgTWFwcGluZ3MgPSBbXTtcbiAgICAgICAgICAgIHRoaXMuZ2V0U291cmNlSW5zdGFuY2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBsdWdpbkluc3RhY2U7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdGhpcy5nZXRTZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFNlbmRlcjtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGZpbmRGZWF0dXJlT2JqZWN0KGZlYXR1cmVPYmplY3QpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gTWFwcGluZ3MuZmluZChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKGUub3V0cHV0SW5kZXggPT09IHRoaXMub3V0cHV0SW5kZXggJiYgZS5mcmFtZVNpemUgPT09IHRoaXMuZnJhbWVTaXplKTtcbiAgICAgICAgICAgICAgICB9LCBmZWF0dXJlT2JqZWN0KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gdXBkYXRlU2VuZGVyKCkge1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHJlY3Vyc2l2ZUZpbmQoZmVhdHVyZUxpc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGYsIGxpc3QgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChmID0gMDsgZiA8IGZlYXR1cmVMaXN0Lmxlbmd0aDsgZisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZmVhdHVyZU5vZGUgPSBnZXRGZWF0dXJlTm9kZShsaXN0LCBmZWF0dXJlTGlzdFtmXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWZlYXR1cmVOb2RlIHx8IChmZWF0dXJlTGlzdC5wYXJhbWV0ZXJzICYmIGZlYXR1cmVMaXN0W2ZdLnBhcmFtZXRlcnMubGVuZ3RoICE9PSAwKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZlYXR1cmVOb2RlID0gYWRkRmVhdHVyZU5vZGUoZmVhdHVyZUxpc3RbZl0sIGxpc3QpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZlYXR1cmVMaXN0W2ZdLmZlYXR1cmVzICYmIGZlYXR1cmVMaXN0W2ZdLmZlYXR1cmVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZWF0dXJlTm9kZS5mZWF0dXJlcyA9IHJlY3Vyc2l2ZUZpbmQoZmVhdHVyZUxpc3RbZl0uZmVhdHVyZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBsaXN0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgaSwgb3V0cHV0TGlzdCA9IFtdO1xuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBNYXBwaW5ncy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAob3V0cHV0TGlzdFtNYXBwaW5nc1tpXS5vdXRwdXRJbmRleF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0TGlzdFtNYXBwaW5nc1tpXS5vdXRwdXRJbmRleF0gPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB2YXIgZnJhbWVMaXN0ID0gb3V0cHV0TGlzdFtNYXBwaW5nc1tpXS5vdXRwdXRJbmRleF0uZmluZChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGUuZnJhbWVTaXplID09PSB0aGlzLmZyYW1lU2l6ZTtcbiAgICAgICAgICAgICAgICAgICAgfSwgTWFwcGluZ3NbaV0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWZyYW1lTGlzdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZnJhbWVMaXN0ID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdmcmFtZVNpemUnOiBNYXBwaW5nc1tpXS5mcmFtZVNpemUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2ZlYXR1cmVMaXN0JzogdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0TGlzdFtNYXBwaW5nc1tpXS5vdXRwdXRJbmRleF0ucHVzaChmcmFtZUxpc3QpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGZyYW1lTGlzdC5mZWF0dXJlTGlzdCA9IHJlY3Vyc2l2ZUZpbmQoTWFwcGluZ3NbaV0uZ2V0RmVhdHVyZUxpc3QoKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFNlbmRlci51cGRhdGVGZWF0dXJlcyhvdXRwdXRMaXN0KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5yZXF1ZXN0RmVhdHVyZXMgPSBmdW5jdGlvbiAocmVxdWVzdG9ySW5zdGFuY2UsIGZlYXR1cmVPYmplY3QpIHtcbiAgICAgICAgICAgICAgICB2YXIgbWFwID0gZmluZEZlYXR1cmVPYmplY3QoZmVhdHVyZU9iamVjdCk7XG4gICAgICAgICAgICAgICAgaWYgKCFtYXApIHtcbiAgICAgICAgICAgICAgICAgICAgbWFwID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ291dHB1dEluZGV4JzogZmVhdHVyZU9iamVjdC5vdXRwdXRJbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICdmcmFtZVNpemUnOiBmZWF0dXJlT2JqZWN0LmZyYW1lU2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICdyZXF1ZXN0b3JzJzogW10sXG4gICAgICAgICAgICAgICAgICAgICAgICAnZ2V0RmVhdHVyZUxpc3QnOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIEYgPSBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5yZXF1ZXN0b3JzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEYgPSBGLmNvbmNhdCh0aGlzLnJlcXVlc3RvcnNbaV0uZ2V0RmVhdHVyZUxpc3QoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBGO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBNYXBwaW5ncy5wdXNoKG1hcCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciByZXF1ZXN0b3IgPSBtYXAucmVxdWVzdG9ycy5maW5kKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlLmdldFJlcXVlc3Rvckluc3RhbmNlKCkgPT09IHRoaXM7XG4gICAgICAgICAgICAgICAgfSwgcmVxdWVzdG9ySW5zdGFuY2UpO1xuICAgICAgICAgICAgICAgIGlmICghcmVxdWVzdG9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3RvciA9IG5ldyBSZXF1ZXN0b3JNYXAocmVxdWVzdG9ySW5zdGFuY2UpO1xuICAgICAgICAgICAgICAgICAgICBtYXAucmVxdWVzdG9ycy5wdXNoKHJlcXVlc3Rvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlcXVlc3Rvci5hZGRGZWF0dXJlcyhmZWF0dXJlT2JqZWN0KTtcbiAgICAgICAgICAgICAgICB1cGRhdGVTZW5kZXIoKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHRoaXMuZmluZEZyYW1lTWFwID0gZnVuY3Rpb24gKG91dHB1dEluZGV4LCBmcmFtZVNpemUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gTWFwcGluZ3MuZmluZChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKGUub3V0cHV0SW5kZXggPT09IG91dHB1dEluZGV4ICYmIGUuZnJhbWVTaXplID09PSBmcmFtZVNpemUpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdGhpcy5jYW5jZWxGZWF0dXJlcyA9IGZ1bmN0aW9uIChyZXF1ZXN0b3JJbnN0YW5jZSwgZmVhdHVyZU9iamVjdCkge1xuICAgICAgICAgICAgICAgIGlmIChmZWF0dXJlT2JqZWN0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgTWFwcGluZ3MuZm9yRWFjaChmdW5jdGlvbiAobWFwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVxdWVzdG9ySW5kZXggPSBtYXAucmVxdWVzdG9ycy5maW5kSW5kZXgoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZS5nZXRSZXF1ZXN0b3JJbnN0YW5jZSgpID09PSByZXF1ZXN0b3JJbnN0YW5jZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlcXVlc3RvckluZGV4ID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXAucmVxdWVzdG9ycy5zcGxpY2UocmVxdWVzdG9ySW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbWFwID0gZmluZEZlYXR1cmVPYmplY3QoZmVhdHVyZU9iamVjdCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghbWFwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlcXVlc3RvciA9IG1hcC5yZXF1ZXN0b3JzLmZpbmQoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlLmdldFJlcXVlc3Rvckluc3RhbmNlKCkgPT09IHRoaXM7XG4gICAgICAgICAgICAgICAgICAgIH0sIHJlcXVlc3Rvckluc3RhbmNlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFyZXF1ZXN0b3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0b3IuZGVsZXRlRmVhdHVyZXMoZmVhdHVyZU9iamVjdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHVwZGF0ZVNlbmRlcigpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIFJlcXVlc3Rvck1hcCA9IGZ1bmN0aW9uIChwbHVnaW5JbnN0YW5jZSkge1xuICAgICAgICAgICAgdmFyIEZlYXR1cmVzID0gW107XG4gICAgICAgICAgICB2YXIgUmVjZWl2ZXIgPSBwbHVnaW5JbnN0YW5jZS5ub2RlLmZlYXR1cmVNYXAuUmVjZWl2ZXI7XG4gICAgICAgICAgICB0aGlzLmdldFJlcXVlc3Rvckluc3RhbmNlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBwbHVnaW5JbnN0YW5jZTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIHJlY3Vyc2l2ZWx5QWRkRmVhdHVyZXMocm9vdEFycmF5LCBmZWF0dXJlT2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgdmFyIGk7XG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGZlYXR1cmVPYmplY3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQ2hlY2sgd2UgaGF2ZSBub3QgYWxyZWFkeSBsaXN0ZWQgdGhlIGZlYXR1cmVcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZlYXR1cmVOb2RlID0gZ2V0RmVhdHVyZU5vZGUocm9vdEFycmF5LCBmZWF0dXJlT2JqZWN0W2ldKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFmZWF0dXJlTm9kZSB8fCAoZmVhdHVyZU9iamVjdFtpXS5wYXJhbWV0ZXJzICYmIGZlYXR1cmVPYmplY3RbaV0ucGFyYW1ldGVycy5sZW5ndGggIT09IDApKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmZWF0dXJlTm9kZSA9IGFkZEZlYXR1cmVOb2RlKGZlYXR1cmVPYmplY3RbaV0sIHJvb3RBcnJheSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGZlYXR1cmVPYmplY3RbaV0uZmVhdHVyZXMgIT09IHVuZGVmaW5lZCAmJiBmZWF0dXJlT2JqZWN0W2ldLmZlYXR1cmVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlY3Vyc2l2ZWx5QWRkRmVhdHVyZXMoZmVhdHVyZU5vZGUuZmVhdHVyZXMsIGZlYXR1cmVPYmplY3RbaV0uZmVhdHVyZXMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiByZWN1cnNpdmVseURlbGV0ZUZlYXR1cmVzKHJvb3RBcnJheSwgZmVhdHVyZU9iamVjdCkge1xuICAgICAgICAgICAgICAgIHZhciBsID0gZmVhdHVyZU9iamVjdC5sZW5ndGgsXG4gICAgICAgICAgICAgICAgICAgIGk7XG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAvLyBGaW5kIHRoZSBmZWF0dXJlXG4gICAgICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IGdldEZlYXR1cmVOb2RlKHJvb3RBcnJheSwgZmVhdHVyZU9iamVjdFtpXSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZmVhdHVyZU9iamVjdFtpbmRleF0uZmVhdHVyZXMgJiYgZmVhdHVyZU9iamVjdFtpbmRleF0uZmVhdHVyZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlY3Vyc2l2ZWx5RGVsZXRlRmVhdHVyZXMocm9vdEFycmF5W2luZGV4XS5mZWF0dXJlcywgZmVhdHVyZU9iamVjdFtpbmRleF0uZmVhdHVyZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBGZWF0dXJlcy5zcGxpY2UoaW5kZXgsIDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuYWRkRmVhdHVyZXMgPSBmdW5jdGlvbiAoZmVhdHVyZU9iamVjdCkge1xuICAgICAgICAgICAgICAgIHJlY3Vyc2l2ZWx5QWRkRmVhdHVyZXMoRmVhdHVyZXMsIGZlYXR1cmVPYmplY3QuZmVhdHVyZXMpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdGhpcy5kZWxldGVGZWF0dXJlcyA9IGZ1bmN0aW9uIChmZWF0dXJlT2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgcmVjdXJzaXZlbHlEZWxldGVGZWF0dXJlcyhGZWF0dXJlcywgZmVhdHVyZU9iamVjdC5mZWF0dXJlcyk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB0aGlzLmdldEZlYXR1cmVMaXN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBGZWF0dXJlcztcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHRoaXMucG9zdEZlYXR1cmVzID0gZnVuY3Rpb24gKGZlYXR1cmVPYmplY3QpIHtcbiAgICAgICAgICAgICAgICB2YXIgbWVzc2FnZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdwbHVnaW4nOiBmZWF0dXJlT2JqZWN0LnBsdWdpbixcbiAgICAgICAgICAgICAgICAgICAgICAgICdvdXRwdXRJbmRleCc6IGZlYXR1cmVPYmplY3Qub3V0cHV0SW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAnZnJhbWVTaXplJzogZmVhdHVyZU9iamVjdC5mcmFtZVNpemUsXG4gICAgICAgICAgICAgICAgICAgICAgICAnZmVhdHVyZXMnOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ251bWJlck9mQ2hhbm5lbHMnOiBmZWF0dXJlT2JqZWN0LnJlc3VsdHMubnVtYmVyT2ZDaGFubmVscyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAncmVzdWx0cyc6IFtdXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGk7XG5cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiByZWN1cnNpdmVQb3N0RmVhdHVyZXMocm9vdE5vZGUsIHJlc3VsdHNMaXN0LCBGZWF0dXJlTGlzdCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBBZGQgdGhlIHJlc3VsdHMgdHJlZSB3aGVyZSBuZWNlc3NhcnlcbiAgICAgICAgICAgICAgICAgICAgdmFyIGksIHBhcmFtO1xuXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGFvKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlLm5hbWUgPT09IHBhcmFtO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGZvciAocGFyYW0gaW4gcmVzdWx0c0xpc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHRzTGlzdC5oYXNPd25Qcm9wZXJ0eShwYXJhbSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbm9kZSA9IEZlYXR1cmVMaXN0LmZpbmQoYW8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChub2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHRzTGlzdFtwYXJhbV0uY29uc3RydWN0b3IgPT09IE9iamVjdCAmJiBub2RlLnJlc3VsdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvb3ROb2RlW3BhcmFtXSA9IHt9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVjdXJzaXZlUG9zdEZlYXR1cmVzKHJvb3ROb2RlW3BhcmFtXSwgcmVzdWx0c0xpc3RbcGFyYW1dLCBub2RlLnJlc3VsdHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm9vdE5vZGVbcGFyYW1dID0gcmVzdWx0c0xpc3RbcGFyYW1dO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIFBlcmZvcm0gcmVjdXJzaXZlIG1hcCBmb3IgZWFjaCBjaGFubmVsXG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGZlYXR1cmVPYmplY3QucmVzdWx0cy5udW1iZXJPZkNoYW5uZWxzOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS5mZWF0dXJlcy5yZXN1bHRzW2ldID0ge307XG4gICAgICAgICAgICAgICAgICAgIHJlY3Vyc2l2ZVBvc3RGZWF0dXJlcyhtZXNzYWdlLmZlYXR1cmVzLnJlc3VsdHNbaV0sIGZlYXR1cmVPYmplY3QucmVzdWx0cy5yZXN1bHRzW2ldLnJlc3VsdHMsIEZlYXR1cmVzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGx1Z2luSW5zdGFuY2Uubm9kZS5mZWF0dXJlTWFwLlJlY2VpdmVyLnBvc3RGZWF0dXJlcyhtZXNzYWdlKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG5cbiAgICAgICAgZnVuY3Rpb24gZmluZFNvdXJjZUluZGV4KFNlbmRlcikge1xuICAgICAgICAgICAgcmV0dXJuIE1hcHBpbmdzLmZpbmRJbmRleChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBlLmdldFNlbmRlcigpID09PSB0aGlzO1xuICAgICAgICAgICAgfSwgU2VuZGVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGZpbmRTb3VyY2VNYXAoTWFwcGluZ3MsIHNvdXJjZSwgcGx1Z2luU2VuZGVyKSB7XG4gICAgICAgICAgICB2YXIgc291cmNlTWFwID0gTWFwcGluZ3NbZmluZFNvdXJjZUluZGV4KHNvdXJjZSldO1xuICAgICAgICAgICAgaWYgKCFzb3VyY2VNYXApIHtcbiAgICAgICAgICAgICAgICBzb3VyY2VNYXAgPSBNYXBwaW5nc1tmaW5kU291cmNlSW5kZXgocGx1Z2luU2VuZGVyKV07XG4gICAgICAgICAgICAgICAgaWYgKCFzb3VyY2VNYXApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgKFwiQ291bGQgbm90IGxvY2F0ZSBzb3VyY2UgbWFwXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBzb3VyY2VNYXA7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBHRU5FUkFMIElOVEVSRkFDRVxuICAgICAgICB0aGlzLmNyZWF0ZVNvdXJjZU1hcCA9IGZ1bmN0aW9uIChTZW5kZXIsIHBsdWdpbkluc3RhbmNlKSB7XG4gICAgICAgICAgICB2YXIgbm9kZSA9IG5ldyBTb3VyY2VNYXAoU2VuZGVyLCBwbHVnaW5JbnN0YW5jZSk7XG4gICAgICAgICAgICBNYXBwaW5ncy5wdXNoKG5vZGUpO1xuICAgICAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuZGVsZXRlU291cmNlTWFwID0gZnVuY3Rpb24gKFNlbmRlcikge1xuICAgICAgICAgICAgdmFyIGluZGV4ID0gZmluZFNvdXJjZUluZGV4KFNlbmRlcik7XG4gICAgICAgICAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgKFwiQ291bGQgbm90IGZpbmQgdGhlIHNvdXJjZSBtYXAgZm9yIHRoZSBwbHVnaW5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBNYXBwaW5ncy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuZ2V0UGx1Z2luU2VuZGVyID0gZnVuY3Rpb24gKHBsdWdpbikge1xuICAgICAgICAgICAgaWYgKHBsdWdpbi5jb25zdHJ1Y3RvciA9PT0gUGx1Z2luSW5zdGFuY2UpIHtcbiAgICAgICAgICAgICAgICBwbHVnaW4gPSBwbHVnaW4ubm9kZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBwbHVnaW4uZmVhdHVyZU1hcC5TZW5kZXI7XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5yZXF1ZXN0RmVhdHVyZXMgPSBmdW5jdGlvbiAocmVxdWVzdG9yLCBzb3VyY2UsIGZlYXR1cmVPYmplY3QpIHtcbiAgICAgICAgICAgIGlmIChyZXF1ZXN0b3IuY29uc3RydWN0b3IgIT09IFBsdWdpbkluc3RhbmNlKSB7XG4gICAgICAgICAgICAgICAgcmVxdWVzdG9yID0gcmVxdWVzdG9yLnBsdWdpbkluc3RhbmNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gR2V0IHRoZSBzb3VyY2UgbWFwXG4gICAgICAgICAgICB2YXIgcGx1Z2luU2VuZGVyID0gdGhpcy5nZXRQbHVnaW5TZW5kZXIoc291cmNlKTtcbiAgICAgICAgICAgIHZhciBzb3VyY2VNYXAgPSBmaW5kU291cmNlTWFwKE1hcHBpbmdzLCBzb3VyY2UsIHBsdWdpblNlbmRlcik7XG4gICAgICAgICAgICBzb3VyY2VNYXAucmVxdWVzdEZlYXR1cmVzKHJlcXVlc3RvciwgZmVhdHVyZU9iamVjdCk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuZGVsZXRlRmVhdHVyZXMgPSBmdW5jdGlvbiAocmVxdWVzdG9yLCBzb3VyY2UsIGZlYXR1cmVPYmplY3QpIHtcbiAgICAgICAgICAgIGlmIChyZXF1ZXN0b3IuY29uc3RydWN0b3IgIT09IFBsdWdpbkluc3RhbmNlKSB7XG4gICAgICAgICAgICAgICAgcmVxdWVzdG9yID0gcmVxdWVzdG9yLnBsdWdpbkluc3RhbmNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHNvdXJjZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgTWFwcGluZ3MuZm9yRWFjaChmdW5jdGlvbiAoc291cmNlTWFwKSB7XG4gICAgICAgICAgICAgICAgICAgIHNvdXJjZU1hcC5jYW5jZWxGZWF0dXJlcyhyZXF1ZXN0b3IpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBHZXQgdGhlIHNvdXJjZSBtYXBcbiAgICAgICAgICAgICAgICB2YXIgcGx1Z2luU2VuZGVyID0gdGhpcy5nZXRQbHVnaW5TZW5kZXIoc291cmNlKTtcbiAgICAgICAgICAgICAgICB2YXIgc291cmNlTWFwID0gZmluZFNvdXJjZU1hcChNYXBwaW5ncywgc291cmNlLCBwbHVnaW5TZW5kZXIpO1xuICAgICAgICAgICAgICAgIHNvdXJjZU1hcC5jYW5jZWxGZWF0dXJlcyhyZXF1ZXN0b3IsIGZlYXR1cmVPYmplY3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmdldEZlYXR1cmVMaXN0ID0gZnVuY3Rpb24gKHJlcXVlc3Rvciwgc291cmNlKSB7fTtcbiAgICAgICAgdGhpcy5wb3N0RmVhdHVyZXMgPSBmdW5jdGlvbiAoZmVhdHVyZU9iamVjdCkge1xuICAgICAgICAgICAgLy8gUmVjZWl2ZSBmcm9tIHRoZSBTZW5kZXIgb2JqZWN0c1xuICAgICAgICAgICAgLy8gVHJpZ2dlciBkaXN0cmlidXRlZCBzZWFyY2ggZm9yIHJlc3VsdHMgdHJhbnNtaXNzaW9uXG5cbiAgICAgICAgICAgIC8vIEZpcnN0IGdldCB0aGUgaW5zdGFuY2UgbWFwcGluZyBmb3Igb3V0cHV0L2ZyYW1lXG4gICAgICAgICAgICB2YXIgc291cmNlID0gTWFwcGluZ3NbZmluZFNvdXJjZUluZGV4KGZlYXR1cmVPYmplY3QucGx1Z2luKV07XG4gICAgICAgICAgICBpZiAoIXNvdXJjZSkge1xuICAgICAgICAgICAgICAgIHNvdXJjZSA9IE1hcHBpbmdzW2ZpbmRTb3VyY2VJbmRleCh0aGlzLmdldFBsdWdpblNlbmRlcihmZWF0dXJlT2JqZWN0LnBsdWdpbikpXTtcbiAgICAgICAgICAgICAgICBpZiAoIXNvdXJjZSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyAoXCJQbHVnaW4gSW5zdGFuY2Ugbm90IGxvYWRlZCFcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGZyYW1lTWFwID0gc291cmNlLmZpbmRGcmFtZU1hcChmZWF0dXJlT2JqZWN0Lm91dHB1dEluZGV4LCBmZWF0dXJlT2JqZWN0LmZyYW1lU2l6ZSk7XG5cbiAgICAgICAgICAgIC8vIFNlbmQgdGhlIGZlYXR1cmUgb2JqZWN0IHRvIHRoZSBSZXF1ZXN0b3JNYXAgb2JqZWN0IHRvIGhhbmRsZSBjb21tc1xuICAgICAgICAgICAgZnJhbWVNYXAucmVxdWVzdG9ycy5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgZS5wb3N0RmVhdHVyZXModGhpcyk7XG4gICAgICAgICAgICB9LCBmZWF0dXJlT2JqZWN0KTtcblxuICAgICAgICB9O1xuICAgIH07XG5cbiAgICB0aGlzLkZlYXR1cmVNYXAgPSBuZXcgRmVhdHVyZU1hcCgpO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLkZlYXR1cmVNYXAsIFwiZmFjdG9yeVwiLCB7XG4gICAgICAgICd2YWx1ZSc6IHRoaXNcbiAgICB9KTtcblxuICAgIHZhciBzdG9yZXMgPSBbXTtcblxuICAgIHRoaXMuY3JlYXRlU3RvcmUgPSBmdW5jdGlvbiAoc3RvcmVOYW1lKSB7XG4gICAgICAgIHZhciBub2RlID0gbmV3IExpbmtlZFN0b3JlLkxpbmtlZFN0b3JlKHN0b3JlTmFtZSk7XG4gICAgICAgIHN0b3Jlcy5wdXNoKG5vZGUpO1xuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9O1xuXG4gICAgdGhpcy5nZXRTdG9yZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBzdG9yZXM7XG4gICAgfTtcblxuICAgIHRoaXMuZmluZFN0b3JlID0gZnVuY3Rpb24gKHN0b3JlTmFtZSkge1xuICAgICAgICByZXR1cm4gc3RvcmVzLmZpbmQoZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgICAgIHJldHVybiBhLm5hbWUgPT09IHN0b3JlTmFtZTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIC8vIEJ1aWxkIHRoZSBkZWZhdWx0IFN0b3Jlc1xuICAgIHRoaXMuU2Vzc2lvbkRhdGEgPSBuZXcgTGlua2VkU3RvcmUuTGlua2VkU3RvcmUoXCJTZXNzaW9uXCIpO1xuICAgIHRoaXMuVXNlckRhdGEgPSBuZXcgTGlua2VkU3RvcmUuTGlua2VkU3RvcmUoXCJVc2VyXCIpO1xuXG4gICAgLy8gQ3JlYXRlZCBmb3IgdGhlIGlucHV0IG9mIGVhY2ggU3ViRmFjdG9yeSBwbHVnaW4gY2hhaW5cbiAgICB2YXIgU3ViRmFjdG9yeUZlYXR1cmVTZW5kZXIgPSBmdW5jdGlvbiAob3duZXIsIEZhY3RvcnlGZWF0dXJlTWFwKSB7XG4gICAgICAgIHZhciBPdXRwdXROb2RlID0gZnVuY3Rpb24gKHBhcmVudCwgb3V0cHV0KSB7XG4gICAgICAgICAgICB2YXIgZXh0cmFjdG9ycyA9IFtdO1xuICAgICAgICAgICAgdmFyIEV4dHJhY3RvciA9IGZ1bmN0aW9uIChvdXRwdXQsIGZyYW1lU2l6ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZXh0cmFjdG9yID0gb3V0cHV0LmNvbnRleHQuY3JlYXRlQW5hbHlzZXIoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmV4dHJhY3Rvci5mZnRTaXplID0gZnJhbWVTaXplO1xuICAgICAgICAgICAgICAgIG91dHB1dC5jb25uZWN0KHRoaXMuZXh0cmFjdG9yKTtcbiAgICAgICAgICAgICAgICB0aGlzLmZlYXR1cmVzID0gW107XG4gICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIFwiZnJhbWVTaXplXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgJ3ZhbHVlJzogZnJhbWVTaXplXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICB2YXIgcmVjdXJzaXZlUHJvY2Vzc2luZyA9IG93bmVyLnJlY3Vyc2l2ZVByb2Nlc3Npbmc7XG4gICAgICAgICAgICAgICAgLypcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiByZWN1cnNpdmVQcm9jZXNzaW5nKGJhc2UsIGxpc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGwgPSBsaXN0Lmxlbmd0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGksIGVudHJ5O1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbnRyeSA9IGxpc3RbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICBiYXNlW2VudHJ5Lm5hbWVdLmFwcGx5KGJhc2UsIGVudHJ5LnBhcmFtZXRlcnMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVudHJ5LmZlYXR1cmVzICYmIGVudHJ5LmZlYXR1cmVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWN1cnNpdmVQcm9jZXNzaW5nKGJhc2UucmVzdWx0W2VudHJ5Lm5hbWVdLCBlbnRyeS5mZWF0dXJlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBvbmF1ZGlvY2FsbGJhY2soZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAvL3RoaXMgPT09IEV4dHJhY3RvclxuICAgICAgICAgICAgICAgICAgICB2YXIgbWVzc2FnZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdudW1iZXJPZkNoYW5uZWxzJzogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICdyZXN1bHRzJzogW11cbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgcmVjdXJzaXZlUHJvY2Vzc2luZyhkYXRhLCB0aGlzLmZlYXR1cmVzKTtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS5yZXN1bHRzWzBdID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ2NoYW5uZWwnOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3Jlc3VsdHMnOiBKU09OLnBhcnNlKGRhdGEudG9KU09OKCkpXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9zdEZlYXR1cmVzKGRhdGEubGVuZ3RoLCBtZXNzYWdlKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLnNldEZlYXR1cmVzID0gZnVuY3Rpb24gKGZlYXR1cmVMaXN0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmVhdHVyZXMgPSBmZWF0dXJlTGlzdDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZmVhdHVyZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmV4dHJhY3Rvci5jbGVhckNhbGxiYWNrKCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmV4dHJhY3Rvci5mcmFtZUNhbGxiYWNrKG9uYXVkaW9jYWxsYmFjaywgdGhpcyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHRoaXMucmVqb2luRXh0cmFjdG9yID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBvdXRwdXQuY29ubmVjdCh0aGlzLmV4dHJhY3Rvcik7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB2YXIgV29ya2VyRXh0cmFjdG9yID0gZnVuY3Rpb24gKG91dHB1dCwgZnJhbWVTaXplKSB7XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gb25hdWRpb2NhbGxiYWNrKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGMsIGZyYW1lcyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGMgPSAwOyBjIDwgZS5pbnB1dEJ1ZmZlci5udW1iZXJPZkNoYW5uZWxzOyBjKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyYW1lc1tjXSA9IGUuaW5wdXRCdWZmZXIuZ2V0Q2hhbm5lbERhdGEoYyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgd29ya2VyLnBvc3RNZXNzYWdlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdzdGF0ZSc6IDIsXG4gICAgICAgICAgICAgICAgICAgICAgICAnZnJhbWVzJzogZnJhbWVzXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHJlc3BvbnNlKG1zZykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvc3RGZWF0dXJlcyhmcmFtZVNpemUsIG1zZy5kYXRhLnJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB2YXIgd29ya2VyID0gbmV3IFdvcmtlcihcImpzYXAvZmVhdHVyZS13b3JrZXIuanNcIik7XG4gICAgICAgICAgICAgICAgd29ya2VyLm9uZXJyb3IgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICB0aGlzLnNldEZlYXR1cmVzID0gZnVuY3Rpb24gKGZlYXR1cmVMaXN0KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvbmZpZ01lc3NhZ2UgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnc3RhdGUnOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3NhbXBsZVJhdGUnOiBvdXRwdXQuY29udGV4dC5zYW1wbGVSYXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2ZlYXR1cmVMaXN0JzogZmVhdHVyZUxpc3QsXG4gICAgICAgICAgICAgICAgICAgICAgICAnbnVtQ2hhbm5lbHMnOiBvdXRwdXQubnVtYmVyT2ZPdXRwdXRzLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2ZyYW1lU2l6ZSc6IHRoaXMuZnJhbWVTaXplXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmVhdHVyZXMgPSBmZWF0dXJlTGlzdDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZlYXR1cmVMaXN0ICYmIGZlYXR1cmVMaXN0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtlci5vbm1lc3NhZ2UgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLmRhdGEuc3RhdGUgPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya2VyLm9ubWVzc2FnZSA9IHJlc3BvbnNlLmJpbmQoc2VsZik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuZXh0cmFjdG9yLm9uYXVkaW9wcm9jZXNzID0gb25hdWRpb2NhbGxiYWNrLmJpbmQoc2VsZik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya2VyLnBvc3RNZXNzYWdlKGNvbmZpZ01lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB3b3JrZXIucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdzdGF0ZSc6IDBcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5leHRyYWN0b3Iub25hdWRpb3Byb2Nlc3MgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICB0aGlzLnJlam9pbkV4dHJhY3RvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgb3V0cHV0LmNvbm5lY3QodGhpcy5leHRyYWN0b3IpO1xuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICB0aGlzLmV4dHJhY3RvciA9IG91dHB1dC5jb250ZXh0LmNyZWF0ZVNjcmlwdFByb2Nlc3NvcihmcmFtZVNpemUsIG91dHB1dC5udW1iZXJPZk91dHB1dHMsIDEpO1xuICAgICAgICAgICAgICAgIG91dHB1dC5jb25uZWN0KHRoaXMuZXh0cmFjdG9yKTtcbiAgICAgICAgICAgICAgICB0aGlzLmV4dHJhY3Rvci5jb25uZWN0KG91dHB1dC5jb250ZXh0LmRlc3RpbmF0aW9uKTtcblxuICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImZyYW1lU2l6ZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICd2YWx1ZSc6IGZyYW1lU2l6ZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRoaXMuYWRkRXh0cmFjdG9yID0gZnVuY3Rpb24gKGZyYW1lU2l6ZSkge1xuICAgICAgICAgICAgICAgIHZhciBvYmo7XG4gICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5Xb3JrZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgb2JqID0gbmV3IFdvcmtlckV4dHJhY3RvcihvdXRwdXQsIGZyYW1lU2l6ZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgb2JqID0gbmV3IEV4dHJhY3RvcihvdXRwdXQsIGZyYW1lU2l6ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGV4dHJhY3RvcnMucHVzaChvYmopO1xuICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIFwicG9zdEZlYXR1cmVzXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgJ3ZhbHVlJzogZnVuY3Rpb24gKGZyYW1lU2l6ZSwgcmVzdWx0c0pTT04pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvYmogPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ291dHB1dEluZGV4JzogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZnJhbWVTaXplJzogZnJhbWVTaXplLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdyZXN1bHRzJzogcmVzdWx0c0pTT05cbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBvc3RGZWF0dXJlcyhvYmopO1xuICAgICAgICAgICAgICAgICAgICB9LmJpbmQodGhpcylcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gb2JqO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRoaXMuZmluZEV4dHJhY3RvciA9IGZ1bmN0aW9uIChmcmFtZVNpemUpIHtcbiAgICAgICAgICAgICAgICB2YXIgY2hlY2sgPSBmcmFtZVNpemU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGV4dHJhY3RvcnMuZmluZChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBUaGlzIE1VU1QgYmUgPT0gTk9UID09PVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gTnVtYmVyKGUuZnJhbWVTaXplKSA9PT0gTnVtYmVyKGNoZWNrKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0aGlzLnJlam9pbkV4dHJhY3RvcnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgZXh0cmFjdG9ycy5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIGUucmVqb2luRXh0cmFjdG9yKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdGhpcy5kZWxldGVFeHRyYWN0b3IgPSBmdW5jdGlvbiAoZnJhbWVTaXplKSB7fTtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIG91dHB1dE5vZGVzO1xuICAgICAgICB0aGlzLnVwZGF0ZUZlYXR1cmVzID0gZnVuY3Rpb24gKGZlYXR1cmVPYmplY3QpIHtcbiAgICAgICAgICAgIHZhciBvO1xuICAgICAgICAgICAgZm9yIChvID0gMDsgbyA8IGZlYXR1cmVPYmplY3QubGVuZ3RoOyBvKyspIHtcbiAgICAgICAgICAgICAgICBpZiAob3V0cHV0Tm9kZXMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAobyA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IChcIlJlcXVlc3RlZCBhbiBvdXRwdXQgdGhhdCBkb2VzIG5vdCBleGlzdFwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBvdXRwdXROb2RlcyA9IG5ldyBPdXRwdXROb2RlKG93bmVyLCBvd25lci5jaGFpblN0YXJ0KTtcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG91dHB1dE5vZGVzLCBcInBvc3RGZWF0dXJlc1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAndmFsdWUnOiBmdW5jdGlvbiAocmVzdWx0T2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3N0RmVhdHVyZXMocmVzdWx0T2JqZWN0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0uYmluZCh0aGlzKVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIHNpO1xuICAgICAgICAgICAgICAgIGZvciAoc2kgPSAwOyBzaSA8IGZlYXR1cmVPYmplY3Rbb10ubGVuZ3RoOyBzaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBleHRyYWN0b3IgPSBvdXRwdXROb2Rlcy5maW5kRXh0cmFjdG9yKGZlYXR1cmVPYmplY3Rbb11bc2ldLmZyYW1lU2l6ZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghZXh0cmFjdG9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBleHRyYWN0b3IgPSBvdXRwdXROb2Rlcy5hZGRFeHRyYWN0b3IoZmVhdHVyZU9iamVjdFtvXVtzaV0uZnJhbWVTaXplKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBleHRyYWN0b3Iuc2V0RmVhdHVyZXMoZmVhdHVyZU9iamVjdFtvXVtzaV0uZmVhdHVyZUxpc3QpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnJlam9pbkV4dHJhY3RvcnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAob3V0cHV0Tm9kZXMpIHtcbiAgICAgICAgICAgICAgICBvdXRwdXROb2Rlcy5yZWpvaW5FeHRyYWN0b3JzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5wb3N0RmVhdHVyZXMgPSBmdW5jdGlvbiAoZmVhdHVyZU9iamVjdCkge1xuICAgICAgICAgICAgLypcbiAgICAgICAgICAgICAgICBDYWxsZWQgYnkgdGhlIGluZGl2aWR1YWwgZXh0cmFjdG9yIGluc3RhbmNlczpcbiAgICAgICAgICAgICAgICBmZWF0dXJlT2JqZWN0ID0geydmcmFtZVNpemUnOiBmcmFtZVNpemUsXG4gICAgICAgICAgICAgICAgJ291dHB1dEluZGV4Jzogb3V0cHV0SW5kZXgsXG4gICAgICAgICAgICAgICAgJ3Jlc3VsdHMnOltdfVxuICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIEZhY3RvcnlGZWF0dXJlTWFwLnBvc3RGZWF0dXJlcyh7XG4gICAgICAgICAgICAgICAgJ3BsdWdpbic6IHRoaXMsXG4gICAgICAgICAgICAgICAgJ291dHB1dEluZGV4JzogZmVhdHVyZU9iamVjdC5vdXRwdXRJbmRleCxcbiAgICAgICAgICAgICAgICAnZnJhbWVTaXplJzogZmVhdHVyZU9iamVjdC5mcmFtZVNpemUsXG4gICAgICAgICAgICAgICAgJ3Jlc3VsdHMnOiBmZWF0dXJlT2JqZWN0LnJlc3VsdHNcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vIFNlbmQgdG8gRmFjdG9yeVxuICAgICAgICBGYWN0b3J5RmVhdHVyZU1hcC5jcmVhdGVTb3VyY2VNYXAodGhpcywgdW5kZWZpbmVkKTtcbiAgICB9O1xuXG4gICAgdmFyIEF1ZGlvUGx1Z2luQ2hhaW5NYW5hZ2VyID0gZnVuY3Rpb24gKFBsdWdpbkZhY3RvcnksIGNoYWluU3RhcnQsIGNoYWluU3RvcCkge1xuXG4gICAgICAgIHZhciBwbHVnaW5fbGlzdCA9IFtdLFxuICAgICAgICAgICAgcGx1Z2luQ2hhaW5TdGFydCA9IGNoYWluU3RhcnQsXG4gICAgICAgICAgICBwbHVnaW5DaGFpblN0b3AgPSBjaGFpblN0b3AsXG4gICAgICAgICAgICBmYWN0b3J5TmFtZSA9IFwiXCIsXG4gICAgICAgICAgICBzdGF0ZSA9IDEsXG4gICAgICAgICAgICBkZWxheVNhbXBsZXMgPSAwLFxuICAgICAgICAgICAgY2hhaW5TdGFydEZlYXR1cmUgPSBuZXcgU3ViRmFjdG9yeUZlYXR1cmVTZW5kZXIodGhpcywgUGx1Z2luRmFjdG9yeS5GZWF0dXJlTWFwKSxcbiAgICAgICAgICAgIHNlbWFudGljU3RvcmVzID0gW10sXG4gICAgICAgICAgICBldmVudFRhcmdldCA9IG5ldyBFdmVudFRhcmdldCgpLFxuICAgICAgICAgICAgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMucGFyZW50ID0gUGx1Z2luRmFjdG9yeTtcbiAgICAgICAgcGx1Z2luQ2hhaW5TdGFydC5kaXNjb25uZWN0KCk7XG4gICAgICAgIHBsdWdpbkNoYWluU3RhcnQuY29ubmVjdChjaGFpblN0b3ApO1xuXG4gICAgICAgIHRoaXMuVHJhY2tEYXRhID0gbmV3IExpbmtlZFN0b3JlLkxpbmtlZFN0b3JlKFwiVHJhY2tcIik7XG4gICAgICAgIHRoaXMuUGx1Z2luRGF0YSA9IG5ldyBMaW5rZWRTdG9yZS5MaW5rZWRTdG9yZShcIlBsdWdpblwiKTtcblxuICAgICAgICB0aGlzLmZlYXR1cmVTZW5kZXIgPSBjaGFpblN0YXJ0RmVhdHVyZTtcblxuICAgICAgICB0aGlzLmdldEZlYXR1cmVDaGFpbiA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICB9O1xuXG4gICAgICAgIGZ1bmN0aW9uIHJlYnVpbGQoKSB7XG4gICAgICAgICAgICB2YXIgaSA9IDAsXG4gICAgICAgICAgICAgICAgbCA9IHBsdWdpbl9saXN0Lmxlbmd0aCAtIDE7XG4gICAgICAgICAgICB3aGlsZSAoaSA8IGwpIHtcbiAgICAgICAgICAgICAgICB2YXIgY3VycmVudE5vZGUgPSBwbHVnaW5fbGlzdFtpKytdO1xuICAgICAgICAgICAgICAgIHZhciBuZXh0Tm9kZSA9IHBsdWdpbl9saXN0W2ldO1xuICAgICAgICAgICAgICAgIGN1cnJlbnROb2RlLnJlY29ubmVjdChuZXh0Tm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBpc29sYXRlKCkge1xuICAgICAgICAgICAgcGx1Z2luX2xpc3QuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIGUuZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBjdXRDaGFpbigpIHtcbiAgICAgICAgICAgIGlmIChwbHVnaW5fbGlzdC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgcGx1Z2luQ2hhaW5TdGFydC5kaXNjb25uZWN0KHBsdWdpbl9saXN0WzBdLmlucHV0KTtcbiAgICAgICAgICAgICAgICBwbHVnaW5fbGlzdFtwbHVnaW5fbGlzdC5sZW5ndGggLSAxXS5vdXRwdXQuZGlzY29ubmVjdChwbHVnaW5DaGFpblN0b3ApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwbHVnaW5DaGFpblN0YXJ0LmRpc2Nvbm5lY3QocGx1Z2luQ2hhaW5TdG9wKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gam9pbkNoYWluKCkge1xuICAgICAgICAgICAgaWYgKHBsdWdpbl9saXN0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBwbHVnaW5DaGFpblN0YXJ0LmNvbm5lY3QocGx1Z2luX2xpc3RbMF0uaW5wdXQpO1xuICAgICAgICAgICAgICAgIHBsdWdpbl9saXN0W3BsdWdpbl9saXN0Lmxlbmd0aCAtIDFdLm91dHB1dC5jb25uZWN0KHBsdWdpbkNoYWluU3RvcCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBsdWdpbkNoYWluU3RhcnQuY29ubmVjdChwbHVnaW5DaGFpblN0b3ApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2hhaW5TdGFydEZlYXR1cmUucmVqb2luRXh0cmFjdG9ycygpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5ieXBhc3NQbHVnaW4gPSBmdW5jdGlvbiAocGx1Z2luX2luc3RhbmNlLCBzdGF0ZSkge1xuICAgICAgICAgICAgLy8gQ2hlY2sgaXMgYSBtZW1iZXIgb2YgdGhpcyBjaGFpblxuICAgICAgICAgICAgaWYgKHBsdWdpbl9saXN0LmluY2x1ZGVzKHBsdWdpbl9pbnN0YW5jZSkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcGx1Z2luX2luc3RhbmNlLmJ5cGFzcyhzdGF0ZSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5nZXRQcm90b3R5cGVzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyZW50LmdldFByb3RvdHlwZXMoKTtcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmdldEZhY3RvcnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJlbnQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5kZXN0cm95ID0gZnVuY3Rpb24gKHJlY29ubmVjdCkge1xuICAgICAgICAgICAgdmFyIGk7XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcGx1Z2luX2xpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRlc3Ryb3lQbHVnaW4ocGx1Z2luX2xpc3RbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcGx1Z2luQ2hhaW5TdGFydC5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICBpZiAocmVjb25uZWN0ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgcGx1Z2luQ2hhaW5TdGFydC5jb25uZWN0KHBsdWdpbkNoYWluU3RvcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gUGx1Z2luIGNyZWF0aW9uIC8gZGVzdHJ1Y3Rpb25cblxuICAgICAgICBmdW5jdGlvbiBidWlsZE5ld1BsdWdpbihwcm90b3R5cGVPYmplY3QpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgICAgICBpZiAoc3RhdGUgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0IChcIlN1YkZhY3RvcnkgaGFzIGJlZW4gZGVzdHJveWVkISBDYW5ub3QgYWRkIG5ldyBwbHVnaW5zXCIpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocHJvdG90eXBlT2JqZWN0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBwcm90b3R5cGVPYmplY3QuY3JlYXRlUGx1Z2luSW5zdGFuY2Uoc2VsZiwgZmFsc2UpXG4gICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24obm9kZSkge1xuICAgICAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhub2RlLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnVHJhY2tEYXRhJzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBzZWxmLlRyYWNrRGF0YVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY3JlYXRlUGx1Z2luID0gZnVuY3Rpb24gKHByb3RvdHlwZU9iamVjdCkge1xuICAgICAgICAgICAgcmV0dXJuIGJ1aWxkTmV3UGx1Z2luKHByb3RvdHlwZU9iamVjdCkuY2F0Y2goZnVuY3Rpb24oZSl7XG4gICAgICAgICAgICAgICAgdGhyb3coXCJQbHVnaW4gZGlkIG5vdCBnZXQgY3JlYXRlZCEgQWJvcnRpbmdcIik7XG4gICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgICAgICAgICAgICBjdXRDaGFpbigpO1xuICAgICAgICAgICAgICAgIHBsdWdpbl9saXN0LnB1c2gobm9kZSk7XG4gICAgICAgICAgICAgICAgaXNvbGF0ZSgpO1xuICAgICAgICAgICAgICAgIHJlYnVpbGQoKTtcbiAgICAgICAgICAgICAgICBqb2luQ2hhaW4oKTtcbiAgICAgICAgICAgICAgICBub2RlLm5vZGUuYWRkRXZlbnRMaXN0ZW5lcihcImFsdGVyZGVsYXlcIiwgc2VsZik7XG4gICAgICAgICAgICAgICAgbm9kZS5ub2RlLm9ubG9hZGVkLmNhbGwobm9kZS5ub2RlKTtcbiAgICAgICAgICAgICAgICB1cGRhdGVEZWxheUNvbXBlbnNhdGlvbih0cnVlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbm9kZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMucmVtb3ZlUGx1Z2luID0gZnVuY3Rpb24ocGx1Z2luX29iamVjdCkge1xuICAgICAgICAgICAgaWYgKHN0YXRlID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5nZXRQbHVnaW5JbmRleChwbHVnaW5fb2JqZWN0KTtcbiAgICAgICAgICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICAgICAgICAgICAgY3V0Q2hhaW4oKTtcbiAgICAgICAgICAgICAgICBwbHVnaW5fb2JqZWN0Lm5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImFsdGVyZGVsYXlcIiwgc2VsZik7XG4gICAgICAgICAgICAgICAgcGx1Z2luX29iamVjdC5ub2RlLnN0b3AuY2FsbChwbHVnaW5fb2JqZWN0Lm5vZGUpO1xuICAgICAgICAgICAgICAgIHBsdWdpbl9vYmplY3Qubm9kZS5vbnVubG9hZGVkLmNhbGwocGx1Z2luX29iamVjdC5ub2RlKTtcbiAgICAgICAgICAgICAgICBwbHVnaW5fb2JqZWN0Lm5vZGUuZGVjb25zdHJ1Y3QuY2FsbChwbHVnaW5fb2JqZWN0Lm5vZGUpO1xuICAgICAgICAgICAgICAgIHBsdWdpbl9saXN0LnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgaXNvbGF0ZSgpO1xuICAgICAgICAgICAgICAgIHJlYnVpbGQoKTtcbiAgICAgICAgICAgICAgICBqb2luQ2hhaW4oKTtcbiAgICAgICAgICAgICAgICB1cGRhdGVEZWxheUNvbXBlbnNhdGlvbih0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmRlc3Ryb3lQbHVnaW4gPSBmdW5jdGlvbiAocGx1Z2luX29iamVjdCkge1xuICAgICAgICAgICAgaWYgKHN0YXRlID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5yZW1vdmVQbHVnaW4ocGx1Z2luX29iamVjdCk7XG4gICAgICAgICAgICB0aGlzLnBhcmVudC5kZWxldGVQbHVnaW4ocGx1Z2luX29iamVjdC5pZCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5nZXRQbHVnaW5zID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHBsdWdpbl9saXN0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuZ2V0QWxsUGx1Z2lucyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcmVudC5nZXRBbGxQbHVnaW5zT2JqZWN0KCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5nZXRQbHVnaW5JbmRleCA9IGZ1bmN0aW9uIChwbHVnaW5fb2JqZWN0KSB7XG4gICAgICAgICAgICBpZiAoc3RhdGUgPT09IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgaW5kZXggPSBwbHVnaW5fbGlzdC5maW5kSW5kZXgoZnVuY3Rpb24gKGVsZW1lbnQsIGluZGV4LCBhcnJheSkge1xuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50ID09PSB0aGlzKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9LCBwbHVnaW5fb2JqZWN0KTtcbiAgICAgICAgICAgIHJldHVybiBpbmRleDtcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLm1vdmVQbHVnaW4gPSBmdW5jdGlvbiAocGx1Z2luX29iamVjdCwgbmV3X2luZGV4KSB7XG4gICAgICAgICAgICBpZiAoc3RhdGUgPT09IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmdldFBsdWdpbkluZGV4KHBsdWdpbl9vYmplY3QpLFxuICAgICAgICAgICAgICAgIG9iaiwgaG9sZExvdywgaG9sZEhpZ2gsIGk7XG4gICAgICAgICAgICBpZiAoUGx1Z2luRmFjdG9yeS5nZXRBbGxQbHVnaW5zKCkuaW5jbHVkZXMocGx1Z2luX29iamVjdCkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgdGhyb3coXCJQbHVnaW4gZG9lcyBub3QgZXhpc3RcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjdXRDaGFpbigpO1xuICAgICAgICAgICAgaXNvbGF0ZSgpO1xuICAgICAgICAgICAgaWYgKHBsdWdpbl9vYmplY3Qubm9kZS5vd25lciAhPT0gdGhpcykge1xuICAgICAgICAgICAgICAgIC8vIERpZmZlcmVudCBzdWItZmFjdG9yeVxuICAgICAgICAgICAgICAgIHBsdWdpbl9vYmplY3Qubm9kZS5vd25lci5yZW1vdmVQbHVnaW4ocGx1Z2luX29iamVjdCk7XG4gICAgICAgICAgICAgICAgcGx1Z2luX29iamVjdC5ub2RlLm93bmVyID0gdGhpcztcbiAgICAgICAgICAgICAgICBvYmogPSBbcGx1Z2luX29iamVjdF07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG9iaiA9IHBsdWdpbl9saXN0LnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgcGx1Z2luX29iamVjdC5ub2RlLm9udW5sb2FkZWQuY2FsbChwbHVnaW5fb2JqZWN0Lm5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG5ld19pbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHBsdWdpbl9saXN0ID0gb2JqLmNvbmNhdChwbHVnaW5fbGlzdCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG5ld19pbmRleCA+PSBwbHVnaW5fbGlzdC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBwbHVnaW5fbGlzdCA9IHBsdWdpbl9saXN0LmNvbmNhdChvYmopO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBob2xkTG93ID0gcGx1Z2luX2xpc3Quc2xpY2UoMCwgbmV3X2luZGV4KTtcbiAgICAgICAgICAgICAgICBob2xkSGlnaCA9IHBsdWdpbl9saXN0LnNsaWNlKG5ld19pbmRleCk7XG4gICAgICAgICAgICAgICAgcGx1Z2luX2xpc3QgPSBob2xkTG93LmNvbmNhdChvYmouY29uY2F0KGhvbGRIaWdoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZWJ1aWxkKCk7XG4gICAgICAgICAgICBqb2luQ2hhaW4oKTtcbiAgICAgICAgICAgIHBsdWdpbl9vYmplY3Qubm9kZS5vbmxvYWRlZC5jYWxsKHBsdWdpbl9vYmplY3Qubm9kZSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5jb3B5UGx1Z2luID0gZnVuY3Rpb24ocGx1Z2luX29iamVjdCwgY29weV9pbmRleCkge1xuICAgICAgICAgICAgaWYgKGNvcHlfaW5kZXggPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGNvcHlfaW5kZXggPSBwbHVnaW5fbGlzdC5sZW5ndGg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvcHlfaW5kZXggIT0gXCJudW1iZXJcIiB8fCBjb3B5X2luZGV4IDwgMCB8fCBjb3B5X2luZGV4ID4gcGx1Z2luX2xpc3QubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGhyb3coXCJQbHVnaW4gY29weSBpbmRleCBvdXRzaWRlIG9mIHRoZSBjaGFpbiBzY29wZS5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYnVpbGROZXdQbHVnaW4ocGx1Z2luX29iamVjdC5wcm90b3R5cGVPYmplY3QpXG4gICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24oZSl7XG4gICAgICAgICAgICAgICAgdGhyb3coXCJQbHVnaW4gZGlkIG5vdCBnZXQgY3JlYXRlZCEgQWJvcnRpbmdcIik7XG4gICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgICAgICAgICAgICBub2RlLm5vZGUucGFyYW1ldGVycy5zZXRQYXJhbWV0ZXJzQnlPYmplY3QocGx1Z2luX29iamVjdC5ub2RlLnBhcmFtZXRlcnMuZ2V0UGFyYW1ldGVyT2JqZWN0KCkpO1xuICAgICAgICAgICAgICAgIGN1dENoYWluKCk7XG4gICAgICAgICAgICAgICAgaXNvbGF0ZSgpO1xuICAgICAgICAgICAgICAgIHBsdWdpbl9saXN0LnNwbGljZShjb3B5X2luZGV4LCAwLCBub2RlKTtcbiAgICAgICAgICAgICAgICByZWJ1aWxkKCk7XG4gICAgICAgICAgICAgICAgam9pbkNoYWluKCk7XG4gICAgICAgICAgICAgICAgdXBkYXRlRGVsYXlDb21wZW5zYXRpb24odHJ1ZSk7XG4gICAgICAgICAgICAgICAgbm9kZS5ub2RlLm9ubG9hZGVkLmNhbGwobm9kZS5ub2RlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbm9kZTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH07XG5cbiAgICAgICAgZnVuY3Rpb24gcmVjdXJzaXZlUHJvY2Vzc2luZyhiYXNlLCBsaXN0KSB7XG4gICAgICAgICAgICB2YXIgbCA9IGxpc3QubGVuZ3RoLFxuICAgICAgICAgICAgICAgIGksIGVudHJ5O1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgICAgIGVudHJ5ID0gbGlzdFtpXTtcbiAgICAgICAgICAgICAgICBiYXNlW2VudHJ5Lm5hbWVdLmFwcGx5KGJhc2UsIGVudHJ5LnBhcmFtZXRlcnMpO1xuICAgICAgICAgICAgICAgIGlmIChlbnRyeS5mZWF0dXJlcyAmJiBlbnRyeS5mZWF0dXJlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlY3Vyc2l2ZVByb2Nlc3NpbmcoYmFzZS5yZXN1bHRbZW50cnkubmFtZV0sIGVudHJ5LmZlYXR1cmVzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiB1cGRhdGVEZWxheUNvbXBlbnNhdGlvbihkaXNwYXRjaEV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgc3VtID0gMDtcbiAgICAgICAgICAgIHBsdWdpbl9saXN0LmZvckVhY2goZnVuY3Rpb24ocGx1Z2luKSB7XG4gICAgICAgICAgICAgICAgc3VtICs9IHBsdWdpbi5ub2RlLnByb2Nlc3NpbmdEZWxheUFzU2FtcGxlcztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZGVsYXlTYW1wbGVzID0gc3VtO1xuICAgICAgICAgICAgaWYgKGRpc3BhdGNoRXZlbnQpIHtcbiAgICAgICAgICAgICAgICB2YXIgZXYgPSBuZXcgRXZlbnQoXCJhbHRlcmRlbGF5XCIpO1xuICAgICAgICAgICAgICAgIGV2ZW50VGFyZ2V0LmRpc3BhdGNoRXZlbnQoZXYpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgICAgICAgJ2NoYWluU3RhcnQnOiB7XG4gICAgICAgICAgICAgICAgJ3ZhbHVlJzogY2hhaW5TdGFydFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICdjaGFpblN0b3AnOiB7XG4gICAgICAgICAgICAgICAgJ3ZhbHVlJzogY2hhaW5TdG9wXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJwcm9jZXNzaW5nRGVsYXlBc1NhbXBsZXNcIjoge1xuICAgICAgICAgICAgICAgIFwiZ2V0XCI6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGVsYXlTYW1wbGVzO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCJzZXRcIjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93KFwicHJvY2Vzc2luZ0RlbGF5QXNTYW1wbGVzIGlzIHJlYWQtb25seVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJwcm9jZXNzaW5nRGVsYXlBc1NlY29uZHNcIjoge1xuICAgICAgICAgICAgICAgIFwiZ2V0XCI6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGVsYXlTYW1wbGVzL1BsdWdpbkZhY3RvcnkuY29udGV4dC5zYW1wbGVSYXRlO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCJzZXRcIjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93KFwicHJvY2Vzc2luZ0RlbGF5QXNTZWNvbmRzIGlzIHJlYWQtb25seVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ25hbWUnOiB7XG4gICAgICAgICAgICAgICAgJ2dldCc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhY3RvcnlOYW1lO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgJ3NldCc6IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbmFtZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmFjdG9yeU5hbWUgPSBuYW1lO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWN0b3J5TmFtZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ3JlY3Vyc2l2ZVByb2Nlc3NpbmcnOiB7XG4gICAgICAgICAgICAgICAgJ2dldCc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlY3Vyc2l2ZVByb2Nlc3Npbmc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICdoYW5kbGVFdmVudCc6IHtcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGUudHlwZSA9PSBcImFsdGVyZGVsYXlcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlRGVsYXlDb21wZW5zYXRpb24odHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJhZGRFdmVudExpc3RlbmVyXCI6IHtcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGV2ZW50VGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoa2V5LCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwicmVtb3ZlRXZlbnRMaXN0ZW5lclwiOiB7XG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbihrZXksIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBldmVudFRhcmdldC5hZGRFdmVudExpc3RlbmVyKGtleSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIHZhciBNaWRpU3ludGhlc2lzZXJIb3N0ID0gZnVuY3Rpb24oZmFjdG9yeSkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIGZ1bmN0aW9uIGJ1aWxkTmV3U3ludGhlc2lzZXJPYmplY3QocHJvdG90eXBlT2JqZWN0KSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb3RvdHlwZU9iamVjdC5oYXNNaWRpSW5wdXQgPT0gZmFsc2UgfHwgcHJvdG90eXBlT2JqZWN0Lmhhc01pZGlPdXRwdXQgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QgKFwiUHJvdG90eXBlIGlzIG5vdCBhIE1pZGlTeW50aGVzaXMgdHlwZS4gaGFzTWlkaUlucHV0IG11c3QgYmUgdHJ1ZSBhbmQgaGFzTWlkaU91dHB1dCBtdXN0IGJlIGZhbHNlXCIpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocHJvdG90eXBlT2JqZWN0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBwcm90b3R5cGVPYmplY3QuY3JlYXRlUGx1Z2luSW5zdGFuY2Uoc2VsZiwgZmFsc2UpXG4gICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24obm9kZSkge1xuICAgICAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhub2RlLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnVHJhY2tEYXRhJzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBzZWxmLlRyYWNrRGF0YVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBtaWRpU3ludGhTbG90O1xuICAgICAgICB2YXIgY29ubmVjdGlvbnMgPSBbXTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgICAgICAgXCJjb25uZWN0XCI6IHtcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKGRlc3RpbmF0aW9uTm9kZSwgb3V0cHV0LCBpbnB1dCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGVzdGluYXRpb25Ob2RlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IChcIk11c3QgZGVmaW5lIGFuIEF1ZGlvTm9kZSBvYmplY3RcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFyIGV4aXN0cyA9IGNvbm5lY3Rpb25zLmZpbmQoZnVuY3Rpb24oY29ubikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvbm4uZGVzdGluYXRpb25Ob2RlID09IGRlc3RpbmF0aW9uTm9kZSAmJiBjb25uLm91dHB1dCA9PSBvdXRwdXQgJiYgY29ubi5pbnB1dCA9PSBpbnB1dDtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChleGlzdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbm5lY3Rpb25zLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uTm9kZTpkZXN0aW5hdGlvbk5vZGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0Om91dHB1dCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDppbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG1pZGlTeW50aFNsb3QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwiTUlESSBTeW50aGVzaXNlciBpcyBub3QgbG9hZGVkLCBjb25uZWN0aW9ucyB3aWxsIGJlIHZhbGlkYXRlZCBvbiBsb2FkXCIpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWlkaVN5bnRoU2xvdC5ub2RlLmNvbm5lY3QoZGVzdGluYXRpb25Ob2RlLCBvdXRwdXQsIGlucHV0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImRpc2Nvbm5lY3RcIjoge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24oZGVzdGluYXRpb25Ob2RlLCBvdXRwdXQsIGlucHV0KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkZXN0aW5hdGlvbk5vZGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1pZGlTeW50aFNsb3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaWRpU3ludGhTbG90LmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbm5lY3Rpb25zID0gW107XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAodHlwZW9mIGRlc3RpbmF0aW9uTm9kZSA9PSBcIm51bWJlclwiICYmIHR5cGVvZiBvdXRwdXQgPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0ID0gZGVzdGluYXRpb25Ob2RlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVzdGluYXRpb25Ob2RlID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29ubmVjdGlvbnMgPSBjb25uZWN0aW9ucy5maWx0ZXIoZnVuY3Rpb24oY29ubikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb25uLm91dHB1dCA9PSBvdXRwdXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1pZGlTeW50aFNsb3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pZGlTeW50aFNsb3Qubm9kZS5kaXNjb25uZWN0KGNvbm4uZGVzdGluYXRpb25Ob2RlLCBjb25uLm91dHB1dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBkZXN0aW5hdGlvbk5vZGUgPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb3V0cHV0ID09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbm5lY3Rpb25zID0gY29ubmVjdGlvbnMuZmlsdGVyKGZ1bmN0aW9uKGNvbm4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29ubi5kZXN0aW5hdGlvbk5vZGUgPT0gZGVzdGluYXRpb25Ob2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtaWRpU3ludGhTbG90KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaWRpU3ludGhTbG90Lm5vZGUuZGlzY29ubmVjdChjb25uLmRlc3RpbmF0aW9uTm9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBkZXN0aW5hdGlvbk5vZGUgPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb3V0cHV0ID09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbm5lY3Rpb25zID0gY29ubmVjdGlvbnMuZmlsdGVyKGZ1bmN0aW9uKGNvbm4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29ubi5kZXN0aW5hdGlvbk5vZGUgPT0gZGVzdGluYXRpb25Ob2RlICYmIGNvbm4ub3V0cHV0ID09IG91dHB1dCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobWlkaVN5bnRoU2xvdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWlkaVN5bnRoU2xvdC5ub2RlLmRpc2Nvbm5lY3QoY29ubi5kZXN0aW5hdGlvbk5vZGUsIGNvbm4ub3V0cHV0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGRlc3RpbmF0aW9uTm9kZSA9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvdXRwdXQgPT0gXCJudW1iZXJcIiAmJiB0eXBlb2YgaW5wdXQgPT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29ubmVjdGlvbnMgPSBjb25uZWN0aW9ucy5maWx0ZXIoZnVuY3Rpb24oY29ubikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb25uLmRlc3RpbmF0aW9uTm9kZSA9PSBkZXN0aW5hdGlvbk5vZGUgJiYgY29ubi5vdXRwdXQgPT0gb3V0cHV0ICYmIGNvbm4uaW5wdXQgPT0gaW5wdXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1pZGlTeW50aFNsb3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pZGlTeW50aFNsb3Qubm9kZS5kaXNjb25uZWN0KGNvbm4uZGVzdGluYXRpb25Ob2RlLCBjb25uLm91dHB1dCwgY29ubi5pbnB1dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwic2NoZWR1bGVFdmVudFwiOiB7XG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbihtc2csIHQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1pZGlTeW50aFNsb3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pZGlTeW50aFNsb3Qubm9kZS5zY2hlZHVsZUV2ZW50KG1zZywgdCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyhcIk1JREkgU3ludGhlc2lzZXIgbm90IGxvYWRlZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImNhbmNlbEFsbEV2ZW50c1wiOiB7XG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbihtc2csIHQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1pZGlTeW50aFNsb3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pZGlTeW50aFNsb3Qubm9kZS5jYW5jZWxBbGxFdmVudHMoKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93KFwiTUlESSBTeW50aGVzaXNlciBub3QgbG9hZGVkXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwibWlkaVN5bnRoZXNpc2VyXCI6IHtcbiAgICAgICAgICAgICAgICBcImdldFwiOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtaWRpU3ludGhTbG90O1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCJzZXRcIjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93KFwiQ2Fubm90IHNldCByZWFkLW9ubHkgYXR0cmlidXRlLlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJsb2FkTWlkaVN5bnRoZXNpc2VyTW9kdWxlXCI6IHtcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKHByb3RvdHlwZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm90b3R5cGUuaGFzTWlkaUlucHV0ID09IGZhbHNlIHx8IHByb3RvdHlwZS5oYXNNaWRpT3V0cHV0ID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QgKFwiUHJvdG90eXBlIGlzIG5vdCBhIE1pZGlTeW50aGVzaXMgdHlwZS4gaGFzTWlkaUlucHV0IG11c3QgYmUgdHJ1ZSBhbmQgaGFzTWlkaU91dHB1dCBtdXN0IGJlIGZhbHNlXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHByb3RvdHlwZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24ocHJvdG90eXBlT2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYnVpbGROZXdTeW50aGVzaXNlck9iamVjdC5jYWxsKHNlbGYsIHByb3RvdHlwZU9iamVjdCkuY2F0Y2goZnVuY3Rpb24oZSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3coXCJQbHVnaW4gZGlkIG5vdCBnZXQgY3JlYXRlZCEgQWJvcnRpbmdcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbihub2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtaWRpU3ludGhTbG90ID0gbm9kZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbm5lY3Rpb25zLmZvckVhY2goZnVuY3Rpb24oY29ubikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pZGlTeW50aFNsb3Qubm9kZS5jb25uZWN0KGNvbm4uZGVzdGluYXRpb25Ob2RlLCBjb25uLm91dHB1dCwgY29ubi5pbnB1dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBtaWRpU3ludGhTbG90O1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgdmFyIFBsdWdpblVzZXJJbnRlcmZhY2VNZXNzYWdlSHViID0gKGZ1bmN0aW9uKGZhY3Rvcnkpe1xuICAgICAgICBmdW5jdGlvbiBidWlsZFBsdWdpbkludGVyZmFjZShwbHVnaW5fb2JqZWN0LCBpbnRlcmZhY2Vfb2JqZWN0KSB7XG4gICAgICAgICAgICB2YXIgaWZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlmcmFtZVwiKTtcbiAgICAgICAgICAgIGlmcmFtZS5zcmMgPSBpbnRlcmZhY2Vfb2JqZWN0LnNyYztcbiAgICAgICAgICAgIGlmIChpbnRlcmZhY2Vfb2JqZWN0LndpZHRoKSB7XG4gICAgICAgICAgICAgICAgaWZyYW1lLndpZHRoID0gaW50ZXJmYWNlX29iamVjdC53aWR0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpbnRlcmZhY2Vfb2JqZWN0LmhlaWdodCkge1xuICAgICAgICAgICAgICAgIGlmcmFtZS5oZWlnaHQgPSBpbnRlcmZhY2Vfb2JqZWN0LmhlaWdodDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmcmFtZS5zdHlsZS5ib3JkZXIgPSBcIjBcIjtcbiAgICAgICAgICAgIHJldHVybiBpZnJhbWU7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gc2V0RGVmYXVsdEludGVyZmFjZSh1cmwsIHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgICAgIGRlZmF1bHRfaW50ZXJmYWNlID0ge1xuICAgICAgICAgICAgICAgIHVybDogdXJsLFxuICAgICAgICAgICAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGhlaWdodFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJldHVybiBkZWZhdWx0X2ludGVyZmFjZTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBwb2xsQWxsUGx1Z2lucygpIHtcbiAgICAgICAgICAgIGZhY3RvcnkuZ2V0QWxsUGx1Z2lucygpLmZvckVhY2goZnVuY3Rpb24ocGx1Z2luKSB7XG4gICAgICAgICAgICAgICAgcGx1Z2luLm5vZGUuZXh0ZXJuYWxJbnRlcmZhY2UudXBkYXRlSW50ZXJmYWNlcyh0cnVlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGxpc3RlbmVyID0gZmFsc2U7XG4gICAgICAgIHZhciBkZWZhdWx0X2ludGVyZmFjZSA9IHtcbiAgICAgICAgICAgIHNyYzogXCJqc2FwX2RlZmF1bHQuaHRtbFwiXG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIE9iamVjdC5jcmVhdGUoe1xuICAgICAgICAgICAgXCJzZXREZWZhdWx0SW50ZXJmYWNlXCI6IHNldERlZmF1bHRJbnRlcmZhY2UsXG4gICAgICAgICAgICBcImJ1aWxkUGx1Z2luSW50ZXJmYWNlXCI6YnVpbGRQbHVnaW5JbnRlcmZhY2UsXG4gICAgICAgICAgICBcInBvbGxBbGxQbHVnaW5zXCI6IHBvbGxBbGxQbHVnaW5zXG4gICAgICAgIH0pO1xuICAgIH0pKHRoaXMpO1xuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgICBcImNvbnRleHRcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBhdWRpb19jb250ZXh0XG4gICAgICAgIH0sXG4gICAgICAgIFwiaGFzQXVkaW9TdGFydGVkXCI6IHtcbiAgICAgICAgICAgIFwiZ2V0XCI6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBhdWRpb1N0YXJ0ZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwicGx1Z2luUm9vdFVSTFwiOiB7XG4gICAgICAgICAgICBcImdldFwiOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJvb3RVUkw7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJzZXRcIjogZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcm9vdFVSTCA9IHQ7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByb290VVJMO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aHJvdyAoXCJDYW5ub3Qgc2V0IHJvb3QgVVJMIHdpdGhvdXQgYSBzdHJpbmdcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiY3JlYXRlRmFjdG9yeUNvcHlcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjb3B5RmFjdG9yeShjb250ZXh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJzdWJGYWN0b3JpZXNcIjoge1xuICAgICAgICAgICAgXCJnZXRcIjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN1YkZhY3RvcmllcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJQbHVnaW5HVUlcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBQbHVnaW5Vc2VySW50ZXJmYWNlTWVzc2FnZUh1YlxuICAgICAgICB9XG4gICAgfSk7XG59XG5cbmV4cG9ydCB7QmFzZVBsdWdpbiwgU3ludGhlc2lzZXJCYXNlUGx1Z2luLCBQbHVnaW5GYWN0b3J5fTtcbiIsIi8qIGpzaGludCBlc3ZlcnNpb246IDYgKi9cbmltcG9ydCB7QmFzZVBsdWdpbn0gZnJvbSBcIi4vYmFzZV9wbHVnaW5cIjtcblxudmFyIFN5bnRoZXNpc2VyQmFzZVBsdWdpbiA9IGZ1bmN0aW9uKGZhY3RvcnksIG93bmVyKVxue1xuICAgIHZhciBoYXNXYXJuZWRTY2hlZHVsZU5vdFNldCA9IGZhbHNlO1xuICAgIHZhciBoYXNXYXJuZWRDYW5jZWxOb3RTZXQgPSBmYWxzZTtcbiAgICBCYXNlUGx1Z2luLmNhbGwodGhpcywgZmFjdG9yeSwgb3duZXIpO1xuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgICBcImFkZElucHV0XCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdGhyb3coXCJDYW5ub3QgYWRkIGlucHV0IHRvIHR5cGUgXFxcIlN5bnRoZXNpc2VyQmFzZVBsdWdpblxcXCJcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiZGVsZXRlSW5wdXRcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyhcIkNhbm5vdCBkZWxldGUgaW5wdXQgdG8gdHlwZSBcXFwiU3ludGhlc2lzZXJCYXNlUGx1Z2luXFxcIlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJzY2hlZHVsZUV2ZW50XCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKG1zZywgY29udGV4dFRpbWUpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWhhc1dhcm5lZFNjaGVkdWxlTm90U2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybmluZyhcIldBUk5JTkcgLSAuc2NoZWR1bGVFdmVudCBpcyBub3Qgb3ZlcnJpZGRlblwiKTtcbiAgICAgICAgICAgICAgICAgICAgaGFzV2FybmVkU2NoZWR1bGVOb3RTZXQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIndyaXRhYmxlXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCJjYW5jZWxBbGxFdmVudHNcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWhhc1dhcm5lZENhbmNlbE5vdFNldCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm5pbmcoXCJXQVJOSU5HIC0gLmNhbmNlbEFsbEV2ZW50cyBpcyBub3Qgb3ZlcnJpZGRlblwiKTtcbiAgICAgICAgICAgICAgICAgICAgaGFzV2FybmVkQ2FuY2VsTm90U2V0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJ3cml0YWJsZVwiOiB0cnVlXG4gICAgICAgIH1cbiAgICB9KTtcbn07XG5TeW50aGVzaXNlckJhc2VQbHVnaW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShCYXNlUGx1Z2luLnByb3RvdHlwZSk7XG5TeW50aGVzaXNlckJhc2VQbHVnaW4ucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gU3ludGhlc2lzZXJCYXNlUGx1Z2luO1xuXG5leHBvcnQge1N5bnRoZXNpc2VyQmFzZVBsdWdpbn07XG4iXSwic291cmNlUm9vdCI6IiJ9