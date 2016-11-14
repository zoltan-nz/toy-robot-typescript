#!/usr/bin/env node
"use strict";
var key_reader_1 = require("./key-reader");
var screen_writer_1 = require("./screen-writer");
var table_top_1 = require("./table-top");
var Table = require("cli-table2");
function main() {
    var screenWriter = screen_writer_1["default"].getInstance();
    key_reader_1["default"].getInstance();
    var tableTop = new table_top_1["default"]();
    var table = new Table();
    tableTop.content.forEach(function (row) { return table.push(row); });
    screenWriter.clear();
    screenWriter.write(table.toString());
}
exports.main = main;
main();
//# sourceMappingURL=main.js.map