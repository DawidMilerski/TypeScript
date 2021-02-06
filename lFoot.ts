export class LFoot {
    lFooted:boolean;

    constructor(lFooted:boolean = false) {
        this.lFooted = lFooted;
        console.log("Hi it's left foot!");
    }

    islFooted():void {
        if (this.lFooted === true) {
            console.log("I'm left-footed");
        } else {
            console.log("I'm not left-footed");
        }
    }
}

// var lFoot1 = new LFoot(true);
// var lFoot2 = new LFoot(false);

// lFoot1.islFooted();
// lFoot2.islFooted();