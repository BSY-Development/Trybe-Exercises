const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// Crie uma função para adicionar o turno da manhã na lesson2 . Essa função deve possuir três 
// parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
function modify(objeto, chave, valor) {
  objeto[chave] = valor;
}

modify(lesson2, 'turno', 'manhã');

// console.log(lesson2);

// Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
const listKeys = (obj) => console.log(Object.keys(obj));

listKeys(lesson1);

// Crie uma função para mostrar o tamanho de um objeto.
const tamanho = (obj) => console.log(Object.keys(obj).length);

tamanho(lesson2);
