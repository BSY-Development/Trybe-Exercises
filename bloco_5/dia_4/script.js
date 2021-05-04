let background = document.querySelector('#background');
let textColor = document.querySelector('#text-color');
let text = document.querySelector('article');
let fontSize = document.querySelector('#fonte');

// Cor de fundo da tela;
background.addEventListener('input', function () {
    document.body.style.backgroundColor = background.value;
});

// Cor do texto;
textColor.addEventListener('input', function () {
    document.body.style.color = textColor.value;
});

// Tamanho da fonte;
fontSize.addEventListener('input', function () {
    text.style.fontSize = fontSize.value + 'px';
});