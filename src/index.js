// This defines a master object for holding all the plugins and communicating
// This object will also handle creation and destruction of plugins
/*globals Promise, document, console, LinkedStore, Worker, window, XMLHttpRequest */
/*eslint-env browser */
/* jshint esversion:6 */

import {BasePlugin} from './BasePlugin';
import {SynthesiserBasePlugin} from './SynthesiserBasePlugin';
import PluginFactory from "./Factory/PluginFactory";

export {BasePlugin, SynthesiserBasePlugin, PluginFactory};
