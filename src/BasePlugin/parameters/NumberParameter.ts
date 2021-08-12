/* jshint esversion: 6 */
import {PluginParameter} from "./PluginParameter";
import {ParameterLinearAutomation} from "./ParameterAutomation";
import { IAutomatedPluginParameter } from "./IPluginParameter";
import { IBasePlugin } from "../IBasePlugin";

export class NumberParameter extends PluginParameter < number > implements IAutomatedPluginParameter<number> {
    public readonly type = "Number";
    private audioParameter: AudioParam;
    private automation: ParameterLinearAutomation;
    private _value: number;
    private _stepSize = 0;
    constructor(
        owner: IBasePlugin,
        name: string,
        public readonly defaultValue: number,
        public readonly minimum?: number,
        public readonly maximum?: number,
        public toStringFunc?: (item: number) => string,
        visibleName ? : string,
        exposed = true
    ) {
        super(owner, name, "Number", visibleName, exposed);
        this._value = this.defaultValue;
    }
    public setValue(v: number, updateInterfaces=true) {
        if (this.automation && this.automation.enabled) {
            throw new Error("Automation is enabled, cannot set the value!");
        }
        if (this.minimum) {
            v = Math.max(v, this.minimum);
        }
        if (this.maximum) {
            v = Math.min(v, this.maximum);
        }
        if (this._stepSize > 0) {
            v = Math.round(v / this._stepSize);
            v = v * this._stepSize;
        }
        v = this.update(v);
        if (this.audioParameter) {
            if (this.automation) {
                if (this.owner.factory.context.state == 'suspended') {
                    this.audioParameter.value = v;
                } else {
                    this.audioParameter.setValueAtTime(v, this.owner.factory.context.currentTime);
                }
            } else {
                this.audioParameter.value = v;
            }
        }
        if (this._value !== v) {
            this._value = v;
            this.triggerParameterSet(updateInterfaces);
        }
        this.trigger();
        return this._value;
    }
    public destroy() {

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
    public bindToAudioParam(ap: AudioParam) {
        if (typeof ap == "object" && ap.value != undefined) {
            this.audioParameter = ap;
            this.audioParameter.value = this.update(this._value);
            if (ap.setValueAtTime) {
                this.automation = new ParameterLinearAutomation(this, this.audioParameter, this.minimum, this.maximum, this.toStringFunc);
            } else {
                console.warn("Cannot bind automation as AudioParameter is not automatable");
            }
        } else {
            throw new Error("Argument 1 is not a valid AudioParameter object");
        }
    }
    public toString() {
        const v = this.value;
        if (typeof this.toStringFunc == "function") {
            return this.toStringFunc(v);
        } else {
            return String(v);
        }
    }
    public getParameterObject() {
        return {
            value: this.value,
            defaultValue: this.defaultValue,
            minimum: this.minimum,
            maximum:this.maximum,
            visibleName: this.name,
            type: "NumberParameter",
            name: this.name
        };
    }
    get value() {
        if (this.audioParameter) {
            if (this.automation && this.automation.length > 0) {
                const t = this.owner.factory.getCurrentProgramTime();
                return this.automation.getCurrentTimeValue(t);
            }
            return this.translate(this.audioParameter.value);
        }
        return this._value;
    }
    set value(v: number) {
        this.setValue(v, true);
    }
    get stepSize() {return this._stepSize;}
    set stepSize(n: number) {
        if (!isFinite(n) || n < 0) {
            throw new Error ("Invalid step size");
        }
        this._stepSize = n;
    }
    get boundAudioParam() {return this.audioParameter;}
    get automatable() {return this.automation !== undefined;}
    get automationPoints() {return this.automation;}
    get enabled() {return this.automation?.enabled;}
    set enabled(t: boolean) {
        if (this.automatable) {
            this.automation.enabled = (t === true);
        }
    }
}
