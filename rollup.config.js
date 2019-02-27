import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import { eslint } from 'rollup-plugin-eslint';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

import pkg from './package.json';

export default {
  input: 'src/main.js',
  output: [
    {
      file: pkg.module,
      format: 'es',
      sourceMap: true,
    },
    {
      file: pkg.main,
      format: 'umd',
      sourceMap: true,
      name: 'Epiderme',
      globals: {
        react: 'React',
        'prop-types': 'PropTypes',
        'styled-components': 'styled',
      },
    },
  ],
  external: [
    'react',
    'prop-types',
    'styled-components',
  ],
  plugins: [
    peerDepsExternal(),
    eslint(),
    babel({
      exclude: 'node_modules/**',
    }),
    resolve({
      extensions: ['.js', '.jsx'],
    }),
    commonjs(),
  ],
};
