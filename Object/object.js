let obj = {
    x: 10,
    y: 20,
    z: 35,
    i: 15
}

let obj2 = new Object();
obj2.a = 5;
obj2.b = 10;


console.log('object : ', obj);
console.log('dot notation : ', obj.x);
console.log('array notation : ', obj['x']);

obj.z = 30; // update
obj['i'] = 25; // update
obj.j = 50;
obj['k'] = 60;
console.log('after update : ', obj);

delete obj.j; // delete
console.log('after delete : ', obj);


let a = [1, 2]
let b = a;
console.log('array : ',a === b);

let c = {
    a: 10,
    b: 20
}
let d = {
    a: 10,
    b: 20
}
console.log('object : ',c === d);
console.log('object : ',c.a === d.a && c.b === d.b);

// another way to compare object
console.log('object convert into string : ', JSON.stringify(c) === JSON.stringify(d));

