// estas funciones son de ejemplo

export const verCampeones = (todosCampeones, term) => {
  let verLista;
  if(term === 'az'){
    verLista = Object.values(todosCampeones).sort((a, b) => {
      if (a.name > b.name){
        return 1;
      }
      if (a.name < b.name){
        return -1;
      }
      return 0;
    });
  }
  if (term === 'za'){
    verLista = Object.values(todosCampeones).sort((a, b) => {
      if (a.name < b.name){
        return 1;
      }
      if (a.name > b.name){
        return -1;
      }
      return 0;
    });
  }
  return verLista;
};

export const filtrarCampeon = (data, texto) => {
  const recorridoInfo = texto.length;
  const filtrarNombre = Object.values(data).filter((campeones) => (texto === campeones.name.toLowerCase().substring(0, recorridoInfo)));
  return filtrarNombre; //retorna el array de objetos encontrados
};

export const filtrarRoles = (data, rolSelec) => {
  const newArray =[];
  for (let i =0; i < data.length; i += 1){
    const arrTags = data[i].tags;
    for(let j = 0; j < arrTags.length; j += 1){
      if (arrTags[j] === rolSelec){
        newArray.push(data[i]);
      }
    }
  }
  return newArray;
};

export const calculoStats = (data, entrada) => {
  let item =0;
  let result =0;
  switch (entrada){
    case 'hp':
      item = data.map((campeones) => campeones.stats);
      result = (item.reduce((sum, value) => (sum + value.hp), 0) / 134).toFixed(2);
      break;
      case 'movespeed':
      item = data.map((campeones) => campeones.stats);
      result = (item.reduce((sum, value) => (sum + value.movespeed), 0) / 134).toFixed(2);
      break;
      case 'attackdamage':
        item = data.map((campeones) => campeones.stats);
        result = (item.reduce((sum, value) => (sum + value.attackdamage), 0) / 134).toFixed(2);
        break;
      default:
        break;
  }
  return result;
};


  