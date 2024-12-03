const { merge } = require('webpack-merge')
const common = require('./webpack.config.js')

module.exports = merge(common, {
    mode: 'development',
    devtool: 'source-map', // Helps in debugging (source maps)
    watch: true, // Watch files for changes
})
