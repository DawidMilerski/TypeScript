"use strict";
exports.__esModule = true;
exports.Brain = void 0;
var Brain = /** @class */ (function () {
    function Brain(personalityType, iq) {
        if (iq === void 0) { iq = Math.floor(Math.random() * (115 - 85 + 1) + 85); }
        this.iq = iq;
        this.personalityType = personalityType;
        console.log("Hi it's brain!");
    }
    Brain.prototype.showData = function () {
        console.log("My iq: " + this.iq);
        console.log("My personality type: " + this.personalityType);
    };
    return Brain;
}());
exports.Brain = Brain;
// var brain1 = new Brain("Introvert");
// var brain2 = new Brain(115, "Extrovert");
// brain1.showData();
// brain2.showData();
