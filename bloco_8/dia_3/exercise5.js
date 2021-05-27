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
  const livros = books.filter((item) => (item.genre === 'Ficção Científica' || item.genre === 'Fantasia'));
  const names = livros.map((item) => item.author.name);
  names.sort();
  return names;
}

assert.deepStrictEqual(fantasyOrScienceFictionAuthors(), expectedResult);
