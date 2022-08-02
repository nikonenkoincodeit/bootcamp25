import { formRef, listRef } from './refs.js';
import { createMarkup } from './markup.js';
import { addMarkup } from './addMarkup.js';
import { safeData, createDataObject } from './safeData.js';
const onSubmit = event => {
  event.preventDefault();
  const inputValue = event.target.elements.message.value.trim();
  if (!inputValue) {
    return;
  }
  const markup = createMarkup(inputValue);
  addMarkup(listRef, markup);
  safeData('to-do-list', createDataObject(inputValue));
};

formRef.addEventListener('submit', onSubmit);

// <li class="item">
//   <p class="text">buy lemon</p>
//   <button class="button" type="button">
//     x
//   </button>
// </li>
