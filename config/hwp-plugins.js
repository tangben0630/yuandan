const hwp = require('html-webpack-plugin')
let jsArr = []
class MyPlugin {
  apply(compier) {
    compier.hooks.compilation.tap('MyPlugin', (compilation) => {
      console.log('插件有在运行');
      hwp.getHooks(compilation).beforeAssetTagGeneration.tapAsync(
        'MyPlugin',
        (data, cb) => {
          jsArr = data.assets.js

          cb(null, data)
        }
      )
      hwp.getHooks(compilation).beforeEmit.tapAsync(
        'MyPlugin',
        (data, cb) => {
          jsArr = jsArr.map(el => `<script src=${el}></script>`)
          console.log(jsArr, '====9999');
          let html = data.html
          html = html.replace('<!--aaa-->', jsArr.join(''))
          html = html.replace(/@com/g, '../../../components')
          html = html.replace(/@lay/g, '../../layouts')
          data.html = html
          cb(null, data)
        }
      )
    })
  }
}

module.exports = MyPlugin