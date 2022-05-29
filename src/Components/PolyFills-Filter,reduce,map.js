// map(), filter(),reduce() methods are invoked on arrays and written in Array class in JavaScript

//  <!-- map() method -->

// var a=[5,2,6,8];
// var r = a.map(item => item*2);          // map() is invoked here
// console.log(r);
// The output is: Array [10, 4, 12, 16]

// Syntax:- 
// let new_array = arr.map(function callback( currentValue, index, array) {
// // return element for new_array
// },[thisArg])


// Custom map
// Array.prototype.myMap = function (callback) {
//     let arr = []
//     for (var i = 0; i < this.length; i++) {
//     arr.push(callback(this[i]))
//     }
//     return arr
// }
// var a = [5, 2, 6, 8]
// var r = a.myMap(e => e * 3)
// console.log(r);

// Syntax:- let newArray = arr.filter(callback(element, index,array)[thisArg])

// Custom  Filter Function
// Array.prototype.myFilter = function (callback) {
//     let arr = []
//     for (var i = 0; i < this.length; i++) {
//         if (callback(this[i]))
//             arr.push(this[i])
//     }
//     return arr
// }


// Syntax:- arr.reduce(callback( accumulator, currentValue, index, array )[initialValue])

// Custom Reduce Function
Array.prototype.myReduce = function (callback,initialValue) {
    let a=initialValue
    for (var i = 0; i < this.length; i++){
    callback(a=a+this[i])
    }
    return a
}
var a = [5, 2, 6, 8]
var r = a.myReduce((acc, curr) => {
    acc=acc+ curr
},9)
console.log(r);
