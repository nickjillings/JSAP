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
        return name.split(".").reduce(function(base, name) {
            return base[name];
        }, self);
    }

    function isParameterNameAvailable(self, name) {
        if (!/^\w+( \w+)*$/.test(name)) {
            throw "Invalid string for name";
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
            param.addEventListener("parameterset", self);
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

/***/ "./src/Factory/PluginAsset.js":
/*!************************************!*\
  !*** ./src/Factory/PluginAsset.js ***!
  \************************************/
/*! exports provided: PluginAsset */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PluginAsset", function() { return PluginAsset; });
/*eslint-env browser */
/* jshint esversion:6 */

function PluginAsset(factoryContext, name, url, assetObject) {

    function fetchAsset() {
        p = fetch(url).then(function(r) {
            return r.arrayBuffer();
        }).then(function(ab) {
            return factoryContext.context.decodeAudioData(ab);
        }).then(function(ab) {
            assetObject = ab;
            p = undefined;
            return assetObject;
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

/***/ "./src/Factory/PluginAssetManager.js":
/*!*******************************************!*\
  !*** ./src/Factory/PluginAssetManager.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PluginAssetManager; });
/* harmony import */ var _PluginAssetsList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PluginAssetsList.js */ "./src/Factory/PluginAssetsList.js");
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
        var assetPack = new _PluginAssetsList_js__WEBPACK_IMPORTED_MODULE_0__["PluginAssetsList"](factoryContext, name, resourceType);
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
/* harmony import */ var _PluginAsset_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PluginAsset.js */ "./src/Factory/PluginAsset.js");
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
/* harmony import */ var _PluginAssetManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PluginAssetManager */ "./src/Factory/PluginAssetManager.js");
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

    this.pluginAssets = new _PluginAssetManager__WEBPACK_IMPORTED_MODULE_1__["default"](this);

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
        'addTerm': {
            'value': function (term, value) {
                if (typeof term !== "string" && term.length === 0) {
                    throw ("term must be a string");
                }
                root[term] = value;
                et.dispatchEvent(new CustomEvent("altered", {detail:{term: term, value: value}}));
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
    var minimumActiveNote = 0;
    var maximumActiveNote = 127;
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
        "getMaximumActiveNote": {
            "value": function () {
                return maximumActiveNote;
            }
        },
        "getMinimumActiveNote": {
            "value": function () {
                return minimumActiveNote;
            }
        },
        "setMaximumActiveNote": {
            "value": function(n) {
                if (n <= minimumActiveNote) {
                    throw "Cannot set equal-to or below minimum active note";
                }
                maximumActiveNote = n;
                return maximumActiveNote;
            }
        },
        "setMinimumActiveNote": {
            "value": function(n) {
                if (n >= maximumActiveNote) {
                    throw "Cannot set equal-to or above maximum active note";
                }
                minimumActiveNote = n;
                return minimumActiveNote;
            }
        }
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

// Load jsXtract
(function() {
    if (window.jsXtract === undefined) {
        var s = document.createElement("script");
        s.src = "https://gitcdn.xyz/repo/nickjillings/js-xtract/master/jsXtract.js";
        document.getElementsByTagName("head")[0].appendChild(s);
    }
})();








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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9KU0FQL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0pTQVAvKHdlYnBhY2spL2J1aWxkaW4vYW1kLW9wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vSlNBUC8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vSlNBUC8od2VicGFjaykvYnVpbGRpbi9oYXJtb255LW1vZHVsZS5qcyIsIndlYnBhY2s6Ly9KU0FQLy4vc3JjL0Jhc2VQbHVnaW4vTGlua2VkU3RvcmVJbnRlcmZhY2UuanMiLCJ3ZWJwYWNrOi8vSlNBUC8uL3NyYy9CYXNlUGx1Z2luL1BsdWdpbkZlYXR1cmVJbnRlcmZhY2UvUGx1Z2luRmVhdHVyZUludGVyZmFjZVJlY2VpdmVyLmpzIiwid2VicGFjazovL0pTQVAvLi9zcmMvQmFzZVBsdWdpbi9QbHVnaW5GZWF0dXJlSW50ZXJmYWNlL1BsdWdpbkZlYXR1cmVJbnRlcmZhY2VTZW5kZXIuanMiLCJ3ZWJwYWNrOi8vSlNBUC8uL3NyYy9CYXNlUGx1Z2luL1BsdWdpbkZlYXR1cmVJbnRlcmZhY2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vSlNBUC8uL3NyYy9CYXNlUGx1Z2luL1BsdWdpbkludGVyZmFjZU1lc3NhZ2VIdWIuanMiLCJ3ZWJwYWNrOi8vSlNBUC8uL3NyYy9CYXNlUGx1Z2luL1BsdWdpblVzZXJJbnRlcmZhY2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vSlNBUC8uL3NyYy9CYXNlUGx1Z2luL2luZGV4LmpzIiwid2VicGFjazovL0pTQVAvLi9zcmMvQmFzZVBsdWdpbi9wYXJhbWV0ZXJNYW5hZ2VyLmpzIiwid2VicGFjazovL0pTQVAvLi9zcmMvQmFzZVBsdWdpbi9wYXJhbWV0ZXJzL0Fzc2V0UGFyYW1ldGVyLmpzIiwid2VicGFjazovL0pTQVAvLi9zcmMvQmFzZVBsdWdpbi9wYXJhbWV0ZXJzL0J1dHRvblBhcmFtZXRlci5qcyIsIndlYnBhY2s6Ly9KU0FQLy4vc3JjL0Jhc2VQbHVnaW4vcGFyYW1ldGVycy9MaXN0UGFyYW1ldGVyLmpzIiwid2VicGFjazovL0pTQVAvLi9zcmMvQmFzZVBsdWdpbi9wYXJhbWV0ZXJzL051bWJlclBhcmFtZXRlci5qcyIsIndlYnBhY2s6Ly9KU0FQLy4vc3JjL0Jhc2VQbHVnaW4vcGFyYW1ldGVycy9QYXJhbWV0ZXJBdXRvbWF0aW9uLmpzIiwid2VicGFjazovL0pTQVAvLi9zcmMvQmFzZVBsdWdpbi9wYXJhbWV0ZXJzL1BsdWdpblBhcmFtZXRlci5qcyIsIndlYnBhY2s6Ly9KU0FQLy4vc3JjL0Jhc2VQbHVnaW4vcGFyYW1ldGVycy9TdHJpbmdQYXJhbWV0ZXIuanMiLCJ3ZWJwYWNrOi8vSlNBUC8uL3NyYy9CYXNlUGx1Z2luL3BhcmFtZXRlcnMvU3dpdGNoUGFyYW1ldGVyLmpzIiwid2VicGFjazovL0pTQVAvLi9zcmMvQmFzZVBsdWdpbi9wYXJhbWV0ZXJzL1VSTFBhcmFtZXRlci5qcyIsIndlYnBhY2s6Ly9KU0FQLy4vc3JjL0ZhY3RvcnkvQXVkaW9QbHVnaW5DaGFpbk1hbmFnZXIvU3ViRmFjdG9yeUZlYXR1cmVTZW5kZXIvRXh0cmFjdG9yLmpzIiwid2VicGFjazovL0pTQVAvLi9zcmMvRmFjdG9yeS9BdWRpb1BsdWdpbkNoYWluTWFuYWdlci9TdWJGYWN0b3J5RmVhdHVyZVNlbmRlci9PdXRwdXROb2RlLmpzIiwid2VicGFjazovL0pTQVAvLi9zcmMvRmFjdG9yeS9BdWRpb1BsdWdpbkNoYWluTWFuYWdlci9TdWJGYWN0b3J5RmVhdHVyZVNlbmRlci9Xb3JrZXJFeHRyYWN0b3IuanMiLCJ3ZWJwYWNrOi8vSlNBUC8uL3NyYy9GYWN0b3J5L0F1ZGlvUGx1Z2luQ2hhaW5NYW5hZ2VyL1N1YkZhY3RvcnlGZWF0dXJlU2VuZGVyL2luZGV4LmpzIiwid2VicGFjazovL0pTQVAvLi9zcmMvRmFjdG9yeS9BdWRpb1BsdWdpbkNoYWluTWFuYWdlci9pbmRleC5qcyIsIndlYnBhY2s6Ly9KU0FQLy4vc3JjL0ZhY3RvcnkvRmVhdHVyZU1hcC9GZWF0dXJlTm9kZS5qcyIsIndlYnBhY2s6Ly9KU0FQLy4vc3JjL0ZhY3RvcnkvRmVhdHVyZU1hcC9SZXF1ZXN0b3JNYXAuanMiLCJ3ZWJwYWNrOi8vSlNBUC8uL3NyYy9GYWN0b3J5L0ZlYXR1cmVNYXAvU291cmNlTWFwLmpzIiwid2VicGFjazovL0pTQVAvLi9zcmMvRmFjdG9yeS9GZWF0dXJlTWFwL2luZGV4LmpzIiwid2VicGFjazovL0pTQVAvLi9zcmMvRmFjdG9yeS9NaWRpU3ludGhlc2lzSW5zdGFuY2UuanMiLCJ3ZWJwYWNrOi8vSlNBUC8uL3NyYy9GYWN0b3J5L01pZGlTeW50aGVzaXNlckhvc3QuanMiLCJ3ZWJwYWNrOi8vSlNBUC8uL3NyYy9GYWN0b3J5L1BsdWdpbkFzc2V0LmpzIiwid2VicGFjazovL0pTQVAvLi9zcmMvRmFjdG9yeS9QbHVnaW5Bc3NldE1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vSlNBUC8uL3NyYy9GYWN0b3J5L1BsdWdpbkFzc2V0c0xpc3QuanMiLCJ3ZWJwYWNrOi8vSlNBUC8uL3NyYy9GYWN0b3J5L1BsdWdpbkZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vSlNBUC8uL3NyYy9GYWN0b3J5L1BsdWdpbkluc3RhbmNlLmpzIiwid2VicGFjazovL0pTQVAvLi9zcmMvRmFjdG9yeS9QbHVnaW5Qcm90b3R5cGUuanMiLCJ3ZWJwYWNrOi8vSlNBUC8uL3NyYy9GYWN0b3J5L1BsdWdpblVzZXJJbnRlcmZhY2VNZXNzYWdlSHViLmpzIiwid2VicGFjazovL0pTQVAvLi9zcmMvTGlua2VkU3RvcmUuanMiLCJ3ZWJwYWNrOi8vSlNBUC8uL3NyYy9TeW50aGVzaXNlckJhc2VQbHVnaW4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vSlNBUC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9KU0FQLy4vc3JjL21vZHVsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNB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RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsK0VBQXVCO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekIscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSx3Q0FBd0MsbUVBQWU7QUFDdkQ7O0FBRXVCOzs7Ozs7Ozs7Ozs7O0FDekx2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ3FEO0FBQ2M7O0FBRW5FO0FBQ0EsSUFBSSxtRUFBZTtBQUNuQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsaUZBQXlCO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekIscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsMENBQTBDLG1FQUFlO0FBQ3pEOztBQUV5Qjs7Ozs7Ozs7Ozs7OztBQzdLekI7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRTREOzs7Ozs7Ozs7Ozs7O0FDMVU1RDtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsT0FBTztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNB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Q0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7Ozs7Ozs7Ozs7O0FDOUNBO0FBQUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2REFBNkQsUUFBUSwwQkFBMEI7QUFDL0Y7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRWUsMEVBQVcsRUFBQzs7Ozs7Ozs7Ozs7OztBQ3RKM0I7QUFBQTtBQUFBO0FBQUE7QUFDK0M7O0FBRS9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSw0REFBVTs7QUFFZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxnREFBZ0QsNERBQVU7QUFDMUQ7O0FBRStCOzs7Ozs7Ozs7Ozs7O0FDdkYvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUV1QztBQUNzQjtBQUNWOztBQUVNOzs7Ozs7Ozs7Ozs7O0FDbkIxRDtBQUFBO0FBQXlFOztBQUV6RTtBQUNBO0FBQ0Esd0NBQXdDLGdHQUFVO0FBQ2xEO0FBQ0E7QUFDQSxLQUFLLFVBQVUsS0FBeUI7QUFDeEM7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUUsU0FBSTtBQUNQO0FBQ0E7QUFDQSx1QkFBdUIsb0RBQWE7QUFDcEMsb0JBQW9CLGlEQUFVO0FBQzlCLCtCQUErQiw0REFBcUI7QUFDcEQ7QUFDQSxDQUFDIiwiZmlsZSI6IkpTQVAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9tb2R1bGUuanNcIik7XG4iLCIvKiBnbG9iYWxzIF9fd2VicGFja19hbWRfb3B0aW9uc19fICovXG5tb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19hbWRfb3B0aW9uc19fO1xuIiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvcmlnaW5hbE1vZHVsZSkge1xuXHRpZiAoIW9yaWdpbmFsTW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xuXHRcdHZhciBtb2R1bGUgPSBPYmplY3QuY3JlYXRlKG9yaWdpbmFsTW9kdWxlKTtcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcblx0XHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJleHBvcnRzXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWVcblx0XHR9KTtcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcblx0fVxuXHRyZXR1cm4gbW9kdWxlO1xufTtcbiIsIi8qIGpzaGludCBlc3ZlcnNpb246IDYgKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGlua2VkU3RvcmVJbnRlcmZhY2Uob3duZXIsIGxpbmtlZFN0b3JlKSB7XG4gICAgZnVuY3Rpb24gb25hbHRlcmVkKGUpIHtcbiAgICAgICAgdmFyIHRlcm0gPSBlLmRldGFpbC50ZXJtO1xuICAgICAgICB2YXIgdmFsdWUgPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgICAgaWYgKGxpc3RlbmVyc1t0ZXJtXSAmJiB0eXBlb2YgbGlzdGVuZXJzW3Rlcm1dID09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgbGlzdGVuZXJzW3Rlcm1dLmNhbGwob3duZXIsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZhciBsaXN0ZW5lcnMgPSB7fTtcblxuICAgIGxpbmtlZFN0b3JlLmFkZEV2ZW50TGlzdGVuZXIoXCJhbHRlcmVkXCIsIG9uYWx0ZXJlZCk7XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XG4gICAgICAgIFwiZGVzdHJveVwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBsaW5rZWRTdG9yZS5yZW1vdmVFdmVudExpc3RlbmVyKFwiYWx0ZXJlZFwiLCBvbmFsdGVyZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInJlcXVlc3RUZXJtXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKHRlcm0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbGlua2VkU3RvcmUuZ2V0VGVybSh0ZXJtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJsaXN0ZW5Gb3JUZXJtXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24odGVybSwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICBpZiAobGlzdGVuZXJzLmhhc093blByb3BlcnR5KHRlcm0pKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IFwiTGlzdGVuZXIgYWxyZWFkeSBleGlzdHNcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGlzdGVuZXJzW3Rlcm1dID0gY2FsbGJhY2s7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwicmVsZWFzZUxpc3RlbmVyRm9yVGVybVwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKHRlcm0pIHtcbiAgICAgICAgICAgICAgICBsaXN0ZW5lcnNbdGVybV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbiIsIi8qIGpzaGludCBlc3ZlcnNpb246IDYgKi9cbnZhciBQbHVnaW5GZWF0dXJlSW50ZXJmYWNlUmVjZWl2ZXIgPSBmdW5jdGlvbiAoRmVhdHVyZUludGVyZmFjZUluc3RhbmNlLCBGYWN0b3J5RmVhdHVyZU1hcCkge1xuICAgIGZ1bmN0aW9uIGNoZWNrRmVhdHVyZUFyZ3Moc291cmNlLCBmZWF0dXJlT2JqZWN0KSB7XG4gICAgICAgIGlmIChzb3VyY2UgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhyb3cgKFwiU291cmNlIHBsdWdpbiBtdXN0IGJlIGRlZmluZWRcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZlYXR1cmVPYmplY3QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhyb3cgKFwiRmVhdHVyZU9iamVjdCBtdXN0IGJlIGRlZmluZWRcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBmZWF0dXJlT2JqZWN0Lm91dHB1dEluZGV4ICE9PSBcIm51bWJlclwiIHx8IHR5cGVvZiBmZWF0dXJlT2JqZWN0LmZyYW1lU2l6ZSAhPT0gXCJudW1iZXJcIiB8fCB0eXBlb2YgZmVhdHVyZU9iamVjdC5mZWF0dXJlcyAhPT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgdGhyb3cgKFwiTWFsZm9ybWVkIGZlYXR1cmVPYmplY3RcIik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHZhciBjX2ZlYXR1cmVzID0gZnVuY3Rpb24gKCkge307XG4gICAgdGhpcy5yZXF1ZXN0RmVhdHVyZXMgPSBmdW5jdGlvbiAoZmVhdHVyZUxpc3QpIHtcbiAgICAgICAgdmFyIGk7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBmZWF0dXJlTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5yZXF1ZXN0RmVhdHVyZXNGcm9tUGx1Z2luKGZlYXR1cmVMaXN0W2ldLnBsdWdpbiwge1xuICAgICAgICAgICAgICAgICdvdXRwdXRJbmRleCc6IGZlYXR1cmVMaXN0W2ldLm91dHB1dEluZGV4LFxuICAgICAgICAgICAgICAgICdmcmFtZVNpemUnOiBmZWF0dXJlTGlzdFtpXS5mcmFtZVNpemUsXG4gICAgICAgICAgICAgICAgJ2ZlYXR1cmVzJzogZmVhdHVyZUxpc3RbaV0uZmVhdHVyZXNcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICB0aGlzLnJlcXVlc3RGZWF0dXJlc0Zyb21QbHVnaW4gPSBmdW5jdGlvbiAoc291cmNlLCBmZWF0dXJlT2JqZWN0KSB7XG4gICAgICAgIGNoZWNrRmVhdHVyZUFyZ3Moc291cmNlLCBmZWF0dXJlT2JqZWN0KTtcbiAgICAgICAgRmFjdG9yeUZlYXR1cmVNYXAucmVxdWVzdEZlYXR1cmVzKEZlYXR1cmVJbnRlcmZhY2VJbnN0YW5jZS5wbHVnaW4sIHNvdXJjZSwgZmVhdHVyZU9iamVjdCk7XG4gICAgfTtcbiAgICB0aGlzLmNhbmNlbEZlYXR1cmVzRnJvbVBsdWdpbiA9IGZ1bmN0aW9uIChzb3VyY2UsIGZlYXR1cmVPYmplY3QpIHtcbiAgICAgICAgY2hlY2tGZWF0dXJlQXJncyhzb3VyY2UsIGZlYXR1cmVPYmplY3QpO1xuICAgICAgICBGYWN0b3J5RmVhdHVyZU1hcC5kZWxldGVGZWF0dXJlcyhGZWF0dXJlSW50ZXJmYWNlSW5zdGFuY2UucGx1Z2luLCBzb3VyY2UsIGZlYXR1cmVPYmplY3QpO1xuICAgIH07XG4gICAgdGhpcy5jYW5jZWxBbGxGZWF0dXJlc0Zyb21QbHVnaW4gPSBmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICAgIGlmIChzb3VyY2UgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhyb3cgKFwiU291cmNlIHBsdWdpbiBtdXN0IGJlIGRlZmluZWRcIik7XG4gICAgICAgIH1cbiAgICAgICAgRmFjdG9yeUZlYXR1cmVNYXAuZGVsZXRlRmVhdHVyZXMoRmVhdHVyZUludGVyZmFjZUluc3RhbmNlLnBsdWdpbiwgc291cmNlKTtcbiAgICB9O1xuICAgIHRoaXMuY2FuY2VsQWxsRmVhdHVyZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIEZhY3RvcnlGZWF0dXJlTWFwLmRlbGV0ZUZlYXR1cmVzKEZlYXR1cmVJbnRlcmZhY2VJbnN0YW5jZS5wbHVnaW4pO1xuICAgIH07XG5cbiAgICB0aGlzLnBvc3RGZWF0dXJlcyA9IGZ1bmN0aW9uIChNZXNzYWdlKSB7XG4gICAgICAgIC8qXG4gICAgICAgICAgICBDYWxsZWQgYnkgdGhlIFBsdWdpbiBGYWN0b3J5IHdpdGggdGhlIGZlYXR1cmUgbWVzc2FnZVxuICAgICAgICAgICAgbWVzc2FnZSA9IHtcbiAgICAgICAgICAgICAgICAncGx1Z2luJzogc291cmNlUGx1Z2luSW5zdGFuY2UsXG4gICAgICAgICAgICAgICAgJ291dHB1dEluZGV4Jzogb3V0cHV0SW5kZXgsXG4gICAgICAgICAgICAgICAgJ2ZyYW1lU2l6ZSc6IGZyYW1lU2l6ZSxcbiAgICAgICAgICAgICAgICAnZmVhdHVyZXMnOiB7fSBKUy1YdHJhY3QgZmVhdHVyZSByZXN1bHRzIG9iamVjdFxuICAgICAgICAgICAgfVxuICAgICAgICAqL1xuICAgICAgICBpZiAodHlwZW9mIGNfZmVhdHVyZXMgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgY19mZWF0dXJlcyhNZXNzYWdlKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgXCJvbmZlYXR1cmVzXCIsIHtcbiAgICAgICAgJ2dldCc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBjX2ZlYXR1cmVzO1xuICAgICAgICB9LFxuICAgICAgICAnc2V0JzogZnVuY3Rpb24gKGZ1bmMpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZnVuYyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgY19mZWF0dXJlcyA9IGZ1bmM7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9KTtcblxufTtcblxuZXhwb3J0IHtQbHVnaW5GZWF0dXJlSW50ZXJmYWNlUmVjZWl2ZXJ9O1xuIiwiLyoganNoaW50IGVzdmVyc2lvbjogNiAqL1xuXG52YXIgUGx1Z2luRmVhdHVyZUludGVyZmFjZVNlbmRlciA9IGZ1bmN0aW9uIChGZWF0dXJlSW50ZXJmYWNlSW5zdGFuY2UsIEZhY3RvcnlGZWF0dXJlTWFwKSB7XG4gICAgdmFyIE91dHB1dE5vZGUgPSBmdW5jdGlvbiAocGFyZW50LCBvdXRwdXQsIGluZGV4KSB7XG4gICAgICAgIHZhciBleHRyYWN0b3JzID0gW107XG4gICAgICAgIHZhciBFeHRyYWN0b3IgPSBmdW5jdGlvbiAob3V0cHV0LCBmcmFtZVNpemUpIHtcbiAgICAgICAgICAgIHRoaXMuZXh0cmFjdG9yID0gRmVhdHVyZUludGVyZmFjZUluc3RhbmNlLnBsdWdpbi5mYWN0b3J5LmNvbnRleHQuY3JlYXRlQW5hbHlzZXIoKTtcbiAgICAgICAgICAgIHRoaXMuZXh0cmFjdG9yLmZmdFNpemUgPSBmcmFtZVNpemU7XG4gICAgICAgICAgICBvdXRwdXQuY29ubmVjdCh0aGlzLmV4dHJhY3Rvcik7XG4gICAgICAgICAgICB0aGlzLmZlYXR1cmVzID0gW107XG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgXCJmcmFtZVNpemVcIiwge1xuICAgICAgICAgICAgICAgICd2YWx1ZSc6IGZyYW1lU2l6ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvKlxuICAgICAgICAgICAgZnVuY3Rpb24gcmVjdXJzaXZlUHJvY2Vzc2luZyhiYXNlLCBsaXN0KSB7XG4gICAgICAgICAgICAgICAgdmFyIGwgPSBsaXN0Lmxlbmd0aCxcbiAgICAgICAgICAgICAgICAgICAgaSwgZW50cnk7XG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBlbnRyeSA9IGxpc3RbaV07XG4gICAgICAgICAgICAgICAgICAgIGJhc2VbZW50cnkubmFtZV0uYXBwbHkoYmFzZSwgZW50cnkucGFyYW1ldGVycyk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlbnRyeS5mZWF0dXJlcyAmJiBlbnRyeS5mZWF0dXJlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWN1cnNpdmVQcm9jZXNzaW5nKGJhc2UucmVzdWx0W2VudHJ5Lm5hbWVdLCBlbnRyeS5mZWF0dXJlcyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAqL1xuICAgICAgICAgICAgdmFyIHJlY3Vyc2l2ZVByb2Nlc3NpbmcgPSB0aGlzLmZhY3RvcnkucmVjdXJzaXZlUHJvY2Vzc2luZztcblxuICAgICAgICAgICAgZnVuY3Rpb24gb25hdWRpb2NhbGxiYWNrKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAvL3RoaXMgPT09IEV4dHJhY3RvclxuICAgICAgICAgICAgICAgIHZhciBtZXNzYWdlID0ge1xuICAgICAgICAgICAgICAgICAgICAnbnVtYmVyT2ZDaGFubmVscyc6IDEsXG4gICAgICAgICAgICAgICAgICAgICdyZXN1bHRzJzogW11cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHJlY3Vyc2l2ZVByb2Nlc3NpbmcoZGF0YSwgdGhpcy5mZWF0dXJlcyk7XG4gICAgICAgICAgICAgICAgbWVzc2FnZS5yZXN1bHRzWzBdID0ge1xuICAgICAgICAgICAgICAgICAgICAnY2hhbm5lbCc6IDAsXG4gICAgICAgICAgICAgICAgICAgICdyZXN1bHRzJzogSlNPTi5wYXJzZShkYXRhLnRvSlNPTigpKVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgdGhpcy5wb3N0RmVhdHVyZXMoZGF0YS5sZW5ndGgsIG1lc3NhZ2UpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnNldEZlYXR1cmVzID0gZnVuY3Rpb24gKGZlYXR1cmVMaXN0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5mZWF0dXJlcyA9IGZlYXR1cmVMaXN0O1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZlYXR1cmVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmV4dHJhY3Rvci5jbGVhckNhbGxiYWNrKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5leHRyYWN0b3IuZnJhbWVDYWxsYmFjayhvbmF1ZGlvY2FsbGJhY2ssIHRoaXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgICAgIHZhciBXb3JrZXJFeHRyYWN0b3IgPSBmdW5jdGlvbiAob3V0cHV0LCBmcmFtZVNpemUpIHtcbiAgICAgICAgICAgIGZ1bmN0aW9uIG9uYXVkaW9jYWxsYmFjayhlKSB7XG4gICAgICAgICAgICAgICAgdmFyIGMsIGZyYW1lcyA9IFtdO1xuICAgICAgICAgICAgICAgIGZvciAoYyA9IDA7IGMgPCBlLmlucHV0QnVmZmVyLm51bWJlck9mQ2hhbm5lbHM7IGMrKykge1xuICAgICAgICAgICAgICAgICAgICBmcmFtZXNbY10gPSBlLmlucHV0QnVmZmVyLmdldENoYW5uZWxEYXRhKGMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB3b3JrZXIucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgICAgICAgICAnc3RhdGUnOiAyLFxuICAgICAgICAgICAgICAgICAgICAnZnJhbWVzJzogZnJhbWVzXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIHJlc3BvbnNlKG1zZykge1xuICAgICAgICAgICAgICAgIHRoaXMucG9zdEZlYXR1cmVzKGZyYW1lU2l6ZSwgbXNnLmRhdGEucmVzcG9uc2UpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgd29ya2VyID0gbmV3IFdvcmtlcihcImpzYXAvZmVhdHVyZS13b3JrZXIuanNcIik7XG4gICAgICAgICAgICB3b3JrZXIub25lcnJvciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHRoaXMuc2V0RmVhdHVyZXMgPSBmdW5jdGlvbiAoZmVhdHVyZUxpc3QpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgICAgICAgICAgdmFyIGNvbmZpZ01lc3NhZ2UgPSB7XG4gICAgICAgICAgICAgICAgICAgICdzdGF0ZSc6IDEsXG4gICAgICAgICAgICAgICAgICAgICdzYW1wbGVSYXRlJzogRmVhdHVyZUludGVyZmFjZUluc3RhbmNlLnBsdWdpbi5mYWN0b3J5LmNvbnRleHQuc2FtcGxlUmF0ZSxcbiAgICAgICAgICAgICAgICAgICAgJ2ZlYXR1cmVMaXN0JzogZmVhdHVyZUxpc3QsXG4gICAgICAgICAgICAgICAgICAgICdudW1DaGFubmVscyc6IG91dHB1dC5udW1iZXJPZk91dHB1dHMsXG4gICAgICAgICAgICAgICAgICAgICdmcmFtZVNpemUnOiB0aGlzLmZyYW1lU2l6ZVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgdGhpcy5mZWF0dXJlcyA9IGZlYXR1cmVMaXN0O1xuICAgICAgICAgICAgICAgIGlmIChmZWF0dXJlTGlzdCAmJiBmZWF0dXJlTGlzdC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHdvcmtlci5vbm1lc3NhZ2UgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUuZGF0YS5zdGF0ZSA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtlci5vbm1lc3NhZ2UgPSByZXNwb25zZS5iaW5kKHNlbGYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuZXh0cmFjdG9yLm9uYXVkaW9wcm9jZXNzID0gb25hdWRpb2NhbGxiYWNrLmJpbmQoc2VsZik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtlci5wb3N0TWVzc2FnZShjb25maWdNZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgd29ya2VyLnBvc3RNZXNzYWdlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdzdGF0ZSc6IDBcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5leHRyYWN0b3Iub25hdWRpb3Byb2Nlc3MgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB0aGlzLmV4dHJhY3RvciA9IEZlYXR1cmVJbnRlcmZhY2VJbnN0YW5jZS5wbHVnaW4uZmFjdG9yeS5jb250ZXh0LmNyZWF0ZVNjcmlwdFByb2Nlc3NvcihmcmFtZVNpemUsIG91dHB1dC5udW1iZXJPZk91dHB1dHMsIDEpO1xuICAgICAgICAgICAgb3V0cHV0LmNvbm5lY3QodGhpcy5leHRyYWN0b3IpO1xuICAgICAgICAgICAgdGhpcy5leHRyYWN0b3IuY29ubmVjdChGZWF0dXJlSW50ZXJmYWNlSW5zdGFuY2UucGx1Z2luLmZhY3RvcnkuY29udGV4dC5kZXN0aW5hdGlvbik7XG5cbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImZyYW1lU2l6ZVwiLCB7XG4gICAgICAgICAgICAgICAgJ3ZhbHVlJzogZnJhbWVTaXplXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5hZGRFeHRyYWN0b3IgPSBmdW5jdGlvbiAoZnJhbWVTaXplKSB7XG4gICAgICAgICAgICB2YXIgb2JqO1xuICAgICAgICAgICAgaWYgKHdpbmRvdy5Xb3JrZXIpIHtcbiAgICAgICAgICAgICAgICBvYmogPSBuZXcgV29ya2VyRXh0cmFjdG9yKG91dHB1dCwgZnJhbWVTaXplKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgb2JqID0gbmV3IEV4dHJhY3RvcihvdXRwdXQsIGZyYW1lU2l6ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBleHRyYWN0b3JzLnB1c2gob2JqKTtcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIFwicG9zdEZlYXR1cmVzXCIsIHtcbiAgICAgICAgICAgICAgICAndmFsdWUnOiBmdW5jdGlvbiAoZnJhbWVTaXplLCByZXN1bHRzSlNPTikge1xuICAgICAgICAgICAgICAgICAgICB2YXIgb2JqID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ291dHB1dEluZGV4JzogaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAnZnJhbWVTaXplJzogZnJhbWVTaXplLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3Jlc3VsdHMnOiByZXN1bHRzSlNPTlxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvc3RGZWF0dXJlcyhvYmopO1xuICAgICAgICAgICAgICAgIH0uYmluZCh0aGlzKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gb2JqO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmZpbmRFeHRyYWN0b3IgPSBmdW5jdGlvbiAoZnJhbWVTaXplKSB7XG4gICAgICAgICAgICB2YXIgY2hlY2sgPSBmcmFtZVNpemU7XG4gICAgICAgICAgICByZXR1cm4gZXh0cmFjdG9ycy5maW5kKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgLy8gVGhpcyBNVVNUIGJlID09PSBOT1QgPT09XG4gICAgICAgICAgICAgICAgcmV0dXJuIGUuZnJhbWVTaXplID09PSBjaGVjaztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmRlbGV0ZUV4dHJhY3RvciA9IGZ1bmN0aW9uIChmcmFtZVNpemUpIHt9O1xuICAgIH07XG4gICAgdmFyIG91dHB1dE5vZGVzID0gW107XG4gICAgdGhpcy51cGRhdGVGZWF0dXJlcyA9IGZ1bmN0aW9uIChmZWF0dXJlT2JqZWN0KSB7XG4gICAgICAgIC8vIFtdIE91dHB1dCAtPiB7fSAnZnJhbWVzaXplJyAtPiB7fSAnZmVhdHVyZXMnXG4gICAgICAgIHZhciBvO1xuICAgICAgICBmb3IgKG8gPSAwOyBvIDwgZmVhdHVyZU9iamVjdC5sZW5ndGg7IG8rKykge1xuICAgICAgICAgICAgaWYgKG91dHB1dE5vZGVzW29dID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBpZiAobyA+IEZlYXR1cmVJbnRlcmZhY2VJbnN0YW5jZS5wbHVnaW4ubnVtT3V0cHV0cykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyAoXCJSZXF1ZXN0ZWQgYW4gb3V0cHV0IHRoYXQgZG9lcyBub3QgZXhpc3RcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG91dHB1dE5vZGVzW29dID0gbmV3IE91dHB1dE5vZGUoRmVhdHVyZUludGVyZmFjZUluc3RhbmNlLnBsdWdpbiwgRmVhdHVyZUludGVyZmFjZUluc3RhbmNlLnBsdWdpbi5vdXRwdXRzW29dLCBvKTtcbiAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob3V0cHV0Tm9kZXNbb10sIFwicG9zdEZlYXR1cmVzXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgJ3ZhbHVlJzogZnVuY3Rpb24gKHJlc3VsdE9iamVjdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3N0RmVhdHVyZXMocmVzdWx0T2JqZWN0KTtcbiAgICAgICAgICAgICAgICAgICAgfS5iaW5kKHRoaXMpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgc2k7XG4gICAgICAgICAgICBmb3IgKHNpID0gMDsgc2kgPCBmZWF0dXJlT2JqZWN0W29dLmxlbmd0aDsgc2krKykge1xuICAgICAgICAgICAgICAgIHZhciBleHRyYWN0b3IgPSBvdXRwdXROb2Rlc1tvXS5maW5kRXh0cmFjdG9yKGZlYXR1cmVPYmplY3Rbb11bc2ldLmZyYW1lU2l6ZSk7XG4gICAgICAgICAgICAgICAgaWYgKCFleHRyYWN0b3IpIHtcbiAgICAgICAgICAgICAgICAgICAgZXh0cmFjdG9yID0gb3V0cHV0Tm9kZXNbb10uYWRkRXh0cmFjdG9yKGZlYXR1cmVPYmplY3Rbb11bc2ldLmZyYW1lU2l6ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGV4dHJhY3Rvci5zZXRGZWF0dXJlcyhmZWF0dXJlT2JqZWN0W29dW3NpXS5mZWF0dXJlTGlzdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgdGhpcy5wb3N0RmVhdHVyZXMgPSBmdW5jdGlvbiAoZmVhdHVyZU9iamVjdCkge1xuICAgICAgICAvKlxuICAgICAgICAgICAgQ2FsbGVkIGJ5IHRoZSBpbmRpdmlkdWFsIGV4dHJhY3RvciBpbnN0YW5jZXM6XG4gICAgICAgICAgICBmZWF0dXJlT2JqZWN0ID0geydmcmFtZVNpemUnOiBmcmFtZVNpemUsXG4gICAgICAgICAgICAnb3V0cHV0SW5kZXgnOiBvdXRwdXRJbmRleCxcbiAgICAgICAgICAgICdyZXN1bHRzJzpbXX1cbiAgICAgICAgKi9cbiAgICAgICAgRmVhdHVyZUludGVyZmFjZUluc3RhbmNlLnBsdWdpbi5mYWN0b3J5LkZlYXR1cmVNYXAucG9zdEZlYXR1cmVzKHtcbiAgICAgICAgICAgICdwbHVnaW4nOiBGZWF0dXJlSW50ZXJmYWNlSW5zdGFuY2UucGx1Z2luLnBsdWdpbkluc3RhbmNlLFxuICAgICAgICAgICAgJ291dHB1dEluZGV4JzogZmVhdHVyZU9iamVjdC5vdXRwdXRJbmRleCxcbiAgICAgICAgICAgICdmcmFtZVNpemUnOiBmZWF0dXJlT2JqZWN0LmZyYW1lU2l6ZSxcbiAgICAgICAgICAgICdyZXN1bHRzJzogZmVhdHVyZU9iamVjdC5yZXN1bHRzXG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvLyBTZW5kIHRvIEZhY3RvcnlcbiAgICBGYWN0b3J5RmVhdHVyZU1hcC5jcmVhdGVTb3VyY2VNYXAodGhpcywgRmVhdHVyZUludGVyZmFjZUluc3RhbmNlLnBsdWdpbi5wbHVnaW5JbnN0YW5jZSk7XG59O1xuXG5leHBvcnQge1BsdWdpbkZlYXR1cmVJbnRlcmZhY2VTZW5kZXJ9O1xuIiwiLypqc2hpbnQgZXN2ZXJzaW9uOiA2ICovXG5pbXBvcnQge1BsdWdpbkZlYXR1cmVJbnRlcmZhY2VSZWNlaXZlcn0gZnJvbSBcIi4vUGx1Z2luRmVhdHVyZUludGVyZmFjZVJlY2VpdmVyXCI7XG5pbXBvcnQge1BsdWdpbkZlYXR1cmVJbnRlcmZhY2VTZW5kZXJ9IGZyb20gXCIuL1BsdWdpbkZlYXR1cmVJbnRlcmZhY2VTZW5kZXJcIjtcblxudmFyIFBsdWdpbkZlYXR1cmVJbnRlcmZhY2UgPSBmdW5jdGlvbiAoQmFzZVBsdWdpbkluc3RhbmNlKSB7XG4gICAgdGhpcy5wbHVnaW4gPSBCYXNlUGx1Z2luSW5zdGFuY2U7XG4gICAgdGhpcy5SZWNlaXZlciA9IG5ldyBQbHVnaW5GZWF0dXJlSW50ZXJmYWNlUmVjZWl2ZXIodGhpcywgQmFzZVBsdWdpbkluc3RhbmNlLmZhY3RvcnkuRmVhdHVyZU1hcCk7XG4gICAgdGhpcy5TZW5kZXIgPSBuZXcgUGx1Z2luRmVhdHVyZUludGVyZmFjZVNlbmRlcih0aGlzLCBCYXNlUGx1Z2luSW5zdGFuY2UuZmFjdG9yeS5GZWF0dXJlTWFwKTtcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIm9uZmVhdHVyZXNcIiwge1xuICAgICAgICAnZ2V0JzogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuUmVjZWl2ZXIub25mZWF0dXJlcztcbiAgICAgICAgfSxcbiAgICAgICAgJ3NldCc6IGZ1bmN0aW9uIChmdW5jKSB7XG4gICAgICAgICAgICB0aGlzLlJlY2VpdmVyLm9uZmVhdHVyZXMgPSBmdW5jO1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmM7XG4gICAgICAgIH1cbiAgICB9KTtcbn07XG5cbmV4cG9ydCB7UGx1Z2luRmVhdHVyZUludGVyZmFjZX07XG4iLCIvKiBqc2hpbnQgZXN2ZXJzaW9uOiA2ICovXG52YXIgUGx1Z2luSW50ZXJmYWNlTWVzc2FnZUh1YiA9IGZ1bmN0aW9uKG93bmVyKSB7XG4gICAgZnVuY3Rpb24gYnVpbGRQbHVnaW5QYXJhbWV0ZXJKU09OKHBsdWdpbiwgc291cmNlcykge1xuICAgICAgICB2YXIgbmFtZXMgPSBvd25lci5wYXJhbWV0ZXJzLmdldFBhcmFtZXRlck5hbWVzKCk7XG4gICAgICAgIHZhciBPID0ge307XG4gICAgICAgIGlmIChzb3VyY2VzID09PSB1bmRlZmluZWQgfHwgc291cmNlcy5sZW5ndGggPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBzb3VyY2VzID0gbmFtZXM7XG4gICAgICAgIH1cbiAgICAgICAgbmFtZXMuZmlsdGVyKGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmluY2x1ZGVzKG5hbWUpO1xuICAgICAgICB9LCBzb3VyY2VzKS5mb3JFYWNoKGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgICAgICAgIHZhciBwYXJhbSA9IG93bmVyLnBhcmFtZXRlcnMuZ2V0UGFyYW1ldGVyQnlOYW1lKG5hbWUpO1xuICAgICAgICAgICAgT1tuYW1lXSA9IHBhcmFtLmdldFBhcmFtZXRlck9iamVjdCgpO1xuICAgICAgICAgICAgaWYgKHBhcmFtLmF1dG9tYXRpb24pIHtcbiAgICAgICAgICAgICAgICBPW25hbWVdLmF1dG9tYXRlZCA9IHBhcmFtLmF1dG9tYXRpb24uZW5hYmxlZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBPO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGJ1aWxkUGFyYW1ldGVyVXBkYXRlUGF5bG9hZChzZW5kZXJfaWQsIHNvdXJjZXMpIHtcbiAgICAgICAgdmFyIG1zZyA9IHtcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwidXBkYXRlUGFyYW1ldGVyc1wiLFxuICAgICAgICAgICAgcGFyYW1ldGVyczogYnVpbGRQbHVnaW5QYXJhbWV0ZXJKU09OKG93bmVyLCBzb3VyY2VzKVxuICAgICAgICB9O1xuICAgICAgICBpZiAoc2VuZGVyX2lkKSB7XG4gICAgICAgICAgICBtc2cuc2VuZGVyX2lkID0gc2VuZGVyX2lkO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtc2c7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2VuZFBhcmFtZXRlclVwZGF0ZXMoY2hhbm5lbCwgc291cmNlcykge1xuICAgICAgICBjaGFubmVsLnBvc3RNZXNzYWdlKGJ1aWxkUGFyYW1ldGVyVXBkYXRlUGF5bG9hZCh1bmRlZmluZWQsIHNvdXJjZXMpLCBsb2NhdGlvbi5vcmlnaW4pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGJyb2FkY2FzdFBhcmFtZXRlclVwZGF0ZXMoc2VuZGVyX2lkLCBzb3VyY2VzKSB7XG4gICAgICAgIHZhciBtc2cgPSBidWlsZFBhcmFtZXRlclVwZGF0ZVBheWxvYWQoc2VuZGVyX2lkLCBzb3VyY2VzKTtcbiAgICAgICAgd2luZG93TWVzc2FnZUxpc3QuZm9yRWFjaChmdW5jdGlvbih3KSB7XG4gICAgICAgICAgICB3LnBvc3RNZXNzYWdlKG1zZywgbG9jYXRpb24ub3JpZ2luKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYnJvYWRjYXN0U3RhdGVDaGFuZ2UobGV2ZWwsIHRlcm0sIHZhbHVlKSB7XG4gICAgICAgIHZhciBtc2cgPSB7XG4gICAgICAgICAgICBtZXNzYWdlOiBcInVwZGF0ZVN0YXRlXCIsXG4gICAgICAgICAgICBsZXZlbDogbGV2ZWwsXG4gICAgICAgICAgICB0ZXJtOiB0ZXJtLFxuICAgICAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICAgIH07XG4gICAgICAgIHdpbmRvd01lc3NhZ2VMaXN0LmZvckVhY2goZnVuY3Rpb24odykge1xuICAgICAgICAgICAgdy5wb3N0TWVzc2FnZShtc2csIGxvY2F0aW9uLm9yaWdpbik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldFBhcmFtZXRlck1lc3NhZ2UoZSkge1xuICAgICAgICB2YXIgdXBkYXRlT2JqZWN0cyA9IFtdO1xuICAgICAgICB2YXIgcGFyYW1ldGVycyA9IEpTT04ucGFyc2UoZS5tZXNzYWdlLnBhcmFtZXRlcnMpO1xuICAgICAgICBPYmplY3Qua2V5cyhwYXJhbWV0ZXJzKS5mb3JFYWNoKGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgICAgICAgIHZhciBwYXJhbWV0ZXJPYmplY3QgPSBvd25lci5wYXJhbWV0ZXJzLmdldFBhcmFtZXRlckJ5TmFtZShuYW1lKTtcbiAgICAgICAgICAgIGlmIChwYXJhbWV0ZXJPYmplY3QpIHtcbiAgICAgICAgICAgICAgICBwYXJhbWV0ZXJPYmplY3Quc2V0VmFsdWUocGFyYW1ldGVyc1tuYW1lXS52YWx1ZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIHVwZGF0ZU9iamVjdHMucHVzaChuYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB1cGRhdGVPYmplY3RzO1xuICAgIH1cblxuICAgIHZhciB3aW5kb3dNZXNzYWdlTGlzdCA9IFtdO1xuICAgIHZhciBsaXN0ZW5lcjtcbiAgICB2YXIgc3RhdGUgPSAwO1xuICAgIHZhciBldmVudFRhcmdldCA9IG5ldyBFdmVudFRhcmdldCgpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgaWYgKCF3aW5kb3dNZXNzYWdlTGlzdC5pbmNsdWRlcyhlLnNvdXJjZSkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBzd2l0Y2goZS5kYXRhLm1lc3NhZ2UpIHtcbiAgICAgICAgICAgIGNhc2UgXCJzZXRQYXJhbWV0ZXJCeU5hbWVcIjpcbiAgICAgICAgICAgIHZhciBwYXJhbWV0ZXJPYmplY3Q7XG4gICAgICAgICAgICAgICAgaWYgKGUuZGF0YS5wYXJhbWV0ZXIubmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBwYXJhbWV0ZXJPYmplY3QgPSBvd25lci5wYXJhbWV0ZXJzLmdldFBhcmFtZXRlckJ5TmFtZShlLmRhdGEucGFyYW1ldGVyLm5hbWUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocGFyYW1ldGVyT2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhbWV0ZXJPYmplY3Quc2V0VmFsdWUoZS5kYXRhLnBhcmFtZXRlci52YWx1ZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJvYWRjYXN0UGFyYW1ldGVyVXBkYXRlcyhlLmRhdGEuc2VuZGVyX2lkLCBbcGFyYW1ldGVyT2JqZWN0Lm5hbWVdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJzZXRQYXJhbWV0ZXJzQnlPYmplY3RcIjpcbiAgICAgICAgICAgICAgICBpZiAoZS5kYXRhLnBhcmFtZXRlcikge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdXBkYXRlT2JqZWN0cyA9IHNldFBhcmFtZXRlck1lc3NhZ2UoZSk7XG4gICAgICAgICAgICAgICAgICAgIGJyb2FkY2FzdFBhcmFtZXRlclVwZGF0ZXMoZS5kYXRhLnNlbmRlcl9pZCwgdXBkYXRlT2JqZWN0cyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInJlcXVlc3RQYXJhbWV0ZXJzXCI6XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBlLmRhdGEubmFtZSA9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbmRQYXJhbWV0ZXJVcGRhdGVzKGUuc291cmNlLCBlLmRhdGEubmFtZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2VuZFBhcmFtZXRlclVwZGF0ZXMoZS5zb3VyY2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJyZXF1ZXN0U2Vzc2lvblN0YXRlXCI6XG4gICAgICAgICAgICAgICAgYnJvYWRjYXN0U3RhdGVDaGFuZ2UoXCJzZXNzaW9uXCIsIGUuZGF0YS50ZXJtLCBvd25lci5zZXNzaW9uRGF0YUludGVyZmFjZS5yZXF1ZXN0VGVybShlLmRhdGEudGVybSkpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInJlcXVlc3RUcmFja1N0YXRlXCI6XG4gICAgICAgICAgICAgICAgYnJvYWRjYXN0U3RhdGVDaGFuZ2UoXCJ0cmFja1wiLCBlLmRhdGEudGVybSwgb3duZXIudHJhY2tEYXRhSW50ZXJmYWNlLnJlcXVlc3RUZXJtKGUuZGF0YS50ZXJtKSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwicmVxdWVzdFVzZXJTdGF0ZVwiOlxuICAgICAgICAgICAgICAgIGJyb2FkY2FzdFN0YXRlQ2hhbmdlKFwidXNlclwiLCBlLmRhdGEudGVybSwgb3duZXIudXNlckRhdGFJbnRlcmZhY2UucmVxdWVzdFRlcm0oZS5kYXRhLnRlcm0pKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJyZXF1ZXN0UGx1Z2luU3RhdGVcIjpcbiAgICAgICAgICAgICAgICBicm9hZGNhc3RTdGF0ZUNoYW5nZShcInBsdWdpblwiLCBlLmRhdGEudGVybSwgb3duZXIucGx1Z2luRGF0YUludGVyZmFjZS5yZXF1ZXN0VGVybShlLmRhdGEudGVybSkpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImN1c3RvbU1lc3NhZ2VcIjpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhyb3coXCJVbmtub3duIG1lc3NhZ2UgdHlwZSBcXFwiXCIrZS5kYXRhLm1lc3NhZ2UrXCJcXFwiXCIpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XG4gICAgICAgIFwiYWRkRXZlbnRMaXN0ZW5lclwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKGEsYixjKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGV2ZW50VGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoYSxiLGMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInJlbW92ZUV2ZW50TGlzdGVuZXJcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbihhLGIsYykge1xuICAgICAgICAgICAgICAgIHJldHVybiBldmVudFRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKGEsYixjKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJzZW5kU3RhdGVcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbihsZXZlbCwgdGVybSkge1xuICAgICAgICAgICAgICAgIGlmIChsZXZlbCA9PSBcInNlc3Npb25cIikge1xuICAgICAgICAgICAgICAgICAgICBicm9hZGNhc3RTdGF0ZUNoYW5nZShcInNlc3Npb25cIiwgdGVybSwgb3duZXIuc2Vzc2lvbkRhdGFJbnRlcmZhY2UucmVxdWVzdFRlcm0odGVybSkpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobGV2ZWwgPT0gXCJ0cmFja1wiKSB7XG4gICAgICAgICAgICAgICAgICAgIGJyb2FkY2FzdFN0YXRlQ2hhbmdlKFwidHJhY2tcIiwgdGVybSwgb3duZXIudHJhY2tEYXRhSW50ZXJmYWNlLnJlcXVlc3RUZXJtKHRlcm0pKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGxldmVsID09IFwidXNlclwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGJyb2FkY2FzdFN0YXRlQ2hhbmdlKFwidXNlclwiLCB0ZXJtLCBvd25lci51c2VyRGF0YUludGVyZmFjZS5yZXF1ZXN0VGVybSh0ZXJtKSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChsZXZlbCA9PSBcInBsdWdpblwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGJyb2FkY2FzdFN0YXRlQ2hhbmdlKFwicGx1Z2luXCIsIHRlcm0sIG93bmVyLnBsdWdpbkRhdGFJbnRlcmZhY2UucmVxdWVzdFRlcm0odGVybSkpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IFwiSW52YWxpZCBzdGF0ZSBsZXZlbCBvcHRpb25cIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwidXBkYXRlSW50ZXJmYWNlc1wiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKGF1dG9tYXRpb25Pbmx5KSB7XG4gICAgICAgICAgICAgICAgaWYgKGF1dG9tYXRpb25Pbmx5ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgYXV0b21hdGlvbk9ubHkgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIHNvdXJjZXM7XG4gICAgICAgICAgICAgICAgaWYgKGF1dG9tYXRpb25Pbmx5KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwYXJhbWV0ZXJOYW1lcyA9IG93bmVyLnBhcmFtZXRlcnMuZ2V0UGFyYW1ldGVyTmFtZXMoKTtcbiAgICAgICAgICAgICAgICAgICAgc291cmNlcyA9IHBhcmFtZXRlck5hbWVzLmZpbHRlcihmdW5jdGlvbihuYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcGFyYW0gPSBvd25lci5wYXJhbWV0ZXJzLmdldFBhcmFtZXRlckJ5TmFtZShuYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAocGFyYW0uYXV0b21hdGFibGUgJiYgcGFyYW0uZW5hYmxlZCA9PT0gdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc291cmNlcy5sZW5ndGggPiAwKVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBicm9hZGNhc3RQYXJhbWV0ZXJVcGRhdGVzKHVuZGVmaW5lZCwgc291cmNlcyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBicm9hZGNhc3RQYXJhbWV0ZXJVcGRhdGVzKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiY2xvc2VXaW5kb3dzXCI6IHtcbiAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBpZiAoc3RhdGUgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUod2luZG93TWVzc2FnZUxpc3QubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHcgPSB3aW5kb3dNZXNzYWdlTGlzdC5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHcuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93KFwiQ2FubmVsIGFscmVhZHkgY2xvc2VkXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJyZWdpc3RlcldpbmRvd1wiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKHcpIHtcbiAgICAgICAgICAgICAgICBpZiAod2luZG93TWVzc2FnZUxpc3QuaW5jbHVkZXModykpIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93TWVzc2FnZUxpc3Quc3BsaWNlKHdpbmRvd01lc3NhZ2VMaXN0LmluZGV4T2YodyksIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB3aW5kb3dNZXNzYWdlTGlzdC5wdXNoKHcpO1xuICAgICAgICAgICAgICAgIHcucGx1Z2luSW5zdGFuY2UgPSBvd25lcjtcbiAgICAgICAgICAgICAgICBzZW5kUGFyYW1ldGVyVXBkYXRlcyh3KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJyZW1vdmVXaW5kb3dcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbih3KSB7XG4gICAgICAgICAgICAgICAgaWYgKHdpbmRvd01lc3NhZ2VMaXN0LmluY2x1ZGVzKHcpKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvd01lc3NhZ2VMaXN0LnNwbGljZSh3aW5kb3dNZXNzYWdlTGlzdC5pbmRleE9mKHcpLCAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn07XG5cbmV4cG9ydCB7UGx1Z2luSW50ZXJmYWNlTWVzc2FnZUh1Yn07XG4iLCIvKiBqc2hpbnQgZXN2ZXJzaW9uOiA2ICovXG5cbnZhciBQbHVnaW5QYXJhbWV0ZXJJbnRlcmZhY2VOb2RlID0gZnVuY3Rpb24gKERPTSwgUGx1Z2luUGFyYW1ldGVySW5zdGFuY2UsIHByb2Nlc3NvciwgZ3VpKSB7XG4gICAgdGhpcy5pbnB1dCA9IERPTTtcbiAgICB0aGlzLnByb2Nlc3NvciA9IHByb2Nlc3NvcjtcbiAgICB0aGlzLkdVSSA9IGd1aTtcbiAgICB0aGlzLkF1ZGlvUGFyYW0gPSBQbHVnaW5QYXJhbWV0ZXJJbnN0YW5jZTtcbiAgICB0aGlzLmhhbmRsZUV2ZW50ID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuQXVkaW9QYXJhbS52YWx1ZSA9IHRoaXMuaW5wdXQudmFsdWU7XG4gICAgfTtcbiAgICB0aGlzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgdGhpcyk7XG4gICAgdGhpcy5pbnB1dC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIHRoaXMpO1xuICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMpO1xufTtcblxudmFyIFBsdWdpblVzZXJJbnRlcmZhY2UgPSBmdW5jdGlvbiAoQmFzZVBsdWdpbkluc3RhbmNlLCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgY29uc29sZS5sb2coXCJERVBSRUNBVEVEISFcIik7XG4gICAgY29uc29sZS5sb2coXCJUaGUgY2xhc3MgUGx1Z2luVXNlckludGVyZmFjZSBoYXMgYmVlbiBkZXByZWNhdGVkXCIpO1xuICAgIGNvbnNvbGUubG9nKFwiUGxlYXNlIGxvb2sgYXQgdGhlIGRvY3VtZW50cyBmb3IgdGhlIG5ldyBtZXRob2RzIGZvciBidWlsZGluZyBwbHVnaW5zXCIpO1xuICAgIHRoaXMucHJvY2Vzc29yID0gQmFzZVBsdWdpbkluc3RhbmNlO1xuICAgIHRoaXMucm9vdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaWYgKHdpZHRoID4gMCkge1xuICAgICAgICB0aGlzLnJvb3Quc3R5bGUud2lkdGggPSB3aWR0aCArIFwicHhcIjtcbiAgICB9XG4gICAgaWYgKGhlaWdodCA+IDApIHtcbiAgICAgICAgdGhpcy5yb290LnN0eWxlLmhlaWdodCA9IGhlaWdodCArIFwicHhcIjtcbiAgICB9XG4gICAgdGhpcy5kaW0gPSB7XG4gICAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgICAgaGVpZ2h0OiBoZWlnaHRcbiAgICB9O1xuICAgIHRoaXMuaW50ZXJ2YWxGdW5jdGlvbiA9IG51bGw7XG4gICAgdGhpcy51cGRhdGVJbnRlcnZhbCA9IG51bGw7XG4gICAgdGhpcy5QbHVnaW5QYXJhbWV0ZXJJbnRlcmZhY2VzID0gW107XG5cbiAgICB0aGlzLmNyZWF0ZVBsdWdpblBhcmFtZXRlckludGVyZmFjZU5vZGUgPSBmdW5jdGlvbiAoRE9NLCBQbHVnaW5QYXJhbWV0ZXJJbnN0YW5jZSkge1xuICAgICAgICB2YXIgbm9kZSA9IG5ldyBQbHVnaW5QYXJhbWV0ZXJJbnRlcmZhY2VOb2RlKERPTSwgUGx1Z2luUGFyYW1ldGVySW5zdGFuY2UsIHRoaXMucHJvY2Vzc29yLCB0aGlzKTtcbiAgICAgICAgdGhpcy5QbHVnaW5QYXJhbWV0ZXJJbnRlcmZhY2VzLnB1c2gobm9kZSk7XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH07XG5cbiAgICB0aGlzLnVwZGF0ZSA9IGZ1bmN0aW9uICgpIHt9O1xuXG59O1xuXG5QbHVnaW5Vc2VySW50ZXJmYWNlLnByb3RvdHlwZS5nZXRSb290ID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLnJvb3Q7XG59O1xuUGx1Z2luVXNlckludGVyZmFjZS5wcm90b3R5cGUuZ2V0RGltZW5zaW9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5kaW07XG59O1xuUGx1Z2luVXNlckludGVyZmFjZS5wcm90b3R5cGUuZ2V0V2lkdGggPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGltLndpZHRoO1xufTtcblBsdWdpblVzZXJJbnRlcmZhY2UucHJvdG90eXBlLmdldEhlaWdodCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5kaW0uaGVpZ2h0O1xufTtcblBsdWdpblVzZXJJbnRlcmZhY2UucHJvdG90eXBlLmJlZ2luQ2FsbGJhY2tzID0gZnVuY3Rpb24gKG1zKSB7XG4gICAgLy8gQW55IHJlZ2lzdGVyZWQgY2FsbGJhY2tzIGFyZSBzdGFydGVkIGJ5IHRoZSBob3N0XG4gICAgaWYgKG1zID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgbXMgPSAyNTA7XG4gICAgfSAvL0RlZmF1bHQgb2YgMjUwbXMgdXBkYXRlIHBlcmlvZFxuICAgIGlmICh0aGlzLmludGVydmFsRnVuY3Rpb24gPT09IG51bGwpIHtcbiAgICAgICAgdGhpcy51cGRhdGVJbnRlcnZhbCA9IG1zO1xuICAgICAgICB0aGlzLmludGVydmFsRnVuY3Rpb24gPSB3aW5kb3cuc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICAgICAgfS5iaW5kKHRoaXMpLCAyNTApO1xuICAgIH1cbn07XG5QbHVnaW5Vc2VySW50ZXJmYWNlLnByb3RvdHlwZS5zdG9wQ2FsbGJhY2tzID0gZnVuY3Rpb24gKCkge1xuICAgIC8vIEFueSByZWdpc3RlcmVkIGNhbGxiYWNrcyBhcmUgc3RvcHBlZCBieSB0aGUgaG9zdFxuICAgIGlmICh0aGlzLmludGVydmFsRnVuY3Rpb24gIT09IG51bGwpIHtcbiAgICAgICAgd2luZG93LmNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbEZ1bmN0aW9uKTtcbiAgICAgICAgdGhpcy51cGRhdGVJbnRlcnZhbCA9IG51bGw7XG4gICAgICAgIHRoaXMuaW50ZXJ2YWxGdW5jdGlvbiA9IG51bGw7XG4gICAgfVxufTtcblBsdWdpblVzZXJJbnRlcmZhY2UucHJvdG90eXBlLmxvYWRSZXNvdXJjZSA9IGZ1bmN0aW9uICh1cmwpIHtcbiAgICB2YXIgcCA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgdmFyIHJlcSA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICByZXEub3BlbignR0VUJywgdXJsKTtcbiAgICAgICAgcmVxLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChyZXEuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHJlcS5yZXNwb25zZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlamVjdChFcnJvcihyZXEuc3RhdHVzVGV4dCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICByZXEub25lcnJvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJlamVjdChFcnJvcihcIk5ldHdvcmsgRXJyb3JcIikpO1xuICAgICAgICB9O1xuICAgICAgICByZXEuc2VuZCgpO1xuICAgIH0pO1xuICAgIHJldHVybiBwO1xufTtcblBsdWdpblVzZXJJbnRlcmZhY2UucHJvdG90eXBlLmNsZWFyR1VJID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuc3RvcENhbGxiYWNrcygpO1xuICAgIHRoaXMucm9vdC5pbm5lckhUTUwgPSBcIlwiO1xufTtcblxuZXhwb3J0IHtQbHVnaW5Vc2VySW50ZXJmYWNlfTtcbiIsIi8vIEFkZCBnZXRJbnB1dHMgdG8gYWxsIEF1ZGlvTm9kZXMgdG8gZWFzZSBkZXBsb3ltZW50XG4vKmdsb2JhbHMgQXVkaW9Ob2RlLCBXb3JrZXIsIGNvbnNvbGUsIHdpbmRvdywgZG9jdW1lbnQsIFByb21pc2UsIFhNTEh0dHBSZXF1ZXN0ICovXG4vKmVzbGludC1lbnYgYnJvd3NlciAqL1xuLypqc2hpbnQgZXN2ZXJzaW9uOiA2ICovXG5pbXBvcnQge1BhcmFtZXRlck1hbmFnZXJ9IGZyb20gXCIuL3BhcmFtZXRlck1hbmFnZXIuanNcIjtcbmltcG9ydCB7UGx1Z2luSW50ZXJmYWNlTWVzc2FnZUh1Yn0gZnJvbSBcIi4vUGx1Z2luSW50ZXJmYWNlTWVzc2FnZUh1Yi5qc1wiO1xuaW1wb3J0IHtQbHVnaW5GZWF0dXJlSW50ZXJmYWNlfSBmcm9tIFwiLi9QbHVnaW5GZWF0dXJlSW50ZXJmYWNlXCI7XG5pbXBvcnQge1BsdWdpblVzZXJJbnRlcmZhY2V9IGZyb20gXCIuL1BsdWdpblVzZXJJbnRlcmZhY2VcIjtcbmltcG9ydCBMaW5rZWRTdG9yZSBmcm9tIFwiLi4vTGlua2VkU3RvcmVcIjtcbmltcG9ydCBMaW5rZWRTdG9yZUludGVyZmFjZSBmcm9tIFwiLi9MaW5rZWRTdG9yZUludGVyZmFjZVwiO1xuXG5pZiAodHlwZW9mIEF1ZGlvTm9kZSA9PT0gXCJmdW5jdGlvblwiICYmIHdpbmRvdy5pbXBvcnRTY3JpcHRzID09PSB1bmRlZmluZWQpIHtcbiAgICBBdWRpb05vZGUucHJvdG90eXBlLmdldElucHV0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIFt0aGlzXTtcbiAgICB9O1xufVxuXG52YXIgQmFzZVBsdWdpbiA9IGZ1bmN0aW9uKGZhY3RvcnksIG93bmVyKSB7XG4gICAgdmFyIGlucHV0TGlzdCA9IFtdLFxuICAgICAgICBvdXRwdXRMaXN0ID0gW10sXG4gICAgICAgIHBPd25lciA9IG93bmVyLFxuICAgICAgICBkZWxheVNhbXBsZXMgPSAwLFxuICAgICAgICBldmVudFRhcmdldCA9IG5ldyBFdmVudFRhcmdldCgpLFxuICAgICAgICBleHRlcm5hbEludGVyZmFjZSA9IG5ldyBQbHVnaW5JbnRlcmZhY2VNZXNzYWdlSHViKHRoaXMpO1xuICAgIGlmICh0aGlzLmNvbnRleHQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBmYWN0b3J5LmNvbnRleHQ7XG4gICAgfVxuICAgIGlmICh0aGlzLmZhY3RvcnkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLmZhY3RvcnkgPSBmYWN0b3J5O1xuICAgIH1cbiAgICB0aGlzLmZlYXR1cmVNYXAgPSBuZXcgUGx1Z2luRmVhdHVyZUludGVyZmFjZSh0aGlzKTtcbiAgICB0aGlzLnBhcmFtZXRlcnMgPSBuZXcgUGFyYW1ldGVyTWFuYWdlcih0aGlzLCBleHRlcm5hbEludGVyZmFjZSk7XG4gICAgdGhpcy5wYXJhbWV0ZXJzLmFkZEV2ZW50TGlzdGVuZXIoXCJwYXJhbWV0ZXJzZXRcIiwgZnVuY3Rpb24oZSkge1xuICAgICAgICBldmVudFRhcmdldC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcInBhcmFtZXRlcnNldFwiLCB7ZGV0YWlsOiBlLmRldGFpbH0pKTtcbiAgICB9KTtcblxuICAgIHRoaXMuUGx1Z2luRGF0YSA9IG5ldyBMaW5rZWRTdG9yZShcIlBsdWdpblwiKTtcblxuICAgIHRoaXMuc2Vzc2lvbkRhdGFJbnRlcmZhY2UgPSBuZXcgTGlua2VkU3RvcmVJbnRlcmZhY2UodGhpcywgZmFjdG9yeS5TZXNzaW9uRGF0YSk7XG4gICAgdGhpcy51c2VyRGF0YUludGVyZmFjZSA9IG5ldyBMaW5rZWRTdG9yZUludGVyZmFjZSh0aGlzLCBmYWN0b3J5LlVzZXJEYXRhKTtcbiAgICB0aGlzLnRyYWNrRGF0YUludGVyZmFjZSA9IG5ldyBMaW5rZWRTdG9yZUludGVyZmFjZSh0aGlzLCBvd25lci5UcmFja0RhdGEpO1xuICAgIHRoaXMucGx1Z2luRGF0YUludGVyZmFjZSA9IG5ldyBMaW5rZWRTdG9yZUludGVyZmFjZSh0aGlzLCB0aGlzLlBsdWdpbkRhdGEpO1xuXG4gICAgdGhpcy5kZWxldGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5zZXNzaW9uRGF0YUludGVyZmFjZS5kZXN0cm95KCk7XG4gICAgICAgIHRoaXMudXNlckRhdGFJbnRlcmZhY2UuZGVzdHJveSgpO1xuICAgICAgICB0aGlzLnRyYWNrRGF0YUludGVyZmFjZS5kZXN0cm95KCk7XG4gICAgICAgIHRoaXMucGx1Z2luRGF0YUludGVyZmFjZS5kZXN0cm95KCk7XG4gICAgICAgIGlmICh0aGlzLmRlY29uc3RydWN0ICYmIHR5cGVvZiB0aGlzLmRlY29uc3RydWN0ID09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgdGhpcy5kZWNvbnN0cnVjdCgpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGRlbGV0ZUlPKG5vZGUsIGxpc3QpIHtcbiAgICAgICAgdmFyIGkgPSBsaXN0LmZpbmRJbmRleChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgcmV0dXJuIGUgPT09IHRoaXM7XG4gICAgICAgIH0sIG5vZGUpO1xuICAgICAgICBpZiAoaSA9PT0gLTEpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBsaXN0LnNwbGljZShpLCAxKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgdGhpcy5hZGRJbnB1dCA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgIGlucHV0TGlzdC5wdXNoKG5vZGUpO1xuICAgICAgICByZXR1cm4gaW5wdXRMaXN0O1xuICAgIH07XG4gICAgdGhpcy5kZWxldGVJbnB1dCA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgIHJldHVybiBkZWxldGVJTyhub2RlLCBpbnB1dExpc3QpO1xuICAgIH07XG4gICAgdGhpcy5hZGRPdXRwdXQgPSBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICBvdXRwdXRMaXN0LnB1c2gobm9kZSk7XG4gICAgICAgIHJldHVybiB0aGlzLm91dHB1dHM7XG4gICAgfTtcbiAgICB0aGlzLmRlbGV0ZU91dHB1dCA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgIHJldHVybiBkZWxldGVJTyhub2RlLCBvdXRwdXRMaXN0KTtcbiAgICB9O1xuXG4gICAgdGhpcy5zZXRQcm9jZXNzaW5nRGVsYXlBc1NlY29uZHMgPSBmdW5jdGlvbihzZWNvbmRzKSB7XG4gICAgICAgIHZhciBmcyA9IGZhY3RvcnkuY29udGV4dC5zYW1wbGVSYXRlO1xuICAgICAgICBpZiAodHlwZW9mIHNlY29uZHMgPT0gXCJudW1iZXJcIiAmJiBpc0Zpbml0ZShzZWNvbmRzKSAmJiBzZWNvbmRzID49IDApIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNldFByb2Nlc3NpbmdEZWxheUFzU2FtcGxlcyhzZWNvbmRzKmZzKS9mcztcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyhcInNldFByb2Nlc3NpbmdEZWxheUFzU2Vjb25kcyBJbnZhbGlkIGFyZ3VtZW50XCIpO1xuICAgIH07XG5cbiAgICB0aGlzLnNldFByb2Nlc3NpbmdEZWxheUFzU2FtcGxlcyA9IGZ1bmN0aW9uKHNhbXBsZXMpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBzYW1wbGVzID09IFwibnVtYmVyXCIgJiYgaXNGaW5pdGUoc2FtcGxlcykgJiYgc2FtcGxlcyA+PSAwKSB7XG4gICAgICAgICAgICBkZWxheVNhbXBsZXMgPSBzYW1wbGVzO1xuICAgICAgICAgICAgdmFyIGUgPSBuZXcgRXZlbnQoXCJhbHRlcmRlbGF5XCIpO1xuICAgICAgICAgICAgZXZlbnRUYXJnZXQuZGlzcGF0Y2hFdmVudChlKTtcbiAgICAgICAgICAgIHJldHVybiBkZWxheVNhbXBsZXM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyhcInNldFByb2Nlc3NpbmdEZWxheUFzU2FtcGxlcyBJbnZhbGlkIGFyZ3VtZW50XCIpO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgdGhpcy5zdGFydCA9IHRoaXMuc3RvcCA9IHRoaXMub25sb2FkZWQgPSB0aGlzLm9udW5sb2FkZWQgPSB0aGlzLmRlY29uc3RydWN0ID0gZnVuY3Rpb24gKCkge307XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XG4gICAgICAgIFwiZXh0ZXJuYWxJbnRlcmZhY2VcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBleHRlcm5hbEludGVyZmFjZVxuICAgICAgICB9LFxuICAgICAgICBcIm51bUlucHV0c1wiOiB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaW5wdXRMaXN0Lmxlbmd0aDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyAoXCJDYW5ub3Qgc2V0IHRoZSBudW1iZXIgb2YgaW5wdXRzIG9mIEJhc2VQbHVnaW5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwibnVtT3V0cHV0c1wiOiB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gb3V0cHV0TGlzdC5sZW5ndGg7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgKFwiQ2Fubm90IHNldCB0aGUgbnVtYmVyIG9mIG91dHB1dHMgb2YgQmFzZVBsdWdpblwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJudW1QYXJhbWV0ZXJzXCI6IHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcmFtZXRlcnMucGFyYW1ldGVycy5sZW5ndGg7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgKFwiQ2Fubm90IHNldCB0aGUgbnVtYmVyIG9mIHBhcmFtZXRlcnMgb2YgQmFzZVBsdWdpblwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJvd25lclwiOiB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcE93bmVyO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24gKG93bmVyKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvd25lciA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgICAgICAgICBwT3duZXIgPSBvd25lcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBPd25lcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJpbnB1dHNcIjoge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaW5wdXRMaXN0O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHRocm93IChcIklsbGVnYWwgYXR0ZW1wdCB0byBtb2RpZnkgQmFzZVBsdWdpblwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJvdXRwdXRzXCI6IHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG91dHB1dExpc3Q7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgKFwiSWxsZWdhbCBhdHRlbXB0IHRvIG1vZGlmeSBCYXNlUGx1Z2luXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInByb2Nlc3NpbmdEZWxheUFzU2FtcGxlc1wiOiB7XG4gICAgICAgICAgICBcImdldFwiOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVsYXlTYW1wbGVzO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwic2V0XCI6IHRoaXMuc2V0UHJvY2Vzc2luZ0RlbGF5QXNTYW1wbGVzXG4gICAgICAgIH0sXG4gICAgICAgIFwicHJvY2Vzc2luZ0RlbGF5QXNTZWNvbmRzXCI6IHtcbiAgICAgICAgICAgIFwiZ2V0XCI6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBkZWxheVNhbXBsZXMvZmFjdG9yeS5jb250ZXh0LnNhbXBsZVJhdGU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJzZXRcIjogdGhpcy5zZXRQcm9jZXNzaW5nRGVsYXlBc1NlY29uZHNcbiAgICAgICAgfSxcbiAgICAgICAgXCJjb25uZWN0XCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKGRlc3QpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm91dHB1dHNbMF0uY29ubmVjdChkZXN0LmlucHQgPyBkZXN0LmlucHV0IDogZGVzdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiZGlzY29ubmVjdFwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uIChkZXN0KSB7XG4gICAgICAgICAgICAgICAgaWYgKGRlc3QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm91dHB1dHNbMF0uZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3V0cHV0c1swXS5kaXNjb25uZWN0KGRlc3QuaW5wdXQgPyBkZXN0LmlucHV0IDogZGVzdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImdldElucHV0c1wiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5pbnB1dHM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0T3V0cHV0c1wiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5vdXRwdXRzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImdldFBhcmFtZXRlck5hbWVzXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcmFtZXRlcnMuZ2V0UGFyYW1ldGVyTmFtZXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRQYXJhbWV0ZXJCeU5hbWVcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcmFtZXRlcnMuZ2V0UGFyYW1ldGVyQnlOYW1lKG5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImdldFBhcmFtZXRlck9iamVjdFwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJhbWV0ZXJzLmdldFBhcmFtZXRlck9iamVjdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInNldFBhcmFtZXRlckJ5TmFtZVwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcmFtZXRlcnMuc2V0UGFyYW1ldGVyQnlOYW1lKG5hbWUsIHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJzZXRQYXJhbWV0ZXJzQnlPYmplY3RcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAob2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyYW1ldGVycy5zZXRQYXJhbWV0ZXJzQnlPYmplY3Qob2JqZWN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJhZGRFdmVudExpc3RlbmVyXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBldmVudFRhcmdldC5hZGRFdmVudExpc3RlbmVyKGtleSwgdmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInJlbW92ZUV2ZW50TGlzdGVuZXJcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbihrZXksIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGV2ZW50VGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoa2V5LCB2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn07XG5cbmV4cG9ydCB7QmFzZVBsdWdpbn07XG4iLCIvKiBqc2hpbnQgZXN2ZXJzaW9uOiA2ICovXG5pbXBvcnQge051bWJlclBhcmFtZXRlcn0gZnJvbSBcIi4vcGFyYW1ldGVycy9OdW1iZXJQYXJhbWV0ZXIuanNcIjtcbmltcG9ydCB7U3RyaW5nUGFyYW1ldGVyfSBmcm9tIFwiLi9wYXJhbWV0ZXJzL1N0cmluZ1BhcmFtZXRlci5qc1wiO1xuaW1wb3J0IHtCdXR0b25QYXJhbWV0ZXJ9IGZyb20gXCIuL3BhcmFtZXRlcnMvQnV0dG9uUGFyYW1ldGVyLmpzXCI7XG5pbXBvcnQge1N3aXRjaFBhcmFtZXRlcn0gZnJvbSBcIi4vcGFyYW1ldGVycy9Td2l0Y2hQYXJhbWV0ZXIuanNcIjtcbmltcG9ydCB7TGlzdFBhcmFtZXRlcn0gZnJvbSBcIi4vcGFyYW1ldGVycy9MaXN0UGFyYW1ldGVyLmpzXCI7XG5pbXBvcnQge1VSTFBhcmFtZXRlcn0gZnJvbSBcIi4vcGFyYW1ldGVycy9VUkxQYXJhbWV0ZXIuanNcIjtcbmltcG9ydCB7QXNzZXRQYXJhbWV0ZXJ9IGZyb20gXCIuL3BhcmFtZXRlcnMvQXNzZXRQYXJhbWV0ZXIuanNcIjtcblxudmFyIFBhcmFtZXRlck1hbmFnZXIgPSBmdW5jdGlvbiAob3duZXIsIHBsdWdpbkV4dGVybmFsSW50ZXJmYWNlLCBuYW1lLCBleHBvc2VkKSB7XG4gICAgdmFyIHBhcmFtZXRlckxpc3QgPSBbXTtcbiAgICB2YXIgZXZlbnRUYXJnZXQgPSBuZXcgRXZlbnRUYXJnZXQoKTtcbiAgICBpZiAobmFtZSA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgbmFtZSA9IFwiZGVmYXVsdFwiO1xuICAgIH1cbiAgICBpZiAoZXhwb3NlZCA9PSB1bmRlZmluZWQgfHwgbmFtZSA9PSBcImRlZmF1bHRcIikge1xuICAgICAgICBleHBvc2VkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBmaW5kUGFyYW1ldGVyKHNlbGYsIG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIG5hbWUuc3BsaXQoXCIuXCIpLnJlZHVjZShmdW5jdGlvbihiYXNlLCBuYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gYmFzZVtuYW1lXTtcbiAgICAgICAgfSwgc2VsZik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXNQYXJhbWV0ZXJOYW1lQXZhaWxhYmxlKHNlbGYsIG5hbWUpIHtcbiAgICAgICAgaWYgKCEvXlxcdysoIFxcdyspKiQvLnRlc3QobmFtZSkpIHtcbiAgICAgICAgICAgIHRocm93IFwiSW52YWxpZCBzdHJpbmcgZm9yIG5hbWVcIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2VsZi5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgICAgICAgdGhyb3cgXCJOYW1lIGlzIHJlc2VydmVkIG9yIGFscmVhZHkgZGVmaW5lZFwiO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGJ1aWxkUGFyYW1ldGVyT2JqZWN0KCkge1xuICAgICAgICB2YXIgb2JqID0ge307XG4gICAgICAgIHBhcmFtZXRlckxpc3QuZmlsdGVyKGZ1bmN0aW9uKHApIHtcbiAgICAgICAgICAgIHJldHVybiBwLmV4cG9zZWQ7XG4gICAgICAgIH0pLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIG9ialtlLm5hbWVdID0gZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkUGFyYW1ldGVyKHBhcmFtLCBzZWxmKSB7XG4gICAgICAgIGlmIChwYXJhbS5uYW1lLmluY2x1ZGVzKFwiLlwiKSkge1xuICAgICAgICAgICAgdGhyb3coXCJOYW1lIGNhbm5vdCBpbmNsdWRlIGEgcGVyaW9kXCIpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBleGlzdHMgPSBwYXJhbWV0ZXJMaXN0LmZpbmRJbmRleChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgcmV0dXJuIGUgPT09IHBhcmFtO1xuICAgICAgICB9LCBwYXJhbSk7XG4gICAgICAgIGlmIChleGlzdHMgPT09IC0xKSB7XG4gICAgICAgICAgICBwYXJhbS5hZGRFdmVudExpc3RlbmVyKFwicGFyYW1ldGVyc2V0XCIsIHNlbGYpO1xuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNlbGYsIHBhcmFtLm5hbWUsIHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogcGFyYW1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcGFyYW1ldGVyTGlzdC5wdXNoKHBhcmFtKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcGFyYW07XG4gICAgfVxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgICBcImFkZEV2ZW50TGlzdGVuZXJcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbih0eXBlLCBsaXN0ZW5lciwgb3B0aW9ucykge1xuICAgICAgICAgICAgICAgIHJldHVybiBldmVudFRhcmdldC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyLCBvcHRpb25zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJyZW1vdmVFdmVudExpc3RlbmVyXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24odHlwZSwgbGlzdGVuZXIsIG9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZXZlbnRUYXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lciwgb3B0aW9ucyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiaGFuZGxlRXZlbnRcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRldGFpbCA9IGUuZGV0YWlsO1xuICAgICAgICAgICAgICAgIGlmIChkZXRhaWwudXBkYXRlSW50ZXJmYWNlcyAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgcGx1Z2luRXh0ZXJuYWxJbnRlcmZhY2UudXBkYXRlSW50ZXJmYWNlcygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZS50eXBlID09IFwicGFyYW1ldGVyc2V0XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRUYXJnZXQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJwYXJhbWV0ZXJzZXRcIiwge2RldGFpbDogZGV0YWlsLnBhcmFtZXRlcn0pKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgICdjcmVhdGVOdW1iZXJQYXJhbWV0ZXInOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uIChuYW1lLCBkZWZhdWx0VmFsdWUsIG1pbmltdW0sIG1heGltdW0sIHRvU3RyaW5nRnVuYywgdmlzaWJsZU5hbWUsIGV4cG9zZWQpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG5hbWUgIT09IFwic3RyaW5nXCIgfHwgdHlwZW9mIGRlZmF1bHRWYWx1ZSAhPT0gXCJudW1iZXJcIiB8fCAobWluaW11bSAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiBtaW5pbXVtICE9PSBcIm51bWJlclwiKSB8fCAobWF4aW11bSAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiBtYXhpbXVtICE9PSBcIm51bWJlclwiKSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyAoXCJJbnZsaWQgY29uc3RydWN0b3JcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdG9TdHJpbmdGdW5jICE9IFwiZnVuY3Rpb25cIiAmJiB0b1N0cmluZ0Z1bmMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyAoXCJ0b1N0cmluZ0Z1bmMgbXVzdCBiZSBhIGZ1bmN0aW9uIG9yIHVuZGVmaW5lZFwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGlzUGFyYW1ldGVyTmFtZUF2YWlsYWJsZSh0aGlzLCBuYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcGFyYW0gPSBuZXcgTnVtYmVyUGFyYW1ldGVyKG93bmVyLCBuYW1lLCBkZWZhdWx0VmFsdWUsIG1pbmltdW0sIG1heGltdW0sIHRvU3RyaW5nRnVuYywgdmlzaWJsZU5hbWUsIGV4cG9zZWQpO1xuICAgICAgICAgICAgICAgICAgICBhZGRQYXJhbWV0ZXIocGFyYW0sIHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGFyYW07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgICdjcmVhdGVTdHJpbmdQYXJhbWV0ZXInOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uIChuYW1lLCBkZWZhdWx0VmFsdWUsIG1heExlbmd0aCwgdG9TdHJpbmdGdW5jLCB2aXNpYmxlTmFtZSwgZXhwb3NlZCkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbmFtZSAhPT0gXCJzdHJpbmdcIiB8fCB0eXBlb2YgZGVmYXVsdFZhbHVlICE9PSBcInN0cmluZ1wiIHx8IChtYXhMZW5ndGggIT09IHVuZGVmaW5lZCAmJiB0eXBlb2YgbWF4TGVuZ3RoICE9PSBcIm51bWJlclwiKSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyAoXCJJbnZsaWQgY29uc3RydWN0b3JcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdG9TdHJpbmdGdW5jICE9IFwiZnVuY3Rpb25cIiAmJiB0b1N0cmluZ0Z1bmMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyAoXCJ0b1N0cmluZ0Z1bmMgbXVzdCBiZSBhIGZ1bmN0aW9uIG9yIHVuZGVmaW5lZFwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGlzUGFyYW1ldGVyTmFtZUF2YWlsYWJsZSh0aGlzLCBuYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcGFyYW0gPSBuZXcgU3RyaW5nUGFyYW1ldGVyKG93bmVyLCBuYW1lLCBkZWZhdWx0VmFsdWUsIG1heExlbmd0aCwgdG9TdHJpbmdGdW5jLCB2aXNpYmxlTmFtZSwgZXhwb3NlZCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZFBhcmFtZXRlcihwYXJhbSwgdGhpcyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwYXJhbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgICdjcmVhdGVCdXR0b25QYXJhbWV0ZXInOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBuYW1lICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IChcIkludmFsaWQgY29uc3RydWN0b3JcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChpc1BhcmFtZXRlck5hbWVBdmFpbGFibGUodGhpcywgbmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBhcmFtID0gbmV3IEJ1dHRvblBhcmFtZXRlcihvd25lciwgbmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIGFkZFBhcmFtZXRlcihwYXJhbSwgdGhpcyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwYXJhbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgICdjcmVhdGVTd2l0Y2hQYXJhbWV0ZXInOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uIChuYW1lLCBkZWZhdWx0VmFsdWUsIG1pblN0YXRlLCBtYXhTdGF0ZSwgdG9TdHJpbmdGdW5jLCB2aXNpYmxlTmFtZSwgZXhwb3NlZCkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbmFtZSAhPT0gXCJzdHJpbmdcIiB8fCB0eXBlb2YgZGVmYXVsdFZhbHVlICE9PSBcIm51bWJlclwiIHx8IHR5cGVvZiBtaW5TdGF0ZSAhPT0gXCJudW1iZXJcIiB8fCB0eXBlb2YgbWF4U3RhdGUgIT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgKFwiSW52bGlkIGNvbnN0cnVjdG9yXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRvU3RyaW5nRnVuYyAhPSBcImZ1bmN0aW9uXCIgJiYgdG9TdHJpbmdGdW5jICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgKFwidG9TdHJpbmdGdW5jIG11c3QgYmUgYSBmdW5jdGlvbiBvciB1bmRlZmluZWRcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChpc1BhcmFtZXRlck5hbWVBdmFpbGFibGUodGhpcywgbmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBhcmFtID0gbmV3IFN3aXRjaFBhcmFtZXRlcihvd25lciwgbmFtZSwgZGVmYXVsdFZhbHVlLCBtaW5TdGF0ZSwgbWF4U3RhdGUsIHRvU3RyaW5nRnVuYywgdmlzaWJsZU5hbWUsIGV4cG9zZWQpO1xuICAgICAgICAgICAgICAgICAgICBhZGRQYXJhbWV0ZXIocGFyYW0sIHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGFyYW07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgICdjcmVhdGVMaXN0UGFyYW1ldGVyJzoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAobmFtZSwgZGVmYXVsdFZhbHVlLCBsaXN0T2ZWYWx1ZXMsIHRvU3RyaW5nRnVuYywgdmlzaWJsZU5hbWUsIGV4cG9zZWQpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG5hbWUgIT09IFwic3RyaW5nXCIgfHwgdHlwZW9mIGRlZmF1bHRWYWx1ZSA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhQXJyYXkuaXNBcnJheShsaXN0T2ZWYWx1ZXMpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IChcIkludmxpZCBjb25zdHJ1Y3RvclwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0b1N0cmluZ0Z1bmMgIT0gXCJmdW5jdGlvblwiICYmIHRvU3RyaW5nRnVuYyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IChcInRvU3RyaW5nRnVuYyBtdXN0IGJlIGEgZnVuY3Rpb24gb3IgdW5kZWZpbmVkXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobGlzdE9mVmFsdWVzLmluY2x1ZGVzKGRlZmF1bHRWYWx1ZSkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IChcIkludmxpZCBjb25zdHJ1Y3RvciAtIGRlZmF1bHQgdmFsdWUgbWlzc2luZ1wiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGlzUGFyYW1ldGVyTmFtZUF2YWlsYWJsZSh0aGlzLCBuYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcGFyYW0gPSBuZXcgTGlzdFBhcmFtZXRlcihvd25lciwgbmFtZSwgZGVmYXVsdFZhbHVlLCBsaXN0T2ZWYWx1ZXMsIHRvU3RyaW5nRnVuYywgdmlzaWJsZU5hbWUsIGV4cG9zZWQpO1xuICAgICAgICAgICAgICAgICAgICBhZGRQYXJhbWV0ZXIocGFyYW0sIHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGFyYW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAnY3JlYXRlVVJMUGFyYW1ldGVyJzoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAobmFtZSwgZGVmYXVsdFZhbHVlLCBtYXhMZW5ndGgsIHRvU3RyaW5nRnVuYywgdmlzaWJsZU5hbWUsIGV4cG9zZWQpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG5hbWUgIT09IFwic3RyaW5nXCIgfHwgKG1heExlbmd0aCAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiBtYXhMZW5ndGggIT09IFwibnVtYmVyXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IChcIkludmxpZCBjb25zdHJ1Y3RvclwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0b1N0cmluZ0Z1bmMgIT0gXCJmdW5jdGlvblwiICYmIHRvU3RyaW5nRnVuYyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IChcInRvU3RyaW5nRnVuYyBtdXN0IGJlIGEgZnVuY3Rpb24gb3IgdW5kZWZpbmVkXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoaXNQYXJhbWV0ZXJOYW1lQXZhaWxhYmxlKHRoaXMsIG5hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwYXJhbSA9IG5ldyBVUkxQYXJhbWV0ZXIob3duZXIsIG5hbWUsIGRlZmF1bHRWYWx1ZSwgbWF4TGVuZ3RoLCB0b1N0cmluZ0Z1bmMsIHZpc2libGVOYW1lLCBleHBvc2VkKTtcbiAgICAgICAgICAgICAgICAgICAgYWRkUGFyYW1ldGVyKHBhcmFtLCB0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBhcmFtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgJ2NyZWF0ZUFzc2V0UGFyYW1ldGVyJzoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAocmVzb3VyY2VUeXBlLCBuYW1lLCBkZWZhdWx0VmFsdWUsIHZpc2libGVOYW1lLCBleHBvc2VkKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBuYW1lICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IChcIkludmxpZCBjb25zdHJ1Y3RvclwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGlzUGFyYW1ldGVyTmFtZUF2YWlsYWJsZSh0aGlzLCBuYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcGFyYW0gPSBuZXcgQXNzZXRQYXJhbWV0ZXIob3duZXIsIHJlc291cmNlVHlwZSwgbmFtZSwgZGVmYXVsdFZhbHVlLCB2aXNpYmxlTmFtZSwgZXhwb3NlZCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZFBhcmFtZXRlcihwYXJhbSwgdGhpcyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwYXJhbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgICdjcmVhdGVQYXJhbWV0ZXJNYW5hZ2VyJzoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbihuYW1lKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlzUGFyYW1ldGVyTmFtZUF2YWlsYWJsZSh0aGlzLCBuYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcGFyYW0gPSBuZXcgUGFyYW1ldGVyTWFuYWdlcihvd25lciwgcGx1Z2luRXh0ZXJuYWxJbnRlcmZhY2UsIG5hbWUpO1xuICAgICAgICAgICAgICAgICAgICBhZGRQYXJhbWV0ZXIocGFyYW0sIHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGFyYW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAnY3JlYXRlUGFyYW1ldGVyJzoge1xuICAgICAgICAgICAgJ3ZhbHVlJzogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHRocm93IChcIlRoaXMgZnVuY3Rpb24gaXMgbm93IGRlcHJlY2F0ZWRcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgICdnZXRQYXJhbWV0ZXJOYW1lJzoge1xuICAgICAgICAgICAgJ3ZhbHVlJzogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJERVBSRUNBVEVEIC0gdXNlIGdldFBhcmFtZXRlck5hbWVzXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFBhcmFtZXRlck5hbWVzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgICdnZXRQYXJhbWV0ZXJCeU5hbWUnOiB7XG4gICAgICAgICAgICAndmFsdWUnOiBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmaW5kUGFyYW1ldGVyKHRoaXMsIG5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAnZ2V0UGFyYW1ldGVyT2JqZWN0Jzoge1xuICAgICAgICAgICAgJ3ZhbHVlJzogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBidWlsZFBhcmFtZXRlck9iamVjdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAnZ2V0UGFyYW1ldGVyTmFtZXMnOiB7XG4gICAgICAgICAgICAndmFsdWUnOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhcmFtZXRlckxpc3QuZmlsdGVyKGZ1bmN0aW9uKHApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHAuZXhwb3NlZDtcbiAgICAgICAgICAgICAgICB9KS5tYXAoZnVuY3Rpb24ocCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocC5jb25zdHJ1Y3RvciA9PSB0aGlzLmNvbnN0cnVjdG9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcC5nZXRQYXJhbWV0ZXJOYW1lcygpLm1hcChmdW5jdGlvbihwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubmFtZSArIFwiLlwiICsgcDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHApLmZsYXQoKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwLm5hbWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCB0aGlzKS5mbGF0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgICdzZXRQYXJhbWV0ZXJCeU5hbWUnOiB7XG4gICAgICAgICAgICAndmFsdWUnOiBmdW5jdGlvbiAobiwgdiwgdXBkYXRlSW50ZXJmYWNlcykge1xuICAgICAgICAgICAgICAgIHZhciBwYXJhbWV0ZXIgPSBmaW5kUGFyYW1ldGVyKHRoaXMsIG4pO1xuICAgICAgICAgICAgICAgIGlmICghcGFyYW1ldGVyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHBhcmFtZXRlci5leHBvc2VkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBcIkNhbm5vdCBzZXQgaGlkZGVuIHBhcmFtZXRlclwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYXJhbWV0ZXIuc2V0VmFsdWUodiwgdXBkYXRlSW50ZXJmYWNlcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgICdkZWxldGVQYXJhbWV0ZXInOiB7XG4gICAgICAgICAgICAndmFsdWUnOiBmdW5jdGlvbiAobykge1xuICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IHBhcmFtZXRlckxpc3QuZmluZEluZGV4KGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlID09PSBvO1xuICAgICAgICAgICAgICAgIH0sIG8pO1xuICAgICAgICAgICAgICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIERvZXMgZXhpc3RcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1ldGVyTGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgICAgICBvLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgJ2RlbGV0ZUFsbFBhcmFtZXRlcnMnOiB7XG4gICAgICAgICAgICAndmFsdWUnOiBmdW5jdGlvbiAobykge1xuICAgICAgICAgICAgICAgIHBhcmFtZXRlckxpc3QuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICBlLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBwYXJhbWV0ZXJMaXN0ID0gW107XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgICdzZXRQYXJhbWV0ZXJzQnlPYmplY3QnOiB7XG4gICAgICAgICAgICAndmFsdWUnOiBmdW5jdGlvbiAob2JqZWN0LCB1cGRhdGVJbnRlcmZhY2VzKSB7XG4gICAgICAgICAgICAgICAgdmFyIGtleTtcbiAgICAgICAgICAgICAgICBmb3IgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9iamVjdC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG9iamVjdFtrZXldID09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFBhcmFtZXRlckJ5TmFtZShrZXksIG9iamVjdFtrZXldLnZhbHVlLCB1cGRhdGVJbnRlcmZhY2VzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIG9iamVjdFtrZXldID09IFwibnVtYmVyXCIgfHwgdHlwZW9mIG9iamVjdFtrZXldID09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFBhcmFtZXRlckJ5TmFtZShrZXksIG9iamVjdFtrZXldLCB1cGRhdGVJbnRlcmZhY2VzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgKFwiQ2Fubm90IHNldCBcIiArIGtleSArIFwiOiBOb3QgYSB2YWxpZCBvYmplY3RcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgICd0b0pTT04nOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcGFyYW1ldGVyTGlzdC5maWx0ZXIoZnVuY3Rpb24ocCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcC5leHBvc2VkO1xuICAgICAgICAgICAgICAgIH0pLnJlZHVjZShmdW5jdGlvbiAob2JqLCBlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlLmhhc093blByb3BlcnR5KFwidG9KU09OXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvYmpbZS5uYW1lXSA9IGUudG9KU09OKCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZS5oYXNPd25Qcm9wZXJ0eShcImdldFBhcmFtZXRlck9iamVjdFwiKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgb2JqW2UubmFtZV0gPSBlLmdldFBhcmFtZXRlck9iamVjdCgpO1xuICAgICAgICAgICAgICAgICAgICB9ZWxzZSBpZiAoZS5oYXNPd25Qcm9wZXJ0eShcInRvU3RyaW5nXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvYmpbZS5uYW1lXSA9IGUudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChlLmhhc093blByb3BlcnR5KFwidmFsdWVcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ialtlLm5hbWVdID0gZS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb2JqO1xuICAgICAgICAgICAgICAgIH0sIHt9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgJ3BhcmFtZXRlcnMnOiB7XG4gICAgICAgICAgICAnZ2V0JzogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBidWlsZFBhcmFtZXRlck9iamVjdCgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICdzZXQnOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgKFwiQ2Fubm90IHNldCwgdXNlIC5zZXRQYXJhbWV0ZXJCeS4uLigpXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImV4cG9zZWRcIjoge1xuICAgICAgICAgICAgXCJnZXRcIjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBleHBvc2VkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjoge1xuICAgICAgICAgICAgXCJnZXRcIjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBuYW1lO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59O1xuXG5leHBvcnQge1BhcmFtZXRlck1hbmFnZXJ9O1xuIiwiLyoganNoaW50IGVzdmVyc2lvbjogNiAqL1xuaW1wb3J0IHtQbHVnaW5QYXJhbWV0ZXJ9IGZyb20gXCIuL1BsdWdpblBhcmFtZXRlci5qc1wiO1xuaW1wb3J0IHtMaXN0UGFyYW1ldGVyfSBmcm9tIFwiLi9MaXN0UGFyYW1ldGVyLmpzXCI7XG5cbmZ1bmN0aW9uIEFzc2V0UGFyYW1ldGVyKG93bmVyLCByZXNvdXJjZVR5cGUsIG5hbWUsIHZpc2libGVOYW1lLCBleHBvc2VkKSB7XG4gICAgUGx1Z2luUGFyYW1ldGVyLmNhbGwodGhpcywgb3duZXIsIG5hbWUsIFwiU3RyaW5nXCIsIHZpc2libGVOYW1lLCBleHBvc2VkKTtcbiAgICB2YXIgcmVzb3VyY2VPcHRpb25zID0gb3duZXIuZmFjdG9yeS5wbHVnaW5Bc3NldHMuYXNzZXRQYWNrcy5maWx0ZXIoZnVuY3Rpb24ocGFjaykge1xuICAgICAgICByZXR1cm4gcGFjay5yZXNvdXJjZVR5cGUgPT0gcmVzb3VyY2VUeXBlO1xuICAgIH0pLm1hcChmdW5jdGlvbihwYWNrKSB7cmV0dXJuIHBhY2suYXNzZXRPYmplY3RzO30pLmZsYXQoKTtcbiAgICB2YXIgYXNzZXRMaXN0ID0gbmV3IExpc3RQYXJhbWV0ZXIob3duZXIsIG5hbWUrXCIgbGlzdFwiLCByZXNvdXJjZU9wdGlvbnNbMF0sIHJlc291cmNlT3B0aW9ucywgZnVuY3Rpb24odil7cmV0dXJuIHYudXJsO30sIG5hbWUrXCIgbGlzdFwiLCBmYWxzZSk7XG4gICAgdmFyIGF1ZGlvQnVmZmVyLCBvbmxvYWRDYWxsYmFjaywgb25lcnJvckNhbGxiYWNrO1xuXG4gICAgZnVuY3Rpb24gbG9hZEFzc2V0KCkge1xuICAgICAgICBhc3NldExpc3QudmFsdWUuZmV0Y2goKVxuICAgICAgICAudGhlbihmdW5jdGlvbihidWZmZXIpIHtcbiAgICAgICAgICAgIGF1ZGlvQnVmZmVyID0gYnVmZmVyO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBvbmxvYWRDYWxsYmFjayA9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICBvbmxvYWRDYWxsYmFjayhidWZmZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCBmdW5jdGlvbihlKXtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb25lcnJvckNhbGxiYWNrID09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgIG9uZXJyb3JDYWxsYmFjayhlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0VmFsdWUodiwgdXBkYXRlSW50ZXJmYWNlcykge1xuICAgICAgICBpZiAodHlwZW9mIHYgPT0gXCJvYmplY3RcIiAmJiB2Lmhhc093blByb3BlcnR5KFwidXJsXCIpKSB7XG4gICAgICAgICAgICB2ID0gdi51cmw7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHR2ID0gYXNzZXRMaXN0LnZhbHVlLnVybDtcbiAgICAgICAgdmFyIGl0ZW0gPSBhc3NldExpc3QubGlzdFZhbHVlcy5maW5kKGZ1bmN0aW9uKGwpIHtcbiAgICAgICAgICAgIHJldHVybiBsLnVybCA9PSB2O1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGl0ZW0pIHtcbiAgICAgICAgICAgIGFzc2V0TGlzdC52YWx1ZSA9IGl0ZW07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFzc2V0TGlzdC52YWx1ZS51cmwgIT0gdHYpIHtcbiAgICAgICAgICAgIC8vIGFzc2V0IGhhcyBjaGFuZ2VkIHVybC5cbiAgICAgICAgICAgIGxvYWRBc3NldCgpO1xuICAgICAgICAgICAgdGhpcy50cmlnZ2VyUGFyYW1ldGVyU2V0KHVwZGF0ZUludGVyZmFjZXMpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudHJpZ2dlcigpO1xuICAgICAgICByZXR1cm4gYXNzZXRMaXN0LnZhbHVlO1xuICAgIH1cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgICAgXCJvbmxvYWRcIjoge1xuICAgICAgICAgICAgXCJnZXRcIjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBvbmxvYWRDYWxsYmFjaztcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInNldFwiOiBmdW5jdGlvbihmKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBmICE9IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyhcIkFzc2V0UGFyYW1ldGVyOjpvbmxvYWQgcmVxdWlyZXMgYSBmdW5jdGlvbiB3aXRoIG9uZSBhcmd1bWVudCB0byBiZSBzZXRcIik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgb25sb2FkQ2FsbGJhY2sgPSBmO1xuICAgICAgICAgICAgICAgICAgICBpZiAoYXVkaW9CdWZmZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ubG9hZENhbGxiYWNrKGF1ZGlvQnVmZmVyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb25sb2FkQ2FsbGJhY2s7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcIm9uZXJyb3JcIjoge1xuICAgICAgICAgICAgXCJnZXRcIjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBvbmVycm9yQ2FsbGJhY2s7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJzZXRcIjogZnVuY3Rpb24oZikge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZiAhPSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3coXCJBc3NldFBhcmFtZXRlcjo6b25lcnJvciByZXF1aXJlcyBhIGZ1bmN0aW9uIHdpdGggb25lIGFyZ3VtZW50IHRvIGJlIHNldFwiKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBvbmVycm9yQ2FsbGJhY2sgPSBmO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb25lcnJvckNhbGxiYWNrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJ0eXBlXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogXCJBc3NldFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGVzdHJveVwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBhc3NldExpc3QuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgIG93bmVyID0gbmFtZSA9IGRlZmF1bHRWYWx1ZSA9IGFzc2V0TGlzdCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJ2YWx1ZVwiOiB7XG4gICAgICAgICAgICBcImdldFwiOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFzc2V0TGlzdC52YWx1ZS51cmw7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJzZXRcIjogZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICAgICAgICBzZXRWYWx1ZS5jYWxsKHRoaXMsIHYsIHRydWUpO1xuICAgICAgICAgICAgICAgIHJldHVybiBhc3NldExpc3QudmFsdWUudXJsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInNldFZhbHVlXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24odiwgdXBkYXRlSW50ZXJmYWNlcykge1xuICAgICAgICAgICAgICAgIHJldHVybiBzZXRWYWx1ZS5jYWxsKHRoaXMsIHYsIHVwZGF0ZUludGVyZmFjZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImdldFJlc291cmNlXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgaWYgKGF1ZGlvQnVmZmVyUHJvbWlzZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXVkaW9CdWZmZXJQcm9taXNlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBsb2FkQXNzZXQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiYnVmZmVyXCI6IHtcbiAgICAgICAgICAgIFwiZ2V0XCI6IGZ1bmN0aW9uKCkge3JldHVybiBhdWRpb0J1ZmZlcjt9XG4gICAgICAgIH0sXG4gICAgICAgIFwidG9TdHJpbmdcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbih2KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFzc2V0TGlzdC50b1N0cmluZyh2KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJvcHRpb25zXCI6IHtcbiAgICAgICAgICAgIFwiZ2V0XCI6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBhc3NldExpc3QubGlzdFZhbHVlcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRQYXJhbWV0ZXJPYmplY3RcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogYXNzZXRMaXN0LnZhbHVlLnRvSlNPTigpLFxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBhc3NldExpc3QubGlzdFZhbHVlcy5tYXAoZnVuY3Rpb24odil7cmV0dXJuIHYudG9KU09OKCk7fSksXG4gICAgICAgICAgICAgICAgICAgIGxvYWRlZDogKGF1ZGlvQnVmZmVyICE9PSB1bmRlZmluZWQpLFxuICAgICAgICAgICAgICAgICAgICB2aXNpYmxlTmFtZTogbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJBc3NldFBhcmFtZXRlclwiLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBuYW1lXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgbG9hZEFzc2V0KCk7XG59XG5Bc3NldFBhcmFtZXRlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFBsdWdpblBhcmFtZXRlci5wcm90b3R5cGUpO1xuQXNzZXRQYXJhbWV0ZXIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gQXNzZXRQYXJhbWV0ZXI7XG5cbmV4cG9ydCB7QXNzZXRQYXJhbWV0ZXJ9O1xuIiwiLyoganNoaW50IGVzdmVyc2lvbjogNiAqL1xuaW1wb3J0IHtQbHVnaW5QYXJhbWV0ZXJ9IGZyb20gXCIuL1BsdWdpblBhcmFtZXRlci5qc1wiO1xuXG5mdW5jdGlvbiBCdXR0b25QYXJhbWV0ZXIob3duZXIsIG5hbWUsIHZpc2libGVOYW1lLCBleHBvc2VkKSB7XG4gICAgUGx1Z2luUGFyYW1ldGVyLmNhbGwodGhpcywgb3duZXIsIG5hbWUsIFwiQnV0dG9uXCIsIHZpc2libGVOYW1lLCBleHBvc2VkKTtcbiAgICB2YXIgb25jbGljayA9IGZ1bmN0aW9uICgpIHt9O1xuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgICBcInR5cGVcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIkJ1dHRvblwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGVzdHJveVwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBvd25lciA9IG5hbWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwib25jbGlja1wiOiB7XG4gICAgICAgICAgICBcImdldFwiOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9uY2xpY2s7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJzZXRcIjogZnVuY3Rpb24gKGYpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGYgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyAoXCJvbmNsaWNrIG11c3QgYmUgYSBmdW5jdGlvblwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgb25jbGljayA9IGY7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0UGFyYW1ldGVyT2JqZWN0XCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgdmlzaWJsZU5hbWU6IG5hbWUsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiQnV0dG9uUGFyYW1ldGVyXCIsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IG5hbWVcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG5CdXR0b25QYXJhbWV0ZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShQbHVnaW5QYXJhbWV0ZXIucHJvdG90eXBlKTtcbkJ1dHRvblBhcmFtZXRlci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBCdXR0b25QYXJhbWV0ZXI7XG5cbmV4cG9ydCB7QnV0dG9uUGFyYW1ldGVyfTtcbiIsIi8qIGpzaGludCBlc3ZlcnNpb246IDYgKi9cbmltcG9ydCB7UGx1Z2luUGFyYW1ldGVyfSBmcm9tIFwiLi9QbHVnaW5QYXJhbWV0ZXIuanNcIjtcbmltcG9ydCB7UGFyYW1ldGVyU3RlcEF1dG9tYXRpb259IGZyb20gXCIuL1BhcmFtZXRlckF1dG9tYXRpb24uanNcIjtcblxuZnVuY3Rpb24gTGlzdFBhcmFtZXRlcihvd25lciwgbmFtZSwgZGVmYXVsdFZhbHVlLCBsaXN0T2ZWYWx1ZXMsIHRvU3RyaW5nRnVuYywgdmlzaWJsZU5hbWUsIGV4cG9zZWQpIHtcbiAgICBQbHVnaW5QYXJhbWV0ZXIuY2FsbCh0aGlzLCBvd25lciwgbmFtZSwgXCJCdXR0b25cIiwgdmlzaWJsZU5hbWUsIGV4cG9zZWQpO1xuICAgIHZhciBhdWRpb1BhcmFtZXRlciwgYXV0b21hdGlvbjtcbiAgICB2YXIgb25jbGljayA9IGZ1bmN0aW9uICgpIHt9O1xuICAgIHZhciBfaW5kZXggPSBsaXN0T2ZWYWx1ZXMuaW5kZXhPZihkZWZhdWx0VmFsdWUpO1xuXG4gICAgZnVuY3Rpb24gc2V0Vih2LCB1cGRhdGVJbnRlcmZhY2VzKSB7XG4gICAgICAgIHZhciBpID0gbGlzdE9mVmFsdWVzLmluZGV4T2Yodik7XG4gICAgICAgIGlmIChpID09PSB1bmRlZmluZWQgfHwgaSA8IDApIHtcbiAgICAgICAgICAgIHRocm93KFwiTm90IGluIGxpc3QgcmFuZ2VcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuYm91bmRBdWRpb1BhcmFtKSB7XG4gICAgICAgICAgICB0aGlzLmJvdW5kQXVkaW9QYXJhbS52YWx1ZSA9IHRoaXMudXBkYXRlKHYpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChfaW5kZXggIT09IGkpIHtcbiAgICAgICAgICAgIF9pbmRleCA9IGk7XG4gICAgICAgICAgICB0aGlzLnRyaWdnZXJQYXJhbWV0ZXJTZXQodXBkYXRlSW50ZXJmYWNlcyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50cmlnZ2VyKCk7XG4gICAgICAgIHJldHVybiBsaXN0T2ZWYWx1ZXNbX2luZGV4XTtcbiAgICB9XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XG4gICAgICAgIFwidHlwZVwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IFwiTGlzdFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGVzdHJveVwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBvd25lciA9IG5hbWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiZGVmYXVsdFZhbHVlXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZGVmYXVsdFZhbHVlXG4gICAgICAgIH0sXG4gICAgICAgIFwibGlzdFZhbHVlc1wiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGxpc3RPZlZhbHVlc1xuICAgICAgICB9LFxuICAgICAgICBcInZhbHVlXCI6IHtcbiAgICAgICAgICAgIFwiZ2V0XCI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAoYXVkaW9QYXJhbWV0ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNsYXRlKGF1ZGlvUGFyYW1ldGVyLnZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGxpc3RPZlZhbHVlc1tfaW5kZXhdO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwic2V0XCI6IGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNldFYuY2FsbCh0aGlzLCB2LCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJzZXRWYWx1ZVwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKHYsIHVwZGF0ZUludGVyZmFjZXMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2V0Vi5jYWxsKHRoaXMsIHYsIHVwZGF0ZUludGVyZmFjZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImluY3JlbWVudFwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgdiA9IF9pbmRleCArIDE7XG4gICAgICAgICAgICAgICAgaWYgKHYgPj0gbGlzdE9mVmFsdWVzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICB2ID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNldFYuY2FsbCh0aGlzLCB2KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJkZWNyZW1lbnRcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIHYgPSBfaW5kZXggLSAxO1xuICAgICAgICAgICAgICAgIGlmICh2IDwgMCkge1xuICAgICAgICAgICAgICAgICAgICB2ID0gbGlzdE9mVmFsdWVzLmxlbmd0aC0xO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gc2V0Vi5jYWxsKHRoaXMsIHYpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImJpbmRUb0F1ZGlvUGFyYW1cIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoYXApIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGFwID09IFwib2JqZWN0XCIgJiYgYXAudmFsdWUgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGF1ZGlvUGFyYW1ldGVyID0gYXA7XG4gICAgICAgICAgICAgICAgICAgIGF1ZGlvUGFyYW1ldGVyLnZhbHVlID0gdGhpcy51cGRhdGUobGlzdE9mVmFsdWVzW19pbmRleF0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAoYXAuc2V0VmFsdWVBdFRpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9tYXRpb24gPSBuZXcgUGFyYW1ldGVyU3RlcEF1dG9tYXRpb24odGhpcywgYXVkaW9QYXJhbWV0ZXIsIDAsIGxpc3RWYWx1ZXMubGVuZ3RoLCB0b1N0cmluZ0Z1bmMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZ2V0VmFsdWVBdFRpbWVQb2ludFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24odGltZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYXV0b21hdGlvblBvaW50cy5nZXRWYWx1ZUF0VGltZVBvaW50KHRpbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImF1dG9tYXRpb25Qb2ludHNcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGF1dG9tYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3RhcnRcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKHRpbWUsIGNvbnRleHRUaW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXV0b21hdGlvbi5zdGFydCh0aW1lLCBjb250ZXh0VGltZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3RvcFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24oY29udGV4dFRpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9tYXRpb24uc3RvcChjb250ZXh0VGltZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZW5hYmxlZFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZ2V0XCI6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGF1dG9tYXRpb24uZW5hYmxlZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzZXRcIjogZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChhdXRvbWF0aW9uLmVuYWJsZWQgPSB0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwiQ2Fubm90IGJpbmQgYXV0b21hdGlvbiBhcyBBdWRpb1BhcmFtZXRlciBpcyBub3QgYXV0b21hdGFibGVcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyhcIkFyZ3VtZW50IDEgaXMgbm90IGEgdmFsaWQgQXVkaW9QYXJhbWV0ZXIgb2JqZWN0XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJib3VuZEF1ZGlvUGFyYW1cIjoge1xuICAgICAgICAgICAgXCJjb25maWd1cmFibGVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwiZ2V0XCI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXVkaW9QYXJhbWV0ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiYXV0b21hdGFibGVcIjoge1xuICAgICAgICAgICAgXCJnZXRcIjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0eXBlb2YgYXV0b21hdGlvbiA9PSBcIm9iamVjdFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImFkZE9wdGlvblRvTGlzdFwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICAgICAgICB2YXIgdHlwZSA9IHR5cGVvZiB0O1xuICAgICAgICAgICAgICAgIGlmICh0eXBlICE9IFwic3RyaW5nXCIgJiYgdHlwZSAhPSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IFwiTGlzdFBhcmFtZXRlcjo6YWRkT3B0aW9uVG9MaXN0IEFyZ3VtZW50IDEgbXVzdCBiZSBvZiB0eXBlIHN0cmluZyBvciBudW1iZXJcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGxpc3RPZlZhbHVlcy5pbmNsdWRlcyh0KSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBcIkxpc3RQYXJhbWV0ZXI6OmFkZE9wdGlvblRvTGlzdCBBcmd1bWVudCAxIGNvbnRhaW5zIGEgdmFsdWUgYWxyZWFkeSBpbiB0aGUgbGlzdCBvcHRpb25zXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxpc3RPZlZhbHVlcy5wdXNoKHQpO1xuICAgICAgICAgICAgICAgIHJldHVybiBsaXN0T2ZWYWx1ZXM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiZGVsZXRlT3B0aW9uRnJvbUxpc3RcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbih0KSB7XG4gICAgICAgICAgICAgICAgdmFyIGluZGV4ID0gbGlzdE9mVmFsdWVzLmluZGV4T2YodCk7XG4gICAgICAgICAgICAgICAgdmFyIF92YWx1ZSA9IGxpc3RPZlZhbHVlc1tfaW5kZXhdO1xuICAgICAgICAgICAgICAgIGlmIChpbmRleCA9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBcIkxpc3RQYXJhbWV0ZXI6OmRlbGV0ZU9wdGlvbkZyb21MaXN0IGl0ZW0gXFxcIlwiK3QrXCJcXFwiIGRvZXMgbm90IGV4aXN0IGluIHRoaXMgbGlzdFwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsaXN0T2ZWYWx1ZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgICAgICBfaW5kZXggPSBfaW5kZXggJSBsaXN0T2ZWYWx1ZXMubGVuZ3RoO1xuICAgICAgICAgICAgICAgIHJldHVybiBsaXN0T2ZWYWx1ZXM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwidG9TdHJpbmdcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbih2KSB7XG4gICAgICAgICAgICAgICAgaWYgKHYgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHYgPSB0aGlzLnZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRvU3RyaW5nRnVuYyA9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRvU3RyaW5nRnVuYy5jYWxsKHRoaXMsIHYpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBTdHJpbmcodik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImdldFBhcmFtZXRlck9iamVjdFwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiB0aGlzLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBsaXN0T2ZWYWx1ZXMsXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogZGVmYXVsdFZhbHVlLFxuICAgICAgICAgICAgICAgICAgICBtaW5pbXVtOiAwLFxuICAgICAgICAgICAgICAgICAgICBtYXhpbXVtOiBsaXN0T2ZWYWx1ZXMubGVuZ3RoLFxuICAgICAgICAgICAgICAgICAgICB2aXNpYmxlTmFtZTogbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJMaXN0UGFyYW1ldGVyXCIsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IG5hbWVcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG5MaXN0UGFyYW1ldGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoUGx1Z2luUGFyYW1ldGVyLnByb3RvdHlwZSk7XG5MaXN0UGFyYW1ldGVyLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IExpc3RQYXJhbWV0ZXI7XG5cbmV4cG9ydCB7TGlzdFBhcmFtZXRlcn07XG4iLCIvKiBqc2hpbnQgZXN2ZXJzaW9uOiA2ICovXG5pbXBvcnQge1BsdWdpblBhcmFtZXRlcn0gZnJvbSBcIi4vUGx1Z2luUGFyYW1ldGVyLmpzXCI7XG5pbXBvcnQge1BhcmFtZXRlckxpbmVhckF1dG9tYXRpb259IGZyb20gXCIuL1BhcmFtZXRlckF1dG9tYXRpb24uanNcIjtcblxuZnVuY3Rpb24gTnVtYmVyUGFyYW1ldGVyKG93bmVyLCBuYW1lLCBkZWZhdWx0VmFsdWUsIG1pbmltdW0sIG1heGltdW0sIHRvU3RyaW5nRnVuYywgdmlzaWJsZU5hbWUsIGV4cG9zZWQpIHtcbiAgICBQbHVnaW5QYXJhbWV0ZXIuY2FsbCh0aGlzLCBvd25lciwgbmFtZSwgXCJOdW1iZXJcIiwgdmlzaWJsZU5hbWUsIGV4cG9zZWQpO1xuICAgIHZhciBhdWRpb1BhcmFtZXRlciwgYXV0b21hdGlvbjtcbiAgICB2YXIgX3ZhbHVlID0gZGVmYXVsdFZhbHVlLFxuICAgICAgICBfc3RlcFNpemU7XG5cbiAgICBmdW5jdGlvbiBzZXRWYWx1ZSh2LCB1cGRhdGVJbnRlcmZhY2VzKVxuICAgIHtcbiAgICAgICAgaWYgKGF1dG9tYXRpb24gJiYgYXV0b21hdGlvbi5lbmFibGVkKSB7XG4gICAgICAgICAgICB0aHJvdyhcIkF1dG9tYXRpb24gaXMgZW5hYmxlZCwgY2Fubm90IHNldCB0aGUgdmFsdWUhXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm1pbmltdW0pIHtcbiAgICAgICAgICAgIHYgPSBNYXRoLm1heCh2LCB0aGlzLm1pbmltdW0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm1heGltdW0pIHtcbiAgICAgICAgICAgIHYgPSBNYXRoLm1pbih2LCB0aGlzLm1heGltdW0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChfc3RlcFNpemUpIHtcbiAgICAgICAgICAgIHYgPSBNYXRoLnJvdW5kKHYgLyBfc3RlcFNpemUpO1xuICAgICAgICAgICAgdiA9IHYgKiBfc3RlcFNpemU7XG4gICAgICAgIH1cbiAgICAgICAgdiA9IHRoaXMudXBkYXRlKHYpO1xuICAgICAgICBpZiAoYXVkaW9QYXJhbWV0ZXIpIHtcbiAgICAgICAgICAgIGlmIChhdXRvbWF0aW9uKSB7XG4gICAgICAgICAgICAgICAgYXVkaW9QYXJhbWV0ZXIuc2V0VmFsdWVBdFRpbWUodiwgb3duZXIuZmFjdG9yeS5jb250ZXh0LmN1cnJlbnRUaW1lKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYXVkaW9QYXJhbWV0ZXIudmFsdWUgPSB2O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChfdmFsdWUgIT09IHYpIHtcbiAgICAgICAgICAgIF92YWx1ZSA9IHY7XG4gICAgICAgICAgICB0aGlzLnRyaWdnZXJQYXJhbWV0ZXJTZXQodXBkYXRlSW50ZXJmYWNlcyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50cmlnZ2VyKCk7XG4gICAgfVxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgICBcInR5cGVcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIk51bWJlclwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGVzdHJveVwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBvd25lciA9IG5hbWUgPSBkZWZhdWx0VmFsdWUgPSBtaW5pbXVtID0gbWF4aW11bSA9IF92YWx1ZSA9IF9zdGVwU2l6ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJtaW5pbXVtXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogbWluaW11bVxuICAgICAgICB9LFxuICAgICAgICBcIm1heGltdW1cIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBtYXhpbXVtXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGVmYXVsdFZhbHVlXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZGVmYXVsdFZhbHVlXG4gICAgICAgIH0sXG4gICAgICAgIFwidmFsdWVcIjoge1xuICAgICAgICAgICAgXCJnZXRcIjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmIChhdWRpb1BhcmFtZXRlcikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYXV0b21hdGlvbiAmJiBhdXRvbWF0aW9uLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0ID0gb3duZXIuZmFjdG9yeS5nZXRDdXJyZW50UHJvZ3JhbVRpbWUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhdXRvbWF0aW9uLmdldEN1cnJlbnRUaW1lVmFsdWUodCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNsYXRlKGF1ZGlvUGFyYW1ldGVyLnZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIF92YWx1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInNldFwiOiBmdW5jdGlvbiAodikge1xuICAgICAgICAgICAgICAgIHJldHVybiBzZXRWYWx1ZS5jYWxsKHRoaXMsIHYsIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInNldFZhbHVlXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24odiwgdXBkYXRlSW50ZXJmYWNlcykge1xuICAgICAgICAgICAgICAgIHJldHVybiBzZXRWYWx1ZS5jYWxsKHRoaXMsIHYsIHVwZGF0ZUludGVyZmFjZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInN0ZXBTaXplXCI6IHtcbiAgICAgICAgICAgIFwiZ2V0XCI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3N0ZXBTaXplO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwic2V0XCI6IGZ1bmN0aW9uIChuKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFpc0Zpbml0ZShuKSB8fCBuIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyAoXCJJbnZhbGlkIHN0ZXAgc2l6ZVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgX3N0ZXBTaXplID0gbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJiaW5kVG9BdWRpb1BhcmFtXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKGFwKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBhcCA9PSBcIm9iamVjdFwiICYmIGFwLnZhbHVlICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBhdWRpb1BhcmFtZXRlciA9IGFwO1xuICAgICAgICAgICAgICAgICAgICBhdWRpb1BhcmFtZXRlci52YWx1ZSA9IHRoaXMudXBkYXRlKF92YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhcC5zZXRWYWx1ZUF0VGltZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXV0b21hdGlvbiA9IG5ldyBQYXJhbWV0ZXJMaW5lYXJBdXRvbWF0aW9uKHRoaXMsIGF1ZGlvUGFyYW1ldGVyLCBtaW5pbXVtLCBtYXhpbXVtLCB0b1N0cmluZ0Z1bmMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZ2V0VmFsdWVBdFRpbWVQb2ludFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24odGltZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYXV0b21hdGlvblBvaW50cy5nZXRWYWx1ZUF0VGltZVBvaW50KHRpbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImF1dG9tYXRpb25Qb2ludHNcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGF1dG9tYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3RhcnRcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKHRpbWUsIGNvbnRleHRUaW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXV0b21hdGlvbi5zdGFydCh0aW1lLCBjb250ZXh0VGltZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3RvcFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24oY29udGV4dFRpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9tYXRpb24uc3RvcChjb250ZXh0VGltZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZW5hYmxlZFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZ2V0XCI6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGF1dG9tYXRpb24uZW5hYmxlZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzZXRcIjogZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChhdXRvbWF0aW9uLmVuYWJsZWQgPSB0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwiQ2Fubm90IGJpbmQgYXV0b21hdGlvbiBhcyBBdWRpb1BhcmFtZXRlciBpcyBub3QgYXV0b21hdGFibGVcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyhcIkFyZ3VtZW50IDEgaXMgbm90IGEgdmFsaWQgQXVkaW9QYXJhbWV0ZXIgb2JqZWN0XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJib3VuZEF1ZGlvUGFyYW1cIjoge1xuICAgICAgICAgICAgXCJjb25maWd1cmFibGVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwiZ2V0XCI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXVkaW9QYXJhbWV0ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiYXV0b21hdGFibGVcIjoge1xuICAgICAgICAgICAgXCJnZXRcIjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0eXBlb2YgYXV0b21hdGlvbiA9PSBcIm9iamVjdFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInRvU3RyaW5nXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24odikge1xuICAgICAgICAgICAgICAgIGlmICh2ID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICB2ID0gdGhpcy52YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0b1N0cmluZ0Z1bmMgPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0b1N0cmluZ0Z1bmMuY2FsbCh0aGlzLCB2KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gU3RyaW5nKHYpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRQYXJhbWV0ZXJPYmplY3RcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdGhpcy52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBkZWZhdWx0VmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIG1pbmltdW06IG1pbmltdW0sXG4gICAgICAgICAgICAgICAgICAgIG1heGltdW06IG1heGltdW0sXG4gICAgICAgICAgICAgICAgICAgIHZpc2libGVOYW1lOiBuYW1lLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIk51bWJlclBhcmFtZXRlclwiLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBuYW1lXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuTnVtYmVyUGFyYW1ldGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoUGx1Z2luUGFyYW1ldGVyLnByb3RvdHlwZSk7XG5OdW1iZXJQYXJhbWV0ZXIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gTnVtYmVyUGFyYW1ldGVyO1xuXG5leHBvcnQge051bWJlclBhcmFtZXRlcn07XG4iLCIvKiBqc2hpbnQgZXN2ZXJzaW9uOiA2ICovXG52YXIgVGltZVBvaW50ID0gZnVuY3Rpb24ob3duZXIsIHRpbWUsIHZhbHVlLCB0b1N0cmluZ0Z1bmMpIHtcbiAgICBpZiAodHlwZW9mIHRpbWUgIT0gXCJudW1iZXJcIiB8fCAhaXNGaW5pdGUodGltZSkgfHwgdGltZSA8IDApIHtcbiAgICAgICAgdGhyb3coXCJJbnZhbGlkIENvbnN0cnVjdG9yOiBUaW1lIG11c3QgYmUgYSBwb3NpdGl2ZSBudW1iZXJcIik7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgdmFsdWUgIT0gXCJudW1iZXJcIiB8fCAhaXNGaW5pdGUodmFsdWUpKSB7XG4gICAgICAgIHRocm93KFwiSW52YWxpZCBDb25zdHJ1Y3RvcjogVmFsdWUgbXVzdCBiZSBhIG51bWJlclwiKTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgICBcInRpbWVcIjoge1xuICAgICAgICAgICAgXCJnZXRcIjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRpbWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJzZXRcIjogZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNldFRpbWUodCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwidmFsdWVcIjoge1xuICAgICAgICAgICAgXCJnZXRcIjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwic2V0XCI6IGZ1bmN0aW9uKHYpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zZXRWYWx1ZSh2KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJzZXRWYWx1ZVwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKHYpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHYgIT0gXCJudW1iZXJcIiB8fCAhaXNGaW5pdGUodikpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3coXCJWYWx1ZSBtdXN0IGJlIGEgbnVtYmVyXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YWx1ZSA9IE1hdGgubWluKE1hdGgubWF4KHYsIG93bmVyLm1pbmltdW0pLCBvd25lci5tYXhpbXVtKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwic2V0VGltZVwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHQgPT0gXCJudW1iZXJcIiAmJiBpc0Zpbml0ZSh0KSAmJiB0ID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGltZSA9IHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0aW1lO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInRvU3RyaW5nXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0b1N0cmluZ0Z1bmMgPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0b1N0cmluZ0Z1bmMuY2FsbCh0aGlzLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBTdHJpbmcodmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcIm93bmVyXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogb3duZXJcbiAgICAgICAgfVxuICAgIH0pO1xufTtcblxudmFyIFRpbWVQb2ludExpc3QgPSBmdW5jdGlvbihtaW5fdmFsdWUsIG1heF92YWx1ZSwgdG9TdHJpbmdGdW5jKSB7XG4gICAgZnVuY3Rpb24gZ2V0UG9pbnRBdFRpbWUoYXV0b21hdGlvblBvaW50cywgdGltZSkge1xuICAgICAgICByZXR1cm4gYXV0b21hdGlvblBvaW50cy5maW5kKGZ1bmN0aW9uKHApIHtcbiAgICAgICAgICAgIHJldHVybiBwLnRpbWUgPT0gdGltZTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGhhc1BvaW50QXRUaW1lKGF1dG9tYXRpb25Qb2ludHMsIHRpbWUpIHtcbiAgICAgICAgcmV0dXJuIGdldFBvaW50QXRUaW1lKGF1dG9tYXRpb25Qb2ludHMsIHRpbWUpICE9PSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHNvcnRQb2ludHMoYXV0b21hdGlvblBvaW50cykge1xuICAgICAgICByZXR1cm4gYXV0b21hdGlvblBvaW50cy5zb3J0KGZ1bmN0aW9uKGEsYikge1xuICAgICAgICAgICAgaWYgKGEudGltZSA+IGIudGltZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIG1pbl92YWx1ZSAhPSBcIm51bWJlclwiIHx8ICFpc0Zpbml0ZShtaW5fdmFsdWUpKSB7XG4gICAgICAgIHRocm93KFwiSW52YWxpZCBDb25zdHJ1Y3RvcjogbWluX3ZhbHVlIGJlIGEgbnVtYmVyXCIpO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIG1heF92YWx1ZSAhPSBcIm51bWJlclwiIHx8ICFpc0Zpbml0ZShtYXhfdmFsdWUpKSB7XG4gICAgICAgIHRocm93KFwiSW52YWxpZCBDb25zdHJ1Y3RvcjogbWF4X3ZhbHVlIGJlIGEgbnVtYmVyXCIpO1xuICAgIH1cbiAgICBpZiAobWluX3ZhbHVlID09IG1heF92YWx1ZSkge1xuICAgICAgICB0aHJvdyhcIkludmFsaWQgQ29uc3RydWN0b3I6IG1heF92YWx1ZSBjYW5ub3QgZXF1YWwgdG8gbWluX3ZhbHVlXCIpO1xuICAgIH1cbiAgICBpZiAobWF4X3ZhbHVlIDwgbWluX3ZhbHVlKSB7XG4gICAgICAgIHRocm93KFwiSW52YWxpZCBDb25zdHJ1Y3RvcjogbWluX3ZhbHVlIGNhbm5vdCBiZSBncmVhdGVyIHRoYW4gbWF4X3ZhbHVlXCIpO1xuICAgIH1cbiAgICB2YXIgYXV0b21hdGlvblBvaW50cyA9IFtdO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgICAgXCJpbnNlcnRQb2ludFwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKHRpbWUsIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aW1lICE9IFwibnVtYmVyXCIgfHwgIWlzRmluaXRlKHRpbWUpIHx8IHRpbWUgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93KFwiVGltZSBtdXN0IGJlIGEgcG9zaXRpdmUgbnVtYmVyXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlICE9IFwibnVtYmVyXCIgfHwgIWlzRmluaXRlKHZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyhcIlZhbHVlIG11c3QgYmUgYSBudW1iZXJcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChoYXNQb2ludEF0VGltZShhdXRvbWF0aW9uUG9pbnRzLCB0aW1lKSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyhcIkFscmVhZHkgYSB2YWx1ZSBlbnRyeSBhdCB0aW1lIFwiK3RpbWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YWx1ZSA9IE1hdGgubWluKE1hdGgubWF4KHZhbHVlLCBtaW5fdmFsdWUpLCBtYXhfdmFsdWUpO1xuICAgICAgICAgICAgICAgIHZhciBwb2ludCA9IG5ldyBUaW1lUG9pbnQodGhpcywgdGltZSwgdmFsdWUsIHRvU3RyaW5nRnVuYyk7XG4gICAgICAgICAgICAgICAgYXV0b21hdGlvblBvaW50cy5wdXNoKHBvaW50KTtcbiAgICAgICAgICAgICAgICBhdXRvbWF0aW9uUG9pbnRzID0gc29ydFBvaW50cyhhdXRvbWF0aW9uUG9pbnRzKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcG9pbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0UG9pbnRzXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24oc3RhcnRfdGltZSwgZW5kX3RpbWUpIHtcbiAgICAgICAgICAgICAgICBpZiAoc3RhcnRfdGltZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0X3RpbWUgPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZW5kX3RpbWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBlbmRfdGltZSA9IEluZmluaXR5O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gYXV0b21hdGlvblBvaW50cy5maWx0ZXIoZnVuY3Rpb24ocG9pbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBvaW50LnRpbWUgPj0gc3RhcnRfdGltZSAmJiBwb2ludC50aW1lIDwgZW5kX3RpbWU7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiZGVsZXRlUG9pbnRcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbih0aW1lKSB7XG4gICAgICAgICAgICAgICAgdmFyIGluZGV4ID0gYXV0b21hdGlvblBvaW50cy5maW5kSW5kZXgoZnVuY3Rpb24ocG9pbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBvaW50LnRpbWUgPT0gdGltZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICBhdXRvbWF0aW9uUG9pbnRzLnNwbGljZShpbmRleCwgMSwgMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBhdXRvbWF0aW9uUG9pbnRzLmxlbmd0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRTdGF0aWNWYWx1ZUFzU3RyaW5nXCI6IHtcbiAgICAgICAgICAgIFwid3JpdGFibGVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFN0cmluZyh2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0VmFsdWVBdFRpbWVQb2ludFwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICh0aW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGdldFBvaW50QXRUaW1lKGF1dG9tYXRpb25Qb2ludHMsIHRpbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImxlbmd0aFwiOiB7XG4gICAgICAgICAgICBcImdldFwiOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXV0b21hdGlvblBvaW50cy5sZW5ndGg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwibWluaW11bVwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IG1pbl92YWx1ZVxuICAgICAgICB9LFxuICAgICAgICBcIm1heGltdW1cIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBtYXhfdmFsdWVcbiAgICAgICAgfSxcbiAgICAgICAgXCJ1cGRhdGVQb2ludFwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKHRpbWUsIG9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICB2YXIgcG9pbnQgPSBhdXRvbWF0aW9uUG9pbnRzLmZpbmQoZnVuY3Rpb24ocG9pbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBvaW50LnRpbWUgPT0gdGltZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAocG9pbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLnRpbWUgPT0gXCJudW1iZXJcIiAmJiBvcHRpb25zLnRpbWUgIT0gcG9pbnQudGltZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdldFBvaW50QXRUaW1lKGF1dG9tYXRpb25Qb2ludHMsIHRpbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3coXCJBIHRpbWUtcG9pbnQgYWxyZWFkeSBleGlzdHMgYXQgXFxcIlwiK1N0cmluZyhvcHRpb25zLnRpbWUpK1wiXFxcIiBzZWNvbmRzXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb2ludC50aW1lID0gb3B0aW9ucy50aW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9tYXRpb25Qb2ludHMgPSBzb3J0UG9pbnRzKGF1dG9tYXRpb25Qb2ludHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHBvaW50LnZhbHVlID0gb3B0aW9ucy52YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBvaW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59O1xuXG52YXIgUGFyYW1ldGVyQXV0b21hdGlvbiA9IGZ1bmN0aW9uKHBhcmFtZXRlciwgbWluX3ZhbHVlLCBtYXhfdmFsdWUsIHRvU3RyaW5nRnVuYykge1xuICAgIFRpbWVQb2ludExpc3QuY2FsbCh0aGlzLCBtaW5fdmFsdWUsIG1heF92YWx1ZSwgdG9TdHJpbmdGdW5jKTtcbiAgICB2YXIgZW5hYmxlZCA9IGZhbHNlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgICAgXCJlbmFibGVkXCI6IHtcbiAgICAgICAgICAgIFwiZ2V0XCI6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBlbmFibGVkO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwic2V0XCI6IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGVuYWJsZWQgPSAodCA9PT0gdHJ1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBlbmFibGVkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59O1xuXG52YXIgUGFyYW1ldGVyTGluZWFyQXV0b21hdGlvbiA9IGZ1bmN0aW9uIChvd25lciwgcGFyYW1ldGVyLCBtaW5fdmFsdWUsIG1heF92YWx1ZSwgdG9TdHJpbmdGdW5jKSB7XG4gICAgUGFyYW1ldGVyQXV0b21hdGlvbi5jYWxsKHRoaXMsIHBhcmFtZXRlciwgbWluX3ZhbHVlLCBtYXhfdmFsdWUsIHRvU3RyaW5nRnVuYyk7XG4gICAgZnVuY3Rpb24gbGluZWFySW50ZXJwb2xhdGlvbih0aW1lLCBwb2ludEEsIHBvaW50Qikge1xuICAgICAgICB2YXIgdDEgPSBwb2ludEEudGltZTtcbiAgICAgICAgdmFyIHQyID0gcG9pbnRCLnRpbWU7XG4gICAgICAgIHRpbWUgLT0gdDE7XG4gICAgICAgIHQyIC09IHQxO1xuICAgICAgICB0MSA9IDA7XG5cbiAgICAgICAgdmFyIHAgPSB0aW1lL3QyO1xuICAgICAgICByZXR1cm4gcG9pbnRBLnZhbHVlICogKDEtcCkgKyBwb2ludEIudmFsdWUgKiBwO1xuICAgIH1cbiAgICBmdW5jdGlvbiBnZXRDdXJyZW50VGltZVZhbHVlKGF1dG9tYXRpb25Qb2ludHMsIHRpbWUpIHtcbiAgICAgICAgaWYgKGF1dG9tYXRpb25Qb2ludHMubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgIHRocm93KFwiTm8gYXV0b21hdGlvbiBwb2ludHMgYXZhaWxhYmxlXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhdXRvbWF0aW9uUG9pbnRzLmxlbmd0aCA9PSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gYXV0b21hdGlvblBvaW50c1swXS52YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBmaXJzdFBvaW50ID0gYXV0b21hdGlvblBvaW50cy5yZWR1Y2UoZnVuY3Rpb24ocG9pbnQsIG5leHRQb2ludCkge1xuICAgICAgICAgICAgaWYgKG5leHRQb2ludC50aW1lIDw9IHRpbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV4dFBvaW50O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcG9pbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIGF1dG9tYXRpb25Qb2ludHNbMF0pO1xuICAgICAgICB2YXIgc2Vjb25kUG9pbnQgPSBhdXRvbWF0aW9uUG9pbnRzLmZpbmQoZnVuY3Rpb24ocG9pbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBwb2ludC50aW1lID4gZmlyc3RQb2ludC50aW1lO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHNlY29uZFBvaW50ID09PSB1bmRlZmluZWQgfHwgZmlyc3RQb2ludC50aW1lID4gdGltZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZpcnN0UG9pbnQudmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxpbmVhckludGVycG9sYXRpb24odGltZSwgZmlyc3RQb2ludCwgc2Vjb25kUG9pbnQpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHN0YXJ0KGF1dG9tYXRpb25Qb2ludHMsIHRpbWUsIGNvbnRleHRUaW1lKSB7XG4gICAgICAgIHZhciBzdGFydFBvc2l0aW9uID0gb3duZXIudXBkYXRlKGdldEN1cnJlbnRUaW1lVmFsdWUoYXV0b21hdGlvblBvaW50cywgdGltZSkpO1xuICAgICAgICBwYXJhbWV0ZXIuc2V0VmFsdWVBdFRpbWUoc3RhcnRQb3NpdGlvbiwgY29udGV4dFRpbWUpO1xuICAgICAgICBhdXRvbWF0aW9uUG9pbnRzLmZvckVhY2goZnVuY3Rpb24ocCkge1xuICAgICAgICAgICAgaWYgKHAudGltZSA+IHRpbWUpIHtcbiAgICAgICAgICAgICAgICB2YXIgdCA9IHAudGltZSAtIHRpbWU7XG4gICAgICAgICAgICAgICAgdmFyIHYgPSBvd25lci51cGRhdGUocC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgcGFyYW1ldGVyLmxpbmVhclJhbXBUb1ZhbHVlQXRUaW1lKHYsIHQrY29udGV4dFRpbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzdG9wKGNvbnRleHRUaW1lKSB7XG4gICAgICAgIGlmIChjb250ZXh0VGltZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjb250ZXh0VGltZSA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgcGFyYW1ldGVyLmNhbmNlbFNjaGVkdWxlZFZhbHVlcyhjb250ZXh0VGltZSk7XG4gICAgfVxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgICBcImdldEN1cnJlbnRUaW1lVmFsdWVcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbih0aW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGdldEN1cnJlbnRUaW1lVmFsdWUodGhpcy5nZXRQb2ludHMoKSwgdGltZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwic3RhcnRcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbih0aW1lLCBjb250ZXh0VGltZSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmVuYWJsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhcnQodGhpcy5nZXRQb2ludHMoKSwgdGltZSwgY29udGV4dFRpbWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJzdG9wXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24oY29udGV4dFRpbWUpIHtcbiAgICAgICAgICAgICAgICBzdG9wKGNvbnRleHRUaW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuXG59O1xuUGFyYW1ldGVyTGluZWFyQXV0b21hdGlvbi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFBhcmFtZXRlckF1dG9tYXRpb24ucHJvdG90eXBlKTtcblBhcmFtZXRlckxpbmVhckF1dG9tYXRpb24ucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gUGFyYW1ldGVyTGluZWFyQXV0b21hdGlvbjtcblxudmFyIFBhcmFtZXRlclN0ZXBBdXRvbWF0aW9uID0gZnVuY3Rpb24gKG93bmVyLCBwYXJhbWV0ZXIsIG1pbl92YWx1ZSwgbWF4X3ZhbHVlLCB0b1N0cmluZ0Z1bmMpIHtcbiAgICBQYXJhbWV0ZXJBdXRvbWF0aW9uLmNhbGwodGhpcywgcGFyYW1ldGVyLCBtaW5fdmFsdWUsIG1heF92YWx1ZSwgdG9TdHJpbmdGdW5jKTtcbiAgICBmdW5jdGlvbiBnZXRDdXJyZW50VGltZVZhbHVlKGF1dG9tYXRpb25Qb2ludHMsIHRpbWUpIHtcbiAgICAgICAgaWYgKGF1dG9tYXRpb25Qb2ludHMubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgIHRocm93KFwiTm8gYXV0b21hdGlvbiBwb2ludHMgYXZhaWxhYmxlXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhdXRvbWF0aW9uUG9pbnRzLmxlbmd0aCA9PSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gYXV0b21hdGlvblBvaW50c1swXS52YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBuZWFyZXN0UG9pbnQgPSBhdXRvbWF0aW9uUG9pbnRzLnJlZHVjZShmdW5jdGlvbihwb2ludCwgbmV4dFBvaW50KSB7XG4gICAgICAgICAgICBpZiAobmV4dFBvaW50LnRpbWUgPD0gdGltZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXh0UG9pbnQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBwb2ludDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgYXV0b21hdGlvblBvaW50c1swXSk7XG4gICAgICAgIHJldHVybiBuZWFyZXN0UG9pbnQudmFsdWU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3RhcnQoYXV0b21hdGlvblBvaW50cywgdGltZSwgY29udGV4dFRpbWUpIHtcbiAgICAgICAgdmFyIHN0YXJ0UG9zaXRpb24gPSBvd25lci51cGRhdGUoZ2V0Q3VycmVudFRpbWVWYWx1ZShhdXRvbWF0aW9uUG9pbnRzLCB0aW1lKSk7XG4gICAgICAgIHBhcmFtZXRlci5zZXRWYWx1ZUF0VGltZShzdGFydFBvc2l0aW9uLCBjb250ZXh0VGltZSk7XG4gICAgICAgIGF1dG9tYXRpb25Qb2ludHMuZm9yRWFjaChmdW5jdGlvbihwKSB7XG4gICAgICAgICAgICBpZiAocC50aW1lID4gdGltZSkge1xuICAgICAgICAgICAgICAgIHZhciB0ID0gcC50aW1lIC0gdGltZTtcbiAgICAgICAgICAgICAgICB2YXIgdiA9IG93bmVyLnVwZGF0ZShwLnZhbHVlKTtcbiAgICAgICAgICAgICAgICBwYXJhbWV0ZXIuc2V0VmFsdWVBdFRpbWUodiwgdCtjb250ZXh0VGltZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHN0b3AoY29udGV4dFRpbWUpIHtcbiAgICAgICAgcGFyYW1ldGVyLmNhbmNlbFNjaGVkdWxlZFZhbHVlcyhjb250ZXh0VGltZSk7XG4gICAgfVxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgICBcImdldEN1cnJlbnRUaW1lVmFsdWVcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbih0aW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGdldEN1cnJlbnRUaW1lVmFsdWUodGhpcy5nZXRQb2ludHMoKSwgdGltZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwic3RhcnRcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbih0aW1lLCBjb250ZXh0VGltZSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmVuYWJsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhcnQodGhpcy5nZXRQb2ludHMoKSwgdGltZSwgY29udGV4dFRpbWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJzdG9wXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24oY29udGV4dFRpbWUpIHtcbiAgICAgICAgICAgICAgICBzdG9wKGNvbnRleHRUaW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufTtcblBhcmFtZXRlclN0ZXBBdXRvbWF0aW9uLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoUGFyYW1ldGVyQXV0b21hdGlvbi5wcm90b3R5cGUpO1xuUGFyYW1ldGVyU3RlcEF1dG9tYXRpb24ucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gUGFyYW1ldGVyU3RlcEF1dG9tYXRpb247XG5cbmV4cG9ydCB7UGFyYW1ldGVyTGluZWFyQXV0b21hdGlvbiwgUGFyYW1ldGVyU3RlcEF1dG9tYXRpb259O1xuIiwiLyoganNoaW50IGVzdmVyc2lvbjogNiAqL1xuZnVuY3Rpb24gUGx1Z2luUGFyYW1ldGVyKG93bmVyLCBuYW1lLCBkYXRhVHlwZSwgdmlzaWJsZU5hbWUsIGV4cG9zZWQpIHtcbiAgICB2YXIgdXBkYXRlLCB0cmFuc2xhdGUsIHRyaWdnZXI7XG4gICAgdmFyIGV2ZW50VGFyZ2V0ID0gbmV3IEV2ZW50VGFyZ2V0KCk7XG4gICAgdXBkYXRlID0gdHJhbnNsYXRlID0gZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgcmV0dXJuIHY7XG4gICAgfTtcbiAgICB0cmlnZ2VyID0gZnVuY3Rpb24gKCkge307XG4gICAgaWYgKHR5cGVvZiB2aXNpYmxlTmFtZSAhPSBcInN0cmluZ1wiIHx8IHZpc2libGVOYW1lLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgIHZpc2libGVOYW1lID0gbmFtZTtcbiAgICB9XG4gICAgaWYgKGV4cG9zZWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBleHBvc2VkID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBleHBvc2VkICE9IFwiYm9vbGVhblwiKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcImV4cG9zZWQgcGFyYW1ldGVyIGlzIG5vdCBvZiB0eXBlIGJvb2xlYW4sIGFzc3VtaW5nIGV4cG9zZWQgPSB0cnVlXCIpO1xuICAgICAgICBleHBvc2VkID0gdHJ1ZTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgICBcImFkZEV2ZW50TGlzdGVuZXJcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbih0eXBlLCBsaXN0ZW5lciwgb3B0aW9ucykge1xuICAgICAgICAgICAgICAgIHJldHVybiBldmVudFRhcmdldC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyLCBvcHRpb25zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJyZW1vdmVFdmVudExpc3RlbmVyXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24odHlwZSwgbGlzdGVuZXIsIG9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZXZlbnRUYXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lciwgb3B0aW9ucyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwidHJpZ2dlclBhcmFtZXRlclNldFwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKHVwZGF0ZUludGVyZmFjZXMpIHtcbiAgICAgICAgICAgICAgICB2YXIgb3B0cyA9IHtkZXRhaWw6IHtcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1ldGVyOiB0aGlzLFxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVJbnRlcmZhY2VzOiB1cGRhdGVJbnRlcmZhY2VzXG4gICAgICAgICAgICAgICAgfX07XG4gICAgICAgICAgICAgICAgZXZlbnRUYXJnZXQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJwYXJhbWV0ZXJzZXRcIiwgb3B0cykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBuYW1lXG4gICAgICAgIH0sXG4gICAgICAgIFwib3duZXJcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBvd25lclxuICAgICAgICB9LFxuICAgICAgICBcInZpc2libGVOYW1lXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogdmlzaWJsZU5hbWVcbiAgICAgICAgfSxcbiAgICAgICAgXCJleHBvc2VkXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZXhwb3NlZFxuICAgICAgICB9LFxuICAgICAgICBcInVwZGF0ZVwiOiB7XG4gICAgICAgICAgICBcImdldFwiOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHVwZGF0ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInNldFwiOiBmdW5jdGlvbiAoZikge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IChcIk11c3QgYmUgYSBjYWxsYmFjayBmdW5jdGlvblwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGYoMCkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyAoXCJGdW5jdGlvbiBtdXN0IHJldHVybiBhIHZhbHVlXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB1cGRhdGUgPSBmO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInRyYW5zbGF0ZVwiOiB7XG4gICAgICAgICAgICBcImdldFwiOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRyYW5zbGF0ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInNldFwiOiBmdW5jdGlvbiAoZikge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IChcIk11c3QgYmUgYSBjYWxsYmFjayBmdW5jdGlvblwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGYoMCkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyAoXCJGdW5jdGlvbiBtdXN0IHJldHVybiBhIHZhbHVlXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0cmFuc2xhdGUgPSBmO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInRyaWdnZXJcIjoge1xuICAgICAgICAgICAgXCJnZXRcIjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cmlnZ2VyO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwic2V0XCI6IGZ1bmN0aW9uIChmKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBmICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgKFwiTXVzdCBiZSBhIGNhbGxiYWNrIGZ1bmN0aW9uXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0cmlnZ2VyID0gZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJiaW5kVG9BdWRpb1BhcmFtXCI6IHtcbiAgICAgICAgICAgIFwiY29uZmlndXJhYmxlXCI6IHRydWUsXG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uIChhcCkge1xuICAgICAgICAgICAgICAgIHRocm93KFwiQ2Fubm90IGJpbmQgdGhpcyBwYXJhbWV0ZXIgdHlwZSB0byBhbiBhdWRpbyBwYXJhbWV0ZXJcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiYm91bmRBdWRpb1BhcmFtXCI6IHtcbiAgICAgICAgICAgIFwiY29uZmlndXJhYmxlXCI6IHRydWUsXG4gICAgICAgICAgICBcImdldFwiOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5leHBvcnQge1BsdWdpblBhcmFtZXRlcn07XG4iLCIvKiBqc2hpbnQgZXN2ZXJzaW9uOiA2ICovXG5pbXBvcnQge1BsdWdpblBhcmFtZXRlcn0gZnJvbSBcIi4vUGx1Z2luUGFyYW1ldGVyLmpzXCI7XG5cbmZ1bmN0aW9uIFN0cmluZ1BhcmFtZXRlcihvd25lciwgbmFtZSwgZGVmYXVsdFZhbHVlLCBtYXhMZW5ndGgsIHRvU3RyaW5nRnVuYywgdmlzaWJsZU5hbWUsIGV4cG9zZWQpIHtcbiAgICBQbHVnaW5QYXJhbWV0ZXIuY2FsbCh0aGlzLCBvd25lciwgbmFtZSwgXCJTdHJpbmdcIiwgdmlzaWJsZU5hbWUsIGV4cG9zZWQpO1xuICAgIHZhciBfdmFsdWUgPSBkZWZhdWx0VmFsdWU7XG4gICAgdmFyIGF1ZGlvUGFyYW1ldGVyO1xuXG4gICAgZnVuY3Rpb24gc2V0VmFsdWUodiwgdXBkYXRlSW50ZXJmYWNlcykge1xuICAgICAgICBpZiAobWF4TGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAodi5sZW5ndGggPiBtYXhMZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyAoXCJTdHJpbmcgbG9uZ2VyIHRoYW4gXCIgKyBtYXhMZW5ndGggKyBcIiBjaGFyYWN0ZXJzXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmJvdW5kQXVkaW9QYXJhbSkge1xuICAgICAgICAgICAgdGhpcy5ib3VuZEF1ZGlvUGFyYW0udmFsdWUgPSB0aGlzLnVwZGF0ZSh2KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoX3ZhbHVlICE9PSB2KSB7XG4gICAgICAgICAgICBfdmFsdWUgPSB2O1xuICAgICAgICAgICAgdGhpcy50cmlnZ2VyUGFyYW1ldGVyU2V0KHVwZGF0ZUludGVyZmFjZXMpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudHJpZ2dlcigpO1xuICAgIH1cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgICAgXCJ0eXBlXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogXCJTdHJpbmdcIlxuICAgICAgICB9LFxuICAgICAgICBcImRlc3Ryb3lcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgb3duZXIgPSBuYW1lID0gZGVmYXVsdFZhbHVlID0gbWF4TGVuZ3RoID0gX3ZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcIm1heExlbmd0aFwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IG1heExlbmd0aFxuICAgICAgICB9LFxuICAgICAgICBcImRlZmF1bHRWYWx1ZVwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGRlZmF1bHRWYWx1ZVxuICAgICAgICB9LFxuICAgICAgICBcInZhbHVlXCI6IHtcbiAgICAgICAgICAgIFwiZ2V0XCI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5ib3VuZEF1ZGlvUGFyYW0pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNsYXRlKHRoaXMuYm91bmRBdWRpb1BhcmFtLnZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIF92YWx1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInNldFwiOiBmdW5jdGlvbiAodikge1xuICAgICAgICAgICAgICAgIHJldHVybiBzZXRWYWx1ZS5jYWxsKHRoaXMsIHYsIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInNldFZhbHVlXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24odiwgdXBkYXRlSW50ZXJmYWNlcykge1xuICAgICAgICAgICAgICAgIHJldHVybiBzZXRWYWx1ZS5jYWxsKHRoaXMsIHYsIHVwZGF0ZUludGVyZmFjZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImJpbmRUb0F1ZGlvUGFyYW1cIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoYXApIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGFwID09IFwib2JqZWN0XCIgJiYgYXAudmFsdWUgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGF1ZGlvUGFyYW1ldGVyID0gYXA7XG4gICAgICAgICAgICAgICAgICAgIGF1ZGlvUGFyYW1ldGVyLnZhbHVlID0gdGhpcy51cGRhdGUoX3ZhbHVlKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyhcIkFyZ3VtZW50IDEgaXMgbm90IGEgdmFsaWQgQXVkaW9QYXJhbWV0ZXIgb2JqZWN0XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJib3VuZEF1ZGlvUGFyYW1cIjoge1xuICAgICAgICAgICAgXCJjb25maWd1cmFibGVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwiZ2V0XCI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXVkaW9QYXJhbWV0ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwidG9TdHJpbmdcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbih2KSB7XG4gICAgICAgICAgICAgICAgaWYgKHYgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHYgPSB0aGlzLnZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRvU3RyaW5nRnVuYyA9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRvU3RyaW5nRnVuYy5jYWxsKHRoaXMsIHYpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBTdHJpbmcodik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImdldFBhcmFtZXRlck9iamVjdFwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiB0aGlzLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU6IGRlZmF1bHRWYWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoOiBtYXhMZW5ndGgsXG4gICAgICAgICAgICAgICAgICAgIHZpc2libGVOYW1lOiBuYW1lLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIlN0cmluZ1BhcmFtZXRlclwiLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBuYW1lXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuU3RyaW5nUGFyYW1ldGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoUGx1Z2luUGFyYW1ldGVyLnByb3RvdHlwZSk7XG5TdHJpbmdQYXJhbWV0ZXIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gU3RyaW5nUGFyYW1ldGVyO1xuXG5leHBvcnQge1N0cmluZ1BhcmFtZXRlcn07XG4iLCIvKiBqc2hpbnQgZXN2ZXJzaW9uOiA2ICovXG5pbXBvcnQge1BsdWdpblBhcmFtZXRlcn0gZnJvbSBcIi4vUGx1Z2luUGFyYW1ldGVyLmpzXCI7XG5pbXBvcnQge1BhcmFtZXRlclN0ZXBBdXRvbWF0aW9ufSBmcm9tIFwiLi9QYXJhbWV0ZXJBdXRvbWF0aW9uLmpzXCI7XG5cbmZ1bmN0aW9uIFN3aXRjaFBhcmFtZXRlcihvd25lciwgbmFtZSwgZGVmYXVsdFZhbHVlLCBtaW5TdGF0ZSwgbWF4U3RhdGUsIHRvU3RyaW5nRnVuYywgdmlzaWJsZU5hbWUsIGV4cG9zZWQpIHtcbiAgICBQbHVnaW5QYXJhbWV0ZXIuY2FsbCh0aGlzLCBvd25lciwgbmFtZSwgXCJCdXR0b25cIiwgdmlzaWJsZU5hbWUsIGV4cG9zZWQpO1xuICAgIHZhciBvbmNsaWNrID0gZnVuY3Rpb24gKCkge307XG4gICAgdmFyIF92YWx1ZSA9IGRlZmF1bHRWYWx1ZTtcbiAgICB2YXIgYXVkaW9QYXJhbWV0ZXIsIGF1dG9tYXRpb247XG5cbiAgICBmdW5jdGlvbiBzZXRWYWx1ZSh2LCB1cGRhdGVJbnRlcmZhY2VzKSB7XG4gICAgICAgIGlmICh2IDwgbWluU3RhdGUpIHtcbiAgICAgICAgICAgIHRocm93IChcIlNldCB2YWx1ZSBpcyBsZXNzIHRoYW4gXCIgKyBtaW5TdGF0ZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHYgPiBtYXhTdGF0ZSkge1xuICAgICAgICAgICAgdGhyb3cgKFwiU2V0IHZhbHVlIGlzIGdyZWF0ZXIgdGhhbiBcIiArIG1heFN0YXRlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5ib3VuZEF1ZGlvUGFyYW0pIHtcbiAgICAgICAgICAgIHRoaXMuYm91bmRBdWRpb1BhcmFtLnZhbHVlID0gdGhpcy51cGRhdGUodik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKF92YWx1ZSAhPT0gdikge1xuICAgICAgICAgICAgX3ZhbHVlID0gdjtcbiAgICAgICAgICAgIHRoaXMudHJpZ2dlclBhcmFtZXRlclNldCh1cGRhdGVJbnRlcmZhY2VzKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRyaWdnZXIoKTtcbiAgICAgICAgcmV0dXJuIHY7XG4gICAgfVxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgICBcInR5cGVcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIlN3aXRjaFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGVzdHJveVwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBvd25lciA9IG5hbWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiZGVmYXVsdFZhbHVlXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZGVmYXVsdFZhbHVlXG4gICAgICAgIH0sXG4gICAgICAgIFwibWluU3RhdGVcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBtaW5TdGF0ZVxuICAgICAgICB9LFxuICAgICAgICBcIm1heFN0YXRlXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogbWF4U3RhdGVcbiAgICAgICAgfSxcbiAgICAgICAgXCJ2YWx1ZVwiOiB7XG4gICAgICAgICAgICBcImdldFwiOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYm91bmRBdWRpb1BhcmFtKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRyYW5zbGF0ZSh0aGlzLmJvdW5kQXVkaW9QYXJhbS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBfdmFsdWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJzZXRcIjogZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2V0VmFsdWUuY2FsbCh0aGlzLCB2KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJzZXRWYWx1ZVwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKHYsIHVwZGF0ZUludGVyZmFjZXMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2V0VmFsdWUuY2FsbCh0aGlzLCB2LCB1cGRhdGVJbnRlcmZhY2VzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJpbmNyZW1lbnRcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIHYgPSBfdmFsdWUgKyAxO1xuICAgICAgICAgICAgICAgIGlmICh2ID4gbWF4U3RhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdiA9IG1pblN0YXRlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gc2V0VmFsdWUuY2FsbCh0aGlzLCB2KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJkZWNyZW1lbnRcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIHYgPSBfdmFsdWUgLSAxO1xuICAgICAgICAgICAgICAgIGlmICh2IDwgbWluU3RhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdiA9IG1heFN0YXRlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gc2V0VmFsdWUuY2FsbCh0aGlzLCB2KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJiaW5kVG9BdWRpb1BhcmFtXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKGFwKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBhcCA9PSBcIm9iamVjdFwiICYmIGFwLnZhbHVlICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBhdWRpb1BhcmFtZXRlciA9IGFwO1xuICAgICAgICAgICAgICAgICAgICBhdWRpb1BhcmFtZXRlci52YWx1ZSA9IHRoaXMudXBkYXRlKF92YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhcC5zZXRWYWx1ZUF0VGltZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXV0b21hdGlvbiA9IG5ldyBQYXJhbWV0ZXJTdGVwQXV0b21hdGlvbih0aGlzLCBhdWRpb1BhcmFtZXRlciwgbWluU3RhdGUsIG1heFN0YXRlLCB0b1N0cmluZ0Z1bmMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZ2V0VmFsdWVBdFRpbWVQb2ludFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24odGltZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYXV0b21hdGlvblBvaW50cy5nZXRWYWx1ZUF0VGltZVBvaW50KHRpbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImF1dG9tYXRpb25Qb2ludHNcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGF1dG9tYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3RhcnRcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKHRpbWUsIGNvbnRleHRUaW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXV0b21hdGlvbi5zdGFydCh0aW1lLCBjb250ZXh0VGltZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3RvcFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24oY29udGV4dFRpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9tYXRpb24uc3RvcChjb250ZXh0VGltZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZW5hYmxlZFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZ2V0XCI6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGF1dG9tYXRpb24uZW5hYmxlZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzZXRcIjogZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChhdXRvbWF0aW9uLmVuYWJsZWQgPSB0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwiQ2Fubm90IGJpbmQgYXV0b21hdGlvbiBhcyBBdWRpb1BhcmFtZXRlciBpcyBub3QgYXV0b21hdGFibGVcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyhcIkFyZ3VtZW50IDEgaXMgbm90IGEgdmFsaWQgQXVkaW9QYXJhbWV0ZXIgb2JqZWN0XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJib3VuZEF1ZGlvUGFyYW1cIjoge1xuICAgICAgICAgICAgXCJjb25maWd1cmFibGVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwiZ2V0XCI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXVkaW9QYXJhbWV0ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiYXV0b21hdGFibGVcIjoge1xuICAgICAgICAgICAgXCJnZXRcIjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0eXBlb2YgYXV0b21hdGlvbiA9PSBcIm9iamVjdFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInRvU3RyaW5nXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24odikge1xuICAgICAgICAgICAgICAgIGlmICh2ID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICB2ID0gdGhpcy52YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0b1N0cmluZ0Z1bmMgPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0b1N0cmluZ0Z1bmMuY2FsbCh0aGlzLCB2KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gU3RyaW5nKHYpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRQYXJhbWV0ZXJPYmplY3RcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdGhpcy52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBkZWZhdWx0VmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIG1pbmltdW06IG1pblN0YXRlLFxuICAgICAgICAgICAgICAgICAgICBtYXhpbXVtOiBtYXhTdGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgdmlzaWJsZU5hbWU6IG5hbWUsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiU3dpdGNoUGFyYW1ldGVyXCIsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IG5hbWVcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG5Td2l0Y2hQYXJhbWV0ZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShQbHVnaW5QYXJhbWV0ZXIucHJvdG90eXBlKTtcblN3aXRjaFBhcmFtZXRlci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBTd2l0Y2hQYXJhbWV0ZXI7XG5cbmV4cG9ydCB7U3dpdGNoUGFyYW1ldGVyfTtcbiIsIi8qIGpzaGludCBlc3ZlcnNpb246IDYgKi9cbmltcG9ydCB7UGx1Z2luUGFyYW1ldGVyfSBmcm9tIFwiLi9QbHVnaW5QYXJhbWV0ZXIuanNcIjtcblxuZnVuY3Rpb24gVVJMUGFyYW1ldGVyKG93bmVyLCBuYW1lLCBkZWZhdWx0VmFsdWUsIG1heExlbmd0aCwgdG9TdHJpbmdGdW5jLCB2aXNpYmxlTmFtZSwgZXhwb3NlZCkge1xuICAgIFBsdWdpblBhcmFtZXRlci5jYWxsKHRoaXMsIG93bmVyLCBuYW1lLCBcIlN0cmluZ1wiLCB2aXNpYmxlTmFtZSwgZXhwb3NlZCk7XG4gICAgdmFyIF92YWx1ZSA9IGRlZmF1bHRWYWx1ZTtcbiAgICB2YXIgcmVzb3VyY2VPYmplY3Q7XG5cbiAgICBmdW5jdGlvbiBnZXRSZXNvdXJjZSh0eXBlKSB7XG4gICAgICAgIGlmIChyZXNvdXJjZU9iamVjdCA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJlc291cmNlT2JqZWN0ID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICAgICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICAgICAgICAgIHhoci5vcGVuKFwiR0VUXCIsIF92YWx1ZSk7XG4gICAgICAgICAgICAgICAgeGhyLnJlc3BvbnNlVHlwZSA9IHR5cGU7XG4gICAgICAgICAgICAgICAgeGhyLm9ubG9hZCA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHhoci5zdGF0dXMgPT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGUudGFyZ2V0LnJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogeGhyLnN0YXR1cyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBlLnRhcmdldFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgeGhyLm9uZXJyb3IgPSBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiB4aHIuc3RhdHVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJlcnJvclwiXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgeGhyLm9udGltZW91dCA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IHhoci5zdGF0dXMsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcInRpbWVvdXRcIlxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHhoci5zZW5kKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzb3VyY2VPYmplY3Q7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0VmFsdWUodiwgdXBkYXRlSW50ZXJmYWNlcykge1xuICAgICAgICBpZiAobWF4TGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAodi5sZW5ndGggPiBtYXhMZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyAoXCJTdHJpbmcgbG9uZ2VyIHRoYW4gXCIgKyBtYXhMZW5ndGggKyBcIiBjaGFyYWN0ZXJzXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChfdmFsdWUgIT09IHYpIHtcbiAgICAgICAgICAgIHJlc291cmNlT2JqZWN0ID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgX3ZhbHVlID0gdjtcbiAgICAgICAgICAgIHRoaXMudHJpZ2dlclBhcmFtZXRlclNldCh1cGRhdGVJbnRlcmZhY2VzKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRyaWdnZXIoKTtcbiAgICB9XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XG4gICAgICAgIFwidHlwZVwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IFwiVVJMXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJkZXN0cm95XCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIG93bmVyID0gbmFtZSA9IGRlZmF1bHRWYWx1ZSA9IG1heExlbmd0aCA9IF92YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJtYXhMZW5ndGhcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBtYXhMZW5ndGhcbiAgICAgICAgfSxcbiAgICAgICAgXCJkZWZhdWx0VmFsdWVcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBkZWZhdWx0VmFsdWVcbiAgICAgICAgfSxcbiAgICAgICAgXCJ2YWx1ZVwiOiB7XG4gICAgICAgICAgICBcImdldFwiOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYm91bmRBdWRpb1BhcmFtKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRyYW5zbGF0ZSh0aGlzLmJvdW5kQXVkaW9QYXJhbS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBfdmFsdWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJzZXRcIjogZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2V0VmFsdWUuY2FsbCh0aGlzLCB2LCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJzZXRWYWx1ZVwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKHYsIHVwZGF0ZUludGVyZmFjZXMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2V0VmFsdWUuY2FsbCh0aGlzLCB2LCB1cGRhdGVJbnRlcmZhY2VzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRSZXNvdXJjZVwiOntcbiAgICAgICAgICAgIFwidmFsdWVcIjogZ2V0UmVzb3VyY2VcbiAgICAgICAgfSxcbiAgICAgICAgXCJ0b1N0cmluZ1wiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKHYpIHtcbiAgICAgICAgICAgICAgICBpZiAodiA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdiA9IHRoaXMudmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdG9TdHJpbmdGdW5jID09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdG9TdHJpbmdGdW5jLmNhbGwodGhpcywgdik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFN0cmluZyh2KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0UGFyYW1ldGVyT2JqZWN0XCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHRoaXMudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogZGVmYXVsdFZhbHVlLFxuICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg6IG1heExlbmd0aCxcbiAgICAgICAgICAgICAgICAgICAgdmlzaWJsZU5hbWU6IG5hbWUsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiVVJMUGFyYW1ldGVyXCIsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IG5hbWVcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG5VUkxQYXJhbWV0ZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShQbHVnaW5QYXJhbWV0ZXIucHJvdG90eXBlKTtcblVSTFBhcmFtZXRlci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBVUkxQYXJhbWV0ZXI7XG5cbmV4cG9ydCB7VVJMUGFyYW1ldGVyfTtcbiIsIi8qIGpzaGludCBlc3ZlcnNpb246IDYgKi9cblxuZnVuY3Rpb24gRXh0cmFjdG9yKG91dHB1dCwgZnJhbWVTaXplKSB7XG4gICAgdGhpcy5leHRyYWN0b3IgPSBvdXRwdXQuY29udGV4dC5jcmVhdGVBbmFseXNlcigpO1xuICAgIHRoaXMuZXh0cmFjdG9yLmZmdFNpemUgPSBmcmFtZVNpemU7XG4gICAgb3V0cHV0LmNvbm5lY3QodGhpcy5leHRyYWN0b3IpO1xuICAgIHRoaXMuZmVhdHVyZXMgPSBbXTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgXCJmcmFtZVNpemVcIiwge1xuICAgICAgICAndmFsdWUnOiBmcmFtZVNpemVcbiAgICB9KTtcblxuICAgIHZhciByZWN1cnNpdmVQcm9jZXNzaW5nID0gb3duZXIucmVjdXJzaXZlUHJvY2Vzc2luZztcbiAgICAvKlxuICAgIGZ1bmN0aW9uIHJlY3Vyc2l2ZVByb2Nlc3NpbmcoYmFzZSwgbGlzdCkge1xuICAgICAgICB2YXIgbCA9IGxpc3QubGVuZ3RoLFxuICAgICAgICAgICAgaSwgZW50cnk7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIGVudHJ5ID0gbGlzdFtpXTtcbiAgICAgICAgICAgIGJhc2VbZW50cnkubmFtZV0uYXBwbHkoYmFzZSwgZW50cnkucGFyYW1ldGVycyk7XG4gICAgICAgICAgICBpZiAoZW50cnkuZmVhdHVyZXMgJiYgZW50cnkuZmVhdHVyZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHJlY3Vyc2l2ZVByb2Nlc3NpbmcoYmFzZS5yZXN1bHRbZW50cnkubmFtZV0sIGVudHJ5LmZlYXR1cmVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAqL1xuICAgIGZ1bmN0aW9uIG9uYXVkaW9jYWxsYmFjayhkYXRhKSB7XG4gICAgICAgIC8vdGhpcyA9PT0gRXh0cmFjdG9yXG4gICAgICAgIHZhciBtZXNzYWdlID0ge1xuICAgICAgICAgICAgJ251bWJlck9mQ2hhbm5lbHMnOiAxLFxuICAgICAgICAgICAgJ3Jlc3VsdHMnOiBbXVxuICAgICAgICB9O1xuICAgICAgICByZWN1cnNpdmVQcm9jZXNzaW5nKGRhdGEsIHRoaXMuZmVhdHVyZXMpO1xuICAgICAgICBtZXNzYWdlLnJlc3VsdHNbMF0gPSB7XG4gICAgICAgICAgICAnY2hhbm5lbCc6IDAsXG4gICAgICAgICAgICAncmVzdWx0cyc6IEpTT04ucGFyc2UoZGF0YS50b0pTT04oKSlcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5wb3N0RmVhdHVyZXMoZGF0YS5sZW5ndGgsIG1lc3NhZ2UpO1xuICAgIH1cblxuICAgIHRoaXMuc2V0RmVhdHVyZXMgPSBmdW5jdGlvbiAoZmVhdHVyZUxpc3QpIHtcbiAgICAgICAgdGhpcy5mZWF0dXJlcyA9IGZlYXR1cmVMaXN0O1xuICAgICAgICBpZiAodGhpcy5mZWF0dXJlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuZXh0cmFjdG9yLmNsZWFyQ2FsbGJhY2soKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZXh0cmFjdG9yLmZyYW1lQ2FsbGJhY2sob25hdWRpb2NhbGxiYWNrLCB0aGlzKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5yZWpvaW5FeHRyYWN0b3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIG91dHB1dC5jb25uZWN0KHRoaXMuZXh0cmFjdG9yKTtcbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBFeHRyYWN0b3I7XG4iLCIvKiBqc2hpbnQgZXN2ZXJzaW9uOiA2ICovXG5cbmltcG9ydCBXb3JrZXJFeHRyYWN0b3IgZnJvbSBcIi4vV29ya2VyRXh0cmFjdG9yXCI7XG5pbXBvcnQgRXh0cmFjdG9yIGZyb20gXCIuL0V4dHJhY3RvclwiO1xuXG5mdW5jdGlvbiBPdXRwdXROb2RlKHBhcmVudCwgb3V0cHV0KSB7XG4gICAgdmFyIGV4dHJhY3RvcnMgPSBbXTtcbiAgICB0aGlzLmFkZEV4dHJhY3RvciA9IGZ1bmN0aW9uIChmcmFtZVNpemUpIHtcbiAgICAgICAgdmFyIG9iajtcbiAgICAgICAgaWYgKHdpbmRvdy5Xb3JrZXIpIHtcbiAgICAgICAgICAgIG9iaiA9IG5ldyBXb3JrZXJFeHRyYWN0b3Iob3V0cHV0LCBmcmFtZVNpemUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb2JqID0gbmV3IEV4dHJhY3RvcihvdXRwdXQsIGZyYW1lU2l6ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZXh0cmFjdG9ycy5wdXNoKG9iaik7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIFwicG9zdEZlYXR1cmVzXCIsIHtcbiAgICAgICAgICAgICd2YWx1ZSc6IGZ1bmN0aW9uIChmcmFtZVNpemUsIHJlc3VsdHNKU09OKSB7XG4gICAgICAgICAgICAgICAgdmFyIG9iaiA9IHtcbiAgICAgICAgICAgICAgICAgICAgJ291dHB1dEluZGV4JzogMCxcbiAgICAgICAgICAgICAgICAgICAgJ2ZyYW1lU2l6ZSc6IGZyYW1lU2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgJ3Jlc3VsdHMnOiByZXN1bHRzSlNPTlxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgdGhpcy5wb3N0RmVhdHVyZXMob2JqKTtcbiAgICAgICAgICAgIH0uYmluZCh0aGlzKVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICB9O1xuICAgIHRoaXMuZmluZEV4dHJhY3RvciA9IGZ1bmN0aW9uIChmcmFtZVNpemUpIHtcbiAgICAgICAgdmFyIGNoZWNrID0gZnJhbWVTaXplO1xuICAgICAgICByZXR1cm4gZXh0cmFjdG9ycy5maW5kKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAvLyBUaGlzIE1VU1QgYmUgPT0gTk9UID09PVxuICAgICAgICAgICAgcmV0dXJuIE51bWJlcihlLmZyYW1lU2l6ZSkgPT09IE51bWJlcihjaGVjayk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgdGhpcy5yZWpvaW5FeHRyYWN0b3JzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBleHRyYWN0b3JzLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGUucmVqb2luRXh0cmFjdG9yKCk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgdGhpcy5kZWxldGVFeHRyYWN0b3IgPSBmdW5jdGlvbiAoZnJhbWVTaXplKSB7fTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgT3V0cHV0Tm9kZTtcbiIsIi8qIGpzaGludCBlc3ZlcnNpb246IDYgKi9cblxuZnVuY3Rpb24gV29ya2VyRXh0cmFjdG9yKG91dHB1dCwgZnJhbWVTaXplKSB7XG4gICAgZnVuY3Rpb24gb25hdWRpb2NhbGxiYWNrKGUpIHtcbiAgICAgICAgdmFyIGMsIGZyYW1lcyA9IFtdO1xuICAgICAgICBmb3IgKGMgPSAwOyBjIDwgZS5pbnB1dEJ1ZmZlci5udW1iZXJPZkNoYW5uZWxzOyBjKyspIHtcbiAgICAgICAgICAgIGZyYW1lc1tjXSA9IGUuaW5wdXRCdWZmZXIuZ2V0Q2hhbm5lbERhdGEoYyk7XG4gICAgICAgIH1cbiAgICAgICAgd29ya2VyLnBvc3RNZXNzYWdlKHtcbiAgICAgICAgICAgICdzdGF0ZSc6IDIsXG4gICAgICAgICAgICAnZnJhbWVzJzogZnJhbWVzXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlc3BvbnNlKG1zZykge1xuICAgICAgICB0aGlzLnBvc3RGZWF0dXJlcyhmcmFtZVNpemUsIG1zZy5kYXRhLnJlc3BvbnNlKTtcbiAgICB9XG5cbiAgICB2YXIgd29ya2VyID0gbmV3IFdvcmtlcihcImpzYXAvZmVhdHVyZS13b3JrZXIuanNcIik7XG4gICAgd29ya2VyLm9uZXJyb3IgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgIH07XG5cbiAgICB0aGlzLnNldEZlYXR1cmVzID0gZnVuY3Rpb24gKGZlYXR1cmVMaXN0KSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdmFyIGNvbmZpZ01lc3NhZ2UgPSB7XG4gICAgICAgICAgICAnc3RhdGUnOiAxLFxuICAgICAgICAgICAgJ3NhbXBsZVJhdGUnOiBvdXRwdXQuY29udGV4dC5zYW1wbGVSYXRlLFxuICAgICAgICAgICAgJ2ZlYXR1cmVMaXN0JzogZmVhdHVyZUxpc3QsXG4gICAgICAgICAgICAnbnVtQ2hhbm5lbHMnOiBvdXRwdXQubnVtYmVyT2ZPdXRwdXRzLFxuICAgICAgICAgICAgJ2ZyYW1lU2l6ZSc6IHRoaXMuZnJhbWVTaXplXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuZmVhdHVyZXMgPSBmZWF0dXJlTGlzdDtcbiAgICAgICAgaWYgKGZlYXR1cmVMaXN0ICYmIGZlYXR1cmVMaXN0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHdvcmtlci5vbm1lc3NhZ2UgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIGlmIChlLmRhdGEuc3RhdGUgPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgd29ya2VyLm9ubWVzc2FnZSA9IHJlc3BvbnNlLmJpbmQoc2VsZik7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuZXh0cmFjdG9yLm9uYXVkaW9wcm9jZXNzID0gb25hdWRpb2NhbGxiYWNrLmJpbmQoc2VsZik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgd29ya2VyLnBvc3RNZXNzYWdlKGNvbmZpZ01lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB3b3JrZXIucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgICAgICdzdGF0ZSc6IDBcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5leHRyYWN0b3Iub25hdWRpb3Byb2Nlc3MgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICB0aGlzLnJlam9pbkV4dHJhY3RvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgb3V0cHV0LmNvbm5lY3QodGhpcy5leHRyYWN0b3IpO1xuICAgIH07XG5cbiAgICB0aGlzLmV4dHJhY3RvciA9IG91dHB1dC5jb250ZXh0LmNyZWF0ZVNjcmlwdFByb2Nlc3NvcihmcmFtZVNpemUsIG91dHB1dC5udW1iZXJPZk91dHB1dHMsIDEpO1xuICAgIG91dHB1dC5jb25uZWN0KHRoaXMuZXh0cmFjdG9yKTtcbiAgICB0aGlzLmV4dHJhY3Rvci5jb25uZWN0KG91dHB1dC5jb250ZXh0LmRlc3RpbmF0aW9uKTtcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImZyYW1lU2l6ZVwiLCB7XG4gICAgICAgICd2YWx1ZSc6IGZyYW1lU2l6ZVxuICAgIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBXb3JrZXJFeHRyYWN0b3I7XG4iLCIvKiBqc2hpbnQgZXN2ZXJzaW9uOiA2ICovXG5cbmltcG9ydCBPdXRwdXROb2RlIGZyb20gXCIuL091dHB1dE5vZGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3ViRmFjdG9yeUZlYXR1cmVTZW5kZXIob3duZXIsIEZhY3RvcnlGZWF0dXJlTWFwKSB7XG4gICAgdmFyIG91dHB1dE5vZGVzO1xuICAgIHRoaXMudXBkYXRlRmVhdHVyZXMgPSBmdW5jdGlvbiAoZmVhdHVyZU9iamVjdCkge1xuICAgICAgICB2YXIgbztcbiAgICAgICAgZm9yIChvID0gMDsgbyA8IGZlYXR1cmVPYmplY3QubGVuZ3RoOyBvKyspIHtcbiAgICAgICAgICAgIGlmIChvdXRwdXROb2RlcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgaWYgKG8gPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IChcIlJlcXVlc3RlZCBhbiBvdXRwdXQgdGhhdCBkb2VzIG5vdCBleGlzdFwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgb3V0cHV0Tm9kZXMgPSBuZXcgT3V0cHV0Tm9kZShvd25lciwgb3duZXIuY2hhaW5TdGFydCk7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG91dHB1dE5vZGVzLCBcInBvc3RGZWF0dXJlc1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICd2YWx1ZSc6IGZ1bmN0aW9uIChyZXN1bHRPYmplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucG9zdEZlYXR1cmVzKHJlc3VsdE9iamVjdCk7XG4gICAgICAgICAgICAgICAgICAgIH0uYmluZCh0aGlzKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHNpO1xuICAgICAgICAgICAgZm9yIChzaSA9IDA7IHNpIDwgZmVhdHVyZU9iamVjdFtvXS5sZW5ndGg7IHNpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgZXh0cmFjdG9yID0gb3V0cHV0Tm9kZXMuZmluZEV4dHJhY3RvcihmZWF0dXJlT2JqZWN0W29dW3NpXS5mcmFtZVNpemUpO1xuICAgICAgICAgICAgICAgIGlmICghZXh0cmFjdG9yKSB7XG4gICAgICAgICAgICAgICAgICAgIGV4dHJhY3RvciA9IG91dHB1dE5vZGVzLmFkZEV4dHJhY3RvcihmZWF0dXJlT2JqZWN0W29dW3NpXS5mcmFtZVNpemUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBleHRyYWN0b3Iuc2V0RmVhdHVyZXMoZmVhdHVyZU9iamVjdFtvXVtzaV0uZmVhdHVyZUxpc3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIHRoaXMucmVqb2luRXh0cmFjdG9ycyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKG91dHB1dE5vZGVzKSB7XG4gICAgICAgICAgICBvdXRwdXROb2Rlcy5yZWpvaW5FeHRyYWN0b3JzKCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgdGhpcy5wb3N0RmVhdHVyZXMgPSBmdW5jdGlvbiAoZmVhdHVyZU9iamVjdCkge1xuICAgICAgICAvKlxuICAgICAgICAgICAgQ2FsbGVkIGJ5IHRoZSBpbmRpdmlkdWFsIGV4dHJhY3RvciBpbnN0YW5jZXM6XG4gICAgICAgICAgICBmZWF0dXJlT2JqZWN0ID0geydmcmFtZVNpemUnOiBmcmFtZVNpemUsXG4gICAgICAgICAgICAnb3V0cHV0SW5kZXgnOiBvdXRwdXRJbmRleCxcbiAgICAgICAgICAgICdyZXN1bHRzJzpbXX1cbiAgICAgICAgKi9cbiAgICAgICAgRmFjdG9yeUZlYXR1cmVNYXAucG9zdEZlYXR1cmVzKHtcbiAgICAgICAgICAgICdwbHVnaW4nOiB0aGlzLFxuICAgICAgICAgICAgJ291dHB1dEluZGV4JzogZmVhdHVyZU9iamVjdC5vdXRwdXRJbmRleCxcbiAgICAgICAgICAgICdmcmFtZVNpemUnOiBmZWF0dXJlT2JqZWN0LmZyYW1lU2l6ZSxcbiAgICAgICAgICAgICdyZXN1bHRzJzogZmVhdHVyZU9iamVjdC5yZXN1bHRzXG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvLyBTZW5kIHRvIEZhY3RvcnlcbiAgICBGYWN0b3J5RmVhdHVyZU1hcC5jcmVhdGVTb3VyY2VNYXAodGhpcywgdW5kZWZpbmVkKTtcbn1cbiIsIi8qIGpzaGludCBlc3ZlcnNpb246IDYgKi9cblxuaW1wb3J0IFN1YkZhY3RvcnlGZWF0dXJlU2VuZGVyIGZyb20gXCIuL1N1YkZhY3RvcnlGZWF0dXJlU2VuZGVyL2luZGV4XCI7XG5pbXBvcnQgTGlua2VkU3RvcmUgZnJvbSAnLi4vLi4vTGlua2VkU3RvcmUnO1xuXG5mdW5jdGlvbiBBdWRpb1BsdWdpbkNoYWluTWFuYWdlcihQbHVnaW5GYWN0b3J5LCBjaGFpblN0YXJ0LCBjaGFpblN0b3ApIHtcblxuICAgIHZhciBwbHVnaW5fbGlzdCA9IFtdLFxuICAgICAgICBwbHVnaW5DaGFpblN0YXJ0ID0gY2hhaW5TdGFydCxcbiAgICAgICAgcGx1Z2luQ2hhaW5TdG9wID0gY2hhaW5TdG9wLFxuICAgICAgICBmYWN0b3J5TmFtZSA9IFwiXCIsXG4gICAgICAgIHN0YXRlID0gMSxcbiAgICAgICAgZGVsYXlTYW1wbGVzID0gMCxcbiAgICAgICAgY2hhaW5TdGFydEZlYXR1cmUgPSBuZXcgU3ViRmFjdG9yeUZlYXR1cmVTZW5kZXIodGhpcywgUGx1Z2luRmFjdG9yeS5GZWF0dXJlTWFwKSxcbiAgICAgICAgc2VtYW50aWNTdG9yZXMgPSBbXSxcbiAgICAgICAgZXZlbnRUYXJnZXQgPSBuZXcgRXZlbnRUYXJnZXQoKSxcbiAgICAgICAgc2VsZiA9IHRoaXM7XG4gICAgdGhpcy5wYXJlbnQgPSBQbHVnaW5GYWN0b3J5O1xuICAgIHBsdWdpbkNoYWluU3RhcnQuZGlzY29ubmVjdCgpO1xuICAgIHBsdWdpbkNoYWluU3RhcnQuY29ubmVjdChjaGFpblN0b3ApO1xuXG4gICAgdGhpcy5UcmFja0RhdGEgPSBuZXcgTGlua2VkU3RvcmUoXCJUcmFja1wiKTtcblxuICAgIHRoaXMuZmVhdHVyZVNlbmRlciA9IGNoYWluU3RhcnRGZWF0dXJlO1xuXG4gICAgdGhpcy5nZXRGZWF0dXJlQ2hhaW4gPSBmdW5jdGlvbiAoKSB7XG5cbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gcmVidWlsZCgpIHtcbiAgICAgICAgdmFyIGkgPSAwLFxuICAgICAgICAgICAgbCA9IHBsdWdpbl9saXN0Lmxlbmd0aCAtIDE7XG4gICAgICAgIHdoaWxlIChpIDwgbCkge1xuICAgICAgICAgICAgdmFyIGN1cnJlbnROb2RlID0gcGx1Z2luX2xpc3RbaSsrXTtcbiAgICAgICAgICAgIHZhciBuZXh0Tm9kZSA9IHBsdWdpbl9saXN0W2ldO1xuICAgICAgICAgICAgY3VycmVudE5vZGUucmVjb25uZWN0KG5leHROb2RlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGlzb2xhdGUoKSB7XG4gICAgICAgIHBsdWdpbl9saXN0LmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGUuZGlzY29ubmVjdCgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjdXRDaGFpbigpIHtcbiAgICAgICAgaWYgKHBsdWdpbl9saXN0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHBsdWdpbkNoYWluU3RhcnQuZGlzY29ubmVjdChwbHVnaW5fbGlzdFswXS5pbnB1dCk7XG4gICAgICAgICAgICBwbHVnaW5fbGlzdFtwbHVnaW5fbGlzdC5sZW5ndGggLSAxXS5vdXRwdXQuZGlzY29ubmVjdChwbHVnaW5DaGFpblN0b3ApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGx1Z2luQ2hhaW5TdGFydC5kaXNjb25uZWN0KHBsdWdpbkNoYWluU3RvcCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gam9pbkNoYWluKCkge1xuICAgICAgICBpZiAocGx1Z2luX2xpc3QubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcGx1Z2luQ2hhaW5TdGFydC5jb25uZWN0KHBsdWdpbl9saXN0WzBdLmlucHV0KTtcbiAgICAgICAgICAgIHBsdWdpbl9saXN0W3BsdWdpbl9saXN0Lmxlbmd0aCAtIDFdLm91dHB1dC5jb25uZWN0KHBsdWdpbkNoYWluU3RvcCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwbHVnaW5DaGFpblN0YXJ0LmNvbm5lY3QocGx1Z2luQ2hhaW5TdG9wKTtcbiAgICAgICAgfVxuICAgICAgICBjaGFpblN0YXJ0RmVhdHVyZS5yZWpvaW5FeHRyYWN0b3JzKCk7XG4gICAgfVxuXG4gICAgdGhpcy5ieXBhc3NQbHVnaW4gPSBmdW5jdGlvbiAocGx1Z2luX2luc3RhbmNlLCBzdGF0ZSkge1xuICAgICAgICAvLyBDaGVjayBpcyBhIG1lbWJlciBvZiB0aGlzIGNoYWluXG4gICAgICAgIGlmIChwbHVnaW5fbGlzdC5pbmNsdWRlcyhwbHVnaW5faW5zdGFuY2UpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHBsdWdpbl9pbnN0YW5jZS5ieXBhc3Moc3RhdGUpO1xuICAgIH07XG5cbiAgICB0aGlzLmdldFByb3RvdHlwZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBhcmVudC5nZXRQcm90b3R5cGVzKCk7XG4gICAgfTtcblxuICAgIHRoaXMuZ2V0RmFjdG9yeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGFyZW50O1xuICAgIH07XG5cbiAgICB0aGlzLmRlc3Ryb3kgPSBmdW5jdGlvbiAocmVjb25uZWN0KSB7XG4gICAgICAgIHZhciBpO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcGx1Z2luX2xpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuZGVzdHJveVBsdWdpbihwbHVnaW5fbGlzdFtpXSk7XG4gICAgICAgIH1cbiAgICAgICAgcGx1Z2luQ2hhaW5TdGFydC5kaXNjb25uZWN0KCk7XG4gICAgICAgIGlmIChyZWNvbm5lY3QgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHBsdWdpbkNoYWluU3RhcnQuY29ubmVjdChwbHVnaW5DaGFpblN0b3ApO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8vIFBsdWdpbiBjcmVhdGlvbiAvIGRlc3RydWN0aW9uXG5cbiAgICBmdW5jdGlvbiBidWlsZE5ld1BsdWdpbihwcm90b3R5cGVPYmplY3QpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgaWYgKHN0YXRlID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0IChcIlN1YkZhY3RvcnkgaGFzIGJlZW4gZGVzdHJveWVkISBDYW5ub3QgYWRkIG5ldyBwbHVnaW5zXCIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHByb3RvdHlwZU9iamVjdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvdG90eXBlT2JqZWN0LmNyZWF0ZVBsdWdpbkluc3RhbmNlKHNlbGYsIGZhbHNlKVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24obm9kZSkge1xuICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKG5vZGUsIHtcbiAgICAgICAgICAgICAgICAgICAgJ1RyYWNrRGF0YSc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBzZWxmLlRyYWNrRGF0YVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5jcmVhdGVQbHVnaW4gPSBmdW5jdGlvbiAocHJvdG90eXBlT2JqZWN0KSB7XG4gICAgICAgIHJldHVybiBidWlsZE5ld1BsdWdpbihwcm90b3R5cGVPYmplY3QpLmNhdGNoKGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgdGhyb3coXCJQbHVnaW4gZGlkIG5vdCBnZXQgY3JlYXRlZCEgQWJvcnRpbmdcIik7XG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24obm9kZSkge1xuICAgICAgICAgICAgY3V0Q2hhaW4oKTtcbiAgICAgICAgICAgIHBsdWdpbl9saXN0LnB1c2gobm9kZSk7XG4gICAgICAgICAgICBpc29sYXRlKCk7XG4gICAgICAgICAgICByZWJ1aWxkKCk7XG4gICAgICAgICAgICBqb2luQ2hhaW4oKTtcbiAgICAgICAgICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihcImFsdGVyZGVsYXlcIiwgc2VsZik7XG4gICAgICAgICAgICBub2RlLm5vZGUub25sb2FkZWQuY2FsbChub2RlLm5vZGUpO1xuICAgICAgICAgICAgdXBkYXRlRGVsYXlDb21wZW5zYXRpb24oKTtcbiAgICAgICAgICAgIGV2ZW50VGFyZ2V0LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiY2hhbmdlXCIpKTtcbiAgICAgICAgICAgIHJldHVybiBub2RlO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgdGhpcy5yZW1vdmVQbHVnaW4gPSBmdW5jdGlvbihwbHVnaW5fb2JqZWN0KSB7XG4gICAgICAgIGlmIChzdGF0ZSA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuZ2V0UGx1Z2luSW5kZXgocGx1Z2luX29iamVjdCk7XG4gICAgICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICAgICAgICBjdXRDaGFpbigpO1xuICAgICAgICAgICAgcGx1Z2luX29iamVjdC5yZW1vdmVFdmVudExpc3RlbmVyKFwiYWx0ZXJkZWxheVwiLCBzZWxmKTtcbiAgICAgICAgICAgIHBsdWdpbl9vYmplY3Qubm9kZS5zdG9wLmNhbGwocGx1Z2luX29iamVjdC5ub2RlKTtcbiAgICAgICAgICAgIHBsdWdpbl9vYmplY3Qubm9kZS5vbnVubG9hZGVkLmNhbGwocGx1Z2luX29iamVjdC5ub2RlKTtcbiAgICAgICAgICAgIHBsdWdpbl9saXN0LnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICBpc29sYXRlKCk7XG4gICAgICAgICAgICByZWJ1aWxkKCk7XG4gICAgICAgICAgICBqb2luQ2hhaW4oKTtcbiAgICAgICAgICAgIHVwZGF0ZURlbGF5Q29tcGVuc2F0aW9uKCk7XG4gICAgICAgICAgICBldmVudFRhcmdldC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImNoYW5nZVwiKSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgdGhpcy5kZXN0cm95UGx1Z2luID0gZnVuY3Rpb24gKHBsdWdpbl9vYmplY3QpIHtcbiAgICAgICAgaWYgKHN0YXRlID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZW1vdmVQbHVnaW4ocGx1Z2luX29iamVjdCk7XG4gICAgICAgIHRoaXMucGFyZW50LmRlbGV0ZVBsdWdpbihwbHVnaW5fb2JqZWN0LmlkKTtcbiAgICAgICAgdXBkYXRlRGVsYXlDb21wZW5zYXRpb24oKTtcbiAgICB9O1xuXG4gICAgdGhpcy5nZXRQbHVnaW5zID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcGx1Z2luX2xpc3Q7XG4gICAgfTtcblxuICAgIHRoaXMuZ2V0QWxsUGx1Z2lucyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGFyZW50LmdldEFsbFBsdWdpbnNPYmplY3QoKTtcbiAgICB9O1xuXG4gICAgdGhpcy5nZXRQbHVnaW5JbmRleCA9IGZ1bmN0aW9uIChwbHVnaW5fb2JqZWN0KSB7XG4gICAgICAgIGlmIChzdGF0ZSA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBpbmRleCA9IHBsdWdpbl9saXN0LmZpbmRJbmRleChmdW5jdGlvbiAoZWxlbWVudCwgaW5kZXgsIGFycmF5KSB7XG4gICAgICAgICAgICBpZiAoZWxlbWVudCA9PT0gdGhpcykge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9LCBwbHVnaW5fb2JqZWN0KTtcbiAgICAgICAgcmV0dXJuIGluZGV4O1xuICAgIH07XG5cbiAgICB0aGlzLm1vdmVQbHVnaW4gPSBmdW5jdGlvbiAocGx1Z2luX29iamVjdCwgbmV3X2luZGV4KSB7XG4gICAgICAgIGlmIChzdGF0ZSA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuZ2V0UGx1Z2luSW5kZXgocGx1Z2luX29iamVjdCksXG4gICAgICAgICAgICBvYmosIGhvbGRMb3csIGhvbGRIaWdoLCBpO1xuICAgICAgICBpZiAoUGx1Z2luRmFjdG9yeS5nZXRBbGxQbHVnaW5zKCkuaW5jbHVkZXMocGx1Z2luX29iamVjdCkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0aHJvdyhcIlBsdWdpbiBkb2VzIG5vdCBleGlzdFwiKTtcbiAgICAgICAgfVxuICAgICAgICBjdXRDaGFpbigpO1xuICAgICAgICBpc29sYXRlKCk7XG4gICAgICAgIGlmIChwbHVnaW5fb2JqZWN0Lm5vZGUub3duZXIgIT09IHRoaXMpIHtcbiAgICAgICAgICAgIC8vIERpZmZlcmVudCBzdWItZmFjdG9yeVxuICAgICAgICAgICAgcGx1Z2luX29iamVjdC5ub2RlLm93bmVyLnJlbW92ZVBsdWdpbihwbHVnaW5fb2JqZWN0KTtcbiAgICAgICAgICAgIHBsdWdpbl9vYmplY3Qubm9kZS5vd25lciA9IHRoaXM7XG4gICAgICAgICAgICBvYmogPSBbcGx1Z2luX29iamVjdF07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvYmogPSBwbHVnaW5fbGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgcGx1Z2luX29iamVjdC5ub2RlLm9udW5sb2FkZWQuY2FsbChwbHVnaW5fb2JqZWN0Lm5vZGUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChuZXdfaW5kZXggPT09IDApIHtcbiAgICAgICAgICAgIHBsdWdpbl9saXN0ID0gb2JqLmNvbmNhdChwbHVnaW5fbGlzdCk7XG4gICAgICAgIH0gZWxzZSBpZiAobmV3X2luZGV4ID49IHBsdWdpbl9saXN0Lmxlbmd0aCkge1xuICAgICAgICAgICAgcGx1Z2luX2xpc3QgPSBwbHVnaW5fbGlzdC5jb25jYXQob2JqKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGhvbGRMb3cgPSBwbHVnaW5fbGlzdC5zbGljZSgwLCBuZXdfaW5kZXgpO1xuICAgICAgICAgICAgaG9sZEhpZ2ggPSBwbHVnaW5fbGlzdC5zbGljZShuZXdfaW5kZXgpO1xuICAgICAgICAgICAgcGx1Z2luX2xpc3QgPSBob2xkTG93LmNvbmNhdChvYmouY29uY2F0KGhvbGRIaWdoKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmVidWlsZCgpO1xuICAgICAgICBqb2luQ2hhaW4oKTtcbiAgICAgICAgcGx1Z2luX29iamVjdC5ub2RlLm9ubG9hZGVkLmNhbGwocGx1Z2luX29iamVjdC5ub2RlKTtcbiAgICAgICAgdXBkYXRlRGVsYXlDb21wZW5zYXRpb24oKTtcbiAgICAgICAgZXZlbnRUYXJnZXQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJjaGFuZ2VcIikpO1xuICAgIH07XG5cbiAgICB0aGlzLmNvcHlQbHVnaW4gPSBmdW5jdGlvbihwbHVnaW5fb2JqZWN0LCBjb3B5X2luZGV4KSB7XG4gICAgICAgIGlmIChjb3B5X2luZGV4ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNvcHlfaW5kZXggPSBwbHVnaW5fbGlzdC5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBjb3B5X2luZGV4ICE9IFwibnVtYmVyXCIgfHwgY29weV9pbmRleCA8IDAgfHwgY29weV9pbmRleCA+IHBsdWdpbl9saXN0Lmxlbmd0aCkge1xuICAgICAgICAgICAgdGhyb3coXCJQbHVnaW4gY29weSBpbmRleCBvdXRzaWRlIG9mIHRoZSBjaGFpbiBzY29wZS5cIik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJ1aWxkTmV3UGx1Z2luKHBsdWdpbl9vYmplY3QucHJvdG90eXBlT2JqZWN0KVxuICAgICAgICAuY2F0Y2goZnVuY3Rpb24oZSl7XG4gICAgICAgICAgICB0aHJvdyhcIlBsdWdpbiBkaWQgbm90IGdldCBjcmVhdGVkISBBYm9ydGluZ1wiKTtcbiAgICAgICAgfSkudGhlbihmdW5jdGlvbihub2RlKSB7XG4gICAgICAgICAgICBub2RlLm5vZGUucGFyYW1ldGVycy5zZXRQYXJhbWV0ZXJzQnlPYmplY3QocGx1Z2luX29iamVjdC5ub2RlLnBhcmFtZXRlcnMuZ2V0UGFyYW1ldGVyT2JqZWN0KCkpO1xuICAgICAgICAgICAgY3V0Q2hhaW4oKTtcbiAgICAgICAgICAgIGlzb2xhdGUoKTtcbiAgICAgICAgICAgIHBsdWdpbl9saXN0LnNwbGljZShjb3B5X2luZGV4LCAwLCBub2RlKTtcbiAgICAgICAgICAgIHJlYnVpbGQoKTtcbiAgICAgICAgICAgIGpvaW5DaGFpbigpO1xuICAgICAgICAgICAgdXBkYXRlRGVsYXlDb21wZW5zYXRpb24oKTtcbiAgICAgICAgICAgIG5vZGUubm9kZS5vbmxvYWRlZC5jYWxsKG5vZGUubm9kZSk7XG4gICAgICAgICAgICBldmVudFRhcmdldC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImNoYW5nZVwiKSk7XG4gICAgICAgICAgICByZXR1cm4gbm9kZTtcbiAgICAgICAgfSk7XG5cbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gcmVjdXJzaXZlUHJvY2Vzc2luZyhiYXNlLCBsaXN0KSB7XG4gICAgICAgIHZhciBsID0gbGlzdC5sZW5ndGgsXG4gICAgICAgICAgICBpLCBlbnRyeTtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgZW50cnkgPSBsaXN0W2ldO1xuICAgICAgICAgICAgYmFzZVtlbnRyeS5uYW1lXS5hcHBseShiYXNlLCBlbnRyeS5wYXJhbWV0ZXJzKTtcbiAgICAgICAgICAgIGlmIChlbnRyeS5mZWF0dXJlcyAmJiBlbnRyeS5mZWF0dXJlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgcmVjdXJzaXZlUHJvY2Vzc2luZyhiYXNlLnJlc3VsdFtlbnRyeS5uYW1lXSwgZW50cnkuZmVhdHVyZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0RGVsYXlDb21wZW5zYXRpb24oKSB7XG4gICAgICAgIHZhciBzdW0gPSAwO1xuICAgICAgICBwbHVnaW5fbGlzdC5maWx0ZXIoZnVuY3Rpb24ocGx1Z2luKSB7XG4gICAgICAgICAgICByZXR1cm4gIXBsdWdpbi5pc0J5cGFzc2VkKCk7XG4gICAgICAgIH0pLmZvckVhY2goZnVuY3Rpb24ocGx1Z2luKSB7XG4gICAgICAgICAgICBzdW0gKz0gcGx1Z2luLm5vZGUucHJvY2Vzc2luZ0RlbGF5QXNTYW1wbGVzO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHN1bTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVEZWxheUNvbXBlbnNhdGlvbigpIHtcbiAgICAgICAgdmFyIHN1bSA9IGdldERlbGF5Q29tcGVuc2F0aW9uKCk7XG4gICAgICAgIGlmIChkZWxheVNhbXBsZXMgIT0gc3VtKSB7XG4gICAgICAgICAgICBkZWxheVNhbXBsZXMgPSBzdW07XG4gICAgICAgICAgICBldmVudFRhcmdldC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImFsdGVyZGVsYXlcIikpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkZWxheVNhbXBsZXM7XG4gICAgfVxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgICAnY2hhaW5TdGFydCc6IHtcbiAgICAgICAgICAgICd2YWx1ZSc6IGNoYWluU3RhcnRcbiAgICAgICAgfSxcbiAgICAgICAgJ2NoYWluU3RvcCc6IHtcbiAgICAgICAgICAgICd2YWx1ZSc6IGNoYWluU3RvcFxuICAgICAgICB9LFxuICAgICAgICBcInVwZGF0ZURlbGF5Q29tcGVuc2F0aW9uXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB1cGRhdGVEZWxheUNvbXBlbnNhdGlvbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInByb2Nlc3NpbmdEZWxheUFzU2FtcGxlc1wiOiB7XG4gICAgICAgICAgICBcImdldFwiOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdXBkYXRlRGVsYXlDb21wZW5zYXRpb24oKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInNldFwiOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyhcInByb2Nlc3NpbmdEZWxheUFzU2FtcGxlcyBpcyByZWFkLW9ubHlcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwicHJvY2Vzc2luZ0RlbGF5QXNTZWNvbmRzXCI6IHtcbiAgICAgICAgICAgIFwiZ2V0XCI6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnByb2Nlc3NpbmdEZWxheUFzU2FtcGxlcy9QbHVnaW5GYWN0b3J5LmNvbnRleHQuc2FtcGxlUmF0ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInNldFwiOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyhcInByb2Nlc3NpbmdEZWxheUFzU2Vjb25kcyBpcyByZWFkLW9ubHlcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgICduYW1lJzoge1xuICAgICAgICAgICAgJ2dldCc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFjdG9yeU5hbWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ3NldCc6IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBuYW1lID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgICAgIGZhY3RvcnlOYW1lID0gbmFtZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhY3RvcnlOYW1lO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAncmVjdXJzaXZlUHJvY2Vzc2luZyc6IHtcbiAgICAgICAgICAgICdnZXQnOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlY3Vyc2l2ZVByb2Nlc3Npbmc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgICdoYW5kbGVFdmVudCc6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgIGlmIChlLnR5cGUgPT0gXCJhbHRlcmRlbGF5XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlRGVsYXlDb21wZW5zYXRpb24oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiYWRkRXZlbnRMaXN0ZW5lclwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZXZlbnRUYXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihrZXksIHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJyZW1vdmVFdmVudExpc3RlbmVyXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBldmVudFRhcmdldC5hZGRFdmVudExpc3RlbmVyKGtleSwgdmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEF1ZGlvUGx1Z2luQ2hhaW5NYW5hZ2VyO1xuIiwiLyoganNoaW50IGVzdmVyc2lvbjogNiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRmVhdHVyZU5vZGUobm9kZSkge1xuICAgIHRoaXMubmFtZSA9IG5vZGUubmFtZTtcbiAgICB0aGlzLnBhcmFtZXRlcnMgPSB0aGlzLnBhcmFtZXRlcnM7XG4gICAgdGhpcy5mZWF0dXJlcyA9IFtdO1xufVxuIiwiLyoganNoaW50IGVzdmVyc2lvbjogNiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZXF1ZXN0b3JNYXAocGx1Z2luSW5zdGFuY2UpIHtcbiAgICB2YXIgRmVhdHVyZXMgPSBbXTtcbiAgICB2YXIgUmVjZWl2ZXIgPSBwbHVnaW5JbnN0YW5jZS5ub2RlLmZlYXR1cmVNYXAuUmVjZWl2ZXI7XG4gICAgdGhpcy5nZXRSZXF1ZXN0b3JJbnN0YW5jZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHBsdWdpbkluc3RhbmNlO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiByZWN1cnNpdmVseUFkZEZlYXR1cmVzKHJvb3RBcnJheSwgZmVhdHVyZU9iamVjdCkge1xuICAgICAgICB2YXIgaTtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGZlYXR1cmVPYmplY3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIC8vIENoZWNrIHdlIGhhdmUgbm90IGFscmVhZHkgbGlzdGVkIHRoZSBmZWF0dXJlXG4gICAgICAgICAgICB2YXIgZmVhdHVyZU5vZGUgPSBnZXRGZWF0dXJlTm9kZShyb290QXJyYXksIGZlYXR1cmVPYmplY3RbaV0pO1xuICAgICAgICAgICAgaWYgKCFmZWF0dXJlTm9kZSB8fCAoZmVhdHVyZU9iamVjdFtpXS5wYXJhbWV0ZXJzICYmIGZlYXR1cmVPYmplY3RbaV0ucGFyYW1ldGVycy5sZW5ndGggIT09IDApKSB7XG4gICAgICAgICAgICAgICAgZmVhdHVyZU5vZGUgPSBhZGRGZWF0dXJlTm9kZShmZWF0dXJlT2JqZWN0W2ldLCByb290QXJyYXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGZlYXR1cmVPYmplY3RbaV0uZmVhdHVyZXMgIT09IHVuZGVmaW5lZCAmJiBmZWF0dXJlT2JqZWN0W2ldLmZlYXR1cmVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICByZWN1cnNpdmVseUFkZEZlYXR1cmVzKGZlYXR1cmVOb2RlLmZlYXR1cmVzLCBmZWF0dXJlT2JqZWN0W2ldLmZlYXR1cmVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlY3Vyc2l2ZWx5RGVsZXRlRmVhdHVyZXMocm9vdEFycmF5LCBmZWF0dXJlT2JqZWN0KSB7XG4gICAgICAgIHZhciBsID0gZmVhdHVyZU9iamVjdC5sZW5ndGgsXG4gICAgICAgICAgICBpO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICAvLyBGaW5kIHRoZSBmZWF0dXJlXG4gICAgICAgICAgICB2YXIgaW5kZXggPSBnZXRGZWF0dXJlTm9kZShyb290QXJyYXksIGZlYXR1cmVPYmplY3RbaV0pO1xuICAgICAgICAgICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgICAgICAgICAgICBpZiAoZmVhdHVyZU9iamVjdFtpbmRleF0uZmVhdHVyZXMgJiYgZmVhdHVyZU9iamVjdFtpbmRleF0uZmVhdHVyZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICByZWN1cnNpdmVseURlbGV0ZUZlYXR1cmVzKHJvb3RBcnJheVtpbmRleF0uZmVhdHVyZXMsIGZlYXR1cmVPYmplY3RbaW5kZXhdLmZlYXR1cmVzKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBGZWF0dXJlcy5zcGxpY2UoaW5kZXgsIDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5hZGRGZWF0dXJlcyA9IGZ1bmN0aW9uIChmZWF0dXJlT2JqZWN0KSB7XG4gICAgICAgIHJlY3Vyc2l2ZWx5QWRkRmVhdHVyZXMoRmVhdHVyZXMsIGZlYXR1cmVPYmplY3QuZmVhdHVyZXMpO1xuICAgIH07XG5cbiAgICB0aGlzLmRlbGV0ZUZlYXR1cmVzID0gZnVuY3Rpb24gKGZlYXR1cmVPYmplY3QpIHtcbiAgICAgICAgcmVjdXJzaXZlbHlEZWxldGVGZWF0dXJlcyhGZWF0dXJlcywgZmVhdHVyZU9iamVjdC5mZWF0dXJlcyk7XG4gICAgfTtcblxuICAgIHRoaXMuZ2V0RmVhdHVyZUxpc3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBGZWF0dXJlcztcbiAgICB9O1xuXG4gICAgdGhpcy5wb3N0RmVhdHVyZXMgPSBmdW5jdGlvbiAoZmVhdHVyZU9iamVjdCkge1xuICAgICAgICB2YXIgbWVzc2FnZSA9IHtcbiAgICAgICAgICAgICAgICAncGx1Z2luJzogZmVhdHVyZU9iamVjdC5wbHVnaW4sXG4gICAgICAgICAgICAgICAgJ291dHB1dEluZGV4JzogZmVhdHVyZU9iamVjdC5vdXRwdXRJbmRleCxcbiAgICAgICAgICAgICAgICAnZnJhbWVTaXplJzogZmVhdHVyZU9iamVjdC5mcmFtZVNpemUsXG4gICAgICAgICAgICAgICAgJ2ZlYXR1cmVzJzoge1xuICAgICAgICAgICAgICAgICAgICAnbnVtYmVyT2ZDaGFubmVscyc6IGZlYXR1cmVPYmplY3QucmVzdWx0cy5udW1iZXJPZkNoYW5uZWxzLFxuICAgICAgICAgICAgICAgICAgICAncmVzdWx0cyc6IFtdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGk7XG5cbiAgICAgICAgZnVuY3Rpb24gcmVjdXJzaXZlUG9zdEZlYXR1cmVzKHJvb3ROb2RlLCByZXN1bHRzTGlzdCwgRmVhdHVyZUxpc3QpIHtcbiAgICAgICAgICAgIC8vIEFkZCB0aGUgcmVzdWx0cyB0cmVlIHdoZXJlIG5lY2Vzc2FyeVxuICAgICAgICAgICAgdmFyIGksIHBhcmFtO1xuXG4gICAgICAgICAgICBmdW5jdGlvbiBhbyhlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGUubmFtZSA9PT0gcGFyYW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKHBhcmFtIGluIHJlc3VsdHNMaXN0KSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdHNMaXN0Lmhhc093blByb3BlcnR5KHBhcmFtKSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbm9kZSA9IEZlYXR1cmVMaXN0LmZpbmQoYW8pO1xuICAgICAgICAgICAgICAgICAgICBpZiAobm9kZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdHNMaXN0W3BhcmFtXS5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0ICYmIG5vZGUucmVzdWx0cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvb3ROb2RlW3BhcmFtXSA9IHt9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlY3Vyc2l2ZVBvc3RGZWF0dXJlcyhyb290Tm9kZVtwYXJhbV0sIHJlc3VsdHNMaXN0W3BhcmFtXSwgbm9kZS5yZXN1bHRzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm9vdE5vZGVbcGFyYW1dID0gcmVzdWx0c0xpc3RbcGFyYW1dO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIFBlcmZvcm0gcmVjdXJzaXZlIG1hcCBmb3IgZWFjaCBjaGFubmVsXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBmZWF0dXJlT2JqZWN0LnJlc3VsdHMubnVtYmVyT2ZDaGFubmVsczsgaSsrKSB7XG4gICAgICAgICAgICBtZXNzYWdlLmZlYXR1cmVzLnJlc3VsdHNbaV0gPSB7fTtcbiAgICAgICAgICAgIHJlY3Vyc2l2ZVBvc3RGZWF0dXJlcyhtZXNzYWdlLmZlYXR1cmVzLnJlc3VsdHNbaV0sIGZlYXR1cmVPYmplY3QucmVzdWx0cy5yZXN1bHRzW2ldLnJlc3VsdHMsIEZlYXR1cmVzKTtcbiAgICAgICAgfVxuICAgICAgICBwbHVnaW5JbnN0YW5jZS5ub2RlLmZlYXR1cmVNYXAuUmVjZWl2ZXIucG9zdEZlYXR1cmVzKG1lc3NhZ2UpO1xuICAgIH07XG59XG4iLCIvKiBqc2hpbnQgZXN2ZXJzaW9uOiA2ICovXG5cbmltcG9ydCBSZXF1ZXN0b3JNYXAgZnJvbSBcIi4vUmVxdWVzdG9yTWFwXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNvdXJjZU1hcChTZW5kZXIsIHBsdWdpbkluc3RhY2UpIHtcbiAgICB2YXIgTWFwcGluZ3MgPSBbXTtcbiAgICB0aGlzLmdldFNvdXJjZUluc3RhbmNlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcGx1Z2luSW5zdGFjZTtcbiAgICB9O1xuICAgIHRoaXMuZ2V0U2VuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gU2VuZGVyO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBmaW5kRmVhdHVyZU9iamVjdChmZWF0dXJlT2JqZWN0KSB7XG4gICAgICAgIHJldHVybiBNYXBwaW5ncy5maW5kKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICByZXR1cm4gKGUub3V0cHV0SW5kZXggPT09IHRoaXMub3V0cHV0SW5kZXggJiYgZS5mcmFtZVNpemUgPT09IHRoaXMuZnJhbWVTaXplKTtcbiAgICAgICAgfSwgZmVhdHVyZU9iamVjdCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlU2VuZGVyKCkge1xuICAgICAgICBmdW5jdGlvbiByZWN1cnNpdmVGaW5kKGZlYXR1cmVMaXN0KSB7XG4gICAgICAgICAgICB2YXIgZiwgbGlzdCA9IFtdO1xuICAgICAgICAgICAgZm9yIChmID0gMDsgZiA8IGZlYXR1cmVMaXN0Lmxlbmd0aDsgZisrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGZlYXR1cmVOb2RlID0gZ2V0RmVhdHVyZU5vZGUobGlzdCwgZmVhdHVyZUxpc3RbZl0pO1xuICAgICAgICAgICAgICAgIGlmICghZmVhdHVyZU5vZGUgfHwgKGZlYXR1cmVMaXN0LnBhcmFtZXRlcnMgJiYgZmVhdHVyZUxpc3RbZl0ucGFyYW1ldGVycy5sZW5ndGggIT09IDApKSB7XG4gICAgICAgICAgICAgICAgICAgIGZlYXR1cmVOb2RlID0gYWRkRmVhdHVyZU5vZGUoZmVhdHVyZUxpc3RbZl0sIGxpc3QpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZmVhdHVyZUxpc3RbZl0uZmVhdHVyZXMgJiYgZmVhdHVyZUxpc3RbZl0uZmVhdHVyZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBmZWF0dXJlTm9kZS5mZWF0dXJlcyA9IHJlY3Vyc2l2ZUZpbmQoZmVhdHVyZUxpc3RbZl0uZmVhdHVyZXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBsaXN0O1xuICAgICAgICB9XG4gICAgICAgIHZhciBpLCBvdXRwdXRMaXN0ID0gW107XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBNYXBwaW5ncy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKG91dHB1dExpc3RbTWFwcGluZ3NbaV0ub3V0cHV0SW5kZXhdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBvdXRwdXRMaXN0W01hcHBpbmdzW2ldLm91dHB1dEluZGV4XSA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGZyYW1lTGlzdCA9IG91dHB1dExpc3RbTWFwcGluZ3NbaV0ub3V0cHV0SW5kZXhdLmZpbmQoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZS5mcmFtZVNpemUgPT09IHRoaXMuZnJhbWVTaXplO1xuICAgICAgICAgICAgfSwgTWFwcGluZ3NbaV0pO1xuICAgICAgICAgICAgaWYgKCFmcmFtZUxpc3QpIHtcbiAgICAgICAgICAgICAgICBmcmFtZUxpc3QgPSB7XG4gICAgICAgICAgICAgICAgICAgICdmcmFtZVNpemUnOiBNYXBwaW5nc1tpXS5mcmFtZVNpemUsXG4gICAgICAgICAgICAgICAgICAgICdmZWF0dXJlTGlzdCc6IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgb3V0cHV0TGlzdFtNYXBwaW5nc1tpXS5vdXRwdXRJbmRleF0ucHVzaChmcmFtZUxpc3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnJhbWVMaXN0LmZlYXR1cmVMaXN0ID0gcmVjdXJzaXZlRmluZChNYXBwaW5nc1tpXS5nZXRGZWF0dXJlTGlzdCgpKTtcbiAgICAgICAgfVxuICAgICAgICBTZW5kZXIudXBkYXRlRmVhdHVyZXMob3V0cHV0TGlzdCk7XG4gICAgfVxuXG4gICAgdGhpcy5yZXF1ZXN0RmVhdHVyZXMgPSBmdW5jdGlvbiAocmVxdWVzdG9ySW5zdGFuY2UsIGZlYXR1cmVPYmplY3QpIHtcbiAgICAgICAgdmFyIG1hcCA9IGZpbmRGZWF0dXJlT2JqZWN0KGZlYXR1cmVPYmplY3QpO1xuICAgICAgICBpZiAoIW1hcCkge1xuICAgICAgICAgICAgbWFwID0ge1xuICAgICAgICAgICAgICAgICdvdXRwdXRJbmRleCc6IGZlYXR1cmVPYmplY3Qub3V0cHV0SW5kZXgsXG4gICAgICAgICAgICAgICAgJ2ZyYW1lU2l6ZSc6IGZlYXR1cmVPYmplY3QuZnJhbWVTaXplLFxuICAgICAgICAgICAgICAgICdyZXF1ZXN0b3JzJzogW10sXG4gICAgICAgICAgICAgICAgJ2dldEZlYXR1cmVMaXN0JzogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgRiA9IFtdLFxuICAgICAgICAgICAgICAgICAgICAgICAgaTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHRoaXMucmVxdWVzdG9ycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgRiA9IEYuY29uY2F0KHRoaXMucmVxdWVzdG9yc1tpXS5nZXRGZWF0dXJlTGlzdCgpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gRjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgTWFwcGluZ3MucHVzaChtYXApO1xuICAgICAgICB9XG4gICAgICAgIHZhciByZXF1ZXN0b3IgPSBtYXAucmVxdWVzdG9ycy5maW5kKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICByZXR1cm4gZS5nZXRSZXF1ZXN0b3JJbnN0YW5jZSgpID09PSB0aGlzO1xuICAgICAgICB9LCByZXF1ZXN0b3JJbnN0YW5jZSk7XG4gICAgICAgIGlmICghcmVxdWVzdG9yKSB7XG4gICAgICAgICAgICByZXF1ZXN0b3IgPSBuZXcgUmVxdWVzdG9yTWFwKHJlcXVlc3Rvckluc3RhbmNlKTtcbiAgICAgICAgICAgIG1hcC5yZXF1ZXN0b3JzLnB1c2gocmVxdWVzdG9yKTtcbiAgICAgICAgfVxuICAgICAgICByZXF1ZXN0b3IuYWRkRmVhdHVyZXMoZmVhdHVyZU9iamVjdCk7XG4gICAgICAgIHVwZGF0ZVNlbmRlcigpO1xuICAgIH07XG5cbiAgICB0aGlzLmZpbmRGcmFtZU1hcCA9IGZ1bmN0aW9uIChvdXRwdXRJbmRleCwgZnJhbWVTaXplKSB7XG4gICAgICAgIHJldHVybiBNYXBwaW5ncy5maW5kKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICByZXR1cm4gKGUub3V0cHV0SW5kZXggPT09IG91dHB1dEluZGV4ICYmIGUuZnJhbWVTaXplID09PSBmcmFtZVNpemUpO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgdGhpcy5jYW5jZWxGZWF0dXJlcyA9IGZ1bmN0aW9uIChyZXF1ZXN0b3JJbnN0YW5jZSwgZmVhdHVyZU9iamVjdCkge1xuICAgICAgICBpZiAoZmVhdHVyZU9iamVjdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBNYXBwaW5ncy5mb3JFYWNoKGZ1bmN0aW9uIChtYXApIHtcbiAgICAgICAgICAgICAgICB2YXIgcmVxdWVzdG9ySW5kZXggPSBtYXAucmVxdWVzdG9ycy5maW5kSW5kZXgoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGUuZ2V0UmVxdWVzdG9ySW5zdGFuY2UoKSA9PT0gcmVxdWVzdG9ySW5zdGFuY2U7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKHJlcXVlc3RvckluZGV4ID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgbWFwLnJlcXVlc3RvcnMuc3BsaWNlKHJlcXVlc3RvckluZGV4LCAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciBtYXAgPSBmaW5kRmVhdHVyZU9iamVjdChmZWF0dXJlT2JqZWN0KTtcbiAgICAgICAgICAgIGlmICghbWFwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHJlcXVlc3RvciA9IG1hcC5yZXF1ZXN0b3JzLmZpbmQoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZS5nZXRSZXF1ZXN0b3JJbnN0YW5jZSgpID09PSB0aGlzO1xuICAgICAgICAgICAgfSwgcmVxdWVzdG9ySW5zdGFuY2UpO1xuICAgICAgICAgICAgaWYgKCFyZXF1ZXN0b3IpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXF1ZXN0b3IuZGVsZXRlRmVhdHVyZXMoZmVhdHVyZU9iamVjdCk7XG4gICAgICAgIH1cbiAgICAgICAgdXBkYXRlU2VuZGVyKCk7XG4gICAgfTtcbn1cbiIsIi8qIGpzaGludCBlc3ZlcnNpb246IDYgKi9cblxuaW1wb3J0IEZlYXR1cmVOb2RlIGZyb20gXCIuL0ZlYXR1cmVOb2RlXCI7XG5pbXBvcnQgU291cmNlTWFwIGZyb20gXCIuL1NvdXJjZU1hcFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGZWF0dXJlTWFwKCkge1xuICAgIHZhciBNYXBwaW5ncyA9IFtdO1xuXG4gICAgZnVuY3Rpb24gZ2V0RmVhdHVyZU5vZGUobGlzdCwgY2hlY2spIHtcbiAgICAgICAgcmV0dXJuIGxpc3QuZmluZChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgcmV0dXJuIGUubmFtZSA9PT0gdGhpcy5uYW1lO1xuICAgICAgICB9LCBjaGVjayk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkRmVhdHVyZU5vZGUoZmVhdHVyZU5vZGUsIGxpc3QpIHtcbiAgICAgICAgdmFyIG5vZGUgPSBuZXcgRmVhdHVyZU5vZGUoZmVhdHVyZU5vZGUpO1xuICAgICAgICBsaXN0LnB1c2gobm9kZSk7XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGZpbmRTb3VyY2VJbmRleChTZW5kZXIpIHtcbiAgICAgICAgcmV0dXJuIE1hcHBpbmdzLmZpbmRJbmRleChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgcmV0dXJuIGUuZ2V0U2VuZGVyKCkgPT09IHRoaXM7XG4gICAgICAgIH0sIFNlbmRlcik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZmluZFNvdXJjZU1hcChNYXBwaW5ncywgc291cmNlLCBwbHVnaW5TZW5kZXIpIHtcbiAgICAgICAgdmFyIHNvdXJjZU1hcCA9IE1hcHBpbmdzW2ZpbmRTb3VyY2VJbmRleChzb3VyY2UpXTtcbiAgICAgICAgaWYgKCFzb3VyY2VNYXApIHtcbiAgICAgICAgICAgIHNvdXJjZU1hcCA9IE1hcHBpbmdzW2ZpbmRTb3VyY2VJbmRleChwbHVnaW5TZW5kZXIpXTtcbiAgICAgICAgICAgIGlmICghc291cmNlTWFwKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgKFwiQ291bGQgbm90IGxvY2F0ZSBzb3VyY2UgbWFwXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzb3VyY2VNYXA7XG4gICAgfVxuXG4gICAgLy8gR0VORVJBTCBJTlRFUkZBQ0VcbiAgICB0aGlzLmNyZWF0ZVNvdXJjZU1hcCA9IGZ1bmN0aW9uIChTZW5kZXIsIHBsdWdpbkluc3RhbmNlKSB7XG4gICAgICAgIHZhciBub2RlID0gbmV3IFNvdXJjZU1hcChTZW5kZXIsIHBsdWdpbkluc3RhbmNlKTtcbiAgICAgICAgTWFwcGluZ3MucHVzaChub2RlKTtcbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfTtcbiAgICB0aGlzLmRlbGV0ZVNvdXJjZU1hcCA9IGZ1bmN0aW9uIChTZW5kZXIpIHtcbiAgICAgICAgdmFyIGluZGV4ID0gZmluZFNvdXJjZUluZGV4KFNlbmRlcik7XG4gICAgICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgIHRocm93IChcIkNvdWxkIG5vdCBmaW5kIHRoZSBzb3VyY2UgbWFwIGZvciB0aGUgcGx1Z2luXCIpO1xuICAgICAgICB9XG4gICAgICAgIE1hcHBpbmdzLnNwbGljZShpbmRleCwgMSk7XG4gICAgfTtcblxuICAgIHRoaXMuZ2V0UGx1Z2luU2VuZGVyID0gZnVuY3Rpb24gKHBsdWdpbikge1xuICAgICAgICBpZiAocGx1Z2luLmNvbnN0cnVjdG9yID09PSBQbHVnaW5JbnN0YW5jZSkge1xuICAgICAgICAgICAgcGx1Z2luID0gcGx1Z2luLm5vZGU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBsdWdpbi5mZWF0dXJlTWFwLlNlbmRlcjtcbiAgICB9O1xuXG4gICAgdGhpcy5yZXF1ZXN0RmVhdHVyZXMgPSBmdW5jdGlvbiAocmVxdWVzdG9yLCBzb3VyY2UsIGZlYXR1cmVPYmplY3QpIHtcbiAgICAgICAgaWYgKHJlcXVlc3Rvci5jb25zdHJ1Y3RvciAhPT0gUGx1Z2luSW5zdGFuY2UpIHtcbiAgICAgICAgICAgIHJlcXVlc3RvciA9IHJlcXVlc3Rvci5wbHVnaW5JbnN0YW5jZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBHZXQgdGhlIHNvdXJjZSBtYXBcbiAgICAgICAgdmFyIHBsdWdpblNlbmRlciA9IHRoaXMuZ2V0UGx1Z2luU2VuZGVyKHNvdXJjZSk7XG4gICAgICAgIHZhciBzb3VyY2VNYXAgPSBmaW5kU291cmNlTWFwKE1hcHBpbmdzLCBzb3VyY2UsIHBsdWdpblNlbmRlcik7XG4gICAgICAgIHNvdXJjZU1hcC5yZXF1ZXN0RmVhdHVyZXMocmVxdWVzdG9yLCBmZWF0dXJlT2JqZWN0KTtcbiAgICB9O1xuICAgIHRoaXMuZGVsZXRlRmVhdHVyZXMgPSBmdW5jdGlvbiAocmVxdWVzdG9yLCBzb3VyY2UsIGZlYXR1cmVPYmplY3QpIHtcbiAgICAgICAgaWYgKHJlcXVlc3Rvci5jb25zdHJ1Y3RvciAhPT0gUGx1Z2luSW5zdGFuY2UpIHtcbiAgICAgICAgICAgIHJlcXVlc3RvciA9IHJlcXVlc3Rvci5wbHVnaW5JbnN0YW5jZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc291cmNlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIE1hcHBpbmdzLmZvckVhY2goZnVuY3Rpb24gKHNvdXJjZU1hcCkge1xuICAgICAgICAgICAgICAgIHNvdXJjZU1hcC5jYW5jZWxGZWF0dXJlcyhyZXF1ZXN0b3IpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBHZXQgdGhlIHNvdXJjZSBtYXBcbiAgICAgICAgICAgIHZhciBwbHVnaW5TZW5kZXIgPSB0aGlzLmdldFBsdWdpblNlbmRlcihzb3VyY2UpO1xuICAgICAgICAgICAgdmFyIHNvdXJjZU1hcCA9IGZpbmRTb3VyY2VNYXAoTWFwcGluZ3MsIHNvdXJjZSwgcGx1Z2luU2VuZGVyKTtcbiAgICAgICAgICAgIHNvdXJjZU1hcC5jYW5jZWxGZWF0dXJlcyhyZXF1ZXN0b3IsIGZlYXR1cmVPYmplY3QpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICB0aGlzLmdldEZlYXR1cmVMaXN0ID0gZnVuY3Rpb24gKHJlcXVlc3Rvciwgc291cmNlKSB7fTtcbiAgICB0aGlzLnBvc3RGZWF0dXJlcyA9IGZ1bmN0aW9uIChmZWF0dXJlT2JqZWN0KSB7XG4gICAgICAgIC8vIFJlY2VpdmUgZnJvbSB0aGUgU2VuZGVyIG9iamVjdHNcbiAgICAgICAgLy8gVHJpZ2dlciBkaXN0cmlidXRlZCBzZWFyY2ggZm9yIHJlc3VsdHMgdHJhbnNtaXNzaW9uXG5cbiAgICAgICAgLy8gRmlyc3QgZ2V0IHRoZSBpbnN0YW5jZSBtYXBwaW5nIGZvciBvdXRwdXQvZnJhbWVcbiAgICAgICAgdmFyIHNvdXJjZSA9IE1hcHBpbmdzW2ZpbmRTb3VyY2VJbmRleChmZWF0dXJlT2JqZWN0LnBsdWdpbildO1xuICAgICAgICBpZiAoIXNvdXJjZSkge1xuICAgICAgICAgICAgc291cmNlID0gTWFwcGluZ3NbZmluZFNvdXJjZUluZGV4KHRoaXMuZ2V0UGx1Z2luU2VuZGVyKGZlYXR1cmVPYmplY3QucGx1Z2luKSldO1xuICAgICAgICAgICAgaWYgKCFzb3VyY2UpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyAoXCJQbHVnaW4gSW5zdGFuY2Ugbm90IGxvYWRlZCFcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGZyYW1lTWFwID0gc291cmNlLmZpbmRGcmFtZU1hcChmZWF0dXJlT2JqZWN0Lm91dHB1dEluZGV4LCBmZWF0dXJlT2JqZWN0LmZyYW1lU2l6ZSk7XG5cbiAgICAgICAgLy8gU2VuZCB0aGUgZmVhdHVyZSBvYmplY3QgdG8gdGhlIFJlcXVlc3Rvck1hcCBvYmplY3QgdG8gaGFuZGxlIGNvbW1zXG4gICAgICAgIGZyYW1lTWFwLnJlcXVlc3RvcnMuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgZS5wb3N0RmVhdHVyZXModGhpcyk7XG4gICAgICAgIH0sIGZlYXR1cmVPYmplY3QpO1xuXG4gICAgfTtcbn1cbiIsIi8qIGpzaGludCBlc3ZlcnNpb246IDYgKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWlkaVN5bnRoZXNpc0luc3RhbmNlKHN5bnRoTm9kZSkge1xuICAgIHZhciBfb3V0ID0gc3ludGhOb2RlLmNvbnRleHQuY3JlYXRlR2FpbigpO1xuICAgIHN5bnRoTm9kZS5nZXRPdXRwdXRzKClbMF0uY29ubmVjdChfb3V0KTtcblxuICAgIHRoaXMuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc3ludGhOb2RlLmRlc3Ryb3koKTtcbiAgICB9O1xuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgICAnbm9kZSc6IHtcbiAgICAgICAgICAgICd2YWx1ZSc6IHN5bnRoTm9kZVxuICAgICAgICB9LFxuICAgICAgICAnb3V0cHV0Jzoge1xuICAgICAgICAgICAgJ2dldCc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX291dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICB9KTtcbn1cbiIsIi8qIGpzaGludCBlc3ZlcnNpb246IDYgKi9cblxuaW1wb3J0IExpbmtlZFN0b3JlIGZyb20gJy4uL0xpbmtlZFN0b3JlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWlkaVN5bnRoZXNpc2VySG9zdChmYWN0b3J5KSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIGZ1bmN0aW9uIGJ1aWxkTmV3U3ludGhlc2lzZXJPYmplY3QocHJvdG90eXBlT2JqZWN0KSB7XG4gICAgICAgIGlmIChtaWRpU3ludGhTbG90KSB7XG4gICAgICAgICAgICBmYWN0b3J5LmRlbGV0ZVBsdWdpbihtaWRpU3ludGhTbG90LmlkKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICBpZiAocHJvdG90eXBlT2JqZWN0Lmhhc01pZGlJbnB1dCA9PSBmYWxzZSB8fCBwcm90b3R5cGVPYmplY3QuaGFzTWlkaU91dHB1dCA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0IChcIlByb3RvdHlwZSBpcyBub3QgYSBNaWRpU3ludGhlc2lzIHR5cGUuIGhhc01pZGlJbnB1dCBtdXN0IGJlIHRydWUgYW5kIGhhc01pZGlPdXRwdXQgbXVzdCBiZSBmYWxzZVwiKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShwcm90b3R5cGVPYmplY3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIHByb3RvdHlwZU9iamVjdC5jcmVhdGVQbHVnaW5JbnN0YW5jZShzZWxmLCBmYWxzZSlcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhub2RlLCB7XG4gICAgICAgICAgICAgICAgICAgICdUcmFja0RhdGEnOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogc2VsZi5UcmFja0RhdGFcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBub2RlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMuVHJhY2tEYXRhID0gbmV3IExpbmtlZFN0b3JlKFwiVHJhY2tcIik7XG5cbiAgICB2YXIgbWlkaVN5bnRoU2xvdDtcbiAgICB2YXIgY29ubmVjdGlvbnMgPSBbXTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XG4gICAgICAgIFwiY29ubmVjdFwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKGRlc3RpbmF0aW9uTm9kZSwgb3V0cHV0LCBpbnB1dCkge1xuICAgICAgICAgICAgICAgIGlmIChkZXN0aW5hdGlvbk5vZGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyAoXCJNdXN0IGRlZmluZSBhbiBBdWRpb05vZGUgb2JqZWN0XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgZXhpc3RzID0gY29ubmVjdGlvbnMuZmluZChmdW5jdGlvbihjb25uKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjb25uLmRlc3RpbmF0aW9uTm9kZSA9PSBkZXN0aW5hdGlvbk5vZGUgJiYgY29ubi5vdXRwdXQgPT0gb3V0cHV0ICYmIGNvbm4uaW5wdXQgPT0gaW5wdXQ7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKGV4aXN0cykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29ubmVjdGlvbnMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbk5vZGU6ZGVzdGluYXRpb25Ob2RlLFxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0Om91dHB1dCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OmlucHV0XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobWlkaVN5bnRoU2xvdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIk1JREkgU3ludGhlc2lzZXIgaXMgbm90IGxvYWRlZCwgY29ubmVjdGlvbnMgd2lsbCBiZSB2YWxpZGF0ZWQgb24gbG9hZFwiKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBtaWRpU3ludGhTbG90Lm5vZGUuY29ubmVjdChkZXN0aW5hdGlvbk5vZGUsIG91dHB1dCwgaW5wdXQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJkaXNjb25uZWN0XCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24oZGVzdGluYXRpb25Ob2RlLCBvdXRwdXQsIGlucHV0KSB7XG4gICAgICAgICAgICAgICAgaWYgKGRlc3RpbmF0aW9uTm9kZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChtaWRpU3ludGhTbG90KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtaWRpU3ludGhTbG90LmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb25uZWN0aW9ucyA9IFtdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgZGVzdGluYXRpb25Ob2RlID09IFwibnVtYmVyXCIgJiYgdHlwZW9mIG91dHB1dCA9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIG91dHB1dCA9IGRlc3RpbmF0aW9uTm9kZTtcbiAgICAgICAgICAgICAgICAgICAgZGVzdGluYXRpb25Ob2RlID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgICAgICBjb25uZWN0aW9ucyA9IGNvbm5lY3Rpb25zLmZpbHRlcihmdW5jdGlvbihjb25uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29ubi5vdXRwdXQgPT0gb3V0cHV0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1pZGlTeW50aFNsb3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWlkaVN5bnRoU2xvdC5ub2RlLmRpc2Nvbm5lY3QoY29ubi5kZXN0aW5hdGlvbk5vZGUsIGNvbm4ub3V0cHV0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgZGVzdGluYXRpb25Ob2RlID09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG91dHB1dCA9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbm5lY3Rpb25zID0gY29ubmVjdGlvbnMuZmlsdGVyKGZ1bmN0aW9uKGNvbm4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb25uLmRlc3RpbmF0aW9uTm9kZSA9PSBkZXN0aW5hdGlvbk5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobWlkaVN5bnRoU2xvdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaWRpU3ludGhTbG90Lm5vZGUuZGlzY29ubmVjdChjb25uLmRlc3RpbmF0aW9uTm9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGRlc3RpbmF0aW9uTm9kZSA9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvdXRwdXQgPT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgICAgICAgICBjb25uZWN0aW9ucyA9IGNvbm5lY3Rpb25zLmZpbHRlcihmdW5jdGlvbihjb25uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29ubi5kZXN0aW5hdGlvbk5vZGUgPT0gZGVzdGluYXRpb25Ob2RlICYmIGNvbm4ub3V0cHV0ID09IG91dHB1dCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtaWRpU3ludGhTbG90KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pZGlTeW50aFNsb3Qubm9kZS5kaXNjb25uZWN0KGNvbm4uZGVzdGluYXRpb25Ob2RlLCBjb25uLm91dHB1dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGRlc3RpbmF0aW9uTm9kZSA9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvdXRwdXQgPT0gXCJudW1iZXJcIiAmJiB0eXBlb2YgaW5wdXQgPT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgICAgICAgICBjb25uZWN0aW9ucyA9IGNvbm5lY3Rpb25zLmZpbHRlcihmdW5jdGlvbihjb25uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29ubi5kZXN0aW5hdGlvbk5vZGUgPT0gZGVzdGluYXRpb25Ob2RlICYmIGNvbm4ub3V0cHV0ID09IG91dHB1dCAmJiBjb25uLmlucHV0ID09IGlucHV0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1pZGlTeW50aFNsb3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWlkaVN5bnRoU2xvdC5ub2RlLmRpc2Nvbm5lY3QoY29ubi5kZXN0aW5hdGlvbk5vZGUsIGNvbm4ub3V0cHV0LCBjb25uLmlucHV0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInNjaGVkdWxlRXZlbnRcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbihtc2csIHQpIHtcbiAgICAgICAgICAgICAgICBpZiAobWlkaVN5bnRoU2xvdCkge1xuICAgICAgICAgICAgICAgICAgICBtaWRpU3ludGhTbG90Lm5vZGUuc2NoZWR1bGVFdmVudChtc2csIHQpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93KFwiTUlESSBTeW50aGVzaXNlciBub3QgbG9hZGVkXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJjYW5jZWxBbGxFdmVudHNcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbih0KSB7XG4gICAgICAgICAgICAgICAgaWYgKG1pZGlTeW50aFNsb3QpIHtcbiAgICAgICAgICAgICAgICAgICAgbWlkaVN5bnRoU2xvdC5ub2RlLmNhbmNlbEFsbEV2ZW50cyh0KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyhcIk1JREkgU3ludGhlc2lzZXIgbm90IGxvYWRlZFwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwibWlkaVN5bnRoZXNpc2VyXCI6IHtcbiAgICAgICAgICAgIFwiZ2V0XCI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbWlkaVN5bnRoU2xvdDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInNldFwiOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyhcIkNhbm5vdCBzZXQgcmVhZC1vbmx5IGF0dHJpYnV0ZS5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwibG9hZE1pZGlTeW50aGVzaXNlck1vZHVsZVwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKHByb3RvdHlwZSkge1xuICAgICAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm90b3R5cGUuaGFzTWlkaUlucHV0ID09IGZhbHNlIHx8IHByb3RvdHlwZS5oYXNNaWRpT3V0cHV0ID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdCAoXCJQcm90b3R5cGUgaXMgbm90IGEgTWlkaVN5bnRoZXNpcyB0eXBlLiBoYXNNaWRpSW5wdXQgbXVzdCBiZSB0cnVlIGFuZCBoYXNNaWRpT3V0cHV0IG11c3QgYmUgZmFsc2VcIik7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHByb3RvdHlwZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uKHByb3RvdHlwZU9iamVjdCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYnVpbGROZXdTeW50aGVzaXNlck9iamVjdC5jYWxsKHNlbGYsIHByb3RvdHlwZU9iamVjdCkuY2F0Y2goZnVuY3Rpb24oZSl7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyhcIlBsdWdpbiBkaWQgbm90IGdldCBjcmVhdGVkISBBYm9ydGluZ1wiKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbihub2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUubm9kZS5vbmxvYWRlZC5jYWxsKG5vZGUubm9kZSk7XG4gICAgICAgICAgICAgICAgICAgIG1pZGlTeW50aFNsb3QgPSBub2RlO1xuICAgICAgICAgICAgICAgICAgICBjb25uZWN0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uKGNvbm4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pZGlTeW50aFNsb3Qubm9kZS5jb25uZWN0KGNvbm4uZGVzdGluYXRpb25Ob2RlLCBjb25uLm91dHB1dCwgY29ubi5pbnB1dCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWlkaVN5bnRoU2xvdDtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICB9KTtcbn1cbiIsIi8qZXNsaW50LWVudiBicm93c2VyICovXG4vKiBqc2hpbnQgZXN2ZXJzaW9uOjYgKi9cblxuZnVuY3Rpb24gUGx1Z2luQXNzZXQoZmFjdG9yeUNvbnRleHQsIG5hbWUsIHVybCwgYXNzZXRPYmplY3QpIHtcblxuICAgIGZ1bmN0aW9uIGZldGNoQXNzZXQoKSB7XG4gICAgICAgIHAgPSBmZXRjaCh1cmwpLnRoZW4oZnVuY3Rpb24ocikge1xuICAgICAgICAgICAgcmV0dXJuIHIuYXJyYXlCdWZmZXIoKTtcbiAgICAgICAgfSkudGhlbihmdW5jdGlvbihhYikge1xuICAgICAgICAgICAgcmV0dXJuIGZhY3RvcnlDb250ZXh0LmNvbnRleHQuZGVjb2RlQXVkaW9EYXRhKGFiKTtcbiAgICAgICAgfSkudGhlbihmdW5jdGlvbihhYikge1xuICAgICAgICAgICAgYXNzZXRPYmplY3QgPSBhYjtcbiAgICAgICAgICAgIHAgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICByZXR1cm4gYXNzZXRPYmplY3Q7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHZhciBwO1xuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgICBcIm5hbWVcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBuYW1lXG4gICAgICAgIH0sXG4gICAgICAgIFwidXJsXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogdXJsXG4gICAgICAgIH0sXG4gICAgICAgIFwiYXNzZXRPYmplY3RcIjoge1xuICAgICAgICAgICAgXCJnZXRcIjogZnVuY3Rpb24oKSB7cmV0dXJuIGFzc2V0T2JqZWN0O31cbiAgICAgICAgfSxcbiAgICAgICAgXCJmZXRjaFwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGlmIChhc3NldE9iamVjdCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGFzc2V0T2JqZWN0KTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHAgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBmZXRjaEFzc2V0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInRvSlNPTlwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7bmFtZTogbmFtZSwgdXJsOiB1cmx9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInRvU3RyaW5nXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHRoaXMudG9KU09OKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG5cbmV4cG9ydCB7UGx1Z2luQXNzZXR9O1xuIiwiLyplc2xpbnQtZW52IGJyb3dzZXIgKi9cbi8qIGpzaGludCBlc3ZlcnNpb246NiAqL1xuXG5pbXBvcnQge1BsdWdpbkFzc2V0c0xpc3R9IGZyb20gXCIuL1BsdWdpbkFzc2V0c0xpc3QuanNcIjtcblxuZnVuY3Rpb24gZmluZFBhY2tCeU5hbWUoYXNzZXRQYWNrTGlzdCwgbmFtZSkge1xuICAgIHJldHVybiBhc3NldFBhY2tMaXN0LmZpbmQoZnVuY3Rpb24obCkge1xuICAgICAgICByZXR1cm4gbC5uYW1lID09IG5hbWU7XG4gICAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBsdWdpbkFzc2V0TWFuYWdlcihmYWN0b3J5Q29udGV4dCkge1xuICAgIHZhciBhc3NldFBhY2tMaXN0ID0gW107XG4gICAgdGhpcy5hZGRQYWNrVG9MaXN0ID0gZnVuY3Rpb24obmFtZSwgcmVzb3VyY2VUeXBlKSB7XG4gICAgICAgIGlmICh0eXBlb2YgbmFtZSAhPSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICB0aHJvdyBcImFkZEFzc2V0VXJsVG9MaXN0IEFyZ3VtZW50LTEgbXVzdCBiZSBhIHR5cGUgb2Ygc3RyaW5nXCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZpbmRQYWNrQnlOYW1lKGFzc2V0UGFja0xpc3QsIG5hbWUpKSB7XG4gICAgICAgICAgICB0aHJvdyBcIlBhY2sgd2l0aCBuYW1lIFxcXCJcIituYW1lK1wiXFxcIiBhbHJlYWR5IGluIHRoaXMgbGlzdFwiO1xuICAgICAgICB9XG4gICAgICAgIHZhciBhc3NldFBhY2sgPSBuZXcgUGx1Z2luQXNzZXRzTGlzdChmYWN0b3J5Q29udGV4dCwgbmFtZSwgcmVzb3VyY2VUeXBlKTtcbiAgICAgICAgYXNzZXRQYWNrTGlzdC5wdXNoKGFzc2V0UGFjayk7XG4gICAgICAgIHJldHVybiBhc3NldFBhY2s7XG4gICAgfTtcbiAgICB0aGlzLnJlbW92ZUFzc2V0UGFja0Zyb21MaXN0ID0gZnVuY3Rpb24oYXNzZXRQYWNrKSB7XG4gICAgICAgIHZhciBpbmRleCA9IGFzc2V0UGFja0xpc3QuaW5kZXhPZihhc3NldFBhY2spO1xuICAgICAgICBpZiAoaW5kZXggPT0gLTEpIHtcbiAgICAgICAgICAgIHRocm93IFwiQXNzZXQgcGFjayBub3QgaW4gdGhpcyBsaXN0XCI7XG4gICAgICAgIH1cbiAgICAgICAgYXNzZXRQYWNrTGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICByZXR1cm4gYXNzZXRQYWNrTGlzdDtcbiAgICB9O1xuICAgIHRoaXMucmVtb3ZlQXNzZXRQYWNrRnJvbUxpc3RCeU5hbWUgPSBmdW5jdGlvbihuYW1lKSB7XG4gICAgICAgIGlmICh0eXBlb2YgbmFtZSAhPSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICB0aHJvdyBcInJlbW92ZUFzc2V0VXJsRnJvbUxpc3QgQXJndW1lbnQtMSBtdXN0IGJlIGEgdHlwZSBvZiBzdHJpbmdcIjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgYXNzZXQgPSBmaW5kUGFja0J5TmFtZShhc3NldFBhY2tMaXN0LCBuYW1lKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVtb3ZlQXNzZXRGcm9tTGlzdChhc3NldCk7XG4gICAgfTtcbiAgICB0aGlzLmFzc2V0UGFja3MgPSBhc3NldFBhY2tMaXN0O1xuICAgIHRoaXMuaW1wb3J0RnJvbUFzc2V0TGlzdHMgPSBmdW5jdGlvbihvbGRDb250ZXh0KSB7XG4gICAgICAgIG9sZENvbnRleHQuYXNzZXRQYWNrcy5mb3JFYWNoKGZ1bmN0aW9uKG9yaWdpbmFsQXNzZXRQYWNrKSB7XG4gICAgICAgICAgICB2YXIgbmV3Q29udGV4dFBhY2sgPSB0aGlzLmFkZFBhY2tUb0xpc3Qob3JpZ2luYWxBc3NldFBhY2submFtZSwgb3JpZ2luYWxBc3NldFBhY2sucmVzb3VyY2VUeXBlKTtcbiAgICAgICAgICAgIG9yaWdpbmFsQXNzZXRQYWNrLmFzc2V0T2JqZWN0cy5mb3JFYWNoKGZ1bmN0aW9uKG9yaWdpbmFsQXNzZXQpIHtcbiAgICAgICAgICAgICAgICB2YXIgYXNzZXRPYmplY3Q7XG4gICAgICAgICAgICAgICAgaWYgKG9yaWdpbmFsQXNzZXQuYXNzZXRPYmplY3QgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBhc3NldE9iamVjdCA9IGZhY3RvcnlDb250ZXh0LmNvbnRleHQuY3JlYXRlQnVmZmVyKG9yaWdpbmFsQXNzZXQuYXNzZXRPYmplY3QubnVtYmVyT2ZDaGFubmVscywgb3JpZ2luYWxBc3NldC5hc3NldE9iamVjdC5sZW5ndGgsIG9yaWdpbmFsQXNzZXQuYXNzZXRPYmplY3Quc2FtcGxlUmF0ZSk7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXNzZXRPYmplY3QubnVtYmVyT2ZDaGFubmVsczsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhc3NldE9iamVjdC5jb3B5VG9DaGFubmVsKG9yaWdpbmFsQXNzZXQuYXNzZXRPYmplY3QuZ2V0Q2hhbm5lbERhdGEoaSksIGksIDApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuYWRkQXNzZXRVcmxUb0xpc3Qob3JpZ2luYWxBc3NldC5uYW1lLCBvcmlnaW5hbEFzc2V0LnVybCwgYXNzZXRPYmplY3QpO1xuICAgICAgICAgICAgfSwgbmV3Q29udGV4dFBhY2spO1xuICAgICAgICB9LCB0aGlzKTtcbiAgICB9O1xufVxuIiwiLyplc2xpbnQtZW52IGJyb3dzZXIgKi9cbi8qIGpzaGludCBlc3ZlcnNpb246NiAqL1xuXG5pbXBvcnQge1BsdWdpbkFzc2V0fSBmcm9tIFwiLi9QbHVnaW5Bc3NldC5qc1wiO1xuXG5mdW5jdGlvbiBQbHVnaW5Bc3NldHNMaXN0KGZhY3RvcnlDb250ZXh0LCBuYW1lLCByZXNvdXJjZVR5cGUpIHtcbiAgICB2YXIgYXNzZXRPYmplY3RzID0gW107XG4gICAgZnVuY3Rpb24gZmluZEFzc2V0QnlVcmwodXJsKSB7XG4gICAgICAgIHJldHVybiBhc3NldE9iamVjdHMuZmluZChmdW5jdGlvbihhc3NldCkge1xuICAgICAgICAgICAgcmV0dXJuIGFzc2V0LnVybCA9PSB1cmw7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLmFkZEFzc2V0VXJsVG9MaXN0ID0gZnVuY3Rpb24obmFtZSwgdXJsLCBhc3NldE9iamVjdCkge1xuICAgICAgICBpZiAodHlwZW9mIHVybCAhPSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICB0aHJvdyBcImFkZEFzc2V0VXJsVG9MaXN0IEFyZ3VtZW50LTEgbXVzdCBiZSBhIHR5cGUgb2Ygc3RyaW5nXCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZpbmRBc3NldEJ5VXJsKHVybCkpIHtcbiAgICAgICAgICAgIHRocm93IFwiVVJMIFxcXCJcIit1cmwrXCJcXFwiIGFscmVhZHkgaW4gdGhpcyBsaXN0XCI7XG4gICAgICAgIH1cbiAgICAgICAgYXNzZXRPYmplY3RzLnB1c2gobmV3IFBsdWdpbkFzc2V0KGZhY3RvcnlDb250ZXh0LCBuYW1lLCB1cmwsIGFzc2V0T2JqZWN0KSk7XG4gICAgICAgIHJldHVybiBhc3NldE9iamVjdHM7XG4gICAgfTtcbiAgICB0aGlzLnJlbW92ZUFzc2V0RnJvbUxpc3QgPSBmdW5jdGlvbihhc3NldCkge1xuICAgICAgICB2YXIgaW5kZXggPSBhc3NldE9iamVjdHMuZmluZEluZGV4KGZ1bmN0aW9uKGFzc2V0KSB7XG4gICAgICAgICAgICByZXR1cm4gYXNzZXQudXJsID09IHVybDtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChpbmRleCA9PSAtMSkge1xuICAgICAgICAgICAgdGhyb3cgXCJBc3NldCBub3QgaW4gdGhpcyBsaXN0XCI7XG4gICAgICAgIH1cbiAgICAgICAgYXNzZXRPYmplY3RzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIHJldHVybiBhc3NldE9iamVjdHM7XG4gICAgfTtcbiAgICB0aGlzLnJlbW92ZUFzc2V0VXJsRnJvbUxpc3QgPSBmdW5jdGlvbih1cmwpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB1cmwgIT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgdGhyb3cgXCJyZW1vdmVBc3NldFVybEZyb21MaXN0IEFyZ3VtZW50LTEgbXVzdCBiZSBhIHR5cGUgb2Ygc3RyaW5nXCI7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGFzc2V0ID0gZmluZEFzc2V0QnlVcmwodXJsKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVtb3ZlQXNzZXRGcm9tTGlzdChhc3NldCk7XG4gICAgfTtcbiAgICB0aGlzLmFzc2V0T2JqZWN0cyA9IGFzc2V0T2JqZWN0cztcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMucmVzb3VyY2VUeXBlID0gcmVzb3VyY2VUeXBlO1xufVxuXG5leHBvcnQge1BsdWdpbkFzc2V0c0xpc3R9O1xuIiwiLy8gVGhpcyBkZWZpbmVzIGEgbWFzdGVyIG9iamVjdCBmb3IgaG9sZGluZyBhbGwgdGhlIHBsdWdpbnMgYW5kIGNvbW11bmljYXRpbmdcbi8vIFRoaXMgb2JqZWN0IHdpbGwgYWxzbyBoYW5kbGUgY3JlYXRpb24gYW5kIGRlc3RydWN0aW9uIG9mIHBsdWdpbnNcbi8qZ2xvYmFscyBQcm9taXNlLCBkb2N1bWVudCwgY29uc29sZSwgTGlua2VkU3RvcmUsIFdvcmtlciwgd2luZG93LCBYTUxIdHRwUmVxdWVzdCAqL1xuLyplc2xpbnQtZW52IGJyb3dzZXIgKi9cbi8qIGpzaGludCBlc3ZlcnNpb246NiAqL1xuXG5pbXBvcnQgTGlua2VkU3RvcmUgZnJvbSAnLi4vTGlua2VkU3RvcmUnO1xuaW1wb3J0IFBsdWdpbkFzc2V0TWFuYWdlciBmcm9tICcuL1BsdWdpbkFzc2V0TWFuYWdlcic7XG5pbXBvcnQgUGx1Z2luUHJvdG90eXBlIGZyb20gXCIuL1BsdWdpblByb3RvdHlwZVwiO1xuaW1wb3J0IEZlYXR1cmVNYXAgZnJvbSBcIi4vRmVhdHVyZU1hcC9pbmRleFwiO1xuaW1wb3J0IEF1ZGlvUGx1Z2luQ2hhaW5NYW5hZ2VyIGZyb20gXCIuL0F1ZGlvUGx1Z2luQ2hhaW5NYW5hZ2VyL1wiO1xuaW1wb3J0IE1pZGlTeW50aGVzaXNlckhvc3QgZnJvbSBcIi4vTWlkaVN5bnRoZXNpc2VySG9zdFwiO1xuaW1wb3J0IFBsdWdpblVzZXJJbnRlcmZhY2VNZXNzYWdlSHViIGZyb20gXCIuL1BsdWdpblVzZXJJbnRlcmZhY2VNZXNzYWdlSHViXCI7XG5cbmZ1bmN0aW9uIFBsdWdpbkZhY3RvcnkoYXVkaW9fY29udGV4dCwgcm9vdFVSTCkge1xuXG4gICAgZnVuY3Rpb24gbG9hZFJlc291cmNlKHJlc291cmNlT2JqZWN0KSB7XG4gICAgICAgIGlmIChyZXNvdXJjZU9iamVjdC51cmwuc3RhcnRzV2l0aChcImh0dHBcIikgPT09IGZhbHNlICYmIHJvb3RVUkwgIT09IHVuZGVmaW5lZCAmJiByb290VVJMLnN0YXJ0c1dpdGgoXCJodHRwXCIpKSB7XG4gICAgICAgICAgICByZXNvdXJjZU9iamVjdC51cmwgPSByb290VVJMICsgcmVzb3VyY2VPYmplY3QudXJsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgICAgICB4aHIub3BlbihcIkdFVFwiLCByZXNvdXJjZU9iamVjdC51cmwpO1xuICAgICAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT0gNCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcbiAgICAgICAgICAgICAgICAgICAgc2NyaXB0LnRleHRDb250ZW50ID0geGhyLnJlc3BvbnNlVGV4dDtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzb3VyY2VPYmplY3QpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHhoci5zZW5kKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNvcHlGYWN0b3J5KGZhY3RvcnksIG5ld2NvbnRleHQpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgaWYgKG5ld2NvbnRleHQuc2FtcGxlUmF0ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgLy9NYXliZSBub3QgYSByZWFsIEF1ZGlvQ29udGV4dFxuICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoXCJJbnZhbGlkIGF1ZGlvIGNvbnRleHQgcHJvdmlkZWRcIikpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKG5ld2NvbnRleHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uKG5ld2NvbnRleHQpIHtcbiAgICAgICAgICAgIHZhciBCRmFjdG9yeSA9IG5ldyBQbHVnaW5GYWN0b3J5KG5ld2NvbnRleHQpO1xuICAgICAgICAgICAgdmFyIHByb21pc2VzID0gW107XG4gICAgICAgICAgICBwbHVnaW5fcHJvdG90eXBlcy5mb3JFYWNoKGZ1bmN0aW9uIChwcm90bykge1xuICAgICAgICAgICAgICAgIHByb21pc2VzLnB1c2goQkZhY3RvcnkuYWRkUHJvdG90eXBlKHByb3RvLnByb3RvKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gQkZhY3Rvcnk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSkudGhlbihmdW5jdGlvbihuZXdGYWN0b3J5KSB7XG4gICAgICAgICAgICBuZXdGYWN0b3J5LnBsdWdpbkFzc2V0cy5pbXBvcnRGcm9tQXNzZXRMaXN0cyhmYWN0b3J5LnBsdWdpbkFzc2V0cyk7XG4gICAgICAgICAgICByZXR1cm4gbmV3RmFjdG9yeTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGx1Z2luQXVkaW9TdGFydChub2RlLCBwcm9ncmFtX3RpbWUsIGNvbnRleHRfdGltZSkge1xuICAgICAgICBub2RlLnN0YXJ0LmNhbGwobm9kZSwgcHJvZ3JhbV90aW1lLCBjb250ZXh0X3RpbWUpO1xuICAgICAgICBub2RlLnBhcmFtZXRlcnMuZ2V0UGFyYW1ldGVyTmFtZXMoKS5mb3JFYWNoKGZ1bmN0aW9uKG4pIHtcbiAgICAgICAgICAgIHZhciBwID0gbm9kZS5wYXJhbWV0ZXJzLmdldFBhcmFtZXRlckJ5TmFtZShuKTtcbiAgICAgICAgICAgIGlmIChwLmVuYWJsZWQpIHtcbiAgICAgICAgICAgICAgICBwLnN0YXJ0KHByb2dyYW1fdGltZSwgY29udGV4dF90aW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGx1Z2luQXVkaW9TdG9wKG5vZGUpIHtcbiAgICAgICAgdmFyIGN0ID0gYXVkaW9fY29udGV4dC5jdXJyZW50VGltZTtcbiAgICAgICAgbm9kZS5zdG9wLmNhbGwobm9kZSwgY3QpO1xuICAgICAgICBub2RlLnBhcmFtZXRlcnMuZ2V0UGFyYW1ldGVyTmFtZXMoKS5mb3JFYWNoKGZ1bmN0aW9uKG4pIHtcbiAgICAgICAgICAgIHZhciBwID0gbm9kZS5wYXJhbWV0ZXJzLmdldFBhcmFtZXRlckJ5TmFtZShuKTtcbiAgICAgICAgICAgIGlmIChwLmVuYWJsZWQpIHtcbiAgICAgICAgICAgICAgICBwLnN0b3AoY3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0cmlnZ2VyQXVkaW9TdGFydChwcm9ncmFtX3RpbWUsIGNvbnRleHRfdGltZSkge1xuICAgICAgICBwbHVnaW5zTGlzdC5mb3JFYWNoKGZ1bmN0aW9uIChuKSB7XG4gICAgICAgICAgICBwbHVnaW5BdWRpb1N0YXJ0KG4ubm9kZSwgcHJvZ3JhbV90aW1lLCBjb250ZXh0X3RpbWUpO1xuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRyaWdnZXJBdWRpb1N0b3AoKSB7XG4gICAgICAgIHBsdWdpbnNMaXN0LmZvckVhY2goZnVuY3Rpb24gKG4pIHtcbiAgICAgICAgICAgIHBsdWdpbkF1ZGlvU3RvcChuLm5vZGUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB2YXIgc3ViRmFjdG9yaWVzID0gW10sXG4gICAgc3ludGhlc2lzZXJIb3N0cyA9IFtdLFxuICAgIHBsdWdpbl9wcm90b3R5cGVzID0gW10sXG4gICAgcGx1Z2luc0xpc3QgPSBbXSxcbiAgICBhdWRpb1N0YXJ0UHJvZ3JhbVRpbWUsXG4gICAgYXVkaW9TdGFydENvbnRleHRUaW1lLFxuICAgIGF1ZGlvU3RhcnRlZCA9IGZhbHNlLFxuICAgIHBsdWdpblVzZXJJbnRlcmZhY2VNZXNzYWdlSHViSW50YW5jZSA9IG5ldyBQbHVnaW5Vc2VySW50ZXJmYWNlTWVzc2FnZUh1Yih0aGlzKSxcbiAgICBzdG9yZXMgPSBbXTtcblxuICAgIHRoaXMucGx1Z2luQXNzZXRzID0gbmV3IFBsdWdpbkFzc2V0TWFuYWdlcih0aGlzKTtcblxuICAgIC8qXG4gICAgICAgIHRoaXMubG9hZFJlc291cmNlLiBMb2FkIGEgcmVzb3VyY2UgaW50byB0aGUgZ2xvYmFsIG5hbWVzcGFjZVxuXG4gICAgICAgIEBwYXJhbSByZXNvdXJjZU9iamVjdDogYSBKUyBvYmplY3QgaG9sZGluZyB0aGUgZm9sbG93aW5nIHBhcmFtZXRlcnM6XG4gICAgICAgICAgICAudXJsOiBVUkwgb2YgdGhlIHJlc291cmNlXG4gICAgICAgICAgICAudGVzdDogZnVuY3Rpb24gdG8gY2FsbCwgcmV0dXJucyB0cnVlIGlmIHJlc291cmNlIGFscmVhZHkgbG9hZGVkLCBmYWxzZSBpZiBub3RcbiAgICAqL1xuICAgIHRoaXMubG9hZFByb3RvdHlwZU1vZHVsZSA9IGZ1bmN0aW9uKHJlc291cmNlT2JqZWN0LCBtdXN0TW9kdWxlKSB7XG4gICAgICAgIHZhciBmYWN0b3J5ID0gdGhpcztcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBnbG9iYWwuZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZ2xvYmFsLmRlZmluZS5hbWQpIHtcbiAgICAgICAgICAgICAgICBnbG9iYWwucmVxdWlyZShbcmVzb3VyY2VPYmplY3QudXJsXSwgZnVuY3Rpb24oZikge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGYpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgZ2xvYmFsLm1vZHVsZSA9PSBcIm9iamVjdFwiICYmIGdsb2JhbC5tb2R1bGUuZXhwb3J0cykge1xuICAgICAgICAgICAgICAgIHJlc29sdmUoZ2xvYmFsLnJlcXVpcmUocmVzb3VyY2VPYmplY3QudXJsKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlamVjdChcIkNhbm5vdCBsb2FkIHVzaW5nIG1vZHVsYXIgc3lzdGVtc1wiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkudGhlbihmdW5jdGlvbihleGVjdXRhYmxlKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGV4ZWN1dGFibGUgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWN0b3J5LmFkZFByb3RvdHlwZShleGVjdXRhYmxlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KFwiSXMgbm90IGEgbW9kdWxlIHBsdWdpblwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAobXVzdE1vZHVsZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHJlamVjdChcIkNhbm5vdCBsb2FkIHVzaW5nIG1vZHVsYXIgc3lzdGVtc1wiKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwiQ291bGQgbm90IGxvYWQgdXNpbmcgbW9kdWxhciBzeXN0ZW1zXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWN0b3J5LmxvYWRQbHVnaW5TY3JpcHQocmVzb3VyY2VPYmplY3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHRoaXMubG9hZFJlc291cmNlID0gZnVuY3Rpb24gKHJlc291cmNlT2JqZWN0KSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcmVzb3VyY2VPYmplY3QgIT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgICAgICByZWplY3QoXCJFcnJvclwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiByZXNvdXJjZU9iamVjdC51cmwgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICByZWplY3QoXCJyZXNvdXJjZU9iamVjdC51cmwgbXVzdCBiZSBhIHN0cmluZ1wiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiByZXNvdXJjZU9iamVjdC50ZXN0ICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICByZWplY3QoXCJyZXNvdXJjZU9iamVjdC50ZXN0IG11c3QgYmUgYSBmdW5jdGlvblwiKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShyZXNvdXJjZU9iamVjdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24ocmVzb3VyY2VPYmplY3Qpe1xuICAgICAgICAgICAgdmFyIHJlc3BvbnNlID0gcmVzb3VyY2VPYmplY3QudGVzdCgpO1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlICE9PSBmYWxzZSAmJiByZXNwb25zZSAhPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHRocm93IChcInJlc291cmNlT2JqZWN0LnRlc3QgbXVzdCByZXR1cm4gdHJ1ZSBvciBmYWxzZVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghcmVzb3VyY2VPYmplY3QudHlwZSkge1xuICAgICAgICAgICAgICAgIHJlc291cmNlT2JqZWN0LnR5cGUgPSBcImphdmFzY3JpcHRcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc291cmNlT2JqZWN0LnR5cGUgPSByZXNvdXJjZU9iamVjdC50eXBlLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICBzd2l0Y2ggKHJlc291cmNlT2JqZWN0LnR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIFwiamF2YXNjcmlwdFwiOlxuICAgICAgICAgICAgICAgICAgICBpZiAoIXJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbG9hZFJlc291cmNlKHJlc291cmNlT2JqZWN0KS50aGVuKGZ1bmN0aW9uIChyZXNvdXJjZU9iamVjdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgcmVzb3VyY2VPYmplY3QucmV0dXJuT2JqZWN0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZXR1cm5PYmplY3Q7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh3aW5kb3cuaGFzT3duUHJvcGVydHkocmVzb3VyY2VPYmplY3QucmV0dXJuT2JqZWN0KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHdpbmRvd1tyZXNvdXJjZU9iamVjdC5yZXR1cm5PYmplY3RdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiByZXNvdXJjZU9iamVjdC5yZXR1cm5PYmplY3QgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5oYXNPd25Qcm9wZXJ0eShyZXNvdXJjZU9iamVjdC5yZXR1cm5PYmplY3QpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHdpbmRvd1tyZXNvdXJjZU9iamVjdC5yZXR1cm5PYmplY3RdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHRocm93IChcIkludmFsaWQgdHlwZSBcIiArIFN0cmluZyhyZXNvdXJjZU9iamVjdC50eXBlKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICB0aGlzLmxvYWRQbHVnaW5TY3JpcHQgPSBmdW5jdGlvbiAocmVzb3VyY2VPYmplY3QpIHtcbiAgICAgICAgaWYgKHJlc291cmNlT2JqZWN0KSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHJlc291cmNlT2JqZWN0LnJldHVybk9iamVjdCAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgIHRocm93IChcInJlc291cmNlT2JqZWN0LnJldHVybk9iamVjdCBtdXN0IGJlIHRoZSBuYW1lIG9mIHRoZSBwcm90b3R5cGUgZnVuY3Rpb25cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5sb2FkUmVzb3VyY2UocmVzb3VyY2VPYmplY3QpLnRoZW4oZnVuY3Rpb24gKHBsdWdpbikge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmFkZFByb3RvdHlwZShwbHVnaW4pO1xuICAgICAgICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB0aGlzLmFkZFByb3RvdHlwZSA9IGZ1bmN0aW9uIChwbHVnaW5fcHJvdG8pIHtcbiAgICAgICAgdmFyIGZhY3RvcnkgPSB0aGlzO1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHBsdWdpbl9wcm90byAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KFwiVGhlIFByb3RvdHlwZSBtdXN0IGJlIGEgZnVuY3Rpb24hXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodHlwZW9mIHBsdWdpbl9wcm90by5wcm90b3R5cGUubmFtZSAhPT0gXCJzdHJpbmdcIiB8fCBwbHVnaW5fcHJvdG8ucHJvdG90eXBlLm5hbWUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KFwiTWFsZm9ybWVkIHBsdWdpbi4gTmFtZSBub3QgZGVmaW5lZFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiBwbHVnaW5fcHJvdG8ucHJvdG90eXBlLnZlcnNpb24gIT09IFwic3RyaW5nXCIgfHwgcGx1Z2luX3Byb3RvLnByb3RvdHlwZS52ZXJzaW9uLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJlamVjdChcIk1hbGZvcm1lZCBwbHVnaW4uIFZlcnNpb24gbm90IGRlZmluZWRcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgcGx1Z2luX3Byb3RvLnByb3RvdHlwZS51bmlxdWVJRCAhPT0gXCJzdHJpbmdcIiB8fCBwbHVnaW5fcHJvdG8ucHJvdG90eXBlLnVuaXF1ZUlELmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJlamVjdChcIk1hbGZvcm1lZCBwbHVnaW4uIHVuaXF1ZUlEIG5vdCBkZWZpbmVkXCIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHBsdWdpbl9wcm90byk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24ocGx1Z2luX3Byb3RvKSB7XG4gICAgICAgICAgICB2YXIgdGVzdE9iaiA9IHtcbiAgICAgICAgICAgICAgICAncHJvdG8nOiBwbHVnaW5fcHJvdG8sXG4gICAgICAgICAgICAgICAgJ25hbWUnOiBwbHVnaW5fcHJvdG8ucHJvdG90eXBlLm5hbWUsXG4gICAgICAgICAgICAgICAgJ3ZlcnNpb24nOiBwbHVnaW5fcHJvdG8ucHJvdG90eXBlLnZlcnNpb24sXG4gICAgICAgICAgICAgICAgJ3VuaXF1ZUlEJzogcGx1Z2luX3Byb3RvLnByb3RvdHlwZS51bmlxdWVJRFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHZhciBvYmogPSBwbHVnaW5fcHJvdG90eXBlcy5maW5kKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBhcmFtO1xuICAgICAgICAgICAgICAgIHZhciBtYXRjaCA9IDA7XG4gICAgICAgICAgICAgICAgZm9yIChwYXJhbSBpbiB0aGlzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlW3BhcmFtXSA9PT0gdGhpc1twYXJhbV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoKys7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1hdGNoID09PSA0O1xuICAgICAgICAgICAgfSwgdGVzdE9iaik7XG4gICAgICAgICAgICBpZiAob2JqKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgKFwiVGhlIHBsdWdpbiBtdXN0IGJlIHVuaXF1ZSFcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvYmogPSBuZXcgUGx1Z2luUHJvdG90eXBlKHBsdWdpbl9wcm90bywgZmFjdG9yeSk7XG4gICAgICAgICAgICBwbHVnaW5fcHJvdG90eXBlcy5wdXNoKG9iaik7XG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhvYmosIHtcbiAgICAgICAgICAgICAgICAnZmFjdG9yeSc6IHtcbiAgICAgICAgICAgICAgICAgICAgJ3ZhbHVlJzogZmFjdG9yeVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIG9iajtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIHRoaXMuZ2V0UHJvdG90eXBlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHBsdWdpbl9wcm90b3R5cGVzO1xuICAgIH07XG5cbiAgICB0aGlzLmdldEF1ZGlvUGx1Z2luUHJvdG90eXBlcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gcGx1Z2luX3Byb3RvdHlwZXMuZmlsdGVyKGZ1bmN0aW9uKHByb3RvKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvdG8uaGFzTWlkaUlucHV0ID09IGZhbHNlICYmIHByb3RvLmhhc01pZGlPdXRwdXQgPT0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICB0aGlzLmdldE1pZGlTeW50aFByb3RvdHlwZXMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHBsdWdpbl9wcm90b3R5cGVzLmZpbHRlcihmdW5jdGlvbihwcm90bykge1xuICAgICAgICAgICAgcmV0dXJuIHByb3RvLmhhc01pZGlJbnB1dCA9PSB0cnVlICYmIHByb3RvLmhhc01pZGlPdXRwdXQgPT0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICB0aGlzLmdldE1pZGlQbHVnaW5Qcm90b3R5cGVzID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBwbHVnaW5fcHJvdG90eXBlcy5maWx0ZXIoZnVuY3Rpb24ocHJvdG8pIHtcbiAgICAgICAgICAgIHJldHVybiBwcm90by5oYXNNaWRpSW5wdXQgPT0gdHJ1ZSAmJiBwcm90by5oYXNNaWRpT3V0cHV0ID09IHRydWU7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICB0aGlzLmdldEFsbFBsdWdpbnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBwbHVnaW5zTGlzdDtcbiAgICB9O1xuXG4gICAgdGhpcy5nZXRBbGxQbHVnaW5zT2JqZWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgb2JqID0ge1xuICAgICAgICAgICAgICAgICdmYWN0b3J5JzogdGhpcyxcbiAgICAgICAgICAgICAgICAnc3ViRmFjdG9yaWVzJzogW11cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgc3ViRmFjdG9yaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBvYmouc3ViRmFjdG9yaWVzLnB1c2goe1xuICAgICAgICAgICAgICAgICdzdWJGYWN0b3J5Jzogc3ViRmFjdG9yaWVzW2ldLFxuICAgICAgICAgICAgICAgICdwbHVnaW5zJzogc3ViRmFjdG9yaWVzW2ldLmdldFBsdWdpbnMoKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICB9O1xuXG4gICAgdGhpcy5jcmVhdGVTdWJGYWN0b3J5ID0gZnVuY3Rpb24oY2hhaW5TdGFydCwgY2hhaW5TdG9wKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcIkRFUFJFQ0FURUQgLSBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgZGVwcmVjYXRlZCBpbiBmYXZvdXIgb2YgXFxcImNyZWF0ZUF1ZGlvUGx1Z2luQ2hhaW5NYW5hZ2VyXFxcIlwiKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlQXVkaW9QbHVnaW5DaGFpbk1hbmFnZXIoY2hhaW5TdGFydCwgY2hhaW5TdG9wKTtcbiAgICB9O1xuXG4gICAgdGhpcy5kZXN0cm95U3ViRmFjdG9yeSA9IGZ1bmN0aW9uKGNoYWluU3RhcnQsIGNoYWluU3RvcCkge1xuICAgICAgICBjb25zb2xlLndhcm4oXCJERVBSRUNBVEVEIC0gVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGRlcHJlY2F0ZWQgaW4gZmF2b3VyIG9mIFxcXCJkZXN0cm95QXVkaW9QbHVnaW5DaGFpbk1hbmFnZXJcXFwiXCIpO1xuICAgICAgICByZXR1cm4gdGhpcy5kZXN0cm95QXVkaW9QbHVnaW5DaGFpbk1hbmFnZXIoY2hhaW5TdGFydCwgY2hhaW5TdG9wKTtcbiAgICB9O1xuXG4gICAgdGhpcy5jcmVhdGVBdWRpb1BsdWdpbkNoYWluTWFuYWdlciA9IGZ1bmN0aW9uIChjaGFpblN0YXJ0LCBjaGFpblN0b3ApIHtcbiAgICAgICAgdmFyIG5vZGUgPSBuZXcgQXVkaW9QbHVnaW5DaGFpbk1hbmFnZXIodGhpcywgY2hhaW5TdGFydCwgY2hhaW5TdG9wKTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMobm9kZSwge1xuICAgICAgICAgICAgJ1Nlc3Npb25EYXRhJzoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiB0aGlzLlNlc3Npb25EYXRhXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ1VzZXJEYXRhJzoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiB0aGlzLlVzZXJEYXRhXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBzdWJGYWN0b3JpZXMucHVzaChub2RlKTtcbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfTtcblxuICAgIHRoaXMuZHVwbGljYXRlQXVkaW9QbHVnaW5DaGFpbk1hbmFnZXIgPSBmdW5jdGlvbihzb3VyY2VDaGFpbk1hbmFnZXIsIGNoYWluU3RhcnQsIGNoYWluU3RvcCkge1xuICAgICAgICB2YXIgbm9kZSA9IHRoaXMuY3JlYXRlQXVkaW9QbHVnaW5DaGFpbk1hbmFnZXIoY2hhaW5TdGFydCwgY2hhaW5TdG9wKTtcbiAgICAgICAgdmFyIHByb21pc2VDaGFpbiA9IFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICBzb3VyY2VDaGFpbk1hbmFnZXIuZ2V0UGx1Z2lucygpLmZvckVhY2goZnVuY3Rpb24ocGx1Z2luX29iamVjdCkge1xuICAgICAgICAgICAgcHJvbWlzZUNoYWluID0gcHJvbWlzZUNoYWluLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5vZGUuY3JlYXRlUGx1Z2luKHBsdWdpbl9vYmplY3QucHJvdG90eXBlT2JqZWN0KVxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKG5ld1BsdWdpbikge1xuICAgICAgICAgICAgICAgICAgICBuZXdQbHVnaW4ubm9kZS5wYXJhbWV0ZXJzLnNldFBhcmFtZXRlcnNCeU9iamVjdChwbHVnaW5fb2JqZWN0Lm5vZGUucGFyYW1ldGVycy5nZXRQYXJhbWV0ZXJPYmplY3QpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcHJvbWlzZUNoYWluLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gbm9kZTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIHRoaXMuZGVzdHJveUF1ZGlvUGx1Z2luQ2hhaW5NYW5hZ2VyID0gZnVuY3Rpb24gKFN1YkZhY3RvcnkpIHtcbiAgICAgICAgdmFyIGluZGV4ID0gc3ViRmFjdG9yaWVzLmZpbmRJbmRleChmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQgPT09IHRoaXMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSwgU3ViRmFjdG9yeSk7XG4gICAgICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICAgICAgICBzdWJGYWN0b3JpZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIFN1YkZhY3RvcnkuZGVzdHJveSgpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHRoaXMuY3JlYXRlTWlkaVN5bnRoZXNpc2VySG9zdCA9IGZ1bmN0aW9uKGZhY3RvcnkpIHtcbiAgICAgICAgaWYgKGZhY3RvcnkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgZmFjdG9yeSA9IHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGhvc3QgPSBuZXcgTWlkaVN5bnRoZXNpc2VySG9zdChmYWN0b3J5KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoaG9zdCwge1xuICAgICAgICAgICAgJ1Nlc3Npb25EYXRhJzoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiB0aGlzLlNlc3Npb25EYXRhXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ1VzZXJEYXRhJzoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiB0aGlzLlVzZXJEYXRhXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBzeW50aGVzaXNlckhvc3RzLnB1c2goaG9zdCk7XG4gICAgICAgIHJldHVybiBob3N0O1xuICAgIH07XG5cbiAgICB0aGlzLmRlc3Ryb3lNaWRpU3ludGhlc2lzZXJIb3N0ID0gZnVuY3Rpb24gKGhvc3QpIHtcbiAgICAgICAgdmFyIGluZGV4ID0gc3ludGhlc2lzZXJIb3N0cy5maW5kSW5kZXgoZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIGlmIChlbGVtZW50ID09PSB0aGlzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0sIGhvc3QpO1xuICAgICAgICBpZiAoaW5kZXggPj0gMCkge1xuICAgICAgICAgICAgc3ludGhlc2lzZXJIb3N0cy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgaG9zdC5kZXN0cm95KCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgdGhpcy5yZWdpc3RlclBsdWdpbkluc3RhbmNlID0gZnVuY3Rpb24gKGluc3RhbmNlKSB7XG4gICAgICAgIGlmIChwbHVnaW5zTGlzdC5maW5kKGZ1bmN0aW9uIChwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHAgPT09IHRoaXM7XG4gICAgICAgICAgICB9LCBpbnN0YW5jZSkpIHtcbiAgICAgICAgICAgIHRocm93IChcIlBsdWdpbiBJbnN0YW5jZSBub3QgdW5pcXVlXCIpO1xuICAgICAgICB9XG4gICAgICAgIHBsdWdpbnNMaXN0LnB1c2goaW5zdGFuY2UpO1xuICAgICAgICBpZiAoYXVkaW9TdGFydGVkKSB7XG4gICAgICAgICAgICB2YXIgY29udGV4dF90aW1lID0gYXVkaW9fY29udGV4dC5jdXJyZW50VGltZTtcbiAgICAgICAgICAgIHZhciBwcm9ncmFtX3RpbWUgPSB0aGlzLmdldEN1cnJlbnRQcm9ncmFtVGltZSgpO1xuICAgICAgICAgICAgcGx1Z2luQXVkaW9TdGFydChpbnN0YW5jZS5ub2RlLCBwcm9ncmFtX3RpbWUsIGNvbnRleHRfdGltZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcblxuICAgIHRoaXMuZGVsZXRlUGx1Z2luID0gZnVuY3Rpb24gKHBsdWdpbikge1xuICAgICAgICB2YXIgaW5kZXggPSBwbHVnaW5zTGlzdC5pbmRleE9mKHBsdWdpbik7XG4gICAgICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICAgICAgICB2YXIgcCA9IHBsdWdpbnNMaXN0LnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICBwWzBdLmRlbGV0ZSgpO1xuICAgICAgICAgICAgcFswXS5ub2RlLmV4dGVybmFsSW50ZXJmYWNlLmNsb3NlV2luZG93cygpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHRoaXMuZ2V0Q3VycmVudFByb2dyYW1UaW1lID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmIChhdWRpb1N0YXJ0ZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBhdWRpb19jb250ZXh0LmN1cnJlbnRUaW1lIC0gYXVkaW9TdGFydENvbnRleHRUaW1lICsgYXVkaW9TdGFydFByb2dyYW1UaW1lO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGF1ZGlvU3RhcnRQcm9ncmFtVGltZTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB0aGlzLnNldEN1cnJlbnRQcm9ncmFtVGltZSA9IGZ1bmN0aW9uKHRpbWUpIHtcbiAgICAgICAgaWYgKGF1ZGlvU3RhcnRlZCkge1xuICAgICAgICAgICAgdGhyb3coXCJNdXN0IHN0b3AgcGxheWJhY2sgdG8gc2V0IHRoZSBjdXJyZW50IHByb2dyYW0gdGltZVwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHRpbWUgPT0gXCJudW1iZXJcIiAmJiB0aW1lID49IDApIHtcbiAgICAgICAgICAgIGF1ZGlvU3RhcnRQcm9ncmFtVGltZSA9IHRpbWU7XG4gICAgICAgICAgICB0aGlzLlBsdWdpbkdVSS5wb2xsQWxsUGx1Z2lucygpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHRoaXMuYXVkaW9TdGFydCA9IGZ1bmN0aW9uIChwcm9ncmFtX3RpbWUsIGNvbnRleHRfdGltZSkge1xuICAgICAgICBpZiAoY29udGV4dF90aW1lID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNvbnRleHRfdGltZSA9IGF1ZGlvX2NvbnRleHQuY3VycmVudFRpbWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb2dyYW1fdGltZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBwcm9ncmFtX3RpbWUgPSAwO1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFwiQXNzdW1pbmcgc3RhcnQgdGltZSBhdCAwXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghYXVkaW9TdGFydGVkKSB7XG4gICAgICAgICAgICB0aGlzLnNldEN1cnJlbnRQcm9ncmFtVGltZShwcm9ncmFtX3RpbWUpO1xuICAgICAgICAgICAgYXVkaW9TdGFydENvbnRleHRUaW1lID0gY29udGV4dF90aW1lO1xuICAgICAgICAgICAgdHJpZ2dlckF1ZGlvU3RhcnQocHJvZ3JhbV90aW1lLCBjb250ZXh0X3RpbWUpO1xuICAgICAgICAgICAgYXVkaW9TdGFydGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5hdWRpb1N0b3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChhdWRpb1N0YXJ0ZWQpIHtcbiAgICAgICAgICAgIHRyaWdnZXJBdWRpb1N0b3AoKTtcbiAgICAgICAgICAgIGF1ZGlvU3RhcnRlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHRoaXMuY3JlYXRlU3RvcmUgPSBmdW5jdGlvbiAoc3RvcmVOYW1lKSB7XG4gICAgICAgIHZhciBub2RlID0gbmV3IExpbmtlZFN0b3JlKHN0b3JlTmFtZSk7XG4gICAgICAgIHN0b3Jlcy5wdXNoKG5vZGUpO1xuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9O1xuXG4gICAgdGhpcy5nZXRTdG9yZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBzdG9yZXM7XG4gICAgfTtcblxuICAgIHRoaXMuZmluZFN0b3JlID0gZnVuY3Rpb24gKHN0b3JlTmFtZSkge1xuICAgICAgICByZXR1cm4gc3RvcmVzLmZpbmQoZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgICAgIHJldHVybiBhLm5hbWUgPT09IHN0b3JlTmFtZTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIC8vIEJ1aWxkIHRoZSBkZWZhdWx0IFN0b3Jlc1xuICAgIHRoaXMuU2Vzc2lvbkRhdGEgPSBuZXcgTGlua2VkU3RvcmUoXCJTZXNzaW9uXCIpO1xuICAgIHRoaXMuVXNlckRhdGEgPSBuZXcgTGlua2VkU3RvcmUoXCJVc2VyXCIpO1xuXG4gICAgdGhpcy5GZWF0dXJlTWFwID0gbmV3IEZlYXR1cmVNYXAoKTtcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLkZlYXR1cmVNYXAsIFwiZmFjdG9yeVwiLCB7XG4gICAgICAgICd2YWx1ZSc6IHRoaXNcbiAgICB9KTtcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgICAgXCJjb250ZXh0XCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogYXVkaW9fY29udGV4dFxuICAgICAgICB9LFxuICAgICAgICBcImhhc0F1ZGlvU3RhcnRlZFwiOiB7XG4gICAgICAgICAgICBcImdldFwiOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXVkaW9TdGFydGVkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInBsdWdpblJvb3RVUkxcIjoge1xuICAgICAgICAgICAgXCJnZXRcIjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiByb290VVJMO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwic2V0XCI6IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgICAgIHJvb3RVUkwgPSB0O1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcm9vdFVSTDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhyb3cgKFwiQ2Fubm90IHNldCByb290IFVSTCB3aXRob3V0IGEgc3RyaW5nXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImNyZWF0ZUZhY3RvcnlDb3B5XCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29weUZhY3RvcnkodGhpcywgY29udGV4dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwic3ViRmFjdG9yaWVzXCI6IHtcbiAgICAgICAgICAgIFwiZ2V0XCI6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzdWJGYWN0b3JpZXM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiUGx1Z2luR1VJXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogcGx1Z2luVXNlckludGVyZmFjZU1lc3NhZ2VIdWJJbnRhbmNlXG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUGx1Z2luRmFjdG9yeTtcbiIsIi8qIGpzaGludCBlc3ZlcnNpb246IDYgKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBsdWdpbkluc3RhbmNlKHBsdWdpbl9ub2RlKSB7XG4gICAgdGhpcy5uZXh0X25vZGUgPSB1bmRlZmluZWQ7XG4gICAgdmFyIF9ieXBhc3NlZCA9IGZhbHNlO1xuICAgIHZhciBldiA9IG5ldyBFdmVudFRhcmdldCgpO1xuICAgIHZhciBfaW4gPSBwbHVnaW5fbm9kZS5jb250ZXh0LmNyZWF0ZUdhaW4oKSxcbiAgICAgICAgX291dCA9IHBsdWdpbl9ub2RlLmNvbnRleHQuY3JlYXRlR2FpbigpO1xuXG4gICAgX2luLmNvbm5lY3QocGx1Z2luX25vZGUuZ2V0SW5wdXRzKClbMF0pO1xuICAgIHBsdWdpbl9ub2RlLmdldE91dHB1dHMoKVswXS5jb25uZWN0KF9vdXQpO1xuICAgIHBsdWdpbl9ub2RlLmFkZEV2ZW50TGlzdGVuZXIodGhpcyk7XG5cbiAgICBmdW5jdGlvbiBieXBhc3NFbmFibGUoKSB7XG4gICAgICAgIF9pbi5kaXNjb25uZWN0KCk7XG4gICAgICAgIF9pbi5jb25uZWN0KF9vdXQpO1xuICAgICAgICBfYnlwYXNzZWQgPSB0cnVlO1xuICAgICAgICBpZiAocGx1Z2luX25vZGUucHJvY2Vzc2luZ0RlbGF5QXNTYW1wbGVzICE9IDApIHtcbiAgICAgICAgICAgIGV2LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiYWx0ZXJkZWxheVwiKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBieXBhc3NEaXNhYmxlKCkge1xuICAgICAgICBfaW4uZGlzY29ubmVjdCgpO1xuICAgICAgICBfaW4uY29ubmVjdChwbHVnaW5fbm9kZS5nZXRJbnB1dHMoKVswXSk7XG4gICAgICAgIF9ieXBhc3NlZCA9IGZhbHNlO1xuICAgICAgICBpZiAocGx1Z2luX25vZGUucHJvY2Vzc2luZ0RlbGF5QXNTYW1wbGVzICE9IDApIHtcbiAgICAgICAgICAgIGV2LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiYWx0ZXJkZWxheVwiKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmJ5cGFzcyA9IGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgICAgICBzdGF0ZSA9IChzdGF0ZSA9PT0gdHJ1ZSk7XG4gICAgICAgIGlmIChzdGF0ZSA9PT0gX2J5cGFzc2VkKSB7XG4gICAgICAgICAgICByZXR1cm4gX2J5cGFzc2VkO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzdGF0ZSkge1xuICAgICAgICAgICAgYnlwYXNzRW5hYmxlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBieXBhc3NEaXNhYmxlKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF9ieXBhc3NlZDtcbiAgICB9O1xuXG4gICAgdGhpcy5pc0J5cGFzc2VkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX2J5cGFzc2VkO1xuICAgIH07XG5cbiAgICB0aGlzLnJlY29ubmVjdCA9IGZ1bmN0aW9uIChuZXdfbmV4dCkge1xuICAgICAgICB0aGlzLmNvbm5lY3QobmV3X25leHQpO1xuICAgIH07XG5cbiAgICB0aGlzLmNvbm5lY3QgPSBmdW5jdGlvbiAobmV3X25leHQpIHtcbiAgICAgICAgaWYgKHRoaXMubmV4dF9ub2RlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuZGlzY29ubmVjdCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChuZXdfbmV4dCAhPT0gdW5kZWZpbmVkICYmIG5ld19uZXh0LmlucHV0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmV4dF9ub2RlID0gbmV3X25leHQ7XG4gICAgICAgICAgICBfb3V0LmNvbm5lY3QodGhpcy5uZXh0X25vZGUuaW5wdXQpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG5cbiAgICB0aGlzLmRpc2Nvbm5lY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLm5leHRfbm9kZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBfb3V0LmRpc2Nvbm5lY3QodGhpcy5uZXh0X25vZGUuaW5wdXQpO1xuICAgICAgICAgICAgdGhpcy5uZXh0X25vZGUgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgdGhpcy5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBwbHVnaW5fbm9kZS5kZXN0cm95KCk7XG4gICAgfTtcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgICAgXCJoYW5kbGVFdmVudFwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICBldi5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChlLnR5cGUpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJhZGRFdmVudExpc3RlbmVyXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24oYSxiLGMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZXYuYWRkRXZlbnRMaXN0ZW5lcihhLGIsYyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwicmVtb3ZlRXZlbnRMaXN0ZW5lclwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKGEsYixjKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGV2LnJlbW92ZUV2ZW50TGlzdGVuZXIoYSxiLGMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAnbm9kZSc6IHtcbiAgICAgICAgICAgICd2YWx1ZSc6IHBsdWdpbl9ub2RlXG4gICAgICAgIH0sXG4gICAgICAgICdpbnB1dCc6IHtcbiAgICAgICAgICAgICdnZXQnOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9pbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgJ291dHB1dCc6IHtcbiAgICAgICAgICAgICdnZXQnOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9vdXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgICdieXBhc3NlZCc6IHtcbiAgICAgICAgICAgICdnZXQnOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9ieXBhc3NlZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuIiwiLyoganNoaW50IGVzdmVyc2lvbjogNiAqL1xuaW1wb3J0IFBsdWdpbkluc3RhbmNlIGZyb20gXCIuL1BsdWdpbkluc3RhbmNlXCI7XG5pbXBvcnQgTWlkaVN5bnRoZXNpc0luc3RhbmNlIGZyb20gXCIuL01pZGlTeW50aGVzaXNJbnN0YW5jZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQbHVnaW5Qcm90b3R5cGUocHJvdG8sIGZhY3RvcnkpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgICAnbmFtZSc6IHtcbiAgICAgICAgICAgIHZhbHVlOiBwcm90by5wcm90b3R5cGUubmFtZVxuICAgICAgICB9LFxuICAgICAgICAncHJvdG8nOiB7XG4gICAgICAgICAgICB2YWx1ZTogcHJvdG9cbiAgICAgICAgfSxcbiAgICAgICAgJ3ZlcnNpb24nOiB7XG4gICAgICAgICAgICB2YWx1ZTogcHJvdG8ucHJvdG90eXBlLnZlcnNpb25cbiAgICAgICAgfSxcbiAgICAgICAgJ3VuaXF1ZUlEJzoge1xuICAgICAgICAgICAgdmFsdWU6IHByb3RvLnByb3RvdHlwZS51bmlxdWVJRFxuICAgICAgICB9LFxuICAgICAgICAnaGFzTWlkaUlucHV0Jzoge1xuICAgICAgICAgICAgdmFsdWU6IHByb3RvLnByb3RvdHlwZS5oYXNNaWRpSW5wdXQgfHwgZmFsc2VcbiAgICAgICAgfSxcbiAgICAgICAgJ2hhc01pZGlPdXRwdXQnOiB7XG4gICAgICAgICAgICB2YWx1ZTogcHJvdG8ucHJvdG90eXBlLmhhc01pZGlPdXRwdXQgfHwgZmFsc2VcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5jcmVhdGVQbHVnaW5JbnN0YW5jZSA9IGFzeW5jIGZ1bmN0aW9uKG93bmVyLCBhc3luYykge1xuICAgICAgICB2YXIgcCA9IGNyZWF0ZVBsdWdpbkluc3RhbmNlKG93bmVyKTtcbiAgICAgICAgaWYgKGFzeW5jID09PSB0cnVlKSB7XG4gICAgICAgICAgICByZXR1cm4gcDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGF3YWl0IHA7XG4gICAgICAgICAgICByZXR1cm4gcDtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVQbHVnaW5JbnN0YW5jZShvd25lcikge1xuICAgICAgICByZXR1cm4gd2FpdFVudGlsUmVhZHkoKS50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgICAgIGlmICghY2hlY2tJc1JlYWR5KCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihcIlBsdWdpbiBub3QgcmVhZHlcIikpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUobmV3IHByb3RvKGZhY3RvcnksIG93bmVyKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSkudGhlbihmdW5jdGlvbihwbHVnaW4pIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3Qpe1xuICAgICAgICAgICAgICAgIGlmIChwbHVnaW4uaW5pdGlhbGlzZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGx1Z2luLmluaXRpYWxpc2UoKS50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShwbHVnaW4pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHBsdWdpbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24ocGx1Z2luKSB7XG4gICAgICAgICAgICB2YXIgbm9kZTtcbiAgICAgICAgICAgIGlmIChwbHVnaW4uaGFzTWlkaUlucHV0ICE9PSB0cnVlICYmIHBsdWdpbi5oYXNNaWRpT3V0cHV0ICE9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgbm9kZSA9IG5ldyBQbHVnaW5JbnN0YW5jZShwbHVnaW4pO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChwbHVnaW4uaGFzTWlkaUlucHV0ID09PSB0cnVlICYmIHBsdWdpbi5oYXNNaWRpT3V0cHV0ICE9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgbm9kZSA9IG5ldyBNaWRpU3ludGhlc2lzSW5zdGFuY2UocGx1Z2luKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhyb3coXCJObyBJbnN0YW5jZSBIb2xkZXIgQXZhaWxhYmxlIVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHBsdWdpbiwge1xuICAgICAgICAgICAgICAgICdwbHVnaW5JbnN0YW5jZSc6IHtcbiAgICAgICAgICAgICAgICAgICAgJ3ZhbHVlJzogbm9kZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgJ3Byb3RvdHlwZU9iamVjdCc6IHtcbiAgICAgICAgICAgICAgICAgICAgJ3ZhbHVlJzogc2VsZlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgJ25hbWUnOiB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBwcm90by5wcm90b3R5cGUubmFtZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgJ3ZlcnNpb24nOiB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBwcm90by5wcm90b3R5cGUudmVyc2lvblxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgJ3VuaXF1ZUlEJzoge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogcHJvdG8ucHJvdG90eXBlLnVuaXF1ZUlEXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAnU2VzaW9uRGF0YSc6IHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGZhY3RvcnkuU2Vzc2lvbkRhdGFcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICdVc2VyRGF0YSc6IHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGZhY3RvcnkuVXNlckRhdGFcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKG5vZGUsIHtcbiAgICAgICAgICAgICAgICBcInByb3RvdHlwZU9iamVjdFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICd2YWx1ZSc6IHNlbGZcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFwiZXh0ZXJuYWxJbnRlcmZhY2VcIjoge1xuICAgICAgICAgICAgICAgICAgICAndmFsdWUnOiBwbHVnaW4uZXh0ZXJuYWxJbnRlcmZhY2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGZhY3RvcnkucmVnaXN0ZXJQbHVnaW5JbnN0YW5jZShub2RlKTtcbiAgICAgICAgICAgIHJldHVybiBub2RlO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsb2FkUmVzb3VyY2VDaGFpbihyZXNvdXJjZU9iamVjdCwgcCkge1xuICAgICAgICBpZiAoIXApIHtcbiAgICAgICAgICAgIHZhciBrID0gbG9hZFJlc291cmNlKHJlc291cmNlT2JqZWN0KTtcbiAgICAgICAgICAgIGsudGhlbihmdW5jdGlvbiAocmVzb3VyY2VPYmplY3QpIHtcbiAgICAgICAgICAgICAgICBpZiAocmVzb3VyY2VPYmplY3QucmVzb3VyY2VzICE9PSB1bmRlZmluZWQgJiYgcmVzb3VyY2VPYmplY3QucmVzb3VyY2VzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXNvdXJjZU9iamVjdC5yZXNvdXJjZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGsgPSBsb2FkUmVzb3VyY2VDaGFpbihyZXNvdXJjZU9iamVjdC5yZXNvdXJjZXNbaV0sIGspO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gaztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBwLnRoZW4obG9hZFJlc291cmNlKHJlc291cmNlT2JqZWN0KSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsb2FkU3R5bGVzaGVldCh1cmwpIHtcbiAgICAgICAgdmFyIGNzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuICAgICAgICBjc3Muc2V0QXR0cmlidXRlKFwicmVsXCIsIFwic3R5bGVzaGVldFwiKTtcbiAgICAgICAgY3NzLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0L2Nzc1wiKTtcbiAgICAgICAgY3NzLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgdXJsKTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdLmFwcGVuZENoaWxkKGNzcyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVjdXJzaXZlR2V0VGVzdChyZXNvdXJjZU9iamVjdCkge1xuICAgICAgICBpZiAocmVzb3VyY2VPYmplY3QuaGFzT3duUHJvcGVydHkoXCJsZW5ndGhcIikgJiYgcmVzb3VyY2VPYmplY3QubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlY3Vyc2l2ZUdldFRlc3QocmVzb3VyY2VPYmplY3RbcmVzb3VyY2VPYmplY3QubGVuZ3RoIC0gMV0pO1xuICAgICAgICB9IGVsc2UgaWYgKHJlc291cmNlT2JqZWN0Lmhhc093blByb3BlcnR5KFwicmVzb3VyY2VzXCIpKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVjdXJzaXZlR2V0VGVzdChyZXNvdXJjZU9iamVjdC5yZXNvdXJjZXMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHJlc291cmNlT2JqZWN0LnRlc3Q7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcmVzb3VyY2VQcm9taXNlcyA9IFtdO1xuICAgIGlmIChwcm90by5wcm90b3R5cGUucmVzb3VyY2VzKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvdG8ucHJvdG90eXBlLnJlc291cmNlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHJlc291cmNlID0gcHJvdG8ucHJvdG90eXBlLnJlc291cmNlc1tpXTtcbiAgICAgICAgICAgIHJlc291cmNlLnR5cGUgPSByZXNvdXJjZS50eXBlLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICBzd2l0Y2ggKHJlc291cmNlLnR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIFwiY3NzXCI6XG4gICAgICAgICAgICAgICAgICAgIGxvYWRTdHlsZXNoZWV0KHJlc291cmNlLnVybCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJqYXZhc2NyaXB0XCI6XG4gICAgICAgICAgICAgICAgICAgIHZhciBvYmplY3QgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAncHJvbWlzZSc6IGxvYWRSZXNvdXJjZUNoYWluKHJlc291cmNlKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICdzdGF0ZSc6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAnY29tcGxldGUnOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3Rlc3QnOiByZWN1cnNpdmVHZXRUZXN0KHJlc291cmNlKVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBvYmplY3QucHJvbWlzZS50aGVuKG9iamVjdC5jb21wbGV0ZS5iaW5kKG9iamVjdCkpO1xuICAgICAgICAgICAgICAgICAgICByZXNvdXJjZVByb21pc2VzLnB1c2gob2JqZWN0KTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgKFwiQ291bGQgbm90IGxvYWQgXCIgKyByZXNvdXJjZS51cmwgKyBcIiwgaW52YWxpZCByZXNvdXJjZS50eXBlXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5nZXRSZXNvdXJjZVByb21pc2VzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcmVzb3VyY2VQcm9taXNlcztcbiAgICB9O1xuICAgIGZ1bmN0aW9uIGNoZWNrSXNSZWFkeSgpIHtcbiAgICAgICAgdmFyIHN0YXRlID0gdHJ1ZTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXNvdXJjZVByb21pc2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAocmVzb3VyY2VQcm9taXNlc1tpXS5zdGF0ZSAhPT0gMSB8fCAhcmVzb3VyY2VQcm9taXNlc1tpXS50ZXN0KCkpIHtcbiAgICAgICAgICAgICAgICBzdGF0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9O1xuICAgIGZ1bmN0aW9uIHdhaXRVbnRpbFJlYWR5KCkge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwocmVzb3VyY2VQcm9taXNlcyk7XG4gICAgfVxufVxuIiwiLyoganNoaW50IGVzdmVyc2lvbjogNiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQbHVnaW5Vc2VySW50ZXJmYWNlTWVzc2FnZUh1YihmYWN0b3J5KXtcbiAgICBmdW5jdGlvbiBidWlsZFBsdWdpbkludGVyZmFjZShwbHVnaW5fb2JqZWN0LCBpbnRlcmZhY2Vfb2JqZWN0KSB7XG4gICAgICAgIHZhciBpZnJhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaWZyYW1lXCIpO1xuICAgICAgICBpZnJhbWUuc3JjID0gaW50ZXJmYWNlX29iamVjdC5zcmM7XG4gICAgICAgIGlmIChpbnRlcmZhY2Vfb2JqZWN0LndpZHRoKSB7XG4gICAgICAgICAgICBpZnJhbWUud2lkdGggPSBpbnRlcmZhY2Vfb2JqZWN0LndpZHRoO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpbnRlcmZhY2Vfb2JqZWN0LmhlaWdodCkge1xuICAgICAgICAgICAgaWZyYW1lLmhlaWdodCA9IGludGVyZmFjZV9vYmplY3QuaGVpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIGlmcmFtZS5zdHlsZS5ib3JkZXIgPSBcIjBcIjtcbiAgICAgICAgLy9pZnJhbWUuY29udGVudFdpbmRvdy5wbHVnaW5JbnN0YW5jZSA9IHBsdWdpbl9vYmplY3Q7XG4gICAgICAgIHJldHVybiBpZnJhbWU7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHNwYXduUGx1Z2luV2luZG93KHBsdWdpbl9vYmplY3QsIGludGVyZmFjZV9vYmplY3QsIG9wdHMpIHtcbiAgICAgICAgdmFyIHcgPSB3aW5kb3cub3BlbihpbnRlcmZhY2Vfb2JqZWN0LnNyYyxwbHVnaW5fb2JqZWN0Lm5hbWUsb3B0cyk7XG4gICAgICAgIHBsdWdpbl9vYmplY3QuZXh0ZXJuYWxJbnRlcmZhY2UucmVnaXN0ZXJXaW5kb3codyk7XG4gICAgICAgIHJldHVybiB3O1xuICAgIH1cbiAgICBmdW5jdGlvbiBzZXREZWZhdWx0SW50ZXJmYWNlKHVybCwgd2lkdGgsIGhlaWdodCkge1xuICAgICAgICBkZWZhdWx0X2ludGVyZmFjZSA9IHtcbiAgICAgICAgICAgIHVybDogdXJsLFxuICAgICAgICAgICAgd2lkdGg6IHdpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0OiBoZWlnaHRcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIGRlZmF1bHRfaW50ZXJmYWNlO1xuICAgIH1cbiAgICBmdW5jdGlvbiBwb2xsQWxsUGx1Z2lucygpIHtcbiAgICAgICAgZmFjdG9yeS5nZXRBbGxQbHVnaW5zKCkuZm9yRWFjaChmdW5jdGlvbihwbHVnaW4pIHtcbiAgICAgICAgICAgIHBsdWdpbi5ub2RlLmV4dGVybmFsSW50ZXJmYWNlLnVwZGF0ZUludGVyZmFjZXModHJ1ZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHZhciBsaXN0ZW5lciA9IGZhbHNlO1xuICAgIHZhciBkZWZhdWx0X2ludGVyZmFjZSA9IHtcbiAgICAgICAgc3JjOiBcImpzYXBfZGVmYXVsdC5odG1sXCJcbiAgICB9O1xuXG4gICAgcmV0dXJuIE9iamVjdC5jcmVhdGUoe1xuICAgICAgICBcInNldERlZmF1bHRJbnRlcmZhY2VcIjogc2V0RGVmYXVsdEludGVyZmFjZSxcbiAgICAgICAgXCJidWlsZFBsdWdpbkludGVyZmFjZVwiOmJ1aWxkUGx1Z2luSW50ZXJmYWNlLFxuICAgICAgICBcInNwYXduUGx1Z2luV2luZG93XCI6IHNwYXduUGx1Z2luV2luZG93LFxuICAgICAgICBcInBvbGxBbGxQbHVnaW5zXCI6IHBvbGxBbGxQbHVnaW5zXG4gICAgfSk7XG59XG4iLCIvKmdsb2JhbHMgZG9jdW1lbnQgKi9cbi8qZXNsaW50LWVudiBicm93c2VyICovXG4vKiBqc2hpbnQgZXN2ZXJzaW9uOiA2ICovXG5cbnZhciBMaW5rZWRTdG9yZSA9IGZ1bmN0aW9uIChzdG9yZU5hbWUpIHtcbiAgICAvLyBTdG9yZSBmb3IgdGhlIHNlbWFudGljIHRlcm1zLCBlYWNoIHN0b3JlIGhvbGRzIGl0cyBvd24gZGF0YSB0cmVlXG4gICAgLy8gVGVybXMgYXJlIGFkZGVkIGFzIGtleS92YWx1ZSBwYXJpcyB0byBhIHJvb3Qgbm9kZVxuICAgIHZhciBldCA9IG5ldyBFdmVudFRhcmdldCgpO1xuICAgIHZhciByb290ID0ge307XG5cbiAgICBmdW5jdGlvbiBvYmplY3RUb1hNTChvYmosIHJvb3QsIGRvYykge1xuICAgICAgICAvLyBVc2VkIGlmIGFuIG9iamVjdCB3YXMgcGFzc2VkIGFzIGEgdGVybSB2YWx1ZVxuICAgICAgICB2YXIgdGVybTtcbiAgICAgICAgZm9yICh0ZXJtIGluIG9iaikge1xuICAgICAgICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eSh0ZXJtKSkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygb2JqW3Rlcm1dID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBkb2NOb2RlO1xuICAgICAgICAgICAgICAgICAgICBpZiAob2JqW3Rlcm1dLnRvWE1MKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb2NOb2RlID0gb2JqW3Rlcm1dLnRvWE1MKGRvYyk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb2NOb2RlID0gZG9jLmNyZWF0ZUVsZW1lbnQodGVybSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByb290LmFwcGVuZENoaWxkKGRvY05vZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9ialt0ZXJtXS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJheVRvWE1MKG9ialt0ZXJtXSwgZG9jTm9kZSwgZG9jKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0VG9YTUwob2JqW3Rlcm1dLCBkb2NOb2RlLCBkb2MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJvb3QuYXBwZW5kQ2hpbGQoZG9jTm9kZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcm9vdC5zZXRBdHRyaWJ1dGUodGVybSwgb2JqW3Rlcm1dKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhcnJheVRvWE1MKGFyciwgcm9vdCwgZG9jKSB7XG4gICAgICAgIC8vIFVzZWQgdG8gY29udmVydCBhbiBhcnJheSB0byBhIGxpc3Qgb2YgWE1MIGVudHJpZXNcbiAgICAgICAgdmFyIGFsbF9udW1iZXJzID0gdHJ1ZSxcbiAgICAgICAgICAgIGFsbF9zdHJpbmdzID0gdHJ1ZSxcbiAgICAgICAgICAgIGksIGwgPSBhcnIubGVuZ3RoO1xuICAgICAgICBhbGxfbnVtYmVycyA9IGFyci5ldmVyeShmdW5jdGlvbiAoYSkge1xuICAgICAgICAgICAgcmV0dXJuIHR5cGVvZiBhID09PSBcIm51bWJlclwiO1xuICAgICAgICB9KTtcbiAgICAgICAgYWxsX3N0cmluZ3MgPSBhcnIuZXZlcnkoZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgICAgIHJldHVybiB0eXBlb2YgYSA9PT0gXCJzdHJpbmdcIjtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChhbGxfbnVtYmVycyB8fCBhbGxfc3RyaW5ncykge1xuICAgICAgICAgICAgLy8gQW4gYXJyYXkgb2YgbnVtYmVycyBvciBzdHJpbmdzXG4gICAgICAgICAgICBhcnIuZm9yRWFjaChmdW5jdGlvbiAoYSwgaSkge1xuICAgICAgICAgICAgICAgIHJvb3Quc2V0QXR0cmlidXRlKFwiaW5kZXgtXCIgKyBpLCBhKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gQW4gYXJyYXkgb2Ygb2JqZWN0c1xuICAgICAgICAgICAgYXJyLmZvckVhY2goZnVuY3Rpb24gKGEsIGkpIHtcbiAgICAgICAgICAgICAgICB2YXIgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ2YWx1ZVwiKTtcbiAgICAgICAgICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShcImluZGV4XCIsIGkpO1xuICAgICAgICAgICAgICAgIG9iamVjdFRvWE1MKGEsIG5vZGUsIGRvYyk7XG4gICAgICAgICAgICAgICAgcm9vdC5hcHBlbmRDaGlsZChub2RlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgICBcImFkZEV2ZW50TGlzdGVuZXJcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbihhLGIsYykge1xuICAgICAgICAgICAgICAgIHJldHVybiBldC5hZGRFdmVudExpc3RlbmVyKGEsYixjKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJyZW1vdmVFdmVudExpc3RlbmVyXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24oYSxiLGMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihhLGIsYyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgICduYW1lJzoge1xuICAgICAgICAgICAgJ2dldCc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RvcmVOYW1lO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICdzZXQnOiBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICAgICAgICAgIGlmIChzdG9yZU5hbWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBuYW1lID0gc3RvcmVOYW1lO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IChcIk5hbWUgaXMgYWxyZWFkeSBzZXRcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAnYWRkVGVybSc6IHtcbiAgICAgICAgICAgICd2YWx1ZSc6IGZ1bmN0aW9uICh0ZXJtLCB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGVybSAhPT0gXCJzdHJpbmdcIiAmJiB0ZXJtLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyAoXCJ0ZXJtIG11c3QgYmUgYSBzdHJpbmdcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJvb3RbdGVybV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICBldC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcImFsdGVyZWRcIiwge2RldGFpbDp7dGVybTogdGVybSwgdmFsdWU6IHZhbHVlfX0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgJ2FkZFRlcm1zJzoge1xuICAgICAgICAgICAgJ3ZhbHVlJzogZnVuY3Rpb24gKHRlcm1zT2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0ZXJtc09iamVjdCAhPT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyAoXCJhZGRUZXJtcyB0YWtlcyBhbiBvYmplY3Qgb2YgdGVybS92YWx1ZSBwYWlyc1wiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIHRlcm07XG4gICAgICAgICAgICAgICAgZm9yICh0ZXJtIGluIHRlcm1zT2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ZXJtc09iamVjdC5oYXNPd25Qcm9wZXJ0eSh0ZXJtKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRUZXJtKHRlcm0sIHRlcm1zT2JqZWN0W3Rlcm1dKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgJ2RlbGV0ZVRlcm0nOiB7XG4gICAgICAgICAgICAndmFsdWUnOiBmdW5jdGlvbiAodGVybSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkVGVybSh0ZXJtLCB1bmRlZmluZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAnZ2V0VGVybSc6IHtcbiAgICAgICAgICAgICd2YWx1ZSc6IGZ1bmN0aW9uICh0ZXJtKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0ZXJtICE9PSBcInN0cmluZ1wiICYmIHRlcm0ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IChcInRlcm0gbXVzdCBiZSBhIHN0cmluZ1wiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJvb3RbdGVybV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgICdoYXNUZXJtJzoge1xuICAgICAgICAgICAgJ3ZhbHVlJzogZnVuY3Rpb24gKHRlcm0pIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRlcm0gIT09IFwic3RyaW5nXCIgJiYgdGVybS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgKFwidGVybSBtdXN0IGJlIGEgc3RyaW5nXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcm9vdC5oYXNPd25Qcm9wZXJ0eSh0ZXJtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgJ3RvSlNPTic6IHtcbiAgICAgICAgICAgICd2YWx1ZSc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShyb290KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgICd0b1hNTCc6IHtcbiAgICAgICAgICAgICd2YWx1ZSc6IGZ1bmN0aW9uIChkb2MpIHtcbiAgICAgICAgICAgICAgICB2YXIgbm9kZTtcbiAgICAgICAgICAgICAgICBpZiAoIWRvYykge1xuICAgICAgICAgICAgICAgICAgICBkb2MgPSBkb2N1bWVudC5pbXBsZW1lbnRhdGlvbi5jcmVhdGVEb2N1bWVudChudWxsLCBzdG9yZU5hbWUsIG51bGwpO1xuICAgICAgICAgICAgICAgICAgICBub2RlID0gZG9jLmZpcnN0RWxlbWVudENoaWxkO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUgPSBkb2MuY3JlYXRlRWxlbWVudChzdG9yZU5hbWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBvYmplY3RUb1hNTChyb290LCBub2RlLCBkb2MpO1xuICAgICAgICAgICAgICAgIHJldHVybiBub2RlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMaW5rZWRTdG9yZTtcbiIsIi8qIGpzaGludCBlc3ZlcnNpb246IDYgKi9cbmltcG9ydCB7QmFzZVBsdWdpbn0gZnJvbSBcIi4uL0Jhc2VQbHVnaW4vaW5kZXhcIjtcblxudmFyIFN5bnRoZXNpc2VyQmFzZVBsdWdpbiA9IGZ1bmN0aW9uKGZhY3RvcnksIG93bmVyKVxue1xuICAgIHZhciBoYXNXYXJuZWRTY2hlZHVsZU5vdFNldCA9IGZhbHNlO1xuICAgIHZhciBoYXNXYXJuZWRDYW5jZWxOb3RTZXQgPSBmYWxzZTtcbiAgICB2YXIgZWRpdG9yVHlwZSA9IFwicm9sbFwiO1xuICAgIHZhciBtaW5pbXVtQWN0aXZlTm90ZSA9IDA7XG4gICAgdmFyIG1heGltdW1BY3RpdmVOb3RlID0gMTI3O1xuICAgIEJhc2VQbHVnaW4uY2FsbCh0aGlzLCBmYWN0b3J5LCBvd25lcik7XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XG4gICAgICAgIFwiYWRkSW5wdXRcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyhcIkNhbm5vdCBhZGQgaW5wdXQgdG8gdHlwZSBcXFwiU3ludGhlc2lzZXJCYXNlUGx1Z2luXFxcIlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJkZWxldGVJbnB1dFwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHRocm93KFwiQ2Fubm90IGRlbGV0ZSBpbnB1dCB0byB0eXBlIFxcXCJTeW50aGVzaXNlckJhc2VQbHVnaW5cXFwiXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInNjaGVkdWxlRXZlbnRcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAobXNnLCBjb250ZXh0VGltZSkge1xuICAgICAgICAgICAgICAgIGlmICghaGFzV2FybmVkU2NoZWR1bGVOb3RTZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuaW5nKFwiV0FSTklORyAtIC5zY2hlZHVsZUV2ZW50IGlzIG5vdCBvdmVycmlkZGVuXCIpO1xuICAgICAgICAgICAgICAgICAgICBoYXNXYXJuZWRTY2hlZHVsZU5vdFNldCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwid3JpdGFibGVcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcImNhbmNlbEFsbEV2ZW50c1wiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGlmICghaGFzV2FybmVkQ2FuY2VsTm90U2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybmluZyhcIldBUk5JTkcgLSAuY2FuY2VsQWxsRXZlbnRzIGlzIG5vdCBvdmVycmlkZGVuXCIpO1xuICAgICAgICAgICAgICAgICAgICBoYXNXYXJuZWRDYW5jZWxOb3RTZXQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIndyaXRhYmxlXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZXRFZGl0b3JUeXBlXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24odHlwZSkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlID09IFwicm9sbFwiIHx8IHR5cGUgPT0gXCJsaW5lXCIgfHwgdHlwZSA9PSBcInNlcXVlbmNlclwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGVkaXRvclR5cGUgPSB0eXBlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gZWRpdG9yVHlwZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRFZGl0b3JUeXBlXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVkaXRvclR5cGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0TWF4aW11bUFjdGl2ZU5vdGVcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1heGltdW1BY3RpdmVOb3RlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImdldE1pbmltdW1BY3RpdmVOb3RlXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBtaW5pbXVtQWN0aXZlTm90ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJzZXRNYXhpbXVtQWN0aXZlTm90ZVwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKG4pIHtcbiAgICAgICAgICAgICAgICBpZiAobiA8PSBtaW5pbXVtQWN0aXZlTm90ZSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBcIkNhbm5vdCBzZXQgZXF1YWwtdG8gb3IgYmVsb3cgbWluaW11bSBhY3RpdmUgbm90ZVwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBtYXhpbXVtQWN0aXZlTm90ZSA9IG47XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1heGltdW1BY3RpdmVOb3RlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInNldE1pbmltdW1BY3RpdmVOb3RlXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24obikge1xuICAgICAgICAgICAgICAgIGlmIChuID49IG1heGltdW1BY3RpdmVOb3RlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IFwiQ2Fubm90IHNldCBlcXVhbC10byBvciBhYm92ZSBtYXhpbXVtIGFjdGl2ZSBub3RlXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG1pbmltdW1BY3RpdmVOb3RlID0gbjtcbiAgICAgICAgICAgICAgICByZXR1cm4gbWluaW11bUFjdGl2ZU5vdGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn07XG5TeW50aGVzaXNlckJhc2VQbHVnaW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShCYXNlUGx1Z2luLnByb3RvdHlwZSk7XG5TeW50aGVzaXNlckJhc2VQbHVnaW4ucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gU3ludGhlc2lzZXJCYXNlUGx1Z2luO1xuXG5leHBvcnQge1N5bnRoZXNpc2VyQmFzZVBsdWdpbn07XG4iLCIvLyBUaGlzIGRlZmluZXMgYSBtYXN0ZXIgb2JqZWN0IGZvciBob2xkaW5nIGFsbCB0aGUgcGx1Z2lucyBhbmQgY29tbXVuaWNhdGluZ1xuLy8gVGhpcyBvYmplY3Qgd2lsbCBhbHNvIGhhbmRsZSBjcmVhdGlvbiBhbmQgZGVzdHJ1Y3Rpb24gb2YgcGx1Z2luc1xuLypnbG9iYWxzIFByb21pc2UsIGRvY3VtZW50LCBjb25zb2xlLCBMaW5rZWRTdG9yZSwgV29ya2VyLCB3aW5kb3csIFhNTEh0dHBSZXF1ZXN0ICovXG4vKmVzbGludC1lbnYgYnJvd3NlciAqL1xuLyoganNoaW50IGVzdmVyc2lvbjo2ICovXG5cbi8vIExvYWQganNYdHJhY3RcbihmdW5jdGlvbigpIHtcbiAgICBpZiAod2luZG93LmpzWHRyYWN0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdmFyIHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuICAgICAgICBzLnNyYyA9IFwiaHR0cHM6Ly9naXRjZG4ueHl6L3JlcG8vbmlja2ppbGxpbmdzL2pzLXh0cmFjdC9tYXN0ZXIvanNYdHJhY3QuanNcIjtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdLmFwcGVuZENoaWxkKHMpO1xuICAgIH1cbn0pKCk7XG5cbmltcG9ydCB7QmFzZVBsdWdpbn0gZnJvbSAnLi9CYXNlUGx1Z2luJztcbmltcG9ydCB7U3ludGhlc2lzZXJCYXNlUGx1Z2lufSBmcm9tICcuL1N5bnRoZXNpc2VyQmFzZVBsdWdpbic7XG5pbXBvcnQgUGx1Z2luRmFjdG9yeSBmcm9tIFwiLi9GYWN0b3J5L1BsdWdpbkZhY3RvcnlcIjtcblxuZXhwb3J0IHtCYXNlUGx1Z2luLCBTeW50aGVzaXNlckJhc2VQbHVnaW4sIFBsdWdpbkZhY3Rvcnl9O1xuIiwiaW1wb3J0IHtCYXNlUGx1Z2luLCBTeW50aGVzaXNlckJhc2VQbHVnaW4sIFBsdWdpbkZhY3Rvcnl9IGZyb20gXCIuL2luZGV4XCI7XG5cbihmdW5jdGlvbihyb290LCBmYWN0b3J5KSB7XG4gICAgY29uc29sZS5sb2coXCJMb2FkIEpTQVAuLi5cIik7XG4gICAgaWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZGVmaW5lXCIpO1xuICAgICAgICBkZWZpbmUoXCJKU0FQXCIsIFtdLCBmYWN0b3J5KTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBtb2R1bGUgPT0gXCJvYmplY3RcIiAmJiBtb2R1bGUuZXhwb3J0cykge1xuICAgICAgICBjb25zb2xlLmxvZyhcIm1vZHVsZVwiKTtcbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJkaXJlY3RcIik7XG4gICAgICAgIGlmIChyb290ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJvb3QgPSB3aW5kb3c7XG4gICAgICAgIH1cbiAgICAgICAgcm9vdC5KU0FQID0gZmFjdG9yeSgpO1xuICAgIH1cbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xuICAgIGNvbnNvbGUubG9nKFwiZmFjdG9yeVwiKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBQbHVnaW5GYWN0b3J5OiBQbHVnaW5GYWN0b3J5LFxuICAgICAgICBCYXNlUGx1Z2luOiBCYXNlUGx1Z2luLFxuICAgICAgICBTeW50aGVzaXNlckJhc2VQbHVnaW46IFN5bnRoZXNpc2VyQmFzZVBsdWdpblxuICAgIH07XG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=