const eslintConfig = {
  parser: 'babel-eslint',

  env: {
    jest: true,
  },

  globals: {
    window: true,
    document: true,
  },

  extends: './packages/eslint-config-mints/index.js',

  rules: {
    'no-console': 0,
    'global-require': 0,
  }
};

module.exports = eslintConfig;
