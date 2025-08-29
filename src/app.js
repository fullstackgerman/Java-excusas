import "bootstrap";
import "./style.css";

// Declaro los array que se usaran para generar las el numero y los iconos.-
const number = [2,3,4,5,6,7,8,9,10,"J","Q","K","A"];
const simbolo = ["♦", "♥", "♠", "♣"];

// Estas funcione generan las cartas aleatorias y las retornann.-
function generarNumeroRandom(numberArr) {
    let numberRandom = Math.floor(Math.random() * numberArr.length);
    return numberArr[numberRandom];
}

function generarSimboloRandom(simboloArr) {
    let simboloRandom = Math.floor(Math.random() * simboloArr.length);
    return simboloArr[simboloRandom];
}

window.onload = function() {
    let numberCard = document.getElementById("numberCard");
    numberCard.innerHTML = generarNumeroRandom(number);
    
    let simbolo1 = document.querySelector("#simbolo1");
    let simbolo2 = document.querySelector("#simbolo2");

    let indexSimbolo = generarSimboloRandom(simbolo);
    if (indexSimbolo == "♦" || indexSimbolo == "♥") {
        simbolo1.classList.add("red");
        simbolo2.classList.add("red");
    }
    
    simbolo1.innerHTML = indexSimbolo;
    simbolo2.innerHTML = indexSimbolo;
}

window.onload = onload;