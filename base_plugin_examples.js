// EXAMPLE - Volume Control

var VolumeControl = function() {
    var _inputList = [];
    var _outputList = [];
    var _parameters = [];
    
    /* USER MODIFIABLE BEGIN */
    // Place your code between these lines
    
    // First we create the web audio API gain node
    var gain = this.context.createGain();
    
    // We have only one input and one output, which is the gain node:
    _inputList[0] = gain;
    _outputList[0] = gain;
    
    // Next we must create the parameter, again there is only one:
    var gainParam = new PluginParameter(1,"Number","Volume",0,2);
    // This creates a parameter called Volume, which uses a real number, an acceptable range of 0 to 2 and defaults at 1
    gainParam.bindToAudioParam(gain.gain);
    // We have bound the parameter to the web audio gain node parameter gain.
    
    // We can add the gainParam to the parameter list presented to the plugin by:
    _parameters.push(gainParam);
    
    /* USER MODIFIABLE END */
    
    
    Object.defineProperty(this,"numInputs",{
        get: function() {return _inputList.length;},
        set: function() {console.error("Cannot set the number of inputs of BasePlugin");}
    })
    Object.defineProperty(this,"numOutputs",{
        get: function() {return _outputList.length;},
        set: function() {console.error("Cannot set the number of outputs of BasePlugin");}
    })
    Object.defineProperty(this,"numParameters",{
        get: function() {return _parameters.length;},
        set: function() {console.error("Cannot set the number of parameters of BasePlugin");}
    })
    
     Object.defineProperty(this,"inputs",{
        get: function(index) {return _inputList;},
        set: function() {console.error("Illegal attempt to modify BasePlugin");}
    })
    
    Object.defineProperty(this,"outputs",{
        get: function(index) {return _outputList;},
        set: function() {console.error("Illegal attempt to modify BasePlugin");}
    })
    
    Object.defineProperty(this,"parameters",{
        get: function(index) {return _parameters;},
        set: function() {console.error("Illegal attempt to modify BasePlugin");}
    })
}

VolumeControl.prototype = new BasePlugin(context);
VolumeControl.prototype.constructor = VolumeControl;


// EXAMPLE - Low Pass

var LowPass = function() {
    var _inputList = [];
    var _outputList = [];
    var _parameters = [];
    
    /* USER MODIFIABLE BEGIN */
    // Place your code between these lines
    
    // This example shows multiple nodes working together!
    var filter = this.context.createBiquadFilter();
    var inputGain = this.context.createGain();
    var outputGain = this.context.createGain();
    
    // Above we create three nodes, an input gain, the filter and an output gain
    // These are connected as follows...
    
    inputGain.connect(filter);
    filter.connect(outputGain);
    
    //...however we only present the input and output gain nodes
    
    _inputList[0] = inputGain;
    _outputList[0] = outputGain;
    
    // Next we must create the parameters, we do not want to expose every parameter in their full range:
    var inputGainParameter = new PluginParameter(1,"Number","Input Gain",0.8,1.2);
    var outputGainParameter = new PluginParameter(1,"Number","Output Gain",0.8,1.2);
    var frequency = new PluginParameter(1000,"Number","Frequency",200,5000);
    
    // We now bind these parameters to their various web audio node parameters
    inputGainParameter.bindToAudioParam(inputGain.gain);
    outputGainParameter.bindToAudioParam(outputGain.gain);
    frequency.bindToAudioParam(filter.frequency);
    
    // And now present the three parameters
    _parameters.push(inputGainParameter);
    _parameters.push(outputGainParameter);
    _parameters.push(frequency);
    
    /* USER MODIFIABLE END */
    
    
    Object.defineProperty(this,"numInputs",{
        get: function() {return _inputList.length;},
        set: function() {console.error("Cannot set the number of inputs of BasePlugin");}
    })
    Object.defineProperty(this,"numOutputs",{
        get: function() {return _outputList.length;},
        set: function() {console.error("Cannot set the number of outputs of BasePlugin");}
    })
    Object.defineProperty(this,"numParameters",{
        get: function() {return _parameters.length;},
        set: function() {console.error("Cannot set the number of parameters of BasePlugin");}
    })
    
     Object.defineProperty(this,"inputs",{
        get: function(index) {return _inputList;},
        set: function() {console.error("Illegal attempt to modify BasePlugin");}
    })
    
    Object.defineProperty(this,"outputs",{
        get: function(index) {return _outputList;},
        set: function() {console.error("Illegal attempt to modify BasePlugin");}
    })
    
    Object.defineProperty(this,"parameters",{
        get: function(index) {return _parameters;},
        set: function() {console.error("Illegal attempt to modify BasePlugin");}
    })
}

