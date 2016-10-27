"use strict";
var Robot = (function () {
    function Robot(name) {
        this.name = name;
    }
    Robot.prototype.introduceYourself = function () {
        return "Hello, I'm " + this.name + ". Great to meet you!";
    };
    return Robot;
}());
exports.__esModule = true;
exports["default"] = Robot;
//# sourceMappingURL=robot.js.map