import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

/*Mostrar y ocultar contenido*/
let BotonConoceMas = document.getElementById("conoceMas");
BotonConoceMas.addEventListener("click", mostrarConoceMas);

function mostrarConoceMas() {
    document.getElementById("page2").style.display = "block";
    document.getElementById("page1").style.display = "none";
  }

console.log(example, data);
