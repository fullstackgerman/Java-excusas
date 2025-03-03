import "bootstrap";
import "./style.css";


import "./assets/img/perro inteligente.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {

  console.log("Hello Rigo from the console!");
};

  function generadorDeNombres () {
    
    let pronoun = ['the','our'];
    let adj = ['great','big'];
    let noun = ['jogger','racoon'];
    let dot = [ '.com','.org','.gov' ]

    let text1 = pronoun [Math.floor(Math.random() * pronoun.length)]
    let text2 = adj [Math.floor(Math.random() * adj.length)]
    let text3 = noun [Math.floor(Math.random() * noun.length)]
    let text4 = dot [Math.floor(Math.random() * dot.length)]

    let resultado = text1 + " "  + text2 + " " + text3 + " " + text4;

    document.getElementById("excuse").innerHTML = resultado
  }
  generadorDeNombres()
  
  
