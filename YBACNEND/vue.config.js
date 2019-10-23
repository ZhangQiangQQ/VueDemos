const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
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
          target: process.env.VUE_APP_SECRET + 'backtestbusiness/',
          ws: true, 
          changeOrigin: true, 
          pathRewrite: {
            '^/api': ''
          }
      },
    }
  },
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'))
      .set('theme', resolve('src/theme'));
  },
};
