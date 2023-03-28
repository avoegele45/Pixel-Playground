import { LoginController } from "./login-controller.js";

const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    LoginController.login(username, password)

    // location.href = 'index.html';
})