// Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

let ladoUm = 10;
let ladoDois = 30;
let ladoTres = 100;

if ((ladoUm + ladoDois + ladoTres) == 180) {
    console.log(true);
} else if (ladoUm <= 0 || ladoDois <= 0 || ladoTres <= 0) {
    console.log("Ângulo inválido.");
} else {
    console.log(false);
}