const assert = require('assert');
const books = require('./obj');

const expectedResult = [
  'Frank Herbert',
  'George R. R. Martin',
  'Isaac Asimov',
  'J. R. R. Tolkien',
];

// Crie um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia.

function fantasyOrScienceFictionAuthors() {
  return books.filter((item) => (item.genre === 'Ficção Científica' || item.genre === 'Fantasia'))
    .map((item) => item.author.name).sort();
}

assert.deepStrictEqual(fantasyOrScienceFictionAuthors(), expectedResult);
