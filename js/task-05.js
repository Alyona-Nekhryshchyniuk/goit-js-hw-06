const input = document.querySelector("input");
const nameOutput = document.querySelector("span");

const inputClick = () => {
  let name = input.value;
  name === ""
    ? (nameOutput.textContent = "Anonymous")
    : (nameOutput.textContent = name[0].toUpperCase() + name.slice(1));
};

// Call
input.addEventListener("input", inputClick);
