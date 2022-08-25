//Función Ordenar

export const alphabetOrder = (firstLetter, condition) => {
  const result = firstLetter; 
  if (condition == "a-z") {
    result.sort ((a, b) => {
      if (a.name > b.name) {
        return 1;
      }
      return -1;
    });
  } 
  if (condition === "z-a") {
    result.sort ((a, b) => {
      if (a.name < b.name) {
        return 1;    
      }
      return -1;
    });
  }
  return result;
};

//Función filtrar

export const roleFilter = (championsRol, choseFilter) => {
  const byFilter = championsRol.filter((obj) => {
    let filterResult = "";
    for (let i =0; i < obj.tags.length; i += 1) {
      if (obj.tags [i] === choseFilter) {
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

