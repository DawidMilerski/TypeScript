export class Brain {
    iq:number;
    personalityType:string;

    constructor(iq:number = 110, personalityType:string) {
        this.iq = iq;
        this.personalityType = personalityType;

        console.log("Hi it's brain!");
    }

    showData():void {
        console.log(`My iq: ${this.iq}`);
        console.log(`My personality type: ${this.personalityType}`);
    }
}

// var brain1 = new brain(127, "Introvert");
// var brain2 = new brain(115, "Extrovert");

// brain1.showData();
// brain2.showData();