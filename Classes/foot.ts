export class Foot {
    betterFoot:string;

    constructor(betterFoot:string = "right") {
        this.betterFoot = betterFoot;
        console.log("Hi it's foot!");
    }

    showBetterFoot():void {
        if (this.betterFoot === "right") {
            console.log("I'm right-footed");
        } else {
            console.log("I'm left-footed");
        }
    }
}

// var Foot1 = new Foot("right");
// var Foot2 = new Foot("left");

// Foot1.showBetterFoot();
// Foot2.showBetterFoot();
