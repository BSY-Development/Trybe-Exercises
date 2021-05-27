const assert = require('assert');
const books = require('./obj');

// Construa um array de objetos a partir do array de livros. Cada objeto deve conter uma propriedade author , 
// com o nome da pessoa autora do livro, e uma propriedade age com a idade dessa pessoa quando o livro foi 
// lançado. O array deve ser ordenado por idade, ou seja, da pessoa mais jovem para a mais velha 
// considerando suas idades quando o livro foi lançado.
// Dica: use as funções map , sort

const expectedResult = [{
    age: 31,
    author: 'Isaac Asimov',
  },
  {
    age: 38,
    author: 'H. P. Lovecraft',
  },
  {
    age: 39,
    author: 'Stephen King',
  },
  {
    age: 43,
    author: 'George R. R. Martin',
  },
  {
    age: 45,
    author: 'Frank Herbert',
  },
  {
    age: 62,
    author: 'J. R. R. Tolkien',
  },
];

function nameAndAge() {
  const obj = books.map((item) => ({age: (item.releaseYear - item.author.birthYear), author: item.author.name}));
  obj.sort((a, b) => a.age - b.age);
  return obj;
}

assert.deepStrictEqual(nameAndAge(), expectedResult);
