function winBattle(){
    return true;
}
//#1 change this function into a ternary and assign it to variable called experiencePoints
function experiencePoints() {
    if (winBattle()) {
        return 10;
    } else {
        return 1;
    }
}
function experiencePoints() {
    return (winBattle() ? 10 : 1);
}
console.log(experiencePoints());

//Using this function, answer the questions below:
function moveCommand(direction) {
    var whatHappens;
    switch (direction) {
        case "forward":
            break;
            whatHappens = "you encounter a monster";
        case "back":
            whatHappens = "you arrived home";
            break;
            break;
        case "right":
            return whatHappens = "you found a river";
            break;
        case "left":
            break;
            whatHappens = "you run into a troll";
            break;
        default:
            whatHappens = "please enter a valid direction";
    }
    return whatHappens;
}

console.log(moveCommand("forward")); // undefined

console.log(moveCommand("back")); // you arrived home

console.log(moveCommand("right")); // you found a river

console.log(moveCommand("left")); // undefined

//BONUS: practice makes perfect. Go and write your own switch function. It takes time to get used to the syntax!