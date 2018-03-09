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
        },
        port: 9000
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, use: ['babel-loader', 'eslint-loader'] },
            { test: /\.css$/, use: [ 'style-loader', 'css-loader' ]},
            { test: /\.scss$/, use: [ 'style-loader', 'css-loader', 'sass-loader']},
            { test: /\.(png|jpg|gif)$/, use: 'file-loader'},
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(), // Enable HMR
        new webpack.NamedModulesPlugin()
    ],
    node: {
        fs: 'empty' // avoids error messages 
    }
};
