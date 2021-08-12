/*jshint esversion: 6 */
import { IBasePlugin } from "../IBasePlugin";
import {PluginFeatureInterfaceReceiver} from "./PluginFeatureInterfaceReceiver";
import {PluginFeatureInterfaceSender} from "./PluginFeatureInterfaceSender";

export class PluginFeatureInterface {
    public readonly Receiver: PluginFeatureInterfaceReceiver
    public readonly Sender: PluginFeatureInterfaceSender
    constructor(public readonly plugin: IBasePlugin) {
        this.Receiver = new PluginFeatureInterfaceReceiver(this.plugin, this.plugin.factory.FeatureMap);
        this.Sender = new PluginFeatureInterfaceSender(this.plugin, this.plugin .factory.FeatureMap);
    }
    get onfeatures() {return this.Receiver.onfeatures;}
    set onfeatures(func: (f:any) => any) {this.Receiver.onfeatures = func;}
}
