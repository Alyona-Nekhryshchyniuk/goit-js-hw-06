function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const sources = {
  input: document.querySelector("input"),
  boxesBunch: document.querySelector("#boxes"),
  createBtn: document.querySelector("[data-create]"),
  destroyBtn: document.querySelector("[data-destroy]"),
};
console.log(sources.createBtn);

const boxesArray = [];
const createBoxes = (amount) => {
  let createdBox = document.createElement("div");
  boxesArray.push(createdBox);

  if (amount - 1 >= 1) {
    createBoxes((amount -= 1));
  }
};

const renderBoxes = () => {
  sources.boxesBunch.innerHTML = "";
  sources.input.value = 0;

  createBoxes(sources.input.value);

  let boxesStr = "";
  boxesArray.forEach((el) => {
    el.style.width = "30px";
    el.style.height = "30px";
    el.style.backgroundColor = getRandomHexColor();
    boxesStr += el.outerHTML;
  });

  // let boxesInStr = boxesArray.join("");
  sources.boxesBunch.insertAdjacentHTML("beforeend", boxesStr);
};

sources.createBtn.addEventListener("click", renderBoxes);
// destroyBtn.addEventListener("click", destroyBoxes);
