/* jshint esversion: 6 */
import {BasePlugin} from "./base_plugin";

var SynthesiserBasePlugin = function(factory, owner)
{
    var hasWarnedScheduleNotSet = false;
    var hasWarnedCancelNotSet = false;
    BasePlugin.call(this, factory, owner);

    Object.defineProperties(this, {
        "addInput": {
            "value": function() {
                throw("Cannot add input to type \"SynthesiserBasePlugin\"");
            }
        },
        "deleteInput": {
            "value": function() {
                throw("Cannot delete input to type \"SynthesiserBasePlugin\"");
            }
        },
        "scheduleEvent": {
            "value": function (msg, contextTime) {
                if (!hasWarnedScheduleNotSet) {
                    console.warning("WARNING - .scheduleEvent is not overridden");
                    hasWarnedScheduleNotSet = true;
                }
            },
            "writable": true
        },
        "cancelAllEvents": {
            "value": function() {
                if (!hasWarnedCancelNotSet) {
                    console.warning("WARNING - .cancelAllEvents is not overridden");
                    hasWarnedCancelNotSet = true;
                }
            },
            "writable": true
        }
    });
};
SynthesiserBasePlugin.prototype = Object.create(BasePlugin.prototype);
SynthesiserBasePlugin.prototype.constructor = SynthesiserBasePlugin;

export {SynthesiserBasePlugin};
