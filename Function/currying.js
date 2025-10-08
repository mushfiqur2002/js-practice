function add(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        }
    }
}
console.log('hello');

function addHudai(a, b, c) {
    return a + b + c;
}
let result = add(5)(6)()
console.log(result);
console.log(addHudai(5, 6 ));
