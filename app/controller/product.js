'use strict';

const { Controller } = require('egg');

class ProductController extends Controller {
  async index() {
    const products = await this.ctx.model.product.list();
    this.ctx.body = {
      products,
    };
  }
  async addProduct() {
    const { product } = this.ctx.request.body;
    const products = await this.ctx.model.product.addOne(product);
    this.ctx.body = {
      products,
    };
  }
  async getOneProduct() {
    const { id } = this.ctx.query;
    const product = await this.ctx.model.product.getOneById(id);
    this.ctx.body = {
      product,
    };
  }
}

module.exports = ProductController;
