import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import { buildInfo } from './rollup-plugin-build-info.js';

export default {
  input: 'src/press-and-hold-button-card.ts',
  output: {
    file: 'dist/hacs-nerdo-ux.js',
    format: 'iife',
    name: 'NerdoUX'
  },
  plugins: [
    buildInfo(),
    resolve({
      browser: true,
      preferBuiltins: false
    }),
    typescript({
      tsconfig: './tsconfig.json'
    }),
    terser({
      format: {
        comments: false
      }
    })
  ],
  external: [],
  context: 'window'
};