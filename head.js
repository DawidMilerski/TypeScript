"use strict";
exports.__esModule = true;
exports.Head = void 0;
var Head = /** @class */ (function () {
    function Head(hairColor, eyesColor, eyeDefect) {
        if (eyeDefect === void 0) { eyeDefect = false; }
        this.hairColor = hairColor;
        this.eyesColor = eyesColor;
        this.eyeDefect = eyeDefect;
        console.log("Hi it's head!");
    }
    Head.prototype.FuncEyeDefect = function () {
        console.log("I have " + this.hairColor + " hair and " + this.eyesColor + " eyes");
        if (this.eyeDefect === true) {
            console.log("I have an eye defect");
        }
        else {
            console.log("I don't have an eye defect");
        }
    };
    return Head;
}());
exports.Head = Head;
// var head1 = new Head("brown", "green", true);
// var head2 = new Head("blond", "blue", false);
// head1.FuncEyeDefect();
// head2.FuncEyeDefect();
