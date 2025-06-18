import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/press-and-hold-button-card.ts',
  output: {
    file: 'press-and-hold-button-card.js',
    format: 'iife',
    name: 'PressAndHoldButtonCard'
  },
  plugins: [
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