/**
 * @author wu xingtgao
 * @date 2019/10/7
 * @Description: dev webpack config
 */
'use strict';
const base = require('./webpack.base.conf');
const merge = require('webpack-merge');
const devConfig = require('../config/index').dev;

module.exports = merge(base, {
    devServer: {
        host: devConfig.host,
        port: devConfig.port,
        open: devConfig.autoOpenBrowser,
        proxy: devConfig.proxy
    },
    devtool: 'cheap-module-eval-source-map'
});

/* json-server data */
