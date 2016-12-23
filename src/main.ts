#!/usr/bin/env node
import * as process from 'process';
import { createInterface, ReadLineOptions } from 'readline';
import Controller from './controller';
import TableTop from './table-top';
const table = new TableTop();
const controller = new Controller(table);

const rlOptions: ReadLineOptions = {
  input: process.stdin,
  output: process.stdout,
  terminal: false,
};

process.stdout.write('Valid commands: PLACE, LEFT, RIGHT, MOVE, REPORT.\n');

const rl = createInterface(rlOptions);

rl.prompt(true);

rl.on('line', (line: string) => {
  controller.execute(line);
  rl.prompt(true);
});
