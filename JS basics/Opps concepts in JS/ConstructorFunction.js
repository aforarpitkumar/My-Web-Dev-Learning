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