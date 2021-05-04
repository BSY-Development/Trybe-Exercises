// Seletores
let background = document.querySelector('#background');
let textColor = document.querySelector('#text-color');
let text = document.querySelector('article');
let fontSize = document.querySelector('#fonte');
let spacing = document.querySelector('#spacing');
let fonteFamily = document.querySelector('#fonte-family');
let reset = document.querySelector('button');

// Salvar preferências do usuário
if (localStorage.getItem('background') !== null) {
    document.body.style.backgroundColor = localStorage.getItem('background');
    background.value = localStorage.getItem('background');
}
if (localStorage.getItem('textColor') !== null) {
    document.body.style.color = localStorage.getItem('textColor');
    textColor.value = localStorage.getItem('textColor');
}
if (localStorage.getItem('fontSize') !== null) {
    text.style.fontSize = localStorage.getItem('fontSize');
    fontSize.value = parseInt(localStorage.getItem('fontSize'));
}
if (localStorage.getItem('spacing') !== null) {
    text.style.lineHeight = localStorage.getItem('spacing') + 'px';
    spacing.value = parseInt(localStorage.getItem('spacing'));
}
if (localStorage.getItem('fontFamily') !== null) {
    text.style.fontFamily = localStorage.getItem('fontFamily');
    fonteFamily.value = localStorage.getItem('fontFamily');
}

// Cor de fundo da tela;
background.addEventListener('input', function () {
    document.body.style.backgroundColor = background.value;
    localStorage.setItem('background', background.value);
});

// Cor do texto;
textColor.addEventListener('input', function () {
    document.body.style.color = textColor.value;
    localStorage.setItem('textColor', textColor.value);
});

// Tamanho da fonte;
fontSize.addEventListener('input', function () {
    text.style.fontSize = fontSize.value + 'px';
    localStorage.setItem('fontSize', fontSize.value + 'px');
});

// Espaçamento entre as linhas do texto;
spacing.addEventListener('input', function () {
    text.style.lineHeight = spacing.value + 'px';
    localStorage.setItem('spacing', spacing.value) + 'px';
}); 

// Tipo da fonte ( Font family ).
fonteFamily.addEventListener('input', function() {
    text.style.fontFamily = fonteFamily.value;
    localStorage.setItem('fontFamily', fonteFamily.value);
});

// Escolha pessoal - Resetar
reset.addEventListener('click', function(){
    localStorage.clear();
    location.reload();
});