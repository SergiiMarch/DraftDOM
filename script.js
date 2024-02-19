const categories = document.querySelector("#categories");
console.log(`Number of categories: ${categories.children.length}`);
// categories.querySelectorAll(".item").forEach((categori) => {
//   const name = categori.firstElementChild.textContent;
//   const lastName = categori.lastElementChild.childElementCount;
//   console.log(`Category: ${name}\nElements: ${lastName}`);
// });
const title = document.getElementById("categories");
console.log(`title : ${title.children.length}`);
const li = document.createElement("li");
li.classList.add("item");

title.appendChild(li);

// HTML містить порожній список ul#ingredients.

// <ul id="ingredients"></ul>

// JavaScript містить масив рядків.

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const ulIngr = document.querySelector("#ingredients");
ingredients.forEach((ingredient) => {
  const li = document.createElement("li");
  li.textContent = ingredient;
  li.classList.add("item");

  ulIngr.appendChild(li);
});

const fruits = ["Apple", "Banana", "Orange", "Grapes", "Pineapple"];

const frut = document.querySelector("#fruits");
fruits.forEach((fruit) => {
  const li = document.createElement("li");
  li.textContent = fruit;
  li.classList.add("items");

  frut.appendChild(li);
});

// Використовуй масив об'єктів images для створення елементів <img>,
// вкладених в <li>.
// Для створення розмітки використовуй шаблонні рядки і метод
// insertAdjacentHTML()

const images = [
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const gallery = document.querySelector(".gallery");
const markup = images
  .map(({ url, alt }) => {
    return `<li class="imeg">
    <img src="${url}" style="width: 320px; alt="${alt}">
  </li>`;
  })
  .join("");
gallery.insertAdjacentHTML("beforeend", markup);
const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
