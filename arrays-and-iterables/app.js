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
let personalData = [30, 'Timo', { moreDetails: [] }];
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

hobbies = ['Sports', 'Cooking'];
// Array.splice adds x new items after the starting index and deletes y items (specified as second parameter)
hobbies.splice(1, 0, 'Good Food');
console.log(hobbies);
// removes 1 item starting at index 0 (negative index starts at the end of the array)
const removedElements = hobbies.splice(0, 1);
console.log(hobbies);
console.log(removedElements);

const testResults = [1, 5.3, 1.5, 10.99, -5, 10, 1.5];
let storedResults = testResults; // copy reference value
testResults.push(5.91);
console.log(testResults, storedResults); // same values
storedResults = testResults.slice(); // creates an entirely new array (copy array)
testResults.push(1337);
console.log(testResults, storedResults); // 1337 only appeares in testResults
console.log(testResults.slice(0, 2)); // creates a new array starting at position x and ends on position y (excluding item on index y)
console.log(testResults.slice(-3, -1));

// Array.concat combine array-items with another existing array and returns it as a new array
storedResults = testResults.concat([3.99, 2]);
testResults.push(1405);
console.log(storedResults, testResults);

// Array.indexOf() returns the first found index with given item
console.log(testResults.indexOf(1.5));
// Array.lastIndexOf() returns the first found index with given item beginning with the end of the array
console.log(testResults.lastIndexOf(1.5));

// Array.(last)indexOf() doesn't work on objects because of the reference-value
personalData = [{name: 'Max'}, {name: 'Manuel'}];
// Array.find() stops at the first finding and returns the same object item from the array
const manuel = personalData.find(person => person.name === 'Manuel');
manuel.name = 'Anna';
console.log(manuel, personalData);
const maxIndex = personalData.findIndex(person => person.name === 'Max');
console.log(maxIndex);

// Shorter way for testResults.indexOf(10.99) !== -1
console.log(testResults.includes(10.99));

// Alternative for a loop over all array items includes the index as optional parameter
const prices = [10.99, 5.99, 3.99, 6.59];
const tax = 0.19;
const taxAdjustedPrices = [];
// for (const price of prices) {
//   taxAdjustedPrices.push(price * (1 + tax));
// }
prices.forEach((price, index) => {
  const priceObj = { index, taxAdjPrice: price * (1 + tax) };
  taxAdjustedPrices.push(priceObj);
}); 
console.log(taxAdjustedPrices);

const taxAdjustedPricesWithMap = prices.map((price, index) => {
  return { index, taxAdjPrice: price * (1 + tax) };
});
console.log(prices, taxAdjustedPricesWithMap);

prices.sort((a, b) => {
  if (a > b) {
    return 1;
  } else if (a === b) {
    return 0;
  } else {
    return -1;
  }
});
console.log(prices);
console.log(prices.reverse());

const filteredArray = prices.filter(price => price > 6);
console.log(filteredArray);

const sum = prices.reduce((prevValue, curValue) => prevValue + curValue, 0);
console.log(sum);

const data = 'new york;10.99;2000';
const transformedData = data.split(';');
transformedData[1] = +transformedData[1];
console.log(transformedData);
const nameFragments = ['Max', 'Schwarz'];
const joinedName = nameFragments.join(' ');
console.log(joinedName);

// Spread-Operator
const copiedNameFragments = [...nameFragments];
nameFragments.push('Mr');
console.log(nameFragments, copiedNameFragments);
console.log(Math.min(...prices));
const persons = [{ name: 'Max', age: 30 }, { name: 'Manuel', age: 31 }];
const copiedPersonsWithReferences = [...persons];
const deepclonedPersons = [...persons.map(person => ({ name: person.name, age: person.age }))];
persons.push({ name: 'Anna', age: 29 });
persons[0].age = 31;
console.log(persons, copiedPersonsWithReferences, deepclonedPersons);

// Array Destructuring
// const firstName = nameFragments[0];
// const lastName = nameFragments[1];
const [ firstName, lastName ] = nameFragments;
console.log(firstName, lastName);