// Exercicio 1
/* const testingScope = (escopo) => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
    console.log(ifScope);
  } else {
    let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
}

testingScope(true); */

// Exercicio 2
/* const oddsAndEvens = [13, 3, 4, 10, 7, 2];
oddsAndEvens.sort((a, b) => a-b);

console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`); */

// Exercicio 2-1 || Crie uma função que receba um número e retorne seu fatorial.
/* const fatorial = (num) => {
  if(num <= 1) {
    return num;
  } else {
    return num * fatorial(num-1)
  }
}

console.log(fatorial(3)); */

// Exercicio 2-2 || Crie uma função que receba uma frase e retorne qual a maior palavra.
/* const longestWord = (word) => {
  arrayWords = word.split(' ');
  const ordered = arrayWords.sort((a,b) => a.length - b.length);
  return ordered[ordered.length-1];
}
longestWord("Antônio foi no banheiro e não sabemos o que aconteceu"); */

// Exercicio 2-3
/* let clickCount = 0;
const click = document.querySelector('button');
const score = document.querySelector('h1');

click.addEventListener('click', () => score.innerHTML = parseInt(score.innerHTML, 10) + 1); */

// Exercicio 2-4
// Parte 2
const skills = ['Python', 'HTML', 'CSS', 'Javascript', 'GitHub'];

// Parte 1
const substitution = (param) => {
  const string = 'Tryber x aqui!';
  const arr = string.split(' ');
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === 'x') {
      arr[i] = param;
    }
  }
  return arr.join(' ');
}

// Parte 3
const skillSubstitution = (text) => {
  skills.sort();
  return `${text} Minhas cinco principais habilidades são: 
  - ${skills[0]};
  - ${skills[1]};
  - ${skills[2]};
  - ${skills[3]};
  - ${skills[4]}; #goTrybe`;
}

console.log(skillSubstitution(substitution('Bruno')));
