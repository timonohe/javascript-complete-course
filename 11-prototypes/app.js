class AgedPerson {
  printAge() {
    console.log(this.age);
  }
}

class Person extends AgedPerson {
  name = 'Timo';

  constructor() {
    super();
    this.age = 31;
  }

  greet = () => {
    console.log(`Hi, I am ${this.name} and I am ${this.age} years old.`);
  }
}

// function Person() {
//   this.age = 31;
//   this.name = 'Timo';
//   this.greet = function() {
//     console.log(`Hi, I am ${this.name} and I am ${this.age} years old.`);
//   }
// }

// console.dir(Person);

// const person = new Person();
// person.greet();
// console.log(person.toString());
// console.log(person);
// console.log(person.__proto__);
// console.log(person.__proto__ === Person.prototype);

// Person.prototype = {
//   printAge() {
//     console.log(this.age);
//   }
// }

// Person.prototype.printAge = () => {
//   console.log(this.age);
// }

// const person2 = new Person();
// console.log(person2.__proto__);
// person2.printAge();

// const person3 = new person.__proto__.constructor();
// console.log(person3);
// console.log(person3.toString());

// console.dir(Object);
// console.dir(Object.prototype);

// const p = new Person();
// const p2 = new Person();
// console.log(p);
// console.log(p.__proto__ === p2.__proto__);

// const button = document.getElementById('btn');
// button.addEventListener('click', p.greet);

const course = {
  title: 'JavaScript - The Complete Guide',
  rating: 5
};

console.log(Object.getPrototypeOf(course)); // same as course.__prototype__
Object.setPrototypeOf(course, {
  ...Object.getPrototypeOf(course),
  printRating: function() {
    console.log(`${this.rating} out of 5`);
  }
});

const student = Object.create({
  printProgress: function() {
    console.log(`${this.progress * 100}%`);
  }
}, {
  name: {
    configurable: true,
    enumerable: true,
    value: 'Timo',
    writable: false
  }
});

Object.defineProperty(student, 'progress', {
  configurable: true,
  enumerable: true,
  value: 0.8,
  writable: false
});
console.log(student);
student.printProgress();
course.printRating();