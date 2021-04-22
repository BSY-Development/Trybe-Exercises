// Faça um programa que retorne o maior de três números. Defina no começo do programa três variáveis com os valores que serão comparados.

let valueOne = 23;
let valueTwo = 21;
let valueThree = 22;

if (valueOne > valueTwo && valueOne > valueThree) {
    console.log("O primeiro valor é o maior.");
} else if (valueTwo > valueOne && valueTwo > valueThree) {
    console.log("O segundo valor é o maior.");
} else if (valueThree > valueTwo && valueThree > valueOne) {
    console.log("O terceiro valor é o maior.");
} else {
    console.log("Os maiores valores são iguais.")
}
