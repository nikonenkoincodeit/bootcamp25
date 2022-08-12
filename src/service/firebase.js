import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, onValue } from "firebase/database";

import { firebaseConfig } from "../js/firebase-config";
import { toggleBtnContent, isChatVisible } from "../index";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const db = getDatabase();

export const signIn = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log(user);
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
};

onAuthStateChanged(auth, (user) => {
  toggleBtnContent(user);
  isChatVisible(user);
});

export function signOutUser() {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
    })
    .catch((error) => {
      // An error happened.
    });
}

export function addMessage(data) {
  try {
    push(ref(db, 'chat/'), data);
  } catch (error) {
    throw new Error(error.message)
  }
}

export function getUser() {
  return auth.currentUser;
}

onValue(ref(db, 'chat/'), (snapshot) => {
  const data = snapshot.val();
  console.log(data);
});

