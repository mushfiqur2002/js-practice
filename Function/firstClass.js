function sum(x, y) {
    return x + y;
}
function sub(x, y) {
    return x - y;
}

// 1. A function can be stored in a 'Variable'
let add = sum;
console.log(add(7, 3));

// 2. A function can be stored in an 'Array'
let arr = []
arr.push(add)
arr.push(sub)
console.log(arr);
console.log(arr[0](5, 6)); // call the sum function
console.log(arr[1](12, 6)); // call the sub function

// A function can be stroed in an 'Object'
let obj = {
    add: sum,
    minus: sub
}
console.log(obj);
console.log(obj.add(7,9));

// Create a function as a need
setTimeout(function(){
    console.log('create a funciton as we need');
},3000)




