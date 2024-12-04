const path = require("path");
const webpack = require("webpack");
const nodeExternals = require("webpack-node-externals");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/index.js", // Entry point of your application
  target: "node", // Target environment (Node.js)
  externals: [nodeExternals()], // Exclude node_modules from bundling
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js", // Output filename
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"],
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.js(x?)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(), // Clean the dist folder before build
    new webpack.ProgressPlugin(),
  ],
};
