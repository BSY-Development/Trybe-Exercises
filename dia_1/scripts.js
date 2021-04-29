// Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
// - document.getElementById()
// - document.getElementsByClassName()
// - document.getElementsByTagName()
let allP = document.getElementsByTagName("p");

// Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos.
allP[0].innerText = "Daqui 2 anos me vejo formado, trabalhando fora do Brasil.";

// Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
document.querySelector(".main-content").style.background = "rgb(76,164,109)";

// Crie uma função que mude a cor do quadrado vermelho para branco.
document.querySelector(".main-content .center-content").style.background = "rgb(255,255,255)";

// Crie uma função que corrija o texto da tag <h1>.
document.querySelector("h1").innerText = "Exercício 5.1 - Javascript";

// Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
for (let index = 0; index < allP.length; index += 1) {
    allP[index].style.textTransform = "uppercase";
}

// Crie uma função que exiba o conteúdo de todas as tags <p> no console.
console.log(document.getElementsByTagName("p"));