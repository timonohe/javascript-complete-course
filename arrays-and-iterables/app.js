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

let hobbies = ['Sports', 'Cooking'];
const personalData = [30, 'Timo', { moreDetails: [] }];
const analyticsData = [
  [1, 1.6],
  [-5.4, 2.1],
];
for (const data of analyticsData) {
  for (const dataPoint of data) {
    console.log(dataPoint);
  }
}
console.log(personalData[1]);

hobbies.push('Reading'); // Array.push() adds a new element at the end of the array
hobbies.unshift('Coding'); // Array.unshift() adds a new element at the start of the array
console.log(hobbies);
hobbies.pop(); // Array.pop() removes the last item of the array and returns it
hobbies.shift(); // Array.shift() removes the first item of the array and returns it
// ...shift() and ...unshift() are performance-wise slower than ...push() and ...pop(), because they shift each element
console.log(hobbies);
hobbies[1] = 'Coding';
// will add 3 empty items and the 'Coding'-Item on index 5
hobbies[5] = 'Reading'; // rarely used
console.log(hobbies, hobbies[4]);
