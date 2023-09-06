function Animal(type, age) {

    this.type = type
    this.age = age

    //the dominant property is the property described inside the type
    this.mammalsSubClass = 'warm-blooded'

    this.ageInfo = function (){
        console.log(this.age)
    }
}

const mammals1 = new Animal('mammals', 5)
const mammals2 = new Animal('mammals', 15)
console.log(mammals1)

Animal.prototype.eat = function () {
    console.log(`${this.type} animal is eating`)
}

Animal.prototype.mammalsSubClass = 'vertebrate animals'

Animal.info = function (){
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