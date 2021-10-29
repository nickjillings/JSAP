import { PluginAssetsList } from "./PluginAssetsList";
import { PluginFactory } from "../PluginFactory";
import { PluginAsset } from "./PluginAsset";
export declare class PluginAssetManager {
    private readonly factoryContext;
    private assetFetchFunction;
    readonly assetPacks: PluginAssetsList[];
    constructor(factoryContext: PluginFactory);
    private findPackByName;
    addPackToList(id: number, name: string, image_url: string, resourceType: string): PluginAssetsList;
    removeAssetPackFromList(assetPack: PluginAssetsList): PluginAssetsList[];
    removeAssetPackFromListByName(name: string): PluginAssetsList[];
    importFromAssetLists(oldContext: PluginAssetManager): void;
    setDefaultAssetFetchFunction(func: (assetObject: PluginAsset) => Promise<ArrayBuffer>): void;
    fetchAssetFunction(assetObject: PluginAsset): Promise<AudioBuffer>;
    getAllAssets(): PluginAsset[];
    getAllAssetsByResourceType(resourceType?: string): PluginAsset[];
    findAssetByUrl(url: string): PluginAsset;
    findAssetById(id: number): PluginAsset;
    destroy(): void;
}
