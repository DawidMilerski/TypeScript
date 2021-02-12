export class Torso {
    chestStrength:number;
    abdominalStrength:number;

    constructor(chestStrength:number = Math.floor(Math.random() * (59 - 30 + 1) + 30), abdominalStrength:number = Math.floor(Math.random() * (59 - 30 + 1) + 30)) {
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

    decreaseChestStrength():void {
        console.log(`Chest strength before decreasing: ${this.chestStrength}`);
        this.chestStrength --;
        console.log(`Chest strength after decreasing: ${this.chestStrength}`);
    }
    increaseChestStrength():void {
        console.log(`Chest strength before increasing: ${this.chestStrength}`);
        this.chestStrength ++;
        console.log(`Chest strength after increasing: ${this.chestStrength}`);
    }


    decreaseAbdominalStrength():void {
        console.log(`Abdominal strength before decreasing: ${this.abdominalStrength}`);
        this.abdominalStrength --;
        console.log(`Abdominal strength after decreasing: ${this.abdominalStrength}`);
    }
    increaseAbdominalStrength():void {
        console.log(`Abdominal strength before increasing: ${this.abdominalStrength}`);
        this.abdominalStrength ++;
        console.log(`Abdominal strength after increasing: ${this.abdominalStrength}`);
    }
}

// var torso1 = new Torso(100, 100);
// torso1.increaseChestStrength();
// torso1.decreaseChestStrength();
// torso1.increaseAbdominalStrength();
// torso1.decreaseAbdominalStrength();

// var torso2 = new Torso(60, 60);
// var torso3 = new Torso(40, 40);
// var torso4 = new Torso(10, 10);

// torso1.showStrength();
// torso2.showStrength();
// torso3.showStrength();
// torso4.showStrength();