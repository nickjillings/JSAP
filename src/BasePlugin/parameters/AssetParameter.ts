/* jshint esversion: 6 */
import { IPluginHost } from "../../Factory/IPluginHost";
import {
    PluginAsset
} from "../../Factory/PluginAssets/PluginAsset";
import { IBasePlugin } from "../IBasePlugin";
import {
    PluginParameter
} from "./PluginParameter";
interface AssetSelectionObject {
    id ? : number
    asset ? : string
}
export class AssetParameter extends PluginParameter < PluginAsset > {
    private selectedAsset: PluginAsset;
    private audioBuffer: AudioBuffer;
    private onloadCallback: (buffer: AudioBuffer) => void
    private onerrorCallback: (e: Error) => void
    private loadAssetPromise: Promise < AssetParameter >

    constructor(owner: IBasePlugin, name: string, visibleName ? : string, exposed = true) {
        super(owner, name, "String", visibleName, exposed);
    }
    private loadAsset() {
        this.loadAssetPromise = this.selectedAsset.fetch()
            .then((buffer: AudioBuffer) => {
                this.audioBuffer = buffer;
                this.selectedAsset.registerToPlugin(this.owner);
                if (typeof this.onloadCallback == "function") {
                    this.onloadCallback(buffer);
                }
                return this;
            }, (e: Error) => {
                if (typeof this.onerrorCallback == "function") {
                    this.onerrorCallback(e);
                }
                return this;
            });
        return this.loadAssetPromise;
    }
    public setValue(v: PluginAsset | AssetSelectionObject | string | number, updateInterfaces = true) {
        let newSelectedAsset: PluginAsset;
        if (v instanceof PluginAsset) {
            newSelectedAsset = v;
        } else if (typeof v === "string" || typeof v === "number") {
            newSelectedAsset = this.owner.factory.pluginAssets.findAssetById(Number(v));
            if (newSelectedAsset === undefined) {
                newSelectedAsset = this.owner.factory.pluginAssets.findAssetByUrl(v.toString());
            }
        } else {
            if (v.hasOwnProperty('asset')) {
                newSelectedAsset = this.owner.factory.pluginAssets.findAssetByUrl(v.asset);
            } else if (v.hasOwnProperty('id')) {
                newSelectedAsset = this.owner.factory.pluginAssets.findAssetById(v.id)
            }
        }
        if (newSelectedAsset === undefined) {
            console.warn("No asset given, ", v);
            return this.selectedAsset;
        }
        if (this.selectedAsset === undefined || this.selectedAsset.id != newSelectedAsset.id) {
            // asset has changed url.
            if (this.selectedAsset !== undefined) {
                this.selectedAsset.deregisterFromPlugin(this.owner);
            }
            this.selectedAsset = newSelectedAsset;
            this.loadAsset();
            this.triggerParameterSet(updateInterfaces);
        }
        this.trigger();
        return this.selectedAsset;
    }
    public destroy() {

    }
    public getResource() {
        if (this.loadAssetPromise) {
            return this.loadAssetPromise;
        } else {
            return this.loadAsset();
        }
    }
    public toString() {
        return this.selectedAsset.toString();
    }
    public getParameterObject() {
        return {
            value: this.selectedAsset ? this.selectedAsset.toJSON() : undefined,
            loaded: (this.audioBuffer !== undefined),
            visibleName: this.name,
            type: "AssetParameter",
            name: this.name
        };
    }
    get onload() {
        return this.onloadCallback;
    }
    set onload(f: (buffer: AudioBuffer) => void) {
        this.onloadCallback = f;
    }
    get onerror() {
        return this.onerrorCallback;
    }
    set onerror(f: (e: Error) => void) {
        this.onerrorCallback = f;
    }
    get isReadyPromise() {
        return this.loadAssetPromise;
    }
    get type() {
        return `Asset`
    }
    get buffer() {
        return this.audioBuffer
    }
    get value() {
        if (this.selectedAsset) {
            return this.selectedAsset.id;
        } else {
            return undefined;
        }
    }
    set value(v) {
        this.setValue(v, true);
    }

}