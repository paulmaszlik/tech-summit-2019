const slsw = require("serverless-webpack");
const path = require("path");

module.exports = {
    entry: slsw.lib.entries,
    target: "node",
    mode: slsw.lib.webpack.isLocal ? "development" : "production",
    optimization: {
        minimize: false
    },
    output: {
        libraryTarget: "commonjs",
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js"
    },
    performance: {
        hints: false
    }
};
