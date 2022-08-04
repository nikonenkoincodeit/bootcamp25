export const sendData = (key, data) => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    throw new Error(error);
  }
};

export const getData = (key) => {
  try {
    return localStorage.getItem(key);
  } catch (error) {
    throw new Error(error);
  }
};

export const removeData = (key) => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    throw new Error(error);
  }
};
