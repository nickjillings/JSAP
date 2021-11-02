import { IPluginHost } from "../Factory/IPluginHost";
import { IPluginInstance } from "../Factory/IPluginInstance";
import { PluginFactory } from "../Factory/PluginFactory";
import { IPluginPrototype } from "../Factory/PluginPrototype";
import { LinkedStore } from "../LinkedStore";
import { LinkedStoreInterface } from "./LinkedStoreInterface";
import { ParameterManager, ParameterManagerSettableObject } from "./ParameterManager";
import { INestedPluginParameterObject, IPluginBaseParameter } from "./parameters/IPluginParameter";
import { PluginFeatureInterface } from "./PluginFeatureInterface/index";
import { PluginInterfaceMessageHub } from "./PluginInterfaceMessageHub";
import { Observable } from "rxjs";

export interface IBasePluginAssetLoadingProgress {
    numberOfAssets: number,
    loaded: boolean,
    numberOfAssetsLoaded: number
}

export interface IBasePluginGUIDefinition {
    src: string,
    width: number,
    height: number
}

export interface IBasePlugin {
    readonly owner: IPluginHost
    readonly context: BaseAudioContext;
    readonly factory: PluginFactory
    readonly parameters: ParameterManager
    readonly featureMap: PluginFeatureInterface
    readonly PluginData: LinkedStore
    readonly sessionDataInterface: LinkedStoreInterface
    readonly userDataInterface: LinkedStoreInterface
    readonly trackDataInterface: LinkedStoreInterface
    readonly pluginDataInterface: LinkedStoreInterface
    readonly externalInterface: PluginInterfaceMessageHub
    readonly numInputs: number
    readonly numOutputs: number
    readonly numParameters: number
    readonly inputs: AudioNode[]
    readonly outputs: AudioNode[]
    readonly processingDelayAsSamples: number
    readonly processingDelayAsSeconds: number
    readonly name: string
    readonly version: string
    readonly uniqueID: string
    readonly GUI?: IBasePluginGUIDefinition
    readonly SessionData: LinkedStore
    readonly UserData: LinkedStore
    readonly TrackData: LinkedStore
    readonly prototypeObject: IPluginPrototype<IPluginInstance<IPluginHost>, IPluginHost>
    delete(): void;
    changeOwner(newOwner): unknown
    addInput(node: AudioNode): AudioNode[]
    deleteInput(node: AudioNode): AudioNode[]
    addOutput(node: AudioNode): AudioNode[]
    deleteOutput(node: AudioNode): AudioNode[]
    setProcessingDelayAsSeconds(seconds: number): number
    setProcessingDelayAsSamples(samples: number): number
    start(): void
    stop(): void
    onloaded(): void
    onunloaded(): void
    deconstruct(): void
    connect(dest?: AudioNode | AudioParam, output?: number, input?: number): void
    disconnect(dest: AudioNode | AudioParam, output?: number, input?: number): void
    getInputs(): AudioNode[]
    getOutputs(): AudioNode[]
    getParameterNames(): string[]
    getParameterByName(name: string): IPluginBaseParameter
    getParameterObject(): INestedPluginParameterObject
    setParameterByName(name: string, value: any, updateInterfaces?: boolean): void
    setParametersByObject(object: INestedPluginParameterObject, updateInterfaces?:boolean): void
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void
    isReadyPromise(): Promise<boolean>
    initialise?(): Promise<void>;
    loadingProgress$(): Observable<IBasePluginAssetLoadingProgress>
}
