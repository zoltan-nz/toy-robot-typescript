#!/usr/bin/env node
import ScreenWriter from './screen-writer';
import TableTop from './table-top';

export function main() {

  const screenWriter = ScreenWriter.getInstance();

  const tableTop = new TableTop();
}

main();
