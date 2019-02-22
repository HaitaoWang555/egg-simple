'use strict';

const uuid = require('uuid/v4');

module.exports = app => {
  const { UUID, STRING, INTEGER, DATE } = app.Sequelize;

  const Product = app.model.define('product', {
    id: { type: UUID, primaryKey: true },
    name: STRING,
    priceInCent: { type: INTEGER, min: 0 },
    created_at: DATE,
    updated_at: DATE,
  });
  Product.sync()
    .catch(e => {
      app.loggers.appLogger.error('error syncing sequelize model', {
        error: e,
        model: 'Product',
      });
    });

  Product.list = async (query = { limit: 10, offset: 0 }) => {
    const { limit, offset } = query;
    const products = await Product.findAll({
      limit,
      offset,
    });
    return products;
  };

  Product.addOne = async product => {
    const toCreate = Object.assign({}, product);
    toCreate.id = uuid();
    const created = Product.create(toCreate);
    return created;
  };

  Product.getOneById = async id => {
    const product = Product.findOne({
      where: {
        id,
      },
    });
    return product;
  };
  return Product;
};
