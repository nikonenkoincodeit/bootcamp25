import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../firebaseConfig/firebaseConfig";
import { getDatabase, ref, set, get, remove } from "firebase/database";

initializeApp(firebaseConfig);

const db = getDatabase();

export function addTaskToDb(objForDb) {
  try {
    set(ref(db, "task/" + objForDb.date), objForDb);
  } catch (error) {
    console.log(error);
  }
}

export function getTaskFromDb(key = "") {
  let url = "task/";
  if (key) {
    url += key;
  }

  return get(ref(db, url))
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
  getTaskFromDb(idTask)
    .then((data) => {
      data.checked = isChecked;
      return data;
    })
    .then((data) => addTaskToDb(data))
    .catch((error) => console.log(error));
}

export function deleteTask(id) {
  console.log(id);
  try {
    remove(ref(db, "task/" + id));
  } catch (error) {
    console.log(error);
  }
}
