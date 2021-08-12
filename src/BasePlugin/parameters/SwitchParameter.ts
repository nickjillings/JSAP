/* jshint esversion: 6 */
import {PluginParameter} from "./PluginParameter";
import {ParameterStepAutomation} from "./ParameterAutomation";
import { IAutomatedPluginParameter } from "./IPluginParameter";
import { IBasePlugin } from "../IBasePlugin";

export class SwitchParameter  extends PluginParameter < number > implements IAutomatedPluginParameter<number> {
    public readonly type = "Switch";
    private _value: number;
    private audioParameter: AudioParam;
    private automation: ParameterStepAutomation<number>;
    constructor(
        owner: IBasePlugin,
        name: string,
        public readonly defaultValue: number,
        public readonly minState: number,
        public readonly maxState: number,
        public toStringFunc?: (item: number) => string,
        visibleName ? : string,
        exposed = true
    ) {
        super(owner, name, "Number", visibleName, exposed);
        this._value = this.defaultValue;
    }

    public setValue(v:number, updateInterfaces=true) {
        if (v < this.minState) {
            throw new Error("Set value is less than " + this.minState);
        }
        if (v > this.maxState) {
            throw new Error("Set value is greater than " + this.maxState);
        }
        if (this.audioParameter) {
            this.audioParameter.value = this.update(v);
        }
        if (this._value !== v) {
            this._value = v;
            this.triggerParameterSet(updateInterfaces);
        }
        this.trigger();
        return v;
    }

    public destroy () { }

    public increment() {
        let v = this._value - 1;
        if (v < this.minState) {
            v = this.maxState;
        }
        return this.setValue(v);
    }

    public decrement() {
        let v = this._value - 1;
        if (v < this.minState) {
            v = this.maxState;
        }
        return this.setValue(v);
    }

    public bindToAudioParam(ap) {
        if (typeof ap == "object" && ap.value != undefined) {
            this.audioParameter = ap;
            this.audioParameter.value = this.update(this._value);
            if (ap.setValueAtTime) {
                this.automation = new ParameterStepAutomation(this, this.audioParameter, this.minState, this.maxState, this.toStringFunc);
            } else {
                console.warn("Cannot bind automation as AudioParameter is not automatable");
            }
        } else {
            throw new Error("Argument 1 is not a valid AudioParameter object");
        }
    }

    public toString() {
        const v = this._value;
        if (typeof this.toStringFunc == "function") {
            return this.toStringFunc.call(this, v);
        } else {
            return String(v);
        }
    }
    public getParameterObject() {
        return {
            value: this.value,
            defaultValue: this.defaultValue,
            minimum: this.minState,
            maximum: this.maxState,
            visibleName: this.name,
            type: "SwitchParameter",
            name: this.name
        };
    }

    get value() {
        if (this.audioParameter) {
            return this.translate(this.audioParameter.value);
        }
        return this._value;
    }
    set value(v: number) { this.setValue(v, true);}
    get boundAudioParam() {return this.audioParameter;}
    get automatable() {return this.automation !== undefined;}
    get automationPoints() {return this.automation;}
    get enabled() {return this.automation?.enabled;}
    set enabled(t: boolean) {
        if (this.automatable) {
            this.automation.enabled = (t === true);
        }
    }
    public getValueAtTimePoint(time: number) {
        return this.automation.getValueAtTimePoint(time);
    }
    public start(time: number, contextTime: number) {
        this.automation.start(time, contextTime);
    }
    public stop(time: number) {
        this.automation.stop(time);
    }
}
