import { IBasePlugin } from "./IBasePlugin";
export interface PluginInterfaceWindow extends Window {
    pluginInstance: IBasePlugin;
}
declare type StateLevel = "session" | "track" | "plugin" | "user";
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
    registerWindow(w: PluginInterfaceWindow): boolean;
    removeWindow(w: any): void;
}
export {};
