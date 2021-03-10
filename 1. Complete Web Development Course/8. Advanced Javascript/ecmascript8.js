// padding string
// if you want to add space at the beggining of a string
console.log('turtle'.padStart(10));
// at the end...
console.log('turtle'.padEnd(10) + 'end'); // note that this space include the string
console.log('turtle          ' + 'end'); // padEnd is not equal to 10 space (the special case is when dealing with empty string)

// ending coma (for syntax sugar (more readability))
const hi = (a,
            b,
            c,
            ) => console.log(a,b,c);
hi(1,2,3,)
hi(1,2,3)
// it's only for better looking code when working on a team (in github, for example)

// Access values and entries on an object
//Previously, you did this
let obj = {
    user0: 'gian',
    user1: 'miguel',
    user2: 'bastian',
}
// Using the method key
Object.keys(obj); // it's like a list of the object, return the key
Object.keys(obj).forEach(key => console.log(key,obj[key]));

// Now you have the method entries and value
Object.values(obj).forEach(value => console.log(value)); // return the value of every key
Object.entries(obj).forEach(value => console.log(value)); // return key and value as a list

// example
console.log(Object.entries(obj).map(value=>value[1] + ', id = '+value[0].replace('user','') ));

// last feature is Async Await, that is a more advanced topic that will be covered in next section as well as ES9