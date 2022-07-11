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
  // curEmployee: 0,
  employees: ['Max', 'Manu', 'Anna'],
  // next() {
  //   if (this.curEmployee >= this.employees.length) {
  //     return { value: this.curEmployee, done: true };
  //   }

  //   const returnValue = { 
  //     value: this.employees[this.curEmployee], 
  //     done: false
  //   };
  //   this.curEmployee++;
  //   return returnValue;
  // },
  [Symbol.iterator]: function* employeeGenerator() {
    // let employee = company.next();

    // while(!employee.done) {
    //   yield employee.value;
    //   employee = company.next();
    // }
    let currentEmployee = 0;
    while(currentEmployee < this.employees.length) {
      yield this.employees[currentEmployee];
      currentEmployee++;
    }
  }
}

// let employee = company.next();

// while(!employee.done) {
//   console.log(employee.value);
//   employee = company.next();
// }

for (const employee of company) {
  console.log(employee);
}
console.log([...company]);

// const it = company.getEmployee();

// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

const persons = ['Max', 'Manu'];
console.log(persons);

// Reflect-API

const course = {
  title: 'JavaScript - The Complete Guide'
};
Reflect.setPrototypeOf(course, { 
  toString() { 
    return this.title;
  }
});
console.log(course.toString());
Reflect.deleteProperty(course, 'title');
console.log(course);