var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');

module.exports = webpackMerge(commonConfig, {
    devtool: 'cheap-module-eval-source-map',

    output: {
        path: helpers.root('dist'),
        // publicPath: 'http://localhost:9292/',
        filename: '[name].js',
        chunkFilename: '[id].chunk.js'
    },

    plugins: [
        new ExtractTextPlugin('[name].css')
    ],

    debug: true,

    devServer: {
        historyApiFallback: true,
        stats: 'minimal',
        proxy: {
            '/authorize': {
                target: 'http://10.32.0.121',
                //target: 'http://127.0.0.1:9292',
                secure: false
            },
            '/api': {
                target: 'http://10.32.0.121',
                //target: 'http://127.0.0.1:9292',
                secure: false
            }
        }
    }
});
