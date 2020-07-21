/* jshint esversion: 6 */

function AssetPackSelector(plugin, assetPackManager, pack) {

    function fetchAssets(self, assetsList) {
        return Promise.all(assetsList.map(asset => asset.fetch()))
        .then(function() {
            if (typeof onload == "function") {
                onload.call(self);
            }
        }, function() {
            if (typeof onerror == "function") {
                onerror.call(self);
            }
        });
    }

    function fetchAllAssets(self) {
        return fetchAssets(self, pack.assetObjects);
    }

    this.selectPack = function(pack) {
        if (assetPackManager.includes(assetPacks)) {
            pack = assetPacks;
        } else {
            throw("Pack not in factory asset packs");
        }
    };

    this.allAssetsLoaded = function () {
        return pack.assetObjects.every(asset => asset.assetObject !== undefined);
    };

    this.fetchAssetByName = function(name) {
        if (pack === undefined || pack.assetObjects == undefined) {
            throw("Pack not defined");
        }
        var asset = pack.assetObjects.find(asset => name == asset.name);
        if (asset) {
            return asset.fetch();
        } else {
            throw ("Asset with name "+String(name)+" does not exist in this pack");
        }
    };

    Object.defineProperties(this, {
        "pack": {
            "get": function () {return pack;}
        },
        "loadAssets": {
            "value": function (assetsList) {
                if (assetsList == undefined) {
                    assetsList = pack.assetObject;
                }
                var allInPack = assetsList.every(function(asset) {
                    pack.assetObject.includes(asset);
                });
                if (!allInPack) {
                    return Promise.reject("Not all given assets are in this pack");
                }
                return fetchAssets(this, assetsList);
            }
        },
        "onload": {
            "get": function() { return onload; },
            "set": function(f) {
                if (typeof f == "function" || f === undefined) {
                    onload = f;
                } else {
                    throw "Must be a function or undefined";
                }
            }
        },
        "onerror": {
            "get": function() { return onload; },
            "set": function(f) {
                if (typeof f == "function" || f === undefined) {
                    onerror = f;
                } else {
                    throw "Must be a function or undefined";
                }
            }
        }
    });
}

export default AssetPackSelector;
