// Custom Bind Method
// ----------------------

let name={
    firstName: 'Biswaranjan',
    lastName: 'Subudhi'
}

function printname(hometown,state) {
    console.log(this.firstName + ' ' + this.lastName + " " + "lives in " + hometown + ", " 
    + state)
}
// let printName2 = printname.bind(name,'Odisha','Bhubaneswar')
// printName2()
// custom Bind

Function.prototype.myBind=function(...args) {
    let obj = this,
    params=args.slice(1)
    return function (...args2) {
        obj.apply(args[0],[...args2,...params])
    }
}
let printName2 = printname.myBind(name, 'Bhubaneswar')
printName2('Odisha')