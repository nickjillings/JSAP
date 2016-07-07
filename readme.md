# Web Audio Sub Graph

## Introduction

This project aims to create a common framework for creating Web Audio API effects nodes, commonly called plugins for Digital Audio Workstations. In this project we include a framework for creating your own plugins as well as tools on how to host and integrate these plugins into your web audio site.

### Reasons for doing this

1. Standardise a method of 3rd party plugin types (try and remove the horrible node.connect(new_node.something))
2. Package up audio graphs into succient packets which can be copied multiple times
3. Abstract parameters to behave as closely to AudioParameter nodes whilst having some more advanced features
4. Support for more than just audio in/out, but also feature and semantic awareness


## Make your own

We provide a template file (blank_plugin.js) which contains all you need. Simply include the base_plugin.js into your project

```html
<script type="text/javascript" src=base_plugin.js></script>
```

Simply include your Web Audio API code in between the lines. View the base_plugin_examples.js for simple demonstrations.