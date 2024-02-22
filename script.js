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

// const images = [
//   {
//     url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
//     alt: "White and Black Long Fur Cat",
//   },
//   {
//     url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
//     alt: "Orange and White Koi Fish Near Yellow Koi Fish",
//   },
//   {
//     url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
//     alt: "Group of Horses Running",
//   },
// ];

// const gallery = document.querySelector(".gallery");
// const markup = images
//   .map(({ url, alt }) => {
//     return `<li class="imeg">
//     <img src="${url}" style="width: 320px; alt="${alt}">
//   </li>`;
//   })
//   .join("");
// gallery.insertAdjacentHTML("beforeend", markup);

const carBrands = [
  "Toyota",
  "Honda",
  "Ford",
  "Chevrolet",
  "Nissan",
  "BMW",
  "Mercedes-Benz",
  "Audi",
  "Volkswagen",
  "Lexus",
  "Hyundai",
  "Kia",
  "Volvo",
  "Tesla",
  "Subaru",
];

const auto = document.querySelector(".auto");
console.log(auto);

const liEl = carBrands
  .map((auto) => {
    return ` <li class = 'item'>${auto}</li>`;
  })
  .join("");

auto.insertAdjacentHTML("beforeend", liEl);
console.dir(auto);

// carBrands.forEach((car) => {
//   const liEl = document.createElement("li");
//   liEl.textContent = car;
//   liEl.classList.add("items");
//   auto.append(liEl);
// });

// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

const divElement = document.getElementById("counter");
const btnIncrement = document.querySelector('button[data-action="increment"]');
const btnDecrement = document.querySelector('button[data-action="decrement"]');
const spanEl = document.getElementById("value");

btnIncrement.addEventListener("click", () => {
  console.log("Клік інкремент");
  spanEl.textContent = +spanEl.textContent + 1;
});

btnDecrement.addEventListener("click", () => {
  console.log("Клік декремент");
  spanEl.textContent = spanEl.textContent - 1;
});

/* task new 
-перебрати масив
-всі додатні числа додаємо в окремий масів
-віводім результат в консоль*/

const numbers = [1, 2, 3, 4, -5, 6, 7, 8, -9, 10];

const newArr = numbers.reduce(
  (acc, number) => (number > 0 ? acc + number : acc),
  0
);
console.log(newArr);

/*Напиши скрипт, який під час набору тексту
 в інпуті input#name-input (подія input), 
 підставляє його поточне значення в span#name-output. 
 Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".*/

const inputEl = document.getElementById("name-input");
const spannEl = document.querySelector("h1 > span");

inputEl.addEventListener("input", onHandleInput);

function onHandleInput(event) {
  spannEl.textContent = event.currentTarget.value;
}

/*Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), 
перевіряє його вміст щодо правильної кількості введених символів.
Яка кількість символів повинна бути в інпуті, 
зазначається в його атрибуті data-length.
Якщо введена правильна кількість символів, 
то border інпуту стає зеленим, якщо неправильна кількість - червоним.
Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

*/
const input = document.getElementById("validation-input");
console.dir(input);
const dataLengthValue = input.getAttribute("data-length");
const dataPlaceholderValue = input.getAttribute("placeholder");
console.log(dataPlaceholderValue);
input.addEventListener("blur", onHandlerInput);

function onHandlerInput(event) {
  console.log(event.currentTarget.value);
  console.log(input.length);
  if (event.currentTarget.value.length > dataLengthValue) {
    input.classList.add("invalid");
  } else {
    input.classList.add("valid");
  }
  // event.preventDefault();
  // const formData = new FormData(event.currentTarget);
  // formData.forEach((value, name) => {
  //   console.log(name);
  //   console.log(value);
  // });
}
