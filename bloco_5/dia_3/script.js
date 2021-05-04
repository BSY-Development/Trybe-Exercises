const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
const feriados = [24, 25, 31];
const sexta = [4, 11, 18, 25];
const lista = document.querySelector('#days');
const btnContainer = document.querySelector('.buttons-container');
let active = false;
let fridayOn = false;


function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');

    for (let index = 0; index < weekDays.length; index += 1) {
        const days = weekDays[index];
        const dayListItem = document.createElement('li');
        dayListItem.innerHTML = days;

        weekDaysList.appendChild(dayListItem);
    };
};

createDaysOfTheWeek();

// Exercicio 1 - Criar lista, adicionar classes day, holiday e friday.
for (day of dezDaysList) {
    let dayElement = document.createElement('li');
    dayElement.innerHTML = day;
    dayElement.classList.add('day');
    if (sexta.includes(day)) {
        dayElement.classList.add('friday');
    }
    if (feriados.includes(day)) {
        dayElement.classList.add('holiday');
    }
    lista.appendChild(dayElement);
}

// Exercicio 2 - Criar botão de feriados
function creatingButton(text) {
    let btnHoliday = document.createElement('button');
    btnHoliday.innerHTML = text;
    btnHoliday.id = 'btn-holiday';
    btnContainer.append(btnHoliday);
}

creatingButton('Feriados');

// Exercicio 3 - Mudar a cor de fundo dos feriados
let holidayBtn = document.querySelector('#btn-holiday');
let allHolidays = document.querySelectorAll('.holiday');
holidayBtn.addEventListener('click', function () {

    for (let i = 0; i < allHolidays.length; i += 1) {
        if (active) {
            allHolidays[i].style.backgroundColor = "rgb(238, 238, 238)";
        } else {
            allHolidays[i].style.backgroundColor = "rgb(255, 166, 0)";
        }
    }
    if (active) {
        active = false;
    } else {
        active = true;
    }
});

// Exercicio 4 - Criar o botão Sexta feira
function creatingFriday(text) {
    let btnFriday = document.createElement('button');
    btnFriday.innerHTML = text;
    btnFriday.id = 'btn-friday';
    btnContainer.append(btnFriday);
}

creatingFriday('Sexta-feira');

// Exercicio 5 - Mudar texto das sextas com ida e volta.
let allFridays = document.querySelectorAll('.friday');
let fridayBtn = document.querySelector('#btn-friday');
fridayBtn.addEventListener('click', function () {
    if (fridayOn) {
        for (let i = 0; i < allFridays.length; i += 1) {
            allFridays[i].innerHTML = sexta[i];
        }
    } else {
        for (let i = 0; i < allFridays.length; i += 1) {
            allFridays[i].innerHTML = 'Sextou!';
        }
    }
    if (fridayOn) {
        fridayOn = false;
    } else {
        fridayOn = true;
    }
});

// Exercicio 6 - Dar zoom nos dias
let allDays = document.querySelectorAll('.day');
for (let i = 0; i < allDays.length; i += 1) {
    allDays[i].addEventListener('mouseover', function () {
        allDays[i].style.transform = 'scale(2.0)';
    });
    allDays[i].addEventListener('mouseout', function () {
        allDays[i].style.transform = 'scale(1.0)';
    });

}

// Exercicio 7 - Adicionar Tarefa personalizadas 
const tasks = document.querySelector('.my-tasks');

function tarefas(text) {
    let work = document.createElement('span');
    work.innerHTML = text;
    tasks.appendChild(work);
}

tarefas('Estudar');

// Exercicio 8 - Adicionar uma div com a class task.
function changeColor(color) {
    let cor = document.createElement('div');
    cor.classList.add('task');
    cor.style.backgroundColor = color;
    tasks.appendChild(cor);
}

let colorCircle = 'orange';
changeColor(colorCircle);

// Exercicio 9 - Adicionar classe selected ao clicar na bolinha
const selectColor = document.querySelector('.task');
selectColor.addEventListener('click', function () {
    selectColor.classList.toggle('selected');
});

// Exercicio 10 - Muda a cor do dia para a cor do circulo caso ele tenha a classe selecionado (CLicar em cima dele para por ou tirar)
for (let i = 0; i < allDays.length; i += 1) {
    allDays[i].addEventListener('click', function () {
        if (selectColor.classList.contains('selected')) {
            if (allDays[i].style.color === colorCircle) {
                allDays[i].style.color = 'rgb(119, 119, 119)';
            } else {
                allDays[i].style.color = colorCircle;
            }
        }
    });
}