#!/usr/bin/env node

import Robot from './robot';
import Table from './table';

export function main() {

  const table = new Table();

  console.log('Hello');

  console.log(table.content);
  console.log(table.width);
  console.log(table.height);
  console.log(table.isBorder(3,3));
  console.log(table.isBorder(3,4));

}

main();
