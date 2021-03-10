
// For all of these, what is the value of a when the function gets called with the alert()
// #1
function q1() {
    var a = 5;
    if(a > 1) {
        a = 3;
    }
    console.log(a); // output 3
}
q1()

//#2
var a = 0;
function q2() {
    a = 5;
}
q2()
function q22() {
    console.log(a);// output 5
}
q22()

//#3
function q3() {
    window.a = "hello";
}
q3()

function q32() {
    console.log(a); //output hello
}
q32()
//#4
var a = 1;
function q4() {
    var a = "test";
    console.log(a); //test
}
q4()

//#5
var a = 2;
if (true) {
    var a = 5;
    console.log(a); // output 5
}
console.log(a); // output 2 => wrong, if is in the window scope,so a is changed, it was a trick