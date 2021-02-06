"use strict";
exports.__esModule = true;
exports.LHand = void 0;
var LHand = /** @class */ (function () {
    function LHand(lHanded) {
        if (lHanded === void 0) { lHanded = false; }
        this.lHanded = lHanded;
        console.log("Hi it's left hand!");
    }
    LHand.prototype.islHanded = function () {
        if (this.lHanded === true) {
            console.log("I'm left-handed");
        }
        else {
            console.log("I'm not left-handed");
        }
    };
    return LHand;
}());
exports.LHand = LHand;
// var lHand1 = new LHand(true);
// var lHand2 = new LHand(false);
// lHand1.islHanded();
// lHand2.islHanded();
