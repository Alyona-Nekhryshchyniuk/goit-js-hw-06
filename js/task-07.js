const range = document.querySelector("input");
const text = document.querySelector("span");

range.addEventListener(
  "change",
  () => (text.style.fontSize = `${range.value}px`)
);
