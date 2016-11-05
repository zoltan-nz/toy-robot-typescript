#!/usr/bin/env node
import TableTop from './table-top';
import Table = require('cli-table2');

export function main() {

  const tableTop = new TableTop();
  let table = new Table();

  tableTop.content.forEach(row => table.push(row));
  console.log(table.toString());
}

main();
