// Depois, faça uma pirâmide com n asteriscos de base:

let n = 5;
let spaces = "";
let stars = "*";
let count = 0;

for (let i = n; i > 1; i -= 2) {
    spaces += " ";
}

for (let i = 0; i < n; i += 2) {
    console.log(spaces.slice(count) + stars);
    stars += "**";
    count += 1;
}