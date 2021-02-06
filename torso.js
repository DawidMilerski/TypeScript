"use strict";
exports.__esModule = true;
exports.Torso = void 0;
var Torso = /** @class */ (function () {
    function Torso(chestStrength, abdominalStrength) {
        if (chestStrength === void 0) { chestStrength = 45; }
        if (abdominalStrength === void 0) { abdominalStrength = 45; }
        this.chestStrength = chestStrength;
        this.abdominalStrength = abdominalStrength;
        console.log("Hi it's torso!");
    }
    Torso.prototype.showStrength = function () {
        if (this.chestStrength >= 90) {
            console.log("My chest muscles are very strong!");
        }
        else if (this.chestStrength >= 60) {
            console.log("My chest muscles are strong!");
        }
        else if (this.chestStrength >= 30) {
            console.log("My chest muscle's strength is average");
        }
        else if (this.chestStrength < 30) {
            console.log("My chest muscles are weak :/");
        }
        if (this.abdominalStrength >= 90) {
            console.log("My abdominal muscles are very strong!");
        }
        else if (this.abdominalStrength >= 60) {
            console.log("My abdominal muscles are strong!");
        }
        else if (this.abdominalStrength >= 30) {
            console.log("My abdominal muscle's strength is average");
        }
        else if (this.abdominalStrength < 30) {
            console.log("My abdominal muscles are weak :/");
        }
    };
    return Torso;
}());
exports.Torso = Torso;
// var torso1 = new Torso(100, 100);
// var torso2 = new Torso(60, 60);
// var torso3 = new Torso(40, 40);
// var torso4 = new Torso(10, 10);
// torso1.showStrength();
// torso2.showStrength();
// torso3.showStrength();
// torso4.showStrength();
