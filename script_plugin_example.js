var BlankPlugin = function() {
    var _inputList = [];
    var _outputList = [];
    var _parameters = [];
    
    /* USER MODIFIABLE BEGIN */
    // Place your code between these lines
    
    // This example creates an empty DSP module plugin
    var node = this.context.createScriptProcessor(1024,2,2);
    var i = 0;
    
    // First, create the gain parameter;
    var gainParam = new PluginParameter(1,"Number","Volume",0,2);
    _parameters.push(gainParam);
    
    node.onaudioprocess = function(event) {
        // Place your custom, JS here.
        var gain = gainParam.value;
        for(var c=0; c<event.inputBuffer.numberOfChannels; c++)
        {
            var inputArray = event.inputBuffer.getChannelData(c);
            var outputArray = event.outputBuffer.getChannelData(c);
            for(var n=0; n<inputArray.length; n++) {
                outputArray[n] = inputArray[n] * gain;
            }
        }
    }
    
    _inputList[0] = node;
    _outputList[0] = node;
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

BlankPlugin.prototype = new BasePlugin(context);
BlankPlugin.prototype.name = "BlankPluginScript";
BlankPlugin.prototype.constructor = BlankPlugin;