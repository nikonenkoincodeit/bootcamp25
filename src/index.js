import { formRef, listRef } from "./js/refs.js";
import { createMarkup } from "./js/markup.js";
import { addMarkup } from "./js/addMarkup.js";
import {
  safeData,
  createDataObject,
  getData,
  saveDataLocalStorage,
  addTaskToDb,
  getTaskFromDb,
  updateTaskDB,
} from "./js/safeData.js";

import "./style.css";

const onSubmit = (event) => {
  event.preventDefault();
  const inputValue = event.target.elements.message.value.trim();
  if (!inputValue) {
    return;
  }
  const object = createDataObject(inputValue);
  const markup = createMarkup(object);

  addMarkup(listRef, markup);
  addTaskToDb(object);
  // safeData('to-do-list', object);
  event.target.reset();
};

// isDataInLocalStorage();

getTaskFromDb()
  .then((tasks) => {
    console.log(tasks);
    if (tasks) {
      isDataInDB(tasks);
    }
  })
  .catch((error) => console.log(error));

// function isDataInLocalStorage() {
//   const data = getData("to-do-list");

//   if (!data) return;

//   const readyMarkup = data.map((el) => createMarkup(el)).join("");
//   addMarkup(listRef, readyMarkup);
// }
function isDataInDB(data = {}) {
  const readyMarkup = Object.values(data)
    .map((el) => createMarkup(el))
    .join("");
  addMarkup(listRef, readyMarkup);
}

// function onDeleteBtnClick(event) {
//   if (event.target.classList.contains("text")) {
//     event.target.parentNode.classList.toggle("checked");
//     const newData = getData("to-do-list").map((el) => {
//       if (Number(event.target.parentNode.dataset.id) === el.date) {
//         el.checked = !el.checked;
//       }
//       return el;
//     });
//     saveDataLocalStorage("to-do-list", newData);
//   }
//   if (event.target.classList.contains("button")) {
//     event.target.parentNode.remove();
//     getTaskFromDb(event.target.parentNode.dataset.id);
//     // const newData = getData('to-do-list').filter(
//     //   el => el.date !== Number(event.target.parentNode.dataset.id)
//     // );
//     // saveDataLocalStorage('to-do-list', newData);
//     return;
//   }
// }

function onDeleteBtnClick(event) {
  if (event.target.classList.contains("text")) {
    const isChecked = event.target.parentNode.classList.toggle("checked");
    console.log(isChecked);
    const idTask = Number(event.target.parentNode.dataset.id);
    updateTaskDB(idTask, isChecked);
  }
  if (event.target.classList.contains("button")) {
    event.target.parentNode.remove();
    getTaskFromDb(event.target.parentNode.dataset.id);
    // const newData = getData('to-do-list').filter(
    //   el => el.date !== Number(event.target.parentNode.dataset.id)
    // );
    // saveDataLocalStorage('to-do-list', newData);
    return;
  }
}

formRef.addEventListener("submit", onSubmit);
listRef.addEventListener("click", onDeleteBtnClick);
