// javascript types 

// 1. Numbers 
console.log(4+5)
// remainder
console.log(5%4) // respuesta = 1

// 2. String
"Bob"
"Name"
console.log("Hello " + "There")
// backslash to avoid syntax error
console.log('I\'m nice')

// As an option, you can combine numbers and strings (not recommended)
console.log(10 + "34")
console.log(10-"3")
console.log("Hello"-"Bye") // output NaN (Not a Number)

// 3. Boolean
// 2 options: true or false
console.log(3>=5) //false
console.log(3<=5) //true
// to equal comparison, you need to put 3 equal sign
console.log(3===3) // true
// and for not equal
console.log(3!==3) // false

// Exercise 1
console.log(5 + "34") // "534"
console.log(5 - "4") // 1
console.log(10 % 5) // 0
console.log(5 % 10) // 5
console.log("Java" + "Script") // "JavaScript"
console.log(" " + " ") //
console.log(" " + 0) // " 0" 
console.log(true + true) // true => 2
console.log(true + false) // false => 1
console.log(false + true) // false => 1
console.log(false - true) // NaN => -1
console.log(3 - 4) // -1
console.log("Bob" - "bill") // NaN

console.log(5 >= 1) // true
console.log(0 === 1) // false
console.log(4 <= 1) // false
console.log(1 != 1) // false
console.log("A" > "B") // true => false
console.log("B" < "C") // true
console.log("a" > "A") // false => true
console.log("b" < "A") // true => false
console.log(true === false) // false
console.log(true != true) // false
console.log("Hi There! It\'s \"sunny\" out")

// 4. Undefined type
var b;
console.log(b);

// Exercise 2

// Evaluate what answers you would get if you ran this in the
// Javascript Console in Google Chrome. Answer the questions then 
// check them by copying them and running it in the console yourself 
// line by line 


// add variable "firstName" and "lastName" // so that they equal your name

// create a variable that holds the answer // of "firstName" + " " + "lastName"

// Evaluate this question. What is a + b?
var a = 34;
var b = 21;
a = 2;
console.log(a + b) // what is the answer here? The answer is 23

// What is c equal to?
var c; // undefined
console.log(c);
// var b = prompt();

// 5. Null
var nullObj = null;
console.log(nullObj); 
console.log(null==={}); // null object != empty object

