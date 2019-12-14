const path = require('path')
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const webpack = require('webpack')
const webpackBase = require('./webpack.config.base')
const { smart } = require('webpack-merge')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');


module.exports = smart(webpackBase, {
    mode: 'production',
    optimization: {
        minimize: true,
        minimizer: [
            // new TerserJSPlugin({
            //     exclude: /node_modules/
            // }),
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    plugins:[
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns:[path.resolve(__dirname, './build')]
        }),
        new webpack.DllReferencePlugin({
            context: path.join(__dirname),
            manifest: require('./build/vendor-manifest.json'),
          }),
          new AddAssetHtmlPlugin({
            filepath: path.resolve(__dirname, './build/*.dll.js'),
          }),
    ]
})