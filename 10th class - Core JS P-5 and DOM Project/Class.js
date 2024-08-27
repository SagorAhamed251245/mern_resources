//creating class
class Person {
    constructor(firstName, secondName) {
        this.firstName = firstName;
        this.secondName = secondName
    }

    sayHello() {
        console.log(`Hello my name is ${this.firstName} is waiving you Mr ${this.secondName}`)
    }
}

//creating instance
const person1 = new Person("Shoaib", "Mitul")

person1.sayHello()
