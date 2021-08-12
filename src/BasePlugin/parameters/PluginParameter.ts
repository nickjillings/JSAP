import { IBasePlugin } from "../IBasePlugin";
import {
    IPluginParameter, IPluginParameterObject
} from "./IPluginParameter";

export type PluginParameterDataType = 'Button' | 'String' | 'Number';

export interface PluginParameterSetDetail {
    parameter: IPluginParameterObject,
    updateInterfaces: boolean
}

export class PluginParameter < T > implements IPluginParameter < T > {
    private eventTarget = new EventTarget();
    private _updateFunction = (v) => {
        return v
    };
    private _translateFunction = (v) => {
        return v;
    }
    private _triggerFunction = () => {};
    constructor(public readonly owner: IBasePlugin, private _name: string, dataType: PluginParameterDataType, private _visibleName ? : string, private _exposed = true) {
        var update, translate, trigger;
        var eventTarget = new EventTarget();
        update = translate = function (v) {
            return v;
        };
        trigger = function () {};
    }
    destroy() { }
    setValue(v: T): T {
        throw new Error('Cannot set this parameter');
    }
    toString () {
        return "PluginParameter"
    };
    getParameterObject(): IPluginParameterObject {
        return {
            name: this.name,
            visibleName: this.visibleName,
            type: "PluginParameter"
        }
    }
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options ? : boolean | AddEventListenerOptions) {
        return this.eventTarget.addEventListener(type, listener, options);
    }
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options ? : boolean | EventListenerOptions) {
        return this.eventTarget.removeEventListener(type, listener, options);
    }
    triggerParameterSet(updateInterfaces = true) {
        if (updateInterfaces === undefined) {
            updateInterfaces = true;
        }
        const opts = {
            detail: {
                parameter: this.getParameterObject(),
                updateInterfaces: updateInterfaces
            }
        };
        this.eventTarget.dispatchEvent(new CustomEvent<PluginParameterSetDetail>("parameterset", opts));
    }
    bindToAudioParam(ap: AudioParam) {
        throw ("Cannot bind this parameter type to an audio parameter");
    }
    get boundAudioParam(): AudioParam {
        return undefined;
    }
    get name() {
        return this._name;
    }
    get visibleName() {
        if (this._visibleName !== undefined && this._visibleName.length > 0) {
            return this.visibleName;
        } else {
            return this.name;
        }
    }
    get exposed() {
        return this._exposed;
    }
    set exposed(e: boolean) {
        this._exposed = e === true;
    }
    get update() {
        return this._updateFunction;
    }
    set update(f: (v: T) => number) {
        this._updateFunction = f;
    }
    get translate() {
        return this._translateFunction;
    }
    set translate(f: (v: number) => T) {
        this._translateFunction = f;
    }
    get trigger() {
        return this._triggerFunction;
    }
    set trigger(f: () => void) {
        this._triggerFunction = f;
    }
}
