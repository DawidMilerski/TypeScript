import { Arm } from './Classes/arm';
import { Back } from './Classes/back';
import { Brain } from './Classes/brain'; 
import { Foot } from './Classes/foot';
import { Hand } from './Classes/hand';
import { Head } from './Classes/head'; 
import { Heart } from './Classes/heart';    
import { Leg } from './Classes/leg';  
import { Lungs } from './Classes/lungs'; 
import { Torso } from './Classes/torso';

class Person {
    name:string;
    age:number;
    HP:number;
    position:any = [];
    targetPosition:any = [];
    walkSpeed:any = [0,0];

    private back:Back;
    private brain:Brain;
    private head:Head;
    private heart:Heart;
    private lArm:Arm;
    private rArm:Arm;
    private lFoot:Foot;
    private rFoot:Foot;
    private lHand:Hand;
    private rHand:Hand;
    private lLeg:Leg;
    private rLeg:Leg;
    private lungs:Lungs;
    private torso:Torso;

    constructor(n:string, a:number = Math.floor(Math.random() * (40 - 18 + 1) + 18), hp:number = Math.floor(Math.random() * (1500 - 1000 + 1) + 1000), position:any = [Math.floor(Math.random() * (700 - 0 + 1) + 0), Math.floor(Math.random() * (700 - 0 + 1) + 0)], targetPosition:any = [Math.floor(Math.random() * (700 - 0 + 1) + 0), Math.floor(Math.random() * (700 - 0 + 1) + 0)]) {
        this.name = n;
        this.age = a;
        this.HP = hp;
        this.position = position;
        this.targetPosition = targetPosition;
        
        console.log(`Hi it's ${this.name}, I'm ${this.age}`);
        console.log(`HP: ${this.HP}`);
        console.log(`Current Position: X: ${this.position[0]} Y: ${this.position[1]}`);
        console.log(`Target Position: X: ${this.position[0]} Y: ${this.position[1]}`);

        this.back = new Back();
        this.back.showStrength();

        this.brain = new Brain("Introvert");
        this.brain.showData();

        this.head = new Head("brown", "blue", true);
        this.head.setEyeDefect();

        this.heart = new Heart();
        this.heart.showHeartRate();

        this.lArm = new Arm();
        this.lArm.showStrength();

        this.rArm = new Arm();
        this.rArm.showStrength();

        this.lFoot = new Foot();
        this.lFoot.showBetterFoot();
        
        this.rFoot = new Foot();
        this.rFoot.showBetterFoot();

        this.lHand = new Hand();
        this.lHand.showBetterHand();
        
        this.rHand = new Hand();
        this.rHand.showBetterHand();

        this.lLeg = new Leg();
        this.lLeg.showStrength();
        
        this.rLeg = new Leg();
        this.rLeg.showStrength();

        this.lungs = new Lungs();
        this.lungs.showLungsCapacity();

        this.torso = new Torso();
        this.torso.showStrength();
    }

