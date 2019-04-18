module.exports = {
  rules: {
    // enforces getter/setter pairs in objects
    // https://eslint.org/docs/rules/accessor-pairs
    'accessor-pairs': 'off',

    // enforces return statements in callbacks of array's methods
    // https://eslint.org/docs/rules/array-callback-return
    'array-callback-return': ['error', { allowImplicit: true }],

    // treat var statements as if they were block scoped
    // https://eslint.org/docs/rules/block-scoped-var
    'block-scoped-var': 'error',

    // enforce that class methods utilize this
    // https://eslint.org/docs/rules/class-methods-use-this
    'class-methods-use-this': ['off', { exceptMethods: [] }],

    // specify the maximum cyclomatic complexity allowed in a program
    // https://eslint.org/docs/rules/complexity
    complexity: ['off', 6],

    // require return statements to either always or never specify values
    // https://eslint.org/docs/rules/consistent-return
    'consistent-return': ['off', { treatUndefinedAsUnspecified: true }],

    // specify curly brace conventions for all control statements
    // https://eslint.org/docs/rules/curly
    curly: ['warn', 'multi-line'],

    // require default case in switch statements
    // https://eslint.org/docs/rules/default-case
    'default-case': ['error', { commentPattern: '^no default$' }],

    // enforce newline before and after dot
    // https://eslint.org/docs/rules/dot-location
    'dot-location': ['error', 'property'],

    // require dot notation
    // https://eslint.org/docs/rules/dot-notation
    'dot-notation': 'error',

    // require === and !==
    // https://eslint.org/docs/rules/eqeqeq
    eqeqeq: ['error', 'always'],

    // require guarding for-in
    // https://eslint.org/docs/rules/guard-for-in
    'guard-for-in': 'error',

    // disallow use of alert
    // https://eslint.org/docs/rules/no-alert
    'no-alert': 'error',

    // disallow use of caller/callee
    // https://eslint.org/docs/rules/no-caller
    'no-caller': 'error',

    // disallow lexical declarations in case/default clauses
    // https://eslint.org/docs/rules/no-case-declarations
    'no-case-declarations': 'error',

    // disallow egular expressions that look like division
    // https://eslint.org/docs/rules/no-div-regex
    'no-div-regex': 'off',

    // disallow return before else
    // https://eslint.org/docs/rules/no-else-return
    'no-else-return': ['off', { allowElseIf: false }],

    // disallow empty functions
    // https://eslint.org/docs/rules/no-empty-function
    'no-empty-function': ['error', {
      allow: [
        'arrowFunctions',
        'functions',
        'methods',
      ]
    }],

    // disallow empty destructuring patterns
    // https://eslint.org/docs/rules/no-empty-pattern
    'no-empty-pattern': 'error',

    // disallow empty destructuring patterns
    // https://eslint.org/docs/rules/no-eq-null
    'no-eq-null': 'off',

    // disallow eval()
    // https://eslint.org/docs/rules/no-eval
    'no-eval': 'error',

    // disallow extending of native objects
    // https://eslint.org/docs/rules/no-extend-native
    'no-extend-native': 'warn',

    // disallow unnecessary function binding
    // https://eslint.org/docs/rules/no-extra-bind
    'no-extra-bind': 'warn',

    // disallow Unnecessary labels
    // https://eslint.org/docs/rules/no-extra-label
    'no-extra-label': 'warn',

    // disallow fallthrough of case statements
    // https://eslint.org/docs/rules/no-fallthrough
    'no-fallthrough': 'error',

    // disallow the use of leading or trailing decimal points in numeric literals
    // https://eslint.org/docs/rules/no-floating-decimal
    'no-floating-decimal': 'warn',

    // disallow assignment to native objects or read-only global variables
    // https://eslint.org/docs/rules/no-global-assign
    'no-global-assign': ['error', { exceptions: [] }],

    // disallow the type conversion with shorter notations.
    // https://eslint.org/docs/rules/no-implicit-coercion
    'no-implicit-coercion': ['off', {
      boolean: false,
      number: true,
      string: true,
      allow: [],
    }],

    // disallow variable and function declarations in the global scope
    // https://eslint.org/docs/rules/no-implicit-globals
    'no-implicit-globals': 'off',

    // disallow Implied eval()
    // https://eslint.org/docs/rules/no-implied-eval
    'no-implied-eval': 'error',

    // disallow this keywords outside of classes or class-like objects
    // https://eslint.org/docs/rules/no-invalid-this
    'no-invalid-this': 'off',

    // disallow iterator
    // https://eslint.org/docs/rules/no-iterator
    'no-iterator': 'error',

    // disallow labeled statements
    // https://eslint.org/docs/rules/no-labels
    'no-labels': 'error',

    // Disallow unnecessary nested blocks
    // https://eslint.org/docs/rules/no-lone-blocks
    'no-lone-blocks': 'error',

    // disallow function in loops
    // https://eslint.org/docs/rules/no-loop-func
    'no-loop-func': 'error',

    // disallow magic numbers
    // https://eslint.org/docs/rules/no-magic-numbers
    'no-magic-numbers': ['off', {
      ignore: [],
      ignoreArrayIndexes: true,
      enforceConst: true,
      detectObjects: false,
    }],

    // disallow use of multiple spaces
    // https://eslint.org/docs/rules/no-multi-spaces
    'no-multi-spaces': 'warn',

    // disallow multiline strings
    // https://eslint.org/docs/rules/no-multi-str
    'no-multi-str': 'warn',

    // disallow new for side effects
    // https://eslint.org/docs/rules/no-new
    'no-new': 'error',

    // disallow function constructor
    // https://eslint.org/docs/rules/no-new-func
    'no-new-func': 'error',

    // disallow primitive wrapper instances
    // https://eslint.org/docs/rules/no-new-wrappers
    'no-new-wrappers': 'error',

    // disallow octal literals
    // https://eslint.org/docs/rules/no-octal
    'no-octal': 'error',

    // disallow octal escape sequences in string literals
    // https://eslint.org/docs/rules/no-octal-escape
    'no-octal-escape': 'error',

    // disallow reassignment of function parameters
    // https://eslint.org/docs/rules/no-param-reassign
    'no-param-reassign': ['off', {
      props: true,
      ignorePropertyModificationsFor: [
      ]
    }],

    // disallow use of __proto__
    // https://eslint.org/docs/rules/no-proto
    'no-proto': 'error',

    // disallow variable redeclaration
    // https://eslint.org/docs/rules/no-redeclare
    'no-redeclare': 'error',

    // disallow certain object properties
    // https://eslint.org/docs/rules/no-restricted-properties
    'no-restricted-properties': ['error', {
      object: 'arguments',
      property: 'callee',
      message: 'arguments.callee is deprecated',
    }, {
      object: 'global',
      property: 'isFinite',
      message: 'Please use Number.isFinite instead',
    }, {
      object: 'self',
      property: 'isFinite',
      message: 'Please use Number.isFinite instead',
    }, {
      object: 'window',
      property: 'isFinite',
      message: 'Please use Number.isFinite instead',
    }, {
      object: 'global',
      property: 'isNaN',
      message: 'Please use Number.isNaN instead',
    }, {
      object: 'self',
      property: 'isNaN',
      message: 'Please use Number.isNaN instead',
    }, {
      object: 'window',
      property: 'isNaN',
      message: 'Please use Number.isNaN instead',
    }, {
      property: '__defineGetter__',
      message: 'Please use Object.defineProperty instead.',
    }, {
      property: '__defineSetter__',
      message: 'Please use Object.defineProperty instead.',
    }, {
      object: 'Math',
      property: 'pow',
      message: 'Use the exponentiation operator (**) instead.',
    }],

    // disallow assignment in return statement
    // https://eslint.org/docs/rules/no-return-assign
    'no-return-assign': ['error', 'always'],

    // disallows unnecessary return await
    // https://eslint.org/docs/rules/no-return-await
    'no-return-await': 'warn',

    // disallow script urls
    // https://eslint.org/docs/rules/no-script-url
    'no-script-url': 'warn',

    // disallow self assignment
    // https://eslint.org/docs/rules/no-self-assign
    'no-self-assign': 'error',

    // disallow comparisons where both sides are exactly the same
    // https://eslint.org/docs/rules/no-self-compare
    'no-self-compare': 'error',

    // disallow use of the comma operator
    // https://eslint.org/docs/rules/no-sequences
    'no-sequences': 'error',

    // restrict what can be thrown as an exception
    // https://eslint.org/docs/rules/no-throw-literal
    'no-throw-literal': 'error',

    // disallow unmodified conditions of loops
    // https://eslint.org/docs/rules/no-unmodified-loop-condition
    'no-unmodified-loop-condition': 'off',

    // disallow unused expressions
    // https://eslint.org/docs/rules/no-unused-expressions
    'no-unused-expressions': ['error', {
      allowShortCircuit: true,
      allowTernary: false,
      allowTaggedTemplates: false
    }],

    // disallow unused labels
    // https://eslint.org/docs/rules/no-unused-labels
    'no-unused-labels': 'error',

    // disallow unnecessary .call() and .apply()
    // https://eslint.org/docs/rules/no-useless-call
    'no-useless-call': 'off',

    // disallow unnecessary concatenation of strings
    // https://eslint.org/docs/rules/no-useless-concat
    'no-useless-concat': 'error',

    // disallow unnecessary escape usage
    // https://eslint.org/docs/rules/no-useless-escape
    'no-useless-escape': 'error',

    // disallow redundant return statements
    // https://eslint.org/docs/rules/no-useless-return
    'no-useless-return': 'error',

    // disallow use of the void operator
    // https://eslint.org/docs/rules/no-void
    'no-void': 'error',

    // Ddsallow warning comments
    // https://eslint.org/docs/rules/no-warning-comments
    'no-warning-comments': 'off',

    // disallow with statements
    // https://eslint.org/docs/rules/no-with
    'no-with': 'error',

    // require using error objects as promise rejection reasons
    // https://eslint.org/docs/rules/prefer-promise-reject-errors
    'prefer-promise-reject-errors': ['error', { allowEmptyReject: true }],

    // require use of the second argument for parseInt()
    // https://eslint.org/docs/rules/radix
    radix: ['error', 'as-needed'],

    // disallow async functions which have no await expression
    // https://eslint.org/docs/rules/require-await
    'require-await': 'off',

    // disallow async functions which have no await expression
    // https://eslint.org/docs/rules/vars-on-top
    'vars-on-top': 'off',

    // require IIFEs to be Wrapped
    // https://eslint.org/docs/rules/wrap-iife
    'wrap-iife': ['error', 'outside', { functionPrototypeMethods: false }],

    // require or disallow yoda conditions
    // https://eslint.org/docs/rules/yoda
    yoda: 'error'
  }
};
