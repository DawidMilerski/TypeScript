export class RHand {
    rHanded:boolean;

    constructor(rHanded:boolean = true) {
        this.rHanded = rHanded;
        console.log("Hi it's right hand!");
    }

    isrHanded():void {
        if (this.rHanded === true) {
            console.log("I'm right-handed");
        } else {
            console.log("I'm not right-handed");
        }
    }
}

// var rHand1 = new RHand(true);
// var rHand2 = new RHand(false);

// rHand1.isrHanded();
// rHand2.isrHanded();