"use strict";
exports.__esModule = true;
var arm_1 = require("./Classes/arm");
var back_1 = require("./Classes/back");
var brain_1 = require("./Classes/brain");
var foot_1 = require("./Classes/foot");
var hand_1 = require("./Classes/hand");
var head_1 = require("./Classes/head");
var heart_1 = require("./Classes/heart");
var leg_1 = require("./Classes/leg");
var lungs_1 = require("./Classes/lungs");
var torso_1 = require("./Classes/torso");
var Person = /** @class */ (function () {
    function Person(n, a, hp, position, targetPosition) {
        if (a === void 0) { a = Math.floor(Math.random() * (40 - 18 + 1) + 18); }
        if (hp === void 0) { hp = Math.floor(Math.random() * (1500 - 1000 + 1) + 1000); }
        if (position === void 0) { position = [Math.floor(Math.random() * (700 - 0 + 1) + 0), Math.floor(Math.random() * (700 - 0 + 1) + 0)]; }
        if (targetPosition === void 0) { targetPosition = [Math.floor(Math.random() * (700 - 0 + 1) + 0), Math.floor(Math.random() * (700 - 0 + 1) + 0)]; }
        this.position = [];
        this.targetPosition = [];
        this.name = n;
        this.age = a;
        this.HP = hp;
        this.position = position;
        this.targetPosition = targetPosition;
        console.log("Hi it's " + this.name + ", I'm " + this.age);
        console.log("HP: " + this.HP);
        console.log("Current Position: X: " + this.position[0] + " Y: " + this.position[1]);
        console.log("Target Position: X: " + this.position[0] + " Y: " + this.position[1]);
        this.back = new back_1.Back();
        this.back.showStrength();
        this.brain = new brain_1.Brain("Introvert");
        this.brain.showData();
        this.head = new head_1.Head("brown", "blue", true);
        this.head.setEyeDefect();
        this.heart = new heart_1.Heart();
        this.heart.showHeartRate();
        this.lArm = new arm_1.Arm();
        this.lArm.showStrength();
        this.rArm = new arm_1.Arm();
        this.rArm.showStrength();
        this.lFoot = new foot_1.Foot();
        this.lFoot.showBetterFoot();
        this.rFoot = new foot_1.Foot();
        this.rFoot.showBetterFoot();
        this.lHand = new hand_1.Hand();
        this.lHand.showBetterHand();
        this.rHand = new hand_1.Hand();
        this.rHand.showBetterHand();
        this.lLeg = new leg_1.Leg();
        this.lLeg.showStrength();
        this.rLeg = new leg_1.Leg();
        this.rLeg.showStrength();
        this.lungs = new lungs_1.Lungs();
        this.lungs.showLungsCapacity();
        this.torso = new torso_1.Torso();
        this.torso.showStrength();
    }
    Person.prototype.walk = function () {
        console.log("Current Position: X: " + this.position[0] + " Y: " + this.position[1]);
        console.log("Target Position: X: " + this.position[0] + " Y: " + this.position[1]);
        console.log("Twoja stara");
    };
    return Person;
}());
var Main = /** @class */ (function () {
    function Main() {
        this.people = [];
        this.numberOfPeople = 2;
        this.peopleGenerator();
        console.log(this.people);
    }
    Main.prototype.nameGenerator = function () {
        var names = ["Emma", "Isabella", "Emily", "Madison", "Ava", "Olivia", "Sophia", "Abigail", "Elizabeth", "Chloe", "Samantha", "Addison", "Natalie", "Mia", "Alexis", "Alyssa", "Hannah", "Ashley", "Ella", "Sarah", "Grace", "Taylor", "Brianna", "Lily", "Hailey", "Anna", "Victoria", "Kayla", "Lillian", "Lauren", "Kaylee", "Allison", "Savannah", "Nevaeh", "Gabriella", "Sofia", "Makayla", "Avery", "Riley", "Julia", "Leah", "Aubrey", "Jasmine", "Audrey", "Katherine", "Morgan", "Brooklyn", "Destiny", "Sydney", "Alexa", "Kylie", "Brooke", "Kaitlyn", "Evelyn", "Layla", "Madeline", "Kimberly", "Zoe", "Jessica", "Peyton", "Alexandra", "Claire", "Madelyn", "Maria", "Mackenzie", "Arianna", "Jocelyn", "Amelia", "Angelina", "Trinity", "Andrea", "Maya", "Valeria", "Sophie", "Rachel", "Vanessa", "Aaliyah", "Mariah", "Gabrielle", "Katelyn", "Ariana", "Bailey", "Camila", "Jennifer", "Melanie", "Gianna", "Charlotte", "Paige", "Autumn", "Payton", "Faith", "Sara", "Isabelle", "Caroline", "Genesis", "Isabel", "Mary", "Zoey", "Gracie", "Megan", "Haley", "Mya", "Michelle", "Molly", "Stephanie", "Nicole", "Jenna", "Natalia", "Sadie", "Jada", "Serenity", "Lucy", "Ruby", "Eva", "Kennedy", "Rylee", "Jayla", "Naomi", "Rebecca", "Lydia", "Jacob", "Michael", "Ethan", "Joshua", "Daniel", "Alexander", "Anthony", "William", "Christopher", "Matthew", "Jayden", "Andrew", "Joseph", "David", "Noah", "Aiden", "James", "Ryan", "Logan", "John", "Nathan", "Elijah", "Christian", "Gabriel", "Benjamin", "Jonathan", "Tyler", "Samuel", "Nicholas", "Gavin", "Dylan", "Jackson", "Brandon", "Caleb", "Mason", "Angel", "Isaac", "Evan", "Jack", "Kevin", "Jose", "Isaiah", "Luke", "Landon", "Justin", "Lucas", "Zachary", "Jordan", "Robert", "Aaron", "Brayden", "Thomas", "Cameron", "Hunter", "Austin", "Adrian", "Connor", "Owen", "Aidan", "Jason", "Julian", "Wyatt", "Charles", "Luis", "Carter", "Juan", "Chase", "Diego", "Jeremiah", "Brody", "Xavier", "Adam", "Carlos", "Sebastian", "Liam", "Hayden", "Nathaniel", "Henry", "Jesus", "Ian", "Tristan", "Bryan", "Sean", "Cole", "Alex", "Eric", "Brian", "Jaden", "Carson", "Blake", "Ayden", "Cooper", "Dominic", "Brady", "Caden", "Josiah", "Kyle", "Colton", "Kaden", "Eli", "Miguel", "Antonio", "Parker", "Steven", "Alejandro", "Riley", "Richard", "Timothy", "Devin", "Jesse", "Victor", "Jake", "Joel", "Colin", "Kaleb", "Bryce", "Levi", "Oliver", "Oscar", "Vincent", "Ashton", "Cody", "Micah", "Preston", "Marcus", "Max", "Patrick"];
        var firstNameIndex = Math.floor(Math.random() * names.length);
        var firstName = names[firstNameIndex];
        return firstName;
    };
    Main.prototype.peopleGenerator = function () {
        for (var i = 0; i <= this.numberOfPeople; i++) {
            var person = new Person(this.nameGenerator());
            this.people.push(person);
        }
    };
    Main.prototype.hurt = function (chooseIndex, decreaseHP) {
        console.log("HP before decreasing: " + this.people[chooseIndex].HP);
        this.people[chooseIndex].HP -= decreaseHP;
        // this.people[chooseIndex].walk()
        console.log("HP after decreasing: " + this.people[chooseIndex].HP);
        console.log(this.people[chooseIndex]);
    };
    Main.prototype.timer = function (chooseIndex1) {
        var i = 0;
        var walkFunc = this.people[chooseIndex1];
        var t = setInterval(function (walkFunc) {
            // this.walkFunc.walk();
            // this.people[chooseIndex1].walk();
            // this.people[chooseIndex].walk()
            i++;
            console.log(i);
            if (i >= 10) {
                clearInterval(t);
            }
        }, 100);
    };
    return Main;
}());
var main1 = new Main();
main1.timer(1);
main1.hurt(1, 1000);
