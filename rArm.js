"use strict";
exports.__esModule = true;
exports.RArm = void 0;
var RArm = /** @class */ (function () {
    function RArm(strength) {
        if (strength === void 0) { strength = 45; }
        this.strength = strength;
        console.log("Hi it's right arm!");
    }
    RArm.prototype.showStrength = function () {
        if (this.strength >= 90) {
            console.log("My right arm is very strong!");
        }
        else if (this.strength >= 60) {
            console.log("My right arm is strong!");
        }
        else if (this.strength >= 30) {
            console.log("My right arm's strenght is average");
        }
        else if (this.strength < 30) {
            console.log("My right arm is weak :/");
        }
    };
    return RArm;
}());
exports.RArm = RArm;
// var rArm1 = new RArm(100);
// var rArm2 = new RArm(60);
// var rArm3 = new RArm(30);
// var rArm4 = new RArm(10);
// rArm1.showStrength();
// rArm2.showStrength();
// rArm3.showStrength();
// rArm4.showStrength();
