///<reference path="../typings.json"/>
import { sayHello } from '../src/greet';
import { strictEqual } from 'assert';

describe('hello', () => {
  it('first test', () => {
    ok(1);
  });
  it('prints in console log', () => {
    strictEqual(sayHello('world'), 'hello world', 'should hello world');
  })
});