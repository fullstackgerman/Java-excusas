import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


// Declaro los array que se usaran para generar las excusas.-
// I declare the arrays that will be used to generate the excuses.-
let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class.', 'when I was sleeping.', 'while I was exercising.', 'during my lunch.', 'while I was praying.'];

// Está función genera las excusas aleatorias y las retorna.-
// This function generates random excuses and returns them.-
function excusGenerator(who,action,what,when) {
    let numWho = Math.floor(Math.random() * who.length);
    let numAction = Math.floor(Math.random() * action.length);
    let numWhat = Math.floor(Math.random() * what.length);
    let numWhen = Math.floor(Math.random() * when.length);

    return `${who[numWho]} ${action[numAction]} ${what[numWhat]} ${when[numWhen]}`;
}

// El evento 'onload' se va a activar cuando la página se ha terminado de cargar completamente.-
// The 'onload' event will be triggered when the page has finished loading completely.-
window.onload = function() {
  //write your code here
    let excuse = document.getElementById("excuse");
    excuse.innerHTML = excusGenerator(who, action, what, when);
};
