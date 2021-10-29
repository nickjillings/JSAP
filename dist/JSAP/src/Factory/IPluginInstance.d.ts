import { IBasePlugin } from "../BasePlugin/IBasePlugin";
import { PluginInterfaceMessageHub } from "../BasePlugin/PluginInterfaceMessageHub";
import { IPluginHost } from "./IPluginHost";
import { IPluginPrototype } from "./PluginPrototype";
export interface IPluginInstance<T extends IPluginHost> {
    readonly output: AudioNode;
    readonly node: IBasePlugin;
    readonly prototypeObject: IPluginPrototype<IPluginInstance<T>, T>;
    readonly externalInterface: PluginInterfaceMessageHub;
    destroy(): void;
}
