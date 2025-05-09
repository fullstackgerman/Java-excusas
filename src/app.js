import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

export const sayHello = () => {
  return "Hello Rigo from the console!";
}

window.onload = function () {
  //write your code here
  console.log(sayHello());
};
