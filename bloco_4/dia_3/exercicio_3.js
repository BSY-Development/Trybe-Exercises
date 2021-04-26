// Agora inverta o lado do triângulo.

let n = 5;
let spaces = "";
let stars = "";

for (let i = 1; i < n; i += 1) {
    spaces += " ";
}


for (let i = 0; i < n; i += 1) {
    stars += "*";
    console.log(spaces.slice(i) + stars);
}