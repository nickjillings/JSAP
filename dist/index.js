(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["jsap"] = factory();
	else
		root["jsap"] = factory();
})(this, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/js-xtract/dist/jsXtract.js":
/*!*************************************************!*\
  !*** ./node_modules/js-xtract/dist/jsXtract.js ***!
  \*************************************************/
/***/ (function(module) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __nested_webpack_require_539__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_539__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__nested_webpack_require_539__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__nested_webpack_require_539__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__nested_webpack_require_539__.d = function(exports, name, getter) {
/******/ 		if(!__nested_webpack_require_539__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__nested_webpack_require_539__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__nested_webpack_require_539__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __nested_webpack_require_539__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__nested_webpack_require_539__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __nested_webpack_require_539__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__nested_webpack_require_539__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__nested_webpack_require_539__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__nested_webpack_require_539__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__nested_webpack_require_539__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __nested_webpack_require_539__(__nested_webpack_require_539__.s = "./modules/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./modules/freeFFT.js":
/*!****************************!*\
  !*** ./modules/freeFFT.js ***!
  \****************************/
/*! exports provided: transform, inverseTransform, transformRadix2, transformBluestein, convolveComplex */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_4265__) {

"use strict";
__nested_webpack_require_4265__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_4265__.d(__webpack_exports__, "transform", function() { return transform; });
/* harmony export (binding) */ __nested_webpack_require_4265__.d(__webpack_exports__, "inverseTransform", function() { return inverseTransform; });
/* harmony export (binding) */ __nested_webpack_require_4265__.d(__webpack_exports__, "transformRadix2", function() { return transformRadix2; });
/* harmony export (binding) */ __nested_webpack_require_4265__.d(__webpack_exports__, "transformBluestein", function() { return transformBluestein; });
/* harmony export (binding) */ __nested_webpack_require_4265__.d(__webpack_exports__, "convolveComplex", function() { return convolveComplex; });
/*
 * Free FFT and convolution (JavaScript)
 *
 * Copyright (c) 2014 Project Nayuki
 * https://www.nayuki.io/page/free-small-fft-in-multiple-languages
 *
 * (MIT License)
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 * - The above copyright notice and this permission notice shall be included in
 *   all copies or substantial portions of the Software.
 * - The Software is provided "as is", without warranty of any kind, express or
 *   implied, including but not limited to the warranties of merchantability,
 *   fitness for a particular purpose and noninfringement. In no event shall the
 *   authors or copyright holders be liable for any claim, damages or other
 *   liability, whether in an action of contract, tort or otherwise, arising from,
 *   out of or in connection with the Software or the use or other dealings in the
 *   Software.
 */


/*
 * Computes the discrete Fourier transform (DFT) of the given complex vector, storing the result back into the vector.
 * The vector can have any length. This is a wrapper function.
 */
function transform(real, imag) {
    if (real.length !== imag.length)
        throw "Mismatched lengths";

    var n = real.length;
    if (n === 0)
        return;
    else if ((n & (n - 1)) === 0) // Is power of 2
        transformRadix2(real, imag);
    else // More complicated algorithm for arbitrary sizes
        transformBluestein(real, imag);
}


/*
 * Computes the inverse discrete Fourier transform (IDFT) of the given complex vector, storing the result back into the vector.
 * The vector can have any length. This is a wrapper function. This transform does not perform scaling, so the inverse is not a true inverse.
 */
function inverseTransform(real, imag) {
    transform(imag, real);
}


/*
 * Computes the discrete Fourier transform (DFT) of the given complex vector, storing the result back into the vector.
 * The vector's length must be a power of 2. Uses the Cooley-Tukey decimation-in-time radix-2 algorithm.
 */

function transformRadix2(real, imag) {
    // Initialization
    if (real.length !== imag.length)
        throw "Mismatched lengths";
    var n = real.length;
    if (n === 1) // Trivial transform
        return;
    var levels = calculateNumberLevels(n);
    if (levels === -1)
        throw "Length is not a power of 2";
    var cosTable = new Float64Array(n / 2);
    var sinTable = new Float64Array(n / 2);
    calculateCosSineTables(cosTable, sinTable);

    // Bit-reversed addressing permutation
    bitReverseMap(real, imag);

    // Cooley-Tukey decimation-in-time radix-2 FFT
    for (var size = 2; size <= n; size *= 2) {
        cooleyTukey(real, imag, sinTable, cosTable, size);
    }

    // Returns the integer whose value is the reverse of the lowest 'bits' bits of the integer 'x'.
    function reverseBits(x, bits) {
        var y = 0;
        for (var i = 0; i < bits; i++) {
            y = (y << 1) | (x & 1);
            x >>>= 1;
        }
        return y;
    }

    function cooleyTukey(real, imag, sinTable, cosTable, size) {
        var i, j, k;
        var n = real.length;
        var halfsize = size / 2;
        var tablestep = n / size;
        for (i = 0; i < n; i += size) {
            for (j = i, k = 0; j < i + halfsize; j++, k += tablestep) {
                var tpre = real[j + halfsize] * cosTable[k] + imag[j + halfsize] * sinTable[k];
                var tpim = -real[j + halfsize] * sinTable[k] + imag[j + halfsize] * cosTable[k];
                real[j + halfsize] = real[j] - tpre;
                imag[j + halfsize] = imag[j] - tpim;
                real[j] += tpre;
                imag[j] += tpim;
            }
        }
    }

    function calculateNumberLevels(N) {
        var i;
        for (i = 0; i < 32; i++) {
            if (1 << i === N) {
                return i;
            }
        }
        return -1;
    }

    function bitReverseMap(real, imag) {
        var i, j, temp;
        for (i = 0; i < n; i++) {
            j = reverseBits(i, levels);
            if (j > i) {
                temp = real[i];
                real[i] = real[j];
                real[j] = temp;
                temp = imag[i];
                imag[i] = imag[j];
                imag[j] = temp;
            }
        }
    }

    function calculateCosSineTables(cosTable, sinTable) {
        var n = cosTable.length,
            i;
        for (i = 0; i < n; i++) {
            cosTable[i] = Math.cos(Math.PI * i / n);
            sinTable[i] = Math.sin(Math.PI * i / n);
        }
    }
}


/*
 * Computes the discrete Fourier transform (DFT) of the given complex vector, storing the result back into the vector.
 * The vector can have any length. This requires the convolution function, which in turn requires the radix-2 FFT function.
 * Uses Bluestein's chirp z-transform algorithm.
 */
function transformBluestein(real, imag) {
    // Find a power-of-2 convolution length m such that m >= n * 2 + 1
    if (real.length !== imag.length)
        throw "Mismatched lengths";
    var i, j;
    var n = real.length;
    var m = 1;
    while (m < n * 2 + 1)
        m *= 2;

    // Trignometric tables
    var cosTable = new Float64Array(n);
    var sinTable = new Float64Array(n);
    (function (cosTable, sinTable) {
        for (i = 0; i < n; i++) {
            j = i * i % (n * 2); // This is more accurate than j = i * i
            cosTable[i] = Math.cos(Math.PI * j / n);
            sinTable[i] = Math.sin(Math.PI * j / n);
        }
    })(cosTable, sinTable);

    // Temporary vectors and preprocessing
    var areal = new Float64Array(m);
    var aimag = new Float64Array(m);

    for (i = 0; i < n; i++) {
        areal[i] = real[i] * cosTable[i] + imag[i] * sinTable[i];
        aimag[i] = -real[i] * sinTable[i] + imag[i] * cosTable[i];
    }
    var breal = new Float64Array(m);
    var bimag = new Float64Array(m);
    breal[0] = cosTable[0];
    bimag[0] = sinTable[0];
    for (i = 1; i < n; i++) {
        breal[i] = breal[m - i] = cosTable[i];
        bimag[i] = bimag[m - i] = sinTable[i];
    }

    // Convolution
    var creal = new Float64Array(m);
    var cimag = new Float64Array(m);
    convolveComplex(areal, aimag, breal, bimag, creal, cimag);

    // Postprocessing
    for (i = 0; i < n; i++) {
        real[i] = creal[i] * cosTable[i] + cimag[i] * sinTable[i];
        imag[i] = -creal[i] * sinTable[i] + cimag[i] * cosTable[i];
    }
}


/*
 * Computes the circular convolution of the given real vectors. Each vector's length must be the same.
 */
function convolveReal(x, y, out) {
    if (x.length !== y.length || x.length !== out.length)
        throw "Mismatched lengths";
    var zeros = new Array(x.length);
    for (var i = 0; i < zeros.length; i++)
        zeros[i] = 0;
    convolveComplex(x, zeros, y, zeros.slice(), out, zeros.slice());
}


/*
 * Computes the circular convolution of the given complex vectors. Each vector's length must be the same.
 */
function convolveComplex(xreal, ximag, yreal, yimag, outreal, outimag) {
    (function () {
        if (xreal.length !== ximag.length || xreal.length !== yreal.length || yreal.length !== yimag.length || xreal.length !== outreal.length || outreal.length !== outimag.length)
            throw "Mismatched lengths";
    })();
    var i;
    var n = xreal.length;
    xreal = xreal.slice();
    ximag = ximag.slice();
    yreal = yreal.slice();
    yimag = yimag.slice();

    transform(xreal, ximag);
    transform(yreal, yimag);
    for (i = 0; i < n; i++) {
        var temp = xreal[i] * yreal[i] - ximag[i] * yimag[i];
        ximag[i] = ximag[i] * yreal[i] + xreal[i] * yimag[i];
        xreal[i] = temp;
    }
    inverseTransform(xreal, ximag);
    for (i = 0; i < n; i++) { // Scaling (because this FFT implementation omits it)
        outreal[i] = xreal[i] / n;
        outimag[i] = ximag[i] / n;
    }
}


/***/ }),

/***/ "./modules/functions/xtract_amdf.js":
/*!******************************************!*\
  !*** ./modules/functions/xtract_amdf.js ***!
  \******************************************/
/*! exports provided: xtract_amdf */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_13533__) {

"use strict";
__nested_webpack_require_13533__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_13533__.d(__webpack_exports__, "xtract_amdf", function() { return xtract_amdf; });
/* harmony import */ var _xtract_assert_array__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_13533__(/*! ./xtract_assert_array */ "./modules/functions/xtract_assert_array.js");
/// <reference path="../../typings/functions.d.ts" />


function xtract_amdf(array) {
    if (!Object(_xtract_assert_array__WEBPACK_IMPORTED_MODULE_0__["xtract_assert_array"])(array))
        return 0;
    var n = array.length;
    var result = new Float64Array(n);
    while (n--) {
        var md = 0.0;
        for (var i = 0; i < array.length - n; i++) {
            md += Math.abs(array[i] - array[i + n]);
        }
        result[n] = md / array.length;
    }
    return result;
}


/***/ }),

/***/ "./modules/functions/xtract_apply_window.js":
/*!**************************************************!*\
  !*** ./modules/functions/xtract_apply_window.js ***!
  \**************************************************/
/*! exports provided: xtract_apply_window */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_14724__) {

"use strict";
__nested_webpack_require_14724__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_14724__.d(__webpack_exports__, "xtract_apply_window", function() { return xtract_apply_window; });
/* harmony import */ var _xtract_assert_array__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_14724__(/*! ./xtract_assert_array */ "./modules/functions/xtract_assert_array.js");
/// <reference path="../../typings/functions.d.ts" />

function xtract_apply_window(X, W) {
    if (!Object(_xtract_assert_array__WEBPACK_IMPORTED_MODULE_0__["xtract_assert_array"])(X) || !Object(_xtract_assert_array__WEBPACK_IMPORTED_MODULE_0__["xtract_assert_array"])(W)) {
        throw ("Both X and W must be defined");
    }
    if (X.length !== W.length) {
        throw ("Both X and W must be the same lengths");
    }
    var N = X.length;
    var Y = new Float64Array(N);
    var n;
    for (n = 0; n < N; n++) {
        Y[n] = X[n] * W[n];
    }
    return Y;
}


/***/ }),

/***/ "./modules/functions/xtract_array_bound.js":
/*!*************************************************!*\
  !*** ./modules/functions/xtract_array_bound.js ***!
  \*************************************************/
/*! exports provided: xtract_array_bound */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_16010__) {

"use strict";
__nested_webpack_require_16010__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_16010__.d(__webpack_exports__, "xtract_array_bound", function() { return xtract_array_bound; });
/* harmony import */ var _xtract_assert_array__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_16010__(/*! ./xtract_assert_array */ "./modules/functions/xtract_assert_array.js");
/* harmony import */ var _xtract_array_min__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_16010__(/*! ./xtract_array_min */ "./modules/functions/xtract_array_min.js");
/* harmony import */ var _xtract_array_max__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_16010__(/*! ./xtract_array_max */ "./modules/functions/xtract_array_max.js");
/// <reference path="../../typings/functions.d.ts" />




function xtract_array_bound(data, min, max) {
    if (!Object(_xtract_assert_array__WEBPACK_IMPORTED_MODULE_0__["xtract_assert_array"])(data))
        return 0;
    if (typeof min !== "number") {
        min = Object(_xtract_array_min__WEBPACK_IMPORTED_MODULE_1__["xtract_array_min"])(data);
    }
    if (typeof max !== "number") {
        max = Object(_xtract_array_max__WEBPACK_IMPORTED_MODULE_2__["xtract_array_max"])(data);
    }
    if (min >= max) {
        throw ("Invalid boundaries! Minimum cannot be greater than maximum");
    }
    var result = new data.constructor(data.length);
    for (var n = 0; n < data.length; n++) {
        result[n] = Math.min(Math.max(data[n], min), max);
    }
    return result;
}


/***/ }),

/***/ "./modules/functions/xtract_array_copy.js":
/*!************************************************!*\
  !*** ./modules/functions/xtract_array_copy.js ***!
  \************************************************/
/*! exports provided: xtract_array_copy */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_17826__) {

"use strict";
__nested_webpack_require_17826__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_17826__.d(__webpack_exports__, "xtract_array_copy", function() { return xtract_array_copy; });
/// <reference path="../../typings/functions.d.ts" />
function xtract_array_copy(src) {
    var N = src.length,
        dst = new src.constructor(N);
    for (var n = 0; n < N; n++)
        dst[n] = src[n];
    return dst;
}


/***/ }),

/***/ "./modules/functions/xtract_array_deinterlace.js":
/*!*******************************************************!*\
  !*** ./modules/functions/xtract_array_deinterlace.js ***!
  \*******************************************************/
/*! exports provided: xtract_array_deinterlace */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_18618__) {

"use strict";
__nested_webpack_require_18618__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_18618__.d(__webpack_exports__, "xtract_array_deinterlace", function() { return xtract_array_deinterlace; });
/* harmony import */ var _xtract_assert_array__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_18618__(/*! ./xtract_assert_array */ "./modules/functions/xtract_assert_array.js");
/* harmony import */ var _xtract_assert_positive_integer__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_18618__(/*! ./xtract_assert_positive_integer */ "./modules/functions/xtract_assert_positive_integer.js");
/// <reference path="../../typings/functions.d.ts" />



function xtract_array_deinterlace(data, num_arrays) {
    if (!Object(_xtract_assert_array__WEBPACK_IMPORTED_MODULE_0__["xtract_assert_array"])(data)) {
        return [];
    }
    var result, N;
    if (!Object(_xtract_assert_positive_integer__WEBPACK_IMPORTED_MODULE_1__["xtract_assert_positive_integer"])(num_arrays)) {
        throw ("num_arrays must be a positive integer");
    }
    result = [];
    N = data.length / num_arrays;
    for (var n = 0; n < num_arrays; n++) {
        result[n] = new data.constructor(N);
    }
    for (var k = 0; k < N; k++) {
        for (var j = 0; j < num_arrays; j++) {
            result[j][k] = data[k * num_arrays + j];
        }
    }
    return result;
}


/***/ }),

/***/ "./modules/functions/xtract_array_interlace.js":
/*!*****************************************************!*\
  !*** ./modules/functions/xtract_array_interlace.js ***!
  \*****************************************************/
/*! exports provided: xtract_array_interlace */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_20328__) {

"use strict";
__nested_webpack_require_20328__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_20328__.d(__webpack_exports__, "xtract_array_interlace", function() { return xtract_array_interlace; });
/* harmony import */ var _xtract_assert_array__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_20328__(/*! ./xtract_assert_array */ "./modules/functions/xtract_assert_array.js");
/// <reference path="../../typings/functions.d.ts" />


function xtract_array_interlace(data) {
    if (!Object(_xtract_assert_array__WEBPACK_IMPORTED_MODULE_0__["xtract_assert_array"])(data)) {
        return [];
    }
    var num_arrays = data.length,
        length = data[0].length;
    if (data.every(function (a) {
            return a.length === length;
        }) === false) {
        throw ("All argument lengths must be the same");
    }
    var result = new data[0].constructor(num_arrays * length);
    for (var k = 0; k < length; k++) {
        for (var j = 0; j < num_arrays; j++) {
            result[k * num_arrays + j] = data[j][k];
        }
    }
    return result;
}


/***/ }),

/***/ "./modules/functions/xtract_array_max.js":
/*!***********************************************!*\
  !*** ./modules/functions/xtract_array_max.js ***!
  \***********************************************/
/*! exports provided: xtract_array_max */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_21725__) {

"use strict";
__nested_webpack_require_21725__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_21725__.d(__webpack_exports__, "xtract_array_max", function() { return xtract_array_max; });
/* harmony import */ var _xtract_assert_array__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_21725__(/*! ./xtract_assert_array */ "./modules/functions/xtract_assert_array.js");
/// <reference path="../../typings/functions.d.ts" />

function xtract_array_max(data) {
    if (!Object(_xtract_assert_array__WEBPACK_IMPORTED_MODULE_0__["xtract_assert_array"])(data))
        return -Infinity;
    if (data.reduce) {
        return data.reduce(function (a, b) {
            if (b > a) {
                return b;
            }
            return a;
        }, data[0]);
    }
    var max = data[0],
        l = data.length;
    for (var n = 1; n < l; n++) {
        if (data[n] > max) {
            max = data[n];
        }
    }
    return max;
}


/***/ }),

/***/ "./modules/functions/xtract_array_min.js":
/*!***********************************************!*\
  !*** ./modules/functions/xtract_array_min.js ***!
  \***********************************************/
/*! exports provided: xtract_array_min */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_22989__) {

"use strict";
__nested_webpack_require_22989__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_22989__.d(__webpack_exports__, "xtract_array_min", function() { return xtract_array_min; });
/* harmony import */ var _xtract_assert_array__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_22989__(/*! ./xtract_assert_array */ "./modules/functions/xtract_assert_array.js");
/// <reference path="../../typings/functions.d.ts" />

function xtract_array_min(data) {
    if (!Object(_xtract_assert_array__WEBPACK_IMPORTED_MODULE_0__["xtract_assert_array"])(data))
        return Infinity;
    if (data.reduce) {
        return data.reduce(function (a, b) {
            if (b < a) {
                return b;
            }
            return a;
        }, data[0]);
    }
    var min = Infinity,
        l = data.length;
    for (var n = 0; n < l; n++) {
        if (data[n] < min) {
            min = data[n];
        }
    }
    return min;
}


/***/ }),

/***/ "./modules/functions/xtract_array_normalise.js":
/*!*****************************************************!*\
  !*** ./modules/functions/xtract_array_normalise.js ***!
  \*****************************************************/
/*! exports provided: xtract_array_normalise */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_24283__) {

"use strict";
__nested_webpack_require_24283__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_24283__.d(__webpack_exports__, "xtract_array_normalise", function() { return xtract_array_normalise; });
/* harmony import */ var _xtract_assert_array__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_24283__(/*! ./xtract_assert_array */ "./modules/functions/xtract_assert_array.js");
/* harmony import */ var _xtract_array_scale__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_24283__(/*! ./xtract_array_scale */ "./modules/functions/xtract_array_scale.js");
/* harmony import */ var _xtract_array_max__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_24283__(/*! ./xtract_array_max */ "./modules/functions/xtract_array_max.js");
/// <reference path="../../typings/functions.d.ts" />




function xtract_array_normalise(data) {
    if (!Object(_xtract_assert_array__WEBPACK_IMPORTED_MODULE_0__["xtract_assert_array"])(data))
        return 0;
    return Object(_xtract_array_scale__WEBPACK_IMPORTED_MODULE_1__["xtract_array_scale"])(data, 1.0 / Object(_xtract_array_max__WEBPACK_IMPORTED_MODULE_2__["xtract_array_max"])(data));
}


/***/ }),

/***/ "./modules/functions/xtract_array_scale.js":
/*!*************************************************!*\
  !*** ./modules/functions/xtract_array_scale.js ***!
  \*************************************************/
/*! exports provided: xtract_array_scale */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_25737__) {

"use strict";
__nested_webpack_require_25737__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_25737__.d(__webpack_exports__, "xtract_array_scale", function() { return xtract_array_scale; });
/* harmony import */ var _xtract_assert_array__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_25737__(/*! ./xtract_assert_array */ "./modules/functions/xtract_assert_array.js");
/* harmony import */ var _xtract_array_copy__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_25737__(/*! ./xtract_array_copy */ "./modules/functions/xtract_array_copy.js");
/// <reference path="../../typings/functions.d.ts" />


function xtract_array_scale(data, factor) {
    if (!Object(_xtract_assert_array__WEBPACK_IMPORTED_MODULE_0__["xtract_assert_array"])(data))
        return 0;
    if (typeof factor !== "number") {
        return 0;
    }
    var i = 0,
        l = data.length,
        a = Object(_xtract_array_copy__WEBPACK_IMPORTED_MODULE_1__["xtract_array_copy"])(data);
    for (i = 0; i < l; i++) {
        a[i] *= factor;
    }
    return a;
}


/***/ }),

/***/ "./modules/functions/xtract_array_sum.js":
/*!***********************************************!*\
  !*** ./modules/functions/xtract_array_sum.js ***!
  \***********************************************/
/*! exports provided: xtract_array_sum */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_27095__) {

"use strict";
__nested_webpack_require_27095__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_27095__.d(__webpack_exports__, "xtract_array_sum", function() { return xtract_array_sum; });
/* harmony import */ var _xtract_assert_array__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_27095__(/*! ./xtract_assert_array */ "./modules/functions/xtract_assert_array.js");
/// <reference path="../../typings/functions.d.ts" />

function xtract_array_sum(data) {
    if (!Object(_xtract_assert_array__WEBPACK_IMPORTED_MODULE_0__["xtract_assert_array"])(data))
        return 0;
    if (data.reduce) {
        return data.reduce(function (a, b) {
            return a + b;
        }, 0);
    }
    var sum = 0,
        l = data.length;
    for (var n = 0; n < l; n++) {
        sum += data[n];
    }
    return sum;
}


/***/ }),

/***/ "./modules/functions/xtract_array_to_JSON.js":
/*!***************************************************!*\
  !*** ./modules/functions/xtract_array_to_JSON.js ***!
  \***************************************************/
/*! exports provided: xtract_array_to_JSON */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_28256__) {

"use strict";
__nested_webpack_require_28256__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_28256__.d(__webpack_exports__, "xtract_array_to_JSON", function() { return xtract_array_to_JSON; });
/// <reference path="../../typings/functions.d.ts" />
function xtract_array_to_JSON(array) {
    if (array.join) {
        return '[' + array.join(', ') + ']';
    }
    var json = '[';
    var n = 0;
    while (n < this.length) {
        json = json + this[n];
        if (this[n + 1] !== undefined) {
            json = json + ',';
        }
        n++;
    }
    return json + ']';
}


/***/ }),

/***/ "./modules/functions/xtract_asdf.js":
/*!******************************************!*\
  !*** ./modules/functions/xtract_asdf.js ***!
  \******************************************/
/*! exports provided: xtract_asdf */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_29152__) {

"use strict";
__nested_webpack_require_29152__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_29152__.d(__webpack_exports__, "xtract_asdf", function() { return xtract_asdf; });
/* harmony import */ var _xtract_assert_array__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_29152__(/*! ./xtract_assert_array */ "./modules/functions/xtract_assert_array.js");
/// <reference path="../../typings/functions.d.ts" />

function xtract_asdf(array) {
    if (!Object(_xtract_assert_array__WEBPACK_IMPORTED_MODULE_0__["xtract_assert_array"])(array))
        return 0;
    var n = array.length;
    var result = new Float64Array(n);
    while (n--) {
        var sd = 0.0;
        for (var i = 0; i < array.length - n; i++) {
            sd += Math.pow(array[i] - array[i + n], 2);
        }
        result[n] = sd / array.length;
    }
    return result;
}


/***/ }),

/***/ "./modules/functions/xtract_assert_array.js":
/*!**************************************************!*\
  !*** ./modules/functions/xtract_assert_array.js ***!
  \**************************************************/
/*! exports provided: xtract_assert_array */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_30345__) {

"use strict";
__nested_webpack_require_30345__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_30345__.d(__webpack_exports__, "xtract_assert_array", function() { return xtract_assert_array; });
/// <reference path="../../typings/functions.d.ts" />
function xtract_assert_array(array) {
    return (typeof array === "object" && array.length !== undefined && array.length > 0);
}


/***/ }),

/***/ "./modules/functions/xtract_assert_positive_integer.js":
/*!*************************************************************!*\
  !*** ./modules/functions/xtract_assert_positive_integer.js ***!
  \*************************************************************/
/*! exports provided: xtract_assert_positive_integer */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_31130__) {

"use strict";
__nested_webpack_require_31130__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_31130__.d(__webpack_exports__, "xtract_assert_positive_integer", function() { return xtract_assert_positive_integer; });
/// <reference path="../../typings/functions.d.ts" />
function xtract_assert_positive_integer(number) {
    return (typeof number === "number" && number >= 0 && number === Math.round(number));
}


/***/ }),

/***/ "./modules/functions/xtract_autocorrelation.js":
/*!*****************************************************!*\
  !*** ./modules/functions/xtract_autocorrelation.js ***!
  \*****************************************************/
/*! exports provided: xtract_autocorrelation */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_31908__) {

"use strict";
__nested_webpack_require_31908__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_31908__.d(__webpack_exports__, "xtract_autocorrelation", function() { return xtract_autocorrelation; });
/* harmony import */ var _xtract_assert_array__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_31908__(/*! ./xtract_assert_array */ "./modules/functions/xtract_assert_array.js");
/// <reference path="../../typings/functions.d.ts" />


function xtract_autocorrelation(array) {
    if (!Object(_xtract_assert_array__WEBPACK_IMPORTED_MODULE_0__["xtract_assert_array"])(array))
        return 0;
    var n = array.length;
    var result = new Float64Array(n);
    while (n--) {
        var corr = 0;
        for (var i = 0; i < array.length - n; i++) {
            corr += array[i] * array[i + n];
        }
        result[n] = corr / array.length;
    }
    return result;
}


/***/ }),

/***/ "./modules/functions/xtract_average_deviation.js":
/*!*******************************************************!*\
  !*** ./modules/functions/xtract_average_deviation.js ***!
  \*******************************************************/
/*! exports provided: xtract_average_deviation */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_33151__) {

"use strict";
__nested_webpack_require_33151__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_33151__.d(__webpack_exports__, "xtract_average_deviation", function() { return xtract_average_deviation; });
/* harmony import */ var _xtract_assert_array__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_33151__(/*! ./xtract_assert_array */ "./modules/functions/xtract_assert_array.js");
/* harmony import */ var _xtract_mean__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_33151__(/*! ./xtract_mean */ "./modules/functions/xtract_mean.js");
/// <reference path="../../typings/functions.d.ts" />


function xtract_average_deviation(array, mean) {
    if (!Object(_xtract_assert_array__WEBPACK_IMPORTED_MODULE_0__["xtract_assert_array"])(array))
        return 0;
    if (typeof mean !== "number") {
        mean = Object(_xtract_mean__WEBPACK_IMPORTED_MODULE_1__["xtract_mean"])(array);
    }
    var result = 0.0;
    if (array.reduce) {
        result = array.reduce(function (a, b) {
            return a + Math.abs(b - mean);
        }, 0);
    } else {
        for (var n = 0; n < array.length; n++) {
            result += Math.abs(array[n] - mean);
        }
    }
    return result / array.length;
}


/***/ }),

/***/ "./modules/functions/xtract_bark_coefficients.js":
/*!*******************************************************!*\
  !*** ./modules/functions/xtract_bark_coefficients.js ***!
  \*******************************************************/
/*! exports provided: xtract_bark_coefficients */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_34720__) {

"use strict";
__nested_webpack_require_34720__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_34720__.d(__webpack_exports__, "xtract_bark_coefficients", function() { return xtract_bark_coefficients; });
/* harmony import */ var _xtract_assert_array__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_34720__(/*! ./xtract_assert_array */ "./modules/functions/xtract_assert_array.js");
/// <reference path="../../typings/functions.d.ts" />

function xtract_bark_coefficients(spectrum, bark_limits) {
    if (!Object(_xtract_assert_array__WEBPACK_IMPORTED_MODULE_0__["xtract_assert_array"])(spectrum))
        return 0;
    if (bark_limits === undefined) {
        throw ("xtract_bark_coefficients requires compute limits from xtract_init_bark");
    }
    var N = spectrum.length >> 1;
    var bands = bark_limits.length;
    var results = new Float64Array(bands);
    for (var band = 0; band < bands - 1; band++) {
        results[band] = 0.0;
        for (var n = bark_limits[band]; n < bark_limits[band + 1]; n++) {
            results[band] += spectrum[n];
        }
    }
    return results;
}


/***/ }),

/***/ "./modules/functions/xtract_chroma.js":
/*!********************************************!*\
  !*** ./modules/functions/xtract_chroma.js ***!
  \********************************************/
/*! exports provided: xtract_chroma */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_36132__) {

"use strict";
__nested_webpack_require_36132__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_36132__.d(__webpack_exports__, "xtract_chroma", function() { return xtract_chroma; });
/* harmony import */ var _xtract_assert_array__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_36132__(/*! ./xtract_assert_array */ "./modules/functions/xtract_assert_array.js");
/// <reference path="../../typings/functions.d.ts" />

function xtract_chroma(spectrum, chromaFilters) {
    if (!Object(_xtract_assert_array__WEBPACK_IMPORTED_MODULE_0__["xtract_assert_array"])(spectrum)) {
        return 0;
    }
    if (chromaFilters.wts === undefined) {
        throw ("xtract_chroma requires chroma filters from xtract_init_chroma");
    }
    if (chromaFilters.nfft !== spectrum.length / 2) {
        throw ("the FFT lengths of the spectrum (" + spectrum.length / 2 + ") and chroma filterbank (" + chromaFilters.nfft + ") do not match");
    }
    var result = new Float64Array(chromaFilters.nbins);
    for (var i = 0; i < chromaFilters.nbins; i++) {
        var sum = 0;
        for (var j = 0; j < chromaFilters.nfft; j++) {
            sum += chromaFilters.wts[i][j] * spectrum[j];
        }
        result[i] = sum;
    }
    return result;
}


/***/ }),

/***/ "./modules/functions/xtract_complex_spectrum.js":
/*!******************************************************!*\
  !*** ./modules/functions/xtract_complex_spectrum.js ***!
  \******************************************************/
/*! exports provided: xtract_complex_spectrum */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_37730__) {

"use strict";
__nested_webpack_require_37730__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_37730__.d(__webpack_exports__, "xtract_complex_spectrum", function() { return xtract_complex_spectrum; });
/* harmony import */ var _xtract_assert_array__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_37730__(/*! ./xtract_assert_array */ "./modules/functions/xtract_assert_array.js");
/* harmony import */ var _freeFFT__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_37730__(/*! ../freeFFT */ "./modules/freeFFT.js");
/// <reference path="../../typings/functions.d.ts" />



function xtract_complex_spectrum(array, sample_rate, withDC) {
    if (!Object(_xtract_assert_array__WEBPACK_IMPORTED_MODULE_0__["xtract_assert_array"])(array))
        return 0;
    if (typeof sample_rate !== "number") {
        console.error("Sample Rate must be defined");
        return null;
    }
    if (withDC === undefined) {
        withDC = false;
    }
    var N = array.length;
    var result, align = 0,
        amps, freqs;
    if (withDC) {
        result = new Float64Array(3 * (N / 2 + 1));
    } else {
        align = 1;
        result = new Float64Array(3 * (N / 2));
    }
    amps = result.subarray(0, 2 * (result.length / 3));
    freqs = result.subarray(2 * (result.length / 3));
    var reals = new Float64Array(N);
    var imags = new Float64Array(N);
    for (var i = 0; i < N; i++) {
        reals[i] = array[i];
    }
    Object(_freeFFT__WEBPACK_IMPORTED_MODULE_1__["transform"])(reals, imags);
    for (var k = align; k <= reals.length / 2; k++) {
        amps[(k - align) * 2] = reals[k];
        amps[(k - align) * 2 + 1] = imags[k];
        freqs[k - align] = (2 * k / N) * (sample_rate / 2);
    }
    return result;
}


/***/ }),

/***/ "./modules/functions/xtract_create_window.js":
/*!***************************************************!*\
  !*** ./modules/functions/xtract_create_window.js ***!
  \***************************************************/
/*! exports provided: xtract_create_window */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_39802__) {

"use strict";
__nested_webpack_require_39802__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_39802__.d(__webpack_exports__, "xtract_create_window", function() { return xtract_create_window; });
/* harmony import */ var _xtract_assert_positive_integer__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_39802__(/*! ./xtract_assert_positive_integer */ "./modules/functions/xtract_assert_positive_integer.js");
/// <reference path="../../typings/functions.d.ts" />


function welch(N) {
    var W = new Float64Array(N);
    var n;
    var N12 = (N - 1) / 2;
    for (n = 0; n < N; n++) {
        W[n] = 1.0 - Math.pow((n - N12) / N12, 2);
    }
    return W;
}

function sine(N) {
    var w = new Float64Array(N),
        n;
    var arga = (Math.PI * n) / (N - 1);
    for (n = 0; n < N; n++) {
        w[n] = Math.sin(arga);
    }
    return w;
}

function hann(N) {
    var w = new Float64Array(N),
        n;
    for (n = 0; n < N; n++) {
        w[n] = 0.5 - (1 - Math.cos((Math.PI * 2 * n) / (N - 1)));
    }
    return w;
}

function hamming(N) {
    var w = new Float64Array(N),
        alpha = 25 / 46,
        beta = 21 / 46,
        n;
    for (n = 0; n < N; n++) {
        w[n] = alpha - beta * Math.cos((Math.PI * 2 * n) / (N - 1));
    }
    return w;
}

function xtract_create_window(N, type) {
    if (!Object(_xtract_assert_positive_integer__WEBPACK_IMPORTED_MODULE_0__["xtract_assert_positive_integer"])(N)) {
        throw ("N must be a defined, positive integer");
    }
    if (typeof type !== "string" || type.length === 0) {
        throw ("Type must be defined");
    }
    type = type.toLowerCase();
    switch (type) {
        case "hamming":
            return hamming(N);
        case "welch":
            return welch(N);
        case "sine":
            return sine(N);
        case "hann":
            return hann(N);
        default:
            throw ("Window function\"" + type + "\" not defined");
    }
}


/***/ }),

/***/ "./modules/functions/xtract_crest.js":
/*!*******************************************!*\
  !*** ./modules/functions/xtract_crest.js ***!
  \*******************************************/
/*! exports provided: xtract_crest */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_42050__) {

"use strict";
__nested_webpack_require_42050__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_42050__.d(__webpack_exports__, "xtract_crest", function() { return xtract_crest; });
/* harmony import */ var _xtract_assert_array__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_42050__(/*! ./xtract_assert_array */ "./modules/functions/xtract_assert_array.js");
/* harmony import */ var _xtract_array_max__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_42050__(/*! ./xtract_array_max */ "./modules/functions/xtract_array_max.js");
/* harmony import */ var _xtract_mean__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_42050__(/*! ./xtract_mean */ "./modules/functions/xtract_mean.js");
/// <reference path="../../typings/functions.d.ts" />




function xtract_crest(data, max, mean) {
    if (!Object(_xtract_assert_array__WEBPACK_IMPORTED_MODULE_0__["xtract_assert_array"])(data))
        return 0;
    if (typeof max !== "number") {
        max = Object(_xtract_array_max__WEBPACK_IMPORTED_MODULE_1__["xtract_array_max"])(data);
    }
    if (typeof mean !== "number") {
        mean = Object(_xtract_mean__WEBPACK_IMPORTED_MODULE_2__["xtract_mean"])(data);
    }
    return max / mean;
}


/***/ }),

/***/ "./modules/functions/xtract_dct.js":
/*!*****************************************!*\
  !*** ./modules/functions/xtract_dct.js ***!
  \*****************************************/
/*! exports provided: xtract_dct */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_43528__) {

"use strict";
__nested_webpack_require_43528__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_43528__.d(__webpack_exports__, "xtract_dct", function() { return xtract_dct; });
/* harmony import */ var _xtract_assert_array__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_43528__(/*! ./xtract_assert_array */ "./modules/functions/xtract_assert_array.js");
/// <reference path="../../typings/functions.d.ts" />


function xtract_dct(array) {
    if (!Object(_xtract_assert_array__WEBPACK_IMPORTED_MODULE_0__["xtract_assert_array"])(array))
        return 0;
    var N = array.length;
    var result = new Float64Array(N);
    if (array.reduce) {
        result.forEach(function (e, i, a) {
            var nN = i / N;
            a[i] = array.reduce(function (r, d, m) {
                return r + d * Math.cos(Math.PI * nN * (m + 0.5));
            });
        });
    } else {
        for (var n = 0; n < N; n++) {
            var nN = n / N;
            for (var m = 0; m < N; m++) {
                result[n] += array[m] * Math.cos(Math.PI * nN * (m + 0.5));
            }
        }
    }
    return result;
}


/***/ }),

/***/ "./modules/functions/xtract_dct_2.js":
/*!*******************************************!*\
  !*** ./modules/functions/xtract_dct_2.js ***!
  \*******************************************/
/*! exports provided: xtract_dct_2 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_44951__) {

"use strict";
__nested_webpack_require_44951__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_44951__.d(__webpack_exports__, "xtract_dct_2", function() { return xtract_dct_2; });
/* harmony import */ var _xtract_assert_array__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_44951__(/*! ./xtract_assert_array */ "./modules/functions/xtract_assert_array.js");
/* harmony import */ var _xtract_init_dct__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_44951__(/*! ./xtract_init_dct */ "./modules/functions/xtract_init_dct.js");
/* harmony import */ var _xtract_array_sum__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_44951__(/*! ./xtract_array_sum */ "./modules/functions/xtract_array_sum.js");
/// <reference path="../../typings/functions.d.ts" />




function xtract_dct_2(array, dct) {
    if (!Object(_xtract_assert_array__WEBPACK_IMPORTED_MODULE_0__["xtract_assert_array"])(array))
        return 0;
    var N = array.length;
    if (dct === undefined) {
        dct = Object(_xtract_init_dct__WEBPACK_IMPORTED_MODULE_1__["xtract_init_dct"])(N);
    }
    var result = new Float64Array(N);
    result[0] = Object(_xtract_array_sum__WEBPACK_IMPORTED_MODULE_2__["xtract_array_sum"])(array);
    if (result.forEach && array.reduce) {
        result.forEach(function (e, k, ar) {
            ar[k] = array.reduce(function (a, b, n) {
                return a + b * dct.wt[k][n];
            });
        });
    } else {
        for (var k = 1; k < N; k++) {
            for (var n = 0; n < N; n++) {
                result[k] += array[n] * dct.wt[k][n];
            }
        }
    }
    return result;
}


/***/ }),

/***/ "./modules/functions/xtract_energy.js":
/*!********************************************!*\
  !*** ./modules/functions/xtract_energy.js ***!
  \********************************************/
/*! exports provided: xtract_energy */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_46862__) {

"use strict";
__nested_webpack_require_46862__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_46862__.d(__webpack_exports__, "xtract_energy", function() { return xtract_energy; });
/* harmony import */ var _xtract_assert_array__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_46862__(/*! ./xtract_assert_array */ "./modules/functions/xtract_assert_array.js");
/* harmony import */ var _xtract_rms_amplitude__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_46862__(/*! ./xtract_rms_amplitude */ "./modules/functions/xtract_rms_amplitude.js");
/// <reference path="../../typings/functions.d.ts" />



function xtract_energy(array, sample_rate, window_ms) {
    if (!Object(_xtract_assert_array__WEBPACK_IMPORTED_MODULE_0__["xtract_assert_array"])(array))
        return 0;
    if (typeof sample_rate !== "number") {
        console.error("xtract_energy requires sample_rate to be defined");
        return;
    }
    if (typeof window_ms !== "number") {
        window_ms = 100;
    }
    if (window_ms <= 0) {
        window_ms = 100;
    }
    var N = array.length;
    var L = Math.floor(sample_rate * (window_ms / 1000.0));
    var K = Math.ceil(N / L);
    var result = new Float64Array(K);
    for (var k = 0; k < K; k++) {
        var frame = array.subarray(k * L, k * L + L);
        var rms = Object(_xtract_rms_amplitude__WEBPACK_IMPORTED_MODULE_1__["xtract_rms_amplitude"])(frame);
        result[k] = rms;
    }
    return result;
}


/***/ }),

/***/ "./modules/functions/xtract_f0.js":
/*!****************************************!*\
  !*** ./modules/functions/xtract_f0.js ***!
  \****************************************/
/*! exports provided: xtract_f0 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_48596__) {

"use strict";
__nested_webpack_require_48596__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_48596__.d(__webpack_exports__, "xtract_f0", function() { return xtract_f0; });
/* harmony import */ var _xtract_assert_array__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_48596__(/*! ./xtract_assert_array */ "./modules/functions/xtract_assert_array.js");
/* harmony import */ var _xtract_array_copy__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_48596__(/*! ./xtract_array_copy */ "./modules/functions/xtract_array_copy.js");
/* harmony import */ var _xtract_array_max__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_48596__(/*! ./xtract_array_max */ "./modules/functions/xtract_array_max.js");
/* harmony import */ var _xtract_array_bound__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_48596__(/*! ./xtract_array_bound */ "./modules/functions/xtract_array_bound.js");
/// <reference path="../../typings/functions.d.ts" />





function calc_err_tau_x(sub_arr, M, tau) {
    var err_tau = 0.0,
        n;
    for (n = 1; n < M; n++) {
        err_tau += Math.abs(sub_arr[n] - sub_arr[n + tau]);
    }
    return err_tau;
}

function xtract_f0(timeArray, sampleRate) {
    if (!Object(_xtract_assert_array__WEBPACK_IMPORTED_MODULE_0__["xtract_assert_array"])(timeArray))
        return 0;
    if (typeof sampleRate !== "number") {
        sampleRate = 44100.0;
    }
    var sub_arr = Object(_xtract_array_copy__WEBPACK_IMPORTED_MODULE_1__["xtract_array_copy"])(timeArray);
    var N = sub_arr.length;
    var M = N / 2;
    var n;

    var threshold_peak = 0.8,
        threshold_centre = 0.3,
        array_max = 0;

    array_max = Object(_xtract_array_max__WEBPACK_IMPORTED_MODULE_2__["xtract_array_max"])(sub_arr);
    threshold_peak *= array_max;
    threshold_centre *= array_max;

    sub_arr = Object(_xtract_array_bound__WEBPACK_IMPORTED_MODULE_3__["xtract_array_bound"])(sub_arr, -threshold_peak, threshold_peak);

    sub_arr.forEach(function (v, i, a) {
        a[i] = Math.max(0, v - threshold_centre);
    });

    var err_tau_1 = calc_err_tau_x(sub_arr, M, 1);
    for (var tau = 2; tau < M; tau++) {
        var err_tau_x = calc_err_tau_x(sub_arr, M, tau);
        if (err_tau_x < err_tau_1) {
            return sampleRate / (tau + (err_tau_x / err_tau_1));
        }
    }
    return -0;
}


/***/ }),

/***/ "./modules/functions/xtract_failsafe_f0.js":
/*!*************************************************!*\
  !*** ./modules/functions/xtract_failsafe_f0.js ***!
  \*************************************************/
/*! exports provided: xtract_failsafe_f0 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_51230__) {

"use strict";
__nested_webpack_require_51230__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_51230__.d(__webpack_exports__, "xtract_failsafe_f0", function() { return xtract_failsafe_f0; });
/* harmony import */ var _xtract_f0__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_51230__(/*! ./xtract_f0 */ "./modules/functions/xtract_f0.js");
/// <reference path="../../typings/functions.d.ts" />


function xtract_failsafe_f0(timeArray, sampleRate) {
    return Object(_xtract_f0__WEBPACK_IMPORTED_MODULE_0__["xtract_f0"])(timeArray, sampleRate);
}


/***/ }),

/***/ "./modules/functions/xtract_flatness.js":
/*!**********************************************!*\
  !*** ./modules/functions/xtract_flatness.js ***!
  \**********************************************/
/*! exports provided: xtract_flatness */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_52104__) {

"use strict";
__nested_webpack_require_52104__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_52104__.d(__webpack_exports__, "xtract_flatness", function() { return xtract_flatness; });
/* harmony import */ var _xtract_assert_array__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_52104__(/*! ./xtract_assert_array */ "./modules/functions/xtract_assert_array.js");
/// <reference path="../../typings/functions.d.ts" />


function xtract_flatness(spectrum) {
    if (!Object(_xtract_assert_array__WEBPACK_IMPORTED_MODULE_0__["xtract_assert_array"])(spectrum))
        return 0;
    var count = 0,
        denormal_found = false,
        num = 1.0,
        den = 0.0,
        temp = 0.0;
    var N = spectrum.length;
    var K = N >> 1;
    var amps = spectrum.subarray(0, K);
    for (var n = 0; n < K; n++) {
        temp = Math.max(1e-32, amps[n]);
        num *= temp;
        den += temp;
        count++;
    }
    if (count === 0) {
        return 0;
    }
    num = Math.pow(num, 1.0 / count);
    den /= count;

    return num / den;
}


/***/ }),

/***/ "./modules/functions/xtract_flatness_db.js":
/*!*************************************************!*\
  !*** ./modules/functions/xtract_flatness_db.js ***!
  \*************************************************/
/*! exports provided: xtract_flatness_db */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_53488__) {

"use strict";
__nested_webpack_require_53488__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_53488__.d(__webpack_exports__, "xtract_flatness_db", function() { return xtract_flatness_db; });
/* harmony import */ var _xtract_assert_array__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_53488__(/*! ./xtract_assert_array */ "./modules/functions/xtract_assert_array.js");
/* harmony import */ var _xtract_flatness__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_53488__(/*! ./xtract_flatness */ "./modules/functions/xtract_flatness.js");
/// <reference path="../../typings/functions.d.ts" />



function xtract_flatness_db(spectrum, flatness) {
    if (!Object(_xtract_assert_array__WEBPACK_IMPORTED_MODULE_0__["xtract_assert_array"])(spectrum))
        return 0;
    if (typeof flatness !== "number") {
        flatness = Object(_xtract_flatness__WEBPACK_IMPORTED_MODULE_1__["xtract_flatness"])(spectrum);
    }
    return 10.0 * Math.log10(flatness);
}


/***/ }),

/***/ "./modules/functions/xtract_frame_from_array.js":
/*!******************************************************!*\
  !*** ./modules/functions/xtract_frame_from_array.js ***!
  \******************************************************/
/*! exports provided: xtract_frame_from_array */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_54803__) {

"use strict";
__nested_webpack_require_54803__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_54803__.d(__webpack_exports__, "xtract_frame_from_array", function() { return xtract_frame_from_array; });
/* harmony import */ var _xtract_assert_positive_integer__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_54803__(/*! ./xtract_assert_positive_integer */ "./modules/functions/xtract_assert_positive_integer.js");
/* harmony import */ var _xtract_assert_array__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_54803__(/*! ./xtract_assert_array */ "./modules/functions/xtract_assert_array.js");
/* harmony import */ var _xtract_get_number_of_frames__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_54803__(/*! ./xtract_get_number_of_frames */ "./modules/functions/xtract_get_number_of_frames.js");
/// <reference path="../../typings/functions.d.ts" />




function xtract_frame_from_array(src, dst, index, frame_size, hop_size) {
    if (hop_size === undefined) {
        hop_size = frame_size;
    }
    if (!Object(_xtract_assert_positive_integer__WEBPACK_IMPORTED_MODULE_0__["xtract_assert_positive_integer"])(index)) {
        throw ("xtract_get_frame requires the index to be an integer value");
    }
    if (!Object(_xtract_assert_positive_integer__WEBPACK_IMPORTED_MODULE_0__["xtract_assert_positive_integer"])(frame_size)) {
        throw ("xtract_get_frame requires the frame_size to be a positive integer");
    }
    if (!Object(_xtract_assert_array__WEBPACK_IMPORTED_MODULE_1__["xtract_assert_array"])(src)) {
        throw ("Invalid data parameter. Must be item with iterable list");
    }
    if (!Object(_xtract_assert_array__WEBPACK_IMPORTED_MODULE_1__["xtract_assert_array"])(dst)) {
        throw ("dst must be an Array-like object equal in length to frame_size");
    }
    if (!Object(_xtract_assert_positive_integer__WEBPACK_IMPORTED_MODULE_0__["xtract_assert_positive_integer"])(hop_size)) {
        throw ("xtract_get_frame requires the hop_size to be a positive integer");
    }
    var K = Object(_xtract_get_number_of_frames__WEBPACK_IMPORTED_MODULE_2__["xtract_get_number_of_frames"])(src, hop_size);
    if (index >= K) {
        throw ("index number " + index + " out of bounds");
    }
    var n = 0;
    var offset = index * hop_size;
    while (n < dst.length && n < src.length && n < frame_size) {
        dst[n] = src[n + offset];
        n++;
    }
    while (n < dst.length) {
        dst[n] = 0.0;
    }
}


/***/ }),

/***/ "./modules/functions/xtract_get_data_frames.js":
/*!*****************************************************!*\
  !*** ./modules/functions/xtract_get_data_frames.js ***!
  \*****************************************************/
/*! exports provided: xtract_get_data_frames */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_57594__) {

"use strict";
__nested_webpack_require_57594__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_57594__.d(__webpack_exports__, "xtract_get_data_frames", function() { return xtract_get_data_frames; });
/* harmony import */ var _xtract_assert_array__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_57594__(/*! ./xtract_assert_array */ "./modules/functions/xtract_assert_array.js");
/* harmony import */ var _xtract_assert_positive_integer__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_57594__(/*! ./xtract_assert_positive_integer */ "./modules/functions/xtract_assert_positive_integer.js");
/// <reference path="../../typings/functions.d.ts" />



function xtract_get_data_frames(data, frame_size, hop_size, copy) {
    if (hop_size === undefined) {
        hop_size = frame_size;
    }
    (function (data, frame_size, hop_size) {
        if (!Object(_xtract_assert_array__WEBPACK_IMPORTED_MODULE_0__["xtract_assert_array"])(data)) {
            throw ("Invalid data parameter. Must be item with iterable list");
        }
        if (!Object(_xtract_assert_positive_integer__WEBPACK_IMPORTED_MODULE_1__["xtract_assert_positive_integer"])(frame_size)) {
            throw ("xtract_get_data_frames requires the frame_size to be a positive integer");
        }
        if (!Object(_xtract_assert_positive_integer__WEBPACK_IMPORTED_MODULE_1__["xtract_assert_positive_integer"])(hop_size)) {
            throw ("xtract_get_data_frames requires the hop_size to be a positive integer");
        }
        return true;
    })(data, frame_size, hop_size);

    var frames = [];
    var N = data.length;
    var K = Math.ceil(N / hop_size);
    var sub_frame;
    for (var k = 0; k < K; k++) {
        var offset = k * hop_size;
        if (copy) {
            sub_frame = new Float64Array(frame_size);
            for (var n = 0; n < frame_size && n + offset < data.length; n++) {
                sub_frame[n] = data[n + offset];
            }
        } else {
            sub_frame = data.subarray(offset, offset + frame_size);
            if (sub_frame.length < frame_size) {
                // Must zero-pad up to the length
                var c_frame = new Float64Array(frame_size);
                for (var i = 0; i < sub_frame.length; i++) {
                    c_frame[i] = sub_frame[i];
                }
                sub_frame = c_frame;
            }
        }
        frames.push(sub_frame);
    }
    return frames;
}


/***/ }),

/***/ "./modules/functions/xtract_get_number_of_frames.js":
/*!**********************************************************!*\
  !*** ./modules/functions/xtract_get_number_of_frames.js ***!
  \**********************************************************/
/*! exports provided: xtract_get_number_of_frames */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_60401__) {

"use strict";
__nested_webpack_require_60401__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_60401__.d(__webpack_exports__, "xtract_get_number_of_frames", function() { return xtract_get_number_of_frames; });
/* harmony import */ var _xtract_assert_array__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_60401__(/*! ./xtract_assert_array */ "./modules/functions/xtract_assert_array.js");
/// <reference path="../../typings/functions.d.ts" />

function xtract_get_number_of_frames(data, hop_size) {
    if (!Object(_xtract_assert_array__WEBPACK_IMPORTED_MODULE_0__["xtract_assert_array"])(data)) {
        throw ("Invalid data parameter. Must be item with iterable list");
    }
    if (typeof hop_size !== "number" && hop_size <= 0) {
        throw ("Invalid hop_size. Must be positive integer");
    }
    return Math.floor(data.length / hop_size);
}


/***/ }),

/***/ "./modules/functions/xtract_harmonic_spectrum.js":
/*!*******************************************************!*\
  !*** ./modules/functions/xtract_harmonic_spectrum.js ***!
  \*******************************************************/
/*! exports provided: xtract_harmonic_spectrum */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_61625__) {

"use strict";
__nested_webpack_require_61625__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_61625__.d(__webpack_exports__, "xtract_harmonic_spectrum", function() { return xtract_harmonic_spectrum; });
/* harmony import */ var _xtract_assert_array__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_61625__(/*! ./xtract_assert_array */ "./modules/functions/xtract_assert_array.js");
/// <reference path="../../typings/functions.d.ts" />


function xtract_harmonic_spectrum(peakSpectrum, f0, threshold) {
    if (!Object(_xtract_assert_array__WEBPACK_IMPORTED_MODULE_0__["xtract_assert_array"])(peakSpectrum))
        return 0;
    var N = peakSpectrum.length;
    var K = N >> 1;
    var result = new Float64Array(N);
    var ampsIn = peakSpectrum.subarray(0, K);
    var freqsIn = peakSpectrum.subarray(K);
    var ampsOut = result.subarray(0, K);
    var freqsOut = result.subarray(K);
    var n = K;
    if (f0 === undefined || threshold === undefined) {
        throw ("harmonic_spectrum requires f0 and threshold to be numbers and defined");
    }
    if (threshold > 1) {
        threshold /= 100.0;
    }
    while (n--) {
        if (freqsIn[n] !== 0.0) {
            var ratio = freqsIn[n] / f0;
            var nearest = Math.round(ratio);
            var distance = Math.abs(nearest - ratio);
            if (distance > threshold) {
                ampsOut[n] = 0.0;
                freqsOut[n] = 0.0;
            } else {
                ampsOut[n] = ampsIn[n];
                freqsOut[n] = freqsIn[n];
            }
        } else {
            result[n] = 0.0;
            freqsOut[n] = 0.0;
        }
    }
    return result;
}


/***/ }),

/***/ "./modules/functions/xtract_highest_value.js":
/*!***************************************************!*\
  !*** ./modules/functions/xtract_highest_value.js ***!
  \***************************************************/
/*! exports provided: xtract_highest_value */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_63620__) {

"use strict";
__nested_webpack_require_63620__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_63620__.d(__webpack_exports__, "xtract_highest_value", function() { return xtract_highest_value; });
/* harmony import */ var _xtract_assert_array__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_63620__(/*! ./xtract_assert_array */ "./modules/functions/xtract_assert_array.js");
/* harmony import */ var _xtract_lowhigh__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_63620__(/*! ./xtract_lowhigh */ "./modules/functions/xtract_lowhigh.js");
/// <reference path="../../typings/functions.d.ts" />



function xtract_highest_value(data, threshold) {
    if (!Object(_xtract_assert_array__WEBPACK_IMPORTED_MODULE_0__["xtract_assert_array"])(data))
        return 0;
    if (typeof threshold !== "number") {
        threshold = +Infinity;
    }
    return Object(_xtract_lowhigh__WEBPACK_IMPORTED_MODULE_1__["xtract_lowhigh"])(data, threshold).max;
}


/***/ }),

/***/ "./modules/functions/xtract_hps.js":
/*!*****************************************!*\
  !*** ./modules/functions/xtract_hps.js ***!
  \*****************************************/
/*! exports provided: xtract_hps */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_64859__) {

"use strict";
__nested_webpack_require_64859__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_64859__.d(__webpack_exports__, "xtract_hps", function() { return xtract_hps; });
/* harmony import */ var _xtract_assert_array__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_64859__(/*! ./xtract_assert_array */ "./modules/functions/xtract_assert_array.js");
/// <reference path="../../typings/functions.d.ts" />


function get_peak_index(M, amps) {
    var peak_index = 0,
        peak = 0,
        i;
    var tempProduct = new Float64Array(M);
    tempProduct.forEach(function (e, i, a) {
        a[i] = amps[i] * amps[i * 2] * amps[i * 3];
    });
    tempProduct.forEach(function (v, i) {
        if (v > peak) {
            peak = v;
            peak_index = i;
        }
    });
    return peak_index;
}

function xtract_hps(spectrum) {
    if (!Object(_xtract_assert_array__WEBPACK_IMPORTED_MODULE_0__["xtract_assert_array"])(spectrum))
        return 0;
    var peak_index = 0,
        position1_lwr = 0,
        largest1_lwr = 0,
        ratio1 = 0;
    var N = spectrum.length;
    var K = N >> 1;
    var amps = spectrum.subarray(0, K);
    var freqs = spectrum.subarray(K);
    var M = Math.ceil(K / 3.0);
    var i;
    if (M <= 1) {
        throw ("Input Data is too short for HPS");
    }

    peak_index = get_peak_index(M, amps);

    for (i = 0; i < K; i++) {
        if (amps[i] > largest1_lwr && i !== peak_index) {
            largest1_lwr = amps[i];
            position1_lwr = i;
        }
    }

    ratio1 = amps[position1_lwr] / amps[peak_index];

    if (position1_lwr > peak_index * 0.4 && position1_lwr < peak_index * 0.6 && ratio1 > 0.1)
        peak_index = position1_lwr;

    return freqs[peak_index];
}


/***/ }),

/***/ "./modules/functions/xtract_init_bark.js":
/*!***********************************************!*\
  !*** ./modules/functions/xtract_init_bark.js ***!
  \***********************************************/
/*! exports provided: xtract_init_bark */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_66923__) {

"use strict";
__nested_webpack_require_66923__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_66923__.d(__webpack_exports__, "xtract_init_bark", function() { return xtract_init_bark; });
/// <reference path="../../typings/functions.d.ts" />
function xtract_init_bark(N, sampleRate, bands) {
    if (typeof bands !== "number" || bands < 0 || bands > 26) {
        bands = 26;
    }
    var edges = [0, 100, 200, 300, 400, 510, 630, 770, 920, 1080, 1270, 1480, 1720, 2000, 2320, 2700, 3150, 3700, 4400, 5300, 6400, 7700, 9500, 12000, 15500, 20500, 27000];
    var band_limits = new Int32Array(bands);
    while (bands--) {
        band_limits[bands] = (edges[bands] / sampleRate) * N;
    }
    return band_limits;
}


/***/ }),

/***/ "./modules/functions/xtract_init_chroma.js":
/*!*************************************************!*\
  !*** ./modules/functions/xtract_init_chroma.js ***!
  \*************************************************/
/*! exports provided: xtract_init_chroma */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_67986__) {

"use strict";
__nested_webpack_require_67986__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_67986__.d(__webpack_exports__, "xtract_init_chroma", function() { return xtract_init_chroma; });
/* harmony import */ var _xtract_array_sum__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_67986__(/*! ./xtract_array_sum */ "./modules/functions/xtract_array_sum.js");
/// <reference path="../../typings/functions.d.ts" />

function xtract_init_chroma(N, sampleRate, nbins, A440, f_ctr, octwidth) {
    /*run arg checks here... (if(nbins=='undefined')*/

    if (typeof nbins !== "number" || nbins <= 1) {
        nbins = 12;
    }
    if (typeof A440 !== "number" || A440 <= 27.5) {
        A440 = 440;
    }
    if (typeof f_ctr !== "number") {
        f_ctr = 1000;
    }
    if (typeof octwidth !== "number") {
        octwidth = 1;
    }
    var A0 = 27.5; // A0 in Hz
    var N2 = N; // ignore freq values returned by xtract_spectrum - this relies on dc-offset being kept
    var ctroct = Math.log(f_ctr / A0) / Math.LN2; // f_ctr in octaves
    var chromaFilters = {
        wts: [],
        nfft: N2,
        nbins: nbins,
    };
    var fftfrqbins = new Float64Array(N2);
    var binwidthbins = new Float64Array(N2);
    // Convert a frequency in Hz into a real number counting the octaves above A0. So hz2octs(440) = 4.0
    var hz2octs = function (freq) {
        return Math.log(freq / (A440 / 16)) / Math.LN2;
    };
    var i, j;
    for (i = 1; i < N2; i++) {
        fftfrqbins[i] = nbins * hz2octs(i / N * sampleRate);
    }
    fftfrqbins[0] = fftfrqbins[1] - 1.5 * nbins; //DC offset bin
    for (i = 0; i < N2 - 1; i++) {
        var diffVal = fftfrqbins[i + 1] - fftfrqbins[i];
        if (diffVal >= 1) {
            binwidthbins[i] = diffVal;
        } else {
            binwidthbins[i] = 1;
        }
    }
    binwidthbins[N2 - 1] = 1;
    var nbins2 = Math.round(nbins / 2.0);
    var wts = [];
    for (i = 0; i < nbins; i++) {
        wts[i] = [];
        for (j = 0; j < N2; j++) {
            var tmpF = fftfrqbins[j] - i;
            var tmpB = binwidthbins[j];
            var remF = ((tmpF + nbins2 + 10 * nbins) % nbins) - nbins2;
            wts[i][j] = Math.exp(-0.5 * Math.pow((2 * remF / tmpB), 2));
        }
    }

    function head(a) {
        return a[0];
    }

    function tail(a) {
        return a.slice(1);
    }

    function transpose(a) {
        if (a === undefined) {
            return [];
        }
        var x = a.length,
            y = a[0].length,
            mtx = [],
            i, j;
        for (i = 0; i < y; i++) {
            mtx[i] = new Float64Array(x);
        }
        for (i = 0; i < x; i++) {
            for (j = 0; j < y; j++) {
                mtx[j][i] = a[i][j];
            }
        }
        return mtx;
    }
    var wtsColumnSums = transpose(wts).map(_xtract_array_sum__WEBPACK_IMPORTED_MODULE_0__["xtract_array_sum"]);
    for (i = 0; i < nbins; i++) {
        for (j = 0; j < N2; j++) {
            wts[i][j] *= 1 / wtsColumnSums[j];
        }
    }
    if (octwidth > 0) {
        for (i = 0; i < nbins; i++) {
            for (j = 0; j < N2; j++) {
                wts[i][j] *= Math.exp(-0.5 * (Math.pow(((fftfrqbins[j] / nbins - ctroct) / octwidth), 2)));
            }
        }
    }
    chromaFilters.wts = wts;
    return chromaFilters;
}


/***/ }),

/***/ "./modules/functions/xtract_init_dct.js":
/*!**********************************************!*\
  !*** ./modules/functions/xtract_init_dct.js ***!
  \**********************************************/
/*! exports provided: xtract_init_dct */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_71641__) {

"use strict";
__nested_webpack_require_71641__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_71641__.d(__webpack_exports__, "xtract_init_dct", function() { return xtract_init_dct; });
/// <reference path="../../typings/functions.d.ts" />
function xtract_init_dct(N) {
    var dct = {
        N: N,
        wt: []
    };
    for (var k = 0; k < N; k++) {
        dct.wt[k] = new Float64Array(N);
        for (var n = 0; n < N; n++) {
            dct.wt[k][n] = Math.cos(Math.PI * k * (n + 0.5) / N);
        }
    }
    return dct;
}


/***/ }),

/***/ "./modules/functions/xtract_init_dft.js":
/*!**********************************************!*\
  !*** ./modules/functions/xtract_init_dft.js ***!
  \**********************************************/
/*! exports provided: xtract_init_dft */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_72508__) {

"use strict";
__nested_webpack_require_72508__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_72508__.d(__webpack_exports__, "xtract_init_dft", function() { return xtract_init_dft; });
/// <reference path="../../typings/functions.d.ts" />
function xtract_init_dft(N) {
    var dft = {
        N: N / 2 + 1,
        real: [],
        imag: []
    };
    var power_const = -2.0 * Math.PI / N;
    for (var k = 0; k < dft.N; k++) {
        var power_k = power_const * k;
        dft.real[k] = new Float64Array(N);
        dft.imag[k] = new Float64Array(N);
        for (var n = 0; n < N; n++) {
            var power = power_k * n;
            dft.real[k][n] = Math.cos(power);
            dft.imag[k][n] = Math.sin(power);
        }
    }
    return dft;
}


/***/ }),

/***/ "./modules/functions/xtract_init_mfcc.js":
/*!***********************************************!*\
  !*** ./modules/functions/xtract_init_mfcc.js ***!
  \***********************************************/
/*! exports provided: xtract_init_mfcc */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_73601__) {

"use strict";
__nested_webpack_require_73601__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_73601__.d(__webpack_exports__, "xtract_init_mfcc", function() { return xtract_init_mfcc; });
/// <reference path="../../typings/functions.d.ts" />

function get_fft_peak(N, freq_max, freq_min, freq_bands, nyquist, style) {
    var norm = 1,
        M = N / 2,
        height, norm_fact, n;
    var mel_freq_max = 1127 * Math.log(1 + freq_max / 700);
    var mel_freq_min = 1127 * Math.log(1 + freq_min / 700);
    var freq_bw_mel = (mel_freq_max - mel_freq_min) / freq_bands;

    var mel_peak = new Float64Array(freq_bands + 2);
    var lin_peak = new Float64Array(freq_bands + 2);
    var fft_peak = new Float64Array(freq_bands + 2);
    var height_norm = new Float64Array(freq_bands);
    mel_peak[0] = mel_freq_min;
    lin_peak[0] = freq_min;
    fft_peak[0] = Math.floor(lin_peak[0] / nyquist * M);

    for (n = 1; n < (freq_bands + 2); ++n) {
        //roll out peak locations - mel, linear and linear on fft window scale
        mel_peak[n] = mel_peak[n - 1] + freq_bw_mel;
        lin_peak[n] = 700 * (Math.exp(mel_peak[n] / 1127) - 1);
        fft_peak[n] = Math.floor(lin_peak[n] / nyquist * M);
    }

    for (n = 0; n < freq_bands; n++) {
        //roll out normalised gain of each peak
        if (style === "XTRACT_EQUAL_GAIN") {
            height = 1;
            norm_fact = norm;
        } else {
            height = 2 / (lin_peak[n + 2] - lin_peak[n]);
            norm_fact = norm / (2 / (lin_peak[2] - lin_peak[0]));
        }
        height_norm[n] = height * norm_fact;
    }
    return {
        f: fft_peak,
        h: height_norm
    };
}

function xtract_init_mfcc(N, nyquist, style, freq_min, freq_max, freq_bands) {
    var mfcc = {
        n_filters: freq_bands,
        filters: []
    };
    var norm = 1,
        M = N / 2,
        height, norm_fact, n;

    if (freq_bands <= 1) {
        return null;
    }

    var i = 0,
        fh = get_fft_peak(N, freq_max, freq_min, freq_bands, nyquist, style),
        inc;
    var fft_peak = fh.f,
        height_norm = fh.h;
    var next_peak;
    for (n = 0; n < freq_bands; n++) {
        // calculate the rise increment
        if (n === 0) {
            inc = height_norm[n] / fft_peak[n];
        } else {
            inc = height_norm[n] / (fft_peak[n] - fft_peak[n - 1]);
        }
        var val = 0;
        // Create array
        mfcc.filters[n] = new Float64Array(N);
        // fill in the rise
        for (; i <= fft_peak[n]; i++) {
            mfcc.filters[n][i] = val;
            val += inc;
        }
        // calculate the fall increment
        inc = height_norm[n] / (fft_peak[n + 1] - fft_peak[n]);

        val = 0;
        next_peak = fft_peak[n + 1];

        // reverse fill the 'fall'
        for (i = Math.floor(next_peak); i > fft_peak[n]; i--) {
            mfcc.filters[n][i] = val;
            val += inc;
        }
    }
    return mfcc;
}


/***/ }),

/***/ "./modules/functions/xtract_init_pcp.js":
/*!**********************************************!*\
  !*** ./modules/functions/xtract_init_pcp.js ***!
  \**********************************************/
/*! exports provided: xtract_init_pcp */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_76886__) {

"use strict";
__nested_webpack_require_76886__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_76886__.d(__webpack_exports__, "xtract_init_pcp", function() { return xtract_init_pcp; });
/// <reference path="../../typings/functions.d.ts" />
function xtract_init_pcp(N, fs, f_ref) {
    if (typeof fs !== "number" || typeof N !== "number") {
        throw ('The Sample Rate and sample count have to be defined: xtract_init_pcp(N, fs, f_ref)');
    }
    if (N <= 0 || N !== Math.floor(N)) {
        throw ("The sample count, N, must be a positive integer: xtract_init_pcp(N, fs, f_ref)");
    }
    if (fs <= 0.0) {
        throw ('The Sample Rate must be a positive number: xtract_init_pcp(N, fs, f_ref)');
    }
    if (typeof f_ref !== "number" || f_ref <= 0.0 || f_ref >= fs / 2) {
        f_ref = 48.9994294977;
    }

    var M = new Float64Array(N - 1);
    var fs2 = fs / 2;
    for (var l = 1; l < N; l++) {
        var f = (2 * l / N) * fs2;
        M[l - 1] = Math.round(12 * Math.log2((f / N) * f_ref)) % 12;
    }
    return M;
}


/***/ }),

/***/ "./modules/functions/xtract_init_wavelet.js":
/*!**************************************************!*\
  !*** ./modules/functions/xtract_init_wavelet.js ***!
  \**************************************************/
/*! exports provided: xtract_init_wavelet */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_78279__) {

"use strict";
__nested_webpack_require_78279__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_78279__.d(__webpack_exports__, "xtract_init_wavelet", function() { return xtract_init_wavelet; });
/// <reference path="../../typings/functions.d.ts" />
function xtract_init_wavelet() {
    return {
        _prevPitch: -1,
        _pitchConfidence: -1
    };
}


/***/ }),

/***/ "./modules/functions/xtract_irregularity_j.js":
/*!****************************************************!*\
  !*** ./modules/functions/xtract_irregularity_j.js ***!
  \****************************************************/
/*! exports provided: xtract_irregularity_j */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_78997__) {

"use strict";
__nested_webpack_require_78997__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_78997__.d(__webpack_exports__, "xtract_irregularity_j", function() { return xtract_irregularity_j; });
/* harmony import */ var _xtract_assert_array__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_78997__(/*! ./xtract_assert_array */ "./modules/functions/xtract_assert_array.js");
/// <reference path="../../typings/functions.d.ts" />

function xtract_irregularity_j(spectrum) {
    if (!Object(_xtract_assert_array__WEBPACK_IMPORTED_MODULE_0__["xtract_assert_array"])(spectrum))
        return 0;
    var num = 0,
        den = 0;
    var N = spectrum.length;
    var K = N >> 1;
    var amps = spectrum.subarray(0, K);
    for (var n = 0; n < K - 1; n++) {
        num += Math.pow(amps[n] - amps[n + 1], 2);
        den += Math.pow(amps[n], 2);
    }
    return num / den;
}


/***/ }),

/***/ "./modules/functions/xtract_irregularity_k.js":
/*!****************************************************!*\
  !*** ./modules/functions/xtract_irregularity_k.js ***!
  \****************************************************/
/*! exports provided: xtract_irregularity_k */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_80226__) {

"use strict";
__nested_webpack_require_80226__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_80226__.d(__webpack_exports__, "xtract_irregularity_k", function() { return xtract_irregularity_k; });
/* harmony import */ var _xtract_assert_array__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_80226__(/*! ./xtract_assert_array */ "./modules/functions/xtract_assert_array.js");
/// <reference path="../../typings/functions.d.ts" />


function xtract_irregularity_k(spectrum) {
    if (!Object(_xtract_assert_array__WEBPACK_IMPORTED_MODULE_0__["xtract_assert_array"])(spectrum))
        return 0;
    var result = 0;
    var N = spectrum.length;
    var K = N >> 1;
    var amps = spectrum.subarray(0, K);
    for (var n = 1; n < K - 1; n++) {
        result += Math.abs(Math.log10(amps[n]) - Math.log10(amps[n - 1] + amps[n] + amps[n + 1]) / 3);
    }
    return result;
}


/***/ }),

/***/ "./modules/functions/xtract_is_denormal.js":
/*!*************************************************!*\
  !*** ./modules/functions/xtract_is_denormal.js ***!
  \*************************************************/
/*! exports provided: xtract_is_denormal */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_81439__) {

"use strict";
__nested_webpack_require_81439__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_81439__.d(__webpack_exports__, "xtract_is_denormal", function() { return xtract_is_denormal; });
/// <reference path="../../typings/functions.d.ts" />
function xtract_is_denormal(num) {
    if (Math.abs(num) <= 2.2250738585072014e-308) {
        return true;
    }
    return false;
}


/***/ }),

/***/ "./modules/functions/xtract_kurtosis.js":
/*!**********************************************!*\
  !*** ./modules/functions/xtract_kurtosis.js ***!
  \**********************************************/
/*! exports provided: xtract_kurtosis */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_82151__) {

"use strict";
__nested_webpack_require_82151__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_82151__.d(__webpack_exports__, "xtract_kurtosis", function() { return xtract_kurtosis; });
/* harmony import */ var _xtract_skewness_kurtosis__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_82151__(/*! ./xtract_skewness_kurtosis */ "./modules/functions/xtract_skewness_kurtosis.js");
/// <reference path="../../typings/functions.d.ts" />


function xtract_kurtosis(array, mean, standard_deviation) {
    return Object(_xtract_skewness_kurtosis__WEBPACK_IMPORTED_MODULE_0__["xtract_skewness_kurtosis"])(array, mean, standard_deviation)[1];
}


/***/ }),

/***/ "./modules/functions/xtract_loudness.js":
/*!**********************************************!*\
  !*** ./modules/functions/xtract_loudness.js ***!
  \**********************************************/
/*! exports provided: xtract_loudness */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_83114__) {

"use strict";
__nested_webpack_require_83114__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_83114__.d(__webpack_exports__, "xtract_loudness", function() { return xtract_loudness; });
/* harmony import */ var _xtract_assert_array__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_83114__(/*! ./xtract_assert_array */ "./modules/functions/xtract_assert_array.js");
/// <reference path="../../typings/functions.d.ts" />

function xtract_loudness(barkBandsArray) {
    if (!Object(_xtract_assert_array__WEBPACK_IMPORTED_MODULE_0__["xtract_assert_array"])(barkBandsArray))
        return 0;
    var result = 0;
    if (barkBandsArray.reduce) {
        result = barkBandsArray.reduce(function (a, b) {
            return a + Math.pow(b, 0.23);
        }, 0);
    } else {
        for (var n = 0; n < barkBandsArray.length; n++) {
            result += Math.pow(barkBandsArray[n], 0.23);
        }
    }
    return result;
}


/***/ }),

/***/ "./modules/functions/xtract_lowest_value.js":
/*!**************************************************!*\
  !*** ./modules/functions/xtract_lowest_value.js ***!
  \**************************************************/
/*! exports provided: xtract_lowest_value */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_84380__) {

"use strict";
__nested_webpack_require_84380__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_84380__.d(__webpack_exports__, "xtract_lowest_value", function() { return xtract_lowest_value; });
/* harmony import */ var _xtract_assert_array__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_84380__(/*! ./xtract_assert_array */ "./modules/functions/xtract_assert_array.js");
/* harmony import */ var _xtract_lowhigh__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_84380__(/*! ./xtract_lowhigh */ "./modules/functions/xtract_lowhigh.js");
/// <reference path="../../typings/functions.d.ts" />



function xtract_lowest_value(data, threshold) {
    if (!Object(_xtract_assert_array__WEBPACK_IMPORTED_MODULE_0__["xtract_assert_array"])(data))
        return 0;
    if (typeof threshold !== "number") {
        threshold = -Infinity;
    }
    return Object(_xtract_lowhigh__WEBPACK_IMPORTED_MODULE_1__["xtract_lowhigh"])(data, threshold).min;
}


/***/ }),

/***/ "./modules/functions/xtract_lowhigh.js":
/*!*********************************************!*\
  !*** ./modules/functions/xtract_lowhigh.js ***!
  \*********************************************/
/*! exports provided: xtract_lowhigh */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_85636__) {

"use strict";
__nested_webpack_require_85636__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_85636__.d(__webpack_exports__, "xtract_lowhigh", function() { return xtract_lowhigh; });
/// <reference path="../../typings/functions.d.ts" />
function xtract_lowhigh(data, threshold) {
    var r = {
        min: null,
        max: null
    };
    for (var n = 0; n < data.length; n++) {
        if (data[n] > threshold) {
            r.min = Math.min(r.min, data[n]);
        }
        if (data[n] < threshold) {
            r.max = Math.max(r.max, data[n]);
        }
    }
    return r;
}


/***/ }),

/***/ "./modules/functions/xtract_lpc.js":
/*!*****************************************!*\
  !*** ./modules/functions/xtract_lpc.js ***!
  \*****************************************/
/*! exports provided: xtract_lpc */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_86530__) {

"use strict";
__nested_webpack_require_86530__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_86530__.d(__webpack_exports__, "xtract_lpc", function() { return xtract_lpc; });
/* harmony import */ var _xtract_assert_array__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_86530__(/*! ./xtract_assert_array */ "./modules/functions/xtract_assert_array.js");
/// <reference path="../../typings/functions.d.ts" />


function xtract_lpc(autocorr) {
    if (!Object(_xtract_assert_array__WEBPACK_IMPORTED_MODULE_0__["xtract_assert_array"])(autocorr))
        return 0;
    var i, j, r, error = autocorr[0];
    var N = autocorr.length;
    var L = N - 1;
    var lpc = new Float64Array(L);
    var ref = new Float64Array(L);
    if (error === 0.0) {
        return lpc;
    }

    (function () {
        for (i = 0; i < L; i++) {
            r = -autocorr[i + 1];
            for (j = 0; j < i; j++) {
                r -= lpc[j] * autocorr[i - j];
            }
            r /= error;
            ref[i] = r;

            lpc[i] = r;
            for (j = 0; j < (i >> 1); j++) {
                var tmp = lpc[j];
                lpc[j] += r * lpc[i - 1 - j];
                lpc[i - 1 - j] += r * tmp;
            }
            if (i % 2) {
                lpc[j] += lpc[j] * r;
            }
            error *= 1.0 - r * r;
        }
    })();
    return lpc;
}


/***/ }),

/***/ "./modules/functions/xtract_lpcc.js":
/*!******************************************!*\
  !*** ./modules/functions/xtract_lpcc.js ***!
  \******************************************/
/*! exports provided: xtract_lpcc */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_88196__) {

"use strict";
__nested_webpack_require_88196__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_88196__.d(__webpack_exports__, "xtract_lpcc", function() { return xtract_lpcc; });
/* harmony import */ var _xtract_assert_array__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_88196__(/*! ./xtract_assert_array */ "./modules/functions/xtract_assert_array.js");
/// <reference path="../../typings/functions.d.ts" />


function xtract_lpcc(lpc, Q) {
    if (!Object(_xtract_assert_array__WEBPACK_IMPORTED_MODULE_0__["xtract_assert_array"])(lpc))
        return 0;
    var N = lpc.length;
    var n, k, sum, order = N - 1,
        cep_length;
    if (typeof Q !== "number") {
        Q = N - 1;
    }
    cep_length = Q;

    var result = new Float64Array(cep_length);
    (function () {
        for (n = 1; n < Q && n < cep_length; n++) {
            sum = 0;
            for (k = 1; k < n; k++) {
                sum += k * result[k - 1] * lpc[n - k];
            }
            result[n - 1] = lpc[n] + sum / n;
        }
    })();
    (function () {
        for (n = order + 1; n <= cep_length; n++) {
            sum = 0.0;
            for (k = n - (order - 1); k < n; k++) {
                sum += k * result[k - 1] * lpc[n - k];
            }
            result[n - 1] = sum / n;
        }
    })();
    return result;
}


/***/ }),

/***/ "./modules/functions/xtract_mean.js":
/*!******************************************!*\
  !*** ./modules/functions/xtract_mean.js ***!
  \******************************************/
/*! exports provided: xtract_mean */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_89822__) {

"use strict";
__nested_webpack_require_89822__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_89822__.d(__webpack_exports__, "xtract_mean", function() { return xtract_mean; });
/* harmony import */ var _xtract_assert_array__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_89822__(/*! ./xtract_assert_array */ "./modules/functions/xtract_assert_array.js");
/* harmony import */ var _xtract_array_sum__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_89822__(/*! ./xtract_array_sum */ "./modules/functions/xtract_array_sum.js");
/// <reference path="../../typings/functions.d.ts" />


function xtract_mean(array) {
    if (!Object(_xtract_assert_array__WEBPACK_IMPORTED_MODULE_0__["xtract_assert_array"])(array))
        return 0;
    return Object(_xtract_array_sum__WEBPACK_IMPORTED_MODULE_1__["xtract_array_sum"])(array) / array.length;
}


/***/ }),

/***/ "./modules/functions/xtract_mfcc.js":
/*!******************************************!*\
  !*** ./modules/functions/xtract_mfcc.js ***!
  \******************************************/
/*! exports provided: xtract_mfcc */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_90962__) {

"use strict";
__nested_webpack_require_90962__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_90962__.d(__webpack_exports__, "xtract_mfcc", function() { return xtract_mfcc; });
/* harmony import */ var _xtract_assert_array__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_90962__(/*! ./xtract_assert_array */ "./modules/functions/xtract_assert_array.js");
/* harmony import */ var _xtract_dct__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_90962__(/*! ./xtract_dct */ "./modules/functions/xtract_dct.js");
/// <reference path="../../typings/functions.d.ts" />


function xtract_mfcc(spectrum, mfcc) {
    if (!Object(_xtract_assert_array__WEBPACK_IMPORTED_MODULE_0__["xtract_assert_array"])(spectrum))
        return 0;
    var K = spectrum.length >> 1;
    if (typeof mfcc !== "object") {
        throw ("Invalid MFCC, must be MFCC object built using xtract_init_mfcc");
    }
    if (mfcc.n_filters === 0) {
        throw ("Invalid MFCC, object must be built using xtract_init_mfcc");
    }
    if (mfcc.filters[0].length !== K) {
        throw ("Lengths do not match");
    }
    var result = new Float64Array(mfcc.n_filters);
    result.forEach(function (v, f, r) {
        r[f] = 0.0;
        var filter = mfcc.filters[f];
        for (var n = 0; n < filter.length; n++) {
            r[f] += spectrum[n] * filter[n];
        }
        r[f] = Math.log(Math.max(r[f], 2e-42));
    });
    return Object(_xtract_dct__WEBPACK_IMPORTED_MODULE_1__["xtract_dct"])(result);
}


/***/ }),

/***/ "./modules/functions/xtract_midicent.js":
/*!**********************************************!*\
  !*** ./modules/functions/xtract_midicent.js ***!
  \**********************************************/
/*! exports provided: xtract_midicent */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_92759__) {

"use strict";
__nested_webpack_require_92759__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_92759__.d(__webpack_exports__, "xtract_midicent", function() { return xtract_midicent; });
/// <reference path="../../typings/functions.d.ts" />
function xtract_midicent(f0) {
    if (typeof f0 !== "number") {
        return -1;
    }
    var note = 0.0;
    note = 69 + Math.log(f0 / 440.0) * 17.31234;
    note *= 100;
    note = Math.round(0.5 + note);
    return note;
}


/***/ }),

/***/ "./modules/functions/xtract_noisiness.js":
/*!***********************************************!*\
  !*** ./modules/functions/xtract_noisiness.js ***!
  \***********************************************/
/*! exports provided: xtract_noisiness */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_93566__) {

"use strict";
__nested_webpack_require_93566__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_93566__.d(__webpack_exports__, "xtract_noisiness", function() { return xtract_noisiness; });
/// <reference path="../../typings/functions.d.ts" />
function xtract_noisiness(h, p) {
    var i = 0.0;
    if (typeof h !== "number" && typeof p !== "number") {
        return 0;
    }
    i = p - h;
    return i / p;
}


/***/ }),

/***/ "./modules/functions/xtract_nonzero_count.js":
/*!***************************************************!*\
  !*** ./modules/functions/xtract_nonzero_count.js ***!
  \***************************************************/
/*! exports provided: xtract_nonzero_count */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_94333__) {

"use strict";
__nested_webpack_require_94333__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_94333__.d(__webpack_exports__, "xtract_nonzero_count", function() { return xtract_nonzero_count; });
/* harmony import */ var _xtract_assert_array__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_94333__(/*! ./xtract_assert_array */ "./modules/functions/xtract_assert_array.js");
/// <reference path="../../typings/functions.d.ts" />

function xtract_nonzero_count(data) {
    if (!Object(_xtract_assert_array__WEBPACK_IMPORTED_MODULE_0__["xtract_assert_array"])(data))
        return 0;
    var count = 0;
    if (data.reduce) {
        return data.reduce(function (a, b) {
            if (b !== 0) {
                a++;
            }
            return a;
        });
    }
    for (var n = 0; n < data.length; n++) {
        if (data[n] !== 0) {
            count++;
        }
    }
    return count;
}


/***/ }),

/***/ "./modules/functions/xtract_odd_even_ratio.js":
/*!****************************************************!*\
  !*** ./modules/functions/xtract_odd_even_ratio.js ***!
  \****************************************************/
/*! exports provided: xtract_odd_even_ratio */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_95591__) {

"use strict";
__nested_webpack_require_95591__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_95591__.d(__webpack_exports__, "xtract_odd_even_ratio", function() { return xtract_odd_even_ratio; });
/* harmony import */ var _xtract_assert_array__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_95591__(/*! ./xtract_assert_array */ "./modules/functions/xtract_assert_array.js");
/// <reference path="../../typings/functions.d.ts" />


function xtract_odd_even_ratio(harmonicSpectrum, f0) {
    if (!Object(_xtract_assert_array__WEBPACK_IMPORTED_MODULE_0__["xtract_assert_array"])(harmonicSpectrum))
        return 0;
    (function (f0) {
        if (typeof f0 !== "number") {
            throw ("spectral_inharmonicity requires f0 to be defined.");
        }
    })(f0);
    var h = 0,
        odd = 0.0,
        even = 0.0,
        temp;
    var N = harmonicSpectrum.length;
    var K = N >> 1;
    var amps = harmonicSpectrum.subarray(0, n);
    var freqs = harmonicSpectrum.subarray(n);
    for (var n = 0; n < K; n++) {
        temp = amps[n];
        if (temp !== 0.0) {
            h = Math.floor(freqs[n] / f0 + 0.5);
            if (h % 2 !== 0) {
                odd += temp;
            } else {
                even += temp;
            }
        }
    }

    if (odd === 0.0 || even === 0.0) {
        return 0.0;
    }
    return odd / even;
}


/***/ }),

/***/ "./modules/functions/xtract_onset.js":
/*!*******************************************!*\
  !*** ./modules/functions/xtract_onset.js ***!
  \*******************************************/
/*! exports provided: xtract_onset */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_97257__) {

"use strict";
__nested_webpack_require_97257__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_97257__.d(__webpack_exports__, "xtract_onset", function() { return xtract_onset; });
/* harmony import */ var _freeFFT__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_97257__(/*! ../freeFFT */ "./modules/freeFFT.js");
/* harmony import */ var _xtract_array_interlace__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_97257__(/*! ./xtract_array_interlace */ "./modules/functions/xtract_array_interlace.js");
/* harmony import */ var _xtract_assert_array__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_97257__(/*! ./xtract_assert_array */ "./modules/functions/xtract_assert_array.js");
/* harmony import */ var _xtract_get_data_frames__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_97257__(/*! ./xtract_get_data_frames */ "./modules/functions/xtract_get_data_frames.js");
/// <reference path="../../typings/functions.d.ts" />





function angle(real, imag) {
    if (imag === undefined && real.length === 2) {
        return Math.atan2(real[1], real[0]);
    }
    return Math.atan2(imag, real);
}

function abs(real, imag) {
    if (imag === undefined && real.length === 2) {
        return Math.sqrt(Math.pow(real[0], 2) + Math.pow(real[1], 2));
    }
    return Math.sqrt(Math.pow(real, 2) + Math.pow(imag, 2));
}

function princarg(phaseIn) {
    //phase=mod(phasein+pi,-2*pi)+pi;
    return (phaseIn + Math.PI) % (-2 * Math.PI) + Math.PI;
}

function complex_mul(cplx_pair_A, cplx_pair_B) {
    if (cplx_pair_A.length !== 2 || cplx_pair_B.length !== 2) {
        throw ("Both arguments must be numeral arrays of length 2");
    }
    var result = new cplx_pair_A.constructor(2);
    result[0] = cplx_pair_A[0] * cplx_pair_B[0] - cplx_pair_A[1] * cplx_pair_B[1];
    result[1] = cplx_pair_A[0] * cplx_pair_B[1] + cplx_pair_A[1] * cplx_pair_B[0];
    return result;
}

function get_X(frames, frameSize) {
    var N = frames.length;
    var X = [];
    var real = new Float64Array(frameSize);
    var imag = new Float64Array(frameSize);
    var K = frameSize / 2 + 1;
    var n;
    for (var i = 0; i < N; i++) {
        for (n = 0; n < frameSize; n++) {
            real[n] = frames[i][n];
            imag[n] = 0.0;
        }
        Object(_freeFFT__WEBPACK_IMPORTED_MODULE_0__["transform"])(real, imag);
        X[i] = Object(_xtract_array_interlace__WEBPACK_IMPORTED_MODULE_1__["xtract_array_interlace"])([real.subarray(0, K), imag.subarray(0, K)]);
    }
    return X;
}

function xtract_onset(timeData, frameSize) {

    if (!Object(_xtract_assert_array__WEBPACK_IMPORTED_MODULE_2__["xtract_assert_array"])(timeData))
        return 0;
    if (frameSize === undefined) {
        throw ("All arguments for xtract_onset must be defined: xtract_onset(timeData, frameSize)");
    }
    var frames = Object(_xtract_get_data_frames__WEBPACK_IMPORTED_MODULE_3__["xtract_get_data_frames"])(timeData, frameSize, frameSize, false);
    var N = frames.length;
    var K = frameSize / 2 + 1;
    var X = get_X(frames, frameSize);

    var E = new timeData.constructor(N);
    var n;
    for (var k = 0; k < K; k++) {
        var phase_prev = angle(X[0].subarray(2 * k, 2 * k + 2));
        var phase_delta = angle(X[0].subarray(2 * k, 2 * k + 2));
        for (n = 1; n < N; n++) {
            var phi = princarg(phase_prev + phase_delta);
            var exp = [Math.cos(phi), Math.sin(phi)];
            var XT = complex_mul(X[n].subarray(2 * k, 2 * k + 2), exp);
            XT[0] = X[n][2 * k] - XT[0];
            XT[1] = X[n][2 * k + 1] - XT[1];
            E[n] += abs(XT);
            var phase_now = angle(X[n].subarray(2 * k, 2 * k + 2));
            phase_delta = phase_now - phase_prev;
            phase_prev = phase_now;
        }
    }

    for (n = 0; n < N; n++) {
        E[n] /= frameSize;
    }
    return E;
}


/***/ }),

/***/ "./modules/functions/xtract_pcp.js":
/*!*****************************************!*\
  !*** ./modules/functions/xtract_pcp.js ***!
  \*****************************************/
/*! exports provided: xtract_pcp */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_101366__) {

"use strict";
__nested_webpack_require_101366__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_101366__.d(__webpack_exports__, "xtract_pcp", function() { return xtract_pcp; });
/* harmony import */ var _xtract_assert_array__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_101366__(/*! ./xtract_assert_array */ "./modules/functions/xtract_assert_array.js");
/* harmony import */ var _xtract_init_pcp__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_101366__(/*! ./xtract_init_pcp */ "./modules/functions/xtract_init_pcp.js");
/// <reference path="../../typings/functions.d.ts" />


function xtract_pcp(spectrum, M, fs) {
    if (!Object(_xtract_assert_array__WEBPACK_IMPORTED_MODULE_0__["xtract_assert_array"])(spectrum))
        return 0;
    var N = spectrum.length >> 1;
    if (typeof M !== "object") {
        if (typeof fs !== "number" || fs <= 0.0) {
            throw ("Cannot dynamically compute M if fs is undefined / not a valid sample rate");
        }
        M = Object(_xtract_init_pcp__WEBPACK_IMPORTED_MODULE_1__["xtract_init_pcp"])(N, fs);
    }
    var amps = spectrum.subarray(1, N);
    var PCP = new Float64Array(12);
    for (var l = 0; l < amps.length; l++) {
        var p = M[l];
        PCP[l] += Math.pow(Math.abs(amps[l]), 2);
    }
    return PCP;
}


/***/ }),

/***/ "./modules/functions/xtract_peak_spectrum.js":
/*!***************************************************!*\
  !*** ./modules/functions/xtract_peak_spectrum.js ***!
  \***************************************************/
/*! exports provided: xtract_peak_spectrum */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_102987__) {

"use strict";
__nested_webpack_require_102987__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_102987__.d(__webpack_exports__, "xtract_peak_spectrum", function() { return xtract_peak_spectrum; });
/* harmony import */ var _xtract_assert_array__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_102987__(/*! ./xtract_assert_array */ "./modules/functions/xtract_assert_array.js");
/* harmony import */ var _xtract_array_max__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_102987__(/*! ./xtract_array_max */ "./modules/functions/xtract_array_max.js");
/// <reference path="../../typings/functions.d.ts" />



function xtract_peak_spectrum(spectrum, q, threshold) {
    if (!Object(_xtract_assert_array__WEBPACK_IMPORTED_MODULE_0__["xtract_assert_array"])(spectrum))
        return 0;
    var N = spectrum.length;
    var K = N >> 1;
    var max = 0.0,
        y = 0.0,
        y2 = 0.0,
        y3 = 0.0,
        p = 0.0;
    if (typeof q !== "number") {
        throw ("xtract_peak_spectrum requires second argument to be sample_rate/N");
    }
    if (threshold < 0 || threshold > 100) {
        threshold = 0;
    }
    var result = new Float64Array(N);
    var ampsIn = spectrum.subarray(0, K);
    var freqsIn = spectrum.subarray(K);
    var ampsOut = result.subarray(0, K);
    var freqsOut = result.subarray(K);
    max = Object(_xtract_array_max__WEBPACK_IMPORTED_MODULE_1__["xtract_array_max"])(ampsIn);
    threshold *= 0.01 * max;
    for (var n = 1; n < N - 1; n++) {
        if (ampsIn[n] >= threshold) {
            if (ampsIn[n] > ampsIn[n - 1] && ampsIn[n] > ampsIn[n + 1]) {
                y = ampsIn[n - 1];
                y2 = ampsIn[n];
                y3 = ampsIn[n + 1];
                p = 0.5 * (y - y3) / (ampsIn[n - 1] - 2 * (y2 + ampsIn[n + 1]));
                freqsOut[n] = q * (n + 1 + p);
                ampsOut[n] = y2 - 0.25 * (y - y3) * p;
            } else {
                ampsOut[n] = 0;
                freqsOut[n] = 0;
            }
        } else {
            ampsOut[n] = 0;
            freqsOut[n] = 0;
        }
    }
    return result;
}


/***/ }),

/***/ "./modules/functions/xtract_power.js":
/*!*******************************************!*\
  !*** ./modules/functions/xtract_power.js ***!
  \*******************************************/
/*! exports provided: xtract_power */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_105374__) {

"use strict";
__nested_webpack_require_105374__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_105374__.d(__webpack_exports__, "xtract_power", function() { return xtract_power; });
/// <reference path="../../typings/functions.d.ts" />
function xtract_power(magnitudeArray) {
    return null;
}


/***/ }),

/***/ "./modules/functions/xtract_process_frame_data.js":
/*!********************************************************!*\
  !*** ./modules/functions/xtract_process_frame_data.js ***!
  \********************************************************/
/*! exports provided: xtract_process_frame_data */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_106049__) {

"use strict";
__nested_webpack_require_106049__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_106049__.d(__webpack_exports__, "xtract_process_frame_data", function() { return xtract_process_frame_data; });
/* harmony import */ var _xtract_get_data_frames__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_106049__(/*! ./xtract_get_data_frames */ "./modules/functions/xtract_get_data_frames.js");
/* harmony import */ var _xtract_spectrum__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_106049__(/*! ./xtract_spectrum */ "./modules/functions/xtract_spectrum.js");
/// <reference path="../../typings/functions.d.ts" />


function xtract_process_frame_data(array, func, sample_rate, frame_size, hop_size, arg_this) {
    var frames = Object(_xtract_get_data_frames__WEBPACK_IMPORTED_MODULE_0__["xtract_get_data_frames"])(array, frame_size, hop_size);
    var result = {
        num_frames: frames.length,
        results: []
    };
    var frame_time = 0;
    var data = {
        frame_size: frame_size,
        hop_size: hop_size,
        sample_rate: sample_rate,
        TimeData: undefined,
        SpectrumData: undefined
    };
    var prev_data;
    var prev_result;
    for (var fn = 0; fn < frames.length; fn++) {
        var frame = frames[fn];
        data.TimeData = frame;
        data.SpectrumData = Object(_xtract_spectrum__WEBPACK_IMPORTED_MODULE_1__["xtract_spectrum"])(frame, sample_rate, true, false);
        prev_result = func.call(arg_this || this, data, prev_data, prev_result);
        var frame_result = {
            time_start: frame_time,
            result: prev_result
        };
        frame_time += frame_size / sample_rate;
        prev_data = data;
        data = {
            frame_size: frame_size,
            hop_size: hop_size,
            sample_rate: sample_rate,
            TimeData: undefined,
            SpectrumData: undefined
        };
        result.results.push(frame_result);
    }
    return result;
}


/***/ }),

/***/ "./modules/functions/xtract_resample.js":
/*!**********************************************!*\
  !*** ./modules/functions/xtract_resample.js ***!
  \**********************************************/
/*! exports provided: xtract_resample */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_108322__) {

"use strict";
__nested_webpack_require_108322__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_108322__.d(__webpack_exports__, "xtract_resample", function() { return xtract_resample; });
/* harmony import */ var _freeFFT__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_108322__(/*! ../freeFFT */ "./modules/freeFFT.js");
/* harmony import */ var _xtract_get_data_frames__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_108322__(/*! ./xtract_get_data_frames */ "./modules/functions/xtract_get_data_frames.js");
/* harmony import */ var _xtract_assert_array__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_108322__(/*! ./xtract_assert_array */ "./modules/functions/xtract_assert_array.js");
/// <reference path="../../typings/functions.d.ts" />




function filter(N, c) {
    var c_b, Re, Im, b;
    c_b = Math.floor(c * N);
    Re = new Float64Array(N);
    Im = new Float64Array(N);
    var i, j;
    for (i = 0; i < c_b; i++) {
        Re[i] = 1;
    }
    for (i = N - c_b + 1; i < N; i++) {
        Re[i] = 1;
    }
    Object(_freeFFT__WEBPACK_IMPORTED_MODULE_0__["inverseTransform"])(Re, Im);
    // Scale and shift into Im
    for (i = 0; i < N; i++) {
        j = (i + (N >> 1)) % N;
        Im[i] = Re[j] / N;
        // Apply compute blackman-harris to Im
        var rad = (Math.PI * i) / (N);
        Im[i] *= 0.35875 - 0.48829 * Math.cos(2 * rad) + 0.14128 * Math.cos(4 * rad) - 0.01168 * Math.cos(6 * rad);
    }
    return Im;
}

function polyn(data, K) {
    var N = data.length;
    var x = [0, data[0], data[1]];
    var dst = new Float64Array(K);
    var ratio = K / N;
    var tinc = 1 / ratio;
    var n = 0,
        t = 0,
        k;
    for (k = 0; k < K; k++) {
        if (t === n) {
            // Points lie on same time
            dst[k] = data[n];
        } else {
            var y = (t - n - 1) * (t - n) * x[0] - 2 * (t - n - 1) * (t - n + 1) * x[1] + (t - n) * (t - n + 1) * x[2];
            dst[k] = y / 2;
        }
        t += tinc;
        if (t >= n + 1) {
            n = Math.floor(t);
            x[0] = data[n - 1];
            x[1] = data[n];
            if (n + 1 < N) {
                x[2] = data[n + 1];
            } else {
                x[2] = 0.0;
            }
        }
    }
    return dst;
}

function zp(a) {
    var b = new Float64Array(a.length * 2);
    for (var n = 0; n < a.length; n++) {
        b[n] = a[n];
    }
    return b;
}

function r2c(x) {
    var real = zp(x);
    var imag = new Float64Array(real.length);
    Object(_freeFFT__WEBPACK_IMPORTED_MODULE_0__["transform"])(real, imag);
    return {
        real: real,
        imag: imag
    };
}

function W(N) {
    var w = new Float64Array(N),
        i;
    for (i = 0; i < N; i++) {
        var rad = (Math.PI * i) / (N);
        w[i] = 0.35875 - 0.48829 * Math.cos(2 * rad) + 0.14128 * Math.cos(4 * rad) - 0.01168 * Math.cos(6 * rad);
    }
    return w;
}

function overlap(X, b) { // eslint-disable-line max-statements
    var i, f;
    var Y = new Float64Array(X.length);
    var N = b.length;
    var N2 = 2 * N;
    var B = r2c(b);
    var Xi = Object(_xtract_get_data_frames__WEBPACK_IMPORTED_MODULE_1__["xtract_get_data_frames"])(X, N, N, false);
    var Yi = Object(_xtract_get_data_frames__WEBPACK_IMPORTED_MODULE_1__["xtract_get_data_frames"])(Y, N, N, false);
    var x_last = new Float64Array(N);
    var y_last = new Float64Array(N);
    var w = W(N2);
    var xF = {
        real: new Float64Array(N2),
        imag: new Float64Array(N2)
    };
    var yF = {
        real: new Float64Array(N2),
        imag: new Float64Array(N2)
    };
    for (f = 0; f < Xi.length; f++) {
        for (i = 0; i < N; i++) {
            xF.real[i] = x_last[i] * w[i];
            xF.real[i + N] = Xi[f][i] * w[i + N];
            x_last[i] = Xi[f][i];
            xF.imag[i] = 0;
            xF.imag[i + N] = 0;
        }
        Object(_freeFFT__WEBPACK_IMPORTED_MODULE_0__["transform"])(xF.real, xF.imag);
        for (i = 0; i < N2; i++) {
            yF.real[i] = xF.real[i] * B.real[i] - xF.imag[i] * B.imag[i];
            yF.imag[i] = xF.imag[i] * B.real[i] + xF.real[i] * B.imag[i];
        }
        Object(_freeFFT__WEBPACK_IMPORTED_MODULE_0__["transform"])(yF.imag, yF.real);
        // Perform fft_shift and scale
        for (i = 0; i < N; i++) {
            var h = yF.real[i + N] / N;
            yF.real[i + N] = yF.real[i] / N;
            yF.real[i] = h;
        }
        for (i = 0; i < N; i++) {
            Yi[f][i] = (yF.real[i] + y_last[i]);
            y_last[i] = yF.real[i + N];
        }
    }
    return Y;
}

function xtract_resample(data, p, q, n) {
    if (!Object(_xtract_assert_array__WEBPACK_IMPORTED_MODULE_2__["xtract_assert_array"])(data))
        return 0;
    // Same function call as matlab:
    // data is the array
    // p is the target sample rate
    // q is the source sample rate
    // n is the desired filter order, n==1024 if undefined

    // Determine which way to go
    var b, N = data.length;
    if (typeof n !== "number" || n <= 0) {
        n = 512;
    }
    if (p === q) {
        return data;
    }
    var ratio = (p / q);
    var K = Math.floor(N * ratio);
    var dst;
    if (p > q) {
        // Upsampling
        // 1. Expand Data range
        dst = polyn(data, K);
        // 2. Filter out spurious energy above q
        b = filter(n, 1 / ratio);
        overlap(data, b);
    } else {
        // Downsampling
        // 1. Filter out energy above p
        b = filter(n, ratio / 2);
        var ds1 = overlap(data, b);
        // 2. Decrease data range
        dst = polyn(ds1, K);
    }
    return dst;
}


/***/ }),

/***/ "./modules/functions/xtract_rms_amplitude.js":
/*!***************************************************!*\
  !*** ./modules/functions/xtract_rms_amplitude.js ***!
  \***************************************************/
/*! exports provided: xtract_rms_amplitude */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_114266__) {

"use strict";
__nested_webpack_require_114266__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_114266__.d(__webpack_exports__, "xtract_rms_amplitude", function() { return xtract_rms_amplitude; });
/* harmony import */ var _xtract_assert_array__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_114266__(/*! ./xtract_assert_array */ "./modules/functions/xtract_assert_array.js");
/// <reference path="../../typings/functions.d.ts" />


function xtract_rms_amplitude(timeArray) {
    if (!Object(_xtract_assert_array__WEBPACK_IMPORTED_MODULE_0__["xtract_assert_array"])(timeArray))
        return 0;
    var result = 0;
    if (timeArray.reduce) {
        result = timeArray.reduce(function (a, b) {
            return a + b * b;
        }, 0);
    } else {
        for (var n = 0; n < timeArray.length; n++) {
            result += timeArray[n] * timeArray[n];
        }
    }
    return Math.sqrt(result / timeArray.length);
}


/***/ }),

/***/ "./modules/functions/xtract_rolloff.js":
/*!*********************************************!*\
  !*** ./modules/functions/xtract_rolloff.js ***!
  \*********************************************/
/*! exports provided: xtract_rolloff */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_115510__) {

"use strict";
__nested_webpack_require_115510__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_115510__.d(__webpack_exports__, "xtract_rolloff", function() { return xtract_rolloff; });
/* harmony import */ var _xtract_assert_array__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_115510__(/*! ./xtract_assert_array */ "./modules/functions/xtract_assert_array.js");
/* harmony import */ var _xtract_array_sum__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_115510__(/*! ./xtract_array_sum */ "./modules/functions/xtract_array_sum.js");
/// <reference path="../../typings/functions.d.ts" />



function xtract_rolloff(spectrum, sampleRate, threshold) {
    if (!Object(_xtract_assert_array__WEBPACK_IMPORTED_MODULE_0__["xtract_assert_array"])(spectrum))
        return 0;
    if (typeof sampleRate !== "number" || typeof threshold !== "number") {
        console.log("xtract_rolloff requires sampleRate and threshold to be defined");
        return null;
    }
    var N = spectrum.length;
    var K = N >> 1;
    var amps = spectrum.subarray(0, K);

    var pivot = 0,
        temp = 0;

    pivot = Object(_xtract_array_sum__WEBPACK_IMPORTED_MODULE_1__["xtract_array_sum"])(amps);

    pivot *= threshold / 100.0;
    var n = 0;
    while (temp < pivot) {
        temp += amps[n];
        n++;
    }
    return n * (sampleRate / (spectrum.length));
}


/***/ }),

/***/ "./modules/functions/xtract_sharpness.js":
/*!***********************************************!*\
  !*** ./modules/functions/xtract_sharpness.js ***!
  \***********************************************/
/*! exports provided: xtract_sharpness */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_117184__) {

"use strict";
__nested_webpack_require_117184__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_117184__.d(__webpack_exports__, "xtract_sharpness", function() { return xtract_sharpness; });
/* harmony import */ var _xtract_assert_array__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_117184__(/*! ./xtract_assert_array */ "./modules/functions/xtract_assert_array.js");
/// <reference path="../../typings/functions.d.ts" />


function xtract_sharpness(barkBandsArray) {
    if (!Object(_xtract_assert_array__WEBPACK_IMPORTED_MODULE_0__["xtract_assert_array"])(barkBandsArray))
        return 0;
    var N = barkBandsArray.length;

    var rv, sl = 0.0,
        g = 0.0,
        temp = 0.0;
    for (var n = 0; n < N; n++) {
        sl = Math.pow(barkBandsArray[n], 0.23);
        g = (n < 15 ? 1.0 : 0.066 * Math.exp(0.171 * n));
        temp += n * g * sl;
    }
    temp = 0.11 * temp / N;
    return temp;
}


/***/ }),

/***/ "./modules/functions/xtract_skewness.js":
/*!**********************************************!*\
  !*** ./modules/functions/xtract_skewness.js ***!
  \**********************************************/
/*! exports provided: xtract_skewness */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_118418__) {

"use strict";
__nested_webpack_require_118418__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_118418__.d(__webpack_exports__, "xtract_skewness", function() { return xtract_skewness; });
/* harmony import */ var _xtract_skewness_kurtosis__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_118418__(/*! ./xtract_skewness_kurtosis */ "./modules/functions/xtract_skewness_kurtosis.js");
/// <reference path="../../typings/functions.d.ts" />

function xtract_skewness(array, mean, standard_deviation) {
    return Object(_xtract_skewness_kurtosis__WEBPACK_IMPORTED_MODULE_0__["xtract_skewness_kurtosis"])(array, mean, standard_deviation)[0];
}


/***/ }),

/***/ "./modules/functions/xtract_skewness_kurtosis.js":
/*!*******************************************************!*\
  !*** ./modules/functions/xtract_skewness_kurtosis.js ***!
  \*******************************************************/
/*! exports provided: xtract_skewness_kurtosis */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_119425__) {

"use strict";
__nested_webpack_require_119425__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_119425__.d(__webpack_exports__, "xtract_skewness_kurtosis", function() { return xtract_skewness_kurtosis; });
/* harmony import */ var _xtract_assert_array__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_119425__(/*! ./xtract_assert_array */ "./modules/functions/xtract_assert_array.js");
/* harmony import */ var _xtract_mean__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_119425__(/*! ./xtract_mean */ "./modules/functions/xtract_mean.js");
/* harmony import */ var _xtract_standard_deviation__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_119425__(/*! ./xtract_standard_deviation */ "./modules/functions/xtract_standard_deviation.js");
/* harmony import */ var _xtract_variance__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_119425__(/*! ./xtract_variance */ "./modules/functions/xtract_variance.js");
/// <reference path="../../typings/functions.d.ts" />





function xtract_skewness_kurtosis(array, mean, standard_deviation) {
    if (!Object(_xtract_assert_array__WEBPACK_IMPORTED_MODULE_0__["xtract_assert_array"])(array))
        return [0.0, 0.0];
    if (typeof mean !== "number") {
        mean = Object(_xtract_mean__WEBPACK_IMPORTED_MODULE_1__["xtract_mean"])(array);
    }
    if (typeof standard_deviation !== "number") {
        standard_deviation = Object(_xtract_standard_deviation__WEBPACK_IMPORTED_MODULE_2__["xtract_standard_deviation"])(array, Object(_xtract_variance__WEBPACK_IMPORTED_MODULE_3__["xtract_variance"])(array, mean));
    }
    if (standard_deviation === 0) {
        return [0.0, 0.0];
    }
    var result = [0.0, 0.0];
    for (var n = 0; n < array.length; n++) {
        result[0] += Math.pow((array[n] - mean) / standard_deviation, 3);
        result[1] += Math.pow((array[n] - mean) / standard_deviation, 4);
    }
    result[0] /= array.length;
    result[1] /= array.length;
    return result;
}


/***/ }),

/***/ "./modules/functions/xtract_smoothness.js":
/*!************************************************!*\
  !*** ./modules/functions/xtract_smoothness.js ***!
  \************************************************/
/*! exports provided: xtract_smoothness */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_121681__) {

"use strict";
__nested_webpack_require_121681__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_121681__.d(__webpack_exports__, "xtract_smoothness", function() { return xtract_smoothness; });
/* harmony import */ var _xtract_assert_array__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_121681__(/*! ./xtract_assert_array */ "./modules/functions/xtract_assert_array.js");
/// <reference path="../../typings/functions.d.ts" />


function xtract_smoothness(spectrum) {
    if (!Object(_xtract_assert_array__WEBPACK_IMPORTED_MODULE_0__["xtract_assert_array"])(spectrum))
        return 0;
    var prev = 0,
        current = 0,
        next = 0,
        temp = 0;
    var N = spectrum.length;
    var K = N >> 1;
    prev = Math.max(1e-5, spectrum[0]);
    current = Math.max(1e-5, spectrum[1]);
    for (var n = 1; n < K - 1; n++) {
        next = Math.max(1e-5, spectrum[n + 1]);
        temp += Math.abs(20.0 * Math.log(current) - (20.0 * Math.log(prev) + 20.0 * Math.log(current) + 20.0 * Math.log(next)) / 3.0);
        prev = current;
        current = next;
    }
    return temp;
}


/***/ }),

/***/ "./modules/functions/xtract_spectral_centroid.js":
/*!*******************************************************!*\
  !*** ./modules/functions/xtract_spectral_centroid.js ***!
  \*******************************************************/
/*! exports provided: xtract_spectral_centroid */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_123136__) {

"use strict";
__nested_webpack_require_123136__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_123136__.d(__webpack_exports__, "xtract_spectral_centroid", function() { return xtract_spectral_centroid; });
/* harmony import */ var _xtract_assert_array__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_123136__(/*! ./xtract_assert_array */ "./modules/functions/xtract_assert_array.js");
/* harmony import */ var _xtract_array_sum__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_123136__(/*! ./xtract_array_sum */ "./modules/functions/xtract_array_sum.js");
/// <reference path="../../typings/functions.d.ts" />


function xtract_spectral_centroid(spectrum) {
    if (!Object(_xtract_assert_array__WEBPACK_IMPORTED_MODULE_0__["xtract_assert_array"])(spectrum))
        return 0;
    var N = spectrum.length;
    var n = N >> 1;
    var amps = spectrum.subarray(0, n);
    var freqs = spectrum.subarray(n);
    var A_d = Object(_xtract_array_sum__WEBPACK_IMPORTED_MODULE_1__["xtract_array_sum"])(amps);
    if (A_d === 0.0) {
        return 0.0;
    }
    var sum = 0.0;
    while (n--) {
        sum += freqs[n] * (amps[n] / A_d);
    }
    return sum;
}


/***/ }),

/***/ "./modules/functions/xtract_spectral_fundamental.js":
/*!**********************************************************!*\
  !*** ./modules/functions/xtract_spectral_fundamental.js ***!
  \**********************************************************/
/*! exports provided: xtract_spectral_fundamental */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_124666__) {

"use strict";
__nested_webpack_require_124666__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_124666__.d(__webpack_exports__, "xtract_spectral_fundamental", function() { return xtract_spectral_fundamental; });
/* harmony import */ var _xtract_assert_array__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_124666__(/*! ./xtract_assert_array */ "./modules/functions/xtract_assert_array.js");
/* harmony import */ var _freeFFT_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_124666__(/*! ../freeFFT.js */ "./modules/freeFFT.js");
/// <reference path="../../typings/functions.d.ts" />


function peak_picking(E, window) {
    var o = [],
        N = E.length,
        n;
    if (window === undefined) {
        window = 5;
    }
    for (n = window; n < N - window - 1; n++) {
        var max = 1,
            m;
        for (m = -window; m < window - 1; m++) {
            if (E[n + m] > E[n]) {
                max = 0;
                break;
            }
        }
        if (max === 1) {
            o.push(n);
        }
    }
    return o;
}

function xtract_spectral_fundamental(spectrum, sample_rate) {
    // Based on work by Motegi and Shimamura
    if (!Object(_xtract_assert_array__WEBPACK_IMPORTED_MODULE_0__["xtract_assert_array"])(spectrum))
        return 0;

    var N = spectrum.length >> 1;
    var amps = spectrum.subarray(0, N);
    var freqs = spectrum.subarray(N);
    var K = N * 2;

    // Create the power spectrum
    var power = new Float64Array(K);
    var n;
    for (n = 0; n < N; n++) {
        power[n] = Math.pow(amps[n], 2);
        power[K - 1 - n] = power[n];
    }

    // Perform autocorrelation using IFFT
    var R = new Float64Array(K);
    Object(_freeFFT_js__WEBPACK_IMPORTED_MODULE_1__["inverseTransform"])(power, R);
    R = undefined;
    R = power;
    power = undefined;

    // Get the peaks
    var p = peak_picking(R, 5);
    if (p.length === 0) {
        return 0;
    }
    p = p[0];

    p = p / sample_rate;
    p = 1 / p;
    return p;
}


/***/ }),

/***/ "./modules/functions/xtract_spectral_inharmonicity.js":
/*!************************************************************!*\
  !*** ./modules/functions/xtract_spectral_inharmonicity.js ***!
  \************************************************************/
/*! exports provided: xtract_spectral_inharmonicity */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_127050__) {

"use strict";
__nested_webpack_require_127050__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_127050__.d(__webpack_exports__, "xtract_spectral_inharmonicity", function() { return xtract_spectral_inharmonicity; });
/* harmony import */ var _xtract_assert_array__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_127050__(/*! ./xtract_assert_array */ "./modules/functions/xtract_assert_array.js");
/// <reference path="../../typings/functions.d.ts" />


function xtract_spectral_inharmonicity(peakSpectrum, f0) {
    if (!Object(_xtract_assert_array__WEBPACK_IMPORTED_MODULE_0__["xtract_assert_array"])(peakSpectrum))
        return 0;
    if (typeof f0 !== "number") {
        console.error("spectral_inharmonicity requires f0 to be defined.");
        return null;
    }
    var h = 0,
        num = 0.0,
        den = 0.0;
    var N = peakSpectrum.length;
    var K = N >> 1;
    var amps = peakSpectrum.subarray(0, n);
    var freqs = peakSpectrum.subarray(n);
    for (var n = 0; n < K; n++) {
        if (amps[n] !== 0.0) {
            h = Math.floor(freqs[n] / f0 + 0.5);
            var mag_sq = Math.pow(amps[n], 2);
            num += Math.abs(freqs[n] - h * f0) * mag_sq;
            den += mag_sq;
        }
    }
    return (2 * num) / (f0 * den);
}


/***/ }),

/***/ "./modules/functions/xtract_spectral_kurtosis.js":
/*!*******************************************************!*\
  !*** ./modules/functions/xtract_spectral_kurtosis.js ***!
  \*******************************************************/
/*! exports provided: xtract_spectral_kurtosis */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_128679__) {

"use strict";
__nested_webpack_require_128679__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_128679__.d(__webpack_exports__, "xtract_spectral_kurtosis", function() { return xtract_spectral_kurtosis; });
/* harmony import */ var _xtract_assert_array__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_128679__(/*! ./xtract_assert_array */ "./modules/functions/xtract_assert_array.js");
/* harmony import */ var _xtract_spectral_centroid__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_128679__(/*! ./xtract_spectral_centroid */ "./modules/functions/xtract_spectral_centroid.js");
/* harmony import */ var _xtract_spectral_standard_deviation__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_128679__(/*! ./xtract_spectral_standard_deviation */ "./modules/functions/xtract_spectral_standard_deviation.js");
/* harmony import */ var _xtract_spectral_variance__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_128679__(/*! ./xtract_spectral_variance */ "./modules/functions/xtract_spectral_variance.js");
/* harmony import */ var _xtract_array_sum__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_128679__(/*! ./xtract_array_sum */ "./modules/functions/xtract_array_sum.js");
/// <reference path="../../typings/functions.d.ts" />






function xtract_spectral_kurtosis(spectrum, spectral_centroid, spectral_standard_deviation) {
    if (!Object(_xtract_assert_array__WEBPACK_IMPORTED_MODULE_0__["xtract_assert_array"])(spectrum))
        return 0;
    if (typeof spectral_centroid !== "number") {
        spectral_centroid = Object(_xtract_spectral_centroid__WEBPACK_IMPORTED_MODULE_1__["xtract_spectral_centroid"])(spectrum);
    }
    if (typeof spectral_standard_deviation !== "number") {
        spectral_standard_deviation = Object(_xtract_spectral_standard_deviation__WEBPACK_IMPORTED_MODULE_2__["xtract_spectral_standard_deviation"])(spectrum, Object(_xtract_spectral_variance__WEBPACK_IMPORTED_MODULE_3__["xtract_spectral_variance"])(spectrum, spectral_centroid));
    }
    if (spectral_standard_deviation === 0) {
        return Infinity;
    }
    var result = 0;
    var N = spectrum.length;
    var K = N >> 1;
    var amps = spectrum.subarray(0, K);
    var freqs = spectrum.subarray(K);
    var A_d = Object(_xtract_array_sum__WEBPACK_IMPORTED_MODULE_4__["xtract_array_sum"])(amps);
    for (var n = 0; n < K; n++) {
        result += Math.pow(freqs[n] - spectral_centroid, 4) * (amps[n] / A_d);
    }
    return result / Math.pow(spectral_standard_deviation, 4);
}


/***/ }),

/***/ "./modules/functions/xtract_spectral_mean.js":
/*!***************************************************!*\
  !*** ./modules/functions/xtract_spectral_mean.js ***!
  \***************************************************/
/*! exports provided: xtract_spectral_mean */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_131477__) {

"use strict";
__nested_webpack_require_131477__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_131477__.d(__webpack_exports__, "xtract_spectral_mean", function() { return xtract_spectral_mean; });
/* harmony import */ var _xtract_assert_array__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_131477__(/*! ./xtract_assert_array */ "./modules/functions/xtract_assert_array.js");
/* harmony import */ var _xtract_array_sum__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_131477__(/*! ./xtract_array_sum */ "./modules/functions/xtract_array_sum.js");
/// <reference path="../../typings/functions.d.ts" />



function xtract_spectral_mean(spectrum) {
    if (!Object(_xtract_assert_array__WEBPACK_IMPORTED_MODULE_0__["xtract_assert_array"])(spectrum))
        return 0;
    var N = spectrum.length;
    var n = N >> 1;
    var amps = spectrum.subarray(0, n);
    var sum = Object(_xtract_array_sum__WEBPACK_IMPORTED_MODULE_1__["xtract_array_sum"])(amps);
    var result = sum / n;
    return result;
}


/***/ }),

/***/ "./modules/functions/xtract_spectral_skewness.js":
/*!*******************************************************!*\
  !*** ./modules/functions/xtract_spectral_skewness.js ***!
  \*******************************************************/
/*! exports provided: xtract_spectral_skewness */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_132837__) {

"use strict";
__nested_webpack_require_132837__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_132837__.d(__webpack_exports__, "xtract_spectral_skewness", function() { return xtract_spectral_skewness; });
/* harmony import */ var _xtract_assert_array__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_132837__(/*! ./xtract_assert_array */ "./modules/functions/xtract_assert_array.js");
/* harmony import */ var _xtract_spectral_centroid__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_132837__(/*! ./xtract_spectral_centroid */ "./modules/functions/xtract_spectral_centroid.js");
/* harmony import */ var _xtract_spectral_standard_deviation__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_132837__(/*! ./xtract_spectral_standard_deviation */ "./modules/functions/xtract_spectral_standard_deviation.js");
/* harmony import */ var _xtract_spectral_variance__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_132837__(/*! ./xtract_spectral_variance */ "./modules/functions/xtract_spectral_variance.js");
/* harmony import */ var _xtract_array_sum__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_132837__(/*! ./xtract_array_sum */ "./modules/functions/xtract_array_sum.js");
/// <reference path="../../typings/functions.d.ts" />






function xtract_spectral_skewness(spectrum, spectral_centroid, spectral_standard_deviation) {
    if (!Object(_xtract_assert_array__WEBPACK_IMPORTED_MODULE_0__["xtract_assert_array"])(spectrum))
        return 0;
    if (typeof spectral_mean !== "number") {
        spectral_centroid = Object(_xtract_spectral_centroid__WEBPACK_IMPORTED_MODULE_1__["xtract_spectral_centroid"])(spectrum);
    }
    if (typeof spectral_standard_deviation !== "number") {
        spectral_standard_deviation = Object(_xtract_spectral_standard_deviation__WEBPACK_IMPORTED_MODULE_2__["xtract_spectral_standard_deviation"])(spectrum, Object(_xtract_spectral_variance__WEBPACK_IMPORTED_MODULE_3__["xtract_spectral_variance"])(spectrum, spectral_centroid));
    }
    if (spectral_standard_deviation === 0) {
        return 0;
    }
    var result = 0;
    var N = spectrum.length;
    var K = N >> 1;
    var amps = spectrum.subarray(0, K);
    var freqs = spectrum.subarray(K);
    var A_d = Object(_xtract_array_sum__WEBPACK_IMPORTED_MODULE_4__["xtract_array_sum"])(amps);
    for (var n = 0; n < K; n++) {
        result += Math.pow(freqs[n] - spectral_centroid, 3) * (amps[n] / A_d);
    }
    result /= Math.pow(spectral_standard_deviation, 3);
    return result;
}


/***/ }),

/***/ "./modules/functions/xtract_spectral_slope.js":
/*!****************************************************!*\
  !*** ./modules/functions/xtract_spectral_slope.js ***!
  \****************************************************/
/*! exports provided: xtract_spectral_slope */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_135642__) {

"use strict";
__nested_webpack_require_135642__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_135642__.d(__webpack_exports__, "xtract_spectral_slope", function() { return xtract_spectral_slope; });
/* harmony import */ var _xtract_assert_array__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_135642__(/*! ./xtract_assert_array */ "./modules/functions/xtract_assert_array.js");
/* harmony import */ var _xtract_array_sum__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_135642__(/*! ./xtract_array_sum */ "./modules/functions/xtract_array_sum.js");
/// <reference path="../../typings/functions.d.ts" />



function xtract_spectral_slope(spectrum) {
    if (!Object(_xtract_assert_array__WEBPACK_IMPORTED_MODULE_0__["xtract_assert_array"])(spectrum))
        return 0;
    var F = 0.0,
        FA = 0.0,
        A = 0.0,
        FXTRACT_SQ = 0.0;
    var N = spectrum.length;
    var M = N >> 1;
    var amps = spectrum.subarray(0, M);
    var freqs = spectrum.subarray(M);
    F = Object(_xtract_array_sum__WEBPACK_IMPORTED_MODULE_1__["xtract_array_sum"])(freqs);
    A = Object(_xtract_array_sum__WEBPACK_IMPORTED_MODULE_1__["xtract_array_sum"])(amps);
    for (var n = 0; n < M; n++) {
        FA += freqs[n] * amps[n];
        FXTRACT_SQ += freqs[n] * freqs[n];
    }
    return (1.0 / A) * (M * FA - F * A) / (M * FXTRACT_SQ - F * F);
}


/***/ }),

/***/ "./modules/functions/xtract_spectral_spread.js":
/*!*****************************************************!*\
  !*** ./modules/functions/xtract_spectral_spread.js ***!
  \*****************************************************/
/*! exports provided: xtract_spectral_spread */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_137336__) {

"use strict";
__nested_webpack_require_137336__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_137336__.d(__webpack_exports__, "xtract_spectral_spread", function() { return xtract_spectral_spread; });
/* harmony import */ var _xtract_spectral_variance__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_137336__(/*! ./xtract_spectral_variance */ "./modules/functions/xtract_spectral_variance.js");
/// <reference path="../../typings/functions.d.ts" />

function xtract_spectral_spread(spectrum, spectral_centroid) {
    return Object(_xtract_spectral_variance__WEBPACK_IMPORTED_MODULE_0__["xtract_spectral_variance"])(spectrum, spectral_centroid);
}


/***/ }),

/***/ "./modules/functions/xtract_spectral_standard_deviation.js":
/*!*****************************************************************!*\
  !*** ./modules/functions/xtract_spectral_standard_deviation.js ***!
  \*****************************************************************/
/*! exports provided: xtract_spectral_standard_deviation */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_138403__) {

"use strict";
__nested_webpack_require_138403__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_138403__.d(__webpack_exports__, "xtract_spectral_standard_deviation", function() { return xtract_spectral_standard_deviation; });
/* harmony import */ var _xtract_assert_array__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_138403__(/*! ./xtract_assert_array */ "./modules/functions/xtract_assert_array.js");
/* harmony import */ var _xtract_spectral_variance__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_138403__(/*! ./xtract_spectral_variance */ "./modules/functions/xtract_spectral_variance.js");
/// <reference path="../../typings/functions.d.ts" />


function xtract_spectral_standard_deviation(spectrum, spectral_variance) {
    if (!Object(_xtract_assert_array__WEBPACK_IMPORTED_MODULE_0__["xtract_assert_array"])(spectrum))
        return 0;
    if (typeof spectral_variance !== "number") {
        spectral_variance = Object(_xtract_spectral_variance__WEBPACK_IMPORTED_MODULE_1__["xtract_spectral_variance"])(spectrum);
    }
    return Math.sqrt(spectral_variance);
}


/***/ }),

/***/ "./modules/functions/xtract_spectral_variance.js":
/*!*******************************************************!*\
  !*** ./modules/functions/xtract_spectral_variance.js ***!
  \*******************************************************/
/*! exports provided: xtract_spectral_variance */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_139843__) {

"use strict";
__nested_webpack_require_139843__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_139843__.d(__webpack_exports__, "xtract_spectral_variance", function() { return xtract_spectral_variance; });
/* harmony import */ var _xtract_assert_array__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_139843__(/*! ./xtract_assert_array */ "./modules/functions/xtract_assert_array.js");
/* harmony import */ var _xtract_spectral_centroid__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_139843__(/*! ./xtract_spectral_centroid */ "./modules/functions/xtract_spectral_centroid.js");
/* harmony import */ var _xtract_array_sum__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_139843__(/*! ./xtract_array_sum */ "./modules/functions/xtract_array_sum.js");
/// <reference path="../../typings/functions.d.ts" />



function xtract_spectral_variance(spectrum, spectral_centroid) {
    if (!Object(_xtract_assert_array__WEBPACK_IMPORTED_MODULE_0__["xtract_assert_array"])(spectrum))
        return 0;
    if (typeof spectral_centroid !== "number") {
        spectral_centroid = Object(_xtract_spectral_centroid__WEBPACK_IMPORTED_MODULE_1__["xtract_spectral_centroid"])(spectrum);
    }
    var A = 0,
        result = 0;
    var N = spectrum.length;
    var n = N >> 1;
    var amps = spectrum.subarray(0, n);
    var freqs = spectrum.subarray(n, N);
    var A_d = Object(_xtract_array_sum__WEBPACK_IMPORTED_MODULE_2__["xtract_array_sum"])(amps);
    while (n--) {
        result += Math.pow(freqs[n] - spectral_centroid, 2) * (amps[n] / A_d);
    }
    return result;
}


/***/ }),

/***/ "./modules/functions/xtract_spectrum.js":
/*!**********************************************!*\
  !*** ./modules/functions/xtract_spectrum.js ***!
  \**********************************************/
/*! exports provided: xtract_spectrum */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_141715__) {

"use strict";
__nested_webpack_require_141715__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_141715__.d(__webpack_exports__, "xtract_spectrum", function() { return xtract_spectrum; });
/* harmony import */ var _xtract_assert_array__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_141715__(/*! ./xtract_assert_array */ "./modules/functions/xtract_assert_array.js");
/* harmony import */ var _xtract_array_normalise__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_141715__(/*! ./xtract_array_normalise */ "./modules/functions/xtract_array_normalise.js");
/* harmony import */ var _freeFFT__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_141715__(/*! ../freeFFT */ "./modules/freeFFT.js");
/// <reference path="../../typings/functions.d.ts" />




function xtract_spectrum(array, sample_rate, withDC, normalise) {
    (function (array, sample_rate) {
        if (typeof sample_rate !== "number") {
            throw ("Sample Rate must be defined");
        }
    })(array, sample_rate);
    if (!Object(_xtract_assert_array__WEBPACK_IMPORTED_MODULE_0__["xtract_assert_array"])(array)) {
        return 0;
    }
    withDC = (withDC === true);
    normalise = (normalise === true);

    var N = array.length;
    var result, align = 0;
    var amps;
    var freqs;
    if (withDC) {
        result = new Float64Array(N + 2);
    } else {
        align = 1;
        result = new Float64Array(N);
    }
    amps = result.subarray(0, result.length / 2);
    freqs = result.subarray(result.length / 2);
    var reals = new Float64Array(N);
    var imags = new Float64Array(N);
    array.forEach(function (v, i) {
        reals[i] = v;
    });
    Object(_freeFFT__WEBPACK_IMPORTED_MODULE_2__["transform"])(reals, imags);
    for (var k = align; k <= result.length / 2; k++) {
        amps[k - align] = Math.sqrt((reals[k] * reals[k]) + (imags[k] * imags[k])) / array.length;
        freqs[k - align] = (2 * k / N) * (sample_rate / 2);
    }
    if (normalise) {
        amps = Object(_xtract_array_normalise__WEBPACK_IMPORTED_MODULE_1__["xtract_array_normalise"])(amps);
    }
    return result;
}


/***/ }),

/***/ "./modules/functions/xtract_standard_deviation.js":
/*!********************************************************!*\
  !*** ./modules/functions/xtract_standard_deviation.js ***!
  \********************************************************/
/*! exports provided: xtract_standard_deviation */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_144169__) {

"use strict";
__nested_webpack_require_144169__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_144169__.d(__webpack_exports__, "xtract_standard_deviation", function() { return xtract_standard_deviation; });
/* harmony import */ var _xtract_assert_array__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_144169__(/*! ./xtract_assert_array */ "./modules/functions/xtract_assert_array.js");
/* harmony import */ var _xtract_variance__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_144169__(/*! ./xtract_variance */ "./modules/functions/xtract_variance.js");
/// <reference path="../../typings/functions.d.ts" />


function xtract_standard_deviation(array, variance) {
    if (!Object(_xtract_assert_array__WEBPACK_IMPORTED_MODULE_0__["xtract_assert_array"])(array))
        return 0;
    if (typeof variance !== "number") {
        variance = Object(_xtract_variance__WEBPACK_IMPORTED_MODULE_1__["xtract_variance"])(array);
    }
    return Math.sqrt(variance);
}


/***/ }),

/***/ "./modules/functions/xtract_sum.js":
/*!*****************************************!*\
  !*** ./modules/functions/xtract_sum.js ***!
  \*****************************************/
/*! exports provided: xtract_sum */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_145422__) {

"use strict";
__nested_webpack_require_145422__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_145422__.d(__webpack_exports__, "xtract_sum", function() { return xtract_sum; });
/* harmony import */ var _xtract_assert_array__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_145422__(/*! ./xtract_assert_array */ "./modules/functions/xtract_assert_array.js");
/* harmony import */ var _xtract_array_sum__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_145422__(/*! ./xtract_array_sum */ "./modules/functions/xtract_array_sum.js");
/// <reference path="../../typings/functions.d.ts" />



function xtract_sum(data) {
    if (!Object(_xtract_assert_array__WEBPACK_IMPORTED_MODULE_0__["xtract_assert_array"])(data))
        return 0;
    return Object(_xtract_array_sum__WEBPACK_IMPORTED_MODULE_1__["xtract_array_sum"])(data);
}


/***/ }),

/***/ "./modules/functions/xtract_temporal_centroid.js":
/*!*******************************************************!*\
  !*** ./modules/functions/xtract_temporal_centroid.js ***!
  \*******************************************************/
/*! exports provided: xtract_temporal_centroid */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_146607__) {

"use strict";
__nested_webpack_require_146607__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_146607__.d(__webpack_exports__, "xtract_temporal_centroid", function() { return xtract_temporal_centroid; });
/* harmony import */ var _xtract_array_sum__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_146607__(/*! ./xtract_array_sum */ "./modules/functions/xtract_array_sum.js");
/// <reference path="../../typings/functions.d.ts" />

function xtract_temporal_centroid(energyArray, sample_rate, window_ms) {
    if (typeof sample_rate !== "number") {
        console.error("xtract_temporal_centroid requires sample_rate to be a number");
        return;
    }
    if (typeof window_ms !== "number") {
        console.log("xtract_temporal_centroid assuming window_ms = 100ms");
        window_ms = 100.0;
    }
    if (window_ms <= 0) {
        window_ms = 100.0;
    }
    var ts = 1.0 / sample_rate;
    var L = sample_rate * (window_ms / 1000.0);
    var den = Object(_xtract_array_sum__WEBPACK_IMPORTED_MODULE_0__["xtract_array_sum"])(energyArray);
    var num = 0.0;
    for (var n = 0; n < energyArray.length; n++) {
        num += energyArray[n] * (n * L * ts);
    }
    var result = num / den;
    return result;
}


/***/ }),

/***/ "./modules/functions/xtract_tonality.js":
/*!**********************************************!*\
  !*** ./modules/functions/xtract_tonality.js ***!
  \**********************************************/
/*! exports provided: xtract_tonality */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_148150__) {

"use strict";
__nested_webpack_require_148150__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_148150__.d(__webpack_exports__, "xtract_tonality", function() { return xtract_tonality; });
/* harmony import */ var _xtract_assert_array__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_148150__(/*! ./xtract_assert_array */ "./modules/functions/xtract_assert_array.js");
/* harmony import */ var _xtract_flatness_db__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_148150__(/*! ./xtract_flatness_db */ "./modules/functions/xtract_flatness_db.js");
/// <reference path="../../typings/functions.d.ts" />



function xtract_tonality(spectrum, flatness_db) {
    if (!Object(_xtract_assert_array__WEBPACK_IMPORTED_MODULE_0__["xtract_assert_array"])(spectrum))
        return 0;
    if (typeof flatness_db !== "number") {
        flatness_db = Object(_xtract_flatness_db__WEBPACK_IMPORTED_MODULE_1__["xtract_flatness_db"])(spectrum);
    }
    return Math.min(flatness_db / -60.0, 1);
}


/***/ }),

/***/ "./modules/functions/xtract_tristimulus.js":
/*!*************************************************!*\
  !*** ./modules/functions/xtract_tristimulus.js ***!
  \*************************************************/
/*! exports provided: xtract_tristimulus, xtract_tristimulus_1, xtract_tristimulus_2, xtract_tristimulus_3 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_149526__) {

"use strict";
__nested_webpack_require_149526__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_149526__.d(__webpack_exports__, "xtract_tristimulus", function() { return xtract_tristimulus; });
/* harmony export (binding) */ __nested_webpack_require_149526__.d(__webpack_exports__, "xtract_tristimulus_1", function() { return xtract_tristimulus_1; });
/* harmony export (binding) */ __nested_webpack_require_149526__.d(__webpack_exports__, "xtract_tristimulus_2", function() { return xtract_tristimulus_2; });
/* harmony export (binding) */ __nested_webpack_require_149526__.d(__webpack_exports__, "xtract_tristimulus_3", function() { return xtract_tristimulus_3; });
/* harmony import */ var _xtract_assert_array__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_149526__(/*! ./xtract_assert_array */ "./modules/functions/xtract_assert_array.js");
/// <reference path="../../typings/functions.d.ts" />

function xtract_tristimulus(spectrum, f0) {
    var trist = [0.0, 0.0, 0.0];
    if (!Object(_xtract_assert_array__WEBPACK_IMPORTED_MODULE_0__["xtract_assert_array"])(spectrum))
        return trist;
    if (typeof f0 !== "number") {
        throw ("xtract_tristimulus requires f0 to be defined and a number");
    }
    var h = 0,
        den = 0.0,
        p = [0, 0, 0, 0, 0],
        temp = 0.0,
        num = 0.0;
    var N = spectrum.length;
    var K = N >> 1;
    var amps = spectrum.subarray(0, K);
    var freqs = spectrum.subarray(K);

    for (var i = 0; i < K; i++) {
        temp = amps[i];
        if (temp !== 0) {
            den += temp;
            h = Math.floor(freqs[i] / f0 + 0.5);
            p[h - 1] += temp;
        }
    }

    if (den !== 0.0) {
        trist[0] = p[0] / den;
        trist[1] = (p[1] + p[2] + p[3]) / den;
        trist[2] = p[4] / den;
    }
    return trist;
}

function xtract_tristimulus_1(spectrum, f0) {
    return xtract_tristimulus(spectrum, f0)[0];
}

function xtract_tristimulus_2(spectrum, f0) {
    return xtract_tristimulus(spectrum, f0)[1];
}

function xtract_tristimulus_3(spectrum, f0) {
    return xtract_tristimulus(spectrum, f0)[2];
}


/***/ }),

/***/ "./modules/functions/xtract_variance.js":
/*!**********************************************!*\
  !*** ./modules/functions/xtract_variance.js ***!
  \**********************************************/
/*! exports provided: xtract_variance */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_151911__) {

"use strict";
__nested_webpack_require_151911__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_151911__.d(__webpack_exports__, "xtract_variance", function() { return xtract_variance; });
/* harmony import */ var _xtract_assert_array__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_151911__(/*! ./xtract_assert_array */ "./modules/functions/xtract_assert_array.js");
/* harmony import */ var _xtract_mean__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_151911__(/*! ./xtract_mean */ "./modules/functions/xtract_mean.js");
/// <reference path="../../typings/functions.d.ts" />



function xtract_variance(array, mean) {
    if (!Object(_xtract_assert_array__WEBPACK_IMPORTED_MODULE_0__["xtract_assert_array"])(array))
        return 0;
    if (typeof mean !== "number") {
        mean = Object(_xtract_mean__WEBPACK_IMPORTED_MODULE_1__["xtract_mean"])(array);
    }
    if (!Object(_xtract_assert_array__WEBPACK_IMPORTED_MODULE_0__["xtract_assert_array"])(array))
        return 0;
    if (typeof mean !== "number") {
        mean = Object(_xtract_mean__WEBPACK_IMPORTED_MODULE_1__["xtract_mean"])(array);
    }
    var result = 0.0;
    if (array.reduce) {
        result = array.reduce(function (a, b) {
            a += Math.pow(b - mean, 2);
            return a;
        }, 0);
    } else {
        for (var n = 0; n < array.length; n++) {
            result += Math.pow(array[n] - mean, 2);
        }
    }
    result /= (array.length - 1);
    return result;
}


/***/ }),

/***/ "./modules/functions/xtract_wavelet_f0.js":
/*!************************************************!*\
  !*** ./modules/functions/xtract_wavelet_f0.js ***!
  \************************************************/
/*! exports provided: xtract_wavelet_f0 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_153706__) {

"use strict";
__nested_webpack_require_153706__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_153706__.d(__webpack_exports__, "xtract_wavelet_f0", function() { return xtract_wavelet_f0; });
/* harmony import */ var _xtract_assert_array__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_153706__(/*! ./xtract_assert_array */ "./modules/functions/xtract_assert_array.js");
/* harmony import */ var _xtract_array_sum__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_153706__(/*! ./xtract_array_sum */ "./modules/functions/xtract_array_sum.js");
/* harmony import */ var _xtract_mean__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_153706__(/*! ./xtract_mean */ "./modules/functions/xtract_mean.js");
/// <reference path="../../typings/functions.d.ts" />




function xtract_wavelet_f0(timeArray, sampleRate, pitchtracker) { // eslint-disable-line max-statements
    if (!Object(_xtract_assert_array__WEBPACK_IMPORTED_MODULE_0__["xtract_assert_array"])(timeArray))
        return 0;
    if (pitchtracker === undefined) {
        throw ("xtract_wavelet_f0 requires pitchtracker to be defined");
    }
    if (Object(_xtract_array_sum__WEBPACK_IMPORTED_MODULE_1__["xtract_array_sum"])(timeArray) === 0) {
        return;
    }

    function _power2p(value) {
        if (value === 0) {
            return 1;
        }
        if (value === 2) {
            return 1;
        }
        if (value & 0x1) {
            return 0;
        }
        return (_power2p(value >> 1));
    }

    function _bitcount(value) {
        if (value === 0) {
            return 0;
        }
        if (value === 1) {
            return 1;
        }
        if (value === 2) {
            return 2;
        }
        return _bitcount(value >> 1) + 1;
    }

    function _ceil_power2(value) {
        if (_power2p(value)) {
            return value;
        }

        if (value === 1) {
            return 2;
        }
        var j, i = _bitcount(value);
        var res = 1;
        for (j = 0; j < i; j++) {
            res <<= 1;
        }
        return res;
    }

    function _floor_power2(value) {
        if (_power2p(value)) {
            return value;
        }
        return _ceil_power2(value) / 2;
    }

    function _iabs(x) {
        if (x >= 0) return x;
        return -x;
    }

    function _2power(i) {
        var res = 1,
            j;
        for (j = 0; j < i; j++) {
            res <<= 1;
        }
        return res;
    }

    function dywapitch_neededsamplecount(minFreq) {
        var nbSam = 3 * 44100 / minFreq; // 1017. for 130 Hz
        nbSam = _ceil_power2(nbSam); // 1024
        return nbSam;
    }

    function bodyLoop() { // eslint-disable-line max-statements
        delta = Math.floor(44100 / (_2power(curLevel) * 3000));
        if (curSamNb < 2) {
            cont = false;
            return;
        }
        var dv, previousDV = -1000;
        var nbMins = 0,
            nbMaxs = 0;
        var lastMinIndex = -1000000;
        var lastmaxIndex = -1000000;
        var findMax = 0;
        var findMin = 0;
        (function () { // eslint-disable-line complexity
            for (i = 2; i < curSamNb; i++) {
                si = sam[i] - theDC;
                si1 = sam[i - 1] - theDC;

                if (si1 <= 0 && si > 0) {
                    findMax = 1;
                }
                if (si1 >= 0 && si < 0) {
                    findMin = 1;
                }

                // min or max ?
                dv = si - si1;

                if (previousDV > -1000) {

                    if (findMin && previousDV < 0 && dv >= 0) {
                        // minimum
                        if (Math.abs(si) >= ampltitudeThreshold) {
                            if (i > lastMinIndex + delta) {
                                mins[nbMins++] = i;
                                lastMinIndex = i;
                                findMin = 0;
                            }
                        }
                    }

                    if (findMax && previousDV > 0 && dv <= 0) {
                        // maximum
                        if (Math.abs(si) >= ampltitudeThreshold) {
                            if (i > lastmaxIndex + delta) {
                                maxs[nbMaxs++] = i;
                                lastmaxIndex = i;
                                findMax = 0;
                            }
                        }
                    }
                }

                previousDV = dv;
            }
        })();

        if (nbMins === 0 && nbMaxs === 0) {
            cont = false;
            return;
        }

        var d;
        //memset(distances, 0, samplecount*sizeof(int));
        var distances = new Int32Array(samplecount);
        (function () {
            for (i = 0; i < nbMins; i++) {
                for (j = 1; j < 3; j++) {
                    if (i + j < nbMins) {
                        d = _iabs(mins[i] - mins[i + j]);
                        distances[d] = distances[d] + 1;
                    }
                }
            }
            for (i = 0; i < nbMaxs; i++) {
                for (j = 1; j < 3; j++) {
                    if (i + j < nbMaxs) {
                        d = _iabs(maxs[i] - maxs[i + j]);
                        //asLog("dywapitch i=%ld j=%ld d=%ld\n", i, j, d);
                        distances[d] = distances[d] + 1;
                    }
                }
            }
        })();

        var bestDistance = -1;
        var bestValue = -1;
        (function () {
            for (i = 0; i < curSamNb; i++) {
                var summed = 0;
                for (j = -delta; j <= delta; j++) {
                    if (i + j >= 0 && i + j < curSamNb)
                        summed += distances[i + j];
                }
                //asLog("dywapitch i=%ld summed=%ld bestDistance=%ld\n", i, summed, bestDistance);
                if (summed === bestValue) {
                    if (i === 2 * bestDistance)
                        bestDistance = i;

                } else if (summed > bestValue) {
                    bestValue = summed;
                    bestDistance = i;
                }
            }
        })();
        var distAvg = 0.0;
        var nbDists = 0;
        (function () {
            for (j = -delta; j <= delta; j++) {
                if (bestDistance + j >= 0 && bestDistance + j < samplecount) {
                    var nbDist = distances[bestDistance + j];
                    if (nbDist > 0) {
                        nbDists += nbDist;
                        distAvg += (bestDistance + j) * nbDist;
                    }
                }
            }
        })();
        // this is our mode distance !
        distAvg /= nbDists;

        // continue the levels ?
        if (curModeDistance > -1.0) {
            var similarity = Math.abs(distAvg * 2 - curModeDistance);
            if (similarity <= 2 * delta) {
                //if DEBUGG then put "similarity="&similarity&&"delta="&delta&&"ok"
                //asLog("dywapitch similarity=%f OK !\n", similarity);
                // two consecutive similar mode distances : ok !
                pitchF = 44100 / (_2power(curLevel - 1) * curModeDistance);
                cont = false;
                return;
            }
            //if DEBUGG then put "similarity="&similarity&&"delta="&delta&&"not"
        }

        // not similar, continue next level
        curModeDistance = distAvg;

        curLevel = curLevel + 1;
        if (curLevel >= 6) {
            // put "max levels reached, exiting"
            //asLog("dywapitch max levels reached, exiting\n");
            cont = false;
            return;
        }

        // downsample
        if (curSamNb < 2) {
            //asLog("dywapitch not enough samples, exiting\n");
            cont = false;
            return;
        }
        (function () {
            for (i = 0; i < curSamNb / 2; i++) {
                sam[i] = (sam[2 * i] + sam[2 * i + 1]) / 2.0;
            }
        })();
        curSamNb /= 2;
    }

    function _dywapitch_dynamicprocess(pitchtracker, pitch) { // eslint-disable-line complexity
        if (pitch === 0.0) {
            return -1.0;
        }

        var estimatedPitch = -1,
            acceptedError = 0.2,
            maxConfidence = 5;
        if (pitch !== -1) {
            // I have a pitch here

            if (pitchtracker._prevPitch === -1) {
                // no Previous
                estimatedPitch = pitch;
                pitchtracker._prevPitch = pitch;
                pitchtracker._pitchConfidence = 1;
            } else if (Math.abs(pitchtracker._prevPitch - pitch) / pitch < acceptedError) {
                // similar: remember and increment
                pitchtracker._prevPitch = pitch;
                estimatedPitch = pitch;
                pitchtracker._pitchConfidence = Math.min(maxConfidence, pitchtracker._pitchConfidence + 1);
            } else if ((pitchtracker._pitchConfidence >= maxConfidence - 2) && Math.abs(pitchtracker._pitchConfidence - 2 * pitch) / (2 * pitch) < acceptedError) {
                // close to half the last pitch, which is trusted
                estimatedPitch = 2 * pitch;
                pitchtracker._prevPitch = estimatedPitch;
            } else if ((pitchtracker._pitchConfidence >= maxConfidence - 2) && Math.abs(pitchtracker._pitchConfidence - 0.5 * pitch) / (0.5 * pitch) < acceptedError) {
                estimatedPitch = 0.5 * pitch;
                pitchtracker._prevPitch = estimatedPitch;
            } else {
                // Very different value
                if (pitchtracker._pitchConfidence >= 1) {
                    // previous trusted
                    estimatedPitch = pitchtracker._prevPitch;
                    pitchtracker._pitchConfidence = Math.max(0, pitchtracker._pitchConfidence - 1);
                } else {
                    estimatedPitch = pitch;
                    pitchtracker._prevPitch = pitch;
                    pitchtracker._pitchConfidence = 1;
                }
            }
        } else {
            // No pitch
            if (pitchtracker._prevPitch !== -1) {
                // was a pitch before
                if (pitchtracker._pitchConfidence >= 1) {
                    // previous trusted
                    estimatedPitch = pitchtracker._prevPitch;
                    pitchtracker._pitchConfidence = Math.max(0, pitchtracker._pitchConfidence - 1);
                } else {
                    pitchtracker._prevPitch = -1;
                    estimatedPitch = -1;
                    pitchtracker._pitchConfidence = 0;
                }
            }
        }

        if (pitchtracker._pitchConfidence >= 1) {
            pitch = estimatedPitch;
        } else {
            pitch = -1;
        }
        if (pitch === -1) {
            pitch = 0.0;
        }
        return pitch;
    }

    var _minmax = {
        index: undefined,
        next: undefined
    };
    //_dywapitch_computeWaveletPitch(samples, startsample, samplecount)
    var samples = timeArray,
        startsample = 0,
        samplecount = timeArray.length;
    var pitchF = 0.0;
    var i, j, si, si1;

    samplecount = _floor_power2(samplecount);
    var sam = new Float64Array(samplecount);
    for (i = 0; i < samplecount; i++) {
        sam[i] = samples[i];
    }

    var curSamNb = samplecount;

    var mins = new Int32Array(samplecount);
    var maxs = new Int32Array(samplecount);

    //var maxFLWTlevels = 6;
    //var maxF = 3000;
    //var differenceLevelsN = 3;
    //var maximaThresholdRatio = 0.75;
    var theDC = getTheDC(sam, samplecount);

    function getTheDC(sam, samplecount) {
        return Object(_xtract_mean__WEBPACK_IMPORTED_MODULE_2__["xtract_mean"])(sam.subarray(samplecount));
    }

    function getamplitudeMax(sam, samplecount) {
        var si, i;
        var minValue = 0.0,
            maxValue = 0.0;
        for (i = 0; i < samplecount; i++) {
            si = sam[i];
            if (si > maxValue) {
                maxValue = si;
            }
            if (si < minValue) {
                minValue = si;
            }
        }
        maxValue = maxValue - theDC;
        minValue = minValue - theDC;
        return (maxValue > -minValue ? maxValue : -minValue);
    }
    var ampltitudeThreshold = getamplitudeMax(sam, samplecount) * 0.75;

    var curLevel = 0;
    var curModeDistance = -1;
    var delta;

    var cont = true;

    while (cont) {
        bodyLoop();
    }

    //_dywapitch_dynamicprocess(pitchtracker, pitch)
    return _dywapitch_dynamicprocess(pitchtracker, pitchF);
}


/***/ }),

/***/ "./modules/functions/xtract_yin.js":
/*!*****************************************!*\
  !*** ./modules/functions/xtract_yin.js ***!
  \*****************************************/
/*! exports provided: xtract_yin */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_166605__) {

"use strict";
__nested_webpack_require_166605__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_166605__.d(__webpack_exports__, "xtract_yin", function() { return xtract_yin; });
/* harmony import */ var _xtract_assert_array__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_166605__(/*! ./xtract_assert_array */ "./modules/functions/xtract_assert_array.js");
/// <reference path="../../typings/functions.d.ts" />


function xtract_yin(array) {
    // Uses the YIN process
    if (!Object(_xtract_assert_array__WEBPACK_IMPORTED_MODULE_0__["xtract_assert_array"])(array))
        return 0;
    var T = array.length;
    var d = new Float64Array(array.length);
    var r = new array.constructor(array.length);

    var d_sigma = 0;
    for (var tau = 1; tau < T; tau++) {
        var sigma = 0;
        for (var t = 1; t < T - tau; t++) {
            sigma += Math.pow(array[t] - array[t + tau], 2);
        }
        d[tau] = sigma;
        d_sigma += sigma;
        r[tau] = d[tau] / ((1 / tau) * d_sigma);
    }
    return r;
}


/***/ }),

/***/ "./modules/functions/xtract_zcr.js":
/*!*****************************************!*\
  !*** ./modules/functions/xtract_zcr.js ***!
  \*****************************************/
/*! exports provided: xtract_zcr */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_167930__) {

"use strict";
__nested_webpack_require_167930__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_167930__.d(__webpack_exports__, "xtract_zcr", function() { return xtract_zcr; });
/* harmony import */ var _xtract_assert_array__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_167930__(/*! ./xtract_assert_array */ "./modules/functions/xtract_assert_array.js");
/// <reference path="../../typings/functions.d.ts" />

function xtract_zcr(timeArray) {
    if (!Object(_xtract_assert_array__WEBPACK_IMPORTED_MODULE_0__["xtract_assert_array"])(timeArray))
        return 0;
    var result = 0;
    for (var n = 1; n < timeArray.length; n++) {
        if (timeArray[n] * timeArray[n - 1] < 0) {
            result++;
        }
    }
    return result / timeArray.length;
}


/***/ }),

/***/ "./modules/index.js":
/*!**************************!*\
  !*** ./modules/index.js ***!
  \**************************/
/*! exports provided: xtract_is_denormal, xtract_assert_array, xtract_assert_positive_integer, xtract_array_sum, xtract_array_copy, xtract_array_min, xtract_array_max, xtract_array_scale, xtract_array_normalise, xtract_array_bound, xtract_array_interlace, xtract_array_deinterlace, xtract_get_number_of_frames, xtract_get_data_frames, xtract_process_frame_data, xtract_array_to_JSON, xtract_frame_from_array, xtract_mean, xtract_temporal_centroid, xtract_variance, xtract_standard_deviation, xtract_average_deviation, xtract_skewness_kurtosis, xtract_skewness, xtract_kurtosis, xtract_spectral_centroid, xtract_spectral_mean, xtract_spectral_variance, xtract_spectral_spread, xtract_spectral_standard_deviation, xtract_spectral_skewness, xtract_spectral_kurtosis, xtract_irregularity_k, xtract_irregularity_j, xtract_tristimulus, xtract_tristimulus_1, xtract_tristimulus_2, xtract_tristimulus_3, xtract_smoothness, xtract_zcr, xtract_rolloff, xtract_loudness, xtract_flatness, xtract_flatness_db, xtract_tonality, xtract_crest, xtract_noisiness, xtract_rms_amplitude, xtract_spectral_inharmonicity, xtract_power, xtract_odd_even_ratio, xtract_sharpness, xtract_spectral_slope, xtract_lowhigh, xtract_lowest_value, xtract_highest_value, xtract_sum, xtract_nonzero_count, xtract_hps, xtract_f0, xtract_failsafe_f0, xtract_wavelet_f0, xtract_midicent, xtract_spectral_fundamental, xtract_energy, xtract_spectrum, xtract_complex_spectrum, xtract_mfcc, xtract_dct, xtract_dct_2, xtract_autocorrelation, xtract_amdf, xtract_asdf, xtract_bark_coefficients, xtract_peak_spectrum, xtract_harmonic_spectrum, xtract_lpc, xtract_lpcc, xtract_pcp, xtract_yin, xtract_onset, xtract_resample, xtract_init_dft, xtract_init_dct, xtract_init_mfcc, xtract_init_wavelet, xtract_init_pcp, xtract_init_bark, xtract_init_chroma, xtract_apply_window, xtract_create_window, xtract_chroma, HarmonicSpectrumData, PeakSpectrumData, SpectrumData, TimeData */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_170826__) {

"use strict";
__nested_webpack_require_170826__.r(__webpack_exports__);
/* harmony import */ var _functions_xtract_is_denormal__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_170826__(/*! ./functions/xtract_is_denormal */ "./modules/functions/xtract_is_denormal.js");
/* harmony reexport (safe) */ __nested_webpack_require_170826__.d(__webpack_exports__, "xtract_is_denormal", function() { return _functions_xtract_is_denormal__WEBPACK_IMPORTED_MODULE_0__["xtract_is_denormal"]; });

/* harmony import */ var _functions_xtract_assert_array__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_170826__(/*! ./functions/xtract_assert_array */ "./modules/functions/xtract_assert_array.js");
/* harmony reexport (safe) */ __nested_webpack_require_170826__.d(__webpack_exports__, "xtract_assert_array", function() { return _functions_xtract_assert_array__WEBPACK_IMPORTED_MODULE_1__["xtract_assert_array"]; });

/* harmony import */ var _functions_xtract_assert_positive_integer__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_170826__(/*! ./functions/xtract_assert_positive_integer */ "./modules/functions/xtract_assert_positive_integer.js");
/* harmony reexport (safe) */ __nested_webpack_require_170826__.d(__webpack_exports__, "xtract_assert_positive_integer", function() { return _functions_xtract_assert_positive_integer__WEBPACK_IMPORTED_MODULE_2__["xtract_assert_positive_integer"]; });

/* harmony import */ var _functions_xtract_array_sum__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_170826__(/*! ./functions/xtract_array_sum */ "./modules/functions/xtract_array_sum.js");
/* harmony reexport (safe) */ __nested_webpack_require_170826__.d(__webpack_exports__, "xtract_array_sum", function() { return _functions_xtract_array_sum__WEBPACK_IMPORTED_MODULE_3__["xtract_array_sum"]; });

/* harmony import */ var _functions_xtract_array_copy__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_170826__(/*! ./functions/xtract_array_copy */ "./modules/functions/xtract_array_copy.js");
/* harmony reexport (safe) */ __nested_webpack_require_170826__.d(__webpack_exports__, "xtract_array_copy", function() { return _functions_xtract_array_copy__WEBPACK_IMPORTED_MODULE_4__["xtract_array_copy"]; });

/* harmony import */ var _functions_xtract_array_min__WEBPACK_IMPORTED_MODULE_5__ = __nested_webpack_require_170826__(/*! ./functions/xtract_array_min */ "./modules/functions/xtract_array_min.js");
/* harmony reexport (safe) */ __nested_webpack_require_170826__.d(__webpack_exports__, "xtract_array_min", function() { return _functions_xtract_array_min__WEBPACK_IMPORTED_MODULE_5__["xtract_array_min"]; });

/* harmony import */ var _functions_xtract_array_max__WEBPACK_IMPORTED_MODULE_6__ = __nested_webpack_require_170826__(/*! ./functions/xtract_array_max */ "./modules/functions/xtract_array_max.js");
/* harmony reexport (safe) */ __nested_webpack_require_170826__.d(__webpack_exports__, "xtract_array_max", function() { return _functions_xtract_array_max__WEBPACK_IMPORTED_MODULE_6__["xtract_array_max"]; });

/* harmony import */ var _functions_xtract_array_scale__WEBPACK_IMPORTED_MODULE_7__ = __nested_webpack_require_170826__(/*! ./functions/xtract_array_scale */ "./modules/functions/xtract_array_scale.js");
/* harmony reexport (safe) */ __nested_webpack_require_170826__.d(__webpack_exports__, "xtract_array_scale", function() { return _functions_xtract_array_scale__WEBPACK_IMPORTED_MODULE_7__["xtract_array_scale"]; });

/* harmony import */ var _functions_xtract_array_normalise__WEBPACK_IMPORTED_MODULE_8__ = __nested_webpack_require_170826__(/*! ./functions/xtract_array_normalise */ "./modules/functions/xtract_array_normalise.js");
/* harmony reexport (safe) */ __nested_webpack_require_170826__.d(__webpack_exports__, "xtract_array_normalise", function() { return _functions_xtract_array_normalise__WEBPACK_IMPORTED_MODULE_8__["xtract_array_normalise"]; });

/* harmony import */ var _functions_xtract_array_bound__WEBPACK_IMPORTED_MODULE_9__ = __nested_webpack_require_170826__(/*! ./functions/xtract_array_bound */ "./modules/functions/xtract_array_bound.js");
/* harmony reexport (safe) */ __nested_webpack_require_170826__.d(__webpack_exports__, "xtract_array_bound", function() { return _functions_xtract_array_bound__WEBPACK_IMPORTED_MODULE_9__["xtract_array_bound"]; });

/* harmony import */ var _functions_xtract_array_interlace__WEBPACK_IMPORTED_MODULE_10__ = __nested_webpack_require_170826__(/*! ./functions/xtract_array_interlace */ "./modules/functions/xtract_array_interlace.js");
/* harmony reexport (safe) */ __nested_webpack_require_170826__.d(__webpack_exports__, "xtract_array_interlace", function() { return _functions_xtract_array_interlace__WEBPACK_IMPORTED_MODULE_10__["xtract_array_interlace"]; });

/* harmony import */ var _functions_xtract_array_deinterlace__WEBPACK_IMPORTED_MODULE_11__ = __nested_webpack_require_170826__(/*! ./functions/xtract_array_deinterlace */ "./modules/functions/xtract_array_deinterlace.js");
/* harmony reexport (safe) */ __nested_webpack_require_170826__.d(__webpack_exports__, "xtract_array_deinterlace", function() { return _functions_xtract_array_deinterlace__WEBPACK_IMPORTED_MODULE_11__["xtract_array_deinterlace"]; });

/* harmony import */ var _functions_xtract_get_number_of_frames__WEBPACK_IMPORTED_MODULE_12__ = __nested_webpack_require_170826__(/*! ./functions/xtract_get_number_of_frames */ "./modules/functions/xtract_get_number_of_frames.js");
/* harmony reexport (safe) */ __nested_webpack_require_170826__.d(__webpack_exports__, "xtract_get_number_of_frames", function() { return _functions_xtract_get_number_of_frames__WEBPACK_IMPORTED_MODULE_12__["xtract_get_number_of_frames"]; });

/* harmony import */ var _functions_xtract_get_data_frames__WEBPACK_IMPORTED_MODULE_13__ = __nested_webpack_require_170826__(/*! ./functions/xtract_get_data_frames */ "./modules/functions/xtract_get_data_frames.js");
/* harmony reexport (safe) */ __nested_webpack_require_170826__.d(__webpack_exports__, "xtract_get_data_frames", function() { return _functions_xtract_get_data_frames__WEBPACK_IMPORTED_MODULE_13__["xtract_get_data_frames"]; });

/* harmony import */ var _functions_xtract_process_frame_data__WEBPACK_IMPORTED_MODULE_14__ = __nested_webpack_require_170826__(/*! ./functions/xtract_process_frame_data */ "./modules/functions/xtract_process_frame_data.js");
/* harmony reexport (safe) */ __nested_webpack_require_170826__.d(__webpack_exports__, "xtract_process_frame_data", function() { return _functions_xtract_process_frame_data__WEBPACK_IMPORTED_MODULE_14__["xtract_process_frame_data"]; });

/* harmony import */ var _functions_xtract_array_to_JSON__WEBPACK_IMPORTED_MODULE_15__ = __nested_webpack_require_170826__(/*! ./functions/xtract_array_to_JSON */ "./modules/functions/xtract_array_to_JSON.js");
/* harmony reexport (safe) */ __nested_webpack_require_170826__.d(__webpack_exports__, "xtract_array_to_JSON", function() { return _functions_xtract_array_to_JSON__WEBPACK_IMPORTED_MODULE_15__["xtract_array_to_JSON"]; });

/* harmony import */ var _functions_xtract_frame_from_array__WEBPACK_IMPORTED_MODULE_16__ = __nested_webpack_require_170826__(/*! ./functions/xtract_frame_from_array */ "./modules/functions/xtract_frame_from_array.js");
/* harmony reexport (safe) */ __nested_webpack_require_170826__.d(__webpack_exports__, "xtract_frame_from_array", function() { return _functions_xtract_frame_from_array__WEBPACK_IMPORTED_MODULE_16__["xtract_frame_from_array"]; });

/* harmony import */ var _functions_xtract_mean__WEBPACK_IMPORTED_MODULE_17__ = __nested_webpack_require_170826__(/*! ./functions/xtract_mean */ "./modules/functions/xtract_mean.js");
/* harmony reexport (safe) */ __nested_webpack_require_170826__.d(__webpack_exports__, "xtract_mean", function() { return _functions_xtract_mean__WEBPACK_IMPORTED_MODULE_17__["xtract_mean"]; });

/* harmony import */ var _functions_xtract_temporal_centroid__WEBPACK_IMPORTED_MODULE_18__ = __nested_webpack_require_170826__(/*! ./functions/xtract_temporal_centroid */ "./modules/functions/xtract_temporal_centroid.js");
/* harmony reexport (safe) */ __nested_webpack_require_170826__.d(__webpack_exports__, "xtract_temporal_centroid", function() { return _functions_xtract_temporal_centroid__WEBPACK_IMPORTED_MODULE_18__["xtract_temporal_centroid"]; });

/* harmony import */ var _functions_xtract_variance__WEBPACK_IMPORTED_MODULE_19__ = __nested_webpack_require_170826__(/*! ./functions/xtract_variance */ "./modules/functions/xtract_variance.js");
/* harmony reexport (safe) */ __nested_webpack_require_170826__.d(__webpack_exports__, "xtract_variance", function() { return _functions_xtract_variance__WEBPACK_IMPORTED_MODULE_19__["xtract_variance"]; });

/* harmony import */ var _functions_xtract_standard_deviation__WEBPACK_IMPORTED_MODULE_20__ = __nested_webpack_require_170826__(/*! ./functions/xtract_standard_deviation */ "./modules/functions/xtract_standard_deviation.js");
/* harmony reexport (safe) */ __nested_webpack_require_170826__.d(__webpack_exports__, "xtract_standard_deviation", function() { return _functions_xtract_standard_deviation__WEBPACK_IMPORTED_MODULE_20__["xtract_standard_deviation"]; });

/* harmony import */ var _functions_xtract_average_deviation__WEBPACK_IMPORTED_MODULE_21__ = __nested_webpack_require_170826__(/*! ./functions/xtract_average_deviation */ "./modules/functions/xtract_average_deviation.js");
/* harmony reexport (safe) */ __nested_webpack_require_170826__.d(__webpack_exports__, "xtract_average_deviation", function() { return _functions_xtract_average_deviation__WEBPACK_IMPORTED_MODULE_21__["xtract_average_deviation"]; });

/* harmony import */ var _functions_xtract_skewness_kurtosis__WEBPACK_IMPORTED_MODULE_22__ = __nested_webpack_require_170826__(/*! ./functions/xtract_skewness_kurtosis */ "./modules/functions/xtract_skewness_kurtosis.js");
/* harmony reexport (safe) */ __nested_webpack_require_170826__.d(__webpack_exports__, "xtract_skewness_kurtosis", function() { return _functions_xtract_skewness_kurtosis__WEBPACK_IMPORTED_MODULE_22__["xtract_skewness_kurtosis"]; });

/* harmony import */ var _functions_xtract_skewness__WEBPACK_IMPORTED_MODULE_23__ = __nested_webpack_require_170826__(/*! ./functions/xtract_skewness */ "./modules/functions/xtract_skewness.js");
/* harmony reexport (safe) */ __nested_webpack_require_170826__.d(__webpack_exports__, "xtract_skewness", function() { return _functions_xtract_skewness__WEBPACK_IMPORTED_MODULE_23__["xtract_skewness"]; });

/* harmony import */ var _functions_xtract_kurtosis__WEBPACK_IMPORTED_MODULE_24__ = __nested_webpack_require_170826__(/*! ./functions/xtract_kurtosis */ "./modules/functions/xtract_kurtosis.js");
/* harmony reexport (safe) */ __nested_webpack_require_170826__.d(__webpack_exports__, "xtract_kurtosis", function() { return _functions_xtract_kurtosis__WEBPACK_IMPORTED_MODULE_24__["xtract_kurtosis"]; });

/* harmony import */ var _functions_xtract_spectral_centroid__WEBPACK_IMPORTED_MODULE_25__ = __nested_webpack_require_170826__(/*! ./functions/xtract_spectral_centroid */ "./modules/functions/xtract_spectral_centroid.js");
/* harmony reexport (safe) */ __nested_webpack_require_170826__.d(__webpack_exports__, "xtract_spectral_centroid", function() { return _functions_xtract_spectral_centroid__WEBPACK_IMPORTED_MODULE_25__["xtract_spectral_centroid"]; });

/* harmony import */ var _functions_xtract_spectral_mean__WEBPACK_IMPORTED_MODULE_26__ = __nested_webpack_require_170826__(/*! ./functions/xtract_spectral_mean */ "./modules/functions/xtract_spectral_mean.js");
/* harmony reexport (safe) */ __nested_webpack_require_170826__.d(__webpack_exports__, "xtract_spectral_mean", function() { return _functions_xtract_spectral_mean__WEBPACK_IMPORTED_MODULE_26__["xtract_spectral_mean"]; });

/* harmony import */ var _functions_xtract_spectral_variance__WEBPACK_IMPORTED_MODULE_27__ = __nested_webpack_require_170826__(/*! ./functions/xtract_spectral_variance */ "./modules/functions/xtract_spectral_variance.js");
/* harmony reexport (safe) */ __nested_webpack_require_170826__.d(__webpack_exports__, "xtract_spectral_variance", function() { return _functions_xtract_spectral_variance__WEBPACK_IMPORTED_MODULE_27__["xtract_spectral_variance"]; });

/* harmony import */ var _functions_xtract_spectral_spread__WEBPACK_IMPORTED_MODULE_28__ = __nested_webpack_require_170826__(/*! ./functions/xtract_spectral_spread */ "./modules/functions/xtract_spectral_spread.js");
/* harmony reexport (safe) */ __nested_webpack_require_170826__.d(__webpack_exports__, "xtract_spectral_spread", function() { return _functions_xtract_spectral_spread__WEBPACK_IMPORTED_MODULE_28__["xtract_spectral_spread"]; });

/* harmony import */ var _functions_xtract_spectral_standard_deviation__WEBPACK_IMPORTED_MODULE_29__ = __nested_webpack_require_170826__(/*! ./functions/xtract_spectral_standard_deviation */ "./modules/functions/xtract_spectral_standard_deviation.js");
/* harmony reexport (safe) */ __nested_webpack_require_170826__.d(__webpack_exports__, "xtract_spectral_standard_deviation", function() { return _functions_xtract_spectral_standard_deviation__WEBPACK_IMPORTED_MODULE_29__["xtract_spectral_standard_deviation"]; });

/* harmony import */ var _functions_xtract_spectral_skewness__WEBPACK_IMPORTED_MODULE_30__ = __nested_webpack_require_170826__(/*! ./functions/xtract_spectral_skewness */ "./modules/functions/xtract_spectral_skewness.js");
/* harmony reexport (safe) */ __nested_webpack_require_170826__.d(__webpack_exports__, "xtract_spectral_skewness", function() { return _functions_xtract_spectral_skewness__WEBPACK_IMPORTED_MODULE_30__["xtract_spectral_skewness"]; });

/* harmony import */ var _functions_xtract_spectral_kurtosis__WEBPACK_IMPORTED_MODULE_31__ = __nested_webpack_require_170826__(/*! ./functions/xtract_spectral_kurtosis */ "./modules/functions/xtract_spectral_kurtosis.js");
/* harmony reexport (safe) */ __nested_webpack_require_170826__.d(__webpack_exports__, "xtract_spectral_kurtosis", function() { return _functions_xtract_spectral_kurtosis__WEBPACK_IMPORTED_MODULE_31__["xtract_spectral_kurtosis"]; });

/* harmony import */ var _functions_xtract_irregularity_k__WEBPACK_IMPORTED_MODULE_32__ = __nested_webpack_require_170826__(/*! ./functions/xtract_irregularity_k */ "./modules/functions/xtract_irregularity_k.js");
/* harmony reexport (safe) */ __nested_webpack_require_170826__.d(__webpack_exports__, "xtract_irregularity_k", function() { return _functions_xtract_irregularity_k__WEBPACK_IMPORTED_MODULE_32__["xtract_irregularity_k"]; });

/* harmony import */ var _functions_xtract_irregularity_j__WEBPACK_IMPORTED_MODULE_33__ = __nested_webpack_require_170826__(/*! ./functions/xtract_irregularity_j */ "./modules/functions/xtract_irregularity_j.js");
/* harmony reexport (safe) */ __nested_webpack_require_170826__.d(__webpack_exports__, "xtract_irregularity_j", function() { return _functions_xtract_irregularity_j__WEBPACK_IMPORTED_MODULE_33__["xtract_irregularity_j"]; });

/* harmony import */ var _functions_xtract_tristimulus__WEBPACK_IMPORTED_MODULE_34__ = __nested_webpack_require_170826__(/*! ./functions/xtract_tristimulus */ "./modules/functions/xtract_tristimulus.js");
/* harmony reexport (safe) */ __nested_webpack_require_170826__.d(__webpack_exports__, "xtract_tristimulus", function() { return _functions_xtract_tristimulus__WEBPACK_IMPORTED_MODULE_34__["xtract_tristimulus"]; });

/* harmony reexport (safe) */ __nested_webpack_require_170826__.d(__webpack_exports__, "xtract_tristimulus_1", function() { return _functions_xtract_tristimulus__WEBPACK_IMPORTED_MODULE_34__["xtract_tristimulus_1"]; });

/* harmony reexport (safe) */ __nested_webpack_require_170826__.d(__webpack_exports__, "xtract_tristimulus_2", function() { return _functions_xtract_tristimulus__WEBPACK_IMPORTED_MODULE_34__["xtract_tristimulus_2"]; });

/* harmony reexport (safe) */ __nested_webpack_require_170826__.d(__webpack_exports__, "xtract_tristimulus_3", function() { return _functions_xtract_tristimulus__WEBPACK_IMPORTED_MODULE_34__["xtract_tristimulus_3"]; });

/* harmony import */ var _functions_xtract_smoothness__WEBPACK_IMPORTED_MODULE_35__ = __nested_webpack_require_170826__(/*! ./functions/xtract_smoothness */ "./modules/functions/xtract_smoothness.js");
/* harmony reexport (safe) */ __nested_webpack_require_170826__.d(__webpack_exports__, "xtract_smoothness", function() { return _functions_xtract_smoothness__WEBPACK_IMPORTED_MODULE_35__["xtract_smoothness"]; });

/* harmony import */ var _functions_xtract_zcr__WEBPACK_IMPORTED_MODULE_36__ = __nested_webpack_require_170826__(/*! ./functions/xtract_zcr */ "./modules/functions/xtract_zcr.js");
/* harmony reexport (safe) */ __nested_webpack_require_170826__.d(__webpack_exports__, "xtract_zcr", function() { return _functions_xtract_zcr__WEBPACK_IMPORTED_MODULE_36__["xtract_zcr"]; });

/* harmony import */ var _functions_xtract_rolloff__WEBPACK_IMPORTED_MODULE_37__ = __nested_webpack_require_170826__(/*! ./functions/xtract_rolloff */ "./modules/functions/xtract_rolloff.js");
/* harmony reexport (safe) */ __nested_webpack_require_170826__.d(__webpack_exports__, "xtract_rolloff", function() { return _functions_xtract_rolloff__WEBPACK_IMPORTED_MODULE_37__["xtract_rolloff"]; });

/* harmony import */ var _functions_xtract_loudness__WEBPACK_IMPORTED_MODULE_38__ = __nested_webpack_require_170826__(/*! ./functions/xtract_loudness */ "./modules/functions/xtract_loudness.js");
/* harmony reexport (safe) */ __nested_webpack_require_170826__.d(__webpack_exports__, "xtract_loudness", function() { return _functions_xtract_loudness__WEBPACK_IMPORTED_MODULE_38__["xtract_loudness"]; });

/* harmony import */ var _functions_xtract_flatness__WEBPACK_IMPORTED_MODULE_39__ = __nested_webpack_require_170826__(/*! ./functions/xtract_flatness */ "./modules/functions/xtract_flatness.js");
/* harmony reexport (safe) */ __nested_webpack_require_170826__.d(__webpack_exports__, "xtract_flatness", function() { return _functions_xtract_flatness__WEBPACK_IMPORTED_MODULE_39__["xtract_flatness"]; });

/* harmony import */ var _functions_xtract_flatness_db__WEBPACK_IMPORTED_MODULE_40__ = __nested_webpack_require_170826__(/*! ./functions/xtract_flatness_db */ "./modules/functions/xtract_flatness_db.js");
/* harmony reexport (safe) */ __nested_webpack_require_170826__.d(__webpack_exports__, "xtract_flatness_db", function() { return _functions_xtract_flatness_db__WEBPACK_IMPORTED_MODULE_40__["xtract_flatness_db"]; });

/* harmony import */ var _functions_xtract_tonality__WEBPACK_IMPORTED_MODULE_41__ = __nested_webpack_require_170826__(/*! ./functions/xtract_tonality */ "./modules/functions/xtract_tonality.js");
/* harmony reexport (safe) */ __nested_webpack_require_170826__.d(__webpack_exports__, "xtract_tonality", function() { return _functions_xtract_tonality__WEBPACK_IMPORTED_MODULE_41__["xtract_tonality"]; });

/* harmony import */ var _functions_xtract_crest__WEBPACK_IMPORTED_MODULE_42__ = __nested_webpack_require_170826__(/*! ./functions/xtract_crest */ "./modules/functions/xtract_crest.js");
/* harmony reexport (safe) */ __nested_webpack_require_170826__.d(__webpack_exports__, "xtract_crest", function() { return _functions_xtract_crest__WEBPACK_IMPORTED_MODULE_42__["xtract_crest"]; });

/* harmony import */ var _functions_xtract_noisiness__WEBPACK_IMPORTED_MODULE_43__ = __nested_webpack_require_170826__(/*! ./functions/xtract_noisiness */ "./modules/functions/xtract_noisiness.js");
/* harmony reexport (safe) */ __nested_webpack_require_170826__.d(__webpack_exports__, "xtract_noisiness", function() { return _functions_xtract_noisiness__WEBPACK_IMPORTED_MODULE_43__["xtract_noisiness"]; });

/* harmony import */ var _functions_xtract_rms_amplitude__WEBPACK_IMPORTED_MODULE_44__ = __nested_webpack_require_170826__(/*! ./functions/xtract_rms_amplitude */ "./modules/functions/xtract_rms_amplitude.js");
/* harmony reexport (safe) */ __nested_webpack_require_170826__.d(__webpack_exports__, "xtract_rms_amplitude", function() { return _functions_xtract_rms_amplitude__WEBPACK_IMPORTED_MODULE_44__["xtract_rms_amplitude"]; });

/* harmony import */ var _functions_xtract_spectral_inharmonicity__WEBPACK_IMPORTED_MODULE_45__ = __nested_webpack_require_170826__(/*! ./functions/xtract_spectral_inharmonicity */ "./modules/functions/xtract_spectral_inharmonicity.js");
/* harmony reexport (safe) */ __nested_webpack_require_170826__.d(__webpack_exports__, "xtract_spectral_inharmonicity", function() { return _functions_xtract_spectral_inharmonicity__WEBPACK_IMPORTED_MODULE_45__["xtract_spectral_inharmonicity"]; });

/* harmony import */ var _functions_xtract_power__WEBPACK_IMPORTED_MODULE_46__ = __nested_webpack_require_170826__(/*! ./functions/xtract_power */ "./modules/functions/xtract_power.js");
/* harmony reexport (safe) */ __nested_webpack_require_170826__.d(__webpack_exports__, "xtract_power", function() { return _functions_xtract_power__WEBPACK_IMPORTED_MODULE_46__["xtract_power"]; });

/* harmony import */ var _functions_xtract_odd_even_ratio__WEBPACK_IMPORTED_MODULE_47__ = __nested_webpack_require_170826__(/*! ./functions/xtract_odd_even_ratio */ "./modules/functions/xtract_odd_even_ratio.js");
/* harmony reexport (safe) */ __nested_webpack_require_170826__.d(__webpack_exports__, "xtract_odd_even_ratio", function() { return _functions_xtract_odd_even_ratio__WEBPACK_IMPORTED_MODULE_47__["xtract_odd_even_ratio"]; });

/* harmony import */ var _functions_xtract_sharpness__WEBPACK_IMPORTED_MODULE_48__ = __nested_webpack_require_170826__(/*! ./functions/xtract_sharpness */ "./modules/functions/xtract_sharpness.js");
/* harmony reexport (safe) */ __nested_webpack_require_170826__.d(__webpack_exports__, "xtract_sharpness", function() { return _functions_xtract_sharpness__WEBPACK_IMPORTED_MODULE_48__["xtract_sharpness"]; });

/* harmony import */ var _functions_xtract_spectral_slope__WEBPACK_IMPORTED_MODULE_49__ = __nested_webpack_require_170826__(/*! ./functions/xtract_spectral_slope */ "./modules/functions/xtract_spectral_slope.js");
/* harmony reexport (safe) */ __nested_webpack_require_170826__.d(__webpack_exports__, "xtract_spectral_slope", function() { return _functions_xtract_spectral_slope__WEBPACK_IMPORTED_MODULE_49__["xtract_spectral_slope"]; });

/* harmony import */ var _functions_xtract_lowhigh__WEBPACK_IMPORTED_MODULE_50__ = __nested_webpack_require_170826__(/*! ./functions/xtract_lowhigh */ "./modules/functions/xtract_lowhigh.js");
/* harmony reexport (safe) */ __nested_webpack_require_170826__.d(__webpack_exports__, "xtract_lowhigh", function() { return _functions_xtract_lowhigh__WEBPACK_IMPORTED_MODULE_50__["xtract_lowhigh"]; });

/* harmony import */ var _functions_xtract_lowest_value__WEBPACK_IMPORTED_MODULE_51__ = __nested_webpack_require_170826__(/*! ./functions/xtract_lowest_value */ "./modules/functions/xtract_lowest_value.js");
/* harmony reexport (safe) */ __nested_webpack_require_170826__.d(__webpack_exports__, "xtract_lowest_value", function() { return _functions_xtract_lowest_value__WEBPACK_IMPORTED_MODULE_51__["xtract_lowest_value"]; });

/* harmony import */ var _functions_xtract_highest_value__WEBPACK_IMPORTED_MODULE_52__ = __nested_webpack_require_170826__(/*! ./functions/xtract_highest_value */ "./modules/functions/xtract_highest_value.js");
/* harmony reexport (safe) */ __nested_webpack_require_170826__.d(__webpack_exports__, "xtract_highest_value", function() { return _functions_xtract_highest_value__WEBPACK_IMPORTED_MODULE_52__["xtract_highest_value"]; });

/* harmony import */ var _functions_xtract_sum__WEBPACK_IMPORTED_MODULE_53__ = __nested_webpack_require_170826__(/*! ./functions/xtract_sum */ "./modules/functions/xtract_sum.js");
/* harmony reexport (safe) */ __nested_webpack_require_170826__.d(__webpack_exports__, "xtract_sum", function() { return _functions_xtract_sum__WEBPACK_IMPORTED_MODULE_53__["xtract_sum"]; });

/* harmony import */ var _functions_xtract_nonzero_count__WEBPACK_IMPORTED_MODULE_54__ = __nested_webpack_require_170826__(/*! ./functions/xtract_nonzero_count */ "./modules/functions/xtract_nonzero_count.js");
/* harmony reexport (safe) */ __nested_webpack_require_170826__.d(__webpack_exports__, "xtract_nonzero_count", function() { return _functions_xtract_nonzero_count__WEBPACK_IMPORTED_MODULE_54__["xtract_nonzero_count"]; });

/* harmony import */ var _functions_xtract_hps__WEBPACK_IMPORTED_MODULE_55__ = __nested_webpack_require_170826__(/*! ./functions/xtract_hps */ "./modules/functions/xtract_hps.js");
/* harmony reexport (safe) */ __nested_webpack_require_170826__.d(__webpack_exports__, "xtract_hps", function() { return _functions_xtract_hps__WEBPACK_IMPORTED_MODULE_55__["xtract_hps"]; });

/* harmony import */ var _functions_xtract_f0__WEBPACK_IMPORTED_MODULE_56__ = __nested_webpack_require_170826__(/*! ./functions/xtract_f0 */ "./modules/functions/xtract_f0.js");
/* harmony reexport (safe) */ __nested_webpack_require_170826__.d(__webpack_exports__, "xtract_f0", function() { return _functions_xtract_f0__WEBPACK_IMPORTED_MODULE_56__["xtract_f0"]; });

/* harmony import */ var _functions_xtract_failsafe_f0__WEBPACK_IMPORTED_MODULE_57__ = __nested_webpack_require_170826__(/*! ./functions/xtract_failsafe_f0 */ "./modules/functions/xtract_failsafe_f0.js");
/* harmony reexport (safe) */ __nested_webpack_require_170826__.d(__webpack_exports__, "xtract_failsafe_f0", function() { return _functions_xtract_failsafe_f0__WEBPACK_IMPORTED_MODULE_57__["xtract_failsafe_f0"]; });

/* harmony import */ var _functions_xtract_wavelet_f0__WEBPACK_IMPORTED_MODULE_58__ = __nested_webpack_require_170826__(/*! ./functions/xtract_wavelet_f0 */ "./modules/functions/xtract_wavelet_f0.js");
/* harmony reexport (safe) */ __nested_webpack_require_170826__.d(__webpack_exports__, "xtract_wavelet_f0", function() { return _functions_xtract_wavelet_f0__WEBPACK_IMPORTED_MODULE_58__["xtract_wavelet_f0"]; });

/* harmony import */ var _functions_xtract_midicent__WEBPACK_IMPORTED_MODULE_59__ = __nested_webpack_require_170826__(/*! ./functions/xtract_midicent */ "./modules/functions/xtract_midicent.js");
/* harmony reexport (safe) */ __nested_webpack_require_170826__.d(__webpack_exports__, "xtract_midicent", function() { return _functions_xtract_midicent__WEBPACK_IMPORTED_MODULE_59__["xtract_midicent"]; });

/* harmony import */ var _functions_xtract_spectral_fundamental__WEBPACK_IMPORTED_MODULE_60__ = __nested_webpack_require_170826__(/*! ./functions/xtract_spectral_fundamental */ "./modules/functions/xtract_spectral_fundamental.js");
/* harmony reexport (safe) */ __nested_webpack_require_170826__.d(__webpack_exports__, "xtract_spectral_fundamental", function() { return _functions_xtract_spectral_fundamental__WEBPACK_IMPORTED_MODULE_60__["xtract_spectral_fundamental"]; });

/* harmony import */ var _functions_xtract_energy__WEBPACK_IMPORTED_MODULE_61__ = __nested_webpack_require_170826__(/*! ./functions/xtract_energy */ "./modules/functions/xtract_energy.js");
/* harmony reexport (safe) */ __nested_webpack_require_170826__.d(__webpack_exports__, "xtract_energy", function() { return _functions_xtract_energy__WEBPACK_IMPORTED_MODULE_61__["xtract_energy"]; });

/* harmony import */ var _functions_xtract_spectrum__WEBPACK_IMPORTED_MODULE_62__ = __nested_webpack_require_170826__(/*! ./functions/xtract_spectrum */ "./modules/functions/xtract_spectrum.js");
/* harmony reexport (safe) */ __nested_webpack_require_170826__.d(__webpack_exports__, "xtract_spectrum", function() { return _functions_xtract_spectrum__WEBPACK_IMPORTED_MODULE_62__["xtract_spectrum"]; });

/* harmony import */ var _functions_xtract_complex_spectrum__WEBPACK_IMPORTED_MODULE_63__ = __nested_webpack_require_170826__(/*! ./functions/xtract_complex_spectrum */ "./modules/functions/xtract_complex_spectrum.js");
/* harmony reexport (safe) */ __nested_webpack_require_170826__.d(__webpack_exports__, "xtract_complex_spectrum", function() { return _functions_xtract_complex_spectrum__WEBPACK_IMPORTED_MODULE_63__["xtract_complex_spectrum"]; });

/* harmony import */ var _functions_xtract_mfcc__WEBPACK_IMPORTED_MODULE_64__ = __nested_webpack_require_170826__(/*! ./functions/xtract_mfcc */ "./modules/functions/xtract_mfcc.js");
/* harmony reexport (safe) */ __nested_webpack_require_170826__.d(__webpack_exports__, "xtract_mfcc", function() { return _functions_xtract_mfcc__WEBPACK_IMPORTED_MODULE_64__["xtract_mfcc"]; });

/* harmony import */ var _functions_xtract_dct__WEBPACK_IMPORTED_MODULE_65__ = __nested_webpack_require_170826__(/*! ./functions/xtract_dct */ "./modules/functions/xtract_dct.js");
/* harmony reexport (safe) */ __nested_webpack_require_170826__.d(__webpack_exports__, "xtract_dct", function() { return _functions_xtract_dct__WEBPACK_IMPORTED_MODULE_65__["xtract_dct"]; });

/* harmony import */ var _functions_xtract_dct_2__WEBPACK_IMPORTED_MODULE_66__ = __nested_webpack_require_170826__(/*! ./functions/xtract_dct_2 */ "./modules/functions/xtract_dct_2.js");
/* harmony reexport (safe) */ __nested_webpack_require_170826__.d(__webpack_exports__, "xtract_dct_2", function() { return _functions_xtract_dct_2__WEBPACK_IMPORTED_MODULE_66__["xtract_dct_2"]; });

/* harmony import */ var _functions_xtract_autocorrelation__WEBPACK_IMPORTED_MODULE_67__ = __nested_webpack_require_170826__(/*! ./functions/xtract_autocorrelation */ "./modules/functions/xtract_autocorrelation.js");
/* harmony reexport (safe) */ __nested_webpack_require_170826__.d(__webpack_exports__, "xtract_autocorrelation", function() { return _functions_xtract_autocorrelation__WEBPACK_IMPORTED_MODULE_67__["xtract_autocorrelation"]; });

/* harmony import */ var _functions_xtract_amdf__WEBPACK_IMPORTED_MODULE_68__ = __nested_webpack_require_170826__(/*! ./functions/xtract_amdf */ "./modules/functions/xtract_amdf.js");
/* harmony reexport (safe) */ __nested_webpack_require_170826__.d(__webpack_exports__, "xtract_amdf", function() { return _functions_xtract_amdf__WEBPACK_IMPORTED_MODULE_68__["xtract_amdf"]; });

/* harmony import */ var _functions_xtract_asdf__WEBPACK_IMPORTED_MODULE_69__ = __nested_webpack_require_170826__(/*! ./functions/xtract_asdf */ "./modules/functions/xtract_asdf.js");
/* harmony reexport (safe) */ __nested_webpack_require_170826__.d(__webpack_exports__, "xtract_asdf", function() { return _functions_xtract_asdf__WEBPACK_IMPORTED_MODULE_69__["xtract_asdf"]; });

/* harmony import */ var _functions_xtract_bark_coefficients__WEBPACK_IMPORTED_MODULE_70__ = __nested_webpack_require_170826__(/*! ./functions/xtract_bark_coefficients */ "./modules/functions/xtract_bark_coefficients.js");
/* harmony reexport (safe) */ __nested_webpack_require_170826__.d(__webpack_exports__, "xtract_bark_coefficients", function() { return _functions_xtract_bark_coefficients__WEBPACK_IMPORTED_MODULE_70__["xtract_bark_coefficients"]; });

/* harmony import */ var _functions_xtract_peak_spectrum__WEBPACK_IMPORTED_MODULE_71__ = __nested_webpack_require_170826__(/*! ./functions/xtract_peak_spectrum */ "./modules/functions/xtract_peak_spectrum.js");
/* harmony reexport (safe) */ __nested_webpack_require_170826__.d(__webpack_exports__, "xtract_peak_spectrum", function() { return _functions_xtract_peak_spectrum__WEBPACK_IMPORTED_MODULE_71__["xtract_peak_spectrum"]; });

/* harmony import */ var _functions_xtract_harmonic_spectrum__WEBPACK_IMPORTED_MODULE_72__ = __nested_webpack_require_170826__(/*! ./functions/xtract_harmonic_spectrum */ "./modules/functions/xtract_harmonic_spectrum.js");
/* harmony reexport (safe) */ __nested_webpack_require_170826__.d(__webpack_exports__, "xtract_harmonic_spectrum", function() { return _functions_xtract_harmonic_spectrum__WEBPACK_IMPORTED_MODULE_72__["xtract_harmonic_spectrum"]; });

/* harmony import */ var _functions_xtract_lpc__WEBPACK_IMPORTED_MODULE_73__ = __nested_webpack_require_170826__(/*! ./functions/xtract_lpc */ "./modules/functions/xtract_lpc.js");
/* harmony reexport (safe) */ __nested_webpack_require_170826__.d(__webpack_exports__, "xtract_lpc", function() { return _functions_xtract_lpc__WEBPACK_IMPORTED_MODULE_73__["xtract_lpc"]; });

/* harmony import */ var _functions_xtract_lpcc__WEBPACK_IMPORTED_MODULE_74__ = __nested_webpack_require_170826__(/*! ./functions/xtract_lpcc */ "./modules/functions/xtract_lpcc.js");
/* harmony reexport (safe) */ __nested_webpack_require_170826__.d(__webpack_exports__, "xtract_lpcc", function() { return _functions_xtract_lpcc__WEBPACK_IMPORTED_MODULE_74__["xtract_lpcc"]; });

/* harmony import */ var _functions_xtract_pcp__WEBPACK_IMPORTED_MODULE_75__ = __nested_webpack_require_170826__(/*! ./functions/xtract_pcp */ "./modules/functions/xtract_pcp.js");
/* harmony reexport (safe) */ __nested_webpack_require_170826__.d(__webpack_exports__, "xtract_pcp", function() { return _functions_xtract_pcp__WEBPACK_IMPORTED_MODULE_75__["xtract_pcp"]; });

/* harmony import */ var _functions_xtract_yin__WEBPACK_IMPORTED_MODULE_76__ = __nested_webpack_require_170826__(/*! ./functions/xtract_yin */ "./modules/functions/xtract_yin.js");
/* harmony reexport (safe) */ __nested_webpack_require_170826__.d(__webpack_exports__, "xtract_yin", function() { return _functions_xtract_yin__WEBPACK_IMPORTED_MODULE_76__["xtract_yin"]; });

/* harmony import */ var _functions_xtract_onset__WEBPACK_IMPORTED_MODULE_77__ = __nested_webpack_require_170826__(/*! ./functions/xtract_onset */ "./modules/functions/xtract_onset.js");
/* harmony reexport (safe) */ __nested_webpack_require_170826__.d(__webpack_exports__, "xtract_onset", function() { return _functions_xtract_onset__WEBPACK_IMPORTED_MODULE_77__["xtract_onset"]; });

/* harmony import */ var _functions_xtract_resample__WEBPACK_IMPORTED_MODULE_78__ = __nested_webpack_require_170826__(/*! ./functions/xtract_resample */ "./modules/functions/xtract_resample.js");
/* harmony reexport (safe) */ __nested_webpack_require_170826__.d(__webpack_exports__, "xtract_resample", function() { return _functions_xtract_resample__WEBPACK_IMPORTED_MODULE_78__["xtract_resample"]; });

/* harmony import */ var _functions_xtract_init_dft__WEBPACK_IMPORTED_MODULE_79__ = __nested_webpack_require_170826__(/*! ./functions/xtract_init_dft */ "./modules/functions/xtract_init_dft.js");
/* harmony reexport (safe) */ __nested_webpack_require_170826__.d(__webpack_exports__, "xtract_init_dft", function() { return _functions_xtract_init_dft__WEBPACK_IMPORTED_MODULE_79__["xtract_init_dft"]; });

/* harmony import */ var _functions_xtract_init_dct__WEBPACK_IMPORTED_MODULE_80__ = __nested_webpack_require_170826__(/*! ./functions/xtract_init_dct */ "./modules/functions/xtract_init_dct.js");
/* harmony reexport (safe) */ __nested_webpack_require_170826__.d(__webpack_exports__, "xtract_init_dct", function() { return _functions_xtract_init_dct__WEBPACK_IMPORTED_MODULE_80__["xtract_init_dct"]; });

/* harmony import */ var _functions_xtract_init_mfcc__WEBPACK_IMPORTED_MODULE_81__ = __nested_webpack_require_170826__(/*! ./functions/xtract_init_mfcc */ "./modules/functions/xtract_init_mfcc.js");
/* harmony reexport (safe) */ __nested_webpack_require_170826__.d(__webpack_exports__, "xtract_init_mfcc", function() { return _functions_xtract_init_mfcc__WEBPACK_IMPORTED_MODULE_81__["xtract_init_mfcc"]; });

/* harmony import */ var _functions_xtract_init_wavelet__WEBPACK_IMPORTED_MODULE_82__ = __nested_webpack_require_170826__(/*! ./functions/xtract_init_wavelet */ "./modules/functions/xtract_init_wavelet.js");
/* harmony reexport (safe) */ __nested_webpack_require_170826__.d(__webpack_exports__, "xtract_init_wavelet", function() { return _functions_xtract_init_wavelet__WEBPACK_IMPORTED_MODULE_82__["xtract_init_wavelet"]; });

/* harmony import */ var _functions_xtract_init_pcp__WEBPACK_IMPORTED_MODULE_83__ = __nested_webpack_require_170826__(/*! ./functions/xtract_init_pcp */ "./modules/functions/xtract_init_pcp.js");
/* harmony reexport (safe) */ __nested_webpack_require_170826__.d(__webpack_exports__, "xtract_init_pcp", function() { return _functions_xtract_init_pcp__WEBPACK_IMPORTED_MODULE_83__["xtract_init_pcp"]; });

/* harmony import */ var _functions_xtract_init_bark__WEBPACK_IMPORTED_MODULE_84__ = __nested_webpack_require_170826__(/*! ./functions/xtract_init_bark */ "./modules/functions/xtract_init_bark.js");
/* harmony reexport (safe) */ __nested_webpack_require_170826__.d(__webpack_exports__, "xtract_init_bark", function() { return _functions_xtract_init_bark__WEBPACK_IMPORTED_MODULE_84__["xtract_init_bark"]; });

/* harmony import */ var _functions_xtract_init_chroma__WEBPACK_IMPORTED_MODULE_85__ = __nested_webpack_require_170826__(/*! ./functions/xtract_init_chroma */ "./modules/functions/xtract_init_chroma.js");
/* harmony reexport (safe) */ __nested_webpack_require_170826__.d(__webpack_exports__, "xtract_init_chroma", function() { return _functions_xtract_init_chroma__WEBPACK_IMPORTED_MODULE_85__["xtract_init_chroma"]; });

/* harmony import */ var _functions_xtract_apply_window__WEBPACK_IMPORTED_MODULE_86__ = __nested_webpack_require_170826__(/*! ./functions/xtract_apply_window */ "./modules/functions/xtract_apply_window.js");
/* harmony reexport (safe) */ __nested_webpack_require_170826__.d(__webpack_exports__, "xtract_apply_window", function() { return _functions_xtract_apply_window__WEBPACK_IMPORTED_MODULE_86__["xtract_apply_window"]; });

/* harmony import */ var _functions_xtract_create_window__WEBPACK_IMPORTED_MODULE_87__ = __nested_webpack_require_170826__(/*! ./functions/xtract_create_window */ "./modules/functions/xtract_create_window.js");
/* harmony reexport (safe) */ __nested_webpack_require_170826__.d(__webpack_exports__, "xtract_create_window", function() { return _functions_xtract_create_window__WEBPACK_IMPORTED_MODULE_87__["xtract_create_window"]; });

/* harmony import */ var _functions_xtract_chroma__WEBPACK_IMPORTED_MODULE_88__ = __nested_webpack_require_170826__(/*! ./functions/xtract_chroma */ "./modules/functions/xtract_chroma.js");
/* harmony reexport (safe) */ __nested_webpack_require_170826__.d(__webpack_exports__, "xtract_chroma", function() { return _functions_xtract_chroma__WEBPACK_IMPORTED_MODULE_88__["xtract_chroma"]; });

/* harmony import */ var _objects_HarmonicSpectrumData__WEBPACK_IMPORTED_MODULE_89__ = __nested_webpack_require_170826__(/*! ./objects/HarmonicSpectrumData */ "./modules/objects/HarmonicSpectrumData.js");
/* harmony reexport (safe) */ __nested_webpack_require_170826__.d(__webpack_exports__, "HarmonicSpectrumData", function() { return _objects_HarmonicSpectrumData__WEBPACK_IMPORTED_MODULE_89__["HarmonicSpectrumData"]; });

/* harmony import */ var _objects_PeakSpectrumData__WEBPACK_IMPORTED_MODULE_90__ = __nested_webpack_require_170826__(/*! ./objects/PeakSpectrumData */ "./modules/objects/PeakSpectrumData.js");
/* harmony reexport (safe) */ __nested_webpack_require_170826__.d(__webpack_exports__, "PeakSpectrumData", function() { return _objects_PeakSpectrumData__WEBPACK_IMPORTED_MODULE_90__["PeakSpectrumData"]; });

/* harmony import */ var _objects_SpectrumData__WEBPACK_IMPORTED_MODULE_91__ = __nested_webpack_require_170826__(/*! ./objects/SpectrumData */ "./modules/objects/SpectrumData.js");
/* harmony reexport (safe) */ __nested_webpack_require_170826__.d(__webpack_exports__, "SpectrumData", function() { return _objects_SpectrumData__WEBPACK_IMPORTED_MODULE_91__["SpectrumData"]; });

/* harmony import */ var _objects_TimeData__WEBPACK_IMPORTED_MODULE_92__ = __nested_webpack_require_170826__(/*! ./objects/TimeData */ "./modules/objects/TimeData.js");
/* harmony reexport (safe) */ __nested_webpack_require_170826__.d(__webpack_exports__, "TimeData", function() { return _objects_TimeData__WEBPACK_IMPORTED_MODULE_92__["TimeData"]; });

































































































if (typeof AnalyserNode !== "undefined") {

    AnalyserNode.prototype.timeData = undefined;
    AnalyserNode.prototype.spectrumData = undefined;
    AnalyserNode.prototype.callbackObject = undefined;
    AnalyserNode.prototype.fooGain = undefined;
    AnalyserNode.prototype.getXtractData = function () {
        if (this.timeData === undefined || this.scpectrumData === undefined) {
            this.timeData = new _objects_TimeData__WEBPACK_IMPORTED_MODULE_92__["TimeData"](this.fftSize, this.context.sampleRate);
            this.spectrumData = new _objects_SpectrumData__WEBPACK_IMPORTED_MODULE_91__["SpectrumData"](this.frequencyBinCount, this.context.sampleRate);
        }
        var dst = new Float32Array(this.fftSize);
        var i;
        if (this.getFloatTimeDomainData) {
            this.getFloatTimeDomainData(dst);
        } else {
            var view = new Uint8Array(this.fftSize);
            this.getByteTimeDomainData(view);
            for (i = 0; i < this.fftSize; i++) {
                dst[i] = view[i];
                dst[i] = (dst[i] / 127.5) - 1;
            }
        }
        this.timeData.copyDataFrom(dst);
        this.timeData.result.spectrum = this.spectrumData;
        var LogStore = new Float32Array(this.frequencyBinCount);
        this.getFloatFrequencyData(LogStore);
        for (i = 0; i < this.frequencyBinCount; i++) {
            LogStore[i] = Math.pow(10.0, LogStore[i] / 20);
        }
        this.spectrumData.copyDataFrom(LogStore);
        return this.timeData;
    };
    AnalyserNode.prototype.previousFrame = undefined;
    AnalyserNode.prototype.previousResult = undefined;
    AnalyserNode.prototype.frameCallback = function (func, arg_this) {
        // Perform a callback on each frame
        // The function callback has the arguments (current_frame, previous_frame, previous_result)
        if (this.callbackObject === undefined) {
            this.callbackObject = this.context.createScriptProcessor(this.fftSize, 1, 1);
            this.connect(this.callbackObject);
        }
        var _func = func;
        var _arg_this = arg_this;
        var self = this;
        this.callbackObject.onaudioprocess = function (e) {
            var current_frame = self.getXtractData();
            this.previousResult = _func.call(_arg_this, current_frame, this.previousFrame, this.previousResult);
            this.previousFrame = current_frame;
            var N = e.outputBuffer.length;
            var output = new Float32Array(N);
            var result = this.previousResult;
            if (typeof this.previousResult !== "number") {
                result = 0.0;
            }
            for (var i = 0; i < N; i++) {
                output[i] = result;
            }
            e.outputBuffer.copyToChannel(output, 0, 0);
        };

        // For chrome and other efficiency browsers
        if (!this.fooGain) {
            this.fooGain = this.context.createGain();
            this.fooGain.gain.value = 0;
            this.callbackObject.connect(this.fooGain);
            this.fooGain.connect(this.context.destination);
        }
    };

    AnalyserNode.prototype.clearCallback = function () {
        this.disconnect(this.callbackObject);
        this.callbackObject.onaudioprocess = undefined;
    };

    AnalyserNode.prototype.xtractFrame = function (func, arg_this) {
        // Collect the current frame of data and perform the callback function
        func.call(arg_this, this.getXtractData());
    };
}

if (typeof AudioBuffer !== "undefined") {

    AudioBuffer.prototype.xtract_get_data_frames = function (frame_size, hop_size) {
        if (hop_size === undefined) {
            hop_size = frame_size;
        }
        (function () {
            if (!Object(_functions_xtract_assert_positive_integer__WEBPACK_IMPORTED_MODULE_2__["xtract_assert_positive_integer"])(frame_size)) {
                throw ("xtract_get_data_frames requires the frame_size to be defined, positive integer");
            }
            if (!Object(_functions_xtract_assert_positive_integer__WEBPACK_IMPORTED_MODULE_2__["xtract_assert_positive_integer"])(hop_size)) {
                throw ("xtract_get_data_frames requires the hop_size to be a positive integer");
            }
        })();
        this.frames = [];
        var N = this.length;
        var K = this.xtract_get_number_of_frames(hop_size);
        for (var c = 0; c < this.numberOfChannels; c++) {
            var data = this.getChannelData(c);
            this.frames[c] = [];
            for (var k = 0; k < K; k++) {
                var frame = new _objects_TimeData__WEBPACK_IMPORTED_MODULE_92__["TimeData"](frame_size, this.sampleRate);
                frame.copyDataFrom(data.subarray(hop_size * k, hop_size * k + frame_size));
                this.frames[c].push(frame);
                frame = undefined;
            }
            data = undefined;
        }
        return this.frames;
    };

    AudioBuffer.prototype.xtract_get_number_of_frames = function (hop_size) {
        return Object(_functions_xtract_get_number_of_frames__WEBPACK_IMPORTED_MODULE_12__["xtract_get_number_of_frames"])(this, hop_size);
    };

    AudioBuffer.prototype.xtract_get_frame = function (dst, channel, index, frame_size) {
        (function () {
            if (typeof dst !== "object" || dst.constructor !== Float32Array) {
                throw ("dst must be a Float32Array object equal in length to hop_size");
            }
            if (!Object(_functions_xtract_assert_positive_integer__WEBPACK_IMPORTED_MODULE_2__["xtract_assert_positive_integer"])(channel)) {
                throw ("xtract_get_frame requires the channel to be an integer value");
            }
            if (!Object(_functions_xtract_assert_positive_integer__WEBPACK_IMPORTED_MODULE_2__["xtract_assert_positive_integer"])(index)) {
                throw ("xtract_get_frame requires the index to be an integer value");
            }
            if (!Object(_functions_xtract_assert_positive_integer__WEBPACK_IMPORTED_MODULE_2__["xtract_assert_positive_integer"])(frame_size)) {
                throw ("xtract_get_frame requires the frame_size to be defined, positive integer");
            }
        })();
        if (channel < 0 || channel > this.numberOfChannels) {
            throw ("channel number " + channel + " out of bounds");
        }
        var K = this.xtract_get_number_of_frames(frame_size);
        if (index < 0 || index >= K) {
            throw ("index number " + index + " out of bounds");
        }
        return this.copyFromChannel(dst, channel, frame_size * index);
    };

    AudioBuffer.prototype.xtract_process_frame_data = function () {
        throw ("AudioBuffer::xtract_process_frame_data has been deprecated");
    };
}





/***/ }),

/***/ "./modules/objects/CommonMemory.js":
/*!*****************************************!*\
  !*** ./modules/objects/CommonMemory.js ***!
  \*****************************************/
/*! exports provided: createDctCoefficients, createMfccCoefficients, createBarkCoefficients, createChromaCoefficients */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_215223__) {

"use strict";
__nested_webpack_require_215223__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_215223__.d(__webpack_exports__, "createDctCoefficients", function() { return createDctCoefficients; });
/* harmony export (binding) */ __nested_webpack_require_215223__.d(__webpack_exports__, "createMfccCoefficients", function() { return createMfccCoefficients; });
/* harmony export (binding) */ __nested_webpack_require_215223__.d(__webpack_exports__, "createBarkCoefficients", function() { return createBarkCoefficients; });
/* harmony export (binding) */ __nested_webpack_require_215223__.d(__webpack_exports__, "createChromaCoefficients", function() { return createChromaCoefficients; });
/* harmony import */ var _functions_xtract_init_dct__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_215223__(/*! ../functions/xtract_init_dct */ "./modules/functions/xtract_init_dct.js");
/* harmony import */ var _functions_xtract_init_mfcc__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_215223__(/*! ../functions/xtract_init_mfcc */ "./modules/functions/xtract_init_mfcc.js");
/* harmony import */ var _functions_xtract_init_bark__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_215223__(/*! ../functions/xtract_init_bark */ "./modules/functions/xtract_init_bark.js");
/* harmony import */ var _functions_xtract_init_chroma__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_215223__(/*! ../functions/xtract_init_chroma */ "./modules/functions/xtract_init_chroma.js");
/// <reference path="../../typings/objects/CommonMemory.d.ts" />






function searchMapProperties(map, properties) {
    var match = map.find(function (e) {
        for (var prop in properties) {
            if (e[prop] !== properties[prop]) {
                return false;
            }
        }
        return true;
    });
    return match;
}

var dct_map = {
    parent: undefined,
    store: [],
    createCoefficients: function (N) {
        var match = searchMapProperties(this.store, {
            N: N
        });
        if (!match) {
            match = {
                N: N,
                data: Object(_functions_xtract_init_dct__WEBPACK_IMPORTED_MODULE_0__["xtract_init_dct"])(N)
            };
            this.store.push(match);
        }
        return match.data;
    }
};

var mfcc_map = {
    parent: undefined,
    store: [],
    createCoefficients: function (N, nyquist, style, freq_min, freq_max, freq_bands) {
        var search = {
            N: N,
            nyquist: nyquist,
            style: style,
            freq_min: freq_min,
            freq_max: freq_max,
            freq_bands: freq_bands
        };
        var match = searchMapProperties(this.store, search);
        if (!match) {
            match = search;
            match.data = Object(_functions_xtract_init_mfcc__WEBPACK_IMPORTED_MODULE_1__["xtract_init_mfcc"])(N, nyquist, style, freq_min, freq_max, freq_bands);
            this.store.push(match);
        }
        return match.data;
    }
};

var bark_map = {
    parent: undefined,
    store: [],
    createCoefficients: function (N, sampleRate, numBands) {
        var search = {
            N: N,
            sampleRate: sampleRate,
            numBands: numBands
        };
        var match = searchMapProperties(this.store, search);
        if (!match) {
            match = search;
            match.data = Object(_functions_xtract_init_bark__WEBPACK_IMPORTED_MODULE_2__["xtract_init_bark"])(N, sampleRate, numBands);
            this.store.push(match);
        }
        return match.data;
    }
};


var chroma_map = {
    parent: undefined,
    store: [],
    createCoefficients: function (N, sampleRate, nbins, A440, f_ctr, octwidth) {
        var search = {
            N: N,
            sampleRate: sampleRate,
            nbins: nbins,
            A440: A440,
            f_ctr: f_ctr,
            octwidth: octwidth
        };
        var match = searchMapProperties(this.store, search);
        if (!match) {
            match = search;
            match.data = Object(_functions_xtract_init_chroma__WEBPACK_IMPORTED_MODULE_3__["xtract_init_chroma"])(N, sampleRate, nbins, A440, f_ctr, octwidth);
            this.store.push(match);
        }
        return match.data;
    }
};

function createDctCoefficients(N) {
    return dct_map.createCoefficients(N);
}

function createMfccCoefficients(N, nyquist, style, freq_min, freq_max, freq_bands) {
    return mfcc_map.createCoefficients(N, nyquist, style, freq_min, freq_max, freq_bands);
}

function createBarkCoefficients(N, sampleRate, numBands) {
    if (typeof numBands !== "number" || numBands < 0 || numBands > 26) {
        numBands = 26;
    }
    return bark_map.createCoefficients(N, sampleRate, numBands);
}

function createChromaCoefficients(N, sampleRate, nbins, A440, f_ctr, octwidth) {
    return chroma_map.createCoefficients(N, sampleRate, nbins, A440, f_ctr, octwidth);
}


/***/ }),

/***/ "./modules/objects/DataPrototype.js":
/*!******************************************!*\
  !*** ./modules/objects/DataPrototype.js ***!
  \******************************************/
/*! exports provided: DataPrototype */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_220341__) {

"use strict";
__nested_webpack_require_220341__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_220341__.d(__webpack_exports__, "DataPrototype", function() { return DataPrototype; });
/* harmony import */ var _functions_xtract_array_to_JSON__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_220341__(/*! ../functions/xtract_array_to_JSON */ "./modules/functions/xtract_array_to_JSON.js");
/* harmony import */ var _CommonMemory__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_220341__(/*! ./CommonMemory */ "./modules/objects/CommonMemory.js");
/// <reference path="../../typings/objects/DataPrototype.d.ts" />



function recursiveDelta(a, b) {
    //a and b are objects of Time/Spectrum/PeakS/HarmonicS Data
    //a and b are the .result object
    var param, delta = {};
    for (param in a) {
        if (b[param]) {
            if (typeof a[param] === "number") {
                delta[param] = a[param] - b[param];
            } else {
                delta[param] = deltaObject(a, b, param);
            }
        }
    }
    return delta;
}

function deltaObject(a, b, param) {
    if (a.result && b.result) {
        return recursiveDelta(a[param].result, b[param].result);
    } else if (a.length && b.length) {
        return deltaArray(a[param], b[param]);
    }
    return undefined;
}

function deltaArray(a, b) {
    var d;
    if (a.length === b.length) {
        d = new Float64Array(a.length);
    } else {
        d = [];
    }
    var n = 0;
    while (n < a.length && n < b.length) {
        d[n] = a[n] - b[n];
        n++;
    }
    return d;
}

class DataPrototype {
    constructor(N, sampleRate) {
        this.result = {};
        this._sampleRate = sampleRate;
        this.data = new Float64Array(N);
    }
    get sampleRate() {
        return this._sampleRate;
    }
    set sampleRate(fs) {
        this._sampleRate = fs;
    }
    clearResult() {
        this.result = {};
    }
    getData() {
        return this.data;
    }
    zeroDataRange(start, end) {
        if (this.data.fill) {
            this.data.fill(0, start, end);
        } else {
            for (var n = start; n < end; n++) {
                this.data[n] = 0;
            }
        }
        this.clearResult();
    }
    zeroData () {
        this.zeroDataRange(0, this.data.length);
    }
    copyDataFrom(src, N, offset) {
        if (typeof src !== "object" || src.length === undefined) {
            throw ("copyDataFrom requires src to be an Array or TypedArray");
        }
        if (offset === undefined) {
            offset = 0;
        }
        if (N === undefined) {
            N = Math.min(src.length, this.data.length);
        }
        N = Math.min(N + offset, this.data.length);
        for (var n = 0; n < N; n++) {
            this.data[n + offset] = src[n];
        }
        this.clearResult();
    }

    duplicate() {
        var copy = this.prototype.constructor(this.data.length, this.sampleRate);
        copy.copyDataFrom(this.data);
    }

    toJSON() {
        function lchar(str) {
            var lastchar = str[str.length - 1];
            if (lastchar !== '{' && lastchar !== ',') {
                str = str + ', ';
            }
            return str;
        }

        function getJSONString(self, p, n) {
            var str = "";
            if (typeof p === "number" && isFinite(p)) {
                str = '"' + n + '": ' + p;
            } else if (typeof p === "object") {
                if (p.toJSON) {
                    str = '"' + n + '": ' + p.toJSON(p);
                } else if (p.length) {
                    str = '"' + n + '": ' + Object(_functions_xtract_array_to_JSON__WEBPACK_IMPORTED_MODULE_0__["xtract_array_to_JSON"])(p);
                } else {
                    str = '"' + n + '": ' + self.toJSON(p);
                }
            } else {
                str = '"' + n + '": "' + p.toString() + '"';
            }
            return str;
        }
        var json = '{';
        for (var property in this.result) {
            if (this.result.hasOwnProperty(property)) {
                json = lchar(json);
                json = json + getJSONString(this, this.result[property], property);
            }
        }
        return json + '}';
    }

    computeDelta(compare) {
        this.result.delta = recursiveDelta(this.result, compare.result);
        return this.result.delta;
    }

    computeDeltaDelta(compare) {
        if (!compare.result.delta || !this.result.delta) {
            throw ("Cannot compute delta-delta without both objects having deltas");
        }
        this.result.delta.delta = recursiveDelta(this.result.delta, compare.result.delta);
        return this.result.delta.delta;
    }

    createDctCoefficients(N) {
        return Object(_CommonMemory__WEBPACK_IMPORTED_MODULE_1__["createDctCoefficients"])(Number(N));
    }

    createMfccCoefficients(N, nyquist, style, freq_min, freq_max, freq_bands) {
        N = Number(N);
        nyquist = Number(nyquist);
        freq_min = Number(freq_min);
        freq_max = Number(freq_max);
        freq_bands = Number(freq_bands);
        return Object(_CommonMemory__WEBPACK_IMPORTED_MODULE_1__["createMfccCoefficients"])(N, nyquist, style, freq_min, freq_max, freq_bands);
    }

    createBarkCoefficients(N, sampleRate, numBands) {
        N = Number(N);
        sampleRate = Number(sampleRate);
        numBands = Number(numBands);
        return Object(_CommonMemory__WEBPACK_IMPORTED_MODULE_1__["createBarkCoefficients"])(N, sampleRate, numBands);
    }

    createChromaCoefficients(N, sampleRate, nbins, A440, f_ctr, octwidth) {
        N = Number(N);
        sampleRate = Number(sampleRate);
        nbins = Number(nbins);
        A440 = Number(A440);
        f_ctr = Number(f_ctr);
        octwidth = Number(octwidth);
        return Object(_CommonMemory__WEBPACK_IMPORTED_MODULE_1__["createChromaCoefficients"])(N, sampleRate, nbins, A440, f_ctr, octwidth);
    }
}


/***/ }),

/***/ "./modules/objects/HarmonicSpectrumData.js":
/*!*************************************************!*\
  !*** ./modules/objects/HarmonicSpectrumData.js ***!
  \*************************************************/
/*! exports provided: HarmonicSpectrumData */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_226612__) {

"use strict";
__nested_webpack_require_226612__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_226612__.d(__webpack_exports__, "HarmonicSpectrumData", function() { return HarmonicSpectrumData; });
/* harmony import */ var _PeakSpectrumData__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_226612__(/*! ./PeakSpectrumData */ "./modules/objects/PeakSpectrumData.js");
/* harmony import */ var _functions_xtract_odd_even_ratio__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_226612__(/*! ../functions/xtract_odd_even_ratio */ "./modules/functions/xtract_odd_even_ratio.js");
/* harmony import */ var _functions_xtract_noisiness__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_226612__(/*! ../functions/xtract_noisiness */ "./modules/functions/xtract_noisiness.js");
/// <reference path="../../typings/objects/PeakSpectrumData.d.ts" />




class HarmonicSpectrumData extends _PeakSpectrumData__WEBPACK_IMPORTED_MODULE_0__["PeakSpectrumData"] {
    odd_even_ratio () {
        if (this.result.odd_even_ratio === undefined) {
            if (this.f0 === undefined) {
                this.spectral_fundamental(this.data, this.sampleRate);
            }
            this.result.odd_even_ratio = Object(_functions_xtract_odd_even_ratio__WEBPACK_IMPORTED_MODULE_1__["xtract_odd_even_ratio"])(this.data, this.f0);
        }
        return this.result.odd_even_ratio;
    }

    noisiness() {
        if (parent.constructor !== _PeakSpectrumData__WEBPACK_IMPORTED_MODULE_0__["PeakSpectrumData"]) {
            this.result.noisiness = null;
        } else {
            this.result.noisiness = Object(_functions_xtract_noisiness__WEBPACK_IMPORTED_MODULE_2__["xtract_noisiness"])(this.nonzero_count(), parent.nonzero_count());
        }
        return this.result.noisiness;
    }
}

HarmonicSpectrumData.prototype.features = _PeakSpectrumData__WEBPACK_IMPORTED_MODULE_0__["PeakSpectrumData"].prototype.features.concat([
    {
        name: "Odd Even Ration",
        function: "odd_even_ratio",
        sub_features: [],
        parameters: [],
        returns: "number"
    },
    {
        name: "Noisiness",
        function: "noisiness",
        sub_features: [],
        parameters: [],
        returns: "number"
    }
]);


/***/ }),

/***/ "./modules/objects/PeakSpectrumData.js":
/*!*********************************************!*\
  !*** ./modules/objects/PeakSpectrumData.js ***!
  \*********************************************/
/*! exports provided: PeakSpectrumData */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_229136__) {

"use strict";
__nested_webpack_require_229136__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_229136__.d(__webpack_exports__, "PeakSpectrumData", function() { return PeakSpectrumData; });
/* harmony import */ var _SpectrumData__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_229136__(/*! ./SpectrumData */ "./modules/objects/SpectrumData.js");
/* harmony import */ var _HarmonicSpectrumData__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_229136__(/*! ./HarmonicSpectrumData */ "./modules/objects/HarmonicSpectrumData.js");
/* harmony import */ var _functions_xtract_spectral_inharmonicity__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_229136__(/*! ../functions/xtract_spectral_inharmonicity */ "./modules/functions/xtract_spectral_inharmonicity.js");
/* harmony import */ var _functions_xtract_harmonic_spectrum__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_229136__(/*! ../functions/xtract_harmonic_spectrum */ "./modules/functions/xtract_harmonic_spectrum.js");
/// <reference path="../../typings/objects/PeakSpectrumData.d.ts" />






class PeakSpectrumData extends _SpectrumData__WEBPACK_IMPORTED_MODULE_0__["SpectrumData"] {
    spectral_inharmonicity() {
        if (this.result.spectral_inharmonicity === undefined) {
            this.result.spectral_inharmonicity = Object(_functions_xtract_spectral_inharmonicity__WEBPACK_IMPORTED_MODULE_2__["xtract_spectral_inharmonicity"])(this.data, this.sampleRate);
        }
        return this.result.spectral_inharmonicity;
    }

    harmonic_spectrum(threshold) {
        if (this.result.harmonic_spectrum === undefined) {
            if (this.f0 === undefined) {
                this.spectral_fundamental(this.data, this.sampleRate);
            }
            this.result.harmonic_spectrum = new _HarmonicSpectrumData__WEBPACK_IMPORTED_MODULE_1__["HarmonicSpectrumData"](this.length, this.sampleRate, this);
            var hs = Object(_functions_xtract_harmonic_spectrum__WEBPACK_IMPORTED_MODULE_3__["xtract_harmonic_spectrum"])(this.data, this.f0, threshold);
            this.result.harmonic_spectrum.copyDataFrom(hs.subarray(0, this.length));
        }
        return this.result.harmonic_spectrum;
    }
}

PeakSpectrumData.prototype.features = _SpectrumData__WEBPACK_IMPORTED_MODULE_0__["SpectrumData"].prototype.features.concat([
    {
        name: "Spectral Inharmonicity",
        function: "spectral_inharmonicity",
        sub_features: ["f0"],
        parameters: [],
        returns: "number"
}, {
        name: "Harmonic Spectrum",
        function: "harmonic_spectrum",
        sub_features: [],
        parameters: [{
            name: "Threshold",
            unit: "",
            type: "number",
            minimum: 0,
            maximum: 100,
            default: 30
    }],
        returns: "HarmonicSpectrumData"
}]);


/***/ }),

/***/ "./modules/objects/SpectrumData.js":
/*!*****************************************!*\
  !*** ./modules/objects/SpectrumData.js ***!
  \*****************************************/
/*! exports provided: SpectrumData */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_232224__) {

"use strict";
__nested_webpack_require_232224__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_232224__.d(__webpack_exports__, "SpectrumData", function() { return SpectrumData; });
/* harmony import */ var _DataPrototype__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_232224__(/*! ./DataPrototype */ "./modules/objects/DataPrototype.js");
/* harmony import */ var _PeakSpectrumData__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_232224__(/*! ./PeakSpectrumData */ "./modules/objects/PeakSpectrumData.js");
/* harmony import */ var _functions_xtract_init_bark__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_232224__(/*! ../functions/xtract_init_bark */ "./modules/functions/xtract_init_bark.js");
/* harmony import */ var _functions_xtract_array_min__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_232224__(/*! ../functions/xtract_array_min */ "./modules/functions/xtract_array_min.js");
/* harmony import */ var _functions_xtract_array_max__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_232224__(/*! ../functions/xtract_array_max */ "./modules/functions/xtract_array_max.js");
/* harmony import */ var _functions_xtract_array_sum__WEBPACK_IMPORTED_MODULE_5__ = __nested_webpack_require_232224__(/*! ../functions/xtract_array_sum */ "./modules/functions/xtract_array_sum.js");
/* harmony import */ var _functions_xtract_spectral_centroid__WEBPACK_IMPORTED_MODULE_6__ = __nested_webpack_require_232224__(/*! ../functions/xtract_spectral_centroid */ "./modules/functions/xtract_spectral_centroid.js");
/* harmony import */ var _functions_xtract_spectral_mean__WEBPACK_IMPORTED_MODULE_7__ = __nested_webpack_require_232224__(/*! ../functions/xtract_spectral_mean */ "./modules/functions/xtract_spectral_mean.js");
/* harmony import */ var _functions_xtract_spectral_variance__WEBPACK_IMPORTED_MODULE_8__ = __nested_webpack_require_232224__(/*! ../functions/xtract_spectral_variance */ "./modules/functions/xtract_spectral_variance.js");
/* harmony import */ var _functions_xtract_spectral_spread__WEBPACK_IMPORTED_MODULE_9__ = __nested_webpack_require_232224__(/*! ../functions/xtract_spectral_spread */ "./modules/functions/xtract_spectral_spread.js");
/* harmony import */ var _functions_xtract_spectral_standard_deviation__WEBPACK_IMPORTED_MODULE_10__ = __nested_webpack_require_232224__(/*! ../functions/xtract_spectral_standard_deviation */ "./modules/functions/xtract_spectral_standard_deviation.js");
/* harmony import */ var _functions_xtract_spectral_skewness__WEBPACK_IMPORTED_MODULE_11__ = __nested_webpack_require_232224__(/*! ../functions/xtract_spectral_skewness */ "./modules/functions/xtract_spectral_skewness.js");
/* harmony import */ var _functions_xtract_spectral_kurtosis__WEBPACK_IMPORTED_MODULE_12__ = __nested_webpack_require_232224__(/*! ../functions/xtract_spectral_kurtosis */ "./modules/functions/xtract_spectral_kurtosis.js");
/* harmony import */ var _functions_xtract_irregularity_k__WEBPACK_IMPORTED_MODULE_13__ = __nested_webpack_require_232224__(/*! ../functions/xtract_irregularity_k */ "./modules/functions/xtract_irregularity_k.js");
/* harmony import */ var _functions_xtract_irregularity_j__WEBPACK_IMPORTED_MODULE_14__ = __nested_webpack_require_232224__(/*! ../functions/xtract_irregularity_j */ "./modules/functions/xtract_irregularity_j.js");
/* harmony import */ var _functions_xtract_tristimulus__WEBPACK_IMPORTED_MODULE_15__ = __nested_webpack_require_232224__(/*! ../functions/xtract_tristimulus */ "./modules/functions/xtract_tristimulus.js");
/* harmony import */ var _functions_xtract_smoothness__WEBPACK_IMPORTED_MODULE_16__ = __nested_webpack_require_232224__(/*! ../functions/xtract_smoothness */ "./modules/functions/xtract_smoothness.js");
/* harmony import */ var _functions_xtract_rolloff__WEBPACK_IMPORTED_MODULE_17__ = __nested_webpack_require_232224__(/*! ../functions/xtract_rolloff */ "./modules/functions/xtract_rolloff.js");
/* harmony import */ var _functions_xtract_loudness__WEBPACK_IMPORTED_MODULE_18__ = __nested_webpack_require_232224__(/*! ../functions/xtract_loudness */ "./modules/functions/xtract_loudness.js");
/* harmony import */ var _functions_xtract_sharpness__WEBPACK_IMPORTED_MODULE_19__ = __nested_webpack_require_232224__(/*! ../functions/xtract_sharpness */ "./modules/functions/xtract_sharpness.js");
/* harmony import */ var _functions_xtract_flatness__WEBPACK_IMPORTED_MODULE_20__ = __nested_webpack_require_232224__(/*! ../functions/xtract_flatness */ "./modules/functions/xtract_flatness.js");
/* harmony import */ var _functions_xtract_flatness_db__WEBPACK_IMPORTED_MODULE_21__ = __nested_webpack_require_232224__(/*! ../functions/xtract_flatness_db */ "./modules/functions/xtract_flatness_db.js");
/* harmony import */ var _functions_xtract_tonality__WEBPACK_IMPORTED_MODULE_22__ = __nested_webpack_require_232224__(/*! ../functions/xtract_tonality */ "./modules/functions/xtract_tonality.js");
/* harmony import */ var _functions_xtract_crest__WEBPACK_IMPORTED_MODULE_23__ = __nested_webpack_require_232224__(/*! ../functions/xtract_crest */ "./modules/functions/xtract_crest.js");
/* harmony import */ var _functions_xtract_spectral_slope__WEBPACK_IMPORTED_MODULE_24__ = __nested_webpack_require_232224__(/*! ../functions/xtract_spectral_slope */ "./modules/functions/xtract_spectral_slope.js");
/* harmony import */ var _functions_xtract_spectral_fundamental__WEBPACK_IMPORTED_MODULE_25__ = __nested_webpack_require_232224__(/*! ../functions/xtract_spectral_fundamental */ "./modules/functions/xtract_spectral_fundamental.js");
/* harmony import */ var _functions_xtract_nonzero_count__WEBPACK_IMPORTED_MODULE_26__ = __nested_webpack_require_232224__(/*! ../functions/xtract_nonzero_count */ "./modules/functions/xtract_nonzero_count.js");
/* harmony import */ var _functions_xtract_hps__WEBPACK_IMPORTED_MODULE_27__ = __nested_webpack_require_232224__(/*! ../functions/xtract_hps */ "./modules/functions/xtract_hps.js");
/* harmony import */ var _functions_xtract_mfcc__WEBPACK_IMPORTED_MODULE_28__ = __nested_webpack_require_232224__(/*! ../functions/xtract_mfcc */ "./modules/functions/xtract_mfcc.js");
/* harmony import */ var _functions_xtract_dct_2__WEBPACK_IMPORTED_MODULE_29__ = __nested_webpack_require_232224__(/*! ../functions/xtract_dct_2 */ "./modules/functions/xtract_dct_2.js");
/* harmony import */ var _functions_xtract_bark_coefficients__WEBPACK_IMPORTED_MODULE_30__ = __nested_webpack_require_232224__(/*! ../functions/xtract_bark_coefficients */ "./modules/functions/xtract_bark_coefficients.js");
/* harmony import */ var _functions_xtract_chroma__WEBPACK_IMPORTED_MODULE_31__ = __nested_webpack_require_232224__(/*! ../functions/xtract_chroma */ "./modules/functions/xtract_chroma.js");
/* harmony import */ var _functions_xtract_peak_spectrum__WEBPACK_IMPORTED_MODULE_32__ = __nested_webpack_require_232224__(/*! ../functions/xtract_peak_spectrum */ "./modules/functions/xtract_peak_spectrum.js");
/// <reference path="../../typings/objects/SpectrumData.d.ts" />


































class SpectrumData extends _DataPrototype__WEBPACK_IMPORTED_MODULE_0__["DataPrototype"] {
    constructor(N, sampleRate, parent) {
        if (N === undefined || N <= 0) {
            throw ("SpectrumData constructor requires N to be a defined, whole number");
        }
        if (sampleRate === undefined) {
            sampleRate = Math.PI;
        }
        super(2*N, sampleRate);
        this._amps = this.data.subarray(0, N);
        this._freqs = this.data.subarray(N, 2 * N);
        this._length = N;
        this._f0 = undefined;
        this._mfcc = undefined;
        this._bark = undefined;
        this._dct = undefined;
        this._chroma = undefined;

        this.computeFrequencies();
    }
    computeFrequencies () {
        for (let i = 0; i < this._length; i++) {
            this._freqs[i] = (i / this._length) * (this.sampleRate / 2);
        }
    }
    get sampleRate() {
        return this._sampleRate;
    }
    set sampleRate(fs) {
        if (this._sampleRate === Math.PI) {
            this._sampleRate = fs;
            this.computeFrequencies();
            if (this._bark !== undefined) {
                this._bark = Object(_functions_xtract_init_bark__WEBPACK_IMPORTED_MODULE_2__["xtract_init_bark"])(this._length, this._sampleRate );
            }

        } else {
            throw ("Cannot set one-time variable");
        }
    }

    get f0() {
        return this._f0;
    }

    set f0(f0) {
        if (typeof f0 === "number") {
            this._f0 = f0;
        }
    }

    get length() {
        return this._length;
    }

    init_mfcc(num_bands, freq_min, freq_max, style) {
        this._mfcc = this.createMfccCoefficients(this._length, this.sampleRate * 0.5, style, freq_min, freq_max, num_bands);
        this.result.mfcc = undefined;
        return this._mfcc;
    }

    init_bark(numBands) {
        if (typeof numBands !== "number" || numBands < 0 || numBands > 26) {
            numBands = 26;
        }
        this._bark = this.createBarkCoefficients(this._length, this._Fs, numBands);
        return this._bark;
    }

    init_chroma(nbins, A440, f_ctr, octwidth) {
        if (typeof nbins !== "number" || nbins <= 1) {
            nbins = 12;
        }
        if (typeof A440 !== "number" || A440 <= 27.5) {
               A440 = 440;
        }
        if (typeof f_ctr !== "number") {
               f_ctr = 1000;
        }
        if (typeof octwidth !== "number") {
               octwidth = 1;
        }
        this._chroma = this.createChromaCoefficients(this._length, this._Fs, nbins, A440, f_ctr, octwidth);
        this.result.chroma = undefined;
        return this._chroma;
    }

    minimum() {
        if (this.result.minimum === undefined) {
            this.result.minimum = Object(_functions_xtract_array_min__WEBPACK_IMPORTED_MODULE_3__["xtract_array_min"])(this._amps);
        }
        return this.result.minimum;
    }

    maximum() {
        if (this.result.maximum === undefined) {
            this.result.maximum = Object(_functions_xtract_array_max__WEBPACK_IMPORTED_MODULE_4__["xtract_array_max"])(this._amps);
        }
        return this.result.maximum;
    }

    sum() {
        if (this.result.sum === undefined) {
            this.result.sum = Object(_functions_xtract_array_sum__WEBPACK_IMPORTED_MODULE_5__["xtract_array_sum"])(this._amps);
        }
        return this.result.sum;
    }

    spectral_centroid() {
        if (this.result.spectral_centroid === undefined) {
            this.result.spectral_centroid = Object(_functions_xtract_spectral_centroid__WEBPACK_IMPORTED_MODULE_6__["xtract_spectral_centroid"])(this.data);
        }
        return this.result.spectral_centroid;
    }

    spectral_mean () {
        if (this.result.spectral_mean === undefined) {
            this.result.spectral_mean = Object(_functions_xtract_spectral_mean__WEBPACK_IMPORTED_MODULE_7__["xtract_spectral_mean"])(this.data);
        }
        return this.result.spectral_mean;
    }

    spectral_variance () {
        if (this.result.spectral_variance === undefined) {
            this.result.spectral_variance = Object(_functions_xtract_spectral_variance__WEBPACK_IMPORTED_MODULE_8__["xtract_spectral_variance"])(this.data, this.spectral_centroid());
        }
        return this.result.spectral_variance;
    }

    spectral_spread() {
        if (this.result.spectral_spread === undefined) {
            this.result.spectral_spread = Object(_functions_xtract_spectral_spread__WEBPACK_IMPORTED_MODULE_9__["xtract_spectral_spread"])(this.data, this.spectral_centroid());
        }
        return this.result.spectral_spread;
    }

    spectral_standard_deviation() {
        if (this.result.spectral_standard_deviation === undefined) {
            this.result.spectral_standard_deviation = Object(_functions_xtract_spectral_standard_deviation__WEBPACK_IMPORTED_MODULE_10__["xtract_spectral_standard_deviation"])(this.data, this.spectral_variance());
        }
        return this.result.spectral_standard_deviation;
    }

    spectral_skewness() {
        if (this.result.spectral_skewness === undefined) {
            this.result.spectral_skewness = Object(_functions_xtract_spectral_skewness__WEBPACK_IMPORTED_MODULE_11__["xtract_spectral_skewness"])(this.data, this.spectral_centroid(), this.spectral_standard_deviation());
        }
        return this.result.spectral_skewness;
    }

    spectral_kurtosis() {
        if (this.result.spectral_kurtosis === undefined) {
            this.result.spectral_kurtosis = Object(_functions_xtract_spectral_kurtosis__WEBPACK_IMPORTED_MODULE_12__["xtract_spectral_kurtosis"])(this.data, this.spectral_centroid(), this.spectral_standard_deviation());
        }
        return this.result.spectral_kurtosis;
    }

    irregularity_k () {
        if (this.result.irregularity_k === undefined) {
            this.result.irregularity_k = Object(_functions_xtract_irregularity_k__WEBPACK_IMPORTED_MODULE_13__["xtract_irregularity_k"])(this.data);
        }
        return this.result.irregularity_k;
    }

    irregularity_j () {
        if (this.result.irregularity_j === undefined) {
            this.result.irregularity_j = Object(_functions_xtract_irregularity_j__WEBPACK_IMPORTED_MODULE_14__["xtract_irregularity_j"])(this.data);
        }
        return this.result.irregularity_j;
    }

    tristimulus_1 () {
        if (this._f0 === undefined) {
            this.spectral_fundamental();
        }
        if (this.result.tristimulus_1 === undefined) {
            this.result.tristimulus_1 = Object(_functions_xtract_tristimulus__WEBPACK_IMPORTED_MODULE_15__["xtract_tristimulus_1"])(this.data, this._f0);
        }
        return this.result.tristimulus_1;
    }
    tristimulus_2 () {
        if (this._f0 === undefined) {
            this.spectral_fundamental();
        }
        if (this.result.tristimulus_2 === undefined) {
            this.result.tristimulus_2 = Object(_functions_xtract_tristimulus__WEBPACK_IMPORTED_MODULE_15__["xtract_tristimulus_2"])(this.data, this._f0);
        }
        return this.result.tristimulus_2;
    }
    tristimulus_3 () {
        if (this._f0 === undefined) {
            this.spectral_fundamental();
        }
        if (this.result.tristimulus_3 === undefined) {
            this.result.tristimulus_3 = Object(_functions_xtract_tristimulus__WEBPACK_IMPORTED_MODULE_15__["xtract_tristimulus_3"])(this.data, this._f0);
        }
        return this.result.tristimulus_3;
    }

    smoothness() {
        if (this.result.smoothness === undefined) {
            this.result.smoothness = Object(_functions_xtract_smoothness__WEBPACK_IMPORTED_MODULE_16__["xtract_smoothness"])(this.data);
        }
        return this.result.smoothness;
    }

    rolloff(threshold) {
        if (this.result.rolloff === undefined) {
            this.result.rolloff = Object(_functions_xtract_rolloff__WEBPACK_IMPORTED_MODULE_17__["xtract_rolloff"])(this.data, this.sampleRate, threshold);
        }
        return this.result.rolloff;
    }

    loudness() {
        if (this.result.loudness === undefined) {
            this.result.loudness = Object(_functions_xtract_loudness__WEBPACK_IMPORTED_MODULE_18__["xtract_loudness"])(this.bark_coefficients());
        }
        return this.result.loudness;
    }

    sharpness () {
        if (this.result.sharpness === undefined) {
            this.result.sharpness = Object(_functions_xtract_sharpness__WEBPACK_IMPORTED_MODULE_19__["xtract_sharpness"])(this.bark_coefficients());
        }
        return this.result.sharpness;
    }

    flatness () {
        if (this.result.flatness === undefined) {
            this.result.flatness = Object(_functions_xtract_flatness__WEBPACK_IMPORTED_MODULE_20__["xtract_flatness"])(this.data);
        }
        return this.result.flatness;
    }

    flatness_db () {
        if (this.result.flatness_db === undefined) {
            this.result.flatness_db = Object(_functions_xtract_flatness_db__WEBPACK_IMPORTED_MODULE_21__["xtract_flatness_db"])(this.data, this.flatness());
        }
        return this.result.flatness_db;
    }

    tonality() {
        if (this.result.tonality === undefined) {
            this.result.tonality = Object(_functions_xtract_tonality__WEBPACK_IMPORTED_MODULE_22__["xtract_tonality"])(this.data, this.flatness_db());
        }
        return this.result.tonality;
    }

    spectral_crest_factor () {
        if (this.result.spectral_crest_factor === undefined) {
            this.result.spectral_crest_factor = Object(_functions_xtract_crest__WEBPACK_IMPORTED_MODULE_23__["xtract_crest"])(this._amps, this.maximum(), this.spectral_mean());
        }
        return this.result.spectral_crest_factor;
    }

    spectral_slope() {
        if (this.result.spectral_slope === undefined) {
            this.result.spectral_slope = Object(_functions_xtract_spectral_slope__WEBPACK_IMPORTED_MODULE_24__["xtract_spectral_slope"])(this.data);
        }
        return this.result.spectral_slope;
    }

    spectral_fundamental() {
        if (this.result.spectral_fundamental === undefined) {
            this.result.spectral_fundamental = Object(_functions_xtract_spectral_fundamental__WEBPACK_IMPORTED_MODULE_25__["xtract_spectral_fundamental"])(this.data, _Fs);
            this.f0 = this.result.spectral_fundamental;
        }
        return this.result.spectral_fundamental;
    }

    nonzero_count () {
        if (this.result.nonzero_count === undefined) {
            this.result.nonzero_count = Object(_functions_xtract_nonzero_count__WEBPACK_IMPORTED_MODULE_26__["xtract_nonzero_count"])(_amps);
        }
        return this.result.nonzero_count;
    }

    hps () {
        if (this.result.hps === undefined) {
            this.result.hps = Object(_functions_xtract_hps__WEBPACK_IMPORTED_MODULE_27__["xtract_hps"])(this.data);
        }
        return this.result.hps;
    }

    mfcc(num_bands, freq_min, freq_max) {
        if (this._mfcc === undefined) {
            if (freq_min === undefined) {
                throw ("Run init_mfcc(num_bands, freq_min, freq_max, style) first");
            } else {
                this._mfcc = this.init_mfcc(num_bands, freq_min, freq_max);
            }
        }
        if (this.result.mfcc === undefined) {
            this.result.mfcc = Object(_functions_xtract_mfcc__WEBPACK_IMPORTED_MODULE_28__["xtract_mfcc"])(this.data, this._mfcc);
        }
        return this.result.mfcc;
    }

    dct () {
        if (this._dct === undefined) {
            this._dct = this.createDctCoefficients(this._length);
        }
        if (this.result.dct === undefined) {
            this.result.dct = Object(_functions_xtract_dct_2__WEBPACK_IMPORTED_MODULE_29__["xtract_dct_2"])(this._amps,this._dct);
        }
        return this.result.dct;
    }

    bark_coefficients(num_bands) {
        if (this.result.bark_coefficients === undefined) {
            if (this._bark === undefined) {
                this._bark = this.init_bark(num_bands);
            }
            this.result.bark_coefficients = Object(_functions_xtract_bark_coefficients__WEBPACK_IMPORTED_MODULE_30__["xtract_bark_coefficients"])(this.data, this._bark);
        }
        return this.result.bark_coefficients;
    }

    chroma(nbins, A440, f_ctr, octwidth) {
        if(this.result.chroma === undefined) {
            if (this._chroma === undefined) {
                this._chroma = this.init_chroma(nbins, A440, f_ctr, octwidth);
            }
            this.result.chroma = Object(_functions_xtract_chroma__WEBPACK_IMPORTED_MODULE_31__["xtract_chroma"])(this.data, this._chroma);
        }
        return this.result.chroma;
    }

    peak_spectrum(threshold) {
        if (this.result.peak_spectrum === undefined) {
            this.result.peak_spectrum = new _PeakSpectrumData__WEBPACK_IMPORTED_MODULE_1__["PeakSpectrumData"](this._length, this.sampleRate, this);
            var ps = Object(_functions_xtract_peak_spectrum__WEBPACK_IMPORTED_MODULE_32__["xtract_peak_spectrum"])(this.data, this.sampleRate / this._length, threshold);
            this.result.peak_spectrum.copyDataFrom(ps.subarray(0, this._length));
        }
        return this.result.peak_spectrum;
    }
}

SpectrumData.prototype.features = [
    {
        name: "Minimum",
        function: "minimum",
        sub_features: [],
        parameters: [],
        returns: "number"
}, {
        name: "Maximum",
        function: "maximum",
        sub_features: [],
        parameters: [],
        returns: "number"
}, {
        name: "Sum",
        function: "sum",
        sub_features: [],
        parameters: [],
        returns: "number"
}, {
        name: "Spectral Centroid",
        function: "spectral_centroid",
        sub_features: [],
        parameters: [],
        returns: "number"
}, {
        name: "Spectral Mean",
        function: "spectral_mean",
        sub_features: [],
        parameters: [],
        returns: "number"
}, {
        name: "Spectral Variance",
        function: "spectral_variance",
        sub_features: ["spectral_mean"],
        parameters: [],
        returns: "number"
}, {
        name: "Spectral Spread",
        function: "spectral_spread",
        sub_features: ["spectral_centroid"],
        parameters: [],
        returns: "number"
}, {
        name: "Spectral Standard Deviation",
        function: "spectral_standard_deviation",
        sub_features: ["spectral_variance"],
        parameters: [],
        returns: "number"
}, {
        name: "Spectral Skewness",
        function: "spectral_skewness",
        sub_features: ["spectral_mean", "spectral_standard_deviation"],
        parameters: [],
        returns: "number"
}, {
        name: "Spectral Kurtosis",
        function: "spectral_kurtosis",
        sub_features: ["spectral_mean", "spectral_standard_deviation"],
        parameters: [],
        returns: "number"
}, {
        name: "Irregularity K",
        function: "irregularity_k",
        sub_features: [],
        parameters: [],
        returns: "number"
}, {
        name: "Irregularity J",
        function: "irregularity_j",
        sub_features: [],
        parameters: [],
        returns: "number"
}, {
        name: "Tristimulus 1",
        function: "tristimulus_1",
        sub_features: ["spectral_fundamental"],
        parameters: [],
        returns: "number"
}, {
        name: "Tristimulus 2",
        function: "tristimulus_2",
        sub_features: ["spectral_fundamental"],
        parameters: [],
        returns: "number"
}, {
        name: "Tristimulus 3",
        function: "tristimulus_3",
        sub_features: ["spectral_fundamental"],
        parameters: [],
        returns: "number"
}, {
        name: "Smoothness",
        function: "smoothness",
        sub_features: [],
        parameters: [],
        returns: "number"
}, {
        name: "Rolloff",
        function: "rolloff",
        sub_features: [],
        parameters: [{
            name: "Threshold",
            unit: "%",
            type: "number",
            minimum: 0,
            maximum: 100,
            default: 90
    }],
        returns: "number"
}, {
        name: "Loudness",
        function: "loudness",
        sub_features: ["bark_coefficients"],
        parameters: [],
        returns: "number"
}, {
        name: "Sharpness",
        function: "sharpness",
        sub_features: ["bark_coefficients"],
        parameters: [],
        returns: "number"
}, {
        name: "Flatness",
        function: "flatness",
        sub_features: [],
        parameters: [],
        returns: "number"
}, {
        name: "Flatness DB",
        function: "flatness_db",
        sub_features: ["flatness"],
        parameters: [],
        returns: "number"
}, {
        name: "Tonality",
        function: "tonality",
        sub_features: ["flatness_db"],
        parameters: [],
        returns: "number"
}, {
        name: "Spectral Crest Factor",
        function: "spectral_crest_factor",
        sub_features: ["maximum", "spectral_mean"],
        parameters: [],
        returns: "number"
}, {
        name: "Spectral Slope",
        function: "spectral_slope",
        sub_features: [],
        parameters: [],
        returns: "number"
}, {
        name: "Fundamental Frequency",
        function: "spectral_fundamental",
        sub_features: [],
        parameters: [],
        returns: "number"
}, {
        name: "Non-Zero count",
        function: "nonzero_count",
        sub_features: [],
        parameters: [],
        returns: "number"
}, {
        name: "HPS",
        function: "hps",
        sub_features: [],
        parameters: [],
        returns: "number"
}, {
        name: "MFCC",
        function: "mfcc",
        sub_features: [],
        parameters: [{
            name: "Band Count",
            unit: "",
            type: "number",
            minimum: 0,
            maximum: undefined,
            default: 26
    }, {
            name: "Minimum Frequency",
            unit: "Hz",
            type: "number",
            minimum: 0,
            maximum: undefined,
            default: 400
    }, {
            name: "Maximum Frequency",
            unit: "Hz",
            minimum: 0,
            maximum: undefined,
            default: 20000
    }],
        returns: "array"
}, {
        name: "Chroma",
        function: "chroma",
        sub_features: [],
        parameters: [{
            name: "nbins",
            unit: "",
            type: "number",
            minimum: 2,
            maximum: undefined,
            default: 12
    }, {
            name: "A440",
            unit: "",
            type: "number",
            minimum: 220,
            maximum: 880,
            default: 440
    }, {
            name: "f_ctr",
            unit: "",
            type: "number",
            minimum: undefined,
            maximum: undefined,
            default: 1000
    }, {
            name: "octwidth",
            unit: "",
            type: "number",
            minimum: undefined,
            maximum: undefined,
            default: 1
    }],
        returns: "array"
}, {
        name: "DCT",
        function: "dct",
        sub_features: [],
        parameters: [],
        returns: "array"
}, {
        name: "Bark Coefficients",
        function: "bark_coefficients",
        sub_features: [],
        parameters: [{
            name: "Band Count",
            unit: "",
            type: "number",
            minimum: 0,
            maximum: 26,
            default: 26
    }],
        returns: "array"
}, {
        name: "Peak Spectrum",
        function: "peak_spectrum",
        sub_features: [],
        parameters: [{
            name: "Threshold",
            unit: "",
            type: "number",
            minimum: 0,
            maximum: 100,
            default: 30
    }],
        returns: "PeakSpectrumData"
}];


/***/ }),

/***/ "./modules/objects/TimeData.js":
/*!*************************************!*\
  !*** ./modules/objects/TimeData.js ***!
  \*************************************/
/*! exports provided: TimeData */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_258971__) {

"use strict";
__nested_webpack_require_258971__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_258971__.d(__webpack_exports__, "TimeData", function() { return TimeData; });
/* harmony import */ var _DataPrototype__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_258971__(/*! ./DataPrototype */ "./modules/objects/DataPrototype.js");
/* harmony import */ var _SpectrumData__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_258971__(/*! ./SpectrumData */ "./modules/objects/SpectrumData.js");
/* harmony import */ var _functions_xtract_init_wavelet__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_258971__(/*! ../functions/xtract_init_wavelet */ "./modules/functions/xtract_init_wavelet.js");
/* harmony import */ var _functions_xtract_array_min__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_258971__(/*! ../functions/xtract_array_min */ "./modules/functions/xtract_array_min.js");
/* harmony import */ var _functions_xtract_array_max__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_258971__(/*! ../functions/xtract_array_max */ "./modules/functions/xtract_array_max.js");
/* harmony import */ var _functions_xtract_array_sum__WEBPACK_IMPORTED_MODULE_5__ = __nested_webpack_require_258971__(/*! ../functions/xtract_array_sum */ "./modules/functions/xtract_array_sum.js");
/* harmony import */ var _functions_xtract_mean__WEBPACK_IMPORTED_MODULE_6__ = __nested_webpack_require_258971__(/*! ../functions/xtract_mean */ "./modules/functions/xtract_mean.js");
/* harmony import */ var _functions_xtract_temporal_centroid__WEBPACK_IMPORTED_MODULE_7__ = __nested_webpack_require_258971__(/*! ../functions/xtract_temporal_centroid */ "./modules/functions/xtract_temporal_centroid.js");
/* harmony import */ var _functions_xtract_variance__WEBPACK_IMPORTED_MODULE_8__ = __nested_webpack_require_258971__(/*! ../functions/xtract_variance */ "./modules/functions/xtract_variance.js");
/* harmony import */ var _functions_xtract_standard_deviation__WEBPACK_IMPORTED_MODULE_9__ = __nested_webpack_require_258971__(/*! ../functions/xtract_standard_deviation */ "./modules/functions/xtract_standard_deviation.js");
/* harmony import */ var _functions_xtract_average_deviation__WEBPACK_IMPORTED_MODULE_10__ = __nested_webpack_require_258971__(/*! ../functions/xtract_average_deviation */ "./modules/functions/xtract_average_deviation.js");
/* harmony import */ var _functions_xtract_skewness__WEBPACK_IMPORTED_MODULE_11__ = __nested_webpack_require_258971__(/*! ../functions/xtract_skewness */ "./modules/functions/xtract_skewness.js");
/* harmony import */ var _functions_xtract_kurtosis__WEBPACK_IMPORTED_MODULE_12__ = __nested_webpack_require_258971__(/*! ../functions/xtract_kurtosis */ "./modules/functions/xtract_kurtosis.js");
/* harmony import */ var _functions_xtract_zcr__WEBPACK_IMPORTED_MODULE_13__ = __nested_webpack_require_258971__(/*! ../functions/xtract_zcr */ "./modules/functions/xtract_zcr.js");
/* harmony import */ var _functions_xtract_crest__WEBPACK_IMPORTED_MODULE_14__ = __nested_webpack_require_258971__(/*! ../functions/xtract_crest */ "./modules/functions/xtract_crest.js");
/* harmony import */ var _functions_xtract_rms_amplitude__WEBPACK_IMPORTED_MODULE_15__ = __nested_webpack_require_258971__(/*! ../functions/xtract_rms_amplitude */ "./modules/functions/xtract_rms_amplitude.js");
/* harmony import */ var _functions_xtract_lowest_value__WEBPACK_IMPORTED_MODULE_16__ = __nested_webpack_require_258971__(/*! ../functions/xtract_lowest_value */ "./modules/functions/xtract_lowest_value.js");
/* harmony import */ var _functions_xtract_nonzero_count__WEBPACK_IMPORTED_MODULE_17__ = __nested_webpack_require_258971__(/*! ../functions/xtract_nonzero_count */ "./modules/functions/xtract_nonzero_count.js");
/* harmony import */ var _functions_xtract_wavelet_f0__WEBPACK_IMPORTED_MODULE_18__ = __nested_webpack_require_258971__(/*! ../functions/xtract_wavelet_f0 */ "./modules/functions/xtract_wavelet_f0.js");
/* harmony import */ var _functions_xtract_energy__WEBPACK_IMPORTED_MODULE_19__ = __nested_webpack_require_258971__(/*! ../functions/xtract_energy */ "./modules/functions/xtract_energy.js");
/* harmony import */ var _functions_xtract_spectrum__WEBPACK_IMPORTED_MODULE_20__ = __nested_webpack_require_258971__(/*! ../functions/xtract_spectrum */ "./modules/functions/xtract_spectrum.js");
/* harmony import */ var _functions_xtract_dct_2__WEBPACK_IMPORTED_MODULE_21__ = __nested_webpack_require_258971__(/*! ../functions/xtract_dct_2 */ "./modules/functions/xtract_dct_2.js");
/* harmony import */ var _functions_xtract_autocorrelation__WEBPACK_IMPORTED_MODULE_22__ = __nested_webpack_require_258971__(/*! ../functions/xtract_autocorrelation */ "./modules/functions/xtract_autocorrelation.js");
/* harmony import */ var _functions_xtract_amdf__WEBPACK_IMPORTED_MODULE_23__ = __nested_webpack_require_258971__(/*! ../functions/xtract_amdf */ "./modules/functions/xtract_amdf.js");
/* harmony import */ var _functions_xtract_asdf__WEBPACK_IMPORTED_MODULE_24__ = __nested_webpack_require_258971__(/*! ../functions/xtract_asdf */ "./modules/functions/xtract_asdf.js");
/* harmony import */ var _functions_xtract_yin__WEBPACK_IMPORTED_MODULE_25__ = __nested_webpack_require_258971__(/*! ../functions/xtract_yin */ "./modules/functions/xtract_yin.js");
/* harmony import */ var _functions_xtract_onset__WEBPACK_IMPORTED_MODULE_26__ = __nested_webpack_require_258971__(/*! ../functions/xtract_onset */ "./modules/functions/xtract_onset.js");
/* harmony import */ var _functions_xtract_resample__WEBPACK_IMPORTED_MODULE_27__ = __nested_webpack_require_258971__(/*! ../functions/xtract_resample */ "./modules/functions/xtract_resample.js");
/// <reference path="../../typings/objects/TimeData.d.ts" />





























class TimeData extends _DataPrototype__WEBPACK_IMPORTED_MODULE_0__["DataPrototype"] {
    constructor(input, sampleRate) {
        if (sampleRate <= 0) {
            sampleRate = undefined;
            console.log("Invalid parameter for 'sampleRate' for TimeData");
        }

        if (typeof input === "object") {
            var src, src_data;
            if (input instanceof TimeData) {
                src = src.getData();
                super(src.length, sampleRate);
                this.copyDataFrom(src, src.length, 0);
            } else if (input instanceof Float32Array || input instanceof Float64Array) {
                src = input;
                super(src.length, sampleRate);
                this.copyDataFrom(src, src.length, 0);
            } else {
                throw ("TimeData: Invalid object passed as first argument.");
            }

        } else if (typeof input === "number") {
            if (input <= 0 || input !== Math.floor(input)) {
                throw ("TimeData: Invalid number passed as first argument.");
            }
            super(input, sampleRate);
        } else {
            throw ("TimeData: Constructor has invalid operators!");
        }

        this._dct = undefined;
        this._wavelet = Object(_functions_xtract_init_wavelet__WEBPACK_IMPORTED_MODULE_2__["xtract_init_wavelet"])();
    }
    getFrames(frameSize, hopSize) {
        if (typeof frameSize !== "number" || frameSize <= 0 || frameSize !== Math.floor(frameSize)) {
            throw ("frameSize must be a defined, positive integer");
        }
        if (typeof hopSize !== "number") {
            hopSize = frameSize;
        }
        var num_frames = Math.ceil(this.data.length / frameSize);
        var result_frames = [];
        for (var i = 0; i < num_frames; i++) {
            var frame = new TimeData(hopSize, this.sampleRate);
            frame.copyDataFrom(this.data.subarray(frameSize * i, frameSize * i + hopSize));
            result_frames.push(frame);
        }
        return result_frames;
    }

    // Features
    minimum() {
        if (this.result.minimum === undefined) {
            this.result.minimum = Object(_functions_xtract_array_min__WEBPACK_IMPORTED_MODULE_3__["xtract_array_min"])(this.data);
        }
        return this.result.minimum;
    }

    maximum() {
        if (this.result.maximum === undefined) {
            this.result.maximum = Object(_functions_xtract_array_max__WEBPACK_IMPORTED_MODULE_4__["xtract_array_max"])(this.data);
        }
        return this.result.maximum;
    }

    sum() {
        if (this.result.sum === undefined) {
            this.result.sum = Object(_functions_xtract_array_sum__WEBPACK_IMPORTED_MODULE_5__["xtract_array_sum"])(this.data);
        }
        return this.result.sum;
    }

    mean() {
        if (this.result.mean === undefined) {
            this.result.mean = Object(_functions_xtract_mean__WEBPACK_IMPORTED_MODULE_6__["xtract_mean"])(this.data);
        }
        return this.result.mean;
    }

    temporal_centroid(window_ms) {
        if (this.result.temporal_centroid === undefined) {
            this.energy(window_ms);
            this.result.temporal_centroid = Object(_functions_xtract_temporal_centroid__WEBPACK_IMPORTED_MODULE_7__["xtract_temporal_centroid"])(this.result.energy.data, this.sampleRate, window_ms);
        }
        return this.result.temporal_centroid;
    }

    variance() {
        if (this.result.variance === undefined) {
            this.result.variance = Object(_functions_xtract_variance__WEBPACK_IMPORTED_MODULE_8__["xtract_variance"])(this.data, this.mean());
        }
        return this.result.variance;
    }

    standard_deviation() {
        if (this.result.standard_deviation === undefined) {
            this.result.standard_deviation = Object(_functions_xtract_standard_deviation__WEBPACK_IMPORTED_MODULE_9__["xtract_standard_deviation"])(this.data, this.variance());
        }
        return this.result.standard_deviation;
    }

    average_deviation () {
        if (this.result.average_deviation === undefined) {
            this.result.average_deviation = Object(_functions_xtract_average_deviation__WEBPACK_IMPORTED_MODULE_10__["xtract_average_deviation"])(this.data, this.mean());
        }
        return this.result.average_deviation;
    }

    skewness () {
        if (this.result.skewness === undefined) {
            this.result.skewness = Object(_functions_xtract_skewness__WEBPACK_IMPORTED_MODULE_11__["xtract_skewness"])(this.data, this.mean(), this.standard_deviation());
        }
        return this.result.skewness;
    }

    kurtosis () {
        if (this.result.kurtosis === undefined) {
            this.result.kurtosis = Object(_functions_xtract_kurtosis__WEBPACK_IMPORTED_MODULE_12__["xtract_kurtosis"])(this.data, this.mean(), this.standard_deviation());
        }
        return this.result.kurtosis;
    }

    zcr  () {
        if (this.result.zcr === undefined) {
            this.result.zcr = Object(_functions_xtract_zcr__WEBPACK_IMPORTED_MODULE_13__["xtract_zcr"])(this.data);
        }
        return this.result.zcr;
    }

    crest_factor () {
        if (this.result.crest_factor === undefined) {
            this.result.crest_factor = Object(_functions_xtract_crest__WEBPACK_IMPORTED_MODULE_14__["xtract_crest"])(this.data, this.maximum(), this.mean());
        }
        return this.result.crest_factor;
    }

    rms_amplitude () {
        if (this.result.rms_amplitude === undefined) {
            this.result.rms_amplitude = Object(_functions_xtract_rms_amplitude__WEBPACK_IMPORTED_MODULE_15__["xtract_rms_amplitude"])(this.data);
        }
        return this.result.rms_amplitude;
    }

    lowest_value (threshold) {
        if (this.result.lowest_value === undefined) {
            this.result.lowest_value = Object(_functions_xtract_lowest_value__WEBPACK_IMPORTED_MODULE_16__["xtract_lowest_value"])(this.data, threshold);
        }
        return this.result.lowest_value;
    }

    highest_value () {
        if (this.result.nonzero_count === undefined) {
            this.result.nonzero_count = Object(_functions_xtract_nonzero_count__WEBPACK_IMPORTED_MODULE_17__["xtract_nonzero_count"])(this.data);
        }
        return this.result.nonzero_count;
    }

    f0 () {
        if (this._wavelet === undefined) {
            this._wavelet = this.init_wavelet();
        }
        if (this.result.f0 === undefined) {
            this.result.f0 = Object(_functions_xtract_wavelet_f0__WEBPACK_IMPORTED_MODULE_18__["xtract_wavelet_f0"])(this.data, this.sampleRate, this._wavelet);
        }
        return this.result.f0;
    }

    energy (window_ms) {
        if (this.result.energy === undefined || this.result.energy.window_ms !== window_ms) {
            this.result.energy = {
                'data': Object(_functions_xtract_energy__WEBPACK_IMPORTED_MODULE_19__["xtract_energy"])(this.data, this.sampleRate, window_ms),
                'window_ms': window_ms
            };
        }
        return this.result.energy;
    }

    spectrum() {
        if (this.result.spectrum === undefined) {
            var _spec = Object(_functions_xtract_spectrum__WEBPACK_IMPORTED_MODULE_20__["xtract_spectrum"])(this.data, this.sampleRate, true, false);
            this.result.spectrum = new _SpectrumData__WEBPACK_IMPORTED_MODULE_1__["SpectrumData"](_spec.length / 2, this.sampleRate);
            this.result.spectrum.copyDataFrom(_spec);
            return this.result.spectrum;
        }
    }

    dct() {
        if (this._dct === undefined) {
            this._dct = this.createDctCoefficients(this.data.length);
        }
        if (this.result.dct === undefined) {
            this.result.dct = Object(_functions_xtract_dct_2__WEBPACK_IMPORTED_MODULE_21__["xtract_dct_2"])(this.data, this._dct);
        }
        return this.result.dct;
    }

    autocorrelation () {
        if (this.result.autocorrelation === undefined) {
            this.result.autocorrelation = Object(_functions_xtract_autocorrelation__WEBPACK_IMPORTED_MODULE_22__["xtract_autocorrelation"])(this.data);
        }
        return this.result.autocorrelation;
    }

    amdf () {
        if (this.result.amdf === undefined) {
            this.result.amdf = Object(_functions_xtract_amdf__WEBPACK_IMPORTED_MODULE_23__["xtract_amdf"])(this.data);
        }
        return this.result.amdf;
    }

    asdf () {
        if (this.result.asdf === undefined) {
            this.result.asdf = Object(_functions_xtract_asdf__WEBPACK_IMPORTED_MODULE_24__["xtract_asdf"])(this.data);
        }
        return this.result.asdf;
    }

    yin() {
        if (this.result.yin === undefined) {
            this.result.yin = Object(_functions_xtract_yin__WEBPACK_IMPORTED_MODULE_25__["xtract_yin"])(this.data);
        }
        return this.result.yin;
    }

    onset(frameSize) {
        if (this.result.onset === undefined || this.result.onset.frameSize !== frameSize) {
            this.result.onset = {
                'data': Object(_functions_xtract_onset__WEBPACK_IMPORTED_MODULE_26__["xtract_onset"])(this.data, frameSize),
                'frameSize': frameSize
            };
        }
        return this.result.onset;
    }

    resample(targetSampleRate) {
        if (this.sampleRate === undefined) {
            throw ("Source sampleRate must be defined");
        }
        if (typeof targetSampleRate !== "number" || targetSampleRate <= 0) {
            throw ("Target sampleRate must be a positive number");
        }
        var resampled = Object(_functions_xtract_resample__WEBPACK_IMPORTED_MODULE_27__["xtract_resample"])(this.data, targetSampleRate, this.sampleRate);
        var reply = new TimeData(resampled.length, targetSampleRate);
        reply.copyDataFrom(resampled);
        this.result.resample = reply;
        return reply;
    }
}

TimeData.prototype.features = [
    {
        name: "Minimum",
        function: "minimum",
        sub_features: [],
        parameters: [],
        returns: "number"
    }, {
        name: "Maximum",
        function: "maximum",
        sub_features: [],
        parameters: [],
        returns: "number"
    }, {
        name: "Sum",
        function: "sum",
        sub_features: [],
        parameters: [],
        returns: "number"
    }, {
        name: "Mean",
        function: "mean",
        sub_features: [],
        parameters: [],
        returns: "number"
    }, {
        name: "Temporal Centroid",
        function: "temporal_centroid",
        sub_features: ["energy"],
        parameters: [{
            name: "Window Time",
            unit: "ms",
            type: "number",
            minimum: 1,
            maximum: undefined,
            default: 100
        }],
        returns: "number"
    }, {
        name: "Variance",
        function: "variance",
        sub_features: ["mean"],
        parameters: [],
        returns: "number"
    }, {
        name: "Standard Deviation",
        function: "standard_deviation",
        sub_features: ["variance"],
        parameters: [],
        returns: "number"
    }, {
        name: "Average Deviation",
        function: "average_deviation",
        sub_features: ["mean"],
        parameters: [],
        returns: "number"
    }, {
        name: "Skewness",
        function: "skewness",
        sub_features: ["mean", "standard_deviation"],
        parameters: [],
        returns: "number"
    }, {
        name: "Kurtosis",
        function: "kurtosis",
        sub_features: ["mean", "standard_deviation"],
        parameters: [],
        returns: "number"
    }, {
        name: "Zero Crossing Rate",
        function: "zcr",
        sub_features: [],
        parameters: [],
        returns: "number"
    }, {
        name: "Crest Factor",
        function: "crest_factor",
        sub_features: ["maximum", "mean"],
        parameters: [],
        returns: "number"
    }, {
        name: "RMS Amplitude",
        function: "rms_amplitude",
        sub_features: [],
        parameters: [],
        returns: "number"
    }, {
        name: "Lowest Value",
        function: "lowest_value",
        sub_features: [],
        parameters: [{
            name: "Threshold",
            unit: "",
            type: "number",
            minimum: undefined,
            maximum: undefined,
            default: undefined
        }],
        returns: "number"
    }, {
        name: "Highest Value",
        function: "highest_value",
        sub_features: [],
        parameters: [{
            name: "Threshold",
            unit: "",
            type: "number",
            minimum: undefined,
            maximum: undefined,
            default: undefined
        }],
        returns: "number"
    }, {
        name: "Non-Zero Count",
        function: "nonzero_count",
        sub_features: [],
        parameters: [],
        returns: "number"
    }, {
        name: "Fundamental Frequency",
        function: "f0",
        sub_features: [],
        parameters: [],
        returns: "number"
    }, {
        name: "Energy",
        function: "energy",
        sub_features: [],
        parameters: [{
            name: "Window",
            unit: "ms",
            type: "number",
            minimum: 1,
            maximum: undefined,
            default: 100
        }],
        returns: "object"
    }, {
        name: "Spectrum",
        function: "spectrum",
        sub_features: [],
        parameters: [],
        returns: "SpectrumData"
    }, {
        name: "DCT",
        function: "dct",
        sub_features: [],
        parameters: [],
        returns: "array"
    }, {
        name: "Autocorrelation",
        function: "autocorrelation",
        sub_features: [],
        parameters: [],
        returns: "array"
    }, {
        name: "AMDF",
        function: "amdf",
        sub_features: [],
        parameters: [],
        returns: "array"
    }, {
        name: "ASDF",
        function: "asdf",
        sub_features: [],
        parameters: [],
        returns: "array"
    }, {
        name: "YIN Pitch",
        function: "yin",
        sub_features: [],
        parameters: [],
        returns: "array"
    }, {
        name: "Onset Detection",
        function: "onset",
        sub_features: [],
        parameters: [{
            name: "Frame Size",
            unit: "samples",
            type: "number",
            minimum: 1,
            maximum: undefined,
            default: 1024
        }],
        returns: "array"
    }, {
        name: "Resample",
        function: "resample",
        sub_features: [],
        parameters: [{
            name: "Target Sample Rate",
            unit: "Hz",
            type: "number",
            minimum: 0,
            maximum: undefined,
            default: 8000
        }],
        returns: "TimeData"
    }];


/***/ })

/******/ });
});


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/Observable.js":
/*!********************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/Observable.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Observable": () => (/* binding */ Observable)
/* harmony export */ });
/* harmony import */ var _util_canReportError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util/canReportError */ "./node_modules/rxjs/_esm5/internal/util/canReportError.js");
/* harmony import */ var _util_toSubscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/toSubscriber */ "./node_modules/rxjs/_esm5/internal/util/toSubscriber.js");
/* harmony import */ var _symbol_observable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./symbol/observable */ "./node_modules/rxjs/_esm5/internal/symbol/observable.js");
/* harmony import */ var _util_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util/pipe */ "./node_modules/rxjs/_esm5/internal/util/pipe.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ "./node_modules/rxjs/_esm5/internal/config.js");
/** PURE_IMPORTS_START _util_canReportError,_util_toSubscriber,_symbol_observable,_util_pipe,_config PURE_IMPORTS_END */





var Observable = /*@__PURE__*/ (function () {
    function Observable(subscribe) {
        this._isScalar = false;
        if (subscribe) {
            this._subscribe = subscribe;
        }
    }
    Observable.prototype.lift = function (operator) {
        var observable = new Observable();
        observable.source = this;
        observable.operator = operator;
        return observable;
    };
    Observable.prototype.subscribe = function (observerOrNext, error, complete) {
        var operator = this.operator;
        var sink = (0,_util_toSubscriber__WEBPACK_IMPORTED_MODULE_0__.toSubscriber)(observerOrNext, error, complete);
        if (operator) {
            sink.add(operator.call(sink, this.source));
        }
        else {
            sink.add(this.source || (_config__WEBPACK_IMPORTED_MODULE_1__.config.useDeprecatedSynchronousErrorHandling && !sink.syncErrorThrowable) ?
                this._subscribe(sink) :
                this._trySubscribe(sink));
        }
        if (_config__WEBPACK_IMPORTED_MODULE_1__.config.useDeprecatedSynchronousErrorHandling) {
            if (sink.syncErrorThrowable) {
                sink.syncErrorThrowable = false;
                if (sink.syncErrorThrown) {
                    throw sink.syncErrorValue;
                }
            }
        }
        return sink;
    };
    Observable.prototype._trySubscribe = function (sink) {
        try {
            return this._subscribe(sink);
        }
        catch (err) {
            if (_config__WEBPACK_IMPORTED_MODULE_1__.config.useDeprecatedSynchronousErrorHandling) {
                sink.syncErrorThrown = true;
                sink.syncErrorValue = err;
            }
            if ((0,_util_canReportError__WEBPACK_IMPORTED_MODULE_2__.canReportError)(sink)) {
                sink.error(err);
            }
            else {
                console.warn(err);
            }
        }
    };
    Observable.prototype.forEach = function (next, promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function (resolve, reject) {
            var subscription;
            subscription = _this.subscribe(function (value) {
                try {
                    next(value);
                }
                catch (err) {
                    reject(err);
                    if (subscription) {
                        subscription.unsubscribe();
                    }
                }
            }, reject, resolve);
        });
    };
    Observable.prototype._subscribe = function (subscriber) {
        var source = this.source;
        return source && source.subscribe(subscriber);
    };
    Observable.prototype[_symbol_observable__WEBPACK_IMPORTED_MODULE_3__.observable] = function () {
        return this;
    };
    Observable.prototype.pipe = function () {
        var operations = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            operations[_i] = arguments[_i];
        }
        if (operations.length === 0) {
            return this;
        }
        return (0,_util_pipe__WEBPACK_IMPORTED_MODULE_4__.pipeFromArray)(operations)(this);
    };
    Observable.prototype.toPromise = function (promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function (resolve, reject) {
            var value;
            _this.subscribe(function (x) { return value = x; }, function (err) { return reject(err); }, function () { return resolve(value); });
        });
    };
    Observable.create = function (subscribe) {
        return new Observable(subscribe);
    };
    return Observable;
}());

function getPromiseCtor(promiseCtor) {
    if (!promiseCtor) {
        promiseCtor = _config__WEBPACK_IMPORTED_MODULE_1__.config.Promise || Promise;
    }
    if (!promiseCtor) {
        throw new Error('no Promise impl found');
    }
    return promiseCtor;
}


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/Observer.js":
/*!******************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/Observer.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "empty": () => (/* binding */ empty)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "./node_modules/rxjs/_esm5/internal/config.js");
/* harmony import */ var _util_hostReportError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/hostReportError */ "./node_modules/rxjs/_esm5/internal/util/hostReportError.js");
/** PURE_IMPORTS_START _config,_util_hostReportError PURE_IMPORTS_END */


var empty = {
    closed: true,
    next: function (value) { },
    error: function (err) {
        if (_config__WEBPACK_IMPORTED_MODULE_0__.config.useDeprecatedSynchronousErrorHandling) {
            throw err;
        }
        else {
            (0,_util_hostReportError__WEBPACK_IMPORTED_MODULE_1__.hostReportError)(err);
        }
    },
    complete: function () { }
};


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/Subscriber.js":
/*!********************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/Subscriber.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Subscriber": () => (/* binding */ Subscriber),
/* harmony export */   "SafeSubscriber": () => (/* binding */ SafeSubscriber)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/rxjs/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util/isFunction */ "./node_modules/rxjs/_esm5/internal/util/isFunction.js");
/* harmony import */ var _Observer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Observer */ "./node_modules/rxjs/_esm5/internal/Observer.js");
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Subscription */ "./node_modules/rxjs/_esm5/internal/Subscription.js");
/* harmony import */ var _internal_symbol_rxSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../internal/symbol/rxSubscriber */ "./node_modules/rxjs/_esm5/internal/symbol/rxSubscriber.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config */ "./node_modules/rxjs/_esm5/internal/config.js");
/* harmony import */ var _util_hostReportError__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./util/hostReportError */ "./node_modules/rxjs/_esm5/internal/util/hostReportError.js");
/** PURE_IMPORTS_START tslib,_util_isFunction,_Observer,_Subscription,_internal_symbol_rxSubscriber,_config,_util_hostReportError PURE_IMPORTS_END */







var Subscriber = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__.__extends(Subscriber, _super);
    function Subscriber(destinationOrNext, error, complete) {
        var _this = _super.call(this) || this;
        _this.syncErrorValue = null;
        _this.syncErrorThrown = false;
        _this.syncErrorThrowable = false;
        _this.isStopped = false;
        switch (arguments.length) {
            case 0:
                _this.destination = _Observer__WEBPACK_IMPORTED_MODULE_1__.empty;
                break;
            case 1:
                if (!destinationOrNext) {
                    _this.destination = _Observer__WEBPACK_IMPORTED_MODULE_1__.empty;
                    break;
                }
                if (typeof destinationOrNext === 'object') {
                    if (destinationOrNext instanceof Subscriber) {
                        _this.syncErrorThrowable = destinationOrNext.syncErrorThrowable;
                        _this.destination = destinationOrNext;
                        destinationOrNext.add(_this);
                    }
                    else {
                        _this.syncErrorThrowable = true;
                        _this.destination = new SafeSubscriber(_this, destinationOrNext);
                    }
                    break;
                }
            default:
                _this.syncErrorThrowable = true;
                _this.destination = new SafeSubscriber(_this, destinationOrNext, error, complete);
                break;
        }
        return _this;
    }
    Subscriber.prototype[_internal_symbol_rxSubscriber__WEBPACK_IMPORTED_MODULE_2__.rxSubscriber] = function () { return this; };
    Subscriber.create = function (next, error, complete) {
        var subscriber = new Subscriber(next, error, complete);
        subscriber.syncErrorThrowable = false;
        return subscriber;
    };
    Subscriber.prototype.next = function (value) {
        if (!this.isStopped) {
            this._next(value);
        }
    };
    Subscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            this.isStopped = true;
            this._error(err);
        }
    };
    Subscriber.prototype.complete = function () {
        if (!this.isStopped) {
            this.isStopped = true;
            this._complete();
        }
    };
    Subscriber.prototype.unsubscribe = function () {
        if (this.closed) {
            return;
        }
        this.isStopped = true;
        _super.prototype.unsubscribe.call(this);
    };
    Subscriber.prototype._next = function (value) {
        this.destination.next(value);
    };
    Subscriber.prototype._error = function (err) {
        this.destination.error(err);
        this.unsubscribe();
    };
    Subscriber.prototype._complete = function () {
        this.destination.complete();
        this.unsubscribe();
    };
    Subscriber.prototype._unsubscribeAndRecycle = function () {
        var _parentOrParents = this._parentOrParents;
        this._parentOrParents = null;
        this.unsubscribe();
        this.closed = false;
        this.isStopped = false;
        this._parentOrParents = _parentOrParents;
        return this;
    };
    return Subscriber;
}(_Subscription__WEBPACK_IMPORTED_MODULE_3__.Subscription));

var SafeSubscriber = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__.__extends(SafeSubscriber, _super);
    function SafeSubscriber(_parentSubscriber, observerOrNext, error, complete) {
        var _this = _super.call(this) || this;
        _this._parentSubscriber = _parentSubscriber;
        var next;
        var context = _this;
        if ((0,_util_isFunction__WEBPACK_IMPORTED_MODULE_4__.isFunction)(observerOrNext)) {
            next = observerOrNext;
        }
        else if (observerOrNext) {
            next = observerOrNext.next;
            error = observerOrNext.error;
            complete = observerOrNext.complete;
            if (observerOrNext !== _Observer__WEBPACK_IMPORTED_MODULE_1__.empty) {
                context = Object.create(observerOrNext);
                if ((0,_util_isFunction__WEBPACK_IMPORTED_MODULE_4__.isFunction)(context.unsubscribe)) {
                    _this.add(context.unsubscribe.bind(context));
                }
                context.unsubscribe = _this.unsubscribe.bind(_this);
            }
        }
        _this._context = context;
        _this._next = next;
        _this._error = error;
        _this._complete = complete;
        return _this;
    }
    SafeSubscriber.prototype.next = function (value) {
        if (!this.isStopped && this._next) {
            var _parentSubscriber = this._parentSubscriber;
            if (!_config__WEBPACK_IMPORTED_MODULE_5__.config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                this.__tryOrUnsub(this._next, value);
            }
            else if (this.__tryOrSetError(_parentSubscriber, this._next, value)) {
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            var _parentSubscriber = this._parentSubscriber;
            var useDeprecatedSynchronousErrorHandling = _config__WEBPACK_IMPORTED_MODULE_5__.config.useDeprecatedSynchronousErrorHandling;
            if (this._error) {
                if (!useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(this._error, err);
                    this.unsubscribe();
                }
                else {
                    this.__tryOrSetError(_parentSubscriber, this._error, err);
                    this.unsubscribe();
                }
            }
            else if (!_parentSubscriber.syncErrorThrowable) {
                this.unsubscribe();
                if (useDeprecatedSynchronousErrorHandling) {
                    throw err;
                }
                (0,_util_hostReportError__WEBPACK_IMPORTED_MODULE_6__.hostReportError)(err);
            }
            else {
                if (useDeprecatedSynchronousErrorHandling) {
                    _parentSubscriber.syncErrorValue = err;
                    _parentSubscriber.syncErrorThrown = true;
                }
                else {
                    (0,_util_hostReportError__WEBPACK_IMPORTED_MODULE_6__.hostReportError)(err);
                }
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.complete = function () {
        var _this = this;
        if (!this.isStopped) {
            var _parentSubscriber = this._parentSubscriber;
            if (this._complete) {
                var wrappedComplete = function () { return _this._complete.call(_this._context); };
                if (!_config__WEBPACK_IMPORTED_MODULE_5__.config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(wrappedComplete);
                    this.unsubscribe();
                }
                else {
                    this.__tryOrSetError(_parentSubscriber, wrappedComplete);
                    this.unsubscribe();
                }
            }
            else {
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.__tryOrUnsub = function (fn, value) {
        try {
            fn.call(this._context, value);
        }
        catch (err) {
            this.unsubscribe();
            if (_config__WEBPACK_IMPORTED_MODULE_5__.config.useDeprecatedSynchronousErrorHandling) {
                throw err;
            }
            else {
                (0,_util_hostReportError__WEBPACK_IMPORTED_MODULE_6__.hostReportError)(err);
            }
        }
    };
    SafeSubscriber.prototype.__tryOrSetError = function (parent, fn, value) {
        if (!_config__WEBPACK_IMPORTED_MODULE_5__.config.useDeprecatedSynchronousErrorHandling) {
            throw new Error('bad call');
        }
        try {
            fn.call(this._context, value);
        }
        catch (err) {
            if (_config__WEBPACK_IMPORTED_MODULE_5__.config.useDeprecatedSynchronousErrorHandling) {
                parent.syncErrorValue = err;
                parent.syncErrorThrown = true;
                return true;
            }
            else {
                (0,_util_hostReportError__WEBPACK_IMPORTED_MODULE_6__.hostReportError)(err);
                return true;
            }
        }
        return false;
    };
    SafeSubscriber.prototype._unsubscribe = function () {
        var _parentSubscriber = this._parentSubscriber;
        this._context = null;
        this._parentSubscriber = null;
        _parentSubscriber.unsubscribe();
    };
    return SafeSubscriber;
}(Subscriber));



/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/Subscription.js":
/*!**********************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/Subscription.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Subscription": () => (/* binding */ Subscription)
/* harmony export */ });
/* harmony import */ var _util_isArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util/isArray */ "./node_modules/rxjs/_esm5/internal/util/isArray.js");
/* harmony import */ var _util_isObject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util/isObject */ "./node_modules/rxjs/_esm5/internal/util/isObject.js");
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/isFunction */ "./node_modules/rxjs/_esm5/internal/util/isFunction.js");
/* harmony import */ var _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/UnsubscriptionError */ "./node_modules/rxjs/_esm5/internal/util/UnsubscriptionError.js");
/** PURE_IMPORTS_START _util_isArray,_util_isObject,_util_isFunction,_util_UnsubscriptionError PURE_IMPORTS_END */




var Subscription = /*@__PURE__*/ (function () {
    function Subscription(unsubscribe) {
        this.closed = false;
        this._parentOrParents = null;
        this._subscriptions = null;
        if (unsubscribe) {
            this._ctorUnsubscribe = true;
            this._unsubscribe = unsubscribe;
        }
    }
    Subscription.prototype.unsubscribe = function () {
        var errors;
        if (this.closed) {
            return;
        }
        var _a = this, _parentOrParents = _a._parentOrParents, _ctorUnsubscribe = _a._ctorUnsubscribe, _unsubscribe = _a._unsubscribe, _subscriptions = _a._subscriptions;
        this.closed = true;
        this._parentOrParents = null;
        this._subscriptions = null;
        if (_parentOrParents instanceof Subscription) {
            _parentOrParents.remove(this);
        }
        else if (_parentOrParents !== null) {
            for (var index = 0; index < _parentOrParents.length; ++index) {
                var parent_1 = _parentOrParents[index];
                parent_1.remove(this);
            }
        }
        if ((0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(_unsubscribe)) {
            if (_ctorUnsubscribe) {
                this._unsubscribe = undefined;
            }
            try {
                _unsubscribe.call(this);
            }
            catch (e) {
                errors = e instanceof _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_1__.UnsubscriptionError ? flattenUnsubscriptionErrors(e.errors) : [e];
            }
        }
        if ((0,_util_isArray__WEBPACK_IMPORTED_MODULE_2__.isArray)(_subscriptions)) {
            var index = -1;
            var len = _subscriptions.length;
            while (++index < len) {
                var sub = _subscriptions[index];
                if ((0,_util_isObject__WEBPACK_IMPORTED_MODULE_3__.isObject)(sub)) {
                    try {
                        sub.unsubscribe();
                    }
                    catch (e) {
                        errors = errors || [];
                        if (e instanceof _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_1__.UnsubscriptionError) {
                            errors = errors.concat(flattenUnsubscriptionErrors(e.errors));
                        }
                        else {
                            errors.push(e);
                        }
                    }
                }
            }
        }
        if (errors) {
            throw new _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_1__.UnsubscriptionError(errors);
        }
    };
    Subscription.prototype.add = function (teardown) {
        var subscription = teardown;
        if (!teardown) {
            return Subscription.EMPTY;
        }
        switch (typeof teardown) {
            case 'function':
                subscription = new Subscription(teardown);
            case 'object':
                if (subscription === this || subscription.closed || typeof subscription.unsubscribe !== 'function') {
                    return subscription;
                }
                else if (this.closed) {
                    subscription.unsubscribe();
                    return subscription;
                }
                else if (!(subscription instanceof Subscription)) {
                    var tmp = subscription;
                    subscription = new Subscription();
                    subscription._subscriptions = [tmp];
                }
                break;
            default: {
                throw new Error('unrecognized teardown ' + teardown + ' added to Subscription.');
            }
        }
        var _parentOrParents = subscription._parentOrParents;
        if (_parentOrParents === null) {
            subscription._parentOrParents = this;
        }
        else if (_parentOrParents instanceof Subscription) {
            if (_parentOrParents === this) {
                return subscription;
            }
            subscription._parentOrParents = [_parentOrParents, this];
        }
        else if (_parentOrParents.indexOf(this) === -1) {
            _parentOrParents.push(this);
        }
        else {
            return subscription;
        }
        var subscriptions = this._subscriptions;
        if (subscriptions === null) {
            this._subscriptions = [subscription];
        }
        else {
            subscriptions.push(subscription);
        }
        return subscription;
    };
    Subscription.prototype.remove = function (subscription) {
        var subscriptions = this._subscriptions;
        if (subscriptions) {
            var subscriptionIndex = subscriptions.indexOf(subscription);
            if (subscriptionIndex !== -1) {
                subscriptions.splice(subscriptionIndex, 1);
            }
        }
    };
    Subscription.EMPTY = (function (empty) {
        empty.closed = true;
        return empty;
    }(new Subscription()));
    return Subscription;
}());

function flattenUnsubscriptionErrors(errors) {
    return errors.reduce(function (errs, err) { return errs.concat((err instanceof _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_1__.UnsubscriptionError) ? err.errors : err); }, []);
}


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/config.js":
/*!****************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/config.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "config": () => (/* binding */ config)
/* harmony export */ });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var _enable_super_gross_mode_that_will_cause_bad_things = false;
var config = {
    Promise: undefined,
    set useDeprecatedSynchronousErrorHandling(value) {
        if (value) {
            var error = /*@__PURE__*/ new Error();
            /*@__PURE__*/ console.warn('DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n' + error.stack);
        }
        else if (_enable_super_gross_mode_that_will_cause_bad_things) {
            /*@__PURE__*/ console.log('RxJS: Back to a better error behavior. Thank you. <3');
        }
        _enable_super_gross_mode_that_will_cause_bad_things = value;
    },
    get useDeprecatedSynchronousErrorHandling() {
        return _enable_super_gross_mode_that_will_cause_bad_things;
    },
};


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/observable/fromArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/observable/fromArray.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fromArray": () => (/* binding */ fromArray)
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/_esm5/internal/Observable.js");
/* harmony import */ var _util_subscribeToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/subscribeToArray */ "./node_modules/rxjs/_esm5/internal/util/subscribeToArray.js");
/* harmony import */ var _scheduled_scheduleArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scheduled/scheduleArray */ "./node_modules/rxjs/_esm5/internal/scheduled/scheduleArray.js");
/** PURE_IMPORTS_START _Observable,_util_subscribeToArray,_scheduled_scheduleArray PURE_IMPORTS_END */



function fromArray(input, scheduler) {
    if (!scheduler) {
        return new _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable((0,_util_subscribeToArray__WEBPACK_IMPORTED_MODULE_1__.subscribeToArray)(input));
    }
    else {
        return (0,_scheduled_scheduleArray__WEBPACK_IMPORTED_MODULE_2__.scheduleArray)(input, scheduler);
    }
}


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/observable/of.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/observable/of.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "of": () => (/* binding */ of)
/* harmony export */ });
/* harmony import */ var _util_isScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/isScheduler */ "./node_modules/rxjs/_esm5/internal/util/isScheduler.js");
/* harmony import */ var _fromArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fromArray */ "./node_modules/rxjs/_esm5/internal/observable/fromArray.js");
/* harmony import */ var _scheduled_scheduleArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scheduled/scheduleArray */ "./node_modules/rxjs/_esm5/internal/scheduled/scheduleArray.js");
/** PURE_IMPORTS_START _util_isScheduler,_fromArray,_scheduled_scheduleArray PURE_IMPORTS_END */



function of() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var scheduler = args[args.length - 1];
    if ((0,_util_isScheduler__WEBPACK_IMPORTED_MODULE_0__.isScheduler)(scheduler)) {
        args.pop();
        return (0,_scheduled_scheduleArray__WEBPACK_IMPORTED_MODULE_1__.scheduleArray)(args, scheduler);
    }
    else {
        return (0,_fromArray__WEBPACK_IMPORTED_MODULE_2__.fromArray)(args);
    }
}


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/scheduled/scheduleArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/scheduled/scheduleArray.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "scheduleArray": () => (/* binding */ scheduleArray)
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/_esm5/internal/Observable.js");
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Subscription */ "./node_modules/rxjs/_esm5/internal/Subscription.js");
/** PURE_IMPORTS_START _Observable,_Subscription PURE_IMPORTS_END */


function scheduleArray(input, scheduler) {
    return new _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable(function (subscriber) {
        var sub = new _Subscription__WEBPACK_IMPORTED_MODULE_1__.Subscription();
        var i = 0;
        sub.add(scheduler.schedule(function () {
            if (i === input.length) {
                subscriber.complete();
                return;
            }
            subscriber.next(input[i++]);
            if (!subscriber.closed) {
                sub.add(this.schedule());
            }
        }));
        return sub;
    });
}


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/symbol/observable.js":
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/symbol/observable.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "observable": () => (/* binding */ observable)
/* harmony export */ });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var observable = /*@__PURE__*/ (function () { return typeof Symbol === 'function' && Symbol.observable || '@@observable'; })();


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/symbol/rxSubscriber.js":
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/symbol/rxSubscriber.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "rxSubscriber": () => (/* binding */ rxSubscriber),
/* harmony export */   "$$rxSubscriber": () => (/* binding */ $$rxSubscriber)
/* harmony export */ });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var rxSubscriber = /*@__PURE__*/ (function () {
    return typeof Symbol === 'function'
        ? /*@__PURE__*/ Symbol('rxSubscriber')
        : '@@rxSubscriber_' + /*@__PURE__*/ Math.random();
})();
var $$rxSubscriber = rxSubscriber;


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/UnsubscriptionError.js":
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/UnsubscriptionError.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UnsubscriptionError": () => (/* binding */ UnsubscriptionError)
/* harmony export */ });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var UnsubscriptionErrorImpl = /*@__PURE__*/ (function () {
    function UnsubscriptionErrorImpl(errors) {
        Error.call(this);
        this.message = errors ?
            errors.length + " errors occurred during unsubscription:\n" + errors.map(function (err, i) { return i + 1 + ") " + err.toString(); }).join('\n  ') : '';
        this.name = 'UnsubscriptionError';
        this.errors = errors;
        return this;
    }
    UnsubscriptionErrorImpl.prototype = /*@__PURE__*/ Object.create(Error.prototype);
    return UnsubscriptionErrorImpl;
})();
var UnsubscriptionError = UnsubscriptionErrorImpl;


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/canReportError.js":
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/canReportError.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "canReportError": () => (/* binding */ canReportError)
/* harmony export */ });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/_esm5/internal/Subscriber.js");
/** PURE_IMPORTS_START _Subscriber PURE_IMPORTS_END */

function canReportError(observer) {
    while (observer) {
        var _a = observer, closed_1 = _a.closed, destination = _a.destination, isStopped = _a.isStopped;
        if (closed_1 || isStopped) {
            return false;
        }
        else if (destination && destination instanceof _Subscriber__WEBPACK_IMPORTED_MODULE_0__.Subscriber) {
            observer = destination;
        }
        else {
            observer = null;
        }
    }
    return true;
}


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/hostReportError.js":
/*!******************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/hostReportError.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hostReportError": () => (/* binding */ hostReportError)
/* harmony export */ });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function hostReportError(err) {
    setTimeout(function () { throw err; }, 0);
}


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/identity.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/identity.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "identity": () => (/* binding */ identity)
/* harmony export */ });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function identity(x) {
    return x;
}


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/isArray.js":
/*!**********************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/isArray.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isArray": () => (/* binding */ isArray)
/* harmony export */ });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var isArray = /*@__PURE__*/ (function () { return Array.isArray || (function (x) { return x && typeof x.length === 'number'; }); })();


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/isFunction.js":
/*!*************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/isFunction.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isFunction": () => (/* binding */ isFunction)
/* harmony export */ });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function isFunction(x) {
    return typeof x === 'function';
}


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/isObject.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/isObject.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isObject": () => (/* binding */ isObject)
/* harmony export */ });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function isObject(x) {
    return x !== null && typeof x === 'object';
}


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/isScheduler.js":
/*!**************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/isScheduler.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isScheduler": () => (/* binding */ isScheduler)
/* harmony export */ });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function isScheduler(value) {
    return value && typeof value.schedule === 'function';
}


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/pipe.js":
/*!*******************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/pipe.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pipe": () => (/* binding */ pipe),
/* harmony export */   "pipeFromArray": () => (/* binding */ pipeFromArray)
/* harmony export */ });
/* harmony import */ var _identity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./identity */ "./node_modules/rxjs/_esm5/internal/util/identity.js");
/** PURE_IMPORTS_START _identity PURE_IMPORTS_END */

function pipe() {
    var fns = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fns[_i] = arguments[_i];
    }
    return pipeFromArray(fns);
}
function pipeFromArray(fns) {
    if (fns.length === 0) {
        return _identity__WEBPACK_IMPORTED_MODULE_0__.identity;
    }
    if (fns.length === 1) {
        return fns[0];
    }
    return function piped(input) {
        return fns.reduce(function (prev, fn) { return fn(prev); }, input);
    };
}


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/subscribeToArray.js":
/*!*******************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/subscribeToArray.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "subscribeToArray": () => (/* binding */ subscribeToArray)
/* harmony export */ });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var subscribeToArray = function (array) {
    return function (subscriber) {
        for (var i = 0, len = array.length; i < len && !subscriber.closed; i++) {
            subscriber.next(array[i]);
        }
        subscriber.complete();
    };
};


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/toSubscriber.js":
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/toSubscriber.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toSubscriber": () => (/* binding */ toSubscriber)
/* harmony export */ });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/_esm5/internal/Subscriber.js");
/* harmony import */ var _symbol_rxSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../symbol/rxSubscriber */ "./node_modules/rxjs/_esm5/internal/symbol/rxSubscriber.js");
/* harmony import */ var _Observer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Observer */ "./node_modules/rxjs/_esm5/internal/Observer.js");
/** PURE_IMPORTS_START _Subscriber,_symbol_rxSubscriber,_Observer PURE_IMPORTS_END */



function toSubscriber(nextOrObserver, error, complete) {
    if (nextOrObserver) {
        if (nextOrObserver instanceof _Subscriber__WEBPACK_IMPORTED_MODULE_0__.Subscriber) {
            return nextOrObserver;
        }
        if (nextOrObserver[_symbol_rxSubscriber__WEBPACK_IMPORTED_MODULE_1__.rxSubscriber]) {
            return nextOrObserver[_symbol_rxSubscriber__WEBPACK_IMPORTED_MODULE_1__.rxSubscriber]();
        }
    }
    if (!nextOrObserver && !error && !complete) {
        return new _Subscriber__WEBPACK_IMPORTED_MODULE_0__.Subscriber(_Observer__WEBPACK_IMPORTED_MODULE_2__.empty);
    }
    return new _Subscriber__WEBPACK_IMPORTED_MODULE_0__.Subscriber(nextOrObserver, error, complete);
}


/***/ }),

/***/ "./node_modules/rxjs/node_modules/tslib/tslib.es6.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/node_modules/tslib/tslib.es6.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__extends": () => (/* binding */ __extends),
/* harmony export */   "__assign": () => (/* binding */ __assign),
/* harmony export */   "__rest": () => (/* binding */ __rest),
/* harmony export */   "__decorate": () => (/* binding */ __decorate),
/* harmony export */   "__param": () => (/* binding */ __param),
/* harmony export */   "__metadata": () => (/* binding */ __metadata),
/* harmony export */   "__awaiter": () => (/* binding */ __awaiter),
/* harmony export */   "__generator": () => (/* binding */ __generator),
/* harmony export */   "__createBinding": () => (/* binding */ __createBinding),
/* harmony export */   "__exportStar": () => (/* binding */ __exportStar),
/* harmony export */   "__values": () => (/* binding */ __values),
/* harmony export */   "__read": () => (/* binding */ __read),
/* harmony export */   "__spread": () => (/* binding */ __spread),
/* harmony export */   "__spreadArrays": () => (/* binding */ __spreadArrays),
/* harmony export */   "__await": () => (/* binding */ __await),
/* harmony export */   "__asyncGenerator": () => (/* binding */ __asyncGenerator),
/* harmony export */   "__asyncDelegator": () => (/* binding */ __asyncDelegator),
/* harmony export */   "__asyncValues": () => (/* binding */ __asyncValues),
/* harmony export */   "__makeTemplateObject": () => (/* binding */ __makeTemplateObject),
/* harmony export */   "__importStar": () => (/* binding */ __importStar),
/* harmony export */   "__importDefault": () => (/* binding */ __importDefault),
/* harmony export */   "__classPrivateFieldGet": () => (/* binding */ __classPrivateFieldGet),
/* harmony export */   "__classPrivateFieldSet": () => (/* binding */ __classPrivateFieldSet)
/* harmony export */ });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/BasePlugin/AudioPlugin.ts":
/*!***************************************!*\
  !*** ./src/BasePlugin/AudioPlugin.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AudioPlugin": () => (/* binding */ AudioPlugin)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/BasePlugin/index.ts");

class AudioPlugin extends _index__WEBPACK_IMPORTED_MODULE_0__.BasePlugin {
    constructor(factory, pluginOwner, prototypeObject) {
        super(factory, pluginOwner, prototypeObject);
        this.factory = factory;
        this.prototypeObject = prototypeObject;
    }
}


/***/ }),

/***/ "./src/BasePlugin/LinkedStoreInterface.ts":
/*!************************************************!*\
  !*** ./src/BasePlugin/LinkedStoreInterface.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LinkedStoreInterface": () => (/* binding */ LinkedStoreInterface)
/* harmony export */ });
class LinkedStoreInterface {
    constructor(owner, linkedStore) {
        this.owner = owner;
        this.linkedStore = linkedStore;
        this.listeners = new Map();
        linkedStore.addEventListener("altered", this);
    }
    handleEvent(e) {
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
    requestTerm(term) {
        return this.linkedStore.getTerm(term);
    }
    listenForTerm(term, callback) {
        if (this.listeners.hasOwnProperty(term)) {
            throw "Listener already exists";
        }
        this.listeners.set(term, callback);
    }
    releaseListenerForTerm(term) {
        this.listeners.delete(term);
    }
}


/***/ }),

/***/ "./src/BasePlugin/ParameterManager.ts":
/*!********************************************!*\
  !*** ./src/BasePlugin/ParameterManager.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NumberParameter": () => (/* reexport safe */ _parameters_NumberParameter__WEBPACK_IMPORTED_MODULE_0__.NumberParameter),
/* harmony export */   "StringParameter": () => (/* reexport safe */ _parameters_StringParameter__WEBPACK_IMPORTED_MODULE_1__.StringParameter),
/* harmony export */   "ButtonParameter": () => (/* reexport safe */ _parameters_ButtonParameter__WEBPACK_IMPORTED_MODULE_2__.ButtonParameter),
/* harmony export */   "SwitchParameter": () => (/* reexport safe */ _parameters_SwitchParameter__WEBPACK_IMPORTED_MODULE_3__.SwitchParameter),
/* harmony export */   "ListParameter": () => (/* reexport safe */ _parameters_ListParameter__WEBPACK_IMPORTED_MODULE_4__.ListParameter),
/* harmony export */   "URLParameter": () => (/* reexport safe */ _parameters_URLParameter__WEBPACK_IMPORTED_MODULE_5__.URLParameter),
/* harmony export */   "AssetParameter": () => (/* reexport safe */ _parameters_AssetParameter__WEBPACK_IMPORTED_MODULE_6__.AssetParameter),
/* harmony export */   "ParameterManager": () => (/* binding */ ParameterManager)
/* harmony export */ });
/* harmony import */ var _parameters_NumberParameter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parameters/NumberParameter */ "./src/BasePlugin/parameters/NumberParameter.ts");
/* harmony import */ var _parameters_StringParameter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parameters/StringParameter */ "./src/BasePlugin/parameters/StringParameter.ts");
/* harmony import */ var _parameters_ButtonParameter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parameters/ButtonParameter */ "./src/BasePlugin/parameters/ButtonParameter.ts");
/* harmony import */ var _parameters_SwitchParameter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parameters/SwitchParameter */ "./src/BasePlugin/parameters/SwitchParameter.ts");
/* harmony import */ var _parameters_ListParameter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./parameters/ListParameter */ "./src/BasePlugin/parameters/ListParameter.ts");
/* harmony import */ var _parameters_URLParameter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./parameters/URLParameter */ "./src/BasePlugin/parameters/URLParameter.ts");
/* harmony import */ var _parameters_AssetParameter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./parameters/AssetParameter */ "./src/BasePlugin/parameters/AssetParameter.ts");
/* harmony import */ var _parameters_IPluginParameter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./parameters/IPluginParameter */ "./src/BasePlugin/parameters/IPluginParameter.ts");
/* jshint esversion: 6 */









function formatParameterName(name) {
    name = name.toLowerCase();
    name = name.replace("/", "_");
    return name;
}
class ParameterManager {
    constructor(owner, pluginExternalInterface, name = "default", exposed = true) {
        this.owner = owner;
        this.pluginExternalInterface = pluginExternalInterface;
        this.name = name;
        this.exposed = exposed;
        this.parameterList = [];
        this.eventTarget = new EventTarget();
        this.visibleName = this.name;
    }
    findParameter(baseName) {
        let name = baseName.replace("/", "_").split(".").reverse();
        const lowerCaseParameterNames = this.parameterList.map(i => formatParameterName(i.name));
        const param = this.parameterList[lowerCaseParameterNames.indexOf(name.pop().toLowerCase())];
        if (param instanceof ParameterManager && name.length > 0) {
            return param.getParameterByName(name.reverse().join("."));
        }
        else {
            return param;
        }
    }
    isParameterNameAvailable(name) {
        name = formatParameterName(name);
        if (!/^\w+( \w+)*(-\w+)*(_\w+)*$/.test(name)) {
            console.warn("Invalid string for name", name, "Will not expose as dot notations");
            return true;
        }
        if (self.hasOwnProperty(name)) {
            throw new Error("Name is reserved or already defined");
        }
        return true;
    }
    buildParameterObject() {
        const obj = {};
        this.parameterList.filter(function (p) {
            return p.exposed;
        }).forEach(function (e) {
            obj[e.name] = e.getParameterObject();
        });
        return obj;
    }
    addParameter(param) {
        if (param.name.includes(".")) {
            throw ("Name cannot include a period");
        }
        var exists = this.parameterList.findIndex(function (e) {
            return e === param;
        }, param);
        if (exists === -1) {
            Object.defineProperty(this, param.name, {
                value: param
            });
            this.parameterList.push(param);
        }
        return param;
    }
    addEventListener(type, listener, options) {
        return this.eventTarget.addEventListener(type, listener, options);
    }
    removeEventListener(type, listener, options) {
        return this.eventTarget.removeEventListener(type, listener, options);
    }
    handleEvent(e) {
        let detail = e.detail;
        if (detail.updateInterfaces === true) {
            this.pluginExternalInterface.updateInterfaces();
        }
        if (this.name !== "default") {
            detail.parameter.name = `${this.name}.${detail.parameter.name}`;
        }
        if (e.type == "parameterset" && detail !== undefined) {
            this.eventTarget.dispatchEvent(new CustomEvent("parameterset", { detail: detail }));
        }
    }
    destroy() {
        this.deleteAllParameters();
    }
    createNumberParameter(name, defaultValue, minimum, maximum, toStringFunc, visibleName, exposed) {
        if (typeof name !== "string" || typeof defaultValue !== "number" || (minimum !== undefined && typeof minimum !== "number") || (maximum !== undefined && typeof maximum !== "number")) {
            throw ("Invlid constructor");
        }
        if (typeof toStringFunc != "function" && toStringFunc !== undefined) {
            throw ("toStringFunc must be a function or undefined");
        }
        name = name.toLowerCase();
        if (this.isParameterNameAvailable(name)) {
            const param = new _parameters_NumberParameter__WEBPACK_IMPORTED_MODULE_0__.NumberParameter(this.owner, name, defaultValue, minimum, maximum, toStringFunc, visibleName, exposed);
            this.addParameter(param);
            param.addEventListener("parameterset", this);
            return param;
        }
    }
    createStringParameter(name, defaultValue, maxLength, toStringFunc, visibleName, exposed) {
        if (typeof name !== "string" || typeof defaultValue !== "string" || (maxLength !== undefined && typeof maxLength !== "number")) {
            throw ("Invlid constructor");
        }
        if (typeof toStringFunc != "function" && toStringFunc !== undefined) {
            throw ("toStringFunc must be a function or undefined");
        }
        name = name.toLowerCase();
        if (this.isParameterNameAvailable(name)) {
            var param = new _parameters_StringParameter__WEBPACK_IMPORTED_MODULE_1__.StringParameter(this.owner, name, defaultValue, maxLength, toStringFunc, visibleName, exposed);
            this.addParameter(param);
            param.addEventListener("parameterset", this);
            return param;
        }
    }
    createButtonParameter(name, visibleName, exposed) {
        if (typeof name !== "string") {
            throw ("Invalid constructor");
        }
        name = name.toLowerCase();
        if (this.isParameterNameAvailable(name)) {
            const param = new _parameters_ButtonParameter__WEBPACK_IMPORTED_MODULE_2__.ButtonParameter(this.owner, name, visibleName, exposed);
            this.addParameter(param);
            param.addEventListener("parameterset", this);
            return param;
        }
    }
    createSwitchParameter(name, defaultValue, minState, maxState, toStringFunc, visibleName, exposed) {
        if (typeof name !== "string" || typeof defaultValue !== "number" || typeof minState !== "number" || typeof maxState !== "number") {
            throw ("Invlid constructor");
        }
        if (typeof toStringFunc != "function" && toStringFunc !== undefined) {
            throw ("toStringFunc must be a function or undefined");
        }
        name = name.toLowerCase();
        if (this.isParameterNameAvailable(name)) {
            const param = new _parameters_SwitchParameter__WEBPACK_IMPORTED_MODULE_3__.SwitchParameter(this.owner, name, defaultValue, minState, maxState, toStringFunc, visibleName, exposed);
            this.addParameter(param);
            param.addEventListener("parameterset", this);
            return param;
        }
    }
    createListParameter(name, defaultValue, listOfValues, toStringFunc, visibleName, exposed) {
        if (typeof name !== "string" || typeof defaultValue === "undefined" || !Array.isArray(listOfValues)) {
            throw ("Invlid constructor");
        }
        if (typeof toStringFunc != "function" && toStringFunc !== undefined) {
            throw ("toStringFunc must be a function or undefined");
        }
        if (listOfValues.includes(defaultValue) === false) {
            throw ("Invlid constructor - default value missing");
        }
        name = name.toLowerCase();
        if (this.isParameterNameAvailable(name)) {
            const param = new _parameters_ListParameter__WEBPACK_IMPORTED_MODULE_4__.ListParameter(this.owner, name, defaultValue, listOfValues, toStringFunc, visibleName, exposed);
            this.addParameter(param);
            param.addEventListener("parameterset", this);
            return param;
        }
    }
    createURLParameter(name, defaultValue, maxLength, toStringFunc, visibleName, exposed) {
        if (typeof name !== "string" || (maxLength !== undefined && typeof maxLength !== "number")) {
            throw ("Invlid constructor");
        }
        if (typeof toStringFunc != "function" && toStringFunc !== undefined) {
            throw ("toStringFunc must be a function or undefined");
        }
        name = name.toLowerCase();
        if (this.isParameterNameAvailable(name)) {
            const param = new _parameters_URLParameter__WEBPACK_IMPORTED_MODULE_5__.URLParameter(this.owner, name, defaultValue, maxLength, toStringFunc, visibleName, exposed);
            this.addParameter(param);
            param.addEventListener("parameterset", this);
            return param;
        }
    }
    createAssetParameter(name, visibleName, exposed) {
        if (typeof name !== "string") {
            throw ("Invlid constructor");
        }
        name = name.toLowerCase();
        if (this.isParameterNameAvailable(this)) {
            const param = new _parameters_AssetParameter__WEBPACK_IMPORTED_MODULE_6__.AssetParameter(this.owner, name, visibleName, exposed);
            this.addParameter(param);
            param.addEventListener("parameterset", this);
            return param;
        }
    }
    createParameterManager(name, visibleName, exposed) {
        if (typeof name !== "string") {
            throw ("Invlid constructor");
        }
        name = name.toLowerCase();
        if (this.isParameterNameAvailable(this)) {
            const param = new ParameterManager(this.owner, this.pluginExternalInterface, name, exposed);
            this.addParameter(param);
            param.addEventListener("parameterset", this);
            return param;
        }
    }
    getParameterByName(name) {
        return this.findParameter(name);
    }
    getParameterObject() {
        return this.buildParameterObject();
    }
    getParameterNames() {
        return this.parameterList.filter((p) => {
            return p.exposed;
        }).map((p) => {
            if (p instanceof ParameterManager) {
                return p.getParameterNames().map(recursiveName => `${p.name}.${recursiveName}`);
            }
            else {
                return [p.name];
            }
        }).flat();
    }
    setParameterByName(name, value, updateInterfaces = true) {
        var parameter = this.findParameter(name);
        if (!parameter) {
            return;
        }
        if (parameter.exposed === false) {
            console.warn("Cannot set hidden parameter");
            return;
        }
        if ((0,_parameters_IPluginParameter__WEBPACK_IMPORTED_MODULE_7__.isPluginParameter)(parameter)) {
            parameter.setValue(value, updateInterfaces);
        }
    }
    deleteParameter(parameter) {
        const index = this.parameterList.findIndex(e => e === parameter);
        if (index >= 0) {
            // Does exist
            this.parameterList.splice(index, 1);
            Object.defineProperty(this, parameter.name, {
                value: undefined
            });
            parameter.destroy();
            return true;
        }
        return false;
    }
    deleteAllParameters() {
        for (const parameter of Array.from(this.parameterList)) {
            this.deleteParameter(parameter);
        }
        return true;
    }
    setParametersByObject(object, updateInterfaces = true) {
        for (const key in object) {
            if (object.hasOwnProperty(key)) {
                const entry = object[key];
                if (typeof entry === 'object') {
                    let parameter = this.findParameter(key);
                    if (parameter instanceof ParameterManager) {
                        // Nested Parameter store
                        if (!(0,_parameters_IPluginParameter__WEBPACK_IMPORTED_MODULE_7__.isPluginParameterObject)(entry)) {
                            parameter.setParametersByObject(entry, updateInterfaces);
                        }
                    }
                    else if ((0,_parameters_IPluginParameter__WEBPACK_IMPORTED_MODULE_7__.isPluginParameter)(parameter) && entry.hasOwnProperty("value")) {
                        this.setParameterByName(key, entry.value, updateInterfaces);
                    }
                    else {
                        this.setParameterByName(key, entry, updateInterfaces);
                    }
                }
                else if (typeof entry == "number" || typeof entry == "string") {
                    this.setParameterByName(key, entry, updateInterfaces);
                }
                else {
                    throw ("Cannot set " + key + ": Not a valid object");
                }
            }
        }
    }
    toJSON() {
        return this.parameterList.filter(p => p.exposed)
            .reduce(function (obj, e) {
            if (e instanceof ParameterManager) {
                obj[e.name] = e.toJSON();
            }
            else if ((0,_parameters_IPluginParameter__WEBPACK_IMPORTED_MODULE_7__.isPluginParameter)(e)) {
                obj[e.name] = e.getParameterObject();
            }
            return obj;
        }, {});
    }
    get parameters() { return this.buildParameterObject(); }
    get numParameters() { return this.parameterList.length; }
}


/***/ }),

/***/ "./src/BasePlugin/PluginFeatureInterface/PluginFeatureInterfaceReceiver.ts":
/*!*********************************************************************************!*\
  !*** ./src/BasePlugin/PluginFeatureInterface/PluginFeatureInterfaceReceiver.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PluginFeatureInterfaceReceiver": () => (/* binding */ PluginFeatureInterfaceReceiver)
/* harmony export */ });
function checkFeatureArgs(source, featureObject) {
    if (source === undefined) {
        throw ("Source plugin must be defined");
    }
    if (featureObject === undefined) {
        throw ("FeatureObject must be defined");
    }
    if (typeof featureObject.outputIndex !== "number" || typeof featureObject.frameSize !== "number" || typeof featureObject.features !== "object") {
        throw ("Malformed featureObject");
    }
    return true;
}
/* jshint esversion: 6 */
class PluginFeatureInterfaceReceiver {
    constructor(FeatureInterfaceInstance, FactoryFeatureMap) {
        this.FeatureInterfaceInstance = FeatureInterfaceInstance;
        this.FactoryFeatureMap = FactoryFeatureMap;
    }
    requestFeatures(featureList) {
        for (let i = 0; i < featureList.length; i++) {
            this.requestFeaturesFromPlugin(featureList[i].plugin, {
                'outputIndex': featureList[i].outputIndex,
                'frameSize': featureList[i].frameSize,
                'features': featureList[i].features
            });
        }
    }
    requestFeaturesFromPlugin(source, featureObject) {
        checkFeatureArgs(source, featureObject);
        this.FactoryFeatureMap.requestFeatures(this, source.featureMap.Sender, featureObject);
    }
    cancelFeaturesFromPlugin(source, featureObject) {
        checkFeatureArgs(source, featureObject);
        this.FactoryFeatureMap.deleteFeatures(this, source.featureMap.Sender, featureObject);
    }
    cancelAllFeaturesFromPlugin(source) {
        if (source === undefined) {
            throw ("Source plugin must be defined");
        }
        this.FactoryFeatureMap.deleteFeatures(this, source.featureMap.Sender);
    }
    cancelAllFeatures() {
        this.FactoryFeatureMap.deleteFeatures(this);
    }
    postFeatures(message) {
        /*
            Called by the Plugin Factory with the feature message
            message = {
                'plugin': sourcePluginInstance,
                'outputIndex': outputIndex,
                'frameSize': frameSize,
                'features': {} JS-Xtract feature results object
            }
        */
        if (typeof this.c_features === "function") {
            this.c_features(message);
        }
    }
    ;
    get onfeatures() { return this.c_features; }
    set onfeatures(func) { this.c_features = func; }
}


/***/ }),

/***/ "./src/BasePlugin/PluginFeatureInterface/PluginFeatureInterfaceSender.ts":
/*!*******************************************************************************!*\
  !*** ./src/BasePlugin/PluginFeatureInterface/PluginFeatureInterfaceSender.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PluginFeatureInterfaceSender": () => (/* binding */ PluginFeatureInterfaceSender)
/* harmony export */ });
/* harmony import */ var _Factory_Extractors_OutputNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Factory/Extractors/OutputNode */ "./src/Factory/Extractors/OutputNode.ts");

class PluginFeatureInterfaceSender {
    constructor(FeatureInterfaceInstance, FactoryFeatureMap) {
        this.FeatureInterfaceInstance = FeatureInterfaceInstance;
        this.FactoryFeatureMap = FactoryFeatureMap;
        this.outputNodes = [];
    }
    updateFeatures(featureObject, outputIndex = 0) {
        if (this.outputNodes[outputIndex] === undefined) {
            if (outputIndex > this.FeatureInterfaceInstance.numOutputs) {
                throw new Error("Requested an output that does not exist");
            }
            this.outputNodes[outputIndex] = new _Factory_Extractors_OutputNode__WEBPACK_IMPORTED_MODULE_0__.OutputNode(this, this.FeatureInterfaceInstance.outputs[outputIndex], outputIndex);
        }
        for (let si = 0; si < featureObject.length; si++) {
            let extractor = this.outputNodes[outputIndex].findExtractor(featureObject[si].frameSize);
            if (!extractor) {
                extractor = this.outputNodes[outputIndex].addExtractor(featureObject[si].frameSize);
            }
            extractor.setFeatures(featureObject[si].features);
        }
    }
    postFeatures(featureObject) {
        /*
            Called by the individual extractor instances:
            featureObject = {'frameSize': frameSize,
            'outputIndex': outputIndex,
            'results':[]}
        */
        this.FeatureInterfaceInstance.factory.FeatureMap.postFeatures({
            'source': this,
            'outputIndex': featureObject.outputIndex,
            'frameSize': featureObject.frameSize,
            'results': featureObject.results
        });
    }
    ;
}


/***/ }),

/***/ "./src/BasePlugin/PluginFeatureInterface/index.ts":
/*!********************************************************!*\
  !*** ./src/BasePlugin/PluginFeatureInterface/index.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PluginFeatureInterface": () => (/* binding */ PluginFeatureInterface)
/* harmony export */ });
/* harmony import */ var _PluginFeatureInterfaceReceiver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PluginFeatureInterfaceReceiver */ "./src/BasePlugin/PluginFeatureInterface/PluginFeatureInterfaceReceiver.ts");
/* harmony import */ var _PluginFeatureInterfaceSender__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PluginFeatureInterfaceSender */ "./src/BasePlugin/PluginFeatureInterface/PluginFeatureInterfaceSender.ts");


class PluginFeatureInterface {
    constructor(plugin) {
        this.plugin = plugin;
        this.Receiver = new _PluginFeatureInterfaceReceiver__WEBPACK_IMPORTED_MODULE_0__.PluginFeatureInterfaceReceiver(this.plugin, this.plugin.factory.FeatureMap);
        this.Sender = new _PluginFeatureInterfaceSender__WEBPACK_IMPORTED_MODULE_1__.PluginFeatureInterfaceSender(this.plugin, this.plugin.factory.FeatureMap);
    }
    get onfeatures() { return this.Receiver.onfeatures; }
    set onfeatures(func) { this.Receiver.onfeatures = func; }
}


/***/ }),

/***/ "./src/BasePlugin/PluginInterfaceMessageHub.ts":
/*!*****************************************************!*\
  !*** ./src/BasePlugin/PluginInterfaceMessageHub.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PluginInterfaceMessageHub": () => (/* binding */ PluginInterfaceMessageHub)
/* harmony export */ });
/* harmony import */ var _parameters_IPluginParameter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parameters/IPluginParameter */ "./src/BasePlugin/parameters/IPluginParameter.ts");

class PluginInterfaceMessageHub {
    constructor(owner) {
        this.owner = owner;
        this.windowMessageList = [];
        this.eventTarget = new EventTarget();
        window.addEventListener("message", this);
    }
    buildPluginParameterJSON(sources) {
        const names = this.owner.parameters.getParameterNames();
        const O = {};
        if (sources.length == 0) {
            sources = names;
        }
        names.filter((name) => sources.includes(name)).forEach((name) => {
            const param = this.owner.parameters.getParameterByName(name);
            if ((0,_parameters_IPluginParameter__WEBPACK_IMPORTED_MODULE_0__.isPluginParameter)(param)) {
                O[name] = param.getParameterObject();
                O[name].name = name;
                if ((0,_parameters_IPluginParameter__WEBPACK_IMPORTED_MODULE_0__.isAutomatedPluginParameter)(param)) {
                    O[name].automated = param.enabled;
                }
            }
        });
        return O;
    }
    buildParameterUpdatePayload(sender_id, sources = []) {
        const msg = {
            sender_id,
            message: "updateParameters",
            parameters: this.buildPluginParameterJSON(sources)
        };
        return msg;
    }
    sendParameterUpdates(channel, sources = []) {
        channel.postMessage(this.buildParameterUpdatePayload(undefined, sources), location.origin);
    }
    broadcastParameterUpdates(sender_id, sources) {
        const msg = this.buildParameterUpdatePayload(sender_id, sources);
        this.windowMessageList.forEach(function (w) {
            w.postMessage(msg, location.origin);
        });
    }
    broadcastStateChange(level, term, value) {
        var msg = {
            message: "updateState",
            level,
            term,
            value
        };
        this.windowMessageList.forEach(function (w) {
            w.postMessage(msg, location.origin);
        });
    }
    setParameterMessage(e) {
        const updateObjects = [];
        const parameters = JSON.parse(e.data.parameters);
        Object.keys(parameters).forEach((name) => {
            const parameterObject = this.owner.parameters.getParameterByName(name);
            if ((0,_parameters_IPluginParameter__WEBPACK_IMPORTED_MODULE_0__.isPluginParameter)(parameterObject)) {
                parameterObject.setValue(parameters[name].value, false);
                updateObjects.push(name);
            }
        });
        return updateObjects;
    }
    destroy() {
        window.removeEventListener("message", this);
    }
    addEventListener(type, listener, options) {
        this.eventTarget.addEventListener(type, listener, options);
    }
    removeEventListener(type, listener, options) {
        this.eventTarget.removeEventListener(type, listener, options);
    }
    handleEvent(e) {
        if (!this.windowMessageList.includes(e.source)) {
            return;
        }
        const window = e.source;
        switch (e.data.message) {
            case "setParameterByName":
                if (e.data.parameter.name) {
                    const parameterObject = this.owner.parameters.getParameterByName(e.data.parameter.name);
                    if ((0,_parameters_IPluginParameter__WEBPACK_IMPORTED_MODULE_0__.isPluginParameter)(parameterObject)) {
                        parameterObject.setValue(e.data.parameter.value, false);
                        this.broadcastParameterUpdates(e.data.sender_id, [e.data.parameter.name]);
                    }
                }
                break;
            case "setParametersByObject":
                if (e.data.parameter) {
                    const updateObjects = this.setParameterMessage(e);
                    this.broadcastParameterUpdates(e.data.sender_id, updateObjects);
                }
                break;
            case "requestParameters":
                if (typeof e.data.name == "string") {
                    this.sendParameterUpdates(window, [e.data.name]);
                }
                else {
                    this.sendParameterUpdates(window);
                }
                break;
            case "requestSessionState":
                this.broadcastStateChange("session", e.data.term, this.owner.sessionDataInterface.requestTerm(e.data.term));
                break;
            case "requestTrackState":
                this.broadcastStateChange("track", e.data.term, this.owner.trackDataInterface.requestTerm(e.data.term));
                break;
            case "requestUserState":
                this.broadcastStateChange("user", e.data.term, this.owner.userDataInterface.requestTerm(e.data.term));
                break;
            case "requestPluginState":
                this.broadcastStateChange("plugin", e.data.term, this.owner.pluginDataInterface.requestTerm(e.data.term));
                break;
            case "customMessage":
                break;
            default:
                throw ("Unknown message type \"" + e.data.message + "\"");
        }
    }
    sendState(level, term) {
        if (level == "session") {
            this.broadcastStateChange("session", term, this.owner.sessionDataInterface.requestTerm(term));
        }
        else if (level == "track") {
            this.broadcastStateChange("track", term, this.owner.trackDataInterface.requestTerm(term));
        }
        else if (level == "user") {
            this.broadcastStateChange("user", term, this.owner.userDataInterface.requestTerm(term));
        }
        else if (level == "plugin") {
            this.broadcastStateChange("plugin", term, this.owner.pluginDataInterface.requestTerm(term));
        }
        else {
            throw "Invalid state level option";
        }
    }
    updateInterfaces(automationOnly = false) {
        if (automationOnly === undefined) {
            automationOnly = false;
        }
        if (automationOnly) {
            const parameterNames = this.owner.parameters.getParameterNames();
            const sources = parameterNames.filter((name) => {
                const param = this.owner.parameters.getParameterByName(name);
                return ((0,_parameters_IPluginParameter__WEBPACK_IMPORTED_MODULE_0__.isAutomatedPluginParameter)(param) && param.enabled === true);
            });
            if (sources.length > 0) {
                this.broadcastParameterUpdates(undefined, sources);
            }
        }
        else {
            this.broadcastParameterUpdates();
        }
    }
    closeWindows() {
        while (this.windowMessageList.length > 0) {
            const w = this.windowMessageList.pop();
            w.close();
        }
        window.removeEventListener("message", this);
    }
    registerWindow(w) {
        const pluginWindow = w;
        if (this.windowMessageList.includes(pluginWindow)) {
            this.windowMessageList.splice(this.windowMessageList.indexOf(pluginWindow), 1);
        }
        this.windowMessageList.push(pluginWindow);
        pluginWindow.pluginInstance = this.owner;
        this.sendParameterUpdates(pluginWindow);
        return true;
    }
    removeWindow(w) {
        if (this.windowMessageList.includes(w)) {
            this.windowMessageList.splice(this.windowMessageList.indexOf(w), 1);
        }
    }
}


/***/ }),

/***/ "./src/BasePlugin/index.ts":
/*!*********************************!*\
  !*** ./src/BasePlugin/index.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LinkedStoreInterface": () => (/* reexport safe */ _LinkedStoreInterface__WEBPACK_IMPORTED_MODULE_4__.LinkedStoreInterface),
/* harmony export */   "ParameterManager": () => (/* reexport safe */ _ParameterManager__WEBPACK_IMPORTED_MODULE_0__.ParameterManager),
/* harmony export */   "NumberParameter": () => (/* reexport safe */ _ParameterManager__WEBPACK_IMPORTED_MODULE_0__.NumberParameter),
/* harmony export */   "StringParameter": () => (/* reexport safe */ _ParameterManager__WEBPACK_IMPORTED_MODULE_0__.StringParameter),
/* harmony export */   "ButtonParameter": () => (/* reexport safe */ _ParameterManager__WEBPACK_IMPORTED_MODULE_0__.ButtonParameter),
/* harmony export */   "SwitchParameter": () => (/* reexport safe */ _ParameterManager__WEBPACK_IMPORTED_MODULE_0__.SwitchParameter),
/* harmony export */   "ListParameter": () => (/* reexport safe */ _ParameterManager__WEBPACK_IMPORTED_MODULE_0__.ListParameter),
/* harmony export */   "URLParameter": () => (/* reexport safe */ _ParameterManager__WEBPACK_IMPORTED_MODULE_0__.URLParameter),
/* harmony export */   "AssetParameter": () => (/* reexport safe */ _ParameterManager__WEBPACK_IMPORTED_MODULE_0__.AssetParameter),
/* harmony export */   "BasePlugin": () => (/* binding */ BasePlugin)
/* harmony export */ });
/* harmony import */ var _ParameterManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ParameterManager */ "./src/BasePlugin/ParameterManager.ts");
/* harmony import */ var _PluginInterfaceMessageHub__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PluginInterfaceMessageHub */ "./src/BasePlugin/PluginInterfaceMessageHub.ts");
/* harmony import */ var _PluginFeatureInterface_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PluginFeatureInterface/index */ "./src/BasePlugin/PluginFeatureInterface/index.ts");
/* harmony import */ var _LinkedStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../LinkedStore */ "./src/LinkedStore.ts");
/* harmony import */ var _LinkedStoreInterface__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LinkedStoreInterface */ "./src/BasePlugin/LinkedStoreInterface.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/internal/observable/of.js");
// Add getInputs to all AudioNodes to ease deployment
/*globals AudioNode, Worker, console, window, document, Promise, XMLHttpRequest */
/*eslint-env browser */
/*jshint esversion: 6 */






// if (typeof AudioNode === "function" && window.importScripts === undefined) {
//     AudioNode.prototype.getInputs = function () {
//         return [this];
//     };
// }

class BasePlugin {
    constructor(factory, pluginOwner, prototypeObject) {
        this.factory = factory;
        this.pluginOwner = pluginOwner;
        this.prototypeObject = prototypeObject;
        this.inputList = [];
        this.outputList = [];
        this.delaySamples = 0;
        this.eventTarget = new EventTarget();
        this.externalInterface = new _PluginInterfaceMessageHub__WEBPACK_IMPORTED_MODULE_1__.PluginInterfaceMessageHub(this);
        this.context = this.factory.context;
        this.featureMap = new _PluginFeatureInterface_index__WEBPACK_IMPORTED_MODULE_2__.PluginFeatureInterface(this);
        this.parameters = new _ParameterManager__WEBPACK_IMPORTED_MODULE_0__.ParameterManager(this, this.externalInterface);
        this.PluginData = new _LinkedStore__WEBPACK_IMPORTED_MODULE_3__.LinkedStore("Plugin");
        this.sessionDataInterface = new _LinkedStoreInterface__WEBPACK_IMPORTED_MODULE_4__.LinkedStoreInterface(this, this.factory.SessionData);
        this.userDataInterface = new _LinkedStoreInterface__WEBPACK_IMPORTED_MODULE_4__.LinkedStoreInterface(this, this.factory.UserData);
        this.trackDataInterface = new _LinkedStoreInterface__WEBPACK_IMPORTED_MODULE_4__.LinkedStoreInterface(this, this.TrackData);
        this.pluginDataInterface = new _LinkedStoreInterface__WEBPACK_IMPORTED_MODULE_4__.LinkedStoreInterface(this, this.PluginData);
        this.SessionData = this.factory.SessionData;
        this.UserData = this.factory.UserData;
        this.name = this.prototypeObject.name;
        this.uniqueID = this.prototypeObject.uniqueID;
        this.version = this.prototypeObject.version;
        this.parameters.addEventListener("parameterset", (e) => {
            this.eventTarget.dispatchEvent(new CustomEvent("parameterset", { detail: e.detail }));
        });
    }
    start() { }
    stop(ct) { }
    onloaded() { }
    onunloaded() { }
    deconstruct() { }
    deleteIO(node, list) {
        var i = list.findIndex((e) => {
            return e === node;
        });
        if (i === -1) {
            return false;
        }
        list.splice(i, 1);
        return true;
    }
    changeOwner(newOwner) {
        this.pluginOwner = newOwner;
    }
    delete() {
        this.sessionDataInterface.destroy();
        this.userDataInterface.destroy();
        this.trackDataInterface.destroy();
        this.pluginDataInterface.destroy();
        this.stop();
        this.onunloaded();
        if (this.deconstruct && typeof this.deconstruct == "function") {
            this.deconstruct();
        }
    }
    // Depcrecated - Use .delete() instead
    destroy() {
        console.error("DEPRECATED - Use .delete() instead");
        this.delete();
    }
    addInput(node) {
        this.inputList.push(node);
        return this.inputList;
    }
    deleteInput(node) {
        this.deleteIO(node, this.inputList);
        return this.inputList;
    }
    addOutput(node) {
        this.outputList.push(node);
        return this.outputList;
    }
    ;
    deleteOutput(node) {
        this.deleteIO(node, this.outputList);
        return this.outputList;
    }
    ;
    setProcessingDelayAsSeconds(seconds) {
        const fs = this.factory.context.sampleRate;
        if (typeof seconds == "number" && isFinite(seconds) && seconds >= 0) {
            return this.setProcessingDelayAsSamples(seconds * fs) / fs;
        }
        throw new Error("setProcessingDelayAsSeconds Invalid argument");
    }
    setProcessingDelayAsSamples(samples) {
        if (typeof samples == "number" && isFinite(samples) && samples >= 0) {
            this.delaySamples = samples;
            const e = new Event("alterdelay");
            this.eventTarget.dispatchEvent(e);
            return this.delaySamples;
        }
        else {
            throw new Error("setProcessingDelayAsSamples Invalid argument");
        }
    }
    connect(dest, output, input) {
        if (dest instanceof AudioParam) {
            this.outputs[0].connect(dest, output);
        }
        else {
            this.outputs[0].connect(dest, output, input);
        }
    }
    disconnect(dest, output, input) {
        if (dest === undefined) {
            this.outputs[0].disconnect();
        }
        else {
            if (dest instanceof AudioParam) {
                this.outputs[0].disconnect(dest, output);
            }
            else {
                this.outputs[0].disconnect(dest, output, input);
            }
        }
    }
    getInputs() { return this.inputList; }
    getOutputs() { return this.outputList; }
    getParameterNames() { return this.parameters.getParameterNames(); }
    getParameterByName(name) { return this.parameters.getParameterByName(name); }
    getParameterObject() { return this.parameters.getParameterObject(); }
    setParameterByName(name, value, updateInterfaces = true) { return this.parameters.setParameterByName(name, value, updateInterfaces); }
    setParametersByObject(object, updateInterfaces) { return this.parameters.setParametersByObject(object, updateInterfaces); }
    addEventListener(type, listener, options) {
        return this.eventTarget.addEventListener(type, listener, options);
    }
    removeEventListener(type, listener, options) {
        return this.eventTarget.removeEventListener(type, listener, options);
    }
    isReadyPromise() {
        return Promise.resolve(true);
    }
    loadingProgress$() {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)({
            numberOfAssets: 0,
            loaded: true,
            numberOfAssetsLoaded: 0
        });
    }
    get owner() { return this.pluginOwner; }
    get numInputs() { return this.inputList.length; }
    get numOutputs() { return this.outputList.length; }
    get numParameters() { return this.parameters.numParameters; }
    get inputs() { return this.inputList; }
    get outputs() { return this.outputList; }
    get processingDelayAsSamples() { return this.delaySamples; }
    set processingDelayAsSamples(samples) { this.setProcessingDelayAsSamples(samples); }
    get processingDelayAsSeconds() { return this.delaySamples / this.factory.context.sampleRate; }
    set processingDelayAsSeconds(seconds) { this.setProcessingDelayAsSeconds(seconds); }
    get TrackData() { var _a; return (_a = this.pluginOwner) === null || _a === void 0 ? void 0 : _a.TrackData; }
}


/***/ }),

/***/ "./src/BasePlugin/parameters/AssetParameter.ts":
/*!*****************************************************!*\
  !*** ./src/BasePlugin/parameters/AssetParameter.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AssetParameter": () => (/* binding */ AssetParameter)
/* harmony export */ });
/* harmony import */ var _Factory_PluginAssets_PluginAsset__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Factory/PluginAssets/PluginAsset */ "./src/Factory/PluginAssets/PluginAsset.ts");
/* harmony import */ var _PluginParameter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PluginParameter */ "./src/BasePlugin/parameters/PluginParameter.ts");


class AssetParameter extends _PluginParameter__WEBPACK_IMPORTED_MODULE_1__.PluginParameter {
    constructor(owner, name, visibleName, exposed = true) {
        super(owner, name, "String", visibleName, exposed);
    }
    loadAsset() {
        this.loadAssetPromise = this.selectedAsset.fetch()
            .then((buffer) => {
            this.audioBuffer = buffer;
            this.selectedAsset.registerToPlugin(this.owner);
            if (typeof this.onloadCallback == "function") {
                this.onloadCallback(buffer);
            }
            return this;
        }, (e) => {
            if (typeof this.onerrorCallback == "function") {
                this.onerrorCallback(e);
            }
            return this;
        });
        return this.loadAssetPromise;
    }
    setValue(v, updateInterfaces = true) {
        let newSelectedAsset;
        if (v instanceof _Factory_PluginAssets_PluginAsset__WEBPACK_IMPORTED_MODULE_0__.PluginAsset) {
            newSelectedAsset = v;
        }
        else if (typeof v === "string" || typeof v === "number") {
            newSelectedAsset = this.owner.factory.pluginAssets.findAssetById(Number(v));
            if (newSelectedAsset === undefined) {
                newSelectedAsset = this.owner.factory.pluginAssets.findAssetByUrl(v.toString());
            }
        }
        else {
            if (v.hasOwnProperty('asset')) {
                newSelectedAsset = this.owner.factory.pluginAssets.findAssetByUrl(v.asset);
            }
            else if (v.hasOwnProperty('id')) {
                newSelectedAsset = this.owner.factory.pluginAssets.findAssetById(v.id);
            }
        }
        if (newSelectedAsset === undefined) {
            console.warn("No asset given, ", v);
            return this.selectedAsset;
        }
        if (this.selectedAsset === undefined || this.selectedAsset.id != newSelectedAsset.id) {
            // asset has changed url.
            if (this.selectedAsset !== undefined) {
                this.selectedAsset.deregisterFromPlugin(this.owner);
            }
            this.selectedAsset = newSelectedAsset;
            this.loadAsset();
            this.triggerParameterSet(updateInterfaces);
        }
        this.trigger();
        return this.selectedAsset;
    }
    destroy() {
    }
    getResource() {
        if (this.loadAssetPromise) {
            return this.loadAssetPromise;
        }
        else {
            return this.loadAsset();
        }
    }
    toString() {
        return this.selectedAsset.toString();
    }
    getParameterObject() {
        return {
            value: this.selectedAsset ? this.selectedAsset.toJSON() : undefined,
            loaded: (this.audioBuffer !== undefined),
            visibleName: this.name,
            type: "AssetParameter",
            name: this.name
        };
    }
    get onload() {
        return this.onloadCallback;
    }
    set onload(f) {
        this.onloadCallback = f;
    }
    get onerror() {
        return this.onerrorCallback;
    }
    set onerror(f) {
        this.onerrorCallback = f;
    }
    get isReadyPromise() {
        return this.loadAssetPromise;
    }
    get type() {
        return `Asset`;
    }
    get buffer() {
        return this.audioBuffer;
    }
    get value() {
        if (this.selectedAsset) {
            return this.selectedAsset.id;
        }
        else {
            return undefined;
        }
    }
    set value(v) {
        this.setValue(v, true);
    }
}


/***/ }),

/***/ "./src/BasePlugin/parameters/ButtonParameter.ts":
/*!******************************************************!*\
  !*** ./src/BasePlugin/parameters/ButtonParameter.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ButtonParameter": () => (/* binding */ ButtonParameter)
/* harmony export */ });
/* harmony import */ var _PluginParameter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PluginParameter */ "./src/BasePlugin/parameters/PluginParameter.ts");

/* jshint esversion: 6 */
class ButtonParameter extends _PluginParameter__WEBPACK_IMPORTED_MODULE_0__.PluginParameter {
    constructor(owner, name, visibleName, exposed = true) {
        super(owner, name, "Button", visibleName, exposed);
        this.onclickFunction = () => { };
    }
    destroy() {
    }
    getParameterObject() {
        return {
            visibleName: this.visibleName,
            type: "ButtonParameter",
            name: this.name
        };
    }
    get type() {
        return "Button";
    }
    ;
    get onclick() {
        return this.onclickFunction;
    }
    set onclick(f) {
        this.onclickFunction = f;
    }
}


/***/ }),

/***/ "./src/BasePlugin/parameters/IPluginParameter.ts":
/*!*******************************************************!*\
  !*** ./src/BasePlugin/parameters/IPluginParameter.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isPluginParameterObject": () => (/* binding */ isPluginParameterObject),
/* harmony export */   "isPluginBaseParameter": () => (/* binding */ isPluginBaseParameter),
/* harmony export */   "isPluginParameter": () => (/* binding */ isPluginParameter),
/* harmony export */   "isAutomatedPluginParameter": () => (/* binding */ isAutomatedPluginParameter)
/* harmony export */ });
function isPluginParameterObject(object) {
    return 'name' in object && 'visibleName' in object && 'type' in object;
}
function isPluginBaseParameter(object) {
    return 'getParameterObject' in object;
}
function isPluginParameter(object) {
    return isPluginBaseParameter(object) && 'setValue' in object;
}
function isAutomatedPluginParameter(object) {
    return isPluginParameter(object) && 'getValueAtTimePoint' in object;
}


/***/ }),

/***/ "./src/BasePlugin/parameters/ListParameter.ts":
/*!****************************************************!*\
  !*** ./src/BasePlugin/parameters/ListParameter.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListParameter": () => (/* binding */ ListParameter)
/* harmony export */ });
/* harmony import */ var _PluginParameter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PluginParameter */ "./src/BasePlugin/parameters/PluginParameter.ts");
/* harmony import */ var _ParameterAutomation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ParameterAutomation */ "./src/BasePlugin/parameters/ParameterAutomation.ts");
/* jshint esversion: 6 */


class ListParameter extends _PluginParameter__WEBPACK_IMPORTED_MODULE_0__.PluginParameter {
    constructor(owner, name, _defaultValue, listOfValues, toStringFunc, visibleName, exposed = true) {
        super(owner, name, "Button", visibleName, exposed);
        this._defaultValue = _defaultValue;
        this.listOfValues = listOfValues;
        this.toStringFunc = toStringFunc;
        this.listIndex = listOfValues.indexOf(_defaultValue);
    }
    setV(v, updateInterfaces = true) {
        const i = this.listOfValues.indexOf(v);
        if (i === undefined || i < 0) {
            throw ("Not in list range");
        }
        if (this.boundAudioParam) {
            this.boundAudioParam.value = this.update(v);
        }
        if (this.listIndex !== i) {
            this.listIndex = i;
            this.triggerParameterSet(updateInterfaces);
        }
        this.trigger();
        return this.listOfValues[this.listIndex];
    }
    isAutomatable() {
        if (!this.automatable) {
            throw new Error(`${this.type} is not automatable`);
        }
        return true;
    }
    destroy() {
    }
    setValue(v) {
        this.setV(v, true);
        return this.value;
    }
    increment() {
        var v = this.listIndex + 1;
        if (v >= this.listOfValues.length) {
            v = 0;
        }
        return this.setValue(this.listOfValues[this.listIndex]);
    }
    decrement() {
        var v = this.listIndex - 1;
        if (v < 0) {
            v = this.listOfValues.length - 1;
        }
        return this.setValue(this.listOfValues[this.listIndex]);
    }
    addOptionToList(t) {
        if (this.listOfValues.includes(t) === false) {
            this.listOfValues.push(t);
        }
        return this.listOfValues;
    }
    deleteOptionFromList(t) {
        const index = this.listOfValues.indexOf(t);
        const _value = this.listOfValues[this.listIndex];
        if (index == -1) {
            return;
        }
        const removedValue = this.listOfValues.splice(index, 1);
        if (_value === removedValue[0]) {
            this.listIndex = this.listIndex % this.listOfValues.length;
        }
        else {
            this.listIndex = this.listOfValues.indexOf(_value);
        }
        return this.listOfValues;
    }
    toString() {
        const v = this.value;
        if (typeof this.toStringFunc == "function") {
            return this.toStringFunc(v);
        }
        else if (typeof v.toString == "function") {
            return v.toString();
        }
        else {
            return String(v);
        }
    }
    getParameterObject() {
        return {
            value: this.value,
            options: this.listOfValues,
            defaultValue: this._defaultValue,
            minimum: 0,
            maximum: this.listOfValues.length,
            visibleName: this.name,
            type: "ListParameter",
            name: this.name
        };
    }
    getValueAtTimePoint(time) {
        if (this.isAutomatable()) {
            return this.automation.getValueAtTimePoint(time);
        }
    }
    start(time, contextTime) {
        if (this.isAutomatable()) {
            return this.automation.start(time, contextTime);
        }
    }
    stop(contextTime) {
        if (this.isAutomatable()) {
            return this.automation.stop(contextTime);
        }
    }
    bindToAudioParam(ap) {
        if (ap instanceof AudioParam) {
            this.audioParameter = ap;
            this.audioParameter.value = this.update(this.listOfValues[this.listIndex]);
            if (ap.setValueAtTime) {
                this.automation = new _ParameterAutomation__WEBPACK_IMPORTED_MODULE_1__.ParameterStepAutomation(this, this.audioParameter, 0, this.listValues.length, this.toStringFunc);
            }
            else {
                console.warn("Cannot bind automation as AudioParameter is not automatable");
            }
        }
        else {
            throw ("Argument 1 is not a valid AudioParameter object");
        }
    }
    get type() {
        return "List";
    }
    get defaultValue() {
        return this._defaultValue;
    }
    get listValues() {
        return this.listOfValues;
    }
    get value() {
        if (this.audioParameter) {
            return this.translate(this.audioParameter.value);
        }
        return this.listOfValues[this.listIndex];
    }
    set value(v) {
        this.setValue(v);
    }
    get boundAudioParam() {
        return this.audioParameter;
    }
    get automatable() {
        return this.automation !== undefined;
    }
    get automationPoints() {
        return this.automation;
    }
    get enabled() {
        return this.automation.enabled;
    }
    set enabled(e) {
        this.automation.enabled = (e === true);
    }
}


/***/ }),

/***/ "./src/BasePlugin/parameters/NumberParameter.ts":
/*!******************************************************!*\
  !*** ./src/BasePlugin/parameters/NumberParameter.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NumberParameter": () => (/* binding */ NumberParameter)
/* harmony export */ });
/* harmony import */ var _PluginParameter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PluginParameter */ "./src/BasePlugin/parameters/PluginParameter.ts");
/* harmony import */ var _ParameterAutomation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ParameterAutomation */ "./src/BasePlugin/parameters/ParameterAutomation.ts");
/* jshint esversion: 6 */


class NumberParameter extends _PluginParameter__WEBPACK_IMPORTED_MODULE_0__.PluginParameter {
    constructor(owner, name, defaultValue, minimum, maximum, toStringFunc, visibleName, exposed = true) {
        super(owner, name, "Number", visibleName, exposed);
        this.defaultValue = defaultValue;
        this.minimum = minimum;
        this.maximum = maximum;
        this.toStringFunc = toStringFunc;
        this.type = "Number";
        this._stepSize = 0;
        this._value = this.defaultValue;
    }
    setValue(v, updateInterfaces = true) {
        if (this.automation && this.automation.enabled) {
            throw new Error("Automation is enabled, cannot set the value!");
        }
        if (this.minimum) {
            v = Math.max(v, this.minimum);
        }
        if (this.maximum) {
            v = Math.min(v, this.maximum);
        }
        if (this._stepSize > 0) {
            v = Math.round(v / this._stepSize);
            v = v * this._stepSize;
        }
        v = this.update(v);
        if (this.audioParameter) {
            if (this.automation) {
                if (this.owner.factory.context.state == 'suspended') {
                    this.audioParameter.value = v;
                }
                else {
                    this.audioParameter.setValueAtTime(v, this.owner.factory.context.currentTime);
                }
            }
            else {
                this.audioParameter.value = v;
            }
        }
        if (this._value !== v) {
            this._value = v;
            this.triggerParameterSet(updateInterfaces);
        }
        this.trigger();
        return this._value;
    }
    destroy() {
    }
    getValueAtTimePoint(time) {
        return this.automation.getValueAtTimePoint(time);
    }
    start(time, contextTime) {
        this.automation.start(time, contextTime);
    }
    stop(time) {
        this.automation.stop(time);
    }
    bindToAudioParam(ap) {
        if (typeof ap == "object" && ap.value != undefined) {
            this.audioParameter = ap;
            this.audioParameter.value = this.update(this._value);
            if (ap.setValueAtTime) {
                this.automation = new _ParameterAutomation__WEBPACK_IMPORTED_MODULE_1__.ParameterLinearAutomation(this, this.audioParameter, this.minimum, this.maximum, this.toStringFunc);
            }
            else {
                console.warn("Cannot bind automation as AudioParameter is not automatable");
            }
        }
        else {
            throw new Error("Argument 1 is not a valid AudioParameter object");
        }
    }
    toString() {
        const v = this.value;
        if (typeof this.toStringFunc == "function") {
            return this.toStringFunc(v);
        }
        else {
            return String(v);
        }
    }
    getParameterObject() {
        return {
            value: this.value,
            defaultValue: this.defaultValue,
            minimum: this.minimum,
            maximum: this.maximum,
            visibleName: this.name,
            type: "NumberParameter",
            name: this.name
        };
    }
    get value() {
        if (this.audioParameter) {
            if (this.automation && this.automation.length > 0) {
                const t = this.owner.factory.getCurrentProgramTime();
                return this.automation.getCurrentTimeValue(t);
            }
            return this.translate(this.audioParameter.value);
        }
        return this._value;
    }
    set value(v) {
        this.setValue(v, true);
    }
    get stepSize() { return this._stepSize; }
    set stepSize(n) {
        if (!isFinite(n) || n < 0) {
            throw new Error("Invalid step size");
        }
        this._stepSize = n;
    }
    get boundAudioParam() { return this.audioParameter; }
    get automatable() { return this.automation !== undefined; }
    get automationPoints() { return this.automation; }
    get enabled() { var _a; return (_a = this.automation) === null || _a === void 0 ? void 0 : _a.enabled; }
    set enabled(t) {
        if (this.automatable) {
            this.automation.enabled = (t === true);
        }
    }
}


/***/ }),

/***/ "./src/BasePlugin/parameters/ParameterAutomation.ts":
/*!**********************************************************!*\
  !*** ./src/BasePlugin/parameters/ParameterAutomation.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ParameterLinearAutomation": () => (/* binding */ ParameterLinearAutomation),
/* harmony export */   "ParameterStepAutomation": () => (/* binding */ ParameterStepAutomation)
/* harmony export */ });
/* jshint esversion: 6 */
class TimePoint {
    constructor(owner, _time, _value, toStringFunc) {
        this.owner = owner;
        this._time = _time;
        this._value = _value;
        this.toStringFunc = toStringFunc;
        if (typeof this._time != "number" || !isFinite(this._time) || this._time < 0) {
            throw new Error("Invalid Constructor: Time must be a positive number");
        }
        if (typeof this._value != "number" || !isFinite(this._value)) {
            throw new Error("Invalid Constructor: Value must be a number");
        }
    }
    setValue(v) {
        if (typeof v != "number" || !isFinite(v)) {
            throw ("Value must be a number");
        }
        return this._value;
    }
    setTime(t) {
        if (typeof t == "number" && isFinite(t) && t >= 0) {
            this._time = t;
        }
        return this._time;
    }
    toString() {
        if (typeof this.toStringFunc == "function") {
            return this.toStringFunc(this._value);
        }
        return String(this._value);
    }
    get time() {
        return this.time;
    }
    set time(t) {
        this.setTime(t);
    }
    get value() {
        return this.value;
    }
    set value(v) {
        this.setValue(v);
    }
}
class TimePointList {
    constructor(min_value, max_value, toStringFunc) {
        this.toStringFunc = toStringFunc;
        this.automationPoints = [];
        if (typeof min_value != "number" || !isFinite(min_value)) {
            throw ("Invalid Constructor: min_value be a number");
        }
        if (typeof max_value != "number" || !isFinite(max_value)) {
            throw ("Invalid Constructor: max_value be a number");
        }
        if (min_value == max_value) {
            throw ("Invalid Constructor: max_value cannot equal to min_value");
        }
        if (max_value < min_value) {
            throw ("Invalid Constructor: min_value cannot be greater than max_value");
        }
        this.minimum = min_value;
        this.maximum = max_value;
    }
    getPointAtTime(time) {
        return this.automationPoints.find((p) => {
            p.time == time;
        });
    }
    hasPointAtTime(time) {
        return this.getPointAtTime(time) !== undefined;
    }
    sortPoints() {
        return this.automationPoints.sort(function (a, b) {
            if (a.time > b.time) {
                return 1;
            }
            else {
                return -1;
            }
        });
    }
    insertPoint(time, value) {
        if (typeof time != "number" || !isFinite(time) || time < 0) {
            throw ("Time must be a positive number");
        }
        if (typeof value != "number" || !isFinite(value)) {
            throw ("Value must be a number");
        }
        if (this.hasPointAtTime(time)) {
            throw ("Already a value entry at time " + time);
        }
        var point = new TimePoint(this, time, value, this.toStringFunc);
        this.automationPoints.push(point);
        this.automationPoints = this.sortPoints();
        return point;
    }
    getPoints(start_time, end_time) {
        if (start_time === undefined) {
            start_time = 0;
        }
        if (end_time === undefined) {
            end_time = Infinity;
        }
        return this.automationPoints.filter(function (point) {
            return point.time >= start_time && point.time < end_time;
        });
    }
    deletePoint(time) {
        var index = this.automationPoints.findIndex(function (point) {
            return point.time == time;
        });
        if (index >= 0) {
            this.automationPoints.splice(index, 1);
        }
        return this.automationPoints.length;
    }
    getStaticValueAsString(value) {
        if (this.toStringFunc) {
            return this.toStringFunc(value);
        }
        return String(value);
    }
    getValueAtTimePoint(time) {
        return this.getPointAtTime(time);
    }
    updatePoint(time, options) {
        const point = this.automationPoints.find(point => point.time == time);
        if (point) {
            if (typeof options.time == "number" && options.time != point.time) {
                if (this.hasPointAtTime(time)) {
                    throw new Error(`A time-point already exists at ${String(options.time)} seconds`);
                }
                else {
                    point.time = options.time;
                    this.automationPoints = this.sortPoints();
                }
            }
            point.value = options.value;
        }
        return point;
    }
    get length() {
        return this.automationPoints.length;
    }
}
class ParameterAutomation extends TimePointList {
    constructor(parameter, min_value, max_value, toStringFunc) {
        super(min_value, max_value, toStringFunc);
        this.parameter = parameter;
        this.isEnabled = false;
    }
    get enabled() {
        return this.isEnabled;
    }
    set enabled(t) {
        if (this.length > 0) {
            this.isEnabled = (t === true);
        }
    }
}
class ParameterLinearAutomation extends ParameterAutomation {
    constructor(owner, parameter, min_value, max_value, toStringFunc) {
        super(parameter, min_value, max_value, toStringFunc);
        this.owner = owner;
    }
    linearInterpolation(time, pointA, pointB) {
        let t1 = pointA.time;
        let t2 = pointB.time;
        time -= t1;
        t2 -= t1;
        t1 = 0;
        const p = time / t2;
        return pointA.value * (1 - p) + pointB.value * p;
    }
    getCurrentTimeValue(time) {
        if (this.automationPoints.length == 0) {
            return this.owner.value;
        }
        if (this.automationPoints.length == 1) {
            return this.automationPoints[0].value;
        }
        var firstPoint = this.automationPoints.reduce(function (point, nextPoint) {
            if (nextPoint.time <= time) {
                return nextPoint;
            }
            else {
                return point;
            }
        }, this.automationPoints[0]);
        var secondPoint = this.automationPoints.find(function (point) {
            return point.time > firstPoint.time;
        });
        if (secondPoint === undefined || firstPoint.time > time) {
            return firstPoint.value;
        }
        return this.linearInterpolation(time, firstPoint, secondPoint);
    }
    start(time, contextTime) {
        if (this.enabled) {
            const startPosition = this.owner.update(this.getCurrentTimeValue(time));
            this.parameter.setValueAtTime(startPosition, contextTime);
            this.automationPoints.forEach((p) => {
                if (p.time > time) {
                    const t = p.time - time;
                    const v = this.owner.update(p.value);
                    this.parameter.linearRampToValueAtTime(v, t + contextTime);
                }
            });
        }
    }
    stop(contextTime) {
        if (contextTime === undefined) {
            contextTime = 0;
        }
        this.parameter.cancelScheduledValues(contextTime);
    }
}
class ParameterStepAutomation extends ParameterAutomation {
    constructor(owner, parameter, min_value, max_value, toStringFunc) {
        super(parameter, min_value, max_value, toStringFunc);
        this.owner = owner;
    }
    getCurrentTimeValue(time) {
        if (this.automationPoints.length == 0) {
            throw ("No automation points available");
        }
        if (this.automationPoints.length == 1) {
            return this.automationPoints[0].value;
        }
        const nearestPoint = this.automationPoints.reduce(function (point, nextPoint) {
            if (nextPoint.time <= time) {
                return nextPoint;
            }
            else {
                return point;
            }
        }, this.automationPoints[0]);
        return nearestPoint.value;
    }
    start(time, contextTime) {
        var startPosition = this.owner.update(this.getCurrentTimeValue(time));
        this.parameter.setValueAtTime(startPosition, contextTime);
        this.automationPoints.forEach(p => {
            if (p.time > time) {
                var t = p.time - time;
                var v = this.owner.update(p.value);
                this.parameter.setValueAtTime(v, t + contextTime);
            }
        });
    }
    stop(contextTime) {
        this.parameter.cancelScheduledValues(contextTime);
    }
}


/***/ }),

/***/ "./src/BasePlugin/parameters/PluginParameter.ts":
/*!******************************************************!*\
  !*** ./src/BasePlugin/parameters/PluginParameter.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PluginParameter": () => (/* binding */ PluginParameter)
/* harmony export */ });
class PluginParameter {
    constructor(owner, _name, dataType, _visibleName, _exposed = true) {
        this.owner = owner;
        this._name = _name;
        this._visibleName = _visibleName;
        this._exposed = _exposed;
        this.eventTarget = new EventTarget();
        this._updateFunction = (v) => {
            return v;
        };
        this._translateFunction = (v) => {
            return v;
        };
        this._triggerFunction = () => { };
        var update, translate, trigger;
        var eventTarget = new EventTarget();
        update = translate = function (v) {
            return v;
        };
        trigger = function () { };
    }
    destroy() { }
    setValue(v) {
        throw new Error('Cannot set this parameter');
    }
    toString() {
        return "PluginParameter";
    }
    ;
    getParameterObject() {
        return {
            name: this.name,
            visibleName: this.visibleName,
            type: "PluginParameter"
        };
    }
    addEventListener(type, listener, options) {
        return this.eventTarget.addEventListener(type, listener, options);
    }
    removeEventListener(type, listener, options) {
        return this.eventTarget.removeEventListener(type, listener, options);
    }
    triggerParameterSet(updateInterfaces = true) {
        if (updateInterfaces === undefined) {
            updateInterfaces = true;
        }
        const opts = {
            detail: {
                parameter: this.getParameterObject(),
                updateInterfaces: updateInterfaces
            }
        };
        this.eventTarget.dispatchEvent(new CustomEvent("parameterset", opts));
    }
    bindToAudioParam(ap) {
        throw ("Cannot bind this parameter type to an audio parameter");
    }
    get boundAudioParam() {
        return undefined;
    }
    get name() {
        return this._name;
    }
    get visibleName() {
        if (this._visibleName !== undefined && this._visibleName.length > 0) {
            return this.visibleName;
        }
        else {
            return this.name;
        }
    }
    get exposed() {
        return this._exposed;
    }
    set exposed(e) {
        this._exposed = e === true;
    }
    get update() {
        return this._updateFunction;
    }
    set update(f) {
        this._updateFunction = f;
    }
    get translate() {
        return this._translateFunction;
    }
    set translate(f) {
        this._translateFunction = f;
    }
    get trigger() {
        return this._triggerFunction;
    }
    set trigger(f) {
        this._triggerFunction = f;
    }
}


/***/ }),

/***/ "./src/BasePlugin/parameters/StringParameter.ts":
/*!******************************************************!*\
  !*** ./src/BasePlugin/parameters/StringParameter.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StringParameter": () => (/* binding */ StringParameter)
/* harmony export */ });
/* harmony import */ var _PluginParameter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PluginParameter */ "./src/BasePlugin/parameters/PluginParameter.ts");

class StringParameter extends _PluginParameter__WEBPACK_IMPORTED_MODULE_0__.PluginParameter {
    constructor(owner, name, defaultValue, maxLength, toStringFunc, visibleName, exposed = true) {
        super(owner, name, "String", visibleName, exposed);
        this.defaultValue = defaultValue;
        this.maxLength = maxLength;
        this.toStringFunc = toStringFunc;
        this.type = "String";
        this._value = defaultValue;
    }
    setValue(v, updateInterfaces = true) {
        let newValue;
        if (typeof v === "string") {
            newValue = v;
        }
        else {
            newValue = JSON.stringify(v);
        }
        if (this.maxLength && newValue.length > this.maxLength) {
            throw new Error(`String longer than ${this.maxLength} characters`);
        }
        if (this.boundAudioParam) {
            this.boundAudioParam.value = this.update(v);
        }
        if (this._value !== v) {
            this._value = v;
            this.triggerParameterSet(updateInterfaces);
        }
        this.trigger();
        return this._value;
    }
    destroy() { }
    bindToAudioParam(ap) {
        if (typeof ap == "object" && ap.value != undefined) {
            this.audioParameter = ap;
            this.audioParameter.value = this.update(this._value);
        }
        else {
            throw new Error("Argument 1 is not a valid AudioParameter object");
        }
    }
    toString() {
        const v = this._value;
        if (typeof this.toStringFunc == "function") {
            return this.toStringFunc.call(this, v);
        }
        else {
            return v;
        }
    }
    getParameterObject() {
        return {
            value: this.value,
            defaultValue: this.defaultValue,
            maxLength: this.maxLength,
            visibleName: this.name,
            type: "StringParameter",
            name: this.name
        };
    }
    get value() {
        if (this.boundAudioParam) {
            return this.translate(this.boundAudioParam.value);
        }
        return this._value;
    }
    set value(t) { this.setValue(t, true); }
    get boundAudioParam() { return this.audioParameter; }
}


/***/ }),

/***/ "./src/BasePlugin/parameters/SwitchParameter.ts":
/*!******************************************************!*\
  !*** ./src/BasePlugin/parameters/SwitchParameter.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SwitchParameter": () => (/* binding */ SwitchParameter)
/* harmony export */ });
/* harmony import */ var _PluginParameter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PluginParameter */ "./src/BasePlugin/parameters/PluginParameter.ts");
/* harmony import */ var _ParameterAutomation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ParameterAutomation */ "./src/BasePlugin/parameters/ParameterAutomation.ts");
/* jshint esversion: 6 */


class SwitchParameter extends _PluginParameter__WEBPACK_IMPORTED_MODULE_0__.PluginParameter {
    constructor(owner, name, defaultValue, minState, maxState, toStringFunc, visibleName, exposed = true) {
        super(owner, name, "Number", visibleName, exposed);
        this.defaultValue = defaultValue;
        this.minState = minState;
        this.maxState = maxState;
        this.toStringFunc = toStringFunc;
        this.type = "Switch";
        this._value = this.defaultValue;
    }
    setValue(v, updateInterfaces = true) {
        if (v < this.minState) {
            throw new Error("Set value is less than " + this.minState);
        }
        if (v > this.maxState) {
            throw new Error("Set value is greater than " + this.maxState);
        }
        if (this.audioParameter) {
            this.audioParameter.value = this.update(v);
        }
        if (this._value !== v) {
            this._value = v;
            this.triggerParameterSet(updateInterfaces);
        }
        this.trigger();
        return v;
    }
    destroy() { }
    increment() {
        let v = this._value - 1;
        if (v < this.minState) {
            v = this.maxState;
        }
        return this.setValue(v);
    }
    decrement() {
        let v = this._value - 1;
        if (v < this.minState) {
            v = this.maxState;
        }
        return this.setValue(v);
    }
    bindToAudioParam(ap) {
        if (typeof ap == "object" && ap.value != undefined) {
            this.audioParameter = ap;
            this.audioParameter.value = this.update(this._value);
            if (ap.setValueAtTime) {
                this.automation = new _ParameterAutomation__WEBPACK_IMPORTED_MODULE_1__.ParameterStepAutomation(this, this.audioParameter, this.minState, this.maxState, this.toStringFunc);
            }
            else {
                console.warn("Cannot bind automation as AudioParameter is not automatable");
            }
        }
        else {
            throw new Error("Argument 1 is not a valid AudioParameter object");
        }
    }
    toString() {
        const v = this._value;
        if (typeof this.toStringFunc == "function") {
            return this.toStringFunc.call(this, v);
        }
        else {
            return String(v);
        }
    }
    getParameterObject() {
        return {
            value: this.value,
            defaultValue: this.defaultValue,
            minimum: this.minState,
            maximum: this.maxState,
            visibleName: this.name,
            type: "SwitchParameter",
            name: this.name
        };
    }
    get value() {
        if (this.audioParameter) {
            return this.translate(this.audioParameter.value);
        }
        return this._value;
    }
    set value(v) { this.setValue(v, true); }
    get boundAudioParam() { return this.audioParameter; }
    get automatable() { return this.automation !== undefined; }
    get automationPoints() { return this.automation; }
    get enabled() { var _a; return (_a = this.automation) === null || _a === void 0 ? void 0 : _a.enabled; }
    set enabled(t) {
        if (this.automatable) {
            this.automation.enabled = (t === true);
        }
    }
    getValueAtTimePoint(time) {
        return this.automation.getValueAtTimePoint(time);
    }
    start(time, contextTime) {
        this.automation.start(time, contextTime);
    }
    stop(time) {
        this.automation.stop(time);
    }
}


/***/ }),

/***/ "./src/BasePlugin/parameters/URLParameter.ts":
/*!***************************************************!*\
  !*** ./src/BasePlugin/parameters/URLParameter.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "URLParameter": () => (/* binding */ URLParameter)
/* harmony export */ });
/* harmony import */ var _PluginParameter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PluginParameter */ "./src/BasePlugin/parameters/PluginParameter.ts");

class URLParameter extends _PluginParameter__WEBPACK_IMPORTED_MODULE_0__.PluginParameter {
    constructor(owner, name, defaultValue, maxLength, toStringFunc, visibleName, exposed = true) {
        super(owner, name, "String", visibleName, exposed);
        this.defaultValue = defaultValue;
        this.maxLength = maxLength;
        this.toStringFunc = toStringFunc;
        this.type = "URL";
    }
    getResource(type) {
        if (this.resourceObject == undefined) {
            this.resourceObject = new Promise(function (resolve, reject) {
                const xhr = new XMLHttpRequest();
                xhr.open("GET", this._value);
                xhr.responseType = type;
                xhr.onload = function (e) {
                    if (xhr.status == 200) {
                        resolve(xhr.response);
                    }
                    else {
                        reject({
                            code: xhr.status,
                            message: e.target
                        });
                    }
                };
                xhr.onerror = function (e) {
                    reject({
                        code: xhr.status,
                        message: "error"
                    });
                };
                xhr.ontimeout = function (e) {
                    reject({
                        code: xhr.status,
                        message: "timeout"
                    });
                };
                xhr.send();
            });
        }
        return this.resourceObject;
    }
    setValue(v, updateInterfaces = true) {
        if (this.maxLength && v.length > this.maxLength) {
            throw new Error(`String longer than ${this.maxLength} characters`);
        }
        if (this._value !== v) {
            this.resourceObject = undefined;
            this._value = v;
            this.triggerParameterSet(updateInterfaces);
        }
        this.trigger();
        return this._value;
    }
    toString() {
        if (typeof this.toStringFunc == "function") {
            return this.toStringFunc.call(this, this._value);
        }
        else {
            return this._value;
        }
    }
    getParameterObject() {
        return {
            value: this.value,
            defaultValue: this.defaultValue,
            maxLength: this.maxLength,
            visibleName: this.name,
            type: "URLParameter",
            name: this.name
        };
    }
    get value() { return this._value; }
    ;
    set value(t) { this.setValue(t); }
}


/***/ }),

/***/ "./src/Factory/AudioPluginChainManager/SubFactoryFeatureSender/index.ts":
/*!******************************************************************************!*\
  !*** ./src/Factory/AudioPluginChainManager/SubFactoryFeatureSender/index.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubFactoryFeatureSender": () => (/* binding */ SubFactoryFeatureSender)
/* harmony export */ });
/* harmony import */ var _Extractors_OutputNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Extractors/OutputNode */ "./src/Factory/Extractors/OutputNode.ts");
/* jshint esversion: 6 */

class SubFactoryFeatureSender {
    constructor(owner, FactoryFeatureMap) {
        this.owner = owner;
        this.FactoryFeatureMap = FactoryFeatureMap;
        this.outputNodes = [];
    }
    updateFeatures(featureObject, outputIndex = 0) {
        if (this.outputNodes[outputIndex] === undefined) {
            if (outputIndex > 1) {
                throw ("Requested an output that does not exist");
            }
            this.outputNodes[outputIndex] = new _Extractors_OutputNode__WEBPACK_IMPORTED_MODULE_0__.OutputNode(this, this.owner.chainStart, outputIndex);
        }
        for (let si = 0; si < featureObject.length; si++) {
            let extractor = this.outputNodes[outputIndex].findExtractor(featureObject[si].frameSize);
            if (!extractor) {
                extractor = this.outputNodes[outputIndex].addExtractor(featureObject[si].frameSize);
            }
            extractor.setFeatures(featureObject[si].features);
        }
    }
    ;
    rejoinExtractors() {
        for (const outputNode of this.outputNodes) {
            outputNode.rejoinExtractors();
        }
    }
    postFeatures(featureObject) {
        /*
            Called by the individual extractor instances:
            featureObject = {'frameSize': frameSize,
            'outputIndex': outputIndex,
            'results':[]}
        */
        this.FactoryFeatureMap.postFeatures({
            'source': this,
            'outputIndex': featureObject.outputIndex,
            'frameSize': featureObject.frameSize,
            'results': featureObject.results
        });
    }
    ;
    destroy() { }
}


/***/ }),

/***/ "./src/Factory/AudioPluginChainManager/index.ts":
/*!******************************************************!*\
  !*** ./src/Factory/AudioPluginChainManager/index.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AudioPluginChainManager": () => (/* binding */ AudioPluginChainManager)
/* harmony export */ });
/* harmony import */ var _LinkedStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../LinkedStore */ "./src/LinkedStore.ts");
/* harmony import */ var _SubFactoryFeatureSender_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SubFactoryFeatureSender/index */ "./src/Factory/AudioPluginChainManager/SubFactoryFeatureSender/index.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/* jshint esversion: 6 */


var AudioPluginChainManagerState;
(function (AudioPluginChainManagerState) {
    AudioPluginChainManagerState[AudioPluginChainManagerState["READY"] = 0] = "READY";
    AudioPluginChainManagerState[AudioPluginChainManagerState["CLOSED"] = 1] = "CLOSED";
})(AudioPluginChainManagerState || (AudioPluginChainManagerState = {}));
class AudioPluginChainManager {
    constructor(PluginFactory, chainStart, chainStop) {
        this.PluginFactory = PluginFactory;
        this.chainStart = chainStart;
        this.chainStop = chainStop;
        this.plugin_list = [];
        this.state = AudioPluginChainManagerState.READY;
        this.delaySamples = 0;
        this.featureSender = new _SubFactoryFeatureSender_index__WEBPACK_IMPORTED_MODULE_1__.SubFactoryFeatureSender(this, this.PluginFactory.FeatureMap);
        this.semanticStores = [];
        this.eventTarget = new EventTarget();
        this.factoryName = '';
        this.TrackData = new _LinkedStore__WEBPACK_IMPORTED_MODULE_0__.LinkedStore("Track");
        chainStart.disconnect();
        chainStart.connect(chainStop);
    }
    rebuild() {
        let i = 0, l = this.plugin_list.length - 1;
        while (i < l) {
            const currentNode = this.plugin_list[i++];
            const nextNode = this.plugin_list[i];
            currentNode.reconnect(nextNode);
        }
    }
    isolate() {
        this.plugin_list.forEach((e) => {
            e.disconnect();
        });
    }
    cutChain() {
        try {
            if (this.plugin_list.length > 0) {
                this.chainStart.disconnect(this.plugin_list[0].input);
                this.plugin_list[this.plugin_list.length - 1].output.disconnect(this.chainStop);
            }
            else {
                this.chainStart.disconnect(this.chainStop);
            }
        }
        catch (_a) {
            console.warn('could not disconnect plugin chain!');
        }
        return true;
    }
    joinChain() {
        if (this.plugin_list.length > 0) {
            this.chainStart.connect(this.plugin_list[0].input);
            this.plugin_list[this.plugin_list.length - 1].output.connect(this.chainStop);
        }
        else {
            this.chainStart.connect(this.chainStop);
        }
        this.featureSender.rejoinExtractors();
    }
    buildNewPlugin(prototypeObject) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.state === AudioPluginChainManagerState.CLOSED) {
                throw new Error("SubFactory has been destroyed! Cannot add new plugins");
            }
            const node = yield prototypeObject.createPluginInstance(this);
            return node;
        });
    }
    getDelayCompensation() {
        let sum = 0;
        for (const plugin of this.plugin_list) {
            if (!plugin.isBypassed()) {
                sum += plugin.node.processingDelayAsSamples;
            }
        }
        return sum;
    }
    bypassPlugin(plugin_instance, state) {
        // Check is a member of this chain
        if (this.plugin_list.includes(plugin_instance) === false) {
            return;
        }
        plugin_instance.bypass(state);
    }
    getPrototypes() {
        return this.PluginFactory.getPrototypes();
    }
    getFactory() {
        return this.PluginFactory;
    }
    ;
    destroy(reconnect = false) {
        if (this.state === AudioPluginChainManagerState.READY) {
            for (const pluginInstanceo of this.plugin_list) {
                this.destroyPlugin(pluginInstanceo);
            }
            this.chainStart.disconnect();
            if (reconnect === true) {
                this.chainStart.connect(this.chainStop);
            }
            this.featureSender.destroy();
            this.state = AudioPluginChainManagerState.CLOSED;
        }
    }
    createPlugin(prototypeObject) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.state === AudioPluginChainManagerState.CLOSED) {
                return;
            }
            let node;
            try {
                node = yield this.buildNewPlugin(prototypeObject);
            }
            catch (e) {
            }
            this.cutChain();
            this.plugin_list.push(node);
            this.isolate();
            this.rebuild();
            this.joinChain();
            node.addEventListener("alterdelay", this);
            node.node.onloaded.call(node.node);
            this.updateDelayCompensation();
            this.eventTarget.dispatchEvent(new Event("change"));
            return node;
        });
    }
    removePlugin(plugin_object) {
        if (this.state === AudioPluginChainManagerState.CLOSED) {
            return;
        }
        var index = this.getPluginIndex(plugin_object);
        if (index >= 0) {
            this.cutChain();
            plugin_object.removeEventListener("alterdelay", this);
            plugin_object.node.stop.call(plugin_object.node);
            plugin_object.node.onunloaded.call(plugin_object.node);
            this.plugin_list.splice(index, 1);
            this.isolate();
            this.rebuild();
            this.joinChain();
            this.updateDelayCompensation();
            this.eventTarget.dispatchEvent(new Event("change"));
        }
    }
    destroyPlugin(plugin_object) {
        if (this.state === AudioPluginChainManagerState.CLOSED) {
            return;
        }
        this.removePlugin(plugin_object);
        this.PluginFactory.deletePlugin(plugin_object);
        this.updateDelayCompensation();
    }
    getPlugins() {
        return this.plugin_list;
    }
    getAllPlugins() {
        return this.PluginFactory.getAllPluginsObject();
    }
    ;
    getPluginIndex(plugin_object) {
        if (this.state === AudioPluginChainManagerState.CLOSED) {
            return;
        }
        return this.plugin_list.indexOf(plugin_object);
    }
    movePlugin(plugin_object, new_index) {
        if (this.state === AudioPluginChainManagerState.CLOSED) {
            return;
        }
        if (this.PluginFactory.getAllPlugins().includes(plugin_object) === false) {
            throw new Error("Plugin does not exist");
        }
        const index = this.getPluginIndex(plugin_object);
        let obj;
        this.cutChain();
        this.isolate();
        if (plugin_object.node.owner !== this) {
            // Different sub-factory
            plugin_object.node.owner.removePlugin(plugin_object);
            plugin_object.node.changeOwner(this);
            obj = [plugin_object];
        }
        else {
            obj = this.plugin_list.splice(index, 1);
            plugin_object.node.onunloaded.call(plugin_object.node);
        }
        if (new_index === 0) {
            this.plugin_list = obj.concat(this.plugin_list);
        }
        else if (new_index >= this.plugin_list.length) {
            this.plugin_list = this.plugin_list.concat(obj);
        }
        else {
            const holdLow = this.plugin_list.slice(0, new_index);
            const holdHigh = this.plugin_list.slice(new_index);
            this.plugin_list = holdLow.concat(obj.concat(holdHigh));
        }
        this.rebuild();
        this.joinChain();
        plugin_object.node.onloaded.call(plugin_object.node);
        this.updateDelayCompensation();
        this.eventTarget.dispatchEvent(new Event("change"));
    }
    copyPlugin(plugin_object, copy_index) {
        return __awaiter(this, void 0, void 0, function* () {
            if (copy_index === undefined) {
                copy_index = this.plugin_list.length;
            }
            if (typeof copy_index != "number" || copy_index < 0 || copy_index > this.plugin_list.length) {
                throw ("Plugin copy index outside of the chain scope.");
            }
            let node;
            try {
                node = yield this.buildNewPlugin(plugin_object.prototypeObject);
            }
            catch (e) {
                console.log(e);
                throw new Error("Plugin did not get created! Aborting");
            }
            node.node.parameters.setParametersByObject(plugin_object.node.parameters.getParameterObject(), false);
            this.cutChain();
            this.isolate();
            this.plugin_list.splice(copy_index, 0, node);
            this.rebuild();
            this.joinChain();
            this.updateDelayCompensation();
            node.node.onloaded.call(node.node);
            this.eventTarget.dispatchEvent(new Event("change"));
            return node;
        });
    }
    duplicateAudioPluginChainManager(sourceAudioPluginChainManager) {
        return __awaiter(this, void 0, void 0, function* () {
            for (const plugin of sourceAudioPluginChainManager.getPlugins()) {
                yield this.copyPlugin(plugin);
            }
            return this;
        });
    }
    recursiveProcessing(base, list) {
        const l = list.length;
        for (let i = 0; i < l; i++) {
            const entry = list[i];
            base[entry.name].apply(base, entry.parameters);
            if (entry.features && entry.features.length > 0) {
                this.recursiveProcessing(base.result[entry.name], entry.features);
            }
        }
    }
    updateDelayCompensation() {
        const sum = this.getDelayCompensation();
        if (this.delaySamples != sum) {
            this.delaySamples = sum;
            this.eventTarget.dispatchEvent(new Event("alterdelay"));
        }
        return this.delaySamples;
    }
    handleEvent(e) {
        if (e.type == "alterdelay") {
            this.updateDelayCompensation();
        }
    }
    addEventListener(type, listener, options) {
        return this.eventTarget.addEventListener(type, listener, options);
    }
    removeEventListener(type, listener, options) {
        return this.eventTarget.removeEventListener(type, listener, options);
    }
    get SessionData() { return this.PluginFactory.SessionData; }
    get UserData() { return this.PluginFactory.UserData; }
    get processingDelayAsSamples() { return this.updateDelayCompensation(); }
    get processingDelayAsSeconds() { return this.processingDelayAsSamples / this.PluginFactory.context.sampleRate; }
}


/***/ }),

/***/ "./src/Factory/Extractors/Extractor.ts":
/*!*********************************************!*\
  !*** ./src/Factory/Extractors/Extractor.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Extractor": () => (/* binding */ Extractor)
/* harmony export */ });
/* harmony import */ var js_xtract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-xtract */ "./node_modules/js-xtract/dist/jsXtract.js");
/* harmony import */ var js_xtract__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(js_xtract__WEBPACK_IMPORTED_MODULE_0__);

class Extractor {
    constructor(parent, frameSize) {
        this.parent = parent;
        this.frameSize = frameSize;
        this.features = [];
        this.context = this.parent.output.context;
        this.analyser = parent.output.context.createAnalyser();
        this.analyser.fftSize = frameSize;
        parent.output.connect(this.analyser);
    }
    getXtractData() {
        if (this.timeData === undefined) {
            this.timeData = new js_xtract__WEBPACK_IMPORTED_MODULE_0__.TimeData(this.analyser.fftSize, this.context.sampleRate);
        }
        const dst = new Float32Array(this.analyser.fftSize);
        if (this.analyser.getFloatTimeDomainData) {
            this.analyser.getFloatTimeDomainData(dst);
        }
        else {
            const view = new Uint8Array(this.analyser.fftSize);
            this.analyser.getByteTimeDomainData(view);
            for (let i = 0; i < this.analyser.fftSize; i++) {
                dst[i] = view[i];
                dst[i] = (dst[i] / 127.5) - 1;
            }
        }
        this.timeData.copyDataFrom(dst);
        return this.timeData;
    }
    frameCallback() {
        // Perform a callback on each frame
        // The function callback has the arguments (current_frame, previous_frame, previous_result)
        if (this.callbackObject === undefined) {
            this.callbackObject = this.parent.output.context.createScriptProcessor(this.analyser.fftSize, 1, 1);
            this.analyser.connect(this.callbackObject);
            this.callbackObject.onaudioprocess = (e) => {
                const current_frame = this.getXtractData();
                const message = {
                    'numberOfChannels': 1,
                    'results': []
                };
                message.results[0] = {
                    'channel': 0,
                    'results': []
                };
                this.postFeatures(message);
                for (let c = 0; c < e.outputBuffer.numberOfChannels && c < e.inputBuffer.numberOfChannels; c++) {
                    e.outputBuffer.copyToChannel(e.inputBuffer.getChannelData(c), c);
                }
            };
        }
        // For chrome and other efficiency browsers
        if (!this.fooGain) {
            this.fooGain = this.context.createGain();
            this.fooGain.gain.value = 0;
            this.callbackObject.connect(this.fooGain);
            this.fooGain.connect(this.context.destination);
        }
    }
    clearCallback() {
        //this === Extractor
        if (this.callbackObject) {
            this.callbackObject.disconnect();
            this.fooGain.disconnect();
            this.fooGain = undefined;
            this.callbackObject.onaudioprocess = undefined;
            this.callbackObject = undefined;
        }
    }
    setFeatures(featureList) {
        this.features = featureList;
        if (this.features.length === 0) {
            this.clearCallback();
        }
        else {
            this.frameCallback();
        }
    }
    rejoinExtractor() {
        this.parent.output.connect(this.extractor);
    }
    postFeatures(resultsJSON) {
        const obj = {
            'outputIndex': this.parent.index,
            'frameSize': this.frameSize,
            'results': resultsJSON
        };
        this.parent.postFeatures(obj);
    }
    get extractor() { return this.analyser; }
}


/***/ }),

/***/ "./src/Factory/Extractors/OutputNode.ts":
/*!**********************************************!*\
  !*** ./src/Factory/Extractors/OutputNode.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OutputNode": () => (/* binding */ OutputNode)
/* harmony export */ });
/* harmony import */ var _Extractor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Extractor */ "./src/Factory/Extractors/Extractor.ts");
/* harmony import */ var _WorkerExtractor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WorkerExtractor */ "./src/Factory/Extractors/WorkerExtractor.ts");


class OutputNode {
    constructor(parent, output, index) {
        this.parent = parent;
        this.output = output;
        this.index = index;
        this.extractors = [];
    }
    addExtractor(frameSize) {
        let obj;
        if (window.Worker) {
            obj = new _WorkerExtractor__WEBPACK_IMPORTED_MODULE_1__.WorkerExtractor(this, frameSize);
        }
        else {
            obj = new _Extractor__WEBPACK_IMPORTED_MODULE_0__.Extractor(this, frameSize);
        }
        this.extractors.push(obj);
        return obj;
    }
    findExtractor(frameSize) {
        return this.extractors.find((e) => e.frameSize === frameSize);
    }
    deleteExtractor(frameSize) {
        const extractor = this.findExtractor(frameSize);
        if (extractor) {
            const index = this.extractors.indexOf(extractor);
            this.extractors.splice(index, 1);
        }
    }
    rejoinExtractors() {
        this.extractors.forEach(function (e) {
            e.rejoinExtractor();
        });
    }
    postFeatures(resultObject) {
        this.parent.postFeatures(resultObject);
    }
}


/***/ }),

/***/ "./src/Factory/Extractors/WorkerExtractor.ts":
/*!***************************************************!*\
  !*** ./src/Factory/Extractors/WorkerExtractor.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorkerExtractor": () => (/* binding */ WorkerExtractor)
/* harmony export */ });
class WorkerExtractor {
    constructor(parent, frameSize) {
        this.parent = parent;
        this.frameSize = frameSize;
        this.worker = new Worker("../feature-worker.js", { type: "module" });
        this.features = [];
        this.analyser = parent.output.context.createScriptProcessor(frameSize, parent.output.numberOfOutputs, 1);
        parent.output.connect(this.analyser);
        this.worker.onerror = (errorEvent) => {
            console.error(errorEvent);
        };
        this.worker.onmessage = (e) => {
            if (e.data.state === 2) {
                this.response(e);
            }
            else if (e.data.state === 1) {
                this.extractor.onaudioprocess = this.onaudiocallback;
            }
        };
    }
    onaudiocallback(e) {
        var c, frames = [];
        for (c = 0; c < e.inputBuffer.numberOfChannels; c++) {
            frames[c] = e.inputBuffer.getChannelData(c);
        }
        this.worker.postMessage({
            'state': 2,
            'frames': frames
        });
    }
    response(msg) {
        this.postFeatures(msg.data.response);
    }
    postFeatures(resultsJSON) {
        const obj = {
            'outputIndex': this.parent.index,
            'frameSize': this.frameSize,
            'results': resultsJSON
        };
        this.parent.postFeatures(obj);
    }
    rejoinExtractor() {
        this.parent.output.connect(this.extractor);
    }
    ;
    setFeatures(featureList) {
        var self = this;
        var configMessage = {
            'state': 1,
            'sampleRate': this.parent.output.context.sampleRate,
            'featureList': featureList,
            'numChannels': this.parent.output.numberOfOutputs,
            'frameSize': this.frameSize
        };
        this.features = featureList;
        if (featureList && featureList.length > 0) {
            this.worker.postMessage({ 'state': 0 });
            this.worker.postMessage(configMessage);
        }
        else {
            this.extractor.onaudioprocess = undefined;
        }
    }
    get extractor() { return this.analyser; }
}


/***/ }),

/***/ "./src/Factory/FeatureMap/index.ts":
/*!*****************************************!*\
  !*** ./src/Factory/FeatureMap/index.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeatureMap": () => (/* binding */ FeatureMap)
/* harmony export */ });
/* harmony import */ var _utility_uniqueMergeArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utility/uniqueMergeArray */ "./src/utility/uniqueMergeArray.ts");

class FrameSizeToFeatures {
    constructor() {
        this.receiverMap = new Map();
    }
    requestFeatures(frameSize, receiver, features) {
        if (this.receiverMap.has(frameSize) === false) {
            this.receiverMap.set(frameSize, new Map());
        }
        const receiverMapFeatures = this.receiverMap.get(frameSize);
        if (receiverMapFeatures.has(receiver)) {
            receiverMapFeatures.set(receiver, (0,_utility_uniqueMergeArray__WEBPACK_IMPORTED_MODULE_0__.uniqueMergeArray)(receiverMapFeatures.get(receiver), features));
        }
        else {
            receiverMapFeatures.set(receiver, features);
        }
        // Now get all the features we need to export
        let allFeatures = [];
        for (const [receiver, receiverFeatures] of receiverMapFeatures) {
            allFeatures = (0,_utility_uniqueMergeArray__WEBPACK_IMPORTED_MODULE_0__.uniqueMergeArray)(receiverFeatures, allFeatures);
        }
        return allFeatures;
    }
    revokeAllFeatures(frameSize) {
        return this.revokeFeatures(frameSize, undefined, undefined);
    }
    revokeAllReceiverFeatures(frameSize, receiver) {
        return this.revokeFeatures(frameSize, receiver, undefined);
    }
    revokeFeatures(frameSize, receiver, featuresToRemove) {
        if (this.receiverMap.has(frameSize) === false) {
            return;
        }
        const receiverMapFeatures = this.receiverMap.get(frameSize);
        if (receiver === undefined) {
            // If receiver is undefined, then we are killing the whole frameSize map
            for (const [receiverFromMap, receiverFeatures] of receiverMapFeatures) {
                this.revokeFeatures(frameSize, receiverFromMap, receiverFeatures);
            }
            return this.getFeatures(frameSize);
        }
        if (receiverMapFeatures.has(receiver) === false) {
            return;
        }
        const featureList = receiverMapFeatures.get(receiver);
        if (featuresToRemove === undefined) {
            // If features is undefined, remove all features
            // But, an empty list is valid
            featuresToRemove = featureList;
        }
        const reducedFeatureList = featureList.filter(feature => featuresToRemove.includes(feature) === false);
        if (reducedFeatureList.length === 0) {
            // Have no features!
            receiverMapFeatures.delete(receiver);
        }
        else {
            receiverMapFeatures.set(receiver, reducedFeatureList);
        }
        const remainingFeatures = this.getFeatures(frameSize);
        if (remainingFeatures.length === 0) {
            // The frameSize has no features left
            this.receiverMap.delete(frameSize);
        }
        return remainingFeatures;
    }
    getFeatures(frameSize) {
        const receiverMapFeatures = this.receiverMap.get(frameSize);
        if (receiverMapFeatures === undefined) {
            return [];
        }
        let allFeatures = [];
        for (const [receiver, receiverFeatures] of receiverMapFeatures) {
            allFeatures = (0,_utility_uniqueMergeArray__WEBPACK_IMPORTED_MODULE_0__.uniqueMergeArray)(receiverFeatures, allFeatures);
        }
        return allFeatures;
    }
}
class SourceMap {
    constructor(source) {
        this.source = source;
        this.outputMap = new Map();
    }
    getOutputMap(outputIndex) {
        return this.outputMap.get(outputIndex);
    }
    keys() {
        return this.outputMap.keys();
    }
    values() {
        return this.outputMap.values();
    }
    entries() {
        return this.outputMap.entries();
    }
    getFeatures(outputIndex, frameSize) {
        const output = this.getOutputMap(outputIndex);
        if (output === undefined) {
            return undefined;
        }
        return output.getFeatures(frameSize);
    }
    getOrAddOutputMap(outputIndex) {
        const output = this.getOutputMap(outputIndex);
        if (output === undefined) {
            this.outputMap.set(outputIndex, new FrameSizeToFeatures());
            return this.getOutputMap(outputIndex);
        }
        return output;
    }
    requestFeatures(outputIndex, frameSize, features, receiver) {
        const output = this.getOrAddOutputMap(outputIndex);
        const featureRequest = {
            outputIndex: outputIndex,
            frameSize: frameSize,
            features: []
        };
        featureRequest.features = output.requestFeatures(frameSize, receiver, features);
        this.source.updateFeatures([featureRequest]);
    }
    revokeFeatures(outputIndex, frameSize, receiver, featuresToRemove) {
        if (outputIndex === undefined) {
            for (const _outputIndex of this.outputMap.keys()) {
                this.revokeFeatures(_outputIndex, frameSize, receiver, featuresToRemove);
            }
            return;
        }
        const output = this.getOutputMap(outputIndex);
        if (output === undefined) {
            return;
        }
        if (frameSize === undefined) {
            for (const _frameSize of output.receiverMap.keys()) {
                this.revokeFeatures(outputIndex, _frameSize, receiver, featuresToRemove);
            }
            return;
        }
        const featureRequest = {
            outputIndex: outputIndex,
            frameSize: frameSize,
            features: []
        };
        featureRequest.features = output.revokeFeatures(frameSize, receiver, featuresToRemove);
        if (featureRequest.features.length === 0) {
            this.outputMap.delete(outputIndex);
        }
        this.source.updateFeatures([featureRequest]);
    }
}
class FeatureMap {
    constructor(factory) {
        this.factory = factory;
        this.Mappings = new Map();
    }
    findOrCreateSourceRequestMap(pluginSender) {
        const requests = this.Mappings.get(pluginSender);
        if (requests === undefined) {
            const requestMap = new SourceMap(pluginSender);
            this.Mappings.set(pluginSender, requestMap);
            return requestMap;
        }
        return requests;
    }
    requestFeatures(requestor, pluginSender, featureObject) {
        // Grab any existing map or build a new one
        //pluginSender.updateFeatures([featureObject]);
        const sourceMap = this.findOrCreateSourceRequestMap(pluginSender);
        sourceMap.requestFeatures(featureObject.outputIndex, featureObject.frameSize, featureObject.features, requestor);
    }
    ;
    deleteFeaturesFromSource(source) {
        // This will imediately kill the source
        // Used when deleting the plugin!
        const sourceMap = this.Mappings.get(source);
        if (sourceMap === undefined) {
            return;
        }
        sourceMap.revokeFeatures();
        this.Mappings.delete(source);
    }
    deleteFeatures(requestor, pluginSender, featureObject) {
        if (pluginSender === undefined && featureObject === undefined) {
            // Bork everything to this plugin!
            for (const sourceMap of this.Mappings.values()) {
                sourceMap.revokeFeatures(undefined, undefined, requestor, undefined); // Will bork any lists with that requestor
            }
        }
        else {
            const sourceMap = this.Mappings.get(pluginSender);
            if (sourceMap === undefined) {
                return;
            }
            // Depending on the level of info in featureObject...
            sourceMap.revokeFeatures(featureObject === null || featureObject === void 0 ? void 0 : featureObject.outputIndex, featureObject === null || featureObject === void 0 ? void 0 : featureObject.frameSize, requestor, featureObject === null || featureObject === void 0 ? void 0 : featureObject.features);
        }
    }
    ;
    getFeatureList(requestor, pluginSender) { }
    ;
    postFeatures(featureObject) {
        // Receive from the Sender objects
        // Trigger distributed search for results transmission
        // First get the instance mapping for output/frame
        const source = this.Mappings.get(featureObject.source);
        if (!source) {
            return;
        }
        const outputMap = source.getOutputMap(featureObject.outputIndex);
        if (outputMap === undefined) {
            return;
        }
        for (const [receiver, features] of outputMap.receiverMap.get(featureObject.frameSize)) {
            // Right now just send all features around
            receiver.postFeatures(featureObject);
        }
    }
    ;
}


/***/ }),

/***/ "./src/Factory/MidiSynthesisInstance.ts":
/*!**********************************************!*\
  !*** ./src/Factory/MidiSynthesisInstance.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MidiSynthesisInstance": () => (/* binding */ MidiSynthesisInstance),
/* harmony export */   "isMidiSynthesisInstance": () => (/* binding */ isMidiSynthesisInstance)
/* harmony export */ });
/* harmony import */ var _SynthesiserBasePlugin_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../SynthesiserBasePlugin/index */ "./src/SynthesiserBasePlugin/index.ts");
/* jshint esversion: 6 */

class MidiSynthesisInstance {
    constructor(node) {
        this.node = node;
        this.output = this.node.context.createGain();
        this.node.getOutputs()[0].connect(this.output);
    }
    destroy() {
        this.node.destroy();
    }
    ;
    get prototypeObject() { return this.node.prototypeObject; }
    get externalInterface() { return this.node.externalInterface; }
}
function isMidiSynthesisInstance(object) {
    return object.node instanceof _SynthesiserBasePlugin_index__WEBPACK_IMPORTED_MODULE_0__.SynthesiserBasePlugin;
}


/***/ }),

/***/ "./src/Factory/MidiSynthesiserHost.ts":
/*!********************************************!*\
  !*** ./src/Factory/MidiSynthesiserHost.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MidiSynthesiserHost": () => (/* binding */ MidiSynthesiserHost)
/* harmony export */ });
/* harmony import */ var _LinkedStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../LinkedStore */ "./src/LinkedStore.ts");
/* jshint esversion: 6 */
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

class MidiSynthesiserHost {
    constructor(factory) {
        this.factory = factory;
        this.ev = new EventTarget();
        this.connections = [];
        this.SessionData = this.factory.SessionData;
        this.UserData = this.factory.UserData;
        this.TrackData = new _LinkedStore__WEBPACK_IMPORTED_MODULE_0__.LinkedStore("Track");
    }
    unloadSynthesiserSlot() {
        if (this.midiSynthSlot) {
            this.midiSynthSlot.node.cancelAllEvents(this.factory.context.currentTime);
            this.midiSynthSlot.node.disconnect();
            this.midiSynthSlot = undefined;
        }
    }
    buildNewSynthesiserObject(prototypeObject) {
        return __awaiter(this, void 0, void 0, function* () {
            this.unloadSynthesiserSlot();
            this.factory.deletePlugin(this.midiSynthSlot);
            if (prototypeObject.hasMidiInput == false || prototypeObject.hasMidiOutput == true) {
                throw new Error("Prototype is not a MidiSynthesis type. hasMidiInput must be true and hasMidiOutput must be false");
            }
            const node = yield prototypeObject.createPluginInstance(this);
            return node;
        });
    }
    addEventListener(type, listener, options) {
        return this.ev.addEventListener(type, listener, options);
    }
    removeEventListener(type, listener, options) {
        return this.ev.removeEventListener(type, listener, options);
    }
    connect(destinationNode, output, input) {
        if (destinationNode === undefined) {
            throw ("Must define an AudioNode object");
        }
        const exists = this.connections.find((conn) => {
            return conn.destinationNode == destinationNode && conn.output == output && conn.input == input;
        });
        if (exists) {
            return;
        }
        else {
            this.connections.push({
                destinationNode: destinationNode,
                output: output,
                input: input
            });
        }
        if (this.midiSynthSlot === undefined) {
            console.warn("MIDI Synthesiser is not loaded, connections will be validated on load");
        }
        else {
            this.midiSynthSlot.node.connect(destinationNode, output, input);
        }
    }
    disconnect(destinationNode, output, input) {
        if (destinationNode === undefined) {
            if (this.midiSynthSlot) {
                this.midiSynthSlot.node.disconnect();
            }
            this.connections = [];
        }
        else if (typeof destinationNode == "number" && typeof output == "undefined") {
            output = destinationNode;
            destinationNode = undefined;
            this.connections = this.connections.filter(function (conn) {
                if (conn.output == output) {
                    if (this.midiSynthSlot) {
                        this.midiSynthSlot.node.disconnect(conn.destinationNode, conn.output);
                    }
                    return false;
                }
                else {
                    return true;
                }
            });
        }
        else if (typeof destinationNode == "object" && typeof output == "undefined") {
            this.connections = this.connections.filter(function (conn) {
                if (conn.destinationNode == destinationNode) {
                    if (this.midiSynthSlot) {
                        this.midiSynthSlot.node.disconnect(conn.destinationNode);
                    }
                    return false;
                }
                else {
                    return true;
                }
            });
        }
        else if (typeof destinationNode == "object" && typeof output == "number") {
            this.connections = this.connections.filter(function (conn) {
                if (conn.destinationNode == destinationNode && conn.output == output) {
                    if (this.midiSynthSlot) {
                        this.midiSynthSlot.node.disconnect(conn.destinationNode, conn.output);
                    }
                    return false;
                }
                else {
                    return true;
                }
            });
        }
        else if (typeof destinationNode == "object" && typeof output == "number" && typeof input == "number") {
            this.connections = this.connections.filter(function (conn) {
                if (conn.destinationNode == destinationNode && conn.output == output && conn.input == input) {
                    if (this.midiSynthSlot) {
                        this.midiSynthSlot.node.disconnect(conn.destinationNode, conn.output, conn.input);
                    }
                    return false;
                }
                else {
                    return true;
                }
            });
        }
    }
    scheduleEvent(msg, t) {
        if (this.midiSynthSlot) {
            this.midiSynthSlot.node.scheduleEvent(msg, t);
        }
        else {
            throw ("MIDI Synthesiser not loaded");
        }
    }
    cancelAllEvents(t) {
        if (this.midiSynthSlot) {
            this.midiSynthSlot.node.cancelAllEvents(t);
        }
        else {
            throw ("MIDI Synthesiser not loaded");
        }
    }
    start() {
        if (this.midiSynthSlot) {
            this.midiSynthSlot.node.start();
        }
        else {
            throw ("MIDI Synthesiser not loaded");
        }
    }
    stop() {
        if (this.midiSynthSlot) {
            this.midiSynthSlot.node.stop();
        }
        else {
            throw ("MIDI Synthesiser not loaded");
        }
    }
    loadMidiSynthesiserModule(prototype) {
        return __awaiter(this, void 0, void 0, function* () {
            if (prototype.hasMidiInput == false || prototype.hasMidiOutput == true) {
                throw new Error("Prototype is not a MidiSynthesis type. hasMidiInput must be true and hasMidiOutput must be false");
            }
            let node;
            try {
                node = yield this.buildNewSynthesiserObject(prototype);
            }
            catch (e) {
                console.log(e);
                throw new Error("Plugin did not get created! Aborting");
            }
            ;
            node.node.onloaded.call(node.node);
            this.midiSynthSlot = node;
            this.connections.forEach(function (conn) {
                this.midiSynthSlot.node.connect(conn.destinationNode, conn.output, conn.input);
            });
            this.ev.dispatchEvent(new Event("loaded"));
            return this.midiSynthSlot;
        });
    }
    destroy() {
        this.unloadSynthesiserSlot();
        this.connections = undefined;
    }
    get midiSynthesiser() { return this.midiSynthSlot; }
}


/***/ }),

/***/ "./src/Factory/PluginAssets/PluginAsset.ts":
/*!*************************************************!*\
  !*** ./src/Factory/PluginAssets/PluginAsset.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PluginAsset": () => (/* binding */ PluginAsset)
/* harmony export */ });
/*eslint-env browser */
/* jshint esversion:6 */
class PluginAsset {
    constructor(pluginAssetManager, id, name, url, image_url, pack, _assetObject) {
        this.pluginAssetManager = pluginAssetManager;
        this.id = id;
        this.name = name;
        this.image_url = image_url;
        this.pack = pack;
        this._assetObject = _assetObject;
        this.usedBy = new Set();
        this.assetURL = new URL(url, window.location.origin);
    }
    abortScheduleForCleanup() {
        if (this.assetCleanupId !== undefined) {
            window.clearTimeout(this.assetCleanupId);
            this.assetCleanupId = undefined;
        }
    }
    scheduleForCleanup() {
        if (this.assetCleanupId !== undefined) {
            return;
        }
        this.assetCleanupId = window.setTimeout(() => {
            this._assetObject === undefined;
            this.assetCleanupId = undefined;
        }, 10000);
    }
    fetchAsset() {
        this.abortScheduleForCleanup();
        this.fetchPromise = this.pluginAssetManager.fetchAssetFunction(this)
            .then((ab) => {
            this._assetObject = ab;
            this.fetchPromise = undefined;
            return this._assetObject;
        });
    }
    fetch() {
        if (this._assetObject instanceof AudioBuffer) {
            return Promise.resolve(this._assetObject);
        }
        else if (this.fetchPromise === undefined) {
            this.fetchAsset();
        }
        return this.fetchPromise;
    }
    toJSON() {
        return { asset: this.assetURL.pathname };
    }
    toString() {
        return JSON.stringify(this.toJSON());
    }
    registerToPlugin(plugin) {
        this.abortScheduleForCleanup();
        this.usedBy.add(plugin);
    }
    deregisterFromPlugin(plugin) {
        this.usedBy.delete(plugin);
        if (this.usedBy.size === 0) {
            this.scheduleForCleanup();
        }
    }
    get url() { return this.assetURL.href; }
    get assetObject() { return this.assetObject; }
    get fetched() {
        return (this._assetObject instanceof AudioBuffer || this.fetchPromise !== undefined);
    }
}



/***/ }),

/***/ "./src/Factory/PluginAssets/PluginAssetManager.ts":
/*!********************************************************!*\
  !*** ./src/Factory/PluginAssets/PluginAssetManager.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PluginAssetsList": () => (/* reexport safe */ _PluginAssetsList__WEBPACK_IMPORTED_MODULE_0__.PluginAssetsList),
/* harmony export */   "PluginAsset": () => (/* reexport safe */ _PluginAsset__WEBPACK_IMPORTED_MODULE_2__.PluginAsset),
/* harmony export */   "PluginAssetManager": () => (/* binding */ PluginAssetManager)
/* harmony export */ });
/* harmony import */ var _PluginAssetsList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PluginAssetsList */ "./src/Factory/PluginAssets/PluginAssetsList.ts");
/* harmony import */ var _defaultAssetFetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./defaultAssetFetch */ "./src/Factory/PluginAssets/defaultAssetFetch.ts");
/* harmony import */ var _PluginAsset__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PluginAsset */ "./src/Factory/PluginAssets/PluginAsset.ts");
/*eslint-env browser */
/* jshint esversion:6 */
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




function findPackByName(assetPackList, name) {
    return assetPackList.find(function (l) {
        return l.name == name;
    });
}
class PluginAssetManager {
    constructor(factoryContext) {
        this.factoryContext = factoryContext;
        this.assetFetchFunction = _defaultAssetFetch__WEBPACK_IMPORTED_MODULE_1__.fetchAssetAsArrayBuffer;
        this.assetPacks = [];
    }
    findPackByName(name) {
        return this.assetPacks.find(l => l.name == name);
    }
    addPackToList(id, name, image_url, resourceType) {
        if (typeof name != "string") {
            throw new Error("addAssetUrlToList Argument-1 must be a type of string");
        }
        if (this.findPackByName(name)) {
            throw new Error(`Pack with name ${name} already in this list`);
        }
        const assetPack = new _PluginAssetsList__WEBPACK_IMPORTED_MODULE_0__.PluginAssetsList(this, id, name, image_url, resourceType);
        this.assetPacks.push(assetPack);
        return assetPack;
    }
    removeAssetPackFromList(assetPack) {
        const index = this.assetPacks.indexOf(assetPack);
        if (index == -1) {
            return this.assetPacks;
        }
        this.assetPacks.splice(index, 1);
        return this.assetPacks;
    }
    removeAssetPackFromListByName(name) {
        if (typeof name != "string") {
            throw "removeAssetUrlFromList Argument-1 must be a type of string";
        }
        const asset = this.findPackByName(name);
        return this.removeAssetPackFromList(asset);
    }
    importFromAssetLists(oldContext) {
        oldContext.assetPacks.forEach((originalAssetPack) => {
            const newContextPack = this.addPackToList(originalAssetPack.id, originalAssetPack.name, originalAssetPack.image_url, originalAssetPack.resourceType);
            originalAssetPack.assetObjects.forEach((originalAsset) => {
                let assetObject;
                if (originalAsset.assetObject !== undefined) {
                    assetObject = this.factoryContext.context.createBuffer(originalAsset.assetObject.numberOfChannels, originalAsset.assetObject.length, originalAsset.assetObject.sampleRate);
                    for (var i = 0; i < assetObject.numberOfChannels; i++) {
                        assetObject.copyToChannel(originalAsset.assetObject.getChannelData(i), i, 0);
                    }
                }
                //id, name, url, image_url, assetObject
                newContextPack.addAssetUrlToList(originalAsset.id, originalAsset.name, originalAsset.url, originalAsset.image_url, assetObject);
            });
        });
    }
    setDefaultAssetFetchFunction(func) {
        if (typeof func === "function") {
            this.assetFetchFunction = func;
        }
    }
    fetchAssetFunction(assetObject) {
        return __awaiter(this, void 0, void 0, function* () {
            const ab = yield this.assetFetchFunction(assetObject);
            return yield this.factoryContext.context.decodeAudioData(ab);
        });
    }
    getAllAssets() {
        return this.assetPacks.map(l => l.assetObjects).flat();
    }
    getAllAssetsByResourceType(resourceType) {
        if (typeof resourceType == "string" && resourceType.length > 0) {
            return this.assetPacks.filter((list) => list.resourceType == resourceType).map(l => l.assetObjects).flat();
        }
        else {
            return this.getAllAssets();
        }
    }
    findAssetByUrl(url) {
        const fullUrl = new URL(url, window.location.origin);
        return this.getAllAssets().find((asset) => {
            const assetFullUrl = new URL(asset.url, window.location.origin);
            return (fullUrl.hostname === assetFullUrl.hostname && fullUrl.pathname === assetFullUrl.pathname);
        });
    }
    findAssetById(id) {
        return this.getAllAssets().find((asset) => asset.id === id);
    }
    destroy() {
        this.assetFetchFunction = undefined;
    }
}


/***/ }),

/***/ "./src/Factory/PluginAssets/PluginAssetsList.ts":
/*!******************************************************!*\
  !*** ./src/Factory/PluginAssets/PluginAssetsList.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PluginAssetsList": () => (/* binding */ PluginAssetsList)
/* harmony export */ });
/* harmony import */ var _PluginAsset__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PluginAsset */ "./src/Factory/PluginAssets/PluginAsset.ts");
/*eslint-env browser */
/* jshint esversion:6 */

class PluginAssetsList {
    constructor(pluginAssetManager, id, name, image_url, resourceType) {
        this.pluginAssetManager = pluginAssetManager;
        this.id = id;
        this.name = name;
        this.image_url = image_url;
        this.resourceType = resourceType;
        this.assetObjects = [];
    }
    findAssetByUrl(url) {
        return this.assetObjects.find((asset) => {
            return asset.url == url;
        });
    }
    addAssetUrlToList(id, name, url, image_url, assetObject) {
        if (typeof url != "string") {
            throw new Error("addAssetUrlToList Argument-2 must be a type of string");
        }
        if (this.findAssetByUrl(url)) {
            throw new Error(`URL ${url} already in this list`);
        }
        this.assetObjects.push(new _PluginAsset__WEBPACK_IMPORTED_MODULE_0__.PluginAsset(this.pluginAssetManager, id, name, url, image_url, this, assetObject));
        return this.assetObjects;
    }
    removeAssetFromList(asset) {
        const index = this.assetObjects.findIndex((listObjects) => asset.url == listObjects.url);
        if (index == -1) {
            throw new Error("Asset not in this list");
        }
        this.assetObjects.splice(index, 1);
        return this.assetObjects;
    }
    removeAssetUrlFromList(url) {
        if (typeof url != "string") {
            throw new Error("removeAssetUrlFromList Argument-1 must be a type of string");
        }
        const asset = this.findAssetByUrl(url);
        return this.removeAssetFromList(asset);
    }
    ;
}



/***/ }),

/***/ "./src/Factory/PluginAssets/defaultAssetFetch.ts":
/*!*******************************************************!*\
  !*** ./src/Factory/PluginAssets/defaultAssetFetch.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchAssetAsArrayBuffer": () => (/* binding */ fetchAssetAsArrayBuffer)
/* harmony export */ });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function fetchAssetAsArrayBuffer(assetObject) {
    return __awaiter(this, void 0, void 0, function* () {
        const r = yield fetch(assetObject.url);
        return yield r.arrayBuffer();
    });
}


/***/ }),

/***/ "./src/Factory/PluginFactory.ts":
/*!**************************************!*\
  !*** ./src/Factory/PluginFactory.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PluginAssetsList": () => (/* reexport safe */ _PluginAssets_PluginAssetManager__WEBPACK_IMPORTED_MODULE_1__.PluginAssetsList),
/* harmony export */   "PluginAsset": () => (/* reexport safe */ _PluginAssets_PluginAssetManager__WEBPACK_IMPORTED_MODULE_1__.PluginAsset),
/* harmony export */   "PluginPrototype": () => (/* reexport safe */ _PluginPrototype__WEBPACK_IMPORTED_MODULE_2__.PluginPrototype),
/* harmony export */   "SynthesiserPrototype": () => (/* reexport safe */ _PluginPrototype__WEBPACK_IMPORTED_MODULE_2__.SynthesiserPrototype),
/* harmony export */   "FeatureMap": () => (/* reexport safe */ _FeatureMap_index__WEBPACK_IMPORTED_MODULE_3__.FeatureMap),
/* harmony export */   "AudioPluginChainManager": () => (/* reexport safe */ _AudioPluginChainManager_index__WEBPACK_IMPORTED_MODULE_4__.AudioPluginChainManager),
/* harmony export */   "MidiSynthesiserHost": () => (/* reexport safe */ _MidiSynthesiserHost__WEBPACK_IMPORTED_MODULE_5__.MidiSynthesiserHost),
/* harmony export */   "PluginUserInterfaceMessageHub": () => (/* reexport safe */ _PluginUserInterfaceMessageHub__WEBPACK_IMPORTED_MODULE_6__.PluginUserInterfaceMessageHub),
/* harmony export */   "isPluginInstance": () => (/* reexport safe */ _PluginInstance__WEBPACK_IMPORTED_MODULE_7__.isPluginInstance),
/* harmony export */   "PluginInstance": () => (/* reexport safe */ _PluginInstance__WEBPACK_IMPORTED_MODULE_7__.PluginInstance),
/* harmony export */   "isMidiSynthesisInstance": () => (/* reexport safe */ _MidiSynthesisInstance__WEBPACK_IMPORTED_MODULE_8__.isMidiSynthesisInstance),
/* harmony export */   "PluginFactory": () => (/* binding */ PluginFactory)
/* harmony export */ });
/* harmony import */ var _LinkedStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../LinkedStore */ "./src/LinkedStore.ts");
/* harmony import */ var _PluginAssets_PluginAssetManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PluginAssets/PluginAssetManager */ "./src/Factory/PluginAssets/PluginAssetManager.ts");
/* harmony import */ var _PluginPrototype__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PluginPrototype */ "./src/Factory/PluginPrototype.ts");
/* harmony import */ var _FeatureMap_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FeatureMap/index */ "./src/Factory/FeatureMap/index.ts");
/* harmony import */ var _AudioPluginChainManager_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AudioPluginChainManager/index */ "./src/Factory/AudioPluginChainManager/index.ts");
/* harmony import */ var _MidiSynthesiserHost__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MidiSynthesiserHost */ "./src/Factory/MidiSynthesiserHost.ts");
/* harmony import */ var _PluginUserInterfaceMessageHub__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PluginUserInterfaceMessageHub */ "./src/Factory/PluginUserInterfaceMessageHub.ts");
/* harmony import */ var _PluginInstance__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PluginInstance */ "./src/Factory/PluginInstance.ts");
/* harmony import */ var _MidiSynthesisInstance__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./MidiSynthesisInstance */ "./src/Factory/MidiSynthesisInstance.ts");
// This defines a master object for holding all the plugins and communicating
// This object will also handle creation and destruction of plugins
/*globals Promise, document, console, LinkedStore, Worker, window, XMLHttpRequest */
/*eslint-env browser */
/* jshint esversion:6 */
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};










class PluginFactory {
    constructor(context, rootURL) {
        this.context = context;
        this.rootURL = rootURL;
        this.plugin_prototypes = [];
        this.audioPluginChainManagers = [];
        this.synthesiserHosts = [];
        this.pluginsList = [];
        this.audioStarted = false;
        this.PluginGUI = new _PluginUserInterfaceMessageHub__WEBPACK_IMPORTED_MODULE_6__.PluginUserInterfaceMessageHub(this);
        this.stores = [];
        this.SessionData = new _LinkedStore__WEBPACK_IMPORTED_MODULE_0__.LinkedStore("Session");
        this.UserData = new _LinkedStore__WEBPACK_IMPORTED_MODULE_0__.LinkedStore("User");
        this.FeatureMap = new _FeatureMap_index__WEBPACK_IMPORTED_MODULE_3__.FeatureMap(this);
        this.pluginAssets = new _PluginAssets_PluginAssetManager__WEBPACK_IMPORTED_MODULE_1__.PluginAssetManager(this);
    }
    copyFactory(factory, newcontext) {
        return __awaiter(this, void 0, void 0, function* () {
            const BFactory = new PluginFactory(newcontext, this.rootURL);
            for (const proto of this.plugin_prototypes) {
                yield BFactory.addPrototype(proto.proto, proto.name, proto.version, proto.uniqueID);
            }
            BFactory.pluginAssets.importFromAssetLists(this.pluginAssets);
            return BFactory;
        });
    }
    pluginAudioStart(node, program_time, context_time) {
        node.start.call(node, program_time, context_time);
        node.parameters.getParameterNames().forEach(function (n) {
            var p = node.parameters.getParameterByName(n);
            if (p.enabled) {
                p.start(program_time, context_time);
            }
        });
    }
    pluginAudioStop(node) {
        const ct = this.context.currentTime;
        node.stop.call(node, ct);
        node.parameters.getParameterNames().forEach(function (n) {
            var p = node.parameters.getParameterByName(n);
            if (p.enabled) {
                p.stop(ct);
            }
        });
    }
    triggerAudioStart(program_time, context_time) {
        this.pluginsList.forEach((n) => {
            this.pluginAudioStart(n.node, program_time, context_time);
        });
    }
    triggerAudioStop() {
        this.pluginsList.forEach((n) => {
            this.pluginAudioStop(n.node);
        });
    }
    destroyFactory() {
        this.triggerAudioStop();
        for (const subFactory of Array.from(this.audioPluginChainManagers)) {
            this.destroyAudioPluginChainManager(subFactory);
        }
        for (const synthesiserHost of Array.from(this.synthesiserHosts)) {
            this.destroyMidiSynthesiserHost(synthesiserHost);
        }
        for (const plugin of Array.from(this.pluginsList)) {
            this.deletePlugin(plugin);
        }
        for (const prototype of Array.from(this.plugin_prototypes)) {
            this.deletePrototype(prototype);
        }
        this.pluginAssets.destroy();
    }
    ;
    loadPrototypeModule(resourceObject, mustModule = false) {
        return __awaiter(this, void 0, void 0, function* () {
            let module;
            try {
                module = __webpack_require__.g.require(resourceObject.url);
                if (typeof module === "function") {
                    return this.addPrototype(module, module.prototype.name, module.prototype.version, module.prototype.uniqueID);
                }
                else {
                    throw new Error("Is not a module plugin");
                }
            }
            catch (e) {
                if (mustModule === true) {
                    throw new Error("Cannot load using modular systems");
                }
                else {
                    console.warn("Could not load using modular systems");
                    return this.loadPluginScript(resourceObject);
                }
            }
            ;
        });
    }
    ;
    loadResource(resourceObject) {
        return __awaiter(this, void 0, void 0, function* () {
            if (typeof resourceObject !== "object") {
                throw new Error("Error");
            }
            else if (typeof resourceObject.url !== "string") {
                throw new Error("resourceObject.url must be a string");
            }
            else if (typeof resourceObject.test !== "function") {
                throw new Error("resourceObject.test must be a function");
            }
            const response = resourceObject.test();
            if (response !== false && response !== true) {
                throw new Error("resourceObject.test must return true or false");
            }
            if (!resourceObject.type) {
                resourceObject.type = "javascript";
            }
            resourceObject.type = resourceObject.type.toLowerCase();
            switch (resourceObject.type) {
                case "javascript":
                    if (!response) {
                        yield this.loadResource(resourceObject);
                    }
                    if (typeof resourceObject.returnObject === "string") {
                        if (window.hasOwnProperty(resourceObject.returnObject)) {
                            return (window[resourceObject.returnObject]);
                        }
                    }
                    break;
                default:
                    throw new Error("Invalid type " + String(resourceObject.type));
            }
        });
    }
    ;
    loadPluginScript(resourceObject) {
        return __awaiter(this, void 0, void 0, function* () {
            if (resourceObject) {
                if (typeof resourceObject.returnObject !== "string") {
                    throw new Error("resourceObject.returnObject must be the name of the prototype function");
                }
                const plugin = yield this.loadResource(resourceObject);
                return yield this.addPrototype(plugin, plugin.prototype.name, plugin.prototype.version, plugin.prototype.uniqueID);
            }
        });
    }
    ;
    injectPrototype(prototypeExecutable, name, version, uniqueID) {
        if (typeof prototypeExecutable != "function") {
            throw ("Invalid executable function");
        }
        return this.addPrototype(prototypeExecutable, name, version, uniqueID);
    }
    ;
    addPrototype(plugin_proto, name, version, uniqueID, hasMidiInput = false, hasMidiOutput = false) {
        if (typeof plugin_proto !== "function") {
            throw new Error("The Prototype must be a function!");
        }
        const testObj = {
            proto: plugin_proto,
            name,
            version,
            uniqueID
        };
        const obj = this.plugin_prototypes.find((e) => {
            let match = 0;
            for (const param in testObj) {
                if (e[param] === this[param]) {
                    match++;
                }
                else {
                    return false;
                }
            }
            return match === 4;
        });
        if (obj) {
            throw new Error("The plugin must be unique!");
        }
        if (hasMidiInput === false && hasMidiOutput === false) {
            const newPluginPrototpye = new _PluginPrototype__WEBPACK_IMPORTED_MODULE_2__.PluginPrototype(plugin_proto, this, name, version, uniqueID);
            this.plugin_prototypes.push(newPluginPrototpye);
            return newPluginPrototpye;
        }
        else if (hasMidiInput === true && hasMidiOutput === false) {
            const newPluginPrototpye = new _PluginPrototype__WEBPACK_IMPORTED_MODULE_2__.SynthesiserPrototype(plugin_proto, this, name, version, uniqueID);
            this.plugin_prototypes.push(newPluginPrototpye);
            return newPluginPrototpye;
        }
    }
    ;
    deletePrototype(plugin_proto) {
        const index = this.plugin_prototypes.indexOf(plugin_proto);
        if (index === -1) {
            return;
        }
        this.plugin_prototypes.splice(index, 1);
    }
    ;
    getPrototypes() {
        return this.plugin_prototypes;
    }
    ;
    getAudioPluginPrototypes() {
        return this.plugin_prototypes.filter(function (proto) {
            return proto instanceof _PluginPrototype__WEBPACK_IMPORTED_MODULE_2__.PluginPrototype && proto.hasMidiInput == false && proto.hasMidiOutput == false;
        });
    }
    ;
    getMidiSynthPrototypes() {
        return this.plugin_prototypes.filter(function (proto) {
            return proto instanceof _PluginPrototype__WEBPACK_IMPORTED_MODULE_2__.SynthesiserPrototype && proto.hasMidiInput == true && proto.hasMidiOutput == false;
        });
    }
    ;
    getMidiPluginPrototypes() {
        return this.plugin_prototypes.filter(function (proto) {
            return proto.hasMidiInput == true && proto.hasMidiOutput == true;
        });
    }
    ;
    getAllPlugins() {
        return this.pluginsList;
    }
    ;
    getAllPluginsObject() {
        const obj = {
            factory: this,
            audioPluginChainManagers: this.audioPluginChainManagers.map(subFactory => {
                return {
                    subFactory: subFactory,
                    plugins: subFactory.getPlugins()
                };
            })
        };
        return obj;
    }
    ;
    createAudioPluginChainManager(chainStart, chainStop) {
        const node = new _AudioPluginChainManager_index__WEBPACK_IMPORTED_MODULE_4__.AudioPluginChainManager(this, chainStart, chainStop);
        this.audioPluginChainManagers.push(node);
        return node;
    }
    ;
    duplicateAudioPluginChainManager(sourceChainManager, chainStart, chainStop) {
        return __awaiter(this, void 0, void 0, function* () {
            const node = this.createAudioPluginChainManager(chainStart, chainStop);
            for (const plugin_object of sourceChainManager.getPlugins()) {
                const newPlugin = yield node.createPlugin(plugin_object.prototypeObject);
                newPlugin.node.parameters.setParametersByObject(plugin_object.node.parameters.getParameterObject);
            }
            return node;
        });
    }
    ;
    destroyAudioPluginChainManager(SubFactory) {
        var index = this.audioPluginChainManagers.findIndex((element) => {
            if (element === SubFactory) {
                return true;
            }
            return false;
        });
        if (index >= 0) {
            this.audioPluginChainManagers.splice(index, 1);
            SubFactory.destroy();
        }
    }
    ;
    createMidiSynthesiserHost(factory) {
        if (factory === undefined) {
            factory = this;
        }
        const host = new _MidiSynthesiserHost__WEBPACK_IMPORTED_MODULE_5__.MidiSynthesiserHost(factory);
        this.synthesiserHosts.push(host);
        return host;
    }
    ;
    destroyMidiSynthesiserHost(host) {
        var index = this.synthesiserHosts.findIndex((element) => {
            if (element === host) {
                return true;
            }
            return false;
        });
        if (index >= 0) {
            this.synthesiserHosts.splice(index, 1);
            host.destroy();
        }
    }
    ;
    registerPluginInstance(instance) {
        if (this.pluginsList.find(p => p === instance)) {
            throw new Error("Plugin Instance not unique");
        }
        this.pluginsList.push(instance);
        if (this.audioStarted) {
            const context_time = this.context.currentTime;
            const program_time = this.getCurrentProgramTime();
            this.pluginAudioStart(instance.node, program_time, context_time);
        }
        return true;
    }
    ;
    deletePlugin(plugin) {
        const index = this.pluginsList.indexOf(plugin);
        if (index >= 0) {
            // Also check it isn't rogue attached to a plugin chain
            if ((0,_PluginInstance__WEBPACK_IMPORTED_MODULE_7__.isPluginInstance)(plugin)) {
                this.audioPluginChainManagers.forEach((subFactory) => {
                    if (subFactory.getPlugins().includes(plugin)) {
                        subFactory.removePlugin(plugin);
                    }
                });
            }
            else if ((0,_MidiSynthesisInstance__WEBPACK_IMPORTED_MODULE_8__.isMidiSynthesisInstance)(plugin)) {
                this.synthesiserHosts.forEach(host => {
                    if (host.midiSynthesiser === plugin) {
                        host.unloadSynthesiserSlot();
                    }
                });
            }
            this.pluginsList.splice(index, 1);
            plugin.node.delete();
            plugin.node.externalInterface.closeWindows();
        }
    }
    getCurrentProgramTime() {
        if (this.audioStarted) {
            return this.context.currentTime - this.audioStartContextTime + this.audioStartProgramTime;
        }
        else {
            return this.audioStartProgramTime;
        }
    }
    setCurrentProgramTime(time) {
        if (this.audioStarted) {
            throw new Error("Must stop playback to set the current program time");
        }
        if (typeof time == "number" && time >= 0) {
            this.audioStartProgramTime = time;
            this.PluginGUI.pollAllPlugins();
        }
    }
    audioStart(program_time, context_time) {
        if (context_time === undefined) {
            context_time = this.context.currentTime;
        }
        if (program_time === undefined) {
            program_time = 0;
            console.warn("Assuming start time at 0");
        }
        if (!this.audioStarted) {
            this.setCurrentProgramTime(program_time);
            this.audioStartContextTime = context_time;
            this.triggerAudioStart(program_time, context_time);
            this.audioStarted = true;
        }
    }
    audioStop() {
        if (this.audioStarted) {
            this.triggerAudioStop();
            this.audioStarted = false;
        }
    }
    createStore(storeName) {
        let node = this.findStore(storeName);
        if (node === undefined) {
            node = new _LinkedStore__WEBPACK_IMPORTED_MODULE_0__.LinkedStore(storeName);
            this.stores.push(node);
        }
        return node;
    }
    ;
    getStores() {
        return this.stores;
    }
    ;
    findStore(storeName) {
        return this.stores.find(a => a.name === storeName);
    }
    ;
    createFactoryCopy(context) {
        return this.copyFactory(this, context);
    }
    get hasAudioStarted() { return this.audioStarted; }
    get pluginRootURL() { return this.rootURL; }
    set pluginRootURL(t) { this.rootURL = t; }
    get subFactories() { return this.audioPluginChainManagers; }
}


/***/ }),

/***/ "./src/Factory/PluginInstance.ts":
/*!***************************************!*\
  !*** ./src/Factory/PluginInstance.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PluginInstance": () => (/* binding */ PluginInstance),
/* harmony export */   "isPluginInstance": () => (/* binding */ isPluginInstance)
/* harmony export */ });
/* harmony import */ var _BasePlugin_AudioPlugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../BasePlugin/AudioPlugin */ "./src/BasePlugin/AudioPlugin.ts");
/* jshint esversion: 6 */

/* jshint esversion: 6 */
class PluginInstance {
    constructor(node) {
        this.node = node;
        this._bypassed = false;
        this.ev = new EventTarget();
        this._in = this.node.context.createGain();
        this._out = this.node.context.createGain();
        this._in.connect(this.node.getInputs()[0]);
        this.node.getOutputs()[0].connect(this._out);
        this.node.addEventListener("parameterset", this);
        this.node.addEventListener("alterdelay", this);
    }
    bypassEnable() {
        this._in.disconnect();
        this._in.connect(this._out);
        this.node.getOutputs()[0].disconnect(this._out);
        this._bypassed = true;
        if (this.node.processingDelayAsSamples != 0) {
            this.ev.dispatchEvent(new Event("alterdelay"));
        }
        this.ev.dispatchEvent(new Event("bypassed"));
    }
    bypassDisable() {
        this._in.disconnect();
        this._in.connect(this.node.getInputs()[0]);
        this.node.getOutputs()[0].connect(this._out);
        this._bypassed = false;
        if (this.node.processingDelayAsSamples != 0) {
            this.ev.dispatchEvent(new Event("alterdelay"));
        }
        this.ev.dispatchEvent(new Event("bypassed"));
    }
    bypass(state) {
        state = (state === true);
        if (state === this._bypassed) {
            return this._bypassed;
        }
        if (state) {
            this.bypassEnable();
        }
        else {
            this.bypassDisable();
        }
        return this._bypassed;
    }
    isBypassed() {
        return this._bypassed;
    }
    reconnect(new_next) {
        this.connect(new_next);
    }
    connect(new_next) {
        if (this.next_node !== undefined) {
            this.disconnect();
        }
        if (new_next !== undefined && new_next.input !== undefined) {
            this.next_node = new_next;
            this._out.connect(this.next_node.input);
            return true;
        }
        return false;
    }
    disconnect() {
        if (this.next_node !== undefined) {
            this._out.disconnect(this.next_node.input);
            this.next_node = undefined;
        }
    }
    destroy() {
        this.node.destroy();
        this.node.removeEventListener("parameterset", this);
        this.node.removeEventListener("alterdelay", this);
    }
    handleEvent(e) {
        this.ev.dispatchEvent(new Event(e.type));
    }
    addEventListener(type, listener, options) {
        return this.ev.addEventListener(type, listener, options);
    }
    removeEventListener(type, listener, options) {
        return this.ev.removeEventListener(type, listener, options);
    }
    get input() { return this._in; }
    get output() { return this._out; }
    get bypassed() { return this._bypassed; }
    get prototypeObject() { return this.node.prototypeObject; }
    get externalInterface() { return this.node.externalInterface; }
}
function isPluginInstance(object) {
    return object.node instanceof _BasePlugin_AudioPlugin__WEBPACK_IMPORTED_MODULE_0__.AudioPlugin;
}


/***/ }),

/***/ "./src/Factory/PluginPrototype.ts":
/*!****************************************!*\
  !*** ./src/Factory/PluginPrototype.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PluginPrototype": () => (/* binding */ PluginPrototype),
/* harmony export */   "SynthesiserPrototype": () => (/* binding */ SynthesiserPrototype)
/* harmony export */ });
/* harmony import */ var _PluginInstance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PluginInstance */ "./src/Factory/PluginInstance.ts");
/* harmony import */ var _MidiSynthesisInstance__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MidiSynthesisInstance */ "./src/Factory/MidiSynthesisInstance.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/* jshint esversion: 6 */


class BasePluginPrototype {
    constructor(proto, factory, name, version, uniqueID, hasMidiInput, hasMidiOutput) {
        this.proto = proto;
        this.factory = factory;
        this.name = name;
        this.version = version;
        this.uniqueID = uniqueID;
        this.hasMidiInput = hasMidiInput;
        this.hasMidiOutput = hasMidiOutput;
    }
}
class PluginPrototype extends BasePluginPrototype {
    constructor(proto, factory, name, version, uniqueID) {
        super(proto, factory, name, version, uniqueID, false, false);
        this.proto = proto;
        this.factory = factory;
        this.name = name;
        this.version = version;
        this.uniqueID = uniqueID;
    }
    createPluginInstance(owner) {
        return __awaiter(this, void 0, void 0, function* () {
            const plugin = new this.proto(this.factory, owner, this);
            if (plugin.initialise) {
                yield plugin.initialise();
            }
            const node = new _PluginInstance__WEBPACK_IMPORTED_MODULE_0__.PluginInstance(plugin);
            this.factory.registerPluginInstance(node);
            return node;
        });
    }
}
class SynthesiserPrototype extends BasePluginPrototype {
    constructor(proto, factory, name, version, uniqueID) {
        super(proto, factory, name, version, uniqueID, true, false);
        this.proto = proto;
        this.factory = factory;
        this.name = name;
        this.version = version;
        this.uniqueID = uniqueID;
    }
    createPluginInstance(owner) {
        return __awaiter(this, void 0, void 0, function* () {
            const plugin = new this.proto(this.factory, owner, this);
            if (plugin.initialise) {
                yield plugin.initialise();
            }
            const node = new _MidiSynthesisInstance__WEBPACK_IMPORTED_MODULE_1__.MidiSynthesisInstance(plugin);
            this.factory.registerPluginInstance(node);
            return node;
        });
    }
}


/***/ }),

/***/ "./src/Factory/PluginUserInterfaceMessageHub.ts":
/*!******************************************************!*\
  !*** ./src/Factory/PluginUserInterfaceMessageHub.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PluginUserInterfaceMessageHub": () => (/* binding */ PluginUserInterfaceMessageHub)
/* harmony export */ });
/* jshint esversion: 6 */
class PluginUserInterfaceMessageHub {
    constructor(factory) {
        this.factory = factory;
        this.default_interface = {
            src: "jsap_default.html",
            width: 500,
            height: 500
        };
    }
    buildPluginInterface(plugin_object, interface_object) {
        const iframe = document.createElement("iframe");
        iframe.src = interface_object.src;
        if (interface_object.width) {
            iframe.width = `${interface_object.width}px`;
        }
        if (interface_object.height) {
            iframe.height = `${interface_object.height}px`;
        }
        iframe.style.border = "0";
        //iframe.contentWindow.pluginInstance = plugin_object;
        return iframe;
    }
    spawnPluginWindow(plugin_object, interface_object, opts) {
        const w = window.open(interface_object.src, plugin_object.name, opts);
        plugin_object.externalInterface.registerWindow(w);
        return w;
    }
    setDefaultInterface(src, width, height) {
        this.default_interface = {
            src: src,
            width: width,
            height: height
        };
        return this.default_interface;
    }
    pollAllPlugins() {
        this.factory.getAllPlugins().forEach(function (plugin) {
            plugin.node.externalInterface.updateInterfaces(true);
        });
    }
}


/***/ }),

/***/ "./src/LinkedStore.ts":
/*!****************************!*\
  !*** ./src/LinkedStore.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LinkedStore": () => (/* binding */ LinkedStore)
/* harmony export */ });
// Store for the semantic terms, each store holds its own data tree
// Terms are added as key/value paris to a root node
class LinkedStore {
    constructor(storeName) {
        this.storeName = storeName;
        this.et = new EventTarget();
    }
    objectToXML(obj, root, doc) {
        // Used if an object was passed as a term value
        for (const term of obj.keys()) {
            if (obj.hasOwnProperty(term)) {
                const entry = obj[term];
                if (typeof entry === "string") {
                    root.setAttribute(term, entry);
                }
                else if (typeof entry == "number") {
                    root.setAttribute(term, entry.toString());
                }
                else {
                    let docNode;
                    if (entry instanceof LinkedStore) {
                        docNode = entry.toXML(doc);
                    }
                    else {
                        docNode = doc.createElement(term);
                        root.appendChild(docNode);
                        if (entry instanceof Array) {
                            this.arrayToXML(entry, docNode, doc);
                        }
                        else {
                            this.objectToXML(entry, docNode, doc);
                        }
                    }
                    root.appendChild(docNode);
                }
            }
        }
    }
    arrayToXML(arr, root, doc) {
        // Used to convert an array to a list of XML entries
        var all_numbers = true, all_strings = true, i, l = arr.length;
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
        }
        else {
            // An array of objects
            arr.forEach(function (a, i) {
                var node = document.createElement("value");
                node.setAttribute("index", i);
                this.objectToXML(a, node, doc);
                root.appendChild(node);
            });
        }
    }
    addEventListener(type, listener, options) {
        return this.et.addEventListener(type, listener, options);
    }
    removeEventListener(type, callback, options) {
        return this.et.removeEventListener(type, callback, options);
    }
    setTerm(term, value) {
        if (typeof term !== "string" || term.length === 0) {
            throw ("term must be a string");
        }
        this.root.set(term, value);
        this.et.dispatchEvent(new CustomEvent("altered", { detail: { term: term, value: value } }));
    }
    setTerms(termsObject) {
        if (typeof termsObject !== "object") {
            throw ("setTerms takes an object of term/value pairs");
        }
        for (const term in termsObject) {
            if (termsObject.hasOwnProperty(term)) {
                this.setTerm(term, termsObject[term]);
            }
        }
    }
    deleteTerm(term) {
        this.setTerm(term, undefined);
    }
    getTerm(term) {
        if (typeof term !== "string" || term.length === 0) {
            throw ("term must be a string");
        }
        return this.root.get(term);
    }
    hasTerm(term) {
        if (typeof term !== "string" || term.length === 0) {
            throw ("term must be a string");
        }
        return this.root.has(term);
    }
    toJSON() {
        return JSON.parse(JSON.stringify(this.root));
    }
    toXML(doc) {
        let node;
        if (!doc) {
            doc = document.implementation.createDocument(null, this.storeName, null);
            node = doc.firstElementChild;
        }
        else {
            node = doc.createElement(this.storeName);
        }
        this.objectToXML(this.root, node, doc);
        return node;
    }
    get name() {
        return this.storeName;
    }
    set name(newName) {
        if (this.storeName !== undefined) {
            throw new Error("Name is already set");
        }
        this.storeName = newName;
    }
}


/***/ }),

/***/ "./src/SynthesiserBasePlugin/index.ts":
/*!********************************************!*\
  !*** ./src/SynthesiserBasePlugin/index.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SynthesiserBasePlugin": () => (/* binding */ SynthesiserBasePlugin),
/* harmony export */   "isSynthesiserBasePlugin": () => (/* binding */ isSynthesiserBasePlugin)
/* harmony export */ });
/* harmony import */ var _BasePlugin_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../BasePlugin/index */ "./src/BasePlugin/index.ts");
/* jshint esversion: 6 */

class SynthesiserBasePlugin extends _BasePlugin_index__WEBPACK_IMPORTED_MODULE_0__.BasePlugin {
    constructor(factory, pluginOwner, prototypeObject) {
        super(factory, pluginOwner, prototypeObject);
        this.factory = factory;
        this.prototypeObject = prototypeObject;
        this.hasWarnedScheduleNotSet = false;
        this.hasWarnedCancelNotSet = false;
        this.editorType = "roll";
    }
    stop(ct) {
        this.cancelAllEvents(ct);
    }
    addInput() {
        throw new Error("Cannot add input to type \"SynthesiserBasePlugin\"");
    }
    deleteInput() {
        throw new Error("Cannot delete input to type \"SynthesiserBasePlugin\"");
    }
    scheduleEvent(msg, contextTime) {
        if (!this.hasWarnedScheduleNotSet) {
            console.warn("WARNING - .scheduleEvent is not overridden");
            this.hasWarnedScheduleNotSet = true;
        }
    }
    cancelAllEvents(contextTime) {
        if (!this.hasWarnedCancelNotSet) {
            console.warn("WARNING - .cancelAllEvents is not overridden");
            this.hasWarnedCancelNotSet = true;
        }
    }
    setEditorType(type) {
        if (type == "roll" || type == "line" || type == "sequencer") {
            this.editorType = type;
        }
        return this.editorType;
    }
    getEditorType() { return this.editorType; }
    isNoteActive(n) {
        if (typeof n == "number" && n >= 0 && n < 128) {
            return true;
        }
        else {
            return false;
        }
    }
    getActiveNoteProperties() {
        const obj = [];
        for (var n = 0; n < 128; n++) {
            obj.push({
                code: n,
                name: this.midiNoteToName(n)
            });
        }
        return obj;
    }
    midiNoteToFrequency(m) {
        return Math.pow(2.0, (m - 69) / 12) * 440;
    }
    frequencyToMidiNote(f) {
        return Math.round(12.0 * Math.log2(f / 440)) + 69;
    }
    midiNoteToName(m) {
        const notes = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"];
        const root = m - 21;
        const octave = Math.floor(root / 12);
        const note = Math.floor((root + 36) % 12);
        return notes[note] + String(octave);
    }
    noteNameToMidi(n) {
        const notes = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"];
        const octave = Number(n.slice(n.length - 1));
        const note = notes.indexOf(n.slice(0, n.length - 1));
        return octave * 12 + note + 21;
    }
    noteNameToMIDI(n) {
        return this.noteNameToMidi;
    }
}
function isSynthesiserBasePlugin(object) {
    return object.inputs.length === 0 && object.outputs.length > 0 && `scheduleEvent` in object;
}


/***/ }),

/***/ "./src/utility/uniqueMergeArray.ts":
/*!*****************************************!*\
  !*** ./src/utility/uniqueMergeArray.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "uniqueMergeArray": () => (/* binding */ uniqueMergeArray)
/* harmony export */ });
function uniqueMergeArray(a, b) {
    const output = [];
    for (const entry of a) {
        if (output.includes(entry) === false) {
            output.push(entry);
        }
    }
    for (const entry of b) {
        if (output.includes(entry) === false) {
            output.push(entry);
        }
    }
    return output;
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AssetParameter": () => (/* reexport safe */ _BasePlugin_index__WEBPACK_IMPORTED_MODULE_0__.AssetParameter),
/* harmony export */   "BasePlugin": () => (/* reexport safe */ _BasePlugin_index__WEBPACK_IMPORTED_MODULE_0__.BasePlugin),
/* harmony export */   "ButtonParameter": () => (/* reexport safe */ _BasePlugin_index__WEBPACK_IMPORTED_MODULE_0__.ButtonParameter),
/* harmony export */   "LinkedStoreInterface": () => (/* reexport safe */ _BasePlugin_index__WEBPACK_IMPORTED_MODULE_0__.LinkedStoreInterface),
/* harmony export */   "ListParameter": () => (/* reexport safe */ _BasePlugin_index__WEBPACK_IMPORTED_MODULE_0__.ListParameter),
/* harmony export */   "NumberParameter": () => (/* reexport safe */ _BasePlugin_index__WEBPACK_IMPORTED_MODULE_0__.NumberParameter),
/* harmony export */   "ParameterManager": () => (/* reexport safe */ _BasePlugin_index__WEBPACK_IMPORTED_MODULE_0__.ParameterManager),
/* harmony export */   "StringParameter": () => (/* reexport safe */ _BasePlugin_index__WEBPACK_IMPORTED_MODULE_0__.StringParameter),
/* harmony export */   "SwitchParameter": () => (/* reexport safe */ _BasePlugin_index__WEBPACK_IMPORTED_MODULE_0__.SwitchParameter),
/* harmony export */   "URLParameter": () => (/* reexport safe */ _BasePlugin_index__WEBPACK_IMPORTED_MODULE_0__.URLParameter),
/* harmony export */   "SynthesiserBasePlugin": () => (/* reexport safe */ _SynthesiserBasePlugin_index__WEBPACK_IMPORTED_MODULE_1__.SynthesiserBasePlugin),
/* harmony export */   "isSynthesiserBasePlugin": () => (/* reexport safe */ _SynthesiserBasePlugin_index__WEBPACK_IMPORTED_MODULE_1__.isSynthesiserBasePlugin),
/* harmony export */   "AudioPluginChainManager": () => (/* reexport safe */ _Factory_PluginFactory__WEBPACK_IMPORTED_MODULE_2__.AudioPluginChainManager),
/* harmony export */   "FeatureMap": () => (/* reexport safe */ _Factory_PluginFactory__WEBPACK_IMPORTED_MODULE_2__.FeatureMap),
/* harmony export */   "MidiSynthesiserHost": () => (/* reexport safe */ _Factory_PluginFactory__WEBPACK_IMPORTED_MODULE_2__.MidiSynthesiserHost),
/* harmony export */   "PluginAsset": () => (/* reexport safe */ _Factory_PluginFactory__WEBPACK_IMPORTED_MODULE_2__.PluginAsset),
/* harmony export */   "PluginAssetsList": () => (/* reexport safe */ _Factory_PluginFactory__WEBPACK_IMPORTED_MODULE_2__.PluginAssetsList),
/* harmony export */   "PluginFactory": () => (/* reexport safe */ _Factory_PluginFactory__WEBPACK_IMPORTED_MODULE_2__.PluginFactory),
/* harmony export */   "PluginInstance": () => (/* reexport safe */ _Factory_PluginFactory__WEBPACK_IMPORTED_MODULE_2__.PluginInstance),
/* harmony export */   "PluginPrototype": () => (/* reexport safe */ _Factory_PluginFactory__WEBPACK_IMPORTED_MODULE_2__.PluginPrototype),
/* harmony export */   "PluginUserInterfaceMessageHub": () => (/* reexport safe */ _Factory_PluginFactory__WEBPACK_IMPORTED_MODULE_2__.PluginUserInterfaceMessageHub),
/* harmony export */   "SynthesiserPrototype": () => (/* reexport safe */ _Factory_PluginFactory__WEBPACK_IMPORTED_MODULE_2__.SynthesiserPrototype),
/* harmony export */   "isMidiSynthesisInstance": () => (/* reexport safe */ _Factory_PluginFactory__WEBPACK_IMPORTED_MODULE_2__.isMidiSynthesisInstance),
/* harmony export */   "isPluginInstance": () => (/* reexport safe */ _Factory_PluginFactory__WEBPACK_IMPORTED_MODULE_2__.isPluginInstance),
/* harmony export */   "AudioPlugin": () => (/* reexport safe */ _BasePlugin_AudioPlugin__WEBPACK_IMPORTED_MODULE_3__.AudioPlugin)
/* harmony export */ });
/* harmony import */ var _BasePlugin_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BasePlugin/index */ "./src/BasePlugin/index.ts");
/* harmony import */ var _SynthesiserBasePlugin_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SynthesiserBasePlugin/index */ "./src/SynthesiserBasePlugin/index.ts");
/* harmony import */ var _Factory_PluginFactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Factory/PluginFactory */ "./src/Factory/PluginFactory.ts");
/* harmony import */ var _BasePlugin_AudioPlugin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BasePlugin/AudioPlugin */ "./src/BasePlugin/AudioPlugin.ts");
// This defines a master object for holding all the plugins and communicating
// This object will also handle creation and destruction of plugins
/*globals Promise, document, console, LinkedStore, Worker, window, XMLHttpRequest */
/*eslint-env browser */
/* jshint esversion:6 */





})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=index.js.map