// Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.

function somaNums(num) {
    sum = 0;
    for (let i = 1; i <= num; i += 1) {
        sum += i;
    }
    return sum;
}

console.log(somaNums(5));