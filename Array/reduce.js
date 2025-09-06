let arr = [1, 2, 3, 4, 5, 6]
let sum = arr.reduce(function (prev, curr, index, array) {
    return prev + curr; // cumulative tota
})
console.log(sum);
