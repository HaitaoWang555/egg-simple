'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1549946521296_4576';

  // add your config here
  config.middleware = [];

  // post csrf
  config.security = {
    csrf: {
      enable: false,
    },
  };
  config.sequelize = {
    dialect: 'postgres',
    database: 'egg-example',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 123456,
  };
  config.onerror = {
    json(err, ctx) {
      const { code, httpStatusCode, httpMsg } = err;
      if (httpStatusCode) ctx.statusCode = httpStatusCode;
      ctx.body = {
        code,
        msg: httpMsg,
      };
    },
    html(err, ctx) {
      const { code, httpStatusCode, httpMsg } = err;
      if (httpStatusCode) ctx.statusCode = httpStatusCode;
      ctx.body = `<h3>${httpMsg}</h3>`;
      ctx.code = code;
    },
  };
  return config;
};
