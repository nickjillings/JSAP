import { IPluginHost } from "../../Factory/IPluginHost";
import { IBasePlugin } from "../IBasePlugin";

export interface IPluginParameterObject {
    name: string
    visibleName: string,
    type: string,
}

export interface INestedPluginParameterObject {
    [key: string]: INestedPluginParameterObject | IPluginParameterObject
}


export interface IParameterAutomationPoint<T> {
    time: number
    value: T;
}

export interface IParameterAutomationUpdateOptions < T > {
    time ? : number
    value ? : T
}

export interface IParameterAutomation<T> {
    readonly minimum: number
    readonly maximum: number
    insertPoint: (time: number, value: T) => IParameterAutomationPoint<T>
    getPoints: (start_time?: number, end_time?: number) => IParameterAutomationPoint<T>[]
    deletePoint: (time: number) => number
    getStaticValueAsString: (value: T) => string
    getValueAtTimePoint: (time: number) => T
    getCurrentTimeValue: (time: number) => T
    start: (time: number, contextTime: number) => void
    stop: (contextTime: number) => void
    updatePoint: (time: number, options: IParameterAutomationUpdateOptions<T>) => IParameterAutomationPoint<T>
    enabled: boolean
}

export interface IPluginBaseParameter {
    readonly owner: IBasePlugin
    readonly name: string;
    readonly visibleName: string;
    exposed: boolean;
    addEventListener: (type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions) => void
    removeEventListener: (type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions) => void
    getParameterObject: () => IPluginParameterObject | INestedPluginParameterObject
    destroy: () => void
}

export interface IPluginParameter<T> extends IPluginBaseParameter {
    readonly boundAudioParam: AudioParam;
    update: (v:T) => number
    translate: (v:number) => T
    trigger: () => void
    triggerParameterSet: (updateInterfaces?:boolean) => void;
    bindToAudioParam: (ap: AudioParam) => void;
    getParameterObject: () => IPluginParameterObject
    toString: () => string
    setValue: (v: T, updateInterfaces?: boolean) => T
}

export interface IAutomatedPluginParameter<T> extends IPluginParameter<T> {
    getValueAtTimePoint: (time: number) => T;
    start: (time: number, contextTime?: number) => void
    stop: (contextTime?: number) => void
    readonly automationPoints: IParameterAutomation<T>
    enabled: boolean
    value: T
}

export function isPluginBaseParameter(object: any): object is IPluginBaseParameter {
    return 'getParameterObject' in object;
}

export function isPluginParameter(object: any): object is IPluginParameter<any> {
    return isPluginBaseParameter(object) && 'setValue' in object;
}

export function isAutomatedPluginParameter(object: any): object is IAutomatedPluginParameter<any> {
    return isPluginParameter(object) && 'getValueAtTimePoint' in object;
}
