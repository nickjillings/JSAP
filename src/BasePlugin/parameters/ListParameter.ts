/* jshint esversion: 6 */
import {
    PluginParameter
} from "./PluginParameter";
import {
    ParameterStepAutomation
} from "./ParameterAutomation";
import {
    IAutomatedPluginParameter
} from "./IPluginParameter";
import { IBasePlugin } from "../IBasePlugin";
import { IPluginHost } from "../../Factory/IPluginHost";

export class ListParameter < T > extends PluginParameter < T > implements IAutomatedPluginParameter < T > {
    private audioParameter: AudioParam;
    private automation: ParameterStepAutomation<T>
    private listIndex: number;
    constructor(owner: IBasePlugin, name: string, private _defaultValue: T, private listOfValues: T[], public toStringFunc?: (item: T) => string, visibleName ? : string, exposed = true) {
        super(owner, name, "Button", visibleName, exposed);
        this.listIndex = listOfValues.indexOf(_defaultValue);
    }
    private setV(v: T, updateInterfaces = true) {
        const i = this.listOfValues.indexOf(v);
        if (i === undefined || i < 0) {
            throw ("Not in list range");
        }
        if (this.boundAudioParam) {
            this.boundAudioParam.value = this.update(v);
        }
        if (this.listIndex !== i) {
            this.listIndex = i;
            this.triggerParameterSet(updateInterfaces);
        }
        this.trigger();
        return this.listOfValues[this.listIndex];
    }
    private isAutomatable() {
        if (!this.automatable) {
            throw new Error(`${this.type} is not automatable`);
        }
        return true;
    }
    public destroy() {

    }
    public setValue(v: T) {
        this.setV(v, true);
        return this.value;
    }
    public increment() {
        var v = this.listIndex + 1;
        if (v >= this.listOfValues.length) {
            v = 0;
        }
        return this.setValue(this.listOfValues[this.listIndex]);
    }
    public decrement() {
        var v = this.listIndex - 1;
        if (v < 0) {
            v = this.listOfValues.length - 1;
        }
        return this.setValue(this.listOfValues[this.listIndex]);
    }
    public addOptionToList(t: T) {
        if (this.listOfValues.includes(t) === false) {
            this.listOfValues.push(t);
        }
        return this.listOfValues;
    }
    public deleteOptionFromList(t: T) {
        const index = this.listOfValues.indexOf(t);
        const _value = this.listOfValues[this.listIndex];
        if (index == -1) {
            return;
        }
        const removedValue = this.listOfValues.splice(index, 1);
        if (_value === removedValue[0]) {
            this.listIndex = this.listIndex % this.listOfValues.length;
        } else {
            this.listIndex = this.listOfValues.indexOf(_value);
        }
        return this.listOfValues;
    }
    public toString() {
        const v = this.value;
        if (typeof this.toStringFunc == "function") {
            return this.toStringFunc(v);
        } else if (typeof v.toString == "function") {
            return v.toString();
        } else {
            return String(v);
        }
    }
    public getParameterObject() {
        return {
            value: this.value,
            options: this.listOfValues,
            defaultValue: this._defaultValue,
            minimum: 0,
            maximum: this.listOfValues.length,
            visibleName: this.name,
            type: "ListParameter",
            name: this.name
        };
    }
    public getValueAtTimePoint(time: number) {
        if (this.isAutomatable()) {
            return this.automation.getValueAtTimePoint(time);
        }
    }
    public start(time: number, contextTime: number) {
        if (this.isAutomatable()) {
            return this.automation.start(time, contextTime);
        }
    }
    public stop(contextTime: number) {
        if (this.isAutomatable()) {
            return this.automation.stop(contextTime);
        }
    }
    public bindToAudioParam(ap: AudioParam) {
        if (ap instanceof AudioParam) {
            this.audioParameter = ap;
            this.audioParameter.value = this.update(this.listOfValues[this.listIndex]);
            if (ap.setValueAtTime) {
                this.automation = new ParameterStepAutomation<T>(this, this.audioParameter, 0, this.listValues.length, this.toStringFunc);
            } else {
                console.warn("Cannot bind automation as AudioParameter is not automatable");
            }
        } else {
            throw ("Argument 1 is not a valid AudioParameter object");
        }
    }
    get type() {
        return "List"
    }
    get defaultValue() {
        return this._defaultValue;
    }
    get listValues() {
        return this.listOfValues;
    }
    get value() {
        if (this.audioParameter) {
            return this.translate(this.audioParameter.value);
        }
        return this.listOfValues[this.listIndex];
    }
    set value(v: T) {
        this.setValue(v);
    }
    get boundAudioParam() {
        return this.audioParameter;
    }
    get automatable() {
        return this.automation !== undefined;
    }
    get automationPoints() {
        return this.automation;
    }
    get enabled() {
        return this.automation.enabled;
    }
    set enabled(e: boolean) {
        this.automation.enabled = (e === true);
    }
}
