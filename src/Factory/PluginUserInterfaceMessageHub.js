/* jshint esversion: 6 */

export default function PluginUserInterfaceMessageHub(factory){
    function buildPluginInterface(plugin_object, interface_object) {
        var iframe = document.createElement("iframe");
        iframe.src = interface_object.src;
        if (interface_object.width) {
            iframe.width = interface_object.width;
        }
        if (interface_object.height) {
            iframe.height = interface_object.height;
        }
        iframe.style.border = "0";
        return iframe;
    }
    function setDefaultInterface(url, width, height) {
        default_interface = {
            url: url,
            width: width,
            height: height
        };
        return default_interface;
    }
    function pollAllPlugins() {
        factory.getAllPlugins().forEach(function(plugin) {
            plugin.node.externalInterface.updateInterfaces(true);
        });
    }

    var listener = false;
    var default_interface = {
        src: "jsap_default.html"
    };

    return Object.create({
        "setDefaultInterface": setDefaultInterface,
        "buildPluginInterface":buildPluginInterface,
        "pollAllPlugins": pollAllPlugins
    });
}
