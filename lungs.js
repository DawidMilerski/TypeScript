"use strict";
exports.__esModule = true;
exports.Lungs = void 0;
var Lungs = /** @class */ (function () {
    function Lungs(lungsCapacity) {
        if (lungsCapacity === void 0) { lungsCapacity = "4500 ml"; }
        this.lungsCapacity = lungsCapacity;
        console.log("Hi, it's lungs!");
    }
    Lungs.prototype.showLungsCapacity = function () {
        console.log("Lungs capacity: " + this.lungsCapacity);
    };
    return Lungs;
}());
exports.Lungs = Lungs;
// var lungs1 = new Lungs("5000 ml");
// lungs1.showLungsCapacity();
