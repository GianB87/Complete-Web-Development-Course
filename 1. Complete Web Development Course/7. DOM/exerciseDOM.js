var lis = document.querySelectorAll('li');

// mark item
function toggleItem(el) {
    el.classList.add('style-green');
    el.addEventListener('click',function() {
        el.classList.toggle('done');
        
})}

// add togle and button delete to each element
lis.forEach(element => {
    element.insertAdjacentElement('afterend',createButton());
    toggleItem(element);
});

// Create button and assign its functionality
function createButton(){
    var button = document.createElement('button'); // create li element
    button.appendChild(document.createTextNode('Delete')); // atach text in the li tag
    button.className = 'button';
    button.addEventListener('click', function(){
        button.previousElementSibling.remove()
        button.remove()
    })
    return button
}


var enter = document.getElementById("enter");
var input = document.getElementById('userinput');
var ul = document.querySelector('ul');

// to add item and its charasteristic (toggle and text)
function addItem(){
    if (input.value.length > 0 && input.value != '')  {
        var li = document.createElement('li'); // create li element
        li.appendChild(document.createTextNode(input.value)); // atach text in the li tag
        toggleItem(li);
        ul.appendChild(li);
        li.insertAdjacentElement('afterend',createButton());
        input.value = ''        
    }
}

enter.addEventListener('click',addItem) // we are using addItem as a callback function
input.addEventListener('keypress',function(key) {
    if (key.keyCode===13){
        addItem();
    }
})

// The key of creating good DOM manipulation is reducing the rendering of the page
