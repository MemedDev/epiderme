module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 6,
  },
  extends: 'airbnb',
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  plugins: [
    'import',
    'jsx-a11y',
    'react',
  ],
  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
        optionalDependencies: false,
        peerDependencies: true
      }
    ],
    'import/no-unresolved': [
      'error',
      {
        ignore: ['^react$', '^prop-types$']
      }
    ],
    'react/jsx-filename-extension': 'off',
  },
};
