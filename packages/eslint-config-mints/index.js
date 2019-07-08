module.exports = {
  root: true,

  parser: 'babel-eslint',

  extends: [
    './rules/possible-errors',
    './rules/best-practices',
    './rules/strict',
    './rules/variables',
    './rules/node',
    './rules/style',
    './rules/es6'
  ].map(require.resolve),

  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },

  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },

  globals: {
    window: true,
    document: true,
  },
};
