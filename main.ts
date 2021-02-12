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

    walk() {
        console.log(`Current Position: X: ${this.position[0]} Y: ${this.position[1]}`);
        console.log(`Target Position: X: ${this.position[0]} Y: ${this.position[1]}`);
        console.log("Twoja stara");
        
    }
    
}

class Main {
    private people:any = [];
    private numberOfPeople:number = 2;

    constructor(){
        this.peopleGenerator();
        console.log(this.people);
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

    hurt(chooseIndex:number, decreaseHP:number):void {
        console.log(`HP before decreasing: ${this.people[chooseIndex].HP}`);
        this.people[chooseIndex].HP -= decreaseHP;
    
        console.log(`HP after decreasing: ${this.people[chooseIndex].HP}`);
        console.log(this.people[chooseIndex]);
    }
    
}

var main1 = new Main();
main1.hurt(1, 1000);