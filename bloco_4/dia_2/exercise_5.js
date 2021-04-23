// Utilizando for , descubra qual o maior valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maior = 0;

for (num of numbers) {
    if (num > maior) {
        maior = num;
    }
}
console.log("Maior numero: " + maior);