export class Torso {
    chestStrength:number;
    abdominalStrength:number;

    constructor(chestStrength:number = 45, abdominalStrength:number = 45) {
        this.chestStrength = chestStrength;
        this.abdominalStrength = abdominalStrength;

        console.log("Hi it's torso!");
    }

    showStrength():void {

        if (this.chestStrength >= 90) {
            console.log("My chest muscles are very strong!");
        } else if (this.chestStrength >= 60) {
            console.log("My chest muscles are strong!");
        } else if (this.chestStrength >= 30) {
            console.log("My chest muscle's strength is average");
        } else if (this.chestStrength < 30) {
            console.log("My chest muscles are weak :/");
        }

        if (this.abdominalStrength >= 90) {
            console.log("My abdominal muscles are very strong!");
        } else if (this.abdominalStrength >= 60) {
            console.log("My abdominal muscles are strong!");
        } else if (this.abdominalStrength >= 30) {
            console.log("My abdominal muscle's strength is average");
        } else if (this.abdominalStrength < 30) {
            console.log("My abdominal muscles are weak :/");
        }

    }
}

// var torso1 = new Torso(100, 100);
// var torso2 = new Torso(60, 60);
// var torso3 = new Torso(40, 40);
// var torso4 = new Torso(10, 10);

// torso1.showStrength();
// torso2.showStrength();
// torso3.showStrength();
// torso4.showStrength();