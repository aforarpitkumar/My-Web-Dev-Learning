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