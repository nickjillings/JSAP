/* jshint esversion: 6 */

import { LinkedStore } from '../LinkedStore';
import { IPluginHost } from './IPluginHost';
import { MidiSynthesisInstance } from './MidiSynthesisInstance';
import { PluginFactory } from './PluginFactory';
import { SynthesiserPrototype } from './PluginPrototype';

interface IMidiSynthesiserConnections {
    destinationNode: AudioNode,
    output: number,
    input: number
}

export class MidiSynthesiserHost implements IPluginHost {
    private ev = new EventTarget();
    private midiSynthSlot: MidiSynthesisInstance;
    private connections: IMidiSynthesiserConnections[] = [];
    public readonly SessionData = this.factory.SessionData;
    public readonly UserData = this.factory.UserData;
    public readonly TrackData = new LinkedStore("Track");
    constructor (public readonly factory: PluginFactory) {

    }
    public unloadSynthesiserSlot() {
        if (this.midiSynthSlot) {
            this.midiSynthSlot.node.cancelAllEvents(this.factory.context.currentTime);
            this.midiSynthSlot.node.disconnect();
            this.midiSynthSlot = undefined;
        }
    }
    private async buildNewSynthesiserObject(prototypeObject: SynthesiserPrototype): Promise<MidiSynthesisInstance> {
        this.unloadSynthesiserSlot();
        this.factory.deletePlugin(this.midiSynthSlot);
        if (prototypeObject.hasMidiInput == false || prototypeObject.hasMidiOutput == true) {
            throw new Error ("Prototype is not a MidiSynthesis type. hasMidiInput must be true and hasMidiOutput must be false");
        }
        const node = await prototypeObject.createPluginInstance(this);
        return node;
    }
    public addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions) {
        return this.ev.addEventListener(type, listener, options);
    }
    public removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions) {
        return this.ev.removeEventListener(type, listener, options);
    }
    public connect(destinationNode: AudioNode, output?: number, input?: number) {
        if (destinationNode === undefined) {
            throw ("Must define an AudioNode object");
        }
        const exists = this.connections.find((conn) => {
            return conn.destinationNode == destinationNode && conn.output == output && conn.input == input;
        });
        if (exists) {
            return;
        } else {
            this.connections.push({
                destinationNode:destinationNode,
                output:output,
                input:input
            });
        }
        if (this.midiSynthSlot === undefined) {
            console.warn("MIDI Synthesiser is not loaded, connections will be validated on load");
        } else {
            this.midiSynthSlot.node.connect(destinationNode, output, input);
        }
    }
    public disconnect(destinationNode: AudioNode, output?: number, input?: number) {
        if (destinationNode === undefined) {
            if (this.midiSynthSlot) {
                this.midiSynthSlot.node.disconnect();
            }
            this.connections = [];
        }
        else if (typeof destinationNode == "number" && typeof output == "undefined") {
            output = destinationNode;
            destinationNode = undefined;
            this.connections = this.connections.filter(function(conn) {
                if (conn.output == output) {
                    if (this.midiSynthSlot) {
                        this.midiSynthSlot.node.disconnect(conn.destinationNode, conn.output);
                    }
                    return false;
                } else {
                    return true;
                }
            });
        } else if (typeof destinationNode == "object" && typeof output == "undefined") {
            this.connections = this.connections.filter(function(conn) {
                if (conn.destinationNode == destinationNode) {
                    if (this.midiSynthSlot) {
                        this.midiSynthSlot.node.disconnect(conn.destinationNode);
                    }
                    return false;
                } else {
                    return true;
                }
            });
        } else if (typeof destinationNode == "object" && typeof output == "number") {
            this.connections = this.connections.filter(function(conn) {
                if (conn.destinationNode == destinationNode && conn.output == output) {
                    if (this.midiSynthSlot) {
                        this.midiSynthSlot.node.disconnect(conn.destinationNode, conn.output);
                    }
                    return false;
                } else {
                    return true;
                }
            });
        } else if (typeof destinationNode == "object" && typeof output == "number" && typeof input == "number") {
            this.connections = this.connections.filter(function(conn) {
                if (conn.destinationNode == destinationNode && conn.output == output && conn.input == input) {
                    if (this.midiSynthSlot) {
                        this.midiSynthSlot.node.disconnect(conn.destinationNode, conn.output, conn.input);
                    }
                    return false;
                } else {
                    return true;
                }
            });
        }
    }
    public scheduleEvent(msg: [number, number, number?], t: number) {
        if (this.midiSynthSlot) {
            this.midiSynthSlot.node.scheduleEvent(msg, t);
        } else {
            throw("MIDI Synthesiser not loaded");
        }
    }
    public cancelAllEvents(t?: number) {
        if (this.midiSynthSlot) {
            this.midiSynthSlot.node.cancelAllEvents(t);
        } else {
            throw("MIDI Synthesiser not loaded");
        }
    }
    public start() {
        if (this.midiSynthSlot) {
            this.midiSynthSlot.node.start();
        } else {
            throw("MIDI Synthesiser not loaded");
        }
    }
    public stop() {
        if (this.midiSynthSlot) {
            this.midiSynthSlot.node.stop();
        } else {
            throw("MIDI Synthesiser not loaded");
        }
    }
    public async loadMidiSynthesiserModule(prototype: SynthesiserPrototype): Promise<MidiSynthesisInstance> {
        if (prototype.hasMidiInput == false || prototype.hasMidiOutput == true) {
            throw new Error ("Prototype is not a MidiSynthesis type. hasMidiInput must be true and hasMidiOutput must be false");
        }
        let node: MidiSynthesisInstance;
        try {
            node = await this.buildNewSynthesiserObject(prototype)
        }catch (e) {
            console.log(e);
            throw new Error ("Plugin did not get created! Aborting");
        };
        node.node.onloaded.call(node.node);
        this.midiSynthSlot = node;
        this.connections.forEach(function(conn) {
            this.midiSynthSlot.node.connect(conn.destinationNode, conn.output, conn.input);
        });
        this.ev.dispatchEvent(new Event("loaded"));
        return this.midiSynthSlot;
    }
    public destroy() {
        this.unloadSynthesiserSlot();
        this.connections = undefined;
    }
    get midiSynthesiser() {return this.midiSynthSlot; }

}
