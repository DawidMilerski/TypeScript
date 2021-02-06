"use strict";
exports.__esModule = true;
exports.LFoot = void 0;
var LFoot = /** @class */ (function () {
    function LFoot(lFooted) {
        if (lFooted === void 0) { lFooted = false; }
        this.lFooted = lFooted;
        console.log("Hi it's left foot!");
    }
    LFoot.prototype.islFooted = function () {
        if (this.lFooted === true) {
            console.log("I'm left-footed");
        }
        else {
            console.log("I'm not left-footed");
        }
    };
    return LFoot;
}());
exports.LFoot = LFoot;
// var lFoot1 = new LFoot(true);
// var lFoot2 = new LFoot(false);
// lFoot1.islFooted();
// lFoot2.islFooted();
