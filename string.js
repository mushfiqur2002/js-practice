// ** topic 10 ** //


// string constructor and string methods

let str1 = new String(123); // not recommended
let str2 = String(true);
let str3 = String(null);
let str4 = String(undefined);

console.log(str1, str2, str3, str4);
console.log(typeof str1, typeof str2, typeof str3, typeof str4);

// compar two character 
// --> follow Lexicographic order
// ---> based on unicode value
console.log('a' > 'b'); // flase 
console.log('a' < 'b'); // true
console.log('A' > 'a'); // false
console.log('hello' > 'Hello'); // true
console.log('a' === 'a');

// now a fucking shit why js fucking :
// --> when string concatenation int, number convert into string
// --> when string comparison string convert into int, number

console.log('concatenation : ', '001' + 1);
console.log('comparison : ', '001' == 1);

// some string method
// 1. concat()  --> add string
// 1. substr()  --> remove string
// 1. charAt()  --> show the character in index
// 1. startsWith() --> true/false
// 1. endsWith() --> true/false
// 1. toUpperCase() --> convert uppercase
// 1. toLoweCase() --> convert lowercase
// 1. trim() --> remove the 1st or last empty string

let jjj = 'i\'m mushfik and i just destroy everyones life, now my own lifes go to hell'
console.log(jjj.length);



