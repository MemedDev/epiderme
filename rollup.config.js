import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import postcss from 'rollup-plugin-postcss';
import { eslint } from 'rollup-plugin-eslint';

import autoprefixer from 'autoprefixer';

import pkg from './package.json';

const isProduction = process.env.NODE_ENV === 'production';

export default {
  input: 'src/main.js',
  output: [
    // bundle es Modules
    {
      file: pkg.module,
      format: 'es',
    },
    // bundle universal, UMD
    {
      name: 'ReactEpiderme',
      file: pkg.main,
      format: 'umd',
      globals: {
        react: 'React',
        'prop-types': 'PropTypes',
      },
    },
  ],
  external: [
    'react',
    'prop-types',
  ],
  plugins: [
    resolve(),
    eslint(),
    babel({
      exclude: 'node_modules/**',
    }),
    commonjs(),
    postcss({
      // extrai o CSS final para o caminho definido
      extract: pkg.style,
      sourceMap: true,
      modules: false,
      minimize: isProduction,
      plugins: [
        autoprefixer(),
      ],
    }),
  ],
};
