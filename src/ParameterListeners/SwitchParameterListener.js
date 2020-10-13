/*jshint esversion: 6 */

function SwitchParameterListener(owner, channel, parameterName, visibleName, defaultValue, maxState, minState) {
    function onupdate(e) {
        value = e.value;
    }
    var value = defaultValue;
    channel.listenForParameterByName(onupdate, parameterName, true);
    Object.defineProperties(this, {
        "name": {
            "value": visibleName
        },
        "parameterName": {
            "value": parameterName
        },
        "defaultValue": {
            "value": defaultValue
        },
        "maximum": {
            "value": maxState
        },
        "minimum": {
            "value": minState
        },
        "value": {
            "get": function () {return value;},
            "set": function(v) {
                if (typeof v === "number") {
                    value = Math.max(minState, Math.min(maxState, v));
                }
                return value;
            }
        },
        "increment": {
            "value": function () {
                var v = value + 1;
                if (v > maxState) {
                    v = minState;
                }
                value = v;
                return value;
            }
        },
        "decrement": {
            "value": function () {
                var v = value - 1;
                if (v < minState) {
                    v = maxState;
                }
                value = v;
                return value;
            }
        },
        "update": {
            "value": function(value) {
                channel.setParameterByName(parameterName, value);
            }
        }
    });
}

export default SwitchParameterListener;
