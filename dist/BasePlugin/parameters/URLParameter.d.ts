import { IBasePlugin } from "../IBasePlugin";
import { PluginParameter } from "./PluginParameter";
export declare class URLParameter extends PluginParameter<string> {
    readonly defaultValue: string;
    readonly maxLength?: number;
    toStringFunc?: (item: string) => string;
    readonly type = "URL";
    private _value;
    private resourceObject;
    constructor(owner: IBasePlugin, name: string, defaultValue: string, maxLength?: number, toStringFunc?: (item: string) => string, visibleName?: string, exposed?: boolean);
    getResource(type: XMLHttpRequestResponseType): Promise<unknown>;
    setValue(v: string, updateInterfaces?: boolean): string;
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
}
