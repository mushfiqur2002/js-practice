// for (let index = 1; index <= 6; index++) {
//     setTimeout(function () {
//         console.log(index);
//     }, 1000 * index);
// }

function fun (){
    console.log(this);
}
console.log(new fun());
