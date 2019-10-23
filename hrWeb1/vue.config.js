const path = require('path');

function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    publicPath: './',
    lintOnSave: true,
    devServer: {
        port: 8080,
        host: 'localhost',
        https: false,
        open: true,
        proxy: {
            '/api': {
                target: process.env.VUE_APP_SECRET + 'consumertest/', // target host
                ws: true, // proxy websockets
                changeOrigin: true, // needed for virtual hosted sites
                pathRewrite: {
                    '^/api': '' // rewrite path
                }
            },
        }
    },
    chainWebpack: (config) => {
        config.resolve.alias
            .set('@', resolve('src'))
            .set('assets', resolve('src/assets'))
            .set('components', resolve('src/components'))
            .set('utils', resolve('src/utils'))
            .set('apis', resolve('src/apis'))
            .set('store', resolve('src/store'))
            .set('theme', resolve('src/theme'))
    }
}
