/*globals BasePlugin */
/*
    BlankPlugin
*/
var BlankPlugin = function (factory, owner) {
    /* 
        Each plugin is passed two arguments on construction:
            1 - > Factory: The factory that built this plugin
            2 - > Owner: The SubFactory that this plugin is registered too (if given)
    */

    // This attaches the base plugin items to the Object
    BasePlugin.call(this, factory, owner);

    /* USER MODIFIABLE BEGIN */
    // Only modify between this line and the end of the object!


    /* USER MODIFIABLE END */
};

// Also update the prototype function here!
BlankPlugin.prototype = Object.create(BasePlugin.prototype);
BlankPlugin.prototype.constructor = BlankPlugin;
BlankPlugin.prototype.name = "BlankPlugin";
BlankPlugin.prototype.version = "0.0.0";
BlankPlugin.prototype.uniqueID = "0000";
