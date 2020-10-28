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
        ev.dispatchEvent(new Event("bypassed"));
    }

    function bypassDisable() {
        _in.disconnect();
        _in.connect(plugin_node.getInputs()[0]);
        _bypassed = false;
        if (plugin_node.processingDelayAsSamples != 0) {
            ev.dispatchEvent(new Event("alterdelay"));
        }
        ev.dispatchEvent(new Event("bypassed"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9KU0FQL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0pTQVAvKHdlYnBhY2spL2J1aWxkaW4vYW1kLW9wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vSlNBUC8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vSlNBUC8od2VicGFjaykvYnVpbGRpbi9oYXJtb255LW1vZHVsZS5qcyIsIndlYnBhY2s6Ly9KU0FQLy4vc3JjL0Jhc2VQbHVnaW4vQXNzZXRQYWNrU2VsZWN0b3JJbnRlcmZhY2UuanMiLCJ3ZWJwYWNrOi8vSlNBUC8uL3NyYy9CYXNlUGx1Z2luL0xpbmtlZFN0b3JlSW50ZXJmYWNlLmpzIiwid2VicGFjazovL0pTQVAvLi9zcmMvQmFzZVBsdWdpbi9QbHVnaW5GZWF0dXJlSW50ZXJmYWNlL1BsdWdpbkZlYXR1cmVJbnRlcmZhY2VSZWNlaXZlci5qcyIsIndlYnBhY2s6Ly9KU0FQLy4vc3JjL0Jhc2VQbHVnaW4vUGx1Z2luRmVhdHVyZUludGVyZmFjZS9QbHVnaW5GZWF0dXJlSW50ZXJmYWNlU2VuZGVyLmpzIiwid2VicGFjazovL0pTQVAvLi9zcmMvQmFzZVBsdWdpbi9QbHVnaW5GZWF0dXJlSW50ZXJmYWNlL2luZGV4LmpzIiwid2VicGFjazovL0pTQVAvLi9zcmMvQmFzZVBsdWdpbi9QbHVnaW5JbnRlcmZhY2VNZXNzYWdlSHViLmpzIiwid2VicGFjazovL0pTQVAvLi9zcmMvQmFzZVBsdWdpbi9QbHVnaW5Vc2VySW50ZXJmYWNlL2luZGV4LmpzIiwid2VicGFjazovL0pTQVAvLi9zcmMvQmFzZVBsdWdpbi9pbmRleC5qcyIsIndlYnBhY2s6Ly9KU0FQLy4vc3JjL0Jhc2VQbHVnaW4vcGFyYW1ldGVyTWFuYWdlci5qcyIsIndlYnBhY2s6Ly9KU0FQLy4vc3JjL0Jhc2VQbHVnaW4vcGFyYW1ldGVycy9Bc3NldFBhcmFtZXRlci5qcyIsIndlYnBhY2s6Ly9KU0FQLy4vc3JjL0Jhc2VQbHVnaW4vcGFyYW1ldGVycy9CdXR0b25QYXJhbWV0ZXIuanMiLCJ3ZWJwYWNrOi8vSlNBUC8uL3NyYy9CYXNlUGx1Z2luL3BhcmFtZXRlcnMvTGlzdFBhcmFtZXRlci5qcyIsIndlYnBhY2s6Ly9KU0FQLy4vc3JjL0Jhc2VQbHVnaW4vcGFyYW1ldGVycy9OdW1iZXJQYXJhbWV0ZXIuanMiLCJ3ZWJwYWNrOi8vSlNBUC8uL3NyYy9CYXNlUGx1Z2luL3BhcmFtZXRlcnMvUGFyYW1ldGVyQXV0b21hdGlvbi5qcyIsIndlYnBhY2s6Ly9KU0FQLy4vc3JjL0Jhc2VQbHVnaW4vcGFyYW1ldGVycy9QbHVnaW5QYXJhbWV0ZXIuanMiLCJ3ZWJwYWNrOi8vSlNBUC8uL3NyYy9CYXNlUGx1Z2luL3BhcmFtZXRlcnMvU3RyaW5nUGFyYW1ldGVyLmpzIiwid2VicGFjazovL0pTQVAvLi9zcmMvQmFzZVBsdWdpbi9wYXJhbWV0ZXJzL1N3aXRjaFBhcmFtZXRlci5qcyIsIndlYnBhY2s6Ly9KU0FQLy4vc3JjL0Jhc2VQbHVnaW4vcGFyYW1ldGVycy9VUkxQYXJhbWV0ZXIuanMiLCJ3ZWJwYWNrOi8vSlNBUC8uL3NyYy9GYWN0b3J5L0F1ZGlvUGx1Z2luQ2hhaW5NYW5hZ2VyL1N1YkZhY3RvcnlGZWF0dXJlU2VuZGVyL0V4dHJhY3Rvci5qcyIsIndlYnBhY2s6Ly9KU0FQLy4vc3JjL0ZhY3RvcnkvQXVkaW9QbHVnaW5DaGFpbk1hbmFnZXIvU3ViRmFjdG9yeUZlYXR1cmVTZW5kZXIvT3V0cHV0Tm9kZS5qcyIsIndlYnBhY2s6Ly9KU0FQLy4vc3JjL0ZhY3RvcnkvQXVkaW9QbHVnaW5DaGFpbk1hbmFnZXIvU3ViRmFjdG9yeUZlYXR1cmVTZW5kZXIvV29ya2VyRXh0cmFjdG9yLmpzIiwid2VicGFjazovL0pTQVAvLi9zcmMvRmFjdG9yeS9BdWRpb1BsdWdpbkNoYWluTWFuYWdlci9TdWJGYWN0b3J5RmVhdHVyZVNlbmRlci9pbmRleC5qcyIsIndlYnBhY2s6Ly9KU0FQLy4vc3JjL0ZhY3RvcnkvQXVkaW9QbHVnaW5DaGFpbk1hbmFnZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vSlNBUC8uL3NyYy9GYWN0b3J5L0ZlYXR1cmVNYXAvRmVhdHVyZU5vZGUuanMiLCJ3ZWJwYWNrOi8vSlNBUC8uL3NyYy9GYWN0b3J5L0ZlYXR1cmVNYXAvUmVxdWVzdG9yTWFwLmpzIiwid2VicGFjazovL0pTQVAvLi9zcmMvRmFjdG9yeS9GZWF0dXJlTWFwL1NvdXJjZU1hcC5qcyIsIndlYnBhY2s6Ly9KU0FQLy4vc3JjL0ZhY3RvcnkvRmVhdHVyZU1hcC9pbmRleC5qcyIsIndlYnBhY2s6Ly9KU0FQLy4vc3JjL0ZhY3RvcnkvTWlkaVN5bnRoZXNpc0luc3RhbmNlLmpzIiwid2VicGFjazovL0pTQVAvLi9zcmMvRmFjdG9yeS9NaWRpU3ludGhlc2lzZXJIb3N0LmpzIiwid2VicGFjazovL0pTQVAvLi9zcmMvRmFjdG9yeS9QbHVnaW5Bc3NldHMvQXNzZXRQYWNrU2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vSlNBUC8uL3NyYy9GYWN0b3J5L1BsdWdpbkFzc2V0cy9QbHVnaW5Bc3NldC5qcyIsIndlYnBhY2s6Ly9KU0FQLy4vc3JjL0ZhY3RvcnkvUGx1Z2luQXNzZXRzL1BsdWdpbkFzc2V0TWFuYWdlci5qcyIsIndlYnBhY2s6Ly9KU0FQLy4vc3JjL0ZhY3RvcnkvUGx1Z2luQXNzZXRzL1BsdWdpbkFzc2V0c0xpc3QuanMiLCJ3ZWJwYWNrOi8vSlNBUC8uL3NyYy9GYWN0b3J5L1BsdWdpbkZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vSlNBUC8uL3NyYy9GYWN0b3J5L1BsdWdpbkluc3RhbmNlLmpzIiwid2VicGFjazovL0pTQVAvLi9zcmMvRmFjdG9yeS9QbHVnaW5Qcm90b3R5cGUuanMiLCJ3ZWJwYWNrOi8vSlNBUC8uL3NyYy9GYWN0b3J5L1BsdWdpblVzZXJJbnRlcmZhY2VNZXNzYWdlSHViLmpzIiwid2VicGFjazovL0pTQVAvLi9zcmMvTGlua2VkU3RvcmUuanMiLCJ3ZWJwYWNrOi8vSlNBUC8uL3NyYy9TeW50aGVzaXNlckJhc2VQbHVnaW4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vSlNBUC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9KU0FQLy4vc3JjL21vZHVsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNEQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRDQUE0Qzs7QUFFNUM7Ozs7Ozs7Ozs7OztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN2QkE7QUFBQTtBQUFBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLGdDQUFnQztBQUNoQyxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxnQ0FBZ0M7QUFDaEMsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxnQ0FBZ0MsNEJBQTRCO0FBQzVELGdDQUFnQztBQUNoQyxTQUFTO0FBQ1Q7QUFDQSwrQkFBK0IsNEJBQTRCO0FBQzNELGdDQUFnQztBQUNoQyxTQUFTO0FBQ1Q7QUFDQSwrQkFBK0IsNkJBQTZCO0FBQzVELGdDQUFnQztBQUNoQztBQUNBLEtBQUs7QUFDTDs7Ozs7Ozs7Ozs7OztBQ2xEQTtBQUFBO0FBQUE7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7Ozs7Ozs7Ozs7Ozs7QUN4Q0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsd0JBQXdCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUV3Qzs7Ozs7Ozs7Ozs7OztBQ3pFeEM7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLE9BQU87QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLG9DQUFvQztBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQixpQkFBaUI7QUFDakI7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsa0JBQWtCO0FBQzVDO0FBQ0EsbUJBQW1CLDBCQUEwQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0Esd0JBQXdCLDhCQUE4QjtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTs7QUFFc0M7Ozs7Ozs7Ozs7Ozs7QUN2THRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDZ0Y7QUFDSjs7QUFFNUU7QUFDQTtBQUNBLHdCQUF3Qiw4RkFBOEI7QUFDdEQsc0JBQXNCLDBGQUE0Qjs7QUFFbEQ7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVnQzs7Ozs7Ozs7Ozs7OztBQ3BCaEM7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBOztBQUVBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFbUM7Ozs7Ozs7Ozs7Ozs7QUN4TW5DO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFNkI7Ozs7Ozs7Ozs7Ozs7QUNwRzdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ3VEO0FBQ2tCO0FBQ1Q7QUFDTjtBQUNqQjtBQUNpQjtBQUNZOztBQUV0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyx1RkFBeUI7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLDhFQUFzQjtBQUNoRCwwQkFBMEIscUVBQWdCO0FBQzFDO0FBQ0EsbUVBQW1FLGlCQUFpQjtBQUNwRixLQUFLO0FBQ0w7QUFDQSxtQkFBbUIsbUVBQTBCO0FBQzdDOztBQUVBLDBCQUEwQixvREFBVzs7QUFFckMsb0NBQW9DLDZEQUFvQjtBQUN4RCxpQ0FBaUMsNkRBQW9CO0FBQ3JELGtDQUFrQyw2REFBb0I7QUFDdEQsbUNBQW1DLDZEQUFvQjs7QUFFdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFb0I7Ozs7Ozs7Ozs7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Q2pCO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLDBDQUEwQyxtRUFBZTtBQUN6RDs7QUFFeUI7Ozs7Ozs7Ozs7Ozs7QUM3S3pCO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixPQUFPO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFZSxzRkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7OztBQ2xWdkM7QUFBQTtBQUFBO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ0xBO0FBQUE7QUFBQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1CQUFtQiwwQkFBMEI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLE9BQU87QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDRDQUE0QztBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM1RkE7QUFBQTtBQUFBO0FBQUE7O0FBRTBDOztBQUUzQjtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsd0JBQXdCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIscUJBQXFCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQiw0QkFBNEI7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsNEJBQTRCLHFEQUFZO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2pIQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUV3QztBQUNKOztBQUVyQjtBQUNmOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBLHVCQUF1QixvREFBVztBQUNsQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBdUIsa0RBQVM7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBOzs7Ozs7Ozs7Ozs7O0FDdkdBO0FBQUE7QUFBQTs7QUFFZTtBQUNmO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7Ozs7Ozs7Ozs7Ozs7QUNwQkE7QUFBQTtBQUFBO0FBQUE7O0FBRXlDOztBQUUxQjtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUOztBQUVBLHlCQUF5QixvREFBVzs7QUFFcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDs7Ozs7Ozs7Ozs7OztBQ3RLQTtBQUFBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsK0JBQStCLGVBQWUsRUFBRTtBQUNoRDtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsK0JBQStCLGVBQWUsRUFBRTtBQUNoRDtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRWUsZ0ZBQWlCLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUM1RmpDO0FBQUE7QUFBQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLCtCQUErQjtBQUMvQixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVxQjs7Ozs7Ozs7Ozs7OztBQ3JEckI7QUFBQTtBQUFBO0FBQUE7QUFDQTs7QUFFb0Q7QUFDQTs7QUFFcEQ7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixrRUFBZ0I7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiwwREFBaUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxrQ0FBa0M7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7O0FBRWUsaUZBQWtCLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUM3RGxDO0FBQUE7QUFBQTtBQUFBO0FBQ0E7O0FBRTZDOztBQUU3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsMkRBQVc7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUUwQjs7Ozs7Ozs7Ozs7OztBQzVDMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRXlDO0FBQzBCO0FBQ25CO0FBQ0o7QUFDcUI7QUFDVDtBQUNvQjs7QUFFNUU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0Msc0VBQTZCO0FBQzVFOztBQUVBLDRCQUE0Qix3RUFBa0I7O0FBRTlDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QixxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxzQkFBc0Isd0RBQWU7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsbUJBQW1CLHlCQUF5QjtBQUM1QztBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsdUJBQXVCLGlFQUF1QjtBQUM5QztBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qiw0REFBbUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsdUJBQXVCLG9EQUFXO0FBQ2xDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0EsMkJBQTJCLG9EQUFXO0FBQ3RDLHdCQUF3QixvREFBVzs7QUFFbkMsMEJBQTBCLHlEQUFVOztBQUVwQztBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFZSw0RUFBYSxFQUFDOzs7Ozs7Ozs7Ozs7OztBQ2hnQjdCO0FBQUE7QUFBQTtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7Ozs7Ozs7Ozs7OztBQy9HQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQzhDO0FBQ2M7O0FBRTdDO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQSwyQkFBMkIsdURBQWM7QUFDekMsYUFBYTtBQUNiLDJCQUEyQiw4REFBcUI7QUFDaEQsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxxQ0FBcUM7QUFDeEU7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBdUIsc0NBQXNDO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLDZCQUE2QjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbExBO0FBQUE7QUFBQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7Ozs7Ozs7Ozs7OztBQzlDQTtBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkRBQTZELFFBQVEsMEJBQTBCO0FBQy9GO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVlLDBFQUFXLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUN0SjNCO0FBQUE7QUFBQTtBQUFBO0FBQytDOztBQUUvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSw0REFBVTs7QUFFZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsT0FBTztBQUNwQztBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBLGdEQUFnRCw0REFBVTtBQUMxRDs7QUFFK0I7Ozs7Ozs7Ozs7Ozs7QUMzRy9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFd0M7QUFDc0I7QUFDVjs7QUFFTTs7Ozs7Ozs7Ozs7OztBQ1YxRDtBQUFBO0FBQXlFOztBQUV6RTtBQUNBO0FBQ0Esd0NBQXdDLGdHQUFVO0FBQ2xEO0FBQ0E7QUFDQSxLQUFLLFVBQVUsS0FBeUI7QUFDeEM7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUUsU0FBSTtBQUNQO0FBQ0E7QUFDQSx1QkFBdUIsb0RBQWE7QUFDcEMsb0JBQW9CLGlEQUFVO0FBQzlCLCtCQUErQiw0REFBcUI7QUFDcEQ7QUFDQSxDQUFDIiwiZmlsZSI6IkpTQVAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9tb2R1bGUuanNcIik7XG4iLCIvKiBnbG9iYWxzIF9fd2VicGFja19hbWRfb3B0aW9uc19fICovXG5tb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19hbWRfb3B0aW9uc19fO1xuIiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvcmlnaW5hbE1vZHVsZSkge1xuXHRpZiAoIW9yaWdpbmFsTW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xuXHRcdHZhciBtb2R1bGUgPSBPYmplY3QuY3JlYXRlKG9yaWdpbmFsTW9kdWxlKTtcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcblx0XHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJleHBvcnRzXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWVcblx0XHR9KTtcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcblx0fVxuXHRyZXR1cm4gbW9kdWxlO1xufTtcbiIsIi8qIGpzaGludCBlc3ZlcnNpb246IDYgKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXNzZXRQYWNrU2VsZWN0b3JJbnRlcmZhY2UocGx1Z2luLCBmYWN0b3J5LCBwYXJhbWV0ZXJOYW1lLCB2aXNpYmxlTmFtZSwgZXhwb3NlZCkge1xuICAgIHZhciBwYWNrU2VsZWN0b3IgPSBmYWN0b3J5LnBsdWdpbkFzc2V0cy5jcmVhdGVBc3NldFBhY2tTZWxlY3RvcihwbHVnaW4sIGZhY3RvcnkucGx1Z2luQXNzZXRzLmFzc2V0UGFja3NbMF0pO1xuICAgIHZhciBsaXN0UGFyYW1ldGVyID0gcGx1Z2luLnBhcmFtZXRlcnMuY3JlYXRlTGlzdFBhcmFtZXRlcihwYXJhbWV0ZXJOYW1lLCBmYWN0b3J5LnBsdWdpbkFzc2V0cy5hc3NldFBhY2tzWzBdLm5hbWUsIGZhY3RvcnkucGx1Z2luQXNzZXRzLmFzc2V0UGFja3MubWFwKHA9PnAubmFtZSksIHVuZGVmaW5lZCwgdmlzaWJsZU5hbWUsIGV4cG9zZWQpO1xuICAgIGxpc3RQYXJhbWV0ZXIudHJpZ2dlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgcGFjayA9IGZhY3RvcnkucGx1Z2luQXNzZXRzLmFzc2V0UGFja3MuZmluZChwID0+IGxpc3RQYXJhbWV0ZXIudmFsdWUgPT0gcC5uYW1lKTtcbiAgICAgICAgcGFja1NlbGVjdG9yLnNlbGVjdFBhY2socGFjayk7XG4gICAgfTtcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgICAgXCJwYXJhbWV0ZXJcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBsaXN0UGFyYW1ldGVyXG4gICAgICAgIH0sXG4gICAgICAgIFwiYXZhaWxhYmxlUGFja3NcIjoge1xuICAgICAgICAgICAgXCJnZXRcIjogZnVuY3Rpb24gKCkge3JldHVybiBmYWN0b3J5LnBsdWdpbkFzc2V0cy5hc3NldFBhY2tzO31cbiAgICAgICAgfSxcbiAgICAgICAgXCJzZWxlY3RQYWNrXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24ocGFjaykge1xuICAgICAgICAgICAgICAgIHJldHVybiAobGlzdFBhcmFtZXRlci52YWx1ZSA9IHBhY2spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInNlbGVjdGVkUGFja1wiOiB7XG4gICAgICAgICAgICBcImdldFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIGxpc3RQYXJhbWV0ZXIudmFsdWU7fVxuICAgICAgICB9LFxuICAgICAgICBcImxvYWRBc3NldHNcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBwYWNrU2VsZWN0b3IubG9hZEFzc2V0c1xuICAgICAgICB9LFxuICAgICAgICBcImFsbEFzc2V0c0xvYWRlZFwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IHBhY2tTZWxlY3Rvci5hbGxBc3NldHNMb2FkZWRcbiAgICAgICAgfSxcbiAgICAgICAgXCJmZXRjaEFzc2V0QnlOYW1lXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogcGFja1NlbGVjdG9yLmZldGNoQXNzZXRCeU5hbWVcbiAgICAgICAgfSxcbiAgICAgICAgXCJ3YWl0Rm9yQXNzZXRzXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogcGFja1NlbGVjdG9yLndhaXRGb3JBc3NldHNcbiAgICAgICAgfSxcbiAgICAgICAgJ3ZhbHVlJzoge1xuICAgICAgICAgICAgXCJnZXRcIjogZnVuY3Rpb24gKCkge3JldHVybiBsaXN0UGFyYW1ldGVyLnZhbHVlO30sXG4gICAgICAgICAgICBcInNldFwiOiBmdW5jdGlvbihzKSB7cmV0dXJuIChsaXN0UGFyYW1ldGVyLnZhbHVlID0gcyk7fVxuICAgICAgICB9LFxuICAgICAgICBcIm9ubG9hZFwiOiB7XG4gICAgICAgICAgICBcImdldFwiOiBmdW5jdGlvbigpIHtyZXR1cm4gcGFja1NlbGVjdG9yLm9ubG9hZDt9LFxuICAgICAgICAgICAgXCJzZXRcIjogZnVuY3Rpb24oZikge3JldHVybiAocGFja1NlbGVjdG9yLm9ubG9hZCA9IGYpO31cbiAgICAgICAgfSxcbiAgICAgICAgXCJvbmVycm9yXCI6IHtcbiAgICAgICAgICAgIFwiZ2V0XCI6IGZ1bmN0aW9uKCkge3JldHVybiBwYWNrU2VsZWN0b3Iub25lcnJvcjt9LFxuICAgICAgICAgICAgXCJzZXRcIjogZnVuY3Rpb24oZikge3JldHVybiAocGFja1NlbGVjdG9yLm9uZXJyb3IgPSBmKTt9XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbiIsIi8qIGpzaGludCBlc3ZlcnNpb246IDYgKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGlua2VkU3RvcmVJbnRlcmZhY2Uob3duZXIsIGxpbmtlZFN0b3JlKSB7XG4gICAgZnVuY3Rpb24gb25hbHRlcmVkKGUpIHtcbiAgICAgICAgdmFyIHRlcm0gPSBlLmRldGFpbC50ZXJtO1xuICAgICAgICB2YXIgdmFsdWUgPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgICAgaWYgKGxpc3RlbmVyc1t0ZXJtXSAmJiB0eXBlb2YgbGlzdGVuZXJzW3Rlcm1dID09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgbGlzdGVuZXJzW3Rlcm1dLmNhbGwob3duZXIsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZhciBsaXN0ZW5lcnMgPSB7fTtcblxuICAgIGxpbmtlZFN0b3JlLmFkZEV2ZW50TGlzdGVuZXIoXCJhbHRlcmVkXCIsIG9uYWx0ZXJlZCk7XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XG4gICAgICAgIFwiZGVzdHJveVwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBsaW5rZWRTdG9yZS5yZW1vdmVFdmVudExpc3RlbmVyKFwiYWx0ZXJlZFwiLCBvbmFsdGVyZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInJlcXVlc3RUZXJtXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKHRlcm0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbGlua2VkU3RvcmUuZ2V0VGVybSh0ZXJtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJsaXN0ZW5Gb3JUZXJtXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24odGVybSwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICBpZiAobGlzdGVuZXJzLmhhc093blByb3BlcnR5KHRlcm0pKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IFwiTGlzdGVuZXIgYWxyZWFkeSBleGlzdHNcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGlzdGVuZXJzW3Rlcm1dID0gY2FsbGJhY2s7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwicmVsZWFzZUxpc3RlbmVyRm9yVGVybVwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKHRlcm0pIHtcbiAgICAgICAgICAgICAgICBsaXN0ZW5lcnNbdGVybV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbiIsIi8qIGpzaGludCBlc3ZlcnNpb246IDYgKi9cbnZhciBQbHVnaW5GZWF0dXJlSW50ZXJmYWNlUmVjZWl2ZXIgPSBmdW5jdGlvbiAoRmVhdHVyZUludGVyZmFjZUluc3RhbmNlLCBGYWN0b3J5RmVhdHVyZU1hcCkge1xuICAgIGZ1bmN0aW9uIGNoZWNrRmVhdHVyZUFyZ3Moc291cmNlLCBmZWF0dXJlT2JqZWN0KSB7XG4gICAgICAgIGlmIChzb3VyY2UgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhyb3cgKFwiU291cmNlIHBsdWdpbiBtdXN0IGJlIGRlZmluZWRcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZlYXR1cmVPYmplY3QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhyb3cgKFwiRmVhdHVyZU9iamVjdCBtdXN0IGJlIGRlZmluZWRcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBmZWF0dXJlT2JqZWN0Lm91dHB1dEluZGV4ICE9PSBcIm51bWJlclwiIHx8IHR5cGVvZiBmZWF0dXJlT2JqZWN0LmZyYW1lU2l6ZSAhPT0gXCJudW1iZXJcIiB8fCB0eXBlb2YgZmVhdHVyZU9iamVjdC5mZWF0dXJlcyAhPT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgdGhyb3cgKFwiTWFsZm9ybWVkIGZlYXR1cmVPYmplY3RcIik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHZhciBjX2ZlYXR1cmVzID0gZnVuY3Rpb24gKCkge307XG4gICAgdGhpcy5yZXF1ZXN0RmVhdHVyZXMgPSBmdW5jdGlvbiAoZmVhdHVyZUxpc3QpIHtcbiAgICAgICAgdmFyIGk7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBmZWF0dXJlTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5yZXF1ZXN0RmVhdHVyZXNGcm9tUGx1Z2luKGZlYXR1cmVMaXN0W2ldLnBsdWdpbiwge1xuICAgICAgICAgICAgICAgICdvdXRwdXRJbmRleCc6IGZlYXR1cmVMaXN0W2ldLm91dHB1dEluZGV4LFxuICAgICAgICAgICAgICAgICdmcmFtZVNpemUnOiBmZWF0dXJlTGlzdFtpXS5mcmFtZVNpemUsXG4gICAgICAgICAgICAgICAgJ2ZlYXR1cmVzJzogZmVhdHVyZUxpc3RbaV0uZmVhdHVyZXNcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICB0aGlzLnJlcXVlc3RGZWF0dXJlc0Zyb21QbHVnaW4gPSBmdW5jdGlvbiAoc291cmNlLCBmZWF0dXJlT2JqZWN0KSB7XG4gICAgICAgIGNoZWNrRmVhdHVyZUFyZ3Moc291cmNlLCBmZWF0dXJlT2JqZWN0KTtcbiAgICAgICAgRmFjdG9yeUZlYXR1cmVNYXAucmVxdWVzdEZlYXR1cmVzKEZlYXR1cmVJbnRlcmZhY2VJbnN0YW5jZS5wbHVnaW4sIHNvdXJjZSwgZmVhdHVyZU9iamVjdCk7XG4gICAgfTtcbiAgICB0aGlzLmNhbmNlbEZlYXR1cmVzRnJvbVBsdWdpbiA9IGZ1bmN0aW9uIChzb3VyY2UsIGZlYXR1cmVPYmplY3QpIHtcbiAgICAgICAgY2hlY2tGZWF0dXJlQXJncyhzb3VyY2UsIGZlYXR1cmVPYmplY3QpO1xuICAgICAgICBGYWN0b3J5RmVhdHVyZU1hcC5kZWxldGVGZWF0dXJlcyhGZWF0dXJlSW50ZXJmYWNlSW5zdGFuY2UucGx1Z2luLCBzb3VyY2UsIGZlYXR1cmVPYmplY3QpO1xuICAgIH07XG4gICAgdGhpcy5jYW5jZWxBbGxGZWF0dXJlc0Zyb21QbHVnaW4gPSBmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICAgIGlmIChzb3VyY2UgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhyb3cgKFwiU291cmNlIHBsdWdpbiBtdXN0IGJlIGRlZmluZWRcIik7XG4gICAgICAgIH1cbiAgICAgICAgRmFjdG9yeUZlYXR1cmVNYXAuZGVsZXRlRmVhdHVyZXMoRmVhdHVyZUludGVyZmFjZUluc3RhbmNlLnBsdWdpbiwgc291cmNlKTtcbiAgICB9O1xuICAgIHRoaXMuY2FuY2VsQWxsRmVhdHVyZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIEZhY3RvcnlGZWF0dXJlTWFwLmRlbGV0ZUZlYXR1cmVzKEZlYXR1cmVJbnRlcmZhY2VJbnN0YW5jZS5wbHVnaW4pO1xuICAgIH07XG5cbiAgICB0aGlzLnBvc3RGZWF0dXJlcyA9IGZ1bmN0aW9uIChNZXNzYWdlKSB7XG4gICAgICAgIC8qXG4gICAgICAgICAgICBDYWxsZWQgYnkgdGhlIFBsdWdpbiBGYWN0b3J5IHdpdGggdGhlIGZlYXR1cmUgbWVzc2FnZVxuICAgICAgICAgICAgbWVzc2FnZSA9IHtcbiAgICAgICAgICAgICAgICAncGx1Z2luJzogc291cmNlUGx1Z2luSW5zdGFuY2UsXG4gICAgICAgICAgICAgICAgJ291dHB1dEluZGV4Jzogb3V0cHV0SW5kZXgsXG4gICAgICAgICAgICAgICAgJ2ZyYW1lU2l6ZSc6IGZyYW1lU2l6ZSxcbiAgICAgICAgICAgICAgICAnZmVhdHVyZXMnOiB7fSBKUy1YdHJhY3QgZmVhdHVyZSByZXN1bHRzIG9iamVjdFxuICAgICAgICAgICAgfVxuICAgICAgICAqL1xuICAgICAgICBpZiAodHlwZW9mIGNfZmVhdHVyZXMgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgY19mZWF0dXJlcyhNZXNzYWdlKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgXCJvbmZlYXR1cmVzXCIsIHtcbiAgICAgICAgJ2dldCc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBjX2ZlYXR1cmVzO1xuICAgICAgICB9LFxuICAgICAgICAnc2V0JzogZnVuY3Rpb24gKGZ1bmMpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZnVuYyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgY19mZWF0dXJlcyA9IGZ1bmM7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9KTtcblxufTtcblxuZXhwb3J0IHtQbHVnaW5GZWF0dXJlSW50ZXJmYWNlUmVjZWl2ZXJ9O1xuIiwiLyoganNoaW50IGVzdmVyc2lvbjogNiAqL1xuXG52YXIgUGx1Z2luRmVhdHVyZUludGVyZmFjZVNlbmRlciA9IGZ1bmN0aW9uIChGZWF0dXJlSW50ZXJmYWNlSW5zdGFuY2UsIEZhY3RvcnlGZWF0dXJlTWFwKSB7XG4gICAgdmFyIE91dHB1dE5vZGUgPSBmdW5jdGlvbiAocGFyZW50LCBvdXRwdXQsIGluZGV4KSB7XG4gICAgICAgIHZhciBleHRyYWN0b3JzID0gW107XG4gICAgICAgIHZhciBFeHRyYWN0b3IgPSBmdW5jdGlvbiAob3V0cHV0LCBmcmFtZVNpemUpIHtcbiAgICAgICAgICAgIHRoaXMuZXh0cmFjdG9yID0gRmVhdHVyZUludGVyZmFjZUluc3RhbmNlLnBsdWdpbi5mYWN0b3J5LmNvbnRleHQuY3JlYXRlQW5hbHlzZXIoKTtcbiAgICAgICAgICAgIHRoaXMuZXh0cmFjdG9yLmZmdFNpemUgPSBmcmFtZVNpemU7XG4gICAgICAgICAgICBvdXRwdXQuY29ubmVjdCh0aGlzLmV4dHJhY3Rvcik7XG4gICAgICAgICAgICB0aGlzLmZlYXR1cmVzID0gW107XG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgXCJmcmFtZVNpemVcIiwge1xuICAgICAgICAgICAgICAgICd2YWx1ZSc6IGZyYW1lU2l6ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvKlxuICAgICAgICAgICAgZnVuY3Rpb24gcmVjdXJzaXZlUHJvY2Vzc2luZyhiYXNlLCBsaXN0KSB7XG4gICAgICAgICAgICAgICAgdmFyIGwgPSBsaXN0Lmxlbmd0aCxcbiAgICAgICAgICAgICAgICAgICAgaSwgZW50cnk7XG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBlbnRyeSA9IGxpc3RbaV07XG4gICAgICAgICAgICAgICAgICAgIGJhc2VbZW50cnkubmFtZV0uYXBwbHkoYmFzZSwgZW50cnkucGFyYW1ldGVycyk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlbnRyeS5mZWF0dXJlcyAmJiBlbnRyeS5mZWF0dXJlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWN1cnNpdmVQcm9jZXNzaW5nKGJhc2UucmVzdWx0W2VudHJ5Lm5hbWVdLCBlbnRyeS5mZWF0dXJlcyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAqL1xuICAgICAgICAgICAgdmFyIHJlY3Vyc2l2ZVByb2Nlc3NpbmcgPSB0aGlzLmZhY3RvcnkucmVjdXJzaXZlUHJvY2Vzc2luZztcblxuICAgICAgICAgICAgZnVuY3Rpb24gb25hdWRpb2NhbGxiYWNrKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAvL3RoaXMgPT09IEV4dHJhY3RvclxuICAgICAgICAgICAgICAgIHZhciBtZXNzYWdlID0ge1xuICAgICAgICAgICAgICAgICAgICAnbnVtYmVyT2ZDaGFubmVscyc6IDEsXG4gICAgICAgICAgICAgICAgICAgICdyZXN1bHRzJzogW11cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHJlY3Vyc2l2ZVByb2Nlc3NpbmcoZGF0YSwgdGhpcy5mZWF0dXJlcyk7XG4gICAgICAgICAgICAgICAgbWVzc2FnZS5yZXN1bHRzWzBdID0ge1xuICAgICAgICAgICAgICAgICAgICAnY2hhbm5lbCc6IDAsXG4gICAgICAgICAgICAgICAgICAgICdyZXN1bHRzJzogSlNPTi5wYXJzZShkYXRhLnRvSlNPTigpKVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgdGhpcy5wb3N0RmVhdHVyZXMoZGF0YS5sZW5ndGgsIG1lc3NhZ2UpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnNldEZlYXR1cmVzID0gZnVuY3Rpb24gKGZlYXR1cmVMaXN0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5mZWF0dXJlcyA9IGZlYXR1cmVMaXN0O1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZlYXR1cmVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmV4dHJhY3Rvci5jbGVhckNhbGxiYWNrKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5leHRyYWN0b3IuZnJhbWVDYWxsYmFjayhvbmF1ZGlvY2FsbGJhY2ssIHRoaXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgICAgIHZhciBXb3JrZXJFeHRyYWN0b3IgPSBmdW5jdGlvbiAob3V0cHV0LCBmcmFtZVNpemUpIHtcbiAgICAgICAgICAgIGZ1bmN0aW9uIG9uYXVkaW9jYWxsYmFjayhlKSB7XG4gICAgICAgICAgICAgICAgdmFyIGMsIGZyYW1lcyA9IFtdO1xuICAgICAgICAgICAgICAgIGZvciAoYyA9IDA7IGMgPCBlLmlucHV0QnVmZmVyLm51bWJlck9mQ2hhbm5lbHM7IGMrKykge1xuICAgICAgICAgICAgICAgICAgICBmcmFtZXNbY10gPSBlLmlucHV0QnVmZmVyLmdldENoYW5uZWxEYXRhKGMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB3b3JrZXIucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgICAgICAgICAnc3RhdGUnOiAyLFxuICAgICAgICAgICAgICAgICAgICAnZnJhbWVzJzogZnJhbWVzXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIHJlc3BvbnNlKG1zZykge1xuICAgICAgICAgICAgICAgIHRoaXMucG9zdEZlYXR1cmVzKGZyYW1lU2l6ZSwgbXNnLmRhdGEucmVzcG9uc2UpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgd29ya2VyID0gbmV3IFdvcmtlcihcImpzYXAvZmVhdHVyZS13b3JrZXIuanNcIik7XG4gICAgICAgICAgICB3b3JrZXIub25lcnJvciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHRoaXMuc2V0RmVhdHVyZXMgPSBmdW5jdGlvbiAoZmVhdHVyZUxpc3QpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgICAgICAgICAgdmFyIGNvbmZpZ01lc3NhZ2UgPSB7XG4gICAgICAgICAgICAgICAgICAgICdzdGF0ZSc6IDEsXG4gICAgICAgICAgICAgICAgICAgICdzYW1wbGVSYXRlJzogRmVhdHVyZUludGVyZmFjZUluc3RhbmNlLnBsdWdpbi5mYWN0b3J5LmNvbnRleHQuc2FtcGxlUmF0ZSxcbiAgICAgICAgICAgICAgICAgICAgJ2ZlYXR1cmVMaXN0JzogZmVhdHVyZUxpc3QsXG4gICAgICAgICAgICAgICAgICAgICdudW1DaGFubmVscyc6IG91dHB1dC5udW1iZXJPZk91dHB1dHMsXG4gICAgICAgICAgICAgICAgICAgICdmcmFtZVNpemUnOiB0aGlzLmZyYW1lU2l6ZVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgdGhpcy5mZWF0dXJlcyA9IGZlYXR1cmVMaXN0O1xuICAgICAgICAgICAgICAgIGlmIChmZWF0dXJlTGlzdCAmJiBmZWF0dXJlTGlzdC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHdvcmtlci5vbm1lc3NhZ2UgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUuZGF0YS5zdGF0ZSA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtlci5vbm1lc3NhZ2UgPSByZXNwb25zZS5iaW5kKHNlbGYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuZXh0cmFjdG9yLm9uYXVkaW9wcm9jZXNzID0gb25hdWRpb2NhbGxiYWNrLmJpbmQoc2VsZik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtlci5wb3N0TWVzc2FnZShjb25maWdNZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgd29ya2VyLnBvc3RNZXNzYWdlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdzdGF0ZSc6IDBcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5leHRyYWN0b3Iub25hdWRpb3Byb2Nlc3MgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB0aGlzLmV4dHJhY3RvciA9IEZlYXR1cmVJbnRlcmZhY2VJbnN0YW5jZS5wbHVnaW4uZmFjdG9yeS5jb250ZXh0LmNyZWF0ZVNjcmlwdFByb2Nlc3NvcihmcmFtZVNpemUsIG91dHB1dC5udW1iZXJPZk91dHB1dHMsIDEpO1xuICAgICAgICAgICAgb3V0cHV0LmNvbm5lY3QodGhpcy5leHRyYWN0b3IpO1xuICAgICAgICAgICAgdGhpcy5leHRyYWN0b3IuY29ubmVjdChGZWF0dXJlSW50ZXJmYWNlSW5zdGFuY2UucGx1Z2luLmZhY3RvcnkuY29udGV4dC5kZXN0aW5hdGlvbik7XG5cbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImZyYW1lU2l6ZVwiLCB7XG4gICAgICAgICAgICAgICAgJ3ZhbHVlJzogZnJhbWVTaXplXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5hZGRFeHRyYWN0b3IgPSBmdW5jdGlvbiAoZnJhbWVTaXplKSB7XG4gICAgICAgICAgICB2YXIgb2JqO1xuICAgICAgICAgICAgaWYgKHdpbmRvdy5Xb3JrZXIpIHtcbiAgICAgICAgICAgICAgICBvYmogPSBuZXcgV29ya2VyRXh0cmFjdG9yKG91dHB1dCwgZnJhbWVTaXplKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgb2JqID0gbmV3IEV4dHJhY3RvcihvdXRwdXQsIGZyYW1lU2l6ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBleHRyYWN0b3JzLnB1c2gob2JqKTtcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIFwicG9zdEZlYXR1cmVzXCIsIHtcbiAgICAgICAgICAgICAgICAndmFsdWUnOiBmdW5jdGlvbiAoZnJhbWVTaXplLCByZXN1bHRzSlNPTikge1xuICAgICAgICAgICAgICAgICAgICB2YXIgb2JqID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ291dHB1dEluZGV4JzogaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAnZnJhbWVTaXplJzogZnJhbWVTaXplLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3Jlc3VsdHMnOiByZXN1bHRzSlNPTlxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvc3RGZWF0dXJlcyhvYmopO1xuICAgICAgICAgICAgICAgIH0uYmluZCh0aGlzKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gb2JqO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmZpbmRFeHRyYWN0b3IgPSBmdW5jdGlvbiAoZnJhbWVTaXplKSB7XG4gICAgICAgICAgICB2YXIgY2hlY2sgPSBmcmFtZVNpemU7XG4gICAgICAgICAgICByZXR1cm4gZXh0cmFjdG9ycy5maW5kKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgLy8gVGhpcyBNVVNUIGJlID09PSBOT1QgPT09XG4gICAgICAgICAgICAgICAgcmV0dXJuIGUuZnJhbWVTaXplID09PSBjaGVjaztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmRlbGV0ZUV4dHJhY3RvciA9IGZ1bmN0aW9uIChmcmFtZVNpemUpIHt9O1xuICAgIH07XG4gICAgdmFyIG91dHB1dE5vZGVzID0gW107XG4gICAgdGhpcy51cGRhdGVGZWF0dXJlcyA9IGZ1bmN0aW9uIChmZWF0dXJlT2JqZWN0KSB7XG4gICAgICAgIC8vIFtdIE91dHB1dCAtPiB7fSAnZnJhbWVzaXplJyAtPiB7fSAnZmVhdHVyZXMnXG4gICAgICAgIHZhciBvO1xuICAgICAgICBmb3IgKG8gPSAwOyBvIDwgZmVhdHVyZU9iamVjdC5sZW5ndGg7IG8rKykge1xuICAgICAgICAgICAgaWYgKG91dHB1dE5vZGVzW29dID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBpZiAobyA+IEZlYXR1cmVJbnRlcmZhY2VJbnN0YW5jZS5wbHVnaW4ubnVtT3V0cHV0cykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyAoXCJSZXF1ZXN0ZWQgYW4gb3V0cHV0IHRoYXQgZG9lcyBub3QgZXhpc3RcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG91dHB1dE5vZGVzW29dID0gbmV3IE91dHB1dE5vZGUoRmVhdHVyZUludGVyZmFjZUluc3RhbmNlLnBsdWdpbiwgRmVhdHVyZUludGVyZmFjZUluc3RhbmNlLnBsdWdpbi5vdXRwdXRzW29dLCBvKTtcbiAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob3V0cHV0Tm9kZXNbb10sIFwicG9zdEZlYXR1cmVzXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgJ3ZhbHVlJzogZnVuY3Rpb24gKHJlc3VsdE9iamVjdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3N0RmVhdHVyZXMocmVzdWx0T2JqZWN0KTtcbiAgICAgICAgICAgICAgICAgICAgfS5iaW5kKHRoaXMpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgc2k7XG4gICAgICAgICAgICBmb3IgKHNpID0gMDsgc2kgPCBmZWF0dXJlT2JqZWN0W29dLmxlbmd0aDsgc2krKykge1xuICAgICAgICAgICAgICAgIHZhciBleHRyYWN0b3IgPSBvdXRwdXROb2Rlc1tvXS5maW5kRXh0cmFjdG9yKGZlYXR1cmVPYmplY3Rbb11bc2ldLmZyYW1lU2l6ZSk7XG4gICAgICAgICAgICAgICAgaWYgKCFleHRyYWN0b3IpIHtcbiAgICAgICAgICAgICAgICAgICAgZXh0cmFjdG9yID0gb3V0cHV0Tm9kZXNbb10uYWRkRXh0cmFjdG9yKGZlYXR1cmVPYmplY3Rbb11bc2ldLmZyYW1lU2l6ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGV4dHJhY3Rvci5zZXRGZWF0dXJlcyhmZWF0dXJlT2JqZWN0W29dW3NpXS5mZWF0dXJlTGlzdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgdGhpcy5wb3N0RmVhdHVyZXMgPSBmdW5jdGlvbiAoZmVhdHVyZU9iamVjdCkge1xuICAgICAgICAvKlxuICAgICAgICAgICAgQ2FsbGVkIGJ5IHRoZSBpbmRpdmlkdWFsIGV4dHJhY3RvciBpbnN0YW5jZXM6XG4gICAgICAgICAgICBmZWF0dXJlT2JqZWN0ID0geydmcmFtZVNpemUnOiBmcmFtZVNpemUsXG4gICAgICAgICAgICAnb3V0cHV0SW5kZXgnOiBvdXRwdXRJbmRleCxcbiAgICAgICAgICAgICdyZXN1bHRzJzpbXX1cbiAgICAgICAgKi9cbiAgICAgICAgRmVhdHVyZUludGVyZmFjZUluc3RhbmNlLnBsdWdpbi5mYWN0b3J5LkZlYXR1cmVNYXAucG9zdEZlYXR1cmVzKHtcbiAgICAgICAgICAgICdwbHVnaW4nOiBGZWF0dXJlSW50ZXJmYWNlSW5zdGFuY2UucGx1Z2luLnBsdWdpbkluc3RhbmNlLFxuICAgICAgICAgICAgJ291dHB1dEluZGV4JzogZmVhdHVyZU9iamVjdC5vdXRwdXRJbmRleCxcbiAgICAgICAgICAgICdmcmFtZVNpemUnOiBmZWF0dXJlT2JqZWN0LmZyYW1lU2l6ZSxcbiAgICAgICAgICAgICdyZXN1bHRzJzogZmVhdHVyZU9iamVjdC5yZXN1bHRzXG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvLyBTZW5kIHRvIEZhY3RvcnlcbiAgICBGYWN0b3J5RmVhdHVyZU1hcC5jcmVhdGVTb3VyY2VNYXAodGhpcywgRmVhdHVyZUludGVyZmFjZUluc3RhbmNlLnBsdWdpbi5wbHVnaW5JbnN0YW5jZSk7XG59O1xuXG5leHBvcnQge1BsdWdpbkZlYXR1cmVJbnRlcmZhY2VTZW5kZXJ9O1xuIiwiLypqc2hpbnQgZXN2ZXJzaW9uOiA2ICovXG5pbXBvcnQge1BsdWdpbkZlYXR1cmVJbnRlcmZhY2VSZWNlaXZlcn0gZnJvbSBcIi4vUGx1Z2luRmVhdHVyZUludGVyZmFjZVJlY2VpdmVyXCI7XG5pbXBvcnQge1BsdWdpbkZlYXR1cmVJbnRlcmZhY2VTZW5kZXJ9IGZyb20gXCIuL1BsdWdpbkZlYXR1cmVJbnRlcmZhY2VTZW5kZXJcIjtcblxudmFyIFBsdWdpbkZlYXR1cmVJbnRlcmZhY2UgPSBmdW5jdGlvbiAoQmFzZVBsdWdpbkluc3RhbmNlKSB7XG4gICAgdGhpcy5wbHVnaW4gPSBCYXNlUGx1Z2luSW5zdGFuY2U7XG4gICAgdGhpcy5SZWNlaXZlciA9IG5ldyBQbHVnaW5GZWF0dXJlSW50ZXJmYWNlUmVjZWl2ZXIodGhpcywgQmFzZVBsdWdpbkluc3RhbmNlLmZhY3RvcnkuRmVhdHVyZU1hcCk7XG4gICAgdGhpcy5TZW5kZXIgPSBuZXcgUGx1Z2luRmVhdHVyZUludGVyZmFjZVNlbmRlcih0aGlzLCBCYXNlUGx1Z2luSW5zdGFuY2UuZmFjdG9yeS5GZWF0dXJlTWFwKTtcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIm9uZmVhdHVyZXNcIiwge1xuICAgICAgICAnZ2V0JzogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuUmVjZWl2ZXIub25mZWF0dXJlcztcbiAgICAgICAgfSxcbiAgICAgICAgJ3NldCc6IGZ1bmN0aW9uIChmdW5jKSB7XG4gICAgICAgICAgICB0aGlzLlJlY2VpdmVyLm9uZmVhdHVyZXMgPSBmdW5jO1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmM7XG4gICAgICAgIH1cbiAgICB9KTtcbn07XG5cbmV4cG9ydCB7UGx1Z2luRmVhdHVyZUludGVyZmFjZX07XG4iLCIvKiBqc2hpbnQgZXN2ZXJzaW9uOiA2ICovXG52YXIgUGx1Z2luSW50ZXJmYWNlTWVzc2FnZUh1YiA9IGZ1bmN0aW9uKG93bmVyKSB7XG4gICAgZnVuY3Rpb24gYnVpbGRQbHVnaW5QYXJhbWV0ZXJKU09OKHBsdWdpbiwgc291cmNlcykge1xuICAgICAgICB2YXIgbmFtZXMgPSBvd25lci5wYXJhbWV0ZXJzLmdldFBhcmFtZXRlck5hbWVzKCk7XG4gICAgICAgIHZhciBPID0ge307XG4gICAgICAgIGlmIChzb3VyY2VzID09PSB1bmRlZmluZWQgfHwgc291cmNlcy5sZW5ndGggPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBzb3VyY2VzID0gbmFtZXM7XG4gICAgICAgIH1cbiAgICAgICAgbmFtZXMuZmlsdGVyKGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmluY2x1ZGVzKG5hbWUpO1xuICAgICAgICB9LCBzb3VyY2VzKS5mb3JFYWNoKGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgICAgICAgIHZhciBwYXJhbSA9IG93bmVyLnBhcmFtZXRlcnMuZ2V0UGFyYW1ldGVyQnlOYW1lKG5hbWUpO1xuICAgICAgICAgICAgT1tuYW1lXSA9IHBhcmFtLmdldFBhcmFtZXRlck9iamVjdCgpO1xuICAgICAgICAgICAgT1tuYW1lXS5uYW1lID0gbmFtZTtcbiAgICAgICAgICAgIGlmIChwYXJhbS5hdXRvbWF0aW9uKSB7XG4gICAgICAgICAgICAgICAgT1tuYW1lXS5hdXRvbWF0ZWQgPSBwYXJhbS5hdXRvbWF0aW9uLmVuYWJsZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gTztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBidWlsZFBhcmFtZXRlclVwZGF0ZVBheWxvYWQoc2VuZGVyX2lkLCBzb3VyY2VzKSB7XG4gICAgICAgIHZhciBtc2cgPSB7XG4gICAgICAgICAgICBtZXNzYWdlOiBcInVwZGF0ZVBhcmFtZXRlcnNcIixcbiAgICAgICAgICAgIHBhcmFtZXRlcnM6IGJ1aWxkUGx1Z2luUGFyYW1ldGVySlNPTihvd25lciwgc291cmNlcylcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHNlbmRlcl9pZCkge1xuICAgICAgICAgICAgbXNnLnNlbmRlcl9pZCA9IHNlbmRlcl9pZDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbXNnO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNlbmRQYXJhbWV0ZXJVcGRhdGVzKGNoYW5uZWwsIHNvdXJjZXMpIHtcbiAgICAgICAgY2hhbm5lbC5wb3N0TWVzc2FnZShidWlsZFBhcmFtZXRlclVwZGF0ZVBheWxvYWQodW5kZWZpbmVkLCBzb3VyY2VzKSwgbG9jYXRpb24ub3JpZ2luKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBicm9hZGNhc3RQYXJhbWV0ZXJVcGRhdGVzKHNlbmRlcl9pZCwgc291cmNlcykge1xuICAgICAgICB2YXIgbXNnID0gYnVpbGRQYXJhbWV0ZXJVcGRhdGVQYXlsb2FkKHNlbmRlcl9pZCwgc291cmNlcyk7XG4gICAgICAgIHdpbmRvd01lc3NhZ2VMaXN0LmZvckVhY2goZnVuY3Rpb24odykge1xuICAgICAgICAgICAgdy5wb3N0TWVzc2FnZShtc2csIGxvY2F0aW9uLm9yaWdpbik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGJyb2FkY2FzdFN0YXRlQ2hhbmdlKGxldmVsLCB0ZXJtLCB2YWx1ZSkge1xuICAgICAgICB2YXIgbXNnID0ge1xuICAgICAgICAgICAgbWVzc2FnZTogXCJ1cGRhdGVTdGF0ZVwiLFxuICAgICAgICAgICAgbGV2ZWw6IGxldmVsLFxuICAgICAgICAgICAgdGVybTogdGVybSxcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgICB9O1xuICAgICAgICB3aW5kb3dNZXNzYWdlTGlzdC5mb3JFYWNoKGZ1bmN0aW9uKHcpIHtcbiAgICAgICAgICAgIHcucG9zdE1lc3NhZ2UobXNnLCBsb2NhdGlvbi5vcmlnaW4pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRQYXJhbWV0ZXJNZXNzYWdlKGUpIHtcbiAgICAgICAgdmFyIHVwZGF0ZU9iamVjdHMgPSBbXTtcbiAgICAgICAgdmFyIHBhcmFtZXRlcnMgPSBKU09OLnBhcnNlKGUubWVzc2FnZS5wYXJhbWV0ZXJzKTtcbiAgICAgICAgT2JqZWN0LmtleXMocGFyYW1ldGVycykuZm9yRWFjaChmdW5jdGlvbihuYW1lKSB7XG4gICAgICAgICAgICB2YXIgcGFyYW1ldGVyT2JqZWN0ID0gb3duZXIucGFyYW1ldGVycy5nZXRQYXJhbWV0ZXJCeU5hbWUobmFtZSk7XG4gICAgICAgICAgICBpZiAocGFyYW1ldGVyT2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgcGFyYW1ldGVyT2JqZWN0LnNldFZhbHVlKHBhcmFtZXRlcnNbbmFtZV0udmFsdWUsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICB1cGRhdGVPYmplY3RzLnB1c2gobmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdXBkYXRlT2JqZWN0cztcbiAgICB9XG5cbiAgICB2YXIgd2luZG93TWVzc2FnZUxpc3QgPSBbXTtcbiAgICB2YXIgbGlzdGVuZXI7XG4gICAgdmFyIHN0YXRlID0gMDtcbiAgICB2YXIgZXZlbnRUYXJnZXQgPSBuZXcgRXZlbnRUYXJnZXQoKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIixmdW5jdGlvbihlKSB7XG4gICAgICAgIGlmICghd2luZG93TWVzc2FnZUxpc3QuaW5jbHVkZXMoZS5zb3VyY2UpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgc3dpdGNoKGUuZGF0YS5tZXNzYWdlKSB7XG4gICAgICAgICAgICBjYXNlIFwic2V0UGFyYW1ldGVyQnlOYW1lXCI6XG4gICAgICAgICAgICB2YXIgcGFyYW1ldGVyT2JqZWN0O1xuICAgICAgICAgICAgICAgIGlmIChlLmRhdGEucGFyYW1ldGVyLm5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1ldGVyT2JqZWN0ID0gb3duZXIucGFyYW1ldGVycy5nZXRQYXJhbWV0ZXJCeU5hbWUoZS5kYXRhLnBhcmFtZXRlci5uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBhcmFtZXRlck9iamVjdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1ldGVyT2JqZWN0LnNldFZhbHVlKGUuZGF0YS5wYXJhbWV0ZXIudmFsdWUsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyb2FkY2FzdFBhcmFtZXRlclVwZGF0ZXMoZS5kYXRhLnNlbmRlcl9pZCwgW2UuZGF0YS5wYXJhbWV0ZXIubmFtZV0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInNldFBhcmFtZXRlcnNCeU9iamVjdFwiOlxuICAgICAgICAgICAgICAgIGlmIChlLmRhdGEucGFyYW1ldGVyKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB1cGRhdGVPYmplY3RzID0gc2V0UGFyYW1ldGVyTWVzc2FnZShlKTtcbiAgICAgICAgICAgICAgICAgICAgYnJvYWRjYXN0UGFyYW1ldGVyVXBkYXRlcyhlLmRhdGEuc2VuZGVyX2lkLCB1cGRhdGVPYmplY3RzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwicmVxdWVzdFBhcmFtZXRlcnNcIjpcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGUuZGF0YS5uYW1lID09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VuZFBhcmFtZXRlclVwZGF0ZXMoZS5zb3VyY2UsIGUuZGF0YS5uYW1lKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzZW5kUGFyYW1ldGVyVXBkYXRlcyhlLnNvdXJjZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInJlcXVlc3RTZXNzaW9uU3RhdGVcIjpcbiAgICAgICAgICAgICAgICBicm9hZGNhc3RTdGF0ZUNoYW5nZShcInNlc3Npb25cIiwgZS5kYXRhLnRlcm0sIG93bmVyLnNlc3Npb25EYXRhSW50ZXJmYWNlLnJlcXVlc3RUZXJtKGUuZGF0YS50ZXJtKSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwicmVxdWVzdFRyYWNrU3RhdGVcIjpcbiAgICAgICAgICAgICAgICBicm9hZGNhc3RTdGF0ZUNoYW5nZShcInRyYWNrXCIsIGUuZGF0YS50ZXJtLCBvd25lci50cmFja0RhdGFJbnRlcmZhY2UucmVxdWVzdFRlcm0oZS5kYXRhLnRlcm0pKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJyZXF1ZXN0VXNlclN0YXRlXCI6XG4gICAgICAgICAgICAgICAgYnJvYWRjYXN0U3RhdGVDaGFuZ2UoXCJ1c2VyXCIsIGUuZGF0YS50ZXJtLCBvd25lci51c2VyRGF0YUludGVyZmFjZS5yZXF1ZXN0VGVybShlLmRhdGEudGVybSkpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInJlcXVlc3RQbHVnaW5TdGF0ZVwiOlxuICAgICAgICAgICAgICAgIGJyb2FkY2FzdFN0YXRlQ2hhbmdlKFwicGx1Z2luXCIsIGUuZGF0YS50ZXJtLCBvd25lci5wbHVnaW5EYXRhSW50ZXJmYWNlLnJlcXVlc3RUZXJtKGUuZGF0YS50ZXJtKSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiY3VzdG9tTWVzc2FnZVwiOlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aHJvdyhcIlVua25vd24gbWVzc2FnZSB0eXBlIFxcXCJcIitlLmRhdGEubWVzc2FnZStcIlxcXCJcIik7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgICAgXCJhZGRFdmVudExpc3RlbmVyXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24oYSxiLGMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZXZlbnRUYXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihhLGIsYyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwicmVtb3ZlRXZlbnRMaXN0ZW5lclwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKGEsYixjKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGV2ZW50VGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoYSxiLGMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInNlbmRTdGF0ZVwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKGxldmVsLCB0ZXJtKSB7XG4gICAgICAgICAgICAgICAgaWYgKGxldmVsID09IFwic2Vzc2lvblwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGJyb2FkY2FzdFN0YXRlQ2hhbmdlKFwic2Vzc2lvblwiLCB0ZXJtLCBvd25lci5zZXNzaW9uRGF0YUludGVyZmFjZS5yZXF1ZXN0VGVybSh0ZXJtKSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChsZXZlbCA9PSBcInRyYWNrXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgYnJvYWRjYXN0U3RhdGVDaGFuZ2UoXCJ0cmFja1wiLCB0ZXJtLCBvd25lci50cmFja0RhdGFJbnRlcmZhY2UucmVxdWVzdFRlcm0odGVybSkpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobGV2ZWwgPT0gXCJ1c2VyXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgYnJvYWRjYXN0U3RhdGVDaGFuZ2UoXCJ1c2VyXCIsIHRlcm0sIG93bmVyLnVzZXJEYXRhSW50ZXJmYWNlLnJlcXVlc3RUZXJtKHRlcm0pKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGxldmVsID09IFwicGx1Z2luXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgYnJvYWRjYXN0U3RhdGVDaGFuZ2UoXCJwbHVnaW5cIiwgdGVybSwgb3duZXIucGx1Z2luRGF0YUludGVyZmFjZS5yZXF1ZXN0VGVybSh0ZXJtKSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgXCJJbnZhbGlkIHN0YXRlIGxldmVsIG9wdGlvblwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJ1cGRhdGVJbnRlcmZhY2VzXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24oYXV0b21hdGlvbk9ubHkpIHtcbiAgICAgICAgICAgICAgICBpZiAoYXV0b21hdGlvbk9ubHkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBhdXRvbWF0aW9uT25seSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgc291cmNlcztcbiAgICAgICAgICAgICAgICBpZiAoYXV0b21hdGlvbk9ubHkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBhcmFtZXRlck5hbWVzID0gb3duZXIucGFyYW1ldGVycy5nZXRQYXJhbWV0ZXJOYW1lcygpO1xuICAgICAgICAgICAgICAgICAgICBzb3VyY2VzID0gcGFyYW1ldGVyTmFtZXMuZmlsdGVyKGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwYXJhbSA9IG93bmVyLnBhcmFtZXRlcnMuZ2V0UGFyYW1ldGVyQnlOYW1lKG5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChwYXJhbS5hdXRvbWF0YWJsZSAmJiBwYXJhbS5lbmFibGVkID09PSB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzb3VyY2VzLmxlbmd0aCA+IDApXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyb2FkY2FzdFBhcmFtZXRlclVwZGF0ZXModW5kZWZpbmVkLCBzb3VyY2VzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGJyb2FkY2FzdFBhcmFtZXRlclVwZGF0ZXMoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJjbG9zZVdpbmRvd3NcIjoge1xuICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGlmIChzdGF0ZSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICB3aGlsZSh3aW5kb3dNZXNzYWdlTGlzdC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdyA9IHdpbmRvd01lc3NhZ2VMaXN0LnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdy5jbG9zZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3coXCJDYW5uZWwgYWxyZWFkeSBjbG9zZWRcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInJlZ2lzdGVyV2luZG93XCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24odykge1xuICAgICAgICAgICAgICAgIGlmICh3aW5kb3dNZXNzYWdlTGlzdC5pbmNsdWRlcyh3KSkge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3dNZXNzYWdlTGlzdC5zcGxpY2Uod2luZG93TWVzc2FnZUxpc3QuaW5kZXhPZih3KSwgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHdpbmRvd01lc3NhZ2VMaXN0LnB1c2godyk7XG4gICAgICAgICAgICAgICAgdy5wbHVnaW5JbnN0YW5jZSA9IG93bmVyO1xuICAgICAgICAgICAgICAgIHNlbmRQYXJhbWV0ZXJVcGRhdGVzKHcpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInJlbW92ZVdpbmRvd1wiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKHcpIHtcbiAgICAgICAgICAgICAgICBpZiAod2luZG93TWVzc2FnZUxpc3QuaW5jbHVkZXModykpIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93TWVzc2FnZUxpc3Quc3BsaWNlKHdpbmRvd01lc3NhZ2VMaXN0LmluZGV4T2YodyksIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufTtcblxuZXhwb3J0IHtQbHVnaW5JbnRlcmZhY2VNZXNzYWdlSHVifTtcbiIsIi8qIGpzaGludCBlc3ZlcnNpb246IDYgKi9cblxudmFyIFBsdWdpblBhcmFtZXRlckludGVyZmFjZU5vZGUgPSBmdW5jdGlvbiAoRE9NLCBQbHVnaW5QYXJhbWV0ZXJJbnN0YW5jZSwgcHJvY2Vzc29yLCBndWkpIHtcbiAgICB0aGlzLmlucHV0ID0gRE9NO1xuICAgIHRoaXMucHJvY2Vzc29yID0gcHJvY2Vzc29yO1xuICAgIHRoaXMuR1VJID0gZ3VpO1xuICAgIHRoaXMuQXVkaW9QYXJhbSA9IFBsdWdpblBhcmFtZXRlckluc3RhbmNlO1xuICAgIHRoaXMuaGFuZGxlRXZlbnQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5BdWRpb1BhcmFtLnZhbHVlID0gdGhpcy5pbnB1dC52YWx1ZTtcbiAgICB9O1xuICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCB0aGlzKTtcbiAgICB0aGlzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgdGhpcyk7XG4gICAgdGhpcy5pbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcyk7XG59O1xuXG52YXIgUGx1Z2luVXNlckludGVyZmFjZSA9IGZ1bmN0aW9uIChCYXNlUGx1Z2luSW5zdGFuY2UsIHdpZHRoLCBoZWlnaHQpIHtcbiAgICBjb25zb2xlLmxvZyhcIkRFUFJFQ0FURUQhIVwiKTtcbiAgICBjb25zb2xlLmxvZyhcIlRoZSBjbGFzcyBQbHVnaW5Vc2VySW50ZXJmYWNlIGhhcyBiZWVuIGRlcHJlY2F0ZWRcIik7XG4gICAgY29uc29sZS5sb2coXCJQbGVhc2UgbG9vayBhdCB0aGUgZG9jdW1lbnRzIGZvciB0aGUgbmV3IG1ldGhvZHMgZm9yIGJ1aWxkaW5nIHBsdWdpbnNcIik7XG4gICAgdGhpcy5wcm9jZXNzb3IgPSBCYXNlUGx1Z2luSW5zdGFuY2U7XG4gICAgdGhpcy5yb290ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBpZiAod2lkdGggPiAwKSB7XG4gICAgICAgIHRoaXMucm9vdC5zdHlsZS53aWR0aCA9IHdpZHRoICsgXCJweFwiO1xuICAgIH1cbiAgICBpZiAoaGVpZ2h0ID4gMCkge1xuICAgICAgICB0aGlzLnJvb3Quc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0ICsgXCJweFwiO1xuICAgIH1cbiAgICB0aGlzLmRpbSA9IHtcbiAgICAgICAgd2lkdGg6IHdpZHRoLFxuICAgICAgICBoZWlnaHQ6IGhlaWdodFxuICAgIH07XG4gICAgdGhpcy5pbnRlcnZhbEZ1bmN0aW9uID0gbnVsbDtcbiAgICB0aGlzLnVwZGF0ZUludGVydmFsID0gbnVsbDtcbiAgICB0aGlzLlBsdWdpblBhcmFtZXRlckludGVyZmFjZXMgPSBbXTtcblxuICAgIHRoaXMuY3JlYXRlUGx1Z2luUGFyYW1ldGVySW50ZXJmYWNlTm9kZSA9IGZ1bmN0aW9uIChET00sIFBsdWdpblBhcmFtZXRlckluc3RhbmNlKSB7XG4gICAgICAgIHZhciBub2RlID0gbmV3IFBsdWdpblBhcmFtZXRlckludGVyZmFjZU5vZGUoRE9NLCBQbHVnaW5QYXJhbWV0ZXJJbnN0YW5jZSwgdGhpcy5wcm9jZXNzb3IsIHRoaXMpO1xuICAgICAgICB0aGlzLlBsdWdpblBhcmFtZXRlckludGVyZmFjZXMucHVzaChub2RlKTtcbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfTtcblxuICAgIHRoaXMudXBkYXRlID0gZnVuY3Rpb24gKCkge307XG5cbn07XG5cblBsdWdpblVzZXJJbnRlcmZhY2UucHJvdG90eXBlLmdldFJvb3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMucm9vdDtcbn07XG5QbHVnaW5Vc2VySW50ZXJmYWNlLnByb3RvdHlwZS5nZXREaW1lbnNpb25zID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLmRpbTtcbn07XG5QbHVnaW5Vc2VySW50ZXJmYWNlLnByb3RvdHlwZS5nZXRXaWR0aCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5kaW0ud2lkdGg7XG59O1xuUGx1Z2luVXNlckludGVyZmFjZS5wcm90b3R5cGUuZ2V0SGVpZ2h0ID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLmRpbS5oZWlnaHQ7XG59O1xuUGx1Z2luVXNlckludGVyZmFjZS5wcm90b3R5cGUuYmVnaW5DYWxsYmFja3MgPSBmdW5jdGlvbiAobXMpIHtcbiAgICAvLyBBbnkgcmVnaXN0ZXJlZCBjYWxsYmFja3MgYXJlIHN0YXJ0ZWQgYnkgdGhlIGhvc3RcbiAgICBpZiAobXMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBtcyA9IDI1MDtcbiAgICB9IC8vRGVmYXVsdCBvZiAyNTBtcyB1cGRhdGUgcGVyaW9kXG4gICAgaWYgKHRoaXMuaW50ZXJ2YWxGdW5jdGlvbiA9PT0gbnVsbCkge1xuICAgICAgICB0aGlzLnVwZGF0ZUludGVydmFsID0gbXM7XG4gICAgICAgIHRoaXMuaW50ZXJ2YWxGdW5jdGlvbiA9IHdpbmRvdy5zZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgICAgICB9LmJpbmQodGhpcyksIDI1MCk7XG4gICAgfVxufTtcblBsdWdpblVzZXJJbnRlcmZhY2UucHJvdG90eXBlLnN0b3BDYWxsYmFja3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgLy8gQW55IHJlZ2lzdGVyZWQgY2FsbGJhY2tzIGFyZSBzdG9wcGVkIGJ5IHRoZSBob3N0XG4gICAgaWYgKHRoaXMuaW50ZXJ2YWxGdW5jdGlvbiAhPT0gbnVsbCkge1xuICAgICAgICB3aW5kb3cuY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsRnVuY3Rpb24pO1xuICAgICAgICB0aGlzLnVwZGF0ZUludGVydmFsID0gbnVsbDtcbiAgICAgICAgdGhpcy5pbnRlcnZhbEZ1bmN0aW9uID0gbnVsbDtcbiAgICB9XG59O1xuUGx1Z2luVXNlckludGVyZmFjZS5wcm90b3R5cGUubG9hZFJlc291cmNlID0gZnVuY3Rpb24gKHVybCkge1xuICAgIHZhciBwID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICB2YXIgcmVxID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgIHJlcS5vcGVuKCdHRVQnLCB1cmwpO1xuICAgICAgICByZXEub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHJlcS5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgICAgIHJlc29sdmUocmVxLnJlc3BvbnNlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KEVycm9yKHJlcS5zdGF0dXNUZXh0KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHJlcS5vbmVycm9yID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmVqZWN0KEVycm9yKFwiTmV0d29yayBFcnJvclwiKSk7XG4gICAgICAgIH07XG4gICAgICAgIHJlcS5zZW5kKCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHA7XG59O1xuUGx1Z2luVXNlckludGVyZmFjZS5wcm90b3R5cGUuY2xlYXJHVUkgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5zdG9wQ2FsbGJhY2tzKCk7XG4gICAgdGhpcy5yb290LmlubmVySFRNTCA9IFwiXCI7XG59O1xuXG5leHBvcnQge1BsdWdpblVzZXJJbnRlcmZhY2V9O1xuIiwiLy8gQWRkIGdldElucHV0cyB0byBhbGwgQXVkaW9Ob2RlcyB0byBlYXNlIGRlcGxveW1lbnRcbi8qZ2xvYmFscyBBdWRpb05vZGUsIFdvcmtlciwgY29uc29sZSwgd2luZG93LCBkb2N1bWVudCwgUHJvbWlzZSwgWE1MSHR0cFJlcXVlc3QgKi9cbi8qZXNsaW50LWVudiBicm93c2VyICovXG4vKmpzaGludCBlc3ZlcnNpb246IDYgKi9cbmltcG9ydCB7UGFyYW1ldGVyTWFuYWdlcn0gZnJvbSBcIi4vcGFyYW1ldGVyTWFuYWdlci5qc1wiO1xuaW1wb3J0IHtQbHVnaW5JbnRlcmZhY2VNZXNzYWdlSHVifSBmcm9tIFwiLi9QbHVnaW5JbnRlcmZhY2VNZXNzYWdlSHViLmpzXCI7XG5pbXBvcnQge1BsdWdpbkZlYXR1cmVJbnRlcmZhY2V9IGZyb20gXCIuL1BsdWdpbkZlYXR1cmVJbnRlcmZhY2VcIjtcbmltcG9ydCB7UGx1Z2luVXNlckludGVyZmFjZX0gZnJvbSBcIi4vUGx1Z2luVXNlckludGVyZmFjZVwiO1xuaW1wb3J0IExpbmtlZFN0b3JlIGZyb20gXCIuLi9MaW5rZWRTdG9yZVwiO1xuaW1wb3J0IExpbmtlZFN0b3JlSW50ZXJmYWNlIGZyb20gXCIuL0xpbmtlZFN0b3JlSW50ZXJmYWNlXCI7XG5pbXBvcnQgQXNzZXRQYWNrU2VsZWN0b3JJbnRlcmZhY2UgZnJvbSBcIi4vQXNzZXRQYWNrU2VsZWN0b3JJbnRlcmZhY2VcIjtcblxuaWYgKHR5cGVvZiBBdWRpb05vZGUgPT09IFwiZnVuY3Rpb25cIiAmJiB3aW5kb3cuaW1wb3J0U2NyaXB0cyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgQXVkaW9Ob2RlLnByb3RvdHlwZS5nZXRJbnB1dHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBbdGhpc107XG4gICAgfTtcbn1cblxudmFyIEJhc2VQbHVnaW4gPSBmdW5jdGlvbihmYWN0b3J5LCBvd25lcikge1xuICAgIHZhciBpbnB1dExpc3QgPSBbXSxcbiAgICAgICAgb3V0cHV0TGlzdCA9IFtdLFxuICAgICAgICBwT3duZXIgPSBvd25lcixcbiAgICAgICAgZGVsYXlTYW1wbGVzID0gMCxcbiAgICAgICAgZXZlbnRUYXJnZXQgPSBuZXcgRXZlbnRUYXJnZXQoKSxcbiAgICAgICAgZXh0ZXJuYWxJbnRlcmZhY2UgPSBuZXcgUGx1Z2luSW50ZXJmYWNlTWVzc2FnZUh1Yih0aGlzKTtcbiAgICBpZiAodGhpcy5jb250ZXh0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gZmFjdG9yeS5jb250ZXh0O1xuICAgIH1cbiAgICBpZiAodGhpcy5mYWN0b3J5ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5mYWN0b3J5ID0gZmFjdG9yeTtcbiAgICB9XG4gICAgdGhpcy5mZWF0dXJlTWFwID0gbmV3IFBsdWdpbkZlYXR1cmVJbnRlcmZhY2UodGhpcyk7XG4gICAgdGhpcy5wYXJhbWV0ZXJzID0gbmV3IFBhcmFtZXRlck1hbmFnZXIodGhpcywgZXh0ZXJuYWxJbnRlcmZhY2UpO1xuICAgIHRoaXMucGFyYW1ldGVycy5hZGRFdmVudExpc3RlbmVyKFwicGFyYW1ldGVyc2V0XCIsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgZXZlbnRUYXJnZXQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJwYXJhbWV0ZXJzZXRcIiwge2RldGFpbDogZS5kZXRhaWx9KSk7XG4gICAgfSk7XG4gICAgdGhpcy5hZGRBc3NldFBhY2tJbnRlcmZhY2UgPSBmdW5jdGlvbihwYXJhbWV0ZXJOYW1lLCB2aXNpYmxlTmFtZSwgZXhwb3NlZCkge1xuICAgICAgICByZXR1cm4gbmV3IEFzc2V0UGFja1NlbGVjdG9ySW50ZXJmYWNlKHRoaXMsIGZhY3RvcnksIHBhcmFtZXRlck5hbWUsIHZpc2libGVOYW1lLCBleHBvc2VkKTtcbiAgICB9O1xuXG4gICAgdGhpcy5QbHVnaW5EYXRhID0gbmV3IExpbmtlZFN0b3JlKFwiUGx1Z2luXCIpO1xuXG4gICAgdGhpcy5zZXNzaW9uRGF0YUludGVyZmFjZSA9IG5ldyBMaW5rZWRTdG9yZUludGVyZmFjZSh0aGlzLCBmYWN0b3J5LlNlc3Npb25EYXRhKTtcbiAgICB0aGlzLnVzZXJEYXRhSW50ZXJmYWNlID0gbmV3IExpbmtlZFN0b3JlSW50ZXJmYWNlKHRoaXMsIGZhY3RvcnkuVXNlckRhdGEpO1xuICAgIHRoaXMudHJhY2tEYXRhSW50ZXJmYWNlID0gbmV3IExpbmtlZFN0b3JlSW50ZXJmYWNlKHRoaXMsIG93bmVyLlRyYWNrRGF0YSk7XG4gICAgdGhpcy5wbHVnaW5EYXRhSW50ZXJmYWNlID0gbmV3IExpbmtlZFN0b3JlSW50ZXJmYWNlKHRoaXMsIHRoaXMuUGx1Z2luRGF0YSk7XG5cbiAgICB0aGlzLmRlbGV0ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLnNlc3Npb25EYXRhSW50ZXJmYWNlLmRlc3Ryb3koKTtcbiAgICAgICAgdGhpcy51c2VyRGF0YUludGVyZmFjZS5kZXN0cm95KCk7XG4gICAgICAgIHRoaXMudHJhY2tEYXRhSW50ZXJmYWNlLmRlc3Ryb3koKTtcbiAgICAgICAgdGhpcy5wbHVnaW5EYXRhSW50ZXJmYWNlLmRlc3Ryb3koKTtcbiAgICAgICAgaWYgKHRoaXMuZGVjb25zdHJ1Y3QgJiYgdHlwZW9mIHRoaXMuZGVjb25zdHJ1Y3QgPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICB0aGlzLmRlY29uc3RydWN0KCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gZGVsZXRlSU8obm9kZSwgbGlzdCkge1xuICAgICAgICB2YXIgaSA9IGxpc3QuZmluZEluZGV4KGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICByZXR1cm4gZSA9PT0gdGhpcztcbiAgICAgICAgfSwgbm9kZSk7XG4gICAgICAgIGlmIChpID09PSAtMSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGxpc3Quc3BsaWNlKGksIDEpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICB0aGlzLmFkZElucHV0ID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgaW5wdXRMaXN0LnB1c2gobm9kZSk7XG4gICAgICAgIHJldHVybiBpbnB1dExpc3Q7XG4gICAgfTtcbiAgICB0aGlzLmRlbGV0ZUlucHV0ID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgcmV0dXJuIGRlbGV0ZUlPKG5vZGUsIGlucHV0TGlzdCk7XG4gICAgfTtcbiAgICB0aGlzLmFkZE91dHB1dCA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgIG91dHB1dExpc3QucHVzaChub2RlKTtcbiAgICAgICAgcmV0dXJuIHRoaXMub3V0cHV0cztcbiAgICB9O1xuICAgIHRoaXMuZGVsZXRlT3V0cHV0ID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgcmV0dXJuIGRlbGV0ZUlPKG5vZGUsIG91dHB1dExpc3QpO1xuICAgIH07XG5cbiAgICB0aGlzLnNldFByb2Nlc3NpbmdEZWxheUFzU2Vjb25kcyA9IGZ1bmN0aW9uKHNlY29uZHMpIHtcbiAgICAgICAgdmFyIGZzID0gZmFjdG9yeS5jb250ZXh0LnNhbXBsZVJhdGU7XG4gICAgICAgIGlmICh0eXBlb2Ygc2Vjb25kcyA9PSBcIm51bWJlclwiICYmIGlzRmluaXRlKHNlY29uZHMpICYmIHNlY29uZHMgPj0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2V0UHJvY2Vzc2luZ0RlbGF5QXNTYW1wbGVzKHNlY29uZHMqZnMpL2ZzO1xuICAgICAgICB9XG4gICAgICAgIHRocm93KFwic2V0UHJvY2Vzc2luZ0RlbGF5QXNTZWNvbmRzIEludmFsaWQgYXJndW1lbnRcIik7XG4gICAgfTtcblxuICAgIHRoaXMuc2V0UHJvY2Vzc2luZ0RlbGF5QXNTYW1wbGVzID0gZnVuY3Rpb24oc2FtcGxlcykge1xuICAgICAgICBpZiAodHlwZW9mIHNhbXBsZXMgPT0gXCJudW1iZXJcIiAmJiBpc0Zpbml0ZShzYW1wbGVzKSAmJiBzYW1wbGVzID49IDApIHtcbiAgICAgICAgICAgIGRlbGF5U2FtcGxlcyA9IHNhbXBsZXM7XG4gICAgICAgICAgICB2YXIgZSA9IG5ldyBFdmVudChcImFsdGVyZGVsYXlcIik7XG4gICAgICAgICAgICBldmVudFRhcmdldC5kaXNwYXRjaEV2ZW50KGUpO1xuICAgICAgICAgICAgcmV0dXJuIGRlbGF5U2FtcGxlcztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93KFwic2V0UHJvY2Vzc2luZ0RlbGF5QXNTYW1wbGVzIEludmFsaWQgYXJndW1lbnRcIik7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICB0aGlzLnN0YXJ0ID0gdGhpcy5zdG9wID0gdGhpcy5vbmxvYWRlZCA9IHRoaXMub251bmxvYWRlZCA9IHRoaXMuZGVjb25zdHJ1Y3QgPSBmdW5jdGlvbiAoKSB7fTtcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgICAgXCJleHRlcm5hbEludGVyZmFjZVwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGV4dGVybmFsSW50ZXJmYWNlXG4gICAgICAgIH0sXG4gICAgICAgIFwibnVtSW5wdXRzXCI6IHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpbnB1dExpc3QubGVuZ3RoO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHRocm93IChcIkNhbm5vdCBzZXQgdGhlIG51bWJlciBvZiBpbnB1dHMgb2YgQmFzZVBsdWdpblwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJudW1PdXRwdXRzXCI6IHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBvdXRwdXRMaXN0Lmxlbmd0aDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyAoXCJDYW5ub3Qgc2V0IHRoZSBudW1iZXIgb2Ygb3V0cHV0cyBvZiBCYXNlUGx1Z2luXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcIm51bVBhcmFtZXRlcnNcIjoge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyYW1ldGVycy5wYXJhbWV0ZXJzLmxlbmd0aDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyAoXCJDYW5ub3Qgc2V0IHRoZSBudW1iZXIgb2YgcGFyYW1ldGVycyBvZiBCYXNlUGx1Z2luXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcIm93bmVyXCI6IHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBwT3duZXI7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiAob3duZXIpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG93bmVyID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHBPd25lciA9IG93bmVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcE93bmVyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImlucHV0c1wiOiB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpbnB1dExpc3Q7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgKFwiSWxsZWdhbCBhdHRlbXB0IHRvIG1vZGlmeSBCYXNlUGx1Z2luXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcIm91dHB1dHNcIjoge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gb3V0cHV0TGlzdDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyAoXCJJbGxlZ2FsIGF0dGVtcHQgdG8gbW9kaWZ5IEJhc2VQbHVnaW5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwicHJvY2Vzc2luZ0RlbGF5QXNTYW1wbGVzXCI6IHtcbiAgICAgICAgICAgIFwiZ2V0XCI6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBkZWxheVNhbXBsZXM7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJzZXRcIjogdGhpcy5zZXRQcm9jZXNzaW5nRGVsYXlBc1NhbXBsZXNcbiAgICAgICAgfSxcbiAgICAgICAgXCJwcm9jZXNzaW5nRGVsYXlBc1NlY29uZHNcIjoge1xuICAgICAgICAgICAgXCJnZXRcIjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlbGF5U2FtcGxlcy9mYWN0b3J5LmNvbnRleHQuc2FtcGxlUmF0ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInNldFwiOiB0aGlzLnNldFByb2Nlc3NpbmdEZWxheUFzU2Vjb25kc1xuICAgICAgICB9LFxuICAgICAgICBcImNvbm5lY3RcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoZGVzdCkge1xuICAgICAgICAgICAgICAgIHRoaXMub3V0cHV0c1swXS5jb25uZWN0KGRlc3QuaW5wdCA/IGRlc3QuaW5wdXQgOiBkZXN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJkaXNjb25uZWN0XCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKGRlc3QpIHtcbiAgICAgICAgICAgICAgICBpZiAoZGVzdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3V0cHV0c1swXS5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vdXRwdXRzWzBdLmRpc2Nvbm5lY3QoZGVzdC5pbnB1dCA/IGRlc3QuaW5wdXQgOiBkZXN0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0SW5wdXRzXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmlucHV0cztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRPdXRwdXRzXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm91dHB1dHM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0UGFyYW1ldGVyTmFtZXNcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyYW1ldGVycy5nZXRQYXJhbWV0ZXJOYW1lcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImdldFBhcmFtZXRlckJ5TmFtZVwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyYW1ldGVycy5nZXRQYXJhbWV0ZXJCeU5hbWUobmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0UGFyYW1ldGVyT2JqZWN0XCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcmFtZXRlcnMuZ2V0UGFyYW1ldGVyT2JqZWN0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwic2V0UGFyYW1ldGVyQnlOYW1lXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyYW1ldGVycy5zZXRQYXJhbWV0ZXJCeU5hbWUobmFtZSwgdmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInNldFBhcmFtZXRlcnNCeU9iamVjdFwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uIChvYmplY3QpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJhbWV0ZXJzLnNldFBhcmFtZXRlcnNCeU9iamVjdChvYmplY3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImFkZEV2ZW50TGlzdGVuZXJcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbihrZXksIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGV2ZW50VGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoa2V5LCB2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwicmVtb3ZlRXZlbnRMaXN0ZW5lclwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZXZlbnRUYXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihrZXksIHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufTtcblxuZXhwb3J0IHtCYXNlUGx1Z2lufTtcbiIsIi8qIGpzaGludCBlc3ZlcnNpb246IDYgKi9cbmltcG9ydCB7TnVtYmVyUGFyYW1ldGVyfSBmcm9tIFwiLi9wYXJhbWV0ZXJzL051bWJlclBhcmFtZXRlci5qc1wiO1xuaW1wb3J0IHtTdHJpbmdQYXJhbWV0ZXJ9IGZyb20gXCIuL3BhcmFtZXRlcnMvU3RyaW5nUGFyYW1ldGVyLmpzXCI7XG5pbXBvcnQge0J1dHRvblBhcmFtZXRlcn0gZnJvbSBcIi4vcGFyYW1ldGVycy9CdXR0b25QYXJhbWV0ZXIuanNcIjtcbmltcG9ydCB7U3dpdGNoUGFyYW1ldGVyfSBmcm9tIFwiLi9wYXJhbWV0ZXJzL1N3aXRjaFBhcmFtZXRlci5qc1wiO1xuaW1wb3J0IHtMaXN0UGFyYW1ldGVyfSBmcm9tIFwiLi9wYXJhbWV0ZXJzL0xpc3RQYXJhbWV0ZXIuanNcIjtcbmltcG9ydCB7VVJMUGFyYW1ldGVyfSBmcm9tIFwiLi9wYXJhbWV0ZXJzL1VSTFBhcmFtZXRlci5qc1wiO1xuaW1wb3J0IHtBc3NldFBhcmFtZXRlcn0gZnJvbSBcIi4vcGFyYW1ldGVycy9Bc3NldFBhcmFtZXRlci5qc1wiO1xuXG52YXIgUGFyYW1ldGVyTWFuYWdlciA9IGZ1bmN0aW9uIChvd25lciwgcGx1Z2luRXh0ZXJuYWxJbnRlcmZhY2UsIG5hbWUsIGV4cG9zZWQpIHtcbiAgICB2YXIgcGFyYW1ldGVyTGlzdCA9IFtdO1xuICAgIHZhciBldmVudFRhcmdldCA9IG5ldyBFdmVudFRhcmdldCgpO1xuICAgIGlmIChuYW1lID09IHVuZGVmaW5lZCkge1xuICAgICAgICBuYW1lID0gXCJkZWZhdWx0XCI7XG4gICAgfVxuICAgIGlmIChleHBvc2VkID09IHVuZGVmaW5lZCB8fCBuYW1lID09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAgIGV4cG9zZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGZpbmRQYXJhbWV0ZXIoc2VsZiwgbmFtZSkge1xuICAgICAgICBuYW1lID0gbmFtZS5yZXBsYWNlKFwiL1wiLCBcIl9cIikuc3BsaXQoXCIuXCIpLnJldmVyc2UoKTtcbiAgICAgICAgdmFyIGJhc2UgPSBwYXJhbWV0ZXJMaXN0O1xuICAgICAgICB2YXIgbG93ZXJDYXNlUGFyYW1ldGVyTmFtZXMgPSBwYXJhbWV0ZXJMaXN0Lm1hcChpID0+IGkubmFtZS50b0xvd2VyQ2FzZSgpKTtcbiAgICAgICAgdmFyIHBhcmFtID0gcGFyYW1ldGVyTGlzdFtsb3dlckNhc2VQYXJhbWV0ZXJOYW1lcy5pbmRleE9mKG5hbWUucG9wKCkudG9Mb3dlckNhc2UoKSldO1xuICAgICAgICBpZiAocGFyYW0uaGFzT3duUHJvcGVydHkoXCJnZXRQYXJhbWV0ZXJCeU5hbWVcIikpIHtcbiAgICAgICAgICAgIHJldHVybiBwYXJhbS5nZXRQYXJhbWV0ZXJCeU5hbWUobmFtZS5yZXZlcnNlKCkuam9pbihcIi5cIikpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHBhcmFtO1xuICAgICAgICB9XG4gICAgICAgIC8vIHJldHVybiBuYW1lLnNwbGl0KFwiLlwiKS5yZWR1Y2UoZnVuY3Rpb24oYmFzZSwgbmFtZSkge1xuICAgICAgICAvLyAgICAgcmV0dXJuIGJhc2VbbmFtZV0gfHwgYmFzZVtuYW1lLnRvTG93ZXJDYXNlKCldO1xuICAgICAgICAvLyB9LCBzZWxmKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpc1BhcmFtZXRlck5hbWVBdmFpbGFibGUoc2VsZiwgbmFtZSkge1xuICAgICAgICBuYW1lID0gbmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBuYW1lID0gbmFtZS5yZXBsYWNlKFwiL1wiLCBcIl9cIik7XG4gICAgICAgIGlmICghL15cXHcrKCBcXHcrKSooLVxcdyspKihfXFx3KykqJC8udGVzdChuYW1lKSkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFwiSW52YWxpZCBzdHJpbmcgZm9yIG5hbWVcIiwgbmFtZSwgXCJXaWxsIG5vdCBleHBvc2UgYXMgZG90IG5vdGF0aW9uc1wiKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzZWxmLmhhc093blByb3BlcnR5KG5hbWUpKSB7XG4gICAgICAgICAgICB0aHJvdyBcIk5hbWUgaXMgcmVzZXJ2ZWQgb3IgYWxyZWFkeSBkZWZpbmVkXCI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYnVpbGRQYXJhbWV0ZXJPYmplY3QoKSB7XG4gICAgICAgIHZhciBvYmogPSB7fTtcbiAgICAgICAgcGFyYW1ldGVyTGlzdC5maWx0ZXIoZnVuY3Rpb24ocCkge1xuICAgICAgICAgICAgcmV0dXJuIHAuZXhwb3NlZDtcbiAgICAgICAgfSkuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgb2JqW2UubmFtZV0gPSBlO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGRQYXJhbWV0ZXIocGFyYW0sIHNlbGYpIHtcbiAgICAgICAgaWYgKHBhcmFtLm5hbWUuaW5jbHVkZXMoXCIuXCIpKSB7XG4gICAgICAgICAgICB0aHJvdyhcIk5hbWUgY2Fubm90IGluY2x1ZGUgYSBwZXJpb2RcIik7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGV4aXN0cyA9IHBhcmFtZXRlckxpc3QuZmluZEluZGV4KGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICByZXR1cm4gZSA9PT0gcGFyYW07XG4gICAgICAgIH0sIHBhcmFtKTtcbiAgICAgICAgaWYgKGV4aXN0cyA9PT0gLTEpIHtcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzZWxmLCBwYXJhbS5uYW1lLCB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IHBhcmFtXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHBhcmFtZXRlckxpc3QucHVzaChwYXJhbSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBhcmFtO1xuICAgIH1cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgICAgXCJhZGRFdmVudExpc3RlbmVyXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24odHlwZSwgbGlzdGVuZXIsIG9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZXZlbnRUYXJnZXQuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lciwgb3B0aW9ucyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwicmVtb3ZlRXZlbnRMaXN0ZW5lclwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKHR5cGUsIGxpc3RlbmVyLCBvcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGV2ZW50VGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXIsIG9wdGlvbnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImhhbmRsZUV2ZW50XCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgIHZhciBkZXRhaWwgPSBlLmRldGFpbDtcbiAgICAgICAgICAgICAgICBpZiAoZGV0YWlsLnVwZGF0ZUludGVyZmFjZXMgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHBsdWdpbkV4dGVybmFsSW50ZXJmYWNlLnVwZGF0ZUludGVyZmFjZXMoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGUudHlwZSA9PSBcInBhcmFtZXRlcnNldFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50VGFyZ2V0LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwicGFyYW1ldGVyc2V0XCIsIHtkZXRhaWw6IGRldGFpbC5wYXJhbWV0ZXJ9KSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAnY3JlYXRlTnVtYmVyUGFyYW1ldGVyJzoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAobmFtZSwgZGVmYXVsdFZhbHVlLCBtaW5pbXVtLCBtYXhpbXVtLCB0b1N0cmluZ0Z1bmMsIHZpc2libGVOYW1lLCBleHBvc2VkKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBuYW1lICE9PSBcInN0cmluZ1wiIHx8IHR5cGVvZiBkZWZhdWx0VmFsdWUgIT09IFwibnVtYmVyXCIgfHwgKG1pbmltdW0gIT09IHVuZGVmaW5lZCAmJiB0eXBlb2YgbWluaW11bSAhPT0gXCJudW1iZXJcIikgfHwgKG1heGltdW0gIT09IHVuZGVmaW5lZCAmJiB0eXBlb2YgbWF4aW11bSAhPT0gXCJudW1iZXJcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgKFwiSW52bGlkIGNvbnN0cnVjdG9yXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRvU3RyaW5nRnVuYyAhPSBcImZ1bmN0aW9uXCIgJiYgdG9TdHJpbmdGdW5jICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgKFwidG9TdHJpbmdGdW5jIG11c3QgYmUgYSBmdW5jdGlvbiBvciB1bmRlZmluZWRcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChpc1BhcmFtZXRlck5hbWVBdmFpbGFibGUodGhpcywgbmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBhcmFtID0gbmV3IE51bWJlclBhcmFtZXRlcihvd25lciwgbmFtZSwgZGVmYXVsdFZhbHVlLCBtaW5pbXVtLCBtYXhpbXVtLCB0b1N0cmluZ0Z1bmMsIHZpc2libGVOYW1lLCBleHBvc2VkKTtcbiAgICAgICAgICAgICAgICAgICAgYWRkUGFyYW1ldGVyKHBhcmFtLCB0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgcGFyYW0uYWRkRXZlbnRMaXN0ZW5lcihcInBhcmFtZXRlcnNldFwiLCB0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBhcmFtO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAnY3JlYXRlU3RyaW5nUGFyYW1ldGVyJzoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAobmFtZSwgZGVmYXVsdFZhbHVlLCBtYXhMZW5ndGgsIHRvU3RyaW5nRnVuYywgdmlzaWJsZU5hbWUsIGV4cG9zZWQpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG5hbWUgIT09IFwic3RyaW5nXCIgfHwgdHlwZW9mIGRlZmF1bHRWYWx1ZSAhPT0gXCJzdHJpbmdcIiB8fCAobWF4TGVuZ3RoICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIG1heExlbmd0aCAhPT0gXCJudW1iZXJcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgKFwiSW52bGlkIGNvbnN0cnVjdG9yXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRvU3RyaW5nRnVuYyAhPSBcImZ1bmN0aW9uXCIgJiYgdG9TdHJpbmdGdW5jICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgKFwidG9TdHJpbmdGdW5jIG11c3QgYmUgYSBmdW5jdGlvbiBvciB1bmRlZmluZWRcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChpc1BhcmFtZXRlck5hbWVBdmFpbGFibGUodGhpcywgbmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBhcmFtID0gbmV3IFN0cmluZ1BhcmFtZXRlcihvd25lciwgbmFtZSwgZGVmYXVsdFZhbHVlLCBtYXhMZW5ndGgsIHRvU3RyaW5nRnVuYywgdmlzaWJsZU5hbWUsIGV4cG9zZWQpO1xuICAgICAgICAgICAgICAgICAgICBhZGRQYXJhbWV0ZXIocGFyYW0sIHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICBwYXJhbS5hZGRFdmVudExpc3RlbmVyKFwicGFyYW1ldGVyc2V0XCIsIHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGFyYW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAnY3JlYXRlQnV0dG9uUGFyYW1ldGVyJzoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbmFtZSAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyAoXCJJbnZhbGlkIGNvbnN0cnVjdG9yXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoaXNQYXJhbWV0ZXJOYW1lQXZhaWxhYmxlKHRoaXMsIG5hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwYXJhbSA9IG5ldyBCdXR0b25QYXJhbWV0ZXIob3duZXIsIG5hbWUpO1xuICAgICAgICAgICAgICAgICAgICBhZGRQYXJhbWV0ZXIocGFyYW0sIHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICBwYXJhbS5hZGRFdmVudExpc3RlbmVyKFwicGFyYW1ldGVyc2V0XCIsIHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGFyYW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAnY3JlYXRlU3dpdGNoUGFyYW1ldGVyJzoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAobmFtZSwgZGVmYXVsdFZhbHVlLCBtaW5TdGF0ZSwgbWF4U3RhdGUsIHRvU3RyaW5nRnVuYywgdmlzaWJsZU5hbWUsIGV4cG9zZWQpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG5hbWUgIT09IFwic3RyaW5nXCIgfHwgdHlwZW9mIGRlZmF1bHRWYWx1ZSAhPT0gXCJudW1iZXJcIiB8fCB0eXBlb2YgbWluU3RhdGUgIT09IFwibnVtYmVyXCIgfHwgdHlwZW9mIG1heFN0YXRlICE9PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IChcIkludmxpZCBjb25zdHJ1Y3RvclwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0b1N0cmluZ0Z1bmMgIT0gXCJmdW5jdGlvblwiICYmIHRvU3RyaW5nRnVuYyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IChcInRvU3RyaW5nRnVuYyBtdXN0IGJlIGEgZnVuY3Rpb24gb3IgdW5kZWZpbmVkXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoaXNQYXJhbWV0ZXJOYW1lQXZhaWxhYmxlKHRoaXMsIG5hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwYXJhbSA9IG5ldyBTd2l0Y2hQYXJhbWV0ZXIob3duZXIsIG5hbWUsIGRlZmF1bHRWYWx1ZSwgbWluU3RhdGUsIG1heFN0YXRlLCB0b1N0cmluZ0Z1bmMsIHZpc2libGVOYW1lLCBleHBvc2VkKTtcbiAgICAgICAgICAgICAgICAgICAgYWRkUGFyYW1ldGVyKHBhcmFtLCB0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgcGFyYW0uYWRkRXZlbnRMaXN0ZW5lcihcInBhcmFtZXRlcnNldFwiLCB0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBhcmFtO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAnY3JlYXRlTGlzdFBhcmFtZXRlcic6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKG5hbWUsIGRlZmF1bHRWYWx1ZSwgbGlzdE9mVmFsdWVzLCB0b1N0cmluZ0Z1bmMsIHZpc2libGVOYW1lLCBleHBvc2VkKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBuYW1lICE9PSBcInN0cmluZ1wiIHx8IHR5cGVvZiBkZWZhdWx0VmFsdWUgPT09IFwidW5kZWZpbmVkXCIgfHwgIUFycmF5LmlzQXJyYXkobGlzdE9mVmFsdWVzKSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyAoXCJJbnZsaWQgY29uc3RydWN0b3JcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdG9TdHJpbmdGdW5jICE9IFwiZnVuY3Rpb25cIiAmJiB0b1N0cmluZ0Z1bmMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyAoXCJ0b1N0cmluZ0Z1bmMgbXVzdCBiZSBhIGZ1bmN0aW9uIG9yIHVuZGVmaW5lZFwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGxpc3RPZlZhbHVlcy5pbmNsdWRlcyhkZWZhdWx0VmFsdWUpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyAoXCJJbnZsaWQgY29uc3RydWN0b3IgLSBkZWZhdWx0IHZhbHVlIG1pc3NpbmdcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChpc1BhcmFtZXRlck5hbWVBdmFpbGFibGUodGhpcywgbmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBhcmFtID0gbmV3IExpc3RQYXJhbWV0ZXIob3duZXIsIG5hbWUsIGRlZmF1bHRWYWx1ZSwgbGlzdE9mVmFsdWVzLCB0b1N0cmluZ0Z1bmMsIHZpc2libGVOYW1lLCBleHBvc2VkKTtcbiAgICAgICAgICAgICAgICAgICAgYWRkUGFyYW1ldGVyKHBhcmFtLCB0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgcGFyYW0uYWRkRXZlbnRMaXN0ZW5lcihcInBhcmFtZXRlcnNldFwiLCB0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBhcmFtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgJ2NyZWF0ZVVSTFBhcmFtZXRlcic6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKG5hbWUsIGRlZmF1bHRWYWx1ZSwgbWF4TGVuZ3RoLCB0b1N0cmluZ0Z1bmMsIHZpc2libGVOYW1lLCBleHBvc2VkKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBuYW1lICE9PSBcInN0cmluZ1wiIHx8IChtYXhMZW5ndGggIT09IHVuZGVmaW5lZCAmJiB0eXBlb2YgbWF4TGVuZ3RoICE9PSBcIm51bWJlclwiKSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyAoXCJJbnZsaWQgY29uc3RydWN0b3JcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdG9TdHJpbmdGdW5jICE9IFwiZnVuY3Rpb25cIiAmJiB0b1N0cmluZ0Z1bmMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyAoXCJ0b1N0cmluZ0Z1bmMgbXVzdCBiZSBhIGZ1bmN0aW9uIG9yIHVuZGVmaW5lZFwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGlzUGFyYW1ldGVyTmFtZUF2YWlsYWJsZSh0aGlzLCBuYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcGFyYW0gPSBuZXcgVVJMUGFyYW1ldGVyKG93bmVyLCBuYW1lLCBkZWZhdWx0VmFsdWUsIG1heExlbmd0aCwgdG9TdHJpbmdGdW5jLCB2aXNpYmxlTmFtZSwgZXhwb3NlZCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZFBhcmFtZXRlcihwYXJhbSwgdGhpcyk7XG4gICAgICAgICAgICAgICAgICAgIHBhcmFtLmFkZEV2ZW50TGlzdGVuZXIoXCJwYXJhbWV0ZXJzZXRcIiwgdGhpcyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwYXJhbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgICdjcmVhdGVBc3NldFBhcmFtZXRlcic6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKHJlc291cmNlVHlwZSwgbmFtZSwgZGVmYXVsdFZhbHVlLCB2aXNpYmxlTmFtZSwgZXhwb3NlZCkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbmFtZSAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyAoXCJJbnZsaWQgY29uc3RydWN0b3JcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChpc1BhcmFtZXRlck5hbWVBdmFpbGFibGUodGhpcywgbmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBhcmFtID0gbmV3IEFzc2V0UGFyYW1ldGVyKG93bmVyLCByZXNvdXJjZVR5cGUsIG5hbWUsIGRlZmF1bHRWYWx1ZSwgdmlzaWJsZU5hbWUsIGV4cG9zZWQpO1xuICAgICAgICAgICAgICAgICAgICBhZGRQYXJhbWV0ZXIocGFyYW0sIHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICBwYXJhbS5hZGRFdmVudExpc3RlbmVyKFwicGFyYW1ldGVyc2V0XCIsIHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGFyYW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAnY3JlYXRlUGFyYW1ldGVyTWFuYWdlcic6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24obmFtZSkge1xuICAgICAgICAgICAgICAgIGlmIChpc1BhcmFtZXRlck5hbWVBdmFpbGFibGUodGhpcywgbmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBhcmFtID0gbmV3IFBhcmFtZXRlck1hbmFnZXIob3duZXIsIHBsdWdpbkV4dGVybmFsSW50ZXJmYWNlLCBuYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgYWRkUGFyYW1ldGVyKHBhcmFtLCB0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBhcmFtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgJ2NyZWF0ZVBhcmFtZXRlcic6IHtcbiAgICAgICAgICAgICd2YWx1ZSc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyAoXCJUaGlzIGZ1bmN0aW9uIGlzIG5vdyBkZXByZWNhdGVkXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAnZ2V0UGFyYW1ldGVyTmFtZSc6IHtcbiAgICAgICAgICAgICd2YWx1ZSc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiREVQUkVDQVRFRCAtIHVzZSBnZXRQYXJhbWV0ZXJOYW1lc1wiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRQYXJhbWV0ZXJOYW1lcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAnZ2V0UGFyYW1ldGVyQnlOYW1lJzoge1xuICAgICAgICAgICAgJ3ZhbHVlJzogZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmluZFBhcmFtZXRlcih0aGlzLCBuYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgJ2dldFBhcmFtZXRlck9iamVjdCc6IHtcbiAgICAgICAgICAgICd2YWx1ZSc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYnVpbGRQYXJhbWV0ZXJPYmplY3QoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgJ2dldFBhcmFtZXRlck5hbWVzJzoge1xuICAgICAgICAgICAgJ3ZhbHVlJzogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBwYXJhbWV0ZXJMaXN0LmZpbHRlcihmdW5jdGlvbihwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwLmV4cG9zZWQ7XG4gICAgICAgICAgICAgICAgfSkubWFwKGZ1bmN0aW9uKHApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHAuY29uc3RydWN0b3IgPT0gdGhpcy5jb25zdHJ1Y3Rvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHAuZ2V0UGFyYW1ldGVyTmFtZXMoKS5tYXAoZnVuY3Rpb24ocCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm5hbWUgKyBcIi5cIiArIHA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBwKS5mbGF0KCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcC5uYW1lO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgdGhpcykuZmxhdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAnc2V0UGFyYW1ldGVyQnlOYW1lJzoge1xuICAgICAgICAgICAgJ3ZhbHVlJzogZnVuY3Rpb24gKG4sIHYsIHVwZGF0ZUludGVyZmFjZXMpIHtcbiAgICAgICAgICAgICAgICB2YXIgcGFyYW1ldGVyID0gZmluZFBhcmFtZXRlcih0aGlzLCBuKTtcbiAgICAgICAgICAgICAgICBpZiAoIXBhcmFtZXRlcikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChwYXJhbWV0ZXIuZXhwb3NlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgXCJDYW5ub3Qgc2V0IGhpZGRlbiBwYXJhbWV0ZXJcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGFyYW1ldGVyLnNldFZhbHVlKHYsIHVwZGF0ZUludGVyZmFjZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAnZGVsZXRlUGFyYW1ldGVyJzoge1xuICAgICAgICAgICAgJ3ZhbHVlJzogZnVuY3Rpb24gKG8pIHtcbiAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSBwYXJhbWV0ZXJMaXN0LmZpbmRJbmRleChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZSA9PT0gbztcbiAgICAgICAgICAgICAgICB9LCBvKTtcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBEb2VzIGV4aXN0XG4gICAgICAgICAgICAgICAgICAgIHBhcmFtZXRlckxpc3Quc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgICAgICAgICAgby5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgICdkZWxldGVBbGxQYXJhbWV0ZXJzJzoge1xuICAgICAgICAgICAgJ3ZhbHVlJzogZnVuY3Rpb24gKG8pIHtcbiAgICAgICAgICAgICAgICBwYXJhbWV0ZXJMaXN0LmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgZS5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcGFyYW1ldGVyTGlzdCA9IFtdO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAnc2V0UGFyYW1ldGVyc0J5T2JqZWN0Jzoge1xuICAgICAgICAgICAgJ3ZhbHVlJzogZnVuY3Rpb24gKG9iamVjdCwgdXBkYXRlSW50ZXJmYWNlcykge1xuICAgICAgICAgICAgICAgIHZhciBrZXk7XG4gICAgICAgICAgICAgICAgZm9yIChrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvYmplY3QuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvYmplY3Rba2V5XSA9PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRQYXJhbWV0ZXJCeU5hbWUoa2V5LCBvYmplY3Rba2V5XS52YWx1ZSwgdXBkYXRlSW50ZXJmYWNlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBvYmplY3Rba2V5XSA9PSBcIm51bWJlclwiIHx8IHR5cGVvZiBvYmplY3Rba2V5XSA9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRQYXJhbWV0ZXJCeU5hbWUoa2V5LCBvYmplY3Rba2V5XSwgdXBkYXRlSW50ZXJmYWNlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IChcIkNhbm5vdCBzZXQgXCIgKyBrZXkgKyBcIjogTm90IGEgdmFsaWQgb2JqZWN0XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAndG9KU09OJzoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhcmFtZXRlckxpc3QuZmlsdGVyKGZ1bmN0aW9uKHApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHAuZXhwb3NlZDtcbiAgICAgICAgICAgICAgICB9KS5yZWR1Y2UoZnVuY3Rpb24gKG9iaiwgZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZS5oYXNPd25Qcm9wZXJ0eShcInRvSlNPTlwiKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgb2JqW2UubmFtZV0gPSBlLnRvSlNPTigpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGUuaGFzT3duUHJvcGVydHkoXCJnZXRQYXJhbWV0ZXJPYmplY3RcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ialtlLm5hbWVdID0gZS5nZXRQYXJhbWV0ZXJPYmplY3QoKTtcbiAgICAgICAgICAgICAgICAgICAgfWVsc2UgaWYgKGUuaGFzT3duUHJvcGVydHkoXCJ0b1N0cmluZ1wiKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgb2JqW2UubmFtZV0gPSBlLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZS5oYXNPd25Qcm9wZXJ0eShcInZhbHVlXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvYmpbZS5uYW1lXSA9IGUudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9iajtcbiAgICAgICAgICAgICAgICB9LCB7fSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgICdwYXJhbWV0ZXJzJzoge1xuICAgICAgICAgICAgJ2dldCc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYnVpbGRQYXJhbWV0ZXJPYmplY3QoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAnc2V0JzogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHRocm93IChcIkNhbm5vdCBzZXQsIHVzZSAuc2V0UGFyYW1ldGVyQnkuLi4oKVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJleHBvc2VkXCI6IHtcbiAgICAgICAgICAgIFwiZ2V0XCI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZXhwb3NlZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IHtcbiAgICAgICAgICAgIFwiZ2V0XCI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmFtZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufTtcblxuZXhwb3J0IHtQYXJhbWV0ZXJNYW5hZ2VyfTtcbiIsIi8qIGpzaGludCBlc3ZlcnNpb246IDYgKi9cbmltcG9ydCB7UGx1Z2luUGFyYW1ldGVyfSBmcm9tIFwiLi9QbHVnaW5QYXJhbWV0ZXIuanNcIjtcbmltcG9ydCB7TGlzdFBhcmFtZXRlcn0gZnJvbSBcIi4vTGlzdFBhcmFtZXRlci5qc1wiO1xuXG5mdW5jdGlvbiBBc3NldFBhcmFtZXRlcihvd25lciwgcmVzb3VyY2VUeXBlLCBuYW1lLCB2aXNpYmxlTmFtZSwgZXhwb3NlZCkge1xuICAgIFBsdWdpblBhcmFtZXRlci5jYWxsKHRoaXMsIG93bmVyLCBuYW1lLCBcIlN0cmluZ1wiLCB2aXNpYmxlTmFtZSwgZXhwb3NlZCk7XG4gICAgdmFyIHJlc291cmNlT3B0aW9ucyA9IG93bmVyLmZhY3RvcnkucGx1Z2luQXNzZXRzLmFzc2V0UGFja3MuZmlsdGVyKGZ1bmN0aW9uKHBhY2spIHtcbiAgICAgICAgcmV0dXJuIHBhY2sucmVzb3VyY2VUeXBlID09IHJlc291cmNlVHlwZTtcbiAgICB9KS5tYXAoZnVuY3Rpb24ocGFjaykge3JldHVybiBwYWNrLmFzc2V0T2JqZWN0czt9KS5mbGF0KCk7XG4gICAgdmFyIGFzc2V0TGlzdCA9IG5ldyBMaXN0UGFyYW1ldGVyKG93bmVyLCBuYW1lK1wiIGxpc3RcIiwgcmVzb3VyY2VPcHRpb25zWzBdLCByZXNvdXJjZU9wdGlvbnMsIGZ1bmN0aW9uKHYpe3JldHVybiB2LnVybDt9LCBuYW1lK1wiIGxpc3RcIiwgZmFsc2UpO1xuICAgIHZhciBhdWRpb0J1ZmZlciwgb25sb2FkQ2FsbGJhY2ssIG9uZXJyb3JDYWxsYmFjaztcblxuICAgIGZ1bmN0aW9uIGxvYWRBc3NldCgpIHtcbiAgICAgICAgYXNzZXRMaXN0LnZhbHVlLmZldGNoKClcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24oYnVmZmVyKSB7XG4gICAgICAgICAgICBhdWRpb0J1ZmZlciA9IGJ1ZmZlcjtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb25sb2FkQ2FsbGJhY2sgPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgb25sb2FkQ2FsbGJhY2soYnVmZmVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgZnVuY3Rpb24oZSl7XG4gICAgICAgICAgICBpZiAodHlwZW9mIG9uZXJyb3JDYWxsYmFjayA9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICBvbmVycm9yQ2FsbGJhY2soZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldFZhbHVlKHYsIHVwZGF0ZUludGVyZmFjZXMpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB2ID09IFwib2JqZWN0XCIgJiYgdi5oYXNPd25Qcm9wZXJ0eShcInVybFwiKSkge1xuICAgICAgICAgICAgdiA9IHYudXJsO1xuICAgICAgICB9XG4gICAgICAgIHZhciB0diA9IGFzc2V0TGlzdC52YWx1ZS51cmw7XG4gICAgICAgIHZhciBpdGVtID0gYXNzZXRMaXN0Lmxpc3RWYWx1ZXMuZmluZChmdW5jdGlvbihsKSB7XG4gICAgICAgICAgICByZXR1cm4gbC51cmwgPT0gdjtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChpdGVtKSB7XG4gICAgICAgICAgICBhc3NldExpc3QudmFsdWUgPSBpdGVtO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhc3NldExpc3QudmFsdWUudXJsICE9IHR2KSB7XG4gICAgICAgICAgICAvLyBhc3NldCBoYXMgY2hhbmdlZCB1cmwuXG4gICAgICAgICAgICBsb2FkQXNzZXQoKTtcbiAgICAgICAgICAgIHRoaXMudHJpZ2dlclBhcmFtZXRlclNldCh1cGRhdGVJbnRlcmZhY2VzKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRyaWdnZXIoKTtcbiAgICAgICAgcmV0dXJuIGFzc2V0TGlzdC52YWx1ZTtcbiAgICB9XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XG4gICAgICAgIFwib25sb2FkXCI6IHtcbiAgICAgICAgICAgIFwiZ2V0XCI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gb25sb2FkQ2FsbGJhY2s7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJzZXRcIjogZnVuY3Rpb24oZikge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZiAhPSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3coXCJBc3NldFBhcmFtZXRlcjo6b25sb2FkIHJlcXVpcmVzIGEgZnVuY3Rpb24gd2l0aCBvbmUgYXJndW1lbnQgdG8gYmUgc2V0XCIpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG9ubG9hZENhbGxiYWNrID0gZjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGF1ZGlvQnVmZmVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvbmxvYWRDYWxsYmFjayhhdWRpb0J1ZmZlcik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9ubG9hZENhbGxiYWNrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJvbmVycm9yXCI6IHtcbiAgICAgICAgICAgIFwiZ2V0XCI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gb25lcnJvckNhbGxiYWNrO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwic2V0XCI6IGZ1bmN0aW9uKGYpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGYgIT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93KFwiQXNzZXRQYXJhbWV0ZXI6Om9uZXJyb3IgcmVxdWlyZXMgYSBmdW5jdGlvbiB3aXRoIG9uZSBhcmd1bWVudCB0byBiZSBzZXRcIik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgb25lcnJvckNhbGxiYWNrID0gZjtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9uZXJyb3JDYWxsYmFjaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwidHlwZVwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IFwiQXNzZXRcIlxuICAgICAgICB9LFxuICAgICAgICBcImRlc3Ryb3lcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgYXNzZXRMaXN0LmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICBvd25lciA9IG5hbWUgPSBkZWZhdWx0VmFsdWUgPSBhc3NldExpc3QgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwidmFsdWVcIjoge1xuICAgICAgICAgICAgXCJnZXRcIjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBhc3NldExpc3QudmFsdWUudXJsO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwic2V0XCI6IGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgICAgICAgc2V0VmFsdWUuY2FsbCh0aGlzLCB2LCB0cnVlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXNzZXRMaXN0LnZhbHVlLnVybDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJzZXRWYWx1ZVwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKHYsIHVwZGF0ZUludGVyZmFjZXMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2V0VmFsdWUuY2FsbCh0aGlzLCB2LCB1cGRhdGVJbnRlcmZhY2VzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRSZXNvdXJjZVwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGlmIChhdWRpb0J1ZmZlclByb21pc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGF1ZGlvQnVmZmVyUHJvbWlzZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbG9hZEFzc2V0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImJ1ZmZlclwiOiB7XG4gICAgICAgICAgICBcImdldFwiOiBmdW5jdGlvbigpIHtyZXR1cm4gYXVkaW9CdWZmZXI7fVxuICAgICAgICB9LFxuICAgICAgICBcInRvU3RyaW5nXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24odikge1xuICAgICAgICAgICAgICAgIHJldHVybiBhc3NldExpc3QudG9TdHJpbmcodik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwib3B0aW9uc1wiOiB7XG4gICAgICAgICAgICBcImdldFwiOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXNzZXRMaXN0Lmxpc3RWYWx1ZXM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0UGFyYW1ldGVyT2JqZWN0XCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGFzc2V0TGlzdC52YWx1ZS50b0pTT04oKSxcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogYXNzZXRMaXN0Lmxpc3RWYWx1ZXMubWFwKGZ1bmN0aW9uKHYpe3JldHVybiB2LnRvSlNPTigpO30pLFxuICAgICAgICAgICAgICAgICAgICBsb2FkZWQ6IChhdWRpb0J1ZmZlciAhPT0gdW5kZWZpbmVkKSxcbiAgICAgICAgICAgICAgICAgICAgdmlzaWJsZU5hbWU6IG5hbWUsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiQXNzZXRQYXJhbWV0ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogbmFtZVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGxvYWRBc3NldCgpO1xufVxuQXNzZXRQYXJhbWV0ZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShQbHVnaW5QYXJhbWV0ZXIucHJvdG90eXBlKTtcbkFzc2V0UGFyYW1ldGVyLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEFzc2V0UGFyYW1ldGVyO1xuXG5leHBvcnQge0Fzc2V0UGFyYW1ldGVyfTtcbiIsIi8qIGpzaGludCBlc3ZlcnNpb246IDYgKi9cbmltcG9ydCB7UGx1Z2luUGFyYW1ldGVyfSBmcm9tIFwiLi9QbHVnaW5QYXJhbWV0ZXIuanNcIjtcblxuZnVuY3Rpb24gQnV0dG9uUGFyYW1ldGVyKG93bmVyLCBuYW1lLCB2aXNpYmxlTmFtZSwgZXhwb3NlZCkge1xuICAgIFBsdWdpblBhcmFtZXRlci5jYWxsKHRoaXMsIG93bmVyLCBuYW1lLCBcIkJ1dHRvblwiLCB2aXNpYmxlTmFtZSwgZXhwb3NlZCk7XG4gICAgdmFyIG9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7fTtcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgICAgXCJ0eXBlXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogXCJCdXR0b25cIlxuICAgICAgICB9LFxuICAgICAgICBcImRlc3Ryb3lcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgb3duZXIgPSBuYW1lID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcIm9uY2xpY2tcIjoge1xuICAgICAgICAgICAgXCJnZXRcIjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBvbmNsaWNrO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwic2V0XCI6IGZ1bmN0aW9uIChmKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBmICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgKFwib25jbGljayBtdXN0IGJlIGEgZnVuY3Rpb25cIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG9uY2xpY2sgPSBmO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImdldFBhcmFtZXRlck9iamVjdFwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIHZpc2libGVOYW1lOiBuYW1lLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIkJ1dHRvblBhcmFtZXRlclwiLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBuYW1lXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuQnV0dG9uUGFyYW1ldGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoUGx1Z2luUGFyYW1ldGVyLnByb3RvdHlwZSk7XG5CdXR0b25QYXJhbWV0ZXIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gQnV0dG9uUGFyYW1ldGVyO1xuXG5leHBvcnQge0J1dHRvblBhcmFtZXRlcn07XG4iLCIvKiBqc2hpbnQgZXN2ZXJzaW9uOiA2ICovXG5pbXBvcnQge1BsdWdpblBhcmFtZXRlcn0gZnJvbSBcIi4vUGx1Z2luUGFyYW1ldGVyLmpzXCI7XG5pbXBvcnQge1BhcmFtZXRlclN0ZXBBdXRvbWF0aW9ufSBmcm9tIFwiLi9QYXJhbWV0ZXJBdXRvbWF0aW9uLmpzXCI7XG5cbmZ1bmN0aW9uIExpc3RQYXJhbWV0ZXIob3duZXIsIG5hbWUsIGRlZmF1bHRWYWx1ZSwgbGlzdE9mVmFsdWVzLCB0b1N0cmluZ0Z1bmMsIHZpc2libGVOYW1lLCBleHBvc2VkKSB7XG4gICAgUGx1Z2luUGFyYW1ldGVyLmNhbGwodGhpcywgb3duZXIsIG5hbWUsIFwiQnV0dG9uXCIsIHZpc2libGVOYW1lLCBleHBvc2VkKTtcbiAgICB2YXIgYXVkaW9QYXJhbWV0ZXIsIGF1dG9tYXRpb247XG4gICAgdmFyIG9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7fTtcbiAgICB2YXIgX2luZGV4ID0gbGlzdE9mVmFsdWVzLmluZGV4T2YoZGVmYXVsdFZhbHVlKTtcblxuICAgIGZ1bmN0aW9uIHNldFYodiwgdXBkYXRlSW50ZXJmYWNlcykge1xuICAgICAgICB2YXIgaSA9IGxpc3RPZlZhbHVlcy5pbmRleE9mKHYpO1xuICAgICAgICBpZiAoaSA9PT0gdW5kZWZpbmVkIHx8IGkgPCAwKSB7XG4gICAgICAgICAgICB0aHJvdyhcIk5vdCBpbiBsaXN0IHJhbmdlXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmJvdW5kQXVkaW9QYXJhbSkge1xuICAgICAgICAgICAgdGhpcy5ib3VuZEF1ZGlvUGFyYW0udmFsdWUgPSB0aGlzLnVwZGF0ZSh2KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoX2luZGV4ICE9PSBpKSB7XG4gICAgICAgICAgICBfaW5kZXggPSBpO1xuICAgICAgICAgICAgdGhpcy50cmlnZ2VyUGFyYW1ldGVyU2V0KHVwZGF0ZUludGVyZmFjZXMpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudHJpZ2dlcigpO1xuICAgICAgICByZXR1cm4gbGlzdE9mVmFsdWVzW19pbmRleF07XG4gICAgfVxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgICBcInR5cGVcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIkxpc3RcIlxuICAgICAgICB9LFxuICAgICAgICBcImRlc3Ryb3lcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgb3duZXIgPSBuYW1lID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImRlZmF1bHRWYWx1ZVwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGRlZmF1bHRWYWx1ZVxuICAgICAgICB9LFxuICAgICAgICBcImxpc3RWYWx1ZXNcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBsaXN0T2ZWYWx1ZXNcbiAgICAgICAgfSxcbiAgICAgICAgXCJ2YWx1ZVwiOiB7XG4gICAgICAgICAgICBcImdldFwiOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKGF1ZGlvUGFyYW1ldGVyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRyYW5zbGF0ZShhdWRpb1BhcmFtZXRlci52YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBsaXN0T2ZWYWx1ZXNbX2luZGV4XTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInNldFwiOiBmdW5jdGlvbiAodikge1xuICAgICAgICAgICAgICAgIHJldHVybiBzZXRWLmNhbGwodGhpcywgdiwgdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwic2V0VmFsdWVcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbih2LCB1cGRhdGVJbnRlcmZhY2VzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNldFYuY2FsbCh0aGlzLCB2LCB1cGRhdGVJbnRlcmZhY2VzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJpbmNyZW1lbnRcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIHYgPSBfaW5kZXggKyAxO1xuICAgICAgICAgICAgICAgIGlmICh2ID49IGxpc3RPZlZhbHVlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgdiA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBzZXRWLmNhbGwodGhpcywgdik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiZGVjcmVtZW50XCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciB2ID0gX2luZGV4IC0gMTtcbiAgICAgICAgICAgICAgICBpZiAodiA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdiA9IGxpc3RPZlZhbHVlcy5sZW5ndGgtMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNldFYuY2FsbCh0aGlzLCB2KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJiaW5kVG9BdWRpb1BhcmFtXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKGFwKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBhcCA9PSBcIm9iamVjdFwiICYmIGFwLnZhbHVlICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBhdWRpb1BhcmFtZXRlciA9IGFwO1xuICAgICAgICAgICAgICAgICAgICBhdWRpb1BhcmFtZXRlci52YWx1ZSA9IHRoaXMudXBkYXRlKGxpc3RPZlZhbHVlc1tfaW5kZXhdKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFwLnNldFZhbHVlQXRUaW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRvbWF0aW9uID0gbmV3IFBhcmFtZXRlclN0ZXBBdXRvbWF0aW9uKHRoaXMsIGF1ZGlvUGFyYW1ldGVyLCAwLCBsaXN0VmFsdWVzLmxlbmd0aCwgdG9TdHJpbmdGdW5jKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImdldFZhbHVlQXRUaW1lUG9pbnRcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKHRpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmF1dG9tYXRpb25Qb2ludHMuZ2V0VmFsdWVBdFRpbWVQb2ludCh0aW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdXRvbWF0aW9uUG9pbnRzXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBhdXRvbWF0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN0YXJ0XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbih0aW1lLCBjb250ZXh0VGltZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGF1dG9tYXRpb24uc3RhcnQodGltZSwgY29udGV4dFRpbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN0b3BcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKGNvbnRleHRUaW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvbWF0aW9uLnN0b3AoY29udGV4dFRpbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImVuYWJsZWRcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImdldFwiOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhdXRvbWF0aW9uLmVuYWJsZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2V0XCI6IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoYXV0b21hdGlvbi5lbmFibGVkID0gdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIkNhbm5vdCBiaW5kIGF1dG9tYXRpb24gYXMgQXVkaW9QYXJhbWV0ZXIgaXMgbm90IGF1dG9tYXRhYmxlXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3coXCJBcmd1bWVudCAxIGlzIG5vdCBhIHZhbGlkIEF1ZGlvUGFyYW1ldGVyIG9iamVjdFwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiYm91bmRBdWRpb1BhcmFtXCI6IHtcbiAgICAgICAgICAgIFwiY29uZmlndXJhYmxlXCI6IHRydWUsXG4gICAgICAgICAgICBcImdldFwiOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGF1ZGlvUGFyYW1ldGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImF1dG9tYXRhYmxlXCI6IHtcbiAgICAgICAgICAgIFwiZ2V0XCI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHlwZW9mIGF1dG9tYXRpb24gPT0gXCJvYmplY3RcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJhZGRPcHRpb25Ub0xpc3RcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbih0KSB7XG4gICAgICAgICAgICAgICAgdmFyIHR5cGUgPSB0eXBlb2YgdDtcbiAgICAgICAgICAgICAgICBpZiAodHlwZSAhPSBcInN0cmluZ1wiICYmIHR5cGUgIT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBcIkxpc3RQYXJhbWV0ZXI6OmFkZE9wdGlvblRvTGlzdCBBcmd1bWVudCAxIG11c3QgYmUgb2YgdHlwZSBzdHJpbmcgb3IgbnVtYmVyXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChsaXN0T2ZWYWx1ZXMuaW5jbHVkZXModCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgXCJMaXN0UGFyYW1ldGVyOjphZGRPcHRpb25Ub0xpc3QgQXJndW1lbnQgMSBjb250YWlucyBhIHZhbHVlIGFscmVhZHkgaW4gdGhlIGxpc3Qgb3B0aW9uc1wiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsaXN0T2ZWYWx1ZXMucHVzaCh0KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbGlzdE9mVmFsdWVzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImRlbGV0ZU9wdGlvbkZyb21MaXN0XCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IGxpc3RPZlZhbHVlcy5pbmRleE9mKHQpO1xuICAgICAgICAgICAgICAgIHZhciBfdmFsdWUgPSBsaXN0T2ZWYWx1ZXNbX2luZGV4XTtcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgXCJMaXN0UGFyYW1ldGVyOjpkZWxldGVPcHRpb25Gcm9tTGlzdCBpdGVtIFxcXCJcIit0K1wiXFxcIiBkb2VzIG5vdCBleGlzdCBpbiB0aGlzIGxpc3RcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGlzdE9mVmFsdWVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgX2luZGV4ID0gX2luZGV4ICUgbGlzdE9mVmFsdWVzLmxlbmd0aDtcbiAgICAgICAgICAgICAgICByZXR1cm4gbGlzdE9mVmFsdWVzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInRvU3RyaW5nXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24odikge1xuICAgICAgICAgICAgICAgIGlmICh2ID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICB2ID0gdGhpcy52YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0b1N0cmluZ0Z1bmMgPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0b1N0cmluZ0Z1bmMuY2FsbCh0aGlzLCB2KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gU3RyaW5nKHYpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRQYXJhbWV0ZXJPYmplY3RcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdGhpcy52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogbGlzdE9mVmFsdWVzLFxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU6IGRlZmF1bHRWYWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgbWluaW11bTogMCxcbiAgICAgICAgICAgICAgICAgICAgbWF4aW11bTogbGlzdE9mVmFsdWVzLmxlbmd0aCxcbiAgICAgICAgICAgICAgICAgICAgdmlzaWJsZU5hbWU6IG5hbWUsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiTGlzdFBhcmFtZXRlclwiLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBuYW1lXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuTGlzdFBhcmFtZXRlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFBsdWdpblBhcmFtZXRlci5wcm90b3R5cGUpO1xuTGlzdFBhcmFtZXRlci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBMaXN0UGFyYW1ldGVyO1xuXG5leHBvcnQge0xpc3RQYXJhbWV0ZXJ9O1xuIiwiLyoganNoaW50IGVzdmVyc2lvbjogNiAqL1xuaW1wb3J0IHtQbHVnaW5QYXJhbWV0ZXJ9IGZyb20gXCIuL1BsdWdpblBhcmFtZXRlci5qc1wiO1xuaW1wb3J0IHtQYXJhbWV0ZXJMaW5lYXJBdXRvbWF0aW9ufSBmcm9tIFwiLi9QYXJhbWV0ZXJBdXRvbWF0aW9uLmpzXCI7XG5cbmZ1bmN0aW9uIE51bWJlclBhcmFtZXRlcihvd25lciwgbmFtZSwgZGVmYXVsdFZhbHVlLCBtaW5pbXVtLCBtYXhpbXVtLCB0b1N0cmluZ0Z1bmMsIHZpc2libGVOYW1lLCBleHBvc2VkKSB7XG4gICAgUGx1Z2luUGFyYW1ldGVyLmNhbGwodGhpcywgb3duZXIsIG5hbWUsIFwiTnVtYmVyXCIsIHZpc2libGVOYW1lLCBleHBvc2VkKTtcbiAgICB2YXIgYXVkaW9QYXJhbWV0ZXIsIGF1dG9tYXRpb247XG4gICAgdmFyIF92YWx1ZSA9IGRlZmF1bHRWYWx1ZSxcbiAgICAgICAgX3N0ZXBTaXplO1xuXG4gICAgZnVuY3Rpb24gc2V0VmFsdWUodiwgdXBkYXRlSW50ZXJmYWNlcylcbiAgICB7XG4gICAgICAgIGlmIChhdXRvbWF0aW9uICYmIGF1dG9tYXRpb24uZW5hYmxlZCkge1xuICAgICAgICAgICAgdGhyb3coXCJBdXRvbWF0aW9uIGlzIGVuYWJsZWQsIGNhbm5vdCBzZXQgdGhlIHZhbHVlIVwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5taW5pbXVtKSB7XG4gICAgICAgICAgICB2ID0gTWF0aC5tYXgodiwgdGhpcy5taW5pbXVtKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5tYXhpbXVtKSB7XG4gICAgICAgICAgICB2ID0gTWF0aC5taW4odiwgdGhpcy5tYXhpbXVtKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoX3N0ZXBTaXplKSB7XG4gICAgICAgICAgICB2ID0gTWF0aC5yb3VuZCh2IC8gX3N0ZXBTaXplKTtcbiAgICAgICAgICAgIHYgPSB2ICogX3N0ZXBTaXplO1xuICAgICAgICB9XG4gICAgICAgIHYgPSB0aGlzLnVwZGF0ZSh2KTtcbiAgICAgICAgaWYgKGF1ZGlvUGFyYW1ldGVyKSB7XG4gICAgICAgICAgICBpZiAoYXV0b21hdGlvbikge1xuICAgICAgICAgICAgICAgIGF1ZGlvUGFyYW1ldGVyLnNldFZhbHVlQXRUaW1lKHYsIG93bmVyLmZhY3RvcnkuY29udGV4dC5jdXJyZW50VGltZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGF1ZGlvUGFyYW1ldGVyLnZhbHVlID0gdjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoX3ZhbHVlICE9PSB2KSB7XG4gICAgICAgICAgICBfdmFsdWUgPSB2O1xuICAgICAgICAgICAgdGhpcy50cmlnZ2VyUGFyYW1ldGVyU2V0KHVwZGF0ZUludGVyZmFjZXMpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudHJpZ2dlcigpO1xuICAgIH1cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgICAgXCJ0eXBlXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogXCJOdW1iZXJcIlxuICAgICAgICB9LFxuICAgICAgICBcImRlc3Ryb3lcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgb3duZXIgPSBuYW1lID0gZGVmYXVsdFZhbHVlID0gbWluaW11bSA9IG1heGltdW0gPSBfdmFsdWUgPSBfc3RlcFNpemUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwibWluaW11bVwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IG1pbmltdW1cbiAgICAgICAgfSxcbiAgICAgICAgXCJtYXhpbXVtXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogbWF4aW11bVxuICAgICAgICB9LFxuICAgICAgICBcImRlZmF1bHRWYWx1ZVwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGRlZmF1bHRWYWx1ZVxuICAgICAgICB9LFxuICAgICAgICBcInZhbHVlXCI6IHtcbiAgICAgICAgICAgIFwiZ2V0XCI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAoYXVkaW9QYXJhbWV0ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGF1dG9tYXRpb24gJiYgYXV0b21hdGlvbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdCA9IG93bmVyLmZhY3RvcnkuZ2V0Q3VycmVudFByb2dyYW1UaW1lKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXV0b21hdGlvbi5nZXRDdXJyZW50VGltZVZhbHVlKHQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRyYW5zbGF0ZShhdWRpb1BhcmFtZXRlci52YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBfdmFsdWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJzZXRcIjogZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2V0VmFsdWUuY2FsbCh0aGlzLCB2LCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJzZXRWYWx1ZVwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKHYsIHVwZGF0ZUludGVyZmFjZXMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2V0VmFsdWUuY2FsbCh0aGlzLCB2LCB1cGRhdGVJbnRlcmZhY2VzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJzdGVwU2l6ZVwiOiB7XG4gICAgICAgICAgICBcImdldFwiOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9zdGVwU2l6ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInNldFwiOiBmdW5jdGlvbiAobikge1xuICAgICAgICAgICAgICAgIGlmICghaXNGaW5pdGUobikgfHwgbiA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgKFwiSW52YWxpZCBzdGVwIHNpemVcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF9zdGVwU2l6ZSA9IG47XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiYmluZFRvQXVkaW9QYXJhbVwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uIChhcCkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgYXAgPT0gXCJvYmplY3RcIiAmJiBhcC52YWx1ZSAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgYXVkaW9QYXJhbWV0ZXIgPSBhcDtcbiAgICAgICAgICAgICAgICAgICAgYXVkaW9QYXJhbWV0ZXIudmFsdWUgPSB0aGlzLnVwZGF0ZShfdmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoYXAuc2V0VmFsdWVBdFRpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9tYXRpb24gPSBuZXcgUGFyYW1ldGVyTGluZWFyQXV0b21hdGlvbih0aGlzLCBhdWRpb1BhcmFtZXRlciwgbWluaW11bSwgbWF4aW11bSwgdG9TdHJpbmdGdW5jKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImdldFZhbHVlQXRUaW1lUG9pbnRcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKHRpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmF1dG9tYXRpb25Qb2ludHMuZ2V0VmFsdWVBdFRpbWVQb2ludCh0aW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdXRvbWF0aW9uUG9pbnRzXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBhdXRvbWF0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN0YXJ0XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbih0aW1lLCBjb250ZXh0VGltZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGF1dG9tYXRpb24uc3RhcnQodGltZSwgY29udGV4dFRpbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN0b3BcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKGNvbnRleHRUaW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvbWF0aW9uLnN0b3AoY29udGV4dFRpbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImVuYWJsZWRcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImdldFwiOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhdXRvbWF0aW9uLmVuYWJsZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2V0XCI6IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoYXV0b21hdGlvbi5lbmFibGVkID0gdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIkNhbm5vdCBiaW5kIGF1dG9tYXRpb24gYXMgQXVkaW9QYXJhbWV0ZXIgaXMgbm90IGF1dG9tYXRhYmxlXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3coXCJBcmd1bWVudCAxIGlzIG5vdCBhIHZhbGlkIEF1ZGlvUGFyYW1ldGVyIG9iamVjdFwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiYm91bmRBdWRpb1BhcmFtXCI6IHtcbiAgICAgICAgICAgIFwiY29uZmlndXJhYmxlXCI6IHRydWUsXG4gICAgICAgICAgICBcImdldFwiOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGF1ZGlvUGFyYW1ldGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImF1dG9tYXRhYmxlXCI6IHtcbiAgICAgICAgICAgIFwiZ2V0XCI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHlwZW9mIGF1dG9tYXRpb24gPT0gXCJvYmplY3RcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJ0b1N0cmluZ1wiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKHYpIHtcbiAgICAgICAgICAgICAgICBpZiAodiA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdiA9IHRoaXMudmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdG9TdHJpbmdGdW5jID09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdG9TdHJpbmdGdW5jLmNhbGwodGhpcywgdik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFN0cmluZyh2KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0UGFyYW1ldGVyT2JqZWN0XCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHRoaXMudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogZGVmYXVsdFZhbHVlLFxuICAgICAgICAgICAgICAgICAgICBtaW5pbXVtOiBtaW5pbXVtLFxuICAgICAgICAgICAgICAgICAgICBtYXhpbXVtOiBtYXhpbXVtLFxuICAgICAgICAgICAgICAgICAgICB2aXNpYmxlTmFtZTogbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJOdW1iZXJQYXJhbWV0ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogbmFtZVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbk51bWJlclBhcmFtZXRlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFBsdWdpblBhcmFtZXRlci5wcm90b3R5cGUpO1xuTnVtYmVyUGFyYW1ldGVyLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IE51bWJlclBhcmFtZXRlcjtcblxuZXhwb3J0IHtOdW1iZXJQYXJhbWV0ZXJ9O1xuIiwiLyoganNoaW50IGVzdmVyc2lvbjogNiAqL1xudmFyIFRpbWVQb2ludCA9IGZ1bmN0aW9uKG93bmVyLCB0aW1lLCB2YWx1ZSwgdG9TdHJpbmdGdW5jKSB7XG4gICAgaWYgKHR5cGVvZiB0aW1lICE9IFwibnVtYmVyXCIgfHwgIWlzRmluaXRlKHRpbWUpIHx8IHRpbWUgPCAwKSB7XG4gICAgICAgIHRocm93KFwiSW52YWxpZCBDb25zdHJ1Y3RvcjogVGltZSBtdXN0IGJlIGEgcG9zaXRpdmUgbnVtYmVyXCIpO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHZhbHVlICE9IFwibnVtYmVyXCIgfHwgIWlzRmluaXRlKHZhbHVlKSkge1xuICAgICAgICB0aHJvdyhcIkludmFsaWQgQ29uc3RydWN0b3I6IFZhbHVlIG11c3QgYmUgYSBudW1iZXJcIik7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgICAgXCJ0aW1lXCI6IHtcbiAgICAgICAgICAgIFwiZ2V0XCI6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aW1lO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwic2V0XCI6IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zZXRUaW1lKHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInZhbHVlXCI6IHtcbiAgICAgICAgICAgIFwiZ2V0XCI6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInNldFwiOiBmdW5jdGlvbih2KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2V0VmFsdWUodik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwic2V0VmFsdWVcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbih2KSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB2ICE9IFwibnVtYmVyXCIgfHwgIWlzRmluaXRlKHYpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93KFwiVmFsdWUgbXVzdCBiZSBhIG51bWJlclwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBNYXRoLm1pbihNYXRoLm1heCh2LCBvd25lci5taW5pbXVtKSwgb3duZXIubWF4aW11bSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInNldFRpbWVcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbih0KSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0ID09IFwibnVtYmVyXCIgJiYgaXNGaW5pdGUodCkgJiYgdCA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRpbWUgPSB0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdGltZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJ0b1N0cmluZ1wiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdG9TdHJpbmdGdW5jID09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdG9TdHJpbmdGdW5jLmNhbGwodGhpcywgdmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gU3RyaW5nKHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJvd25lclwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IG93bmVyXG4gICAgICAgIH1cbiAgICB9KTtcbn07XG5cbnZhciBUaW1lUG9pbnRMaXN0ID0gZnVuY3Rpb24obWluX3ZhbHVlLCBtYXhfdmFsdWUsIHRvU3RyaW5nRnVuYykge1xuICAgIGZ1bmN0aW9uIGdldFBvaW50QXRUaW1lKGF1dG9tYXRpb25Qb2ludHMsIHRpbWUpIHtcbiAgICAgICAgcmV0dXJuIGF1dG9tYXRpb25Qb2ludHMuZmluZChmdW5jdGlvbihwKSB7XG4gICAgICAgICAgICByZXR1cm4gcC50aW1lID09IHRpbWU7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBoYXNQb2ludEF0VGltZShhdXRvbWF0aW9uUG9pbnRzLCB0aW1lKSB7XG4gICAgICAgIHJldHVybiBnZXRQb2ludEF0VGltZShhdXRvbWF0aW9uUG9pbnRzLCB0aW1lKSAhPT0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBmdW5jdGlvbiBzb3J0UG9pbnRzKGF1dG9tYXRpb25Qb2ludHMpIHtcbiAgICAgICAgcmV0dXJuIGF1dG9tYXRpb25Qb2ludHMuc29ydChmdW5jdGlvbihhLGIpIHtcbiAgICAgICAgICAgIGlmIChhLnRpbWUgPiBiLnRpbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBtaW5fdmFsdWUgIT0gXCJudW1iZXJcIiB8fCAhaXNGaW5pdGUobWluX3ZhbHVlKSkge1xuICAgICAgICB0aHJvdyhcIkludmFsaWQgQ29uc3RydWN0b3I6IG1pbl92YWx1ZSBiZSBhIG51bWJlclwiKTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBtYXhfdmFsdWUgIT0gXCJudW1iZXJcIiB8fCAhaXNGaW5pdGUobWF4X3ZhbHVlKSkge1xuICAgICAgICB0aHJvdyhcIkludmFsaWQgQ29uc3RydWN0b3I6IG1heF92YWx1ZSBiZSBhIG51bWJlclwiKTtcbiAgICB9XG4gICAgaWYgKG1pbl92YWx1ZSA9PSBtYXhfdmFsdWUpIHtcbiAgICAgICAgdGhyb3coXCJJbnZhbGlkIENvbnN0cnVjdG9yOiBtYXhfdmFsdWUgY2Fubm90IGVxdWFsIHRvIG1pbl92YWx1ZVwiKTtcbiAgICB9XG4gICAgaWYgKG1heF92YWx1ZSA8IG1pbl92YWx1ZSkge1xuICAgICAgICB0aHJvdyhcIkludmFsaWQgQ29uc3RydWN0b3I6IG1pbl92YWx1ZSBjYW5ub3QgYmUgZ3JlYXRlciB0aGFuIG1heF92YWx1ZVwiKTtcbiAgICB9XG4gICAgdmFyIGF1dG9tYXRpb25Qb2ludHMgPSBbXTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XG4gICAgICAgIFwiaW5zZXJ0UG9pbnRcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbih0aW1lLCB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGltZSAhPSBcIm51bWJlclwiIHx8ICFpc0Zpbml0ZSh0aW1lKSB8fCB0aW1lIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyhcIlRpbWUgbXVzdCBiZSBhIHBvc2l0aXZlIG51bWJlclwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSAhPSBcIm51bWJlclwiIHx8ICFpc0Zpbml0ZSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3coXCJWYWx1ZSBtdXN0IGJlIGEgbnVtYmVyXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoaGFzUG9pbnRBdFRpbWUoYXV0b21hdGlvblBvaW50cywgdGltZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3coXCJBbHJlYWR5IGEgdmFsdWUgZW50cnkgYXQgdGltZSBcIit0aW1lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBNYXRoLm1pbihNYXRoLm1heCh2YWx1ZSwgbWluX3ZhbHVlKSwgbWF4X3ZhbHVlKTtcbiAgICAgICAgICAgICAgICB2YXIgcG9pbnQgPSBuZXcgVGltZVBvaW50KHRoaXMsIHRpbWUsIHZhbHVlLCB0b1N0cmluZ0Z1bmMpO1xuICAgICAgICAgICAgICAgIGF1dG9tYXRpb25Qb2ludHMucHVzaChwb2ludCk7XG4gICAgICAgICAgICAgICAgYXV0b21hdGlvblBvaW50cyA9IHNvcnRQb2ludHMoYXV0b21hdGlvblBvaW50cyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBvaW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImdldFBvaW50c1wiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKHN0YXJ0X3RpbWUsIGVuZF90aW1lKSB7XG4gICAgICAgICAgICAgICAgaWYgKHN0YXJ0X3RpbWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBzdGFydF90aW1lID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGVuZF90aW1lID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgZW5kX3RpbWUgPSBJbmZpbml0eTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGF1dG9tYXRpb25Qb2ludHMuZmlsdGVyKGZ1bmN0aW9uKHBvaW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwb2ludC50aW1lID49IHN0YXJ0X3RpbWUgJiYgcG9pbnQudGltZSA8IGVuZF90aW1lO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImRlbGV0ZVBvaW50XCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24odGltZSkge1xuICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IGF1dG9tYXRpb25Qb2ludHMuZmluZEluZGV4KGZ1bmN0aW9uKHBvaW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwb2ludC50aW1lID09IHRpbWU7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgYXV0b21hdGlvblBvaW50cy5zcGxpY2UoaW5kZXgsIDEsIDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gYXV0b21hdGlvblBvaW50cy5sZW5ndGg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0U3RhdGljVmFsdWVBc1N0cmluZ1wiOiB7XG4gICAgICAgICAgICBcIndyaXRhYmxlXCI6IHRydWUsXG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBTdHJpbmcodmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImdldFZhbHVlQXRUaW1lUG9pbnRcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAodGltZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBnZXRQb2ludEF0VGltZShhdXRvbWF0aW9uUG9pbnRzLCB0aW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJsZW5ndGhcIjoge1xuICAgICAgICAgICAgXCJnZXRcIjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGF1dG9tYXRpb25Qb2ludHMubGVuZ3RoO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcIm1pbmltdW1cIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBtaW5fdmFsdWVcbiAgICAgICAgfSxcbiAgICAgICAgXCJtYXhpbXVtXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogbWF4X3ZhbHVlXG4gICAgICAgIH0sXG4gICAgICAgIFwidXBkYXRlUG9pbnRcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbih0aW1lLCBvcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBvaW50ID0gYXV0b21hdGlvblBvaW50cy5maW5kKGZ1bmN0aW9uKHBvaW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwb2ludC50aW1lID09IHRpbWU7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKHBvaW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy50aW1lID09IFwibnVtYmVyXCIgJiYgb3B0aW9ucy50aW1lICE9IHBvaW50LnRpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChnZXRQb2ludEF0VGltZShhdXRvbWF0aW9uUG9pbnRzLCB0aW1lKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93KFwiQSB0aW1lLXBvaW50IGFscmVhZHkgZXhpc3RzIGF0IFxcXCJcIitTdHJpbmcob3B0aW9ucy50aW1lKStcIlxcXCIgc2Vjb25kc1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9pbnQudGltZSA9IG9wdGlvbnMudGltZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvbWF0aW9uUG9pbnRzID0gc29ydFBvaW50cyhhdXRvbWF0aW9uUG9pbnRzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBwb2ludC52YWx1ZSA9IG9wdGlvbnMudmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBwb2ludDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufTtcblxudmFyIFBhcmFtZXRlckF1dG9tYXRpb24gPSBmdW5jdGlvbihwYXJhbWV0ZXIsIG1pbl92YWx1ZSwgbWF4X3ZhbHVlLCB0b1N0cmluZ0Z1bmMpIHtcbiAgICBUaW1lUG9pbnRMaXN0LmNhbGwodGhpcywgbWluX3ZhbHVlLCBtYXhfdmFsdWUsIHRvU3RyaW5nRnVuYyk7XG4gICAgdmFyIGVuYWJsZWQgPSBmYWxzZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XG4gICAgICAgIFwiZW5hYmxlZFwiOiB7XG4gICAgICAgICAgICBcImdldFwiOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZW5hYmxlZDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInNldFwiOiBmdW5jdGlvbih0KSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBlbmFibGVkID0gKHQgPT09IHRydWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gZW5hYmxlZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufTtcblxudmFyIFBhcmFtZXRlckxpbmVhckF1dG9tYXRpb24gPSBmdW5jdGlvbiAob3duZXIsIHBhcmFtZXRlciwgbWluX3ZhbHVlLCBtYXhfdmFsdWUsIHRvU3RyaW5nRnVuYykge1xuICAgIFBhcmFtZXRlckF1dG9tYXRpb24uY2FsbCh0aGlzLCBwYXJhbWV0ZXIsIG1pbl92YWx1ZSwgbWF4X3ZhbHVlLCB0b1N0cmluZ0Z1bmMpO1xuICAgIGZ1bmN0aW9uIGxpbmVhckludGVycG9sYXRpb24odGltZSwgcG9pbnRBLCBwb2ludEIpIHtcbiAgICAgICAgdmFyIHQxID0gcG9pbnRBLnRpbWU7XG4gICAgICAgIHZhciB0MiA9IHBvaW50Qi50aW1lO1xuICAgICAgICB0aW1lIC09IHQxO1xuICAgICAgICB0MiAtPSB0MTtcbiAgICAgICAgdDEgPSAwO1xuXG4gICAgICAgIHZhciBwID0gdGltZS90MjtcbiAgICAgICAgcmV0dXJuIHBvaW50QS52YWx1ZSAqICgxLXApICsgcG9pbnRCLnZhbHVlICogcDtcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0Q3VycmVudFRpbWVWYWx1ZShhdXRvbWF0aW9uUG9pbnRzLCB0aW1lKSB7XG4gICAgICAgIGlmIChhdXRvbWF0aW9uUG9pbnRzLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICB0aHJvdyhcIk5vIGF1dG9tYXRpb24gcG9pbnRzIGF2YWlsYWJsZVwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYXV0b21hdGlvblBvaW50cy5sZW5ndGggPT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIGF1dG9tYXRpb25Qb2ludHNbMF0udmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZmlyc3RQb2ludCA9IGF1dG9tYXRpb25Qb2ludHMucmVkdWNlKGZ1bmN0aW9uKHBvaW50LCBuZXh0UG9pbnQpIHtcbiAgICAgICAgICAgIGlmIChuZXh0UG9pbnQudGltZSA8PSB0aW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5leHRQb2ludDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBvaW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCBhdXRvbWF0aW9uUG9pbnRzWzBdKTtcbiAgICAgICAgdmFyIHNlY29uZFBvaW50ID0gYXV0b21hdGlvblBvaW50cy5maW5kKGZ1bmN0aW9uKHBvaW50KSB7XG4gICAgICAgICAgICByZXR1cm4gcG9pbnQudGltZSA+IGZpcnN0UG9pbnQudGltZTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChzZWNvbmRQb2ludCA9PT0gdW5kZWZpbmVkIHx8IGZpcnN0UG9pbnQudGltZSA+IHRpbWUpIHtcbiAgICAgICAgICAgIHJldHVybiBmaXJzdFBvaW50LnZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsaW5lYXJJbnRlcnBvbGF0aW9uKHRpbWUsIGZpcnN0UG9pbnQsIHNlY29uZFBvaW50KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzdGFydChhdXRvbWF0aW9uUG9pbnRzLCB0aW1lLCBjb250ZXh0VGltZSkge1xuICAgICAgICB2YXIgc3RhcnRQb3NpdGlvbiA9IG93bmVyLnVwZGF0ZShnZXRDdXJyZW50VGltZVZhbHVlKGF1dG9tYXRpb25Qb2ludHMsIHRpbWUpKTtcbiAgICAgICAgcGFyYW1ldGVyLnNldFZhbHVlQXRUaW1lKHN0YXJ0UG9zaXRpb24sIGNvbnRleHRUaW1lKTtcbiAgICAgICAgYXV0b21hdGlvblBvaW50cy5mb3JFYWNoKGZ1bmN0aW9uKHApIHtcbiAgICAgICAgICAgIGlmIChwLnRpbWUgPiB0aW1lKSB7XG4gICAgICAgICAgICAgICAgdmFyIHQgPSBwLnRpbWUgLSB0aW1lO1xuICAgICAgICAgICAgICAgIHZhciB2ID0gb3duZXIudXBkYXRlKHAudmFsdWUpO1xuICAgICAgICAgICAgICAgIHBhcmFtZXRlci5saW5lYXJSYW1wVG9WYWx1ZUF0VGltZSh2LCB0K2NvbnRleHRUaW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3RvcChjb250ZXh0VGltZSkge1xuICAgICAgICBpZiAoY29udGV4dFRpbWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY29udGV4dFRpbWUgPSAwO1xuICAgICAgICB9XG4gICAgICAgIHBhcmFtZXRlci5jYW5jZWxTY2hlZHVsZWRWYWx1ZXMoY29udGV4dFRpbWUpO1xuICAgIH1cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgICAgXCJnZXRDdXJyZW50VGltZVZhbHVlXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24odGltZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBnZXRDdXJyZW50VGltZVZhbHVlKHRoaXMuZ2V0UG9pbnRzKCksIHRpbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInN0YXJ0XCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24odGltZSwgY29udGV4dFRpbWUpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5lbmFibGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0KHRoaXMuZ2V0UG9pbnRzKCksIHRpbWUsIGNvbnRleHRUaW1lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwic3RvcFwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKGNvbnRleHRUaW1lKSB7XG4gICAgICAgICAgICAgICAgc3RvcChjb250ZXh0VGltZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcblxufTtcblBhcmFtZXRlckxpbmVhckF1dG9tYXRpb24ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShQYXJhbWV0ZXJBdXRvbWF0aW9uLnByb3RvdHlwZSk7XG5QYXJhbWV0ZXJMaW5lYXJBdXRvbWF0aW9uLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFBhcmFtZXRlckxpbmVhckF1dG9tYXRpb247XG5cbnZhciBQYXJhbWV0ZXJTdGVwQXV0b21hdGlvbiA9IGZ1bmN0aW9uIChvd25lciwgcGFyYW1ldGVyLCBtaW5fdmFsdWUsIG1heF92YWx1ZSwgdG9TdHJpbmdGdW5jKSB7XG4gICAgUGFyYW1ldGVyQXV0b21hdGlvbi5jYWxsKHRoaXMsIHBhcmFtZXRlciwgbWluX3ZhbHVlLCBtYXhfdmFsdWUsIHRvU3RyaW5nRnVuYyk7XG4gICAgZnVuY3Rpb24gZ2V0Q3VycmVudFRpbWVWYWx1ZShhdXRvbWF0aW9uUG9pbnRzLCB0aW1lKSB7XG4gICAgICAgIGlmIChhdXRvbWF0aW9uUG9pbnRzLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICB0aHJvdyhcIk5vIGF1dG9tYXRpb24gcG9pbnRzIGF2YWlsYWJsZVwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYXV0b21hdGlvblBvaW50cy5sZW5ndGggPT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIGF1dG9tYXRpb25Qb2ludHNbMF0udmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgbmVhcmVzdFBvaW50ID0gYXV0b21hdGlvblBvaW50cy5yZWR1Y2UoZnVuY3Rpb24ocG9pbnQsIG5leHRQb2ludCkge1xuICAgICAgICAgICAgaWYgKG5leHRQb2ludC50aW1lIDw9IHRpbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV4dFBvaW50O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcG9pbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIGF1dG9tYXRpb25Qb2ludHNbMF0pO1xuICAgICAgICByZXR1cm4gbmVhcmVzdFBvaW50LnZhbHVlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHN0YXJ0KGF1dG9tYXRpb25Qb2ludHMsIHRpbWUsIGNvbnRleHRUaW1lKSB7XG4gICAgICAgIHZhciBzdGFydFBvc2l0aW9uID0gb3duZXIudXBkYXRlKGdldEN1cnJlbnRUaW1lVmFsdWUoYXV0b21hdGlvblBvaW50cywgdGltZSkpO1xuICAgICAgICBwYXJhbWV0ZXIuc2V0VmFsdWVBdFRpbWUoc3RhcnRQb3NpdGlvbiwgY29udGV4dFRpbWUpO1xuICAgICAgICBhdXRvbWF0aW9uUG9pbnRzLmZvckVhY2goZnVuY3Rpb24ocCkge1xuICAgICAgICAgICAgaWYgKHAudGltZSA+IHRpbWUpIHtcbiAgICAgICAgICAgICAgICB2YXIgdCA9IHAudGltZSAtIHRpbWU7XG4gICAgICAgICAgICAgICAgdmFyIHYgPSBvd25lci51cGRhdGUocC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgcGFyYW1ldGVyLnNldFZhbHVlQXRUaW1lKHYsIHQrY29udGV4dFRpbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzdG9wKGNvbnRleHRUaW1lKSB7XG4gICAgICAgIHBhcmFtZXRlci5jYW5jZWxTY2hlZHVsZWRWYWx1ZXMoY29udGV4dFRpbWUpO1xuICAgIH1cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgICAgXCJnZXRDdXJyZW50VGltZVZhbHVlXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24odGltZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBnZXRDdXJyZW50VGltZVZhbHVlKHRoaXMuZ2V0UG9pbnRzKCksIHRpbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInN0YXJ0XCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24odGltZSwgY29udGV4dFRpbWUpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5lbmFibGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0KHRoaXMuZ2V0UG9pbnRzKCksIHRpbWUsIGNvbnRleHRUaW1lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwic3RvcFwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKGNvbnRleHRUaW1lKSB7XG4gICAgICAgICAgICAgICAgc3RvcChjb250ZXh0VGltZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn07XG5QYXJhbWV0ZXJTdGVwQXV0b21hdGlvbi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFBhcmFtZXRlckF1dG9tYXRpb24ucHJvdG90eXBlKTtcblBhcmFtZXRlclN0ZXBBdXRvbWF0aW9uLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFBhcmFtZXRlclN0ZXBBdXRvbWF0aW9uO1xuXG5leHBvcnQge1BhcmFtZXRlckxpbmVhckF1dG9tYXRpb24sIFBhcmFtZXRlclN0ZXBBdXRvbWF0aW9ufTtcbiIsIi8qIGpzaGludCBlc3ZlcnNpb246IDYgKi9cbmZ1bmN0aW9uIFBsdWdpblBhcmFtZXRlcihvd25lciwgbmFtZSwgZGF0YVR5cGUsIHZpc2libGVOYW1lLCBleHBvc2VkKSB7XG4gICAgdmFyIHVwZGF0ZSwgdHJhbnNsYXRlLCB0cmlnZ2VyO1xuICAgIHZhciBldmVudFRhcmdldCA9IG5ldyBFdmVudFRhcmdldCgpO1xuICAgIHVwZGF0ZSA9IHRyYW5zbGF0ZSA9IGZ1bmN0aW9uICh2KSB7XG4gICAgICAgIHJldHVybiB2O1xuICAgIH07XG4gICAgdHJpZ2dlciA9IGZ1bmN0aW9uICgpIHt9O1xuICAgIGlmICh0eXBlb2YgdmlzaWJsZU5hbWUgIT0gXCJzdHJpbmdcIiB8fCB2aXNpYmxlTmFtZS5sZW5ndGggPT0gMCkge1xuICAgICAgICB2aXNpYmxlTmFtZSA9IG5hbWU7XG4gICAgfVxuICAgIGlmIChleHBvc2VkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgZXhwb3NlZCA9IHRydWU7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgZXhwb3NlZCAhPSBcImJvb2xlYW5cIikge1xuICAgICAgICBjb25zb2xlLndhcm4oXCJleHBvc2VkIHBhcmFtZXRlciBpcyBub3Qgb2YgdHlwZSBib29sZWFuLCBhc3N1bWluZyBleHBvc2VkID0gdHJ1ZVwiKTtcbiAgICAgICAgZXhwb3NlZCA9IHRydWU7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgICAgXCJhZGRFdmVudExpc3RlbmVyXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24odHlwZSwgbGlzdGVuZXIsIG9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZXZlbnRUYXJnZXQuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lciwgb3B0aW9ucyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwicmVtb3ZlRXZlbnRMaXN0ZW5lclwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKHR5cGUsIGxpc3RlbmVyLCBvcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGV2ZW50VGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXIsIG9wdGlvbnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInRyaWdnZXJQYXJhbWV0ZXJTZXRcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbih1cGRhdGVJbnRlcmZhY2VzKSB7XG4gICAgICAgICAgICAgICAgdmFyIG9wdHMgPSB7ZGV0YWlsOiB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmFtZXRlcjogdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlSW50ZXJmYWNlczogdXBkYXRlSW50ZXJmYWNlc1xuICAgICAgICAgICAgICAgIH19O1xuICAgICAgICAgICAgICAgIGV2ZW50VGFyZ2V0LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwicGFyYW1ldGVyc2V0XCIsIG9wdHMpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogbmFtZVxuICAgICAgICB9LFxuICAgICAgICBcIm93bmVyXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogb3duZXJcbiAgICAgICAgfSxcbiAgICAgICAgXCJ2aXNpYmxlTmFtZVwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IHZpc2libGVOYW1lXG4gICAgICAgIH0sXG4gICAgICAgIFwiZXhwb3NlZFwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGV4cG9zZWRcbiAgICAgICAgfSxcbiAgICAgICAgXCJ1cGRhdGVcIjoge1xuICAgICAgICAgICAgXCJnZXRcIjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB1cGRhdGU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJzZXRcIjogZnVuY3Rpb24gKGYpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGYgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyAoXCJNdXN0IGJlIGEgY2FsbGJhY2sgZnVuY3Rpb25cIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChmKDApID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgKFwiRnVuY3Rpb24gbXVzdCByZXR1cm4gYSB2YWx1ZVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdXBkYXRlID0gZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJ0cmFuc2xhdGVcIjoge1xuICAgICAgICAgICAgXCJnZXRcIjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cmFuc2xhdGU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJzZXRcIjogZnVuY3Rpb24gKGYpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGYgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyAoXCJNdXN0IGJlIGEgY2FsbGJhY2sgZnVuY3Rpb25cIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChmKDApID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgKFwiRnVuY3Rpb24gbXVzdCByZXR1cm4gYSB2YWx1ZVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlID0gZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJ0cmlnZ2VyXCI6IHtcbiAgICAgICAgICAgIFwiZ2V0XCI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJpZ2dlcjtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInNldFwiOiBmdW5jdGlvbiAoZikge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IChcIk11c3QgYmUgYSBjYWxsYmFjayBmdW5jdGlvblwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdHJpZ2dlciA9IGY7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiYmluZFRvQXVkaW9QYXJhbVwiOiB7XG4gICAgICAgICAgICBcImNvbmZpZ3VyYWJsZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoYXApIHtcbiAgICAgICAgICAgICAgICB0aHJvdyhcIkNhbm5vdCBiaW5kIHRoaXMgcGFyYW1ldGVyIHR5cGUgdG8gYW4gYXVkaW8gcGFyYW1ldGVyXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImJvdW5kQXVkaW9QYXJhbVwiOiB7XG4gICAgICAgICAgICBcImNvbmZpZ3VyYWJsZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJnZXRcIjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuZXhwb3J0IHtQbHVnaW5QYXJhbWV0ZXJ9O1xuIiwiLyoganNoaW50IGVzdmVyc2lvbjogNiAqL1xuaW1wb3J0IHtQbHVnaW5QYXJhbWV0ZXJ9IGZyb20gXCIuL1BsdWdpblBhcmFtZXRlci5qc1wiO1xuXG5mdW5jdGlvbiBTdHJpbmdQYXJhbWV0ZXIob3duZXIsIG5hbWUsIGRlZmF1bHRWYWx1ZSwgbWF4TGVuZ3RoLCB0b1N0cmluZ0Z1bmMsIHZpc2libGVOYW1lLCBleHBvc2VkKSB7XG4gICAgUGx1Z2luUGFyYW1ldGVyLmNhbGwodGhpcywgb3duZXIsIG5hbWUsIFwiU3RyaW5nXCIsIHZpc2libGVOYW1lLCBleHBvc2VkKTtcbiAgICB2YXIgX3ZhbHVlID0gZGVmYXVsdFZhbHVlO1xuICAgIHZhciBhdWRpb1BhcmFtZXRlcjtcblxuICAgIGZ1bmN0aW9uIHNldFZhbHVlKHYsIHVwZGF0ZUludGVyZmFjZXMpIHtcbiAgICAgICAgaWYgKG1heExlbmd0aCkge1xuICAgICAgICAgICAgaWYgKHYubGVuZ3RoID4gbWF4TGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgKFwiU3RyaW5nIGxvbmdlciB0aGFuIFwiICsgbWF4TGVuZ3RoICsgXCIgY2hhcmFjdGVyc1wiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5ib3VuZEF1ZGlvUGFyYW0pIHtcbiAgICAgICAgICAgIHRoaXMuYm91bmRBdWRpb1BhcmFtLnZhbHVlID0gdGhpcy51cGRhdGUodik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKF92YWx1ZSAhPT0gdikge1xuICAgICAgICAgICAgX3ZhbHVlID0gdjtcbiAgICAgICAgICAgIHRoaXMudHJpZ2dlclBhcmFtZXRlclNldCh1cGRhdGVJbnRlcmZhY2VzKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRyaWdnZXIoKTtcbiAgICB9XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XG4gICAgICAgIFwidHlwZVwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IFwiU3RyaW5nXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJkZXN0cm95XCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIG93bmVyID0gbmFtZSA9IGRlZmF1bHRWYWx1ZSA9IG1heExlbmd0aCA9IF92YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJtYXhMZW5ndGhcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBtYXhMZW5ndGhcbiAgICAgICAgfSxcbiAgICAgICAgXCJkZWZhdWx0VmFsdWVcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBkZWZhdWx0VmFsdWVcbiAgICAgICAgfSxcbiAgICAgICAgXCJ2YWx1ZVwiOiB7XG4gICAgICAgICAgICBcImdldFwiOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYm91bmRBdWRpb1BhcmFtKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRyYW5zbGF0ZSh0aGlzLmJvdW5kQXVkaW9QYXJhbS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBfdmFsdWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJzZXRcIjogZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2V0VmFsdWUuY2FsbCh0aGlzLCB2LCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJzZXRWYWx1ZVwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKHYsIHVwZGF0ZUludGVyZmFjZXMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2V0VmFsdWUuY2FsbCh0aGlzLCB2LCB1cGRhdGVJbnRlcmZhY2VzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJiaW5kVG9BdWRpb1BhcmFtXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKGFwKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBhcCA9PSBcIm9iamVjdFwiICYmIGFwLnZhbHVlICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBhdWRpb1BhcmFtZXRlciA9IGFwO1xuICAgICAgICAgICAgICAgICAgICBhdWRpb1BhcmFtZXRlci52YWx1ZSA9IHRoaXMudXBkYXRlKF92YWx1ZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3coXCJBcmd1bWVudCAxIGlzIG5vdCBhIHZhbGlkIEF1ZGlvUGFyYW1ldGVyIG9iamVjdFwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiYm91bmRBdWRpb1BhcmFtXCI6IHtcbiAgICAgICAgICAgIFwiY29uZmlndXJhYmxlXCI6IHRydWUsXG4gICAgICAgICAgICBcImdldFwiOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGF1ZGlvUGFyYW1ldGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInRvU3RyaW5nXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24odikge1xuICAgICAgICAgICAgICAgIGlmICh2ID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICB2ID0gdGhpcy52YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0b1N0cmluZ0Z1bmMgPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0b1N0cmluZ0Z1bmMuY2FsbCh0aGlzLCB2KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gU3RyaW5nKHYpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRQYXJhbWV0ZXJPYmplY3RcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdGhpcy52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBkZWZhdWx0VmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIG1heExlbmd0aDogbWF4TGVuZ3RoLFxuICAgICAgICAgICAgICAgICAgICB2aXNpYmxlTmFtZTogbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJTdHJpbmdQYXJhbWV0ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogbmFtZVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblN0cmluZ1BhcmFtZXRlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFBsdWdpblBhcmFtZXRlci5wcm90b3R5cGUpO1xuU3RyaW5nUGFyYW1ldGVyLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFN0cmluZ1BhcmFtZXRlcjtcblxuZXhwb3J0IHtTdHJpbmdQYXJhbWV0ZXJ9O1xuIiwiLyoganNoaW50IGVzdmVyc2lvbjogNiAqL1xuaW1wb3J0IHtQbHVnaW5QYXJhbWV0ZXJ9IGZyb20gXCIuL1BsdWdpblBhcmFtZXRlci5qc1wiO1xuaW1wb3J0IHtQYXJhbWV0ZXJTdGVwQXV0b21hdGlvbn0gZnJvbSBcIi4vUGFyYW1ldGVyQXV0b21hdGlvbi5qc1wiO1xuXG5mdW5jdGlvbiBTd2l0Y2hQYXJhbWV0ZXIob3duZXIsIG5hbWUsIGRlZmF1bHRWYWx1ZSwgbWluU3RhdGUsIG1heFN0YXRlLCB0b1N0cmluZ0Z1bmMsIHZpc2libGVOYW1lLCBleHBvc2VkKSB7XG4gICAgUGx1Z2luUGFyYW1ldGVyLmNhbGwodGhpcywgb3duZXIsIG5hbWUsIFwiQnV0dG9uXCIsIHZpc2libGVOYW1lLCBleHBvc2VkKTtcbiAgICB2YXIgb25jbGljayA9IGZ1bmN0aW9uICgpIHt9O1xuICAgIHZhciBfdmFsdWUgPSBkZWZhdWx0VmFsdWU7XG4gICAgdmFyIGF1ZGlvUGFyYW1ldGVyLCBhdXRvbWF0aW9uO1xuXG4gICAgZnVuY3Rpb24gc2V0VmFsdWUodiwgdXBkYXRlSW50ZXJmYWNlcykge1xuICAgICAgICBpZiAodiA8IG1pblN0YXRlKSB7XG4gICAgICAgICAgICB0aHJvdyAoXCJTZXQgdmFsdWUgaXMgbGVzcyB0aGFuIFwiICsgbWluU3RhdGUpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2ID4gbWF4U3RhdGUpIHtcbiAgICAgICAgICAgIHRocm93IChcIlNldCB2YWx1ZSBpcyBncmVhdGVyIHRoYW4gXCIgKyBtYXhTdGF0ZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuYm91bmRBdWRpb1BhcmFtKSB7XG4gICAgICAgICAgICB0aGlzLmJvdW5kQXVkaW9QYXJhbS52YWx1ZSA9IHRoaXMudXBkYXRlKHYpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChfdmFsdWUgIT09IHYpIHtcbiAgICAgICAgICAgIF92YWx1ZSA9IHY7XG4gICAgICAgICAgICB0aGlzLnRyaWdnZXJQYXJhbWV0ZXJTZXQodXBkYXRlSW50ZXJmYWNlcyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50cmlnZ2VyKCk7XG4gICAgICAgIHJldHVybiB2O1xuICAgIH1cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgICAgXCJ0eXBlXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogXCJTd2l0Y2hcIlxuICAgICAgICB9LFxuICAgICAgICBcImRlc3Ryb3lcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgb3duZXIgPSBuYW1lID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImRlZmF1bHRWYWx1ZVwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGRlZmF1bHRWYWx1ZVxuICAgICAgICB9LFxuICAgICAgICBcIm1pblN0YXRlXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogbWluU3RhdGVcbiAgICAgICAgfSxcbiAgICAgICAgXCJtYXhTdGF0ZVwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IG1heFN0YXRlXG4gICAgICAgIH0sXG4gICAgICAgIFwidmFsdWVcIjoge1xuICAgICAgICAgICAgXCJnZXRcIjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmJvdW5kQXVkaW9QYXJhbSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50cmFuc2xhdGUodGhpcy5ib3VuZEF1ZGlvUGFyYW0udmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gX3ZhbHVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwic2V0XCI6IGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNldFZhbHVlLmNhbGwodGhpcywgdik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwic2V0VmFsdWVcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbih2LCB1cGRhdGVJbnRlcmZhY2VzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNldFZhbHVlLmNhbGwodGhpcywgdiwgdXBkYXRlSW50ZXJmYWNlcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiaW5jcmVtZW50XCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciB2ID0gX3ZhbHVlICsgMTtcbiAgICAgICAgICAgICAgICBpZiAodiA+IG1heFN0YXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIHYgPSBtaW5TdGF0ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNldFZhbHVlLmNhbGwodGhpcywgdik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiZGVjcmVtZW50XCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciB2ID0gX3ZhbHVlIC0gMTtcbiAgICAgICAgICAgICAgICBpZiAodiA8IG1pblN0YXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIHYgPSBtYXhTdGF0ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNldFZhbHVlLmNhbGwodGhpcywgdik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiYmluZFRvQXVkaW9QYXJhbVwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uIChhcCkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgYXAgPT0gXCJvYmplY3RcIiAmJiBhcC52YWx1ZSAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgYXVkaW9QYXJhbWV0ZXIgPSBhcDtcbiAgICAgICAgICAgICAgICAgICAgYXVkaW9QYXJhbWV0ZXIudmFsdWUgPSB0aGlzLnVwZGF0ZShfdmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoYXAuc2V0VmFsdWVBdFRpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9tYXRpb24gPSBuZXcgUGFyYW1ldGVyU3RlcEF1dG9tYXRpb24odGhpcywgYXVkaW9QYXJhbWV0ZXIsIG1pblN0YXRlLCBtYXhTdGF0ZSwgdG9TdHJpbmdGdW5jKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImdldFZhbHVlQXRUaW1lUG9pbnRcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKHRpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmF1dG9tYXRpb25Qb2ludHMuZ2V0VmFsdWVBdFRpbWVQb2ludCh0aW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdXRvbWF0aW9uUG9pbnRzXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBhdXRvbWF0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN0YXJ0XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbih0aW1lLCBjb250ZXh0VGltZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGF1dG9tYXRpb24uc3RhcnQodGltZSwgY29udGV4dFRpbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN0b3BcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKGNvbnRleHRUaW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvbWF0aW9uLnN0b3AoY29udGV4dFRpbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImVuYWJsZWRcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImdldFwiOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhdXRvbWF0aW9uLmVuYWJsZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2V0XCI6IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoYXV0b21hdGlvbi5lbmFibGVkID0gdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIkNhbm5vdCBiaW5kIGF1dG9tYXRpb24gYXMgQXVkaW9QYXJhbWV0ZXIgaXMgbm90IGF1dG9tYXRhYmxlXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3coXCJBcmd1bWVudCAxIGlzIG5vdCBhIHZhbGlkIEF1ZGlvUGFyYW1ldGVyIG9iamVjdFwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiYm91bmRBdWRpb1BhcmFtXCI6IHtcbiAgICAgICAgICAgIFwiY29uZmlndXJhYmxlXCI6IHRydWUsXG4gICAgICAgICAgICBcImdldFwiOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGF1ZGlvUGFyYW1ldGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImF1dG9tYXRhYmxlXCI6IHtcbiAgICAgICAgICAgIFwiZ2V0XCI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHlwZW9mIGF1dG9tYXRpb24gPT0gXCJvYmplY3RcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJ0b1N0cmluZ1wiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKHYpIHtcbiAgICAgICAgICAgICAgICBpZiAodiA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdiA9IHRoaXMudmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdG9TdHJpbmdGdW5jID09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdG9TdHJpbmdGdW5jLmNhbGwodGhpcywgdik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFN0cmluZyh2KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0UGFyYW1ldGVyT2JqZWN0XCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHRoaXMudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogZGVmYXVsdFZhbHVlLFxuICAgICAgICAgICAgICAgICAgICBtaW5pbXVtOiBtaW5TdGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgbWF4aW11bTogbWF4U3RhdGUsXG4gICAgICAgICAgICAgICAgICAgIHZpc2libGVOYW1lOiBuYW1lLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIlN3aXRjaFBhcmFtZXRlclwiLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBuYW1lXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuU3dpdGNoUGFyYW1ldGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoUGx1Z2luUGFyYW1ldGVyLnByb3RvdHlwZSk7XG5Td2l0Y2hQYXJhbWV0ZXIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gU3dpdGNoUGFyYW1ldGVyO1xuXG5leHBvcnQge1N3aXRjaFBhcmFtZXRlcn07XG4iLCIvKiBqc2hpbnQgZXN2ZXJzaW9uOiA2ICovXG5pbXBvcnQge1BsdWdpblBhcmFtZXRlcn0gZnJvbSBcIi4vUGx1Z2luUGFyYW1ldGVyLmpzXCI7XG5cbmZ1bmN0aW9uIFVSTFBhcmFtZXRlcihvd25lciwgbmFtZSwgZGVmYXVsdFZhbHVlLCBtYXhMZW5ndGgsIHRvU3RyaW5nRnVuYywgdmlzaWJsZU5hbWUsIGV4cG9zZWQpIHtcbiAgICBQbHVnaW5QYXJhbWV0ZXIuY2FsbCh0aGlzLCBvd25lciwgbmFtZSwgXCJTdHJpbmdcIiwgdmlzaWJsZU5hbWUsIGV4cG9zZWQpO1xuICAgIHZhciBfdmFsdWUgPSBkZWZhdWx0VmFsdWU7XG4gICAgdmFyIHJlc291cmNlT2JqZWN0O1xuXG4gICAgZnVuY3Rpb24gZ2V0UmVzb3VyY2UodHlwZSkge1xuICAgICAgICBpZiAocmVzb3VyY2VPYmplY3QgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXNvdXJjZU9iamVjdCA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgICAgICAgICB4aHIub3BlbihcIkdFVFwiLCBfdmFsdWUpO1xuICAgICAgICAgICAgICAgIHhoci5yZXNwb25zZVR5cGUgPSB0eXBlO1xuICAgICAgICAgICAgICAgIHhoci5vbmxvYWQgPSBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh4aHIuc3RhdHVzID09IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShlLnRhcmdldC5yZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3Qoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IHhoci5zdGF0dXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogZS50YXJnZXRcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHhoci5vbmVycm9yID0gZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICByZWplY3Qoe1xuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogeGhyLnN0YXR1cyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiZXJyb3JcIlxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHhoci5vbnRpbWVvdXQgPSBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiB4aHIuc3RhdHVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJ0aW1lb3V0XCJcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB4aHIuc2VuZCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc291cmNlT2JqZWN0O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldFZhbHVlKHYsIHVwZGF0ZUludGVyZmFjZXMpIHtcbiAgICAgICAgaWYgKG1heExlbmd0aCkge1xuICAgICAgICAgICAgaWYgKHYubGVuZ3RoID4gbWF4TGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgKFwiU3RyaW5nIGxvbmdlciB0aGFuIFwiICsgbWF4TGVuZ3RoICsgXCIgY2hhcmFjdGVyc1wiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoX3ZhbHVlICE9PSB2KSB7XG4gICAgICAgICAgICByZXNvdXJjZU9iamVjdCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIF92YWx1ZSA9IHY7XG4gICAgICAgICAgICB0aGlzLnRyaWdnZXJQYXJhbWV0ZXJTZXQodXBkYXRlSW50ZXJmYWNlcyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50cmlnZ2VyKCk7XG4gICAgfVxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgICBcInR5cGVcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIlVSTFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGVzdHJveVwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBvd25lciA9IG5hbWUgPSBkZWZhdWx0VmFsdWUgPSBtYXhMZW5ndGggPSBfdmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwibWF4TGVuZ3RoXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogbWF4TGVuZ3RoXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGVmYXVsdFZhbHVlXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZGVmYXVsdFZhbHVlXG4gICAgICAgIH0sXG4gICAgICAgIFwidmFsdWVcIjoge1xuICAgICAgICAgICAgXCJnZXRcIjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmJvdW5kQXVkaW9QYXJhbSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50cmFuc2xhdGUodGhpcy5ib3VuZEF1ZGlvUGFyYW0udmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gX3ZhbHVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwic2V0XCI6IGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNldFZhbHVlLmNhbGwodGhpcywgdiwgdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwic2V0VmFsdWVcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbih2LCB1cGRhdGVJbnRlcmZhY2VzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNldFZhbHVlLmNhbGwodGhpcywgdiwgdXBkYXRlSW50ZXJmYWNlcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0UmVzb3VyY2VcIjp7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGdldFJlc291cmNlXG4gICAgICAgIH0sXG4gICAgICAgIFwidG9TdHJpbmdcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbih2KSB7XG4gICAgICAgICAgICAgICAgaWYgKHYgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHYgPSB0aGlzLnZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRvU3RyaW5nRnVuYyA9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRvU3RyaW5nRnVuYy5jYWxsKHRoaXMsIHYpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBTdHJpbmcodik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImdldFBhcmFtZXRlck9iamVjdFwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiB0aGlzLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU6IGRlZmF1bHRWYWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoOiBtYXhMZW5ndGgsXG4gICAgICAgICAgICAgICAgICAgIHZpc2libGVOYW1lOiBuYW1lLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIlVSTFBhcmFtZXRlclwiLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBuYW1lXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuVVJMUGFyYW1ldGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoUGx1Z2luUGFyYW1ldGVyLnByb3RvdHlwZSk7XG5VUkxQYXJhbWV0ZXIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gVVJMUGFyYW1ldGVyO1xuXG5leHBvcnQge1VSTFBhcmFtZXRlcn07XG4iLCIvKiBqc2hpbnQgZXN2ZXJzaW9uOiA2ICovXG5cbmZ1bmN0aW9uIEV4dHJhY3RvcihvdXRwdXQsIGZyYW1lU2l6ZSkge1xuICAgIHRoaXMuZXh0cmFjdG9yID0gb3V0cHV0LmNvbnRleHQuY3JlYXRlQW5hbHlzZXIoKTtcbiAgICB0aGlzLmV4dHJhY3Rvci5mZnRTaXplID0gZnJhbWVTaXplO1xuICAgIG91dHB1dC5jb25uZWN0KHRoaXMuZXh0cmFjdG9yKTtcbiAgICB0aGlzLmZlYXR1cmVzID0gW107XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIFwiZnJhbWVTaXplXCIsIHtcbiAgICAgICAgJ3ZhbHVlJzogZnJhbWVTaXplXG4gICAgfSk7XG5cbiAgICB2YXIgcmVjdXJzaXZlUHJvY2Vzc2luZyA9IG93bmVyLnJlY3Vyc2l2ZVByb2Nlc3Npbmc7XG4gICAgLypcbiAgICBmdW5jdGlvbiByZWN1cnNpdmVQcm9jZXNzaW5nKGJhc2UsIGxpc3QpIHtcbiAgICAgICAgdmFyIGwgPSBsaXN0Lmxlbmd0aCxcbiAgICAgICAgICAgIGksIGVudHJ5O1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICBlbnRyeSA9IGxpc3RbaV07XG4gICAgICAgICAgICBiYXNlW2VudHJ5Lm5hbWVdLmFwcGx5KGJhc2UsIGVudHJ5LnBhcmFtZXRlcnMpO1xuICAgICAgICAgICAgaWYgKGVudHJ5LmZlYXR1cmVzICYmIGVudHJ5LmZlYXR1cmVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICByZWN1cnNpdmVQcm9jZXNzaW5nKGJhc2UucmVzdWx0W2VudHJ5Lm5hbWVdLCBlbnRyeS5mZWF0dXJlcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgKi9cbiAgICBmdW5jdGlvbiBvbmF1ZGlvY2FsbGJhY2soZGF0YSkge1xuICAgICAgICAvL3RoaXMgPT09IEV4dHJhY3RvclxuICAgICAgICB2YXIgbWVzc2FnZSA9IHtcbiAgICAgICAgICAgICdudW1iZXJPZkNoYW5uZWxzJzogMSxcbiAgICAgICAgICAgICdyZXN1bHRzJzogW11cbiAgICAgICAgfTtcbiAgICAgICAgcmVjdXJzaXZlUHJvY2Vzc2luZyhkYXRhLCB0aGlzLmZlYXR1cmVzKTtcbiAgICAgICAgbWVzc2FnZS5yZXN1bHRzWzBdID0ge1xuICAgICAgICAgICAgJ2NoYW5uZWwnOiAwLFxuICAgICAgICAgICAgJ3Jlc3VsdHMnOiBKU09OLnBhcnNlKGRhdGEudG9KU09OKCkpXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMucG9zdEZlYXR1cmVzKGRhdGEubGVuZ3RoLCBtZXNzYWdlKTtcbiAgICB9XG5cbiAgICB0aGlzLnNldEZlYXR1cmVzID0gZnVuY3Rpb24gKGZlYXR1cmVMaXN0KSB7XG4gICAgICAgIHRoaXMuZmVhdHVyZXMgPSBmZWF0dXJlTGlzdDtcbiAgICAgICAgaWYgKHRoaXMuZmVhdHVyZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmV4dHJhY3Rvci5jbGVhckNhbGxiYWNrKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmV4dHJhY3Rvci5mcmFtZUNhbGxiYWNrKG9uYXVkaW9jYWxsYmFjaywgdGhpcyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMucmVqb2luRXh0cmFjdG9yID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBvdXRwdXQuY29ubmVjdCh0aGlzLmV4dHJhY3Rvcik7XG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRXh0cmFjdG9yO1xuIiwiLyoganNoaW50IGVzdmVyc2lvbjogNiAqL1xuXG5pbXBvcnQgV29ya2VyRXh0cmFjdG9yIGZyb20gXCIuL1dvcmtlckV4dHJhY3RvclwiO1xuaW1wb3J0IEV4dHJhY3RvciBmcm9tIFwiLi9FeHRyYWN0b3JcIjtcblxuZnVuY3Rpb24gT3V0cHV0Tm9kZShwYXJlbnQsIG91dHB1dCkge1xuICAgIHZhciBleHRyYWN0b3JzID0gW107XG4gICAgdGhpcy5hZGRFeHRyYWN0b3IgPSBmdW5jdGlvbiAoZnJhbWVTaXplKSB7XG4gICAgICAgIHZhciBvYmo7XG4gICAgICAgIGlmICh3aW5kb3cuV29ya2VyKSB7XG4gICAgICAgICAgICBvYmogPSBuZXcgV29ya2VyRXh0cmFjdG9yKG91dHB1dCwgZnJhbWVTaXplKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG9iaiA9IG5ldyBFeHRyYWN0b3Iob3V0cHV0LCBmcmFtZVNpemUpO1xuICAgICAgICB9XG4gICAgICAgIGV4dHJhY3RvcnMucHVzaChvYmopO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBcInBvc3RGZWF0dXJlc1wiLCB7XG4gICAgICAgICAgICAndmFsdWUnOiBmdW5jdGlvbiAoZnJhbWVTaXplLCByZXN1bHRzSlNPTikge1xuICAgICAgICAgICAgICAgIHZhciBvYmogPSB7XG4gICAgICAgICAgICAgICAgICAgICdvdXRwdXRJbmRleCc6IDAsXG4gICAgICAgICAgICAgICAgICAgICdmcmFtZVNpemUnOiBmcmFtZVNpemUsXG4gICAgICAgICAgICAgICAgICAgICdyZXN1bHRzJzogcmVzdWx0c0pTT05cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHRoaXMucG9zdEZlYXR1cmVzKG9iaik7XG4gICAgICAgICAgICB9LmJpbmQodGhpcylcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBvYmo7XG4gICAgfTtcbiAgICB0aGlzLmZpbmRFeHRyYWN0b3IgPSBmdW5jdGlvbiAoZnJhbWVTaXplKSB7XG4gICAgICAgIHZhciBjaGVjayA9IGZyYW1lU2l6ZTtcbiAgICAgICAgcmV0dXJuIGV4dHJhY3RvcnMuZmluZChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgLy8gVGhpcyBNVVNUIGJlID09IE5PVCA9PT1cbiAgICAgICAgICAgIHJldHVybiBOdW1iZXIoZS5mcmFtZVNpemUpID09PSBOdW1iZXIoY2hlY2spO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHRoaXMucmVqb2luRXh0cmFjdG9ycyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZXh0cmFjdG9ycy5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBlLnJlam9pbkV4dHJhY3RvcigpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHRoaXMuZGVsZXRlRXh0cmFjdG9yID0gZnVuY3Rpb24gKGZyYW1lU2l6ZSkge307XG59XG5cbmV4cG9ydCBkZWZhdWx0IE91dHB1dE5vZGU7XG4iLCIvKiBqc2hpbnQgZXN2ZXJzaW9uOiA2ICovXG5cbmZ1bmN0aW9uIFdvcmtlckV4dHJhY3RvcihvdXRwdXQsIGZyYW1lU2l6ZSkge1xuICAgIGZ1bmN0aW9uIG9uYXVkaW9jYWxsYmFjayhlKSB7XG4gICAgICAgIHZhciBjLCBmcmFtZXMgPSBbXTtcbiAgICAgICAgZm9yIChjID0gMDsgYyA8IGUuaW5wdXRCdWZmZXIubnVtYmVyT2ZDaGFubmVsczsgYysrKSB7XG4gICAgICAgICAgICBmcmFtZXNbY10gPSBlLmlucHV0QnVmZmVyLmdldENoYW5uZWxEYXRhKGMpO1xuICAgICAgICB9XG4gICAgICAgIHdvcmtlci5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgICAnc3RhdGUnOiAyLFxuICAgICAgICAgICAgJ2ZyYW1lcyc6IGZyYW1lc1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXNwb25zZShtc2cpIHtcbiAgICAgICAgdGhpcy5wb3N0RmVhdHVyZXMoZnJhbWVTaXplLCBtc2cuZGF0YS5yZXNwb25zZSk7XG4gICAgfVxuXG4gICAgdmFyIHdvcmtlciA9IG5ldyBXb3JrZXIoXCJqc2FwL2ZlYXR1cmUtd29ya2VyLmpzXCIpO1xuICAgIHdvcmtlci5vbmVycm9yID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICB9O1xuXG4gICAgdGhpcy5zZXRGZWF0dXJlcyA9IGZ1bmN0aW9uIChmZWF0dXJlTGlzdCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHZhciBjb25maWdNZXNzYWdlID0ge1xuICAgICAgICAgICAgJ3N0YXRlJzogMSxcbiAgICAgICAgICAgICdzYW1wbGVSYXRlJzogb3V0cHV0LmNvbnRleHQuc2FtcGxlUmF0ZSxcbiAgICAgICAgICAgICdmZWF0dXJlTGlzdCc6IGZlYXR1cmVMaXN0LFxuICAgICAgICAgICAgJ251bUNoYW5uZWxzJzogb3V0cHV0Lm51bWJlck9mT3V0cHV0cyxcbiAgICAgICAgICAgICdmcmFtZVNpemUnOiB0aGlzLmZyYW1lU2l6ZVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmZlYXR1cmVzID0gZmVhdHVyZUxpc3Q7XG4gICAgICAgIGlmIChmZWF0dXJlTGlzdCAmJiBmZWF0dXJlTGlzdC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB3b3JrZXIub25tZXNzYWdlID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoZS5kYXRhLnN0YXRlID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHdvcmtlci5vbm1lc3NhZ2UgPSByZXNwb25zZS5iaW5kKHNlbGYpO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmV4dHJhY3Rvci5vbmF1ZGlvcHJvY2VzcyA9IG9uYXVkaW9jYWxsYmFjay5iaW5kKHNlbGYpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHdvcmtlci5wb3N0TWVzc2FnZShjb25maWdNZXNzYWdlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgd29ya2VyLnBvc3RNZXNzYWdlKHtcbiAgICAgICAgICAgICAgICAnc3RhdGUnOiAwXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZXh0cmFjdG9yLm9uYXVkaW9wcm9jZXNzID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgdGhpcy5yZWpvaW5FeHRyYWN0b3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIG91dHB1dC5jb25uZWN0KHRoaXMuZXh0cmFjdG9yKTtcbiAgICB9O1xuXG4gICAgdGhpcy5leHRyYWN0b3IgPSBvdXRwdXQuY29udGV4dC5jcmVhdGVTY3JpcHRQcm9jZXNzb3IoZnJhbWVTaXplLCBvdXRwdXQubnVtYmVyT2ZPdXRwdXRzLCAxKTtcbiAgICBvdXRwdXQuY29ubmVjdCh0aGlzLmV4dHJhY3Rvcik7XG4gICAgdGhpcy5leHRyYWN0b3IuY29ubmVjdChvdXRwdXQuY29udGV4dC5kZXN0aW5hdGlvbik7XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgXCJmcmFtZVNpemVcIiwge1xuICAgICAgICAndmFsdWUnOiBmcmFtZVNpemVcbiAgICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgV29ya2VyRXh0cmFjdG9yO1xuIiwiLyoganNoaW50IGVzdmVyc2lvbjogNiAqL1xuXG5pbXBvcnQgT3V0cHV0Tm9kZSBmcm9tIFwiLi9PdXRwdXROb2RlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFN1YkZhY3RvcnlGZWF0dXJlU2VuZGVyKG93bmVyLCBGYWN0b3J5RmVhdHVyZU1hcCkge1xuICAgIHZhciBvdXRwdXROb2RlcztcbiAgICB0aGlzLnVwZGF0ZUZlYXR1cmVzID0gZnVuY3Rpb24gKGZlYXR1cmVPYmplY3QpIHtcbiAgICAgICAgdmFyIG87XG4gICAgICAgIGZvciAobyA9IDA7IG8gPCBmZWF0dXJlT2JqZWN0Lmxlbmd0aDsgbysrKSB7XG4gICAgICAgICAgICBpZiAob3V0cHV0Tm9kZXMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGlmIChvID4gMSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyAoXCJSZXF1ZXN0ZWQgYW4gb3V0cHV0IHRoYXQgZG9lcyBub3QgZXhpc3RcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG91dHB1dE5vZGVzID0gbmV3IE91dHB1dE5vZGUob3duZXIsIG93bmVyLmNoYWluU3RhcnQpO1xuICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvdXRwdXROb2RlcywgXCJwb3N0RmVhdHVyZXNcIiwge1xuICAgICAgICAgICAgICAgICAgICAndmFsdWUnOiBmdW5jdGlvbiAocmVzdWx0T2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBvc3RGZWF0dXJlcyhyZXN1bHRPYmplY3QpO1xuICAgICAgICAgICAgICAgICAgICB9LmJpbmQodGhpcylcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBzaTtcbiAgICAgICAgICAgIGZvciAoc2kgPSAwOyBzaSA8IGZlYXR1cmVPYmplY3Rbb10ubGVuZ3RoOyBzaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGV4dHJhY3RvciA9IG91dHB1dE5vZGVzLmZpbmRFeHRyYWN0b3IoZmVhdHVyZU9iamVjdFtvXVtzaV0uZnJhbWVTaXplKTtcbiAgICAgICAgICAgICAgICBpZiAoIWV4dHJhY3Rvcikge1xuICAgICAgICAgICAgICAgICAgICBleHRyYWN0b3IgPSBvdXRwdXROb2Rlcy5hZGRFeHRyYWN0b3IoZmVhdHVyZU9iamVjdFtvXVtzaV0uZnJhbWVTaXplKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZXh0cmFjdG9yLnNldEZlYXR1cmVzKGZlYXR1cmVPYmplY3Rbb11bc2ldLmZlYXR1cmVMaXN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB0aGlzLnJlam9pbkV4dHJhY3RvcnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChvdXRwdXROb2Rlcykge1xuICAgICAgICAgICAgb3V0cHV0Tm9kZXMucmVqb2luRXh0cmFjdG9ycygpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHRoaXMucG9zdEZlYXR1cmVzID0gZnVuY3Rpb24gKGZlYXR1cmVPYmplY3QpIHtcbiAgICAgICAgLypcbiAgICAgICAgICAgIENhbGxlZCBieSB0aGUgaW5kaXZpZHVhbCBleHRyYWN0b3IgaW5zdGFuY2VzOlxuICAgICAgICAgICAgZmVhdHVyZU9iamVjdCA9IHsnZnJhbWVTaXplJzogZnJhbWVTaXplLFxuICAgICAgICAgICAgJ291dHB1dEluZGV4Jzogb3V0cHV0SW5kZXgsXG4gICAgICAgICAgICAncmVzdWx0cyc6W119XG4gICAgICAgICovXG4gICAgICAgIEZhY3RvcnlGZWF0dXJlTWFwLnBvc3RGZWF0dXJlcyh7XG4gICAgICAgICAgICAncGx1Z2luJzogdGhpcyxcbiAgICAgICAgICAgICdvdXRwdXRJbmRleCc6IGZlYXR1cmVPYmplY3Qub3V0cHV0SW5kZXgsXG4gICAgICAgICAgICAnZnJhbWVTaXplJzogZmVhdHVyZU9iamVjdC5mcmFtZVNpemUsXG4gICAgICAgICAgICAncmVzdWx0cyc6IGZlYXR1cmVPYmplY3QucmVzdWx0c1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgLy8gU2VuZCB0byBGYWN0b3J5XG4gICAgRmFjdG9yeUZlYXR1cmVNYXAuY3JlYXRlU291cmNlTWFwKHRoaXMsIHVuZGVmaW5lZCk7XG59XG4iLCIvKiBqc2hpbnQgZXN2ZXJzaW9uOiA2ICovXG5cbmltcG9ydCBTdWJGYWN0b3J5RmVhdHVyZVNlbmRlciBmcm9tIFwiLi9TdWJGYWN0b3J5RmVhdHVyZVNlbmRlci9pbmRleFwiO1xuaW1wb3J0IExpbmtlZFN0b3JlIGZyb20gJy4uLy4uL0xpbmtlZFN0b3JlJztcblxuZnVuY3Rpb24gQXVkaW9QbHVnaW5DaGFpbk1hbmFnZXIoUGx1Z2luRmFjdG9yeSwgY2hhaW5TdGFydCwgY2hhaW5TdG9wKSB7XG5cbiAgICB2YXIgcGx1Z2luX2xpc3QgPSBbXSxcbiAgICAgICAgcGx1Z2luQ2hhaW5TdGFydCA9IGNoYWluU3RhcnQsXG4gICAgICAgIHBsdWdpbkNoYWluU3RvcCA9IGNoYWluU3RvcCxcbiAgICAgICAgZmFjdG9yeU5hbWUgPSBcIlwiLFxuICAgICAgICBzdGF0ZSA9IDEsXG4gICAgICAgIGRlbGF5U2FtcGxlcyA9IDAsXG4gICAgICAgIGNoYWluU3RhcnRGZWF0dXJlID0gbmV3IFN1YkZhY3RvcnlGZWF0dXJlU2VuZGVyKHRoaXMsIFBsdWdpbkZhY3RvcnkuRmVhdHVyZU1hcCksXG4gICAgICAgIHNlbWFudGljU3RvcmVzID0gW10sXG4gICAgICAgIGV2ZW50VGFyZ2V0ID0gbmV3IEV2ZW50VGFyZ2V0KCksXG4gICAgICAgIHNlbGYgPSB0aGlzO1xuICAgIHRoaXMucGFyZW50ID0gUGx1Z2luRmFjdG9yeTtcbiAgICBwbHVnaW5DaGFpblN0YXJ0LmRpc2Nvbm5lY3QoKTtcbiAgICBwbHVnaW5DaGFpblN0YXJ0LmNvbm5lY3QoY2hhaW5TdG9wKTtcblxuICAgIHRoaXMuVHJhY2tEYXRhID0gbmV3IExpbmtlZFN0b3JlKFwiVHJhY2tcIik7XG5cbiAgICB0aGlzLmZlYXR1cmVTZW5kZXIgPSBjaGFpblN0YXJ0RmVhdHVyZTtcblxuICAgIHRoaXMuZ2V0RmVhdHVyZUNoYWluID0gZnVuY3Rpb24gKCkge1xuXG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHJlYnVpbGQoKSB7XG4gICAgICAgIHZhciBpID0gMCxcbiAgICAgICAgICAgIGwgPSBwbHVnaW5fbGlzdC5sZW5ndGggLSAxO1xuICAgICAgICB3aGlsZSAoaSA8IGwpIHtcbiAgICAgICAgICAgIHZhciBjdXJyZW50Tm9kZSA9IHBsdWdpbl9saXN0W2krK107XG4gICAgICAgICAgICB2YXIgbmV4dE5vZGUgPSBwbHVnaW5fbGlzdFtpXTtcbiAgICAgICAgICAgIGN1cnJlbnROb2RlLnJlY29ubmVjdChuZXh0Tm9kZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpc29sYXRlKCkge1xuICAgICAgICBwbHVnaW5fbGlzdC5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBlLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3V0Q2hhaW4oKSB7XG4gICAgICAgIGlmIChwbHVnaW5fbGlzdC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBwbHVnaW5DaGFpblN0YXJ0LmRpc2Nvbm5lY3QocGx1Z2luX2xpc3RbMF0uaW5wdXQpO1xuICAgICAgICAgICAgcGx1Z2luX2xpc3RbcGx1Z2luX2xpc3QubGVuZ3RoIC0gMV0ub3V0cHV0LmRpc2Nvbm5lY3QocGx1Z2luQ2hhaW5TdG9wKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBsdWdpbkNoYWluU3RhcnQuZGlzY29ubmVjdChwbHVnaW5DaGFpblN0b3ApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGpvaW5DaGFpbigpIHtcbiAgICAgICAgaWYgKHBsdWdpbl9saXN0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHBsdWdpbkNoYWluU3RhcnQuY29ubmVjdChwbHVnaW5fbGlzdFswXS5pbnB1dCk7XG4gICAgICAgICAgICBwbHVnaW5fbGlzdFtwbHVnaW5fbGlzdC5sZW5ndGggLSAxXS5vdXRwdXQuY29ubmVjdChwbHVnaW5DaGFpblN0b3ApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGx1Z2luQ2hhaW5TdGFydC5jb25uZWN0KHBsdWdpbkNoYWluU3RvcCk7XG4gICAgICAgIH1cbiAgICAgICAgY2hhaW5TdGFydEZlYXR1cmUucmVqb2luRXh0cmFjdG9ycygpO1xuICAgIH1cblxuICAgIHRoaXMuYnlwYXNzUGx1Z2luID0gZnVuY3Rpb24gKHBsdWdpbl9pbnN0YW5jZSwgc3RhdGUpIHtcbiAgICAgICAgLy8gQ2hlY2sgaXMgYSBtZW1iZXIgb2YgdGhpcyBjaGFpblxuICAgICAgICBpZiAocGx1Z2luX2xpc3QuaW5jbHVkZXMocGx1Z2luX2luc3RhbmNlKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBwbHVnaW5faW5zdGFuY2UuYnlwYXNzKHN0YXRlKTtcbiAgICB9O1xuXG4gICAgdGhpcy5nZXRQcm90b3R5cGVzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wYXJlbnQuZ2V0UHJvdG90eXBlcygpO1xuICAgIH07XG5cbiAgICB0aGlzLmdldEZhY3RvcnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBhcmVudDtcbiAgICB9O1xuXG4gICAgdGhpcy5kZXN0cm95ID0gZnVuY3Rpb24gKHJlY29ubmVjdCkge1xuICAgICAgICB2YXIgaTtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHBsdWdpbl9saXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmRlc3Ryb3lQbHVnaW4ocGx1Z2luX2xpc3RbaV0pO1xuICAgICAgICB9XG4gICAgICAgIHBsdWdpbkNoYWluU3RhcnQuZGlzY29ubmVjdCgpO1xuICAgICAgICBpZiAocmVjb25uZWN0ID09PSB0cnVlKSB7XG4gICAgICAgICAgICBwbHVnaW5DaGFpblN0YXJ0LmNvbm5lY3QocGx1Z2luQ2hhaW5TdG9wKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBQbHVnaW4gY3JlYXRpb24gLyBkZXN0cnVjdGlvblxuXG4gICAgZnVuY3Rpb24gYnVpbGROZXdQbHVnaW4ocHJvdG90eXBlT2JqZWN0KSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIGlmIChzdGF0ZSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJlamVjdCAoXCJTdWJGYWN0b3J5IGhhcyBiZWVuIGRlc3Ryb3llZCEgQ2Fubm90IGFkZCBuZXcgcGx1Z2luc1wiKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShwcm90b3R5cGVPYmplY3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIHByb3RvdHlwZU9iamVjdC5jcmVhdGVQbHVnaW5JbnN0YW5jZShzZWxmLCBmYWxzZSlcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhub2RlLCB7XG4gICAgICAgICAgICAgICAgICAgICdUcmFja0RhdGEnOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogc2VsZi5UcmFja0RhdGFcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBub2RlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMuY3JlYXRlUGx1Z2luID0gZnVuY3Rpb24gKHByb3RvdHlwZU9iamVjdCkge1xuICAgICAgICByZXR1cm4gYnVpbGROZXdQbHVnaW4ocHJvdG90eXBlT2JqZWN0KS5jYXRjaChmdW5jdGlvbihlKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICAgICAgdGhyb3coXCJQbHVnaW4gZGlkIG5vdCBnZXQgY3JlYXRlZCEgQWJvcnRpbmdcIik7XG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24obm9kZSkge1xuICAgICAgICAgICAgY3V0Q2hhaW4oKTtcbiAgICAgICAgICAgIHBsdWdpbl9saXN0LnB1c2gobm9kZSk7XG4gICAgICAgICAgICBpc29sYXRlKCk7XG4gICAgICAgICAgICByZWJ1aWxkKCk7XG4gICAgICAgICAgICBqb2luQ2hhaW4oKTtcbiAgICAgICAgICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihcImFsdGVyZGVsYXlcIiwgc2VsZik7XG4gICAgICAgICAgICBub2RlLm5vZGUub25sb2FkZWQuY2FsbChub2RlLm5vZGUpO1xuICAgICAgICAgICAgdXBkYXRlRGVsYXlDb21wZW5zYXRpb24oKTtcbiAgICAgICAgICAgIGV2ZW50VGFyZ2V0LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiY2hhbmdlXCIpKTtcbiAgICAgICAgICAgIHJldHVybiBub2RlO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgdGhpcy5yZW1vdmVQbHVnaW4gPSBmdW5jdGlvbihwbHVnaW5fb2JqZWN0KSB7XG4gICAgICAgIGlmIChzdGF0ZSA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuZ2V0UGx1Z2luSW5kZXgocGx1Z2luX29iamVjdCk7XG4gICAgICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICAgICAgICBjdXRDaGFpbigpO1xuICAgICAgICAgICAgcGx1Z2luX29iamVjdC5yZW1vdmVFdmVudExpc3RlbmVyKFwiYWx0ZXJkZWxheVwiLCBzZWxmKTtcbiAgICAgICAgICAgIHBsdWdpbl9vYmplY3Qubm9kZS5zdG9wLmNhbGwocGx1Z2luX29iamVjdC5ub2RlKTtcbiAgICAgICAgICAgIHBsdWdpbl9vYmplY3Qubm9kZS5vbnVubG9hZGVkLmNhbGwocGx1Z2luX29iamVjdC5ub2RlKTtcbiAgICAgICAgICAgIHBsdWdpbl9saXN0LnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICBpc29sYXRlKCk7XG4gICAgICAgICAgICByZWJ1aWxkKCk7XG4gICAgICAgICAgICBqb2luQ2hhaW4oKTtcbiAgICAgICAgICAgIHVwZGF0ZURlbGF5Q29tcGVuc2F0aW9uKCk7XG4gICAgICAgICAgICBldmVudFRhcmdldC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImNoYW5nZVwiKSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgdGhpcy5kZXN0cm95UGx1Z2luID0gZnVuY3Rpb24gKHBsdWdpbl9vYmplY3QpIHtcbiAgICAgICAgaWYgKHN0YXRlID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZW1vdmVQbHVnaW4ocGx1Z2luX29iamVjdCk7XG4gICAgICAgIHRoaXMucGFyZW50LmRlbGV0ZVBsdWdpbihwbHVnaW5fb2JqZWN0LmlkKTtcbiAgICAgICAgdXBkYXRlRGVsYXlDb21wZW5zYXRpb24oKTtcbiAgICB9O1xuXG4gICAgdGhpcy5nZXRQbHVnaW5zID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcGx1Z2luX2xpc3Q7XG4gICAgfTtcblxuICAgIHRoaXMuZ2V0QWxsUGx1Z2lucyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGFyZW50LmdldEFsbFBsdWdpbnNPYmplY3QoKTtcbiAgICB9O1xuXG4gICAgdGhpcy5nZXRQbHVnaW5JbmRleCA9IGZ1bmN0aW9uIChwbHVnaW5fb2JqZWN0KSB7XG4gICAgICAgIGlmIChzdGF0ZSA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBpbmRleCA9IHBsdWdpbl9saXN0LmZpbmRJbmRleChmdW5jdGlvbiAoZWxlbWVudCwgaW5kZXgsIGFycmF5KSB7XG4gICAgICAgICAgICBpZiAoZWxlbWVudCA9PT0gdGhpcykge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9LCBwbHVnaW5fb2JqZWN0KTtcbiAgICAgICAgcmV0dXJuIGluZGV4O1xuICAgIH07XG5cbiAgICB0aGlzLm1vdmVQbHVnaW4gPSBmdW5jdGlvbiAocGx1Z2luX29iamVjdCwgbmV3X2luZGV4KSB7XG4gICAgICAgIGlmIChzdGF0ZSA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuZ2V0UGx1Z2luSW5kZXgocGx1Z2luX29iamVjdCksXG4gICAgICAgICAgICBvYmosIGhvbGRMb3csIGhvbGRIaWdoLCBpO1xuICAgICAgICBpZiAoUGx1Z2luRmFjdG9yeS5nZXRBbGxQbHVnaW5zKCkuaW5jbHVkZXMocGx1Z2luX29iamVjdCkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0aHJvdyhcIlBsdWdpbiBkb2VzIG5vdCBleGlzdFwiKTtcbiAgICAgICAgfVxuICAgICAgICBjdXRDaGFpbigpO1xuICAgICAgICBpc29sYXRlKCk7XG4gICAgICAgIGlmIChwbHVnaW5fb2JqZWN0Lm5vZGUub3duZXIgIT09IHRoaXMpIHtcbiAgICAgICAgICAgIC8vIERpZmZlcmVudCBzdWItZmFjdG9yeVxuICAgICAgICAgICAgcGx1Z2luX29iamVjdC5ub2RlLm93bmVyLnJlbW92ZVBsdWdpbihwbHVnaW5fb2JqZWN0KTtcbiAgICAgICAgICAgIHBsdWdpbl9vYmplY3Qubm9kZS5vd25lciA9IHRoaXM7XG4gICAgICAgICAgICBvYmogPSBbcGx1Z2luX29iamVjdF07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvYmogPSBwbHVnaW5fbGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgcGx1Z2luX29iamVjdC5ub2RlLm9udW5sb2FkZWQuY2FsbChwbHVnaW5fb2JqZWN0Lm5vZGUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChuZXdfaW5kZXggPT09IDApIHtcbiAgICAgICAgICAgIHBsdWdpbl9saXN0ID0gb2JqLmNvbmNhdChwbHVnaW5fbGlzdCk7XG4gICAgICAgIH0gZWxzZSBpZiAobmV3X2luZGV4ID49IHBsdWdpbl9saXN0Lmxlbmd0aCkge1xuICAgICAgICAgICAgcGx1Z2luX2xpc3QgPSBwbHVnaW5fbGlzdC5jb25jYXQob2JqKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGhvbGRMb3cgPSBwbHVnaW5fbGlzdC5zbGljZSgwLCBuZXdfaW5kZXgpO1xuICAgICAgICAgICAgaG9sZEhpZ2ggPSBwbHVnaW5fbGlzdC5zbGljZShuZXdfaW5kZXgpO1xuICAgICAgICAgICAgcGx1Z2luX2xpc3QgPSBob2xkTG93LmNvbmNhdChvYmouY29uY2F0KGhvbGRIaWdoKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmVidWlsZCgpO1xuICAgICAgICBqb2luQ2hhaW4oKTtcbiAgICAgICAgcGx1Z2luX29iamVjdC5ub2RlLm9ubG9hZGVkLmNhbGwocGx1Z2luX29iamVjdC5ub2RlKTtcbiAgICAgICAgdXBkYXRlRGVsYXlDb21wZW5zYXRpb24oKTtcbiAgICAgICAgZXZlbnRUYXJnZXQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJjaGFuZ2VcIikpO1xuICAgIH07XG5cbiAgICB0aGlzLmNvcHlQbHVnaW4gPSBmdW5jdGlvbihwbHVnaW5fb2JqZWN0LCBjb3B5X2luZGV4KSB7XG4gICAgICAgIGlmIChjb3B5X2luZGV4ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNvcHlfaW5kZXggPSBwbHVnaW5fbGlzdC5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBjb3B5X2luZGV4ICE9IFwibnVtYmVyXCIgfHwgY29weV9pbmRleCA8IDAgfHwgY29weV9pbmRleCA+IHBsdWdpbl9saXN0Lmxlbmd0aCkge1xuICAgICAgICAgICAgdGhyb3coXCJQbHVnaW4gY29weSBpbmRleCBvdXRzaWRlIG9mIHRoZSBjaGFpbiBzY29wZS5cIik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJ1aWxkTmV3UGx1Z2luKHBsdWdpbl9vYmplY3QucHJvdG90eXBlT2JqZWN0KVxuICAgICAgICAuY2F0Y2goZnVuY3Rpb24oZSl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgICAgIHRocm93KFwiUGx1Z2luIGRpZCBub3QgZ2V0IGNyZWF0ZWQhIEFib3J0aW5nXCIpO1xuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgICAgICAgIG5vZGUubm9kZS5wYXJhbWV0ZXJzLnNldFBhcmFtZXRlcnNCeU9iamVjdChwbHVnaW5fb2JqZWN0Lm5vZGUucGFyYW1ldGVycy5nZXRQYXJhbWV0ZXJPYmplY3QoKSk7XG4gICAgICAgICAgICBjdXRDaGFpbigpO1xuICAgICAgICAgICAgaXNvbGF0ZSgpO1xuICAgICAgICAgICAgcGx1Z2luX2xpc3Quc3BsaWNlKGNvcHlfaW5kZXgsIDAsIG5vZGUpO1xuICAgICAgICAgICAgcmVidWlsZCgpO1xuICAgICAgICAgICAgam9pbkNoYWluKCk7XG4gICAgICAgICAgICB1cGRhdGVEZWxheUNvbXBlbnNhdGlvbigpO1xuICAgICAgICAgICAgbm9kZS5ub2RlLm9ubG9hZGVkLmNhbGwobm9kZS5ub2RlKTtcbiAgICAgICAgICAgIGV2ZW50VGFyZ2V0LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiY2hhbmdlXCIpKTtcbiAgICAgICAgICAgIHJldHVybiBub2RlO1xuICAgICAgICB9KTtcblxuICAgIH07XG5cbiAgICBmdW5jdGlvbiByZWN1cnNpdmVQcm9jZXNzaW5nKGJhc2UsIGxpc3QpIHtcbiAgICAgICAgdmFyIGwgPSBsaXN0Lmxlbmd0aCxcbiAgICAgICAgICAgIGksIGVudHJ5O1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICBlbnRyeSA9IGxpc3RbaV07XG4gICAgICAgICAgICBiYXNlW2VudHJ5Lm5hbWVdLmFwcGx5KGJhc2UsIGVudHJ5LnBhcmFtZXRlcnMpO1xuICAgICAgICAgICAgaWYgKGVudHJ5LmZlYXR1cmVzICYmIGVudHJ5LmZlYXR1cmVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICByZWN1cnNpdmVQcm9jZXNzaW5nKGJhc2UucmVzdWx0W2VudHJ5Lm5hbWVdLCBlbnRyeS5mZWF0dXJlcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXREZWxheUNvbXBlbnNhdGlvbigpIHtcbiAgICAgICAgdmFyIHN1bSA9IDA7XG4gICAgICAgIHBsdWdpbl9saXN0LmZpbHRlcihmdW5jdGlvbihwbHVnaW4pIHtcbiAgICAgICAgICAgIHJldHVybiAhcGx1Z2luLmlzQnlwYXNzZWQoKTtcbiAgICAgICAgfSkuZm9yRWFjaChmdW5jdGlvbihwbHVnaW4pIHtcbiAgICAgICAgICAgIHN1bSArPSBwbHVnaW4ubm9kZS5wcm9jZXNzaW5nRGVsYXlBc1NhbXBsZXM7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gc3VtO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZURlbGF5Q29tcGVuc2F0aW9uKCkge1xuICAgICAgICB2YXIgc3VtID0gZ2V0RGVsYXlDb21wZW5zYXRpb24oKTtcbiAgICAgICAgaWYgKGRlbGF5U2FtcGxlcyAhPSBzdW0pIHtcbiAgICAgICAgICAgIGRlbGF5U2FtcGxlcyA9IHN1bTtcbiAgICAgICAgICAgIGV2ZW50VGFyZ2V0LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiYWx0ZXJkZWxheVwiKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRlbGF5U2FtcGxlcztcbiAgICB9XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XG4gICAgICAgICdjaGFpblN0YXJ0Jzoge1xuICAgICAgICAgICAgJ3ZhbHVlJzogY2hhaW5TdGFydFxuICAgICAgICB9LFxuICAgICAgICAnY2hhaW5TdG9wJzoge1xuICAgICAgICAgICAgJ3ZhbHVlJzogY2hhaW5TdG9wXG4gICAgICAgIH0sXG4gICAgICAgIFwidXBkYXRlRGVsYXlDb21wZW5zYXRpb25cIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHVwZGF0ZURlbGF5Q29tcGVuc2F0aW9uKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwicHJvY2Vzc2luZ0RlbGF5QXNTYW1wbGVzXCI6IHtcbiAgICAgICAgICAgIFwiZ2V0XCI6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB1cGRhdGVEZWxheUNvbXBlbnNhdGlvbigpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwic2V0XCI6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHRocm93KFwicHJvY2Vzc2luZ0RlbGF5QXNTYW1wbGVzIGlzIHJlYWQtb25seVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJwcm9jZXNzaW5nRGVsYXlBc1NlY29uZHNcIjoge1xuICAgICAgICAgICAgXCJnZXRcIjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvY2Vzc2luZ0RlbGF5QXNTYW1wbGVzL1BsdWdpbkZhY3RvcnkuY29udGV4dC5zYW1wbGVSYXRlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwic2V0XCI6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHRocm93KFwicHJvY2Vzc2luZ0RlbGF5QXNTZWNvbmRzIGlzIHJlYWQtb25seVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgJ25hbWUnOiB7XG4gICAgICAgICAgICAnZ2V0JzogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWN0b3J5TmFtZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAnc2V0JzogZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG5hbWUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgZmFjdG9yeU5hbWUgPSBuYW1lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gZmFjdG9yeU5hbWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgICdyZWN1cnNpdmVQcm9jZXNzaW5nJzoge1xuICAgICAgICAgICAgJ2dldCc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVjdXJzaXZlUHJvY2Vzc2luZztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgJ2hhbmRsZUV2ZW50Jzoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGUudHlwZSA9PSBcImFsdGVyZGVsYXlcIikge1xuICAgICAgICAgICAgICAgICAgICB1cGRhdGVEZWxheUNvbXBlbnNhdGlvbigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJhZGRFdmVudExpc3RlbmVyXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBldmVudFRhcmdldC5hZGRFdmVudExpc3RlbmVyKGtleSwgdmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInJlbW92ZUV2ZW50TGlzdGVuZXJcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbihrZXksIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGV2ZW50VGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoa2V5LCB2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXVkaW9QbHVnaW5DaGFpbk1hbmFnZXI7XG4iLCIvKiBqc2hpbnQgZXN2ZXJzaW9uOiA2ICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGZWF0dXJlTm9kZShub2RlKSB7XG4gICAgdGhpcy5uYW1lID0gbm9kZS5uYW1lO1xuICAgIHRoaXMucGFyYW1ldGVycyA9IHRoaXMucGFyYW1ldGVycztcbiAgICB0aGlzLmZlYXR1cmVzID0gW107XG59XG4iLCIvKiBqc2hpbnQgZXN2ZXJzaW9uOiA2ICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlcXVlc3Rvck1hcChwbHVnaW5JbnN0YW5jZSkge1xuICAgIHZhciBGZWF0dXJlcyA9IFtdO1xuICAgIHZhciBSZWNlaXZlciA9IHBsdWdpbkluc3RhbmNlLm5vZGUuZmVhdHVyZU1hcC5SZWNlaXZlcjtcbiAgICB0aGlzLmdldFJlcXVlc3Rvckluc3RhbmNlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcGx1Z2luSW5zdGFuY2U7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHJlY3Vyc2l2ZWx5QWRkRmVhdHVyZXMocm9vdEFycmF5LCBmZWF0dXJlT2JqZWN0KSB7XG4gICAgICAgIHZhciBpO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgZmVhdHVyZU9iamVjdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgLy8gQ2hlY2sgd2UgaGF2ZSBub3QgYWxyZWFkeSBsaXN0ZWQgdGhlIGZlYXR1cmVcbiAgICAgICAgICAgIHZhciBmZWF0dXJlTm9kZSA9IGdldEZlYXR1cmVOb2RlKHJvb3RBcnJheSwgZmVhdHVyZU9iamVjdFtpXSk7XG4gICAgICAgICAgICBpZiAoIWZlYXR1cmVOb2RlIHx8IChmZWF0dXJlT2JqZWN0W2ldLnBhcmFtZXRlcnMgJiYgZmVhdHVyZU9iamVjdFtpXS5wYXJhbWV0ZXJzLmxlbmd0aCAhPT0gMCkpIHtcbiAgICAgICAgICAgICAgICBmZWF0dXJlTm9kZSA9IGFkZEZlYXR1cmVOb2RlKGZlYXR1cmVPYmplY3RbaV0sIHJvb3RBcnJheSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZmVhdHVyZU9iamVjdFtpXS5mZWF0dXJlcyAhPT0gdW5kZWZpbmVkICYmIGZlYXR1cmVPYmplY3RbaV0uZmVhdHVyZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHJlY3Vyc2l2ZWx5QWRkRmVhdHVyZXMoZmVhdHVyZU5vZGUuZmVhdHVyZXMsIGZlYXR1cmVPYmplY3RbaV0uZmVhdHVyZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVjdXJzaXZlbHlEZWxldGVGZWF0dXJlcyhyb290QXJyYXksIGZlYXR1cmVPYmplY3QpIHtcbiAgICAgICAgdmFyIGwgPSBmZWF0dXJlT2JqZWN0Lmxlbmd0aCxcbiAgICAgICAgICAgIGk7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIC8vIEZpbmQgdGhlIGZlYXR1cmVcbiAgICAgICAgICAgIHZhciBpbmRleCA9IGdldEZlYXR1cmVOb2RlKHJvb3RBcnJheSwgZmVhdHVyZU9iamVjdFtpXSk7XG4gICAgICAgICAgICBpZiAoaW5kZXggPj0gMCkge1xuICAgICAgICAgICAgICAgIGlmIChmZWF0dXJlT2JqZWN0W2luZGV4XS5mZWF0dXJlcyAmJiBmZWF0dXJlT2JqZWN0W2luZGV4XS5mZWF0dXJlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlY3Vyc2l2ZWx5RGVsZXRlRmVhdHVyZXMocm9vdEFycmF5W2luZGV4XS5mZWF0dXJlcywgZmVhdHVyZU9iamVjdFtpbmRleF0uZmVhdHVyZXMpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIEZlYXR1cmVzLnNwbGljZShpbmRleCwgMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmFkZEZlYXR1cmVzID0gZnVuY3Rpb24gKGZlYXR1cmVPYmplY3QpIHtcbiAgICAgICAgcmVjdXJzaXZlbHlBZGRGZWF0dXJlcyhGZWF0dXJlcywgZmVhdHVyZU9iamVjdC5mZWF0dXJlcyk7XG4gICAgfTtcblxuICAgIHRoaXMuZGVsZXRlRmVhdHVyZXMgPSBmdW5jdGlvbiAoZmVhdHVyZU9iamVjdCkge1xuICAgICAgICByZWN1cnNpdmVseURlbGV0ZUZlYXR1cmVzKEZlYXR1cmVzLCBmZWF0dXJlT2JqZWN0LmZlYXR1cmVzKTtcbiAgICB9O1xuXG4gICAgdGhpcy5nZXRGZWF0dXJlTGlzdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIEZlYXR1cmVzO1xuICAgIH07XG5cbiAgICB0aGlzLnBvc3RGZWF0dXJlcyA9IGZ1bmN0aW9uIChmZWF0dXJlT2JqZWN0KSB7XG4gICAgICAgIHZhciBtZXNzYWdlID0ge1xuICAgICAgICAgICAgICAgICdwbHVnaW4nOiBmZWF0dXJlT2JqZWN0LnBsdWdpbixcbiAgICAgICAgICAgICAgICAnb3V0cHV0SW5kZXgnOiBmZWF0dXJlT2JqZWN0Lm91dHB1dEluZGV4LFxuICAgICAgICAgICAgICAgICdmcmFtZVNpemUnOiBmZWF0dXJlT2JqZWN0LmZyYW1lU2l6ZSxcbiAgICAgICAgICAgICAgICAnZmVhdHVyZXMnOiB7XG4gICAgICAgICAgICAgICAgICAgICdudW1iZXJPZkNoYW5uZWxzJzogZmVhdHVyZU9iamVjdC5yZXN1bHRzLm51bWJlck9mQ2hhbm5lbHMsXG4gICAgICAgICAgICAgICAgICAgICdyZXN1bHRzJzogW11cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaTtcblxuICAgICAgICBmdW5jdGlvbiByZWN1cnNpdmVQb3N0RmVhdHVyZXMocm9vdE5vZGUsIHJlc3VsdHNMaXN0LCBGZWF0dXJlTGlzdCkge1xuICAgICAgICAgICAgLy8gQWRkIHRoZSByZXN1bHRzIHRyZWUgd2hlcmUgbmVjZXNzYXJ5XG4gICAgICAgICAgICB2YXIgaSwgcGFyYW07XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGFvKGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZS5uYW1lID09PSBwYXJhbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAocGFyYW0gaW4gcmVzdWx0c0xpc3QpIHtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0c0xpc3QuaGFzT3duUHJvcGVydHkocGFyYW0pKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBub2RlID0gRmVhdHVyZUxpc3QuZmluZChhbyk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChub2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0c0xpc3RbcGFyYW1dLmNvbnN0cnVjdG9yID09PSBPYmplY3QgJiYgbm9kZS5yZXN1bHRzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm9vdE5vZGVbcGFyYW1dID0ge307XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVjdXJzaXZlUG9zdEZlYXR1cmVzKHJvb3ROb2RlW3BhcmFtXSwgcmVzdWx0c0xpc3RbcGFyYW1dLCBub2RlLnJlc3VsdHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb290Tm9kZVtwYXJhbV0gPSByZXN1bHRzTGlzdFtwYXJhbV07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gUGVyZm9ybSByZWN1cnNpdmUgbWFwIGZvciBlYWNoIGNoYW5uZWxcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGZlYXR1cmVPYmplY3QucmVzdWx0cy5udW1iZXJPZkNoYW5uZWxzOyBpKyspIHtcbiAgICAgICAgICAgIG1lc3NhZ2UuZmVhdHVyZXMucmVzdWx0c1tpXSA9IHt9O1xuICAgICAgICAgICAgcmVjdXJzaXZlUG9zdEZlYXR1cmVzKG1lc3NhZ2UuZmVhdHVyZXMucmVzdWx0c1tpXSwgZmVhdHVyZU9iamVjdC5yZXN1bHRzLnJlc3VsdHNbaV0ucmVzdWx0cywgRmVhdHVyZXMpO1xuICAgICAgICB9XG4gICAgICAgIHBsdWdpbkluc3RhbmNlLm5vZGUuZmVhdHVyZU1hcC5SZWNlaXZlci5wb3N0RmVhdHVyZXMobWVzc2FnZSk7XG4gICAgfTtcbn1cbiIsIi8qIGpzaGludCBlc3ZlcnNpb246IDYgKi9cblxuaW1wb3J0IFJlcXVlc3Rvck1hcCBmcm9tIFwiLi9SZXF1ZXN0b3JNYXBcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU291cmNlTWFwKFNlbmRlciwgcGx1Z2luSW5zdGFjZSkge1xuICAgIHZhciBNYXBwaW5ncyA9IFtdO1xuICAgIHRoaXMuZ2V0U291cmNlSW5zdGFuY2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBwbHVnaW5JbnN0YWNlO1xuICAgIH07XG4gICAgdGhpcy5nZXRTZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBTZW5kZXI7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGZpbmRGZWF0dXJlT2JqZWN0KGZlYXR1cmVPYmplY3QpIHtcbiAgICAgICAgcmV0dXJuIE1hcHBpbmdzLmZpbmQoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHJldHVybiAoZS5vdXRwdXRJbmRleCA9PT0gdGhpcy5vdXRwdXRJbmRleCAmJiBlLmZyYW1lU2l6ZSA9PT0gdGhpcy5mcmFtZVNpemUpO1xuICAgICAgICB9LCBmZWF0dXJlT2JqZWN0KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVTZW5kZXIoKSB7XG4gICAgICAgIGZ1bmN0aW9uIHJlY3Vyc2l2ZUZpbmQoZmVhdHVyZUxpc3QpIHtcbiAgICAgICAgICAgIHZhciBmLCBsaXN0ID0gW107XG4gICAgICAgICAgICBmb3IgKGYgPSAwOyBmIDwgZmVhdHVyZUxpc3QubGVuZ3RoOyBmKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgZmVhdHVyZU5vZGUgPSBnZXRGZWF0dXJlTm9kZShsaXN0LCBmZWF0dXJlTGlzdFtmXSk7XG4gICAgICAgICAgICAgICAgaWYgKCFmZWF0dXJlTm9kZSB8fCAoZmVhdHVyZUxpc3QucGFyYW1ldGVycyAmJiBmZWF0dXJlTGlzdFtmXS5wYXJhbWV0ZXJzLmxlbmd0aCAhPT0gMCkpIHtcbiAgICAgICAgICAgICAgICAgICAgZmVhdHVyZU5vZGUgPSBhZGRGZWF0dXJlTm9kZShmZWF0dXJlTGlzdFtmXSwgbGlzdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChmZWF0dXJlTGlzdFtmXS5mZWF0dXJlcyAmJiBmZWF0dXJlTGlzdFtmXS5mZWF0dXJlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGZlYXR1cmVOb2RlLmZlYXR1cmVzID0gcmVjdXJzaXZlRmluZChmZWF0dXJlTGlzdFtmXS5mZWF0dXJlcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGxpc3Q7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGksIG91dHB1dExpc3QgPSBbXTtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IE1hcHBpbmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAob3V0cHV0TGlzdFtNYXBwaW5nc1tpXS5vdXRwdXRJbmRleF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIG91dHB1dExpc3RbTWFwcGluZ3NbaV0ub3V0cHV0SW5kZXhdID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgZnJhbWVMaXN0ID0gb3V0cHV0TGlzdFtNYXBwaW5nc1tpXS5vdXRwdXRJbmRleF0uZmluZChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBlLmZyYW1lU2l6ZSA9PT0gdGhpcy5mcmFtZVNpemU7XG4gICAgICAgICAgICB9LCBNYXBwaW5nc1tpXSk7XG4gICAgICAgICAgICBpZiAoIWZyYW1lTGlzdCkge1xuICAgICAgICAgICAgICAgIGZyYW1lTGlzdCA9IHtcbiAgICAgICAgICAgICAgICAgICAgJ2ZyYW1lU2l6ZSc6IE1hcHBpbmdzW2ldLmZyYW1lU2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgJ2ZlYXR1cmVMaXN0JzogdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBvdXRwdXRMaXN0W01hcHBpbmdzW2ldLm91dHB1dEluZGV4XS5wdXNoKGZyYW1lTGlzdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmcmFtZUxpc3QuZmVhdHVyZUxpc3QgPSByZWN1cnNpdmVGaW5kKE1hcHBpbmdzW2ldLmdldEZlYXR1cmVMaXN0KCkpO1xuICAgICAgICB9XG4gICAgICAgIFNlbmRlci51cGRhdGVGZWF0dXJlcyhvdXRwdXRMaXN0KTtcbiAgICB9XG5cbiAgICB0aGlzLnJlcXVlc3RGZWF0dXJlcyA9IGZ1bmN0aW9uIChyZXF1ZXN0b3JJbnN0YW5jZSwgZmVhdHVyZU9iamVjdCkge1xuICAgICAgICB2YXIgbWFwID0gZmluZEZlYXR1cmVPYmplY3QoZmVhdHVyZU9iamVjdCk7XG4gICAgICAgIGlmICghbWFwKSB7XG4gICAgICAgICAgICBtYXAgPSB7XG4gICAgICAgICAgICAgICAgJ291dHB1dEluZGV4JzogZmVhdHVyZU9iamVjdC5vdXRwdXRJbmRleCxcbiAgICAgICAgICAgICAgICAnZnJhbWVTaXplJzogZmVhdHVyZU9iamVjdC5mcmFtZVNpemUsXG4gICAgICAgICAgICAgICAgJ3JlcXVlc3RvcnMnOiBbXSxcbiAgICAgICAgICAgICAgICAnZ2V0RmVhdHVyZUxpc3QnOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBGID0gW10sXG4gICAgICAgICAgICAgICAgICAgICAgICBpO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5yZXF1ZXN0b3JzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBGID0gRi5jb25jYXQodGhpcy5yZXF1ZXN0b3JzW2ldLmdldEZlYXR1cmVMaXN0KCkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBGO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBNYXBwaW5ncy5wdXNoKG1hcCk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHJlcXVlc3RvciA9IG1hcC5yZXF1ZXN0b3JzLmZpbmQoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHJldHVybiBlLmdldFJlcXVlc3Rvckluc3RhbmNlKCkgPT09IHRoaXM7XG4gICAgICAgIH0sIHJlcXVlc3Rvckluc3RhbmNlKTtcbiAgICAgICAgaWYgKCFyZXF1ZXN0b3IpIHtcbiAgICAgICAgICAgIHJlcXVlc3RvciA9IG5ldyBSZXF1ZXN0b3JNYXAocmVxdWVzdG9ySW5zdGFuY2UpO1xuICAgICAgICAgICAgbWFwLnJlcXVlc3RvcnMucHVzaChyZXF1ZXN0b3IpO1xuICAgICAgICB9XG4gICAgICAgIHJlcXVlc3Rvci5hZGRGZWF0dXJlcyhmZWF0dXJlT2JqZWN0KTtcbiAgICAgICAgdXBkYXRlU2VuZGVyKCk7XG4gICAgfTtcblxuICAgIHRoaXMuZmluZEZyYW1lTWFwID0gZnVuY3Rpb24gKG91dHB1dEluZGV4LCBmcmFtZVNpemUpIHtcbiAgICAgICAgcmV0dXJuIE1hcHBpbmdzLmZpbmQoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHJldHVybiAoZS5vdXRwdXRJbmRleCA9PT0gb3V0cHV0SW5kZXggJiYgZS5mcmFtZVNpemUgPT09IGZyYW1lU2l6ZSk7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICB0aGlzLmNhbmNlbEZlYXR1cmVzID0gZnVuY3Rpb24gKHJlcXVlc3Rvckluc3RhbmNlLCBmZWF0dXJlT2JqZWN0KSB7XG4gICAgICAgIGlmIChmZWF0dXJlT2JqZWN0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIE1hcHBpbmdzLmZvckVhY2goZnVuY3Rpb24gKG1hcCkge1xuICAgICAgICAgICAgICAgIHZhciByZXF1ZXN0b3JJbmRleCA9IG1hcC5yZXF1ZXN0b3JzLmZpbmRJbmRleChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZS5nZXRSZXF1ZXN0b3JJbnN0YW5jZSgpID09PSByZXF1ZXN0b3JJbnN0YW5jZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAocmVxdWVzdG9ySW5kZXggPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICBtYXAucmVxdWVzdG9ycy5zcGxpY2UocmVxdWVzdG9ySW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIG1hcCA9IGZpbmRGZWF0dXJlT2JqZWN0KGZlYXR1cmVPYmplY3QpO1xuICAgICAgICAgICAgaWYgKCFtYXApIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgcmVxdWVzdG9yID0gbWFwLnJlcXVlc3RvcnMuZmluZChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBlLmdldFJlcXVlc3Rvckluc3RhbmNlKCkgPT09IHRoaXM7XG4gICAgICAgICAgICB9LCByZXF1ZXN0b3JJbnN0YW5jZSk7XG4gICAgICAgICAgICBpZiAoIXJlcXVlc3Rvcikge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlcXVlc3Rvci5kZWxldGVGZWF0dXJlcyhmZWF0dXJlT2JqZWN0KTtcbiAgICAgICAgfVxuICAgICAgICB1cGRhdGVTZW5kZXIoKTtcbiAgICB9O1xufVxuIiwiLyoganNoaW50IGVzdmVyc2lvbjogNiAqL1xuXG5pbXBvcnQgRmVhdHVyZU5vZGUgZnJvbSBcIi4vRmVhdHVyZU5vZGVcIjtcbmltcG9ydCBTb3VyY2VNYXAgZnJvbSBcIi4vU291cmNlTWFwXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZlYXR1cmVNYXAoKSB7XG4gICAgdmFyIE1hcHBpbmdzID0gW107XG5cbiAgICBmdW5jdGlvbiBnZXRGZWF0dXJlTm9kZShsaXN0LCBjaGVjaykge1xuICAgICAgICByZXR1cm4gbGlzdC5maW5kKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICByZXR1cm4gZS5uYW1lID09PSB0aGlzLm5hbWU7XG4gICAgICAgIH0sIGNoZWNrKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGRGZWF0dXJlTm9kZShmZWF0dXJlTm9kZSwgbGlzdCkge1xuICAgICAgICB2YXIgbm9kZSA9IG5ldyBGZWF0dXJlTm9kZShmZWF0dXJlTm9kZSk7XG4gICAgICAgIGxpc3QucHVzaChub2RlKTtcbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZmluZFNvdXJjZUluZGV4KFNlbmRlcikge1xuICAgICAgICByZXR1cm4gTWFwcGluZ3MuZmluZEluZGV4KGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICByZXR1cm4gZS5nZXRTZW5kZXIoKSA9PT0gdGhpcztcbiAgICAgICAgfSwgU2VuZGVyKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBmaW5kU291cmNlTWFwKE1hcHBpbmdzLCBzb3VyY2UsIHBsdWdpblNlbmRlcikge1xuICAgICAgICB2YXIgc291cmNlTWFwID0gTWFwcGluZ3NbZmluZFNvdXJjZUluZGV4KHNvdXJjZSldO1xuICAgICAgICBpZiAoIXNvdXJjZU1hcCkge1xuICAgICAgICAgICAgc291cmNlTWFwID0gTWFwcGluZ3NbZmluZFNvdXJjZUluZGV4KHBsdWdpblNlbmRlcildO1xuICAgICAgICAgICAgaWYgKCFzb3VyY2VNYXApIHtcbiAgICAgICAgICAgICAgICB0aHJvdyAoXCJDb3VsZCBub3QgbG9jYXRlIHNvdXJjZSBtYXBcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNvdXJjZU1hcDtcbiAgICB9XG5cbiAgICAvLyBHRU5FUkFMIElOVEVSRkFDRVxuICAgIHRoaXMuY3JlYXRlU291cmNlTWFwID0gZnVuY3Rpb24gKFNlbmRlciwgcGx1Z2luSW5zdGFuY2UpIHtcbiAgICAgICAgdmFyIG5vZGUgPSBuZXcgU291cmNlTWFwKFNlbmRlciwgcGx1Z2luSW5zdGFuY2UpO1xuICAgICAgICBNYXBwaW5ncy5wdXNoKG5vZGUpO1xuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9O1xuICAgIHRoaXMuZGVsZXRlU291cmNlTWFwID0gZnVuY3Rpb24gKFNlbmRlcikge1xuICAgICAgICB2YXIgaW5kZXggPSBmaW5kU291cmNlSW5kZXgoU2VuZGVyKTtcbiAgICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgdGhyb3cgKFwiQ291bGQgbm90IGZpbmQgdGhlIHNvdXJjZSBtYXAgZm9yIHRoZSBwbHVnaW5cIik7XG4gICAgICAgIH1cbiAgICAgICAgTWFwcGluZ3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9O1xuXG4gICAgdGhpcy5nZXRQbHVnaW5TZW5kZXIgPSBmdW5jdGlvbiAocGx1Z2luKSB7XG4gICAgICAgIGlmIChwbHVnaW4uY29uc3RydWN0b3IgPT09IFBsdWdpbkluc3RhbmNlKSB7XG4gICAgICAgICAgICBwbHVnaW4gPSBwbHVnaW4ubm9kZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcGx1Z2luLmZlYXR1cmVNYXAuU2VuZGVyO1xuICAgIH07XG5cbiAgICB0aGlzLnJlcXVlc3RGZWF0dXJlcyA9IGZ1bmN0aW9uIChyZXF1ZXN0b3IsIHNvdXJjZSwgZmVhdHVyZU9iamVjdCkge1xuICAgICAgICBpZiAocmVxdWVzdG9yLmNvbnN0cnVjdG9yICE9PSBQbHVnaW5JbnN0YW5jZSkge1xuICAgICAgICAgICAgcmVxdWVzdG9yID0gcmVxdWVzdG9yLnBsdWdpbkluc3RhbmNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIEdldCB0aGUgc291cmNlIG1hcFxuICAgICAgICB2YXIgcGx1Z2luU2VuZGVyID0gdGhpcy5nZXRQbHVnaW5TZW5kZXIoc291cmNlKTtcbiAgICAgICAgdmFyIHNvdXJjZU1hcCA9IGZpbmRTb3VyY2VNYXAoTWFwcGluZ3MsIHNvdXJjZSwgcGx1Z2luU2VuZGVyKTtcbiAgICAgICAgc291cmNlTWFwLnJlcXVlc3RGZWF0dXJlcyhyZXF1ZXN0b3IsIGZlYXR1cmVPYmplY3QpO1xuICAgIH07XG4gICAgdGhpcy5kZWxldGVGZWF0dXJlcyA9IGZ1bmN0aW9uIChyZXF1ZXN0b3IsIHNvdXJjZSwgZmVhdHVyZU9iamVjdCkge1xuICAgICAgICBpZiAocmVxdWVzdG9yLmNvbnN0cnVjdG9yICE9PSBQbHVnaW5JbnN0YW5jZSkge1xuICAgICAgICAgICAgcmVxdWVzdG9yID0gcmVxdWVzdG9yLnBsdWdpbkluc3RhbmNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzb3VyY2UgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgTWFwcGluZ3MuZm9yRWFjaChmdW5jdGlvbiAoc291cmNlTWFwKSB7XG4gICAgICAgICAgICAgICAgc291cmNlTWFwLmNhbmNlbEZlYXR1cmVzKHJlcXVlc3Rvcik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIEdldCB0aGUgc291cmNlIG1hcFxuICAgICAgICAgICAgdmFyIHBsdWdpblNlbmRlciA9IHRoaXMuZ2V0UGx1Z2luU2VuZGVyKHNvdXJjZSk7XG4gICAgICAgICAgICB2YXIgc291cmNlTWFwID0gZmluZFNvdXJjZU1hcChNYXBwaW5ncywgc291cmNlLCBwbHVnaW5TZW5kZXIpO1xuICAgICAgICAgICAgc291cmNlTWFwLmNhbmNlbEZlYXR1cmVzKHJlcXVlc3RvciwgZmVhdHVyZU9iamVjdCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMuZ2V0RmVhdHVyZUxpc3QgPSBmdW5jdGlvbiAocmVxdWVzdG9yLCBzb3VyY2UpIHt9O1xuICAgIHRoaXMucG9zdEZlYXR1cmVzID0gZnVuY3Rpb24gKGZlYXR1cmVPYmplY3QpIHtcbiAgICAgICAgLy8gUmVjZWl2ZSBmcm9tIHRoZSBTZW5kZXIgb2JqZWN0c1xuICAgICAgICAvLyBUcmlnZ2VyIGRpc3RyaWJ1dGVkIHNlYXJjaCBmb3IgcmVzdWx0cyB0cmFuc21pc3Npb25cblxuICAgICAgICAvLyBGaXJzdCBnZXQgdGhlIGluc3RhbmNlIG1hcHBpbmcgZm9yIG91dHB1dC9mcmFtZVxuICAgICAgICB2YXIgc291cmNlID0gTWFwcGluZ3NbZmluZFNvdXJjZUluZGV4KGZlYXR1cmVPYmplY3QucGx1Z2luKV07XG4gICAgICAgIGlmICghc291cmNlKSB7XG4gICAgICAgICAgICBzb3VyY2UgPSBNYXBwaW5nc1tmaW5kU291cmNlSW5kZXgodGhpcy5nZXRQbHVnaW5TZW5kZXIoZmVhdHVyZU9iamVjdC5wbHVnaW4pKV07XG4gICAgICAgICAgICBpZiAoIXNvdXJjZSkge1xuICAgICAgICAgICAgICAgIHRocm93IChcIlBsdWdpbiBJbnN0YW5jZSBub3QgbG9hZGVkIVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2YXIgZnJhbWVNYXAgPSBzb3VyY2UuZmluZEZyYW1lTWFwKGZlYXR1cmVPYmplY3Qub3V0cHV0SW5kZXgsIGZlYXR1cmVPYmplY3QuZnJhbWVTaXplKTtcblxuICAgICAgICAvLyBTZW5kIHRoZSBmZWF0dXJlIG9iamVjdCB0byB0aGUgUmVxdWVzdG9yTWFwIG9iamVjdCB0byBoYW5kbGUgY29tbXNcbiAgICAgICAgZnJhbWVNYXAucmVxdWVzdG9ycy5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBlLnBvc3RGZWF0dXJlcyh0aGlzKTtcbiAgICAgICAgfSwgZmVhdHVyZU9iamVjdCk7XG5cbiAgICB9O1xufVxuIiwiLyoganNoaW50IGVzdmVyc2lvbjogNiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNaWRpU3ludGhlc2lzSW5zdGFuY2Uoc3ludGhOb2RlKSB7XG4gICAgdmFyIF9vdXQgPSBzeW50aE5vZGUuY29udGV4dC5jcmVhdGVHYWluKCk7XG4gICAgc3ludGhOb2RlLmdldE91dHB1dHMoKVswXS5jb25uZWN0KF9vdXQpO1xuXG4gICAgdGhpcy5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBzeW50aE5vZGUuZGVzdHJveSgpO1xuICAgIH07XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XG4gICAgICAgICdub2RlJzoge1xuICAgICAgICAgICAgJ3ZhbHVlJzogc3ludGhOb2RlXG4gICAgICAgIH0sXG4gICAgICAgICdvdXRwdXQnOiB7XG4gICAgICAgICAgICAnZ2V0JzogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfb3V0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgIH0pO1xufVxuIiwiLyoganNoaW50IGVzdmVyc2lvbjogNiAqL1xuXG5pbXBvcnQgTGlua2VkU3RvcmUgZnJvbSAnLi4vTGlua2VkU3RvcmUnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNaWRpU3ludGhlc2lzZXJIb3N0KGZhY3RvcnkpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgZnVuY3Rpb24gYnVpbGROZXdTeW50aGVzaXNlck9iamVjdChwcm90b3R5cGVPYmplY3QpIHtcbiAgICAgICAgaWYgKG1pZGlTeW50aFNsb3QpIHtcbiAgICAgICAgICAgIGZhY3RvcnkuZGVsZXRlUGx1Z2luKG1pZGlTeW50aFNsb3QuaWQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIGlmIChwcm90b3R5cGVPYmplY3QuaGFzTWlkaUlucHV0ID09IGZhbHNlIHx8IHByb3RvdHlwZU9iamVjdC5oYXNNaWRpT3V0cHV0ID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICByZWplY3QgKFwiUHJvdG90eXBlIGlzIG5vdCBhIE1pZGlTeW50aGVzaXMgdHlwZS4gaGFzTWlkaUlucHV0IG11c3QgYmUgdHJ1ZSBhbmQgaGFzTWlkaU91dHB1dCBtdXN0IGJlIGZhbHNlXCIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHByb3RvdHlwZU9iamVjdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvdG90eXBlT2JqZWN0LmNyZWF0ZVBsdWdpbkluc3RhbmNlKHNlbGYsIGZhbHNlKVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24obm9kZSkge1xuICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKG5vZGUsIHtcbiAgICAgICAgICAgICAgICAgICAgJ1RyYWNrRGF0YSc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBzZWxmLlRyYWNrRGF0YVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5UcmFja0RhdGEgPSBuZXcgTGlua2VkU3RvcmUoXCJUcmFja1wiKTtcblxuICAgIHZhciBtaWRpU3ludGhTbG90O1xuICAgIHZhciBjb25uZWN0aW9ucyA9IFtdO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgICAgXCJjb25uZWN0XCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24oZGVzdGluYXRpb25Ob2RlLCBvdXRwdXQsIGlucHV0KSB7XG4gICAgICAgICAgICAgICAgaWYgKGRlc3RpbmF0aW9uTm9kZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IChcIk11c3QgZGVmaW5lIGFuIEF1ZGlvTm9kZSBvYmplY3RcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBleGlzdHMgPSBjb25uZWN0aW9ucy5maW5kKGZ1bmN0aW9uKGNvbm4pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvbm4uZGVzdGluYXRpb25Ob2RlID09IGRlc3RpbmF0aW9uTm9kZSAmJiBjb25uLm91dHB1dCA9PSBvdXRwdXQgJiYgY29ubi5pbnB1dCA9PSBpbnB1dDtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAoZXhpc3RzKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25uZWN0aW9ucy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uTm9kZTpkZXN0aW5hdGlvbk5vZGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXQ6b3V0cHV0LFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChtaWRpU3ludGhTbG90ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwiTUlESSBTeW50aGVzaXNlciBpcyBub3QgbG9hZGVkLCBjb25uZWN0aW9ucyB3aWxsIGJlIHZhbGlkYXRlZCBvbiBsb2FkXCIpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG1pZGlTeW50aFNsb3Qubm9kZS5jb25uZWN0KGRlc3RpbmF0aW9uTm9kZSwgb3V0cHV0LCBpbnB1dCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImRpc2Nvbm5lY3RcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbihkZXN0aW5hdGlvbk5vZGUsIG91dHB1dCwgaW5wdXQpIHtcbiAgICAgICAgICAgICAgICBpZiAoZGVzdGluYXRpb25Ob2RlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1pZGlTeW50aFNsb3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pZGlTeW50aFNsb3QuZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbm5lY3Rpb25zID0gW107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiBkZXN0aW5hdGlvbk5vZGUgPT0gXCJudW1iZXJcIiAmJiB0eXBlb2Ygb3V0cHV0ID09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgb3V0cHV0ID0gZGVzdGluYXRpb25Ob2RlO1xuICAgICAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbk5vZGUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgICAgIGNvbm5lY3Rpb25zID0gY29ubmVjdGlvbnMuZmlsdGVyKGZ1bmN0aW9uKGNvbm4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb25uLm91dHB1dCA9PSBvdXRwdXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobWlkaVN5bnRoU2xvdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaWRpU3ludGhTbG90Lm5vZGUuZGlzY29ubmVjdChjb25uLmRlc3RpbmF0aW9uTm9kZSwgY29ubi5vdXRwdXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBkZXN0aW5hdGlvbk5vZGUgPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb3V0cHV0ID09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29ubmVjdGlvbnMgPSBjb25uZWN0aW9ucy5maWx0ZXIoZnVuY3Rpb24oY29ubikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbm4uZGVzdGluYXRpb25Ob2RlID09IGRlc3RpbmF0aW9uTm9kZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtaWRpU3ludGhTbG90KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pZGlTeW50aFNsb3Qubm9kZS5kaXNjb25uZWN0KGNvbm4uZGVzdGluYXRpb25Ob2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgZGVzdGluYXRpb25Ob2RlID09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG91dHB1dCA9PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbm5lY3Rpb25zID0gY29ubmVjdGlvbnMuZmlsdGVyKGZ1bmN0aW9uKGNvbm4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb25uLmRlc3RpbmF0aW9uTm9kZSA9PSBkZXN0aW5hdGlvbk5vZGUgJiYgY29ubi5vdXRwdXQgPT0gb3V0cHV0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1pZGlTeW50aFNsb3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWlkaVN5bnRoU2xvdC5ub2RlLmRpc2Nvbm5lY3QoY29ubi5kZXN0aW5hdGlvbk5vZGUsIGNvbm4ub3V0cHV0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgZGVzdGluYXRpb25Ob2RlID09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG91dHB1dCA9PSBcIm51bWJlclwiICYmIHR5cGVvZiBpbnB1dCA9PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbm5lY3Rpb25zID0gY29ubmVjdGlvbnMuZmlsdGVyKGZ1bmN0aW9uKGNvbm4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb25uLmRlc3RpbmF0aW9uTm9kZSA9PSBkZXN0aW5hdGlvbk5vZGUgJiYgY29ubi5vdXRwdXQgPT0gb3V0cHV0ICYmIGNvbm4uaW5wdXQgPT0gaW5wdXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobWlkaVN5bnRoU2xvdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaWRpU3ludGhTbG90Lm5vZGUuZGlzY29ubmVjdChjb25uLmRlc3RpbmF0aW9uTm9kZSwgY29ubi5vdXRwdXQsIGNvbm4uaW5wdXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwic2NoZWR1bGVFdmVudFwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKG1zZywgdCkge1xuICAgICAgICAgICAgICAgIGlmIChtaWRpU3ludGhTbG90KSB7XG4gICAgICAgICAgICAgICAgICAgIG1pZGlTeW50aFNsb3Qubm9kZS5zY2hlZHVsZUV2ZW50KG1zZywgdCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3coXCJNSURJIFN5bnRoZXNpc2VyIG5vdCBsb2FkZWRcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImNhbmNlbEFsbEV2ZW50c1wiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICAgICAgICBpZiAobWlkaVN5bnRoU2xvdCkge1xuICAgICAgICAgICAgICAgICAgICBtaWRpU3ludGhTbG90Lm5vZGUuY2FuY2VsQWxsRXZlbnRzKHQpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93KFwiTUlESSBTeW50aGVzaXNlciBub3QgbG9hZGVkXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJtaWRpU3ludGhlc2lzZXJcIjoge1xuICAgICAgICAgICAgXCJnZXRcIjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBtaWRpU3ludGhTbG90O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwic2V0XCI6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHRocm93KFwiQ2Fubm90IHNldCByZWFkLW9ubHkgYXR0cmlidXRlLlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJsb2FkTWlkaVN5bnRoZXNpc2VyTW9kdWxlXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24ocHJvdG90eXBlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb3RvdHlwZS5oYXNNaWRpSW5wdXQgPT0gZmFsc2UgfHwgcHJvdG90eXBlLmhhc01pZGlPdXRwdXQgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0IChcIlByb3RvdHlwZSBpcyBub3QgYSBNaWRpU3ludGhlc2lzIHR5cGUuIGhhc01pZGlJbnB1dCBtdXN0IGJlIHRydWUgYW5kIGhhc01pZGlPdXRwdXQgbXVzdCBiZSBmYWxzZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocHJvdG90eXBlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24ocHJvdG90eXBlT2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBidWlsZE5ld1N5bnRoZXNpc2VyT2JqZWN0LmNhbGwoc2VsZiwgcHJvdG90eXBlT2JqZWN0KS5jYXRjaChmdW5jdGlvbihlKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3coXCJQbHVnaW4gZGlkIG5vdCBnZXQgY3JlYXRlZCEgQWJvcnRpbmdcIik7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24obm9kZSkge1xuICAgICAgICAgICAgICAgICAgICBub2RlLm5vZGUub25sb2FkZWQuY2FsbChub2RlLm5vZGUpO1xuICAgICAgICAgICAgICAgICAgICBtaWRpU3ludGhTbG90ID0gbm9kZTtcbiAgICAgICAgICAgICAgICAgICAgY29ubmVjdGlvbnMuZm9yRWFjaChmdW5jdGlvbihjb25uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtaWRpU3ludGhTbG90Lm5vZGUuY29ubmVjdChjb25uLmRlc3RpbmF0aW9uTm9kZSwgY29ubi5vdXRwdXQsIGNvbm4uaW5wdXQpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1pZGlTeW50aFNsb3Q7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgfSk7XG59XG4iLCIvKiBqc2hpbnQgZXN2ZXJzaW9uOiA2ICovXG5cbmZ1bmN0aW9uIEFzc2V0UGFja1NlbGVjdG9yKHBsdWdpbiwgYXNzZXRQYWNrTWFuYWdlciwgcGFjaykge1xuXG4gICAgZnVuY3Rpb24gZmV0Y2hBc3NldHMoc2VsZiwgYXNzZXRzTGlzdCkge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoYXNzZXRzTGlzdC5tYXAoYXNzZXQgPT4gYXNzZXQuZmV0Y2goKSkpXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBvbmxvYWQgPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgb25sb2FkLmNhbGwoc2VsZiwgYXNzZXRzTGlzdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBvbmVycm9yID09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgIG9uZXJyb3IuY2FsbChzZWxmKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZmV0Y2hBbGxBc3NldHMoc2VsZikge1xuICAgICAgICByZXR1cm4gZmV0Y2hBc3NldHMoc2VsZiwgcGFjay5hc3NldE9iamVjdHMpO1xuICAgIH1cblxuICAgIHRoaXMuc2VsZWN0UGFjayA9IGZ1bmN0aW9uKF9wYWNrKSB7XG4gICAgICAgIGlmIChhc3NldFBhY2tNYW5hZ2VyLmFzc2V0UGFja3MuaW5jbHVkZXMoX3BhY2spKSB7XG4gICAgICAgICAgICBwYWNrID0gX3BhY2s7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyhcIlBhY2sgbm90IGluIGZhY3RvcnkgYXNzZXQgcGFja3NcIik7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgdGhpcy5hbGxBc3NldHNMb2FkZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBwYWNrLmFzc2V0T2JqZWN0cy5ldmVyeShhc3NldCA9PiBhc3NldC5hc3NldE9iamVjdCAhPT0gdW5kZWZpbmVkKTtcbiAgICB9O1xuXG4gICAgdGhpcy5mZXRjaEFzc2V0QnlOYW1lID0gZnVuY3Rpb24obmFtZSkge1xuICAgICAgICBpZiAocGFjayA9PT0gdW5kZWZpbmVkIHx8IHBhY2suYXNzZXRPYmplY3RzID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhyb3coXCJQYWNrIG5vdCBkZWZpbmVkXCIpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBhc3NldCA9IHBhY2suYXNzZXRPYmplY3RzLmZpbmQoYXNzZXQgPT4gbmFtZSA9PSBhc3NldC5uYW1lKTtcbiAgICAgICAgaWYgKGFzc2V0KSB7XG4gICAgICAgICAgICByZXR1cm4gYXNzZXQuZmV0Y2goKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IChcIkFzc2V0IHdpdGggbmFtZSBcIitTdHJpbmcobmFtZSkrXCIgZG9lcyBub3QgZXhpc3QgaW4gdGhpcyBwYWNrXCIpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgICAgXCJwYWNrXCI6IHtcbiAgICAgICAgICAgIFwiZ2V0XCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gcGFjazt9XG4gICAgICAgIH0sXG4gICAgICAgIFwibG9hZEFzc2V0c1wiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uIChhc3NldHNMaXN0KSB7XG4gICAgICAgICAgICAgICAgaWYgKHBhY2sgPT09IHVuZGVmaW5lZCB8fCBwYWNrLmFzc2V0T2JqZWN0cyA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3coXCJQYWNrIG5vdCBkZWZpbmVkXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoYXNzZXRzTGlzdCA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgYXNzZXRzTGlzdCA9IHBhY2suYXNzZXRPYmplY3RzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXNzZXRzTGlzdCkgfHwgYXNzZXRzTGlzdC5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBcIk11c3QgcGFzcyBhbiBhcnJheSBvZiBhc3NldHNcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIGFsbEluUGFjayA9IGFzc2V0c0xpc3QuZXZlcnkoZnVuY3Rpb24oYXNzZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBhY2suYXNzZXRPYmplY3RzLnNvbWUoYW8gPT4gYW8ubmFtZSA9PSBhc3NldC5uYW1lKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAoIWFsbEluUGFjaykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoXCJOb3QgYWxsIGdpdmVuIGFzc2V0cyBhcmUgaW4gdGhpcyBwYWNrXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gZmV0Y2hBc3NldHModGhpcywgYXNzZXRzTGlzdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwib25sb2FkXCI6IHtcbiAgICAgICAgICAgIFwiZ2V0XCI6IGZ1bmN0aW9uKCkgeyByZXR1cm4gb25sb2FkOyB9LFxuICAgICAgICAgICAgXCJzZXRcIjogZnVuY3Rpb24oZikge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZiA9PSBcImZ1bmN0aW9uXCIgfHwgZiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIG9ubG9hZCA9IGY7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgXCJNdXN0IGJlIGEgZnVuY3Rpb24gb3IgdW5kZWZpbmVkXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcIm9uZXJyb3JcIjoge1xuICAgICAgICAgICAgXCJnZXRcIjogZnVuY3Rpb24oKSB7IHJldHVybiBvbmxvYWQ7IH0sXG4gICAgICAgICAgICBcInNldFwiOiBmdW5jdGlvbihmKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBmID09IFwiZnVuY3Rpb25cIiB8fCBmID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgb25lcnJvciA9IGY7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgXCJNdXN0IGJlIGEgZnVuY3Rpb24gb3IgdW5kZWZpbmVkXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFzc2V0UGFja1NlbGVjdG9yO1xuIiwiLyplc2xpbnQtZW52IGJyb3dzZXIgKi9cbi8qIGpzaGludCBlc3ZlcnNpb246NiAqL1xuXG5mdW5jdGlvbiBQbHVnaW5Bc3NldChmYWN0b3J5Q29udGV4dCwgbmFtZSwgdXJsLCBhc3NldE9iamVjdCkge1xuXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIGZ1bmN0aW9uIGZldGNoQXNzZXQoKSB7XG4gICAgICAgIHAgPSBmZXRjaCh1cmwpLnRoZW4oZnVuY3Rpb24ocikge1xuICAgICAgICAgICAgcmV0dXJuIHIuYXJyYXlCdWZmZXIoKTtcbiAgICAgICAgfSkudGhlbihmdW5jdGlvbihhYikge1xuICAgICAgICAgICAgcmV0dXJuIGZhY3RvcnlDb250ZXh0LmNvbnRleHQuZGVjb2RlQXVkaW9EYXRhKGFiKTtcbiAgICAgICAgfSkudGhlbihmdW5jdGlvbihhYikge1xuICAgICAgICAgICAgYXNzZXRPYmplY3QgPSBhYjtcbiAgICAgICAgICAgIHAgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICByZXR1cm4gc2VsZjtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdmFyIHA7XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XG4gICAgICAgIFwibmFtZVwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IG5hbWVcbiAgICAgICAgfSxcbiAgICAgICAgXCJ1cmxcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiB1cmxcbiAgICAgICAgfSxcbiAgICAgICAgXCJhc3NldE9iamVjdFwiOiB7XG4gICAgICAgICAgICBcImdldFwiOiBmdW5jdGlvbigpIHtyZXR1cm4gYXNzZXRPYmplY3Q7fVxuICAgICAgICB9LFxuICAgICAgICBcImZldGNoXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgaWYgKGFzc2V0T2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoYXNzZXRPYmplY3QpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGZldGNoQXNzZXQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwidG9KU09OXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtuYW1lOiBuYW1lLCB1cmw6IHVybH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwidG9TdHJpbmdcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodGhpcy50b0pTT04oKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuZXhwb3J0IHtQbHVnaW5Bc3NldH07XG4iLCIvKmVzbGludC1lbnYgYnJvd3NlciAqL1xuLyoganNoaW50IGVzdmVyc2lvbjo2ICovXG5cbmltcG9ydCB7UGx1Z2luQXNzZXRzTGlzdH0gZnJvbSBcIi4vUGx1Z2luQXNzZXRzTGlzdFwiO1xuaW1wb3J0IEFzc2V0UGFja1NlbGVjdG9yIGZyb20gXCIuL0Fzc2V0UGFja1NlbGVjdG9yXCI7XG5cbmZ1bmN0aW9uIGZpbmRQYWNrQnlOYW1lKGFzc2V0UGFja0xpc3QsIG5hbWUpIHtcbiAgICByZXR1cm4gYXNzZXRQYWNrTGlzdC5maW5kKGZ1bmN0aW9uKGwpIHtcbiAgICAgICAgcmV0dXJuIGwubmFtZSA9PSBuYW1lO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBQbHVnaW5Bc3NldE1hbmFnZXIoZmFjdG9yeUNvbnRleHQpIHtcbiAgICB2YXIgYXNzZXRQYWNrTGlzdCA9IFtdO1xuICAgIHRoaXMuYWRkUGFja1RvTGlzdCA9IGZ1bmN0aW9uKG5hbWUsIHJlc291cmNlVHlwZSkge1xuICAgICAgICBpZiAodHlwZW9mIG5hbWUgIT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgdGhyb3cgXCJhZGRBc3NldFVybFRvTGlzdCBBcmd1bWVudC0xIG11c3QgYmUgYSB0eXBlIG9mIHN0cmluZ1wiO1xuICAgICAgICB9XG4gICAgICAgIGlmIChmaW5kUGFja0J5TmFtZShhc3NldFBhY2tMaXN0LCBuYW1lKSkge1xuICAgICAgICAgICAgdGhyb3cgXCJQYWNrIHdpdGggbmFtZSBcXFwiXCIrbmFtZStcIlxcXCIgYWxyZWFkeSBpbiB0aGlzIGxpc3RcIjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgYXNzZXRQYWNrID0gbmV3IFBsdWdpbkFzc2V0c0xpc3QoZmFjdG9yeUNvbnRleHQsIG5hbWUsIHJlc291cmNlVHlwZSk7XG4gICAgICAgIGFzc2V0UGFja0xpc3QucHVzaChhc3NldFBhY2spO1xuICAgICAgICByZXR1cm4gYXNzZXRQYWNrO1xuICAgIH07XG4gICAgdGhpcy5yZW1vdmVBc3NldFBhY2tGcm9tTGlzdCA9IGZ1bmN0aW9uKGFzc2V0UGFjaykge1xuICAgICAgICB2YXIgaW5kZXggPSBhc3NldFBhY2tMaXN0LmluZGV4T2YoYXNzZXRQYWNrKTtcbiAgICAgICAgaWYgKGluZGV4ID09IC0xKSB7XG4gICAgICAgICAgICB0aHJvdyBcIkFzc2V0IHBhY2sgbm90IGluIHRoaXMgbGlzdFwiO1xuICAgICAgICB9XG4gICAgICAgIGFzc2V0UGFja0xpc3Quc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgcmV0dXJuIGFzc2V0UGFja0xpc3Q7XG4gICAgfTtcbiAgICB0aGlzLnJlbW92ZUFzc2V0UGFja0Zyb21MaXN0QnlOYW1lID0gZnVuY3Rpb24obmFtZSkge1xuICAgICAgICBpZiAodHlwZW9mIG5hbWUgIT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgdGhyb3cgXCJyZW1vdmVBc3NldFVybEZyb21MaXN0IEFyZ3VtZW50LTEgbXVzdCBiZSBhIHR5cGUgb2Ygc3RyaW5nXCI7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGFzc2V0ID0gZmluZFBhY2tCeU5hbWUoYXNzZXRQYWNrTGlzdCwgbmFtZSk7XG4gICAgICAgIHJldHVybiB0aGlzLnJlbW92ZUFzc2V0RnJvbUxpc3QoYXNzZXQpO1xuICAgIH07XG4gICAgdGhpcy5hc3NldFBhY2tzID0gYXNzZXRQYWNrTGlzdDtcbiAgICB0aGlzLmNyZWF0ZUFzc2V0UGFja1NlbGVjdG9yID0gZnVuY3Rpb24ocGx1Z2luLCBwYWNrKSB7XG4gICAgICAgIHJldHVybiBuZXcgQXNzZXRQYWNrU2VsZWN0b3IocGx1Z2luLCB0aGlzLCBwYWNrKTtcbiAgICB9O1xuICAgIHRoaXMuaW1wb3J0RnJvbUFzc2V0TGlzdHMgPSBmdW5jdGlvbihvbGRDb250ZXh0KSB7XG4gICAgICAgIG9sZENvbnRleHQuYXNzZXRQYWNrcy5mb3JFYWNoKGZ1bmN0aW9uKG9yaWdpbmFsQXNzZXRQYWNrKSB7XG4gICAgICAgICAgICB2YXIgbmV3Q29udGV4dFBhY2sgPSB0aGlzLmFkZFBhY2tUb0xpc3Qob3JpZ2luYWxBc3NldFBhY2submFtZSwgb3JpZ2luYWxBc3NldFBhY2sucmVzb3VyY2VUeXBlKTtcbiAgICAgICAgICAgIG9yaWdpbmFsQXNzZXRQYWNrLmFzc2V0T2JqZWN0cy5mb3JFYWNoKGZ1bmN0aW9uKG9yaWdpbmFsQXNzZXQpIHtcbiAgICAgICAgICAgICAgICB2YXIgYXNzZXRPYmplY3Q7XG4gICAgICAgICAgICAgICAgaWYgKG9yaWdpbmFsQXNzZXQuYXNzZXRPYmplY3QgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBhc3NldE9iamVjdCA9IGZhY3RvcnlDb250ZXh0LmNvbnRleHQuY3JlYXRlQnVmZmVyKG9yaWdpbmFsQXNzZXQuYXNzZXRPYmplY3QubnVtYmVyT2ZDaGFubmVscywgb3JpZ2luYWxBc3NldC5hc3NldE9iamVjdC5sZW5ndGgsIG9yaWdpbmFsQXNzZXQuYXNzZXRPYmplY3Quc2FtcGxlUmF0ZSk7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXNzZXRPYmplY3QubnVtYmVyT2ZDaGFubmVsczsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhc3NldE9iamVjdC5jb3B5VG9DaGFubmVsKG9yaWdpbmFsQXNzZXQuYXNzZXRPYmplY3QuZ2V0Q2hhbm5lbERhdGEoaSksIGksIDApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuYWRkQXNzZXRVcmxUb0xpc3Qob3JpZ2luYWxBc3NldC5uYW1lLCBvcmlnaW5hbEFzc2V0LnVybCwgYXNzZXRPYmplY3QpO1xuICAgICAgICAgICAgfSwgbmV3Q29udGV4dFBhY2spO1xuICAgICAgICB9LCB0aGlzKTtcbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBQbHVnaW5Bc3NldE1hbmFnZXI7XG4iLCIvKmVzbGludC1lbnYgYnJvd3NlciAqL1xuLyoganNoaW50IGVzdmVyc2lvbjo2ICovXG5cbmltcG9ydCB7UGx1Z2luQXNzZXR9IGZyb20gXCIuL1BsdWdpbkFzc2V0LmpzXCI7XG5cbmZ1bmN0aW9uIFBsdWdpbkFzc2V0c0xpc3QoZmFjdG9yeUNvbnRleHQsIG5hbWUsIHJlc291cmNlVHlwZSkge1xuICAgIHZhciBhc3NldE9iamVjdHMgPSBbXTtcbiAgICBmdW5jdGlvbiBmaW5kQXNzZXRCeVVybCh1cmwpIHtcbiAgICAgICAgcmV0dXJuIGFzc2V0T2JqZWN0cy5maW5kKGZ1bmN0aW9uKGFzc2V0KSB7XG4gICAgICAgICAgICByZXR1cm4gYXNzZXQudXJsID09IHVybDtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMuYWRkQXNzZXRVcmxUb0xpc3QgPSBmdW5jdGlvbihuYW1lLCB1cmwsIGFzc2V0T2JqZWN0KSB7XG4gICAgICAgIGlmICh0eXBlb2YgdXJsICE9IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIHRocm93IFwiYWRkQXNzZXRVcmxUb0xpc3QgQXJndW1lbnQtMSBtdXN0IGJlIGEgdHlwZSBvZiBzdHJpbmdcIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZmluZEFzc2V0QnlVcmwodXJsKSkge1xuICAgICAgICAgICAgdGhyb3cgXCJVUkwgXFxcIlwiK3VybCtcIlxcXCIgYWxyZWFkeSBpbiB0aGlzIGxpc3RcIjtcbiAgICAgICAgfVxuICAgICAgICBhc3NldE9iamVjdHMucHVzaChuZXcgUGx1Z2luQXNzZXQoZmFjdG9yeUNvbnRleHQsIG5hbWUsIHVybCwgYXNzZXRPYmplY3QpKTtcbiAgICAgICAgcmV0dXJuIGFzc2V0T2JqZWN0cztcbiAgICB9O1xuICAgIHRoaXMucmVtb3ZlQXNzZXRGcm9tTGlzdCA9IGZ1bmN0aW9uKGFzc2V0KSB7XG4gICAgICAgIHZhciBpbmRleCA9IGFzc2V0T2JqZWN0cy5maW5kSW5kZXgoZnVuY3Rpb24oYXNzZXQpIHtcbiAgICAgICAgICAgIHJldHVybiBhc3NldC51cmwgPT0gdXJsO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGluZGV4ID09IC0xKSB7XG4gICAgICAgICAgICB0aHJvdyBcIkFzc2V0IG5vdCBpbiB0aGlzIGxpc3RcIjtcbiAgICAgICAgfVxuICAgICAgICBhc3NldE9iamVjdHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgcmV0dXJuIGFzc2V0T2JqZWN0cztcbiAgICB9O1xuICAgIHRoaXMucmVtb3ZlQXNzZXRVcmxGcm9tTGlzdCA9IGZ1bmN0aW9uKHVybCkge1xuICAgICAgICBpZiAodHlwZW9mIHVybCAhPSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICB0aHJvdyBcInJlbW92ZUFzc2V0VXJsRnJvbUxpc3QgQXJndW1lbnQtMSBtdXN0IGJlIGEgdHlwZSBvZiBzdHJpbmdcIjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgYXNzZXQgPSBmaW5kQXNzZXRCeVVybCh1cmwpO1xuICAgICAgICByZXR1cm4gdGhpcy5yZW1vdmVBc3NldEZyb21MaXN0KGFzc2V0KTtcbiAgICB9O1xuICAgIHRoaXMuYXNzZXRPYmplY3RzID0gYXNzZXRPYmplY3RzO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5yZXNvdXJjZVR5cGUgPSByZXNvdXJjZVR5cGU7XG59XG5cbmV4cG9ydCB7UGx1Z2luQXNzZXRzTGlzdH07XG4iLCIvLyBUaGlzIGRlZmluZXMgYSBtYXN0ZXIgb2JqZWN0IGZvciBob2xkaW5nIGFsbCB0aGUgcGx1Z2lucyBhbmQgY29tbXVuaWNhdGluZ1xuLy8gVGhpcyBvYmplY3Qgd2lsbCBhbHNvIGhhbmRsZSBjcmVhdGlvbiBhbmQgZGVzdHJ1Y3Rpb24gb2YgcGx1Z2luc1xuLypnbG9iYWxzIFByb21pc2UsIGRvY3VtZW50LCBjb25zb2xlLCBMaW5rZWRTdG9yZSwgV29ya2VyLCB3aW5kb3csIFhNTEh0dHBSZXF1ZXN0ICovXG4vKmVzbGludC1lbnYgYnJvd3NlciAqL1xuLyoganNoaW50IGVzdmVyc2lvbjo2ICovXG5cbmltcG9ydCBMaW5rZWRTdG9yZSBmcm9tICcuLi9MaW5rZWRTdG9yZSc7XG5pbXBvcnQgUGx1Z2luQXNzZXRNYW5hZ2VyIGZyb20gJy4vUGx1Z2luQXNzZXRzL1BsdWdpbkFzc2V0TWFuYWdlcic7XG5pbXBvcnQgUGx1Z2luUHJvdG90eXBlIGZyb20gXCIuL1BsdWdpblByb3RvdHlwZVwiO1xuaW1wb3J0IEZlYXR1cmVNYXAgZnJvbSBcIi4vRmVhdHVyZU1hcC9pbmRleFwiO1xuaW1wb3J0IEF1ZGlvUGx1Z2luQ2hhaW5NYW5hZ2VyIGZyb20gXCIuL0F1ZGlvUGx1Z2luQ2hhaW5NYW5hZ2VyL1wiO1xuaW1wb3J0IE1pZGlTeW50aGVzaXNlckhvc3QgZnJvbSBcIi4vTWlkaVN5bnRoZXNpc2VySG9zdFwiO1xuaW1wb3J0IFBsdWdpblVzZXJJbnRlcmZhY2VNZXNzYWdlSHViIGZyb20gXCIuL1BsdWdpblVzZXJJbnRlcmZhY2VNZXNzYWdlSHViXCI7XG5cbmZ1bmN0aW9uIFBsdWdpbkZhY3RvcnkoYXVkaW9fY29udGV4dCwgcm9vdFVSTCkge1xuXG4gICAgZnVuY3Rpb24gbG9hZFJlc291cmNlKHJlc291cmNlT2JqZWN0KSB7XG4gICAgICAgIGlmIChyZXNvdXJjZU9iamVjdC51cmwuc3RhcnRzV2l0aChcImh0dHBcIikgPT09IGZhbHNlICYmIHJvb3RVUkwgIT09IHVuZGVmaW5lZCAmJiByb290VVJMLnN0YXJ0c1dpdGgoXCJodHRwXCIpKSB7XG4gICAgICAgICAgICByZXNvdXJjZU9iamVjdC51cmwgPSByb290VVJMICsgcmVzb3VyY2VPYmplY3QudXJsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgICAgICB4aHIub3BlbihcIkdFVFwiLCByZXNvdXJjZU9iamVjdC51cmwpO1xuICAgICAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT0gNCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcbiAgICAgICAgICAgICAgICAgICAgc2NyaXB0LnRleHRDb250ZW50ID0geGhyLnJlc3BvbnNlVGV4dDtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzb3VyY2VPYmplY3QpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHhoci5zZW5kKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNvcHlGYWN0b3J5KGZhY3RvcnksIG5ld2NvbnRleHQpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgaWYgKG5ld2NvbnRleHQuc2FtcGxlUmF0ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgLy9NYXliZSBub3QgYSByZWFsIEF1ZGlvQ29udGV4dFxuICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoXCJJbnZhbGlkIGF1ZGlvIGNvbnRleHQgcHJvdmlkZWRcIikpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKG5ld2NvbnRleHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uKG5ld2NvbnRleHQpIHtcbiAgICAgICAgICAgIHZhciBCRmFjdG9yeSA9IG5ldyBQbHVnaW5GYWN0b3J5KG5ld2NvbnRleHQpO1xuICAgICAgICAgICAgdmFyIHByb21pc2VzID0gW107XG4gICAgICAgICAgICBwbHVnaW5fcHJvdG90eXBlcy5mb3JFYWNoKGZ1bmN0aW9uIChwcm90bykge1xuICAgICAgICAgICAgICAgIHByb21pc2VzLnB1c2goQkZhY3RvcnkuYWRkUHJvdG90eXBlKHByb3RvLnByb3RvKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gQkZhY3Rvcnk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSkudGhlbihmdW5jdGlvbihuZXdGYWN0b3J5KSB7XG4gICAgICAgICAgICBuZXdGYWN0b3J5LnBsdWdpbkFzc2V0cy5pbXBvcnRGcm9tQXNzZXRMaXN0cyhmYWN0b3J5LnBsdWdpbkFzc2V0cyk7XG4gICAgICAgICAgICByZXR1cm4gbmV3RmFjdG9yeTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGx1Z2luQXVkaW9TdGFydChub2RlLCBwcm9ncmFtX3RpbWUsIGNvbnRleHRfdGltZSkge1xuICAgICAgICBub2RlLnN0YXJ0LmNhbGwobm9kZSwgcHJvZ3JhbV90aW1lLCBjb250ZXh0X3RpbWUpO1xuICAgICAgICBub2RlLnBhcmFtZXRlcnMuZ2V0UGFyYW1ldGVyTmFtZXMoKS5mb3JFYWNoKGZ1bmN0aW9uKG4pIHtcbiAgICAgICAgICAgIHZhciBwID0gbm9kZS5wYXJhbWV0ZXJzLmdldFBhcmFtZXRlckJ5TmFtZShuKTtcbiAgICAgICAgICAgIGlmIChwLmVuYWJsZWQpIHtcbiAgICAgICAgICAgICAgICBwLnN0YXJ0KHByb2dyYW1fdGltZSwgY29udGV4dF90aW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGx1Z2luQXVkaW9TdG9wKG5vZGUpIHtcbiAgICAgICAgdmFyIGN0ID0gYXVkaW9fY29udGV4dC5jdXJyZW50VGltZTtcbiAgICAgICAgbm9kZS5zdG9wLmNhbGwobm9kZSwgY3QpO1xuICAgICAgICBub2RlLnBhcmFtZXRlcnMuZ2V0UGFyYW1ldGVyTmFtZXMoKS5mb3JFYWNoKGZ1bmN0aW9uKG4pIHtcbiAgICAgICAgICAgIHZhciBwID0gbm9kZS5wYXJhbWV0ZXJzLmdldFBhcmFtZXRlckJ5TmFtZShuKTtcbiAgICAgICAgICAgIGlmIChwLmVuYWJsZWQpIHtcbiAgICAgICAgICAgICAgICBwLnN0b3AoY3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0cmlnZ2VyQXVkaW9TdGFydChwcm9ncmFtX3RpbWUsIGNvbnRleHRfdGltZSkge1xuICAgICAgICBwbHVnaW5zTGlzdC5mb3JFYWNoKGZ1bmN0aW9uIChuKSB7XG4gICAgICAgICAgICBwbHVnaW5BdWRpb1N0YXJ0KG4ubm9kZSwgcHJvZ3JhbV90aW1lLCBjb250ZXh0X3RpbWUpO1xuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRyaWdnZXJBdWRpb1N0b3AoKSB7XG4gICAgICAgIHBsdWdpbnNMaXN0LmZvckVhY2goZnVuY3Rpb24gKG4pIHtcbiAgICAgICAgICAgIHBsdWdpbkF1ZGlvU3RvcChuLm5vZGUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB2YXIgc3ViRmFjdG9yaWVzID0gW10sXG4gICAgc3ludGhlc2lzZXJIb3N0cyA9IFtdLFxuICAgIHBsdWdpbl9wcm90b3R5cGVzID0gW10sXG4gICAgcGx1Z2luc0xpc3QgPSBbXSxcbiAgICBhdWRpb1N0YXJ0UHJvZ3JhbVRpbWUsXG4gICAgYXVkaW9TdGFydENvbnRleHRUaW1lLFxuICAgIGF1ZGlvU3RhcnRlZCA9IGZhbHNlLFxuICAgIHBsdWdpblVzZXJJbnRlcmZhY2VNZXNzYWdlSHViSW50YW5jZSA9IG5ldyBQbHVnaW5Vc2VySW50ZXJmYWNlTWVzc2FnZUh1Yih0aGlzKSxcbiAgICBzdG9yZXMgPSBbXTtcblxuICAgIHRoaXMucGx1Z2luQXNzZXRzID0gbmV3IFBsdWdpbkFzc2V0TWFuYWdlcih0aGlzKTtcblxuICAgIC8qXG4gICAgICAgIHRoaXMubG9hZFJlc291cmNlLiBMb2FkIGEgcmVzb3VyY2UgaW50byB0aGUgZ2xvYmFsIG5hbWVzcGFjZVxuXG4gICAgICAgIEBwYXJhbSByZXNvdXJjZU9iamVjdDogYSBKUyBvYmplY3QgaG9sZGluZyB0aGUgZm9sbG93aW5nIHBhcmFtZXRlcnM6XG4gICAgICAgICAgICAudXJsOiBVUkwgb2YgdGhlIHJlc291cmNlXG4gICAgICAgICAgICAudGVzdDogZnVuY3Rpb24gdG8gY2FsbCwgcmV0dXJucyB0cnVlIGlmIHJlc291cmNlIGFscmVhZHkgbG9hZGVkLCBmYWxzZSBpZiBub3RcbiAgICAqL1xuICAgIHRoaXMubG9hZFByb3RvdHlwZU1vZHVsZSA9IGZ1bmN0aW9uKHJlc291cmNlT2JqZWN0LCBtdXN0TW9kdWxlKSB7XG4gICAgICAgIHZhciBmYWN0b3J5ID0gdGhpcztcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBnbG9iYWwuZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZ2xvYmFsLmRlZmluZS5hbWQpIHtcbiAgICAgICAgICAgICAgICBnbG9iYWwucmVxdWlyZShbcmVzb3VyY2VPYmplY3QudXJsXSwgZnVuY3Rpb24oZikge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGYpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgZ2xvYmFsLm1vZHVsZSA9PSBcIm9iamVjdFwiICYmIGdsb2JhbC5tb2R1bGUuZXhwb3J0cykge1xuICAgICAgICAgICAgICAgIHJlc29sdmUoZ2xvYmFsLnJlcXVpcmUocmVzb3VyY2VPYmplY3QudXJsKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlamVjdChcIkNhbm5vdCBsb2FkIHVzaW5nIG1vZHVsYXIgc3lzdGVtc1wiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkudGhlbihmdW5jdGlvbihleGVjdXRhYmxlKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGV4ZWN1dGFibGUgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWN0b3J5LmFkZFByb3RvdHlwZShleGVjdXRhYmxlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KFwiSXMgbm90IGEgbW9kdWxlIHBsdWdpblwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAobXVzdE1vZHVsZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHJlamVjdChcIkNhbm5vdCBsb2FkIHVzaW5nIG1vZHVsYXIgc3lzdGVtc1wiKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwiQ291bGQgbm90IGxvYWQgdXNpbmcgbW9kdWxhciBzeXN0ZW1zXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWN0b3J5LmxvYWRQbHVnaW5TY3JpcHQocmVzb3VyY2VPYmplY3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHRoaXMubG9hZFJlc291cmNlID0gZnVuY3Rpb24gKHJlc291cmNlT2JqZWN0KSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcmVzb3VyY2VPYmplY3QgIT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgICAgICByZWplY3QoXCJFcnJvclwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiByZXNvdXJjZU9iamVjdC51cmwgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICByZWplY3QoXCJyZXNvdXJjZU9iamVjdC51cmwgbXVzdCBiZSBhIHN0cmluZ1wiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiByZXNvdXJjZU9iamVjdC50ZXN0ICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICByZWplY3QoXCJyZXNvdXJjZU9iamVjdC50ZXN0IG11c3QgYmUgYSBmdW5jdGlvblwiKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShyZXNvdXJjZU9iamVjdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24ocmVzb3VyY2VPYmplY3Qpe1xuICAgICAgICAgICAgdmFyIHJlc3BvbnNlID0gcmVzb3VyY2VPYmplY3QudGVzdCgpO1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlICE9PSBmYWxzZSAmJiByZXNwb25zZSAhPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHRocm93IChcInJlc291cmNlT2JqZWN0LnRlc3QgbXVzdCByZXR1cm4gdHJ1ZSBvciBmYWxzZVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghcmVzb3VyY2VPYmplY3QudHlwZSkge1xuICAgICAgICAgICAgICAgIHJlc291cmNlT2JqZWN0LnR5cGUgPSBcImphdmFzY3JpcHRcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc291cmNlT2JqZWN0LnR5cGUgPSByZXNvdXJjZU9iamVjdC50eXBlLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICBzd2l0Y2ggKHJlc291cmNlT2JqZWN0LnR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIFwiamF2YXNjcmlwdFwiOlxuICAgICAgICAgICAgICAgICAgICBpZiAoIXJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbG9hZFJlc291cmNlKHJlc291cmNlT2JqZWN0KS50aGVuKGZ1bmN0aW9uIChyZXNvdXJjZU9iamVjdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgcmVzb3VyY2VPYmplY3QucmV0dXJuT2JqZWN0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZXR1cm5PYmplY3Q7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh3aW5kb3cuaGFzT3duUHJvcGVydHkocmVzb3VyY2VPYmplY3QucmV0dXJuT2JqZWN0KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHdpbmRvd1tyZXNvdXJjZU9iamVjdC5yZXR1cm5PYmplY3RdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiByZXNvdXJjZU9iamVjdC5yZXR1cm5PYmplY3QgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5oYXNPd25Qcm9wZXJ0eShyZXNvdXJjZU9iamVjdC5yZXR1cm5PYmplY3QpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHdpbmRvd1tyZXNvdXJjZU9iamVjdC5yZXR1cm5PYmplY3RdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHRocm93IChcIkludmFsaWQgdHlwZSBcIiArIFN0cmluZyhyZXNvdXJjZU9iamVjdC50eXBlKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICB0aGlzLmxvYWRQbHVnaW5TY3JpcHQgPSBmdW5jdGlvbiAocmVzb3VyY2VPYmplY3QpIHtcbiAgICAgICAgaWYgKHJlc291cmNlT2JqZWN0KSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHJlc291cmNlT2JqZWN0LnJldHVybk9iamVjdCAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgIHRocm93IChcInJlc291cmNlT2JqZWN0LnJldHVybk9iamVjdCBtdXN0IGJlIHRoZSBuYW1lIG9mIHRoZSBwcm90b3R5cGUgZnVuY3Rpb25cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5sb2FkUmVzb3VyY2UocmVzb3VyY2VPYmplY3QpLnRoZW4oZnVuY3Rpb24gKHBsdWdpbikge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmFkZFByb3RvdHlwZShwbHVnaW4pO1xuICAgICAgICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB0aGlzLmluamVjdFByb3RvdHlwZSA9IGZ1bmN0aW9uKHByb3RvdHlwZUV4ZWN1dGFibGUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBwcm90b3R5cGVFeGVjdXRhYmxlICE9IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgdGhyb3coXCJJbnZhbGlkIGV4ZWN1dGFibGUgZnVuY3Rpb25cIik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkUHJvdG90eXBlKHByb3RvdHlwZUV4ZWN1dGFibGUpO1xuICAgIH07XG5cbiAgICB0aGlzLmFkZFByb3RvdHlwZSA9IGZ1bmN0aW9uIChwbHVnaW5fcHJvdG8pIHtcbiAgICAgICAgdmFyIGZhY3RvcnkgPSB0aGlzO1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHBsdWdpbl9wcm90byAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KFwiVGhlIFByb3RvdHlwZSBtdXN0IGJlIGEgZnVuY3Rpb24hXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodHlwZW9mIHBsdWdpbl9wcm90by5wcm90b3R5cGUubmFtZSAhPT0gXCJzdHJpbmdcIiB8fCBwbHVnaW5fcHJvdG8ucHJvdG90eXBlLm5hbWUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KFwiTWFsZm9ybWVkIHBsdWdpbi4gTmFtZSBub3QgZGVmaW5lZFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiBwbHVnaW5fcHJvdG8ucHJvdG90eXBlLnZlcnNpb24gIT09IFwic3RyaW5nXCIgfHwgcGx1Z2luX3Byb3RvLnByb3RvdHlwZS52ZXJzaW9uLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJlamVjdChcIk1hbGZvcm1lZCBwbHVnaW4uIFZlcnNpb24gbm90IGRlZmluZWRcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgcGx1Z2luX3Byb3RvLnByb3RvdHlwZS51bmlxdWVJRCAhPT0gXCJzdHJpbmdcIiB8fCBwbHVnaW5fcHJvdG8ucHJvdG90eXBlLnVuaXF1ZUlELmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJlamVjdChcIk1hbGZvcm1lZCBwbHVnaW4uIHVuaXF1ZUlEIG5vdCBkZWZpbmVkXCIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHBsdWdpbl9wcm90byk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24ocGx1Z2luX3Byb3RvKSB7XG4gICAgICAgICAgICB2YXIgdGVzdE9iaiA9IHtcbiAgICAgICAgICAgICAgICAncHJvdG8nOiBwbHVnaW5fcHJvdG8sXG4gICAgICAgICAgICAgICAgJ25hbWUnOiBwbHVnaW5fcHJvdG8ucHJvdG90eXBlLm5hbWUsXG4gICAgICAgICAgICAgICAgJ3ZlcnNpb24nOiBwbHVnaW5fcHJvdG8ucHJvdG90eXBlLnZlcnNpb24sXG4gICAgICAgICAgICAgICAgJ3VuaXF1ZUlEJzogcGx1Z2luX3Byb3RvLnByb3RvdHlwZS51bmlxdWVJRFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHZhciBvYmogPSBwbHVnaW5fcHJvdG90eXBlcy5maW5kKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBhcmFtO1xuICAgICAgICAgICAgICAgIHZhciBtYXRjaCA9IDA7XG4gICAgICAgICAgICAgICAgZm9yIChwYXJhbSBpbiB0aGlzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlW3BhcmFtXSA9PT0gdGhpc1twYXJhbV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoKys7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1hdGNoID09PSA0O1xuICAgICAgICAgICAgfSwgdGVzdE9iaik7XG4gICAgICAgICAgICBpZiAob2JqKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgKFwiVGhlIHBsdWdpbiBtdXN0IGJlIHVuaXF1ZSFcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvYmogPSBuZXcgUGx1Z2luUHJvdG90eXBlKHBsdWdpbl9wcm90bywgZmFjdG9yeSk7XG4gICAgICAgICAgICBwbHVnaW5fcHJvdG90eXBlcy5wdXNoKG9iaik7XG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhvYmosIHtcbiAgICAgICAgICAgICAgICAnZmFjdG9yeSc6IHtcbiAgICAgICAgICAgICAgICAgICAgJ3ZhbHVlJzogZmFjdG9yeVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIG9iajtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIHRoaXMuZ2V0UHJvdG90eXBlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHBsdWdpbl9wcm90b3R5cGVzO1xuICAgIH07XG5cbiAgICB0aGlzLmdldEF1ZGlvUGx1Z2luUHJvdG90eXBlcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gcGx1Z2luX3Byb3RvdHlwZXMuZmlsdGVyKGZ1bmN0aW9uKHByb3RvKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvdG8uaGFzTWlkaUlucHV0ID09IGZhbHNlICYmIHByb3RvLmhhc01pZGlPdXRwdXQgPT0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICB0aGlzLmdldE1pZGlTeW50aFByb3RvdHlwZXMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHBsdWdpbl9wcm90b3R5cGVzLmZpbHRlcihmdW5jdGlvbihwcm90bykge1xuICAgICAgICAgICAgcmV0dXJuIHByb3RvLmhhc01pZGlJbnB1dCA9PSB0cnVlICYmIHByb3RvLmhhc01pZGlPdXRwdXQgPT0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICB0aGlzLmdldE1pZGlQbHVnaW5Qcm90b3R5cGVzID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBwbHVnaW5fcHJvdG90eXBlcy5maWx0ZXIoZnVuY3Rpb24ocHJvdG8pIHtcbiAgICAgICAgICAgIHJldHVybiBwcm90by5oYXNNaWRpSW5wdXQgPT0gdHJ1ZSAmJiBwcm90by5oYXNNaWRpT3V0cHV0ID09IHRydWU7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICB0aGlzLmdldEFsbFBsdWdpbnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBwbHVnaW5zTGlzdDtcbiAgICB9O1xuXG4gICAgdGhpcy5nZXRBbGxQbHVnaW5zT2JqZWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgb2JqID0ge1xuICAgICAgICAgICAgICAgICdmYWN0b3J5JzogdGhpcyxcbiAgICAgICAgICAgICAgICAnc3ViRmFjdG9yaWVzJzogW11cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgc3ViRmFjdG9yaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBvYmouc3ViRmFjdG9yaWVzLnB1c2goe1xuICAgICAgICAgICAgICAgICdzdWJGYWN0b3J5Jzogc3ViRmFjdG9yaWVzW2ldLFxuICAgICAgICAgICAgICAgICdwbHVnaW5zJzogc3ViRmFjdG9yaWVzW2ldLmdldFBsdWdpbnMoKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICB9O1xuXG4gICAgdGhpcy5jcmVhdGVTdWJGYWN0b3J5ID0gZnVuY3Rpb24oY2hhaW5TdGFydCwgY2hhaW5TdG9wKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcIkRFUFJFQ0FURUQgLSBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgZGVwcmVjYXRlZCBpbiBmYXZvdXIgb2YgXFxcImNyZWF0ZUF1ZGlvUGx1Z2luQ2hhaW5NYW5hZ2VyXFxcIlwiKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlQXVkaW9QbHVnaW5DaGFpbk1hbmFnZXIoY2hhaW5TdGFydCwgY2hhaW5TdG9wKTtcbiAgICB9O1xuXG4gICAgdGhpcy5kZXN0cm95U3ViRmFjdG9yeSA9IGZ1bmN0aW9uKGNoYWluU3RhcnQsIGNoYWluU3RvcCkge1xuICAgICAgICBjb25zb2xlLndhcm4oXCJERVBSRUNBVEVEIC0gVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGRlcHJlY2F0ZWQgaW4gZmF2b3VyIG9mIFxcXCJkZXN0cm95QXVkaW9QbHVnaW5DaGFpbk1hbmFnZXJcXFwiXCIpO1xuICAgICAgICByZXR1cm4gdGhpcy5kZXN0cm95QXVkaW9QbHVnaW5DaGFpbk1hbmFnZXIoY2hhaW5TdGFydCwgY2hhaW5TdG9wKTtcbiAgICB9O1xuXG4gICAgdGhpcy5jcmVhdGVBdWRpb1BsdWdpbkNoYWluTWFuYWdlciA9IGZ1bmN0aW9uIChjaGFpblN0YXJ0LCBjaGFpblN0b3ApIHtcbiAgICAgICAgdmFyIG5vZGUgPSBuZXcgQXVkaW9QbHVnaW5DaGFpbk1hbmFnZXIodGhpcywgY2hhaW5TdGFydCwgY2hhaW5TdG9wKTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMobm9kZSwge1xuICAgICAgICAgICAgJ1Nlc3Npb25EYXRhJzoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiB0aGlzLlNlc3Npb25EYXRhXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ1VzZXJEYXRhJzoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiB0aGlzLlVzZXJEYXRhXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBzdWJGYWN0b3JpZXMucHVzaChub2RlKTtcbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfTtcblxuICAgIHRoaXMuZHVwbGljYXRlQXVkaW9QbHVnaW5DaGFpbk1hbmFnZXIgPSBmdW5jdGlvbihzb3VyY2VDaGFpbk1hbmFnZXIsIGNoYWluU3RhcnQsIGNoYWluU3RvcCkge1xuICAgICAgICB2YXIgbm9kZSA9IHRoaXMuY3JlYXRlQXVkaW9QbHVnaW5DaGFpbk1hbmFnZXIoY2hhaW5TdGFydCwgY2hhaW5TdG9wKTtcbiAgICAgICAgdmFyIHByb21pc2VDaGFpbiA9IFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICBzb3VyY2VDaGFpbk1hbmFnZXIuZ2V0UGx1Z2lucygpLmZvckVhY2goZnVuY3Rpb24ocGx1Z2luX29iamVjdCkge1xuICAgICAgICAgICAgcHJvbWlzZUNoYWluID0gcHJvbWlzZUNoYWluLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5vZGUuY3JlYXRlUGx1Z2luKHBsdWdpbl9vYmplY3QucHJvdG90eXBlT2JqZWN0KVxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKG5ld1BsdWdpbikge1xuICAgICAgICAgICAgICAgICAgICBuZXdQbHVnaW4ubm9kZS5wYXJhbWV0ZXJzLnNldFBhcmFtZXRlcnNCeU9iamVjdChwbHVnaW5fb2JqZWN0Lm5vZGUucGFyYW1ldGVycy5nZXRQYXJhbWV0ZXJPYmplY3QpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcHJvbWlzZUNoYWluLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gbm9kZTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIHRoaXMuZGVzdHJveUF1ZGlvUGx1Z2luQ2hhaW5NYW5hZ2VyID0gZnVuY3Rpb24gKFN1YkZhY3RvcnkpIHtcbiAgICAgICAgdmFyIGluZGV4ID0gc3ViRmFjdG9yaWVzLmZpbmRJbmRleChmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQgPT09IHRoaXMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSwgU3ViRmFjdG9yeSk7XG4gICAgICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICAgICAgICBzdWJGYWN0b3JpZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIFN1YkZhY3RvcnkuZGVzdHJveSgpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHRoaXMuY3JlYXRlTWlkaVN5bnRoZXNpc2VySG9zdCA9IGZ1bmN0aW9uKGZhY3RvcnkpIHtcbiAgICAgICAgaWYgKGZhY3RvcnkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgZmFjdG9yeSA9IHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGhvc3QgPSBuZXcgTWlkaVN5bnRoZXNpc2VySG9zdChmYWN0b3J5KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoaG9zdCwge1xuICAgICAgICAgICAgJ1Nlc3Npb25EYXRhJzoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiB0aGlzLlNlc3Npb25EYXRhXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ1VzZXJEYXRhJzoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiB0aGlzLlVzZXJEYXRhXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBzeW50aGVzaXNlckhvc3RzLnB1c2goaG9zdCk7XG4gICAgICAgIHJldHVybiBob3N0O1xuICAgIH07XG5cbiAgICB0aGlzLmRlc3Ryb3lNaWRpU3ludGhlc2lzZXJIb3N0ID0gZnVuY3Rpb24gKGhvc3QpIHtcbiAgICAgICAgdmFyIGluZGV4ID0gc3ludGhlc2lzZXJIb3N0cy5maW5kSW5kZXgoZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIGlmIChlbGVtZW50ID09PSB0aGlzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0sIGhvc3QpO1xuICAgICAgICBpZiAoaW5kZXggPj0gMCkge1xuICAgICAgICAgICAgc3ludGhlc2lzZXJIb3N0cy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgaG9zdC5kZXN0cm95KCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgdGhpcy5yZWdpc3RlclBsdWdpbkluc3RhbmNlID0gZnVuY3Rpb24gKGluc3RhbmNlKSB7XG4gICAgICAgIGlmIChwbHVnaW5zTGlzdC5maW5kKGZ1bmN0aW9uIChwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHAgPT09IHRoaXM7XG4gICAgICAgICAgICB9LCBpbnN0YW5jZSkpIHtcbiAgICAgICAgICAgIHRocm93IChcIlBsdWdpbiBJbnN0YW5jZSBub3QgdW5pcXVlXCIpO1xuICAgICAgICB9XG4gICAgICAgIHBsdWdpbnNMaXN0LnB1c2goaW5zdGFuY2UpO1xuICAgICAgICBpZiAoYXVkaW9TdGFydGVkKSB7XG4gICAgICAgICAgICB2YXIgY29udGV4dF90aW1lID0gYXVkaW9fY29udGV4dC5jdXJyZW50VGltZTtcbiAgICAgICAgICAgIHZhciBwcm9ncmFtX3RpbWUgPSB0aGlzLmdldEN1cnJlbnRQcm9ncmFtVGltZSgpO1xuICAgICAgICAgICAgcGx1Z2luQXVkaW9TdGFydChpbnN0YW5jZS5ub2RlLCBwcm9ncmFtX3RpbWUsIGNvbnRleHRfdGltZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcblxuICAgIHRoaXMuZGVsZXRlUGx1Z2luID0gZnVuY3Rpb24gKHBsdWdpbikge1xuICAgICAgICB2YXIgaW5kZXggPSBwbHVnaW5zTGlzdC5pbmRleE9mKHBsdWdpbik7XG4gICAgICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICAgICAgICB2YXIgcCA9IHBsdWdpbnNMaXN0LnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICBwWzBdLmRlbGV0ZSgpO1xuICAgICAgICAgICAgcFswXS5ub2RlLmV4dGVybmFsSW50ZXJmYWNlLmNsb3NlV2luZG93cygpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHRoaXMuZ2V0Q3VycmVudFByb2dyYW1UaW1lID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmIChhdWRpb1N0YXJ0ZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBhdWRpb19jb250ZXh0LmN1cnJlbnRUaW1lIC0gYXVkaW9TdGFydENvbnRleHRUaW1lICsgYXVkaW9TdGFydFByb2dyYW1UaW1lO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGF1ZGlvU3RhcnRQcm9ncmFtVGltZTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB0aGlzLnNldEN1cnJlbnRQcm9ncmFtVGltZSA9IGZ1bmN0aW9uKHRpbWUpIHtcbiAgICAgICAgaWYgKGF1ZGlvU3RhcnRlZCkge1xuICAgICAgICAgICAgdGhyb3coXCJNdXN0IHN0b3AgcGxheWJhY2sgdG8gc2V0IHRoZSBjdXJyZW50IHByb2dyYW0gdGltZVwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHRpbWUgPT0gXCJudW1iZXJcIiAmJiB0aW1lID49IDApIHtcbiAgICAgICAgICAgIGF1ZGlvU3RhcnRQcm9ncmFtVGltZSA9IHRpbWU7XG4gICAgICAgICAgICB0aGlzLlBsdWdpbkdVSS5wb2xsQWxsUGx1Z2lucygpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHRoaXMuYXVkaW9TdGFydCA9IGZ1bmN0aW9uIChwcm9ncmFtX3RpbWUsIGNvbnRleHRfdGltZSkge1xuICAgICAgICBpZiAoY29udGV4dF90aW1lID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNvbnRleHRfdGltZSA9IGF1ZGlvX2NvbnRleHQuY3VycmVudFRpbWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb2dyYW1fdGltZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBwcm9ncmFtX3RpbWUgPSAwO1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFwiQXNzdW1pbmcgc3RhcnQgdGltZSBhdCAwXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghYXVkaW9TdGFydGVkKSB7XG4gICAgICAgICAgICB0aGlzLnNldEN1cnJlbnRQcm9ncmFtVGltZShwcm9ncmFtX3RpbWUpO1xuICAgICAgICAgICAgYXVkaW9TdGFydENvbnRleHRUaW1lID0gY29udGV4dF90aW1lO1xuICAgICAgICAgICAgdHJpZ2dlckF1ZGlvU3RhcnQocHJvZ3JhbV90aW1lLCBjb250ZXh0X3RpbWUpO1xuICAgICAgICAgICAgYXVkaW9TdGFydGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5hdWRpb1N0b3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChhdWRpb1N0YXJ0ZWQpIHtcbiAgICAgICAgICAgIHRyaWdnZXJBdWRpb1N0b3AoKTtcbiAgICAgICAgICAgIGF1ZGlvU3RhcnRlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHRoaXMuY3JlYXRlU3RvcmUgPSBmdW5jdGlvbiAoc3RvcmVOYW1lKSB7XG4gICAgICAgIHZhciBub2RlID0gbmV3IExpbmtlZFN0b3JlKHN0b3JlTmFtZSk7XG4gICAgICAgIHN0b3Jlcy5wdXNoKG5vZGUpO1xuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9O1xuXG4gICAgdGhpcy5nZXRTdG9yZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBzdG9yZXM7XG4gICAgfTtcblxuICAgIHRoaXMuZmluZFN0b3JlID0gZnVuY3Rpb24gKHN0b3JlTmFtZSkge1xuICAgICAgICByZXR1cm4gc3RvcmVzLmZpbmQoZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgICAgIHJldHVybiBhLm5hbWUgPT09IHN0b3JlTmFtZTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIC8vIEJ1aWxkIHRoZSBkZWZhdWx0IFN0b3Jlc1xuICAgIHRoaXMuU2Vzc2lvbkRhdGEgPSBuZXcgTGlua2VkU3RvcmUoXCJTZXNzaW9uXCIpO1xuICAgIHRoaXMuVXNlckRhdGEgPSBuZXcgTGlua2VkU3RvcmUoXCJVc2VyXCIpO1xuXG4gICAgdGhpcy5GZWF0dXJlTWFwID0gbmV3IEZlYXR1cmVNYXAoKTtcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLkZlYXR1cmVNYXAsIFwiZmFjdG9yeVwiLCB7XG4gICAgICAgICd2YWx1ZSc6IHRoaXNcbiAgICB9KTtcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgICAgXCJjb250ZXh0XCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogYXVkaW9fY29udGV4dFxuICAgICAgICB9LFxuICAgICAgICBcImhhc0F1ZGlvU3RhcnRlZFwiOiB7XG4gICAgICAgICAgICBcImdldFwiOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXVkaW9TdGFydGVkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInBsdWdpblJvb3RVUkxcIjoge1xuICAgICAgICAgICAgXCJnZXRcIjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiByb290VVJMO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwic2V0XCI6IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgICAgIHJvb3RVUkwgPSB0O1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcm9vdFVSTDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhyb3cgKFwiQ2Fubm90IHNldCByb290IFVSTCB3aXRob3V0IGEgc3RyaW5nXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImNyZWF0ZUZhY3RvcnlDb3B5XCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29weUZhY3RvcnkodGhpcywgY29udGV4dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwic3ViRmFjdG9yaWVzXCI6IHtcbiAgICAgICAgICAgIFwiZ2V0XCI6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzdWJGYWN0b3JpZXM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiUGx1Z2luR1VJXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogcGx1Z2luVXNlckludGVyZmFjZU1lc3NhZ2VIdWJJbnRhbmNlXG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUGx1Z2luRmFjdG9yeTtcbiIsIi8qIGpzaGludCBlc3ZlcnNpb246IDYgKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBsdWdpbkluc3RhbmNlKHBsdWdpbl9ub2RlKSB7XG4gICAgdGhpcy5uZXh0X25vZGUgPSB1bmRlZmluZWQ7XG4gICAgdmFyIF9ieXBhc3NlZCA9IGZhbHNlO1xuICAgIHZhciBldiA9IG5ldyBFdmVudFRhcmdldCgpO1xuICAgIHZhciBfaW4gPSBwbHVnaW5fbm9kZS5jb250ZXh0LmNyZWF0ZUdhaW4oKSxcbiAgICAgICAgX291dCA9IHBsdWdpbl9ub2RlLmNvbnRleHQuY3JlYXRlR2FpbigpO1xuXG4gICAgX2luLmNvbm5lY3QocGx1Z2luX25vZGUuZ2V0SW5wdXRzKClbMF0pO1xuICAgIHBsdWdpbl9ub2RlLmdldE91dHB1dHMoKVswXS5jb25uZWN0KF9vdXQpO1xuICAgIHBsdWdpbl9ub2RlLmFkZEV2ZW50TGlzdGVuZXIodGhpcyk7XG5cbiAgICBmdW5jdGlvbiBieXBhc3NFbmFibGUoKSB7XG4gICAgICAgIF9pbi5kaXNjb25uZWN0KCk7XG4gICAgICAgIF9pbi5jb25uZWN0KF9vdXQpO1xuICAgICAgICBfYnlwYXNzZWQgPSB0cnVlO1xuICAgICAgICBpZiAocGx1Z2luX25vZGUucHJvY2Vzc2luZ0RlbGF5QXNTYW1wbGVzICE9IDApIHtcbiAgICAgICAgICAgIGV2LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiYWx0ZXJkZWxheVwiKSk7XG4gICAgICAgIH1cbiAgICAgICAgZXYuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJieXBhc3NlZFwiKSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYnlwYXNzRGlzYWJsZSgpIHtcbiAgICAgICAgX2luLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgX2luLmNvbm5lY3QocGx1Z2luX25vZGUuZ2V0SW5wdXRzKClbMF0pO1xuICAgICAgICBfYnlwYXNzZWQgPSBmYWxzZTtcbiAgICAgICAgaWYgKHBsdWdpbl9ub2RlLnByb2Nlc3NpbmdEZWxheUFzU2FtcGxlcyAhPSAwKSB7XG4gICAgICAgICAgICBldi5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImFsdGVyZGVsYXlcIikpO1xuICAgICAgICB9XG4gICAgICAgIGV2LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiYnlwYXNzZWRcIikpO1xuICAgIH1cblxuICAgIHRoaXMuYnlwYXNzID0gZnVuY3Rpb24gKHN0YXRlKSB7XG4gICAgICAgIHN0YXRlID0gKHN0YXRlID09PSB0cnVlKTtcbiAgICAgICAgaWYgKHN0YXRlID09PSBfYnlwYXNzZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBfYnlwYXNzZWQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0YXRlKSB7XG4gICAgICAgICAgICBieXBhc3NFbmFibGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJ5cGFzc0Rpc2FibGUoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX2J5cGFzc2VkO1xuICAgIH07XG5cbiAgICB0aGlzLmlzQnlwYXNzZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfYnlwYXNzZWQ7XG4gICAgfTtcblxuICAgIHRoaXMucmVjb25uZWN0ID0gZnVuY3Rpb24gKG5ld19uZXh0KSB7XG4gICAgICAgIHRoaXMuY29ubmVjdChuZXdfbmV4dCk7XG4gICAgfTtcblxuICAgIHRoaXMuY29ubmVjdCA9IGZ1bmN0aW9uIChuZXdfbmV4dCkge1xuICAgICAgICBpZiAodGhpcy5uZXh0X25vZGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5kaXNjb25uZWN0KCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5ld19uZXh0ICE9PSB1bmRlZmluZWQgJiYgbmV3X25leHQuaW5wdXQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5uZXh0X25vZGUgPSBuZXdfbmV4dDtcbiAgICAgICAgICAgIF9vdXQuY29ubmVjdCh0aGlzLm5leHRfbm9kZS5pbnB1dCk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcblxuICAgIHRoaXMuZGlzY29ubmVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMubmV4dF9ub2RlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIF9vdXQuZGlzY29ubmVjdCh0aGlzLm5leHRfbm9kZS5pbnB1dCk7XG4gICAgICAgICAgICB0aGlzLm5leHRfbm9kZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB0aGlzLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHBsdWdpbl9ub2RlLmRlc3Ryb3koKTtcbiAgICB9O1xuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgICBcImhhbmRsZUV2ZW50XCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgIGV2LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KGUudHlwZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImFkZEV2ZW50TGlzdGVuZXJcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbihhLGIsYykge1xuICAgICAgICAgICAgICAgIHJldHVybiBldi5hZGRFdmVudExpc3RlbmVyKGEsYixjKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJyZW1vdmVFdmVudExpc3RlbmVyXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24oYSxiLGMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZXYucmVtb3ZlRXZlbnRMaXN0ZW5lcihhLGIsYyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgICdub2RlJzoge1xuICAgICAgICAgICAgJ3ZhbHVlJzogcGx1Z2luX25vZGVcbiAgICAgICAgfSxcbiAgICAgICAgJ2lucHV0Jzoge1xuICAgICAgICAgICAgJ2dldCc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX2luO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAnb3V0cHV0Jzoge1xuICAgICAgICAgICAgJ2dldCc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX291dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgJ2J5cGFzc2VkJzoge1xuICAgICAgICAgICAgJ2dldCc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX2J5cGFzc2VkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG4iLCIvKiBqc2hpbnQgZXN2ZXJzaW9uOiA2ICovXG5pbXBvcnQgUGx1Z2luSW5zdGFuY2UgZnJvbSBcIi4vUGx1Z2luSW5zdGFuY2VcIjtcbmltcG9ydCBNaWRpU3ludGhlc2lzSW5zdGFuY2UgZnJvbSBcIi4vTWlkaVN5bnRoZXNpc0luc3RhbmNlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBsdWdpblByb3RvdHlwZShwcm90bywgZmFjdG9yeSkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XG4gICAgICAgICduYW1lJzoge1xuICAgICAgICAgICAgdmFsdWU6IHByb3RvLnByb3RvdHlwZS5uYW1lXG4gICAgICAgIH0sXG4gICAgICAgICdwcm90byc6IHtcbiAgICAgICAgICAgIHZhbHVlOiBwcm90b1xuICAgICAgICB9LFxuICAgICAgICAndmVyc2lvbic6IHtcbiAgICAgICAgICAgIHZhbHVlOiBwcm90by5wcm90b3R5cGUudmVyc2lvblxuICAgICAgICB9LFxuICAgICAgICAndW5pcXVlSUQnOiB7XG4gICAgICAgICAgICB2YWx1ZTogcHJvdG8ucHJvdG90eXBlLnVuaXF1ZUlEXG4gICAgICAgIH0sXG4gICAgICAgICdoYXNNaWRpSW5wdXQnOiB7XG4gICAgICAgICAgICB2YWx1ZTogcHJvdG8ucHJvdG90eXBlLmhhc01pZGlJbnB1dCB8fCBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICAnaGFzTWlkaU91dHB1dCc6IHtcbiAgICAgICAgICAgIHZhbHVlOiBwcm90by5wcm90b3R5cGUuaGFzTWlkaU91dHB1dCB8fCBmYWxzZVxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLmNyZWF0ZVBsdWdpbkluc3RhbmNlID0gYXN5bmMgZnVuY3Rpb24ob3duZXIsIGFzeW5jKSB7XG4gICAgICAgIHZhciBwID0gY3JlYXRlUGx1Z2luSW5zdGFuY2Uob3duZXIpO1xuICAgICAgICBpZiAoYXN5bmMgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHJldHVybiBwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYXdhaXQgcDtcbiAgICAgICAgICAgIHJldHVybiBwO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGNyZWF0ZVBsdWdpbkluc3RhbmNlKG93bmVyKSB7XG4gICAgICAgIHJldHVybiB3YWl0VW50aWxSZWFkeSgpLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICAgICAgaWYgKCFjaGVja0lzUmVhZHkoKSkge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKFwiUGx1Z2luIG5vdCByZWFkeVwiKSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShuZXcgcHJvdG8oZmFjdG9yeSwgb3duZXIpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uKHBsdWdpbikge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCl7XG4gICAgICAgICAgICAgICAgaWYgKHBsdWdpbi5pbml0aWFsaXNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwbHVnaW4uaW5pdGlhbGlzZSgpLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHBsdWdpbik7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocGx1Z2luKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSkudGhlbihmdW5jdGlvbihwbHVnaW4pIHtcbiAgICAgICAgICAgIHZhciBub2RlO1xuICAgICAgICAgICAgaWYgKHBsdWdpbi5oYXNNaWRpSW5wdXQgIT09IHRydWUgJiYgcGx1Z2luLmhhc01pZGlPdXRwdXQgIT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBub2RlID0gbmV3IFBsdWdpbkluc3RhbmNlKHBsdWdpbik7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHBsdWdpbi5oYXNNaWRpSW5wdXQgPT09IHRydWUgJiYgcGx1Z2luLmhhc01pZGlPdXRwdXQgIT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBub2RlID0gbmV3IE1pZGlTeW50aGVzaXNJbnN0YW5jZShwbHVnaW4pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aHJvdyhcIk5vIEluc3RhbmNlIEhvbGRlciBBdmFpbGFibGUhXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMocGx1Z2luLCB7XG4gICAgICAgICAgICAgICAgJ3BsdWdpbkluc3RhbmNlJzoge1xuICAgICAgICAgICAgICAgICAgICAndmFsdWUnOiBub2RlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAncHJvdG90eXBlT2JqZWN0Jzoge1xuICAgICAgICAgICAgICAgICAgICAndmFsdWUnOiBzZWxmXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAnbmFtZSc6IHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHByb3RvLnByb3RvdHlwZS5uYW1lXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAndmVyc2lvbic6IHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHByb3RvLnByb3RvdHlwZS52ZXJzaW9uXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAndW5pcXVlSUQnOiB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBwcm90by5wcm90b3R5cGUudW5pcXVlSURcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICdTZXNpb25EYXRhJzoge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogZmFjdG9yeS5TZXNzaW9uRGF0YVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgJ1VzZXJEYXRhJzoge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogZmFjdG9yeS5Vc2VyRGF0YVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMobm9kZSwge1xuICAgICAgICAgICAgICAgIFwicHJvdG90eXBlT2JqZWN0XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgJ3ZhbHVlJzogc2VsZlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCJleHRlcm5hbEludGVyZmFjZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgICd2YWx1ZSc6IHBsdWdpbi5leHRlcm5hbEludGVyZmFjZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZmFjdG9yeS5yZWdpc3RlclBsdWdpbkluc3RhbmNlKG5vZGUpO1xuICAgICAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxvYWRSZXNvdXJjZUNoYWluKHJlc291cmNlT2JqZWN0LCBwKSB7XG4gICAgICAgIGlmICghcCkge1xuICAgICAgICAgICAgdmFyIGsgPSBsb2FkUmVzb3VyY2UocmVzb3VyY2VPYmplY3QpO1xuICAgICAgICAgICAgay50aGVuKGZ1bmN0aW9uIChyZXNvdXJjZU9iamVjdCkge1xuICAgICAgICAgICAgICAgIGlmIChyZXNvdXJjZU9iamVjdC5yZXNvdXJjZXMgIT09IHVuZGVmaW5lZCAmJiByZXNvdXJjZU9iamVjdC5yZXNvdXJjZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlc291cmNlT2JqZWN0LnJlc291cmNlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgayA9IGxvYWRSZXNvdXJjZUNoYWluKHJlc291cmNlT2JqZWN0LnJlc291cmNlc1tpXSwgayk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBrO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHAudGhlbihsb2FkUmVzb3VyY2UocmVzb3VyY2VPYmplY3QpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxvYWRTdHlsZXNoZWV0KHVybCkge1xuICAgICAgICB2YXIgY3NzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG4gICAgICAgIGNzcy5zZXRBdHRyaWJ1dGUoXCJyZWxcIiwgXCJzdHlsZXNoZWV0XCIpO1xuICAgICAgICBjc3Muc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHQvY3NzXCIpO1xuICAgICAgICBjc3Muc2V0QXR0cmlidXRlKFwiaHJlZlwiLCB1cmwpO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF0uYXBwZW5kQ2hpbGQoY3NzKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZWN1cnNpdmVHZXRUZXN0KHJlc291cmNlT2JqZWN0KSB7XG4gICAgICAgIGlmIChyZXNvdXJjZU9iamVjdC5oYXNPd25Qcm9wZXJ0eShcImxlbmd0aFwiKSAmJiByZXNvdXJjZU9iamVjdC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVjdXJzaXZlR2V0VGVzdChyZXNvdXJjZU9iamVjdFtyZXNvdXJjZU9iamVjdC5sZW5ndGggLSAxXSk7XG4gICAgICAgIH0gZWxzZSBpZiAocmVzb3VyY2VPYmplY3QuaGFzT3duUHJvcGVydHkoXCJyZXNvdXJjZXNcIikpIHtcbiAgICAgICAgICAgIHJldHVybiByZWN1cnNpdmVHZXRUZXN0KHJlc291cmNlT2JqZWN0LnJlc291cmNlcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzb3VyY2VPYmplY3QudGVzdDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZhciByZXNvdXJjZVByb21pc2VzID0gW107XG4gICAgaWYgKHByb3RvLnByb3RvdHlwZS5yZXNvdXJjZXMpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm90by5wcm90b3R5cGUucmVzb3VyY2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgcmVzb3VyY2UgPSBwcm90by5wcm90b3R5cGUucmVzb3VyY2VzW2ldO1xuICAgICAgICAgICAgcmVzb3VyY2UudHlwZSA9IHJlc291cmNlLnR5cGUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgIHN3aXRjaCAocmVzb3VyY2UudHlwZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJjc3NcIjpcbiAgICAgICAgICAgICAgICAgICAgbG9hZFN0eWxlc2hlZXQocmVzb3VyY2UudXJsKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcImphdmFzY3JpcHRcIjpcbiAgICAgICAgICAgICAgICAgICAgdmFyIG9iamVjdCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdwcm9taXNlJzogbG9hZFJlc291cmNlQ2hhaW4ocmVzb3VyY2UpLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3N0YXRlJzogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICdjb21wbGV0ZSc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlID0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAndGVzdCc6IHJlY3Vyc2l2ZUdldFRlc3QocmVzb3VyY2UpXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIG9iamVjdC5wcm9taXNlLnRoZW4ob2JqZWN0LmNvbXBsZXRlLmJpbmQob2JqZWN0KSk7XG4gICAgICAgICAgICAgICAgICAgIHJlc291cmNlUHJvbWlzZXMucHVzaChvYmplY3QpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICB0aHJvdyAoXCJDb3VsZCBub3QgbG9hZCBcIiArIHJlc291cmNlLnVybCArIFwiLCBpbnZhbGlkIHJlc291cmNlLnR5cGVcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmdldFJlc291cmNlUHJvbWlzZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiByZXNvdXJjZVByb21pc2VzO1xuICAgIH07XG4gICAgZnVuY3Rpb24gY2hlY2tJc1JlYWR5KCkge1xuICAgICAgICB2YXIgc3RhdGUgPSB0cnVlO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlc291cmNlUHJvbWlzZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChyZXNvdXJjZVByb21pc2VzW2ldLnN0YXRlICE9PSAxIHx8ICFyZXNvdXJjZVByb21pc2VzW2ldLnRlc3QoKSkge1xuICAgICAgICAgICAgICAgIHN0YXRlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH07XG4gICAgZnVuY3Rpb24gd2FpdFVudGlsUmVhZHkoKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLmFsbChyZXNvdXJjZVByb21pc2VzKTtcbiAgICB9XG59XG4iLCIvKiBqc2hpbnQgZXN2ZXJzaW9uOiA2ICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBsdWdpblVzZXJJbnRlcmZhY2VNZXNzYWdlSHViKGZhY3Rvcnkpe1xuICAgIGZ1bmN0aW9uIGJ1aWxkUGx1Z2luSW50ZXJmYWNlKHBsdWdpbl9vYmplY3QsIGludGVyZmFjZV9vYmplY3QpIHtcbiAgICAgICAgdmFyIGlmcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpZnJhbWVcIik7XG4gICAgICAgIGlmcmFtZS5zcmMgPSBpbnRlcmZhY2Vfb2JqZWN0LnNyYztcbiAgICAgICAgaWYgKGludGVyZmFjZV9vYmplY3Qud2lkdGgpIHtcbiAgICAgICAgICAgIGlmcmFtZS53aWR0aCA9IGludGVyZmFjZV9vYmplY3Qud2lkdGg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGludGVyZmFjZV9vYmplY3QuaGVpZ2h0KSB7XG4gICAgICAgICAgICBpZnJhbWUuaGVpZ2h0ID0gaW50ZXJmYWNlX29iamVjdC5oZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgaWZyYW1lLnN0eWxlLmJvcmRlciA9IFwiMFwiO1xuICAgICAgICAvL2lmcmFtZS5jb250ZW50V2luZG93LnBsdWdpbkluc3RhbmNlID0gcGx1Z2luX29iamVjdDtcbiAgICAgICAgcmV0dXJuIGlmcmFtZTtcbiAgICB9XG4gICAgZnVuY3Rpb24gc3Bhd25QbHVnaW5XaW5kb3cocGx1Z2luX29iamVjdCwgaW50ZXJmYWNlX29iamVjdCwgb3B0cykge1xuICAgICAgICB2YXIgdyA9IHdpbmRvdy5vcGVuKGludGVyZmFjZV9vYmplY3Quc3JjLHBsdWdpbl9vYmplY3QubmFtZSxvcHRzKTtcbiAgICAgICAgcGx1Z2luX29iamVjdC5leHRlcm5hbEludGVyZmFjZS5yZWdpc3RlcldpbmRvdyh3KTtcbiAgICAgICAgcmV0dXJuIHc7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHNldERlZmF1bHRJbnRlcmZhY2UodXJsLCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIGRlZmF1bHRfaW50ZXJmYWNlID0ge1xuICAgICAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgICAgICB3aWR0aDogd2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQ6IGhlaWdodFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gZGVmYXVsdF9pbnRlcmZhY2U7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHBvbGxBbGxQbHVnaW5zKCkge1xuICAgICAgICBmYWN0b3J5LmdldEFsbFBsdWdpbnMoKS5mb3JFYWNoKGZ1bmN0aW9uKHBsdWdpbikge1xuICAgICAgICAgICAgcGx1Z2luLm5vZGUuZXh0ZXJuYWxJbnRlcmZhY2UudXBkYXRlSW50ZXJmYWNlcyh0cnVlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdmFyIGxpc3RlbmVyID0gZmFsc2U7XG4gICAgdmFyIGRlZmF1bHRfaW50ZXJmYWNlID0ge1xuICAgICAgICBzcmM6IFwianNhcF9kZWZhdWx0Lmh0bWxcIlxuICAgIH07XG5cbiAgICByZXR1cm4gT2JqZWN0LmNyZWF0ZSh7XG4gICAgICAgIFwic2V0RGVmYXVsdEludGVyZmFjZVwiOiBzZXREZWZhdWx0SW50ZXJmYWNlLFxuICAgICAgICBcImJ1aWxkUGx1Z2luSW50ZXJmYWNlXCI6YnVpbGRQbHVnaW5JbnRlcmZhY2UsXG4gICAgICAgIFwic3Bhd25QbHVnaW5XaW5kb3dcIjogc3Bhd25QbHVnaW5XaW5kb3csXG4gICAgICAgIFwicG9sbEFsbFBsdWdpbnNcIjogcG9sbEFsbFBsdWdpbnNcbiAgICB9KTtcbn1cbiIsIi8qZ2xvYmFscyBkb2N1bWVudCAqL1xuLyplc2xpbnQtZW52IGJyb3dzZXIgKi9cbi8qIGpzaGludCBlc3ZlcnNpb246IDYgKi9cblxudmFyIExpbmtlZFN0b3JlID0gZnVuY3Rpb24gKHN0b3JlTmFtZSkge1xuICAgIC8vIFN0b3JlIGZvciB0aGUgc2VtYW50aWMgdGVybXMsIGVhY2ggc3RvcmUgaG9sZHMgaXRzIG93biBkYXRhIHRyZWVcbiAgICAvLyBUZXJtcyBhcmUgYWRkZWQgYXMga2V5L3ZhbHVlIHBhcmlzIHRvIGEgcm9vdCBub2RlXG4gICAgdmFyIGV0ID0gbmV3IEV2ZW50VGFyZ2V0KCk7XG4gICAgdmFyIHJvb3QgPSB7fTtcblxuICAgIGZ1bmN0aW9uIG9iamVjdFRvWE1MKG9iaiwgcm9vdCwgZG9jKSB7XG4gICAgICAgIC8vIFVzZWQgaWYgYW4gb2JqZWN0IHdhcyBwYXNzZWQgYXMgYSB0ZXJtIHZhbHVlXG4gICAgICAgIHZhciB0ZXJtO1xuICAgICAgICBmb3IgKHRlcm0gaW4gb2JqKSB7XG4gICAgICAgICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KHRlcm0pKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvYmpbdGVybV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRvY05vZGU7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvYmpbdGVybV0udG9YTUwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY05vZGUgPSBvYmpbdGVybV0udG9YTUwoZG9jKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY05vZGUgPSBkb2MuY3JlYXRlRWxlbWVudCh0ZXJtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvb3QuYXBwZW5kQ2hpbGQoZG9jTm9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob2JqW3Rlcm1dLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5VG9YTUwob2JqW3Rlcm1dLCBkb2NOb2RlLCBkb2MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RUb1hNTChvYmpbdGVybV0sIGRvY05vZGUsIGRvYyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcm9vdC5hcHBlbmRDaGlsZChkb2NOb2RlKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByb290LnNldEF0dHJpYnV0ZSh0ZXJtLCBvYmpbdGVybV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFycmF5VG9YTUwoYXJyLCByb290LCBkb2MpIHtcbiAgICAgICAgLy8gVXNlZCB0byBjb252ZXJ0IGFuIGFycmF5IHRvIGEgbGlzdCBvZiBYTUwgZW50cmllc1xuICAgICAgICB2YXIgYWxsX251bWJlcnMgPSB0cnVlLFxuICAgICAgICAgICAgYWxsX3N0cmluZ3MgPSB0cnVlLFxuICAgICAgICAgICAgaSwgbCA9IGFyci5sZW5ndGg7XG4gICAgICAgIGFsbF9udW1iZXJzID0gYXJyLmV2ZXJ5KGZ1bmN0aW9uIChhKSB7XG4gICAgICAgICAgICByZXR1cm4gdHlwZW9mIGEgPT09IFwibnVtYmVyXCI7XG4gICAgICAgIH0pO1xuICAgICAgICBhbGxfc3RyaW5ncyA9IGFyci5ldmVyeShmdW5jdGlvbiAoYSkge1xuICAgICAgICAgICAgcmV0dXJuIHR5cGVvZiBhID09PSBcInN0cmluZ1wiO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGFsbF9udW1iZXJzIHx8IGFsbF9zdHJpbmdzKSB7XG4gICAgICAgICAgICAvLyBBbiBhcnJheSBvZiBudW1iZXJzIG9yIHN0cmluZ3NcbiAgICAgICAgICAgIGFyci5mb3JFYWNoKGZ1bmN0aW9uIChhLCBpKSB7XG4gICAgICAgICAgICAgICAgcm9vdC5zZXRBdHRyaWJ1dGUoXCJpbmRleC1cIiArIGksIGEpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBBbiBhcnJheSBvZiBvYmplY3RzXG4gICAgICAgICAgICBhcnIuZm9yRWFjaChmdW5jdGlvbiAoYSwgaSkge1xuICAgICAgICAgICAgICAgIHZhciBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInZhbHVlXCIpO1xuICAgICAgICAgICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKFwiaW5kZXhcIiwgaSk7XG4gICAgICAgICAgICAgICAgb2JqZWN0VG9YTUwoYSwgbm9kZSwgZG9jKTtcbiAgICAgICAgICAgICAgICByb290LmFwcGVuZENoaWxkKG5vZGUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XG4gICAgICAgIFwiYWRkRXZlbnRMaXN0ZW5lclwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKGEsYixjKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGV0LmFkZEV2ZW50TGlzdGVuZXIoYSxiLGMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInJlbW92ZUV2ZW50TGlzdGVuZXJcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbihhLGIsYykge1xuICAgICAgICAgICAgICAgIHJldHVybiBldC5yZW1vdmVFdmVudExpc3RlbmVyKGEsYixjKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgJ25hbWUnOiB7XG4gICAgICAgICAgICAnZ2V0JzogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzdG9yZU5hbWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ3NldCc6IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgICAgICAgaWYgKHN0b3JlTmFtZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWUgPSBzdG9yZU5hbWU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgKFwiTmFtZSBpcyBhbHJlYWR5IHNldFwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgICdzZXRUZXJtJzoge1xuICAgICAgICAgICAgJ3ZhbHVlJzogZnVuY3Rpb24gKHRlcm0sIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0ZXJtICE9PSBcInN0cmluZ1wiICYmIHRlcm0ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IChcInRlcm0gbXVzdCBiZSBhIHN0cmluZ1wiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcm9vdFt0ZXJtXSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIGV0LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwiYWx0ZXJlZFwiLCB7ZGV0YWlsOnt0ZXJtOiB0ZXJtLCB2YWx1ZTogdmFsdWV9fSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAnc2V0VGVybXMnOiB7XG4gICAgICAgICAgICAndmFsdWUnOiBmdW5jdGlvbiAodGVybXNPYmplY3QpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRlcm1zT2JqZWN0ICE9PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IChcInNldFRlcm1zIHRha2VzIGFuIG9iamVjdCBvZiB0ZXJtL3ZhbHVlIHBhaXJzXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgdGVybTtcbiAgICAgICAgICAgICAgICBmb3IgKHRlcm0gaW4gdGVybXNPYmplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRlcm1zT2JqZWN0Lmhhc093blByb3BlcnR5KHRlcm0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFRlcm0odGVybSwgdGVybXNPYmplY3RbdGVybV0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAnZGVsZXRlVGVybSc6IHtcbiAgICAgICAgICAgICd2YWx1ZSc6IGZ1bmN0aW9uICh0ZXJtKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRUZXJtKHRlcm0sIHVuZGVmaW5lZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgICdnZXRUZXJtJzoge1xuICAgICAgICAgICAgJ3ZhbHVlJzogZnVuY3Rpb24gKHRlcm0pIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRlcm0gIT09IFwic3RyaW5nXCIgJiYgdGVybS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgKFwidGVybSBtdXN0IGJlIGEgc3RyaW5nXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcm9vdFt0ZXJtXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgJ2hhc1Rlcm0nOiB7XG4gICAgICAgICAgICAndmFsdWUnOiBmdW5jdGlvbiAodGVybSkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGVybSAhPT0gXCJzdHJpbmdcIiAmJiB0ZXJtLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyAoXCJ0ZXJtIG11c3QgYmUgYSBzdHJpbmdcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiByb290Lmhhc093blByb3BlcnR5KHRlcm0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAndG9KU09OJzoge1xuICAgICAgICAgICAgJ3ZhbHVlJzogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHJvb3QpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgJ3RvWE1MJzoge1xuICAgICAgICAgICAgJ3ZhbHVlJzogZnVuY3Rpb24gKGRvYykge1xuICAgICAgICAgICAgICAgIHZhciBub2RlO1xuICAgICAgICAgICAgICAgIGlmICghZG9jKSB7XG4gICAgICAgICAgICAgICAgICAgIGRvYyA9IGRvY3VtZW50LmltcGxlbWVudGF0aW9uLmNyZWF0ZURvY3VtZW50KG51bGwsIHN0b3JlTmFtZSwgbnVsbCk7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUgPSBkb2MuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZSA9IGRvYy5jcmVhdGVFbGVtZW50KHN0b3JlTmFtZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG9iamVjdFRvWE1MKHJvb3QsIG5vZGUsIGRvYyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExpbmtlZFN0b3JlO1xuIiwiLyoganNoaW50IGVzdmVyc2lvbjogNiAqL1xuaW1wb3J0IHtCYXNlUGx1Z2lufSBmcm9tIFwiLi4vQmFzZVBsdWdpbi9pbmRleFwiO1xuXG52YXIgU3ludGhlc2lzZXJCYXNlUGx1Z2luID0gZnVuY3Rpb24oZmFjdG9yeSwgb3duZXIpXG57XG4gICAgdmFyIGhhc1dhcm5lZFNjaGVkdWxlTm90U2V0ID0gZmFsc2U7XG4gICAgdmFyIGhhc1dhcm5lZENhbmNlbE5vdFNldCA9IGZhbHNlO1xuICAgIHZhciBlZGl0b3JUeXBlID0gXCJyb2xsXCI7XG4gICAgQmFzZVBsdWdpbi5jYWxsKHRoaXMsIGZhY3RvcnksIG93bmVyKTtcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgICAgXCJhZGRJbnB1dFwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHRocm93KFwiQ2Fubm90IGFkZCBpbnB1dCB0byB0eXBlIFxcXCJTeW50aGVzaXNlckJhc2VQbHVnaW5cXFwiXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImRlbGV0ZUlucHV0XCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdGhyb3coXCJDYW5ub3QgZGVsZXRlIGlucHV0IHRvIHR5cGUgXFxcIlN5bnRoZXNpc2VyQmFzZVBsdWdpblxcXCJcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwic2NoZWR1bGVFdmVudFwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uIChtc2csIGNvbnRleHRUaW1lKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFoYXNXYXJuZWRTY2hlZHVsZU5vdFNldCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm5pbmcoXCJXQVJOSU5HIC0gLnNjaGVkdWxlRXZlbnQgaXMgbm90IG92ZXJyaWRkZW5cIik7XG4gICAgICAgICAgICAgICAgICAgIGhhc1dhcm5lZFNjaGVkdWxlTm90U2V0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJ3cml0YWJsZVwiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwiY2FuY2VsQWxsRXZlbnRzXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFoYXNXYXJuZWRDYW5jZWxOb3RTZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuaW5nKFwiV0FSTklORyAtIC5jYW5jZWxBbGxFdmVudHMgaXMgbm90IG92ZXJyaWRkZW5cIik7XG4gICAgICAgICAgICAgICAgICAgIGhhc1dhcm5lZENhbmNlbE5vdFNldCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwid3JpdGFibGVcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcInNldEVkaXRvclR5cGVcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbih0eXBlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGUgPT0gXCJyb2xsXCIgfHwgdHlwZSA9PSBcImxpbmVcIiB8fCB0eXBlID09IFwic2VxdWVuY2VyXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgZWRpdG9yVHlwZSA9IHR5cGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBlZGl0b3JUeXBlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImdldEVkaXRvclR5cGVcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZWRpdG9yVHlwZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJpc05vdGVBY3RpdmVcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbihuKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBuID09IFwibnVtYmVyXCIgJiYgbiA+PSAwICYmIG4gPCAxMjgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIndyaXRhYmxlXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRBY3RpdmVOb3RlUHJvcGVydGllc1wiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZhciBvYmogPVtdO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIG49MDsgbjwxMjg7IG4rKykge1xuICAgICAgICAgICAgICAgICAgICBvYmoucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBuLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogdGhpcy5taWRpTm90ZVRvTmFtZShuKVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9iajtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIndyaXRhYmxlXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgJ21pZGlOb3RlVG9GcmVxdWVuY3knOiB7XG4gICAgICAgICAgICAndmFsdWUnOiBmdW5jdGlvbiAobSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBNYXRoLnBvdygyLjAsIChtLTY5KS8xMikqNDQwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAnZnJlcXVlbmN5VG9NaWRpTm90ZSc6IHtcbiAgICAgICAgICAgICd2YWx1ZSc6IGZ1bmN0aW9uIChmKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE1hdGgucm91bmQoMTIuMCpNYXRoLmxvZzIoZi80NDApKSs2OTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgJ21pZGlOb3RlVG9OYW1lJzoge1xuICAgICAgICAgICAgJ3ZhbHVlJzogZnVuY3Rpb24gKG0pIHtcbiAgICAgICAgICAgICAgICB2YXIgbm90ZXMgPSBbXCJBXCIsIFwiQSNcIiwgXCJCXCIsIFwiQ1wiLCBcIkMjXCIsIFwiRFwiLCBcIkQjXCIsIFwiRVwiLCBcIkZcIiwgXCJGI1wiLCBcIkdcIiwgXCJHI1wiXTtcbiAgICAgICAgICAgICAgICB2YXIgcm9vdCA9IG0tMjE7XG4gICAgICAgICAgICAgICAgdmFyIG9jdGF2ZSA9IE1hdGguZmxvb3Iocm9vdC8xMik7XG4gICAgICAgICAgICAgICAgdmFyIG5vdGUgPSBNYXRoLmZsb29yKChyb290KzM2KSUxMik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5vdGVzW25vdGVdICsgU3RyaW5nKG9jdGF2ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgICdub3RlTmFtZVRvTUlESSc6IHtcbiAgICAgICAgICAgICd2YWx1ZSc6IGZ1bmN0aW9uKG4pIHtcbiAgICAgICAgICAgICAgICB2YXIgbm90ZXMgPSBbXCJBXCIsIFwiQSNcIiwgXCJCXCIsIFwiQ1wiLCBcIkMjXCIsIFwiRFwiLCBcIkQjXCIsIFwiRVwiLCBcIkZcIiwgXCJGI1wiLCBcIkdcIiwgXCJHI1wiXTtcbiAgICAgICAgICAgICAgICB2YXIgb2N0YXZlID0gTnVtYmVyKG4uc2xpY2Uobi5sZW5ndGgtMSkpO1xuICAgICAgICAgICAgICAgIHZhciBub3RlID0gbm90ZXMuaW5kZXhPZihuLnNsaWNlKDAsbi5sZW5ndGgtMSkpO1xuICAgICAgICAgICAgICAgIHJldHVybiBvY3RhdmUqMTIgKyBub3RlICsgMjE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgfSk7XG59O1xuU3ludGhlc2lzZXJCYXNlUGx1Z2luLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoQmFzZVBsdWdpbi5wcm90b3R5cGUpO1xuU3ludGhlc2lzZXJCYXNlUGx1Z2luLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFN5bnRoZXNpc2VyQmFzZVBsdWdpbjtcblxuZXhwb3J0IHtTeW50aGVzaXNlckJhc2VQbHVnaW59O1xuIiwiLy8gVGhpcyBkZWZpbmVzIGEgbWFzdGVyIG9iamVjdCBmb3IgaG9sZGluZyBhbGwgdGhlIHBsdWdpbnMgYW5kIGNvbW11bmljYXRpbmdcbi8vIFRoaXMgb2JqZWN0IHdpbGwgYWxzbyBoYW5kbGUgY3JlYXRpb24gYW5kIGRlc3RydWN0aW9uIG9mIHBsdWdpbnNcbi8qZ2xvYmFscyBQcm9taXNlLCBkb2N1bWVudCwgY29uc29sZSwgTGlua2VkU3RvcmUsIFdvcmtlciwgd2luZG93LCBYTUxIdHRwUmVxdWVzdCAqL1xuLyplc2xpbnQtZW52IGJyb3dzZXIgKi9cbi8qIGpzaGludCBlc3ZlcnNpb246NiAqL1xuXG5pbXBvcnQge0Jhc2VQbHVnaW59IGZyb20gJy4vQmFzZVBsdWdpbic7XG5pbXBvcnQge1N5bnRoZXNpc2VyQmFzZVBsdWdpbn0gZnJvbSAnLi9TeW50aGVzaXNlckJhc2VQbHVnaW4nO1xuaW1wb3J0IFBsdWdpbkZhY3RvcnkgZnJvbSBcIi4vRmFjdG9yeS9QbHVnaW5GYWN0b3J5XCI7XG5cbmV4cG9ydCB7QmFzZVBsdWdpbiwgU3ludGhlc2lzZXJCYXNlUGx1Z2luLCBQbHVnaW5GYWN0b3J5fTtcbiIsImltcG9ydCB7QmFzZVBsdWdpbiwgU3ludGhlc2lzZXJCYXNlUGx1Z2luLCBQbHVnaW5GYWN0b3J5fSBmcm9tIFwiLi9pbmRleFwiO1xuXG4oZnVuY3Rpb24ocm9vdCwgZmFjdG9yeSkge1xuICAgIGNvbnNvbGUubG9nKFwiTG9hZCBKU0FQLi4uXCIpO1xuICAgIGlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImRlZmluZVwiKTtcbiAgICAgICAgZGVmaW5lKFwiSlNBUFwiLCBbXSwgZmFjdG9yeSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgbW9kdWxlID09IFwib2JqZWN0XCIgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJtb2R1bGVcIik7XG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZGlyZWN0XCIpO1xuICAgICAgICBpZiAocm9vdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByb290ID0gd2luZG93O1xuICAgICAgICB9XG4gICAgICAgIHJvb3QuSlNBUCA9IGZhY3RvcnkoKTtcbiAgICB9XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbiAgICBjb25zb2xlLmxvZyhcImZhY3RvcnlcIik7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgUGx1Z2luRmFjdG9yeTogUGx1Z2luRmFjdG9yeSxcbiAgICAgICAgQmFzZVBsdWdpbjogQmFzZVBsdWdpbixcbiAgICAgICAgU3ludGhlc2lzZXJCYXNlUGx1Z2luOiBTeW50aGVzaXNlckJhc2VQbHVnaW5cbiAgICB9O1xufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9