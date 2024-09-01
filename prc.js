
function test(){
    let a = "hello"
    var b = "bye"

    if(true){
        let a="hi"
        var b = "good" // here b is redeclared using var and since var has global scope unlike let, outside if statement, b takes the value "good"
        console.log(a)
        console.log(b)
    }
    console.log(a)
    console.log(b)
}
test()