// Root Scope (window)
var a = 5;
console.log(a);

//function scope
function bb(){
    var b = 1;
    a=b+a
}

bb()
// console.log(b); //output error
console.log(a);

// Conclusion: All the code can access to the root scope
// Conclusion2: the root scope cannot access variables on an inner scope

// Another example
var fun = 5
function funny() {
    var fun = 'hello'
    console.log(1,fun) // the variable fun first search on the function scope
}
function funner(){
    var fun = 'bye'
    console.log(2, fun)// the variable fun first search on the function scope
}
function funnest(){
    fun = 'ahhh'
    console.log(3, fun);// the variable fun first search on the function scope, but because fun is not declare on the function,
    // it search on the root scope, where the function changed its value before
}
console.log('window',fun);

funny()
funner()
funnest()
console.log(fun)