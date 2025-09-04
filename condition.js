// ** topic 06 ** //

// 1. if 2. if else 3. switch case

let a = 5;
let b = 10;
let c;

if (a < b) { // if condition 
    console.log('a is less than b');
    c = 0;
} else {   // else condition
    console.log('a is not less than b');
    c = 1;
}

switch (c) {
    case 0:
        console.log('a is less than b' + ' ' + 'swich case');
        break;
    case 1:
        console.log('a is not less than b' + ' ' + 'swich case');
        break;
    default:
        console.log('c is not 0 or 1');
        break;
}
