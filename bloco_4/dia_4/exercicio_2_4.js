// Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.


let names = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function maiorNome(listNames) {
    let greaterName = "";
    for (person of names) {
        if (person.length > greaterName.length) {
            greaterName = person;
        }
    }
    return greaterName;
}

console.log(maiorNome(names));