    run() {
        var xDistance:number = Math.abs(this.targetPosition[0] - this.position[0]);
        var yDistance:number = Math.abs(this.targetPosition[1] - this.position[1]);

        // console.log(`Target X - Current X = ${xDistance}`);
        // console.log(`Target Y - Current Y = ${yDistance}`);

        if (xDistance >= 100 ) {
            this.walkSpeed[0] = 100;
            console.log(`Current X walk speed: ${this.walkSpeed[0]} px/s`);
        }else if (xDistance >= 50 ) {
            this.walkSpeed[0] = 50;
            console.log(`Current X walk speed: ${this.walkSpeed[0]} px/s`);
        } else if (xDistance >= 10) {
            this.walkSpeed[0] = 10;
            console.log(`Current X walk speed: ${this.walkSpeed[0]} px/s`);
        } else if (xDistance >= 5) {
            this.walkSpeed[0] = 5;
            console.log(`Current X walk speed: ${this.walkSpeed[0]} px/s`);
        } else if (xDistance < 5) {
            this.walkSpeed[0] = 1;
            console.log(`Current X walk speed: ${this.walkSpeed[0]} px/s`);
        }

        if (yDistance >= 100 ) {
            this.walkSpeed[1] = 100;
            console.log(`Current Y walk speed: ${this.walkSpeed[1]} px/s`);
        }else if (yDistance >= 50 ) {
            this.walkSpeed[1] = 50;
            console.log(`Current Y walk speed: ${this.walkSpeed[1]} px/s`);
        } else if (yDistance >= 10) {
            this.walkSpeed[1] = 10;
            console.log(`Current Y walk speed: ${this.walkSpeed[1]} px/s`);
        } else if (yDistance >= 5) {
            this.walkSpeed[1] = 5;
            console.log(`Current Y walk speed: ${this.walkSpeed[1]} px/s`);
        } else if (yDistance < 5) {
            this.walkSpeed[1] = 1;
            console.log(`Current Y walk speed: ${this.walkSpeed[1]} px/s`);
        }
    }

    walk() {
        console.log(`Current Position: X: ${this.position[0]} Y: ${this.position[1]}`);
        console.log(`Target Position: X: ${this.targetPosition[0]} Y: ${this.targetPosition[1]}`);
        this.run();

        if (this.position[0] < this.targetPosition[0]) {
            this.position[0] += this.walkSpeed[0];
            console.log(`Current X position: ${this.position[0]}`);
        } else if (this.position[0] > this.targetPosition[0]) {
            this.position[0] -= this.walkSpeed[0];
            console.log(`Current X position: ${this.position[0]}`);
        } else {
            this.walkSpeed[0] = 0;
            console.log(`Current X: ${this.position[0]} and Target X: ${this.targetPosition[0]} are the same`);
        }

        if (this.position[1] < this.targetPosition[1]) {
            this.position[1] += this.walkSpeed[1];
            console.log(`Current Y position: ${this.position[1]}`);
        } else if (this.position[1] > this.targetPosition[1]) {
            this.position[1] -= this.walkSpeed[1];
            console.log(`Current Y position: ${this.position[1]}`);
        } else {
            this.walkSpeed[0] = 0;
            console.log(`Current Y: ${this.position[1]} and Target Y: ${this.targetPosition[1]} are the same`);
        }
        
        if(this.position[0] == this.targetPosition[0] && this.position[0] == this.targetPosition[0]){
            this.stay();
        }
    }

    stay(){
        this.position = [Math.floor(Math.random() * (700 - 0 + 1) + 0), Math.floor(Math.random() * (700 - 0 + 1) + 0)];
        this.targetPosition = [Math.floor(Math.random() * (700 - 0 + 1) + 0), Math.floor(Math.random() * (700 - 0 + 1) + 0)];
        
        this.walk();
    };
    
}

class Main {
    private people:any = [];
    private numberOfPeople:number = 2;
    private canvas: HTMLCanvasElement;
    private context: CanvasRenderingContext2D;

    constructor(){
        /*
        const canvas = document.getElementById('simulation') as HTMLCanvasElement;
        const context = canvas.getContext('2d');
       
        this.canvas = canvas;
        this.context = context;
        */

        this.peopleGenerator();
        console.log(this.people);
        // this.people[2].walk();
        // this.people[2].stay();
        this.render();
        // this.genCanvas();
    }

