// Shallow Copying

let user = {
    name:'Jaikant'
}
// let user1 = { ...user } --> Method 1
let user1=Object.assign({},user) //--> Method 2
user1.name = 'Harry Potter'
console.log(user)
console.log(user1)

// Deep Copying  with JSON.parse(JSON.strginfy(object_name)) --> with this method method won't get copied into the other object.  to solve this problem we can use loadash CDN link and use this method _.cloneDeep()

// Shallow Copying won't work for nested objects

let obj = {
    name: 'Jaikant',
    age: 29,
    address: {
        city: "Noida",
        pincode: '210761',
    },
    getData: function () {
        return "all data is here"
    }
}

let obj1 = JSON.parse(JSON.stringify(obj))
obj1.address.city = 'Bhubaneswar'
console.log(obj)
console.log(obj1)