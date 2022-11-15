let counterValue = 0;
const decrem = document.querySelector("[data-action=decrement]");
const increm = document.querySelector("[data-action=increment]");
const value = document.querySelector("#value");

// Logic for ↑
const upValueBtnClick = () => {
  counterValue += 1;
  value.textContent = counterValue;
};
increm.addEventListener("click", upValueBtnClick);

// Logic for ↓
const downValueBtnClick = () => {
  counterValue -= 1;
  value.textContent = counterValue;
};
decrem.addEventListener("click", downValueBtnClick);
