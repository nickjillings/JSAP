# JSAP - JavaScript Audio Plugin

## Introduction

JSAP is a new audio effects framework for the HTML 5web audio API. JSAP effects are similar to desktop audio workstation plugins.

## Usage

JSAP is made up of two parts, the plugins and the factory. The factory enables a website (host) to integrate and use JSAP plugin instances with ease. The plugins themselves are built on top of a BasePlugin JavaScript object, binding certain functions together.

To include the JSAP library into a host, simply include the 'jsap.js' file, for example:

```html
<script src="jsap.js"></script>
```

## Documentation

The documentation overviews the following items:

### Plugin Design
- Basic Plugins
    - Web Audio API Effects
    - Parameters
    - Input and Ouputs
    - Graphical User Interfaces
- Advanced Plugins
    - Feature Extraction
    - Adaptive Plugins
    - Cross-Adaptive Plugins

### Plugin Factory
- Architecture
- Adding Plugin Prototypes
- Constructing Plugins

## Issues
If you find any problems, solutions, bumps and scrapes, please raise an issue report [here](https://github.com/nickjillings/jsap/issues). 

## Citing
This work was presented at the AES 141st Convention in Los Angeles, USA and at the 2nd Workshop on Intelligent Music Production. Please cite this paper in any academic works:

Jillings et al. "JSAP: A Plugin Standard for the Web Audio API with Intelligent Functionality". Audio Engineering Society Convention 141, Los Angeles, CA. September, 2016. Available at http://www.aes.org/e-lib/browse.cfm?elib=18397. [bibtex](http://dmtlab.bcu.ac.uk/nickjillings/docs/papers/bibtex/jsap_aes141.bibtex)