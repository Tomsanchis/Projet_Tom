const body = document.querySelector('body');
const title = document.createElement('h1');
const btnup = document.createElement("button");
const btndown = document.createElement("button");
const btnreset = document.createElement("button");
var p = document.createElement("p");
let counter = 0;
let reset = 0;

title.textContent = 'Counter Project'
btnup.textContent = '+';
btndown.textContent = '-';
btnreset.textContent = 'reset';

p.textContent = '0';

btnup.addEventListener('click', function () {
    counter++;
    p.textContent = counter;
})

btndown.addEventListener('click', function () {
    counter--;
    p.textContent = counter;
})

btnreset.addEventListener('click', function () {
    counter = 0;
    p.textContent = counter;
})


body.appendChild(title);
body.appendChild(btnup);
body.appendChild(btndown);
body.appendChild(p);
body.appendChild(btnreset);
