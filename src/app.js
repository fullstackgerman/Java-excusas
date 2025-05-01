import "bootstrap";
import "./style.css";


window.onload = function() {
  //write your code here
  document.querySelector("body");
  console.dir(document.querySelector("#card"));
  console.log("_______________");
  document.querySelector("#card")//.algo 

  // Crear Mazo done
  // Barajearlo
  // Repartir dos cartas a cada 

  // ir calculando valores

  // turno del jugador{
  //   pedir || plantarse
  // }

  // pedir => renderizar la carta nueva

  // plantarse => turno de la banca

  // turno de la banca{
  //   pedir => renderizar la carta nueva
  //   llegar a 17 o mas => plantarse y determinar resultado
  // }

  // mostrar resultado + opción de nueva partida


  const palos = ['♦' , '♥' , '♠',  '♣'];
  const carta = [
    {valor: '1', cuerpo: 'as'},
    {valor: '2', cuerpo: 'as'},
    {valor: '3', cuerpo: 'as'},
    {valor: '4', cuerpo: 'as'},
    {valor: '5',cuerpo: 'as'},
    {valor: '6',cuerpo: 'as'},
    {valor: '7',cuerpo: 'as'},
    {valor: '8',cuerpo: 'as'},
    {valor: '9',cuerpo: 'as'},
    {valor: '10',cuerpo: 'as'},
    {valor: '10',cuerpo: 'J'},
    {valor: '10',cuerpo: 'Q'},
    {valor: '10',cuerpo: 'K'},
  ]

const mazo = [];
const crearMazo = () =>{
  palos.forEach(
    (palo) => {
      carta.forEach(
        ({valor, cuerpo}) => {
          mazo.push({
            palo, valor, cuerpo
          })
        }
      )
    }
  )
  return mazo;
}

console.log(crearMazo())
}
 


//   let playerHand = []//cartas del jugador
//   let dealerHand = []



//   const _getValue = (cardList) => cardList.reduce((acc, cardOcardPuntoValue) => {
//     acc = acc + cardOcardPuntoValue;
//     return acc;
//   }, 0);

//   const playerValue = _getValue(playerHand);

//   const dealerValue = _getValue(dealerHand);

//   const _getResult = (playerValue, dealerValue) => {
//       if(playerValue > 21) {
//         return console.log('Has perdido');
//       }
//       if(dealerValue > 21) {
//         return console.log('Has ganado');
//       }
//       if(dealerValue < playerValue){
//         return console.log('Win');
//       }
//       if(playerValue < dealerValue){
//         return console.log('Lose');
//       }
//       return console.log('draw');
//   }

 
//   const playGame = () => {
//     // if(pedirCarta){
//     //   hand + 1
//     // }
  
//     // if(playerPlantarse){
//     //   turno del dealer
//     // }
//     // if(dealerValue > 16){
//     //   comprobaResultados
//     // }

//     const playerValue = _getValue(playerHand);
//     const dealerValue = _getValue(dealerHand);
//     const result = _getResult(playerValue, dealerValue);
//     _renderResult(result, playerValue, dealerValue);
//   }


// };
