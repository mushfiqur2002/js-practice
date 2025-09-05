let arr = [14, 2, 39, 4, 45, 6, 27, 48, 19];
let findValue = 27;

for (let i = 0; i < arr.length; i++) {
    if(arr[i] === findValue){
        console.log('find the value sucessfully');
        break;
    }else{
        console.log('not find the value');
    }
}