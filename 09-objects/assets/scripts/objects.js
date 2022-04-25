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