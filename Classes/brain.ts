export class Brain {
    iq:number;
    personalityType:string;

    constructor(personalityType:string, iq:number = Math.floor(Math.random() * (115 - 85 + 1) + 85)) {
        this.iq = iq;
        this.personalityType = personalityType;

        console.log("Hi it's brain!");
    }

    showData():void {
        console.log(`My iq: ${this.iq}`);
        console.log(`My personality type: ${this.personalityType}`);
    }
}

// var brain1 = new Brain("Introvert");
// var brain2 = new Brain(115, "Extrovert");

// brain1.showData();
// brain2.showData();