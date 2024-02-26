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
const dataLengthValue = parseInt(input.getAttribute("data-length"));
const dataPlaceholderValue = input.getAttribute("placeholder");

input.addEventListener("blur", onHandlerInput);

function onHandlerInput(event) {
  if (event.currentTarget.value.length === dataLengthValue) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
}

/*Обробка відправлення форми form.login-form повинна відбуватися 
відповідно до події submit.
Під час відправлення форми сторінка не повинна перезавантажуватися.
Якщо у формі є незаповнені поля, 
виводь alert з попередженням про те, що всі поля повинні бути заповнені.
Якщо користувач заповнив усі поля і відправив форму, 
збери значення полів в об'єкт, 
де ім'я поля буде ім'ям властивості, 
а значення поля - значенням властивості. 
Для доступу до елементів форми використовуй властивість elements.
Виведи об'єкт із введеними даними 
в консоль і очисти значення полів форми методом reset.*/

const form = document.querySelector(".login-form");

form.addEventListener("submit", onHandlerSubmitForm);

function onHandlerSubmitForm(event) {
  event.preventDefault();

  // Отримання значень полів форми
  const email = form.elements.email.value;
  const password = form.elements.password.value;

  // Перевірка на незаповнені поля
  if (email === "" || password === "") {
    form.classList.remove("valid");
    form.classList.add("invalid");
    alert("ВВедіть коректні дані форми");
  } else {
    // Створення об'єкта з введеними даними
    const formData = {
      email: email,
      password: password,
    };

    // Виведення об'єкта із введеними даними в консоль
    console.log(formData);
    form.reset();
  }
}
//  Напиши скрипт,
//  який змінює кольори фону елемента <body> через
//  інлайн-стиль по кліку на button.change-color
//  і виводить значення кольору в span.color.
const body = document.querySelector("body");
const btnElColor = document.querySelector(".change-color");
const spanColorEl = document.querySelector(".color");

btnElColor.addEventListener("click", onHandlerBtn);

function onHandlerBtn(event) {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  spanColorEl.textContent = color;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

/**Напиши скрипт створення і очищення колекції елементів.
 * Користувач вводить кількість елементів в input
 * і натискає кнопку Створити, після чого рендериться колекція.
 * Натисненням на кнопку Очистити, колекція елементів очищається.
 * Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

Розміри найпершого <div> - 30px на 30px.
Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
Всі елементи повинні мати випадковий колір фону у форматі HEX. 
Використовуй готову функцію getRandomHexColor для отримання кольору. 
Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.*/
