import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import { refs } from "./refs/refs";
import { signIn, signOutUser, addMessage, getUser, loadFile } from "./service/firebase";

//TODO callback buttonLogin click
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

//TODO callback formMessage submit
refs.formMessage.addEventListener("submit", onFormMessageSubmit);

function onFormMessageSubmit(e) {
  e.preventDefault();
  const message = e.target.elements.message.value.trim();
  if (!message) return;
  const userInfo = getUserInfo(message);
  addMessage(userInfo);
  e.target.reset();
}


function getUserInfo(message) {
  const { photoURL, uid } = getUser();
  return {
    type: "text",
    message,
    photoURL,
    uid,
    timeStep: Date.now(),
  }
}

export function getImgSend(photoURL) {
  const { uid } = getUser();
  return {
    type: "image",
    photoURL,
    uid,
    timeStep: Date.now(),
  }
}

export function toggleBtnContent(user) {
  let statusUser = "Sign in";
  if (user) {
    statusUser = "Sign out";
  }
  refs.buttonLogin.textContent = statusUser;
  refs.buttonLogin.dataset.id = statusUser;
}

export function isChatVisible(data) {
  if (data) {
    return refs.chatContainer.classList.remove('is-hidden');
  }
  refs.chatContainer.classList.add('is-hidden');
}


//TODO callback on iput file select
function onSelectFilesChange(e) {
  loadFile(e.target.files[0]);
  // console.log(e.target.files[0]);
}

refs.selectFiles.addEventListener('change', onSelectFilesChange)