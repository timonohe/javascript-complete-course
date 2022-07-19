function getMin(numbers) {
  if (!numbers.length) {
    throw new Error('Should not be an empty array!');
  }

  let currentMinimum = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < currentMinimum) {
      currentMinimum = numbers[i];
    }
  }

  return currentMinimum;
}

const testNumbers = [3, 1, 2];
const min = getMin(testNumbers);
console.log(min); // should be 1

console.log(getMin([3])); 
try {
  console.log(getMin([]));
} catch(err) {
  console.error(err);
}
console.log(getMin([1, 5, 1]));
console.log(getMin([10, -5, 100, 99, -2]));