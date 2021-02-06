"use strict";
exports.__esModule = true;
exports.RLeg = void 0;
var RLeg = /** @class */ (function () {
    function RLeg(strength) {
        if (strength === void 0) { strength = 45; }
        this.strength = strength;
        console.log("Hi it's right leg!");
    }
    RLeg.prototype.showStrength = function () {
        if (this.strength >= 90) {
            console.log("My right leg is very strong!");
        }
        else if (this.strength >= 60) {
            console.log("My right leg is strong!");
        }
        else if (this.strength >= 30) {
            console.log("My right leg's strenght is average");
        }
        else if (this.strength < 30) {
            console.log("My right leg is weak :/");
        }
    };
    return RLeg;
}());
exports.RLeg = RLeg;
// var rLeg1 = new RLeg(100);
// var rLeg2 = new RLeg(60);
// var rLeg3 = new RLeg(30);
// var rLeg4 = new RLeg(10);
// rLeg1.showStrength();
// rLeg2.showStrength();
// rLeg3.showStrength();
// rLeg4.showStrength();
