export class Heart {
    heartRate:number;

    constructor(heartRate:number = Math.floor(Math.random() * (100 - 60 + 1) + 60)) {
        this.heartRate = heartRate;
        console.log("Hi it's heart!");
    }

    showHeartRate():void {
        console.log(`My heart rate: ${this.heartRate} bpm`);
    }
}

var heart1 = new Heart();
heart1.showHeartRate();