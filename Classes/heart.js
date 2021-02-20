"use strict";
exports.__esModule = true;
exports.Heart = void 0;
var Heart = /** @class */ (function () {
    function Heart(heartRate) {
        if (heartRate === void 0) { heartRate = Math.floor(Math.random() * (100 - 60 + 1) + 60); }
        this.heartRate = heartRate;
        console.log("Hi it's heart!");
    }
    Heart.prototype.showHeartRate = function () {
        console.log("My heart rate: " + this.heartRate + " bpm");
    };
    return Heart;
}());
exports.Heart = Heart;
var heart1 = new Heart();
heart1.showHeartRate();
