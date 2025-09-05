let a = [1, 2, 3]
let b = [4, 5, 6]

// concat
let c = a.concat(b);
console.log('concat : ', c);

// join
let d = c.join(', ');
console.log('join : ', d);

// not good way to copy array
// it's two array pointing to same memory location
let e = [7, 8, 9]
let f = e;

console.log('e before change : ', e);
console.log('f before change : ', f);

f[0] = 10;

console.log('e after change : ', e);
console.log('f after change : ', f);

// good way to copy array
// way 01: Array.from()
let g = [7, 8, 9]
let h = Array.from(g);

console.log('g before change : ', g);
console.log('h before change : ', h);
h[0] = 10;

console.log('g after change : ', g);
console.log('h after change : ', h);

// way 02: spread operator
let i = [7, 8, 9]
let j = [...i]; 
console.log('i before change : ', i);
console.log('j before change : ', j);
j[0] = 10;
console.log('i after change : ', i);
console.log('j after change : ', j);