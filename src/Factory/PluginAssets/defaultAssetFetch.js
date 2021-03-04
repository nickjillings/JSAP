
export function fetchAssetAsArrayBuffer(assetObject) {
    return fetch(assetObject.url).then(function(r) {
        return r.arrayBuffer();
    });
}
