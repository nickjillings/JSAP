import { IBasePlugin } from "../BasePlugin/IBasePlugin";
import { PluginInterfaceWindow } from "../BasePlugin/PluginInterfaceMessageHub";
import { PluginFactory } from "./PluginFactory";
interface PluginUserInterfaceObject {
    src: string;
    width: string;
    height: string;
}
export declare class PluginUserInterfaceMessageHub {
    private readonly factory;
    private default_interface;
    constructor(factory: PluginFactory);
    buildPluginInterface(plugin_object: IBasePlugin, interface_object: PluginUserInterfaceObject): HTMLIFrameElement;
    spawnPluginWindow(plugin_object: IBasePlugin, interface_object: PluginUserInterfaceObject, opts: string): PluginInterfaceWindow;
    setDefaultInterface(src: string, width: string, height: string): PluginUserInterfaceObject;
    pollAllPlugins(): void;
}
export {};
