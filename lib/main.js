#!/usr/bin/env node
"use strict";
var table_1 = require('./table');
function main() {
    var table = new table_1["default"]();
    console.log('Hello');
    console.log(table.content);
    console.log(table.width);
    console.log(table.height);
    console.log(table.isBorder(3, 3));
    console.log(table.isBorder(3, 4));
}
exports.main = main;
main();
//# sourceMappingURL=main.js.map