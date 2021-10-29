import { IBasePlugin } from "../IBasePlugin";
import { PluginParameter } from "./PluginParameter";
export declare class StringParameter extends PluginParameter<string> {
    readonly defaultValue: string;
    readonly maxLength?: number;
    toStringFunc?: (item: string) => string;
    readonly type = "String";
    private _value;
    private audioParameter;
    constructor(owner: IBasePlugin, name: string, defaultValue: string, maxLength?: number, toStringFunc?: (item: string) => string, visibleName?: string, exposed?: boolean);
    setValue(v: string | any, updateInterfaces?: boolean): string;
    destroy(): void;
    bindToAudioParam(ap: AudioParam): void;
    toString(): any;
    getParameterObject(): {
        value: string;
        defaultValue: string;
        maxLength: number;
        visibleName: string;
        type: string;
        name: string;
    };
    get value(): string;
    set value(t: string);
    get boundAudioParam(): AudioParam;
}
