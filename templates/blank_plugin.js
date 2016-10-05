var BlankPlugin = function (factory, owner) {
    this.__proto__ = new BasePlugin(factory, owner);

    /* USER MODIFIABLE BEGIN */

    /// IMPORTANT ///
    // Change this to the name of this object
    this.constructor = BlankPlugin;

    // Place your code between this line...

    // ... and this line!
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
