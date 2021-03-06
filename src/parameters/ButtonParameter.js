/* jshint esversion: 6 */
import {PluginParameter} from "./PluginParameter.js";

function ButtonParameter(owner, name) {
    PluginParameter.call(this, owner, name, "Button");
    var onclick = function () {};

    function addAction(v) {
        var entry = {
            'time': new Date(),
            'value': "clicked"
        };
        this.actionList.push(entry);
    }

    Object.defineProperties(this, {
        "type": {
            "value": "Button"
        },
        "destroy": {
            "value": function () {
                owner = name = undefined;
            }
        },
        "onclick": {
            "get": function () {
                return onclick;
            },
            "set": function (f) {
                if (typeof f !== "function") {
                    throw ("onclick must be a function");
                }
                onclick = f;
            }
        }
    });
}
ButtonParameter.prototype = Object.create(PluginParameter.prototype);
ButtonParameter.prototype.constructor = ButtonParameter;

export {ButtonParameter};
