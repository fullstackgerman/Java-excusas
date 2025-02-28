let primero = ['el', 'la', 'a', 'los'];
let segundo = ['best', 'mejor', 'alto', 'gran' ];
let tercero = ['coche', 'hardware', 'seguridad', 'moto', 'bicicleta'];
let dominio = ['.com', '.es', '.gal', '.pro']

function generarDominios(){
  let combinaciones=""
  for(let a = 0; a < primero.length; a++) {
    for(let b = 0; b < segundo.length; b++) {
      for(let c = 0; c < tercero.length; c++) {
        for(let d = 0; d < dominio.length; d++) {
          combinaciones+=`<li class="list-groups-item">${primero[a]+segundo[b]+tercero[c]+dominio[d]}</li>`
        }
      }
    }
  }
  console.log(combinaciones)
  return combinaciones
    
}

window.onload = function() {
  document.getElementById("domains").innerHTML=generarDominios()
};


for(let a = 0; a < primero.length; a++) {
  for(let b = 0; b < segundo.length; b++) {
    for(let c = 0; c < tercero.length; c++) {
      for(let d = 0; d < dominio.length; d++) {
      console.log(primero[a] + segundo[b] + tercero[c]+ dominio[d]);
      }
    }
  }
}