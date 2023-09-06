function Animal(type, age) {
    this.type = type
    this.age = age
}

const mammals1 = new Animal('mammals', 5)
const mammals2 = new Animal('mammals', 5)
console.log(mammals1)

Animal.prototype.eat = function () {
    console.log(`${this.type} animal is eating`)
}

mammals1.eat()
mammals2.eat()

console.log(mammals1.eat === mammals2.eat)//?