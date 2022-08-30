import {  
  buscarNombre,
  ordenAlfabetico,
  rolFiltrado,
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
const filtroMago = [
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
    expect(rolFiltrado(dataTest, 'Mage')).toEqual(filtroMago );
  });
  
});

//Buscar
describe('buscarNombre', () => {
  it('es una función', () => {
    expect(typeof buscarNombre).toBe('function');
  });
  it('devolver el filtro de campeón por la primera letra A', () => {
    expect(buscarNombre(infoNombre , 'name', 'A')).toEqual(buscarCampeon);
  });
}); 

/*describe('example', () => {
  it('is a function', () => {
    expect(typeof example).toBe('function');
  });

  it('returns `example`', () => {
    expect(example()).toBe('example');
  });
});


describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});*/
