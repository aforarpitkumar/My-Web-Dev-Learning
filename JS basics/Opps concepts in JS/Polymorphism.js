// example of polymorphism in JS using method overriding
// polymorphism is the ability of an object to take on many forms. 
// it allows us to use a single interface to represent different types of objects. 
// method overriding is a feature of polymorphism that allows a subclass to provide a specific implementation of a method that is already defined in its superclass.            

class Bird {

    constructor(name, color) {
        this.name = name;
        this.color = color;
    }

    fly() {
        return this.name + " is flying";
    }                                       

}

class Sparrow extends Bird {        

    fly() {
        return this.name + " is flying at a low altitude";
    }

}

let mySparrow = new Sparrow("JackSparrow", "Brown");
console.log(mySparrow.fly());

let Parrot = new Bird("Polly Parrot", "Green");
console.log(Parrot.fly());

