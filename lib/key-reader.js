"use strict";
var process = require("process");
var readline = require("readline");
var stdin = process.stdin;
var KeyReader = (function () {
    function KeyReader() {
        if (KeyReader.instance) {
            throw new Error('Error - use KeyReader.getInstance()');
        }
        readline.emitKeypressEvents(stdin);
        if (stdin.isTTY) {
            stdin.setRawMode(true);
        }
        this.watchKeypress();
    }
    KeyReader.getInstance = function () {
        KeyReader.instance = KeyReader.instance || new KeyReader();
        return KeyReader.instance;
    };
    KeyReader.prototype.watchKeypress = function () {
        var _this = this;
        stdin.on('keypress', function (data, key) {
            _this.exitWhenCtrlC(key);
        });
    };
    KeyReader.prototype.exitWhenCtrlC = function (key) {
        if (key.ctrl && key.name === 'c') {
            process.exit();
        }
    };
    return KeyReader;
}());
exports.__esModule = true;
exports["default"] = KeyReader;
//# sourceMappingURL=key-reader.js.map