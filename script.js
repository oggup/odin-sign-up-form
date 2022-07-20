let firstName = document.querySelector("#firstname");
let lastName = document.querySelector("#lastname");
let email = document.querySelector("#email");
let phone = document.querySelector("#phone");
let password = document.querySelector("#password");
let passwordConfirm = document.querySelector("#password-confirm");
let errorMessage = document.querySelector(".error");
let passwordConfirmLabel = document.querySelector(".password-confirm");
let phoneLabel = document.querySelector(".phone");

console.log(errorMessage);

phone.addEventListener("keyup", () => {
  phoneLabel.classList.add("error");
  phoneLabel.textContent = "phone must be exactly 10 numbers";
  if (
    phone.value.match(
      /(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})/
    )
  ) {
    phoneLabel.classList.remove("error");
    phoneLabel.textContent = "phone";
  }
});

passwordConfirm.addEventListener("keyup", (e) => {
  if (password.value !== e.target.value) {
    passwordConfirmLabel.classList.add("error");
  }
  if (password.value == e.target.value) {
    passwordConfirmLabel.textContent = "confirm password";
    passwordConfirmLabel.classList.remove("error");
  }
});
const submit = (e) => {
  e.preventDefault();
  console.log("submit");
  if (password.value !== passwordConfirm.value) {
    passwordConfirmLabel.classList.add("error");
    passwordConfirmLabel.textContent = "*passwords do not match";
    return;
  }
  if (password.value == passwordConfirm.value) {
    passwordConfirmLabel.classList.remove("error");
    passwordConfirmLabel.textContent = "confirm password";
  }
  if (
    !phone.value.match(
      /(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})/
    )
  ) {
    phoneLabel.classList.add("error");
    phoneLabel.textContent = "phone must be exactly 10 numbers";
    console.log(phone.textContent);
    return;
  }
  console.log(inputs);
};

let form = document.querySelector("form");
form.addEventListener("submit", submit);
