# Toy Robot

Practicing Typescript with the Toy Robot exercise.

## Ideal development environment

Great scaffolder: https://github.com/ospatil/generator-node-typescript

### Install packages
Default packages:

Globals
$ yarn global add tslint typescript

Dev packages
$ yarn add --dev tslint mocha chai typescript typings ts-node rimraf sinon-chai

Typing packages
$ yarn add --dev @types/chai @types/mocha @types/node @types/sinon-chai

### Setup tsconfig.json

### Setup tsling.json

### Setup .vscode shorthands

### Setup editorconfig and jsbeautifyrc

### Add script to package.json

$ npm run clean
$ npm run lint
$ npm run build
$ npm run test
$ npm run watch
$ npm run watch:test

Notes:

* Doesn't need `typings`, because TypeScript 2 manages it automatically, however have to install declaration file as node_module

For example for `sinon-chai`.
Search on: https://microsoft.github.io/TypeSearch/

## Testing console.log

yarn add --dev @types/sinon sinon
 
