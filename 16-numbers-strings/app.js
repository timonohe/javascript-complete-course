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
console.log(20.2 * 100); // work with cent instead of euro is a possible workaround

// BigInt-Type (primitive value bigger than MAX_SAFE_INTEGER)
console.log(90071992547409919n);
console.log(900719925474099191234408n); // no supported decimal places!
console.log(10n - 4n); // Cannot mix BigInt and other types
console.log(parseInt(10n) - 4);
console.log(10n - BigInt(4));
console.log(5n/2n); // outputs 2n because BigInt cuts off all decimal places (no rounding!)

// Global Number- and Math-Object
console.log(Number.POSITIVE_INFINITY);
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.isFinite(10));
console.log(Number.isFinite(1/0));
console.log(Math.E);
console.log(Math.PI);
console.log(Math.abs(-5));
console.log(Math.random().toFixed(2) * 100);

// Demo with Math-Object
function randomIntBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log(randomIntBetween(5, 10));

// Exploring String-Methods
console.log("Hello".length);
console.log("hello".toUpperCase());
console.log("HELLO".toLowerCase());
console.log("hello".startsWith("he"));

// Tagged Templates
const myName = "Timo";
console.log(`My name is ${myName}`); // nothing new!
function productDescription(strings, productName, productPrice) {
  console.log(strings);
  console.log(productName);
  console.log(productPrice);
  let priceCategory = 'pretty cheap regarding its price';
  if (productPrice > 20) {
    priceCategory = 'fairly priced';
  }

  // return `${strings[0]}${productName}${strings[1]}${priceCategory}${strings[2]}`;
  return {name: productName, price: productPrice};
}
const prodName = 'JavaScript Course';
const prodPrice = 29.99;
const productOutput = productDescription`This product (${prodName}) is ${prodPrice}.`;
console.log(productOutput);

// Regular Expressions
const userInput = 'testtest.com';
console.log(userInput.includes('@')); // false
console.log(userInput.includes('.')); // true but whould allow 'tes.t@test' as an correct e-mail
// const regex = new RegExp('some-regex');
let regex = /^\S+@\S+\.\S+$/;
console.log(regex.test(userInput));
console.log(regex.test('test@test.com'));

regex = /hello/;
console.log(regex.test('hello'));
console.log(regex.test('hi there, hello'));
console.log(regex.test('hi there, hello...'));
console.log(regex.test('Hello')); // false because regex-tests are case-sensitive
regex = /(h|H)ello/;
console.log(regex.test('hello'));
console.log(regex.test('hi - hello'));
console.log(regex.test('hi - hello ...'));
console.log(regex.test('hi - Hello ...'));
console.log(regex.test('hi - ello'));
regex = /.ello/; // . is a wildcard
console.log(regex.test('hello'));
console.log(regex.test('ello'));
console.log(regex.test('Jello'));
console.log(regex.test('        Jello'));
console.log(regex.exec('jello'));
console.log(regex.exec('Hi! jello'));
console.log('hi jello'.match(regex));