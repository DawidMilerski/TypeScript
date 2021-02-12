define("Classes/arm", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    exports.Arm = void 0;
    var Arm = (function () {
        function Arm(strength) {
            if (strength === void 0) { strength = Math.floor(Math.random() * (59 - 30 + 1) + 30); }
            this.strength = strength;
            console.log("Hi it's arm!");
        }
        Arm.prototype.showStrength = function () {
            console.log("Strength: " + this.strength);
            if (this.strength >= 90) {
                console.log("My arm is very strong!");
            }
            else if (this.strength >= 60) {
                console.log("My arm is strong!");
            }
            else if (this.strength >= 30) {
                console.log("My arm's strenght is average");
            }
            else if (this.strength < 30) {
                console.log("My arm is weak :/");
            }
        };
        Arm.prototype.decreaseStrength = function () {
            console.log("Strength before decreasing: " + this.strength);
            this.strength--;
            console.log("Strength after decreasing: " + this.strength);
        };
        Arm.prototype.increaseStrength = function () {
            console.log("Strength before increasing: " + this.strength);
            this.strength++;
            console.log("Strength after increasing: " + this.strength);
        };
        return Arm;
    }());
    exports.Arm = Arm;
});
define("Classes/back", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    exports.Back = void 0;
    var Back = (function () {
        function Back(strength) {
            if (strength === void 0) { strength = Math.floor(Math.random() * (59 - 30 + 1) + 30); }
            this.strength = strength;
            console.log("Hi it's back!");
        }
        Back.prototype.showStrength = function () {
            if (this.strength >= 90) {
                console.log("My back is very strong!");
            }
            else if (this.strength >= 60) {
                console.log("My back is strong!");
            }
            else if (this.strength >= 30) {
                console.log("My back's strenght is average");
            }
            else if (this.strength < 30) {
                console.log("My back is weak :/");
            }
        };
        Back.prototype.decreaseStrength = function () {
            console.log("Strength before decreasing: " + this.strength);
            this.strength--;
            console.log("Strength after decreasing: " + this.strength);
        };
        Back.prototype.increaseStrength = function () {
            console.log("Strength before increasing: " + this.strength);
            this.strength++;
            console.log("Strength after increasing: " + this.strength);
        };
        return Back;
    }());
    exports.Back = Back;
});
define("Classes/brain", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    exports.Brain = void 0;
    var Brain = (function () {
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
});
define("Classes/foot", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    exports.Foot = void 0;
    var Foot = (function () {
        function Foot(betterFoot) {
            if (betterFoot === void 0) { betterFoot = "right"; }
            this.betterFoot = betterFoot;
            console.log("Hi it's foot!");
        }
        Foot.prototype.showBetterFoot = function () {
            if (this.betterFoot === "right") {
                console.log("I'm right-footed");
            }
            else {
                console.log("I'm left-footed");
            }
        };
        return Foot;
    }());
    exports.Foot = Foot;
});
define("Classes/hand", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    exports.Hand = void 0;
    var Hand = (function () {
        function Hand(betterHand) {
            if (betterHand === void 0) { betterHand = "right"; }
            this.betterHand = betterHand;
            console.log("Hi it's hand!");
        }
        Hand.prototype.showBetterHand = function () {
            if (this.betterHand === "right") {
                console.log("I'm right-handed");
            }
            else {
                console.log("I'm left-handed");
            }
        };
        return Hand;
    }());
    exports.Hand = Hand;
});
define("Classes/head", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    exports.Head = void 0;
    var Head = (function () {
        function Head(hairColor, eyesColor, eyeDefect) {
            if (eyeDefect === void 0) { eyeDefect = false; }
            this.hairColor = hairColor;
            this.eyesColor = eyesColor;
            this.eyeDefect = eyeDefect;
            console.log("Hi it's head!");
        }
        Head.prototype.setEyeDefect = function () {
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
});
define("Classes/heart", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    exports.Heart = void 0;
    var Heart = (function () {
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
});
define("Classes/leg", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    exports.Leg = void 0;
    var Leg = (function () {
        function Leg(strength) {
            if (strength === void 0) { strength = Math.floor(Math.random() * (59 - 30 + 1) + 30); }
            this.strength = strength;
            console.log("Hi it's leg!");
        }
        Leg.prototype.showStrength = function () {
            console.log("Strength: " + this.strength);
            if (this.strength >= 90) {
                console.log("My leg is very strong!");
            }
            else if (this.strength >= 60) {
                console.log("My leg is strong!");
            }
            else if (this.strength >= 30) {
                console.log("My leg's strenght is average");
            }
            else if (this.strength < 30) {
                console.log("My leg is weak :/");
            }
        };
        Leg.prototype.decreaseStrength = function () {
            console.log("Strength before decreasing: " + this.strength);
            this.strength--;
            console.log("Strength after decreasing: " + this.strength);
        };
        Leg.prototype.increaseStrength = function () {
            console.log("Strength before increasing: " + this.strength);
            this.strength++;
            console.log("Strength after increasing: " + this.strength);
        };
        return Leg;
    }());
    exports.Leg = Leg;
});
define("Classes/lungs", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    exports.Lungs = void 0;
    var Lungs = (function () {
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
});
define("Classes/torso", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    exports.Torso = void 0;
    var Torso = (function () {
        function Torso(chestStrength, abdominalStrength) {
            if (chestStrength === void 0) { chestStrength = Math.floor(Math.random() * (59 - 30 + 1) + 30); }
            if (abdominalStrength === void 0) { abdominalStrength = Math.floor(Math.random() * (59 - 30 + 1) + 30); }
            this.chestStrength = chestStrength;
            this.abdominalStrength = abdominalStrength;
            console.log("Hi it's torso!");
        }
        Torso.prototype.showStrength = function () {
            if (this.chestStrength >= 90) {
                console.log("My chest muscles are very strong!");
            }
            else if (this.chestStrength >= 60) {
                console.log("My chest muscles are strong!");
            }
            else if (this.chestStrength >= 30) {
                console.log("My chest muscle's strength is average");
            }
            else if (this.chestStrength < 30) {
                console.log("My chest muscles are weak :/");
            }
            if (this.abdominalStrength >= 90) {
                console.log("My abdominal muscles are very strong!");
            }
            else if (this.abdominalStrength >= 60) {
                console.log("My abdominal muscles are strong!");
            }
            else if (this.abdominalStrength >= 30) {
                console.log("My abdominal muscle's strength is average");
            }
            else if (this.abdominalStrength < 30) {
                console.log("My abdominal muscles are weak :/");
            }
        };
        Torso.prototype.decreaseChestStrength = function () {
            console.log("Chest strength before decreasing: " + this.chestStrength);
            this.chestStrength--;
            console.log("Chest strength after decreasing: " + this.chestStrength);
        };
        Torso.prototype.increaseChestStrength = function () {
            console.log("Chest strength before increasing: " + this.chestStrength);
            this.chestStrength++;
            console.log("Chest strength after increasing: " + this.chestStrength);
        };
        Torso.prototype.decreaseAbdominalStrength = function () {
            console.log("Abdominal strength before decreasing: " + this.abdominalStrength);
            this.abdominalStrength--;
            console.log("Abdominal strength after decreasing: " + this.abdominalStrength);
        };
        Torso.prototype.increaseAbdominalStrength = function () {
            console.log("Abdominal strength before increasing: " + this.abdominalStrength);
            this.abdominalStrength++;
            console.log("Abdominal strength after increasing: " + this.abdominalStrength);
        };
        return Torso;
    }());
    exports.Torso = Torso;
});
define("main", ["require", "exports", "Classes/arm", "Classes/back", "Classes/brain", "Classes/foot", "Classes/hand", "Classes/head", "Classes/heart", "Classes/leg", "Classes/lungs", "Classes/torso"], function (require, exports, arm_1, back_1, brain_1, foot_1, hand_1, head_1, heart_1, leg_1, lungs_1, torso_1) {
    "use strict";
    exports.__esModule = true;
    var Person = (function () {
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
    var Main = (function () {
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
            console.log("HP after decreasing: " + this.people[chooseIndex].HP);
            console.log(this.people[chooseIndex]);
        };
        return Main;
    }());
    var main1 = new Main();
    main1.hurt(1, 1000);
});
//# sourceMappingURL=out.js.map