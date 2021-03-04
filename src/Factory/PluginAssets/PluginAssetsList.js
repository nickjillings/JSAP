/*eslint-env browser */
/* jshint esversion:6 */

import {PluginAsset} from "./PluginAsset.js";

function PluginAssetsList(pluginAssetManager, id, name, image_url, resourceType) {
    var assetObjects = [];
    function findAssetByUrl(url) {
        return assetObjects.find(function(asset) {
            return asset.url == url;
        });
    }
    this.addAssetUrlToList = function(id, name, url, image_url, assetObject) {
        if (typeof url != "string") {
            throw "addAssetUrlToList Argument-2 must be a type of string";
        }
        if (findAssetByUrl(url)) {
            throw "URL \""+url+"\" already in this list";
        }
        assetObjects.push(new PluginAsset(pluginAssetManager, id, name, url, image_url, this, assetObject));
        return assetObjects;
    };
    this.removeAssetFromList = function(asset) {
        var index = assetObjects.findIndex(function(listObjects) {
            return asset.url == listObjects.url;
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
    this.id = id;
    this.image_url = image_url;
}

export {PluginAssetsList};
