// SetTimeout and Closure Example
//----------------------------------------------------------------
// function a() {
//     for (var i = 1; i <= 5; i++){
//         function b(x) {
//             setTimeout(() => {
//                 console.log(x);
//             }, 1000 * x)
//         }
//         b(i)
//     }
//     console.log("Hello THERE")
// }
// a()

// ----------------------------------------------------------------
// Counter example
// var t = 1,id;

// id = setInterval(() => {
//   if (t <=10) {
//     console.log(t);
//     t++;
//   } else clearInterval(id);
// });

// function duplicate(a) {
//   var new_arr = [].concat(a,a);
//   console.log(new_arr.join(" "));
// }
// var a = [1, 2, 3, 4, 5, 6, 7, 8]
// duplicate(a)
for (var i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("fizzbuzz");
  } else if (i % 3 == 0) {
    console.log("fizz");
  } else if (i % 5 == 0) {
    console.log("buzz");
  }
}

// ----------------------------------------------------------------

// AJAX:- Asynchronous Javascript and XML
// AJAX is a technique for creating fast and dynamic web pages
// Javascript Ajax Syntax
// var xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function () {
//     if (this.readyState === 4 && this.status === 200) {
//         console.log(this.responseText)
//     }else if (this.readyState ===4 && this.status === 404) {
//         console.log("File not found")
//     }
// }
// xhttp.open('GET', 'https://jsonplaceholder.typicode.com/posts', true)
// xhttp.send()
