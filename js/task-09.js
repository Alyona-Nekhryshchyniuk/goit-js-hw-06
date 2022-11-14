function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const sources = {
  body: document.querySelector("body"),
  btn: document.querySelector("button"),
  colorName: document.querySelector("span"),
};

const changeBgcOnClick = () => {
  sources.body.style.backgroundColor = getRandomHexColor();
};

sources.btn.addEventListener("click", changeBgcOnClick);
