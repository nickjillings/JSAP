import { LinkedStore, LinkedStoreAltered } from "../LinkedStore";
import { IBasePlugin } from "./IBasePlugin";
export declare class LinkedStoreInterface {
    private readonly owner;
    private readonly linkedStore;
    private listeners;
    constructor(owner: IBasePlugin, linkedStore: LinkedStore);
    handleEvent(e: CustomEvent<LinkedStoreAltered>): void;
    destroy(): void;
    requestTerm(term: string): import("../LinkedStore").LinkedStoreValues;
    listenForTerm(term: string, callback: (value: LinkedStoreAltered) => void): void;
    releaseListenerForTerm(term: string): void;
}
