"use strict";
// select element
const emailField = document.querySelector("#user-email");

const passwordField = document.querySelector("#user-password");

const loginBtn = document.querySelector("#login-button");
// functionalities
loginBtn.addEventListener("click", function () {
  if (
    emailField.value == "example@gmail.com" &&
    passwordField.value == "secret"
  ) {
    window.location.href = "banking.html";
  } else {
  }
});

// check password show or hide
function checkboxFunc() {
  if (passwordField.type == "password") {
    passwordField.type = "text";
  } else {
    passwordField.type = "password";
  }
}
