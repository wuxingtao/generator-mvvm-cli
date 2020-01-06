/**
 * @author wu xingtgao
 * @date 2019/10/7
 * @Description: build webpack config
 */
'use strict';
const merge = require('webpack-merge');
const base = require('./webpack.base.conf');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(base, {
    plugins: [
        // new CleanWebpackPlugin(),
        // new ManifestPlugin({
        //     basePath: '',
        //     publicPath: ''
        // })
    ]
});
