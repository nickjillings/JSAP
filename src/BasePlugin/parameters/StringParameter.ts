/* jshint esversion: 6 */
import { IBasePlugin } from "../IBasePlugin";
import {PluginParameter} from "./PluginParameter";

export class StringParameter extends PluginParameter <string> {
    public readonly type = "String";
    private _value: string;
    private audioParameter: AudioParam;
    constructor(
        owner: IBasePlugin,
        name: string,
        public readonly defaultValue: string,
        public readonly maxLength?: number,
        public toStringFunc?: (item: string) => string,
        visibleName ? : string,
        exposed = true
    ) {
        super(owner, name, "String", visibleName, exposed);
        this._value = defaultValue;
    }
    public setValue(v: string|any, updateInterfaces=true) {
        let newValue: string;
        if (typeof v === "string") {
            newValue = v;
        } else {
            newValue = JSON.stringify(v);
        }
        if (this.maxLength && newValue.length > this.maxLength) {
            throw new Error(`String longer than ${this.maxLength} characters`);
        }
        if (this.boundAudioParam) {
            this.boundAudioParam.value = this.update(v);
        }
        if (this._value !== v) {
            this._value = v;
            this.triggerParameterSet(updateInterfaces);
        }
        this.trigger();
        return this._value;
    }
    public destroy() { }
    public bindToAudioParam(ap: AudioParam) {
        if (typeof ap == "object" && ap.value != undefined) {
            this.audioParameter = ap;
            this.audioParameter.value = this.update(this._value);
        } else {
            throw new Error("Argument 1 is not a valid AudioParameter object");
        }
    }
    public toString() {
        const v = this._value;
        if (typeof this.toStringFunc == "function") {
            return this.toStringFunc.call(this, v);
        } else {
            return v;
        }
    }
    public getParameterObject() {
        return {
            value: this.value,
            defaultValue: this.defaultValue,
            maxLength: this.maxLength,
            visibleName: this.name,
            type: "StringParameter",
            name: this.name
        };
    }
    get value() {
        if (this.boundAudioParam) {
            return this.translate(this.boundAudioParam.value);
        }
        return this._value;
    }
    set value(t: string) {this.setValue(t, true);}
    get boundAudioParam() {return this.audioParameter;}
}