// const path = require('path')

// module.exports = {
//     entry: './src/index.js',
//     output: {
//         path: path.resolve(__dirname, 'dist', 'js'),
//         filename: 'index.bundle.js',
//     },
//     module: {
//         // loaders: [
//         //     {
//         //         exclude: /node_modules/,
//         //         loader: 'babel-loader',
//         //     },
//         // ],
//         rules: [
//             {
//                 test: /\.(js)$/,
//                 exclude: /node_modules/,
//                 use: ['babel-loader'],
//             },
//         ],
//     },
// }

const path = require('path')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
        ],
    },
    target: 'node',
    mode: 'production',
}
