// Crie uma função que receba uma string word e outra string ending . Verifique se a string 
// ending é o final da string word . Considere que a string ending sempre será menor que a string word.

function finalIgual(palavra, ending) {
    let start = palavra.length - ending.length;
    let stringSize = palavra.slice(start,);
    if (stringSize === ending) {
        return true;
    }
    return false;
}

console.log(finalIgual("Trybe", "ybe"));