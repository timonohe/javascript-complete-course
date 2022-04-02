const startGameBtn = document.getElementById('start-game-btn');

// [129] this would throw an error because variables that declares an variable are parsed to the top of the javascript-file
// but will not be initalized
// start();

// [128] functions can be stored in variables like this
const start = function() {
  console.log('Game is starting...');
};

// [126] greet() is called "method" because it is stored within an object as a property
// const person = { 
//   name: 'Timo',
//   greet: function greet() {
//     console.log(`Hello ${this.name}!`);
//   }
// };

// person.greet()

// [127] console-output shows that functions are objects with meta-informations in it
// function startGame() {
//   console.log('Game is starting...');
// };
// console.log(typeof startGame);
// console.dir(startGame);

startGameBtn.addEventListener('click', start);