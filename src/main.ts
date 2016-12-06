#!/usr/bin/env node

import { ReadLine } from 'readline';
import CommandLine from './command-line';
import Controller from './controller';
import Robot from './robot';
import ScreenWriter from './screen-writer';
import TableTop from './table-top';

export function main() {

  const screenWriter = ScreenWriter.getInstance();
  const table = new TableTop();
  const robot = new Robot();

  const commandLine = new CommandLine();
  const controller = Controller.getInstance({table, robot});

  commandLine.nextCommand().then((command) => controller.execute(command));
}

main();
