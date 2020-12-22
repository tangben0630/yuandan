class BooksController {
  constructor() {

  }
  async actionIndex(ctx, next) {
    ctx.body = {
      'data': 'list'
    }
    await next()
  }
}


module.exports = BooksController