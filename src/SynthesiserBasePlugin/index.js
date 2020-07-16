/* jshint esversion: 6 */
import {BasePlugin} from "../BasePlugin/index";

var SynthesiserBasePlugin = function(factory, owner)
{
    var hasWarnedScheduleNotSet = false;
    var hasWarnedCancelNotSet = false;
    var editorType = "roll";
    var minimumActiveNote = 0;
    var maximumActiveNote = 127;
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
        },
        "setEditorType": {
            "value": function(type) {
                if (type == "roll" || type == "line" || type == "sequencer") {
                    editorType = type;
                }
                return editorType;
            }
        },
        "getEditorType": {
            "value": function() {
                return editorType;
            }
        },
        "getMaximumActiveNote": {
            "value": function () {
                return maximumActiveNote;
            }
        },
        "getMinimumActiveNote": {
            "value": function () {
                return minimumActiveNote;
            }
        },
        "setMaximumActiveNote": {
            "value": function(n) {
                if (n <= minimumActiveNote) {
                    throw "Cannot set equal-to or below minimum active note";
                }
                maximumActiveNote = n;
                return maximumActiveNote;
            }
        },
        "setMinimumActiveNote": {
            "value": function(n) {
                if (n >= maximumActiveNote) {
                    throw "Cannot set equal-to or above maximum active note";
                }
                minimumActiveNote = n;
                return minimumActiveNote;
            }
        }
    });
};
SynthesiserBasePlugin.prototype = Object.create(BasePlugin.prototype);
SynthesiserBasePlugin.prototype.constructor = SynthesiserBasePlugin;

export {SynthesiserBasePlugin};
