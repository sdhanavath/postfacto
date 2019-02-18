module.exports = {
  'extends': [
    'react-app',
    'airbnb',
  ],
  'env': {
    'jasmine': true,
  },
  'globals': {
    'root': 'readonly',
    '$': 'readonly',
  },
  'rules': {
    'arrow-body-style': ['off'],
    'arrow-parens': ['off'],
    'camelcase': ['off'],
    'class-methods-use-this': ['off'],
    'function-paren-newline': ['off'],
    'func-names': ['off'],
    'global-require': ['off'],
    'import/order': ['off'],
    'import/no-dynamic-require': ['off'],
    'import/no-extraneous-dependencies': ['off'],
    'import/prefer-default-export': ['off'],
    'jsx-a11y/alt-text': ['off'],
    'jsx-a11y/click-events-have-key-events': ['off'],
    'jsx-a11y/label-has-associated-control': ['off'],
    'jsx-a11y/label-has-for': ['off'],
    'jsx-a11y/no-autofocus': ['off'],
    'jsx-a11y/no-static-element-interactions': ['off'],
    'max-len': ['off'],
    'newline-per-chained-call': ['off'],
    'no-bitwise': ['off'],
    'no-console': ['off'],
    'no-param-reassign': ['off'],
    'no-plusplus': ['off'],
    'no-shadow': ['off'],
    'no-use-before-define': ['off'],
    'object-shorthand': ['off'],
    'padded-blocks': ['off'],
    'prefer-destructuring': ['off'],
    'prefer-template': ['off'],
    'react/button-has-type': ['off'],
    'react/destructuring-assignment': ['off'],
    'react/forbid-prop-types': ['off'],
    'react/jsx-boolean-value': ['off'],
    'react/jsx-closing-bracket-location': ['off'],
    'react/jsx-closing-tag-location': ['off'],
    'react/jsx-filename-extension': ['off'],
    'react/jsx-first-prop-new-line': ['off'],
    'react/jsx-indent': ['off'],
    'react/jsx-indent-props': ['off'],
    'react/jsx-max-props-per-line': ['off'],
    'react/jsx-no-bind': ['off'],
    'react/jsx-no-target-blank': ['off'],
    'react/jsx-one-expression-per-line': ['off'],
    'react/jsx-wrap-multilines': ['off'],
    'react/no-access-state-in-setstate': ['off'],
    'react/no-array-index-key': ['off'],
    'react/no-find-dom-node': ['off'],
    'react/no-string-refs': ['off'],
    'react/no-unescaped-entities': ['off'],
    'react/no-unused-prop-types': ['off'],
    'react/no-unused-state': ['off'],
    'react/prefer-stateless-function': ['off'],
    'react/prop-types': ['off'],
    'react/no-render-return-value': ['off'],
    'react/require-default-props': ['off'],
    'react/self-closing-comp': ['off'],
    'react/sort-comp': ['off'],

    'object-curly-newline': ['error', {
      'consistent': true,
    }],
    'object-curly-spacing': ['error', 'never'],
    'operator-linebreak': ['error', 'after'],
    'react/jsx-tag-spacing': ['error', {
      'closingSlash': 'never',
      'beforeSelfClosing': 'never',
      'afterOpening': 'never',
      'beforeClosing': 'never',
    }],
    'quote-props': ['error', 'consistent'],
  },
};
