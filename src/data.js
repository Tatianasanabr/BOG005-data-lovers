//Función Ordenar

export const ordenAlfabetico = (primeraLetra, direccionOrden) => {
  const resultado = primeraLetra; 
  if (direccionOrden === "a-z") { //ascendente
    resultado.sort ((a, b) => {
      if (a.name > b.name) {
        return 1;
      }
        return -1;
    });
  } 
  if (direccionOrden  === "z-a") {  //descendente
    resultado.sort ((a, b) => {
      if (a.name < b.name) {
        return 1;    
      }
        return -1;
    });
  }
  return resultado;
};

//Función filtrar

export const rolFiltrado = (rolCampeones, filtroEscogido) => {
  const campeonesFiltrados = rolCampeones.filter((obj) => {
    let resultadoFiltro = "";
    for (let i =0; i < obj.tags.length; i ++) {
      if (obj.tags [i] === filtroEscogido) {
        resultadoFiltro += obj.tags[i];
      }
    }
    return resultadoFiltro;
  });
  return campeonesFiltrados;
};

// Buscar
export const buscarNombre = (data, palabrasDigitadas) => data.filter(({ name }) => name.toLowerCase().includes(palabrasDigitadas));

//Estadistica - cálculo
export const calculoEstadistico = (data, caracteristicas) => {
  let elementos = "";
  let resultado = "";
  switch (caracteristicas) {
    case 'attackdamage':
      elementos = data.map((campeones) => campeones.stats);
      resultado = (elementos.reduce((acumulador, valorActual) => (acumulador+ valorActual.attackdamage), 0) / 134).toFixed(2);
      break;
    case 'spellblock':
      elementos = data.map((campeones) => campeones.stats);
      resultado = (elementos.reduce((acumulador, valorActual) => (acumulador + valorActual.spellblock), 0) / 134).toFixed(2);
      break;
    case 'attackspeedperlevel':
      elementos = data.map((campeones) => campeones.stats);
      resultado = (elementos.reduce((acumulador, valorActual) => (acumulador + valorActual.attackspeedperlevel), 0) / 134).toFixed(2);
      break;
    default:
      break;
  }
  return resultado; 
};

