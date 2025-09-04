// 1. for loop
// 2. while loop
// 3. do while loop
// console.log('for loop :');
// for (let i = 0; i < 9; i++) {
//     setTimeout(() => {
//         console.log(i + 1);
//     }, 1000 * (i + 1));
// }

// console.log('while loop :');
// let j = 0;
// while (j < 9) {
//     console.log(j + 1);
//     j++;
// }

// console.log('do while loop :');
// let k = 0;
// do {
//     console.log(k + 1);
//     k++;
// } while (k < 9);

console.log('nested loop :');
let n = 4;
for(let i = 0; i < n; i++){
    let res = "";
    for(let j = 0; j < n; j++){
        res += "* ";
    }
    console.log(res);
}