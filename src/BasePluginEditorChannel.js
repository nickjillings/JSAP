// jshint esversion: 6

/*
    JSAP Plugin GUI Channel object

    This object helps to abstract the various communication platforms in JSAP
    between the plugin processor (BasePlugin) and the GUI on top.
*/

import EditorParameterManager from "./ParameterListeners/index";

export default function BasePluginEditorChannel() {
    function postMessage(object) {
        if (object === undefined || object.message === undefined) {
            throw("Malformed message object");
        }
        object.sender_id = unique_id;
        hostWindow.postMessage(object, window.location.origin);
    }
    var hostWindow;
    if (window.opener) {
        // We are a popout window
        hostWindow = window.opener;
    } else if (window.parent) {
        hostWindow = window.parent;
    }

    var unique_id = (function (len) {
        function dec2hex (dec) {
            return ('0' + dec.toString(16)).substr(-2);
        }
        var arr = new Uint8Array((len || 40) / 2);
        window.crypto.getRandomValues(arr);
        return Array.from(arr, dec2hex).join('');
    })(32);

    var onparameterListeners = [];
    var onlisteners = [];
    var statelisteners = [];

    window.onmessage = function(e) {
        if (e.source != hostWindow) {
            return;
        }
        if (e.data.sender_id == unique_id) {
            return;
        }
        var customEvent;
        switch(e.data.message) {
            case "updateParameters":
                customEvent = new CustomEvent("parametersChanged", {detail: e.data});
                break;
            case "updateState":
                customEvent = new CustomEvent("updateState", {detail: e.data});
                break;
            default:
                return;
        }
        window.dispatchEvent(customEvent);
    };

    window.addEventListener("parametersChanged", function(e) {
        if (e.detail.parameters) {
            Object.keys(e.detail.parameters).forEach(function(name) {
                var listeners = onparameterListeners.filter(function(l) {
                    return l.name.toLowerCase() == name.toLowerCase() || l.name === undefined;
                });
                listeners.forEach(function(l) {
                    l.callback(e.detail.parameters[name]);
                });
            });
            onlisteners.forEach(function(callback) {
                callback(e.detail.parameters);
            });
        }
    });

    window.addEventListener("updateState", function(e) {
        statelisteners.filter(function(listener) {
            return (listener.level == e.detail.level) && (listener.term == e.detail.term);
        }).forEach(function(listener) {
            listener.callback(e.detail.value);
        });
    });

    this.parameterListenerManager = new EditorParameterManager(this);

    Object.defineProperties(this, {
        "pluginInstance": {
            "get": function() {
                return window.pluginInstance;
            }
        },
        "setParameterByName": {
            "value": function(name, value) {
                if (typeof name != "string") {
                    throw ("Expects parameter name to be a string");
                }
                postMessage({
                    message: "setParameterByName",
                    parameter: {
                        name: name,
                        value: value
                    }
                });
            }
        },
        "setParameterByObject": {
            "value": function(object) {
                postMessage({
                    message: "setParameterByObject",
                    parameters: object
                });
            }
        },
        "requestParameters": {
            "value": function () {
                postMessage({
                    message: "requestParameters"
                });
            }
        },
        "requestParameterByName": {
            "value": function (name) {
                if (typeof name == "string") {
                    postMessage({
                        message: "requestParameters",
                        name: name
                    });
                } else {
                    throw("Name not set");
                }

            }
        },
        "listenForParameterByName": {
            "value": function(callback, name, triggerRequest) {
                if (callback === undefined || typeof callback != "function") {
                    throw("Callback must be a defined function");
                }
                onparameterListeners.push({
                    name: name,
                    callback: callback
                });
                if (triggerRequest !== false) {
                    postMessage({
                        message: "requestParameters",
                        name: name
                    });
                }
                return onparameterListeners.length;
            }
        },
        "listenForParameters": {
            "value": function(callback, triggerRequest) {
                if (callback === undefined || typeof callback != "function") {
                    throw("Callback must be a defined function");
                }
                onlisteners.push(callback);
                if (triggerRequest !== false) {
                    postMessage({
                        message: "requestParameters"
                    });
                }
                return onlisteners.length;
            }
        },
        "listenForState": {
            "value": function(callback, level, term, triggerRequest) {
                if (callback === undefined || typeof callback != "function") {
                    throw("Callback must be a defined function");
                }
                if (level != "session" && level != "track" && level != "user" && level != "plugin") {
                    throw "Invalid state level given: "+String(level);
                }
                statelisteners.push({
                    level: level,
                    term: term,
                    callback: callback
                });
                if (triggerRequest !== false) {
                    this.requestState(level, term);
                }
                return statelisteners.length;
            }
        },
        "requestState": {
            "value": function (level, term) {
                var message = "request" + level.charAt(0).toUpperCase() + level.slice(1) + "State";
                if (typeof name == "string") {
                    postMessage({
                        message: message,
                        term: term
                    });
                } else {
                    throw("Name not set");
                }

            }
        },
        "sendCustomEvent": {
            "value": function(type, payload) {
                postMessage({
                    message: "customMessage",
                    detail: {
                        type: type,
                        payload: payload
                    }
                });
            }
        }
    });
}
