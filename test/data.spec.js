import {  
  buscarNombre,
  ordenAlfabetico,
  rolFiltrado,
  calculoEstadistico,
} from '../src/data.js';

//Definición variables
const dataTest = [
  {
    name: 'Ahri',
    tags: ['Mage', 'Assassin'],
  },
  {
    name: 'Akali',
    tags: ['Assassin'],
  },
  {
    name: 'Nunu',
    tags: ['Fighter', 'Support'],
  },
  {
    name: 'Zac',
    tags: ['Tank', 'Fighter'],
  },
  {
    name: 'Diana',
    tags: ['Fighter', 'Mage'],
  },
];
 

//variables para test ordenar
const infoNombre = [
  {
    name: 'Ahri',
  },
  {
    name: 'Akali',
  },
  {
    name: 'Nunu',
  },
  {
    name: 'Zac',
  },
  {
    name: 'Diana',
  },
];

const ordenAscent = [
  {
    name: 'Ahri',
  },
  {
    name: 'Akali',
  },
  {
    name: 'Diana',
  },
  {
    name: 'Nunu',
  },
  {
    name: 'Zac',
  },
];

const ordenDescent = [
  {
    name: 'Zac',
  },
  {
    name: 'Nunu',
  },
  {
    name: 'Diana',
  },
  {
    name: 'Akali',
  },
  {
    name: 'Ahri',
  },
];

//Variable para test filtrar
const filtroxRol = [
  {
    name: 'Ahri',
    tags: ['Mage', 'Assassin'],
  },
  {
    name: 'Diana',
    tags: ['Fighter', 'Mage'],
  },  
];

//Variable para test buscar
const buscarCampeon = [  
  {
    name: 'Ahri',
  },
  {
    name: 'Akali',
  },
  
];

//Variable para test calculo
const calculoEstadistica = [
  {
    id: "Illaoi",
    key: "420",
    name: "Illaoi",
    stats: {
      attackdamage: 60,
      spellblock: 32.1,
      attackspeedperlevel: 2.5,
    },
  },
  {
    id: "Jayce",
    key: "126",
    name: "Jayce",
    stats: {
      attackdamage: 50.38,
      spellblock: 30,
      attackspeedperlevel: 3,
    },
  },
  {
    id: "Kalista",
    key: "429",
    name: "Kalista",
    stats: {
      attackdamage: 63,
      spellblock: 30,
      attackspeedperlevel: 2.5,
    },
  },
];

//Definición test 
//Ordenar
describe('ordenAlfabetico', () => {
  it('es auna funcion', () => {
    expect(typeof ordenAlfabetico).toBe('function');
  });

  it('retornar campeon ordenado de a-z', () => {
    expect(ordenAlfabetico(infoNombre , 'a-z')).toEqual(ordenAscent);
  });

  it('retornar campeon ordenado de z-a', () => {
    expect(ordenAlfabetico(infoNombre , 'z-a')).toEqual(ordenDescent);
  });
});

//Filtrar
describe('rolFiltrado', () => {
  it('es una funcion', () => {
    expect(typeof rolFiltrado).toBe('function');
  });

  it('retornar el campeon filtrado por rol', () => {
    expect(rolFiltrado(dataTest, 'Mage')).toEqual(filtroxRol);
  });   
});

//Buscar
describe('buscarNombre', () => {
  it('es una función', () => {
    expect(typeof buscarNombre).toBe('function');
  });

  it('devolver el filtro de campeón por la primera letra a', () => {    
    expect(buscarNombre(infoNombre, 'a')).toEqual(buscarCampeon);
  });
}); 

//Cálculo 
describe('calculoEstadistico', () => {
  it('es una función', () => {
    expect(typeof calculoEstadistico).toBe('function');
  });

  it('Debe retornar el promedio de ATTACKDAMAGE de los campeones', () => {
    expect(calculoEstadistico(calculoEstadistica, 'attackdamage')).toBe('1.29');
  });
  it('Debe retornar el promedio de SPELLBLOCK de los campeones', () => {
    expect(calculoEstadistico(calculoEstadistica, 'spellblock')).toBe('0.69');
  });
  it('Debe retornar el promedio de ATTACKSPEEDPERLEVEL de los campeones', () => {
    expect(calculoEstadistico(calculoEstadistica, 'attackspeedperlevel')).toBe('0.06');
  });
});


