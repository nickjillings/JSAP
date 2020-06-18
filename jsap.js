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

/***/ "./src/Factory/PluginAssetsList.js":
/*!*****************************************!*\
  !*** ./src/Factory/PluginAssetsList.js ***!
  \*****************************************/
/*! exports provided: PluginAssetsList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PluginAssetsList", function() { return PluginAssetsList; });
/*eslint-env browser */
/* jshint esversion:6 */

function PluginAsset(url, resourceType) {
    this.url = url;
    this.resourceType = resourceType;
}

function PluginAssetsList(factoryContext) {
    var assetObjects = [];
    function findAssetByUrl(url) {
        return assetUrl.find(function(asset) {
            return asset.url == url;
        });
    }
    this.addAssetUrlToList = function(url, resourceType) {
        if (typeof url != "string") {
            throw "addAssetUrlToList Argument-1 must be a type of string";
        }
        if (findAssetByUrl(url)) {
            throw "URL \""+url+"\" already in this list";
        }
        assetObjects.push(new PluginAsset(url, resourceType));
        return assetObjects;
    };
    this.removeAssetFromList = function(asset) {
        var index = assetUrl.findIndex(function(asset) {
            return asset.url == url;
        });
        if (index == -1) {
            throw "Asset not in this list";
        }
        assetUrls.splice(index, 1);
        return assetUrls;
    };
    this.removeAssetUrlFromList = function(url) {
        if (typeof url != "string") {
            throw "removeAssetUrlFromList Argument-1 must be a type of string";
        }
        var asset = findAssetByUrl(url);
        return this.removeAssetFromList(asset);
    };
    this.assetObjects = assetObjects;
}




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
            O[name] = param.getParameterObject();
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
/* harmony import */ var _parameters_URLParameter_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./parameters/URLParameter.js */ "./src/parameters/URLParameter.js");
/* harmony import */ var _parameters_AssetParameter_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./parameters/AssetParameter.js */ "./src/parameters/AssetParameter.js");
/* jshint esversion: 6 */








