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