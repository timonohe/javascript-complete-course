const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)

if (randomNumber > 0.7) {
  alert(`Random number is greater than 0.7: ${randomNumber}!`);
}

const numbers = [Math.random(), Math.random(), Math.random(), Math.random()];

console.log('Number-Array with for-loop');
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

console.log('Number-Array with for-of-loop');
for (const number of numbers) {
  console.log(number);
}

console.log('Number-Array with for-loop reverse');
for (let i = numbers.length - 1; i >= 0; i--) {
  console.log(numbers[i]);
}

const anotherRandomNumber = Math.random();

if (
  (randomNumber > 0.7 && anotherRandomNumber > 0.7) ||
  (randomNumber <= 0.2 || anotherRandomNumber <= 0.2)
) {
  alert(`Both random numbers are greater than 0.7 or at least one of them are not greater than 0.2: ${randomNumber} and ${anotherRandomNumber}`);
}