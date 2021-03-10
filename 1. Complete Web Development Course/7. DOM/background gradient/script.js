var css = document.querySelector('h3');
var color1 = document.querySelectorAll('input')[0];
var color2 = document.querySelectorAll('input')[1];
var body = document.getElementsByTagName('body')[0];
setGradient()
function setGradient(){
    body.style.background = 'linear-gradient(to right,'+color1.value + ','+color2.value + ')'
    css.textContent = body.style.background + ';'
}
color1.addEventListener('input',setGradient)
color2.addEventListener('input',setGradient)