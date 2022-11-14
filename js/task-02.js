const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const list = document.querySelector("#ingredients");
const array = [];
let stringifiedItems = "";

ingredients.forEach((el) => {
  const item = document.createElement("li");

  // Add classes and text for items
  item.classList.add(`${el}`);
  item.innerHTML = `${el}`;

  // array of stringified li items
  array.push(`${item.outerHTML}`);
});

// Get rid of commas
stringifiedItems += array.join("");

// insert items to DOM
list.insertAdjacentHTML("beforeend", stringifiedItems);
