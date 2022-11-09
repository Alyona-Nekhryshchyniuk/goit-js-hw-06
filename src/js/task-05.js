const input = document.querySelector("input");
const nameOutput = document.querySelector("span");

const inputClick = () => {
  let name = input.value;
  let normalizedName = name[0].toUpperCase() + name.slice(1);

  nameOutput.textContent = normalizedName;
};
input.addEventListener("input", inputClick);
