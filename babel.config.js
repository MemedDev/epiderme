const isTest = process.env.NODE_ENV === 'test';

module.exports = {
  presets: [
    '@babel/preset-react',
    [
      '@babel/preset-env', {
        modules: false,
      },
    ],
  ],
  plugins: [
    '@babel/plugin-proposal-export-default-from',
  ],
  env: {
    test: {
      plugins: [
        '@babel/plugin-transform-modules-commonjs',
        'dynamic-import-node',
      ],
    },
  },
};
