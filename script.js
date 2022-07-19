let firstName = document.querySelector("#firstname");
let lastName = document.querySelector("#lastname");
let email = document.querySelector("#email");
let phone = document.querySelector("#phone");
let password = document.querySelector("#password");
let passwordConfirm = document.querySelector("#password-confirm");

let errorMessage = document.createElement("p");
errorMessage.classList.add("error");
errorMessage.textContent = "*passwords do not match";

console.log(errorMessage);

let inputs = [firstName, lastName, email, phone, password, passwordConfirm];

inputs.forEach((input) => {
  console.log(input);
});

const submit = (e) => {
  e.preventDefault();
  console.log("submit");
  if (password !== passwordConfirm) {
    password.classList.add("error");
    passwordConfirm.classList.add("error");
    document.querySelector(".confirm-input").append(errorMessage);
  }
  console.log(inputs);
};

let form = document.querySelector("form");
form.addEventListener("submit", submit);
