// A function pass as an argument
function sum(x, y) {
    return x + y;
}
function hudai(a, b, func) {
    function sub(x, y) {
        return x - y;
    }
    return func * sub(a, b);
}
console.log(hudai(8, 5, sum(1, 2)));
