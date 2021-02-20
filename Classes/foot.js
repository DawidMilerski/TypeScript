"use strict";
exports.__esModule = true;
exports.Foot = void 0;
var Foot = /** @class */ (function () {
    function Foot(betterFoot) {
        if (betterFoot === void 0) { betterFoot = "right"; }
        this.betterFoot = betterFoot;
        console.log("Hi it's foot!");
    }
    Foot.prototype.showBetterFoot = function () {
        if (this.betterFoot === "right") {
            console.log("I'm right-footed");
        }
        else {
            console.log("I'm left-footed");
        }
    };
    return Foot;
}());
exports.Foot = Foot;
// var Foot1 = new Foot("right");
// var Foot2 = new Foot("left");
// Foot1.showBetterFoot();
// Foot2.showBetterFoot();
