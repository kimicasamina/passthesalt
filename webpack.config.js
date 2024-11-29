const path = require("path");


module.exports = {
    entry: "./src/index.js",
    module: {
        rules: [
        {
            test: /\.(js)$/,
            exclude: /node_modules/,
            use: ["babel-loader"],
        },
        ],
    },
    resolve: {
        extensions:[".*",".js"],
        fallback: { "path": false }
    },
    output: {
        path: path.resolve(__dirname, "dist", "js"),
        // publicPath: "/",
        filename: "index.bundle.js",
    },
    stats: {
        colors: true,
    },
    mode: "development",
    devtool: "source-map",
};