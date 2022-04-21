// A Set has unique entries
const ids = new Set([1, 2, 3]);
console.log(ids.has(1));
ids.add(2);
console.log(ids.has(2));
console.log(ids);
for (const entry of ids.entries()) {
  console.log(entry);
}
ids.delete(3);
console.log(ids);

const person1 = { name: 'Max' };
const person2 = { name: 'Manuel' };
const personData = new Map([[person1, [{ date: 'yesterday', price: 10 }]]]);
personData.set(person2, [{ date: 'two weeks ago', price: 100 }]);
console.log(personData);
console.log(personData.get(person1));
console.log(personData.get(person2));
for (const [key, value] of personData.entries()) {
  console.log(key, value);
}
for (const key of personData.keys()) {
  console.log(key);
}
for (const value of personData.values()) {
  console.log(value);
}
personData.forEach((value) => console.log(value));
console.log(personData.size);

let person = { name: 'Max' };
const personWeakSet = new WeakSet();
personWeakSet.add(person);
// ... some operations with person
// person = null;
console.log(personWeakSet);

const personDataWeakMap = new WeakMap();
personDataWeakMap.set(person, 'Extra information!');
console.log(personDataWeakMap);