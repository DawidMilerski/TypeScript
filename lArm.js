"use strict";
exports.__esModule = true;
exports.LArm = void 0;
var LArm = /** @class */ (function () {
    function LArm(strength) {
        if (strength === void 0) { strength = 45; }
        this.strength = strength;
        console.log("Hi it's left arm!");
    }
    LArm.prototype.showStrength = function () {
        if (this.strength >= 90) {
            console.log("My left arm is very strong!");
        }
        else if (this.strength >= 60) {
            console.log("My left arm is strong!");
        }
        else if (this.strength >= 30) {
            console.log("My left arm's strenght is average");
        }
        else if (this.strength < 30) {
            console.log("My left arm is weak :/");
        }
    };
    return LArm;
}());
exports.LArm = LArm;
// var lArm1 = new LArm(100);
// var lArm2 = new LArm(60);
// var lArm3 = new LArm(30);
// var lArm4 = new LArm(10);
// lArm1.showStrength();
// lArm2.showStrength();
// lArm3.showStrength();
// lArm4.showStrength();
