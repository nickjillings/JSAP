/*eslint-env browser */
/* jshint esversion:6 */

import {PluginAssetsList} from "./PluginAssetsList";
import AssetPackSelector from "./AssetPackSelector";

function findPackByName(assetPackList, name) {
    return assetPackList.find(function(l) {
        return l.name == name;
    });
}

function PluginAssetManager(factoryContext) {
    var assetPackList = [];
    this.addPackToList = function(id, name, image_url, resourceType) {
        if (typeof name != "string") {
            throw "addAssetUrlToList Argument-1 must be a type of string";
        }
        if (findPackByName(assetPackList, name)) {
            throw "Pack with name \""+name+"\" already in this list";
        }
        var assetPack = new PluginAssetsList(factoryContext, id, name, image_url, resourceType);
        assetPackList.push(assetPack);
        return assetPack;
    };
    this.removeAssetPackFromList = function(assetPack) {
        var index = assetPackList.indexOf(assetPack);
        if (index == -1) {
            throw "Asset pack not in this list";
        }
        assetPackList.splice(index, 1);
        return assetPackList;
    };
    this.removeAssetPackFromListByName = function(name) {
        if (typeof name != "string") {
            throw "removeAssetUrlFromList Argument-1 must be a type of string";
        }
        var asset = findPackByName(assetPackList, name);
        return this.removeAssetFromList(asset);
    };
    this.importFromAssetLists = function(oldContext) {
        oldContext.assetPacks.forEach(function(originalAssetPack) {
            var newContextPack = this.addPackToList(originalAssetPack.id, originalAssetPack.name, originalAssetPack.image_url, originalAssetPack.resourceType);
            originalAssetPack.assetObjects.forEach(function(originalAsset) {
                var assetObject;
                if (originalAsset.assetObject !== undefined) {
                    assetObject = factoryContext.context.createBuffer(originalAsset.assetObject.numberOfChannels, originalAsset.assetObject.length, originalAsset.assetObject.sampleRate);
                    for (var i = 0; i < assetObject.numberOfChannels; i++) {
                        assetObject.copyToChannel(originalAsset.assetObject.getChannelData(i), i, 0);
                    }
                }
                //id, name, url, image_url, assetObject
                this.addAssetUrlToList(originalAsset.id, originalAsset.name, originalAsset.url, originalAsset.image_url, assetObject);
            }, newContextPack);
        }, this);
    };

    this.getAllAssets = function () {
        return assetPackList.map(function(l) { return l.assetObjects;} ).flat();
    }

    this.getAllAssetsByResourceType = function(resourceType) {
        if (typeof resourceType == "string" && resourceType.length > 0) {
            return assetPackList.filter(function(list) {
                return list.resourceType == resourceType;
            }).map(function(l) { return l.assetObjects;} ).flat();
        } else {
            return this.getAllAssets();
        }
    }

    this.findAssetByUrl = function(url) {
        return this.getAllAssets().find(function(asset) {
            return asset.url === url;
        });
    }

    this.findAssetById = function(id) {
        return this.getAllAssets().find(function(asset) {
            return asset.id === id;
        });
    }
    
    this.assetPacks = assetPackList;
}

export default PluginAssetManager;
