const restrictedGlobals = require('eslint-restricted-globals');

module.exports = {
  rules: {
    // require or disallow initialization in variable declarations
    // https://eslint.org/docs/rules/init-declarations
    'init-declarations': 'off',

    // disallow shadowing of variables inside of catch
    // https://eslint.org/docs/rules/no-catch-shadow
    'no-catch-shadow': 'off',

    // disallow deleting variables
    // https://eslint.org/docs/rules/no-delete-var
    'no-delete-var': 'error',

    // disallow labels that are variables names
    // https://eslint.org/docs/rules/no-label-var
    'no-label-var': 'error',

    // disallow specific global variables
    // https://eslint.org/docs/rules/no-restricted-globals
    'no-restricted-globals': ['error', 'isFinite'].concat(restrictedGlobals),

    // disallow variable declarations from shadowing variables declared in the outer scope
    // https://eslint.org/docs/rules/no-shadow
    'no-shadow': ['off', {
      builtinGlobals: true,
      hoist: 'all',
      allow: []
    }],

    // disallow shadowing of restricted names
    // https://eslint.org/docs/rules/no-shadow-restricted-names
    'no-shadow-restricted-names': 'error',

    // disallow Undeclared Variables
    // https://eslint.org/docs/rules/no-undef
    'no-undef': ['error', { typeof: true }],

    // disallow Initializing to undefined
    // https://eslint.org/docs/rules/no-undef-init
    'no-undef-init': 'error',

    // disallow use of undefined variable
    // https://eslint.org/docs/rules/no-undefined
    'no-undefined': 'error',

    // disallow unused variables
    // https://eslint.org/docs/rules/no-unused-vars
    'no-unused-vars': ['error', {
      vars: 'all',
      args: 'after-used',
      ignoreRestSiblings: true
    }],

    // disallow Early Use
    // https://eslint.org/docs/rules/no-use-before-define
    'no-use-before-define': ['error', {
      functions: true,
      classes: true,
      variables: true
    }]
  }
};
