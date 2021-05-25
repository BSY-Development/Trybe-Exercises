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

// console.log(result(checkWin, 1));

/* Exercicio 3 */

const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'C', 'D', 'A', 'N.A', 'A', 'D', 'B'];

const lessThanZero = (score) => {
  console.log(score)
  if (score < 0) {
    return 0;
  }
  return score;
}

const checkCorrect = (correct, answers) => {
  let score = 0;
  for (let i = 0; i < correct.length; i += 1) {
    if (correct[i] === answers[i]) {
      score += 1;
    } else if (answers[i] !== 'N.A') {
      score -= 0.5;
    }
  }
  return lessThanZero(score);
}

const resultEx3 = (correctAnswers, answers, callback) => {
  return callback(correctAnswers, answers);
}

console.log(resultEx3(rightAnswers, studentAnswers, checkCorrect));
