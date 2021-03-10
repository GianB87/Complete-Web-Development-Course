// Define list
var list = ["tiger","cat","bear","bird"]

// Call an element of a list
console.log(list[0]) // output=tiger

// You can put anything on arrays (including functions and arrays)

// Delete the first element
list.shift();
console.log(list);

// Delete the last element
list.pop()
console.log(list);

// On push and unshift, you can add more than one element
// Add last element
list.push("Elephant");
console.log(list);

// Add at the beggining of the list
list.unshift("Monkey");
console.log(list);

// Para concatenar lista:
list=list.concat(["beer","deer"]); // You need to save the result, it append at the end of the array
console.log(list);

// Para ordenar lista
list = list.sort()
console.log(list);
