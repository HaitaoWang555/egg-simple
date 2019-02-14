'use strict';

const carts = [{
  id: '1',
  userId: '1',
  produts: [
    {
      produtId: '1',
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
  // TODO
}

module.exports = CartModel;
