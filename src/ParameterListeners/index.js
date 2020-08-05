/*jshint esversion: 6 */
import NumberParameterListener from "./NumberParameterListener";
import ListParameterListener from "./ListParameterListener";
import StringParameterListener from "./StringParameterListener";
import SwitchParameterListener from "./SwitchParameterListener";
function EditorParameterManager(channel) {

    var parameters = [];

    Object.defineProperties(this,
    {
        "createNumberParameterListener": {
            "value": function(parameterName, visibleName, defaultValue, maximum, minimum) {
                var node = new NumberParameterListener(this, channel, parameterName, visibleName, defaultValue, maximum, minimum);
                parameters.push(node);
                return node;
            }
        },
        "createListParameterListener": {
            "value": function(parameterName, visibleName, defaultValue, listValues) {
                var node = new ListParameterListener(this, channel, parameterName, visibleName, defaultValue, listValues);
                parameters.push(node);
                return node;
            }
        },
        "createStringParameterListener": {
            "value": function(parameterName, visibleName, defaultValue) {
                var node = new StringParameterListener(this, channel, parameterName, visibleName, defaultValue);
                parameters.push(node);
                return node;
            }
        },
        "createSwitchParameterListener": {
            "value": function(parameterName, visibleName, defaultValue, maxState, minState) {
                var node = new SwitchParameterListener(this, channel, parameterName, visibleName, defaultValue, maxState, minState);
                parameters.push(node);
                return node;
            }
        }
    });

}

export default EditorParameterManager;
