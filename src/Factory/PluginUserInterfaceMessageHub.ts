/* jshint esversion: 6 */

import { IBasePlugin, IBasePluginGUIDefinition } from "../BasePlugin/IBasePlugin";
import { PluginInterfaceWindow } from "../BasePlugin/PluginInterfaceMessageHub";
import { PluginFactory } from "./PluginFactory";

export class PluginUserInterfaceMessageHub {
    private default_interface: IBasePluginGUIDefinition = {
        src: "jsap_default.html",
        width: 500,
        height: 500
    };
    constructor(private readonly factory: PluginFactory) {

    }
    public buildPluginInterface(plugin_object: IBasePlugin, interface_object: IBasePluginGUIDefinition): HTMLIFrameElement {
        const iframe = document.createElement("iframe");
        iframe.src = interface_object.src;
        if (interface_object.width) {
            iframe.width = `${interface_object.width}px`;
        }
        if (interface_object.height) {
            iframe.height = `${interface_object.height}px`;
        }
        iframe.style.border = "0";
        //iframe.contentWindow.pluginInstance = plugin_object;
        return iframe;
    }
    public spawnPluginWindow(plugin_object: IBasePlugin, interface_object: IBasePluginGUIDefinition, opts: string): PluginInterfaceWindow {
        const w = window.open(interface_object.src,plugin_object.name,opts) as PluginInterfaceWindow;
        plugin_object.externalInterface.registerWindow(w);
        return w;
    }
    public setDefaultInterface(src: string, width: number, height: number): IBasePluginGUIDefinition {
        this.default_interface = {
            src: src,
            width: width,
            height: height
        };
        return this.default_interface;
    }
    public pollAllPlugins() {
        this.factory.getAllPlugins().forEach(function(plugin) {
            plugin.node.externalInterface.updateInterfaces(true);
        });
    }
}
