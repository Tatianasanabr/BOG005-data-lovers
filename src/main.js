
/*import data from './data/lol/lol.js';
console.log(data.data.Aatrox.id);*/

//Función Menú toggle//

let menutoggle = document.querySelector(".menutoggle");
let menutoggleIcon = document.querySelector(".menutoggle i");
let container = document.getElementById("container");

menutoggle.addEventListener("click" , e=> {
  container.classList.toggle("show"); 

  if(container.classList.contains("show")) {
    menutoggleIcon.setAttribute("class" , "fas fa-times");
  } else{
      menutoggleIcon.setAttribute("class" , "fas fa-bars");
    }
  });

//Mostrar y ocultar contenido//
let BotonConoceMas = document.getElementById("conoceMas");
BotonConoceMas.addEventListener("click", mostrarConoceMas);

function mostrarConoceMas() {
    document.getElementById("nuestros-programas").style.display = "block";
    document.getElementById("hero").style.display = "none";
    document.getElementById("somos-proya").style.display = "none";
  }