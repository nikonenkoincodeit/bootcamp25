import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";

import { sendData, getData, deleteItem, updateTaskDB } from "./service";
import { createMarkup } from "./markup";
import { formRef, listRef } from "./refs";

async function onSubmitForm(e) {
  e.preventDefault();

  const value = e.target.elements.message.value.trim();
  if (!value) return;
  try {
    const data = createObjData(value);
    const res = await sendData(data);
    const markup = createMarkup(res);
    addMarkup(listRef, markup);
  } catch (error) {
    console.log("error.message :>> ", error.message);
  }

  //.catch(console.log);
  console.log("e.target :>> ", value);
}

function createObjData(value) {
  return {
    value,
    checked: false,
  };
}

(async function () {
  try {
    const res = await getData();
    const markup = createListItems(res);
    addMarkup(listRef, markup);
  } catch (error) {
    console.log(error.message);
  }
})();

function createListItems(data) {
  return data.map((item) => createMarkup(item)).join("");
}

function addMarkup(element, markup) {
  element.insertAdjacentHTML("beforeend", markup);
}

async function onDeleteBtnClick(event) {
  const t = event.target;

  if (t.classList.contains("text")) {
    try {
      const isChecked = t.parentNode.classList.toggle("checked");
      const id = t.parentNode.dataset.id;
      const res = await updateTaskDB(id, isChecked);
      console.log(res);
    } catch (error) {
      console.log(error.message);
    }
    return;
  }

  if (t.classList.contains("button")) {
    try {
      t.parentNode.remove();
      const id = t.parentNode.dataset.id;
      await deleteItem(id);
    } catch (error) {
      console.log(error.message);
    }
  }
}

listRef.addEventListener("click", onDeleteBtnClick);
formRef.addEventListener("submit", onSubmitForm);

async function f1() {
  return 1;
}
