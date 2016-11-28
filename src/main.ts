#!/usr/bin/env node
import KeyboardReader from './keyboard-reader';
import ScreenWriter from './screen-writer';
import TableTop from './table-top';
import Table = require('cli-table2');

export function main() {

  const screenWriter = ScreenWriter.getInstance();
  KeyboardReader.getInstance();

  const tableTop = new TableTop();
  let table = new Table();

  tableTop.content.forEach(row => table.push(row));

  // screenWriter.clear();
  screenWriter.write(table.toString());
}

main();
