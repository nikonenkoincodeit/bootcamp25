import { initializeApp } from "firebase/app";
import { getStorage, ref as refStorage, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { getDatabase, ref, push, onValue } from "firebase/database";

import { firebaseConfig } from "../js/firebase-config";
import { toggleBtnContent, isChatVisible, getImgSend } from "../index";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

import { getArrayId } from "../utils"
import { messageMarkup, renderMarkup } from "../markup"

import { refs } from '../refs/refs';
const { chatBoxes } = refs;
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const storage = getStorage();

const db = getDatabase();
let arrayIdMessage = [];

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
  if (!data) return;
  const [value, array] = getArrayId(data, arrayIdMessage);
  arrayIdMessage = array;
  const userId = getUser().uid;
  const markup = messageMarkup(value, userId)
  renderMarkup(markup, chatBoxes)
});




export function loadFile(file) {
  // Upload file and metadata to the object 'images/mountains.jpg'
  const storageRef = refStorage(storage, 'images/' + file.name);
  const uploadTask = uploadBytesResumable(storageRef, file);

  // Listen for state changes, errors, and completion of the upload.
  uploadTask.on('state_changed',
    (snapshot) => {
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log('Upload is ' + progress + '% done');
      switch (snapshot.state) {
        case 'paused':
          console.log('Upload is paused');
          break;
        case 'running':
          console.log('Upload is running');
          break;
      }
    },
    (error) => {
      // A full list of error codes is available at
      // https://firebase.google.com/docs/storage/web/handle-errors
      switch (error.code) {
        case 'storage/unauthorized':
          // User doesn't have permission to access the object
          break;
        case 'storage/canceled':
          // User canceled the upload
          break;

        // ...

        case 'storage/unknown':
          // Unknown error occurred, inspect error.serverResponse
          break;
      }
    },
    () => {
      // Upload completed successfully, now we can get the download URL
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        const photoObj = getImgSend(downloadURL);
        addMessage(photoObj);
      });
    }
  );
}
