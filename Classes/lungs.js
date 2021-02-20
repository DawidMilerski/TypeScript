"use strict";
exports.__esModule = true;
exports.Lungs = void 0;
var Lungs = /** @class */ (function () {
    function Lungs(lungsCapacity) {
        if (lungsCapacity === void 0) { lungsCapacity = Math.floor(Math.random() * (6000 - 4000 + 1) + 4000); }
        this.lungsCapacity = lungsCapacity;
        console.log("Hi, it's lungs!");
    }
    Lungs.prototype.showLungsCapacity = function () {
        console.log("Lungs capacity: " + this.lungsCapacity + " ml");
    };
    return Lungs;
}());
exports.Lungs = Lungs;
// var lungs1 = new Lungs();
// lungs1.showLungsCapacity();
