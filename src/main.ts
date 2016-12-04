#!/usr/bin/env node
import ScreenWriter from './screen-writer';
import TableTop from './table-top';
import Table = require('cli-table2');

export function main() {

  const screenWriter = ScreenWriter.getInstance();

  const tableTop = new TableTop();
  let table = new Table();
}

main();
