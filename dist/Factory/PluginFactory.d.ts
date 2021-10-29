import { LinkedStore } from '../LinkedStore';
import { PluginAsset, PluginAssetManager, PluginAssetsList } from './PluginAssets/PluginAssetManager';
import { IPluginPrototype, IPluginPrototypeConstructor, PluginPrototype, SynthesiserPrototype } from "./PluginPrototype";
import { FeatureMap } from "./FeatureMap/index";
import { AudioPluginChainManager } from "./AudioPluginChainManager/index";
import { MidiSynthesiserHost } from "./MidiSynthesiserHost";
import { PluginUserInterfaceMessageHub } from "./PluginUserInterfaceMessageHub";
import { IPluginInstance } from './IPluginInstance';
import { IPluginHost } from './IPluginHost';
import { IBasePlugin } from '../BasePlugin/IBasePlugin';
import { isPluginInstance, PluginInstance } from './PluginInstance';
import { isMidiSynthesisInstance } from './MidiSynthesisInstance';
export { PluginAssetsList, PluginAsset, IPluginPrototype, IPluginPrototypeConstructor, PluginPrototype, SynthesiserPrototype, FeatureMap, AudioPluginChainManager, MidiSynthesiserHost, PluginUserInterfaceMessageHub, IPluginInstance, IPluginHost, isPluginInstance, PluginInstance, isMidiSynthesisInstance };
interface JSAPResourceObject {
    url: string;
    test: () => boolean;
    type: string;
    returnObject: string;
}
export declare class PluginFactory {
    context: AudioContext;
    private rootURL?;
    private plugin_prototypes;
    private audioPluginChainManagers;
    private synthesiserHosts;
    private pluginsList;
    private audioStartProgramTime;
    private audioStartContextTime;
    private audioStarted;
    private PluginGUI;
    private stores;
    SessionData: LinkedStore;
    UserData: LinkedStore;
    FeatureMap: FeatureMap;
    pluginAssets: PluginAssetManager;
    constructor(context: AudioContext, rootURL?: string);
    private copyFactory;
    private pluginAudioStart;
    private pluginAudioStop;
    private triggerAudioStart;
    private triggerAudioStop;
    destroyFactory(): void;
    loadPrototypeModule(resourceObject: JSAPResourceObject, mustModule?: boolean): Promise<IPluginPrototype<IPluginInstance<IPluginHost>, IPluginHost>>;
    loadResource(resourceObject: JSAPResourceObject): Promise<IPluginPrototypeConstructor>;
    loadPluginScript(resourceObject: JSAPResourceObject): Promise<IPluginPrototype<IPluginInstance<IPluginHost>, IPluginHost>>;
    injectPrototype(prototypeExecutable: IBasePlugin, name: string, version: string, uniqueID: string): IPluginPrototype<IPluginInstance<IPluginHost>, IPluginHost>;
    addPrototype(plugin_proto: IPluginPrototypeConstructor, name: string, version: string, uniqueID: string, hasMidiInput?: boolean, hasMidiOutput?: boolean): IPluginPrototype<IPluginInstance<IPluginHost>, IPluginHost>;
    deletePrototype(plugin_proto: IPluginPrototype<IPluginInstance<IPluginHost>, IPluginHost>): void;
    getPrototypes(): IPluginPrototype<IPluginInstance<IPluginHost>, IPluginHost>[];
    getAudioPluginPrototypes(): IPluginPrototype<IPluginInstance<IPluginHost>, IPluginHost>[];
    getMidiSynthPrototypes(): IPluginPrototype<IPluginInstance<IPluginHost>, IPluginHost>[];
    getMidiPluginPrototypes(): IPluginPrototype<IPluginInstance<IPluginHost>, IPluginHost>[];
    getAllPlugins(): IPluginInstance<IPluginHost>[];
    getAllPluginsObject(): {
        factory: PluginFactory;
        audioPluginChainManagers: {
            subFactory: AudioPluginChainManager;
            plugins: PluginInstance[];
        }[];
    };
    createAudioPluginChainManager(chainStart: AudioNode, chainStop: AudioNode): AudioPluginChainManager;
    duplicateAudioPluginChainManager(sourceChainManager: AudioPluginChainManager, chainStart: AudioNode, chainStop: AudioNode): Promise<AudioPluginChainManager>;
    destroyAudioPluginChainManager(SubFactory: AudioPluginChainManager): void;
    createMidiSynthesiserHost(factory: PluginFactory): MidiSynthesiserHost;
    destroyMidiSynthesiserHost(host: MidiSynthesiserHost): void;
    registerPluginInstance(instance: IPluginInstance<IPluginHost>): boolean;
    deletePlugin(plugin: IPluginInstance<IPluginHost>): void;
    getCurrentProgramTime(): number;
    setCurrentProgramTime(time: number): void;
    audioStart(program_time: number, context_time: number): void;
    audioStop(): void;
    createStore(storeName: string): LinkedStore;
    getStores(): LinkedStore[];
    findStore(storeName: string): LinkedStore;
    createFactoryCopy(context: AudioContext): Promise<PluginFactory>;
    get hasAudioStarted(): boolean;
    get pluginRootURL(): string;
    set pluginRootURL(t: string);
    get subFactories(): AudioPluginChainManager[];
}