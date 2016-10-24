if (!Array.prototype.find) {
    Array.prototype.find = function (predicate) {
        'use strict';
        if (this == null) {
            throw new TypeError('Array.prototype.find called on null or undefined');
        }
        if (typeof predicate !== 'function') {
            throw new TypeError('predicate must be a function');
        }
        var list = Object(this);
        var length = list.length >>> 0;
        var thisArg = arguments[1];
        var value;

        for (var i = 0; i < length; i++) {
            value = list[i];
            if (predicate.call(thisArg, value, i, list)) {
                return value;
            }
        }
        return undefined;
    };
}

if (!Array.prototype.findIndex) {
    Array.prototype.findIndex = function (predicate) {
        'use strict';
        if (this == null) {
            throw new TypeError('Array.prototype.findIndex called on null or undefined');
        }
        if (typeof predicate !== 'function') {
            throw new TypeError('predicate must be a function');
        }
        var list = Object(this);
        var length = list.length >>> 0;
        var thisArg = arguments[1];
        var value;

        for (var i = 0; i < length; i++) {
            value = list[i];
            if (predicate.call(thisArg, value, i, list)) {
                return i;
            }
        }
        return -1;
    };
}

var LinkedStore = function (storeName) {
    // Store for the semantic terms, each store holds its own data tree
    // Terms are added as key/value paris to a root node
    var root = {};

    function objectToXML(obj, root, doc) {
        // Used if an object was passed as a term value
        var term;
        for (term in obj) {
            if (obj.hasOwnProperty(term)) {
                if (typeof obj[term] === "object") {
                    var docNode;
                    if (obj[term].toXML) {
                        docNode = obj[term].toXML(doc);
                    } else {
                        docNode = doc.createElement(term);
                        root.appendChild(docNode);
                        if (obj[term].length) {
                            arrayToXML(obj[term], docNode, doc);
                        } else {
                            objectToXML(obj[term], docNode, doc);
                        }
                    }
                    root.appendChild(docNode);
                } else {
                    root.setAttribute(term, obj[term]);
                }
            }
        }
    }

    function arrayToXML(arr, root, doc) {
        // Used to convert an array to a list of XML entries
        var all_numbers = true,
            all_strings = true,
            i, l = arr.length;
        for (i = 0; i < l; i++) {
            switch (typeof arr[i]) {
                case "string":
                    all_numbers = false;
                    break;
                case "number":
                    all_strings = false;
                    break;
                case "object":
                    all_numbers = all_strings = false;
                    break;
            }
        }
        if (all_numbers || all_strings) {
            // An array of numbers or strings
            for (i = 0; i < l; i++) {
                root.setAttribute("index-" + i, arr[i]);
            }
        } else {
            // An array of objects
            for (i = 0; i < l; i++) {
                var node = document.createElement("value");
                node.setAttribute("index", i);
                objectToXML(arr[i], node, doc);
                root.appendChild(node);
            }
        }
    }

    Object.defineProperties(this, {
        'name': {
            'get': function () {
                return storeName;
            },
            'set': function (name) {
                if (storeName == undefined) {
                    name = storeName;
                } else {
                    throw ("Name is already set");
                }
            }
        },
        'addTerm': {
            'value': function (term, value) {
                if (typeof term !== "string" && term.length == 0) {
                    throw ("term must be a string");
                }
                root[term] = value;
            }
        },
        'addTerms': {
            'value': function (termsObject) {
                if (typeof termsObject !== "object") {
                    throw ("addTerms takes an object of term/value pairs");
                }
                var term;
                for (term in termsObject) {
                    if (termsObject.hasOwnProperty(term)) {
                        this.addTerm(term, termsObject[term]);
                    }
                }
            }
        },
        'deleteTerm': {
            'value': function (term) {
                if (typeof term !== "string" && term.length == 0) {
                    throw ("term must be a string");
                }
                root[term] = undefined;
            }
        },
        'getTerm': {
            'value': function (term) {
                if (typeof term !== "string" && term.length == 0) {
                    throw ("term must be a string");
                }
                return root[term];
            }
        },
        'hasTerm': {
            'value': function (term) {
                if (typeof term !== "string" && term.length == 0) {
                    throw ("term must be a string");
                }
                return root.hasOwnProperty(term);
            }
        },
        'toJSON': {
            'value': function () {
                return JSON.stringify(root);
            }
        },
        'toXML': {
            'value': function (doc) {
                var node;
                if (!doc) {
                    doc = document.implementation.createDocument(null, storeName, null);
                    node = doc.firstElementChild;
                } else {
                    node = doc.createElement(storeName);
                }
                objectToXML(root, node, doc);
                return node;
            }
        }
    });
}
