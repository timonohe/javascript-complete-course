/*
  Pure Functions with/without side-effects
*/

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

/*
  Factory Functions - a function that produces another function
*/

let multiplier = 1.1;

function createTaxCalculator(tax) {
  function calculateTax(amount) {
    console.log(multiplier);
    return amount * tax * multiplier;
  }

  return calculateTax;
}

const calculateVatAmount = createTaxCalculator(0.19);
const calculateIncomeTaxAmount = createTaxCalculator(0.25);

multiplier = 1.2;

console.log(calculateVatAmount(100));
console.log(calculateVatAmount(200));

/*
  Closures
*/

let userName = 'Timo';

function greetUser() {
  let name = userName;
  // let anotherName = 'Anna';
  console.log(`Hi ${userName}`);
  console.log(`Hi ${name}`);
  console.log(`Hi ${anotherName}`);
}

let anotherName = 'Maximilian';
userName = 'Manuel';

greetUser();

/*
  Recursion
*/

// function PowerOf(x, n) {
//   let result = 1;

//   for (let i = 0; i < n; i++) {
//     result *= x;
//   }

//   return result;
// }

function powerOf(x, n) {
  if (n === 1) {
    return x;
  }

  return n === 1 ? x : x * powerOf(x, n - 1);
}

console.log(powerOf(2, 3)); // 2 * 2 * 2

const myself = {
  name: 'Timo',
  friends: [
    {
      name: 'Manuel',
      friends: [
        {
          name: 'Chris',
          friends: [
            {
              name: 'Hari'
            },
            {
              name: 'Amilia'
            }
          ]
        }
      ]
    },
    {
      name: 'Julia'
    }
  ]
};

function getFriendNames(person) {
  const collectedNames = [];

  if (!person.friends) {
    return [];
  }

  for (const friend of person.friends) {
    collectedNames.push(friend.name);
    collectedNames.push(...getFriendNames(friend));
  }

  return collectedNames;
}

console.log(getFriendNames(myself));