/*eslint-env browser */
/* jshint esversion:6 */

function PluginAsset(pluginAssetManager, id, name, url, image_url, pack, assetObject) {

    var self = this;
    const assetURL = new URL(url, window.location.origin);
    const usedBy = new Set();
    let assetCleanupId;

    function fetchAsset() {
        abortScheduleForCleanup();
        p = pluginAssetManager.fetchAssetFunction(self)
        .then(function(ab) {
            assetObject = ab;
            p = undefined;
            return self;
        });
    }

    function abortScheduleForCleanup() {
        if (assetCleanupId !== undefined) {
            window.clearTimeout(assetCleanupId);
            assetCleanupId = undefined;
        }
    }

    function scheduleForCleanup() {
        if (assetCleanupId !== undefined) {
            return;
        }
        assetCleanupId = window.setTimeout(() => {
            assetObject === undefined;
            assetCleanupId = undefined;
        }, 10000);
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
            "value": assetURL.href
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
                return {asset: assetURL.pathname};
            }
        },
        "toString": {
            "value": function() {
                return JSON.stringify(this.toJSON());
            }
        },
        "registerToPlugin": {
            "value": function(plugin) {
                abortScheduleForCleanup();
                usedBy.add(plugin);
            }
        },
        "deregisterFromPlugin": {
            "value": function(plugin) {
                usedBy.delete(plugin);
                if (usedBy.size === 0) {
                    scheduleForCleanup();
                }
            }
        }
    });
}

export {PluginAsset};
