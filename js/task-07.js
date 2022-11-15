const range = document.querySelector("input");
const text = document.querySelector("span");

range.addEventListener(
  "input",
  () => (text.style.fontSize = `${range.value}px`)
);
