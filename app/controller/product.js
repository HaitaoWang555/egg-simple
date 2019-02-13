'use strict';

const { Controller } = require('egg');

const products = [];

class ProductController extends Controller {
  async index() {
    this.ctx.body = {
      products,
    };
  }
  async addProduct() {
    const { product } = this.ctx.request.body;
    if (product) {
      products.push(product);
    }
    this.ctx.body = {
      product,
    };
  }
  async getOneProduct() {
    const { id } = this.ctx.query;
    const product = products.find(p => p.id === id);
    this.ctx.body = {
      product,
    };
  }
}

module.exports = ProductController;
