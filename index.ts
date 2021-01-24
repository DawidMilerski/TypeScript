class Person {
    name:string;

    constructor(a:string) {
        this.name = a;
    }

    showName():void {
        console.log("Name: "+this.name);
    }
}

var newObject = new Person("Ewa");

newObject.showName();