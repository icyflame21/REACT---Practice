// Javascript OOP Concepts

// Strings ,booleans, numbers are primitives but methods can be applied to them
// navigator.geolocation.getCurrentPosition((coords) => {
//   console.log(coords.timestamp.toLocaleString("en-IN"));
// });

// // Object Literal
// const books1 = {
//     title: 'Book One',
//     author: 'John Doe',
//     year: '2013',
//     getSummary: function () {
//         return`This ${this.title} was written by ${this.author} in ${this.year}`
//     }
// };

// console.log(Object.keys(books1))
// console.log(Object.values(books1))

// Constructor
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}
Book.prototype.getSummary = function () {
  return `This ${this.title} was written by ${this.author} in ${this.year}`;
};
// Instantiate an Object
const Book1 = new Book("Book One", "John Doe", "2013");
// console.log(Book1.getSummary());

class Calculator {
  #history;

  constructor(a, b) {
    this.a = a;
    this.b = b;
    this.#history = [];
  }

  add() {
    this.#history.push("add");
    return this.a + this.b;
  }
  reduce() {
    this.#history.push("reduce");
    return this.a - this.b;
  }
  multiply() {
    this.#history.push("multiply");
    return this.a * this.b;
  }
  divide() {
    this.#history.push("divide");
    return this.a / this.b;
  }
  showHistory() {
    return this.#history;
  }
}

let obj = new Calculator(5, 6);
console.log(obj.divide());
console.log(obj.reduce());
console.log(obj.add());
console.log(obj.multiply());
console.log(obj.showHistory());

// Book.prototype.getAge = function () {
//   const years = new Date().getFullYear() - this.year;
//   return `${this.title} is ${years} years old`;
// };

// // Revise / Change Year --> manipulated data
// Book.prototype.revise = function (newYear) {
//     this.year = newYear;
//     this.revised = true;
// }
// Book1.revise(2011)
// console.log(Book1);
