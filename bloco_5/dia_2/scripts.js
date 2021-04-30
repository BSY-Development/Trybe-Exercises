let bodyVar = document.body;

// 1- Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body ;
let title = document.createElement('h1');
bodyVar.appendChild(title);
title.innerHTML = "Exercício 5.2 - JavaScript DOM";

// 2- Adicione a tag div com a classe main-content como filho da tag body ;
let divElement = document.createElement('div');
bodyVar.appendChild(divElement);
divElement.classList.add('main-content');

// 3- Adicione a tag div com a classe center-content como filho da tag div criada no passo 2;
let divSecond = document.createElement('div');
divElement.appendChild(divSecond);
divSecond.classList.add('center-content');

// 4- Adicione a tag p como filho do div criado no passo 3 e coloque algum texto;
let firstP = document.createElement('p');
divSecond.appendChild(firstP);
firstP.innerHTML = 'algum texto';

// 5- Adicione a tag div com a classe left-content como filho da tag div criada no passo 2;
let divThird = document.createElement('div');
divElement.appendChild(divThird);
divThird.classList.add('left-content');

// 6- Adicione a tag div com a classe right-content como filho da tag div criada no passo 2;
let divFourth = document.createElement('div');
divElement.appendChild(divFourth);
divFourth.classList.add('right-content');

// 7- Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image . Esse elemento deve ser filho do div criado no passo 5;
let imageLeft = document.createElement('img');
divThird.appendChild(imageLeft);
imageLeft.classList.add('small-image');
imageLeft.src = 'https://picsum.photos/200';