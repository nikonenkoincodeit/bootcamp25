export const createMarkup = ({ value, date, checked }) => {
  return `<li class="item ${checked ? 'checked' : ''}" data-id="${date}">
          <p class="text">${value}</p>
          <button class="button" type="button">x</button>
        </li>`;
};
