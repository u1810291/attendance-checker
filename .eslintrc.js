module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint'
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  rules: { 
    "no-console": 2,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'react/prefer-stateless-function': 'off',
    indent: ['error', 2],
    'comma-dangle': ['error', 'never'],
    'no-shadow': 'off',
    'react/no-children-prop': 'off',
    'import/prefer-default-export': 'off',
    'linebreak-style': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'no-underscore-dangle': 0,
    'react/prop-types': 0
  }
};
