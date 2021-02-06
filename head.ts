export class Head { 
    hairColor:string;
    eyesColor:string;
    eyeDefect:boolean;

    constructor(hairColor:string, eyesColor:string, eyeDefect:boolean = false) {
        this.hairColor = hairColor;
        this.eyesColor = eyesColor;
        this.eyeDefect = eyeDefect;

        console.log("Hi it's head!");
    }
        
    FuncEyeDefect():void {
        console.log(`I have ${this.hairColor} hair and ${this.eyesColor} eyes`);

        if (this.eyeDefect === true) {
            console.log(`I have an eye defect`);
        } else {
            console.log(`I don't have an eye defect`);
        }
    }
    
}

// var head1 = new Head("brown", "green", true);
// var head2 = new Head("blond", "blue", false);

// head1.FuncEyeDefect();
// head2.FuncEyeDefect();