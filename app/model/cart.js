'use strict';

const carts = [{
  id: '1',
  userId: '1',
  products: [
    {
      productId: '1',
      amount: 2,
    },
  ],
}];

class CartModel {
  async list() {
    return carts;
  }
  async addOne(cart) {
    if (!cart.id && !cart.name) {
      throw Error('invalid cart');
    }
    carts.push(cart);
    return carts;
  }
  async getOneById(id) {
    const cart = carts.find(c => c.id === id);
    return cart;
  }
  async getOneByUserId(userId) {
    const found = carts.find(c => c.userId === userId);
    if (found) return found;
    const newCart = {
      userId,
      products: [],
    };
    carts.push(newCart);
    return newCart;
  }
  async addProductToCart(userId, productId, amount) {
    const userCart = await this.getOneByUserId(userId);
    const found = userCart.products.find(i => i.productId === productId);
    if (found) {
      found.amount += amount;
    } else {
      userCart.products.push({
        productId,
        amount,
      });
    }
    return userCart;
  }
  async removeProductToCart(userId, productId) {
    const userCarts = await this.getOneByUserId(userId);
    const index = userCarts.products.findIndex(i => i.productId === productId);
    if (index > -1) {
      userCarts.products.splice(index, 1);
    }
  }
}

module.exports = CartModel;
