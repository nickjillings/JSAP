/*eslint-env browser */
/* jshint esversion:6 */

function PluginAsset(factoryContext, id, name, url, image_url, pack, assetObject) {

    var self = this;
    function fetchAsset() {
        p = fetch(url).then(function(r) {
            return r.arrayBuffer();
        }).then(function(ab) {
            return factoryContext.context.decodeAudioData(ab);
        }).then(function(ab) {
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
