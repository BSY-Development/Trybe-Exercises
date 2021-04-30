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

// 8- Adicione uma lista não ordenada com os valores de 1 a 10 por extenso como valores da lista. Essa lista deve ser filha do div criado no passo 6;
let numExtenso = ['Um', 'Dois', 'Três', 'Quatro', 'Cinco', 'Seis', 'Sete', 'Oito', 'Nove', 'Dez'];
let ulCreation = document.createElement('ul');
divFourth.appendChild(ulCreation);

for (let i = 0; i < numExtenso.length; i += 1) {
    let liCreation = document.createElement('li');
    liCreation.innerHTML = numExtenso[i];
    ulCreation.appendChild(liCreation);
}

// 9- Adicione 3 tags h3 , todas sendo filhas do div criado no passo 2.
let headOne = document.createElement('h3');
let headTwo = document.createElement('h3');
let headThree = document.createElement('h3');
divElement.appendChild(headOne);
divElement.appendChild(headTwo);
divElement.appendChild(headThree);
headOne.innerHTML = "Tag one";
headTwo.innerHTML = "Tag two";
headThree.innerHTML = "Tag three";

// I- Adicione a classe title na tag h1 criada;
title.classList.add('title');

// II- Adicione a classe description nas 3 tags h3 criadas;
headOne.classList.add('description');
headTwo.classList.add('description');
headThree.classList.add('description');

// III- Remova o div criado no passo 5 (aquele que possui a classe left-content ). Utilize a função .removeChild() ;
divElement.removeChild(divThird);

// IV- Centralize o div criado no passo 6 (aquele que possui a classe right-content ). Dica: para centralizar, basta configurar o margin-right: auto do div ;
divFourth.style.marginRight = 'auto';
