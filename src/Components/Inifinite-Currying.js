// sum(1)(2)(3)(4).....()
// calling summ function recursively
// let sum = function (a) {
//     return function (b) {
//         if (b) {
//             return sum(a+b)
//         }
//         return a
//     }
// }
// console.log(sum(1)(2)(3)(4)(5)(6)(7)())



// Inifinite Accumulation function
function add(a){
 function sum(b){
    a =   a+b;
    return sum;
 }
 sum.toString = function(){return a;}
 return sum;
}
console.log(add(1)(2)(3)(4));


//  Write a function that accepts any number of arguments in Javascript
// function add(...args) {
// return args.reduce((acc,cur)=>acc+cur)
// }
// console.log(add(3,4,7));