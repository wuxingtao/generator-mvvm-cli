/**
 * @author wu xingtgao
 * @date 2019-06-13
 * @Description: webpack resolve config
 */

const path = require('path');

const resolveConfig = {
    alias: {
        '@src': path.resolve(__dirname, '../../src'),
        '@assets': path.resolve(__dirname, '../../ASSETS'),
        '@build': path.resolve(__dirname, '../../build')
    }
};

exports.getResolve = function () {
    return resolveConfig;
};
