let background = document.querySelector('#background');
let textColor = document.querySelector('#text-color');
let text = document.querySelector('article');
let fontSize = document.querySelector('#fonte');
let spacing = document.querySelector('#spacing');

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

// Espaçamento entre as linhas do texto;
spacing.addEventListener('input', function () {
    text.style.lineHeight = spacing.value + 'px';
}); 