"use strict";
exports.__esModule = true;
exports.Brain = void 0;
var Brain = /** @class */ (function () {
    function Brain(iq, personalityType) {
        if (iq === void 0) { iq = 110; }
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
// var brain1 = new brain(127, "Introvert");
// var brain2 = new brain(115, "Extrovert");
// brain1.showData();
// brain2.showData();
