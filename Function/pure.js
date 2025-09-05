// if function return same result in same argument
// don't change outer value or any side effect


// pure function
function sum(a,b){
    return a+b;
}
console.log(sum(5,6));
console.log(sum(5,6));
console.log(sum(5,6));

//not pure function
// #1
let n = 10;
function fun(){
    n = 100;
}
console.log(n);
fun()
console.log(n);

// #2
let obj = {
    i : 20,
    j : 30
}
function changeObj(ele){
    ele.i = 100
    ele.j = 200
}
console.log(obj);
changeObj(obj)
console.log(obj);