var ParameterManager = function (owner, pluginExternalInterface) {
    var parameterList = [];
    var eventTarget = new EventTarget();

    function findParameter(name) {
        return parameterList.filter(function(p) {
            return p.exposed;
        }).find(function (e) {
            return e.name.toLowerCase() === name.toLowerCase();
        });
    }

    function findParameterIndex(name) {
        return parameterList.filter(function(p) {
            return p.exposed;
        }).findIndex(function (e) {
            return e.name.toLowerCase() === name.toLowerCase();
        });
    }

    function buildParameterObject() {
        var obj = {};
        parameterList.filter(function(p) {
            return p.exposed;
        }).forEach(function (e) {
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
            "value": function (name, defaultValue, minimum, maximum, toStringFunc, visibleName, exposed) {
                if (typeof name !== "string" || typeof defaultValue !== "number" || (minimum !== undefined && typeof minimum !== "number") || (maximum !== undefined && typeof maximum !== "number")) {
                    throw ("Invlid constructor");
                }
                if (typeof toStringFunc != "function" && toStringFunc !== undefined) {
                    throw ("toStringFunc must be a function or undefined");
                }
                if (findParameterIndex(name) !== -1) {
                    throw ("Parameter with name '" + name + "' already exists");
                }
                var param = new _parameters_NumberParameter_js__WEBPACK_IMPORTED_MODULE_0__["NumberParameter"](owner, name, defaultValue, minimum, maximum, toStringFunc, visibleName, exposed);
                addParameter(param, this);
                return param;
            }
        },
        'createStringParameter': {
            "value": function (name, defaultValue, maxLength, toStringFunc, visibleName, exposed) {
                if (typeof name !== "string" || typeof defaultValue !== "string" || (maxLength !== undefined && typeof maxLength !== "number")) {
                    throw ("Invlid constructor");
                }
                if (typeof toStringFunc != "function" && toStringFunc !== undefined) {
                    throw ("toStringFunc must be a function or undefined");
                }
                if (findParameterIndex(name) !== -1) {
                    throw ("Parameter with name '" + name + "' already exists");
                }
                var param = new _parameters_StringParameter_js__WEBPACK_IMPORTED_MODULE_1__["StringParameter"](owner, name, defaultValue, maxLength, toStringFunc, visibleName, exposed);
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
            "value": function (name, defaultValue, minState, maxState, toStringFunc, visibleName, exposed) {
                if (typeof name !== "string" || typeof defaultValue !== "number" || typeof minState !== "number" || typeof maxState !== "number") {
                    throw ("Invlid constructor");
                }
                if (typeof toStringFunc != "function" && toStringFunc !== undefined) {
                    throw ("toStringFunc must be a function or undefined");
                }
                if (findParameterIndex(name) !== -1) {
                    throw ("Parameter with name '" + name + "' already exists");
                }
                var param = new _parameters_SwitchParameter_js__WEBPACK_IMPORTED_MODULE_3__["SwitchParameter"](owner, name, defaultValue, minState, maxState, toStringFunc, visibleName, exposed);
                addParameter(param, this);
                return param;
            }
        },
        'createListParameter': {
            "value": function (name, defaultValue, listOfValues, toStringFunc, visibleName, exposed) {
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
                var param = new _parameters_ListParameter_js__WEBPACK_IMPORTED_MODULE_4__["ListParameter"](owner, name, defaultValue, listOfValues, toStringFunc, visibleName, exposed);
                addParameter(param, this);
                return param;
            }
        },
        'createURLParameter': {
            "value": function (name, defaultValue, maxLength, toStringFunc, visibleName, exposed) {
                if (typeof name !== "string" || (maxLength !== undefined && typeof maxLength !== "number")) {
                    throw ("Invlid constructor");
                }
                if (typeof toStringFunc != "function" && toStringFunc !== undefined) {
                    throw ("toStringFunc must be a function or undefined");
                }
                if (findParameterIndex(name) !== -1) {
                    throw ("Parameter with name '" + name + "' already exists");
                }
                var param = new _parameters_URLParameter_js__WEBPACK_IMPORTED_MODULE_5__["URLParameter"](owner, name, defaultValue, maxLength, toStringFunc, visibleName, exposed);
                addParameter(param, this);
                return param;
            }
        },
        'createAssetParameter': {
            "value": function (name, defaultValue, visibleName, exposed) {
                if (typeof name !== "string" || (maxLength !== undefined && typeof maxLength !== "number")) {
                    throw ("Invlid constructor");
                }
                if (typeof toStringFunc != "function" && toStringFunc !== undefined) {
                    throw ("toStringFunc must be a function or undefined");
                }
                if (findParameterIndex(name) !== -1) {
                    throw ("Parameter with name '" + name + "' already exists");
                }
                var param = new _parameters_AssetParameter_js__WEBPACK_IMPORTED_MODULE_6__["AssetParameter"](owner, name, defaultValue, maxLength, toStringFunc, visibleName, exposed);
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
                console.error("DEPRECATED - use getParameterNames");
                return this.getParameterNames();
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
                return parameterList.filter(function(p) {
                    return p.exposed;
                }).map(function(p) {
                    return p.name;
                });
            }
        },
        'setParameterByName': {
            'value': function (n, v, updateInterfaces) {
                var parameter = findParameter(n);
                if (!parameter) {
                    return;
                }
                if (parameter.exposed === false) {
                    throw "Cannot set hidden parameter";
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

/***/ "./src/parameters/AssetParameter.js":
/*!******************************************!*\
  !*** ./src/parameters/AssetParameter.js ***!
  \******************************************/
/*! exports provided: AssetParameter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetParameter", function() { return AssetParameter; });
/* harmony import */ var _PluginParameter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PluginParameter.js */ "./src/parameters/PluginParameter.js");
/* harmony import */ var _URLParameter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./URLParameter.js */ "./src/parameters/URLParameter.js");
/* jshint esversion: 6 */



function AssetParameter(owner, name, defaultValue, visibleName, exposed) {
    _PluginParameter_js__WEBPACK_IMPORTED_MODULE_0__["PluginParameter"].call(this, owner, name, "String", visibleName, exposed);
    var assetUrl = new _URLParameter_js__WEBPACK_IMPORTED_MODULE_1__["URLParameter"](this, name+" url", defaultValue);
    var onerrorCallback, onloadCallback;
    var audioBuffer;

    function loadAsset() {
        audioBuffer = undefined;
        assetUrl.getResource("arraybuffer").then(owner.context.decodeAudioData).then(function(buffer) {
            audioBuffer = buffer;
            if (onloadCallback) {
                onloadCallback(buffer);
            }
        }, function(e){
            if (onerrorCallback) {
                onerrorCallback(e);
            }
        });
    }

    Object.defineProperties(this, {
        "onload": {
            "get": function () {
                return onloadCallback;
            },
            "set": function(f) {
                if (typeof f != "function") {
                    throw("AssetParameter::onload requires a function with one argument to be set");
                } else {
                    onloadCallback = f;
                    return onloadCallback;
                }
            }
        },
        "onerror": {
            "get": function () {
                return onerrorCallback;
            },
            "set": function(f) {
                if (typeof f != "function") {
                    throw("AssetParameter::onerror requires a function with one argument to be set");
                } else {
                    onerrorCallback = f;
                    return onerrorCallback;
                }
            }
        },
        "type": {
            "value": "Asset"
        },
        "destroy": {
            "value": function () {
                assetUrl.destroy();
                owner = name = defaultValue = assetUrl = undefined;
            }
        },
        "defaultValue": {
            "value": defaultValue
        },
        "value": {
            "get": function () {
                return assetUrl.value;
            },
            "set": function (v) {
                var tv = v;
                assetUrl.value = v;
                if (assetUrl.value != tv) {
                    // asset has changed url.
                    loadAsset();
                }
                return assetUrl.value;
            }
        },
        "setValue": {
            "value": function(v, updateInterfaces) {
                return assetUrl.setValue(v, updateInterfaces);
            }
        },
        "buffer": {
            "get": function() {return audioBuffer;}
        },
        "toString": {
            "value": function(v) {
                return assetUrl.toString(v);
            }
        },
        "getParameterObject": {
            "value": function() {
                return {
                    value: assetUrl.value,
                    loaded: (audioBuffer !== undefined),
                    defaultValue: defaultValue,
                    visibleName: name,
                    type: "AssetParameter",
                    name: name
                };
            }
        }
    });
}
AssetParameter.prototype = Object.create(_PluginParameter_js__WEBPACK_IMPORTED_MODULE_0__["PluginParameter"].prototype);
AssetParameter.prototype.constructor = AssetParameter;




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


function ButtonParameter(owner, name, visibleName, exposed) {
    _PluginParameter_js__WEBPACK_IMPORTED_MODULE_0__["PluginParameter"].call(this, owner, name, "Button", visibleName, exposed);
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
        },
        "getParameterObject": {
            "value": function() {
                return {
                    visibleName: name,
                    type: "ButtonParameter",
                    name: name
                };
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



function ListParameter(owner, name, defaultValue, listOfValues, toStringFunc, visibleName, exposed) {
    _PluginParameter_js__WEBPACK_IMPORTED_MODULE_0__["PluginParameter"].call(this, owner, name, "Button", visibleName, exposed);
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
                    audioParameter.value = this.update(listOfValues[_index]);
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
        "addOptionToList": {
            "value": function(t) {
                var type = typeof t;
                if (type != "string" && type != "number") {
                    throw "ListParameter::addOptionToList Argument 1 must be of type string or number";
                }
                if (listOfValues.includes(t)) {
                    throw "ListParameter::addOptionToList Argument 1 contains a value already in the list options";
                }
                listOfValues.push(t);
                return listOfValues;
            }
        },
        "deleteOptionFromList": {
            "value": function(t) {
                var index = listOfValues.indexOf(t);
                var _value = listOfValues[_index];
                if (index == -1) {
                    throw "ListParameter::deleteOptionFromList item \""+t+"\" does not exist in this list";
                }
                listOfValues.splice(index, 1);
                _index = _index % listOfValues.length;
                return listOfValues;
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
        },
        "getParameterObject": {
            "value": function() {
                return {
                    value: this.value,
                    options: listOfValues,
                    defaultValue: defaultValue,
                    minimum: 0,
                    maximum: listOfValues.length,
                    visibleName: name,
                    type: "ListParameter",
                    name: name
                };
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



function NumberParameter(owner, name, defaultValue, minimum, maximum, toStringFunc, visibleName, exposed) {
    _PluginParameter_js__WEBPACK_IMPORTED_MODULE_0__["PluginParameter"].call(this, owner, name, "Number", visibleName, exposed);
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
        },
        "getParameterObject": {
            "value": function() {
                return {
                    value: this.value,
                    defaultValue: defaultValue,
                    minimum: minimum,
                    maximum: maximum,
                    visibleName: name,
                    type: "NumberParameter",
                    name: name
                };
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
function PluginParameter(owner, name, dataType, visibleName, exposed) {
    var update, translate, trigger;
    var eventTarget = new EventTarget();
    update = translate = function (v) {
        return v;
    };
    trigger = function () {};
    if (typeof visibleName != "string" || visibleName.length == 0) {
        visibleName = name;
    }
    if (exposed === undefined) {
        exposed = true;
    }
    if (typeof exposed != "boolean") {
        console.warn("exposed parameter is not of type boolean, assuming exposed = true");
        exposed = true;
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
        "visibleName": {
            "value": visibleName
        },
        "exposed": {
            "value": exposed
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


function StringParameter(owner, name, defaultValue, maxLength, toStringFunc, visibleName, exposed) {
    _PluginParameter_js__WEBPACK_IMPORTED_MODULE_0__["PluginParameter"].call(this, owner, name, "String", visibleName, exposed);
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
        },
        "getParameterObject": {
            "value": function() {
                return {
                    value: this.value,
                    defaultValue: defaultValue,
                    maxLength: maxLength,
                    visibleName: name,
                    type: "StringParameter",
                    name: name
                };
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



function SwitchParameter(owner, name, defaultValue, minState, maxState, toStringFunc, visibleName, exposed) {
    _PluginParameter_js__WEBPACK_IMPORTED_MODULE_0__["PluginParameter"].call(this, owner, name, "Button", visibleName, exposed);
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
        },
        "getParameterObject": {
            "value": function() {
                return {
                    value: this.value,
                    defaultValue: defaultValue,
                    minimum: minState,
                    maximum: maxState,
                    visibleName: name,
                    type: "SwitchParameter",
                    name: name
                };
            }
        }
    });
}
SwitchParameter.prototype = Object.create(_PluginParameter_js__WEBPACK_IMPORTED_MODULE_0__["PluginParameter"].prototype);
SwitchParameter.prototype.constructor = SwitchParameter;




/***/ }),

/***/ "./src/parameters/URLParameter.js":
/*!****************************************!*\
  !*** ./src/parameters/URLParameter.js ***!
  \****************************************/
/*! exports provided: URLParameter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URLParameter", function() { return URLParameter; });
/* harmony import */ var _PluginParameter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PluginParameter.js */ "./src/parameters/PluginParameter.js");
/* jshint esversion: 6 */


function URLParameter(owner, name, defaultValue, maxLength, toStringFunc, visibleName, exposed) {
    _PluginParameter_js__WEBPACK_IMPORTED_MODULE_0__["PluginParameter"].call(this, owner, name, "String", visibleName, exposed);
    var _value = defaultValue;
    var resourceObject;

    function getResource(type) {
        if (resourceObject != undefined) {
            return resourceObject;
        } else {
            resourceObject = new Promise(function(resolve, reject) {
                var xhr = new XMLHttpRequest();
                xhr.open("GET", _value);
                xhr.responseType = type;
                xhr.onload = function(e) {
                    if (xhr.status == 200) {
                        resolve(e.target.response);
                    } else {
                        reject({
                            code: xhr.status,
                            message: e.target.responseText
                        });
                    }

                };
                xhr.onerror = function(e) {
                    reject({
                        code: xhr.status,
                        message: "error"
                    });
                };
                xhr.ontimeout = function(e) {
                    reject({
                        code: xhr.status,
                        message: "timeout"
                    });
                };
                xhr.send();
            });
        }
    }

    function setValue(v, updateInterfaces) {
        if (maxLength) {
            if (v.length > maxLength) {
                throw ("String longer than " + maxLength + " characters");
            }
        }
        if (!v.startsWith("http://") && !v.startsWith("https://")) {
            throw("URL must start with 'http://' or 'https://'");
        }
        if (_value !== v) {
            resourceObject = undefined;
            _value = v;
            this.triggerParameterSet(updateInterfaces);
        }
        this.trigger();
    }

    Object.defineProperties(this, {
        "type": {
            "value": "URL"
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
        "getResource":{
            "value": getResource
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
        },
        "getParameterObject": {
            "value": function() {
                return {
                    value: this.value,
                    defaultValue: defaultValue,
                    maxLength: maxLength,
                    visibleName: name,
                    type: "URLParameter",
                    name: name
                };
            }
        }
    });
}
URLParameter.prototype = Object.create(_PluginParameter_js__WEBPACK_IMPORTED_MODULE_0__["PluginParameter"].prototype);
URLParameter.prototype.constructor = URLParameter;




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

/* harmony import */ var _Factory_PluginAssetsList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Factory/PluginAssetsList */ "./src/Factory/PluginAssetsList.js");
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

    this.pluginAssetsList = new _Factory_PluginAssetsList__WEBPACK_IMPORTED_MODULE_3__["PluginAssetsList"](this);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9KU0FQL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0pTQVAvKHdlYnBhY2spL2J1aWxkaW4vYW1kLW9wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vSlNBUC8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vSlNBUC8od2VicGFjaykvYnVpbGRpbi9oYXJtb255LW1vZHVsZS5qcyIsIndlYnBhY2s6Ly9KU0FQLy4vc3JjL0ZhY3RvcnkvUGx1Z2luQXNzZXRzTGlzdC5qcyIsIndlYnBhY2s6Ly9KU0FQLy4vc3JjL0xpbmtlZFN0b3JlLmpzIiwid2VicGFjazovL0pTQVAvLi9zcmMvYmFzZV9wbHVnaW4uanMiLCJ3ZWJwYWNrOi8vSlNBUC8uL3NyYy9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vSlNBUC8uL3NyYy9wYXJhbWV0ZXJNYW5hZ2VyLmpzIiwid2VicGFjazovL0pTQVAvLi9zcmMvcGFyYW1ldGVycy9Bc3NldFBhcmFtZXRlci5qcyIsIndlYnBhY2s6Ly9KU0FQLy4vc3JjL3BhcmFtZXRlcnMvQnV0dG9uUGFyYW1ldGVyLmpzIiwid2VicGFjazovL0pTQVAvLi9zcmMvcGFyYW1ldGVycy9MaXN0UGFyYW1ldGVyLmpzIiwid2VicGFjazovL0pTQVAvLi9zcmMvcGFyYW1ldGVycy9OdW1iZXJQYXJhbWV0ZXIuanMiLCJ3ZWJwYWNrOi8vSlNBUC8uL3NyYy9wYXJhbWV0ZXJzL1BhcmFtZXRlckF1dG9tYXRpb24uanMiLCJ3ZWJwYWNrOi8vSlNBUC8uL3NyYy9wYXJhbWV0ZXJzL1BsdWdpblBhcmFtZXRlci5qcyIsIndlYnBhY2s6Ly9KU0FQLy4vc3JjL3BhcmFtZXRlcnMvU3RyaW5nUGFyYW1ldGVyLmpzIiwid2VicGFjazovL0pTQVAvLi9zcmMvcGFyYW1ldGVycy9Td2l0Y2hQYXJhbWV0ZXIuanMiLCJ3ZWJwYWNrOi8vSlNBUC8uL3NyYy9wYXJhbWV0ZXJzL1VSTFBhcmFtZXRlci5qcyIsIndlYnBhY2s6Ly9KU0FQLy4vc3JjL3BsdWdpbi1mYWN0b3J5LmpzIiwid2VicGFjazovL0pTQVAvLi9zcmMvc3ludGhfYmFzZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNEQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRDQUE0Qzs7QUFFNUM7Ozs7Ozs7Ozs7OztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN2QkE7QUFBQTtBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFMEI7Ozs7Ozs7Ozs7Ozs7QUM3QzFCO0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVlLGdFQUFDLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7OztBQ3pJN0I7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDdUQ7O0FBRXZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLHFFQUFnQjtBQUMxQztBQUNBLG1FQUFtRSxpQkFBaUI7QUFDcEYsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsd0JBQXdCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsT0FBTztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsb0NBQW9DO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCLGlCQUFpQjtBQUNqQjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixrQkFBa0I7QUFDNUM7QUFDQSxtQkFBbUIsMEJBQTBCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSx3QkFBd0IsOEJBQThCO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBOztBQUVBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRW9COzs7Ozs7Ozs7Ozs7O0FDdHRCcEI7QUFBQTtBQUFrRjs7QUFFbEY7QUFDQTtBQUNBLHdDQUF3QyxnR0FBVTtBQUNsRDtBQUNBO0FBQ0EsS0FBSyxVQUFVLEtBQXlCO0FBQ3hDO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFFLFNBQUk7QUFDUDtBQUNBO0FBQ0EsdUJBQXVCLDZEQUFhO0FBQ3BDLG9CQUFvQiwwREFBVTtBQUM5QiwrQkFBK0IscUVBQXFCO0FBQ3BEO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUN4QkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDZ0U7QUFDQTtBQUNBO0FBQ0E7QUFDSjtBQUNGO0FBQ0k7O0FBRTlEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0VBQStFLHlCQUF5QjtBQUN4RztBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsOEVBQWU7QUFDL0M7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsOEVBQWU7QUFDL0M7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsOEVBQWU7QUFDL0M7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsOEVBQWU7QUFDL0M7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsMEVBQWE7QUFDN0M7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0Msd0VBQVk7QUFDNUM7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsNEVBQWM7QUFDOUM7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFMEI7Ozs7Ozs7Ozs7Ozs7QUNwUjFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDcUQ7QUFDTjs7QUFFL0M7QUFDQSxJQUFJLG1FQUFlO0FBQ25CLHVCQUF1Qiw2REFBWTtBQUNuQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsK0JBQStCO0FBQy9CLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSx5Q0FBeUMsbUVBQWU7QUFDeEQ7O0FBRXdCOzs7Ozs7Ozs7Ozs7O0FDM0d4QjtBQUFBO0FBQUE7QUFBQTtBQUNxRDs7QUFFckQ7QUFDQSxJQUFJLG1FQUFlO0FBQ25COztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLDBDQUEwQyxtRUFBZTtBQUN6RDs7QUFFeUI7Ozs7Ozs7Ozs7Ozs7QUN6Q3pCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDcUQ7QUFDWTs7QUFFakU7QUFDQSxJQUFJLG1FQUFlO0FBQ25CO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLCtFQUF1QjtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0Esd0NBQXdDLG1FQUFlO0FBQ3ZEOztBQUV1Qjs7Ozs7Ozs7Ozs7OztBQzdMdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNxRDtBQUNjOztBQUVuRTtBQUNBLElBQUksbUVBQWU7QUFDbkI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLGlGQUF5QjtBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLDBDQUEwQyxtRUFBZTtBQUN6RDs7QUFFeUI7Ozs7Ozs7Ozs7Ozs7QUM3S3pCO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUU0RDs7Ozs7Ozs7Ozs7OztBQzFVNUQ7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRXlCOzs7Ozs7Ozs7Ozs7O0FDeEd6QjtBQUFBO0FBQUE7QUFBQTtBQUNxRDs7QUFFckQ7QUFDQSxJQUFJLG1FQUFlO0FBQ25CO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSwwQ0FBMEMsbUVBQWU7QUFDekQ7O0FBRXlCOzs7Ozs7Ozs7Ozs7O0FDcEd6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ3FEO0FBQ1k7O0FBRWpFO0FBQ0EsSUFBSSxtRUFBZTtBQUNuQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLCtFQUF1QjtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLDBDQUEwQyxtRUFBZTtBQUN6RDs7QUFFeUI7Ozs7Ozs7Ozs7Ozs7QUNwS3pCO0FBQUE7QUFBQTtBQUFBO0FBQ3FEOztBQUVyRDtBQUNBLElBQUksbUVBQWU7QUFDbkI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLHVDQUF1QyxtRUFBZTtBQUN0RDs7QUFFc0I7Ozs7Ozs7Ozs7Ozs7QUM1SHRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRXVDO0FBQ0M7QUFDVTtBQUNTOztBQUU1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0NBQWdDLDBFQUFnQjs7QUFFaEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekIscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMscUNBQXFDO0FBQzVFO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMkJBQTJCLHNDQUFzQztBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQiw2QkFBNkI7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsbUJBQW1CLHlCQUF5QjtBQUM1QztBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0Isd0JBQXdCO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIscUJBQXFCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1Qyw0QkFBNEI7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDJCQUEyQiwwQkFBMEI7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLE9BQU87QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLDRDQUE0QztBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0EsdUJBQXVCLG9EQUFXO0FBQ2xDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0EsMkJBQTJCLG9EQUFXO0FBQ3RDLHdCQUF3QixvREFBVzs7QUFFbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixPQUFPO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixvQ0FBb0M7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekIscUJBQXFCO0FBQ3JCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLDBCQUEwQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsNEJBQTRCLDhCQUE4QjtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDZCQUE2QixvREFBVztBQUN4Qyw4QkFBOEIsb0RBQVc7O0FBRXpDOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQXVCLHdCQUF3QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsT0FBTztBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QixxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekIscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekIscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFMEQ7Ozs7Ozs7Ozs7Ozs7O0FDdjBEMUQ7QUFBQTtBQUFBO0FBQUE7QUFDeUM7O0FBRXpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSx1REFBVTs7QUFFZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLGdEQUFnRCx1REFBVTtBQUMxRDs7QUFFK0IiLCJmaWxlIjoiSlNBUC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL21vZHVsZS5qc1wiKTtcbiIsIi8qIGdsb2JhbHMgX193ZWJwYWNrX2FtZF9vcHRpb25zX18gKi9cbm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX2FtZF9vcHRpb25zX187XG4iLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9yaWdpbmFsTW9kdWxlKSB7XG5cdGlmICghb3JpZ2luYWxNb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XG5cdFx0dmFyIG1vZHVsZSA9IE9iamVjdC5jcmVhdGUob3JpZ2luYWxNb2R1bGUpO1xuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxuXHRcdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImxvYWRlZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5sO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiaWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUuaTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImV4cG9ydHNcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZVxuXHRcdH0pO1xuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xuXHR9XG5cdHJldHVybiBtb2R1bGU7XG59O1xuIiwiLyplc2xpbnQtZW52IGJyb3dzZXIgKi9cclxuLyoganNoaW50IGVzdmVyc2lvbjo2ICovXHJcblxyXG5mdW5jdGlvbiBQbHVnaW5Bc3NldCh1cmwsIHJlc291cmNlVHlwZSkge1xyXG4gICAgdGhpcy51cmwgPSB1cmw7XHJcbiAgICB0aGlzLnJlc291cmNlVHlwZSA9IHJlc291cmNlVHlwZTtcclxufVxyXG5cclxuZnVuY3Rpb24gUGx1Z2luQXNzZXRzTGlzdChmYWN0b3J5Q29udGV4dCkge1xyXG4gICAgdmFyIGFzc2V0T2JqZWN0cyA9IFtdO1xyXG4gICAgZnVuY3Rpb24gZmluZEFzc2V0QnlVcmwodXJsKSB7XHJcbiAgICAgICAgcmV0dXJuIGFzc2V0VXJsLmZpbmQoZnVuY3Rpb24oYXNzZXQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGFzc2V0LnVybCA9PSB1cmw7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmFkZEFzc2V0VXJsVG9MaXN0ID0gZnVuY3Rpb24odXJsLCByZXNvdXJjZVR5cGUpIHtcclxuICAgICAgICBpZiAodHlwZW9mIHVybCAhPSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgIHRocm93IFwiYWRkQXNzZXRVcmxUb0xpc3QgQXJndW1lbnQtMSBtdXN0IGJlIGEgdHlwZSBvZiBzdHJpbmdcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGZpbmRBc3NldEJ5VXJsKHVybCkpIHtcclxuICAgICAgICAgICAgdGhyb3cgXCJVUkwgXFxcIlwiK3VybCtcIlxcXCIgYWxyZWFkeSBpbiB0aGlzIGxpc3RcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgYXNzZXRPYmplY3RzLnB1c2gobmV3IFBsdWdpbkFzc2V0KHVybCwgcmVzb3VyY2VUeXBlKSk7XHJcbiAgICAgICAgcmV0dXJuIGFzc2V0T2JqZWN0cztcclxuICAgIH07XHJcbiAgICB0aGlzLnJlbW92ZUFzc2V0RnJvbUxpc3QgPSBmdW5jdGlvbihhc3NldCkge1xyXG4gICAgICAgIHZhciBpbmRleCA9IGFzc2V0VXJsLmZpbmRJbmRleChmdW5jdGlvbihhc3NldCkge1xyXG4gICAgICAgICAgICByZXR1cm4gYXNzZXQudXJsID09IHVybDtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAoaW5kZXggPT0gLTEpIHtcclxuICAgICAgICAgICAgdGhyb3cgXCJBc3NldCBub3QgaW4gdGhpcyBsaXN0XCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGFzc2V0VXJscy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIHJldHVybiBhc3NldFVybHM7XHJcbiAgICB9O1xyXG4gICAgdGhpcy5yZW1vdmVBc3NldFVybEZyb21MaXN0ID0gZnVuY3Rpb24odXJsKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB1cmwgIT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICB0aHJvdyBcInJlbW92ZUFzc2V0VXJsRnJvbUxpc3QgQXJndW1lbnQtMSBtdXN0IGJlIGEgdHlwZSBvZiBzdHJpbmdcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGFzc2V0ID0gZmluZEFzc2V0QnlVcmwodXJsKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZW1vdmVBc3NldEZyb21MaXN0KGFzc2V0KTtcclxuICAgIH07XHJcbiAgICB0aGlzLmFzc2V0T2JqZWN0cyA9IGFzc2V0T2JqZWN0cztcclxufVxyXG5cclxuZXhwb3J0IHtQbHVnaW5Bc3NldHNMaXN0fTtcclxuIiwiLypnbG9iYWxzIGRvY3VtZW50ICovXHJcbi8qZXNsaW50LWVudiBicm93c2VyICovXHJcblxyXG52YXIgTGlua2VkU3RvcmUgPSBmdW5jdGlvbiAoc3RvcmVOYW1lKSB7XHJcbiAgICAvLyBTdG9yZSBmb3IgdGhlIHNlbWFudGljIHRlcm1zLCBlYWNoIHN0b3JlIGhvbGRzIGl0cyBvd24gZGF0YSB0cmVlXHJcbiAgICAvLyBUZXJtcyBhcmUgYWRkZWQgYXMga2V5L3ZhbHVlIHBhcmlzIHRvIGEgcm9vdCBub2RlXHJcbiAgICB2YXIgcm9vdCA9IHt9O1xyXG5cclxuICAgIGZ1bmN0aW9uIG9iamVjdFRvWE1MKG9iaiwgcm9vdCwgZG9jKSB7XHJcbiAgICAgICAgLy8gVXNlZCBpZiBhbiBvYmplY3Qgd2FzIHBhc3NlZCBhcyBhIHRlcm0gdmFsdWVcclxuICAgICAgICB2YXIgdGVybTtcclxuICAgICAgICBmb3IgKHRlcm0gaW4gb2JqKSB7XHJcbiAgICAgICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkodGVybSkpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygb2JqW3Rlcm1dID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRvY05vZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9ialt0ZXJtXS50b1hNTCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2NOb2RlID0gb2JqW3Rlcm1dLnRvWE1MKGRvYyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jTm9kZSA9IGRvYy5jcmVhdGVFbGVtZW50KHRlcm0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByb290LmFwcGVuZENoaWxkKGRvY05vZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob2JqW3Rlcm1dLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXlUb1hNTChvYmpbdGVybV0sIGRvY05vZGUsIGRvYyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RUb1hNTChvYmpbdGVybV0sIGRvY05vZGUsIGRvYyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcm9vdC5hcHBlbmRDaGlsZChkb2NOb2RlKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcm9vdC5zZXRBdHRyaWJ1dGUodGVybSwgb2JqW3Rlcm1dKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBhcnJheVRvWE1MKGFyciwgcm9vdCwgZG9jKSB7XHJcbiAgICAgICAgLy8gVXNlZCB0byBjb252ZXJ0IGFuIGFycmF5IHRvIGEgbGlzdCBvZiBYTUwgZW50cmllc1xyXG4gICAgICAgIHZhciBhbGxfbnVtYmVycyA9IHRydWUsXHJcbiAgICAgICAgICAgIGFsbF9zdHJpbmdzID0gdHJ1ZSxcclxuICAgICAgICAgICAgaSwgbCA9IGFyci5sZW5ndGg7XHJcbiAgICAgICAgYWxsX251bWJlcnMgPSBhcnIuZXZlcnkoZnVuY3Rpb24gKGEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHR5cGVvZiBhID09PSBcIm51bWJlclwiO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGFsbF9zdHJpbmdzID0gYXJyLmV2ZXJ5KGZ1bmN0aW9uIChhKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0eXBlb2YgYSA9PT0gXCJzdHJpbmdcIjtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAoYWxsX251bWJlcnMgfHwgYWxsX3N0cmluZ3MpIHtcclxuICAgICAgICAgICAgLy8gQW4gYXJyYXkgb2YgbnVtYmVycyBvciBzdHJpbmdzXHJcbiAgICAgICAgICAgIGFyci5mb3JFYWNoKGZ1bmN0aW9uIChhLCBpKSB7XHJcbiAgICAgICAgICAgICAgICByb290LnNldEF0dHJpYnV0ZShcImluZGV4LVwiICsgaSwgYSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIEFuIGFycmF5IG9mIG9iamVjdHNcclxuICAgICAgICAgICAgYXJyLmZvckVhY2goZnVuY3Rpb24gKGEsIGkpIHtcclxuICAgICAgICAgICAgICAgIHZhciBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInZhbHVlXCIpO1xyXG4gICAgICAgICAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoXCJpbmRleFwiLCBpKTtcclxuICAgICAgICAgICAgICAgIG9iamVjdFRvWE1MKGEsIG5vZGUsIGRvYyk7XHJcbiAgICAgICAgICAgICAgICByb290LmFwcGVuZENoaWxkKG5vZGUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xyXG4gICAgICAgICduYW1lJzoge1xyXG4gICAgICAgICAgICAnZ2V0JzogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0b3JlTmFtZTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgJ3NldCc6IGZ1bmN0aW9uIChuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RvcmVOYW1lID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lID0gc3RvcmVOYW1lO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyAoXCJOYW1lIGlzIGFscmVhZHkgc2V0XCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICAnYWRkVGVybSc6IHtcclxuICAgICAgICAgICAgJ3ZhbHVlJzogZnVuY3Rpb24gKHRlcm0sIHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRlcm0gIT09IFwic3RyaW5nXCIgJiYgdGVybS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyAoXCJ0ZXJtIG11c3QgYmUgYSBzdHJpbmdcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByb290W3Rlcm1dID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgICdhZGRUZXJtcyc6IHtcclxuICAgICAgICAgICAgJ3ZhbHVlJzogZnVuY3Rpb24gKHRlcm1zT2JqZWN0KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRlcm1zT2JqZWN0ICE9PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgKFwiYWRkVGVybXMgdGFrZXMgYW4gb2JqZWN0IG9mIHRlcm0vdmFsdWUgcGFpcnNcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2YXIgdGVybTtcclxuICAgICAgICAgICAgICAgIGZvciAodGVybSBpbiB0ZXJtc09iamVjdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ZXJtc09iamVjdC5oYXNPd25Qcm9wZXJ0eSh0ZXJtKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZFRlcm0odGVybSwgdGVybXNPYmplY3RbdGVybV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJ2RlbGV0ZVRlcm0nOiB7XHJcbiAgICAgICAgICAgICd2YWx1ZSc6IGZ1bmN0aW9uICh0ZXJtKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkZFRlcm0odGVybSwgdW5kZWZpbmVkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJ2dldFRlcm0nOiB7XHJcbiAgICAgICAgICAgICd2YWx1ZSc6IGZ1bmN0aW9uICh0ZXJtKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRlcm0gIT09IFwic3RyaW5nXCIgJiYgdGVybS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyAoXCJ0ZXJtIG11c3QgYmUgYSBzdHJpbmdcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcm9vdFt0ZXJtXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJ2hhc1Rlcm0nOiB7XHJcbiAgICAgICAgICAgICd2YWx1ZSc6IGZ1bmN0aW9uICh0ZXJtKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRlcm0gIT09IFwic3RyaW5nXCIgJiYgdGVybS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyAoXCJ0ZXJtIG11c3QgYmUgYSBzdHJpbmdcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcm9vdC5oYXNPd25Qcm9wZXJ0eSh0ZXJtKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJ3RvSlNPTic6IHtcclxuICAgICAgICAgICAgJ3ZhbHVlJzogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkocm9vdCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICAndG9YTUwnOiB7XHJcbiAgICAgICAgICAgICd2YWx1ZSc6IGZ1bmN0aW9uIChkb2MpIHtcclxuICAgICAgICAgICAgICAgIHZhciBub2RlO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFkb2MpIHtcclxuICAgICAgICAgICAgICAgICAgICBkb2MgPSBkb2N1bWVudC5pbXBsZW1lbnRhdGlvbi5jcmVhdGVEb2N1bWVudChudWxsLCBzdG9yZU5hbWUsIG51bGwpO1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUgPSBkb2MuZmlyc3RFbGVtZW50Q2hpbGQ7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUgPSBkb2MuY3JlYXRlRWxlbWVudChzdG9yZU5hbWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgb2JqZWN0VG9YTUwocm9vdCwgbm9kZSwgZG9jKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBub2RlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7TGlua2VkU3RvcmV9O1xyXG4iLCIvLyBBZGQgZ2V0SW5wdXRzIHRvIGFsbCBBdWRpb05vZGVzIHRvIGVhc2UgZGVwbG95bWVudFxyXG4vKmdsb2JhbHMgQXVkaW9Ob2RlLCBXb3JrZXIsIGNvbnNvbGUsIHdpbmRvdywgZG9jdW1lbnQsIFByb21pc2UsIFhNTEh0dHBSZXF1ZXN0ICovXHJcbi8qZXNsaW50LWVudiBicm93c2VyICovXHJcbi8qanNoaW50IGVzdmVyc2lvbjogNiAqL1xyXG5pbXBvcnQge1BhcmFtZXRlck1hbmFnZXJ9IGZyb20gXCIuL3BhcmFtZXRlck1hbmFnZXIuanNcIjtcclxuXHJcbmlmICh0eXBlb2YgQXVkaW9Ob2RlID09PSBcImZ1bmN0aW9uXCIgJiYgd2luZG93LmltcG9ydFNjcmlwdHMgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgQXVkaW9Ob2RlLnByb3RvdHlwZS5nZXRJbnB1dHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIFt0aGlzXTtcclxuICAgIH07XHJcbn1cclxuXHJcbi8vIFRoaXMgc2hvdWxkIHNpbXBseSBkZWZpbmUgdGhlIEJhc2VQbHVnaW4gZnJvbSB3aGljaCBjdXN0b20gcGx1Z2lucyBjYW4gYmUgYnVpbHQgZnJvbVxyXG52YXIgQmFzZVBsdWdpbiA9IGZ1bmN0aW9uKGZhY3RvcnksIG93bmVyKSB7XHJcbiAgICB2YXIgaW5wdXRMaXN0ID0gW10sXHJcbiAgICAgICAgb3V0cHV0TGlzdCA9IFtdLFxyXG4gICAgICAgIHBPd25lciA9IG93bmVyLFxyXG4gICAgICAgIGRlbGF5U2FtcGxlcyA9IDAsXHJcbiAgICAgICAgZXZlbnRUYXJnZXQgPSBuZXcgRXZlbnRUYXJnZXQoKSxcclxuICAgICAgICBleHRlcm5hbEludGVyZmFjZSA9IG5ldyBQbHVnaW5JbnRlcmZhY2VNZXNzYWdlSHViKHRoaXMpO1xyXG4gICAgaWYgKHRoaXMuY29udGV4dCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gZmFjdG9yeS5jb250ZXh0O1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuZmFjdG9yeSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgdGhpcy5mYWN0b3J5ID0gZmFjdG9yeTtcclxuICAgIH1cclxuICAgIHRoaXMuZmVhdHVyZU1hcCA9IG5ldyBQbHVnaW5GZWF0dXJlSW50ZXJmYWNlKHRoaXMpO1xyXG4gICAgdGhpcy5wYXJhbWV0ZXJzID0gbmV3IFBhcmFtZXRlck1hbmFnZXIodGhpcywgZXh0ZXJuYWxJbnRlcmZhY2UpO1xyXG4gICAgdGhpcy5wYXJhbWV0ZXJzLmFkZEV2ZW50TGlzdGVuZXIoXCJwYXJhbWV0ZXJzZXRcIiwgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGV2ZW50VGFyZ2V0LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwicGFyYW1ldGVyc2V0XCIsIHtkZXRhaWw6IGUuZGV0YWlsfSkpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZnVuY3Rpb24gZGVsZXRlSU8obm9kZSwgbGlzdCkge1xyXG4gICAgICAgIHZhciBpID0gbGlzdC5maW5kSW5kZXgoZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGUgPT09IHRoaXM7XHJcbiAgICAgICAgfSwgbm9kZSk7XHJcbiAgICAgICAgaWYgKGkgPT09IC0xKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGlzdC5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5hZGRJbnB1dCA9IGZ1bmN0aW9uIChub2RlKSB7XHJcbiAgICAgICAgaW5wdXRMaXN0LnB1c2gobm9kZSk7XHJcbiAgICAgICAgcmV0dXJuIGlucHV0TGlzdDtcclxuICAgIH07XHJcbiAgICB0aGlzLmRlbGV0ZUlucHV0ID0gZnVuY3Rpb24gKG5vZGUpIHtcclxuICAgICAgICByZXR1cm4gZGVsZXRlSU8obm9kZSwgaW5wdXRMaXN0KTtcclxuICAgIH07XHJcbiAgICB0aGlzLmFkZE91dHB1dCA9IGZ1bmN0aW9uIChub2RlKSB7XHJcbiAgICAgICAgb3V0cHV0TGlzdC5wdXNoKG5vZGUpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLm91dHB1dHM7XHJcbiAgICB9O1xyXG4gICAgdGhpcy5kZWxldGVPdXRwdXQgPSBmdW5jdGlvbiAobm9kZSkge1xyXG4gICAgICAgIHJldHVybiBkZWxldGVJTyhub2RlLCBvdXRwdXRMaXN0KTtcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5zZXRQcm9jZXNzaW5nRGVsYXlBc1NlY29uZHMgPSBmdW5jdGlvbihzZWNvbmRzKSB7XHJcbiAgICAgICAgdmFyIGZzID0gZmFjdG9yeS5jb250ZXh0LnNhbXBsZVJhdGU7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBzZWNvbmRzID09IFwibnVtYmVyXCIgJiYgaXNGaW5pdGUoc2Vjb25kcykgJiYgc2Vjb25kcyA+PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNldFByb2Nlc3NpbmdEZWxheUFzU2FtcGxlcyhzZWNvbmRzKmZzKS9mcztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhyb3coXCJzZXRQcm9jZXNzaW5nRGVsYXlBc1NlY29uZHMgSW52YWxpZCBhcmd1bWVudFwiKTtcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5zZXRQcm9jZXNzaW5nRGVsYXlBc1NhbXBsZXMgPSBmdW5jdGlvbihzYW1wbGVzKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBzYW1wbGVzID09IFwibnVtYmVyXCIgJiYgaXNGaW5pdGUoc2FtcGxlcykgJiYgc2FtcGxlcyA+PSAwKSB7XHJcbiAgICAgICAgICAgIGRlbGF5U2FtcGxlcyA9IHNhbXBsZXM7XHJcbiAgICAgICAgICAgIHZhciBlID0gbmV3IEV2ZW50KFwiYWx0ZXJkZWxheVwiKTtcclxuICAgICAgICAgICAgZXZlbnRUYXJnZXQuZGlzcGF0Y2hFdmVudChlKTtcclxuICAgICAgICAgICAgcmV0dXJuIGRlbGF5U2FtcGxlcztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aHJvdyhcInNldFByb2Nlc3NpbmdEZWxheUFzU2FtcGxlcyBJbnZhbGlkIGFyZ3VtZW50XCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuc3RhcnQgPSB0aGlzLnN0b3AgPSB0aGlzLm9ubG9hZGVkID0gdGhpcy5vbnVubG9hZGVkID0gdGhpcy5kZWNvbnN0cnVjdCA9IGZ1bmN0aW9uICgpIHt9O1xyXG5cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcclxuICAgICAgICBcImV4dGVybmFsSW50ZXJmYWNlXCI6IHtcclxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBleHRlcm5hbEludGVyZmFjZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJudW1JbnB1dHNcIjoge1xyXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpbnB1dExpc3QubGVuZ3RoO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IChcIkNhbm5vdCBzZXQgdGhlIG51bWJlciBvZiBpbnB1dHMgb2YgQmFzZVBsdWdpblwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJudW1PdXRwdXRzXCI6IHtcclxuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gb3V0cHV0TGlzdC5sZW5ndGg7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgKFwiQ2Fubm90IHNldCB0aGUgbnVtYmVyIG9mIG91dHB1dHMgb2YgQmFzZVBsdWdpblwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJudW1QYXJhbWV0ZXJzXCI6IHtcclxuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJhbWV0ZXJzLnBhcmFtZXRlcnMubGVuZ3RoO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IChcIkNhbm5vdCBzZXQgdGhlIG51bWJlciBvZiBwYXJhbWV0ZXJzIG9mIEJhc2VQbHVnaW5cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFwib3duZXJcIjoge1xyXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBwT3duZXI7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24gKG93bmVyKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG93bmVyID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcE93bmVyID0gb3duZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcE93bmVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImlucHV0c1wiOiB7XHJcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKGluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaW5wdXRMaXN0O1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IChcIklsbGVnYWwgYXR0ZW1wdCB0byBtb2RpZnkgQmFzZVBsdWdpblwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJvdXRwdXRzXCI6IHtcclxuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoaW5kZXgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBvdXRwdXRMaXN0O1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IChcIklsbGVnYWwgYXR0ZW1wdCB0byBtb2RpZnkgQmFzZVBsdWdpblwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJwcm9jZXNzaW5nRGVsYXlBc1NhbXBsZXNcIjoge1xyXG4gICAgICAgICAgICBcImdldFwiOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBkZWxheVNhbXBsZXM7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwic2V0XCI6IHRoaXMuc2V0UHJvY2Vzc2luZ0RlbGF5QXNTYW1wbGVzXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcInByb2Nlc3NpbmdEZWxheUFzU2Vjb25kc1wiOiB7XHJcbiAgICAgICAgICAgIFwiZ2V0XCI6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlbGF5U2FtcGxlcy9mYWN0b3J5LmNvbnRleHQuc2FtcGxlUmF0ZTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJzZXRcIjogdGhpcy5zZXRQcm9jZXNzaW5nRGVsYXlBc1NlY29uZHNcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiY29ubmVjdFwiOiB7XHJcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKGRlc3QpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub3V0cHV0c1swXS5jb25uZWN0KGRlc3QuaW5wdCA/IGRlc3QuaW5wdXQgOiBkZXN0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJkaXNjb25uZWN0XCI6IHtcclxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoZGVzdCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRlc3QgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3V0cHV0c1swXS5kaXNjb25uZWN0KCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3V0cHV0c1swXS5kaXNjb25uZWN0KGRlc3QuaW5wdXQgPyBkZXN0LmlucHV0IDogZGVzdCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiZ2V0SW5wdXRzXCI6IHtcclxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5pbnB1dHM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiZ2V0T3V0cHV0c1wiOiB7XHJcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMub3V0cHV0cztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJnZXRQYXJhbWV0ZXJOYW1lc1wiOiB7XHJcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyYW1ldGVycy5nZXRQYXJhbWV0ZXJOYW1lcygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImdldFBhcmFtZXRlckJ5TmFtZVwiOiB7XHJcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKG5hbWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcmFtZXRlcnMuZ2V0UGFyYW1ldGVyQnlOYW1lKG5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImdldFBhcmFtZXRlck9iamVjdFwiOiB7XHJcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyYW1ldGVycy5nZXRQYXJhbWV0ZXJPYmplY3QoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJzZXRQYXJhbWV0ZXJCeU5hbWVcIjoge1xyXG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyYW1ldGVycy5zZXRQYXJhbWV0ZXJCeU5hbWUobmFtZSwgdmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcInNldFBhcmFtZXRlcnNCeU9iamVjdFwiOiB7XHJcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKG9iamVjdCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyYW1ldGVycy5zZXRQYXJhbWV0ZXJzQnlPYmplY3Qob2JqZWN0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJhZGRFdmVudExpc3RlbmVyXCI6IHtcclxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbihrZXksIHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZXZlbnRUYXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihrZXksIHZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJyZW1vdmVFdmVudExpc3RlbmVyXCI6IHtcclxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbihrZXksIHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZXZlbnRUYXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihrZXksIHZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59O1xyXG5cclxudmFyIFBsdWdpbkZlYXR1cmVJbnRlcmZhY2UgPSBmdW5jdGlvbiAoQmFzZVBsdWdpbkluc3RhbmNlKSB7XHJcbiAgICB0aGlzLnBsdWdpbiA9IEJhc2VQbHVnaW5JbnN0YW5jZTtcclxuICAgIHRoaXMuUmVjZWl2ZXIgPSBuZXcgUGx1Z2luRmVhdHVyZUludGVyZmFjZVJlY2VpdmVyKHRoaXMsIEJhc2VQbHVnaW5JbnN0YW5jZS5mYWN0b3J5LkZlYXR1cmVNYXApO1xyXG4gICAgdGhpcy5TZW5kZXIgPSBuZXcgUGx1Z2luRmVhdHVyZUludGVyZmFjZVNlbmRlcih0aGlzLCBCYXNlUGx1Z2luSW5zdGFuY2UuZmFjdG9yeS5GZWF0dXJlTWFwKTtcclxuXHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgXCJvbmZlYXR1cmVzXCIsIHtcclxuICAgICAgICAnZ2V0JzogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5SZWNlaXZlci5vbmZlYXR1cmVzO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJ3NldCc6IGZ1bmN0aW9uIChmdW5jKSB7XHJcbiAgICAgICAgICAgIHRoaXMuUmVjZWl2ZXIub25mZWF0dXJlcyA9IGZ1bmM7XHJcbiAgICAgICAgICAgIHJldHVybiBmdW5jO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59O1xyXG52YXIgUGx1Z2luRmVhdHVyZUludGVyZmFjZVJlY2VpdmVyID0gZnVuY3Rpb24gKEZlYXR1cmVJbnRlcmZhY2VJbnN0YW5jZSwgRmFjdG9yeUZlYXR1cmVNYXApIHtcclxuICAgIGZ1bmN0aW9uIGNoZWNrRmVhdHVyZUFyZ3Moc291cmNlLCBmZWF0dXJlT2JqZWN0KSB7XHJcbiAgICAgICAgaWYgKHNvdXJjZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRocm93IChcIlNvdXJjZSBwbHVnaW4gbXVzdCBiZSBkZWZpbmVkXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZmVhdHVyZU9iamVjdCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRocm93IChcIkZlYXR1cmVPYmplY3QgbXVzdCBiZSBkZWZpbmVkXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIGZlYXR1cmVPYmplY3Qub3V0cHV0SW5kZXggIT09IFwibnVtYmVyXCIgfHwgdHlwZW9mIGZlYXR1cmVPYmplY3QuZnJhbWVTaXplICE9PSBcIm51bWJlclwiIHx8IHR5cGVvZiBmZWF0dXJlT2JqZWN0LmZlYXR1cmVzICE9PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgICAgIHRocm93IChcIk1hbGZvcm1lZCBmZWF0dXJlT2JqZWN0XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIHZhciBjX2ZlYXR1cmVzID0gZnVuY3Rpb24gKCkge307XHJcbiAgICB0aGlzLnJlcXVlc3RGZWF0dXJlcyA9IGZ1bmN0aW9uIChmZWF0dXJlTGlzdCkge1xyXG4gICAgICAgIHZhciBpO1xyXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBmZWF0dXJlTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLnJlcXVlc3RGZWF0dXJlc0Zyb21QbHVnaW4oZmVhdHVyZUxpc3RbaV0ucGx1Z2luLCB7XHJcbiAgICAgICAgICAgICAgICAnb3V0cHV0SW5kZXgnOiBmZWF0dXJlTGlzdFtpXS5vdXRwdXRJbmRleCxcclxuICAgICAgICAgICAgICAgICdmcmFtZVNpemUnOiBmZWF0dXJlTGlzdFtpXS5mcmFtZVNpemUsXHJcbiAgICAgICAgICAgICAgICAnZmVhdHVyZXMnOiBmZWF0dXJlTGlzdFtpXS5mZWF0dXJlc1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgdGhpcy5yZXF1ZXN0RmVhdHVyZXNGcm9tUGx1Z2luID0gZnVuY3Rpb24gKHNvdXJjZSwgZmVhdHVyZU9iamVjdCkge1xyXG4gICAgICAgIGNoZWNrRmVhdHVyZUFyZ3Moc291cmNlLCBmZWF0dXJlT2JqZWN0KTtcclxuICAgICAgICBGYWN0b3J5RmVhdHVyZU1hcC5yZXF1ZXN0RmVhdHVyZXMoRmVhdHVyZUludGVyZmFjZUluc3RhbmNlLnBsdWdpbiwgc291cmNlLCBmZWF0dXJlT2JqZWN0KTtcclxuICAgIH07XHJcbiAgICB0aGlzLmNhbmNlbEZlYXR1cmVzRnJvbVBsdWdpbiA9IGZ1bmN0aW9uIChzb3VyY2UsIGZlYXR1cmVPYmplY3QpIHtcclxuICAgICAgICBjaGVja0ZlYXR1cmVBcmdzKHNvdXJjZSwgZmVhdHVyZU9iamVjdCk7XHJcbiAgICAgICAgRmFjdG9yeUZlYXR1cmVNYXAuZGVsZXRlRmVhdHVyZXMoRmVhdHVyZUludGVyZmFjZUluc3RhbmNlLnBsdWdpbiwgc291cmNlLCBmZWF0dXJlT2JqZWN0KTtcclxuICAgIH07XHJcbiAgICB0aGlzLmNhbmNlbEFsbEZlYXR1cmVzRnJvbVBsdWdpbiA9IGZ1bmN0aW9uIChzb3VyY2UpIHtcclxuICAgICAgICBpZiAoc291cmNlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgKFwiU291cmNlIHBsdWdpbiBtdXN0IGJlIGRlZmluZWRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEZhY3RvcnlGZWF0dXJlTWFwLmRlbGV0ZUZlYXR1cmVzKEZlYXR1cmVJbnRlcmZhY2VJbnN0YW5jZS5wbHVnaW4sIHNvdXJjZSk7XHJcbiAgICB9O1xyXG4gICAgdGhpcy5jYW5jZWxBbGxGZWF0dXJlcyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBGYWN0b3J5RmVhdHVyZU1hcC5kZWxldGVGZWF0dXJlcyhGZWF0dXJlSW50ZXJmYWNlSW5zdGFuY2UucGx1Z2luKTtcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5wb3N0RmVhdHVyZXMgPSBmdW5jdGlvbiAoTWVzc2FnZSkge1xyXG4gICAgICAgIC8qXHJcbiAgICAgICAgICAgIENhbGxlZCBieSB0aGUgUGx1Z2luIEZhY3Rvcnkgd2l0aCB0aGUgZmVhdHVyZSBtZXNzYWdlXHJcbiAgICAgICAgICAgIG1lc3NhZ2UgPSB7XHJcbiAgICAgICAgICAgICAgICAncGx1Z2luJzogc291cmNlUGx1Z2luSW5zdGFuY2UsXHJcbiAgICAgICAgICAgICAgICAnb3V0cHV0SW5kZXgnOiBvdXRwdXRJbmRleCxcclxuICAgICAgICAgICAgICAgICdmcmFtZVNpemUnOiBmcmFtZVNpemUsXHJcbiAgICAgICAgICAgICAgICAnZmVhdHVyZXMnOiB7fSBKUy1YdHJhY3QgZmVhdHVyZSByZXN1bHRzIG9iamVjdFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKi9cclxuICAgICAgICBpZiAodHlwZW9mIGNfZmVhdHVyZXMgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICBjX2ZlYXR1cmVzKE1lc3NhZ2UpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIFwib25mZWF0dXJlc1wiLCB7XHJcbiAgICAgICAgJ2dldCc6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNfZmVhdHVyZXM7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAnc2V0JzogZnVuY3Rpb24gKGZ1bmMpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBmdW5jID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgICAgIGNfZmVhdHVyZXMgPSBmdW5jO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxufTtcclxudmFyIFBsdWdpbkZlYXR1cmVJbnRlcmZhY2VTZW5kZXIgPSBmdW5jdGlvbiAoRmVhdHVyZUludGVyZmFjZUluc3RhbmNlLCBGYWN0b3J5RmVhdHVyZU1hcCkge1xyXG4gICAgdmFyIE91dHB1dE5vZGUgPSBmdW5jdGlvbiAocGFyZW50LCBvdXRwdXQsIGluZGV4KSB7XHJcbiAgICAgICAgdmFyIGV4dHJhY3RvcnMgPSBbXTtcclxuICAgICAgICB2YXIgRXh0cmFjdG9yID0gZnVuY3Rpb24gKG91dHB1dCwgZnJhbWVTaXplKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZXh0cmFjdG9yID0gRmVhdHVyZUludGVyZmFjZUluc3RhbmNlLnBsdWdpbi5mYWN0b3J5LmNvbnRleHQuY3JlYXRlQW5hbHlzZXIoKTtcclxuICAgICAgICAgICAgdGhpcy5leHRyYWN0b3IuZmZ0U2l6ZSA9IGZyYW1lU2l6ZTtcclxuICAgICAgICAgICAgb3V0cHV0LmNvbm5lY3QodGhpcy5leHRyYWN0b3IpO1xyXG4gICAgICAgICAgICB0aGlzLmZlYXR1cmVzID0gW107XHJcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImZyYW1lU2l6ZVwiLCB7XHJcbiAgICAgICAgICAgICAgICAndmFsdWUnOiBmcmFtZVNpemVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIC8qXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIHJlY3Vyc2l2ZVByb2Nlc3NpbmcoYmFzZSwgbGlzdCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGwgPSBsaXN0Lmxlbmd0aCxcclxuICAgICAgICAgICAgICAgICAgICBpLCBlbnRyeTtcclxuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBsOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBlbnRyeSA9IGxpc3RbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgYmFzZVtlbnRyeS5uYW1lXS5hcHBseShiYXNlLCBlbnRyeS5wYXJhbWV0ZXJzKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZW50cnkuZmVhdHVyZXMgJiYgZW50cnkuZmVhdHVyZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWN1cnNpdmVQcm9jZXNzaW5nKGJhc2UucmVzdWx0W2VudHJ5Lm5hbWVdLCBlbnRyeS5mZWF0dXJlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHZhciByZWN1cnNpdmVQcm9jZXNzaW5nID0gdGhpcy5mYWN0b3J5LnJlY3Vyc2l2ZVByb2Nlc3Npbmc7XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBvbmF1ZGlvY2FsbGJhY2soZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgLy90aGlzID09PSBFeHRyYWN0b3JcclxuICAgICAgICAgICAgICAgIHZhciBtZXNzYWdlID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICdudW1iZXJPZkNoYW5uZWxzJzogMSxcclxuICAgICAgICAgICAgICAgICAgICAncmVzdWx0cyc6IFtdXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgcmVjdXJzaXZlUHJvY2Vzc2luZyhkYXRhLCB0aGlzLmZlYXR1cmVzKTtcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2UucmVzdWx0c1swXSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAnY2hhbm5lbCc6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3Jlc3VsdHMnOiBKU09OLnBhcnNlKGRhdGEudG9KU09OKCkpXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wb3N0RmVhdHVyZXMoZGF0YS5sZW5ndGgsIG1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNldEZlYXR1cmVzID0gZnVuY3Rpb24gKGZlYXR1cmVMaXN0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZlYXR1cmVzID0gZmVhdHVyZUxpc3Q7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5mZWF0dXJlcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmV4dHJhY3Rvci5jbGVhckNhbGxiYWNrKCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXh0cmFjdG9yLmZyYW1lQ2FsbGJhY2sob25hdWRpb2NhbGxiYWNrLCB0aGlzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHZhciBXb3JrZXJFeHRyYWN0b3IgPSBmdW5jdGlvbiAob3V0cHV0LCBmcmFtZVNpemUpIHtcclxuICAgICAgICAgICAgZnVuY3Rpb24gb25hdWRpb2NhbGxiYWNrKGUpIHtcclxuICAgICAgICAgICAgICAgIHZhciBjLCBmcmFtZXMgPSBbXTtcclxuICAgICAgICAgICAgICAgIGZvciAoYyA9IDA7IGMgPCBlLmlucHV0QnVmZmVyLm51bWJlck9mQ2hhbm5lbHM7IGMrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGZyYW1lc1tjXSA9IGUuaW5wdXRCdWZmZXIuZ2V0Q2hhbm5lbERhdGEoYyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB3b3JrZXIucG9zdE1lc3NhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgICdzdGF0ZSc6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2ZyYW1lcyc6IGZyYW1lc1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIHJlc3BvbnNlKG1zZykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wb3N0RmVhdHVyZXMoZnJhbWVTaXplLCBtc2cuZGF0YS5yZXNwb25zZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciB3b3JrZXIgPSBuZXcgV29ya2VyKFwianNhcC9mZWF0dXJlLXdvcmtlci5qc1wiKTtcclxuICAgICAgICAgICAgd29ya2VyLm9uZXJyb3IgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2V0RmVhdHVyZXMgPSBmdW5jdGlvbiAoZmVhdHVyZUxpc3QpIHtcclxuICAgICAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICAgICAgICAgIHZhciBjb25maWdNZXNzYWdlID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICdzdGF0ZSc6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3NhbXBsZVJhdGUnOiBGZWF0dXJlSW50ZXJmYWNlSW5zdGFuY2UucGx1Z2luLmZhY3RvcnkuY29udGV4dC5zYW1wbGVSYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICdmZWF0dXJlTGlzdCc6IGZlYXR1cmVMaXN0LFxyXG4gICAgICAgICAgICAgICAgICAgICdudW1DaGFubmVscyc6IG91dHB1dC5udW1iZXJPZk91dHB1dHMsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2ZyYW1lU2l6ZSc6IHRoaXMuZnJhbWVTaXplXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mZWF0dXJlcyA9IGZlYXR1cmVMaXN0O1xyXG4gICAgICAgICAgICAgICAgaWYgKGZlYXR1cmVMaXN0ICYmIGZlYXR1cmVMaXN0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB3b3JrZXIub25tZXNzYWdlID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUuZGF0YS5zdGF0ZSA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya2VyLm9ubWVzc2FnZSA9IHJlc3BvbnNlLmJpbmQoc2VsZik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmV4dHJhY3Rvci5vbmF1ZGlvcHJvY2VzcyA9IG9uYXVkaW9jYWxsYmFjay5iaW5kKHNlbGYpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya2VyLnBvc3RNZXNzYWdlKGNvbmZpZ01lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICB3b3JrZXIucG9zdE1lc3NhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnc3RhdGUnOiAwXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXh0cmFjdG9yLm9uYXVkaW9wcm9jZXNzID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZXh0cmFjdG9yID0gRmVhdHVyZUludGVyZmFjZUluc3RhbmNlLnBsdWdpbi5mYWN0b3J5LmNvbnRleHQuY3JlYXRlU2NyaXB0UHJvY2Vzc29yKGZyYW1lU2l6ZSwgb3V0cHV0Lm51bWJlck9mT3V0cHV0cywgMSk7XHJcbiAgICAgICAgICAgIG91dHB1dC5jb25uZWN0KHRoaXMuZXh0cmFjdG9yKTtcclxuICAgICAgICAgICAgdGhpcy5leHRyYWN0b3IuY29ubmVjdChGZWF0dXJlSW50ZXJmYWNlSW5zdGFuY2UucGx1Z2luLmZhY3RvcnkuY29udGV4dC5kZXN0aW5hdGlvbik7XHJcblxyXG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgXCJmcmFtZVNpemVcIiwge1xyXG4gICAgICAgICAgICAgICAgJ3ZhbHVlJzogZnJhbWVTaXplXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5hZGRFeHRyYWN0b3IgPSBmdW5jdGlvbiAoZnJhbWVTaXplKSB7XHJcbiAgICAgICAgICAgIHZhciBvYmo7XHJcbiAgICAgICAgICAgIGlmICh3aW5kb3cuV29ya2VyKSB7XHJcbiAgICAgICAgICAgICAgICBvYmogPSBuZXcgV29ya2VyRXh0cmFjdG9yKG91dHB1dCwgZnJhbWVTaXplKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG9iaiA9IG5ldyBFeHRyYWN0b3Iob3V0cHV0LCBmcmFtZVNpemUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGV4dHJhY3RvcnMucHVzaChvYmopO1xyXG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBcInBvc3RGZWF0dXJlc1wiLCB7XHJcbiAgICAgICAgICAgICAgICAndmFsdWUnOiBmdW5jdGlvbiAoZnJhbWVTaXplLCByZXN1bHRzSlNPTikge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBvYmogPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdvdXRwdXRJbmRleCc6IGluZGV4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnZnJhbWVTaXplJzogZnJhbWVTaXplLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAncmVzdWx0cyc6IHJlc3VsdHNKU09OXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvc3RGZWF0dXJlcyhvYmopO1xyXG4gICAgICAgICAgICAgICAgfS5iaW5kKHRoaXMpXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gb2JqO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5maW5kRXh0cmFjdG9yID0gZnVuY3Rpb24gKGZyYW1lU2l6ZSkge1xyXG4gICAgICAgICAgICB2YXIgY2hlY2sgPSBmcmFtZVNpemU7XHJcbiAgICAgICAgICAgIHJldHVybiBleHRyYWN0b3JzLmZpbmQoZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgIC8vIFRoaXMgTVVTVCBiZSA9PT0gTk9UID09PVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGUuZnJhbWVTaXplID09PSBjaGVjaztcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmRlbGV0ZUV4dHJhY3RvciA9IGZ1bmN0aW9uIChmcmFtZVNpemUpIHt9O1xyXG4gICAgfTtcclxuICAgIHZhciBvdXRwdXROb2RlcyA9IFtdO1xyXG4gICAgdGhpcy51cGRhdGVGZWF0dXJlcyA9IGZ1bmN0aW9uIChmZWF0dXJlT2JqZWN0KSB7XHJcbiAgICAgICAgLy8gW10gT3V0cHV0IC0+IHt9ICdmcmFtZXNpemUnIC0+IHt9ICdmZWF0dXJlcydcclxuICAgICAgICB2YXIgbztcclxuICAgICAgICBmb3IgKG8gPSAwOyBvIDwgZmVhdHVyZU9iamVjdC5sZW5ndGg7IG8rKykge1xyXG4gICAgICAgICAgICBpZiAob3V0cHV0Tm9kZXNbb10gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKG8gPiBGZWF0dXJlSW50ZXJmYWNlSW5zdGFuY2UucGx1Z2luLm51bU91dHB1dHMpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyAoXCJSZXF1ZXN0ZWQgYW4gb3V0cHV0IHRoYXQgZG9lcyBub3QgZXhpc3RcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBvdXRwdXROb2Rlc1tvXSA9IG5ldyBPdXRwdXROb2RlKEZlYXR1cmVJbnRlcmZhY2VJbnN0YW5jZS5wbHVnaW4sIEZlYXR1cmVJbnRlcmZhY2VJbnN0YW5jZS5wbHVnaW4ub3V0cHV0c1tvXSwgbyk7XHJcbiAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob3V0cHV0Tm9kZXNbb10sIFwicG9zdEZlYXR1cmVzXCIsIHtcclxuICAgICAgICAgICAgICAgICAgICAndmFsdWUnOiBmdW5jdGlvbiAocmVzdWx0T2JqZWN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucG9zdEZlYXR1cmVzKHJlc3VsdE9iamVjdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfS5iaW5kKHRoaXMpXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgc2k7XHJcbiAgICAgICAgICAgIGZvciAoc2kgPSAwOyBzaSA8IGZlYXR1cmVPYmplY3Rbb10ubGVuZ3RoOyBzaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZXh0cmFjdG9yID0gb3V0cHV0Tm9kZXNbb10uZmluZEV4dHJhY3RvcihmZWF0dXJlT2JqZWN0W29dW3NpXS5mcmFtZVNpemUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFleHRyYWN0b3IpIHtcclxuICAgICAgICAgICAgICAgICAgICBleHRyYWN0b3IgPSBvdXRwdXROb2Rlc1tvXS5hZGRFeHRyYWN0b3IoZmVhdHVyZU9iamVjdFtvXVtzaV0uZnJhbWVTaXplKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGV4dHJhY3Rvci5zZXRGZWF0dXJlcyhmZWF0dXJlT2JqZWN0W29dW3NpXS5mZWF0dXJlTGlzdCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMucG9zdEZlYXR1cmVzID0gZnVuY3Rpb24gKGZlYXR1cmVPYmplY3QpIHtcclxuICAgICAgICAvKlxyXG4gICAgICAgICAgICBDYWxsZWQgYnkgdGhlIGluZGl2aWR1YWwgZXh0cmFjdG9yIGluc3RhbmNlczpcclxuICAgICAgICAgICAgZmVhdHVyZU9iamVjdCA9IHsnZnJhbWVTaXplJzogZnJhbWVTaXplLFxyXG4gICAgICAgICAgICAnb3V0cHV0SW5kZXgnOiBvdXRwdXRJbmRleCxcclxuICAgICAgICAgICAgJ3Jlc3VsdHMnOltdfVxyXG4gICAgICAgICovXHJcbiAgICAgICAgRmVhdHVyZUludGVyZmFjZUluc3RhbmNlLnBsdWdpbi5mYWN0b3J5LkZlYXR1cmVNYXAucG9zdEZlYXR1cmVzKHtcclxuICAgICAgICAgICAgJ3BsdWdpbic6IEZlYXR1cmVJbnRlcmZhY2VJbnN0YW5jZS5wbHVnaW4ucGx1Z2luSW5zdGFuY2UsXHJcbiAgICAgICAgICAgICdvdXRwdXRJbmRleCc6IGZlYXR1cmVPYmplY3Qub3V0cHV0SW5kZXgsXHJcbiAgICAgICAgICAgICdmcmFtZVNpemUnOiBmZWF0dXJlT2JqZWN0LmZyYW1lU2l6ZSxcclxuICAgICAgICAgICAgJ3Jlc3VsdHMnOiBmZWF0dXJlT2JqZWN0LnJlc3VsdHNcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgLy8gU2VuZCB0byBGYWN0b3J5XHJcbiAgICBGYWN0b3J5RmVhdHVyZU1hcC5jcmVhdGVTb3VyY2VNYXAodGhpcywgRmVhdHVyZUludGVyZmFjZUluc3RhbmNlLnBsdWdpbi5wbHVnaW5JbnN0YW5jZSk7XHJcbn07XHJcblxyXG4vKlxyXG4gICAgVGhpcyBpcyBhbiBvcHRpb25hbCBtb2R1bGUgd2hpY2ggd2lsbCBhdHRlbXB0IHRvIGNyZWF0ZSBhIGdyYXBoaWNhbCBpbXBsZW1lbnRhdGlvbi5cclxuICAgIEFzIHdpdGggb3RoZXIgYXVkaW8gcGx1Z2lucyBmb3IgREFXcywgdGhlIEdVSSBpcyBhbiBvcHRpb25hbCBlbGVtZW50IHdoaWNoIGNhbiBiZSBhY2NlcHRlZCBvciByZWplY3RlZCBieSB0aGUgaG9zdC5cclxuXHJcbiAgICBUaGUgYWN0dWFsIEdVSSBpcyBsYXVuY2hlZCBhcyBhbiA8aWZyYW1lPiBlbGVtZW50IGluIHRoZSBicm93c2VyIHRvIGtlZXAgZWFjaCBwbHVnaW4gaXNvbGF0ZWQgZnJvbSB0aGUgcmVzdFxyXG4qL1xyXG5cclxudmFyIFBsdWdpblVzZXJJbnRlcmZhY2UgPSBmdW5jdGlvbiAoQmFzZVBsdWdpbkluc3RhbmNlLCB3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIkRFUFJFQ0FURUQhIVwiKTtcclxuICAgIGNvbnNvbGUubG9nKFwiVGhlIGNsYXNzIFBsdWdpblVzZXJJbnRlcmZhY2UgaGFzIGJlZW4gZGVwcmVjYXRlZFwiKTtcclxuICAgIGNvbnNvbGUubG9nKFwiUGxlYXNlIGxvb2sgYXQgdGhlIGRvY3VtZW50cyBmb3IgdGhlIG5ldyBtZXRob2RzIGZvciBidWlsZGluZyBwbHVnaW5zXCIpO1xyXG4gICAgdGhpcy5wcm9jZXNzb3IgPSBCYXNlUGx1Z2luSW5zdGFuY2U7XHJcbiAgICB0aGlzLnJvb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgaWYgKHdpZHRoID4gMCkge1xyXG4gICAgICAgIHRoaXMucm9vdC5zdHlsZS53aWR0aCA9IHdpZHRoICsgXCJweFwiO1xyXG4gICAgfVxyXG4gICAgaWYgKGhlaWdodCA+IDApIHtcclxuICAgICAgICB0aGlzLnJvb3Quc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0ICsgXCJweFwiO1xyXG4gICAgfVxyXG4gICAgdGhpcy5kaW0gPSB7XHJcbiAgICAgICAgd2lkdGg6IHdpZHRoLFxyXG4gICAgICAgIGhlaWdodDogaGVpZ2h0XHJcbiAgICB9O1xyXG4gICAgdGhpcy5pbnRlcnZhbEZ1bmN0aW9uID0gbnVsbDtcclxuICAgIHRoaXMudXBkYXRlSW50ZXJ2YWwgPSBudWxsO1xyXG4gICAgdGhpcy5QbHVnaW5QYXJhbWV0ZXJJbnRlcmZhY2VzID0gW107XHJcblxyXG4gICAgdmFyIFBsdWdpblBhcmFtZXRlckludGVyZmFjZU5vZGUgPSBmdW5jdGlvbiAoRE9NLCBQbHVnaW5QYXJhbWV0ZXJJbnN0YW5jZSwgcHJvY2Vzc29yLCBndWkpIHtcclxuICAgICAgICB0aGlzLmlucHV0ID0gRE9NO1xyXG4gICAgICAgIHRoaXMucHJvY2Vzc29yID0gcHJvY2Vzc29yO1xyXG4gICAgICAgIHRoaXMuR1VJID0gZ3VpO1xyXG4gICAgICAgIHRoaXMuQXVkaW9QYXJhbSA9IFBsdWdpblBhcmFtZXRlckluc3RhbmNlO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlRXZlbnQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgdGhpcy5BdWRpb1BhcmFtLnZhbHVlID0gdGhpcy5pbnB1dC52YWx1ZTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCB0aGlzKTtcclxuICAgICAgICB0aGlzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5pbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcyk7XHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuY3JlYXRlUGx1Z2luUGFyYW1ldGVySW50ZXJmYWNlTm9kZSA9IGZ1bmN0aW9uIChET00sIFBsdWdpblBhcmFtZXRlckluc3RhbmNlKSB7XHJcbiAgICAgICAgdmFyIG5vZGUgPSBuZXcgUGx1Z2luUGFyYW1ldGVySW50ZXJmYWNlTm9kZShET00sIFBsdWdpblBhcmFtZXRlckluc3RhbmNlLCB0aGlzLnByb2Nlc3NvciwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5QbHVnaW5QYXJhbWV0ZXJJbnRlcmZhY2VzLnB1c2gobm9kZSk7XHJcbiAgICAgICAgcmV0dXJuIG5vZGU7XHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMudXBkYXRlID0gZnVuY3Rpb24gKCkge307XHJcblxyXG59O1xyXG5cclxuUGx1Z2luVXNlckludGVyZmFjZS5wcm90b3R5cGUuZ2V0Um9vdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiB0aGlzLnJvb3Q7XHJcbn07XHJcblBsdWdpblVzZXJJbnRlcmZhY2UucHJvdG90eXBlLmdldERpbWVuc2lvbnMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5kaW07XHJcbn07XHJcblBsdWdpblVzZXJJbnRlcmZhY2UucHJvdG90eXBlLmdldFdpZHRoID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZGltLndpZHRoO1xyXG59O1xyXG5QbHVnaW5Vc2VySW50ZXJmYWNlLnByb3RvdHlwZS5nZXRIZWlnaHQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5kaW0uaGVpZ2h0O1xyXG59O1xyXG5QbHVnaW5Vc2VySW50ZXJmYWNlLnByb3RvdHlwZS5iZWdpbkNhbGxiYWNrcyA9IGZ1bmN0aW9uIChtcykge1xyXG4gICAgLy8gQW55IHJlZ2lzdGVyZWQgY2FsbGJhY2tzIGFyZSBzdGFydGVkIGJ5IHRoZSBob3N0XHJcbiAgICBpZiAobXMgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIG1zID0gMjUwO1xyXG4gICAgfSAvL0RlZmF1bHQgb2YgMjUwbXMgdXBkYXRlIHBlcmlvZFxyXG4gICAgaWYgKHRoaXMuaW50ZXJ2YWxGdW5jdGlvbiA9PT0gbnVsbCkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlSW50ZXJ2YWwgPSBtcztcclxuICAgICAgICB0aGlzLmludGVydmFsRnVuY3Rpb24gPSB3aW5kb3cuc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgICAgIH0uYmluZCh0aGlzKSwgMjUwKTtcclxuICAgIH1cclxufTtcclxuUGx1Z2luVXNlckludGVyZmFjZS5wcm90b3R5cGUuc3RvcENhbGxiYWNrcyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIC8vIEFueSByZWdpc3RlcmVkIGNhbGxiYWNrcyBhcmUgc3RvcHBlZCBieSB0aGUgaG9zdFxyXG4gICAgaWYgKHRoaXMuaW50ZXJ2YWxGdW5jdGlvbiAhPT0gbnVsbCkge1xyXG4gICAgICAgIHdpbmRvdy5jbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWxGdW5jdGlvbik7XHJcbiAgICAgICAgdGhpcy51cGRhdGVJbnRlcnZhbCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5pbnRlcnZhbEZ1bmN0aW9uID0gbnVsbDtcclxuICAgIH1cclxufTtcclxuUGx1Z2luVXNlckludGVyZmFjZS5wcm90b3R5cGUubG9hZFJlc291cmNlID0gZnVuY3Rpb24gKHVybCkge1xyXG4gICAgdmFyIHAgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgdmFyIHJlcSA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgIHJlcS5vcGVuKCdHRVQnLCB1cmwpO1xyXG4gICAgICAgIHJlcS5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChyZXEuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUocmVxLnJlc3BvbnNlKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJlamVjdChFcnJvcihyZXEuc3RhdHVzVGV4dCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXEub25lcnJvciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmVqZWN0KEVycm9yKFwiTmV0d29yayBFcnJvclwiKSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXEuc2VuZCgpO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gcDtcclxufTtcclxuUGx1Z2luVXNlckludGVyZmFjZS5wcm90b3R5cGUuY2xlYXJHVUkgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB0aGlzLnN0b3BDYWxsYmFja3MoKTtcclxuICAgIHRoaXMucm9vdC5pbm5lckhUTUwgPSBcIlwiO1xyXG59O1xyXG5cclxudmFyIFBsdWdpbkludGVyZmFjZU1lc3NhZ2VIdWIgPSBmdW5jdGlvbihvd25lcikge1xyXG4gICAgZnVuY3Rpb24gYnVpbGRQbHVnaW5QYXJhbWV0ZXJKU09OKHBsdWdpbiwgc291cmNlcykge1xyXG4gICAgICAgIHZhciBuYW1lcyA9IG93bmVyLnBhcmFtZXRlcnMuZ2V0UGFyYW1ldGVyTmFtZXMoKTtcclxuICAgICAgICB2YXIgTyA9IHt9O1xyXG4gICAgICAgIGlmIChzb3VyY2VzID09PSB1bmRlZmluZWQgfHwgc291cmNlcy5sZW5ndGggPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHNvdXJjZXMgPSBuYW1lcztcclxuICAgICAgICB9XHJcbiAgICAgICAgbmFtZXMuZmlsdGVyKGZ1bmN0aW9uKG5hbWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW5jbHVkZXMobmFtZSk7XHJcbiAgICAgICAgfSwgc291cmNlcykuZm9yRWFjaChmdW5jdGlvbihuYW1lKSB7XHJcbiAgICAgICAgICAgIHZhciBwYXJhbSA9IG93bmVyLnBhcmFtZXRlcnMuZ2V0UGFyYW1ldGVyQnlOYW1lKG5hbWUpO1xyXG4gICAgICAgICAgICBPW25hbWVdID0gcGFyYW0uZ2V0UGFyYW1ldGVyT2JqZWN0KCk7XHJcbiAgICAgICAgICAgIGlmIChwYXJhbS5hdXRvbWF0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICBPW25hbWVdLmF1dG9tYXRlZCA9IHBhcmFtLmF1dG9tYXRpb24uZW5hYmxlZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBPO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGJ1aWxkUGFyYW1ldGVyVXBkYXRlUGF5bG9hZChzZW5kZXJfaWQsIHNvdXJjZXMpIHtcclxuICAgICAgICB2YXIgbXNnID0ge1xyXG4gICAgICAgICAgICBtZXNzYWdlOiBcInVwZGF0ZVBhcmFtZXRlcnNcIixcclxuICAgICAgICAgICAgcGFyYW1ldGVyczogYnVpbGRQbHVnaW5QYXJhbWV0ZXJKU09OKG93bmVyLCBzb3VyY2VzKVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKHNlbmRlcl9pZCkge1xyXG4gICAgICAgICAgICBtc2cuc2VuZGVyX2lkID0gc2VuZGVyX2lkO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbXNnO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNlbmRQYXJhbWV0ZXJVcGRhdGVzKGNoYW5uZWwsIHNvdXJjZXMpIHtcclxuICAgICAgICBjaGFubmVsLnBvc3RNZXNzYWdlKGJ1aWxkUGFyYW1ldGVyVXBkYXRlUGF5bG9hZCh1bmRlZmluZWQsIHNvdXJjZXMpLCBsb2NhdGlvbi5vcmlnaW4pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGJyb2FkY2FzdFBhcmFtZXRlclVwZGF0ZXMoc2VuZGVyX2lkLCBzb3VyY2VzKSB7XHJcbiAgICAgICAgdmFyIG1zZyA9IGJ1aWxkUGFyYW1ldGVyVXBkYXRlUGF5bG9hZChzZW5kZXJfaWQsIHNvdXJjZXMpO1xyXG4gICAgICAgIHdpbmRvd01lc3NhZ2VMaXN0LmZvckVhY2goZnVuY3Rpb24odykge1xyXG4gICAgICAgICAgICB3LnBvc3RNZXNzYWdlKG1zZywgbG9jYXRpb24ub3JpZ2luKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZXRQYXJhbWV0ZXJNZXNzYWdlKGUpIHtcclxuICAgICAgICB2YXIgdXBkYXRlT2JqZWN0cyA9IFtdO1xyXG4gICAgICAgIHZhciBwYXJhbWV0ZXJzID0gSlNPTi5wYXJzZShlLm1lc3NhZ2UucGFyYW1ldGVycyk7XHJcbiAgICAgICAgT2JqZWN0LmtleXMocGFyYW1ldGVycykuZm9yRWFjaChmdW5jdGlvbihuYW1lKSB7XHJcbiAgICAgICAgICAgIHZhciBwYXJhbWV0ZXJPYmplY3QgPSBvd25lci5wYXJhbWV0ZXJzLmdldFBhcmFtZXRlckJ5TmFtZShuYW1lKTtcclxuICAgICAgICAgICAgaWYgKHBhcmFtZXRlck9iamVjdCkge1xyXG4gICAgICAgICAgICAgICAgcGFyYW1ldGVyT2JqZWN0LnNldFZhbHVlKHBhcmFtZXRlcnNbbmFtZV0udmFsdWUsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIHVwZGF0ZU9iamVjdHMucHVzaChuYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiB1cGRhdGVPYmplY3RzO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciB3aW5kb3dNZXNzYWdlTGlzdCA9IFtdO1xyXG4gICAgdmFyIGxpc3RlbmVyO1xyXG4gICAgdmFyIHN0YXRlID0gMDtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBpZiAoIXdpbmRvd01lc3NhZ2VMaXN0LmluY2x1ZGVzKGUuc291cmNlKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN3aXRjaChlLmRhdGEubWVzc2FnZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwic2V0UGFyYW1ldGVyQnlOYW1lXCI6XHJcbiAgICAgICAgICAgIHZhciBwYXJhbWV0ZXJPYmplY3Q7XHJcbiAgICAgICAgICAgICAgICBpZiAoZS5kYXRhLnBhcmFtZXRlci5uYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1ldGVyT2JqZWN0ID0gb3duZXIucGFyYW1ldGVycy5nZXRQYXJhbWV0ZXJCeU5hbWUoZS5kYXRhLnBhcmFtZXRlci5uYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocGFyYW1ldGVyT2JqZWN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtZXRlck9iamVjdC5zZXRWYWx1ZShlLmRhdGEucGFyYW1ldGVyLnZhbHVlLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyb2FkY2FzdFBhcmFtZXRlclVwZGF0ZXMoZS5kYXRhLnNlbmRlcl9pZCwgW3BhcmFtZXRlck9iamVjdC5uYW1lXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJzZXRQYXJhbWV0ZXJzQnlPYmplY3RcIjpcclxuICAgICAgICAgICAgICAgIGlmIChlLmRhdGEucGFyYW1ldGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHVwZGF0ZU9iamVjdHMgPSBzZXRQYXJhbWV0ZXJNZXNzYWdlKGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyb2FkY2FzdFBhcmFtZXRlclVwZGF0ZXMoZS5kYXRhLnNlbmRlcl9pZCwgdXBkYXRlT2JqZWN0cyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInJlcXVlc3RQYXJhbWV0ZXJzXCI6XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGUuZGF0YS5uYW1lID09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZW5kUGFyYW1ldGVyVXBkYXRlcyhlLnNvdXJjZSwgZS5kYXRhLm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzZW5kUGFyYW1ldGVyVXBkYXRlcyhlLnNvdXJjZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHRocm93KFwiVW5rbm93biBtZXNzYWdlIHR5cGUgXFxcIlwiK2UuZGF0YS5tZXNzYWdlK1wiXFxcIlwiKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XHJcbiAgICAgICAgXCJ1cGRhdGVJbnRlcmZhY2VzXCI6IHtcclxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbihhdXRvbWF0aW9uT25seSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGF1dG9tYXRpb25Pbmx5ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBhdXRvbWF0aW9uT25seSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmFyIHNvdXJjZXM7XHJcbiAgICAgICAgICAgICAgICBpZiAoYXV0b21hdGlvbk9ubHkpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcGFyYW1ldGVyTmFtZXMgPSBvd25lci5wYXJhbWV0ZXJzLmdldFBhcmFtZXRlck5hbWVzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc291cmNlcyA9IHBhcmFtZXRlck5hbWVzLmZpbHRlcihmdW5jdGlvbihuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwYXJhbSA9IG93bmVyLnBhcmFtZXRlcnMuZ2V0UGFyYW1ldGVyQnlOYW1lKG5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKHBhcmFtLmF1dG9tYXRhYmxlICYmIHBhcmFtLmVuYWJsZWQgPT09IHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzb3VyY2VzLmxlbmd0aCA+IDApXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicm9hZGNhc3RQYXJhbWV0ZXJVcGRhdGVzKHVuZGVmaW5lZCwgc291cmNlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBicm9hZGNhc3RQYXJhbWV0ZXJVcGRhdGVzKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImNsb3NlV2luZG93c1wiOiB7XHJcbiAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIGlmIChzdGF0ZSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHdoaWxlKHdpbmRvd01lc3NhZ2VMaXN0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHcgPSB3aW5kb3dNZXNzYWdlTGlzdC5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdy5jbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3coXCJDYW5uZWwgYWxyZWFkeSBjbG9zZWRcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFwicmVnaXN0ZXJXaW5kb3dcIjoge1xyXG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKHcpIHtcclxuICAgICAgICAgICAgICAgIGlmICh3aW5kb3dNZXNzYWdlTGlzdC5pbmNsdWRlcyh3KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvd01lc3NhZ2VMaXN0LnNwbGljZSh3aW5kb3dNZXNzYWdlTGlzdC5pbmRleE9mKHcpLCAxKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHdpbmRvd01lc3NhZ2VMaXN0LnB1c2godyk7XHJcbiAgICAgICAgICAgICAgICBzZW5kUGFyYW1ldGVyVXBkYXRlcyh3KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcInJlbW92ZVdpbmRvd1wiOiB7XHJcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24odykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHdpbmRvd01lc3NhZ2VMaXN0LmluY2x1ZGVzKHcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93TWVzc2FnZUxpc3Quc3BsaWNlKHdpbmRvd01lc3NhZ2VMaXN0LmluZGV4T2YodyksIDEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQge0Jhc2VQbHVnaW59O1xyXG4iLCJpbXBvcnQge0Jhc2VQbHVnaW4sIFN5bnRoZXNpc2VyQmFzZVBsdWdpbiwgUGx1Z2luRmFjdG9yeX0gZnJvbSBcIi4vcGx1Z2luLWZhY3RvcnlcIjtcclxuXHJcbihmdW5jdGlvbihyb290LCBmYWN0b3J5KSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIkxvYWQgSlNBUC4uLlwiKTtcclxuICAgIGlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZGVmaW5lXCIpO1xyXG4gICAgICAgIGRlZmluZShcIkpTQVBcIiwgW10sIGZhY3RvcnkpO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgbW9kdWxlID09IFwib2JqZWN0XCIgJiYgbW9kdWxlLmV4cG9ydHMpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIm1vZHVsZVwiKTtcclxuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJkaXJlY3RcIik7XHJcbiAgICAgICAgaWYgKHJvb3QgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByb290ID0gd2luZG93O1xyXG4gICAgICAgIH1cclxuICAgICAgICByb290LkpTQVAgPSBmYWN0b3J5KCk7XHJcbiAgICB9XHJcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xyXG4gICAgY29uc29sZS5sb2coXCJmYWN0b3J5XCIpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBQbHVnaW5GYWN0b3J5OiBQbHVnaW5GYWN0b3J5LFxyXG4gICAgICAgIEJhc2VQbHVnaW46IEJhc2VQbHVnaW4sXHJcbiAgICAgICAgU3ludGhlc2lzZXJCYXNlUGx1Z2luOiBTeW50aGVzaXNlckJhc2VQbHVnaW5cclxuICAgIH07XHJcbn0pO1xyXG4iLCIvKiBqc2hpbnQgZXN2ZXJzaW9uOiA2ICovXHJcbmltcG9ydCB7TnVtYmVyUGFyYW1ldGVyfSBmcm9tIFwiLi9wYXJhbWV0ZXJzL051bWJlclBhcmFtZXRlci5qc1wiO1xyXG5pbXBvcnQge1N0cmluZ1BhcmFtZXRlcn0gZnJvbSBcIi4vcGFyYW1ldGVycy9TdHJpbmdQYXJhbWV0ZXIuanNcIjtcclxuaW1wb3J0IHtCdXR0b25QYXJhbWV0ZXJ9IGZyb20gXCIuL3BhcmFtZXRlcnMvQnV0dG9uUGFyYW1ldGVyLmpzXCI7XHJcbmltcG9ydCB7U3dpdGNoUGFyYW1ldGVyfSBmcm9tIFwiLi9wYXJhbWV0ZXJzL1N3aXRjaFBhcmFtZXRlci5qc1wiO1xyXG5pbXBvcnQge0xpc3RQYXJhbWV0ZXJ9IGZyb20gXCIuL3BhcmFtZXRlcnMvTGlzdFBhcmFtZXRlci5qc1wiO1xyXG5pbXBvcnQge1VSTFBhcmFtZXRlcn0gZnJvbSBcIi4vcGFyYW1ldGVycy9VUkxQYXJhbWV0ZXIuanNcIjtcclxuaW1wb3J0IHtBc3NldFBhcmFtZXRlcn0gZnJvbSBcIi4vcGFyYW1ldGVycy9Bc3NldFBhcmFtZXRlci5qc1wiO1xyXG5cclxudmFyIFBhcmFtZXRlck1hbmFnZXIgPSBmdW5jdGlvbiAob3duZXIsIHBsdWdpbkV4dGVybmFsSW50ZXJmYWNlKSB7XHJcbiAgICB2YXIgcGFyYW1ldGVyTGlzdCA9IFtdO1xyXG4gICAgdmFyIGV2ZW50VGFyZ2V0ID0gbmV3IEV2ZW50VGFyZ2V0KCk7XHJcblxyXG4gICAgZnVuY3Rpb24gZmluZFBhcmFtZXRlcihuYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIHBhcmFtZXRlckxpc3QuZmlsdGVyKGZ1bmN0aW9uKHApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHAuZXhwb3NlZDtcclxuICAgICAgICB9KS5maW5kKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBlLm5hbWUudG9Mb3dlckNhc2UoKSA9PT0gbmFtZS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGZpbmRQYXJhbWV0ZXJJbmRleChuYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIHBhcmFtZXRlckxpc3QuZmlsdGVyKGZ1bmN0aW9uKHApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHAuZXhwb3NlZDtcclxuICAgICAgICB9KS5maW5kSW5kZXgoZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGUubmFtZS50b0xvd2VyQ2FzZSgpID09PSBuYW1lLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYnVpbGRQYXJhbWV0ZXJPYmplY3QoKSB7XHJcbiAgICAgICAgdmFyIG9iaiA9IHt9O1xyXG4gICAgICAgIHBhcmFtZXRlckxpc3QuZmlsdGVyKGZ1bmN0aW9uKHApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHAuZXhwb3NlZDtcclxuICAgICAgICB9KS5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIG9ialtlLm5hbWVdID0gZTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gb2JqO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGFkZFBhcmFtZXRlcihwYXJhbSwgc2VsZikge1xyXG4gICAgICAgIHZhciBleGlzdHMgPSBwYXJhbWV0ZXJMaXN0LmZpbmRJbmRleChmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZSA9PT0gcGFyYW07XHJcbiAgICAgICAgfSwgcGFyYW0pO1xyXG4gICAgICAgIGlmIChleGlzdHMgPT09IC0xKSB7XHJcbiAgICAgICAgICAgIHBhcmFtLmFkZEV2ZW50TGlzdGVuZXIoXCJwYXJhbWV0ZXJzZXRcIiwgc2VsZik7XHJcbiAgICAgICAgICAgIHBhcmFtZXRlckxpc3QucHVzaChwYXJhbSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBwYXJhbTtcclxuICAgIH1cclxuXHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XHJcbiAgICAgICAgXCJhZGRFdmVudExpc3RlbmVyXCI6IHtcclxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbih0eXBlLCBsaXN0ZW5lciwgb3B0aW9ucykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGV2ZW50VGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXIsIG9wdGlvbnMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcInJlbW92ZUV2ZW50TGlzdGVuZXJcIjoge1xyXG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKHR5cGUsIGxpc3RlbmVyLCBvcHRpb25zKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZXZlbnRUYXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lciwgb3B0aW9ucyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiaGFuZGxlRXZlbnRcIjoge1xyXG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgICAgIHZhciBkZXRhaWwgPSBlLmRldGFpbDtcclxuICAgICAgICAgICAgICAgIGlmIChkZXRhaWwudXBkYXRlSW50ZXJmYWNlcyAhPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBwbHVnaW5FeHRlcm5hbEludGVyZmFjZS51cGRhdGVJbnRlcmZhY2VzKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoZS50eXBlID09IFwicGFyYW1ldGVyc2V0XCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBldmVudFRhcmdldC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcInBhcmFtZXRlcnNldFwiLCB7ZGV0YWlsOiBkZXRhaWwucGFyYW1ldGVyfSkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICAnY3JlYXRlTnVtYmVyUGFyYW1ldGVyJzoge1xyXG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uIChuYW1lLCBkZWZhdWx0VmFsdWUsIG1pbmltdW0sIG1heGltdW0sIHRvU3RyaW5nRnVuYywgdmlzaWJsZU5hbWUsIGV4cG9zZWQpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbmFtZSAhPT0gXCJzdHJpbmdcIiB8fCB0eXBlb2YgZGVmYXVsdFZhbHVlICE9PSBcIm51bWJlclwiIHx8IChtaW5pbXVtICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIG1pbmltdW0gIT09IFwibnVtYmVyXCIpIHx8IChtYXhpbXVtICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIG1heGltdW0gIT09IFwibnVtYmVyXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgKFwiSW52bGlkIGNvbnN0cnVjdG9yXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0b1N0cmluZ0Z1bmMgIT0gXCJmdW5jdGlvblwiICYmIHRvU3RyaW5nRnVuYyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgKFwidG9TdHJpbmdGdW5jIG11c3QgYmUgYSBmdW5jdGlvbiBvciB1bmRlZmluZWRcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoZmluZFBhcmFtZXRlckluZGV4KG5hbWUpICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IChcIlBhcmFtZXRlciB3aXRoIG5hbWUgJ1wiICsgbmFtZSArIFwiJyBhbHJlYWR5IGV4aXN0c1wiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhciBwYXJhbSA9IG5ldyBOdW1iZXJQYXJhbWV0ZXIob3duZXIsIG5hbWUsIGRlZmF1bHRWYWx1ZSwgbWluaW11bSwgbWF4aW11bSwgdG9TdHJpbmdGdW5jLCB2aXNpYmxlTmFtZSwgZXhwb3NlZCk7XHJcbiAgICAgICAgICAgICAgICBhZGRQYXJhbWV0ZXIocGFyYW0sIHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhcmFtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICAnY3JlYXRlU3RyaW5nUGFyYW1ldGVyJzoge1xyXG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uIChuYW1lLCBkZWZhdWx0VmFsdWUsIG1heExlbmd0aCwgdG9TdHJpbmdGdW5jLCB2aXNpYmxlTmFtZSwgZXhwb3NlZCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBuYW1lICE9PSBcInN0cmluZ1wiIHx8IHR5cGVvZiBkZWZhdWx0VmFsdWUgIT09IFwic3RyaW5nXCIgfHwgKG1heExlbmd0aCAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiBtYXhMZW5ndGggIT09IFwibnVtYmVyXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgKFwiSW52bGlkIGNvbnN0cnVjdG9yXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0b1N0cmluZ0Z1bmMgIT0gXCJmdW5jdGlvblwiICYmIHRvU3RyaW5nRnVuYyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgKFwidG9TdHJpbmdGdW5jIG11c3QgYmUgYSBmdW5jdGlvbiBvciB1bmRlZmluZWRcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoZmluZFBhcmFtZXRlckluZGV4KG5hbWUpICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IChcIlBhcmFtZXRlciB3aXRoIG5hbWUgJ1wiICsgbmFtZSArIFwiJyBhbHJlYWR5IGV4aXN0c1wiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhciBwYXJhbSA9IG5ldyBTdHJpbmdQYXJhbWV0ZXIob3duZXIsIG5hbWUsIGRlZmF1bHRWYWx1ZSwgbWF4TGVuZ3RoLCB0b1N0cmluZ0Z1bmMsIHZpc2libGVOYW1lLCBleHBvc2VkKTtcclxuICAgICAgICAgICAgICAgIGFkZFBhcmFtZXRlcihwYXJhbSwgdGhpcyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcGFyYW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgICdjcmVhdGVCdXR0b25QYXJhbWV0ZXInOiB7XHJcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKG5hbWUpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbmFtZSAhPT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IChcIkludmFsaWQgY29uc3RydWN0b3JcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoZmluZFBhcmFtZXRlckluZGV4KG5hbWUpICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IChcIlBhcmFtZXRlciB3aXRoIG5hbWUgJ1wiICsgbmFtZSArIFwiJyBhbHJlYWR5IGV4aXN0c1wiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhciBwYXJhbSA9IG5ldyBCdXR0b25QYXJhbWV0ZXIob3duZXIsIG5hbWUpO1xyXG4gICAgICAgICAgICAgICAgYWRkUGFyYW1ldGVyKHBhcmFtLCB0aGlzKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBwYXJhbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJ2NyZWF0ZVN3aXRjaFBhcmFtZXRlcic6IHtcclxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAobmFtZSwgZGVmYXVsdFZhbHVlLCBtaW5TdGF0ZSwgbWF4U3RhdGUsIHRvU3RyaW5nRnVuYywgdmlzaWJsZU5hbWUsIGV4cG9zZWQpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbmFtZSAhPT0gXCJzdHJpbmdcIiB8fCB0eXBlb2YgZGVmYXVsdFZhbHVlICE9PSBcIm51bWJlclwiIHx8IHR5cGVvZiBtaW5TdGF0ZSAhPT0gXCJudW1iZXJcIiB8fCB0eXBlb2YgbWF4U3RhdGUgIT09IFwibnVtYmVyXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyAoXCJJbnZsaWQgY29uc3RydWN0b3JcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRvU3RyaW5nRnVuYyAhPSBcImZ1bmN0aW9uXCIgJiYgdG9TdHJpbmdGdW5jICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyAoXCJ0b1N0cmluZ0Z1bmMgbXVzdCBiZSBhIGZ1bmN0aW9uIG9yIHVuZGVmaW5lZFwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChmaW5kUGFyYW1ldGVySW5kZXgobmFtZSkgIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgKFwiUGFyYW1ldGVyIHdpdGggbmFtZSAnXCIgKyBuYW1lICsgXCInIGFscmVhZHkgZXhpc3RzXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmFyIHBhcmFtID0gbmV3IFN3aXRjaFBhcmFtZXRlcihvd25lciwgbmFtZSwgZGVmYXVsdFZhbHVlLCBtaW5TdGF0ZSwgbWF4U3RhdGUsIHRvU3RyaW5nRnVuYywgdmlzaWJsZU5hbWUsIGV4cG9zZWQpO1xyXG4gICAgICAgICAgICAgICAgYWRkUGFyYW1ldGVyKHBhcmFtLCB0aGlzKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBwYXJhbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJ2NyZWF0ZUxpc3RQYXJhbWV0ZXInOiB7XHJcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKG5hbWUsIGRlZmF1bHRWYWx1ZSwgbGlzdE9mVmFsdWVzLCB0b1N0cmluZ0Z1bmMsIHZpc2libGVOYW1lLCBleHBvc2VkKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG5hbWUgIT09IFwic3RyaW5nXCIgfHwgdHlwZW9mIGRlZmF1bHRWYWx1ZSA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhQXJyYXkuaXNBcnJheShsaXN0T2ZWYWx1ZXMpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgKFwiSW52bGlkIGNvbnN0cnVjdG9yXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0b1N0cmluZ0Z1bmMgIT0gXCJmdW5jdGlvblwiICYmIHRvU3RyaW5nRnVuYyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgKFwidG9TdHJpbmdGdW5jIG11c3QgYmUgYSBmdW5jdGlvbiBvciB1bmRlZmluZWRcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAobGlzdE9mVmFsdWVzLmluY2x1ZGVzKGRlZmF1bHRWYWx1ZSkgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgKFwiSW52bGlkIGNvbnN0cnVjdG9yIC0gZGVmYXVsdCB2YWx1ZSBtaXNzaW5nXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGZpbmRQYXJhbWV0ZXJJbmRleChuYW1lKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyAoXCJQYXJhbWV0ZXIgd2l0aCBuYW1lICdcIiArIG5hbWUgKyBcIicgYWxyZWFkeSBleGlzdHNcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2YXIgcGFyYW0gPSBuZXcgTGlzdFBhcmFtZXRlcihvd25lciwgbmFtZSwgZGVmYXVsdFZhbHVlLCBsaXN0T2ZWYWx1ZXMsIHRvU3RyaW5nRnVuYywgdmlzaWJsZU5hbWUsIGV4cG9zZWQpO1xyXG4gICAgICAgICAgICAgICAgYWRkUGFyYW1ldGVyKHBhcmFtLCB0aGlzKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBwYXJhbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJ2NyZWF0ZVVSTFBhcmFtZXRlcic6IHtcclxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAobmFtZSwgZGVmYXVsdFZhbHVlLCBtYXhMZW5ndGgsIHRvU3RyaW5nRnVuYywgdmlzaWJsZU5hbWUsIGV4cG9zZWQpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbmFtZSAhPT0gXCJzdHJpbmdcIiB8fCAobWF4TGVuZ3RoICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIG1heExlbmd0aCAhPT0gXCJudW1iZXJcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyAoXCJJbnZsaWQgY29uc3RydWN0b3JcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRvU3RyaW5nRnVuYyAhPSBcImZ1bmN0aW9uXCIgJiYgdG9TdHJpbmdGdW5jICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyAoXCJ0b1N0cmluZ0Z1bmMgbXVzdCBiZSBhIGZ1bmN0aW9uIG9yIHVuZGVmaW5lZFwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChmaW5kUGFyYW1ldGVySW5kZXgobmFtZSkgIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgKFwiUGFyYW1ldGVyIHdpdGggbmFtZSAnXCIgKyBuYW1lICsgXCInIGFscmVhZHkgZXhpc3RzXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmFyIHBhcmFtID0gbmV3IFVSTFBhcmFtZXRlcihvd25lciwgbmFtZSwgZGVmYXVsdFZhbHVlLCBtYXhMZW5ndGgsIHRvU3RyaW5nRnVuYywgdmlzaWJsZU5hbWUsIGV4cG9zZWQpO1xyXG4gICAgICAgICAgICAgICAgYWRkUGFyYW1ldGVyKHBhcmFtLCB0aGlzKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBwYXJhbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJ2NyZWF0ZUFzc2V0UGFyYW1ldGVyJzoge1xyXG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uIChuYW1lLCBkZWZhdWx0VmFsdWUsIHZpc2libGVOYW1lLCBleHBvc2VkKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG5hbWUgIT09IFwic3RyaW5nXCIgfHwgKG1heExlbmd0aCAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiBtYXhMZW5ndGggIT09IFwibnVtYmVyXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgKFwiSW52bGlkIGNvbnN0cnVjdG9yXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0b1N0cmluZ0Z1bmMgIT0gXCJmdW5jdGlvblwiICYmIHRvU3RyaW5nRnVuYyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgKFwidG9TdHJpbmdGdW5jIG11c3QgYmUgYSBmdW5jdGlvbiBvciB1bmRlZmluZWRcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoZmluZFBhcmFtZXRlckluZGV4KG5hbWUpICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IChcIlBhcmFtZXRlciB3aXRoIG5hbWUgJ1wiICsgbmFtZSArIFwiJyBhbHJlYWR5IGV4aXN0c1wiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhciBwYXJhbSA9IG5ldyBBc3NldFBhcmFtZXRlcihvd25lciwgbmFtZSwgZGVmYXVsdFZhbHVlLCBtYXhMZW5ndGgsIHRvU3RyaW5nRnVuYywgdmlzaWJsZU5hbWUsIGV4cG9zZWQpO1xyXG4gICAgICAgICAgICAgICAgYWRkUGFyYW1ldGVyKHBhcmFtLCB0aGlzKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBwYXJhbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJ2NyZWF0ZVBhcmFtZXRlcic6IHtcclxuICAgICAgICAgICAgJ3ZhbHVlJzogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgKFwiVGhpcyBmdW5jdGlvbiBpcyBub3cgZGVwcmVjYXRlZFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJ2dldFBhcmFtZXRlck5hbWUnOiB7XHJcbiAgICAgICAgICAgICd2YWx1ZSc6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJERVBSRUNBVEVEIC0gdXNlIGdldFBhcmFtZXRlck5hbWVzXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UGFyYW1ldGVyTmFtZXMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJ2dldFBhcmFtZXRlckJ5TmFtZSc6IHtcclxuICAgICAgICAgICAgJ3ZhbHVlJzogZnVuY3Rpb24gKG5hbWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmaW5kUGFyYW1ldGVyKG5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICAnZ2V0UGFyYW1ldGVyT2JqZWN0Jzoge1xyXG4gICAgICAgICAgICAndmFsdWUnOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYnVpbGRQYXJhbWV0ZXJPYmplY3QoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJ2dldFBhcmFtZXRlck5hbWVzJzoge1xyXG4gICAgICAgICAgICAndmFsdWUnOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcGFyYW1ldGVyTGlzdC5maWx0ZXIoZnVuY3Rpb24ocCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwLmV4cG9zZWQ7XHJcbiAgICAgICAgICAgICAgICB9KS5tYXAoZnVuY3Rpb24ocCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwLm5hbWU7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJ3NldFBhcmFtZXRlckJ5TmFtZSc6IHtcclxuICAgICAgICAgICAgJ3ZhbHVlJzogZnVuY3Rpb24gKG4sIHYsIHVwZGF0ZUludGVyZmFjZXMpIHtcclxuICAgICAgICAgICAgICAgIHZhciBwYXJhbWV0ZXIgPSBmaW5kUGFyYW1ldGVyKG4pO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFwYXJhbWV0ZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAocGFyYW1ldGVyLmV4cG9zZWQgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgXCJDYW5ub3Qgc2V0IGhpZGRlbiBwYXJhbWV0ZXJcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHBhcmFtZXRlci5zZXRWYWx1ZSh2LCB1cGRhdGVJbnRlcmZhY2VzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJ2RlbGV0ZVBhcmFtZXRlcic6IHtcclxuICAgICAgICAgICAgJ3ZhbHVlJzogZnVuY3Rpb24gKG8pIHtcclxuICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IHBhcmFtZXRlckxpc3QuZmluZEluZGV4KGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGUgPT09IG87XHJcbiAgICAgICAgICAgICAgICB9LCBvKTtcclxuICAgICAgICAgICAgICAgIGlmIChpbmRleCA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gRG9lcyBleGlzdFxyXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtZXRlckxpc3Quc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgICAgICAgICBvLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJ2RlbGV0ZUFsbFBhcmFtZXRlcnMnOiB7XHJcbiAgICAgICAgICAgICd2YWx1ZSc6IGZ1bmN0aW9uIChvKSB7XHJcbiAgICAgICAgICAgICAgICBwYXJhbWV0ZXJMaXN0LmZvckVhY2goZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgcGFyYW1ldGVyTGlzdCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgICdzZXRQYXJhbWV0ZXJzQnlPYmplY3QnOiB7XHJcbiAgICAgICAgICAgICd2YWx1ZSc6IGZ1bmN0aW9uIChvYmplY3QsIHVwZGF0ZUludGVyZmFjZXMpIHtcclxuICAgICAgICAgICAgICAgIHZhciBrZXk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGtleSBpbiBvYmplY3QpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAob2JqZWN0Lmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvYmplY3Rba2V5XSA9PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFBhcmFtZXRlckJ5TmFtZShrZXksIG9iamVjdFtrZXldLnZhbHVlLCB1cGRhdGVJbnRlcmZhY2VzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2Ygb2JqZWN0W2tleV0gPT0gXCJudW1iZXJcIiB8fCB0eXBlb2Ygb2JqZWN0W2tleV0gPT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRQYXJhbWV0ZXJCeU5hbWUoa2V5LCBvYmplY3Rba2V5XSwgdXBkYXRlSW50ZXJmYWNlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyAoXCJDYW5ub3Qgc2V0IFwiICsga2V5ICsgXCI6IE5vdCBhIHZhbGlkIG9iamVjdFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJ3BhcmFtZXRlcnMnOiB7XHJcbiAgICAgICAgICAgICdnZXQnOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYnVpbGRQYXJhbWV0ZXJPYmplY3QoKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgJ3NldCc6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IChcIkNhbm5vdCBzZXQsIHVzZSAuc2V0UGFyYW1ldGVyQnkuLi4oKVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IHtQYXJhbWV0ZXJNYW5hZ2VyfTtcclxuIiwiLyoganNoaW50IGVzdmVyc2lvbjogNiAqL1xyXG5pbXBvcnQge1BsdWdpblBhcmFtZXRlcn0gZnJvbSBcIi4vUGx1Z2luUGFyYW1ldGVyLmpzXCI7XHJcbmltcG9ydCB7VVJMUGFyYW1ldGVyfSBmcm9tIFwiLi9VUkxQYXJhbWV0ZXIuanNcIjtcclxuXHJcbmZ1bmN0aW9uIEFzc2V0UGFyYW1ldGVyKG93bmVyLCBuYW1lLCBkZWZhdWx0VmFsdWUsIHZpc2libGVOYW1lLCBleHBvc2VkKSB7XHJcbiAgICBQbHVnaW5QYXJhbWV0ZXIuY2FsbCh0aGlzLCBvd25lciwgbmFtZSwgXCJTdHJpbmdcIiwgdmlzaWJsZU5hbWUsIGV4cG9zZWQpO1xyXG4gICAgdmFyIGFzc2V0VXJsID0gbmV3IFVSTFBhcmFtZXRlcih0aGlzLCBuYW1lK1wiIHVybFwiLCBkZWZhdWx0VmFsdWUpO1xyXG4gICAgdmFyIG9uZXJyb3JDYWxsYmFjaywgb25sb2FkQ2FsbGJhY2s7XHJcbiAgICB2YXIgYXVkaW9CdWZmZXI7XHJcblxyXG4gICAgZnVuY3Rpb24gbG9hZEFzc2V0KCkge1xyXG4gICAgICAgIGF1ZGlvQnVmZmVyID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIGFzc2V0VXJsLmdldFJlc291cmNlKFwiYXJyYXlidWZmZXJcIikudGhlbihvd25lci5jb250ZXh0LmRlY29kZUF1ZGlvRGF0YSkudGhlbihmdW5jdGlvbihidWZmZXIpIHtcclxuICAgICAgICAgICAgYXVkaW9CdWZmZXIgPSBidWZmZXI7XHJcbiAgICAgICAgICAgIGlmIChvbmxvYWRDYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgb25sb2FkQ2FsbGJhY2soYnVmZmVyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgICAgICBpZiAob25lcnJvckNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICBvbmVycm9yQ2FsbGJhY2soZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XHJcbiAgICAgICAgXCJvbmxvYWRcIjoge1xyXG4gICAgICAgICAgICBcImdldFwiOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gb25sb2FkQ2FsbGJhY2s7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwic2V0XCI6IGZ1bmN0aW9uKGYpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZiAhPSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyhcIkFzc2V0UGFyYW1ldGVyOjpvbmxvYWQgcmVxdWlyZXMgYSBmdW5jdGlvbiB3aXRoIG9uZSBhcmd1bWVudCB0byBiZSBzZXRcIik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIG9ubG9hZENhbGxiYWNrID0gZjtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb25sb2FkQ2FsbGJhY2s7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFwib25lcnJvclwiOiB7XHJcbiAgICAgICAgICAgIFwiZ2V0XCI6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBvbmVycm9yQ2FsbGJhY2s7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwic2V0XCI6IGZ1bmN0aW9uKGYpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZiAhPSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyhcIkFzc2V0UGFyYW1ldGVyOjpvbmVycm9yIHJlcXVpcmVzIGEgZnVuY3Rpb24gd2l0aCBvbmUgYXJndW1lbnQgdG8gYmUgc2V0XCIpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBvbmVycm9yQ2FsbGJhY2sgPSBmO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvbmVycm9yQ2FsbGJhY2s7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFwidHlwZVwiOiB7XHJcbiAgICAgICAgICAgIFwidmFsdWVcIjogXCJBc3NldFwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImRlc3Ryb3lcIjoge1xyXG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGFzc2V0VXJsLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgIG93bmVyID0gbmFtZSA9IGRlZmF1bHRWYWx1ZSA9IGFzc2V0VXJsID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImRlZmF1bHRWYWx1ZVwiOiB7XHJcbiAgICAgICAgICAgIFwidmFsdWVcIjogZGVmYXVsdFZhbHVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcInZhbHVlXCI6IHtcclxuICAgICAgICAgICAgXCJnZXRcIjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFzc2V0VXJsLnZhbHVlO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcInNldFwiOiBmdW5jdGlvbiAodikge1xyXG4gICAgICAgICAgICAgICAgdmFyIHR2ID0gdjtcclxuICAgICAgICAgICAgICAgIGFzc2V0VXJsLnZhbHVlID0gdjtcclxuICAgICAgICAgICAgICAgIGlmIChhc3NldFVybC52YWx1ZSAhPSB0dikge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGFzc2V0IGhhcyBjaGFuZ2VkIHVybC5cclxuICAgICAgICAgICAgICAgICAgICBsb2FkQXNzZXQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBhc3NldFVybC52YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJzZXRWYWx1ZVwiOiB7XHJcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24odiwgdXBkYXRlSW50ZXJmYWNlcykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFzc2V0VXJsLnNldFZhbHVlKHYsIHVwZGF0ZUludGVyZmFjZXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImJ1ZmZlclwiOiB7XHJcbiAgICAgICAgICAgIFwiZ2V0XCI6IGZ1bmN0aW9uKCkge3JldHVybiBhdWRpb0J1ZmZlcjt9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcInRvU3RyaW5nXCI6IHtcclxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbih2KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYXNzZXRVcmwudG9TdHJpbmcodik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiZ2V0UGFyYW1ldGVyT2JqZWN0XCI6IHtcclxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGFzc2V0VXJsLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGxvYWRlZDogKGF1ZGlvQnVmZmVyICE9PSB1bmRlZmluZWQpLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogZGVmYXVsdFZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHZpc2libGVOYW1lOiBuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiQXNzZXRQYXJhbWV0ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBuYW1lXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuQXNzZXRQYXJhbWV0ZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShQbHVnaW5QYXJhbWV0ZXIucHJvdG90eXBlKTtcclxuQXNzZXRQYXJhbWV0ZXIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gQXNzZXRQYXJhbWV0ZXI7XHJcblxyXG5leHBvcnQge0Fzc2V0UGFyYW1ldGVyfTtcclxuIiwiLyoganNoaW50IGVzdmVyc2lvbjogNiAqL1xyXG5pbXBvcnQge1BsdWdpblBhcmFtZXRlcn0gZnJvbSBcIi4vUGx1Z2luUGFyYW1ldGVyLmpzXCI7XHJcblxyXG5mdW5jdGlvbiBCdXR0b25QYXJhbWV0ZXIob3duZXIsIG5hbWUsIHZpc2libGVOYW1lLCBleHBvc2VkKSB7XHJcbiAgICBQbHVnaW5QYXJhbWV0ZXIuY2FsbCh0aGlzLCBvd25lciwgbmFtZSwgXCJCdXR0b25cIiwgdmlzaWJsZU5hbWUsIGV4cG9zZWQpO1xyXG4gICAgdmFyIG9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7fTtcclxuXHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XHJcbiAgICAgICAgXCJ0eXBlXCI6IHtcclxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIkJ1dHRvblwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImRlc3Ryb3lcIjoge1xyXG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIG93bmVyID0gbmFtZSA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJvbmNsaWNrXCI6IHtcclxuICAgICAgICAgICAgXCJnZXRcIjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9uY2xpY2s7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwic2V0XCI6IGZ1bmN0aW9uIChmKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGYgIT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IChcIm9uY2xpY2sgbXVzdCBiZSBhIGZ1bmN0aW9uXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgb25jbGljayA9IGY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiZ2V0UGFyYW1ldGVyT2JqZWN0XCI6IHtcclxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmlzaWJsZU5hbWU6IG5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJCdXR0b25QYXJhbWV0ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBuYW1lXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuQnV0dG9uUGFyYW1ldGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoUGx1Z2luUGFyYW1ldGVyLnByb3RvdHlwZSk7XHJcbkJ1dHRvblBhcmFtZXRlci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBCdXR0b25QYXJhbWV0ZXI7XHJcblxyXG5leHBvcnQge0J1dHRvblBhcmFtZXRlcn07XHJcbiIsIi8qIGpzaGludCBlc3ZlcnNpb246IDYgKi9cclxuaW1wb3J0IHtQbHVnaW5QYXJhbWV0ZXJ9IGZyb20gXCIuL1BsdWdpblBhcmFtZXRlci5qc1wiO1xyXG5pbXBvcnQge1BhcmFtZXRlclN0ZXBBdXRvbWF0aW9ufSBmcm9tIFwiLi9QYXJhbWV0ZXJBdXRvbWF0aW9uLmpzXCI7XHJcblxyXG5mdW5jdGlvbiBMaXN0UGFyYW1ldGVyKG93bmVyLCBuYW1lLCBkZWZhdWx0VmFsdWUsIGxpc3RPZlZhbHVlcywgdG9TdHJpbmdGdW5jLCB2aXNpYmxlTmFtZSwgZXhwb3NlZCkge1xyXG4gICAgUGx1Z2luUGFyYW1ldGVyLmNhbGwodGhpcywgb3duZXIsIG5hbWUsIFwiQnV0dG9uXCIsIHZpc2libGVOYW1lLCBleHBvc2VkKTtcclxuICAgIHZhciBhdWRpb1BhcmFtZXRlciwgYXV0b21hdGlvbjtcclxuICAgIHZhciBvbmNsaWNrID0gZnVuY3Rpb24gKCkge307XHJcbiAgICB2YXIgX2luZGV4ID0gbGlzdE9mVmFsdWVzLmluZGV4T2YoZGVmYXVsdFZhbHVlKTtcclxuXHJcbiAgICBmdW5jdGlvbiBzZXRWKHYsIHVwZGF0ZUludGVyZmFjZXMpIHtcclxuICAgICAgICB2YXIgaSA9IGxpc3RPZlZhbHVlcy5pbmRleE9mKHYpO1xyXG4gICAgICAgIGlmIChpID09PSB1bmRlZmluZWQgfHwgaSA8IDApIHtcclxuICAgICAgICAgICAgdGhyb3coXCJOb3QgaW4gbGlzdCByYW5nZVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuYm91bmRBdWRpb1BhcmFtKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYm91bmRBdWRpb1BhcmFtLnZhbHVlID0gdGhpcy51cGRhdGUodik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChfaW5kZXggIT09IGkpIHtcclxuICAgICAgICAgICAgX2luZGV4ID0gaTtcclxuICAgICAgICAgICAgdGhpcy50cmlnZ2VyUGFyYW1ldGVyU2V0KHVwZGF0ZUludGVyZmFjZXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnRyaWdnZXIoKTtcclxuICAgICAgICByZXR1cm4gbGlzdE9mVmFsdWVzW19pbmRleF07XHJcbiAgICB9XHJcblxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xyXG4gICAgICAgIFwidHlwZVwiOiB7XHJcbiAgICAgICAgICAgIFwidmFsdWVcIjogXCJMaXN0XCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiZGVzdHJveVwiOiB7XHJcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgb3duZXIgPSBuYW1lID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImRlZmF1bHRWYWx1ZVwiOiB7XHJcbiAgICAgICAgICAgIFwidmFsdWVcIjogZGVmYXVsdFZhbHVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImxpc3RWYWx1ZXNcIjoge1xyXG4gICAgICAgICAgICBcImdldFwiOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBsaXN0T2ZWYWx1ZXMubWFwKGZ1bmN0aW9uKHYpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdjtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcInZhbHVlXCI6IHtcclxuICAgICAgICAgICAgXCJnZXRcIjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGF1ZGlvUGFyYW1ldGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNsYXRlKGF1ZGlvUGFyYW1ldGVyLnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBsaXN0T2ZWYWx1ZXNbX2luZGV4XTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJzZXRcIjogZnVuY3Rpb24gKHYpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzZXRWLmNhbGwodGhpcywgdiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFwic2V0VmFsdWVcIjoge1xyXG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKHYsIHVwZGF0ZUludGVyZmFjZXMpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzZXRWLmNhbGwodGhpcywgdiwgdXBkYXRlSW50ZXJmYWNlcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiaW5jcmVtZW50XCI6IHtcclxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdiA9IF9pbmRleCArIDE7XHJcbiAgICAgICAgICAgICAgICBpZiAodiA+PSBsaXN0T2ZWYWx1ZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdiA9IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc2V0Vi5jYWxsKHRoaXMsIHYpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImRlY3JlbWVudFwiOiB7XHJcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHYgPSBfaW5kZXggLSAxO1xyXG4gICAgICAgICAgICAgICAgaWYgKHYgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdiA9IGxpc3RPZlZhbHVlcy5sZW5ndGgtMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBzZXRWLmNhbGwodGhpcywgdik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiYmluZFRvQXVkaW9QYXJhbVwiOiB7XHJcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKGFwKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGFwID09IFwib2JqZWN0XCIgJiYgYXAudmFsdWUgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXVkaW9QYXJhbWV0ZXIgPSBhcDtcclxuICAgICAgICAgICAgICAgICAgICBhdWRpb1BhcmFtZXRlci52YWx1ZSA9IHRoaXMudXBkYXRlKGxpc3RPZlZhbHVlc1tfaW5kZXhdKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYXAuc2V0VmFsdWVBdFRpbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0b21hdGlvbiA9IG5ldyBQYXJhbWV0ZXJTdGVwQXV0b21hdGlvbih0aGlzLCBhdWRpb1BhcmFtZXRlciwgMCwgbGlzdFZhbHVlcy5sZW5ndGgsIHRvU3RyaW5nRnVuYyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZ2V0VmFsdWVBdFRpbWVQb2ludFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbih0aW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmF1dG9tYXRpb25Qb2ludHMuZ2V0VmFsdWVBdFRpbWVQb2ludCh0aW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdXRvbWF0aW9uUG9pbnRzXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGF1dG9tYXRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN0YXJ0XCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKHRpbWUsIGNvbnRleHRUaW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhdXRvbWF0aW9uLnN0YXJ0KHRpbWUsIGNvbnRleHRUaW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdG9wXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKGNvbnRleHRUaW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9tYXRpb24uc3RvcChjb250ZXh0VGltZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZW5hYmxlZFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJnZXRcIjogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhdXRvbWF0aW9uLmVuYWJsZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNldFwiOiBmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoYXV0b21hdGlvbi5lbmFibGVkID0gdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCJDYW5ub3QgYmluZCBhdXRvbWF0aW9uIGFzIEF1ZGlvUGFyYW1ldGVyIGlzIG5vdCBhdXRvbWF0YWJsZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93KFwiQXJndW1lbnQgMSBpcyBub3QgYSB2YWxpZCBBdWRpb1BhcmFtZXRlciBvYmplY3RcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiYm91bmRBdWRpb1BhcmFtXCI6IHtcclxuICAgICAgICAgICAgXCJjb25maWd1cmFibGVcIjogdHJ1ZSxcclxuICAgICAgICAgICAgXCJnZXRcIjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGF1ZGlvUGFyYW1ldGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImF1dG9tYXRhYmxlXCI6IHtcclxuICAgICAgICAgICAgXCJnZXRcIjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHR5cGVvZiBhdXRvbWF0aW9uID09IFwib2JqZWN0XCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiYWRkT3B0aW9uVG9MaXN0XCI6IHtcclxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdHlwZSA9IHR5cGVvZiB0O1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGUgIT0gXCJzdHJpbmdcIiAmJiB0eXBlICE9IFwibnVtYmVyXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBcIkxpc3RQYXJhbWV0ZXI6OmFkZE9wdGlvblRvTGlzdCBBcmd1bWVudCAxIG11c3QgYmUgb2YgdHlwZSBzdHJpbmcgb3IgbnVtYmVyXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAobGlzdE9mVmFsdWVzLmluY2x1ZGVzKHQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgXCJMaXN0UGFyYW1ldGVyOjphZGRPcHRpb25Ub0xpc3QgQXJndW1lbnQgMSBjb250YWlucyBhIHZhbHVlIGFscmVhZHkgaW4gdGhlIGxpc3Qgb3B0aW9uc1wiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbGlzdE9mVmFsdWVzLnB1c2godCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbGlzdE9mVmFsdWVzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImRlbGV0ZU9wdGlvbkZyb21MaXN0XCI6IHtcclxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSBsaXN0T2ZWYWx1ZXMuaW5kZXhPZih0KTtcclxuICAgICAgICAgICAgICAgIHZhciBfdmFsdWUgPSBsaXN0T2ZWYWx1ZXNbX2luZGV4XTtcclxuICAgICAgICAgICAgICAgIGlmIChpbmRleCA9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IFwiTGlzdFBhcmFtZXRlcjo6ZGVsZXRlT3B0aW9uRnJvbUxpc3QgaXRlbSBcXFwiXCIrdCtcIlxcXCIgZG9lcyBub3QgZXhpc3QgaW4gdGhpcyBsaXN0XCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBsaXN0T2ZWYWx1ZXMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgICAgIF9pbmRleCA9IF9pbmRleCAlIGxpc3RPZlZhbHVlcy5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbGlzdE9mVmFsdWVzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcInRvU3RyaW5nXCI6IHtcclxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbih2KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodiA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB2ID0gdGhpcy52YWx1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdG9TdHJpbmdGdW5jID09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0b1N0cmluZ0Z1bmMuY2FsbCh0aGlzLCB2KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFN0cmluZyh2KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJnZXRQYXJhbWV0ZXJPYmplY3RcIjoge1xyXG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdGhpcy52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBsaXN0T2ZWYWx1ZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBkZWZhdWx0VmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgbWluaW11bTogMCxcclxuICAgICAgICAgICAgICAgICAgICBtYXhpbXVtOiBsaXN0T2ZWYWx1ZXMubGVuZ3RoLFxyXG4gICAgICAgICAgICAgICAgICAgIHZpc2libGVOYW1lOiBuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiTGlzdFBhcmFtZXRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IG5hbWVcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5MaXN0UGFyYW1ldGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoUGx1Z2luUGFyYW1ldGVyLnByb3RvdHlwZSk7XHJcbkxpc3RQYXJhbWV0ZXIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gTGlzdFBhcmFtZXRlcjtcclxuXHJcbmV4cG9ydCB7TGlzdFBhcmFtZXRlcn07XHJcbiIsIi8qIGpzaGludCBlc3ZlcnNpb246IDYgKi9cclxuaW1wb3J0IHtQbHVnaW5QYXJhbWV0ZXJ9IGZyb20gXCIuL1BsdWdpblBhcmFtZXRlci5qc1wiO1xyXG5pbXBvcnQge1BhcmFtZXRlckxpbmVhckF1dG9tYXRpb259IGZyb20gXCIuL1BhcmFtZXRlckF1dG9tYXRpb24uanNcIjtcclxuXHJcbmZ1bmN0aW9uIE51bWJlclBhcmFtZXRlcihvd25lciwgbmFtZSwgZGVmYXVsdFZhbHVlLCBtaW5pbXVtLCBtYXhpbXVtLCB0b1N0cmluZ0Z1bmMsIHZpc2libGVOYW1lLCBleHBvc2VkKSB7XHJcbiAgICBQbHVnaW5QYXJhbWV0ZXIuY2FsbCh0aGlzLCBvd25lciwgbmFtZSwgXCJOdW1iZXJcIiwgdmlzaWJsZU5hbWUsIGV4cG9zZWQpO1xyXG4gICAgdmFyIGF1ZGlvUGFyYW1ldGVyLCBhdXRvbWF0aW9uO1xyXG4gICAgdmFyIF92YWx1ZSA9IGRlZmF1bHRWYWx1ZSxcclxuICAgICAgICBfc3RlcFNpemU7XHJcblxyXG4gICAgZnVuY3Rpb24gc2V0VmFsdWUodiwgdXBkYXRlSW50ZXJmYWNlcylcclxuICAgIHtcclxuICAgICAgICBpZiAoYXV0b21hdGlvbiAmJiBhdXRvbWF0aW9uLmVuYWJsZWQpIHtcclxuICAgICAgICAgICAgdGhyb3coXCJBdXRvbWF0aW9uIGlzIGVuYWJsZWQsIGNhbm5vdCBzZXQgdGhlIHZhbHVlIVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubWluaW11bSkge1xyXG4gICAgICAgICAgICB2ID0gTWF0aC5tYXgodiwgdGhpcy5taW5pbXVtKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubWF4aW11bSkge1xyXG4gICAgICAgICAgICB2ID0gTWF0aC5taW4odiwgdGhpcy5tYXhpbXVtKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKF9zdGVwU2l6ZSkge1xyXG4gICAgICAgICAgICB2ID0gTWF0aC5yb3VuZCh2IC8gX3N0ZXBTaXplKTtcclxuICAgICAgICAgICAgdiA9IHYgKiBfc3RlcFNpemU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHYgPSB0aGlzLnVwZGF0ZSh2KTtcclxuICAgICAgICBpZiAoYXVkaW9QYXJhbWV0ZXIpIHtcclxuICAgICAgICAgICAgaWYgKGF1dG9tYXRpb24pIHtcclxuICAgICAgICAgICAgICAgIGF1ZGlvUGFyYW1ldGVyLnNldFZhbHVlQXRUaW1lKHYsIG93bmVyLmZhY3RvcnkuY29udGV4dC5jdXJyZW50VGltZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBhdWRpb1BhcmFtZXRlci52YWx1ZSA9IHY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKF92YWx1ZSAhPT0gdikge1xyXG4gICAgICAgICAgICBfdmFsdWUgPSB2O1xyXG4gICAgICAgICAgICB0aGlzLnRyaWdnZXJQYXJhbWV0ZXJTZXQodXBkYXRlSW50ZXJmYWNlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudHJpZ2dlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcclxuICAgICAgICBcInR5cGVcIjoge1xyXG4gICAgICAgICAgICBcInZhbHVlXCI6IFwiTnVtYmVyXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiZGVzdHJveVwiOiB7XHJcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgb3duZXIgPSBuYW1lID0gZGVmYXVsdFZhbHVlID0gbWluaW11bSA9IG1heGltdW0gPSBfdmFsdWUgPSBfc3RlcFNpemUgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFwibWluaW11bVwiOiB7XHJcbiAgICAgICAgICAgIFwidmFsdWVcIjogbWluaW11bVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJtYXhpbXVtXCI6IHtcclxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBtYXhpbXVtXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImRlZmF1bHRWYWx1ZVwiOiB7XHJcbiAgICAgICAgICAgIFwidmFsdWVcIjogZGVmYXVsdFZhbHVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcInZhbHVlXCI6IHtcclxuICAgICAgICAgICAgXCJnZXRcIjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGF1ZGlvUGFyYW1ldGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGF1dG9tYXRpb24gJiYgYXV0b21hdGlvbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0ID0gb3duZXIuZmFjdG9yeS5nZXRDdXJyZW50UHJvZ3JhbVRpbWUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGF1dG9tYXRpb24uZ2V0Q3VycmVudFRpbWVWYWx1ZSh0KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNsYXRlKGF1ZGlvUGFyYW1ldGVyLnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBfdmFsdWU7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwic2V0XCI6IGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc2V0VmFsdWUuY2FsbCh0aGlzLCB2LCB0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJzZXRWYWx1ZVwiOiB7XHJcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24odiwgdXBkYXRlSW50ZXJmYWNlcykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNldFZhbHVlLmNhbGwodGhpcywgdiwgdXBkYXRlSW50ZXJmYWNlcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFwic3RlcFNpemVcIjoge1xyXG4gICAgICAgICAgICBcImdldFwiOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gX3N0ZXBTaXplO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcInNldFwiOiBmdW5jdGlvbiAobikge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFpc0Zpbml0ZShuKSB8fCBuIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IChcIkludmFsaWQgc3RlcCBzaXplXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgX3N0ZXBTaXplID0gbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJiaW5kVG9BdWRpb1BhcmFtXCI6IHtcclxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoYXApIHtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgYXAgPT0gXCJvYmplY3RcIiAmJiBhcC52YWx1ZSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBhdWRpb1BhcmFtZXRlciA9IGFwO1xyXG4gICAgICAgICAgICAgICAgICAgIGF1ZGlvUGFyYW1ldGVyLnZhbHVlID0gdGhpcy51cGRhdGUoX3ZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYXAuc2V0VmFsdWVBdFRpbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0b21hdGlvbiA9IG5ldyBQYXJhbWV0ZXJMaW5lYXJBdXRvbWF0aW9uKHRoaXMsIGF1ZGlvUGFyYW1ldGVyLCBtaW5pbXVtLCBtYXhpbXVtLCB0b1N0cmluZ0Z1bmMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImdldFZhbHVlQXRUaW1lUG9pbnRcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24odGltZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5hdXRvbWF0aW9uUG9pbnRzLmdldFZhbHVlQXRUaW1lUG9pbnQodGltZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXV0b21hdGlvblBvaW50c1wiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBhdXRvbWF0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdGFydFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbih0aW1lLCBjb250ZXh0VGltZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXV0b21hdGlvbi5zdGFydCh0aW1lLCBjb250ZXh0VGltZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3RvcFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbihjb250ZXh0VGltZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvbWF0aW9uLnN0b3AoY29udGV4dFRpbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImVuYWJsZWRcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZ2V0XCI6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXV0b21hdGlvbi5lbmFibGVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzZXRcIjogZnVuY3Rpb24odCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKGF1dG9tYXRpb24uZW5hYmxlZCA9IHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwiQ2Fubm90IGJpbmQgYXV0b21hdGlvbiBhcyBBdWRpb1BhcmFtZXRlciBpcyBub3QgYXV0b21hdGFibGVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyhcIkFyZ3VtZW50IDEgaXMgbm90IGEgdmFsaWQgQXVkaW9QYXJhbWV0ZXIgb2JqZWN0XCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImJvdW5kQXVkaW9QYXJhbVwiOiB7XHJcbiAgICAgICAgICAgIFwiY29uZmlndXJhYmxlXCI6IHRydWUsXHJcbiAgICAgICAgICAgIFwiZ2V0XCI6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBhdWRpb1BhcmFtZXRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJhdXRvbWF0YWJsZVwiOiB7XHJcbiAgICAgICAgICAgIFwiZ2V0XCI6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0eXBlb2YgYXV0b21hdGlvbiA9PSBcIm9iamVjdFwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcInRvU3RyaW5nXCI6IHtcclxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbih2KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodiA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB2ID0gdGhpcy52YWx1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdG9TdHJpbmdGdW5jID09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0b1N0cmluZ0Z1bmMuY2FsbCh0aGlzLCB2KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFN0cmluZyh2KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJnZXRQYXJhbWV0ZXJPYmplY3RcIjoge1xyXG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdGhpcy52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU6IGRlZmF1bHRWYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICBtaW5pbXVtOiBtaW5pbXVtLFxyXG4gICAgICAgICAgICAgICAgICAgIG1heGltdW06IG1heGltdW0sXHJcbiAgICAgICAgICAgICAgICAgICAgdmlzaWJsZU5hbWU6IG5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJOdW1iZXJQYXJhbWV0ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBuYW1lXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuTnVtYmVyUGFyYW1ldGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoUGx1Z2luUGFyYW1ldGVyLnByb3RvdHlwZSk7XHJcbk51bWJlclBhcmFtZXRlci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBOdW1iZXJQYXJhbWV0ZXI7XHJcblxyXG5leHBvcnQge051bWJlclBhcmFtZXRlcn07XHJcbiIsIi8qIGpzaGludCBlc3ZlcnNpb246IDYgKi9cclxudmFyIFRpbWVQb2ludCA9IGZ1bmN0aW9uKG93bmVyLCB0aW1lLCB2YWx1ZSwgdG9TdHJpbmdGdW5jKSB7XHJcbiAgICBpZiAodHlwZW9mIHRpbWUgIT0gXCJudW1iZXJcIiB8fCAhaXNGaW5pdGUodGltZSkgfHwgdGltZSA8IDApIHtcclxuICAgICAgICB0aHJvdyhcIkludmFsaWQgQ29uc3RydWN0b3I6IFRpbWUgbXVzdCBiZSBhIHBvc2l0aXZlIG51bWJlclwiKTtcclxuICAgIH1cclxuICAgIGlmICh0eXBlb2YgdmFsdWUgIT0gXCJudW1iZXJcIiB8fCAhaXNGaW5pdGUodmFsdWUpKSB7XHJcbiAgICAgICAgdGhyb3coXCJJbnZhbGlkIENvbnN0cnVjdG9yOiBWYWx1ZSBtdXN0IGJlIGEgbnVtYmVyXCIpO1xyXG4gICAgfVxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xyXG4gICAgICAgIFwidGltZVwiOiB7XHJcbiAgICAgICAgICAgIFwiZ2V0XCI6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRpbWU7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwic2V0XCI6IGZ1bmN0aW9uKHQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNldFRpbWUodCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFwidmFsdWVcIjoge1xyXG4gICAgICAgICAgICBcImdldFwiOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJzZXRcIjogZnVuY3Rpb24odikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2V0VmFsdWUodik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFwic2V0VmFsdWVcIjoge1xyXG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKHYpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdiAhPSBcIm51bWJlclwiIHx8ICFpc0Zpbml0ZSh2KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93KFwiVmFsdWUgbXVzdCBiZSBhIG51bWJlclwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhbHVlID0gTWF0aC5taW4oTWF0aC5tYXgodiwgb3duZXIubWluaW11bSksIG93bmVyLm1heGltdW0pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcInNldFRpbWVcIjoge1xyXG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKHQpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdCA9PSBcIm51bWJlclwiICYmIGlzRmluaXRlKHQpICYmIHQgPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpbWUgPSB0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRpbWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFwidG9TdHJpbmdcIjoge1xyXG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0b1N0cmluZ0Z1bmMgPT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRvU3RyaW5nRnVuYy5jYWxsKHRoaXMsIHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBTdHJpbmcodmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIm93bmVyXCI6IHtcclxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBvd25lclxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59O1xyXG5cclxudmFyIFRpbWVQb2ludExpc3QgPSBmdW5jdGlvbihtaW5fdmFsdWUsIG1heF92YWx1ZSwgdG9TdHJpbmdGdW5jKSB7XHJcbiAgICBmdW5jdGlvbiBnZXRQb2ludEF0VGltZShhdXRvbWF0aW9uUG9pbnRzLCB0aW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIGF1dG9tYXRpb25Qb2ludHMuZmluZChmdW5jdGlvbihwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwLnRpbWUgPT0gdGltZTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGhhc1BvaW50QXRUaW1lKGF1dG9tYXRpb25Qb2ludHMsIHRpbWUpIHtcclxuICAgICAgICByZXR1cm4gZ2V0UG9pbnRBdFRpbWUoYXV0b21hdGlvblBvaW50cywgdGltZSkgIT09IHVuZGVmaW5lZDtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHNvcnRQb2ludHMoYXV0b21hdGlvblBvaW50cykge1xyXG4gICAgICAgIHJldHVybiBhdXRvbWF0aW9uUG9pbnRzLnNvcnQoZnVuY3Rpb24oYSxiKSB7XHJcbiAgICAgICAgICAgIGlmIChhLnRpbWUgPiBiLnRpbWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBpZiAodHlwZW9mIG1pbl92YWx1ZSAhPSBcIm51bWJlclwiIHx8ICFpc0Zpbml0ZShtaW5fdmFsdWUpKSB7XHJcbiAgICAgICAgdGhyb3coXCJJbnZhbGlkIENvbnN0cnVjdG9yOiBtaW5fdmFsdWUgYmUgYSBudW1iZXJcIik7XHJcbiAgICB9XHJcbiAgICBpZiAodHlwZW9mIG1heF92YWx1ZSAhPSBcIm51bWJlclwiIHx8ICFpc0Zpbml0ZShtYXhfdmFsdWUpKSB7XHJcbiAgICAgICAgdGhyb3coXCJJbnZhbGlkIENvbnN0cnVjdG9yOiBtYXhfdmFsdWUgYmUgYSBudW1iZXJcIik7XHJcbiAgICB9XHJcbiAgICBpZiAobWluX3ZhbHVlID09IG1heF92YWx1ZSkge1xyXG4gICAgICAgIHRocm93KFwiSW52YWxpZCBDb25zdHJ1Y3RvcjogbWF4X3ZhbHVlIGNhbm5vdCBlcXVhbCB0byBtaW5fdmFsdWVcIik7XHJcbiAgICB9XHJcbiAgICBpZiAobWF4X3ZhbHVlIDwgbWluX3ZhbHVlKSB7XHJcbiAgICAgICAgdGhyb3coXCJJbnZhbGlkIENvbnN0cnVjdG9yOiBtaW5fdmFsdWUgY2Fubm90IGJlIGdyZWF0ZXIgdGhhbiBtYXhfdmFsdWVcIik7XHJcbiAgICB9XHJcbiAgICB2YXIgYXV0b21hdGlvblBvaW50cyA9IFtdO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xyXG4gICAgICAgIFwiaW5zZXJ0UG9pbnRcIjoge1xyXG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKHRpbWUsIHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRpbWUgIT0gXCJudW1iZXJcIiB8fCAhaXNGaW5pdGUodGltZSkgfHwgdGltZSA8IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyhcIlRpbWUgbXVzdCBiZSBhIHBvc2l0aXZlIG51bWJlclwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgIT0gXCJudW1iZXJcIiB8fCAhaXNGaW5pdGUodmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3coXCJWYWx1ZSBtdXN0IGJlIGEgbnVtYmVyXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGhhc1BvaW50QXRUaW1lKGF1dG9tYXRpb25Qb2ludHMsIHRpbWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3coXCJBbHJlYWR5IGEgdmFsdWUgZW50cnkgYXQgdGltZSBcIit0aW1lKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhbHVlID0gTWF0aC5taW4oTWF0aC5tYXgodmFsdWUsIG1pbl92YWx1ZSksIG1heF92YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgcG9pbnQgPSBuZXcgVGltZVBvaW50KHRoaXMsIHRpbWUsIHZhbHVlLCB0b1N0cmluZ0Z1bmMpO1xyXG4gICAgICAgICAgICAgICAgYXV0b21hdGlvblBvaW50cy5wdXNoKHBvaW50KTtcclxuICAgICAgICAgICAgICAgIGF1dG9tYXRpb25Qb2ludHMgPSBzb3J0UG9pbnRzKGF1dG9tYXRpb25Qb2ludHMpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHBvaW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImdldFBvaW50c1wiOiB7XHJcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24oc3RhcnRfdGltZSwgZW5kX3RpbWUpIHtcclxuICAgICAgICAgICAgICAgIGlmIChzdGFydF90aW1lID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBzdGFydF90aW1lID0gMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChlbmRfdGltZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW5kX3RpbWUgPSBJbmZpbml0eTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBhdXRvbWF0aW9uUG9pbnRzLmZpbHRlcihmdW5jdGlvbihwb2ludCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwb2ludC50aW1lID49IHN0YXJ0X3RpbWUgJiYgcG9pbnQudGltZSA8IGVuZF90aW1lO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiZGVsZXRlUG9pbnRcIjoge1xyXG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKHRpbWUpIHtcclxuICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IGF1dG9tYXRpb25Qb2ludHMuZmluZEluZGV4KGZ1bmN0aW9uKHBvaW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBvaW50LnRpbWUgPT0gdGltZTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID49IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBhdXRvbWF0aW9uUG9pbnRzLnNwbGljZShpbmRleCwgMSwgMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYXV0b21hdGlvblBvaW50cy5sZW5ndGg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiZ2V0U3RhdGljVmFsdWVBc1N0cmluZ1wiOiB7XHJcbiAgICAgICAgICAgIFwid3JpdGFibGVcIjogdHJ1ZSxcclxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBTdHJpbmcodmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImdldFZhbHVlQXRUaW1lUG9pbnRcIjoge1xyXG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICh0aW1lKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZ2V0UG9pbnRBdFRpbWUoYXV0b21hdGlvblBvaW50cywgdGltZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFwibGVuZ3RoXCI6IHtcclxuICAgICAgICAgICAgXCJnZXRcIjogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYXV0b21hdGlvblBvaW50cy5sZW5ndGg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFwibWluaW11bVwiOiB7XHJcbiAgICAgICAgICAgIFwidmFsdWVcIjogbWluX3ZhbHVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIm1heGltdW1cIjoge1xyXG4gICAgICAgICAgICBcInZhbHVlXCI6IG1heF92YWx1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJ1cGRhdGVQb2ludFwiOiB7XHJcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24odGltZSwgb3B0aW9ucykge1xyXG4gICAgICAgICAgICAgICAgdmFyIHBvaW50ID0gYXV0b21hdGlvblBvaW50cy5maW5kKGZ1bmN0aW9uKHBvaW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBvaW50LnRpbWUgPT0gdGltZTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgaWYgKHBvaW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLnRpbWUgPT0gXCJudW1iZXJcIiAmJiBvcHRpb25zLnRpbWUgIT0gcG9pbnQudGltZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ2V0UG9pbnRBdFRpbWUoYXV0b21hdGlvblBvaW50cywgdGltZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93KFwiQSB0aW1lLXBvaW50IGFscmVhZHkgZXhpc3RzIGF0IFxcXCJcIitTdHJpbmcob3B0aW9ucy50aW1lKStcIlxcXCIgc2Vjb25kc1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvaW50LnRpbWUgPSBvcHRpb25zLnRpbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvbWF0aW9uUG9pbnRzID0gc29ydFBvaW50cyhhdXRvbWF0aW9uUG9pbnRzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBwb2ludC52YWx1ZSA9IG9wdGlvbnMudmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcG9pbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufTtcclxuXHJcbnZhciBQYXJhbWV0ZXJBdXRvbWF0aW9uID0gZnVuY3Rpb24ocGFyYW1ldGVyLCBtaW5fdmFsdWUsIG1heF92YWx1ZSwgdG9TdHJpbmdGdW5jKSB7XHJcbiAgICBUaW1lUG9pbnRMaXN0LmNhbGwodGhpcywgbWluX3ZhbHVlLCBtYXhfdmFsdWUsIHRvU3RyaW5nRnVuYyk7XHJcbiAgICB2YXIgZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xyXG4gICAgICAgIFwiZW5hYmxlZFwiOiB7XHJcbiAgICAgICAgICAgIFwiZ2V0XCI6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGVuYWJsZWQ7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwic2V0XCI6IGZ1bmN0aW9uKHQpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBlbmFibGVkID0gKHQgPT09IHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGVuYWJsZWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufTtcclxuXHJcbnZhciBQYXJhbWV0ZXJMaW5lYXJBdXRvbWF0aW9uID0gZnVuY3Rpb24gKG93bmVyLCBwYXJhbWV0ZXIsIG1pbl92YWx1ZSwgbWF4X3ZhbHVlLCB0b1N0cmluZ0Z1bmMpIHtcclxuICAgIFBhcmFtZXRlckF1dG9tYXRpb24uY2FsbCh0aGlzLCBwYXJhbWV0ZXIsIG1pbl92YWx1ZSwgbWF4X3ZhbHVlLCB0b1N0cmluZ0Z1bmMpO1xyXG4gICAgZnVuY3Rpb24gbGluZWFySW50ZXJwb2xhdGlvbih0aW1lLCBwb2ludEEsIHBvaW50Qikge1xyXG4gICAgICAgIHZhciB0MSA9IHBvaW50QS50aW1lO1xyXG4gICAgICAgIHZhciB0MiA9IHBvaW50Qi50aW1lO1xyXG4gICAgICAgIHRpbWUgLT0gdDE7XHJcbiAgICAgICAgdDIgLT0gdDE7XHJcbiAgICAgICAgdDEgPSAwO1xyXG5cclxuICAgICAgICB2YXIgcCA9IHRpbWUvdDI7XHJcbiAgICAgICAgcmV0dXJuIHBvaW50QS52YWx1ZSAqICgxLXApICsgcG9pbnRCLnZhbHVlICogcDtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGdldEN1cnJlbnRUaW1lVmFsdWUoYXV0b21hdGlvblBvaW50cywgdGltZSkge1xyXG4gICAgICAgIGlmIChhdXRvbWF0aW9uUG9pbnRzLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgIHRocm93KFwiTm8gYXV0b21hdGlvbiBwb2ludHMgYXZhaWxhYmxlXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYXV0b21hdGlvblBvaW50cy5sZW5ndGggPT0gMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gYXV0b21hdGlvblBvaW50c1swXS52YWx1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBmaXJzdFBvaW50ID0gYXV0b21hdGlvblBvaW50cy5yZWR1Y2UoZnVuY3Rpb24ocG9pbnQsIG5leHRQb2ludCkge1xyXG4gICAgICAgICAgICBpZiAobmV4dFBvaW50LnRpbWUgPD0gdGltZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5leHRQb2ludDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBwb2ludDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIGF1dG9tYXRpb25Qb2ludHNbMF0pO1xyXG4gICAgICAgIHZhciBzZWNvbmRQb2ludCA9IGF1dG9tYXRpb25Qb2ludHMuZmluZChmdW5jdGlvbihwb2ludCkge1xyXG4gICAgICAgICAgICByZXR1cm4gcG9pbnQudGltZSA+IGZpcnN0UG9pbnQudGltZTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAoc2Vjb25kUG9pbnQgPT09IHVuZGVmaW5lZCB8fCBmaXJzdFBvaW50LnRpbWUgPiB0aW1lKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmaXJzdFBvaW50LnZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbGluZWFySW50ZXJwb2xhdGlvbih0aW1lLCBmaXJzdFBvaW50LCBzZWNvbmRQb2ludCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc3RhcnQoYXV0b21hdGlvblBvaW50cywgdGltZSwgY29udGV4dFRpbWUpIHtcclxuICAgICAgICB2YXIgc3RhcnRQb3NpdGlvbiA9IG93bmVyLnVwZGF0ZShnZXRDdXJyZW50VGltZVZhbHVlKGF1dG9tYXRpb25Qb2ludHMsIHRpbWUpKTtcclxuICAgICAgICBwYXJhbWV0ZXIuc2V0VmFsdWVBdFRpbWUoc3RhcnRQb3NpdGlvbiwgY29udGV4dFRpbWUpO1xyXG4gICAgICAgIGF1dG9tYXRpb25Qb2ludHMuZm9yRWFjaChmdW5jdGlvbihwKSB7XHJcbiAgICAgICAgICAgIGlmIChwLnRpbWUgPiB0aW1lKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdCA9IHAudGltZSAtIHRpbWU7XHJcbiAgICAgICAgICAgICAgICB2YXIgdiA9IG93bmVyLnVwZGF0ZShwLnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIHBhcmFtZXRlci5saW5lYXJSYW1wVG9WYWx1ZUF0VGltZSh2LCB0K2NvbnRleHRUaW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHN0b3AoY29udGV4dFRpbWUpIHtcclxuICAgICAgICBpZiAoY29udGV4dFRpbWUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBjb250ZXh0VGltZSA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHBhcmFtZXRlci5jYW5jZWxTY2hlZHVsZWRWYWx1ZXMoY29udGV4dFRpbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcclxuICAgICAgICBcImdldEN1cnJlbnRUaW1lVmFsdWVcIjoge1xyXG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKHRpbWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBnZXRDdXJyZW50VGltZVZhbHVlKHRoaXMuZ2V0UG9pbnRzKCksIHRpbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcInN0YXJ0XCI6IHtcclxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbih0aW1lLCBjb250ZXh0VGltZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZW5hYmxlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0KHRoaXMuZ2V0UG9pbnRzKCksIHRpbWUsIGNvbnRleHRUaW1lKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJzdG9wXCI6IHtcclxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbihjb250ZXh0VGltZSkge1xyXG4gICAgICAgICAgICAgICAgc3RvcChjb250ZXh0VGltZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbn07XHJcblBhcmFtZXRlckxpbmVhckF1dG9tYXRpb24ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShQYXJhbWV0ZXJBdXRvbWF0aW9uLnByb3RvdHlwZSk7XHJcblBhcmFtZXRlckxpbmVhckF1dG9tYXRpb24ucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gUGFyYW1ldGVyTGluZWFyQXV0b21hdGlvbjtcclxuXHJcbnZhciBQYXJhbWV0ZXJTdGVwQXV0b21hdGlvbiA9IGZ1bmN0aW9uIChvd25lciwgcGFyYW1ldGVyLCBtaW5fdmFsdWUsIG1heF92YWx1ZSwgdG9TdHJpbmdGdW5jKSB7XHJcbiAgICBQYXJhbWV0ZXJBdXRvbWF0aW9uLmNhbGwodGhpcywgcGFyYW1ldGVyLCBtaW5fdmFsdWUsIG1heF92YWx1ZSwgdG9TdHJpbmdGdW5jKTtcclxuICAgIGZ1bmN0aW9uIGdldEN1cnJlbnRUaW1lVmFsdWUoYXV0b21hdGlvblBvaW50cywgdGltZSkge1xyXG4gICAgICAgIGlmIChhdXRvbWF0aW9uUG9pbnRzLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgIHRocm93KFwiTm8gYXV0b21hdGlvbiBwb2ludHMgYXZhaWxhYmxlXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYXV0b21hdGlvblBvaW50cy5sZW5ndGggPT0gMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gYXV0b21hdGlvblBvaW50c1swXS52YWx1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBuZWFyZXN0UG9pbnQgPSBhdXRvbWF0aW9uUG9pbnRzLnJlZHVjZShmdW5jdGlvbihwb2ludCwgbmV4dFBvaW50KSB7XHJcbiAgICAgICAgICAgIGlmIChuZXh0UG9pbnQudGltZSA8PSB0aW1lKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV4dFBvaW50O1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHBvaW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgYXV0b21hdGlvblBvaW50c1swXSk7XHJcbiAgICAgICAgcmV0dXJuIG5lYXJlc3RQb2ludC52YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzdGFydChhdXRvbWF0aW9uUG9pbnRzLCB0aW1lLCBjb250ZXh0VGltZSkge1xyXG4gICAgICAgIHZhciBzdGFydFBvc2l0aW9uID0gb3duZXIudXBkYXRlKGdldEN1cnJlbnRUaW1lVmFsdWUoYXV0b21hdGlvblBvaW50cywgdGltZSkpO1xyXG4gICAgICAgIHBhcmFtZXRlci5zZXRWYWx1ZUF0VGltZShzdGFydFBvc2l0aW9uLCBjb250ZXh0VGltZSk7XHJcbiAgICAgICAgYXV0b21hdGlvblBvaW50cy5mb3JFYWNoKGZ1bmN0aW9uKHApIHtcclxuICAgICAgICAgICAgaWYgKHAudGltZSA+IHRpbWUpIHtcclxuICAgICAgICAgICAgICAgIHZhciB0ID0gcC50aW1lIC0gdGltZTtcclxuICAgICAgICAgICAgICAgIHZhciB2ID0gb3duZXIudXBkYXRlKHAudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgcGFyYW1ldGVyLnNldFZhbHVlQXRUaW1lKHYsIHQrY29udGV4dFRpbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc3RvcChjb250ZXh0VGltZSkge1xyXG4gICAgICAgIHBhcmFtZXRlci5jYW5jZWxTY2hlZHVsZWRWYWx1ZXMoY29udGV4dFRpbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcclxuICAgICAgICBcImdldEN1cnJlbnRUaW1lVmFsdWVcIjoge1xyXG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKHRpbWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBnZXRDdXJyZW50VGltZVZhbHVlKHRoaXMuZ2V0UG9pbnRzKCksIHRpbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcInN0YXJ0XCI6IHtcclxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbih0aW1lLCBjb250ZXh0VGltZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZW5hYmxlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0KHRoaXMuZ2V0UG9pbnRzKCksIHRpbWUsIGNvbnRleHRUaW1lKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJzdG9wXCI6IHtcclxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbihjb250ZXh0VGltZSkge1xyXG4gICAgICAgICAgICAgICAgc3RvcChjb250ZXh0VGltZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufTtcclxuUGFyYW1ldGVyU3RlcEF1dG9tYXRpb24ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShQYXJhbWV0ZXJBdXRvbWF0aW9uLnByb3RvdHlwZSk7XHJcblBhcmFtZXRlclN0ZXBBdXRvbWF0aW9uLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFBhcmFtZXRlclN0ZXBBdXRvbWF0aW9uO1xyXG5cclxuZXhwb3J0IHtQYXJhbWV0ZXJMaW5lYXJBdXRvbWF0aW9uLCBQYXJhbWV0ZXJTdGVwQXV0b21hdGlvbn07XHJcbiIsIi8qIGpzaGludCBlc3ZlcnNpb246IDYgKi9cclxuZnVuY3Rpb24gUGx1Z2luUGFyYW1ldGVyKG93bmVyLCBuYW1lLCBkYXRhVHlwZSwgdmlzaWJsZU5hbWUsIGV4cG9zZWQpIHtcclxuICAgIHZhciB1cGRhdGUsIHRyYW5zbGF0ZSwgdHJpZ2dlcjtcclxuICAgIHZhciBldmVudFRhcmdldCA9IG5ldyBFdmVudFRhcmdldCgpO1xyXG4gICAgdXBkYXRlID0gdHJhbnNsYXRlID0gZnVuY3Rpb24gKHYpIHtcclxuICAgICAgICByZXR1cm4gdjtcclxuICAgIH07XHJcbiAgICB0cmlnZ2VyID0gZnVuY3Rpb24gKCkge307XHJcbiAgICBpZiAodHlwZW9mIHZpc2libGVOYW1lICE9IFwic3RyaW5nXCIgfHwgdmlzaWJsZU5hbWUubGVuZ3RoID09IDApIHtcclxuICAgICAgICB2aXNpYmxlTmFtZSA9IG5hbWU7XHJcbiAgICB9XHJcbiAgICBpZiAoZXhwb3NlZCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgZXhwb3NlZCA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBpZiAodHlwZW9mIGV4cG9zZWQgIT0gXCJib29sZWFuXCIpIHtcclxuICAgICAgICBjb25zb2xlLndhcm4oXCJleHBvc2VkIHBhcmFtZXRlciBpcyBub3Qgb2YgdHlwZSBib29sZWFuLCBhc3N1bWluZyBleHBvc2VkID0gdHJ1ZVwiKTtcclxuICAgICAgICBleHBvc2VkID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcclxuICAgICAgICBcImFkZEV2ZW50TGlzdGVuZXJcIjoge1xyXG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKHR5cGUsIGxpc3RlbmVyLCBvcHRpb25zKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZXZlbnRUYXJnZXQuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lciwgb3B0aW9ucyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFwicmVtb3ZlRXZlbnRMaXN0ZW5lclwiOiB7XHJcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24odHlwZSwgbGlzdGVuZXIsIG9wdGlvbnMpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBldmVudFRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyLCBvcHRpb25zKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJ0cmlnZ2VyUGFyYW1ldGVyU2V0XCI6IHtcclxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbih1cGRhdGVJbnRlcmZhY2VzKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgb3B0cyA9IHtkZXRhaWw6IHtcclxuICAgICAgICAgICAgICAgICAgICBwYXJhbWV0ZXI6IHRoaXMsXHJcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlSW50ZXJmYWNlczogdXBkYXRlSW50ZXJmYWNlc1xyXG4gICAgICAgICAgICAgICAgfX07XHJcbiAgICAgICAgICAgICAgICBldmVudFRhcmdldC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcInBhcmFtZXRlcnNldFwiLCBvcHRzKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFwibmFtZVwiOiB7XHJcbiAgICAgICAgICAgIFwidmFsdWVcIjogbmFtZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJvd25lclwiOiB7XHJcbiAgICAgICAgICAgIFwidmFsdWVcIjogb3duZXJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwidmlzaWJsZU5hbWVcIjoge1xyXG4gICAgICAgICAgICBcInZhbHVlXCI6IHZpc2libGVOYW1lXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImV4cG9zZWRcIjoge1xyXG4gICAgICAgICAgICBcInZhbHVlXCI6IGV4cG9zZWRcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwidXBkYXRlXCI6IHtcclxuICAgICAgICAgICAgXCJnZXRcIjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVwZGF0ZTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJzZXRcIjogZnVuY3Rpb24gKGYpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZiAhPT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgKFwiTXVzdCBiZSBhIGNhbGxiYWNrIGZ1bmN0aW9uXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGYoMCkgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IChcIkZ1bmN0aW9uIG11c3QgcmV0dXJuIGEgdmFsdWVcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB1cGRhdGUgPSBmO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcInRyYW5zbGF0ZVwiOiB7XHJcbiAgICAgICAgICAgIFwiZ2V0XCI6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cmFuc2xhdGU7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwic2V0XCI6IGZ1bmN0aW9uIChmKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGYgIT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IChcIk11c3QgYmUgYSBjYWxsYmFjayBmdW5jdGlvblwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChmKDApID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyAoXCJGdW5jdGlvbiBtdXN0IHJldHVybiBhIHZhbHVlXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlID0gZjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJ0cmlnZ2VyXCI6IHtcclxuICAgICAgICAgICAgXCJnZXRcIjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRyaWdnZXI7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwic2V0XCI6IGZ1bmN0aW9uIChmKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGYgIT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IChcIk11c3QgYmUgYSBjYWxsYmFjayBmdW5jdGlvblwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRyaWdnZXIgPSBmO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImJpbmRUb0F1ZGlvUGFyYW1cIjoge1xyXG4gICAgICAgICAgICBcImNvbmZpZ3VyYWJsZVwiOiB0cnVlLFxyXG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uIChhcCkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3coXCJDYW5ub3QgYmluZCB0aGlzIHBhcmFtZXRlciB0eXBlIHRvIGFuIGF1ZGlvIHBhcmFtZXRlclwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJib3VuZEF1ZGlvUGFyYW1cIjoge1xyXG4gICAgICAgICAgICBcImNvbmZpZ3VyYWJsZVwiOiB0cnVlLFxyXG4gICAgICAgICAgICBcImdldFwiOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCB7UGx1Z2luUGFyYW1ldGVyfTtcclxuIiwiLyoganNoaW50IGVzdmVyc2lvbjogNiAqL1xyXG5pbXBvcnQge1BsdWdpblBhcmFtZXRlcn0gZnJvbSBcIi4vUGx1Z2luUGFyYW1ldGVyLmpzXCI7XHJcblxyXG5mdW5jdGlvbiBTdHJpbmdQYXJhbWV0ZXIob3duZXIsIG5hbWUsIGRlZmF1bHRWYWx1ZSwgbWF4TGVuZ3RoLCB0b1N0cmluZ0Z1bmMsIHZpc2libGVOYW1lLCBleHBvc2VkKSB7XHJcbiAgICBQbHVnaW5QYXJhbWV0ZXIuY2FsbCh0aGlzLCBvd25lciwgbmFtZSwgXCJTdHJpbmdcIiwgdmlzaWJsZU5hbWUsIGV4cG9zZWQpO1xyXG4gICAgdmFyIF92YWx1ZSA9IGRlZmF1bHRWYWx1ZTtcclxuICAgIHZhciBhdWRpb1BhcmFtZXRlcjtcclxuXHJcbiAgICBmdW5jdGlvbiBzZXRWYWx1ZSh2LCB1cGRhdGVJbnRlcmZhY2VzKSB7XHJcbiAgICAgICAgaWYgKG1heExlbmd0aCkge1xyXG4gICAgICAgICAgICBpZiAodi5sZW5ndGggPiBtYXhMZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IChcIlN0cmluZyBsb25nZXIgdGhhbiBcIiArIG1heExlbmd0aCArIFwiIGNoYXJhY3RlcnNcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuYm91bmRBdWRpb1BhcmFtKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYm91bmRBdWRpb1BhcmFtLnZhbHVlID0gdGhpcy51cGRhdGUodik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChfdmFsdWUgIT09IHYpIHtcclxuICAgICAgICAgICAgX3ZhbHVlID0gdjtcclxuICAgICAgICAgICAgdGhpcy50cmlnZ2VyUGFyYW1ldGVyU2V0KHVwZGF0ZUludGVyZmFjZXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnRyaWdnZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XHJcbiAgICAgICAgXCJ0eXBlXCI6IHtcclxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIlN0cmluZ1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImRlc3Ryb3lcIjoge1xyXG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIG93bmVyID0gbmFtZSA9IGRlZmF1bHRWYWx1ZSA9IG1heExlbmd0aCA9IF92YWx1ZSA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJtYXhMZW5ndGhcIjoge1xyXG4gICAgICAgICAgICBcInZhbHVlXCI6IG1heExlbmd0aFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJkZWZhdWx0VmFsdWVcIjoge1xyXG4gICAgICAgICAgICBcInZhbHVlXCI6IGRlZmF1bHRWYWx1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJ2YWx1ZVwiOiB7XHJcbiAgICAgICAgICAgIFwiZ2V0XCI6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmJvdW5kQXVkaW9QYXJhbSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRyYW5zbGF0ZSh0aGlzLmJvdW5kQXVkaW9QYXJhbS52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gX3ZhbHVlO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcInNldFwiOiBmdW5jdGlvbiAodikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNldFZhbHVlLmNhbGwodGhpcywgdiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFwic2V0VmFsdWVcIjoge1xyXG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKHYsIHVwZGF0ZUludGVyZmFjZXMpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzZXRWYWx1ZS5jYWxsKHRoaXMsIHYsIHVwZGF0ZUludGVyZmFjZXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImJpbmRUb0F1ZGlvUGFyYW1cIjoge1xyXG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uIChhcCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBhcCA9PSBcIm9iamVjdFwiICYmIGFwLnZhbHVlICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGF1ZGlvUGFyYW1ldGVyID0gYXA7XHJcbiAgICAgICAgICAgICAgICAgICAgYXVkaW9QYXJhbWV0ZXIudmFsdWUgPSB0aGlzLnVwZGF0ZShfdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyhcIkFyZ3VtZW50IDEgaXMgbm90IGEgdmFsaWQgQXVkaW9QYXJhbWV0ZXIgb2JqZWN0XCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImJvdW5kQXVkaW9QYXJhbVwiOiB7XHJcbiAgICAgICAgICAgIFwiY29uZmlndXJhYmxlXCI6IHRydWUsXHJcbiAgICAgICAgICAgIFwiZ2V0XCI6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBhdWRpb1BhcmFtZXRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJ0b1N0cmluZ1wiOiB7XHJcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24odikge1xyXG4gICAgICAgICAgICAgICAgaWYgKHYgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdiA9IHRoaXMudmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRvU3RyaW5nRnVuYyA9PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdG9TdHJpbmdGdW5jLmNhbGwodGhpcywgdik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBTdHJpbmcodik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiZ2V0UGFyYW1ldGVyT2JqZWN0XCI6IHtcclxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHRoaXMudmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBkZWZhdWx0VmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoOiBtYXhMZW5ndGgsXHJcbiAgICAgICAgICAgICAgICAgICAgdmlzaWJsZU5hbWU6IG5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJTdHJpbmdQYXJhbWV0ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBuYW1lXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuU3RyaW5nUGFyYW1ldGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoUGx1Z2luUGFyYW1ldGVyLnByb3RvdHlwZSk7XHJcblN0cmluZ1BhcmFtZXRlci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBTdHJpbmdQYXJhbWV0ZXI7XHJcblxyXG5leHBvcnQge1N0cmluZ1BhcmFtZXRlcn07XHJcbiIsIi8qIGpzaGludCBlc3ZlcnNpb246IDYgKi9cclxuaW1wb3J0IHtQbHVnaW5QYXJhbWV0ZXJ9IGZyb20gXCIuL1BsdWdpblBhcmFtZXRlci5qc1wiO1xyXG5pbXBvcnQge1BhcmFtZXRlclN0ZXBBdXRvbWF0aW9ufSBmcm9tIFwiLi9QYXJhbWV0ZXJBdXRvbWF0aW9uLmpzXCI7XHJcblxyXG5mdW5jdGlvbiBTd2l0Y2hQYXJhbWV0ZXIob3duZXIsIG5hbWUsIGRlZmF1bHRWYWx1ZSwgbWluU3RhdGUsIG1heFN0YXRlLCB0b1N0cmluZ0Z1bmMsIHZpc2libGVOYW1lLCBleHBvc2VkKSB7XHJcbiAgICBQbHVnaW5QYXJhbWV0ZXIuY2FsbCh0aGlzLCBvd25lciwgbmFtZSwgXCJCdXR0b25cIiwgdmlzaWJsZU5hbWUsIGV4cG9zZWQpO1xyXG4gICAgdmFyIG9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7fTtcclxuICAgIHZhciBfdmFsdWUgPSBkZWZhdWx0VmFsdWU7XHJcbiAgICB2YXIgYXVkaW9QYXJhbWV0ZXIsIGF1dG9tYXRpb247XHJcblxyXG4gICAgZnVuY3Rpb24gc2V0VmFsdWUodiwgdXBkYXRlSW50ZXJmYWNlcykge1xyXG4gICAgICAgIGlmICh2IDwgbWluU3RhdGUpIHtcclxuICAgICAgICAgICAgdGhyb3cgKFwiU2V0IHZhbHVlIGlzIGxlc3MgdGhhbiBcIiArIG1pblN0YXRlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHYgPiBtYXhTdGF0ZSkge1xyXG4gICAgICAgICAgICB0aHJvdyAoXCJTZXQgdmFsdWUgaXMgZ3JlYXRlciB0aGFuIFwiICsgbWF4U3RhdGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5ib3VuZEF1ZGlvUGFyYW0pIHtcclxuICAgICAgICAgICAgdGhpcy5ib3VuZEF1ZGlvUGFyYW0udmFsdWUgPSB0aGlzLnVwZGF0ZSh2KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKF92YWx1ZSAhPT0gdikge1xyXG4gICAgICAgICAgICBfdmFsdWUgPSB2O1xyXG4gICAgICAgICAgICB0aGlzLnRyaWdnZXJQYXJhbWV0ZXJTZXQodXBkYXRlSW50ZXJmYWNlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudHJpZ2dlcigpO1xyXG4gICAgICAgIHJldHVybiB2O1xyXG4gICAgfVxyXG5cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcclxuICAgICAgICBcInR5cGVcIjoge1xyXG4gICAgICAgICAgICBcInZhbHVlXCI6IFwiU3dpdGNoXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiZGVzdHJveVwiOiB7XHJcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgb3duZXIgPSBuYW1lID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImRlZmF1bHRWYWx1ZVwiOiB7XHJcbiAgICAgICAgICAgIFwidmFsdWVcIjogZGVmYXVsdFZhbHVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIm1pblN0YXRlXCI6IHtcclxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBtaW5TdGF0ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJtYXhTdGF0ZVwiOiB7XHJcbiAgICAgICAgICAgIFwidmFsdWVcIjogbWF4U3RhdGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwidmFsdWVcIjoge1xyXG4gICAgICAgICAgICBcImdldFwiOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5ib3VuZEF1ZGlvUGFyYW0pIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50cmFuc2xhdGUodGhpcy5ib3VuZEF1ZGlvUGFyYW0udmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIF92YWx1ZTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJzZXRcIjogZnVuY3Rpb24gKHYpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzZXRWYWx1ZS5jYWxsKHRoaXMsIHYpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcInNldFZhbHVlXCI6IHtcclxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbih2LCB1cGRhdGVJbnRlcmZhY2VzKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc2V0VmFsdWUuY2FsbCh0aGlzLCB2LCB1cGRhdGVJbnRlcmZhY2VzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJpbmNyZW1lbnRcIjoge1xyXG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHZhciB2ID0gX3ZhbHVlICsgMTtcclxuICAgICAgICAgICAgICAgIGlmICh2ID4gbWF4U3RhdGUpIHtcclxuICAgICAgICAgICAgICAgICAgICB2ID0gbWluU3RhdGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc2V0VmFsdWUuY2FsbCh0aGlzLCB2KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJkZWNyZW1lbnRcIjoge1xyXG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHZhciB2ID0gX3ZhbHVlIC0gMTtcclxuICAgICAgICAgICAgICAgIGlmICh2IDwgbWluU3RhdGUpIHtcclxuICAgICAgICAgICAgICAgICAgICB2ID0gbWF4U3RhdGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc2V0VmFsdWUuY2FsbCh0aGlzLCB2KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJiaW5kVG9BdWRpb1BhcmFtXCI6IHtcclxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoYXApIHtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgYXAgPT0gXCJvYmplY3RcIiAmJiBhcC52YWx1ZSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBhdWRpb1BhcmFtZXRlciA9IGFwO1xyXG4gICAgICAgICAgICAgICAgICAgIGF1ZGlvUGFyYW1ldGVyLnZhbHVlID0gdGhpcy51cGRhdGUoX3ZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYXAuc2V0VmFsdWVBdFRpbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0b21hdGlvbiA9IG5ldyBQYXJhbWV0ZXJTdGVwQXV0b21hdGlvbih0aGlzLCBhdWRpb1BhcmFtZXRlciwgbWluU3RhdGUsIG1heFN0YXRlLCB0b1N0cmluZ0Z1bmMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImdldFZhbHVlQXRUaW1lUG9pbnRcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24odGltZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5hdXRvbWF0aW9uUG9pbnRzLmdldFZhbHVlQXRUaW1lUG9pbnQodGltZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXV0b21hdGlvblBvaW50c1wiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBhdXRvbWF0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdGFydFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbih0aW1lLCBjb250ZXh0VGltZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXV0b21hdGlvbi5zdGFydCh0aW1lLCBjb250ZXh0VGltZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3RvcFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbihjb250ZXh0VGltZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvbWF0aW9uLnN0b3AoY29udGV4dFRpbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImVuYWJsZWRcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZ2V0XCI6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXV0b21hdGlvbi5lbmFibGVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzZXRcIjogZnVuY3Rpb24odCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKGF1dG9tYXRpb24uZW5hYmxlZCA9IHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwiQ2Fubm90IGJpbmQgYXV0b21hdGlvbiBhcyBBdWRpb1BhcmFtZXRlciBpcyBub3QgYXV0b21hdGFibGVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyhcIkFyZ3VtZW50IDEgaXMgbm90IGEgdmFsaWQgQXVkaW9QYXJhbWV0ZXIgb2JqZWN0XCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImJvdW5kQXVkaW9QYXJhbVwiOiB7XHJcbiAgICAgICAgICAgIFwiY29uZmlndXJhYmxlXCI6IHRydWUsXHJcbiAgICAgICAgICAgIFwiZ2V0XCI6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBhdWRpb1BhcmFtZXRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJhdXRvbWF0YWJsZVwiOiB7XHJcbiAgICAgICAgICAgIFwiZ2V0XCI6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0eXBlb2YgYXV0b21hdGlvbiA9PSBcIm9iamVjdFwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcInRvU3RyaW5nXCI6IHtcclxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbih2KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodiA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB2ID0gdGhpcy52YWx1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdG9TdHJpbmdGdW5jID09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0b1N0cmluZ0Z1bmMuY2FsbCh0aGlzLCB2KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFN0cmluZyh2KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJnZXRQYXJhbWV0ZXJPYmplY3RcIjoge1xyXG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdGhpcy52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU6IGRlZmF1bHRWYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICBtaW5pbXVtOiBtaW5TdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICBtYXhpbXVtOiBtYXhTdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICB2aXNpYmxlTmFtZTogbmFtZSxcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIlN3aXRjaFBhcmFtZXRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IG5hbWVcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5Td2l0Y2hQYXJhbWV0ZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShQbHVnaW5QYXJhbWV0ZXIucHJvdG90eXBlKTtcclxuU3dpdGNoUGFyYW1ldGVyLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFN3aXRjaFBhcmFtZXRlcjtcclxuXHJcbmV4cG9ydCB7U3dpdGNoUGFyYW1ldGVyfTtcclxuIiwiLyoganNoaW50IGVzdmVyc2lvbjogNiAqL1xyXG5pbXBvcnQge1BsdWdpblBhcmFtZXRlcn0gZnJvbSBcIi4vUGx1Z2luUGFyYW1ldGVyLmpzXCI7XHJcblxyXG5mdW5jdGlvbiBVUkxQYXJhbWV0ZXIob3duZXIsIG5hbWUsIGRlZmF1bHRWYWx1ZSwgbWF4TGVuZ3RoLCB0b1N0cmluZ0Z1bmMsIHZpc2libGVOYW1lLCBleHBvc2VkKSB7XHJcbiAgICBQbHVnaW5QYXJhbWV0ZXIuY2FsbCh0aGlzLCBvd25lciwgbmFtZSwgXCJTdHJpbmdcIiwgdmlzaWJsZU5hbWUsIGV4cG9zZWQpO1xyXG4gICAgdmFyIF92YWx1ZSA9IGRlZmF1bHRWYWx1ZTtcclxuICAgIHZhciByZXNvdXJjZU9iamVjdDtcclxuXHJcbiAgICBmdW5jdGlvbiBnZXRSZXNvdXJjZSh0eXBlKSB7XHJcbiAgICAgICAgaWYgKHJlc291cmNlT2JqZWN0ICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzb3VyY2VPYmplY3Q7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmVzb3VyY2VPYmplY3QgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICAgICAgICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICAgICAgICAgIHhoci5vcGVuKFwiR0VUXCIsIF92YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB4aHIucmVzcG9uc2VUeXBlID0gdHlwZTtcclxuICAgICAgICAgICAgICAgIHhoci5vbmxvYWQgPSBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHhoci5zdGF0dXMgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoZS50YXJnZXQucmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiB4aHIuc3RhdHVzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogZS50YXJnZXQucmVzcG9uc2VUZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgeGhyLm9uZXJyb3IgPSBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogeGhyLnN0YXR1cyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJlcnJvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgeGhyLm9udGltZW91dCA9IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3Qoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiB4aHIuc3RhdHVzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcInRpbWVvdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIHhoci5zZW5kKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZXRWYWx1ZSh2LCB1cGRhdGVJbnRlcmZhY2VzKSB7XHJcbiAgICAgICAgaWYgKG1heExlbmd0aCkge1xyXG4gICAgICAgICAgICBpZiAodi5sZW5ndGggPiBtYXhMZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IChcIlN0cmluZyBsb25nZXIgdGhhbiBcIiArIG1heExlbmd0aCArIFwiIGNoYXJhY3RlcnNcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF2LnN0YXJ0c1dpdGgoXCJodHRwOi8vXCIpICYmICF2LnN0YXJ0c1dpdGgoXCJodHRwczovL1wiKSkge1xyXG4gICAgICAgICAgICB0aHJvdyhcIlVSTCBtdXN0IHN0YXJ0IHdpdGggJ2h0dHA6Ly8nIG9yICdodHRwczovLydcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChfdmFsdWUgIT09IHYpIHtcclxuICAgICAgICAgICAgcmVzb3VyY2VPYmplY3QgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIF92YWx1ZSA9IHY7XHJcbiAgICAgICAgICAgIHRoaXMudHJpZ2dlclBhcmFtZXRlclNldCh1cGRhdGVJbnRlcmZhY2VzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy50cmlnZ2VyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xyXG4gICAgICAgIFwidHlwZVwiOiB7XHJcbiAgICAgICAgICAgIFwidmFsdWVcIjogXCJVUkxcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJkZXN0cm95XCI6IHtcclxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBvd25lciA9IG5hbWUgPSBkZWZhdWx0VmFsdWUgPSBtYXhMZW5ndGggPSBfdmFsdWUgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFwibWF4TGVuZ3RoXCI6IHtcclxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBtYXhMZW5ndGhcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiZGVmYXVsdFZhbHVlXCI6IHtcclxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBkZWZhdWx0VmFsdWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwidmFsdWVcIjoge1xyXG4gICAgICAgICAgICBcImdldFwiOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5ib3VuZEF1ZGlvUGFyYW0pIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50cmFuc2xhdGUodGhpcy5ib3VuZEF1ZGlvUGFyYW0udmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIF92YWx1ZTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJzZXRcIjogZnVuY3Rpb24gKHYpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzZXRWYWx1ZS5jYWxsKHRoaXMsIHYsIHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcInNldFZhbHVlXCI6IHtcclxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbih2LCB1cGRhdGVJbnRlcmZhY2VzKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc2V0VmFsdWUuY2FsbCh0aGlzLCB2LCB1cGRhdGVJbnRlcmZhY2VzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJnZXRSZXNvdXJjZVwiOntcclxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBnZXRSZXNvdXJjZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJ0b1N0cmluZ1wiOiB7XHJcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24odikge1xyXG4gICAgICAgICAgICAgICAgaWYgKHYgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdiA9IHRoaXMudmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRvU3RyaW5nRnVuYyA9PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdG9TdHJpbmdGdW5jLmNhbGwodGhpcywgdik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBTdHJpbmcodik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiZ2V0UGFyYW1ldGVyT2JqZWN0XCI6IHtcclxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHRoaXMudmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBkZWZhdWx0VmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoOiBtYXhMZW5ndGgsXHJcbiAgICAgICAgICAgICAgICAgICAgdmlzaWJsZU5hbWU6IG5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJVUkxQYXJhbWV0ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBuYW1lXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuVVJMUGFyYW1ldGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoUGx1Z2luUGFyYW1ldGVyLnByb3RvdHlwZSk7XHJcblVSTFBhcmFtZXRlci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBVUkxQYXJhbWV0ZXI7XHJcblxyXG5leHBvcnQge1VSTFBhcmFtZXRlcn07XHJcbiIsIi8vIFRoaXMgZGVmaW5lcyBhIG1hc3RlciBvYmplY3QgZm9yIGhvbGRpbmcgYWxsIHRoZSBwbHVnaW5zIGFuZCBjb21tdW5pY2F0aW5nXHJcbi8vIFRoaXMgb2JqZWN0IHdpbGwgYWxzbyBoYW5kbGUgY3JlYXRpb24gYW5kIGRlc3RydWN0aW9uIG9mIHBsdWdpbnNcclxuLypnbG9iYWxzIFByb21pc2UsIGRvY3VtZW50LCBjb25zb2xlLCBMaW5rZWRTdG9yZSwgV29ya2VyLCB3aW5kb3csIFhNTEh0dHBSZXF1ZXN0ICovXHJcbi8qZXNsaW50LWVudiBicm93c2VyICovXHJcbi8qIGpzaGludCBlc3ZlcnNpb246NiAqL1xyXG5cclxuLy8gTG9hZCBqc1h0cmFjdFxyXG4oZnVuY3Rpb24oKSB7XHJcbiAgICBpZiAod2luZG93LmpzWHRyYWN0ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICB2YXIgcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XHJcbiAgICAgICAgcy5zcmMgPSBcImh0dHBzOi8vZ2l0Y2RuLnh5ei9yZXBvL25pY2tqaWxsaW5ncy9qcy14dHJhY3QvbWFzdGVyL2pzWHRyYWN0LmpzXCI7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdLmFwcGVuZENoaWxkKHMpO1xyXG4gICAgfVxyXG59KSgpO1xyXG5cclxuaW1wb3J0IExpbmtlZFN0b3JlIGZyb20gJy4vTGlua2VkU3RvcmUnO1xyXG5pbXBvcnQge0Jhc2VQbHVnaW59IGZyb20gJy4vYmFzZV9wbHVnaW4nO1xyXG5pbXBvcnQge1N5bnRoZXNpc2VyQmFzZVBsdWdpbn0gZnJvbSAnLi9zeW50aF9iYXNlJztcclxuaW1wb3J0IHtQbHVnaW5Bc3NldHNMaXN0fSBmcm9tICcuL0ZhY3RvcnkvUGx1Z2luQXNzZXRzTGlzdCc7XHJcblxyXG5mdW5jdGlvbiBQbHVnaW5GYWN0b3J5KGF1ZGlvX2NvbnRleHQsIHJvb3RVUkwpIHtcclxuICAgIHZhciBzdWJGYWN0b3JpZXMgPSBbXSxcclxuICAgIHN5bnRoZXNpc2VySG9zdHMgPSBbXSxcclxuICAgIHBsdWdpbl9wcm90b3R5cGVzID0gW10sXHJcbiAgICBwbHVnaW5zTGlzdCA9IFtdLFxyXG4gICAgY3VycmVudFBsdWdpbklkID0gMCxcclxuICAgIGF1ZGlvU3RhcnRQcm9ncmFtVGltZSxcclxuICAgIGF1ZGlvU3RhcnRDb250ZXh0VGltZSxcclxuICAgIGF1ZGlvU3RhcnRlZCA9IGZhbHNlO1xyXG5cclxuICAgIHRoaXMucGx1Z2luQXNzZXRzTGlzdCA9IG5ldyBQbHVnaW5Bc3NldHNMaXN0KHRoaXMpO1xyXG5cclxuICAgIC8qXHJcbiAgICAgICAgdGhpcy5sb2FkUmVzb3VyY2UuIExvYWQgYSByZXNvdXJjZSBpbnRvIHRoZSBnbG9iYWwgbmFtZXNwYWNlXHJcblxyXG4gICAgICAgIEBwYXJhbSByZXNvdXJjZU9iamVjdDogYSBKUyBvYmplY3QgaG9sZGluZyB0aGUgZm9sbG93aW5nIHBhcmFtZXRlcnM6XHJcbiAgICAgICAgICAgIC51cmw6IFVSTCBvZiB0aGUgcmVzb3VyY2VcclxuICAgICAgICAgICAgLnRlc3Q6IGZ1bmN0aW9uIHRvIGNhbGwsIHJldHVybnMgdHJ1ZSBpZiByZXNvdXJjZSBhbHJlYWR5IGxvYWRlZCwgZmFsc2UgaWYgbm90XHJcbiAgICAqL1xyXG4gICAgdGhpcy5sb2FkUHJvdG90eXBlTW9kdWxlID0gZnVuY3Rpb24ocmVzb3VyY2VPYmplY3QsIG11c3RNb2R1bGUpIHtcclxuICAgICAgICB2YXIgZmFjdG9yeSA9IHRoaXM7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGdsb2JhbC5kZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBnbG9iYWwuZGVmaW5lLmFtZCkge1xyXG4gICAgICAgICAgICAgICAgZ2xvYmFsLnJlcXVpcmUoW3Jlc291cmNlT2JqZWN0LnVybF0sIGZ1bmN0aW9uKGYpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGYpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGdsb2JhbC5tb2R1bGUgPT0gXCJvYmplY3RcIiAmJiBnbG9iYWwubW9kdWxlLmV4cG9ydHMpIHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoZ2xvYmFsLnJlcXVpcmUocmVzb3VyY2VPYmplY3QudXJsKSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZWplY3QoXCJDYW5ub3QgbG9hZCB1c2luZyBtb2R1bGFyIHN5c3RlbXNcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uKGV4ZWN1dGFibGUpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBleGVjdXRhYmxlID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWN0b3J5LmFkZFByb3RvdHlwZShleGVjdXRhYmxlKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJlamVjdChcIklzIG5vdCBhIG1vZHVsZSBwbHVnaW5cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KS5jYXRjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgaWYgKG11c3RNb2R1bGUgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIHJlamVjdChcIkNhbm5vdCBsb2FkIHVzaW5nIG1vZHVsYXIgc3lzdGVtc1wiKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIkNvdWxkIG5vdCBsb2FkIHVzaW5nIG1vZHVsYXIgc3lzdGVtc1wiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWN0b3J5LmxvYWRQbHVnaW5TY3JpcHQocmVzb3VyY2VPYmplY3QpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgdGhpcy5sb2FkUmVzb3VyY2UgPSBmdW5jdGlvbiAocmVzb3VyY2VPYmplY3QpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcmVzb3VyY2VPYmplY3QgIT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICAgICAgICAgIHJlamVjdChcIkVycm9yXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiByZXNvdXJjZU9iamVjdC51cmwgIT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgICAgIHJlamVjdChcInJlc291cmNlT2JqZWN0LnVybCBtdXN0IGJlIGEgc3RyaW5nXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiByZXNvdXJjZU9iamVjdC50ZXN0ICE9PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgICAgIHJlamVjdChcInJlc291cmNlT2JqZWN0LnRlc3QgbXVzdCBiZSBhIGZ1bmN0aW9uXCIpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShyZXNvdXJjZU9iamVjdCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uKHJlc291cmNlT2JqZWN0KXtcclxuICAgICAgICAgICAgdmFyIHJlc3BvbnNlID0gcmVzb3VyY2VPYmplY3QudGVzdCgpO1xyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2UgIT09IGZhbHNlICYmIHJlc3BvbnNlICE9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyAoXCJyZXNvdXJjZU9iamVjdC50ZXN0IG11c3QgcmV0dXJuIHRydWUgb3IgZmFsc2VcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCFyZXNvdXJjZU9iamVjdC50eXBlKSB7XHJcbiAgICAgICAgICAgICAgICByZXNvdXJjZU9iamVjdC50eXBlID0gXCJqYXZhc2NyaXB0XCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVzb3VyY2VPYmplY3QudHlwZSA9IHJlc291cmNlT2JqZWN0LnR5cGUudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAgICAgc3dpdGNoIChyZXNvdXJjZU9iamVjdC50eXBlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiamF2YXNjcmlwdFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghcmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxvYWRSZXNvdXJjZShyZXNvdXJjZU9iamVjdCkudGhlbihmdW5jdGlvbiAocmVzb3VyY2VPYmplY3QpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgcmVzb3VyY2VPYmplY3QucmV0dXJuT2JqZWN0ID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJldHVybk9iamVjdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAod2luZG93Lmhhc093blByb3BlcnR5KHJlc291cmNlT2JqZWN0LnJldHVybk9iamVjdCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHdpbmRvd1tyZXNvdXJjZU9iamVjdC5yZXR1cm5PYmplY3RdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiByZXNvdXJjZU9iamVjdC5yZXR1cm5PYmplY3QgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAod2luZG93Lmhhc093blByb3BlcnR5KHJlc291cmNlT2JqZWN0LnJldHVybk9iamVjdCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh3aW5kb3dbcmVzb3VyY2VPYmplY3QucmV0dXJuT2JqZWN0XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgKFwiSW52YWxpZCB0eXBlIFwiICsgU3RyaW5nKHJlc291cmNlT2JqZWN0LnR5cGUpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLmxvYWRQbHVnaW5TY3JpcHQgPSBmdW5jdGlvbiAocmVzb3VyY2VPYmplY3QpIHtcclxuICAgICAgICBpZiAocmVzb3VyY2VPYmplY3QpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiByZXNvdXJjZU9iamVjdC5yZXR1cm5PYmplY3QgIT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IChcInJlc291cmNlT2JqZWN0LnJldHVybk9iamVjdCBtdXN0IGJlIHRoZSBuYW1lIG9mIHRoZSBwcm90b3R5cGUgZnVuY3Rpb25cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubG9hZFJlc291cmNlKHJlc291cmNlT2JqZWN0KS50aGVuKGZ1bmN0aW9uIChwbHVnaW4pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmFkZFByb3RvdHlwZShwbHVnaW4pO1xyXG4gICAgICAgICAgICB9LmJpbmQodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gbG9hZFJlc291cmNlKHJlc291cmNlT2JqZWN0KSB7XHJcbiAgICAgICAgaWYgKHJlc291cmNlT2JqZWN0LnVybC5zdGFydHNXaXRoKFwiaHR0cFwiKSA9PT0gZmFsc2UgJiYgcm9vdFVSTCAhPT0gdW5kZWZpbmVkICYmIHJvb3RVUkwuc3RhcnRzV2l0aChcImh0dHBcIikpIHtcclxuICAgICAgICAgICAgcmVzb3VyY2VPYmplY3QudXJsID0gcm9vdFVSTCArIHJlc291cmNlT2JqZWN0LnVybDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICAgICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgICAgICB4aHIub3BlbihcIkdFVFwiLCByZXNvdXJjZU9iamVjdC51cmwpO1xyXG4gICAgICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09IDQpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBzY3JpcHQudGV4dENvbnRlbnQgPSB4aHIucmVzcG9uc2VUZXh0O1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXS5hcHBlbmRDaGlsZChzY3JpcHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzb3VyY2VPYmplY3QpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgeGhyLnNlbmQoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjb3B5RmFjdG9yeShuZXdjb250ZXh0KSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgICAgICBpZiAobmV3Y29udGV4dC5zYW1wbGVSYXRlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIC8vTWF5YmUgbm90IGEgcmVhbCBBdWRpb0NvbnRleHRcclxuICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoXCJJbnZhbGlkIGF1ZGlvIGNvbnRleHQgcHJvdmlkZWRcIikpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShuZXdjb250ZXh0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24obmV3Y29udGV4dCkge1xyXG4gICAgICAgICAgICB2YXIgQkZhY3RvcnkgPSBuZXcgUGx1Z2luRmFjdG9yeShuZXdjb250ZXh0KTtcclxuICAgICAgICAgICAgdmFyIHByb21pc2VzID0gW107XHJcbiAgICAgICAgICAgIHBsdWdpbl9wcm90b3R5cGVzLmZvckVhY2goZnVuY3Rpb24gKHByb3RvKSB7XHJcbiAgICAgICAgICAgICAgICBwcm9taXNlcy5wdXNoKEJGYWN0b3J5LmFkZFByb3RvdHlwZShwcm90by5wcm90bykpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIEJGYWN0b3J5O1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uKG5ld0ZhY3RvcnkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ld0ZhY3Rvcnk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIFBsdWdpbkluc3RhbmNlID0gZnVuY3Rpb24gKGlkLCBwbHVnaW5fbm9kZSkge1xyXG4gICAgICAgIHRoaXMubmV4dF9ub2RlID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIHZhciBfYnlwYXNzZWQgPSBmYWxzZTtcclxuICAgICAgICB2YXIgZXYgPSBuZXcgRXZlbnRUYXJnZXQoKTtcclxuICAgICAgICB2YXIgX2luID0gYXVkaW9fY29udGV4dC5jcmVhdGVHYWluKCksXHJcbiAgICAgICAgICAgIF9vdXQgPSBhdWRpb19jb250ZXh0LmNyZWF0ZUdhaW4oKTtcclxuXHJcbiAgICAgICAgX2luLmNvbm5lY3QocGx1Z2luX25vZGUuZ2V0SW5wdXRzKClbMF0pO1xyXG4gICAgICAgIHBsdWdpbl9ub2RlLmdldE91dHB1dHMoKVswXS5jb25uZWN0KF9vdXQpO1xyXG4gICAgICAgIHBsdWdpbl9ub2RlLmFkZEV2ZW50TGlzdGVuZXIodGhpcyk7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGJ5cGFzc0VuYWJsZSgpIHtcclxuICAgICAgICAgICAgX2luLmRpc2Nvbm5lY3QoKTtcclxuICAgICAgICAgICAgX2luLmNvbm5lY3QoX291dCk7XHJcbiAgICAgICAgICAgIF9ieXBhc3NlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIGlmIChwbHVnaW5fbm9kZS5wcm9jZXNzaW5nRGVsYXlBc1NhbXBsZXMgIT0gMCkge1xyXG4gICAgICAgICAgICAgICAgZXYuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJhbHRlcmRlbGF5XCIpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gYnlwYXNzRGlzYWJsZSgpIHtcclxuICAgICAgICAgICAgX2luLmRpc2Nvbm5lY3QoKTtcclxuICAgICAgICAgICAgX2luLmNvbm5lY3QocGx1Z2luX25vZGUuZ2V0SW5wdXRzKClbMF0pO1xyXG4gICAgICAgICAgICBfYnlwYXNzZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgaWYgKHBsdWdpbl9ub2RlLnByb2Nlc3NpbmdEZWxheUFzU2FtcGxlcyAhPSAwKSB7XHJcbiAgICAgICAgICAgICAgICBldi5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImFsdGVyZGVsYXlcIikpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmJ5cGFzcyA9IGZ1bmN0aW9uIChzdGF0ZSkge1xyXG4gICAgICAgICAgICBzdGF0ZSA9IChzdGF0ZSA9PT0gdHJ1ZSk7XHJcbiAgICAgICAgICAgIGlmIChzdGF0ZSA9PT0gX2J5cGFzc2VkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gX2J5cGFzc2VkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChzdGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgYnlwYXNzRW5hYmxlKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBieXBhc3NEaXNhYmxlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIF9ieXBhc3NlZDtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLmlzQnlwYXNzZWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfYnlwYXNzZWQ7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5yZWNvbm5lY3QgPSBmdW5jdGlvbiAobmV3X25leHQpIHtcclxuICAgICAgICAgICAgdGhpcy5jb25uZWN0KG5ld19uZXh0KTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLmNvbm5lY3QgPSBmdW5jdGlvbiAobmV3X25leHQpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMubmV4dF9ub2RlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlzY29ubmVjdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChuZXdfbmV4dCAhPT0gdW5kZWZpbmVkICYmIG5ld19uZXh0LmlucHV0ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubmV4dF9ub2RlID0gbmV3X25leHQ7XHJcbiAgICAgICAgICAgICAgICBfb3V0LmNvbm5lY3QodGhpcy5uZXh0X25vZGUuaW5wdXQpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuZGlzY29ubmVjdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMubmV4dF9ub2RlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIF9vdXQuZGlzY29ubmVjdCh0aGlzLm5leHRfbm9kZS5pbnB1dCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5leHRfbm9kZSA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcGx1Z2luX25vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcclxuICAgICAgICAgICAgXCJoYW5kbGVFdmVudFwiOiB7XHJcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBldi5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChlLnR5cGUpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJhZGRFdmVudExpc3RlbmVyXCI6IHtcclxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24oYSxiLGMpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZXYuYWRkRXZlbnRMaXN0ZW5lcihhLGIsYyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwicmVtb3ZlRXZlbnRMaXN0ZW5lclwiOiB7XHJcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKGEsYixjKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGV2LnJlbW92ZUV2ZW50TGlzdGVuZXIoYSxiLGMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAnaWQnOiB7XHJcbiAgICAgICAgICAgICAgICAndmFsdWUnOiBpZFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAnbm9kZSc6IHtcclxuICAgICAgICAgICAgICAgICd2YWx1ZSc6IHBsdWdpbl9ub2RlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICdpbnB1dCc6IHtcclxuICAgICAgICAgICAgICAgICdnZXQnOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9pbjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgJ291dHB1dCc6IHtcclxuICAgICAgICAgICAgICAgICdnZXQnOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9vdXQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICdieXBhc3NlZCc6IHtcclxuICAgICAgICAgICAgICAgICdnZXQnOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9ieXBhc3NlZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIFBsdWdpbkluc3RhbmNlLnByb3RvdHlwZS5mYWN0b3J5ID0gdGhpcztcclxuXHJcbiAgICB2YXIgTWlkaVN5bnRoZXNpc0luc3RhbmNlID0gZnVuY3Rpb24oaWQsIHN5bnRoTm9kZSkge1xyXG4gICAgICAgIHZhciBfb3V0ID0gYXVkaW9fY29udGV4dC5jcmVhdGVHYWluKCk7XHJcbiAgICAgICAgc3ludGhOb2RlLmdldE91dHB1dHMoKVswXS5jb25uZWN0KF9vdXQpO1xyXG5cclxuICAgICAgICB0aGlzLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHN5bnRoTm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xyXG4gICAgICAgICAgICAnaWQnOiB7XHJcbiAgICAgICAgICAgICAgICAndmFsdWUnOiBpZFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAnbm9kZSc6IHtcclxuICAgICAgICAgICAgICAgICd2YWx1ZSc6IHN5bnRoTm9kZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAnb3V0cHV0Jzoge1xyXG4gICAgICAgICAgICAgICAgJ2dldCc6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX291dDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgdmFyIFBsdWdpblByb3RvdHlwZSA9IGZ1bmN0aW9uIChwcm90bywgZmFjdG9yeSkge1xyXG5cdCAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xyXG4gICAgICAgICAgICAnbmFtZSc6IHtcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBwcm90by5wcm90b3R5cGUubmFtZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAncHJvdG8nOiB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogcHJvdG9cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgJ3ZlcnNpb24nOiB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogcHJvdG8ucHJvdG90eXBlLnZlcnNpb25cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgJ3VuaXF1ZUlEJzoge1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6IHByb3RvLnByb3RvdHlwZS51bmlxdWVJRFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAnaGFzTWlkaUlucHV0Jzoge1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6IHByb3RvLnByb3RvdHlwZS5oYXNNaWRpSW5wdXQgfHwgZmFsc2VcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgJ2hhc01pZGlPdXRwdXQnOiB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogcHJvdG8ucHJvdG90eXBlLmhhc01pZGlPdXRwdXQgfHwgZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmNyZWF0ZVBsdWdpbkluc3RhbmNlID0gYXN5bmMgZnVuY3Rpb24ob3duZXIsIGFzeW5jKSB7XHJcbiAgICAgICAgICAgIHZhciBwID0gY3JlYXRlUGx1Z2luSW5zdGFuY2Uob3duZXIpO1xyXG4gICAgICAgICAgICBpZiAoYXN5bmMgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBwO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgcDtcclxuICAgICAgICAgICAgICAgIHJldHVybiBwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gY3JlYXRlUGx1Z2luSW5zdGFuY2Uob3duZXIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHdhaXRVbnRpbFJlYWR5KCkudGhlbihmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWNoZWNrSXNSZWFkeSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoXCJQbHVnaW4gbm90IHJlYWR5XCIpKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKG5ldyBwcm90byhmYWN0b3J5LCBvd25lcikpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24ocGx1Z2luKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KXtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocGx1Z2luLmluaXRpYWxpc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBsdWdpbi5pbml0aWFsaXNlKCkudGhlbihmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocGx1Z2luKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShwbHVnaW4pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uKHBsdWdpbikge1xyXG4gICAgICAgICAgICAgICAgdmFyIG5vZGU7XHJcbiAgICAgICAgICAgICAgICBpZiAocGx1Z2luLmhhc01pZGlJbnB1dCAhPT0gdHJ1ZSAmJiBwbHVnaW4uaGFzTWlkaU91dHB1dCAhPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUgPSBuZXcgUGx1Z2luSW5zdGFuY2UoY3VycmVudFBsdWdpbklkKyssIHBsdWdpbik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHBsdWdpbi5oYXNNaWRpSW5wdXQgPT09IHRydWUgJiYgcGx1Z2luLmhhc01pZGlPdXRwdXQgIT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBub2RlID0gbmV3IE1pZGlTeW50aGVzaXNJbnN0YW5jZShjdXJyZW50UGx1Z2luSWQrKywgcGx1Z2luKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3coXCJObyBJbnN0YW5jZSBIb2xkZXIgQXZhaWxhYmxlIVwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHBsdWdpbiwge1xyXG4gICAgICAgICAgICAgICAgICAgICdwbHVnaW5JbnN0YW5jZSc6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ3ZhbHVlJzogbm9kZVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgJ3Byb3RvdHlwZU9iamVjdCc6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ3ZhbHVlJzogc2VsZlxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgJ25hbWUnOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBwcm90by5wcm90b3R5cGUubmFtZVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgJ3ZlcnNpb24nOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBwcm90by5wcm90b3R5cGUudmVyc2lvblxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgJ3VuaXF1ZUlEJzoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogcHJvdG8ucHJvdG90eXBlLnVuaXF1ZUlEXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAnU2VzaW9uRGF0YSc6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGZhY3RvcnkuU2Vzc2lvbkRhdGFcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICdVc2VyRGF0YSc6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGZhY3RvcnkuVXNlckRhdGFcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKG5vZGUsIHtcclxuICAgICAgICAgICAgICAgICAgICBcInByb3RvdHlwZU9iamVjdFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICd2YWx1ZSc6IHNlbGZcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZXh0ZXJuYWxJbnRlcmZhY2VcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAndmFsdWUnOiBwbHVnaW4uZXh0ZXJuYWxJbnRlcmZhY2VcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGZhY3RvcnkucmVnaXN0ZXJQbHVnaW5JbnN0YW5jZShub2RlKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBub2RlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGxvYWRSZXNvdXJjZUNoYWluKHJlc291cmNlT2JqZWN0LCBwKSB7XHJcbiAgICAgICAgICAgIGlmICghcCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGsgPSBsb2FkUmVzb3VyY2UocmVzb3VyY2VPYmplY3QpO1xyXG4gICAgICAgICAgICAgICAgay50aGVuKGZ1bmN0aW9uIChyZXNvdXJjZU9iamVjdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNvdXJjZU9iamVjdC5yZXNvdXJjZXMgIT09IHVuZGVmaW5lZCAmJiByZXNvdXJjZU9iamVjdC5yZXNvdXJjZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlc291cmNlT2JqZWN0LnJlc291cmNlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgayA9IGxvYWRSZXNvdXJjZUNoYWluKHJlc291cmNlT2JqZWN0LnJlc291cmNlc1tpXSwgayk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBrO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHAudGhlbihsb2FkUmVzb3VyY2UocmVzb3VyY2VPYmplY3QpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gbG9hZFN0eWxlc2hlZXQodXJsKSB7XHJcbiAgICAgICAgICAgIHZhciBjc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcclxuICAgICAgICAgICAgY3NzLnNldEF0dHJpYnV0ZShcInJlbFwiLCBcInN0eWxlc2hlZXRcIik7XHJcbiAgICAgICAgICAgIGNzcy5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dC9jc3NcIik7XHJcbiAgICAgICAgICAgIGNzcy5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIHVybCk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXS5hcHBlbmRDaGlsZChjc3MpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gcmVjdXJzaXZlR2V0VGVzdChyZXNvdXJjZU9iamVjdCkge1xyXG4gICAgICAgICAgICBpZiAocmVzb3VyY2VPYmplY3QuaGFzT3duUHJvcGVydHkoXCJsZW5ndGhcIikgJiYgcmVzb3VyY2VPYmplY3QubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlY3Vyc2l2ZUdldFRlc3QocmVzb3VyY2VPYmplY3RbcmVzb3VyY2VPYmplY3QubGVuZ3RoIC0gMV0pO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlc291cmNlT2JqZWN0Lmhhc093blByb3BlcnR5KFwicmVzb3VyY2VzXCIpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVjdXJzaXZlR2V0VGVzdChyZXNvdXJjZU9iamVjdC5yZXNvdXJjZXMpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc291cmNlT2JqZWN0LnRlc3Q7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciByZXNvdXJjZVByb21pc2VzID0gW107XHJcbiAgICAgICAgaWYgKHByb3RvLnByb3RvdHlwZS5yZXNvdXJjZXMpIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm90by5wcm90b3R5cGUucmVzb3VyY2VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcmVzb3VyY2UgPSBwcm90by5wcm90b3R5cGUucmVzb3VyY2VzW2ldO1xyXG4gICAgICAgICAgICAgICAgcmVzb3VyY2UudHlwZSA9IHJlc291cmNlLnR5cGUudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAocmVzb3VyY2UudHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJjc3NcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZFN0eWxlc2hlZXQocmVzb3VyY2UudXJsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcImphdmFzY3JpcHRcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9iamVjdCA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdwcm9taXNlJzogbG9hZFJlc291cmNlQ2hhaW4ocmVzb3VyY2UpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3N0YXRlJzogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjb21wbGV0ZSc6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlID0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGVzdCc6IHJlY3Vyc2l2ZUdldFRlc3QocmVzb3VyY2UpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdC5wcm9taXNlLnRoZW4ob2JqZWN0LmNvbXBsZXRlLmJpbmQob2JqZWN0KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc291cmNlUHJvbWlzZXMucHVzaChvYmplY3QpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyAoXCJDb3VsZCBub3QgbG9hZCBcIiArIHJlc291cmNlLnVybCArIFwiLCBpbnZhbGlkIHJlc291cmNlLnR5cGVcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZ2V0UmVzb3VyY2VQcm9taXNlcyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc291cmNlUHJvbWlzZXM7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBmdW5jdGlvbiBjaGVja0lzUmVhZHkoKSB7XHJcbiAgICAgICAgICAgIHZhciBzdGF0ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVzb3VyY2VQcm9taXNlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc291cmNlUHJvbWlzZXNbaV0uc3RhdGUgIT09IDEgfHwgIXJlc291cmNlUHJvbWlzZXNbaV0udGVzdCgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBmdW5jdGlvbiB3YWl0VW50aWxSZWFkeSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHJlc291cmNlUHJvbWlzZXMpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5hZGRQcm90b3R5cGUgPSBmdW5jdGlvbiAocGx1Z2luX3Byb3RvKSB7XHJcbiAgICAgICAgdmFyIGZhY3RvcnkgPSB0aGlzO1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBwbHVnaW5fcHJvdG8gIT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KFwiVGhlIFByb3RvdHlwZSBtdXN0IGJlIGEgZnVuY3Rpb24hXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiBwbHVnaW5fcHJvdG8ucHJvdG90eXBlLm5hbWUgIT09IFwic3RyaW5nXCIgfHwgcGx1Z2luX3Byb3RvLnByb3RvdHlwZS5uYW1lLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KFwiTWFsZm9ybWVkIHBsdWdpbi4gTmFtZSBub3QgZGVmaW5lZFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgcGx1Z2luX3Byb3RvLnByb3RvdHlwZS52ZXJzaW9uICE9PSBcInN0cmluZ1wiIHx8IHBsdWdpbl9wcm90by5wcm90b3R5cGUudmVyc2lvbi5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHJlamVjdChcIk1hbGZvcm1lZCBwbHVnaW4uIFZlcnNpb24gbm90IGRlZmluZWRcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodHlwZW9mIHBsdWdpbl9wcm90by5wcm90b3R5cGUudW5pcXVlSUQgIT09IFwic3RyaW5nXCIgfHwgcGx1Z2luX3Byb3RvLnByb3RvdHlwZS51bmlxdWVJRC5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHJlamVjdChcIk1hbGZvcm1lZCBwbHVnaW4uIHVuaXF1ZUlEIG5vdCBkZWZpbmVkXCIpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShwbHVnaW5fcHJvdG8pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkudGhlbihmdW5jdGlvbihwbHVnaW5fcHJvdG8pIHtcclxuICAgICAgICAgICAgdmFyIHRlc3RPYmogPSB7XHJcbiAgICAgICAgICAgICAgICAncHJvdG8nOiBwbHVnaW5fcHJvdG8sXHJcbiAgICAgICAgICAgICAgICAnbmFtZSc6IHBsdWdpbl9wcm90by5wcm90b3R5cGUubmFtZSxcclxuICAgICAgICAgICAgICAgICd2ZXJzaW9uJzogcGx1Z2luX3Byb3RvLnByb3RvdHlwZS52ZXJzaW9uLFxyXG4gICAgICAgICAgICAgICAgJ3VuaXF1ZUlEJzogcGx1Z2luX3Byb3RvLnByb3RvdHlwZS51bmlxdWVJRFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB2YXIgb2JqID0gcGx1Z2luX3Byb3RvdHlwZXMuZmluZChmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHBhcmFtO1xyXG4gICAgICAgICAgICAgICAgdmFyIG1hdGNoID0gMDtcclxuICAgICAgICAgICAgICAgIGZvciAocGFyYW0gaW4gdGhpcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlW3BhcmFtXSA9PT0gdGhpc1twYXJhbV0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2grKztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbWF0Y2ggPT09IDQ7XHJcbiAgICAgICAgICAgIH0sIHRlc3RPYmopO1xyXG4gICAgICAgICAgICBpZiAob2JqKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyAoXCJUaGUgcGx1Z2luIG11c3QgYmUgdW5pcXVlIVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvYmogPSBuZXcgUGx1Z2luUHJvdG90eXBlKHBsdWdpbl9wcm90bywgZmFjdG9yeSk7XHJcbiAgICAgICAgICAgIHBsdWdpbl9wcm90b3R5cGVzLnB1c2gob2JqKTtcclxuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMob2JqLCB7XHJcbiAgICAgICAgICAgICAgICAnZmFjdG9yeSc6IHtcclxuICAgICAgICAgICAgICAgICAgICAndmFsdWUnOiBmYWN0b3J5XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gb2JqO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLmdldFByb3RvdHlwZXMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHBsdWdpbl9wcm90b3R5cGVzO1xyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLmdldEF1ZGlvUGx1Z2luUHJvdG90eXBlcyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiBwbHVnaW5fcHJvdG90eXBlcy5maWx0ZXIoZnVuY3Rpb24ocHJvdG8pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHByb3RvLmhhc01pZGlJbnB1dCA9PSBmYWxzZSAmJiBwcm90by5oYXNNaWRpT3V0cHV0ID09IGZhbHNlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLmdldE1pZGlTeW50aFByb3RvdHlwZXMgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gcGx1Z2luX3Byb3RvdHlwZXMuZmlsdGVyKGZ1bmN0aW9uKHByb3RvKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwcm90by5oYXNNaWRpSW5wdXQgPT0gdHJ1ZSAmJiBwcm90by5oYXNNaWRpT3V0cHV0ID09IGZhbHNlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLmdldE1pZGlQbHVnaW5Qcm90b3R5cGVzID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHBsdWdpbl9wcm90b3R5cGVzLmZpbHRlcihmdW5jdGlvbihwcm90bykge1xyXG4gICAgICAgICAgICByZXR1cm4gcHJvdG8uaGFzTWlkaUlucHV0ID09IHRydWUgJiYgcHJvdG8uaGFzTWlkaU91dHB1dCA9PSB0cnVlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLmdldEFsbFBsdWdpbnMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHBsdWdpbnNMaXN0O1xyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLmdldEFsbFBsdWdpbnNPYmplY3QgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIG9iaiA9IHtcclxuICAgICAgICAgICAgICAgICdmYWN0b3J5JzogdGhpcyxcclxuICAgICAgICAgICAgICAgICdzdWJGYWN0b3JpZXMnOiBbXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBpO1xyXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBzdWJGYWN0b3JpZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgb2JqLnN1YkZhY3Rvcmllcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICdzdWJGYWN0b3J5Jzogc3ViRmFjdG9yaWVzW2ldLFxyXG4gICAgICAgICAgICAgICAgJ3BsdWdpbnMnOiBzdWJGYWN0b3JpZXNbaV0uZ2V0UGx1Z2lucygpXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gb2JqO1xyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLmNyZWF0ZVN1YkZhY3RvcnkgPSBmdW5jdGlvbihjaGFpblN0YXJ0LCBjaGFpblN0b3ApIHtcclxuICAgICAgICBjb25zb2xlLndhcm4oXCJERVBSRUNBVEVEIC0gVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGRlcHJlY2F0ZWQgaW4gZmF2b3VyIG9mIFxcXCJjcmVhdGVBdWRpb1BsdWdpbkNoYWluTWFuYWdlclxcXCJcIik7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlQXVkaW9QbHVnaW5DaGFpbk1hbmFnZXIoY2hhaW5TdGFydCwgY2hhaW5TdG9wKTtcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5kZXN0cm95U3ViRmFjdG9yeSA9IGZ1bmN0aW9uKGNoYWluU3RhcnQsIGNoYWluU3RvcCkge1xyXG4gICAgICAgIGNvbnNvbGUud2FybihcIkRFUFJFQ0FURUQgLSBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgZGVwcmVjYXRlZCBpbiBmYXZvdXIgb2YgXFxcImRlc3Ryb3lBdWRpb1BsdWdpbkNoYWluTWFuYWdlclxcXCJcIik7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVzdHJveUF1ZGlvUGx1Z2luQ2hhaW5NYW5hZ2VyKGNoYWluU3RhcnQsIGNoYWluU3RvcCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuY3JlYXRlQXVkaW9QbHVnaW5DaGFpbk1hbmFnZXIgPSBmdW5jdGlvbiAoY2hhaW5TdGFydCwgY2hhaW5TdG9wKSB7XHJcbiAgICAgICAgdmFyIG5vZGUgPSBuZXcgQXVkaW9QbHVnaW5DaGFpbk1hbmFnZXIodGhpcywgY2hhaW5TdGFydCwgY2hhaW5TdG9wKTtcclxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhub2RlLCB7XHJcbiAgICAgICAgICAgICdTZXNzaW9uRGF0YSc6IHtcclxuICAgICAgICAgICAgICAgIHZhbHVlOiB0aGlzLlNlc3Npb25EYXRhXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICdVc2VyRGF0YSc6IHtcclxuICAgICAgICAgICAgICAgIHZhbHVlOiB0aGlzLlVzZXJEYXRhXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBzdWJGYWN0b3JpZXMucHVzaChub2RlKTtcclxuICAgICAgICByZXR1cm4gbm9kZTtcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5kdXBsaWNhdGVBdWRpb1BsdWdpbkNoYWluTWFuYWdlciA9IGZ1bmN0aW9uKHNvdXJjZUNoYWluTWFuYWdlciwgY2hhaW5TdGFydCwgY2hhaW5TdG9wKSB7XHJcbiAgICAgICAgdmFyIG5vZGUgPSB0aGlzLmNyZWF0ZUF1ZGlvUGx1Z2luQ2hhaW5NYW5hZ2VyKGNoYWluU3RhcnQsIGNoYWluU3RvcCk7XHJcbiAgICAgICAgdmFyIHByb21pc2VDaGFpbiA9IFByb21pc2UucmVzb2x2ZSgpO1xyXG4gICAgICAgIHNvdXJjZUNoYWluTWFuYWdlci5nZXRQbHVnaW5zKCkuZm9yRWFjaChmdW5jdGlvbihwbHVnaW5fb2JqZWN0KSB7XHJcbiAgICAgICAgICAgIHByb21pc2VDaGFpbiA9IHByb21pc2VDaGFpbi50aGVuKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5vZGUuY3JlYXRlUGx1Z2luKHBsdWdpbl9vYmplY3QucHJvdG90eXBlT2JqZWN0KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24obmV3UGx1Z2luKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3UGx1Z2luLm5vZGUucGFyYW1ldGVycy5zZXRQYXJhbWV0ZXJzQnlPYmplY3QocGx1Z2luX29iamVjdC5ub2RlLnBhcmFtZXRlcnMuZ2V0UGFyYW1ldGVyT2JqZWN0KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcHJvbWlzZUNoYWluLnRoZW4oZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBub2RlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLmRlc3Ryb3lBdWRpb1BsdWdpbkNoYWluTWFuYWdlciA9IGZ1bmN0aW9uIChTdWJGYWN0b3J5KSB7XHJcbiAgICAgICAgdmFyIGluZGV4ID0gc3ViRmFjdG9yaWVzLmZpbmRJbmRleChmdW5jdGlvbiAoZWxlbWVudCkge1xyXG4gICAgICAgICAgICBpZiAoZWxlbWVudCA9PT0gdGhpcykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0sIFN1YkZhY3RvcnkpO1xyXG4gICAgICAgIGlmIChpbmRleCA+PSAwKSB7XHJcbiAgICAgICAgICAgIHN1YkZhY3Rvcmllcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICBTdWJGYWN0b3J5LmRlc3Ryb3koKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuY3JlYXRlTWlkaVN5bnRoZXNpc2VySG9zdCA9IGZ1bmN0aW9uKGZhY3RvcnkpIHtcclxuICAgICAgICBpZiAoZmFjdG9yeSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGZhY3RvcnkgPSB0aGlzO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgaG9zdCA9IG5ldyBNaWRpU3ludGhlc2lzZXJIb3N0KGZhY3RvcnkpO1xyXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGhvc3QsIHtcclxuICAgICAgICAgICAgJ1Nlc3Npb25EYXRhJzoge1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6IHRoaXMuU2Vzc2lvbkRhdGFcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgJ1VzZXJEYXRhJzoge1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6IHRoaXMuVXNlckRhdGFcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHN5bnRoZXNpc2VySG9zdHMucHVzaChob3N0KTtcclxuICAgICAgICByZXR1cm4gaG9zdDtcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5kZXN0cm95TWlkaVN5bnRoZXNpc2VySG9zdCA9IGZ1bmN0aW9uIChob3N0KSB7XHJcbiAgICAgICAgdmFyIGluZGV4ID0gc3ludGhlc2lzZXJIb3N0cy5maW5kSW5kZXgoZnVuY3Rpb24gKGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgaWYgKGVsZW1lbnQgPT09IHRoaXMpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9LCBob3N0KTtcclxuICAgICAgICBpZiAoaW5kZXggPj0gMCkge1xyXG4gICAgICAgICAgICBzeW50aGVzaXNlckhvc3RzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgIGhvc3QuZGVzdHJveSgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5yZWdpc3RlclBsdWdpbkluc3RhbmNlID0gZnVuY3Rpb24gKGluc3RhbmNlKSB7XHJcbiAgICAgICAgaWYgKHBsdWdpbnNMaXN0LmZpbmQoZnVuY3Rpb24gKHApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBwID09PSB0aGlzO1xyXG4gICAgICAgICAgICB9LCBpbnN0YW5jZSkpIHtcclxuICAgICAgICAgICAgdGhyb3cgKFwiUGx1Z2luIEluc3RhbmNlIG5vdCB1bmlxdWVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHBsdWdpbnNMaXN0LnB1c2goaW5zdGFuY2UpO1xyXG4gICAgICAgIGlmIChhdWRpb1N0YXJ0ZWQpIHtcclxuICAgICAgICAgICAgdmFyIGNvbnRleHRfdGltZSA9IGF1ZGlvX2NvbnRleHQuY3VycmVudFRpbWU7XHJcbiAgICAgICAgICAgIHZhciBwcm9ncmFtX3RpbWUgPSB0aGlzLmdldEN1cnJlbnRQcm9ncmFtVGltZSgpO1xyXG4gICAgICAgICAgICBwbHVnaW5BdWRpb1N0YXJ0KGluc3RhbmNlLm5vZGUsIHByb2dyYW1fdGltZSwgY29udGV4dF90aW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuZGVsZXRlUGx1Z2luID0gZnVuY3Rpb24gKGlkKSB7XHJcbiAgICAgICAgdmFyIGluZGV4ID0gcGx1Z2luc0xpc3QuZmluZEluZGV4KGZ1bmN0aW9uIChwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwLmlkID09PSBpZDtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAoaW5kZXggPj0gMCkge1xyXG4gICAgICAgICAgICB2YXIgcCA9IHBsdWdpbnNMaXN0LnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgIHBbMF0ubm9kZS5leHRlcm5hbEludGVyZmFjZS5jbG9zZVdpbmRvd3MoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuZ2V0Q3VycmVudFByb2dyYW1UaW1lID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKGF1ZGlvU3RhcnRlZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gYXVkaW9fY29udGV4dC5jdXJyZW50VGltZSAtIGF1ZGlvU3RhcnRDb250ZXh0VGltZSArIGF1ZGlvU3RhcnRQcm9ncmFtVGltZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gYXVkaW9TdGFydFByb2dyYW1UaW1lXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLnNldEN1cnJlbnRQcm9ncmFtVGltZSA9IGZ1bmN0aW9uKHRpbWUpIHtcclxuICAgICAgICBpZiAoYXVkaW9TdGFydGVkKSB7XHJcbiAgICAgICAgICAgIHRocm93KFwiTXVzdCBzdG9wIHBsYXliYWNrIHRvIHNldCB0aGUgY3VycmVudCBwcm9ncmFtIHRpbWVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2YgdGltZSA9PSBcIm51bWJlclwiICYmIHRpbWUgPj0gMCkge1xyXG4gICAgICAgICAgICBhdWRpb1N0YXJ0UHJvZ3JhbVRpbWUgPSB0aW1lO1xyXG4gICAgICAgICAgICB0aGlzLlBsdWdpbkdVSS5wb2xsQWxsUGx1Z2lucygpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gcGx1Z2luQXVkaW9TdGFydChub2RlLCBwcm9ncmFtX3RpbWUsIGNvbnRleHRfdGltZSkge1xyXG4gICAgICAgIG5vZGUuc3RhcnQuY2FsbChub2RlLCBwcm9ncmFtX3RpbWUsIGNvbnRleHRfdGltZSk7XHJcbiAgICAgICAgbm9kZS5wYXJhbWV0ZXJzLmdldFBhcmFtZXRlck5hbWVzKCkuZm9yRWFjaChmdW5jdGlvbihuKSB7XHJcbiAgICAgICAgICAgIHZhciBwID0gbm9kZS5wYXJhbWV0ZXJzLmdldFBhcmFtZXRlckJ5TmFtZShuKTtcclxuICAgICAgICAgICAgaWYgKHAuZW5hYmxlZCkge1xyXG4gICAgICAgICAgICAgICAgcC5zdGFydChwcm9ncmFtX3RpbWUsIGNvbnRleHRfdGltZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBwbHVnaW5BdWRpb1N0b3Aobm9kZSkge1xyXG4gICAgICAgIHZhciBjdCA9IGF1ZGlvX2NvbnRleHQuY3VycmVudFRpbWU7XHJcbiAgICAgICAgbm9kZS5zdG9wLmNhbGwobm9kZSwgY3QpO1xyXG4gICAgICAgIG5vZGUucGFyYW1ldGVycy5nZXRQYXJhbWV0ZXJOYW1lcygpLmZvckVhY2goZnVuY3Rpb24obikge1xyXG4gICAgICAgICAgICB2YXIgcCA9IG5vZGUucGFyYW1ldGVycy5nZXRQYXJhbWV0ZXJCeU5hbWUobik7XHJcbiAgICAgICAgICAgIGlmIChwLmVuYWJsZWQpIHtcclxuICAgICAgICAgICAgICAgIHAuc3RvcChjdCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB0cmlnZ2VyQXVkaW9TdGFydChwcm9ncmFtX3RpbWUsIGNvbnRleHRfdGltZSkge1xyXG4gICAgICAgIHBsdWdpbnNMaXN0LmZvckVhY2goZnVuY3Rpb24gKG4pIHtcclxuICAgICAgICAgICAgcGx1Z2luQXVkaW9TdGFydChuLm5vZGUsIHByb2dyYW1fdGltZSwgY29udGV4dF90aW1lKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdHJpZ2dlckF1ZGlvU3RvcCgpIHtcclxuICAgICAgICBwbHVnaW5zTGlzdC5mb3JFYWNoKGZ1bmN0aW9uIChuKSB7XHJcbiAgICAgICAgICAgIHBsdWdpbkF1ZGlvU3RvcChuLm5vZGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuYXVkaW9TdGFydCA9IGZ1bmN0aW9uIChwcm9ncmFtX3RpbWUsIGNvbnRleHRfdGltZSkge1xyXG4gICAgICAgIGlmIChjb250ZXh0X3RpbWUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBjb250ZXh0X3RpbWUgPSBhdWRpb19jb250ZXh0LmN1cnJlbnRUaW1lO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocHJvZ3JhbV90aW1lID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcHJvZ3JhbV90aW1lID0gMDtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKFwiQXNzdW1pbmcgc3RhcnQgdGltZSBhdCAwXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWF1ZGlvU3RhcnRlZCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldEN1cnJlbnRQcm9ncmFtVGltZShwcm9ncmFtX3RpbWUpO1xyXG4gICAgICAgICAgICBhdWRpb1N0YXJ0Q29udGV4dFRpbWUgPSBjb250ZXh0X3RpbWU7XHJcbiAgICAgICAgICAgIHRyaWdnZXJBdWRpb1N0YXJ0KHByb2dyYW1fdGltZSwgY29udGV4dF90aW1lKTtcclxuICAgICAgICAgICAgYXVkaW9TdGFydGVkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgdGhpcy5hdWRpb1N0b3AgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKGF1ZGlvU3RhcnRlZCkge1xyXG4gICAgICAgICAgICB0cmlnZ2VyQXVkaW9TdG9wKCk7XHJcbiAgICAgICAgICAgIGF1ZGlvU3RhcnRlZCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgdmFyIEZlYXR1cmVNYXAgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIE1hcHBpbmdzID0gW107XHJcblxyXG4gICAgICAgIHZhciBGZWF0dXJlTm9kZSA9IGZ1bmN0aW9uIChub2RlKSB7XHJcbiAgICAgICAgICAgIHRoaXMubmFtZSA9IG5vZGUubmFtZTtcclxuICAgICAgICAgICAgdGhpcy5wYXJhbWV0ZXJzID0gdGhpcy5wYXJhbWV0ZXJzO1xyXG4gICAgICAgICAgICB0aGlzLmZlYXR1cmVzID0gW107XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gZ2V0RmVhdHVyZU5vZGUobGlzdCwgY2hlY2spIHtcclxuICAgICAgICAgICAgcmV0dXJuIGxpc3QuZmluZChmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGUubmFtZSA9PT0gdGhpcy5uYW1lO1xyXG4gICAgICAgICAgICB9LCBjaGVjayk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBhZGRGZWF0dXJlTm9kZShmZWF0dXJlTm9kZSwgbGlzdCkge1xyXG4gICAgICAgICAgICB2YXIgbm9kZSA9IG5ldyBGZWF0dXJlTm9kZShmZWF0dXJlTm9kZSk7XHJcbiAgICAgICAgICAgIGxpc3QucHVzaChub2RlKTtcclxuICAgICAgICAgICAgcmV0dXJuIG5vZGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgU291cmNlTWFwID0gZnVuY3Rpb24gKFNlbmRlciwgcGx1Z2luSW5zdGFjZSkge1xyXG4gICAgICAgICAgICB2YXIgTWFwcGluZ3MgPSBbXTtcclxuICAgICAgICAgICAgdGhpcy5nZXRTb3VyY2VJbnN0YW5jZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBwbHVnaW5JbnN0YWNlO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB0aGlzLmdldFNlbmRlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBTZW5kZXI7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBmaW5kRmVhdHVyZU9iamVjdChmZWF0dXJlT2JqZWN0KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gTWFwcGluZ3MuZmluZChmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoZS5vdXRwdXRJbmRleCA9PT0gdGhpcy5vdXRwdXRJbmRleCAmJiBlLmZyYW1lU2l6ZSA9PT0gdGhpcy5mcmFtZVNpemUpO1xyXG4gICAgICAgICAgICAgICAgfSwgZmVhdHVyZU9iamVjdCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIHVwZGF0ZVNlbmRlcigpIHtcclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHJlY3Vyc2l2ZUZpbmQoZmVhdHVyZUxpc3QpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZiwgbGlzdCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoZiA9IDA7IGYgPCBmZWF0dXJlTGlzdC5sZW5ndGg7IGYrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZmVhdHVyZU5vZGUgPSBnZXRGZWF0dXJlTm9kZShsaXN0LCBmZWF0dXJlTGlzdFtmXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZmVhdHVyZU5vZGUgfHwgKGZlYXR1cmVMaXN0LnBhcmFtZXRlcnMgJiYgZmVhdHVyZUxpc3RbZl0ucGFyYW1ldGVycy5sZW5ndGggIT09IDApKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZWF0dXJlTm9kZSA9IGFkZEZlYXR1cmVOb2RlKGZlYXR1cmVMaXN0W2ZdLCBsaXN0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZmVhdHVyZUxpc3RbZl0uZmVhdHVyZXMgJiYgZmVhdHVyZUxpc3RbZl0uZmVhdHVyZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmVhdHVyZU5vZGUuZmVhdHVyZXMgPSByZWN1cnNpdmVGaW5kKGZlYXR1cmVMaXN0W2ZdLmZlYXR1cmVzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbGlzdDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhciBpLCBvdXRwdXRMaXN0ID0gW107XHJcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgTWFwcGluZ3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAob3V0cHV0TGlzdFtNYXBwaW5nc1tpXS5vdXRwdXRJbmRleF0gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXRMaXN0W01hcHBpbmdzW2ldLm91dHB1dEluZGV4XSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB2YXIgZnJhbWVMaXN0ID0gb3V0cHV0TGlzdFtNYXBwaW5nc1tpXS5vdXRwdXRJbmRleF0uZmluZChmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZS5mcmFtZVNpemUgPT09IHRoaXMuZnJhbWVTaXplO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIE1hcHBpbmdzW2ldKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWZyYW1lTGlzdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmcmFtZUxpc3QgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZnJhbWVTaXplJzogTWFwcGluZ3NbaV0uZnJhbWVTaXplLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2ZlYXR1cmVMaXN0JzogdW5kZWZpbmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dExpc3RbTWFwcGluZ3NbaV0ub3V0cHV0SW5kZXhdLnB1c2goZnJhbWVMaXN0KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZnJhbWVMaXN0LmZlYXR1cmVMaXN0ID0gcmVjdXJzaXZlRmluZChNYXBwaW5nc1tpXS5nZXRGZWF0dXJlTGlzdCgpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFNlbmRlci51cGRhdGVGZWF0dXJlcyhvdXRwdXRMaXN0KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5yZXF1ZXN0RmVhdHVyZXMgPSBmdW5jdGlvbiAocmVxdWVzdG9ySW5zdGFuY2UsIGZlYXR1cmVPYmplY3QpIHtcclxuICAgICAgICAgICAgICAgIHZhciBtYXAgPSBmaW5kRmVhdHVyZU9iamVjdChmZWF0dXJlT2JqZWN0KTtcclxuICAgICAgICAgICAgICAgIGlmICghbWFwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFwID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnb3V0cHV0SW5kZXgnOiBmZWF0dXJlT2JqZWN0Lm91dHB1dEluZGV4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnZnJhbWVTaXplJzogZmVhdHVyZU9iamVjdC5mcmFtZVNpemUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdyZXF1ZXN0b3JzJzogW10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdnZXRGZWF0dXJlTGlzdCc6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBGID0gW10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLnJlcXVlc3RvcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGID0gRi5jb25jYXQodGhpcy5yZXF1ZXN0b3JzW2ldLmdldEZlYXR1cmVMaXN0KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIEY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIE1hcHBpbmdzLnB1c2gobWFwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhciByZXF1ZXN0b3IgPSBtYXAucmVxdWVzdG9ycy5maW5kKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGUuZ2V0UmVxdWVzdG9ySW5zdGFuY2UoKSA9PT0gdGhpcztcclxuICAgICAgICAgICAgICAgIH0sIHJlcXVlc3Rvckluc3RhbmNlKTtcclxuICAgICAgICAgICAgICAgIGlmICghcmVxdWVzdG9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdG9yID0gbmV3IFJlcXVlc3Rvck1hcChyZXF1ZXN0b3JJbnN0YW5jZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFwLnJlcXVlc3RvcnMucHVzaChyZXF1ZXN0b3IpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmVxdWVzdG9yLmFkZEZlYXR1cmVzKGZlYXR1cmVPYmplY3QpO1xyXG4gICAgICAgICAgICAgICAgdXBkYXRlU2VuZGVyKCk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICB0aGlzLmZpbmRGcmFtZU1hcCA9IGZ1bmN0aW9uIChvdXRwdXRJbmRleCwgZnJhbWVTaXplKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gTWFwcGluZ3MuZmluZChmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoZS5vdXRwdXRJbmRleCA9PT0gb3V0cHV0SW5kZXggJiYgZS5mcmFtZVNpemUgPT09IGZyYW1lU2l6ZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY2FuY2VsRmVhdHVyZXMgPSBmdW5jdGlvbiAocmVxdWVzdG9ySW5zdGFuY2UsIGZlYXR1cmVPYmplY3QpIHtcclxuICAgICAgICAgICAgICAgIGlmIChmZWF0dXJlT2JqZWN0ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBNYXBwaW5ncy5mb3JFYWNoKGZ1bmN0aW9uIChtYXApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlcXVlc3RvckluZGV4ID0gbWFwLnJlcXVlc3RvcnMuZmluZEluZGV4KGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZS5nZXRSZXF1ZXN0b3JJbnN0YW5jZSgpID09PSByZXF1ZXN0b3JJbnN0YW5jZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXF1ZXN0b3JJbmRleCA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXAucmVxdWVzdG9ycy5zcGxpY2UocmVxdWVzdG9ySW5kZXgsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtYXAgPSBmaW5kRmVhdHVyZU9iamVjdChmZWF0dXJlT2JqZWN0KTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIW1hcCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhciByZXF1ZXN0b3IgPSBtYXAucmVxdWVzdG9ycy5maW5kKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlLmdldFJlcXVlc3Rvckluc3RhbmNlKCkgPT09IHRoaXM7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgcmVxdWVzdG9ySW5zdGFuY2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghcmVxdWVzdG9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdG9yLmRlbGV0ZUZlYXR1cmVzKGZlYXR1cmVPYmplY3QpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdXBkYXRlU2VuZGVyKCk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfTtcclxuICAgICAgICB2YXIgUmVxdWVzdG9yTWFwID0gZnVuY3Rpb24gKHBsdWdpbkluc3RhbmNlKSB7XHJcbiAgICAgICAgICAgIHZhciBGZWF0dXJlcyA9IFtdO1xyXG4gICAgICAgICAgICB2YXIgUmVjZWl2ZXIgPSBwbHVnaW5JbnN0YW5jZS5ub2RlLmZlYXR1cmVNYXAuUmVjZWl2ZXI7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0UmVxdWVzdG9ySW5zdGFuY2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcGx1Z2luSW5zdGFuY2U7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiByZWN1cnNpdmVseUFkZEZlYXR1cmVzKHJvb3RBcnJheSwgZmVhdHVyZU9iamVjdCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgZmVhdHVyZU9iamVjdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIENoZWNrIHdlIGhhdmUgbm90IGFscmVhZHkgbGlzdGVkIHRoZSBmZWF0dXJlXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZlYXR1cmVOb2RlID0gZ2V0RmVhdHVyZU5vZGUocm9vdEFycmF5LCBmZWF0dXJlT2JqZWN0W2ldKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWZlYXR1cmVOb2RlIHx8IChmZWF0dXJlT2JqZWN0W2ldLnBhcmFtZXRlcnMgJiYgZmVhdHVyZU9iamVjdFtpXS5wYXJhbWV0ZXJzLmxlbmd0aCAhPT0gMCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmVhdHVyZU5vZGUgPSBhZGRGZWF0dXJlTm9kZShmZWF0dXJlT2JqZWN0W2ldLCByb290QXJyYXkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZmVhdHVyZU9iamVjdFtpXS5mZWF0dXJlcyAhPT0gdW5kZWZpbmVkICYmIGZlYXR1cmVPYmplY3RbaV0uZmVhdHVyZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWN1cnNpdmVseUFkZEZlYXR1cmVzKGZlYXR1cmVOb2RlLmZlYXR1cmVzLCBmZWF0dXJlT2JqZWN0W2ldLmZlYXR1cmVzKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIHJlY3Vyc2l2ZWx5RGVsZXRlRmVhdHVyZXMocm9vdEFycmF5LCBmZWF0dXJlT2JqZWN0KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbCA9IGZlYXR1cmVPYmplY3QubGVuZ3RoLFxyXG4gICAgICAgICAgICAgICAgICAgIGk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gRmluZCB0aGUgZmVhdHVyZVxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IGdldEZlYXR1cmVOb2RlKHJvb3RBcnJheSwgZmVhdHVyZU9iamVjdFtpXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4ID49IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZlYXR1cmVPYmplY3RbaW5kZXhdLmZlYXR1cmVzICYmIGZlYXR1cmVPYmplY3RbaW5kZXhdLmZlYXR1cmVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlY3Vyc2l2ZWx5RGVsZXRlRmVhdHVyZXMocm9vdEFycmF5W2luZGV4XS5mZWF0dXJlcywgZmVhdHVyZU9iamVjdFtpbmRleF0uZmVhdHVyZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRmVhdHVyZXMuc3BsaWNlKGluZGV4LCAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuYWRkRmVhdHVyZXMgPSBmdW5jdGlvbiAoZmVhdHVyZU9iamVjdCkge1xyXG4gICAgICAgICAgICAgICAgcmVjdXJzaXZlbHlBZGRGZWF0dXJlcyhGZWF0dXJlcywgZmVhdHVyZU9iamVjdC5mZWF0dXJlcyk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICB0aGlzLmRlbGV0ZUZlYXR1cmVzID0gZnVuY3Rpb24gKGZlYXR1cmVPYmplY3QpIHtcclxuICAgICAgICAgICAgICAgIHJlY3Vyc2l2ZWx5RGVsZXRlRmVhdHVyZXMoRmVhdHVyZXMsIGZlYXR1cmVPYmplY3QuZmVhdHVyZXMpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgdGhpcy5nZXRGZWF0dXJlTGlzdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBGZWF0dXJlcztcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMucG9zdEZlYXR1cmVzID0gZnVuY3Rpb24gKGZlYXR1cmVPYmplY3QpIHtcclxuICAgICAgICAgICAgICAgIHZhciBtZXNzYWdlID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAncGx1Z2luJzogZmVhdHVyZU9iamVjdC5wbHVnaW4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdvdXRwdXRJbmRleCc6IGZlYXR1cmVPYmplY3Qub3V0cHV0SW5kZXgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdmcmFtZVNpemUnOiBmZWF0dXJlT2JqZWN0LmZyYW1lU2l6ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2ZlYXR1cmVzJzoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ251bWJlck9mQ2hhbm5lbHMnOiBmZWF0dXJlT2JqZWN0LnJlc3VsdHMubnVtYmVyT2ZDaGFubmVscyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdyZXN1bHRzJzogW11cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgaTtcclxuXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiByZWN1cnNpdmVQb3N0RmVhdHVyZXMocm9vdE5vZGUsIHJlc3VsdHNMaXN0LCBGZWF0dXJlTGlzdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIEFkZCB0aGUgcmVzdWx0cyB0cmVlIHdoZXJlIG5lY2Vzc2FyeVxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpLCBwYXJhbTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gYW8oZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZS5uYW1lID09PSBwYXJhbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChwYXJhbSBpbiByZXN1bHRzTGlzdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0c0xpc3QuaGFzT3duUHJvcGVydHkocGFyYW0pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbm9kZSA9IEZlYXR1cmVMaXN0LmZpbmQoYW8pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0c0xpc3RbcGFyYW1dLmNvbnN0cnVjdG9yID09PSBPYmplY3QgJiYgbm9kZS5yZXN1bHRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvb3ROb2RlW3BhcmFtXSA9IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWN1cnNpdmVQb3N0RmVhdHVyZXMocm9vdE5vZGVbcGFyYW1dLCByZXN1bHRzTGlzdFtwYXJhbV0sIG5vZGUucmVzdWx0cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm9vdE5vZGVbcGFyYW1dID0gcmVzdWx0c0xpc3RbcGFyYW1dO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIFBlcmZvcm0gcmVjdXJzaXZlIG1hcCBmb3IgZWFjaCBjaGFubmVsXHJcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgZmVhdHVyZU9iamVjdC5yZXN1bHRzLm51bWJlck9mQ2hhbm5lbHM7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UuZmVhdHVyZXMucmVzdWx0c1tpXSA9IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgIHJlY3Vyc2l2ZVBvc3RGZWF0dXJlcyhtZXNzYWdlLmZlYXR1cmVzLnJlc3VsdHNbaV0sIGZlYXR1cmVPYmplY3QucmVzdWx0cy5yZXN1bHRzW2ldLnJlc3VsdHMsIEZlYXR1cmVzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHBsdWdpbkluc3RhbmNlLm5vZGUuZmVhdHVyZU1hcC5SZWNlaXZlci5wb3N0RmVhdHVyZXMobWVzc2FnZSk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gZmluZFNvdXJjZUluZGV4KFNlbmRlcikge1xyXG4gICAgICAgICAgICByZXR1cm4gTWFwcGluZ3MuZmluZEluZGV4KGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZS5nZXRTZW5kZXIoKSA9PT0gdGhpcztcclxuICAgICAgICAgICAgfSwgU2VuZGVyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGZpbmRTb3VyY2VNYXAoTWFwcGluZ3MsIHNvdXJjZSwgcGx1Z2luU2VuZGVyKSB7XHJcbiAgICAgICAgICAgIHZhciBzb3VyY2VNYXAgPSBNYXBwaW5nc1tmaW5kU291cmNlSW5kZXgoc291cmNlKV07XHJcbiAgICAgICAgICAgIGlmICghc291cmNlTWFwKSB7XHJcbiAgICAgICAgICAgICAgICBzb3VyY2VNYXAgPSBNYXBwaW5nc1tmaW5kU291cmNlSW5kZXgocGx1Z2luU2VuZGVyKV07XHJcbiAgICAgICAgICAgICAgICBpZiAoIXNvdXJjZU1hcCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IChcIkNvdWxkIG5vdCBsb2NhdGUgc291cmNlIG1hcFwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gc291cmNlTWFwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gR0VORVJBTCBJTlRFUkZBQ0VcclxuICAgICAgICB0aGlzLmNyZWF0ZVNvdXJjZU1hcCA9IGZ1bmN0aW9uIChTZW5kZXIsIHBsdWdpbkluc3RhbmNlKSB7XHJcbiAgICAgICAgICAgIHZhciBub2RlID0gbmV3IFNvdXJjZU1hcChTZW5kZXIsIHBsdWdpbkluc3RhbmNlKTtcclxuICAgICAgICAgICAgTWFwcGluZ3MucHVzaChub2RlKTtcclxuICAgICAgICAgICAgcmV0dXJuIG5vZGU7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmRlbGV0ZVNvdXJjZU1hcCA9IGZ1bmN0aW9uIChTZW5kZXIpIHtcclxuICAgICAgICAgICAgdmFyIGluZGV4ID0gZmluZFNvdXJjZUluZGV4KFNlbmRlcik7XHJcbiAgICAgICAgICAgIGlmIChpbmRleCA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IChcIkNvdWxkIG5vdCBmaW5kIHRoZSBzb3VyY2UgbWFwIGZvciB0aGUgcGx1Z2luXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIE1hcHBpbmdzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5nZXRQbHVnaW5TZW5kZXIgPSBmdW5jdGlvbiAocGx1Z2luKSB7XHJcbiAgICAgICAgICAgIGlmIChwbHVnaW4uY29uc3RydWN0b3IgPT09IFBsdWdpbkluc3RhbmNlKSB7XHJcbiAgICAgICAgICAgICAgICBwbHVnaW4gPSBwbHVnaW4ubm9kZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gcGx1Z2luLmZlYXR1cmVNYXAuU2VuZGVyO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMucmVxdWVzdEZlYXR1cmVzID0gZnVuY3Rpb24gKHJlcXVlc3Rvciwgc291cmNlLCBmZWF0dXJlT2JqZWN0KSB7XHJcbiAgICAgICAgICAgIGlmIChyZXF1ZXN0b3IuY29uc3RydWN0b3IgIT09IFBsdWdpbkluc3RhbmNlKSB7XHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0b3IgPSByZXF1ZXN0b3IucGx1Z2luSW5zdGFuY2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gR2V0IHRoZSBzb3VyY2UgbWFwXHJcbiAgICAgICAgICAgIHZhciBwbHVnaW5TZW5kZXIgPSB0aGlzLmdldFBsdWdpblNlbmRlcihzb3VyY2UpO1xyXG4gICAgICAgICAgICB2YXIgc291cmNlTWFwID0gZmluZFNvdXJjZU1hcChNYXBwaW5ncywgc291cmNlLCBwbHVnaW5TZW5kZXIpO1xyXG4gICAgICAgICAgICBzb3VyY2VNYXAucmVxdWVzdEZlYXR1cmVzKHJlcXVlc3RvciwgZmVhdHVyZU9iamVjdCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmRlbGV0ZUZlYXR1cmVzID0gZnVuY3Rpb24gKHJlcXVlc3Rvciwgc291cmNlLCBmZWF0dXJlT2JqZWN0KSB7XHJcbiAgICAgICAgICAgIGlmIChyZXF1ZXN0b3IuY29uc3RydWN0b3IgIT09IFBsdWdpbkluc3RhbmNlKSB7XHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0b3IgPSByZXF1ZXN0b3IucGx1Z2luSW5zdGFuY2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHNvdXJjZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBNYXBwaW5ncy5mb3JFYWNoKGZ1bmN0aW9uIChzb3VyY2VNYXApIHtcclxuICAgICAgICAgICAgICAgICAgICBzb3VyY2VNYXAuY2FuY2VsRmVhdHVyZXMocmVxdWVzdG9yKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gR2V0IHRoZSBzb3VyY2UgbWFwXHJcbiAgICAgICAgICAgICAgICB2YXIgcGx1Z2luU2VuZGVyID0gdGhpcy5nZXRQbHVnaW5TZW5kZXIoc291cmNlKTtcclxuICAgICAgICAgICAgICAgIHZhciBzb3VyY2VNYXAgPSBmaW5kU291cmNlTWFwKE1hcHBpbmdzLCBzb3VyY2UsIHBsdWdpblNlbmRlcik7XHJcbiAgICAgICAgICAgICAgICBzb3VyY2VNYXAuY2FuY2VsRmVhdHVyZXMocmVxdWVzdG9yLCBmZWF0dXJlT2JqZWN0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5nZXRGZWF0dXJlTGlzdCA9IGZ1bmN0aW9uIChyZXF1ZXN0b3IsIHNvdXJjZSkge307XHJcbiAgICAgICAgdGhpcy5wb3N0RmVhdHVyZXMgPSBmdW5jdGlvbiAoZmVhdHVyZU9iamVjdCkge1xyXG4gICAgICAgICAgICAvLyBSZWNlaXZlIGZyb20gdGhlIFNlbmRlciBvYmplY3RzXHJcbiAgICAgICAgICAgIC8vIFRyaWdnZXIgZGlzdHJpYnV0ZWQgc2VhcmNoIGZvciByZXN1bHRzIHRyYW5zbWlzc2lvblxyXG5cclxuICAgICAgICAgICAgLy8gRmlyc3QgZ2V0IHRoZSBpbnN0YW5jZSBtYXBwaW5nIGZvciBvdXRwdXQvZnJhbWVcclxuICAgICAgICAgICAgdmFyIHNvdXJjZSA9IE1hcHBpbmdzW2ZpbmRTb3VyY2VJbmRleChmZWF0dXJlT2JqZWN0LnBsdWdpbildO1xyXG4gICAgICAgICAgICBpZiAoIXNvdXJjZSkge1xyXG4gICAgICAgICAgICAgICAgc291cmNlID0gTWFwcGluZ3NbZmluZFNvdXJjZUluZGV4KHRoaXMuZ2V0UGx1Z2luU2VuZGVyKGZlYXR1cmVPYmplY3QucGx1Z2luKSldO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFzb3VyY2UpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyAoXCJQbHVnaW4gSW5zdGFuY2Ugbm90IGxvYWRlZCFcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIGZyYW1lTWFwID0gc291cmNlLmZpbmRGcmFtZU1hcChmZWF0dXJlT2JqZWN0Lm91dHB1dEluZGV4LCBmZWF0dXJlT2JqZWN0LmZyYW1lU2l6ZSk7XHJcblxyXG4gICAgICAgICAgICAvLyBTZW5kIHRoZSBmZWF0dXJlIG9iamVjdCB0byB0aGUgUmVxdWVzdG9yTWFwIG9iamVjdCB0byBoYW5kbGUgY29tbXNcclxuICAgICAgICAgICAgZnJhbWVNYXAucmVxdWVzdG9ycy5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICBlLnBvc3RGZWF0dXJlcyh0aGlzKTtcclxuICAgICAgICAgICAgfSwgZmVhdHVyZU9iamVjdCk7XHJcblxyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuRmVhdHVyZU1hcCA9IG5ldyBGZWF0dXJlTWFwKCk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcy5GZWF0dXJlTWFwLCBcImZhY3RvcnlcIiwge1xyXG4gICAgICAgICd2YWx1ZSc6IHRoaXNcclxuICAgIH0pO1xyXG5cclxuICAgIHZhciBzdG9yZXMgPSBbXTtcclxuXHJcbiAgICB0aGlzLmNyZWF0ZVN0b3JlID0gZnVuY3Rpb24gKHN0b3JlTmFtZSkge1xyXG4gICAgICAgIHZhciBub2RlID0gbmV3IExpbmtlZFN0b3JlLkxpbmtlZFN0b3JlKHN0b3JlTmFtZSk7XHJcbiAgICAgICAgc3RvcmVzLnB1c2gobm9kZSk7XHJcbiAgICAgICAgcmV0dXJuIG5vZGU7XHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuZ2V0U3RvcmVzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBzdG9yZXM7XHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuZmluZFN0b3JlID0gZnVuY3Rpb24gKHN0b3JlTmFtZSkge1xyXG4gICAgICAgIHJldHVybiBzdG9yZXMuZmluZChmdW5jdGlvbiAoYSkge1xyXG4gICAgICAgICAgICByZXR1cm4gYS5uYW1lID09PSBzdG9yZU5hbWU7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIEJ1aWxkIHRoZSBkZWZhdWx0IFN0b3Jlc1xyXG4gICAgdGhpcy5TZXNzaW9uRGF0YSA9IG5ldyBMaW5rZWRTdG9yZS5MaW5rZWRTdG9yZShcIlNlc3Npb25cIik7XHJcbiAgICB0aGlzLlVzZXJEYXRhID0gbmV3IExpbmtlZFN0b3JlLkxpbmtlZFN0b3JlKFwiVXNlclwiKTtcclxuXHJcbiAgICAvLyBDcmVhdGVkIGZvciB0aGUgaW5wdXQgb2YgZWFjaCBTdWJGYWN0b3J5IHBsdWdpbiBjaGFpblxyXG4gICAgdmFyIFN1YkZhY3RvcnlGZWF0dXJlU2VuZGVyID0gZnVuY3Rpb24gKG93bmVyLCBGYWN0b3J5RmVhdHVyZU1hcCkge1xyXG4gICAgICAgIHZhciBPdXRwdXROb2RlID0gZnVuY3Rpb24gKHBhcmVudCwgb3V0cHV0KSB7XHJcbiAgICAgICAgICAgIHZhciBleHRyYWN0b3JzID0gW107XHJcbiAgICAgICAgICAgIHZhciBFeHRyYWN0b3IgPSBmdW5jdGlvbiAob3V0cHV0LCBmcmFtZVNpemUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZXh0cmFjdG9yID0gb3V0cHV0LmNvbnRleHQuY3JlYXRlQW5hbHlzZXIoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZXh0cmFjdG9yLmZmdFNpemUgPSBmcmFtZVNpemU7XHJcbiAgICAgICAgICAgICAgICBvdXRwdXQuY29ubmVjdCh0aGlzLmV4dHJhY3Rvcik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZlYXR1cmVzID0gW107XHJcbiAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgXCJmcmFtZVNpemVcIiwge1xyXG4gICAgICAgICAgICAgICAgICAgICd2YWx1ZSc6IGZyYW1lU2l6ZVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHJlY3Vyc2l2ZVByb2Nlc3NpbmcgPSBvd25lci5yZWN1cnNpdmVQcm9jZXNzaW5nO1xyXG4gICAgICAgICAgICAgICAgLypcclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHJlY3Vyc2l2ZVByb2Nlc3NpbmcoYmFzZSwgbGlzdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBsID0gbGlzdC5sZW5ndGgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGksIGVudHJ5O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBsOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW50cnkgPSBsaXN0W2ldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYXNlW2VudHJ5Lm5hbWVdLmFwcGx5KGJhc2UsIGVudHJ5LnBhcmFtZXRlcnMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZW50cnkuZmVhdHVyZXMgJiYgZW50cnkuZmVhdHVyZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVjdXJzaXZlUHJvY2Vzc2luZyhiYXNlLnJlc3VsdFtlbnRyeS5uYW1lXSwgZW50cnkuZmVhdHVyZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIG9uYXVkaW9jYWxsYmFjayhkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy90aGlzID09PSBFeHRyYWN0b3JcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbWVzc2FnZSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ251bWJlck9mQ2hhbm5lbHMnOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAncmVzdWx0cyc6IFtdXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICByZWN1cnNpdmVQcm9jZXNzaW5nKGRhdGEsIHRoaXMuZmVhdHVyZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UucmVzdWx0c1swXSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2NoYW5uZWwnOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAncmVzdWx0cyc6IEpTT04ucGFyc2UoZGF0YS50b0pTT04oKSlcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9zdEZlYXR1cmVzKGRhdGEubGVuZ3RoLCBtZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldEZlYXR1cmVzID0gZnVuY3Rpb24gKGZlYXR1cmVMaXN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mZWF0dXJlcyA9IGZlYXR1cmVMaXN0O1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmZlYXR1cmVzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmV4dHJhY3Rvci5jbGVhckNhbGxiYWNrKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5leHRyYWN0b3IuZnJhbWVDYWxsYmFjayhvbmF1ZGlvY2FsbGJhY2ssIHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlam9pbkV4dHJhY3RvciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBvdXRwdXQuY29ubmVjdCh0aGlzLmV4dHJhY3Rvcik7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB2YXIgV29ya2VyRXh0cmFjdG9yID0gZnVuY3Rpb24gKG91dHB1dCwgZnJhbWVTaXplKSB7XHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBvbmF1ZGlvY2FsbGJhY2soZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjLCBmcmFtZXMgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGMgPSAwOyBjIDwgZS5pbnB1dEJ1ZmZlci5udW1iZXJPZkNoYW5uZWxzOyBjKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnJhbWVzW2NdID0gZS5pbnB1dEJ1ZmZlci5nZXRDaGFubmVsRGF0YShjKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgd29ya2VyLnBvc3RNZXNzYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ3N0YXRlJzogMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2ZyYW1lcyc6IGZyYW1lc1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHJlc3BvbnNlKG1zZykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9zdEZlYXR1cmVzKGZyYW1lU2l6ZSwgbXNnLmRhdGEucmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHZhciB3b3JrZXIgPSBuZXcgV29ya2VyKFwianNhcC9mZWF0dXJlLXdvcmtlci5qc1wiKTtcclxuICAgICAgICAgICAgICAgIHdvcmtlci5vbmVycm9yID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldEZlYXR1cmVzID0gZnVuY3Rpb24gKGZlYXR1cmVMaXN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjb25maWdNZXNzYWdlID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnc3RhdGUnOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnc2FtcGxlUmF0ZSc6IG91dHB1dC5jb250ZXh0LnNhbXBsZVJhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdmZWF0dXJlTGlzdCc6IGZlYXR1cmVMaXN0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnbnVtQ2hhbm5lbHMnOiBvdXRwdXQubnVtYmVyT2ZPdXRwdXRzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnZnJhbWVTaXplJzogdGhpcy5mcmFtZVNpemVcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmVhdHVyZXMgPSBmZWF0dXJlTGlzdDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZmVhdHVyZUxpc3QgJiYgZmVhdHVyZUxpc3QubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3b3JrZXIub25tZXNzYWdlID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLmRhdGEuc3RhdGUgPT09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3JrZXIub25tZXNzYWdlID0gcmVzcG9uc2UuYmluZChzZWxmKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmV4dHJhY3Rvci5vbmF1ZGlvcHJvY2VzcyA9IG9uYXVkaW9jYWxsYmFjay5iaW5kKHNlbGYpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3JrZXIucG9zdE1lc3NhZ2UoY29uZmlnTWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtlci5wb3N0TWVzc2FnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnc3RhdGUnOiAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXh0cmFjdG9yLm9uYXVkaW9wcm9jZXNzID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMucmVqb2luRXh0cmFjdG9yID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG91dHB1dC5jb25uZWN0KHRoaXMuZXh0cmFjdG9yKTtcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5leHRyYWN0b3IgPSBvdXRwdXQuY29udGV4dC5jcmVhdGVTY3JpcHRQcm9jZXNzb3IoZnJhbWVTaXplLCBvdXRwdXQubnVtYmVyT2ZPdXRwdXRzLCAxKTtcclxuICAgICAgICAgICAgICAgIG91dHB1dC5jb25uZWN0KHRoaXMuZXh0cmFjdG9yKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZXh0cmFjdG9yLmNvbm5lY3Qob3V0cHV0LmNvbnRleHQuZGVzdGluYXRpb24pO1xyXG5cclxuICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImZyYW1lU2l6ZVwiLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ3ZhbHVlJzogZnJhbWVTaXplXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdGhpcy5hZGRFeHRyYWN0b3IgPSBmdW5jdGlvbiAoZnJhbWVTaXplKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgb2JqO1xyXG4gICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5Xb3JrZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICBvYmogPSBuZXcgV29ya2VyRXh0cmFjdG9yKG91dHB1dCwgZnJhbWVTaXplKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqID0gbmV3IEV4dHJhY3RvcihvdXRwdXQsIGZyYW1lU2l6ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBleHRyYWN0b3JzLnB1c2gob2JqKTtcclxuICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIFwicG9zdEZlYXR1cmVzXCIsIHtcclxuICAgICAgICAgICAgICAgICAgICAndmFsdWUnOiBmdW5jdGlvbiAoZnJhbWVTaXplLCByZXN1bHRzSlNPTikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgb2JqID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ291dHB1dEluZGV4JzogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdmcmFtZVNpemUnOiBmcmFtZVNpemUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAncmVzdWx0cyc6IHJlc3VsdHNKU09OXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucG9zdEZlYXR1cmVzKG9iaik7XHJcbiAgICAgICAgICAgICAgICAgICAgfS5iaW5kKHRoaXMpXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBvYmo7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHRoaXMuZmluZEV4dHJhY3RvciA9IGZ1bmN0aW9uIChmcmFtZVNpemUpIHtcclxuICAgICAgICAgICAgICAgIHZhciBjaGVjayA9IGZyYW1lU2l6ZTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBleHRyYWN0b3JzLmZpbmQoZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBUaGlzIE1VU1QgYmUgPT0gTk9UID09PVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBOdW1iZXIoZS5mcmFtZVNpemUpID09PSBOdW1iZXIoY2hlY2spO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHRoaXMucmVqb2luRXh0cmFjdG9ycyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGV4dHJhY3RvcnMuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGUucmVqb2luRXh0cmFjdG9yKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdGhpcy5kZWxldGVFeHRyYWN0b3IgPSBmdW5jdGlvbiAoZnJhbWVTaXplKSB7fTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHZhciBvdXRwdXROb2RlcztcclxuICAgICAgICB0aGlzLnVwZGF0ZUZlYXR1cmVzID0gZnVuY3Rpb24gKGZlYXR1cmVPYmplY3QpIHtcclxuICAgICAgICAgICAgdmFyIG87XHJcbiAgICAgICAgICAgIGZvciAobyA9IDA7IG8gPCBmZWF0dXJlT2JqZWN0Lmxlbmd0aDsgbysrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAob3V0cHV0Tm9kZXMgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvID4gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyAoXCJSZXF1ZXN0ZWQgYW4gb3V0cHV0IHRoYXQgZG9lcyBub3QgZXhpc3RcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIG91dHB1dE5vZGVzID0gbmV3IE91dHB1dE5vZGUob3duZXIsIG93bmVyLmNoYWluU3RhcnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvdXRwdXROb2RlcywgXCJwb3N0RmVhdHVyZXNcIiwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAndmFsdWUnOiBmdW5jdGlvbiAocmVzdWx0T2JqZWN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBvc3RGZWF0dXJlcyhyZXN1bHRPYmplY3QpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LmJpbmQodGhpcylcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhciBzaTtcclxuICAgICAgICAgICAgICAgIGZvciAoc2kgPSAwOyBzaSA8IGZlYXR1cmVPYmplY3Rbb10ubGVuZ3RoOyBzaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGV4dHJhY3RvciA9IG91dHB1dE5vZGVzLmZpbmRFeHRyYWN0b3IoZmVhdHVyZU9iamVjdFtvXVtzaV0uZnJhbWVTaXplKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWV4dHJhY3Rvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBleHRyYWN0b3IgPSBvdXRwdXROb2Rlcy5hZGRFeHRyYWN0b3IoZmVhdHVyZU9iamVjdFtvXVtzaV0uZnJhbWVTaXplKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZXh0cmFjdG9yLnNldEZlYXR1cmVzKGZlYXR1cmVPYmplY3Rbb11bc2ldLmZlYXR1cmVMaXN0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMucmVqb2luRXh0cmFjdG9ycyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG91dHB1dE5vZGVzKSB7XHJcbiAgICAgICAgICAgICAgICBvdXRwdXROb2Rlcy5yZWpvaW5FeHRyYWN0b3JzKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLnBvc3RGZWF0dXJlcyA9IGZ1bmN0aW9uIChmZWF0dXJlT2JqZWN0KSB7XHJcbiAgICAgICAgICAgIC8qXHJcbiAgICAgICAgICAgICAgICBDYWxsZWQgYnkgdGhlIGluZGl2aWR1YWwgZXh0cmFjdG9yIGluc3RhbmNlczpcclxuICAgICAgICAgICAgICAgIGZlYXR1cmVPYmplY3QgPSB7J2ZyYW1lU2l6ZSc6IGZyYW1lU2l6ZSxcclxuICAgICAgICAgICAgICAgICdvdXRwdXRJbmRleCc6IG91dHB1dEluZGV4LFxyXG4gICAgICAgICAgICAgICAgJ3Jlc3VsdHMnOltdfVxyXG4gICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBGYWN0b3J5RmVhdHVyZU1hcC5wb3N0RmVhdHVyZXMoe1xyXG4gICAgICAgICAgICAgICAgJ3BsdWdpbic6IHRoaXMsXHJcbiAgICAgICAgICAgICAgICAnb3V0cHV0SW5kZXgnOiBmZWF0dXJlT2JqZWN0Lm91dHB1dEluZGV4LFxyXG4gICAgICAgICAgICAgICAgJ2ZyYW1lU2l6ZSc6IGZlYXR1cmVPYmplY3QuZnJhbWVTaXplLFxyXG4gICAgICAgICAgICAgICAgJ3Jlc3VsdHMnOiBmZWF0dXJlT2JqZWN0LnJlc3VsdHNcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8gU2VuZCB0byBGYWN0b3J5XHJcbiAgICAgICAgRmFjdG9yeUZlYXR1cmVNYXAuY3JlYXRlU291cmNlTWFwKHRoaXMsIHVuZGVmaW5lZCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBBdWRpb1BsdWdpbkNoYWluTWFuYWdlciA9IGZ1bmN0aW9uIChQbHVnaW5GYWN0b3J5LCBjaGFpblN0YXJ0LCBjaGFpblN0b3ApIHtcclxuXHJcbiAgICAgICAgdmFyIHBsdWdpbl9saXN0ID0gW10sXHJcbiAgICAgICAgICAgIHBsdWdpbkNoYWluU3RhcnQgPSBjaGFpblN0YXJ0LFxyXG4gICAgICAgICAgICBwbHVnaW5DaGFpblN0b3AgPSBjaGFpblN0b3AsXHJcbiAgICAgICAgICAgIGZhY3RvcnlOYW1lID0gXCJcIixcclxuICAgICAgICAgICAgc3RhdGUgPSAxLFxyXG4gICAgICAgICAgICBkZWxheVNhbXBsZXMgPSAwLFxyXG4gICAgICAgICAgICBjaGFpblN0YXJ0RmVhdHVyZSA9IG5ldyBTdWJGYWN0b3J5RmVhdHVyZVNlbmRlcih0aGlzLCBQbHVnaW5GYWN0b3J5LkZlYXR1cmVNYXApLFxyXG4gICAgICAgICAgICBzZW1hbnRpY1N0b3JlcyA9IFtdLFxyXG4gICAgICAgICAgICBldmVudFRhcmdldCA9IG5ldyBFdmVudFRhcmdldCgpLFxyXG4gICAgICAgICAgICBzZWxmID0gdGhpcztcclxuICAgICAgICB0aGlzLnBhcmVudCA9IFBsdWdpbkZhY3Rvcnk7XHJcbiAgICAgICAgcGx1Z2luQ2hhaW5TdGFydC5kaXNjb25uZWN0KCk7XHJcbiAgICAgICAgcGx1Z2luQ2hhaW5TdGFydC5jb25uZWN0KGNoYWluU3RvcCk7XHJcblxyXG4gICAgICAgIHRoaXMuVHJhY2tEYXRhID0gbmV3IExpbmtlZFN0b3JlLkxpbmtlZFN0b3JlKFwiVHJhY2tcIik7XHJcbiAgICAgICAgdGhpcy5QbHVnaW5EYXRhID0gbmV3IExpbmtlZFN0b3JlLkxpbmtlZFN0b3JlKFwiUGx1Z2luXCIpO1xyXG5cclxuICAgICAgICB0aGlzLmZlYXR1cmVTZW5kZXIgPSBjaGFpblN0YXJ0RmVhdHVyZTtcclxuXHJcbiAgICAgICAgdGhpcy5nZXRGZWF0dXJlQ2hhaW4gPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHJlYnVpbGQoKSB7XHJcbiAgICAgICAgICAgIHZhciBpID0gMCxcclxuICAgICAgICAgICAgICAgIGwgPSBwbHVnaW5fbGlzdC5sZW5ndGggLSAxO1xyXG4gICAgICAgICAgICB3aGlsZSAoaSA8IGwpIHtcclxuICAgICAgICAgICAgICAgIHZhciBjdXJyZW50Tm9kZSA9IHBsdWdpbl9saXN0W2krK107XHJcbiAgICAgICAgICAgICAgICB2YXIgbmV4dE5vZGUgPSBwbHVnaW5fbGlzdFtpXTtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnROb2RlLnJlY29ubmVjdChuZXh0Tm9kZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGlzb2xhdGUoKSB7XHJcbiAgICAgICAgICAgIHBsdWdpbl9saXN0LmZvckVhY2goZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgIGUuZGlzY29ubmVjdCgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGN1dENoYWluKCkge1xyXG4gICAgICAgICAgICBpZiAocGx1Z2luX2xpc3QubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgcGx1Z2luQ2hhaW5TdGFydC5kaXNjb25uZWN0KHBsdWdpbl9saXN0WzBdLmlucHV0KTtcclxuICAgICAgICAgICAgICAgIHBsdWdpbl9saXN0W3BsdWdpbl9saXN0Lmxlbmd0aCAtIDFdLm91dHB1dC5kaXNjb25uZWN0KHBsdWdpbkNoYWluU3RvcCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBwbHVnaW5DaGFpblN0YXJ0LmRpc2Nvbm5lY3QocGx1Z2luQ2hhaW5TdG9wKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGpvaW5DaGFpbigpIHtcclxuICAgICAgICAgICAgaWYgKHBsdWdpbl9saXN0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHBsdWdpbkNoYWluU3RhcnQuY29ubmVjdChwbHVnaW5fbGlzdFswXS5pbnB1dCk7XHJcbiAgICAgICAgICAgICAgICBwbHVnaW5fbGlzdFtwbHVnaW5fbGlzdC5sZW5ndGggLSAxXS5vdXRwdXQuY29ubmVjdChwbHVnaW5DaGFpblN0b3ApO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcGx1Z2luQ2hhaW5TdGFydC5jb25uZWN0KHBsdWdpbkNoYWluU3RvcCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2hhaW5TdGFydEZlYXR1cmUucmVqb2luRXh0cmFjdG9ycygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5ieXBhc3NQbHVnaW4gPSBmdW5jdGlvbiAocGx1Z2luX2luc3RhbmNlLCBzdGF0ZSkge1xyXG4gICAgICAgICAgICAvLyBDaGVjayBpcyBhIG1lbWJlciBvZiB0aGlzIGNoYWluXHJcbiAgICAgICAgICAgIGlmIChwbHVnaW5fbGlzdC5pbmNsdWRlcyhwbHVnaW5faW5zdGFuY2UpID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHBsdWdpbl9pbnN0YW5jZS5ieXBhc3Moc3RhdGUpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuZ2V0UHJvdG90eXBlcyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyZW50LmdldFByb3RvdHlwZXMoKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLmdldEZhY3RvcnkgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcmVudDtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLmRlc3Ryb3kgPSBmdW5jdGlvbiAocmVjb25uZWN0KSB7XHJcbiAgICAgICAgICAgIHZhciBpO1xyXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcGx1Z2luX2xpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGVzdHJveVBsdWdpbihwbHVnaW5fbGlzdFtpXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcGx1Z2luQ2hhaW5TdGFydC5kaXNjb25uZWN0KCk7XHJcbiAgICAgICAgICAgIGlmIChyZWNvbm5lY3QgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIHBsdWdpbkNoYWluU3RhcnQuY29ubmVjdChwbHVnaW5DaGFpblN0b3ApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8gUGx1Z2luIGNyZWF0aW9uIC8gZGVzdHJ1Y3Rpb25cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gYnVpbGROZXdQbHVnaW4ocHJvdG90eXBlT2JqZWN0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICAgICAgICAgIGlmIChzdGF0ZSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdCAoXCJTdWJGYWN0b3J5IGhhcyBiZWVuIGRlc3Ryb3llZCEgQ2Fubm90IGFkZCBuZXcgcGx1Z2luc1wiKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShwcm90b3R5cGVPYmplY3QpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb3RvdHlwZU9iamVjdC5jcmVhdGVQbHVnaW5JbnN0YW5jZShzZWxmLCBmYWxzZSlcclxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKG5vZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhub2RlLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdUcmFja0RhdGEnOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogc2VsZi5UcmFja0RhdGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBub2RlO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jcmVhdGVQbHVnaW4gPSBmdW5jdGlvbiAocHJvdG90eXBlT2JqZWN0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBidWlsZE5ld1BsdWdpbihwcm90b3R5cGVPYmplY3QpLmNhdGNoKGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgICAgICAgICAgdGhyb3coXCJQbHVnaW4gZGlkIG5vdCBnZXQgY3JlYXRlZCEgQWJvcnRpbmdcIik7XHJcbiAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24obm9kZSkge1xyXG4gICAgICAgICAgICAgICAgY3V0Q2hhaW4oKTtcclxuICAgICAgICAgICAgICAgIHBsdWdpbl9saXN0LnB1c2gobm9kZSk7XHJcbiAgICAgICAgICAgICAgICBpc29sYXRlKCk7XHJcbiAgICAgICAgICAgICAgICByZWJ1aWxkKCk7XHJcbiAgICAgICAgICAgICAgICBqb2luQ2hhaW4oKTtcclxuICAgICAgICAgICAgICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihcImFsdGVyZGVsYXlcIiwgc2VsZik7XHJcbiAgICAgICAgICAgICAgICBub2RlLm5vZGUub25sb2FkZWQuY2FsbChub2RlLm5vZGUpO1xyXG4gICAgICAgICAgICAgICAgdXBkYXRlRGVsYXlDb21wZW5zYXRpb24oKTtcclxuICAgICAgICAgICAgICAgIGV2ZW50VGFyZ2V0LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiY2hhbmdlXCIpKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBub2RlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLnJlbW92ZVBsdWdpbiA9IGZ1bmN0aW9uKHBsdWdpbl9vYmplY3QpIHtcclxuICAgICAgICAgICAgaWYgKHN0YXRlID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5nZXRQbHVnaW5JbmRleChwbHVnaW5fb2JqZWN0KTtcclxuICAgICAgICAgICAgaWYgKGluZGV4ID49IDApIHtcclxuICAgICAgICAgICAgICAgIGN1dENoYWluKCk7XHJcbiAgICAgICAgICAgICAgICBwbHVnaW5fb2JqZWN0LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJhbHRlcmRlbGF5XCIsIHNlbGYpO1xyXG4gICAgICAgICAgICAgICAgcGx1Z2luX29iamVjdC5ub2RlLnN0b3AuY2FsbChwbHVnaW5fb2JqZWN0Lm5vZGUpO1xyXG4gICAgICAgICAgICAgICAgcGx1Z2luX29iamVjdC5ub2RlLm9udW5sb2FkZWQuY2FsbChwbHVnaW5fb2JqZWN0Lm5vZGUpO1xyXG4gICAgICAgICAgICAgICAgcGx1Z2luX29iamVjdC5ub2RlLmRlY29uc3RydWN0LmNhbGwocGx1Z2luX29iamVjdC5ub2RlKTtcclxuICAgICAgICAgICAgICAgIHBsdWdpbl9saXN0LnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgICAgICBpc29sYXRlKCk7XHJcbiAgICAgICAgICAgICAgICByZWJ1aWxkKCk7XHJcbiAgICAgICAgICAgICAgICBqb2luQ2hhaW4oKTtcclxuICAgICAgICAgICAgICAgIHVwZGF0ZURlbGF5Q29tcGVuc2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICBldmVudFRhcmdldC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImNoYW5nZVwiKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLmRlc3Ryb3lQbHVnaW4gPSBmdW5jdGlvbiAocGx1Z2luX29iamVjdCkge1xyXG4gICAgICAgICAgICBpZiAoc3RhdGUgPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnJlbW92ZVBsdWdpbihwbHVnaW5fb2JqZWN0KTtcclxuICAgICAgICAgICAgdGhpcy5wYXJlbnQuZGVsZXRlUGx1Z2luKHBsdWdpbl9vYmplY3QuaWQpO1xyXG4gICAgICAgICAgICB1cGRhdGVEZWxheUNvbXBlbnNhdGlvbigpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuZ2V0UGx1Z2lucyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHBsdWdpbl9saXN0O1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuZ2V0QWxsUGx1Z2lucyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyZW50LmdldEFsbFBsdWdpbnNPYmplY3QoKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLmdldFBsdWdpbkluZGV4ID0gZnVuY3Rpb24gKHBsdWdpbl9vYmplY3QpIHtcclxuICAgICAgICAgICAgaWYgKHN0YXRlID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIGluZGV4ID0gcGx1Z2luX2xpc3QuZmluZEluZGV4KGZ1bmN0aW9uIChlbGVtZW50LCBpbmRleCwgYXJyYXkpIHtcclxuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50ID09PSB0aGlzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH0sIHBsdWdpbl9vYmplY3QpO1xyXG4gICAgICAgICAgICByZXR1cm4gaW5kZXg7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5tb3ZlUGx1Z2luID0gZnVuY3Rpb24gKHBsdWdpbl9vYmplY3QsIG5ld19pbmRleCkge1xyXG4gICAgICAgICAgICBpZiAoc3RhdGUgPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmdldFBsdWdpbkluZGV4KHBsdWdpbl9vYmplY3QpLFxyXG4gICAgICAgICAgICAgICAgb2JqLCBob2xkTG93LCBob2xkSGlnaCwgaTtcclxuICAgICAgICAgICAgaWYgKFBsdWdpbkZhY3RvcnkuZ2V0QWxsUGx1Z2lucygpLmluY2x1ZGVzKHBsdWdpbl9vYmplY3QpID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3coXCJQbHVnaW4gZG9lcyBub3QgZXhpc3RcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY3V0Q2hhaW4oKTtcclxuICAgICAgICAgICAgaXNvbGF0ZSgpO1xyXG4gICAgICAgICAgICBpZiAocGx1Z2luX29iamVjdC5ub2RlLm93bmVyICE9PSB0aGlzKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBEaWZmZXJlbnQgc3ViLWZhY3RvcnlcclxuICAgICAgICAgICAgICAgIHBsdWdpbl9vYmplY3Qubm9kZS5vd25lci5yZW1vdmVQbHVnaW4ocGx1Z2luX29iamVjdCk7XHJcbiAgICAgICAgICAgICAgICBwbHVnaW5fb2JqZWN0Lm5vZGUub3duZXIgPSB0aGlzO1xyXG4gICAgICAgICAgICAgICAgb2JqID0gW3BsdWdpbl9vYmplY3RdO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgb2JqID0gcGx1Z2luX2xpc3Quc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgICAgIHBsdWdpbl9vYmplY3Qubm9kZS5vbnVubG9hZGVkLmNhbGwocGx1Z2luX29iamVjdC5ub2RlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAobmV3X2luZGV4ID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBwbHVnaW5fbGlzdCA9IG9iai5jb25jYXQocGx1Z2luX2xpc3QpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKG5ld19pbmRleCA+PSBwbHVnaW5fbGlzdC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHBsdWdpbl9saXN0ID0gcGx1Z2luX2xpc3QuY29uY2F0KG9iaik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBob2xkTG93ID0gcGx1Z2luX2xpc3Quc2xpY2UoMCwgbmV3X2luZGV4KTtcclxuICAgICAgICAgICAgICAgIGhvbGRIaWdoID0gcGx1Z2luX2xpc3Quc2xpY2UobmV3X2luZGV4KTtcclxuICAgICAgICAgICAgICAgIHBsdWdpbl9saXN0ID0gaG9sZExvdy5jb25jYXQob2JqLmNvbmNhdChob2xkSGlnaCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlYnVpbGQoKTtcclxuICAgICAgICAgICAgam9pbkNoYWluKCk7XHJcbiAgICAgICAgICAgIHBsdWdpbl9vYmplY3Qubm9kZS5vbmxvYWRlZC5jYWxsKHBsdWdpbl9vYmplY3Qubm9kZSk7XHJcbiAgICAgICAgICAgIHVwZGF0ZURlbGF5Q29tcGVuc2F0aW9uKCk7XHJcbiAgICAgICAgICAgIGV2ZW50VGFyZ2V0LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiY2hhbmdlXCIpKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLmNvcHlQbHVnaW4gPSBmdW5jdGlvbihwbHVnaW5fb2JqZWN0LCBjb3B5X2luZGV4KSB7XHJcbiAgICAgICAgICAgIGlmIChjb3B5X2luZGV4ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGNvcHlfaW5kZXggPSBwbHVnaW5fbGlzdC5sZW5ndGg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb3B5X2luZGV4ICE9IFwibnVtYmVyXCIgfHwgY29weV9pbmRleCA8IDAgfHwgY29weV9pbmRleCA+IHBsdWdpbl9saXN0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3coXCJQbHVnaW4gY29weSBpbmRleCBvdXRzaWRlIG9mIHRoZSBjaGFpbiBzY29wZS5cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGJ1aWxkTmV3UGx1Z2luKHBsdWdpbl9vYmplY3QucHJvdG90eXBlT2JqZWN0KVxyXG4gICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyhcIlBsdWdpbiBkaWQgbm90IGdldCBjcmVhdGVkISBBYm9ydGluZ1wiKTtcclxuICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbihub2RlKSB7XHJcbiAgICAgICAgICAgICAgICBub2RlLm5vZGUucGFyYW1ldGVycy5zZXRQYXJhbWV0ZXJzQnlPYmplY3QocGx1Z2luX29iamVjdC5ub2RlLnBhcmFtZXRlcnMuZ2V0UGFyYW1ldGVyT2JqZWN0KCkpO1xyXG4gICAgICAgICAgICAgICAgY3V0Q2hhaW4oKTtcclxuICAgICAgICAgICAgICAgIGlzb2xhdGUoKTtcclxuICAgICAgICAgICAgICAgIHBsdWdpbl9saXN0LnNwbGljZShjb3B5X2luZGV4LCAwLCBub2RlKTtcclxuICAgICAgICAgICAgICAgIHJlYnVpbGQoKTtcclxuICAgICAgICAgICAgICAgIGpvaW5DaGFpbigpO1xyXG4gICAgICAgICAgICAgICAgdXBkYXRlRGVsYXlDb21wZW5zYXRpb24oKTtcclxuICAgICAgICAgICAgICAgIG5vZGUubm9kZS5vbmxvYWRlZC5jYWxsKG5vZGUubm9kZSk7XHJcbiAgICAgICAgICAgICAgICBldmVudFRhcmdldC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImNoYW5nZVwiKSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbm9kZTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHJlY3Vyc2l2ZVByb2Nlc3NpbmcoYmFzZSwgbGlzdCkge1xyXG4gICAgICAgICAgICB2YXIgbCA9IGxpc3QubGVuZ3RoLFxyXG4gICAgICAgICAgICAgICAgaSwgZW50cnk7XHJcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBsOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGVudHJ5ID0gbGlzdFtpXTtcclxuICAgICAgICAgICAgICAgIGJhc2VbZW50cnkubmFtZV0uYXBwbHkoYmFzZSwgZW50cnkucGFyYW1ldGVycyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZW50cnkuZmVhdHVyZXMgJiYgZW50cnkuZmVhdHVyZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlY3Vyc2l2ZVByb2Nlc3NpbmcoYmFzZS5yZXN1bHRbZW50cnkubmFtZV0sIGVudHJ5LmZlYXR1cmVzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gZ2V0RGVsYXlDb21wZW5zYXRpb24oKSB7XHJcbiAgICAgICAgICAgIHZhciBzdW0gPSAwO1xyXG4gICAgICAgICAgICBwbHVnaW5fbGlzdC5maWx0ZXIoZnVuY3Rpb24ocGx1Z2luKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gIXBsdWdpbi5pc0J5cGFzc2VkKCk7XHJcbiAgICAgICAgICAgIH0pLmZvckVhY2goZnVuY3Rpb24ocGx1Z2luKSB7XHJcbiAgICAgICAgICAgICAgICBzdW0gKz0gcGx1Z2luLm5vZGUucHJvY2Vzc2luZ0RlbGF5QXNTYW1wbGVzO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIHN1bTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHVwZGF0ZURlbGF5Q29tcGVuc2F0aW9uKCkge1xyXG4gICAgICAgICAgICB2YXIgc3VtID0gZ2V0RGVsYXlDb21wZW5zYXRpb24oKTtcclxuICAgICAgICAgICAgaWYgKGRlbGF5U2FtcGxlcyAhPSBzdW0pIHtcclxuICAgICAgICAgICAgICAgIGRlbGF5U2FtcGxlcyA9IHN1bTtcclxuICAgICAgICAgICAgICAgIGV2ZW50VGFyZ2V0LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiYWx0ZXJkZWxheVwiKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGRlbGF5U2FtcGxlcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcclxuICAgICAgICAgICAgJ2NoYWluU3RhcnQnOiB7XHJcbiAgICAgICAgICAgICAgICAndmFsdWUnOiBjaGFpblN0YXJ0XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICdjaGFpblN0b3AnOiB7XHJcbiAgICAgICAgICAgICAgICAndmFsdWUnOiBjaGFpblN0b3BcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJ1cGRhdGVEZWxheUNvbXBlbnNhdGlvblwiOiB7XHJcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdXBkYXRlRGVsYXlDb21wZW5zYXRpb24oKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJwcm9jZXNzaW5nRGVsYXlBc1NhbXBsZXNcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJnZXRcIjogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVwZGF0ZURlbGF5Q29tcGVuc2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXCJzZXRcIjogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3coXCJwcm9jZXNzaW5nRGVsYXlBc1NhbXBsZXMgaXMgcmVhZC1vbmx5XCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcInByb2Nlc3NpbmdEZWxheUFzU2Vjb25kc1wiOiB7XHJcbiAgICAgICAgICAgICAgICBcImdldFwiOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9jZXNzaW5nRGVsYXlBc1NhbXBsZXMvUGx1Z2luRmFjdG9yeS5jb250ZXh0LnNhbXBsZVJhdGU7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXCJzZXRcIjogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3coXCJwcm9jZXNzaW5nRGVsYXlBc1NlY29uZHMgaXMgcmVhZC1vbmx5XCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAnbmFtZSc6IHtcclxuICAgICAgICAgICAgICAgICdnZXQnOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhY3RvcnlOYW1lO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICdzZXQnOiBmdW5jdGlvbiAobmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbmFtZSA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmYWN0b3J5TmFtZSA9IG5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWN0b3J5TmFtZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgJ3JlY3Vyc2l2ZVByb2Nlc3NpbmcnOiB7XHJcbiAgICAgICAgICAgICAgICAnZ2V0JzogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZWN1cnNpdmVQcm9jZXNzaW5nO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAnaGFuZGxlRXZlbnQnOiB7XHJcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZS50eXBlID09IFwiYWx0ZXJkZWxheVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZURlbGF5Q29tcGVuc2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcImFkZEV2ZW50TGlzdGVuZXJcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbihrZXksIHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGV2ZW50VGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoa2V5LCB2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwicmVtb3ZlRXZlbnRMaXN0ZW5lclwiOiB7XHJcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZXZlbnRUYXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihrZXksIHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgTWlkaVN5bnRoZXNpc2VySG9zdCA9IGZ1bmN0aW9uKGZhY3RvcnkpIHtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgZnVuY3Rpb24gYnVpbGROZXdTeW50aGVzaXNlck9iamVjdChwcm90b3R5cGVPYmplY3QpIHtcclxuICAgICAgICAgICAgaWYgKG1pZGlTeW50aFNsb3QpIHtcclxuICAgICAgICAgICAgICAgIGZhY3RvcnkuZGVsZXRlUGx1Z2luKG1pZGlTeW50aFNsb3QuaWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICAgICAgICAgIGlmIChwcm90b3R5cGVPYmplY3QuaGFzTWlkaUlucHV0ID09IGZhbHNlIHx8IHByb3RvdHlwZU9iamVjdC5oYXNNaWRpT3V0cHV0ID09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QgKFwiUHJvdG90eXBlIGlzIG5vdCBhIE1pZGlTeW50aGVzaXMgdHlwZS4gaGFzTWlkaUlucHV0IG11c3QgYmUgdHJ1ZSBhbmQgaGFzTWlkaU91dHB1dCBtdXN0IGJlIGZhbHNlXCIpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHByb3RvdHlwZU9iamVjdCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvdG90eXBlT2JqZWN0LmNyZWF0ZVBsdWdpbkluc3RhbmNlKHNlbGYsIGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24obm9kZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKG5vZGUsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ1RyYWNrRGF0YSc6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBzZWxmLlRyYWNrRGF0YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5vZGU7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgbWlkaVN5bnRoU2xvdDtcclxuICAgICAgICB2YXIgY29ubmVjdGlvbnMgPSBbXTtcclxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XHJcbiAgICAgICAgICAgIFwiY29ubmVjdFwiOiB7XHJcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKGRlc3RpbmF0aW9uTm9kZSwgb3V0cHV0LCBpbnB1dCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkZXN0aW5hdGlvbk5vZGUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyAoXCJNdXN0IGRlZmluZSBhbiBBdWRpb05vZGUgb2JqZWN0XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB2YXIgZXhpc3RzID0gY29ubmVjdGlvbnMuZmluZChmdW5jdGlvbihjb25uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjb25uLmRlc3RpbmF0aW9uTm9kZSA9PSBkZXN0aW5hdGlvbk5vZGUgJiYgY29ubi5vdXRwdXQgPT0gb3V0cHV0ICYmIGNvbm4uaW5wdXQgPT0gaW5wdXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV4aXN0cykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29ubmVjdGlvbnMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbk5vZGU6ZGVzdGluYXRpb25Ob2RlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0Om91dHB1dCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OmlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAobWlkaVN5bnRoU2xvdCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIk1JREkgU3ludGhlc2lzZXIgaXMgbm90IGxvYWRlZCwgY29ubmVjdGlvbnMgd2lsbCBiZSB2YWxpZGF0ZWQgb24gbG9hZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtaWRpU3ludGhTbG90Lm5vZGUuY29ubmVjdChkZXN0aW5hdGlvbk5vZGUsIG91dHB1dCwgaW5wdXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJkaXNjb25uZWN0XCI6IHtcclxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24oZGVzdGluYXRpb25Ob2RlLCBvdXRwdXQsIGlucHV0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRlc3RpbmF0aW9uTm9kZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtaWRpU3ludGhTbG90KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaWRpU3ludGhTbG90LmRpc2Nvbm5lY3QoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25uZWN0aW9ucyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgZGVzdGluYXRpb25Ob2RlID09IFwibnVtYmVyXCIgJiYgdHlwZW9mIG91dHB1dCA9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dCA9IGRlc3RpbmF0aW9uTm9kZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzdGluYXRpb25Ob2RlID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25uZWN0aW9ucyA9IGNvbm5lY3Rpb25zLmZpbHRlcihmdW5jdGlvbihjb25uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29ubi5vdXRwdXQgPT0gb3V0cHV0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1pZGlTeW50aFNsb3QpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWlkaVN5bnRoU2xvdC5ub2RlLmRpc2Nvbm5lY3QoY29ubi5kZXN0aW5hdGlvbk5vZGUsIGNvbm4ub3V0cHV0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgZGVzdGluYXRpb25Ob2RlID09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG91dHB1dCA9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbm5lY3Rpb25zID0gY29ubmVjdGlvbnMuZmlsdGVyKGZ1bmN0aW9uKGNvbm4pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb25uLmRlc3RpbmF0aW9uTm9kZSA9PSBkZXN0aW5hdGlvbk5vZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobWlkaVN5bnRoU2xvdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaWRpU3ludGhTbG90Lm5vZGUuZGlzY29ubmVjdChjb25uLmRlc3RpbmF0aW9uTm9kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGRlc3RpbmF0aW9uTm9kZSA9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvdXRwdXQgPT0gXCJudW1iZXJcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25uZWN0aW9ucyA9IGNvbm5lY3Rpb25zLmZpbHRlcihmdW5jdGlvbihjb25uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29ubi5kZXN0aW5hdGlvbk5vZGUgPT0gZGVzdGluYXRpb25Ob2RlICYmIGNvbm4ub3V0cHV0ID09IG91dHB1dCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtaWRpU3ludGhTbG90KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pZGlTeW50aFNsb3Qubm9kZS5kaXNjb25uZWN0KGNvbm4uZGVzdGluYXRpb25Ob2RlLCBjb25uLm91dHB1dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGRlc3RpbmF0aW9uTm9kZSA9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvdXRwdXQgPT0gXCJudW1iZXJcIiAmJiB0eXBlb2YgaW5wdXQgPT0gXCJudW1iZXJcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25uZWN0aW9ucyA9IGNvbm5lY3Rpb25zLmZpbHRlcihmdW5jdGlvbihjb25uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29ubi5kZXN0aW5hdGlvbk5vZGUgPT0gZGVzdGluYXRpb25Ob2RlICYmIGNvbm4ub3V0cHV0ID09IG91dHB1dCAmJiBjb25uLmlucHV0ID09IGlucHV0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1pZGlTeW50aFNsb3QpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWlkaVN5bnRoU2xvdC5ub2RlLmRpc2Nvbm5lY3QoY29ubi5kZXN0aW5hdGlvbk5vZGUsIGNvbm4ub3V0cHV0LCBjb25uLmlucHV0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcInNjaGVkdWxlRXZlbnRcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbihtc2csIHQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobWlkaVN5bnRoU2xvdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtaWRpU3ludGhTbG90Lm5vZGUuc2NoZWR1bGVFdmVudChtc2csIHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93KFwiTUlESSBTeW50aGVzaXNlciBub3QgbG9hZGVkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJjYW5jZWxBbGxFdmVudHNcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1pZGlTeW50aFNsb3QpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWlkaVN5bnRoU2xvdC5ub2RlLmNhbmNlbEFsbEV2ZW50cyh0KTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyhcIk1JREkgU3ludGhlc2lzZXIgbm90IGxvYWRlZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwibWlkaVN5bnRoZXNpc2VyXCI6IHtcclxuICAgICAgICAgICAgICAgIFwiZ2V0XCI6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWlkaVN5bnRoU2xvdDtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBcInNldFwiOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyhcIkNhbm5vdCBzZXQgcmVhZC1vbmx5IGF0dHJpYnV0ZS5cIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwibG9hZE1pZGlTeW50aGVzaXNlck1vZHVsZVwiOiB7XHJcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKHByb3RvdHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm90b3R5cGUuaGFzTWlkaUlucHV0ID09IGZhbHNlIHx8IHByb3RvdHlwZS5oYXNNaWRpT3V0cHV0ID09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdCAoXCJQcm90b3R5cGUgaXMgbm90IGEgTWlkaVN5bnRoZXNpcyB0eXBlLiBoYXNNaWRpSW5wdXQgbXVzdCBiZSB0cnVlIGFuZCBoYXNNaWRpT3V0cHV0IG11c3QgYmUgZmFsc2VcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHByb3RvdHlwZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uKHByb3RvdHlwZU9iamVjdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYnVpbGROZXdTeW50aGVzaXNlck9iamVjdC5jYWxsKHNlbGYsIHByb3RvdHlwZU9iamVjdCkuY2F0Y2goZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyhcIlBsdWdpbiBkaWQgbm90IGdldCBjcmVhdGVkISBBYm9ydGluZ1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbihub2RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUubm9kZS5vbmxvYWRlZC5jYWxsKG5vZGUubm9kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pZGlTeW50aFNsb3QgPSBub2RlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25uZWN0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uKGNvbm4pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pZGlTeW50aFNsb3Qubm9kZS5jb25uZWN0KGNvbm4uZGVzdGluYXRpb25Ob2RlLCBjb25uLm91dHB1dCwgY29ubi5pbnB1dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWlkaVN5bnRoU2xvdDtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgdmFyIFBsdWdpblVzZXJJbnRlcmZhY2VNZXNzYWdlSHViID0gKGZ1bmN0aW9uKGZhY3Rvcnkpe1xyXG4gICAgICAgIGZ1bmN0aW9uIGJ1aWxkUGx1Z2luSW50ZXJmYWNlKHBsdWdpbl9vYmplY3QsIGludGVyZmFjZV9vYmplY3QpIHtcclxuICAgICAgICAgICAgdmFyIGlmcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpZnJhbWVcIik7XHJcbiAgICAgICAgICAgIGlmcmFtZS5zcmMgPSBpbnRlcmZhY2Vfb2JqZWN0LnNyYztcclxuICAgICAgICAgICAgaWYgKGludGVyZmFjZV9vYmplY3Qud2lkdGgpIHtcclxuICAgICAgICAgICAgICAgIGlmcmFtZS53aWR0aCA9IGludGVyZmFjZV9vYmplY3Qud2lkdGg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGludGVyZmFjZV9vYmplY3QuaGVpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICBpZnJhbWUuaGVpZ2h0ID0gaW50ZXJmYWNlX29iamVjdC5oZWlnaHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWZyYW1lLnN0eWxlLmJvcmRlciA9IFwiMFwiO1xyXG4gICAgICAgICAgICByZXR1cm4gaWZyYW1lO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiBzZXREZWZhdWx0SW50ZXJmYWNlKHVybCwgd2lkdGgsIGhlaWdodCkge1xyXG4gICAgICAgICAgICBkZWZhdWx0X2ludGVyZmFjZSA9IHtcclxuICAgICAgICAgICAgICAgIHVybDogdXJsLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IHdpZHRoLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBoZWlnaHRcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgcmV0dXJuIGRlZmF1bHRfaW50ZXJmYWNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiBwb2xsQWxsUGx1Z2lucygpIHtcclxuICAgICAgICAgICAgZmFjdG9yeS5nZXRBbGxQbHVnaW5zKCkuZm9yRWFjaChmdW5jdGlvbihwbHVnaW4pIHtcclxuICAgICAgICAgICAgICAgIHBsdWdpbi5ub2RlLmV4dGVybmFsSW50ZXJmYWNlLnVwZGF0ZUludGVyZmFjZXModHJ1ZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGxpc3RlbmVyID0gZmFsc2U7XHJcbiAgICAgICAgdmFyIGRlZmF1bHRfaW50ZXJmYWNlID0ge1xyXG4gICAgICAgICAgICBzcmM6IFwianNhcF9kZWZhdWx0Lmh0bWxcIlxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJldHVybiBPYmplY3QuY3JlYXRlKHtcclxuICAgICAgICAgICAgXCJzZXREZWZhdWx0SW50ZXJmYWNlXCI6IHNldERlZmF1bHRJbnRlcmZhY2UsXHJcbiAgICAgICAgICAgIFwiYnVpbGRQbHVnaW5JbnRlcmZhY2VcIjpidWlsZFBsdWdpbkludGVyZmFjZSxcclxuICAgICAgICAgICAgXCJwb2xsQWxsUGx1Z2luc1wiOiBwb2xsQWxsUGx1Z2luc1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSkodGhpcyk7XHJcblxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xyXG4gICAgICAgIFwiY29udGV4dFwiOiB7XHJcbiAgICAgICAgICAgIFwidmFsdWVcIjogYXVkaW9fY29udGV4dFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJoYXNBdWRpb1N0YXJ0ZWRcIjoge1xyXG4gICAgICAgICAgICBcImdldFwiOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBhdWRpb1N0YXJ0ZWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFwicGx1Z2luUm9vdFVSTFwiOiB7XHJcbiAgICAgICAgICAgIFwiZ2V0XCI6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByb290VVJMO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcInNldFwiOiBmdW5jdGlvbiAodCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0ID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcm9vdFVSTCA9IHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJvb3RVUkw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aHJvdyAoXCJDYW5ub3Qgc2V0IHJvb3QgVVJMIHdpdGhvdXQgYSBzdHJpbmdcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiY3JlYXRlRmFjdG9yeUNvcHlcIjoge1xyXG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uIChjb250ZXh0KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY29weUZhY3RvcnkoY29udGV4dCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFwic3ViRmFjdG9yaWVzXCI6IHtcclxuICAgICAgICAgICAgXCJnZXRcIjogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc3ViRmFjdG9yaWVzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIlBsdWdpbkdVSVwiOiB7XHJcbiAgICAgICAgICAgIFwidmFsdWVcIjogUGx1Z2luVXNlckludGVyZmFjZU1lc3NhZ2VIdWJcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IHtCYXNlUGx1Z2luLCBTeW50aGVzaXNlckJhc2VQbHVnaW4sIFBsdWdpbkZhY3Rvcnl9O1xyXG4iLCIvKiBqc2hpbnQgZXN2ZXJzaW9uOiA2ICovXHJcbmltcG9ydCB7QmFzZVBsdWdpbn0gZnJvbSBcIi4vYmFzZV9wbHVnaW5cIjtcclxuXHJcbnZhciBTeW50aGVzaXNlckJhc2VQbHVnaW4gPSBmdW5jdGlvbihmYWN0b3J5LCBvd25lcilcclxue1xyXG4gICAgdmFyIGhhc1dhcm5lZFNjaGVkdWxlTm90U2V0ID0gZmFsc2U7XHJcbiAgICB2YXIgaGFzV2FybmVkQ2FuY2VsTm90U2V0ID0gZmFsc2U7XHJcbiAgICBCYXNlUGx1Z2luLmNhbGwodGhpcywgZmFjdG9yeSwgb3duZXIpO1xyXG5cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcclxuICAgICAgICBcImFkZElucHV0XCI6IHtcclxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHRocm93KFwiQ2Fubm90IGFkZCBpbnB1dCB0byB0eXBlIFxcXCJTeW50aGVzaXNlckJhc2VQbHVnaW5cXFwiXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImRlbGV0ZUlucHV0XCI6IHtcclxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHRocm93KFwiQ2Fubm90IGRlbGV0ZSBpbnB1dCB0byB0eXBlIFxcXCJTeW50aGVzaXNlckJhc2VQbHVnaW5cXFwiXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcInNjaGVkdWxlRXZlbnRcIjoge1xyXG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uIChtc2csIGNvbnRleHRUaW1lKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWhhc1dhcm5lZFNjaGVkdWxlTm90U2V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuaW5nKFwiV0FSTklORyAtIC5zY2hlZHVsZUV2ZW50IGlzIG5vdCBvdmVycmlkZGVuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGhhc1dhcm5lZFNjaGVkdWxlTm90U2V0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJ3cml0YWJsZVwiOiB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImNhbmNlbEFsbEV2ZW50c1wiOiB7XHJcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWhhc1dhcm5lZENhbmNlbE5vdFNldCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybmluZyhcIldBUk5JTkcgLSAuY2FuY2VsQWxsRXZlbnRzIGlzIG5vdCBvdmVycmlkZGVuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGhhc1dhcm5lZENhbmNlbE5vdFNldCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwid3JpdGFibGVcIjogdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59O1xyXG5TeW50aGVzaXNlckJhc2VQbHVnaW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShCYXNlUGx1Z2luLnByb3RvdHlwZSk7XHJcblN5bnRoZXNpc2VyQmFzZVBsdWdpbi5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBTeW50aGVzaXNlckJhc2VQbHVnaW47XHJcblxyXG5leHBvcnQge1N5bnRoZXNpc2VyQmFzZVBsdWdpbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=