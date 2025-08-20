import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


let iconoArribaIzquierda = document.getElementById("iconoArribaIzquierda")
let numero = document.getElementById("numero")
let iconoAbajoDerecha = document.getElementById("iconoAbajoDerecha")
let boton = document.getElementById("boton")
let botonAncho = document.getElementById("botonAncho")
let botonAlto = document.getElementById("botonAlto")
let cartaDefault = document.getElementById("cartaDefault")
let carta = document.getElementById("carta")
let iconos = ['♦','♥','♠','♣']
let colores = ['red','black']


const displayIconos = (array) =>{
  return array[Math.floor(Math.random() * array.length)]
}

const cambiarColor = (arrayColores) => {
  return arrayColores[Math.floor(Math.random() * arrayColores.length)]
}

let colorCambiado = cambiarColor(colores)
let iconoCambiado = displayIconos(iconos)


iconoArribaIzquierda.innerHTML =  `${iconoCambiado}`
iconoArribaIzquierda.style.color =  colorCambiado

numero.innerHTML = `${Math.floor(Math.random() * (10-1))}`

iconoAbajoDerecha.innerHTML = `${iconoCambiado}`
iconoAbajoDerecha.style.color =  colorCambiado





window.onload = function() {
  return
  `${iconoArribaIzquierda} ${numero} ${iconoAbajoDerecha}`
};


boton.addEventListener('click', () => {
 location.reload()
});

setTimeout(() => {
  location.reload();
}, "10000");

botonAncho.addEventListener('click', () => {
  let anchoCarta = prompt("Cuantos pixeles quieres cambiar de ancho? Ej: 200, 100...(si no, no funcionara :p)")
anchoCarta == isNaN ? null : carta.style.width = `${anchoCarta}px`
})

botonAlto.addEventListener('click', () => {
  let altoCarta = prompt("Cuantos pixeles quieres cambiar de alto?  Ej: 200, 100...(si no, no funcionara :p)")
  altoCarta == isNaN ? null : carta.style.height = `${altoCarta}px`
})

cartaDefault.addEventListener('click', () => {
  carta.style.width = "25vh"
  carta.style.height = "50vh"
})
