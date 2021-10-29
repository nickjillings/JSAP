import { IBasePlugin } from "../IBasePlugin";
import { PluginParameter } from "./PluginParameter";
export declare class ButtonParameter extends PluginParameter<void> {
    private onclickFunction;
    constructor(owner: IBasePlugin, name: string, visibleName?: string, exposed?: boolean);
    destroy(): void;
    getParameterObject(): {
        visibleName: any;
        type: string;
        name: string;
    };
    get type(): string;
    get onclick(): () => void;
    set onclick(f: () => void);
}
