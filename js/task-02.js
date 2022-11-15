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

ingredients.forEach((el) => {
  const item = document.createElement("li");

  // Add classes and text for items
  item.classList.add("item");
  item.textContent = `${el}`;

  array.push(item);
});

list.append(...array);
