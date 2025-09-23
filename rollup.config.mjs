import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: '3508_Implement_Router',
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