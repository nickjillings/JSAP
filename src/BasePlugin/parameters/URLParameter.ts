/* jshint esversion: 6 */
import { IBasePlugin } from "../IBasePlugin";
import {PluginParameter} from "./PluginParameter";

export class URLParameter extends PluginParameter <string> {
    public readonly type = "URL";
    private _value: string;
    private resourceObject: Promise<unknown>;
    constructor(
        owner: IBasePlugin,
        name: string,
        public readonly defaultValue: string,
        public readonly maxLength?: number,
        public toStringFunc?: (item: string) => string,
        visibleName ? : string,
        exposed = true
    ) {
        super(owner, name, "String", visibleName, exposed);
    }
    public getResource(type: XMLHttpRequestResponseType) {
        if (this.resourceObject == undefined) {
            this.resourceObject = new Promise<any>(function (resolve, reject) {
                const xhr = new XMLHttpRequest();
                xhr.open("GET", this._value);
                xhr.responseType = type;
                xhr.onload = function (e) {
                    if (xhr.status == 200) {
                        resolve(xhr.response);
                    } else {
                        reject({
                            code: xhr.status,
                            message: e.target
                        });
                    }

                };
                xhr.onerror = function (e) {
                    reject({
                        code: xhr.status,
                        message: "error"
                    });
                };
                xhr.ontimeout = function (e) {
                    reject({
                        code: xhr.status,
                        message: "timeout"
                    });
                };
                xhr.send();
            });
        }
        return this.resourceObject;
    }

    public setValue(v: string, updateInterfaces = true) {
        if (this.maxLength && v.length > this.maxLength) {
            throw new Error(`String longer than ${this.maxLength} characters`);
        }
        if (this._value !== v) {
            this.resourceObject = undefined;
            this._value = v;
            this.triggerParameterSet(updateInterfaces);
        }
        this.trigger();
        return this._value;
    }

    public toString() {
        if (typeof this.toStringFunc == "function") {
            return this.toStringFunc.call(this, this._value);
        } else {
            return this._value;
        }
    }
    public getParameterObject() {
        return {
            value: this.value,
            defaultValue: this.defaultValue,
            maxLength: this.maxLength,
            visibleName: this.name,
            type: "URLParameter",
            name: this.name
        };
    }

    get value() {return this._value};
    set value (t: string) { this.setValue(t);}

}
