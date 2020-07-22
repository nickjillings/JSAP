const path = require("path");

module.exports = {
    entry: "./src/module.js",
    output: {
        filename: "JSAP.js",
        path: path.resolve(__dirname, ''),
        library: "JSAP"
    },
    devtool: 'inline-source-map',
    mode: "development",
    watch: true
};
