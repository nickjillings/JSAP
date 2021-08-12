/* jshint esversion: 6 */

import { IBasePlugin } from "../BasePlugin/IBasePlugin";
import { PluginInterfaceWindow } from "../BasePlugin/PluginInterfaceMessageHub";
import { PluginFactory } from "./PluginFactory";

interface PluginUserInterfaceObject {
    src: string
    width: string
    height: string
}

export class PluginUserInterfaceMessageHub {
    private default_interface: PluginUserInterfaceObject = {
        src: "jsap_default.html",
        width: "500px",
        height: "500px"
    };
    constructor(private readonly factory: PluginFactory) {

    }
    public buildPluginInterface(plugin_object: IBasePlugin, interface_object: PluginUserInterfaceObject): HTMLIFrameElement {
        const iframe = document.createElement("iframe");
        iframe.src = interface_object.src;
        if (interface_object.width) {
            iframe.width = interface_object.width;
        }
        if (interface_object.height) {
            iframe.height = interface_object.height;
        }
        iframe.style.border = "0";
        //iframe.contentWindow.pluginInstance = plugin_object;
        return iframe;
    }
    public spawnPluginWindow(plugin_object: IBasePlugin, interface_object: PluginUserInterfaceObject, opts: string): PluginInterfaceWindow {
        const w = window.open(interface_object.src,plugin_object.name,opts) as PluginInterfaceWindow;
        plugin_object.externalInterface.registerWindow(w);
        return w;
    }
    public setDefaultInterface(src: string, width: string, height: string): PluginUserInterfaceObject {
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
