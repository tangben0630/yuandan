const BooksController = require('./booksController')
const IndexController = require('./indexController')
const router = require('koa-simple-router')



const books = new BooksController()
const index = new IndexController()

module.exports = app => {
  app.use(router(_ => {
    _.get('/', index.actionIndex)
    _.get('/list', books.actionIndex)
  }))
}