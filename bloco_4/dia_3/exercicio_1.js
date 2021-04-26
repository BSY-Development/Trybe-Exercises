// Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . 

let n = 90;
let stars = "";

for (let i = 0; i < n; i += 1) {
    stars += "*";
}

if (n > 1) {
    for (let i = 0; i < n; i += 1) {
        console.log(stars);
    }
}