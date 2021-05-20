const { count } = require("console");
const { all } = require("prelude-ls");
const { report } = require("process");

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

// Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
const listValues = (obj) => console.log(Object.values(obj));

listValues(lesson3);

// Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . 
// Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . 
// Ao executar o comando console.log(allLessons) , a saída deverá ser a seguinte:
const allLessons = Object.assign({}, {lesson1}, {lesson2}, {lesson3});
// console.log(allLessons);

// Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em 
// todas as aulas.
function six() {
  let count = 0;
  for (item in allLessons) {
    count += allLessons[item].numeroEstudantes;
  }
  return count;
}

console.log(six());

// Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo:
const getValueByNumber = (obj, indice) => console.log(Object.values(obj)[indice]);

getValueByNumber(lesson1, 0);

// Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir 
// três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. Exemplo:
function compareIfExist(obj, chave, valor) {
  if (obj[chave] === valor) {
    return true;
  }
  return false;
}

console.log(compareIfExist(lesson3, 'professor', 'Maria Clara'));

// Bonus Crie uma função para contar quantos estudantes assistiram às aulas de Matemática. 
// Use o objeto criado no exercício 5.
function math(allLessons) {
  let count = 0;
  for (item in allLessons) {
    if(allLessons[item].materia === 'Matemática') {
      count += allLessons[item].numeroEstudantes;
    }
  }
  return count;
}

console.log(math(allLessons));

// Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, 
// as aulas que ele ou ela ministrou e o número total de estudantes. Use o objeto criado no exercício 5:
function createReport(allLessons, teacher) {
  const report = {
    professor: teacher,
    aulas: [],
    estudantes: 0,
  }

  for (item in allLessons) {
    if (allLessons[item].professor === teacher) {
      report.aulas.push(allLessons[item].materia);
      report.estudantes += allLessons[item].numeroEstudantes;
    }
  }
  return report;
}

console.log(createReport(allLessons, 'Maria Clara'));