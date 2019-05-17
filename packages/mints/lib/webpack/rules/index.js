const eslintRule = require('./eslint');
const jsRule = require('./js');
const cssRule = require('./css');
const lessRule = require('./less');
const urlRule = require('./url');

module.exports = {
  eslint: eslintRule,
  js: jsRule,
  css: cssRule,
  less: lessRule,
  url: urlRule,
};
