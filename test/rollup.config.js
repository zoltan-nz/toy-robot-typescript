import typescript from 'rollup-plugin-typescript';
import multiEntry from 'rollup-plugin-multi-entry';

export default {
  entry: ['./**/*'],
  plugins: [
    typescript(),
    multiEntry()
  ],
  targets: [{
    dest: '../dist/test.js',
    format: 'umd',
    moduleName: 'toy-robot',
    sourceMap: 'inline'
  }]
};

