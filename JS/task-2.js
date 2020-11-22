// В HTML есть пустой список ul#ingredients.
// <ul id="ingredients"></ul>

//     В JS есть массив строк.

// const ingredients = [
//   'Картошка',
//   'Грибы',
//   'Чеснок',
//   'Помидоры',
//   'Зелень',
//   'Приправы',
// ];
// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
//     после чего вставит все li за одну операцию в список ul.ingredients.
// Для создания DOM - узлов используй document.createElement().


"use strict";
const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const createIngredientItem = ingredient => {
    const ingredientRef = document.createElement("li");
    ingredientRef.textContent = `${ingredient}`;
    return ingredientRef;
    };

const ingredientList = ingredients.map(ingredient => createIngredientItem(ingredient));

document.querySelector("#ingredients").append(...ingredientList);

// ingredients.forEach(ingredient => console.log(createIngredientItem(ingredient)));