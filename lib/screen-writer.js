"use strict";
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
    return ScreenWriter;
}());
exports.__esModule = true;
exports["default"] = ScreenWriter;
//# sourceMappingURL=screen-writer.js.map