const assert = require('assert');
const books = require('./obj');

// Crie um array com strings no formato NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA
// Dica: Use a função map

const formatacao = books.map((item) => `${item.name} - ${item.genre} - ${item.author.name}`);

console.log(formatacao);
