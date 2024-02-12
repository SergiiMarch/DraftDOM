const list = document.querySelector(".item");
const resList = [...list.children];
const ulEl = document.querySelector("#categories");
const title = document.querySelector("h2");
console.log(`Number of categories ${resList.length + 1}`);
title.forEach((el) => {
  `Category:${el.textContent}`;
});
console.log(`Category:${title.textContent}`);

console.dir(ulEl.firstChild);
