// Library land
const uid = Symbol('uid');
console.log(uid);

const user = {
  // id: 'p1',
  [uid]: 'p1',
  name: 'Timo',
  age: 31,
  [Symbol.toStringTag]: 'User'
};

// app land => Using the library
user.id = 'p2'; // this should not be possible!
console.log(user);
console.log(Symbol('uid') === Symbol('uid'));
console.log(user.toString());