/* jshint esversion: 6 */

export default function AssetPackSelectorInterface(plugin, factory, parameterName, visibleName, exposed) {
    var availablePacks = factory.pluginAssets.assetPacks;
    var packSelector = factory.pluginAssets.createAssetPackSelector(plugin, availablePacks[0]);
    var listParameter = plugin.parameters.createListParameter(parameterName, availablePacks[0], availablePacks, function(v) {return v.name;}, visibleName, exposed);
    listParameter.trigger = function() {
        packSelector.selectPack(listParameter.value);
    };

    Object.defineProperties(this, {
        "parameter": {
            "value": listParameter
        },
        "availablePacks": {
            "value": availablePacks
        },
        "selectPack": {
            "value": function(pack) {
                return (listParameter.value = pack);
            }
        },
        "selectedPack": {
            "get": function () {return listParameter.value;}
        },
        "loadAssets": {
            "value": packSelector.loadAssets
        },
        "allAssetsLoaded": {
            "value": packSelector.allAssetsLoaded
        },
        "fetchAssetByName": {
            "value": packSelector.fetchAssetByName
        },
        "waitForAssets": {
            "value": packSelector.waitForAssets
        },
        "onload": {
            "get": function() {return packSelector.onload;},
            "set": function(f) {return (packSelector.onload = f);}
        },
        "onerror": {
            "get": function() {return packSelector.onerror;},
            "set": function(f) {return (packSelector.onerror = f);}
        }
    });
}