LowPass.prototype = new BasePlugin(context);
LowPass.prototype.constructor = LowPass;

// GUI Example

var VolumeControlGUI = function() {
    var _inputList = [];
    var _outputList = [];
    var _parameters = [];
    
    /* USER MODIFIABLE BEGIN */
    // Place your code between these lines
    
    // First we create the web audio API gain node
    var gain = this.context.createGain();
    
    // We have only one input and one output, which is the gain node:
    _inputList[0] = gain;
    _outputList[0] = gain;
    
    // Next we must create the parameter, again there is only one:
    var gainParam = new PluginParameter(1,"Number","Volume",0,2);
    // This creates a parameter called Volume, which uses a real number, an acceptable range of 0 to 2 and defaults at 1
    gainParam.bindToAudioParam(gain.gain);
    // We have bound the parameter to the web audio gain node parameter gain.
    
    // We can add the gainParam to the parameter list presented to the plugin by:
    _parameters.push(gainParam);
    
    // The above lines are the same as the VolumeControl example above, however we now want to add a GUI
    // Create an instance of PluginUserInterfaceInstance
    // This specifies to bind the interface to this, with a 600px width and 400px height;
    this.GUI = new PluginUserInterface(this,600,400);
    
    this.GUI.root.innerHTML = '<div class="titleHolder" style="width:100%;height:50px;text-align:center"><span>Simple Volume Control</span></div><div name="body" style="width:100%;text-align:center" min:"-24" max:"12" step:"0.5"><input type="range" name="volume-slider"/></div>'
    
    this.GUI.slider = this.GUI.createPluginParameterInterfaceNode(this.GUI.root.getElementsByClassName("input")[0],gainParam);
    this.GUI.slider.input.min = this.GUI.slider.AudioParam.minimum;
    this.GUI.slider.input.max = this.GUI.slider.AudioParam.maximum;
    this.GUI.slider.input.value = this.GUI.slider.AudioParam.value;
    this.GUI.slider.input.step = 0.5;
    
    /* USER MODIFIABLE END */
    
    
    Object.defineProperty(this,"numInputs",{
        get: function() {return _inputList.length;},
        set: function() {console.error("Cannot set the number of inputs of BasePlugin");}
    })
    Object.defineProperty(this,"numOutputs",{
        get: function() {return _outputList.length;},
        set: function() {console.error("Cannot set the number of outputs of BasePlugin");}
    })
    Object.defineProperty(this,"numParameters",{
        get: function() {return _parameters.length;},
        set: function() {console.error("Cannot set the number of parameters of BasePlugin");}
    })
    
     Object.defineProperty(this,"inputs",{
        get: function(index) {return _inputList;},
        set: function() {console.error("Illegal attempt to modify BasePlugin");}
    })
    
    Object.defineProperty(this,"outputs",{
        get: function(index) {return _outputList;},
        set: function() {console.error("Illegal attempt to modify BasePlugin");}
    })
    
    Object.defineProperty(this,"parameters",{
        get: function(index) {return _parameters;},
        set: function() {console.error("Illegal attempt to modify BasePlugin");}
    })
}

VolumeControlGUI.prototype = new BasePlugin(context);
VolumeControlGUI.prototype.constructor = VolumeControlGUI;