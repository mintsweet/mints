module.exports = {
  env: {
    node: true
  },

  rules: {
    // enforce return after callback
    // https://eslint.org/docs/rules/callback-return
    'callback-return': 'off',

    // enforce require() on the top-level module scope
    // https://eslint.org/docs/rules/global-require
    'global-require': 'error',

    // enforce callback error handling
    // https://eslint.org/docs/rules/handle-callback-err
    'handle-callback-err': 'error',

    // disallow use of the Buffer() constructor
    // https://eslint.org/docs/rules/no-buffer-constructor
    'no-buffer-constructor': 'error',

    // disallow require calls to be mixed with regular variable declarations
    // https://eslint.org/docs/rules/no-mixed-requires
    'no-mixed-requires': ['off', false],

    // disallow new require
    // https://eslint.org/docs/rules/no-new-require
    'no-new-require': 'error',

    // disallow string concatenation when using __dirname and __filename
    // https://eslint.org/docs/rules/no-path-concat
    'no-path-concat': 'error',

    // disallow process.env
    // https://eslint.org/docs/rules/no-process-env
    'no-process-env': 'off',

    // disallow process.exit()
    // https://eslint.org/docs/rules/no-process-exit
    'no-process.exit': 'off',
    
    // disallow Node.js modules
    // https://eslint.org/docs/rules/no-restricted-modules
    'no-restricted-modules': 'off',

    // disallow synchronous methods
    // https://eslint.org/docs/rules/no-sync
    'no-sync': 'off'
  }
}