/*eslint-env browser */

import { IBasePlugin } from "../../BasePlugin/IBasePlugin";
import {PluginAssetManager} from "./PluginAssetManager";
import { PluginAssetsList } from "./PluginAssetsList";

/* jshint esversion:6 */
class PluginAsset {
    private assetCleanupId: number;
    private fetchPromise: Promise<AudioBuffer>
    private assetURL: URL
    private usedBy = new Set<IBasePlugin>();
    constructor(
        private pluginAssetManager: PluginAssetManager,
        public readonly id: number,
        public readonly name: string,
        url: string,
        public readonly image_url: string,
        public readonly pack:PluginAssetsList,
        private _assetObject?: AudioBuffer) 
    {
        this.assetURL = new URL(url, window.location.origin);
    }
    private abortScheduleForCleanup() {
        if (this.assetCleanupId !== undefined) {
            window.clearTimeout(this.assetCleanupId);
            this.assetCleanupId = undefined;
        }
    }
    private scheduleForCleanup() {
        if (this.assetCleanupId !== undefined) {
            return;
        }
        this.assetCleanupId = window.setTimeout(() => {
            this._assetObject === undefined;
            this.assetCleanupId = undefined;
        }, 10000);
    }
    private fetchAsset() {
        this.abortScheduleForCleanup();
        this.fetchPromise = this.pluginAssetManager.fetchAssetFunction(this)
        .then((ab) => {
            this._assetObject = ab;
            this.fetchPromise = undefined;
            return this._assetObject;
        });
    }
    public fetch(): Promise<AudioBuffer> {
        if (this._assetObject instanceof AudioBuffer) {
            return Promise.resolve(this._assetObject);
        } else if (this.fetchPromise === undefined) {
            this.fetchAsset();
        }
        return this.fetchPromise;
    }
    public toJSON() {
        return {asset: this.assetURL.pathname};
    }
    public toString() {
        return JSON.stringify(this.toJSON());
    }
    public registerToPlugin(plugin: IBasePlugin) {
        this.abortScheduleForCleanup();
        this.usedBy.add(plugin);
    }
    public deregisterFromPlugin(plugin: IBasePlugin) {
        this.usedBy.delete(plugin);
        if (this.usedBy.size === 0) {
            this.scheduleForCleanup();
        }
    }
    get url() {return this.assetURL.href;}
    get assetObject() { return this.assetObject;}
    get fetched() {
        return (this._assetObject instanceof AudioBuffer || this.fetchPromise !== undefined);
    }
}

export {PluginAsset};
