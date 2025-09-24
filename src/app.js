import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
let sustantivos = [
  
  "El perro, ",
   "Mi abuela, ",
   "Mi pajaro, "
  
  ];
let acciones = [ 
  "me comio, ",
"trituro como unas albóndigas, ",
  "defeco encima, ",
];
  let evitar = [
"y no he podido llegar a la reunión",
"y rompió mi USB con los datos",
"y mi proyecto prendio fuego"

  ];
  let cuando = [
    " esta mañana a las 7:00.",
    " cuando iba a poner a finalizarlo.",
    " esta tarde cuando recogí a los niños del cole."
  ];

let parte1 = Math.floor(Math.random() * sustantivos.length);
let parte2 = Math.floor(Math.random() * acciones.length);
let parte3 = Math.floor(Math.random() * evitar.length);
let parte4 = Math.floor(Math.random() * cuando.length)

document.querySelector("#excusas").innerHTML = sustantivos[parte1] + acciones[parte2] + evitar[parte3] + cuando [parte4];

};



















// let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
// let action = ['ate', 'peed', 'crushed', 'broke'];
// let what = ['my homework', 'my phone', 'the car'];
// let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

// for (let i=0; i < who.length; i++){
//  console.log(listas[i]); 




 

// let listas = [
// ["Tigre", "Loro", "Perro", "Gato"],
// ["Volar", "Bailar", "Nadar", "Codear"],
// ["Fútbol", "Natación", "Baseball", "Basket"]
// ]
// console.log (listas[0]["2"]);
// for (let i=0; i < listas.length; i++){
//   console.log(listas[i]);

//   for (let j=0; j < listas.length[i][j]; j++){
//     console.log(listas[i][j]);

//       for (let k=0; k < listas.length[k]; k++){
//       console.log(listas[i][j][k]);
//     }
//   }
// }


// for (const lista of listas) {
//   console.log(lista);
//   for (const palabra of lista){
//       console.log(PALABRA)
//         for (const letra of palabra){
//             console.log (letra);
//     }
//   }
// }

                                                                                                                                                                                                                                 
