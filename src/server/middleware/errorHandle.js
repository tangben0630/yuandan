
module.exports = function (app) {
  return async function (ctx, next) {
    console.log('中间件 起作用了', ctx.url);
    await next()
    if (ctx.status == '404') {
      console.log(0);
      ctx.body = '你的页面404了'
    } else {
      return
    }
  }
}