// Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

function verificaPalindromo(text) {
    let reverse = text.split("").reverse().join("");
    if (text === reverse){
        return true;
    }
    return false;
}

console.log(verificaPalindromo("aranha"));