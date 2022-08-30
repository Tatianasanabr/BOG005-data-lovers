//Función Ordenar

export const ordenAlfabetico = (primeraLetra, direccionOrden) => {
  const resultado = primeraLetra; 
  if (direccionOrden === "a-z") {
    resultado.sort ((a, b) => {
      if (a.name > b.name) {
        return 1;
      }
      return -1;
    });
  } 
  if (direccionOrden === "z-a") {
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

export const rolFiltrado = (rolCampeones, filtroElegido) => {
  const byFilter = rolCampeones.filter((obj) => {
    let filterResult = "";
    for (let i = 0; i < obj.tags.length; i += 1) {
      if (obj.tags [i] === filtroElegido) {
        filterResult += obj.tags[i];
      }
    }
    return filterResult;
  });
  return byFilter;
};

// Buscar
export const namFilt = (data, term) => data.filter(({ name }) => name.toLowerCase().includes(term));

//Estadistica - cálculo
export const calculoStats = (data, entrada) => {
  let item = 0;
  let result = 0;
  switch (entrada) {
    case 'attackdamage':
      item = data.map((campeones) => campeones.stats);
      result = (item.reduce((sum, value) => (sum + value.attackdamage), 0) / 134).toFixed(2);
      break;
    case 'spellblock':
      item = data.map((campeones) => campeones.stats);
      result = (item.reduce((sum, value) => (sum + value.spellblock), 0) / 134).toFixed(2);
      break;
    case 'attackspeedperlevel':
      item = data.map((campeones) => campeones.stats);
      result = (item.reduce((sum, value) => (sum + value.attackspeedperlevel), 0) / 134).toFixed(2);
      break;
    default:
      break;
  }
  return result; 
};