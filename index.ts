import { Back } from './back';
import { Brain } from './brain'; 
import { Head } from './head'; 
import { Heart } from './heart'; 
import { LArm } from './lArm'; 
import { RArm } from './rArm';
import { LFoot } from './lFoot'; 
import { RFoot } from './rFoot'; 
import { LHand } from './lHand'; 
import { RHand } from './rHand'; 
import { LLeg } from './lLeg'; 
import { RLeg } from './rLeg'; 
import { Lungs } from './lungs'; 
import { Torso } from './torso';

class Person {
    name:string;
    age:number;
    HP:number;
    private back:Back;
    private brain:Brain;
    private head:Head;
    private heart:Heart;
    private lArm:LArm;
    private rArm:RArm;
    private lFoot:LFoot;
    private rFoot:RFoot;
    private lHand:LHand;
    private rHand:RHand;
    private lLeg:LLeg;
    private rLeg:RLeg;
    private lungs:Lungs;
    private torso:Torso;
    

    constructor(n:string, a:number, hp:number = 1000) {
        this.name = n;
        this.age = a;
        this.HP = hp;
        console.log(`Hi it's ${this.name}, I'm ${this.age}`);
        console.log(`HP: ${this.HP}`);
        
        this.back = new Back();
        this.back.showStrength();

        this.brain = new Brain(127, "Introvert");
        this.brain.showData();

        this.head = new Head("brown", "blue", true);
        this.head.FuncEyeDefect();

        this.heart = new Heart();
        this.heart.showHeartRate();

        this.lArm = new LArm();
        this.lArm.showStrength();

        this.rArm = new RArm();
        this.rArm.showStrength();

        this.lFoot = new LFoot();
        this.lFoot.islFooted();
        
        this.rFoot = new RFoot();
        this.rFoot.isrFooted();

        this.lHand = new LHand();
        this.lHand.islHanded();
        
        this.rHand = new RHand();
        this.rHand.isrHanded();

        this.lLeg = new LLeg();
        this.lLeg.showStrength();
        
        this.rLeg = new RLeg();
        this.rLeg.showStrength();

        this.lungs = new Lungs();
        this.lungs.showLungsCapacity();

        this.torso = new Torso();
        this.torso.showStrength();
    }
}

var Person1 = new Person("Ross", 27, 1000);
var Person2 = new Person("Rachel", 22, 1000);
var Person3 = new Person("Chandler", 25, 1000);
var Person4 = new Person("Monica", 24, 1000);
var Person5 = new Person("Joey", 26, 1000);
var Person6 = new Person("Phoebe", 23, 1000);

var People = [Person1, Person2, Person3, Person4, Person5, Person6];

console.log(People[0]);
console.log(People[1]);
console.log(People[2]);
console.log(People[3]);
console.log(People[4]);
console.log(People[5]);