const BASE_URL = "https://dummyjson.com/";

export const getData = (url) => {
  return fetch(BASE_URL + url).then((data) => {
    if (data.ok) {
      return data.json();
    }
    throw new Error(data.statusText);
  });
};
