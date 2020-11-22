// Напиши скрипт создания и очистки коллекции элементов.
// Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция.
// При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число.
// Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

// <div id="controls">
//   <input type="number" min="0" max="100" step="1" />
//   <button type="button" data-action="render">Создать</button>
//   <button type="button" data-action="destroy">Очистить</button>
// </div>

// <div id="boxes"></div>

"use strict";

const boxesRef = document.querySelector("#boxes");
const btnRenderRef = document.querySelector('[data-action="render"]');
const btnDestroytRef = document.querySelector('[data-action="destroy"]');

function getBoxes() {
    let amount = document.querySelector("#controls input").value;
    createBoxes(amount);
};

function randomColor() {
return Math.floor(Math.random() * 256);
};

function createBoxes(amount) {
    let createdBoxes = document.createDocumentFragment();
    let size = 30;
        for (let i = 0; i <= (amount - 1); i += 1) {
            let boxe = document.createElement("div");
            size += i * 10;
            boxe.setAttribute("style", `width: ${size}px; height: ${size}px; background-color: rgba( ${randomColor()} , ${randomColor()} , ${randomColor()} );`);
            createdBoxes.appendChild(boxe);
    };

boxesRef.appendChild(createdBoxes);
};

function destroyBoxes() {
boxesRef.innerHTML = "";
};

btnRenderRef.addEventListener("click", getBoxes);
btnDestroytRef.addEventListener("click", destroyBoxes);
