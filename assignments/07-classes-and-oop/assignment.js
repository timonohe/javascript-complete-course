class Course {
  #price;

  get price() {
    return `\$${this.#price}`;
  }

  set price(value) {
    if (value <= 0) {
      throw 'Invalid price!';
    }

    this.#price = value;
  }

  constructor(title, length, price) {
    this.title = title;
    this.length = length;
    this.price = price;
  }

  get lengthPerPrice() {
    return this.length / this.#price;
  }

  get summary() {
    return `The Course "${this.title}" has a length of ${this.length} hours and costs ${this.price}"`;
  }
}

class PracticalCourse extends Course {
  constructor(title, length, price, numOfExercies) {
    super(title, length, price);
    this.numOfExercies = numOfExercies;
  }
}

class TheoreticalCourse extends Course {  
  publish() {
    console.log(`Publish "${this.title}" ...`);
  }
}

const course1 = new Course("JavaScript - The Complete Guide", 61, 129.99);
const course2 = new Course("TypeScript - The Full Course", 12, 99.99);

console.log(course1);
console.log(course2);

console.log(course1.lengthPerPrice);
console.log(course2.lengthPerPrice);
console.log(course1.summary);
console.log(course2.summary);

const practicalCourse = new PracticalCourse("Angular - Full Course", 72, 134.99, 623);
const theoreticalCourse = new TheoreticalCourse("SCRUM at it's best", 29, 78.99);

console.log(practicalCourse.summary);
console.log(practicalCourse.lengthPerPrice);
console.log(theoreticalCourse.summary);
console.log(theoreticalCourse.lengthPerPrice);
theoreticalCourse.publish()