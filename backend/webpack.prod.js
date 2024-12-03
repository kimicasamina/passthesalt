const { merge } = require('webpack-merge')
const common = require('./webpack.config.js')

module.exports = merge(common, {
    mode: 'production',
    optimization: {
        minimize: true, // Enable code minification
    },
    devtool: false, // Disable source maps in production for better performance
})
