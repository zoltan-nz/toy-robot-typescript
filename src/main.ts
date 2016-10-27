#!/usr/bin/env node

import { sayHello } from './greet';
import Robot from './robot';

function main() {
  console.log(sayHello('TypeScript')); // tslint:disable-line:no-console

  const robyTheRobot = new Robot('Roby');
  console.log(robyTheRobot.introduceYourself()); // tslint:disable-line:no-console
}

main();
