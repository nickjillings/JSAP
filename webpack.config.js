const path = require("path");

module.exports = {
    entry: "./src/module.js",
    output: {
        filename: "./JSAP.js",
        path: path.resolve(__dirname, ''),
        library: "JSAP"
    },
    devtool: 'inline-source-map',
    resolve: {
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"],
    },
    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
            { test: /\.tsx?$/, loader: "ts-loader" },
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { test: /\.js$/, loader: "source-map-loader" },
        ],
    },
    mode: "development",
    watch: true
};
