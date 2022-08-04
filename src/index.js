import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

import { sendData, getData, removeData } from "./service";
import { FORM_DATA } from "./const";

const formRef = document.querySelector(".form");
const alertRef = document.querySelector(".alert");

const toggleAlert = (textError) => {
  alertRef.textContent = textError;
  alertRef.classList.remove("is-hidden");
  setTimeout(() => {
    alertRef.classList.add("is-hidden");
  }, 3000);
};

const getDataForm = (e) => {
  try {
    const { value, name } = e.target;
    let data = JSON.parse(getData(FORM_DATA));
    data = data ? data : {};
    data[name] = value;
    sendData(FORM_DATA, data);
  } catch (error) {
    toggleAlert(error.message);
  }
};

const addDataForm = () => {
  try {
    let data = JSON.parse(getData(FORM_DATA));
    if (!data) return;
    Object.entries(data).forEach(([key, value]) => {
      formRef.elements[key].value = value;
    });
  } catch (error) {
    toggleAlert(error.message);
  }
};
addDataForm();

const clearData = () => {
  try {
    removeData(FORM_DATA);
  } catch (error) {
    toggleAlert(error.message);
  }
};

const resetForm = (form) => form.reset();

const submitForm = (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const obj = {};
  formData.forEach((value, key) => {
    obj[key] = value;
  });
  console.log("obj :>> ", obj);
  resetForm(formRef);
  clearData();
};

formRef.addEventListener("submit", submitForm);
formRef.addEventListener("reset", clearData);
formRef.addEventListener("change", getDataForm);
