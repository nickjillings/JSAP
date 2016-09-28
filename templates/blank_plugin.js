var BlankPlugin = function (context, owner) {
    this.__proto__ = new BasePlugin(context, owner);

    /* USER MODIFIABLE BEGIN */

    /// IMPORTANT ///
    // Change this to the name of this object
    this.constructor = BlankPlugin;

    // Place your code between this line...

    // ... and this line!
    /* USER MODIFIABLE END */
    (function () {
        var i;
        for (i = 0; i < _outputList.length; i++) {
            var node = this.context.createAnalyser();
            _features.push(node);
            _outputList[i].connect(node);
        }
    })();
}
