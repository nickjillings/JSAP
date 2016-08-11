var BlankPlugin = function(owner) {
    var _inputList = [];
    var _outputList = [];
    var _parameters = [];
    var _features = [];
    var _owner = owner;
    /* USER MODIFIABLE BEGIN */
    // Place your code between these lines
    
    // This example creates an empty DSP module plugin
    var node = this.context.createScriptProcessor(256,2,2);
    node.onaudioprocess = function(event) {
        // Place your custom, JS here.
    }
    
    _inputList[0] = node;
    _outputList[0] = node;
    /* USER MODIFIABLE END */
    (function(){
        var i;
        for (i=0; i<_outputList.length; i++) {
            var node = this.context.createAnalyser();
            _features.push(node);
            _outputList[i].connect(node);
        }
    })();
    
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
    
    Object.defineProperty(this, "owner", {
        get: function() {return _owner;},
        set: function(owner) {
            if (typeof owner == "object") {
                _owner = owner;
            }
            return _owner;
        }
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
}

BlankPlugin.prototype = new BasePlugin(context);
BlankPlugin.prototype.name = "BlankPlugin";
BlankPlugin.prototype.constructor = BlankPlugin;