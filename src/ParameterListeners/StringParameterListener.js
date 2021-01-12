/*jshint esversion: 6 */

function StringParameterListener(owner, channel, parameterName, visibleName, defaultValue, maximumLength) {
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
            "value": maximumLength
        },
        "minimum": {
            "value": 0
        },
        "value": {
            "get": function () {return value;},
            "set": function(v) {
                if (typeof v === "string") {
                    value = v;
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

export default StringParameterListener;
