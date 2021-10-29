const path = require("path");

module.exports = {
    entry: "./src/index.ts",
    output: {
        library: "jsap",
        libraryTarget: "umd",
        globalObject: 'this',
        filename: "index.js",
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'source-map',
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
};
