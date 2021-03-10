// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames
const new_Array = []
array.forEach(element => new_Array.push(element.username + '!'));
console.log(new_Array);

//Create an array using map that has all the usernames with a "? to each of the usernames
const array_question = array.map(el=>el.username+'?');
console.log(array_question);

//Filter the array to only include users who are on team: red
const filterArray = array.filter(el=>el.team==='red')
console.log(filterArray)

//Find out the total score of all users using reduce
const reduceArray = array.reduce((acc,el) => {
  acc += el.score
  return acc},0);
console.log(reduceArray)

// (1), what is the value of i? R: It's the index
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
// const newArray = arrayNum.map((num, i) => {
// 	console.log(num, i);
// 	console.log(num);
// 	return num * 2;
// })
const newArray = arrayNum.map(num =>num * 2)


//BONUS: create a new list with all user information, but add "!" to the end of each items they own.
const bonus = array.map(el=>{
  el.items = el.items.map(element=>element+='!');
  return el
})
console.log(bonus);