const input = document.querySelector("input");
const nameOutput = document.querySelector("span");

const inputClick = () => {
  if (input.value.length === 0) {
    nameOutput.textContent = "Anonymous";
  } else {
    let name = input.value;
    let normalizedName = name[0].toUpperCase() + name.slice(1);

    nameOutput.textContent = normalizedName;
  }
};
input.addEventListener("input", inputClick);
