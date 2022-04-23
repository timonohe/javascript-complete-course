let person = {
  name: 'Timo',
  age: 30,
  hobbies: ['Sports', 'Cooking'],

  greet: () => {
    alert('Hi there!');
  }
};
person.greet();

// Add a new property isAdmin to the person object
person.isAdmin = true;
console.log(person.isAdmin);
// Removes property from person object
delete person.age;  // equal to person.age = undefined
console.log(person);
console.log(person.age);
person.age = null; // will be part of the person object again
console.log(person);