import { IBasePlugin } from "../IBasePlugin";
import { PluginFeatureInterfaceReceiver } from "./PluginFeatureInterfaceReceiver";
import { PluginFeatureInterfaceSender } from "./PluginFeatureInterfaceSender";
export declare class PluginFeatureInterface {
    readonly plugin: IBasePlugin;
    readonly Receiver: PluginFeatureInterfaceReceiver;
    readonly Sender: PluginFeatureInterfaceSender;
    constructor(plugin: IBasePlugin);
    get onfeatures(): (f: any) => any;
    set onfeatures(func: (f: any) => any);
}
