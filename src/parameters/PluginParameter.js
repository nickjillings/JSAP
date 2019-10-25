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

export {PluginParameter};
