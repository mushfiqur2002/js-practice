let obj = {
    name: 'abc',
    age: 20,
    city: 'pabna'
}

// not recommended
let obj2 = obj;

// recommended
let obj3 = Object.assign({}, obj);


// for key loop in object
for (let key in obj) {
    console.log(`${key} : ${obj[key]}`);
}

// if i want store key and value in array 
console.log('keys : ', Object.keys(obj));
console.log('values : ', Object.values(obj));
console.log('entries : ', Object.entries(obj));

console.log('obj : ', obj);
console.log('obj2 : ', obj2);
console.log('obj3 : ', obj3);
// obj2.name = 'xyz';
obj3.name = 'holla';
console.log('after update obj : ', obj);
console.log('after update obj2 : ', obj2);
console.log('after update obj3 : ', obj3);



