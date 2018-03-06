const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    devtool: 'cheap-module-source-map',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/assets/',
        sourceMapFilename: '[name].map'
    },
    devServer: {
        // hot: true, // Tell the dev-server we're using HMR
        hotOnly: true,
        contentBase: path.resolve(__dirname, './'),
        publicPath: '/assets/',
        proxy: {
            '/translate': 'http://127.0.0.1:3000/'
        }
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(), // Enable HMR
        new webpack.NamedModulesPlugin()
    ],
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
        ]
    },
    node: {
        fs: 'empty' // avoids error messages 
    }
};