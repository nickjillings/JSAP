/* jshint esversion: 6 */
import {PluginParameter} from "./PluginParameter.js";
import {URLParameter} from "./URLParameter.js";

function AssetParameter(owner, name, defaultValue, visibleName, exposed) {
    PluginParameter.call(this, owner, name, "String", visibleName, exposed);
    var assetUrl = new URLParameter(this, name+" url", defaultValue);
    var onerrorCallback, onloadCallback;
    var audioBuffer, audioBufferPromise;

    function loadAsset() {
        audioBuffer = undefined;
        audioBufferPromise = assetUrl.getResource("arraybuffer").then(function(ab) {
            return owner.context.decodeAudioData(ab);
        }).then(function(buffer) {
            audioBuffer = buffer;
            if (onloadCallback) {
                onloadCallback(buffer);
            }
        }, function(e){
            if (onerrorCallback) {
                onerrorCallback(e);
            }
        });
        return audioBufferPromise;
    }

    function setValue(v, updateInterfaces) {
        assetUrl.setValue(v, updateInterfaces);
        this.trigger();
    }

    loadAsset();

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
        "type": {
            "value": "Asset"
        },
        "destroy": {
            "value": function () {
                assetUrl.destroy();
                owner = name = defaultValue = assetUrl = undefined;
            }
        },
        "defaultValue": {
            "value": defaultValue
        },
        "value": {
            "get": function () {
                return assetUrl.value;
            },
            "set": function (v) {
                var tv = assetUrl.value;
                setValue.call(this, v, true);
                if (assetUrl.value != tv) {
                    // asset has changed url.
                    loadAsset();
                }
                return assetUrl.value;
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
                return assetUrl.toString(v);
            }
        },
        "getParameterObject": {
            "value": function() {
                return {
                    value: assetUrl.value,
                    loaded: (audioBuffer !== undefined),
                    defaultValue: defaultValue,
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
