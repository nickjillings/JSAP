import {BasePlugin, SynthesiserBasePlugin, PluginFactory} from "./plugin-factory";

(function(root, factory) {
    console.log("Load JSAP...");
    if (typeof define === "function" && define.amd) {
        console.log("define");
        define("JSAP", [], factory);
    } else if (typeof module == "object" && module.exports) {
        console.log("module");
        module.exports = factory();
    } else {
        console.log("direct");
        if (root === undefined) {
            root = window;
        }
        root.JSAP = factory();
    }
})(this, function() {
    console.log("factory");
    return {
        PluginFactory: PluginFactory,
        BasePlugin: BasePlugin,
        SynthesiserBasePlugin: SynthesiserBasePlugin
    };
});
