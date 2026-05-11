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
// this function will return a string that the vechile is stopping
Vechile.prototype.stop = function() {
    return this.maker + " " + this.model + " is stopping";
};

console.log(Bike.stop());

// use of prototype is to add new properties and methods to the existing class without modifying the original class definition. 
// It allows us to extend the functionality of a class without changing its structure, 
// which is particularly useful when we want to add features to built-in objects or when we want to share methods across multiple instances of a class.

class Car extends Vechile {

    // extra parameter added in the child class which is not present in the parent class
    constructor(maker, model, year) {
        super(maker, model);
        this.year = year;
    }

    // this function will tell the details of the car like its year, maker and model

    getCarDetails() {
        return "My car is a " + this.year + " " + this.maker + " " + this.model;
    }   

}

// this is an object of the Car class which is a child class of the Vechile class and it will have all the properties and methods of the Vechile class as well as its own properties and methods

let myCar = new Car("Honda", "Civic", 2020);

console.log(myCar.getCarDetails());

// example of encapsulation in JS using private fields 
// #balance is a private field which can only be accessed within the class and not outside the class

class BankAccount {

    #balance = 0;

    constructor(accountNumber, accountHolderName) {
        this.accountNumber = accountNumber;
        this.accountHolderName = accountHolderName;
    }

    // this function will add the amount to the balance and return a message of successful deposit along with the new balance

    deposit(amount) {
        this.#balance += amount;
        return "Deposit successful. New balance: " + this.#balance;
    }

    // this function will check if the amount to be withdrawn is greater than the current balance or not, if it is greater then it will return a message of insufficient funds and if it is less than or equal to the current balance then it will deduct the amount from the balance and return a message of successful withdrawal along with the new balance

    withdraw(amount) {
        if (amount > this.#balance) {
            return "Insufficient funds. Current balance: " + this.#balance;
        } else {
            this.#balance -= amount;
            return "Withdrawal successful. New balance: " + this.#balance;
        }
    }

    // this function will return the account details like account number, account holder name and current balance

    getAccountDetails() {
        return "Account Number: " + this.accountNumber + ", Account Holder: " + this.accountHolderName + ", Balance: " + this.#balance;
    }
}

let myAccount = new BankAccount("123456789", "Arpit Kumar");
let myAccount2 = new BankAccount("987654321", "John Doe");

console.log(myAccount.getAccountDetails());
console.log(myAccount.deposit(2000));
console.log(myAccount.withdraw(3000));
console.log(myAccount.withdraw(5000));
console.log(myAccount.withdraw(1000));
console.log(myAccount.getAccountDetails());

console.log("Now we will check the details of the second account which is created by John Doe");

console.log(myAccount2.getAccountDetails());
console.log(myAccount2.deposit(5000));
console.log(myAccount2.withdraw(2000));
console.log(myAccount2.getAccountDetails());

console.log("its time to explore abstraction in JS using classes and methods");


// example of abstraction in JS using classes and methods
// abstraction is the process of hiding the implementation details and showing only the functionality to the user. 
// it allows us to focus on what an object does instead of how it does it.      

class coffeMachine {

    constructor(coffeType, waterLevel) {
        this.coffeType = coffeType;
        this.waterLevel = waterLevel;
    }

    makeCoffe() {
        if (this.waterLevel > 0) {
            this.waterLevel -= 1;
            return "Making " + this.coffeType + " coffe. Water level is now: " + this.waterLevel;
        } else {
            return "Cannot make coffe. Water level is too low.";
        }
    }

    refillWater(amount) {
        this.waterLevel += amount;
        return "Water refilled. Current water level: " + this.waterLevel;
    }

    makeCoffieBro(WaterLevel) {

        let coffiemakingfunction = this.makeCoffe();
        let waterRefillFunction = this.refillWater(WaterLevel);

        return coffiemakingfunction + " " + waterRefillFunction + " " + "Coffie Ready Bro!";

    }
}   

let myCoffeMachine = new coffeMachine("Espresso", 2);

console.log(myCoffeMachine.makeCoffieBro(3));

console.log("its time to explore polymorphism in JS using method overriding");

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

