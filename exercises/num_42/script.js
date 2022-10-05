// 42. Մի քիչ բարդ, բացի 41 խնդրի border-ը կարմրացնելուց,
// նաև տակը կարմիր տեքստ գրի (կարմիր գույնի span) սխալի
// մասին։ Օրինակ՝ Անունը չի կարող երեք նիշից պակաս կամ քսան
// նիշից ավել լինի կամ Անվան մեջ բացատների չի թույլատրվում դնել։

const body = document.body;
const login = document.getElementById("login");
const password = document.getElementById("password");
const loginError = document.createElement("span");
const passwordError = document.createElement("span");
const container = document.getElementById("container");
const containerLogin = document.getElementById("containerLogin");
const containerPassword = document.getElementById("containerPassword");

container.style.color = "red";
function onlySpaces(str) {
  return str.trim().length === 0;
}

function check() {
  const errorOfEmpty = "can't be empty";
  const loginErrorText = "Login can't contain";

  if (
    login === "" ||
    login.value.search(" ") !== -1 ||
    onlySpaces(login.value) === true ||
    login.value.length < 3 ||
    login.value.length > 20
  ) {
    login.style.border = "solid red";
    containerLogin.append(loginError);
  }

  if (login === "") {
    loginError.innerText = `Login ${errorOfEmpty}`;
  } else if (login.value.search(" ") !== -1) {
    loginError.innerText = `${loginErrorText} any space`;
  } else if (onlySpaces(login.value) === true) {
    loginError.innerText = `${loginErrorText}  only spaces`;
  } else if (login.value.length < 3 || login.value.length > 20) {
    loginError.innerText = `${loginErrorText}  less than 3 or more than 20 symbols`;
  }

  if (password.value === "" || onlySpaces(password.value) === true) {
    password.style.border = "solid red";
    containerPassword.append(passwordError);
  }

  if (password.value === "") {
    passwordError.innerText = `Password ${errorOfEmpty}`;
  } else if (onlySpaces(password.value) === true) {
    passwordError.innerText = `Password can't contain only spaces`;
  }

  if (
    login !== "" &&
    login.value.search(" ") === -1 &&
    login.value.length >= 3 &&
    login.value.length <= 20
  ) {
    login.style.border = null;
    loginError.remove();
  }

  if (password.value !== "" && onlySpaces(password.value) !== true) {
    password.style.border = null;
    passwordError.remove();
  }
}
