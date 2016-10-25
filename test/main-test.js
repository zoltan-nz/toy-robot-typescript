"use strict";
///<reference path="../typings.json"/>
var greet_1 = require('../src/greet');
var assert_1 = require('assert');
describe('hello', function () {
    it('first test', function () {
        ok(1);
    });
    it('prints in console log', function () {
        assert_1.strictEqual(greet_1.sayHello('world'), 'hello world', 'should hello world');
    });
});
