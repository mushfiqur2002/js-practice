// array traversing

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
}

// insert element at the "end"
arr.push(10);
console.log('push : ',arr);

// insert element at the "beginning"
arr.unshift(0);
console.log('unshift : ', arr);

// remove element from the "end"
arr.pop();
console.log(arr);

// remove element from the "beginning"
arr.shift();
console.log(arr);

// remove element from the "middle"
arr.splice(4, 1); // (index, how many elements to remove)
console.log('splice : ', arr);

arr.splice(4, 2, 11, 12);
console.log('splice with insert : ', arr);
