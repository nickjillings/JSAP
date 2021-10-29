// Add getInputs to all AudioNodes to ease deployment
/*globals AudioNode, Worker, console, window, document, Promise, XMLHttpRequest */
/*eslint-env browser */
/*jshint esversion: 6 */
import {ParameterManager, NumberParameter, StringParameter, ButtonParameter, SwitchParameter, ListParameter, URLParameter, AssetParameter } from "./ParameterManager";
import {PluginInterfaceMessageHub} from "./PluginInterfaceMessageHub";
import {PluginFeatureInterface} from "./PluginFeatureInterface/index";
import {LinkedStore} from "../LinkedStore";
import {LinkedStoreInterface} from "./LinkedStoreInterface";
import { IBasePlugin, IBasePluginAssetLoadingProgress } from "./IBasePlugin.js";
import { PluginFactory } from "../Factory/PluginFactory";
import { IPluginPrototype } from "../Factory/PluginPrototype";
import { IPluginHost } from "../Factory/IPluginHost";
import { IPluginInstance } from "../Factory/IPluginInstance";
import { Observable, of } from "rxjs";
import { INestedPluginParameterObject } from "./parameters/IPluginParameter";
// if (typeof AudioNode === "function" && window.importScripts === undefined) {
//     AudioNode.prototype.getInputs = function () {
//         return [this];
//     };
// }

export { IBasePlugin, LinkedStoreInterface, INestedPluginParameterObject, ParameterManager, NumberParameter, StringParameter, ButtonParameter, SwitchParameter, ListParameter, URLParameter, AssetParameter, IBasePluginAssetLoadingProgress }

