import "bootstrap";
import "./style.css";


window.onload = function() {
  //write your code here
  document.querySelector("body");
  console.dir(document.querySelector("#card"));
  console.log("_______________");
  document.querySelector("#card")//.algo 
  // Pensando:
  // Objeto de objetos? o con arrays o como? 
  const card = {
    palo: ['♦' , '♥' , '♠',  '♣'],
    valor: [1,2,3,4,5,6,7,8,9,10, Jack, Queen, King, As],
  }
  const mazo = {
    value: card,
    length:52 
  }


};
