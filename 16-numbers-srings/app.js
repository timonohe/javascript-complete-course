console.log('Biggest Integer (without decimal places)', Number.MAX_SAFE_INTEGER);
console.log('Largest Number (with decimal places)', Number.MAX_VALUE);
console.log('Smallest Integer (without decimal places)', Number.MIN_SAFE_INTEGER);
console.log('Smallest Number (with decimal places)', Number.MIN_VALUE);

console.log(0.2 + 0.4);
console.log(0.2 + 0.4 === 0.6); // false -> 0.6000000000000001

console.log((1).toString(2));
console.log((5).toString(2)); // Number 5 in the Binary-System
console.log(0.2.toString(2));

console.log(0.2.toFixed(20)); // 0.20000000000000001110
console.log((0.2 + 0.4).toFixed(2));

// Example: Online-Shop

// want to charge 20.2 €
console.log(20.2.toFixed(20)); // 20.19999999999999928946
console.log(20.2 * 100);