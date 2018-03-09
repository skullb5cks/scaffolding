const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, '../issue-interfaces/src/main/webapp/WEB-INF/resources/js/app'),
        filename: 'index.js',
        sourceMapFilename: 'index.map'
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, use: 'babel-loader' },
            { test: /\.css$/, use: [ 'style-loader', 'css-loader' ]},
            { test: /\.(png|jpg|gif)$/, use: [{
                loader: 'file-loader',
                options: {
                    outputPath: '../../images/test__',
                    name: '[name].[ext]?[hash]'
                }
            }]},
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader',]
                })
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new ExtractTextPlugin('../../css/test__/style.css')
    ]
};
