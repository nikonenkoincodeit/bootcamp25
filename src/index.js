import { formRef, listRef } from "./js/refs.js";
import { createMarkup } from "./js/markup.js";
import { addMarkup } from "./js/addMarkup.js";
import { createDataObject } from "./utils";
import {
  addTaskToDb,
  getTaskFromDb,
  updateTaskDB,
  deleteTask,
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
  event.target.reset();
};

getTaskFromDb()
  .then((tasks) => {
    console.log(tasks);
    if (tasks) {
      isDataInDB(tasks);
    }
  })
  .catch((error) => console.log(error));

function isDataInDB(data = {}) {
  const readyMarkup = Object.values(data)
    .map((el) => createMarkup(el))
    .join("");
  addMarkup(listRef, readyMarkup);
}

function onDeleteBtnClick(event) {
  if (event.target.classList.contains("text")) {
    const isChecked = event.target.parentNode.classList.toggle("checked");
    console.log(isChecked);
    const idTask = Number(event.target.parentNode.dataset.id);
    updateTaskDB(idTask, isChecked);
  }
  if (event.target.classList.contains("button")) {
    event.target.parentNode.remove();
    deleteTask(event.target.parentNode.dataset.id);
  }
}

formRef.addEventListener("submit", onSubmit);
listRef.addEventListener("click", onDeleteBtnClick);
