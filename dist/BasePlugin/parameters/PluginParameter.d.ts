import { IBasePlugin } from "../IBasePlugin";
import { IPluginParameter, IPluginParameterObject } from "./IPluginParameter";
export declare type PluginParameterDataType = 'Button' | 'String' | 'Number';
export interface PluginParameterSetDetail {
    parameter: IPluginParameterObject;
    updateInterfaces: boolean;
}
export declare class PluginParameter<T> implements IPluginParameter<T> {
    readonly owner: IBasePlugin;
    private _name;
    private _visibleName?;
    private _exposed;
    private eventTarget;
    private _updateFunction;
    private _translateFunction;
    private _triggerFunction;
    constructor(owner: IBasePlugin, _name: string, dataType: PluginParameterDataType, _visibleName?: string, _exposed?: boolean);
    destroy(): void;
    setValue(v: T): T;
    toString(): string;
    getParameterObject(): IPluginParameterObject;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    triggerParameterSet(updateInterfaces?: boolean): void;
    bindToAudioParam(ap: AudioParam): void;
    get boundAudioParam(): AudioParam;
    get name(): string;
    get visibleName(): any;
    get exposed(): boolean;
    set exposed(e: boolean);
    get update(): (v: T) => number;
    set update(f: (v: T) => number);
    get translate(): (v: number) => T;
    set translate(f: (v: number) => T);
    get trigger(): () => void;
    set trigger(f: () => void);
}
