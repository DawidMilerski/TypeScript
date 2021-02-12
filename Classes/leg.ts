export class Leg {
    strength:number;

    constructor(strength:number = Math.floor(Math.random() * (59 - 30 + 1) + 30)) {
        this.strength = strength;
        console.log("Hi it's leg!");
    }

    showStrength():void {
        console.log(`Strength: ${this.strength}`);

        if (this.strength >= 90) {
            console.log("My leg is very strong!");
        } else if (this.strength >= 60) {
            console.log("My leg is strong!");
        } else if (this.strength >= 30) {
            console.log("My leg's strenght is average");
        } else if (this.strength < 30) {
            console.log("My leg is weak :/");
        }
    }

    decreaseStrength():void {
        console.log(`Strength before decreasing: ${this.strength}`);
        this.strength --;
        console.log(`Strength after decreasing: ${this.strength}`);
    }

    increaseStrength():void {
        console.log(`Strength before increasing: ${this.strength}`);
        this.strength ++;
        console.log(`Strength after increasing: ${this.strength}`);
    }
}

// var Leg1 = new Leg(100);
// var Leg2 = new Leg(60);
// var Leg3 = new Leg(30);
// var Leg4 = new Leg(10);

// Leg1.showStrength();
// Leg2.showStrength();
// Leg3.showStrength();
// Leg4.showStrength();