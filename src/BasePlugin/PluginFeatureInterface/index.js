/*jshint esversion: 6 */
import {PluginFeatureInterfaceReceiver} from "./PluginFeatureInterfaceReceiver";
import {PluginFeatureInterfaceSender} from "./PluginFeatureInterfaceSender";

var PluginFeatureInterface = function (BasePluginInstance) {
    this.plugin = BasePluginInstance;
    this.Receiver = new PluginFeatureInterfaceReceiver(this, BasePluginInstance.factory.FeatureMap);
    this.Sender = new PluginFeatureInterfaceSender(this, BasePluginInstance.factory.FeatureMap);

    Object.defineProperty(this, "onfeatures", {
        'get': function () {
            return this.Receiver.onfeatures;
        },
        'set': function (func) {
            this.Receiver.onfeatures = func;
            return func;
        }
    });
};

export {PluginFeatureInterface};
