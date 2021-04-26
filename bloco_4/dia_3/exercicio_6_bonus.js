// Faça um programa que diz se um número definido numa variável é primo ou não.

let num = 13;
let count = 0;

for (let i = 0; i <= num; i += 1) {
    if (num % i === 0) {
        count += 1;
    }
}

if (count == 2) {
    console.log("É um numero primo");
} else {
    console.log("Não é um numero primo.");
}