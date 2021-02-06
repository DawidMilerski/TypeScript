"use strict";
exports.__esModule = true;
exports.RFoot = void 0;
var RFoot = /** @class */ (function () {
    function RFoot(rFooted) {
        if (rFooted === void 0) { rFooted = true; }
        this.rFooted = rFooted;
        console.log("Hi it's right foot!");
    }
    RFoot.prototype.isrFooted = function () {
        if (this.rFooted === true) {
            console.log("I'm right-footed");
        }
        else {
            console.log("I'm not right-footed");
        }
    };
    return RFoot;
}());
exports.RFoot = RFoot;
// var rFoot1 = new RFoot(true);
// var rFoot2 = new RFoot(false);
// rFoot1.isrFooted();
// rFoot2.isrFooted();
