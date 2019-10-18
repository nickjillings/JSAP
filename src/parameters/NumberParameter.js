/* jshint esversion: 6 */
import {PluginParameter} from "./PluginParameter.js";
import {ParameterLinearAutomation} from "./ParameterAutomation.js";

function NumberParameter(owner, name, defaultValue, minimum, maximum) {
    PluginParameter.call(this, owner, name, "Number");
    var audioParameter, automation;
    var _value = defaultValue,
        _stepSize;

    function addAction(v) {
        var entry = {
            'time': new Date(),
            'value': v
        };
        this.actionList.push(entry);
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
                if (this.boundAudioParam) {
                    return this.translate(this.boundAudioParam.value);
                }
                return _value;
            },
            "set": function (v) {
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
                if (this.boundAudioParam) {
                    this.boundAudioParam.value = this.update(v);
                }
                if (_value !== v) {
                    _value = v;
                    var e = new Event("parameterset");
                    eventTarget.dispatchEvent(e);
                }
                this.trigger();
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
                if (typeof ap == "object" && ap.value) {
                    audioParameter = ap;
                    if (ap.setValueAtTime) {
                        automation = new ParameterLinearAutomation(audioParameter, minimum, maximum);
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
NumberParameter.prototype = Object.create(PluginParameter.prototype);
NumberParameter.prototype.constructor = NumberParameter;

export {NumberParameter};
