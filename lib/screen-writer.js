"use strict";
var readline = require("readline");
var ScreenWriter = (function () {
    function ScreenWriter() {
        if (ScreenWriter.instance) {
            throw new Error('Error - use ScreenWriter.getInstance()');
        }
    }
    ScreenWriter.getInstance = function () {
        ScreenWriter.instance = ScreenWriter.instance || new ScreenWriter();
        return ScreenWriter.instance;
    };
    ScreenWriter.prototype.write = function (str) {
        process.stdout.write(str);
    };
    ScreenWriter.prototype.clear = function () {
        readline.cursorTo(process.stdout, 0, 0);
        readline.clearScreenDown(process.stdout);
    };
    return ScreenWriter;
}());
exports.__esModule = true;
exports["default"] = ScreenWriter;
//# sourceMappingURL=screen-writer.js.map