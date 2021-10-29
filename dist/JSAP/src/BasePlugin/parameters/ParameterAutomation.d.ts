import { IAutomatedPluginParameter, IParameterAutomation, IParameterAutomationPoint, IParameterAutomationUpdateOptions } from "./IPluginParameter";
declare class TimePoint<T> implements IParameterAutomationPoint<T> {
    readonly owner: TimePointList<T>;
    private _time;
    private _value;
    private toStringFunc;
    constructor(owner: TimePointList<T>, _time: number, _value: T, toStringFunc: (v: T) => string);
    private setValue;
    private setTime;
    toString(): string;
    get time(): number;
    set time(t: number);
    get value(): T;
    set value(v: T);
}
declare class TimePointList<T> {
    private toStringFunc;
    readonly minimum: number;
    readonly maximum: number;
    protected automationPoints: TimePoint<T>[];
    constructor(min_value: number, max_value: number, toStringFunc: (v: T) => string);
    protected getPointAtTime(time: number): any;
    protected hasPointAtTime(time: number): any;
    protected sortPoints(): TimePoint<T>[];
    insertPoint(time: number, value: T): TimePoint<T>;
    getPoints(start_time?: number, end_time?: number): TimePoint<T>[];
    deletePoint(time: number): number;
    getStaticValueAsString(value: T): string;
    getValueAtTimePoint(time: number): any;
    updatePoint(time: number, options: IParameterAutomationUpdateOptions<T>): TimePoint<T>;
    get length(): number;
}
declare class ParameterAutomation<T> extends TimePointList<T> {
    protected readonly parameter: AudioParam;
    private isEnabled;
    constructor(parameter: AudioParam, min_value: number, max_value: number, toStringFunc: (v: T) => string);
    get enabled(): boolean;
    set enabled(t: boolean);
}
export declare class ParameterLinearAutomation extends ParameterAutomation<number> implements IParameterAutomation<number> {
    readonly owner: IAutomatedPluginParameter<number>;
    constructor(owner: IAutomatedPluginParameter<number>, parameter: AudioParam, min_value: number, max_value: number, toStringFunc: (v: number) => string);
    private linearInterpolation;
    getCurrentTimeValue(time: number): number;
    start(time: number, contextTime: number): void;
    stop(contextTime: number): void;
}
export declare class ParameterStepAutomation<T> extends ParameterAutomation<T> implements IParameterAutomation<T> {
    readonly owner: IAutomatedPluginParameter<T>;
    constructor(owner: IAutomatedPluginParameter<T>, parameter: AudioParam, min_value: number, max_value: number, toStringFunc: (v: T) => string);
    getCurrentTimeValue(time: number): T;
    start(time: number, contextTime: number): void;
    stop(contextTime: number): void;
}
export {};
