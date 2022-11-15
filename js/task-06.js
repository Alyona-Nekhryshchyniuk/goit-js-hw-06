const input = document.querySelector("input");
const threshold = input.getAttribute("data-length");

// Callback body
const checkLengthFn = () => {
  let enteredSymbLength = input.value.length;
  if (enteredSymbLength < threshold) {
    input.classList.add("invalid");
  } else {
    input.classList.replace("invalid", "valid");
  }
};

// Call
input.addEventListener("blur", checkLengthFn);
