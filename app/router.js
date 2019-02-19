'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/product', controller.product.index);
  router.post('/product/addProduct', controller.product.addProduct);
  router.get('/product/getOneProduct', controller.product.getOneProduct);
  router.get('/cart', controller.cart.index);
  router.post('/cart/addProductToCart', controller.cart.addProductToCart);
};
