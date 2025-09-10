let obj = {
    1234: {
        name: 'riad',
        age: 23,
        city: 'dhaka'
    },
    1235: {
        name: 'yamim',
        age: 23,
        city: 'dhaka'
    },
    1236: {
        name: 'dandi',
        age: 23,
        city: 'dhaka'
    }
}

// object convert into array 
let entries = Object.entries(obj)

let result = entries.find(function([key,value]){
    return key === '1236'
})
console.log(result);