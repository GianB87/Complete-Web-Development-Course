// Example: Iterating over a list and returned its values (without methods)
const array = [1,4,9,16];
const double = [];
array.forEach(element => {
    double.push(2*element);// it generate side effects
}); // it is redundant
console.log(double);

// There are special method for this kind of task

// map
// const mapArray = array.map(num => {return num*2});
const mapArray = array.map(num => num*2); // short version
console.log(mapArray); // restrict the operation to only return element (in this case, it is useful and save coding)
// it´s pure

// filter
const filterArray = array.filter(num => num>5);
console.log(filterArray);

// reduce
const reduceArray = array.reduce((accumulator,num)=>{
    accumulator+=2; // it's a new variable, like a shorthand for the tipic loop
    return accumulator+num;
},0);
console.log(reduceArray);
// it's a more general method (powerful)
