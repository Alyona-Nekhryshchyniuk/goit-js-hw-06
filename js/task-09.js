function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const sources = {
  body: document.querySelector("body"),
  btn: document.querySelector("button"),
  span: document.querySelector("span"),
};

const changeBgcOnClick = () => {
  let color = getRandomHexColor();
  sources.body.style.backgroundColor = color;
  sources.span.textContent = `${color}`;
};

sources.btn.addEventListener("click", changeBgcOnClick);
