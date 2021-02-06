export class RFoot {
    rFooted:boolean;

    constructor(rFooted:boolean = true) {
        this.rFooted = rFooted;
        console.log("Hi it's right foot!");
    }

    isrFooted():void {
        if (this.rFooted === true) {
            console.log("I'm right-footed");
        } else {
            console.log("I'm not right-footed");
        }
    }
}

// var rFoot1 = new RFoot(true);
// var rFoot2 = new RFoot(false);

// rFoot1.isrFooted();
// rFoot2.isrFooted();