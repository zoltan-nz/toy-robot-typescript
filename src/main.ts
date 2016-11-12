#!/usr/bin/env node
import TableTop from './table-top';
import Table = require('cli-table2');
// import readline = require('readline');
import * as readline from 'readline';
import * as process from 'process';

declare module 'readline' {
  export function emitKeypressEvents(stream: NodeJS.ReadableStream, interface?: ReadLine): void;
}

export function main() {

  const tableTop = new TableTop();
  let table = new Table();

  tableTop.content.forEach(row => table.push(row));

  readline.cursorTo(process.stdout, 0, 0);
  readline.clearScreenDown(process.stdout);

  readline.emitKeypressEvents(process.stdin);

  console.log(table.toString());

  if (process.stdin.isTTY)
    process.stdin.setRawMode(true);

  console.log(`${process.stdout.columns}x${process.stdout.rows}`);

  process.stdout.on('resize', () => {
    readline.cursorTo(process.stdout, 0, 0);
    readline.clearScreenDown(process.stdout);
    console.log('screen size has changed!');
    console.log(`${process.stdout.columns}x${process.stdout.rows}`);
  });

  /*
   *
   * {
   *   sequence: 'e',
   *   name: 'd',
   *   ctrl: false,
   *   meta: false,
   *   shift: false
   * }
   *
   */
  process.stdin.on('keypress', (str, key) => {

    if (key.ctrl && key.name === 'c') {
      process.exit();
    }

    readline.cursorTo(process.stdout, 0, 15);
    console.log(key);
  });

}

main();
