// class Person {

//     name = 'Bertha';
    
//     constructor() {
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

const person = new Person() 
person.greet()