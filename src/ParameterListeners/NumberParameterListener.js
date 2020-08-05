/*jshint esversion: 6 */

function NumberParameterListener(owner, channel, parameterName, visibleName, defaultValue, maximum, minimum) {
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
            "value": maximum
        },
        "minimum": {
            "value": minimum
        },
        "value": {
            "get": function () {return value;},
            "set": function(v) {
                if (typeof v === "number") {
                    value = Math.max(minimum, Math.min(maximum, v));
                }
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

export default NumberParameterListener;
