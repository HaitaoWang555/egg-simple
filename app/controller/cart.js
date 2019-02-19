'use strict';

const { Controller } = require('egg');

class CartController extends Controller {
  async index() {
    const carts = await this.ctx.model.cart.list();
    this.ctx.body = {
      carts,
    };
  }
  async addProductToCart() {
    const {
      userId,
      productId,
      amount,
    } = this.ctx.request.body;
    const carts = await this.ctx.service.cart.addProductToCart(userId, productId, amount);
    this.ctx.body = {
      carts,
    };
  }
}

module.exports = CartController;
