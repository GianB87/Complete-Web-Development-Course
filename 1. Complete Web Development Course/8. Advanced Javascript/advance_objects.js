// reference type
console.log([]===[]); //false
console.log([1]===[1]); //false

const obj1 ={
    value: 10,
}
const obj2 = obj1
const obj3 = {
    value:10,
}
console.log(obj1===obj2); //true // because the both objects are literally the same
console.log(obj1===obj3); //false

obj1.value = 15
console.log(obj1.value);
console.log(obj2.value); // because obj1 is obj2, both change the value
console.log(obj3.value);

// Explanation: Objects are things created by the users, and all are different
// With primitive types (numbers, bolean, null, undefined, etc), they are defined by javascript, and they are 'inmutable'
// but with objects (or list also (they are a kind of object)), javascript doesnt know the inner content, so they are 'referenced'
// so obj1 and obj2 have the same reference, but obj3 have a different reference

// context vs scope ({})

// this: means or refers the object which is inside of
console.log(this); // refer to the window object on a browser or {} (global) on nodejs

function a() {
    console.log(this);
}
a();
const obj4 = {
    a: function () {
        console.log(this);
    },
}
obj4.a(); // this now refer to obj4

// instantiation
class Player {
    constructor(name,type) {
        console.log('player',this); // return wizard empty object
        this.name=name;
        this.type=type;
        console.log('player after',this); // return  wizard with data (if called from wizard)
    }
    introduce() {
        console.log(`Hi, my name is ${this.name} and i am a ${this.type}`)
    }
}
class Wizard extends Player {
    constructor(name,type) {
        // console.log('wizard',this); // error because you need to apply super before applying this
        super(name,type);
        console.log('wizard after',this); // return  wizard with data
    }
    play() {
        console.log(`WIIII i am a ${this.type}`)
    }
}
const wizard1 = new Wizard('Shelly','Healer');
const wizard2 = new Wizard('Shawn','Dark Magic');
