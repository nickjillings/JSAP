/* jshint esversion: 6 */

export default function MidiSynthesisInstance(synthNode) {
    var _out = plugin_node.context.createGain();
    synthNode.getOutputs()[0].connect(_out);

    this.destroy = function () {
        synthNode.destroy();
    };

    Object.defineProperties(this, {
        'node': {
            'value': synthNode
        },
        'output': {
            'get': function () {
                return _out;
            }
        },
    });
}
