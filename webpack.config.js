const argv = require('yargs-parser')(process.argv.slice(2))
const _config = require(`./config/webpack.${argv.mode}`)
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const hwp = require('html-webpack-plugin')
const glob = require('glob')
const path = require('path')
const plu = require('./config/hwp-plugins')
let _entry = {}
let _plugins = []
let files = glob.sync("./src/web/views/**/*.js")
files.forEach(el => {
  const arr = el.split('.js')[0].split('/')
  const key = arr[arr.length - 1]
  const [dist, template] = key.split('-')
  _plugins.push(new hwp({
    filename: `../views/${dist}/pages/${template}.html`,
    template: `./src/web/views/${dist}/pages/${template}.html`,
    inject: false
  }))
  _entry[key] = el
})
_plugins.push(new plu())
_plugins.push(new CleanWebpackPlugin())

const webpackConfig = {
  entry: _entry,
  output: {
    path: path.join(__dirname, './dist/assets'),
    filename: 'scripts/[name].bundle.js'
  },
  plugins: _plugins
}

module.exports = webpackConfig