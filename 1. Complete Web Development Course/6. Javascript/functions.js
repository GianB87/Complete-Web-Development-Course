// 1. Function Declaration: you declare a function
function sayHello() {
    console.log('Hello');
}
sayHello()

// 2. Function Expression: you save it in a variable

var sayBye = function() {
    console.log('Bye');
} // function() is an anonymous function that can only be called by the variable
sayBye()

// You can pass arguments
function multiply(a,b) {
    if (a>10 || b>10) {
        return 'That\'s too hard';
    } else {
        return a*b;
    }
}
alert(multiply(3,4))

// Important difference
// Parameters: Es lo que debe estar en la función (a,b)
// Arguments: Es lo que se le pasa a la función en una instancia (3,4)

function ckDriverAge(age) {
    if (Number(age) < 18) {
        alert("Sorry, you are too yound to drive this car. Powering off");
    } else if (Number(age) > 18) {
        alert("Powering On. Enjoy the ride!");
    } else if (Number(age) === 18) {
        alert("Congratulations on your first year of driving. Enjoy the ride!");
    }
}
ckDriverAge(92)