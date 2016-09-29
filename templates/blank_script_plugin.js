var BlankPlugin = function (context, owner) {
    this.__proto__ = new BasePlugin(context, owner);

    /* USER MODIFIABLE BEGIN */

    /// IMPORTANT ///
    // Change this to the name of this object
    this.constructor = BlankPlugin;
    // Place your code between these lines

    // This example creates an empty DSP module plugin
    var node = this.context.createScriptProcessor(256, 2, 2);
    node.onaudioprocess = function (event) {
        // Place your custom, JS here.
    }

    this.inputs[0] = node;
    this.outputs[0] = node;
    /* USER MODIFIABLE END */
    (function () {
        var i;
        for (i = 0; i < this.numOutputs; i++) {
            var node = this.context.createAnalyser();
            this.features.push(node);
            this.outputs[i].connect(node);
        }
    })();
}

// Also update the prototype function here!
BlankPlugin.prototype.name = "Cool Plugin Name Here";
