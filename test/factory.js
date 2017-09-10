/*
    Test of the PluginFactory interfaces
*/

const http = require('http')
const port = 3000

function requestHandler(request, response) {
    console.log(request.url)
    response.end(fs.readFileSync("." + request.url));
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }

    console.log(`server is listening on ${port}`)
});

const Browser = require('zombie');
//const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const assert = require('assert');
const vm = require("vm");
const fs = require("fs");
const sandbox = {
    globalVar: 1
};
Browser.localhost('example.com', 3000);
vm.createContext(sandbox);
module.exports = function (path, context) {
    var data = fs.readFileSync(path);
    vm.runInNewContext(data, context, path);
};

module.exports('./jsap.js', sandbox);
module.exports('./test/audio-context.js', sandbox);

var context = new sandbox.AudioContext(),
    factory = new sandbox.PluginFactory(context),
    sf;

describe("PluginFactory", function () {
    describe("Definitions", function () {
        it("should define loadResource", function (done) {
            assert.ok(typeof factory.loadResource === "function");
            done();
        });
        it("should define loadPluginScript", function (done) {
            assert.ok(typeof factory.loadPluginScript === "function");
            done();
        });
        it("should define addPrototype", function (done) {
            assert.ok(typeof factory.addPrototype === "function");
            done();
        });
        it("should define getPrototypes", function (done) {
            assert.ok(typeof factory.getPrototypes === "function");
            done();
        });
        it("should define getAllPlugins", function (done) {
            assert.ok(typeof factory.getAllPlugins === "function");
            done();
        });
        it("should define getAllPluginsObject", function (done) {
            assert.ok(typeof factory.getAllPluginsObject === "function");
            done();
        });
        it("should define createSubFactory", function (done) {
            assert.ok(typeof factory.createSubFactory === "function");
            done();
        });
        it("should define destroySubFactory", function (done) {
            assert.ok(typeof factory.destroySubFactory === "function");
            done();
        });
        it("should define registerPluginInstance", function (done) {
            assert.ok(typeof factory.registerPluginInstance === "function");
            done();
        });
        it("should define deletePlugin", function (done) {
            assert.ok(typeof factory.deletePlugin === "function");
            done();
        });
        it("should define audioStart", function (done) {
            assert.ok(typeof factory.audioStart === "function");
            done();
        });
        it("should define audioStop", function (done) {
            assert.ok(typeof factory.audioStop === "function");
            done();
        });
        it("should define the audio context", function (done) {
            assert.ok(factory.context == context);
            done();
        });
        it("should define FeatureMap", function (done) {
            assert.ok(typeof factory.FeatureMap === "object");
            done();
        });
        it("should define createStore", function (done) {
            assert.ok(typeof factory.createStore === "function");
            done();
        });
        it("should define getStores", function (done) {
            assert.ok(typeof factory.getStores === "function");
            done();
        });
        it("should define findStore", function (done) {
            assert.ok(typeof factory.findStore === "function");
            done();
        });
        it("should define the SessionData store", function (done) {
            assert.ok(factory.SessionData.constructor === sandbox.LinkedStore);
            done();
        });
        it("should define the UserData store", function (done) {
            assert.ok(factory.UserData.constructor === sandbox.LinkedStore);
            done();
        });
    });
    describe("SubFactory", function () {
        var a = context.createGain(),
            b = context.createGain();
        it("should return a SubFactory on createSubFactory", function (done) {
            sf = factory.createSubFactory(a, b);
            assert.equal(sf.constructor.name, "PluginSubFactory");
            done();
        });
        it("should define the Factory in .parent", function (done) {
            assert.equal(sf.parent, factory);
            done();
        });
        it("should define the TrackData store", function (done) {
            assert.ok(sf.TrackData.constructor === sandbox.LinkedStore);
            done();
        });
        it("should define the PluginData store", function (done) {
            assert.ok(sf.PluginData.constructor === sandbox.LinkedStore);
            done();
        });
        it("should define .featureSender", function (done) {
            assert.ok(sf.featureSender.constructor.name === "SubFactoryFeatureSender");
            done();
        });
        it("should define .getFeatureChain", function (done) {
            assert.ok(typeof sf.getFeatureChain === "function");
            done();
        });
        it("should define .bypassPlugin", function (done) {
            assert.ok(typeof sf.bypassPlugin === "function");
            done();
        });
        it("should define .getPrototypes", function (done) {
            assert.ok(typeof sf.getPrototypes === "function");
            done();
        });
        it("should define .getFactory", function (done) {
            assert.ok(typeof sf.getFactory === "function");
            done();
        });
        it("should define .destroy", function (done) {
            assert.ok(typeof sf.destroy === "function");
            done();
        });
        it("should define .createPlugin", function (done) {
            assert.ok(typeof sf.createPlugin === "function");
            done();
        });
        it("should define .destroyPlugin", function (done) {
            assert.ok(typeof sf.destroyPlugin === "function");
            done();
        });
        it("should define .getPlugins", function (done) {
            assert.ok(typeof sf.getPlugins === "function");
            done();
        });
        it("should define .getAllPlugins", function (done) {
            assert.ok(typeof sf.getAllPlugins === "function");
            done();
        });
        it("should define .getPluginIndex", function (done) {
            assert.ok(typeof sf.getPluginIndex === "function");
            done();
        });
        it("should define .movePlugin", function (done) {
            assert.ok(typeof sf.movePlugin === "function");
            done();
        });
        it("should define .chainStart", function (done) {
            assert.ok(sf.chainStart === a);
            done();
        });
        it("should define .chainStop", function (done) {
            assert.ok(sf.chainStop === b);
            done();
        });
    });
    describe("Plugin Prototype", function () {
        const browser = new Browser({
            debug: true
        });
        var prototype;
        before(function (done) {
            browser.visit('/test/index.html', function (err, view, status) {});
            done();
        });
        it("should load a given plugin", function (done) {
            var p = {
                "url": "http://dmtlab.bcu.ac.uk/nickjillings/jsap-plugins/plugins/gain.js",
                "type": "javascript",
                "returnObject": "GainPlugin",
                "test": function () {
                    return typeof GainPlugin === "function";
                }
            }
            sandbox.document = browser.document;
            sandbox.console = browser.console;
            sandbox.window = browser.window;
            sandbox.XMLHttpRequest = browser.window.XMLHttpRequest;
            browser.on("xhr", function (e, u) {
                console.log(e);
            });
            factory.loadPluginScript(p).then(function () {
                //console.log("TEST")
                done();
            });
        });
        it("should have a prototype called \"Gain\"", function (done) {
            var protoList = factory.getPrototypes()
            assert.ok(protoList.length > 0);
            prototype = protoList.find(function (a) {
                return a.name == "Gain";
            });
            assert.ok(prototype.name == "Gain");
            assert.ok(prototype.constructor.name == "PluginPrototype");
            done();
        });
        it("should be ready", function (done) {
            assert.equal(prototype.ready(), true);
            done();
        });
        it("should have .createPluginInstance function", function (done) {
            assert.ok(typeof prototype.createPluginInstance == "function");
            done();
        })
    })
});
