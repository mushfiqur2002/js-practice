let a = 100;
// newPrint(a)
print(10)
let newPrint = print
newPrint(45)
function print(a) {
    console.log(a);
}
print(a)

console.log(typeof newPrint);
