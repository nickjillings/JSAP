import { IBasePlugin } from "../../BasePlugin/IBasePlugin";
import { PluginAssetManager } from "./PluginAssetManager";
import { PluginAssetsList } from "./PluginAssetsList";
declare class PluginAsset {
    private pluginAssetManager;
    readonly id: number;
    readonly name: string;
    readonly image_url: string;
    readonly pack: PluginAssetsList;
    private _assetObject?;
    private assetCleanupId;
    private fetchPromise;
    private assetURL;
    private usedBy;
    constructor(pluginAssetManager: PluginAssetManager, id: number, name: string, url: string, image_url: string, pack: PluginAssetsList, _assetObject?: AudioBuffer);
    private abortScheduleForCleanup;
    private scheduleForCleanup;
    private fetchAsset;
    fetch(): Promise<AudioBuffer>;
    toJSON(): {
        asset: string;
    };
    toString(): string;
    registerToPlugin(plugin: IBasePlugin): void;
    deregisterFromPlugin(plugin: IBasePlugin): void;
    get url(): string;
    get assetObject(): any;
    get fetched(): boolean;
}
export { PluginAsset };
