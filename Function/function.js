function sum(parameter1, parameter2) {
    console.log((arguments));
    for (let index = 0; index < arguments.length; index++) {
        const element = arguments[index];
        console.log(element);   
    }
    // here 'arguments' are not array or object its array like data structure
    // also using argument work as a parameter
    
    return parameter1 + parameter2;
}

// sum(argument1, argument2);

// invoke means call the function
console.log(sum(5, 10));

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [11, 52, 33, 41, 5];

function loopSum(arr) {
    console.log(arr);
    console.log(Array.isArray(arr));

    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i]
    }
    console.log(`array : ${typeof arr} total : ${total}`);
}

loopSum(arr1); // invoke
loopSum(arr2);

