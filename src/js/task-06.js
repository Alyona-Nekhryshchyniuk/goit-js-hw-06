const input = document.querySelector("input");
const threshold = input.getAttribute("data-length");

// Callback body
const checkLengthFn = () => {
  let enteredSymbLength = input.value.length;

  input.classList.add("valid");

  if (enteredSymbLength < threshold) {
    input.classList.replace("valid", "invalid");
  }
};

//EventListener
input.addEventListener("blur", checkLengthFn);
