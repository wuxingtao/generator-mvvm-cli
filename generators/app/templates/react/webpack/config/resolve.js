/**
 * @author wu xingtgao
 * @date 2019-06-13
 * @Description: webpack resolve config
 */

const path = require('path');

const resolveConfig = {
    alias: {
        '@': path.resolve(__dirname, '../../src'),
        '@assets': path.resolve(__dirname, '../../ASSETS'),
        '@build': path.resolve(__dirname, '../../build')
    },
    extensions:['.js','.jsx','.ts','.tsx','.json']
};

exports.getResolve = function () {
    return resolveConfig;
};
