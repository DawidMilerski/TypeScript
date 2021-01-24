var Person = /** @class */ (function () {
    function Person(a) {
        this.name = a;
    }
    Person.prototype.showName = function () {
        console.log("Name: " + this.name);
    };
    return Person;
}());
var newObject = new Person("Ewa");
newObject.showName();
