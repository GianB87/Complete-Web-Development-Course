// Solve the below problems:

// #1) Line up the Turtle and the Rabbit at the start line:
const startLine = '     ||<- Start line';
let turtle = '🐢';
let rabbit = '🐇';

// it should look like this:
'     ||<- Start line'
'       🐢'
'       🐇'

// when you do:
console.log(startLine);
console.log(turtle.padStart(startLine.length-11));
console.log(rabbit.padStart(startLine.length-11));


// #2) What happens when you run turtle.trim().padEnd(9, '=') on the turtle variable
// Read about what the second parameter does in padEnd and padStart
console.log(turtle.trim())
turtle = turtle.trim().padEnd(9, '=');
console.log(turtle)
console.log(1)
console.log(' '+1)



// #3) Get the below object to go from:
let obj = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
}
// to this:
const array = Object.values(obj);
console.log(`my ${array[0]} is ${array[1]} the ${array[2]}`)
'my name is Rudolf the raindeer'
console.log(Object.entries(obj).map(value => value.join(" ")).join(' '))
