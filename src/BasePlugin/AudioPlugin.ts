import { AudioPluginChainManager } from "../Factory/AudioPluginChainManager/index";
import { PluginInstance } from "../Factory/PluginInstance";
import { PluginPrototype } from "../Factory/PluginPrototype";
import { PluginFactory } from "../index";
import { BasePlugin } from "./index";

export abstract class AudioPlugin extends BasePlugin<PluginInstance, AudioPluginChainManager> {
    constructor (public readonly factory: PluginFactory, pluginOwner: AudioPluginChainManager, public readonly prototypeObject: PluginPrototype) {
        super(factory, pluginOwner, prototypeObject)
    }
}