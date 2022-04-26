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

const specialKeyNamesObject = {
  'first-name': 'Timo'
};
console.log(specialKeyNamesObject);
console.log(specialKeyNamesObject['first-name']);
const movieList = document.getElementById('movie-list');
// movieList.style.backgroundColor = 'red';
// movieList.style['backgroundColor'] = 'red';
movieList.style['background-color'] = 'red';
movieList.style.display = 'block';

const propertyTypes = {
  1.5: 'hello'
};
console.log(propertyTypes);
console.log(propertyTypes[1.5]);
// object attributes are ordered like they are added to that object
console.log(person);
const numbers = {5: 'hi', 1: 'true'};
// objects with numbers as attribute names are sorted
console.log(numbers);

const keyName = 'first-name';
console.log(specialKeyNamesObject[keyName]); // specialKeyNamesObject.keyName wouldn't work
const userChosenKeyName = 'level';
const dynamicPropertySetting = {
  [userChosenKeyName]: '...'
};
console.log(dynamicPropertySetting);

// Spread-Operator with objects
person = {
  name: 'Max',
  hobbies: ['Sports', 'Cooking']
};
// Objects are "reference-valuces"...
const anotherPerson = person;
// ... so this will add the age property also on anotherPerson
person.age = 30;
// takes all key-value pairs and merge/copy it into a new object (arrays etc. are again reference values)
const person2 = { ...person };
// this will change the age only in person and anotherPerson not in 
// person2 because the spread-operator copys all primitive values
person.age = 31;
// adds coding to hobbies in all 3 objects because hobbies are stored in an array (reference-value)
person.hobbies.push('Coding');
// pull all key-value pairs and copies it into a new object includes the age
// but overrides it with 29 and deep copy hobbies with spread operator on person.hobbies
const person3 = { ...person, age: 29, hobbies: [...person.hobbies] };
// removes last hobbie in all person objects except person3 because it is a deep copy
person.hobbies.pop();