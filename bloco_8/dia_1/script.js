/* Exercicio 1 */

const newEmployees = (func) => {
  const employees = {
    id1: func('Pedro Guerra'),
    id2: func('Luiza Drumond'),
    id3: func('Carla Paiva'),
  }
  return employees;
};

const createObj = (nome) => {
  let personEmail = nome.toLowerCase().split(' ').join('_');
  const items = {
    nomeCompleto: nome,
    email: `${personEmail}@trybe.com`,
  };
  return items;
}

// newEmployees(createObj);

/* Exercicio 2 */

const checkWin = (numGuessed, numRandom) => {
  if (numGuessed === numRandom) {
    return 'Parabéns você ganhou';
  }
  return 'Tente novamente';
}

const result = (func, num) => {
  let randomNumber = Math.ceil(Math.random() * 5);
  return func(num, randomNumber);
}

console.log(result(checkWin, 1));
