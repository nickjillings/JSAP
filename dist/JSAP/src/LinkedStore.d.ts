export declare type LinkedStoreValues = number | string | Map<string, LinkedStoreValues>;
export interface LinkedStoreAltered {
    term: string;
    value: LinkedStoreValues;
}
export declare class LinkedStore {
    private storeName;
    private et;
    private root;
    constructor(storeName: string);
    private objectToXML;
    private arrayToXML;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject | null, options?: boolean | AddEventListenerOptions): void;
    removeEventListener(type: string, callback: EventListenerOrEventListenerObject | null, options?: boolean | EventListenerOptions): void;
    setTerm(term: string, value: number | string | Map<string, LinkedStoreValues>): void;
    setTerms(termsObject: Map<string, LinkedStoreValues>): void;
    deleteTerm(term: string): void;
    getTerm(term: string): LinkedStoreValues;
    hasTerm(term: string): boolean;
    toJSON(): any;
    toXML(doc?: XMLDocument): Element;
    get name(): string;
    set name(newName: string);
}
