import { initializeApp } from 'firebase/app'
import { firebaseConfig } from '../firebaseConfig/firebaseConfig';
import { getDatabase, ref, set, get } from "firebase/database";

initializeApp(firebaseConfig);

const db = getDatabase();

export function addTaskToDb(objForDb) {
  set(ref(db, 'task/' + objForDb.date), objForDb);
}

export function getTaskFromDb(idTask) {
  get(ref(db, `task/${idTask}`)).then((snapshot) => {
    if (snapshot.exists()) {
      console.log(snapshot.val());
    } else {
      console.log("No data available");
    }
  }).catch((error) => {
    console.error(error);
  });
}


export const getData = key => {
  // return JSON.parse(localStorage.getItem(key));
};

export const safeData = (key, data) => {
  //   let array = [];
  //   const jsonData = getData(key);
  //   if (jsonData) {
  //     array = [...jsonData, data];
  //   } else {
  //     array.push(data);
  //   }
  //   saveDataLocalStorage(key, array);
  //   // console.log(jsonData);
};

export const createDataObject = value => {
  return { value, date: Date.now(), checked: false };
};

export function saveDataLocalStorage(key, array) {
  localStorage.setItem(key, JSON.stringify(array));
}
