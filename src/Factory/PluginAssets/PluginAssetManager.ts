/*eslint-env browser */
/* jshint esversion:6 */

import {PluginAssetsList} from "./PluginAssetsList";
import {fetchAssetAsArrayBuffer} from "./defaultAssetFetch";
import { PluginFactory } from "../PluginFactory";
import { PluginAsset } from "./PluginAsset";

export { PluginAssetsList, PluginAsset };

function findPackByName(assetPackList, name) {
    return assetPackList.find(function(l) {
        return l.name == name;
    });
}

export class PluginAssetManager {
    private assetFetchFunction = fetchAssetAsArrayBuffer;
    public readonly assetPacks: PluginAssetsList[] = []
    constructor(private readonly factoryContext: PluginFactory) {

    }
    private findPackByName(name:string) {
        return this.assetPacks.find(l => l.name == name);
    }
    public addPackToList(id: number, name: string, image_url: string, resourceType: string) {
        if (typeof name != "string") {
            throw new Error("addAssetUrlToList Argument-1 must be a type of string");
        }
        if (this.findPackByName(name)) {
            throw new Error(`Pack with name ${name} already in this list`);
        }
        const assetPack = new PluginAssetsList(this, id, name, image_url, resourceType);
        this.assetPacks.push(assetPack);
        return assetPack;
    }
    public removeAssetPackFromList(assetPack: PluginAssetsList) {
        const index = this.assetPacks.indexOf(assetPack);
        if (index == -1) {
            return this.assetPacks;
        }
        this.assetPacks.splice(index, 1);
        return this.assetPacks;
    }
    public removeAssetPackFromListByName(name: string) {
        if (typeof name != "string") {
            throw "removeAssetUrlFromList Argument-1 must be a type of string";
        }
        const asset = this.findPackByName(name);
        return this.removeAssetPackFromList(asset);
    }
    public importFromAssetLists(oldContext: PluginAssetManager) {
        oldContext.assetPacks.forEach((originalAssetPack) =>  {
            const newContextPack = this.addPackToList(originalAssetPack.id, originalAssetPack.name, originalAssetPack.image_url, originalAssetPack.resourceType);
            originalAssetPack.assetObjects.forEach((originalAsset) =>{
                let assetObject: AudioBuffer;
                if (originalAsset.assetObject !== undefined) {
                    assetObject = this.factoryContext.context.createBuffer(originalAsset.assetObject.numberOfChannels, originalAsset.assetObject.length, originalAsset.assetObject.sampleRate);
                    for (var i = 0; i < assetObject.numberOfChannels; i++) {
                        assetObject.copyToChannel(originalAsset.assetObject.getChannelData(i), i, 0);
                    }
                }
                //id, name, url, image_url, assetObject
                newContextPack.addAssetUrlToList(originalAsset.id, originalAsset.name, originalAsset.url, originalAsset.image_url, assetObject);
            });
        });
    }
    public setDefaultAssetFetchFunction(func: (assetObject: PluginAsset) => Promise<ArrayBuffer>) {
        if (typeof func === "function") {
            this.assetFetchFunction = func;
        }
    }
    public async fetchAssetFunction(assetObject: PluginAsset): Promise<AudioBuffer> {
        const ab = await this.assetFetchFunction(assetObject);
        return await this.factoryContext.context.decodeAudioData(ab);
    }
    public getAllAssets(): PluginAsset[] {
        return this.assetPacks.map(l => l.assetObjects).flat();
    }
    public getAllAssetsByResourceType(resourceType?: string): PluginAsset[] {
        if (typeof resourceType == "string" && resourceType.length > 0) {
            return this.assetPacks.filter((list) => list.resourceType == resourceType).map(l => l.assetObjects).flat();
        } else {
            return this.getAllAssets();
        }
    }
    public findAssetByUrl(url: string) {
        const fullUrl = new URL(url, window.location.origin);
        return this.getAllAssets().find((asset) => {
            const assetFullUrl = new URL(asset.url, window.location.origin);
            return (fullUrl.hostname === assetFullUrl.hostname && fullUrl.pathname === assetFullUrl.pathname);
        });
    }
    public findAssetById(id: number) {
        return this.getAllAssets().find((asset) => asset.id === id);
    }
    public destroy() {
        this.assetFetchFunction = undefined;
    }
}
