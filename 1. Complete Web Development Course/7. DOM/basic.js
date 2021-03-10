// Window object
// It's an object that describe the browser.
// If you use a method without specifying the object, the browser assume the object is the window

// One of the propertys is the Document object.

// Selecting tags
var h1 = document.getElementsByTagName("h1")[0];
h1.textContent = 'New Shopping List';
console.log(h1.textContent);

// Selecting clases
var clase = document.getElementsByClassName("second")[0];
clase.textContent = 'Class selected';
console.log(clase.textContent);

// Selecting Ids
var ids = document.getElementById("first");
ids.textContent = 'Ids selected';
console.log(ids.textContent);

// There are more universal selectors

// Query selector: select only the first element of the references tag, class, id, etc (it doesn't return a list)
var select = document.querySelector('h1');
select.textContent = 'Shopping list from query selector';

// Query selector all: select all elements from tag, class, etc (return a list)
var selectAll = document.querySelectorAll('li');
selectAll[1].textContent = 'second li selected by querySelectorAll';

// The notation is similar to CSS!!
var selectAll = document.querySelectorAll('li,h1');
selectAll[3].textContent = 'third li that is the 4th element of the list returned by the QuerySelectorAll';

// With get/setAttribute, you can do the following
console.log(selectAll[1].getAttribute('random')); // output = 23
console.log(selectAll[1].setAttribute('random','100')); 
console.log(selectAll[1].getAttribute('random')); // output = 100


// Ways to change the style

// Style property (not recommended)
// h1.style.backgroundColor='yellow'

// Using ClassName
// Setting a class to link with  css file
h1.className = 'style-green'

// Using classList and add/remove methods
var li = document.querySelector('li');
li.className = 'bold style-yellow'
li.classList.add('done');
li.classList.remove('style-yellow');

// A combine way of adding/removing is with toggle method
setTimeout(function(){
    li.classList.toggle('done');
    alert('toggle done')
}, 1000);
setTimeout(function(){
    li.classList.toggle('done');
    alert('toggle done')
}, 1000);

// You can use InnerHTML (dangerous)
h1.innerHTML='<strong>!!!</strong>'

// Select relative tags  with parentElement and children

console.log(li.parentElement); // output ul

console.log(h1.children); // output strong



