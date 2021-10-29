import { PluginAsset } from "../../Factory/PluginAssets/PluginAsset";
import { IBasePlugin } from "../IBasePlugin";
import { PluginParameter } from "./PluginParameter";
interface AssetSelectionObject {
    id?: number;
    asset?: string;
}
export declare class AssetParameter extends PluginParameter<PluginAsset> {
    private selectedAsset;
    private audioBuffer;
    private onloadCallback;
    private onerrorCallback;
    private loadAssetPromise;
    constructor(owner: IBasePlugin, name: string, visibleName?: string, exposed?: boolean);
    private loadAsset;
    setValue(v: PluginAsset | AssetSelectionObject | string | number, updateInterfaces?: boolean): PluginAsset;
    destroy(): void;
    getResource(): Promise<AssetParameter>;
    toString(): string;
    getParameterObject(): {
        value: {
            asset: string;
        };
        loaded: boolean;
        visibleName: string;
        type: string;
        name: string;
    };
    get onload(): (buffer: AudioBuffer) => void;
    set onload(f: (buffer: AudioBuffer) => void);
    get onerror(): (e: Error) => void;
    set onerror(f: (e: Error) => void);
    get isReadyPromise(): Promise<AssetParameter>;
    get type(): string;
    get buffer(): AudioBuffer;
    get value(): number;
    set value(v: number);
}
export {};
