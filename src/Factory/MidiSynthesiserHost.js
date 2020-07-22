/* jshint esversion: 6 */

import LinkedStore from '../LinkedStore';

export default function MidiSynthesiserHost(factory) {
    var self = this;
    function buildNewSynthesiserObject(prototypeObject) {
        if (midiSynthSlot) {
            factory.deletePlugin(midiSynthSlot.id);
        }
        return new Promise(function(resolve, reject) {
            if (prototypeObject.hasMidiInput == false || prototypeObject.hasMidiOutput == true) {
                reject ("Prototype is not a MidiSynthesis type. hasMidiInput must be true and hasMidiOutput must be false");
            } else {
                resolve(prototypeObject);
            }
        }).then(function() {
            return prototypeObject.createPluginInstance(self, false)
            .then(function(node) {
                Object.defineProperties(node, {
                    'TrackData': {
                        value: self.TrackData
                    }
                });
                return node;
            });
        });
    }

    this.TrackData = new LinkedStore("Track");

    var midiSynthSlot;
    var connections = [];
    Object.defineProperties(this, {
        "connect": {
            "value": function(destinationNode, output, input) {
                if (destinationNode === undefined) {
                    throw ("Must define an AudioNode object");
                }
                var exists = connections.find(function(conn) {
                    return conn.destinationNode == destinationNode && conn.output == output && conn.input == input;
                });
                if (exists) {
                    return;
                } else {
                    connections.push({
                        destinationNode:destinationNode,
                        output:output,
                        input:input
                    });
                }
                if (midiSynthSlot === undefined) {
                    console.warn("MIDI Synthesiser is not loaded, connections will be validated on load");
                } else {
                    midiSynthSlot.node.connect(destinationNode, output, input);
                }
            }
        },
        "disconnect": {
            "value": function(destinationNode, output, input) {
                if (destinationNode === undefined) {
                    if (midiSynthSlot) {
                        midiSynthSlot.disconnect();
                    }
                    connections = [];
                }
                else if (typeof destinationNode == "number" && typeof output == "undefined") {
                    output = destinationNode;
                    destinationNode = undefined;
                    connections = connections.filter(function(conn) {
                        if (conn.output == output) {
                            if (midiSynthSlot) {
                                midiSynthSlot.node.disconnect(conn.destinationNode, conn.output);
                            }
                            return false;
                        } else {
                            return true;
                        }
                    });
                } else if (typeof destinationNode == "object" && typeof output == "undefined") {
                    connections = connections.filter(function(conn) {
                        if (conn.destinationNode == destinationNode) {
                            if (midiSynthSlot) {
                                midiSynthSlot.node.disconnect(conn.destinationNode);
                            }
                            return false;
                        } else {
                            return true;
                        }
                    });
                } else if (typeof destinationNode == "object" && typeof output == "number") {
                    connections = connections.filter(function(conn) {
                        if (conn.destinationNode == destinationNode && conn.output == output) {
                            if (midiSynthSlot) {
                                midiSynthSlot.node.disconnect(conn.destinationNode, conn.output);
                            }
                            return false;
                        } else {
                            return true;
                        }
                    });
                } else if (typeof destinationNode == "object" && typeof output == "number" && typeof input == "number") {
                    connections = connections.filter(function(conn) {
                        if (conn.destinationNode == destinationNode && conn.output == output && conn.input == input) {
                            if (midiSynthSlot) {
                                midiSynthSlot.node.disconnect(conn.destinationNode, conn.output, conn.input);
                            }
                            return false;
                        } else {
                            return true;
                        }
                    });
                }
            }
        },
        "scheduleEvent": {
            "value": function(msg, t) {
                if (midiSynthSlot) {
                    midiSynthSlot.node.scheduleEvent(msg, t);
                } else {
                    throw("MIDI Synthesiser not loaded");
                }
            }
        },
        "cancelAllEvents": {
            "value": function(t) {
                if (midiSynthSlot) {
                    midiSynthSlot.node.cancelAllEvents(t);
                } else {
                    throw("MIDI Synthesiser not loaded");
                }
            }
        },
        "midiSynthesiser": {
            "get": function () {
                return midiSynthSlot;
            },
            "set": function() {
                throw("Cannot set read-only attribute.");
            }
        },
        "loadMidiSynthesiserModule": {
            "value": function(prototype) {
                var self = this;
                return new Promise(function(resolve, reject) {
                    if (prototype.hasMidiInput == false || prototype.hasMidiOutput == true) {
                        reject ("Prototype is not a MidiSynthesis type. hasMidiInput must be true and hasMidiOutput must be false");
                    } else {
                        resolve(prototype);
                    }
                }).then(function(prototypeObject) {
                    return buildNewSynthesiserObject.call(self, prototypeObject).catch(function(e){
                        console.log(e);
                        throw("Plugin did not get created! Aborting");
                    });
                }).then(function(node) {
                    node.node.onloaded.call(node.node);
                    midiSynthSlot = node;
                    connections.forEach(function(conn) {
                        midiSynthSlot.node.connect(conn.destinationNode, conn.output, conn.input);
                    });
                    return midiSynthSlot;
                });
            }
        },
    });
}
