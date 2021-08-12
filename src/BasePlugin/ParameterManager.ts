/* jshint esversion: 6 */
import {NumberParameter} from "./parameters/NumberParameter";
import {StringParameter} from "./parameters/StringParameter";
import {ButtonParameter} from "./parameters/ButtonParameter";
import {SwitchParameter} from "./parameters/SwitchParameter";
import {ListParameter} from "./parameters/ListParameter";
import {URLParameter} from "./parameters/URLParameter";
import {AssetParameter} from "./parameters/AssetParameter";
import { IBasePlugin } from "./IBasePlugin";
import { PluginInterfaceMessageHub } from "./PluginInterfaceMessageHub";
import { INestedPluginParameterObject, IPluginBaseParameter, isPluginParameter } from "./parameters/IPluginParameter";
import { PluginParameterSetDetail } from "./parameters/PluginParameter";
import { IPluginHost } from "../Factory/IPluginHost";


export interface ParameterManagerSettableObject {
    [key: string]: ParameterManagerSettableObject | number | string
    value?: any
}

function formatParameterName(name) {
    name = name.toLowerCase();
    name = name.replace("/", "_");
    return name;
}

export class ParameterManager implements IPluginBaseParameter {
    public readonly type: "Parameter"
    private parameterList: IPluginBaseParameter[] = [];
    private eventTarget = new EventTarget();
    public visibleName: string;
    constructor(public readonly owner: IBasePlugin, private readonly pluginExternalInterface: PluginInterfaceMessageHub, public readonly name: string = "default", public readonly exposed = true) {
        this.visibleName = this.name;
    }
    
    private findParameter(baseName:string): IPluginBaseParameter {
        let name = baseName.replace("/", "_").split(".").reverse();
        const lowerCaseParameterNames = this.parameterList.map(i => formatParameterName(i.name));
        const param = this.parameterList[lowerCaseParameterNames.indexOf(name.pop().toLowerCase())];
        if (param instanceof ParameterManager && name.length > 0) {
            return param.getParameterByName(name.reverse().join("."));
        } else {
            return param;
        }
    }

    private isParameterNameAvailable(name) {
        name = formatParameterName(name);
        if (!/^\w+( \w+)*(-\w+)*(_\w+)*$/.test(name)) {
            console.warn("Invalid string for name", name, "Will not expose as dot notations");
            return true;
        }
        if (self.hasOwnProperty(name)) {
            throw new Error ("Name is reserved or already defined");
        }
        return true;
    }

    private buildParameterObject(): INestedPluginParameterObject {
        const obj: INestedPluginParameterObject = {};
        this.parameterList.filter(function(p) {
            return p.exposed;
        }).forEach(function (e) {
            obj[e.name] = e.getParameterObject();
        });
        return obj;
    }

    private addParameter(param) {
        if (param.name.includes(".")) {
            throw("Name cannot include a period");
        }
        var exists = this.parameterList.findIndex(function (e) {
            return e === param;
        }, param);
        if (exists === -1) {
            Object.defineProperty(this, param.name, {
                value: param
            });
            this.parameterList.push(param);
        }
        return param;
    }

