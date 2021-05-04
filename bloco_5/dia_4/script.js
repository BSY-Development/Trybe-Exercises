let background = document.querySelector('#background');


background.addEventListener('input', function (){
    document.body.style.backgroundColor = background.value;
});