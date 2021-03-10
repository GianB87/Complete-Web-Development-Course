 //Evaluate these:
//#1
console.log([2] === [2]) // false
console.log(({} === {})) // false

//#2 what is the value of property a for each object.
const object1 = { a: 5 }; 
const object2 = object1; 
const object3 = object2; 
const object4 = { a: 5}; 
object1.a = 4;
console.log(object1.a); // 4
console.log(object2.a); // 4
console.log(object3.a); // 4
console.log(object4.a); // 5


//#3 create two classes: an Animal class and a Mamal class. 
// create a cow that accepts a name, type and color and has a sound method that moo's her name, type and color. 
class Animal {
    constructor(name, type, color) {
        this.name = name;
        this.type = type;
        this.color = color;
    }
    description() {
        console.log(`This is a ${this.type}. Its name is ${this.name} and is ${this.color}`);
    }
}
class Mamal extends Animal {
    constructor(name,type,color) {
        super(name,type,color);       
    }
    sound(){
        if (this.type === 'cow') {
            console.log('muuuuuu (',this.name,this.type,this.color,')');
        } else {
            console.log('(NO SOUND)');
        }
    }
}
const cow = new Mamal('Milly','cow','white');
console.log(cow.description());
console.log(cow.sound());