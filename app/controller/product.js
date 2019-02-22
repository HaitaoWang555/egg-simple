'use strict';

const { Controller } = require('egg');

class ProductController extends Controller {
  async index() {
    const products = await this.ctx.model.Product.list();
    this.ctx.body = {
      products,
    };
  }
  async addProduct() {
    const { product } = this.ctx.request.body;
    const created = await this.ctx.model.Product.addOne(product);
    this.ctx.body = {
      products: created,
    };
  }
  async getOneProduct() {
    const { id } = this.ctx.query;
    const product = await this.ctx.model.Product.getOneById(id);
    this.ctx.body = {
      product,
    };
  }
}

module.exports = ProductController;
