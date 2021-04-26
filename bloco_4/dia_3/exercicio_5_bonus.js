// Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar:

let n = 13;
let meio = (n + 1) / 2;
let ladoEsquerdo = meio;
let ladoDireito = meio;

for (let i = 1; i <= meio; i += 1) {
    let result = "";
    for (let j = 1; j <= n; j += 1) {
        if (j == ladoEsquerdo || j == ladoDireito || i == meio) {
            result += "*";
        } else {
            result += " ";
        }
    }
    ladoEsquerdo -= 1;
    ladoDireito += 1;
    console.log(result);
}