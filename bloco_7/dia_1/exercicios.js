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
let clickCount = 0;
const click = document.querySelector('button');
const score = document.querySelector('h1');

click.addEventListener('click', () => score.innerHTML = parseInt(score.innerHTML, 10) + 1);
