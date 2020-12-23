/* jshint esversion: 6 */
import {BasePlugin} from "../BasePlugin/index";

var SynthesiserBasePlugin = function(factory, owner)
{
    var hasWarnedScheduleNotSet = false;
    var hasWarnedCancelNotSet = false;
    var editorType = "roll";
    BasePlugin.call(this, factory, owner);

    this.stop = () => {this.cancelAllEvents();};

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
            "value": function(contextTime) {
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
        "isNoteActive": {
            "value": function(n) {
                if (typeof n == "number" && n >= 0 && n < 128) {
                    return true;
                } else {
                    return false;
                }
            },
            "writable": true
        },
        "getActiveNoteProperties": {
            "value": function() {
                var obj =[];
                for (var n=0; n<128; n++) {
                    obj.push({
                        code: n,
                        name: this.midiNoteToName(n)
                    });
                }
                return obj;
            },
            "writable": true
        },
        'midiNoteToFrequency': {
            'value': function (m) {
                return Math.pow(2.0, (m-69)/12)*440;
            }
        },
        'frequencyToMidiNote': {
            'value': function (f) {
                return Math.round(12.0*Math.log2(f/440))+69;
            }
        },
        'midiNoteToName': {
            'value': function (m) {
                var notes = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"];
                var root = m-21;
                var octave = Math.floor(root/12);
                var note = Math.floor((root+36)%12);
                return notes[note] + String(octave);
            }
        },
        'noteNameToMIDI': {
            'value': function(n) {
                var notes = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"];
                var octave = Number(n.slice(n.length-1));
                var note = notes.indexOf(n.slice(0,n.length-1));
                return octave*12 + note + 21;
            }
        },
    });
};
SynthesiserBasePlugin.prototype = Object.create(BasePlugin.prototype);
SynthesiserBasePlugin.prototype.constructor = SynthesiserBasePlugin;

export {SynthesiserBasePlugin};
