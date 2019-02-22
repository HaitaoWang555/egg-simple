'use strict';

const { app, assert, mock } = require('egg-mock/bootstrap');

describe('test/app/controller/product.test.js', () => {

  let app;
  before(() => {
    // 创建当前应用的 app 实例
    app = mock.app();
    // 等待 app 启动成功，才能执行测试用例
    return app.ready();
  });

  let ctx;
  beforeEach(() => {
    ctx = app.mockContext();
  });

  it('should addProduct', async () => {
    await app.httpRequest()
      .post('/product/addProduct', {
        name: 'aaa',
        priceInCent: 4589,
      })
      .expect(200);
  });
});
