const path = require('path');
function resolve (dir) {
    return path.join(__dirname, dir)
}
module.exports = {
  publicPath: './',
  lintOnSave: true,
  chainWebpack: (config) => {
      config.resolve.alias
        .set('@', resolve('src'))
        .set('assets',resolve('src/assets'))
        .set('components',resolve('src/components'))
        .set('utils',resolve('src/utils'))
        .set('apis',resolve('src/apis'))
        .set('store',resolve('src/store'))
        .set('theme',resolve('src/theme'))
  }
}