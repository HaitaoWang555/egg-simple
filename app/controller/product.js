'use strict';

const { Controller } = require('egg');

const ProductModel = require('../model/product');
const productModel = new ProductModel();

class ProductController extends Controller {
  async index() {
    const products = await productModel.list();
    this.ctx.body = {
      products,
    };
  }
  async addProduct() {
    const { product } = this.ctx.request.body;
    const products = await productModel.addOne(product);
    this.ctx.body = {
      products,
    };
  }
  async getOneProduct() {
    const { id } = this.ctx.query;
    const product = await productModel.getOneById(id);
    this.ctx.body = {
      product,
    };
  }
}

module.exports = ProductController;
