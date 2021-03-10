// introduction to events
var button = document.querySelector('button');

// adding event listener

// when you click the button
button.addEventListener('click',function(){
    console.log('button clicked');
})

// when the mouse is over the button
button.addEventListener('mouseenter',function(){
    console.log('button behind mouse');
})

// when the mouse leave the button
button.addEventListener('mouseleave',function(){
    console.log('mouse leave button');
})

var button = document.getElementById("enter");
var input = document.getElementById('userinput');
var ul = document.querySelector('ul');

function addItem(){
    if (input.value.length > 0 && input.value != '')  {
        var li = document.createElement('li'); // create li element
        li.appendChild(document.createTextNode(input.value)); // atach text in the li tag
        ul.appendChild(li);
        input.value = ''
    }
}
button.addEventListener('click',addItem) // we are using addItem as a callback function
input.addEventListener('keypress',function(key) {
    if (key.keyCode===13){
        addItem();
    }
})