let arr = [3, 4, 8, 2, -1, -3, 0, 6, 7];

// without compare function sort convert array element into string
// and sort them based on UTF-16
arr.sort();
console.log(arr);

// Ascending order
arr.sort((a, b) => a - b);
console.log('Ascending : ',arr);

// Descending order
arr.sort((a, b) => b - a);
console.log('Descending : ',arr);

let obj = [
    {
        name: 'A',
        age: 12
    },
    {
        name: 'B',
        age: 32
    },
    {
        name: 'C',
        age: 25
    },
    {
        name: 'D',
        age: 20
    }
]

obj.sort((a,b)=> a.age - b.age)
console.log(obj);



