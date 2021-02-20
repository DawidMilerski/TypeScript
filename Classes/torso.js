"use strict";
exports.__esModule = true;
exports.Torso = void 0;
var Torso = /** @class */ (function () {
    function Torso(chestStrength, abdominalStrength) {
        if (chestStrength === void 0) { chestStrength = Math.floor(Math.random() * (59 - 30 + 1) + 30); }
        if (abdominalStrength === void 0) { abdominalStrength = Math.floor(Math.random() * (59 - 30 + 1) + 30); }
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
    Torso.prototype.decreaseChestStrength = function () {
        console.log("Chest strength before decreasing: " + this.chestStrength);
        this.chestStrength--;
        console.log("Chest strength after decreasing: " + this.chestStrength);
    };
    Torso.prototype.increaseChestStrength = function () {
        console.log("Chest strength before increasing: " + this.chestStrength);
        this.chestStrength++;
        console.log("Chest strength after increasing: " + this.chestStrength);
    };
    Torso.prototype.decreaseAbdominalStrength = function () {
        console.log("Abdominal strength before decreasing: " + this.abdominalStrength);
        this.abdominalStrength--;
        console.log("Abdominal strength after decreasing: " + this.abdominalStrength);
    };
    Torso.prototype.increaseAbdominalStrength = function () {
        console.log("Abdominal strength before increasing: " + this.abdominalStrength);
        this.abdominalStrength++;
        console.log("Abdominal strength after increasing: " + this.abdominalStrength);
    };
    return Torso;
}());
exports.Torso = Torso;
// var torso1 = new Torso(100, 100);
// torso1.increaseChestStrength();
// torso1.decreaseChestStrength();
// torso1.increaseAbdominalStrength();
// torso1.decreaseAbdominalStrength();
// var torso2 = new Torso(60, 60);
// var torso3 = new Torso(40, 40);
// var torso4 = new Torso(10, 10);
// torso1.showStrength();
// torso2.showStrength();
// torso3.showStrength();
// torso4.showStrength();
