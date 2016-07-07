var AmplitudeModulator = function() {
    var _inputList = [];
    var _outputList = [];
    var _parameters = [];
    
    /* USER MODIFIABLE BEGIN */
    // Place your code between these lines
    
    _inputList[0] = _outputList[0] = this.context.createGain();
    
    var osc = this.context.createOscillator();
    var mag = this.context.createGain();
    osc.connect(mag);
    mag.connect(_inputList[0].gain);
    
    _parameters[0] = new PluginParameter(1,"Number","Frequency",0,100);
    _parameters[1] = new PluginParameter(0,"Number","Depth",0,1);
    
    _parameters[0].bindToAudioParam(osc.frequency);
    _parameters[1].bindToAudioParam(mag.gain);
    
    osc.start();
    
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

AmplitudeModulator.prototype = new BasePlugin(context);
AmplitudeModulator.prototype.constructor = AmplitudeModulator;