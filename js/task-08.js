const form = document.querySelector("form");

const valueOnFormSubmit = (event) => {
  event.preventDefault();

  if (form.password.value.length === 0 || form.email.value.length === 0) {
    alert("All fields must be filled in!");
  } else {
    let obj = {};
    obj.password = form.elements.password.value;
    obj.email = form.elements.email.value;
    console.log(obj);

    form.reset();
  }
};

form.addEventListener("submit", valueOnFormSubmit);
