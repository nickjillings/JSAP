import { AudioPlugin } from "../BasePlugin/AudioPlugin";
import { AudioPluginChainManager } from "./AudioPluginChainManager/index";
import { IPluginHost } from "./IPluginHost";
import { IPluginInstance } from "./IPluginInstance";
export declare class PluginInstance implements IPluginInstance<AudioPluginChainManager> {
    readonly node: AudioPlugin;
    private next_node;
    private _bypassed;
    private ev;
    private _in;
    private _out;
    constructor(node: AudioPlugin);
    private bypassEnable;
    private bypassDisable;
    bypass(state: boolean): boolean;
    isBypassed(): boolean;
    reconnect(new_next?: PluginInstance): void;
    connect(new_next?: PluginInstance): boolean;
    disconnect(): void;
    destroy(): void;
    handleEvent(e: Event): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    get input(): GainNode;
    get output(): GainNode;
    get bypassed(): boolean;
    get prototypeObject(): import("./PluginPrototype").PluginPrototype;
    get externalInterface(): import("../BasePlugin/PluginInterfaceMessageHub").PluginInterfaceMessageHub;
}
export declare function isPluginInstance(object: IPluginInstance<IPluginHost>): object is PluginInstance;
