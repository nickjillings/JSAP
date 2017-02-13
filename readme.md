# JSAP - JavaScript Audio Plugin

[![Code Climate](https://codeclimate.com/github/nickjillings/JSAP/badges/gpa.svg)](https://codeclimate.com/github/nickjillings/JSAP)



## Introduction

JSAP is a new audio effects framework for the HTML 5 web audio API for building audio plugins. The standard defines both the host and plugin parts.

## Usage

JSAP is made up of two parts, the plugins and the factory. The factory enables a website (host) to integrate and use JSAP plugin instances with ease. The plugins themselves are built on top of a BasePlugin JavaScript object, binding certain functions together.

To include the JSAP library into a host, simply include the 'jsap.js' file in your project, for example:

```html
<script src="jsap.js"></script>
```

## Documentation

The documentation overviews the following items:

### Plugin Design
- Basic Plugins
    - [Hello World](http://dmtlab.bcu.ac.uk/nickjillings/docs/index.php?src=jsap/plugins/HelloWorld.md)
    - [Parameters](http://dmtlab.bcu.ac.uk/nickjillings/docs/index.php?src=jsap/plugins/Parameters.md)
    - [Input and Ouputs](http://dmtlab.bcu.ac.uk/nickjillings/docs/index.php?src=jsap/plugins/IO.md)
    - [Base Plugin](http://dmtlab.bcu.ac.uk/nickjillings/docs/index.php?src=jsap/plugins/BasePlugin.md)
    - Graphical User Interfaces
- Advanced Plugins
    - [Feature Extraction](http://dmtlab.bcu.ac.uk/nickjillings/docs/index.php?src=jsap/plugins/FeatureExtraction.md)
    - Adaptive Plugins
    - Cross-Adaptive Plugins

### Plugin Factory
- Architecture
- Integrating into a Project
- Adding Plugin Prototypes & Constructing
- The SubFactory

## Issues
If you find any problems, corrections, bumps and scrapes, please raise an issue report [here](https://github.com/nickjillings/jsap/issues). 

## Citing
This work was presented at the AES 141st Convention in Los Angeles, USA and at the 2nd Workshop on Intelligent Music Production. Please cite this paper in any academic works:

Jillings et al. "JSAP: A Plugin Standard for the Web Audio API with Intelligent Functionality". Audio Engineering Society Convention 141, Los Angeles, CA. September, 2016. Available at http://www.aes.org/e-lib/browse.cfm?elib=18397. [bibtex](http://dmtlab.bcu.ac.uk/nickjillings/docs/papers/bibtex/jsap_aes141.bibtex)