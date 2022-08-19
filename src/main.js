/*console.log(lol.data.Aatrox.blurb);*/

//Importacion información nombres campeones
import lol from './data/lol/lol.js';

import {  
  namFilt,
  alphabetOrder,
  roleFilter,
} from './data.js';

 const dataLol = (lol.data);


 //Declaramos las variables - Manipulación dinamica del DOM
const viewChampions = document.getElementById("viewChampions");
const container= document.getElementById("container");
const myModal = document.getElementById("myModal");
const text = document.getElementById("text");
const search = document.getElementById("search");

const data = Object.values(dataLol);
const showData = (parametro) => {
  let show = "";
  parametro.forEach((element) => {  
  const campeones = `
  <div class="champ" data-id=${element.id} name="champion">
  <img src = ${element.splash} data-id=${element.id} class="splash"/>
  <h1 class= "championsName" data-id=${element.id} >${element.id} </h1>
  </div>
  `;
  show += campeones;
});
container.innerHTML = show;
};

showData(data);

//modal historia
container.addEventListener("click", (event) => {
  const nombreSeleccionado = event.target.dataset.id;
  const objCampeonSeleccionado = (dataLol[nombreSeleccionado]);
  myModal.classList.remove ("hide");
  myModal.querySelector("#modalInfo").innerHTML = `
  <p class= "modalName">${objCampeonSeleccionado.name} </p>
  <p class="modalTitle">${objCampeonSeleccionado.title} </p>
  <img src=${objCampeonSeleccionado.splash} class="imgSplash"/>
  <p class="modalTags"> Rol: ${objCampeonSeleccionado.tags} </p>
  <div class="info">
  <p> Defensa:${objCampeonSeleccionado.info.defense} </p>
  <p> Ataque:${objCampeonSeleccionado.info.attack} </p>
  <p> Magia:${objCampeonSeleccionado.info.magic} </p>
  <p> Dificultad:${objCampeonSeleccionado.info.difficulty} </p>
  </div>
  <div class="stats">
  <p> Vida: ${objCampeonSeleccionado.stats.hp} </p>
  <p> Mana: ${objCampeonSeleccionado.stats.mp} </p>
  <p> Velocidad: ${objCampeonSeleccionado.stats.movespeed} </p>
  <p> Ataque: ${objCampeonSeleccionado.stats.attackrange} </p>
  </div>
  `;
});

// Evento cerar modal
document.getElementById("close").addEventListener("click", () => {
  document.getElementById("myModal").classList.add("hide");
});

//Mostrar y ocultar contenido página Bienvenida//
let BotonConoceMas = document.getElementById("conoceMas");
BotonConoceMas.addEventListener("click", mostrarConoceMas);
function mostrarConoceMas() {
  document.getElementById("detallesLol").style.display = "block";
  document.getElementById("bienvenida").style.display = "none";
  document.getElementById("queEsLol").style.display = "none";
}

//Mostrar y ocultar contenido página Conoce más//
let BotonConoceCampeones = document.getElementById("conoceLosCampeones");
BotonConoceCampeones.addEventListener("click", mostrarCampeones);

function mostrarCampeones() {
  document.getElementById("campeones").style.display = "block";
  document.getElementById("bienvenida").style.display = "none";
  document.getElementById("queEsLol").style.display = "none";
  document.getElementById("detallesLol").style.display = "none";
}

//Boton ordenar en vista campeones A-Z - Z-A
const buttonOrder = document.querySelector('#buttonOrder');
buttonOrder.addEventListener('change', () => {
  const valueOrder = buttonOrder.value;
  container.innerHTML = '';
  showData(alphabetOrder(data, valueOrder));
});

// Buscar
const cleanContainer = () => {
  container.innerHTML = '';
  return false;
};

search.addEventListener('keyup', (event) => {
  const term = event.target.value.toLowerCase();
  const filterChampions = namFilt(data, term);
  cleanContainer();
  showData(filterChampions);
});