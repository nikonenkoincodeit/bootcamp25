import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import { refs } from "./refs/refs";
import { signIn, signOutUser } from "./service/firebase";
console.log("11111 :>> ", 11111);

refs.buttonLogin.addEventListener("click", onLoginClick);

function onLoginClick(evt) {
  let id = evt.target.dataset.id;
  console.log(id);
  if (id === "Sign in") {
    signIn();
  } else {
    signOutUser();
  }
}

export function toggleContent(user) {
  let statusUser = "Sign in";
  if (user) {
    statusUser = "Sign out";
  }
  refs.buttonLogin.textContent = statusUser;
  refs.buttonLogin.dataset.id = statusUser;
}
