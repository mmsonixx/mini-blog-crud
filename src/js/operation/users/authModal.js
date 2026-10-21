
import { loginUser } from "./login.js";
import { registerUser } from "./register.js";

export const startAuthModalEvents = () => {
  const openButton = document.querySelector(".header__button");
  const modal = document.querySelector("[data-auth-modal]");
  const closeButton = document.querySelector("[data-auth-close]");

  const loginForm = document.querySelector("[data-login-form]");
  const registerForm = document.querySelector("[data-register-form]");
  const message = document.querySelector("[data-auth-message]");

  const loginTab = document.querySelector('[data-auth-tab="login"]');
  const registerTab = document.querySelector('[data-auth-tab="register"]');

  if (
    !openButton ||
    !modal ||
    !closeButton ||
    !loginForm ||
    !registerForm ||
    !loginTab ||
    !registerTab
  ) {
    return;
  }

  // Приветствие после успешной регистрации или входа
const showWelcome = (name) => {
  localStorage.setItem("currentUser", name);

  modal.classList.remove("is-open");

  const headerLogin = document.querySelector(".header__log-in");

  headerLogin.innerHTML = `
    <button class="header__button header__welcome" type="button">
      Hi, ${name}!
    </button>
  `;

  const welcomeButton = headerLogin.querySelector(".header__welcome");

  welcomeButton.addEventListener("click", () => {
    modal.classList.add("is-open");
  });
};

  // Открытие окна
  openButton.addEventListener("click", () => {
    modal.classList.add("is-open");
    document.body.classList.add("no-scroll");
    document.documentElement.classList.add("no-scroll");
  });

  // Закрытие окна
  closeButton.addEventListener("click", () => {
    modal.classList.remove("is-open");
    document.body.classList.remove("no-scroll");
    document.documentElement.classList.remove("no-scroll");
  });

  // Переключение на Log in
  loginTab.addEventListener("click", () => {
    loginForm.hidden = false;
    registerForm.hidden = true;

    loginTab.classList.add("active");
    registerTab.classList.remove("active");

    if (message) message.textContent = "";
  });

  // Переключение на Register
  registerTab.addEventListener("click", () => {
    loginForm.hidden = true;
    registerForm.hidden = false;

    registerTab.classList.add("active");
    loginTab.classList.remove("active");

    if (message) message.textContent = "";
  });

  // Регистрация
  registerForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(registerForm);

    const newUser = {
      name: formData.get("name").trim(),
      email: formData.get("email").trim(),
      password: formData.get("password"),
    };

    const user = await registerUser(newUser);

    if (user) {
      showWelcome(user.name);
      registerForm.reset();
    } else if (message) {
      message.textContent =
        "This email may already be registered. Please check your details.";
    }
  });

  // Вход
  loginForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(loginForm);

    const loginData = {
      email: formData.get("email").trim(),
      password: formData.get("password"),
    };

    const user = await loginUser(loginData);

    if (user) {
      showWelcome(user.name);
      loginForm.reset();
    } else if (message) {
      message.textContent = "Invalid email or password!";
    }
  });

  const savedUser = localStorage.getItem("currentUser");

if (savedUser) {
  showWelcome(savedUser);
}
};
