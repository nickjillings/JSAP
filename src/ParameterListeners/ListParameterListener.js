/*jshint esversion: 6 */

function ListParameterListener(owner, channel, parameterName, visibleName, defaultValue, listValues) {
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
        "value": {
            "get": function () {return value;},
            "set": function(v) {
                if (listValues.includes(v)) {
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

export default ListParameterListener;
