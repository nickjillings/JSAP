// jshint esversion: 6

/*
    JSAP Plugin GUI Channel object

    This object helps to abstract the various communication platforms in JSAP
    between the plugin processor (BasePlugin) and the GUI on top.
*/

var BasePluginEditorChannel = function() {
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

    window.onmessage = function(e) {
        if (e.source != hostWindow) {
            throw ("Message did not come from our dear plugin hoster!");
        }
        if (e.data.sender_id == unique_id) {
            return;
        }
        var customEvent;
        switch(e.data.message) {
            case "updateParameters":
                customEvent = new CustomEvent("parametersChanged", {detail: e.data});
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
                    return l.name == name || l.name === undefined;
                });
                listeners.forEach(function(l) {
                    l.callback(e.detail.parameters[name]);
                });
            });
        }
    });

    Object.defineProperties(this, {
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
                        message: "requestParameters"
                    });
                }
                return onparameterListeners.length;
            }
        }
    });
};
