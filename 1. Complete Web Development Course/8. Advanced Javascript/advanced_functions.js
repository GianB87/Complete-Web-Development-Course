// New topics about functions

// Closures: 'The child scope always have access to the parent scope
// There is always memory of those elements alive
const first = () => {
    const greet = 'hi';
    const second = () => {
        console.log(greet);
    };
    return second;
};

const newFunc = first(); // Here you return the second function that doesn't include const=greet, but because of closures,
// there is memory of greet at the scope of first, where the secon function is the child and have access to it
newFunc();

// Child scope always have access to the parent scope, but parent scope never have access to the child scope


// Currying : Convert a function to one that accept one argument at a time
const multiply = (a,b) => a*b;
// Converted
const curriedMultiply = (a) => (b) => a*b;
// Use
const multiply5 = curriedMultiply(5);
console.log(multiply5(3));
console.log(multiply5(5));
console.log(multiply5(10));
console.log(multiply5(20));

// Compose: Combine two function to form a new third function
const compose = (f,g) => (a) => f(g(a));
// Base (example) function
const sum = (a) => a+1;

const sum2=compose(sum,sum);
console.log(sum2(3));

// Avoid Side Effects, add functional Purity
// Side Effect: They are effects that change the outside world
// Example
var a = 5;
function func1() {
    a = 2;
}
func1(); // It affected the outside world (change a from the root scope to another variable)
console.log(a);

// Functional Purity: Functions that doesn't change the outside world (the oposite of the previous example)
// Better said, a function that is purity, always return the same value



