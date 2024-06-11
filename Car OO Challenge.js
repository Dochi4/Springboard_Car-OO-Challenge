
class Vehicle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
      }
    honk(){
        return "Beep."
    }
    toString(){
        const { a, b, c } = this;
        return `The vehicle is a ${a} ${b} from ${c}.`
    }
}

class Car extends Vehicle{
    constructor(a,b,c,numWheels){
        super(a,b,c);
        this.numWheels = 4
    }
}

class Motorcycle extends Vehicle{
    constructor(a,b,c,numWheels){
        super(a,b,c);
        this.numWheels = 2
    }
    revEngine(){
        return "VROOM!!!"
    }
}

class Garage {
    constructor(capacity) {
        this.vehicles = [];
        this.capacity = capacity
      }
    add(NewItem){
       if(!(NewItem instanceof Vehicle)){
        return "Only vehicles are allowed in here!"
       }
       if(this.vehicles.length>=this.capacity){
        return "Sorry, we're full."
       }
       this.vehicles.push(NewItem);
       return "Vehicle added!"
    }
}