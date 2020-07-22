window.onload = function() {
let who=['the dog','my grandma','his turtle','my bird'];
let what=['ate', 'pissed on', 'crushed','broke'];
let whatever=['the homework', 'the essay', 'the thesis', 'the assignment']
let when=['before the class', 'right in time' , 'when I finished' , 'during my lunch', 'while I was praying'];

var excuse = document.querySelector('#excuse');

const excuse1= who[Math.floor(Math.random() * who.length)];
const excuse2= what[Math.floor(Math.random() * what.length)];
const excuse3= whatever[Math.floor(Math.random() * whatever.length)];
const excuse4= when[Math.floor(Math.random() * when.length)];

excuse.innerHTML=excuse1.concat(' ', excuse2,' ', excuse3,' ',excuse4);
console.log(excuse);
}