export abstract class BasePlugin<T extends IPluginInstance<I>, I extends IPluginHost> implements IBasePlugin {
    private inputList: AudioNode[] = [];
    private outputList: AudioNode[] = [];
    private delaySamples = 0;
    private eventTarget = new EventTarget();
    public readonly externalInterface: PluginInterfaceMessageHub = new PluginInterfaceMessageHub(this);
    public readonly context = this.factory.context
    public readonly featureMap: PluginFeatureInterface = new PluginFeatureInterface(this);
    public readonly parameters: ParameterManager = new ParameterManager(this, this.externalInterface);
    public readonly PluginData: LinkedStore = new LinkedStore("Plugin");
    public readonly sessionDataInterface: LinkedStoreInterface = new LinkedStoreInterface(this, this.factory.SessionData);
    public readonly userDataInterface: LinkedStoreInterface = new LinkedStoreInterface(this, this.factory.UserData);
    public readonly trackDataInterface: LinkedStoreInterface = new LinkedStoreInterface(this, this.TrackData);
    public readonly pluginDataInterface: LinkedStoreInterface = new LinkedStoreInterface(this, this.PluginData);
    public readonly SessionData: LinkedStore = this.factory.SessionData;
    public readonly UserData: LinkedStore = this.factory.UserData;
    public readonly name: string = this.prototypeObject.name;
    public readonly uniqueID: string = this.prototypeObject.uniqueID;
    public readonly version: string = this.prototypeObject.version;
    constructor (public readonly factory: PluginFactory, private pluginOwner: I, public readonly prototypeObject: IPluginPrototype<T, I>) {
        this.parameters.addEventListener("parameterset", (e:CustomEvent) => {
            this.eventTarget.dispatchEvent(new CustomEvent("parameterset", {detail: e.detail}));
        });
    }
    start(): void {}
    stop(ct?: number): void {}
    onloaded(): void {}
    onunloaded(): void {}
    deconstruct(): void {}
    initialise?: () => Promise<void>;
    private deleteIO(node: AudioNode, list: AudioNode[]) {
        var i = list.findIndex((e) => {
            return e === node;
        });
        if (i === -1) {
            return false;
        }
        list.splice(i, 1);
        return true;
    }
    public changeOwner(newOwner) {
        this.pluginOwner = newOwner;
    }
    public delete() {
        this.sessionDataInterface.destroy();
        this.userDataInterface.destroy();
        this.trackDataInterface.destroy();
        this.pluginDataInterface.destroy();
        this.stop();
        this.onunloaded();
        if (this.deconstruct && typeof this.deconstruct == "function") {
            this.deconstruct();
        }
    }
    // Depcrecated - Use .delete() instead
    public destroy() {
        console.error("DEPRECATED - Use .delete() instead");
        this.delete();
    }
    public addInput(node: AudioNode) {
        this.inputList.push(node);
        return this.inputList;
    }
    public deleteInput(node: AudioNode) {
        this.deleteIO(node, this.inputList);
        return this.inputList;
    }
    public addOutput(node: AudioNode) {
        this.outputList.push(node);
        return this.outputList;
    };
    public deleteOutput(node: AudioNode) {
        this.deleteIO(node, this.outputList);
        return this.outputList;
    };
    public setProcessingDelayAsSeconds(seconds: number) {
        const fs = this.factory.context.sampleRate;
        if (typeof seconds == "number" && isFinite(seconds) && seconds >= 0) {
            return this.setProcessingDelayAsSamples(seconds*fs)/fs;
        }
        throw new Error("setProcessingDelayAsSeconds Invalid argument");
    }
    public setProcessingDelayAsSamples(samples: number) {
        if (typeof samples == "number" && isFinite(samples) && samples >= 0) {
            this.delaySamples = samples;
            const e = new Event("alterdelay");
            this.eventTarget.dispatchEvent(e);
            return this.delaySamples;
        } else {
            throw new Error("setProcessingDelayAsSamples Invalid argument");
        }

    }
    public connect(dest: AudioNode | AudioParam, output?: number, input?: number) {
        if (dest instanceof AudioParam) {
            this.outputs[0].connect(dest, output);
        } else {
            this.outputs[0].connect(dest, output, input);
        }
    }
    public disconnect(dest?: AudioNode | AudioParam, output?: number, input?: number) {
        if (dest === undefined) {
            this.outputs[0].disconnect();
        } else {
            if (dest instanceof AudioParam) {
                this.outputs[0].disconnect(dest, output);
            } else {
                this.outputs[0].disconnect(dest, output, input);
            }
        }
    }
    public getInputs() {return this.inputList;}
    public getOutputs() {return this.outputList;}
    public getParameterNames() {return this.parameters.getParameterNames();}
    public getParameterByName(name: string) {return this.parameters.getParameterByName(name);}
    public getParameterObject() {return this.parameters.getParameterObject();}
    public setParameterByName(name: string, value: any, updateInterfaces=true) {return this.parameters.setParameterByName(name, value, updateInterfaces);}
    public setParametersByObject(object: INestedPluginParameterObject, updateInterfaces?:boolean) {return this.parameters.setParametersByObject(object, updateInterfaces);}
    public addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions) {
        return this.eventTarget.addEventListener(type, listener, options);
    }
    public removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions) {
        return this.eventTarget.removeEventListener(type, listener, options);
    }
    public isReadyPromise() {
        return Promise.resolve(true);
    }
    public loadingProgress$(): Observable<IBasePluginAssetLoadingProgress> {
        return of({
            numberOfAssets: 0,
            loaded: true,
            numberOfAssetsLoaded: 0
        })
    }
    get owner() {return this.pluginOwner;}
    get numInputs() {return this.inputList.length;}
    get numOutputs() {return this.outputList.length;}
    get numParameters() {return this.parameters.numParameters;}
    get inputs() {return this.inputList;}
    get outputs() {return this.outputList;}
    get processingDelayAsSamples() {return this.delaySamples;}
    set processingDelayAsSamples(samples: number) {this.setProcessingDelayAsSamples(samples);}
    get processingDelayAsSeconds() {return this.delaySamples/this.factory.context.sampleRate;}
    set processingDelayAsSeconds(seconds: number) {this.setProcessingDelayAsSeconds(seconds);}
    get TrackData() {return this.pluginOwner?.TrackData}
}
