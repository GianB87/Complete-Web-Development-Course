// new variables
// let + const

// const player = 'boby';
// let experience = 100;

// let wizardLevel = false;

// if (experience > 90) {
//     let wizardLevel = true;
//     console.log(wizardLevel);
// }
// console.log(wizardLevel); // now, let make the variable on an if be considered as a scope
// better said, everytime a variable is declared between curlybrackets, it is considered a scope

// experience = 80; // 'let' let you change the variable's value

// player = 'Gian' // output error, const don't let you change the value

// const and object
const obj = {
    player: 'bobby',
    experience: 100,
    wizardLevel: false,
};
// obj = 5 //output error
obj.wizardLevel = true;
console.log(obj); // const let you change propertys, but don't let you change the object type

// Destructuring
// if you want to get the propertys values, you might do this
// const player = obj.player
// const experience = obj.experience
// let wizardLevel = obj.wizardLevel

// but with this new syntax, you only do this
const {player, experience} = obj;
let {wizardLevel} = obj
console.log(player,experience, wizardLevel)

// object properties

// dynamic values
const name = 'John Smith';
const obj2 = {
    [name]: 'hello',
    [1+2]: 'hihi',
}
console.log(obj2['3']);
console.log(obj2[name]);

// variable to object shortcut
const a = 'simon';
const b = true;
const c = {};
// the shortcut is
const obj3 = {a,b,c}
console.log(obj3.a);
console.log(obj3.b);
console.log(obj3.c);

// Template String (similar to format on python)
// you need to use ``
const greetingBest = `Hello ${obj3.a}. You seem to be ${34-10}. You are ${name} `
console.log(greetingBest);

// Default Arguments: Replace the argument if there are not passed to the function

function greet(name = '', age = 30, pet='cat') {
    return `Hello ${name}. You seem to be ${age-10}. You have a ${pet} `
}
console.log(greet('Gian'));

// new type, symbol
let sym1 = Symbol();
let sym2 = Symbol('foo');
let sym3 = Symbol('foo');

console.log(sym2===sym3); // all symbols are different (its purpose)

// arrow function
const add = (a,b) => a + b ; // if you have 1 line and not consider curly bracket, it assumes the function return a+b in this case,
// otherwise, you need to specify return
console.log(add(3,4));

const add2 = (a,b) => {return a + b} ;
console.log(add2(3,4));
