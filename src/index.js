import axios from 'axios';

import './css/styles.css';

import './js/1-json_all';
// import './js/2-json_id';
// import './js/3-fakestore';
// import './js/4-weather';
const url = class Users {
  #tableHead = `
   <thead>
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>City</th>
    </tr>
  </thead>`;
  constructor(axios, selector, url) {
    this.BASE_URL = url;
    this.axios = axios;
    this.parent = document.querySelector(selector);
    this.init();
    this._items = [];
  }
  get items() {
    return this._items;
  }
  set items(value) {
    this._items = value;
    const markup = this.createMarkup(this._items);
    this.addMarkup(markup);
  }
  init() {
    this.parent.addEventListener('click', this.onClick);
  }
  onClick = async () => {
    const { data } = await this.getData();
    this.items = data;
    console.log('data :>> ', data);
  };
  getData = () => {
    return this.axios.get(this.BASE_URL);
  };
  createMarkup = () => {
    return this.items
      .map(
        ({ name, email, address }) => `
              <tr>
                <td>${name}</td>
                <td>${email}</td>
                <td>${address.city}</td>
              </tr>
          `,
      )
      .join('');
  };
  addMarkup = markup => {
    this.parent.querySelector('table').insertAdjacentHTML('beforeend', this.#tableHead + markup);
  };
};

const users = new Users(axios, '#task-1', 'https://jsonplaceholder.typicode.com/users');
