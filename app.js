class AgedPerson {
    printAge() {
        console.log(this.age)
    }
}

// class Person extends AgedPerson{
    class Person {
    name = 'Bertha';
    
    constructor() {
        // super()
        this.age = 20
    };

    // greet = () => {
    //    console.log(`Well hello ${this.name}. I see you turned ${this.age} today.`)
    // }
    greet() {
        console.log(`Well hello ${this.name}. I see you turned ${this.age} today.`)
     }
}

// function Person () {
//     this.age = 21;
//     this.name = 'Simon';
//     // this.greet = function() {
//     //     console.log(`Well hello ${this.name}. I see you turned ${this.age} today.`) 
//     // }
// }
// Person.prototype.greet = function() {
//     console.log(`Well hello ${this.name}. I see you turned ${this.age} today.`) 
// }

// Person.describe = function() {
//     console.log('Creating persons')
// }

// Person.prototype = { // this is the same as a child object using extends
//     printAge() {
//         console.log(this.age)
//     }
// }


// Person.prototype.printAge = function () {
//     console.log(this.age)
// }

// console.dir(Person)


// const person = new Person() 
// person.greet()
// person.printAge()
// console.log(person.length)
// console.log(person.toString())
// const person2 = new person.__proto__.constructor()
// console.dir(Object.prototype.__proto__)

const person = new Person();
const person2 = new Person();
person.greet()
console.log(person.__proto__ == person2.__proto__)
const btn = document.getElementById('btn')
btn.addEventListener('click', person.greet.bind(person))
