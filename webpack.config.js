const path = require("path");

module.exports = {
    entry: "./src/plugin-factory.js",
    output: {
        filename: "jsap.js",
        path: path.resolve(__dirname, ''),
        library: "JSAP"
    },
    devtool: 'inline-source-map',
    mode: "production"
};
