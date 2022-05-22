// Constructor
// function Book(title, author, year) {
//     this.title = title;
//     this.author = author;
//     this.year = year;
// }
//   getSummary
//   Book.prototype.getSummary = function () {
//     return `This ${this.title} was written by ${this.author} in ${this.year}`;
// };
//   Constructor
// function Magazine(title, author, year,month) {
//     Book.call(this, title, author, year,)
//     this.month = month
// }
// Inherit prototype from 
// Magazine.prototype = Object.create(Book.prototype)

// const mag1 = new Magazine('Mag One', 'John Doe', '2018', 'January')
// const book = new Book('Mag One', 'John Doe', '2018', 'January')
// Magazine.prototype.constructor =Magazine
// console.log(book)
// console.log(mag1);
// console.log(mag1)



// Object of Protos
const bookProtos = {
    getSummary : function () {
        return `This ${this.title} was written by ${this.author} in ${this.year}`;
    },
    getAge : function () {
        const years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years} years old`;
      }

}
// Create Object
const book1 = Object.create(bookProtos, {
    title: { value: 'Book One' },
    author: { value: 'John Doe' }, 
    year: { value:'2019'}
})
console.log(book1);