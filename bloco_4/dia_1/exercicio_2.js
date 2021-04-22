// Faça um programa que retorne o maior de dois números. Defina no começo do programa duas variáveis com os valores que serão comparados.

let valueOne = 15;
let valueTwo = 15;

if (valueOne > valueTwo) {
    console.log(valueOne + " é maior do que " + valueTwo + ".");
} else if (valueTwo > valueOne) {
    console.log(valueTwo + " é maior do que " + valueOne + ".");
} else {
    console.log("Os dois valores são iguais.")
}