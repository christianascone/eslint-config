'use strict'

module.exports = {
  rules: {
    // Possible Errors
    // http://eslint.org/docs/rules/#possible-errors
    // ---------------------------------------------
    'no-cond-assign': 'off', // eslint:recommended
    'no-irregular-whitespace': 'error', // eslint:recommended
    'no-unexpected-multiline': 'error', // eslint:recommended
    'valid-jsdoc': [
      'error',
      {
        requireParamDescription: false,
        requireReturnDescription: false,
        requireReturn: false,
        prefer: {returns: 'return'}
      }
    ],

    // Best Practices
    // http://eslint.org/docs/rules/#best-practices
    // --------------------------------------------

    'curly': ['error', 'multi-line'],
    'guard-for-in': 'error',
    'no-caller': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-invalid-this': 'error',
    'no-multi-spaces': 'error',
    'no-multi-str': 'error',
    'no-new-wrappers': 'error',
    'no-throw-literal': 'error', // eslint:recommended
    'no-with': 'error',
    'prefer-promise-reject-errors': 'error',

    // Variables
    // http://eslint.org/docs/rules/#variables
    // ---------------------------------------
    'no-unused-vars': ['error', {args: 'none'}], // eslint:recommended

    // Stylistic Issues
    // http://eslint.org/docs/rules/#stylistic-issues
    // ----------------------------------------------
    'array-bracket-newline': 'off', // eslint:recommended
    'array-bracket-spacing': ['error', 'never'],
    'array-element-newline': 'off', // eslint:recommended
    'block-spacing': ['error', 'never'],
    'brace-style': 'error',
    'camelcase': ['error', {properties: 'never'}],
    'comma-dangle': ['error', 'never'],
    'comma-spacing': 'error',
    'comma-style': 'error',
    'computed-property-spacing': 'error',
    'eol-last': 'error',
    'func-call-spacing': 'error',
    'indent': [
      'error',
      2,
      {
        CallExpression: {
          arguments: 2
        },
        FunctionDeclaration: {
          body: 1,
          parameters: 2
        },
        FunctionExpression: {
          body: 1,
          parameters: 2
        },
        MemberExpression: 2,
        ObjectExpression: 1,
        SwitchCase: 1,
        ignoredNodes: ['ConditionalExpression']
      }
    ],
    'key-spacing': 'error',
    'keyword-spacing': 'error',
    'linebreak-style': 'error',
    'max-len': [
      'error',
      {
        code: 80,
        tabWidth: 2,
        ignoreUrls: true,
        ignorePattern: 'goog.(module|require)'
      }
    ],
    'new-cap': 'error',
    'no-array-constructor': 'error',
    'no-mixed-spaces-and-tabs': 'error', // eslint:recommended
    'no-multiple-empty-lines': ['error', {max: 2}],
    'no-new-object': 'error',
    'no-tabs': 'error',
    'no-trailing-spaces': 'error',
    'object-curly-spacing': 'error',
    'one-var': [
      'error',
      {
        var: 'never',
        let: 'never',
        const: 'never'
      }
    ],
    'operator-linebreak': ['error', 'after'],
    'padded-blocks': ['error', 'never'],
    'quote-props': ['error', 'consistent'],
    'quotes': ['error', 'single', {allowTemplateLiterals: true}],
    'require-jsdoc': [
      'error',
      {
        require: {
          FunctionDeclaration: true,
          MethodDefinition: true,
          ClassDeclaration: true
        }
      }
    ],
    'semi': ['error', 'never'],
    'semi-spacing': 'error',
    'space-before-blocks': 'error',
    'space-before-function-paren': [
      'error',
      {
        asyncArrow: 'always',
        anonymous: 'always',
        named: 'always'
      }
    ],
    'spaced-comment': ['error', 'always'],
    'switch-colon-spacing': 'error',

    // ECMAScript 6
    // http://eslint.org/docs/rules/#ecmascript-6
    // ------------------------------------------
    'arrow-parens': ['error', 'always'],
    'constructor-super': 'error', // eslint:recommended
    'generator-star-spacing': ['error', 'after'],
    'no-new-symbol': 'error', // eslint:recommended
    'no-this-before-super': 'error', // eslint:recommended
    'no-var': 'error',
    'prefer-const': ['error', {destructuring: 'all'}],
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'rest-spread-spacing': 'error',
    'yield-star-spacing': ['error', 'after']
  }
}
