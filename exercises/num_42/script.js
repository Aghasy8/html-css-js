// 42. Մի քիչ բարդ, բացի 41 խնդրի border-ը կարմրացնելուց,
// նաև տակը կարմիր տեքստ գրի (կարմիր գույնի span) սխալի
// մասին։ Օրինակ՝ Անունը չի կարող երեք նիշից պակաս կամ քսան
// նիշից ավել լինի կամ Անվան մեջ բացատների չի թույլատրվում դնել։

const body = document.body;
const login = document.getElementById("login");
const password = document.getElementById("password");
const loginError = document.createElement("div");
const passwordError = document.createElement("div");

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
    body.append(loginError);
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
    body.append(passwordError);
  }

  if (password.value === "") {
    passwordError.innerText = `Password ${errorOfEmpty}`;
  } else if (onlySpaces(password.value) === true) {
    passwordError.innerText = `Password can't contain only spaces`;
  }
}

//  if (password.value === "") {
//    password.style.border = "solid red";
//    body.append(error);
//    error.innerText = "Password can't be empty";
//  } else if (onlySpaces(password.value) === true) {
//    password.style.border = "solid red";
//    body.append(error);
//    error.innerText = "Password can't contain only spaces";
//  }

//function check() {
//   if (login === "") {
//     error.innerText = "Login can't be empty";
//     body.append(error);
//   } else if (login.value.search(" ") !== -1) {
//     error.innerText = "Login can't contain any space";
//     body.append(error);
//   } else if (onlySpaces(login.value) === true) {
//     error.innerText = "Login can't contain only spaces";
//     body.append(error);
//   } else if (login.value.length < 3 || login.value.length > 20) {
//     error.innerText = "Login can't contain less than 3 or more than 20 symbols";
//     body.append(error);
//   }
// }
