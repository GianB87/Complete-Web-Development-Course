// flat method
const list = [1,[2,3,[3,4,[5]]]]
console.log(list);
console.log(list.flat());
console.log(list.flat(1));
console.log(list.flat(2));
console.log(list.flat(3));

// it can also be used to clean
const entries = ['bob',,,,'cindy',['bob','cindy']];
console.log(entries.flat());

// flatMap()

console.log(entries.flatMap(el => el + 'p')); // it is a totally mess

// trimstart and trimend
let email = '     G@g.vom'
let email2 = 'vfheh          '
console.log(email.trimStart())
console.log(email2.trimEnd())

// fromentries

let userProfiles = [['commanderTom',23],['derekSlander',30],['tim',21]];
// the objective is to transform this into an object
console.log(Object.fromEntries(userProfiles));
// note that this is the opposite of Object.entries
console.log(Object.entries(Object.fromEntries(userProfiles)));

// dealing with errors: try - catch
try {
    true + 'hi' + pp
} catch {
    console.log('you messed')
}
// before, you needed to add the error on catch (now it is optional)
try {
    true + 'hi' + pp
} catch (error) {
    console.log('you messed', error)
}