    public addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions) {
        return this.eventTarget.addEventListener(type, listener, options);
    }
    public removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions) {
        return this.eventTarget.removeEventListener(type, listener, options);
    }
    public handleEvent(e: CustomEvent<PluginParameterSetDetail>) {
        let detail = e.detail;
        if (detail.updateInterfaces === true) {
            this.pluginExternalInterface.updateInterfaces();
        }
        if (this.name !== "default") {
            detail.parameter.name = `${this.name}.${detail.parameter.name}`;
        }
        if (e.type == "parameterset" && detail !== undefined) {
            this.eventTarget.dispatchEvent(new CustomEvent<PluginParameterSetDetail>("parameterset", {detail: detail}));
        }
    }
    public destroy() {
        this.deleteAllParameters();
    }
    public createNumberParameter(name: string, defaultValue: number, minimum: number, maximum: number, toStringFunc?: (item: number) => string, visibleName?: string, exposed?: boolean) {
        if (typeof name !== "string" || typeof defaultValue !== "number" || (minimum !== undefined && typeof minimum !== "number") || (maximum !== undefined && typeof maximum !== "number")) {
            throw ("Invlid constructor");
        }
        if (typeof toStringFunc != "function" && toStringFunc !== undefined) {
            throw ("toStringFunc must be a function or undefined");
        }
        name = name.toLowerCase();
        if (this.isParameterNameAvailable(name)) {
            const param = new NumberParameter(this.owner, name, defaultValue, minimum, maximum, toStringFunc, visibleName, exposed);
            this.addParameter(param);
            param.addEventListener("parameterset", this);
            return param;
        }
    }
    public createStringParameter(name: string, defaultValue: string, maxLength: number, toStringFunc?: (item: string) => string, visibleName?: string, exposed?: boolean) {
        if (typeof name !== "string" || typeof defaultValue !== "string" || (maxLength !== undefined && typeof maxLength !== "number")) {
            throw ("Invlid constructor");
        }
        if (typeof toStringFunc != "function" && toStringFunc !== undefined) {
            throw ("toStringFunc must be a function or undefined");
        }
        name = name.toLowerCase();
        if (this.isParameterNameAvailable(name)) {
            var param = new StringParameter(this.owner, name, defaultValue, maxLength, toStringFunc, visibleName, exposed);
            this.addParameter(param);
            param.addEventListener("parameterset", this);
            return param;
        }
    }
    public createButtonParameter(name: string, visibleName?: string, exposed?: boolean) {
        if (typeof name !== "string") {
            throw ("Invalid constructor");
        }
        name = name.toLowerCase();
        if (this.isParameterNameAvailable(name)) {
            const param = new ButtonParameter(this.owner, name, visibleName, exposed);
            this.addParameter(param);
            param.addEventListener("parameterset", this);
            return param;
        }
    }
    public createSwitchParameter(name: string, defaultValue: number, minState: number, maxState: number, toStringFunc?: (item: number) => string, visibleName?: string, exposed?: boolean) {
        if (typeof name !== "string" || typeof defaultValue !== "number" || typeof minState !== "number" || typeof maxState !== "number") {
            throw ("Invlid constructor");
        }
        if (typeof toStringFunc != "function" && toStringFunc !== undefined) {
            throw ("toStringFunc must be a function or undefined");
        }
        name = name.toLowerCase();
        if (this.isParameterNameAvailable(name)) {
            const param = new SwitchParameter(this.owner, name, defaultValue, minState, maxState, toStringFunc, visibleName, exposed);
            this.addParameter(param);
            param.addEventListener("parameterset", this);
            return param;
        }
    }
    public createListParameter(name, defaultValue, listOfValues, toStringFunc, visibleName, exposed) {
        if (typeof name !== "string" || typeof defaultValue === "undefined" || !Array.isArray(listOfValues)) {
            throw ("Invlid constructor");
        }
        if (typeof toStringFunc != "function" && toStringFunc !== undefined) {
            throw ("toStringFunc must be a function or undefined");
        }
        if (listOfValues.includes(defaultValue) === false) {
            throw ("Invlid constructor - default value missing");
        }
        name = name.toLowerCase();
        if (this.isParameterNameAvailable(name)) {
            const param = new ListParameter(this.owner, name, defaultValue, listOfValues, toStringFunc, visibleName, exposed);
            this.addParameter(param);
            param.addEventListener("parameterset", this);
            return param;
        }
    }

    public createURLParameter(name: string, defaultValue: string, maxLength: number, toStringFunc?: (item: string) => string, visibleName?: string, exposed?: boolean) {
        if (typeof name !== "string" || (maxLength !== undefined && typeof maxLength !== "number")) {
            throw ("Invlid constructor");
        }
        if (typeof toStringFunc != "function" && toStringFunc !== undefined) {
            throw ("toStringFunc must be a function or undefined");
        }
        name = name.toLowerCase();
        if (this.isParameterNameAvailable(name)) {
            const param = new URLParameter(this.owner, name, defaultValue, maxLength, toStringFunc, visibleName, exposed);
            this.addParameter(param);
            param.addEventListener("parameterset", this);
            return param;
        }
    }

    public createAssetParameter(name: string, visibleName?: string, exposed?: boolean) {
        if (typeof name !== "string") {
            throw ("Invlid constructor");
        }
        name = name.toLowerCase();
        if (this.isParameterNameAvailable(this)) {
            const param = new AssetParameter(this.owner, name, visibleName, exposed);
            this.addParameter(param);
            param.addEventListener("parameterset", this);
            return param;
        }
    }

    public createParameterManager(name: string, visibleName?: string, exposed?: boolean) {
        if (typeof name !== "string") {
            throw ("Invlid constructor");
        }
        name = name.toLowerCase();
        if (this.isParameterNameAvailable(this)) {
            const param = new AssetParameter(this.owner, name, visibleName, exposed);
            this.addParameter(param);
            param.addEventListener("parameterset", this);
            return param;
        }
    }

    public getParameterByName(name: string) {
        return this.findParameter(name);
    }

    public getParameterObject(): INestedPluginParameterObject {
        return this.buildParameterObject();
    }

    public getParameterNames(): string[] {
        return this.parameterList.filter((p) => {
            return p.exposed;
        }).map((p) => {
            if (p instanceof ParameterManager) {
                return p.getParameterNames().map(recursiveName => `${p.name}.${recursiveName}`);
            } else {
                return [p.name];
            }
        }).flat();
    }

    public setParameterByName(name: string, value: any, updateInterfaces=true) {
        var parameter = this.findParameter(name);
        if (!parameter) {
            return;
        }
        if (parameter.exposed === false) {
            console.warn("Cannot set hidden parameter");
            return;
        }
        if(isPluginParameter(parameter)) {
            parameter.setValue(value, updateInterfaces);
        }
    }

    public deleteParameter(parameter: IPluginBaseParameter) {
        const index = this.parameterList.findIndex(e => e === parameter);
        if (index >= 0) {
            // Does exist
            this.parameterList.splice(index, 1);
            Object.defineProperty(this, parameter.name, {
                value: undefined
            });
            parameter.destroy();
            return true;
        }
        return false;
    }

    public deleteAllParameters() {
        for (const parameter of Array.from(this.parameterList)) {
            this.deleteParameter(parameter);
        }
        return true;
    }

    public setParametersByObject(object: ParameterManagerSettableObject, updateInterfaces=true) {
        for (const key in object) {
            if (object.hasOwnProperty(key)) {
                const entry = object[key];
                if (typeof entry === 'object') {
                    let parameter = this.findParameter(key);
                    if (parameter instanceof ParameterManager) {
                        // Nested Parameter store
                        parameter.setParametersByObject(entry, updateInterfaces);
                    }
                    else if (isPluginParameter(parameter) && entry.hasOwnProperty("value")) {
                        this.setParameterByName(key, entry.value, updateInterfaces);
                    } else {
                        this.setParameterByName(key, entry, updateInterfaces);
                    }
                } else if (typeof entry == "number" || typeof entry == "string") {
                    this.setParameterByName(key, entry, updateInterfaces);
                } else {
                    throw ("Cannot set " + key + ": Not a valid object");
                }
            }
        }
    }

    public toJSON() {
        return this.parameterList.filter(p => p.exposed)
        .reduce(function (obj, e) {
            if (e instanceof ParameterManager) {
                obj[e.name] = e.toJSON();
            } else if (isPluginParameter(e)) {
                obj[e.name] = e.getParameterObject();
            }
            return obj;
        }, {});
    }

    get parameters() { return this.buildParameterObject(); }
    get numParameters() {return this.parameterList.length;}
}
