'use strict';

const path = require('path');

module.exports = app => {
  const mpdelPaths = app.loader.getLoadUnits().map(unit => path.join(unit.path, 'app/model'));
  app.loader.loadToContext(mpdelPaths, 'model');
};
