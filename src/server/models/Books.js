

/**
 * @fileoverview 实现Books数据模型
 * @author tangben
 * @class Books
 */
class Books {
  /**
   * Creates an instance of Books.
   * @param {*} app
   * @memberof Books
   */
  constructor(app) {
    this.app = app
  }
  getData(opts) {
    return Promise.resolve('getdata')
  }
}
module.exports = Books