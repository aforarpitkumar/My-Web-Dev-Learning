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