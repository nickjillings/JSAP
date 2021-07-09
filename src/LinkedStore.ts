type LinkedStoreValues = number | string | Map<string, LinkedStoreValues>;

// Store for the semantic terms, each store holds its own data tree
// Terms are added as key/value paris to a root node
class LinkedStore {
    private et = new EventTarget();
    private root: Map<string, LinkedStoreValues>
    constructor(private storeName: string) {

    }
    
    private objectToXML(obj: Map<string, LinkedStoreValues>, root: Element, doc: XMLDocument) {
        // Used if an object was passed as a term value
        for (const term of obj.keys()) {
            if (obj.hasOwnProperty(term)) {
                const entry = obj[term];
                if (typeof entry === "string") {
                    root.setAttribute(term, entry);
                } else if (typeof entry == "number") {
                    root.setAttribute(term, entry.toString());
                } else {
                    let docNode;
                    if (entry instanceof LinkedStore) {
                        docNode = entry.toXML(doc);
                    } else {
                        docNode = doc.createElement(term);
                        root.appendChild(docNode);
                        if (entry instanceof Array) {
                            this.arrayToXML(entry, docNode, doc);
                        } else {
                            this.objectToXML(entry, docNode, doc);
                        }
                    }
                    root.appendChild(docNode);
                }
            }
        }
    }

    private arrayToXML(arr, root, doc) {
        // Used to convert an array to a list of XML entries
        var all_numbers = true,
            all_strings = true,
            i, l = arr.length;
        all_numbers = arr.every(function (a) {
            return typeof a === "number";
        });
        all_strings = arr.every(function (a) {
            return typeof a === "string";
        });
        if (all_numbers || all_strings) {
            // An array of numbers or strings
            arr.forEach(function (a, i) {
                root.setAttribute("index-" + i, a);
            });
        } else {
            // An array of objects
            arr.forEach(function (a, i) {
                var node = document.createElement("value");
                node.setAttribute("index", i);
                this.objectToXML(a, node, doc);
                root.appendChild(node);
            });
        }
    }

    public addEventListener(type: string, listener: EventListenerOrEventListenerObject | null, options?: boolean | AddEventListenerOptions): void {
        return this.et.addEventListener(type, listener, options);
    }

    public removeEventListener(type: string, callback: EventListenerOrEventListenerObject | null, options?: boolean | EventListenerOptions): void {
        return this.et.removeEventListener(type, callback, options);
    }

    public setTerm(term:string, value: number | string | Map<string, LinkedStoreValues>) {
        if (typeof term !== "string" || term.length === 0) {
            throw ("term must be a string");
        }
        this.root.set(term, value);
        this.et.dispatchEvent(new CustomEvent("altered", {detail:{term: term, value: value}}));
    }

    public setTerms(termsObject: Map<string, LinkedStoreValues>) {
        if (typeof termsObject !== "object") {
            throw ("setTerms takes an object of term/value pairs");
        }
        for (const term in termsObject) {
            if (termsObject.hasOwnProperty(term)) {
                this.setTerm(term, termsObject[term]);
            }
        }
    }

    public deleteTerm(term: string) {
        this.setTerm(term, undefined);
    }

    public getTerm(term: string) {
        if (typeof term !== "string" || term.length === 0) {
            throw ("term must be a string");
        }
        return this.root.get(term);
    }

    public hasTerm(term: string) {
        if (typeof term !== "string" || term.length === 0) {
            throw ("term must be a string");
        }
        return this.root.has(term);
    }

    public toJSON() {
        return JSON.parse(JSON.stringify(this.root));
    }

    public toXML(doc?:XMLDocument) {
        let node: Element;
        if (!doc) {
            doc = document.implementation.createDocument(null, this.storeName, null);
            node = doc.firstElementChild;
        } else {
            node = doc.createElement(this.storeName);
        }
        this.objectToXML(this.root, node, doc);
        return node;
    }

    get name(): string {
        return this.storeName
    }

    set name(newName: string) {
        if (this.storeName !== undefined) {
            throw new Error("Name is already set");
        }
        this.storeName = newName;
    }
}

export default LinkedStore;
