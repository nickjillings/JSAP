/*globals BasePlugin */
var BlankPlugin = function (factory, owner) {
    // This attaches the base plugin items to the Object
    BasePlugin.call(this, factory, owner);

    /* USER MODIFIABLE BEGIN */

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
};

// Also update the prototype function here!
BlankPlugin.prototype = Object.create(BasePlugin.prototype);
BlankPlugin.prototype.constructor = BlankPlugin;
BlankPlugin.prototype.name = "Cool Plugin Name Here";
BlankPlugin.prototype.version = "1.0.0";
BlankPlugin.prototype.uniqueID = "";
