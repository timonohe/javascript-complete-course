const numbers = [1, 2, 3];
console.log(numbers);

let newNumbers = new Array('Hi', 'Welcome!');
console.log(newNumbers);
newNumbers = new Array(5); // initialize new array with 5 empty items (special case)
console.log(newNumbers);

const yetMoreNumbers = Array.of(1, 2); // initialize new Array like [1, 2] but is not good performance-wise
console.log(yetMoreNumbers);

newNumbers = Array.from('Hi!'); // Array.from takes an iterable and extracts each item into a new array
console.log(newNumbers);

const listItems = document.querySelectorAll('li');
console.log(listItems);
const arrayListItems = Array.from(listItems);
console.log(arrayListItems);