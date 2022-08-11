import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

/*Menú toggle - Declaración de la función y escuchador*/
let menutoggle = document.querySelector(".menu-toggle");
let menutoggleIcon = document.querySelector(".menu-toggle i");
let menu = document.getElementById("menu");

menutoggle.addEventListener("click" , e=> {
    menu.classList.toggle("show");

    if(menu.classList.contains("show")){
        menutoggleIcon.setAttribute("class" , "fas fa-times");
    } else {
        menutoggleIcon.setAttribute("class" , "fas fa-bars");
    }
});

/*Mostrar y ocultar contenido*/
let BotonConoceMas = document.getElementById("conoceMas");
BotonConoceMas.addEventListener("click", mostrarConoceMas);

function mostrarConoceMas() {
    document.getElementById("page2").style.display = "block";
    document.getElementById("page1").style.display = "none";
  };

console.log(example, data);
