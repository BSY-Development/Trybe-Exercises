let bodyVar = document.body;

// Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body ;
let title = document.createElement('h1');
bodyVar.appendChild(title);
title.innerHTML = "Exercício 5.2 - JavaScript DOM";

// Adicione a tag div com a classe main-content como filho da tag body ;
let divElement = document.createElement('div');
bodyVar.appendChild(divElement);
divElement.classList.add('main-content');

// Adicione a tag div com a classe center-content como filho da tag div criada no passo 2;
let divSecond = document.createElement('div');
divElement.appendChild(divSecond);
divSecond.classList.add('center-content');

// Adicione a tag p como filho do div criado no passo 3 e coloque algum texto;
let firstP = document.createElement('p');
divSecond.appendChild(firstP);
firstP.innerHTML = 'algum texto';

// Adicione a tag div com a classe left-content como filho da tag div criada no passo 2;
let divThird = document.createElement('div');
divElement.appendChild(divThird);
divThird.classList.add('left-content');

// Adicione a tag div com a classe right-content como filho da tag div criada no passo 2;
let divFourth = document.createElement('div');
divElement.appendChild(divFourth);
divFourth.classList.add('right-content');

// 