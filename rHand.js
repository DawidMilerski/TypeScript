"use strict";
exports.__esModule = true;
exports.RHand = void 0;
var RHand = /** @class */ (function () {
    function RHand(rHanded) {
        if (rHanded === void 0) { rHanded = true; }
        this.rHanded = rHanded;
        console.log("Hi it's right hand!");
    }
    RHand.prototype.isrHanded = function () {
        if (this.rHanded === true) {
            console.log("I'm right-handed");
        }
        else {
            console.log("I'm not right-handed");
        }
    };
    return RHand;
}());
exports.RHand = RHand;
// var rHand1 = new RHand(true);
// var rHand2 = new RHand(false);
// rHand1.isrHanded();
// rHand2.isrHanded();
