import {
    IAutomatedPluginParameter, IParameterAutomation, IParameterAutomationPoint, IParameterAutomationUpdateOptions
} from "./IPluginParameter";

/* jshint esversion: 6 */
class TimePoint < T > implements IParameterAutomationPoint<T> {
    constructor(public readonly owner: TimePointList < T > , private _time: number, private _value: T, private toStringFunc: (v: T) => string) {
        if (typeof this._time != "number" || !isFinite(this._time) || this._time < 0) {
            throw new Error("Invalid Constructor: Time must be a positive number");
        }
        if (typeof this._value != "number" || !isFinite(this._value)) {
            throw new Error("Invalid Constructor: Value must be a number");
        }
    }
    private setValue(v: T) {
        if (typeof v != "number" || !isFinite(v)) {
            throw ("Value must be a number");
        }
        return this._value;
    }
    private setTime(t: number) {
        if (typeof t == "number" && isFinite(t) && t >= 0) {
            this._time = t;
        }
        return this._time;
    }
    public toString() {
        if (typeof this.toStringFunc == "function") {
            return this.toStringFunc(this._value);
        }
        return String(this._value);
    }
    get time() {
        return this.time;
    }
    set time(t: number) {
        this.setTime(t);
    }
    get value() {
        return this.value;
    }
    set value(v: T) {
        this.setValue(v);
    }
}



class TimePointList < T > {
    public readonly minimum: number
    public readonly maximum: number
    protected automationPoints: TimePoint < T > [] = [];
    constructor(min_value: number, max_value: number, private toStringFunc: (v: T) => string) {
        if (typeof min_value != "number" || !isFinite(min_value)) {
            throw ("Invalid Constructor: min_value be a number");
        }
        if (typeof max_value != "number" || !isFinite(max_value)) {
            throw ("Invalid Constructor: max_value be a number");
        }
        if (min_value == max_value) {
            throw ("Invalid Constructor: max_value cannot equal to min_value");
        }
        if (max_value < min_value) {
            throw ("Invalid Constructor: min_value cannot be greater than max_value");
        }
        this.minimum = min_value;
        this.maximum = max_value;
    }
    protected getPointAtTime(time: number) {
        return this.automationPoints.find((p) => {
            p.time == time;
        });
    }
    protected hasPointAtTime(time: number) {
        return this.getPointAtTime(time) !== undefined;
    }
    protected sortPoints() {
        return this.automationPoints.sort(function (a, b) {
            if (a.time > b.time) {
                return 1;
            } else {
                return -1;
            }
        });
    }
    public insertPoint(time: number, value: T) {
        if (typeof time != "number" || !isFinite(time) || time < 0) {
            throw ("Time must be a positive number");
        }
        if (typeof value != "number" || !isFinite(value)) {
            throw ("Value must be a number");
        }
        if (this.hasPointAtTime(time)) {
            throw ("Already a value entry at time " + time);
        }
        var point = new TimePoint < T > (this, time, value, this.toStringFunc);
        this.automationPoints.push(point);
        this.automationPoints = this.sortPoints();
        return point;
    }
    public getPoints(start_time ? : number, end_time ? : number) {
        if (start_time === undefined) {
            start_time = 0;
        }
        if (end_time === undefined) {
            end_time = Infinity;
        }
        return this.automationPoints.filter(function (point) {
            return point.time >= start_time && point.time < end_time;
        });
    }
    public deletePoint(time: number) {
        var index = this.automationPoints.findIndex(function (point) {
            return point.time == time;
        });
        if (index >= 0) {
            this.automationPoints.splice(index, 1);
        }
        return this.automationPoints.length;
    }
    public getStaticValueAsString(value: T) {
        if (this.toStringFunc) {
            return this.toStringFunc(value);
        }
        return String(value);
    }
    public getValueAtTimePoint(time: number) {
        return this.getPointAtTime(time);
    }
    public updatePoint(time: number, options: IParameterAutomationUpdateOptions < T > ) {
        const point = this.automationPoints.find(point => point.time == time);
        if (point) {
            if (typeof options.time == "number" && options.time != point.time) {
                if (this.hasPointAtTime(time)) {
                    throw new Error(`A time-point already exists at ${String(options.time)} seconds`);
                } else {
                    point.time = options.time;
                    this.automationPoints = this.sortPoints();
                }
            }
            point.value = options.value;
        }
        return point;
    }
    get length() {
        return this.automationPoints.length;
    }
}

