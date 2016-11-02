#!/usr/bin/env node

import Robot from './robot';
import Table from './table';

export function main() {

  const table = new Table();

  console.log('Hello');

  console.log(table.content);
  console.log(table.width);
  console.log(table.height);

}

main();
