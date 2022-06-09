function add(num1, num2) {
  return num1 + num2;
}

console.log(add(1, 5));     // always returns 6
console.log(add(12, 15));   // always returns 27

function addRandom(num1) {
  return num1 + Math.random(); 
}

console.log(addRandom(5));  // returns different values after each call because of side effects (Math.random)

let previousResult = 0;

function addMoreNumbers(num1, num2) {
  const sum = num1 + num2;
  previousResult = sum;     // side effect because it changes something outside the function --> not a pure function!
  return sum;
}

console.log(addMoreNumbers(1, 5));

const hobbies = ['Sports', 'Cooking'];

function printHobbies(h) {
  h.push('NEW HOBBY');  // side effect because it changes the original object "outside" this function --> not a pure function!
  console.log(h);
}

printHobbies(hobbies);