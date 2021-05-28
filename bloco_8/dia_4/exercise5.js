const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  return names.reduce((acc, item) => acc += item.length - (item.split('A').join('').split('a').join('').length), 0);
}

assert.deepStrictEqual(containsA(), 20);
