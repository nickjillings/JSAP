/*eslint-env browser */
/* jshint esversion:6 */

function PluginAsset(url, resourceType) {
    this.url = url;
    this.resourceType = resourceType;
}

function PluginAssetsList(factoryContext) {
    var assetObjects = [];
    function findAssetByUrl(url) {
        return assetUrl.find(function(asset) {
            return asset.url == url;
        });
    }
    this.addAssetUrlToList = function(url, resourceType) {
        if (typeof url != "string") {
            throw "addAssetUrlToList Argument-1 must be a type of string";
        }
        if (findAssetByUrl(url)) {
            throw "URL \""+url+"\" already in this list";
        }
        assetObjects.push(new PluginAsset(url, resourceType));
        return assetObjects;
    };
    this.removeAssetFromList = function(asset) {
        var index = assetUrl.findIndex(function(asset) {
            return asset.url == url;
        });
        if (index == -1) {
            throw "Asset not in this list";
        }
        assetUrls.splice(index, 1);
        return assetUrls;
    };
    this.removeAssetUrlFromList = function(url) {
        if (typeof url != "string") {
            throw "removeAssetUrlFromList Argument-1 must be a type of string";
        }
        var asset = findAssetByUrl(url);
        return this.removeAssetFromList(asset);
    };
    this.assetObjects = assetObjects;
}

export {PluginAssetsList};
