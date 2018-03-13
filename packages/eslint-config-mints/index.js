module.exports = {
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
    ecmaVersion: 2017,
    sourceType: 'module'
  }
};
