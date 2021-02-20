"use strict";
exports.__esModule = true;
exports.Arm = void 0;
var Arm = /** @class */ (function () {
    function Arm(strength) {
        if (strength === void 0) { strength = Math.floor(Math.random() * (59 - 30 + 1) + 30); }
        this.strength = strength;
        console.log("Hi it's arm!");
    }
    Arm.prototype.showStrength = function () {
        console.log("Strength: " + this.strength);
        if (this.strength >= 90) {
            console.log("My arm is very strong!");
        }
        else if (this.strength >= 60) {
            console.log("My arm is strong!");
        }
        else if (this.strength >= 30) {
            console.log("My arm's strenght is average");
        }
        else if (this.strength < 30) {
            console.log("My arm is weak :/");
        }
    };
    Arm.prototype.decreaseStrength = function () {
        console.log("Strength before decreasing: " + this.strength);
        this.strength--;
        console.log("Strength after decreasing: " + this.strength);
    };
    Arm.prototype.increaseStrength = function () {
        console.log("Strength before increasing: " + this.strength);
        this.strength++;
        console.log("Strength after increasing: " + this.strength);
    };
    return Arm;
}());
exports.Arm = Arm;
// var Arm1 = new Arm(90);
// Arm1.showStrength();
// Arm1.decreaseStrength();
// Arm1.increaseStrength();
// var Arm2 = new Arm(60);
// Arm2.strength = 70;
// var Arm3 = new Arm(30);
// var Arm4 = new Arm(10);
// Arm2.showStrength();
// Arm3.showStrength();
// Arm4.showStrength();
