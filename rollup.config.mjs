import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: '412_Fizz_Buzz.js',
  output: [
    {
      file: 'bundle.esm.js',
      format: 'esm',
    },
  ],
  plugins: [
    resolve(),
    commonjs(),
  ]
};