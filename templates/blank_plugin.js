var BlankPlugin = function() {
    var _inputList = [];
    var _outputList = [];
    var _parameters = [];
    var _features = [];
    
    /* USER MODIFIABLE BEGIN */
    // Place your code between these lines
    
    /* USER MODIFIABLE END */
    {
        var i;
        for (i=0; i<_outputList.length; i++) {
            var node = this.context.createAnalyser();
            _features.push(node);
            _outputList[i].connect(node);
        }
    }
    
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
    
    Object.defineProperty(this,"features",{
        get: function(index) {return _features;},
        set: function() {console.error("Illegal attempt to modify BasePlugin");}
    })
    
    Object.defineProperty(this,"parameters",{
        get: function(index) {return _parameters;},
        set: function() {console.error("Illegal attempt to modify BasePlugin");}
    })
}

BlankPlugin.prototype = new BasePlugin(context);
BlankPlugin.prototype.constructor = BlankPlugin;