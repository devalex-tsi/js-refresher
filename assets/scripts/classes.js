function Animal(type, age) {

    this.type = type
    this.age = age

    //the dominant property is the property described inside the type
    this.mammalsSubClass = 'warm-blooded'

    const privateMethod = function () {
        console.log('This is private method! Can call only inside.')
    }

    this.publicMethod = function () {
        privateMethod()
    }
}

const mammals1 = new Animal('mammals', 5)
const mammals2 = new Animal('mammals', 15)
console.log(mammals1)

Animal.prototype.eat = function () {
    console.log(`${this.type} animal is eating`)
}

Animal.prototype.ageInfo = function () {
    console.log(this.age)
}

Animal.prototype.mammalsSubClass = 'vertebrate animals'

Animal.info = function () {
    console.log('This is animal type')
}

mammals1.eat()
mammals2.eat()

mammals1.ageInfo()
mammals2.ageInfo()

console.log(mammals1.eat === mammals2.eat)

//!the dominant property is the property described inside the type
console.log(mammals1.mammalsSubClass)

Animal.info()

mammals1.publicMethod()

//Classes
console.log('---CLASSES---')

class Vehicle {
    static fuel = 'gas'

    constructor(wheelCount, vehicleType, tankVolume) {
        this.wheelCount = wheelCount
        this.vehicleType = vehicleType
        this.tankVolume = tankVolume
    }

    driving() {
        console.log(`${this.vehicleType} is driving via ${this.wheelCount} wheels`)
    }

    get vehicleTypeUpper() {
        console.log(this.vehicleType.toUpperCase())
        return this.vehicleType.toUpperCase()
    }

    set tank(volume) {
        this.tankVolume = volume
        console.log('Tank volume set to ' + volume)
    }
}

const car = new Vehicle(4, 'Car', 50)

console.log(car)
car.driving()

car.vehicleTypeUpper
car.tank = 40

console.log(Vehicle.fuel)

class Truck extends Vehicle {
    static fuel = 'DIESEL'

    constructor(wheelCount, vehicleType, tankVolume, truckType) {
        super(wheelCount, vehicleType, tankVolume);
        this.truckType = truckType
    }

    driving() {
        super.driving()
        console.log('Truck Driving!!!')
    }

    automaticUnloading() {
        console.log('Truck was unloaded')
    }
}

const truck = new Truck(10, 'Truck', 1000, 'road train')
console.log(truck)
truck.driving()

truck.vehicleTypeUpper

truck.automaticUnloading()
console.log(Truck.fuel)