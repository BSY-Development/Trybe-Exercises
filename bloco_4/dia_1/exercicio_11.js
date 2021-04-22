/* Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.
A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:
INSS (Instituto Nacional do Seguro Social)
Salário bruto até R$ 1.556,94: alíquota de 8%
Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
IR (Imposto de Renda)
Até R$ 1.903,98: isento de imposto de renda
De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto. */

let salarioBruto = 2000;
let inss;
let impostoRenda = 0;
let deduzirValor = 0;
let salarioFinal;

if (salarioBruto <= 1556.94) {
    inss = 0.08 * salarioBruto;
} else if (salarioBruto <= 2594.92) {
    inss = 0.09 * salarioBruto;
} else if (salarioBruto <= 5189.82) {
    inss = 0.11 * salarioBruto;
} else {
    inss = 570.88;
}

let salarioBase = salarioBruto - inss;

if (salarioBase > 4664.68) {
    deduzirValor = 869.36;
    impostoRenda = 0.275 * salarioBase;

} else if (salarioBase >= 3751.06) {
    deduzirValor = 636.13;
    impostoRenda = 0.225 * salarioBase;
} else if (salarioBase >= 2826.66) {
    deduzirValor = 354.80
    impostoRenda = 0.15 * salarioBase;
} else if (salarioBase >= 1903.99) {
    deduzirValor = 142.80;
    impostoRenda = 0.075 * salarioBase;
}

salarioFinal = salarioBase - (impostoRenda - deduzirValor);

console.log("O salário final sera de: R$" + salarioFinal);