import { IBasePlugin } from "./IBasePlugin";
import { IPluginParameterObject } from "./parameters/IPluginParameter";
export interface PluginInterfaceWindow extends Window {
    pluginInstance: IBasePlugin;
}
export interface PluginParameterJSONEntry extends IPluginParameterObject {
    name: string;
    automated?: boolean;
}
export declare type StateLevel = "session" | "track" | "plugin" | "user";
export interface PluginParameterJSON {
    [key: string]: PluginParameterJSONEntry;
}
export interface PluginParameterUpdateMessage {
    sender_id: string;
    message: "updateParameters";
    parameters: PluginParameterJSON;
}
export interface PluginStateUpdateMessage {
    message: "updateState";
    level: StateLevel;
    term: string;
    value: any;
}
export declare class PluginInterfaceMessageHub {
    private readonly owner;
    private windowMessageList;
    private eventTarget;
    constructor(owner: IBasePlugin);
    private buildPluginParameterJSON;
    private buildParameterUpdatePayload;
    private sendParameterUpdates;
    private broadcastParameterUpdates;
    private broadcastStateChange;
    private setParameterMessage;
    destroy(): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject | null, options?: boolean | AddEventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject | null, options?: boolean | AddEventListenerOptions): void;
    handleEvent(e: MessageEvent): void;
    sendState(level: StateLevel, term: string): void;
    updateInterfaces(automationOnly?: boolean): void;
    closeWindows(): void;
    registerWindow(w: Window): boolean;
    removeWindow(w: any): void;
}
