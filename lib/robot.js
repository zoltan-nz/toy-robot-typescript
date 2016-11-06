"use strict";
var Robot = (function () {
    function Robot(options) {
        if (options === void 0) { options = {}; }
        var mergedOptions = { direction: options.direction || 0 /* NORTH */, name: options.name || 'Robot' };
        this.name = mergedOptions.name;
        this.direction = mergedOptions.direction;
    }
    return Robot;
}());
exports.__esModule = true;
exports["default"] = Robot;
//# sourceMappingURL=robot.js.map