'use strict';

const products = [
  {
    id: '1',
    name: '商品1',
    priceInCent: 8600, // 分
  },
  {
    id: '2',
    name: '商品2',
    priceInCent: 5600, // 分
  },
  {
    id: '3',
    name: '商品3',
    priceInCent: 4600, // 分
  },
];

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
