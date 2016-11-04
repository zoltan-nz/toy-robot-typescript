"use strict";
var lodash_1 = require('lodash');
var Table = (function () {
    function Table(height, width) {
        if (height === void 0) { height = 5; }
        if (width === void 0) { width = height; }
        this.height = height;
        this.width = width;
        this.content = lodash_1.fill(Array(height), lodash_1.fill(Array(width), 0));
    }
    Table.prototype.isBorder = function (y, x) {
        return (y === 0)
            || (y === this.height - 1)
            || (x === 0)
            || (x === this.width - 1);
    };
    return Table;
}());
exports.__esModule = true;
exports["default"] = Table;
//# sourceMappingURL=table-top.js.map