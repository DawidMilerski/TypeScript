"use strict";
exports.__esModule = true;
var back_1 = require("./back");
var brain_1 = require("./brain");
var head_1 = require("./head");
var heart_1 = require("./heart");
var lArm_1 = require("./lArm");
var rArm_1 = require("./rArm");
var lFoot_1 = require("./lFoot");
var rFoot_1 = require("./rFoot");
var lHand_1 = require("./lHand");
var rHand_1 = require("./rHand");
var lLeg_1 = require("./lLeg");
var rLeg_1 = require("./rLeg");
var lungs_1 = require("./lungs");
var torso_1 = require("./torso");
var Person = /** @class */ (function () {
    function Person(n, a, hp) {
        if (hp === void 0) { hp = 1000; }
        this.name = n;
        this.age = a;
        this.HP = hp;
        console.log("Hi it's " + this.name + ", I'm " + this.age);
        console.log("HP: " + this.HP);
        this.back = new back_1.Back();
        this.back.showStrength();
        this.brain = new brain_1.Brain(127, "Introvert");
        this.brain.showData();
        this.head = new head_1.Head("brown", "blue", true);
        this.head.FuncEyeDefect();
        this.heart = new heart_1.Heart();
        this.heart.showHeartRate();
        this.lArm = new lArm_1.LArm();
        this.lArm.showStrength();
        this.rArm = new rArm_1.RArm();
        this.rArm.showStrength();
        this.lFoot = new lFoot_1.LFoot();
        this.lFoot.islFooted();
        this.rFoot = new rFoot_1.RFoot();
        this.rFoot.isrFooted();
        this.lHand = new lHand_1.LHand();
        this.lHand.islHanded();
        this.rHand = new rHand_1.RHand();
        this.rHand.isrHanded();
        this.lLeg = new lLeg_1.LLeg();
        this.lLeg.showStrength();
        this.rLeg = new rLeg_1.RLeg();
        this.rLeg.showStrength();
        this.lungs = new lungs_1.Lungs();
        this.lungs.showLungsCapacity();
        this.torso = new torso_1.Torso();
        this.torso.showStrength();
    }
    return Person;
}());
var Person1 = new Person("Ross", 27, 1000);
var Person2 = new Person("Rachel", 22, 1000);
var Person3 = new Person("Chandler", 25, 1000);
var Person4 = new Person("Monica", 24, 1000);
var Person5 = new Person("Joey", 26, 1000);
var Person6 = new Person("Phoebe", 23, 1000);
var People = [Person1, Person2, Person3, Person4, Person5, Person6];
console.log(People[0]);
console.log(People[1]);
console.log(People[2]);
console.log(People[3]);
console.log(People[4]);
console.log(People[5]);
