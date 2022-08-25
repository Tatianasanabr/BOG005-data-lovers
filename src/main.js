/*console.log(lol.data.Aatrox.blurb);*/

//Importacion información nombres campeones
import lol from './data/lol/lol.js';

import {  
  namFilt,
  alphabetOrder,
  roleFilter,
  calculoStats,
} from './data.js';

 const dataLol = (lol.data);
 const arrayCampeones = Object.values(dataLol);


 //Declaramos las variables - Manipulación dinamica del DOM
const container= document.getElementById("container");
const myModal = document.getElementById("myModal");
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


//Mostrar y ocultar contenido página Bienvenida desde boton
let BotonConoceMas = document.getElementById("conoceMas");
BotonConoceMas.addEventListener("click", mostrarConoceMas);
function mostrarConoceMas() {
  document.getElementById("detallesLol").style.display = "block";
  document.getElementById("bienvenida").style.display = "none";
  document.getElementById("queEsLol").style.display = "none";
}

//Mostrar y ocultar contenido página Conoce más desde boton
let BotonConoceCampeones = document.getElementById("conoceLosCampeones");
BotonConoceCampeones.addEventListener("click", mostrarCampeones);

function mostrarCampeones() {
  document.getElementById("campeones").style.display = "block";
  document.getElementById("bienvenida").style.display = "none";
  document.getElementById("queEsLol").style.display = "none";
  document.getElementById("detallesLol").style.display = "none"; 
} 

//Mostrar y ocultar contenido página Roles desde boton
let botonCampeonesxRol = document.getElementById("buttonRoles");
botonCampeonesxRol.addEventListener("click", campeonesxRol);
function campeonesxRol() {
  document.getElementById("campeonesxrol").style.display = "block";
}

//modal historia
container.addEventListener("click", (event) => {
  const nombreSeleccionado = event.target.dataset.id;
  const objCampeonSeleccionado = (dataLol[nombreSeleccionado]);
  myModal.classList.remove ("hide");
  myModal.querySelector("#modalInfo").innerHTML = `
  <p class="modalTitle">${objCampeonSeleccionado.title} </p>
  <p class="modalTags"> Rol: ${objCampeonSeleccionado.tags} </p>
  <br><img src=${objCampeonSeleccionado.splash} class="imgSplash"/>
  <div class="info">
  <p> Dificultad: ${objCampeonSeleccionado.info.difficulty} </p>
  <br><p> Defensa: ${objCampeonSeleccionado.info.defense} </p>
  <br><p> Ataque: ${objCampeonSeleccionado.info.attack} </p>
  <br><p> Magia: ${objCampeonSeleccionado.info.magic} </p>
  </div>
  <div class="stats">
  <p> Vida: ${objCampeonSeleccionado.stats.hp} </p>
  <p> Mana: ${objCampeonSeleccionado.stats.mp} </p>
  <p> Velocidad: ${objCampeonSeleccionado.stats.movespeed} </p>
  <p> Ataque: ${objCampeonSeleccionado.stats.attackrange} </p>
  </div>
  `;
});

// Evento cerrar modal
document.getElementById("close").addEventListener("click", () => {
  document.getElementById("myModal").classList.add("hide");
});



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

//Funcionalidad Nav Bar

const ham = document.querySelector(".ham");
const enlaces = document.querySelector(".menu1");
const barras = document.querySelectorAll(".ham span");

ham.addEventListener("click", () => {
  enlaces.classList.toggle("activado");
  barras.forEach(child => {child.classList.toggle("animado")});
});


// Cerrar menu
/*const menu1Links =document.querySelectorAll('.menu1 a[href^="#');

menu1Links.forEach(menu1Links => {
  menu1Links.addEventListener("click", function(){
    menu1Links.classList.remove("menu_abierto");
  })
});*/

// Filtrar por Roles
const assassin = document.getElementById('assassin');
assassin.addEventListener('click', () => {
  container.innerHTML = '';
  showData(roleFilter(data, 'Assassin'));
});

const fighter = document.getElementById('fighter');
fighter.addEventListener('click', () => {
  container.innerHTML = '';
  showData(roleFilter(data, 'Fighter'));
});

const mage = document.getElementById('mage');
mage.addEventListener('click', () => {
  container.innerHTML = '';
  showData(roleFilter(data, 'Mage'));
});

const marksman = document.getElementById('marksman');
marksman.addEventListener('click', () => {
  container.innerHTML = '';
  showData(roleFilter(data, 'Marksman'));
});

const support = document.getElementById('support');
support.addEventListener('click', () => {
  container.innerHTML = '';
  showData(roleFilter(data, 'Support'));
});

const tank = document.getElementById('tank');
tank.addEventListener('click', () => {
  container.innerHTML = '';
  showData(roleFilter(data, 'Tank'));
});






const attackChampion = document.querySelector("#attackChampion");
attackChampion.innerHTML = ` Daño de ataque promedio: "${calculoStats(arrayCampeones, "attackdamage")}"`;
const spellBlock = document.querySelector("#spellBlock");
spellBlock.innerHTML = ` Bloque de Hechizos: "${calculoStats(arrayCampeones, "spellblock")}`;
const attackspeedperlevel = document.querySelector("#attackspeedperlevel");
attackspeedperlevel.innerHTML = ` Velolcidad de ataque por nivel: "${calculoStats(arrayCampeones, "attackspeedperlevel")}`;