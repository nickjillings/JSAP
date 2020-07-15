/* jshint esversion: 6 */

import RequestorMap from "./RequestorMap";

export default function SourceMap(Sender, pluginInstace) {
    var Mappings = [];
    this.getSourceInstance = function () {
        return pluginInstace;
    };
    this.getSender = function () {
        return Sender;
    };

    function findFeatureObject(featureObject) {
        return Mappings.find(function (e) {
            return (e.outputIndex === this.outputIndex && e.frameSize === this.frameSize);
        }, featureObject);
    }

    function updateSender() {
        function recursiveFind(featureList) {
            var f, list = [];
            for (f = 0; f < featureList.length; f++) {
                var featureNode = getFeatureNode(list, featureList[f]);
                if (!featureNode || (featureList.parameters && featureList[f].parameters.length !== 0)) {
                    featureNode = addFeatureNode(featureList[f], list);
                }
                if (featureList[f].features && featureList[f].features.length > 0) {
                    featureNode.features = recursiveFind(featureList[f].features);
                }
            }
            return list;
        }
        var i, outputList = [];
        for (i = 0; i < Mappings.length; i++) {
            if (outputList[Mappings[i].outputIndex] === undefined) {
                outputList[Mappings[i].outputIndex] = [];
            }
            var frameList = outputList[Mappings[i].outputIndex].find(function (e) {
                return e.frameSize === this.frameSize;
            }, Mappings[i]);
            if (!frameList) {
                frameList = {
                    'frameSize': Mappings[i].frameSize,
                    'featureList': undefined
                };
                outputList[Mappings[i].outputIndex].push(frameList);
            }
            frameList.featureList = recursiveFind(Mappings[i].getFeatureList());
        }
        Sender.updateFeatures(outputList);
    }

    this.requestFeatures = function (requestorInstance, featureObject) {
        var map = findFeatureObject(featureObject);
        if (!map) {
            map = {
                'outputIndex': featureObject.outputIndex,
                'frameSize': featureObject.frameSize,
                'requestors': [],
                'getFeatureList': function () {
                    var F = [],
                        i;
                    for (i = 0; i < this.requestors.length; i++) {
                        F = F.concat(this.requestors[i].getFeatureList());
                    }
                    return F;
                }
            };
            Mappings.push(map);
        }
        var requestor = map.requestors.find(function (e) {
            return e.getRequestorInstance() === this;
        }, requestorInstance);
        if (!requestor) {
            requestor = new RequestorMap(requestorInstance);
            map.requestors.push(requestor);
        }
        requestor.addFeatures(featureObject);
        updateSender();
    };

    this.findFrameMap = function (outputIndex, frameSize) {
        return Mappings.find(function (e) {
            return (e.outputIndex === outputIndex && e.frameSize === frameSize);
        });
    };

    this.cancelFeatures = function (requestorInstance, featureObject) {
        if (featureObject === undefined) {
            Mappings.forEach(function (map) {
                var requestorIndex = map.requestors.findIndex(function (e) {
                    return e.getRequestorInstance() === requestorInstance;
                });
                if (requestorIndex >= 0) {
                    map.requestors.splice(requestorIndex, 1);
                }
            });
        } else {
            var map = findFeatureObject(featureObject);
            if (!map) {
                return;
            }
            var requestor = map.requestors.find(function (e) {
                return e.getRequestorInstance() === this;
            }, requestorInstance);
            if (!requestor) {
                return;
            }
            requestor.deleteFeatures(featureObject);
        }
        updateSender();
    };
}