    private nameGenerator() {
        let names = ["Emma","Isabella","Emily","Madison","Ava","Olivia","Sophia","Abigail","Elizabeth","Chloe","Samantha","Addison","Natalie","Mia","Alexis","Alyssa","Hannah","Ashley","Ella","Sarah","Grace","Taylor","Brianna","Lily","Hailey","Anna","Victoria","Kayla","Lillian","Lauren","Kaylee","Allison","Savannah","Nevaeh","Gabriella","Sofia","Makayla","Avery","Riley","Julia","Leah","Aubrey","Jasmine","Audrey","Katherine","Morgan","Brooklyn","Destiny","Sydney","Alexa","Kylie","Brooke","Kaitlyn","Evelyn","Layla","Madeline","Kimberly","Zoe","Jessica","Peyton","Alexandra","Claire","Madelyn","Maria","Mackenzie","Arianna","Jocelyn","Amelia","Angelina","Trinity","Andrea","Maya","Valeria","Sophie","Rachel","Vanessa","Aaliyah","Mariah","Gabrielle","Katelyn","Ariana","Bailey","Camila","Jennifer","Melanie","Gianna","Charlotte","Paige","Autumn","Payton","Faith","Sara","Isabelle","Caroline","Genesis","Isabel","Mary","Zoey","Gracie","Megan","Haley","Mya","Michelle","Molly","Stephanie","Nicole","Jenna","Natalia","Sadie","Jada","Serenity","Lucy","Ruby","Eva","Kennedy","Rylee","Jayla","Naomi","Rebecca","Lydia",  "Jacob","Michael","Ethan","Joshua","Daniel","Alexander","Anthony","William","Christopher","Matthew","Jayden","Andrew","Joseph","David","Noah","Aiden","James","Ryan","Logan","John","Nathan","Elijah","Christian","Gabriel","Benjamin","Jonathan","Tyler","Samuel","Nicholas","Gavin","Dylan","Jackson","Brandon","Caleb","Mason","Angel","Isaac","Evan","Jack","Kevin","Jose","Isaiah","Luke","Landon","Justin","Lucas","Zachary","Jordan","Robert","Aaron","Brayden","Thomas","Cameron","Hunter","Austin","Adrian","Connor","Owen","Aidan","Jason","Julian","Wyatt","Charles","Luis","Carter","Juan","Chase","Diego","Jeremiah","Brody","Xavier","Adam","Carlos","Sebastian","Liam","Hayden","Nathaniel","Henry","Jesus","Ian","Tristan","Bryan","Sean","Cole","Alex","Eric","Brian","Jaden","Carson","Blake","Ayden","Cooper","Dominic","Brady","Caden","Josiah","Kyle","Colton","Kaden","Eli","Miguel","Antonio","Parker","Steven","Alejandro","Riley","Richard","Timothy","Devin","Jesse","Victor","Jake","Joel","Colin","Kaleb","Bryce","Levi","Oliver","Oscar","Vincent","Ashton","Cody","Micah","Preston","Marcus","Max","Patrick"];    

        const firstNameIndex = Math.floor(Math.random() * names.length);
        const firstName = names[firstNameIndex];
        return firstName;
    }

    private peopleGenerator() {
        for(var i = 0; i <= this.numberOfPeople; i++){
            let person = new Person(this.nameGenerator());
            this.people.push(person);
        }
    }

    public hurt(chooseIndex:number, decreaseHP:number):void {
        console.log(`HP before decreasing: ${this.people[chooseIndex].HP}`);
        this.people[chooseIndex].HP -= decreaseHP;
    
        console.log(`HP after decreasing: ${this.people[chooseIndex].HP}`);
        console.log(this.people[chooseIndex]);
    }    


    public render() {
        var seconds = 0;
        var interval = setInterval(function() {

            seconds++;
            // this.people[2].walk();
            console.log(seconds);
    
            if (seconds >= 10) {
                clearInterval(interval);
                // this.people[2].stay();
            }

        }, 100);
    }

    /*
    genCanvas() {
        const centerX = this.canvas.width / 2;
        const centerY = this.canvas.height / 2;
        const radius = 70;

        this.context.beginPath();
        this.context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
        this.context.fillStyle = 'green';
        this.context.fill();
        this.context.lineWidth = 5;
        this.context.strokeStyle = '#003300';
        this.context.stroke();
    }
    */
}

var main1 = new Main();
// main1.hurt(1, 1000);