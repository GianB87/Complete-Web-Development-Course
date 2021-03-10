// ternary operator

function isUserValid(bool) {
    return bool;
}
var answer = isUserValid(true) ? "You may enter" : "Access Denied";
console.log(answer);

var automatedAnswer = 'Your # acount is ' + (isUserValid(true) ? '1234' : 'not available');
console.log(automatedAnswer);

// switch

function moveCommand(direction) {
    var whatHappened;
    switch (direction){
        case "forward":
            whatHappened = 'you encounter a monster';
            break;
        case "back":
            whatHappened = 'you arrived home';
            break;
        case "right":
            whatHappened = 'you found a river';
            break;
        case "left":
            whatHappened = 'you run into a troll';
            break;
        default:
            whatHappened = 'please enter a valid direction';
    }
    return whatHappened;
}
console.log(moveCommand('forward'));
console.log(moveCommand('right'));
console.log(moveCommand('left'));
console.log(moveCommand('lef'));