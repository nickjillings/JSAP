import { PluginAsset } from "./PluginAsset";

export async function fetchAssetAsArrayBuffer(assetObject: PluginAsset) {
    const r = await fetch(assetObject.url);
    return await r.arrayBuffer();
}
