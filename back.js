"use strict";
exports.__esModule = true;
exports.Back = void 0;
var Back = /** @class */ (function () {
    function Back(strength) {
        if (strength === void 0) { strength = 45; }
        this.strength = strength;
        console.log("Hi it's back!");
    }
    Back.prototype.showStrength = function () {
        if (this.strength >= 90) {
            console.log("My back is very strong!");
        }
        else if (this.strength >= 60) {
            console.log("My back is strong!");
        }
        else if (this.strength >= 30) {
            console.log("My back's strenght is average");
        }
        else if (this.strength < 30) {
            console.log("My back is weak :/");
        }
    };
    return Back;
}());
exports.Back = Back;
// var back1 = new Back(100);
// var back2 = new Back(70);
// var back3 = new Back(40);
// var back4 = new Back(20);
// back1.showStrength();
// back2.showStrength();
// back3.showStrength();
// back4.showStrength();
