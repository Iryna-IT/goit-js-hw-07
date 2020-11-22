// Напиши скрипт для создания галлереи изображений по массиву данных.

// В HTML есть список ul#gallery.
// <ul id="gallery"></ul>

// Используй массив объектов images для создания тегов img вложенных в li.
// Для создания разметки используй шаблонные строки и insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через css-классы.


"use strict";

const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];



const galleryList = document.querySelector('#gallery');
galleryList.insertAdjacentHTML('beforeEnd', images.map (({ url, alt }) => `<li><img src="${url}" alt="${alt}" width= "300 px"> </li>`).join(""));

galleryList.classList.add("gallery-list");
// document.querySelector(".gallery-list").setAttribute("style", "display: flex; justify-content: space-between; flex-wrap: nowrap;");

const galleryItems = document.querySelectorAll(".gallery-list > li");
galleryItems.forEach(item => {
  item.classList.add("gallery-list-item");
  // item.setAttribute("style", "list-style: none;");
});

const galleryImg = document.querySelectorAll(".gallery-list-item > img");
galleryImg.forEach(image => {
  image.classList.add("gallery-item-img");
  // image.setAttribute("style", "border-radius: 50%; width: 100%; height: 100%;");
});
  

// ================================================================================================

// Добавляет все <img> в одну <li>
// function getGalleryImg({url, alt}) {
//   return `<img src = ${url} alt = ${alt}>`;
// }

// function getGalleryItem(arr) {
//   const item = `<li> ${arr.map(item => getGalleryImg(item)).join('')}
// </ul>`;

//   return item;
// }

// const ul = document.querySelector("#gallery");
// ul.insertAdjacentHTML('beforeend', getGalleryItem(images));




// ==================================================================
// Нормальный способ
// const createImg = image => {
//     const liRef = document.createElement("li");

//     const imgRef = document.createElement("img");
//     imgRef.setAttribute("src", `${image.url}`);
//     imgRef.setAttribute("alt", `${image.alt}`);

//     liRef.append(imgRef);
//     return liRef;
    
//     };

// const imgList = images.map(image => createImg(image));
// document.querySelector("#gallery").append(...imgList);