{
    let a = 10;
    function first() {
        // let a = 20
        console.log(a);
        function second(){
            console.log(a);
        }
        second()
    }
    first()
    // second() // -- reference error
}
first()
// second() //-- reference error