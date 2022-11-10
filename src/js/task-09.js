import { GetColorName } from "hex-color-to-color-name";
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const sources = {
  body: document.querySelector("body"),
  btn: document.querySelector("button"),
  colorName: document.querySelector("span"),
};

const changeBgcOnClick = () => {
  // body.style.backgroundColor = getRandomHexColor();
  // let hex = getRandomHexColor();
  let result = name("#6195ed");
  console.log(result[0]);
  console.log(result[1]);
  console.log(result[2]);
  // colorName.textContent = ``;
};

sources.btn.addEventListener("click", changeBgcOnClick);
