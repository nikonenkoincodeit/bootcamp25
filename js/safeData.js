export const getData = key => {
  return localStorage.getItem(key);
};

export const safeData = (key, data) => {
  let array = [];
  const jsonData = getData(key);
  if (jsonData) {
    array = [...JSON.parse(jsonData), data];
  } else {
    array.push(data);
  }
  localStorage.setItem(key, JSON.stringify(array));
  // console.log(jsonData);
};

export const createDataObject = value => {
  return { value, date: Date.now(), checked: false };
};
