let arr = [23, 4, 67, 56, 12, 30, 78];

console.log('original array : ', arr);

for(let i = 0; i <arr.length/2; i++){
    let temp = arr[i];
    arr[i] = arr[arr.length -1 -i];
    arr[arr.length -1 -i] = temp;
}
console.log('reversed array : ', arr);
console.log('reversed array again reverse: ', arr.reverse());
