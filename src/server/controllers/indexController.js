const Books = require('../models/Books.js')
class indexController {
  constructor() {

  }
  async actionIndex(ctx, next) {
    // const books = new Books()
    // const res = await books.getData()
    ctx.body = await ctx.render('index')
    await next()
  }
}


module.exports = indexController