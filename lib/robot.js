"use strict";
var Robot = (function () {
    function Robot(options) {
        if (options === void 0) { options = {}; }
        var mergedOptions = { direction: options.direction || 0 /* NORTH */, name: options.name || 'Robot' };
        this.name = mergedOptions.name;
        this.direction = mergedOptions.direction;
    }
    Robot.prototype.turnLeft = function () {
        var newDirection = this.direction === 0 /* NORTH */ ? 3 /* WEST */ : this.direction - 1;
        return this.direction = newDirection;
    };
    Robot.prototype.turnRight = function () {
        var newDirection = this.direction === 3 /* WEST */ ? 0 /* NORTH */ : this.direction + 1;
        return this.direction = newDirection;
    };
    return Robot;
}());
exports.__esModule = true;
exports["default"] = Robot;
//# sourceMappingURL=robot.js.map