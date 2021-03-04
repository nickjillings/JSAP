/*eslint-env browser */
/* jshint esversion:6 */

function PluginAsset(pluginAssetManager, id, name, url, image_url, pack, assetObject) {

    var self = this;
    function fetchAsset() {
        p = pluginAssetManager.fetchAssetFunction(self)
        .then(function(ab) {
            assetObject = ab;
            p = undefined;
            return self;
        });
    }

    var p;

    Object.defineProperties(this, {
        "id": {
            "value": id
        },
        "name": {
            "value": name
        },
        "url": {
            "value": url
        },
        "image_url": {
            "value": image_url
        },
        "pack": {
            "value": pack
        },
        "assetObject": {
            "get": function() {return assetObject;}
        },
        "fetch": {
            "value": function() {
                if (assetObject) {
                    return Promise.resolve(assetObject);
                } else if (p === undefined) {
                    fetchAsset();
                }
                return p;
            }
        },
        "fetched": {
            "get": function() {
                if (assetObject !== undefined || p !== undefined) {
                    return true;
                }
                return false;
            }
        },
        "then": {
            "value": function (onResolve, onReject) {
                if (assetObject !== undefined) {
                    return Promise.resolve(assetObject).then(onResolve, onReject);
                } else if (p === undefined) {
                    return Promise.reject().then(onResolve, onReject);
                }
                return p.then(promiseLike);
            }
        },
        "toJSON": {
            "value": function() {
                return {id: id, name: name, url: url};
            }
        },
        "toString": {
            "value": function() {
                return JSON.stringify(this.toJSON());
            }
        }
    });
}

export {PluginAsset};
