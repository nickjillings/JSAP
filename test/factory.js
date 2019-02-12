/* jshint esversion: 6 */
/*
    Test of the PluginFactory interfaces
*/

const http = require('http');
const port = 3000;

function requestHandler(request, response) {
    response.end(fs.readFileSync("." + request.url));
}

const server = http.createServer(requestHandler);

const Browser = require('zombie');
Browser.localhost('example.com', 3000);
const wae = require("web-audio-engine");
const OfflineAudioContext = wae.OfflineAudioContext;
const fs = require("fs");
//const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const assert = require('assert');

var context = new OfflineAudioContext();

describe("PluginFactory", function () {
    before(function(d) {
        server.listen(port, (err) => {
            if (err) {
                return console.log('something bad happened', err);
            }

            console.log(`server is listening on ${port}`);
            d();
        });
    });
    after(function(d) {
        server.close(d);
    });
    describe("Definitions", function () {
        const browser = new Browser();
        browser.debug = true;
        before(function (d) {
            browser.visit("/test/index.html", d);
        });
        it("should define loadResource", function (done) {
            assert.ok(typeof browser.window.window.factory.loadResource === "function");
            done();
        });
        it("should define loadPluginScript", function (done) {
            assert.ok(typeof browser.window.window.factory.loadPluginScript === "function");
            done();
        });
        it("should define addPrototype", function (done) {
            assert.ok(typeof browser.window.window.factory.addPrototype === "function");
            done();
        });
        it("should define getPrototypes", function (done) {
            assert.ok(typeof browser.window.window.factory.getPrototypes === "function");
            done();
        });
        it("should define getAllPlugins", function (done) {
            assert.ok(typeof browser.window.window.factory.getAllPlugins === "function");
            done();
        });
        it("should define getAllPluginsObject", function (done) {
            assert.ok(typeof browser.window.window.factory.getAllPluginsObject === "function");
            done();
        });
        it("should define createSubFactory", function (done) {
            assert.ok(typeof browser.window.window.factory.createSubFactory === "function");
            done();
        });
        it("should define destroySubFactory", function (done) {
            assert.ok(typeof browser.window.window.factory.destroySubFactory === "function");
            done();
        });
        it("should define registerPluginInstance", function (done) {
            assert.ok(typeof browser.window.window.factory.registerPluginInstance === "function");
            done();
        });
        it("should define deletePlugin", function (done) {
            assert.ok(typeof browser.window.window.factory.deletePlugin === "function");
            done();
        });
        it("should define audioStart", function (done) {
            assert.ok(typeof browser.window.window.factory.audioStart === "function");
            done();
        });
        it("should define audioStop", function (done) {
            assert.ok(typeof browser.window.window.factory.audioStop === "function");
            done();
        });
        it("should define the audio context", function (done) {
            assert.ok(browser.window.window.factory.context.constructor.name == "AudioContext");
            done();
        });
        it("should define FeatureMap", function (done) {
            assert.ok(typeof browser.window.window.factory.FeatureMap === "object");
            done();
        });
        it("should define createStore", function (done) {
            assert.ok(typeof browser.window.window.factory.createStore === "function");
            done();
        });
        it("should define getStores", function (done) {
            assert.ok(typeof browser.window.window.factory.getStores === "function");
            done();
        });
        it("should define findStore", function (done) {
            assert.ok(typeof browser.window.window.factory.findStore === "function");
            done();
        });
        it("should define the SessionData store", function (done) {
            assert.ok(browser.window.window.factory.SessionData.constructor === browser.window.window.LinkedStore);
            done();
        });
        it("should define the UserData store", function (done) {
            assert.ok(browser.window.window.factory.UserData.constructor === browser.window.window.LinkedStore);
            done();
        });
    });
    describe("SubFactory", function () {
        const browser = new Browser();
        browser.debug = true;
        var sf;
        before(function (d) {
            browser.visit("/test/index.html", d);
        });
        it("should return a SubFactory on createSubFactory", function (done) {
            sf = browser.window.window.factory.createSubFactory(browser.window.window.a, browser.window.window.b);
            assert.equal(sf.constructor.name, "PluginSubFactory");
            done();
        });
        it("should define the Factory in .parent", function (done) {
            assert.equal(sf.parent, browser.window.window.factory);
            done();
        });
        it("should define the TrackData store", function (done) {
            assert.ok(sf.TrackData.constructor === browser.window.window.LinkedStore);
            done();
        });
        it("should define the PluginData store", function (done) {
            assert.ok(sf.PluginData.constructor === browser.window.window.LinkedStore);
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
            assert.ok(sf.chainStart === browser.window.window.a);
            done();
        });
        it("should define .chainStop", function (done) {
            assert.ok(sf.chainStop === browser.window.window.b);
            done();
        });
    });
});
