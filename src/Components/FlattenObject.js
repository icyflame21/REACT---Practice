let obj = {
    name: 'Adam',
    age: 29,
    address: {
        city: "Noida",
        pincode: '210761',
        user_details: {
            username: 'Kalam',
            age: '21',
            profession: 'Student',
            profession__details: {
                job: 'developer',
                site: 'bangalore',
                type:'WFH'
            }
        }
    }
}

function flattenObj(obj, parent, result = {}) {
    for (var k in obj) {
        var temp = parent ? parent + "." + k : k
        if (typeof obj[k] === "object") {
            flattenObj(obj[k],temp,result)
        }
        else result[temp]=obj[k]
    }

    return result
}
console.log(flattenObj(obj))