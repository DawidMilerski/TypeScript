export class LHand {
    lHanded:boolean;

    constructor(lHanded:boolean = false) {
        this.lHanded = lHanded;
        console.log("Hi it's left hand!");
    }

    islHanded():void {
        if (this.lHanded === true) {
            console.log("I'm left-handed");
        } else {
            console.log("I'm not left-handed");
        }
    }
}

// var lHand1 = new LHand(true);
// var lHand2 = new LHand(false);

// lHand1.islHanded();
// lHand2.islHanded();