/* jshint esversion: 6 */

import { AudioPlugin } from "../BasePlugin/AudioPlugin";
import { AudioPluginChainManager } from "./AudioPluginChainManager/index";
import { IPluginHost } from "./IPluginHost";
import { IPluginInstance } from "./IPluginInstance";

/* jshint esversion: 6 */
export class PluginInstance implements IPluginInstance<AudioPluginChainManager> {
    private next_node: PluginInstance
    private _bypassed = false;
    private ev = new EventTarget();
    private _in = this.node.context.createGain();
    private _out = this.node.context.createGain();
    constructor(public readonly node: AudioPlugin) {
        this._in.connect(this.node.getInputs()[0]);
        this.node.getOutputs()[0].connect(this._out);
        this.node.addEventListener("parameterset", this);
        this.node.addEventListener("alterdelay", this);
    }
    private bypassEnable() {
        this._in.disconnect();
        this._in.connect(this._out);
        this.node.getOutputs()[0].disconnect(this._out);
        this._bypassed = true;
        if (this.node.processingDelayAsSamples != 0) {
            this.ev.dispatchEvent(new Event("alterdelay"));
        }
        this.ev.dispatchEvent(new Event("bypassed"));
    }
    private bypassDisable() {
        this._in.disconnect();
        this._in.connect(this.node.getInputs()[0]);
        this.node.getOutputs()[0].connect(this._out);
        this._bypassed = false;
        if (this.node.processingDelayAsSamples != 0) {
            this.ev.dispatchEvent(new Event("alterdelay"));
        }
        this.ev.dispatchEvent(new Event("bypassed"));
    }
    public bypass(state: boolean) {
        state = (state === true);
        if (state === this._bypassed) {
            return this._bypassed;
        }
        if (state) {
            this.bypassEnable();
        } else {
            this.bypassDisable();
        }
        return this._bypassed;
    }
    public isBypassed() {
        return this._bypassed;
    }
    public reconnect(new_next?: PluginInstance) {
        this.connect(new_next);
    }
    public connect(new_next?: PluginInstance) {
        if (this.next_node !== undefined) {
            this.disconnect();
        }
        if (new_next !== undefined && new_next.input !== undefined) {
            this.next_node = new_next;
            this._out.connect(this.next_node.input);
            return true;
        }
        return false;
    }
    public disconnect() {
        if (this.next_node !== undefined) {
            this._out.disconnect(this.next_node.input);
            this.next_node = undefined;
        }
    }
    public destroy() {
        this.node.destroy();
        this.node.removeEventListener("parameterset", this);
        this.node.removeEventListener("alterdelay", this);
    }
    public handleEvent(e: Event) {
        this.ev.dispatchEvent(new Event(e.type));
    }
    public addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions) {
        return this.ev.addEventListener(type, listener, options);
    }
    public removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions) {
        return this.ev.removeEventListener(type, listener, options);
    }
    get input() {return this._in;}
    get output() {return this._out;}
    get bypassed() {return this._bypassed;}
    get prototypeObject() {return this.node.prototypeObject;}
    get externalInterface() {return this.node.externalInterface;}
}

export function isPluginInstance(object: IPluginInstance<IPluginHost>): object is PluginInstance {
    return object.node instanceof AudioPlugin;
}
