export const getData = key => {
  return JSON.parse(localStorage.getItem(key));
};

export const safeData = (key, data) => {
  let array = [];
  const jsonData = getData(key);
  if (jsonData) {
    array = [...jsonData, data];
  } else {
    array.push(data);
  }
  saveDataLocalStorage(key, array);
  // console.log(jsonData);
};

export const createDataObject = value => {
  return { value, date: Date.now(), checked: false };
};

export function saveDataLocalStorage(key, array) {
  localStorage.setItem(key, JSON.stringify(array));
}
