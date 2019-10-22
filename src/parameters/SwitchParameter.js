/* jshint esversion: 6 */
import {PluginParameter} from "./PluginParameter.js";
import {ParameterStepAutomation} from "./ParameterAutomation.js";

function SwitchParameter(owner, name, defaultValue, minState, maxState) {
    PluginParameter.call(this, owner, name, "Button");
    var onclick = function () {};
    var _value = defaultValue;
    var audioParameter;

    function setV(v) {
        if (this.boundAudioParam) {
            this.boundAudioParam.value = this.update(v);
        }
        if (_value !== v) {
            _value = v;
            this.triggerParameterSet();
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
                if (v < minState) {
                    throw ("Set value is less than " + minState);
                }
                if (v > maxState) {
                    throw ("Set value is greater than " + maxState);
                }
                return setV.call(this, v);
            }
        },
        "increment": {
            "value": function () {
                var v = _value + 1;
                if (v > maxState) {
                    v = minState;
                }
                return setV.call(this, v);
            }
        },
        "decrement": {
            "value": function () {
                var v = _value - 1;
                if (v < minState) {
                    v = maxState;
                }
                return setV.call(this, v);
            }
        },
        "bindToAudioParam": {
            "value": function (ap) {
                if (typeof ap == "object" && ap.value != undefined) {
                    audioParameter = ap;
                    if (ap.setValueAtTime) {
                        automation = new ParameterStepAutomation(this, audioParameter, minState, maxState);
                        Object.defineProperties(this, {
                            "getCurrentTimeValue": {
                                "value": function(time) {
                                    return automation.getCurrentTimeValue(time);
                                }
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
        "automation": {
            "get": function () {
                return automation;
            }
        }
    });
}
SwitchParameter.prototype = Object.create(PluginParameter.prototype);
SwitchParameter.prototype.constructor = SwitchParameter;

export {SwitchParameter};
