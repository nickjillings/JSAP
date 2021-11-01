import { IBasePlugin, IBasePluginGUIDefinition } from "../BasePlugin/IBasePlugin";
import { PluginInterfaceWindow } from "../BasePlugin/PluginInterfaceMessageHub";
import { PluginFactory } from "./PluginFactory";
export declare class PluginUserInterfaceMessageHub {
    private readonly factory;
    private default_interface;
    constructor(factory: PluginFactory);
    buildPluginInterface(plugin_object: IBasePlugin, interface_object: IBasePluginGUIDefinition): HTMLIFrameElement;
    spawnPluginWindow(plugin_object: IBasePlugin, interface_object: IBasePluginGUIDefinition, opts: string): PluginInterfaceWindow;
    setDefaultInterface(src: string, width: number, height: number): IBasePluginGUIDefinition;
    pollAllPlugins(): void;
}
