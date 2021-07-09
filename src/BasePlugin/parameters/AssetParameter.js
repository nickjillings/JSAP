/* jshint esversion: 6 */
import {PluginParameter} from "./PluginParameter.js";
import {ListParameter} from "./ListParameter.js";

function AssetParameter(owner, name, visibleName, exposed) {
    PluginParameter.call(this, owner, name, "String", visibleName, exposed);
    var selectedAsset, audioBuffer, onloadCallback, onerrorCallback, loadAssetPromise;

    function loadAsset() {
        loadAssetPromise = selectedAsset.fetch()
        .then(function(buffer) {
            audioBuffer = buffer;
            selectedAsset.registerToPlugin(owner);
            if (typeof onloadCallback == "function") {
                onloadCallback(buffer);
            }
        }, function(e){
            if (typeof onerrorCallback == "function") {
                onerrorCallback(e);
            }
        });
    }

    function setValue(v, updateInterfaces) {
        if (typeof v !== "object") {
            v = owner.factory.pluginAssets.findAssetById(v);
            if (v === undefined) {
                v = owner.factory.pluginAssets.findAssetByUrl(v);
            }
        } else {
            if (v.hasOwnProperty('asset')) {
                v = owner.factory.pluginAssets.findAssetByUrl(v.asset);
            } else if (v.hasOwnProperty('id')){
                v = owner.factory.pluginAssets.findAssetById(v.id)
            }
        }
        if (v === undefined) {
            console.warn("No asset given, ", v);
            return selectedAsset;
        }
        if (selectedAsset === undefined || selectedAsset.id != v.id) {
            // asset has changed url.
            if (selectedAsset !== undefined) {
                selectedAsset.deregisterFromPlugin(owner);
            }
            selectedAsset = v;
            loadAsset();
            this.triggerParameterSet(updateInterfaces);
        }
        this.trigger();
        return selectedAsset;
    }

    Object.defineProperties(this, {
        "onload": {
            "get": function () {
                return onloadCallback;
            },
            "set": function(f) {
                if (typeof f != "function") {
                    throw("AssetParameter::onload requires a function with one argument to be set");
                } else {
                    onloadCallback = f;
                    if (audioBuffer) {
                        onloadCallback(audioBuffer);
                    }
                    return onloadCallback;
                }
            }
        },
        "onerror": {
            "get": function () {
                return onerrorCallback;
            },
            "set": function(f) {
                if (typeof f != "function") {
                    throw("AssetParameter::onerror requires a function with one argument to be set");
                } else {
                    onerrorCallback = f;
                    return onerrorCallback;
                }
            }
        },
        "isReadyPromise": {
            "get": function () {return loadAssetPromise;},
            "set": function() {throw("Cannot set readonly property isReadyPromise");}
        },
        "type": {
            "value": "Asset"
        },
        "destroy": {
            "value": function () {
                owner = name = defaultValue = selectedAsset = undefined;
            }
        },
        "value": {
            "get": function () {
                if (selectedAsset) {
                    return selectedAsset.id;
                } else {
                    return undefined;
                }
            },
            "set": function (v) {
                setValue.call(this, v, true);
                return selectedAsset.id;
            }
        },
        "setValue": {
            "value": function(v, updateInterfaces) {
                return setValue.call(this, v, updateInterfaces);
            }
        },
        "getResource": {
            "value": function() {
                if (audioBufferPromise) {
                    return audioBufferPromise;
                } else {
                    return loadAsset();
                }
            }
        },
        "buffer": {
            "get": function() {return audioBuffer;}
        },
        "toString": {
            "value": function(v) {
                return selectedAsset.toString();
            }
        },
        "getParameterObject": {
            "value": function() {
                return {
                    value: selectedAsset ? selectedAsset.toJSON() : undefined,
                    loaded: (audioBuffer !== undefined),
                    visibleName: name,
                    type: "AssetParameter",
                    name: name
                };
            }
        }
    });
}
AssetParameter.prototype = Object.create(PluginParameter.prototype);
AssetParameter.prototype.constructor = AssetParameter;

export {AssetParameter};
