// 1. && (AND)
// 2. || (OR)
// 3. !  (NOT)

let a = 5;
let b = 10;
let c = 15;
console.log(a < b && b < c); // true && true = true
console.log(a < b && b > c); // true && false = false

console.log(a < b || b < c); // true || true = true
console.log(a < b || b > c); // true || false = true
console.log(a > b || b > c); // false || false = false

console.log(!(a < b)); // !(true) = false
console.log(!(a > b)); // !(false) = true