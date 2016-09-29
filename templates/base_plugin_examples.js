// EXAMPLE - Volume Control

var VolumeControl = function (context, owner) {
    this.__proto__ = new BasePlugin(context, owner);
    /* USER MODIFIABLE BEGIN */

    /// IMPORTANT ///
    // Change this to the name of this object
    this.constructor = VolumeControl;

    // Place your code between this line...

    // First we create the web audio API gain node
    var gain = this.context.createGain();

    // We have only one input and one output, which is the gain node:
    this.inputs[0] = gain;
    this.output[0] = gain;

    // Next we must create the parameter, again there is only one:
    var gainParam = new PluginParameter(1, "Number", "Volume", 0, 2, this);
    // This creates a parameter called Volume, which uses a real number, an acceptable range of 0 to 2 and defaults at 1
    gainParam.bindToAudioParam(gain.gain);
    // We have bound the parameter to the web audio gain node parameter gain.

    // We can add the gainParam to the parameter list presented to the plugin by:
    this.parameters.push(gainParam);

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
VolumeControl.prototype.name = "Example Volume";

// EXAMPLE - Low Pass

var LowPass = function (context, owner) {
    this.__proto__ = new BasePlugin(context, owner);
    /* USER MODIFIABLE BEGIN */

    /// IMPORTANT ///
    // Change this to the name of this object
    this.constructor = LowPass;

    // Place your code between this line...

    // This example shows multiple nodes working together!
    var filter = this.context.createBiquadFilter();
    var inputGain = this.context.createGain();
    var outputGain = this.context.createGain();

    // Above we create three nodes, an input gain, the filter and an output gain
    // These are connected as follows...

    inputGain.connect(filter);
    filter.connect(outputGain);

    //...however we only present the input and output gain nodes

    this.inputs[0] = inputGain;
    this.outputs[0] = outputGain;

    // Next we must create the parameters, we do not want to expose every parameter in their full range:
    var inputGainParameter = new PluginParameter(1, "Number", "Input Gain", 0.8, 1.2, this);
    var outputGainParameter = new PluginParameter(1, "Number", "Output Gain", 0.8, 1.2, this);
    var frequency = new PluginParameter(1000, "Number", "Frequency", 200, 5000, this);

    // We now bind these parameters to their various web audio node parameters
    inputGainParameter.bindToAudioParam(inputGain.gain);
    outputGainParameter.bindToAudioParam(outputGain.gain);
    frequency.bindToAudioParam(filter.frequency);

    // And now present the three parameters
    this.parameters.push(inputGainParameter);
    this.parameters.push(outputGainParameter);
    this.parameters.push(frequency);

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
LowPass.prototype.name = "Example Low Pass";
// GUI Example

var VolumeControlGUI = function (context, owner) {
    this.__proto__ = new BasePlugin(context, owner);
    /* USER MODIFIABLE BEGIN */

    /// IMPORTANT ///
    // Change this to the name of this object
    this.constructor = VolumeControlGUI;

    // Place your code between this line...

    // First we create the web audio API gain node
    var gain = this.context.createGain();

    // We have only one input and one output, which is the gain node:
    this.inputs[0] = gain;
    this.outputs[0] = gain;

    // Next we must create the parameter, again there is only one:
    var gainParam = new PluginParameter(1, "Number", "Volume", 0, 2);
    // This creates a parameter called Volume, which uses a real number, an acceptable range of 0 to 2 and defaults at 1
    gainParam.bindToAudioParam(gain.gain);
    // We have bound the parameter to the web audio gain node parameter gain.

    // We can add the gainParam to the parameter list presented to the plugin by:
    this.parameters.push(gainParam);

    // The above lines are the same as the VolumeControl example above, however we now want to add a GUI
    // Create an instance of PluginUserInterfaceInstance
    // This specifies to bind the interface to this, with a 600px width and 400px height;
    this.GUI = new PluginUserInterface(this, 600, 400);

    this.GUI.root.innerHTML = '<div class="titleHolder" style="width:100%;height:50px;text-align:center"><span>Simple Volume Control</span></div><div name="body" style="width:100%;text-align:center" min:"-24" max:"12" step:"0.5"><input type="range" name="volume-slider"/></div>'

    this.GUI.slider = this.GUI.createPluginParameterInterfaceNode(this.GUI.root.getElementsByTagName("input")[0], gainParam);
    this.GUI.slider.input.min = this.GUI.slider.AudioParam.minimum;
    this.GUI.slider.input.max = this.GUI.slider.AudioParam.maximum;
    this.GUI.slider.input.value = this.GUI.slider.AudioParam.value;
    this.GUI.slider.input.step = 0.01;

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
VolumeControlGUI.prototype.name = "Example Volume with GUI";
