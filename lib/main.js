#!/usr/bin/env node
"use strict";
var table_top_1 = require("./table-top");
var Table = require("cli-table2");
// import readline = require('readline');
var readline = require("readline");
var process = require("process");
function main() {
    var tableTop = new table_top_1["default"]();
    var table = new Table();
    tableTop.content.forEach(function (row) { return table.push(row); });
    readline.cursorTo(process.stdout, 0, 0);
    readline.clearScreenDown(process.stdout);
    readline.emitKeypressEvents(process.stdin);
    console.log(table.toString());
    if (process.stdin.isTTY)
        process.stdin.setRawMode(true);
    console.log(process.stdout.columns + "x" + process.stdout.rows);
    process.stdout.on('resize', function () {
        readline.cursorTo(process.stdout, 0, 0);
        readline.clearScreenDown(process.stdout);
        console.log('screen size has changed!');
        console.log(process.stdout.columns + "x" + process.stdout.rows);
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
    process.stdin.on('keypress', function (str, key) {
        if (key.ctrl && key.name === 'c') {
            process.exit();
        }
        readline.cursorTo(process.stdout, 0, 15);
        console.log(key);
    });
}
exports.main = main;
main();
//# sourceMappingURL=main.js.map