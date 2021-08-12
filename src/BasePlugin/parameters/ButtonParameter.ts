import { IPluginHost } from "../../Factory/IPluginHost";
import { IBasePlugin } from "../IBasePlugin";
import { PluginParameter } from "./PluginParameter";

/* jshint esversion: 6 */
export class ButtonParameter extends PluginParameter<void> {
    private onclickFunction = () => {};
    constructor(owner: IBasePlugin, name: string, visibleName?: string, exposed = true) {
        super(owner, name, "Button", visibleName, exposed);
    }
    public destroy() {

    }
    public getParameterObject() {
        return {
            visibleName: this.visibleName,
            type: "ButtonParameter",
            name: this.name
        };
    }
    get type() {
        return "Button"
    };
    get onclick() {
        return this.onclickFunction
    }
    set onclick(f: () => void) {
        this.onclickFunction = f;
    }
}
