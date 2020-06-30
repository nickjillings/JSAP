/*eslint-env browser */
/* jshint esversion:6 */

import {PluginAsset} from "./PluginAsset.js";

function PluginAssetsList(factoryContext, name, resourceType) {
    var assetObjects = [];
    function findAssetByUrl(url) {
        return assetObjects.find(function(asset) {
            return asset.url == url;
        });
    }
    this.addAssetUrlToList = function(name, url, assetObject) {
        if (typeof url != "string") {
            throw "addAssetUrlToList Argument-1 must be a type of string";
        }
        if (findAssetByUrl(url)) {
            throw "URL \""+url+"\" already in this list";
        }
        assetObjects.push(new PluginAsset(factoryContext, name, url, assetObject));
        return assetObjects;
    };
    this.removeAssetFromList = function(asset) {
        var index = assetObjects.findIndex(function(asset) {
            return asset.url == url;
        });
        if (index == -1) {
            throw "Asset not in this list";
        }
        assetObjects.splice(index, 1);
        return assetObjects;
    };
    this.removeAssetUrlFromList = function(url) {
        if (typeof url != "string") {
            throw "removeAssetUrlFromList Argument-1 must be a type of string";
        }
        var asset = findAssetByUrl(url);
        return this.removeAssetFromList(asset);
    };
    this.assetObjects = assetObjects;
    this.name = name;
    this.resourceType = resourceType;
}

export {PluginAssetsList};
