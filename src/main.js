import lol from './data/lol/lol.js';
import {
  filtrarNombre, ordenarCampeones, filtrandoRoles, calculoStats,
} from './data.js';

const listaTodos = lol.data; // en esta variable guardo los objetos de la data
const arrayCampeones = Object.values(listaTodos);

const lista = document.querySelector('#galeria'); // selecciono la parte donde voy a poner la informacion
const cantidadCampeones = document.getElementById('cantidad');

const resultado = (data) => {
  // vaciar arreglo para que no se duplique
  lista.innerHTML = '';
  error.classList.add('ocultar');
  // chequear la estructura de la data, si no es un array pasa a Object.values
  const checkData = Array.isArray(data) ? data : Object.values(data);
  cantidadCampeones.innerHTML = `Number Of Champions:  ${checkData.length}`;
  checkData.forEach((campeones) => {
    const casilla = document.createElement('div');
    const foto = document.createElement('img');
    const nombre = document.createElement('p');
    nombre.className = 'nombreCampeon'; // le pongo un class nombre para editarle los estilos
    foto.className = 'imagenCampeon';
    nombre.innerHTML = `${campeones.name}`;
    foto.src = `${campeones.splash}`;
    casilla.className = 'casillaCampeon';
    casilla.id = campeones.name;
    casilla.appendChild(foto);
    casilla.appendChild(nombre);
    lista.appendChild(casilla);
    // casilla agregar add event ... crearVistaCampeon(identificador);
    casilla.addEventListener('click', (evt) => {
      const nombreId = evt.path[1].id;
      crearVistaCampeon(listaTodos[nombreId]);
      pantalla3.classList.remove('ocultar');
      lista.innerHTML = '';
      pantalla2.classList.remove('mostrar');
      pantalla2.classList.add('ocultar');
      error.classList.add('ocultar');
    });
  });
};
resultado(listaTodos);