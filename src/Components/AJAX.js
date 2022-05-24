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

