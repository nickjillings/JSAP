/* jshint esversion: 6 */
import {NumberParameter} from "./parameters/NumberParameter.js";
import {StringParameter} from "./parameters/StringParameter.js";
import {ButtonParameter} from "./parameters/ButtonParameter.js";
import {SwitchParameter} from "./parameters/SwitchParameter.js";
import {ListParameter} from "./parameters/ListParameter.js";
import {URLParameter} from "./parameters/URLParameter.js";
import {AssetParameter} from "./parameters/AssetParameter.js";

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
        if (param.hasOwnProperty("getParameterByName") && name.length > 0) {
            return param.getParameterByName(name.reverse().join("."));
        } else {
            return param;
        }
        // return name.split(".").reduce(function(base, name) {
        //     return base[name] || base[name.toLowerCase()];
        // }, self);
    }

    function formatParameterName(name) {
        name = name.toLowerCase();
        name = name.replace("/", "_");
        return name;
    }

    function isParameterNameAvailable(self, name) {
        name = formatParameterName(name);
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
                name = formatParameterName(name);
                if (isParameterNameAvailable(this, name)) {
                    var param = new NumberParameter(owner, name, defaultValue, minimum, maximum, toStringFunc, visibleName, exposed);
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
                name = formatParameterName(name);
                if (isParameterNameAvailable(this, name)) {
                    var param = new StringParameter(owner, name, defaultValue, maxLength, toStringFunc, visibleName, exposed);
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
                name = formatParameterName(name);
                if (isParameterNameAvailable(this, name)) {
                    var param = new ButtonParameter(owner, name);
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
                name = formatParameterName(name);
                if (isParameterNameAvailable(this, name)) {
                    var param = new SwitchParameter(owner, name, defaultValue, minState, maxState, toStringFunc, visibleName, exposed);
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
                name = formatParameterName(name);
                if (isParameterNameAvailable(this, name)) {
                    var param = new ListParameter(owner, name, defaultValue, listOfValues, toStringFunc, visibleName, exposed);
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
                name = formatParameterName(name);
                if (isParameterNameAvailable(this, name)) {
                    var param = new URLParameter(owner, name, defaultValue, maxLength, toStringFunc, visibleName, exposed);
                    addParameter(param, this);
                    param.addEventListener("parameterset", this);
                    return param;
                }
            }
        },
        'createAssetParameter': {
            "value": function (name, visibleName, exposed) {
                if (typeof name !== "string") {
                    throw ("Invlid constructor");
                }
                name = formatParameterName(name);
                if (isParameterNameAvailable(this, name)) {
                    var param = new AssetParameter(owner, name, visibleName, exposed);
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
                            let parameter = findParameter(this, key);
                            if (parameter.hasOwnProperty("setParameterByName")) {
                                // Nested Parameter store
                                parameter.setParametersByObject(object[key], updateInterfaces);
                            }
                            else if (object[key].hasOwnProperty("value")) {
                                this.setParameterByName(key, object[key].value, updateInterfaces);
                            }
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

export {ParameterManager};
