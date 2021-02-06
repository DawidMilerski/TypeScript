export class Lungs {
    lungsCapacity:string;

    constructor(lungsCapacity:string = "4500 ml") {
        this.lungsCapacity = lungsCapacity;

        console.log("Hi, it's lungs!");
    }

    showLungsCapacity():void {
        console.log(`Lungs capacity: ${this.lungsCapacity}`);
    }
}

// var lungs1 = new Lungs("5000 ml");
// lungs1.showLungsCapacity();