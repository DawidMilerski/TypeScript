"use strict";
exports.__esModule = true;
exports.Hand = void 0;
var Hand = /** @class */ (function () {
    function Hand(betterHand) {
        if (betterHand === void 0) { betterHand = "right"; }
        this.betterHand = betterHand;
        console.log("Hi it's hand!");
    }
    Hand.prototype.showBetterHand = function () {
        if (this.betterHand === "right") {
            console.log("I'm right-handed");
        }
        else {
            console.log("I'm left-handed");
        }
    };
    return Hand;
}());
exports.Hand = Hand;
// var Hand1 = new Hand("right");
// var Hand2 = new Hand("left");
// Hand1.showBetterHand();
// Hand2.showBetterHand();
