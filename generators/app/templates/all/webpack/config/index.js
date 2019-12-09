/**
 * @author wu xingtgao
 * @date 2019/10/7
 * @Description: webpack base config list
 */

module.exports = {
    dev: {
        host: 'localhost',
        port: 3000,
        contentBase: './dist',
        autoOpenBrowser: true,
        baseUrl: '/api', // proxyTable request host
        requestType: 'GET',
        proxy: {
            '/api': {
                target: 'http://localhost:3001',
                changeOrigin: true,
                secure: false,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
};