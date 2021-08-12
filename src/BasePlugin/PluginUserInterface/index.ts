/* jshint esversion: 6 */

import { IBasePlugin } from "../IBasePlugin";

class PluginParameterInterfaceNode {
    constructor(public input: HTMLInputElement, public AudioParam: AudioParam, public processor: IBasePlugin, public GUI: PluginUserInterface) {
        this.input.addEventListener("change", this);
        this.input.addEventListener("mousemove", this);
        this.input.addEventListener("click", this);
    }
    handleEvent(event) {
        this.AudioParam.value = Number(this.input.value);
    }
}

class PluginUserInterface {
    root: HTMLDivElement
    dim: {width: number, height: number}
    private intervalFunction: number = null;
    private updateInterval: number = null;
    private PluginParameterInterfaces: PluginParameterInterfaceNode[] = [];
    private _updateFunction = () => {};
    constructor(public processor: IBasePlugin, width: number, height: number) {
        console.log("DEPRECATED!!");
        console.log("The class PluginUserInterface has been deprecated");
        console.log("Please look at the documents for the new methods for building plugins");
        this.root = document.createElement("div");
        if (width > 0) {
            this.root.style.width = width + "px";
        }
        if (height > 0) {
            this.root.style.height = height + "px";
        }
        this.dim = {
            width: width,
            height: height
        };
    }
    createPluginParameterInterfaceNode(DOM:HTMLInputElement, PluginParameterInstance:AudioParam) {
        var node = new PluginParameterInterfaceNode(DOM, PluginParameterInstance, this.processor, this);
        this.PluginParameterInterfaces.push(node);
        return node;
    }
    get update() {
        return this._updateFunction;
    }
    set update(f: () => void) {
        this._updateFunction = f;
    }
    getRoot() {
        return this.root;
    }
    getDimensions() {
        return this.dim;
    }
    getWidth() {
        return this.dim.width;
    }
    getHeight() {
        return this.dim.height;
    }
    beginCallbacks(ms) {
        // Any registered callbacks are started by the host
        if (ms === undefined) {
            ms = 250;
        } //Default of 250ms update period
        if (this.intervalFunction === null) {
            this.updateInterval = ms;
            this.intervalFunction = window.setInterval(function () {
                this.update();
            }.bind(this), 250);
        }
    }
    stopCallbacks() {
        // Any registered callbacks are stopped by the host
        if (this.intervalFunction !== null) {
            window.clearInterval(this.intervalFunction);
            this.updateInterval = null;
            this.intervalFunction = null;
        }
    }
    loadResource(url) {
        var p = new Promise(function (resolve, reject) {
            var req = new XMLHttpRequest();
            req.open('GET', url);
            req.onload = function () {
                if (req.status === 200) {
                    resolve(req.response);
                } else {
                    reject(Error(req.statusText));
                }
            };
            req.onerror = function () {
                reject(Error("Network Error"));
            };
            req.send();
        });
        return p;
    }
    clearGUI() {
        this.stopCallbacks();
        this.root.innerHTML = "";
    }
}


export {PluginUserInterface};
