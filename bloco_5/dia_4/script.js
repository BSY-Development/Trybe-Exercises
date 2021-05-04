let background = document.querySelector('#background');
let text = document.querySelector('#text-color');

// Cor de fundo da tela;
background.addEventListener('input', function () {
    document.body.style.backgroundColor = background.value;
});

// Cor do texto;
text.addEventListener('input', function () {
    document.body.style.color = text.value;
});