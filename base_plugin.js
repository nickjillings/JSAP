// This should simply define the BasePlugin from which custom plugins can be built from
var BasePlugin = function(context) {
    this.context = context;
}

BasePlugin.prototype.connect = function(dest) {
    this.outputs[0].connect(dest.inpt ? dest.input : dest);
}

BasePlugin.prototype.disconnect = function(dest) {
    if (dest == undefined) {
        this.outputs[0].disconnect();
    } else {
        this.outputs[0].disconnect(dest.input ? dest.input : dest);
    }
}

BasePlugin.prototype.getParameterNames = function() {
    var names = [];
    for (var param of this.parameters) {
        names.push(param.name);
    }
    return names;
}

BasePlugin.prototype.getParameterByName = function(name) {
    for (var param of this.parameters) {
        if (name == param.name) {return param;}
    }
    console.error("No Parameter called "+name);
    return null;
}

BasePlugin.prototype.setParameterByName = function(name,value) {
    var parameter = this.getParameterByName(name);
    if (parameter != null) {
        parameter.value = value;
    }
}

var PluginParameter = function(defaultValue,dataType,name,minimum,maximum) {
    /* Plugin Private Variables
          These are accessed by the public facing getter/setter
    */
    
    if (arguments.length < 2) {
        console.error("INVALID PARAMETERS: Must always define defaultValue, dataType and name");
        return;
    }
    
    //The data type of the parameter
    var _dataType = dataType;
    
    //The minimum inclusive value, if the requested value < this, value == this
    var _minimum = minimum;
    
    //The maximum inclusive value, if the requested value > this, value == this
    var _maximum = maximum;
    
    //The value to be used / changed by the plugin.
    var _value = defaultValue;
    
    //The default value to initialise to
    var _default = defaultValue;
    
    //The name of the parameter
    var _name = name;
    
    var boundParam;
    
    this.bindToAudioParam = function(AudioParameterNode) {
        boundParam = AudioParameterNode;
        update();
    }
    
    var update = function() {
        if (boundParam) {
            boundParam.value = _value;
        }
    }
    
    // Public facing getter/setter to preserve the plugin parameter mappings
    Object.defineProperty(this, "dataType",{
        get: function() {return _dataType;},
        set: function() {
            console.error("Cannot set the dataType of PluginParameter");
        }
    });
    
    Object.defineProperty(this, "minimum",{
        get: function() {return _minimum;},
        set: function() {
            console.error("Cannot set the minimum value of PluginParameter");
        }
    });
    
    Object.defineProperty(this, "maximum",{
        get: function() {return _maximum;},
        set: function() {
            console.error("Cannot set the maximum value of PluginParameter");
        }
    });
    
    Object.defineProperty(this, "default",{
        get: function() {return _default;},
        set: function() {
            console.error("Cannot set the default value of PluginParameter");
        }
    });
    
    Object.defineProperty(this, "name",{
        get: function() {return _name;},
        set: function() {
            console.error("Cannot set the name of PluginParameter");
        }
    });
    
    Object.defineProperty(this, "value",{
        get: function() {
            if (boundParam) {
                _value = boundParam.value;
            }
            return _value;
        },
        set: function(newValue) {
            if (newValue >= _maximum && _maximum != undefined) {newValue == _maximum;}
            else if (newValue <= _minimum && _minimum != undefined) {newValue == _minimum;}
            _value = newValue;
            update();
        }
    });
}