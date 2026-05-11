// OOPs in JS

class Vechile {

    constructor (maker, model) {
        this.maker = maker;
        this.model = model;
    }

    start() {
        return this.maker + " " + this.model + " is starting";
    }
}

let Bike = new Vechile("Bajaj", "N160");

console.log(Bike.start());

// Constructor function

function test(parameter1, parameter2) {

    this.parameter1 = parameter1;
    this.parameter2 = parameter2;

    this.fun1 = function() {
        console.log("This is a test function to check Constructor Function"+ " " + this.parameter1 + " " + this.parameter2);
    };

    //console.log("This is a test function");
}

let newConstructorObject = new test("Arpit", "Kumar");

newConstructorObject.fun1();

console.log(newConstructorObject.parameter1);
console.log(newConstructorObject.parameter2);

// Prototypal Inheritance added on the class which was declered using constructor function

Vechile.prototype.stop = function() {
    return this.maker + " " + this.model + " is stopping";
};

console.log(Bike.stop());

class Car extends Vechile {

    // extra parameter added in the child class which is not present in the parent class
    constructor(maker, model, year) {
        super(maker, model);
        this.year = year;
    }

    getCarDetails() {
        return "My car is a " + this.year + " " + this.maker + " " + this.model;
    }   

}

let myCar = new Car("Honda", "Civic", 2020);

console.log(myCar.getCarDetails());


