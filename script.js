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
const res = [];
ingredients.forEach((ingredient) => {
  const li = document.createElement("li");
  li.textContent = ingredient;
  li.classList.add("item");
  res.push(li);
});
console.log(res);
res.forEach((li) => {
  ulIngr.appendChild(li);
});
