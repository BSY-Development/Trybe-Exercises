// Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

let numbers = [2, 3, 2, 5, 8, 2, 3];

function repeatedNumber(listNumbers) {
    let mostlyRepeated = 0;
    let numberRepetition = 0;
    for (num of listNumbers) {
        let repeated = 0;
        for (numComp of listNumbers) {
            if (num === numComp) {
                repeated += 1;
            }
        }
        if (repeated > numberRepetition) {
            mostlyRepeated = num;
            numberRepetition = repeated;
        }
    }
    return mostlyRepeated;
}

console.log(repeatedNumber(numbers));