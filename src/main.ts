#!/usr/bin/env node
import KeyboardReader from './keyboard-reader';
import ScreenWriter from './screen-writer';
import TableTop from './table-top';
import Table = require('cli-table2');

export function main() {

  const screenWriter = ScreenWriter.getInstance();

  const tableTop = new TableTop();
  let table = new Table();

  tableTop.content.forEach(row => table.push(row));

  screenWriter.write(table.toString());
  // screenWriter.clear();

  waitForNextKey().then(key => console.log(key));
}

async function waitForNextKey(): Promise<string> {
  const keyboardReader = KeyboardReader.getInstance();

  let newKey = '';
  await keyboardReader.readNextKey().then((key) => {
    newKey = key;
  });
  return newKey;
}

main();
