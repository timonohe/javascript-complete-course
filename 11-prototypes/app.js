// class Person {
//   name = 'Timo';

//   constructor() {
//     this.age = 31;
//   }

//   greet() {
//     console.log(`Hi, I am ${this.name} and I am ${this.age} years old.`);
//   }
// }

function Person() {
  this.age = 31;
  this.name = 'Timo';
  this.greet = function() {
    console.log(`Hi, I am ${this.name} and I am ${this.age} years old.`);
  }
}

const person = new Person();
person.greet();