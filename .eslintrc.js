module.exports = {
  root: true,
  extends: [
    '@react-native',
    'plugin:sonarjs/recommended',
    'plugin:react-hooks/recommended',
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  plugins: ['@typescript-eslint', 'sonarjs', 'react-hooks', 'react'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json'
  },
  rules: {
    'react-hooks/exhaustive-deps': 'off',
    'comma-dangle': 'off',
    'react/no-unused-prop-types': 'warn',
    'react/boolean-prop-naming': [
      'error',
      { propTypeNames: ['bool', 'mutuallyExclusiveTrueProps'] }
    ],
    'react/destructuring-assignment': 'error'
  },
  env: {
    'jest/globals': true,
    node: true
  }
};
