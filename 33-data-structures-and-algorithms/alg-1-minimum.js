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

function getMin2(numbers) {
  if (!numbers.length) {
    throw new Error('Should not be an empty array!');
  }

  for (let i = 0; i < numbers.length; i++) {
    let outerElement = numbers[i];

    for (let j = i + 1; j < numbers.length; j++) {
      let innerElement = numbers[j];

      if (outerElement > innerElement) {
        numbers[i] = innerElement;
        numbers[j]= outerElement;
        outerElement = numbers[i];
        innerElement = numbers[j];
      }
    }
  }

  return numbers[0];
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

console.log(getMin2([1, 3, 2]));
console.log(getMin2([2, 1, -5, 10, 10, -10]));
console.log(getMin2([1]));
console.log(getMin2([1, 1, 1, 5]));
console.log(getMin2([5, 1, 5]));