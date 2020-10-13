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

/***/ "./src/BasePlugin/AssetPackSelectorInterface.js":
/*!******************************************************!*\
  !*** ./src/BasePlugin/AssetPackSelectorInterface.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AssetPackSelectorInterface; });
/* jshint esversion: 6 */

function AssetPackSelectorInterface(plugin, factory, parameterName, visibleName, exposed) {
    var packSelector = factory.pluginAssets.createAssetPackSelector(plugin, factory.pluginAssets.assetPacks[0]);
    var listParameter = plugin.parameters.createListParameter(parameterName, factory.pluginAssets.assetPacks[0].name, factory.pluginAssets.assetPacks.map(p=>p.name), undefined, visibleName, exposed);
    listParameter.trigger = function() {
        var pack = factory.pluginAssets.assetPacks.find(p => listParameter.value == p.name);
        packSelector.selectPack(pack);
    };

    Object.defineProperties(this, {
        "parameter": {
            "value": listParameter
        },
        "availablePacks": {
            "get": function () {return factory.pluginAssets.assetPacks;}
        },
        "selectPack": {
            "value": function(pack) {
                return (listParameter.value = pack);
            }
        },
        "selectedPack": {
            "get": function () {return listParameter.value;}
        },
        "loadAssets": {
            "value": packSelector.loadAssets
        },
        "allAssetsLoaded": {
            "value": packSelector.allAssetsLoaded
        },
        "fetchAssetByName": {
            "value": packSelector.fetchAssetByName
        },
        "waitForAssets": {
            "value": packSelector.waitForAssets
        },
        'value': {
            "get": function () {return listParameter.value;},
            "set": function(s) {return (listParameter.value = s);}
        },
        "onload": {
            "get": function() {return packSelector.onload;},
            "set": function(f) {return (packSelector.onload = f);}
        },
        "onerror": {
            "get": function() {return packSelector.onerror;},
            "set": function(f) {return (packSelector.onerror = f);}
        }
    });
}


/***/ }),

/***/ "./src/BasePlugin/LinkedStoreInterface.js":
/*!************************************************!*\
  !*** ./src/BasePlugin/LinkedStoreInterface.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LinkedStoreInterface; });
/* jshint esversion: 6 */

function LinkedStoreInterface(owner, linkedStore) {
    function onaltered(e) {
        var term = e.detail.term;
        var value = e.detail.value;
        if (listeners[term] && typeof listeners[term] == "function") {
            listeners[term].call(owner, value);
        }
    }

    var listeners = {};

    linkedStore.addEventListener("altered", onaltered);

    Object.defineProperties(this, {
        "destroy": {
            "value": function () {
                linkedStore.removeEventListener("altered", onaltered);
            }
        },
        "requestTerm": {
            "value": function (term) {
                return linkedStore.getTerm(term);
            }
        },
        "listenForTerm": {
            "value": function(term, callback) {
                if (listeners.hasOwnProperty(term)) {
                    throw "Listener already exists";
                }
                listeners[term] = callback;
            }
        },
        "releaseListenerForTerm": {
            "value": function(term) {
                listeners[term] = undefined;
            }
        }
    });
}


/***/ }),

/***/ "./src/BasePlugin/PluginFeatureInterface/PluginFeatureInterfaceReceiver.js":
/*!*********************************************************************************!*\
  !*** ./src/BasePlugin/PluginFeatureInterface/PluginFeatureInterfaceReceiver.js ***!
  \*********************************************************************************/
/*! exports provided: PluginFeatureInterfaceReceiver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PluginFeatureInterfaceReceiver", function() { return PluginFeatureInterfaceReceiver; });
/* jshint esversion: 6 */
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




/***/ }),

/***/ "./src/BasePlugin/PluginFeatureInterface/PluginFeatureInterfaceSender.js":
/*!*******************************************************************************!*\
  !*** ./src/BasePlugin/PluginFeatureInterface/PluginFeatureInterfaceSender.js ***!
  \*******************************************************************************/
/*! exports provided: PluginFeatureInterfaceSender */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PluginFeatureInterfaceSender", function() { return PluginFeatureInterfaceSender; });
/* jshint esversion: 6 */

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




/***/ }),

/***/ "./src/BasePlugin/PluginFeatureInterface/index.js":
/*!********************************************************!*\
  !*** ./src/BasePlugin/PluginFeatureInterface/index.js ***!
  \********************************************************/
/*! exports provided: PluginFeatureInterface */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PluginFeatureInterface", function() { return PluginFeatureInterface; });
/* harmony import */ var _PluginFeatureInterfaceReceiver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PluginFeatureInterfaceReceiver */ "./src/BasePlugin/PluginFeatureInterface/PluginFeatureInterfaceReceiver.js");
/* harmony import */ var _PluginFeatureInterfaceSender__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PluginFeatureInterfaceSender */ "./src/BasePlugin/PluginFeatureInterface/PluginFeatureInterfaceSender.js");
/*jshint esversion: 6 */



var PluginFeatureInterface = function (BasePluginInstance) {
    this.plugin = BasePluginInstance;
    this.Receiver = new _PluginFeatureInterfaceReceiver__WEBPACK_IMPORTED_MODULE_0__["PluginFeatureInterfaceReceiver"](this, BasePluginInstance.factory.FeatureMap);
    this.Sender = new _PluginFeatureInterfaceSender__WEBPACK_IMPORTED_MODULE_1__["PluginFeatureInterfaceSender"](this, BasePluginInstance.factory.FeatureMap);

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




/***/ }),

/***/ "./src/BasePlugin/PluginInterfaceMessageHub.js":
/*!*****************************************************!*\
  !*** ./src/BasePlugin/PluginInterfaceMessageHub.js ***!
  \*****************************************************/
/*! exports provided: PluginInterfaceMessageHub */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PluginInterfaceMessageHub", function() { return PluginInterfaceMessageHub; });
/* jshint esversion: 6 */
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
            O[name].name = name;
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

    function broadcastStateChange(level, term, value) {
        var msg = {
            message: "updateState",
            level: level,
            term: term,
            value: value
        };
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
    var eventTarget = new EventTarget();
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
                        broadcastParameterUpdates(e.data.sender_id, [e.data.parameter.name]);
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
            case "requestSessionState":
                broadcastStateChange("session", e.data.term, owner.sessionDataInterface.requestTerm(e.data.term));
                break;
            case "requestTrackState":
                broadcastStateChange("track", e.data.term, owner.trackDataInterface.requestTerm(e.data.term));
                break;
            case "requestUserState":
                broadcastStateChange("user", e.data.term, owner.userDataInterface.requestTerm(e.data.term));
                break;
            case "requestPluginState":
                broadcastStateChange("plugin", e.data.term, owner.pluginDataInterface.requestTerm(e.data.term));
                break;
            case "customMessage":
                break;
            default:
                throw("Unknown message type \""+e.data.message+"\"");
        }
    });

    Object.defineProperties(this, {
        "addEventListener": {
            "value": function(a,b,c) {
                return eventTarget.addEventListener(a,b,c);
            }
        },
        "removeEventListener": {
            "value": function(a,b,c) {
                return eventTarget.removeEventListener(a,b,c);
            }
        },
        "sendState": {
            "value": function(level, term) {
                if (level == "session") {
                    broadcastStateChange("session", term, owner.sessionDataInterface.requestTerm(term));
                } else if (level == "track") {
                    broadcastStateChange("track", term, owner.trackDataInterface.requestTerm(term));
                } else if (level == "user") {
                    broadcastStateChange("user", term, owner.userDataInterface.requestTerm(term));
                } else if (level == "plugin") {
                    broadcastStateChange("plugin", term, owner.pluginDataInterface.requestTerm(term));
                } else {
                    throw "Invalid state level option";
                }
            }
        },
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
                w.pluginInstance = owner;
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

/***/ "./src/BasePlugin/PluginUserInterface/index.js":
/*!*****************************************************!*\
  !*** ./src/BasePlugin/PluginUserInterface/index.js ***!
  \*****************************************************/
/*! exports provided: PluginUserInterface */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PluginUserInterface", function() { return PluginUserInterface; });
/* jshint esversion: 6 */

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




/***/ }),

/***/ "./src/BasePlugin/index.js":
/*!*********************************!*\
  !*** ./src/BasePlugin/index.js ***!
  \*********************************/
/*! exports provided: BasePlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasePlugin", function() { return BasePlugin; });
/* harmony import */ var _parameterManager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parameterManager.js */ "./src/BasePlugin/parameterManager.js");
/* harmony import */ var _PluginInterfaceMessageHub_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PluginInterfaceMessageHub.js */ "./src/BasePlugin/PluginInterfaceMessageHub.js");
/* harmony import */ var _PluginFeatureInterface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PluginFeatureInterface */ "./src/BasePlugin/PluginFeatureInterface/index.js");
/* harmony import */ var _PluginUserInterface__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PluginUserInterface */ "./src/BasePlugin/PluginUserInterface/index.js");
/* harmony import */ var _LinkedStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../LinkedStore */ "./src/LinkedStore.js");
/* harmony import */ var _LinkedStoreInterface__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LinkedStoreInterface */ "./src/BasePlugin/LinkedStoreInterface.js");
/* harmony import */ var _AssetPackSelectorInterface__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./AssetPackSelectorInterface */ "./src/BasePlugin/AssetPackSelectorInterface.js");
// Add getInputs to all AudioNodes to ease deployment
/*globals AudioNode, Worker, console, window, document, Promise, XMLHttpRequest */
/*eslint-env browser */
/*jshint esversion: 6 */








if (typeof AudioNode === "function" && window.importScripts === undefined) {
    AudioNode.prototype.getInputs = function () {
        return [this];
    };
}

var BasePlugin = function(factory, owner) {
    var inputList = [],
        outputList = [],
        pOwner = owner,
        delaySamples = 0,
        eventTarget = new EventTarget(),
        externalInterface = new _PluginInterfaceMessageHub_js__WEBPACK_IMPORTED_MODULE_1__["PluginInterfaceMessageHub"](this);
    if (this.context === undefined) {
        this.context = factory.context;
    }
    if (this.factory === undefined) {
        this.factory = factory;
    }
    this.featureMap = new _PluginFeatureInterface__WEBPACK_IMPORTED_MODULE_2__["PluginFeatureInterface"](this);
    this.parameters = new _parameterManager_js__WEBPACK_IMPORTED_MODULE_0__["ParameterManager"](this, externalInterface);
    this.parameters.addEventListener("parameterset", function(e) {
        eventTarget.dispatchEvent(new CustomEvent("parameterset", {detail: e.detail}));
    });
    this.addAssetPackInterface = function(parameterName, visibleName, exposed) {
        return new _AssetPackSelectorInterface__WEBPACK_IMPORTED_MODULE_6__["default"](this, factory, parameterName, visibleName, exposed);
    };

    this.PluginData = new _LinkedStore__WEBPACK_IMPORTED_MODULE_4__["default"]("Plugin");

    this.sessionDataInterface = new _LinkedStoreInterface__WEBPACK_IMPORTED_MODULE_5__["default"](this, factory.SessionData);
    this.userDataInterface = new _LinkedStoreInterface__WEBPACK_IMPORTED_MODULE_5__["default"](this, factory.UserData);
    this.trackDataInterface = new _LinkedStoreInterface__WEBPACK_IMPORTED_MODULE_5__["default"](this, owner.TrackData);
    this.pluginDataInterface = new _LinkedStoreInterface__WEBPACK_IMPORTED_MODULE_5__["default"](this, this.PluginData);

    this.delete = function() {
        this.sessionDataInterface.destroy();
        this.userDataInterface.destroy();
        this.trackDataInterface.destroy();
        this.pluginDataInterface.destroy();
        if (this.deconstruct && typeof this.deconstruct == "function") {
            this.deconstruct();
        }
    };

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




/***/ }),

/***/ "./src/BasePlugin/parameterManager.js":
/*!********************************************!*\
  !*** ./src/BasePlugin/parameterManager.js ***!
  \********************************************/
/*! exports provided: ParameterManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParameterManager", function() { return ParameterManager; });
/* harmony import */ var _parameters_NumberParameter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parameters/NumberParameter.js */ "./src/BasePlugin/parameters/NumberParameter.js");
/* harmony import */ var _parameters_StringParameter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parameters/StringParameter.js */ "./src/BasePlugin/parameters/StringParameter.js");
/* harmony import */ var _parameters_ButtonParameter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parameters/ButtonParameter.js */ "./src/BasePlugin/parameters/ButtonParameter.js");
/* harmony import */ var _parameters_SwitchParameter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parameters/SwitchParameter.js */ "./src/BasePlugin/parameters/SwitchParameter.js");
/* harmony import */ var _parameters_ListParameter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./parameters/ListParameter.js */ "./src/BasePlugin/parameters/ListParameter.js");
/* harmony import */ var _parameters_URLParameter_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./parameters/URLParameter.js */ "./src/BasePlugin/parameters/URLParameter.js");
/* harmony import */ var _parameters_AssetParameter_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./parameters/AssetParameter.js */ "./src/BasePlugin/parameters/AssetParameter.js");
/* jshint esversion: 6 */








var ParameterManager = function (owner, pluginExternalInterface, name, exposed) {
    var parameterList = [];
    var eventTarget = new EventTarget();
    if (name == undefined) {
        name = "default";
    }
    if (exposed == undefined || name == "default") {
        exposed = true;
    }

    function findParameter(self, name) {
        name = name.replace("/", "_").split(".").reverse();
        var base = parameterList;
        var lowerCaseParameterNames = parameterList.map(i => i.name.toLowerCase());
        var param = parameterList[lowerCaseParameterNames.indexOf(name.pop().toLowerCase())];
        if (param.hasOwnProperty("getParameterByName")) {
            return param.getParameterByName(name.reverse().join("."));
        } else {
            return param;
        }
        // return name.split(".").reduce(function(base, name) {
        //     return base[name] || base[name.toLowerCase()];
        // }, self);
    }

    function isParameterNameAvailable(self, name) {
        name = name.toLowerCase();
        name = name.replace("/", "_");
        if (!/^\w+( \w+)*(-\w+)*(_\w+)*$/.test(name)) {
            console.warn("Invalid string for name", name, "Will not expose as dot notations");
            return true;
        }
        if (self.hasOwnProperty(name)) {
            throw "Name is reserved or already defined";
        }
        return true;
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
        if (param.name.includes(".")) {
            throw("Name cannot include a period");
        }
        var exists = parameterList.findIndex(function (e) {
            return e === param;
        }, param);
        if (exists === -1) {
            Object.defineProperty(self, param.name, {
                value: param
            });
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
                if (isParameterNameAvailable(this, name)) {
                    var param = new _parameters_NumberParameter_js__WEBPACK_IMPORTED_MODULE_0__["NumberParameter"](owner, name, defaultValue, minimum, maximum, toStringFunc, visibleName, exposed);
                    addParameter(param, this);
                    param.addEventListener("parameterset", this);
                    return param;
                }

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
                if (isParameterNameAvailable(this, name)) {
                    var param = new _parameters_StringParameter_js__WEBPACK_IMPORTED_MODULE_1__["StringParameter"](owner, name, defaultValue, maxLength, toStringFunc, visibleName, exposed);
                    addParameter(param, this);
                    param.addEventListener("parameterset", this);
                    return param;
                }
            }
        },
        'createButtonParameter': {
            "value": function (name) {
                if (typeof name !== "string") {
                    throw ("Invalid constructor");
                }
                if (isParameterNameAvailable(this, name)) {
                    var param = new _parameters_ButtonParameter_js__WEBPACK_IMPORTED_MODULE_2__["ButtonParameter"](owner, name);
                    addParameter(param, this);
                    param.addEventListener("parameterset", this);
                    return param;
                }
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
                if (isParameterNameAvailable(this, name)) {
                    var param = new _parameters_SwitchParameter_js__WEBPACK_IMPORTED_MODULE_3__["SwitchParameter"](owner, name, defaultValue, minState, maxState, toStringFunc, visibleName, exposed);
                    addParameter(param, this);
                    param.addEventListener("parameterset", this);
                    return param;
                }

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
                if (isParameterNameAvailable(this, name)) {
                    var param = new _parameters_ListParameter_js__WEBPACK_IMPORTED_MODULE_4__["ListParameter"](owner, name, defaultValue, listOfValues, toStringFunc, visibleName, exposed);
                    addParameter(param, this);
                    param.addEventListener("parameterset", this);
                    return param;
                }
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
                if (isParameterNameAvailable(this, name)) {
                    var param = new _parameters_URLParameter_js__WEBPACK_IMPORTED_MODULE_5__["URLParameter"](owner, name, defaultValue, maxLength, toStringFunc, visibleName, exposed);
                    addParameter(param, this);
                    param.addEventListener("parameterset", this);
                    return param;
                }
            }
        },
        'createAssetParameter': {
            "value": function (resourceType, name, defaultValue, visibleName, exposed) {
                if (typeof name !== "string") {
                    throw ("Invlid constructor");
                }
                if (isParameterNameAvailable(this, name)) {
                    var param = new _parameters_AssetParameter_js__WEBPACK_IMPORTED_MODULE_6__["AssetParameter"](owner, resourceType, name, defaultValue, visibleName, exposed);
                    addParameter(param, this);
                    param.addEventListener("parameterset", this);
                    return param;
                }
            }
        },
        'createParameterManager': {
            "value": function(name) {
                if (isParameterNameAvailable(this, name)) {
                    var param = new ParameterManager(owner, pluginExternalInterface, name);
                    addParameter(param, this);
                    return param;
                }
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
                return findParameter(this, name);
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
                    if (p.constructor == this.constructor) {
                        return p.getParameterNames().map(function(p) {
                            return this.name + "." + p;
                        }, p).flat();
                    } else {
                        return p.name;
                    }
                }, this).flat();
            }
        },
        'setParameterByName': {
            'value': function (n, v, updateInterfaces) {
                var parameter = findParameter(this, n);
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
        'toJSON': {
            "value": function () {
                return parameterList.filter(function(p) {
                    return p.exposed;
                }).reduce(function (obj, e) {
                    if (e.hasOwnProperty("toJSON")) {
                        obj[e.name] = e.toJSON();
                    } else if (e.hasOwnProperty("getParameterObject")) {
                        obj[e.name] = e.getParameterObject();
                    }else if (e.hasOwnProperty("toString")) {
                        obj[e.name] = e.toString();
                    } else if (e.hasOwnProperty("value")) {
                        obj[e.name] = e.value;
                    }
                    return obj;
                }, {});
            }
        },
        'parameters': {
            'get': function () {
                return buildParameterObject();
            },
            'set': function () {
                throw ("Cannot set, use .setParameterBy...()");
            }
        },
        "exposed": {
            "get": function () {
                return exposed;
            }
        },
        "name": {
            "get": function () {
                return name;
            }
        }
    });
};




/***/ }),

/***/ "./src/BasePlugin/parameters/AssetParameter.js":
/*!*****************************************************!*\
  !*** ./src/BasePlugin/parameters/AssetParameter.js ***!
  \*****************************************************/
/*! exports provided: AssetParameter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetParameter", function() { return AssetParameter; });
/* harmony import */ var _PluginParameter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PluginParameter.js */ "./src/BasePlugin/parameters/PluginParameter.js");
/* harmony import */ var _ListParameter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ListParameter.js */ "./src/BasePlugin/parameters/ListParameter.js");
/* jshint esversion: 6 */



function AssetParameter(owner, resourceType, name, visibleName, exposed) {
    _PluginParameter_js__WEBPACK_IMPORTED_MODULE_0__["PluginParameter"].call(this, owner, name, "String", visibleName, exposed);
    var resourceOptions = owner.factory.pluginAssets.assetPacks.filter(function(pack) {
        return pack.resourceType == resourceType;
    }).map(function(pack) {return pack.assetObjects;}).flat();
    var assetList = new _ListParameter_js__WEBPACK_IMPORTED_MODULE_1__["ListParameter"](owner, name+" list", resourceOptions[0], resourceOptions, function(v){return v.url;}, name+" list", false);
    var audioBuffer, onloadCallback, onerrorCallback;

    function loadAsset() {
        assetList.value.fetch()
        .then(function(buffer) {
            audioBuffer = buffer;
            if (typeof onloadCallback == "function") {
                onloadCallback(buffer);
            }
        }, function(e){
            if (typeof onerrorCallback == "function") {
                onerrorCallback(e);
            }
        });
    }

    function setValue(v, updateInterfaces) {
        if (typeof v == "object" && v.hasOwnProperty("url")) {
            v = v.url;
        }
        var tv = assetList.value.url;
        var item = assetList.listValues.find(function(l) {
            return l.url == v;
        });
        if (item) {
            assetList.value = item;
        }
        if (assetList.value.url != tv) {
            // asset has changed url.
            loadAsset();
            this.triggerParameterSet(updateInterfaces);
        }
        this.trigger();
        return assetList.value;
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
                    if (audioBuffer) {
                        onloadCallback(audioBuffer);
                    }
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
                assetList.destroy();
                owner = name = defaultValue = assetList = undefined;
            }
        },
        "value": {
            "get": function () {
                return assetList.value.url;
            },
            "set": function (v) {
                setValue.call(this, v, true);
                return assetList.value.url;
            }
        },
        "setValue": {
            "value": function(v, updateInterfaces) {
                return setValue.call(this, v, updateInterfaces);
            }
        },
        "getResource": {
            "value": function() {
                if (audioBufferPromise) {
                    return audioBufferPromise;
                } else {
                    return loadAsset();
                }
            }
        },
        "buffer": {
            "get": function() {return audioBuffer;}
        },
        "toString": {
            "value": function(v) {
                return assetList.toString(v);
            }
        },
        "options": {
            "get": function() {
                return assetList.listValues;
            }
        },
        "getParameterObject": {
            "value": function() {
                return {
                    value: assetList.value.toJSON(),
                    options: assetList.listValues.map(function(v){return v.toJSON();}),
                    loaded: (audioBuffer !== undefined),
                    visibleName: name,
                    type: "AssetParameter",
                    name: name
                };
            }
        }
    });

    loadAsset();
}
AssetParameter.prototype = Object.create(_PluginParameter_js__WEBPACK_IMPORTED_MODULE_0__["PluginParameter"].prototype);
AssetParameter.prototype.constructor = AssetParameter;




/***/ }),

/***/ "./src/BasePlugin/parameters/ButtonParameter.js":
/*!******************************************************!*\
  !*** ./src/BasePlugin/parameters/ButtonParameter.js ***!
  \******************************************************/
/*! exports provided: ButtonParameter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonParameter", function() { return ButtonParameter; });
/* harmony import */ var _PluginParameter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PluginParameter.js */ "./src/BasePlugin/parameters/PluginParameter.js");
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

/***/ "./src/BasePlugin/parameters/ListParameter.js":
/*!****************************************************!*\
  !*** ./src/BasePlugin/parameters/ListParameter.js ***!
  \****************************************************/
/*! exports provided: ListParameter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListParameter", function() { return ListParameter; });
/* harmony import */ var _PluginParameter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PluginParameter.js */ "./src/BasePlugin/parameters/PluginParameter.js");
/* harmony import */ var _ParameterAutomation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ParameterAutomation.js */ "./src/BasePlugin/parameters/ParameterAutomation.js");
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
            "value": listOfValues
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

/***/ "./src/BasePlugin/parameters/NumberParameter.js":
/*!******************************************************!*\
  !*** ./src/BasePlugin/parameters/NumberParameter.js ***!
  \******************************************************/
/*! exports provided: NumberParameter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberParameter", function() { return NumberParameter; });
/* harmony import */ var _PluginParameter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PluginParameter.js */ "./src/BasePlugin/parameters/PluginParameter.js");
/* harmony import */ var _ParameterAutomation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ParameterAutomation.js */ "./src/BasePlugin/parameters/ParameterAutomation.js");
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

/***/ "./src/BasePlugin/parameters/ParameterAutomation.js":
/*!**********************************************************!*\
  !*** ./src/BasePlugin/parameters/ParameterAutomation.js ***!
  \**********************************************************/
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

/***/ "./src/BasePlugin/parameters/PluginParameter.js":
/*!******************************************************!*\
  !*** ./src/BasePlugin/parameters/PluginParameter.js ***!
  \******************************************************/
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

/***/ "./src/BasePlugin/parameters/StringParameter.js":
/*!******************************************************!*\
  !*** ./src/BasePlugin/parameters/StringParameter.js ***!
  \******************************************************/
/*! exports provided: StringParameter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StringParameter", function() { return StringParameter; });
/* harmony import */ var _PluginParameter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PluginParameter.js */ "./src/BasePlugin/parameters/PluginParameter.js");
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

/***/ "./src/BasePlugin/parameters/SwitchParameter.js":
/*!******************************************************!*\
  !*** ./src/BasePlugin/parameters/SwitchParameter.js ***!
  \******************************************************/
/*! exports provided: SwitchParameter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwitchParameter", function() { return SwitchParameter; });
/* harmony import */ var _PluginParameter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PluginParameter.js */ "./src/BasePlugin/parameters/PluginParameter.js");
/* harmony import */ var _ParameterAutomation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ParameterAutomation.js */ "./src/BasePlugin/parameters/ParameterAutomation.js");
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

/***/ "./src/BasePlugin/parameters/URLParameter.js":
/*!***************************************************!*\
  !*** ./src/BasePlugin/parameters/URLParameter.js ***!
  \***************************************************/
/*! exports provided: URLParameter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URLParameter", function() { return URLParameter; });
/* harmony import */ var _PluginParameter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PluginParameter.js */ "./src/BasePlugin/parameters/PluginParameter.js");
/* jshint esversion: 6 */


function URLParameter(owner, name, defaultValue, maxLength, toStringFunc, visibleName, exposed) {
    _PluginParameter_js__WEBPACK_IMPORTED_MODULE_0__["PluginParameter"].call(this, owner, name, "String", visibleName, exposed);
    var _value = defaultValue;
    var resourceObject;

    function getResource(type) {
        if (resourceObject == undefined) {
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
                            message: e.target
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
        return resourceObject;
    }

    function setValue(v, updateInterfaces) {
        if (maxLength) {
            if (v.length > maxLength) {
                throw ("String longer than " + maxLength + " characters");
            }
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

/***/ "./src/Factory/AudioPluginChainManager/SubFactoryFeatureSender/Extractor.js":
/*!**********************************************************************************!*\
  !*** ./src/Factory/AudioPluginChainManager/SubFactoryFeatureSender/Extractor.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* jshint esversion: 6 */

function Extractor(output, frameSize) {
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
}

/* harmony default export */ __webpack_exports__["default"] = (Extractor);


/***/ }),

/***/ "./src/Factory/AudioPluginChainManager/SubFactoryFeatureSender/OutputNode.js":
/*!***********************************************************************************!*\
  !*** ./src/Factory/AudioPluginChainManager/SubFactoryFeatureSender/OutputNode.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _WorkerExtractor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WorkerExtractor */ "./src/Factory/AudioPluginChainManager/SubFactoryFeatureSender/WorkerExtractor.js");
/* harmony import */ var _Extractor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Extractor */ "./src/Factory/AudioPluginChainManager/SubFactoryFeatureSender/Extractor.js");
/* jshint esversion: 6 */




function OutputNode(parent, output) {
    var extractors = [];
    this.addExtractor = function (frameSize) {
        var obj;
        if (window.Worker) {
            obj = new _WorkerExtractor__WEBPACK_IMPORTED_MODULE_0__["default"](output, frameSize);
        } else {
            obj = new _Extractor__WEBPACK_IMPORTED_MODULE_1__["default"](output, frameSize);
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
}

/* harmony default export */ __webpack_exports__["default"] = (OutputNode);


/***/ }),

/***/ "./src/Factory/AudioPluginChainManager/SubFactoryFeatureSender/WorkerExtractor.js":
/*!****************************************************************************************!*\
  !*** ./src/Factory/AudioPluginChainManager/SubFactoryFeatureSender/WorkerExtractor.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* jshint esversion: 6 */

function WorkerExtractor(output, frameSize) {
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
}

/* harmony default export */ __webpack_exports__["default"] = (WorkerExtractor);


/***/ }),

/***/ "./src/Factory/AudioPluginChainManager/SubFactoryFeatureSender/index.js":
/*!******************************************************************************!*\
  !*** ./src/Factory/AudioPluginChainManager/SubFactoryFeatureSender/index.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SubFactoryFeatureSender; });
/* harmony import */ var _OutputNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OutputNode */ "./src/Factory/AudioPluginChainManager/SubFactoryFeatureSender/OutputNode.js");
/* jshint esversion: 6 */



function SubFactoryFeatureSender(owner, FactoryFeatureMap) {
    var outputNodes;
    this.updateFeatures = function (featureObject) {
        var o;
        for (o = 0; o < featureObject.length; o++) {
            if (outputNodes === undefined) {
                if (o > 1) {
                    throw ("Requested an output that does not exist");
                }
                outputNodes = new _OutputNode__WEBPACK_IMPORTED_MODULE_0__["default"](owner, owner.chainStart);
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
}


/***/ }),

/***/ "./src/Factory/AudioPluginChainManager/index.js":
/*!******************************************************!*\
  !*** ./src/Factory/AudioPluginChainManager/index.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SubFactoryFeatureSender_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SubFactoryFeatureSender/index */ "./src/Factory/AudioPluginChainManager/SubFactoryFeatureSender/index.js");
/* harmony import */ var _LinkedStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../LinkedStore */ "./src/LinkedStore.js");
/* jshint esversion: 6 */




function AudioPluginChainManager(PluginFactory, chainStart, chainStop) {

    var plugin_list = [],
        pluginChainStart = chainStart,
        pluginChainStop = chainStop,
        factoryName = "",
        state = 1,
        delaySamples = 0,
        chainStartFeature = new _SubFactoryFeatureSender_index__WEBPACK_IMPORTED_MODULE_0__["default"](this, PluginFactory.FeatureMap),
        semanticStores = [],
        eventTarget = new EventTarget(),
        self = this;
    this.parent = PluginFactory;
    pluginChainStart.disconnect();
    pluginChainStart.connect(chainStop);

    this.TrackData = new _LinkedStore__WEBPACK_IMPORTED_MODULE_1__["default"]("Track");

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

/* harmony default export */ __webpack_exports__["default"] = (AudioPluginChainManager);


/***/ }),

/***/ "./src/Factory/FeatureMap/FeatureNode.js":
/*!***********************************************!*\
  !*** ./src/Factory/FeatureMap/FeatureNode.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FeatureNode; });
/* jshint esversion: 6 */
function FeatureNode(node) {
    this.name = node.name;
    this.parameters = this.parameters;
    this.features = [];
}


/***/ }),

/***/ "./src/Factory/FeatureMap/RequestorMap.js":
/*!************************************************!*\
  !*** ./src/Factory/FeatureMap/RequestorMap.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RequestorMap; });
/* jshint esversion: 6 */

function RequestorMap(pluginInstance) {
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
}


/***/ }),

/***/ "./src/Factory/FeatureMap/SourceMap.js":
/*!*********************************************!*\
  !*** ./src/Factory/FeatureMap/SourceMap.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SourceMap; });
/* harmony import */ var _RequestorMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RequestorMap */ "./src/Factory/FeatureMap/RequestorMap.js");
/* jshint esversion: 6 */



function SourceMap(Sender, pluginInstace) {
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
            requestor = new _RequestorMap__WEBPACK_IMPORTED_MODULE_0__["default"](requestorInstance);
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
}


/***/ }),

/***/ "./src/Factory/FeatureMap/index.js":
/*!*****************************************!*\
  !*** ./src/Factory/FeatureMap/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FeatureMap; });
/* harmony import */ var _FeatureNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FeatureNode */ "./src/Factory/FeatureMap/FeatureNode.js");
/* harmony import */ var _SourceMap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SourceMap */ "./src/Factory/FeatureMap/SourceMap.js");
/* jshint esversion: 6 */




function FeatureMap() {
    var Mappings = [];

    function getFeatureNode(list, check) {
        return list.find(function (e) {
            return e.name === this.name;
        }, check);
    }

    function addFeatureNode(featureNode, list) {
        var node = new _FeatureNode__WEBPACK_IMPORTED_MODULE_0__["default"](featureNode);
        list.push(node);
        return node;
    }

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
        var node = new _SourceMap__WEBPACK_IMPORTED_MODULE_1__["default"](Sender, pluginInstance);
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
}


/***/ }),

/***/ "./src/Factory/MidiSynthesisInstance.js":
/*!**********************************************!*\
  !*** ./src/Factory/MidiSynthesisInstance.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MidiSynthesisInstance; });
/* jshint esversion: 6 */

function MidiSynthesisInstance(synthNode) {
    var _out = synthNode.context.createGain();
    synthNode.getOutputs()[0].connect(_out);

    this.destroy = function () {
        synthNode.destroy();
    };

    Object.defineProperties(this, {
        'node': {
            'value': synthNode
        },
        'output': {
            'get': function () {
                return _out;
            }
        },
    });
}


/***/ }),

/***/ "./src/Factory/MidiSynthesiserHost.js":
/*!********************************************!*\
  !*** ./src/Factory/MidiSynthesiserHost.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MidiSynthesiserHost; });
/* harmony import */ var _LinkedStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../LinkedStore */ "./src/LinkedStore.js");
/* jshint esversion: 6 */



function MidiSynthesiserHost(factory) {
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

    this.TrackData = new _LinkedStore__WEBPACK_IMPORTED_MODULE_0__["default"]("Track");

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
                        console.log(e);
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
}


/***/ }),

/***/ "./src/Factory/PluginAssets/AssetPackSelector.js":
/*!*******************************************************!*\
  !*** ./src/Factory/PluginAssets/AssetPackSelector.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* jshint esversion: 6 */

function AssetPackSelector(plugin, assetPackManager, pack) {

    function fetchAssets(self, assetsList) {
        return Promise.all(assetsList.map(asset => asset.fetch()))
        .then(function() {
            if (typeof onload == "function") {
                onload.call(self, assetsList);
            }
        }, function() {
            if (typeof onerror == "function") {
                onerror.call(self);
            }
        });
    }

    function fetchAllAssets(self) {
        return fetchAssets(self, pack.assetObjects);
    }

    this.selectPack = function(_pack) {
        if (assetPackManager.assetPacks.includes(_pack)) {
            pack = _pack;
        } else {
            throw("Pack not in factory asset packs");
        }
    };

    this.allAssetsLoaded = function () {
        return pack.assetObjects.every(asset => asset.assetObject !== undefined);
    };

    this.fetchAssetByName = function(name) {
        if (pack === undefined || pack.assetObjects == undefined) {
            throw("Pack not defined");
        }
        var asset = pack.assetObjects.find(asset => name == asset.name);
        if (asset) {
            return asset.fetch();
        } else {
            throw ("Asset with name "+String(name)+" does not exist in this pack");
        }
    };

    Object.defineProperties(this, {
        "pack": {
            "get": function () {return pack;}
        },
        "loadAssets": {
            "value": function (assetsList) {
                if (pack === undefined || pack.assetObjects == undefined) {
                    throw("Pack not defined");
                }
                if (assetsList == undefined) {
                    assetsList = pack.assetObjects;
                }
                if (!Array.isArray(assetsList) || assetsList.length == 0) {
                    throw "Must pass an array of assets";
                }
                var allInPack = assetsList.every(function(asset) {
                    return pack.assetObjects.some(ao => ao.name == asset.name);
                });
                if (!allInPack) {
                    return Promise.reject("Not all given assets are in this pack");
                }
                return fetchAssets(this, assetsList);
            }
        },
        "onload": {
            "get": function() { return onload; },
            "set": function(f) {
                if (typeof f == "function" || f === undefined) {
                    onload = f;
                } else {
                    throw "Must be a function or undefined";
                }
            }
        },
        "onerror": {
            "get": function() { return onload; },
            "set": function(f) {
                if (typeof f == "function" || f === undefined) {
                    onerror = f;
                } else {
                    throw "Must be a function or undefined";
                }
            }
        }
    });
}

/* harmony default export */ __webpack_exports__["default"] = (AssetPackSelector);


/***/ }),

/***/ "./src/Factory/PluginAssets/PluginAsset.js":
/*!*************************************************!*\
  !*** ./src/Factory/PluginAssets/PluginAsset.js ***!
  \*************************************************/
/*! exports provided: PluginAsset */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PluginAsset", function() { return PluginAsset; });
/*eslint-env browser */
/* jshint esversion:6 */

function PluginAsset(factoryContext, name, url, assetObject) {

    var self = this;
    function fetchAsset() {
        p = fetch(url).then(function(r) {
            return r.arrayBuffer();
        }).then(function(ab) {
            return factoryContext.context.decodeAudioData(ab);
        }).then(function(ab) {
            assetObject = ab;
            p = undefined;
            return self;
        });
    }

    var p;

    Object.defineProperties(this, {
        "name": {
            "value": name
        },
        "url": {
            "value": url
        },
        "assetObject": {
            "get": function() {return assetObject;}
        },
        "fetch": {
            "value": function() {
                if (assetObject) {
                    return Promise.resolve(assetObject);
                } else if (p === undefined) {
                    fetchAsset();
                }
                return p;
            }
        },
        "toJSON": {
            "value": function() {
                return {name: name, url: url};
            }
        },
        "toString": {
            "value": function() {
                return JSON.stringify(this.toJSON());
            }
        }
    });
}




/***/ }),

/***/ "./src/Factory/PluginAssets/PluginAssetManager.js":
/*!********************************************************!*\
  !*** ./src/Factory/PluginAssets/PluginAssetManager.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PluginAssetsList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PluginAssetsList */ "./src/Factory/PluginAssets/PluginAssetsList.js");
/* harmony import */ var _AssetPackSelector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AssetPackSelector */ "./src/Factory/PluginAssets/AssetPackSelector.js");
/*eslint-env browser */
/* jshint esversion:6 */




function findPackByName(assetPackList, name) {
    return assetPackList.find(function(l) {
        return l.name == name;
    });
}

function PluginAssetManager(factoryContext) {
    var assetPackList = [];
    this.addPackToList = function(name, resourceType) {
        if (typeof name != "string") {
            throw "addAssetUrlToList Argument-1 must be a type of string";
        }
        if (findPackByName(assetPackList, name)) {
            throw "Pack with name \""+name+"\" already in this list";
        }
        var assetPack = new _PluginAssetsList__WEBPACK_IMPORTED_MODULE_0__["PluginAssetsList"](factoryContext, name, resourceType);
        assetPackList.push(assetPack);
        return assetPack;
    };
    this.removeAssetPackFromList = function(assetPack) {
        var index = assetPackList.indexOf(assetPack);
        if (index == -1) {
            throw "Asset pack not in this list";
        }
        assetPackList.splice(index, 1);
        return assetPackList;
    };
    this.removeAssetPackFromListByName = function(name) {
        if (typeof name != "string") {
            throw "removeAssetUrlFromList Argument-1 must be a type of string";
        }
        var asset = findPackByName(assetPackList, name);
        return this.removeAssetFromList(asset);
    };
    this.assetPacks = assetPackList;
    this.createAssetPackSelector = function(plugin, pack) {
        return new _AssetPackSelector__WEBPACK_IMPORTED_MODULE_1__["default"](plugin, this, pack);
    };
    this.importFromAssetLists = function(oldContext) {
        oldContext.assetPacks.forEach(function(originalAssetPack) {
            var newContextPack = this.addPackToList(originalAssetPack.name, originalAssetPack.resourceType);
            originalAssetPack.assetObjects.forEach(function(originalAsset) {
                var assetObject;
                if (originalAsset.assetObject !== undefined) {
                    assetObject = factoryContext.context.createBuffer(originalAsset.assetObject.numberOfChannels, originalAsset.assetObject.length, originalAsset.assetObject.sampleRate);
                    for (var i = 0; i < assetObject.numberOfChannels; i++) {
                        assetObject.copyToChannel(originalAsset.assetObject.getChannelData(i), i, 0);
                    }
                }
                this.addAssetUrlToList(originalAsset.name, originalAsset.url, assetObject);
            }, newContextPack);
        }, this);
    };
}

/* harmony default export */ __webpack_exports__["default"] = (PluginAssetManager);


/***/ }),

/***/ "./src/Factory/PluginAssets/PluginAssetsList.js":
/*!******************************************************!*\
  !*** ./src/Factory/PluginAssets/PluginAssetsList.js ***!
  \******************************************************/
/*! exports provided: PluginAssetsList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PluginAssetsList", function() { return PluginAssetsList; });
/* harmony import */ var _PluginAsset_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PluginAsset.js */ "./src/Factory/PluginAssets/PluginAsset.js");
/*eslint-env browser */
/* jshint esversion:6 */



function PluginAssetsList(factoryContext, name, resourceType) {
    var assetObjects = [];
    function findAssetByUrl(url) {
        return assetObjects.find(function(asset) {
            return asset.url == url;
        });
    }
    this.addAssetUrlToList = function(name, url, assetObject) {
        if (typeof url != "string") {
            throw "addAssetUrlToList Argument-1 must be a type of string";
        }
        if (findAssetByUrl(url)) {
            throw "URL \""+url+"\" already in this list";
        }
        assetObjects.push(new _PluginAsset_js__WEBPACK_IMPORTED_MODULE_0__["PluginAsset"](factoryContext, name, url, assetObject));
        return assetObjects;
    };
    this.removeAssetFromList = function(asset) {
        var index = assetObjects.findIndex(function(asset) {
            return asset.url == url;
        });
        if (index == -1) {
            throw "Asset not in this list";
        }
        assetObjects.splice(index, 1);
        return assetObjects;
    };
    this.removeAssetUrlFromList = function(url) {
        if (typeof url != "string") {
            throw "removeAssetUrlFromList Argument-1 must be a type of string";
        }
        var asset = findAssetByUrl(url);
        return this.removeAssetFromList(asset);
    };
    this.assetObjects = assetObjects;
    this.name = name;
    this.resourceType = resourceType;
}




/***/ }),

/***/ "./src/Factory/PluginFactory.js":
/*!**************************************!*\
  !*** ./src/Factory/PluginFactory.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _LinkedStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../LinkedStore */ "./src/LinkedStore.js");
/* harmony import */ var _PluginAssets_PluginAssetManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PluginAssets/PluginAssetManager */ "./src/Factory/PluginAssets/PluginAssetManager.js");
/* harmony import */ var _PluginPrototype__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PluginPrototype */ "./src/Factory/PluginPrototype.js");
/* harmony import */ var _FeatureMap_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FeatureMap/index */ "./src/Factory/FeatureMap/index.js");
/* harmony import */ var _AudioPluginChainManager___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AudioPluginChainManager/ */ "./src/Factory/AudioPluginChainManager/index.js");
/* harmony import */ var _MidiSynthesiserHost__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MidiSynthesiserHost */ "./src/Factory/MidiSynthesiserHost.js");
/* harmony import */ var _PluginUserInterfaceMessageHub__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PluginUserInterfaceMessageHub */ "./src/Factory/PluginUserInterfaceMessageHub.js");
// This defines a master object for holding all the plugins and communicating
// This object will also handle creation and destruction of plugins
/*globals Promise, document, console, LinkedStore, Worker, window, XMLHttpRequest */
/*eslint-env browser */
/* jshint esversion:6 */









function PluginFactory(audio_context, rootURL) {

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

    function copyFactory(factory, newcontext) {
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
            newFactory.pluginAssets.importFromAssetLists(factory.pluginAssets);
            return newFactory;
        });
    }

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

    var subFactories = [],
    synthesiserHosts = [],
    plugin_prototypes = [],
    pluginsList = [],
    audioStartProgramTime,
    audioStartContextTime,
    audioStarted = false,
    pluginUserInterfaceMessageHubIntance = new _PluginUserInterfaceMessageHub__WEBPACK_IMPORTED_MODULE_6__["default"](this),
    stores = [];

    this.pluginAssets = new _PluginAssets_PluginAssetManager__WEBPACK_IMPORTED_MODULE_1__["default"](this);

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

    this.injectPrototype = function(prototypeExecutable) {
        if (typeof prototypeExecutable != "function") {
            throw("Invalid executable function");
        }
        return this.addPrototype(prototypeExecutable);
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
            obj = new _PluginPrototype__WEBPACK_IMPORTED_MODULE_2__["default"](plugin_proto, factory);
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
        var node = new _AudioPluginChainManager___WEBPACK_IMPORTED_MODULE_4__["default"](this, chainStart, chainStop);
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
        var host = new _MidiSynthesiserHost__WEBPACK_IMPORTED_MODULE_5__["default"](factory);
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

    this.deletePlugin = function (plugin) {
        var index = pluginsList.indexOf(plugin);
        if (index >= 0) {
            var p = pluginsList.splice(index, 1);
            p[0].delete();
            p[0].node.externalInterface.closeWindows();
        }
    };

    this.getCurrentProgramTime = function() {
        if (audioStarted) {
            return audio_context.currentTime - audioStartContextTime + audioStartProgramTime;
        } else {
            return audioStartProgramTime;
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

    this.createStore = function (storeName) {
        var node = new _LinkedStore__WEBPACK_IMPORTED_MODULE_0__["default"](storeName);
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
    this.SessionData = new _LinkedStore__WEBPACK_IMPORTED_MODULE_0__["default"]("Session");
    this.UserData = new _LinkedStore__WEBPACK_IMPORTED_MODULE_0__["default"]("User");

    this.FeatureMap = new _FeatureMap_index__WEBPACK_IMPORTED_MODULE_3__["default"]();

    Object.defineProperty(this.FeatureMap, "factory", {
        'value': this
    });

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
                return copyFactory(this, context);
            }
        },
        "subFactories": {
            "get": function() {
                return subFactories;
            }
        },
        "PluginGUI": {
            "value": pluginUserInterfaceMessageHubIntance
        }
    });
}

/* harmony default export */ __webpack_exports__["default"] = (PluginFactory);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./src/Factory/PluginInstance.js":
/*!***************************************!*\
  !*** ./src/Factory/PluginInstance.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PluginInstance; });
/* jshint esversion: 6 */
function PluginInstance(plugin_node) {
    this.next_node = undefined;
    var _bypassed = false;
    var ev = new EventTarget();
    var _in = plugin_node.context.createGain(),
        _out = plugin_node.context.createGain();

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
}


/***/ }),

/***/ "./src/Factory/PluginPrototype.js":
/*!****************************************!*\
  !*** ./src/Factory/PluginPrototype.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PluginPrototype; });
/* harmony import */ var _PluginInstance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PluginInstance */ "./src/Factory/PluginInstance.js");
/* harmony import */ var _MidiSynthesisInstance__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MidiSynthesisInstance */ "./src/Factory/MidiSynthesisInstance.js");
/* jshint esversion: 6 */



function PluginPrototype(proto, factory) {
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
                node = new _PluginInstance__WEBPACK_IMPORTED_MODULE_0__["default"](plugin);
            } else if (plugin.hasMidiInput === true && plugin.hasMidiOutput !== true) {
                node = new _MidiSynthesisInstance__WEBPACK_IMPORTED_MODULE_1__["default"](plugin);
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
}


/***/ }),

/***/ "./src/Factory/PluginUserInterfaceMessageHub.js":
/*!******************************************************!*\
  !*** ./src/Factory/PluginUserInterfaceMessageHub.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PluginUserInterfaceMessageHub; });
/* jshint esversion: 6 */

function PluginUserInterfaceMessageHub(factory){
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
        //iframe.contentWindow.pluginInstance = plugin_object;
        return iframe;
    }
    function spawnPluginWindow(plugin_object, interface_object, opts) {
        var w = window.open(interface_object.src,plugin_object.name,opts);
        plugin_object.externalInterface.registerWindow(w);
        return w;
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
        "spawnPluginWindow": spawnPluginWindow,
        "pollAllPlugins": pollAllPlugins
    });
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
/* jshint esversion: 6 */

var LinkedStore = function (storeName) {
    // Store for the semantic terms, each store holds its own data tree
    // Terms are added as key/value paris to a root node
    var et = new EventTarget();
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
        "addEventListener": {
            "value": function(a,b,c) {
                return et.addEventListener(a,b,c);
            }
        },
        "removeEventListener": {
            "value": function(a,b,c) {
                return et.removeEventListener(a,b,c);
            }
        },
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
        'setTerm': {
            'value': function (term, value) {
                if (typeof term !== "string" && term.length === 0) {
                    throw ("term must be a string");
                }
                root[term] = value;
                et.dispatchEvent(new CustomEvent("altered", {detail:{term: term, value: value}}));
            }
        },
        'setTerms': {
            'value': function (termsObject) {
                if (typeof termsObject !== "object") {
                    throw ("setTerms takes an object of term/value pairs");
                }
                var term;
                for (term in termsObject) {
                    if (termsObject.hasOwnProperty(term)) {
                        this.setTerm(term, termsObject[term]);
                    }
                }
            }
        },
        'deleteTerm': {
            'value': function (term) {
                this.setTerm(term, undefined);
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

/* harmony default export */ __webpack_exports__["default"] = (LinkedStore);


/***/ }),

/***/ "./src/SynthesiserBasePlugin/index.js":
/*!********************************************!*\
  !*** ./src/SynthesiserBasePlugin/index.js ***!
  \********************************************/
/*! exports provided: SynthesiserBasePlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SynthesiserBasePlugin", function() { return SynthesiserBasePlugin; });
/* harmony import */ var _BasePlugin_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../BasePlugin/index */ "./src/BasePlugin/index.js");
/* jshint esversion: 6 */


var SynthesiserBasePlugin = function(factory, owner)
{
    var hasWarnedScheduleNotSet = false;
    var hasWarnedCancelNotSet = false;
    var editorType = "roll";
    _BasePlugin_index__WEBPACK_IMPORTED_MODULE_0__["BasePlugin"].call(this, factory, owner);

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
        },
        "setEditorType": {
            "value": function(type) {
                if (type == "roll" || type == "line" || type == "sequencer") {
                    editorType = type;
                }
                return editorType;
            }
        },
        "getEditorType": {
            "value": function() {
                return editorType;
            }
        },
        "isNoteActive": {
            "value": function(n) {
                if (typeof n == "number" && n >= 0 && n < 128) {
                    return true;
                } else {
                    return false;
                }
            },
            "writable": true
        },
        "getActiveNoteProperties": {
            "value": function() {
                var obj =[];
                for (var n=0; n<128; n++) {
                    obj.push({
                        code: n,
                        name: this.midiNoteToName(n)
                    });
                }
                return obj;
            },
            "writable": true
        },
        'midiNoteToFrequency': {
            'value': function (m) {
                return Math.pow(2.0, (m-69)/12)*440;
            }
        },
        'frequencyToMidiNote': {
            'value': function (f) {
                return Math.round(12.0*Math.log2(f/440))+69;
            }
        },
        'midiNoteToName': {
            'value': function (m) {
                var notes = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"];
                var root = m-21;
                var octave = Math.floor(root/12);
                var note = Math.floor((root+36)%12);
                return notes[note] + String(octave);
            }
        },
        'noteNameToMIDI': {
            'value': function(n) {
                var notes = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"];
                var octave = Number(n.slice(n.length-1));
                var note = notes.indexOf(n.slice(0,n.length-1));
                return octave*12 + note + 21;
            }
        },
    });
};
SynthesiserBasePlugin.prototype = Object.create(_BasePlugin_index__WEBPACK_IMPORTED_MODULE_0__["BasePlugin"].prototype);
SynthesiserBasePlugin.prototype.constructor = SynthesiserBasePlugin;




/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: BasePlugin, SynthesiserBasePlugin, PluginFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BasePlugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BasePlugin */ "./src/BasePlugin/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BasePlugin", function() { return _BasePlugin__WEBPACK_IMPORTED_MODULE_0__["BasePlugin"]; });

/* harmony import */ var _SynthesiserBasePlugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SynthesiserBasePlugin */ "./src/SynthesiserBasePlugin/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SynthesiserBasePlugin", function() { return _SynthesiserBasePlugin__WEBPACK_IMPORTED_MODULE_1__["SynthesiserBasePlugin"]; });

/* harmony import */ var _Factory_PluginFactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Factory/PluginFactory */ "./src/Factory/PluginFactory.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PluginFactory", function() { return _Factory_PluginFactory__WEBPACK_IMPORTED_MODULE_2__["default"]; });

// This defines a master object for holding all the plugins and communicating
// This object will also handle creation and destruction of plugins
/*globals Promise, document, console, LinkedStore, Worker, window, XMLHttpRequest */
/*eslint-env browser */
/* jshint esversion:6 */








/***/ }),

/***/ "./src/module.js":
/*!***********************!*\
  !*** ./src/module.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");


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
        PluginFactory: _index__WEBPACK_IMPORTED_MODULE_0__["PluginFactory"],
        BasePlugin: _index__WEBPACK_IMPORTED_MODULE_0__["BasePlugin"],
        SynthesiserBasePlugin: _index__WEBPACK_IMPORTED_MODULE_0__["SynthesiserBasePlugin"]
    };
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9KU0FQL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0pTQVAvKHdlYnBhY2spL2J1aWxkaW4vYW1kLW9wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vSlNBUC8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vSlNBUC8od2VicGFjaykvYnVpbGRpbi9oYXJtb255LW1vZHVsZS5qcyIsIndlYnBhY2s6Ly9KU0FQLy4vc3JjL0Jhc2VQbHVnaW4vQXNzZXRQYWNrU2VsZWN0b3JJbnRlcmZhY2UuanMiLCJ3ZWJwYWNrOi8vSlNBUC8uL3NyYy9CYXNlUGx1Z2luL0xpbmtlZFN0b3JlSW50ZXJmYWNlLmpzIiwid2VicGFjazovL0pTQVAvLi9zcmMvQmFzZVBsdWdpbi9QbHVnaW5GZWF0dXJlSW50ZXJmYWNlL1BsdWdpbkZlYXR1cmVJbnRlcmZhY2VSZWNlaXZlci5qcyIsIndlYnBhY2s6Ly9KU0FQLy4vc3JjL0Jhc2VQbHVnaW4vUGx1Z2luRmVhdHVyZUludGVyZmFjZS9QbHVnaW5GZWF0dXJlSW50ZXJmYWNlU2VuZGVyLmpzIiwid2VicGFjazovL0pTQVAvLi9zcmMvQmFzZVBsdWdpbi9QbHVnaW5GZWF0dXJlSW50ZXJmYWNlL2luZGV4LmpzIiwid2VicGFjazovL0pTQVAvLi9zcmMvQmFzZVBsdWdpbi9QbHVnaW5JbnRlcmZhY2VNZXNzYWdlSHViLmpzIiwid2VicGFjazovL0pTQVAvLi9zcmMvQmFzZVBsdWdpbi9QbHVnaW5Vc2VySW50ZXJmYWNlL2luZGV4LmpzIiwid2VicGFjazovL0pTQVAvLi9zcmMvQmFzZVBsdWdpbi9pbmRleC5qcyIsIndlYnBhY2s6Ly9KU0FQLy4vc3JjL0Jhc2VQbHVnaW4vcGFyYW1ldGVyTWFuYWdlci5qcyIsIndlYnBhY2s6Ly9KU0FQLy4vc3JjL0Jhc2VQbHVnaW4vcGFyYW1ldGVycy9Bc3NldFBhcmFtZXRlci5qcyIsIndlYnBhY2s6Ly9KU0FQLy4vc3JjL0Jhc2VQbHVnaW4vcGFyYW1ldGVycy9CdXR0b25QYXJhbWV0ZXIuanMiLCJ3ZWJwYWNrOi8vSlNBUC8uL3NyYy9CYXNlUGx1Z2luL3BhcmFtZXRlcnMvTGlzdFBhcmFtZXRlci5qcyIsIndlYnBhY2s6Ly9KU0FQLy4vc3JjL0Jhc2VQbHVnaW4vcGFyYW1ldGVycy9OdW1iZXJQYXJhbWV0ZXIuanMiLCJ3ZWJwYWNrOi8vSlNBUC8uL3NyYy9CYXNlUGx1Z2luL3BhcmFtZXRlcnMvUGFyYW1ldGVyQXV0b21hdGlvbi5qcyIsIndlYnBhY2s6Ly9KU0FQLy4vc3JjL0Jhc2VQbHVnaW4vcGFyYW1ldGVycy9QbHVnaW5QYXJhbWV0ZXIuanMiLCJ3ZWJwYWNrOi8vSlNBUC8uL3NyYy9CYXNlUGx1Z2luL3BhcmFtZXRlcnMvU3RyaW5nUGFyYW1ldGVyLmpzIiwid2VicGFjazovL0pTQVAvLi9zcmMvQmFzZVBsdWdpbi9wYXJhbWV0ZXJzL1N3aXRjaFBhcmFtZXRlci5qcyIsIndlYnBhY2s6Ly9KU0FQLy4vc3JjL0Jhc2VQbHVnaW4vcGFyYW1ldGVycy9VUkxQYXJhbWV0ZXIuanMiLCJ3ZWJwYWNrOi8vSlNBUC8uL3NyYy9GYWN0b3J5L0F1ZGlvUGx1Z2luQ2hhaW5NYW5hZ2VyL1N1YkZhY3RvcnlGZWF0dXJlU2VuZGVyL0V4dHJhY3Rvci5qcyIsIndlYnBhY2s6Ly9KU0FQLy4vc3JjL0ZhY3RvcnkvQXVkaW9QbHVnaW5DaGFpbk1hbmFnZXIvU3ViRmFjdG9yeUZlYXR1cmVTZW5kZXIvT3V0cHV0Tm9kZS5qcyIsIndlYnBhY2s6Ly9KU0FQLy4vc3JjL0ZhY3RvcnkvQXVkaW9QbHVnaW5DaGFpbk1hbmFnZXIvU3ViRmFjdG9yeUZlYXR1cmVTZW5kZXIvV29ya2VyRXh0cmFjdG9yLmpzIiwid2VicGFjazovL0pTQVAvLi9zcmMvRmFjdG9yeS9BdWRpb1BsdWdpbkNoYWluTWFuYWdlci9TdWJGYWN0b3J5RmVhdHVyZVNlbmRlci9pbmRleC5qcyIsIndlYnBhY2s6Ly9KU0FQLy4vc3JjL0ZhY3RvcnkvQXVkaW9QbHVnaW5DaGFpbk1hbmFnZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vSlNBUC8uL3NyYy9GYWN0b3J5L0ZlYXR1cmVNYXAvRmVhdHVyZU5vZGUuanMiLCJ3ZWJwYWNrOi8vSlNBUC8uL3NyYy9GYWN0b3J5L0ZlYXR1cmVNYXAvUmVxdWVzdG9yTWFwLmpzIiwid2VicGFjazovL0pTQVAvLi9zcmMvRmFjdG9yeS9GZWF0dXJlTWFwL1NvdXJjZU1hcC5qcyIsIndlYnBhY2s6Ly9KU0FQLy4vc3JjL0ZhY3RvcnkvRmVhdHVyZU1hcC9pbmRleC5qcyIsIndlYnBhY2s6Ly9KU0FQLy4vc3JjL0ZhY3RvcnkvTWlkaVN5bnRoZXNpc0luc3RhbmNlLmpzIiwid2VicGFjazovL0pTQVAvLi9zcmMvRmFjdG9yeS9NaWRpU3ludGhlc2lzZXJIb3N0LmpzIiwid2VicGFjazovL0pTQVAvLi9zcmMvRmFjdG9yeS9QbHVnaW5Bc3NldHMvQXNzZXRQYWNrU2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vSlNBUC8uL3NyYy9GYWN0b3J5L1BsdWdpbkFzc2V0cy9QbHVnaW5Bc3NldC5qcyIsIndlYnBhY2s6Ly9KU0FQLy4vc3JjL0ZhY3RvcnkvUGx1Z2luQXNzZXRzL1BsdWdpbkFzc2V0TWFuYWdlci5qcyIsIndlYnBhY2s6Ly9KU0FQLy4vc3JjL0ZhY3RvcnkvUGx1Z2luQXNzZXRzL1BsdWdpbkFzc2V0c0xpc3QuanMiLCJ3ZWJwYWNrOi8vSlNBUC8uL3NyYy9GYWN0b3J5L1BsdWdpbkZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vSlNBUC8uL3NyYy9GYWN0b3J5L1BsdWdpbkluc3RhbmNlLmpzIiwid2VicGFjazovL0pTQVAvLi9zcmMvRmFjdG9yeS9QbHVnaW5Qcm90b3R5cGUuanMiLCJ3ZWJwYWNrOi8vSlNBUC8uL3NyYy9GYWN0b3J5L1BsdWdpblVzZXJJbnRlcmZhY2VNZXNzYWdlSHViLmpzIiwid2VicGFjazovL0pTQVAvLi9zcmMvTGlua2VkU3RvcmUuanMiLCJ3ZWJwYWNrOi8vSlNBUC8uL3NyYy9TeW50aGVzaXNlckJhc2VQbHVnaW4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vSlNBUC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9KU0FQLy4vc3JjL21vZHVsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNEQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRDQUE0Qzs7QUFFNUM7Ozs7Ozs7Ozs7OztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN2QkE7QUFBQTtBQUFBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBOztBQUVBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFbUM7Ozs7Ozs7Ozs7Ozs7QUN4TW5DO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFNkI7Ozs7Ozs7Ozs7Ozs7QUNwRzdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ3VEO0FBQ2tCO0FBQ1Q7QUFDTjtBQUNqQjtBQUNpQjtBQUNZOztBQUV0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyx1RkFBeUI7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLDhFQUFzQjtBQUNoRCwwQkFBMEIscUVBQWdCO0FBQzFDO0FBQ0EsbUVBQW1FLGlCQUFpQjtBQUNwRixLQUFLO0FBQ0w7QUFDQSxtQkFBbUIsbUVBQTBCO0FBQzdDOztBQUVBLDBCQUEwQixvREFBVzs7QUFFckMsb0NBQW9DLDZEQUFvQjtBQUN4RCxpQ0FBaUMsNkRBQW9CO0FBQ3JELGtDQUFrQyw2REFBb0I7QUFDdEQsbUNBQW1DLDZEQUFvQjs7QUFFdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFb0I7Ozs7Ozs7Ozs7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Q2pCO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLDBDQUEwQyxtRUFBZTtBQUN6RDs7QUFFeUI7Ozs7Ozs7Ozs7Ozs7QUM3S3pCO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixPQUFPO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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O0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixPQUFPO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0EsZ0RBQWdELDREQUFVO0FBQzFEOztBQUUrQjs7Ozs7Ozs7Ozs7OztBQzNHL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUV3QztBQUNzQjtBQUNWOztBQUVNOzs7Ozs7Ozs7Ozs7O0FDVjFEO0FBQUE7QUFBeUU7O0FBRXpFO0FBQ0E7QUFDQSx3Q0FBd0MsZ0dBQVU7QUFDbEQ7QUFDQTtBQUNBLEtBQUssVUFBVSxLQUF5QjtBQUN4QztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBRSxTQUFJO0FBQ1A7QUFDQTtBQUNBLHVCQUF1QixvREFBYTtBQUNwQyxvQkFBb0IsaURBQVU7QUFDOUIsK0JBQStCLDREQUFxQjtBQUNwRDtBQUNBLENBQUMiLCJmaWxlIjoiSlNBUC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL21vZHVsZS5qc1wiKTtcbiIsIi8qIGdsb2JhbHMgX193ZWJwYWNrX2FtZF9vcHRpb25zX18gKi9cbm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX2FtZF9vcHRpb25zX187XG4iLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9yaWdpbmFsTW9kdWxlKSB7XG5cdGlmICghb3JpZ2luYWxNb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XG5cdFx0dmFyIG1vZHVsZSA9IE9iamVjdC5jcmVhdGUob3JpZ2luYWxNb2R1bGUpO1xuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxuXHRcdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImxvYWRlZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5sO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiaWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUuaTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImV4cG9ydHNcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZVxuXHRcdH0pO1xuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xuXHR9XG5cdHJldHVybiBtb2R1bGU7XG59O1xuIiwiLyoganNoaW50IGVzdmVyc2lvbjogNiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBc3NldFBhY2tTZWxlY3RvckludGVyZmFjZShwbHVnaW4sIGZhY3RvcnksIHBhcmFtZXRlck5hbWUsIHZpc2libGVOYW1lLCBleHBvc2VkKSB7XG4gICAgdmFyIHBhY2tTZWxlY3RvciA9IGZhY3RvcnkucGx1Z2luQXNzZXRzLmNyZWF0ZUFzc2V0UGFja1NlbGVjdG9yKHBsdWdpbiwgZmFjdG9yeS5wbHVnaW5Bc3NldHMuYXNzZXRQYWNrc1swXSk7XG4gICAgdmFyIGxpc3RQYXJhbWV0ZXIgPSBwbHVnaW4ucGFyYW1ldGVycy5jcmVhdGVMaXN0UGFyYW1ldGVyKHBhcmFtZXRlck5hbWUsIGZhY3RvcnkucGx1Z2luQXNzZXRzLmFzc2V0UGFja3NbMF0ubmFtZSwgZmFjdG9yeS5wbHVnaW5Bc3NldHMuYXNzZXRQYWNrcy5tYXAocD0+cC5uYW1lKSwgdW5kZWZpbmVkLCB2aXNpYmxlTmFtZSwgZXhwb3NlZCk7XG4gICAgbGlzdFBhcmFtZXRlci50cmlnZ2VyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBwYWNrID0gZmFjdG9yeS5wbHVnaW5Bc3NldHMuYXNzZXRQYWNrcy5maW5kKHAgPT4gbGlzdFBhcmFtZXRlci52YWx1ZSA9PSBwLm5hbWUpO1xuICAgICAgICBwYWNrU2VsZWN0b3Iuc2VsZWN0UGFjayhwYWNrKTtcbiAgICB9O1xuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgICBcInBhcmFtZXRlclwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGxpc3RQYXJhbWV0ZXJcbiAgICAgICAgfSxcbiAgICAgICAgXCJhdmFpbGFibGVQYWNrc1wiOiB7XG4gICAgICAgICAgICBcImdldFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIGZhY3RvcnkucGx1Z2luQXNzZXRzLmFzc2V0UGFja3M7fVxuICAgICAgICB9LFxuICAgICAgICBcInNlbGVjdFBhY2tcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbihwYWNrKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChsaXN0UGFyYW1ldGVyLnZhbHVlID0gcGFjayk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwic2VsZWN0ZWRQYWNrXCI6IHtcbiAgICAgICAgICAgIFwiZ2V0XCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gbGlzdFBhcmFtZXRlci52YWx1ZTt9XG4gICAgICAgIH0sXG4gICAgICAgIFwibG9hZEFzc2V0c1wiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IHBhY2tTZWxlY3Rvci5sb2FkQXNzZXRzXG4gICAgICAgIH0sXG4gICAgICAgIFwiYWxsQXNzZXRzTG9hZGVkXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogcGFja1NlbGVjdG9yLmFsbEFzc2V0c0xvYWRlZFxuICAgICAgICB9LFxuICAgICAgICBcImZldGNoQXNzZXRCeU5hbWVcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBwYWNrU2VsZWN0b3IuZmV0Y2hBc3NldEJ5TmFtZVxuICAgICAgICB9LFxuICAgICAgICBcIndhaXRGb3JBc3NldHNcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBwYWNrU2VsZWN0b3Iud2FpdEZvckFzc2V0c1xuICAgICAgICB9LFxuICAgICAgICAndmFsdWUnOiB7XG4gICAgICAgICAgICBcImdldFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIGxpc3RQYXJhbWV0ZXIudmFsdWU7fSxcbiAgICAgICAgICAgIFwic2V0XCI6IGZ1bmN0aW9uKHMpIHtyZXR1cm4gKGxpc3RQYXJhbWV0ZXIudmFsdWUgPSBzKTt9XG4gICAgICAgIH0sXG4gICAgICAgIFwib25sb2FkXCI6IHtcbiAgICAgICAgICAgIFwiZ2V0XCI6IGZ1bmN0aW9uKCkge3JldHVybiBwYWNrU2VsZWN0b3Iub25sb2FkO30sXG4gICAgICAgICAgICBcInNldFwiOiBmdW5jdGlvbihmKSB7cmV0dXJuIChwYWNrU2VsZWN0b3Iub25sb2FkID0gZik7fVxuICAgICAgICB9LFxuICAgICAgICBcIm9uZXJyb3JcIjoge1xuICAgICAgICAgICAgXCJnZXRcIjogZnVuY3Rpb24oKSB7cmV0dXJuIHBhY2tTZWxlY3Rvci5vbmVycm9yO30sXG4gICAgICAgICAgICBcInNldFwiOiBmdW5jdGlvbihmKSB7cmV0dXJuIChwYWNrU2VsZWN0b3Iub25lcnJvciA9IGYpO31cbiAgICAgICAgfVxuICAgIH0pO1xufVxuIiwiLyoganNoaW50IGVzdmVyc2lvbjogNiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMaW5rZWRTdG9yZUludGVyZmFjZShvd25lciwgbGlua2VkU3RvcmUpIHtcbiAgICBmdW5jdGlvbiBvbmFsdGVyZWQoZSkge1xuICAgICAgICB2YXIgdGVybSA9IGUuZGV0YWlsLnRlcm07XG4gICAgICAgIHZhciB2YWx1ZSA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICBpZiAobGlzdGVuZXJzW3Rlcm1dICYmIHR5cGVvZiBsaXN0ZW5lcnNbdGVybV0gPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICBsaXN0ZW5lcnNbdGVybV0uY2FsbChvd25lciwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGxpc3RlbmVycyA9IHt9O1xuXG4gICAgbGlua2VkU3RvcmUuYWRkRXZlbnRMaXN0ZW5lcihcImFsdGVyZWRcIiwgb25hbHRlcmVkKTtcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgICAgXCJkZXN0cm95XCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGxpbmtlZFN0b3JlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJhbHRlcmVkXCIsIG9uYWx0ZXJlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwicmVxdWVzdFRlcm1cIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAodGVybSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBsaW5rZWRTdG9yZS5nZXRUZXJtKHRlcm0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImxpc3RlbkZvclRlcm1cIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbih0ZXJtLCBjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIGlmIChsaXN0ZW5lcnMuaGFzT3duUHJvcGVydHkodGVybSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgXCJMaXN0ZW5lciBhbHJlYWR5IGV4aXN0c1wiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsaXN0ZW5lcnNbdGVybV0gPSBjYWxsYmFjaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJyZWxlYXNlTGlzdGVuZXJGb3JUZXJtXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24odGVybSkge1xuICAgICAgICAgICAgICAgIGxpc3RlbmVyc1t0ZXJtXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuIiwiLyoganNoaW50IGVzdmVyc2lvbjogNiAqL1xudmFyIFBsdWdpbkZlYXR1cmVJbnRlcmZhY2VSZWNlaXZlciA9IGZ1bmN0aW9uIChGZWF0dXJlSW50ZXJmYWNlSW5zdGFuY2UsIEZhY3RvcnlGZWF0dXJlTWFwKSB7XG4gICAgZnVuY3Rpb24gY2hlY2tGZWF0dXJlQXJncyhzb3VyY2UsIGZlYXR1cmVPYmplY3QpIHtcbiAgICAgICAgaWYgKHNvdXJjZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aHJvdyAoXCJTb3VyY2UgcGx1Z2luIG11c3QgYmUgZGVmaW5lZFwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZmVhdHVyZU9iamVjdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aHJvdyAoXCJGZWF0dXJlT2JqZWN0IG11c3QgYmUgZGVmaW5lZFwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIGZlYXR1cmVPYmplY3Qub3V0cHV0SW5kZXggIT09IFwibnVtYmVyXCIgfHwgdHlwZW9mIGZlYXR1cmVPYmplY3QuZnJhbWVTaXplICE9PSBcIm51bWJlclwiIHx8IHR5cGVvZiBmZWF0dXJlT2JqZWN0LmZlYXR1cmVzICE9PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICB0aHJvdyAoXCJNYWxmb3JtZWQgZmVhdHVyZU9iamVjdFwiKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgdmFyIGNfZmVhdHVyZXMgPSBmdW5jdGlvbiAoKSB7fTtcbiAgICB0aGlzLnJlcXVlc3RGZWF0dXJlcyA9IGZ1bmN0aW9uIChmZWF0dXJlTGlzdCkge1xuICAgICAgICB2YXIgaTtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGZlYXR1cmVMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLnJlcXVlc3RGZWF0dXJlc0Zyb21QbHVnaW4oZmVhdHVyZUxpc3RbaV0ucGx1Z2luLCB7XG4gICAgICAgICAgICAgICAgJ291dHB1dEluZGV4JzogZmVhdHVyZUxpc3RbaV0ub3V0cHV0SW5kZXgsXG4gICAgICAgICAgICAgICAgJ2ZyYW1lU2l6ZSc6IGZlYXR1cmVMaXN0W2ldLmZyYW1lU2l6ZSxcbiAgICAgICAgICAgICAgICAnZmVhdHVyZXMnOiBmZWF0dXJlTGlzdFtpXS5mZWF0dXJlc1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMucmVxdWVzdEZlYXR1cmVzRnJvbVBsdWdpbiA9IGZ1bmN0aW9uIChzb3VyY2UsIGZlYXR1cmVPYmplY3QpIHtcbiAgICAgICAgY2hlY2tGZWF0dXJlQXJncyhzb3VyY2UsIGZlYXR1cmVPYmplY3QpO1xuICAgICAgICBGYWN0b3J5RmVhdHVyZU1hcC5yZXF1ZXN0RmVhdHVyZXMoRmVhdHVyZUludGVyZmFjZUluc3RhbmNlLnBsdWdpbiwgc291cmNlLCBmZWF0dXJlT2JqZWN0KTtcbiAgICB9O1xuICAgIHRoaXMuY2FuY2VsRmVhdHVyZXNGcm9tUGx1Z2luID0gZnVuY3Rpb24gKHNvdXJjZSwgZmVhdHVyZU9iamVjdCkge1xuICAgICAgICBjaGVja0ZlYXR1cmVBcmdzKHNvdXJjZSwgZmVhdHVyZU9iamVjdCk7XG4gICAgICAgIEZhY3RvcnlGZWF0dXJlTWFwLmRlbGV0ZUZlYXR1cmVzKEZlYXR1cmVJbnRlcmZhY2VJbnN0YW5jZS5wbHVnaW4sIHNvdXJjZSwgZmVhdHVyZU9iamVjdCk7XG4gICAgfTtcbiAgICB0aGlzLmNhbmNlbEFsbEZlYXR1cmVzRnJvbVBsdWdpbiA9IGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgICAgaWYgKHNvdXJjZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aHJvdyAoXCJTb3VyY2UgcGx1Z2luIG11c3QgYmUgZGVmaW5lZFwiKTtcbiAgICAgICAgfVxuICAgICAgICBGYWN0b3J5RmVhdHVyZU1hcC5kZWxldGVGZWF0dXJlcyhGZWF0dXJlSW50ZXJmYWNlSW5zdGFuY2UucGx1Z2luLCBzb3VyY2UpO1xuICAgIH07XG4gICAgdGhpcy5jYW5jZWxBbGxGZWF0dXJlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgRmFjdG9yeUZlYXR1cmVNYXAuZGVsZXRlRmVhdHVyZXMoRmVhdHVyZUludGVyZmFjZUluc3RhbmNlLnBsdWdpbik7XG4gICAgfTtcblxuICAgIHRoaXMucG9zdEZlYXR1cmVzID0gZnVuY3Rpb24gKE1lc3NhZ2UpIHtcbiAgICAgICAgLypcbiAgICAgICAgICAgIENhbGxlZCBieSB0aGUgUGx1Z2luIEZhY3Rvcnkgd2l0aCB0aGUgZmVhdHVyZSBtZXNzYWdlXG4gICAgICAgICAgICBtZXNzYWdlID0ge1xuICAgICAgICAgICAgICAgICdwbHVnaW4nOiBzb3VyY2VQbHVnaW5JbnN0YW5jZSxcbiAgICAgICAgICAgICAgICAnb3V0cHV0SW5kZXgnOiBvdXRwdXRJbmRleCxcbiAgICAgICAgICAgICAgICAnZnJhbWVTaXplJzogZnJhbWVTaXplLFxuICAgICAgICAgICAgICAgICdmZWF0dXJlcyc6IHt9IEpTLVh0cmFjdCBmZWF0dXJlIHJlc3VsdHMgb2JqZWN0XG4gICAgICAgICAgICB9XG4gICAgICAgICovXG4gICAgICAgIGlmICh0eXBlb2YgY19mZWF0dXJlcyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICBjX2ZlYXR1cmVzKE1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIm9uZmVhdHVyZXNcIiwge1xuICAgICAgICAnZ2V0JzogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGNfZmVhdHVyZXM7XG4gICAgICAgIH0sXG4gICAgICAgICdzZXQnOiBmdW5jdGlvbiAoZnVuYykge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBmdW5jID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICBjX2ZlYXR1cmVzID0gZnVuYztcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG59O1xuXG5leHBvcnQge1BsdWdpbkZlYXR1cmVJbnRlcmZhY2VSZWNlaXZlcn07XG4iLCIvKiBqc2hpbnQgZXN2ZXJzaW9uOiA2ICovXG5cbnZhciBQbHVnaW5GZWF0dXJlSW50ZXJmYWNlU2VuZGVyID0gZnVuY3Rpb24gKEZlYXR1cmVJbnRlcmZhY2VJbnN0YW5jZSwgRmFjdG9yeUZlYXR1cmVNYXApIHtcbiAgICB2YXIgT3V0cHV0Tm9kZSA9IGZ1bmN0aW9uIChwYXJlbnQsIG91dHB1dCwgaW5kZXgpIHtcbiAgICAgICAgdmFyIGV4dHJhY3RvcnMgPSBbXTtcbiAgICAgICAgdmFyIEV4dHJhY3RvciA9IGZ1bmN0aW9uIChvdXRwdXQsIGZyYW1lU2l6ZSkge1xuICAgICAgICAgICAgdGhpcy5leHRyYWN0b3IgPSBGZWF0dXJlSW50ZXJmYWNlSW5zdGFuY2UucGx1Z2luLmZhY3RvcnkuY29udGV4dC5jcmVhdGVBbmFseXNlcigpO1xuICAgICAgICAgICAgdGhpcy5leHRyYWN0b3IuZmZ0U2l6ZSA9IGZyYW1lU2l6ZTtcbiAgICAgICAgICAgIG91dHB1dC5jb25uZWN0KHRoaXMuZXh0cmFjdG9yKTtcbiAgICAgICAgICAgIHRoaXMuZmVhdHVyZXMgPSBbXTtcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImZyYW1lU2l6ZVwiLCB7XG4gICAgICAgICAgICAgICAgJ3ZhbHVlJzogZnJhbWVTaXplXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8qXG4gICAgICAgICAgICBmdW5jdGlvbiByZWN1cnNpdmVQcm9jZXNzaW5nKGJhc2UsIGxpc3QpIHtcbiAgICAgICAgICAgICAgICB2YXIgbCA9IGxpc3QubGVuZ3RoLFxuICAgICAgICAgICAgICAgICAgICBpLCBlbnRyeTtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGVudHJ5ID0gbGlzdFtpXTtcbiAgICAgICAgICAgICAgICAgICAgYmFzZVtlbnRyeS5uYW1lXS5hcHBseShiYXNlLCBlbnRyeS5wYXJhbWV0ZXJzKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVudHJ5LmZlYXR1cmVzICYmIGVudHJ5LmZlYXR1cmVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlY3Vyc2l2ZVByb2Nlc3NpbmcoYmFzZS5yZXN1bHRbZW50cnkubmFtZV0sIGVudHJ5LmZlYXR1cmVzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICovXG4gICAgICAgICAgICB2YXIgcmVjdXJzaXZlUHJvY2Vzc2luZyA9IHRoaXMuZmFjdG9yeS5yZWN1cnNpdmVQcm9jZXNzaW5nO1xuXG4gICAgICAgICAgICBmdW5jdGlvbiBvbmF1ZGlvY2FsbGJhY2soZGF0YSkge1xuICAgICAgICAgICAgICAgIC8vdGhpcyA9PT0gRXh0cmFjdG9yXG4gICAgICAgICAgICAgICAgdmFyIG1lc3NhZ2UgPSB7XG4gICAgICAgICAgICAgICAgICAgICdudW1iZXJPZkNoYW5uZWxzJzogMSxcbiAgICAgICAgICAgICAgICAgICAgJ3Jlc3VsdHMnOiBbXVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgcmVjdXJzaXZlUHJvY2Vzc2luZyhkYXRhLCB0aGlzLmZlYXR1cmVzKTtcbiAgICAgICAgICAgICAgICBtZXNzYWdlLnJlc3VsdHNbMF0gPSB7XG4gICAgICAgICAgICAgICAgICAgICdjaGFubmVsJzogMCxcbiAgICAgICAgICAgICAgICAgICAgJ3Jlc3VsdHMnOiBKU09OLnBhcnNlKGRhdGEudG9KU09OKCkpXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB0aGlzLnBvc3RGZWF0dXJlcyhkYXRhLmxlbmd0aCwgbWVzc2FnZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuc2V0RmVhdHVyZXMgPSBmdW5jdGlvbiAoZmVhdHVyZUxpc3QpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZlYXR1cmVzID0gZmVhdHVyZUxpc3Q7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZmVhdHVyZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXh0cmFjdG9yLmNsZWFyQ2FsbGJhY2soKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmV4dHJhY3Rvci5mcmFtZUNhbGxiYWNrKG9uYXVkaW9jYWxsYmFjaywgdGhpcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIFdvcmtlckV4dHJhY3RvciA9IGZ1bmN0aW9uIChvdXRwdXQsIGZyYW1lU2l6ZSkge1xuICAgICAgICAgICAgZnVuY3Rpb24gb25hdWRpb2NhbGxiYWNrKGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgYywgZnJhbWVzID0gW107XG4gICAgICAgICAgICAgICAgZm9yIChjID0gMDsgYyA8IGUuaW5wdXRCdWZmZXIubnVtYmVyT2ZDaGFubmVsczsgYysrKSB7XG4gICAgICAgICAgICAgICAgICAgIGZyYW1lc1tjXSA9IGUuaW5wdXRCdWZmZXIuZ2V0Q2hhbm5lbERhdGEoYyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHdvcmtlci5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgICAgICAgICAgICdzdGF0ZSc6IDIsXG4gICAgICAgICAgICAgICAgICAgICdmcmFtZXMnOiBmcmFtZXNcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gcmVzcG9uc2UobXNnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3N0RmVhdHVyZXMoZnJhbWVTaXplLCBtc2cuZGF0YS5yZXNwb25zZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciB3b3JrZXIgPSBuZXcgV29ya2VyKFwianNhcC9mZWF0dXJlLXdvcmtlci5qc1wiKTtcbiAgICAgICAgICAgIHdvcmtlci5vbmVycm9yID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdGhpcy5zZXRGZWF0dXJlcyA9IGZ1bmN0aW9uIChmZWF0dXJlTGlzdCkge1xuICAgICAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgICAgICAgICB2YXIgY29uZmlnTWVzc2FnZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgJ3N0YXRlJzogMSxcbiAgICAgICAgICAgICAgICAgICAgJ3NhbXBsZVJhdGUnOiBGZWF0dXJlSW50ZXJmYWNlSW5zdGFuY2UucGx1Z2luLmZhY3RvcnkuY29udGV4dC5zYW1wbGVSYXRlLFxuICAgICAgICAgICAgICAgICAgICAnZmVhdHVyZUxpc3QnOiBmZWF0dXJlTGlzdCxcbiAgICAgICAgICAgICAgICAgICAgJ251bUNoYW5uZWxzJzogb3V0cHV0Lm51bWJlck9mT3V0cHV0cyxcbiAgICAgICAgICAgICAgICAgICAgJ2ZyYW1lU2l6ZSc6IHRoaXMuZnJhbWVTaXplXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB0aGlzLmZlYXR1cmVzID0gZmVhdHVyZUxpc3Q7XG4gICAgICAgICAgICAgICAgaWYgKGZlYXR1cmVMaXN0ICYmIGZlYXR1cmVMaXN0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgd29ya2VyLm9ubWVzc2FnZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZS5kYXRhLnN0YXRlID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya2VyLm9ubWVzc2FnZSA9IHJlc3BvbnNlLmJpbmQoc2VsZik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5leHRyYWN0b3Iub25hdWRpb3Byb2Nlc3MgPSBvbmF1ZGlvY2FsbGJhY2suYmluZChzZWxmKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya2VyLnBvc3RNZXNzYWdlKGNvbmZpZ01lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB3b3JrZXIucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgICAgICAgICAgICAgJ3N0YXRlJzogMFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmV4dHJhY3Rvci5vbmF1ZGlvcHJvY2VzcyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHRoaXMuZXh0cmFjdG9yID0gRmVhdHVyZUludGVyZmFjZUluc3RhbmNlLnBsdWdpbi5mYWN0b3J5LmNvbnRleHQuY3JlYXRlU2NyaXB0UHJvY2Vzc29yKGZyYW1lU2l6ZSwgb3V0cHV0Lm51bWJlck9mT3V0cHV0cywgMSk7XG4gICAgICAgICAgICBvdXRwdXQuY29ubmVjdCh0aGlzLmV4dHJhY3Rvcik7XG4gICAgICAgICAgICB0aGlzLmV4dHJhY3Rvci5jb25uZWN0KEZlYXR1cmVJbnRlcmZhY2VJbnN0YW5jZS5wbHVnaW4uZmFjdG9yeS5jb250ZXh0LmRlc3RpbmF0aW9uKTtcblxuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIFwiZnJhbWVTaXplXCIsIHtcbiAgICAgICAgICAgICAgICAndmFsdWUnOiBmcmFtZVNpemVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmFkZEV4dHJhY3RvciA9IGZ1bmN0aW9uIChmcmFtZVNpemUpIHtcbiAgICAgICAgICAgIHZhciBvYmo7XG4gICAgICAgICAgICBpZiAod2luZG93Lldvcmtlcikge1xuICAgICAgICAgICAgICAgIG9iaiA9IG5ldyBXb3JrZXJFeHRyYWN0b3Iob3V0cHV0LCBmcmFtZVNpemUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBvYmogPSBuZXcgRXh0cmFjdG9yKG91dHB1dCwgZnJhbWVTaXplKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGV4dHJhY3RvcnMucHVzaChvYmopO1xuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwgXCJwb3N0RmVhdHVyZXNcIiwge1xuICAgICAgICAgICAgICAgICd2YWx1ZSc6IGZ1bmN0aW9uIChmcmFtZVNpemUsIHJlc3VsdHNKU09OKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBvYmogPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnb3V0cHV0SW5kZXgnOiBpbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICdmcmFtZVNpemUnOiBmcmFtZVNpemUsXG4gICAgICAgICAgICAgICAgICAgICAgICAncmVzdWx0cyc6IHJlc3VsdHNKU09OXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9zdEZlYXR1cmVzKG9iaik7XG4gICAgICAgICAgICAgICAgfS5iaW5kKHRoaXMpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBvYmo7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuZmluZEV4dHJhY3RvciA9IGZ1bmN0aW9uIChmcmFtZVNpemUpIHtcbiAgICAgICAgICAgIHZhciBjaGVjayA9IGZyYW1lU2l6ZTtcbiAgICAgICAgICAgIHJldHVybiBleHRyYWN0b3JzLmZpbmQoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAvLyBUaGlzIE1VU1QgYmUgPT09IE5PVCA9PT1cbiAgICAgICAgICAgICAgICByZXR1cm4gZS5mcmFtZVNpemUgPT09IGNoZWNrO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuZGVsZXRlRXh0cmFjdG9yID0gZnVuY3Rpb24gKGZyYW1lU2l6ZSkge307XG4gICAgfTtcbiAgICB2YXIgb3V0cHV0Tm9kZXMgPSBbXTtcbiAgICB0aGlzLnVwZGF0ZUZlYXR1cmVzID0gZnVuY3Rpb24gKGZlYXR1cmVPYmplY3QpIHtcbiAgICAgICAgLy8gW10gT3V0cHV0IC0+IHt9ICdmcmFtZXNpemUnIC0+IHt9ICdmZWF0dXJlcydcbiAgICAgICAgdmFyIG87XG4gICAgICAgIGZvciAobyA9IDA7IG8gPCBmZWF0dXJlT2JqZWN0Lmxlbmd0aDsgbysrKSB7XG4gICAgICAgICAgICBpZiAob3V0cHV0Tm9kZXNbb10gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGlmIChvID4gRmVhdHVyZUludGVyZmFjZUluc3RhbmNlLnBsdWdpbi5udW1PdXRwdXRzKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IChcIlJlcXVlc3RlZCBhbiBvdXRwdXQgdGhhdCBkb2VzIG5vdCBleGlzdFwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgb3V0cHV0Tm9kZXNbb10gPSBuZXcgT3V0cHV0Tm9kZShGZWF0dXJlSW50ZXJmYWNlSW5zdGFuY2UucGx1Z2luLCBGZWF0dXJlSW50ZXJmYWNlSW5zdGFuY2UucGx1Z2luLm91dHB1dHNbb10sIG8pO1xuICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvdXRwdXROb2Rlc1tvXSwgXCJwb3N0RmVhdHVyZXNcIiwge1xuICAgICAgICAgICAgICAgICAgICAndmFsdWUnOiBmdW5jdGlvbiAocmVzdWx0T2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBvc3RGZWF0dXJlcyhyZXN1bHRPYmplY3QpO1xuICAgICAgICAgICAgICAgICAgICB9LmJpbmQodGhpcylcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBzaTtcbiAgICAgICAgICAgIGZvciAoc2kgPSAwOyBzaSA8IGZlYXR1cmVPYmplY3Rbb10ubGVuZ3RoOyBzaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGV4dHJhY3RvciA9IG91dHB1dE5vZGVzW29dLmZpbmRFeHRyYWN0b3IoZmVhdHVyZU9iamVjdFtvXVtzaV0uZnJhbWVTaXplKTtcbiAgICAgICAgICAgICAgICBpZiAoIWV4dHJhY3Rvcikge1xuICAgICAgICAgICAgICAgICAgICBleHRyYWN0b3IgPSBvdXRwdXROb2Rlc1tvXS5hZGRFeHRyYWN0b3IoZmVhdHVyZU9iamVjdFtvXVtzaV0uZnJhbWVTaXplKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZXh0cmFjdG9yLnNldEZlYXR1cmVzKGZlYXR1cmVPYmplY3Rbb11bc2ldLmZlYXR1cmVMaXN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB0aGlzLnBvc3RGZWF0dXJlcyA9IGZ1bmN0aW9uIChmZWF0dXJlT2JqZWN0KSB7XG4gICAgICAgIC8qXG4gICAgICAgICAgICBDYWxsZWQgYnkgdGhlIGluZGl2aWR1YWwgZXh0cmFjdG9yIGluc3RhbmNlczpcbiAgICAgICAgICAgIGZlYXR1cmVPYmplY3QgPSB7J2ZyYW1lU2l6ZSc6IGZyYW1lU2l6ZSxcbiAgICAgICAgICAgICdvdXRwdXRJbmRleCc6IG91dHB1dEluZGV4LFxuICAgICAgICAgICAgJ3Jlc3VsdHMnOltdfVxuICAgICAgICAqL1xuICAgICAgICBGZWF0dXJlSW50ZXJmYWNlSW5zdGFuY2UucGx1Z2luLmZhY3RvcnkuRmVhdHVyZU1hcC5wb3N0RmVhdHVyZXMoe1xuICAgICAgICAgICAgJ3BsdWdpbic6IEZlYXR1cmVJbnRlcmZhY2VJbnN0YW5jZS5wbHVnaW4ucGx1Z2luSW5zdGFuY2UsXG4gICAgICAgICAgICAnb3V0cHV0SW5kZXgnOiBmZWF0dXJlT2JqZWN0Lm91dHB1dEluZGV4LFxuICAgICAgICAgICAgJ2ZyYW1lU2l6ZSc6IGZlYXR1cmVPYmplY3QuZnJhbWVTaXplLFxuICAgICAgICAgICAgJ3Jlc3VsdHMnOiBmZWF0dXJlT2JqZWN0LnJlc3VsdHNcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIC8vIFNlbmQgdG8gRmFjdG9yeVxuICAgIEZhY3RvcnlGZWF0dXJlTWFwLmNyZWF0ZVNvdXJjZU1hcCh0aGlzLCBGZWF0dXJlSW50ZXJmYWNlSW5zdGFuY2UucGx1Z2luLnBsdWdpbkluc3RhbmNlKTtcbn07XG5cbmV4cG9ydCB7UGx1Z2luRmVhdHVyZUludGVyZmFjZVNlbmRlcn07XG4iLCIvKmpzaGludCBlc3ZlcnNpb246IDYgKi9cbmltcG9ydCB7UGx1Z2luRmVhdHVyZUludGVyZmFjZVJlY2VpdmVyfSBmcm9tIFwiLi9QbHVnaW5GZWF0dXJlSW50ZXJmYWNlUmVjZWl2ZXJcIjtcbmltcG9ydCB7UGx1Z2luRmVhdHVyZUludGVyZmFjZVNlbmRlcn0gZnJvbSBcIi4vUGx1Z2luRmVhdHVyZUludGVyZmFjZVNlbmRlclwiO1xuXG52YXIgUGx1Z2luRmVhdHVyZUludGVyZmFjZSA9IGZ1bmN0aW9uIChCYXNlUGx1Z2luSW5zdGFuY2UpIHtcbiAgICB0aGlzLnBsdWdpbiA9IEJhc2VQbHVnaW5JbnN0YW5jZTtcbiAgICB0aGlzLlJlY2VpdmVyID0gbmV3IFBsdWdpbkZlYXR1cmVJbnRlcmZhY2VSZWNlaXZlcih0aGlzLCBCYXNlUGx1Z2luSW5zdGFuY2UuZmFjdG9yeS5GZWF0dXJlTWFwKTtcbiAgICB0aGlzLlNlbmRlciA9IG5ldyBQbHVnaW5GZWF0dXJlSW50ZXJmYWNlU2VuZGVyKHRoaXMsIEJhc2VQbHVnaW5JbnN0YW5jZS5mYWN0b3J5LkZlYXR1cmVNYXApO1xuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIFwib25mZWF0dXJlc1wiLCB7XG4gICAgICAgICdnZXQnOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5SZWNlaXZlci5vbmZlYXR1cmVzO1xuICAgICAgICB9LFxuICAgICAgICAnc2V0JzogZnVuY3Rpb24gKGZ1bmMpIHtcbiAgICAgICAgICAgIHRoaXMuUmVjZWl2ZXIub25mZWF0dXJlcyA9IGZ1bmM7XG4gICAgICAgICAgICByZXR1cm4gZnVuYztcbiAgICAgICAgfVxuICAgIH0pO1xufTtcblxuZXhwb3J0IHtQbHVnaW5GZWF0dXJlSW50ZXJmYWNlfTtcbiIsIi8qIGpzaGludCBlc3ZlcnNpb246IDYgKi9cbnZhciBQbHVnaW5JbnRlcmZhY2VNZXNzYWdlSHViID0gZnVuY3Rpb24ob3duZXIpIHtcbiAgICBmdW5jdGlvbiBidWlsZFBsdWdpblBhcmFtZXRlckpTT04ocGx1Z2luLCBzb3VyY2VzKSB7XG4gICAgICAgIHZhciBuYW1lcyA9IG93bmVyLnBhcmFtZXRlcnMuZ2V0UGFyYW1ldGVyTmFtZXMoKTtcbiAgICAgICAgdmFyIE8gPSB7fTtcbiAgICAgICAgaWYgKHNvdXJjZXMgPT09IHVuZGVmaW5lZCB8fCBzb3VyY2VzLmxlbmd0aCA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHNvdXJjZXMgPSBuYW1lcztcbiAgICAgICAgfVxuICAgICAgICBuYW1lcy5maWx0ZXIoZnVuY3Rpb24obmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW5jbHVkZXMobmFtZSk7XG4gICAgICAgIH0sIHNvdXJjZXMpLmZvckVhY2goZnVuY3Rpb24obmFtZSkge1xuICAgICAgICAgICAgdmFyIHBhcmFtID0gb3duZXIucGFyYW1ldGVycy5nZXRQYXJhbWV0ZXJCeU5hbWUobmFtZSk7XG4gICAgICAgICAgICBPW25hbWVdID0gcGFyYW0uZ2V0UGFyYW1ldGVyT2JqZWN0KCk7XG4gICAgICAgICAgICBPW25hbWVdLm5hbWUgPSBuYW1lO1xuICAgICAgICAgICAgaWYgKHBhcmFtLmF1dG9tYXRpb24pIHtcbiAgICAgICAgICAgICAgICBPW25hbWVdLmF1dG9tYXRlZCA9IHBhcmFtLmF1dG9tYXRpb24uZW5hYmxlZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBPO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGJ1aWxkUGFyYW1ldGVyVXBkYXRlUGF5bG9hZChzZW5kZXJfaWQsIHNvdXJjZXMpIHtcbiAgICAgICAgdmFyIG1zZyA9IHtcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwidXBkYXRlUGFyYW1ldGVyc1wiLFxuICAgICAgICAgICAgcGFyYW1ldGVyczogYnVpbGRQbHVnaW5QYXJhbWV0ZXJKU09OKG93bmVyLCBzb3VyY2VzKVxuICAgICAgICB9O1xuICAgICAgICBpZiAoc2VuZGVyX2lkKSB7XG4gICAgICAgICAgICBtc2cuc2VuZGVyX2lkID0gc2VuZGVyX2lkO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtc2c7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2VuZFBhcmFtZXRlclVwZGF0ZXMoY2hhbm5lbCwgc291cmNlcykge1xuICAgICAgICBjaGFubmVsLnBvc3RNZXNzYWdlKGJ1aWxkUGFyYW1ldGVyVXBkYXRlUGF5bG9hZCh1bmRlZmluZWQsIHNvdXJjZXMpLCBsb2NhdGlvbi5vcmlnaW4pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGJyb2FkY2FzdFBhcmFtZXRlclVwZGF0ZXMoc2VuZGVyX2lkLCBzb3VyY2VzKSB7XG4gICAgICAgIHZhciBtc2cgPSBidWlsZFBhcmFtZXRlclVwZGF0ZVBheWxvYWQoc2VuZGVyX2lkLCBzb3VyY2VzKTtcbiAgICAgICAgd2luZG93TWVzc2FnZUxpc3QuZm9yRWFjaChmdW5jdGlvbih3KSB7XG4gICAgICAgICAgICB3LnBvc3RNZXNzYWdlKG1zZywgbG9jYXRpb24ub3JpZ2luKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYnJvYWRjYXN0U3RhdGVDaGFuZ2UobGV2ZWwsIHRlcm0sIHZhbHVlKSB7XG4gICAgICAgIHZhciBtc2cgPSB7XG4gICAgICAgICAgICBtZXNzYWdlOiBcInVwZGF0ZVN0YXRlXCIsXG4gICAgICAgICAgICBsZXZlbDogbGV2ZWwsXG4gICAgICAgICAgICB0ZXJtOiB0ZXJtLFxuICAgICAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICAgIH07XG4gICAgICAgIHdpbmRvd01lc3NhZ2VMaXN0LmZvckVhY2goZnVuY3Rpb24odykge1xuICAgICAgICAgICAgdy5wb3N0TWVzc2FnZShtc2csIGxvY2F0aW9uLm9yaWdpbik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldFBhcmFtZXRlck1lc3NhZ2UoZSkge1xuICAgICAgICB2YXIgdXBkYXRlT2JqZWN0cyA9IFtdO1xuICAgICAgICB2YXIgcGFyYW1ldGVycyA9IEpTT04ucGFyc2UoZS5tZXNzYWdlLnBhcmFtZXRlcnMpO1xuICAgICAgICBPYmplY3Qua2V5cyhwYXJhbWV0ZXJzKS5mb3JFYWNoKGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgICAgICAgIHZhciBwYXJhbWV0ZXJPYmplY3QgPSBvd25lci5wYXJhbWV0ZXJzLmdldFBhcmFtZXRlckJ5TmFtZShuYW1lKTtcbiAgICAgICAgICAgIGlmIChwYXJhbWV0ZXJPYmplY3QpIHtcbiAgICAgICAgICAgICAgICBwYXJhbWV0ZXJPYmplY3Quc2V0VmFsdWUocGFyYW1ldGVyc1tuYW1lXS52YWx1ZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIHVwZGF0ZU9iamVjdHMucHVzaChuYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB1cGRhdGVPYmplY3RzO1xuICAgIH1cblxuICAgIHZhciB3aW5kb3dNZXNzYWdlTGlzdCA9IFtdO1xuICAgIHZhciBsaXN0ZW5lcjtcbiAgICB2YXIgc3RhdGUgPSAwO1xuICAgIHZhciBldmVudFRhcmdldCA9IG5ldyBFdmVudFRhcmdldCgpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgaWYgKCF3aW5kb3dNZXNzYWdlTGlzdC5pbmNsdWRlcyhlLnNvdXJjZSkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBzd2l0Y2goZS5kYXRhLm1lc3NhZ2UpIHtcbiAgICAgICAgICAgIGNhc2UgXCJzZXRQYXJhbWV0ZXJCeU5hbWVcIjpcbiAgICAgICAgICAgIHZhciBwYXJhbWV0ZXJPYmplY3Q7XG4gICAgICAgICAgICAgICAgaWYgKGUuZGF0YS5wYXJhbWV0ZXIubmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBwYXJhbWV0ZXJPYmplY3QgPSBvd25lci5wYXJhbWV0ZXJzLmdldFBhcmFtZXRlckJ5TmFtZShlLmRhdGEucGFyYW1ldGVyLm5hbWUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocGFyYW1ldGVyT2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhbWV0ZXJPYmplY3Quc2V0VmFsdWUoZS5kYXRhLnBhcmFtZXRlci52YWx1ZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJvYWRjYXN0UGFyYW1ldGVyVXBkYXRlcyhlLmRhdGEuc2VuZGVyX2lkLCBbZS5kYXRhLnBhcmFtZXRlci5uYW1lXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwic2V0UGFyYW1ldGVyc0J5T2JqZWN0XCI6XG4gICAgICAgICAgICAgICAgaWYgKGUuZGF0YS5wYXJhbWV0ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHVwZGF0ZU9iamVjdHMgPSBzZXRQYXJhbWV0ZXJNZXNzYWdlKGUpO1xuICAgICAgICAgICAgICAgICAgICBicm9hZGNhc3RQYXJhbWV0ZXJVcGRhdGVzKGUuZGF0YS5zZW5kZXJfaWQsIHVwZGF0ZU9iamVjdHMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJyZXF1ZXN0UGFyYW1ldGVyc1wiOlxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZS5kYXRhLm5hbWUgPT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgICAgICBzZW5kUGFyYW1ldGVyVXBkYXRlcyhlLnNvdXJjZSwgZS5kYXRhLm5hbWUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbmRQYXJhbWV0ZXJVcGRhdGVzKGUuc291cmNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwicmVxdWVzdFNlc3Npb25TdGF0ZVwiOlxuICAgICAgICAgICAgICAgIGJyb2FkY2FzdFN0YXRlQ2hhbmdlKFwic2Vzc2lvblwiLCBlLmRhdGEudGVybSwgb3duZXIuc2Vzc2lvbkRhdGFJbnRlcmZhY2UucmVxdWVzdFRlcm0oZS5kYXRhLnRlcm0pKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJyZXF1ZXN0VHJhY2tTdGF0ZVwiOlxuICAgICAgICAgICAgICAgIGJyb2FkY2FzdFN0YXRlQ2hhbmdlKFwidHJhY2tcIiwgZS5kYXRhLnRlcm0sIG93bmVyLnRyYWNrRGF0YUludGVyZmFjZS5yZXF1ZXN0VGVybShlLmRhdGEudGVybSkpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInJlcXVlc3RVc2VyU3RhdGVcIjpcbiAgICAgICAgICAgICAgICBicm9hZGNhc3RTdGF0ZUNoYW5nZShcInVzZXJcIiwgZS5kYXRhLnRlcm0sIG93bmVyLnVzZXJEYXRhSW50ZXJmYWNlLnJlcXVlc3RUZXJtKGUuZGF0YS50ZXJtKSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwicmVxdWVzdFBsdWdpblN0YXRlXCI6XG4gICAgICAgICAgICAgICAgYnJvYWRjYXN0U3RhdGVDaGFuZ2UoXCJwbHVnaW5cIiwgZS5kYXRhLnRlcm0sIG93bmVyLnBsdWdpbkRhdGFJbnRlcmZhY2UucmVxdWVzdFRlcm0oZS5kYXRhLnRlcm0pKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJjdXN0b21NZXNzYWdlXCI6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRocm93KFwiVW5rbm93biBtZXNzYWdlIHR5cGUgXFxcIlwiK2UuZGF0YS5tZXNzYWdlK1wiXFxcIlwiKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgICBcImFkZEV2ZW50TGlzdGVuZXJcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbihhLGIsYykge1xuICAgICAgICAgICAgICAgIHJldHVybiBldmVudFRhcmdldC5hZGRFdmVudExpc3RlbmVyKGEsYixjKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJyZW1vdmVFdmVudExpc3RlbmVyXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24oYSxiLGMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZXZlbnRUYXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihhLGIsYyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwic2VuZFN0YXRlXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24obGV2ZWwsIHRlcm0pIHtcbiAgICAgICAgICAgICAgICBpZiAobGV2ZWwgPT0gXCJzZXNzaW9uXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgYnJvYWRjYXN0U3RhdGVDaGFuZ2UoXCJzZXNzaW9uXCIsIHRlcm0sIG93bmVyLnNlc3Npb25EYXRhSW50ZXJmYWNlLnJlcXVlc3RUZXJtKHRlcm0pKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGxldmVsID09IFwidHJhY2tcIikge1xuICAgICAgICAgICAgICAgICAgICBicm9hZGNhc3RTdGF0ZUNoYW5nZShcInRyYWNrXCIsIHRlcm0sIG93bmVyLnRyYWNrRGF0YUludGVyZmFjZS5yZXF1ZXN0VGVybSh0ZXJtKSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChsZXZlbCA9PSBcInVzZXJcIikge1xuICAgICAgICAgICAgICAgICAgICBicm9hZGNhc3RTdGF0ZUNoYW5nZShcInVzZXJcIiwgdGVybSwgb3duZXIudXNlckRhdGFJbnRlcmZhY2UucmVxdWVzdFRlcm0odGVybSkpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobGV2ZWwgPT0gXCJwbHVnaW5cIikge1xuICAgICAgICAgICAgICAgICAgICBicm9hZGNhc3RTdGF0ZUNoYW5nZShcInBsdWdpblwiLCB0ZXJtLCBvd25lci5wbHVnaW5EYXRhSW50ZXJmYWNlLnJlcXVlc3RUZXJtKHRlcm0pKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBcIkludmFsaWQgc3RhdGUgbGV2ZWwgb3B0aW9uXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInVwZGF0ZUludGVyZmFjZXNcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbihhdXRvbWF0aW9uT25seSkge1xuICAgICAgICAgICAgICAgIGlmIChhdXRvbWF0aW9uT25seSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGF1dG9tYXRpb25Pbmx5ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBzb3VyY2VzO1xuICAgICAgICAgICAgICAgIGlmIChhdXRvbWF0aW9uT25seSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcGFyYW1ldGVyTmFtZXMgPSBvd25lci5wYXJhbWV0ZXJzLmdldFBhcmFtZXRlck5hbWVzKCk7XG4gICAgICAgICAgICAgICAgICAgIHNvdXJjZXMgPSBwYXJhbWV0ZXJOYW1lcy5maWx0ZXIoZnVuY3Rpb24obmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBhcmFtID0gb3duZXIucGFyYW1ldGVycy5nZXRQYXJhbWV0ZXJCeU5hbWUobmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKHBhcmFtLmF1dG9tYXRhYmxlICYmIHBhcmFtLmVuYWJsZWQgPT09IHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNvdXJjZXMubGVuZ3RoID4gMClcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJvYWRjYXN0UGFyYW1ldGVyVXBkYXRlcyh1bmRlZmluZWQsIHNvdXJjZXMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYnJvYWRjYXN0UGFyYW1ldGVyVXBkYXRlcygpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImNsb3NlV2luZG93c1wiOiB7XG4gICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgaWYgKHN0YXRlID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHdoaWxlKHdpbmRvd01lc3NhZ2VMaXN0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB3ID0gd2luZG93TWVzc2FnZUxpc3QucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB3LmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyhcIkNhbm5lbCBhbHJlYWR5IGNsb3NlZFwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwicmVnaXN0ZXJXaW5kb3dcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbih3KSB7XG4gICAgICAgICAgICAgICAgaWYgKHdpbmRvd01lc3NhZ2VMaXN0LmluY2x1ZGVzKHcpKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvd01lc3NhZ2VMaXN0LnNwbGljZSh3aW5kb3dNZXNzYWdlTGlzdC5pbmRleE9mKHcpLCAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgd2luZG93TWVzc2FnZUxpc3QucHVzaCh3KTtcbiAgICAgICAgICAgICAgICB3LnBsdWdpbkluc3RhbmNlID0gb3duZXI7XG4gICAgICAgICAgICAgICAgc2VuZFBhcmFtZXRlclVwZGF0ZXModyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwicmVtb3ZlV2luZG93XCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24odykge1xuICAgICAgICAgICAgICAgIGlmICh3aW5kb3dNZXNzYWdlTGlzdC5pbmNsdWRlcyh3KSkge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3dNZXNzYWdlTGlzdC5zcGxpY2Uod2luZG93TWVzc2FnZUxpc3QuaW5kZXhPZih3KSwgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59O1xuXG5leHBvcnQge1BsdWdpbkludGVyZmFjZU1lc3NhZ2VIdWJ9O1xuIiwiLyoganNoaW50IGVzdmVyc2lvbjogNiAqL1xuXG52YXIgUGx1Z2luUGFyYW1ldGVySW50ZXJmYWNlTm9kZSA9IGZ1bmN0aW9uIChET00sIFBsdWdpblBhcmFtZXRlckluc3RhbmNlLCBwcm9jZXNzb3IsIGd1aSkge1xuICAgIHRoaXMuaW5wdXQgPSBET007XG4gICAgdGhpcy5wcm9jZXNzb3IgPSBwcm9jZXNzb3I7XG4gICAgdGhpcy5HVUkgPSBndWk7XG4gICAgdGhpcy5BdWRpb1BhcmFtID0gUGx1Z2luUGFyYW1ldGVySW5zdGFuY2U7XG4gICAgdGhpcy5oYW5kbGVFdmVudCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICB0aGlzLkF1ZGlvUGFyYW0udmFsdWUgPSB0aGlzLmlucHV0LnZhbHVlO1xuICAgIH07XG4gICAgdGhpcy5pbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIHRoaXMpO1xuICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCB0aGlzKTtcbiAgICB0aGlzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzKTtcbn07XG5cbnZhciBQbHVnaW5Vc2VySW50ZXJmYWNlID0gZnVuY3Rpb24gKEJhc2VQbHVnaW5JbnN0YW5jZSwgd2lkdGgsIGhlaWdodCkge1xuICAgIGNvbnNvbGUubG9nKFwiREVQUkVDQVRFRCEhXCIpO1xuICAgIGNvbnNvbGUubG9nKFwiVGhlIGNsYXNzIFBsdWdpblVzZXJJbnRlcmZhY2UgaGFzIGJlZW4gZGVwcmVjYXRlZFwiKTtcbiAgICBjb25zb2xlLmxvZyhcIlBsZWFzZSBsb29rIGF0IHRoZSBkb2N1bWVudHMgZm9yIHRoZSBuZXcgbWV0aG9kcyBmb3IgYnVpbGRpbmcgcGx1Z2luc1wiKTtcbiAgICB0aGlzLnByb2Nlc3NvciA9IEJhc2VQbHVnaW5JbnN0YW5jZTtcbiAgICB0aGlzLnJvb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGlmICh3aWR0aCA+IDApIHtcbiAgICAgICAgdGhpcy5yb290LnN0eWxlLndpZHRoID0gd2lkdGggKyBcInB4XCI7XG4gICAgfVxuICAgIGlmIChoZWlnaHQgPiAwKSB7XG4gICAgICAgIHRoaXMucm9vdC5zdHlsZS5oZWlnaHQgPSBoZWlnaHQgKyBcInB4XCI7XG4gICAgfVxuICAgIHRoaXMuZGltID0ge1xuICAgICAgICB3aWR0aDogd2lkdGgsXG4gICAgICAgIGhlaWdodDogaGVpZ2h0XG4gICAgfTtcbiAgICB0aGlzLmludGVydmFsRnVuY3Rpb24gPSBudWxsO1xuICAgIHRoaXMudXBkYXRlSW50ZXJ2YWwgPSBudWxsO1xuICAgIHRoaXMuUGx1Z2luUGFyYW1ldGVySW50ZXJmYWNlcyA9IFtdO1xuXG4gICAgdGhpcy5jcmVhdGVQbHVnaW5QYXJhbWV0ZXJJbnRlcmZhY2VOb2RlID0gZnVuY3Rpb24gKERPTSwgUGx1Z2luUGFyYW1ldGVySW5zdGFuY2UpIHtcbiAgICAgICAgdmFyIG5vZGUgPSBuZXcgUGx1Z2luUGFyYW1ldGVySW50ZXJmYWNlTm9kZShET00sIFBsdWdpblBhcmFtZXRlckluc3RhbmNlLCB0aGlzLnByb2Nlc3NvciwgdGhpcyk7XG4gICAgICAgIHRoaXMuUGx1Z2luUGFyYW1ldGVySW50ZXJmYWNlcy5wdXNoKG5vZGUpO1xuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9O1xuXG4gICAgdGhpcy51cGRhdGUgPSBmdW5jdGlvbiAoKSB7fTtcblxufTtcblxuUGx1Z2luVXNlckludGVyZmFjZS5wcm90b3R5cGUuZ2V0Um9vdCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5yb290O1xufTtcblBsdWdpblVzZXJJbnRlcmZhY2UucHJvdG90eXBlLmdldERpbWVuc2lvbnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGltO1xufTtcblBsdWdpblVzZXJJbnRlcmZhY2UucHJvdG90eXBlLmdldFdpZHRoID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLmRpbS53aWR0aDtcbn07XG5QbHVnaW5Vc2VySW50ZXJmYWNlLnByb3RvdHlwZS5nZXRIZWlnaHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGltLmhlaWdodDtcbn07XG5QbHVnaW5Vc2VySW50ZXJmYWNlLnByb3RvdHlwZS5iZWdpbkNhbGxiYWNrcyA9IGZ1bmN0aW9uIChtcykge1xuICAgIC8vIEFueSByZWdpc3RlcmVkIGNhbGxiYWNrcyBhcmUgc3RhcnRlZCBieSB0aGUgaG9zdFxuICAgIGlmIChtcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIG1zID0gMjUwO1xuICAgIH0gLy9EZWZhdWx0IG9mIDI1MG1zIHVwZGF0ZSBwZXJpb2RcbiAgICBpZiAodGhpcy5pbnRlcnZhbEZ1bmN0aW9uID09PSBudWxsKSB7XG4gICAgICAgIHRoaXMudXBkYXRlSW50ZXJ2YWwgPSBtcztcbiAgICAgICAgdGhpcy5pbnRlcnZhbEZ1bmN0aW9uID0gd2luZG93LnNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgICAgIH0uYmluZCh0aGlzKSwgMjUwKTtcbiAgICB9XG59O1xuUGx1Z2luVXNlckludGVyZmFjZS5wcm90b3R5cGUuc3RvcENhbGxiYWNrcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAvLyBBbnkgcmVnaXN0ZXJlZCBjYWxsYmFja3MgYXJlIHN0b3BwZWQgYnkgdGhlIGhvc3RcbiAgICBpZiAodGhpcy5pbnRlcnZhbEZ1bmN0aW9uICE9PSBudWxsKSB7XG4gICAgICAgIHdpbmRvdy5jbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWxGdW5jdGlvbik7XG4gICAgICAgIHRoaXMudXBkYXRlSW50ZXJ2YWwgPSBudWxsO1xuICAgICAgICB0aGlzLmludGVydmFsRnVuY3Rpb24gPSBudWxsO1xuICAgIH1cbn07XG5QbHVnaW5Vc2VySW50ZXJmYWNlLnByb3RvdHlwZS5sb2FkUmVzb3VyY2UgPSBmdW5jdGlvbiAodXJsKSB7XG4gICAgdmFyIHAgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIHZhciByZXEgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgcmVxLm9wZW4oJ0dFVCcsIHVybCk7XG4gICAgICAgIHJlcS5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAocmVxLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShyZXEucmVzcG9uc2UpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZWplY3QoRXJyb3IocmVxLnN0YXR1c1RleHQpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcmVxLm9uZXJyb3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZWplY3QoRXJyb3IoXCJOZXR3b3JrIEVycm9yXCIpKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmVxLnNlbmQoKTtcbiAgICB9KTtcbiAgICByZXR1cm4gcDtcbn07XG5QbHVnaW5Vc2VySW50ZXJmYWNlLnByb3RvdHlwZS5jbGVhckdVSSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnN0b3BDYWxsYmFja3MoKTtcbiAgICB0aGlzLnJvb3QuaW5uZXJIVE1MID0gXCJcIjtcbn07XG5cbmV4cG9ydCB7UGx1Z2luVXNlckludGVyZmFjZX07XG4iLCIvLyBBZGQgZ2V0SW5wdXRzIHRvIGFsbCBBdWRpb05vZGVzIHRvIGVhc2UgZGVwbG95bWVudFxuLypnbG9iYWxzIEF1ZGlvTm9kZSwgV29ya2VyLCBjb25zb2xlLCB3aW5kb3csIGRvY3VtZW50LCBQcm9taXNlLCBYTUxIdHRwUmVxdWVzdCAqL1xuLyplc2xpbnQtZW52IGJyb3dzZXIgKi9cbi8qanNoaW50IGVzdmVyc2lvbjogNiAqL1xuaW1wb3J0IHtQYXJhbWV0ZXJNYW5hZ2VyfSBmcm9tIFwiLi9wYXJhbWV0ZXJNYW5hZ2VyLmpzXCI7XG5pbXBvcnQge1BsdWdpbkludGVyZmFjZU1lc3NhZ2VIdWJ9IGZyb20gXCIuL1BsdWdpbkludGVyZmFjZU1lc3NhZ2VIdWIuanNcIjtcbmltcG9ydCB7UGx1Z2luRmVhdHVyZUludGVyZmFjZX0gZnJvbSBcIi4vUGx1Z2luRmVhdHVyZUludGVyZmFjZVwiO1xuaW1wb3J0IHtQbHVnaW5Vc2VySW50ZXJmYWNlfSBmcm9tIFwiLi9QbHVnaW5Vc2VySW50ZXJmYWNlXCI7XG5pbXBvcnQgTGlua2VkU3RvcmUgZnJvbSBcIi4uL0xpbmtlZFN0b3JlXCI7XG5pbXBvcnQgTGlua2VkU3RvcmVJbnRlcmZhY2UgZnJvbSBcIi4vTGlua2VkU3RvcmVJbnRlcmZhY2VcIjtcbmltcG9ydCBBc3NldFBhY2tTZWxlY3RvckludGVyZmFjZSBmcm9tIFwiLi9Bc3NldFBhY2tTZWxlY3RvckludGVyZmFjZVwiO1xuXG5pZiAodHlwZW9mIEF1ZGlvTm9kZSA9PT0gXCJmdW5jdGlvblwiICYmIHdpbmRvdy5pbXBvcnRTY3JpcHRzID09PSB1bmRlZmluZWQpIHtcbiAgICBBdWRpb05vZGUucHJvdG90eXBlLmdldElucHV0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIFt0aGlzXTtcbiAgICB9O1xufVxuXG52YXIgQmFzZVBsdWdpbiA9IGZ1bmN0aW9uKGZhY3RvcnksIG93bmVyKSB7XG4gICAgdmFyIGlucHV0TGlzdCA9IFtdLFxuICAgICAgICBvdXRwdXRMaXN0ID0gW10sXG4gICAgICAgIHBPd25lciA9IG93bmVyLFxuICAgICAgICBkZWxheVNhbXBsZXMgPSAwLFxuICAgICAgICBldmVudFRhcmdldCA9IG5ldyBFdmVudFRhcmdldCgpLFxuICAgICAgICBleHRlcm5hbEludGVyZmFjZSA9IG5ldyBQbHVnaW5JbnRlcmZhY2VNZXNzYWdlSHViKHRoaXMpO1xuICAgIGlmICh0aGlzLmNvbnRleHQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBmYWN0b3J5LmNvbnRleHQ7XG4gICAgfVxuICAgIGlmICh0aGlzLmZhY3RvcnkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLmZhY3RvcnkgPSBmYWN0b3J5O1xuICAgIH1cbiAgICB0aGlzLmZlYXR1cmVNYXAgPSBuZXcgUGx1Z2luRmVhdHVyZUludGVyZmFjZSh0aGlzKTtcbiAgICB0aGlzLnBhcmFtZXRlcnMgPSBuZXcgUGFyYW1ldGVyTWFuYWdlcih0aGlzLCBleHRlcm5hbEludGVyZmFjZSk7XG4gICAgdGhpcy5wYXJhbWV0ZXJzLmFkZEV2ZW50TGlzdGVuZXIoXCJwYXJhbWV0ZXJzZXRcIiwgZnVuY3Rpb24oZSkge1xuICAgICAgICBldmVudFRhcmdldC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcInBhcmFtZXRlcnNldFwiLCB7ZGV0YWlsOiBlLmRldGFpbH0pKTtcbiAgICB9KTtcbiAgICB0aGlzLmFkZEFzc2V0UGFja0ludGVyZmFjZSA9IGZ1bmN0aW9uKHBhcmFtZXRlck5hbWUsIHZpc2libGVOYW1lLCBleHBvc2VkKSB7XG4gICAgICAgIHJldHVybiBuZXcgQXNzZXRQYWNrU2VsZWN0b3JJbnRlcmZhY2UodGhpcywgZmFjdG9yeSwgcGFyYW1ldGVyTmFtZSwgdmlzaWJsZU5hbWUsIGV4cG9zZWQpO1xuICAgIH07XG5cbiAgICB0aGlzLlBsdWdpbkRhdGEgPSBuZXcgTGlua2VkU3RvcmUoXCJQbHVnaW5cIik7XG5cbiAgICB0aGlzLnNlc3Npb25EYXRhSW50ZXJmYWNlID0gbmV3IExpbmtlZFN0b3JlSW50ZXJmYWNlKHRoaXMsIGZhY3RvcnkuU2Vzc2lvbkRhdGEpO1xuICAgIHRoaXMudXNlckRhdGFJbnRlcmZhY2UgPSBuZXcgTGlua2VkU3RvcmVJbnRlcmZhY2UodGhpcywgZmFjdG9yeS5Vc2VyRGF0YSk7XG4gICAgdGhpcy50cmFja0RhdGFJbnRlcmZhY2UgPSBuZXcgTGlua2VkU3RvcmVJbnRlcmZhY2UodGhpcywgb3duZXIuVHJhY2tEYXRhKTtcbiAgICB0aGlzLnBsdWdpbkRhdGFJbnRlcmZhY2UgPSBuZXcgTGlua2VkU3RvcmVJbnRlcmZhY2UodGhpcywgdGhpcy5QbHVnaW5EYXRhKTtcblxuICAgIHRoaXMuZGVsZXRlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuc2Vzc2lvbkRhdGFJbnRlcmZhY2UuZGVzdHJveSgpO1xuICAgICAgICB0aGlzLnVzZXJEYXRhSW50ZXJmYWNlLmRlc3Ryb3koKTtcbiAgICAgICAgdGhpcy50cmFja0RhdGFJbnRlcmZhY2UuZGVzdHJveSgpO1xuICAgICAgICB0aGlzLnBsdWdpbkRhdGFJbnRlcmZhY2UuZGVzdHJveSgpO1xuICAgICAgICBpZiAodGhpcy5kZWNvbnN0cnVjdCAmJiB0eXBlb2YgdGhpcy5kZWNvbnN0cnVjdCA9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIHRoaXMuZGVjb25zdHJ1Y3QoKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBmdW5jdGlvbiBkZWxldGVJTyhub2RlLCBsaXN0KSB7XG4gICAgICAgIHZhciBpID0gbGlzdC5maW5kSW5kZXgoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHJldHVybiBlID09PSB0aGlzO1xuICAgICAgICB9LCBub2RlKTtcbiAgICAgICAgaWYgKGkgPT09IC0xKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgbGlzdC5zcGxpY2UoaSwgMSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHRoaXMuYWRkSW5wdXQgPSBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICBpbnB1dExpc3QucHVzaChub2RlKTtcbiAgICAgICAgcmV0dXJuIGlucHV0TGlzdDtcbiAgICB9O1xuICAgIHRoaXMuZGVsZXRlSW5wdXQgPSBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICByZXR1cm4gZGVsZXRlSU8obm9kZSwgaW5wdXRMaXN0KTtcbiAgICB9O1xuICAgIHRoaXMuYWRkT3V0cHV0ID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgb3V0cHV0TGlzdC5wdXNoKG5vZGUpO1xuICAgICAgICByZXR1cm4gdGhpcy5vdXRwdXRzO1xuICAgIH07XG4gICAgdGhpcy5kZWxldGVPdXRwdXQgPSBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICByZXR1cm4gZGVsZXRlSU8obm9kZSwgb3V0cHV0TGlzdCk7XG4gICAgfTtcblxuICAgIHRoaXMuc2V0UHJvY2Vzc2luZ0RlbGF5QXNTZWNvbmRzID0gZnVuY3Rpb24oc2Vjb25kcykge1xuICAgICAgICB2YXIgZnMgPSBmYWN0b3J5LmNvbnRleHQuc2FtcGxlUmF0ZTtcbiAgICAgICAgaWYgKHR5cGVvZiBzZWNvbmRzID09IFwibnVtYmVyXCIgJiYgaXNGaW5pdGUoc2Vjb25kcykgJiYgc2Vjb25kcyA+PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zZXRQcm9jZXNzaW5nRGVsYXlBc1NhbXBsZXMoc2Vjb25kcypmcykvZnM7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3coXCJzZXRQcm9jZXNzaW5nRGVsYXlBc1NlY29uZHMgSW52YWxpZCBhcmd1bWVudFwiKTtcbiAgICB9O1xuXG4gICAgdGhpcy5zZXRQcm9jZXNzaW5nRGVsYXlBc1NhbXBsZXMgPSBmdW5jdGlvbihzYW1wbGVzKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2FtcGxlcyA9PSBcIm51bWJlclwiICYmIGlzRmluaXRlKHNhbXBsZXMpICYmIHNhbXBsZXMgPj0gMCkge1xuICAgICAgICAgICAgZGVsYXlTYW1wbGVzID0gc2FtcGxlcztcbiAgICAgICAgICAgIHZhciBlID0gbmV3IEV2ZW50KFwiYWx0ZXJkZWxheVwiKTtcbiAgICAgICAgICAgIGV2ZW50VGFyZ2V0LmRpc3BhdGNoRXZlbnQoZSk7XG4gICAgICAgICAgICByZXR1cm4gZGVsYXlTYW1wbGVzO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3coXCJzZXRQcm9jZXNzaW5nRGVsYXlBc1NhbXBsZXMgSW52YWxpZCBhcmd1bWVudFwiKTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIHRoaXMuc3RhcnQgPSB0aGlzLnN0b3AgPSB0aGlzLm9ubG9hZGVkID0gdGhpcy5vbnVubG9hZGVkID0gdGhpcy5kZWNvbnN0cnVjdCA9IGZ1bmN0aW9uICgpIHt9O1xuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgICBcImV4dGVybmFsSW50ZXJmYWNlXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZXh0ZXJuYWxJbnRlcmZhY2VcbiAgICAgICAgfSxcbiAgICAgICAgXCJudW1JbnB1dHNcIjoge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlucHV0TGlzdC5sZW5ndGg7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgKFwiQ2Fubm90IHNldCB0aGUgbnVtYmVyIG9mIGlucHV0cyBvZiBCYXNlUGx1Z2luXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcIm51bU91dHB1dHNcIjoge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG91dHB1dExpc3QubGVuZ3RoO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHRocm93IChcIkNhbm5vdCBzZXQgdGhlIG51bWJlciBvZiBvdXRwdXRzIG9mIEJhc2VQbHVnaW5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwibnVtUGFyYW1ldGVyc1wiOiB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJhbWV0ZXJzLnBhcmFtZXRlcnMubGVuZ3RoO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHRocm93IChcIkNhbm5vdCBzZXQgdGhlIG51bWJlciBvZiBwYXJhbWV0ZXJzIG9mIEJhc2VQbHVnaW5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwib3duZXJcIjoge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBPd25lcjtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uIChvd25lcikge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygb3duZXIgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcE93bmVyID0gb3duZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBwT3duZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiaW5wdXRzXCI6IHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlucHV0TGlzdDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyAoXCJJbGxlZ2FsIGF0dGVtcHQgdG8gbW9kaWZ5IEJhc2VQbHVnaW5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwib3V0cHV0c1wiOiB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBvdXRwdXRMaXN0O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHRocm93IChcIklsbGVnYWwgYXR0ZW1wdCB0byBtb2RpZnkgQmFzZVBsdWdpblwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJwcm9jZXNzaW5nRGVsYXlBc1NhbXBsZXNcIjoge1xuICAgICAgICAgICAgXCJnZXRcIjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlbGF5U2FtcGxlcztcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInNldFwiOiB0aGlzLnNldFByb2Nlc3NpbmdEZWxheUFzU2FtcGxlc1xuICAgICAgICB9LFxuICAgICAgICBcInByb2Nlc3NpbmdEZWxheUFzU2Vjb25kc1wiOiB7XG4gICAgICAgICAgICBcImdldFwiOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVsYXlTYW1wbGVzL2ZhY3RvcnkuY29udGV4dC5zYW1wbGVSYXRlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwic2V0XCI6IHRoaXMuc2V0UHJvY2Vzc2luZ0RlbGF5QXNTZWNvbmRzXG4gICAgICAgIH0sXG4gICAgICAgIFwiY29ubmVjdFwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uIChkZXN0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vdXRwdXRzWzBdLmNvbm5lY3QoZGVzdC5pbnB0ID8gZGVzdC5pbnB1dCA6IGRlc3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImRpc2Nvbm5lY3RcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoZGVzdCkge1xuICAgICAgICAgICAgICAgIGlmIChkZXN0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vdXRwdXRzWzBdLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm91dHB1dHNbMF0uZGlzY29ubmVjdChkZXN0LmlucHV0ID8gZGVzdC5pbnB1dCA6IGRlc3QpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRJbnB1dHNcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW5wdXRzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImdldE91dHB1dHNcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMub3V0cHV0cztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRQYXJhbWV0ZXJOYW1lc1wiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJhbWV0ZXJzLmdldFBhcmFtZXRlck5hbWVzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0UGFyYW1ldGVyQnlOYW1lXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJhbWV0ZXJzLmdldFBhcmFtZXRlckJ5TmFtZShuYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRQYXJhbWV0ZXJPYmplY3RcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyYW1ldGVycy5nZXRQYXJhbWV0ZXJPYmplY3QoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJzZXRQYXJhbWV0ZXJCeU5hbWVcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJhbWV0ZXJzLnNldFBhcmFtZXRlckJ5TmFtZShuYW1lLCB2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwic2V0UGFyYW1ldGVyc0J5T2JqZWN0XCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKG9iamVjdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcmFtZXRlcnMuc2V0UGFyYW1ldGVyc0J5T2JqZWN0KG9iamVjdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiYWRkRXZlbnRMaXN0ZW5lclwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZXZlbnRUYXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihrZXksIHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJyZW1vdmVFdmVudExpc3RlbmVyXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBldmVudFRhcmdldC5hZGRFdmVudExpc3RlbmVyKGtleSwgdmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59O1xuXG5leHBvcnQge0Jhc2VQbHVnaW59O1xuIiwiLyoganNoaW50IGVzdmVyc2lvbjogNiAqL1xuaW1wb3J0IHtOdW1iZXJQYXJhbWV0ZXJ9IGZyb20gXCIuL3BhcmFtZXRlcnMvTnVtYmVyUGFyYW1ldGVyLmpzXCI7XG5pbXBvcnQge1N0cmluZ1BhcmFtZXRlcn0gZnJvbSBcIi4vcGFyYW1ldGVycy9TdHJpbmdQYXJhbWV0ZXIuanNcIjtcbmltcG9ydCB7QnV0dG9uUGFyYW1ldGVyfSBmcm9tIFwiLi9wYXJhbWV0ZXJzL0J1dHRvblBhcmFtZXRlci5qc1wiO1xuaW1wb3J0IHtTd2l0Y2hQYXJhbWV0ZXJ9IGZyb20gXCIuL3BhcmFtZXRlcnMvU3dpdGNoUGFyYW1ldGVyLmpzXCI7XG5pbXBvcnQge0xpc3RQYXJhbWV0ZXJ9IGZyb20gXCIuL3BhcmFtZXRlcnMvTGlzdFBhcmFtZXRlci5qc1wiO1xuaW1wb3J0IHtVUkxQYXJhbWV0ZXJ9IGZyb20gXCIuL3BhcmFtZXRlcnMvVVJMUGFyYW1ldGVyLmpzXCI7XG5pbXBvcnQge0Fzc2V0UGFyYW1ldGVyfSBmcm9tIFwiLi9wYXJhbWV0ZXJzL0Fzc2V0UGFyYW1ldGVyLmpzXCI7XG5cbnZhciBQYXJhbWV0ZXJNYW5hZ2VyID0gZnVuY3Rpb24gKG93bmVyLCBwbHVnaW5FeHRlcm5hbEludGVyZmFjZSwgbmFtZSwgZXhwb3NlZCkge1xuICAgIHZhciBwYXJhbWV0ZXJMaXN0ID0gW107XG4gICAgdmFyIGV2ZW50VGFyZ2V0ID0gbmV3IEV2ZW50VGFyZ2V0KCk7XG4gICAgaWYgKG5hbWUgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIG5hbWUgPSBcImRlZmF1bHRcIjtcbiAgICB9XG4gICAgaWYgKGV4cG9zZWQgPT0gdW5kZWZpbmVkIHx8IG5hbWUgPT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgICAgZXhwb3NlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZmluZFBhcmFtZXRlcihzZWxmLCBuYW1lKSB7XG4gICAgICAgIG5hbWUgPSBuYW1lLnJlcGxhY2UoXCIvXCIsIFwiX1wiKS5zcGxpdChcIi5cIikucmV2ZXJzZSgpO1xuICAgICAgICB2YXIgYmFzZSA9IHBhcmFtZXRlckxpc3Q7XG4gICAgICAgIHZhciBsb3dlckNhc2VQYXJhbWV0ZXJOYW1lcyA9IHBhcmFtZXRlckxpc3QubWFwKGkgPT4gaS5uYW1lLnRvTG93ZXJDYXNlKCkpO1xuICAgICAgICB2YXIgcGFyYW0gPSBwYXJhbWV0ZXJMaXN0W2xvd2VyQ2FzZVBhcmFtZXRlck5hbWVzLmluZGV4T2YobmFtZS5wb3AoKS50b0xvd2VyQ2FzZSgpKV07XG4gICAgICAgIGlmIChwYXJhbS5oYXNPd25Qcm9wZXJ0eShcImdldFBhcmFtZXRlckJ5TmFtZVwiKSkge1xuICAgICAgICAgICAgcmV0dXJuIHBhcmFtLmdldFBhcmFtZXRlckJ5TmFtZShuYW1lLnJldmVyc2UoKS5qb2luKFwiLlwiKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyYW07XG4gICAgICAgIH1cbiAgICAgICAgLy8gcmV0dXJuIG5hbWUuc3BsaXQoXCIuXCIpLnJlZHVjZShmdW5jdGlvbihiYXNlLCBuYW1lKSB7XG4gICAgICAgIC8vICAgICByZXR1cm4gYmFzZVtuYW1lXSB8fCBiYXNlW25hbWUudG9Mb3dlckNhc2UoKV07XG4gICAgICAgIC8vIH0sIHNlbGYpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGlzUGFyYW1ldGVyTmFtZUF2YWlsYWJsZShzZWxmLCBuYW1lKSB7XG4gICAgICAgIG5hbWUgPSBuYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIG5hbWUgPSBuYW1lLnJlcGxhY2UoXCIvXCIsIFwiX1wiKTtcbiAgICAgICAgaWYgKCEvXlxcdysoIFxcdyspKigtXFx3KykqKF9cXHcrKSokLy50ZXN0KG5hbWUpKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJJbnZhbGlkIHN0cmluZyBmb3IgbmFtZVwiLCBuYW1lLCBcIldpbGwgbm90IGV4cG9zZSBhcyBkb3Qgbm90YXRpb25zXCIpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNlbGYuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICAgICAgICAgIHRocm93IFwiTmFtZSBpcyByZXNlcnZlZCBvciBhbHJlYWR5IGRlZmluZWRcIjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBidWlsZFBhcmFtZXRlck9iamVjdCgpIHtcbiAgICAgICAgdmFyIG9iaiA9IHt9O1xuICAgICAgICBwYXJhbWV0ZXJMaXN0LmZpbHRlcihmdW5jdGlvbihwKSB7XG4gICAgICAgICAgICByZXR1cm4gcC5leHBvc2VkO1xuICAgICAgICB9KS5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBvYmpbZS5uYW1lXSA9IGU7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gb2JqO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFkZFBhcmFtZXRlcihwYXJhbSwgc2VsZikge1xuICAgICAgICBpZiAocGFyYW0ubmFtZS5pbmNsdWRlcyhcIi5cIikpIHtcbiAgICAgICAgICAgIHRocm93KFwiTmFtZSBjYW5ub3QgaW5jbHVkZSBhIHBlcmlvZFwiKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZXhpc3RzID0gcGFyYW1ldGVyTGlzdC5maW5kSW5kZXgoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHJldHVybiBlID09PSBwYXJhbTtcbiAgICAgICAgfSwgcGFyYW0pO1xuICAgICAgICBpZiAoZXhpc3RzID09PSAtMSkge1xuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNlbGYsIHBhcmFtLm5hbWUsIHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogcGFyYW1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcGFyYW1ldGVyTGlzdC5wdXNoKHBhcmFtKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcGFyYW07XG4gICAgfVxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgICBcImFkZEV2ZW50TGlzdGVuZXJcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbih0eXBlLCBsaXN0ZW5lciwgb3B0aW9ucykge1xuICAgICAgICAgICAgICAgIHJldHVybiBldmVudFRhcmdldC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyLCBvcHRpb25zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJyZW1vdmVFdmVudExpc3RlbmVyXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24odHlwZSwgbGlzdGVuZXIsIG9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZXZlbnRUYXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lciwgb3B0aW9ucyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiaGFuZGxlRXZlbnRcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRldGFpbCA9IGUuZGV0YWlsO1xuICAgICAgICAgICAgICAgIGlmIChkZXRhaWwudXBkYXRlSW50ZXJmYWNlcyAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgcGx1Z2luRXh0ZXJuYWxJbnRlcmZhY2UudXBkYXRlSW50ZXJmYWNlcygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZS50eXBlID09IFwicGFyYW1ldGVyc2V0XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRUYXJnZXQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJwYXJhbWV0ZXJzZXRcIiwge2RldGFpbDogZGV0YWlsLnBhcmFtZXRlcn0pKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgICdjcmVhdGVOdW1iZXJQYXJhbWV0ZXInOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uIChuYW1lLCBkZWZhdWx0VmFsdWUsIG1pbmltdW0sIG1heGltdW0sIHRvU3RyaW5nRnVuYywgdmlzaWJsZU5hbWUsIGV4cG9zZWQpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG5hbWUgIT09IFwic3RyaW5nXCIgfHwgdHlwZW9mIGRlZmF1bHRWYWx1ZSAhPT0gXCJudW1iZXJcIiB8fCAobWluaW11bSAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiBtaW5pbXVtICE9PSBcIm51bWJlclwiKSB8fCAobWF4aW11bSAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiBtYXhpbXVtICE9PSBcIm51bWJlclwiKSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyAoXCJJbnZsaWQgY29uc3RydWN0b3JcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdG9TdHJpbmdGdW5jICE9IFwiZnVuY3Rpb25cIiAmJiB0b1N0cmluZ0Z1bmMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyAoXCJ0b1N0cmluZ0Z1bmMgbXVzdCBiZSBhIGZ1bmN0aW9uIG9yIHVuZGVmaW5lZFwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGlzUGFyYW1ldGVyTmFtZUF2YWlsYWJsZSh0aGlzLCBuYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcGFyYW0gPSBuZXcgTnVtYmVyUGFyYW1ldGVyKG93bmVyLCBuYW1lLCBkZWZhdWx0VmFsdWUsIG1pbmltdW0sIG1heGltdW0sIHRvU3RyaW5nRnVuYywgdmlzaWJsZU5hbWUsIGV4cG9zZWQpO1xuICAgICAgICAgICAgICAgICAgICBhZGRQYXJhbWV0ZXIocGFyYW0sIHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICBwYXJhbS5hZGRFdmVudExpc3RlbmVyKFwicGFyYW1ldGVyc2V0XCIsIHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGFyYW07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgICdjcmVhdGVTdHJpbmdQYXJhbWV0ZXInOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uIChuYW1lLCBkZWZhdWx0VmFsdWUsIG1heExlbmd0aCwgdG9TdHJpbmdGdW5jLCB2aXNpYmxlTmFtZSwgZXhwb3NlZCkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbmFtZSAhPT0gXCJzdHJpbmdcIiB8fCB0eXBlb2YgZGVmYXVsdFZhbHVlICE9PSBcInN0cmluZ1wiIHx8IChtYXhMZW5ndGggIT09IHVuZGVmaW5lZCAmJiB0eXBlb2YgbWF4TGVuZ3RoICE9PSBcIm51bWJlclwiKSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyAoXCJJbnZsaWQgY29uc3RydWN0b3JcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdG9TdHJpbmdGdW5jICE9IFwiZnVuY3Rpb25cIiAmJiB0b1N0cmluZ0Z1bmMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyAoXCJ0b1N0cmluZ0Z1bmMgbXVzdCBiZSBhIGZ1bmN0aW9uIG9yIHVuZGVmaW5lZFwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGlzUGFyYW1ldGVyTmFtZUF2YWlsYWJsZSh0aGlzLCBuYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcGFyYW0gPSBuZXcgU3RyaW5nUGFyYW1ldGVyKG93bmVyLCBuYW1lLCBkZWZhdWx0VmFsdWUsIG1heExlbmd0aCwgdG9TdHJpbmdGdW5jLCB2aXNpYmxlTmFtZSwgZXhwb3NlZCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZFBhcmFtZXRlcihwYXJhbSwgdGhpcyk7XG4gICAgICAgICAgICAgICAgICAgIHBhcmFtLmFkZEV2ZW50TGlzdGVuZXIoXCJwYXJhbWV0ZXJzZXRcIiwgdGhpcyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwYXJhbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgICdjcmVhdGVCdXR0b25QYXJhbWV0ZXInOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBuYW1lICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IChcIkludmFsaWQgY29uc3RydWN0b3JcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChpc1BhcmFtZXRlck5hbWVBdmFpbGFibGUodGhpcywgbmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBhcmFtID0gbmV3IEJ1dHRvblBhcmFtZXRlcihvd25lciwgbmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIGFkZFBhcmFtZXRlcihwYXJhbSwgdGhpcyk7XG4gICAgICAgICAgICAgICAgICAgIHBhcmFtLmFkZEV2ZW50TGlzdGVuZXIoXCJwYXJhbWV0ZXJzZXRcIiwgdGhpcyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwYXJhbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgICdjcmVhdGVTd2l0Y2hQYXJhbWV0ZXInOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uIChuYW1lLCBkZWZhdWx0VmFsdWUsIG1pblN0YXRlLCBtYXhTdGF0ZSwgdG9TdHJpbmdGdW5jLCB2aXNpYmxlTmFtZSwgZXhwb3NlZCkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbmFtZSAhPT0gXCJzdHJpbmdcIiB8fCB0eXBlb2YgZGVmYXVsdFZhbHVlICE9PSBcIm51bWJlclwiIHx8IHR5cGVvZiBtaW5TdGF0ZSAhPT0gXCJudW1iZXJcIiB8fCB0eXBlb2YgbWF4U3RhdGUgIT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgKFwiSW52bGlkIGNvbnN0cnVjdG9yXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRvU3RyaW5nRnVuYyAhPSBcImZ1bmN0aW9uXCIgJiYgdG9TdHJpbmdGdW5jICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgKFwidG9TdHJpbmdGdW5jIG11c3QgYmUgYSBmdW5jdGlvbiBvciB1bmRlZmluZWRcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChpc1BhcmFtZXRlck5hbWVBdmFpbGFibGUodGhpcywgbmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBhcmFtID0gbmV3IFN3aXRjaFBhcmFtZXRlcihvd25lciwgbmFtZSwgZGVmYXVsdFZhbHVlLCBtaW5TdGF0ZSwgbWF4U3RhdGUsIHRvU3RyaW5nRnVuYywgdmlzaWJsZU5hbWUsIGV4cG9zZWQpO1xuICAgICAgICAgICAgICAgICAgICBhZGRQYXJhbWV0ZXIocGFyYW0sIHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICBwYXJhbS5hZGRFdmVudExpc3RlbmVyKFwicGFyYW1ldGVyc2V0XCIsIHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGFyYW07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgICdjcmVhdGVMaXN0UGFyYW1ldGVyJzoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAobmFtZSwgZGVmYXVsdFZhbHVlLCBsaXN0T2ZWYWx1ZXMsIHRvU3RyaW5nRnVuYywgdmlzaWJsZU5hbWUsIGV4cG9zZWQpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG5hbWUgIT09IFwic3RyaW5nXCIgfHwgdHlwZW9mIGRlZmF1bHRWYWx1ZSA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhQXJyYXkuaXNBcnJheShsaXN0T2ZWYWx1ZXMpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IChcIkludmxpZCBjb25zdHJ1Y3RvclwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0b1N0cmluZ0Z1bmMgIT0gXCJmdW5jdGlvblwiICYmIHRvU3RyaW5nRnVuYyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IChcInRvU3RyaW5nRnVuYyBtdXN0IGJlIGEgZnVuY3Rpb24gb3IgdW5kZWZpbmVkXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobGlzdE9mVmFsdWVzLmluY2x1ZGVzKGRlZmF1bHRWYWx1ZSkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IChcIkludmxpZCBjb25zdHJ1Y3RvciAtIGRlZmF1bHQgdmFsdWUgbWlzc2luZ1wiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGlzUGFyYW1ldGVyTmFtZUF2YWlsYWJsZSh0aGlzLCBuYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcGFyYW0gPSBuZXcgTGlzdFBhcmFtZXRlcihvd25lciwgbmFtZSwgZGVmYXVsdFZhbHVlLCBsaXN0T2ZWYWx1ZXMsIHRvU3RyaW5nRnVuYywgdmlzaWJsZU5hbWUsIGV4cG9zZWQpO1xuICAgICAgICAgICAgICAgICAgICBhZGRQYXJhbWV0ZXIocGFyYW0sIHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICBwYXJhbS5hZGRFdmVudExpc3RlbmVyKFwicGFyYW1ldGVyc2V0XCIsIHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGFyYW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAnY3JlYXRlVVJMUGFyYW1ldGVyJzoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAobmFtZSwgZGVmYXVsdFZhbHVlLCBtYXhMZW5ndGgsIHRvU3RyaW5nRnVuYywgdmlzaWJsZU5hbWUsIGV4cG9zZWQpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG5hbWUgIT09IFwic3RyaW5nXCIgfHwgKG1heExlbmd0aCAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiBtYXhMZW5ndGggIT09IFwibnVtYmVyXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IChcIkludmxpZCBjb25zdHJ1Y3RvclwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0b1N0cmluZ0Z1bmMgIT0gXCJmdW5jdGlvblwiICYmIHRvU3RyaW5nRnVuYyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IChcInRvU3RyaW5nRnVuYyBtdXN0IGJlIGEgZnVuY3Rpb24gb3IgdW5kZWZpbmVkXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoaXNQYXJhbWV0ZXJOYW1lQXZhaWxhYmxlKHRoaXMsIG5hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwYXJhbSA9IG5ldyBVUkxQYXJhbWV0ZXIob3duZXIsIG5hbWUsIGRlZmF1bHRWYWx1ZSwgbWF4TGVuZ3RoLCB0b1N0cmluZ0Z1bmMsIHZpc2libGVOYW1lLCBleHBvc2VkKTtcbiAgICAgICAgICAgICAgICAgICAgYWRkUGFyYW1ldGVyKHBhcmFtLCB0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgcGFyYW0uYWRkRXZlbnRMaXN0ZW5lcihcInBhcmFtZXRlcnNldFwiLCB0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBhcmFtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgJ2NyZWF0ZUFzc2V0UGFyYW1ldGVyJzoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAocmVzb3VyY2VUeXBlLCBuYW1lLCBkZWZhdWx0VmFsdWUsIHZpc2libGVOYW1lLCBleHBvc2VkKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBuYW1lICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IChcIkludmxpZCBjb25zdHJ1Y3RvclwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGlzUGFyYW1ldGVyTmFtZUF2YWlsYWJsZSh0aGlzLCBuYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcGFyYW0gPSBuZXcgQXNzZXRQYXJhbWV0ZXIob3duZXIsIHJlc291cmNlVHlwZSwgbmFtZSwgZGVmYXVsdFZhbHVlLCB2aXNpYmxlTmFtZSwgZXhwb3NlZCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZFBhcmFtZXRlcihwYXJhbSwgdGhpcyk7XG4gICAgICAgICAgICAgICAgICAgIHBhcmFtLmFkZEV2ZW50TGlzdGVuZXIoXCJwYXJhbWV0ZXJzZXRcIiwgdGhpcyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwYXJhbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgICdjcmVhdGVQYXJhbWV0ZXJNYW5hZ2VyJzoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbihuYW1lKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlzUGFyYW1ldGVyTmFtZUF2YWlsYWJsZSh0aGlzLCBuYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcGFyYW0gPSBuZXcgUGFyYW1ldGVyTWFuYWdlcihvd25lciwgcGx1Z2luRXh0ZXJuYWxJbnRlcmZhY2UsIG5hbWUpO1xuICAgICAgICAgICAgICAgICAgICBhZGRQYXJhbWV0ZXIocGFyYW0sIHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGFyYW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAnY3JlYXRlUGFyYW1ldGVyJzoge1xuICAgICAgICAgICAgJ3ZhbHVlJzogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHRocm93IChcIlRoaXMgZnVuY3Rpb24gaXMgbm93IGRlcHJlY2F0ZWRcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgICdnZXRQYXJhbWV0ZXJOYW1lJzoge1xuICAgICAgICAgICAgJ3ZhbHVlJzogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJERVBSRUNBVEVEIC0gdXNlIGdldFBhcmFtZXRlck5hbWVzXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFBhcmFtZXRlck5hbWVzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgICdnZXRQYXJhbWV0ZXJCeU5hbWUnOiB7XG4gICAgICAgICAgICAndmFsdWUnOiBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmaW5kUGFyYW1ldGVyKHRoaXMsIG5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAnZ2V0UGFyYW1ldGVyT2JqZWN0Jzoge1xuICAgICAgICAgICAgJ3ZhbHVlJzogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBidWlsZFBhcmFtZXRlck9iamVjdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAnZ2V0UGFyYW1ldGVyTmFtZXMnOiB7XG4gICAgICAgICAgICAndmFsdWUnOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhcmFtZXRlckxpc3QuZmlsdGVyKGZ1bmN0aW9uKHApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHAuZXhwb3NlZDtcbiAgICAgICAgICAgICAgICB9KS5tYXAoZnVuY3Rpb24ocCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocC5jb25zdHJ1Y3RvciA9PSB0aGlzLmNvbnN0cnVjdG9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcC5nZXRQYXJhbWV0ZXJOYW1lcygpLm1hcChmdW5jdGlvbihwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubmFtZSArIFwiLlwiICsgcDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHApLmZsYXQoKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwLm5hbWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCB0aGlzKS5mbGF0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgICdzZXRQYXJhbWV0ZXJCeU5hbWUnOiB7XG4gICAgICAgICAgICAndmFsdWUnOiBmdW5jdGlvbiAobiwgdiwgdXBkYXRlSW50ZXJmYWNlcykge1xuICAgICAgICAgICAgICAgIHZhciBwYXJhbWV0ZXIgPSBmaW5kUGFyYW1ldGVyKHRoaXMsIG4pO1xuICAgICAgICAgICAgICAgIGlmICghcGFyYW1ldGVyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHBhcmFtZXRlci5leHBvc2VkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBcIkNhbm5vdCBzZXQgaGlkZGVuIHBhcmFtZXRlclwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYXJhbWV0ZXIuc2V0VmFsdWUodiwgdXBkYXRlSW50ZXJmYWNlcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgICdkZWxldGVQYXJhbWV0ZXInOiB7XG4gICAgICAgICAgICAndmFsdWUnOiBmdW5jdGlvbiAobykge1xuICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IHBhcmFtZXRlckxpc3QuZmluZEluZGV4KGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlID09PSBvO1xuICAgICAgICAgICAgICAgIH0sIG8pO1xuICAgICAgICAgICAgICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIERvZXMgZXhpc3RcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1ldGVyTGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgICAgICBvLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgJ2RlbGV0ZUFsbFBhcmFtZXRlcnMnOiB7XG4gICAgICAgICAgICAndmFsdWUnOiBmdW5jdGlvbiAobykge1xuICAgICAgICAgICAgICAgIHBhcmFtZXRlckxpc3QuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICBlLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBwYXJhbWV0ZXJMaXN0ID0gW107XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgICdzZXRQYXJhbWV0ZXJzQnlPYmplY3QnOiB7XG4gICAgICAgICAgICAndmFsdWUnOiBmdW5jdGlvbiAob2JqZWN0LCB1cGRhdGVJbnRlcmZhY2VzKSB7XG4gICAgICAgICAgICAgICAgdmFyIGtleTtcbiAgICAgICAgICAgICAgICBmb3IgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9iamVjdC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG9iamVjdFtrZXldID09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFBhcmFtZXRlckJ5TmFtZShrZXksIG9iamVjdFtrZXldLnZhbHVlLCB1cGRhdGVJbnRlcmZhY2VzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIG9iamVjdFtrZXldID09IFwibnVtYmVyXCIgfHwgdHlwZW9mIG9iamVjdFtrZXldID09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFBhcmFtZXRlckJ5TmFtZShrZXksIG9iamVjdFtrZXldLCB1cGRhdGVJbnRlcmZhY2VzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgKFwiQ2Fubm90IHNldCBcIiArIGtleSArIFwiOiBOb3QgYSB2YWxpZCBvYmplY3RcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgICd0b0pTT04nOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcGFyYW1ldGVyTGlzdC5maWx0ZXIoZnVuY3Rpb24ocCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcC5leHBvc2VkO1xuICAgICAgICAgICAgICAgIH0pLnJlZHVjZShmdW5jdGlvbiAob2JqLCBlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlLmhhc093blByb3BlcnR5KFwidG9KU09OXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvYmpbZS5uYW1lXSA9IGUudG9KU09OKCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZS5oYXNPd25Qcm9wZXJ0eShcImdldFBhcmFtZXRlck9iamVjdFwiKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgb2JqW2UubmFtZV0gPSBlLmdldFBhcmFtZXRlck9iamVjdCgpO1xuICAgICAgICAgICAgICAgICAgICB9ZWxzZSBpZiAoZS5oYXNPd25Qcm9wZXJ0eShcInRvU3RyaW5nXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvYmpbZS5uYW1lXSA9IGUudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChlLmhhc093blByb3BlcnR5KFwidmFsdWVcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ialtlLm5hbWVdID0gZS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb2JqO1xuICAgICAgICAgICAgICAgIH0sIHt9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgJ3BhcmFtZXRlcnMnOiB7XG4gICAgICAgICAgICAnZ2V0JzogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBidWlsZFBhcmFtZXRlck9iamVjdCgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICdzZXQnOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgKFwiQ2Fubm90IHNldCwgdXNlIC5zZXRQYXJhbWV0ZXJCeS4uLigpXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImV4cG9zZWRcIjoge1xuICAgICAgICAgICAgXCJnZXRcIjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBleHBvc2VkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjoge1xuICAgICAgICAgICAgXCJnZXRcIjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBuYW1lO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59O1xuXG5leHBvcnQge1BhcmFtZXRlck1hbmFnZXJ9O1xuIiwiLyoganNoaW50IGVzdmVyc2lvbjogNiAqL1xuaW1wb3J0IHtQbHVnaW5QYXJhbWV0ZXJ9IGZyb20gXCIuL1BsdWdpblBhcmFtZXRlci5qc1wiO1xuaW1wb3J0IHtMaXN0UGFyYW1ldGVyfSBmcm9tIFwiLi9MaXN0UGFyYW1ldGVyLmpzXCI7XG5cbmZ1bmN0aW9uIEFzc2V0UGFyYW1ldGVyKG93bmVyLCByZXNvdXJjZVR5cGUsIG5hbWUsIHZpc2libGVOYW1lLCBleHBvc2VkKSB7XG4gICAgUGx1Z2luUGFyYW1ldGVyLmNhbGwodGhpcywgb3duZXIsIG5hbWUsIFwiU3RyaW5nXCIsIHZpc2libGVOYW1lLCBleHBvc2VkKTtcbiAgICB2YXIgcmVzb3VyY2VPcHRpb25zID0gb3duZXIuZmFjdG9yeS5wbHVnaW5Bc3NldHMuYXNzZXRQYWNrcy5maWx0ZXIoZnVuY3Rpb24ocGFjaykge1xuICAgICAgICByZXR1cm4gcGFjay5yZXNvdXJjZVR5cGUgPT0gcmVzb3VyY2VUeXBlO1xuICAgIH0pLm1hcChmdW5jdGlvbihwYWNrKSB7cmV0dXJuIHBhY2suYXNzZXRPYmplY3RzO30pLmZsYXQoKTtcbiAgICB2YXIgYXNzZXRMaXN0ID0gbmV3IExpc3RQYXJhbWV0ZXIob3duZXIsIG5hbWUrXCIgbGlzdFwiLCByZXNvdXJjZU9wdGlvbnNbMF0sIHJlc291cmNlT3B0aW9ucywgZnVuY3Rpb24odil7cmV0dXJuIHYudXJsO30sIG5hbWUrXCIgbGlzdFwiLCBmYWxzZSk7XG4gICAgdmFyIGF1ZGlvQnVmZmVyLCBvbmxvYWRDYWxsYmFjaywgb25lcnJvckNhbGxiYWNrO1xuXG4gICAgZnVuY3Rpb24gbG9hZEFzc2V0KCkge1xuICAgICAgICBhc3NldExpc3QudmFsdWUuZmV0Y2goKVxuICAgICAgICAudGhlbihmdW5jdGlvbihidWZmZXIpIHtcbiAgICAgICAgICAgIGF1ZGlvQnVmZmVyID0gYnVmZmVyO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBvbmxvYWRDYWxsYmFjayA9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICBvbmxvYWRDYWxsYmFjayhidWZmZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCBmdW5jdGlvbihlKXtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb25lcnJvckNhbGxiYWNrID09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgIG9uZXJyb3JDYWxsYmFjayhlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0VmFsdWUodiwgdXBkYXRlSW50ZXJmYWNlcykge1xuICAgICAgICBpZiAodHlwZW9mIHYgPT0gXCJvYmplY3RcIiAmJiB2Lmhhc093blByb3BlcnR5KFwidXJsXCIpKSB7XG4gICAgICAgICAgICB2ID0gdi51cmw7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHR2ID0gYXNzZXRMaXN0LnZhbHVlLnVybDtcbiAgICAgICAgdmFyIGl0ZW0gPSBhc3NldExpc3QubGlzdFZhbHVlcy5maW5kKGZ1bmN0aW9uKGwpIHtcbiAgICAgICAgICAgIHJldHVybiBsLnVybCA9PSB2O1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGl0ZW0pIHtcbiAgICAgICAgICAgIGFzc2V0TGlzdC52YWx1ZSA9IGl0ZW07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFzc2V0TGlzdC52YWx1ZS51cmwgIT0gdHYpIHtcbiAgICAgICAgICAgIC8vIGFzc2V0IGhhcyBjaGFuZ2VkIHVybC5cbiAgICAgICAgICAgIGxvYWRBc3NldCgpO1xuICAgICAgICAgICAgdGhpcy50cmlnZ2VyUGFyYW1ldGVyU2V0KHVwZGF0ZUludGVyZmFjZXMpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudHJpZ2dlcigpO1xuICAgICAgICByZXR1cm4gYXNzZXRMaXN0LnZhbHVlO1xuICAgIH1cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgICAgXCJvbmxvYWRcIjoge1xuICAgICAgICAgICAgXCJnZXRcIjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBvbmxvYWRDYWxsYmFjaztcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInNldFwiOiBmdW5jdGlvbihmKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBmICE9IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyhcIkFzc2V0UGFyYW1ldGVyOjpvbmxvYWQgcmVxdWlyZXMgYSBmdW5jdGlvbiB3aXRoIG9uZSBhcmd1bWVudCB0byBiZSBzZXRcIik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgb25sb2FkQ2FsbGJhY2sgPSBmO1xuICAgICAgICAgICAgICAgICAgICBpZiAoYXVkaW9CdWZmZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ubG9hZENhbGxiYWNrKGF1ZGlvQnVmZmVyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb25sb2FkQ2FsbGJhY2s7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcIm9uZXJyb3JcIjoge1xuICAgICAgICAgICAgXCJnZXRcIjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBvbmVycm9yQ2FsbGJhY2s7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJzZXRcIjogZnVuY3Rpb24oZikge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZiAhPSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3coXCJBc3NldFBhcmFtZXRlcjo6b25lcnJvciByZXF1aXJlcyBhIGZ1bmN0aW9uIHdpdGggb25lIGFyZ3VtZW50IHRvIGJlIHNldFwiKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBvbmVycm9yQ2FsbGJhY2sgPSBmO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb25lcnJvckNhbGxiYWNrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJ0eXBlXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogXCJBc3NldFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGVzdHJveVwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBhc3NldExpc3QuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgIG93bmVyID0gbmFtZSA9IGRlZmF1bHRWYWx1ZSA9IGFzc2V0TGlzdCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJ2YWx1ZVwiOiB7XG4gICAgICAgICAgICBcImdldFwiOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFzc2V0TGlzdC52YWx1ZS51cmw7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJzZXRcIjogZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICAgICAgICBzZXRWYWx1ZS5jYWxsKHRoaXMsIHYsIHRydWUpO1xuICAgICAgICAgICAgICAgIHJldHVybiBhc3NldExpc3QudmFsdWUudXJsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInNldFZhbHVlXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24odiwgdXBkYXRlSW50ZXJmYWNlcykge1xuICAgICAgICAgICAgICAgIHJldHVybiBzZXRWYWx1ZS5jYWxsKHRoaXMsIHYsIHVwZGF0ZUludGVyZmFjZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImdldFJlc291cmNlXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgaWYgKGF1ZGlvQnVmZmVyUHJvbWlzZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXVkaW9CdWZmZXJQcm9taXNlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBsb2FkQXNzZXQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiYnVmZmVyXCI6IHtcbiAgICAgICAgICAgIFwiZ2V0XCI6IGZ1bmN0aW9uKCkge3JldHVybiBhdWRpb0J1ZmZlcjt9XG4gICAgICAgIH0sXG4gICAgICAgIFwidG9TdHJpbmdcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbih2KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFzc2V0TGlzdC50b1N0cmluZyh2KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJvcHRpb25zXCI6IHtcbiAgICAgICAgICAgIFwiZ2V0XCI6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBhc3NldExpc3QubGlzdFZhbHVlcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRQYXJhbWV0ZXJPYmplY3RcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogYXNzZXRMaXN0LnZhbHVlLnRvSlNPTigpLFxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBhc3NldExpc3QubGlzdFZhbHVlcy5tYXAoZnVuY3Rpb24odil7cmV0dXJuIHYudG9KU09OKCk7fSksXG4gICAgICAgICAgICAgICAgICAgIGxvYWRlZDogKGF1ZGlvQnVmZmVyICE9PSB1bmRlZmluZWQpLFxuICAgICAgICAgICAgICAgICAgICB2aXNpYmxlTmFtZTogbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJBc3NldFBhcmFtZXRlclwiLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBuYW1lXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgbG9hZEFzc2V0KCk7XG59XG5Bc3NldFBhcmFtZXRlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFBsdWdpblBhcmFtZXRlci5wcm90b3R5cGUpO1xuQXNzZXRQYXJhbWV0ZXIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gQXNzZXRQYXJhbWV0ZXI7XG5cbmV4cG9ydCB7QXNzZXRQYXJhbWV0ZXJ9O1xuIiwiLyoganNoaW50IGVzdmVyc2lvbjogNiAqL1xuaW1wb3J0IHtQbHVnaW5QYXJhbWV0ZXJ9IGZyb20gXCIuL1BsdWdpblBhcmFtZXRlci5qc1wiO1xuXG5mdW5jdGlvbiBCdXR0b25QYXJhbWV0ZXIob3duZXIsIG5hbWUsIHZpc2libGVOYW1lLCBleHBvc2VkKSB7XG4gICAgUGx1Z2luUGFyYW1ldGVyLmNhbGwodGhpcywgb3duZXIsIG5hbWUsIFwiQnV0dG9uXCIsIHZpc2libGVOYW1lLCBleHBvc2VkKTtcbiAgICB2YXIgb25jbGljayA9IGZ1bmN0aW9uICgpIHt9O1xuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgICBcInR5cGVcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIkJ1dHRvblwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGVzdHJveVwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBvd25lciA9IG5hbWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwib25jbGlja1wiOiB7XG4gICAgICAgICAgICBcImdldFwiOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9uY2xpY2s7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJzZXRcIjogZnVuY3Rpb24gKGYpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGYgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyAoXCJvbmNsaWNrIG11c3QgYmUgYSBmdW5jdGlvblwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgb25jbGljayA9IGY7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0UGFyYW1ldGVyT2JqZWN0XCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgdmlzaWJsZU5hbWU6IG5hbWUsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiQnV0dG9uUGFyYW1ldGVyXCIsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IG5hbWVcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG5CdXR0b25QYXJhbWV0ZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShQbHVnaW5QYXJhbWV0ZXIucHJvdG90eXBlKTtcbkJ1dHRvblBhcmFtZXRlci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBCdXR0b25QYXJhbWV0ZXI7XG5cbmV4cG9ydCB7QnV0dG9uUGFyYW1ldGVyfTtcbiIsIi8qIGpzaGludCBlc3ZlcnNpb246IDYgKi9cbmltcG9ydCB7UGx1Z2luUGFyYW1ldGVyfSBmcm9tIFwiLi9QbHVnaW5QYXJhbWV0ZXIuanNcIjtcbmltcG9ydCB7UGFyYW1ldGVyU3RlcEF1dG9tYXRpb259IGZyb20gXCIuL1BhcmFtZXRlckF1dG9tYXRpb24uanNcIjtcblxuZnVuY3Rpb24gTGlzdFBhcmFtZXRlcihvd25lciwgbmFtZSwgZGVmYXVsdFZhbHVlLCBsaXN0T2ZWYWx1ZXMsIHRvU3RyaW5nRnVuYywgdmlzaWJsZU5hbWUsIGV4cG9zZWQpIHtcbiAgICBQbHVnaW5QYXJhbWV0ZXIuY2FsbCh0aGlzLCBvd25lciwgbmFtZSwgXCJCdXR0b25cIiwgdmlzaWJsZU5hbWUsIGV4cG9zZWQpO1xuICAgIHZhciBhdWRpb1BhcmFtZXRlciwgYXV0b21hdGlvbjtcbiAgICB2YXIgb25jbGljayA9IGZ1bmN0aW9uICgpIHt9O1xuICAgIHZhciBfaW5kZXggPSBsaXN0T2ZWYWx1ZXMuaW5kZXhPZihkZWZhdWx0VmFsdWUpO1xuXG4gICAgZnVuY3Rpb24gc2V0Vih2LCB1cGRhdGVJbnRlcmZhY2VzKSB7XG4gICAgICAgIHZhciBpID0gbGlzdE9mVmFsdWVzLmluZGV4T2Yodik7XG4gICAgICAgIGlmIChpID09PSB1bmRlZmluZWQgfHwgaSA8IDApIHtcbiAgICAgICAgICAgIHRocm93KFwiTm90IGluIGxpc3QgcmFuZ2VcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuYm91bmRBdWRpb1BhcmFtKSB7XG4gICAgICAgICAgICB0aGlzLmJvdW5kQXVkaW9QYXJhbS52YWx1ZSA9IHRoaXMudXBkYXRlKHYpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChfaW5kZXggIT09IGkpIHtcbiAgICAgICAgICAgIF9pbmRleCA9IGk7XG4gICAgICAgICAgICB0aGlzLnRyaWdnZXJQYXJhbWV0ZXJTZXQodXBkYXRlSW50ZXJmYWNlcyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50cmlnZ2VyKCk7XG4gICAgICAgIHJldHVybiBsaXN0T2ZWYWx1ZXNbX2luZGV4XTtcbiAgICB9XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XG4gICAgICAgIFwidHlwZVwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IFwiTGlzdFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGVzdHJveVwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBvd25lciA9IG5hbWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiZGVmYXVsdFZhbHVlXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZGVmYXVsdFZhbHVlXG4gICAgICAgIH0sXG4gICAgICAgIFwibGlzdFZhbHVlc1wiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGxpc3RPZlZhbHVlc1xuICAgICAgICB9LFxuICAgICAgICBcInZhbHVlXCI6IHtcbiAgICAgICAgICAgIFwiZ2V0XCI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAoYXVkaW9QYXJhbWV0ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNsYXRlKGF1ZGlvUGFyYW1ldGVyLnZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGxpc3RPZlZhbHVlc1tfaW5kZXhdO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwic2V0XCI6IGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNldFYuY2FsbCh0aGlzLCB2LCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJzZXRWYWx1ZVwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKHYsIHVwZGF0ZUludGVyZmFjZXMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2V0Vi5jYWxsKHRoaXMsIHYsIHVwZGF0ZUludGVyZmFjZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImluY3JlbWVudFwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgdiA9IF9pbmRleCArIDE7XG4gICAgICAgICAgICAgICAgaWYgKHYgPj0gbGlzdE9mVmFsdWVzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICB2ID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNldFYuY2FsbCh0aGlzLCB2KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJkZWNyZW1lbnRcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIHYgPSBfaW5kZXggLSAxO1xuICAgICAgICAgICAgICAgIGlmICh2IDwgMCkge1xuICAgICAgICAgICAgICAgICAgICB2ID0gbGlzdE9mVmFsdWVzLmxlbmd0aC0xO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gc2V0Vi5jYWxsKHRoaXMsIHYpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImJpbmRUb0F1ZGlvUGFyYW1cIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoYXApIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGFwID09IFwib2JqZWN0XCIgJiYgYXAudmFsdWUgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGF1ZGlvUGFyYW1ldGVyID0gYXA7XG4gICAgICAgICAgICAgICAgICAgIGF1ZGlvUGFyYW1ldGVyLnZhbHVlID0gdGhpcy51cGRhdGUobGlzdE9mVmFsdWVzW19pbmRleF0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAoYXAuc2V0VmFsdWVBdFRpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9tYXRpb24gPSBuZXcgUGFyYW1ldGVyU3RlcEF1dG9tYXRpb24odGhpcywgYXVkaW9QYXJhbWV0ZXIsIDAsIGxpc3RWYWx1ZXMubGVuZ3RoLCB0b1N0cmluZ0Z1bmMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZ2V0VmFsdWVBdFRpbWVQb2ludFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24odGltZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYXV0b21hdGlvblBvaW50cy5nZXRWYWx1ZUF0VGltZVBvaW50KHRpbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImF1dG9tYXRpb25Qb2ludHNcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGF1dG9tYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3RhcnRcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKHRpbWUsIGNvbnRleHRUaW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXV0b21hdGlvbi5zdGFydCh0aW1lLCBjb250ZXh0VGltZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3RvcFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24oY29udGV4dFRpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9tYXRpb24uc3RvcChjb250ZXh0VGltZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZW5hYmxlZFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZ2V0XCI6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGF1dG9tYXRpb24uZW5hYmxlZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzZXRcIjogZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChhdXRvbWF0aW9uLmVuYWJsZWQgPSB0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwiQ2Fubm90IGJpbmQgYXV0b21hdGlvbiBhcyBBdWRpb1BhcmFtZXRlciBpcyBub3QgYXV0b21hdGFibGVcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyhcIkFyZ3VtZW50IDEgaXMgbm90IGEgdmFsaWQgQXVkaW9QYXJhbWV0ZXIgb2JqZWN0XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJib3VuZEF1ZGlvUGFyYW1cIjoge1xuICAgICAgICAgICAgXCJjb25maWd1cmFibGVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwiZ2V0XCI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXVkaW9QYXJhbWV0ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiYXV0b21hdGFibGVcIjoge1xuICAgICAgICAgICAgXCJnZXRcIjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0eXBlb2YgYXV0b21hdGlvbiA9PSBcIm9iamVjdFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImFkZE9wdGlvblRvTGlzdFwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICAgICAgICB2YXIgdHlwZSA9IHR5cGVvZiB0O1xuICAgICAgICAgICAgICAgIGlmICh0eXBlICE9IFwic3RyaW5nXCIgJiYgdHlwZSAhPSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IFwiTGlzdFBhcmFtZXRlcjo6YWRkT3B0aW9uVG9MaXN0IEFyZ3VtZW50IDEgbXVzdCBiZSBvZiB0eXBlIHN0cmluZyBvciBudW1iZXJcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGxpc3RPZlZhbHVlcy5pbmNsdWRlcyh0KSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBcIkxpc3RQYXJhbWV0ZXI6OmFkZE9wdGlvblRvTGlzdCBBcmd1bWVudCAxIGNvbnRhaW5zIGEgdmFsdWUgYWxyZWFkeSBpbiB0aGUgbGlzdCBvcHRpb25zXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxpc3RPZlZhbHVlcy5wdXNoKHQpO1xuICAgICAgICAgICAgICAgIHJldHVybiBsaXN0T2ZWYWx1ZXM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiZGVsZXRlT3B0aW9uRnJvbUxpc3RcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbih0KSB7XG4gICAgICAgICAgICAgICAgdmFyIGluZGV4ID0gbGlzdE9mVmFsdWVzLmluZGV4T2YodCk7XG4gICAgICAgICAgICAgICAgdmFyIF92YWx1ZSA9IGxpc3RPZlZhbHVlc1tfaW5kZXhdO1xuICAgICAgICAgICAgICAgIGlmIChpbmRleCA9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBcIkxpc3RQYXJhbWV0ZXI6OmRlbGV0ZU9wdGlvbkZyb21MaXN0IGl0ZW0gXFxcIlwiK3QrXCJcXFwiIGRvZXMgbm90IGV4aXN0IGluIHRoaXMgbGlzdFwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsaXN0T2ZWYWx1ZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgICAgICBfaW5kZXggPSBfaW5kZXggJSBsaXN0T2ZWYWx1ZXMubGVuZ3RoO1xuICAgICAgICAgICAgICAgIHJldHVybiBsaXN0T2ZWYWx1ZXM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwidG9TdHJpbmdcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbih2KSB7XG4gICAgICAgICAgICAgICAgaWYgKHYgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHYgPSB0aGlzLnZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRvU3RyaW5nRnVuYyA9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRvU3RyaW5nRnVuYy5jYWxsKHRoaXMsIHYpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBTdHJpbmcodik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImdldFBhcmFtZXRlck9iamVjdFwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiB0aGlzLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBsaXN0T2ZWYWx1ZXMsXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogZGVmYXVsdFZhbHVlLFxuICAgICAgICAgICAgICAgICAgICBtaW5pbXVtOiAwLFxuICAgICAgICAgICAgICAgICAgICBtYXhpbXVtOiBsaXN0T2ZWYWx1ZXMubGVuZ3RoLFxuICAgICAgICAgICAgICAgICAgICB2aXNpYmxlTmFtZTogbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJMaXN0UGFyYW1ldGVyXCIsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IG5hbWVcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG5MaXN0UGFyYW1ldGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoUGx1Z2luUGFyYW1ldGVyLnByb3RvdHlwZSk7XG5MaXN0UGFyYW1ldGVyLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IExpc3RQYXJhbWV0ZXI7XG5cbmV4cG9ydCB7TGlzdFBhcmFtZXRlcn07XG4iLCIvKiBqc2hpbnQgZXN2ZXJzaW9uOiA2ICovXG5pbXBvcnQge1BsdWdpblBhcmFtZXRlcn0gZnJvbSBcIi4vUGx1Z2luUGFyYW1ldGVyLmpzXCI7XG5pbXBvcnQge1BhcmFtZXRlckxpbmVhckF1dG9tYXRpb259IGZyb20gXCIuL1BhcmFtZXRlckF1dG9tYXRpb24uanNcIjtcblxuZnVuY3Rpb24gTnVtYmVyUGFyYW1ldGVyKG93bmVyLCBuYW1lLCBkZWZhdWx0VmFsdWUsIG1pbmltdW0sIG1heGltdW0sIHRvU3RyaW5nRnVuYywgdmlzaWJsZU5hbWUsIGV4cG9zZWQpIHtcbiAgICBQbHVnaW5QYXJhbWV0ZXIuY2FsbCh0aGlzLCBvd25lciwgbmFtZSwgXCJOdW1iZXJcIiwgdmlzaWJsZU5hbWUsIGV4cG9zZWQpO1xuICAgIHZhciBhdWRpb1BhcmFtZXRlciwgYXV0b21hdGlvbjtcbiAgICB2YXIgX3ZhbHVlID0gZGVmYXVsdFZhbHVlLFxuICAgICAgICBfc3RlcFNpemU7XG5cbiAgICBmdW5jdGlvbiBzZXRWYWx1ZSh2LCB1cGRhdGVJbnRlcmZhY2VzKVxuICAgIHtcbiAgICAgICAgaWYgKGF1dG9tYXRpb24gJiYgYXV0b21hdGlvbi5lbmFibGVkKSB7XG4gICAgICAgICAgICB0aHJvdyhcIkF1dG9tYXRpb24gaXMgZW5hYmxlZCwgY2Fubm90IHNldCB0aGUgdmFsdWUhXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm1pbmltdW0pIHtcbiAgICAgICAgICAgIHYgPSBNYXRoLm1heCh2LCB0aGlzLm1pbmltdW0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm1heGltdW0pIHtcbiAgICAgICAgICAgIHYgPSBNYXRoLm1pbih2LCB0aGlzLm1heGltdW0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChfc3RlcFNpemUpIHtcbiAgICAgICAgICAgIHYgPSBNYXRoLnJvdW5kKHYgLyBfc3RlcFNpemUpO1xuICAgICAgICAgICAgdiA9IHYgKiBfc3RlcFNpemU7XG4gICAgICAgIH1cbiAgICAgICAgdiA9IHRoaXMudXBkYXRlKHYpO1xuICAgICAgICBpZiAoYXVkaW9QYXJhbWV0ZXIpIHtcbiAgICAgICAgICAgIGlmIChhdXRvbWF0aW9uKSB7XG4gICAgICAgICAgICAgICAgYXVkaW9QYXJhbWV0ZXIuc2V0VmFsdWVBdFRpbWUodiwgb3duZXIuZmFjdG9yeS5jb250ZXh0LmN1cnJlbnRUaW1lKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYXVkaW9QYXJhbWV0ZXIudmFsdWUgPSB2O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChfdmFsdWUgIT09IHYpIHtcbiAgICAgICAgICAgIF92YWx1ZSA9IHY7XG4gICAgICAgICAgICB0aGlzLnRyaWdnZXJQYXJhbWV0ZXJTZXQodXBkYXRlSW50ZXJmYWNlcyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50cmlnZ2VyKCk7XG4gICAgfVxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgICBcInR5cGVcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIk51bWJlclwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGVzdHJveVwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBvd25lciA9IG5hbWUgPSBkZWZhdWx0VmFsdWUgPSBtaW5pbXVtID0gbWF4aW11bSA9IF92YWx1ZSA9IF9zdGVwU2l6ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJtaW5pbXVtXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogbWluaW11bVxuICAgICAgICB9LFxuICAgICAgICBcIm1heGltdW1cIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBtYXhpbXVtXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGVmYXVsdFZhbHVlXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZGVmYXVsdFZhbHVlXG4gICAgICAgIH0sXG4gICAgICAgIFwidmFsdWVcIjoge1xuICAgICAgICAgICAgXCJnZXRcIjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmIChhdWRpb1BhcmFtZXRlcikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYXV0b21hdGlvbiAmJiBhdXRvbWF0aW9uLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0ID0gb3duZXIuZmFjdG9yeS5nZXRDdXJyZW50UHJvZ3JhbVRpbWUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhdXRvbWF0aW9uLmdldEN1cnJlbnRUaW1lVmFsdWUodCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNsYXRlKGF1ZGlvUGFyYW1ldGVyLnZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIF92YWx1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInNldFwiOiBmdW5jdGlvbiAodikge1xuICAgICAgICAgICAgICAgIHJldHVybiBzZXRWYWx1ZS5jYWxsKHRoaXMsIHYsIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInNldFZhbHVlXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24odiwgdXBkYXRlSW50ZXJmYWNlcykge1xuICAgICAgICAgICAgICAgIHJldHVybiBzZXRWYWx1ZS5jYWxsKHRoaXMsIHYsIHVwZGF0ZUludGVyZmFjZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInN0ZXBTaXplXCI6IHtcbiAgICAgICAgICAgIFwiZ2V0XCI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3N0ZXBTaXplO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwic2V0XCI6IGZ1bmN0aW9uIChuKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFpc0Zpbml0ZShuKSB8fCBuIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyAoXCJJbnZhbGlkIHN0ZXAgc2l6ZVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgX3N0ZXBTaXplID0gbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJiaW5kVG9BdWRpb1BhcmFtXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKGFwKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBhcCA9PSBcIm9iamVjdFwiICYmIGFwLnZhbHVlICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBhdWRpb1BhcmFtZXRlciA9IGFwO1xuICAgICAgICAgICAgICAgICAgICBhdWRpb1BhcmFtZXRlci52YWx1ZSA9IHRoaXMudXBkYXRlKF92YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhcC5zZXRWYWx1ZUF0VGltZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXV0b21hdGlvbiA9IG5ldyBQYXJhbWV0ZXJMaW5lYXJBdXRvbWF0aW9uKHRoaXMsIGF1ZGlvUGFyYW1ldGVyLCBtaW5pbXVtLCBtYXhpbXVtLCB0b1N0cmluZ0Z1bmMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZ2V0VmFsdWVBdFRpbWVQb2ludFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24odGltZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYXV0b21hdGlvblBvaW50cy5nZXRWYWx1ZUF0VGltZVBvaW50KHRpbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImF1dG9tYXRpb25Qb2ludHNcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGF1dG9tYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3RhcnRcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKHRpbWUsIGNvbnRleHRUaW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXV0b21hdGlvbi5zdGFydCh0aW1lLCBjb250ZXh0VGltZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3RvcFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24oY29udGV4dFRpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9tYXRpb24uc3RvcChjb250ZXh0VGltZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZW5hYmxlZFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZ2V0XCI6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGF1dG9tYXRpb24uZW5hYmxlZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzZXRcIjogZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChhdXRvbWF0aW9uLmVuYWJsZWQgPSB0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwiQ2Fubm90IGJpbmQgYXV0b21hdGlvbiBhcyBBdWRpb1BhcmFtZXRlciBpcyBub3QgYXV0b21hdGFibGVcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyhcIkFyZ3VtZW50IDEgaXMgbm90IGEgdmFsaWQgQXVkaW9QYXJhbWV0ZXIgb2JqZWN0XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJib3VuZEF1ZGlvUGFyYW1cIjoge1xuICAgICAgICAgICAgXCJjb25maWd1cmFibGVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwiZ2V0XCI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXVkaW9QYXJhbWV0ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiYXV0b21hdGFibGVcIjoge1xuICAgICAgICAgICAgXCJnZXRcIjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0eXBlb2YgYXV0b21hdGlvbiA9PSBcIm9iamVjdFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInRvU3RyaW5nXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24odikge1xuICAgICAgICAgICAgICAgIGlmICh2ID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICB2ID0gdGhpcy52YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0b1N0cmluZ0Z1bmMgPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0b1N0cmluZ0Z1bmMuY2FsbCh0aGlzLCB2KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gU3RyaW5nKHYpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRQYXJhbWV0ZXJPYmplY3RcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdGhpcy52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBkZWZhdWx0VmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIG1pbmltdW06IG1pbmltdW0sXG4gICAgICAgICAgICAgICAgICAgIG1heGltdW06IG1heGltdW0sXG4gICAgICAgICAgICAgICAgICAgIHZpc2libGVOYW1lOiBuYW1lLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIk51bWJlclBhcmFtZXRlclwiLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBuYW1lXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuTnVtYmVyUGFyYW1ldGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoUGx1Z2luUGFyYW1ldGVyLnByb3RvdHlwZSk7XG5OdW1iZXJQYXJhbWV0ZXIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gTnVtYmVyUGFyYW1ldGVyO1xuXG5leHBvcnQge051bWJlclBhcmFtZXRlcn07XG4iLCIvKiBqc2hpbnQgZXN2ZXJzaW9uOiA2ICovXG52YXIgVGltZVBvaW50ID0gZnVuY3Rpb24ob3duZXIsIHRpbWUsIHZhbHVlLCB0b1N0cmluZ0Z1bmMpIHtcbiAgICBpZiAodHlwZW9mIHRpbWUgIT0gXCJudW1iZXJcIiB8fCAhaXNGaW5pdGUodGltZSkgfHwgdGltZSA8IDApIHtcbiAgICAgICAgdGhyb3coXCJJbnZhbGlkIENvbnN0cnVjdG9yOiBUaW1lIG11c3QgYmUgYSBwb3NpdGl2ZSBudW1iZXJcIik7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgdmFsdWUgIT0gXCJudW1iZXJcIiB8fCAhaXNGaW5pdGUodmFsdWUpKSB7XG4gICAgICAgIHRocm93KFwiSW52YWxpZCBDb25zdHJ1Y3RvcjogVmFsdWUgbXVzdCBiZSBhIG51bWJlclwiKTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgICBcInRpbWVcIjoge1xuICAgICAgICAgICAgXCJnZXRcIjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRpbWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJzZXRcIjogZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNldFRpbWUodCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwidmFsdWVcIjoge1xuICAgICAgICAgICAgXCJnZXRcIjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwic2V0XCI6IGZ1bmN0aW9uKHYpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zZXRWYWx1ZSh2KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJzZXRWYWx1ZVwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKHYpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHYgIT0gXCJudW1iZXJcIiB8fCAhaXNGaW5pdGUodikpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3coXCJWYWx1ZSBtdXN0IGJlIGEgbnVtYmVyXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YWx1ZSA9IE1hdGgubWluKE1hdGgubWF4KHYsIG93bmVyLm1pbmltdW0pLCBvd25lci5tYXhpbXVtKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwic2V0VGltZVwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHQgPT0gXCJudW1iZXJcIiAmJiBpc0Zpbml0ZSh0KSAmJiB0ID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGltZSA9IHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0aW1lO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInRvU3RyaW5nXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0b1N0cmluZ0Z1bmMgPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0b1N0cmluZ0Z1bmMuY2FsbCh0aGlzLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBTdHJpbmcodmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcIm93bmVyXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogb3duZXJcbiAgICAgICAgfVxuICAgIH0pO1xufTtcblxudmFyIFRpbWVQb2ludExpc3QgPSBmdW5jdGlvbihtaW5fdmFsdWUsIG1heF92YWx1ZSwgdG9TdHJpbmdGdW5jKSB7XG4gICAgZnVuY3Rpb24gZ2V0UG9pbnRBdFRpbWUoYXV0b21hdGlvblBvaW50cywgdGltZSkge1xuICAgICAgICByZXR1cm4gYXV0b21hdGlvblBvaW50cy5maW5kKGZ1bmN0aW9uKHApIHtcbiAgICAgICAgICAgIHJldHVybiBwLnRpbWUgPT0gdGltZTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGhhc1BvaW50QXRUaW1lKGF1dG9tYXRpb25Qb2ludHMsIHRpbWUpIHtcbiAgICAgICAgcmV0dXJuIGdldFBvaW50QXRUaW1lKGF1dG9tYXRpb25Qb2ludHMsIHRpbWUpICE9PSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHNvcnRQb2ludHMoYXV0b21hdGlvblBvaW50cykge1xuICAgICAgICByZXR1cm4gYXV0b21hdGlvblBvaW50cy5zb3J0KGZ1bmN0aW9uKGEsYikge1xuICAgICAgICAgICAgaWYgKGEudGltZSA+IGIudGltZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIG1pbl92YWx1ZSAhPSBcIm51bWJlclwiIHx8ICFpc0Zpbml0ZShtaW5fdmFsdWUpKSB7XG4gICAgICAgIHRocm93KFwiSW52YWxpZCBDb25zdHJ1Y3RvcjogbWluX3ZhbHVlIGJlIGEgbnVtYmVyXCIpO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIG1heF92YWx1ZSAhPSBcIm51bWJlclwiIHx8ICFpc0Zpbml0ZShtYXhfdmFsdWUpKSB7XG4gICAgICAgIHRocm93KFwiSW52YWxpZCBDb25zdHJ1Y3RvcjogbWF4X3ZhbHVlIGJlIGEgbnVtYmVyXCIpO1xuICAgIH1cbiAgICBpZiAobWluX3ZhbHVlID09IG1heF92YWx1ZSkge1xuICAgICAgICB0aHJvdyhcIkludmFsaWQgQ29uc3RydWN0b3I6IG1heF92YWx1ZSBjYW5ub3QgZXF1YWwgdG8gbWluX3ZhbHVlXCIpO1xuICAgIH1cbiAgICBpZiAobWF4X3ZhbHVlIDwgbWluX3ZhbHVlKSB7XG4gICAgICAgIHRocm93KFwiSW52YWxpZCBDb25zdHJ1Y3RvcjogbWluX3ZhbHVlIGNhbm5vdCBiZSBncmVhdGVyIHRoYW4gbWF4X3ZhbHVlXCIpO1xuICAgIH1cbiAgICB2YXIgYXV0b21hdGlvblBvaW50cyA9IFtdO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgICAgXCJpbnNlcnRQb2ludFwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKHRpbWUsIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aW1lICE9IFwibnVtYmVyXCIgfHwgIWlzRmluaXRlKHRpbWUpIHx8IHRpbWUgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93KFwiVGltZSBtdXN0IGJlIGEgcG9zaXRpdmUgbnVtYmVyXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlICE9IFwibnVtYmVyXCIgfHwgIWlzRmluaXRlKHZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyhcIlZhbHVlIG11c3QgYmUgYSBudW1iZXJcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChoYXNQb2ludEF0VGltZShhdXRvbWF0aW9uUG9pbnRzLCB0aW1lKSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyhcIkFscmVhZHkgYSB2YWx1ZSBlbnRyeSBhdCB0aW1lIFwiK3RpbWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YWx1ZSA9IE1hdGgubWluKE1hdGgubWF4KHZhbHVlLCBtaW5fdmFsdWUpLCBtYXhfdmFsdWUpO1xuICAgICAgICAgICAgICAgIHZhciBwb2ludCA9IG5ldyBUaW1lUG9pbnQodGhpcywgdGltZSwgdmFsdWUsIHRvU3RyaW5nRnVuYyk7XG4gICAgICAgICAgICAgICAgYXV0b21hdGlvblBvaW50cy5wdXNoKHBvaW50KTtcbiAgICAgICAgICAgICAgICBhdXRvbWF0aW9uUG9pbnRzID0gc29ydFBvaW50cyhhdXRvbWF0aW9uUG9pbnRzKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcG9pbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0UG9pbnRzXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24oc3RhcnRfdGltZSwgZW5kX3RpbWUpIHtcbiAgICAgICAgICAgICAgICBpZiAoc3RhcnRfdGltZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0X3RpbWUgPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZW5kX3RpbWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBlbmRfdGltZSA9IEluZmluaXR5O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gYXV0b21hdGlvblBvaW50cy5maWx0ZXIoZnVuY3Rpb24ocG9pbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBvaW50LnRpbWUgPj0gc3RhcnRfdGltZSAmJiBwb2ludC50aW1lIDwgZW5kX3RpbWU7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiZGVsZXRlUG9pbnRcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbih0aW1lKSB7XG4gICAgICAgICAgICAgICAgdmFyIGluZGV4ID0gYXV0b21hdGlvblBvaW50cy5maW5kSW5kZXgoZnVuY3Rpb24ocG9pbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBvaW50LnRpbWUgPT0gdGltZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICBhdXRvbWF0aW9uUG9pbnRzLnNwbGljZShpbmRleCwgMSwgMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBhdXRvbWF0aW9uUG9pbnRzLmxlbmd0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRTdGF0aWNWYWx1ZUFzU3RyaW5nXCI6IHtcbiAgICAgICAgICAgIFwid3JpdGFibGVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFN0cmluZyh2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0VmFsdWVBdFRpbWVQb2ludFwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICh0aW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGdldFBvaW50QXRUaW1lKGF1dG9tYXRpb25Qb2ludHMsIHRpbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImxlbmd0aFwiOiB7XG4gICAgICAgICAgICBcImdldFwiOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXV0b21hdGlvblBvaW50cy5sZW5ndGg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwibWluaW11bVwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IG1pbl92YWx1ZVxuICAgICAgICB9LFxuICAgICAgICBcIm1heGltdW1cIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBtYXhfdmFsdWVcbiAgICAgICAgfSxcbiAgICAgICAgXCJ1cGRhdGVQb2ludFwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKHRpbWUsIG9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICB2YXIgcG9pbnQgPSBhdXRvbWF0aW9uUG9pbnRzLmZpbmQoZnVuY3Rpb24ocG9pbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBvaW50LnRpbWUgPT0gdGltZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAocG9pbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLnRpbWUgPT0gXCJudW1iZXJcIiAmJiBvcHRpb25zLnRpbWUgIT0gcG9pbnQudGltZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdldFBvaW50QXRUaW1lKGF1dG9tYXRpb25Qb2ludHMsIHRpbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3coXCJBIHRpbWUtcG9pbnQgYWxyZWFkeSBleGlzdHMgYXQgXFxcIlwiK1N0cmluZyhvcHRpb25zLnRpbWUpK1wiXFxcIiBzZWNvbmRzXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb2ludC50aW1lID0gb3B0aW9ucy50aW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9tYXRpb25Qb2ludHMgPSBzb3J0UG9pbnRzKGF1dG9tYXRpb25Qb2ludHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHBvaW50LnZhbHVlID0gb3B0aW9ucy52YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBvaW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59O1xuXG52YXIgUGFyYW1ldGVyQXV0b21hdGlvbiA9IGZ1bmN0aW9uKHBhcmFtZXRlciwgbWluX3ZhbHVlLCBtYXhfdmFsdWUsIHRvU3RyaW5nRnVuYykge1xuICAgIFRpbWVQb2ludExpc3QuY2FsbCh0aGlzLCBtaW5fdmFsdWUsIG1heF92YWx1ZSwgdG9TdHJpbmdGdW5jKTtcbiAgICB2YXIgZW5hYmxlZCA9IGZhbHNlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgICAgXCJlbmFibGVkXCI6IHtcbiAgICAgICAgICAgIFwiZ2V0XCI6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBlbmFibGVkO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwic2V0XCI6IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGVuYWJsZWQgPSAodCA9PT0gdHJ1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBlbmFibGVkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59O1xuXG52YXIgUGFyYW1ldGVyTGluZWFyQXV0b21hdGlvbiA9IGZ1bmN0aW9uIChvd25lciwgcGFyYW1ldGVyLCBtaW5fdmFsdWUsIG1heF92YWx1ZSwgdG9TdHJpbmdGdW5jKSB7XG4gICAgUGFyYW1ldGVyQXV0b21hdGlvbi5jYWxsKHRoaXMsIHBhcmFtZXRlciwgbWluX3ZhbHVlLCBtYXhfdmFsdWUsIHRvU3RyaW5nRnVuYyk7XG4gICAgZnVuY3Rpb24gbGluZWFySW50ZXJwb2xhdGlvbih0aW1lLCBwb2ludEEsIHBvaW50Qikge1xuICAgICAgICB2YXIgdDEgPSBwb2ludEEudGltZTtcbiAgICAgICAgdmFyIHQyID0gcG9pbnRCLnRpbWU7XG4gICAgICAgIHRpbWUgLT0gdDE7XG4gICAgICAgIHQyIC09IHQxO1xuICAgICAgICB0MSA9IDA7XG5cbiAgICAgICAgdmFyIHAgPSB0aW1lL3QyO1xuICAgICAgICByZXR1cm4gcG9pbnRBLnZhbHVlICogKDEtcCkgKyBwb2ludEIudmFsdWUgKiBwO1xuICAgIH1cbiAgICBmdW5jdGlvbiBnZXRDdXJyZW50VGltZVZhbHVlKGF1dG9tYXRpb25Qb2ludHMsIHRpbWUpIHtcbiAgICAgICAgaWYgKGF1dG9tYXRpb25Qb2ludHMubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgIHRocm93KFwiTm8gYXV0b21hdGlvbiBwb2ludHMgYXZhaWxhYmxlXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhdXRvbWF0aW9uUG9pbnRzLmxlbmd0aCA9PSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gYXV0b21hdGlvblBvaW50c1swXS52YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBmaXJzdFBvaW50ID0gYXV0b21hdGlvblBvaW50cy5yZWR1Y2UoZnVuY3Rpb24ocG9pbnQsIG5leHRQb2ludCkge1xuICAgICAgICAgICAgaWYgKG5leHRQb2ludC50aW1lIDw9IHRpbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV4dFBvaW50O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcG9pbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIGF1dG9tYXRpb25Qb2ludHNbMF0pO1xuICAgICAgICB2YXIgc2Vjb25kUG9pbnQgPSBhdXRvbWF0aW9uUG9pbnRzLmZpbmQoZnVuY3Rpb24ocG9pbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBwb2ludC50aW1lID4gZmlyc3RQb2ludC50aW1lO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHNlY29uZFBvaW50ID09PSB1bmRlZmluZWQgfHwgZmlyc3RQb2ludC50aW1lID4gdGltZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZpcnN0UG9pbnQudmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxpbmVhckludGVycG9sYXRpb24odGltZSwgZmlyc3RQb2ludCwgc2Vjb25kUG9pbnQpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHN0YXJ0KGF1dG9tYXRpb25Qb2ludHMsIHRpbWUsIGNvbnRleHRUaW1lKSB7XG4gICAgICAgIHZhciBzdGFydFBvc2l0aW9uID0gb3duZXIudXBkYXRlKGdldEN1cnJlbnRUaW1lVmFsdWUoYXV0b21hdGlvblBvaW50cywgdGltZSkpO1xuICAgICAgICBwYXJhbWV0ZXIuc2V0VmFsdWVBdFRpbWUoc3RhcnRQb3NpdGlvbiwgY29udGV4dFRpbWUpO1xuICAgICAgICBhdXRvbWF0aW9uUG9pbnRzLmZvckVhY2goZnVuY3Rpb24ocCkge1xuICAgICAgICAgICAgaWYgKHAudGltZSA+IHRpbWUpIHtcbiAgICAgICAgICAgICAgICB2YXIgdCA9IHAudGltZSAtIHRpbWU7XG4gICAgICAgICAgICAgICAgdmFyIHYgPSBvd25lci51cGRhdGUocC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgcGFyYW1ldGVyLmxpbmVhclJhbXBUb1ZhbHVlQXRUaW1lKHYsIHQrY29udGV4dFRpbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzdG9wKGNvbnRleHRUaW1lKSB7XG4gICAgICAgIGlmIChjb250ZXh0VGltZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjb250ZXh0VGltZSA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgcGFyYW1ldGVyLmNhbmNlbFNjaGVkdWxlZFZhbHVlcyhjb250ZXh0VGltZSk7XG4gICAgfVxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgICBcImdldEN1cnJlbnRUaW1lVmFsdWVcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbih0aW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGdldEN1cnJlbnRUaW1lVmFsdWUodGhpcy5nZXRQb2ludHMoKSwgdGltZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwic3RhcnRcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbih0aW1lLCBjb250ZXh0VGltZSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmVuYWJsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhcnQodGhpcy5nZXRQb2ludHMoKSwgdGltZSwgY29udGV4dFRpbWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJzdG9wXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24oY29udGV4dFRpbWUpIHtcbiAgICAgICAgICAgICAgICBzdG9wKGNvbnRleHRUaW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuXG59O1xuUGFyYW1ldGVyTGluZWFyQXV0b21hdGlvbi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFBhcmFtZXRlckF1dG9tYXRpb24ucHJvdG90eXBlKTtcblBhcmFtZXRlckxpbmVhckF1dG9tYXRpb24ucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gUGFyYW1ldGVyTGluZWFyQXV0b21hdGlvbjtcblxudmFyIFBhcmFtZXRlclN0ZXBBdXRvbWF0aW9uID0gZnVuY3Rpb24gKG93bmVyLCBwYXJhbWV0ZXIsIG1pbl92YWx1ZSwgbWF4X3ZhbHVlLCB0b1N0cmluZ0Z1bmMpIHtcbiAgICBQYXJhbWV0ZXJBdXRvbWF0aW9uLmNhbGwodGhpcywgcGFyYW1ldGVyLCBtaW5fdmFsdWUsIG1heF92YWx1ZSwgdG9TdHJpbmdGdW5jKTtcbiAgICBmdW5jdGlvbiBnZXRDdXJyZW50VGltZVZhbHVlKGF1dG9tYXRpb25Qb2ludHMsIHRpbWUpIHtcbiAgICAgICAgaWYgKGF1dG9tYXRpb25Qb2ludHMubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgIHRocm93KFwiTm8gYXV0b21hdGlvbiBwb2ludHMgYXZhaWxhYmxlXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhdXRvbWF0aW9uUG9pbnRzLmxlbmd0aCA9PSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gYXV0b21hdGlvblBvaW50c1swXS52YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBuZWFyZXN0UG9pbnQgPSBhdXRvbWF0aW9uUG9pbnRzLnJlZHVjZShmdW5jdGlvbihwb2ludCwgbmV4dFBvaW50KSB7XG4gICAgICAgICAgICBpZiAobmV4dFBvaW50LnRpbWUgPD0gdGltZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXh0UG9pbnQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBwb2ludDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgYXV0b21hdGlvblBvaW50c1swXSk7XG4gICAgICAgIHJldHVybiBuZWFyZXN0UG9pbnQudmFsdWU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3RhcnQoYXV0b21hdGlvblBvaW50cywgdGltZSwgY29udGV4dFRpbWUpIHtcbiAgICAgICAgdmFyIHN0YXJ0UG9zaXRpb24gPSBvd25lci51cGRhdGUoZ2V0Q3VycmVudFRpbWVWYWx1ZShhdXRvbWF0aW9uUG9pbnRzLCB0aW1lKSk7XG4gICAgICAgIHBhcmFtZXRlci5zZXRWYWx1ZUF0VGltZShzdGFydFBvc2l0aW9uLCBjb250ZXh0VGltZSk7XG4gICAgICAgIGF1dG9tYXRpb25Qb2ludHMuZm9yRWFjaChmdW5jdGlvbihwKSB7XG4gICAgICAgICAgICBpZiAocC50aW1lID4gdGltZSkge1xuICAgICAgICAgICAgICAgIHZhciB0ID0gcC50aW1lIC0gdGltZTtcbiAgICAgICAgICAgICAgICB2YXIgdiA9IG93bmVyLnVwZGF0ZShwLnZhbHVlKTtcbiAgICAgICAgICAgICAgICBwYXJhbWV0ZXIuc2V0VmFsdWVBdFRpbWUodiwgdCtjb250ZXh0VGltZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHN0b3AoY29udGV4dFRpbWUpIHtcbiAgICAgICAgcGFyYW1ldGVyLmNhbmNlbFNjaGVkdWxlZFZhbHVlcyhjb250ZXh0VGltZSk7XG4gICAgfVxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgICBcImdldEN1cnJlbnRUaW1lVmFsdWVcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbih0aW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGdldEN1cnJlbnRUaW1lVmFsdWUodGhpcy5nZXRQb2ludHMoKSwgdGltZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwic3RhcnRcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbih0aW1lLCBjb250ZXh0VGltZSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmVuYWJsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhcnQodGhpcy5nZXRQb2ludHMoKSwgdGltZSwgY29udGV4dFRpbWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJzdG9wXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24oY29udGV4dFRpbWUpIHtcbiAgICAgICAgICAgICAgICBzdG9wKGNvbnRleHRUaW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufTtcblBhcmFtZXRlclN0ZXBBdXRvbWF0aW9uLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoUGFyYW1ldGVyQXV0b21hdGlvbi5wcm90b3R5cGUpO1xuUGFyYW1ldGVyU3RlcEF1dG9tYXRpb24ucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gUGFyYW1ldGVyU3RlcEF1dG9tYXRpb247XG5cbmV4cG9ydCB7UGFyYW1ldGVyTGluZWFyQXV0b21hdGlvbiwgUGFyYW1ldGVyU3RlcEF1dG9tYXRpb259O1xuIiwiLyoganNoaW50IGVzdmVyc2lvbjogNiAqL1xuZnVuY3Rpb24gUGx1Z2luUGFyYW1ldGVyKG93bmVyLCBuYW1lLCBkYXRhVHlwZSwgdmlzaWJsZU5hbWUsIGV4cG9zZWQpIHtcbiAgICB2YXIgdXBkYXRlLCB0cmFuc2xhdGUsIHRyaWdnZXI7XG4gICAgdmFyIGV2ZW50VGFyZ2V0ID0gbmV3IEV2ZW50VGFyZ2V0KCk7XG4gICAgdXBkYXRlID0gdHJhbnNsYXRlID0gZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgcmV0dXJuIHY7XG4gICAgfTtcbiAgICB0cmlnZ2VyID0gZnVuY3Rpb24gKCkge307XG4gICAgaWYgKHR5cGVvZiB2aXNpYmxlTmFtZSAhPSBcInN0cmluZ1wiIHx8IHZpc2libGVOYW1lLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgIHZpc2libGVOYW1lID0gbmFtZTtcbiAgICB9XG4gICAgaWYgKGV4cG9zZWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBleHBvc2VkID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBleHBvc2VkICE9IFwiYm9vbGVhblwiKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcImV4cG9zZWQgcGFyYW1ldGVyIGlzIG5vdCBvZiB0eXBlIGJvb2xlYW4sIGFzc3VtaW5nIGV4cG9zZWQgPSB0cnVlXCIpO1xuICAgICAgICBleHBvc2VkID0gdHJ1ZTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgICBcImFkZEV2ZW50TGlzdGVuZXJcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbih0eXBlLCBsaXN0ZW5lciwgb3B0aW9ucykge1xuICAgICAgICAgICAgICAgIHJldHVybiBldmVudFRhcmdldC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyLCBvcHRpb25zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJyZW1vdmVFdmVudExpc3RlbmVyXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24odHlwZSwgbGlzdGVuZXIsIG9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZXZlbnRUYXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lciwgb3B0aW9ucyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwidHJpZ2dlclBhcmFtZXRlclNldFwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKHVwZGF0ZUludGVyZmFjZXMpIHtcbiAgICAgICAgICAgICAgICB2YXIgb3B0cyA9IHtkZXRhaWw6IHtcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1ldGVyOiB0aGlzLFxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVJbnRlcmZhY2VzOiB1cGRhdGVJbnRlcmZhY2VzXG4gICAgICAgICAgICAgICAgfX07XG4gICAgICAgICAgICAgICAgZXZlbnRUYXJnZXQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJwYXJhbWV0ZXJzZXRcIiwgb3B0cykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBuYW1lXG4gICAgICAgIH0sXG4gICAgICAgIFwib3duZXJcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBvd25lclxuICAgICAgICB9LFxuICAgICAgICBcInZpc2libGVOYW1lXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogdmlzaWJsZU5hbWVcbiAgICAgICAgfSxcbiAgICAgICAgXCJleHBvc2VkXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZXhwb3NlZFxuICAgICAgICB9LFxuICAgICAgICBcInVwZGF0ZVwiOiB7XG4gICAgICAgICAgICBcImdldFwiOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHVwZGF0ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInNldFwiOiBmdW5jdGlvbiAoZikge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IChcIk11c3QgYmUgYSBjYWxsYmFjayBmdW5jdGlvblwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGYoMCkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyAoXCJGdW5jdGlvbiBtdXN0IHJldHVybiBhIHZhbHVlXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB1cGRhdGUgPSBmO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInRyYW5zbGF0ZVwiOiB7XG4gICAgICAgICAgICBcImdldFwiOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRyYW5zbGF0ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInNldFwiOiBmdW5jdGlvbiAoZikge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IChcIk11c3QgYmUgYSBjYWxsYmFjayBmdW5jdGlvblwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGYoMCkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyAoXCJGdW5jdGlvbiBtdXN0IHJldHVybiBhIHZhbHVlXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0cmFuc2xhdGUgPSBmO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInRyaWdnZXJcIjoge1xuICAgICAgICAgICAgXCJnZXRcIjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cmlnZ2VyO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwic2V0XCI6IGZ1bmN0aW9uIChmKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBmICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgKFwiTXVzdCBiZSBhIGNhbGxiYWNrIGZ1bmN0aW9uXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0cmlnZ2VyID0gZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJiaW5kVG9BdWRpb1BhcmFtXCI6IHtcbiAgICAgICAgICAgIFwiY29uZmlndXJhYmxlXCI6IHRydWUsXG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uIChhcCkge1xuICAgICAgICAgICAgICAgIHRocm93KFwiQ2Fubm90IGJpbmQgdGhpcyBwYXJhbWV0ZXIgdHlwZSB0byBhbiBhdWRpbyBwYXJhbWV0ZXJcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiYm91bmRBdWRpb1BhcmFtXCI6IHtcbiAgICAgICAgICAgIFwiY29uZmlndXJhYmxlXCI6IHRydWUsXG4gICAgICAgICAgICBcImdldFwiOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5leHBvcnQge1BsdWdpblBhcmFtZXRlcn07XG4iLCIvKiBqc2hpbnQgZXN2ZXJzaW9uOiA2ICovXG5pbXBvcnQge1BsdWdpblBhcmFtZXRlcn0gZnJvbSBcIi4vUGx1Z2luUGFyYW1ldGVyLmpzXCI7XG5cbmZ1bmN0aW9uIFN0cmluZ1BhcmFtZXRlcihvd25lciwgbmFtZSwgZGVmYXVsdFZhbHVlLCBtYXhMZW5ndGgsIHRvU3RyaW5nRnVuYywgdmlzaWJsZU5hbWUsIGV4cG9zZWQpIHtcbiAgICBQbHVnaW5QYXJhbWV0ZXIuY2FsbCh0aGlzLCBvd25lciwgbmFtZSwgXCJTdHJpbmdcIiwgdmlzaWJsZU5hbWUsIGV4cG9zZWQpO1xuICAgIHZhciBfdmFsdWUgPSBkZWZhdWx0VmFsdWU7XG4gICAgdmFyIGF1ZGlvUGFyYW1ldGVyO1xuXG4gICAgZnVuY3Rpb24gc2V0VmFsdWUodiwgdXBkYXRlSW50ZXJmYWNlcykge1xuICAgICAgICBpZiAobWF4TGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAodi5sZW5ndGggPiBtYXhMZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyAoXCJTdHJpbmcgbG9uZ2VyIHRoYW4gXCIgKyBtYXhMZW5ndGggKyBcIiBjaGFyYWN0ZXJzXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmJvdW5kQXVkaW9QYXJhbSkge1xuICAgICAgICAgICAgdGhpcy5ib3VuZEF1ZGlvUGFyYW0udmFsdWUgPSB0aGlzLnVwZGF0ZSh2KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoX3ZhbHVlICE9PSB2KSB7XG4gICAgICAgICAgICBfdmFsdWUgPSB2O1xuICAgICAgICAgICAgdGhpcy50cmlnZ2VyUGFyYW1ldGVyU2V0KHVwZGF0ZUludGVyZmFjZXMpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudHJpZ2dlcigpO1xuICAgIH1cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgICAgXCJ0eXBlXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogXCJTdHJpbmdcIlxuICAgICAgICB9LFxuICAgICAgICBcImRlc3Ryb3lcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgb3duZXIgPSBuYW1lID0gZGVmYXVsdFZhbHVlID0gbWF4TGVuZ3RoID0gX3ZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcIm1heExlbmd0aFwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IG1heExlbmd0aFxuICAgICAgICB9LFxuICAgICAgICBcImRlZmF1bHRWYWx1ZVwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGRlZmF1bHRWYWx1ZVxuICAgICAgICB9LFxuICAgICAgICBcInZhbHVlXCI6IHtcbiAgICAgICAgICAgIFwiZ2V0XCI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5ib3VuZEF1ZGlvUGFyYW0pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNsYXRlKHRoaXMuYm91bmRBdWRpb1BhcmFtLnZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIF92YWx1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInNldFwiOiBmdW5jdGlvbiAodikge1xuICAgICAgICAgICAgICAgIHJldHVybiBzZXRWYWx1ZS5jYWxsKHRoaXMsIHYsIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInNldFZhbHVlXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24odiwgdXBkYXRlSW50ZXJmYWNlcykge1xuICAgICAgICAgICAgICAgIHJldHVybiBzZXRWYWx1ZS5jYWxsKHRoaXMsIHYsIHVwZGF0ZUludGVyZmFjZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImJpbmRUb0F1ZGlvUGFyYW1cIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoYXApIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGFwID09IFwib2JqZWN0XCIgJiYgYXAudmFsdWUgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGF1ZGlvUGFyYW1ldGVyID0gYXA7XG4gICAgICAgICAgICAgICAgICAgIGF1ZGlvUGFyYW1ldGVyLnZhbHVlID0gdGhpcy51cGRhdGUoX3ZhbHVlKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyhcIkFyZ3VtZW50IDEgaXMgbm90IGEgdmFsaWQgQXVkaW9QYXJhbWV0ZXIgb2JqZWN0XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJib3VuZEF1ZGlvUGFyYW1cIjoge1xuICAgICAgICAgICAgXCJjb25maWd1cmFibGVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwiZ2V0XCI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXVkaW9QYXJhbWV0ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwidG9TdHJpbmdcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbih2KSB7XG4gICAgICAgICAgICAgICAgaWYgKHYgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHYgPSB0aGlzLnZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRvU3RyaW5nRnVuYyA9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRvU3RyaW5nRnVuYy5jYWxsKHRoaXMsIHYpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBTdHJpbmcodik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImdldFBhcmFtZXRlck9iamVjdFwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiB0aGlzLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU6IGRlZmF1bHRWYWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoOiBtYXhMZW5ndGgsXG4gICAgICAgICAgICAgICAgICAgIHZpc2libGVOYW1lOiBuYW1lLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIlN0cmluZ1BhcmFtZXRlclwiLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBuYW1lXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuU3RyaW5nUGFyYW1ldGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoUGx1Z2luUGFyYW1ldGVyLnByb3RvdHlwZSk7XG5TdHJpbmdQYXJhbWV0ZXIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gU3RyaW5nUGFyYW1ldGVyO1xuXG5leHBvcnQge1N0cmluZ1BhcmFtZXRlcn07XG4iLCIvKiBqc2hpbnQgZXN2ZXJzaW9uOiA2ICovXG5pbXBvcnQge1BsdWdpblBhcmFtZXRlcn0gZnJvbSBcIi4vUGx1Z2luUGFyYW1ldGVyLmpzXCI7XG5pbXBvcnQge1BhcmFtZXRlclN0ZXBBdXRvbWF0aW9ufSBmcm9tIFwiLi9QYXJhbWV0ZXJBdXRvbWF0aW9uLmpzXCI7XG5cbmZ1bmN0aW9uIFN3aXRjaFBhcmFtZXRlcihvd25lciwgbmFtZSwgZGVmYXVsdFZhbHVlLCBtaW5TdGF0ZSwgbWF4U3RhdGUsIHRvU3RyaW5nRnVuYywgdmlzaWJsZU5hbWUsIGV4cG9zZWQpIHtcbiAgICBQbHVnaW5QYXJhbWV0ZXIuY2FsbCh0aGlzLCBvd25lciwgbmFtZSwgXCJCdXR0b25cIiwgdmlzaWJsZU5hbWUsIGV4cG9zZWQpO1xuICAgIHZhciBvbmNsaWNrID0gZnVuY3Rpb24gKCkge307XG4gICAgdmFyIF92YWx1ZSA9IGRlZmF1bHRWYWx1ZTtcbiAgICB2YXIgYXVkaW9QYXJhbWV0ZXIsIGF1dG9tYXRpb247XG5cbiAgICBmdW5jdGlvbiBzZXRWYWx1ZSh2LCB1cGRhdGVJbnRlcmZhY2VzKSB7XG4gICAgICAgIGlmICh2IDwgbWluU3RhdGUpIHtcbiAgICAgICAgICAgIHRocm93IChcIlNldCB2YWx1ZSBpcyBsZXNzIHRoYW4gXCIgKyBtaW5TdGF0ZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHYgPiBtYXhTdGF0ZSkge1xuICAgICAgICAgICAgdGhyb3cgKFwiU2V0IHZhbHVlIGlzIGdyZWF0ZXIgdGhhbiBcIiArIG1heFN0YXRlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5ib3VuZEF1ZGlvUGFyYW0pIHtcbiAgICAgICAgICAgIHRoaXMuYm91bmRBdWRpb1BhcmFtLnZhbHVlID0gdGhpcy51cGRhdGUodik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKF92YWx1ZSAhPT0gdikge1xuICAgICAgICAgICAgX3ZhbHVlID0gdjtcbiAgICAgICAgICAgIHRoaXMudHJpZ2dlclBhcmFtZXRlclNldCh1cGRhdGVJbnRlcmZhY2VzKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRyaWdnZXIoKTtcbiAgICAgICAgcmV0dXJuIHY7XG4gICAgfVxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgICBcInR5cGVcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIlN3aXRjaFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGVzdHJveVwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBvd25lciA9IG5hbWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiZGVmYXVsdFZhbHVlXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZGVmYXVsdFZhbHVlXG4gICAgICAgIH0sXG4gICAgICAgIFwibWluU3RhdGVcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBtaW5TdGF0ZVxuICAgICAgICB9LFxuICAgICAgICBcIm1heFN0YXRlXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogbWF4U3RhdGVcbiAgICAgICAgfSxcbiAgICAgICAgXCJ2YWx1ZVwiOiB7XG4gICAgICAgICAgICBcImdldFwiOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYm91bmRBdWRpb1BhcmFtKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRyYW5zbGF0ZSh0aGlzLmJvdW5kQXVkaW9QYXJhbS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBfdmFsdWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJzZXRcIjogZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2V0VmFsdWUuY2FsbCh0aGlzLCB2KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJzZXRWYWx1ZVwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKHYsIHVwZGF0ZUludGVyZmFjZXMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2V0VmFsdWUuY2FsbCh0aGlzLCB2LCB1cGRhdGVJbnRlcmZhY2VzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJpbmNyZW1lbnRcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIHYgPSBfdmFsdWUgKyAxO1xuICAgICAgICAgICAgICAgIGlmICh2ID4gbWF4U3RhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdiA9IG1pblN0YXRlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gc2V0VmFsdWUuY2FsbCh0aGlzLCB2KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJkZWNyZW1lbnRcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIHYgPSBfdmFsdWUgLSAxO1xuICAgICAgICAgICAgICAgIGlmICh2IDwgbWluU3RhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdiA9IG1heFN0YXRlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gc2V0VmFsdWUuY2FsbCh0aGlzLCB2KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJiaW5kVG9BdWRpb1BhcmFtXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKGFwKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBhcCA9PSBcIm9iamVjdFwiICYmIGFwLnZhbHVlICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBhdWRpb1BhcmFtZXRlciA9IGFwO1xuICAgICAgICAgICAgICAgICAgICBhdWRpb1BhcmFtZXRlci52YWx1ZSA9IHRoaXMudXBkYXRlKF92YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhcC5zZXRWYWx1ZUF0VGltZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXV0b21hdGlvbiA9IG5ldyBQYXJhbWV0ZXJTdGVwQXV0b21hdGlvbih0aGlzLCBhdWRpb1BhcmFtZXRlciwgbWluU3RhdGUsIG1heFN0YXRlLCB0b1N0cmluZ0Z1bmMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZ2V0VmFsdWVBdFRpbWVQb2ludFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24odGltZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYXV0b21hdGlvblBvaW50cy5nZXRWYWx1ZUF0VGltZVBvaW50KHRpbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImF1dG9tYXRpb25Qb2ludHNcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGF1dG9tYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3RhcnRcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKHRpbWUsIGNvbnRleHRUaW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXV0b21hdGlvbi5zdGFydCh0aW1lLCBjb250ZXh0VGltZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3RvcFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24oY29udGV4dFRpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9tYXRpb24uc3RvcChjb250ZXh0VGltZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZW5hYmxlZFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZ2V0XCI6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGF1dG9tYXRpb24uZW5hYmxlZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzZXRcIjogZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChhdXRvbWF0aW9uLmVuYWJsZWQgPSB0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwiQ2Fubm90IGJpbmQgYXV0b21hdGlvbiBhcyBBdWRpb1BhcmFtZXRlciBpcyBub3QgYXV0b21hdGFibGVcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyhcIkFyZ3VtZW50IDEgaXMgbm90IGEgdmFsaWQgQXVkaW9QYXJhbWV0ZXIgb2JqZWN0XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJib3VuZEF1ZGlvUGFyYW1cIjoge1xuICAgICAgICAgICAgXCJjb25maWd1cmFibGVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwiZ2V0XCI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXVkaW9QYXJhbWV0ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiYXV0b21hdGFibGVcIjoge1xuICAgICAgICAgICAgXCJnZXRcIjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0eXBlb2YgYXV0b21hdGlvbiA9PSBcIm9iamVjdFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInRvU3RyaW5nXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24odikge1xuICAgICAgICAgICAgICAgIGlmICh2ID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICB2ID0gdGhpcy52YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0b1N0cmluZ0Z1bmMgPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0b1N0cmluZ0Z1bmMuY2FsbCh0aGlzLCB2KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gU3RyaW5nKHYpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRQYXJhbWV0ZXJPYmplY3RcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdGhpcy52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBkZWZhdWx0VmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIG1pbmltdW06IG1pblN0YXRlLFxuICAgICAgICAgICAgICAgICAgICBtYXhpbXVtOiBtYXhTdGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgdmlzaWJsZU5hbWU6IG5hbWUsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiU3dpdGNoUGFyYW1ldGVyXCIsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IG5hbWVcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG5Td2l0Y2hQYXJhbWV0ZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShQbHVnaW5QYXJhbWV0ZXIucHJvdG90eXBlKTtcblN3aXRjaFBhcmFtZXRlci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBTd2l0Y2hQYXJhbWV0ZXI7XG5cbmV4cG9ydCB7U3dpdGNoUGFyYW1ldGVyfTtcbiIsIi8qIGpzaGludCBlc3ZlcnNpb246IDYgKi9cbmltcG9ydCB7UGx1Z2luUGFyYW1ldGVyfSBmcm9tIFwiLi9QbHVnaW5QYXJhbWV0ZXIuanNcIjtcblxuZnVuY3Rpb24gVVJMUGFyYW1ldGVyKG93bmVyLCBuYW1lLCBkZWZhdWx0VmFsdWUsIG1heExlbmd0aCwgdG9TdHJpbmdGdW5jLCB2aXNpYmxlTmFtZSwgZXhwb3NlZCkge1xuICAgIFBsdWdpblBhcmFtZXRlci5jYWxsKHRoaXMsIG93bmVyLCBuYW1lLCBcIlN0cmluZ1wiLCB2aXNpYmxlTmFtZSwgZXhwb3NlZCk7XG4gICAgdmFyIF92YWx1ZSA9IGRlZmF1bHRWYWx1ZTtcbiAgICB2YXIgcmVzb3VyY2VPYmplY3Q7XG5cbiAgICBmdW5jdGlvbiBnZXRSZXNvdXJjZSh0eXBlKSB7XG4gICAgICAgIGlmIChyZXNvdXJjZU9iamVjdCA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJlc291cmNlT2JqZWN0ID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICAgICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICAgICAgICAgIHhoci5vcGVuKFwiR0VUXCIsIF92YWx1ZSk7XG4gICAgICAgICAgICAgICAgeGhyLnJlc3BvbnNlVHlwZSA9IHR5cGU7XG4gICAgICAgICAgICAgICAgeGhyLm9ubG9hZCA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHhoci5zdGF0dXMgPT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGUudGFyZ2V0LnJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogeGhyLnN0YXR1cyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBlLnRhcmdldFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgeGhyLm9uZXJyb3IgPSBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiB4aHIuc3RhdHVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJlcnJvclwiXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgeGhyLm9udGltZW91dCA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IHhoci5zdGF0dXMsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcInRpbWVvdXRcIlxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHhoci5zZW5kKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzb3VyY2VPYmplY3Q7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0VmFsdWUodiwgdXBkYXRlSW50ZXJmYWNlcykge1xuICAgICAgICBpZiAobWF4TGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAodi5sZW5ndGggPiBtYXhMZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyAoXCJTdHJpbmcgbG9uZ2VyIHRoYW4gXCIgKyBtYXhMZW5ndGggKyBcIiBjaGFyYWN0ZXJzXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChfdmFsdWUgIT09IHYpIHtcbiAgICAgICAgICAgIHJlc291cmNlT2JqZWN0ID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgX3ZhbHVlID0gdjtcbiAgICAgICAgICAgIHRoaXMudHJpZ2dlclBhcmFtZXRlclNldCh1cGRhdGVJbnRlcmZhY2VzKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRyaWdnZXIoKTtcbiAgICB9XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XG4gICAgICAgIFwidHlwZVwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IFwiVVJMXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJkZXN0cm95XCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIG93bmVyID0gbmFtZSA9IGRlZmF1bHRWYWx1ZSA9IG1heExlbmd0aCA9IF92YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJtYXhMZW5ndGhcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBtYXhMZW5ndGhcbiAgICAgICAgfSxcbiAgICAgICAgXCJkZWZhdWx0VmFsdWVcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBkZWZhdWx0VmFsdWVcbiAgICAgICAgfSxcbiAgICAgICAgXCJ2YWx1ZVwiOiB7XG4gICAgICAgICAgICBcImdldFwiOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYm91bmRBdWRpb1BhcmFtKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRyYW5zbGF0ZSh0aGlzLmJvdW5kQXVkaW9QYXJhbS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBfdmFsdWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJzZXRcIjogZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2V0VmFsdWUuY2FsbCh0aGlzLCB2LCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJzZXRWYWx1ZVwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKHYsIHVwZGF0ZUludGVyZmFjZXMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2V0VmFsdWUuY2FsbCh0aGlzLCB2LCB1cGRhdGVJbnRlcmZhY2VzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRSZXNvdXJjZVwiOntcbiAgICAgICAgICAgIFwidmFsdWVcIjogZ2V0UmVzb3VyY2VcbiAgICAgICAgfSxcbiAgICAgICAgXCJ0b1N0cmluZ1wiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKHYpIHtcbiAgICAgICAgICAgICAgICBpZiAodiA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdiA9IHRoaXMudmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdG9TdHJpbmdGdW5jID09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdG9TdHJpbmdGdW5jLmNhbGwodGhpcywgdik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFN0cmluZyh2KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0UGFyYW1ldGVyT2JqZWN0XCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHRoaXMudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogZGVmYXVsdFZhbHVlLFxuICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg6IG1heExlbmd0aCxcbiAgICAgICAgICAgICAgICAgICAgdmlzaWJsZU5hbWU6IG5hbWUsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiVVJMUGFyYW1ldGVyXCIsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IG5hbWVcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG5VUkxQYXJhbWV0ZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShQbHVnaW5QYXJhbWV0ZXIucHJvdG90eXBlKTtcblVSTFBhcmFtZXRlci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBVUkxQYXJhbWV0ZXI7XG5cbmV4cG9ydCB7VVJMUGFyYW1ldGVyfTtcbiIsIi8qIGpzaGludCBlc3ZlcnNpb246IDYgKi9cblxuZnVuY3Rpb24gRXh0cmFjdG9yKG91dHB1dCwgZnJhbWVTaXplKSB7XG4gICAgdGhpcy5leHRyYWN0b3IgPSBvdXRwdXQuY29udGV4dC5jcmVhdGVBbmFseXNlcigpO1xuICAgIHRoaXMuZXh0cmFjdG9yLmZmdFNpemUgPSBmcmFtZVNpemU7XG4gICAgb3V0cHV0LmNvbm5lY3QodGhpcy5leHRyYWN0b3IpO1xuICAgIHRoaXMuZmVhdHVyZXMgPSBbXTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgXCJmcmFtZVNpemVcIiwge1xuICAgICAgICAndmFsdWUnOiBmcmFtZVNpemVcbiAgICB9KTtcblxuICAgIHZhciByZWN1cnNpdmVQcm9jZXNzaW5nID0gb3duZXIucmVjdXJzaXZlUHJvY2Vzc2luZztcbiAgICAvKlxuICAgIGZ1bmN0aW9uIHJlY3Vyc2l2ZVByb2Nlc3NpbmcoYmFzZSwgbGlzdCkge1xuICAgICAgICB2YXIgbCA9IGxpc3QubGVuZ3RoLFxuICAgICAgICAgICAgaSwgZW50cnk7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIGVudHJ5ID0gbGlzdFtpXTtcbiAgICAgICAgICAgIGJhc2VbZW50cnkubmFtZV0uYXBwbHkoYmFzZSwgZW50cnkucGFyYW1ldGVycyk7XG4gICAgICAgICAgICBpZiAoZW50cnkuZmVhdHVyZXMgJiYgZW50cnkuZmVhdHVyZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHJlY3Vyc2l2ZVByb2Nlc3NpbmcoYmFzZS5yZXN1bHRbZW50cnkubmFtZV0sIGVudHJ5LmZlYXR1cmVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAqL1xuICAgIGZ1bmN0aW9uIG9uYXVkaW9jYWxsYmFjayhkYXRhKSB7XG4gICAgICAgIC8vdGhpcyA9PT0gRXh0cmFjdG9yXG4gICAgICAgIHZhciBtZXNzYWdlID0ge1xuICAgICAgICAgICAgJ251bWJlck9mQ2hhbm5lbHMnOiAxLFxuICAgICAgICAgICAgJ3Jlc3VsdHMnOiBbXVxuICAgICAgICB9O1xuICAgICAgICByZWN1cnNpdmVQcm9jZXNzaW5nKGRhdGEsIHRoaXMuZmVhdHVyZXMpO1xuICAgICAgICBtZXNzYWdlLnJlc3VsdHNbMF0gPSB7XG4gICAgICAgICAgICAnY2hhbm5lbCc6IDAsXG4gICAgICAgICAgICAncmVzdWx0cyc6IEpTT04ucGFyc2UoZGF0YS50b0pTT04oKSlcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5wb3N0RmVhdHVyZXMoZGF0YS5sZW5ndGgsIG1lc3NhZ2UpO1xuICAgIH1cblxuICAgIHRoaXMuc2V0RmVhdHVyZXMgPSBmdW5jdGlvbiAoZmVhdHVyZUxpc3QpIHtcbiAgICAgICAgdGhpcy5mZWF0dXJlcyA9IGZlYXR1cmVMaXN0O1xuICAgICAgICBpZiAodGhpcy5mZWF0dXJlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuZXh0cmFjdG9yLmNsZWFyQ2FsbGJhY2soKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZXh0cmFjdG9yLmZyYW1lQ2FsbGJhY2sob25hdWRpb2NhbGxiYWNrLCB0aGlzKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5yZWpvaW5FeHRyYWN0b3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIG91dHB1dC5jb25uZWN0KHRoaXMuZXh0cmFjdG9yKTtcbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBFeHRyYWN0b3I7XG4iLCIvKiBqc2hpbnQgZXN2ZXJzaW9uOiA2ICovXG5cbmltcG9ydCBXb3JrZXJFeHRyYWN0b3IgZnJvbSBcIi4vV29ya2VyRXh0cmFjdG9yXCI7XG5pbXBvcnQgRXh0cmFjdG9yIGZyb20gXCIuL0V4dHJhY3RvclwiO1xuXG5mdW5jdGlvbiBPdXRwdXROb2RlKHBhcmVudCwgb3V0cHV0KSB7XG4gICAgdmFyIGV4dHJhY3RvcnMgPSBbXTtcbiAgICB0aGlzLmFkZEV4dHJhY3RvciA9IGZ1bmN0aW9uIChmcmFtZVNpemUpIHtcbiAgICAgICAgdmFyIG9iajtcbiAgICAgICAgaWYgKHdpbmRvdy5Xb3JrZXIpIHtcbiAgICAgICAgICAgIG9iaiA9IG5ldyBXb3JrZXJFeHRyYWN0b3Iob3V0cHV0LCBmcmFtZVNpemUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb2JqID0gbmV3IEV4dHJhY3RvcihvdXRwdXQsIGZyYW1lU2l6ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZXh0cmFjdG9ycy5wdXNoKG9iaik7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIFwicG9zdEZlYXR1cmVzXCIsIHtcbiAgICAgICAgICAgICd2YWx1ZSc6IGZ1bmN0aW9uIChmcmFtZVNpemUsIHJlc3VsdHNKU09OKSB7XG4gICAgICAgICAgICAgICAgdmFyIG9iaiA9IHtcbiAgICAgICAgICAgICAgICAgICAgJ291dHB1dEluZGV4JzogMCxcbiAgICAgICAgICAgICAgICAgICAgJ2ZyYW1lU2l6ZSc6IGZyYW1lU2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgJ3Jlc3VsdHMnOiByZXN1bHRzSlNPTlxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgdGhpcy5wb3N0RmVhdHVyZXMob2JqKTtcbiAgICAgICAgICAgIH0uYmluZCh0aGlzKVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICB9O1xuICAgIHRoaXMuZmluZEV4dHJhY3RvciA9IGZ1bmN0aW9uIChmcmFtZVNpemUpIHtcbiAgICAgICAgdmFyIGNoZWNrID0gZnJhbWVTaXplO1xuICAgICAgICByZXR1cm4gZXh0cmFjdG9ycy5maW5kKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAvLyBUaGlzIE1VU1QgYmUgPT0gTk9UID09PVxuICAgICAgICAgICAgcmV0dXJuIE51bWJlcihlLmZyYW1lU2l6ZSkgPT09IE51bWJlcihjaGVjayk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgdGhpcy5yZWpvaW5FeHRyYWN0b3JzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBleHRyYWN0b3JzLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGUucmVqb2luRXh0cmFjdG9yKCk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgdGhpcy5kZWxldGVFeHRyYWN0b3IgPSBmdW5jdGlvbiAoZnJhbWVTaXplKSB7fTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgT3V0cHV0Tm9kZTtcbiIsIi8qIGpzaGludCBlc3ZlcnNpb246IDYgKi9cblxuZnVuY3Rpb24gV29ya2VyRXh0cmFjdG9yKG91dHB1dCwgZnJhbWVTaXplKSB7XG4gICAgZnVuY3Rpb24gb25hdWRpb2NhbGxiYWNrKGUpIHtcbiAgICAgICAgdmFyIGMsIGZyYW1lcyA9IFtdO1xuICAgICAgICBmb3IgKGMgPSAwOyBjIDwgZS5pbnB1dEJ1ZmZlci5udW1iZXJPZkNoYW5uZWxzOyBjKyspIHtcbiAgICAgICAgICAgIGZyYW1lc1tjXSA9IGUuaW5wdXRCdWZmZXIuZ2V0Q2hhbm5lbERhdGEoYyk7XG4gICAgICAgIH1cbiAgICAgICAgd29ya2VyLnBvc3RNZXNzYWdlKHtcbiAgICAgICAgICAgICdzdGF0ZSc6IDIsXG4gICAgICAgICAgICAnZnJhbWVzJzogZnJhbWVzXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlc3BvbnNlKG1zZykge1xuICAgICAgICB0aGlzLnBvc3RGZWF0dXJlcyhmcmFtZVNpemUsIG1zZy5kYXRhLnJlc3BvbnNlKTtcbiAgICB9XG5cbiAgICB2YXIgd29ya2VyID0gbmV3IFdvcmtlcihcImpzYXAvZmVhdHVyZS13b3JrZXIuanNcIik7XG4gICAgd29ya2VyLm9uZXJyb3IgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgIH07XG5cbiAgICB0aGlzLnNldEZlYXR1cmVzID0gZnVuY3Rpb24gKGZlYXR1cmVMaXN0KSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdmFyIGNvbmZpZ01lc3NhZ2UgPSB7XG4gICAgICAgICAgICAnc3RhdGUnOiAxLFxuICAgICAgICAgICAgJ3NhbXBsZVJhdGUnOiBvdXRwdXQuY29udGV4dC5zYW1wbGVSYXRlLFxuICAgICAgICAgICAgJ2ZlYXR1cmVMaXN0JzogZmVhdHVyZUxpc3QsXG4gICAgICAgICAgICAnbnVtQ2hhbm5lbHMnOiBvdXRwdXQubnVtYmVyT2ZPdXRwdXRzLFxuICAgICAgICAgICAgJ2ZyYW1lU2l6ZSc6IHRoaXMuZnJhbWVTaXplXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuZmVhdHVyZXMgPSBmZWF0dXJlTGlzdDtcbiAgICAgICAgaWYgKGZlYXR1cmVMaXN0ICYmIGZlYXR1cmVMaXN0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHdvcmtlci5vbm1lc3NhZ2UgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIGlmIChlLmRhdGEuc3RhdGUgPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgd29ya2VyLm9ubWVzc2FnZSA9IHJlc3BvbnNlLmJpbmQoc2VsZik7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuZXh0cmFjdG9yLm9uYXVkaW9wcm9jZXNzID0gb25hdWRpb2NhbGxiYWNrLmJpbmQoc2VsZik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgd29ya2VyLnBvc3RNZXNzYWdlKGNvbmZpZ01lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB3b3JrZXIucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgICAgICdzdGF0ZSc6IDBcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5leHRyYWN0b3Iub25hdWRpb3Byb2Nlc3MgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICB0aGlzLnJlam9pbkV4dHJhY3RvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgb3V0cHV0LmNvbm5lY3QodGhpcy5leHRyYWN0b3IpO1xuICAgIH07XG5cbiAgICB0aGlzLmV4dHJhY3RvciA9IG91dHB1dC5jb250ZXh0LmNyZWF0ZVNjcmlwdFByb2Nlc3NvcihmcmFtZVNpemUsIG91dHB1dC5udW1iZXJPZk91dHB1dHMsIDEpO1xuICAgIG91dHB1dC5jb25uZWN0KHRoaXMuZXh0cmFjdG9yKTtcbiAgICB0aGlzLmV4dHJhY3Rvci5jb25uZWN0KG91dHB1dC5jb250ZXh0LmRlc3RpbmF0aW9uKTtcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImZyYW1lU2l6ZVwiLCB7XG4gICAgICAgICd2YWx1ZSc6IGZyYW1lU2l6ZVxuICAgIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBXb3JrZXJFeHRyYWN0b3I7XG4iLCIvKiBqc2hpbnQgZXN2ZXJzaW9uOiA2ICovXG5cbmltcG9ydCBPdXRwdXROb2RlIGZyb20gXCIuL091dHB1dE5vZGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3ViRmFjdG9yeUZlYXR1cmVTZW5kZXIob3duZXIsIEZhY3RvcnlGZWF0dXJlTWFwKSB7XG4gICAgdmFyIG91dHB1dE5vZGVzO1xuICAgIHRoaXMudXBkYXRlRmVhdHVyZXMgPSBmdW5jdGlvbiAoZmVhdHVyZU9iamVjdCkge1xuICAgICAgICB2YXIgbztcbiAgICAgICAgZm9yIChvID0gMDsgbyA8IGZlYXR1cmVPYmplY3QubGVuZ3RoOyBvKyspIHtcbiAgICAgICAgICAgIGlmIChvdXRwdXROb2RlcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgaWYgKG8gPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IChcIlJlcXVlc3RlZCBhbiBvdXRwdXQgdGhhdCBkb2VzIG5vdCBleGlzdFwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgb3V0cHV0Tm9kZXMgPSBuZXcgT3V0cHV0Tm9kZShvd25lciwgb3duZXIuY2hhaW5TdGFydCk7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG91dHB1dE5vZGVzLCBcInBvc3RGZWF0dXJlc1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICd2YWx1ZSc6IGZ1bmN0aW9uIChyZXN1bHRPYmplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucG9zdEZlYXR1cmVzKHJlc3VsdE9iamVjdCk7XG4gICAgICAgICAgICAgICAgICAgIH0uYmluZCh0aGlzKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHNpO1xuICAgICAgICAgICAgZm9yIChzaSA9IDA7IHNpIDwgZmVhdHVyZU9iamVjdFtvXS5sZW5ndGg7IHNpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgZXh0cmFjdG9yID0gb3V0cHV0Tm9kZXMuZmluZEV4dHJhY3RvcihmZWF0dXJlT2JqZWN0W29dW3NpXS5mcmFtZVNpemUpO1xuICAgICAgICAgICAgICAgIGlmICghZXh0cmFjdG9yKSB7XG4gICAgICAgICAgICAgICAgICAgIGV4dHJhY3RvciA9IG91dHB1dE5vZGVzLmFkZEV4dHJhY3RvcihmZWF0dXJlT2JqZWN0W29dW3NpXS5mcmFtZVNpemUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBleHRyYWN0b3Iuc2V0RmVhdHVyZXMoZmVhdHVyZU9iamVjdFtvXVtzaV0uZmVhdHVyZUxpc3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIHRoaXMucmVqb2luRXh0cmFjdG9ycyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKG91dHB1dE5vZGVzKSB7XG4gICAgICAgICAgICBvdXRwdXROb2Rlcy5yZWpvaW5FeHRyYWN0b3JzKCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgdGhpcy5wb3N0RmVhdHVyZXMgPSBmdW5jdGlvbiAoZmVhdHVyZU9iamVjdCkge1xuICAgICAgICAvKlxuICAgICAgICAgICAgQ2FsbGVkIGJ5IHRoZSBpbmRpdmlkdWFsIGV4dHJhY3RvciBpbnN0YW5jZXM6XG4gICAgICAgICAgICBmZWF0dXJlT2JqZWN0ID0geydmcmFtZVNpemUnOiBmcmFtZVNpemUsXG4gICAgICAgICAgICAnb3V0cHV0SW5kZXgnOiBvdXRwdXRJbmRleCxcbiAgICAgICAgICAgICdyZXN1bHRzJzpbXX1cbiAgICAgICAgKi9cbiAgICAgICAgRmFjdG9yeUZlYXR1cmVNYXAucG9zdEZlYXR1cmVzKHtcbiAgICAgICAgICAgICdwbHVnaW4nOiB0aGlzLFxuICAgICAgICAgICAgJ291dHB1dEluZGV4JzogZmVhdHVyZU9iamVjdC5vdXRwdXRJbmRleCxcbiAgICAgICAgICAgICdmcmFtZVNpemUnOiBmZWF0dXJlT2JqZWN0LmZyYW1lU2l6ZSxcbiAgICAgICAgICAgICdyZXN1bHRzJzogZmVhdHVyZU9iamVjdC5yZXN1bHRzXG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvLyBTZW5kIHRvIEZhY3RvcnlcbiAgICBGYWN0b3J5RmVhdHVyZU1hcC5jcmVhdGVTb3VyY2VNYXAodGhpcywgdW5kZWZpbmVkKTtcbn1cbiIsIi8qIGpzaGludCBlc3ZlcnNpb246IDYgKi9cblxuaW1wb3J0IFN1YkZhY3RvcnlGZWF0dXJlU2VuZGVyIGZyb20gXCIuL1N1YkZhY3RvcnlGZWF0dXJlU2VuZGVyL2luZGV4XCI7XG5pbXBvcnQgTGlua2VkU3RvcmUgZnJvbSAnLi4vLi4vTGlua2VkU3RvcmUnO1xuXG5mdW5jdGlvbiBBdWRpb1BsdWdpbkNoYWluTWFuYWdlcihQbHVnaW5GYWN0b3J5LCBjaGFpblN0YXJ0LCBjaGFpblN0b3ApIHtcblxuICAgIHZhciBwbHVnaW5fbGlzdCA9IFtdLFxuICAgICAgICBwbHVnaW5DaGFpblN0YXJ0ID0gY2hhaW5TdGFydCxcbiAgICAgICAgcGx1Z2luQ2hhaW5TdG9wID0gY2hhaW5TdG9wLFxuICAgICAgICBmYWN0b3J5TmFtZSA9IFwiXCIsXG4gICAgICAgIHN0YXRlID0gMSxcbiAgICAgICAgZGVsYXlTYW1wbGVzID0gMCxcbiAgICAgICAgY2hhaW5TdGFydEZlYXR1cmUgPSBuZXcgU3ViRmFjdG9yeUZlYXR1cmVTZW5kZXIodGhpcywgUGx1Z2luRmFjdG9yeS5GZWF0dXJlTWFwKSxcbiAgICAgICAgc2VtYW50aWNTdG9yZXMgPSBbXSxcbiAgICAgICAgZXZlbnRUYXJnZXQgPSBuZXcgRXZlbnRUYXJnZXQoKSxcbiAgICAgICAgc2VsZiA9IHRoaXM7XG4gICAgdGhpcy5wYXJlbnQgPSBQbHVnaW5GYWN0b3J5O1xuICAgIHBsdWdpbkNoYWluU3RhcnQuZGlzY29ubmVjdCgpO1xuICAgIHBsdWdpbkNoYWluU3RhcnQuY29ubmVjdChjaGFpblN0b3ApO1xuXG4gICAgdGhpcy5UcmFja0RhdGEgPSBuZXcgTGlua2VkU3RvcmUoXCJUcmFja1wiKTtcblxuICAgIHRoaXMuZmVhdHVyZVNlbmRlciA9IGNoYWluU3RhcnRGZWF0dXJlO1xuXG4gICAgdGhpcy5nZXRGZWF0dXJlQ2hhaW4gPSBmdW5jdGlvbiAoKSB7XG5cbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gcmVidWlsZCgpIHtcbiAgICAgICAgdmFyIGkgPSAwLFxuICAgICAgICAgICAgbCA9IHBsdWdpbl9saXN0Lmxlbmd0aCAtIDE7XG4gICAgICAgIHdoaWxlIChpIDwgbCkge1xuICAgICAgICAgICAgdmFyIGN1cnJlbnROb2RlID0gcGx1Z2luX2xpc3RbaSsrXTtcbiAgICAgICAgICAgIHZhciBuZXh0Tm9kZSA9IHBsdWdpbl9saXN0W2ldO1xuICAgICAgICAgICAgY3VycmVudE5vZGUucmVjb25uZWN0KG5leHROb2RlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGlzb2xhdGUoKSB7XG4gICAgICAgIHBsdWdpbl9saXN0LmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGUuZGlzY29ubmVjdCgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjdXRDaGFpbigpIHtcbiAgICAgICAgaWYgKHBsdWdpbl9saXN0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHBsdWdpbkNoYWluU3RhcnQuZGlzY29ubmVjdChwbHVnaW5fbGlzdFswXS5pbnB1dCk7XG4gICAgICAgICAgICBwbHVnaW5fbGlzdFtwbHVnaW5fbGlzdC5sZW5ndGggLSAxXS5vdXRwdXQuZGlzY29ubmVjdChwbHVnaW5DaGFpblN0b3ApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGx1Z2luQ2hhaW5TdGFydC5kaXNjb25uZWN0KHBsdWdpbkNoYWluU3RvcCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gam9pbkNoYWluKCkge1xuICAgICAgICBpZiAocGx1Z2luX2xpc3QubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcGx1Z2luQ2hhaW5TdGFydC5jb25uZWN0KHBsdWdpbl9saXN0WzBdLmlucHV0KTtcbiAgICAgICAgICAgIHBsdWdpbl9saXN0W3BsdWdpbl9saXN0Lmxlbmd0aCAtIDFdLm91dHB1dC5jb25uZWN0KHBsdWdpbkNoYWluU3RvcCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwbHVnaW5DaGFpblN0YXJ0LmNvbm5lY3QocGx1Z2luQ2hhaW5TdG9wKTtcbiAgICAgICAgfVxuICAgICAgICBjaGFpblN0YXJ0RmVhdHVyZS5yZWpvaW5FeHRyYWN0b3JzKCk7XG4gICAgfVxuXG4gICAgdGhpcy5ieXBhc3NQbHVnaW4gPSBmdW5jdGlvbiAocGx1Z2luX2luc3RhbmNlLCBzdGF0ZSkge1xuICAgICAgICAvLyBDaGVjayBpcyBhIG1lbWJlciBvZiB0aGlzIGNoYWluXG4gICAgICAgIGlmIChwbHVnaW5fbGlzdC5pbmNsdWRlcyhwbHVnaW5faW5zdGFuY2UpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHBsdWdpbl9pbnN0YW5jZS5ieXBhc3Moc3RhdGUpO1xuICAgIH07XG5cbiAgICB0aGlzLmdldFByb3RvdHlwZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBhcmVudC5nZXRQcm90b3R5cGVzKCk7XG4gICAgfTtcblxuICAgIHRoaXMuZ2V0RmFjdG9yeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGFyZW50O1xuICAgIH07XG5cbiAgICB0aGlzLmRlc3Ryb3kgPSBmdW5jdGlvbiAocmVjb25uZWN0KSB7XG4gICAgICAgIHZhciBpO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcGx1Z2luX2xpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuZGVzdHJveVBsdWdpbihwbHVnaW5fbGlzdFtpXSk7XG4gICAgICAgIH1cbiAgICAgICAgcGx1Z2luQ2hhaW5TdGFydC5kaXNjb25uZWN0KCk7XG4gICAgICAgIGlmIChyZWNvbm5lY3QgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHBsdWdpbkNoYWluU3RhcnQuY29ubmVjdChwbHVnaW5DaGFpblN0b3ApO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8vIFBsdWdpbiBjcmVhdGlvbiAvIGRlc3RydWN0aW9uXG5cbiAgICBmdW5jdGlvbiBidWlsZE5ld1BsdWdpbihwcm90b3R5cGVPYmplY3QpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgaWYgKHN0YXRlID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0IChcIlN1YkZhY3RvcnkgaGFzIGJlZW4gZGVzdHJveWVkISBDYW5ub3QgYWRkIG5ldyBwbHVnaW5zXCIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHByb3RvdHlwZU9iamVjdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvdG90eXBlT2JqZWN0LmNyZWF0ZVBsdWdpbkluc3RhbmNlKHNlbGYsIGZhbHNlKVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24obm9kZSkge1xuICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKG5vZGUsIHtcbiAgICAgICAgICAgICAgICAgICAgJ1RyYWNrRGF0YSc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBzZWxmLlRyYWNrRGF0YVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5jcmVhdGVQbHVnaW4gPSBmdW5jdGlvbiAocHJvdG90eXBlT2JqZWN0KSB7XG4gICAgICAgIHJldHVybiBidWlsZE5ld1BsdWdpbihwcm90b3R5cGVPYmplY3QpLmNhdGNoKGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgICAgICB0aHJvdyhcIlBsdWdpbiBkaWQgbm90IGdldCBjcmVhdGVkISBBYm9ydGluZ1wiKTtcbiAgICAgICAgfSkudGhlbihmdW5jdGlvbihub2RlKSB7XG4gICAgICAgICAgICBjdXRDaGFpbigpO1xuICAgICAgICAgICAgcGx1Z2luX2xpc3QucHVzaChub2RlKTtcbiAgICAgICAgICAgIGlzb2xhdGUoKTtcbiAgICAgICAgICAgIHJlYnVpbGQoKTtcbiAgICAgICAgICAgIGpvaW5DaGFpbigpO1xuICAgICAgICAgICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKFwiYWx0ZXJkZWxheVwiLCBzZWxmKTtcbiAgICAgICAgICAgIG5vZGUubm9kZS5vbmxvYWRlZC5jYWxsKG5vZGUubm9kZSk7XG4gICAgICAgICAgICB1cGRhdGVEZWxheUNvbXBlbnNhdGlvbigpO1xuICAgICAgICAgICAgZXZlbnRUYXJnZXQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJjaGFuZ2VcIikpO1xuICAgICAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICB0aGlzLnJlbW92ZVBsdWdpbiA9IGZ1bmN0aW9uKHBsdWdpbl9vYmplY3QpIHtcbiAgICAgICAgaWYgKHN0YXRlID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5nZXRQbHVnaW5JbmRleChwbHVnaW5fb2JqZWN0KTtcbiAgICAgICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgICAgICAgIGN1dENoYWluKCk7XG4gICAgICAgICAgICBwbHVnaW5fb2JqZWN0LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJhbHRlcmRlbGF5XCIsIHNlbGYpO1xuICAgICAgICAgICAgcGx1Z2luX29iamVjdC5ub2RlLnN0b3AuY2FsbChwbHVnaW5fb2JqZWN0Lm5vZGUpO1xuICAgICAgICAgICAgcGx1Z2luX29iamVjdC5ub2RlLm9udW5sb2FkZWQuY2FsbChwbHVnaW5fb2JqZWN0Lm5vZGUpO1xuICAgICAgICAgICAgcGx1Z2luX2xpc3Quc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIGlzb2xhdGUoKTtcbiAgICAgICAgICAgIHJlYnVpbGQoKTtcbiAgICAgICAgICAgIGpvaW5DaGFpbigpO1xuICAgICAgICAgICAgdXBkYXRlRGVsYXlDb21wZW5zYXRpb24oKTtcbiAgICAgICAgICAgIGV2ZW50VGFyZ2V0LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiY2hhbmdlXCIpKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB0aGlzLmRlc3Ryb3lQbHVnaW4gPSBmdW5jdGlvbiAocGx1Z2luX29iamVjdCkge1xuICAgICAgICBpZiAoc3RhdGUgPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlbW92ZVBsdWdpbihwbHVnaW5fb2JqZWN0KTtcbiAgICAgICAgdGhpcy5wYXJlbnQuZGVsZXRlUGx1Z2luKHBsdWdpbl9vYmplY3QuaWQpO1xuICAgICAgICB1cGRhdGVEZWxheUNvbXBlbnNhdGlvbigpO1xuICAgIH07XG5cbiAgICB0aGlzLmdldFBsdWdpbnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBwbHVnaW5fbGlzdDtcbiAgICB9O1xuXG4gICAgdGhpcy5nZXRBbGxQbHVnaW5zID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wYXJlbnQuZ2V0QWxsUGx1Z2luc09iamVjdCgpO1xuICAgIH07XG5cbiAgICB0aGlzLmdldFBsdWdpbkluZGV4ID0gZnVuY3Rpb24gKHBsdWdpbl9vYmplY3QpIHtcbiAgICAgICAgaWYgKHN0YXRlID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGluZGV4ID0gcGx1Z2luX2xpc3QuZmluZEluZGV4KGZ1bmN0aW9uIChlbGVtZW50LCBpbmRleCwgYXJyYXkpIHtcbiAgICAgICAgICAgIGlmIChlbGVtZW50ID09PSB0aGlzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0sIHBsdWdpbl9vYmplY3QpO1xuICAgICAgICByZXR1cm4gaW5kZXg7XG4gICAgfTtcblxuICAgIHRoaXMubW92ZVBsdWdpbiA9IGZ1bmN0aW9uIChwbHVnaW5fb2JqZWN0LCBuZXdfaW5kZXgpIHtcbiAgICAgICAgaWYgKHN0YXRlID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5nZXRQbHVnaW5JbmRleChwbHVnaW5fb2JqZWN0KSxcbiAgICAgICAgICAgIG9iaiwgaG9sZExvdywgaG9sZEhpZ2gsIGk7XG4gICAgICAgIGlmIChQbHVnaW5GYWN0b3J5LmdldEFsbFBsdWdpbnMoKS5pbmNsdWRlcyhwbHVnaW5fb2JqZWN0KSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRocm93KFwiUGx1Z2luIGRvZXMgbm90IGV4aXN0XCIpO1xuICAgICAgICB9XG4gICAgICAgIGN1dENoYWluKCk7XG4gICAgICAgIGlzb2xhdGUoKTtcbiAgICAgICAgaWYgKHBsdWdpbl9vYmplY3Qubm9kZS5vd25lciAhPT0gdGhpcykge1xuICAgICAgICAgICAgLy8gRGlmZmVyZW50IHN1Yi1mYWN0b3J5XG4gICAgICAgICAgICBwbHVnaW5fb2JqZWN0Lm5vZGUub3duZXIucmVtb3ZlUGx1Z2luKHBsdWdpbl9vYmplY3QpO1xuICAgICAgICAgICAgcGx1Z2luX29iamVjdC5ub2RlLm93bmVyID0gdGhpcztcbiAgICAgICAgICAgIG9iaiA9IFtwbHVnaW5fb2JqZWN0XTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG9iaiA9IHBsdWdpbl9saXN0LnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICBwbHVnaW5fb2JqZWN0Lm5vZGUub251bmxvYWRlZC5jYWxsKHBsdWdpbl9vYmplY3Qubm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5ld19pbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgcGx1Z2luX2xpc3QgPSBvYmouY29uY2F0KHBsdWdpbl9saXN0KTtcbiAgICAgICAgfSBlbHNlIGlmIChuZXdfaW5kZXggPj0gcGx1Z2luX2xpc3QubGVuZ3RoKSB7XG4gICAgICAgICAgICBwbHVnaW5fbGlzdCA9IHBsdWdpbl9saXN0LmNvbmNhdChvYmopO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaG9sZExvdyA9IHBsdWdpbl9saXN0LnNsaWNlKDAsIG5ld19pbmRleCk7XG4gICAgICAgICAgICBob2xkSGlnaCA9IHBsdWdpbl9saXN0LnNsaWNlKG5ld19pbmRleCk7XG4gICAgICAgICAgICBwbHVnaW5fbGlzdCA9IGhvbGRMb3cuY29uY2F0KG9iai5jb25jYXQoaG9sZEhpZ2gpKTtcbiAgICAgICAgfVxuICAgICAgICByZWJ1aWxkKCk7XG4gICAgICAgIGpvaW5DaGFpbigpO1xuICAgICAgICBwbHVnaW5fb2JqZWN0Lm5vZGUub25sb2FkZWQuY2FsbChwbHVnaW5fb2JqZWN0Lm5vZGUpO1xuICAgICAgICB1cGRhdGVEZWxheUNvbXBlbnNhdGlvbigpO1xuICAgICAgICBldmVudFRhcmdldC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImNoYW5nZVwiKSk7XG4gICAgfTtcblxuICAgIHRoaXMuY29weVBsdWdpbiA9IGZ1bmN0aW9uKHBsdWdpbl9vYmplY3QsIGNvcHlfaW5kZXgpIHtcbiAgICAgICAgaWYgKGNvcHlfaW5kZXggPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY29weV9pbmRleCA9IHBsdWdpbl9saXN0Lmxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIGNvcHlfaW5kZXggIT0gXCJudW1iZXJcIiB8fCBjb3B5X2luZGV4IDwgMCB8fCBjb3B5X2luZGV4ID4gcGx1Z2luX2xpc3QubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aHJvdyhcIlBsdWdpbiBjb3B5IGluZGV4IG91dHNpZGUgb2YgdGhlIGNoYWluIHNjb3BlLlwiKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYnVpbGROZXdQbHVnaW4ocGx1Z2luX29iamVjdC5wcm90b3R5cGVPYmplY3QpXG4gICAgICAgIC5jYXRjaChmdW5jdGlvbihlKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICAgICAgdGhyb3coXCJQbHVnaW4gZGlkIG5vdCBnZXQgY3JlYXRlZCEgQWJvcnRpbmdcIik7XG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24obm9kZSkge1xuICAgICAgICAgICAgbm9kZS5ub2RlLnBhcmFtZXRlcnMuc2V0UGFyYW1ldGVyc0J5T2JqZWN0KHBsdWdpbl9vYmplY3Qubm9kZS5wYXJhbWV0ZXJzLmdldFBhcmFtZXRlck9iamVjdCgpKTtcbiAgICAgICAgICAgIGN1dENoYWluKCk7XG4gICAgICAgICAgICBpc29sYXRlKCk7XG4gICAgICAgICAgICBwbHVnaW5fbGlzdC5zcGxpY2UoY29weV9pbmRleCwgMCwgbm9kZSk7XG4gICAgICAgICAgICByZWJ1aWxkKCk7XG4gICAgICAgICAgICBqb2luQ2hhaW4oKTtcbiAgICAgICAgICAgIHVwZGF0ZURlbGF5Q29tcGVuc2F0aW9uKCk7XG4gICAgICAgICAgICBub2RlLm5vZGUub25sb2FkZWQuY2FsbChub2RlLm5vZGUpO1xuICAgICAgICAgICAgZXZlbnRUYXJnZXQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJjaGFuZ2VcIikpO1xuICAgICAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgICAgIH0pO1xuXG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHJlY3Vyc2l2ZVByb2Nlc3NpbmcoYmFzZSwgbGlzdCkge1xuICAgICAgICB2YXIgbCA9IGxpc3QubGVuZ3RoLFxuICAgICAgICAgICAgaSwgZW50cnk7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIGVudHJ5ID0gbGlzdFtpXTtcbiAgICAgICAgICAgIGJhc2VbZW50cnkubmFtZV0uYXBwbHkoYmFzZSwgZW50cnkucGFyYW1ldGVycyk7XG4gICAgICAgICAgICBpZiAoZW50cnkuZmVhdHVyZXMgJiYgZW50cnkuZmVhdHVyZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHJlY3Vyc2l2ZVByb2Nlc3NpbmcoYmFzZS5yZXN1bHRbZW50cnkubmFtZV0sIGVudHJ5LmZlYXR1cmVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldERlbGF5Q29tcGVuc2F0aW9uKCkge1xuICAgICAgICB2YXIgc3VtID0gMDtcbiAgICAgICAgcGx1Z2luX2xpc3QuZmlsdGVyKGZ1bmN0aW9uKHBsdWdpbikge1xuICAgICAgICAgICAgcmV0dXJuICFwbHVnaW4uaXNCeXBhc3NlZCgpO1xuICAgICAgICB9KS5mb3JFYWNoKGZ1bmN0aW9uKHBsdWdpbikge1xuICAgICAgICAgICAgc3VtICs9IHBsdWdpbi5ub2RlLnByb2Nlc3NpbmdEZWxheUFzU2FtcGxlcztcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBzdW07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlRGVsYXlDb21wZW5zYXRpb24oKSB7XG4gICAgICAgIHZhciBzdW0gPSBnZXREZWxheUNvbXBlbnNhdGlvbigpO1xuICAgICAgICBpZiAoZGVsYXlTYW1wbGVzICE9IHN1bSkge1xuICAgICAgICAgICAgZGVsYXlTYW1wbGVzID0gc3VtO1xuICAgICAgICAgICAgZXZlbnRUYXJnZXQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJhbHRlcmRlbGF5XCIpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGVsYXlTYW1wbGVzO1xuICAgIH1cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgICAgJ2NoYWluU3RhcnQnOiB7XG4gICAgICAgICAgICAndmFsdWUnOiBjaGFpblN0YXJ0XG4gICAgICAgIH0sXG4gICAgICAgICdjaGFpblN0b3AnOiB7XG4gICAgICAgICAgICAndmFsdWUnOiBjaGFpblN0b3BcbiAgICAgICAgfSxcbiAgICAgICAgXCJ1cGRhdGVEZWxheUNvbXBlbnNhdGlvblwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdXBkYXRlRGVsYXlDb21wZW5zYXRpb24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJwcm9jZXNzaW5nRGVsYXlBc1NhbXBsZXNcIjoge1xuICAgICAgICAgICAgXCJnZXRcIjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHVwZGF0ZURlbGF5Q29tcGVuc2F0aW9uKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJzZXRcIjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdGhyb3coXCJwcm9jZXNzaW5nRGVsYXlBc1NhbXBsZXMgaXMgcmVhZC1vbmx5XCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInByb2Nlc3NpbmdEZWxheUFzU2Vjb25kc1wiOiB7XG4gICAgICAgICAgICBcImdldFwiOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9jZXNzaW5nRGVsYXlBc1NhbXBsZXMvUGx1Z2luRmFjdG9yeS5jb250ZXh0LnNhbXBsZVJhdGU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJzZXRcIjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdGhyb3coXCJwcm9jZXNzaW5nRGVsYXlBc1NlY29uZHMgaXMgcmVhZC1vbmx5XCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAnbmFtZSc6IHtcbiAgICAgICAgICAgICdnZXQnOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhY3RvcnlOYW1lO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICdzZXQnOiBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbmFtZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgICAgICBmYWN0b3J5TmFtZSA9IG5hbWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWN0b3J5TmFtZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgJ3JlY3Vyc2l2ZVByb2Nlc3NpbmcnOiB7XG4gICAgICAgICAgICAnZ2V0JzogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZWN1cnNpdmVQcm9jZXNzaW5nO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAnaGFuZGxlRXZlbnQnOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoZS50eXBlID09IFwiYWx0ZXJkZWxheVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZURlbGF5Q29tcGVuc2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImFkZEV2ZW50TGlzdGVuZXJcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbihrZXksIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGV2ZW50VGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoa2V5LCB2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwicmVtb3ZlRXZlbnRMaXN0ZW5lclwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZXZlbnRUYXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihrZXksIHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBBdWRpb1BsdWdpbkNoYWluTWFuYWdlcjtcbiIsIi8qIGpzaGludCBlc3ZlcnNpb246IDYgKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZlYXR1cmVOb2RlKG5vZGUpIHtcbiAgICB0aGlzLm5hbWUgPSBub2RlLm5hbWU7XG4gICAgdGhpcy5wYXJhbWV0ZXJzID0gdGhpcy5wYXJhbWV0ZXJzO1xuICAgIHRoaXMuZmVhdHVyZXMgPSBbXTtcbn1cbiIsIi8qIGpzaGludCBlc3ZlcnNpb246IDYgKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVxdWVzdG9yTWFwKHBsdWdpbkluc3RhbmNlKSB7XG4gICAgdmFyIEZlYXR1cmVzID0gW107XG4gICAgdmFyIFJlY2VpdmVyID0gcGx1Z2luSW5zdGFuY2Uubm9kZS5mZWF0dXJlTWFwLlJlY2VpdmVyO1xuICAgIHRoaXMuZ2V0UmVxdWVzdG9ySW5zdGFuY2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBwbHVnaW5JbnN0YW5jZTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gcmVjdXJzaXZlbHlBZGRGZWF0dXJlcyhyb290QXJyYXksIGZlYXR1cmVPYmplY3QpIHtcbiAgICAgICAgdmFyIGk7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBmZWF0dXJlT2JqZWN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAvLyBDaGVjayB3ZSBoYXZlIG5vdCBhbHJlYWR5IGxpc3RlZCB0aGUgZmVhdHVyZVxuICAgICAgICAgICAgdmFyIGZlYXR1cmVOb2RlID0gZ2V0RmVhdHVyZU5vZGUocm9vdEFycmF5LCBmZWF0dXJlT2JqZWN0W2ldKTtcbiAgICAgICAgICAgIGlmICghZmVhdHVyZU5vZGUgfHwgKGZlYXR1cmVPYmplY3RbaV0ucGFyYW1ldGVycyAmJiBmZWF0dXJlT2JqZWN0W2ldLnBhcmFtZXRlcnMubGVuZ3RoICE9PSAwKSkge1xuICAgICAgICAgICAgICAgIGZlYXR1cmVOb2RlID0gYWRkRmVhdHVyZU5vZGUoZmVhdHVyZU9iamVjdFtpXSwgcm9vdEFycmF5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChmZWF0dXJlT2JqZWN0W2ldLmZlYXR1cmVzICE9PSB1bmRlZmluZWQgJiYgZmVhdHVyZU9iamVjdFtpXS5mZWF0dXJlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgcmVjdXJzaXZlbHlBZGRGZWF0dXJlcyhmZWF0dXJlTm9kZS5mZWF0dXJlcywgZmVhdHVyZU9iamVjdFtpXS5mZWF0dXJlcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZWN1cnNpdmVseURlbGV0ZUZlYXR1cmVzKHJvb3RBcnJheSwgZmVhdHVyZU9iamVjdCkge1xuICAgICAgICB2YXIgbCA9IGZlYXR1cmVPYmplY3QubGVuZ3RoLFxuICAgICAgICAgICAgaTtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgLy8gRmluZCB0aGUgZmVhdHVyZVxuICAgICAgICAgICAgdmFyIGluZGV4ID0gZ2V0RmVhdHVyZU5vZGUocm9vdEFycmF5LCBmZWF0dXJlT2JqZWN0W2ldKTtcbiAgICAgICAgICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKGZlYXR1cmVPYmplY3RbaW5kZXhdLmZlYXR1cmVzICYmIGZlYXR1cmVPYmplY3RbaW5kZXhdLmZlYXR1cmVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmVjdXJzaXZlbHlEZWxldGVGZWF0dXJlcyhyb290QXJyYXlbaW5kZXhdLmZlYXR1cmVzLCBmZWF0dXJlT2JqZWN0W2luZGV4XS5mZWF0dXJlcyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgRmVhdHVyZXMuc3BsaWNlKGluZGV4LCAwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuYWRkRmVhdHVyZXMgPSBmdW5jdGlvbiAoZmVhdHVyZU9iamVjdCkge1xuICAgICAgICByZWN1cnNpdmVseUFkZEZlYXR1cmVzKEZlYXR1cmVzLCBmZWF0dXJlT2JqZWN0LmZlYXR1cmVzKTtcbiAgICB9O1xuXG4gICAgdGhpcy5kZWxldGVGZWF0dXJlcyA9IGZ1bmN0aW9uIChmZWF0dXJlT2JqZWN0KSB7XG4gICAgICAgIHJlY3Vyc2l2ZWx5RGVsZXRlRmVhdHVyZXMoRmVhdHVyZXMsIGZlYXR1cmVPYmplY3QuZmVhdHVyZXMpO1xuICAgIH07XG5cbiAgICB0aGlzLmdldEZlYXR1cmVMaXN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gRmVhdHVyZXM7XG4gICAgfTtcblxuICAgIHRoaXMucG9zdEZlYXR1cmVzID0gZnVuY3Rpb24gKGZlYXR1cmVPYmplY3QpIHtcbiAgICAgICAgdmFyIG1lc3NhZ2UgPSB7XG4gICAgICAgICAgICAgICAgJ3BsdWdpbic6IGZlYXR1cmVPYmplY3QucGx1Z2luLFxuICAgICAgICAgICAgICAgICdvdXRwdXRJbmRleCc6IGZlYXR1cmVPYmplY3Qub3V0cHV0SW5kZXgsXG4gICAgICAgICAgICAgICAgJ2ZyYW1lU2l6ZSc6IGZlYXR1cmVPYmplY3QuZnJhbWVTaXplLFxuICAgICAgICAgICAgICAgICdmZWF0dXJlcyc6IHtcbiAgICAgICAgICAgICAgICAgICAgJ251bWJlck9mQ2hhbm5lbHMnOiBmZWF0dXJlT2JqZWN0LnJlc3VsdHMubnVtYmVyT2ZDaGFubmVscyxcbiAgICAgICAgICAgICAgICAgICAgJ3Jlc3VsdHMnOiBbXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpO1xuXG4gICAgICAgIGZ1bmN0aW9uIHJlY3Vyc2l2ZVBvc3RGZWF0dXJlcyhyb290Tm9kZSwgcmVzdWx0c0xpc3QsIEZlYXR1cmVMaXN0KSB7XG4gICAgICAgICAgICAvLyBBZGQgdGhlIHJlc3VsdHMgdHJlZSB3aGVyZSBuZWNlc3NhcnlcbiAgICAgICAgICAgIHZhciBpLCBwYXJhbTtcblxuICAgICAgICAgICAgZnVuY3Rpb24gYW8oZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBlLm5hbWUgPT09IHBhcmFtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChwYXJhbSBpbiByZXN1bHRzTGlzdCkge1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHRzTGlzdC5oYXNPd25Qcm9wZXJ0eShwYXJhbSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5vZGUgPSBGZWF0dXJlTGlzdC5maW5kKGFvKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHRzTGlzdFtwYXJhbV0uY29uc3RydWN0b3IgPT09IE9iamVjdCAmJiBub2RlLnJlc3VsdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb290Tm9kZVtwYXJhbV0gPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWN1cnNpdmVQb3N0RmVhdHVyZXMocm9vdE5vZGVbcGFyYW1dLCByZXN1bHRzTGlzdFtwYXJhbV0sIG5vZGUucmVzdWx0cyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvb3ROb2RlW3BhcmFtXSA9IHJlc3VsdHNMaXN0W3BhcmFtXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBQZXJmb3JtIHJlY3Vyc2l2ZSBtYXAgZm9yIGVhY2ggY2hhbm5lbFxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgZmVhdHVyZU9iamVjdC5yZXN1bHRzLm51bWJlck9mQ2hhbm5lbHM7IGkrKykge1xuICAgICAgICAgICAgbWVzc2FnZS5mZWF0dXJlcy5yZXN1bHRzW2ldID0ge307XG4gICAgICAgICAgICByZWN1cnNpdmVQb3N0RmVhdHVyZXMobWVzc2FnZS5mZWF0dXJlcy5yZXN1bHRzW2ldLCBmZWF0dXJlT2JqZWN0LnJlc3VsdHMucmVzdWx0c1tpXS5yZXN1bHRzLCBGZWF0dXJlcyk7XG4gICAgICAgIH1cbiAgICAgICAgcGx1Z2luSW5zdGFuY2Uubm9kZS5mZWF0dXJlTWFwLlJlY2VpdmVyLnBvc3RGZWF0dXJlcyhtZXNzYWdlKTtcbiAgICB9O1xufVxuIiwiLyoganNoaW50IGVzdmVyc2lvbjogNiAqL1xuXG5pbXBvcnQgUmVxdWVzdG9yTWFwIGZyb20gXCIuL1JlcXVlc3Rvck1hcFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTb3VyY2VNYXAoU2VuZGVyLCBwbHVnaW5JbnN0YWNlKSB7XG4gICAgdmFyIE1hcHBpbmdzID0gW107XG4gICAgdGhpcy5nZXRTb3VyY2VJbnN0YW5jZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHBsdWdpbkluc3RhY2U7XG4gICAgfTtcbiAgICB0aGlzLmdldFNlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIFNlbmRlcjtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gZmluZEZlYXR1cmVPYmplY3QoZmVhdHVyZU9iamVjdCkge1xuICAgICAgICByZXR1cm4gTWFwcGluZ3MuZmluZChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgcmV0dXJuIChlLm91dHB1dEluZGV4ID09PSB0aGlzLm91dHB1dEluZGV4ICYmIGUuZnJhbWVTaXplID09PSB0aGlzLmZyYW1lU2l6ZSk7XG4gICAgICAgIH0sIGZlYXR1cmVPYmplY3QpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZVNlbmRlcigpIHtcbiAgICAgICAgZnVuY3Rpb24gcmVjdXJzaXZlRmluZChmZWF0dXJlTGlzdCkge1xuICAgICAgICAgICAgdmFyIGYsIGxpc3QgPSBbXTtcbiAgICAgICAgICAgIGZvciAoZiA9IDA7IGYgPCBmZWF0dXJlTGlzdC5sZW5ndGg7IGYrKykge1xuICAgICAgICAgICAgICAgIHZhciBmZWF0dXJlTm9kZSA9IGdldEZlYXR1cmVOb2RlKGxpc3QsIGZlYXR1cmVMaXN0W2ZdKTtcbiAgICAgICAgICAgICAgICBpZiAoIWZlYXR1cmVOb2RlIHx8IChmZWF0dXJlTGlzdC5wYXJhbWV0ZXJzICYmIGZlYXR1cmVMaXN0W2ZdLnBhcmFtZXRlcnMubGVuZ3RoICE9PSAwKSkge1xuICAgICAgICAgICAgICAgICAgICBmZWF0dXJlTm9kZSA9IGFkZEZlYXR1cmVOb2RlKGZlYXR1cmVMaXN0W2ZdLCBsaXN0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGZlYXR1cmVMaXN0W2ZdLmZlYXR1cmVzICYmIGZlYXR1cmVMaXN0W2ZdLmZlYXR1cmVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZmVhdHVyZU5vZGUuZmVhdHVyZXMgPSByZWN1cnNpdmVGaW5kKGZlYXR1cmVMaXN0W2ZdLmZlYXR1cmVzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbGlzdDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaSwgb3V0cHV0TGlzdCA9IFtdO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgTWFwcGluZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChvdXRwdXRMaXN0W01hcHBpbmdzW2ldLm91dHB1dEluZGV4XSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgb3V0cHV0TGlzdFtNYXBwaW5nc1tpXS5vdXRwdXRJbmRleF0gPSBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBmcmFtZUxpc3QgPSBvdXRwdXRMaXN0W01hcHBpbmdzW2ldLm91dHB1dEluZGV4XS5maW5kKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGUuZnJhbWVTaXplID09PSB0aGlzLmZyYW1lU2l6ZTtcbiAgICAgICAgICAgIH0sIE1hcHBpbmdzW2ldKTtcbiAgICAgICAgICAgIGlmICghZnJhbWVMaXN0KSB7XG4gICAgICAgICAgICAgICAgZnJhbWVMaXN0ID0ge1xuICAgICAgICAgICAgICAgICAgICAnZnJhbWVTaXplJzogTWFwcGluZ3NbaV0uZnJhbWVTaXplLFxuICAgICAgICAgICAgICAgICAgICAnZmVhdHVyZUxpc3QnOiB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIG91dHB1dExpc3RbTWFwcGluZ3NbaV0ub3V0cHV0SW5kZXhdLnB1c2goZnJhbWVMaXN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZyYW1lTGlzdC5mZWF0dXJlTGlzdCA9IHJlY3Vyc2l2ZUZpbmQoTWFwcGluZ3NbaV0uZ2V0RmVhdHVyZUxpc3QoKSk7XG4gICAgICAgIH1cbiAgICAgICAgU2VuZGVyLnVwZGF0ZUZlYXR1cmVzKG91dHB1dExpc3QpO1xuICAgIH1cblxuICAgIHRoaXMucmVxdWVzdEZlYXR1cmVzID0gZnVuY3Rpb24gKHJlcXVlc3Rvckluc3RhbmNlLCBmZWF0dXJlT2JqZWN0KSB7XG4gICAgICAgIHZhciBtYXAgPSBmaW5kRmVhdHVyZU9iamVjdChmZWF0dXJlT2JqZWN0KTtcbiAgICAgICAgaWYgKCFtYXApIHtcbiAgICAgICAgICAgIG1hcCA9IHtcbiAgICAgICAgICAgICAgICAnb3V0cHV0SW5kZXgnOiBmZWF0dXJlT2JqZWN0Lm91dHB1dEluZGV4LFxuICAgICAgICAgICAgICAgICdmcmFtZVNpemUnOiBmZWF0dXJlT2JqZWN0LmZyYW1lU2l6ZSxcbiAgICAgICAgICAgICAgICAncmVxdWVzdG9ycyc6IFtdLFxuICAgICAgICAgICAgICAgICdnZXRGZWF0dXJlTGlzdCc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIEYgPSBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGk7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLnJlcXVlc3RvcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEYgPSBGLmNvbmNhdCh0aGlzLnJlcXVlc3RvcnNbaV0uZ2V0RmVhdHVyZUxpc3QoKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIEY7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIE1hcHBpbmdzLnB1c2gobWFwKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcmVxdWVzdG9yID0gbWFwLnJlcXVlc3RvcnMuZmluZChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgcmV0dXJuIGUuZ2V0UmVxdWVzdG9ySW5zdGFuY2UoKSA9PT0gdGhpcztcbiAgICAgICAgfSwgcmVxdWVzdG9ySW5zdGFuY2UpO1xuICAgICAgICBpZiAoIXJlcXVlc3Rvcikge1xuICAgICAgICAgICAgcmVxdWVzdG9yID0gbmV3IFJlcXVlc3Rvck1hcChyZXF1ZXN0b3JJbnN0YW5jZSk7XG4gICAgICAgICAgICBtYXAucmVxdWVzdG9ycy5wdXNoKHJlcXVlc3Rvcik7XG4gICAgICAgIH1cbiAgICAgICAgcmVxdWVzdG9yLmFkZEZlYXR1cmVzKGZlYXR1cmVPYmplY3QpO1xuICAgICAgICB1cGRhdGVTZW5kZXIoKTtcbiAgICB9O1xuXG4gICAgdGhpcy5maW5kRnJhbWVNYXAgPSBmdW5jdGlvbiAob3V0cHV0SW5kZXgsIGZyYW1lU2l6ZSkge1xuICAgICAgICByZXR1cm4gTWFwcGluZ3MuZmluZChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgcmV0dXJuIChlLm91dHB1dEluZGV4ID09PSBvdXRwdXRJbmRleCAmJiBlLmZyYW1lU2l6ZSA9PT0gZnJhbWVTaXplKTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIHRoaXMuY2FuY2VsRmVhdHVyZXMgPSBmdW5jdGlvbiAocmVxdWVzdG9ySW5zdGFuY2UsIGZlYXR1cmVPYmplY3QpIHtcbiAgICAgICAgaWYgKGZlYXR1cmVPYmplY3QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgTWFwcGluZ3MuZm9yRWFjaChmdW5jdGlvbiAobWFwKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJlcXVlc3RvckluZGV4ID0gbWFwLnJlcXVlc3RvcnMuZmluZEluZGV4KGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlLmdldFJlcXVlc3Rvckluc3RhbmNlKCkgPT09IHJlcXVlc3Rvckluc3RhbmNlO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmIChyZXF1ZXN0b3JJbmRleCA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIG1hcC5yZXF1ZXN0b3JzLnNwbGljZShyZXF1ZXN0b3JJbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgbWFwID0gZmluZEZlYXR1cmVPYmplY3QoZmVhdHVyZU9iamVjdCk7XG4gICAgICAgICAgICBpZiAoIW1hcCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciByZXF1ZXN0b3IgPSBtYXAucmVxdWVzdG9ycy5maW5kKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGUuZ2V0UmVxdWVzdG9ySW5zdGFuY2UoKSA9PT0gdGhpcztcbiAgICAgICAgICAgIH0sIHJlcXVlc3Rvckluc3RhbmNlKTtcbiAgICAgICAgICAgIGlmICghcmVxdWVzdG9yKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVxdWVzdG9yLmRlbGV0ZUZlYXR1cmVzKGZlYXR1cmVPYmplY3QpO1xuICAgICAgICB9XG4gICAgICAgIHVwZGF0ZVNlbmRlcigpO1xuICAgIH07XG59XG4iLCIvKiBqc2hpbnQgZXN2ZXJzaW9uOiA2ICovXG5cbmltcG9ydCBGZWF0dXJlTm9kZSBmcm9tIFwiLi9GZWF0dXJlTm9kZVwiO1xuaW1wb3J0IFNvdXJjZU1hcCBmcm9tIFwiLi9Tb3VyY2VNYXBcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRmVhdHVyZU1hcCgpIHtcbiAgICB2YXIgTWFwcGluZ3MgPSBbXTtcblxuICAgIGZ1bmN0aW9uIGdldEZlYXR1cmVOb2RlKGxpc3QsIGNoZWNrKSB7XG4gICAgICAgIHJldHVybiBsaXN0LmZpbmQoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHJldHVybiBlLm5hbWUgPT09IHRoaXMubmFtZTtcbiAgICAgICAgfSwgY2hlY2spO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFkZEZlYXR1cmVOb2RlKGZlYXR1cmVOb2RlLCBsaXN0KSB7XG4gICAgICAgIHZhciBub2RlID0gbmV3IEZlYXR1cmVOb2RlKGZlYXR1cmVOb2RlKTtcbiAgICAgICAgbGlzdC5wdXNoKG5vZGUpO1xuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBmaW5kU291cmNlSW5kZXgoU2VuZGVyKSB7XG4gICAgICAgIHJldHVybiBNYXBwaW5ncy5maW5kSW5kZXgoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHJldHVybiBlLmdldFNlbmRlcigpID09PSB0aGlzO1xuICAgICAgICB9LCBTZW5kZXIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGZpbmRTb3VyY2VNYXAoTWFwcGluZ3MsIHNvdXJjZSwgcGx1Z2luU2VuZGVyKSB7XG4gICAgICAgIHZhciBzb3VyY2VNYXAgPSBNYXBwaW5nc1tmaW5kU291cmNlSW5kZXgoc291cmNlKV07XG4gICAgICAgIGlmICghc291cmNlTWFwKSB7XG4gICAgICAgICAgICBzb3VyY2VNYXAgPSBNYXBwaW5nc1tmaW5kU291cmNlSW5kZXgocGx1Z2luU2VuZGVyKV07XG4gICAgICAgICAgICBpZiAoIXNvdXJjZU1hcCkge1xuICAgICAgICAgICAgICAgIHRocm93IChcIkNvdWxkIG5vdCBsb2NhdGUgc291cmNlIG1hcFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc291cmNlTWFwO1xuICAgIH1cblxuICAgIC8vIEdFTkVSQUwgSU5URVJGQUNFXG4gICAgdGhpcy5jcmVhdGVTb3VyY2VNYXAgPSBmdW5jdGlvbiAoU2VuZGVyLCBwbHVnaW5JbnN0YW5jZSkge1xuICAgICAgICB2YXIgbm9kZSA9IG5ldyBTb3VyY2VNYXAoU2VuZGVyLCBwbHVnaW5JbnN0YW5jZSk7XG4gICAgICAgIE1hcHBpbmdzLnB1c2gobm9kZSk7XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH07XG4gICAgdGhpcy5kZWxldGVTb3VyY2VNYXAgPSBmdW5jdGlvbiAoU2VuZGVyKSB7XG4gICAgICAgIHZhciBpbmRleCA9IGZpbmRTb3VyY2VJbmRleChTZW5kZXIpO1xuICAgICAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICB0aHJvdyAoXCJDb3VsZCBub3QgZmluZCB0aGUgc291cmNlIG1hcCBmb3IgdGhlIHBsdWdpblwiKTtcbiAgICAgICAgfVxuICAgICAgICBNYXBwaW5ncy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH07XG5cbiAgICB0aGlzLmdldFBsdWdpblNlbmRlciA9IGZ1bmN0aW9uIChwbHVnaW4pIHtcbiAgICAgICAgaWYgKHBsdWdpbi5jb25zdHJ1Y3RvciA9PT0gUGx1Z2luSW5zdGFuY2UpIHtcbiAgICAgICAgICAgIHBsdWdpbiA9IHBsdWdpbi5ub2RlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwbHVnaW4uZmVhdHVyZU1hcC5TZW5kZXI7XG4gICAgfTtcblxuICAgIHRoaXMucmVxdWVzdEZlYXR1cmVzID0gZnVuY3Rpb24gKHJlcXVlc3Rvciwgc291cmNlLCBmZWF0dXJlT2JqZWN0KSB7XG4gICAgICAgIGlmIChyZXF1ZXN0b3IuY29uc3RydWN0b3IgIT09IFBsdWdpbkluc3RhbmNlKSB7XG4gICAgICAgICAgICByZXF1ZXN0b3IgPSByZXF1ZXN0b3IucGx1Z2luSW5zdGFuY2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gR2V0IHRoZSBzb3VyY2UgbWFwXG4gICAgICAgIHZhciBwbHVnaW5TZW5kZXIgPSB0aGlzLmdldFBsdWdpblNlbmRlcihzb3VyY2UpO1xuICAgICAgICB2YXIgc291cmNlTWFwID0gZmluZFNvdXJjZU1hcChNYXBwaW5ncywgc291cmNlLCBwbHVnaW5TZW5kZXIpO1xuICAgICAgICBzb3VyY2VNYXAucmVxdWVzdEZlYXR1cmVzKHJlcXVlc3RvciwgZmVhdHVyZU9iamVjdCk7XG4gICAgfTtcbiAgICB0aGlzLmRlbGV0ZUZlYXR1cmVzID0gZnVuY3Rpb24gKHJlcXVlc3Rvciwgc291cmNlLCBmZWF0dXJlT2JqZWN0KSB7XG4gICAgICAgIGlmIChyZXF1ZXN0b3IuY29uc3RydWN0b3IgIT09IFBsdWdpbkluc3RhbmNlKSB7XG4gICAgICAgICAgICByZXF1ZXN0b3IgPSByZXF1ZXN0b3IucGx1Z2luSW5zdGFuY2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNvdXJjZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBNYXBwaW5ncy5mb3JFYWNoKGZ1bmN0aW9uIChzb3VyY2VNYXApIHtcbiAgICAgICAgICAgICAgICBzb3VyY2VNYXAuY2FuY2VsRmVhdHVyZXMocmVxdWVzdG9yKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gR2V0IHRoZSBzb3VyY2UgbWFwXG4gICAgICAgICAgICB2YXIgcGx1Z2luU2VuZGVyID0gdGhpcy5nZXRQbHVnaW5TZW5kZXIoc291cmNlKTtcbiAgICAgICAgICAgIHZhciBzb3VyY2VNYXAgPSBmaW5kU291cmNlTWFwKE1hcHBpbmdzLCBzb3VyY2UsIHBsdWdpblNlbmRlcik7XG4gICAgICAgICAgICBzb3VyY2VNYXAuY2FuY2VsRmVhdHVyZXMocmVxdWVzdG9yLCBmZWF0dXJlT2JqZWN0KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5nZXRGZWF0dXJlTGlzdCA9IGZ1bmN0aW9uIChyZXF1ZXN0b3IsIHNvdXJjZSkge307XG4gICAgdGhpcy5wb3N0RmVhdHVyZXMgPSBmdW5jdGlvbiAoZmVhdHVyZU9iamVjdCkge1xuICAgICAgICAvLyBSZWNlaXZlIGZyb20gdGhlIFNlbmRlciBvYmplY3RzXG4gICAgICAgIC8vIFRyaWdnZXIgZGlzdHJpYnV0ZWQgc2VhcmNoIGZvciByZXN1bHRzIHRyYW5zbWlzc2lvblxuXG4gICAgICAgIC8vIEZpcnN0IGdldCB0aGUgaW5zdGFuY2UgbWFwcGluZyBmb3Igb3V0cHV0L2ZyYW1lXG4gICAgICAgIHZhciBzb3VyY2UgPSBNYXBwaW5nc1tmaW5kU291cmNlSW5kZXgoZmVhdHVyZU9iamVjdC5wbHVnaW4pXTtcbiAgICAgICAgaWYgKCFzb3VyY2UpIHtcbiAgICAgICAgICAgIHNvdXJjZSA9IE1hcHBpbmdzW2ZpbmRTb3VyY2VJbmRleCh0aGlzLmdldFBsdWdpblNlbmRlcihmZWF0dXJlT2JqZWN0LnBsdWdpbikpXTtcbiAgICAgICAgICAgIGlmICghc291cmNlKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgKFwiUGx1Z2luIEluc3RhbmNlIG5vdCBsb2FkZWQhXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhciBmcmFtZU1hcCA9IHNvdXJjZS5maW5kRnJhbWVNYXAoZmVhdHVyZU9iamVjdC5vdXRwdXRJbmRleCwgZmVhdHVyZU9iamVjdC5mcmFtZVNpemUpO1xuXG4gICAgICAgIC8vIFNlbmQgdGhlIGZlYXR1cmUgb2JqZWN0IHRvIHRoZSBSZXF1ZXN0b3JNYXAgb2JqZWN0IHRvIGhhbmRsZSBjb21tc1xuICAgICAgICBmcmFtZU1hcC5yZXF1ZXN0b3JzLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGUucG9zdEZlYXR1cmVzKHRoaXMpO1xuICAgICAgICB9LCBmZWF0dXJlT2JqZWN0KTtcblxuICAgIH07XG59XG4iLCIvKiBqc2hpbnQgZXN2ZXJzaW9uOiA2ICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1pZGlTeW50aGVzaXNJbnN0YW5jZShzeW50aE5vZGUpIHtcbiAgICB2YXIgX291dCA9IHN5bnRoTm9kZS5jb250ZXh0LmNyZWF0ZUdhaW4oKTtcbiAgICBzeW50aE5vZGUuZ2V0T3V0cHV0cygpWzBdLmNvbm5lY3QoX291dCk7XG5cbiAgICB0aGlzLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHN5bnRoTm9kZS5kZXN0cm95KCk7XG4gICAgfTtcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgICAgJ25vZGUnOiB7XG4gICAgICAgICAgICAndmFsdWUnOiBzeW50aE5vZGVcbiAgICAgICAgfSxcbiAgICAgICAgJ291dHB1dCc6IHtcbiAgICAgICAgICAgICdnZXQnOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9vdXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgfSk7XG59XG4iLCIvKiBqc2hpbnQgZXN2ZXJzaW9uOiA2ICovXG5cbmltcG9ydCBMaW5rZWRTdG9yZSBmcm9tICcuLi9MaW5rZWRTdG9yZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1pZGlTeW50aGVzaXNlckhvc3QoZmFjdG9yeSkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICBmdW5jdGlvbiBidWlsZE5ld1N5bnRoZXNpc2VyT2JqZWN0KHByb3RvdHlwZU9iamVjdCkge1xuICAgICAgICBpZiAobWlkaVN5bnRoU2xvdCkge1xuICAgICAgICAgICAgZmFjdG9yeS5kZWxldGVQbHVnaW4obWlkaVN5bnRoU2xvdC5pZCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgaWYgKHByb3RvdHlwZU9iamVjdC5oYXNNaWRpSW5wdXQgPT0gZmFsc2UgfHwgcHJvdG90eXBlT2JqZWN0Lmhhc01pZGlPdXRwdXQgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHJlamVjdCAoXCJQcm90b3R5cGUgaXMgbm90IGEgTWlkaVN5bnRoZXNpcyB0eXBlLiBoYXNNaWRpSW5wdXQgbXVzdCBiZSB0cnVlIGFuZCBoYXNNaWRpT3V0cHV0IG11c3QgYmUgZmFsc2VcIik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlc29sdmUocHJvdG90eXBlT2JqZWN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiBwcm90b3R5cGVPYmplY3QuY3JlYXRlUGx1Z2luSW5zdGFuY2Uoc2VsZiwgZmFsc2UpXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbihub2RlKSB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMobm9kZSwge1xuICAgICAgICAgICAgICAgICAgICAnVHJhY2tEYXRhJzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHNlbGYuVHJhY2tEYXRhXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbm9kZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLlRyYWNrRGF0YSA9IG5ldyBMaW5rZWRTdG9yZShcIlRyYWNrXCIpO1xuXG4gICAgdmFyIG1pZGlTeW50aFNsb3Q7XG4gICAgdmFyIGNvbm5lY3Rpb25zID0gW107XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgICBcImNvbm5lY3RcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbihkZXN0aW5hdGlvbk5vZGUsIG91dHB1dCwgaW5wdXQpIHtcbiAgICAgICAgICAgICAgICBpZiAoZGVzdGluYXRpb25Ob2RlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgKFwiTXVzdCBkZWZpbmUgYW4gQXVkaW9Ob2RlIG9iamVjdFwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIGV4aXN0cyA9IGNvbm5lY3Rpb25zLmZpbmQoZnVuY3Rpb24oY29ubikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY29ubi5kZXN0aW5hdGlvbk5vZGUgPT0gZGVzdGluYXRpb25Ob2RlICYmIGNvbm4ub3V0cHV0ID09IG91dHB1dCAmJiBjb25uLmlucHV0ID09IGlucHV0O1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmIChleGlzdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbm5lY3Rpb25zLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVzdGluYXRpb25Ob2RlOmRlc3RpbmF0aW9uTm9kZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dDpvdXRwdXQsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDppbnB1dFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG1pZGlTeW50aFNsb3QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCJNSURJIFN5bnRoZXNpc2VyIGlzIG5vdCBsb2FkZWQsIGNvbm5lY3Rpb25zIHdpbGwgYmUgdmFsaWRhdGVkIG9uIGxvYWRcIik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbWlkaVN5bnRoU2xvdC5ub2RlLmNvbm5lY3QoZGVzdGluYXRpb25Ob2RlLCBvdXRwdXQsIGlucHV0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiZGlzY29ubmVjdFwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKGRlc3RpbmF0aW9uTm9kZSwgb3V0cHV0LCBpbnB1dCkge1xuICAgICAgICAgICAgICAgIGlmIChkZXN0aW5hdGlvbk5vZGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAobWlkaVN5bnRoU2xvdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWlkaVN5bnRoU2xvdC5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29ubmVjdGlvbnMgPSBbXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodHlwZW9mIGRlc3RpbmF0aW9uTm9kZSA9PSBcIm51bWJlclwiICYmIHR5cGVvZiBvdXRwdXQgPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgICAgICAgICBvdXRwdXQgPSBkZXN0aW5hdGlvbk5vZGU7XG4gICAgICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uTm9kZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICAgICAgY29ubmVjdGlvbnMgPSBjb25uZWN0aW9ucy5maWx0ZXIoZnVuY3Rpb24oY29ubikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbm4ub3V0cHV0ID09IG91dHB1dCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtaWRpU3ludGhTbG90KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pZGlTeW50aFNsb3Qubm9kZS5kaXNjb25uZWN0KGNvbm4uZGVzdGluYXRpb25Ob2RlLCBjb25uLm91dHB1dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGRlc3RpbmF0aW9uTm9kZSA9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvdXRwdXQgPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgICAgICAgICBjb25uZWN0aW9ucyA9IGNvbm5lY3Rpb25zLmZpbHRlcihmdW5jdGlvbihjb25uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29ubi5kZXN0aW5hdGlvbk5vZGUgPT0gZGVzdGluYXRpb25Ob2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1pZGlTeW50aFNsb3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWlkaVN5bnRoU2xvdC5ub2RlLmRpc2Nvbm5lY3QoY29ubi5kZXN0aW5hdGlvbk5vZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBkZXN0aW5hdGlvbk5vZGUgPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb3V0cHV0ID09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29ubmVjdGlvbnMgPSBjb25uZWN0aW9ucy5maWx0ZXIoZnVuY3Rpb24oY29ubikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbm4uZGVzdGluYXRpb25Ob2RlID09IGRlc3RpbmF0aW9uTm9kZSAmJiBjb25uLm91dHB1dCA9PSBvdXRwdXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobWlkaVN5bnRoU2xvdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaWRpU3ludGhTbG90Lm5vZGUuZGlzY29ubmVjdChjb25uLmRlc3RpbmF0aW9uTm9kZSwgY29ubi5vdXRwdXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBkZXN0aW5hdGlvbk5vZGUgPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb3V0cHV0ID09IFwibnVtYmVyXCIgJiYgdHlwZW9mIGlucHV0ID09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29ubmVjdGlvbnMgPSBjb25uZWN0aW9ucy5maWx0ZXIoZnVuY3Rpb24oY29ubikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbm4uZGVzdGluYXRpb25Ob2RlID09IGRlc3RpbmF0aW9uTm9kZSAmJiBjb25uLm91dHB1dCA9PSBvdXRwdXQgJiYgY29ubi5pbnB1dCA9PSBpbnB1dCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtaWRpU3ludGhTbG90KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pZGlTeW50aFNsb3Qubm9kZS5kaXNjb25uZWN0KGNvbm4uZGVzdGluYXRpb25Ob2RlLCBjb25uLm91dHB1dCwgY29ubi5pbnB1dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJzY2hlZHVsZUV2ZW50XCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24obXNnLCB0KSB7XG4gICAgICAgICAgICAgICAgaWYgKG1pZGlTeW50aFNsb3QpIHtcbiAgICAgICAgICAgICAgICAgICAgbWlkaVN5bnRoU2xvdC5ub2RlLnNjaGVkdWxlRXZlbnQobXNnLCB0KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyhcIk1JREkgU3ludGhlc2lzZXIgbm90IGxvYWRlZFwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiY2FuY2VsQWxsRXZlbnRzXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgICAgIGlmIChtaWRpU3ludGhTbG90KSB7XG4gICAgICAgICAgICAgICAgICAgIG1pZGlTeW50aFNsb3Qubm9kZS5jYW5jZWxBbGxFdmVudHModCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3coXCJNSURJIFN5bnRoZXNpc2VyIG5vdCBsb2FkZWRcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcIm1pZGlTeW50aGVzaXNlclwiOiB7XG4gICAgICAgICAgICBcImdldFwiOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1pZGlTeW50aFNsb3Q7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJzZXRcIjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdGhyb3coXCJDYW5ub3Qgc2V0IHJlYWQtb25seSBhdHRyaWJ1dGUuXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImxvYWRNaWRpU3ludGhlc2lzZXJNb2R1bGVcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbihwcm90b3R5cGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocHJvdG90eXBlLmhhc01pZGlJbnB1dCA9PSBmYWxzZSB8fCBwcm90b3R5cGUuaGFzTWlkaU91dHB1dCA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QgKFwiUHJvdG90eXBlIGlzIG5vdCBhIE1pZGlTeW50aGVzaXMgdHlwZS4gaGFzTWlkaUlucHV0IG11c3QgYmUgdHJ1ZSBhbmQgaGFzTWlkaU91dHB1dCBtdXN0IGJlIGZhbHNlXCIpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShwcm90b3R5cGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbihwcm90b3R5cGVPYmplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGJ1aWxkTmV3U3ludGhlc2lzZXJPYmplY3QuY2FsbChzZWxmLCBwcm90b3R5cGVPYmplY3QpLmNhdGNoKGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyhcIlBsdWdpbiBkaWQgbm90IGdldCBjcmVhdGVkISBBYm9ydGluZ1wiKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbihub2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUubm9kZS5vbmxvYWRlZC5jYWxsKG5vZGUubm9kZSk7XG4gICAgICAgICAgICAgICAgICAgIG1pZGlTeW50aFNsb3QgPSBub2RlO1xuICAgICAgICAgICAgICAgICAgICBjb25uZWN0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uKGNvbm4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pZGlTeW50aFNsb3Qubm9kZS5jb25uZWN0KGNvbm4uZGVzdGluYXRpb25Ob2RlLCBjb25uLm91dHB1dCwgY29ubi5pbnB1dCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWlkaVN5bnRoU2xvdDtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICB9KTtcbn1cbiIsIi8qIGpzaGludCBlc3ZlcnNpb246IDYgKi9cblxuZnVuY3Rpb24gQXNzZXRQYWNrU2VsZWN0b3IocGx1Z2luLCBhc3NldFBhY2tNYW5hZ2VyLCBwYWNrKSB7XG5cbiAgICBmdW5jdGlvbiBmZXRjaEFzc2V0cyhzZWxmLCBhc3NldHNMaXN0KSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLmFsbChhc3NldHNMaXN0Lm1hcChhc3NldCA9PiBhc3NldC5mZXRjaCgpKSlcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIG9ubG9hZCA9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICBvbmxvYWQuY2FsbChzZWxmLCBhc3NldHNMaXN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIG9uZXJyb3IgPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgb25lcnJvci5jYWxsKHNlbGYpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBmZXRjaEFsbEFzc2V0cyhzZWxmKSB7XG4gICAgICAgIHJldHVybiBmZXRjaEFzc2V0cyhzZWxmLCBwYWNrLmFzc2V0T2JqZWN0cyk7XG4gICAgfVxuXG4gICAgdGhpcy5zZWxlY3RQYWNrID0gZnVuY3Rpb24oX3BhY2spIHtcbiAgICAgICAgaWYgKGFzc2V0UGFja01hbmFnZXIuYXNzZXRQYWNrcy5pbmNsdWRlcyhfcGFjaykpIHtcbiAgICAgICAgICAgIHBhY2sgPSBfcGFjaztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93KFwiUGFjayBub3QgaW4gZmFjdG9yeSBhc3NldCBwYWNrc1wiKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB0aGlzLmFsbEFzc2V0c0xvYWRlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHBhY2suYXNzZXRPYmplY3RzLmV2ZXJ5KGFzc2V0ID0+IGFzc2V0LmFzc2V0T2JqZWN0ICE9PSB1bmRlZmluZWQpO1xuICAgIH07XG5cbiAgICB0aGlzLmZldGNoQXNzZXRCeU5hbWUgPSBmdW5jdGlvbihuYW1lKSB7XG4gICAgICAgIGlmIChwYWNrID09PSB1bmRlZmluZWQgfHwgcGFjay5hc3NldE9iamVjdHMgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aHJvdyhcIlBhY2sgbm90IGRlZmluZWRcIik7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGFzc2V0ID0gcGFjay5hc3NldE9iamVjdHMuZmluZChhc3NldCA9PiBuYW1lID09IGFzc2V0Lm5hbWUpO1xuICAgICAgICBpZiAoYXNzZXQpIHtcbiAgICAgICAgICAgIHJldHVybiBhc3NldC5mZXRjaCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgKFwiQXNzZXQgd2l0aCBuYW1lIFwiK1N0cmluZyhuYW1lKStcIiBkb2VzIG5vdCBleGlzdCBpbiB0aGlzIHBhY2tcIik7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgICBcInBhY2tcIjoge1xuICAgICAgICAgICAgXCJnZXRcIjogZnVuY3Rpb24gKCkge3JldHVybiBwYWNrO31cbiAgICAgICAgfSxcbiAgICAgICAgXCJsb2FkQXNzZXRzXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKGFzc2V0c0xpc3QpIHtcbiAgICAgICAgICAgICAgICBpZiAocGFjayA9PT0gdW5kZWZpbmVkIHx8IHBhY2suYXNzZXRPYmplY3RzID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyhcIlBhY2sgbm90IGRlZmluZWRcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChhc3NldHNMaXN0ID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBhc3NldHNMaXN0ID0gcGFjay5hc3NldE9iamVjdHM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheShhc3NldHNMaXN0KSB8fCBhc3NldHNMaXN0Lmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IFwiTXVzdCBwYXNzIGFuIGFycmF5IG9mIGFzc2V0c1wiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgYWxsSW5QYWNrID0gYXNzZXRzTGlzdC5ldmVyeShmdW5jdGlvbihhc3NldCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGFjay5hc3NldE9iamVjdHMuc29tZShhbyA9PiBhby5uYW1lID09IGFzc2V0Lm5hbWUpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmICghYWxsSW5QYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChcIk5vdCBhbGwgZ2l2ZW4gYXNzZXRzIGFyZSBpbiB0aGlzIHBhY2tcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBmZXRjaEFzc2V0cyh0aGlzLCBhc3NldHNMaXN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJvbmxvYWRcIjoge1xuICAgICAgICAgICAgXCJnZXRcIjogZnVuY3Rpb24oKSB7IHJldHVybiBvbmxvYWQ7IH0sXG4gICAgICAgICAgICBcInNldFwiOiBmdW5jdGlvbihmKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBmID09IFwiZnVuY3Rpb25cIiB8fCBmID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgb25sb2FkID0gZjtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBcIk11c3QgYmUgYSBmdW5jdGlvbiBvciB1bmRlZmluZWRcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwib25lcnJvclwiOiB7XG4gICAgICAgICAgICBcImdldFwiOiBmdW5jdGlvbigpIHsgcmV0dXJuIG9ubG9hZDsgfSxcbiAgICAgICAgICAgIFwic2V0XCI6IGZ1bmN0aW9uKGYpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGYgPT0gXCJmdW5jdGlvblwiIHx8IGYgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBvbmVycm9yID0gZjtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBcIk11c3QgYmUgYSBmdW5jdGlvbiBvciB1bmRlZmluZWRcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXNzZXRQYWNrU2VsZWN0b3I7XG4iLCIvKmVzbGludC1lbnYgYnJvd3NlciAqL1xuLyoganNoaW50IGVzdmVyc2lvbjo2ICovXG5cbmZ1bmN0aW9uIFBsdWdpbkFzc2V0KGZhY3RvcnlDb250ZXh0LCBuYW1lLCB1cmwsIGFzc2V0T2JqZWN0KSB7XG5cbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgZnVuY3Rpb24gZmV0Y2hBc3NldCgpIHtcbiAgICAgICAgcCA9IGZldGNoKHVybCkudGhlbihmdW5jdGlvbihyKSB7XG4gICAgICAgICAgICByZXR1cm4gci5hcnJheUJ1ZmZlcigpO1xuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uKGFiKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFjdG9yeUNvbnRleHQuY29udGV4dC5kZWNvZGVBdWRpb0RhdGEoYWIpO1xuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uKGFiKSB7XG4gICAgICAgICAgICBhc3NldE9iamVjdCA9IGFiO1xuICAgICAgICAgICAgcCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHJldHVybiBzZWxmO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB2YXIgcDtcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgICAgXCJuYW1lXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogbmFtZVxuICAgICAgICB9LFxuICAgICAgICBcInVybFwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IHVybFxuICAgICAgICB9LFxuICAgICAgICBcImFzc2V0T2JqZWN0XCI6IHtcbiAgICAgICAgICAgIFwiZ2V0XCI6IGZ1bmN0aW9uKCkge3JldHVybiBhc3NldE9iamVjdDt9XG4gICAgICAgIH0sXG4gICAgICAgIFwiZmV0Y2hcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBpZiAoYXNzZXRPYmplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShhc3NldE9iamVjdCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgZmV0Y2hBc3NldCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJ0b0pTT05cIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge25hbWU6IG5hbWUsIHVybDogdXJsfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJ0b1N0cmluZ1wiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh0aGlzLnRvSlNPTigpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5leHBvcnQge1BsdWdpbkFzc2V0fTtcbiIsIi8qZXNsaW50LWVudiBicm93c2VyICovXG4vKiBqc2hpbnQgZXN2ZXJzaW9uOjYgKi9cblxuaW1wb3J0IHtQbHVnaW5Bc3NldHNMaXN0fSBmcm9tIFwiLi9QbHVnaW5Bc3NldHNMaXN0XCI7XG5pbXBvcnQgQXNzZXRQYWNrU2VsZWN0b3IgZnJvbSBcIi4vQXNzZXRQYWNrU2VsZWN0b3JcIjtcblxuZnVuY3Rpb24gZmluZFBhY2tCeU5hbWUoYXNzZXRQYWNrTGlzdCwgbmFtZSkge1xuICAgIHJldHVybiBhc3NldFBhY2tMaXN0LmZpbmQoZnVuY3Rpb24obCkge1xuICAgICAgICByZXR1cm4gbC5uYW1lID09IG5hbWU7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIFBsdWdpbkFzc2V0TWFuYWdlcihmYWN0b3J5Q29udGV4dCkge1xuICAgIHZhciBhc3NldFBhY2tMaXN0ID0gW107XG4gICAgdGhpcy5hZGRQYWNrVG9MaXN0ID0gZnVuY3Rpb24obmFtZSwgcmVzb3VyY2VUeXBlKSB7XG4gICAgICAgIGlmICh0eXBlb2YgbmFtZSAhPSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICB0aHJvdyBcImFkZEFzc2V0VXJsVG9MaXN0IEFyZ3VtZW50LTEgbXVzdCBiZSBhIHR5cGUgb2Ygc3RyaW5nXCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZpbmRQYWNrQnlOYW1lKGFzc2V0UGFja0xpc3QsIG5hbWUpKSB7XG4gICAgICAgICAgICB0aHJvdyBcIlBhY2sgd2l0aCBuYW1lIFxcXCJcIituYW1lK1wiXFxcIiBhbHJlYWR5IGluIHRoaXMgbGlzdFwiO1xuICAgICAgICB9XG4gICAgICAgIHZhciBhc3NldFBhY2sgPSBuZXcgUGx1Z2luQXNzZXRzTGlzdChmYWN0b3J5Q29udGV4dCwgbmFtZSwgcmVzb3VyY2VUeXBlKTtcbiAgICAgICAgYXNzZXRQYWNrTGlzdC5wdXNoKGFzc2V0UGFjayk7XG4gICAgICAgIHJldHVybiBhc3NldFBhY2s7XG4gICAgfTtcbiAgICB0aGlzLnJlbW92ZUFzc2V0UGFja0Zyb21MaXN0ID0gZnVuY3Rpb24oYXNzZXRQYWNrKSB7XG4gICAgICAgIHZhciBpbmRleCA9IGFzc2V0UGFja0xpc3QuaW5kZXhPZihhc3NldFBhY2spO1xuICAgICAgICBpZiAoaW5kZXggPT0gLTEpIHtcbiAgICAgICAgICAgIHRocm93IFwiQXNzZXQgcGFjayBub3QgaW4gdGhpcyBsaXN0XCI7XG4gICAgICAgIH1cbiAgICAgICAgYXNzZXRQYWNrTGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICByZXR1cm4gYXNzZXRQYWNrTGlzdDtcbiAgICB9O1xuICAgIHRoaXMucmVtb3ZlQXNzZXRQYWNrRnJvbUxpc3RCeU5hbWUgPSBmdW5jdGlvbihuYW1lKSB7XG4gICAgICAgIGlmICh0eXBlb2YgbmFtZSAhPSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICB0aHJvdyBcInJlbW92ZUFzc2V0VXJsRnJvbUxpc3QgQXJndW1lbnQtMSBtdXN0IGJlIGEgdHlwZSBvZiBzdHJpbmdcIjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgYXNzZXQgPSBmaW5kUGFja0J5TmFtZShhc3NldFBhY2tMaXN0LCBuYW1lKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVtb3ZlQXNzZXRGcm9tTGlzdChhc3NldCk7XG4gICAgfTtcbiAgICB0aGlzLmFzc2V0UGFja3MgPSBhc3NldFBhY2tMaXN0O1xuICAgIHRoaXMuY3JlYXRlQXNzZXRQYWNrU2VsZWN0b3IgPSBmdW5jdGlvbihwbHVnaW4sIHBhY2spIHtcbiAgICAgICAgcmV0dXJuIG5ldyBBc3NldFBhY2tTZWxlY3RvcihwbHVnaW4sIHRoaXMsIHBhY2spO1xuICAgIH07XG4gICAgdGhpcy5pbXBvcnRGcm9tQXNzZXRMaXN0cyA9IGZ1bmN0aW9uKG9sZENvbnRleHQpIHtcbiAgICAgICAgb2xkQ29udGV4dC5hc3NldFBhY2tzLmZvckVhY2goZnVuY3Rpb24ob3JpZ2luYWxBc3NldFBhY2spIHtcbiAgICAgICAgICAgIHZhciBuZXdDb250ZXh0UGFjayA9IHRoaXMuYWRkUGFja1RvTGlzdChvcmlnaW5hbEFzc2V0UGFjay5uYW1lLCBvcmlnaW5hbEFzc2V0UGFjay5yZXNvdXJjZVR5cGUpO1xuICAgICAgICAgICAgb3JpZ2luYWxBc3NldFBhY2suYXNzZXRPYmplY3RzLmZvckVhY2goZnVuY3Rpb24ob3JpZ2luYWxBc3NldCkge1xuICAgICAgICAgICAgICAgIHZhciBhc3NldE9iamVjdDtcbiAgICAgICAgICAgICAgICBpZiAob3JpZ2luYWxBc3NldC5hc3NldE9iamVjdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGFzc2V0T2JqZWN0ID0gZmFjdG9yeUNvbnRleHQuY29udGV4dC5jcmVhdGVCdWZmZXIob3JpZ2luYWxBc3NldC5hc3NldE9iamVjdC5udW1iZXJPZkNoYW5uZWxzLCBvcmlnaW5hbEFzc2V0LmFzc2V0T2JqZWN0Lmxlbmd0aCwgb3JpZ2luYWxBc3NldC5hc3NldE9iamVjdC5zYW1wbGVSYXRlKTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhc3NldE9iamVjdC5udW1iZXJPZkNoYW5uZWxzOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0T2JqZWN0LmNvcHlUb0NoYW5uZWwob3JpZ2luYWxBc3NldC5hc3NldE9iamVjdC5nZXRDaGFubmVsRGF0YShpKSwgaSwgMCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRBc3NldFVybFRvTGlzdChvcmlnaW5hbEFzc2V0Lm5hbWUsIG9yaWdpbmFsQXNzZXQudXJsLCBhc3NldE9iamVjdCk7XG4gICAgICAgICAgICB9LCBuZXdDb250ZXh0UGFjayk7XG4gICAgICAgIH0sIHRoaXMpO1xuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBsdWdpbkFzc2V0TWFuYWdlcjtcbiIsIi8qZXNsaW50LWVudiBicm93c2VyICovXG4vKiBqc2hpbnQgZXN2ZXJzaW9uOjYgKi9cblxuaW1wb3J0IHtQbHVnaW5Bc3NldH0gZnJvbSBcIi4vUGx1Z2luQXNzZXQuanNcIjtcblxuZnVuY3Rpb24gUGx1Z2luQXNzZXRzTGlzdChmYWN0b3J5Q29udGV4dCwgbmFtZSwgcmVzb3VyY2VUeXBlKSB7XG4gICAgdmFyIGFzc2V0T2JqZWN0cyA9IFtdO1xuICAgIGZ1bmN0aW9uIGZpbmRBc3NldEJ5VXJsKHVybCkge1xuICAgICAgICByZXR1cm4gYXNzZXRPYmplY3RzLmZpbmQoZnVuY3Rpb24oYXNzZXQpIHtcbiAgICAgICAgICAgIHJldHVybiBhc3NldC51cmwgPT0gdXJsO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5hZGRBc3NldFVybFRvTGlzdCA9IGZ1bmN0aW9uKG5hbWUsIHVybCwgYXNzZXRPYmplY3QpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB1cmwgIT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgdGhyb3cgXCJhZGRBc3NldFVybFRvTGlzdCBBcmd1bWVudC0xIG11c3QgYmUgYSB0eXBlIG9mIHN0cmluZ1wiO1xuICAgICAgICB9XG4gICAgICAgIGlmIChmaW5kQXNzZXRCeVVybCh1cmwpKSB7XG4gICAgICAgICAgICB0aHJvdyBcIlVSTCBcXFwiXCIrdXJsK1wiXFxcIiBhbHJlYWR5IGluIHRoaXMgbGlzdFwiO1xuICAgICAgICB9XG4gICAgICAgIGFzc2V0T2JqZWN0cy5wdXNoKG5ldyBQbHVnaW5Bc3NldChmYWN0b3J5Q29udGV4dCwgbmFtZSwgdXJsLCBhc3NldE9iamVjdCkpO1xuICAgICAgICByZXR1cm4gYXNzZXRPYmplY3RzO1xuICAgIH07XG4gICAgdGhpcy5yZW1vdmVBc3NldEZyb21MaXN0ID0gZnVuY3Rpb24oYXNzZXQpIHtcbiAgICAgICAgdmFyIGluZGV4ID0gYXNzZXRPYmplY3RzLmZpbmRJbmRleChmdW5jdGlvbihhc3NldCkge1xuICAgICAgICAgICAgcmV0dXJuIGFzc2V0LnVybCA9PSB1cmw7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoaW5kZXggPT0gLTEpIHtcbiAgICAgICAgICAgIHRocm93IFwiQXNzZXQgbm90IGluIHRoaXMgbGlzdFwiO1xuICAgICAgICB9XG4gICAgICAgIGFzc2V0T2JqZWN0cy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICByZXR1cm4gYXNzZXRPYmplY3RzO1xuICAgIH07XG4gICAgdGhpcy5yZW1vdmVBc3NldFVybEZyb21MaXN0ID0gZnVuY3Rpb24odXJsKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdXJsICE9IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIHRocm93IFwicmVtb3ZlQXNzZXRVcmxGcm9tTGlzdCBBcmd1bWVudC0xIG11c3QgYmUgYSB0eXBlIG9mIHN0cmluZ1wiO1xuICAgICAgICB9XG4gICAgICAgIHZhciBhc3NldCA9IGZpbmRBc3NldEJ5VXJsKHVybCk7XG4gICAgICAgIHJldHVybiB0aGlzLnJlbW92ZUFzc2V0RnJvbUxpc3QoYXNzZXQpO1xuICAgIH07XG4gICAgdGhpcy5hc3NldE9iamVjdHMgPSBhc3NldE9iamVjdHM7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnJlc291cmNlVHlwZSA9IHJlc291cmNlVHlwZTtcbn1cblxuZXhwb3J0IHtQbHVnaW5Bc3NldHNMaXN0fTtcbiIsIi8vIFRoaXMgZGVmaW5lcyBhIG1hc3RlciBvYmplY3QgZm9yIGhvbGRpbmcgYWxsIHRoZSBwbHVnaW5zIGFuZCBjb21tdW5pY2F0aW5nXG4vLyBUaGlzIG9iamVjdCB3aWxsIGFsc28gaGFuZGxlIGNyZWF0aW9uIGFuZCBkZXN0cnVjdGlvbiBvZiBwbHVnaW5zXG4vKmdsb2JhbHMgUHJvbWlzZSwgZG9jdW1lbnQsIGNvbnNvbGUsIExpbmtlZFN0b3JlLCBXb3JrZXIsIHdpbmRvdywgWE1MSHR0cFJlcXVlc3QgKi9cbi8qZXNsaW50LWVudiBicm93c2VyICovXG4vKiBqc2hpbnQgZXN2ZXJzaW9uOjYgKi9cblxuaW1wb3J0IExpbmtlZFN0b3JlIGZyb20gJy4uL0xpbmtlZFN0b3JlJztcbmltcG9ydCBQbHVnaW5Bc3NldE1hbmFnZXIgZnJvbSAnLi9QbHVnaW5Bc3NldHMvUGx1Z2luQXNzZXRNYW5hZ2VyJztcbmltcG9ydCBQbHVnaW5Qcm90b3R5cGUgZnJvbSBcIi4vUGx1Z2luUHJvdG90eXBlXCI7XG5pbXBvcnQgRmVhdHVyZU1hcCBmcm9tIFwiLi9GZWF0dXJlTWFwL2luZGV4XCI7XG5pbXBvcnQgQXVkaW9QbHVnaW5DaGFpbk1hbmFnZXIgZnJvbSBcIi4vQXVkaW9QbHVnaW5DaGFpbk1hbmFnZXIvXCI7XG5pbXBvcnQgTWlkaVN5bnRoZXNpc2VySG9zdCBmcm9tIFwiLi9NaWRpU3ludGhlc2lzZXJIb3N0XCI7XG5pbXBvcnQgUGx1Z2luVXNlckludGVyZmFjZU1lc3NhZ2VIdWIgZnJvbSBcIi4vUGx1Z2luVXNlckludGVyZmFjZU1lc3NhZ2VIdWJcIjtcblxuZnVuY3Rpb24gUGx1Z2luRmFjdG9yeShhdWRpb19jb250ZXh0LCByb290VVJMKSB7XG5cbiAgICBmdW5jdGlvbiBsb2FkUmVzb3VyY2UocmVzb3VyY2VPYmplY3QpIHtcbiAgICAgICAgaWYgKHJlc291cmNlT2JqZWN0LnVybC5zdGFydHNXaXRoKFwiaHR0cFwiKSA9PT0gZmFsc2UgJiYgcm9vdFVSTCAhPT0gdW5kZWZpbmVkICYmIHJvb3RVUkwuc3RhcnRzV2l0aChcImh0dHBcIikpIHtcbiAgICAgICAgICAgIHJlc291cmNlT2JqZWN0LnVybCA9IHJvb3RVUkwgKyByZXNvdXJjZU9iamVjdC51cmw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgICAgIHhoci5vcGVuKFwiR0VUXCIsIHJlc291cmNlT2JqZWN0LnVybCk7XG4gICAgICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PSA0KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuICAgICAgICAgICAgICAgICAgICBzY3JpcHQudGV4dENvbnRlbnQgPSB4aHIucmVzcG9uc2VUZXh0O1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF0uYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXNvdXJjZU9iamVjdCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgeGhyLnNlbmQoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY29weUZhY3RvcnkoZmFjdG9yeSwgbmV3Y29udGV4dCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICBpZiAobmV3Y29udGV4dC5zYW1wbGVSYXRlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAvL01heWJlIG5vdCBhIHJlYWwgQXVkaW9Db250ZXh0XG4gICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihcIkludmFsaWQgYXVkaW8gY29udGV4dCBwcm92aWRlZFwiKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlc29sdmUobmV3Y29udGV4dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24obmV3Y29udGV4dCkge1xuICAgICAgICAgICAgdmFyIEJGYWN0b3J5ID0gbmV3IFBsdWdpbkZhY3RvcnkobmV3Y29udGV4dCk7XG4gICAgICAgICAgICB2YXIgcHJvbWlzZXMgPSBbXTtcbiAgICAgICAgICAgIHBsdWdpbl9wcm90b3R5cGVzLmZvckVhY2goZnVuY3Rpb24gKHByb3RvKSB7XG4gICAgICAgICAgICAgICAgcHJvbWlzZXMucHVzaChCRmFjdG9yeS5hZGRQcm90b3R5cGUocHJvdG8ucHJvdG8pKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBCRmFjdG9yeTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uKG5ld0ZhY3RvcnkpIHtcbiAgICAgICAgICAgIG5ld0ZhY3RvcnkucGx1Z2luQXNzZXRzLmltcG9ydEZyb21Bc3NldExpc3RzKGZhY3RvcnkucGx1Z2luQXNzZXRzKTtcbiAgICAgICAgICAgIHJldHVybiBuZXdGYWN0b3J5O1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwbHVnaW5BdWRpb1N0YXJ0KG5vZGUsIHByb2dyYW1fdGltZSwgY29udGV4dF90aW1lKSB7XG4gICAgICAgIG5vZGUuc3RhcnQuY2FsbChub2RlLCBwcm9ncmFtX3RpbWUsIGNvbnRleHRfdGltZSk7XG4gICAgICAgIG5vZGUucGFyYW1ldGVycy5nZXRQYXJhbWV0ZXJOYW1lcygpLmZvckVhY2goZnVuY3Rpb24obikge1xuICAgICAgICAgICAgdmFyIHAgPSBub2RlLnBhcmFtZXRlcnMuZ2V0UGFyYW1ldGVyQnlOYW1lKG4pO1xuICAgICAgICAgICAgaWYgKHAuZW5hYmxlZCkge1xuICAgICAgICAgICAgICAgIHAuc3RhcnQocHJvZ3JhbV90aW1lLCBjb250ZXh0X3RpbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwbHVnaW5BdWRpb1N0b3Aobm9kZSkge1xuICAgICAgICB2YXIgY3QgPSBhdWRpb19jb250ZXh0LmN1cnJlbnRUaW1lO1xuICAgICAgICBub2RlLnN0b3AuY2FsbChub2RlLCBjdCk7XG4gICAgICAgIG5vZGUucGFyYW1ldGVycy5nZXRQYXJhbWV0ZXJOYW1lcygpLmZvckVhY2goZnVuY3Rpb24obikge1xuICAgICAgICAgICAgdmFyIHAgPSBub2RlLnBhcmFtZXRlcnMuZ2V0UGFyYW1ldGVyQnlOYW1lKG4pO1xuICAgICAgICAgICAgaWYgKHAuZW5hYmxlZCkge1xuICAgICAgICAgICAgICAgIHAuc3RvcChjdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRyaWdnZXJBdWRpb1N0YXJ0KHByb2dyYW1fdGltZSwgY29udGV4dF90aW1lKSB7XG4gICAgICAgIHBsdWdpbnNMaXN0LmZvckVhY2goZnVuY3Rpb24gKG4pIHtcbiAgICAgICAgICAgIHBsdWdpbkF1ZGlvU3RhcnQobi5ub2RlLCBwcm9ncmFtX3RpbWUsIGNvbnRleHRfdGltZSk7XG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdHJpZ2dlckF1ZGlvU3RvcCgpIHtcbiAgICAgICAgcGx1Z2luc0xpc3QuZm9yRWFjaChmdW5jdGlvbiAobikge1xuICAgICAgICAgICAgcGx1Z2luQXVkaW9TdG9wKG4ubm9kZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHZhciBzdWJGYWN0b3JpZXMgPSBbXSxcbiAgICBzeW50aGVzaXNlckhvc3RzID0gW10sXG4gICAgcGx1Z2luX3Byb3RvdHlwZXMgPSBbXSxcbiAgICBwbHVnaW5zTGlzdCA9IFtdLFxuICAgIGF1ZGlvU3RhcnRQcm9ncmFtVGltZSxcbiAgICBhdWRpb1N0YXJ0Q29udGV4dFRpbWUsXG4gICAgYXVkaW9TdGFydGVkID0gZmFsc2UsXG4gICAgcGx1Z2luVXNlckludGVyZmFjZU1lc3NhZ2VIdWJJbnRhbmNlID0gbmV3IFBsdWdpblVzZXJJbnRlcmZhY2VNZXNzYWdlSHViKHRoaXMpLFxuICAgIHN0b3JlcyA9IFtdO1xuXG4gICAgdGhpcy5wbHVnaW5Bc3NldHMgPSBuZXcgUGx1Z2luQXNzZXRNYW5hZ2VyKHRoaXMpO1xuXG4gICAgLypcbiAgICAgICAgdGhpcy5sb2FkUmVzb3VyY2UuIExvYWQgYSByZXNvdXJjZSBpbnRvIHRoZSBnbG9iYWwgbmFtZXNwYWNlXG5cbiAgICAgICAgQHBhcmFtIHJlc291cmNlT2JqZWN0OiBhIEpTIG9iamVjdCBob2xkaW5nIHRoZSBmb2xsb3dpbmcgcGFyYW1ldGVyczpcbiAgICAgICAgICAgIC51cmw6IFVSTCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgICAgICAgIC50ZXN0OiBmdW5jdGlvbiB0byBjYWxsLCByZXR1cm5zIHRydWUgaWYgcmVzb3VyY2UgYWxyZWFkeSBsb2FkZWQsIGZhbHNlIGlmIG5vdFxuICAgICovXG4gICAgdGhpcy5sb2FkUHJvdG90eXBlTW9kdWxlID0gZnVuY3Rpb24ocmVzb3VyY2VPYmplY3QsIG11c3RNb2R1bGUpIHtcbiAgICAgICAgdmFyIGZhY3RvcnkgPSB0aGlzO1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGdsb2JhbC5kZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBnbG9iYWwuZGVmaW5lLmFtZCkge1xuICAgICAgICAgICAgICAgIGdsb2JhbC5yZXF1aXJlKFtyZXNvdXJjZU9iamVjdC51cmxdLCBmdW5jdGlvbihmKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoZik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBnbG9iYWwubW9kdWxlID09IFwib2JqZWN0XCIgJiYgZ2xvYmFsLm1vZHVsZS5leHBvcnRzKSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShnbG9iYWwucmVxdWlyZShyZXNvdXJjZU9iamVjdC51cmwpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KFwiQ2Fubm90IGxvYWQgdXNpbmcgbW9kdWxhciBzeXN0ZW1zXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uKGV4ZWN1dGFibGUpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZXhlY3V0YWJsZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhY3RvcnkuYWRkUHJvdG90eXBlKGV4ZWN1dGFibGUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZWplY3QoXCJJcyBub3QgYSBtb2R1bGUgcGx1Z2luXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KS5jYXRjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmIChtdXN0TW9kdWxlID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KFwiQ2Fubm90IGxvYWQgdXNpbmcgbW9kdWxhciBzeXN0ZW1zXCIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCJDb3VsZCBub3QgbG9hZCB1c2luZyBtb2R1bGFyIHN5c3RlbXNcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhY3RvcnkubG9hZFBsdWdpblNjcmlwdChyZXNvdXJjZU9iamVjdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgdGhpcy5sb2FkUmVzb3VyY2UgPSBmdW5jdGlvbiAocmVzb3VyY2VPYmplY3QpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiByZXNvdXJjZU9iamVjdCAhPT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgICAgIHJlamVjdChcIkVycm9yXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodHlwZW9mIHJlc291cmNlT2JqZWN0LnVybCAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgIHJlamVjdChcInJlc291cmNlT2JqZWN0LnVybCBtdXN0IGJlIGEgc3RyaW5nXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodHlwZW9mIHJlc291cmNlT2JqZWN0LnRlc3QgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgIHJlamVjdChcInJlc291cmNlT2JqZWN0LnRlc3QgbXVzdCBiZSBhIGZ1bmN0aW9uXCIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHJlc291cmNlT2JqZWN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkudGhlbihmdW5jdGlvbihyZXNvdXJjZU9iamVjdCl7XG4gICAgICAgICAgICB2YXIgcmVzcG9uc2UgPSByZXNvdXJjZU9iamVjdC50ZXN0KCk7XG4gICAgICAgICAgICBpZiAocmVzcG9uc2UgIT09IGZhbHNlICYmIHJlc3BvbnNlICE9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgKFwicmVzb3VyY2VPYmplY3QudGVzdCBtdXN0IHJldHVybiB0cnVlIG9yIGZhbHNlXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFyZXNvdXJjZU9iamVjdC50eXBlKSB7XG4gICAgICAgICAgICAgICAgcmVzb3VyY2VPYmplY3QudHlwZSA9IFwiamF2YXNjcmlwdFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzb3VyY2VPYmplY3QudHlwZSA9IHJlc291cmNlT2JqZWN0LnR5cGUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgIHN3aXRjaCAocmVzb3VyY2VPYmplY3QudHlwZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJqYXZhc2NyaXB0XCI6XG4gICAgICAgICAgICAgICAgICAgIGlmICghcmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBsb2FkUmVzb3VyY2UocmVzb3VyY2VPYmplY3QpLnRoZW4oZnVuY3Rpb24gKHJlc291cmNlT2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiByZXNvdXJjZU9iamVjdC5yZXR1cm5PYmplY3QgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJldHVybk9iamVjdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5oYXNPd25Qcm9wZXJ0eShyZXNvdXJjZU9iamVjdC5yZXR1cm5PYmplY3QpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gd2luZG93W3Jlc291cmNlT2JqZWN0LnJldHVybk9iamVjdF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHJlc291cmNlT2JqZWN0LnJldHVybk9iamVjdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAod2luZG93Lmhhc093blByb3BlcnR5KHJlc291cmNlT2JqZWN0LnJldHVybk9iamVjdCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUod2luZG93W3Jlc291cmNlT2JqZWN0LnJldHVybk9iamVjdF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgKFwiSW52YWxpZCB0eXBlIFwiICsgU3RyaW5nKHJlc291cmNlT2JqZWN0LnR5cGUpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIHRoaXMubG9hZFBsdWdpblNjcmlwdCA9IGZ1bmN0aW9uIChyZXNvdXJjZU9iamVjdCkge1xuICAgICAgICBpZiAocmVzb3VyY2VPYmplY3QpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcmVzb3VyY2VPYmplY3QucmV0dXJuT2JqZWN0ICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgKFwicmVzb3VyY2VPYmplY3QucmV0dXJuT2JqZWN0IG11c3QgYmUgdGhlIG5hbWUgb2YgdGhlIHByb3RvdHlwZSBmdW5jdGlvblwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxvYWRSZXNvdXJjZShyZXNvdXJjZU9iamVjdCkudGhlbihmdW5jdGlvbiAocGx1Z2luKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWRkUHJvdG90eXBlKHBsdWdpbik7XG4gICAgICAgICAgICB9LmJpbmQodGhpcykpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHRoaXMuaW5qZWN0UHJvdG90eXBlID0gZnVuY3Rpb24ocHJvdG90eXBlRXhlY3V0YWJsZSkge1xuICAgICAgICBpZiAodHlwZW9mIHByb3RvdHlwZUV4ZWN1dGFibGUgIT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICB0aHJvdyhcIkludmFsaWQgZXhlY3V0YWJsZSBmdW5jdGlvblwiKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5hZGRQcm90b3R5cGUocHJvdG90eXBlRXhlY3V0YWJsZSk7XG4gICAgfTtcblxuICAgIHRoaXMuYWRkUHJvdG90eXBlID0gZnVuY3Rpb24gKHBsdWdpbl9wcm90bykge1xuICAgICAgICB2YXIgZmFjdG9yeSA9IHRoaXM7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcGx1Z2luX3Byb3RvICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICByZWplY3QoXCJUaGUgUHJvdG90eXBlIG11c3QgYmUgYSBmdW5jdGlvbiFcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgcGx1Z2luX3Byb3RvLnByb3RvdHlwZS5uYW1lICE9PSBcInN0cmluZ1wiIHx8IHBsdWdpbl9wcm90by5wcm90b3R5cGUubmFtZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICByZWplY3QoXCJNYWxmb3JtZWQgcGx1Z2luLiBOYW1lIG5vdCBkZWZpbmVkXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodHlwZW9mIHBsdWdpbl9wcm90by5wcm90b3R5cGUudmVyc2lvbiAhPT0gXCJzdHJpbmdcIiB8fCBwbHVnaW5fcHJvdG8ucHJvdG90eXBlLnZlcnNpb24ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KFwiTWFsZm9ybWVkIHBsdWdpbi4gVmVyc2lvbiBub3QgZGVmaW5lZFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiBwbHVnaW5fcHJvdG8ucHJvdG90eXBlLnVuaXF1ZUlEICE9PSBcInN0cmluZ1wiIHx8IHBsdWdpbl9wcm90by5wcm90b3R5cGUudW5pcXVlSUQubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KFwiTWFsZm9ybWVkIHBsdWdpbi4gdW5pcXVlSUQgbm90IGRlZmluZWRcIik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlc29sdmUocGx1Z2luX3Byb3RvKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkudGhlbihmdW5jdGlvbihwbHVnaW5fcHJvdG8pIHtcbiAgICAgICAgICAgIHZhciB0ZXN0T2JqID0ge1xuICAgICAgICAgICAgICAgICdwcm90byc6IHBsdWdpbl9wcm90byxcbiAgICAgICAgICAgICAgICAnbmFtZSc6IHBsdWdpbl9wcm90by5wcm90b3R5cGUubmFtZSxcbiAgICAgICAgICAgICAgICAndmVyc2lvbic6IHBsdWdpbl9wcm90by5wcm90b3R5cGUudmVyc2lvbixcbiAgICAgICAgICAgICAgICAndW5pcXVlSUQnOiBwbHVnaW5fcHJvdG8ucHJvdG90eXBlLnVuaXF1ZUlEXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdmFyIG9iaiA9IHBsdWdpbl9wcm90b3R5cGVzLmZpbmQoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgcGFyYW07XG4gICAgICAgICAgICAgICAgdmFyIG1hdGNoID0gMDtcbiAgICAgICAgICAgICAgICBmb3IgKHBhcmFtIGluIHRoaXMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVbcGFyYW1dID09PSB0aGlzW3BhcmFtXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2grKztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gbWF0Y2ggPT09IDQ7XG4gICAgICAgICAgICB9LCB0ZXN0T2JqKTtcbiAgICAgICAgICAgIGlmIChvYmopIHtcbiAgICAgICAgICAgICAgICB0aHJvdyAoXCJUaGUgcGx1Z2luIG11c3QgYmUgdW5pcXVlIVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9iaiA9IG5ldyBQbHVnaW5Qcm90b3R5cGUocGx1Z2luX3Byb3RvLCBmYWN0b3J5KTtcbiAgICAgICAgICAgIHBsdWdpbl9wcm90b3R5cGVzLnB1c2gob2JqKTtcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKG9iaiwge1xuICAgICAgICAgICAgICAgICdmYWN0b3J5Jzoge1xuICAgICAgICAgICAgICAgICAgICAndmFsdWUnOiBmYWN0b3J5XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gb2JqO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgdGhpcy5nZXRQcm90b3R5cGVzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcGx1Z2luX3Byb3RvdHlwZXM7XG4gICAgfTtcblxuICAgIHRoaXMuZ2V0QXVkaW9QbHVnaW5Qcm90b3R5cGVzID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBwbHVnaW5fcHJvdG90eXBlcy5maWx0ZXIoZnVuY3Rpb24ocHJvdG8pIHtcbiAgICAgICAgICAgIHJldHVybiBwcm90by5oYXNNaWRpSW5wdXQgPT0gZmFsc2UgJiYgcHJvdG8uaGFzTWlkaU91dHB1dCA9PSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIHRoaXMuZ2V0TWlkaVN5bnRoUHJvdG90eXBlcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gcGx1Z2luX3Byb3RvdHlwZXMuZmlsdGVyKGZ1bmN0aW9uKHByb3RvKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvdG8uaGFzTWlkaUlucHV0ID09IHRydWUgJiYgcHJvdG8uaGFzTWlkaU91dHB1dCA9PSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIHRoaXMuZ2V0TWlkaVBsdWdpblByb3RvdHlwZXMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHBsdWdpbl9wcm90b3R5cGVzLmZpbHRlcihmdW5jdGlvbihwcm90bykge1xuICAgICAgICAgICAgcmV0dXJuIHByb3RvLmhhc01pZGlJbnB1dCA9PSB0cnVlICYmIHByb3RvLmhhc01pZGlPdXRwdXQgPT0gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIHRoaXMuZ2V0QWxsUGx1Z2lucyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHBsdWdpbnNMaXN0O1xuICAgIH07XG5cbiAgICB0aGlzLmdldEFsbFBsdWdpbnNPYmplY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBvYmogPSB7XG4gICAgICAgICAgICAgICAgJ2ZhY3RvcnknOiB0aGlzLFxuICAgICAgICAgICAgICAgICdzdWJGYWN0b3JpZXMnOiBbXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGk7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBzdWJGYWN0b3JpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIG9iai5zdWJGYWN0b3JpZXMucHVzaCh7XG4gICAgICAgICAgICAgICAgJ3N1YkZhY3RvcnknOiBzdWJGYWN0b3JpZXNbaV0sXG4gICAgICAgICAgICAgICAgJ3BsdWdpbnMnOiBzdWJGYWN0b3JpZXNbaV0uZ2V0UGx1Z2lucygpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb2JqO1xuICAgIH07XG5cbiAgICB0aGlzLmNyZWF0ZVN1YkZhY3RvcnkgPSBmdW5jdGlvbihjaGFpblN0YXJ0LCBjaGFpblN0b3ApIHtcbiAgICAgICAgY29uc29sZS53YXJuKFwiREVQUkVDQVRFRCAtIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBkZXByZWNhdGVkIGluIGZhdm91ciBvZiBcXFwiY3JlYXRlQXVkaW9QbHVnaW5DaGFpbk1hbmFnZXJcXFwiXCIpO1xuICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVBdWRpb1BsdWdpbkNoYWluTWFuYWdlcihjaGFpblN0YXJ0LCBjaGFpblN0b3ApO1xuICAgIH07XG5cbiAgICB0aGlzLmRlc3Ryb3lTdWJGYWN0b3J5ID0gZnVuY3Rpb24oY2hhaW5TdGFydCwgY2hhaW5TdG9wKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcIkRFUFJFQ0FURUQgLSBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgZGVwcmVjYXRlZCBpbiBmYXZvdXIgb2YgXFxcImRlc3Ryb3lBdWRpb1BsdWdpbkNoYWluTWFuYWdlclxcXCJcIik7XG4gICAgICAgIHJldHVybiB0aGlzLmRlc3Ryb3lBdWRpb1BsdWdpbkNoYWluTWFuYWdlcihjaGFpblN0YXJ0LCBjaGFpblN0b3ApO1xuICAgIH07XG5cbiAgICB0aGlzLmNyZWF0ZUF1ZGlvUGx1Z2luQ2hhaW5NYW5hZ2VyID0gZnVuY3Rpb24gKGNoYWluU3RhcnQsIGNoYWluU3RvcCkge1xuICAgICAgICB2YXIgbm9kZSA9IG5ldyBBdWRpb1BsdWdpbkNoYWluTWFuYWdlcih0aGlzLCBjaGFpblN0YXJ0LCBjaGFpblN0b3ApO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhub2RlLCB7XG4gICAgICAgICAgICAnU2Vzc2lvbkRhdGEnOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IHRoaXMuU2Vzc2lvbkRhdGFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAnVXNlckRhdGEnOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IHRoaXMuVXNlckRhdGFcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHN1YkZhY3Rvcmllcy5wdXNoKG5vZGUpO1xuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9O1xuXG4gICAgdGhpcy5kdXBsaWNhdGVBdWRpb1BsdWdpbkNoYWluTWFuYWdlciA9IGZ1bmN0aW9uKHNvdXJjZUNoYWluTWFuYWdlciwgY2hhaW5TdGFydCwgY2hhaW5TdG9wKSB7XG4gICAgICAgIHZhciBub2RlID0gdGhpcy5jcmVhdGVBdWRpb1BsdWdpbkNoYWluTWFuYWdlcihjaGFpblN0YXJ0LCBjaGFpblN0b3ApO1xuICAgICAgICB2YXIgcHJvbWlzZUNoYWluID0gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgIHNvdXJjZUNoYWluTWFuYWdlci5nZXRQbHVnaW5zKCkuZm9yRWFjaChmdW5jdGlvbihwbHVnaW5fb2JqZWN0KSB7XG4gICAgICAgICAgICBwcm9taXNlQ2hhaW4gPSBwcm9taXNlQ2hhaW4udGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbm9kZS5jcmVhdGVQbHVnaW4ocGx1Z2luX29iamVjdC5wcm90b3R5cGVPYmplY3QpXG4gICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24obmV3UGx1Z2luKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld1BsdWdpbi5ub2RlLnBhcmFtZXRlcnMuc2V0UGFyYW1ldGVyc0J5T2JqZWN0KHBsdWdpbl9vYmplY3Qubm9kZS5wYXJhbWV0ZXJzLmdldFBhcmFtZXRlck9iamVjdCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBwcm9taXNlQ2hhaW4udGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiBub2RlO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgdGhpcy5kZXN0cm95QXVkaW9QbHVnaW5DaGFpbk1hbmFnZXIgPSBmdW5jdGlvbiAoU3ViRmFjdG9yeSkge1xuICAgICAgICB2YXIgaW5kZXggPSBzdWJGYWN0b3JpZXMuZmluZEluZGV4KGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgICBpZiAoZWxlbWVudCA9PT0gdGhpcykge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9LCBTdWJGYWN0b3J5KTtcbiAgICAgICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgICAgICAgIHN1YkZhY3Rvcmllcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgU3ViRmFjdG9yeS5kZXN0cm95KCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgdGhpcy5jcmVhdGVNaWRpU3ludGhlc2lzZXJIb3N0ID0gZnVuY3Rpb24oZmFjdG9yeSkge1xuICAgICAgICBpZiAoZmFjdG9yeSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBmYWN0b3J5ID0gdGhpcztcbiAgICAgICAgfVxuICAgICAgICB2YXIgaG9zdCA9IG5ldyBNaWRpU3ludGhlc2lzZXJIb3N0KGZhY3RvcnkpO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhob3N0LCB7XG4gICAgICAgICAgICAnU2Vzc2lvbkRhdGEnOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IHRoaXMuU2Vzc2lvbkRhdGFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAnVXNlckRhdGEnOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IHRoaXMuVXNlckRhdGFcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHN5bnRoZXNpc2VySG9zdHMucHVzaChob3N0KTtcbiAgICAgICAgcmV0dXJuIGhvc3Q7XG4gICAgfTtcblxuICAgIHRoaXMuZGVzdHJveU1pZGlTeW50aGVzaXNlckhvc3QgPSBmdW5jdGlvbiAoaG9zdCkge1xuICAgICAgICB2YXIgaW5kZXggPSBzeW50aGVzaXNlckhvc3RzLmZpbmRJbmRleChmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQgPT09IHRoaXMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSwgaG9zdCk7XG4gICAgICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICAgICAgICBzeW50aGVzaXNlckhvc3RzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICBob3N0LmRlc3Ryb3koKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB0aGlzLnJlZ2lzdGVyUGx1Z2luSW5zdGFuY2UgPSBmdW5jdGlvbiAoaW5zdGFuY2UpIHtcbiAgICAgICAgaWYgKHBsdWdpbnNMaXN0LmZpbmQoZnVuY3Rpb24gKHApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcCA9PT0gdGhpcztcbiAgICAgICAgICAgIH0sIGluc3RhbmNlKSkge1xuICAgICAgICAgICAgdGhyb3cgKFwiUGx1Z2luIEluc3RhbmNlIG5vdCB1bmlxdWVcIik7XG4gICAgICAgIH1cbiAgICAgICAgcGx1Z2luc0xpc3QucHVzaChpbnN0YW5jZSk7XG4gICAgICAgIGlmIChhdWRpb1N0YXJ0ZWQpIHtcbiAgICAgICAgICAgIHZhciBjb250ZXh0X3RpbWUgPSBhdWRpb19jb250ZXh0LmN1cnJlbnRUaW1lO1xuICAgICAgICAgICAgdmFyIHByb2dyYW1fdGltZSA9IHRoaXMuZ2V0Q3VycmVudFByb2dyYW1UaW1lKCk7XG4gICAgICAgICAgICBwbHVnaW5BdWRpb1N0YXJ0KGluc3RhbmNlLm5vZGUsIHByb2dyYW1fdGltZSwgY29udGV4dF90aW1lKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xuXG4gICAgdGhpcy5kZWxldGVQbHVnaW4gPSBmdW5jdGlvbiAocGx1Z2luKSB7XG4gICAgICAgIHZhciBpbmRleCA9IHBsdWdpbnNMaXN0LmluZGV4T2YocGx1Z2luKTtcbiAgICAgICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgICAgICAgIHZhciBwID0gcGx1Z2luc0xpc3Quc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIHBbMF0uZGVsZXRlKCk7XG4gICAgICAgICAgICBwWzBdLm5vZGUuZXh0ZXJuYWxJbnRlcmZhY2UuY2xvc2VXaW5kb3dzKCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgdGhpcy5nZXRDdXJyZW50UHJvZ3JhbVRpbWUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKGF1ZGlvU3RhcnRlZCkge1xuICAgICAgICAgICAgcmV0dXJuIGF1ZGlvX2NvbnRleHQuY3VycmVudFRpbWUgLSBhdWRpb1N0YXJ0Q29udGV4dFRpbWUgKyBhdWRpb1N0YXJ0UHJvZ3JhbVRpbWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gYXVkaW9TdGFydFByb2dyYW1UaW1lO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHRoaXMuc2V0Q3VycmVudFByb2dyYW1UaW1lID0gZnVuY3Rpb24odGltZSkge1xuICAgICAgICBpZiAoYXVkaW9TdGFydGVkKSB7XG4gICAgICAgICAgICB0aHJvdyhcIk11c3Qgc3RvcCBwbGF5YmFjayB0byBzZXQgdGhlIGN1cnJlbnQgcHJvZ3JhbSB0aW1lXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgdGltZSA9PSBcIm51bWJlclwiICYmIHRpbWUgPj0gMCkge1xuICAgICAgICAgICAgYXVkaW9TdGFydFByb2dyYW1UaW1lID0gdGltZTtcbiAgICAgICAgICAgIHRoaXMuUGx1Z2luR1VJLnBvbGxBbGxQbHVnaW5zKCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgdGhpcy5hdWRpb1N0YXJ0ID0gZnVuY3Rpb24gKHByb2dyYW1fdGltZSwgY29udGV4dF90aW1lKSB7XG4gICAgICAgIGlmIChjb250ZXh0X3RpbWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY29udGV4dF90aW1lID0gYXVkaW9fY29udGV4dC5jdXJyZW50VGltZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvZ3JhbV90aW1lID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHByb2dyYW1fdGltZSA9IDA7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJBc3N1bWluZyBzdGFydCB0aW1lIGF0IDBcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFhdWRpb1N0YXJ0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0Q3VycmVudFByb2dyYW1UaW1lKHByb2dyYW1fdGltZSk7XG4gICAgICAgICAgICBhdWRpb1N0YXJ0Q29udGV4dFRpbWUgPSBjb250ZXh0X3RpbWU7XG4gICAgICAgICAgICB0cmlnZ2VyQXVkaW9TdGFydChwcm9ncmFtX3RpbWUsIGNvbnRleHRfdGltZSk7XG4gICAgICAgICAgICBhdWRpb1N0YXJ0ZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfTtcbiAgICB0aGlzLmF1ZGlvU3RvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGF1ZGlvU3RhcnRlZCkge1xuICAgICAgICAgICAgdHJpZ2dlckF1ZGlvU3RvcCgpO1xuICAgICAgICAgICAgYXVkaW9TdGFydGVkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgdGhpcy5jcmVhdGVTdG9yZSA9IGZ1bmN0aW9uIChzdG9yZU5hbWUpIHtcbiAgICAgICAgdmFyIG5vZGUgPSBuZXcgTGlua2VkU3RvcmUoc3RvcmVOYW1lKTtcbiAgICAgICAgc3RvcmVzLnB1c2gobm9kZSk7XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH07XG5cbiAgICB0aGlzLmdldFN0b3JlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHN0b3JlcztcbiAgICB9O1xuXG4gICAgdGhpcy5maW5kU3RvcmUgPSBmdW5jdGlvbiAoc3RvcmVOYW1lKSB7XG4gICAgICAgIHJldHVybiBzdG9yZXMuZmluZChmdW5jdGlvbiAoYSkge1xuICAgICAgICAgICAgcmV0dXJuIGEubmFtZSA9PT0gc3RvcmVOYW1lO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgLy8gQnVpbGQgdGhlIGRlZmF1bHQgU3RvcmVzXG4gICAgdGhpcy5TZXNzaW9uRGF0YSA9IG5ldyBMaW5rZWRTdG9yZShcIlNlc3Npb25cIik7XG4gICAgdGhpcy5Vc2VyRGF0YSA9IG5ldyBMaW5rZWRTdG9yZShcIlVzZXJcIik7XG5cbiAgICB0aGlzLkZlYXR1cmVNYXAgPSBuZXcgRmVhdHVyZU1hcCgpO1xuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMuRmVhdHVyZU1hcCwgXCJmYWN0b3J5XCIsIHtcbiAgICAgICAgJ3ZhbHVlJzogdGhpc1xuICAgIH0pO1xuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgICBcImNvbnRleHRcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBhdWRpb19jb250ZXh0XG4gICAgICAgIH0sXG4gICAgICAgIFwiaGFzQXVkaW9TdGFydGVkXCI6IHtcbiAgICAgICAgICAgIFwiZ2V0XCI6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBhdWRpb1N0YXJ0ZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwicGx1Z2luUm9vdFVSTFwiOiB7XG4gICAgICAgICAgICBcImdldFwiOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJvb3RVUkw7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJzZXRcIjogZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcm9vdFVSTCA9IHQ7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByb290VVJMO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aHJvdyAoXCJDYW5ub3Qgc2V0IHJvb3QgVVJMIHdpdGhvdXQgYSBzdHJpbmdcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiY3JlYXRlRmFjdG9yeUNvcHlcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjb3B5RmFjdG9yeSh0aGlzLCBjb250ZXh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJzdWJGYWN0b3JpZXNcIjoge1xuICAgICAgICAgICAgXCJnZXRcIjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN1YkZhY3RvcmllcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJQbHVnaW5HVUlcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBwbHVnaW5Vc2VySW50ZXJmYWNlTWVzc2FnZUh1YkludGFuY2VcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBQbHVnaW5GYWN0b3J5O1xuIiwiLyoganNoaW50IGVzdmVyc2lvbjogNiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGx1Z2luSW5zdGFuY2UocGx1Z2luX25vZGUpIHtcbiAgICB0aGlzLm5leHRfbm9kZSA9IHVuZGVmaW5lZDtcbiAgICB2YXIgX2J5cGFzc2VkID0gZmFsc2U7XG4gICAgdmFyIGV2ID0gbmV3IEV2ZW50VGFyZ2V0KCk7XG4gICAgdmFyIF9pbiA9IHBsdWdpbl9ub2RlLmNvbnRleHQuY3JlYXRlR2FpbigpLFxuICAgICAgICBfb3V0ID0gcGx1Z2luX25vZGUuY29udGV4dC5jcmVhdGVHYWluKCk7XG5cbiAgICBfaW4uY29ubmVjdChwbHVnaW5fbm9kZS5nZXRJbnB1dHMoKVswXSk7XG4gICAgcGx1Z2luX25vZGUuZ2V0T3V0cHV0cygpWzBdLmNvbm5lY3QoX291dCk7XG4gICAgcGx1Z2luX25vZGUuYWRkRXZlbnRMaXN0ZW5lcih0aGlzKTtcblxuICAgIGZ1bmN0aW9uIGJ5cGFzc0VuYWJsZSgpIHtcbiAgICAgICAgX2luLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgX2luLmNvbm5lY3QoX291dCk7XG4gICAgICAgIF9ieXBhc3NlZCA9IHRydWU7XG4gICAgICAgIGlmIChwbHVnaW5fbm9kZS5wcm9jZXNzaW5nRGVsYXlBc1NhbXBsZXMgIT0gMCkge1xuICAgICAgICAgICAgZXYuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJhbHRlcmRlbGF5XCIpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGJ5cGFzc0Rpc2FibGUoKSB7XG4gICAgICAgIF9pbi5kaXNjb25uZWN0KCk7XG4gICAgICAgIF9pbi5jb25uZWN0KHBsdWdpbl9ub2RlLmdldElucHV0cygpWzBdKTtcbiAgICAgICAgX2J5cGFzc2VkID0gZmFsc2U7XG4gICAgICAgIGlmIChwbHVnaW5fbm9kZS5wcm9jZXNzaW5nRGVsYXlBc1NhbXBsZXMgIT0gMCkge1xuICAgICAgICAgICAgZXYuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJhbHRlcmRlbGF5XCIpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuYnlwYXNzID0gZnVuY3Rpb24gKHN0YXRlKSB7XG4gICAgICAgIHN0YXRlID0gKHN0YXRlID09PSB0cnVlKTtcbiAgICAgICAgaWYgKHN0YXRlID09PSBfYnlwYXNzZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBfYnlwYXNzZWQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0YXRlKSB7XG4gICAgICAgICAgICBieXBhc3NFbmFibGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJ5cGFzc0Rpc2FibGUoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX2J5cGFzc2VkO1xuICAgIH07XG5cbiAgICB0aGlzLmlzQnlwYXNzZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfYnlwYXNzZWQ7XG4gICAgfTtcblxuICAgIHRoaXMucmVjb25uZWN0ID0gZnVuY3Rpb24gKG5ld19uZXh0KSB7XG4gICAgICAgIHRoaXMuY29ubmVjdChuZXdfbmV4dCk7XG4gICAgfTtcblxuICAgIHRoaXMuY29ubmVjdCA9IGZ1bmN0aW9uIChuZXdfbmV4dCkge1xuICAgICAgICBpZiAodGhpcy5uZXh0X25vZGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5kaXNjb25uZWN0KCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5ld19uZXh0ICE9PSB1bmRlZmluZWQgJiYgbmV3X25leHQuaW5wdXQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5uZXh0X25vZGUgPSBuZXdfbmV4dDtcbiAgICAgICAgICAgIF9vdXQuY29ubmVjdCh0aGlzLm5leHRfbm9kZS5pbnB1dCk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcblxuICAgIHRoaXMuZGlzY29ubmVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMubmV4dF9ub2RlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIF9vdXQuZGlzY29ubmVjdCh0aGlzLm5leHRfbm9kZS5pbnB1dCk7XG4gICAgICAgICAgICB0aGlzLm5leHRfbm9kZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB0aGlzLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHBsdWdpbl9ub2RlLmRlc3Ryb3koKTtcbiAgICB9O1xuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgICBcImhhbmRsZUV2ZW50XCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgIGV2LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KGUudHlwZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImFkZEV2ZW50TGlzdGVuZXJcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbihhLGIsYykge1xuICAgICAgICAgICAgICAgIHJldHVybiBldi5hZGRFdmVudExpc3RlbmVyKGEsYixjKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJyZW1vdmVFdmVudExpc3RlbmVyXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24oYSxiLGMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZXYucmVtb3ZlRXZlbnRMaXN0ZW5lcihhLGIsYyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgICdub2RlJzoge1xuICAgICAgICAgICAgJ3ZhbHVlJzogcGx1Z2luX25vZGVcbiAgICAgICAgfSxcbiAgICAgICAgJ2lucHV0Jzoge1xuICAgICAgICAgICAgJ2dldCc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX2luO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAnb3V0cHV0Jzoge1xuICAgICAgICAgICAgJ2dldCc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX291dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgJ2J5cGFzc2VkJzoge1xuICAgICAgICAgICAgJ2dldCc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX2J5cGFzc2VkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG4iLCIvKiBqc2hpbnQgZXN2ZXJzaW9uOiA2ICovXG5pbXBvcnQgUGx1Z2luSW5zdGFuY2UgZnJvbSBcIi4vUGx1Z2luSW5zdGFuY2VcIjtcbmltcG9ydCBNaWRpU3ludGhlc2lzSW5zdGFuY2UgZnJvbSBcIi4vTWlkaVN5bnRoZXNpc0luc3RhbmNlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBsdWdpblByb3RvdHlwZShwcm90bywgZmFjdG9yeSkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XG4gICAgICAgICduYW1lJzoge1xuICAgICAgICAgICAgdmFsdWU6IHByb3RvLnByb3RvdHlwZS5uYW1lXG4gICAgICAgIH0sXG4gICAgICAgICdwcm90byc6IHtcbiAgICAgICAgICAgIHZhbHVlOiBwcm90b1xuICAgICAgICB9LFxuICAgICAgICAndmVyc2lvbic6IHtcbiAgICAgICAgICAgIHZhbHVlOiBwcm90by5wcm90b3R5cGUudmVyc2lvblxuICAgICAgICB9LFxuICAgICAgICAndW5pcXVlSUQnOiB7XG4gICAgICAgICAgICB2YWx1ZTogcHJvdG8ucHJvdG90eXBlLnVuaXF1ZUlEXG4gICAgICAgIH0sXG4gICAgICAgICdoYXNNaWRpSW5wdXQnOiB7XG4gICAgICAgICAgICB2YWx1ZTogcHJvdG8ucHJvdG90eXBlLmhhc01pZGlJbnB1dCB8fCBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICAnaGFzTWlkaU91dHB1dCc6IHtcbiAgICAgICAgICAgIHZhbHVlOiBwcm90by5wcm90b3R5cGUuaGFzTWlkaU91dHB1dCB8fCBmYWxzZVxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLmNyZWF0ZVBsdWdpbkluc3RhbmNlID0gYXN5bmMgZnVuY3Rpb24ob3duZXIsIGFzeW5jKSB7XG4gICAgICAgIHZhciBwID0gY3JlYXRlUGx1Z2luSW5zdGFuY2Uob3duZXIpO1xuICAgICAgICBpZiAoYXN5bmMgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHJldHVybiBwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYXdhaXQgcDtcbiAgICAgICAgICAgIHJldHVybiBwO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGNyZWF0ZVBsdWdpbkluc3RhbmNlKG93bmVyKSB7XG4gICAgICAgIHJldHVybiB3YWl0VW50aWxSZWFkeSgpLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICAgICAgaWYgKCFjaGVja0lzUmVhZHkoKSkge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKFwiUGx1Z2luIG5vdCByZWFkeVwiKSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShuZXcgcHJvdG8oZmFjdG9yeSwgb3duZXIpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uKHBsdWdpbikge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCl7XG4gICAgICAgICAgICAgICAgaWYgKHBsdWdpbi5pbml0aWFsaXNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwbHVnaW4uaW5pdGlhbGlzZSgpLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHBsdWdpbik7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocGx1Z2luKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSkudGhlbihmdW5jdGlvbihwbHVnaW4pIHtcbiAgICAgICAgICAgIHZhciBub2RlO1xuICAgICAgICAgICAgaWYgKHBsdWdpbi5oYXNNaWRpSW5wdXQgIT09IHRydWUgJiYgcGx1Z2luLmhhc01pZGlPdXRwdXQgIT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBub2RlID0gbmV3IFBsdWdpbkluc3RhbmNlKHBsdWdpbik7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHBsdWdpbi5oYXNNaWRpSW5wdXQgPT09IHRydWUgJiYgcGx1Z2luLmhhc01pZGlPdXRwdXQgIT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBub2RlID0gbmV3IE1pZGlTeW50aGVzaXNJbnN0YW5jZShwbHVnaW4pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aHJvdyhcIk5vIEluc3RhbmNlIEhvbGRlciBBdmFpbGFibGUhXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMocGx1Z2luLCB7XG4gICAgICAgICAgICAgICAgJ3BsdWdpbkluc3RhbmNlJzoge1xuICAgICAgICAgICAgICAgICAgICAndmFsdWUnOiBub2RlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAncHJvdG90eXBlT2JqZWN0Jzoge1xuICAgICAgICAgICAgICAgICAgICAndmFsdWUnOiBzZWxmXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAnbmFtZSc6IHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHByb3RvLnByb3RvdHlwZS5uYW1lXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAndmVyc2lvbic6IHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHByb3RvLnByb3RvdHlwZS52ZXJzaW9uXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAndW5pcXVlSUQnOiB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBwcm90by5wcm90b3R5cGUudW5pcXVlSURcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICdTZXNpb25EYXRhJzoge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogZmFjdG9yeS5TZXNzaW9uRGF0YVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgJ1VzZXJEYXRhJzoge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogZmFjdG9yeS5Vc2VyRGF0YVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMobm9kZSwge1xuICAgICAgICAgICAgICAgIFwicHJvdG90eXBlT2JqZWN0XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgJ3ZhbHVlJzogc2VsZlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCJleHRlcm5hbEludGVyZmFjZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgICd2YWx1ZSc6IHBsdWdpbi5leHRlcm5hbEludGVyZmFjZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZmFjdG9yeS5yZWdpc3RlclBsdWdpbkluc3RhbmNlKG5vZGUpO1xuICAgICAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxvYWRSZXNvdXJjZUNoYWluKHJlc291cmNlT2JqZWN0LCBwKSB7XG4gICAgICAgIGlmICghcCkge1xuICAgICAgICAgICAgdmFyIGsgPSBsb2FkUmVzb3VyY2UocmVzb3VyY2VPYmplY3QpO1xuICAgICAgICAgICAgay50aGVuKGZ1bmN0aW9uIChyZXNvdXJjZU9iamVjdCkge1xuICAgICAgICAgICAgICAgIGlmIChyZXNvdXJjZU9iamVjdC5yZXNvdXJjZXMgIT09IHVuZGVmaW5lZCAmJiByZXNvdXJjZU9iamVjdC5yZXNvdXJjZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlc291cmNlT2JqZWN0LnJlc291cmNlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgayA9IGxvYWRSZXNvdXJjZUNoYWluKHJlc291cmNlT2JqZWN0LnJlc291cmNlc1tpXSwgayk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBrO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHAudGhlbihsb2FkUmVzb3VyY2UocmVzb3VyY2VPYmplY3QpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxvYWRTdHlsZXNoZWV0KHVybCkge1xuICAgICAgICB2YXIgY3NzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG4gICAgICAgIGNzcy5zZXRBdHRyaWJ1dGUoXCJyZWxcIiwgXCJzdHlsZXNoZWV0XCIpO1xuICAgICAgICBjc3Muc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHQvY3NzXCIpO1xuICAgICAgICBjc3Muc2V0QXR0cmlidXRlKFwiaHJlZlwiLCB1cmwpO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF0uYXBwZW5kQ2hpbGQoY3NzKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZWN1cnNpdmVHZXRUZXN0KHJlc291cmNlT2JqZWN0KSB7XG4gICAgICAgIGlmIChyZXNvdXJjZU9iamVjdC5oYXNPd25Qcm9wZXJ0eShcImxlbmd0aFwiKSAmJiByZXNvdXJjZU9iamVjdC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVjdXJzaXZlR2V0VGVzdChyZXNvdXJjZU9iamVjdFtyZXNvdXJjZU9iamVjdC5sZW5ndGggLSAxXSk7XG4gICAgICAgIH0gZWxzZSBpZiAocmVzb3VyY2VPYmplY3QuaGFzT3duUHJvcGVydHkoXCJyZXNvdXJjZXNcIikpIHtcbiAgICAgICAgICAgIHJldHVybiByZWN1cnNpdmVHZXRUZXN0KHJlc291cmNlT2JqZWN0LnJlc291cmNlcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzb3VyY2VPYmplY3QudGVzdDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZhciByZXNvdXJjZVByb21pc2VzID0gW107XG4gICAgaWYgKHByb3RvLnByb3RvdHlwZS5yZXNvdXJjZXMpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm90by5wcm90b3R5cGUucmVzb3VyY2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgcmVzb3VyY2UgPSBwcm90by5wcm90b3R5cGUucmVzb3VyY2VzW2ldO1xuICAgICAgICAgICAgcmVzb3VyY2UudHlwZSA9IHJlc291cmNlLnR5cGUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgIHN3aXRjaCAocmVzb3VyY2UudHlwZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJjc3NcIjpcbiAgICAgICAgICAgICAgICAgICAgbG9hZFN0eWxlc2hlZXQocmVzb3VyY2UudXJsKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcImphdmFzY3JpcHRcIjpcbiAgICAgICAgICAgICAgICAgICAgdmFyIG9iamVjdCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdwcm9taXNlJzogbG9hZFJlc291cmNlQ2hhaW4ocmVzb3VyY2UpLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3N0YXRlJzogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICdjb21wbGV0ZSc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlID0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAndGVzdCc6IHJlY3Vyc2l2ZUdldFRlc3QocmVzb3VyY2UpXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIG9iamVjdC5wcm9taXNlLnRoZW4ob2JqZWN0LmNvbXBsZXRlLmJpbmQob2JqZWN0KSk7XG4gICAgICAgICAgICAgICAgICAgIHJlc291cmNlUHJvbWlzZXMucHVzaChvYmplY3QpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICB0aHJvdyAoXCJDb3VsZCBub3QgbG9hZCBcIiArIHJlc291cmNlLnVybCArIFwiLCBpbnZhbGlkIHJlc291cmNlLnR5cGVcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmdldFJlc291cmNlUHJvbWlzZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiByZXNvdXJjZVByb21pc2VzO1xuICAgIH07XG4gICAgZnVuY3Rpb24gY2hlY2tJc1JlYWR5KCkge1xuICAgICAgICB2YXIgc3RhdGUgPSB0cnVlO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlc291cmNlUHJvbWlzZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChyZXNvdXJjZVByb21pc2VzW2ldLnN0YXRlICE9PSAxIHx8ICFyZXNvdXJjZVByb21pc2VzW2ldLnRlc3QoKSkge1xuICAgICAgICAgICAgICAgIHN0YXRlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH07XG4gICAgZnVuY3Rpb24gd2FpdFVudGlsUmVhZHkoKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLmFsbChyZXNvdXJjZVByb21pc2VzKTtcbiAgICB9XG59XG4iLCIvKiBqc2hpbnQgZXN2ZXJzaW9uOiA2ICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBsdWdpblVzZXJJbnRlcmZhY2VNZXNzYWdlSHViKGZhY3Rvcnkpe1xuICAgIGZ1bmN0aW9uIGJ1aWxkUGx1Z2luSW50ZXJmYWNlKHBsdWdpbl9vYmplY3QsIGludGVyZmFjZV9vYmplY3QpIHtcbiAgICAgICAgdmFyIGlmcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpZnJhbWVcIik7XG4gICAgICAgIGlmcmFtZS5zcmMgPSBpbnRlcmZhY2Vfb2JqZWN0LnNyYztcbiAgICAgICAgaWYgKGludGVyZmFjZV9vYmplY3Qud2lkdGgpIHtcbiAgICAgICAgICAgIGlmcmFtZS53aWR0aCA9IGludGVyZmFjZV9vYmplY3Qud2lkdGg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGludGVyZmFjZV9vYmplY3QuaGVpZ2h0KSB7XG4gICAgICAgICAgICBpZnJhbWUuaGVpZ2h0ID0gaW50ZXJmYWNlX29iamVjdC5oZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgaWZyYW1lLnN0eWxlLmJvcmRlciA9IFwiMFwiO1xuICAgICAgICAvL2lmcmFtZS5jb250ZW50V2luZG93LnBsdWdpbkluc3RhbmNlID0gcGx1Z2luX29iamVjdDtcbiAgICAgICAgcmV0dXJuIGlmcmFtZTtcbiAgICB9XG4gICAgZnVuY3Rpb24gc3Bhd25QbHVnaW5XaW5kb3cocGx1Z2luX29iamVjdCwgaW50ZXJmYWNlX29iamVjdCwgb3B0cykge1xuICAgICAgICB2YXIgdyA9IHdpbmRvdy5vcGVuKGludGVyZmFjZV9vYmplY3Quc3JjLHBsdWdpbl9vYmplY3QubmFtZSxvcHRzKTtcbiAgICAgICAgcGx1Z2luX29iamVjdC5leHRlcm5hbEludGVyZmFjZS5yZWdpc3RlcldpbmRvdyh3KTtcbiAgICAgICAgcmV0dXJuIHc7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHNldERlZmF1bHRJbnRlcmZhY2UodXJsLCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIGRlZmF1bHRfaW50ZXJmYWNlID0ge1xuICAgICAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgICAgICB3aWR0aDogd2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQ6IGhlaWdodFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gZGVmYXVsdF9pbnRlcmZhY2U7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHBvbGxBbGxQbHVnaW5zKCkge1xuICAgICAgICBmYWN0b3J5LmdldEFsbFBsdWdpbnMoKS5mb3JFYWNoKGZ1bmN0aW9uKHBsdWdpbikge1xuICAgICAgICAgICAgcGx1Z2luLm5vZGUuZXh0ZXJuYWxJbnRlcmZhY2UudXBkYXRlSW50ZXJmYWNlcyh0cnVlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdmFyIGxpc3RlbmVyID0gZmFsc2U7XG4gICAgdmFyIGRlZmF1bHRfaW50ZXJmYWNlID0ge1xuICAgICAgICBzcmM6IFwianNhcF9kZWZhdWx0Lmh0bWxcIlxuICAgIH07XG5cbiAgICByZXR1cm4gT2JqZWN0LmNyZWF0ZSh7XG4gICAgICAgIFwic2V0RGVmYXVsdEludGVyZmFjZVwiOiBzZXREZWZhdWx0SW50ZXJmYWNlLFxuICAgICAgICBcImJ1aWxkUGx1Z2luSW50ZXJmYWNlXCI6YnVpbGRQbHVnaW5JbnRlcmZhY2UsXG4gICAgICAgIFwic3Bhd25QbHVnaW5XaW5kb3dcIjogc3Bhd25QbHVnaW5XaW5kb3csXG4gICAgICAgIFwicG9sbEFsbFBsdWdpbnNcIjogcG9sbEFsbFBsdWdpbnNcbiAgICB9KTtcbn1cbiIsIi8qZ2xvYmFscyBkb2N1bWVudCAqL1xuLyplc2xpbnQtZW52IGJyb3dzZXIgKi9cbi8qIGpzaGludCBlc3ZlcnNpb246IDYgKi9cblxudmFyIExpbmtlZFN0b3JlID0gZnVuY3Rpb24gKHN0b3JlTmFtZSkge1xuICAgIC8vIFN0b3JlIGZvciB0aGUgc2VtYW50aWMgdGVybXMsIGVhY2ggc3RvcmUgaG9sZHMgaXRzIG93biBkYXRhIHRyZWVcbiAgICAvLyBUZXJtcyBhcmUgYWRkZWQgYXMga2V5L3ZhbHVlIHBhcmlzIHRvIGEgcm9vdCBub2RlXG4gICAgdmFyIGV0ID0gbmV3IEV2ZW50VGFyZ2V0KCk7XG4gICAgdmFyIHJvb3QgPSB7fTtcblxuICAgIGZ1bmN0aW9uIG9iamVjdFRvWE1MKG9iaiwgcm9vdCwgZG9jKSB7XG4gICAgICAgIC8vIFVzZWQgaWYgYW4gb2JqZWN0IHdhcyBwYXNzZWQgYXMgYSB0ZXJtIHZhbHVlXG4gICAgICAgIHZhciB0ZXJtO1xuICAgICAgICBmb3IgKHRlcm0gaW4gb2JqKSB7XG4gICAgICAgICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KHRlcm0pKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvYmpbdGVybV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRvY05vZGU7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvYmpbdGVybV0udG9YTUwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY05vZGUgPSBvYmpbdGVybV0udG9YTUwoZG9jKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY05vZGUgPSBkb2MuY3JlYXRlRWxlbWVudCh0ZXJtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvb3QuYXBwZW5kQ2hpbGQoZG9jTm9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob2JqW3Rlcm1dLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5VG9YTUwob2JqW3Rlcm1dLCBkb2NOb2RlLCBkb2MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RUb1hNTChvYmpbdGVybV0sIGRvY05vZGUsIGRvYyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcm9vdC5hcHBlbmRDaGlsZChkb2NOb2RlKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByb290LnNldEF0dHJpYnV0ZSh0ZXJtLCBvYmpbdGVybV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFycmF5VG9YTUwoYXJyLCByb290LCBkb2MpIHtcbiAgICAgICAgLy8gVXNlZCB0byBjb252ZXJ0IGFuIGFycmF5IHRvIGEgbGlzdCBvZiBYTUwgZW50cmllc1xuICAgICAgICB2YXIgYWxsX251bWJlcnMgPSB0cnVlLFxuICAgICAgICAgICAgYWxsX3N0cmluZ3MgPSB0cnVlLFxuICAgICAgICAgICAgaSwgbCA9IGFyci5sZW5ndGg7XG4gICAgICAgIGFsbF9udW1iZXJzID0gYXJyLmV2ZXJ5KGZ1bmN0aW9uIChhKSB7XG4gICAgICAgICAgICByZXR1cm4gdHlwZW9mIGEgPT09IFwibnVtYmVyXCI7XG4gICAgICAgIH0pO1xuICAgICAgICBhbGxfc3RyaW5ncyA9IGFyci5ldmVyeShmdW5jdGlvbiAoYSkge1xuICAgICAgICAgICAgcmV0dXJuIHR5cGVvZiBhID09PSBcInN0cmluZ1wiO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGFsbF9udW1iZXJzIHx8IGFsbF9zdHJpbmdzKSB7XG4gICAgICAgICAgICAvLyBBbiBhcnJheSBvZiBudW1iZXJzIG9yIHN0cmluZ3NcbiAgICAgICAgICAgIGFyci5mb3JFYWNoKGZ1bmN0aW9uIChhLCBpKSB7XG4gICAgICAgICAgICAgICAgcm9vdC5zZXRBdHRyaWJ1dGUoXCJpbmRleC1cIiArIGksIGEpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBBbiBhcnJheSBvZiBvYmplY3RzXG4gICAgICAgICAgICBhcnIuZm9yRWFjaChmdW5jdGlvbiAoYSwgaSkge1xuICAgICAgICAgICAgICAgIHZhciBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInZhbHVlXCIpO1xuICAgICAgICAgICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKFwiaW5kZXhcIiwgaSk7XG4gICAgICAgICAgICAgICAgb2JqZWN0VG9YTUwoYSwgbm9kZSwgZG9jKTtcbiAgICAgICAgICAgICAgICByb290LmFwcGVuZENoaWxkKG5vZGUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XG4gICAgICAgIFwiYWRkRXZlbnRMaXN0ZW5lclwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKGEsYixjKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGV0LmFkZEV2ZW50TGlzdGVuZXIoYSxiLGMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInJlbW92ZUV2ZW50TGlzdGVuZXJcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbihhLGIsYykge1xuICAgICAgICAgICAgICAgIHJldHVybiBldC5yZW1vdmVFdmVudExpc3RlbmVyKGEsYixjKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgJ25hbWUnOiB7XG4gICAgICAgICAgICAnZ2V0JzogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzdG9yZU5hbWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ3NldCc6IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgICAgICAgaWYgKHN0b3JlTmFtZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWUgPSBzdG9yZU5hbWU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgKFwiTmFtZSBpcyBhbHJlYWR5IHNldFwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgICdzZXRUZXJtJzoge1xuICAgICAgICAgICAgJ3ZhbHVlJzogZnVuY3Rpb24gKHRlcm0sIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0ZXJtICE9PSBcInN0cmluZ1wiICYmIHRlcm0ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IChcInRlcm0gbXVzdCBiZSBhIHN0cmluZ1wiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcm9vdFt0ZXJtXSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIGV0LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwiYWx0ZXJlZFwiLCB7ZGV0YWlsOnt0ZXJtOiB0ZXJtLCB2YWx1ZTogdmFsdWV9fSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAnc2V0VGVybXMnOiB7XG4gICAgICAgICAgICAndmFsdWUnOiBmdW5jdGlvbiAodGVybXNPYmplY3QpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRlcm1zT2JqZWN0ICE9PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IChcInNldFRlcm1zIHRha2VzIGFuIG9iamVjdCBvZiB0ZXJtL3ZhbHVlIHBhaXJzXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgdGVybTtcbiAgICAgICAgICAgICAgICBmb3IgKHRlcm0gaW4gdGVybXNPYmplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRlcm1zT2JqZWN0Lmhhc093blByb3BlcnR5KHRlcm0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFRlcm0odGVybSwgdGVybXNPYmplY3RbdGVybV0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAnZGVsZXRlVGVybSc6IHtcbiAgICAgICAgICAgICd2YWx1ZSc6IGZ1bmN0aW9uICh0ZXJtKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRUZXJtKHRlcm0sIHVuZGVmaW5lZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgICdnZXRUZXJtJzoge1xuICAgICAgICAgICAgJ3ZhbHVlJzogZnVuY3Rpb24gKHRlcm0pIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRlcm0gIT09IFwic3RyaW5nXCIgJiYgdGVybS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgKFwidGVybSBtdXN0IGJlIGEgc3RyaW5nXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcm9vdFt0ZXJtXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgJ2hhc1Rlcm0nOiB7XG4gICAgICAgICAgICAndmFsdWUnOiBmdW5jdGlvbiAodGVybSkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGVybSAhPT0gXCJzdHJpbmdcIiAmJiB0ZXJtLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyAoXCJ0ZXJtIG11c3QgYmUgYSBzdHJpbmdcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiByb290Lmhhc093blByb3BlcnR5KHRlcm0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAndG9KU09OJzoge1xuICAgICAgICAgICAgJ3ZhbHVlJzogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHJvb3QpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgJ3RvWE1MJzoge1xuICAgICAgICAgICAgJ3ZhbHVlJzogZnVuY3Rpb24gKGRvYykge1xuICAgICAgICAgICAgICAgIHZhciBub2RlO1xuICAgICAgICAgICAgICAgIGlmICghZG9jKSB7XG4gICAgICAgICAgICAgICAgICAgIGRvYyA9IGRvY3VtZW50LmltcGxlbWVudGF0aW9uLmNyZWF0ZURvY3VtZW50KG51bGwsIHN0b3JlTmFtZSwgbnVsbCk7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUgPSBkb2MuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZSA9IGRvYy5jcmVhdGVFbGVtZW50KHN0b3JlTmFtZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG9iamVjdFRvWE1MKHJvb3QsIG5vZGUsIGRvYyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExpbmtlZFN0b3JlO1xuIiwiLyoganNoaW50IGVzdmVyc2lvbjogNiAqL1xuaW1wb3J0IHtCYXNlUGx1Z2lufSBmcm9tIFwiLi4vQmFzZVBsdWdpbi9pbmRleFwiO1xuXG52YXIgU3ludGhlc2lzZXJCYXNlUGx1Z2luID0gZnVuY3Rpb24oZmFjdG9yeSwgb3duZXIpXG57XG4gICAgdmFyIGhhc1dhcm5lZFNjaGVkdWxlTm90U2V0ID0gZmFsc2U7XG4gICAgdmFyIGhhc1dhcm5lZENhbmNlbE5vdFNldCA9IGZhbHNlO1xuICAgIHZhciBlZGl0b3JUeXBlID0gXCJyb2xsXCI7XG4gICAgQmFzZVBsdWdpbi5jYWxsKHRoaXMsIGZhY3RvcnksIG93bmVyKTtcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgICAgXCJhZGRJbnB1dFwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHRocm93KFwiQ2Fubm90IGFkZCBpbnB1dCB0byB0eXBlIFxcXCJTeW50aGVzaXNlckJhc2VQbHVnaW5cXFwiXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImRlbGV0ZUlucHV0XCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdGhyb3coXCJDYW5ub3QgZGVsZXRlIGlucHV0IHRvIHR5cGUgXFxcIlN5bnRoZXNpc2VyQmFzZVBsdWdpblxcXCJcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwic2NoZWR1bGVFdmVudFwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uIChtc2csIGNvbnRleHRUaW1lKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFoYXNXYXJuZWRTY2hlZHVsZU5vdFNldCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm5pbmcoXCJXQVJOSU5HIC0gLnNjaGVkdWxlRXZlbnQgaXMgbm90IG92ZXJyaWRkZW5cIik7XG4gICAgICAgICAgICAgICAgICAgIGhhc1dhcm5lZFNjaGVkdWxlTm90U2V0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJ3cml0YWJsZVwiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwiY2FuY2VsQWxsRXZlbnRzXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFoYXNXYXJuZWRDYW5jZWxOb3RTZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuaW5nKFwiV0FSTklORyAtIC5jYW5jZWxBbGxFdmVudHMgaXMgbm90IG92ZXJyaWRkZW5cIik7XG4gICAgICAgICAgICAgICAgICAgIGhhc1dhcm5lZENhbmNlbE5vdFNldCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwid3JpdGFibGVcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcInNldEVkaXRvclR5cGVcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbih0eXBlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGUgPT0gXCJyb2xsXCIgfHwgdHlwZSA9PSBcImxpbmVcIiB8fCB0eXBlID09IFwic2VxdWVuY2VyXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgZWRpdG9yVHlwZSA9IHR5cGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBlZGl0b3JUeXBlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImdldEVkaXRvclR5cGVcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZWRpdG9yVHlwZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJpc05vdGVBY3RpdmVcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbihuKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBuID09IFwibnVtYmVyXCIgJiYgbiA+PSAwICYmIG4gPCAxMjgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIndyaXRhYmxlXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRBY3RpdmVOb3RlUHJvcGVydGllc1wiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZhciBvYmogPVtdO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIG49MDsgbjwxMjg7IG4rKykge1xuICAgICAgICAgICAgICAgICAgICBvYmoucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBuLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogdGhpcy5taWRpTm90ZVRvTmFtZShuKVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9iajtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIndyaXRhYmxlXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgJ21pZGlOb3RlVG9GcmVxdWVuY3knOiB7XG4gICAgICAgICAgICAndmFsdWUnOiBmdW5jdGlvbiAobSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBNYXRoLnBvdygyLjAsIChtLTY5KS8xMikqNDQwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAnZnJlcXVlbmN5VG9NaWRpTm90ZSc6IHtcbiAgICAgICAgICAgICd2YWx1ZSc6IGZ1bmN0aW9uIChmKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE1hdGgucm91bmQoMTIuMCpNYXRoLmxvZzIoZi80NDApKSs2OTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgJ21pZGlOb3RlVG9OYW1lJzoge1xuICAgICAgICAgICAgJ3ZhbHVlJzogZnVuY3Rpb24gKG0pIHtcbiAgICAgICAgICAgICAgICB2YXIgbm90ZXMgPSBbXCJBXCIsIFwiQSNcIiwgXCJCXCIsIFwiQ1wiLCBcIkMjXCIsIFwiRFwiLCBcIkQjXCIsIFwiRVwiLCBcIkZcIiwgXCJGI1wiLCBcIkdcIiwgXCJHI1wiXTtcbiAgICAgICAgICAgICAgICB2YXIgcm9vdCA9IG0tMjE7XG4gICAgICAgICAgICAgICAgdmFyIG9jdGF2ZSA9IE1hdGguZmxvb3Iocm9vdC8xMik7XG4gICAgICAgICAgICAgICAgdmFyIG5vdGUgPSBNYXRoLmZsb29yKChyb290KzM2KSUxMik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5vdGVzW25vdGVdICsgU3RyaW5nKG9jdGF2ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgICdub3RlTmFtZVRvTUlESSc6IHtcbiAgICAgICAgICAgICd2YWx1ZSc6IGZ1bmN0aW9uKG4pIHtcbiAgICAgICAgICAgICAgICB2YXIgbm90ZXMgPSBbXCJBXCIsIFwiQSNcIiwgXCJCXCIsIFwiQ1wiLCBcIkMjXCIsIFwiRFwiLCBcIkQjXCIsIFwiRVwiLCBcIkZcIiwgXCJGI1wiLCBcIkdcIiwgXCJHI1wiXTtcbiAgICAgICAgICAgICAgICB2YXIgb2N0YXZlID0gTnVtYmVyKG4uc2xpY2Uobi5sZW5ndGgtMSkpO1xuICAgICAgICAgICAgICAgIHZhciBub3RlID0gbm90ZXMuaW5kZXhPZihuLnNsaWNlKDAsbi5sZW5ndGgtMSkpO1xuICAgICAgICAgICAgICAgIHJldHVybiBvY3RhdmUqMTIgKyBub3RlICsgMjE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgfSk7XG59O1xuU3ludGhlc2lzZXJCYXNlUGx1Z2luLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoQmFzZVBsdWdpbi5wcm90b3R5cGUpO1xuU3ludGhlc2lzZXJCYXNlUGx1Z2luLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFN5bnRoZXNpc2VyQmFzZVBsdWdpbjtcblxuZXhwb3J0IHtTeW50aGVzaXNlckJhc2VQbHVnaW59O1xuIiwiLy8gVGhpcyBkZWZpbmVzIGEgbWFzdGVyIG9iamVjdCBmb3IgaG9sZGluZyBhbGwgdGhlIHBsdWdpbnMgYW5kIGNvbW11bmljYXRpbmdcbi8vIFRoaXMgb2JqZWN0IHdpbGwgYWxzbyBoYW5kbGUgY3JlYXRpb24gYW5kIGRlc3RydWN0aW9uIG9mIHBsdWdpbnNcbi8qZ2xvYmFscyBQcm9taXNlLCBkb2N1bWVudCwgY29uc29sZSwgTGlua2VkU3RvcmUsIFdvcmtlciwgd2luZG93LCBYTUxIdHRwUmVxdWVzdCAqL1xuLyplc2xpbnQtZW52IGJyb3dzZXIgKi9cbi8qIGpzaGludCBlc3ZlcnNpb246NiAqL1xuXG5pbXBvcnQge0Jhc2VQbHVnaW59IGZyb20gJy4vQmFzZVBsdWdpbic7XG5pbXBvcnQge1N5bnRoZXNpc2VyQmFzZVBsdWdpbn0gZnJvbSAnLi9TeW50aGVzaXNlckJhc2VQbHVnaW4nO1xuaW1wb3J0IFBsdWdpbkZhY3RvcnkgZnJvbSBcIi4vRmFjdG9yeS9QbHVnaW5GYWN0b3J5XCI7XG5cbmV4cG9ydCB7QmFzZVBsdWdpbiwgU3ludGhlc2lzZXJCYXNlUGx1Z2luLCBQbHVnaW5GYWN0b3J5fTtcbiIsImltcG9ydCB7QmFzZVBsdWdpbiwgU3ludGhlc2lzZXJCYXNlUGx1Z2luLCBQbHVnaW5GYWN0b3J5fSBmcm9tIFwiLi9pbmRleFwiO1xuXG4oZnVuY3Rpb24ocm9vdCwgZmFjdG9yeSkge1xuICAgIGNvbnNvbGUubG9nKFwiTG9hZCBKU0FQLi4uXCIpO1xuICAgIGlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImRlZmluZVwiKTtcbiAgICAgICAgZGVmaW5lKFwiSlNBUFwiLCBbXSwgZmFjdG9yeSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgbW9kdWxlID09IFwib2JqZWN0XCIgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJtb2R1bGVcIik7XG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZGlyZWN0XCIpO1xuICAgICAgICBpZiAocm9vdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByb290ID0gd2luZG93O1xuICAgICAgICB9XG4gICAgICAgIHJvb3QuSlNBUCA9IGZhY3RvcnkoKTtcbiAgICB9XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbiAgICBjb25zb2xlLmxvZyhcImZhY3RvcnlcIik7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgUGx1Z2luRmFjdG9yeTogUGx1Z2luRmFjdG9yeSxcbiAgICAgICAgQmFzZVBsdWdpbjogQmFzZVBsdWdpbixcbiAgICAgICAgU3ludGhlc2lzZXJCYXNlUGx1Z2luOiBTeW50aGVzaXNlckJhc2VQbHVnaW5cbiAgICB9O1xufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9