// Escreva um programa que defina três números em variáveis e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .
// Bonus: use somente um if .

let valueOne = 7;
let valueTwo = 2;
let valueThree = 8;

if ((valueOne % 2 != 0) || (valueTwo % 2 != 0) || (valueThree % 2 != 0)) {
    console.log("Existe um impar entre os números.");
}