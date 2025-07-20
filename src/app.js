import "bootstrap";
import "./style.css";
import "./assets/img/4geeks.ico";


const getRandomElement = (array) => {
  const index = Math.floor(Math.random() * array.length);
  return array[index];
};

window.onload = function() {
//write your code here

const PERSON = ["my dog", "my grandma", "my turtle", "my dad"];
const ACTION = ["ate", "forgot", "stole", "broke"];
const OBJECT = ["my homework", "my exam", "my backpack", "my folder"];
const WHEN = ["yesterday", "last night", "this morning", "a while ago"];

const generateExcuse = () => {
  const person = getRandomElement(PERSON);
  const action = getRandomElement(ACTION);
  const object = getRandomElement(OBJECT);
  const when = getRandomElement(WHEN);

  return `${person} ${action} ${object} ${when}`;
};

  document.querySelector('#excuse').innerHTML = generateExcuse();
  console.log("Hello Rigo from the console!");
};
