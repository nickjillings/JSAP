var JSAP;
/******/ (() => { // webpackBootstrap
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
            const param = new _parameters_AssetParameter__WEBPACK_IMPORTED_MODULE_6__.AssetParameter(this.owner, name, visibleName, exposed);
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
                        parameter.setParametersByObject(entry, updateInterfaces);
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
            const sources = parameterNames.filter(function (name) {
                var param = this.owner.parameters.getParameterByName(name);
                return (param.automatable && param.enabled === true);
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
        if (this.windowMessageList.includes(w)) {
            this.windowMessageList.splice(this.windowMessageList.indexOf(w), 1);
        }
        this.windowMessageList.push(w);
        w.pluginInstance = this.owner;
        this.sendParameterUpdates(w);
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
/* harmony export */   "BasePlugin": () => (/* binding */ BasePlugin)
/* harmony export */ });
/* harmony import */ var _ParameterManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ParameterManager */ "./src/BasePlugin/ParameterManager.ts");
/* harmony import */ var _PluginInterfaceMessageHub__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PluginInterfaceMessageHub */ "./src/BasePlugin/PluginInterfaceMessageHub.ts");
/* harmony import */ var _PluginFeatureInterface_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PluginFeatureInterface/index */ "./src/BasePlugin/PluginFeatureInterface/index.ts");
/* harmony import */ var _LinkedStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../LinkedStore */ "./src/LinkedStore.ts");
/* harmony import */ var _LinkedStoreInterface__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LinkedStoreInterface */ "./src/BasePlugin/LinkedStoreInterface.ts");
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
        this.parameters.addEventListener("parameterset", function (e) {
            this.eventTarget.dispatchEvent(new CustomEvent("parameterset", { detail: e.detail }));
        });
    }
    start() { }
    stop() { }
    onloaded() { }
    onunloaded() { }
    deconstruct() { }
    deleteIO(node, list) {
        var i = list.findIndex(function (e) {
            return e === this;
        }, node);
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
/* harmony export */   "isPluginBaseParameter": () => (/* binding */ isPluginBaseParameter),
/* harmony export */   "isPluginParameter": () => (/* binding */ isPluginParameter),
/* harmony export */   "isAutomatedPluginParameter": () => (/* binding */ isAutomatedPluginParameter)
/* harmony export */ });
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
        this.FactoryFeatureMap.createSourceMap(this, undefined);
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
            'plugin': this,
            'outputIndex': featureObject.outputIndex,
            'frameSize': featureObject.frameSize,
            'results': featureObject.results
        });
    }
    ;
    destroy() {
        this.FactoryFeatureMap.deleteSourceMap(this);
    }
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
/* harmony export */   "PluginAssetManager": () => (/* binding */ PluginAssetManager)
/* harmony export */ });
/* harmony import */ var _PluginAssetsList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PluginAssetsList */ "./src/Factory/PluginAssets/PluginAssetsList.ts");
/* harmony import */ var _defaultAssetFetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./defaultAssetFetch */ "./src/Factory/PluginAssets/defaultAssetFetch.ts");
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
        this.destroyAudioPluginChainManager = function (SubFactory) {
            var index = this.audioPluginChainManagers.findIndex(function (element) {
                if (element === this) {
                    return true;
                }
                return false;
            }, SubFactory);
            if (index >= 0) {
                this.audioPluginChainManagers.splice(index, 1);
                SubFactory.destroy();
            }
        };
    }
    copyFactory(factory, newcontext) {
        return __awaiter(this, void 0, void 0, function* () {
            const BFactory = new PluginFactory(newcontext, this.rootURL);
            for (const proto of this.plugin_prototypes) {
                yield BFactory.addPrototype(proto.proto);
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
        this.pluginsList.forEach(function (n) {
            this.pluginAudioStart(n.node, program_time, context_time);
        });
    }
    triggerAudioStop() {
        this.pluginsList.forEach(function (n) {
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
                if (typeof __webpack_require__.g.define === "function" && __webpack_require__.g.define.amd) {
                    module = __webpack_require__.g.require(resourceObject.url);
                }
                else if (typeof __webpack_require__.g.module == "object" && __webpack_require__.g.module.exports) {
                    module = (__webpack_require__.g.require(resourceObject.url));
                }
                else {
                    throw new Error("Cannot load using require");
                }
                if (typeof module === "function") {
                    return this.addPrototype(module);
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
                return yield this.addPrototype(plugin);
            }
        });
    }
    ;
    injectPrototype(prototypeExecutable) {
        if (typeof prototypeExecutable != "function") {
            throw ("Invalid executable function");
        }
        return this.addPrototype(prototypeExecutable);
    }
    ;
    addPrototype(plugin_proto) {
        if (typeof plugin_proto !== "function") {
            throw new Error("The Prototype must be a function!");
        }
        else if (typeof plugin_proto.prototype.name !== "string" || plugin_proto.prototype.name.length === 0) {
            throw new Error("Malformed plugin. Name not defined");
        }
        else if (typeof plugin_proto.prototype.version !== "string" || plugin_proto.prototype.version.length === 0) {
            throw new Error("Malformed plugin. Version not defined");
        }
        else if (typeof plugin_proto.prototype.uniqueID !== "string" || plugin_proto.prototype.uniqueID.length === 0) {
            throw new Error("Malformed plugin. uniqueID not defined");
        }
        const testObj = {
            'proto': plugin_proto,
            'name': plugin_proto.prototype.name,
            'version': plugin_proto.prototype.version,
            'uniqueID': plugin_proto.prototype.uniqueID
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
        const newPluginPrototpye = new _PluginPrototype__WEBPACK_IMPORTED_MODULE_2__.PluginPrototype(plugin_proto, this);
        this.plugin_prototypes.push(newPluginPrototpye);
        return newPluginPrototpye;
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
            return proto.hasMidiInput == false && proto.hasMidiOutput == false;
        });
    }
    ;
    getMidiSynthPrototypes() {
        return this.plugin_prototypes.filter(function (proto) {
            return proto.hasMidiInput == true && proto.hasMidiOutput == false;
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
            'factory': this,
            'audioPluginChainManagers': []
        };
        for (let i = 0; i < this.audioPluginChainManagers.length; i++) {
            obj.audioPluginChainManagers.push({
                'subFactory': this.audioPluginChainManagers[i],
                'plugins': this.audioPluginChainManagers[i].getPlugins()
            });
        }
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
        var index = this.synthesiserHosts.findIndex(function (element) {
            if (element === this) {
                return true;
            }
            return false;
        }, host);
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
    constructor(proto, factory) {
        this.proto = proto;
        this.factory = factory;
    }
    get name() { return this.proto.prototype.name; }
    get version() { return this.proto.prototype.version; }
    get uniqueID() { return this.proto.prototype.uniqueID; }
    get hasMidiInput() { return (this.proto.prototype.hasMidiInput || false); }
    get hasMidiOutput() { return (this.proto.prototype.hasMidiOutput || false); }
}
class PluginPrototype extends BasePluginPrototype {
    constructor(proto, factory) {
        super(proto, factory);
        this.proto = proto;
        this.factory = factory;
    }
    createPluginInstance(owner) {
        return __awaiter(this, void 0, void 0, function* () {
            const plugin = new this.proto(this.factory, owner);
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
    constructor(proto, factory) {
        super(proto, factory);
        this.proto = proto;
        this.factory = factory;
    }
    createPluginInstance(owner) {
        return __awaiter(this, void 0, void 0, function* () {
            const plugin = new this.proto(this.factory, owner);
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
            width: "500px",
            height: "500px"
        };
    }
    buildPluginInterface(plugin_object, interface_object) {
        const iframe = document.createElement("iframe");
        iframe.src = interface_object.src;
        if (interface_object.width) {
            iframe.width = interface_object.width;
        }
        if (interface_object.height) {
            iframe.height = interface_object.height;
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
    stop() {
        this.cancelAllEvents();
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
/* harmony export */   "BasePlugin": () => (/* reexport safe */ _BasePlugin_index__WEBPACK_IMPORTED_MODULE_0__.BasePlugin),
/* harmony export */   "SynthesiserBasePlugin": () => (/* reexport safe */ _SynthesiserBasePlugin_index__WEBPACK_IMPORTED_MODULE_1__.SynthesiserBasePlugin),
/* harmony export */   "PluginFactory": () => (/* reexport safe */ _Factory_PluginFactory__WEBPACK_IMPORTED_MODULE_2__.PluginFactory)
/* harmony export */ });
/* harmony import */ var _BasePlugin_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BasePlugin/index */ "./src/BasePlugin/index.ts");
/* harmony import */ var _SynthesiserBasePlugin_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SynthesiserBasePlugin/index */ "./src/SynthesiserBasePlugin/index.ts");
/* harmony import */ var _Factory_PluginFactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Factory/PluginFactory */ "./src/Factory/PluginFactory.ts");
// This defines a master object for holding all the plugins and communicating
// This object will also handle creation and destruction of plugins
/*globals Promise, document, console, LinkedStore, Worker, window, XMLHttpRequest */
/*eslint-env browser */
/* jshint esversion:6 */





})();

JSAP = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9KU0FQL2pzWHRyYWN0L3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9KU0FQL2pzWHRyYWN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0pTQVAvanNYdHJhY3QvbW9kdWxlcy9mcmVlRkZULmpzIiwid2VicGFjazovL0pTQVAvanNYdHJhY3QvbW9kdWxlcy9mdW5jdGlvbnMveHRyYWN0X2FtZGYuanMiLCJ3ZWJwYWNrOi8vSlNBUC9qc1h0cmFjdC9tb2R1bGVzL2Z1bmN0aW9ucy94dHJhY3RfYXBwbHlfd2luZG93LmpzIiwid2VicGFjazovL0pTQVAvanNYdHJhY3QvbW9kdWxlcy9mdW5jdGlvbnMveHRyYWN0X2FycmF5X2JvdW5kLmpzIiwid2VicGFjazovL0pTQVAvanNYdHJhY3QvbW9kdWxlcy9mdW5jdGlvbnMveHRyYWN0X2FycmF5X2NvcHkuanMiLCJ3ZWJwYWNrOi8vSlNBUC9qc1h0cmFjdC9tb2R1bGVzL2Z1bmN0aW9ucy94dHJhY3RfYXJyYXlfZGVpbnRlcmxhY2UuanMiLCJ3ZWJwYWNrOi8vSlNBUC9qc1h0cmFjdC9tb2R1bGVzL2Z1bmN0aW9ucy94dHJhY3RfYXJyYXlfaW50ZXJsYWNlLmpzIiwid2VicGFjazovL0pTQVAvanNYdHJhY3QvbW9kdWxlcy9mdW5jdGlvbnMveHRyYWN0X2FycmF5X21heC5qcyIsIndlYnBhY2s6Ly9KU0FQL2pzWHRyYWN0L21vZHVsZXMvZnVuY3Rpb25zL3h0cmFjdF9hcnJheV9taW4uanMiLCJ3ZWJwYWNrOi8vSlNBUC9qc1h0cmFjdC9tb2R1bGVzL2Z1bmN0aW9ucy94dHJhY3RfYXJyYXlfbm9ybWFsaXNlLmpzIiwid2VicGFjazovL0pTQVAvanNYdHJhY3QvbW9kdWxlcy9mdW5jdGlvbnMveHRyYWN0X2FycmF5X3NjYWxlLmpzIiwid2VicGFjazovL0pTQVAvanNYdHJhY3QvbW9kdWxlcy9mdW5jdGlvbnMveHRyYWN0X2FycmF5X3N1bS5qcyIsIndlYnBhY2s6Ly9KU0FQL2pzWHRyYWN0L21vZHVsZXMvZnVuY3Rpb25zL3h0cmFjdF9hcnJheV90b19KU09OLmpzIiwid2VicGFjazovL0pTQVAvanNYdHJhY3QvbW9kdWxlcy9mdW5jdGlvbnMveHRyYWN0X2FzZGYuanMiLCJ3ZWJwYWNrOi8vSlNBUC9qc1h0cmFjdC9tb2R1bGVzL2Z1bmN0aW9ucy94dHJhY3RfYXNzZXJ0X2FycmF5LmpzIiwid2VicGFjazovL0pTQVAvanNYdHJhY3QvbW9kdWxlcy9mdW5jdGlvbnMveHRyYWN0X2Fzc2VydF9wb3NpdGl2ZV9pbnRlZ2VyLmpzIiwid2VicGFjazovL0pTQVAvanNYdHJhY3QvbW9kdWxlcy9mdW5jdGlvbnMveHRyYWN0X2F1dG9jb3JyZWxhdGlvbi5qcyIsIndlYnBhY2s6Ly9KU0FQL2pzWHRyYWN0L21vZHVsZXMvZnVuY3Rpb25zL3h0cmFjdF9hdmVyYWdlX2RldmlhdGlvbi5qcyIsIndlYnBhY2s6Ly9KU0FQL2pzWHRyYWN0L21vZHVsZXMvZnVuY3Rpb25zL3h0cmFjdF9iYXJrX2NvZWZmaWNpZW50cy5qcyIsIndlYnBhY2s6Ly9KU0FQL2pzWHRyYWN0L21vZHVsZXMvZnVuY3Rpb25zL3h0cmFjdF9jaHJvbWEuanMiLCJ3ZWJwYWNrOi8vSlNBUC9qc1h0cmFjdC9tb2R1bGVzL2Z1bmN0aW9ucy94dHJhY3RfY29tcGxleF9zcGVjdHJ1bS5qcyIsIndlYnBhY2s6Ly9KU0FQL2pzWHRyYWN0L21vZHVsZXMvZnVuY3Rpb25zL3h0cmFjdF9jcmVhdGVfd2luZG93LmpzIiwid2VicGFjazovL0pTQVAvanNYdHJhY3QvbW9kdWxlcy9mdW5jdGlvbnMveHRyYWN0X2NyZXN0LmpzIiwid2VicGFjazovL0pTQVAvanNYdHJhY3QvbW9kdWxlcy9mdW5jdGlvbnMveHRyYWN0X2RjdC5qcyIsIndlYnBhY2s6Ly9KU0FQL2pzWHRyYWN0L21vZHVsZXMvZnVuY3Rpb25zL3h0cmFjdF9kY3RfMi5qcyIsIndlYnBhY2s6Ly9KU0FQL2pzWHRyYWN0L21vZHVsZXMvZnVuY3Rpb25zL3h0cmFjdF9lbmVyZ3kuanMiLCJ3ZWJwYWNrOi8vSlNBUC9qc1h0cmFjdC9tb2R1bGVzL2Z1bmN0aW9ucy94dHJhY3RfZjAuanMiLCJ3ZWJwYWNrOi8vSlNBUC9qc1h0cmFjdC9tb2R1bGVzL2Z1bmN0aW9ucy94dHJhY3RfZmFpbHNhZmVfZjAuanMiLCJ3ZWJwYWNrOi8vSlNBUC9qc1h0cmFjdC9tb2R1bGVzL2Z1bmN0aW9ucy94dHJhY3RfZmxhdG5lc3MuanMiLCJ3ZWJwYWNrOi8vSlNBUC9qc1h0cmFjdC9tb2R1bGVzL2Z1bmN0aW9ucy94dHJhY3RfZmxhdG5lc3NfZGIuanMiLCJ3ZWJwYWNrOi8vSlNBUC9qc1h0cmFjdC9tb2R1bGVzL2Z1bmN0aW9ucy94dHJhY3RfZnJhbWVfZnJvbV9hcnJheS5qcyIsIndlYnBhY2s6Ly9KU0FQL2pzWHRyYWN0L21vZHVsZXMvZnVuY3Rpb25zL3h0cmFjdF9nZXRfZGF0YV9mcmFtZXMuanMiLCJ3ZWJwYWNrOi8vSlNBUC9qc1h0cmFjdC9tb2R1bGVzL2Z1bmN0aW9ucy94dHJhY3RfZ2V0X251bWJlcl9vZl9mcmFtZXMuanMiLCJ3ZWJwYWNrOi8vSlNBUC9qc1h0cmFjdC9tb2R1bGVzL2Z1bmN0aW9ucy94dHJhY3RfaGFybW9uaWNfc3BlY3RydW0uanMiLCJ3ZWJwYWNrOi8vSlNBUC9qc1h0cmFjdC9tb2R1bGVzL2Z1bmN0aW9ucy94dHJhY3RfaGlnaGVzdF92YWx1ZS5qcyIsIndlYnBhY2s6Ly9KU0FQL2pzWHRyYWN0L21vZHVsZXMvZnVuY3Rpb25zL3h0cmFjdF9ocHMuanMiLCJ3ZWJwYWNrOi8vSlNBUC9qc1h0cmFjdC9tb2R1bGVzL2Z1bmN0aW9ucy94dHJhY3RfaW5pdF9iYXJrLmpzIiwid2VicGFjazovL0pTQVAvanNYdHJhY3QvbW9kdWxlcy9mdW5jdGlvbnMveHRyYWN0X2luaXRfY2hyb21hLmpzIiwid2VicGFjazovL0pTQVAvanNYdHJhY3QvbW9kdWxlcy9mdW5jdGlvbnMveHRyYWN0X2luaXRfZGN0LmpzIiwid2VicGFjazovL0pTQVAvanNYdHJhY3QvbW9kdWxlcy9mdW5jdGlvbnMveHRyYWN0X2luaXRfZGZ0LmpzIiwid2VicGFjazovL0pTQVAvanNYdHJhY3QvbW9kdWxlcy9mdW5jdGlvbnMveHRyYWN0X2luaXRfbWZjYy5qcyIsIndlYnBhY2s6Ly9KU0FQL2pzWHRyYWN0L21vZHVsZXMvZnVuY3Rpb25zL3h0cmFjdF9pbml0X3BjcC5qcyIsIndlYnBhY2s6Ly9KU0FQL2pzWHRyYWN0L21vZHVsZXMvZnVuY3Rpb25zL3h0cmFjdF9pbml0X3dhdmVsZXQuanMiLCJ3ZWJwYWNrOi8vSlNBUC9qc1h0cmFjdC9tb2R1bGVzL2Z1bmN0aW9ucy94dHJhY3RfaXJyZWd1bGFyaXR5X2ouanMiLCJ3ZWJwYWNrOi8vSlNBUC9qc1h0cmFjdC9tb2R1bGVzL2Z1bmN0aW9ucy94dHJhY3RfaXJyZWd1bGFyaXR5X2suanMiLCJ3ZWJwYWNrOi8vSlNBUC9qc1h0cmFjdC9tb2R1bGVzL2Z1bmN0aW9ucy94dHJhY3RfaXNfZGVub3JtYWwuanMiLCJ3ZWJwYWNrOi8vSlNBUC9qc1h0cmFjdC9tb2R1bGVzL2Z1bmN0aW9ucy94dHJhY3Rfa3VydG9zaXMuanMiLCJ3ZWJwYWNrOi8vSlNBUC9qc1h0cmFjdC9tb2R1bGVzL2Z1bmN0aW9ucy94dHJhY3RfbG91ZG5lc3MuanMiLCJ3ZWJwYWNrOi8vSlNBUC9qc1h0cmFjdC9tb2R1bGVzL2Z1bmN0aW9ucy94dHJhY3RfbG93ZXN0X3ZhbHVlLmpzIiwid2VicGFjazovL0pTQVAvanNYdHJhY3QvbW9kdWxlcy9mdW5jdGlvbnMveHRyYWN0X2xvd2hpZ2guanMiLCJ3ZWJwYWNrOi8vSlNBUC9qc1h0cmFjdC9tb2R1bGVzL2Z1bmN0aW9ucy94dHJhY3RfbHBjLmpzIiwid2VicGFjazovL0pTQVAvanNYdHJhY3QvbW9kdWxlcy9mdW5jdGlvbnMveHRyYWN0X2xwY2MuanMiLCJ3ZWJwYWNrOi8vSlNBUC9qc1h0cmFjdC9tb2R1bGVzL2Z1bmN0aW9ucy94dHJhY3RfbWVhbi5qcyIsIndlYnBhY2s6Ly9KU0FQL2pzWHRyYWN0L21vZHVsZXMvZnVuY3Rpb25zL3h0cmFjdF9tZmNjLmpzIiwid2VicGFjazovL0pTQVAvanNYdHJhY3QvbW9kdWxlcy9mdW5jdGlvbnMveHRyYWN0X21pZGljZW50LmpzIiwid2VicGFjazovL0pTQVAvanNYdHJhY3QvbW9kdWxlcy9mdW5jdGlvbnMveHRyYWN0X25vaXNpbmVzcy5qcyIsIndlYnBhY2s6Ly9KU0FQL2pzWHRyYWN0L21vZHVsZXMvZnVuY3Rpb25zL3h0cmFjdF9ub256ZXJvX2NvdW50LmpzIiwid2VicGFjazovL0pTQVAvanNYdHJhY3QvbW9kdWxlcy9mdW5jdGlvbnMveHRyYWN0X29kZF9ldmVuX3JhdGlvLmpzIiwid2VicGFjazovL0pTQVAvanNYdHJhY3QvbW9kdWxlcy9mdW5jdGlvbnMveHRyYWN0X29uc2V0LmpzIiwid2VicGFjazovL0pTQVAvanNYdHJhY3QvbW9kdWxlcy9mdW5jdGlvbnMveHRyYWN0X3BjcC5qcyIsIndlYnBhY2s6Ly9KU0FQL2pzWHRyYWN0L21vZHVsZXMvZnVuY3Rpb25zL3h0cmFjdF9wZWFrX3NwZWN0cnVtLmpzIiwid2VicGFjazovL0pTQVAvanNYdHJhY3QvbW9kdWxlcy9mdW5jdGlvbnMveHRyYWN0X3Bvd2VyLmpzIiwid2VicGFjazovL0pTQVAvanNYdHJhY3QvbW9kdWxlcy9mdW5jdGlvbnMveHRyYWN0X3Byb2Nlc3NfZnJhbWVfZGF0YS5qcyIsIndlYnBhY2s6Ly9KU0FQL2pzWHRyYWN0L21vZHVsZXMvZnVuY3Rpb25zL3h0cmFjdF9yZXNhbXBsZS5qcyIsIndlYnBhY2s6Ly9KU0FQL2pzWHRyYWN0L21vZHVsZXMvZnVuY3Rpb25zL3h0cmFjdF9ybXNfYW1wbGl0dWRlLmpzIiwid2VicGFjazovL0pTQVAvanNYdHJhY3QvbW9kdWxlcy9mdW5jdGlvbnMveHRyYWN0X3JvbGxvZmYuanMiLCJ3ZWJwYWNrOi8vSlNBUC9qc1h0cmFjdC9tb2R1bGVzL2Z1bmN0aW9ucy94dHJhY3Rfc2hhcnBuZXNzLmpzIiwid2VicGFjazovL0pTQVAvanNYdHJhY3QvbW9kdWxlcy9mdW5jdGlvbnMveHRyYWN0X3NrZXduZXNzLmpzIiwid2VicGFjazovL0pTQVAvanNYdHJhY3QvbW9kdWxlcy9mdW5jdGlvbnMveHRyYWN0X3NrZXduZXNzX2t1cnRvc2lzLmpzIiwid2VicGFjazovL0pTQVAvanNYdHJhY3QvbW9kdWxlcy9mdW5jdGlvbnMveHRyYWN0X3Ntb290aG5lc3MuanMiLCJ3ZWJwYWNrOi8vSlNBUC9qc1h0cmFjdC9tb2R1bGVzL2Z1bmN0aW9ucy94dHJhY3Rfc3BlY3RyYWxfY2VudHJvaWQuanMiLCJ3ZWJwYWNrOi8vSlNBUC9qc1h0cmFjdC9tb2R1bGVzL2Z1bmN0aW9ucy94dHJhY3Rfc3BlY3RyYWxfZnVuZGFtZW50YWwuanMiLCJ3ZWJwYWNrOi8vSlNBUC9qc1h0cmFjdC9tb2R1bGVzL2Z1bmN0aW9ucy94dHJhY3Rfc3BlY3RyYWxfaW5oYXJtb25pY2l0eS5qcyIsIndlYnBhY2s6Ly9KU0FQL2pzWHRyYWN0L21vZHVsZXMvZnVuY3Rpb25zL3h0cmFjdF9zcGVjdHJhbF9rdXJ0b3Npcy5qcyIsIndlYnBhY2s6Ly9KU0FQL2pzWHRyYWN0L21vZHVsZXMvZnVuY3Rpb25zL3h0cmFjdF9zcGVjdHJhbF9tZWFuLmpzIiwid2VicGFjazovL0pTQVAvanNYdHJhY3QvbW9kdWxlcy9mdW5jdGlvbnMveHRyYWN0X3NwZWN0cmFsX3NrZXduZXNzLmpzIiwid2VicGFjazovL0pTQVAvanNYdHJhY3QvbW9kdWxlcy9mdW5jdGlvbnMveHRyYWN0X3NwZWN0cmFsX3Nsb3BlLmpzIiwid2VicGFjazovL0pTQVAvanNYdHJhY3QvbW9kdWxlcy9mdW5jdGlvbnMveHRyYWN0X3NwZWN0cmFsX3NwcmVhZC5qcyIsIndlYnBhY2s6Ly9KU0FQL2pzWHRyYWN0L21vZHVsZXMvZnVuY3Rpb25zL3h0cmFjdF9zcGVjdHJhbF9zdGFuZGFyZF9kZXZpYXRpb24uanMiLCJ3ZWJwYWNrOi8vSlNBUC9qc1h0cmFjdC9tb2R1bGVzL2Z1bmN0aW9ucy94dHJhY3Rfc3BlY3RyYWxfdmFyaWFuY2UuanMiLCJ3ZWJwYWNrOi8vSlNBUC9qc1h0cmFjdC9tb2R1bGVzL2Z1bmN0aW9ucy94dHJhY3Rfc3BlY3RydW0uanMiLCJ3ZWJwYWNrOi8vSlNBUC9qc1h0cmFjdC9tb2R1bGVzL2Z1bmN0aW9ucy94dHJhY3Rfc3RhbmRhcmRfZGV2aWF0aW9uLmpzIiwid2VicGFjazovL0pTQVAvanNYdHJhY3QvbW9kdWxlcy9mdW5jdGlvbnMveHRyYWN0X3N1bS5qcyIsIndlYnBhY2s6Ly9KU0FQL2pzWHRyYWN0L21vZHVsZXMvZnVuY3Rpb25zL3h0cmFjdF90ZW1wb3JhbF9jZW50cm9pZC5qcyIsIndlYnBhY2s6Ly9KU0FQL2pzWHRyYWN0L21vZHVsZXMvZnVuY3Rpb25zL3h0cmFjdF90b25hbGl0eS5qcyIsIndlYnBhY2s6Ly9KU0FQL2pzWHRyYWN0L21vZHVsZXMvZnVuY3Rpb25zL3h0cmFjdF90cmlzdGltdWx1cy5qcyIsIndlYnBhY2s6Ly9KU0FQL2pzWHRyYWN0L21vZHVsZXMvZnVuY3Rpb25zL3h0cmFjdF92YXJpYW5jZS5qcyIsIndlYnBhY2s6Ly9KU0FQL2pzWHRyYWN0L21vZHVsZXMvZnVuY3Rpb25zL3h0cmFjdF93YXZlbGV0X2YwLmpzIiwid2VicGFjazovL0pTQVAvanNYdHJhY3QvbW9kdWxlcy9mdW5jdGlvbnMveHRyYWN0X3lpbi5qcyIsIndlYnBhY2s6Ly9KU0FQL2pzWHRyYWN0L21vZHVsZXMvZnVuY3Rpb25zL3h0cmFjdF96Y3IuanMiLCJ3ZWJwYWNrOi8vSlNBUC9qc1h0cmFjdC9tb2R1bGVzL2luZGV4LmpzIiwid2VicGFjazovL0pTQVAvanNYdHJhY3QvbW9kdWxlcy9vYmplY3RzL0NvbW1vbk1lbW9yeS5qcyIsIndlYnBhY2s6Ly9KU0FQL2pzWHRyYWN0L21vZHVsZXMvb2JqZWN0cy9EYXRhUHJvdG90eXBlLmpzIiwid2VicGFjazovL0pTQVAvanNYdHJhY3QvbW9kdWxlcy9vYmplY3RzL0hhcm1vbmljU3BlY3RydW1EYXRhLmpzIiwid2VicGFjazovL0pTQVAvanNYdHJhY3QvbW9kdWxlcy9vYmplY3RzL1BlYWtTcGVjdHJ1bURhdGEuanMiLCJ3ZWJwYWNrOi8vSlNBUC9qc1h0cmFjdC9tb2R1bGVzL29iamVjdHMvU3BlY3RydW1EYXRhLmpzIiwid2VicGFjazovL0pTQVAvanNYdHJhY3QvbW9kdWxlcy9vYmplY3RzL1RpbWVEYXRhLmpzIiwid2VicGFjazovL0pTQVAvLi9zcmMvQmFzZVBsdWdpbi9BdWRpb1BsdWdpbi50cyIsIndlYnBhY2s6Ly9KU0FQLy4vc3JjL0Jhc2VQbHVnaW4vTGlua2VkU3RvcmVJbnRlcmZhY2UudHMiLCJ3ZWJwYWNrOi8vSlNBUC8uL3NyYy9CYXNlUGx1Z2luL1BhcmFtZXRlck1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vSlNBUC8uL3NyYy9CYXNlUGx1Z2luL1BsdWdpbkZlYXR1cmVJbnRlcmZhY2UvUGx1Z2luRmVhdHVyZUludGVyZmFjZVJlY2VpdmVyLnRzIiwid2VicGFjazovL0pTQVAvLi9zcmMvQmFzZVBsdWdpbi9QbHVnaW5GZWF0dXJlSW50ZXJmYWNlL1BsdWdpbkZlYXR1cmVJbnRlcmZhY2VTZW5kZXIudHMiLCJ3ZWJwYWNrOi8vSlNBUC8uL3NyYy9CYXNlUGx1Z2luL1BsdWdpbkZlYXR1cmVJbnRlcmZhY2UvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vSlNBUC8uL3NyYy9CYXNlUGx1Z2luL1BsdWdpbkludGVyZmFjZU1lc3NhZ2VIdWIudHMiLCJ3ZWJwYWNrOi8vSlNBUC8uL3NyYy9CYXNlUGx1Z2luL2luZGV4LnRzIiwid2VicGFjazovL0pTQVAvLi9zcmMvQmFzZVBsdWdpbi9wYXJhbWV0ZXJzL0Fzc2V0UGFyYW1ldGVyLnRzIiwid2VicGFjazovL0pTQVAvLi9zcmMvQmFzZVBsdWdpbi9wYXJhbWV0ZXJzL0J1dHRvblBhcmFtZXRlci50cyIsIndlYnBhY2s6Ly9KU0FQLy4vc3JjL0Jhc2VQbHVnaW4vcGFyYW1ldGVycy9JUGx1Z2luUGFyYW1ldGVyLnRzIiwid2VicGFjazovL0pTQVAvLi9zcmMvQmFzZVBsdWdpbi9wYXJhbWV0ZXJzL0xpc3RQYXJhbWV0ZXIudHMiLCJ3ZWJwYWNrOi8vSlNBUC8uL3NyYy9CYXNlUGx1Z2luL3BhcmFtZXRlcnMvTnVtYmVyUGFyYW1ldGVyLnRzIiwid2VicGFjazovL0pTQVAvLi9zcmMvQmFzZVBsdWdpbi9wYXJhbWV0ZXJzL1BhcmFtZXRlckF1dG9tYXRpb24udHMiLCJ3ZWJwYWNrOi8vSlNBUC8uL3NyYy9CYXNlUGx1Z2luL3BhcmFtZXRlcnMvUGx1Z2luUGFyYW1ldGVyLnRzIiwid2VicGFjazovL0pTQVAvLi9zcmMvQmFzZVBsdWdpbi9wYXJhbWV0ZXJzL1N0cmluZ1BhcmFtZXRlci50cyIsIndlYnBhY2s6Ly9KU0FQLy4vc3JjL0Jhc2VQbHVnaW4vcGFyYW1ldGVycy9Td2l0Y2hQYXJhbWV0ZXIudHMiLCJ3ZWJwYWNrOi8vSlNBUC8uL3NyYy9CYXNlUGx1Z2luL3BhcmFtZXRlcnMvVVJMUGFyYW1ldGVyLnRzIiwid2VicGFjazovL0pTQVAvLi9zcmMvRmFjdG9yeS9BdWRpb1BsdWdpbkNoYWluTWFuYWdlci9TdWJGYWN0b3J5RmVhdHVyZVNlbmRlci9pbmRleC50cyIsIndlYnBhY2s6Ly9KU0FQLy4vc3JjL0ZhY3RvcnkvQXVkaW9QbHVnaW5DaGFpbk1hbmFnZXIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vSlNBUC8uL3NyYy9GYWN0b3J5L0V4dHJhY3RvcnMvRXh0cmFjdG9yLnRzIiwid2VicGFjazovL0pTQVAvLi9zcmMvRmFjdG9yeS9FeHRyYWN0b3JzL091dHB1dE5vZGUudHMiLCJ3ZWJwYWNrOi8vSlNBUC8uL3NyYy9GYWN0b3J5L0V4dHJhY3RvcnMvV29ya2VyRXh0cmFjdG9yLnRzIiwid2VicGFjazovL0pTQVAvLi9zcmMvRmFjdG9yeS9GZWF0dXJlTWFwL2luZGV4LnRzIiwid2VicGFjazovL0pTQVAvLi9zcmMvRmFjdG9yeS9NaWRpU3ludGhlc2lzSW5zdGFuY2UudHMiLCJ3ZWJwYWNrOi8vSlNBUC8uL3NyYy9GYWN0b3J5L01pZGlTeW50aGVzaXNlckhvc3QudHMiLCJ3ZWJwYWNrOi8vSlNBUC8uL3NyYy9GYWN0b3J5L1BsdWdpbkFzc2V0cy9QbHVnaW5Bc3NldC50cyIsIndlYnBhY2s6Ly9KU0FQLy4vc3JjL0ZhY3RvcnkvUGx1Z2luQXNzZXRzL1BsdWdpbkFzc2V0TWFuYWdlci50cyIsIndlYnBhY2s6Ly9KU0FQLy4vc3JjL0ZhY3RvcnkvUGx1Z2luQXNzZXRzL1BsdWdpbkFzc2V0c0xpc3QudHMiLCJ3ZWJwYWNrOi8vSlNBUC8uL3NyYy9GYWN0b3J5L1BsdWdpbkFzc2V0cy9kZWZhdWx0QXNzZXRGZXRjaC50cyIsIndlYnBhY2s6Ly9KU0FQLy4vc3JjL0ZhY3RvcnkvUGx1Z2luRmFjdG9yeS50cyIsIndlYnBhY2s6Ly9KU0FQLy4vc3JjL0ZhY3RvcnkvUGx1Z2luSW5zdGFuY2UudHMiLCJ3ZWJwYWNrOi8vSlNBUC8uL3NyYy9GYWN0b3J5L1BsdWdpblByb3RvdHlwZS50cyIsIndlYnBhY2s6Ly9KU0FQLy4vc3JjL0ZhY3RvcnkvUGx1Z2luVXNlckludGVyZmFjZU1lc3NhZ2VIdWIudHMiLCJ3ZWJwYWNrOi8vSlNBUC8uL3NyYy9MaW5rZWRTdG9yZS50cyIsIndlYnBhY2s6Ly9KU0FQLy4vc3JjL1N5bnRoZXNpc2VyQmFzZVBsdWdpbi9pbmRleC50cyIsIndlYnBhY2s6Ly9KU0FQLy4vc3JjL3V0aWxpdHkvdW5pcXVlTWVyZ2VBcnJheS50cyIsIndlYnBhY2s6Ly9KU0FQL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0pTQVAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vSlNBUC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vSlNBUC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL0pTQVAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9KU0FQL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNr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QUFBO0FBQzBEO0FBQ25EO0FBQ1AsU0FBUyxnRkFBbUI7QUFDNUI7QUFDQTtBQUNBLG1CQUFtQixzQkFBc0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDWkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFd0M7QUFHQztBQUdXO0FBR2Q7QUFHQztBQUdEO0FBR0E7QUFHRTtBQUdJO0FBR0o7QUFHSTtBQUdFO0FBR0c7QUFHTDtBQUdHO0FBR0w7QUFHRztBQUdaO0FBR2E7QUFHVDtBQUdVO0FBR0Q7QUFHQTtBQUdUO0FBR0E7QUFHUztBQUdKO0FBR0k7QUFHRjtBQUdZO0FBR1Y7QUFHQTtBQUdIO0FBR0E7QUFNSDtBQUdEO0FBR1A7QUFHSTtBQUdDO0FBR0E7QUFHRztBQUdIO0FBR0g7QUFHSTtBQUdJO0FBR1M7QUFHakI7QUFHUztBQUdMO0FBR0s7QUFHUDtBQUdLO0FB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7OztBQzNuQkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDOEM7QUFDRjtBQUN5QjtBQUNOO0FBQ0E7QUFDQTtBQUNWO0FBQzBCO0FBQ2xCO0FBQ29CO0FBQ0Y7QUFDbEI7QUFDQTtBQUNWO0FBQ0k7QUFDZ0I7QUFDRjtBQUNFO0FBQ047QUFDUjtBQUNJO0FBQ047QUFDb0I7QUFDdEI7QUFDQTtBQUNGO0FBQ0k7QUFDTTs7QUFFdEQsdUJBQXVCLDREQUFhO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0Esd0JBQXdCLDBGQUFtQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixnQkFBZ0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxvRkFBZ0I7QUFDbEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQ0FBa0Msb0ZBQWdCO0FBQ2xEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsOEJBQThCLG9GQUFnQjtBQUM5QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLCtCQUErQiwwRUFBVztBQUMxQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLG9HQUF3QjtBQUNwRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1DQUFtQyxrRkFBZTtBQUNsRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDZDQUE2QyxzR0FBeUI7QUFDdEU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0Q0FBNEMscUdBQXdCO0FBQ3BFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUNBQW1DLG1GQUFlO0FBQ2xEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUNBQW1DLG1GQUFlO0FBQ2xEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsOEJBQThCLHlFQUFVO0FBQ3hDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUNBQXVDLDZFQUFZO0FBQ25EO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0NBQXdDLDZGQUFvQjtBQUM1RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVDQUF1QywyRkFBbUI7QUFDMUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3Q0FBd0MsNkZBQW9CO0FBQzVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLHVGQUFpQjtBQUM5QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLCtFQUFhO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHdCQUF3QixtRkFBZTtBQUN2Qyx1Q0FBdUMsMERBQVk7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4Qiw2RUFBWTtBQUMxQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDBDQUEwQyxpR0FBc0I7QUFDaEU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwrQkFBK0IsMkVBQVc7QUFDMUM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwrQkFBK0IsMkVBQVc7QUFDMUM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw4QkFBOEIseUVBQVU7QUFDeEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qiw2RUFBWTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLG1GQUFlO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5ZGdDO0FBQzlCLDBCQUEwQiw4Q0FBVTtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MseUVBQXVCO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoS0E7QUFDb0Q7QUFDYztBQUMzRCw4QkFBOEIsNkRBQWU7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsMkVBQXlCO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQix1QkFBdUI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLDRCQUE0QjtBQUN2RCx1QkFBdUIsc0NBQXNDO0FBQzdELDRCQUE0Qix3QkFBd0I7QUFDcEQsbUJBQW1CLFFBQVEsK0VBQStFO0FBQzFHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1SEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0VBQXNFLHFCQUFxQjtBQUMzRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDOVBPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQiwyRUFBZ0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeE5BO0FBQ3VFO0FBQ2hFO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJB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QUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIscUJBQU0sMEJBQTBCLHFCQUFNO0FBQ2pFLDZCQUE2QixxQkFBTTtBQUNuQztBQUNBLGdDQUFnQyxxQkFBTSx1QkFBdUIscUJBQU07QUFDbkUsOEJBQThCLHFCQUFNO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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Q0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDYkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGdDQUFnQyxZQUFZO1dBQzVDO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxFQUFFO1dBQ0Y7V0FDQTtXQUNBLENBQUMsSTs7Ozs7V0NQRCx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2dEO0FBQ3NCO0FBQ2Q7QUFDSSIsImZpbGUiOiIuL0pTQVAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJqc1h0cmFjdFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJqc1h0cmFjdFwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vbW9kdWxlcy9pbmRleC5qc1wiKTtcbiIsIi8qXG4gKiBGcmVlIEZGVCBhbmQgY29udm9sdXRpb24gKEphdmFTY3JpcHQpXG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDE0IFByb2plY3QgTmF5dWtpXG4gKiBodHRwczovL3d3dy5uYXl1a2kuaW8vcGFnZS9mcmVlLXNtYWxsLWZmdC1pbi1tdWx0aXBsZS1sYW5ndWFnZXNcbiAqXG4gKiAoTUlUIExpY2Vuc2UpXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mXG4gKiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluXG4gKiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvXG4gKiB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZlxuICogdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLFxuICogc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKiAtIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiAgIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICogLSBUaGUgU29mdHdhcmUgaXMgcHJvdmlkZWQgXCJhcyBpc1wiLCB3aXRob3V0IHdhcnJhbnR5IG9mIGFueSBraW5kLCBleHByZXNzIG9yXG4gKiAgIGltcGxpZWQsIGluY2x1ZGluZyBidXQgbm90IGxpbWl0ZWQgdG8gdGhlIHdhcnJhbnRpZXMgb2YgbWVyY2hhbnRhYmlsaXR5LFxuICogICBmaXRuZXNzIGZvciBhIHBhcnRpY3VsYXIgcHVycG9zZSBhbmQgbm9uaW5mcmluZ2VtZW50LiBJbiBubyBldmVudCBzaGFsbCB0aGVcbiAqICAgYXV0aG9ycyBvciBjb3B5cmlnaHQgaG9sZGVycyBiZSBsaWFibGUgZm9yIGFueSBjbGFpbSwgZGFtYWdlcyBvciBvdGhlclxuICogICBsaWFiaWxpdHksIHdoZXRoZXIgaW4gYW4gYWN0aW9uIG9mIGNvbnRyYWN0LCB0b3J0IG9yIG90aGVyd2lzZSwgYXJpc2luZyBmcm9tLFxuICogICBvdXQgb2Ygb3IgaW4gY29ubmVjdGlvbiB3aXRoIHRoZSBTb2Z0d2FyZSBvciB0aGUgdXNlIG9yIG90aGVyIGRlYWxpbmdzIGluIHRoZVxuICogICBTb2Z0d2FyZS5cbiAqL1xuXG5cbi8qXG4gKiBDb21wdXRlcyB0aGUgZGlzY3JldGUgRm91cmllciB0cmFuc2Zvcm0gKERGVCkgb2YgdGhlIGdpdmVuIGNvbXBsZXggdmVjdG9yLCBzdG9yaW5nIHRoZSByZXN1bHQgYmFjayBpbnRvIHRoZSB2ZWN0b3IuXG4gKiBUaGUgdmVjdG9yIGNhbiBoYXZlIGFueSBsZW5ndGguIFRoaXMgaXMgYSB3cmFwcGVyIGZ1bmN0aW9uLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtKHJlYWwsIGltYWcpIHtcbiAgICBpZiAocmVhbC5sZW5ndGggIT09IGltYWcubGVuZ3RoKVxuICAgICAgICB0aHJvdyBcIk1pc21hdGNoZWQgbGVuZ3Roc1wiO1xuXG4gICAgdmFyIG4gPSByZWFsLmxlbmd0aDtcbiAgICBpZiAobiA9PT0gMClcbiAgICAgICAgcmV0dXJuO1xuICAgIGVsc2UgaWYgKChuICYgKG4gLSAxKSkgPT09IDApIC8vIElzIHBvd2VyIG9mIDJcbiAgICAgICAgdHJhbnNmb3JtUmFkaXgyKHJlYWwsIGltYWcpO1xuICAgIGVsc2UgLy8gTW9yZSBjb21wbGljYXRlZCBhbGdvcml0aG0gZm9yIGFyYml0cmFyeSBzaXplc1xuICAgICAgICB0cmFuc2Zvcm1CbHVlc3RlaW4ocmVhbCwgaW1hZyk7XG59XG5cblxuLypcbiAqIENvbXB1dGVzIHRoZSBpbnZlcnNlIGRpc2NyZXRlIEZvdXJpZXIgdHJhbnNmb3JtIChJREZUKSBvZiB0aGUgZ2l2ZW4gY29tcGxleCB2ZWN0b3IsIHN0b3JpbmcgdGhlIHJlc3VsdCBiYWNrIGludG8gdGhlIHZlY3Rvci5cbiAqIFRoZSB2ZWN0b3IgY2FuIGhhdmUgYW55IGxlbmd0aC4gVGhpcyBpcyBhIHdyYXBwZXIgZnVuY3Rpb24uIFRoaXMgdHJhbnNmb3JtIGRvZXMgbm90IHBlcmZvcm0gc2NhbGluZywgc28gdGhlIGludmVyc2UgaXMgbm90IGEgdHJ1ZSBpbnZlcnNlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaW52ZXJzZVRyYW5zZm9ybShyZWFsLCBpbWFnKSB7XG4gICAgdHJhbnNmb3JtKGltYWcsIHJlYWwpO1xufVxuXG5cbi8qXG4gKiBDb21wdXRlcyB0aGUgZGlzY3JldGUgRm91cmllciB0cmFuc2Zvcm0gKERGVCkgb2YgdGhlIGdpdmVuIGNvbXBsZXggdmVjdG9yLCBzdG9yaW5nIHRoZSByZXN1bHQgYmFjayBpbnRvIHRoZSB2ZWN0b3IuXG4gKiBUaGUgdmVjdG9yJ3MgbGVuZ3RoIG11c3QgYmUgYSBwb3dlciBvZiAyLiBVc2VzIHRoZSBDb29sZXktVHVrZXkgZGVjaW1hdGlvbi1pbi10aW1lIHJhZGl4LTIgYWxnb3JpdGhtLlxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm1SYWRpeDIocmVhbCwgaW1hZykge1xuICAgIC8vIEluaXRpYWxpemF0aW9uXG4gICAgaWYgKHJlYWwubGVuZ3RoICE9PSBpbWFnLmxlbmd0aClcbiAgICAgICAgdGhyb3cgXCJNaXNtYXRjaGVkIGxlbmd0aHNcIjtcbiAgICB2YXIgbiA9IHJlYWwubGVuZ3RoO1xuICAgIGlmIChuID09PSAxKSAvLyBUcml2aWFsIHRyYW5zZm9ybVxuICAgICAgICByZXR1cm47XG4gICAgdmFyIGxldmVscyA9IGNhbGN1bGF0ZU51bWJlckxldmVscyhuKTtcbiAgICBpZiAobGV2ZWxzID09PSAtMSlcbiAgICAgICAgdGhyb3cgXCJMZW5ndGggaXMgbm90IGEgcG93ZXIgb2YgMlwiO1xuICAgIHZhciBjb3NUYWJsZSA9IG5ldyBGbG9hdDY0QXJyYXkobiAvIDIpO1xuICAgIHZhciBzaW5UYWJsZSA9IG5ldyBGbG9hdDY0QXJyYXkobiAvIDIpO1xuICAgIGNhbGN1bGF0ZUNvc1NpbmVUYWJsZXMoY29zVGFibGUsIHNpblRhYmxlKTtcblxuICAgIC8vIEJpdC1yZXZlcnNlZCBhZGRyZXNzaW5nIHBlcm11dGF0aW9uXG4gICAgYml0UmV2ZXJzZU1hcChyZWFsLCBpbWFnKTtcblxuICAgIC8vIENvb2xleS1UdWtleSBkZWNpbWF0aW9uLWluLXRpbWUgcmFkaXgtMiBGRlRcbiAgICBmb3IgKHZhciBzaXplID0gMjsgc2l6ZSA8PSBuOyBzaXplICo9IDIpIHtcbiAgICAgICAgY29vbGV5VHVrZXkocmVhbCwgaW1hZywgc2luVGFibGUsIGNvc1RhYmxlLCBzaXplKTtcbiAgICB9XG5cbiAgICAvLyBSZXR1cm5zIHRoZSBpbnRlZ2VyIHdob3NlIHZhbHVlIGlzIHRoZSByZXZlcnNlIG9mIHRoZSBsb3dlc3QgJ2JpdHMnIGJpdHMgb2YgdGhlIGludGVnZXIgJ3gnLlxuICAgIGZ1bmN0aW9uIHJldmVyc2VCaXRzKHgsIGJpdHMpIHtcbiAgICAgICAgdmFyIHkgPSAwO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJpdHM7IGkrKykge1xuICAgICAgICAgICAgeSA9ICh5IDw8IDEpIHwgKHggJiAxKTtcbiAgICAgICAgICAgIHggPj4+PSAxO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB5O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNvb2xleVR1a2V5KHJlYWwsIGltYWcsIHNpblRhYmxlLCBjb3NUYWJsZSwgc2l6ZSkge1xuICAgICAgICB2YXIgaSwgaiwgaztcbiAgICAgICAgdmFyIG4gPSByZWFsLmxlbmd0aDtcbiAgICAgICAgdmFyIGhhbGZzaXplID0gc2l6ZSAvIDI7XG4gICAgICAgIHZhciB0YWJsZXN0ZXAgPSBuIC8gc2l6ZTtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IG47IGkgKz0gc2l6ZSkge1xuICAgICAgICAgICAgZm9yIChqID0gaSwgayA9IDA7IGogPCBpICsgaGFsZnNpemU7IGorKywgayArPSB0YWJsZXN0ZXApIHtcbiAgICAgICAgICAgICAgICB2YXIgdHByZSA9IHJlYWxbaiArIGhhbGZzaXplXSAqIGNvc1RhYmxlW2tdICsgaW1hZ1tqICsgaGFsZnNpemVdICogc2luVGFibGVba107XG4gICAgICAgICAgICAgICAgdmFyIHRwaW0gPSAtcmVhbFtqICsgaGFsZnNpemVdICogc2luVGFibGVba10gKyBpbWFnW2ogKyBoYWxmc2l6ZV0gKiBjb3NUYWJsZVtrXTtcbiAgICAgICAgICAgICAgICByZWFsW2ogKyBoYWxmc2l6ZV0gPSByZWFsW2pdIC0gdHByZTtcbiAgICAgICAgICAgICAgICBpbWFnW2ogKyBoYWxmc2l6ZV0gPSBpbWFnW2pdIC0gdHBpbTtcbiAgICAgICAgICAgICAgICByZWFsW2pdICs9IHRwcmU7XG4gICAgICAgICAgICAgICAgaW1hZ1tqXSArPSB0cGltO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2FsY3VsYXRlTnVtYmVyTGV2ZWxzKE4pIHtcbiAgICAgICAgdmFyIGk7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCAzMjsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoMSA8PCBpID09PSBOKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIC0xO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGJpdFJldmVyc2VNYXAocmVhbCwgaW1hZykge1xuICAgICAgICB2YXIgaSwgaiwgdGVtcDtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgaiA9IHJldmVyc2VCaXRzKGksIGxldmVscyk7XG4gICAgICAgICAgICBpZiAoaiA+IGkpIHtcbiAgICAgICAgICAgICAgICB0ZW1wID0gcmVhbFtpXTtcbiAgICAgICAgICAgICAgICByZWFsW2ldID0gcmVhbFtqXTtcbiAgICAgICAgICAgICAgICByZWFsW2pdID0gdGVtcDtcbiAgICAgICAgICAgICAgICB0ZW1wID0gaW1hZ1tpXTtcbiAgICAgICAgICAgICAgICBpbWFnW2ldID0gaW1hZ1tqXTtcbiAgICAgICAgICAgICAgICBpbWFnW2pdID0gdGVtcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNhbGN1bGF0ZUNvc1NpbmVUYWJsZXMoY29zVGFibGUsIHNpblRhYmxlKSB7XG4gICAgICAgIHZhciBuID0gY29zVGFibGUubGVuZ3RoLFxuICAgICAgICAgICAgaTtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgY29zVGFibGVbaV0gPSBNYXRoLmNvcyhNYXRoLlBJICogaSAvIG4pO1xuICAgICAgICAgICAgc2luVGFibGVbaV0gPSBNYXRoLnNpbihNYXRoLlBJICogaSAvIG4pO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cbi8qXG4gKiBDb21wdXRlcyB0aGUgZGlzY3JldGUgRm91cmllciB0cmFuc2Zvcm0gKERGVCkgb2YgdGhlIGdpdmVuIGNvbXBsZXggdmVjdG9yLCBzdG9yaW5nIHRoZSByZXN1bHQgYmFjayBpbnRvIHRoZSB2ZWN0b3IuXG4gKiBUaGUgdmVjdG9yIGNhbiBoYXZlIGFueSBsZW5ndGguIFRoaXMgcmVxdWlyZXMgdGhlIGNvbnZvbHV0aW9uIGZ1bmN0aW9uLCB3aGljaCBpbiB0dXJuIHJlcXVpcmVzIHRoZSByYWRpeC0yIEZGVCBmdW5jdGlvbi5cbiAqIFVzZXMgQmx1ZXN0ZWluJ3MgY2hpcnAgei10cmFuc2Zvcm0gYWxnb3JpdGhtLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtQmx1ZXN0ZWluKHJlYWwsIGltYWcpIHtcbiAgICAvLyBGaW5kIGEgcG93ZXItb2YtMiBjb252b2x1dGlvbiBsZW5ndGggbSBzdWNoIHRoYXQgbSA+PSBuICogMiArIDFcbiAgICBpZiAocmVhbC5sZW5ndGggIT09IGltYWcubGVuZ3RoKVxuICAgICAgICB0aHJvdyBcIk1pc21hdGNoZWQgbGVuZ3Roc1wiO1xuICAgIHZhciBpLCBqO1xuICAgIHZhciBuID0gcmVhbC5sZW5ndGg7XG4gICAgdmFyIG0gPSAxO1xuICAgIHdoaWxlIChtIDwgbiAqIDIgKyAxKVxuICAgICAgICBtICo9IDI7XG5cbiAgICAvLyBUcmlnbm9tZXRyaWMgdGFibGVzXG4gICAgdmFyIGNvc1RhYmxlID0gbmV3IEZsb2F0NjRBcnJheShuKTtcbiAgICB2YXIgc2luVGFibGUgPSBuZXcgRmxvYXQ2NEFycmF5KG4pO1xuICAgIChmdW5jdGlvbiAoY29zVGFibGUsIHNpblRhYmxlKSB7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIGogPSBpICogaSAlIChuICogMik7IC8vIFRoaXMgaXMgbW9yZSBhY2N1cmF0ZSB0aGFuIGogPSBpICogaVxuICAgICAgICAgICAgY29zVGFibGVbaV0gPSBNYXRoLmNvcyhNYXRoLlBJICogaiAvIG4pO1xuICAgICAgICAgICAgc2luVGFibGVbaV0gPSBNYXRoLnNpbihNYXRoLlBJICogaiAvIG4pO1xuICAgICAgICB9XG4gICAgfSkoY29zVGFibGUsIHNpblRhYmxlKTtcblxuICAgIC8vIFRlbXBvcmFyeSB2ZWN0b3JzIGFuZCBwcmVwcm9jZXNzaW5nXG4gICAgdmFyIGFyZWFsID0gbmV3IEZsb2F0NjRBcnJheShtKTtcbiAgICB2YXIgYWltYWcgPSBuZXcgRmxvYXQ2NEFycmF5KG0pO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IG47IGkrKykge1xuICAgICAgICBhcmVhbFtpXSA9IHJlYWxbaV0gKiBjb3NUYWJsZVtpXSArIGltYWdbaV0gKiBzaW5UYWJsZVtpXTtcbiAgICAgICAgYWltYWdbaV0gPSAtcmVhbFtpXSAqIHNpblRhYmxlW2ldICsgaW1hZ1tpXSAqIGNvc1RhYmxlW2ldO1xuICAgIH1cbiAgICB2YXIgYnJlYWwgPSBuZXcgRmxvYXQ2NEFycmF5KG0pO1xuICAgIHZhciBiaW1hZyA9IG5ldyBGbG9hdDY0QXJyYXkobSk7XG4gICAgYnJlYWxbMF0gPSBjb3NUYWJsZVswXTtcbiAgICBiaW1hZ1swXSA9IHNpblRhYmxlWzBdO1xuICAgIGZvciAoaSA9IDE7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgYnJlYWxbaV0gPSBicmVhbFttIC0gaV0gPSBjb3NUYWJsZVtpXTtcbiAgICAgICAgYmltYWdbaV0gPSBiaW1hZ1ttIC0gaV0gPSBzaW5UYWJsZVtpXTtcbiAgICB9XG5cbiAgICAvLyBDb252b2x1dGlvblxuICAgIHZhciBjcmVhbCA9IG5ldyBGbG9hdDY0QXJyYXkobSk7XG4gICAgdmFyIGNpbWFnID0gbmV3IEZsb2F0NjRBcnJheShtKTtcbiAgICBjb252b2x2ZUNvbXBsZXgoYXJlYWwsIGFpbWFnLCBicmVhbCwgYmltYWcsIGNyZWFsLCBjaW1hZyk7XG5cbiAgICAvLyBQb3N0cHJvY2Vzc2luZ1xuICAgIGZvciAoaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgcmVhbFtpXSA9IGNyZWFsW2ldICogY29zVGFibGVbaV0gKyBjaW1hZ1tpXSAqIHNpblRhYmxlW2ldO1xuICAgICAgICBpbWFnW2ldID0gLWNyZWFsW2ldICogc2luVGFibGVbaV0gKyBjaW1hZ1tpXSAqIGNvc1RhYmxlW2ldO1xuICAgIH1cbn1cblxuXG4vKlxuICogQ29tcHV0ZXMgdGhlIGNpcmN1bGFyIGNvbnZvbHV0aW9uIG9mIHRoZSBnaXZlbiByZWFsIHZlY3RvcnMuIEVhY2ggdmVjdG9yJ3MgbGVuZ3RoIG11c3QgYmUgdGhlIHNhbWUuXG4gKi9cbmZ1bmN0aW9uIGNvbnZvbHZlUmVhbCh4LCB5LCBvdXQpIHtcbiAgICBpZiAoeC5sZW5ndGggIT09IHkubGVuZ3RoIHx8IHgubGVuZ3RoICE9PSBvdXQubGVuZ3RoKVxuICAgICAgICB0aHJvdyBcIk1pc21hdGNoZWQgbGVuZ3Roc1wiO1xuICAgIHZhciB6ZXJvcyA9IG5ldyBBcnJheSh4Lmxlbmd0aCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB6ZXJvcy5sZW5ndGg7IGkrKylcbiAgICAgICAgemVyb3NbaV0gPSAwO1xuICAgIGNvbnZvbHZlQ29tcGxleCh4LCB6ZXJvcywgeSwgemVyb3Muc2xpY2UoKSwgb3V0LCB6ZXJvcy5zbGljZSgpKTtcbn1cblxuXG4vKlxuICogQ29tcHV0ZXMgdGhlIGNpcmN1bGFyIGNvbnZvbHV0aW9uIG9mIHRoZSBnaXZlbiBjb21wbGV4IHZlY3RvcnMuIEVhY2ggdmVjdG9yJ3MgbGVuZ3RoIG11c3QgYmUgdGhlIHNhbWUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb252b2x2ZUNvbXBsZXgoeHJlYWwsIHhpbWFnLCB5cmVhbCwgeWltYWcsIG91dHJlYWwsIG91dGltYWcpIHtcbiAgICAoZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoeHJlYWwubGVuZ3RoICE9PSB4aW1hZy5sZW5ndGggfHwgeHJlYWwubGVuZ3RoICE9PSB5cmVhbC5sZW5ndGggfHwgeXJlYWwubGVuZ3RoICE9PSB5aW1hZy5sZW5ndGggfHwgeHJlYWwubGVuZ3RoICE9PSBvdXRyZWFsLmxlbmd0aCB8fCBvdXRyZWFsLmxlbmd0aCAhPT0gb3V0aW1hZy5sZW5ndGgpXG4gICAgICAgICAgICB0aHJvdyBcIk1pc21hdGNoZWQgbGVuZ3Roc1wiO1xuICAgIH0pKCk7XG4gICAgdmFyIGk7XG4gICAgdmFyIG4gPSB4cmVhbC5sZW5ndGg7XG4gICAgeHJlYWwgPSB4cmVhbC5zbGljZSgpO1xuICAgIHhpbWFnID0geGltYWcuc2xpY2UoKTtcbiAgICB5cmVhbCA9IHlyZWFsLnNsaWNlKCk7XG4gICAgeWltYWcgPSB5aW1hZy5zbGljZSgpO1xuXG4gICAgdHJhbnNmb3JtKHhyZWFsLCB4aW1hZyk7XG4gICAgdHJhbnNmb3JtKHlyZWFsLCB5aW1hZyk7XG4gICAgZm9yIChpID0gMDsgaSA8IG47IGkrKykge1xuICAgICAgICB2YXIgdGVtcCA9IHhyZWFsW2ldICogeXJlYWxbaV0gLSB4aW1hZ1tpXSAqIHlpbWFnW2ldO1xuICAgICAgICB4aW1hZ1tpXSA9IHhpbWFnW2ldICogeXJlYWxbaV0gKyB4cmVhbFtpXSAqIHlpbWFnW2ldO1xuICAgICAgICB4cmVhbFtpXSA9IHRlbXA7XG4gICAgfVxuICAgIGludmVyc2VUcmFuc2Zvcm0oeHJlYWwsIHhpbWFnKTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbjsgaSsrKSB7IC8vIFNjYWxpbmcgKGJlY2F1c2UgdGhpcyBGRlQgaW1wbGVtZW50YXRpb24gb21pdHMgaXQpXG4gICAgICAgIG91dHJlYWxbaV0gPSB4cmVhbFtpXSAvIG47XG4gICAgICAgIG91dGltYWdbaV0gPSB4aW1hZ1tpXSAvIG47XG4gICAgfVxufVxuIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZ3MvZnVuY3Rpb25zLmQudHNcIiAvPlxuaW1wb3J0IHt4dHJhY3RfYXNzZXJ0X2FycmF5fSBmcm9tIFwiLi94dHJhY3RfYXNzZXJ0X2FycmF5XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiB4dHJhY3RfYW1kZihhcnJheSkge1xuICAgIGlmICgheHRyYWN0X2Fzc2VydF9hcnJheShhcnJheSkpXG4gICAgICAgIHJldHVybiAwO1xuICAgIHZhciBuID0gYXJyYXkubGVuZ3RoO1xuICAgIHZhciByZXN1bHQgPSBuZXcgRmxvYXQ2NEFycmF5KG4pO1xuICAgIHdoaWxlIChuLS0pIHtcbiAgICAgICAgdmFyIG1kID0gMC4wO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aCAtIG47IGkrKykge1xuICAgICAgICAgICAgbWQgKz0gTWF0aC5hYnMoYXJyYXlbaV0gLSBhcnJheVtpICsgbl0pO1xuICAgICAgICB9XG4gICAgICAgIHJlc3VsdFtuXSA9IG1kIC8gYXJyYXkubGVuZ3RoO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZ3MvZnVuY3Rpb25zLmQudHNcIiAvPlxuaW1wb3J0IHt4dHJhY3RfYXNzZXJ0X2FycmF5fSBmcm9tIFwiLi94dHJhY3RfYXNzZXJ0X2FycmF5XCI7XG5leHBvcnQgZnVuY3Rpb24geHRyYWN0X2FwcGx5X3dpbmRvdyhYLCBXKSB7XG4gICAgaWYgKCF4dHJhY3RfYXNzZXJ0X2FycmF5KFgpIHx8ICF4dHJhY3RfYXNzZXJ0X2FycmF5KFcpKSB7XG4gICAgICAgIHRocm93IChcIkJvdGggWCBhbmQgVyBtdXN0IGJlIGRlZmluZWRcIik7XG4gICAgfVxuICAgIGlmIChYLmxlbmd0aCAhPT0gVy5sZW5ndGgpIHtcbiAgICAgICAgdGhyb3cgKFwiQm90aCBYIGFuZCBXIG11c3QgYmUgdGhlIHNhbWUgbGVuZ3Roc1wiKTtcbiAgICB9XG4gICAgdmFyIE4gPSBYLmxlbmd0aDtcbiAgICB2YXIgWSA9IG5ldyBGbG9hdDY0QXJyYXkoTik7XG4gICAgdmFyIG47XG4gICAgZm9yIChuID0gMDsgbiA8IE47IG4rKykge1xuICAgICAgICBZW25dID0gWFtuXSAqIFdbbl07XG4gICAgfVxuICAgIHJldHVybiBZO1xufVxuIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZ3MvZnVuY3Rpb25zLmQudHNcIiAvPlxuaW1wb3J0IHt4dHJhY3RfYXNzZXJ0X2FycmF5fSBmcm9tIFwiLi94dHJhY3RfYXNzZXJ0X2FycmF5XCI7XG5pbXBvcnQge3h0cmFjdF9hcnJheV9taW59IGZyb20gXCIuL3h0cmFjdF9hcnJheV9taW5cIjtcbmltcG9ydCB7eHRyYWN0X2FycmF5X21heH0gZnJvbSBcIi4veHRyYWN0X2FycmF5X21heFwiO1xuXG5leHBvcnQgZnVuY3Rpb24geHRyYWN0X2FycmF5X2JvdW5kKGRhdGEsIG1pbiwgbWF4KSB7XG4gICAgaWYgKCF4dHJhY3RfYXNzZXJ0X2FycmF5KGRhdGEpKVxuICAgICAgICByZXR1cm4gMDtcbiAgICBpZiAodHlwZW9mIG1pbiAhPT0gXCJudW1iZXJcIikge1xuICAgICAgICBtaW4gPSB4dHJhY3RfYXJyYXlfbWluKGRhdGEpO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIG1heCAhPT0gXCJudW1iZXJcIikge1xuICAgICAgICBtYXggPSB4dHJhY3RfYXJyYXlfbWF4KGRhdGEpO1xuICAgIH1cbiAgICBpZiAobWluID49IG1heCkge1xuICAgICAgICB0aHJvdyAoXCJJbnZhbGlkIGJvdW5kYXJpZXMhIE1pbmltdW0gY2Fubm90IGJlIGdyZWF0ZXIgdGhhbiBtYXhpbXVtXCIpO1xuICAgIH1cbiAgICB2YXIgcmVzdWx0ID0gbmV3IGRhdGEuY29uc3RydWN0b3IoZGF0YS5sZW5ndGgpO1xuICAgIGZvciAodmFyIG4gPSAwOyBuIDwgZGF0YS5sZW5ndGg7IG4rKykge1xuICAgICAgICByZXN1bHRbbl0gPSBNYXRoLm1pbihNYXRoLm1heChkYXRhW25dLCBtaW4pLCBtYXgpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZ3MvZnVuY3Rpb25zLmQudHNcIiAvPlxuZXhwb3J0IGZ1bmN0aW9uIHh0cmFjdF9hcnJheV9jb3B5KHNyYykge1xuICAgIHZhciBOID0gc3JjLmxlbmd0aCxcbiAgICAgICAgZHN0ID0gbmV3IHNyYy5jb25zdHJ1Y3RvcihOKTtcbiAgICBmb3IgKHZhciBuID0gMDsgbiA8IE47IG4rKylcbiAgICAgICAgZHN0W25dID0gc3JjW25dO1xuICAgIHJldHVybiBkc3Q7XG59XG4iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy9mdW5jdGlvbnMuZC50c1wiIC8+XG5pbXBvcnQge3h0cmFjdF9hc3NlcnRfYXJyYXl9IGZyb20gXCIuL3h0cmFjdF9hc3NlcnRfYXJyYXlcIjtcbmltcG9ydCB7eHRyYWN0X2Fzc2VydF9wb3NpdGl2ZV9pbnRlZ2VyfSBmcm9tIFwiLi94dHJhY3RfYXNzZXJ0X3Bvc2l0aXZlX2ludGVnZXJcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHh0cmFjdF9hcnJheV9kZWludGVybGFjZShkYXRhLCBudW1fYXJyYXlzKSB7XG4gICAgaWYgKCF4dHJhY3RfYXNzZXJ0X2FycmF5KGRhdGEpKSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgdmFyIHJlc3VsdCwgTjtcbiAgICBpZiAoIXh0cmFjdF9hc3NlcnRfcG9zaXRpdmVfaW50ZWdlcihudW1fYXJyYXlzKSkge1xuICAgICAgICB0aHJvdyAoXCJudW1fYXJyYXlzIG11c3QgYmUgYSBwb3NpdGl2ZSBpbnRlZ2VyXCIpO1xuICAgIH1cbiAgICByZXN1bHQgPSBbXTtcbiAgICBOID0gZGF0YS5sZW5ndGggLyBudW1fYXJyYXlzO1xuICAgIGZvciAodmFyIG4gPSAwOyBuIDwgbnVtX2FycmF5czsgbisrKSB7XG4gICAgICAgIHJlc3VsdFtuXSA9IG5ldyBkYXRhLmNvbnN0cnVjdG9yKE4pO1xuICAgIH1cbiAgICBmb3IgKHZhciBrID0gMDsgayA8IE47IGsrKykge1xuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IG51bV9hcnJheXM7IGorKykge1xuICAgICAgICAgICAgcmVzdWx0W2pdW2tdID0gZGF0YVtrICogbnVtX2FycmF5cyArIGpdO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG4iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy9mdW5jdGlvbnMuZC50c1wiIC8+XG5pbXBvcnQge3h0cmFjdF9hc3NlcnRfYXJyYXl9IGZyb20gXCIuL3h0cmFjdF9hc3NlcnRfYXJyYXlcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHh0cmFjdF9hcnJheV9pbnRlcmxhY2UoZGF0YSkge1xuICAgIGlmICgheHRyYWN0X2Fzc2VydF9hcnJheShkYXRhKSkge1xuICAgICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIHZhciBudW1fYXJyYXlzID0gZGF0YS5sZW5ndGgsXG4gICAgICAgIGxlbmd0aCA9IGRhdGFbMF0ubGVuZ3RoO1xuICAgIGlmIChkYXRhLmV2ZXJ5KGZ1bmN0aW9uIChhKSB7XG4gICAgICAgICAgICByZXR1cm4gYS5sZW5ndGggPT09IGxlbmd0aDtcbiAgICAgICAgfSkgPT09IGZhbHNlKSB7XG4gICAgICAgIHRocm93IChcIkFsbCBhcmd1bWVudCBsZW5ndGhzIG11c3QgYmUgdGhlIHNhbWVcIik7XG4gICAgfVxuICAgIHZhciByZXN1bHQgPSBuZXcgZGF0YVswXS5jb25zdHJ1Y3RvcihudW1fYXJyYXlzICogbGVuZ3RoKTtcbiAgICBmb3IgKHZhciBrID0gMDsgayA8IGxlbmd0aDsgaysrKSB7XG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgbnVtX2FycmF5czsgaisrKSB7XG4gICAgICAgICAgICByZXN1bHRbayAqIG51bV9hcnJheXMgKyBqXSA9IGRhdGFbal1ba107XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbiIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL2Z1bmN0aW9ucy5kLnRzXCIgLz5cbmltcG9ydCB7eHRyYWN0X2Fzc2VydF9hcnJheX0gZnJvbSBcIi4veHRyYWN0X2Fzc2VydF9hcnJheVwiO1xuZXhwb3J0IGZ1bmN0aW9uIHh0cmFjdF9hcnJheV9tYXgoZGF0YSkge1xuICAgIGlmICgheHRyYWN0X2Fzc2VydF9hcnJheShkYXRhKSlcbiAgICAgICAgcmV0dXJuIC1JbmZpbml0eTtcbiAgICBpZiAoZGF0YS5yZWR1Y2UpIHtcbiAgICAgICAgcmV0dXJuIGRhdGEucmVkdWNlKGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgICBpZiAoYiA+IGEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBhO1xuICAgICAgICB9LCBkYXRhWzBdKTtcbiAgICB9XG4gICAgdmFyIG1heCA9IGRhdGFbMF0sXG4gICAgICAgIGwgPSBkYXRhLmxlbmd0aDtcbiAgICBmb3IgKHZhciBuID0gMTsgbiA8IGw7IG4rKykge1xuICAgICAgICBpZiAoZGF0YVtuXSA+IG1heCkge1xuICAgICAgICAgICAgbWF4ID0gZGF0YVtuXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbWF4O1xufVxuIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZ3MvZnVuY3Rpb25zLmQudHNcIiAvPlxuaW1wb3J0IHt4dHJhY3RfYXNzZXJ0X2FycmF5fSBmcm9tIFwiLi94dHJhY3RfYXNzZXJ0X2FycmF5XCI7XG5leHBvcnQgZnVuY3Rpb24geHRyYWN0X2FycmF5X21pbihkYXRhKSB7XG4gICAgaWYgKCF4dHJhY3RfYXNzZXJ0X2FycmF5KGRhdGEpKVxuICAgICAgICByZXR1cm4gSW5maW5pdHk7XG4gICAgaWYgKGRhdGEucmVkdWNlKSB7XG4gICAgICAgIHJldHVybiBkYXRhLnJlZHVjZShmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgaWYgKGIgPCBhKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYTtcbiAgICAgICAgfSwgZGF0YVswXSk7XG4gICAgfVxuICAgIHZhciBtaW4gPSBJbmZpbml0eSxcbiAgICAgICAgbCA9IGRhdGEubGVuZ3RoO1xuICAgIGZvciAodmFyIG4gPSAwOyBuIDwgbDsgbisrKSB7XG4gICAgICAgIGlmIChkYXRhW25dIDwgbWluKSB7XG4gICAgICAgICAgICBtaW4gPSBkYXRhW25dO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBtaW47XG59XG4iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy9mdW5jdGlvbnMuZC50c1wiIC8+XG5pbXBvcnQge3h0cmFjdF9hc3NlcnRfYXJyYXl9IGZyb20gXCIuL3h0cmFjdF9hc3NlcnRfYXJyYXlcIjtcbmltcG9ydCB7eHRyYWN0X2FycmF5X3NjYWxlfSBmcm9tIFwiLi94dHJhY3RfYXJyYXlfc2NhbGVcIjtcbmltcG9ydCB7eHRyYWN0X2FycmF5X21heH0gZnJvbSBcIi4veHRyYWN0X2FycmF5X21heFwiO1xuXG5leHBvcnQgZnVuY3Rpb24geHRyYWN0X2FycmF5X25vcm1hbGlzZShkYXRhKSB7XG4gICAgaWYgKCF4dHJhY3RfYXNzZXJ0X2FycmF5KGRhdGEpKVxuICAgICAgICByZXR1cm4gMDtcbiAgICByZXR1cm4geHRyYWN0X2FycmF5X3NjYWxlKGRhdGEsIDEuMCAvIHh0cmFjdF9hcnJheV9tYXgoZGF0YSkpO1xufVxuIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZ3MvZnVuY3Rpb25zLmQudHNcIiAvPlxuaW1wb3J0IHt4dHJhY3RfYXNzZXJ0X2FycmF5fSBmcm9tIFwiLi94dHJhY3RfYXNzZXJ0X2FycmF5XCI7XG5pbXBvcnQge3h0cmFjdF9hcnJheV9jb3B5fSBmcm9tIFwiLi94dHJhY3RfYXJyYXlfY29weVwiO1xuZXhwb3J0IGZ1bmN0aW9uIHh0cmFjdF9hcnJheV9zY2FsZShkYXRhLCBmYWN0b3IpIHtcbiAgICBpZiAoIXh0cmFjdF9hc3NlcnRfYXJyYXkoZGF0YSkpXG4gICAgICAgIHJldHVybiAwO1xuICAgIGlmICh0eXBlb2YgZmFjdG9yICE9PSBcIm51bWJlclwiKSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICB2YXIgaSA9IDAsXG4gICAgICAgIGwgPSBkYXRhLmxlbmd0aCxcbiAgICAgICAgYSA9IHh0cmFjdF9hcnJheV9jb3B5KGRhdGEpO1xuICAgIGZvciAoaSA9IDA7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgYVtpXSAqPSBmYWN0b3I7XG4gICAgfVxuICAgIHJldHVybiBhO1xufVxuIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZ3MvZnVuY3Rpb25zLmQudHNcIiAvPlxuaW1wb3J0IHt4dHJhY3RfYXNzZXJ0X2FycmF5fSBmcm9tIFwiLi94dHJhY3RfYXNzZXJ0X2FycmF5XCI7XG5leHBvcnQgZnVuY3Rpb24geHRyYWN0X2FycmF5X3N1bShkYXRhKSB7XG4gICAgaWYgKCF4dHJhY3RfYXNzZXJ0X2FycmF5KGRhdGEpKVxuICAgICAgICByZXR1cm4gMDtcbiAgICBpZiAoZGF0YS5yZWR1Y2UpIHtcbiAgICAgICAgcmV0dXJuIGRhdGEucmVkdWNlKGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgICByZXR1cm4gYSArIGI7XG4gICAgICAgIH0sIDApO1xuICAgIH1cbiAgICB2YXIgc3VtID0gMCxcbiAgICAgICAgbCA9IGRhdGEubGVuZ3RoO1xuICAgIGZvciAodmFyIG4gPSAwOyBuIDwgbDsgbisrKSB7XG4gICAgICAgIHN1bSArPSBkYXRhW25dO1xuICAgIH1cbiAgICByZXR1cm4gc3VtO1xufVxuIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZ3MvZnVuY3Rpb25zLmQudHNcIiAvPlxuZXhwb3J0IGZ1bmN0aW9uIHh0cmFjdF9hcnJheV90b19KU09OKGFycmF5KSB7XG4gICAgaWYgKGFycmF5LmpvaW4pIHtcbiAgICAgICAgcmV0dXJuICdbJyArIGFycmF5LmpvaW4oJywgJykgKyAnXSc7XG4gICAgfVxuICAgIHZhciBqc29uID0gJ1snO1xuICAgIHZhciBuID0gMDtcbiAgICB3aGlsZSAobiA8IHRoaXMubGVuZ3RoKSB7XG4gICAgICAgIGpzb24gPSBqc29uICsgdGhpc1tuXTtcbiAgICAgICAgaWYgKHRoaXNbbiArIDFdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGpzb24gPSBqc29uICsgJywnO1xuICAgICAgICB9XG4gICAgICAgIG4rKztcbiAgICB9XG4gICAgcmV0dXJuIGpzb24gKyAnXSc7XG59XG4iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy9mdW5jdGlvbnMuZC50c1wiIC8+XG5pbXBvcnQge3h0cmFjdF9hc3NlcnRfYXJyYXl9IGZyb20gXCIuL3h0cmFjdF9hc3NlcnRfYXJyYXlcIjtcbmV4cG9ydCBmdW5jdGlvbiB4dHJhY3RfYXNkZihhcnJheSkge1xuICAgIGlmICgheHRyYWN0X2Fzc2VydF9hcnJheShhcnJheSkpXG4gICAgICAgIHJldHVybiAwO1xuICAgIHZhciBuID0gYXJyYXkubGVuZ3RoO1xuICAgIHZhciByZXN1bHQgPSBuZXcgRmxvYXQ2NEFycmF5KG4pO1xuICAgIHdoaWxlIChuLS0pIHtcbiAgICAgICAgdmFyIHNkID0gMC4wO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aCAtIG47IGkrKykge1xuICAgICAgICAgICAgc2QgKz0gTWF0aC5wb3coYXJyYXlbaV0gLSBhcnJheVtpICsgbl0sIDIpO1xuICAgICAgICB9XG4gICAgICAgIHJlc3VsdFtuXSA9IHNkIC8gYXJyYXkubGVuZ3RoO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZ3MvZnVuY3Rpb25zLmQudHNcIiAvPlxuZXhwb3J0IGZ1bmN0aW9uIHh0cmFjdF9hc3NlcnRfYXJyYXkoYXJyYXkpIHtcbiAgICByZXR1cm4gKHR5cGVvZiBhcnJheSA9PT0gXCJvYmplY3RcIiAmJiBhcnJheS5sZW5ndGggIT09IHVuZGVmaW5lZCAmJiBhcnJheS5sZW5ndGggPiAwKTtcbn1cbiIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL2Z1bmN0aW9ucy5kLnRzXCIgLz5cbmV4cG9ydCBmdW5jdGlvbiB4dHJhY3RfYXNzZXJ0X3Bvc2l0aXZlX2ludGVnZXIobnVtYmVyKSB7XG4gICAgcmV0dXJuICh0eXBlb2YgbnVtYmVyID09PSBcIm51bWJlclwiICYmIG51bWJlciA+PSAwICYmIG51bWJlciA9PT0gTWF0aC5yb3VuZChudW1iZXIpKTtcbn1cbiIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL2Z1bmN0aW9ucy5kLnRzXCIgLz5cbmltcG9ydCB7eHRyYWN0X2Fzc2VydF9hcnJheX0gZnJvbSBcIi4veHRyYWN0X2Fzc2VydF9hcnJheVwiO1xuXG5leHBvcnQgZnVuY3Rpb24geHRyYWN0X2F1dG9jb3JyZWxhdGlvbihhcnJheSkge1xuICAgIGlmICgheHRyYWN0X2Fzc2VydF9hcnJheShhcnJheSkpXG4gICAgICAgIHJldHVybiAwO1xuICAgIHZhciBuID0gYXJyYXkubGVuZ3RoO1xuICAgIHZhciByZXN1bHQgPSBuZXcgRmxvYXQ2NEFycmF5KG4pO1xuICAgIHdoaWxlIChuLS0pIHtcbiAgICAgICAgdmFyIGNvcnIgPSAwO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aCAtIG47IGkrKykge1xuICAgICAgICAgICAgY29yciArPSBhcnJheVtpXSAqIGFycmF5W2kgKyBuXTtcbiAgICAgICAgfVxuICAgICAgICByZXN1bHRbbl0gPSBjb3JyIC8gYXJyYXkubGVuZ3RoO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZ3MvZnVuY3Rpb25zLmQudHNcIiAvPlxuaW1wb3J0IHt4dHJhY3RfYXNzZXJ0X2FycmF5fSBmcm9tIFwiLi94dHJhY3RfYXNzZXJ0X2FycmF5XCI7XG5pbXBvcnQge3h0cmFjdF9tZWFufSBmcm9tIFwiLi94dHJhY3RfbWVhblwiO1xuZXhwb3J0IGZ1bmN0aW9uIHh0cmFjdF9hdmVyYWdlX2RldmlhdGlvbihhcnJheSwgbWVhbikge1xuICAgIGlmICgheHRyYWN0X2Fzc2VydF9hcnJheShhcnJheSkpXG4gICAgICAgIHJldHVybiAwO1xuICAgIGlmICh0eXBlb2YgbWVhbiAhPT0gXCJudW1iZXJcIikge1xuICAgICAgICBtZWFuID0geHRyYWN0X21lYW4oYXJyYXkpO1xuICAgIH1cbiAgICB2YXIgcmVzdWx0ID0gMC4wO1xuICAgIGlmIChhcnJheS5yZWR1Y2UpIHtcbiAgICAgICAgcmVzdWx0ID0gYXJyYXkucmVkdWNlKGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgICByZXR1cm4gYSArIE1hdGguYWJzKGIgLSBtZWFuKTtcbiAgICAgICAgfSwgMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZm9yICh2YXIgbiA9IDA7IG4gPCBhcnJheS5sZW5ndGg7IG4rKykge1xuICAgICAgICAgICAgcmVzdWx0ICs9IE1hdGguYWJzKGFycmF5W25dIC0gbWVhbik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdCAvIGFycmF5Lmxlbmd0aDtcbn1cbiIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL2Z1bmN0aW9ucy5kLnRzXCIgLz5cbmltcG9ydCB7eHRyYWN0X2Fzc2VydF9hcnJheX0gZnJvbSBcIi4veHRyYWN0X2Fzc2VydF9hcnJheVwiO1xuZXhwb3J0IGZ1bmN0aW9uIHh0cmFjdF9iYXJrX2NvZWZmaWNpZW50cyhzcGVjdHJ1bSwgYmFya19saW1pdHMpIHtcbiAgICBpZiAoIXh0cmFjdF9hc3NlcnRfYXJyYXkoc3BlY3RydW0pKVxuICAgICAgICByZXR1cm4gMDtcbiAgICBpZiAoYmFya19saW1pdHMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aHJvdyAoXCJ4dHJhY3RfYmFya19jb2VmZmljaWVudHMgcmVxdWlyZXMgY29tcHV0ZSBsaW1pdHMgZnJvbSB4dHJhY3RfaW5pdF9iYXJrXCIpO1xuICAgIH1cbiAgICB2YXIgTiA9IHNwZWN0cnVtLmxlbmd0aCA+PiAxO1xuICAgIHZhciBiYW5kcyA9IGJhcmtfbGltaXRzLmxlbmd0aDtcbiAgICB2YXIgcmVzdWx0cyA9IG5ldyBGbG9hdDY0QXJyYXkoYmFuZHMpO1xuICAgIGZvciAodmFyIGJhbmQgPSAwOyBiYW5kIDwgYmFuZHMgLSAxOyBiYW5kKyspIHtcbiAgICAgICAgcmVzdWx0c1tiYW5kXSA9IDAuMDtcbiAgICAgICAgZm9yICh2YXIgbiA9IGJhcmtfbGltaXRzW2JhbmRdOyBuIDwgYmFya19saW1pdHNbYmFuZCArIDFdOyBuKyspIHtcbiAgICAgICAgICAgIHJlc3VsdHNbYmFuZF0gKz0gc3BlY3RydW1bbl07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdHM7XG59XG4iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy9mdW5jdGlvbnMuZC50c1wiIC8+XG5pbXBvcnQge3h0cmFjdF9hc3NlcnRfYXJyYXl9IGZyb20gXCIuL3h0cmFjdF9hc3NlcnRfYXJyYXlcIjtcbmV4cG9ydCBmdW5jdGlvbiB4dHJhY3RfY2hyb21hKHNwZWN0cnVtLCBjaHJvbWFGaWx0ZXJzKSB7XG4gICAgaWYgKCF4dHJhY3RfYXNzZXJ0X2FycmF5KHNwZWN0cnVtKSkge1xuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgaWYgKGNocm9tYUZpbHRlcnMud3RzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhyb3cgKFwieHRyYWN0X2Nocm9tYSByZXF1aXJlcyBjaHJvbWEgZmlsdGVycyBmcm9tIHh0cmFjdF9pbml0X2Nocm9tYVwiKTtcbiAgICB9XG4gICAgaWYgKGNocm9tYUZpbHRlcnMubmZmdCAhPT0gc3BlY3RydW0ubGVuZ3RoIC8gMikge1xuICAgICAgICB0aHJvdyAoXCJ0aGUgRkZUIGxlbmd0aHMgb2YgdGhlIHNwZWN0cnVtIChcIiArIHNwZWN0cnVtLmxlbmd0aCAvIDIgKyBcIikgYW5kIGNocm9tYSBmaWx0ZXJiYW5rIChcIiArIGNocm9tYUZpbHRlcnMubmZmdCArIFwiKSBkbyBub3QgbWF0Y2hcIik7XG4gICAgfVxuICAgIHZhciByZXN1bHQgPSBuZXcgRmxvYXQ2NEFycmF5KGNocm9tYUZpbHRlcnMubmJpbnMpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hyb21hRmlsdGVycy5uYmluczsgaSsrKSB7XG4gICAgICAgIHZhciBzdW0gPSAwO1xuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGNocm9tYUZpbHRlcnMubmZmdDsgaisrKSB7XG4gICAgICAgICAgICBzdW0gKz0gY2hyb21hRmlsdGVycy53dHNbaV1bal0gKiBzcGVjdHJ1bVtqXTtcbiAgICAgICAgfVxuICAgICAgICByZXN1bHRbaV0gPSBzdW07XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG4iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy9mdW5jdGlvbnMuZC50c1wiIC8+XG5pbXBvcnQge3h0cmFjdF9hc3NlcnRfYXJyYXl9IGZyb20gXCIuL3h0cmFjdF9hc3NlcnRfYXJyYXlcIjtcbmltcG9ydCB7dHJhbnNmb3JtfSBmcm9tIFwiLi4vZnJlZUZGVFwiO1xuXG5leHBvcnQgZnVuY3Rpb24geHRyYWN0X2NvbXBsZXhfc3BlY3RydW0oYXJyYXksIHNhbXBsZV9yYXRlLCB3aXRoREMpIHtcbiAgICBpZiAoIXh0cmFjdF9hc3NlcnRfYXJyYXkoYXJyYXkpKVxuICAgICAgICByZXR1cm4gMDtcbiAgICBpZiAodHlwZW9mIHNhbXBsZV9yYXRlICE9PSBcIm51bWJlclwiKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJTYW1wbGUgUmF0ZSBtdXN0IGJlIGRlZmluZWRcIik7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBpZiAod2l0aERDID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgd2l0aERDID0gZmFsc2U7XG4gICAgfVxuICAgIHZhciBOID0gYXJyYXkubGVuZ3RoO1xuICAgIHZhciByZXN1bHQsIGFsaWduID0gMCxcbiAgICAgICAgYW1wcywgZnJlcXM7XG4gICAgaWYgKHdpdGhEQykge1xuICAgICAgICByZXN1bHQgPSBuZXcgRmxvYXQ2NEFycmF5KDMgKiAoTiAvIDIgKyAxKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgYWxpZ24gPSAxO1xuICAgICAgICByZXN1bHQgPSBuZXcgRmxvYXQ2NEFycmF5KDMgKiAoTiAvIDIpKTtcbiAgICB9XG4gICAgYW1wcyA9IHJlc3VsdC5zdWJhcnJheSgwLCAyICogKHJlc3VsdC5sZW5ndGggLyAzKSk7XG4gICAgZnJlcXMgPSByZXN1bHQuc3ViYXJyYXkoMiAqIChyZXN1bHQubGVuZ3RoIC8gMykpO1xuICAgIHZhciByZWFscyA9IG5ldyBGbG9hdDY0QXJyYXkoTik7XG4gICAgdmFyIGltYWdzID0gbmV3IEZsb2F0NjRBcnJheShOKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IE47IGkrKykge1xuICAgICAgICByZWFsc1tpXSA9IGFycmF5W2ldO1xuICAgIH1cbiAgICB0cmFuc2Zvcm0ocmVhbHMsIGltYWdzKTtcbiAgICBmb3IgKHZhciBrID0gYWxpZ247IGsgPD0gcmVhbHMubGVuZ3RoIC8gMjsgaysrKSB7XG4gICAgICAgIGFtcHNbKGsgLSBhbGlnbikgKiAyXSA9IHJlYWxzW2tdO1xuICAgICAgICBhbXBzWyhrIC0gYWxpZ24pICogMiArIDFdID0gaW1hZ3Nba107XG4gICAgICAgIGZyZXFzW2sgLSBhbGlnbl0gPSAoMiAqIGsgLyBOKSAqIChzYW1wbGVfcmF0ZSAvIDIpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZ3MvZnVuY3Rpb25zLmQudHNcIiAvPlxuaW1wb3J0IHt4dHJhY3RfYXNzZXJ0X3Bvc2l0aXZlX2ludGVnZXJ9IGZyb20gXCIuL3h0cmFjdF9hc3NlcnRfcG9zaXRpdmVfaW50ZWdlclwiO1xuXG5mdW5jdGlvbiB3ZWxjaChOKSB7XG4gICAgdmFyIFcgPSBuZXcgRmxvYXQ2NEFycmF5KE4pO1xuICAgIHZhciBuO1xuICAgIHZhciBOMTIgPSAoTiAtIDEpIC8gMjtcbiAgICBmb3IgKG4gPSAwOyBuIDwgTjsgbisrKSB7XG4gICAgICAgIFdbbl0gPSAxLjAgLSBNYXRoLnBvdygobiAtIE4xMikgLyBOMTIsIDIpO1xuICAgIH1cbiAgICByZXR1cm4gVztcbn1cblxuZnVuY3Rpb24gc2luZShOKSB7XG4gICAgdmFyIHcgPSBuZXcgRmxvYXQ2NEFycmF5KE4pLFxuICAgICAgICBuO1xuICAgIHZhciBhcmdhID0gKE1hdGguUEkgKiBuKSAvIChOIC0gMSk7XG4gICAgZm9yIChuID0gMDsgbiA8IE47IG4rKykge1xuICAgICAgICB3W25dID0gTWF0aC5zaW4oYXJnYSk7XG4gICAgfVxuICAgIHJldHVybiB3O1xufVxuXG5mdW5jdGlvbiBoYW5uKE4pIHtcbiAgICB2YXIgdyA9IG5ldyBGbG9hdDY0QXJyYXkoTiksXG4gICAgICAgIG47XG4gICAgZm9yIChuID0gMDsgbiA8IE47IG4rKykge1xuICAgICAgICB3W25dID0gMC41IC0gKDEgLSBNYXRoLmNvcygoTWF0aC5QSSAqIDIgKiBuKSAvIChOIC0gMSkpKTtcbiAgICB9XG4gICAgcmV0dXJuIHc7XG59XG5cbmZ1bmN0aW9uIGhhbW1pbmcoTikge1xuICAgIHZhciB3ID0gbmV3IEZsb2F0NjRBcnJheShOKSxcbiAgICAgICAgYWxwaGEgPSAyNSAvIDQ2LFxuICAgICAgICBiZXRhID0gMjEgLyA0NixcbiAgICAgICAgbjtcbiAgICBmb3IgKG4gPSAwOyBuIDwgTjsgbisrKSB7XG4gICAgICAgIHdbbl0gPSBhbHBoYSAtIGJldGEgKiBNYXRoLmNvcygoTWF0aC5QSSAqIDIgKiBuKSAvIChOIC0gMSkpO1xuICAgIH1cbiAgICByZXR1cm4gdztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHh0cmFjdF9jcmVhdGVfd2luZG93KE4sIHR5cGUpIHtcbiAgICBpZiAoIXh0cmFjdF9hc3NlcnRfcG9zaXRpdmVfaW50ZWdlcihOKSkge1xuICAgICAgICB0aHJvdyAoXCJOIG11c3QgYmUgYSBkZWZpbmVkLCBwb3NpdGl2ZSBpbnRlZ2VyXCIpO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHR5cGUgIT09IFwic3RyaW5nXCIgfHwgdHlwZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdGhyb3cgKFwiVHlwZSBtdXN0IGJlIGRlZmluZWRcIik7XG4gICAgfVxuICAgIHR5cGUgPSB0eXBlLnRvTG93ZXJDYXNlKCk7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgXCJoYW1taW5nXCI6XG4gICAgICAgICAgICByZXR1cm4gaGFtbWluZyhOKTtcbiAgICAgICAgY2FzZSBcIndlbGNoXCI6XG4gICAgICAgICAgICByZXR1cm4gd2VsY2goTik7XG4gICAgICAgIGNhc2UgXCJzaW5lXCI6XG4gICAgICAgICAgICByZXR1cm4gc2luZShOKTtcbiAgICAgICAgY2FzZSBcImhhbm5cIjpcbiAgICAgICAgICAgIHJldHVybiBoYW5uKE4pO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdGhyb3cgKFwiV2luZG93IGZ1bmN0aW9uXFxcIlwiICsgdHlwZSArIFwiXFxcIiBub3QgZGVmaW5lZFwiKTtcbiAgICB9XG59XG4iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy9mdW5jdGlvbnMuZC50c1wiIC8+XG5pbXBvcnQge3h0cmFjdF9hc3NlcnRfYXJyYXl9IGZyb20gXCIuL3h0cmFjdF9hc3NlcnRfYXJyYXlcIjtcbmltcG9ydCB7eHRyYWN0X2FycmF5X21heH0gZnJvbSBcIi4veHRyYWN0X2FycmF5X21heFwiO1xuaW1wb3J0IHt4dHJhY3RfbWVhbn0gZnJvbSBcIi4veHRyYWN0X21lYW5cIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHh0cmFjdF9jcmVzdChkYXRhLCBtYXgsIG1lYW4pIHtcbiAgICBpZiAoIXh0cmFjdF9hc3NlcnRfYXJyYXkoZGF0YSkpXG4gICAgICAgIHJldHVybiAwO1xuICAgIGlmICh0eXBlb2YgbWF4ICE9PSBcIm51bWJlclwiKSB7XG4gICAgICAgIG1heCA9IHh0cmFjdF9hcnJheV9tYXgoZGF0YSk7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgbWVhbiAhPT0gXCJudW1iZXJcIikge1xuICAgICAgICBtZWFuID0geHRyYWN0X21lYW4oZGF0YSk7XG4gICAgfVxuICAgIHJldHVybiBtYXggLyBtZWFuO1xufVxuIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZ3MvZnVuY3Rpb25zLmQudHNcIiAvPlxuaW1wb3J0IHt4dHJhY3RfYXNzZXJ0X2FycmF5fSBmcm9tIFwiLi94dHJhY3RfYXNzZXJ0X2FycmF5XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiB4dHJhY3RfZGN0KGFycmF5KSB7XG4gICAgaWYgKCF4dHJhY3RfYXNzZXJ0X2FycmF5KGFycmF5KSlcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgdmFyIE4gPSBhcnJheS5sZW5ndGg7XG4gICAgdmFyIHJlc3VsdCA9IG5ldyBGbG9hdDY0QXJyYXkoTik7XG4gICAgaWYgKGFycmF5LnJlZHVjZSkge1xuICAgICAgICByZXN1bHQuZm9yRWFjaChmdW5jdGlvbiAoZSwgaSwgYSkge1xuICAgICAgICAgICAgdmFyIG5OID0gaSAvIE47XG4gICAgICAgICAgICBhW2ldID0gYXJyYXkucmVkdWNlKGZ1bmN0aW9uIChyLCBkLCBtKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHIgKyBkICogTWF0aC5jb3MoTWF0aC5QSSAqIG5OICogKG0gKyAwLjUpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBmb3IgKHZhciBuID0gMDsgbiA8IE47IG4rKykge1xuICAgICAgICAgICAgdmFyIG5OID0gbiAvIE47XG4gICAgICAgICAgICBmb3IgKHZhciBtID0gMDsgbSA8IE47IG0rKykge1xuICAgICAgICAgICAgICAgIHJlc3VsdFtuXSArPSBhcnJheVttXSAqIE1hdGguY29zKE1hdGguUEkgKiBuTiAqIChtICsgMC41KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbiIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL2Z1bmN0aW9ucy5kLnRzXCIgLz5cbmltcG9ydCB7eHRyYWN0X2Fzc2VydF9hcnJheX0gZnJvbSBcIi4veHRyYWN0X2Fzc2VydF9hcnJheVwiO1xuaW1wb3J0IHt4dHJhY3RfaW5pdF9kY3R9IGZyb20gXCIuL3h0cmFjdF9pbml0X2RjdFwiO1xuaW1wb3J0IHt4dHJhY3RfYXJyYXlfc3VtfSBmcm9tIFwiLi94dHJhY3RfYXJyYXlfc3VtXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiB4dHJhY3RfZGN0XzIoYXJyYXksIGRjdCkge1xuICAgIGlmICgheHRyYWN0X2Fzc2VydF9hcnJheShhcnJheSkpXG4gICAgICAgIHJldHVybiAwO1xuICAgIHZhciBOID0gYXJyYXkubGVuZ3RoO1xuICAgIGlmIChkY3QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBkY3QgPSB4dHJhY3RfaW5pdF9kY3QoTik7XG4gICAgfVxuICAgIHZhciByZXN1bHQgPSBuZXcgRmxvYXQ2NEFycmF5KE4pO1xuICAgIHJlc3VsdFswXSA9IHh0cmFjdF9hcnJheV9zdW0oYXJyYXkpO1xuICAgIGlmIChyZXN1bHQuZm9yRWFjaCAmJiBhcnJheS5yZWR1Y2UpIHtcbiAgICAgICAgcmVzdWx0LmZvckVhY2goZnVuY3Rpb24gKGUsIGssIGFyKSB7XG4gICAgICAgICAgICBhcltrXSA9IGFycmF5LnJlZHVjZShmdW5jdGlvbiAoYSwgYiwgbikge1xuICAgICAgICAgICAgICAgIHJldHVybiBhICsgYiAqIGRjdC53dFtrXVtuXTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBmb3IgKHZhciBrID0gMTsgayA8IE47IGsrKykge1xuICAgICAgICAgICAgZm9yICh2YXIgbiA9IDA7IG4gPCBOOyBuKyspIHtcbiAgICAgICAgICAgICAgICByZXN1bHRba10gKz0gYXJyYXlbbl0gKiBkY3Qud3Rba11bbl07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbiIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL2Z1bmN0aW9ucy5kLnRzXCIgLz5cbmltcG9ydCB7eHRyYWN0X2Fzc2VydF9hcnJheX0gZnJvbSBcIi4veHRyYWN0X2Fzc2VydF9hcnJheVwiO1xuaW1wb3J0IHt4dHJhY3Rfcm1zX2FtcGxpdHVkZX0gZnJvbSBcIi4veHRyYWN0X3Jtc19hbXBsaXR1ZGVcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHh0cmFjdF9lbmVyZ3koYXJyYXksIHNhbXBsZV9yYXRlLCB3aW5kb3dfbXMpIHtcbiAgICBpZiAoIXh0cmFjdF9hc3NlcnRfYXJyYXkoYXJyYXkpKVxuICAgICAgICByZXR1cm4gMDtcbiAgICBpZiAodHlwZW9mIHNhbXBsZV9yYXRlICE9PSBcIm51bWJlclwiKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJ4dHJhY3RfZW5lcmd5IHJlcXVpcmVzIHNhbXBsZV9yYXRlIHRvIGJlIGRlZmluZWRcIik7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiB3aW5kb3dfbXMgIT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgd2luZG93X21zID0gMTAwO1xuICAgIH1cbiAgICBpZiAod2luZG93X21zIDw9IDApIHtcbiAgICAgICAgd2luZG93X21zID0gMTAwO1xuICAgIH1cbiAgICB2YXIgTiA9IGFycmF5Lmxlbmd0aDtcbiAgICB2YXIgTCA9IE1hdGguZmxvb3Ioc2FtcGxlX3JhdGUgKiAod2luZG93X21zIC8gMTAwMC4wKSk7XG4gICAgdmFyIEsgPSBNYXRoLmNlaWwoTiAvIEwpO1xuICAgIHZhciByZXN1bHQgPSBuZXcgRmxvYXQ2NEFycmF5KEspO1xuICAgIGZvciAodmFyIGsgPSAwOyBrIDwgSzsgaysrKSB7XG4gICAgICAgIHZhciBmcmFtZSA9IGFycmF5LnN1YmFycmF5KGsgKiBMLCBrICogTCArIEwpO1xuICAgICAgICB2YXIgcm1zID0geHRyYWN0X3Jtc19hbXBsaXR1ZGUoZnJhbWUpO1xuICAgICAgICByZXN1bHRba10gPSBybXM7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG4iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy9mdW5jdGlvbnMuZC50c1wiIC8+XG5pbXBvcnQge3h0cmFjdF9hc3NlcnRfYXJyYXl9IGZyb20gXCIuL3h0cmFjdF9hc3NlcnRfYXJyYXlcIjtcbmltcG9ydCB7eHRyYWN0X2FycmF5X2NvcHl9IGZyb20gXCIuL3h0cmFjdF9hcnJheV9jb3B5XCI7XG5pbXBvcnQge3h0cmFjdF9hcnJheV9tYXh9IGZyb20gXCIuL3h0cmFjdF9hcnJheV9tYXhcIjtcbmltcG9ydCB7eHRyYWN0X2FycmF5X2JvdW5kfSBmcm9tIFwiLi94dHJhY3RfYXJyYXlfYm91bmRcIjtcblxuZnVuY3Rpb24gY2FsY19lcnJfdGF1X3goc3ViX2FyciwgTSwgdGF1KSB7XG4gICAgdmFyIGVycl90YXUgPSAwLjAsXG4gICAgICAgIG47XG4gICAgZm9yIChuID0gMTsgbiA8IE07IG4rKykge1xuICAgICAgICBlcnJfdGF1ICs9IE1hdGguYWJzKHN1Yl9hcnJbbl0gLSBzdWJfYXJyW24gKyB0YXVdKTtcbiAgICB9XG4gICAgcmV0dXJuIGVycl90YXU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB4dHJhY3RfZjAodGltZUFycmF5LCBzYW1wbGVSYXRlKSB7XG4gICAgaWYgKCF4dHJhY3RfYXNzZXJ0X2FycmF5KHRpbWVBcnJheSkpXG4gICAgICAgIHJldHVybiAwO1xuICAgIGlmICh0eXBlb2Ygc2FtcGxlUmF0ZSAhPT0gXCJudW1iZXJcIikge1xuICAgICAgICBzYW1wbGVSYXRlID0gNDQxMDAuMDtcbiAgICB9XG4gICAgdmFyIHN1Yl9hcnIgPSB4dHJhY3RfYXJyYXlfY29weSh0aW1lQXJyYXkpO1xuICAgIHZhciBOID0gc3ViX2Fyci5sZW5ndGg7XG4gICAgdmFyIE0gPSBOIC8gMjtcbiAgICB2YXIgbjtcblxuICAgIHZhciB0aHJlc2hvbGRfcGVhayA9IDAuOCxcbiAgICAgICAgdGhyZXNob2xkX2NlbnRyZSA9IDAuMyxcbiAgICAgICAgYXJyYXlfbWF4ID0gMDtcblxuICAgIGFycmF5X21heCA9IHh0cmFjdF9hcnJheV9tYXgoc3ViX2Fycik7XG4gICAgdGhyZXNob2xkX3BlYWsgKj0gYXJyYXlfbWF4O1xuICAgIHRocmVzaG9sZF9jZW50cmUgKj0gYXJyYXlfbWF4O1xuXG4gICAgc3ViX2FyciA9IHh0cmFjdF9hcnJheV9ib3VuZChzdWJfYXJyLCAtdGhyZXNob2xkX3BlYWssIHRocmVzaG9sZF9wZWFrKTtcblxuICAgIHN1Yl9hcnIuZm9yRWFjaChmdW5jdGlvbiAodiwgaSwgYSkge1xuICAgICAgICBhW2ldID0gTWF0aC5tYXgoMCwgdiAtIHRocmVzaG9sZF9jZW50cmUpO1xuICAgIH0pO1xuXG4gICAgdmFyIGVycl90YXVfMSA9IGNhbGNfZXJyX3RhdV94KHN1Yl9hcnIsIE0sIDEpO1xuICAgIGZvciAodmFyIHRhdSA9IDI7IHRhdSA8IE07IHRhdSsrKSB7XG4gICAgICAgIHZhciBlcnJfdGF1X3ggPSBjYWxjX2Vycl90YXVfeChzdWJfYXJyLCBNLCB0YXUpO1xuICAgICAgICBpZiAoZXJyX3RhdV94IDwgZXJyX3RhdV8xKSB7XG4gICAgICAgICAgICByZXR1cm4gc2FtcGxlUmF0ZSAvICh0YXUgKyAoZXJyX3RhdV94IC8gZXJyX3RhdV8xKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIC0wO1xufVxuIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZ3MvZnVuY3Rpb25zLmQudHNcIiAvPlxuaW1wb3J0IHt4dHJhY3RfZjB9IGZyb20gXCIuL3h0cmFjdF9mMFwiO1xuXG5leHBvcnQgZnVuY3Rpb24geHRyYWN0X2ZhaWxzYWZlX2YwKHRpbWVBcnJheSwgc2FtcGxlUmF0ZSkge1xuICAgIHJldHVybiB4dHJhY3RfZjAodGltZUFycmF5LCBzYW1wbGVSYXRlKTtcbn1cbiIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL2Z1bmN0aW9ucy5kLnRzXCIgLz5cbmltcG9ydCB7eHRyYWN0X2Fzc2VydF9hcnJheX0gZnJvbSBcIi4veHRyYWN0X2Fzc2VydF9hcnJheVwiO1xuXG5leHBvcnQgZnVuY3Rpb24geHRyYWN0X2ZsYXRuZXNzKHNwZWN0cnVtKSB7XG4gICAgaWYgKCF4dHJhY3RfYXNzZXJ0X2FycmF5KHNwZWN0cnVtKSlcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgdmFyIGNvdW50ID0gMCxcbiAgICAgICAgZGVub3JtYWxfZm91bmQgPSBmYWxzZSxcbiAgICAgICAgbnVtID0gMS4wLFxuICAgICAgICBkZW4gPSAwLjAsXG4gICAgICAgIHRlbXAgPSAwLjA7XG4gICAgdmFyIE4gPSBzcGVjdHJ1bS5sZW5ndGg7XG4gICAgdmFyIEsgPSBOID4+IDE7XG4gICAgdmFyIGFtcHMgPSBzcGVjdHJ1bS5zdWJhcnJheSgwLCBLKTtcbiAgICBmb3IgKHZhciBuID0gMDsgbiA8IEs7IG4rKykge1xuICAgICAgICB0ZW1wID0gTWF0aC5tYXgoMWUtMzIsIGFtcHNbbl0pO1xuICAgICAgICBudW0gKj0gdGVtcDtcbiAgICAgICAgZGVuICs9IHRlbXA7XG4gICAgICAgIGNvdW50Kys7XG4gICAgfVxuICAgIGlmIChjb3VudCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgbnVtID0gTWF0aC5wb3cobnVtLCAxLjAgLyBjb3VudCk7XG4gICAgZGVuIC89IGNvdW50O1xuXG4gICAgcmV0dXJuIG51bSAvIGRlbjtcbn1cbiIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL2Z1bmN0aW9ucy5kLnRzXCIgLz5cbmltcG9ydCB7eHRyYWN0X2Fzc2VydF9hcnJheX0gZnJvbSBcIi4veHRyYWN0X2Fzc2VydF9hcnJheVwiO1xuaW1wb3J0IHt4dHJhY3RfZmxhdG5lc3N9IGZyb20gXCIuL3h0cmFjdF9mbGF0bmVzc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24geHRyYWN0X2ZsYXRuZXNzX2RiKHNwZWN0cnVtLCBmbGF0bmVzcykge1xuICAgIGlmICgheHRyYWN0X2Fzc2VydF9hcnJheShzcGVjdHJ1bSkpXG4gICAgICAgIHJldHVybiAwO1xuICAgIGlmICh0eXBlb2YgZmxhdG5lc3MgIT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgZmxhdG5lc3MgPSB4dHJhY3RfZmxhdG5lc3Moc3BlY3RydW0pO1xuICAgIH1cbiAgICByZXR1cm4gMTAuMCAqIE1hdGgubG9nMTAoZmxhdG5lc3MpO1xufVxuIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZ3MvZnVuY3Rpb25zLmQudHNcIiAvPlxuaW1wb3J0IHt4dHJhY3RfYXNzZXJ0X3Bvc2l0aXZlX2ludGVnZXJ9IGZyb20gXCIuL3h0cmFjdF9hc3NlcnRfcG9zaXRpdmVfaW50ZWdlclwiO1xuaW1wb3J0IHt4dHJhY3RfYXNzZXJ0X2FycmF5fSBmcm9tIFwiLi94dHJhY3RfYXNzZXJ0X2FycmF5XCI7XG5pbXBvcnQge3h0cmFjdF9nZXRfbnVtYmVyX29mX2ZyYW1lc30gZnJvbSBcIi4veHRyYWN0X2dldF9udW1iZXJfb2ZfZnJhbWVzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiB4dHJhY3RfZnJhbWVfZnJvbV9hcnJheShzcmMsIGRzdCwgaW5kZXgsIGZyYW1lX3NpemUsIGhvcF9zaXplKSB7XG4gICAgaWYgKGhvcF9zaXplID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaG9wX3NpemUgPSBmcmFtZV9zaXplO1xuICAgIH1cbiAgICBpZiAoIXh0cmFjdF9hc3NlcnRfcG9zaXRpdmVfaW50ZWdlcihpbmRleCkpIHtcbiAgICAgICAgdGhyb3cgKFwieHRyYWN0X2dldF9mcmFtZSByZXF1aXJlcyB0aGUgaW5kZXggdG8gYmUgYW4gaW50ZWdlciB2YWx1ZVwiKTtcbiAgICB9XG4gICAgaWYgKCF4dHJhY3RfYXNzZXJ0X3Bvc2l0aXZlX2ludGVnZXIoZnJhbWVfc2l6ZSkpIHtcbiAgICAgICAgdGhyb3cgKFwieHRyYWN0X2dldF9mcmFtZSByZXF1aXJlcyB0aGUgZnJhbWVfc2l6ZSB0byBiZSBhIHBvc2l0aXZlIGludGVnZXJcIik7XG4gICAgfVxuICAgIGlmICgheHRyYWN0X2Fzc2VydF9hcnJheShzcmMpKSB7XG4gICAgICAgIHRocm93IChcIkludmFsaWQgZGF0YSBwYXJhbWV0ZXIuIE11c3QgYmUgaXRlbSB3aXRoIGl0ZXJhYmxlIGxpc3RcIik7XG4gICAgfVxuICAgIGlmICgheHRyYWN0X2Fzc2VydF9hcnJheShkc3QpKSB7XG4gICAgICAgIHRocm93IChcImRzdCBtdXN0IGJlIGFuIEFycmF5LWxpa2Ugb2JqZWN0IGVxdWFsIGluIGxlbmd0aCB0byBmcmFtZV9zaXplXCIpO1xuICAgIH1cbiAgICBpZiAoIXh0cmFjdF9hc3NlcnRfcG9zaXRpdmVfaW50ZWdlcihob3Bfc2l6ZSkpIHtcbiAgICAgICAgdGhyb3cgKFwieHRyYWN0X2dldF9mcmFtZSByZXF1aXJlcyB0aGUgaG9wX3NpemUgdG8gYmUgYSBwb3NpdGl2ZSBpbnRlZ2VyXCIpO1xuICAgIH1cbiAgICB2YXIgSyA9IHh0cmFjdF9nZXRfbnVtYmVyX29mX2ZyYW1lcyhzcmMsIGhvcF9zaXplKTtcbiAgICBpZiAoaW5kZXggPj0gSykge1xuICAgICAgICB0aHJvdyAoXCJpbmRleCBudW1iZXIgXCIgKyBpbmRleCArIFwiIG91dCBvZiBib3VuZHNcIik7XG4gICAgfVxuICAgIHZhciBuID0gMDtcbiAgICB2YXIgb2Zmc2V0ID0gaW5kZXggKiBob3Bfc2l6ZTtcbiAgICB3aGlsZSAobiA8IGRzdC5sZW5ndGggJiYgbiA8IHNyYy5sZW5ndGggJiYgbiA8IGZyYW1lX3NpemUpIHtcbiAgICAgICAgZHN0W25dID0gc3JjW24gKyBvZmZzZXRdO1xuICAgICAgICBuKys7XG4gICAgfVxuICAgIHdoaWxlIChuIDwgZHN0Lmxlbmd0aCkge1xuICAgICAgICBkc3Rbbl0gPSAwLjA7XG4gICAgfVxufVxuIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZ3MvZnVuY3Rpb25zLmQudHNcIiAvPlxuaW1wb3J0IHt4dHJhY3RfYXNzZXJ0X2FycmF5fSBmcm9tIFwiLi94dHJhY3RfYXNzZXJ0X2FycmF5XCI7XG5pbXBvcnQge3h0cmFjdF9hc3NlcnRfcG9zaXRpdmVfaW50ZWdlcn0gZnJvbSBcIi4veHRyYWN0X2Fzc2VydF9wb3NpdGl2ZV9pbnRlZ2VyXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiB4dHJhY3RfZ2V0X2RhdGFfZnJhbWVzKGRhdGEsIGZyYW1lX3NpemUsIGhvcF9zaXplLCBjb3B5KSB7XG4gICAgaWYgKGhvcF9zaXplID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaG9wX3NpemUgPSBmcmFtZV9zaXplO1xuICAgIH1cbiAgICAoZnVuY3Rpb24gKGRhdGEsIGZyYW1lX3NpemUsIGhvcF9zaXplKSB7XG4gICAgICAgIGlmICgheHRyYWN0X2Fzc2VydF9hcnJheShkYXRhKSkge1xuICAgICAgICAgICAgdGhyb3cgKFwiSW52YWxpZCBkYXRhIHBhcmFtZXRlci4gTXVzdCBiZSBpdGVtIHdpdGggaXRlcmFibGUgbGlzdFwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXh0cmFjdF9hc3NlcnRfcG9zaXRpdmVfaW50ZWdlcihmcmFtZV9zaXplKSkge1xuICAgICAgICAgICAgdGhyb3cgKFwieHRyYWN0X2dldF9kYXRhX2ZyYW1lcyByZXF1aXJlcyB0aGUgZnJhbWVfc2l6ZSB0byBiZSBhIHBvc2l0aXZlIGludGVnZXJcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF4dHJhY3RfYXNzZXJ0X3Bvc2l0aXZlX2ludGVnZXIoaG9wX3NpemUpKSB7XG4gICAgICAgICAgICB0aHJvdyAoXCJ4dHJhY3RfZ2V0X2RhdGFfZnJhbWVzIHJlcXVpcmVzIHRoZSBob3Bfc2l6ZSB0byBiZSBhIHBvc2l0aXZlIGludGVnZXJcIik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSkoZGF0YSwgZnJhbWVfc2l6ZSwgaG9wX3NpemUpO1xuXG4gICAgdmFyIGZyYW1lcyA9IFtdO1xuICAgIHZhciBOID0gZGF0YS5sZW5ndGg7XG4gICAgdmFyIEsgPSBNYXRoLmNlaWwoTiAvIGhvcF9zaXplKTtcbiAgICB2YXIgc3ViX2ZyYW1lO1xuICAgIGZvciAodmFyIGsgPSAwOyBrIDwgSzsgaysrKSB7XG4gICAgICAgIHZhciBvZmZzZXQgPSBrICogaG9wX3NpemU7XG4gICAgICAgIGlmIChjb3B5KSB7XG4gICAgICAgICAgICBzdWJfZnJhbWUgPSBuZXcgRmxvYXQ2NEFycmF5KGZyYW1lX3NpemUpO1xuICAgICAgICAgICAgZm9yICh2YXIgbiA9IDA7IG4gPCBmcmFtZV9zaXplICYmIG4gKyBvZmZzZXQgPCBkYXRhLmxlbmd0aDsgbisrKSB7XG4gICAgICAgICAgICAgICAgc3ViX2ZyYW1lW25dID0gZGF0YVtuICsgb2Zmc2V0XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN1Yl9mcmFtZSA9IGRhdGEuc3ViYXJyYXkob2Zmc2V0LCBvZmZzZXQgKyBmcmFtZV9zaXplKTtcbiAgICAgICAgICAgIGlmIChzdWJfZnJhbWUubGVuZ3RoIDwgZnJhbWVfc2l6ZSkge1xuICAgICAgICAgICAgICAgIC8vIE11c3QgemVyby1wYWQgdXAgdG8gdGhlIGxlbmd0aFxuICAgICAgICAgICAgICAgIHZhciBjX2ZyYW1lID0gbmV3IEZsb2F0NjRBcnJheShmcmFtZV9zaXplKTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN1Yl9mcmFtZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBjX2ZyYW1lW2ldID0gc3ViX2ZyYW1lW2ldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzdWJfZnJhbWUgPSBjX2ZyYW1lO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZyYW1lcy5wdXNoKHN1Yl9mcmFtZSk7XG4gICAgfVxuICAgIHJldHVybiBmcmFtZXM7XG59XG4iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy9mdW5jdGlvbnMuZC50c1wiIC8+XG5pbXBvcnQge3h0cmFjdF9hc3NlcnRfYXJyYXl9IGZyb20gXCIuL3h0cmFjdF9hc3NlcnRfYXJyYXlcIjtcbmV4cG9ydCBmdW5jdGlvbiB4dHJhY3RfZ2V0X251bWJlcl9vZl9mcmFtZXMoZGF0YSwgaG9wX3NpemUpIHtcbiAgICBpZiAoIXh0cmFjdF9hc3NlcnRfYXJyYXkoZGF0YSkpIHtcbiAgICAgICAgdGhyb3cgKFwiSW52YWxpZCBkYXRhIHBhcmFtZXRlci4gTXVzdCBiZSBpdGVtIHdpdGggaXRlcmFibGUgbGlzdFwiKTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBob3Bfc2l6ZSAhPT0gXCJudW1iZXJcIiAmJiBob3Bfc2l6ZSA8PSAwKSB7XG4gICAgICAgIHRocm93IChcIkludmFsaWQgaG9wX3NpemUuIE11c3QgYmUgcG9zaXRpdmUgaW50ZWdlclwiKTtcbiAgICB9XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoZGF0YS5sZW5ndGggLyBob3Bfc2l6ZSk7XG59XG4iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy9mdW5jdGlvbnMuZC50c1wiIC8+XG5pbXBvcnQge3h0cmFjdF9hc3NlcnRfYXJyYXl9IGZyb20gXCIuL3h0cmFjdF9hc3NlcnRfYXJyYXlcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHh0cmFjdF9oYXJtb25pY19zcGVjdHJ1bShwZWFrU3BlY3RydW0sIGYwLCB0aHJlc2hvbGQpIHtcbiAgICBpZiAoIXh0cmFjdF9hc3NlcnRfYXJyYXkocGVha1NwZWN0cnVtKSlcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgdmFyIE4gPSBwZWFrU3BlY3RydW0ubGVuZ3RoO1xuICAgIHZhciBLID0gTiA+PiAxO1xuICAgIHZhciByZXN1bHQgPSBuZXcgRmxvYXQ2NEFycmF5KE4pO1xuICAgIHZhciBhbXBzSW4gPSBwZWFrU3BlY3RydW0uc3ViYXJyYXkoMCwgSyk7XG4gICAgdmFyIGZyZXFzSW4gPSBwZWFrU3BlY3RydW0uc3ViYXJyYXkoSyk7XG4gICAgdmFyIGFtcHNPdXQgPSByZXN1bHQuc3ViYXJyYXkoMCwgSyk7XG4gICAgdmFyIGZyZXFzT3V0ID0gcmVzdWx0LnN1YmFycmF5KEspO1xuICAgIHZhciBuID0gSztcbiAgICBpZiAoZjAgPT09IHVuZGVmaW5lZCB8fCB0aHJlc2hvbGQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aHJvdyAoXCJoYXJtb25pY19zcGVjdHJ1bSByZXF1aXJlcyBmMCBhbmQgdGhyZXNob2xkIHRvIGJlIG51bWJlcnMgYW5kIGRlZmluZWRcIik7XG4gICAgfVxuICAgIGlmICh0aHJlc2hvbGQgPiAxKSB7XG4gICAgICAgIHRocmVzaG9sZCAvPSAxMDAuMDtcbiAgICB9XG4gICAgd2hpbGUgKG4tLSkge1xuICAgICAgICBpZiAoZnJlcXNJbltuXSAhPT0gMC4wKSB7XG4gICAgICAgICAgICB2YXIgcmF0aW8gPSBmcmVxc0luW25dIC8gZjA7XG4gICAgICAgICAgICB2YXIgbmVhcmVzdCA9IE1hdGgucm91bmQocmF0aW8pO1xuICAgICAgICAgICAgdmFyIGRpc3RhbmNlID0gTWF0aC5hYnMobmVhcmVzdCAtIHJhdGlvKTtcbiAgICAgICAgICAgIGlmIChkaXN0YW5jZSA+IHRocmVzaG9sZCkge1xuICAgICAgICAgICAgICAgIGFtcHNPdXRbbl0gPSAwLjA7XG4gICAgICAgICAgICAgICAgZnJlcXNPdXRbbl0gPSAwLjA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFtcHNPdXRbbl0gPSBhbXBzSW5bbl07XG4gICAgICAgICAgICAgICAgZnJlcXNPdXRbbl0gPSBmcmVxc0luW25dO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzdWx0W25dID0gMC4wO1xuICAgICAgICAgICAgZnJlcXNPdXRbbl0gPSAwLjA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbiIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL2Z1bmN0aW9ucy5kLnRzXCIgLz5cbmltcG9ydCB7eHRyYWN0X2Fzc2VydF9hcnJheX0gZnJvbSBcIi4veHRyYWN0X2Fzc2VydF9hcnJheVwiO1xuaW1wb3J0IHt4dHJhY3RfbG93aGlnaH0gZnJvbSBcIi4veHRyYWN0X2xvd2hpZ2hcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHh0cmFjdF9oaWdoZXN0X3ZhbHVlKGRhdGEsIHRocmVzaG9sZCkge1xuICAgIGlmICgheHRyYWN0X2Fzc2VydF9hcnJheShkYXRhKSlcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgaWYgKHR5cGVvZiB0aHJlc2hvbGQgIT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgdGhyZXNob2xkID0gK0luZmluaXR5O1xuICAgIH1cbiAgICByZXR1cm4geHRyYWN0X2xvd2hpZ2goZGF0YSwgdGhyZXNob2xkKS5tYXg7XG59XG4iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy9mdW5jdGlvbnMuZC50c1wiIC8+XG5pbXBvcnQge3h0cmFjdF9hc3NlcnRfYXJyYXl9IGZyb20gXCIuL3h0cmFjdF9hc3NlcnRfYXJyYXlcIjtcblxuZnVuY3Rpb24gZ2V0X3BlYWtfaW5kZXgoTSwgYW1wcykge1xuICAgIHZhciBwZWFrX2luZGV4ID0gMCxcbiAgICAgICAgcGVhayA9IDAsXG4gICAgICAgIGk7XG4gICAgdmFyIHRlbXBQcm9kdWN0ID0gbmV3IEZsb2F0NjRBcnJheShNKTtcbiAgICB0ZW1wUHJvZHVjdC5mb3JFYWNoKGZ1bmN0aW9uIChlLCBpLCBhKSB7XG4gICAgICAgIGFbaV0gPSBhbXBzW2ldICogYW1wc1tpICogMl0gKiBhbXBzW2kgKiAzXTtcbiAgICB9KTtcbiAgICB0ZW1wUHJvZHVjdC5mb3JFYWNoKGZ1bmN0aW9uICh2LCBpKSB7XG4gICAgICAgIGlmICh2ID4gcGVhaykge1xuICAgICAgICAgICAgcGVhayA9IHY7XG4gICAgICAgICAgICBwZWFrX2luZGV4ID0gaTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBwZWFrX2luZGV4O1xufVxuXG5leHBvcnQgZnVuY3Rpb24geHRyYWN0X2hwcyhzcGVjdHJ1bSkge1xuICAgIGlmICgheHRyYWN0X2Fzc2VydF9hcnJheShzcGVjdHJ1bSkpXG4gICAgICAgIHJldHVybiAwO1xuICAgIHZhciBwZWFrX2luZGV4ID0gMCxcbiAgICAgICAgcG9zaXRpb24xX2x3ciA9IDAsXG4gICAgICAgIGxhcmdlc3QxX2x3ciA9IDAsXG4gICAgICAgIHJhdGlvMSA9IDA7XG4gICAgdmFyIE4gPSBzcGVjdHJ1bS5sZW5ndGg7XG4gICAgdmFyIEsgPSBOID4+IDE7XG4gICAgdmFyIGFtcHMgPSBzcGVjdHJ1bS5zdWJhcnJheSgwLCBLKTtcbiAgICB2YXIgZnJlcXMgPSBzcGVjdHJ1bS5zdWJhcnJheShLKTtcbiAgICB2YXIgTSA9IE1hdGguY2VpbChLIC8gMy4wKTtcbiAgICB2YXIgaTtcbiAgICBpZiAoTSA8PSAxKSB7XG4gICAgICAgIHRocm93IChcIklucHV0IERhdGEgaXMgdG9vIHNob3J0IGZvciBIUFNcIik7XG4gICAgfVxuXG4gICAgcGVha19pbmRleCA9IGdldF9wZWFrX2luZGV4KE0sIGFtcHMpO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IEs7IGkrKykge1xuICAgICAgICBpZiAoYW1wc1tpXSA+IGxhcmdlc3QxX2x3ciAmJiBpICE9PSBwZWFrX2luZGV4KSB7XG4gICAgICAgICAgICBsYXJnZXN0MV9sd3IgPSBhbXBzW2ldO1xuICAgICAgICAgICAgcG9zaXRpb24xX2x3ciA9IGk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByYXRpbzEgPSBhbXBzW3Bvc2l0aW9uMV9sd3JdIC8gYW1wc1twZWFrX2luZGV4XTtcblxuICAgIGlmIChwb3NpdGlvbjFfbHdyID4gcGVha19pbmRleCAqIDAuNCAmJiBwb3NpdGlvbjFfbHdyIDwgcGVha19pbmRleCAqIDAuNiAmJiByYXRpbzEgPiAwLjEpXG4gICAgICAgIHBlYWtfaW5kZXggPSBwb3NpdGlvbjFfbHdyO1xuXG4gICAgcmV0dXJuIGZyZXFzW3BlYWtfaW5kZXhdO1xufVxuIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZ3MvZnVuY3Rpb25zLmQudHNcIiAvPlxuZXhwb3J0IGZ1bmN0aW9uIHh0cmFjdF9pbml0X2JhcmsoTiwgc2FtcGxlUmF0ZSwgYmFuZHMpIHtcbiAgICBpZiAodHlwZW9mIGJhbmRzICE9PSBcIm51bWJlclwiIHx8IGJhbmRzIDwgMCB8fCBiYW5kcyA+IDI2KSB7XG4gICAgICAgIGJhbmRzID0gMjY7XG4gICAgfVxuICAgIHZhciBlZGdlcyA9IFswLCAxMDAsIDIwMCwgMzAwLCA0MDAsIDUxMCwgNjMwLCA3NzAsIDkyMCwgMTA4MCwgMTI3MCwgMTQ4MCwgMTcyMCwgMjAwMCwgMjMyMCwgMjcwMCwgMzE1MCwgMzcwMCwgNDQwMCwgNTMwMCwgNjQwMCwgNzcwMCwgOTUwMCwgMTIwMDAsIDE1NTAwLCAyMDUwMCwgMjcwMDBdO1xuICAgIHZhciBiYW5kX2xpbWl0cyA9IG5ldyBJbnQzMkFycmF5KGJhbmRzKTtcbiAgICB3aGlsZSAoYmFuZHMtLSkge1xuICAgICAgICBiYW5kX2xpbWl0c1tiYW5kc10gPSAoZWRnZXNbYmFuZHNdIC8gc2FtcGxlUmF0ZSkgKiBOO1xuICAgIH1cbiAgICByZXR1cm4gYmFuZF9saW1pdHM7XG59XG4iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy9mdW5jdGlvbnMuZC50c1wiIC8+XG5pbXBvcnQge3h0cmFjdF9hcnJheV9zdW19IGZyb20gXCIuL3h0cmFjdF9hcnJheV9zdW1cIjtcbmV4cG9ydCBmdW5jdGlvbiB4dHJhY3RfaW5pdF9jaHJvbWEoTiwgc2FtcGxlUmF0ZSwgbmJpbnMsIEE0NDAsIGZfY3RyLCBvY3R3aWR0aCkge1xuICAgIC8qcnVuIGFyZyBjaGVja3MgaGVyZS4uLiAoaWYobmJpbnM9PSd1bmRlZmluZWQnKSovXG5cbiAgICBpZiAodHlwZW9mIG5iaW5zICE9PSBcIm51bWJlclwiIHx8IG5iaW5zIDw9IDEpIHtcbiAgICAgICAgbmJpbnMgPSAxMjtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBBNDQwICE9PSBcIm51bWJlclwiIHx8IEE0NDAgPD0gMjcuNSkge1xuICAgICAgICBBNDQwID0gNDQwO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGZfY3RyICE9PSBcIm51bWJlclwiKSB7XG4gICAgICAgIGZfY3RyID0gMTAwMDtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBvY3R3aWR0aCAhPT0gXCJudW1iZXJcIikge1xuICAgICAgICBvY3R3aWR0aCA9IDE7XG4gICAgfVxuICAgIHZhciBBMCA9IDI3LjU7IC8vIEEwIGluIEh6XG4gICAgdmFyIE4yID0gTjsgLy8gaWdub3JlIGZyZXEgdmFsdWVzIHJldHVybmVkIGJ5IHh0cmFjdF9zcGVjdHJ1bSAtIHRoaXMgcmVsaWVzIG9uIGRjLW9mZnNldCBiZWluZyBrZXB0XG4gICAgdmFyIGN0cm9jdCA9IE1hdGgubG9nKGZfY3RyIC8gQTApIC8gTWF0aC5MTjI7IC8vIGZfY3RyIGluIG9jdGF2ZXNcbiAgICB2YXIgY2hyb21hRmlsdGVycyA9IHtcbiAgICAgICAgd3RzOiBbXSxcbiAgICAgICAgbmZmdDogTjIsXG4gICAgICAgIG5iaW5zOiBuYmlucyxcbiAgICB9O1xuICAgIHZhciBmZnRmcnFiaW5zID0gbmV3IEZsb2F0NjRBcnJheShOMik7XG4gICAgdmFyIGJpbndpZHRoYmlucyA9IG5ldyBGbG9hdDY0QXJyYXkoTjIpO1xuICAgIC8vIENvbnZlcnQgYSBmcmVxdWVuY3kgaW4gSHogaW50byBhIHJlYWwgbnVtYmVyIGNvdW50aW5nIHRoZSBvY3RhdmVzIGFib3ZlIEEwLiBTbyBoejJvY3RzKDQ0MCkgPSA0LjBcbiAgICB2YXIgaHoyb2N0cyA9IGZ1bmN0aW9uIChmcmVxKSB7XG4gICAgICAgIHJldHVybiBNYXRoLmxvZyhmcmVxIC8gKEE0NDAgLyAxNikpIC8gTWF0aC5MTjI7XG4gICAgfTtcbiAgICB2YXIgaSwgajtcbiAgICBmb3IgKGkgPSAxOyBpIDwgTjI7IGkrKykge1xuICAgICAgICBmZnRmcnFiaW5zW2ldID0gbmJpbnMgKiBoejJvY3RzKGkgLyBOICogc2FtcGxlUmF0ZSk7XG4gICAgfVxuICAgIGZmdGZycWJpbnNbMF0gPSBmZnRmcnFiaW5zWzFdIC0gMS41ICogbmJpbnM7IC8vREMgb2Zmc2V0IGJpblxuICAgIGZvciAoaSA9IDA7IGkgPCBOMiAtIDE7IGkrKykge1xuICAgICAgICB2YXIgZGlmZlZhbCA9IGZmdGZycWJpbnNbaSArIDFdIC0gZmZ0ZnJxYmluc1tpXTtcbiAgICAgICAgaWYgKGRpZmZWYWwgPj0gMSkge1xuICAgICAgICAgICAgYmlud2lkdGhiaW5zW2ldID0gZGlmZlZhbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJpbndpZHRoYmluc1tpXSA9IDE7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYmlud2lkdGhiaW5zW04yIC0gMV0gPSAxO1xuICAgIHZhciBuYmluczIgPSBNYXRoLnJvdW5kKG5iaW5zIC8gMi4wKTtcbiAgICB2YXIgd3RzID0gW107XG4gICAgZm9yIChpID0gMDsgaSA8IG5iaW5zOyBpKyspIHtcbiAgICAgICAgd3RzW2ldID0gW107XG4gICAgICAgIGZvciAoaiA9IDA7IGogPCBOMjsgaisrKSB7XG4gICAgICAgICAgICB2YXIgdG1wRiA9IGZmdGZycWJpbnNbal0gLSBpO1xuICAgICAgICAgICAgdmFyIHRtcEIgPSBiaW53aWR0aGJpbnNbal07XG4gICAgICAgICAgICB2YXIgcmVtRiA9ICgodG1wRiArIG5iaW5zMiArIDEwICogbmJpbnMpICUgbmJpbnMpIC0gbmJpbnMyO1xuICAgICAgICAgICAgd3RzW2ldW2pdID0gTWF0aC5leHAoLTAuNSAqIE1hdGgucG93KCgyICogcmVtRiAvIHRtcEIpLCAyKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoZWFkKGEpIHtcbiAgICAgICAgcmV0dXJuIGFbMF07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdGFpbChhKSB7XG4gICAgICAgIHJldHVybiBhLnNsaWNlKDEpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRyYW5zcG9zZShhKSB7XG4gICAgICAgIGlmIChhID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgeCA9IGEubGVuZ3RoLFxuICAgICAgICAgICAgeSA9IGFbMF0ubGVuZ3RoLFxuICAgICAgICAgICAgbXR4ID0gW10sXG4gICAgICAgICAgICBpLCBqO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgeTsgaSsrKSB7XG4gICAgICAgICAgICBtdHhbaV0gPSBuZXcgRmxvYXQ2NEFycmF5KHgpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCB4OyBpKyspIHtcbiAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCB5OyBqKyspIHtcbiAgICAgICAgICAgICAgICBtdHhbal1baV0gPSBhW2ldW2pdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtdHg7XG4gICAgfVxuICAgIHZhciB3dHNDb2x1bW5TdW1zID0gdHJhbnNwb3NlKHd0cykubWFwKHh0cmFjdF9hcnJheV9zdW0pO1xuICAgIGZvciAoaSA9IDA7IGkgPCBuYmluczsgaSsrKSB7XG4gICAgICAgIGZvciAoaiA9IDA7IGogPCBOMjsgaisrKSB7XG4gICAgICAgICAgICB3dHNbaV1bal0gKj0gMSAvIHd0c0NvbHVtblN1bXNbal07XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKG9jdHdpZHRoID4gMCkge1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbmJpbnM7IGkrKykge1xuICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IE4yOyBqKyspIHtcbiAgICAgICAgICAgICAgICB3dHNbaV1bal0gKj0gTWF0aC5leHAoLTAuNSAqIChNYXRoLnBvdygoKGZmdGZycWJpbnNbal0gLyBuYmlucyAtIGN0cm9jdCkgLyBvY3R3aWR0aCksIDIpKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2hyb21hRmlsdGVycy53dHMgPSB3dHM7XG4gICAgcmV0dXJuIGNocm9tYUZpbHRlcnM7XG59XG4iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy9mdW5jdGlvbnMuZC50c1wiIC8+XG5leHBvcnQgZnVuY3Rpb24geHRyYWN0X2luaXRfZGN0KE4pIHtcbiAgICB2YXIgZGN0ID0ge1xuICAgICAgICBOOiBOLFxuICAgICAgICB3dDogW11cbiAgICB9O1xuICAgIGZvciAodmFyIGsgPSAwOyBrIDwgTjsgaysrKSB7XG4gICAgICAgIGRjdC53dFtrXSA9IG5ldyBGbG9hdDY0QXJyYXkoTik7XG4gICAgICAgIGZvciAodmFyIG4gPSAwOyBuIDwgTjsgbisrKSB7XG4gICAgICAgICAgICBkY3Qud3Rba11bbl0gPSBNYXRoLmNvcyhNYXRoLlBJICogayAqIChuICsgMC41KSAvIE4pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBkY3Q7XG59XG4iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy9mdW5jdGlvbnMuZC50c1wiIC8+XG5leHBvcnQgZnVuY3Rpb24geHRyYWN0X2luaXRfZGZ0KE4pIHtcbiAgICB2YXIgZGZ0ID0ge1xuICAgICAgICBOOiBOIC8gMiArIDEsXG4gICAgICAgIHJlYWw6IFtdLFxuICAgICAgICBpbWFnOiBbXVxuICAgIH07XG4gICAgdmFyIHBvd2VyX2NvbnN0ID0gLTIuMCAqIE1hdGguUEkgLyBOO1xuICAgIGZvciAodmFyIGsgPSAwOyBrIDwgZGZ0Lk47IGsrKykge1xuICAgICAgICB2YXIgcG93ZXJfayA9IHBvd2VyX2NvbnN0ICogaztcbiAgICAgICAgZGZ0LnJlYWxba10gPSBuZXcgRmxvYXQ2NEFycmF5KE4pO1xuICAgICAgICBkZnQuaW1hZ1trXSA9IG5ldyBGbG9hdDY0QXJyYXkoTik7XG4gICAgICAgIGZvciAodmFyIG4gPSAwOyBuIDwgTjsgbisrKSB7XG4gICAgICAgICAgICB2YXIgcG93ZXIgPSBwb3dlcl9rICogbjtcbiAgICAgICAgICAgIGRmdC5yZWFsW2tdW25dID0gTWF0aC5jb3MocG93ZXIpO1xuICAgICAgICAgICAgZGZ0LmltYWdba11bbl0gPSBNYXRoLnNpbihwb3dlcik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGRmdDtcbn1cbiIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL2Z1bmN0aW9ucy5kLnRzXCIgLz5cblxuZnVuY3Rpb24gZ2V0X2ZmdF9wZWFrKE4sIGZyZXFfbWF4LCBmcmVxX21pbiwgZnJlcV9iYW5kcywgbnlxdWlzdCwgc3R5bGUpIHtcbiAgICB2YXIgbm9ybSA9IDEsXG4gICAgICAgIE0gPSBOIC8gMixcbiAgICAgICAgaGVpZ2h0LCBub3JtX2ZhY3QsIG47XG4gICAgdmFyIG1lbF9mcmVxX21heCA9IDExMjcgKiBNYXRoLmxvZygxICsgZnJlcV9tYXggLyA3MDApO1xuICAgIHZhciBtZWxfZnJlcV9taW4gPSAxMTI3ICogTWF0aC5sb2coMSArIGZyZXFfbWluIC8gNzAwKTtcbiAgICB2YXIgZnJlcV9id19tZWwgPSAobWVsX2ZyZXFfbWF4IC0gbWVsX2ZyZXFfbWluKSAvIGZyZXFfYmFuZHM7XG5cbiAgICB2YXIgbWVsX3BlYWsgPSBuZXcgRmxvYXQ2NEFycmF5KGZyZXFfYmFuZHMgKyAyKTtcbiAgICB2YXIgbGluX3BlYWsgPSBuZXcgRmxvYXQ2NEFycmF5KGZyZXFfYmFuZHMgKyAyKTtcbiAgICB2YXIgZmZ0X3BlYWsgPSBuZXcgRmxvYXQ2NEFycmF5KGZyZXFfYmFuZHMgKyAyKTtcbiAgICB2YXIgaGVpZ2h0X25vcm0gPSBuZXcgRmxvYXQ2NEFycmF5KGZyZXFfYmFuZHMpO1xuICAgIG1lbF9wZWFrWzBdID0gbWVsX2ZyZXFfbWluO1xuICAgIGxpbl9wZWFrWzBdID0gZnJlcV9taW47XG4gICAgZmZ0X3BlYWtbMF0gPSBNYXRoLmZsb29yKGxpbl9wZWFrWzBdIC8gbnlxdWlzdCAqIE0pO1xuXG4gICAgZm9yIChuID0gMTsgbiA8IChmcmVxX2JhbmRzICsgMik7ICsrbikge1xuICAgICAgICAvL3JvbGwgb3V0IHBlYWsgbG9jYXRpb25zIC0gbWVsLCBsaW5lYXIgYW5kIGxpbmVhciBvbiBmZnQgd2luZG93IHNjYWxlXG4gICAgICAgIG1lbF9wZWFrW25dID0gbWVsX3BlYWtbbiAtIDFdICsgZnJlcV9id19tZWw7XG4gICAgICAgIGxpbl9wZWFrW25dID0gNzAwICogKE1hdGguZXhwKG1lbF9wZWFrW25dIC8gMTEyNykgLSAxKTtcbiAgICAgICAgZmZ0X3BlYWtbbl0gPSBNYXRoLmZsb29yKGxpbl9wZWFrW25dIC8gbnlxdWlzdCAqIE0pO1xuICAgIH1cblxuICAgIGZvciAobiA9IDA7IG4gPCBmcmVxX2JhbmRzOyBuKyspIHtcbiAgICAgICAgLy9yb2xsIG91dCBub3JtYWxpc2VkIGdhaW4gb2YgZWFjaCBwZWFrXG4gICAgICAgIGlmIChzdHlsZSA9PT0gXCJYVFJBQ1RfRVFVQUxfR0FJTlwiKSB7XG4gICAgICAgICAgICBoZWlnaHQgPSAxO1xuICAgICAgICAgICAgbm9ybV9mYWN0ID0gbm9ybTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGhlaWdodCA9IDIgLyAobGluX3BlYWtbbiArIDJdIC0gbGluX3BlYWtbbl0pO1xuICAgICAgICAgICAgbm9ybV9mYWN0ID0gbm9ybSAvICgyIC8gKGxpbl9wZWFrWzJdIC0gbGluX3BlYWtbMF0pKTtcbiAgICAgICAgfVxuICAgICAgICBoZWlnaHRfbm9ybVtuXSA9IGhlaWdodCAqIG5vcm1fZmFjdDtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZjogZmZ0X3BlYWssXG4gICAgICAgIGg6IGhlaWdodF9ub3JtXG4gICAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHh0cmFjdF9pbml0X21mY2MoTiwgbnlxdWlzdCwgc3R5bGUsIGZyZXFfbWluLCBmcmVxX21heCwgZnJlcV9iYW5kcykge1xuICAgIHZhciBtZmNjID0ge1xuICAgICAgICBuX2ZpbHRlcnM6IGZyZXFfYmFuZHMsXG4gICAgICAgIGZpbHRlcnM6IFtdXG4gICAgfTtcbiAgICB2YXIgbm9ybSA9IDEsXG4gICAgICAgIE0gPSBOIC8gMixcbiAgICAgICAgaGVpZ2h0LCBub3JtX2ZhY3QsIG47XG5cbiAgICBpZiAoZnJlcV9iYW5kcyA8PSAxKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHZhciBpID0gMCxcbiAgICAgICAgZmggPSBnZXRfZmZ0X3BlYWsoTiwgZnJlcV9tYXgsIGZyZXFfbWluLCBmcmVxX2JhbmRzLCBueXF1aXN0LCBzdHlsZSksXG4gICAgICAgIGluYztcbiAgICB2YXIgZmZ0X3BlYWsgPSBmaC5mLFxuICAgICAgICBoZWlnaHRfbm9ybSA9IGZoLmg7XG4gICAgdmFyIG5leHRfcGVhaztcbiAgICBmb3IgKG4gPSAwOyBuIDwgZnJlcV9iYW5kczsgbisrKSB7XG4gICAgICAgIC8vIGNhbGN1bGF0ZSB0aGUgcmlzZSBpbmNyZW1lbnRcbiAgICAgICAgaWYgKG4gPT09IDApIHtcbiAgICAgICAgICAgIGluYyA9IGhlaWdodF9ub3JtW25dIC8gZmZ0X3BlYWtbbl07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpbmMgPSBoZWlnaHRfbm9ybVtuXSAvIChmZnRfcGVha1tuXSAtIGZmdF9wZWFrW24gLSAxXSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHZhbCA9IDA7XG4gICAgICAgIC8vIENyZWF0ZSBhcnJheVxuICAgICAgICBtZmNjLmZpbHRlcnNbbl0gPSBuZXcgRmxvYXQ2NEFycmF5KE4pO1xuICAgICAgICAvLyBmaWxsIGluIHRoZSByaXNlXG4gICAgICAgIGZvciAoOyBpIDw9IGZmdF9wZWFrW25dOyBpKyspIHtcbiAgICAgICAgICAgIG1mY2MuZmlsdGVyc1tuXVtpXSA9IHZhbDtcbiAgICAgICAgICAgIHZhbCArPSBpbmM7XG4gICAgICAgIH1cbiAgICAgICAgLy8gY2FsY3VsYXRlIHRoZSBmYWxsIGluY3JlbWVudFxuICAgICAgICBpbmMgPSBoZWlnaHRfbm9ybVtuXSAvIChmZnRfcGVha1tuICsgMV0gLSBmZnRfcGVha1tuXSk7XG5cbiAgICAgICAgdmFsID0gMDtcbiAgICAgICAgbmV4dF9wZWFrID0gZmZ0X3BlYWtbbiArIDFdO1xuXG4gICAgICAgIC8vIHJldmVyc2UgZmlsbCB0aGUgJ2ZhbGwnXG4gICAgICAgIGZvciAoaSA9IE1hdGguZmxvb3IobmV4dF9wZWFrKTsgaSA+IGZmdF9wZWFrW25dOyBpLS0pIHtcbiAgICAgICAgICAgIG1mY2MuZmlsdGVyc1tuXVtpXSA9IHZhbDtcbiAgICAgICAgICAgIHZhbCArPSBpbmM7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG1mY2M7XG59XG4iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy9mdW5jdGlvbnMuZC50c1wiIC8+XG5leHBvcnQgZnVuY3Rpb24geHRyYWN0X2luaXRfcGNwKE4sIGZzLCBmX3JlZikge1xuICAgIGlmICh0eXBlb2YgZnMgIT09IFwibnVtYmVyXCIgfHwgdHlwZW9mIE4gIT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgdGhyb3cgKCdUaGUgU2FtcGxlIFJhdGUgYW5kIHNhbXBsZSBjb3VudCBoYXZlIHRvIGJlIGRlZmluZWQ6IHh0cmFjdF9pbml0X3BjcChOLCBmcywgZl9yZWYpJyk7XG4gICAgfVxuICAgIGlmIChOIDw9IDAgfHwgTiAhPT0gTWF0aC5mbG9vcihOKSkge1xuICAgICAgICB0aHJvdyAoXCJUaGUgc2FtcGxlIGNvdW50LCBOLCBtdXN0IGJlIGEgcG9zaXRpdmUgaW50ZWdlcjogeHRyYWN0X2luaXRfcGNwKE4sIGZzLCBmX3JlZilcIik7XG4gICAgfVxuICAgIGlmIChmcyA8PSAwLjApIHtcbiAgICAgICAgdGhyb3cgKCdUaGUgU2FtcGxlIFJhdGUgbXVzdCBiZSBhIHBvc2l0aXZlIG51bWJlcjogeHRyYWN0X2luaXRfcGNwKE4sIGZzLCBmX3JlZiknKTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBmX3JlZiAhPT0gXCJudW1iZXJcIiB8fCBmX3JlZiA8PSAwLjAgfHwgZl9yZWYgPj0gZnMgLyAyKSB7XG4gICAgICAgIGZfcmVmID0gNDguOTk5NDI5NDk3NztcbiAgICB9XG5cbiAgICB2YXIgTSA9IG5ldyBGbG9hdDY0QXJyYXkoTiAtIDEpO1xuICAgIHZhciBmczIgPSBmcyAvIDI7XG4gICAgZm9yICh2YXIgbCA9IDE7IGwgPCBOOyBsKyspIHtcbiAgICAgICAgdmFyIGYgPSAoMiAqIGwgLyBOKSAqIGZzMjtcbiAgICAgICAgTVtsIC0gMV0gPSBNYXRoLnJvdW5kKDEyICogTWF0aC5sb2cyKChmIC8gTikgKiBmX3JlZikpICUgMTI7XG4gICAgfVxuICAgIHJldHVybiBNO1xufVxuIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZ3MvZnVuY3Rpb25zLmQudHNcIiAvPlxuZXhwb3J0IGZ1bmN0aW9uIHh0cmFjdF9pbml0X3dhdmVsZXQoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgX3ByZXZQaXRjaDogLTEsXG4gICAgICAgIF9waXRjaENvbmZpZGVuY2U6IC0xXG4gICAgfTtcbn1cbiIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL2Z1bmN0aW9ucy5kLnRzXCIgLz5cbmltcG9ydCB7eHRyYWN0X2Fzc2VydF9hcnJheX0gZnJvbSBcIi4veHRyYWN0X2Fzc2VydF9hcnJheVwiO1xuZXhwb3J0IGZ1bmN0aW9uIHh0cmFjdF9pcnJlZ3VsYXJpdHlfaihzcGVjdHJ1bSkge1xuICAgIGlmICgheHRyYWN0X2Fzc2VydF9hcnJheShzcGVjdHJ1bSkpXG4gICAgICAgIHJldHVybiAwO1xuICAgIHZhciBudW0gPSAwLFxuICAgICAgICBkZW4gPSAwO1xuICAgIHZhciBOID0gc3BlY3RydW0ubGVuZ3RoO1xuICAgIHZhciBLID0gTiA+PiAxO1xuICAgIHZhciBhbXBzID0gc3BlY3RydW0uc3ViYXJyYXkoMCwgSyk7XG4gICAgZm9yICh2YXIgbiA9IDA7IG4gPCBLIC0gMTsgbisrKSB7XG4gICAgICAgIG51bSArPSBNYXRoLnBvdyhhbXBzW25dIC0gYW1wc1tuICsgMV0sIDIpO1xuICAgICAgICBkZW4gKz0gTWF0aC5wb3coYW1wc1tuXSwgMik7XG4gICAgfVxuICAgIHJldHVybiBudW0gLyBkZW47XG59XG4iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy9mdW5jdGlvbnMuZC50c1wiIC8+XG5pbXBvcnQge3h0cmFjdF9hc3NlcnRfYXJyYXl9IGZyb20gXCIuL3h0cmFjdF9hc3NlcnRfYXJyYXlcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHh0cmFjdF9pcnJlZ3VsYXJpdHlfayhzcGVjdHJ1bSkge1xuICAgIGlmICgheHRyYWN0X2Fzc2VydF9hcnJheShzcGVjdHJ1bSkpXG4gICAgICAgIHJldHVybiAwO1xuICAgIHZhciByZXN1bHQgPSAwO1xuICAgIHZhciBOID0gc3BlY3RydW0ubGVuZ3RoO1xuICAgIHZhciBLID0gTiA+PiAxO1xuICAgIHZhciBhbXBzID0gc3BlY3RydW0uc3ViYXJyYXkoMCwgSyk7XG4gICAgZm9yICh2YXIgbiA9IDE7IG4gPCBLIC0gMTsgbisrKSB7XG4gICAgICAgIHJlc3VsdCArPSBNYXRoLmFicyhNYXRoLmxvZzEwKGFtcHNbbl0pIC0gTWF0aC5sb2cxMChhbXBzW24gLSAxXSArIGFtcHNbbl0gKyBhbXBzW24gKyAxXSkgLyAzKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbiIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL2Z1bmN0aW9ucy5kLnRzXCIgLz5cbmV4cG9ydCBmdW5jdGlvbiB4dHJhY3RfaXNfZGVub3JtYWwobnVtKSB7XG4gICAgaWYgKE1hdGguYWJzKG51bSkgPD0gMi4yMjUwNzM4NTg1MDcyMDE0ZS0zMDgpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL2Z1bmN0aW9ucy5kLnRzXCIgLz5cbmltcG9ydCB7eHRyYWN0X3NrZXduZXNzX2t1cnRvc2lzfSBmcm9tIFwiLi94dHJhY3Rfc2tld25lc3Nfa3VydG9zaXNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHh0cmFjdF9rdXJ0b3NpcyhhcnJheSwgbWVhbiwgc3RhbmRhcmRfZGV2aWF0aW9uKSB7XG4gICAgcmV0dXJuIHh0cmFjdF9za2V3bmVzc19rdXJ0b3NpcyhhcnJheSwgbWVhbiwgc3RhbmRhcmRfZGV2aWF0aW9uKVsxXTtcbn1cbiIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL2Z1bmN0aW9ucy5kLnRzXCIgLz5cbmltcG9ydCB7eHRyYWN0X2Fzc2VydF9hcnJheX0gZnJvbSBcIi4veHRyYWN0X2Fzc2VydF9hcnJheVwiO1xuZXhwb3J0IGZ1bmN0aW9uIHh0cmFjdF9sb3VkbmVzcyhiYXJrQmFuZHNBcnJheSkge1xuICAgIGlmICgheHRyYWN0X2Fzc2VydF9hcnJheShiYXJrQmFuZHNBcnJheSkpXG4gICAgICAgIHJldHVybiAwO1xuICAgIHZhciByZXN1bHQgPSAwO1xuICAgIGlmIChiYXJrQmFuZHNBcnJheS5yZWR1Y2UpIHtcbiAgICAgICAgcmVzdWx0ID0gYmFya0JhbmRzQXJyYXkucmVkdWNlKGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgICByZXR1cm4gYSArIE1hdGgucG93KGIsIDAuMjMpO1xuICAgICAgICB9LCAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBmb3IgKHZhciBuID0gMDsgbiA8IGJhcmtCYW5kc0FycmF5Lmxlbmd0aDsgbisrKSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gTWF0aC5wb3coYmFya0JhbmRzQXJyYXlbbl0sIDAuMjMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG4iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy9mdW5jdGlvbnMuZC50c1wiIC8+XG5pbXBvcnQge3h0cmFjdF9hc3NlcnRfYXJyYXl9IGZyb20gXCIuL3h0cmFjdF9hc3NlcnRfYXJyYXlcIjtcbmltcG9ydCB7eHRyYWN0X2xvd2hpZ2h9IGZyb20gXCIuL3h0cmFjdF9sb3doaWdoXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiB4dHJhY3RfbG93ZXN0X3ZhbHVlKGRhdGEsIHRocmVzaG9sZCkge1xuICAgIGlmICgheHRyYWN0X2Fzc2VydF9hcnJheShkYXRhKSlcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgaWYgKHR5cGVvZiB0aHJlc2hvbGQgIT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgdGhyZXNob2xkID0gLUluZmluaXR5O1xuICAgIH1cbiAgICByZXR1cm4geHRyYWN0X2xvd2hpZ2goZGF0YSwgdGhyZXNob2xkKS5taW47XG59XG4iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy9mdW5jdGlvbnMuZC50c1wiIC8+XG5leHBvcnQgZnVuY3Rpb24geHRyYWN0X2xvd2hpZ2goZGF0YSwgdGhyZXNob2xkKSB7XG4gICAgdmFyIHIgPSB7XG4gICAgICAgIG1pbjogbnVsbCxcbiAgICAgICAgbWF4OiBudWxsXG4gICAgfTtcbiAgICBmb3IgKHZhciBuID0gMDsgbiA8IGRhdGEubGVuZ3RoOyBuKyspIHtcbiAgICAgICAgaWYgKGRhdGFbbl0gPiB0aHJlc2hvbGQpIHtcbiAgICAgICAgICAgIHIubWluID0gTWF0aC5taW4oci5taW4sIGRhdGFbbl0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkYXRhW25dIDwgdGhyZXNob2xkKSB7XG4gICAgICAgICAgICByLm1heCA9IE1hdGgubWF4KHIubWF4LCBkYXRhW25dKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcjtcbn1cbiIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL2Z1bmN0aW9ucy5kLnRzXCIgLz5cbmltcG9ydCB7eHRyYWN0X2Fzc2VydF9hcnJheX0gZnJvbSBcIi4veHRyYWN0X2Fzc2VydF9hcnJheVwiO1xuXG5leHBvcnQgZnVuY3Rpb24geHRyYWN0X2xwYyhhdXRvY29ycikge1xuICAgIGlmICgheHRyYWN0X2Fzc2VydF9hcnJheShhdXRvY29ycikpXG4gICAgICAgIHJldHVybiAwO1xuICAgIHZhciBpLCBqLCByLCBlcnJvciA9IGF1dG9jb3JyWzBdO1xuICAgIHZhciBOID0gYXV0b2NvcnIubGVuZ3RoO1xuICAgIHZhciBMID0gTiAtIDE7XG4gICAgdmFyIGxwYyA9IG5ldyBGbG9hdDY0QXJyYXkoTCk7XG4gICAgdmFyIHJlZiA9IG5ldyBGbG9hdDY0QXJyYXkoTCk7XG4gICAgaWYgKGVycm9yID09PSAwLjApIHtcbiAgICAgICAgcmV0dXJuIGxwYztcbiAgICB9XG5cbiAgICAoZnVuY3Rpb24gKCkge1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgTDsgaSsrKSB7XG4gICAgICAgICAgICByID0gLWF1dG9jb3JyW2kgKyAxXTtcbiAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBpOyBqKyspIHtcbiAgICAgICAgICAgICAgICByIC09IGxwY1tqXSAqIGF1dG9jb3JyW2kgLSBqXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHIgLz0gZXJyb3I7XG4gICAgICAgICAgICByZWZbaV0gPSByO1xuXG4gICAgICAgICAgICBscGNbaV0gPSByO1xuICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IChpID4+IDEpOyBqKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgdG1wID0gbHBjW2pdO1xuICAgICAgICAgICAgICAgIGxwY1tqXSArPSByICogbHBjW2kgLSAxIC0gal07XG4gICAgICAgICAgICAgICAgbHBjW2kgLSAxIC0gal0gKz0gciAqIHRtcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpICUgMikge1xuICAgICAgICAgICAgICAgIGxwY1tqXSArPSBscGNbal0gKiByO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZXJyb3IgKj0gMS4wIC0gciAqIHI7XG4gICAgICAgIH1cbiAgICB9KSgpO1xuICAgIHJldHVybiBscGM7XG59XG4iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy9mdW5jdGlvbnMuZC50c1wiIC8+XG5pbXBvcnQge3h0cmFjdF9hc3NlcnRfYXJyYXl9IGZyb20gXCIuL3h0cmFjdF9hc3NlcnRfYXJyYXlcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHh0cmFjdF9scGNjKGxwYywgUSkge1xuICAgIGlmICgheHRyYWN0X2Fzc2VydF9hcnJheShscGMpKVxuICAgICAgICByZXR1cm4gMDtcbiAgICB2YXIgTiA9IGxwYy5sZW5ndGg7XG4gICAgdmFyIG4sIGssIHN1bSwgb3JkZXIgPSBOIC0gMSxcbiAgICAgICAgY2VwX2xlbmd0aDtcbiAgICBpZiAodHlwZW9mIFEgIT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgUSA9IE4gLSAxO1xuICAgIH1cbiAgICBjZXBfbGVuZ3RoID0gUTtcblxuICAgIHZhciByZXN1bHQgPSBuZXcgRmxvYXQ2NEFycmF5KGNlcF9sZW5ndGgpO1xuICAgIChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZvciAobiA9IDE7IG4gPCBRICYmIG4gPCBjZXBfbGVuZ3RoOyBuKyspIHtcbiAgICAgICAgICAgIHN1bSA9IDA7XG4gICAgICAgICAgICBmb3IgKGsgPSAxOyBrIDwgbjsgaysrKSB7XG4gICAgICAgICAgICAgICAgc3VtICs9IGsgKiByZXN1bHRbayAtIDFdICogbHBjW24gLSBrXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdFtuIC0gMV0gPSBscGNbbl0gKyBzdW0gLyBuO1xuICAgICAgICB9XG4gICAgfSkoKTtcbiAgICAoZnVuY3Rpb24gKCkge1xuICAgICAgICBmb3IgKG4gPSBvcmRlciArIDE7IG4gPD0gY2VwX2xlbmd0aDsgbisrKSB7XG4gICAgICAgICAgICBzdW0gPSAwLjA7XG4gICAgICAgICAgICBmb3IgKGsgPSBuIC0gKG9yZGVyIC0gMSk7IGsgPCBuOyBrKyspIHtcbiAgICAgICAgICAgICAgICBzdW0gKz0gayAqIHJlc3VsdFtrIC0gMV0gKiBscGNbbiAtIGtdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzdWx0W24gLSAxXSA9IHN1bSAvIG47XG4gICAgICAgIH1cbiAgICB9KSgpO1xuICAgIHJldHVybiByZXN1bHQ7XG59XG4iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy9mdW5jdGlvbnMuZC50c1wiIC8+XG5pbXBvcnQge3h0cmFjdF9hc3NlcnRfYXJyYXl9IGZyb20gXCIuL3h0cmFjdF9hc3NlcnRfYXJyYXlcIjtcbmltcG9ydCB7eHRyYWN0X2FycmF5X3N1bX0gZnJvbSBcIi4veHRyYWN0X2FycmF5X3N1bVwiO1xuZXhwb3J0IGZ1bmN0aW9uIHh0cmFjdF9tZWFuKGFycmF5KSB7XG4gICAgaWYgKCF4dHJhY3RfYXNzZXJ0X2FycmF5KGFycmF5KSlcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgcmV0dXJuIHh0cmFjdF9hcnJheV9zdW0oYXJyYXkpIC8gYXJyYXkubGVuZ3RoO1xufVxuIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZ3MvZnVuY3Rpb25zLmQudHNcIiAvPlxuaW1wb3J0IHt4dHJhY3RfYXNzZXJ0X2FycmF5fSBmcm9tIFwiLi94dHJhY3RfYXNzZXJ0X2FycmF5XCI7XG5pbXBvcnQge3h0cmFjdF9kY3R9IGZyb20gXCIuL3h0cmFjdF9kY3RcIjtcbmV4cG9ydCBmdW5jdGlvbiB4dHJhY3RfbWZjYyhzcGVjdHJ1bSwgbWZjYykge1xuICAgIGlmICgheHRyYWN0X2Fzc2VydF9hcnJheShzcGVjdHJ1bSkpXG4gICAgICAgIHJldHVybiAwO1xuICAgIHZhciBLID0gc3BlY3RydW0ubGVuZ3RoID4+IDE7XG4gICAgaWYgKHR5cGVvZiBtZmNjICE9PSBcIm9iamVjdFwiKSB7XG4gICAgICAgIHRocm93IChcIkludmFsaWQgTUZDQywgbXVzdCBiZSBNRkNDIG9iamVjdCBidWlsdCB1c2luZyB4dHJhY3RfaW5pdF9tZmNjXCIpO1xuICAgIH1cbiAgICBpZiAobWZjYy5uX2ZpbHRlcnMgPT09IDApIHtcbiAgICAgICAgdGhyb3cgKFwiSW52YWxpZCBNRkNDLCBvYmplY3QgbXVzdCBiZSBidWlsdCB1c2luZyB4dHJhY3RfaW5pdF9tZmNjXCIpO1xuICAgIH1cbiAgICBpZiAobWZjYy5maWx0ZXJzWzBdLmxlbmd0aCAhPT0gSykge1xuICAgICAgICB0aHJvdyAoXCJMZW5ndGhzIGRvIG5vdCBtYXRjaFwiKTtcbiAgICB9XG4gICAgdmFyIHJlc3VsdCA9IG5ldyBGbG9hdDY0QXJyYXkobWZjYy5uX2ZpbHRlcnMpO1xuICAgIHJlc3VsdC5mb3JFYWNoKGZ1bmN0aW9uICh2LCBmLCByKSB7XG4gICAgICAgIHJbZl0gPSAwLjA7XG4gICAgICAgIHZhciBmaWx0ZXIgPSBtZmNjLmZpbHRlcnNbZl07XG4gICAgICAgIGZvciAodmFyIG4gPSAwOyBuIDwgZmlsdGVyLmxlbmd0aDsgbisrKSB7XG4gICAgICAgICAgICByW2ZdICs9IHNwZWN0cnVtW25dICogZmlsdGVyW25dO1xuICAgICAgICB9XG4gICAgICAgIHJbZl0gPSBNYXRoLmxvZyhNYXRoLm1heChyW2ZdLCAyZS00MikpO1xuICAgIH0pO1xuICAgIHJldHVybiB4dHJhY3RfZGN0KHJlc3VsdCk7XG59XG4iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy9mdW5jdGlvbnMuZC50c1wiIC8+XG5leHBvcnQgZnVuY3Rpb24geHRyYWN0X21pZGljZW50KGYwKSB7XG4gICAgaWYgKHR5cGVvZiBmMCAhPT0gXCJudW1iZXJcIikge1xuICAgICAgICByZXR1cm4gLTE7XG4gICAgfVxuICAgIHZhciBub3RlID0gMC4wO1xuICAgIG5vdGUgPSA2OSArIE1hdGgubG9nKGYwIC8gNDQwLjApICogMTcuMzEyMzQ7XG4gICAgbm90ZSAqPSAxMDA7XG4gICAgbm90ZSA9IE1hdGgucm91bmQoMC41ICsgbm90ZSk7XG4gICAgcmV0dXJuIG5vdGU7XG59XG4iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy9mdW5jdGlvbnMuZC50c1wiIC8+XG5leHBvcnQgZnVuY3Rpb24geHRyYWN0X25vaXNpbmVzcyhoLCBwKSB7XG4gICAgdmFyIGkgPSAwLjA7XG4gICAgaWYgKHR5cGVvZiBoICE9PSBcIm51bWJlclwiICYmIHR5cGVvZiBwICE9PSBcIm51bWJlclwiKSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICBpID0gcCAtIGg7XG4gICAgcmV0dXJuIGkgLyBwO1xufVxuIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZ3MvZnVuY3Rpb25zLmQudHNcIiAvPlxuaW1wb3J0IHt4dHJhY3RfYXNzZXJ0X2FycmF5fSBmcm9tIFwiLi94dHJhY3RfYXNzZXJ0X2FycmF5XCI7XG5leHBvcnQgZnVuY3Rpb24geHRyYWN0X25vbnplcm9fY291bnQoZGF0YSkge1xuICAgIGlmICgheHRyYWN0X2Fzc2VydF9hcnJheShkYXRhKSlcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgdmFyIGNvdW50ID0gMDtcbiAgICBpZiAoZGF0YS5yZWR1Y2UpIHtcbiAgICAgICAgcmV0dXJuIGRhdGEucmVkdWNlKGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgICBpZiAoYiAhPT0gMCkge1xuICAgICAgICAgICAgICAgIGErKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBhO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZm9yICh2YXIgbiA9IDA7IG4gPCBkYXRhLmxlbmd0aDsgbisrKSB7XG4gICAgICAgIGlmIChkYXRhW25dICE9PSAwKSB7XG4gICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjb3VudDtcbn1cbiIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL2Z1bmN0aW9ucy5kLnRzXCIgLz5cbmltcG9ydCB7eHRyYWN0X2Fzc2VydF9hcnJheX0gZnJvbSBcIi4veHRyYWN0X2Fzc2VydF9hcnJheVwiO1xuXG5leHBvcnQgZnVuY3Rpb24geHRyYWN0X29kZF9ldmVuX3JhdGlvKGhhcm1vbmljU3BlY3RydW0sIGYwKSB7XG4gICAgaWYgKCF4dHJhY3RfYXNzZXJ0X2FycmF5KGhhcm1vbmljU3BlY3RydW0pKVxuICAgICAgICByZXR1cm4gMDtcbiAgICAoZnVuY3Rpb24gKGYwKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZjAgIT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgIHRocm93IChcInNwZWN0cmFsX2luaGFybW9uaWNpdHkgcmVxdWlyZXMgZjAgdG8gYmUgZGVmaW5lZC5cIik7XG4gICAgICAgIH1cbiAgICB9KShmMCk7XG4gICAgdmFyIGggPSAwLFxuICAgICAgICBvZGQgPSAwLjAsXG4gICAgICAgIGV2ZW4gPSAwLjAsXG4gICAgICAgIHRlbXA7XG4gICAgdmFyIE4gPSBoYXJtb25pY1NwZWN0cnVtLmxlbmd0aDtcbiAgICB2YXIgSyA9IE4gPj4gMTtcbiAgICB2YXIgYW1wcyA9IGhhcm1vbmljU3BlY3RydW0uc3ViYXJyYXkoMCwgbik7XG4gICAgdmFyIGZyZXFzID0gaGFybW9uaWNTcGVjdHJ1bS5zdWJhcnJheShuKTtcbiAgICBmb3IgKHZhciBuID0gMDsgbiA8IEs7IG4rKykge1xuICAgICAgICB0ZW1wID0gYW1wc1tuXTtcbiAgICAgICAgaWYgKHRlbXAgIT09IDAuMCkge1xuICAgICAgICAgICAgaCA9IE1hdGguZmxvb3IoZnJlcXNbbl0gLyBmMCArIDAuNSk7XG4gICAgICAgICAgICBpZiAoaCAlIDIgIT09IDApIHtcbiAgICAgICAgICAgICAgICBvZGQgKz0gdGVtcDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZXZlbiArPSB0ZW1wO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG9kZCA9PT0gMC4wIHx8IGV2ZW4gPT09IDAuMCkge1xuICAgICAgICByZXR1cm4gMC4wO1xuICAgIH1cbiAgICByZXR1cm4gb2RkIC8gZXZlbjtcbn1cbiIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL2Z1bmN0aW9ucy5kLnRzXCIgLz5cbmltcG9ydCB7dHJhbnNmb3JtfSBmcm9tIFwiLi4vZnJlZUZGVFwiO1xuaW1wb3J0IHt4dHJhY3RfYXJyYXlfaW50ZXJsYWNlfSBmcm9tIFwiLi94dHJhY3RfYXJyYXlfaW50ZXJsYWNlXCI7XG5pbXBvcnQge3h0cmFjdF9hc3NlcnRfYXJyYXl9IGZyb20gXCIuL3h0cmFjdF9hc3NlcnRfYXJyYXlcIjtcbmltcG9ydCB7eHRyYWN0X2dldF9kYXRhX2ZyYW1lc30gZnJvbSBcIi4veHRyYWN0X2dldF9kYXRhX2ZyYW1lc1wiO1xuXG5mdW5jdGlvbiBhbmdsZShyZWFsLCBpbWFnKSB7XG4gICAgaWYgKGltYWcgPT09IHVuZGVmaW5lZCAmJiByZWFsLmxlbmd0aCA9PT0gMikge1xuICAgICAgICByZXR1cm4gTWF0aC5hdGFuMihyZWFsWzFdLCByZWFsWzBdKTtcbiAgICB9XG4gICAgcmV0dXJuIE1hdGguYXRhbjIoaW1hZywgcmVhbCk7XG59XG5cbmZ1bmN0aW9uIGFicyhyZWFsLCBpbWFnKSB7XG4gICAgaWYgKGltYWcgPT09IHVuZGVmaW5lZCAmJiByZWFsLmxlbmd0aCA9PT0gMikge1xuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KE1hdGgucG93KHJlYWxbMF0sIDIpICsgTWF0aC5wb3cocmVhbFsxXSwgMikpO1xuICAgIH1cbiAgICByZXR1cm4gTWF0aC5zcXJ0KE1hdGgucG93KHJlYWwsIDIpICsgTWF0aC5wb3coaW1hZywgMikpO1xufVxuXG5mdW5jdGlvbiBwcmluY2FyZyhwaGFzZUluKSB7XG4gICAgLy9waGFzZT1tb2QocGhhc2VpbitwaSwtMipwaSkrcGk7XG4gICAgcmV0dXJuIChwaGFzZUluICsgTWF0aC5QSSkgJSAoLTIgKiBNYXRoLlBJKSArIE1hdGguUEk7XG59XG5cbmZ1bmN0aW9uIGNvbXBsZXhfbXVsKGNwbHhfcGFpcl9BLCBjcGx4X3BhaXJfQikge1xuICAgIGlmIChjcGx4X3BhaXJfQS5sZW5ndGggIT09IDIgfHwgY3BseF9wYWlyX0IubGVuZ3RoICE9PSAyKSB7XG4gICAgICAgIHRocm93IChcIkJvdGggYXJndW1lbnRzIG11c3QgYmUgbnVtZXJhbCBhcnJheXMgb2YgbGVuZ3RoIDJcIik7XG4gICAgfVxuICAgIHZhciByZXN1bHQgPSBuZXcgY3BseF9wYWlyX0EuY29uc3RydWN0b3IoMik7XG4gICAgcmVzdWx0WzBdID0gY3BseF9wYWlyX0FbMF0gKiBjcGx4X3BhaXJfQlswXSAtIGNwbHhfcGFpcl9BWzFdICogY3BseF9wYWlyX0JbMV07XG4gICAgcmVzdWx0WzFdID0gY3BseF9wYWlyX0FbMF0gKiBjcGx4X3BhaXJfQlsxXSArIGNwbHhfcGFpcl9BWzFdICogY3BseF9wYWlyX0JbMF07XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gZ2V0X1goZnJhbWVzLCBmcmFtZVNpemUpIHtcbiAgICB2YXIgTiA9IGZyYW1lcy5sZW5ndGg7XG4gICAgdmFyIFggPSBbXTtcbiAgICB2YXIgcmVhbCA9IG5ldyBGbG9hdDY0QXJyYXkoZnJhbWVTaXplKTtcbiAgICB2YXIgaW1hZyA9IG5ldyBGbG9hdDY0QXJyYXkoZnJhbWVTaXplKTtcbiAgICB2YXIgSyA9IGZyYW1lU2l6ZSAvIDIgKyAxO1xuICAgIHZhciBuO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgTjsgaSsrKSB7XG4gICAgICAgIGZvciAobiA9IDA7IG4gPCBmcmFtZVNpemU7IG4rKykge1xuICAgICAgICAgICAgcmVhbFtuXSA9IGZyYW1lc1tpXVtuXTtcbiAgICAgICAgICAgIGltYWdbbl0gPSAwLjA7XG4gICAgICAgIH1cbiAgICAgICAgdHJhbnNmb3JtKHJlYWwsIGltYWcpO1xuICAgICAgICBYW2ldID0geHRyYWN0X2FycmF5X2ludGVybGFjZShbcmVhbC5zdWJhcnJheSgwLCBLKSwgaW1hZy5zdWJhcnJheSgwLCBLKV0pO1xuICAgIH1cbiAgICByZXR1cm4gWDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHh0cmFjdF9vbnNldCh0aW1lRGF0YSwgZnJhbWVTaXplKSB7XG5cbiAgICBpZiAoIXh0cmFjdF9hc3NlcnRfYXJyYXkodGltZURhdGEpKVxuICAgICAgICByZXR1cm4gMDtcbiAgICBpZiAoZnJhbWVTaXplID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhyb3cgKFwiQWxsIGFyZ3VtZW50cyBmb3IgeHRyYWN0X29uc2V0IG11c3QgYmUgZGVmaW5lZDogeHRyYWN0X29uc2V0KHRpbWVEYXRhLCBmcmFtZVNpemUpXCIpO1xuICAgIH1cbiAgICB2YXIgZnJhbWVzID0geHRyYWN0X2dldF9kYXRhX2ZyYW1lcyh0aW1lRGF0YSwgZnJhbWVTaXplLCBmcmFtZVNpemUsIGZhbHNlKTtcbiAgICB2YXIgTiA9IGZyYW1lcy5sZW5ndGg7XG4gICAgdmFyIEsgPSBmcmFtZVNpemUgLyAyICsgMTtcbiAgICB2YXIgWCA9IGdldF9YKGZyYW1lcywgZnJhbWVTaXplKTtcblxuICAgIHZhciBFID0gbmV3IHRpbWVEYXRhLmNvbnN0cnVjdG9yKE4pO1xuICAgIHZhciBuO1xuICAgIGZvciAodmFyIGsgPSAwOyBrIDwgSzsgaysrKSB7XG4gICAgICAgIHZhciBwaGFzZV9wcmV2ID0gYW5nbGUoWFswXS5zdWJhcnJheSgyICogaywgMiAqIGsgKyAyKSk7XG4gICAgICAgIHZhciBwaGFzZV9kZWx0YSA9IGFuZ2xlKFhbMF0uc3ViYXJyYXkoMiAqIGssIDIgKiBrICsgMikpO1xuICAgICAgICBmb3IgKG4gPSAxOyBuIDwgTjsgbisrKSB7XG4gICAgICAgICAgICB2YXIgcGhpID0gcHJpbmNhcmcocGhhc2VfcHJldiArIHBoYXNlX2RlbHRhKTtcbiAgICAgICAgICAgIHZhciBleHAgPSBbTWF0aC5jb3MocGhpKSwgTWF0aC5zaW4ocGhpKV07XG4gICAgICAgICAgICB2YXIgWFQgPSBjb21wbGV4X211bChYW25dLnN1YmFycmF5KDIgKiBrLCAyICogayArIDIpLCBleHApO1xuICAgICAgICAgICAgWFRbMF0gPSBYW25dWzIgKiBrXSAtIFhUWzBdO1xuICAgICAgICAgICAgWFRbMV0gPSBYW25dWzIgKiBrICsgMV0gLSBYVFsxXTtcbiAgICAgICAgICAgIEVbbl0gKz0gYWJzKFhUKTtcbiAgICAgICAgICAgIHZhciBwaGFzZV9ub3cgPSBhbmdsZShYW25dLnN1YmFycmF5KDIgKiBrLCAyICogayArIDIpKTtcbiAgICAgICAgICAgIHBoYXNlX2RlbHRhID0gcGhhc2Vfbm93IC0gcGhhc2VfcHJldjtcbiAgICAgICAgICAgIHBoYXNlX3ByZXYgPSBwaGFzZV9ub3c7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKG4gPSAwOyBuIDwgTjsgbisrKSB7XG4gICAgICAgIEVbbl0gLz0gZnJhbWVTaXplO1xuICAgIH1cbiAgICByZXR1cm4gRTtcbn1cbiIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL2Z1bmN0aW9ucy5kLnRzXCIgLz5cbmltcG9ydCB7eHRyYWN0X2Fzc2VydF9hcnJheX0gZnJvbSBcIi4veHRyYWN0X2Fzc2VydF9hcnJheVwiO1xuaW1wb3J0IHt4dHJhY3RfaW5pdF9wY3B9IGZyb20gXCIuL3h0cmFjdF9pbml0X3BjcFwiO1xuZXhwb3J0IGZ1bmN0aW9uIHh0cmFjdF9wY3Aoc3BlY3RydW0sIE0sIGZzKSB7XG4gICAgaWYgKCF4dHJhY3RfYXNzZXJ0X2FycmF5KHNwZWN0cnVtKSlcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgdmFyIE4gPSBzcGVjdHJ1bS5sZW5ndGggPj4gMTtcbiAgICBpZiAodHlwZW9mIE0gIT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBmcyAhPT0gXCJudW1iZXJcIiB8fCBmcyA8PSAwLjApIHtcbiAgICAgICAgICAgIHRocm93IChcIkNhbm5vdCBkeW5hbWljYWxseSBjb21wdXRlIE0gaWYgZnMgaXMgdW5kZWZpbmVkIC8gbm90IGEgdmFsaWQgc2FtcGxlIHJhdGVcIik7XG4gICAgICAgIH1cbiAgICAgICAgTSA9IHh0cmFjdF9pbml0X3BjcChOLCBmcyk7XG4gICAgfVxuICAgIHZhciBhbXBzID0gc3BlY3RydW0uc3ViYXJyYXkoMSwgTik7XG4gICAgdmFyIFBDUCA9IG5ldyBGbG9hdDY0QXJyYXkoMTIpO1xuICAgIGZvciAodmFyIGwgPSAwOyBsIDwgYW1wcy5sZW5ndGg7IGwrKykge1xuICAgICAgICB2YXIgcCA9IE1bbF07XG4gICAgICAgIFBDUFtsXSArPSBNYXRoLnBvdyhNYXRoLmFicyhhbXBzW2xdKSwgMik7XG4gICAgfVxuICAgIHJldHVybiBQQ1A7XG59XG4iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy9mdW5jdGlvbnMuZC50c1wiIC8+XG5pbXBvcnQge3h0cmFjdF9hc3NlcnRfYXJyYXl9IGZyb20gXCIuL3h0cmFjdF9hc3NlcnRfYXJyYXlcIjtcbmltcG9ydCB7eHRyYWN0X2FycmF5X21heH0gZnJvbSBcIi4veHRyYWN0X2FycmF5X21heFwiO1xuXG5leHBvcnQgZnVuY3Rpb24geHRyYWN0X3BlYWtfc3BlY3RydW0oc3BlY3RydW0sIHEsIHRocmVzaG9sZCkge1xuICAgIGlmICgheHRyYWN0X2Fzc2VydF9hcnJheShzcGVjdHJ1bSkpXG4gICAgICAgIHJldHVybiAwO1xuICAgIHZhciBOID0gc3BlY3RydW0ubGVuZ3RoO1xuICAgIHZhciBLID0gTiA+PiAxO1xuICAgIHZhciBtYXggPSAwLjAsXG4gICAgICAgIHkgPSAwLjAsXG4gICAgICAgIHkyID0gMC4wLFxuICAgICAgICB5MyA9IDAuMCxcbiAgICAgICAgcCA9IDAuMDtcbiAgICBpZiAodHlwZW9mIHEgIT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgdGhyb3cgKFwieHRyYWN0X3BlYWtfc3BlY3RydW0gcmVxdWlyZXMgc2Vjb25kIGFyZ3VtZW50IHRvIGJlIHNhbXBsZV9yYXRlL05cIik7XG4gICAgfVxuICAgIGlmICh0aHJlc2hvbGQgPCAwIHx8IHRocmVzaG9sZCA+IDEwMCkge1xuICAgICAgICB0aHJlc2hvbGQgPSAwO1xuICAgIH1cbiAgICB2YXIgcmVzdWx0ID0gbmV3IEZsb2F0NjRBcnJheShOKTtcbiAgICB2YXIgYW1wc0luID0gc3BlY3RydW0uc3ViYXJyYXkoMCwgSyk7XG4gICAgdmFyIGZyZXFzSW4gPSBzcGVjdHJ1bS5zdWJhcnJheShLKTtcbiAgICB2YXIgYW1wc091dCA9IHJlc3VsdC5zdWJhcnJheSgwLCBLKTtcbiAgICB2YXIgZnJlcXNPdXQgPSByZXN1bHQuc3ViYXJyYXkoSyk7XG4gICAgbWF4ID0geHRyYWN0X2FycmF5X21heChhbXBzSW4pO1xuICAgIHRocmVzaG9sZCAqPSAwLjAxICogbWF4O1xuICAgIGZvciAodmFyIG4gPSAxOyBuIDwgTiAtIDE7IG4rKykge1xuICAgICAgICBpZiAoYW1wc0luW25dID49IHRocmVzaG9sZCkge1xuICAgICAgICAgICAgaWYgKGFtcHNJbltuXSA+IGFtcHNJbltuIC0gMV0gJiYgYW1wc0luW25dID4gYW1wc0luW24gKyAxXSkge1xuICAgICAgICAgICAgICAgIHkgPSBhbXBzSW5bbiAtIDFdO1xuICAgICAgICAgICAgICAgIHkyID0gYW1wc0luW25dO1xuICAgICAgICAgICAgICAgIHkzID0gYW1wc0luW24gKyAxXTtcbiAgICAgICAgICAgICAgICBwID0gMC41ICogKHkgLSB5MykgLyAoYW1wc0luW24gLSAxXSAtIDIgKiAoeTIgKyBhbXBzSW5bbiArIDFdKSk7XG4gICAgICAgICAgICAgICAgZnJlcXNPdXRbbl0gPSBxICogKG4gKyAxICsgcCk7XG4gICAgICAgICAgICAgICAgYW1wc091dFtuXSA9IHkyIC0gMC4yNSAqICh5IC0geTMpICogcDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYW1wc091dFtuXSA9IDA7XG4gICAgICAgICAgICAgICAgZnJlcXNPdXRbbl0gPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYW1wc091dFtuXSA9IDA7XG4gICAgICAgICAgICBmcmVxc091dFtuXSA9IDA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbiIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL2Z1bmN0aW9ucy5kLnRzXCIgLz5cbmV4cG9ydCBmdW5jdGlvbiB4dHJhY3RfcG93ZXIobWFnbml0dWRlQXJyYXkpIHtcbiAgICByZXR1cm4gbnVsbDtcbn1cbiIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL2Z1bmN0aW9ucy5kLnRzXCIgLz5cbmltcG9ydCB7eHRyYWN0X2dldF9kYXRhX2ZyYW1lc30gZnJvbSBcIi4veHRyYWN0X2dldF9kYXRhX2ZyYW1lc1wiO1xuaW1wb3J0IHt4dHJhY3Rfc3BlY3RydW19IGZyb20gXCIuL3h0cmFjdF9zcGVjdHJ1bVwiO1xuZXhwb3J0IGZ1bmN0aW9uIHh0cmFjdF9wcm9jZXNzX2ZyYW1lX2RhdGEoYXJyYXksIGZ1bmMsIHNhbXBsZV9yYXRlLCBmcmFtZV9zaXplLCBob3Bfc2l6ZSwgYXJnX3RoaXMpIHtcbiAgICB2YXIgZnJhbWVzID0geHRyYWN0X2dldF9kYXRhX2ZyYW1lcyhhcnJheSwgZnJhbWVfc2l6ZSwgaG9wX3NpemUpO1xuICAgIHZhciByZXN1bHQgPSB7XG4gICAgICAgIG51bV9mcmFtZXM6IGZyYW1lcy5sZW5ndGgsXG4gICAgICAgIHJlc3VsdHM6IFtdXG4gICAgfTtcbiAgICB2YXIgZnJhbWVfdGltZSA9IDA7XG4gICAgdmFyIGRhdGEgPSB7XG4gICAgICAgIGZyYW1lX3NpemU6IGZyYW1lX3NpemUsXG4gICAgICAgIGhvcF9zaXplOiBob3Bfc2l6ZSxcbiAgICAgICAgc2FtcGxlX3JhdGU6IHNhbXBsZV9yYXRlLFxuICAgICAgICBUaW1lRGF0YTogdW5kZWZpbmVkLFxuICAgICAgICBTcGVjdHJ1bURhdGE6IHVuZGVmaW5lZFxuICAgIH07XG4gICAgdmFyIHByZXZfZGF0YTtcbiAgICB2YXIgcHJldl9yZXN1bHQ7XG4gICAgZm9yICh2YXIgZm4gPSAwOyBmbiA8IGZyYW1lcy5sZW5ndGg7IGZuKyspIHtcbiAgICAgICAgdmFyIGZyYW1lID0gZnJhbWVzW2ZuXTtcbiAgICAgICAgZGF0YS5UaW1lRGF0YSA9IGZyYW1lO1xuICAgICAgICBkYXRhLlNwZWN0cnVtRGF0YSA9IHh0cmFjdF9zcGVjdHJ1bShmcmFtZSwgc2FtcGxlX3JhdGUsIHRydWUsIGZhbHNlKTtcbiAgICAgICAgcHJldl9yZXN1bHQgPSBmdW5jLmNhbGwoYXJnX3RoaXMgfHwgdGhpcywgZGF0YSwgcHJldl9kYXRhLCBwcmV2X3Jlc3VsdCk7XG4gICAgICAgIHZhciBmcmFtZV9yZXN1bHQgPSB7XG4gICAgICAgICAgICB0aW1lX3N0YXJ0OiBmcmFtZV90aW1lLFxuICAgICAgICAgICAgcmVzdWx0OiBwcmV2X3Jlc3VsdFxuICAgICAgICB9O1xuICAgICAgICBmcmFtZV90aW1lICs9IGZyYW1lX3NpemUgLyBzYW1wbGVfcmF0ZTtcbiAgICAgICAgcHJldl9kYXRhID0gZGF0YTtcbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgIGZyYW1lX3NpemU6IGZyYW1lX3NpemUsXG4gICAgICAgICAgICBob3Bfc2l6ZTogaG9wX3NpemUsXG4gICAgICAgICAgICBzYW1wbGVfcmF0ZTogc2FtcGxlX3JhdGUsXG4gICAgICAgICAgICBUaW1lRGF0YTogdW5kZWZpbmVkLFxuICAgICAgICAgICAgU3BlY3RydW1EYXRhOiB1bmRlZmluZWRcbiAgICAgICAgfTtcbiAgICAgICAgcmVzdWx0LnJlc3VsdHMucHVzaChmcmFtZV9yZXN1bHQpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZ3MvZnVuY3Rpb25zLmQudHNcIiAvPlxuaW1wb3J0IHt0cmFuc2Zvcm0sIGludmVyc2VUcmFuc2Zvcm19IGZyb20gXCIuLi9mcmVlRkZUXCI7XG5pbXBvcnQge3h0cmFjdF9nZXRfZGF0YV9mcmFtZXN9IGZyb20gXCIuL3h0cmFjdF9nZXRfZGF0YV9mcmFtZXNcIjtcbmltcG9ydCB7eHRyYWN0X2Fzc2VydF9hcnJheX0gZnJvbSBcIi4veHRyYWN0X2Fzc2VydF9hcnJheVwiO1xuXG5mdW5jdGlvbiBmaWx0ZXIoTiwgYykge1xuICAgIHZhciBjX2IsIFJlLCBJbSwgYjtcbiAgICBjX2IgPSBNYXRoLmZsb29yKGMgKiBOKTtcbiAgICBSZSA9IG5ldyBGbG9hdDY0QXJyYXkoTik7XG4gICAgSW0gPSBuZXcgRmxvYXQ2NEFycmF5KE4pO1xuICAgIHZhciBpLCBqO1xuICAgIGZvciAoaSA9IDA7IGkgPCBjX2I7IGkrKykge1xuICAgICAgICBSZVtpXSA9IDE7XG4gICAgfVxuICAgIGZvciAoaSA9IE4gLSBjX2IgKyAxOyBpIDwgTjsgaSsrKSB7XG4gICAgICAgIFJlW2ldID0gMTtcbiAgICB9XG4gICAgaW52ZXJzZVRyYW5zZm9ybShSZSwgSW0pO1xuICAgIC8vIFNjYWxlIGFuZCBzaGlmdCBpbnRvIEltXG4gICAgZm9yIChpID0gMDsgaSA8IE47IGkrKykge1xuICAgICAgICBqID0gKGkgKyAoTiA+PiAxKSkgJSBOO1xuICAgICAgICBJbVtpXSA9IFJlW2pdIC8gTjtcbiAgICAgICAgLy8gQXBwbHkgY29tcHV0ZSBibGFja21hbi1oYXJyaXMgdG8gSW1cbiAgICAgICAgdmFyIHJhZCA9IChNYXRoLlBJICogaSkgLyAoTik7XG4gICAgICAgIEltW2ldICo9IDAuMzU4NzUgLSAwLjQ4ODI5ICogTWF0aC5jb3MoMiAqIHJhZCkgKyAwLjE0MTI4ICogTWF0aC5jb3MoNCAqIHJhZCkgLSAwLjAxMTY4ICogTWF0aC5jb3MoNiAqIHJhZCk7XG4gICAgfVxuICAgIHJldHVybiBJbTtcbn1cblxuZnVuY3Rpb24gcG9seW4oZGF0YSwgSykge1xuICAgIHZhciBOID0gZGF0YS5sZW5ndGg7XG4gICAgdmFyIHggPSBbMCwgZGF0YVswXSwgZGF0YVsxXV07XG4gICAgdmFyIGRzdCA9IG5ldyBGbG9hdDY0QXJyYXkoSyk7XG4gICAgdmFyIHJhdGlvID0gSyAvIE47XG4gICAgdmFyIHRpbmMgPSAxIC8gcmF0aW87XG4gICAgdmFyIG4gPSAwLFxuICAgICAgICB0ID0gMCxcbiAgICAgICAgaztcbiAgICBmb3IgKGsgPSAwOyBrIDwgSzsgaysrKSB7XG4gICAgICAgIGlmICh0ID09PSBuKSB7XG4gICAgICAgICAgICAvLyBQb2ludHMgbGllIG9uIHNhbWUgdGltZVxuICAgICAgICAgICAgZHN0W2tdID0gZGF0YVtuXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciB5ID0gKHQgLSBuIC0gMSkgKiAodCAtIG4pICogeFswXSAtIDIgKiAodCAtIG4gLSAxKSAqICh0IC0gbiArIDEpICogeFsxXSArICh0IC0gbikgKiAodCAtIG4gKyAxKSAqIHhbMl07XG4gICAgICAgICAgICBkc3Rba10gPSB5IC8gMjtcbiAgICAgICAgfVxuICAgICAgICB0ICs9IHRpbmM7XG4gICAgICAgIGlmICh0ID49IG4gKyAxKSB7XG4gICAgICAgICAgICBuID0gTWF0aC5mbG9vcih0KTtcbiAgICAgICAgICAgIHhbMF0gPSBkYXRhW24gLSAxXTtcbiAgICAgICAgICAgIHhbMV0gPSBkYXRhW25dO1xuICAgICAgICAgICAgaWYgKG4gKyAxIDwgTikge1xuICAgICAgICAgICAgICAgIHhbMl0gPSBkYXRhW24gKyAxXTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgeFsyXSA9IDAuMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZHN0O1xufVxuXG5mdW5jdGlvbiB6cChhKSB7XG4gICAgdmFyIGIgPSBuZXcgRmxvYXQ2NEFycmF5KGEubGVuZ3RoICogMik7XG4gICAgZm9yICh2YXIgbiA9IDA7IG4gPCBhLmxlbmd0aDsgbisrKSB7XG4gICAgICAgIGJbbl0gPSBhW25dO1xuICAgIH1cbiAgICByZXR1cm4gYjtcbn1cblxuZnVuY3Rpb24gcjJjKHgpIHtcbiAgICB2YXIgcmVhbCA9IHpwKHgpO1xuICAgIHZhciBpbWFnID0gbmV3IEZsb2F0NjRBcnJheShyZWFsLmxlbmd0aCk7XG4gICAgdHJhbnNmb3JtKHJlYWwsIGltYWcpO1xuICAgIHJldHVybiB7XG4gICAgICAgIHJlYWw6IHJlYWwsXG4gICAgICAgIGltYWc6IGltYWdcbiAgICB9O1xufVxuXG5mdW5jdGlvbiBXKE4pIHtcbiAgICB2YXIgdyA9IG5ldyBGbG9hdDY0QXJyYXkoTiksXG4gICAgICAgIGk7XG4gICAgZm9yIChpID0gMDsgaSA8IE47IGkrKykge1xuICAgICAgICB2YXIgcmFkID0gKE1hdGguUEkgKiBpKSAvIChOKTtcbiAgICAgICAgd1tpXSA9IDAuMzU4NzUgLSAwLjQ4ODI5ICogTWF0aC5jb3MoMiAqIHJhZCkgKyAwLjE0MTI4ICogTWF0aC5jb3MoNCAqIHJhZCkgLSAwLjAxMTY4ICogTWF0aC5jb3MoNiAqIHJhZCk7XG4gICAgfVxuICAgIHJldHVybiB3O1xufVxuXG5mdW5jdGlvbiBvdmVybGFwKFgsIGIpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBtYXgtc3RhdGVtZW50c1xuICAgIHZhciBpLCBmO1xuICAgIHZhciBZID0gbmV3IEZsb2F0NjRBcnJheShYLmxlbmd0aCk7XG4gICAgdmFyIE4gPSBiLmxlbmd0aDtcbiAgICB2YXIgTjIgPSAyICogTjtcbiAgICB2YXIgQiA9IHIyYyhiKTtcbiAgICB2YXIgWGkgPSB4dHJhY3RfZ2V0X2RhdGFfZnJhbWVzKFgsIE4sIE4sIGZhbHNlKTtcbiAgICB2YXIgWWkgPSB4dHJhY3RfZ2V0X2RhdGFfZnJhbWVzKFksIE4sIE4sIGZhbHNlKTtcbiAgICB2YXIgeF9sYXN0ID0gbmV3IEZsb2F0NjRBcnJheShOKTtcbiAgICB2YXIgeV9sYXN0ID0gbmV3IEZsb2F0NjRBcnJheShOKTtcbiAgICB2YXIgdyA9IFcoTjIpO1xuICAgIHZhciB4RiA9IHtcbiAgICAgICAgcmVhbDogbmV3IEZsb2F0NjRBcnJheShOMiksXG4gICAgICAgIGltYWc6IG5ldyBGbG9hdDY0QXJyYXkoTjIpXG4gICAgfTtcbiAgICB2YXIgeUYgPSB7XG4gICAgICAgIHJlYWw6IG5ldyBGbG9hdDY0QXJyYXkoTjIpLFxuICAgICAgICBpbWFnOiBuZXcgRmxvYXQ2NEFycmF5KE4yKVxuICAgIH07XG4gICAgZm9yIChmID0gMDsgZiA8IFhpLmxlbmd0aDsgZisrKSB7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBOOyBpKyspIHtcbiAgICAgICAgICAgIHhGLnJlYWxbaV0gPSB4X2xhc3RbaV0gKiB3W2ldO1xuICAgICAgICAgICAgeEYucmVhbFtpICsgTl0gPSBYaVtmXVtpXSAqIHdbaSArIE5dO1xuICAgICAgICAgICAgeF9sYXN0W2ldID0gWGlbZl1baV07XG4gICAgICAgICAgICB4Ri5pbWFnW2ldID0gMDtcbiAgICAgICAgICAgIHhGLmltYWdbaSArIE5dID0gMDtcbiAgICAgICAgfVxuICAgICAgICB0cmFuc2Zvcm0oeEYucmVhbCwgeEYuaW1hZyk7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBOMjsgaSsrKSB7XG4gICAgICAgICAgICB5Ri5yZWFsW2ldID0geEYucmVhbFtpXSAqIEIucmVhbFtpXSAtIHhGLmltYWdbaV0gKiBCLmltYWdbaV07XG4gICAgICAgICAgICB5Ri5pbWFnW2ldID0geEYuaW1hZ1tpXSAqIEIucmVhbFtpXSArIHhGLnJlYWxbaV0gKiBCLmltYWdbaV07XG4gICAgICAgIH1cbiAgICAgICAgdHJhbnNmb3JtKHlGLmltYWcsIHlGLnJlYWwpO1xuICAgICAgICAvLyBQZXJmb3JtIGZmdF9zaGlmdCBhbmQgc2NhbGVcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IE47IGkrKykge1xuICAgICAgICAgICAgdmFyIGggPSB5Ri5yZWFsW2kgKyBOXSAvIE47XG4gICAgICAgICAgICB5Ri5yZWFsW2kgKyBOXSA9IHlGLnJlYWxbaV0gLyBOO1xuICAgICAgICAgICAgeUYucmVhbFtpXSA9IGg7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IE47IGkrKykge1xuICAgICAgICAgICAgWWlbZl1baV0gPSAoeUYucmVhbFtpXSArIHlfbGFzdFtpXSk7XG4gICAgICAgICAgICB5X2xhc3RbaV0gPSB5Ri5yZWFsW2kgKyBOXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gWTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHh0cmFjdF9yZXNhbXBsZShkYXRhLCBwLCBxLCBuKSB7XG4gICAgaWYgKCF4dHJhY3RfYXNzZXJ0X2FycmF5KGRhdGEpKVxuICAgICAgICByZXR1cm4gMDtcbiAgICAvLyBTYW1lIGZ1bmN0aW9uIGNhbGwgYXMgbWF0bGFiOlxuICAgIC8vIGRhdGEgaXMgdGhlIGFycmF5XG4gICAgLy8gcCBpcyB0aGUgdGFyZ2V0IHNhbXBsZSByYXRlXG4gICAgLy8gcSBpcyB0aGUgc291cmNlIHNhbXBsZSByYXRlXG4gICAgLy8gbiBpcyB0aGUgZGVzaXJlZCBmaWx0ZXIgb3JkZXIsIG49PTEwMjQgaWYgdW5kZWZpbmVkXG5cbiAgICAvLyBEZXRlcm1pbmUgd2hpY2ggd2F5IHRvIGdvXG4gICAgdmFyIGIsIE4gPSBkYXRhLmxlbmd0aDtcbiAgICBpZiAodHlwZW9mIG4gIT09IFwibnVtYmVyXCIgfHwgbiA8PSAwKSB7XG4gICAgICAgIG4gPSA1MTI7XG4gICAgfVxuICAgIGlmIChwID09PSBxKSB7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cbiAgICB2YXIgcmF0aW8gPSAocCAvIHEpO1xuICAgIHZhciBLID0gTWF0aC5mbG9vcihOICogcmF0aW8pO1xuICAgIHZhciBkc3Q7XG4gICAgaWYgKHAgPiBxKSB7XG4gICAgICAgIC8vIFVwc2FtcGxpbmdcbiAgICAgICAgLy8gMS4gRXhwYW5kIERhdGEgcmFuZ2VcbiAgICAgICAgZHN0ID0gcG9seW4oZGF0YSwgSyk7XG4gICAgICAgIC8vIDIuIEZpbHRlciBvdXQgc3B1cmlvdXMgZW5lcmd5IGFib3ZlIHFcbiAgICAgICAgYiA9IGZpbHRlcihuLCAxIC8gcmF0aW8pO1xuICAgICAgICBvdmVybGFwKGRhdGEsIGIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIERvd25zYW1wbGluZ1xuICAgICAgICAvLyAxLiBGaWx0ZXIgb3V0IGVuZXJneSBhYm92ZSBwXG4gICAgICAgIGIgPSBmaWx0ZXIobiwgcmF0aW8gLyAyKTtcbiAgICAgICAgdmFyIGRzMSA9IG92ZXJsYXAoZGF0YSwgYik7XG4gICAgICAgIC8vIDIuIERlY3JlYXNlIGRhdGEgcmFuZ2VcbiAgICAgICAgZHN0ID0gcG9seW4oZHMxLCBLKTtcbiAgICB9XG4gICAgcmV0dXJuIGRzdDtcbn1cbiIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL2Z1bmN0aW9ucy5kLnRzXCIgLz5cbmltcG9ydCB7eHRyYWN0X2Fzc2VydF9hcnJheX0gZnJvbSBcIi4veHRyYWN0X2Fzc2VydF9hcnJheVwiO1xuXG5leHBvcnQgZnVuY3Rpb24geHRyYWN0X3Jtc19hbXBsaXR1ZGUodGltZUFycmF5KSB7XG4gICAgaWYgKCF4dHJhY3RfYXNzZXJ0X2FycmF5KHRpbWVBcnJheSkpXG4gICAgICAgIHJldHVybiAwO1xuICAgIHZhciByZXN1bHQgPSAwO1xuICAgIGlmICh0aW1lQXJyYXkucmVkdWNlKSB7XG4gICAgICAgIHJlc3VsdCA9IHRpbWVBcnJheS5yZWR1Y2UoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgIHJldHVybiBhICsgYiAqIGI7XG4gICAgICAgIH0sIDApO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGZvciAodmFyIG4gPSAwOyBuIDwgdGltZUFycmF5Lmxlbmd0aDsgbisrKSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gdGltZUFycmF5W25dICogdGltZUFycmF5W25dO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBNYXRoLnNxcnQocmVzdWx0IC8gdGltZUFycmF5Lmxlbmd0aCk7XG59XG4iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy9mdW5jdGlvbnMuZC50c1wiIC8+XG5pbXBvcnQge3h0cmFjdF9hc3NlcnRfYXJyYXl9IGZyb20gXCIuL3h0cmFjdF9hc3NlcnRfYXJyYXlcIjtcbmltcG9ydCB7eHRyYWN0X2FycmF5X3N1bX0gZnJvbSBcIi4veHRyYWN0X2FycmF5X3N1bVwiO1xuXG5leHBvcnQgZnVuY3Rpb24geHRyYWN0X3JvbGxvZmYoc3BlY3RydW0sIHNhbXBsZVJhdGUsIHRocmVzaG9sZCkge1xuICAgIGlmICgheHRyYWN0X2Fzc2VydF9hcnJheShzcGVjdHJ1bSkpXG4gICAgICAgIHJldHVybiAwO1xuICAgIGlmICh0eXBlb2Ygc2FtcGxlUmF0ZSAhPT0gXCJudW1iZXJcIiB8fCB0eXBlb2YgdGhyZXNob2xkICE9PSBcIm51bWJlclwiKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwieHRyYWN0X3JvbGxvZmYgcmVxdWlyZXMgc2FtcGxlUmF0ZSBhbmQgdGhyZXNob2xkIHRvIGJlIGRlZmluZWRcIik7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICB2YXIgTiA9IHNwZWN0cnVtLmxlbmd0aDtcbiAgICB2YXIgSyA9IE4gPj4gMTtcbiAgICB2YXIgYW1wcyA9IHNwZWN0cnVtLnN1YmFycmF5KDAsIEspO1xuXG4gICAgdmFyIHBpdm90ID0gMCxcbiAgICAgICAgdGVtcCA9IDA7XG5cbiAgICBwaXZvdCA9IHh0cmFjdF9hcnJheV9zdW0oYW1wcyk7XG5cbiAgICBwaXZvdCAqPSB0aHJlc2hvbGQgLyAxMDAuMDtcbiAgICB2YXIgbiA9IDA7XG4gICAgd2hpbGUgKHRlbXAgPCBwaXZvdCkge1xuICAgICAgICB0ZW1wICs9IGFtcHNbbl07XG4gICAgICAgIG4rKztcbiAgICB9XG4gICAgcmV0dXJuIG4gKiAoc2FtcGxlUmF0ZSAvIChzcGVjdHJ1bS5sZW5ndGgpKTtcbn1cbiIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL2Z1bmN0aW9ucy5kLnRzXCIgLz5cbmltcG9ydCB7eHRyYWN0X2Fzc2VydF9hcnJheX0gZnJvbSBcIi4veHRyYWN0X2Fzc2VydF9hcnJheVwiO1xuXG5leHBvcnQgZnVuY3Rpb24geHRyYWN0X3NoYXJwbmVzcyhiYXJrQmFuZHNBcnJheSkge1xuICAgIGlmICgheHRyYWN0X2Fzc2VydF9hcnJheShiYXJrQmFuZHNBcnJheSkpXG4gICAgICAgIHJldHVybiAwO1xuICAgIHZhciBOID0gYmFya0JhbmRzQXJyYXkubGVuZ3RoO1xuXG4gICAgdmFyIHJ2LCBzbCA9IDAuMCxcbiAgICAgICAgZyA9IDAuMCxcbiAgICAgICAgdGVtcCA9IDAuMDtcbiAgICBmb3IgKHZhciBuID0gMDsgbiA8IE47IG4rKykge1xuICAgICAgICBzbCA9IE1hdGgucG93KGJhcmtCYW5kc0FycmF5W25dLCAwLjIzKTtcbiAgICAgICAgZyA9IChuIDwgMTUgPyAxLjAgOiAwLjA2NiAqIE1hdGguZXhwKDAuMTcxICogbikpO1xuICAgICAgICB0ZW1wICs9IG4gKiBnICogc2w7XG4gICAgfVxuICAgIHRlbXAgPSAwLjExICogdGVtcCAvIE47XG4gICAgcmV0dXJuIHRlbXA7XG59XG4iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy9mdW5jdGlvbnMuZC50c1wiIC8+XG5pbXBvcnQge3h0cmFjdF9za2V3bmVzc19rdXJ0b3Npc30gZnJvbSBcIi4veHRyYWN0X3NrZXduZXNzX2t1cnRvc2lzXCI7XG5leHBvcnQgZnVuY3Rpb24geHRyYWN0X3NrZXduZXNzKGFycmF5LCBtZWFuLCBzdGFuZGFyZF9kZXZpYXRpb24pIHtcbiAgICByZXR1cm4geHRyYWN0X3NrZXduZXNzX2t1cnRvc2lzKGFycmF5LCBtZWFuLCBzdGFuZGFyZF9kZXZpYXRpb24pWzBdO1xufVxuIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZ3MvZnVuY3Rpb25zLmQudHNcIiAvPlxuaW1wb3J0IHt4dHJhY3RfYXNzZXJ0X2FycmF5fSBmcm9tIFwiLi94dHJhY3RfYXNzZXJ0X2FycmF5XCI7XG5pbXBvcnQge3h0cmFjdF9tZWFufSBmcm9tIFwiLi94dHJhY3RfbWVhblwiO1xuaW1wb3J0IHt4dHJhY3Rfc3RhbmRhcmRfZGV2aWF0aW9ufSBmcm9tIFwiLi94dHJhY3Rfc3RhbmRhcmRfZGV2aWF0aW9uXCI7XG5pbXBvcnQge3h0cmFjdF92YXJpYW5jZX0gZnJvbSBcIi4veHRyYWN0X3ZhcmlhbmNlXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiB4dHJhY3Rfc2tld25lc3Nfa3VydG9zaXMoYXJyYXksIG1lYW4sIHN0YW5kYXJkX2RldmlhdGlvbikge1xuICAgIGlmICgheHRyYWN0X2Fzc2VydF9hcnJheShhcnJheSkpXG4gICAgICAgIHJldHVybiBbMC4wLCAwLjBdO1xuICAgIGlmICh0eXBlb2YgbWVhbiAhPT0gXCJudW1iZXJcIikge1xuICAgICAgICBtZWFuID0geHRyYWN0X21lYW4oYXJyYXkpO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHN0YW5kYXJkX2RldmlhdGlvbiAhPT0gXCJudW1iZXJcIikge1xuICAgICAgICBzdGFuZGFyZF9kZXZpYXRpb24gPSB4dHJhY3Rfc3RhbmRhcmRfZGV2aWF0aW9uKGFycmF5LCB4dHJhY3RfdmFyaWFuY2UoYXJyYXksIG1lYW4pKTtcbiAgICB9XG4gICAgaWYgKHN0YW5kYXJkX2RldmlhdGlvbiA9PT0gMCkge1xuICAgICAgICByZXR1cm4gWzAuMCwgMC4wXTtcbiAgICB9XG4gICAgdmFyIHJlc3VsdCA9IFswLjAsIDAuMF07XG4gICAgZm9yICh2YXIgbiA9IDA7IG4gPCBhcnJheS5sZW5ndGg7IG4rKykge1xuICAgICAgICByZXN1bHRbMF0gKz0gTWF0aC5wb3coKGFycmF5W25dIC0gbWVhbikgLyBzdGFuZGFyZF9kZXZpYXRpb24sIDMpO1xuICAgICAgICByZXN1bHRbMV0gKz0gTWF0aC5wb3coKGFycmF5W25dIC0gbWVhbikgLyBzdGFuZGFyZF9kZXZpYXRpb24sIDQpO1xuICAgIH1cbiAgICByZXN1bHRbMF0gLz0gYXJyYXkubGVuZ3RoO1xuICAgIHJlc3VsdFsxXSAvPSBhcnJheS5sZW5ndGg7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbiIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL2Z1bmN0aW9ucy5kLnRzXCIgLz5cbmltcG9ydCB7eHRyYWN0X2Fzc2VydF9hcnJheX0gZnJvbSBcIi4veHRyYWN0X2Fzc2VydF9hcnJheVwiO1xuXG5leHBvcnQgZnVuY3Rpb24geHRyYWN0X3Ntb290aG5lc3Moc3BlY3RydW0pIHtcbiAgICBpZiAoIXh0cmFjdF9hc3NlcnRfYXJyYXkoc3BlY3RydW0pKVxuICAgICAgICByZXR1cm4gMDtcbiAgICB2YXIgcHJldiA9IDAsXG4gICAgICAgIGN1cnJlbnQgPSAwLFxuICAgICAgICBuZXh0ID0gMCxcbiAgICAgICAgdGVtcCA9IDA7XG4gICAgdmFyIE4gPSBzcGVjdHJ1bS5sZW5ndGg7XG4gICAgdmFyIEsgPSBOID4+IDE7XG4gICAgcHJldiA9IE1hdGgubWF4KDFlLTUsIHNwZWN0cnVtWzBdKTtcbiAgICBjdXJyZW50ID0gTWF0aC5tYXgoMWUtNSwgc3BlY3RydW1bMV0pO1xuICAgIGZvciAodmFyIG4gPSAxOyBuIDwgSyAtIDE7IG4rKykge1xuICAgICAgICBuZXh0ID0gTWF0aC5tYXgoMWUtNSwgc3BlY3RydW1bbiArIDFdKTtcbiAgICAgICAgdGVtcCArPSBNYXRoLmFicygyMC4wICogTWF0aC5sb2coY3VycmVudCkgLSAoMjAuMCAqIE1hdGgubG9nKHByZXYpICsgMjAuMCAqIE1hdGgubG9nKGN1cnJlbnQpICsgMjAuMCAqIE1hdGgubG9nKG5leHQpKSAvIDMuMCk7XG4gICAgICAgIHByZXYgPSBjdXJyZW50O1xuICAgICAgICBjdXJyZW50ID0gbmV4dDtcbiAgICB9XG4gICAgcmV0dXJuIHRlbXA7XG59XG4iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy9mdW5jdGlvbnMuZC50c1wiIC8+XG5pbXBvcnQge3h0cmFjdF9hc3NlcnRfYXJyYXl9IGZyb20gXCIuL3h0cmFjdF9hc3NlcnRfYXJyYXlcIjtcbmltcG9ydCB7eHRyYWN0X2FycmF5X3N1bX0gZnJvbSBcIi4veHRyYWN0X2FycmF5X3N1bVwiO1xuZXhwb3J0IGZ1bmN0aW9uIHh0cmFjdF9zcGVjdHJhbF9jZW50cm9pZChzcGVjdHJ1bSkge1xuICAgIGlmICgheHRyYWN0X2Fzc2VydF9hcnJheShzcGVjdHJ1bSkpXG4gICAgICAgIHJldHVybiAwO1xuICAgIHZhciBOID0gc3BlY3RydW0ubGVuZ3RoO1xuICAgIHZhciBuID0gTiA+PiAxO1xuICAgIHZhciBhbXBzID0gc3BlY3RydW0uc3ViYXJyYXkoMCwgbik7XG4gICAgdmFyIGZyZXFzID0gc3BlY3RydW0uc3ViYXJyYXkobik7XG4gICAgdmFyIEFfZCA9IHh0cmFjdF9hcnJheV9zdW0oYW1wcyk7XG4gICAgaWYgKEFfZCA9PT0gMC4wKSB7XG4gICAgICAgIHJldHVybiAwLjA7XG4gICAgfVxuICAgIHZhciBzdW0gPSAwLjA7XG4gICAgd2hpbGUgKG4tLSkge1xuICAgICAgICBzdW0gKz0gZnJlcXNbbl0gKiAoYW1wc1tuXSAvIEFfZCk7XG4gICAgfVxuICAgIHJldHVybiBzdW07XG59XG4iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy9mdW5jdGlvbnMuZC50c1wiIC8+XG5pbXBvcnQge3h0cmFjdF9hc3NlcnRfYXJyYXl9IGZyb20gXCIuL3h0cmFjdF9hc3NlcnRfYXJyYXlcIjtcbmltcG9ydCB7aW52ZXJzZVRyYW5zZm9ybX0gZnJvbSBcIi4uL2ZyZWVGRlQuanNcIjtcbmZ1bmN0aW9uIHBlYWtfcGlja2luZyhFLCB3aW5kb3cpIHtcbiAgICB2YXIgbyA9IFtdLFxuICAgICAgICBOID0gRS5sZW5ndGgsXG4gICAgICAgIG47XG4gICAgaWYgKHdpbmRvdyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHdpbmRvdyA9IDU7XG4gICAgfVxuICAgIGZvciAobiA9IHdpbmRvdzsgbiA8IE4gLSB3aW5kb3cgLSAxOyBuKyspIHtcbiAgICAgICAgdmFyIG1heCA9IDEsXG4gICAgICAgICAgICBtO1xuICAgICAgICBmb3IgKG0gPSAtd2luZG93OyBtIDwgd2luZG93IC0gMTsgbSsrKSB7XG4gICAgICAgICAgICBpZiAoRVtuICsgbV0gPiBFW25dKSB7XG4gICAgICAgICAgICAgICAgbWF4ID0gMDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAobWF4ID09PSAxKSB7XG4gICAgICAgICAgICBvLnB1c2gobik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG87XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB4dHJhY3Rfc3BlY3RyYWxfZnVuZGFtZW50YWwoc3BlY3RydW0sIHNhbXBsZV9yYXRlKSB7XG4gICAgLy8gQmFzZWQgb24gd29yayBieSBNb3RlZ2kgYW5kIFNoaW1hbXVyYVxuICAgIGlmICgheHRyYWN0X2Fzc2VydF9hcnJheShzcGVjdHJ1bSkpXG4gICAgICAgIHJldHVybiAwO1xuXG4gICAgdmFyIE4gPSBzcGVjdHJ1bS5sZW5ndGggPj4gMTtcbiAgICB2YXIgYW1wcyA9IHNwZWN0cnVtLnN1YmFycmF5KDAsIE4pO1xuICAgIHZhciBmcmVxcyA9IHNwZWN0cnVtLnN1YmFycmF5KE4pO1xuICAgIHZhciBLID0gTiAqIDI7XG5cbiAgICAvLyBDcmVhdGUgdGhlIHBvd2VyIHNwZWN0cnVtXG4gICAgdmFyIHBvd2VyID0gbmV3IEZsb2F0NjRBcnJheShLKTtcbiAgICB2YXIgbjtcbiAgICBmb3IgKG4gPSAwOyBuIDwgTjsgbisrKSB7XG4gICAgICAgIHBvd2VyW25dID0gTWF0aC5wb3coYW1wc1tuXSwgMik7XG4gICAgICAgIHBvd2VyW0sgLSAxIC0gbl0gPSBwb3dlcltuXTtcbiAgICB9XG5cbiAgICAvLyBQZXJmb3JtIGF1dG9jb3JyZWxhdGlvbiB1c2luZyBJRkZUXG4gICAgdmFyIFIgPSBuZXcgRmxvYXQ2NEFycmF5KEspO1xuICAgIGludmVyc2VUcmFuc2Zvcm0ocG93ZXIsIFIpO1xuICAgIFIgPSB1bmRlZmluZWQ7XG4gICAgUiA9IHBvd2VyO1xuICAgIHBvd2VyID0gdW5kZWZpbmVkO1xuXG4gICAgLy8gR2V0IHRoZSBwZWFrc1xuICAgIHZhciBwID0gcGVha19waWNraW5nKFIsIDUpO1xuICAgIGlmIChwLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgcCA9IHBbMF07XG5cbiAgICBwID0gcCAvIHNhbXBsZV9yYXRlO1xuICAgIHAgPSAxIC8gcDtcbiAgICByZXR1cm4gcDtcbn1cbiIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL2Z1bmN0aW9ucy5kLnRzXCIgLz5cbmltcG9ydCB7eHRyYWN0X2Fzc2VydF9hcnJheX0gZnJvbSBcIi4veHRyYWN0X2Fzc2VydF9hcnJheVwiO1xuXG5leHBvcnQgZnVuY3Rpb24geHRyYWN0X3NwZWN0cmFsX2luaGFybW9uaWNpdHkocGVha1NwZWN0cnVtLCBmMCkge1xuICAgIGlmICgheHRyYWN0X2Fzc2VydF9hcnJheShwZWFrU3BlY3RydW0pKVxuICAgICAgICByZXR1cm4gMDtcbiAgICBpZiAodHlwZW9mIGYwICE9PSBcIm51bWJlclwiKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJzcGVjdHJhbF9pbmhhcm1vbmljaXR5IHJlcXVpcmVzIGYwIHRvIGJlIGRlZmluZWQuXCIpO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgdmFyIGggPSAwLFxuICAgICAgICBudW0gPSAwLjAsXG4gICAgICAgIGRlbiA9IDAuMDtcbiAgICB2YXIgTiA9IHBlYWtTcGVjdHJ1bS5sZW5ndGg7XG4gICAgdmFyIEsgPSBOID4+IDE7XG4gICAgdmFyIGFtcHMgPSBwZWFrU3BlY3RydW0uc3ViYXJyYXkoMCwgbik7XG4gICAgdmFyIGZyZXFzID0gcGVha1NwZWN0cnVtLnN1YmFycmF5KG4pO1xuICAgIGZvciAodmFyIG4gPSAwOyBuIDwgSzsgbisrKSB7XG4gICAgICAgIGlmIChhbXBzW25dICE9PSAwLjApIHtcbiAgICAgICAgICAgIGggPSBNYXRoLmZsb29yKGZyZXFzW25dIC8gZjAgKyAwLjUpO1xuICAgICAgICAgICAgdmFyIG1hZ19zcSA9IE1hdGgucG93KGFtcHNbbl0sIDIpO1xuICAgICAgICAgICAgbnVtICs9IE1hdGguYWJzKGZyZXFzW25dIC0gaCAqIGYwKSAqIG1hZ19zcTtcbiAgICAgICAgICAgIGRlbiArPSBtYWdfc3E7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuICgyICogbnVtKSAvIChmMCAqIGRlbik7XG59XG4iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy9mdW5jdGlvbnMuZC50c1wiIC8+XG5pbXBvcnQge3h0cmFjdF9hc3NlcnRfYXJyYXl9IGZyb20gXCIuL3h0cmFjdF9hc3NlcnRfYXJyYXlcIjtcbmltcG9ydCB7eHRyYWN0X3NwZWN0cmFsX2NlbnRyb2lkfSBmcm9tIFwiLi94dHJhY3Rfc3BlY3RyYWxfY2VudHJvaWRcIjtcbmltcG9ydCB7eHRyYWN0X3NwZWN0cmFsX3N0YW5kYXJkX2RldmlhdGlvbn0gZnJvbSBcIi4veHRyYWN0X3NwZWN0cmFsX3N0YW5kYXJkX2RldmlhdGlvblwiO1xuaW1wb3J0IHt4dHJhY3Rfc3BlY3RyYWxfdmFyaWFuY2V9IGZyb20gXCIuL3h0cmFjdF9zcGVjdHJhbF92YXJpYW5jZVwiO1xuaW1wb3J0IHt4dHJhY3RfYXJyYXlfc3VtfSBmcm9tIFwiLi94dHJhY3RfYXJyYXlfc3VtXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiB4dHJhY3Rfc3BlY3RyYWxfa3VydG9zaXMoc3BlY3RydW0sIHNwZWN0cmFsX2NlbnRyb2lkLCBzcGVjdHJhbF9zdGFuZGFyZF9kZXZpYXRpb24pIHtcbiAgICBpZiAoIXh0cmFjdF9hc3NlcnRfYXJyYXkoc3BlY3RydW0pKVxuICAgICAgICByZXR1cm4gMDtcbiAgICBpZiAodHlwZW9mIHNwZWN0cmFsX2NlbnRyb2lkICE9PSBcIm51bWJlclwiKSB7XG4gICAgICAgIHNwZWN0cmFsX2NlbnRyb2lkID0geHRyYWN0X3NwZWN0cmFsX2NlbnRyb2lkKHNwZWN0cnVtKTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBzcGVjdHJhbF9zdGFuZGFyZF9kZXZpYXRpb24gIT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgc3BlY3RyYWxfc3RhbmRhcmRfZGV2aWF0aW9uID0geHRyYWN0X3NwZWN0cmFsX3N0YW5kYXJkX2RldmlhdGlvbihzcGVjdHJ1bSwgeHRyYWN0X3NwZWN0cmFsX3ZhcmlhbmNlKHNwZWN0cnVtLCBzcGVjdHJhbF9jZW50cm9pZCkpO1xuICAgIH1cbiAgICBpZiAoc3BlY3RyYWxfc3RhbmRhcmRfZGV2aWF0aW9uID09PSAwKSB7XG4gICAgICAgIHJldHVybiBJbmZpbml0eTtcbiAgICB9XG4gICAgdmFyIHJlc3VsdCA9IDA7XG4gICAgdmFyIE4gPSBzcGVjdHJ1bS5sZW5ndGg7XG4gICAgdmFyIEsgPSBOID4+IDE7XG4gICAgdmFyIGFtcHMgPSBzcGVjdHJ1bS5zdWJhcnJheSgwLCBLKTtcbiAgICB2YXIgZnJlcXMgPSBzcGVjdHJ1bS5zdWJhcnJheShLKTtcbiAgICB2YXIgQV9kID0geHRyYWN0X2FycmF5X3N1bShhbXBzKTtcbiAgICBmb3IgKHZhciBuID0gMDsgbiA8IEs7IG4rKykge1xuICAgICAgICByZXN1bHQgKz0gTWF0aC5wb3coZnJlcXNbbl0gLSBzcGVjdHJhbF9jZW50cm9pZCwgNCkgKiAoYW1wc1tuXSAvIEFfZCk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQgLyBNYXRoLnBvdyhzcGVjdHJhbF9zdGFuZGFyZF9kZXZpYXRpb24sIDQpO1xufVxuIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZ3MvZnVuY3Rpb25zLmQudHNcIiAvPlxuaW1wb3J0IHt4dHJhY3RfYXNzZXJ0X2FycmF5fSBmcm9tIFwiLi94dHJhY3RfYXNzZXJ0X2FycmF5XCI7XG5pbXBvcnQge3h0cmFjdF9hcnJheV9zdW19IGZyb20gXCIuL3h0cmFjdF9hcnJheV9zdW1cIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHh0cmFjdF9zcGVjdHJhbF9tZWFuKHNwZWN0cnVtKSB7XG4gICAgaWYgKCF4dHJhY3RfYXNzZXJ0X2FycmF5KHNwZWN0cnVtKSlcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgdmFyIE4gPSBzcGVjdHJ1bS5sZW5ndGg7XG4gICAgdmFyIG4gPSBOID4+IDE7XG4gICAgdmFyIGFtcHMgPSBzcGVjdHJ1bS5zdWJhcnJheSgwLCBuKTtcbiAgICB2YXIgc3VtID0geHRyYWN0X2FycmF5X3N1bShhbXBzKTtcbiAgICB2YXIgcmVzdWx0ID0gc3VtIC8gbjtcbiAgICByZXR1cm4gcmVzdWx0O1xufVxuIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZ3MvZnVuY3Rpb25zLmQudHNcIiAvPlxuaW1wb3J0IHt4dHJhY3RfYXNzZXJ0X2FycmF5fSBmcm9tIFwiLi94dHJhY3RfYXNzZXJ0X2FycmF5XCI7XG5pbXBvcnQge3h0cmFjdF9zcGVjdHJhbF9jZW50cm9pZH0gZnJvbSBcIi4veHRyYWN0X3NwZWN0cmFsX2NlbnRyb2lkXCI7XG5pbXBvcnQge3h0cmFjdF9zcGVjdHJhbF9zdGFuZGFyZF9kZXZpYXRpb259IGZyb20gXCIuL3h0cmFjdF9zcGVjdHJhbF9zdGFuZGFyZF9kZXZpYXRpb25cIjtcbmltcG9ydCB7eHRyYWN0X3NwZWN0cmFsX3ZhcmlhbmNlfSBmcm9tIFwiLi94dHJhY3Rfc3BlY3RyYWxfdmFyaWFuY2VcIjtcbmltcG9ydCB7eHRyYWN0X2FycmF5X3N1bX0gZnJvbSBcIi4veHRyYWN0X2FycmF5X3N1bVwiO1xuXG5leHBvcnQgZnVuY3Rpb24geHRyYWN0X3NwZWN0cmFsX3NrZXduZXNzKHNwZWN0cnVtLCBzcGVjdHJhbF9jZW50cm9pZCwgc3BlY3RyYWxfc3RhbmRhcmRfZGV2aWF0aW9uKSB7XG4gICAgaWYgKCF4dHJhY3RfYXNzZXJ0X2FycmF5KHNwZWN0cnVtKSlcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgaWYgKHR5cGVvZiBzcGVjdHJhbF9tZWFuICE9PSBcIm51bWJlclwiKSB7XG4gICAgICAgIHNwZWN0cmFsX2NlbnRyb2lkID0geHRyYWN0X3NwZWN0cmFsX2NlbnRyb2lkKHNwZWN0cnVtKTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBzcGVjdHJhbF9zdGFuZGFyZF9kZXZpYXRpb24gIT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgc3BlY3RyYWxfc3RhbmRhcmRfZGV2aWF0aW9uID0geHRyYWN0X3NwZWN0cmFsX3N0YW5kYXJkX2RldmlhdGlvbihzcGVjdHJ1bSwgeHRyYWN0X3NwZWN0cmFsX3ZhcmlhbmNlKHNwZWN0cnVtLCBzcGVjdHJhbF9jZW50cm9pZCkpO1xuICAgIH1cbiAgICBpZiAoc3BlY3RyYWxfc3RhbmRhcmRfZGV2aWF0aW9uID09PSAwKSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICB2YXIgcmVzdWx0ID0gMDtcbiAgICB2YXIgTiA9IHNwZWN0cnVtLmxlbmd0aDtcbiAgICB2YXIgSyA9IE4gPj4gMTtcbiAgICB2YXIgYW1wcyA9IHNwZWN0cnVtLnN1YmFycmF5KDAsIEspO1xuICAgIHZhciBmcmVxcyA9IHNwZWN0cnVtLnN1YmFycmF5KEspO1xuICAgIHZhciBBX2QgPSB4dHJhY3RfYXJyYXlfc3VtKGFtcHMpO1xuICAgIGZvciAodmFyIG4gPSAwOyBuIDwgSzsgbisrKSB7XG4gICAgICAgIHJlc3VsdCArPSBNYXRoLnBvdyhmcmVxc1tuXSAtIHNwZWN0cmFsX2NlbnRyb2lkLCAzKSAqIChhbXBzW25dIC8gQV9kKTtcbiAgICB9XG4gICAgcmVzdWx0IC89IE1hdGgucG93KHNwZWN0cmFsX3N0YW5kYXJkX2RldmlhdGlvbiwgMyk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbiIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL2Z1bmN0aW9ucy5kLnRzXCIgLz5cbmltcG9ydCB7eHRyYWN0X2Fzc2VydF9hcnJheX0gZnJvbSBcIi4veHRyYWN0X2Fzc2VydF9hcnJheVwiO1xuaW1wb3J0IHt4dHJhY3RfYXJyYXlfc3VtfSBmcm9tIFwiLi94dHJhY3RfYXJyYXlfc3VtXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiB4dHJhY3Rfc3BlY3RyYWxfc2xvcGUoc3BlY3RydW0pIHtcbiAgICBpZiAoIXh0cmFjdF9hc3NlcnRfYXJyYXkoc3BlY3RydW0pKVxuICAgICAgICByZXR1cm4gMDtcbiAgICB2YXIgRiA9IDAuMCxcbiAgICAgICAgRkEgPSAwLjAsXG4gICAgICAgIEEgPSAwLjAsXG4gICAgICAgIEZYVFJBQ1RfU1EgPSAwLjA7XG4gICAgdmFyIE4gPSBzcGVjdHJ1bS5sZW5ndGg7XG4gICAgdmFyIE0gPSBOID4+IDE7XG4gICAgdmFyIGFtcHMgPSBzcGVjdHJ1bS5zdWJhcnJheSgwLCBNKTtcbiAgICB2YXIgZnJlcXMgPSBzcGVjdHJ1bS5zdWJhcnJheShNKTtcbiAgICBGID0geHRyYWN0X2FycmF5X3N1bShmcmVxcyk7XG4gICAgQSA9IHh0cmFjdF9hcnJheV9zdW0oYW1wcyk7XG4gICAgZm9yICh2YXIgbiA9IDA7IG4gPCBNOyBuKyspIHtcbiAgICAgICAgRkEgKz0gZnJlcXNbbl0gKiBhbXBzW25dO1xuICAgICAgICBGWFRSQUNUX1NRICs9IGZyZXFzW25dICogZnJlcXNbbl07XG4gICAgfVxuICAgIHJldHVybiAoMS4wIC8gQSkgKiAoTSAqIEZBIC0gRiAqIEEpIC8gKE0gKiBGWFRSQUNUX1NRIC0gRiAqIEYpO1xufVxuIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZ3MvZnVuY3Rpb25zLmQudHNcIiAvPlxuaW1wb3J0IHt4dHJhY3Rfc3BlY3RyYWxfdmFyaWFuY2V9IGZyb20gXCIuL3h0cmFjdF9zcGVjdHJhbF92YXJpYW5jZVwiO1xuZXhwb3J0IGZ1bmN0aW9uIHh0cmFjdF9zcGVjdHJhbF9zcHJlYWQoc3BlY3RydW0sIHNwZWN0cmFsX2NlbnRyb2lkKSB7XG4gICAgcmV0dXJuIHh0cmFjdF9zcGVjdHJhbF92YXJpYW5jZShzcGVjdHJ1bSwgc3BlY3RyYWxfY2VudHJvaWQpO1xufVxuIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZ3MvZnVuY3Rpb25zLmQudHNcIiAvPlxuaW1wb3J0IHt4dHJhY3RfYXNzZXJ0X2FycmF5fSBmcm9tIFwiLi94dHJhY3RfYXNzZXJ0X2FycmF5XCI7XG5pbXBvcnQge3h0cmFjdF9zcGVjdHJhbF92YXJpYW5jZX0gZnJvbSBcIi4veHRyYWN0X3NwZWN0cmFsX3ZhcmlhbmNlXCI7XG5leHBvcnQgZnVuY3Rpb24geHRyYWN0X3NwZWN0cmFsX3N0YW5kYXJkX2RldmlhdGlvbihzcGVjdHJ1bSwgc3BlY3RyYWxfdmFyaWFuY2UpIHtcbiAgICBpZiAoIXh0cmFjdF9hc3NlcnRfYXJyYXkoc3BlY3RydW0pKVxuICAgICAgICByZXR1cm4gMDtcbiAgICBpZiAodHlwZW9mIHNwZWN0cmFsX3ZhcmlhbmNlICE9PSBcIm51bWJlclwiKSB7XG4gICAgICAgIHNwZWN0cmFsX3ZhcmlhbmNlID0geHRyYWN0X3NwZWN0cmFsX3ZhcmlhbmNlKHNwZWN0cnVtKTtcbiAgICB9XG4gICAgcmV0dXJuIE1hdGguc3FydChzcGVjdHJhbF92YXJpYW5jZSk7XG59XG4iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy9mdW5jdGlvbnMuZC50c1wiIC8+XG5pbXBvcnQge3h0cmFjdF9hc3NlcnRfYXJyYXl9IGZyb20gXCIuL3h0cmFjdF9hc3NlcnRfYXJyYXlcIjtcbmltcG9ydCB7eHRyYWN0X3NwZWN0cmFsX2NlbnRyb2lkfSBmcm9tIFwiLi94dHJhY3Rfc3BlY3RyYWxfY2VudHJvaWRcIjtcbmltcG9ydCB7eHRyYWN0X2FycmF5X3N1bX0gZnJvbSBcIi4veHRyYWN0X2FycmF5X3N1bVwiO1xuZXhwb3J0IGZ1bmN0aW9uIHh0cmFjdF9zcGVjdHJhbF92YXJpYW5jZShzcGVjdHJ1bSwgc3BlY3RyYWxfY2VudHJvaWQpIHtcbiAgICBpZiAoIXh0cmFjdF9hc3NlcnRfYXJyYXkoc3BlY3RydW0pKVxuICAgICAgICByZXR1cm4gMDtcbiAgICBpZiAodHlwZW9mIHNwZWN0cmFsX2NlbnRyb2lkICE9PSBcIm51bWJlclwiKSB7XG4gICAgICAgIHNwZWN0cmFsX2NlbnRyb2lkID0geHRyYWN0X3NwZWN0cmFsX2NlbnRyb2lkKHNwZWN0cnVtKTtcbiAgICB9XG4gICAgdmFyIEEgPSAwLFxuICAgICAgICByZXN1bHQgPSAwO1xuICAgIHZhciBOID0gc3BlY3RydW0ubGVuZ3RoO1xuICAgIHZhciBuID0gTiA+PiAxO1xuICAgIHZhciBhbXBzID0gc3BlY3RydW0uc3ViYXJyYXkoMCwgbik7XG4gICAgdmFyIGZyZXFzID0gc3BlY3RydW0uc3ViYXJyYXkobiwgTik7XG4gICAgdmFyIEFfZCA9IHh0cmFjdF9hcnJheV9zdW0oYW1wcyk7XG4gICAgd2hpbGUgKG4tLSkge1xuICAgICAgICByZXN1bHQgKz0gTWF0aC5wb3coZnJlcXNbbl0gLSBzcGVjdHJhbF9jZW50cm9pZCwgMikgKiAoYW1wc1tuXSAvIEFfZCk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG4iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy9mdW5jdGlvbnMuZC50c1wiIC8+XG5pbXBvcnQge3h0cmFjdF9hc3NlcnRfYXJyYXl9IGZyb20gXCIuL3h0cmFjdF9hc3NlcnRfYXJyYXlcIjtcbmltcG9ydCB7eHRyYWN0X2FycmF5X25vcm1hbGlzZX0gZnJvbSBcIi4veHRyYWN0X2FycmF5X25vcm1hbGlzZVwiO1xuaW1wb3J0IHt0cmFuc2Zvcm19IGZyb20gXCIuLi9mcmVlRkZUXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiB4dHJhY3Rfc3BlY3RydW0oYXJyYXksIHNhbXBsZV9yYXRlLCB3aXRoREMsIG5vcm1hbGlzZSkge1xuICAgIChmdW5jdGlvbiAoYXJyYXksIHNhbXBsZV9yYXRlKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2FtcGxlX3JhdGUgIT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgIHRocm93IChcIlNhbXBsZSBSYXRlIG11c3QgYmUgZGVmaW5lZFwiKTtcbiAgICAgICAgfVxuICAgIH0pKGFycmF5LCBzYW1wbGVfcmF0ZSk7XG4gICAgaWYgKCF4dHJhY3RfYXNzZXJ0X2FycmF5KGFycmF5KSkge1xuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgd2l0aERDID0gKHdpdGhEQyA9PT0gdHJ1ZSk7XG4gICAgbm9ybWFsaXNlID0gKG5vcm1hbGlzZSA9PT0gdHJ1ZSk7XG5cbiAgICB2YXIgTiA9IGFycmF5Lmxlbmd0aDtcbiAgICB2YXIgcmVzdWx0LCBhbGlnbiA9IDA7XG4gICAgdmFyIGFtcHM7XG4gICAgdmFyIGZyZXFzO1xuICAgIGlmICh3aXRoREMpIHtcbiAgICAgICAgcmVzdWx0ID0gbmV3IEZsb2F0NjRBcnJheShOICsgMik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgYWxpZ24gPSAxO1xuICAgICAgICByZXN1bHQgPSBuZXcgRmxvYXQ2NEFycmF5KE4pO1xuICAgIH1cbiAgICBhbXBzID0gcmVzdWx0LnN1YmFycmF5KDAsIHJlc3VsdC5sZW5ndGggLyAyKTtcbiAgICBmcmVxcyA9IHJlc3VsdC5zdWJhcnJheShyZXN1bHQubGVuZ3RoIC8gMik7XG4gICAgdmFyIHJlYWxzID0gbmV3IEZsb2F0NjRBcnJheShOKTtcbiAgICB2YXIgaW1hZ3MgPSBuZXcgRmxvYXQ2NEFycmF5KE4pO1xuICAgIGFycmF5LmZvckVhY2goZnVuY3Rpb24gKHYsIGkpIHtcbiAgICAgICAgcmVhbHNbaV0gPSB2O1xuICAgIH0pO1xuICAgIHRyYW5zZm9ybShyZWFscywgaW1hZ3MpO1xuICAgIGZvciAodmFyIGsgPSBhbGlnbjsgayA8PSByZXN1bHQubGVuZ3RoIC8gMjsgaysrKSB7XG4gICAgICAgIGFtcHNbayAtIGFsaWduXSA9IE1hdGguc3FydCgocmVhbHNba10gKiByZWFsc1trXSkgKyAoaW1hZ3Nba10gKiBpbWFnc1trXSkpIC8gYXJyYXkubGVuZ3RoO1xuICAgICAgICBmcmVxc1trIC0gYWxpZ25dID0gKDIgKiBrIC8gTikgKiAoc2FtcGxlX3JhdGUgLyAyKTtcbiAgICB9XG4gICAgaWYgKG5vcm1hbGlzZSkge1xuICAgICAgICBhbXBzID0geHRyYWN0X2FycmF5X25vcm1hbGlzZShhbXBzKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbiIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL2Z1bmN0aW9ucy5kLnRzXCIgLz5cbmltcG9ydCB7eHRyYWN0X2Fzc2VydF9hcnJheX0gZnJvbSBcIi4veHRyYWN0X2Fzc2VydF9hcnJheVwiO1xuaW1wb3J0IHt4dHJhY3RfdmFyaWFuY2V9IGZyb20gXCIuL3h0cmFjdF92YXJpYW5jZVwiO1xuZXhwb3J0IGZ1bmN0aW9uIHh0cmFjdF9zdGFuZGFyZF9kZXZpYXRpb24oYXJyYXksIHZhcmlhbmNlKSB7XG4gICAgaWYgKCF4dHJhY3RfYXNzZXJ0X2FycmF5KGFycmF5KSlcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgaWYgKHR5cGVvZiB2YXJpYW5jZSAhPT0gXCJudW1iZXJcIikge1xuICAgICAgICB2YXJpYW5jZSA9IHh0cmFjdF92YXJpYW5jZShhcnJheSk7XG4gICAgfVxuICAgIHJldHVybiBNYXRoLnNxcnQodmFyaWFuY2UpO1xufVxuIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZ3MvZnVuY3Rpb25zLmQudHNcIiAvPlxuaW1wb3J0IHt4dHJhY3RfYXNzZXJ0X2FycmF5fSBmcm9tIFwiLi94dHJhY3RfYXNzZXJ0X2FycmF5XCI7XG5pbXBvcnQge3h0cmFjdF9hcnJheV9zdW19IGZyb20gXCIuL3h0cmFjdF9hcnJheV9zdW1cIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHh0cmFjdF9zdW0oZGF0YSkge1xuICAgIGlmICgheHRyYWN0X2Fzc2VydF9hcnJheShkYXRhKSlcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgcmV0dXJuIHh0cmFjdF9hcnJheV9zdW0oZGF0YSk7XG59XG4iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy9mdW5jdGlvbnMuZC50c1wiIC8+XG5pbXBvcnQge3h0cmFjdF9hcnJheV9zdW19IGZyb20gXCIuL3h0cmFjdF9hcnJheV9zdW1cIjtcbmV4cG9ydCBmdW5jdGlvbiB4dHJhY3RfdGVtcG9yYWxfY2VudHJvaWQoZW5lcmd5QXJyYXksIHNhbXBsZV9yYXRlLCB3aW5kb3dfbXMpIHtcbiAgICBpZiAodHlwZW9mIHNhbXBsZV9yYXRlICE9PSBcIm51bWJlclwiKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJ4dHJhY3RfdGVtcG9yYWxfY2VudHJvaWQgcmVxdWlyZXMgc2FtcGxlX3JhdGUgdG8gYmUgYSBudW1iZXJcIik7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiB3aW5kb3dfbXMgIT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJ4dHJhY3RfdGVtcG9yYWxfY2VudHJvaWQgYXNzdW1pbmcgd2luZG93X21zID0gMTAwbXNcIik7XG4gICAgICAgIHdpbmRvd19tcyA9IDEwMC4wO1xuICAgIH1cbiAgICBpZiAod2luZG93X21zIDw9IDApIHtcbiAgICAgICAgd2luZG93X21zID0gMTAwLjA7XG4gICAgfVxuICAgIHZhciB0cyA9IDEuMCAvIHNhbXBsZV9yYXRlO1xuICAgIHZhciBMID0gc2FtcGxlX3JhdGUgKiAod2luZG93X21zIC8gMTAwMC4wKTtcbiAgICB2YXIgZGVuID0geHRyYWN0X2FycmF5X3N1bShlbmVyZ3lBcnJheSk7XG4gICAgdmFyIG51bSA9IDAuMDtcbiAgICBmb3IgKHZhciBuID0gMDsgbiA8IGVuZXJneUFycmF5Lmxlbmd0aDsgbisrKSB7XG4gICAgICAgIG51bSArPSBlbmVyZ3lBcnJheVtuXSAqIChuICogTCAqIHRzKTtcbiAgICB9XG4gICAgdmFyIHJlc3VsdCA9IG51bSAvIGRlbjtcbiAgICByZXR1cm4gcmVzdWx0O1xufVxuIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZ3MvZnVuY3Rpb25zLmQudHNcIiAvPlxuaW1wb3J0IHt4dHJhY3RfYXNzZXJ0X2FycmF5fSBmcm9tIFwiLi94dHJhY3RfYXNzZXJ0X2FycmF5XCI7XG5pbXBvcnQge3h0cmFjdF9mbGF0bmVzc19kYn0gZnJvbSBcIi4veHRyYWN0X2ZsYXRuZXNzX2RiXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiB4dHJhY3RfdG9uYWxpdHkoc3BlY3RydW0sIGZsYXRuZXNzX2RiKSB7XG4gICAgaWYgKCF4dHJhY3RfYXNzZXJ0X2FycmF5KHNwZWN0cnVtKSlcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgaWYgKHR5cGVvZiBmbGF0bmVzc19kYiAhPT0gXCJudW1iZXJcIikge1xuICAgICAgICBmbGF0bmVzc19kYiA9IHh0cmFjdF9mbGF0bmVzc19kYihzcGVjdHJ1bSk7XG4gICAgfVxuICAgIHJldHVybiBNYXRoLm1pbihmbGF0bmVzc19kYiAvIC02MC4wLCAxKTtcbn1cbiIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL2Z1bmN0aW9ucy5kLnRzXCIgLz5cbmltcG9ydCB7eHRyYWN0X2Fzc2VydF9hcnJheX0gZnJvbSBcIi4veHRyYWN0X2Fzc2VydF9hcnJheVwiO1xuZXhwb3J0IGZ1bmN0aW9uIHh0cmFjdF90cmlzdGltdWx1cyhzcGVjdHJ1bSwgZjApIHtcbiAgICB2YXIgdHJpc3QgPSBbMC4wLCAwLjAsIDAuMF07XG4gICAgaWYgKCF4dHJhY3RfYXNzZXJ0X2FycmF5KHNwZWN0cnVtKSlcbiAgICAgICAgcmV0dXJuIHRyaXN0O1xuICAgIGlmICh0eXBlb2YgZjAgIT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgdGhyb3cgKFwieHRyYWN0X3RyaXN0aW11bHVzIHJlcXVpcmVzIGYwIHRvIGJlIGRlZmluZWQgYW5kIGEgbnVtYmVyXCIpO1xuICAgIH1cbiAgICB2YXIgaCA9IDAsXG4gICAgICAgIGRlbiA9IDAuMCxcbiAgICAgICAgcCA9IFswLCAwLCAwLCAwLCAwXSxcbiAgICAgICAgdGVtcCA9IDAuMCxcbiAgICAgICAgbnVtID0gMC4wO1xuICAgIHZhciBOID0gc3BlY3RydW0ubGVuZ3RoO1xuICAgIHZhciBLID0gTiA+PiAxO1xuICAgIHZhciBhbXBzID0gc3BlY3RydW0uc3ViYXJyYXkoMCwgSyk7XG4gICAgdmFyIGZyZXFzID0gc3BlY3RydW0uc3ViYXJyYXkoSyk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IEs7IGkrKykge1xuICAgICAgICB0ZW1wID0gYW1wc1tpXTtcbiAgICAgICAgaWYgKHRlbXAgIT09IDApIHtcbiAgICAgICAgICAgIGRlbiArPSB0ZW1wO1xuICAgICAgICAgICAgaCA9IE1hdGguZmxvb3IoZnJlcXNbaV0gLyBmMCArIDAuNSk7XG4gICAgICAgICAgICBwW2ggLSAxXSArPSB0ZW1wO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGRlbiAhPT0gMC4wKSB7XG4gICAgICAgIHRyaXN0WzBdID0gcFswXSAvIGRlbjtcbiAgICAgICAgdHJpc3RbMV0gPSAocFsxXSArIHBbMl0gKyBwWzNdKSAvIGRlbjtcbiAgICAgICAgdHJpc3RbMl0gPSBwWzRdIC8gZGVuO1xuICAgIH1cbiAgICByZXR1cm4gdHJpc3Q7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB4dHJhY3RfdHJpc3RpbXVsdXNfMShzcGVjdHJ1bSwgZjApIHtcbiAgICByZXR1cm4geHRyYWN0X3RyaXN0aW11bHVzKHNwZWN0cnVtLCBmMClbMF07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB4dHJhY3RfdHJpc3RpbXVsdXNfMihzcGVjdHJ1bSwgZjApIHtcbiAgICByZXR1cm4geHRyYWN0X3RyaXN0aW11bHVzKHNwZWN0cnVtLCBmMClbMV07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB4dHJhY3RfdHJpc3RpbXVsdXNfMyhzcGVjdHJ1bSwgZjApIHtcbiAgICByZXR1cm4geHRyYWN0X3RyaXN0aW11bHVzKHNwZWN0cnVtLCBmMClbMl07XG59XG4iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy9mdW5jdGlvbnMuZC50c1wiIC8+XG5pbXBvcnQge3h0cmFjdF9hc3NlcnRfYXJyYXl9IGZyb20gXCIuL3h0cmFjdF9hc3NlcnRfYXJyYXlcIjtcbmltcG9ydCB7eHRyYWN0X21lYW59IGZyb20gXCIuL3h0cmFjdF9tZWFuXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiB4dHJhY3RfdmFyaWFuY2UoYXJyYXksIG1lYW4pIHtcbiAgICBpZiAoIXh0cmFjdF9hc3NlcnRfYXJyYXkoYXJyYXkpKVxuICAgICAgICByZXR1cm4gMDtcbiAgICBpZiAodHlwZW9mIG1lYW4gIT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgbWVhbiA9IHh0cmFjdF9tZWFuKGFycmF5KTtcbiAgICB9XG4gICAgaWYgKCF4dHJhY3RfYXNzZXJ0X2FycmF5KGFycmF5KSlcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgaWYgKHR5cGVvZiBtZWFuICE9PSBcIm51bWJlclwiKSB7XG4gICAgICAgIG1lYW4gPSB4dHJhY3RfbWVhbihhcnJheSk7XG4gICAgfVxuICAgIHZhciByZXN1bHQgPSAwLjA7XG4gICAgaWYgKGFycmF5LnJlZHVjZSkge1xuICAgICAgICByZXN1bHQgPSBhcnJheS5yZWR1Y2UoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgIGEgKz0gTWF0aC5wb3coYiAtIG1lYW4sIDIpO1xuICAgICAgICAgICAgcmV0dXJuIGE7XG4gICAgICAgIH0sIDApO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGZvciAodmFyIG4gPSAwOyBuIDwgYXJyYXkubGVuZ3RoOyBuKyspIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSBNYXRoLnBvdyhhcnJheVtuXSAtIG1lYW4sIDIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlc3VsdCAvPSAoYXJyYXkubGVuZ3RoIC0gMSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbiIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL2Z1bmN0aW9ucy5kLnRzXCIgLz5cbmltcG9ydCB7eHRyYWN0X2Fzc2VydF9hcnJheX0gZnJvbSBcIi4veHRyYWN0X2Fzc2VydF9hcnJheVwiO1xuaW1wb3J0IHt4dHJhY3RfYXJyYXlfc3VtfSBmcm9tIFwiLi94dHJhY3RfYXJyYXlfc3VtXCI7XG5pbXBvcnQge3h0cmFjdF9tZWFufSBmcm9tIFwiLi94dHJhY3RfbWVhblwiO1xuXG5leHBvcnQgZnVuY3Rpb24geHRyYWN0X3dhdmVsZXRfZjAodGltZUFycmF5LCBzYW1wbGVSYXRlLCBwaXRjaHRyYWNrZXIpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBtYXgtc3RhdGVtZW50c1xuICAgIGlmICgheHRyYWN0X2Fzc2VydF9hcnJheSh0aW1lQXJyYXkpKVxuICAgICAgICByZXR1cm4gMDtcbiAgICBpZiAocGl0Y2h0cmFja2VyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhyb3cgKFwieHRyYWN0X3dhdmVsZXRfZjAgcmVxdWlyZXMgcGl0Y2h0cmFja2VyIHRvIGJlIGRlZmluZWRcIik7XG4gICAgfVxuICAgIGlmICh4dHJhY3RfYXJyYXlfc3VtKHRpbWVBcnJheSkgPT09IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9wb3dlcjJwKHZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbHVlID09PSAyKSB7XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsdWUgJiAweDEpIHtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoX3Bvd2VyMnAodmFsdWUgPj4gMSkpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9iaXRjb3VudCh2YWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUgPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbHVlID09PSAyKSB7XG4gICAgICAgICAgICByZXR1cm4gMjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX2JpdGNvdW50KHZhbHVlID4+IDEpICsgMTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfY2VpbF9wb3dlcjIodmFsdWUpIHtcbiAgICAgICAgaWYgKF9wb3dlcjJwKHZhbHVlKSkge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZhbHVlID09PSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gMjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaiwgaSA9IF9iaXRjb3VudCh2YWx1ZSk7XG4gICAgICAgIHZhciByZXMgPSAxO1xuICAgICAgICBmb3IgKGogPSAwOyBqIDwgaTsgaisrKSB7XG4gICAgICAgICAgICByZXMgPDw9IDE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfZmxvb3JfcG93ZXIyKHZhbHVlKSB7XG4gICAgICAgIGlmIChfcG93ZXIycCh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX2NlaWxfcG93ZXIyKHZhbHVlKSAvIDI7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX2lhYnMoeCkge1xuICAgICAgICBpZiAoeCA+PSAwKSByZXR1cm4geDtcbiAgICAgICAgcmV0dXJuIC14O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIF8ycG93ZXIoaSkge1xuICAgICAgICB2YXIgcmVzID0gMSxcbiAgICAgICAgICAgIGo7XG4gICAgICAgIGZvciAoaiA9IDA7IGogPCBpOyBqKyspIHtcbiAgICAgICAgICAgIHJlcyA8PD0gMTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGR5d2FwaXRjaF9uZWVkZWRzYW1wbGVjb3VudChtaW5GcmVxKSB7XG4gICAgICAgIHZhciBuYlNhbSA9IDMgKiA0NDEwMCAvIG1pbkZyZXE7IC8vIDEwMTcuIGZvciAxMzAgSHpcbiAgICAgICAgbmJTYW0gPSBfY2VpbF9wb3dlcjIobmJTYW0pOyAvLyAxMDI0XG4gICAgICAgIHJldHVybiBuYlNhbTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBib2R5TG9vcCgpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBtYXgtc3RhdGVtZW50c1xuICAgICAgICBkZWx0YSA9IE1hdGguZmxvb3IoNDQxMDAgLyAoXzJwb3dlcihjdXJMZXZlbCkgKiAzMDAwKSk7XG4gICAgICAgIGlmIChjdXJTYW1OYiA8IDIpIHtcbiAgICAgICAgICAgIGNvbnQgPSBmYWxzZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZHYsIHByZXZpb3VzRFYgPSAtMTAwMDtcbiAgICAgICAgdmFyIG5iTWlucyA9IDAsXG4gICAgICAgICAgICBuYk1heHMgPSAwO1xuICAgICAgICB2YXIgbGFzdE1pbkluZGV4ID0gLTEwMDAwMDA7XG4gICAgICAgIHZhciBsYXN0bWF4SW5kZXggPSAtMTAwMDAwMDtcbiAgICAgICAgdmFyIGZpbmRNYXggPSAwO1xuICAgICAgICB2YXIgZmluZE1pbiA9IDA7XG4gICAgICAgIChmdW5jdGlvbiAoKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgY29tcGxleGl0eVxuICAgICAgICAgICAgZm9yIChpID0gMjsgaSA8IGN1clNhbU5iOyBpKyspIHtcbiAgICAgICAgICAgICAgICBzaSA9IHNhbVtpXSAtIHRoZURDO1xuICAgICAgICAgICAgICAgIHNpMSA9IHNhbVtpIC0gMV0gLSB0aGVEQztcblxuICAgICAgICAgICAgICAgIGlmIChzaTEgPD0gMCAmJiBzaSA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZmluZE1heCA9IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzaTEgPj0gMCAmJiBzaSA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZmluZE1pbiA9IDE7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gbWluIG9yIG1heCA/XG4gICAgICAgICAgICAgICAgZHYgPSBzaSAtIHNpMTtcblxuICAgICAgICAgICAgICAgIGlmIChwcmV2aW91c0RWID4gLTEwMDApIHtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoZmluZE1pbiAmJiBwcmV2aW91c0RWIDwgMCAmJiBkdiA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBtaW5pbXVtXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoTWF0aC5hYnMoc2kpID49IGFtcGx0aXR1ZGVUaHJlc2hvbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaSA+IGxhc3RNaW5JbmRleCArIGRlbHRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbnNbbmJNaW5zKytdID0gaTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFzdE1pbkluZGV4ID0gaTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmluZE1pbiA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGZpbmRNYXggJiYgcHJldmlvdXNEViA+IDAgJiYgZHYgPD0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbWF4aW11bVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKE1hdGguYWJzKHNpKSA+PSBhbXBsdGl0dWRlVGhyZXNob2xkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGkgPiBsYXN0bWF4SW5kZXggKyBkZWx0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhzW25iTWF4cysrXSA9IGk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RtYXhJbmRleCA9IGk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbmRNYXggPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHByZXZpb3VzRFYgPSBkdjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkoKTtcblxuICAgICAgICBpZiAobmJNaW5zID09PSAwICYmIG5iTWF4cyA9PT0gMCkge1xuICAgICAgICAgICAgY29udCA9IGZhbHNlO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGQ7XG4gICAgICAgIC8vbWVtc2V0KGRpc3RhbmNlcywgMCwgc2FtcGxlY291bnQqc2l6ZW9mKGludCkpO1xuICAgICAgICB2YXIgZGlzdGFuY2VzID0gbmV3IEludDMyQXJyYXkoc2FtcGxlY291bnQpO1xuICAgICAgICAoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IG5iTWluczsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZm9yIChqID0gMTsgaiA8IDM7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaSArIGogPCBuYk1pbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGQgPSBfaWFicyhtaW5zW2ldIC0gbWluc1tpICsgal0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzdGFuY2VzW2RdID0gZGlzdGFuY2VzW2RdICsgMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBuYk1heHM7IGkrKykge1xuICAgICAgICAgICAgICAgIGZvciAoaiA9IDE7IGogPCAzOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGkgKyBqIDwgbmJNYXhzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkID0gX2lhYnMobWF4c1tpXSAtIG1heHNbaSArIGpdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vYXNMb2coXCJkeXdhcGl0Y2ggaT0lbGQgaj0lbGQgZD0lbGRcXG5cIiwgaSwgaiwgZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXN0YW5jZXNbZF0gPSBkaXN0YW5jZXNbZF0gKyAxO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KSgpO1xuXG4gICAgICAgIHZhciBiZXN0RGlzdGFuY2UgPSAtMTtcbiAgICAgICAgdmFyIGJlc3RWYWx1ZSA9IC0xO1xuICAgICAgICAoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGN1clNhbU5iOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgc3VtbWVkID0gMDtcbiAgICAgICAgICAgICAgICBmb3IgKGogPSAtZGVsdGE7IGogPD0gZGVsdGE7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaSArIGogPj0gMCAmJiBpICsgaiA8IGN1clNhbU5iKVxuICAgICAgICAgICAgICAgICAgICAgICAgc3VtbWVkICs9IGRpc3RhbmNlc1tpICsgal07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vYXNMb2coXCJkeXdhcGl0Y2ggaT0lbGQgc3VtbWVkPSVsZCBiZXN0RGlzdGFuY2U9JWxkXFxuXCIsIGksIHN1bW1lZCwgYmVzdERpc3RhbmNlKTtcbiAgICAgICAgICAgICAgICBpZiAoc3VtbWVkID09PSBiZXN0VmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGkgPT09IDIgKiBiZXN0RGlzdGFuY2UpXG4gICAgICAgICAgICAgICAgICAgICAgICBiZXN0RGlzdGFuY2UgPSBpO1xuXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzdW1tZWQgPiBiZXN0VmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgYmVzdFZhbHVlID0gc3VtbWVkO1xuICAgICAgICAgICAgICAgICAgICBiZXN0RGlzdGFuY2UgPSBpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkoKTtcbiAgICAgICAgdmFyIGRpc3RBdmcgPSAwLjA7XG4gICAgICAgIHZhciBuYkRpc3RzID0gMDtcbiAgICAgICAgKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGZvciAoaiA9IC1kZWx0YTsgaiA8PSBkZWx0YTsgaisrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGJlc3REaXN0YW5jZSArIGogPj0gMCAmJiBiZXN0RGlzdGFuY2UgKyBqIDwgc2FtcGxlY291bnQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5iRGlzdCA9IGRpc3RhbmNlc1tiZXN0RGlzdGFuY2UgKyBqXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5iRGlzdCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5iRGlzdHMgKz0gbmJEaXN0O1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzdEF2ZyArPSAoYmVzdERpc3RhbmNlICsgaikgKiBuYkRpc3Q7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKCk7XG4gICAgICAgIC8vIHRoaXMgaXMgb3VyIG1vZGUgZGlzdGFuY2UgIVxuICAgICAgICBkaXN0QXZnIC89IG5iRGlzdHM7XG5cbiAgICAgICAgLy8gY29udGludWUgdGhlIGxldmVscyA/XG4gICAgICAgIGlmIChjdXJNb2RlRGlzdGFuY2UgPiAtMS4wKSB7XG4gICAgICAgICAgICB2YXIgc2ltaWxhcml0eSA9IE1hdGguYWJzKGRpc3RBdmcgKiAyIC0gY3VyTW9kZURpc3RhbmNlKTtcbiAgICAgICAgICAgIGlmIChzaW1pbGFyaXR5IDw9IDIgKiBkZWx0YSkge1xuICAgICAgICAgICAgICAgIC8vaWYgREVCVUdHIHRoZW4gcHV0IFwic2ltaWxhcml0eT1cIiZzaW1pbGFyaXR5JiZcImRlbHRhPVwiJmRlbHRhJiZcIm9rXCJcbiAgICAgICAgICAgICAgICAvL2FzTG9nKFwiZHl3YXBpdGNoIHNpbWlsYXJpdHk9JWYgT0sgIVxcblwiLCBzaW1pbGFyaXR5KTtcbiAgICAgICAgICAgICAgICAvLyB0d28gY29uc2VjdXRpdmUgc2ltaWxhciBtb2RlIGRpc3RhbmNlcyA6IG9rICFcbiAgICAgICAgICAgICAgICBwaXRjaEYgPSA0NDEwMCAvIChfMnBvd2VyKGN1ckxldmVsIC0gMSkgKiBjdXJNb2RlRGlzdGFuY2UpO1xuICAgICAgICAgICAgICAgIGNvbnQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL2lmIERFQlVHRyB0aGVuIHB1dCBcInNpbWlsYXJpdHk9XCImc2ltaWxhcml0eSYmXCJkZWx0YT1cIiZkZWx0YSYmXCJub3RcIlxuICAgICAgICB9XG5cbiAgICAgICAgLy8gbm90IHNpbWlsYXIsIGNvbnRpbnVlIG5leHQgbGV2ZWxcbiAgICAgICAgY3VyTW9kZURpc3RhbmNlID0gZGlzdEF2ZztcblxuICAgICAgICBjdXJMZXZlbCA9IGN1ckxldmVsICsgMTtcbiAgICAgICAgaWYgKGN1ckxldmVsID49IDYpIHtcbiAgICAgICAgICAgIC8vIHB1dCBcIm1heCBsZXZlbHMgcmVhY2hlZCwgZXhpdGluZ1wiXG4gICAgICAgICAgICAvL2FzTG9nKFwiZHl3YXBpdGNoIG1heCBsZXZlbHMgcmVhY2hlZCwgZXhpdGluZ1xcblwiKTtcbiAgICAgICAgICAgIGNvbnQgPSBmYWxzZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGRvd25zYW1wbGVcbiAgICAgICAgaWYgKGN1clNhbU5iIDwgMikge1xuICAgICAgICAgICAgLy9hc0xvZyhcImR5d2FwaXRjaCBub3QgZW5vdWdoIHNhbXBsZXMsIGV4aXRpbmdcXG5cIik7XG4gICAgICAgICAgICBjb250ID0gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBjdXJTYW1OYiAvIDI7IGkrKykge1xuICAgICAgICAgICAgICAgIHNhbVtpXSA9IChzYW1bMiAqIGldICsgc2FtWzIgKiBpICsgMV0pIC8gMi4wO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KSgpO1xuICAgICAgICBjdXJTYW1OYiAvPSAyO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9keXdhcGl0Y2hfZHluYW1pY3Byb2Nlc3MocGl0Y2h0cmFja2VyLCBwaXRjaCkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGNvbXBsZXhpdHlcbiAgICAgICAgaWYgKHBpdGNoID09PSAwLjApIHtcbiAgICAgICAgICAgIHJldHVybiAtMS4wO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGVzdGltYXRlZFBpdGNoID0gLTEsXG4gICAgICAgICAgICBhY2NlcHRlZEVycm9yID0gMC4yLFxuICAgICAgICAgICAgbWF4Q29uZmlkZW5jZSA9IDU7XG4gICAgICAgIGlmIChwaXRjaCAhPT0gLTEpIHtcbiAgICAgICAgICAgIC8vIEkgaGF2ZSBhIHBpdGNoIGhlcmVcblxuICAgICAgICAgICAgaWYgKHBpdGNodHJhY2tlci5fcHJldlBpdGNoID09PSAtMSkge1xuICAgICAgICAgICAgICAgIC8vIG5vIFByZXZpb3VzXG4gICAgICAgICAgICAgICAgZXN0aW1hdGVkUGl0Y2ggPSBwaXRjaDtcbiAgICAgICAgICAgICAgICBwaXRjaHRyYWNrZXIuX3ByZXZQaXRjaCA9IHBpdGNoO1xuICAgICAgICAgICAgICAgIHBpdGNodHJhY2tlci5fcGl0Y2hDb25maWRlbmNlID0gMTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoTWF0aC5hYnMocGl0Y2h0cmFja2VyLl9wcmV2UGl0Y2ggLSBwaXRjaCkgLyBwaXRjaCA8IGFjY2VwdGVkRXJyb3IpIHtcbiAgICAgICAgICAgICAgICAvLyBzaW1pbGFyOiByZW1lbWJlciBhbmQgaW5jcmVtZW50XG4gICAgICAgICAgICAgICAgcGl0Y2h0cmFja2VyLl9wcmV2UGl0Y2ggPSBwaXRjaDtcbiAgICAgICAgICAgICAgICBlc3RpbWF0ZWRQaXRjaCA9IHBpdGNoO1xuICAgICAgICAgICAgICAgIHBpdGNodHJhY2tlci5fcGl0Y2hDb25maWRlbmNlID0gTWF0aC5taW4obWF4Q29uZmlkZW5jZSwgcGl0Y2h0cmFja2VyLl9waXRjaENvbmZpZGVuY2UgKyAxKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoKHBpdGNodHJhY2tlci5fcGl0Y2hDb25maWRlbmNlID49IG1heENvbmZpZGVuY2UgLSAyKSAmJiBNYXRoLmFicyhwaXRjaHRyYWNrZXIuX3BpdGNoQ29uZmlkZW5jZSAtIDIgKiBwaXRjaCkgLyAoMiAqIHBpdGNoKSA8IGFjY2VwdGVkRXJyb3IpIHtcbiAgICAgICAgICAgICAgICAvLyBjbG9zZSB0byBoYWxmIHRoZSBsYXN0IHBpdGNoLCB3aGljaCBpcyB0cnVzdGVkXG4gICAgICAgICAgICAgICAgZXN0aW1hdGVkUGl0Y2ggPSAyICogcGl0Y2g7XG4gICAgICAgICAgICAgICAgcGl0Y2h0cmFja2VyLl9wcmV2UGl0Y2ggPSBlc3RpbWF0ZWRQaXRjaDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoKHBpdGNodHJhY2tlci5fcGl0Y2hDb25maWRlbmNlID49IG1heENvbmZpZGVuY2UgLSAyKSAmJiBNYXRoLmFicyhwaXRjaHRyYWNrZXIuX3BpdGNoQ29uZmlkZW5jZSAtIDAuNSAqIHBpdGNoKSAvICgwLjUgKiBwaXRjaCkgPCBhY2NlcHRlZEVycm9yKSB7XG4gICAgICAgICAgICAgICAgZXN0aW1hdGVkUGl0Y2ggPSAwLjUgKiBwaXRjaDtcbiAgICAgICAgICAgICAgICBwaXRjaHRyYWNrZXIuX3ByZXZQaXRjaCA9IGVzdGltYXRlZFBpdGNoO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBWZXJ5IGRpZmZlcmVudCB2YWx1ZVxuICAgICAgICAgICAgICAgIGlmIChwaXRjaHRyYWNrZXIuX3BpdGNoQ29uZmlkZW5jZSA+PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHByZXZpb3VzIHRydXN0ZWRcbiAgICAgICAgICAgICAgICAgICAgZXN0aW1hdGVkUGl0Y2ggPSBwaXRjaHRyYWNrZXIuX3ByZXZQaXRjaDtcbiAgICAgICAgICAgICAgICAgICAgcGl0Y2h0cmFja2VyLl9waXRjaENvbmZpZGVuY2UgPSBNYXRoLm1heCgwLCBwaXRjaHRyYWNrZXIuX3BpdGNoQ29uZmlkZW5jZSAtIDEpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGVzdGltYXRlZFBpdGNoID0gcGl0Y2g7XG4gICAgICAgICAgICAgICAgICAgIHBpdGNodHJhY2tlci5fcHJldlBpdGNoID0gcGl0Y2g7XG4gICAgICAgICAgICAgICAgICAgIHBpdGNodHJhY2tlci5fcGl0Y2hDb25maWRlbmNlID0gMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBObyBwaXRjaFxuICAgICAgICAgICAgaWYgKHBpdGNodHJhY2tlci5fcHJldlBpdGNoICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIC8vIHdhcyBhIHBpdGNoIGJlZm9yZVxuICAgICAgICAgICAgICAgIGlmIChwaXRjaHRyYWNrZXIuX3BpdGNoQ29uZmlkZW5jZSA+PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHByZXZpb3VzIHRydXN0ZWRcbiAgICAgICAgICAgICAgICAgICAgZXN0aW1hdGVkUGl0Y2ggPSBwaXRjaHRyYWNrZXIuX3ByZXZQaXRjaDtcbiAgICAgICAgICAgICAgICAgICAgcGl0Y2h0cmFja2VyLl9waXRjaENvbmZpZGVuY2UgPSBNYXRoLm1heCgwLCBwaXRjaHRyYWNrZXIuX3BpdGNoQ29uZmlkZW5jZSAtIDEpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHBpdGNodHJhY2tlci5fcHJldlBpdGNoID0gLTE7XG4gICAgICAgICAgICAgICAgICAgIGVzdGltYXRlZFBpdGNoID0gLTE7XG4gICAgICAgICAgICAgICAgICAgIHBpdGNodHJhY2tlci5fcGl0Y2hDb25maWRlbmNlID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGl0Y2h0cmFja2VyLl9waXRjaENvbmZpZGVuY2UgPj0gMSkge1xuICAgICAgICAgICAgcGl0Y2ggPSBlc3RpbWF0ZWRQaXRjaDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBpdGNoID0gLTE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBpdGNoID09PSAtMSkge1xuICAgICAgICAgICAgcGl0Y2ggPSAwLjA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBpdGNoO1xuICAgIH1cblxuICAgIHZhciBfbWlubWF4ID0ge1xuICAgICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgICBuZXh0OiB1bmRlZmluZWRcbiAgICB9O1xuICAgIC8vX2R5d2FwaXRjaF9jb21wdXRlV2F2ZWxldFBpdGNoKHNhbXBsZXMsIHN0YXJ0c2FtcGxlLCBzYW1wbGVjb3VudClcbiAgICB2YXIgc2FtcGxlcyA9IHRpbWVBcnJheSxcbiAgICAgICAgc3RhcnRzYW1wbGUgPSAwLFxuICAgICAgICBzYW1wbGVjb3VudCA9IHRpbWVBcnJheS5sZW5ndGg7XG4gICAgdmFyIHBpdGNoRiA9IDAuMDtcbiAgICB2YXIgaSwgaiwgc2ksIHNpMTtcblxuICAgIHNhbXBsZWNvdW50ID0gX2Zsb29yX3Bvd2VyMihzYW1wbGVjb3VudCk7XG4gICAgdmFyIHNhbSA9IG5ldyBGbG9hdDY0QXJyYXkoc2FtcGxlY291bnQpO1xuICAgIGZvciAoaSA9IDA7IGkgPCBzYW1wbGVjb3VudDsgaSsrKSB7XG4gICAgICAgIHNhbVtpXSA9IHNhbXBsZXNbaV07XG4gICAgfVxuXG4gICAgdmFyIGN1clNhbU5iID0gc2FtcGxlY291bnQ7XG5cbiAgICB2YXIgbWlucyA9IG5ldyBJbnQzMkFycmF5KHNhbXBsZWNvdW50KTtcbiAgICB2YXIgbWF4cyA9IG5ldyBJbnQzMkFycmF5KHNhbXBsZWNvdW50KTtcblxuICAgIC8vdmFyIG1heEZMV1RsZXZlbHMgPSA2O1xuICAgIC8vdmFyIG1heEYgPSAzMDAwO1xuICAgIC8vdmFyIGRpZmZlcmVuY2VMZXZlbHNOID0gMztcbiAgICAvL3ZhciBtYXhpbWFUaHJlc2hvbGRSYXRpbyA9IDAuNzU7XG4gICAgdmFyIHRoZURDID0gZ2V0VGhlREMoc2FtLCBzYW1wbGVjb3VudCk7XG5cbiAgICBmdW5jdGlvbiBnZXRUaGVEQyhzYW0sIHNhbXBsZWNvdW50KSB7XG4gICAgICAgIHJldHVybiB4dHJhY3RfbWVhbihzYW0uc3ViYXJyYXkoc2FtcGxlY291bnQpKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRhbXBsaXR1ZGVNYXgoc2FtLCBzYW1wbGVjb3VudCkge1xuICAgICAgICB2YXIgc2ksIGk7XG4gICAgICAgIHZhciBtaW5WYWx1ZSA9IDAuMCxcbiAgICAgICAgICAgIG1heFZhbHVlID0gMC4wO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgc2FtcGxlY291bnQ7IGkrKykge1xuICAgICAgICAgICAgc2kgPSBzYW1baV07XG4gICAgICAgICAgICBpZiAoc2kgPiBtYXhWYWx1ZSkge1xuICAgICAgICAgICAgICAgIG1heFZhbHVlID0gc2k7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc2kgPCBtaW5WYWx1ZSkge1xuICAgICAgICAgICAgICAgIG1pblZhbHVlID0gc2k7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbWF4VmFsdWUgPSBtYXhWYWx1ZSAtIHRoZURDO1xuICAgICAgICBtaW5WYWx1ZSA9IG1pblZhbHVlIC0gdGhlREM7XG4gICAgICAgIHJldHVybiAobWF4VmFsdWUgPiAtbWluVmFsdWUgPyBtYXhWYWx1ZSA6IC1taW5WYWx1ZSk7XG4gICAgfVxuICAgIHZhciBhbXBsdGl0dWRlVGhyZXNob2xkID0gZ2V0YW1wbGl0dWRlTWF4KHNhbSwgc2FtcGxlY291bnQpICogMC43NTtcblxuICAgIHZhciBjdXJMZXZlbCA9IDA7XG4gICAgdmFyIGN1ck1vZGVEaXN0YW5jZSA9IC0xO1xuICAgIHZhciBkZWx0YTtcblxuICAgIHZhciBjb250ID0gdHJ1ZTtcblxuICAgIHdoaWxlIChjb250KSB7XG4gICAgICAgIGJvZHlMb29wKCk7XG4gICAgfVxuXG4gICAgLy9fZHl3YXBpdGNoX2R5bmFtaWNwcm9jZXNzKHBpdGNodHJhY2tlciwgcGl0Y2gpXG4gICAgcmV0dXJuIF9keXdhcGl0Y2hfZHluYW1pY3Byb2Nlc3MocGl0Y2h0cmFja2VyLCBwaXRjaEYpO1xufVxuIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZ3MvZnVuY3Rpb25zLmQudHNcIiAvPlxuaW1wb3J0IHt4dHJhY3RfYXNzZXJ0X2FycmF5fSBmcm9tIFwiLi94dHJhY3RfYXNzZXJ0X2FycmF5XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiB4dHJhY3RfeWluKGFycmF5KSB7XG4gICAgLy8gVXNlcyB0aGUgWUlOIHByb2Nlc3NcbiAgICBpZiAoIXh0cmFjdF9hc3NlcnRfYXJyYXkoYXJyYXkpKVxuICAgICAgICByZXR1cm4gMDtcbiAgICB2YXIgVCA9IGFycmF5Lmxlbmd0aDtcbiAgICB2YXIgZCA9IG5ldyBGbG9hdDY0QXJyYXkoYXJyYXkubGVuZ3RoKTtcbiAgICB2YXIgciA9IG5ldyBhcnJheS5jb25zdHJ1Y3RvcihhcnJheS5sZW5ndGgpO1xuXG4gICAgdmFyIGRfc2lnbWEgPSAwO1xuICAgIGZvciAodmFyIHRhdSA9IDE7IHRhdSA8IFQ7IHRhdSsrKSB7XG4gICAgICAgIHZhciBzaWdtYSA9IDA7XG4gICAgICAgIGZvciAodmFyIHQgPSAxOyB0IDwgVCAtIHRhdTsgdCsrKSB7XG4gICAgICAgICAgICBzaWdtYSArPSBNYXRoLnBvdyhhcnJheVt0XSAtIGFycmF5W3QgKyB0YXVdLCAyKTtcbiAgICAgICAgfVxuICAgICAgICBkW3RhdV0gPSBzaWdtYTtcbiAgICAgICAgZF9zaWdtYSArPSBzaWdtYTtcbiAgICAgICAgclt0YXVdID0gZFt0YXVdIC8gKCgxIC8gdGF1KSAqIGRfc2lnbWEpO1xuICAgIH1cbiAgICByZXR1cm4gcjtcbn1cbiIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL2Z1bmN0aW9ucy5kLnRzXCIgLz5cbmltcG9ydCB7eHRyYWN0X2Fzc2VydF9hcnJheX0gZnJvbSBcIi4veHRyYWN0X2Fzc2VydF9hcnJheVwiO1xuZXhwb3J0IGZ1bmN0aW9uIHh0cmFjdF96Y3IodGltZUFycmF5KSB7XG4gICAgaWYgKCF4dHJhY3RfYXNzZXJ0X2FycmF5KHRpbWVBcnJheSkpXG4gICAgICAgIHJldHVybiAwO1xuICAgIHZhciByZXN1bHQgPSAwO1xuICAgIGZvciAodmFyIG4gPSAxOyBuIDwgdGltZUFycmF5Lmxlbmd0aDsgbisrKSB7XG4gICAgICAgIGlmICh0aW1lQXJyYXlbbl0gKiB0aW1lQXJyYXlbbiAtIDFdIDwgMCkge1xuICAgICAgICAgICAgcmVzdWx0Kys7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdCAvIHRpbWVBcnJheS5sZW5ndGg7XG59XG4iLCJpbXBvcnQge1xuICAgIHh0cmFjdF9pc19kZW5vcm1hbFxufSBmcm9tIFwiLi9mdW5jdGlvbnMveHRyYWN0X2lzX2Rlbm9ybWFsXCI7XG5pbXBvcnQge1xuICAgIHh0cmFjdF9hc3NlcnRfYXJyYXlcbn0gZnJvbSBcIi4vZnVuY3Rpb25zL3h0cmFjdF9hc3NlcnRfYXJyYXlcIjtcbmltcG9ydCB7XG4gICAgeHRyYWN0X2Fzc2VydF9wb3NpdGl2ZV9pbnRlZ2VyXG59IGZyb20gXCIuL2Z1bmN0aW9ucy94dHJhY3RfYXNzZXJ0X3Bvc2l0aXZlX2ludGVnZXJcIjtcbmltcG9ydCB7XG4gICAgeHRyYWN0X2FycmF5X3N1bVxufSBmcm9tIFwiLi9mdW5jdGlvbnMveHRyYWN0X2FycmF5X3N1bVwiO1xuaW1wb3J0IHtcbiAgICB4dHJhY3RfYXJyYXlfY29weVxufSBmcm9tIFwiLi9mdW5jdGlvbnMveHRyYWN0X2FycmF5X2NvcHlcIjtcbmltcG9ydCB7XG4gICAgeHRyYWN0X2FycmF5X21pblxufSBmcm9tIFwiLi9mdW5jdGlvbnMveHRyYWN0X2FycmF5X21pblwiO1xuaW1wb3J0IHtcbiAgICB4dHJhY3RfYXJyYXlfbWF4XG59IGZyb20gXCIuL2Z1bmN0aW9ucy94dHJhY3RfYXJyYXlfbWF4XCI7XG5pbXBvcnQge1xuICAgIHh0cmFjdF9hcnJheV9zY2FsZVxufSBmcm9tIFwiLi9mdW5jdGlvbnMveHRyYWN0X2FycmF5X3NjYWxlXCI7XG5pbXBvcnQge1xuICAgIHh0cmFjdF9hcnJheV9ub3JtYWxpc2Vcbn0gZnJvbSBcIi4vZnVuY3Rpb25zL3h0cmFjdF9hcnJheV9ub3JtYWxpc2VcIjtcbmltcG9ydCB7XG4gICAgeHRyYWN0X2FycmF5X2JvdW5kXG59IGZyb20gXCIuL2Z1bmN0aW9ucy94dHJhY3RfYXJyYXlfYm91bmRcIjtcbmltcG9ydCB7XG4gICAgeHRyYWN0X2FycmF5X2ludGVybGFjZVxufSBmcm9tIFwiLi9mdW5jdGlvbnMveHRyYWN0X2FycmF5X2ludGVybGFjZVwiO1xuaW1wb3J0IHtcbiAgICB4dHJhY3RfYXJyYXlfZGVpbnRlcmxhY2Vcbn0gZnJvbSBcIi4vZnVuY3Rpb25zL3h0cmFjdF9hcnJheV9kZWludGVybGFjZVwiO1xuaW1wb3J0IHtcbiAgICB4dHJhY3RfZ2V0X251bWJlcl9vZl9mcmFtZXNcbn0gZnJvbSBcIi4vZnVuY3Rpb25zL3h0cmFjdF9nZXRfbnVtYmVyX29mX2ZyYW1lc1wiO1xuaW1wb3J0IHtcbiAgICB4dHJhY3RfZ2V0X2RhdGFfZnJhbWVzXG59IGZyb20gXCIuL2Z1bmN0aW9ucy94dHJhY3RfZ2V0X2RhdGFfZnJhbWVzXCI7XG5pbXBvcnQge1xuICAgIHh0cmFjdF9wcm9jZXNzX2ZyYW1lX2RhdGFcbn0gZnJvbSBcIi4vZnVuY3Rpb25zL3h0cmFjdF9wcm9jZXNzX2ZyYW1lX2RhdGFcIjtcbmltcG9ydCB7XG4gICAgeHRyYWN0X2FycmF5X3RvX0pTT05cbn0gZnJvbSBcIi4vZnVuY3Rpb25zL3h0cmFjdF9hcnJheV90b19KU09OXCI7XG5pbXBvcnQge1xuICAgIHh0cmFjdF9mcmFtZV9mcm9tX2FycmF5XG59IGZyb20gXCIuL2Z1bmN0aW9ucy94dHJhY3RfZnJhbWVfZnJvbV9hcnJheVwiO1xuaW1wb3J0IHtcbiAgICB4dHJhY3RfbWVhblxufSBmcm9tIFwiLi9mdW5jdGlvbnMveHRyYWN0X21lYW5cIjtcbmltcG9ydCB7XG4gICAgeHRyYWN0X3RlbXBvcmFsX2NlbnRyb2lkXG59IGZyb20gXCIuL2Z1bmN0aW9ucy94dHJhY3RfdGVtcG9yYWxfY2VudHJvaWRcIjtcbmltcG9ydCB7XG4gICAgeHRyYWN0X3ZhcmlhbmNlXG59IGZyb20gXCIuL2Z1bmN0aW9ucy94dHJhY3RfdmFyaWFuY2VcIjtcbmltcG9ydCB7XG4gICAgeHRyYWN0X3N0YW5kYXJkX2RldmlhdGlvblxufSBmcm9tIFwiLi9mdW5jdGlvbnMveHRyYWN0X3N0YW5kYXJkX2RldmlhdGlvblwiO1xuaW1wb3J0IHtcbiAgICB4dHJhY3RfYXZlcmFnZV9kZXZpYXRpb25cbn0gZnJvbSBcIi4vZnVuY3Rpb25zL3h0cmFjdF9hdmVyYWdlX2RldmlhdGlvblwiO1xuaW1wb3J0IHtcbiAgICB4dHJhY3Rfc2tld25lc3Nfa3VydG9zaXNcbn0gZnJvbSBcIi4vZnVuY3Rpb25zL3h0cmFjdF9za2V3bmVzc19rdXJ0b3Npc1wiO1xuaW1wb3J0IHtcbiAgICB4dHJhY3Rfc2tld25lc3Ncbn0gZnJvbSBcIi4vZnVuY3Rpb25zL3h0cmFjdF9za2V3bmVzc1wiO1xuaW1wb3J0IHtcbiAgICB4dHJhY3Rfa3VydG9zaXNcbn0gZnJvbSBcIi4vZnVuY3Rpb25zL3h0cmFjdF9rdXJ0b3Npc1wiO1xuaW1wb3J0IHtcbiAgICB4dHJhY3Rfc3BlY3RyYWxfY2VudHJvaWRcbn0gZnJvbSBcIi4vZnVuY3Rpb25zL3h0cmFjdF9zcGVjdHJhbF9jZW50cm9pZFwiO1xuaW1wb3J0IHtcbiAgICB4dHJhY3Rfc3BlY3RyYWxfbWVhblxufSBmcm9tIFwiLi9mdW5jdGlvbnMveHRyYWN0X3NwZWN0cmFsX21lYW5cIjtcbmltcG9ydCB7XG4gICAgeHRyYWN0X3NwZWN0cmFsX3ZhcmlhbmNlXG59IGZyb20gXCIuL2Z1bmN0aW9ucy94dHJhY3Rfc3BlY3RyYWxfdmFyaWFuY2VcIjtcbmltcG9ydCB7XG4gICAgeHRyYWN0X3NwZWN0cmFsX3NwcmVhZFxufSBmcm9tIFwiLi9mdW5jdGlvbnMveHRyYWN0X3NwZWN0cmFsX3NwcmVhZFwiO1xuaW1wb3J0IHtcbiAgICB4dHJhY3Rfc3BlY3RyYWxfc3RhbmRhcmRfZGV2aWF0aW9uXG59IGZyb20gXCIuL2Z1bmN0aW9ucy94dHJhY3Rfc3BlY3RyYWxfc3RhbmRhcmRfZGV2aWF0aW9uXCI7XG5pbXBvcnQge1xuICAgIHh0cmFjdF9zcGVjdHJhbF9za2V3bmVzc1xufSBmcm9tIFwiLi9mdW5jdGlvbnMveHRyYWN0X3NwZWN0cmFsX3NrZXduZXNzXCI7XG5pbXBvcnQge1xuICAgIHh0cmFjdF9zcGVjdHJhbF9rdXJ0b3Npc1xufSBmcm9tIFwiLi9mdW5jdGlvbnMveHRyYWN0X3NwZWN0cmFsX2t1cnRvc2lzXCI7XG5pbXBvcnQge1xuICAgIHh0cmFjdF9pcnJlZ3VsYXJpdHlfa1xufSBmcm9tIFwiLi9mdW5jdGlvbnMveHRyYWN0X2lycmVndWxhcml0eV9rXCI7XG5pbXBvcnQge1xuICAgIHh0cmFjdF9pcnJlZ3VsYXJpdHlfalxufSBmcm9tIFwiLi9mdW5jdGlvbnMveHRyYWN0X2lycmVndWxhcml0eV9qXCI7XG5pbXBvcnQge1xuICAgIHh0cmFjdF90cmlzdGltdWx1cyxcbiAgICB4dHJhY3RfdHJpc3RpbXVsdXNfMSxcbiAgICB4dHJhY3RfdHJpc3RpbXVsdXNfMixcbiAgICB4dHJhY3RfdHJpc3RpbXVsdXNfM1xufSBmcm9tIFwiLi9mdW5jdGlvbnMveHRyYWN0X3RyaXN0aW11bHVzXCI7XG5pbXBvcnQge1xuICAgIHh0cmFjdF9zbW9vdGhuZXNzXG59IGZyb20gXCIuL2Z1bmN0aW9ucy94dHJhY3Rfc21vb3RobmVzc1wiO1xuaW1wb3J0IHtcbiAgICB4dHJhY3RfemNyXG59IGZyb20gXCIuL2Z1bmN0aW9ucy94dHJhY3RfemNyXCI7XG5pbXBvcnQge1xuICAgIHh0cmFjdF9yb2xsb2ZmXG59IGZyb20gXCIuL2Z1bmN0aW9ucy94dHJhY3Rfcm9sbG9mZlwiO1xuaW1wb3J0IHtcbiAgICB4dHJhY3RfbG91ZG5lc3Ncbn0gZnJvbSBcIi4vZnVuY3Rpb25zL3h0cmFjdF9sb3VkbmVzc1wiO1xuaW1wb3J0IHtcbiAgICB4dHJhY3RfZmxhdG5lc3Ncbn0gZnJvbSBcIi4vZnVuY3Rpb25zL3h0cmFjdF9mbGF0bmVzc1wiO1xuaW1wb3J0IHtcbiAgICB4dHJhY3RfZmxhdG5lc3NfZGJcbn0gZnJvbSBcIi4vZnVuY3Rpb25zL3h0cmFjdF9mbGF0bmVzc19kYlwiO1xuaW1wb3J0IHtcbiAgICB4dHJhY3RfdG9uYWxpdHlcbn0gZnJvbSBcIi4vZnVuY3Rpb25zL3h0cmFjdF90b25hbGl0eVwiO1xuaW1wb3J0IHtcbiAgICB4dHJhY3RfY3Jlc3Rcbn0gZnJvbSBcIi4vZnVuY3Rpb25zL3h0cmFjdF9jcmVzdFwiO1xuaW1wb3J0IHtcbiAgICB4dHJhY3Rfbm9pc2luZXNzXG59IGZyb20gXCIuL2Z1bmN0aW9ucy94dHJhY3Rfbm9pc2luZXNzXCI7XG5pbXBvcnQge1xuICAgIHh0cmFjdF9ybXNfYW1wbGl0dWRlXG59IGZyb20gXCIuL2Z1bmN0aW9ucy94dHJhY3Rfcm1zX2FtcGxpdHVkZVwiO1xuaW1wb3J0IHtcbiAgICB4dHJhY3Rfc3BlY3RyYWxfaW5oYXJtb25pY2l0eVxufSBmcm9tIFwiLi9mdW5jdGlvbnMveHRyYWN0X3NwZWN0cmFsX2luaGFybW9uaWNpdHlcIjtcbmltcG9ydCB7XG4gICAgeHRyYWN0X3Bvd2VyXG59IGZyb20gXCIuL2Z1bmN0aW9ucy94dHJhY3RfcG93ZXJcIjtcbmltcG9ydCB7XG4gICAgeHRyYWN0X29kZF9ldmVuX3JhdGlvXG59IGZyb20gXCIuL2Z1bmN0aW9ucy94dHJhY3Rfb2RkX2V2ZW5fcmF0aW9cIjtcbmltcG9ydCB7XG4gICAgeHRyYWN0X3NoYXJwbmVzc1xufSBmcm9tIFwiLi9mdW5jdGlvbnMveHRyYWN0X3NoYXJwbmVzc1wiO1xuaW1wb3J0IHtcbiAgICB4dHJhY3Rfc3BlY3RyYWxfc2xvcGVcbn0gZnJvbSBcIi4vZnVuY3Rpb25zL3h0cmFjdF9zcGVjdHJhbF9zbG9wZVwiO1xuaW1wb3J0IHtcbiAgICB4dHJhY3RfbG93aGlnaFxufSBmcm9tIFwiLi9mdW5jdGlvbnMveHRyYWN0X2xvd2hpZ2hcIjtcbmltcG9ydCB7XG4gICAgeHRyYWN0X2xvd2VzdF92YWx1ZVxufSBmcm9tIFwiLi9mdW5jdGlvbnMveHRyYWN0X2xvd2VzdF92YWx1ZVwiO1xuaW1wb3J0IHtcbiAgICB4dHJhY3RfaGlnaGVzdF92YWx1ZVxufSBmcm9tIFwiLi9mdW5jdGlvbnMveHRyYWN0X2hpZ2hlc3RfdmFsdWVcIjtcbmltcG9ydCB7XG4gICAgeHRyYWN0X3N1bVxufSBmcm9tIFwiLi9mdW5jdGlvbnMveHRyYWN0X3N1bVwiO1xuaW1wb3J0IHtcbiAgICB4dHJhY3Rfbm9uemVyb19jb3VudFxufSBmcm9tIFwiLi9mdW5jdGlvbnMveHRyYWN0X25vbnplcm9fY291bnRcIjtcbmltcG9ydCB7XG4gICAgeHRyYWN0X2hwc1xufSBmcm9tIFwiLi9mdW5jdGlvbnMveHRyYWN0X2hwc1wiO1xuaW1wb3J0IHtcbiAgICB4dHJhY3RfZjBcbn0gZnJvbSBcIi4vZnVuY3Rpb25zL3h0cmFjdF9mMFwiO1xuaW1wb3J0IHtcbiAgICB4dHJhY3RfZmFpbHNhZmVfZjBcbn0gZnJvbSBcIi4vZnVuY3Rpb25zL3h0cmFjdF9mYWlsc2FmZV9mMFwiO1xuaW1wb3J0IHtcbiAgICB4dHJhY3Rfd2F2ZWxldF9mMFxufSBmcm9tIFwiLi9mdW5jdGlvbnMveHRyYWN0X3dhdmVsZXRfZjBcIjtcbmltcG9ydCB7XG4gICAgeHRyYWN0X21pZGljZW50XG59IGZyb20gXCIuL2Z1bmN0aW9ucy94dHJhY3RfbWlkaWNlbnRcIjtcbmltcG9ydCB7XG4gICAgeHRyYWN0X3NwZWN0cmFsX2Z1bmRhbWVudGFsXG59IGZyb20gXCIuL2Z1bmN0aW9ucy94dHJhY3Rfc3BlY3RyYWxfZnVuZGFtZW50YWxcIjtcbmltcG9ydCB7XG4gICAgeHRyYWN0X2VuZXJneVxufSBmcm9tIFwiLi9mdW5jdGlvbnMveHRyYWN0X2VuZXJneVwiO1xuaW1wb3J0IHtcbiAgICB4dHJhY3Rfc3BlY3RydW1cbn0gZnJvbSBcIi4vZnVuY3Rpb25zL3h0cmFjdF9zcGVjdHJ1bVwiO1xuaW1wb3J0IHtcbiAgICB4dHJhY3RfY29tcGxleF9zcGVjdHJ1bVxufSBmcm9tIFwiLi9mdW5jdGlvbnMveHRyYWN0X2NvbXBsZXhfc3BlY3RydW1cIjtcbmltcG9ydCB7XG4gICAgeHRyYWN0X21mY2Ncbn0gZnJvbSBcIi4vZnVuY3Rpb25zL3h0cmFjdF9tZmNjXCI7XG5pbXBvcnQge1xuICAgIHh0cmFjdF9kY3Rcbn0gZnJvbSBcIi4vZnVuY3Rpb25zL3h0cmFjdF9kY3RcIjtcbmltcG9ydCB7XG4gICAgeHRyYWN0X2RjdF8yXG59IGZyb20gXCIuL2Z1bmN0aW9ucy94dHJhY3RfZGN0XzJcIjtcbmltcG9ydCB7XG4gICAgeHRyYWN0X2F1dG9jb3JyZWxhdGlvblxufSBmcm9tIFwiLi9mdW5jdGlvbnMveHRyYWN0X2F1dG9jb3JyZWxhdGlvblwiO1xuaW1wb3J0IHtcbiAgICB4dHJhY3RfYW1kZlxufSBmcm9tIFwiLi9mdW5jdGlvbnMveHRyYWN0X2FtZGZcIjtcbmltcG9ydCB7XG4gICAgeHRyYWN0X2FzZGZcbn0gZnJvbSBcIi4vZnVuY3Rpb25zL3h0cmFjdF9hc2RmXCI7XG5pbXBvcnQge1xuICAgIHh0cmFjdF9iYXJrX2NvZWZmaWNpZW50c1xufSBmcm9tIFwiLi9mdW5jdGlvbnMveHRyYWN0X2JhcmtfY29lZmZpY2llbnRzXCI7XG5pbXBvcnQge1xuICAgIHh0cmFjdF9wZWFrX3NwZWN0cnVtXG59IGZyb20gXCIuL2Z1bmN0aW9ucy94dHJhY3RfcGVha19zcGVjdHJ1bVwiO1xuaW1wb3J0IHtcbiAgICB4dHJhY3RfaGFybW9uaWNfc3BlY3RydW1cbn0gZnJvbSBcIi4vZnVuY3Rpb25zL3h0cmFjdF9oYXJtb25pY19zcGVjdHJ1bVwiO1xuaW1wb3J0IHtcbiAgICB4dHJhY3RfbHBjXG59IGZyb20gXCIuL2Z1bmN0aW9ucy94dHJhY3RfbHBjXCI7XG5pbXBvcnQge1xuICAgIHh0cmFjdF9scGNjXG59IGZyb20gXCIuL2Z1bmN0aW9ucy94dHJhY3RfbHBjY1wiO1xuaW1wb3J0IHtcbiAgICB4dHJhY3RfcGNwXG59IGZyb20gXCIuL2Z1bmN0aW9ucy94dHJhY3RfcGNwXCI7XG5pbXBvcnQge1xuICAgIHh0cmFjdF95aW5cbn0gZnJvbSBcIi4vZnVuY3Rpb25zL3h0cmFjdF95aW5cIjtcbmltcG9ydCB7XG4gICAgeHRyYWN0X29uc2V0XG59IGZyb20gXCIuL2Z1bmN0aW9ucy94dHJhY3Rfb25zZXRcIjtcbmltcG9ydCB7XG4gICAgeHRyYWN0X3Jlc2FtcGxlXG59IGZyb20gXCIuL2Z1bmN0aW9ucy94dHJhY3RfcmVzYW1wbGVcIjtcbmltcG9ydCB7XG4gICAgeHRyYWN0X2luaXRfZGZ0XG59IGZyb20gXCIuL2Z1bmN0aW9ucy94dHJhY3RfaW5pdF9kZnRcIjtcbmltcG9ydCB7XG4gICAgeHRyYWN0X2luaXRfZGN0XG59IGZyb20gXCIuL2Z1bmN0aW9ucy94dHJhY3RfaW5pdF9kY3RcIjtcbmltcG9ydCB7XG4gICAgeHRyYWN0X2luaXRfbWZjY1xufSBmcm9tIFwiLi9mdW5jdGlvbnMveHRyYWN0X2luaXRfbWZjY1wiO1xuaW1wb3J0IHtcbiAgICB4dHJhY3RfaW5pdF93YXZlbGV0XG59IGZyb20gXCIuL2Z1bmN0aW9ucy94dHJhY3RfaW5pdF93YXZlbGV0XCI7XG5pbXBvcnQge1xuICAgIHh0cmFjdF9pbml0X3BjcFxufSBmcm9tIFwiLi9mdW5jdGlvbnMveHRyYWN0X2luaXRfcGNwXCI7XG5pbXBvcnQge1xuICAgIHh0cmFjdF9pbml0X2Jhcmtcbn0gZnJvbSBcIi4vZnVuY3Rpb25zL3h0cmFjdF9pbml0X2JhcmtcIjtcbmltcG9ydCB7XG4gICAgeHRyYWN0X2luaXRfY2hyb21hXG59IGZyb20gXCIuL2Z1bmN0aW9ucy94dHJhY3RfaW5pdF9jaHJvbWFcIjtcbmltcG9ydCB7XG4gICAgeHRyYWN0X2FwcGx5X3dpbmRvd1xufSBmcm9tIFwiLi9mdW5jdGlvbnMveHRyYWN0X2FwcGx5X3dpbmRvd1wiO1xuaW1wb3J0IHtcbiAgICB4dHJhY3RfY3JlYXRlX3dpbmRvd1xufSBmcm9tIFwiLi9mdW5jdGlvbnMveHRyYWN0X2NyZWF0ZV93aW5kb3dcIjtcbmltcG9ydCB7XG4gICAgeHRyYWN0X2Nocm9tYVxufSBmcm9tIFwiLi9mdW5jdGlvbnMveHRyYWN0X2Nocm9tYVwiO1xuXG5pbXBvcnQge1xuICAgIEhhcm1vbmljU3BlY3RydW1EYXRhXG59IGZyb20gXCIuL29iamVjdHMvSGFybW9uaWNTcGVjdHJ1bURhdGFcIjtcbmltcG9ydCB7XG4gICAgUGVha1NwZWN0cnVtRGF0YVxufSBmcm9tIFwiLi9vYmplY3RzL1BlYWtTcGVjdHJ1bURhdGFcIjtcbmltcG9ydCB7XG4gICAgU3BlY3RydW1EYXRhXG59IGZyb20gXCIuL29iamVjdHMvU3BlY3RydW1EYXRhXCI7XG5pbXBvcnQge1xuICAgIFRpbWVEYXRhXG59IGZyb20gXCIuL29iamVjdHMvVGltZURhdGFcIjtcblxuXG5pZiAodHlwZW9mIEFuYWx5c2VyTm9kZSAhPT0gXCJ1bmRlZmluZWRcIikge1xuXG4gICAgQW5hbHlzZXJOb2RlLnByb3RvdHlwZS50aW1lRGF0YSA9IHVuZGVmaW5lZDtcbiAgICBBbmFseXNlck5vZGUucHJvdG90eXBlLnNwZWN0cnVtRGF0YSA9IHVuZGVmaW5lZDtcbiAgICBBbmFseXNlck5vZGUucHJvdG90eXBlLmNhbGxiYWNrT2JqZWN0ID0gdW5kZWZpbmVkO1xuICAgIEFuYWx5c2VyTm9kZS5wcm90b3R5cGUuZm9vR2FpbiA9IHVuZGVmaW5lZDtcbiAgICBBbmFseXNlck5vZGUucHJvdG90eXBlLmdldFh0cmFjdERhdGEgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLnRpbWVEYXRhID09PSB1bmRlZmluZWQgfHwgdGhpcy5zY3BlY3RydW1EYXRhID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMudGltZURhdGEgPSBuZXcgVGltZURhdGEodGhpcy5mZnRTaXplLCB0aGlzLmNvbnRleHQuc2FtcGxlUmF0ZSk7XG4gICAgICAgICAgICB0aGlzLnNwZWN0cnVtRGF0YSA9IG5ldyBTcGVjdHJ1bURhdGEodGhpcy5mcmVxdWVuY3lCaW5Db3VudCwgdGhpcy5jb250ZXh0LnNhbXBsZVJhdGUpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBkc3QgPSBuZXcgRmxvYXQzMkFycmF5KHRoaXMuZmZ0U2l6ZSk7XG4gICAgICAgIHZhciBpO1xuICAgICAgICBpZiAodGhpcy5nZXRGbG9hdFRpbWVEb21haW5EYXRhKSB7XG4gICAgICAgICAgICB0aGlzLmdldEZsb2F0VGltZURvbWFpbkRhdGEoZHN0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciB2aWV3ID0gbmV3IFVpbnQ4QXJyYXkodGhpcy5mZnRTaXplKTtcbiAgICAgICAgICAgIHRoaXMuZ2V0Qnl0ZVRpbWVEb21haW5EYXRhKHZpZXcpO1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHRoaXMuZmZ0U2l6ZTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZHN0W2ldID0gdmlld1tpXTtcbiAgICAgICAgICAgICAgICBkc3RbaV0gPSAoZHN0W2ldIC8gMTI3LjUpIC0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRpbWVEYXRhLmNvcHlEYXRhRnJvbShkc3QpO1xuICAgICAgICB0aGlzLnRpbWVEYXRhLnJlc3VsdC5zcGVjdHJ1bSA9IHRoaXMuc3BlY3RydW1EYXRhO1xuICAgICAgICB2YXIgTG9nU3RvcmUgPSBuZXcgRmxvYXQzMkFycmF5KHRoaXMuZnJlcXVlbmN5QmluQ291bnQpO1xuICAgICAgICB0aGlzLmdldEZsb2F0RnJlcXVlbmN5RGF0YShMb2dTdG9yZSk7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLmZyZXF1ZW5jeUJpbkNvdW50OyBpKyspIHtcbiAgICAgICAgICAgIExvZ1N0b3JlW2ldID0gTWF0aC5wb3coMTAuMCwgTG9nU3RvcmVbaV0gLyAyMCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zcGVjdHJ1bURhdGEuY29weURhdGFGcm9tKExvZ1N0b3JlKTtcbiAgICAgICAgcmV0dXJuIHRoaXMudGltZURhdGE7XG4gICAgfTtcbiAgICBBbmFseXNlck5vZGUucHJvdG90eXBlLnByZXZpb3VzRnJhbWUgPSB1bmRlZmluZWQ7XG4gICAgQW5hbHlzZXJOb2RlLnByb3RvdHlwZS5wcmV2aW91c1Jlc3VsdCA9IHVuZGVmaW5lZDtcbiAgICBBbmFseXNlck5vZGUucHJvdG90eXBlLmZyYW1lQ2FsbGJhY2sgPSBmdW5jdGlvbiAoZnVuYywgYXJnX3RoaXMpIHtcbiAgICAgICAgLy8gUGVyZm9ybSBhIGNhbGxiYWNrIG9uIGVhY2ggZnJhbWVcbiAgICAgICAgLy8gVGhlIGZ1bmN0aW9uIGNhbGxiYWNrIGhhcyB0aGUgYXJndW1lbnRzIChjdXJyZW50X2ZyYW1lLCBwcmV2aW91c19mcmFtZSwgcHJldmlvdXNfcmVzdWx0KVxuICAgICAgICBpZiAodGhpcy5jYWxsYmFja09iamVjdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLmNhbGxiYWNrT2JqZWN0ID0gdGhpcy5jb250ZXh0LmNyZWF0ZVNjcmlwdFByb2Nlc3Nvcih0aGlzLmZmdFNpemUsIDEsIDEpO1xuICAgICAgICAgICAgdGhpcy5jb25uZWN0KHRoaXMuY2FsbGJhY2tPYmplY3QpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBfZnVuYyA9IGZ1bmM7XG4gICAgICAgIHZhciBfYXJnX3RoaXMgPSBhcmdfdGhpcztcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLmNhbGxiYWNrT2JqZWN0Lm9uYXVkaW9wcm9jZXNzID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHZhciBjdXJyZW50X2ZyYW1lID0gc2VsZi5nZXRYdHJhY3REYXRhKCk7XG4gICAgICAgICAgICB0aGlzLnByZXZpb3VzUmVzdWx0ID0gX2Z1bmMuY2FsbChfYXJnX3RoaXMsIGN1cnJlbnRfZnJhbWUsIHRoaXMucHJldmlvdXNGcmFtZSwgdGhpcy5wcmV2aW91c1Jlc3VsdCk7XG4gICAgICAgICAgICB0aGlzLnByZXZpb3VzRnJhbWUgPSBjdXJyZW50X2ZyYW1lO1xuICAgICAgICAgICAgdmFyIE4gPSBlLm91dHB1dEJ1ZmZlci5sZW5ndGg7XG4gICAgICAgICAgICB2YXIgb3V0cHV0ID0gbmV3IEZsb2F0MzJBcnJheShOKTtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSB0aGlzLnByZXZpb3VzUmVzdWx0O1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnByZXZpb3VzUmVzdWx0ICE9PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gMC4wO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBOOyBpKyspIHtcbiAgICAgICAgICAgICAgICBvdXRwdXRbaV0gPSByZXN1bHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlLm91dHB1dEJ1ZmZlci5jb3B5VG9DaGFubmVsKG91dHB1dCwgMCwgMCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gRm9yIGNocm9tZSBhbmQgb3RoZXIgZWZmaWNpZW5jeSBicm93c2Vyc1xuICAgICAgICBpZiAoIXRoaXMuZm9vR2Fpbikge1xuICAgICAgICAgICAgdGhpcy5mb29HYWluID0gdGhpcy5jb250ZXh0LmNyZWF0ZUdhaW4oKTtcbiAgICAgICAgICAgIHRoaXMuZm9vR2Fpbi5nYWluLnZhbHVlID0gMDtcbiAgICAgICAgICAgIHRoaXMuY2FsbGJhY2tPYmplY3QuY29ubmVjdCh0aGlzLmZvb0dhaW4pO1xuICAgICAgICAgICAgdGhpcy5mb29HYWluLmNvbm5lY3QodGhpcy5jb250ZXh0LmRlc3RpbmF0aW9uKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBBbmFseXNlck5vZGUucHJvdG90eXBlLmNsZWFyQ2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZGlzY29ubmVjdCh0aGlzLmNhbGxiYWNrT2JqZWN0KTtcbiAgICAgICAgdGhpcy5jYWxsYmFja09iamVjdC5vbmF1ZGlvcHJvY2VzcyA9IHVuZGVmaW5lZDtcbiAgICB9O1xuXG4gICAgQW5hbHlzZXJOb2RlLnByb3RvdHlwZS54dHJhY3RGcmFtZSA9IGZ1bmN0aW9uIChmdW5jLCBhcmdfdGhpcykge1xuICAgICAgICAvLyBDb2xsZWN0IHRoZSBjdXJyZW50IGZyYW1lIG9mIGRhdGEgYW5kIHBlcmZvcm0gdGhlIGNhbGxiYWNrIGZ1bmN0aW9uXG4gICAgICAgIGZ1bmMuY2FsbChhcmdfdGhpcywgdGhpcy5nZXRYdHJhY3REYXRhKCkpO1xuICAgIH07XG59XG5cbmlmICh0eXBlb2YgQXVkaW9CdWZmZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcblxuICAgIEF1ZGlvQnVmZmVyLnByb3RvdHlwZS54dHJhY3RfZ2V0X2RhdGFfZnJhbWVzID0gZnVuY3Rpb24gKGZyYW1lX3NpemUsIGhvcF9zaXplKSB7XG4gICAgICAgIGlmIChob3Bfc2l6ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBob3Bfc2l6ZSA9IGZyYW1lX3NpemU7XG4gICAgICAgIH1cbiAgICAgICAgKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICgheHRyYWN0X2Fzc2VydF9wb3NpdGl2ZV9pbnRlZ2VyKGZyYW1lX3NpemUpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgKFwieHRyYWN0X2dldF9kYXRhX2ZyYW1lcyByZXF1aXJlcyB0aGUgZnJhbWVfc2l6ZSB0byBiZSBkZWZpbmVkLCBwb3NpdGl2ZSBpbnRlZ2VyXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCF4dHJhY3RfYXNzZXJ0X3Bvc2l0aXZlX2ludGVnZXIoaG9wX3NpemUpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgKFwieHRyYWN0X2dldF9kYXRhX2ZyYW1lcyByZXF1aXJlcyB0aGUgaG9wX3NpemUgdG8gYmUgYSBwb3NpdGl2ZSBpbnRlZ2VyXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KSgpO1xuICAgICAgICB0aGlzLmZyYW1lcyA9IFtdO1xuICAgICAgICB2YXIgTiA9IHRoaXMubGVuZ3RoO1xuICAgICAgICB2YXIgSyA9IHRoaXMueHRyYWN0X2dldF9udW1iZXJfb2ZfZnJhbWVzKGhvcF9zaXplKTtcbiAgICAgICAgZm9yICh2YXIgYyA9IDA7IGMgPCB0aGlzLm51bWJlck9mQ2hhbm5lbHM7IGMrKykge1xuICAgICAgICAgICAgdmFyIGRhdGEgPSB0aGlzLmdldENoYW5uZWxEYXRhKGMpO1xuICAgICAgICAgICAgdGhpcy5mcmFtZXNbY10gPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgSzsgaysrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGZyYW1lID0gbmV3IFRpbWVEYXRhKGZyYW1lX3NpemUsIHRoaXMuc2FtcGxlUmF0ZSk7XG4gICAgICAgICAgICAgICAgZnJhbWUuY29weURhdGFGcm9tKGRhdGEuc3ViYXJyYXkoaG9wX3NpemUgKiBrLCBob3Bfc2l6ZSAqIGsgKyBmcmFtZV9zaXplKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5mcmFtZXNbY10ucHVzaChmcmFtZSk7XG4gICAgICAgICAgICAgICAgZnJhbWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkYXRhID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmZyYW1lcztcbiAgICB9O1xuXG4gICAgQXVkaW9CdWZmZXIucHJvdG90eXBlLnh0cmFjdF9nZXRfbnVtYmVyX29mX2ZyYW1lcyA9IGZ1bmN0aW9uIChob3Bfc2l6ZSkge1xuICAgICAgICByZXR1cm4geHRyYWN0X2dldF9udW1iZXJfb2ZfZnJhbWVzKHRoaXMsIGhvcF9zaXplKTtcbiAgICB9O1xuXG4gICAgQXVkaW9CdWZmZXIucHJvdG90eXBlLnh0cmFjdF9nZXRfZnJhbWUgPSBmdW5jdGlvbiAoZHN0LCBjaGFubmVsLCBpbmRleCwgZnJhbWVfc2l6ZSkge1xuICAgICAgICAoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBkc3QgIT09IFwib2JqZWN0XCIgfHwgZHN0LmNvbnN0cnVjdG9yICE9PSBGbG9hdDMyQXJyYXkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyAoXCJkc3QgbXVzdCBiZSBhIEZsb2F0MzJBcnJheSBvYmplY3QgZXF1YWwgaW4gbGVuZ3RoIHRvIGhvcF9zaXplXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCF4dHJhY3RfYXNzZXJ0X3Bvc2l0aXZlX2ludGVnZXIoY2hhbm5lbCkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyAoXCJ4dHJhY3RfZ2V0X2ZyYW1lIHJlcXVpcmVzIHRoZSBjaGFubmVsIHRvIGJlIGFuIGludGVnZXIgdmFsdWVcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXh0cmFjdF9hc3NlcnRfcG9zaXRpdmVfaW50ZWdlcihpbmRleCkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyAoXCJ4dHJhY3RfZ2V0X2ZyYW1lIHJlcXVpcmVzIHRoZSBpbmRleCB0byBiZSBhbiBpbnRlZ2VyIHZhbHVlXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCF4dHJhY3RfYXNzZXJ0X3Bvc2l0aXZlX2ludGVnZXIoZnJhbWVfc2l6ZSkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyAoXCJ4dHJhY3RfZ2V0X2ZyYW1lIHJlcXVpcmVzIHRoZSBmcmFtZV9zaXplIHRvIGJlIGRlZmluZWQsIHBvc2l0aXZlIGludGVnZXJcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKCk7XG4gICAgICAgIGlmIChjaGFubmVsIDwgMCB8fCBjaGFubmVsID4gdGhpcy5udW1iZXJPZkNoYW5uZWxzKSB7XG4gICAgICAgICAgICB0aHJvdyAoXCJjaGFubmVsIG51bWJlciBcIiArIGNoYW5uZWwgKyBcIiBvdXQgb2YgYm91bmRzXCIpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBLID0gdGhpcy54dHJhY3RfZ2V0X251bWJlcl9vZl9mcmFtZXMoZnJhbWVfc2l6ZSk7XG4gICAgICAgIGlmIChpbmRleCA8IDAgfHwgaW5kZXggPj0gSykge1xuICAgICAgICAgICAgdGhyb3cgKFwiaW5kZXggbnVtYmVyIFwiICsgaW5kZXggKyBcIiBvdXQgb2YgYm91bmRzXCIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmNvcHlGcm9tQ2hhbm5lbChkc3QsIGNoYW5uZWwsIGZyYW1lX3NpemUgKiBpbmRleCk7XG4gICAgfTtcblxuICAgIEF1ZGlvQnVmZmVyLnByb3RvdHlwZS54dHJhY3RfcHJvY2Vzc19mcmFtZV9kYXRhID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aHJvdyAoXCJBdWRpb0J1ZmZlcjo6eHRyYWN0X3Byb2Nlc3NfZnJhbWVfZGF0YSBoYXMgYmVlbiBkZXByZWNhdGVkXCIpO1xuICAgIH07XG59XG5cblxuZXhwb3J0IHtcbiAgICB4dHJhY3RfaXNfZGVub3JtYWwsXG4gICAgeHRyYWN0X2Fzc2VydF9hcnJheSxcbiAgICB4dHJhY3RfYXNzZXJ0X3Bvc2l0aXZlX2ludGVnZXIsXG4gICAgeHRyYWN0X2FycmF5X3N1bSxcbiAgICB4dHJhY3RfYXJyYXlfY29weSxcbiAgICB4dHJhY3RfYXJyYXlfbWluLFxuICAgIHh0cmFjdF9hcnJheV9tYXgsXG4gICAgeHRyYWN0X2FycmF5X3NjYWxlLFxuICAgIHh0cmFjdF9hcnJheV9ub3JtYWxpc2UsXG4gICAgeHRyYWN0X2FycmF5X2JvdW5kLFxuICAgIHh0cmFjdF9hcnJheV9pbnRlcmxhY2UsXG4gICAgeHRyYWN0X2FycmF5X2RlaW50ZXJsYWNlLFxuICAgIHh0cmFjdF9nZXRfbnVtYmVyX29mX2ZyYW1lcyxcbiAgICB4dHJhY3RfZ2V0X2RhdGFfZnJhbWVzLFxuICAgIHh0cmFjdF9wcm9jZXNzX2ZyYW1lX2RhdGEsXG4gICAgeHRyYWN0X2FycmF5X3RvX0pTT04sXG4gICAgeHRyYWN0X2ZyYW1lX2Zyb21fYXJyYXksXG4gICAgeHRyYWN0X21lYW4sXG4gICAgeHRyYWN0X3RlbXBvcmFsX2NlbnRyb2lkLFxuICAgIHh0cmFjdF92YXJpYW5jZSxcbiAgICB4dHJhY3Rfc3RhbmRhcmRfZGV2aWF0aW9uLFxuICAgIHh0cmFjdF9hdmVyYWdlX2RldmlhdGlvbixcbiAgICB4dHJhY3Rfc2tld25lc3Nfa3VydG9zaXMsXG4gICAgeHRyYWN0X3NrZXduZXNzLFxuICAgIHh0cmFjdF9rdXJ0b3NpcyxcbiAgICB4dHJhY3Rfc3BlY3RyYWxfY2VudHJvaWQsXG4gICAgeHRyYWN0X3NwZWN0cmFsX21lYW4sXG4gICAgeHRyYWN0X3NwZWN0cmFsX3ZhcmlhbmNlLFxuICAgIHh0cmFjdF9zcGVjdHJhbF9zcHJlYWQsXG4gICAgeHRyYWN0X3NwZWN0cmFsX3N0YW5kYXJkX2RldmlhdGlvbixcbiAgICB4dHJhY3Rfc3BlY3RyYWxfc2tld25lc3MsXG4gICAgeHRyYWN0X3NwZWN0cmFsX2t1cnRvc2lzLFxuICAgIHh0cmFjdF9pcnJlZ3VsYXJpdHlfayxcbiAgICB4dHJhY3RfaXJyZWd1bGFyaXR5X2osXG4gICAgeHRyYWN0X3RyaXN0aW11bHVzLFxuICAgIHh0cmFjdF90cmlzdGltdWx1c18xLFxuICAgIHh0cmFjdF90cmlzdGltdWx1c18yLFxuICAgIHh0cmFjdF90cmlzdGltdWx1c18zLFxuICAgIHh0cmFjdF9zbW9vdGhuZXNzLFxuICAgIHh0cmFjdF96Y3IsXG4gICAgeHRyYWN0X3JvbGxvZmYsXG4gICAgeHRyYWN0X2xvdWRuZXNzLFxuICAgIHh0cmFjdF9mbGF0bmVzcyxcbiAgICB4dHJhY3RfZmxhdG5lc3NfZGIsXG4gICAgeHRyYWN0X3RvbmFsaXR5LFxuICAgIHh0cmFjdF9jcmVzdCxcbiAgICB4dHJhY3Rfbm9pc2luZXNzLFxuICAgIHh0cmFjdF9ybXNfYW1wbGl0dWRlLFxuICAgIHh0cmFjdF9zcGVjdHJhbF9pbmhhcm1vbmljaXR5LFxuICAgIHh0cmFjdF9wb3dlcixcbiAgICB4dHJhY3Rfb2RkX2V2ZW5fcmF0aW8sXG4gICAgeHRyYWN0X3NoYXJwbmVzcyxcbiAgICB4dHJhY3Rfc3BlY3RyYWxfc2xvcGUsXG4gICAgeHRyYWN0X2xvd2hpZ2gsXG4gICAgeHRyYWN0X2xvd2VzdF92YWx1ZSxcbiAgICB4dHJhY3RfaGlnaGVzdF92YWx1ZSxcbiAgICB4dHJhY3Rfc3VtLFxuICAgIHh0cmFjdF9ub256ZXJvX2NvdW50LFxuICAgIHh0cmFjdF9ocHMsXG4gICAgeHRyYWN0X2YwLFxuICAgIHh0cmFjdF9mYWlsc2FmZV9mMCxcbiAgICB4dHJhY3Rfd2F2ZWxldF9mMCxcbiAgICB4dHJhY3RfbWlkaWNlbnQsXG4gICAgeHRyYWN0X3NwZWN0cmFsX2Z1bmRhbWVudGFsLFxuICAgIHh0cmFjdF9lbmVyZ3ksXG4gICAgeHRyYWN0X3NwZWN0cnVtLFxuICAgIHh0cmFjdF9jb21wbGV4X3NwZWN0cnVtLFxuICAgIHh0cmFjdF9tZmNjLFxuICAgIHh0cmFjdF9kY3QsXG4gICAgeHRyYWN0X2RjdF8yLFxuICAgIHh0cmFjdF9hdXRvY29ycmVsYXRpb24sXG4gICAgeHRyYWN0X2FtZGYsXG4gICAgeHRyYWN0X2FzZGYsXG4gICAgeHRyYWN0X2JhcmtfY29lZmZpY2llbnRzLFxuICAgIHh0cmFjdF9wZWFrX3NwZWN0cnVtLFxuICAgIHh0cmFjdF9oYXJtb25pY19zcGVjdHJ1bSxcbiAgICB4dHJhY3RfbHBjLFxuICAgIHh0cmFjdF9scGNjLFxuICAgIHh0cmFjdF9wY3AsXG4gICAgeHRyYWN0X3lpbixcbiAgICB4dHJhY3Rfb25zZXQsXG4gICAgeHRyYWN0X3Jlc2FtcGxlLFxuICAgIHh0cmFjdF9pbml0X2RmdCxcbiAgICB4dHJhY3RfaW5pdF9kY3QsXG4gICAgeHRyYWN0X2luaXRfbWZjYyxcbiAgICB4dHJhY3RfaW5pdF93YXZlbGV0LFxuICAgIHh0cmFjdF9pbml0X3BjcCxcbiAgICB4dHJhY3RfaW5pdF9iYXJrLFxuICAgIHh0cmFjdF9pbml0X2Nocm9tYSxcbiAgICB4dHJhY3RfYXBwbHlfd2luZG93LFxuICAgIHh0cmFjdF9jcmVhdGVfd2luZG93LFxuICAgIHh0cmFjdF9jaHJvbWEsXG4gICAgSGFybW9uaWNTcGVjdHJ1bURhdGEsXG4gICAgUGVha1NwZWN0cnVtRGF0YSxcbiAgICBTcGVjdHJ1bURhdGEsXG4gICAgVGltZURhdGFcbn07XG4iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy9vYmplY3RzL0NvbW1vbk1lbW9yeS5kLnRzXCIgLz5cblxuaW1wb3J0IHt4dHJhY3RfaW5pdF9kY3R9IGZyb20gXCIuLi9mdW5jdGlvbnMveHRyYWN0X2luaXRfZGN0XCI7XG5pbXBvcnQge3h0cmFjdF9pbml0X21mY2N9IGZyb20gXCIuLi9mdW5jdGlvbnMveHRyYWN0X2luaXRfbWZjY1wiO1xuaW1wb3J0IHt4dHJhY3RfaW5pdF9iYXJrfSBmcm9tIFwiLi4vZnVuY3Rpb25zL3h0cmFjdF9pbml0X2JhcmtcIjtcbmltcG9ydCB7eHRyYWN0X2luaXRfY2hyb21hfSBmcm9tIFwiLi4vZnVuY3Rpb25zL3h0cmFjdF9pbml0X2Nocm9tYVwiO1xuXG5mdW5jdGlvbiBzZWFyY2hNYXBQcm9wZXJ0aWVzKG1hcCwgcHJvcGVydGllcykge1xuICAgIHZhciBtYXRjaCA9IG1hcC5maW5kKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGZvciAodmFyIHByb3AgaW4gcHJvcGVydGllcykge1xuICAgICAgICAgICAgaWYgKGVbcHJvcF0gIT09IHByb3BlcnRpZXNbcHJvcF0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSk7XG4gICAgcmV0dXJuIG1hdGNoO1xufVxuXG52YXIgZGN0X21hcCA9IHtcbiAgICBwYXJlbnQ6IHRoaXMsXG4gICAgc3RvcmU6IFtdLFxuICAgIGNyZWF0ZUNvZWZmaWNpZW50czogZnVuY3Rpb24gKE4pIHtcbiAgICAgICAgdmFyIG1hdGNoID0gc2VhcmNoTWFwUHJvcGVydGllcyh0aGlzLnN0b3JlLCB7XG4gICAgICAgICAgICBOOiBOXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoIW1hdGNoKSB7XG4gICAgICAgICAgICBtYXRjaCA9IHtcbiAgICAgICAgICAgICAgICBOOiBOLFxuICAgICAgICAgICAgICAgIGRhdGE6IHh0cmFjdF9pbml0X2RjdChOKVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRoaXMuc3RvcmUucHVzaChtYXRjaCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1hdGNoLmRhdGE7XG4gICAgfVxufTtcblxudmFyIG1mY2NfbWFwID0ge1xuICAgIHBhcmVudDogdGhpcyxcbiAgICBzdG9yZTogW10sXG4gICAgY3JlYXRlQ29lZmZpY2llbnRzOiBmdW5jdGlvbiAoTiwgbnlxdWlzdCwgc3R5bGUsIGZyZXFfbWluLCBmcmVxX21heCwgZnJlcV9iYW5kcykge1xuICAgICAgICB2YXIgc2VhcmNoID0ge1xuICAgICAgICAgICAgTjogTixcbiAgICAgICAgICAgIG55cXVpc3Q6IG55cXVpc3QsXG4gICAgICAgICAgICBzdHlsZTogc3R5bGUsXG4gICAgICAgICAgICBmcmVxX21pbjogZnJlcV9taW4sXG4gICAgICAgICAgICBmcmVxX21heDogZnJlcV9tYXgsXG4gICAgICAgICAgICBmcmVxX2JhbmRzOiBmcmVxX2JhbmRzXG4gICAgICAgIH07XG4gICAgICAgIHZhciBtYXRjaCA9IHNlYXJjaE1hcFByb3BlcnRpZXModGhpcy5zdG9yZSwgc2VhcmNoKTtcbiAgICAgICAgaWYgKCFtYXRjaCkge1xuICAgICAgICAgICAgbWF0Y2ggPSBzZWFyY2g7XG4gICAgICAgICAgICBtYXRjaC5kYXRhID0geHRyYWN0X2luaXRfbWZjYyhOLCBueXF1aXN0LCBzdHlsZSwgZnJlcV9taW4sIGZyZXFfbWF4LCBmcmVxX2JhbmRzKTtcbiAgICAgICAgICAgIHRoaXMuc3RvcmUucHVzaChtYXRjaCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1hdGNoLmRhdGE7XG4gICAgfVxufTtcblxudmFyIGJhcmtfbWFwID0ge1xuICAgIHBhcmVudDogdGhpcyxcbiAgICBzdG9yZTogW10sXG4gICAgY3JlYXRlQ29lZmZpY2llbnRzOiBmdW5jdGlvbiAoTiwgc2FtcGxlUmF0ZSwgbnVtQmFuZHMpIHtcbiAgICAgICAgdmFyIHNlYXJjaCA9IHtcbiAgICAgICAgICAgIE46IE4sXG4gICAgICAgICAgICBzYW1wbGVSYXRlOiBzYW1wbGVSYXRlLFxuICAgICAgICAgICAgbnVtQmFuZHM6IG51bUJhbmRzXG4gICAgICAgIH07XG4gICAgICAgIHZhciBtYXRjaCA9IHNlYXJjaE1hcFByb3BlcnRpZXModGhpcy5zdG9yZSwgc2VhcmNoKTtcbiAgICAgICAgaWYgKCFtYXRjaCkge1xuICAgICAgICAgICAgbWF0Y2ggPSBzZWFyY2g7XG4gICAgICAgICAgICBtYXRjaC5kYXRhID0geHRyYWN0X2luaXRfYmFyayhOLCBzYW1wbGVSYXRlLCBudW1CYW5kcyk7XG4gICAgICAgICAgICB0aGlzLnN0b3JlLnB1c2gobWF0Y2gpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtYXRjaC5kYXRhO1xuICAgIH1cbn07XG5cblxudmFyIGNocm9tYV9tYXAgPSB7XG4gICAgcGFyZW50OiB0aGlzLFxuICAgIHN0b3JlOiBbXSxcbiAgICBjcmVhdGVDb2VmZmljaWVudHM6IGZ1bmN0aW9uIChOLCBzYW1wbGVSYXRlLCBuYmlucywgQTQ0MCwgZl9jdHIsIG9jdHdpZHRoKSB7XG4gICAgICAgIHZhciBzZWFyY2ggPSB7XG4gICAgICAgICAgICBOOiBOLFxuICAgICAgICAgICAgc2FtcGxlUmF0ZTogc2FtcGxlUmF0ZSxcbiAgICAgICAgICAgIG5iaW5zOiBuYmlucyxcbiAgICAgICAgICAgIEE0NDA6IEE0NDAsXG4gICAgICAgICAgICBmX2N0cjogZl9jdHIsXG4gICAgICAgICAgICBvY3R3aWR0aDogb2N0d2lkdGhcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIG1hdGNoID0gc2VhcmNoTWFwUHJvcGVydGllcyh0aGlzLnN0b3JlLCBzZWFyY2gpO1xuICAgICAgICBpZiAoIW1hdGNoKSB7XG4gICAgICAgICAgICBtYXRjaCA9IHNlYXJjaDtcbiAgICAgICAgICAgIG1hdGNoLmRhdGEgPSB4dHJhY3RfaW5pdF9jaHJvbWEoTiwgc2FtcGxlUmF0ZSwgbmJpbnMsIEE0NDAsIGZfY3RyLCBvY3R3aWR0aCk7XG4gICAgICAgICAgICB0aGlzLnN0b3JlLnB1c2gobWF0Y2gpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtYXRjaC5kYXRhO1xuICAgIH1cbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVEY3RDb2VmZmljaWVudHMoTikge1xuICAgIHJldHVybiBkY3RfbWFwLmNyZWF0ZUNvZWZmaWNpZW50cyhOKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU1mY2NDb2VmZmljaWVudHMoTiwgbnlxdWlzdCwgc3R5bGUsIGZyZXFfbWluLCBmcmVxX21heCwgZnJlcV9iYW5kcykge1xuICAgIHJldHVybiBtZmNjX21hcC5jcmVhdGVDb2VmZmljaWVudHMoTiwgbnlxdWlzdCwgc3R5bGUsIGZyZXFfbWluLCBmcmVxX21heCwgZnJlcV9iYW5kcyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVCYXJrQ29lZmZpY2llbnRzKE4sIHNhbXBsZVJhdGUsIG51bUJhbmRzKSB7XG4gICAgaWYgKHR5cGVvZiBudW1CYW5kcyAhPT0gXCJudW1iZXJcIiB8fCBudW1CYW5kcyA8IDAgfHwgbnVtQmFuZHMgPiAyNikge1xuICAgICAgICBudW1CYW5kcyA9IDI2O1xuICAgIH1cbiAgICByZXR1cm4gYmFya19tYXAuY3JlYXRlQ29lZmZpY2llbnRzKE4sIHNhbXBsZVJhdGUsIG51bUJhbmRzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNocm9tYUNvZWZmaWNpZW50cyhOLCBzYW1wbGVSYXRlLCBuYmlucywgQTQ0MCwgZl9jdHIsIG9jdHdpZHRoKSB7XG4gICAgcmV0dXJuIGNocm9tYV9tYXAuY3JlYXRlQ29lZmZpY2llbnRzKE4sIHNhbXBsZVJhdGUsIG5iaW5zLCBBNDQwLCBmX2N0ciwgb2N0d2lkdGgpO1xufVxuIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZ3Mvb2JqZWN0cy9EYXRhUHJvdG90eXBlLmQudHNcIiAvPlxuaW1wb3J0IHt4dHJhY3RfYXJyYXlfdG9fSlNPTn0gZnJvbSBcIi4uL2Z1bmN0aW9ucy94dHJhY3RfYXJyYXlfdG9fSlNPTlwiO1xuaW1wb3J0IHtjcmVhdGVEY3RDb2VmZmljaWVudHMsIGNyZWF0ZU1mY2NDb2VmZmljaWVudHMsIGNyZWF0ZUJhcmtDb2VmZmljaWVudHMsIGNyZWF0ZUNocm9tYUNvZWZmaWNpZW50c30gZnJvbSBcIi4vQ29tbW9uTWVtb3J5XCI7XG5cbmZ1bmN0aW9uIHJlY3Vyc2l2ZURlbHRhKGEsIGIpIHtcbiAgICAvL2EgYW5kIGIgYXJlIG9iamVjdHMgb2YgVGltZS9TcGVjdHJ1bS9QZWFrUy9IYXJtb25pY1MgRGF0YVxuICAgIC8vYSBhbmQgYiBhcmUgdGhlIC5yZXN1bHQgb2JqZWN0XG4gICAgdmFyIHBhcmFtLCBkZWx0YSA9IHt9O1xuICAgIGZvciAocGFyYW0gaW4gYSkge1xuICAgICAgICBpZiAoYltwYXJhbV0pIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgYVtwYXJhbV0gPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgICAgICBkZWx0YVtwYXJhbV0gPSBhW3BhcmFtXSAtIGJbcGFyYW1dO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkZWx0YVtwYXJhbV0gPSBkZWx0YU9iamVjdChhLCBiLCBwYXJhbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGRlbHRhO1xufVxuXG5mdW5jdGlvbiBkZWx0YU9iamVjdChhLCBiLCBwYXJhbSkge1xuICAgIGlmIChhLnJlc3VsdCAmJiBiLnJlc3VsdCkge1xuICAgICAgICByZXR1cm4gcmVjdXJzaXZlRGVsdGEoYVtwYXJhbV0ucmVzdWx0LCBiW3BhcmFtXS5yZXN1bHQpO1xuICAgIH0gZWxzZSBpZiAoYS5sZW5ndGggJiYgYi5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIGRlbHRhQXJyYXkoYVtwYXJhbV0sIGJbcGFyYW1dKTtcbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gZGVsdGFBcnJheShhLCBiKSB7XG4gICAgdmFyIGQ7XG4gICAgaWYgKGEubGVuZ3RoID09PSBiLmxlbmd0aCkge1xuICAgICAgICBkID0gbmV3IEZsb2F0NjRBcnJheShhLmxlbmd0aCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZCA9IFtdO1xuICAgIH1cbiAgICB2YXIgbiA9IDA7XG4gICAgd2hpbGUgKG4gPCBhLmxlbmd0aCAmJiBuIDwgYi5sZW5ndGgpIHtcbiAgICAgICAgZFtuXSA9IGFbbl0gLSBiW25dO1xuICAgICAgICBuKys7XG4gICAgfVxuICAgIHJldHVybiBkO1xufVxuXG5leHBvcnQgY2xhc3MgRGF0YVByb3RvdHlwZSB7XG4gICAgY29uc3RydWN0b3IoTiwgc2FtcGxlUmF0ZSkge1xuICAgICAgICB0aGlzLnJlc3VsdCA9IHt9O1xuICAgICAgICB0aGlzLl9zYW1wbGVSYXRlID0gc2FtcGxlUmF0ZTtcbiAgICAgICAgdGhpcy5kYXRhID0gbmV3IEZsb2F0NjRBcnJheShOKTtcbiAgICB9XG4gICAgZ2V0IHNhbXBsZVJhdGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zYW1wbGVSYXRlO1xuICAgIH1cbiAgICBzZXQgc2FtcGxlUmF0ZShmcykge1xuICAgICAgICB0aGlzLl9zYW1wbGVSYXRlID0gZnM7XG4gICAgfVxuICAgIGNsZWFyUmVzdWx0KCkge1xuICAgICAgICB0aGlzLnJlc3VsdCA9IHt9O1xuICAgIH1cbiAgICBnZXREYXRhKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhO1xuICAgIH1cbiAgICB6ZXJvRGF0YVJhbmdlKHN0YXJ0LCBlbmQpIHtcbiAgICAgICAgaWYgKHRoaXMuZGF0YS5maWxsKSB7XG4gICAgICAgICAgICB0aGlzLmRhdGEuZmlsbCgwLCBzdGFydCwgZW5kKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAodmFyIG4gPSBzdGFydDsgbiA8IGVuZDsgbisrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhW25dID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNsZWFyUmVzdWx0KCk7XG4gICAgfVxuICAgIHplcm9EYXRhICgpIHtcbiAgICAgICAgdGhpcy56ZXJvRGF0YVJhbmdlKDAsIHRoaXMuZGF0YS5sZW5ndGgpO1xuICAgIH1cbiAgICBjb3B5RGF0YUZyb20oc3JjLCBOLCBvZmZzZXQpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBzcmMgIT09IFwib2JqZWN0XCIgfHwgc3JjLmxlbmd0aCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aHJvdyAoXCJjb3B5RGF0YUZyb20gcmVxdWlyZXMgc3JjIHRvIGJlIGFuIEFycmF5IG9yIFR5cGVkQXJyYXlcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9mZnNldCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBvZmZzZXQgPSAwO1xuICAgICAgICB9XG4gICAgICAgIGlmIChOID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIE4gPSBNYXRoLm1pbihzcmMubGVuZ3RoLCB0aGlzLmRhdGEubGVuZ3RoKTtcbiAgICAgICAgfVxuICAgICAgICBOID0gTWF0aC5taW4oTiArIG9mZnNldCwgdGhpcy5kYXRhLmxlbmd0aCk7XG4gICAgICAgIGZvciAodmFyIG4gPSAwOyBuIDwgTjsgbisrKSB7XG4gICAgICAgICAgICB0aGlzLmRhdGFbbiArIG9mZnNldF0gPSBzcmNbbl07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jbGVhclJlc3VsdCgpO1xuICAgIH1cblxuICAgIGR1cGxpY2F0ZSgpIHtcbiAgICAgICAgdmFyIGNvcHkgPSB0aGlzLnByb3RvdHlwZS5jb25zdHJ1Y3Rvcih0aGlzLmRhdGEubGVuZ3RoLCB0aGlzLnNhbXBsZVJhdGUpO1xuICAgICAgICBjb3B5LmNvcHlEYXRhRnJvbSh0aGlzLmRhdGEpO1xuICAgIH1cblxuICAgIHRvSlNPTigpIHtcbiAgICAgICAgZnVuY3Rpb24gbGNoYXIoc3RyKSB7XG4gICAgICAgICAgICB2YXIgbGFzdGNoYXIgPSBzdHJbc3RyLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgaWYgKGxhc3RjaGFyICE9PSAneycgJiYgbGFzdGNoYXIgIT09ICcsJykge1xuICAgICAgICAgICAgICAgIHN0ciA9IHN0ciArICcsICc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gc3RyO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gZ2V0SlNPTlN0cmluZyhzZWxmLCBwLCBuKSB7XG4gICAgICAgICAgICB2YXIgc3RyID0gXCJcIjtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcCA9PT0gXCJudW1iZXJcIiAmJiBpc0Zpbml0ZShwKSkge1xuICAgICAgICAgICAgICAgIHN0ciA9ICdcIicgKyBuICsgJ1wiOiAnICsgcDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHAgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgICAgICBpZiAocC50b0pTT04pIHtcbiAgICAgICAgICAgICAgICAgICAgc3RyID0gJ1wiJyArIG4gKyAnXCI6ICcgKyBwLnRvSlNPTihwKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHAubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0ciA9ICdcIicgKyBuICsgJ1wiOiAnICsgeHRyYWN0X2FycmF5X3RvX0pTT04ocCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc3RyID0gJ1wiJyArIG4gKyAnXCI6ICcgKyBzZWxmLnRvSlNPTihwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHN0ciA9ICdcIicgKyBuICsgJ1wiOiBcIicgKyBwLnRvU3RyaW5nKCkgKyAnXCInO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHN0cjtcbiAgICAgICAgfVxuICAgICAgICB2YXIganNvbiA9ICd7JztcbiAgICAgICAgZm9yICh2YXIgcHJvcGVydHkgaW4gdGhpcy5yZXN1bHQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnJlc3VsdC5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eSkpIHtcbiAgICAgICAgICAgICAgICBqc29uID0gbGNoYXIoanNvbik7XG4gICAgICAgICAgICAgICAganNvbiA9IGpzb24gKyBnZXRKU09OU3RyaW5nKHRoaXMsIHRoaXMucmVzdWx0W3Byb3BlcnR5XSwgcHJvcGVydHkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBqc29uICsgJ30nO1xuICAgIH1cblxuICAgIGNvbXB1dGVEZWx0YShjb21wYXJlKSB7XG4gICAgICAgIHRoaXMucmVzdWx0LmRlbHRhID0gcmVjdXJzaXZlRGVsdGEodGhpcy5yZXN1bHQsIGNvbXBhcmUucmVzdWx0KTtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVzdWx0LmRlbHRhO1xuICAgIH1cblxuICAgIGNvbXB1dGVEZWx0YURlbHRhKGNvbXBhcmUpIHtcbiAgICAgICAgaWYgKCFjb21wYXJlLnJlc3VsdC5kZWx0YSB8fCAhdGhpcy5yZXN1bHQuZGVsdGEpIHtcbiAgICAgICAgICAgIHRocm93IChcIkNhbm5vdCBjb21wdXRlIGRlbHRhLWRlbHRhIHdpdGhvdXQgYm90aCBvYmplY3RzIGhhdmluZyBkZWx0YXNcIik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZXN1bHQuZGVsdGEuZGVsdGEgPSByZWN1cnNpdmVEZWx0YSh0aGlzLnJlc3VsdC5kZWx0YSwgY29tcGFyZS5yZXN1bHQuZGVsdGEpO1xuICAgICAgICByZXR1cm4gdGhpcy5yZXN1bHQuZGVsdGEuZGVsdGE7XG4gICAgfVxuXG4gICAgY3JlYXRlRGN0Q29lZmZpY2llbnRzKE4pIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZURjdENvZWZmaWNpZW50cyhOdW1iZXIoTikpO1xuICAgIH1cblxuICAgIGNyZWF0ZU1mY2NDb2VmZmljaWVudHMoTiwgbnlxdWlzdCwgc3R5bGUsIGZyZXFfbWluLCBmcmVxX21heCwgZnJlcV9iYW5kcykge1xuICAgICAgICBOID0gTnVtYmVyKE4pO1xuICAgICAgICBueXF1aXN0ID0gTnVtYmVyKG55cXVpc3QpO1xuICAgICAgICBmcmVxX21pbiA9IE51bWJlcihmcmVxX21pbik7XG4gICAgICAgIGZyZXFfbWF4ID0gTnVtYmVyKGZyZXFfbWF4KTtcbiAgICAgICAgZnJlcV9iYW5kcyA9IE51bWJlcihmcmVxX2JhbmRzKTtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZU1mY2NDb2VmZmljaWVudHMoTiwgbnlxdWlzdCwgc3R5bGUsIGZyZXFfbWluLCBmcmVxX21heCwgZnJlcV9iYW5kcyk7XG4gICAgfVxuXG4gICAgY3JlYXRlQmFya0NvZWZmaWNpZW50cyhOLCBzYW1wbGVSYXRlLCBudW1CYW5kcykge1xuICAgICAgICBOID0gTnVtYmVyKE4pO1xuICAgICAgICBzYW1wbGVSYXRlID0gTnVtYmVyKHNhbXBsZVJhdGUpO1xuICAgICAgICBudW1CYW5kcyA9IE51bWJlcihudW1CYW5kcyk7XG4gICAgICAgIHJldHVybiBjcmVhdGVCYXJrQ29lZmZpY2llbnRzKE4sIHNhbXBsZVJhdGUsIG51bUJhbmRzKTtcbiAgICB9XG5cbiAgICBjcmVhdGVDaHJvbWFDb2VmZmljaWVudHMoTiwgc2FtcGxlUmF0ZSwgbmJpbnMsIEE0NDAsIGZfY3RyLCBvY3R3aWR0aCkge1xuICAgICAgICBOID0gTnVtYmVyKE4pO1xuICAgICAgICBzYW1wbGVSYXRlID0gTnVtYmVyKHNhbXBsZVJhdGUpO1xuICAgICAgICBuYmlucyA9IE51bWJlcihuYmlucyk7XG4gICAgICAgIEE0NDAgPSBOdW1iZXIoQTQ0MCk7XG4gICAgICAgIGZfY3RyID0gTnVtYmVyKGZfY3RyKTtcbiAgICAgICAgb2N0d2lkdGggPSBOdW1iZXIob2N0d2lkdGgpO1xuICAgICAgICByZXR1cm4gY3JlYXRlQ2hyb21hQ29lZmZpY2llbnRzKE4sIHNhbXBsZVJhdGUsIG5iaW5zLCBBNDQwLCBmX2N0ciwgb2N0d2lkdGgpO1xuICAgIH1cbn1cbiIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL29iamVjdHMvUGVha1NwZWN0cnVtRGF0YS5kLnRzXCIgLz5cbmltcG9ydCB7UGVha1NwZWN0cnVtRGF0YX0gZnJvbSBcIi4vUGVha1NwZWN0cnVtRGF0YVwiO1xuaW1wb3J0IHt4dHJhY3Rfb2RkX2V2ZW5fcmF0aW99IGZyb20gXCIuLi9mdW5jdGlvbnMveHRyYWN0X29kZF9ldmVuX3JhdGlvXCI7XG5pbXBvcnQge3h0cmFjdF9ub2lzaW5lc3N9IGZyb20gXCIuLi9mdW5jdGlvbnMveHRyYWN0X25vaXNpbmVzc1wiO1xuXG5leHBvcnQgY2xhc3MgSGFybW9uaWNTcGVjdHJ1bURhdGEgZXh0ZW5kcyBQZWFrU3BlY3RydW1EYXRhIHtcbiAgICBvZGRfZXZlbl9yYXRpbyAoKSB7XG4gICAgICAgIGlmICh0aGlzLnJlc3VsdC5vZGRfZXZlbl9yYXRpbyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5mMCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zcGVjdHJhbF9mdW5kYW1lbnRhbCh0aGlzLmRhdGEsIHRoaXMuc2FtcGxlUmF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnJlc3VsdC5vZGRfZXZlbl9yYXRpbyA9IHh0cmFjdF9vZGRfZXZlbl9yYXRpbyh0aGlzLmRhdGEsIHRoaXMuZjApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnJlc3VsdC5vZGRfZXZlbl9yYXRpbztcbiAgICB9XG5cbiAgICBub2lzaW5lc3MoKSB7XG4gICAgICAgIGlmIChwYXJlbnQuY29uc3RydWN0b3IgIT09IFBlYWtTcGVjdHJ1bURhdGEpIHtcbiAgICAgICAgICAgIHRoaXMucmVzdWx0Lm5vaXNpbmVzcyA9IG51bGw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnJlc3VsdC5ub2lzaW5lc3MgPSB4dHJhY3Rfbm9pc2luZXNzKHRoaXMubm9uemVyb19jb3VudCgpLCBwYXJlbnQubm9uemVyb19jb3VudCgpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5yZXN1bHQubm9pc2luZXNzO1xuICAgIH1cbn1cblxuSGFybW9uaWNTcGVjdHJ1bURhdGEucHJvdG90eXBlLmZlYXR1cmVzID0gUGVha1NwZWN0cnVtRGF0YS5wcm90b3R5cGUuZmVhdHVyZXMuY29uY2F0KFtcbiAgICB7XG4gICAgICAgIG5hbWU6IFwiT2RkIEV2ZW4gUmF0aW9uXCIsXG4gICAgICAgIGZ1bmN0aW9uOiBcIm9kZF9ldmVuX3JhdGlvXCIsXG4gICAgICAgIHN1Yl9mZWF0dXJlczogW10sXG4gICAgICAgIHBhcmFtZXRlcnM6IFtdLFxuICAgICAgICByZXR1cm5zOiBcIm51bWJlclwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6IFwiTm9pc2luZXNzXCIsXG4gICAgICAgIGZ1bmN0aW9uOiBcIm5vaXNpbmVzc1wiLFxuICAgICAgICBzdWJfZmVhdHVyZXM6IFtdLFxuICAgICAgICBwYXJhbWV0ZXJzOiBbXSxcbiAgICAgICAgcmV0dXJuczogXCJudW1iZXJcIlxuICAgIH1cbl0pO1xuIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZ3Mvb2JqZWN0cy9QZWFrU3BlY3RydW1EYXRhLmQudHNcIiAvPlxuaW1wb3J0IHtTcGVjdHJ1bURhdGF9IGZyb20gXCIuL1NwZWN0cnVtRGF0YVwiO1xuaW1wb3J0IHtIYXJtb25pY1NwZWN0cnVtRGF0YX0gZnJvbSBcIi4vSGFybW9uaWNTcGVjdHJ1bURhdGFcIjtcbmltcG9ydCB7eHRyYWN0X3NwZWN0cmFsX2luaGFybW9uaWNpdHl9IGZyb20gXCIuLi9mdW5jdGlvbnMveHRyYWN0X3NwZWN0cmFsX2luaGFybW9uaWNpdHlcIjtcbmltcG9ydCB7eHRyYWN0X2hhcm1vbmljX3NwZWN0cnVtfSBmcm9tIFwiLi4vZnVuY3Rpb25zL3h0cmFjdF9oYXJtb25pY19zcGVjdHJ1bVwiO1xuXG5cbmV4cG9ydCBjbGFzcyBQZWFrU3BlY3RydW1EYXRhIGV4dGVuZHMgU3BlY3RydW1EYXRhIHtcbiAgICBzcGVjdHJhbF9pbmhhcm1vbmljaXR5KCkge1xuICAgICAgICBpZiAodGhpcy5yZXN1bHQuc3BlY3RyYWxfaW5oYXJtb25pY2l0eSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLnJlc3VsdC5zcGVjdHJhbF9pbmhhcm1vbmljaXR5ID0geHRyYWN0X3NwZWN0cmFsX2luaGFybW9uaWNpdHkodGhpcy5kYXRhLCB0aGlzLnNhbXBsZVJhdGUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnJlc3VsdC5zcGVjdHJhbF9pbmhhcm1vbmljaXR5O1xuICAgIH1cblxuICAgIGhhcm1vbmljX3NwZWN0cnVtKHRocmVzaG9sZCkge1xuICAgICAgICBpZiAodGhpcy5yZXN1bHQuaGFybW9uaWNfc3BlY3RydW0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuZjAgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3BlY3RyYWxfZnVuZGFtZW50YWwodGhpcy5kYXRhLCB0aGlzLnNhbXBsZVJhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5yZXN1bHQuaGFybW9uaWNfc3BlY3RydW0gPSBuZXcgSGFybW9uaWNTcGVjdHJ1bURhdGEodGhpcy5sZW5ndGgsIHRoaXMuc2FtcGxlUmF0ZSwgdGhpcyk7XG4gICAgICAgICAgICB2YXIgaHMgPSB4dHJhY3RfaGFybW9uaWNfc3BlY3RydW0odGhpcy5kYXRhLCB0aGlzLmYwLCB0aHJlc2hvbGQpO1xuICAgICAgICAgICAgdGhpcy5yZXN1bHQuaGFybW9uaWNfc3BlY3RydW0uY29weURhdGFGcm9tKGhzLnN1YmFycmF5KDAsIHRoaXMubGVuZ3RoKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucmVzdWx0Lmhhcm1vbmljX3NwZWN0cnVtO1xuICAgIH1cbn1cblxuUGVha1NwZWN0cnVtRGF0YS5wcm90b3R5cGUuZmVhdHVyZXMgPSBTcGVjdHJ1bURhdGEucHJvdG90eXBlLmZlYXR1cmVzLmNvbmNhdChbXG4gICAge1xuICAgICAgICBuYW1lOiBcIlNwZWN0cmFsIEluaGFybW9uaWNpdHlcIixcbiAgICAgICAgZnVuY3Rpb246IFwic3BlY3RyYWxfaW5oYXJtb25pY2l0eVwiLFxuICAgICAgICBzdWJfZmVhdHVyZXM6IFtcImYwXCJdLFxuICAgICAgICBwYXJhbWV0ZXJzOiBbXSxcbiAgICAgICAgcmV0dXJuczogXCJudW1iZXJcIlxufSwge1xuICAgICAgICBuYW1lOiBcIkhhcm1vbmljIFNwZWN0cnVtXCIsXG4gICAgICAgIGZ1bmN0aW9uOiBcImhhcm1vbmljX3NwZWN0cnVtXCIsXG4gICAgICAgIHN1Yl9mZWF0dXJlczogW10sXG4gICAgICAgIHBhcmFtZXRlcnM6IFt7XG4gICAgICAgICAgICBuYW1lOiBcIlRocmVzaG9sZFwiLFxuICAgICAgICAgICAgdW5pdDogXCJcIixcbiAgICAgICAgICAgIHR5cGU6IFwibnVtYmVyXCIsXG4gICAgICAgICAgICBtaW5pbXVtOiAwLFxuICAgICAgICAgICAgbWF4aW11bTogMTAwLFxuICAgICAgICAgICAgZGVmYXVsdDogMzBcbiAgICB9XSxcbiAgICAgICAgcmV0dXJuczogXCJIYXJtb25pY1NwZWN0cnVtRGF0YVwiXG59XSk7XG4iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy9vYmplY3RzL1NwZWN0cnVtRGF0YS5kLnRzXCIgLz5cbmltcG9ydCB7RGF0YVByb3RvdHlwZX0gZnJvbSBcIi4vRGF0YVByb3RvdHlwZVwiO1xuaW1wb3J0IHtQZWFrU3BlY3RydW1EYXRhfSBmcm9tIFwiLi9QZWFrU3BlY3RydW1EYXRhXCI7XG5pbXBvcnQge3h0cmFjdF9pbml0X2Jhcmt9IGZyb20gXCIuLi9mdW5jdGlvbnMveHRyYWN0X2luaXRfYmFya1wiO1xuaW1wb3J0IHt4dHJhY3RfYXJyYXlfbWlufSBmcm9tIFwiLi4vZnVuY3Rpb25zL3h0cmFjdF9hcnJheV9taW5cIjtcbmltcG9ydCB7eHRyYWN0X2FycmF5X21heH0gZnJvbSBcIi4uL2Z1bmN0aW9ucy94dHJhY3RfYXJyYXlfbWF4XCI7XG5pbXBvcnQge3h0cmFjdF9hcnJheV9zdW19IGZyb20gXCIuLi9mdW5jdGlvbnMveHRyYWN0X2FycmF5X3N1bVwiO1xuaW1wb3J0IHt4dHJhY3Rfc3BlY3RyYWxfY2VudHJvaWR9IGZyb20gXCIuLi9mdW5jdGlvbnMveHRyYWN0X3NwZWN0cmFsX2NlbnRyb2lkXCI7XG5pbXBvcnQge3h0cmFjdF9zcGVjdHJhbF9tZWFufSBmcm9tIFwiLi4vZnVuY3Rpb25zL3h0cmFjdF9zcGVjdHJhbF9tZWFuXCI7XG5pbXBvcnQge3h0cmFjdF9zcGVjdHJhbF92YXJpYW5jZX0gZnJvbSBcIi4uL2Z1bmN0aW9ucy94dHJhY3Rfc3BlY3RyYWxfdmFyaWFuY2VcIjtcbmltcG9ydCB7eHRyYWN0X3NwZWN0cmFsX3NwcmVhZH0gZnJvbSBcIi4uL2Z1bmN0aW9ucy94dHJhY3Rfc3BlY3RyYWxfc3ByZWFkXCI7XG5pbXBvcnQge3h0cmFjdF9zcGVjdHJhbF9zdGFuZGFyZF9kZXZpYXRpb259IGZyb20gXCIuLi9mdW5jdGlvbnMveHRyYWN0X3NwZWN0cmFsX3N0YW5kYXJkX2RldmlhdGlvblwiO1xuaW1wb3J0IHt4dHJhY3Rfc3BlY3RyYWxfc2tld25lc3N9IGZyb20gXCIuLi9mdW5jdGlvbnMveHRyYWN0X3NwZWN0cmFsX3NrZXduZXNzXCI7XG5pbXBvcnQge3h0cmFjdF9zcGVjdHJhbF9rdXJ0b3Npc30gZnJvbSBcIi4uL2Z1bmN0aW9ucy94dHJhY3Rfc3BlY3RyYWxfa3VydG9zaXNcIjtcbmltcG9ydCB7eHRyYWN0X2lycmVndWxhcml0eV9rfSBmcm9tIFwiLi4vZnVuY3Rpb25zL3h0cmFjdF9pcnJlZ3VsYXJpdHlfa1wiO1xuaW1wb3J0IHt4dHJhY3RfaXJyZWd1bGFyaXR5X2p9IGZyb20gXCIuLi9mdW5jdGlvbnMveHRyYWN0X2lycmVndWxhcml0eV9qXCI7XG5pbXBvcnQge3h0cmFjdF90cmlzdGltdWx1c18xLCB4dHJhY3RfdHJpc3RpbXVsdXNfMiwgeHRyYWN0X3RyaXN0aW11bHVzXzN9IGZyb20gXCIuLi9mdW5jdGlvbnMveHRyYWN0X3RyaXN0aW11bHVzXCI7XG5pbXBvcnQge3h0cmFjdF9zbW9vdGhuZXNzfSBmcm9tIFwiLi4vZnVuY3Rpb25zL3h0cmFjdF9zbW9vdGhuZXNzXCI7XG5pbXBvcnQge3h0cmFjdF9yb2xsb2ZmfSBmcm9tIFwiLi4vZnVuY3Rpb25zL3h0cmFjdF9yb2xsb2ZmXCI7XG5pbXBvcnQge3h0cmFjdF9sb3VkbmVzc30gZnJvbSBcIi4uL2Z1bmN0aW9ucy94dHJhY3RfbG91ZG5lc3NcIjtcbmltcG9ydCB7eHRyYWN0X3NoYXJwbmVzc30gZnJvbSBcIi4uL2Z1bmN0aW9ucy94dHJhY3Rfc2hhcnBuZXNzXCI7XG5pbXBvcnQge3h0cmFjdF9mbGF0bmVzc30gZnJvbSBcIi4uL2Z1bmN0aW9ucy94dHJhY3RfZmxhdG5lc3NcIjtcbmltcG9ydCB7eHRyYWN0X2ZsYXRuZXNzX2RifSBmcm9tIFwiLi4vZnVuY3Rpb25zL3h0cmFjdF9mbGF0bmVzc19kYlwiO1xuaW1wb3J0IHt4dHJhY3RfdG9uYWxpdHl9IGZyb20gXCIuLi9mdW5jdGlvbnMveHRyYWN0X3RvbmFsaXR5XCI7XG5pbXBvcnQge3h0cmFjdF9jcmVzdH0gZnJvbSBcIi4uL2Z1bmN0aW9ucy94dHJhY3RfY3Jlc3RcIjtcbmltcG9ydCB7eHRyYWN0X3NwZWN0cmFsX3Nsb3BlfSBmcm9tIFwiLi4vZnVuY3Rpb25zL3h0cmFjdF9zcGVjdHJhbF9zbG9wZVwiO1xuaW1wb3J0IHt4dHJhY3Rfc3BlY3RyYWxfZnVuZGFtZW50YWx9IGZyb20gXCIuLi9mdW5jdGlvbnMveHRyYWN0X3NwZWN0cmFsX2Z1bmRhbWVudGFsXCI7XG5pbXBvcnQge3h0cmFjdF9ub256ZXJvX2NvdW50fSBmcm9tIFwiLi4vZnVuY3Rpb25zL3h0cmFjdF9ub256ZXJvX2NvdW50XCI7XG5pbXBvcnQge3h0cmFjdF9ocHN9IGZyb20gXCIuLi9mdW5jdGlvbnMveHRyYWN0X2hwc1wiO1xuaW1wb3J0IHt4dHJhY3RfbWZjY30gZnJvbSBcIi4uL2Z1bmN0aW9ucy94dHJhY3RfbWZjY1wiO1xuaW1wb3J0IHt4dHJhY3RfZGN0XzJ9IGZyb20gXCIuLi9mdW5jdGlvbnMveHRyYWN0X2RjdF8yXCI7XG5pbXBvcnQge3h0cmFjdF9iYXJrX2NvZWZmaWNpZW50c30gZnJvbSBcIi4uL2Z1bmN0aW9ucy94dHJhY3RfYmFya19jb2VmZmljaWVudHNcIjtcbmltcG9ydCB7eHRyYWN0X2Nocm9tYX0gZnJvbSBcIi4uL2Z1bmN0aW9ucy94dHJhY3RfY2hyb21hXCI7XG5pbXBvcnQge3h0cmFjdF9wZWFrX3NwZWN0cnVtfSBmcm9tIFwiLi4vZnVuY3Rpb25zL3h0cmFjdF9wZWFrX3NwZWN0cnVtXCI7XG5cbmV4cG9ydCBjbGFzcyBTcGVjdHJ1bURhdGEgZXh0ZW5kcyBEYXRhUHJvdG90eXBlIHtcbiAgICBjb25zdHJ1Y3RvcihOLCBzYW1wbGVSYXRlLCBwYXJlbnQpIHtcbiAgICAgICAgaWYgKE4gPT09IHVuZGVmaW5lZCB8fCBOIDw9IDApIHtcbiAgICAgICAgICAgIHRocm93IChcIlNwZWN0cnVtRGF0YSBjb25zdHJ1Y3RvciByZXF1aXJlcyBOIHRvIGJlIGEgZGVmaW5lZCwgd2hvbGUgbnVtYmVyXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzYW1wbGVSYXRlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHNhbXBsZVJhdGUgPSBNYXRoLlBJO1xuICAgICAgICB9XG4gICAgICAgIHN1cGVyKDIqTiwgc2FtcGxlUmF0ZSk7XG4gICAgICAgIHRoaXMuX2FtcHMgPSB0aGlzLmRhdGEuc3ViYXJyYXkoMCwgTik7XG4gICAgICAgIHRoaXMuX2ZyZXFzID0gdGhpcy5kYXRhLnN1YmFycmF5KE4sIDIgKiBOKTtcbiAgICAgICAgdGhpcy5fbGVuZ3RoID0gTjtcbiAgICAgICAgdGhpcy5fZjAgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuX21mY2MgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuX2JhcmsgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuX2RjdCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5fY2hyb21hID0gdW5kZWZpbmVkO1xuXG4gICAgICAgIHRoaXMuY29tcHV0ZUZyZXF1ZW5jaWVzKCk7XG4gICAgfVxuICAgIGNvbXB1dGVGcmVxdWVuY2llcyAoKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuX2ZyZXFzW2ldID0gKGkgLyB0aGlzLl9sZW5ndGgpICogKHRoaXMuc2FtcGxlUmF0ZSAvIDIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldCBzYW1wbGVSYXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2FtcGxlUmF0ZTtcbiAgICB9XG4gICAgc2V0IHNhbXBsZVJhdGUoZnMpIHtcbiAgICAgICAgaWYgKHRoaXMuX3NhbXBsZVJhdGUgPT09IE1hdGguUEkpIHtcbiAgICAgICAgICAgIHRoaXMuX3NhbXBsZVJhdGUgPSBmcztcbiAgICAgICAgICAgIHRoaXMuY29tcHV0ZUZyZXF1ZW5jaWVzKCk7XG4gICAgICAgICAgICBpZiAodGhpcy5fYmFyayAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fYmFyayA9IHh0cmFjdF9pbml0X2JhcmsodGhpcy5fbGVuZ3RoLCB0aGlzLl9zYW1wbGVSYXRlICk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IChcIkNhbm5vdCBzZXQgb25lLXRpbWUgdmFyaWFibGVcIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgZjAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9mMDtcbiAgICB9XG5cbiAgICBzZXQgZjAoZjApIHtcbiAgICAgICAgaWYgKHR5cGVvZiBmMCA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgdGhpcy5fZjAgPSBmMDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldCBsZW5ndGgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9sZW5ndGg7XG4gICAgfVxuXG4gICAgaW5pdF9tZmNjKG51bV9iYW5kcywgZnJlcV9taW4sIGZyZXFfbWF4LCBzdHlsZSkge1xuICAgICAgICB0aGlzLl9tZmNjID0gdGhpcy5jcmVhdGVNZmNjQ29lZmZpY2llbnRzKHRoaXMuX2xlbmd0aCwgdGhpcy5zYW1wbGVSYXRlICogMC41LCBzdHlsZSwgZnJlcV9taW4sIGZyZXFfbWF4LCBudW1fYmFuZHMpO1xuICAgICAgICB0aGlzLnJlc3VsdC5tZmNjID0gdW5kZWZpbmVkO1xuICAgICAgICByZXR1cm4gdGhpcy5fbWZjYztcbiAgICB9XG5cbiAgICBpbml0X2JhcmsobnVtQmFuZHMpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBudW1CYW5kcyAhPT0gXCJudW1iZXJcIiB8fCBudW1CYW5kcyA8IDAgfHwgbnVtQmFuZHMgPiAyNikge1xuICAgICAgICAgICAgbnVtQmFuZHMgPSAyNjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9iYXJrID0gdGhpcy5jcmVhdGVCYXJrQ29lZmZpY2llbnRzKHRoaXMuX2xlbmd0aCwgdGhpcy5fRnMsIG51bUJhbmRzKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Jhcms7XG4gICAgfVxuXG4gICAgaW5pdF9jaHJvbWEobmJpbnMsIEE0NDAsIGZfY3RyLCBvY3R3aWR0aCkge1xuICAgICAgICBpZiAodHlwZW9mIG5iaW5zICE9PSBcIm51bWJlclwiIHx8IG5iaW5zIDw9IDEpIHtcbiAgICAgICAgICAgIG5iaW5zID0gMTI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBBNDQwICE9PSBcIm51bWJlclwiIHx8IEE0NDAgPD0gMjcuNSkge1xuICAgICAgICAgICAgICAgQTQ0MCA9IDQ0MDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIGZfY3RyICE9PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICAgICBmX2N0ciA9IDEwMDA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBvY3R3aWR0aCAhPT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgICAgb2N0d2lkdGggPSAxO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2Nocm9tYSA9IHRoaXMuY3JlYXRlQ2hyb21hQ29lZmZpY2llbnRzKHRoaXMuX2xlbmd0aCwgdGhpcy5fRnMsIG5iaW5zLCBBNDQwLCBmX2N0ciwgb2N0d2lkdGgpO1xuICAgICAgICB0aGlzLnJlc3VsdC5jaHJvbWEgPSB1bmRlZmluZWQ7XG4gICAgICAgIHJldHVybiB0aGlzLl9jaHJvbWE7XG4gICAgfVxuXG4gICAgbWluaW11bSgpIHtcbiAgICAgICAgaWYgKHRoaXMucmVzdWx0Lm1pbmltdW0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5yZXN1bHQubWluaW11bSA9IHh0cmFjdF9hcnJheV9taW4odGhpcy5fYW1wcyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucmVzdWx0Lm1pbmltdW07XG4gICAgfVxuXG4gICAgbWF4aW11bSgpIHtcbiAgICAgICAgaWYgKHRoaXMucmVzdWx0Lm1heGltdW0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5yZXN1bHQubWF4aW11bSA9IHh0cmFjdF9hcnJheV9tYXgodGhpcy5fYW1wcyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucmVzdWx0Lm1heGltdW07XG4gICAgfVxuXG4gICAgc3VtKCkge1xuICAgICAgICBpZiAodGhpcy5yZXN1bHQuc3VtID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMucmVzdWx0LnN1bSA9IHh0cmFjdF9hcnJheV9zdW0odGhpcy5fYW1wcyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucmVzdWx0LnN1bTtcbiAgICB9XG5cbiAgICBzcGVjdHJhbF9jZW50cm9pZCgpIHtcbiAgICAgICAgaWYgKHRoaXMucmVzdWx0LnNwZWN0cmFsX2NlbnRyb2lkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMucmVzdWx0LnNwZWN0cmFsX2NlbnRyb2lkID0geHRyYWN0X3NwZWN0cmFsX2NlbnRyb2lkKHRoaXMuZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucmVzdWx0LnNwZWN0cmFsX2NlbnRyb2lkO1xuICAgIH1cblxuICAgIHNwZWN0cmFsX21lYW4gKCkge1xuICAgICAgICBpZiAodGhpcy5yZXN1bHQuc3BlY3RyYWxfbWVhbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLnJlc3VsdC5zcGVjdHJhbF9tZWFuID0geHRyYWN0X3NwZWN0cmFsX21lYW4odGhpcy5kYXRhKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5yZXN1bHQuc3BlY3RyYWxfbWVhbjtcbiAgICB9XG5cbiAgICBzcGVjdHJhbF92YXJpYW5jZSAoKSB7XG4gICAgICAgIGlmICh0aGlzLnJlc3VsdC5zcGVjdHJhbF92YXJpYW5jZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLnJlc3VsdC5zcGVjdHJhbF92YXJpYW5jZSA9IHh0cmFjdF9zcGVjdHJhbF92YXJpYW5jZSh0aGlzLmRhdGEsIHRoaXMuc3BlY3RyYWxfY2VudHJvaWQoKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucmVzdWx0LnNwZWN0cmFsX3ZhcmlhbmNlO1xuICAgIH1cblxuICAgIHNwZWN0cmFsX3NwcmVhZCgpIHtcbiAgICAgICAgaWYgKHRoaXMucmVzdWx0LnNwZWN0cmFsX3NwcmVhZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLnJlc3VsdC5zcGVjdHJhbF9zcHJlYWQgPSB4dHJhY3Rfc3BlY3RyYWxfc3ByZWFkKHRoaXMuZGF0YSwgdGhpcy5zcGVjdHJhbF9jZW50cm9pZCgpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5yZXN1bHQuc3BlY3RyYWxfc3ByZWFkO1xuICAgIH1cblxuICAgIHNwZWN0cmFsX3N0YW5kYXJkX2RldmlhdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMucmVzdWx0LnNwZWN0cmFsX3N0YW5kYXJkX2RldmlhdGlvbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLnJlc3VsdC5zcGVjdHJhbF9zdGFuZGFyZF9kZXZpYXRpb24gPSB4dHJhY3Rfc3BlY3RyYWxfc3RhbmRhcmRfZGV2aWF0aW9uKHRoaXMuZGF0YSwgdGhpcy5zcGVjdHJhbF92YXJpYW5jZSgpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5yZXN1bHQuc3BlY3RyYWxfc3RhbmRhcmRfZGV2aWF0aW9uO1xuICAgIH1cblxuICAgIHNwZWN0cmFsX3NrZXduZXNzKCkge1xuICAgICAgICBpZiAodGhpcy5yZXN1bHQuc3BlY3RyYWxfc2tld25lc3MgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5yZXN1bHQuc3BlY3RyYWxfc2tld25lc3MgPSB4dHJhY3Rfc3BlY3RyYWxfc2tld25lc3ModGhpcy5kYXRhLCB0aGlzLnNwZWN0cmFsX2NlbnRyb2lkKCksIHRoaXMuc3BlY3RyYWxfc3RhbmRhcmRfZGV2aWF0aW9uKCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnJlc3VsdC5zcGVjdHJhbF9za2V3bmVzcztcbiAgICB9XG5cbiAgICBzcGVjdHJhbF9rdXJ0b3NpcygpIHtcbiAgICAgICAgaWYgKHRoaXMucmVzdWx0LnNwZWN0cmFsX2t1cnRvc2lzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMucmVzdWx0LnNwZWN0cmFsX2t1cnRvc2lzID0geHRyYWN0X3NwZWN0cmFsX2t1cnRvc2lzKHRoaXMuZGF0YSwgdGhpcy5zcGVjdHJhbF9jZW50cm9pZCgpLCB0aGlzLnNwZWN0cmFsX3N0YW5kYXJkX2RldmlhdGlvbigpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5yZXN1bHQuc3BlY3RyYWxfa3VydG9zaXM7XG4gICAgfVxuXG4gICAgaXJyZWd1bGFyaXR5X2sgKCkge1xuICAgICAgICBpZiAodGhpcy5yZXN1bHQuaXJyZWd1bGFyaXR5X2sgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5yZXN1bHQuaXJyZWd1bGFyaXR5X2sgPSB4dHJhY3RfaXJyZWd1bGFyaXR5X2sodGhpcy5kYXRhKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5yZXN1bHQuaXJyZWd1bGFyaXR5X2s7XG4gICAgfVxuXG4gICAgaXJyZWd1bGFyaXR5X2ogKCkge1xuICAgICAgICBpZiAodGhpcy5yZXN1bHQuaXJyZWd1bGFyaXR5X2ogPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5yZXN1bHQuaXJyZWd1bGFyaXR5X2ogPSB4dHJhY3RfaXJyZWd1bGFyaXR5X2oodGhpcy5kYXRhKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5yZXN1bHQuaXJyZWd1bGFyaXR5X2o7XG4gICAgfVxuXG4gICAgdHJpc3RpbXVsdXNfMSAoKSB7XG4gICAgICAgIGlmICh0aGlzLl9mMCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLnNwZWN0cmFsX2Z1bmRhbWVudGFsKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucmVzdWx0LnRyaXN0aW11bHVzXzEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5yZXN1bHQudHJpc3RpbXVsdXNfMSA9IHh0cmFjdF90cmlzdGltdWx1c18xKHRoaXMuZGF0YSwgdGhpcy5fZjApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnJlc3VsdC50cmlzdGltdWx1c18xO1xuICAgIH1cbiAgICB0cmlzdGltdWx1c18yICgpIHtcbiAgICAgICAgaWYgKHRoaXMuX2YwID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuc3BlY3RyYWxfZnVuZGFtZW50YWwoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5yZXN1bHQudHJpc3RpbXVsdXNfMiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLnJlc3VsdC50cmlzdGltdWx1c18yID0geHRyYWN0X3RyaXN0aW11bHVzXzIodGhpcy5kYXRhLCB0aGlzLl9mMCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucmVzdWx0LnRyaXN0aW11bHVzXzI7XG4gICAgfVxuICAgIHRyaXN0aW11bHVzXzMgKCkge1xuICAgICAgICBpZiAodGhpcy5fZjAgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5zcGVjdHJhbF9mdW5kYW1lbnRhbCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnJlc3VsdC50cmlzdGltdWx1c18zID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMucmVzdWx0LnRyaXN0aW11bHVzXzMgPSB4dHJhY3RfdHJpc3RpbXVsdXNfMyh0aGlzLmRhdGEsIHRoaXMuX2YwKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5yZXN1bHQudHJpc3RpbXVsdXNfMztcbiAgICB9XG5cbiAgICBzbW9vdGhuZXNzKCkge1xuICAgICAgICBpZiAodGhpcy5yZXN1bHQuc21vb3RobmVzcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLnJlc3VsdC5zbW9vdGhuZXNzID0geHRyYWN0X3Ntb290aG5lc3ModGhpcy5kYXRhKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5yZXN1bHQuc21vb3RobmVzcztcbiAgICB9XG5cbiAgICByb2xsb2ZmKHRocmVzaG9sZCkge1xuICAgICAgICBpZiAodGhpcy5yZXN1bHQucm9sbG9mZiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLnJlc3VsdC5yb2xsb2ZmID0geHRyYWN0X3JvbGxvZmYodGhpcy5kYXRhLCB0aGlzLnNhbXBsZVJhdGUsIHRocmVzaG9sZCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucmVzdWx0LnJvbGxvZmY7XG4gICAgfVxuXG4gICAgbG91ZG5lc3MoKSB7XG4gICAgICAgIGlmICh0aGlzLnJlc3VsdC5sb3VkbmVzcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLnJlc3VsdC5sb3VkbmVzcyA9IHh0cmFjdF9sb3VkbmVzcyh0aGlzLmJhcmtfY29lZmZpY2llbnRzKCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnJlc3VsdC5sb3VkbmVzcztcbiAgICB9XG5cbiAgICBzaGFycG5lc3MgKCkge1xuICAgICAgICBpZiAodGhpcy5yZXN1bHQuc2hhcnBuZXNzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMucmVzdWx0LnNoYXJwbmVzcyA9IHh0cmFjdF9zaGFycG5lc3ModGhpcy5iYXJrX2NvZWZmaWNpZW50cygpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5yZXN1bHQuc2hhcnBuZXNzO1xuICAgIH1cblxuICAgIGZsYXRuZXNzICgpIHtcbiAgICAgICAgaWYgKHRoaXMucmVzdWx0LmZsYXRuZXNzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMucmVzdWx0LmZsYXRuZXNzID0geHRyYWN0X2ZsYXRuZXNzKHRoaXMuZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucmVzdWx0LmZsYXRuZXNzO1xuICAgIH1cblxuICAgIGZsYXRuZXNzX2RiICgpIHtcbiAgICAgICAgaWYgKHRoaXMucmVzdWx0LmZsYXRuZXNzX2RiID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMucmVzdWx0LmZsYXRuZXNzX2RiID0geHRyYWN0X2ZsYXRuZXNzX2RiKHRoaXMuZGF0YSwgdGhpcy5mbGF0bmVzcygpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5yZXN1bHQuZmxhdG5lc3NfZGI7XG4gICAgfVxuXG4gICAgdG9uYWxpdHkoKSB7XG4gICAgICAgIGlmICh0aGlzLnJlc3VsdC50b25hbGl0eSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLnJlc3VsdC50b25hbGl0eSA9IHh0cmFjdF90b25hbGl0eSh0aGlzLmRhdGEsIHRoaXMuZmxhdG5lc3NfZGIoKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucmVzdWx0LnRvbmFsaXR5O1xuICAgIH1cblxuICAgIHNwZWN0cmFsX2NyZXN0X2ZhY3RvciAoKSB7XG4gICAgICAgIGlmICh0aGlzLnJlc3VsdC5zcGVjdHJhbF9jcmVzdF9mYWN0b3IgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5yZXN1bHQuc3BlY3RyYWxfY3Jlc3RfZmFjdG9yID0geHRyYWN0X2NyZXN0KHRoaXMuX2FtcHMsIHRoaXMubWF4aW11bSgpLCB0aGlzLnNwZWN0cmFsX21lYW4oKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucmVzdWx0LnNwZWN0cmFsX2NyZXN0X2ZhY3RvcjtcbiAgICB9XG5cbiAgICBzcGVjdHJhbF9zbG9wZSgpIHtcbiAgICAgICAgaWYgKHRoaXMucmVzdWx0LnNwZWN0cmFsX3Nsb3BlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMucmVzdWx0LnNwZWN0cmFsX3Nsb3BlID0geHRyYWN0X3NwZWN0cmFsX3Nsb3BlKHRoaXMuZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucmVzdWx0LnNwZWN0cmFsX3Nsb3BlO1xuICAgIH1cblxuICAgIHNwZWN0cmFsX2Z1bmRhbWVudGFsKCkge1xuICAgICAgICBpZiAodGhpcy5yZXN1bHQuc3BlY3RyYWxfZnVuZGFtZW50YWwgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5yZXN1bHQuc3BlY3RyYWxfZnVuZGFtZW50YWwgPSB4dHJhY3Rfc3BlY3RyYWxfZnVuZGFtZW50YWwodGhpcy5kYXRhLCBfRnMpO1xuICAgICAgICAgICAgdGhpcy5mMCA9IHRoaXMucmVzdWx0LnNwZWN0cmFsX2Z1bmRhbWVudGFsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnJlc3VsdC5zcGVjdHJhbF9mdW5kYW1lbnRhbDtcbiAgICB9XG5cbiAgICBub256ZXJvX2NvdW50ICgpIHtcbiAgICAgICAgaWYgKHRoaXMucmVzdWx0Lm5vbnplcm9fY291bnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5yZXN1bHQubm9uemVyb19jb3VudCA9IHh0cmFjdF9ub256ZXJvX2NvdW50KF9hbXBzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5yZXN1bHQubm9uemVyb19jb3VudDtcbiAgICB9XG5cbiAgICBocHMgKCkge1xuICAgICAgICBpZiAodGhpcy5yZXN1bHQuaHBzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMucmVzdWx0LmhwcyA9IHh0cmFjdF9ocHModGhpcy5kYXRhKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5yZXN1bHQuaHBzO1xuICAgIH1cblxuICAgIG1mY2MobnVtX2JhbmRzLCBmcmVxX21pbiwgZnJlcV9tYXgpIHtcbiAgICAgICAgaWYgKHRoaXMuX21mY2MgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaWYgKGZyZXFfbWluID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyAoXCJSdW4gaW5pdF9tZmNjKG51bV9iYW5kcywgZnJlcV9taW4sIGZyZXFfbWF4LCBzdHlsZSkgZmlyc3RcIik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuX21mY2MgPSB0aGlzLmluaXRfbWZjYyhudW1fYmFuZHMsIGZyZXFfbWluLCBmcmVxX21heCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucmVzdWx0Lm1mY2MgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5yZXN1bHQubWZjYyA9IHh0cmFjdF9tZmNjKHRoaXMuZGF0YSwgdGhpcy5fbWZjYyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucmVzdWx0Lm1mY2M7XG4gICAgfVxuXG4gICAgZGN0ICgpIHtcbiAgICAgICAgaWYgKHRoaXMuX2RjdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLl9kY3QgPSB0aGlzLmNyZWF0ZURjdENvZWZmaWNpZW50cyh0aGlzLl9sZW5ndGgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnJlc3VsdC5kY3QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5yZXN1bHQuZGN0ID0geHRyYWN0X2RjdF8yKHRoaXMuX2FtcHMsdGhpcy5fZGN0KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5yZXN1bHQuZGN0O1xuICAgIH1cblxuICAgIGJhcmtfY29lZmZpY2llbnRzKG51bV9iYW5kcykge1xuICAgICAgICBpZiAodGhpcy5yZXN1bHQuYmFya19jb2VmZmljaWVudHMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuX2JhcmsgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2JhcmsgPSB0aGlzLmluaXRfYmFyayhudW1fYmFuZHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5yZXN1bHQuYmFya19jb2VmZmljaWVudHMgPSB4dHJhY3RfYmFya19jb2VmZmljaWVudHModGhpcy5kYXRhLCB0aGlzLl9iYXJrKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5yZXN1bHQuYmFya19jb2VmZmljaWVudHM7XG4gICAgfVxuXG4gICAgY2hyb21hKG5iaW5zLCBBNDQwLCBmX2N0ciwgb2N0d2lkdGgpIHtcbiAgICAgICAgaWYodGhpcy5yZXN1bHQuY2hyb21hID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9jaHJvbWEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2Nocm9tYSA9IHRoaXMuaW5pdF9jaHJvbWEobmJpbnMsIEE0NDAsIGZfY3RyLCBvY3R3aWR0aCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnJlc3VsdC5jaHJvbWEgPSB4dHJhY3RfY2hyb21hKHRoaXMuZGF0YSwgdGhpcy5fY2hyb21hKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5yZXN1bHQuY2hyb21hO1xuICAgIH1cblxuICAgIHBlYWtfc3BlY3RydW0odGhyZXNob2xkKSB7XG4gICAgICAgIGlmICh0aGlzLnJlc3VsdC5wZWFrX3NwZWN0cnVtID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMucmVzdWx0LnBlYWtfc3BlY3RydW0gPSBuZXcgUGVha1NwZWN0cnVtRGF0YSh0aGlzLl9sZW5ndGgsIHRoaXMuc2FtcGxlUmF0ZSwgdGhpcyk7XG4gICAgICAgICAgICB2YXIgcHMgPSB4dHJhY3RfcGVha19zcGVjdHJ1bSh0aGlzLmRhdGEsIHRoaXMuc2FtcGxlUmF0ZSAvIHRoaXMuX2xlbmd0aCwgdGhyZXNob2xkKTtcbiAgICAgICAgICAgIHRoaXMucmVzdWx0LnBlYWtfc3BlY3RydW0uY29weURhdGFGcm9tKHBzLnN1YmFycmF5KDAsIHRoaXMuX2xlbmd0aCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnJlc3VsdC5wZWFrX3NwZWN0cnVtO1xuICAgIH1cbn1cblxuU3BlY3RydW1EYXRhLnByb3RvdHlwZS5mZWF0dXJlcyA9IFtcbiAgICB7XG4gICAgICAgIG5hbWU6IFwiTWluaW11bVwiLFxuICAgICAgICBmdW5jdGlvbjogXCJtaW5pbXVtXCIsXG4gICAgICAgIHN1Yl9mZWF0dXJlczogW10sXG4gICAgICAgIHBhcmFtZXRlcnM6IFtdLFxuICAgICAgICByZXR1cm5zOiBcIm51bWJlclwiXG59LCB7XG4gICAgICAgIG5hbWU6IFwiTWF4aW11bVwiLFxuICAgICAgICBmdW5jdGlvbjogXCJtYXhpbXVtXCIsXG4gICAgICAgIHN1Yl9mZWF0dXJlczogW10sXG4gICAgICAgIHBhcmFtZXRlcnM6IFtdLFxuICAgICAgICByZXR1cm5zOiBcIm51bWJlclwiXG59LCB7XG4gICAgICAgIG5hbWU6IFwiU3VtXCIsXG4gICAgICAgIGZ1bmN0aW9uOiBcInN1bVwiLFxuICAgICAgICBzdWJfZmVhdHVyZXM6IFtdLFxuICAgICAgICBwYXJhbWV0ZXJzOiBbXSxcbiAgICAgICAgcmV0dXJuczogXCJudW1iZXJcIlxufSwge1xuICAgICAgICBuYW1lOiBcIlNwZWN0cmFsIENlbnRyb2lkXCIsXG4gICAgICAgIGZ1bmN0aW9uOiBcInNwZWN0cmFsX2NlbnRyb2lkXCIsXG4gICAgICAgIHN1Yl9mZWF0dXJlczogW10sXG4gICAgICAgIHBhcmFtZXRlcnM6IFtdLFxuICAgICAgICByZXR1cm5zOiBcIm51bWJlclwiXG59LCB7XG4gICAgICAgIG5hbWU6IFwiU3BlY3RyYWwgTWVhblwiLFxuICAgICAgICBmdW5jdGlvbjogXCJzcGVjdHJhbF9tZWFuXCIsXG4gICAgICAgIHN1Yl9mZWF0dXJlczogW10sXG4gICAgICAgIHBhcmFtZXRlcnM6IFtdLFxuICAgICAgICByZXR1cm5zOiBcIm51bWJlclwiXG59LCB7XG4gICAgICAgIG5hbWU6IFwiU3BlY3RyYWwgVmFyaWFuY2VcIixcbiAgICAgICAgZnVuY3Rpb246IFwic3BlY3RyYWxfdmFyaWFuY2VcIixcbiAgICAgICAgc3ViX2ZlYXR1cmVzOiBbXCJzcGVjdHJhbF9tZWFuXCJdLFxuICAgICAgICBwYXJhbWV0ZXJzOiBbXSxcbiAgICAgICAgcmV0dXJuczogXCJudW1iZXJcIlxufSwge1xuICAgICAgICBuYW1lOiBcIlNwZWN0cmFsIFNwcmVhZFwiLFxuICAgICAgICBmdW5jdGlvbjogXCJzcGVjdHJhbF9zcHJlYWRcIixcbiAgICAgICAgc3ViX2ZlYXR1cmVzOiBbXCJzcGVjdHJhbF9jZW50cm9pZFwiXSxcbiAgICAgICAgcGFyYW1ldGVyczogW10sXG4gICAgICAgIHJldHVybnM6IFwibnVtYmVyXCJcbn0sIHtcbiAgICAgICAgbmFtZTogXCJTcGVjdHJhbCBTdGFuZGFyZCBEZXZpYXRpb25cIixcbiAgICAgICAgZnVuY3Rpb246IFwic3BlY3RyYWxfc3RhbmRhcmRfZGV2aWF0aW9uXCIsXG4gICAgICAgIHN1Yl9mZWF0dXJlczogW1wic3BlY3RyYWxfdmFyaWFuY2VcIl0sXG4gICAgICAgIHBhcmFtZXRlcnM6IFtdLFxuICAgICAgICByZXR1cm5zOiBcIm51bWJlclwiXG59LCB7XG4gICAgICAgIG5hbWU6IFwiU3BlY3RyYWwgU2tld25lc3NcIixcbiAgICAgICAgZnVuY3Rpb246IFwic3BlY3RyYWxfc2tld25lc3NcIixcbiAgICAgICAgc3ViX2ZlYXR1cmVzOiBbXCJzcGVjdHJhbF9tZWFuXCIsIFwic3BlY3RyYWxfc3RhbmRhcmRfZGV2aWF0aW9uXCJdLFxuICAgICAgICBwYXJhbWV0ZXJzOiBbXSxcbiAgICAgICAgcmV0dXJuczogXCJudW1iZXJcIlxufSwge1xuICAgICAgICBuYW1lOiBcIlNwZWN0cmFsIEt1cnRvc2lzXCIsXG4gICAgICAgIGZ1bmN0aW9uOiBcInNwZWN0cmFsX2t1cnRvc2lzXCIsXG4gICAgICAgIHN1Yl9mZWF0dXJlczogW1wic3BlY3RyYWxfbWVhblwiLCBcInNwZWN0cmFsX3N0YW5kYXJkX2RldmlhdGlvblwiXSxcbiAgICAgICAgcGFyYW1ldGVyczogW10sXG4gICAgICAgIHJldHVybnM6IFwibnVtYmVyXCJcbn0sIHtcbiAgICAgICAgbmFtZTogXCJJcnJlZ3VsYXJpdHkgS1wiLFxuICAgICAgICBmdW5jdGlvbjogXCJpcnJlZ3VsYXJpdHlfa1wiLFxuICAgICAgICBzdWJfZmVhdHVyZXM6IFtdLFxuICAgICAgICBwYXJhbWV0ZXJzOiBbXSxcbiAgICAgICAgcmV0dXJuczogXCJudW1iZXJcIlxufSwge1xuICAgICAgICBuYW1lOiBcIklycmVndWxhcml0eSBKXCIsXG4gICAgICAgIGZ1bmN0aW9uOiBcImlycmVndWxhcml0eV9qXCIsXG4gICAgICAgIHN1Yl9mZWF0dXJlczogW10sXG4gICAgICAgIHBhcmFtZXRlcnM6IFtdLFxuICAgICAgICByZXR1cm5zOiBcIm51bWJlclwiXG59LCB7XG4gICAgICAgIG5hbWU6IFwiVHJpc3RpbXVsdXMgMVwiLFxuICAgICAgICBmdW5jdGlvbjogXCJ0cmlzdGltdWx1c18xXCIsXG4gICAgICAgIHN1Yl9mZWF0dXJlczogW1wic3BlY3RyYWxfZnVuZGFtZW50YWxcIl0sXG4gICAgICAgIHBhcmFtZXRlcnM6IFtdLFxuICAgICAgICByZXR1cm5zOiBcIm51bWJlclwiXG59LCB7XG4gICAgICAgIG5hbWU6IFwiVHJpc3RpbXVsdXMgMlwiLFxuICAgICAgICBmdW5jdGlvbjogXCJ0cmlzdGltdWx1c18yXCIsXG4gICAgICAgIHN1Yl9mZWF0dXJlczogW1wic3BlY3RyYWxfZnVuZGFtZW50YWxcIl0sXG4gICAgICAgIHBhcmFtZXRlcnM6IFtdLFxuICAgICAgICByZXR1cm5zOiBcIm51bWJlclwiXG59LCB7XG4gICAgICAgIG5hbWU6IFwiVHJpc3RpbXVsdXMgM1wiLFxuICAgICAgICBmdW5jdGlvbjogXCJ0cmlzdGltdWx1c18zXCIsXG4gICAgICAgIHN1Yl9mZWF0dXJlczogW1wic3BlY3RyYWxfZnVuZGFtZW50YWxcIl0sXG4gICAgICAgIHBhcmFtZXRlcnM6IFtdLFxuICAgICAgICByZXR1cm5zOiBcIm51bWJlclwiXG59LCB7XG4gICAgICAgIG5hbWU6IFwiU21vb3RobmVzc1wiLFxuICAgICAgICBmdW5jdGlvbjogXCJzbW9vdGhuZXNzXCIsXG4gICAgICAgIHN1Yl9mZWF0dXJlczogW10sXG4gICAgICAgIHBhcmFtZXRlcnM6IFtdLFxuICAgICAgICByZXR1cm5zOiBcIm51bWJlclwiXG59LCB7XG4gICAgICAgIG5hbWU6IFwiUm9sbG9mZlwiLFxuICAgICAgICBmdW5jdGlvbjogXCJyb2xsb2ZmXCIsXG4gICAgICAgIHN1Yl9mZWF0dXJlczogW10sXG4gICAgICAgIHBhcmFtZXRlcnM6IFt7XG4gICAgICAgICAgICBuYW1lOiBcIlRocmVzaG9sZFwiLFxuICAgICAgICAgICAgdW5pdDogXCIlXCIsXG4gICAgICAgICAgICB0eXBlOiBcIm51bWJlclwiLFxuICAgICAgICAgICAgbWluaW11bTogMCxcbiAgICAgICAgICAgIG1heGltdW06IDEwMCxcbiAgICAgICAgICAgIGRlZmF1bHQ6IDkwXG4gICAgfV0sXG4gICAgICAgIHJldHVybnM6IFwibnVtYmVyXCJcbn0sIHtcbiAgICAgICAgbmFtZTogXCJMb3VkbmVzc1wiLFxuICAgICAgICBmdW5jdGlvbjogXCJsb3VkbmVzc1wiLFxuICAgICAgICBzdWJfZmVhdHVyZXM6IFtcImJhcmtfY29lZmZpY2llbnRzXCJdLFxuICAgICAgICBwYXJhbWV0ZXJzOiBbXSxcbiAgICAgICAgcmV0dXJuczogXCJudW1iZXJcIlxufSwge1xuICAgICAgICBuYW1lOiBcIlNoYXJwbmVzc1wiLFxuICAgICAgICBmdW5jdGlvbjogXCJzaGFycG5lc3NcIixcbiAgICAgICAgc3ViX2ZlYXR1cmVzOiBbXCJiYXJrX2NvZWZmaWNpZW50c1wiXSxcbiAgICAgICAgcGFyYW1ldGVyczogW10sXG4gICAgICAgIHJldHVybnM6IFwibnVtYmVyXCJcbn0sIHtcbiAgICAgICAgbmFtZTogXCJGbGF0bmVzc1wiLFxuICAgICAgICBmdW5jdGlvbjogXCJmbGF0bmVzc1wiLFxuICAgICAgICBzdWJfZmVhdHVyZXM6IFtdLFxuICAgICAgICBwYXJhbWV0ZXJzOiBbXSxcbiAgICAgICAgcmV0dXJuczogXCJudW1iZXJcIlxufSwge1xuICAgICAgICBuYW1lOiBcIkZsYXRuZXNzIERCXCIsXG4gICAgICAgIGZ1bmN0aW9uOiBcImZsYXRuZXNzX2RiXCIsXG4gICAgICAgIHN1Yl9mZWF0dXJlczogW1wiZmxhdG5lc3NcIl0sXG4gICAgICAgIHBhcmFtZXRlcnM6IFtdLFxuICAgICAgICByZXR1cm5zOiBcIm51bWJlclwiXG59LCB7XG4gICAgICAgIG5hbWU6IFwiVG9uYWxpdHlcIixcbiAgICAgICAgZnVuY3Rpb246IFwidG9uYWxpdHlcIixcbiAgICAgICAgc3ViX2ZlYXR1cmVzOiBbXCJmbGF0bmVzc19kYlwiXSxcbiAgICAgICAgcGFyYW1ldGVyczogW10sXG4gICAgICAgIHJldHVybnM6IFwibnVtYmVyXCJcbn0sIHtcbiAgICAgICAgbmFtZTogXCJTcGVjdHJhbCBDcmVzdCBGYWN0b3JcIixcbiAgICAgICAgZnVuY3Rpb246IFwic3BlY3RyYWxfY3Jlc3RfZmFjdG9yXCIsXG4gICAgICAgIHN1Yl9mZWF0dXJlczogW1wibWF4aW11bVwiLCBcInNwZWN0cmFsX21lYW5cIl0sXG4gICAgICAgIHBhcmFtZXRlcnM6IFtdLFxuICAgICAgICByZXR1cm5zOiBcIm51bWJlclwiXG59LCB7XG4gICAgICAgIG5hbWU6IFwiU3BlY3RyYWwgU2xvcGVcIixcbiAgICAgICAgZnVuY3Rpb246IFwic3BlY3RyYWxfc2xvcGVcIixcbiAgICAgICAgc3ViX2ZlYXR1cmVzOiBbXSxcbiAgICAgICAgcGFyYW1ldGVyczogW10sXG4gICAgICAgIHJldHVybnM6IFwibnVtYmVyXCJcbn0sIHtcbiAgICAgICAgbmFtZTogXCJGdW5kYW1lbnRhbCBGcmVxdWVuY3lcIixcbiAgICAgICAgZnVuY3Rpb246IFwic3BlY3RyYWxfZnVuZGFtZW50YWxcIixcbiAgICAgICAgc3ViX2ZlYXR1cmVzOiBbXSxcbiAgICAgICAgcGFyYW1ldGVyczogW10sXG4gICAgICAgIHJldHVybnM6IFwibnVtYmVyXCJcbn0sIHtcbiAgICAgICAgbmFtZTogXCJOb24tWmVybyBjb3VudFwiLFxuICAgICAgICBmdW5jdGlvbjogXCJub256ZXJvX2NvdW50XCIsXG4gICAgICAgIHN1Yl9mZWF0dXJlczogW10sXG4gICAgICAgIHBhcmFtZXRlcnM6IFtdLFxuICAgICAgICByZXR1cm5zOiBcIm51bWJlclwiXG59LCB7XG4gICAgICAgIG5hbWU6IFwiSFBTXCIsXG4gICAgICAgIGZ1bmN0aW9uOiBcImhwc1wiLFxuICAgICAgICBzdWJfZmVhdHVyZXM6IFtdLFxuICAgICAgICBwYXJhbWV0ZXJzOiBbXSxcbiAgICAgICAgcmV0dXJuczogXCJudW1iZXJcIlxufSwge1xuICAgICAgICBuYW1lOiBcIk1GQ0NcIixcbiAgICAgICAgZnVuY3Rpb246IFwibWZjY1wiLFxuICAgICAgICBzdWJfZmVhdHVyZXM6IFtdLFxuICAgICAgICBwYXJhbWV0ZXJzOiBbe1xuICAgICAgICAgICAgbmFtZTogXCJCYW5kIENvdW50XCIsXG4gICAgICAgICAgICB1bml0OiBcIlwiLFxuICAgICAgICAgICAgdHlwZTogXCJudW1iZXJcIixcbiAgICAgICAgICAgIG1pbmltdW06IDAsXG4gICAgICAgICAgICBtYXhpbXVtOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBkZWZhdWx0OiAyNlxuICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6IFwiTWluaW11bSBGcmVxdWVuY3lcIixcbiAgICAgICAgICAgIHVuaXQ6IFwiSHpcIixcbiAgICAgICAgICAgIHR5cGU6IFwibnVtYmVyXCIsXG4gICAgICAgICAgICBtaW5pbXVtOiAwLFxuICAgICAgICAgICAgbWF4aW11bTogdW5kZWZpbmVkLFxuICAgICAgICAgICAgZGVmYXVsdDogNDAwXG4gICAgfSwge1xuICAgICAgICAgICAgbmFtZTogXCJNYXhpbXVtIEZyZXF1ZW5jeVwiLFxuICAgICAgICAgICAgdW5pdDogXCJIelwiLFxuICAgICAgICAgICAgbWluaW11bTogMCxcbiAgICAgICAgICAgIG1heGltdW06IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGRlZmF1bHQ6IDIwMDAwXG4gICAgfV0sXG4gICAgICAgIHJldHVybnM6IFwiYXJyYXlcIlxufSwge1xuICAgICAgICBuYW1lOiBcIkNocm9tYVwiLFxuICAgICAgICBmdW5jdGlvbjogXCJjaHJvbWFcIixcbiAgICAgICAgc3ViX2ZlYXR1cmVzOiBbXSxcbiAgICAgICAgcGFyYW1ldGVyczogW3tcbiAgICAgICAgICAgIG5hbWU6IFwibmJpbnNcIixcbiAgICAgICAgICAgIHVuaXQ6IFwiXCIsXG4gICAgICAgICAgICB0eXBlOiBcIm51bWJlclwiLFxuICAgICAgICAgICAgbWluaW11bTogMixcbiAgICAgICAgICAgIG1heGltdW06IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGRlZmF1bHQ6IDEyXG4gICAgfSwge1xuICAgICAgICAgICAgbmFtZTogXCJBNDQwXCIsXG4gICAgICAgICAgICB1bml0OiBcIlwiLFxuICAgICAgICAgICAgdHlwZTogXCJudW1iZXJcIixcbiAgICAgICAgICAgIG1pbmltdW06IDIyMCxcbiAgICAgICAgICAgIG1heGltdW06IDg4MCxcbiAgICAgICAgICAgIGRlZmF1bHQ6IDQ0MFxuICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6IFwiZl9jdHJcIixcbiAgICAgICAgICAgIHVuaXQ6IFwiXCIsXG4gICAgICAgICAgICB0eXBlOiBcIm51bWJlclwiLFxuICAgICAgICAgICAgbWluaW11bTogdW5kZWZpbmVkLFxuICAgICAgICAgICAgbWF4aW11bTogdW5kZWZpbmVkLFxuICAgICAgICAgICAgZGVmYXVsdDogMTAwMFxuICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6IFwib2N0d2lkdGhcIixcbiAgICAgICAgICAgIHVuaXQ6IFwiXCIsXG4gICAgICAgICAgICB0eXBlOiBcIm51bWJlclwiLFxuICAgICAgICAgICAgbWluaW11bTogdW5kZWZpbmVkLFxuICAgICAgICAgICAgbWF4aW11bTogdW5kZWZpbmVkLFxuICAgICAgICAgICAgZGVmYXVsdDogMVxuICAgIH1dLFxuICAgICAgICByZXR1cm5zOiBcImFycmF5XCJcbn0sIHtcbiAgICAgICAgbmFtZTogXCJEQ1RcIixcbiAgICAgICAgZnVuY3Rpb246IFwiZGN0XCIsXG4gICAgICAgIHN1Yl9mZWF0dXJlczogW10sXG4gICAgICAgIHBhcmFtZXRlcnM6IFtdLFxuICAgICAgICByZXR1cm5zOiBcImFycmF5XCJcbn0sIHtcbiAgICAgICAgbmFtZTogXCJCYXJrIENvZWZmaWNpZW50c1wiLFxuICAgICAgICBmdW5jdGlvbjogXCJiYXJrX2NvZWZmaWNpZW50c1wiLFxuICAgICAgICBzdWJfZmVhdHVyZXM6IFtdLFxuICAgICAgICBwYXJhbWV0ZXJzOiBbe1xuICAgICAgICAgICAgbmFtZTogXCJCYW5kIENvdW50XCIsXG4gICAgICAgICAgICB1bml0OiBcIlwiLFxuICAgICAgICAgICAgdHlwZTogXCJudW1iZXJcIixcbiAgICAgICAgICAgIG1pbmltdW06IDAsXG4gICAgICAgICAgICBtYXhpbXVtOiAyNixcbiAgICAgICAgICAgIGRlZmF1bHQ6IDI2XG4gICAgfV0sXG4gICAgICAgIHJldHVybnM6IFwiYXJyYXlcIlxufSwge1xuICAgICAgICBuYW1lOiBcIlBlYWsgU3BlY3RydW1cIixcbiAgICAgICAgZnVuY3Rpb246IFwicGVha19zcGVjdHJ1bVwiLFxuICAgICAgICBzdWJfZmVhdHVyZXM6IFtdLFxuICAgICAgICBwYXJhbWV0ZXJzOiBbe1xuICAgICAgICAgICAgbmFtZTogXCJUaHJlc2hvbGRcIixcbiAgICAgICAgICAgIHVuaXQ6IFwiXCIsXG4gICAgICAgICAgICB0eXBlOiBcIm51bWJlclwiLFxuICAgICAgICAgICAgbWluaW11bTogMCxcbiAgICAgICAgICAgIG1heGltdW06IDEwMCxcbiAgICAgICAgICAgIGRlZmF1bHQ6IDMwXG4gICAgfV0sXG4gICAgICAgIHJldHVybnM6IFwiUGVha1NwZWN0cnVtRGF0YVwiXG59XTtcbiIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL29iamVjdHMvVGltZURhdGEuZC50c1wiIC8+XG5pbXBvcnQge0RhdGFQcm90b3R5cGV9IGZyb20gXCIuL0RhdGFQcm90b3R5cGVcIjtcbmltcG9ydCB7U3BlY3RydW1EYXRhfSBmcm9tIFwiLi9TcGVjdHJ1bURhdGFcIjtcbmltcG9ydCB7eHRyYWN0X2luaXRfd2F2ZWxldH0gZnJvbSBcIi4uL2Z1bmN0aW9ucy94dHJhY3RfaW5pdF93YXZlbGV0XCI7XG5pbXBvcnQge3h0cmFjdF9hcnJheV9taW59IGZyb20gXCIuLi9mdW5jdGlvbnMveHRyYWN0X2FycmF5X21pblwiO1xuaW1wb3J0IHt4dHJhY3RfYXJyYXlfbWF4fSBmcm9tIFwiLi4vZnVuY3Rpb25zL3h0cmFjdF9hcnJheV9tYXhcIjtcbmltcG9ydCB7eHRyYWN0X2FycmF5X3N1bX0gZnJvbSBcIi4uL2Z1bmN0aW9ucy94dHJhY3RfYXJyYXlfc3VtXCI7XG5pbXBvcnQge3h0cmFjdF9tZWFufSBmcm9tIFwiLi4vZnVuY3Rpb25zL3h0cmFjdF9tZWFuXCI7XG5pbXBvcnQge3h0cmFjdF90ZW1wb3JhbF9jZW50cm9pZH0gZnJvbSBcIi4uL2Z1bmN0aW9ucy94dHJhY3RfdGVtcG9yYWxfY2VudHJvaWRcIjtcbmltcG9ydCB7eHRyYWN0X3ZhcmlhbmNlfSBmcm9tIFwiLi4vZnVuY3Rpb25zL3h0cmFjdF92YXJpYW5jZVwiO1xuaW1wb3J0IHt4dHJhY3Rfc3RhbmRhcmRfZGV2aWF0aW9ufSBmcm9tIFwiLi4vZnVuY3Rpb25zL3h0cmFjdF9zdGFuZGFyZF9kZXZpYXRpb25cIjtcbmltcG9ydCB7eHRyYWN0X2F2ZXJhZ2VfZGV2aWF0aW9ufSBmcm9tIFwiLi4vZnVuY3Rpb25zL3h0cmFjdF9hdmVyYWdlX2RldmlhdGlvblwiO1xuaW1wb3J0IHt4dHJhY3Rfc2tld25lc3N9IGZyb20gXCIuLi9mdW5jdGlvbnMveHRyYWN0X3NrZXduZXNzXCI7XG5pbXBvcnQge3h0cmFjdF9rdXJ0b3Npc30gZnJvbSBcIi4uL2Z1bmN0aW9ucy94dHJhY3Rfa3VydG9zaXNcIjtcbmltcG9ydCB7eHRyYWN0X3pjcn0gZnJvbSBcIi4uL2Z1bmN0aW9ucy94dHJhY3RfemNyXCI7XG5pbXBvcnQge3h0cmFjdF9jcmVzdH0gZnJvbSBcIi4uL2Z1bmN0aW9ucy94dHJhY3RfY3Jlc3RcIjtcbmltcG9ydCB7eHRyYWN0X3Jtc19hbXBsaXR1ZGV9IGZyb20gXCIuLi9mdW5jdGlvbnMveHRyYWN0X3Jtc19hbXBsaXR1ZGVcIjtcbmltcG9ydCB7eHRyYWN0X2xvd2VzdF92YWx1ZX0gZnJvbSBcIi4uL2Z1bmN0aW9ucy94dHJhY3RfbG93ZXN0X3ZhbHVlXCI7XG5pbXBvcnQge3h0cmFjdF9ub256ZXJvX2NvdW50fSBmcm9tIFwiLi4vZnVuY3Rpb25zL3h0cmFjdF9ub256ZXJvX2NvdW50XCI7XG5pbXBvcnQge3h0cmFjdF93YXZlbGV0X2YwfSBmcm9tIFwiLi4vZnVuY3Rpb25zL3h0cmFjdF93YXZlbGV0X2YwXCI7XG5pbXBvcnQge3h0cmFjdF9lbmVyZ3l9IGZyb20gXCIuLi9mdW5jdGlvbnMveHRyYWN0X2VuZXJneVwiO1xuaW1wb3J0IHt4dHJhY3Rfc3BlY3RydW19IGZyb20gXCIuLi9mdW5jdGlvbnMveHRyYWN0X3NwZWN0cnVtXCI7XG5pbXBvcnQge3h0cmFjdF9kY3RfMn0gZnJvbSBcIi4uL2Z1bmN0aW9ucy94dHJhY3RfZGN0XzJcIjtcbmltcG9ydCB7eHRyYWN0X2F1dG9jb3JyZWxhdGlvbn0gZnJvbSBcIi4uL2Z1bmN0aW9ucy94dHJhY3RfYXV0b2NvcnJlbGF0aW9uXCI7XG5pbXBvcnQge3h0cmFjdF9hbWRmfSBmcm9tIFwiLi4vZnVuY3Rpb25zL3h0cmFjdF9hbWRmXCI7XG5pbXBvcnQge3h0cmFjdF9hc2RmfSBmcm9tIFwiLi4vZnVuY3Rpb25zL3h0cmFjdF9hc2RmXCI7XG5pbXBvcnQge3h0cmFjdF95aW59IGZyb20gXCIuLi9mdW5jdGlvbnMveHRyYWN0X3lpblwiO1xuaW1wb3J0IHt4dHJhY3Rfb25zZXR9IGZyb20gXCIuLi9mdW5jdGlvbnMveHRyYWN0X29uc2V0XCI7XG5pbXBvcnQge3h0cmFjdF9yZXNhbXBsZX0gZnJvbSBcIi4uL2Z1bmN0aW9ucy94dHJhY3RfcmVzYW1wbGVcIjtcblxuZXhwb3J0IGNsYXNzIFRpbWVEYXRhIGV4dGVuZHMgRGF0YVByb3RvdHlwZSB7XG4gICAgY29uc3RydWN0b3IoaW5wdXQsIHNhbXBsZVJhdGUpIHtcbiAgICAgICAgaWYgKHNhbXBsZVJhdGUgPD0gMCkge1xuICAgICAgICAgICAgc2FtcGxlUmF0ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSW52YWxpZCBwYXJhbWV0ZXIgZm9yICdzYW1wbGVSYXRlJyBmb3IgVGltZURhdGFcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIGlucHV0ID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICB2YXIgc3JjLCBzcmNfZGF0YTtcbiAgICAgICAgICAgIGlmIChpbnB1dCBpbnN0YW5jZW9mIFRpbWVEYXRhKSB7XG4gICAgICAgICAgICAgICAgc3JjID0gc3JjLmdldERhdGEoKTtcbiAgICAgICAgICAgICAgICBzdXBlcihzcmMubGVuZ3RoLCBzYW1wbGVSYXRlKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNvcHlEYXRhRnJvbShzcmMsIHNyYy5sZW5ndGgsIDApO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChpbnB1dCBpbnN0YW5jZW9mIEZsb2F0MzJBcnJheSB8fCBpbnB1dCBpbnN0YW5jZW9mIEZsb2F0NjRBcnJheSkge1xuICAgICAgICAgICAgICAgIHNyYyA9IGlucHV0O1xuICAgICAgICAgICAgICAgIHN1cGVyKHNyYy5sZW5ndGgsIHNhbXBsZVJhdGUpO1xuICAgICAgICAgICAgICAgIHRoaXMuY29weURhdGFGcm9tKHNyYywgc3JjLmxlbmd0aCwgMCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93IChcIlRpbWVEYXRhOiBJbnZhbGlkIG9iamVjdCBwYXNzZWQgYXMgZmlyc3QgYXJndW1lbnQuXCIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGlucHV0ID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICBpZiAoaW5wdXQgPD0gMCB8fCBpbnB1dCAhPT0gTWF0aC5mbG9vcihpbnB1dCkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyAoXCJUaW1lRGF0YTogSW52YWxpZCBudW1iZXIgcGFzc2VkIGFzIGZpcnN0IGFyZ3VtZW50LlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN1cGVyKGlucHV0LCBzYW1wbGVSYXRlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IChcIlRpbWVEYXRhOiBDb25zdHJ1Y3RvciBoYXMgaW52YWxpZCBvcGVyYXRvcnMhXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fZGN0ID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLl93YXZlbGV0ID0geHRyYWN0X2luaXRfd2F2ZWxldCgpO1xuICAgIH1cbiAgICBnZXRGcmFtZXMoZnJhbWVTaXplLCBob3BTaXplKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZnJhbWVTaXplICE9PSBcIm51bWJlclwiIHx8IGZyYW1lU2l6ZSA8PSAwIHx8IGZyYW1lU2l6ZSAhPT0gTWF0aC5mbG9vcihmcmFtZVNpemUpKSB7XG4gICAgICAgICAgICB0aHJvdyAoXCJmcmFtZVNpemUgbXVzdCBiZSBhIGRlZmluZWQsIHBvc2l0aXZlIGludGVnZXJcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBob3BTaXplICE9PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICBob3BTaXplID0gZnJhbWVTaXplO1xuICAgICAgICB9XG4gICAgICAgIHZhciBudW1fZnJhbWVzID0gTWF0aC5jZWlsKHRoaXMuZGF0YS5sZW5ndGggLyBmcmFtZVNpemUpO1xuICAgICAgICB2YXIgcmVzdWx0X2ZyYW1lcyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG51bV9mcmFtZXM7IGkrKykge1xuICAgICAgICAgICAgdmFyIGZyYW1lID0gbmV3IFRpbWVEYXRhKGhvcFNpemUsIHRoaXMuc2FtcGxlUmF0ZSk7XG4gICAgICAgICAgICBmcmFtZS5jb3B5RGF0YUZyb20odGhpcy5kYXRhLnN1YmFycmF5KGZyYW1lU2l6ZSAqIGksIGZyYW1lU2l6ZSAqIGkgKyBob3BTaXplKSk7XG4gICAgICAgICAgICByZXN1bHRfZnJhbWVzLnB1c2goZnJhbWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHRfZnJhbWVzO1xuICAgIH1cblxuICAgIC8vIEZlYXR1cmVzXG4gICAgbWluaW11bSgpIHtcbiAgICAgICAgaWYgKHRoaXMucmVzdWx0Lm1pbmltdW0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5yZXN1bHQubWluaW11bSA9IHh0cmFjdF9hcnJheV9taW4odGhpcy5kYXRhKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5yZXN1bHQubWluaW11bTtcbiAgICB9XG5cbiAgICBtYXhpbXVtKCkge1xuICAgICAgICBpZiAodGhpcy5yZXN1bHQubWF4aW11bSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLnJlc3VsdC5tYXhpbXVtID0geHRyYWN0X2FycmF5X21heCh0aGlzLmRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnJlc3VsdC5tYXhpbXVtO1xuICAgIH1cblxuICAgIHN1bSgpIHtcbiAgICAgICAgaWYgKHRoaXMucmVzdWx0LnN1bSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLnJlc3VsdC5zdW0gPSB4dHJhY3RfYXJyYXlfc3VtKHRoaXMuZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucmVzdWx0LnN1bTtcbiAgICB9XG5cbiAgICBtZWFuKCkge1xuICAgICAgICBpZiAodGhpcy5yZXN1bHQubWVhbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLnJlc3VsdC5tZWFuID0geHRyYWN0X21lYW4odGhpcy5kYXRhKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5yZXN1bHQubWVhbjtcbiAgICB9XG5cbiAgICB0ZW1wb3JhbF9jZW50cm9pZCh3aW5kb3dfbXMpIHtcbiAgICAgICAgaWYgKHRoaXMucmVzdWx0LnRlbXBvcmFsX2NlbnRyb2lkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuZW5lcmd5KHdpbmRvd19tcyk7XG4gICAgICAgICAgICB0aGlzLnJlc3VsdC50ZW1wb3JhbF9jZW50cm9pZCA9IHh0cmFjdF90ZW1wb3JhbF9jZW50cm9pZCh0aGlzLnJlc3VsdC5lbmVyZ3kuZGF0YSwgdGhpcy5zYW1wbGVSYXRlLCB3aW5kb3dfbXMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnJlc3VsdC50ZW1wb3JhbF9jZW50cm9pZDtcbiAgICB9XG5cbiAgICB2YXJpYW5jZSgpIHtcbiAgICAgICAgaWYgKHRoaXMucmVzdWx0LnZhcmlhbmNlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMucmVzdWx0LnZhcmlhbmNlID0geHRyYWN0X3ZhcmlhbmNlKHRoaXMuZGF0YSwgdGhpcy5tZWFuKCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnJlc3VsdC52YXJpYW5jZTtcbiAgICB9XG5cbiAgICBzdGFuZGFyZF9kZXZpYXRpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLnJlc3VsdC5zdGFuZGFyZF9kZXZpYXRpb24gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5yZXN1bHQuc3RhbmRhcmRfZGV2aWF0aW9uID0geHRyYWN0X3N0YW5kYXJkX2RldmlhdGlvbih0aGlzLmRhdGEsIHRoaXMudmFyaWFuY2UoKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucmVzdWx0LnN0YW5kYXJkX2RldmlhdGlvbjtcbiAgICB9XG5cbiAgICBhdmVyYWdlX2RldmlhdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLnJlc3VsdC5hdmVyYWdlX2RldmlhdGlvbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLnJlc3VsdC5hdmVyYWdlX2RldmlhdGlvbiA9IHh0cmFjdF9hdmVyYWdlX2RldmlhdGlvbih0aGlzLmRhdGEsIHRoaXMubWVhbigpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5yZXN1bHQuYXZlcmFnZV9kZXZpYXRpb247XG4gICAgfVxuXG4gICAgc2tld25lc3MgKCkge1xuICAgICAgICBpZiAodGhpcy5yZXN1bHQuc2tld25lc3MgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5yZXN1bHQuc2tld25lc3MgPSB4dHJhY3Rfc2tld25lc3ModGhpcy5kYXRhLCB0aGlzLm1lYW4oKSwgdGhpcy5zdGFuZGFyZF9kZXZpYXRpb24oKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucmVzdWx0LnNrZXduZXNzO1xuICAgIH1cblxuICAgIGt1cnRvc2lzICgpIHtcbiAgICAgICAgaWYgKHRoaXMucmVzdWx0Lmt1cnRvc2lzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMucmVzdWx0Lmt1cnRvc2lzID0geHRyYWN0X2t1cnRvc2lzKHRoaXMuZGF0YSwgdGhpcy5tZWFuKCksIHRoaXMuc3RhbmRhcmRfZGV2aWF0aW9uKCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnJlc3VsdC5rdXJ0b3NpcztcbiAgICB9XG5cbiAgICB6Y3IgICgpIHtcbiAgICAgICAgaWYgKHRoaXMucmVzdWx0LnpjciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLnJlc3VsdC56Y3IgPSB4dHJhY3RfemNyKHRoaXMuZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucmVzdWx0LnpjcjtcbiAgICB9XG5cbiAgICBjcmVzdF9mYWN0b3IgKCkge1xuICAgICAgICBpZiAodGhpcy5yZXN1bHQuY3Jlc3RfZmFjdG9yID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMucmVzdWx0LmNyZXN0X2ZhY3RvciA9IHh0cmFjdF9jcmVzdCh0aGlzLmRhdGEsIHRoaXMubWF4aW11bSgpLCB0aGlzLm1lYW4oKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucmVzdWx0LmNyZXN0X2ZhY3RvcjtcbiAgICB9XG5cbiAgICBybXNfYW1wbGl0dWRlICgpIHtcbiAgICAgICAgaWYgKHRoaXMucmVzdWx0LnJtc19hbXBsaXR1ZGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5yZXN1bHQucm1zX2FtcGxpdHVkZSA9IHh0cmFjdF9ybXNfYW1wbGl0dWRlKHRoaXMuZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucmVzdWx0LnJtc19hbXBsaXR1ZGU7XG4gICAgfVxuXG4gICAgbG93ZXN0X3ZhbHVlICh0aHJlc2hvbGQpIHtcbiAgICAgICAgaWYgKHRoaXMucmVzdWx0Lmxvd2VzdF92YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLnJlc3VsdC5sb3dlc3RfdmFsdWUgPSB4dHJhY3RfbG93ZXN0X3ZhbHVlKHRoaXMuZGF0YSwgdGhyZXNob2xkKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5yZXN1bHQubG93ZXN0X3ZhbHVlO1xuICAgIH1cblxuICAgIGhpZ2hlc3RfdmFsdWUgKCkge1xuICAgICAgICBpZiAodGhpcy5yZXN1bHQubm9uemVyb19jb3VudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLnJlc3VsdC5ub256ZXJvX2NvdW50ID0geHRyYWN0X25vbnplcm9fY291bnQodGhpcy5kYXRhKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5yZXN1bHQubm9uemVyb19jb3VudDtcbiAgICB9XG5cbiAgICBmMCAoKSB7XG4gICAgICAgIGlmICh0aGlzLl93YXZlbGV0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX3dhdmVsZXQgPSB0aGlzLmluaXRfd2F2ZWxldCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnJlc3VsdC5mMCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLnJlc3VsdC5mMCA9IHh0cmFjdF93YXZlbGV0X2YwKHRoaXMuZGF0YSwgdGhpcy5zYW1wbGVSYXRlLCB0aGlzLl93YXZlbGV0KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5yZXN1bHQuZjA7XG4gICAgfVxuXG4gICAgZW5lcmd5ICh3aW5kb3dfbXMpIHtcbiAgICAgICAgaWYgKHRoaXMucmVzdWx0LmVuZXJneSA9PT0gdW5kZWZpbmVkIHx8IHRoaXMucmVzdWx0LmVuZXJneS53aW5kb3dfbXMgIT09IHdpbmRvd19tcykge1xuICAgICAgICAgICAgdGhpcy5yZXN1bHQuZW5lcmd5ID0ge1xuICAgICAgICAgICAgICAgICdkYXRhJzogeHRyYWN0X2VuZXJneSh0aGlzLmRhdGEsIHRoaXMuc2FtcGxlUmF0ZSwgd2luZG93X21zKSxcbiAgICAgICAgICAgICAgICAnd2luZG93X21zJzogd2luZG93X21zXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnJlc3VsdC5lbmVyZ3k7XG4gICAgfVxuXG4gICAgc3BlY3RydW0oKSB7XG4gICAgICAgIGlmICh0aGlzLnJlc3VsdC5zcGVjdHJ1bSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB2YXIgX3NwZWMgPSB4dHJhY3Rfc3BlY3RydW0odGhpcy5kYXRhLCB0aGlzLnNhbXBsZVJhdGUsIHRydWUsIGZhbHNlKTtcbiAgICAgICAgICAgIHRoaXMucmVzdWx0LnNwZWN0cnVtID0gbmV3IFNwZWN0cnVtRGF0YShfc3BlYy5sZW5ndGggLyAyLCB0aGlzLnNhbXBsZVJhdGUpO1xuICAgICAgICAgICAgdGhpcy5yZXN1bHQuc3BlY3RydW0uY29weURhdGFGcm9tKF9zcGVjKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlc3VsdC5zcGVjdHJ1bTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRjdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuX2RjdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLl9kY3QgPSB0aGlzLmNyZWF0ZURjdENvZWZmaWNpZW50cyh0aGlzLmRhdGEubGVuZ3RoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5yZXN1bHQuZGN0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMucmVzdWx0LmRjdCA9IHh0cmFjdF9kY3RfMih0aGlzLmRhdGEsIHRoaXMuX2RjdCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucmVzdWx0LmRjdDtcbiAgICB9XG5cbiAgICBhdXRvY29ycmVsYXRpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5yZXN1bHQuYXV0b2NvcnJlbGF0aW9uID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMucmVzdWx0LmF1dG9jb3JyZWxhdGlvbiA9IHh0cmFjdF9hdXRvY29ycmVsYXRpb24odGhpcy5kYXRhKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5yZXN1bHQuYXV0b2NvcnJlbGF0aW9uO1xuICAgIH1cblxuICAgIGFtZGYgKCkge1xuICAgICAgICBpZiAodGhpcy5yZXN1bHQuYW1kZiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLnJlc3VsdC5hbWRmID0geHRyYWN0X2FtZGYodGhpcy5kYXRhKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5yZXN1bHQuYW1kZjtcbiAgICB9XG5cbiAgICBhc2RmICgpIHtcbiAgICAgICAgaWYgKHRoaXMucmVzdWx0LmFzZGYgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5yZXN1bHQuYXNkZiA9IHh0cmFjdF9hc2RmKHRoaXMuZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucmVzdWx0LmFzZGY7XG4gICAgfVxuXG4gICAgeWluKCkge1xuICAgICAgICBpZiAodGhpcy5yZXN1bHQueWluID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMucmVzdWx0LnlpbiA9IHh0cmFjdF95aW4odGhpcy5kYXRhKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5yZXN1bHQueWluO1xuICAgIH1cblxuICAgIG9uc2V0KGZyYW1lU2l6ZSkge1xuICAgICAgICBpZiAodGhpcy5yZXN1bHQub25zZXQgPT09IHVuZGVmaW5lZCB8fCB0aGlzLnJlc3VsdC5vbnNldC5mcmFtZVNpemUgIT09IGZyYW1lU2l6ZSkge1xuICAgICAgICAgICAgdGhpcy5yZXN1bHQub25zZXQgPSB7XG4gICAgICAgICAgICAgICAgJ2RhdGEnOiB4dHJhY3Rfb25zZXQodGhpcy5kYXRhLCBmcmFtZVNpemUpLFxuICAgICAgICAgICAgICAgICdmcmFtZVNpemUnOiBmcmFtZVNpemVcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucmVzdWx0Lm9uc2V0O1xuICAgIH1cblxuICAgIHJlc2FtcGxlKHRhcmdldFNhbXBsZVJhdGUpIHtcbiAgICAgICAgaWYgKHRoaXMuc2FtcGxlUmF0ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aHJvdyAoXCJTb3VyY2Ugc2FtcGxlUmF0ZSBtdXN0IGJlIGRlZmluZWRcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXRTYW1wbGVSYXRlICE9PSBcIm51bWJlclwiIHx8IHRhcmdldFNhbXBsZVJhdGUgPD0gMCkge1xuICAgICAgICAgICAgdGhyb3cgKFwiVGFyZ2V0IHNhbXBsZVJhdGUgbXVzdCBiZSBhIHBvc2l0aXZlIG51bWJlclwiKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcmVzYW1wbGVkID0geHRyYWN0X3Jlc2FtcGxlKHRoaXMuZGF0YSwgdGFyZ2V0U2FtcGxlUmF0ZSwgdGhpcy5zYW1wbGVSYXRlKTtcbiAgICAgICAgdmFyIHJlcGx5ID0gbmV3IFRpbWVEYXRhKHJlc2FtcGxlZC5sZW5ndGgsIHRhcmdldFNhbXBsZVJhdGUpO1xuICAgICAgICByZXBseS5jb3B5RGF0YUZyb20ocmVzYW1wbGVkKTtcbiAgICAgICAgdGhpcy5yZXN1bHQucmVzYW1wbGUgPSByZXBseTtcbiAgICAgICAgcmV0dXJuIHJlcGx5O1xuICAgIH1cbn1cblxuVGltZURhdGEucHJvdG90eXBlLmZlYXR1cmVzID0gW1xuICAgIHtcbiAgICAgICAgbmFtZTogXCJNaW5pbXVtXCIsXG4gICAgICAgIGZ1bmN0aW9uOiBcIm1pbmltdW1cIixcbiAgICAgICAgc3ViX2ZlYXR1cmVzOiBbXSxcbiAgICAgICAgcGFyYW1ldGVyczogW10sXG4gICAgICAgIHJldHVybnM6IFwibnVtYmVyXCJcbiAgICB9LCB7XG4gICAgICAgIG5hbWU6IFwiTWF4aW11bVwiLFxuICAgICAgICBmdW5jdGlvbjogXCJtYXhpbXVtXCIsXG4gICAgICAgIHN1Yl9mZWF0dXJlczogW10sXG4gICAgICAgIHBhcmFtZXRlcnM6IFtdLFxuICAgICAgICByZXR1cm5zOiBcIm51bWJlclwiXG4gICAgfSwge1xuICAgICAgICBuYW1lOiBcIlN1bVwiLFxuICAgICAgICBmdW5jdGlvbjogXCJzdW1cIixcbiAgICAgICAgc3ViX2ZlYXR1cmVzOiBbXSxcbiAgICAgICAgcGFyYW1ldGVyczogW10sXG4gICAgICAgIHJldHVybnM6IFwibnVtYmVyXCJcbiAgICB9LCB7XG4gICAgICAgIG5hbWU6IFwiTWVhblwiLFxuICAgICAgICBmdW5jdGlvbjogXCJtZWFuXCIsXG4gICAgICAgIHN1Yl9mZWF0dXJlczogW10sXG4gICAgICAgIHBhcmFtZXRlcnM6IFtdLFxuICAgICAgICByZXR1cm5zOiBcIm51bWJlclwiXG4gICAgfSwge1xuICAgICAgICBuYW1lOiBcIlRlbXBvcmFsIENlbnRyb2lkXCIsXG4gICAgICAgIGZ1bmN0aW9uOiBcInRlbXBvcmFsX2NlbnRyb2lkXCIsXG4gICAgICAgIHN1Yl9mZWF0dXJlczogW1wiZW5lcmd5XCJdLFxuICAgICAgICBwYXJhbWV0ZXJzOiBbe1xuICAgICAgICAgICAgbmFtZTogXCJXaW5kb3cgVGltZVwiLFxuICAgICAgICAgICAgdW5pdDogXCJtc1wiLFxuICAgICAgICAgICAgdHlwZTogXCJudW1iZXJcIixcbiAgICAgICAgICAgIG1pbmltdW06IDEsXG4gICAgICAgICAgICBtYXhpbXVtOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBkZWZhdWx0OiAxMDBcbiAgICAgICAgfV0sXG4gICAgICAgIHJldHVybnM6IFwibnVtYmVyXCJcbiAgICB9LCB7XG4gICAgICAgIG5hbWU6IFwiVmFyaWFuY2VcIixcbiAgICAgICAgZnVuY3Rpb246IFwidmFyaWFuY2VcIixcbiAgICAgICAgc3ViX2ZlYXR1cmVzOiBbXCJtZWFuXCJdLFxuICAgICAgICBwYXJhbWV0ZXJzOiBbXSxcbiAgICAgICAgcmV0dXJuczogXCJudW1iZXJcIlxuICAgIH0sIHtcbiAgICAgICAgbmFtZTogXCJTdGFuZGFyZCBEZXZpYXRpb25cIixcbiAgICAgICAgZnVuY3Rpb246IFwic3RhbmRhcmRfZGV2aWF0aW9uXCIsXG4gICAgICAgIHN1Yl9mZWF0dXJlczogW1widmFyaWFuY2VcIl0sXG4gICAgICAgIHBhcmFtZXRlcnM6IFtdLFxuICAgICAgICByZXR1cm5zOiBcIm51bWJlclwiXG4gICAgfSwge1xuICAgICAgICBuYW1lOiBcIkF2ZXJhZ2UgRGV2aWF0aW9uXCIsXG4gICAgICAgIGZ1bmN0aW9uOiBcImF2ZXJhZ2VfZGV2aWF0aW9uXCIsXG4gICAgICAgIHN1Yl9mZWF0dXJlczogW1wibWVhblwiXSxcbiAgICAgICAgcGFyYW1ldGVyczogW10sXG4gICAgICAgIHJldHVybnM6IFwibnVtYmVyXCJcbiAgICB9LCB7XG4gICAgICAgIG5hbWU6IFwiU2tld25lc3NcIixcbiAgICAgICAgZnVuY3Rpb246IFwic2tld25lc3NcIixcbiAgICAgICAgc3ViX2ZlYXR1cmVzOiBbXCJtZWFuXCIsIFwic3RhbmRhcmRfZGV2aWF0aW9uXCJdLFxuICAgICAgICBwYXJhbWV0ZXJzOiBbXSxcbiAgICAgICAgcmV0dXJuczogXCJudW1iZXJcIlxuICAgIH0sIHtcbiAgICAgICAgbmFtZTogXCJLdXJ0b3Npc1wiLFxuICAgICAgICBmdW5jdGlvbjogXCJrdXJ0b3Npc1wiLFxuICAgICAgICBzdWJfZmVhdHVyZXM6IFtcIm1lYW5cIiwgXCJzdGFuZGFyZF9kZXZpYXRpb25cIl0sXG4gICAgICAgIHBhcmFtZXRlcnM6IFtdLFxuICAgICAgICByZXR1cm5zOiBcIm51bWJlclwiXG4gICAgfSwge1xuICAgICAgICBuYW1lOiBcIlplcm8gQ3Jvc3NpbmcgUmF0ZVwiLFxuICAgICAgICBmdW5jdGlvbjogXCJ6Y3JcIixcbiAgICAgICAgc3ViX2ZlYXR1cmVzOiBbXSxcbiAgICAgICAgcGFyYW1ldGVyczogW10sXG4gICAgICAgIHJldHVybnM6IFwibnVtYmVyXCJcbiAgICB9LCB7XG4gICAgICAgIG5hbWU6IFwiQ3Jlc3QgRmFjdG9yXCIsXG4gICAgICAgIGZ1bmN0aW9uOiBcImNyZXN0X2ZhY3RvclwiLFxuICAgICAgICBzdWJfZmVhdHVyZXM6IFtcIm1heGltdW1cIiwgXCJtZWFuXCJdLFxuICAgICAgICBwYXJhbWV0ZXJzOiBbXSxcbiAgICAgICAgcmV0dXJuczogXCJudW1iZXJcIlxuICAgIH0sIHtcbiAgICAgICAgbmFtZTogXCJSTVMgQW1wbGl0dWRlXCIsXG4gICAgICAgIGZ1bmN0aW9uOiBcInJtc19hbXBsaXR1ZGVcIixcbiAgICAgICAgc3ViX2ZlYXR1cmVzOiBbXSxcbiAgICAgICAgcGFyYW1ldGVyczogW10sXG4gICAgICAgIHJldHVybnM6IFwibnVtYmVyXCJcbiAgICB9LCB7XG4gICAgICAgIG5hbWU6IFwiTG93ZXN0IFZhbHVlXCIsXG4gICAgICAgIGZ1bmN0aW9uOiBcImxvd2VzdF92YWx1ZVwiLFxuICAgICAgICBzdWJfZmVhdHVyZXM6IFtdLFxuICAgICAgICBwYXJhbWV0ZXJzOiBbe1xuICAgICAgICAgICAgbmFtZTogXCJUaHJlc2hvbGRcIixcbiAgICAgICAgICAgIHVuaXQ6IFwiXCIsXG4gICAgICAgICAgICB0eXBlOiBcIm51bWJlclwiLFxuICAgICAgICAgICAgbWluaW11bTogdW5kZWZpbmVkLFxuICAgICAgICAgICAgbWF4aW11bTogdW5kZWZpbmVkLFxuICAgICAgICAgICAgZGVmYXVsdDogdW5kZWZpbmVkXG4gICAgICAgIH1dLFxuICAgICAgICByZXR1cm5zOiBcIm51bWJlclwiXG4gICAgfSwge1xuICAgICAgICBuYW1lOiBcIkhpZ2hlc3QgVmFsdWVcIixcbiAgICAgICAgZnVuY3Rpb246IFwiaGlnaGVzdF92YWx1ZVwiLFxuICAgICAgICBzdWJfZmVhdHVyZXM6IFtdLFxuICAgICAgICBwYXJhbWV0ZXJzOiBbe1xuICAgICAgICAgICAgbmFtZTogXCJUaHJlc2hvbGRcIixcbiAgICAgICAgICAgIHVuaXQ6IFwiXCIsXG4gICAgICAgICAgICB0eXBlOiBcIm51bWJlclwiLFxuICAgICAgICAgICAgbWluaW11bTogdW5kZWZpbmVkLFxuICAgICAgICAgICAgbWF4aW11bTogdW5kZWZpbmVkLFxuICAgICAgICAgICAgZGVmYXVsdDogdW5kZWZpbmVkXG4gICAgICAgIH1dLFxuICAgICAgICByZXR1cm5zOiBcIm51bWJlclwiXG4gICAgfSwge1xuICAgICAgICBuYW1lOiBcIk5vbi1aZXJvIENvdW50XCIsXG4gICAgICAgIGZ1bmN0aW9uOiBcIm5vbnplcm9fY291bnRcIixcbiAgICAgICAgc3ViX2ZlYXR1cmVzOiBbXSxcbiAgICAgICAgcGFyYW1ldGVyczogW10sXG4gICAgICAgIHJldHVybnM6IFwibnVtYmVyXCJcbiAgICB9LCB7XG4gICAgICAgIG5hbWU6IFwiRnVuZGFtZW50YWwgRnJlcXVlbmN5XCIsXG4gICAgICAgIGZ1bmN0aW9uOiBcImYwXCIsXG4gICAgICAgIHN1Yl9mZWF0dXJlczogW10sXG4gICAgICAgIHBhcmFtZXRlcnM6IFtdLFxuICAgICAgICByZXR1cm5zOiBcIm51bWJlclwiXG4gICAgfSwge1xuICAgICAgICBuYW1lOiBcIkVuZXJneVwiLFxuICAgICAgICBmdW5jdGlvbjogXCJlbmVyZ3lcIixcbiAgICAgICAgc3ViX2ZlYXR1cmVzOiBbXSxcbiAgICAgICAgcGFyYW1ldGVyczogW3tcbiAgICAgICAgICAgIG5hbWU6IFwiV2luZG93XCIsXG4gICAgICAgICAgICB1bml0OiBcIm1zXCIsXG4gICAgICAgICAgICB0eXBlOiBcIm51bWJlclwiLFxuICAgICAgICAgICAgbWluaW11bTogMSxcbiAgICAgICAgICAgIG1heGltdW06IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGRlZmF1bHQ6IDEwMFxuICAgICAgICB9XSxcbiAgICAgICAgcmV0dXJuczogXCJvYmplY3RcIlxuICAgIH0sIHtcbiAgICAgICAgbmFtZTogXCJTcGVjdHJ1bVwiLFxuICAgICAgICBmdW5jdGlvbjogXCJzcGVjdHJ1bVwiLFxuICAgICAgICBzdWJfZmVhdHVyZXM6IFtdLFxuICAgICAgICBwYXJhbWV0ZXJzOiBbXSxcbiAgICAgICAgcmV0dXJuczogXCJTcGVjdHJ1bURhdGFcIlxuICAgIH0sIHtcbiAgICAgICAgbmFtZTogXCJEQ1RcIixcbiAgICAgICAgZnVuY3Rpb246IFwiZGN0XCIsXG4gICAgICAgIHN1Yl9mZWF0dXJlczogW10sXG4gICAgICAgIHBhcmFtZXRlcnM6IFtdLFxuICAgICAgICByZXR1cm5zOiBcImFycmF5XCJcbiAgICB9LCB7XG4gICAgICAgIG5hbWU6IFwiQXV0b2NvcnJlbGF0aW9uXCIsXG4gICAgICAgIGZ1bmN0aW9uOiBcImF1dG9jb3JyZWxhdGlvblwiLFxuICAgICAgICBzdWJfZmVhdHVyZXM6IFtdLFxuICAgICAgICBwYXJhbWV0ZXJzOiBbXSxcbiAgICAgICAgcmV0dXJuczogXCJhcnJheVwiXG4gICAgfSwge1xuICAgICAgICBuYW1lOiBcIkFNREZcIixcbiAgICAgICAgZnVuY3Rpb246IFwiYW1kZlwiLFxuICAgICAgICBzdWJfZmVhdHVyZXM6IFtdLFxuICAgICAgICBwYXJhbWV0ZXJzOiBbXSxcbiAgICAgICAgcmV0dXJuczogXCJhcnJheVwiXG4gICAgfSwge1xuICAgICAgICBuYW1lOiBcIkFTREZcIixcbiAgICAgICAgZnVuY3Rpb246IFwiYXNkZlwiLFxuICAgICAgICBzdWJfZmVhdHVyZXM6IFtdLFxuICAgICAgICBwYXJhbWV0ZXJzOiBbXSxcbiAgICAgICAgcmV0dXJuczogXCJhcnJheVwiXG4gICAgfSwge1xuICAgICAgICBuYW1lOiBcIllJTiBQaXRjaFwiLFxuICAgICAgICBmdW5jdGlvbjogXCJ5aW5cIixcbiAgICAgICAgc3ViX2ZlYXR1cmVzOiBbXSxcbiAgICAgICAgcGFyYW1ldGVyczogW10sXG4gICAgICAgIHJldHVybnM6IFwiYXJyYXlcIlxuICAgIH0sIHtcbiAgICAgICAgbmFtZTogXCJPbnNldCBEZXRlY3Rpb25cIixcbiAgICAgICAgZnVuY3Rpb246IFwib25zZXRcIixcbiAgICAgICAgc3ViX2ZlYXR1cmVzOiBbXSxcbiAgICAgICAgcGFyYW1ldGVyczogW3tcbiAgICAgICAgICAgIG5hbWU6IFwiRnJhbWUgU2l6ZVwiLFxuICAgICAgICAgICAgdW5pdDogXCJzYW1wbGVzXCIsXG4gICAgICAgICAgICB0eXBlOiBcIm51bWJlclwiLFxuICAgICAgICAgICAgbWluaW11bTogMSxcbiAgICAgICAgICAgIG1heGltdW06IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGRlZmF1bHQ6IDEwMjRcbiAgICAgICAgfV0sXG4gICAgICAgIHJldHVybnM6IFwiYXJyYXlcIlxuICAgIH0sIHtcbiAgICAgICAgbmFtZTogXCJSZXNhbXBsZVwiLFxuICAgICAgICBmdW5jdGlvbjogXCJyZXNhbXBsZVwiLFxuICAgICAgICBzdWJfZmVhdHVyZXM6IFtdLFxuICAgICAgICBwYXJhbWV0ZXJzOiBbe1xuICAgICAgICAgICAgbmFtZTogXCJUYXJnZXQgU2FtcGxlIFJhdGVcIixcbiAgICAgICAgICAgIHVuaXQ6IFwiSHpcIixcbiAgICAgICAgICAgIHR5cGU6IFwibnVtYmVyXCIsXG4gICAgICAgICAgICBtaW5pbXVtOiAwLFxuICAgICAgICAgICAgbWF4aW11bTogdW5kZWZpbmVkLFxuICAgICAgICAgICAgZGVmYXVsdDogODAwMFxuICAgICAgICB9XSxcbiAgICAgICAgcmV0dXJuczogXCJUaW1lRGF0YVwiXG4gICAgfV07XG4iLCJpbXBvcnQgeyBCYXNlUGx1Z2luIH0gZnJvbSBcIi4vaW5kZXhcIjtcbmV4cG9ydCBjbGFzcyBBdWRpb1BsdWdpbiBleHRlbmRzIEJhc2VQbHVnaW4ge1xuICAgIGNvbnN0cnVjdG9yKGZhY3RvcnksIHBsdWdpbk93bmVyLCBwcm90b3R5cGVPYmplY3QpIHtcbiAgICAgICAgc3VwZXIoZmFjdG9yeSwgcGx1Z2luT3duZXIsIHByb3RvdHlwZU9iamVjdCk7XG4gICAgICAgIHRoaXMuZmFjdG9yeSA9IGZhY3Rvcnk7XG4gICAgICAgIHRoaXMucHJvdG90eXBlT2JqZWN0ID0gcHJvdG90eXBlT2JqZWN0O1xuICAgIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBMaW5rZWRTdG9yZUludGVyZmFjZSB7XG4gICAgY29uc3RydWN0b3Iob3duZXIsIGxpbmtlZFN0b3JlKSB7XG4gICAgICAgIHRoaXMub3duZXIgPSBvd25lcjtcbiAgICAgICAgdGhpcy5saW5rZWRTdG9yZSA9IGxpbmtlZFN0b3JlO1xuICAgICAgICB0aGlzLmxpc3RlbmVycyA9IG5ldyBNYXAoKTtcbiAgICAgICAgbGlua2VkU3RvcmUuYWRkRXZlbnRMaXN0ZW5lcihcImFsdGVyZWRcIiwgdGhpcyk7XG4gICAgfVxuICAgIGhhbmRsZUV2ZW50KGUpIHtcbiAgICAgICAgY29uc3QgdGVybSA9IGUuZGV0YWlsLnRlcm07XG4gICAgICAgIGNvbnN0IHZhbHVlID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgIGlmICh0aGlzLmxpc3RlbmVyc1t0ZXJtXSAmJiB0eXBlb2YgdGhpcy5saXN0ZW5lcnNbdGVybV0gPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICB0aGlzLmxpc3RlbmVyc1t0ZXJtXS5jYWxsKHRoaXMub3duZXIsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBkZXN0cm95KCkge1xuICAgICAgICB0aGlzLmxpbmtlZFN0b3JlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJhbHRlcmVkXCIsIHRoaXMpO1xuICAgICAgICB0aGlzLmxpc3RlbmVycy5jbGVhcigpO1xuICAgIH1cbiAgICByZXF1ZXN0VGVybSh0ZXJtKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxpbmtlZFN0b3JlLmdldFRlcm0odGVybSk7XG4gICAgfVxuICAgIGxpc3RlbkZvclRlcm0odGVybSwgY2FsbGJhY2spIHtcbiAgICAgICAgaWYgKHRoaXMubGlzdGVuZXJzLmhhc093blByb3BlcnR5KHRlcm0pKSB7XG4gICAgICAgICAgICB0aHJvdyBcIkxpc3RlbmVyIGFscmVhZHkgZXhpc3RzXCI7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5saXN0ZW5lcnMuc2V0KHRlcm0sIGNhbGxiYWNrKTtcbiAgICB9XG4gICAgcmVsZWFzZUxpc3RlbmVyRm9yVGVybSh0ZXJtKSB7XG4gICAgICAgIHRoaXMubGlzdGVuZXJzLmRlbGV0ZSh0ZXJtKTtcbiAgICB9XG59XG4iLCIvKiBqc2hpbnQgZXN2ZXJzaW9uOiA2ICovXG5pbXBvcnQgeyBOdW1iZXJQYXJhbWV0ZXIgfSBmcm9tIFwiLi9wYXJhbWV0ZXJzL051bWJlclBhcmFtZXRlclwiO1xuaW1wb3J0IHsgU3RyaW5nUGFyYW1ldGVyIH0gZnJvbSBcIi4vcGFyYW1ldGVycy9TdHJpbmdQYXJhbWV0ZXJcIjtcbmltcG9ydCB7IEJ1dHRvblBhcmFtZXRlciB9IGZyb20gXCIuL3BhcmFtZXRlcnMvQnV0dG9uUGFyYW1ldGVyXCI7XG5pbXBvcnQgeyBTd2l0Y2hQYXJhbWV0ZXIgfSBmcm9tIFwiLi9wYXJhbWV0ZXJzL1N3aXRjaFBhcmFtZXRlclwiO1xuaW1wb3J0IHsgTGlzdFBhcmFtZXRlciB9IGZyb20gXCIuL3BhcmFtZXRlcnMvTGlzdFBhcmFtZXRlclwiO1xuaW1wb3J0IHsgVVJMUGFyYW1ldGVyIH0gZnJvbSBcIi4vcGFyYW1ldGVycy9VUkxQYXJhbWV0ZXJcIjtcbmltcG9ydCB7IEFzc2V0UGFyYW1ldGVyIH0gZnJvbSBcIi4vcGFyYW1ldGVycy9Bc3NldFBhcmFtZXRlclwiO1xuaW1wb3J0IHsgaXNQbHVnaW5QYXJhbWV0ZXIgfSBmcm9tIFwiLi9wYXJhbWV0ZXJzL0lQbHVnaW5QYXJhbWV0ZXJcIjtcbmZ1bmN0aW9uIGZvcm1hdFBhcmFtZXRlck5hbWUobmFtZSkge1xuICAgIG5hbWUgPSBuYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgbmFtZSA9IG5hbWUucmVwbGFjZShcIi9cIiwgXCJfXCIpO1xuICAgIHJldHVybiBuYW1lO1xufVxuZXhwb3J0IGNsYXNzIFBhcmFtZXRlck1hbmFnZXIge1xuICAgIGNvbnN0cnVjdG9yKG93bmVyLCBwbHVnaW5FeHRlcm5hbEludGVyZmFjZSwgbmFtZSA9IFwiZGVmYXVsdFwiLCBleHBvc2VkID0gdHJ1ZSkge1xuICAgICAgICB0aGlzLm93bmVyID0gb3duZXI7XG4gICAgICAgIHRoaXMucGx1Z2luRXh0ZXJuYWxJbnRlcmZhY2UgPSBwbHVnaW5FeHRlcm5hbEludGVyZmFjZTtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5leHBvc2VkID0gZXhwb3NlZDtcbiAgICAgICAgdGhpcy5wYXJhbWV0ZXJMaXN0ID0gW107XG4gICAgICAgIHRoaXMuZXZlbnRUYXJnZXQgPSBuZXcgRXZlbnRUYXJnZXQoKTtcbiAgICAgICAgdGhpcy52aXNpYmxlTmFtZSA9IHRoaXMubmFtZTtcbiAgICB9XG4gICAgZmluZFBhcmFtZXRlcihiYXNlTmFtZSkge1xuICAgICAgICBsZXQgbmFtZSA9IGJhc2VOYW1lLnJlcGxhY2UoXCIvXCIsIFwiX1wiKS5zcGxpdChcIi5cIikucmV2ZXJzZSgpO1xuICAgICAgICBjb25zdCBsb3dlckNhc2VQYXJhbWV0ZXJOYW1lcyA9IHRoaXMucGFyYW1ldGVyTGlzdC5tYXAoaSA9PiBmb3JtYXRQYXJhbWV0ZXJOYW1lKGkubmFtZSkpO1xuICAgICAgICBjb25zdCBwYXJhbSA9IHRoaXMucGFyYW1ldGVyTGlzdFtsb3dlckNhc2VQYXJhbWV0ZXJOYW1lcy5pbmRleE9mKG5hbWUucG9wKCkudG9Mb3dlckNhc2UoKSldO1xuICAgICAgICBpZiAocGFyYW0gaW5zdGFuY2VvZiBQYXJhbWV0ZXJNYW5hZ2VyICYmIG5hbWUubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHBhcmFtLmdldFBhcmFtZXRlckJ5TmFtZShuYW1lLnJldmVyc2UoKS5qb2luKFwiLlwiKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyYW07XG4gICAgICAgIH1cbiAgICB9XG4gICAgaXNQYXJhbWV0ZXJOYW1lQXZhaWxhYmxlKG5hbWUpIHtcbiAgICAgICAgbmFtZSA9IGZvcm1hdFBhcmFtZXRlck5hbWUobmFtZSk7XG4gICAgICAgIGlmICghL15cXHcrKCBcXHcrKSooLVxcdyspKihfXFx3KykqJC8udGVzdChuYW1lKSkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFwiSW52YWxpZCBzdHJpbmcgZm9yIG5hbWVcIiwgbmFtZSwgXCJXaWxsIG5vdCBleHBvc2UgYXMgZG90IG5vdGF0aW9uc1wiKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzZWxmLmhhc093blByb3BlcnR5KG5hbWUpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJOYW1lIGlzIHJlc2VydmVkIG9yIGFscmVhZHkgZGVmaW5lZFwiKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgYnVpbGRQYXJhbWV0ZXJPYmplY3QoKSB7XG4gICAgICAgIGNvbnN0IG9iaiA9IHt9O1xuICAgICAgICB0aGlzLnBhcmFtZXRlckxpc3QuZmlsdGVyKGZ1bmN0aW9uIChwKSB7XG4gICAgICAgICAgICByZXR1cm4gcC5leHBvc2VkO1xuICAgICAgICB9KS5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBvYmpbZS5uYW1lXSA9IGUuZ2V0UGFyYW1ldGVyT2JqZWN0KCk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gb2JqO1xuICAgIH1cbiAgICBhZGRQYXJhbWV0ZXIocGFyYW0pIHtcbiAgICAgICAgaWYgKHBhcmFtLm5hbWUuaW5jbHVkZXMoXCIuXCIpKSB7XG4gICAgICAgICAgICB0aHJvdyAoXCJOYW1lIGNhbm5vdCBpbmNsdWRlIGEgcGVyaW9kXCIpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBleGlzdHMgPSB0aGlzLnBhcmFtZXRlckxpc3QuZmluZEluZGV4KGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICByZXR1cm4gZSA9PT0gcGFyYW07XG4gICAgICAgIH0sIHBhcmFtKTtcbiAgICAgICAgaWYgKGV4aXN0cyA9PT0gLTEpIHtcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBwYXJhbS5uYW1lLCB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IHBhcmFtXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMucGFyYW1ldGVyTGlzdC5wdXNoKHBhcmFtKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcGFyYW07XG4gICAgfVxuICAgIGFkZEV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXIsIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZXZlbnRUYXJnZXQuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lciwgb3B0aW9ucyk7XG4gICAgfVxuICAgIHJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXIsIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZXZlbnRUYXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lciwgb3B0aW9ucyk7XG4gICAgfVxuICAgIGhhbmRsZUV2ZW50KGUpIHtcbiAgICAgICAgbGV0IGRldGFpbCA9IGUuZGV0YWlsO1xuICAgICAgICBpZiAoZGV0YWlsLnVwZGF0ZUludGVyZmFjZXMgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luRXh0ZXJuYWxJbnRlcmZhY2UudXBkYXRlSW50ZXJmYWNlcygpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm5hbWUgIT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAgICAgICBkZXRhaWwucGFyYW1ldGVyLm5hbWUgPSBgJHt0aGlzLm5hbWV9LiR7ZGV0YWlsLnBhcmFtZXRlci5uYW1lfWA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGUudHlwZSA9PSBcInBhcmFtZXRlcnNldFwiICYmIGRldGFpbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLmV2ZW50VGFyZ2V0LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwicGFyYW1ldGVyc2V0XCIsIHsgZGV0YWlsOiBkZXRhaWwgfSkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuZGVsZXRlQWxsUGFyYW1ldGVycygpO1xuICAgIH1cbiAgICBjcmVhdGVOdW1iZXJQYXJhbWV0ZXIobmFtZSwgZGVmYXVsdFZhbHVlLCBtaW5pbXVtLCBtYXhpbXVtLCB0b1N0cmluZ0Z1bmMsIHZpc2libGVOYW1lLCBleHBvc2VkKSB7XG4gICAgICAgIGlmICh0eXBlb2YgbmFtZSAhPT0gXCJzdHJpbmdcIiB8fCB0eXBlb2YgZGVmYXVsdFZhbHVlICE9PSBcIm51bWJlclwiIHx8IChtaW5pbXVtICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIG1pbmltdW0gIT09IFwibnVtYmVyXCIpIHx8IChtYXhpbXVtICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIG1heGltdW0gIT09IFwibnVtYmVyXCIpKSB7XG4gICAgICAgICAgICB0aHJvdyAoXCJJbnZsaWQgY29uc3RydWN0b3JcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiB0b1N0cmluZ0Z1bmMgIT0gXCJmdW5jdGlvblwiICYmIHRvU3RyaW5nRnVuYyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aHJvdyAoXCJ0b1N0cmluZ0Z1bmMgbXVzdCBiZSBhIGZ1bmN0aW9uIG9yIHVuZGVmaW5lZFwiKTtcbiAgICAgICAgfVxuICAgICAgICBuYW1lID0gbmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBpZiAodGhpcy5pc1BhcmFtZXRlck5hbWVBdmFpbGFibGUobmFtZSkpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcmFtID0gbmV3IE51bWJlclBhcmFtZXRlcih0aGlzLm93bmVyLCBuYW1lLCBkZWZhdWx0VmFsdWUsIG1pbmltdW0sIG1heGltdW0sIHRvU3RyaW5nRnVuYywgdmlzaWJsZU5hbWUsIGV4cG9zZWQpO1xuICAgICAgICAgICAgdGhpcy5hZGRQYXJhbWV0ZXIocGFyYW0pO1xuICAgICAgICAgICAgcGFyYW0uYWRkRXZlbnRMaXN0ZW5lcihcInBhcmFtZXRlcnNldFwiLCB0aGlzKTtcbiAgICAgICAgICAgIHJldHVybiBwYXJhbTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjcmVhdGVTdHJpbmdQYXJhbWV0ZXIobmFtZSwgZGVmYXVsdFZhbHVlLCBtYXhMZW5ndGgsIHRvU3RyaW5nRnVuYywgdmlzaWJsZU5hbWUsIGV4cG9zZWQpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBuYW1lICE9PSBcInN0cmluZ1wiIHx8IHR5cGVvZiBkZWZhdWx0VmFsdWUgIT09IFwic3RyaW5nXCIgfHwgKG1heExlbmd0aCAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiBtYXhMZW5ndGggIT09IFwibnVtYmVyXCIpKSB7XG4gICAgICAgICAgICB0aHJvdyAoXCJJbnZsaWQgY29uc3RydWN0b3JcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiB0b1N0cmluZ0Z1bmMgIT0gXCJmdW5jdGlvblwiICYmIHRvU3RyaW5nRnVuYyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aHJvdyAoXCJ0b1N0cmluZ0Z1bmMgbXVzdCBiZSBhIGZ1bmN0aW9uIG9yIHVuZGVmaW5lZFwiKTtcbiAgICAgICAgfVxuICAgICAgICBuYW1lID0gbmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBpZiAodGhpcy5pc1BhcmFtZXRlck5hbWVBdmFpbGFibGUobmFtZSkpIHtcbiAgICAgICAgICAgIHZhciBwYXJhbSA9IG5ldyBTdHJpbmdQYXJhbWV0ZXIodGhpcy5vd25lciwgbmFtZSwgZGVmYXVsdFZhbHVlLCBtYXhMZW5ndGgsIHRvU3RyaW5nRnVuYywgdmlzaWJsZU5hbWUsIGV4cG9zZWQpO1xuICAgICAgICAgICAgdGhpcy5hZGRQYXJhbWV0ZXIocGFyYW0pO1xuICAgICAgICAgICAgcGFyYW0uYWRkRXZlbnRMaXN0ZW5lcihcInBhcmFtZXRlcnNldFwiLCB0aGlzKTtcbiAgICAgICAgICAgIHJldHVybiBwYXJhbTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjcmVhdGVCdXR0b25QYXJhbWV0ZXIobmFtZSwgdmlzaWJsZU5hbWUsIGV4cG9zZWQpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBuYW1lICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICB0aHJvdyAoXCJJbnZhbGlkIGNvbnN0cnVjdG9yXCIpO1xuICAgICAgICB9XG4gICAgICAgIG5hbWUgPSBuYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGlmICh0aGlzLmlzUGFyYW1ldGVyTmFtZUF2YWlsYWJsZShuYW1lKSkge1xuICAgICAgICAgICAgY29uc3QgcGFyYW0gPSBuZXcgQnV0dG9uUGFyYW1ldGVyKHRoaXMub3duZXIsIG5hbWUsIHZpc2libGVOYW1lLCBleHBvc2VkKTtcbiAgICAgICAgICAgIHRoaXMuYWRkUGFyYW1ldGVyKHBhcmFtKTtcbiAgICAgICAgICAgIHBhcmFtLmFkZEV2ZW50TGlzdGVuZXIoXCJwYXJhbWV0ZXJzZXRcIiwgdGhpcyk7XG4gICAgICAgICAgICByZXR1cm4gcGFyYW07XG4gICAgICAgIH1cbiAgICB9XG4gICAgY3JlYXRlU3dpdGNoUGFyYW1ldGVyKG5hbWUsIGRlZmF1bHRWYWx1ZSwgbWluU3RhdGUsIG1heFN0YXRlLCB0b1N0cmluZ0Z1bmMsIHZpc2libGVOYW1lLCBleHBvc2VkKSB7XG4gICAgICAgIGlmICh0eXBlb2YgbmFtZSAhPT0gXCJzdHJpbmdcIiB8fCB0eXBlb2YgZGVmYXVsdFZhbHVlICE9PSBcIm51bWJlclwiIHx8IHR5cGVvZiBtaW5TdGF0ZSAhPT0gXCJudW1iZXJcIiB8fCB0eXBlb2YgbWF4U3RhdGUgIT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgIHRocm93IChcIkludmxpZCBjb25zdHJ1Y3RvclwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHRvU3RyaW5nRnVuYyAhPSBcImZ1bmN0aW9uXCIgJiYgdG9TdHJpbmdGdW5jICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRocm93IChcInRvU3RyaW5nRnVuYyBtdXN0IGJlIGEgZnVuY3Rpb24gb3IgdW5kZWZpbmVkXCIpO1xuICAgICAgICB9XG4gICAgICAgIG5hbWUgPSBuYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGlmICh0aGlzLmlzUGFyYW1ldGVyTmFtZUF2YWlsYWJsZShuYW1lKSkge1xuICAgICAgICAgICAgY29uc3QgcGFyYW0gPSBuZXcgU3dpdGNoUGFyYW1ldGVyKHRoaXMub3duZXIsIG5hbWUsIGRlZmF1bHRWYWx1ZSwgbWluU3RhdGUsIG1heFN0YXRlLCB0b1N0cmluZ0Z1bmMsIHZpc2libGVOYW1lLCBleHBvc2VkKTtcbiAgICAgICAgICAgIHRoaXMuYWRkUGFyYW1ldGVyKHBhcmFtKTtcbiAgICAgICAgICAgIHBhcmFtLmFkZEV2ZW50TGlzdGVuZXIoXCJwYXJhbWV0ZXJzZXRcIiwgdGhpcyk7XG4gICAgICAgICAgICByZXR1cm4gcGFyYW07XG4gICAgICAgIH1cbiAgICB9XG4gICAgY3JlYXRlTGlzdFBhcmFtZXRlcihuYW1lLCBkZWZhdWx0VmFsdWUsIGxpc3RPZlZhbHVlcywgdG9TdHJpbmdGdW5jLCB2aXNpYmxlTmFtZSwgZXhwb3NlZCkge1xuICAgICAgICBpZiAodHlwZW9mIG5hbWUgIT09IFwic3RyaW5nXCIgfHwgdHlwZW9mIGRlZmF1bHRWYWx1ZSA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhQXJyYXkuaXNBcnJheShsaXN0T2ZWYWx1ZXMpKSB7XG4gICAgICAgICAgICB0aHJvdyAoXCJJbnZsaWQgY29uc3RydWN0b3JcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiB0b1N0cmluZ0Z1bmMgIT0gXCJmdW5jdGlvblwiICYmIHRvU3RyaW5nRnVuYyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aHJvdyAoXCJ0b1N0cmluZ0Z1bmMgbXVzdCBiZSBhIGZ1bmN0aW9uIG9yIHVuZGVmaW5lZFwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobGlzdE9mVmFsdWVzLmluY2x1ZGVzKGRlZmF1bHRWYWx1ZSkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0aHJvdyAoXCJJbnZsaWQgY29uc3RydWN0b3IgLSBkZWZhdWx0IHZhbHVlIG1pc3NpbmdcIik7XG4gICAgICAgIH1cbiAgICAgICAgbmFtZSA9IG5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgaWYgKHRoaXMuaXNQYXJhbWV0ZXJOYW1lQXZhaWxhYmxlKG5hbWUpKSB7XG4gICAgICAgICAgICBjb25zdCBwYXJhbSA9IG5ldyBMaXN0UGFyYW1ldGVyKHRoaXMub3duZXIsIG5hbWUsIGRlZmF1bHRWYWx1ZSwgbGlzdE9mVmFsdWVzLCB0b1N0cmluZ0Z1bmMsIHZpc2libGVOYW1lLCBleHBvc2VkKTtcbiAgICAgICAgICAgIHRoaXMuYWRkUGFyYW1ldGVyKHBhcmFtKTtcbiAgICAgICAgICAgIHBhcmFtLmFkZEV2ZW50TGlzdGVuZXIoXCJwYXJhbWV0ZXJzZXRcIiwgdGhpcyk7XG4gICAgICAgICAgICByZXR1cm4gcGFyYW07XG4gICAgICAgIH1cbiAgICB9XG4gICAgY3JlYXRlVVJMUGFyYW1ldGVyKG5hbWUsIGRlZmF1bHRWYWx1ZSwgbWF4TGVuZ3RoLCB0b1N0cmluZ0Z1bmMsIHZpc2libGVOYW1lLCBleHBvc2VkKSB7XG4gICAgICAgIGlmICh0eXBlb2YgbmFtZSAhPT0gXCJzdHJpbmdcIiB8fCAobWF4TGVuZ3RoICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIG1heExlbmd0aCAhPT0gXCJudW1iZXJcIikpIHtcbiAgICAgICAgICAgIHRocm93IChcIkludmxpZCBjb25zdHJ1Y3RvclwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHRvU3RyaW5nRnVuYyAhPSBcImZ1bmN0aW9uXCIgJiYgdG9TdHJpbmdGdW5jICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRocm93IChcInRvU3RyaW5nRnVuYyBtdXN0IGJlIGEgZnVuY3Rpb24gb3IgdW5kZWZpbmVkXCIpO1xuICAgICAgICB9XG4gICAgICAgIG5hbWUgPSBuYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGlmICh0aGlzLmlzUGFyYW1ldGVyTmFtZUF2YWlsYWJsZShuYW1lKSkge1xuICAgICAgICAgICAgY29uc3QgcGFyYW0gPSBuZXcgVVJMUGFyYW1ldGVyKHRoaXMub3duZXIsIG5hbWUsIGRlZmF1bHRWYWx1ZSwgbWF4TGVuZ3RoLCB0b1N0cmluZ0Z1bmMsIHZpc2libGVOYW1lLCBleHBvc2VkKTtcbiAgICAgICAgICAgIHRoaXMuYWRkUGFyYW1ldGVyKHBhcmFtKTtcbiAgICAgICAgICAgIHBhcmFtLmFkZEV2ZW50TGlzdGVuZXIoXCJwYXJhbWV0ZXJzZXRcIiwgdGhpcyk7XG4gICAgICAgICAgICByZXR1cm4gcGFyYW07XG4gICAgICAgIH1cbiAgICB9XG4gICAgY3JlYXRlQXNzZXRQYXJhbWV0ZXIobmFtZSwgdmlzaWJsZU5hbWUsIGV4cG9zZWQpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBuYW1lICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICB0aHJvdyAoXCJJbnZsaWQgY29uc3RydWN0b3JcIik7XG4gICAgICAgIH1cbiAgICAgICAgbmFtZSA9IG5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgaWYgKHRoaXMuaXNQYXJhbWV0ZXJOYW1lQXZhaWxhYmxlKHRoaXMpKSB7XG4gICAgICAgICAgICBjb25zdCBwYXJhbSA9IG5ldyBBc3NldFBhcmFtZXRlcih0aGlzLm93bmVyLCBuYW1lLCB2aXNpYmxlTmFtZSwgZXhwb3NlZCk7XG4gICAgICAgICAgICB0aGlzLmFkZFBhcmFtZXRlcihwYXJhbSk7XG4gICAgICAgICAgICBwYXJhbS5hZGRFdmVudExpc3RlbmVyKFwicGFyYW1ldGVyc2V0XCIsIHRoaXMpO1xuICAgICAgICAgICAgcmV0dXJuIHBhcmFtO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNyZWF0ZVBhcmFtZXRlck1hbmFnZXIobmFtZSwgdmlzaWJsZU5hbWUsIGV4cG9zZWQpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBuYW1lICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICB0aHJvdyAoXCJJbnZsaWQgY29uc3RydWN0b3JcIik7XG4gICAgICAgIH1cbiAgICAgICAgbmFtZSA9IG5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgaWYgKHRoaXMuaXNQYXJhbWV0ZXJOYW1lQXZhaWxhYmxlKHRoaXMpKSB7XG4gICAgICAgICAgICBjb25zdCBwYXJhbSA9IG5ldyBBc3NldFBhcmFtZXRlcih0aGlzLm93bmVyLCBuYW1lLCB2aXNpYmxlTmFtZSwgZXhwb3NlZCk7XG4gICAgICAgICAgICB0aGlzLmFkZFBhcmFtZXRlcihwYXJhbSk7XG4gICAgICAgICAgICBwYXJhbS5hZGRFdmVudExpc3RlbmVyKFwicGFyYW1ldGVyc2V0XCIsIHRoaXMpO1xuICAgICAgICAgICAgcmV0dXJuIHBhcmFtO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldFBhcmFtZXRlckJ5TmFtZShuYW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZpbmRQYXJhbWV0ZXIobmFtZSk7XG4gICAgfVxuICAgIGdldFBhcmFtZXRlck9iamVjdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYnVpbGRQYXJhbWV0ZXJPYmplY3QoKTtcbiAgICB9XG4gICAgZ2V0UGFyYW1ldGVyTmFtZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBhcmFtZXRlckxpc3QuZmlsdGVyKChwKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gcC5leHBvc2VkO1xuICAgICAgICB9KS5tYXAoKHApID0+IHtcbiAgICAgICAgICAgIGlmIChwIGluc3RhbmNlb2YgUGFyYW1ldGVyTWFuYWdlcikge1xuICAgICAgICAgICAgICAgIHJldHVybiBwLmdldFBhcmFtZXRlck5hbWVzKCkubWFwKHJlY3Vyc2l2ZU5hbWUgPT4gYCR7cC5uYW1lfS4ke3JlY3Vyc2l2ZU5hbWV9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gW3AubmFtZV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLmZsYXQoKTtcbiAgICB9XG4gICAgc2V0UGFyYW1ldGVyQnlOYW1lKG5hbWUsIHZhbHVlLCB1cGRhdGVJbnRlcmZhY2VzID0gdHJ1ZSkge1xuICAgICAgICB2YXIgcGFyYW1ldGVyID0gdGhpcy5maW5kUGFyYW1ldGVyKG5hbWUpO1xuICAgICAgICBpZiAoIXBhcmFtZXRlcikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXJhbWV0ZXIuZXhwb3NlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcIkNhbm5vdCBzZXQgaGlkZGVuIHBhcmFtZXRlclwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNQbHVnaW5QYXJhbWV0ZXIocGFyYW1ldGVyKSkge1xuICAgICAgICAgICAgcGFyYW1ldGVyLnNldFZhbHVlKHZhbHVlLCB1cGRhdGVJbnRlcmZhY2VzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBkZWxldGVQYXJhbWV0ZXIocGFyYW1ldGVyKSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5wYXJhbWV0ZXJMaXN0LmZpbmRJbmRleChlID0+IGUgPT09IHBhcmFtZXRlcik7XG4gICAgICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICAgICAgICAvLyBEb2VzIGV4aXN0XG4gICAgICAgICAgICB0aGlzLnBhcmFtZXRlckxpc3Quc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBwYXJhbWV0ZXIubmFtZSwge1xuICAgICAgICAgICAgICAgIHZhbHVlOiB1bmRlZmluZWRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcGFyYW1ldGVyLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgZGVsZXRlQWxsUGFyYW1ldGVycygpIHtcbiAgICAgICAgZm9yIChjb25zdCBwYXJhbWV0ZXIgb2YgQXJyYXkuZnJvbSh0aGlzLnBhcmFtZXRlckxpc3QpKSB7XG4gICAgICAgICAgICB0aGlzLmRlbGV0ZVBhcmFtZXRlcihwYXJhbWV0ZXIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBzZXRQYXJhbWV0ZXJzQnlPYmplY3Qob2JqZWN0LCB1cGRhdGVJbnRlcmZhY2VzID0gdHJ1ZSkge1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICAgIGlmIChvYmplY3QuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVudHJ5ID0gb2JqZWN0W2tleV07XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBlbnRyeSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBhcmFtZXRlciA9IHRoaXMuZmluZFBhcmFtZXRlcihrZXkpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocGFyYW1ldGVyIGluc3RhbmNlb2YgUGFyYW1ldGVyTWFuYWdlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gTmVzdGVkIFBhcmFtZXRlciBzdG9yZVxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1ldGVyLnNldFBhcmFtZXRlcnNCeU9iamVjdChlbnRyeSwgdXBkYXRlSW50ZXJmYWNlcyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoaXNQbHVnaW5QYXJhbWV0ZXIocGFyYW1ldGVyKSAmJiBlbnRyeS5oYXNPd25Qcm9wZXJ0eShcInZhbHVlXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFBhcmFtZXRlckJ5TmFtZShrZXksIGVudHJ5LnZhbHVlLCB1cGRhdGVJbnRlcmZhY2VzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0UGFyYW1ldGVyQnlOYW1lKGtleSwgZW50cnksIHVwZGF0ZUludGVyZmFjZXMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiBlbnRyeSA9PSBcIm51bWJlclwiIHx8IHR5cGVvZiBlbnRyeSA9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0UGFyYW1ldGVyQnlOYW1lKGtleSwgZW50cnksIHVwZGF0ZUludGVyZmFjZXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgKFwiQ2Fubm90IHNldCBcIiArIGtleSArIFwiOiBOb3QgYSB2YWxpZCBvYmplY3RcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHRvSlNPTigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGFyYW1ldGVyTGlzdC5maWx0ZXIocCA9PiBwLmV4cG9zZWQpXG4gICAgICAgICAgICAucmVkdWNlKGZ1bmN0aW9uIChvYmosIGUpIHtcbiAgICAgICAgICAgIGlmIChlIGluc3RhbmNlb2YgUGFyYW1ldGVyTWFuYWdlcikge1xuICAgICAgICAgICAgICAgIG9ialtlLm5hbWVdID0gZS50b0pTT04oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGlzUGx1Z2luUGFyYW1ldGVyKGUpKSB7XG4gICAgICAgICAgICAgICAgb2JqW2UubmFtZV0gPSBlLmdldFBhcmFtZXRlck9iamVjdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG9iajtcbiAgICAgICAgfSwge30pO1xuICAgIH1cbiAgICBnZXQgcGFyYW1ldGVycygpIHsgcmV0dXJuIHRoaXMuYnVpbGRQYXJhbWV0ZXJPYmplY3QoKTsgfVxuICAgIGdldCBudW1QYXJhbWV0ZXJzKCkgeyByZXR1cm4gdGhpcy5wYXJhbWV0ZXJMaXN0Lmxlbmd0aDsgfVxufVxuIiwiZnVuY3Rpb24gY2hlY2tGZWF0dXJlQXJncyhzb3VyY2UsIGZlYXR1cmVPYmplY3QpIHtcbiAgICBpZiAoc291cmNlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhyb3cgKFwiU291cmNlIHBsdWdpbiBtdXN0IGJlIGRlZmluZWRcIik7XG4gICAgfVxuICAgIGlmIChmZWF0dXJlT2JqZWN0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhyb3cgKFwiRmVhdHVyZU9iamVjdCBtdXN0IGJlIGRlZmluZWRcIik7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgZmVhdHVyZU9iamVjdC5vdXRwdXRJbmRleCAhPT0gXCJudW1iZXJcIiB8fCB0eXBlb2YgZmVhdHVyZU9iamVjdC5mcmFtZVNpemUgIT09IFwibnVtYmVyXCIgfHwgdHlwZW9mIGZlYXR1cmVPYmplY3QuZmVhdHVyZXMgIT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgdGhyb3cgKFwiTWFsZm9ybWVkIGZlYXR1cmVPYmplY3RcIik7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuLyoganNoaW50IGVzdmVyc2lvbjogNiAqL1xuZXhwb3J0IGNsYXNzIFBsdWdpbkZlYXR1cmVJbnRlcmZhY2VSZWNlaXZlciB7XG4gICAgY29uc3RydWN0b3IoRmVhdHVyZUludGVyZmFjZUluc3RhbmNlLCBGYWN0b3J5RmVhdHVyZU1hcCkge1xuICAgICAgICB0aGlzLkZlYXR1cmVJbnRlcmZhY2VJbnN0YW5jZSA9IEZlYXR1cmVJbnRlcmZhY2VJbnN0YW5jZTtcbiAgICAgICAgdGhpcy5GYWN0b3J5RmVhdHVyZU1hcCA9IEZhY3RvcnlGZWF0dXJlTWFwO1xuICAgIH1cbiAgICByZXF1ZXN0RmVhdHVyZXMoZmVhdHVyZUxpc3QpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmZWF0dXJlTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5yZXF1ZXN0RmVhdHVyZXNGcm9tUGx1Z2luKGZlYXR1cmVMaXN0W2ldLnBsdWdpbiwge1xuICAgICAgICAgICAgICAgICdvdXRwdXRJbmRleCc6IGZlYXR1cmVMaXN0W2ldLm91dHB1dEluZGV4LFxuICAgICAgICAgICAgICAgICdmcmFtZVNpemUnOiBmZWF0dXJlTGlzdFtpXS5mcmFtZVNpemUsXG4gICAgICAgICAgICAgICAgJ2ZlYXR1cmVzJzogZmVhdHVyZUxpc3RbaV0uZmVhdHVyZXNcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlcXVlc3RGZWF0dXJlc0Zyb21QbHVnaW4oc291cmNlLCBmZWF0dXJlT2JqZWN0KSB7XG4gICAgICAgIGNoZWNrRmVhdHVyZUFyZ3Moc291cmNlLCBmZWF0dXJlT2JqZWN0KTtcbiAgICAgICAgdGhpcy5GYWN0b3J5RmVhdHVyZU1hcC5yZXF1ZXN0RmVhdHVyZXModGhpcywgc291cmNlLmZlYXR1cmVNYXAuU2VuZGVyLCBmZWF0dXJlT2JqZWN0KTtcbiAgICB9XG4gICAgY2FuY2VsRmVhdHVyZXNGcm9tUGx1Z2luKHNvdXJjZSwgZmVhdHVyZU9iamVjdCkge1xuICAgICAgICBjaGVja0ZlYXR1cmVBcmdzKHNvdXJjZSwgZmVhdHVyZU9iamVjdCk7XG4gICAgICAgIHRoaXMuRmFjdG9yeUZlYXR1cmVNYXAuZGVsZXRlRmVhdHVyZXModGhpcywgc291cmNlLmZlYXR1cmVNYXAuU2VuZGVyLCBmZWF0dXJlT2JqZWN0KTtcbiAgICB9XG4gICAgY2FuY2VsQWxsRmVhdHVyZXNGcm9tUGx1Z2luKHNvdXJjZSkge1xuICAgICAgICBpZiAoc291cmNlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRocm93IChcIlNvdXJjZSBwbHVnaW4gbXVzdCBiZSBkZWZpbmVkXCIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuRmFjdG9yeUZlYXR1cmVNYXAuZGVsZXRlRmVhdHVyZXModGhpcywgc291cmNlLmZlYXR1cmVNYXAuU2VuZGVyKTtcbiAgICB9XG4gICAgY2FuY2VsQWxsRmVhdHVyZXMoKSB7XG4gICAgICAgIHRoaXMuRmFjdG9yeUZlYXR1cmVNYXAuZGVsZXRlRmVhdHVyZXModGhpcyk7XG4gICAgfVxuICAgIHBvc3RGZWF0dXJlcyhtZXNzYWdlKSB7XG4gICAgICAgIC8qXG4gICAgICAgICAgICBDYWxsZWQgYnkgdGhlIFBsdWdpbiBGYWN0b3J5IHdpdGggdGhlIGZlYXR1cmUgbWVzc2FnZVxuICAgICAgICAgICAgbWVzc2FnZSA9IHtcbiAgICAgICAgICAgICAgICAncGx1Z2luJzogc291cmNlUGx1Z2luSW5zdGFuY2UsXG4gICAgICAgICAgICAgICAgJ291dHB1dEluZGV4Jzogb3V0cHV0SW5kZXgsXG4gICAgICAgICAgICAgICAgJ2ZyYW1lU2l6ZSc6IGZyYW1lU2l6ZSxcbiAgICAgICAgICAgICAgICAnZmVhdHVyZXMnOiB7fSBKUy1YdHJhY3QgZmVhdHVyZSByZXN1bHRzIG9iamVjdFxuICAgICAgICAgICAgfVxuICAgICAgICAqL1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMuY19mZWF0dXJlcyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICB0aGlzLmNfZmVhdHVyZXMobWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgO1xuICAgIGdldCBvbmZlYXR1cmVzKCkgeyByZXR1cm4gdGhpcy5jX2ZlYXR1cmVzOyB9XG4gICAgc2V0IG9uZmVhdHVyZXMoZnVuYykgeyB0aGlzLmNfZmVhdHVyZXMgPSBmdW5jOyB9XG59XG4iLCJpbXBvcnQgeyBPdXRwdXROb2RlIH0gZnJvbSBcIi4uLy4uL0ZhY3RvcnkvRXh0cmFjdG9ycy9PdXRwdXROb2RlXCI7XG5leHBvcnQgY2xhc3MgUGx1Z2luRmVhdHVyZUludGVyZmFjZVNlbmRlciB7XG4gICAgY29uc3RydWN0b3IoRmVhdHVyZUludGVyZmFjZUluc3RhbmNlLCBGYWN0b3J5RmVhdHVyZU1hcCkge1xuICAgICAgICB0aGlzLkZlYXR1cmVJbnRlcmZhY2VJbnN0YW5jZSA9IEZlYXR1cmVJbnRlcmZhY2VJbnN0YW5jZTtcbiAgICAgICAgdGhpcy5GYWN0b3J5RmVhdHVyZU1hcCA9IEZhY3RvcnlGZWF0dXJlTWFwO1xuICAgICAgICB0aGlzLm91dHB1dE5vZGVzID0gW107XG4gICAgfVxuICAgIHVwZGF0ZUZlYXR1cmVzKGZlYXR1cmVPYmplY3QsIG91dHB1dEluZGV4ID0gMCkge1xuICAgICAgICBpZiAodGhpcy5vdXRwdXROb2Rlc1tvdXRwdXRJbmRleF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaWYgKG91dHB1dEluZGV4ID4gdGhpcy5GZWF0dXJlSW50ZXJmYWNlSW5zdGFuY2UubnVtT3V0cHV0cykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlJlcXVlc3RlZCBhbiBvdXRwdXQgdGhhdCBkb2VzIG5vdCBleGlzdFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMub3V0cHV0Tm9kZXNbb3V0cHV0SW5kZXhdID0gbmV3IE91dHB1dE5vZGUodGhpcywgdGhpcy5GZWF0dXJlSW50ZXJmYWNlSW5zdGFuY2Uub3V0cHV0c1tvdXRwdXRJbmRleF0sIG91dHB1dEluZGV4KTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBzaSA9IDA7IHNpIDwgZmVhdHVyZU9iamVjdC5sZW5ndGg7IHNpKyspIHtcbiAgICAgICAgICAgIGxldCBleHRyYWN0b3IgPSB0aGlzLm91dHB1dE5vZGVzW291dHB1dEluZGV4XS5maW5kRXh0cmFjdG9yKGZlYXR1cmVPYmplY3Rbc2ldLmZyYW1lU2l6ZSk7XG4gICAgICAgICAgICBpZiAoIWV4dHJhY3Rvcikge1xuICAgICAgICAgICAgICAgIGV4dHJhY3RvciA9IHRoaXMub3V0cHV0Tm9kZXNbb3V0cHV0SW5kZXhdLmFkZEV4dHJhY3RvcihmZWF0dXJlT2JqZWN0W3NpXS5mcmFtZVNpemUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZXh0cmFjdG9yLnNldEZlYXR1cmVzKGZlYXR1cmVPYmplY3Rbc2ldLmZlYXR1cmVzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwb3N0RmVhdHVyZXMoZmVhdHVyZU9iamVjdCkge1xuICAgICAgICAvKlxuICAgICAgICAgICAgQ2FsbGVkIGJ5IHRoZSBpbmRpdmlkdWFsIGV4dHJhY3RvciBpbnN0YW5jZXM6XG4gICAgICAgICAgICBmZWF0dXJlT2JqZWN0ID0geydmcmFtZVNpemUnOiBmcmFtZVNpemUsXG4gICAgICAgICAgICAnb3V0cHV0SW5kZXgnOiBvdXRwdXRJbmRleCxcbiAgICAgICAgICAgICdyZXN1bHRzJzpbXX1cbiAgICAgICAgKi9cbiAgICAgICAgdGhpcy5GZWF0dXJlSW50ZXJmYWNlSW5zdGFuY2UuZmFjdG9yeS5GZWF0dXJlTWFwLnBvc3RGZWF0dXJlcyh7XG4gICAgICAgICAgICAnc291cmNlJzogdGhpcyxcbiAgICAgICAgICAgICdvdXRwdXRJbmRleCc6IGZlYXR1cmVPYmplY3Qub3V0cHV0SW5kZXgsXG4gICAgICAgICAgICAnZnJhbWVTaXplJzogZmVhdHVyZU9iamVjdC5mcmFtZVNpemUsXG4gICAgICAgICAgICAncmVzdWx0cyc6IGZlYXR1cmVPYmplY3QucmVzdWx0c1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgO1xufVxuIiwiaW1wb3J0IHsgUGx1Z2luRmVhdHVyZUludGVyZmFjZVJlY2VpdmVyIH0gZnJvbSBcIi4vUGx1Z2luRmVhdHVyZUludGVyZmFjZVJlY2VpdmVyXCI7XG5pbXBvcnQgeyBQbHVnaW5GZWF0dXJlSW50ZXJmYWNlU2VuZGVyIH0gZnJvbSBcIi4vUGx1Z2luRmVhdHVyZUludGVyZmFjZVNlbmRlclwiO1xuZXhwb3J0IGNsYXNzIFBsdWdpbkZlYXR1cmVJbnRlcmZhY2Uge1xuICAgIGNvbnN0cnVjdG9yKHBsdWdpbikge1xuICAgICAgICB0aGlzLnBsdWdpbiA9IHBsdWdpbjtcbiAgICAgICAgdGhpcy5SZWNlaXZlciA9IG5ldyBQbHVnaW5GZWF0dXJlSW50ZXJmYWNlUmVjZWl2ZXIodGhpcy5wbHVnaW4sIHRoaXMucGx1Z2luLmZhY3RvcnkuRmVhdHVyZU1hcCk7XG4gICAgICAgIHRoaXMuU2VuZGVyID0gbmV3IFBsdWdpbkZlYXR1cmVJbnRlcmZhY2VTZW5kZXIodGhpcy5wbHVnaW4sIHRoaXMucGx1Z2luLmZhY3RvcnkuRmVhdHVyZU1hcCk7XG4gICAgfVxuICAgIGdldCBvbmZlYXR1cmVzKCkgeyByZXR1cm4gdGhpcy5SZWNlaXZlci5vbmZlYXR1cmVzOyB9XG4gICAgc2V0IG9uZmVhdHVyZXMoZnVuYykgeyB0aGlzLlJlY2VpdmVyLm9uZmVhdHVyZXMgPSBmdW5jOyB9XG59XG4iLCJpbXBvcnQgeyBpc0F1dG9tYXRlZFBsdWdpblBhcmFtZXRlciwgaXNQbHVnaW5QYXJhbWV0ZXIgfSBmcm9tIFwiLi9wYXJhbWV0ZXJzL0lQbHVnaW5QYXJhbWV0ZXJcIjtcbmV4cG9ydCBjbGFzcyBQbHVnaW5JbnRlcmZhY2VNZXNzYWdlSHViIHtcbiAgICBjb25zdHJ1Y3Rvcihvd25lcikge1xuICAgICAgICB0aGlzLm93bmVyID0gb3duZXI7XG4gICAgICAgIHRoaXMud2luZG93TWVzc2FnZUxpc3QgPSBbXTtcbiAgICAgICAgdGhpcy5ldmVudFRhcmdldCA9IG5ldyBFdmVudFRhcmdldCgpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgdGhpcyk7XG4gICAgfVxuICAgIGJ1aWxkUGx1Z2luUGFyYW1ldGVySlNPTihzb3VyY2VzKSB7XG4gICAgICAgIGNvbnN0IG5hbWVzID0gdGhpcy5vd25lci5wYXJhbWV0ZXJzLmdldFBhcmFtZXRlck5hbWVzKCk7XG4gICAgICAgIGNvbnN0IE8gPSB7fTtcbiAgICAgICAgaWYgKHNvdXJjZXMubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgIHNvdXJjZXMgPSBuYW1lcztcbiAgICAgICAgfVxuICAgICAgICBuYW1lcy5maWx0ZXIoKG5hbWUpID0+IHNvdXJjZXMuaW5jbHVkZXMobmFtZSkpLmZvckVhY2goKG5hbWUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBhcmFtID0gdGhpcy5vd25lci5wYXJhbWV0ZXJzLmdldFBhcmFtZXRlckJ5TmFtZShuYW1lKTtcbiAgICAgICAgICAgIGlmIChpc1BsdWdpblBhcmFtZXRlcihwYXJhbSkpIHtcbiAgICAgICAgICAgICAgICBPW25hbWVdID0gcGFyYW0uZ2V0UGFyYW1ldGVyT2JqZWN0KCk7XG4gICAgICAgICAgICAgICAgT1tuYW1lXS5uYW1lID0gbmFtZTtcbiAgICAgICAgICAgICAgICBpZiAoaXNBdXRvbWF0ZWRQbHVnaW5QYXJhbWV0ZXIocGFyYW0pKSB7XG4gICAgICAgICAgICAgICAgICAgIE9bbmFtZV0uYXV0b21hdGVkID0gcGFyYW0uZW5hYmxlZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gTztcbiAgICB9XG4gICAgYnVpbGRQYXJhbWV0ZXJVcGRhdGVQYXlsb2FkKHNlbmRlcl9pZCwgc291cmNlcyA9IFtdKSB7XG4gICAgICAgIGNvbnN0IG1zZyA9IHtcbiAgICAgICAgICAgIHNlbmRlcl9pZCxcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwidXBkYXRlUGFyYW1ldGVyc1wiLFxuICAgICAgICAgICAgcGFyYW1ldGVyczogdGhpcy5idWlsZFBsdWdpblBhcmFtZXRlckpTT04oc291cmNlcylcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIG1zZztcbiAgICB9XG4gICAgc2VuZFBhcmFtZXRlclVwZGF0ZXMoY2hhbm5lbCwgc291cmNlcyA9IFtdKSB7XG4gICAgICAgIGNoYW5uZWwucG9zdE1lc3NhZ2UodGhpcy5idWlsZFBhcmFtZXRlclVwZGF0ZVBheWxvYWQodW5kZWZpbmVkLCBzb3VyY2VzKSwgbG9jYXRpb24ub3JpZ2luKTtcbiAgICB9XG4gICAgYnJvYWRjYXN0UGFyYW1ldGVyVXBkYXRlcyhzZW5kZXJfaWQsIHNvdXJjZXMpIHtcbiAgICAgICAgY29uc3QgbXNnID0gdGhpcy5idWlsZFBhcmFtZXRlclVwZGF0ZVBheWxvYWQoc2VuZGVyX2lkLCBzb3VyY2VzKTtcbiAgICAgICAgdGhpcy53aW5kb3dNZXNzYWdlTGlzdC5mb3JFYWNoKGZ1bmN0aW9uICh3KSB7XG4gICAgICAgICAgICB3LnBvc3RNZXNzYWdlKG1zZywgbG9jYXRpb24ub3JpZ2luKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGJyb2FkY2FzdFN0YXRlQ2hhbmdlKGxldmVsLCB0ZXJtLCB2YWx1ZSkge1xuICAgICAgICB2YXIgbXNnID0ge1xuICAgICAgICAgICAgbWVzc2FnZTogXCJ1cGRhdGVTdGF0ZVwiLFxuICAgICAgICAgICAgbGV2ZWwsXG4gICAgICAgICAgICB0ZXJtLFxuICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy53aW5kb3dNZXNzYWdlTGlzdC5mb3JFYWNoKGZ1bmN0aW9uICh3KSB7XG4gICAgICAgICAgICB3LnBvc3RNZXNzYWdlKG1zZywgbG9jYXRpb24ub3JpZ2luKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHNldFBhcmFtZXRlck1lc3NhZ2UoZSkge1xuICAgICAgICBjb25zdCB1cGRhdGVPYmplY3RzID0gW107XG4gICAgICAgIGNvbnN0IHBhcmFtZXRlcnMgPSBKU09OLnBhcnNlKGUuZGF0YS5wYXJhbWV0ZXJzKTtcbiAgICAgICAgT2JqZWN0LmtleXMocGFyYW1ldGVycykuZm9yRWFjaCgobmFtZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGFyYW1ldGVyT2JqZWN0ID0gdGhpcy5vd25lci5wYXJhbWV0ZXJzLmdldFBhcmFtZXRlckJ5TmFtZShuYW1lKTtcbiAgICAgICAgICAgIGlmIChpc1BsdWdpblBhcmFtZXRlcihwYXJhbWV0ZXJPYmplY3QpKSB7XG4gICAgICAgICAgICAgICAgcGFyYW1ldGVyT2JqZWN0LnNldFZhbHVlKHBhcmFtZXRlcnNbbmFtZV0udmFsdWUsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICB1cGRhdGVPYmplY3RzLnB1c2gobmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdXBkYXRlT2JqZWN0cztcbiAgICB9XG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIHRoaXMpO1xuICAgIH1cbiAgICBhZGRFdmVudExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyLCBvcHRpb25zKSB7XG4gICAgICAgIHRoaXMuZXZlbnRUYXJnZXQuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lciwgb3B0aW9ucyk7XG4gICAgfVxuICAgIHJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXIsIG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5ldmVudFRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyLCBvcHRpb25zKTtcbiAgICB9XG4gICAgaGFuZGxlRXZlbnQoZSkge1xuICAgICAgICBpZiAoIXRoaXMud2luZG93TWVzc2FnZUxpc3QuaW5jbHVkZXMoZS5zb3VyY2UpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgd2luZG93ID0gZS5zb3VyY2U7XG4gICAgICAgIHN3aXRjaCAoZS5kYXRhLm1lc3NhZ2UpIHtcbiAgICAgICAgICAgIGNhc2UgXCJzZXRQYXJhbWV0ZXJCeU5hbWVcIjpcbiAgICAgICAgICAgICAgICBpZiAoZS5kYXRhLnBhcmFtZXRlci5uYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhcmFtZXRlck9iamVjdCA9IHRoaXMub3duZXIucGFyYW1ldGVycy5nZXRQYXJhbWV0ZXJCeU5hbWUoZS5kYXRhLnBhcmFtZXRlci5uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzUGx1Z2luUGFyYW1ldGVyKHBhcmFtZXRlck9iamVjdCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtZXRlck9iamVjdC5zZXRWYWx1ZShlLmRhdGEucGFyYW1ldGVyLnZhbHVlLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJyb2FkY2FzdFBhcmFtZXRlclVwZGF0ZXMoZS5kYXRhLnNlbmRlcl9pZCwgW2UuZGF0YS5wYXJhbWV0ZXIubmFtZV0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInNldFBhcmFtZXRlcnNCeU9iamVjdFwiOlxuICAgICAgICAgICAgICAgIGlmIChlLmRhdGEucGFyYW1ldGVyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHVwZGF0ZU9iamVjdHMgPSB0aGlzLnNldFBhcmFtZXRlck1lc3NhZ2UoZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYnJvYWRjYXN0UGFyYW1ldGVyVXBkYXRlcyhlLmRhdGEuc2VuZGVyX2lkLCB1cGRhdGVPYmplY3RzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwicmVxdWVzdFBhcmFtZXRlcnNcIjpcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGUuZGF0YS5uYW1lID09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZW5kUGFyYW1ldGVyVXBkYXRlcyh3aW5kb3csIFtlLmRhdGEubmFtZV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZW5kUGFyYW1ldGVyVXBkYXRlcyh3aW5kb3cpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJyZXF1ZXN0U2Vzc2lvblN0YXRlXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5icm9hZGNhc3RTdGF0ZUNoYW5nZShcInNlc3Npb25cIiwgZS5kYXRhLnRlcm0sIHRoaXMub3duZXIuc2Vzc2lvbkRhdGFJbnRlcmZhY2UucmVxdWVzdFRlcm0oZS5kYXRhLnRlcm0pKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJyZXF1ZXN0VHJhY2tTdGF0ZVwiOlxuICAgICAgICAgICAgICAgIHRoaXMuYnJvYWRjYXN0U3RhdGVDaGFuZ2UoXCJ0cmFja1wiLCBlLmRhdGEudGVybSwgdGhpcy5vd25lci50cmFja0RhdGFJbnRlcmZhY2UucmVxdWVzdFRlcm0oZS5kYXRhLnRlcm0pKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJyZXF1ZXN0VXNlclN0YXRlXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5icm9hZGNhc3RTdGF0ZUNoYW5nZShcInVzZXJcIiwgZS5kYXRhLnRlcm0sIHRoaXMub3duZXIudXNlckRhdGFJbnRlcmZhY2UucmVxdWVzdFRlcm0oZS5kYXRhLnRlcm0pKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJyZXF1ZXN0UGx1Z2luU3RhdGVcIjpcbiAgICAgICAgICAgICAgICB0aGlzLmJyb2FkY2FzdFN0YXRlQ2hhbmdlKFwicGx1Z2luXCIsIGUuZGF0YS50ZXJtLCB0aGlzLm93bmVyLnBsdWdpbkRhdGFJbnRlcmZhY2UucmVxdWVzdFRlcm0oZS5kYXRhLnRlcm0pKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJjdXN0b21NZXNzYWdlXCI6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRocm93IChcIlVua25vd24gbWVzc2FnZSB0eXBlIFxcXCJcIiArIGUuZGF0YS5tZXNzYWdlICsgXCJcXFwiXCIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHNlbmRTdGF0ZShsZXZlbCwgdGVybSkge1xuICAgICAgICBpZiAobGV2ZWwgPT0gXCJzZXNzaW9uXCIpIHtcbiAgICAgICAgICAgIHRoaXMuYnJvYWRjYXN0U3RhdGVDaGFuZ2UoXCJzZXNzaW9uXCIsIHRlcm0sIHRoaXMub3duZXIuc2Vzc2lvbkRhdGFJbnRlcmZhY2UucmVxdWVzdFRlcm0odGVybSkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGxldmVsID09IFwidHJhY2tcIikge1xuICAgICAgICAgICAgdGhpcy5icm9hZGNhc3RTdGF0ZUNoYW5nZShcInRyYWNrXCIsIHRlcm0sIHRoaXMub3duZXIudHJhY2tEYXRhSW50ZXJmYWNlLnJlcXVlc3RUZXJtKHRlcm0pKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChsZXZlbCA9PSBcInVzZXJcIikge1xuICAgICAgICAgICAgdGhpcy5icm9hZGNhc3RTdGF0ZUNoYW5nZShcInVzZXJcIiwgdGVybSwgdGhpcy5vd25lci51c2VyRGF0YUludGVyZmFjZS5yZXF1ZXN0VGVybSh0ZXJtKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobGV2ZWwgPT0gXCJwbHVnaW5cIikge1xuICAgICAgICAgICAgdGhpcy5icm9hZGNhc3RTdGF0ZUNoYW5nZShcInBsdWdpblwiLCB0ZXJtLCB0aGlzLm93bmVyLnBsdWdpbkRhdGFJbnRlcmZhY2UucmVxdWVzdFRlcm0odGVybSkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgXCJJbnZhbGlkIHN0YXRlIGxldmVsIG9wdGlvblwiO1xuICAgICAgICB9XG4gICAgfVxuICAgIHVwZGF0ZUludGVyZmFjZXMoYXV0b21hdGlvbk9ubHkgPSBmYWxzZSkge1xuICAgICAgICBpZiAoYXV0b21hdGlvbk9ubHkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgYXV0b21hdGlvbk9ubHkgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYXV0b21hdGlvbk9ubHkpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcmFtZXRlck5hbWVzID0gdGhpcy5vd25lci5wYXJhbWV0ZXJzLmdldFBhcmFtZXRlck5hbWVzKCk7XG4gICAgICAgICAgICBjb25zdCBzb3VyY2VzID0gcGFyYW1ldGVyTmFtZXMuZmlsdGVyKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBhcmFtID0gdGhpcy5vd25lci5wYXJhbWV0ZXJzLmdldFBhcmFtZXRlckJ5TmFtZShuYW1lKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gKHBhcmFtLmF1dG9tYXRhYmxlICYmIHBhcmFtLmVuYWJsZWQgPT09IHRydWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoc291cmNlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5icm9hZGNhc3RQYXJhbWV0ZXJVcGRhdGVzKHVuZGVmaW5lZCwgc291cmNlcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmJyb2FkY2FzdFBhcmFtZXRlclVwZGF0ZXMoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjbG9zZVdpbmRvd3MoKSB7XG4gICAgICAgIHdoaWxlICh0aGlzLndpbmRvd01lc3NhZ2VMaXN0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGNvbnN0IHcgPSB0aGlzLndpbmRvd01lc3NhZ2VMaXN0LnBvcCgpO1xuICAgICAgICAgICAgdy5jbG9zZSgpO1xuICAgICAgICB9XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCB0aGlzKTtcbiAgICB9XG4gICAgcmVnaXN0ZXJXaW5kb3codykge1xuICAgICAgICBpZiAodGhpcy53aW5kb3dNZXNzYWdlTGlzdC5pbmNsdWRlcyh3KSkge1xuICAgICAgICAgICAgdGhpcy53aW5kb3dNZXNzYWdlTGlzdC5zcGxpY2UodGhpcy53aW5kb3dNZXNzYWdlTGlzdC5pbmRleE9mKHcpLCAxKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLndpbmRvd01lc3NhZ2VMaXN0LnB1c2godyk7XG4gICAgICAgIHcucGx1Z2luSW5zdGFuY2UgPSB0aGlzLm93bmVyO1xuICAgICAgICB0aGlzLnNlbmRQYXJhbWV0ZXJVcGRhdGVzKHcpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmVtb3ZlV2luZG93KHcpIHtcbiAgICAgICAgaWYgKHRoaXMud2luZG93TWVzc2FnZUxpc3QuaW5jbHVkZXModykpIHtcbiAgICAgICAgICAgIHRoaXMud2luZG93TWVzc2FnZUxpc3Quc3BsaWNlKHRoaXMud2luZG93TWVzc2FnZUxpc3QuaW5kZXhPZih3KSwgMSk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCIvLyBBZGQgZ2V0SW5wdXRzIHRvIGFsbCBBdWRpb05vZGVzIHRvIGVhc2UgZGVwbG95bWVudFxuLypnbG9iYWxzIEF1ZGlvTm9kZSwgV29ya2VyLCBjb25zb2xlLCB3aW5kb3csIGRvY3VtZW50LCBQcm9taXNlLCBYTUxIdHRwUmVxdWVzdCAqL1xuLyplc2xpbnQtZW52IGJyb3dzZXIgKi9cbi8qanNoaW50IGVzdmVyc2lvbjogNiAqL1xuaW1wb3J0IHsgUGFyYW1ldGVyTWFuYWdlciB9IGZyb20gXCIuL1BhcmFtZXRlck1hbmFnZXJcIjtcbmltcG9ydCB7IFBsdWdpbkludGVyZmFjZU1lc3NhZ2VIdWIgfSBmcm9tIFwiLi9QbHVnaW5JbnRlcmZhY2VNZXNzYWdlSHViXCI7XG5pbXBvcnQgeyBQbHVnaW5GZWF0dXJlSW50ZXJmYWNlIH0gZnJvbSBcIi4vUGx1Z2luRmVhdHVyZUludGVyZmFjZS9pbmRleFwiO1xuaW1wb3J0IHsgTGlua2VkU3RvcmUgfSBmcm9tIFwiLi4vTGlua2VkU3RvcmVcIjtcbmltcG9ydCB7IExpbmtlZFN0b3JlSW50ZXJmYWNlIH0gZnJvbSBcIi4vTGlua2VkU3RvcmVJbnRlcmZhY2VcIjtcbi8vIGlmICh0eXBlb2YgQXVkaW9Ob2RlID09PSBcImZ1bmN0aW9uXCIgJiYgd2luZG93LmltcG9ydFNjcmlwdHMgPT09IHVuZGVmaW5lZCkge1xuLy8gICAgIEF1ZGlvTm9kZS5wcm90b3R5cGUuZ2V0SW5wdXRzID0gZnVuY3Rpb24gKCkge1xuLy8gICAgICAgICByZXR1cm4gW3RoaXNdO1xuLy8gICAgIH07XG4vLyB9XG5leHBvcnQgY2xhc3MgQmFzZVBsdWdpbiB7XG4gICAgY29uc3RydWN0b3IoZmFjdG9yeSwgcGx1Z2luT3duZXIsIHByb3RvdHlwZU9iamVjdCkge1xuICAgICAgICB0aGlzLmZhY3RvcnkgPSBmYWN0b3J5O1xuICAgICAgICB0aGlzLnBsdWdpbk93bmVyID0gcGx1Z2luT3duZXI7XG4gICAgICAgIHRoaXMucHJvdG90eXBlT2JqZWN0ID0gcHJvdG90eXBlT2JqZWN0O1xuICAgICAgICB0aGlzLmlucHV0TGlzdCA9IFtdO1xuICAgICAgICB0aGlzLm91dHB1dExpc3QgPSBbXTtcbiAgICAgICAgdGhpcy5kZWxheVNhbXBsZXMgPSAwO1xuICAgICAgICB0aGlzLmV2ZW50VGFyZ2V0ID0gbmV3IEV2ZW50VGFyZ2V0KCk7XG4gICAgICAgIHRoaXMuZXh0ZXJuYWxJbnRlcmZhY2UgPSBuZXcgUGx1Z2luSW50ZXJmYWNlTWVzc2FnZUh1Yih0aGlzKTtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gdGhpcy5mYWN0b3J5LmNvbnRleHQ7XG4gICAgICAgIHRoaXMuZmVhdHVyZU1hcCA9IG5ldyBQbHVnaW5GZWF0dXJlSW50ZXJmYWNlKHRoaXMpO1xuICAgICAgICB0aGlzLnBhcmFtZXRlcnMgPSBuZXcgUGFyYW1ldGVyTWFuYWdlcih0aGlzLCB0aGlzLmV4dGVybmFsSW50ZXJmYWNlKTtcbiAgICAgICAgdGhpcy5QbHVnaW5EYXRhID0gbmV3IExpbmtlZFN0b3JlKFwiUGx1Z2luXCIpO1xuICAgICAgICB0aGlzLnNlc3Npb25EYXRhSW50ZXJmYWNlID0gbmV3IExpbmtlZFN0b3JlSW50ZXJmYWNlKHRoaXMsIHRoaXMuZmFjdG9yeS5TZXNzaW9uRGF0YSk7XG4gICAgICAgIHRoaXMudXNlckRhdGFJbnRlcmZhY2UgPSBuZXcgTGlua2VkU3RvcmVJbnRlcmZhY2UodGhpcywgdGhpcy5mYWN0b3J5LlVzZXJEYXRhKTtcbiAgICAgICAgdGhpcy50cmFja0RhdGFJbnRlcmZhY2UgPSBuZXcgTGlua2VkU3RvcmVJbnRlcmZhY2UodGhpcywgdGhpcy5UcmFja0RhdGEpO1xuICAgICAgICB0aGlzLnBsdWdpbkRhdGFJbnRlcmZhY2UgPSBuZXcgTGlua2VkU3RvcmVJbnRlcmZhY2UodGhpcywgdGhpcy5QbHVnaW5EYXRhKTtcbiAgICAgICAgdGhpcy5TZXNzaW9uRGF0YSA9IHRoaXMuZmFjdG9yeS5TZXNzaW9uRGF0YTtcbiAgICAgICAgdGhpcy5Vc2VyRGF0YSA9IHRoaXMuZmFjdG9yeS5Vc2VyRGF0YTtcbiAgICAgICAgdGhpcy5uYW1lID0gdGhpcy5wcm90b3R5cGVPYmplY3QubmFtZTtcbiAgICAgICAgdGhpcy51bmlxdWVJRCA9IHRoaXMucHJvdG90eXBlT2JqZWN0LnVuaXF1ZUlEO1xuICAgICAgICB0aGlzLnZlcnNpb24gPSB0aGlzLnByb3RvdHlwZU9iamVjdC52ZXJzaW9uO1xuICAgICAgICB0aGlzLnBhcmFtZXRlcnMuYWRkRXZlbnRMaXN0ZW5lcihcInBhcmFtZXRlcnNldFwiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgdGhpcy5ldmVudFRhcmdldC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcInBhcmFtZXRlcnNldFwiLCB7IGRldGFpbDogZS5kZXRhaWwgfSkpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgc3RhcnQoKSB7IH1cbiAgICBzdG9wKCkgeyB9XG4gICAgb25sb2FkZWQoKSB7IH1cbiAgICBvbnVubG9hZGVkKCkgeyB9XG4gICAgZGVjb25zdHJ1Y3QoKSB7IH1cbiAgICBkZWxldGVJTyhub2RlLCBsaXN0KSB7XG4gICAgICAgIHZhciBpID0gbGlzdC5maW5kSW5kZXgoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHJldHVybiBlID09PSB0aGlzO1xuICAgICAgICB9LCBub2RlKTtcbiAgICAgICAgaWYgKGkgPT09IC0xKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgbGlzdC5zcGxpY2UoaSwgMSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBjaGFuZ2VPd25lcihuZXdPd25lcikge1xuICAgICAgICB0aGlzLnBsdWdpbk93bmVyID0gbmV3T3duZXI7XG4gICAgfVxuICAgIGRlbGV0ZSgpIHtcbiAgICAgICAgdGhpcy5zZXNzaW9uRGF0YUludGVyZmFjZS5kZXN0cm95KCk7XG4gICAgICAgIHRoaXMudXNlckRhdGFJbnRlcmZhY2UuZGVzdHJveSgpO1xuICAgICAgICB0aGlzLnRyYWNrRGF0YUludGVyZmFjZS5kZXN0cm95KCk7XG4gICAgICAgIHRoaXMucGx1Z2luRGF0YUludGVyZmFjZS5kZXN0cm95KCk7XG4gICAgICAgIHRoaXMuc3RvcCgpO1xuICAgICAgICB0aGlzLm9udW5sb2FkZWQoKTtcbiAgICAgICAgaWYgKHRoaXMuZGVjb25zdHJ1Y3QgJiYgdHlwZW9mIHRoaXMuZGVjb25zdHJ1Y3QgPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICB0aGlzLmRlY29uc3RydWN0KCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gRGVwY3JlY2F0ZWQgLSBVc2UgLmRlbGV0ZSgpIGluc3RlYWRcbiAgICBkZXN0cm95KCkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiREVQUkVDQVRFRCAtIFVzZSAuZGVsZXRlKCkgaW5zdGVhZFwiKTtcbiAgICAgICAgdGhpcy5kZWxldGUoKTtcbiAgICB9XG4gICAgYWRkSW5wdXQobm9kZSkge1xuICAgICAgICB0aGlzLmlucHV0TGlzdC5wdXNoKG5vZGUpO1xuICAgICAgICByZXR1cm4gdGhpcy5pbnB1dExpc3Q7XG4gICAgfVxuICAgIGRlbGV0ZUlucHV0KG5vZGUpIHtcbiAgICAgICAgdGhpcy5kZWxldGVJTyhub2RlLCB0aGlzLmlucHV0TGlzdCk7XG4gICAgICAgIHJldHVybiB0aGlzLmlucHV0TGlzdDtcbiAgICB9XG4gICAgYWRkT3V0cHV0KG5vZGUpIHtcbiAgICAgICAgdGhpcy5vdXRwdXRMaXN0LnB1c2gobm9kZSk7XG4gICAgICAgIHJldHVybiB0aGlzLm91dHB1dExpc3Q7XG4gICAgfVxuICAgIDtcbiAgICBkZWxldGVPdXRwdXQobm9kZSkge1xuICAgICAgICB0aGlzLmRlbGV0ZUlPKG5vZGUsIHRoaXMub3V0cHV0TGlzdCk7XG4gICAgICAgIHJldHVybiB0aGlzLm91dHB1dExpc3Q7XG4gICAgfVxuICAgIDtcbiAgICBzZXRQcm9jZXNzaW5nRGVsYXlBc1NlY29uZHMoc2Vjb25kcykge1xuICAgICAgICBjb25zdCBmcyA9IHRoaXMuZmFjdG9yeS5jb250ZXh0LnNhbXBsZVJhdGU7XG4gICAgICAgIGlmICh0eXBlb2Ygc2Vjb25kcyA9PSBcIm51bWJlclwiICYmIGlzRmluaXRlKHNlY29uZHMpICYmIHNlY29uZHMgPj0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2V0UHJvY2Vzc2luZ0RlbGF5QXNTYW1wbGVzKHNlY29uZHMgKiBmcykgLyBmcztcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJzZXRQcm9jZXNzaW5nRGVsYXlBc1NlY29uZHMgSW52YWxpZCBhcmd1bWVudFwiKTtcbiAgICB9XG4gICAgc2V0UHJvY2Vzc2luZ0RlbGF5QXNTYW1wbGVzKHNhbXBsZXMpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBzYW1wbGVzID09IFwibnVtYmVyXCIgJiYgaXNGaW5pdGUoc2FtcGxlcykgJiYgc2FtcGxlcyA+PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmRlbGF5U2FtcGxlcyA9IHNhbXBsZXM7XG4gICAgICAgICAgICBjb25zdCBlID0gbmV3IEV2ZW50KFwiYWx0ZXJkZWxheVwiKTtcbiAgICAgICAgICAgIHRoaXMuZXZlbnRUYXJnZXQuZGlzcGF0Y2hFdmVudChlKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRlbGF5U2FtcGxlcztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInNldFByb2Nlc3NpbmdEZWxheUFzU2FtcGxlcyBJbnZhbGlkIGFyZ3VtZW50XCIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbm5lY3QoZGVzdCwgb3V0cHV0LCBpbnB1dCkge1xuICAgICAgICBpZiAoZGVzdCBpbnN0YW5jZW9mIEF1ZGlvUGFyYW0pIHtcbiAgICAgICAgICAgIHRoaXMub3V0cHV0c1swXS5jb25uZWN0KGRlc3QsIG91dHB1dCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm91dHB1dHNbMF0uY29ubmVjdChkZXN0LCBvdXRwdXQsIGlucHV0KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBkaXNjb25uZWN0KGRlc3QsIG91dHB1dCwgaW5wdXQpIHtcbiAgICAgICAgaWYgKGRlc3QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5vdXRwdXRzWzBdLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChkZXN0IGluc3RhbmNlb2YgQXVkaW9QYXJhbSkge1xuICAgICAgICAgICAgICAgIHRoaXMub3V0cHV0c1swXS5kaXNjb25uZWN0KGRlc3QsIG91dHB1dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLm91dHB1dHNbMF0uZGlzY29ubmVjdChkZXN0LCBvdXRwdXQsIGlucHV0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXRJbnB1dHMoKSB7IHJldHVybiB0aGlzLmlucHV0TGlzdDsgfVxuICAgIGdldE91dHB1dHMoKSB7IHJldHVybiB0aGlzLm91dHB1dExpc3Q7IH1cbiAgICBnZXRQYXJhbWV0ZXJOYW1lcygpIHsgcmV0dXJuIHRoaXMucGFyYW1ldGVycy5nZXRQYXJhbWV0ZXJOYW1lcygpOyB9XG4gICAgZ2V0UGFyYW1ldGVyQnlOYW1lKG5hbWUpIHsgcmV0dXJuIHRoaXMucGFyYW1ldGVycy5nZXRQYXJhbWV0ZXJCeU5hbWUobmFtZSk7IH1cbiAgICBnZXRQYXJhbWV0ZXJPYmplY3QoKSB7IHJldHVybiB0aGlzLnBhcmFtZXRlcnMuZ2V0UGFyYW1ldGVyT2JqZWN0KCk7IH1cbiAgICBzZXRQYXJhbWV0ZXJCeU5hbWUobmFtZSwgdmFsdWUsIHVwZGF0ZUludGVyZmFjZXMgPSB0cnVlKSB7IHJldHVybiB0aGlzLnBhcmFtZXRlcnMuc2V0UGFyYW1ldGVyQnlOYW1lKG5hbWUsIHZhbHVlLCB1cGRhdGVJbnRlcmZhY2VzKTsgfVxuICAgIHNldFBhcmFtZXRlcnNCeU9iamVjdChvYmplY3QsIHVwZGF0ZUludGVyZmFjZXMpIHsgcmV0dXJuIHRoaXMucGFyYW1ldGVycy5zZXRQYXJhbWV0ZXJzQnlPYmplY3Qob2JqZWN0LCB1cGRhdGVJbnRlcmZhY2VzKTsgfVxuICAgIGFkZEV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXIsIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZXZlbnRUYXJnZXQuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lciwgb3B0aW9ucyk7XG4gICAgfVxuICAgIHJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXIsIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZXZlbnRUYXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lciwgb3B0aW9ucyk7XG4gICAgfVxuICAgIGlzUmVhZHlQcm9taXNlKCkge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRydWUpO1xuICAgIH1cbiAgICBnZXQgb3duZXIoKSB7IHJldHVybiB0aGlzLnBsdWdpbk93bmVyOyB9XG4gICAgZ2V0IG51bUlucHV0cygpIHsgcmV0dXJuIHRoaXMuaW5wdXRMaXN0Lmxlbmd0aDsgfVxuICAgIGdldCBudW1PdXRwdXRzKCkgeyByZXR1cm4gdGhpcy5vdXRwdXRMaXN0Lmxlbmd0aDsgfVxuICAgIGdldCBudW1QYXJhbWV0ZXJzKCkgeyByZXR1cm4gdGhpcy5wYXJhbWV0ZXJzLm51bVBhcmFtZXRlcnM7IH1cbiAgICBnZXQgaW5wdXRzKCkgeyByZXR1cm4gdGhpcy5pbnB1dExpc3Q7IH1cbiAgICBnZXQgb3V0cHV0cygpIHsgcmV0dXJuIHRoaXMub3V0cHV0TGlzdDsgfVxuICAgIGdldCBwcm9jZXNzaW5nRGVsYXlBc1NhbXBsZXMoKSB7IHJldHVybiB0aGlzLmRlbGF5U2FtcGxlczsgfVxuICAgIHNldCBwcm9jZXNzaW5nRGVsYXlBc1NhbXBsZXMoc2FtcGxlcykgeyB0aGlzLnNldFByb2Nlc3NpbmdEZWxheUFzU2FtcGxlcyhzYW1wbGVzKTsgfVxuICAgIGdldCBwcm9jZXNzaW5nRGVsYXlBc1NlY29uZHMoKSB7IHJldHVybiB0aGlzLmRlbGF5U2FtcGxlcyAvIHRoaXMuZmFjdG9yeS5jb250ZXh0LnNhbXBsZVJhdGU7IH1cbiAgICBzZXQgcHJvY2Vzc2luZ0RlbGF5QXNTZWNvbmRzKHNlY29uZHMpIHsgdGhpcy5zZXRQcm9jZXNzaW5nRGVsYXlBc1NlY29uZHMoc2Vjb25kcyk7IH1cbiAgICBnZXQgVHJhY2tEYXRhKCkgeyB2YXIgX2E7IHJldHVybiAoX2EgPSB0aGlzLnBsdWdpbk93bmVyKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuVHJhY2tEYXRhOyB9XG59XG4iLCJpbXBvcnQgeyBQbHVnaW5Bc3NldCB9IGZyb20gXCIuLi8uLi9GYWN0b3J5L1BsdWdpbkFzc2V0cy9QbHVnaW5Bc3NldFwiO1xuaW1wb3J0IHsgUGx1Z2luUGFyYW1ldGVyIH0gZnJvbSBcIi4vUGx1Z2luUGFyYW1ldGVyXCI7XG5leHBvcnQgY2xhc3MgQXNzZXRQYXJhbWV0ZXIgZXh0ZW5kcyBQbHVnaW5QYXJhbWV0ZXIge1xuICAgIGNvbnN0cnVjdG9yKG93bmVyLCBuYW1lLCB2aXNpYmxlTmFtZSwgZXhwb3NlZCA9IHRydWUpIHtcbiAgICAgICAgc3VwZXIob3duZXIsIG5hbWUsIFwiU3RyaW5nXCIsIHZpc2libGVOYW1lLCBleHBvc2VkKTtcbiAgICB9XG4gICAgbG9hZEFzc2V0KCkge1xuICAgICAgICB0aGlzLmxvYWRBc3NldFByb21pc2UgPSB0aGlzLnNlbGVjdGVkQXNzZXQuZmV0Y2goKVxuICAgICAgICAgICAgLnRoZW4oKGJ1ZmZlcikgPT4ge1xuICAgICAgICAgICAgdGhpcy5hdWRpb0J1ZmZlciA9IGJ1ZmZlcjtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRBc3NldC5yZWdpc3RlclRvUGx1Z2luKHRoaXMub3duZXIpO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLm9ubG9hZENhbGxiYWNrID09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgIHRoaXMub25sb2FkQ2FsbGJhY2soYnVmZmVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9LCAoZSkgPT4ge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLm9uZXJyb3JDYWxsYmFjayA9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9uZXJyb3JDYWxsYmFjayhlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXMubG9hZEFzc2V0UHJvbWlzZTtcbiAgICB9XG4gICAgc2V0VmFsdWUodiwgdXBkYXRlSW50ZXJmYWNlcyA9IHRydWUpIHtcbiAgICAgICAgbGV0IG5ld1NlbGVjdGVkQXNzZXQ7XG4gICAgICAgIGlmICh2IGluc3RhbmNlb2YgUGx1Z2luQXNzZXQpIHtcbiAgICAgICAgICAgIG5ld1NlbGVjdGVkQXNzZXQgPSB2O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiB2ID09PSBcInN0cmluZ1wiIHx8IHR5cGVvZiB2ID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICBuZXdTZWxlY3RlZEFzc2V0ID0gdGhpcy5vd25lci5mYWN0b3J5LnBsdWdpbkFzc2V0cy5maW5kQXNzZXRCeUlkKE51bWJlcih2KSk7XG4gICAgICAgICAgICBpZiAobmV3U2VsZWN0ZWRBc3NldCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgbmV3U2VsZWN0ZWRBc3NldCA9IHRoaXMub3duZXIuZmFjdG9yeS5wbHVnaW5Bc3NldHMuZmluZEFzc2V0QnlVcmwodi50b1N0cmluZygpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmICh2Lmhhc093blByb3BlcnR5KCdhc3NldCcpKSB7XG4gICAgICAgICAgICAgICAgbmV3U2VsZWN0ZWRBc3NldCA9IHRoaXMub3duZXIuZmFjdG9yeS5wbHVnaW5Bc3NldHMuZmluZEFzc2V0QnlVcmwodi5hc3NldCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh2Lmhhc093blByb3BlcnR5KCdpZCcpKSB7XG4gICAgICAgICAgICAgICAgbmV3U2VsZWN0ZWRBc3NldCA9IHRoaXMub3duZXIuZmFjdG9yeS5wbHVnaW5Bc3NldHMuZmluZEFzc2V0QnlJZCh2LmlkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAobmV3U2VsZWN0ZWRBc3NldCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJObyBhc3NldCBnaXZlbiwgXCIsIHYpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRBc3NldDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZEFzc2V0ID09PSB1bmRlZmluZWQgfHwgdGhpcy5zZWxlY3RlZEFzc2V0LmlkICE9IG5ld1NlbGVjdGVkQXNzZXQuaWQpIHtcbiAgICAgICAgICAgIC8vIGFzc2V0IGhhcyBjaGFuZ2VkIHVybC5cbiAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdGVkQXNzZXQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRBc3NldC5kZXJlZ2lzdGVyRnJvbVBsdWdpbih0aGlzLm93bmVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRBc3NldCA9IG5ld1NlbGVjdGVkQXNzZXQ7XG4gICAgICAgICAgICB0aGlzLmxvYWRBc3NldCgpO1xuICAgICAgICAgICAgdGhpcy50cmlnZ2VyUGFyYW1ldGVyU2V0KHVwZGF0ZUludGVyZmFjZXMpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudHJpZ2dlcigpO1xuICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3RlZEFzc2V0O1xuICAgIH1cbiAgICBkZXN0cm95KCkge1xuICAgIH1cbiAgICBnZXRSZXNvdXJjZSgpIHtcbiAgICAgICAgaWYgKHRoaXMubG9hZEFzc2V0UHJvbWlzZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubG9hZEFzc2V0UHJvbWlzZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxvYWRBc3NldCgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3RlZEFzc2V0LnRvU3RyaW5nKCk7XG4gICAgfVxuICAgIGdldFBhcmFtZXRlck9iamVjdCgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiB0aGlzLnNlbGVjdGVkQXNzZXQgPyB0aGlzLnNlbGVjdGVkQXNzZXQudG9KU09OKCkgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBsb2FkZWQ6ICh0aGlzLmF1ZGlvQnVmZmVyICE9PSB1bmRlZmluZWQpLFxuICAgICAgICAgICAgdmlzaWJsZU5hbWU6IHRoaXMubmFtZSxcbiAgICAgICAgICAgIHR5cGU6IFwiQXNzZXRQYXJhbWV0ZXJcIixcbiAgICAgICAgICAgIG5hbWU6IHRoaXMubmFtZVxuICAgICAgICB9O1xuICAgIH1cbiAgICBnZXQgb25sb2FkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5vbmxvYWRDYWxsYmFjaztcbiAgICB9XG4gICAgc2V0IG9ubG9hZChmKSB7XG4gICAgICAgIHRoaXMub25sb2FkQ2FsbGJhY2sgPSBmO1xuICAgIH1cbiAgICBnZXQgb25lcnJvcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub25lcnJvckNhbGxiYWNrO1xuICAgIH1cbiAgICBzZXQgb25lcnJvcihmKSB7XG4gICAgICAgIHRoaXMub25lcnJvckNhbGxiYWNrID0gZjtcbiAgICB9XG4gICAgZ2V0IGlzUmVhZHlQcm9taXNlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5sb2FkQXNzZXRQcm9taXNlO1xuICAgIH1cbiAgICBnZXQgdHlwZSgpIHtcbiAgICAgICAgcmV0dXJuIGBBc3NldGA7XG4gICAgfVxuICAgIGdldCBidWZmZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmF1ZGlvQnVmZmVyO1xuICAgIH1cbiAgICBnZXQgdmFsdWUoKSB7XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkQXNzZXQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNlbGVjdGVkQXNzZXQuaWQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgfVxuICAgIHNldCB2YWx1ZSh2KSB7XG4gICAgICAgIHRoaXMuc2V0VmFsdWUodiwgdHJ1ZSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgUGx1Z2luUGFyYW1ldGVyIH0gZnJvbSBcIi4vUGx1Z2luUGFyYW1ldGVyXCI7XG4vKiBqc2hpbnQgZXN2ZXJzaW9uOiA2ICovXG5leHBvcnQgY2xhc3MgQnV0dG9uUGFyYW1ldGVyIGV4dGVuZHMgUGx1Z2luUGFyYW1ldGVyIHtcbiAgICBjb25zdHJ1Y3Rvcihvd25lciwgbmFtZSwgdmlzaWJsZU5hbWUsIGV4cG9zZWQgPSB0cnVlKSB7XG4gICAgICAgIHN1cGVyKG93bmVyLCBuYW1lLCBcIkJ1dHRvblwiLCB2aXNpYmxlTmFtZSwgZXhwb3NlZCk7XG4gICAgICAgIHRoaXMub25jbGlja0Z1bmN0aW9uID0gKCkgPT4geyB9O1xuICAgIH1cbiAgICBkZXN0cm95KCkge1xuICAgIH1cbiAgICBnZXRQYXJhbWV0ZXJPYmplY3QoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2aXNpYmxlTmFtZTogdGhpcy52aXNpYmxlTmFtZSxcbiAgICAgICAgICAgIHR5cGU6IFwiQnV0dG9uUGFyYW1ldGVyXCIsXG4gICAgICAgICAgICBuYW1lOiB0aGlzLm5hbWVcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZ2V0IHR5cGUoKSB7XG4gICAgICAgIHJldHVybiBcIkJ1dHRvblwiO1xuICAgIH1cbiAgICA7XG4gICAgZ2V0IG9uY2xpY2soKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9uY2xpY2tGdW5jdGlvbjtcbiAgICB9XG4gICAgc2V0IG9uY2xpY2soZikge1xuICAgICAgICB0aGlzLm9uY2xpY2tGdW5jdGlvbiA9IGY7XG4gICAgfVxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGlzUGx1Z2luQmFzZVBhcmFtZXRlcihvYmplY3QpIHtcbiAgICByZXR1cm4gJ2dldFBhcmFtZXRlck9iamVjdCcgaW4gb2JqZWN0O1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzUGx1Z2luUGFyYW1ldGVyKG9iamVjdCkge1xuICAgIHJldHVybiBpc1BsdWdpbkJhc2VQYXJhbWV0ZXIob2JqZWN0KSAmJiAnc2V0VmFsdWUnIGluIG9iamVjdDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc0F1dG9tYXRlZFBsdWdpblBhcmFtZXRlcihvYmplY3QpIHtcbiAgICByZXR1cm4gaXNQbHVnaW5QYXJhbWV0ZXIob2JqZWN0KSAmJiAnZ2V0VmFsdWVBdFRpbWVQb2ludCcgaW4gb2JqZWN0O1xufVxuIiwiLyoganNoaW50IGVzdmVyc2lvbjogNiAqL1xuaW1wb3J0IHsgUGx1Z2luUGFyYW1ldGVyIH0gZnJvbSBcIi4vUGx1Z2luUGFyYW1ldGVyXCI7XG5pbXBvcnQgeyBQYXJhbWV0ZXJTdGVwQXV0b21hdGlvbiB9IGZyb20gXCIuL1BhcmFtZXRlckF1dG9tYXRpb25cIjtcbmV4cG9ydCBjbGFzcyBMaXN0UGFyYW1ldGVyIGV4dGVuZHMgUGx1Z2luUGFyYW1ldGVyIHtcbiAgICBjb25zdHJ1Y3Rvcihvd25lciwgbmFtZSwgX2RlZmF1bHRWYWx1ZSwgbGlzdE9mVmFsdWVzLCB0b1N0cmluZ0Z1bmMsIHZpc2libGVOYW1lLCBleHBvc2VkID0gdHJ1ZSkge1xuICAgICAgICBzdXBlcihvd25lciwgbmFtZSwgXCJCdXR0b25cIiwgdmlzaWJsZU5hbWUsIGV4cG9zZWQpO1xuICAgICAgICB0aGlzLl9kZWZhdWx0VmFsdWUgPSBfZGVmYXVsdFZhbHVlO1xuICAgICAgICB0aGlzLmxpc3RPZlZhbHVlcyA9IGxpc3RPZlZhbHVlcztcbiAgICAgICAgdGhpcy50b1N0cmluZ0Z1bmMgPSB0b1N0cmluZ0Z1bmM7XG4gICAgICAgIHRoaXMubGlzdEluZGV4ID0gbGlzdE9mVmFsdWVzLmluZGV4T2YoX2RlZmF1bHRWYWx1ZSk7XG4gICAgfVxuICAgIHNldFYodiwgdXBkYXRlSW50ZXJmYWNlcyA9IHRydWUpIHtcbiAgICAgICAgY29uc3QgaSA9IHRoaXMubGlzdE9mVmFsdWVzLmluZGV4T2Yodik7XG4gICAgICAgIGlmIChpID09PSB1bmRlZmluZWQgfHwgaSA8IDApIHtcbiAgICAgICAgICAgIHRocm93IChcIk5vdCBpbiBsaXN0IHJhbmdlXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmJvdW5kQXVkaW9QYXJhbSkge1xuICAgICAgICAgICAgdGhpcy5ib3VuZEF1ZGlvUGFyYW0udmFsdWUgPSB0aGlzLnVwZGF0ZSh2KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5saXN0SW5kZXggIT09IGkpIHtcbiAgICAgICAgICAgIHRoaXMubGlzdEluZGV4ID0gaTtcbiAgICAgICAgICAgIHRoaXMudHJpZ2dlclBhcmFtZXRlclNldCh1cGRhdGVJbnRlcmZhY2VzKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRyaWdnZXIoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMubGlzdE9mVmFsdWVzW3RoaXMubGlzdEluZGV4XTtcbiAgICB9XG4gICAgaXNBdXRvbWF0YWJsZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmF1dG9tYXRhYmxlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7dGhpcy50eXBlfSBpcyBub3QgYXV0b21hdGFibGVgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgZGVzdHJveSgpIHtcbiAgICB9XG4gICAgc2V0VmFsdWUodikge1xuICAgICAgICB0aGlzLnNldFYodiwgdHJ1ZSk7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlO1xuICAgIH1cbiAgICBpbmNyZW1lbnQoKSB7XG4gICAgICAgIHZhciB2ID0gdGhpcy5saXN0SW5kZXggKyAxO1xuICAgICAgICBpZiAodiA+PSB0aGlzLmxpc3RPZlZhbHVlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHYgPSAwO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnNldFZhbHVlKHRoaXMubGlzdE9mVmFsdWVzW3RoaXMubGlzdEluZGV4XSk7XG4gICAgfVxuICAgIGRlY3JlbWVudCgpIHtcbiAgICAgICAgdmFyIHYgPSB0aGlzLmxpc3RJbmRleCAtIDE7XG4gICAgICAgIGlmICh2IDwgMCkge1xuICAgICAgICAgICAgdiA9IHRoaXMubGlzdE9mVmFsdWVzLmxlbmd0aCAtIDE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0VmFsdWUodGhpcy5saXN0T2ZWYWx1ZXNbdGhpcy5saXN0SW5kZXhdKTtcbiAgICB9XG4gICAgYWRkT3B0aW9uVG9MaXN0KHQpIHtcbiAgICAgICAgaWYgKHRoaXMubGlzdE9mVmFsdWVzLmluY2x1ZGVzKHQpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhpcy5saXN0T2ZWYWx1ZXMucHVzaCh0KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5saXN0T2ZWYWx1ZXM7XG4gICAgfVxuICAgIGRlbGV0ZU9wdGlvbkZyb21MaXN0KHQpIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmxpc3RPZlZhbHVlcy5pbmRleE9mKHQpO1xuICAgICAgICBjb25zdCBfdmFsdWUgPSB0aGlzLmxpc3RPZlZhbHVlc1t0aGlzLmxpc3RJbmRleF07XG4gICAgICAgIGlmIChpbmRleCA9PSAtMSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJlbW92ZWRWYWx1ZSA9IHRoaXMubGlzdE9mVmFsdWVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIGlmIChfdmFsdWUgPT09IHJlbW92ZWRWYWx1ZVswXSkge1xuICAgICAgICAgICAgdGhpcy5saXN0SW5kZXggPSB0aGlzLmxpc3RJbmRleCAlIHRoaXMubGlzdE9mVmFsdWVzLmxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubGlzdEluZGV4ID0gdGhpcy5saXN0T2ZWYWx1ZXMuaW5kZXhPZihfdmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmxpc3RPZlZhbHVlcztcbiAgICB9XG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIGNvbnN0IHYgPSB0aGlzLnZhbHVlO1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMudG9TdHJpbmdGdW5jID09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudG9TdHJpbmdGdW5jKHYpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiB2LnRvU3RyaW5nID09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgcmV0dXJuIHYudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBTdHJpbmcodik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0UGFyYW1ldGVyT2JqZWN0KCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHRoaXMudmFsdWUsXG4gICAgICAgICAgICBvcHRpb25zOiB0aGlzLmxpc3RPZlZhbHVlcyxcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogdGhpcy5fZGVmYXVsdFZhbHVlLFxuICAgICAgICAgICAgbWluaW11bTogMCxcbiAgICAgICAgICAgIG1heGltdW06IHRoaXMubGlzdE9mVmFsdWVzLmxlbmd0aCxcbiAgICAgICAgICAgIHZpc2libGVOYW1lOiB0aGlzLm5hbWUsXG4gICAgICAgICAgICB0eXBlOiBcIkxpc3RQYXJhbWV0ZXJcIixcbiAgICAgICAgICAgIG5hbWU6IHRoaXMubmFtZVxuICAgICAgICB9O1xuICAgIH1cbiAgICBnZXRWYWx1ZUF0VGltZVBvaW50KHRpbWUpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNBdXRvbWF0YWJsZSgpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hdXRvbWF0aW9uLmdldFZhbHVlQXRUaW1lUG9pbnQodGltZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhcnQodGltZSwgY29udGV4dFRpbWUpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNBdXRvbWF0YWJsZSgpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hdXRvbWF0aW9uLnN0YXJ0KHRpbWUsIGNvbnRleHRUaW1lKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzdG9wKGNvbnRleHRUaW1lKSB7XG4gICAgICAgIGlmICh0aGlzLmlzQXV0b21hdGFibGUoKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYXV0b21hdGlvbi5zdG9wKGNvbnRleHRUaW1lKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBiaW5kVG9BdWRpb1BhcmFtKGFwKSB7XG4gICAgICAgIGlmIChhcCBpbnN0YW5jZW9mIEF1ZGlvUGFyYW0pIHtcbiAgICAgICAgICAgIHRoaXMuYXVkaW9QYXJhbWV0ZXIgPSBhcDtcbiAgICAgICAgICAgIHRoaXMuYXVkaW9QYXJhbWV0ZXIudmFsdWUgPSB0aGlzLnVwZGF0ZSh0aGlzLmxpc3RPZlZhbHVlc1t0aGlzLmxpc3RJbmRleF0pO1xuICAgICAgICAgICAgaWYgKGFwLnNldFZhbHVlQXRUaW1lKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hdXRvbWF0aW9uID0gbmV3IFBhcmFtZXRlclN0ZXBBdXRvbWF0aW9uKHRoaXMsIHRoaXMuYXVkaW9QYXJhbWV0ZXIsIDAsIHRoaXMubGlzdFZhbHVlcy5sZW5ndGgsIHRoaXMudG9TdHJpbmdGdW5jKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIkNhbm5vdCBiaW5kIGF1dG9tYXRpb24gYXMgQXVkaW9QYXJhbWV0ZXIgaXMgbm90IGF1dG9tYXRhYmxlXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgKFwiQXJndW1lbnQgMSBpcyBub3QgYSB2YWxpZCBBdWRpb1BhcmFtZXRlciBvYmplY3RcIik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0IHR5cGUoKSB7XG4gICAgICAgIHJldHVybiBcIkxpc3RcIjtcbiAgICB9XG4gICAgZ2V0IGRlZmF1bHRWYWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZmF1bHRWYWx1ZTtcbiAgICB9XG4gICAgZ2V0IGxpc3RWYWx1ZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxpc3RPZlZhbHVlcztcbiAgICB9XG4gICAgZ2V0IHZhbHVlKCkge1xuICAgICAgICBpZiAodGhpcy5hdWRpb1BhcmFtZXRlcikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNsYXRlKHRoaXMuYXVkaW9QYXJhbWV0ZXIudmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmxpc3RPZlZhbHVlc1t0aGlzLmxpc3RJbmRleF07XG4gICAgfVxuICAgIHNldCB2YWx1ZSh2KSB7XG4gICAgICAgIHRoaXMuc2V0VmFsdWUodik7XG4gICAgfVxuICAgIGdldCBib3VuZEF1ZGlvUGFyYW0oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmF1ZGlvUGFyYW1ldGVyO1xuICAgIH1cbiAgICBnZXQgYXV0b21hdGFibGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmF1dG9tYXRpb24gIT09IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZ2V0IGF1dG9tYXRpb25Qb2ludHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmF1dG9tYXRpb247XG4gICAgfVxuICAgIGdldCBlbmFibGVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hdXRvbWF0aW9uLmVuYWJsZWQ7XG4gICAgfVxuICAgIHNldCBlbmFibGVkKGUpIHtcbiAgICAgICAgdGhpcy5hdXRvbWF0aW9uLmVuYWJsZWQgPSAoZSA9PT0gdHJ1ZSk7XG4gICAgfVxufVxuIiwiLyoganNoaW50IGVzdmVyc2lvbjogNiAqL1xuaW1wb3J0IHsgUGx1Z2luUGFyYW1ldGVyIH0gZnJvbSBcIi4vUGx1Z2luUGFyYW1ldGVyXCI7XG5pbXBvcnQgeyBQYXJhbWV0ZXJMaW5lYXJBdXRvbWF0aW9uIH0gZnJvbSBcIi4vUGFyYW1ldGVyQXV0b21hdGlvblwiO1xuZXhwb3J0IGNsYXNzIE51bWJlclBhcmFtZXRlciBleHRlbmRzIFBsdWdpblBhcmFtZXRlciB7XG4gICAgY29uc3RydWN0b3Iob3duZXIsIG5hbWUsIGRlZmF1bHRWYWx1ZSwgbWluaW11bSwgbWF4aW11bSwgdG9TdHJpbmdGdW5jLCB2aXNpYmxlTmFtZSwgZXhwb3NlZCA9IHRydWUpIHtcbiAgICAgICAgc3VwZXIob3duZXIsIG5hbWUsIFwiTnVtYmVyXCIsIHZpc2libGVOYW1lLCBleHBvc2VkKTtcbiAgICAgICAgdGhpcy5kZWZhdWx0VmFsdWUgPSBkZWZhdWx0VmFsdWU7XG4gICAgICAgIHRoaXMubWluaW11bSA9IG1pbmltdW07XG4gICAgICAgIHRoaXMubWF4aW11bSA9IG1heGltdW07XG4gICAgICAgIHRoaXMudG9TdHJpbmdGdW5jID0gdG9TdHJpbmdGdW5jO1xuICAgICAgICB0aGlzLnR5cGUgPSBcIk51bWJlclwiO1xuICAgICAgICB0aGlzLl9zdGVwU2l6ZSA9IDA7XG4gICAgICAgIHRoaXMuX3ZhbHVlID0gdGhpcy5kZWZhdWx0VmFsdWU7XG4gICAgfVxuICAgIHNldFZhbHVlKHYsIHVwZGF0ZUludGVyZmFjZXMgPSB0cnVlKSB7XG4gICAgICAgIGlmICh0aGlzLmF1dG9tYXRpb24gJiYgdGhpcy5hdXRvbWF0aW9uLmVuYWJsZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpb24gaXMgZW5hYmxlZCwgY2Fubm90IHNldCB0aGUgdmFsdWUhXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm1pbmltdW0pIHtcbiAgICAgICAgICAgIHYgPSBNYXRoLm1heCh2LCB0aGlzLm1pbmltdW0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm1heGltdW0pIHtcbiAgICAgICAgICAgIHYgPSBNYXRoLm1pbih2LCB0aGlzLm1heGltdW0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl9zdGVwU2l6ZSA+IDApIHtcbiAgICAgICAgICAgIHYgPSBNYXRoLnJvdW5kKHYgLyB0aGlzLl9zdGVwU2l6ZSk7XG4gICAgICAgICAgICB2ID0gdiAqIHRoaXMuX3N0ZXBTaXplO1xuICAgICAgICB9XG4gICAgICAgIHYgPSB0aGlzLnVwZGF0ZSh2KTtcbiAgICAgICAgaWYgKHRoaXMuYXVkaW9QYXJhbWV0ZXIpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmF1dG9tYXRpb24pIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5vd25lci5mYWN0b3J5LmNvbnRleHQuc3RhdGUgPT0gJ3N1c3BlbmRlZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hdWRpb1BhcmFtZXRlci52YWx1ZSA9IHY7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmF1ZGlvUGFyYW1ldGVyLnNldFZhbHVlQXRUaW1lKHYsIHRoaXMub3duZXIuZmFjdG9yeS5jb250ZXh0LmN1cnJlbnRUaW1lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmF1ZGlvUGFyYW1ldGVyLnZhbHVlID0gdjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fdmFsdWUgIT09IHYpIHtcbiAgICAgICAgICAgIHRoaXMuX3ZhbHVlID0gdjtcbiAgICAgICAgICAgIHRoaXMudHJpZ2dlclBhcmFtZXRlclNldCh1cGRhdGVJbnRlcmZhY2VzKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRyaWdnZXIoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICAgIH1cbiAgICBkZXN0cm95KCkge1xuICAgIH1cbiAgICBnZXRWYWx1ZUF0VGltZVBvaW50KHRpbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXV0b21hdGlvbi5nZXRWYWx1ZUF0VGltZVBvaW50KHRpbWUpO1xuICAgIH1cbiAgICBzdGFydCh0aW1lLCBjb250ZXh0VGltZSkge1xuICAgICAgICB0aGlzLmF1dG9tYXRpb24uc3RhcnQodGltZSwgY29udGV4dFRpbWUpO1xuICAgIH1cbiAgICBzdG9wKHRpbWUpIHtcbiAgICAgICAgdGhpcy5hdXRvbWF0aW9uLnN0b3AodGltZSk7XG4gICAgfVxuICAgIGJpbmRUb0F1ZGlvUGFyYW0oYXApIHtcbiAgICAgICAgaWYgKHR5cGVvZiBhcCA9PSBcIm9iamVjdFwiICYmIGFwLnZhbHVlICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5hdWRpb1BhcmFtZXRlciA9IGFwO1xuICAgICAgICAgICAgdGhpcy5hdWRpb1BhcmFtZXRlci52YWx1ZSA9IHRoaXMudXBkYXRlKHRoaXMuX3ZhbHVlKTtcbiAgICAgICAgICAgIGlmIChhcC5zZXRWYWx1ZUF0VGltZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYXV0b21hdGlvbiA9IG5ldyBQYXJhbWV0ZXJMaW5lYXJBdXRvbWF0aW9uKHRoaXMsIHRoaXMuYXVkaW9QYXJhbWV0ZXIsIHRoaXMubWluaW11bSwgdGhpcy5tYXhpbXVtLCB0aGlzLnRvU3RyaW5nRnVuYyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCJDYW5ub3QgYmluZCBhdXRvbWF0aW9uIGFzIEF1ZGlvUGFyYW1ldGVyIGlzIG5vdCBhdXRvbWF0YWJsZVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkFyZ3VtZW50IDEgaXMgbm90IGEgdmFsaWQgQXVkaW9QYXJhbWV0ZXIgb2JqZWN0XCIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICBjb25zdCB2ID0gdGhpcy52YWx1ZTtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnRvU3RyaW5nRnVuYyA9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRvU3RyaW5nRnVuYyh2KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBTdHJpbmcodik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0UGFyYW1ldGVyT2JqZWN0KCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHRoaXMudmFsdWUsXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU6IHRoaXMuZGVmYXVsdFZhbHVlLFxuICAgICAgICAgICAgbWluaW11bTogdGhpcy5taW5pbXVtLFxuICAgICAgICAgICAgbWF4aW11bTogdGhpcy5tYXhpbXVtLFxuICAgICAgICAgICAgdmlzaWJsZU5hbWU6IHRoaXMubmFtZSxcbiAgICAgICAgICAgIHR5cGU6IFwiTnVtYmVyUGFyYW1ldGVyXCIsXG4gICAgICAgICAgICBuYW1lOiB0aGlzLm5hbWVcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZ2V0IHZhbHVlKCkge1xuICAgICAgICBpZiAodGhpcy5hdWRpb1BhcmFtZXRlcikge1xuICAgICAgICAgICAgaWYgKHRoaXMuYXV0b21hdGlvbiAmJiB0aGlzLmF1dG9tYXRpb24ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHQgPSB0aGlzLm93bmVyLmZhY3RvcnkuZ2V0Q3VycmVudFByb2dyYW1UaW1lKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYXV0b21hdGlvbi5nZXRDdXJyZW50VGltZVZhbHVlKHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNsYXRlKHRoaXMuYXVkaW9QYXJhbWV0ZXIudmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgICB9XG4gICAgc2V0IHZhbHVlKHYpIHtcbiAgICAgICAgdGhpcy5zZXRWYWx1ZSh2LCB0cnVlKTtcbiAgICB9XG4gICAgZ2V0IHN0ZXBTaXplKCkgeyByZXR1cm4gdGhpcy5fc3RlcFNpemU7IH1cbiAgICBzZXQgc3RlcFNpemUobikge1xuICAgICAgICBpZiAoIWlzRmluaXRlKG4pIHx8IG4gPCAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHN0ZXAgc2l6ZVwiKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9zdGVwU2l6ZSA9IG47XG4gICAgfVxuICAgIGdldCBib3VuZEF1ZGlvUGFyYW0oKSB7IHJldHVybiB0aGlzLmF1ZGlvUGFyYW1ldGVyOyB9XG4gICAgZ2V0IGF1dG9tYXRhYmxlKCkgeyByZXR1cm4gdGhpcy5hdXRvbWF0aW9uICE9PSB1bmRlZmluZWQ7IH1cbiAgICBnZXQgYXV0b21hdGlvblBvaW50cygpIHsgcmV0dXJuIHRoaXMuYXV0b21hdGlvbjsgfVxuICAgIGdldCBlbmFibGVkKCkgeyB2YXIgX2E7IHJldHVybiAoX2EgPSB0aGlzLmF1dG9tYXRpb24pID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5lbmFibGVkOyB9XG4gICAgc2V0IGVuYWJsZWQodCkge1xuICAgICAgICBpZiAodGhpcy5hdXRvbWF0YWJsZSkge1xuICAgICAgICAgICAgdGhpcy5hdXRvbWF0aW9uLmVuYWJsZWQgPSAodCA9PT0gdHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCIvKiBqc2hpbnQgZXN2ZXJzaW9uOiA2ICovXG5jbGFzcyBUaW1lUG9pbnQge1xuICAgIGNvbnN0cnVjdG9yKG93bmVyLCBfdGltZSwgX3ZhbHVlLCB0b1N0cmluZ0Z1bmMpIHtcbiAgICAgICAgdGhpcy5vd25lciA9IG93bmVyO1xuICAgICAgICB0aGlzLl90aW1lID0gX3RpbWU7XG4gICAgICAgIHRoaXMuX3ZhbHVlID0gX3ZhbHVlO1xuICAgICAgICB0aGlzLnRvU3RyaW5nRnVuYyA9IHRvU3RyaW5nRnVuYztcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl90aW1lICE9IFwibnVtYmVyXCIgfHwgIWlzRmluaXRlKHRoaXMuX3RpbWUpIHx8IHRoaXMuX3RpbWUgPCAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIENvbnN0cnVjdG9yOiBUaW1lIG11c3QgYmUgYSBwb3NpdGl2ZSBudW1iZXJcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl92YWx1ZSAhPSBcIm51bWJlclwiIHx8ICFpc0Zpbml0ZSh0aGlzLl92YWx1ZSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgQ29uc3RydWN0b3I6IFZhbHVlIG11c3QgYmUgYSBudW1iZXJcIik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc2V0VmFsdWUodikge1xuICAgICAgICBpZiAodHlwZW9mIHYgIT0gXCJudW1iZXJcIiB8fCAhaXNGaW5pdGUodikpIHtcbiAgICAgICAgICAgIHRocm93IChcIlZhbHVlIG11c3QgYmUgYSBudW1iZXJcIik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICAgIH1cbiAgICBzZXRUaW1lKHQpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0ID09IFwibnVtYmVyXCIgJiYgaXNGaW5pdGUodCkgJiYgdCA+PSAwKSB7XG4gICAgICAgICAgICB0aGlzLl90aW1lID0gdDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fdGltZTtcbiAgICB9XG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy50b1N0cmluZ0Z1bmMgPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50b1N0cmluZ0Z1bmModGhpcy5fdmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBTdHJpbmcodGhpcy5fdmFsdWUpO1xuICAgIH1cbiAgICBnZXQgdGltZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGltZTtcbiAgICB9XG4gICAgc2V0IHRpbWUodCkge1xuICAgICAgICB0aGlzLnNldFRpbWUodCk7XG4gICAgfVxuICAgIGdldCB2YWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWU7XG4gICAgfVxuICAgIHNldCB2YWx1ZSh2KSB7XG4gICAgICAgIHRoaXMuc2V0VmFsdWUodik7XG4gICAgfVxufVxuY2xhc3MgVGltZVBvaW50TGlzdCB7XG4gICAgY29uc3RydWN0b3IobWluX3ZhbHVlLCBtYXhfdmFsdWUsIHRvU3RyaW5nRnVuYykge1xuICAgICAgICB0aGlzLnRvU3RyaW5nRnVuYyA9IHRvU3RyaW5nRnVuYztcbiAgICAgICAgdGhpcy5hdXRvbWF0aW9uUG9pbnRzID0gW107XG4gICAgICAgIGlmICh0eXBlb2YgbWluX3ZhbHVlICE9IFwibnVtYmVyXCIgfHwgIWlzRmluaXRlKG1pbl92YWx1ZSkpIHtcbiAgICAgICAgICAgIHRocm93IChcIkludmFsaWQgQ29uc3RydWN0b3I6IG1pbl92YWx1ZSBiZSBhIG51bWJlclwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIG1heF92YWx1ZSAhPSBcIm51bWJlclwiIHx8ICFpc0Zpbml0ZShtYXhfdmFsdWUpKSB7XG4gICAgICAgICAgICB0aHJvdyAoXCJJbnZhbGlkIENvbnN0cnVjdG9yOiBtYXhfdmFsdWUgYmUgYSBudW1iZXJcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1pbl92YWx1ZSA9PSBtYXhfdmFsdWUpIHtcbiAgICAgICAgICAgIHRocm93IChcIkludmFsaWQgQ29uc3RydWN0b3I6IG1heF92YWx1ZSBjYW5ub3QgZXF1YWwgdG8gbWluX3ZhbHVlXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtYXhfdmFsdWUgPCBtaW5fdmFsdWUpIHtcbiAgICAgICAgICAgIHRocm93IChcIkludmFsaWQgQ29uc3RydWN0b3I6IG1pbl92YWx1ZSBjYW5ub3QgYmUgZ3JlYXRlciB0aGFuIG1heF92YWx1ZVwiKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm1pbmltdW0gPSBtaW5fdmFsdWU7XG4gICAgICAgIHRoaXMubWF4aW11bSA9IG1heF92YWx1ZTtcbiAgICB9XG4gICAgZ2V0UG9pbnRBdFRpbWUodGltZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5hdXRvbWF0aW9uUG9pbnRzLmZpbmQoKHApID0+IHtcbiAgICAgICAgICAgIHAudGltZSA9PSB0aW1lO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgaGFzUG9pbnRBdFRpbWUodGltZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRQb2ludEF0VGltZSh0aW1lKSAhPT0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBzb3J0UG9pbnRzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hdXRvbWF0aW9uUG9pbnRzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgIGlmIChhLnRpbWUgPiBiLnRpbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGluc2VydFBvaW50KHRpbWUsIHZhbHVlKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdGltZSAhPSBcIm51bWJlclwiIHx8ICFpc0Zpbml0ZSh0aW1lKSB8fCB0aW1lIDwgMCkge1xuICAgICAgICAgICAgdGhyb3cgKFwiVGltZSBtdXN0IGJlIGEgcG9zaXRpdmUgbnVtYmVyXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgIT0gXCJudW1iZXJcIiB8fCAhaXNGaW5pdGUodmFsdWUpKSB7XG4gICAgICAgICAgICB0aHJvdyAoXCJWYWx1ZSBtdXN0IGJlIGEgbnVtYmVyXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmhhc1BvaW50QXRUaW1lKHRpbWUpKSB7XG4gICAgICAgICAgICB0aHJvdyAoXCJBbHJlYWR5IGEgdmFsdWUgZW50cnkgYXQgdGltZSBcIiArIHRpbWUpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBwb2ludCA9IG5ldyBUaW1lUG9pbnQodGhpcywgdGltZSwgdmFsdWUsIHRoaXMudG9TdHJpbmdGdW5jKTtcbiAgICAgICAgdGhpcy5hdXRvbWF0aW9uUG9pbnRzLnB1c2gocG9pbnQpO1xuICAgICAgICB0aGlzLmF1dG9tYXRpb25Qb2ludHMgPSB0aGlzLnNvcnRQb2ludHMoKTtcbiAgICAgICAgcmV0dXJuIHBvaW50O1xuICAgIH1cbiAgICBnZXRQb2ludHMoc3RhcnRfdGltZSwgZW5kX3RpbWUpIHtcbiAgICAgICAgaWYgKHN0YXJ0X3RpbWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgc3RhcnRfdGltZSA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVuZF90aW1lID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGVuZF90aW1lID0gSW5maW5pdHk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuYXV0b21hdGlvblBvaW50cy5maWx0ZXIoZnVuY3Rpb24gKHBvaW50KSB7XG4gICAgICAgICAgICByZXR1cm4gcG9pbnQudGltZSA+PSBzdGFydF90aW1lICYmIHBvaW50LnRpbWUgPCBlbmRfdGltZTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGRlbGV0ZVBvaW50KHRpbWUpIHtcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5hdXRvbWF0aW9uUG9pbnRzLmZpbmRJbmRleChmdW5jdGlvbiAocG9pbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBwb2ludC50aW1lID09IHRpbWU7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoaW5kZXggPj0gMCkge1xuICAgICAgICAgICAgdGhpcy5hdXRvbWF0aW9uUG9pbnRzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuYXV0b21hdGlvblBvaW50cy5sZW5ndGg7XG4gICAgfVxuICAgIGdldFN0YXRpY1ZhbHVlQXNTdHJpbmcodmFsdWUpIHtcbiAgICAgICAgaWYgKHRoaXMudG9TdHJpbmdGdW5jKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50b1N0cmluZ0Z1bmModmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBTdHJpbmcodmFsdWUpO1xuICAgIH1cbiAgICBnZXRWYWx1ZUF0VGltZVBvaW50KHRpbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UG9pbnRBdFRpbWUodGltZSk7XG4gICAgfVxuICAgIHVwZGF0ZVBvaW50KHRpbWUsIG9wdGlvbnMpIHtcbiAgICAgICAgY29uc3QgcG9pbnQgPSB0aGlzLmF1dG9tYXRpb25Qb2ludHMuZmluZChwb2ludCA9PiBwb2ludC50aW1lID09IHRpbWUpO1xuICAgICAgICBpZiAocG9pbnQpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy50aW1lID09IFwibnVtYmVyXCIgJiYgb3B0aW9ucy50aW1lICE9IHBvaW50LnRpbWUpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5oYXNQb2ludEF0VGltZSh0aW1lKSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEEgdGltZS1wb2ludCBhbHJlYWR5IGV4aXN0cyBhdCAke1N0cmluZyhvcHRpb25zLnRpbWUpfSBzZWNvbmRzYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwb2ludC50aW1lID0gb3B0aW9ucy50aW1lO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmF1dG9tYXRpb25Qb2ludHMgPSB0aGlzLnNvcnRQb2ludHMoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwb2ludC52YWx1ZSA9IG9wdGlvbnMudmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBvaW50O1xuICAgIH1cbiAgICBnZXQgbGVuZ3RoKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hdXRvbWF0aW9uUG9pbnRzLmxlbmd0aDtcbiAgICB9XG59XG5jbGFzcyBQYXJhbWV0ZXJBdXRvbWF0aW9uIGV4dGVuZHMgVGltZVBvaW50TGlzdCB7XG4gICAgY29uc3RydWN0b3IocGFyYW1ldGVyLCBtaW5fdmFsdWUsIG1heF92YWx1ZSwgdG9TdHJpbmdGdW5jKSB7XG4gICAgICAgIHN1cGVyKG1pbl92YWx1ZSwgbWF4X3ZhbHVlLCB0b1N0cmluZ0Z1bmMpO1xuICAgICAgICB0aGlzLnBhcmFtZXRlciA9IHBhcmFtZXRlcjtcbiAgICAgICAgdGhpcy5pc0VuYWJsZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgZ2V0IGVuYWJsZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzRW5hYmxlZDtcbiAgICB9XG4gICAgc2V0IGVuYWJsZWQodCkge1xuICAgICAgICBpZiAodGhpcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmlzRW5hYmxlZCA9ICh0ID09PSB0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBQYXJhbWV0ZXJMaW5lYXJBdXRvbWF0aW9uIGV4dGVuZHMgUGFyYW1ldGVyQXV0b21hdGlvbiB7XG4gICAgY29uc3RydWN0b3Iob3duZXIsIHBhcmFtZXRlciwgbWluX3ZhbHVlLCBtYXhfdmFsdWUsIHRvU3RyaW5nRnVuYykge1xuICAgICAgICBzdXBlcihwYXJhbWV0ZXIsIG1pbl92YWx1ZSwgbWF4X3ZhbHVlLCB0b1N0cmluZ0Z1bmMpO1xuICAgICAgICB0aGlzLm93bmVyID0gb3duZXI7XG4gICAgfVxuICAgIGxpbmVhckludGVycG9sYXRpb24odGltZSwgcG9pbnRBLCBwb2ludEIpIHtcbiAgICAgICAgbGV0IHQxID0gcG9pbnRBLnRpbWU7XG4gICAgICAgIGxldCB0MiA9IHBvaW50Qi50aW1lO1xuICAgICAgICB0aW1lIC09IHQxO1xuICAgICAgICB0MiAtPSB0MTtcbiAgICAgICAgdDEgPSAwO1xuICAgICAgICBjb25zdCBwID0gdGltZSAvIHQyO1xuICAgICAgICByZXR1cm4gcG9pbnRBLnZhbHVlICogKDEgLSBwKSArIHBvaW50Qi52YWx1ZSAqIHA7XG4gICAgfVxuICAgIGdldEN1cnJlbnRUaW1lVmFsdWUodGltZSkge1xuICAgICAgICBpZiAodGhpcy5hdXRvbWF0aW9uUG9pbnRzLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vd25lci52YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5hdXRvbWF0aW9uUG9pbnRzLmxlbmd0aCA9PSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hdXRvbWF0aW9uUG9pbnRzWzBdLnZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciBmaXJzdFBvaW50ID0gdGhpcy5hdXRvbWF0aW9uUG9pbnRzLnJlZHVjZShmdW5jdGlvbiAocG9pbnQsIG5leHRQb2ludCkge1xuICAgICAgICAgICAgaWYgKG5leHRQb2ludC50aW1lIDw9IHRpbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV4dFBvaW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBvaW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB0aGlzLmF1dG9tYXRpb25Qb2ludHNbMF0pO1xuICAgICAgICB2YXIgc2Vjb25kUG9pbnQgPSB0aGlzLmF1dG9tYXRpb25Qb2ludHMuZmluZChmdW5jdGlvbiAocG9pbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBwb2ludC50aW1lID4gZmlyc3RQb2ludC50aW1lO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHNlY29uZFBvaW50ID09PSB1bmRlZmluZWQgfHwgZmlyc3RQb2ludC50aW1lID4gdGltZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZpcnN0UG9pbnQudmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMubGluZWFySW50ZXJwb2xhdGlvbih0aW1lLCBmaXJzdFBvaW50LCBzZWNvbmRQb2ludCk7XG4gICAgfVxuICAgIHN0YXJ0KHRpbWUsIGNvbnRleHRUaW1lKSB7XG4gICAgICAgIGlmICh0aGlzLmVuYWJsZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0UG9zaXRpb24gPSB0aGlzLm93bmVyLnVwZGF0ZSh0aGlzLmdldEN1cnJlbnRUaW1lVmFsdWUodGltZSkpO1xuICAgICAgICAgICAgdGhpcy5wYXJhbWV0ZXIuc2V0VmFsdWVBdFRpbWUoc3RhcnRQb3NpdGlvbiwgY29udGV4dFRpbWUpO1xuICAgICAgICAgICAgdGhpcy5hdXRvbWF0aW9uUG9pbnRzLmZvckVhY2goKHApID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocC50aW1lID4gdGltZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0ID0gcC50aW1lIC0gdGltZTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdiA9IHRoaXMub3duZXIudXBkYXRlKHAudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcmFtZXRlci5saW5lYXJSYW1wVG9WYWx1ZUF0VGltZSh2LCB0ICsgY29udGV4dFRpbWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN0b3AoY29udGV4dFRpbWUpIHtcbiAgICAgICAgaWYgKGNvbnRleHRUaW1lID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNvbnRleHRUaW1lID0gMDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBhcmFtZXRlci5jYW5jZWxTY2hlZHVsZWRWYWx1ZXMoY29udGV4dFRpbWUpO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBQYXJhbWV0ZXJTdGVwQXV0b21hdGlvbiBleHRlbmRzIFBhcmFtZXRlckF1dG9tYXRpb24ge1xuICAgIGNvbnN0cnVjdG9yKG93bmVyLCBwYXJhbWV0ZXIsIG1pbl92YWx1ZSwgbWF4X3ZhbHVlLCB0b1N0cmluZ0Z1bmMpIHtcbiAgICAgICAgc3VwZXIocGFyYW1ldGVyLCBtaW5fdmFsdWUsIG1heF92YWx1ZSwgdG9TdHJpbmdGdW5jKTtcbiAgICAgICAgdGhpcy5vd25lciA9IG93bmVyO1xuICAgIH1cbiAgICBnZXRDdXJyZW50VGltZVZhbHVlKHRpbWUpIHtcbiAgICAgICAgaWYgKHRoaXMuYXV0b21hdGlvblBvaW50cy5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgdGhyb3cgKFwiTm8gYXV0b21hdGlvbiBwb2ludHMgYXZhaWxhYmxlXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmF1dG9tYXRpb25Qb2ludHMubGVuZ3RoID09IDEpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmF1dG9tYXRpb25Qb2ludHNbMF0udmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbmVhcmVzdFBvaW50ID0gdGhpcy5hdXRvbWF0aW9uUG9pbnRzLnJlZHVjZShmdW5jdGlvbiAocG9pbnQsIG5leHRQb2ludCkge1xuICAgICAgICAgICAgaWYgKG5leHRQb2ludC50aW1lIDw9IHRpbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV4dFBvaW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBvaW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB0aGlzLmF1dG9tYXRpb25Qb2ludHNbMF0pO1xuICAgICAgICByZXR1cm4gbmVhcmVzdFBvaW50LnZhbHVlO1xuICAgIH1cbiAgICBzdGFydCh0aW1lLCBjb250ZXh0VGltZSkge1xuICAgICAgICB2YXIgc3RhcnRQb3NpdGlvbiA9IHRoaXMub3duZXIudXBkYXRlKHRoaXMuZ2V0Q3VycmVudFRpbWVWYWx1ZSh0aW1lKSk7XG4gICAgICAgIHRoaXMucGFyYW1ldGVyLnNldFZhbHVlQXRUaW1lKHN0YXJ0UG9zaXRpb24sIGNvbnRleHRUaW1lKTtcbiAgICAgICAgdGhpcy5hdXRvbWF0aW9uUG9pbnRzLmZvckVhY2gocCA9PiB7XG4gICAgICAgICAgICBpZiAocC50aW1lID4gdGltZSkge1xuICAgICAgICAgICAgICAgIHZhciB0ID0gcC50aW1lIC0gdGltZTtcbiAgICAgICAgICAgICAgICB2YXIgdiA9IHRoaXMub3duZXIudXBkYXRlKHAudmFsdWUpO1xuICAgICAgICAgICAgICAgIHRoaXMucGFyYW1ldGVyLnNldFZhbHVlQXRUaW1lKHYsIHQgKyBjb250ZXh0VGltZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzdG9wKGNvbnRleHRUaW1lKSB7XG4gICAgICAgIHRoaXMucGFyYW1ldGVyLmNhbmNlbFNjaGVkdWxlZFZhbHVlcyhjb250ZXh0VGltZSk7XG4gICAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIFBsdWdpblBhcmFtZXRlciB7XG4gICAgY29uc3RydWN0b3Iob3duZXIsIF9uYW1lLCBkYXRhVHlwZSwgX3Zpc2libGVOYW1lLCBfZXhwb3NlZCA9IHRydWUpIHtcbiAgICAgICAgdGhpcy5vd25lciA9IG93bmVyO1xuICAgICAgICB0aGlzLl9uYW1lID0gX25hbWU7XG4gICAgICAgIHRoaXMuX3Zpc2libGVOYW1lID0gX3Zpc2libGVOYW1lO1xuICAgICAgICB0aGlzLl9leHBvc2VkID0gX2V4cG9zZWQ7XG4gICAgICAgIHRoaXMuZXZlbnRUYXJnZXQgPSBuZXcgRXZlbnRUYXJnZXQoKTtcbiAgICAgICAgdGhpcy5fdXBkYXRlRnVuY3Rpb24gPSAodikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHY7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX3RyYW5zbGF0ZUZ1bmN0aW9uID0gKHYpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB2O1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLl90cmlnZ2VyRnVuY3Rpb24gPSAoKSA9PiB7IH07XG4gICAgICAgIHZhciB1cGRhdGUsIHRyYW5zbGF0ZSwgdHJpZ2dlcjtcbiAgICAgICAgdmFyIGV2ZW50VGFyZ2V0ID0gbmV3IEV2ZW50VGFyZ2V0KCk7XG4gICAgICAgIHVwZGF0ZSA9IHRyYW5zbGF0ZSA9IGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgICByZXR1cm4gdjtcbiAgICAgICAgfTtcbiAgICAgICAgdHJpZ2dlciA9IGZ1bmN0aW9uICgpIHsgfTtcbiAgICB9XG4gICAgZGVzdHJveSgpIHsgfVxuICAgIHNldFZhbHVlKHYpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3Qgc2V0IHRoaXMgcGFyYW1ldGVyJyk7XG4gICAgfVxuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gXCJQbHVnaW5QYXJhbWV0ZXJcIjtcbiAgICB9XG4gICAgO1xuICAgIGdldFBhcmFtZXRlck9iamVjdCgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgICAgICAgIHZpc2libGVOYW1lOiB0aGlzLnZpc2libGVOYW1lLFxuICAgICAgICAgICAgdHlwZTogXCJQbHVnaW5QYXJhbWV0ZXJcIlxuICAgICAgICB9O1xuICAgIH1cbiAgICBhZGRFdmVudExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyLCBvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmV2ZW50VGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXIsIG9wdGlvbnMpO1xuICAgIH1cbiAgICByZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyLCBvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmV2ZW50VGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXIsIG9wdGlvbnMpO1xuICAgIH1cbiAgICB0cmlnZ2VyUGFyYW1ldGVyU2V0KHVwZGF0ZUludGVyZmFjZXMgPSB0cnVlKSB7XG4gICAgICAgIGlmICh1cGRhdGVJbnRlcmZhY2VzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHVwZGF0ZUludGVyZmFjZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG9wdHMgPSB7XG4gICAgICAgICAgICBkZXRhaWw6IHtcbiAgICAgICAgICAgICAgICBwYXJhbWV0ZXI6IHRoaXMuZ2V0UGFyYW1ldGVyT2JqZWN0KCksXG4gICAgICAgICAgICAgICAgdXBkYXRlSW50ZXJmYWNlczogdXBkYXRlSW50ZXJmYWNlc1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmV2ZW50VGFyZ2V0LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwicGFyYW1ldGVyc2V0XCIsIG9wdHMpKTtcbiAgICB9XG4gICAgYmluZFRvQXVkaW9QYXJhbShhcCkge1xuICAgICAgICB0aHJvdyAoXCJDYW5ub3QgYmluZCB0aGlzIHBhcmFtZXRlciB0eXBlIHRvIGFuIGF1ZGlvIHBhcmFtZXRlclwiKTtcbiAgICB9XG4gICAgZ2V0IGJvdW5kQXVkaW9QYXJhbSgpIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZ2V0IG5hbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICAgIH1cbiAgICBnZXQgdmlzaWJsZU5hbWUoKSB7XG4gICAgICAgIGlmICh0aGlzLl92aXNpYmxlTmFtZSAhPT0gdW5kZWZpbmVkICYmIHRoaXMuX3Zpc2libGVOYW1lLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnZpc2libGVOYW1lO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXQgZXhwb3NlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2V4cG9zZWQ7XG4gICAgfVxuICAgIHNldCBleHBvc2VkKGUpIHtcbiAgICAgICAgdGhpcy5fZXhwb3NlZCA9IGUgPT09IHRydWU7XG4gICAgfVxuICAgIGdldCB1cGRhdGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl91cGRhdGVGdW5jdGlvbjtcbiAgICB9XG4gICAgc2V0IHVwZGF0ZShmKSB7XG4gICAgICAgIHRoaXMuX3VwZGF0ZUZ1bmN0aW9uID0gZjtcbiAgICB9XG4gICAgZ2V0IHRyYW5zbGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RyYW5zbGF0ZUZ1bmN0aW9uO1xuICAgIH1cbiAgICBzZXQgdHJhbnNsYXRlKGYpIHtcbiAgICAgICAgdGhpcy5fdHJhbnNsYXRlRnVuY3Rpb24gPSBmO1xuICAgIH1cbiAgICBnZXQgdHJpZ2dlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RyaWdnZXJGdW5jdGlvbjtcbiAgICB9XG4gICAgc2V0IHRyaWdnZXIoZikge1xuICAgICAgICB0aGlzLl90cmlnZ2VyRnVuY3Rpb24gPSBmO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IFBsdWdpblBhcmFtZXRlciB9IGZyb20gXCIuL1BsdWdpblBhcmFtZXRlclwiO1xuZXhwb3J0IGNsYXNzIFN0cmluZ1BhcmFtZXRlciBleHRlbmRzIFBsdWdpblBhcmFtZXRlciB7XG4gICAgY29uc3RydWN0b3Iob3duZXIsIG5hbWUsIGRlZmF1bHRWYWx1ZSwgbWF4TGVuZ3RoLCB0b1N0cmluZ0Z1bmMsIHZpc2libGVOYW1lLCBleHBvc2VkID0gdHJ1ZSkge1xuICAgICAgICBzdXBlcihvd25lciwgbmFtZSwgXCJTdHJpbmdcIiwgdmlzaWJsZU5hbWUsIGV4cG9zZWQpO1xuICAgICAgICB0aGlzLmRlZmF1bHRWYWx1ZSA9IGRlZmF1bHRWYWx1ZTtcbiAgICAgICAgdGhpcy5tYXhMZW5ndGggPSBtYXhMZW5ndGg7XG4gICAgICAgIHRoaXMudG9TdHJpbmdGdW5jID0gdG9TdHJpbmdGdW5jO1xuICAgICAgICB0aGlzLnR5cGUgPSBcIlN0cmluZ1wiO1xuICAgICAgICB0aGlzLl92YWx1ZSA9IGRlZmF1bHRWYWx1ZTtcbiAgICB9XG4gICAgc2V0VmFsdWUodiwgdXBkYXRlSW50ZXJmYWNlcyA9IHRydWUpIHtcbiAgICAgICAgbGV0IG5ld1ZhbHVlO1xuICAgICAgICBpZiAodHlwZW9mIHYgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG5ld1ZhbHVlID0gdjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG5ld1ZhbHVlID0gSlNPTi5zdHJpbmdpZnkodik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMubWF4TGVuZ3RoICYmIG5ld1ZhbHVlLmxlbmd0aCA+IHRoaXMubWF4TGVuZ3RoKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFN0cmluZyBsb25nZXIgdGhhbiAke3RoaXMubWF4TGVuZ3RofSBjaGFyYWN0ZXJzYCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuYm91bmRBdWRpb1BhcmFtKSB7XG4gICAgICAgICAgICB0aGlzLmJvdW5kQXVkaW9QYXJhbS52YWx1ZSA9IHRoaXMudXBkYXRlKHYpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl92YWx1ZSAhPT0gdikge1xuICAgICAgICAgICAgdGhpcy5fdmFsdWUgPSB2O1xuICAgICAgICAgICAgdGhpcy50cmlnZ2VyUGFyYW1ldGVyU2V0KHVwZGF0ZUludGVyZmFjZXMpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudHJpZ2dlcigpO1xuICAgICAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gICAgfVxuICAgIGRlc3Ryb3koKSB7IH1cbiAgICBiaW5kVG9BdWRpb1BhcmFtKGFwKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYXAgPT0gXCJvYmplY3RcIiAmJiBhcC52YWx1ZSAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuYXVkaW9QYXJhbWV0ZXIgPSBhcDtcbiAgICAgICAgICAgIHRoaXMuYXVkaW9QYXJhbWV0ZXIudmFsdWUgPSB0aGlzLnVwZGF0ZSh0aGlzLl92YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBcmd1bWVudCAxIGlzIG5vdCBhIHZhbGlkIEF1ZGlvUGFyYW1ldGVyIG9iamVjdFwiKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgY29uc3QgdiA9IHRoaXMuX3ZhbHVlO1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMudG9TdHJpbmdGdW5jID09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudG9TdHJpbmdGdW5jLmNhbGwodGhpcywgdik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXRQYXJhbWV0ZXJPYmplY3QoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogdGhpcy52YWx1ZSxcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogdGhpcy5kZWZhdWx0VmFsdWUsXG4gICAgICAgICAgICBtYXhMZW5ndGg6IHRoaXMubWF4TGVuZ3RoLFxuICAgICAgICAgICAgdmlzaWJsZU5hbWU6IHRoaXMubmFtZSxcbiAgICAgICAgICAgIHR5cGU6IFwiU3RyaW5nUGFyYW1ldGVyXCIsXG4gICAgICAgICAgICBuYW1lOiB0aGlzLm5hbWVcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZ2V0IHZhbHVlKCkge1xuICAgICAgICBpZiAodGhpcy5ib3VuZEF1ZGlvUGFyYW0pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRyYW5zbGF0ZSh0aGlzLmJvdW5kQXVkaW9QYXJhbS52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICAgIH1cbiAgICBzZXQgdmFsdWUodCkgeyB0aGlzLnNldFZhbHVlKHQsIHRydWUpOyB9XG4gICAgZ2V0IGJvdW5kQXVkaW9QYXJhbSgpIHsgcmV0dXJuIHRoaXMuYXVkaW9QYXJhbWV0ZXI7IH1cbn1cbiIsIi8qIGpzaGludCBlc3ZlcnNpb246IDYgKi9cbmltcG9ydCB7IFBsdWdpblBhcmFtZXRlciB9IGZyb20gXCIuL1BsdWdpblBhcmFtZXRlclwiO1xuaW1wb3J0IHsgUGFyYW1ldGVyU3RlcEF1dG9tYXRpb24gfSBmcm9tIFwiLi9QYXJhbWV0ZXJBdXRvbWF0aW9uXCI7XG5leHBvcnQgY2xhc3MgU3dpdGNoUGFyYW1ldGVyIGV4dGVuZHMgUGx1Z2luUGFyYW1ldGVyIHtcbiAgICBjb25zdHJ1Y3Rvcihvd25lciwgbmFtZSwgZGVmYXVsdFZhbHVlLCBtaW5TdGF0ZSwgbWF4U3RhdGUsIHRvU3RyaW5nRnVuYywgdmlzaWJsZU5hbWUsIGV4cG9zZWQgPSB0cnVlKSB7XG4gICAgICAgIHN1cGVyKG93bmVyLCBuYW1lLCBcIk51bWJlclwiLCB2aXNpYmxlTmFtZSwgZXhwb3NlZCk7XG4gICAgICAgIHRoaXMuZGVmYXVsdFZhbHVlID0gZGVmYXVsdFZhbHVlO1xuICAgICAgICB0aGlzLm1pblN0YXRlID0gbWluU3RhdGU7XG4gICAgICAgIHRoaXMubWF4U3RhdGUgPSBtYXhTdGF0ZTtcbiAgICAgICAgdGhpcy50b1N0cmluZ0Z1bmMgPSB0b1N0cmluZ0Z1bmM7XG4gICAgICAgIHRoaXMudHlwZSA9IFwiU3dpdGNoXCI7XG4gICAgICAgIHRoaXMuX3ZhbHVlID0gdGhpcy5kZWZhdWx0VmFsdWU7XG4gICAgfVxuICAgIHNldFZhbHVlKHYsIHVwZGF0ZUludGVyZmFjZXMgPSB0cnVlKSB7XG4gICAgICAgIGlmICh2IDwgdGhpcy5taW5TdGF0ZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiU2V0IHZhbHVlIGlzIGxlc3MgdGhhbiBcIiArIHRoaXMubWluU3RhdGUpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2ID4gdGhpcy5tYXhTdGF0ZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiU2V0IHZhbHVlIGlzIGdyZWF0ZXIgdGhhbiBcIiArIHRoaXMubWF4U3RhdGUpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmF1ZGlvUGFyYW1ldGVyKSB7XG4gICAgICAgICAgICB0aGlzLmF1ZGlvUGFyYW1ldGVyLnZhbHVlID0gdGhpcy51cGRhdGUodik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX3ZhbHVlICE9PSB2KSB7XG4gICAgICAgICAgICB0aGlzLl92YWx1ZSA9IHY7XG4gICAgICAgICAgICB0aGlzLnRyaWdnZXJQYXJhbWV0ZXJTZXQodXBkYXRlSW50ZXJmYWNlcyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50cmlnZ2VyKCk7XG4gICAgICAgIHJldHVybiB2O1xuICAgIH1cbiAgICBkZXN0cm95KCkgeyB9XG4gICAgaW5jcmVtZW50KCkge1xuICAgICAgICBsZXQgdiA9IHRoaXMuX3ZhbHVlIC0gMTtcbiAgICAgICAgaWYgKHYgPCB0aGlzLm1pblN0YXRlKSB7XG4gICAgICAgICAgICB2ID0gdGhpcy5tYXhTdGF0ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5zZXRWYWx1ZSh2KTtcbiAgICB9XG4gICAgZGVjcmVtZW50KCkge1xuICAgICAgICBsZXQgdiA9IHRoaXMuX3ZhbHVlIC0gMTtcbiAgICAgICAgaWYgKHYgPCB0aGlzLm1pblN0YXRlKSB7XG4gICAgICAgICAgICB2ID0gdGhpcy5tYXhTdGF0ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5zZXRWYWx1ZSh2KTtcbiAgICB9XG4gICAgYmluZFRvQXVkaW9QYXJhbShhcCkge1xuICAgICAgICBpZiAodHlwZW9mIGFwID09IFwib2JqZWN0XCIgJiYgYXAudmFsdWUgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLmF1ZGlvUGFyYW1ldGVyID0gYXA7XG4gICAgICAgICAgICB0aGlzLmF1ZGlvUGFyYW1ldGVyLnZhbHVlID0gdGhpcy51cGRhdGUodGhpcy5fdmFsdWUpO1xuICAgICAgICAgICAgaWYgKGFwLnNldFZhbHVlQXRUaW1lKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hdXRvbWF0aW9uID0gbmV3IFBhcmFtZXRlclN0ZXBBdXRvbWF0aW9uKHRoaXMsIHRoaXMuYXVkaW9QYXJhbWV0ZXIsIHRoaXMubWluU3RhdGUsIHRoaXMubWF4U3RhdGUsIHRoaXMudG9TdHJpbmdGdW5jKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIkNhbm5vdCBiaW5kIGF1dG9tYXRpb24gYXMgQXVkaW9QYXJhbWV0ZXIgaXMgbm90IGF1dG9tYXRhYmxlXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQXJndW1lbnQgMSBpcyBub3QgYSB2YWxpZCBBdWRpb1BhcmFtZXRlciBvYmplY3RcIik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIGNvbnN0IHYgPSB0aGlzLl92YWx1ZTtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnRvU3RyaW5nRnVuYyA9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRvU3RyaW5nRnVuYy5jYWxsKHRoaXMsIHYpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIFN0cmluZyh2KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXRQYXJhbWV0ZXJPYmplY3QoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogdGhpcy52YWx1ZSxcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogdGhpcy5kZWZhdWx0VmFsdWUsXG4gICAgICAgICAgICBtaW5pbXVtOiB0aGlzLm1pblN0YXRlLFxuICAgICAgICAgICAgbWF4aW11bTogdGhpcy5tYXhTdGF0ZSxcbiAgICAgICAgICAgIHZpc2libGVOYW1lOiB0aGlzLm5hbWUsXG4gICAgICAgICAgICB0eXBlOiBcIlN3aXRjaFBhcmFtZXRlclwiLFxuICAgICAgICAgICAgbmFtZTogdGhpcy5uYW1lXG4gICAgICAgIH07XG4gICAgfVxuICAgIGdldCB2YWx1ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuYXVkaW9QYXJhbWV0ZXIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRyYW5zbGF0ZSh0aGlzLmF1ZGlvUGFyYW1ldGVyLnZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gICAgfVxuICAgIHNldCB2YWx1ZSh2KSB7IHRoaXMuc2V0VmFsdWUodiwgdHJ1ZSk7IH1cbiAgICBnZXQgYm91bmRBdWRpb1BhcmFtKCkgeyByZXR1cm4gdGhpcy5hdWRpb1BhcmFtZXRlcjsgfVxuICAgIGdldCBhdXRvbWF0YWJsZSgpIHsgcmV0dXJuIHRoaXMuYXV0b21hdGlvbiAhPT0gdW5kZWZpbmVkOyB9XG4gICAgZ2V0IGF1dG9tYXRpb25Qb2ludHMoKSB7IHJldHVybiB0aGlzLmF1dG9tYXRpb247IH1cbiAgICBnZXQgZW5hYmxlZCgpIHsgdmFyIF9hOyByZXR1cm4gKF9hID0gdGhpcy5hdXRvbWF0aW9uKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZW5hYmxlZDsgfVxuICAgIHNldCBlbmFibGVkKHQpIHtcbiAgICAgICAgaWYgKHRoaXMuYXV0b21hdGFibGUpIHtcbiAgICAgICAgICAgIHRoaXMuYXV0b21hdGlvbi5lbmFibGVkID0gKHQgPT09IHRydWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldFZhbHVlQXRUaW1lUG9pbnQodGltZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5hdXRvbWF0aW9uLmdldFZhbHVlQXRUaW1lUG9pbnQodGltZSk7XG4gICAgfVxuICAgIHN0YXJ0KHRpbWUsIGNvbnRleHRUaW1lKSB7XG4gICAgICAgIHRoaXMuYXV0b21hdGlvbi5zdGFydCh0aW1lLCBjb250ZXh0VGltZSk7XG4gICAgfVxuICAgIHN0b3AodGltZSkge1xuICAgICAgICB0aGlzLmF1dG9tYXRpb24uc3RvcCh0aW1lKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBQbHVnaW5QYXJhbWV0ZXIgfSBmcm9tIFwiLi9QbHVnaW5QYXJhbWV0ZXJcIjtcbmV4cG9ydCBjbGFzcyBVUkxQYXJhbWV0ZXIgZXh0ZW5kcyBQbHVnaW5QYXJhbWV0ZXIge1xuICAgIGNvbnN0cnVjdG9yKG93bmVyLCBuYW1lLCBkZWZhdWx0VmFsdWUsIG1heExlbmd0aCwgdG9TdHJpbmdGdW5jLCB2aXNpYmxlTmFtZSwgZXhwb3NlZCA9IHRydWUpIHtcbiAgICAgICAgc3VwZXIob3duZXIsIG5hbWUsIFwiU3RyaW5nXCIsIHZpc2libGVOYW1lLCBleHBvc2VkKTtcbiAgICAgICAgdGhpcy5kZWZhdWx0VmFsdWUgPSBkZWZhdWx0VmFsdWU7XG4gICAgICAgIHRoaXMubWF4TGVuZ3RoID0gbWF4TGVuZ3RoO1xuICAgICAgICB0aGlzLnRvU3RyaW5nRnVuYyA9IHRvU3RyaW5nRnVuYztcbiAgICAgICAgdGhpcy50eXBlID0gXCJVUkxcIjtcbiAgICB9XG4gICAgZ2V0UmVzb3VyY2UodHlwZSkge1xuICAgICAgICBpZiAodGhpcy5yZXNvdXJjZU9iamVjdCA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMucmVzb3VyY2VPYmplY3QgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgICAgICAgICAgeGhyLm9wZW4oXCJHRVRcIiwgdGhpcy5fdmFsdWUpO1xuICAgICAgICAgICAgICAgIHhoci5yZXNwb25zZVR5cGUgPSB0eXBlO1xuICAgICAgICAgICAgICAgIHhoci5vbmxvYWQgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoeGhyLnN0YXR1cyA9PSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoeGhyLnJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogeGhyLnN0YXR1cyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBlLnRhcmdldFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHhoci5vbmVycm9yID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IHhoci5zdGF0dXMsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcImVycm9yXCJcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB4aHIub250aW1lb3V0ID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IHhoci5zdGF0dXMsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcInRpbWVvdXRcIlxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHhoci5zZW5kKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5yZXNvdXJjZU9iamVjdDtcbiAgICB9XG4gICAgc2V0VmFsdWUodiwgdXBkYXRlSW50ZXJmYWNlcyA9IHRydWUpIHtcbiAgICAgICAgaWYgKHRoaXMubWF4TGVuZ3RoICYmIHYubGVuZ3RoID4gdGhpcy5tYXhMZW5ndGgpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgU3RyaW5nIGxvbmdlciB0aGFuICR7dGhpcy5tYXhMZW5ndGh9IGNoYXJhY3RlcnNgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fdmFsdWUgIT09IHYpIHtcbiAgICAgICAgICAgIHRoaXMucmVzb3VyY2VPYmplY3QgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB0aGlzLl92YWx1ZSA9IHY7XG4gICAgICAgICAgICB0aGlzLnRyaWdnZXJQYXJhbWV0ZXJTZXQodXBkYXRlSW50ZXJmYWNlcyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50cmlnZ2VyKCk7XG4gICAgICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgICB9XG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy50b1N0cmluZ0Z1bmMgPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50b1N0cmluZ0Z1bmMuY2FsbCh0aGlzLCB0aGlzLl92YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0UGFyYW1ldGVyT2JqZWN0KCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHRoaXMudmFsdWUsXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU6IHRoaXMuZGVmYXVsdFZhbHVlLFxuICAgICAgICAgICAgbWF4TGVuZ3RoOiB0aGlzLm1heExlbmd0aCxcbiAgICAgICAgICAgIHZpc2libGVOYW1lOiB0aGlzLm5hbWUsXG4gICAgICAgICAgICB0eXBlOiBcIlVSTFBhcmFtZXRlclwiLFxuICAgICAgICAgICAgbmFtZTogdGhpcy5uYW1lXG4gICAgICAgIH07XG4gICAgfVxuICAgIGdldCB2YWx1ZSgpIHsgcmV0dXJuIHRoaXMuX3ZhbHVlOyB9XG4gICAgO1xuICAgIHNldCB2YWx1ZSh0KSB7IHRoaXMuc2V0VmFsdWUodCk7IH1cbn1cbiIsIi8qIGpzaGludCBlc3ZlcnNpb246IDYgKi9cbmltcG9ydCB7IE91dHB1dE5vZGUgfSBmcm9tIFwiLi4vLi4vRXh0cmFjdG9ycy9PdXRwdXROb2RlXCI7XG5leHBvcnQgY2xhc3MgU3ViRmFjdG9yeUZlYXR1cmVTZW5kZXIge1xuICAgIGNvbnN0cnVjdG9yKG93bmVyLCBGYWN0b3J5RmVhdHVyZU1hcCkge1xuICAgICAgICB0aGlzLm93bmVyID0gb3duZXI7XG4gICAgICAgIHRoaXMuRmFjdG9yeUZlYXR1cmVNYXAgPSBGYWN0b3J5RmVhdHVyZU1hcDtcbiAgICAgICAgdGhpcy5vdXRwdXROb2RlcyA9IFtdO1xuICAgICAgICB0aGlzLkZhY3RvcnlGZWF0dXJlTWFwLmNyZWF0ZVNvdXJjZU1hcCh0aGlzLCB1bmRlZmluZWQpO1xuICAgIH1cbiAgICB1cGRhdGVGZWF0dXJlcyhmZWF0dXJlT2JqZWN0LCBvdXRwdXRJbmRleCA9IDApIHtcbiAgICAgICAgaWYgKHRoaXMub3V0cHV0Tm9kZXNbb3V0cHV0SW5kZXhdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGlmIChvdXRwdXRJbmRleCA+IDEpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyAoXCJSZXF1ZXN0ZWQgYW4gb3V0cHV0IHRoYXQgZG9lcyBub3QgZXhpc3RcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLm91dHB1dE5vZGVzW291dHB1dEluZGV4XSA9IG5ldyBPdXRwdXROb2RlKHRoaXMsIHRoaXMub3duZXIuY2hhaW5TdGFydCwgb3V0cHV0SW5kZXgpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IHNpID0gMDsgc2kgPCBmZWF0dXJlT2JqZWN0Lmxlbmd0aDsgc2krKykge1xuICAgICAgICAgICAgbGV0IGV4dHJhY3RvciA9IHRoaXMub3V0cHV0Tm9kZXNbb3V0cHV0SW5kZXhdLmZpbmRFeHRyYWN0b3IoZmVhdHVyZU9iamVjdFtzaV0uZnJhbWVTaXplKTtcbiAgICAgICAgICAgIGlmICghZXh0cmFjdG9yKSB7XG4gICAgICAgICAgICAgICAgZXh0cmFjdG9yID0gdGhpcy5vdXRwdXROb2Rlc1tvdXRwdXRJbmRleF0uYWRkRXh0cmFjdG9yKGZlYXR1cmVPYmplY3Rbc2ldLmZyYW1lU2l6ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBleHRyYWN0b3Iuc2V0RmVhdHVyZXMoZmVhdHVyZU9iamVjdFtzaV0uZmVhdHVyZXMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIDtcbiAgICByZWpvaW5FeHRyYWN0b3JzKCkge1xuICAgICAgICBmb3IgKGNvbnN0IG91dHB1dE5vZGUgb2YgdGhpcy5vdXRwdXROb2Rlcykge1xuICAgICAgICAgICAgb3V0cHV0Tm9kZS5yZWpvaW5FeHRyYWN0b3JzKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcG9zdEZlYXR1cmVzKGZlYXR1cmVPYmplY3QpIHtcbiAgICAgICAgLypcbiAgICAgICAgICAgIENhbGxlZCBieSB0aGUgaW5kaXZpZHVhbCBleHRyYWN0b3IgaW5zdGFuY2VzOlxuICAgICAgICAgICAgZmVhdHVyZU9iamVjdCA9IHsnZnJhbWVTaXplJzogZnJhbWVTaXplLFxuICAgICAgICAgICAgJ291dHB1dEluZGV4Jzogb3V0cHV0SW5kZXgsXG4gICAgICAgICAgICAncmVzdWx0cyc6W119XG4gICAgICAgICovXG4gICAgICAgIHRoaXMuRmFjdG9yeUZlYXR1cmVNYXAucG9zdEZlYXR1cmVzKHtcbiAgICAgICAgICAgICdwbHVnaW4nOiB0aGlzLFxuICAgICAgICAgICAgJ291dHB1dEluZGV4JzogZmVhdHVyZU9iamVjdC5vdXRwdXRJbmRleCxcbiAgICAgICAgICAgICdmcmFtZVNpemUnOiBmZWF0dXJlT2JqZWN0LmZyYW1lU2l6ZSxcbiAgICAgICAgICAgICdyZXN1bHRzJzogZmVhdHVyZU9iamVjdC5yZXN1bHRzXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICA7XG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5GYWN0b3J5RmVhdHVyZU1hcC5kZWxldGVTb3VyY2VNYXAodGhpcyk7XG4gICAgfVxufVxuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG4vKiBqc2hpbnQgZXN2ZXJzaW9uOiA2ICovXG5pbXBvcnQgeyBMaW5rZWRTdG9yZSB9IGZyb20gXCIuLi8uLi9MaW5rZWRTdG9yZVwiO1xuaW1wb3J0IHsgU3ViRmFjdG9yeUZlYXR1cmVTZW5kZXIgfSBmcm9tIFwiLi9TdWJGYWN0b3J5RmVhdHVyZVNlbmRlci9pbmRleFwiO1xudmFyIEF1ZGlvUGx1Z2luQ2hhaW5NYW5hZ2VyU3RhdGU7XG4oZnVuY3Rpb24gKEF1ZGlvUGx1Z2luQ2hhaW5NYW5hZ2VyU3RhdGUpIHtcbiAgICBBdWRpb1BsdWdpbkNoYWluTWFuYWdlclN0YXRlW0F1ZGlvUGx1Z2luQ2hhaW5NYW5hZ2VyU3RhdGVbXCJSRUFEWVwiXSA9IDBdID0gXCJSRUFEWVwiO1xuICAgIEF1ZGlvUGx1Z2luQ2hhaW5NYW5hZ2VyU3RhdGVbQXVkaW9QbHVnaW5DaGFpbk1hbmFnZXJTdGF0ZVtcIkNMT1NFRFwiXSA9IDFdID0gXCJDTE9TRURcIjtcbn0pKEF1ZGlvUGx1Z2luQ2hhaW5NYW5hZ2VyU3RhdGUgfHwgKEF1ZGlvUGx1Z2luQ2hhaW5NYW5hZ2VyU3RhdGUgPSB7fSkpO1xuZXhwb3J0IGNsYXNzIEF1ZGlvUGx1Z2luQ2hhaW5NYW5hZ2VyIHtcbiAgICBjb25zdHJ1Y3RvcihQbHVnaW5GYWN0b3J5LCBjaGFpblN0YXJ0LCBjaGFpblN0b3ApIHtcbiAgICAgICAgdGhpcy5QbHVnaW5GYWN0b3J5ID0gUGx1Z2luRmFjdG9yeTtcbiAgICAgICAgdGhpcy5jaGFpblN0YXJ0ID0gY2hhaW5TdGFydDtcbiAgICAgICAgdGhpcy5jaGFpblN0b3AgPSBjaGFpblN0b3A7XG4gICAgICAgIHRoaXMucGx1Z2luX2xpc3QgPSBbXTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IEF1ZGlvUGx1Z2luQ2hhaW5NYW5hZ2VyU3RhdGUuUkVBRFk7XG4gICAgICAgIHRoaXMuZGVsYXlTYW1wbGVzID0gMDtcbiAgICAgICAgdGhpcy5mZWF0dXJlU2VuZGVyID0gbmV3IFN1YkZhY3RvcnlGZWF0dXJlU2VuZGVyKHRoaXMsIHRoaXMuUGx1Z2luRmFjdG9yeS5GZWF0dXJlTWFwKTtcbiAgICAgICAgdGhpcy5zZW1hbnRpY1N0b3JlcyA9IFtdO1xuICAgICAgICB0aGlzLmV2ZW50VGFyZ2V0ID0gbmV3IEV2ZW50VGFyZ2V0KCk7XG4gICAgICAgIHRoaXMuZmFjdG9yeU5hbWUgPSAnJztcbiAgICAgICAgdGhpcy5UcmFja0RhdGEgPSBuZXcgTGlua2VkU3RvcmUoXCJUcmFja1wiKTtcbiAgICAgICAgY2hhaW5TdGFydC5kaXNjb25uZWN0KCk7XG4gICAgICAgIGNoYWluU3RhcnQuY29ubmVjdChjaGFpblN0b3ApO1xuICAgIH1cbiAgICByZWJ1aWxkKCkge1xuICAgICAgICBsZXQgaSA9IDAsIGwgPSB0aGlzLnBsdWdpbl9saXN0Lmxlbmd0aCAtIDE7XG4gICAgICAgIHdoaWxlIChpIDwgbCkge1xuICAgICAgICAgICAgY29uc3QgY3VycmVudE5vZGUgPSB0aGlzLnBsdWdpbl9saXN0W2krK107XG4gICAgICAgICAgICBjb25zdCBuZXh0Tm9kZSA9IHRoaXMucGx1Z2luX2xpc3RbaV07XG4gICAgICAgICAgICBjdXJyZW50Tm9kZS5yZWNvbm5lY3QobmV4dE5vZGUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlzb2xhdGUoKSB7XG4gICAgICAgIHRoaXMucGx1Z2luX2xpc3QuZm9yRWFjaCgoZSkgPT4ge1xuICAgICAgICAgICAgZS5kaXNjb25uZWN0KCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjdXRDaGFpbigpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmICh0aGlzLnBsdWdpbl9saXN0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYWluU3RhcnQuZGlzY29ubmVjdCh0aGlzLnBsdWdpbl9saXN0WzBdLmlucHV0KTtcbiAgICAgICAgICAgICAgICB0aGlzLnBsdWdpbl9saXN0W3RoaXMucGx1Z2luX2xpc3QubGVuZ3RoIC0gMV0ub3V0cHV0LmRpc2Nvbm5lY3QodGhpcy5jaGFpblN0b3ApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFpblN0YXJ0LmRpc2Nvbm5lY3QodGhpcy5jaGFpblN0b3ApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChfYSkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKCdjb3VsZCBub3QgZGlzY29ubmVjdCBwbHVnaW4gY2hhaW4hJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGpvaW5DaGFpbigpIHtcbiAgICAgICAgaWYgKHRoaXMucGx1Z2luX2xpc3QubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5jaGFpblN0YXJ0LmNvbm5lY3QodGhpcy5wbHVnaW5fbGlzdFswXS5pbnB1dCk7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbl9saXN0W3RoaXMucGx1Z2luX2xpc3QubGVuZ3RoIC0gMV0ub3V0cHV0LmNvbm5lY3QodGhpcy5jaGFpblN0b3ApO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jaGFpblN0YXJ0LmNvbm5lY3QodGhpcy5jaGFpblN0b3ApO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZmVhdHVyZVNlbmRlci5yZWpvaW5FeHRyYWN0b3JzKCk7XG4gICAgfVxuICAgIGJ1aWxkTmV3UGx1Z2luKHByb3RvdHlwZU9iamVjdCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUgPT09IEF1ZGlvUGx1Z2luQ2hhaW5NYW5hZ2VyU3RhdGUuQ0xPU0VEKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiU3ViRmFjdG9yeSBoYXMgYmVlbiBkZXN0cm95ZWQhIENhbm5vdCBhZGQgbmV3IHBsdWdpbnNcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBub2RlID0geWllbGQgcHJvdG90eXBlT2JqZWN0LmNyZWF0ZVBsdWdpbkluc3RhbmNlKHRoaXMpO1xuICAgICAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXREZWxheUNvbXBlbnNhdGlvbigpIHtcbiAgICAgICAgbGV0IHN1bSA9IDA7XG4gICAgICAgIGZvciAoY29uc3QgcGx1Z2luIG9mIHRoaXMucGx1Z2luX2xpc3QpIHtcbiAgICAgICAgICAgIGlmICghcGx1Z2luLmlzQnlwYXNzZWQoKSkge1xuICAgICAgICAgICAgICAgIHN1bSArPSBwbHVnaW4ubm9kZS5wcm9jZXNzaW5nRGVsYXlBc1NhbXBsZXM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN1bTtcbiAgICB9XG4gICAgYnlwYXNzUGx1Z2luKHBsdWdpbl9pbnN0YW5jZSwgc3RhdGUpIHtcbiAgICAgICAgLy8gQ2hlY2sgaXMgYSBtZW1iZXIgb2YgdGhpcyBjaGFpblxuICAgICAgICBpZiAodGhpcy5wbHVnaW5fbGlzdC5pbmNsdWRlcyhwbHVnaW5faW5zdGFuY2UpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHBsdWdpbl9pbnN0YW5jZS5ieXBhc3Moc3RhdGUpO1xuICAgIH1cbiAgICBnZXRQcm90b3R5cGVzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5QbHVnaW5GYWN0b3J5LmdldFByb3RvdHlwZXMoKTtcbiAgICB9XG4gICAgZ2V0RmFjdG9yeSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuUGx1Z2luRmFjdG9yeTtcbiAgICB9XG4gICAgO1xuICAgIGRlc3Ryb3kocmVjb25uZWN0ID0gZmFsc2UpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgPT09IEF1ZGlvUGx1Z2luQ2hhaW5NYW5hZ2VyU3RhdGUuUkVBRFkpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgcGx1Z2luSW5zdGFuY2VvIG9mIHRoaXMucGx1Z2luX2xpc3QpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRlc3Ryb3lQbHVnaW4ocGx1Z2luSW5zdGFuY2VvKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY2hhaW5TdGFydC5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICBpZiAocmVjb25uZWN0ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFpblN0YXJ0LmNvbm5lY3QodGhpcy5jaGFpblN0b3ApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5mZWF0dXJlU2VuZGVyLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBBdWRpb1BsdWdpbkNoYWluTWFuYWdlclN0YXRlLkNMT1NFRDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjcmVhdGVQbHVnaW4ocHJvdG90eXBlT2JqZWN0KSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZSA9PT0gQXVkaW9QbHVnaW5DaGFpbk1hbmFnZXJTdGF0ZS5DTE9TRUQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgbm9kZTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgbm9kZSA9IHlpZWxkIHRoaXMuYnVpbGROZXdQbHVnaW4ocHJvdG90eXBlT2JqZWN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmN1dENoYWluKCk7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbl9saXN0LnB1c2gobm9kZSk7XG4gICAgICAgICAgICB0aGlzLmlzb2xhdGUoKTtcbiAgICAgICAgICAgIHRoaXMucmVidWlsZCgpO1xuICAgICAgICAgICAgdGhpcy5qb2luQ2hhaW4oKTtcbiAgICAgICAgICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihcImFsdGVyZGVsYXlcIiwgdGhpcyk7XG4gICAgICAgICAgICBub2RlLm5vZGUub25sb2FkZWQuY2FsbChub2RlLm5vZGUpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVEZWxheUNvbXBlbnNhdGlvbigpO1xuICAgICAgICAgICAgdGhpcy5ldmVudFRhcmdldC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImNoYW5nZVwiKSk7XG4gICAgICAgICAgICByZXR1cm4gbm9kZTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJlbW92ZVBsdWdpbihwbHVnaW5fb2JqZWN0KSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlID09PSBBdWRpb1BsdWdpbkNoYWluTWFuYWdlclN0YXRlLkNMT1NFRCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuZ2V0UGx1Z2luSW5kZXgocGx1Z2luX29iamVjdCk7XG4gICAgICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmN1dENoYWluKCk7XG4gICAgICAgICAgICBwbHVnaW5fb2JqZWN0LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJhbHRlcmRlbGF5XCIsIHRoaXMpO1xuICAgICAgICAgICAgcGx1Z2luX29iamVjdC5ub2RlLnN0b3AuY2FsbChwbHVnaW5fb2JqZWN0Lm5vZGUpO1xuICAgICAgICAgICAgcGx1Z2luX29iamVjdC5ub2RlLm9udW5sb2FkZWQuY2FsbChwbHVnaW5fb2JqZWN0Lm5vZGUpO1xuICAgICAgICAgICAgdGhpcy5wbHVnaW5fbGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgdGhpcy5pc29sYXRlKCk7XG4gICAgICAgICAgICB0aGlzLnJlYnVpbGQoKTtcbiAgICAgICAgICAgIHRoaXMuam9pbkNoYWluKCk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZURlbGF5Q29tcGVuc2F0aW9uKCk7XG4gICAgICAgICAgICB0aGlzLmV2ZW50VGFyZ2V0LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiY2hhbmdlXCIpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBkZXN0cm95UGx1Z2luKHBsdWdpbl9vYmplY3QpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgPT09IEF1ZGlvUGx1Z2luQ2hhaW5NYW5hZ2VyU3RhdGUuQ0xPU0VEKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZW1vdmVQbHVnaW4ocGx1Z2luX29iamVjdCk7XG4gICAgICAgIHRoaXMuUGx1Z2luRmFjdG9yeS5kZWxldGVQbHVnaW4ocGx1Z2luX29iamVjdCk7XG4gICAgICAgIHRoaXMudXBkYXRlRGVsYXlDb21wZW5zYXRpb24oKTtcbiAgICB9XG4gICAgZ2V0UGx1Z2lucygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGx1Z2luX2xpc3Q7XG4gICAgfVxuICAgIGdldEFsbFBsdWdpbnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLlBsdWdpbkZhY3RvcnkuZ2V0QWxsUGx1Z2luc09iamVjdCgpO1xuICAgIH1cbiAgICA7XG4gICAgZ2V0UGx1Z2luSW5kZXgocGx1Z2luX29iamVjdCkge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZSA9PT0gQXVkaW9QbHVnaW5DaGFpbk1hbmFnZXJTdGF0ZS5DTE9TRUQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5wbHVnaW5fbGlzdC5pbmRleE9mKHBsdWdpbl9vYmplY3QpO1xuICAgIH1cbiAgICBtb3ZlUGx1Z2luKHBsdWdpbl9vYmplY3QsIG5ld19pbmRleCkge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZSA9PT0gQXVkaW9QbHVnaW5DaGFpbk1hbmFnZXJTdGF0ZS5DTE9TRUQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5QbHVnaW5GYWN0b3J5LmdldEFsbFBsdWdpbnMoKS5pbmNsdWRlcyhwbHVnaW5fb2JqZWN0KSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlBsdWdpbiBkb2VzIG5vdCBleGlzdFwiKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuZ2V0UGx1Z2luSW5kZXgocGx1Z2luX29iamVjdCk7XG4gICAgICAgIGxldCBvYmo7XG4gICAgICAgIHRoaXMuY3V0Q2hhaW4oKTtcbiAgICAgICAgdGhpcy5pc29sYXRlKCk7XG4gICAgICAgIGlmIChwbHVnaW5fb2JqZWN0Lm5vZGUub3duZXIgIT09IHRoaXMpIHtcbiAgICAgICAgICAgIC8vIERpZmZlcmVudCBzdWItZmFjdG9yeVxuICAgICAgICAgICAgcGx1Z2luX29iamVjdC5ub2RlLm93bmVyLnJlbW92ZVBsdWdpbihwbHVnaW5fb2JqZWN0KTtcbiAgICAgICAgICAgIHBsdWdpbl9vYmplY3Qubm9kZS5jaGFuZ2VPd25lcih0aGlzKTtcbiAgICAgICAgICAgIG9iaiA9IFtwbHVnaW5fb2JqZWN0XTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG9iaiA9IHRoaXMucGx1Z2luX2xpc3Quc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIHBsdWdpbl9vYmplY3Qubm9kZS5vbnVubG9hZGVkLmNhbGwocGx1Z2luX29iamVjdC5ub2RlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobmV3X2luZGV4ID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbl9saXN0ID0gb2JqLmNvbmNhdCh0aGlzLnBsdWdpbl9saXN0KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChuZXdfaW5kZXggPj0gdGhpcy5wbHVnaW5fbGlzdC5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luX2xpc3QgPSB0aGlzLnBsdWdpbl9saXN0LmNvbmNhdChvYmopO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgaG9sZExvdyA9IHRoaXMucGx1Z2luX2xpc3Quc2xpY2UoMCwgbmV3X2luZGV4KTtcbiAgICAgICAgICAgIGNvbnN0IGhvbGRIaWdoID0gdGhpcy5wbHVnaW5fbGlzdC5zbGljZShuZXdfaW5kZXgpO1xuICAgICAgICAgICAgdGhpcy5wbHVnaW5fbGlzdCA9IGhvbGRMb3cuY29uY2F0KG9iai5jb25jYXQoaG9sZEhpZ2gpKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlYnVpbGQoKTtcbiAgICAgICAgdGhpcy5qb2luQ2hhaW4oKTtcbiAgICAgICAgcGx1Z2luX29iamVjdC5ub2RlLm9ubG9hZGVkLmNhbGwocGx1Z2luX29iamVjdC5ub2RlKTtcbiAgICAgICAgdGhpcy51cGRhdGVEZWxheUNvbXBlbnNhdGlvbigpO1xuICAgICAgICB0aGlzLmV2ZW50VGFyZ2V0LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiY2hhbmdlXCIpKTtcbiAgICB9XG4gICAgY29weVBsdWdpbihwbHVnaW5fb2JqZWN0LCBjb3B5X2luZGV4KSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBpZiAoY29weV9pbmRleCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgY29weV9pbmRleCA9IHRoaXMucGx1Z2luX2xpc3QubGVuZ3RoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb3B5X2luZGV4ICE9IFwibnVtYmVyXCIgfHwgY29weV9pbmRleCA8IDAgfHwgY29weV9pbmRleCA+IHRoaXMucGx1Z2luX2xpc3QubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgKFwiUGx1Z2luIGNvcHkgaW5kZXggb3V0c2lkZSBvZiB0aGUgY2hhaW4gc2NvcGUuXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IG5vZGU7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIG5vZGUgPSB5aWVsZCB0aGlzLmJ1aWxkTmV3UGx1Z2luKHBsdWdpbl9vYmplY3QucHJvdG90eXBlT2JqZWN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUGx1Z2luIGRpZCBub3QgZ2V0IGNyZWF0ZWQhIEFib3J0aW5nXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbm9kZS5ub2RlLnBhcmFtZXRlcnMuc2V0UGFyYW1ldGVyc0J5T2JqZWN0KHBsdWdpbl9vYmplY3Qubm9kZS5wYXJhbWV0ZXJzLmdldFBhcmFtZXRlck9iamVjdCgpLCBmYWxzZSk7XG4gICAgICAgICAgICB0aGlzLmN1dENoYWluKCk7XG4gICAgICAgICAgICB0aGlzLmlzb2xhdGUoKTtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luX2xpc3Quc3BsaWNlKGNvcHlfaW5kZXgsIDAsIG5vZGUpO1xuICAgICAgICAgICAgdGhpcy5yZWJ1aWxkKCk7XG4gICAgICAgICAgICB0aGlzLmpvaW5DaGFpbigpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVEZWxheUNvbXBlbnNhdGlvbigpO1xuICAgICAgICAgICAgbm9kZS5ub2RlLm9ubG9hZGVkLmNhbGwobm9kZS5ub2RlKTtcbiAgICAgICAgICAgIHRoaXMuZXZlbnRUYXJnZXQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJjaGFuZ2VcIikpO1xuICAgICAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBkdXBsaWNhdGVBdWRpb1BsdWdpbkNoYWluTWFuYWdlcihzb3VyY2VBdWRpb1BsdWdpbkNoYWluTWFuYWdlcikge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBwbHVnaW4gb2Ygc291cmNlQXVkaW9QbHVnaW5DaGFpbk1hbmFnZXIuZ2V0UGx1Z2lucygpKSB7XG4gICAgICAgICAgICAgICAgeWllbGQgdGhpcy5jb3B5UGx1Z2luKHBsdWdpbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJlY3Vyc2l2ZVByb2Nlc3NpbmcoYmFzZSwgbGlzdCkge1xuICAgICAgICBjb25zdCBsID0gbGlzdC5sZW5ndGg7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBlbnRyeSA9IGxpc3RbaV07XG4gICAgICAgICAgICBiYXNlW2VudHJ5Lm5hbWVdLmFwcGx5KGJhc2UsIGVudHJ5LnBhcmFtZXRlcnMpO1xuICAgICAgICAgICAgaWYgKGVudHJ5LmZlYXR1cmVzICYmIGVudHJ5LmZlYXR1cmVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlY3Vyc2l2ZVByb2Nlc3NpbmcoYmFzZS5yZXN1bHRbZW50cnkubmFtZV0sIGVudHJ5LmZlYXR1cmVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICB1cGRhdGVEZWxheUNvbXBlbnNhdGlvbigpIHtcbiAgICAgICAgY29uc3Qgc3VtID0gdGhpcy5nZXREZWxheUNvbXBlbnNhdGlvbigpO1xuICAgICAgICBpZiAodGhpcy5kZWxheVNhbXBsZXMgIT0gc3VtKSB7XG4gICAgICAgICAgICB0aGlzLmRlbGF5U2FtcGxlcyA9IHN1bTtcbiAgICAgICAgICAgIHRoaXMuZXZlbnRUYXJnZXQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJhbHRlcmRlbGF5XCIpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5kZWxheVNhbXBsZXM7XG4gICAgfVxuICAgIGhhbmRsZUV2ZW50KGUpIHtcbiAgICAgICAgaWYgKGUudHlwZSA9PSBcImFsdGVyZGVsYXlcIikge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVEZWxheUNvbXBlbnNhdGlvbigpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFkZEV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXIsIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZXZlbnRUYXJnZXQuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lciwgb3B0aW9ucyk7XG4gICAgfVxuICAgIHJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXIsIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZXZlbnRUYXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lciwgb3B0aW9ucyk7XG4gICAgfVxuICAgIGdldCBTZXNzaW9uRGF0YSgpIHsgcmV0dXJuIHRoaXMuUGx1Z2luRmFjdG9yeS5TZXNzaW9uRGF0YTsgfVxuICAgIGdldCBVc2VyRGF0YSgpIHsgcmV0dXJuIHRoaXMuUGx1Z2luRmFjdG9yeS5Vc2VyRGF0YTsgfVxuICAgIGdldCBwcm9jZXNzaW5nRGVsYXlBc1NhbXBsZXMoKSB7IHJldHVybiB0aGlzLnVwZGF0ZURlbGF5Q29tcGVuc2F0aW9uKCk7IH1cbiAgICBnZXQgcHJvY2Vzc2luZ0RlbGF5QXNTZWNvbmRzKCkgeyByZXR1cm4gdGhpcy5wcm9jZXNzaW5nRGVsYXlBc1NhbXBsZXMgLyB0aGlzLlBsdWdpbkZhY3RvcnkuY29udGV4dC5zYW1wbGVSYXRlOyB9XG59XG4iLCJpbXBvcnQgeyBUaW1lRGF0YSB9IGZyb20gXCJqcy14dHJhY3RcIjtcbmV4cG9ydCBjbGFzcyBFeHRyYWN0b3Ige1xuICAgIGNvbnN0cnVjdG9yKHBhcmVudCwgZnJhbWVTaXplKSB7XG4gICAgICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xuICAgICAgICB0aGlzLmZyYW1lU2l6ZSA9IGZyYW1lU2l6ZTtcbiAgICAgICAgdGhpcy5mZWF0dXJlcyA9IFtdO1xuICAgICAgICB0aGlzLmNvbnRleHQgPSB0aGlzLnBhcmVudC5vdXRwdXQuY29udGV4dDtcbiAgICAgICAgdGhpcy5hbmFseXNlciA9IHBhcmVudC5vdXRwdXQuY29udGV4dC5jcmVhdGVBbmFseXNlcigpO1xuICAgICAgICB0aGlzLmFuYWx5c2VyLmZmdFNpemUgPSBmcmFtZVNpemU7XG4gICAgICAgIHBhcmVudC5vdXRwdXQuY29ubmVjdCh0aGlzLmFuYWx5c2VyKTtcbiAgICB9XG4gICAgZ2V0WHRyYWN0RGF0YSgpIHtcbiAgICAgICAgaWYgKHRoaXMudGltZURhdGEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy50aW1lRGF0YSA9IG5ldyBUaW1lRGF0YSh0aGlzLmFuYWx5c2VyLmZmdFNpemUsIHRoaXMuY29udGV4dC5zYW1wbGVSYXRlKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkc3QgPSBuZXcgRmxvYXQzMkFycmF5KHRoaXMuYW5hbHlzZXIuZmZ0U2l6ZSk7XG4gICAgICAgIGlmICh0aGlzLmFuYWx5c2VyLmdldEZsb2F0VGltZURvbWFpbkRhdGEpIHtcbiAgICAgICAgICAgIHRoaXMuYW5hbHlzZXIuZ2V0RmxvYXRUaW1lRG9tYWluRGF0YShkc3QpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgdmlldyA9IG5ldyBVaW50OEFycmF5KHRoaXMuYW5hbHlzZXIuZmZ0U2l6ZSk7XG4gICAgICAgICAgICB0aGlzLmFuYWx5c2VyLmdldEJ5dGVUaW1lRG9tYWluRGF0YSh2aWV3KTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hbmFseXNlci5mZnRTaXplOyBpKyspIHtcbiAgICAgICAgICAgICAgICBkc3RbaV0gPSB2aWV3W2ldO1xuICAgICAgICAgICAgICAgIGRzdFtpXSA9IChkc3RbaV0gLyAxMjcuNSkgLSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMudGltZURhdGEuY29weURhdGFGcm9tKGRzdCk7XG4gICAgICAgIHJldHVybiB0aGlzLnRpbWVEYXRhO1xuICAgIH1cbiAgICBmcmFtZUNhbGxiYWNrKCkge1xuICAgICAgICAvLyBQZXJmb3JtIGEgY2FsbGJhY2sgb24gZWFjaCBmcmFtZVxuICAgICAgICAvLyBUaGUgZnVuY3Rpb24gY2FsbGJhY2sgaGFzIHRoZSBhcmd1bWVudHMgKGN1cnJlbnRfZnJhbWUsIHByZXZpb3VzX2ZyYW1lLCBwcmV2aW91c19yZXN1bHQpXG4gICAgICAgIGlmICh0aGlzLmNhbGxiYWNrT2JqZWN0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuY2FsbGJhY2tPYmplY3QgPSB0aGlzLnBhcmVudC5vdXRwdXQuY29udGV4dC5jcmVhdGVTY3JpcHRQcm9jZXNzb3IodGhpcy5hbmFseXNlci5mZnRTaXplLCAxLCAxKTtcbiAgICAgICAgICAgIHRoaXMuYW5hbHlzZXIuY29ubmVjdCh0aGlzLmNhbGxiYWNrT2JqZWN0KTtcbiAgICAgICAgICAgIHRoaXMuY2FsbGJhY2tPYmplY3Qub25hdWRpb3Byb2Nlc3MgPSAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRfZnJhbWUgPSB0aGlzLmdldFh0cmFjdERhdGEoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBtZXNzYWdlID0ge1xuICAgICAgICAgICAgICAgICAgICAnbnVtYmVyT2ZDaGFubmVscyc6IDEsXG4gICAgICAgICAgICAgICAgICAgICdyZXN1bHRzJzogW11cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIG1lc3NhZ2UucmVzdWx0c1swXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgJ2NoYW5uZWwnOiAwLFxuICAgICAgICAgICAgICAgICAgICAncmVzdWx0cyc6IFtdXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB0aGlzLnBvc3RGZWF0dXJlcyhtZXNzYWdlKTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBjID0gMDsgYyA8IGUub3V0cHV0QnVmZmVyLm51bWJlck9mQ2hhbm5lbHMgJiYgYyA8IGUuaW5wdXRCdWZmZXIubnVtYmVyT2ZDaGFubmVsczsgYysrKSB7XG4gICAgICAgICAgICAgICAgICAgIGUub3V0cHV0QnVmZmVyLmNvcHlUb0NoYW5uZWwoZS5pbnB1dEJ1ZmZlci5nZXRDaGFubmVsRGF0YShjKSwgYyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICAvLyBGb3IgY2hyb21lIGFuZCBvdGhlciBlZmZpY2llbmN5IGJyb3dzZXJzXG4gICAgICAgIGlmICghdGhpcy5mb29HYWluKSB7XG4gICAgICAgICAgICB0aGlzLmZvb0dhaW4gPSB0aGlzLmNvbnRleHQuY3JlYXRlR2FpbigpO1xuICAgICAgICAgICAgdGhpcy5mb29HYWluLmdhaW4udmFsdWUgPSAwO1xuICAgICAgICAgICAgdGhpcy5jYWxsYmFja09iamVjdC5jb25uZWN0KHRoaXMuZm9vR2Fpbik7XG4gICAgICAgICAgICB0aGlzLmZvb0dhaW4uY29ubmVjdCh0aGlzLmNvbnRleHQuZGVzdGluYXRpb24pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNsZWFyQ2FsbGJhY2soKSB7XG4gICAgICAgIC8vdGhpcyA9PT0gRXh0cmFjdG9yXG4gICAgICAgIGlmICh0aGlzLmNhbGxiYWNrT2JqZWN0KSB7XG4gICAgICAgICAgICB0aGlzLmNhbGxiYWNrT2JqZWN0LmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgIHRoaXMuZm9vR2Fpbi5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICB0aGlzLmZvb0dhaW4gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB0aGlzLmNhbGxiYWNrT2JqZWN0Lm9uYXVkaW9wcm9jZXNzID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgdGhpcy5jYWxsYmFja09iamVjdCA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzZXRGZWF0dXJlcyhmZWF0dXJlTGlzdCkge1xuICAgICAgICB0aGlzLmZlYXR1cmVzID0gZmVhdHVyZUxpc3Q7XG4gICAgICAgIGlmICh0aGlzLmZlYXR1cmVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5jbGVhckNhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmZyYW1lQ2FsbGJhY2soKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZWpvaW5FeHRyYWN0b3IoKSB7XG4gICAgICAgIHRoaXMucGFyZW50Lm91dHB1dC5jb25uZWN0KHRoaXMuZXh0cmFjdG9yKTtcbiAgICB9XG4gICAgcG9zdEZlYXR1cmVzKHJlc3VsdHNKU09OKSB7XG4gICAgICAgIGNvbnN0IG9iaiA9IHtcbiAgICAgICAgICAgICdvdXRwdXRJbmRleCc6IHRoaXMucGFyZW50LmluZGV4LFxuICAgICAgICAgICAgJ2ZyYW1lU2l6ZSc6IHRoaXMuZnJhbWVTaXplLFxuICAgICAgICAgICAgJ3Jlc3VsdHMnOiByZXN1bHRzSlNPTlxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnBhcmVudC5wb3N0RmVhdHVyZXMob2JqKTtcbiAgICB9XG4gICAgZ2V0IGV4dHJhY3RvcigpIHsgcmV0dXJuIHRoaXMuYW5hbHlzZXI7IH1cbn1cbiIsImltcG9ydCB7IEV4dHJhY3RvciB9IGZyb20gXCIuL0V4dHJhY3RvclwiO1xuaW1wb3J0IHsgV29ya2VyRXh0cmFjdG9yIH0gZnJvbSBcIi4vV29ya2VyRXh0cmFjdG9yXCI7XG5leHBvcnQgY2xhc3MgT3V0cHV0Tm9kZSB7XG4gICAgY29uc3RydWN0b3IocGFyZW50LCBvdXRwdXQsIGluZGV4KSB7XG4gICAgICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xuICAgICAgICB0aGlzLm91dHB1dCA9IG91dHB1dDtcbiAgICAgICAgdGhpcy5pbmRleCA9IGluZGV4O1xuICAgICAgICB0aGlzLmV4dHJhY3RvcnMgPSBbXTtcbiAgICB9XG4gICAgYWRkRXh0cmFjdG9yKGZyYW1lU2l6ZSkge1xuICAgICAgICBsZXQgb2JqO1xuICAgICAgICBpZiAod2luZG93Lldvcmtlcikge1xuICAgICAgICAgICAgb2JqID0gbmV3IFdvcmtlckV4dHJhY3Rvcih0aGlzLCBmcmFtZVNpemUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgb2JqID0gbmV3IEV4dHJhY3Rvcih0aGlzLCBmcmFtZVNpemUpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZXh0cmFjdG9ycy5wdXNoKG9iaik7XG4gICAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuICAgIGZpbmRFeHRyYWN0b3IoZnJhbWVTaXplKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmV4dHJhY3RvcnMuZmluZCgoZSkgPT4gZS5mcmFtZVNpemUgPT09IGZyYW1lU2l6ZSk7XG4gICAgfVxuICAgIGRlbGV0ZUV4dHJhY3RvcihmcmFtZVNpemUpIHtcbiAgICAgICAgY29uc3QgZXh0cmFjdG9yID0gdGhpcy5maW5kRXh0cmFjdG9yKGZyYW1lU2l6ZSk7XG4gICAgICAgIGlmIChleHRyYWN0b3IpIHtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5leHRyYWN0b3JzLmluZGV4T2YoZXh0cmFjdG9yKTtcbiAgICAgICAgICAgIHRoaXMuZXh0cmFjdG9ycy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlam9pbkV4dHJhY3RvcnMoKSB7XG4gICAgICAgIHRoaXMuZXh0cmFjdG9ycy5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBlLnJlam9pbkV4dHJhY3RvcigpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcG9zdEZlYXR1cmVzKHJlc3VsdE9iamVjdCkge1xuICAgICAgICB0aGlzLnBhcmVudC5wb3N0RmVhdHVyZXMocmVzdWx0T2JqZWN0KTtcbiAgICB9XG59XG4iLCJleHBvcnQgY2xhc3MgV29ya2VyRXh0cmFjdG9yIHtcbiAgICBjb25zdHJ1Y3RvcihwYXJlbnQsIGZyYW1lU2l6ZSkge1xuICAgICAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgICAgICAgdGhpcy5mcmFtZVNpemUgPSBmcmFtZVNpemU7XG4gICAgICAgIHRoaXMud29ya2VyID0gbmV3IFdvcmtlcihcIi4uL2ZlYXR1cmUtd29ya2VyLmpzXCIsIHsgdHlwZTogXCJtb2R1bGVcIiB9KTtcbiAgICAgICAgdGhpcy5mZWF0dXJlcyA9IFtdO1xuICAgICAgICB0aGlzLmFuYWx5c2VyID0gcGFyZW50Lm91dHB1dC5jb250ZXh0LmNyZWF0ZVNjcmlwdFByb2Nlc3NvcihmcmFtZVNpemUsIHBhcmVudC5vdXRwdXQubnVtYmVyT2ZPdXRwdXRzLCAxKTtcbiAgICAgICAgcGFyZW50Lm91dHB1dC5jb25uZWN0KHRoaXMuYW5hbHlzZXIpO1xuICAgICAgICB0aGlzLndvcmtlci5vbmVycm9yID0gKGVycm9yRXZlbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3JFdmVudCk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMud29ya2VyLm9ubWVzc2FnZSA9IChlKSA9PiB7XG4gICAgICAgICAgICBpZiAoZS5kYXRhLnN0YXRlID09PSAyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXNwb25zZShlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGUuZGF0YS5zdGF0ZSA9PT0gMSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZXh0cmFjdG9yLm9uYXVkaW9wcm9jZXNzID0gdGhpcy5vbmF1ZGlvY2FsbGJhY2s7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuICAgIG9uYXVkaW9jYWxsYmFjayhlKSB7XG4gICAgICAgIHZhciBjLCBmcmFtZXMgPSBbXTtcbiAgICAgICAgZm9yIChjID0gMDsgYyA8IGUuaW5wdXRCdWZmZXIubnVtYmVyT2ZDaGFubmVsczsgYysrKSB7XG4gICAgICAgICAgICBmcmFtZXNbY10gPSBlLmlucHV0QnVmZmVyLmdldENoYW5uZWxEYXRhKGMpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMud29ya2VyLnBvc3RNZXNzYWdlKHtcbiAgICAgICAgICAgICdzdGF0ZSc6IDIsXG4gICAgICAgICAgICAnZnJhbWVzJzogZnJhbWVzXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXNwb25zZShtc2cpIHtcbiAgICAgICAgdGhpcy5wb3N0RmVhdHVyZXMobXNnLmRhdGEucmVzcG9uc2UpO1xuICAgIH1cbiAgICBwb3N0RmVhdHVyZXMocmVzdWx0c0pTT04pIHtcbiAgICAgICAgY29uc3Qgb2JqID0ge1xuICAgICAgICAgICAgJ291dHB1dEluZGV4JzogdGhpcy5wYXJlbnQuaW5kZXgsXG4gICAgICAgICAgICAnZnJhbWVTaXplJzogdGhpcy5mcmFtZVNpemUsXG4gICAgICAgICAgICAncmVzdWx0cyc6IHJlc3VsdHNKU09OXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMucGFyZW50LnBvc3RGZWF0dXJlcyhvYmopO1xuICAgIH1cbiAgICByZWpvaW5FeHRyYWN0b3IoKSB7XG4gICAgICAgIHRoaXMucGFyZW50Lm91dHB1dC5jb25uZWN0KHRoaXMuZXh0cmFjdG9yKTtcbiAgICB9XG4gICAgO1xuICAgIHNldEZlYXR1cmVzKGZlYXR1cmVMaXN0KSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdmFyIGNvbmZpZ01lc3NhZ2UgPSB7XG4gICAgICAgICAgICAnc3RhdGUnOiAxLFxuICAgICAgICAgICAgJ3NhbXBsZVJhdGUnOiB0aGlzLnBhcmVudC5vdXRwdXQuY29udGV4dC5zYW1wbGVSYXRlLFxuICAgICAgICAgICAgJ2ZlYXR1cmVMaXN0JzogZmVhdHVyZUxpc3QsXG4gICAgICAgICAgICAnbnVtQ2hhbm5lbHMnOiB0aGlzLnBhcmVudC5vdXRwdXQubnVtYmVyT2ZPdXRwdXRzLFxuICAgICAgICAgICAgJ2ZyYW1lU2l6ZSc6IHRoaXMuZnJhbWVTaXplXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuZmVhdHVyZXMgPSBmZWF0dXJlTGlzdDtcbiAgICAgICAgaWYgKGZlYXR1cmVMaXN0ICYmIGZlYXR1cmVMaXN0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMud29ya2VyLnBvc3RNZXNzYWdlKHsgJ3N0YXRlJzogMCB9KTtcbiAgICAgICAgICAgIHRoaXMud29ya2VyLnBvc3RNZXNzYWdlKGNvbmZpZ01lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5leHRyYWN0b3Iub25hdWRpb3Byb2Nlc3MgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0IGV4dHJhY3RvcigpIHsgcmV0dXJuIHRoaXMuYW5hbHlzZXI7IH1cbn1cbiIsImltcG9ydCB7IHVuaXF1ZU1lcmdlQXJyYXkgfSBmcm9tIFwiLi4vLi4vdXRpbGl0eS91bmlxdWVNZXJnZUFycmF5XCI7XG5jbGFzcyBGcmFtZVNpemVUb0ZlYXR1cmVzIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5yZWNlaXZlck1hcCA9IG5ldyBNYXAoKTtcbiAgICB9XG4gICAgcmVxdWVzdEZlYXR1cmVzKGZyYW1lU2l6ZSwgcmVjZWl2ZXIsIGZlYXR1cmVzKSB7XG4gICAgICAgIGlmICh0aGlzLnJlY2VpdmVyTWFwLmhhcyhmcmFtZVNpemUpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhpcy5yZWNlaXZlck1hcC5zZXQoZnJhbWVTaXplLCBuZXcgTWFwKCkpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJlY2VpdmVyTWFwRmVhdHVyZXMgPSB0aGlzLnJlY2VpdmVyTWFwLmdldChmcmFtZVNpemUpO1xuICAgICAgICBpZiAocmVjZWl2ZXJNYXBGZWF0dXJlcy5oYXMocmVjZWl2ZXIpKSB7XG4gICAgICAgICAgICByZWNlaXZlck1hcEZlYXR1cmVzLnNldChyZWNlaXZlciwgdW5pcXVlTWVyZ2VBcnJheShyZWNlaXZlck1hcEZlYXR1cmVzLmdldChyZWNlaXZlciksIGZlYXR1cmVzKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZWNlaXZlck1hcEZlYXR1cmVzLnNldChyZWNlaXZlciwgZmVhdHVyZXMpO1xuICAgICAgICB9XG4gICAgICAgIC8vIE5vdyBnZXQgYWxsIHRoZSBmZWF0dXJlcyB3ZSBuZWVkIHRvIGV4cG9ydFxuICAgICAgICBsZXQgYWxsRmVhdHVyZXMgPSBbXTtcbiAgICAgICAgZm9yIChjb25zdCBbcmVjZWl2ZXIsIHJlY2VpdmVyRmVhdHVyZXNdIG9mIHJlY2VpdmVyTWFwRmVhdHVyZXMpIHtcbiAgICAgICAgICAgIGFsbEZlYXR1cmVzID0gdW5pcXVlTWVyZ2VBcnJheShyZWNlaXZlckZlYXR1cmVzLCBhbGxGZWF0dXJlcyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFsbEZlYXR1cmVzO1xuICAgIH1cbiAgICByZXZva2VBbGxGZWF0dXJlcyhmcmFtZVNpemUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmV2b2tlRmVhdHVyZXMoZnJhbWVTaXplLCB1bmRlZmluZWQsIHVuZGVmaW5lZCk7XG4gICAgfVxuICAgIHJldm9rZUFsbFJlY2VpdmVyRmVhdHVyZXMoZnJhbWVTaXplLCByZWNlaXZlcikge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXZva2VGZWF0dXJlcyhmcmFtZVNpemUsIHJlY2VpdmVyLCB1bmRlZmluZWQpO1xuICAgIH1cbiAgICByZXZva2VGZWF0dXJlcyhmcmFtZVNpemUsIHJlY2VpdmVyLCBmZWF0dXJlc1RvUmVtb3ZlKSB7XG4gICAgICAgIGlmICh0aGlzLnJlY2VpdmVyTWFwLmhhcyhmcmFtZVNpemUpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJlY2VpdmVyTWFwRmVhdHVyZXMgPSB0aGlzLnJlY2VpdmVyTWFwLmdldChmcmFtZVNpemUpO1xuICAgICAgICBpZiAocmVjZWl2ZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgLy8gSWYgcmVjZWl2ZXIgaXMgdW5kZWZpbmVkLCB0aGVuIHdlIGFyZSBraWxsaW5nIHRoZSB3aG9sZSBmcmFtZVNpemUgbWFwXG4gICAgICAgICAgICBmb3IgKGNvbnN0IFtyZWNlaXZlckZyb21NYXAsIHJlY2VpdmVyRmVhdHVyZXNdIG9mIHJlY2VpdmVyTWFwRmVhdHVyZXMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJldm9rZUZlYXR1cmVzKGZyYW1lU2l6ZSwgcmVjZWl2ZXJGcm9tTWFwLCByZWNlaXZlckZlYXR1cmVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldEZlYXR1cmVzKGZyYW1lU2l6ZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlY2VpdmVyTWFwRmVhdHVyZXMuaGFzKHJlY2VpdmVyKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBmZWF0dXJlTGlzdCA9IHJlY2VpdmVyTWFwRmVhdHVyZXMuZ2V0KHJlY2VpdmVyKTtcbiAgICAgICAgaWYgKGZlYXR1cmVzVG9SZW1vdmUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgLy8gSWYgZmVhdHVyZXMgaXMgdW5kZWZpbmVkLCByZW1vdmUgYWxsIGZlYXR1cmVzXG4gICAgICAgICAgICAvLyBCdXQsIGFuIGVtcHR5IGxpc3QgaXMgdmFsaWRcbiAgICAgICAgICAgIGZlYXR1cmVzVG9SZW1vdmUgPSBmZWF0dXJlTGlzdDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByZWR1Y2VkRmVhdHVyZUxpc3QgPSBmZWF0dXJlTGlzdC5maWx0ZXIoZmVhdHVyZSA9PiBmZWF0dXJlc1RvUmVtb3ZlLmluY2x1ZGVzKGZlYXR1cmUpID09PSBmYWxzZSk7XG4gICAgICAgIGlmIChyZWR1Y2VkRmVhdHVyZUxpc3QubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAvLyBIYXZlIG5vIGZlYXR1cmVzIVxuICAgICAgICAgICAgcmVjZWl2ZXJNYXBGZWF0dXJlcy5kZWxldGUocmVjZWl2ZXIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmVjZWl2ZXJNYXBGZWF0dXJlcy5zZXQocmVjZWl2ZXIsIHJlZHVjZWRGZWF0dXJlTGlzdCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmVtYWluaW5nRmVhdHVyZXMgPSB0aGlzLmdldEZlYXR1cmVzKGZyYW1lU2l6ZSk7XG4gICAgICAgIGlmIChyZW1haW5pbmdGZWF0dXJlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIC8vIFRoZSBmcmFtZVNpemUgaGFzIG5vIGZlYXR1cmVzIGxlZnRcbiAgICAgICAgICAgIHRoaXMucmVjZWl2ZXJNYXAuZGVsZXRlKGZyYW1lU2l6ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlbWFpbmluZ0ZlYXR1cmVzO1xuICAgIH1cbiAgICBnZXRGZWF0dXJlcyhmcmFtZVNpemUpIHtcbiAgICAgICAgY29uc3QgcmVjZWl2ZXJNYXBGZWF0dXJlcyA9IHRoaXMucmVjZWl2ZXJNYXAuZ2V0KGZyYW1lU2l6ZSk7XG4gICAgICAgIGlmIChyZWNlaXZlck1hcEZlYXR1cmVzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgYWxsRmVhdHVyZXMgPSBbXTtcbiAgICAgICAgZm9yIChjb25zdCBbcmVjZWl2ZXIsIHJlY2VpdmVyRmVhdHVyZXNdIG9mIHJlY2VpdmVyTWFwRmVhdHVyZXMpIHtcbiAgICAgICAgICAgIGFsbEZlYXR1cmVzID0gdW5pcXVlTWVyZ2VBcnJheShyZWNlaXZlckZlYXR1cmVzLCBhbGxGZWF0dXJlcyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFsbEZlYXR1cmVzO1xuICAgIH1cbn1cbmNsYXNzIFNvdXJjZU1hcCB7XG4gICAgY29uc3RydWN0b3Ioc291cmNlKSB7XG4gICAgICAgIHRoaXMuc291cmNlID0gc291cmNlO1xuICAgICAgICB0aGlzLm91dHB1dE1hcCA9IG5ldyBNYXAoKTtcbiAgICB9XG4gICAgZ2V0T3V0cHV0TWFwKG91dHB1dEluZGV4KSB7XG4gICAgICAgIHJldHVybiB0aGlzLm91dHB1dE1hcC5nZXQob3V0cHV0SW5kZXgpO1xuICAgIH1cbiAgICBrZXlzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5vdXRwdXRNYXAua2V5cygpO1xuICAgIH1cbiAgICB2YWx1ZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm91dHB1dE1hcC52YWx1ZXMoKTtcbiAgICB9XG4gICAgZW50cmllcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3V0cHV0TWFwLmVudHJpZXMoKTtcbiAgICB9XG4gICAgZ2V0RmVhdHVyZXMob3V0cHV0SW5kZXgsIGZyYW1lU2l6ZSkge1xuICAgICAgICBjb25zdCBvdXRwdXQgPSB0aGlzLmdldE91dHB1dE1hcChvdXRwdXRJbmRleCk7XG4gICAgICAgIGlmIChvdXRwdXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb3V0cHV0LmdldEZlYXR1cmVzKGZyYW1lU2l6ZSk7XG4gICAgfVxuICAgIGdldE9yQWRkT3V0cHV0TWFwKG91dHB1dEluZGV4KSB7XG4gICAgICAgIGNvbnN0IG91dHB1dCA9IHRoaXMuZ2V0T3V0cHV0TWFwKG91dHB1dEluZGV4KTtcbiAgICAgICAgaWYgKG91dHB1dCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLm91dHB1dE1hcC5zZXQob3V0cHV0SW5kZXgsIG5ldyBGcmFtZVNpemVUb0ZlYXR1cmVzKCkpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0T3V0cHV0TWFwKG91dHB1dEluZGV4KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb3V0cHV0O1xuICAgIH1cbiAgICByZXF1ZXN0RmVhdHVyZXMob3V0cHV0SW5kZXgsIGZyYW1lU2l6ZSwgZmVhdHVyZXMsIHJlY2VpdmVyKSB7XG4gICAgICAgIGNvbnN0IG91dHB1dCA9IHRoaXMuZ2V0T3JBZGRPdXRwdXRNYXAob3V0cHV0SW5kZXgpO1xuICAgICAgICBjb25zdCBmZWF0dXJlUmVxdWVzdCA9IHtcbiAgICAgICAgICAgIG91dHB1dEluZGV4OiBvdXRwdXRJbmRleCxcbiAgICAgICAgICAgIGZyYW1lU2l6ZTogZnJhbWVTaXplLFxuICAgICAgICAgICAgZmVhdHVyZXM6IFtdXG4gICAgICAgIH07XG4gICAgICAgIGZlYXR1cmVSZXF1ZXN0LmZlYXR1cmVzID0gb3V0cHV0LnJlcXVlc3RGZWF0dXJlcyhmcmFtZVNpemUsIHJlY2VpdmVyLCBmZWF0dXJlcyk7XG4gICAgICAgIHRoaXMuc291cmNlLnVwZGF0ZUZlYXR1cmVzKFtmZWF0dXJlUmVxdWVzdF0pO1xuICAgIH1cbiAgICByZXZva2VGZWF0dXJlcyhvdXRwdXRJbmRleCwgZnJhbWVTaXplLCByZWNlaXZlciwgZmVhdHVyZXNUb1JlbW92ZSkge1xuICAgICAgICBpZiAob3V0cHV0SW5kZXggPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBfb3V0cHV0SW5kZXggb2YgdGhpcy5vdXRwdXRNYXAua2V5cygpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXZva2VGZWF0dXJlcyhfb3V0cHV0SW5kZXgsIGZyYW1lU2l6ZSwgcmVjZWl2ZXIsIGZlYXR1cmVzVG9SZW1vdmUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG91dHB1dCA9IHRoaXMuZ2V0T3V0cHV0TWFwKG91dHB1dEluZGV4KTtcbiAgICAgICAgaWYgKG91dHB1dCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZyYW1lU2l6ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IF9mcmFtZVNpemUgb2Ygb3V0cHV0LnJlY2VpdmVyTWFwLmtleXMoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMucmV2b2tlRmVhdHVyZXMob3V0cHV0SW5kZXgsIF9mcmFtZVNpemUsIHJlY2VpdmVyLCBmZWF0dXJlc1RvUmVtb3ZlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBmZWF0dXJlUmVxdWVzdCA9IHtcbiAgICAgICAgICAgIG91dHB1dEluZGV4OiBvdXRwdXRJbmRleCxcbiAgICAgICAgICAgIGZyYW1lU2l6ZTogZnJhbWVTaXplLFxuICAgICAgICAgICAgZmVhdHVyZXM6IFtdXG4gICAgICAgIH07XG4gICAgICAgIGZlYXR1cmVSZXF1ZXN0LmZlYXR1cmVzID0gb3V0cHV0LnJldm9rZUZlYXR1cmVzKGZyYW1lU2l6ZSwgcmVjZWl2ZXIsIGZlYXR1cmVzVG9SZW1vdmUpO1xuICAgICAgICBpZiAoZmVhdHVyZVJlcXVlc3QuZmVhdHVyZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLm91dHB1dE1hcC5kZWxldGUob3V0cHV0SW5kZXgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc291cmNlLnVwZGF0ZUZlYXR1cmVzKFtmZWF0dXJlUmVxdWVzdF0pO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBGZWF0dXJlTWFwIHtcbiAgICBjb25zdHJ1Y3RvcihmYWN0b3J5KSB7XG4gICAgICAgIHRoaXMuZmFjdG9yeSA9IGZhY3Rvcnk7XG4gICAgICAgIHRoaXMuTWFwcGluZ3MgPSBuZXcgTWFwKCk7XG4gICAgfVxuICAgIGZpbmRPckNyZWF0ZVNvdXJjZVJlcXVlc3RNYXAocGx1Z2luU2VuZGVyKSB7XG4gICAgICAgIGNvbnN0IHJlcXVlc3RzID0gdGhpcy5NYXBwaW5ncy5nZXQocGx1Z2luU2VuZGVyKTtcbiAgICAgICAgaWYgKHJlcXVlc3RzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3RNYXAgPSBuZXcgU291cmNlTWFwKHBsdWdpblNlbmRlcik7XG4gICAgICAgICAgICB0aGlzLk1hcHBpbmdzLnNldChwbHVnaW5TZW5kZXIsIHJlcXVlc3RNYXApO1xuICAgICAgICAgICAgcmV0dXJuIHJlcXVlc3RNYXA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlcXVlc3RzO1xuICAgIH1cbiAgICByZXF1ZXN0RmVhdHVyZXMocmVxdWVzdG9yLCBwbHVnaW5TZW5kZXIsIGZlYXR1cmVPYmplY3QpIHtcbiAgICAgICAgLy8gR3JhYiBhbnkgZXhpc3RpbmcgbWFwIG9yIGJ1aWxkIGEgbmV3IG9uZVxuICAgICAgICAvL3BsdWdpblNlbmRlci51cGRhdGVGZWF0dXJlcyhbZmVhdHVyZU9iamVjdF0pO1xuICAgICAgICBjb25zdCBzb3VyY2VNYXAgPSB0aGlzLmZpbmRPckNyZWF0ZVNvdXJjZVJlcXVlc3RNYXAocGx1Z2luU2VuZGVyKTtcbiAgICAgICAgc291cmNlTWFwLnJlcXVlc3RGZWF0dXJlcyhmZWF0dXJlT2JqZWN0Lm91dHB1dEluZGV4LCBmZWF0dXJlT2JqZWN0LmZyYW1lU2l6ZSwgZmVhdHVyZU9iamVjdC5mZWF0dXJlcywgcmVxdWVzdG9yKTtcbiAgICB9XG4gICAgO1xuICAgIGRlbGV0ZUZlYXR1cmVzRnJvbVNvdXJjZShzb3VyY2UpIHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIGltZWRpYXRlbHkga2lsbCB0aGUgc291cmNlXG4gICAgICAgIC8vIFVzZWQgd2hlbiBkZWxldGluZyB0aGUgcGx1Z2luIVxuICAgICAgICBjb25zdCBzb3VyY2VNYXAgPSB0aGlzLk1hcHBpbmdzLmdldChzb3VyY2UpO1xuICAgICAgICBpZiAoc291cmNlTWFwID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBzb3VyY2VNYXAucmV2b2tlRmVhdHVyZXMoKTtcbiAgICAgICAgdGhpcy5NYXBwaW5ncy5kZWxldGUoc291cmNlKTtcbiAgICB9XG4gICAgZGVsZXRlRmVhdHVyZXMocmVxdWVzdG9yLCBwbHVnaW5TZW5kZXIsIGZlYXR1cmVPYmplY3QpIHtcbiAgICAgICAgaWYgKHBsdWdpblNlbmRlciA9PT0gdW5kZWZpbmVkICYmIGZlYXR1cmVPYmplY3QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgLy8gQm9yayBldmVyeXRoaW5nIHRvIHRoaXMgcGx1Z2luIVxuICAgICAgICAgICAgZm9yIChjb25zdCBzb3VyY2VNYXAgb2YgdGhpcy5NYXBwaW5ncy52YWx1ZXMoKSkge1xuICAgICAgICAgICAgICAgIHNvdXJjZU1hcC5yZXZva2VGZWF0dXJlcyh1bmRlZmluZWQsIHVuZGVmaW5lZCwgcmVxdWVzdG9yLCB1bmRlZmluZWQpOyAvLyBXaWxsIGJvcmsgYW55IGxpc3RzIHdpdGggdGhhdCByZXF1ZXN0b3JcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHNvdXJjZU1hcCA9IHRoaXMuTWFwcGluZ3MuZ2V0KHBsdWdpblNlbmRlcik7XG4gICAgICAgICAgICBpZiAoc291cmNlTWFwID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBEZXBlbmRpbmcgb24gdGhlIGxldmVsIG9mIGluZm8gaW4gZmVhdHVyZU9iamVjdC4uLlxuICAgICAgICAgICAgc291cmNlTWFwLnJldm9rZUZlYXR1cmVzKGZlYXR1cmVPYmplY3QgPT09IG51bGwgfHwgZmVhdHVyZU9iamVjdCA9PT0gdm9pZCAwID8gdm9pZCAwIDogZmVhdHVyZU9iamVjdC5vdXRwdXRJbmRleCwgZmVhdHVyZU9iamVjdCA9PT0gbnVsbCB8fCBmZWF0dXJlT2JqZWN0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBmZWF0dXJlT2JqZWN0LmZyYW1lU2l6ZSwgcmVxdWVzdG9yLCBmZWF0dXJlT2JqZWN0ID09PSBudWxsIHx8IGZlYXR1cmVPYmplY3QgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGZlYXR1cmVPYmplY3QuZmVhdHVyZXMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIDtcbiAgICBnZXRGZWF0dXJlTGlzdChyZXF1ZXN0b3IsIHBsdWdpblNlbmRlcikgeyB9XG4gICAgO1xuICAgIHBvc3RGZWF0dXJlcyhmZWF0dXJlT2JqZWN0KSB7XG4gICAgICAgIC8vIFJlY2VpdmUgZnJvbSB0aGUgU2VuZGVyIG9iamVjdHNcbiAgICAgICAgLy8gVHJpZ2dlciBkaXN0cmlidXRlZCBzZWFyY2ggZm9yIHJlc3VsdHMgdHJhbnNtaXNzaW9uXG4gICAgICAgIC8vIEZpcnN0IGdldCB0aGUgaW5zdGFuY2UgbWFwcGluZyBmb3Igb3V0cHV0L2ZyYW1lXG4gICAgICAgIGNvbnN0IHNvdXJjZSA9IHRoaXMuTWFwcGluZ3MuZ2V0KGZlYXR1cmVPYmplY3Quc291cmNlKTtcbiAgICAgICAgaWYgKCFzb3VyY2UpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBvdXRwdXRNYXAgPSBzb3VyY2UuZ2V0T3V0cHV0TWFwKGZlYXR1cmVPYmplY3Qub3V0cHV0SW5kZXgpO1xuICAgICAgICBpZiAob3V0cHV0TWFwID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGNvbnN0IFtyZWNlaXZlciwgZmVhdHVyZXNdIG9mIG91dHB1dE1hcC5yZWNlaXZlck1hcC5nZXQoZmVhdHVyZU9iamVjdC5mcmFtZVNpemUpKSB7XG4gICAgICAgICAgICAvLyBSaWdodCBub3cganVzdCBzZW5kIGFsbCBmZWF0dXJlcyBhcm91bmRcbiAgICAgICAgICAgIHJlY2VpdmVyLnBvc3RGZWF0dXJlcyhmZWF0dXJlT2JqZWN0KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICA7XG59XG4iLCIvKiBqc2hpbnQgZXN2ZXJzaW9uOiA2ICovXG5pbXBvcnQgeyBTeW50aGVzaXNlckJhc2VQbHVnaW4gfSBmcm9tIFwiLi4vU3ludGhlc2lzZXJCYXNlUGx1Z2luL2luZGV4XCI7XG5leHBvcnQgY2xhc3MgTWlkaVN5bnRoZXNpc0luc3RhbmNlIHtcbiAgICBjb25zdHJ1Y3Rvcihub2RlKSB7XG4gICAgICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgICAgIHRoaXMub3V0cHV0ID0gdGhpcy5ub2RlLmNvbnRleHQuY3JlYXRlR2FpbigpO1xuICAgICAgICB0aGlzLm5vZGUuZ2V0T3V0cHV0cygpWzBdLmNvbm5lY3QodGhpcy5vdXRwdXQpO1xuICAgIH1cbiAgICBkZXN0cm95KCkge1xuICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xuICAgIH1cbiAgICA7XG4gICAgZ2V0IHByb3RvdHlwZU9iamVjdCgpIHsgcmV0dXJuIHRoaXMubm9kZS5wcm90b3R5cGVPYmplY3Q7IH1cbiAgICBnZXQgZXh0ZXJuYWxJbnRlcmZhY2UoKSB7IHJldHVybiB0aGlzLm5vZGUuZXh0ZXJuYWxJbnRlcmZhY2U7IH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBpc01pZGlTeW50aGVzaXNJbnN0YW5jZShvYmplY3QpIHtcbiAgICByZXR1cm4gb2JqZWN0Lm5vZGUgaW5zdGFuY2VvZiBTeW50aGVzaXNlckJhc2VQbHVnaW47XG59XG4iLCIvKiBqc2hpbnQgZXN2ZXJzaW9uOiA2ICovXG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB7IExpbmtlZFN0b3JlIH0gZnJvbSAnLi4vTGlua2VkU3RvcmUnO1xuZXhwb3J0IGNsYXNzIE1pZGlTeW50aGVzaXNlckhvc3Qge1xuICAgIGNvbnN0cnVjdG9yKGZhY3RvcnkpIHtcbiAgICAgICAgdGhpcy5mYWN0b3J5ID0gZmFjdG9yeTtcbiAgICAgICAgdGhpcy5ldiA9IG5ldyBFdmVudFRhcmdldCgpO1xuICAgICAgICB0aGlzLmNvbm5lY3Rpb25zID0gW107XG4gICAgICAgIHRoaXMuU2Vzc2lvbkRhdGEgPSB0aGlzLmZhY3RvcnkuU2Vzc2lvbkRhdGE7XG4gICAgICAgIHRoaXMuVXNlckRhdGEgPSB0aGlzLmZhY3RvcnkuVXNlckRhdGE7XG4gICAgICAgIHRoaXMuVHJhY2tEYXRhID0gbmV3IExpbmtlZFN0b3JlKFwiVHJhY2tcIik7XG4gICAgfVxuICAgIHVubG9hZFN5bnRoZXNpc2VyU2xvdCgpIHtcbiAgICAgICAgaWYgKHRoaXMubWlkaVN5bnRoU2xvdCkge1xuICAgICAgICAgICAgdGhpcy5taWRpU3ludGhTbG90Lm5vZGUuY2FuY2VsQWxsRXZlbnRzKHRoaXMuZmFjdG9yeS5jb250ZXh0LmN1cnJlbnRUaW1lKTtcbiAgICAgICAgICAgIHRoaXMubWlkaVN5bnRoU2xvdC5ub2RlLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgIHRoaXMubWlkaVN5bnRoU2xvdCA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBidWlsZE5ld1N5bnRoZXNpc2VyT2JqZWN0KHByb3RvdHlwZU9iamVjdCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgdGhpcy51bmxvYWRTeW50aGVzaXNlclNsb3QoKTtcbiAgICAgICAgICAgIHRoaXMuZmFjdG9yeS5kZWxldGVQbHVnaW4odGhpcy5taWRpU3ludGhTbG90KTtcbiAgICAgICAgICAgIGlmIChwcm90b3R5cGVPYmplY3QuaGFzTWlkaUlucHV0ID09IGZhbHNlIHx8IHByb3RvdHlwZU9iamVjdC5oYXNNaWRpT3V0cHV0ID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJQcm90b3R5cGUgaXMgbm90IGEgTWlkaVN5bnRoZXNpcyB0eXBlLiBoYXNNaWRpSW5wdXQgbXVzdCBiZSB0cnVlIGFuZCBoYXNNaWRpT3V0cHV0IG11c3QgYmUgZmFsc2VcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBub2RlID0geWllbGQgcHJvdG90eXBlT2JqZWN0LmNyZWF0ZVBsdWdpbkluc3RhbmNlKHRoaXMpO1xuICAgICAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBhZGRFdmVudExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyLCBvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmV2LmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXIsIG9wdGlvbnMpO1xuICAgIH1cbiAgICByZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyLCBvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmV2LnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXIsIG9wdGlvbnMpO1xuICAgIH1cbiAgICBjb25uZWN0KGRlc3RpbmF0aW9uTm9kZSwgb3V0cHV0LCBpbnB1dCkge1xuICAgICAgICBpZiAoZGVzdGluYXRpb25Ob2RlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRocm93IChcIk11c3QgZGVmaW5lIGFuIEF1ZGlvTm9kZSBvYmplY3RcIik7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZXhpc3RzID0gdGhpcy5jb25uZWN0aW9ucy5maW5kKChjb25uKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gY29ubi5kZXN0aW5hdGlvbk5vZGUgPT0gZGVzdGluYXRpb25Ob2RlICYmIGNvbm4ub3V0cHV0ID09IG91dHB1dCAmJiBjb25uLmlucHV0ID09IGlucHV0O1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGV4aXN0cykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jb25uZWN0aW9ucy5wdXNoKHtcbiAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbk5vZGU6IGRlc3RpbmF0aW9uTm9kZSxcbiAgICAgICAgICAgICAgICBvdXRwdXQ6IG91dHB1dCxcbiAgICAgICAgICAgICAgICBpbnB1dDogaW5wdXRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm1pZGlTeW50aFNsb3QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFwiTUlESSBTeW50aGVzaXNlciBpcyBub3QgbG9hZGVkLCBjb25uZWN0aW9ucyB3aWxsIGJlIHZhbGlkYXRlZCBvbiBsb2FkXCIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5taWRpU3ludGhTbG90Lm5vZGUuY29ubmVjdChkZXN0aW5hdGlvbk5vZGUsIG91dHB1dCwgaW5wdXQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGRpc2Nvbm5lY3QoZGVzdGluYXRpb25Ob2RlLCBvdXRwdXQsIGlucHV0KSB7XG4gICAgICAgIGlmIChkZXN0aW5hdGlvbk5vZGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaWYgKHRoaXMubWlkaVN5bnRoU2xvdCkge1xuICAgICAgICAgICAgICAgIHRoaXMubWlkaVN5bnRoU2xvdC5ub2RlLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY29ubmVjdGlvbnMgPSBbXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgZGVzdGluYXRpb25Ob2RlID09IFwibnVtYmVyXCIgJiYgdHlwZW9mIG91dHB1dCA9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICBvdXRwdXQgPSBkZXN0aW5hdGlvbk5vZGU7XG4gICAgICAgICAgICBkZXN0aW5hdGlvbk5vZGUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB0aGlzLmNvbm5lY3Rpb25zID0gdGhpcy5jb25uZWN0aW9ucy5maWx0ZXIoZnVuY3Rpb24gKGNvbm4pIHtcbiAgICAgICAgICAgICAgICBpZiAoY29ubi5vdXRwdXQgPT0gb3V0cHV0KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm1pZGlTeW50aFNsb3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWlkaVN5bnRoU2xvdC5ub2RlLmRpc2Nvbm5lY3QoY29ubi5kZXN0aW5hdGlvbk5vZGUsIGNvbm4ub3V0cHV0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgZGVzdGluYXRpb25Ob2RlID09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG91dHB1dCA9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICB0aGlzLmNvbm5lY3Rpb25zID0gdGhpcy5jb25uZWN0aW9ucy5maWx0ZXIoZnVuY3Rpb24gKGNvbm4pIHtcbiAgICAgICAgICAgICAgICBpZiAoY29ubi5kZXN0aW5hdGlvbk5vZGUgPT0gZGVzdGluYXRpb25Ob2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm1pZGlTeW50aFNsb3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWlkaVN5bnRoU2xvdC5ub2RlLmRpc2Nvbm5lY3QoY29ubi5kZXN0aW5hdGlvbk5vZGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBkZXN0aW5hdGlvbk5vZGUgPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb3V0cHV0ID09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgIHRoaXMuY29ubmVjdGlvbnMgPSB0aGlzLmNvbm5lY3Rpb25zLmZpbHRlcihmdW5jdGlvbiAoY29ubikge1xuICAgICAgICAgICAgICAgIGlmIChjb25uLmRlc3RpbmF0aW9uTm9kZSA9PSBkZXN0aW5hdGlvbk5vZGUgJiYgY29ubi5vdXRwdXQgPT0gb3V0cHV0KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm1pZGlTeW50aFNsb3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWlkaVN5bnRoU2xvdC5ub2RlLmRpc2Nvbm5lY3QoY29ubi5kZXN0aW5hdGlvbk5vZGUsIGNvbm4ub3V0cHV0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgZGVzdGluYXRpb25Ob2RlID09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG91dHB1dCA9PSBcIm51bWJlclwiICYmIHR5cGVvZiBpbnB1dCA9PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICB0aGlzLmNvbm5lY3Rpb25zID0gdGhpcy5jb25uZWN0aW9ucy5maWx0ZXIoZnVuY3Rpb24gKGNvbm4pIHtcbiAgICAgICAgICAgICAgICBpZiAoY29ubi5kZXN0aW5hdGlvbk5vZGUgPT0gZGVzdGluYXRpb25Ob2RlICYmIGNvbm4ub3V0cHV0ID09IG91dHB1dCAmJiBjb25uLmlucHV0ID09IGlucHV0KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm1pZGlTeW50aFNsb3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWlkaVN5bnRoU2xvdC5ub2RlLmRpc2Nvbm5lY3QoY29ubi5kZXN0aW5hdGlvbk5vZGUsIGNvbm4ub3V0cHV0LCBjb25uLmlucHV0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzY2hlZHVsZUV2ZW50KG1zZywgdCkge1xuICAgICAgICBpZiAodGhpcy5taWRpU3ludGhTbG90KSB7XG4gICAgICAgICAgICB0aGlzLm1pZGlTeW50aFNsb3Qubm9kZS5zY2hlZHVsZUV2ZW50KG1zZywgdCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyAoXCJNSURJIFN5bnRoZXNpc2VyIG5vdCBsb2FkZWRcIik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2FuY2VsQWxsRXZlbnRzKHQpIHtcbiAgICAgICAgaWYgKHRoaXMubWlkaVN5bnRoU2xvdCkge1xuICAgICAgICAgICAgdGhpcy5taWRpU3ludGhTbG90Lm5vZGUuY2FuY2VsQWxsRXZlbnRzKHQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgKFwiTUlESSBTeW50aGVzaXNlciBub3QgbG9hZGVkXCIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXJ0KCkge1xuICAgICAgICBpZiAodGhpcy5taWRpU3ludGhTbG90KSB7XG4gICAgICAgICAgICB0aGlzLm1pZGlTeW50aFNsb3Qubm9kZS5zdGFydCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgKFwiTUlESSBTeW50aGVzaXNlciBub3QgbG9hZGVkXCIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN0b3AoKSB7XG4gICAgICAgIGlmICh0aGlzLm1pZGlTeW50aFNsb3QpIHtcbiAgICAgICAgICAgIHRoaXMubWlkaVN5bnRoU2xvdC5ub2RlLnN0b3AoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IChcIk1JREkgU3ludGhlc2lzZXIgbm90IGxvYWRlZFwiKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBsb2FkTWlkaVN5bnRoZXNpc2VyTW9kdWxlKHByb3RvdHlwZSkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgaWYgKHByb3RvdHlwZS5oYXNNaWRpSW5wdXQgPT0gZmFsc2UgfHwgcHJvdG90eXBlLmhhc01pZGlPdXRwdXQgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlByb3RvdHlwZSBpcyBub3QgYSBNaWRpU3ludGhlc2lzIHR5cGUuIGhhc01pZGlJbnB1dCBtdXN0IGJlIHRydWUgYW5kIGhhc01pZGlPdXRwdXQgbXVzdCBiZSBmYWxzZVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBub2RlO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBub2RlID0geWllbGQgdGhpcy5idWlsZE5ld1N5bnRoZXNpc2VyT2JqZWN0KHByb3RvdHlwZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlBsdWdpbiBkaWQgbm90IGdldCBjcmVhdGVkISBBYm9ydGluZ1wiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDtcbiAgICAgICAgICAgIG5vZGUubm9kZS5vbmxvYWRlZC5jYWxsKG5vZGUubm9kZSk7XG4gICAgICAgICAgICB0aGlzLm1pZGlTeW50aFNsb3QgPSBub2RlO1xuICAgICAgICAgICAgdGhpcy5jb25uZWN0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChjb25uKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5taWRpU3ludGhTbG90Lm5vZGUuY29ubmVjdChjb25uLmRlc3RpbmF0aW9uTm9kZSwgY29ubi5vdXRwdXQsIGNvbm4uaW5wdXQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmV2LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwibG9hZGVkXCIpKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1pZGlTeW50aFNsb3Q7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBkZXN0cm95KCkge1xuICAgICAgICB0aGlzLnVubG9hZFN5bnRoZXNpc2VyU2xvdCgpO1xuICAgICAgICB0aGlzLmNvbm5lY3Rpb25zID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBnZXQgbWlkaVN5bnRoZXNpc2VyKCkgeyByZXR1cm4gdGhpcy5taWRpU3ludGhTbG90OyB9XG59XG4iLCIvKmVzbGludC1lbnYgYnJvd3NlciAqL1xuLyoganNoaW50IGVzdmVyc2lvbjo2ICovXG5jbGFzcyBQbHVnaW5Bc3NldCB7XG4gICAgY29uc3RydWN0b3IocGx1Z2luQXNzZXRNYW5hZ2VyLCBpZCwgbmFtZSwgdXJsLCBpbWFnZV91cmwsIHBhY2ssIF9hc3NldE9iamVjdCkge1xuICAgICAgICB0aGlzLnBsdWdpbkFzc2V0TWFuYWdlciA9IHBsdWdpbkFzc2V0TWFuYWdlcjtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmltYWdlX3VybCA9IGltYWdlX3VybDtcbiAgICAgICAgdGhpcy5wYWNrID0gcGFjaztcbiAgICAgICAgdGhpcy5fYXNzZXRPYmplY3QgPSBfYXNzZXRPYmplY3Q7XG4gICAgICAgIHRoaXMudXNlZEJ5ID0gbmV3IFNldCgpO1xuICAgICAgICB0aGlzLmFzc2V0VVJMID0gbmV3IFVSTCh1cmwsIHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4pO1xuICAgIH1cbiAgICBhYm9ydFNjaGVkdWxlRm9yQ2xlYW51cCgpIHtcbiAgICAgICAgaWYgKHRoaXMuYXNzZXRDbGVhbnVwSWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgd2luZG93LmNsZWFyVGltZW91dCh0aGlzLmFzc2V0Q2xlYW51cElkKTtcbiAgICAgICAgICAgIHRoaXMuYXNzZXRDbGVhbnVwSWQgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc2NoZWR1bGVGb3JDbGVhbnVwKCkge1xuICAgICAgICBpZiAodGhpcy5hc3NldENsZWFudXBJZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hc3NldENsZWFudXBJZCA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX2Fzc2V0T2JqZWN0ID09PSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB0aGlzLmFzc2V0Q2xlYW51cElkID0gdW5kZWZpbmVkO1xuICAgICAgICB9LCAxMDAwMCk7XG4gICAgfVxuICAgIGZldGNoQXNzZXQoKSB7XG4gICAgICAgIHRoaXMuYWJvcnRTY2hlZHVsZUZvckNsZWFudXAoKTtcbiAgICAgICAgdGhpcy5mZXRjaFByb21pc2UgPSB0aGlzLnBsdWdpbkFzc2V0TWFuYWdlci5mZXRjaEFzc2V0RnVuY3Rpb24odGhpcylcbiAgICAgICAgICAgIC50aGVuKChhYikgPT4ge1xuICAgICAgICAgICAgdGhpcy5fYXNzZXRPYmplY3QgPSBhYjtcbiAgICAgICAgICAgIHRoaXMuZmV0Y2hQcm9taXNlID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2Fzc2V0T2JqZWN0O1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZmV0Y2goKSB7XG4gICAgICAgIGlmICh0aGlzLl9hc3NldE9iamVjdCBpbnN0YW5jZW9mIEF1ZGlvQnVmZmVyKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuX2Fzc2V0T2JqZWN0KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLmZldGNoUHJvbWlzZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLmZldGNoQXNzZXQoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5mZXRjaFByb21pc2U7XG4gICAgfVxuICAgIHRvSlNPTigpIHtcbiAgICAgICAgcmV0dXJuIHsgYXNzZXQ6IHRoaXMuYXNzZXRVUkwucGF0aG5hbWUgfTtcbiAgICB9XG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh0aGlzLnRvSlNPTigpKTtcbiAgICB9XG4gICAgcmVnaXN0ZXJUb1BsdWdpbihwbHVnaW4pIHtcbiAgICAgICAgdGhpcy5hYm9ydFNjaGVkdWxlRm9yQ2xlYW51cCgpO1xuICAgICAgICB0aGlzLnVzZWRCeS5hZGQocGx1Z2luKTtcbiAgICB9XG4gICAgZGVyZWdpc3RlckZyb21QbHVnaW4ocGx1Z2luKSB7XG4gICAgICAgIHRoaXMudXNlZEJ5LmRlbGV0ZShwbHVnaW4pO1xuICAgICAgICBpZiAodGhpcy51c2VkQnkuc2l6ZSA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZUZvckNsZWFudXAoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXQgdXJsKCkgeyByZXR1cm4gdGhpcy5hc3NldFVSTC5ocmVmOyB9XG4gICAgZ2V0IGFzc2V0T2JqZWN0KCkgeyByZXR1cm4gdGhpcy5hc3NldE9iamVjdDsgfVxuICAgIGdldCBmZXRjaGVkKCkge1xuICAgICAgICByZXR1cm4gKHRoaXMuX2Fzc2V0T2JqZWN0IGluc3RhbmNlb2YgQXVkaW9CdWZmZXIgfHwgdGhpcy5mZXRjaFByb21pc2UgIT09IHVuZGVmaW5lZCk7XG4gICAgfVxufVxuZXhwb3J0IHsgUGx1Z2luQXNzZXQgfTtcbiIsIi8qZXNsaW50LWVudiBicm93c2VyICovXG4vKiBqc2hpbnQgZXN2ZXJzaW9uOjYgKi9cbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IHsgUGx1Z2luQXNzZXRzTGlzdCB9IGZyb20gXCIuL1BsdWdpbkFzc2V0c0xpc3RcIjtcbmltcG9ydCB7IGZldGNoQXNzZXRBc0FycmF5QnVmZmVyIH0gZnJvbSBcIi4vZGVmYXVsdEFzc2V0RmV0Y2hcIjtcbmZ1bmN0aW9uIGZpbmRQYWNrQnlOYW1lKGFzc2V0UGFja0xpc3QsIG5hbWUpIHtcbiAgICByZXR1cm4gYXNzZXRQYWNrTGlzdC5maW5kKGZ1bmN0aW9uIChsKSB7XG4gICAgICAgIHJldHVybiBsLm5hbWUgPT0gbmFtZTtcbiAgICB9KTtcbn1cbmV4cG9ydCBjbGFzcyBQbHVnaW5Bc3NldE1hbmFnZXIge1xuICAgIGNvbnN0cnVjdG9yKGZhY3RvcnlDb250ZXh0KSB7XG4gICAgICAgIHRoaXMuZmFjdG9yeUNvbnRleHQgPSBmYWN0b3J5Q29udGV4dDtcbiAgICAgICAgdGhpcy5hc3NldEZldGNoRnVuY3Rpb24gPSBmZXRjaEFzc2V0QXNBcnJheUJ1ZmZlcjtcbiAgICAgICAgdGhpcy5hc3NldFBhY2tzID0gW107XG4gICAgfVxuICAgIGZpbmRQYWNrQnlOYW1lKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXNzZXRQYWNrcy5maW5kKGwgPT4gbC5uYW1lID09IG5hbWUpO1xuICAgIH1cbiAgICBhZGRQYWNrVG9MaXN0KGlkLCBuYW1lLCBpbWFnZV91cmwsIHJlc291cmNlVHlwZSkge1xuICAgICAgICBpZiAodHlwZW9mIG5hbWUgIT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiYWRkQXNzZXRVcmxUb0xpc3QgQXJndW1lbnQtMSBtdXN0IGJlIGEgdHlwZSBvZiBzdHJpbmdcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZmluZFBhY2tCeU5hbWUobmFtZSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgUGFjayB3aXRoIG5hbWUgJHtuYW1lfSBhbHJlYWR5IGluIHRoaXMgbGlzdGApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGFzc2V0UGFjayA9IG5ldyBQbHVnaW5Bc3NldHNMaXN0KHRoaXMsIGlkLCBuYW1lLCBpbWFnZV91cmwsIHJlc291cmNlVHlwZSk7XG4gICAgICAgIHRoaXMuYXNzZXRQYWNrcy5wdXNoKGFzc2V0UGFjayk7XG4gICAgICAgIHJldHVybiBhc3NldFBhY2s7XG4gICAgfVxuICAgIHJlbW92ZUFzc2V0UGFja0Zyb21MaXN0KGFzc2V0UGFjaykge1xuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuYXNzZXRQYWNrcy5pbmRleE9mKGFzc2V0UGFjayk7XG4gICAgICAgIGlmIChpbmRleCA9PSAtMSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYXNzZXRQYWNrcztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFzc2V0UGFja3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXNzZXRQYWNrcztcbiAgICB9XG4gICAgcmVtb3ZlQXNzZXRQYWNrRnJvbUxpc3RCeU5hbWUobmFtZSkge1xuICAgICAgICBpZiAodHlwZW9mIG5hbWUgIT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgdGhyb3cgXCJyZW1vdmVBc3NldFVybEZyb21MaXN0IEFyZ3VtZW50LTEgbXVzdCBiZSBhIHR5cGUgb2Ygc3RyaW5nXCI7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYXNzZXQgPSB0aGlzLmZpbmRQYWNrQnlOYW1lKG5hbWUpO1xuICAgICAgICByZXR1cm4gdGhpcy5yZW1vdmVBc3NldFBhY2tGcm9tTGlzdChhc3NldCk7XG4gICAgfVxuICAgIGltcG9ydEZyb21Bc3NldExpc3RzKG9sZENvbnRleHQpIHtcbiAgICAgICAgb2xkQ29udGV4dC5hc3NldFBhY2tzLmZvckVhY2goKG9yaWdpbmFsQXNzZXRQYWNrKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBuZXdDb250ZXh0UGFjayA9IHRoaXMuYWRkUGFja1RvTGlzdChvcmlnaW5hbEFzc2V0UGFjay5pZCwgb3JpZ2luYWxBc3NldFBhY2submFtZSwgb3JpZ2luYWxBc3NldFBhY2suaW1hZ2VfdXJsLCBvcmlnaW5hbEFzc2V0UGFjay5yZXNvdXJjZVR5cGUpO1xuICAgICAgICAgICAgb3JpZ2luYWxBc3NldFBhY2suYXNzZXRPYmplY3RzLmZvckVhY2goKG9yaWdpbmFsQXNzZXQpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgYXNzZXRPYmplY3Q7XG4gICAgICAgICAgICAgICAgaWYgKG9yaWdpbmFsQXNzZXQuYXNzZXRPYmplY3QgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBhc3NldE9iamVjdCA9IHRoaXMuZmFjdG9yeUNvbnRleHQuY29udGV4dC5jcmVhdGVCdWZmZXIob3JpZ2luYWxBc3NldC5hc3NldE9iamVjdC5udW1iZXJPZkNoYW5uZWxzLCBvcmlnaW5hbEFzc2V0LmFzc2V0T2JqZWN0Lmxlbmd0aCwgb3JpZ2luYWxBc3NldC5hc3NldE9iamVjdC5zYW1wbGVSYXRlKTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhc3NldE9iamVjdC5udW1iZXJPZkNoYW5uZWxzOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0T2JqZWN0LmNvcHlUb0NoYW5uZWwob3JpZ2luYWxBc3NldC5hc3NldE9iamVjdC5nZXRDaGFubmVsRGF0YShpKSwgaSwgMCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy9pZCwgbmFtZSwgdXJsLCBpbWFnZV91cmwsIGFzc2V0T2JqZWN0XG4gICAgICAgICAgICAgICAgbmV3Q29udGV4dFBhY2suYWRkQXNzZXRVcmxUb0xpc3Qob3JpZ2luYWxBc3NldC5pZCwgb3JpZ2luYWxBc3NldC5uYW1lLCBvcmlnaW5hbEFzc2V0LnVybCwgb3JpZ2luYWxBc3NldC5pbWFnZV91cmwsIGFzc2V0T2JqZWN0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgc2V0RGVmYXVsdEFzc2V0RmV0Y2hGdW5jdGlvbihmdW5jKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZnVuYyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICB0aGlzLmFzc2V0RmV0Y2hGdW5jdGlvbiA9IGZ1bmM7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZmV0Y2hBc3NldEZ1bmN0aW9uKGFzc2V0T2JqZWN0KSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBjb25zdCBhYiA9IHlpZWxkIHRoaXMuYXNzZXRGZXRjaEZ1bmN0aW9uKGFzc2V0T2JqZWN0KTtcbiAgICAgICAgICAgIHJldHVybiB5aWVsZCB0aGlzLmZhY3RvcnlDb250ZXh0LmNvbnRleHQuZGVjb2RlQXVkaW9EYXRhKGFiKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGdldEFsbEFzc2V0cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXNzZXRQYWNrcy5tYXAobCA9PiBsLmFzc2V0T2JqZWN0cykuZmxhdCgpO1xuICAgIH1cbiAgICBnZXRBbGxBc3NldHNCeVJlc291cmNlVHlwZShyZXNvdXJjZVR5cGUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiByZXNvdXJjZVR5cGUgPT0gXCJzdHJpbmdcIiAmJiByZXNvdXJjZVR5cGUubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYXNzZXRQYWNrcy5maWx0ZXIoKGxpc3QpID0+IGxpc3QucmVzb3VyY2VUeXBlID09IHJlc291cmNlVHlwZSkubWFwKGwgPT4gbC5hc3NldE9iamVjdHMpLmZsYXQoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldEFsbEFzc2V0cygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZpbmRBc3NldEJ5VXJsKHVybCkge1xuICAgICAgICBjb25zdCBmdWxsVXJsID0gbmV3IFVSTCh1cmwsIHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4pO1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRBbGxBc3NldHMoKS5maW5kKChhc3NldCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYXNzZXRGdWxsVXJsID0gbmV3IFVSTChhc3NldC51cmwsIHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4pO1xuICAgICAgICAgICAgcmV0dXJuIChmdWxsVXJsLmhvc3RuYW1lID09PSBhc3NldEZ1bGxVcmwuaG9zdG5hbWUgJiYgZnVsbFVybC5wYXRobmFtZSA9PT0gYXNzZXRGdWxsVXJsLnBhdGhuYW1lKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGZpbmRBc3NldEJ5SWQoaWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QWxsQXNzZXRzKCkuZmluZCgoYXNzZXQpID0+IGFzc2V0LmlkID09PSBpZCk7XG4gICAgfVxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuYXNzZXRGZXRjaEZ1bmN0aW9uID0gdW5kZWZpbmVkO1xuICAgIH1cbn1cbiIsIi8qZXNsaW50LWVudiBicm93c2VyICovXG4vKiBqc2hpbnQgZXN2ZXJzaW9uOjYgKi9cbmltcG9ydCB7IFBsdWdpbkFzc2V0IH0gZnJvbSBcIi4vUGx1Z2luQXNzZXRcIjtcbmNsYXNzIFBsdWdpbkFzc2V0c0xpc3Qge1xuICAgIGNvbnN0cnVjdG9yKHBsdWdpbkFzc2V0TWFuYWdlciwgaWQsIG5hbWUsIGltYWdlX3VybCwgcmVzb3VyY2VUeXBlKSB7XG4gICAgICAgIHRoaXMucGx1Z2luQXNzZXRNYW5hZ2VyID0gcGx1Z2luQXNzZXRNYW5hZ2VyO1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuaW1hZ2VfdXJsID0gaW1hZ2VfdXJsO1xuICAgICAgICB0aGlzLnJlc291cmNlVHlwZSA9IHJlc291cmNlVHlwZTtcbiAgICAgICAgdGhpcy5hc3NldE9iamVjdHMgPSBbXTtcbiAgICB9XG4gICAgZmluZEFzc2V0QnlVcmwodXJsKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFzc2V0T2JqZWN0cy5maW5kKChhc3NldCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGFzc2V0LnVybCA9PSB1cmw7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBhZGRBc3NldFVybFRvTGlzdChpZCwgbmFtZSwgdXJsLCBpbWFnZV91cmwsIGFzc2V0T2JqZWN0KSB7XG4gICAgICAgIGlmICh0eXBlb2YgdXJsICE9IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImFkZEFzc2V0VXJsVG9MaXN0IEFyZ3VtZW50LTIgbXVzdCBiZSBhIHR5cGUgb2Ygc3RyaW5nXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmZpbmRBc3NldEJ5VXJsKHVybCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVVJMICR7dXJsfSBhbHJlYWR5IGluIHRoaXMgbGlzdGApO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYXNzZXRPYmplY3RzLnB1c2gobmV3IFBsdWdpbkFzc2V0KHRoaXMucGx1Z2luQXNzZXRNYW5hZ2VyLCBpZCwgbmFtZSwgdXJsLCBpbWFnZV91cmwsIHRoaXMsIGFzc2V0T2JqZWN0KSk7XG4gICAgICAgIHJldHVybiB0aGlzLmFzc2V0T2JqZWN0cztcbiAgICB9XG4gICAgcmVtb3ZlQXNzZXRGcm9tTGlzdChhc3NldCkge1xuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuYXNzZXRPYmplY3RzLmZpbmRJbmRleCgobGlzdE9iamVjdHMpID0+IGFzc2V0LnVybCA9PSBsaXN0T2JqZWN0cy51cmwpO1xuICAgICAgICBpZiAoaW5kZXggPT0gLTEpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkFzc2V0IG5vdCBpbiB0aGlzIGxpc3RcIik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hc3NldE9iamVjdHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXNzZXRPYmplY3RzO1xuICAgIH1cbiAgICByZW1vdmVBc3NldFVybEZyb21MaXN0KHVybCkge1xuICAgICAgICBpZiAodHlwZW9mIHVybCAhPSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJyZW1vdmVBc3NldFVybEZyb21MaXN0IEFyZ3VtZW50LTEgbXVzdCBiZSBhIHR5cGUgb2Ygc3RyaW5nXCIpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGFzc2V0ID0gdGhpcy5maW5kQXNzZXRCeVVybCh1cmwpO1xuICAgICAgICByZXR1cm4gdGhpcy5yZW1vdmVBc3NldEZyb21MaXN0KGFzc2V0KTtcbiAgICB9XG4gICAgO1xufVxuZXhwb3J0IHsgUGx1Z2luQXNzZXRzTGlzdCB9O1xuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hBc3NldEFzQXJyYXlCdWZmZXIoYXNzZXRPYmplY3QpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBjb25zdCByID0geWllbGQgZmV0Y2goYXNzZXRPYmplY3QudXJsKTtcbiAgICAgICAgcmV0dXJuIHlpZWxkIHIuYXJyYXlCdWZmZXIoKTtcbiAgICB9KTtcbn1cbiIsIi8vIFRoaXMgZGVmaW5lcyBhIG1hc3RlciBvYmplY3QgZm9yIGhvbGRpbmcgYWxsIHRoZSBwbHVnaW5zIGFuZCBjb21tdW5pY2F0aW5nXG4vLyBUaGlzIG9iamVjdCB3aWxsIGFsc28gaGFuZGxlIGNyZWF0aW9uIGFuZCBkZXN0cnVjdGlvbiBvZiBwbHVnaW5zXG4vKmdsb2JhbHMgUHJvbWlzZSwgZG9jdW1lbnQsIGNvbnNvbGUsIExpbmtlZFN0b3JlLCBXb3JrZXIsIHdpbmRvdywgWE1MSHR0cFJlcXVlc3QgKi9cbi8qZXNsaW50LWVudiBicm93c2VyICovXG4vKiBqc2hpbnQgZXN2ZXJzaW9uOjYgKi9cbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IHsgTGlua2VkU3RvcmUgfSBmcm9tICcuLi9MaW5rZWRTdG9yZSc7XG5pbXBvcnQgeyBQbHVnaW5Bc3NldE1hbmFnZXIgfSBmcm9tICcuL1BsdWdpbkFzc2V0cy9QbHVnaW5Bc3NldE1hbmFnZXInO1xuaW1wb3J0IHsgUGx1Z2luUHJvdG90eXBlIH0gZnJvbSBcIi4vUGx1Z2luUHJvdG90eXBlXCI7XG5pbXBvcnQgeyBGZWF0dXJlTWFwIH0gZnJvbSBcIi4vRmVhdHVyZU1hcC9pbmRleFwiO1xuaW1wb3J0IHsgQXVkaW9QbHVnaW5DaGFpbk1hbmFnZXIgfSBmcm9tIFwiLi9BdWRpb1BsdWdpbkNoYWluTWFuYWdlci9pbmRleFwiO1xuaW1wb3J0IHsgTWlkaVN5bnRoZXNpc2VySG9zdCB9IGZyb20gXCIuL01pZGlTeW50aGVzaXNlckhvc3RcIjtcbmltcG9ydCB7IFBsdWdpblVzZXJJbnRlcmZhY2VNZXNzYWdlSHViIH0gZnJvbSBcIi4vUGx1Z2luVXNlckludGVyZmFjZU1lc3NhZ2VIdWJcIjtcbmltcG9ydCB7IGlzUGx1Z2luSW5zdGFuY2UgfSBmcm9tICcuL1BsdWdpbkluc3RhbmNlJztcbmltcG9ydCB7IGlzTWlkaVN5bnRoZXNpc0luc3RhbmNlIH0gZnJvbSAnLi9NaWRpU3ludGhlc2lzSW5zdGFuY2UnO1xuZXhwb3J0IGNsYXNzIFBsdWdpbkZhY3Rvcnkge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQsIHJvb3RVUkwpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICAgICAgdGhpcy5yb290VVJMID0gcm9vdFVSTDtcbiAgICAgICAgdGhpcy5wbHVnaW5fcHJvdG90eXBlcyA9IFtdO1xuICAgICAgICB0aGlzLmF1ZGlvUGx1Z2luQ2hhaW5NYW5hZ2VycyA9IFtdO1xuICAgICAgICB0aGlzLnN5bnRoZXNpc2VySG9zdHMgPSBbXTtcbiAgICAgICAgdGhpcy5wbHVnaW5zTGlzdCA9IFtdO1xuICAgICAgICB0aGlzLmF1ZGlvU3RhcnRlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLlBsdWdpbkdVSSA9IG5ldyBQbHVnaW5Vc2VySW50ZXJmYWNlTWVzc2FnZUh1Yih0aGlzKTtcbiAgICAgICAgdGhpcy5zdG9yZXMgPSBbXTtcbiAgICAgICAgdGhpcy5TZXNzaW9uRGF0YSA9IG5ldyBMaW5rZWRTdG9yZShcIlNlc3Npb25cIik7XG4gICAgICAgIHRoaXMuVXNlckRhdGEgPSBuZXcgTGlua2VkU3RvcmUoXCJVc2VyXCIpO1xuICAgICAgICB0aGlzLkZlYXR1cmVNYXAgPSBuZXcgRmVhdHVyZU1hcCh0aGlzKTtcbiAgICAgICAgdGhpcy5wbHVnaW5Bc3NldHMgPSBuZXcgUGx1Z2luQXNzZXRNYW5hZ2VyKHRoaXMpO1xuICAgICAgICB0aGlzLmRlc3Ryb3lBdWRpb1BsdWdpbkNoYWluTWFuYWdlciA9IGZ1bmN0aW9uIChTdWJGYWN0b3J5KSB7XG4gICAgICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmF1ZGlvUGx1Z2luQ2hhaW5NYW5hZ2Vycy5maW5kSW5kZXgoZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudCA9PT0gdGhpcykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfSwgU3ViRmFjdG9yeSk7XG4gICAgICAgICAgICBpZiAoaW5kZXggPj0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuYXVkaW9QbHVnaW5DaGFpbk1hbmFnZXJzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgU3ViRmFjdG9yeS5kZXN0cm95KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuICAgIGNvcHlGYWN0b3J5KGZhY3RvcnksIG5ld2NvbnRleHQpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGNvbnN0IEJGYWN0b3J5ID0gbmV3IFBsdWdpbkZhY3RvcnkobmV3Y29udGV4dCwgdGhpcy5yb290VVJMKTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgcHJvdG8gb2YgdGhpcy5wbHVnaW5fcHJvdG90eXBlcykge1xuICAgICAgICAgICAgICAgIHlpZWxkIEJGYWN0b3J5LmFkZFByb3RvdHlwZShwcm90by5wcm90byk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBCRmFjdG9yeS5wbHVnaW5Bc3NldHMuaW1wb3J0RnJvbUFzc2V0TGlzdHModGhpcy5wbHVnaW5Bc3NldHMpO1xuICAgICAgICAgICAgcmV0dXJuIEJGYWN0b3J5O1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcGx1Z2luQXVkaW9TdGFydChub2RlLCBwcm9ncmFtX3RpbWUsIGNvbnRleHRfdGltZSkge1xuICAgICAgICBub2RlLnN0YXJ0LmNhbGwobm9kZSwgcHJvZ3JhbV90aW1lLCBjb250ZXh0X3RpbWUpO1xuICAgICAgICBub2RlLnBhcmFtZXRlcnMuZ2V0UGFyYW1ldGVyTmFtZXMoKS5mb3JFYWNoKGZ1bmN0aW9uIChuKSB7XG4gICAgICAgICAgICB2YXIgcCA9IG5vZGUucGFyYW1ldGVycy5nZXRQYXJhbWV0ZXJCeU5hbWUobik7XG4gICAgICAgICAgICBpZiAocC5lbmFibGVkKSB7XG4gICAgICAgICAgICAgICAgcC5zdGFydChwcm9ncmFtX3RpbWUsIGNvbnRleHRfdGltZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBwbHVnaW5BdWRpb1N0b3Aobm9kZSkge1xuICAgICAgICBjb25zdCBjdCA9IHRoaXMuY29udGV4dC5jdXJyZW50VGltZTtcbiAgICAgICAgbm9kZS5zdG9wLmNhbGwobm9kZSwgY3QpO1xuICAgICAgICBub2RlLnBhcmFtZXRlcnMuZ2V0UGFyYW1ldGVyTmFtZXMoKS5mb3JFYWNoKGZ1bmN0aW9uIChuKSB7XG4gICAgICAgICAgICB2YXIgcCA9IG5vZGUucGFyYW1ldGVycy5nZXRQYXJhbWV0ZXJCeU5hbWUobik7XG4gICAgICAgICAgICBpZiAocC5lbmFibGVkKSB7XG4gICAgICAgICAgICAgICAgcC5zdG9wKGN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHRyaWdnZXJBdWRpb1N0YXJ0KHByb2dyYW1fdGltZSwgY29udGV4dF90aW1lKSB7XG4gICAgICAgIHRoaXMucGx1Z2luc0xpc3QuZm9yRWFjaChmdW5jdGlvbiAobikge1xuICAgICAgICAgICAgdGhpcy5wbHVnaW5BdWRpb1N0YXJ0KG4ubm9kZSwgcHJvZ3JhbV90aW1lLCBjb250ZXh0X3RpbWUpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgdHJpZ2dlckF1ZGlvU3RvcCgpIHtcbiAgICAgICAgdGhpcy5wbHVnaW5zTGlzdC5mb3JFYWNoKGZ1bmN0aW9uIChuKSB7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbkF1ZGlvU3RvcChuLm5vZGUpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZGVzdHJveUZhY3RvcnkoKSB7XG4gICAgICAgIHRoaXMudHJpZ2dlckF1ZGlvU3RvcCgpO1xuICAgICAgICBmb3IgKGNvbnN0IHN1YkZhY3Rvcnkgb2YgQXJyYXkuZnJvbSh0aGlzLmF1ZGlvUGx1Z2luQ2hhaW5NYW5hZ2VycykpIHtcbiAgICAgICAgICAgIHRoaXMuZGVzdHJveUF1ZGlvUGx1Z2luQ2hhaW5NYW5hZ2VyKHN1YkZhY3RvcnkpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoY29uc3Qgc3ludGhlc2lzZXJIb3N0IG9mIEFycmF5LmZyb20odGhpcy5zeW50aGVzaXNlckhvc3RzKSkge1xuICAgICAgICAgICAgdGhpcy5kZXN0cm95TWlkaVN5bnRoZXNpc2VySG9zdChzeW50aGVzaXNlckhvc3QpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoY29uc3QgcGx1Z2luIG9mIEFycmF5LmZyb20odGhpcy5wbHVnaW5zTGlzdCkpIHtcbiAgICAgICAgICAgIHRoaXMuZGVsZXRlUGx1Z2luKHBsdWdpbik7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChjb25zdCBwcm90b3R5cGUgb2YgQXJyYXkuZnJvbSh0aGlzLnBsdWdpbl9wcm90b3R5cGVzKSkge1xuICAgICAgICAgICAgdGhpcy5kZWxldGVQcm90b3R5cGUocHJvdG90eXBlKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBsdWdpbkFzc2V0cy5kZXN0cm95KCk7XG4gICAgfVxuICAgIDtcbiAgICBsb2FkUHJvdG90eXBlTW9kdWxlKHJlc291cmNlT2JqZWN0LCBtdXN0TW9kdWxlID0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGxldCBtb2R1bGU7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZ2xvYmFsLmRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGdsb2JhbC5kZWZpbmUuYW1kKSB7XG4gICAgICAgICAgICAgICAgICAgIG1vZHVsZSA9IGdsb2JhbC5yZXF1aXJlKHJlc291cmNlT2JqZWN0LnVybCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiBnbG9iYWwubW9kdWxlID09IFwib2JqZWN0XCIgJiYgZ2xvYmFsLm1vZHVsZS5leHBvcnRzKSB7XG4gICAgICAgICAgICAgICAgICAgIG1vZHVsZSA9IChnbG9iYWwucmVxdWlyZShyZXNvdXJjZU9iamVjdC51cmwpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBsb2FkIHVzaW5nIHJlcXVpcmVcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbW9kdWxlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWRkUHJvdG90eXBlKG1vZHVsZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJcyBub3QgYSBtb2R1bGUgcGx1Z2luXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgaWYgKG11c3RNb2R1bGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGxvYWQgdXNpbmcgbW9kdWxhciBzeXN0ZW1zXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwiQ291bGQgbm90IGxvYWQgdXNpbmcgbW9kdWxhciBzeXN0ZW1zXCIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5sb2FkUGx1Z2luU2NyaXB0KHJlc291cmNlT2JqZWN0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICA7XG4gICAgbG9hZFJlc291cmNlKHJlc291cmNlT2JqZWN0KSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHJlc291cmNlT2JqZWN0ICE9PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRXJyb3JcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgcmVzb3VyY2VPYmplY3QudXJsICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwicmVzb3VyY2VPYmplY3QudXJsIG11c3QgYmUgYSBzdHJpbmdcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgcmVzb3VyY2VPYmplY3QudGVzdCAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwicmVzb3VyY2VPYmplY3QudGVzdCBtdXN0IGJlIGEgZnVuY3Rpb25cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHJlc291cmNlT2JqZWN0LnRlc3QoKTtcbiAgICAgICAgICAgIGlmIChyZXNwb25zZSAhPT0gZmFsc2UgJiYgcmVzcG9uc2UgIT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJyZXNvdXJjZU9iamVjdC50ZXN0IG11c3QgcmV0dXJuIHRydWUgb3IgZmFsc2VcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXJlc291cmNlT2JqZWN0LnR5cGUpIHtcbiAgICAgICAgICAgICAgICByZXNvdXJjZU9iamVjdC50eXBlID0gXCJqYXZhc2NyaXB0XCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXNvdXJjZU9iamVjdC50eXBlID0gcmVzb3VyY2VPYmplY3QudHlwZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgc3dpdGNoIChyZXNvdXJjZU9iamVjdC50eXBlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcImphdmFzY3JpcHRcIjpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgeWllbGQgdGhpcy5sb2FkUmVzb3VyY2UocmVzb3VyY2VPYmplY3QpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgcmVzb3VyY2VPYmplY3QucmV0dXJuT2JqZWN0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAod2luZG93Lmhhc093blByb3BlcnR5KHJlc291cmNlT2JqZWN0LnJldHVybk9iamVjdCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKHdpbmRvd1tyZXNvdXJjZU9iamVjdC5yZXR1cm5PYmplY3RdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHR5cGUgXCIgKyBTdHJpbmcocmVzb3VyY2VPYmplY3QudHlwZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgO1xuICAgIGxvYWRQbHVnaW5TY3JpcHQocmVzb3VyY2VPYmplY3QpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGlmIChyZXNvdXJjZU9iamVjdCkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgcmVzb3VyY2VPYmplY3QucmV0dXJuT2JqZWN0ICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInJlc291cmNlT2JqZWN0LnJldHVybk9iamVjdCBtdXN0IGJlIHRoZSBuYW1lIG9mIHRoZSBwcm90b3R5cGUgZnVuY3Rpb25cIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IHBsdWdpbiA9IHlpZWxkIHRoaXMubG9hZFJlc291cmNlKHJlc291cmNlT2JqZWN0KTtcbiAgICAgICAgICAgICAgICByZXR1cm4geWllbGQgdGhpcy5hZGRQcm90b3R5cGUocGx1Z2luKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIDtcbiAgICBpbmplY3RQcm90b3R5cGUocHJvdG90eXBlRXhlY3V0YWJsZSkge1xuICAgICAgICBpZiAodHlwZW9mIHByb3RvdHlwZUV4ZWN1dGFibGUgIT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICB0aHJvdyAoXCJJbnZhbGlkIGV4ZWN1dGFibGUgZnVuY3Rpb25cIik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkUHJvdG90eXBlKHByb3RvdHlwZUV4ZWN1dGFibGUpO1xuICAgIH1cbiAgICA7XG4gICAgYWRkUHJvdG90eXBlKHBsdWdpbl9wcm90bykge1xuICAgICAgICBpZiAodHlwZW9mIHBsdWdpbl9wcm90byAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgUHJvdG90eXBlIG11c3QgYmUgYSBmdW5jdGlvbiFcIik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIHBsdWdpbl9wcm90by5wcm90b3R5cGUubmFtZSAhPT0gXCJzdHJpbmdcIiB8fCBwbHVnaW5fcHJvdG8ucHJvdG90eXBlLm5hbWUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNYWxmb3JtZWQgcGx1Z2luLiBOYW1lIG5vdCBkZWZpbmVkXCIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBwbHVnaW5fcHJvdG8ucHJvdG90eXBlLnZlcnNpb24gIT09IFwic3RyaW5nXCIgfHwgcGx1Z2luX3Byb3RvLnByb3RvdHlwZS52ZXJzaW9uLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWFsZm9ybWVkIHBsdWdpbi4gVmVyc2lvbiBub3QgZGVmaW5lZFwiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgcGx1Z2luX3Byb3RvLnByb3RvdHlwZS51bmlxdWVJRCAhPT0gXCJzdHJpbmdcIiB8fCBwbHVnaW5fcHJvdG8ucHJvdG90eXBlLnVuaXF1ZUlELmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWFsZm9ybWVkIHBsdWdpbi4gdW5pcXVlSUQgbm90IGRlZmluZWRcIik7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdGVzdE9iaiA9IHtcbiAgICAgICAgICAgICdwcm90byc6IHBsdWdpbl9wcm90byxcbiAgICAgICAgICAgICduYW1lJzogcGx1Z2luX3Byb3RvLnByb3RvdHlwZS5uYW1lLFxuICAgICAgICAgICAgJ3ZlcnNpb24nOiBwbHVnaW5fcHJvdG8ucHJvdG90eXBlLnZlcnNpb24sXG4gICAgICAgICAgICAndW5pcXVlSUQnOiBwbHVnaW5fcHJvdG8ucHJvdG90eXBlLnVuaXF1ZUlEXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IG9iaiA9IHRoaXMucGx1Z2luX3Byb3RvdHlwZXMuZmluZCgoZSkgPT4ge1xuICAgICAgICAgICAgbGV0IG1hdGNoID0gMDtcbiAgICAgICAgICAgIGZvciAoY29uc3QgcGFyYW0gaW4gdGVzdE9iaikge1xuICAgICAgICAgICAgICAgIGlmIChlW3BhcmFtXSA9PT0gdGhpc1twYXJhbV0pIHtcbiAgICAgICAgICAgICAgICAgICAgbWF0Y2grKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbWF0Y2ggPT09IDQ7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAob2JqKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgcGx1Z2luIG11c3QgYmUgdW5pcXVlIVwiKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBuZXdQbHVnaW5Qcm90b3RweWUgPSBuZXcgUGx1Z2luUHJvdG90eXBlKHBsdWdpbl9wcm90bywgdGhpcyk7XG4gICAgICAgIHRoaXMucGx1Z2luX3Byb3RvdHlwZXMucHVzaChuZXdQbHVnaW5Qcm90b3RweWUpO1xuICAgICAgICByZXR1cm4gbmV3UGx1Z2luUHJvdG90cHllO1xuICAgIH1cbiAgICA7XG4gICAgZGVsZXRlUHJvdG90eXBlKHBsdWdpbl9wcm90bykge1xuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMucGx1Z2luX3Byb3RvdHlwZXMuaW5kZXhPZihwbHVnaW5fcHJvdG8pO1xuICAgICAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wbHVnaW5fcHJvdG90eXBlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cbiAgICA7XG4gICAgZ2V0UHJvdG90eXBlcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGx1Z2luX3Byb3RvdHlwZXM7XG4gICAgfVxuICAgIDtcbiAgICBnZXRBdWRpb1BsdWdpblByb3RvdHlwZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBsdWdpbl9wcm90b3R5cGVzLmZpbHRlcihmdW5jdGlvbiAocHJvdG8pIHtcbiAgICAgICAgICAgIHJldHVybiBwcm90by5oYXNNaWRpSW5wdXQgPT0gZmFsc2UgJiYgcHJvdG8uaGFzTWlkaU91dHB1dCA9PSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIDtcbiAgICBnZXRNaWRpU3ludGhQcm90b3R5cGVzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wbHVnaW5fcHJvdG90eXBlcy5maWx0ZXIoZnVuY3Rpb24gKHByb3RvKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvdG8uaGFzTWlkaUlucHV0ID09IHRydWUgJiYgcHJvdG8uaGFzTWlkaU91dHB1dCA9PSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIDtcbiAgICBnZXRNaWRpUGx1Z2luUHJvdG90eXBlcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGx1Z2luX3Byb3RvdHlwZXMuZmlsdGVyKGZ1bmN0aW9uIChwcm90bykge1xuICAgICAgICAgICAgcmV0dXJuIHByb3RvLmhhc01pZGlJbnB1dCA9PSB0cnVlICYmIHByb3RvLmhhc01pZGlPdXRwdXQgPT0gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIDtcbiAgICBnZXRBbGxQbHVnaW5zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wbHVnaW5zTGlzdDtcbiAgICB9XG4gICAgO1xuICAgIGdldEFsbFBsdWdpbnNPYmplY3QoKSB7XG4gICAgICAgIGNvbnN0IG9iaiA9IHtcbiAgICAgICAgICAgICdmYWN0b3J5JzogdGhpcyxcbiAgICAgICAgICAgICdhdWRpb1BsdWdpbkNoYWluTWFuYWdlcnMnOiBbXVxuICAgICAgICB9O1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYXVkaW9QbHVnaW5DaGFpbk1hbmFnZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBvYmouYXVkaW9QbHVnaW5DaGFpbk1hbmFnZXJzLnB1c2goe1xuICAgICAgICAgICAgICAgICdzdWJGYWN0b3J5JzogdGhpcy5hdWRpb1BsdWdpbkNoYWluTWFuYWdlcnNbaV0sXG4gICAgICAgICAgICAgICAgJ3BsdWdpbnMnOiB0aGlzLmF1ZGlvUGx1Z2luQ2hhaW5NYW5hZ2Vyc1tpXS5nZXRQbHVnaW5zKClcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuICAgIDtcbiAgICBjcmVhdGVBdWRpb1BsdWdpbkNoYWluTWFuYWdlcihjaGFpblN0YXJ0LCBjaGFpblN0b3ApIHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IG5ldyBBdWRpb1BsdWdpbkNoYWluTWFuYWdlcih0aGlzLCBjaGFpblN0YXJ0LCBjaGFpblN0b3ApO1xuICAgICAgICB0aGlzLmF1ZGlvUGx1Z2luQ2hhaW5NYW5hZ2Vycy5wdXNoKG5vZGUpO1xuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG4gICAgO1xuICAgIGR1cGxpY2F0ZUF1ZGlvUGx1Z2luQ2hhaW5NYW5hZ2VyKHNvdXJjZUNoYWluTWFuYWdlciwgY2hhaW5TdGFydCwgY2hhaW5TdG9wKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBjb25zdCBub2RlID0gdGhpcy5jcmVhdGVBdWRpb1BsdWdpbkNoYWluTWFuYWdlcihjaGFpblN0YXJ0LCBjaGFpblN0b3ApO1xuICAgICAgICAgICAgZm9yIChjb25zdCBwbHVnaW5fb2JqZWN0IG9mIHNvdXJjZUNoYWluTWFuYWdlci5nZXRQbHVnaW5zKCkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdQbHVnaW4gPSB5aWVsZCBub2RlLmNyZWF0ZVBsdWdpbihwbHVnaW5fb2JqZWN0LnByb3RvdHlwZU9iamVjdCk7XG4gICAgICAgICAgICAgICAgbmV3UGx1Z2luLm5vZGUucGFyYW1ldGVycy5zZXRQYXJhbWV0ZXJzQnlPYmplY3QocGx1Z2luX29iamVjdC5ub2RlLnBhcmFtZXRlcnMuZ2V0UGFyYW1ldGVyT2JqZWN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBub2RlO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgO1xuICAgIGNyZWF0ZU1pZGlTeW50aGVzaXNlckhvc3QoZmFjdG9yeSkge1xuICAgICAgICBpZiAoZmFjdG9yeSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBmYWN0b3J5ID0gdGhpcztcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBob3N0ID0gbmV3IE1pZGlTeW50aGVzaXNlckhvc3QoZmFjdG9yeSk7XG4gICAgICAgIHRoaXMuc3ludGhlc2lzZXJIb3N0cy5wdXNoKGhvc3QpO1xuICAgICAgICByZXR1cm4gaG9zdDtcbiAgICB9XG4gICAgO1xuICAgIGRlc3Ryb3lNaWRpU3ludGhlc2lzZXJIb3N0KGhvc3QpIHtcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5zeW50aGVzaXNlckhvc3RzLmZpbmRJbmRleChmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQgPT09IHRoaXMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSwgaG9zdCk7XG4gICAgICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnN5bnRoZXNpc2VySG9zdHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIGhvc3QuZGVzdHJveSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIDtcbiAgICByZWdpc3RlclBsdWdpbkluc3RhbmNlKGluc3RhbmNlKSB7XG4gICAgICAgIGlmICh0aGlzLnBsdWdpbnNMaXN0LmZpbmQocCA9PiBwID09PSBpbnN0YW5jZSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlBsdWdpbiBJbnN0YW5jZSBub3QgdW5pcXVlXCIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucGx1Z2luc0xpc3QucHVzaChpbnN0YW5jZSk7XG4gICAgICAgIGlmICh0aGlzLmF1ZGlvU3RhcnRlZCkge1xuICAgICAgICAgICAgY29uc3QgY29udGV4dF90aW1lID0gdGhpcy5jb250ZXh0LmN1cnJlbnRUaW1lO1xuICAgICAgICAgICAgY29uc3QgcHJvZ3JhbV90aW1lID0gdGhpcy5nZXRDdXJyZW50UHJvZ3JhbVRpbWUoKTtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luQXVkaW9TdGFydChpbnN0YW5jZS5ub2RlLCBwcm9ncmFtX3RpbWUsIGNvbnRleHRfdGltZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIDtcbiAgICBkZWxldGVQbHVnaW4ocGx1Z2luKSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5wbHVnaW5zTGlzdC5pbmRleE9mKHBsdWdpbik7XG4gICAgICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICAgICAgICAvLyBBbHNvIGNoZWNrIGl0IGlzbid0IHJvZ3VlIGF0dGFjaGVkIHRvIGEgcGx1Z2luIGNoYWluXG4gICAgICAgICAgICBpZiAoaXNQbHVnaW5JbnN0YW5jZShwbHVnaW4pKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hdWRpb1BsdWdpbkNoYWluTWFuYWdlcnMuZm9yRWFjaCgoc3ViRmFjdG9yeSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3ViRmFjdG9yeS5nZXRQbHVnaW5zKCkuaW5jbHVkZXMocGx1Z2luKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3ViRmFjdG9yeS5yZW1vdmVQbHVnaW4ocGx1Z2luKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoaXNNaWRpU3ludGhlc2lzSW5zdGFuY2UocGx1Z2luKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3ludGhlc2lzZXJIb3N0cy5mb3JFYWNoKGhvc3QgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaG9zdC5taWRpU3ludGhlc2lzZXIgPT09IHBsdWdpbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaG9zdC51bmxvYWRTeW50aGVzaXNlclNsb3QoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5wbHVnaW5zTGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgcGx1Z2luLm5vZGUuZGVsZXRlKCk7XG4gICAgICAgICAgICBwbHVnaW4ubm9kZS5leHRlcm5hbEludGVyZmFjZS5jbG9zZVdpbmRvd3MoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXRDdXJyZW50UHJvZ3JhbVRpbWUoKSB7XG4gICAgICAgIGlmICh0aGlzLmF1ZGlvU3RhcnRlZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29udGV4dC5jdXJyZW50VGltZSAtIHRoaXMuYXVkaW9TdGFydENvbnRleHRUaW1lICsgdGhpcy5hdWRpb1N0YXJ0UHJvZ3JhbVRpbWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hdWRpb1N0YXJ0UHJvZ3JhbVRpbWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc2V0Q3VycmVudFByb2dyYW1UaW1lKHRpbWUpIHtcbiAgICAgICAgaWYgKHRoaXMuYXVkaW9TdGFydGVkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNdXN0IHN0b3AgcGxheWJhY2sgdG8gc2V0IHRoZSBjdXJyZW50IHByb2dyYW0gdGltZVwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHRpbWUgPT0gXCJudW1iZXJcIiAmJiB0aW1lID49IDApIHtcbiAgICAgICAgICAgIHRoaXMuYXVkaW9TdGFydFByb2dyYW1UaW1lID0gdGltZTtcbiAgICAgICAgICAgIHRoaXMuUGx1Z2luR1VJLnBvbGxBbGxQbHVnaW5zKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYXVkaW9TdGFydChwcm9ncmFtX3RpbWUsIGNvbnRleHRfdGltZSkge1xuICAgICAgICBpZiAoY29udGV4dF90aW1lID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNvbnRleHRfdGltZSA9IHRoaXMuY29udGV4dC5jdXJyZW50VGltZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvZ3JhbV90aW1lID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHByb2dyYW1fdGltZSA9IDA7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJBc3N1bWluZyBzdGFydCB0aW1lIGF0IDBcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLmF1ZGlvU3RhcnRlZCkge1xuICAgICAgICAgICAgdGhpcy5zZXRDdXJyZW50UHJvZ3JhbVRpbWUocHJvZ3JhbV90aW1lKTtcbiAgICAgICAgICAgIHRoaXMuYXVkaW9TdGFydENvbnRleHRUaW1lID0gY29udGV4dF90aW1lO1xuICAgICAgICAgICAgdGhpcy50cmlnZ2VyQXVkaW9TdGFydChwcm9ncmFtX3RpbWUsIGNvbnRleHRfdGltZSk7XG4gICAgICAgICAgICB0aGlzLmF1ZGlvU3RhcnRlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYXVkaW9TdG9wKCkge1xuICAgICAgICBpZiAodGhpcy5hdWRpb1N0YXJ0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMudHJpZ2dlckF1ZGlvU3RvcCgpO1xuICAgICAgICAgICAgdGhpcy5hdWRpb1N0YXJ0ZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjcmVhdGVTdG9yZShzdG9yZU5hbWUpIHtcbiAgICAgICAgbGV0IG5vZGUgPSB0aGlzLmZpbmRTdG9yZShzdG9yZU5hbWUpO1xuICAgICAgICBpZiAobm9kZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBub2RlID0gbmV3IExpbmtlZFN0b3JlKHN0b3JlTmFtZSk7XG4gICAgICAgICAgICB0aGlzLnN0b3Jlcy5wdXNoKG5vZGUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH1cbiAgICA7XG4gICAgZ2V0U3RvcmVzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdG9yZXM7XG4gICAgfVxuICAgIDtcbiAgICBmaW5kU3RvcmUoc3RvcmVOYW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0b3Jlcy5maW5kKGEgPT4gYS5uYW1lID09PSBzdG9yZU5hbWUpO1xuICAgIH1cbiAgICA7XG4gICAgY3JlYXRlRmFjdG9yeUNvcHkoY29udGV4dCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb3B5RmFjdG9yeSh0aGlzLCBjb250ZXh0KTtcbiAgICB9XG4gICAgZ2V0IGhhc0F1ZGlvU3RhcnRlZCgpIHsgcmV0dXJuIHRoaXMuYXVkaW9TdGFydGVkOyB9XG4gICAgZ2V0IHBsdWdpblJvb3RVUkwoKSB7IHJldHVybiB0aGlzLnJvb3RVUkw7IH1cbiAgICBzZXQgcGx1Z2luUm9vdFVSTCh0KSB7IHRoaXMucm9vdFVSTCA9IHQ7IH1cbiAgICBnZXQgc3ViRmFjdG9yaWVzKCkgeyByZXR1cm4gdGhpcy5hdWRpb1BsdWdpbkNoYWluTWFuYWdlcnM7IH1cbn1cbiIsIi8qIGpzaGludCBlc3ZlcnNpb246IDYgKi9cbmltcG9ydCB7IEF1ZGlvUGx1Z2luIH0gZnJvbSBcIi4uL0Jhc2VQbHVnaW4vQXVkaW9QbHVnaW5cIjtcbi8qIGpzaGludCBlc3ZlcnNpb246IDYgKi9cbmV4cG9ydCBjbGFzcyBQbHVnaW5JbnN0YW5jZSB7XG4gICAgY29uc3RydWN0b3Iobm9kZSkge1xuICAgICAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgICAgICB0aGlzLl9ieXBhc3NlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmV2ID0gbmV3IEV2ZW50VGFyZ2V0KCk7XG4gICAgICAgIHRoaXMuX2luID0gdGhpcy5ub2RlLmNvbnRleHQuY3JlYXRlR2FpbigpO1xuICAgICAgICB0aGlzLl9vdXQgPSB0aGlzLm5vZGUuY29udGV4dC5jcmVhdGVHYWluKCk7XG4gICAgICAgIHRoaXMuX2luLmNvbm5lY3QodGhpcy5ub2RlLmdldElucHV0cygpWzBdKTtcbiAgICAgICAgdGhpcy5ub2RlLmdldE91dHB1dHMoKVswXS5jb25uZWN0KHRoaXMuX291dCk7XG4gICAgICAgIHRoaXMubm9kZS5hZGRFdmVudExpc3RlbmVyKFwicGFyYW1ldGVyc2V0XCIsIHRoaXMpO1xuICAgICAgICB0aGlzLm5vZGUuYWRkRXZlbnRMaXN0ZW5lcihcImFsdGVyZGVsYXlcIiwgdGhpcyk7XG4gICAgfVxuICAgIGJ5cGFzc0VuYWJsZSgpIHtcbiAgICAgICAgdGhpcy5faW4uZGlzY29ubmVjdCgpO1xuICAgICAgICB0aGlzLl9pbi5jb25uZWN0KHRoaXMuX291dCk7XG4gICAgICAgIHRoaXMubm9kZS5nZXRPdXRwdXRzKClbMF0uZGlzY29ubmVjdCh0aGlzLl9vdXQpO1xuICAgICAgICB0aGlzLl9ieXBhc3NlZCA9IHRydWU7XG4gICAgICAgIGlmICh0aGlzLm5vZGUucHJvY2Vzc2luZ0RlbGF5QXNTYW1wbGVzICE9IDApIHtcbiAgICAgICAgICAgIHRoaXMuZXYuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJhbHRlcmRlbGF5XCIpKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmV2LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiYnlwYXNzZWRcIikpO1xuICAgIH1cbiAgICBieXBhc3NEaXNhYmxlKCkge1xuICAgICAgICB0aGlzLl9pbi5kaXNjb25uZWN0KCk7XG4gICAgICAgIHRoaXMuX2luLmNvbm5lY3QodGhpcy5ub2RlLmdldElucHV0cygpWzBdKTtcbiAgICAgICAgdGhpcy5ub2RlLmdldE91dHB1dHMoKVswXS5jb25uZWN0KHRoaXMuX291dCk7XG4gICAgICAgIHRoaXMuX2J5cGFzc2VkID0gZmFsc2U7XG4gICAgICAgIGlmICh0aGlzLm5vZGUucHJvY2Vzc2luZ0RlbGF5QXNTYW1wbGVzICE9IDApIHtcbiAgICAgICAgICAgIHRoaXMuZXYuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJhbHRlcmRlbGF5XCIpKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmV2LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiYnlwYXNzZWRcIikpO1xuICAgIH1cbiAgICBieXBhc3Moc3RhdGUpIHtcbiAgICAgICAgc3RhdGUgPSAoc3RhdGUgPT09IHRydWUpO1xuICAgICAgICBpZiAoc3RhdGUgPT09IHRoaXMuX2J5cGFzc2VkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fYnlwYXNzZWQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0YXRlKSB7XG4gICAgICAgICAgICB0aGlzLmJ5cGFzc0VuYWJsZSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5ieXBhc3NEaXNhYmxlKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX2J5cGFzc2VkO1xuICAgIH1cbiAgICBpc0J5cGFzc2VkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYnlwYXNzZWQ7XG4gICAgfVxuICAgIHJlY29ubmVjdChuZXdfbmV4dCkge1xuICAgICAgICB0aGlzLmNvbm5lY3QobmV3X25leHQpO1xuICAgIH1cbiAgICBjb25uZWN0KG5ld19uZXh0KSB7XG4gICAgICAgIGlmICh0aGlzLm5leHRfbm9kZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobmV3X25leHQgIT09IHVuZGVmaW5lZCAmJiBuZXdfbmV4dC5pbnB1dCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5leHRfbm9kZSA9IG5ld19uZXh0O1xuICAgICAgICAgICAgdGhpcy5fb3V0LmNvbm5lY3QodGhpcy5uZXh0X25vZGUuaW5wdXQpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBkaXNjb25uZWN0KCkge1xuICAgICAgICBpZiAodGhpcy5uZXh0X25vZGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5fb3V0LmRpc2Nvbm5lY3QodGhpcy5uZXh0X25vZGUuaW5wdXQpO1xuICAgICAgICAgICAgdGhpcy5uZXh0X25vZGUgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgdGhpcy5ub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwYXJhbWV0ZXJzZXRcIiwgdGhpcyk7XG4gICAgICAgIHRoaXMubm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKFwiYWx0ZXJkZWxheVwiLCB0aGlzKTtcbiAgICB9XG4gICAgaGFuZGxlRXZlbnQoZSkge1xuICAgICAgICB0aGlzLmV2LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KGUudHlwZSkpO1xuICAgIH1cbiAgICBhZGRFdmVudExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyLCBvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmV2LmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXIsIG9wdGlvbnMpO1xuICAgIH1cbiAgICByZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyLCBvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmV2LnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXIsIG9wdGlvbnMpO1xuICAgIH1cbiAgICBnZXQgaW5wdXQoKSB7IHJldHVybiB0aGlzLl9pbjsgfVxuICAgIGdldCBvdXRwdXQoKSB7IHJldHVybiB0aGlzLl9vdXQ7IH1cbiAgICBnZXQgYnlwYXNzZWQoKSB7IHJldHVybiB0aGlzLl9ieXBhc3NlZDsgfVxuICAgIGdldCBwcm90b3R5cGVPYmplY3QoKSB7IHJldHVybiB0aGlzLm5vZGUucHJvdG90eXBlT2JqZWN0OyB9XG4gICAgZ2V0IGV4dGVybmFsSW50ZXJmYWNlKCkgeyByZXR1cm4gdGhpcy5ub2RlLmV4dGVybmFsSW50ZXJmYWNlOyB9XG59XG5leHBvcnQgZnVuY3Rpb24gaXNQbHVnaW5JbnN0YW5jZShvYmplY3QpIHtcbiAgICByZXR1cm4gb2JqZWN0Lm5vZGUgaW5zdGFuY2VvZiBBdWRpb1BsdWdpbjtcbn1cbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuLyoganNoaW50IGVzdmVyc2lvbjogNiAqL1xuaW1wb3J0IHsgUGx1Z2luSW5zdGFuY2UgfSBmcm9tIFwiLi9QbHVnaW5JbnN0YW5jZVwiO1xuaW1wb3J0IHsgTWlkaVN5bnRoZXNpc0luc3RhbmNlIH0gZnJvbSBcIi4vTWlkaVN5bnRoZXNpc0luc3RhbmNlXCI7XG5jbGFzcyBCYXNlUGx1Z2luUHJvdG90eXBlIHtcbiAgICBjb25zdHJ1Y3Rvcihwcm90bywgZmFjdG9yeSkge1xuICAgICAgICB0aGlzLnByb3RvID0gcHJvdG87XG4gICAgICAgIHRoaXMuZmFjdG9yeSA9IGZhY3Rvcnk7XG4gICAgfVxuICAgIGdldCBuYW1lKCkgeyByZXR1cm4gdGhpcy5wcm90by5wcm90b3R5cGUubmFtZTsgfVxuICAgIGdldCB2ZXJzaW9uKCkgeyByZXR1cm4gdGhpcy5wcm90by5wcm90b3R5cGUudmVyc2lvbjsgfVxuICAgIGdldCB1bmlxdWVJRCgpIHsgcmV0dXJuIHRoaXMucHJvdG8ucHJvdG90eXBlLnVuaXF1ZUlEOyB9XG4gICAgZ2V0IGhhc01pZGlJbnB1dCgpIHsgcmV0dXJuICh0aGlzLnByb3RvLnByb3RvdHlwZS5oYXNNaWRpSW5wdXQgfHwgZmFsc2UpOyB9XG4gICAgZ2V0IGhhc01pZGlPdXRwdXQoKSB7IHJldHVybiAodGhpcy5wcm90by5wcm90b3R5cGUuaGFzTWlkaU91dHB1dCB8fCBmYWxzZSk7IH1cbn1cbmV4cG9ydCBjbGFzcyBQbHVnaW5Qcm90b3R5cGUgZXh0ZW5kcyBCYXNlUGx1Z2luUHJvdG90eXBlIHtcbiAgICBjb25zdHJ1Y3Rvcihwcm90bywgZmFjdG9yeSkge1xuICAgICAgICBzdXBlcihwcm90bywgZmFjdG9yeSk7XG4gICAgICAgIHRoaXMucHJvdG8gPSBwcm90bztcbiAgICAgICAgdGhpcy5mYWN0b3J5ID0gZmFjdG9yeTtcbiAgICB9XG4gICAgY3JlYXRlUGx1Z2luSW5zdGFuY2Uob3duZXIpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGNvbnN0IHBsdWdpbiA9IG5ldyB0aGlzLnByb3RvKHRoaXMuZmFjdG9yeSwgb3duZXIpO1xuICAgICAgICAgICAgaWYgKHBsdWdpbi5pbml0aWFsaXNlKSB7XG4gICAgICAgICAgICAgICAgeWllbGQgcGx1Z2luLmluaXRpYWxpc2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IG5vZGUgPSBuZXcgUGx1Z2luSW5zdGFuY2UocGx1Z2luKTtcbiAgICAgICAgICAgIHRoaXMuZmFjdG9yeS5yZWdpc3RlclBsdWdpbkluc3RhbmNlKG5vZGUpO1xuICAgICAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBTeW50aGVzaXNlclByb3RvdHlwZSBleHRlbmRzIEJhc2VQbHVnaW5Qcm90b3R5cGUge1xuICAgIGNvbnN0cnVjdG9yKHByb3RvLCBmYWN0b3J5KSB7XG4gICAgICAgIHN1cGVyKHByb3RvLCBmYWN0b3J5KTtcbiAgICAgICAgdGhpcy5wcm90byA9IHByb3RvO1xuICAgICAgICB0aGlzLmZhY3RvcnkgPSBmYWN0b3J5O1xuICAgIH1cbiAgICBjcmVhdGVQbHVnaW5JbnN0YW5jZShvd25lcikge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgY29uc3QgcGx1Z2luID0gbmV3IHRoaXMucHJvdG8odGhpcy5mYWN0b3J5LCBvd25lcik7XG4gICAgICAgICAgICBpZiAocGx1Z2luLmluaXRpYWxpc2UpIHtcbiAgICAgICAgICAgICAgICB5aWVsZCBwbHVnaW4uaW5pdGlhbGlzZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgbm9kZSA9IG5ldyBNaWRpU3ludGhlc2lzSW5zdGFuY2UocGx1Z2luKTtcbiAgICAgICAgICAgIHRoaXMuZmFjdG9yeS5yZWdpc3RlclBsdWdpbkluc3RhbmNlKG5vZGUpO1xuICAgICAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsIi8qIGpzaGludCBlc3ZlcnNpb246IDYgKi9cbmV4cG9ydCBjbGFzcyBQbHVnaW5Vc2VySW50ZXJmYWNlTWVzc2FnZUh1YiB7XG4gICAgY29uc3RydWN0b3IoZmFjdG9yeSkge1xuICAgICAgICB0aGlzLmZhY3RvcnkgPSBmYWN0b3J5O1xuICAgICAgICB0aGlzLmRlZmF1bHRfaW50ZXJmYWNlID0ge1xuICAgICAgICAgICAgc3JjOiBcImpzYXBfZGVmYXVsdC5odG1sXCIsXG4gICAgICAgICAgICB3aWR0aDogXCI1MDBweFwiLFxuICAgICAgICAgICAgaGVpZ2h0OiBcIjUwMHB4XCJcbiAgICAgICAgfTtcbiAgICB9XG4gICAgYnVpbGRQbHVnaW5JbnRlcmZhY2UocGx1Z2luX29iamVjdCwgaW50ZXJmYWNlX29iamVjdCkge1xuICAgICAgICBjb25zdCBpZnJhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaWZyYW1lXCIpO1xuICAgICAgICBpZnJhbWUuc3JjID0gaW50ZXJmYWNlX29iamVjdC5zcmM7XG4gICAgICAgIGlmIChpbnRlcmZhY2Vfb2JqZWN0LndpZHRoKSB7XG4gICAgICAgICAgICBpZnJhbWUud2lkdGggPSBpbnRlcmZhY2Vfb2JqZWN0LndpZHRoO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpbnRlcmZhY2Vfb2JqZWN0LmhlaWdodCkge1xuICAgICAgICAgICAgaWZyYW1lLmhlaWdodCA9IGludGVyZmFjZV9vYmplY3QuaGVpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIGlmcmFtZS5zdHlsZS5ib3JkZXIgPSBcIjBcIjtcbiAgICAgICAgLy9pZnJhbWUuY29udGVudFdpbmRvdy5wbHVnaW5JbnN0YW5jZSA9IHBsdWdpbl9vYmplY3Q7XG4gICAgICAgIHJldHVybiBpZnJhbWU7XG4gICAgfVxuICAgIHNwYXduUGx1Z2luV2luZG93KHBsdWdpbl9vYmplY3QsIGludGVyZmFjZV9vYmplY3QsIG9wdHMpIHtcbiAgICAgICAgY29uc3QgdyA9IHdpbmRvdy5vcGVuKGludGVyZmFjZV9vYmplY3Quc3JjLCBwbHVnaW5fb2JqZWN0Lm5hbWUsIG9wdHMpO1xuICAgICAgICBwbHVnaW5fb2JqZWN0LmV4dGVybmFsSW50ZXJmYWNlLnJlZ2lzdGVyV2luZG93KHcpO1xuICAgICAgICByZXR1cm4gdztcbiAgICB9XG4gICAgc2V0RGVmYXVsdEludGVyZmFjZShzcmMsIHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgdGhpcy5kZWZhdWx0X2ludGVyZmFjZSA9IHtcbiAgICAgICAgICAgIHNyYzogc3JjLFxuICAgICAgICAgICAgd2lkdGg6IHdpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0OiBoZWlnaHRcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVmYXVsdF9pbnRlcmZhY2U7XG4gICAgfVxuICAgIHBvbGxBbGxQbHVnaW5zKCkge1xuICAgICAgICB0aGlzLmZhY3RvcnkuZ2V0QWxsUGx1Z2lucygpLmZvckVhY2goZnVuY3Rpb24gKHBsdWdpbikge1xuICAgICAgICAgICAgcGx1Z2luLm5vZGUuZXh0ZXJuYWxJbnRlcmZhY2UudXBkYXRlSW50ZXJmYWNlcyh0cnVlKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiLy8gU3RvcmUgZm9yIHRoZSBzZW1hbnRpYyB0ZXJtcywgZWFjaCBzdG9yZSBob2xkcyBpdHMgb3duIGRhdGEgdHJlZVxuLy8gVGVybXMgYXJlIGFkZGVkIGFzIGtleS92YWx1ZSBwYXJpcyB0byBhIHJvb3Qgbm9kZVxuZXhwb3J0IGNsYXNzIExpbmtlZFN0b3JlIHtcbiAgICBjb25zdHJ1Y3RvcihzdG9yZU5hbWUpIHtcbiAgICAgICAgdGhpcy5zdG9yZU5hbWUgPSBzdG9yZU5hbWU7XG4gICAgICAgIHRoaXMuZXQgPSBuZXcgRXZlbnRUYXJnZXQoKTtcbiAgICB9XG4gICAgb2JqZWN0VG9YTUwob2JqLCByb290LCBkb2MpIHtcbiAgICAgICAgLy8gVXNlZCBpZiBhbiBvYmplY3Qgd2FzIHBhc3NlZCBhcyBhIHRlcm0gdmFsdWVcbiAgICAgICAgZm9yIChjb25zdCB0ZXJtIG9mIG9iai5rZXlzKCkpIHtcbiAgICAgICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkodGVybSkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlbnRyeSA9IG9ialt0ZXJtXTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGVudHJ5ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgICAgIHJvb3Quc2V0QXR0cmlidXRlKHRlcm0sIGVudHJ5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodHlwZW9mIGVudHJ5ID09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcm9vdC5zZXRBdHRyaWJ1dGUodGVybSwgZW50cnkudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBsZXQgZG9jTm9kZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVudHJ5IGluc3RhbmNlb2YgTGlua2VkU3RvcmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY05vZGUgPSBlbnRyeS50b1hNTChkb2MpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9jTm9kZSA9IGRvYy5jcmVhdGVFbGVtZW50KHRlcm0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcm9vdC5hcHBlbmRDaGlsZChkb2NOb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbnRyeSBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hcnJheVRvWE1MKGVudHJ5LCBkb2NOb2RlLCBkb2MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vYmplY3RUb1hNTChlbnRyeSwgZG9jTm9kZSwgZG9jKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByb290LmFwcGVuZENoaWxkKGRvY05vZGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBhcnJheVRvWE1MKGFyciwgcm9vdCwgZG9jKSB7XG4gICAgICAgIC8vIFVzZWQgdG8gY29udmVydCBhbiBhcnJheSB0byBhIGxpc3Qgb2YgWE1MIGVudHJpZXNcbiAgICAgICAgdmFyIGFsbF9udW1iZXJzID0gdHJ1ZSwgYWxsX3N0cmluZ3MgPSB0cnVlLCBpLCBsID0gYXJyLmxlbmd0aDtcbiAgICAgICAgYWxsX251bWJlcnMgPSBhcnIuZXZlcnkoZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgICAgIHJldHVybiB0eXBlb2YgYSA9PT0gXCJudW1iZXJcIjtcbiAgICAgICAgfSk7XG4gICAgICAgIGFsbF9zdHJpbmdzID0gYXJyLmV2ZXJ5KGZ1bmN0aW9uIChhKSB7XG4gICAgICAgICAgICByZXR1cm4gdHlwZW9mIGEgPT09IFwic3RyaW5nXCI7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoYWxsX251bWJlcnMgfHwgYWxsX3N0cmluZ3MpIHtcbiAgICAgICAgICAgIC8vIEFuIGFycmF5IG9mIG51bWJlcnMgb3Igc3RyaW5nc1xuICAgICAgICAgICAgYXJyLmZvckVhY2goZnVuY3Rpb24gKGEsIGkpIHtcbiAgICAgICAgICAgICAgICByb290LnNldEF0dHJpYnV0ZShcImluZGV4LVwiICsgaSwgYSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIEFuIGFycmF5IG9mIG9iamVjdHNcbiAgICAgICAgICAgIGFyci5mb3JFYWNoKGZ1bmN0aW9uIChhLCBpKSB7XG4gICAgICAgICAgICAgICAgdmFyIG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidmFsdWVcIik7XG4gICAgICAgICAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoXCJpbmRleFwiLCBpKTtcbiAgICAgICAgICAgICAgICB0aGlzLm9iamVjdFRvWE1MKGEsIG5vZGUsIGRvYyk7XG4gICAgICAgICAgICAgICAgcm9vdC5hcHBlbmRDaGlsZChub2RlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFkZEV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXIsIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZXQuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lciwgb3B0aW9ucyk7XG4gICAgfVxuICAgIHJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgY2FsbGJhY2ssIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBjYWxsYmFjaywgb3B0aW9ucyk7XG4gICAgfVxuICAgIHNldFRlcm0odGVybSwgdmFsdWUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0ZXJtICE9PSBcInN0cmluZ1wiIHx8IHRlcm0ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aHJvdyAoXCJ0ZXJtIG11c3QgYmUgYSBzdHJpbmdcIik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yb290LnNldCh0ZXJtLCB2YWx1ZSk7XG4gICAgICAgIHRoaXMuZXQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJhbHRlcmVkXCIsIHsgZGV0YWlsOiB7IHRlcm06IHRlcm0sIHZhbHVlOiB2YWx1ZSB9IH0pKTtcbiAgICB9XG4gICAgc2V0VGVybXModGVybXNPYmplY3QpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0ZXJtc09iamVjdCAhPT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgdGhyb3cgKFwic2V0VGVybXMgdGFrZXMgYW4gb2JqZWN0IG9mIHRlcm0vdmFsdWUgcGFpcnNcIik7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChjb25zdCB0ZXJtIGluIHRlcm1zT2JqZWN0KSB7XG4gICAgICAgICAgICBpZiAodGVybXNPYmplY3QuaGFzT3duUHJvcGVydHkodGVybSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFRlcm0odGVybSwgdGVybXNPYmplY3RbdGVybV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGRlbGV0ZVRlcm0odGVybSkge1xuICAgICAgICB0aGlzLnNldFRlcm0odGVybSwgdW5kZWZpbmVkKTtcbiAgICB9XG4gICAgZ2V0VGVybSh0ZXJtKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdGVybSAhPT0gXCJzdHJpbmdcIiB8fCB0ZXJtLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhyb3cgKFwidGVybSBtdXN0IGJlIGEgc3RyaW5nXCIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnJvb3QuZ2V0KHRlcm0pO1xuICAgIH1cbiAgICBoYXNUZXJtKHRlcm0pIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0ZXJtICE9PSBcInN0cmluZ1wiIHx8IHRlcm0ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aHJvdyAoXCJ0ZXJtIG11c3QgYmUgYSBzdHJpbmdcIik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucm9vdC5oYXModGVybSk7XG4gICAgfVxuICAgIHRvSlNPTigpIHtcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5yb290KSk7XG4gICAgfVxuICAgIHRvWE1MKGRvYykge1xuICAgICAgICBsZXQgbm9kZTtcbiAgICAgICAgaWYgKCFkb2MpIHtcbiAgICAgICAgICAgIGRvYyA9IGRvY3VtZW50LmltcGxlbWVudGF0aW9uLmNyZWF0ZURvY3VtZW50KG51bGwsIHRoaXMuc3RvcmVOYW1lLCBudWxsKTtcbiAgICAgICAgICAgIG5vZGUgPSBkb2MuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBub2RlID0gZG9jLmNyZWF0ZUVsZW1lbnQodGhpcy5zdG9yZU5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub2JqZWN0VG9YTUwodGhpcy5yb290LCBub2RlLCBkb2MpO1xuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG4gICAgZ2V0IG5hbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0b3JlTmFtZTtcbiAgICB9XG4gICAgc2V0IG5hbWUobmV3TmFtZSkge1xuICAgICAgICBpZiAodGhpcy5zdG9yZU5hbWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTmFtZSBpcyBhbHJlYWR5IHNldFwiKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnN0b3JlTmFtZSA9IG5ld05hbWU7XG4gICAgfVxufVxuIiwiLyoganNoaW50IGVzdmVyc2lvbjogNiAqL1xuaW1wb3J0IHsgQmFzZVBsdWdpbiB9IGZyb20gXCIuLi9CYXNlUGx1Z2luL2luZGV4XCI7XG5leHBvcnQgY2xhc3MgU3ludGhlc2lzZXJCYXNlUGx1Z2luIGV4dGVuZHMgQmFzZVBsdWdpbiB7XG4gICAgY29uc3RydWN0b3IoZmFjdG9yeSwgcGx1Z2luT3duZXIsIHByb3RvdHlwZU9iamVjdCkge1xuICAgICAgICBzdXBlcihmYWN0b3J5LCBwbHVnaW5Pd25lciwgcHJvdG90eXBlT2JqZWN0KTtcbiAgICAgICAgdGhpcy5mYWN0b3J5ID0gZmFjdG9yeTtcbiAgICAgICAgdGhpcy5wcm90b3R5cGVPYmplY3QgPSBwcm90b3R5cGVPYmplY3Q7XG4gICAgICAgIHRoaXMuaGFzV2FybmVkU2NoZWR1bGVOb3RTZXQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5oYXNXYXJuZWRDYW5jZWxOb3RTZXQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5lZGl0b3JUeXBlID0gXCJyb2xsXCI7XG4gICAgfVxuICAgIHN0b3AoKSB7XG4gICAgICAgIHRoaXMuY2FuY2VsQWxsRXZlbnRzKCk7XG4gICAgfVxuICAgIGFkZElucHV0KCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgYWRkIGlucHV0IHRvIHR5cGUgXFxcIlN5bnRoZXNpc2VyQmFzZVBsdWdpblxcXCJcIik7XG4gICAgfVxuICAgIGRlbGV0ZUlucHV0KCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZGVsZXRlIGlucHV0IHRvIHR5cGUgXFxcIlN5bnRoZXNpc2VyQmFzZVBsdWdpblxcXCJcIik7XG4gICAgfVxuICAgIHNjaGVkdWxlRXZlbnQobXNnLCBjb250ZXh0VGltZSkge1xuICAgICAgICBpZiAoIXRoaXMuaGFzV2FybmVkU2NoZWR1bGVOb3RTZXQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcIldBUk5JTkcgLSAuc2NoZWR1bGVFdmVudCBpcyBub3Qgb3ZlcnJpZGRlblwiKTtcbiAgICAgICAgICAgIHRoaXMuaGFzV2FybmVkU2NoZWR1bGVOb3RTZXQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNhbmNlbEFsbEV2ZW50cyhjb250ZXh0VGltZSkge1xuICAgICAgICBpZiAoIXRoaXMuaGFzV2FybmVkQ2FuY2VsTm90U2V0KSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJXQVJOSU5HIC0gLmNhbmNlbEFsbEV2ZW50cyBpcyBub3Qgb3ZlcnJpZGRlblwiKTtcbiAgICAgICAgICAgIHRoaXMuaGFzV2FybmVkQ2FuY2VsTm90U2V0ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzZXRFZGl0b3JUeXBlKHR5cGUpIHtcbiAgICAgICAgaWYgKHR5cGUgPT0gXCJyb2xsXCIgfHwgdHlwZSA9PSBcImxpbmVcIiB8fCB0eXBlID09IFwic2VxdWVuY2VyXCIpIHtcbiAgICAgICAgICAgIHRoaXMuZWRpdG9yVHlwZSA9IHR5cGU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuZWRpdG9yVHlwZTtcbiAgICB9XG4gICAgZ2V0RWRpdG9yVHlwZSgpIHsgcmV0dXJuIHRoaXMuZWRpdG9yVHlwZTsgfVxuICAgIGlzTm90ZUFjdGl2ZShuKSB7XG4gICAgICAgIGlmICh0eXBlb2YgbiA9PSBcIm51bWJlclwiICYmIG4gPj0gMCAmJiBuIDwgMTI4KSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXRBY3RpdmVOb3RlUHJvcGVydGllcygpIHtcbiAgICAgICAgY29uc3Qgb2JqID0gW107XG4gICAgICAgIGZvciAodmFyIG4gPSAwOyBuIDwgMTI4OyBuKyspIHtcbiAgICAgICAgICAgIG9iai5wdXNoKHtcbiAgICAgICAgICAgICAgICBjb2RlOiBuLFxuICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMubWlkaU5vdGVUb05hbWUobilcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuICAgIG1pZGlOb3RlVG9GcmVxdWVuY3kobSkge1xuICAgICAgICByZXR1cm4gTWF0aC5wb3coMi4wLCAobSAtIDY5KSAvIDEyKSAqIDQ0MDtcbiAgICB9XG4gICAgZnJlcXVlbmN5VG9NaWRpTm90ZShmKSB7XG4gICAgICAgIHJldHVybiBNYXRoLnJvdW5kKDEyLjAgKiBNYXRoLmxvZzIoZiAvIDQ0MCkpICsgNjk7XG4gICAgfVxuICAgIG1pZGlOb3RlVG9OYW1lKG0pIHtcbiAgICAgICAgY29uc3Qgbm90ZXMgPSBbXCJBXCIsIFwiQSNcIiwgXCJCXCIsIFwiQ1wiLCBcIkMjXCIsIFwiRFwiLCBcIkQjXCIsIFwiRVwiLCBcIkZcIiwgXCJGI1wiLCBcIkdcIiwgXCJHI1wiXTtcbiAgICAgICAgY29uc3Qgcm9vdCA9IG0gLSAyMTtcbiAgICAgICAgY29uc3Qgb2N0YXZlID0gTWF0aC5mbG9vcihyb290IC8gMTIpO1xuICAgICAgICBjb25zdCBub3RlID0gTWF0aC5mbG9vcigocm9vdCArIDM2KSAlIDEyKTtcbiAgICAgICAgcmV0dXJuIG5vdGVzW25vdGVdICsgU3RyaW5nKG9jdGF2ZSk7XG4gICAgfVxuICAgIG5vdGVOYW1lVG9NaWRpKG4pIHtcbiAgICAgICAgY29uc3Qgbm90ZXMgPSBbXCJBXCIsIFwiQSNcIiwgXCJCXCIsIFwiQ1wiLCBcIkMjXCIsIFwiRFwiLCBcIkQjXCIsIFwiRVwiLCBcIkZcIiwgXCJGI1wiLCBcIkdcIiwgXCJHI1wiXTtcbiAgICAgICAgY29uc3Qgb2N0YXZlID0gTnVtYmVyKG4uc2xpY2Uobi5sZW5ndGggLSAxKSk7XG4gICAgICAgIGNvbnN0IG5vdGUgPSBub3Rlcy5pbmRleE9mKG4uc2xpY2UoMCwgbi5sZW5ndGggLSAxKSk7XG4gICAgICAgIHJldHVybiBvY3RhdmUgKiAxMiArIG5vdGUgKyAyMTtcbiAgICB9XG4gICAgbm90ZU5hbWVUb01JREkobikge1xuICAgICAgICByZXR1cm4gdGhpcy5ub3RlTmFtZVRvTWlkaTtcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gaXNTeW50aGVzaXNlckJhc2VQbHVnaW4ob2JqZWN0KSB7XG4gICAgcmV0dXJuIG9iamVjdC5pbnB1dHMubGVuZ3RoID09PSAwICYmIG9iamVjdC5vdXRwdXRzLmxlbmd0aCA+IDAgJiYgYHNjaGVkdWxlRXZlbnRgIGluIG9iamVjdDtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiB1bmlxdWVNZXJnZUFycmF5KGEsIGIpIHtcbiAgICBjb25zdCBvdXRwdXQgPSBbXTtcbiAgICBmb3IgKGNvbnN0IGVudHJ5IG9mIGEpIHtcbiAgICAgICAgaWYgKG91dHB1dC5pbmNsdWRlcyhlbnRyeSkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBvdXRwdXQucHVzaChlbnRyeSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZm9yIChjb25zdCBlbnRyeSBvZiBiKSB7XG4gICAgICAgIGlmIChvdXRwdXQuaW5jbHVkZXMoZW50cnkpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgb3V0cHV0LnB1c2goZW50cnkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvdXRwdXQ7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBUaGlzIGRlZmluZXMgYSBtYXN0ZXIgb2JqZWN0IGZvciBob2xkaW5nIGFsbCB0aGUgcGx1Z2lucyBhbmQgY29tbXVuaWNhdGluZ1xuLy8gVGhpcyBvYmplY3Qgd2lsbCBhbHNvIGhhbmRsZSBjcmVhdGlvbiBhbmQgZGVzdHJ1Y3Rpb24gb2YgcGx1Z2luc1xuLypnbG9iYWxzIFByb21pc2UsIGRvY3VtZW50LCBjb25zb2xlLCBMaW5rZWRTdG9yZSwgV29ya2VyLCB3aW5kb3csIFhNTEh0dHBSZXF1ZXN0ICovXG4vKmVzbGludC1lbnYgYnJvd3NlciAqL1xuLyoganNoaW50IGVzdmVyc2lvbjo2ICovXG5pbXBvcnQgeyBCYXNlUGx1Z2luIH0gZnJvbSAnLi9CYXNlUGx1Z2luL2luZGV4JztcbmltcG9ydCB7IFN5bnRoZXNpc2VyQmFzZVBsdWdpbiB9IGZyb20gJy4vU3ludGhlc2lzZXJCYXNlUGx1Z2luL2luZGV4JztcbmltcG9ydCB7IFBsdWdpbkZhY3RvcnkgfSBmcm9tIFwiLi9GYWN0b3J5L1BsdWdpbkZhY3RvcnlcIjtcbmV4cG9ydCB7IEJhc2VQbHVnaW4sIFN5bnRoZXNpc2VyQmFzZVBsdWdpbiwgUGx1Z2luRmFjdG9yeSB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==