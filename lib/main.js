#!/usr/bin/env node
"use strict";
var table_top_1 = require("./table-top");
var Table = require("cli-table2");
function main() {
    var tableTop = new table_top_1["default"]();
    var table = new Table();
    tableTop.content.forEach(function (row) { return table.push(row); });
    console.log(table.toString());
}
exports.main = main;
main();
//# sourceMappingURL=main.js.map