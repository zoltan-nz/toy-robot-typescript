#!/usr/bin/env node
"use strict";
var greet_1 = require('./greet');
var robot_1 = require('./robot');
function main() {
    console.log(greet_1.sayHello('TypeScript')); // tslint:disable-line:no-console
    var robyTheRobot = new robot_1["default"]('Roby');
    console.log(robyTheRobot.introduceYourself()); // tslint:disable-line:no-console
}
main();
//# sourceMappingURL=main.js.map