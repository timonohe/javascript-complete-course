/* ====== WORKING WITH LET/CONST ====== */

let myName = 'Timo';
// let myName = 'Anna'; // invalid code because myName was already declared with let

function greetLet() {
  let age = 30;
  let myName = 'Manuel'; // valid code because myName is a shadowed variable here
  console.log(myName, age);
}

// console.log(myName, age); // whould throw an error because age is a function scoped variable declared with let
console.log(myName);

greetLet();

/* ====== WORKING WITH VAR ====== */

var nameVar = 'Timo';
// var nameVar = 'Anna'; // Overrides the previous variable nameVar that declared with var instead of let

if (nameVar === 'Timo') {
  var hobbies = ['Sports', 'Cooking']; // Declared as global variable even its declared within an if statement
  // let hobbies = ['Sports', 'Cooking']; // Throws an error outside of the if-statement because let variables are block-scoped
  console.log(hobbies);
}

function greetVar() {
  var age = 30;
  var nameVar = 'Manuel';
  console.log(nameVar, age, hobbies);
}

console.log(nameVar, hobbies);

greetVar();