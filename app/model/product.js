'use strict';

const uuid = require('uuid/v4');

module.exports = app => {
  const { UUID, STRING, INTEGER } = app.Sequelize;

  const Product = app.model.define('product', {
    id: { type: UUID, primaryKey: true },
    name: { type: STRING, unique: true },
    priceInCent: { type: INTEGER, min: 0 },
  });
  Product.sync()
    .catch(e => {
      app.logger.error('error syncing sequelize model', {
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
    const created = Product
      .create(toCreate)
      .catch(e => {
        app.logger.error(e.errors);
      });
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
