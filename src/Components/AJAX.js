// SetTimeout and Closure Example
//----------------------------------------------------------------
function a() {
    for (var i = 1; i <= 5; i++){
        function b(x) {
            setTimeout(() => {
                console.log(x);
            }, 1000 * x)
        }
        b(i)
    }
    console.log("Hello THERE")
}
a()


// ----------------------------------------------------------------

// AJAX:- Asynchronous Javascript and XML
// AJAX is a technique for creating fast and dynamic web pages
// Javascript Ajax Syntax
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
        console.log(this.responseText)
    }else if (this.readyState ===4 && this.status === 404) {
        console.log("File not found")
    }
}
xhttp.open('GET', 'https://jsonplaceholder.typicode.com/posts', true)
xhttp.send()
