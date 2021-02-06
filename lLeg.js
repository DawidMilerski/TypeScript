"use strict";
exports.__esModule = true;
exports.LLeg = void 0;
var LLeg = /** @class */ (function () {
    function LLeg(strength) {
        if (strength === void 0) { strength = 45; }
        this.strength = strength;
        console.log("Hi it's left leg!");
    }
    LLeg.prototype.showStrength = function () {
        if (this.strength >= 90) {
            console.log("My left leg is very strong!");
        }
        else if (this.strength >= 60) {
            console.log("My left leg is strong!");
        }
        else if (this.strength >= 30) {
            console.log("My left leg's strenght is average");
        }
        else if (this.strength < 30) {
            console.log("My left leg is weak :/");
        }
    };
    return LLeg;
}());
exports.LLeg = LLeg;
// var lLeg1 = new LLeg(100);
// var lLeg2 = new LLeg(60);
// var lLeg3 = new LLeg(30);
// var lLeg4 = new LLeg(10);
// lLeg1.showStrength();
// lLeg2.showStrength();
// lLeg3.showStrength();
// lLeg4.showStrength();
