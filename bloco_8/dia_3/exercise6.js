const assert = require('assert');
const books = require('./obj');

const expectedResult = [
  'O Senhor dos Anéis',
  'Fundação',
  'O Chamado de Cthulhu',
];
// 1961
// Crie um array com o nome de todos os livros com mais de 60 anos de publicação.

function oldBooks() {
  return books.filter((item) => item.releaseYear < 1961).map((item) => item.name);
}

assert.deepStrictEqual(oldBooks(), expectedResult);
