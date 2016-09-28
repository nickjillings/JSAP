# JSAP

## Introduction

This project aims to create a common framework for creating Web Audio API effects nodes, commonly called plugins for Digital Audio Workstations. In this project we include a framework for creating your own plugins as well as tools on how to host and integrate these plugins into your web audio site.

### Reasons for doing this

1. Standardise a method of 3rd party plugin types (try and remove the horrible node.connect(new_node.something))
2. Package up audio graphs into packets which can be copied multiple times
3. Abstract parameters to behave as closely to AudioParameter nodes whilst having some more advanced features
4. Support for more than just audio in/out, but also feature and semantic awareness

## Make your own

We provide a template file (blank_plugin.js) which contains all you need. Simply include the base_plugin.js into your project

```html
<script type="text/javascript" src="jsap.js"></script>
```

Simply include your Web Audio API code in between the lines. View the base_plugin_examples.js for simple demonstrations.

## Work In Progress

This project is still in its infancy and we are open to any and all discussions on the standard. Please highlight items in the issue tracker or fork and make a pull request with your changes.

## Papers

This work was presented at the AES Workshop of Intelligent Music Production, Queen Mary's College, London and the AES 141st Convention in Los Angeles.