//  41. Login-ի լոգիկա: Երկու տեքստային դաշտ եք սարքում
//  login-ի password-ի համար և մեկ button. Button-ը սեղմելիս
//  ծրագիրը կարմրացնում է login-ի տեքստային դաշտի border-ը,
//  եթե այն դատարկ է, պարունակում է միայն բացատներ (space, probel),
//  տառերի քանակը 3-ից պակաս է կամ 20-ից ավել, բացատ կա login-ի մեջ
//  (օրինակ՝ Hovhannes 123). Իսկ գաղտնաբառի համար ստուգվում է,
//  որ այն դատարկ է կամ պարունակում է միայն բացատներ

const login = document.getElementById("login");
const password = document.getElementById("password");

function onlySpaces(str) {
  return str.trim().length === 0;
}

function check() {
  if (
    login === "" ||
    login.value.search(" ") !== -1 ||
    onlySpaces(login.value) === true ||
    login.value.length < 3 ||
    login.value.length > 20
  ) {
    login.style.border = "solid red";
  }

  if (password.value === "" || onlySpaces(password.value) === true) {
    password.style.border = "solid red";
  }
}
