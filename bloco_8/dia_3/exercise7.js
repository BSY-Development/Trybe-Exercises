const assert = require('assert');
const books = require('./obj');

const expectedResult = 'O Senhor dos Anéis';

// Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais.
// Dica: cada inicial termina com um ponto.
// 7
function authorWith3DotsOnName() {
  return books.find((item) => item.author.name.startsWith('.', 7)).name;
}

assert.deepStrictEqual(authorWith3DotsOnName(), expectedResult);
