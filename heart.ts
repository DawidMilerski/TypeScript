export class Heart {
    heartRate:number;

    constructor(heartRate:number = 80) {
        this.heartRate = heartRate;

        console.log("Hi it's heart!");
    }

    showHeartRate():void {
        console.log(`My heart rate: ${this.heartRate} bpm`);
    }
}

// var heart1 = new Heart(60);
// heart1.showHeartRate();