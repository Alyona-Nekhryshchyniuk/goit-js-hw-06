function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const sources = {
  input: document.querySelector("input"),
  boxesBunch: document.querySelector("#boxes"),
  createBtn: document.querySelector("[data-create]"),
  destroyBtn: document.querySelector("[data-destroy]"),
};

// empty array for created boxes
let boxesArray = [];

// body of create fn
const createBoxes = (amount) => {
  boxesArray.push(document.createElement("div"));

  if (amount - 1 >= 1) {
    createBoxes((amount -= 1));
  }
};

// body of render fn: create + styles + render
const renderBoxes = () => {
  boxesArray = [];

  createBoxes(sources.input.value);

  let boxesStr = "";

  let boxesNum = sources.boxesBunch.children;

  // If блок ниже считает сколько боксов уже есть в DOMе,
  // чтоб определить к какому начальному параметру приплюсовать +10рх для ширины и высоты следующих боксов.
  // Какой-то метод попроще и попонятней не придумала. Может вы знаете
  let i;
  if (boxesNum.length >= 1) {
    i = (boxesNum.length - 1) * 10 + 30;
  } else {
    i = 20;
  }

  // +10рх for each next box
  boxesArray.forEach((el) => {
    el.style.width = `${(i += 10)}px`;
    el.style.height = `${i}px`;

    el.style.backgroundColor = getRandomHexColor();

    // transform all boxes in memory to string for rendering in 1 click
    boxesStr += el.outerHTML;
  });

  // render
  sources.boxesBunch.insertAdjacentHTML("beforeend", boxesStr);
};

sources.createBtn.addEventListener("click", renderBoxes);
// destroyBtn.addEventListener("click", destroyBoxes);

const destroyBoxes = () => {
  sources.boxesBunch.innerHTML = "";
  sources.input.value = "";
};

sources.destroyBtn.addEventListener("click", destroyBoxes);
