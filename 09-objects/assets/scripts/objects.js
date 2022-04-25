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

let specialKeyNamesObject = {
  'first-name': 'Timo'
};
console.log(specialKeyNamesObject);
console.log(specialKeyNamesObject['first-name']);
const movieList = document.getElementById('movie-list');
// movieList.style.backgroundColor = 'red';
// movieList.style['backgroundColor'] = 'red';
movieList.style['background-color'] = 'red';
movieList.style.display = 'block';