class ParameterAutomation < T > extends TimePointList < T > {
    private isEnabled = false;
    constructor(protected readonly parameter: AudioParam, min_value: number, max_value: number, toStringFunc: (v: T) => string) {
        super(min_value, max_value, toStringFunc);
    }
    get enabled() {
        return this.isEnabled;
    }
    set enabled(t: boolean) {
        if (this.length > 0) {
            this.isEnabled = (t === true);
        }
    }
}

export class ParameterLinearAutomation extends ParameterAutomation < number > implements IParameterAutomation< number > {
    constructor(public readonly owner: IAutomatedPluginParameter < number > , parameter: AudioParam, min_value: number, max_value: number, toStringFunc: (v: number) => string) {
        super(parameter, min_value, max_value, toStringFunc);
    }
    private linearInterpolation(time: number, pointA: TimePoint < number > , pointB: TimePoint < number > ) {
        let t1 = pointA.time;
        let t2 = pointB.time;
        time -= t1;
        t2 -= t1;
        t1 = 0;

        const p = time / t2;
        return pointA.value * (1 - p) + pointB.value * p;
    }
    public getCurrentTimeValue(time: number) {
        if (this.automationPoints.length == 0) {
            return this.owner.value;
        }
        if (this.automationPoints.length == 1) {
            return this.automationPoints[0].value;
        }

        var firstPoint = this.automationPoints.reduce(function (point, nextPoint) {
            if (nextPoint.time <= time) {
                return nextPoint;
            } else {
                return point;
            }
        }, this.automationPoints[0]);
        var secondPoint = this.automationPoints.find(function (point) {
            return point.time > firstPoint.time;
        });
        if (secondPoint === undefined || firstPoint.time > time) {
            return firstPoint.value;
        }
        return this.linearInterpolation(time, firstPoint, secondPoint);
    }
    public start(time: number, contextTime: number) {
        if (this.enabled) {
            const startPosition = this.owner.update(this.getCurrentTimeValue(time));
            this.parameter.setValueAtTime(startPosition, contextTime);
            this.automationPoints.forEach((p) => {
                if (p.time > time) {
                    const t = p.time - time;
                    const v = this.owner.update(p.value);
                    this.parameter.linearRampToValueAtTime(v, t + contextTime);
                }
            });
        }
    }
    public stop(contextTime: number) {
        if (contextTime === undefined) {
            contextTime = 0;
        }
        this.parameter.cancelScheduledValues(contextTime);
    }
}

export class ParameterStepAutomation < T > extends ParameterAutomation < T > implements IParameterAutomation< T >{
    constructor(public readonly owner: IAutomatedPluginParameter < T > , parameter: AudioParam, min_value: number, max_value: number, toStringFunc: (v: T) => string) {
        super(parameter, min_value, max_value, toStringFunc);
    }
    public getCurrentTimeValue(time: number) {
        if (this.automationPoints.length == 0) {
            throw ("No automation points available");
        }
        if (this.automationPoints.length == 1) {
            return this.automationPoints[0].value;
        }

        const nearestPoint = this.automationPoints.reduce(function (point, nextPoint) {
            if (nextPoint.time <= time) {
                return nextPoint;
            } else {
                return point;
            }
        }, this.automationPoints[0]);
        return nearestPoint.value;
    }

    public start(time: number, contextTime: number) {
        var startPosition = this.owner.update(this.getCurrentTimeValue(time));
        this.parameter.setValueAtTime(startPosition, contextTime);
        this.automationPoints.forEach(p => {
            if (p.time > time) {
                var t = p.time - time;
                var v = this.owner.update(p.value);
                this.parameter.setValueAtTime(v, t + contextTime);
            }
        });
    }
    public stop(contextTime: number) {
        this.parameter.cancelScheduledValues(contextTime);
    }
}