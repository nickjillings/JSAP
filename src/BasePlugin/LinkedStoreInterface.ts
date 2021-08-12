/* jshint esversion: 6 */
import { IPluginHost } from "../Factory/IPluginHost";
import { LinkedStore, LinkedStoreAltered } from "../LinkedStore";
import {IBasePlugin} from "./IBasePlugin";
export class LinkedStoreInterface {
    private listeners = new Map<string, (value: LinkedStoreAltered)=>void>();
    constructor(private readonly owner: IBasePlugin, private readonly linkedStore: LinkedStore) {
        linkedStore.addEventListener("altered", this);
    }
    public handleEvent(e: CustomEvent<LinkedStoreAltered>) {
        const term = e.detail.term;
        const value = e.detail.value;
        if (this.listeners[term] && typeof this.listeners[term] == "function") {
            this.listeners[term].call(this.owner, value);
        }
    }
    destroy() {
        this.linkedStore.removeEventListener("altered", this);
        this.listeners.clear();
    }
    requestTerm(term: string) {
        return this.linkedStore.getTerm(term);
    }
    listenForTerm(term: string, callback: (value: LinkedStoreAltered)=>void) {
        if (this.listeners.hasOwnProperty(term)) {
            throw "Listener already exists";
        }
        this.listeners.set(term, callback);
    }
    releaseListenerForTerm(term: string) {
        this.listeners.delete(term);
    }
}
