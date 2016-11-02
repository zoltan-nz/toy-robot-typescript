"use strict";
var lodash_1 = require('lodash');
var Table = (function () {
    function Table(height, width) {
        if (height === void 0) { height = 5; }
        if (width === void 0) { width = 5; }
        this.content = lodash_1.fill(Array(height), lodash_1.fill(Array(width), 0));
        this.width = width;
        this.height = height;
    }
    return Table;
}());
exports.__esModule = true;
exports["default"] = Table;
//# sourceMappingURL=table.js.map