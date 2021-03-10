var todo = ['hi','how are you', 'you are fine'];
// for cycle
for (var i=0; i<todo.length;i++) {
    console.log(todo[i]+'!');
}

// Caution when you use method (in this case, todo.length)
var len=todo.length;
for (var i=0; i<len;i++){
    todo.pop();
}
console.log(todo);

var counter = 0;
while (counter < 10) {
    console.log(counter);
    counter++;
} // first check the condition (the code might not execute)

var counter2=10;
do {
    console.log(counter2);
    counter2--;
} while (counter2>0); // last check the condition (at least the code is executed one time)

var todo = ['hi','how are you', 'you are fine'];

// New in ES5
todo.forEach(function(element,i) {
    console.log(element,i)
}); // it's more readable than the for loop

todo.forEach((element,i) => {
    console.log(element,i)
});
