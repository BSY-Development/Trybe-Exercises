/* Escreva um programa que defina três números em variáveis e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .
Bonus: use somente um if . */

let valueOne = 0;
let valueTwo = 2;
let valueThree = 3;

if ((valueOne % 2 == 0 && valueOne != 0) || (valueTwo % 2 == 0 && valueTwo != 0) || (valueThree % 2 == 0 && valueThree != 0)) {
    console.log("Existe um par entre os números.");
}