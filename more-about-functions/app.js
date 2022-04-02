const startGameBtn = document.getElementById('start-game-btn');

function startGame() {
  console.log('Game is starting...');
}

// const person = { 
//   name: 'Timo',
//   // greet() is called "method" because it is stored within an object as a property
//   greet: function greet() {
//     console.log(`Hello ${this.name}!`);
//   }
// };

// person.greet()

console.log(typeof startGame);
console.dir(startGame);

startGameBtn.addEventListener('click', startGame);