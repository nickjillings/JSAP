import { AudioPluginChainManager } from "../Factory/AudioPluginChainManager/index";
import { PluginInstance } from "../Factory/PluginInstance";
import { PluginPrototype } from "../Factory/PluginPrototype";
import { PluginFactory } from "../index";
import { BasePlugin } from "./index";
export declare abstract class AudioPlugin extends BasePlugin<PluginInstance, AudioPluginChainManager> {
    readonly factory: PluginFactory;
    readonly prototypeObject: PluginPrototype;
    constructor(factory: PluginFactory, pluginOwner: AudioPluginChainManager, prototypeObject: PluginPrototype);
}
