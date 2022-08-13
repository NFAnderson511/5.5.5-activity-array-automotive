//this includes the vehicle class as a module
const { Vehicle } = require("./vehicle");

class Car extends Vehicle{
    constructor(make, model, year, color, mileage){
        super(make, model, year, color, mileage)
        this.maximumPassengers = 5;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maximumSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
    }
    loadPassenger(num){
        let availableRoom = false;
        if((this.passenger + num) <= this.maximumPassengers){
            availableRoom = true;
            this.passenger += num;
            return "there are now " + this.passenger + " passengers"
        }
        else{
            return "this car doesn't have enough room"
        }
    }
    start(){
        this.started = false;
        if(this.fuel > 0){
            this.started = true;
        }
        if(this.started){
            return "*Vroom*"
        }
        else{
            return "Not enough fuel"
        }
        
    }
    needsService(mileage){
        this.needsMaintenance = false
        if(mileage >= 30000){
            this.needsMaintenance = true
        }
        if(this.needsMaintenance){
            return "I must get maintenance"
        }
        else{
            return "My car does not need maintenance"
        }
            
    }
}
let myCar = new Car('mercury', 'sedan', '2002', 'white', 50000)
console.log("I own a " + myCar.color + " " + myCar.make + " " + myCar.model + " " + myCar.year + ". It has " + myCar.mileage)
console.log(myCar.start())
console.log(myCar.loadPassenger(3))
console.log(myCar.loadPassenger(2))
console.log(myCar.needsService(myCar.mileage))
