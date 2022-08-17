//Importacion información nombres campeones//

import lol from "./data/lol/lol.js";

import {
  verCampeones, filtrarCampeon, filtrarRoles,  calculoStats,
} from "./data.js";



const todosCampeones = lol.data; //en esta variable se guarda los objetos de la data//

const arrayCampeones = Object.values(todosCampeones);

const listado = document.querySelector("#galeriaCampeones"); //se selecciona la parte donde se va a poner la información//

const verRoles = document.getElementById("verRoles");
const campeonesxrol = document.getElementById("campeonesxrol");
const estadisticas = document.getElementById("estadisitcas");
const cantidadCampeones = document.getElementById("cantidad");
const error = document.getElementById("error");

//Descripcion de campeon//
const crearVistaCampeon = (campeon) => {
  document.querySelector("#detalleCampeon").innerHTML = `
  <div class = "historia">
    <div class ="titulo">
      <p class="historiaNombre"> ${campeon.name}</p>
      <p class="hp" > HP ${campeon.stats.hp}</p>
    </div>
    <img src = ${campeon.splash} class="imgcampeon"/>
    <p class="historiaTags">${campeon.tags}</p>
  </div>
  <div class="descripcionCampeon">
    <p class="historiaTitle">${campeon.title}</p>
    <div class="historiaCampeon">
    <p>${campeon.blurb}</p>
    <div class="info">
    <div>
      <img src="img/ataque.png">
      <p> Ataque: ${campeon.info.attack}</p>
    </div>
    <div>
    <img src="img/defensa.png">
    <p> Defensa: ${campeon.info.defense}</p>
    </div>
    <div>
    <img src ="img/magia.png" class="tamaño">
    <p> Magia: ${campeon.info.magic}</p>
    </div>
    <div>
    <img src ="img/dificultad.png" class="tamaño">
    <p> Dificultad: ${campeon.info.difficulty}</p>
    </div>
  </div>
  </div>
  </div>`;
};

const resultado = (data) => {
  //vaciar arreglo para que no se duplique//
  listado.innerHTML = "";
  error.classList.add("ocultar");
  //revisar la estructura de la data, si no es array pasa a Object.values//
  const checkData = Array.isArray(data) ? data : Object.values(data);
  cantidadCampeones.innerHTML = `Champions: ${checkData.length}`;
  checkData.forEach((campeones) => {
    const casilla = document.createElement("div");
    const foto = document.createElement("img");
    const nombre = document.createElement("p");
    nombre.className = "nombreCampeon"; // se asigna clase al nombre para editarle los estilos//
    foto.className = "imagenCampeon";
    nombre.innerHTML = `${campeones.name}`;
    foto.src = `${campeones.splash}`;
    casilla.className = "casillaCampeon";
    casilla.id = campeones.name;
    casilla.appendChild(foto);
    casilla.appendChild(nombre);
    listado.appendChild(casilla);

    //casilla agregar add event - crear vista campeon (identificador);
    casilla.addEventListener("click", (evt) => {
      const nombreId = evt.path[1].id;
      crearVistaCampeon(todosCampeones[nombreId]);
      campeonesxrol.classList.remove("ocultar");
      listado.innerHTML = "";
      verRoles.classList.remove("mostrar");
      verRoles.classList.add("ocultar");
      error.classList.ass("ocultar");
    });
  });
};
resultado(todosCampeones);

//boton todos//
const btnAll = document.getElementById("todosCampeones");
btnAll.addEventListener("click", () => {
  resultado(todosCampeones);
  verRoles.classList.remove("mostrar");
  verRoles.classList.add("ocultar");
  campeonesxrol.classList.add("ocultar");
  estadisticas.classList.add("ocultar");
  error.classList.remove("mostrar");
});

//buscando en el input//
const buscar = document.querySelector("#buscador");
buscar.addEventListener(
  "input",
  (evt) => {
    const texto = evt.target.value.toLowerCase(); //se extrae el valor de la caja de texto//
    const filtroCampeon = filtrarCampeon(todosCampeones, texto); //se llama la función//
    verRoles.classList.add("ocultar");
    campeonesxrol.classList.add("ocultar");
    estadisticas.classList.add("ocultar");
    listado.innerHTML = "";

    //Campeon No encontrado
    const errorMsj = document.querySelector("#error");
    if (filtroCampeon.length === 0) {
      errorMsj.classList.remove("ocultar");
      errorMsj.classList.add("mostrar");
      verRoles.classList.add("ocultar");
      campeonesxrol.classList.add("ocultar");
      estadisticas.classList.add("ocultar");
      listado.innerHTML = "";
    } else {
      errorMsj.classList.remove("mostrar");
      errorMsj.classList.add("ocultar");
    }
    resultado(filtroCampeon);
  },
  false
);

