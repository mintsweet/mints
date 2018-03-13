module.exports = {
  env: {
    es6: true
  },
  
  parserOptions: {
    ecmaVersion: 2015,
    sourceType: 'module',
    ecmaFeatures: {
      generators: false,
      objectLiteralDuplicateProperties: false
    }
  },

  rules: {
    // require braces in arrow function body
    // https://eslint.org/docs/rules/arrow-body-style
    'arrow-body-style': ['off', 'as-needed', {
      requireReturnForObjectLiteral: true,
    }],

    // require parens in arrow function arguments
    // https://eslint.org/docs/rules/arrow-parens
    'arrow-parens': ['error', 'as-needed'],

    // require space before/after arrow function’s arrow
    // https://eslint.org/docs/rules/arrow-spacing
    'arrow-spacing': 'error',

    // verify calls of super() in constructors
    // https://eslint.org/docs/rules/constructor-super
    'constructor-super': 'error',

    // enforce spacing around the * in generator functions 
    // https://eslint.org/docs/rules/generator-star-spacing
    'generator-star-spacing': ['error', 'after'],

    // disallow modifying variables of class declarations
    // https://eslint.org/docs/rules/no-class-assign
    'no-class-assign': 'error',

    // disallow arrow functions where they could be confused with comparisons
    // https://eslint.org/docs/rules/no-confusing-arrow
    'no-confusing-arrow': ['error', {
      allowParens: true,
    }],

    // disallow modifying variables that are declared using const
    // https://eslint.org/docs/rules/no-const-assign
    'no-const-assign': 'error',

    // disallow duplicate name in class members
    // https://eslint.org/docs/rules/no-dupe-class-members
    'no-dupe-class-members': 'error',

    // disallow duplicate imports
    // https://eslint.org/docs/rules/no-duplicate-imports
    'no-duplicate-imports': ['error', { 'includeExports': true }],

    // disallow symbol constructor
    // https://eslint.org/docs/rules/no-new-symbol
    'no-new-symbol': 'error',

    // disallow specific imports
    // https://eslint.org/docs/rules/no-restricted-imports
    'no-restricted-imports': ['off', {
      paths: [],
      patterns: []
    }],

    // disallow use of this/super before calling super() in constructors
    // https://eslint.org/docs/rules/no-this-before-super
    'no-this-before-super': 'error',

    // disallow unnecessary computed property keys on objects
    // https://eslint.org/docs/rules/no-useless-computed-key
    'no-useless-computed-key': 'error',

    // disallow unnecessary constructor
    // https://eslint.org/docs/rules/no-useless-constructor
    'no-useless-constructor': 'error',

    // disallow renaming import, export, and destructured assignments to the same name
    // https://eslint.org/docs/rules/no-useless-rename
    'no-useless-rename': 'error',

    // require let or const instead of var
    // https://eslint.org/docs/rules/no-var
    'no-var': 'error',

    // require Object Literal Shorthand Syntax
    // https://eslint.org/docs/rules/object-shorthand
    'object-shorthand': ['error', 'always', {
      ignoreConstructors: false,
      avoidQuotes: true,
    }],

    // require using arrow functions for callbacks
    // https://eslint.org/docs/rules/prefer-arrow-callback
    'prefer-arrow-callback': ['off', {
      allowNamedFunctions: false,
      allowUnboundThis: true,
    }],

    // suggest using const
    // https://eslint.org/docs/rules/prefer-const
    'prefer-const': ['warn', {
      destructuring: 'any',
      ignoreReadBeforeAssign: true,
    }],

    // prefer destructuring from arrays and objects
    // https://eslint.org/docs/rules/prefer-destructuring
    'prefer-destructuring': ['warn', {
      VariableDeclarator: {
        array: false,
        object: true,
      },
      AssignmentExpression: {
        array: false,
        object: false,
      },
    }, {
      enforceForRenamedProperties: false,
    }],

    // disallow parseInt() and Number.parseInt() in favor of binary, octal, and hexadecimal literals
    // https://eslint.org/docs/rules/prefer-numeric-literals
    'prefer-numeric-literals': 'warn',

    // suggest using the rest parameters instead of arguments
    // https://eslint.org/docs/rules/prefer-rest-params
    'prefer-rest-params': 'warn',

    // suggest using the spread operator instead of .apply()
    // https://eslint.org/docs/rules/prefer-spread
    'prefer-spread': 'warn',

    // suggest using template literals instead of string concatenation
    // https://eslint.org/docs/rules/prefer-template
    'prefer-template': 'warn',

    // disallow generator functions that do not have yield
    // https://eslint.org/docs/rules/require-yield
    'require-yield': 'error',

    // enforce spacing between rest and spread operators and their expressions
    // https://eslint.org/docs/rules/rest-spread-spacing
    'rest-spread-spacing': ['error', 'never'],

    // import sorting
    // https://eslint.org/docs/rules/sort-imports
    'sort-imports': ['off', {
      ignoreCase: false,
      ignoreMemberSort: false,
      memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
    }],

    // require symbol description
    // https://eslint.org/docs/rules/symbol-description
    'symbol-description': 'error',

    // enforce usage of spacing in template strings
    // https://eslint.org/docs/rules/template-curly-spacing
    'template-curly-spacing': ['error', 'never'],

    // enforce spacing around the * in yield* expressions
    // https://eslint.org/docs/rules/yield-star-spacing
    'yield-star-spacing': ['error', 'after']
  }
}