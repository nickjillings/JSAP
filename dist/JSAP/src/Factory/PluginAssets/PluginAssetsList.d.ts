import { PluginAsset } from "./PluginAsset";
import { PluginAssetManager } from "./PluginAssetManager";
declare class PluginAssetsList {
    private readonly pluginAssetManager;
    readonly id: number;
    readonly name: string;
    readonly image_url: string;
    readonly resourceType: string;
    readonly assetObjects: PluginAsset[];
    constructor(pluginAssetManager: PluginAssetManager, id: number, name: string, image_url: string, resourceType: string);
    private findAssetByUrl;
    addAssetUrlToList(id: number, name: string, url: string, image_url: string, assetObject?: AudioBuffer): PluginAsset[];
    removeAssetFromList(asset: PluginAsset): PluginAsset[];
    removeAssetUrlFromList(url: string): PluginAsset[];
}
export { PluginAssetsList };
