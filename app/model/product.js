'use strict';

const products = [];

class ProductModel {
  async list() {
    return products;
  }
  async addOne(product) {
    if (!product.id && !product.name) {
      throw Error('invalid product');
    }
    products.push(product);
    return products;
  }
  async getOneById(id) {
    const product = products.find(p => p.id === id);
    return product;
  }
}

module.exports = ProductModel;
