function sayHI(n) {
    if (n === 0) {
        return;
    }
    console.log(`${n} hi pagla`);
    sayHI(n - 1);
}
console.log(sayHI(10));
console.log(sayHI(10));
  
