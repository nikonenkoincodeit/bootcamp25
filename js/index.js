import { formRef, listRef } from './refs.js';
import { createMarkup } from './markup.js';
import { addMarkup } from './addMarkup.js';
import {
  safeData,
  createDataObject,
  getData,
  saveDataLocalStorage,
} from './safeData.js';

const onSubmit = event => {
  event.preventDefault();
  const inputValue = event.target.elements.message.value.trim();
  if (!inputValue) {
    return;
  }
  const object = createDataObject(inputValue);
  const markup = createMarkup(object);

  addMarkup(listRef, markup);
  safeData('to-do-list', object);
  event.target.reset();
};

formRef.addEventListener('submit', onSubmit);
listRef.addEventListener('click', onDeleteBtnClick);

isDataInLocalStorage();

function isDataInLocalStorage() {
  const data = getData('to-do-list');

  if (!data) return;

  const readyMarkup = data.map(el => createMarkup(el)).join('');
  addMarkup(listRef, readyMarkup);
}

function onDeleteBtnClick(event) {
  if (event.target.classList.contains('text')) {
    event.target.parentNode.classList.toggle('checked');
    const newData = getData('to-do-list').map(el => {
      if (Number(event.target.parentNode.dataset.id) === el.date) {
        el.checked = !el.checked;
      }
      return el;
    });
    saveDataLocalStorage('to-do-list', newData);
  }
  if (event.target.classList.contains('button')) {
    event.target.parentNode.remove();

    const newData = getData('to-do-list').filter(
      el => el.date !== Number(event.target.parentNode.dataset.id)
    );
    saveDataLocalStorage('to-do-list', newData);
    return;
  }
}
