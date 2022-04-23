const numbers = [3, 76, -2, 1002, 99, 3.56];
const result = numbers
  .filter(number => number > 5)
  .map(number => ({ num: number }))
  .reduce((prevValue, curValue) => prevValue * curValue.num, 1);
console.log(result);

const findMaximumNumber = (...numbers) => {
  let max;
  for (const number of numbers) {
    if (number > max || max === undefined) {
      max = number;
    }
  }
  return max;
};
console.log(findMaximumNumber(...numbers));

const findMaxAndMin = function(...numbers) {
  let max;
  let min;
  for (const number of numbers) {
    if (number > max || max === undefined) {
      max = number;
    }

    if (number < min || min === undefined) {
      min = number;
    }
  }
  return [max, min];
};
const [max, min] = findMaxAndMin(...numbers);
console.log(max, min);

const uniqueSet = new Set([1, 2, 3, 4]);
console.log(uniqueSet);
uniqueSet.add(2);
console.log(uniqueSet);
uniqueSet.add(5);
console.log(uniqueSet);