//funcionalidad de boton roles//
const botonRoles = document.getElementById("roles");
botonRoles.addEventListener("click", () => {
  verRoles.classList.remove("ocultar");
  verRoles.classList.add("mostrar");
  listado.innerHTML = "";
  cantidadCampeones.classList.add("mostrar");
  estadisticas.classList.add("ocultar");
  campeonesxrol.classList.add("ocultar");
  verRoles.classList.remove("mostar");
  error.classList.remove("mostrar");
});

//filtrar por rol//
const seccionRoles = document.querySelector(".seccionRoles");
const inputsRoles = seccionRoles.querySelectorAll(".rol");
for (let i = 0; i < inputsRoles.length; i += 1) {
  inputsRoles[i].addEventListener("click", (event) => {
    const rolSeleccionado = event.target.value;
    resultado(filtrarRoles(arrayCampeones, rolSeleccionado));
    verRoles.classList.add("ocultar");
  });
}

//boton de ordenar//
const ordenar = document.getElementById("ordenar");
ordenar.addEventListener("change", (evt) => {
  evt.preventDefault();
  if (evt.target.value === "ascendente") {
    const dataOrdenada = verCampeones(todosCampeones, "az");
    resultado(dataOrdenada);
  } else {
    const dataOrdenada = verCampeones(todosCampeones, "za");
    resultado(dataOrdenada);
  }
  cantidadCampeones.classList.add("mostrar");
  estadisticas.classList.add("ocultar");
  campeonesxrol.classList.remove("mostrar");
});

// boton subir//
window.onscroll = () => {
  /*console-log(document.documentelement.scrollTop);*/
  if (document.documentElement.scrollTop > 100) {
    document.querySelector(".subirLista").classList.add("show");
  } else {
    document.querySelector(".subirLista").classList.remove("show");
  }
};

document.querySelector(".subirLista").addEventListener("click", () => {
  window.scrollTo({
    top: 0, //para que suba - inicio//
    behavior: "smooth", //para que le dé un efecto suave al subir//
  });
});

//funcionalidad de boton Estadisticas//
const calculos = document.getElementById("estadisticas");
calculos.addEventListener("click", () => {
  estadisticas.classList.remove("ocultar");
  listado.innerHTML = "";
  verRoles.classList.remove("mostrar");
  verRoles.classList.add("ocultar");
  campeonesxrol.classList.add("ocultar");
  error.classList.remove("mostrar");
  cantidadCampeones.classList.add("ocultar");
  cantidadCampeones.classList.remove("mostrar");
});

/*const hpChampions = document.querySelector("#hpChampion");
hpChampions.innerHTML = ` Champions Life Span: "${calculoStats(
  arrayCampeones,
  "hp"
)}"`;
const movespeedChampion = document.querySelector("#movespeedChampion");
movespeedChampion.innerHTML = ` Average Movement Speed: "${calculoStats(
  arrayCampeones,
  "movespeed"
)}"`;
const attackChampion = document.querySelector("#attackChampion");
attackChampion.innerHTML = ` Average Attack Damage: "${calculoStats(
  arrayCampeones,
  "attackdamage"
)}"`;*/

/*console.log(lol.data.Aatrox.id);*/

//Función Menú toggle//

/*let menutoggle = document.querySelector(".menutoggle");
let navMenu = document.querySelector(".nav-menu");


menutoggle.addEventListener("click", ()=> {
  menutoggle.classList.toggle("active"); 
  navMenu.classList.toggle("active"); 
  })

  document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click",() => {
    menutoggle.classList.remove("active");
    navMenu.classList.remove("active");
  }))*/

//Mostrar y ocultar contenido página Bienvenida//
let BotonConoceMas = document.getElementById("conoceMas");
BotonConoceMas.addEventListener("click", mostrarConoceMas);

function mostrarConoceMas() {
  document.getElementById("detallesLol").style.display = "block";
  document.getElementById("hero").style.display = "none";
  document.getElementById("somos-proya").style.display = "none";
}

//Mostrar y ocultar contenido página Conoce más//
let BotonConoceCampeones = document.getElementById("conoceLosCampeones");
BotonConoceCampeones.addEventListener("click", mostrarCampeones);

function mostrarCampeones() {
  document.getElementById("campeones").style.display = "block";
  document.getElementById("hero").style.display = "none";
  document.getElementById("somos-proya").style.display = "none";
  document.getElementById("detallesLol").style.display = "none";
}
