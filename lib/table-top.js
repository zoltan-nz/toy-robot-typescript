"use strict";
var fill = require("lodash/fill");
var Table = (function () {
    function Table(width, height) {
        if (width === void 0) { width = 5; }
        if (height === void 0) { height = width; }
        this.width = width;
        this.height = height;
        this.content = fill(Array(height), fill(Array(width), null));
    }
    Table.prototype.isBorder = function (x, y) {
        return (x === 0)
            || (x === this.width - 1)
            || (y === 0)
            || (y === this.height - 1);
    };
    Table.prototype.set = function (x, y, robot) {
        return this.content[y][x] = robot || null;
    };
    Table.prototype.get = function (x, y) {
        return this.content[y][x];
    };
    return Table;
}());
exports.__esModule = true;
exports["default"] = Table;
//# sourceMappingURL=table-top.js.map