import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../firebaseConfig/firebaseConfig";
import { getDatabase, ref, set, get, update, push } from "firebase/database";

initializeApp(firebaseConfig);

const db = getDatabase();

export function addTaskToDb(objForDb) {
  set(ref(db, "task/" + objForDb.date), objForDb);
}

export function getTaskFromDb() {
  return get(ref(db, `task/`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        return snapshot.val();
      } else {
        console.log("No data available");
        console.log(snapshot);
        return null;
      }
    })
    .catch((error) => {
      console.error(error);
    });
}

export function updateTaskDB(idTask, isChecked) {
  const updates = { task: { [idTask]: { checked: isChecked } } };
  console.log(updates);

  update(ref(db), updates);
}

export const getData = (key) => {
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

export const createDataObject = (value) => {
  return { value, date: Date.now(), checked: false };
};

export function saveDataLocalStorage(key, array) {
  localStorage.setItem(key, JSON.stringify(array));
}
