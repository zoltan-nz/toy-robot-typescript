import { rollup } from 'rollup';
import json from 'rollup-plugin-json';
import typescript from 'rollup-plugin-typescript';
import istanbul from 'rollup-plugin-istanbul';
import * as ts from 'typescript';

const pkg = require('./package.json');
const external = Object.keys(pkg.dependencies);

export default {
  entry: 'src/main.ts',
  plugins: [
    json({}),
    typescript({}),
    istanbul({
      exclude: ['test/**/*', 'node_modules/**/*']
    })
  ],
  external: external,
  targets: [{
    dest: pkg['main'],
    format: 'umd',
    moduleName: 'toy-robot',
    sourceMap: true
  }, {
    dest: pkg['jsnext:main'],
    format: 'es',
    sourceMap: true
  }]
};
