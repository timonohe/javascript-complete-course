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

const company = {
  curEmployee: 0,
  employees: ['Max', 'Manu', 'Anna'],
  next() {
    if (this.curEmployee >= this.employees.length) {
      return { value: this.curEmployee, done: true };
    }

    const returnValue = { 
      value: this.employees[this.curEmployee], 
      done: false
    };
    this.curEmployee++;
    return returnValue;
  }
}

let employee = company.next();

while(!employee.done) {
  console.log(employee.value);
  employee = company.next();
}