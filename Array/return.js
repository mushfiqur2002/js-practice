function greet(message) {
    function greeting(name) {
        return message + ' ' + name
    }
    return greeting;
}

let gm = greet('good morning');
console.log(gm('Md. Mushfik'));


