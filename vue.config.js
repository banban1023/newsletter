const { defineConfig } = require('@vue/cli-service')
const path = require('path');
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      less: {
        additionalData: `@import "${path.resolve(__dirname, 'src/styles/styles.less')}";`
      }
    }
  }
})
