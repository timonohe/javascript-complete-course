function sumUp(numbers) {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum+= numbers[i];
  }

  return sum;
}

console.log(sumUp([1, 2, 3]));
console.log(sumUp([1, 2, 5]));