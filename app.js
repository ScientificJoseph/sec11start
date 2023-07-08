// class AgedPerson {
//     printAge() {
//         console.log(this.age)
//     }
// }

// class Person extends AgedPerson{
//     name = 'Bertha';
    
//     constructor() {
//         super()
//         this.age = 20
//     };

//     greet() {
//        console.log(`Well hello ${this.name}. I see you turned ${this.age} today.`)
//     }
// }

function Person () {
    this.age = 21;
    this.name = 'Simon';
    this.greet = function() {
        console.log(`Well hello ${this.name}. I see you turned ${this.age} today.`) 
    }
}

// Person.prototype = { // this is the same as a child object using extends
//     printAge() {
//         console.log(this.age)
//     }
// }

Person.describe = function() {
    console.log('Creating persons')
}

Person.prototype.printAge = function () {
    console.log(this.age)
}

console.dir(Person)


const person = new Person() 
person.greet()
person.printAge()
console.log(person)
console.log(person.toString())
const person2 = new person.__proto__.constructor()
console.log(Object)