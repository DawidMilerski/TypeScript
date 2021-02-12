export class Lungs {
    lungsCapacity:number;

    constructor(lungsCapacity:number = Math.floor(Math.random() * (6000 - 4000 + 1) + 4000)) {
        this.lungsCapacity = lungsCapacity;
        console.log("Hi, it's lungs!");
    }

    showLungsCapacity():void {
        console.log(`Lungs capacity: ${this.lungsCapacity} ml`);
    }
}

// var lungs1 = new Lungs();
// lungs1.showLungsCapacity();