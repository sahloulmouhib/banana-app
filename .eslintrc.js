module.exports = {
  root: true,
  extends: [
    '@react-native',
    'plugin:sonarjs/recommended',
    'plugin:react-hooks/recommended',
    'eslint:recommended',
    'plugin:react/recommended',
    'love'
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
    'react/destructuring-assignment': 'error',
    '@typescript-eslint/semi': 'off',
    '@typescript-eslint/member-delimiter-style': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/space-before-function-paren': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'warn',
    '@typescript-eslint/prefer-nullish-coalescing': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off'
  },
  env: {
    'jest/globals': true,
    node: true
  },
  overrides: [
    {
      files: ['*.js', '*.ts']
    }
  ]
};
