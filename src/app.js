import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


window.onload = function () {
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

  let indiceSustantivo = Math.floor(Math.random() * sustantivos.length);
  let indiceAcciones = Math.floor(Math.random() * acciones.length);
  let indiceEvitar = Math.floor(Math.random() * evitar.length);
  let indiceCuando = Math.floor(Math.random() * cuando.length)

  document.querySelector("#excusas").innerHTML = sustantivos[indiceSustantivo] + acciones[indiceAcciones] + evitar[indiceEvitar] + cuando[indiceCuando];

};














