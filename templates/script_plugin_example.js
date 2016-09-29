var BlankPlugin = function (context, owner) {
    this.__proto__ = new BasePlugin(context, owner);

    /* USER MODIFIABLE BEGIN */

    /// IMPORTANT ///
    // Change this to the name of this object
    this.constructor = BlankPlugin;
    // Place your code between these lines

    // This example creates an empty DSP module plugin
    var node = this.context.createScriptProcessor(1024, 2, 2);
    var i = 0;

    // First, create the gain parameter;
    var gainParam = new PluginParameter(1, "Number", "Volume", 0, 2);
    this.parameters.push(gainParam);

    node.onaudioprocess = function (event) {
        // Place your custom, JS here.
        var gain = gainParam.value;
        for (var c = 0; c < event.inputBuffer.numberOfChannels; c++) {
            var inputArray = event.inputBuffer.getChannelData(c);
            var outputArray = event.outputBuffer.getChannelData(c);
            for (var n = 0; n < inputArray.length; n++) {
                outputArray[n] = inputArray[n] * gain;
            }
        }
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
