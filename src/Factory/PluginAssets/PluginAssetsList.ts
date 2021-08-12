/*eslint-env browser */
/* jshint esversion:6 */

import {PluginAsset} from "./PluginAsset";
import { PluginAssetManager } from "./PluginAssetManager";

class PluginAssetsList {
    public readonly assetObjects: PluginAsset[] = [];
    constructor(
        private readonly pluginAssetManager: PluginAssetManager,
        public readonly id: number,
        public readonly name: string,
        public readonly image_url: string,
        public readonly resourceType: string
    ) { }
    private findAssetByUrl(url: string) {
        return this.assetObjects.find((asset) => {
            return asset.url == url;
        });
    }
    public addAssetUrlToList(id: number, name: string, url: string, image_url: string, assetObject?: AudioBuffer) {
        if (typeof url != "string") {
            throw new Error ("addAssetUrlToList Argument-2 must be a type of string");
        }
        if (this.findAssetByUrl(url)) {
            throw new Error(`URL ${url} already in this list`);
        }
        this.assetObjects.push(new PluginAsset(this.pluginAssetManager, id, name, url, image_url, this, assetObject));
        return this.assetObjects;
    }
    public removeAssetFromList(asset: PluginAsset) {
        const index = this.assetObjects.findIndex((listObjects) => asset.url == listObjects.url);
        if (index == -1) {
            throw new Error ("Asset not in this list");
        }
        this.assetObjects.splice(index, 1);
        return this.assetObjects;
    }
    public removeAssetUrlFromList(url: string) {
        if (typeof url != "string") {
            throw new Error("removeAssetUrlFromList Argument-1 must be a type of string");
        }
        const asset = this.findAssetByUrl(url);
        return this.removeAssetFromList(asset);
    };
}

export {PluginAssetsList};
