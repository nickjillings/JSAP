import { IPluginHost } from "../Factory/IPluginHost";
import { LinkedStoreValues } from "../LinkedStore";
import { IBasePlugin } from "./IBasePlugin";
import { IPluginParameterObject, isAutomatedPluginParameter, isPluginParameter } from "./parameters/IPluginParameter";

export interface PluginInterfaceWindow extends Window {
    pluginInstance: IBasePlugin
}

interface PluginParameterJSONEntry extends IPluginParameterObject {
    name: string
    automated?: boolean
}

type StateLevel = "session" | "track" | "plugin" | "user";

interface PluginParameterJSON {
    [key: string]: PluginParameterJSONEntry
}
export class PluginInterfaceMessageHub {
    private windowMessageList: PluginInterfaceWindow[] = [];
    private eventTarget = new EventTarget();
    constructor (private readonly owner: IBasePlugin) {
        window.addEventListener("message", this);
    }
    private buildPluginParameterJSON(sources: string[]) {
        const names = this.owner.parameters.getParameterNames();
        const O: PluginParameterJSON = {};
        if (sources.length == 0) {
            sources = names;
        }
        names.filter((name) => sources.includes(name)).forEach((name) => {
            const param = this.owner.parameters.getParameterByName(name);
            if (isPluginParameter(param)) {
                O[name] = param.getParameterObject();
                O[name].name = name;
                if (isAutomatedPluginParameter(param)) {
                    O[name].automated = param.enabled;
                }
            }
        });
        return O;
    }
    private buildParameterUpdatePayload(sender_id?: string, sources: string[] =[]) {
        const msg = {
            sender_id,
            message: "updateParameters",
            parameters: this.buildPluginParameterJSON(sources)
        };
        return msg;
    }
    private sendParameterUpdates(channel: PluginInterfaceWindow, sources: string[]=[]) {
        channel.postMessage(this.buildParameterUpdatePayload(undefined, sources), location.origin);
    }
    private broadcastParameterUpdates(sender_id?: string, sources?: string[]) {
        const msg = this.buildParameterUpdatePayload(sender_id, sources);
        this.windowMessageList.forEach(function(w) {
            w.postMessage(msg, location.origin);
        });
    }
    private broadcastStateChange(level: StateLevel, term: string, value: LinkedStoreValues) {
        var msg = {
            message: "updateState",
            level,
            term,
            value
        };
        this.windowMessageList.forEach(function(w) {
            w.postMessage(msg, location.origin);
        });
    }
    private setParameterMessage(e: MessageEvent) {
        const updateObjects: string[] = [];
        const parameters = JSON.parse(e.data.parameters);
        Object.keys(parameters).forEach((name) => {
            const parameterObject = this.owner.parameters.getParameterByName(name);
            if (isPluginParameter(parameterObject)) {
                parameterObject.setValue(parameters[name].value, false);
                updateObjects.push(name);
            }
        });
        return updateObjects;
    }
    public destroy () {
        window.removeEventListener("message", this);
    }
    public addEventListener(type: string, listener: EventListenerOrEventListenerObject | null, options?: boolean | AddEventListenerOptions) {
        this.eventTarget.addEventListener(type, listener,options);
    }
    public removeEventListener(type: string, listener: EventListenerOrEventListenerObject | null, options?: boolean | AddEventListenerOptions) {
        this.eventTarget.removeEventListener(type, listener,options);
    }
    public handleEvent(e:MessageEvent) {
        if (!this.windowMessageList.includes(e.source as PluginInterfaceWindow)) {
            return;
        }
        const window = (e.source as PluginInterfaceWindow);
        switch(e.data.message) {
            case "setParameterByName":
                if (e.data.parameter.name) {
                    const parameterObject = this.owner.parameters.getParameterByName(e.data.parameter.name);
                    if (isPluginParameter(parameterObject)) {
                        parameterObject.setValue(e.data.parameter.value, false);
                        this.broadcastParameterUpdates(e.data.sender_id, [e.data.parameter.name]);
                    }
                }
                break;
            case "setParametersByObject":
                if (e.data.parameter) {
                    const updateObjects = this.setParameterMessage(e);
                    this.broadcastParameterUpdates(e.data.sender_id, updateObjects);
                }
                break;
            case "requestParameters":
                if (typeof e.data.name == "string") {
                    this.sendParameterUpdates(window, [e.data.name]);
                } else {
                    this.sendParameterUpdates(window);
                }
                break;
            case "requestSessionState":
                this.broadcastStateChange("session", e.data.term, this.owner.sessionDataInterface.requestTerm(e.data.term));
                break;
            case "requestTrackState":
                this.broadcastStateChange("track", e.data.term, this.owner.trackDataInterface.requestTerm(e.data.term));
                break;
            case "requestUserState":
                this.broadcastStateChange("user", e.data.term, this.owner.userDataInterface.requestTerm(e.data.term));
                break;
            case "requestPluginState":
                this.broadcastStateChange("plugin", e.data.term, this.owner.pluginDataInterface.requestTerm(e.data.term));
                break;
            case "customMessage":
                break;
            default:
                throw("Unknown message type \""+e.data.message+"\"");
        }
    }
    public sendState(level:StateLevel, term:string) {
        if (level == "session") {
            this.broadcastStateChange("session", term, this.owner.sessionDataInterface.requestTerm(term));
        } else if (level == "track") {
            this.broadcastStateChange("track", term, this.owner.trackDataInterface.requestTerm(term));
        } else if (level == "user") {
            this.broadcastStateChange("user", term, this.owner.userDataInterface.requestTerm(term));
        } else if (level == "plugin") {
            this.broadcastStateChange("plugin", term, this.owner.pluginDataInterface.requestTerm(term));
        } else {
            throw "Invalid state level option";
        }
    }
    public updateInterfaces(automationOnly=false) {
        if (automationOnly === undefined) {
            automationOnly = false;
        }
        if (automationOnly) {
            const parameterNames = this.owner.parameters.getParameterNames();
            const sources = parameterNames.filter(function(name) {
                var param = this.owner.parameters.getParameterByName(name);
                return (param.automatable && param.enabled === true);
            });
            if (sources.length > 0)
            {
                this.broadcastParameterUpdates(undefined, sources);
            }
        } else {
            this.broadcastParameterUpdates();
        }

    }
    public closeWindows() {
        while(this.windowMessageList.length > 0) {
            const w = this.windowMessageList.pop();
            w.close();
        }
        window.removeEventListener("message", this);
    }
    public registerWindow(w: PluginInterfaceWindow) {
        if (this.windowMessageList.includes(w)) {
            this.windowMessageList.splice(this.windowMessageList.indexOf(w), 1);
        }
        this.windowMessageList.push(w);
        w.pluginInstance = this.owner;
        this.sendParameterUpdates(w);
        return true;
    }
    public removeWindow(w) {
        if (this.windowMessageList.includes(w)) {
            this.windowMessageList.splice(this.windowMessageList.indexOf(w), 1);
        }
    }
}
