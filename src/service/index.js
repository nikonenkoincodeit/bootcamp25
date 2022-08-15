import axios from "axios";
axios.defaults.baseURL = "http://localhost:3000/data";
axios.defaults.headers.post["Content-Type"] = "application/json; charset=UTF-8";

export const sendData = async (data) => {
  try {
    const response = await axios.post("/", data);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getData = async () => {
  try {
    const res = await axios.get("/");
    return res.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const deleteItem = async (id) => {
  try {
    const res = await axios.delete("/" + id);
    return res.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const updateTaskDB = async (id, checked) => {
  try {
    const res = await axios.patch("/" + id, { checked });
    return res.data;
  } catch (error) {
    throw new Error(error.message);
  }
};
