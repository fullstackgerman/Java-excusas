import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

let generateExcuse = () => { 
let person = ["my dog", "my grandma", "my turtle", "my dad"];
let action = ["ate", "forgot", "stole", "broke"];
let object = ["my homework", "my exam", "my backpack", "my folder"];
let when= ["yesterday", "last night", "this morning", "a while ago"];

let personIndex = Math.floor(Math.random() * person.length);
let actionIndex = Math.floor(Math.random() * action.length);
let objectIndex = Math.floor(Math.random() * object.length);
let whenIndex = Math.floor(Math.random() * when.length);

 return person[personIndex] + " " + action[actionIndex] + " " + object[objectIndex] + " " + when[whenIndex];
};
document.querySelector('#excuse').innerHTML = generateExcuse();
console.log("Hello Rigo from the console!");
};
