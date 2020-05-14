/**
 * @author wu xingtgao
 * @date 2019/10/7
 * @Description:common webpack config
 */
'use strict';
const path = require('path');
// plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 判断运行环境 [production|development]
const isProd = process.env.NODE_ENV === 'production';
const configResolve = require('../config/resolve.js');

module.exports = {
    mode: isProd ? 'production' : 'development',
    entry: {
        index: path.resolve(__dirname, '../../src/index.js')
    },
    //[name].[chunkhash:8].js
    output: {
        path: path.resolve(__dirname, '../../dist'),
        filename: isProd ? '[name].bundle.[hash:8].js' : '[name].bundle.js',
        chunkFilename: isProd ? 'common.[name].[hash:8].js' : 'common.[name].js',
        publicPath: '/'
    },
    resolve: configResolve.getResolve(),
    plugins: [
        new HtmlWebpackPlugin({
            chunks: ['index'],
            title: 'title',
            template: './src/index.html',
            filename: 'index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.(scss|sass)?$/,
                loader: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.less$/,
                loader: ['css-loader', 'less-loader']
            },
            {
                test: /\.css$/,
                loader: ['style-loader','css-loader']
            },
            //字体图标处理,url-loader,file-loader
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        name: '/fonts/[name].[ext]',
                        publicPath: isProd ? './' : '/dist',
                        outputPath: '/'
                    }
                }]
            }, {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000
                }
            }
        ]
    }
};
