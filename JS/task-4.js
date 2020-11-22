// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>


"use strict";
let counterValue = 0;

const valueRef = document.querySelector("#value");
const btnIncrementRef = document.querySelector('[data-action="increment"]');
const btnDecrementRef = document.querySelector('[data-action="decrement"]');

function rewriteValue() {
    valueRef.textContent = `${counterValue}`;
};

btnIncrementRef.addEventListener('click', increment);
function increment() {
    counterValue += 1;
    rewriteValue();
};

btnDecrementRef.addEventListener('click', decrement);
function decrement() {
    counterValue -= 1;
    rewriteValue();
};


// ============================================================
// не уменьшает если текущее значение ноль
// btnDecrementRef.addEventListener('click', decrement);
// function decrement() {
//     if (counterValue > 0) {
//         counterValue -= 1;
//     }
//     rewriteValue();
// };