export class Hand {
    betterHand:string;

    constructor(betterHand:string = "right") {
        this.betterHand = betterHand;
        console.log("Hi it's hand!");
    }

    showBetterHand():void {
        if (this.betterHand === "right") {
            console.log("I'm right-handed");
        } else {
            console.log("I'm left-handed");
        }
    }
}

// var Hand1 = new Hand("right");
// var Hand2 = new Hand("left");

// Hand1.showBetterHand();
// Hand2.showBetterHand();