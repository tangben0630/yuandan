const koa = require('koa')
const render = require('koa-swig')
const path = require('path')
const { port, viewDir, staticDir } = require('../../config')
const app = new koa()
const co = require('co')
const router = require('./controllers')
const static = require('koa-static')
const errFn = require('./middleware/errorHandle')
app.use(static(staticDir))
app.use(errFn())
console.log(errFn, '====');
router(app)
app.context.render = co.wrap(render({
  root: viewDir,
  cache: 'memory',
  ext: 'html',
  writeBody: false
}))
app.listen(port, () => {
})
